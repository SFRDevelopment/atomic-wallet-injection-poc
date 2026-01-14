(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [305, 32],
  {
    2673: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(4924),
        o = r(7201),
        s = i(r(230)),
        a = i(r(8)),
        h = r(19),
        u = r(27),
        l = r(805),
        f = r(840),
        c = i(r(28)),
        d = i(r(388)),
        p = i(r(7202)),
        m = i(r(7203)),
        g = i(r(7204)),
        w = i(r(815)),
        y = i(r(794)),
        v = r(2806);
      function b(t, e, r) {
        (M(t, e), e.set(t, r));
      }
      function M(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function _(t, e) {
        return t.get(A(t, e));
      }
      function E(t, e, r) {
        return (t.set(A(t, e), r), r);
      }
      function A(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const T = new y.default(() => r.e(19).then(r.t.bind(null, 3218, 7))),
        R = new y.default(() =>
          Promise.resolve().then(r.t.bind(null, 5895, 7)),
        ),
        S = new y.default(() =>
          Promise.resolve().then(r.t.bind(null, 2792, 7)),
        ),
        P = new y.default(() =>
          Promise.all([
            r.e(7),
            r.e(8),
            r.e(23),
            r.e(33),
            r.e(29),
            r.e(27),
            r.e(25),
          ]).then(r.t.bind(null, 2654, 7)),
        ),
        B = "Zilliqa",
        C = "ZIL",
        N = "m/44'/313'/0'/0/0",
        k = 12,
        x = "0",
        O = 25e3,
        L = 100,
        I = 1e3,
        U = 1,
        D = 1,
        G = o.bytes.pack(D, U),
        F = "8400000000000",
        q = 32769,
        j = {
          name: "Governance ZIL",
          ticker: "gZIL",
          decimal: 15,
          contract: "zil14pzuzq6v6pmmmrfjhczywguu0e97djepxt8g3e",
        };
      var Y = new WeakMap();
      class ZILCoin extends (0, v.HasBlockScanner)(
        (0, v.HasProviders)((0, v.HasTokensMixin)(s.default)),
      ) {
        constructor(t) {
          let {
            alias: e,
            notify: r,
            feeData: i,
            explorers: o,
            txWebUrl: s,
            socket: h,
            stakingContract: u,
            stakingProxyContract: l,
            id: f,
          } = t;
          const c = {
            id: f,
            alias: e,
            notify: r,
            name: B,
            ticker: C,
            decimal: k,
            unspendableBalance: x,
            explorers: o,
            txWebUrl: s,
            socket: h,
            stakingContract: u,
            feeData: i,
            stakingProxyContract: l,
          };
          (a.default.register("stake_validators_zil"),
            super(c),
            b(this, Y, void 0),
            (this.derivation = N),
            this.setExplorersModules([
              p.default,
              m.default,
              g.default,
              w.default,
            ]),
            this.loadExplorers(c),
            this.setFeeData(i),
            (this.zilliqa = new n.Zilliqa()),
            (this.balances = {}),
            (this.transactions = []),
            (this.tokens = {}),
            (this.nonce = 0));
        }
        setFeeData(t) {
          (void 0 === t && (t = {}),
            super.setFeeData(t),
            (this.fee = t.fee),
            (this.stakingProxyContract = t.stakingProxyContract),
            (this.stakingContract = t.stakingContract),
            (this.stakingFeeGas = String(t.stakingFeeGas) || O),
            (this.unstakingFeeGas = String(t.unstakingFeeGas) || O),
            (this.claimFeeGas = String(t.claimFeeGas) || O),
            (this.tokenFeeGas = String(t.tokenFeeGas) || I),
            (this.sendFeeGas = String(t.sendFeeGas) || L),
            (this.gasLimit = String(t.gasLimit)),
            (this.gasSettings = t.gasSettings),
            (this.reserveForStake = t.reserveForStake || F));
        }
        async loadWallet(t, e) {
          const r = (await T.get()).bip32.fromSeed(t),
            i = r.derivePath(this.derivation),
            n = await S.get();
          if (!i)
            throw new h.WalletError({
              type: u.LOAD_WALLET_ERROR,
              error: new Error("can't get a privateKey!"),
              instance: this,
            });
          const o = n.decode(i.toWIF()).toString("hex"),
            s = 64,
            a = 2;
          (E(Y, this, o.slice(a, a + s)),
            this.zilliqa.wallet.addByPrivateKey(_(Y, this)));
          const { toBech32Address: l, getAddressFromPrivateKey: f } =
            await R.get();
          return (
            (this.oldFormatAddressForBalance = f(_(Y, this)).toLowerCase()),
            (this.address = l(f(_(Y, this)))),
            { id: this.id, privateKey: _(Y, this), address: this.address }
          );
        }
        getNonce() {
          const t = Number(this.nonce) + 1;
          return ((this.nonce = t), t);
        }
        async getFee(t) {
          let {
            sendType: e = "send",
            userGasPrice: r = this.getGasPrice(e.toLowerCase()),
            gasLimit: i = this.getGasLimit(e.toLowerCase()),
            isToken: n,
          } = void 0 === t ? {} : t;
          return (
            n && (i = this.tokenFeeGas),
            new this.BN(r).mul(new this.BN(i || L))
          );
        }
        async getAddress() {
          if (_(Y, this)) {
            const { toBech32Address: t, getAddressFromPrivateKey: e } =
              await R.get();
            return t(e(_(Y, this)));
          }
          return new h.WalletError({
            type: u.WALLET_ERROR,
            error: new Error("privateKey is empty!"),
            instance: this,
          });
        }
        async validateAddress(t) {
          const e = await P.get();
          try {
            const { isValidChecksumAddress: e, fromBech32Address: r } =
              await R.get();
            return e(r(t));
          } catch (r) {
            return e.utils.isAddress(t, q);
          }
        }
        async toValidChecksumAddress(t) {
          let e = "";
          const { toChecksumAddress: r, fromBech32Address: i } = await R.get();
          try {
            e = r(t);
          } catch (n) {
            e = r(i(t));
          }
          return e.toLowerCase();
        }
        async createTransaction(t) {
          let { address: e, amount: r, sendType: i = "send" } = t;
          await this.getInfo();
          const { toChecksumAddress: n } = await R.get();
          return {
            version: G,
            toAddr: e.startsWith("0x") ? n(e) : e,
            amount: new this.BN(r),
            gasPrice: new this.BN(this.getGasPrice(i.toLowerCase())),
            gasLimit: o.Long.fromString(this.getGasLimit(i.toLowerCase())),
            nonce: this.getNonce(),
            pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
          };
        }
        async sendTransaction(t) {
          return this.getProvider("send").sendTransaction({
            rawtx: t,
            privateKey: _(Y, this),
          });
        }
        async getInfo() {
          const { balance: t, nonce: e } = await this.getProvider(
            "balance",
          ).getBalance(this.address, this.stakingContract);
          this.balance = t;
          try {
            const { staking: e, withdrawals: r } = await this.getProvider(
              "staking",
            ).getStakingBalance(this.address, this.stakingContract);
            ((this.balances.staking = e), (this.balances.withdrawals = r));
            const i = await this.getProvider("rewards").getRewards(
              this.address,
              this.stakingContract,
              e,
            );
            this.balances.rewards = i;
            const n = new this.BN(t || 0),
              s = new this.BN(n)
                .add(new this.BN(e.total))
                .add(new this.BN(r.total))
                .add(new this.BN(i.total))
                .toString(),
              a = o.units.fromQa(n, "zil"),
              h = this.getGasLimit("stake"),
              u = await this.getFee({ gasLimit: h || 1 }),
              l = new this.BN(n)
                .sub(new this.BN(u))
                .sub(new this.BN(this.reserveForStake));
            ((this.balances.available = a),
              (this.balances.availableForStake =
                Number(l) > 0 ? o.units.fromQa(l, "zil") : "0"),
              (this.balances.total = s));
          } catch (i) {
            console.error(i);
          }
          const r = Object.keys(this.tokens || {}).filter(Boolean);
          if (r.length > 0) {
            const t =
              (await this.getProvider("token").getTokenBalance(
                this.address,
                r,
              )) || [];
            t.forEach((t) => {
              this.tokens[t.contract].balance = t.balance;
            });
          }
          return (
            e &&
              (this.nonce =
                Number(e) > Number(this.nonce) ? Number(e) : this.nonce),
            { balance: t, balances: this.balances }
          );
        }
        async setPrivateKey(t) {
          (E(Y, this, t), this.zilliqa.wallet.addByPrivateKey(_(Y, this)));
          const { getAddressFromPrivateKey: e } = await R.get();
          this.oldFormatAddressForBalance = e(_(Y, this)).replace(/^0x/, "");
        }
        changeProviders(t) {
          const e = t.find((t) => !0 === t.balanceProvider);
          this.balanceProvider =
            e && "ViewblockExplorer" === e.className
              ? this.explorer
              : this.node;
        }
        updateCoinParamsFromServer(t) {
          (super.updateCoinParamsFromServer(t),
            this.changeProviders(t.explorers));
        }
        async createDelegationTransaction(t) {
          let { validator: e = "", amount: r = 0 } = t;
          await this.getInfo();
          const { fromBech32Address: i } = await R.get();
          return {
            version: G,
            toAddr: i(this.stakingProxyContract),
            amount: new this.BN(r),
            gasPrice: new this.BN(this.fee),
            gasLimit: o.Long.fromNumber(this.stakingFeeGas),
            nonce: this.getNonce(),
            pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
            data: JSON.stringify({
              _tag: "DelegateStake",
              params: [
                {
                  vname: "ssnaddr",
                  type: "ByStr20",
                  value: await this.toValidChecksumAddress(e),
                },
              ],
            }),
          };
        }
        async createUnDelegationTransaction(t) {
          let {
            validator: e = "",
            amount: r = 0,
            gasPrice: i = this.getGasPrice(),
            gasLimit: n = this.getGasLimit("unstake"),
          } = t;
          await this.getInfo();
          const { fromBech32Address: s } = await R.get();
          return {
            version: G,
            toAddr: s(this.stakingProxyContract),
            amount: new this.BN(0),
            gasPrice: new this.BN(i),
            gasLimit: o.Long.fromNumber(n),
            nonce: this.getNonce(),
            pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
            data: JSON.stringify({
              _tag: "WithdrawStakeAmt",
              params: [
                {
                  vname: "ssnaddr",
                  type: "ByStr20",
                  value: await this.toValidChecksumAddress(e),
                },
                { vname: "amt", type: "Uint128", value: String(r) },
              ],
            }),
          };
        }
        async completeWithdrawal() {
          await this.getInfo();
          const { fromBech32Address: t } = await R.get();
          return {
            version: G,
            toAddr: t(this.stakingProxyContract),
            amount: new this.BN(0),
            gasPrice: new this.BN(this.fee),
            gasLimit: o.Long.fromNumber(this.stakingFeeGas),
            nonce: this.getNonce(),
            pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
            data: JSON.stringify({ _tag: "CompleteWithdrawal", params: [] }),
          };
        }
        async createClaimTransaction(t) {
          let {
            validator: e = "",
            gasPrice: r = this.getGasPrice("claim"),
            gasLimit: i = this.getGasLimit("claim"),
          } = t;
          await this.getInfo();
          const { fromBech32Address: n } = await R.get();
          return {
            version: G,
            toAddr: n(this.stakingProxyContract),
            amount: new this.BN(0),
            gasPrice: new this.BN(r),
            gasLimit: o.Long.fromNumber(i),
            nonce: this.getNonce(),
            pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
            data: JSON.stringify({
              _tag: "WithdrawStakeRewards",
              params: [
                {
                  vname: "ssnaddr",
                  type: "ByStr20",
                  value: await this.toValidChecksumAddress(e),
                },
              ],
            }),
          };
        }
        async createTokenTransaction(t) {
          let { address: e, amount: r, contract: i } = t;
          await this.getInfo();
          const { fromBech32Address: n } = await R.get();
          return {
            version: G,
            toAddr: n(i),
            amount: new this.BN(0),
            gasPrice: new this.BN(this.fee),
            gasLimit: o.Long.fromNumber(this.tokenFeeGas),
            nonce: this.getNonce(),
            pubKey: this.zilliqa.wallet.defaultAccount.publicKey,
            data: JSON.stringify({
              _tag: "Transfer",
              params: [
                { vname: "to", type: "ByStr20", value: n(e) },
                { vname: "amount", type: "Uint128", value: String(r) },
              ],
            }),
          };
        }
        createToken(t) {
          return new l.ZILToken({ parent: this, ...t });
        }
        getExcludedTokenList() {
          return [];
        }
        async fetchUserTokens() {
          return [];
        }
        async loadTokensList(t) {
          const e = this.createToken({
            name: j.name,
            ticker: j.ticker,
            decimal: j.decimal,
            contract: j.contract,
            uniqueField: j.contract,
            visibility: !0,
            confirmed: !0,
            source: "list",
          });
          (t.addWallet(e), (this.tokens[e.contract] = e));
        }
        getGasLimit(t) {
          switch ((void 0 === t && (t = "send"), t)) {
            case "send":
              return this.sendFeeGas;
            case "stake":
              return this.stakingFeeGas;
            case "unstake":
              return this.unstakingFeeGas;
            case "claim":
              return this.claimFeeGas;
            default:
              return this.sendFeeGas;
          }
        }
        getGasPrice(t) {
          return (void 0 === t && (t = "send"), this.fee);
        }
        getGasRange(t) {
          return (
            void 0 === t && (t = "send"),
            this.feeData[t] ||
              this.feeData.gasSettings ||
              this.feeDataDefaults.gasSettings
          );
        }
        async getPredefinedValidators() {
          var t;
          const e = f.coinStakings.find(
            (t) => t.getName().toLowerCase() === this.ticker.toLowerCase(),
          );
          if (
            !e ||
            (null === (t = e.validators) || void 0 === t ? void 0 : t.length) >
              0
          )
            return;
          a.default.register("stake_validators_zil");
          const r = await a.default
            .get("stake_validators_zil")
            .catch(
              (t) => (
                c.default.error(t),
                d.default.find((t) => t.currency === this.ticker)
              ),
            );
          e.modifyPredefinedValidators(r);
        }
      }
      e.default = ZILCoin;
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    5894: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(5895),
        o = i(r(129));
      class ZilliqaAbstractExplorer extends o.default {
        getAllowedTickers() {
          return ["ZIL"];
        }
        getBech32Address(t) {
          return (0, n.toBech32Address)(t);
        }
        getValidChecksumAddress(t) {
          let e = "";
          try {
            e = (0, n.toChecksumAddress)(t);
          } catch (r) {
            e = (0, n.toChecksumAddress)((0, n.fromBech32Address)(t));
          }
          return e.toLowerCase();
        }
        toValidChecksumAddress(t) {
          return this.getValidChecksumAddress(t).replace(/^0x/, "");
        }
      }
      e.default = ZilliqaAbstractExplorer;
    },
    7201: function (t, e, r) {
      (function (t) {
        (function (t, r) {
          r(e);
        })(0, function (e) {
          "use strict";
          var r = function (t, e) {
              for (
                var r = [], i = [], n = t.toString(16), o = 0;
                o < n.length;
                o++
              )
                i[o] = n[o].toString();
              for (o = 0; o < e - n.length; o++) r.push("0");
              for (o = 0; o < n.length; o++) r.push(i[o]);
              return r;
            },
            i = function (t, e) {
              var r = t,
                i = [];
              while (r > 0) (i.push(255 & r), (r >>= 8));
              for (var n = e - i.length, o = 0; o < n; o++) i.unshift(0);
              return Uint8Array.from(i);
            },
            n = function (t) {
              for (
                var e = new Uint8Array(t.length / 2), r = 0;
                r < t.length;
                r += 2
              )
                e[r / 2] = parseInt(t.substring(r, r + 2), 16);
              return e;
            },
            o = function (t) {
              if (!t || !h(t)) return [];
              for (var e = [], r = 0; r < t.length; r++) {
                var i = t.charCodeAt(r),
                  n = i >> 8,
                  o = 255 & i;
                n ? e.push(n, o) : e.push(o);
              }
              return e;
            },
            s = function (t, e) {
              if (t >> 16 > 0 || e >> 16 > 0)
                throw new Error("Both a and b must be 16 bits or less");
              return (t << 16) + e;
            },
            a = function (t, e) {
              var r = o(t),
                i = o(e);
              if (r.length !== i.length) return !1;
              for (var n = 0, s = 0; s < r.length; s++) n |= r[s] ^ i[s];
              return 0 === n;
            },
            h = function (t) {
              var e = t.replace("0x", "");
              return /[0-9a-f]*$/i.test(e);
            },
            u = Object.freeze({
              __proto__: null,
              intToHexArray: r,
              intToByteArray: i,
              hexToByteArray: n,
              hexToIntArray: o,
              pack: s,
              isEqual: a,
              isHex: h,
            });
          function l(t) {
            var e = "function" === typeof Symbol && Symbol.iterator,
              r = e && t[e],
              i = 0;
            if (r) return r.call(t);
            if (t && "number" === typeof t.length)
              return {
                next: function () {
                  return (
                    t && i >= t.length && (t = void 0),
                    { value: t && t[i++], done: !t }
                  );
                },
              };
            throw new TypeError(
              e ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          }
          function f(t, e) {
            var r = "function" === typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var i,
              n,
              o = r.call(t),
              s = [];
            try {
              while ((void 0 === e || e-- > 0) && !(i = o.next()).done)
                s.push(i.value);
            } catch (a) {
              n = { error: a };
            } finally {
              try {
                i && !i.done && (r = o["return"]) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return s;
          }
          var c =
            "undefined" !== typeof globalThis
              ? globalThis
              : "undefined" !== typeof window
                ? window
                : "undefined" !== typeof t
                  ? t
                  : "undefined" !== typeof self
                    ? self
                    : {};
          function d(t) {
            return t &&
              t.__esModule &&
              Object.prototype.hasOwnProperty.call(t, "default")
              ? t["default"]
              : t;
          }
          function p(t) {
            if (t.__esModule) return t;
            var e = t.default;
            if ("function" == typeof e) {
              var r = function t() {
                if (this instanceof t) {
                  var r = [null];
                  r.push.apply(r, arguments);
                  var i = Function.bind.apply(e, r);
                  return new i();
                }
                return e.apply(this, arguments);
              };
              r.prototype = e.prototype;
            } else r = {};
            return (
              Object.defineProperty(r, "__esModule", { value: !0 }),
              Object.keys(t).forEach(function (e) {
                var i = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(
                  r,
                  e,
                  i.get
                    ? i
                    : {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        },
                      },
                );
              }),
              r
            );
          }
          var m = { exports: {} },
            g =
              "undefined" !== typeof t
                ? t
                : "undefined" !== typeof self
                  ? self
                  : "undefined" !== typeof window
                    ? window
                    : {},
            w = [],
            y = [],
            v = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
            b = !1;
          function M() {
            b = !0;
            for (
              var t =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                e = 0,
                r = t.length;
              e < r;
              ++e
            )
              ((w[e] = t[e]), (y[t.charCodeAt(e)] = e));
            ((y["-".charCodeAt(0)] = 62), (y["_".charCodeAt(0)] = 63));
          }
          function _(t) {
            var e, r, i, n, o, s;
            b || M();
            var a = t.length;
            if (a % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            ((o = "=" === t[a - 2] ? 2 : "=" === t[a - 1] ? 1 : 0),
              (s = new v((3 * a) / 4 - o)),
              (i = o > 0 ? a - 4 : a));
            var h = 0;
            for (e = 0, r = 0; e < i; e += 4, r += 3)
              ((n =
                (y[t.charCodeAt(e)] << 18) |
                (y[t.charCodeAt(e + 1)] << 12) |
                (y[t.charCodeAt(e + 2)] << 6) |
                y[t.charCodeAt(e + 3)]),
                (s[h++] = (n >> 16) & 255),
                (s[h++] = (n >> 8) & 255),
                (s[h++] = 255 & n));
            return (
              2 === o
                ? ((n =
                    (y[t.charCodeAt(e)] << 2) | (y[t.charCodeAt(e + 1)] >> 4)),
                  (s[h++] = 255 & n))
                : 1 === o &&
                  ((n =
                    (y[t.charCodeAt(e)] << 10) |
                    (y[t.charCodeAt(e + 1)] << 4) |
                    (y[t.charCodeAt(e + 2)] >> 2)),
                  (s[h++] = (n >> 8) & 255),
                  (s[h++] = 255 & n)),
              s
            );
          }
          function E(t) {
            return (
              w[(t >> 18) & 63] +
              w[(t >> 12) & 63] +
              w[(t >> 6) & 63] +
              w[63 & t]
            );
          }
          function A(t, e, r) {
            for (var i, n = [], o = e; o < r; o += 3)
              ((i = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2]), n.push(E(i)));
            return n.join("");
          }
          function T(t) {
            var e;
            b || M();
            for (
              var r = t.length,
                i = r % 3,
                n = "",
                o = [],
                s = 16383,
                a = 0,
                h = r - i;
              a < h;
              a += s
            )
              o.push(A(t, a, a + s > h ? h : a + s));
            return (
              1 === i
                ? ((e = t[r - 1]),
                  (n += w[e >> 2]),
                  (n += w[(e << 4) & 63]),
                  (n += "=="))
                : 2 === i &&
                  ((e = (t[r - 2] << 8) + t[r - 1]),
                  (n += w[e >> 10]),
                  (n += w[(e >> 4) & 63]),
                  (n += w[(e << 2) & 63]),
                  (n += "=")),
              o.push(n),
              o.join("")
            );
          }
          function R(t, e, r, i, n) {
            var o,
              s,
              a = 8 * n - i - 1,
              h = (1 << a) - 1,
              u = h >> 1,
              l = -7,
              f = r ? n - 1 : 0,
              c = r ? -1 : 1,
              d = t[e + f];
            for (
              f += c, o = d & ((1 << -l) - 1), d >>= -l, l += a;
              l > 0;
              o = 256 * o + t[e + f], f += c, l -= 8
            );
            for (
              s = o & ((1 << -l) - 1), o >>= -l, l += i;
              l > 0;
              s = 256 * s + t[e + f], f += c, l -= 8
            );
            if (0 === o) o = 1 - u;
            else {
              if (o === h) return s ? NaN : (1 / 0) * (d ? -1 : 1);
              ((s += Math.pow(2, i)), (o -= u));
            }
            return (d ? -1 : 1) * s * Math.pow(2, o - i);
          }
          function S(t, e, r, i, n, o) {
            var s,
              a,
              h,
              u = 8 * o - n - 1,
              l = (1 << u) - 1,
              f = l >> 1,
              c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              d = i ? 0 : o - 1,
              p = i ? 1 : -1,
              m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((a = isNaN(e) ? 1 : 0), (s = l))
                  : ((s = Math.floor(Math.log(e) / Math.LN2)),
                    e * (h = Math.pow(2, -s)) < 1 && (s--, (h *= 2)),
                    (e += s + f >= 1 ? c / h : c * Math.pow(2, 1 - f)),
                    e * h >= 2 && (s++, (h /= 2)),
                    s + f >= l
                      ? ((a = 0), (s = l))
                      : s + f >= 1
                        ? ((a = (e * h - 1) * Math.pow(2, n)), (s += f))
                        : ((a = e * Math.pow(2, f - 1) * Math.pow(2, n)),
                          (s = 0)));
              n >= 8;
              t[r + d] = 255 & a, d += p, a /= 256, n -= 8
            );
            for (
              s = (s << n) | a, u += n;
              u > 0;
              t[r + d] = 255 & s, d += p, s /= 256, u -= 8
            );
            t[r + d - p] |= 128 * m;
          }
          var P = {}.toString,
            B =
              Array.isArray ||
              function (t) {
                return "[object Array]" == P.call(t);
              },
            C = 50;
          O.TYPED_ARRAY_SUPPORT =
            void 0 === g.TYPED_ARRAY_SUPPORT || g.TYPED_ARRAY_SUPPORT;
          var N = k();
          function k() {
            return O.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
          }
          function x(t, e) {
            if (k() < e) throw new RangeError("Invalid typed array length");
            return (
              O.TYPED_ARRAY_SUPPORT
                ? ((t = new Uint8Array(e)), (t.__proto__ = O.prototype))
                : (null === t && (t = new O(e)), (t.length = e)),
              t
            );
          }
          function O(t, e, r) {
            if (!O.TYPED_ARRAY_SUPPORT && !(this instanceof O))
              return new O(t, e, r);
            if ("number" === typeof t) {
              if ("string" === typeof e)
                throw new Error(
                  "If encoding is specified then the first argument must be a string",
                );
              return D(this, t);
            }
            return L(this, t, e, r);
          }
          function L(t, e, r, i) {
            if ("number" === typeof e)
              throw new TypeError('"value" argument must not be a number');
            return "undefined" !== typeof ArrayBuffer &&
              e instanceof ArrayBuffer
              ? q(t, e, r, i)
              : "string" === typeof e
                ? G(t, e, r)
                : j(t, e);
          }
          function I(t) {
            if ("number" !== typeof t)
              throw new TypeError('"size" argument must be a number');
            if (t < 0)
              throw new RangeError('"size" argument must not be negative');
          }
          function U(t, e, r, i) {
            return (
              I(e),
              e <= 0
                ? x(t, e)
                : void 0 !== r
                  ? "string" === typeof i
                    ? x(t, e).fill(r, i)
                    : x(t, e).fill(r)
                  : x(t, e)
            );
          }
          function D(t, e) {
            if (
              (I(e), (t = x(t, e < 0 ? 0 : 0 | Y(e))), !O.TYPED_ARRAY_SUPPORT)
            )
              for (var r = 0; r < e; ++r) t[r] = 0;
            return t;
          }
          function G(t, e, r) {
            if (
              (("string" === typeof r && "" !== r) || (r = "utf8"),
              !O.isEncoding(r))
            )
              throw new TypeError('"encoding" must be a valid string encoding');
            var i = 0 | V(e, r);
            t = x(t, i);
            var n = t.write(e, r);
            return (n !== i && (t = t.slice(0, n)), t);
          }
          function F(t, e) {
            var r = e.length < 0 ? 0 : 0 | Y(e.length);
            t = x(t, r);
            for (var i = 0; i < r; i += 1) t[i] = 255 & e[i];
            return t;
          }
          function q(t, e, r, i) {
            if ((e.byteLength, r < 0 || e.byteLength < r))
              throw new RangeError("'offset' is out of bounds");
            if (e.byteLength < r + (i || 0))
              throw new RangeError("'length' is out of bounds");
            return (
              (e =
                void 0 === r && void 0 === i
                  ? new Uint8Array(e)
                  : void 0 === i
                    ? new Uint8Array(e, r)
                    : new Uint8Array(e, r, i)),
              O.TYPED_ARRAY_SUPPORT
                ? ((t = e), (t.__proto__ = O.prototype))
                : (t = F(t, e)),
              t
            );
          }
          function j(t, e) {
            if (z(e)) {
              var r = 0 | Y(e.length);
              return (
                (t = x(t, r)),
                0 === t.length ? t : (e.copy(t, 0, 0, r), t)
              );
            }
            if (e) {
              if (
                ("undefined" !== typeof ArrayBuffer &&
                  e.buffer instanceof ArrayBuffer) ||
                "length" in e
              )
                return "number" !== typeof e.length || St(e.length)
                  ? x(t, 0)
                  : F(t, e);
              if ("Buffer" === e.type && B(e.data)) return F(t, e.data);
            }
            throw new TypeError(
              "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
            );
          }
          function Y(t) {
            if (t >= k())
              throw new RangeError(
                "Attempt to allocate Buffer larger than maximum size: 0x" +
                  k().toString(16) +
                  " bytes",
              );
            return 0 | t;
          }
          function Z(t) {
            return (+t != t && (t = 0), O.alloc(+t));
          }
          function z(t) {
            return !(null == t || !t._isBuffer);
          }
          function V(t, e) {
            if (z(t)) return t.length;
            if (
              "undefined" !== typeof ArrayBuffer &&
              "function" === typeof ArrayBuffer.isView &&
              (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
            )
              return t.byteLength;
            "string" !== typeof t && (t = "" + t);
            var r = t.length;
            if (0 === r) return 0;
            for (var i = !1; ; )
              switch (e) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;
                case "utf8":
                case "utf-8":
                case void 0:
                  return _t(t).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;
                case "hex":
                  return r >>> 1;
                case "base64":
                  return Tt(t).length;
                default:
                  if (i) return _t(t).length;
                  ((e = ("" + e).toLowerCase()), (i = !0));
              }
          }
          function K(t, e, r) {
            var i = !1;
            if (((void 0 === e || e < 0) && (e = 0), e > this.length))
              return "";
            if (
              ((void 0 === r || r > this.length) && (r = this.length), r <= 0)
            )
              return "";
            if (((r >>>= 0), (e >>>= 0), r <= e)) return "";
            t || (t = "utf8");
            while (1)
              switch (t) {
                case "hex":
                  return ut(this, e, r);
                case "utf8":
                case "utf-8":
                  return nt(this, e, r);
                case "ascii":
                  return at(this, e, r);
                case "latin1":
                case "binary":
                  return ht(this, e, r);
                case "base64":
                  return it(this, e, r);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return lt(this, e, r);
                default:
                  if (i) throw new TypeError("Unknown encoding: " + t);
                  ((t = (t + "").toLowerCase()), (i = !0));
              }
          }
          function H(t, e, r) {
            var i = t[e];
            ((t[e] = t[r]), (t[r] = i));
          }
          function W(t, e, r, i, n) {
            if (0 === t.length) return -1;
            if (
              ("string" === typeof r
                ? ((i = r), (r = 0))
                : r > 2147483647
                  ? (r = 2147483647)
                  : r < -2147483648 && (r = -2147483648),
              (r = +r),
              isNaN(r) && (r = n ? 0 : t.length - 1),
              r < 0 && (r = t.length + r),
              r >= t.length)
            ) {
              if (n) return -1;
              r = t.length - 1;
            } else if (r < 0) {
              if (!n) return -1;
              r = 0;
            }
            if (("string" === typeof e && (e = O.from(e, i)), z(e)))
              return 0 === e.length ? -1 : J(t, e, r, i, n);
            if ("number" === typeof e)
              return (
                (e &= 255),
                O.TYPED_ARRAY_SUPPORT &&
                "function" === typeof Uint8Array.prototype.indexOf
                  ? n
                    ? Uint8Array.prototype.indexOf.call(t, e, r)
                    : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                  : J(t, [e], r, i, n)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function J(t, e, r, i, n) {
            var o,
              s = 1,
              a = t.length,
              h = e.length;
            if (
              void 0 !== i &&
              ((i = String(i).toLowerCase()),
              "ucs2" === i ||
                "ucs-2" === i ||
                "utf16le" === i ||
                "utf-16le" === i)
            ) {
              if (t.length < 2 || e.length < 2) return -1;
              ((s = 2), (a /= 2), (h /= 2), (r /= 2));
            }
            function u(t, e) {
              return 1 === s ? t[e] : t.readUInt16BE(e * s);
            }
            if (n) {
              var l = -1;
              for (o = r; o < a; o++)
                if (u(t, o) === u(e, -1 === l ? 0 : o - l)) {
                  if ((-1 === l && (l = o), o - l + 1 === h)) return l * s;
                } else (-1 !== l && (o -= o - l), (l = -1));
            } else
              for (r + h > a && (r = a - h), o = r; o >= 0; o--) {
                for (var f = !0, c = 0; c < h; c++)
                  if (u(t, o + c) !== u(e, c)) {
                    f = !1;
                    break;
                  }
                if (f) return o;
              }
            return -1;
          }
          function X(t, e, r, i) {
            r = Number(r) || 0;
            var n = t.length - r;
            i ? ((i = Number(i)), i > n && (i = n)) : (i = n);
            var o = e.length;
            if (o % 2 !== 0) throw new TypeError("Invalid hex string");
            i > o / 2 && (i = o / 2);
            for (var s = 0; s < i; ++s) {
              var a = parseInt(e.substr(2 * s, 2), 16);
              if (isNaN(a)) return s;
              t[r + s] = a;
            }
            return s;
          }
          function Q(t, e, r, i) {
            return Rt(_t(e, t.length - r), t, r, i);
          }
          function $(t, e, r, i) {
            return Rt(Et(e), t, r, i);
          }
          function tt(t, e, r, i) {
            return $(t, e, r, i);
          }
          function et(t, e, r, i) {
            return Rt(Tt(e), t, r, i);
          }
          function rt(t, e, r, i) {
            return Rt(At(e, t.length - r), t, r, i);
          }
          function it(t, e, r) {
            return 0 === e && r === t.length ? T(t) : T(t.slice(e, r));
          }
          function nt(t, e, r) {
            r = Math.min(t.length, r);
            var i = [],
              n = e;
            while (n < r) {
              var o,
                s,
                a,
                h,
                u = t[n],
                l = null,
                f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
              if (n + f <= r)
                switch (f) {
                  case 1:
                    u < 128 && (l = u);
                    break;
                  case 2:
                    ((o = t[n + 1]),
                      128 === (192 & o) &&
                        ((h = ((31 & u) << 6) | (63 & o)), h > 127 && (l = h)));
                    break;
                  case 3:
                    ((o = t[n + 1]),
                      (s = t[n + 2]),
                      128 === (192 & o) &&
                        128 === (192 & s) &&
                        ((h = ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)),
                        h > 2047 && (h < 55296 || h > 57343) && (l = h)));
                    break;
                  case 4:
                    ((o = t[n + 1]),
                      (s = t[n + 2]),
                      (a = t[n + 3]),
                      128 === (192 & o) &&
                        128 === (192 & s) &&
                        128 === (192 & a) &&
                        ((h =
                          ((15 & u) << 18) |
                          ((63 & o) << 12) |
                          ((63 & s) << 6) |
                          (63 & a)),
                        h > 65535 && h < 1114112 && (l = h)));
                }
              (null === l
                ? ((l = 65533), (f = 1))
                : l > 65535 &&
                  ((l -= 65536),
                  i.push(((l >>> 10) & 1023) | 55296),
                  (l = 56320 | (1023 & l))),
                i.push(l),
                (n += f));
            }
            return st(i);
          }
          ((O.poolSize = 8192),
            (O._augment = function (t) {
              return ((t.__proto__ = O.prototype), t);
            }),
            (O.from = function (t, e, r) {
              return L(null, t, e, r);
            }),
            O.TYPED_ARRAY_SUPPORT &&
              ((O.prototype.__proto__ = Uint8Array.prototype),
              (O.__proto__ = Uint8Array),
              "undefined" !== typeof Symbol &&
                Symbol.species &&
                O[Symbol.species]),
            (O.alloc = function (t, e, r) {
              return U(null, t, e, r);
            }),
            (O.allocUnsafe = function (t) {
              return D(null, t);
            }),
            (O.allocUnsafeSlow = function (t) {
              return D(null, t);
            }),
            (O.isBuffer = Pt),
            (O.compare = function (t, e) {
              if (!z(t) || !z(e))
                throw new TypeError("Arguments must be Buffers");
              if (t === e) return 0;
              for (
                var r = t.length, i = e.length, n = 0, o = Math.min(r, i);
                n < o;
                ++n
              )
                if (t[n] !== e[n]) {
                  ((r = t[n]), (i = e[n]));
                  break;
                }
              return r < i ? -1 : i < r ? 1 : 0;
            }),
            (O.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (O.concat = function (t, e) {
              if (!B(t))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              if (0 === t.length) return O.alloc(0);
              var r;
              if (void 0 === e)
                for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
              var i = O.allocUnsafe(e),
                n = 0;
              for (r = 0; r < t.length; ++r) {
                var o = t[r];
                if (!z(o))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers',
                  );
                (o.copy(i, n), (n += o.length));
              }
              return i;
            }),
            (O.byteLength = V),
            (O.prototype._isBuffer = !0),
            (O.prototype.swap16 = function () {
              var t = this.length;
              if (t % 2 !== 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 16-bits",
                );
              for (var e = 0; e < t; e += 2) H(this, e, e + 1);
              return this;
            }),
            (O.prototype.swap32 = function () {
              var t = this.length;
              if (t % 4 !== 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 32-bits",
                );
              for (var e = 0; e < t; e += 4)
                (H(this, e, e + 3), H(this, e + 1, e + 2));
              return this;
            }),
            (O.prototype.swap64 = function () {
              var t = this.length;
              if (t % 8 !== 0)
                throw new RangeError(
                  "Buffer size must be a multiple of 64-bits",
                );
              for (var e = 0; e < t; e += 8)
                (H(this, e, e + 7),
                  H(this, e + 1, e + 6),
                  H(this, e + 2, e + 5),
                  H(this, e + 3, e + 4));
              return this;
            }),
            (O.prototype.toString = function () {
              var t = 0 | this.length;
              return 0 === t
                ? ""
                : 0 === arguments.length
                  ? nt(this, 0, t)
                  : K.apply(this, arguments);
            }),
            (O.prototype.equals = function (t) {
              if (!z(t)) throw new TypeError("Argument must be a Buffer");
              return this === t || 0 === O.compare(this, t);
            }),
            (O.prototype.inspect = function () {
              var t = "",
                e = C;
              return (
                this.length > 0 &&
                  ((t = this.toString("hex", 0, e).match(/.{2}/g).join(" ")),
                  this.length > e && (t += " ... ")),
                "<Buffer " + t + ">"
              );
            }),
            (O.prototype.compare = function (t, e, r, i, n) {
              if (!z(t)) throw new TypeError("Argument must be a Buffer");
              if (
                (void 0 === e && (e = 0),
                void 0 === r && (r = t ? t.length : 0),
                void 0 === i && (i = 0),
                void 0 === n && (n = this.length),
                e < 0 || r > t.length || i < 0 || n > this.length)
              )
                throw new RangeError("out of range index");
              if (i >= n && e >= r) return 0;
              if (i >= n) return -1;
              if (e >= r) return 1;
              if (((e >>>= 0), (r >>>= 0), (i >>>= 0), (n >>>= 0), this === t))
                return 0;
              for (
                var o = n - i,
                  s = r - e,
                  a = Math.min(o, s),
                  h = this.slice(i, n),
                  u = t.slice(e, r),
                  l = 0;
                l < a;
                ++l
              )
                if (h[l] !== u[l]) {
                  ((o = h[l]), (s = u[l]));
                  break;
                }
              return o < s ? -1 : s < o ? 1 : 0;
            }),
            (O.prototype.includes = function (t, e, r) {
              return -1 !== this.indexOf(t, e, r);
            }),
            (O.prototype.indexOf = function (t, e, r) {
              return W(this, t, e, r, !0);
            }),
            (O.prototype.lastIndexOf = function (t, e, r) {
              return W(this, t, e, r, !1);
            }),
            (O.prototype.write = function (t, e, r, i) {
              if (void 0 === e) ((i = "utf8"), (r = this.length), (e = 0));
              else if (void 0 === r && "string" === typeof e)
                ((i = e), (r = this.length), (e = 0));
              else {
                if (!isFinite(e))
                  throw new Error(
                    "Buffer.write(string, encoding, offset[, length]) is no longer supported",
                  );
                ((e |= 0),
                  isFinite(r)
                    ? ((r |= 0), void 0 === i && (i = "utf8"))
                    : ((i = r), (r = void 0)));
              }
              var n = this.length - e;
              if (
                ((void 0 === r || r > n) && (r = n),
                (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
              )
                throw new RangeError("Attempt to write outside buffer bounds");
              i || (i = "utf8");
              for (var o = !1; ; )
                switch (i) {
                  case "hex":
                    return X(this, t, e, r);
                  case "utf8":
                  case "utf-8":
                    return Q(this, t, e, r);
                  case "ascii":
                    return $(this, t, e, r);
                  case "latin1":
                  case "binary":
                    return tt(this, t, e, r);
                  case "base64":
                    return et(this, t, e, r);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return rt(this, t, e, r);
                  default:
                    if (o) throw new TypeError("Unknown encoding: " + i);
                    ((i = ("" + i).toLowerCase()), (o = !0));
                }
            }),
            (O.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            }));
          var ot = 4096;
          function st(t) {
            var e = t.length;
            if (e <= ot) return String.fromCharCode.apply(String, t);
            var r = "",
              i = 0;
            while (i < e)
              r += String.fromCharCode.apply(String, t.slice(i, (i += ot)));
            return r;
          }
          function at(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n) i += String.fromCharCode(127 & t[n]);
            return i;
          }
          function ht(t, e, r) {
            var i = "";
            r = Math.min(t.length, r);
            for (var n = e; n < r; ++n) i += String.fromCharCode(t[n]);
            return i;
          }
          function ut(t, e, r) {
            var i = t.length;
            ((!e || e < 0) && (e = 0), (!r || r < 0 || r > i) && (r = i));
            for (var n = "", o = e; o < r; ++o) n += Mt(t[o]);
            return n;
          }
          function lt(t, e, r) {
            for (var i = t.slice(e, r), n = "", o = 0; o < i.length; o += 2)
              n += String.fromCharCode(i[o] + 256 * i[o + 1]);
            return n;
          }
          function ft(t, e, r) {
            if (t % 1 !== 0 || t < 0)
              throw new RangeError("offset is not uint");
            if (t + e > r)
              throw new RangeError("Trying to access beyond buffer length");
          }
          function ct(t, e, r, i, n, o) {
            if (!z(t))
              throw new TypeError(
                '"buffer" argument must be a Buffer instance',
              );
            if (e > n || e < o)
              throw new RangeError('"value" argument is out of bounds');
            if (r + i > t.length) throw new RangeError("Index out of range");
          }
          function dt(t, e, r, i) {
            e < 0 && (e = 65535 + e + 1);
            for (var n = 0, o = Math.min(t.length - r, 2); n < o; ++n)
              t[r + n] =
                (e & (255 << (8 * (i ? n : 1 - n)))) >>> (8 * (i ? n : 1 - n));
          }
          function pt(t, e, r, i) {
            e < 0 && (e = 4294967295 + e + 1);
            for (var n = 0, o = Math.min(t.length - r, 4); n < o; ++n)
              t[r + n] = (e >>> (8 * (i ? n : 3 - n))) & 255;
          }
          function mt(t, e, r, i, n, o) {
            if (r + i > t.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function gt(t, e, r, i, n) {
            return (n || mt(t, e, r, 4), S(t, e, r, i, 23, 4), r + 4);
          }
          function wt(t, e, r, i, n) {
            return (n || mt(t, e, r, 8), S(t, e, r, i, 52, 8), r + 8);
          }
          ((O.prototype.slice = function (t, e) {
            var r,
              i = this.length;
            if (
              ((t = ~~t),
              (e = void 0 === e ? i : ~~e),
              t < 0 ? ((t += i), t < 0 && (t = 0)) : t > i && (t = i),
              e < 0 ? ((e += i), e < 0 && (e = 0)) : e > i && (e = i),
              e < t && (e = t),
              O.TYPED_ARRAY_SUPPORT)
            )
              ((r = this.subarray(t, e)), (r.__proto__ = O.prototype));
            else {
              var n = e - t;
              r = new O(n, void 0);
              for (var o = 0; o < n; ++o) r[o] = this[o + t];
            }
            return r;
          }),
            (O.prototype.readUIntLE = function (t, e, r) {
              ((t |= 0), (e |= 0), r || ft(t, e, this.length));
              var i = this[t],
                n = 1,
                o = 0;
              while (++o < e && (n *= 256)) i += this[t + o] * n;
              return i;
            }),
            (O.prototype.readUIntBE = function (t, e, r) {
              ((t |= 0), (e |= 0), r || ft(t, e, this.length));
              var i = this[t + --e],
                n = 1;
              while (e > 0 && (n *= 256)) i += this[t + --e] * n;
              return i;
            }),
            (O.prototype.readUInt8 = function (t, e) {
              return (e || ft(t, 1, this.length), this[t]);
            }),
            (O.prototype.readUInt16LE = function (t, e) {
              return (e || ft(t, 2, this.length), this[t] | (this[t + 1] << 8));
            }),
            (O.prototype.readUInt16BE = function (t, e) {
              return (e || ft(t, 2, this.length), (this[t] << 8) | this[t + 1]);
            }),
            (O.prototype.readUInt32LE = function (t, e) {
              return (
                e || ft(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
            (O.prototype.readUInt32BE = function (t, e) {
              return (
                e || ft(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
            (O.prototype.readIntLE = function (t, e, r) {
              ((t |= 0), (e |= 0), r || ft(t, e, this.length));
              var i = this[t],
                n = 1,
                o = 0;
              while (++o < e && (n *= 256)) i += this[t + o] * n;
              return ((n *= 128), i >= n && (i -= Math.pow(2, 8 * e)), i);
            }),
            (O.prototype.readIntBE = function (t, e, r) {
              ((t |= 0), (e |= 0), r || ft(t, e, this.length));
              var i = e,
                n = 1,
                o = this[t + --i];
              while (i > 0 && (n *= 256)) o += this[t + --i] * n;
              return ((n *= 128), o >= n && (o -= Math.pow(2, 8 * e)), o);
            }),
            (O.prototype.readInt8 = function (t, e) {
              return (
                e || ft(t, 1, this.length),
                128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
              );
            }),
            (O.prototype.readInt16LE = function (t, e) {
              e || ft(t, 2, this.length);
              var r = this[t] | (this[t + 1] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (O.prototype.readInt16BE = function (t, e) {
              e || ft(t, 2, this.length);
              var r = this[t + 1] | (this[t] << 8);
              return 32768 & r ? 4294901760 | r : r;
            }),
            (O.prototype.readInt32LE = function (t, e) {
              return (
                e || ft(t, 4, this.length),
                this[t] |
                  (this[t + 1] << 8) |
                  (this[t + 2] << 16) |
                  (this[t + 3] << 24)
              );
            }),
            (O.prototype.readInt32BE = function (t, e) {
              return (
                e || ft(t, 4, this.length),
                (this[t] << 24) |
                  (this[t + 1] << 16) |
                  (this[t + 2] << 8) |
                  this[t + 3]
              );
            }),
            (O.prototype.readFloatLE = function (t, e) {
              return (e || ft(t, 4, this.length), R(this, t, !0, 23, 4));
            }),
            (O.prototype.readFloatBE = function (t, e) {
              return (e || ft(t, 4, this.length), R(this, t, !1, 23, 4));
            }),
            (O.prototype.readDoubleLE = function (t, e) {
              return (e || ft(t, 8, this.length), R(this, t, !0, 52, 8));
            }),
            (O.prototype.readDoubleBE = function (t, e) {
              return (e || ft(t, 8, this.length), R(this, t, !1, 52, 8));
            }),
            (O.prototype.writeUIntLE = function (t, e, r, i) {
              if (((t = +t), (e |= 0), (r |= 0), !i)) {
                var n = Math.pow(2, 8 * r) - 1;
                ct(this, t, e, r, n, 0);
              }
              var o = 1,
                s = 0;
              this[e] = 255 & t;
              while (++s < r && (o *= 256)) this[e + s] = (t / o) & 255;
              return e + r;
            }),
            (O.prototype.writeUIntBE = function (t, e, r, i) {
              if (((t = +t), (e |= 0), (r |= 0), !i)) {
                var n = Math.pow(2, 8 * r) - 1;
                ct(this, t, e, r, n, 0);
              }
              var o = r - 1,
                s = 1;
              this[e + o] = 255 & t;
              while (--o >= 0 && (s *= 256)) this[e + o] = (t / s) & 255;
              return e + r;
            }),
            (O.prototype.writeUInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 1, 255, 0),
                O.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (O.prototype.writeUInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 2, 65535, 0),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                  : dt(this, t, e, !0),
                e + 2
              );
            }),
            (O.prototype.writeUInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 2, 65535, 0),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                  : dt(this, t, e, !1),
                e + 2
              );
            }),
            (O.prototype.writeUInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 4, 4294967295, 0),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t))
                  : pt(this, t, e, !0),
                e + 4
              );
            }),
            (O.prototype.writeUInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 4, 4294967295, 0),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t))
                  : pt(this, t, e, !1),
                e + 4
              );
            }),
            (O.prototype.writeIntLE = function (t, e, r, i) {
              if (((t = +t), (e |= 0), !i)) {
                var n = Math.pow(2, 8 * r - 1);
                ct(this, t, e, r, n - 1, -n);
              }
              var o = 0,
                s = 1,
                a = 0;
              this[e] = 255 & t;
              while (++o < r && (s *= 256))
                (t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                  (this[e + o] = (((t / s) >> 0) - a) & 255));
              return e + r;
            }),
            (O.prototype.writeIntBE = function (t, e, r, i) {
              if (((t = +t), (e |= 0), !i)) {
                var n = Math.pow(2, 8 * r - 1);
                ct(this, t, e, r, n - 1, -n);
              }
              var o = r - 1,
                s = 1,
                a = 0;
              this[e + o] = 255 & t;
              while (--o >= 0 && (s *= 256))
                (t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                  (this[e + o] = (((t / s) >> 0) - a) & 255));
              return e + r;
            }),
            (O.prototype.writeInt8 = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 1, 127, -128),
                O.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                t < 0 && (t = 255 + t + 1),
                (this[e] = 255 & t),
                e + 1
              );
            }),
            (O.prototype.writeInt16LE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 2, 32767, -32768),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                  : dt(this, t, e, !0),
                e + 2
              );
            }),
            (O.prototype.writeInt16BE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 2, 32767, -32768),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                  : dt(this, t, e, !1),
                e + 2
              );
            }),
            (O.prototype.writeInt32LE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 4, 2147483647, -2147483648),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24))
                  : pt(this, t, e, !0),
                e + 4
              );
            }),
            (O.prototype.writeInt32BE = function (t, e, r) {
              return (
                (t = +t),
                (e |= 0),
                r || ct(this, t, e, 4, 2147483647, -2147483648),
                t < 0 && (t = 4294967295 + t + 1),
                O.TYPED_ARRAY_SUPPORT
                  ? ((this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t))
                  : pt(this, t, e, !1),
                e + 4
              );
            }),
            (O.prototype.writeFloatLE = function (t, e, r) {
              return gt(this, t, e, !0, r);
            }),
            (O.prototype.writeFloatBE = function (t, e, r) {
              return gt(this, t, e, !1, r);
            }),
            (O.prototype.writeDoubleLE = function (t, e, r) {
              return wt(this, t, e, !0, r);
            }),
            (O.prototype.writeDoubleBE = function (t, e, r) {
              return wt(this, t, e, !1, r);
            }),
            (O.prototype.copy = function (t, e, r, i) {
              if (
                (r || (r = 0),
                i || 0 === i || (i = this.length),
                e >= t.length && (e = t.length),
                e || (e = 0),
                i > 0 && i < r && (i = r),
                i === r)
              )
                return 0;
              if (0 === t.length || 0 === this.length) return 0;
              if (e < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length)
                throw new RangeError("sourceStart out of bounds");
              if (i < 0) throw new RangeError("sourceEnd out of bounds");
              (i > this.length && (i = this.length),
                t.length - e < i - r && (i = t.length - e + r));
              var n,
                o = i - r;
              if (this === t && r < e && e < i)
                for (n = o - 1; n >= 0; --n) t[n + e] = this[n + r];
              else if (o < 1e3 || !O.TYPED_ARRAY_SUPPORT)
                for (n = 0; n < o; ++n) t[n + e] = this[n + r];
              else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
              return o;
            }),
            (O.prototype.fill = function (t, e, r, i) {
              if ("string" === typeof t) {
                if (
                  ("string" === typeof e
                    ? ((i = e), (e = 0), (r = this.length))
                    : "string" === typeof r && ((i = r), (r = this.length)),
                  1 === t.length)
                ) {
                  var n = t.charCodeAt(0);
                  n < 256 && (t = n);
                }
                if (void 0 !== i && "string" !== typeof i)
                  throw new TypeError("encoding must be a string");
                if ("string" === typeof i && !O.isEncoding(i))
                  throw new TypeError("Unknown encoding: " + i);
              } else "number" === typeof t && (t &= 255);
              if (e < 0 || this.length < e || this.length < r)
                throw new RangeError("Out of range index");
              if (r <= e) return this;
              var o;
              if (
                ((e >>>= 0),
                (r = void 0 === r ? this.length : r >>> 0),
                t || (t = 0),
                "number" === typeof t)
              )
                for (o = e; o < r; ++o) this[o] = t;
              else {
                var s = z(t) ? t : _t(new O(t, i).toString()),
                  a = s.length;
                for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
              }
              return this;
            }));
          var yt = /[^+\/0-9A-Za-z-_]/g;
          function vt(t) {
            if (((t = bt(t).replace(yt, "")), t.length < 2)) return "";
            while (t.length % 4 !== 0) t += "=";
            return t;
          }
          function bt(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }
          function Mt(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16);
          }
          function _t(t, e) {
            var r;
            e = e || 1 / 0;
            for (var i = t.length, n = null, o = [], s = 0; s < i; ++s) {
              if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
                if (!n) {
                  if (r > 56319) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  if (s + 1 === i) {
                    (e -= 3) > -1 && o.push(239, 191, 189);
                    continue;
                  }
                  n = r;
                  continue;
                }
                if (r < 56320) {
                  ((e -= 3) > -1 && o.push(239, 191, 189), (n = r));
                  continue;
                }
                r = 65536 + (((n - 55296) << 10) | (r - 56320));
              } else n && (e -= 3) > -1 && o.push(239, 191, 189);
              if (((n = null), r < 128)) {
                if ((e -= 1) < 0) break;
                o.push(r);
              } else if (r < 2048) {
                if ((e -= 2) < 0) break;
                o.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((e -= 3) < 0) break;
                o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((e -= 4) < 0) break;
                o.push(
                  (r >> 18) | 240,
                  ((r >> 12) & 63) | 128,
                  ((r >> 6) & 63) | 128,
                  (63 & r) | 128,
                );
              }
            }
            return o;
          }
          function Et(t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r));
            return e;
          }
          function At(t, e) {
            for (var r, i, n, o = [], s = 0; s < t.length; ++s) {
              if ((e -= 2) < 0) break;
              ((r = t.charCodeAt(s)),
                (i = r >> 8),
                (n = r % 256),
                o.push(n),
                o.push(i));
            }
            return o;
          }
          function Tt(t) {
            return _(vt(t));
          }
          function Rt(t, e, r, i) {
            for (var n = 0; n < i; ++n) {
              if (n + r >= e.length || n >= t.length) break;
              e[n + r] = t[n];
            }
            return n;
          }
          function St(t) {
            return t !== t;
          }
          function Pt(t) {
            return null != t && (!!t._isBuffer || Bt(t) || Ct(t));
          }
          function Bt(t) {
            return (
              !!t.constructor &&
              "function" === typeof t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            );
          }
          function Ct(t) {
            return (
              "function" === typeof t.readFloatLE &&
              "function" === typeof t.slice &&
              Bt(t.slice(0, 0))
            );
          }
          var Nt = Object.freeze({
              __proto__: null,
              Buffer: O,
              INSPECT_MAX_BYTES: C,
              SlowBuffer: Z,
              isBuffer: Pt,
              kMaxLength: N,
            }),
            kt = p(Nt);
          (m.exports,
            (function (t) {
              (function (t, e) {
                function r(t, e) {
                  if (!t) throw new Error(e || "Assertion failed");
                }
                function i(t, e) {
                  t.super_ = e;
                  var r = function () {};
                  ((r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.prototype.constructor = t));
                }
                function n(t, e, r) {
                  if (n.isBN(t)) return t;
                  ((this.negative = 0),
                    (this.words = null),
                    (this.length = 0),
                    (this.red = null),
                    null !== t &&
                      (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                      this._init(t || 0, e || 10, r || "be")));
                }
                var o;
                ("object" === typeof t ? (t.exports = n) : (e.BN = n),
                  (n.BN = n),
                  (n.wordSize = 26));
                try {
                  o =
                    "undefined" !== typeof window &&
                    "undefined" !== typeof window.Buffer
                      ? window.Buffer
                      : kt.Buffer;
                } catch (R) {}
                function s(t, e) {
                  var r = t.charCodeAt(e);
                  return r >= 65 && r <= 70
                    ? r - 55
                    : r >= 97 && r <= 102
                      ? r - 87
                      : (r - 48) & 15;
                }
                function a(t, e, r) {
                  var i = s(t, r);
                  return (r - 1 >= e && (i |= s(t, r - 1) << 4), i);
                }
                function h(t, e, r, i) {
                  for (
                    var n = 0, o = Math.min(t.length, r), s = e;
                    s < o;
                    s++
                  ) {
                    var a = t.charCodeAt(s) - 48;
                    ((n *= i),
                      (n += a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a));
                  }
                  return n;
                }
                ((n.isBN = function (t) {
                  return (
                    t instanceof n ||
                    (null !== t &&
                      "object" === typeof t &&
                      t.constructor.wordSize === n.wordSize &&
                      Array.isArray(t.words))
                  );
                }),
                  (n.max = function (t, e) {
                    return t.cmp(e) > 0 ? t : e;
                  }),
                  (n.min = function (t, e) {
                    return t.cmp(e) < 0 ? t : e;
                  }),
                  (n.prototype._init = function (t, e, i) {
                    if ("number" === typeof t) return this._initNumber(t, e, i);
                    if ("object" === typeof t) return this._initArray(t, e, i);
                    ("hex" === e && (e = 16),
                      r(e === (0 | e) && e >= 2 && e <= 36),
                      (t = t.toString().replace(/\s+/g, "")));
                    var n = 0;
                    ("-" === t[0] && (n++, (this.negative = 1)),
                      n < t.length &&
                        (16 === e
                          ? this._parseHex(t, n, i)
                          : (this._parseBase(t, e, n),
                            "le" === i &&
                              this._initArray(this.toArray(), e, i))));
                  }),
                  (n.prototype._initNumber = function (t, e, i) {
                    (t < 0 && ((this.negative = 1), (t = -t)),
                      t < 67108864
                        ? ((this.words = [67108863 & t]), (this.length = 1))
                        : t < 4503599627370496
                          ? ((this.words = [
                              67108863 & t,
                              (t / 67108864) & 67108863,
                            ]),
                            (this.length = 2))
                          : (r(t < 9007199254740992),
                            (this.words = [
                              67108863 & t,
                              (t / 67108864) & 67108863,
                              1,
                            ]),
                            (this.length = 3)),
                      "le" === i && this._initArray(this.toArray(), e, i));
                  }),
                  (n.prototype._initArray = function (t, e, i) {
                    if ((r("number" === typeof t.length), t.length <= 0))
                      return ((this.words = [0]), (this.length = 1), this);
                    ((this.length = Math.ceil(t.length / 3)),
                      (this.words = new Array(this.length)));
                    for (var n = 0; n < this.length; n++) this.words[n] = 0;
                    var o,
                      s,
                      a = 0;
                    if ("be" === i)
                      for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                        ((s = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                          (this.words[o] |= (s << a) & 67108863),
                          (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                          (a += 24),
                          a >= 26 && ((a -= 26), o++));
                    else if ("le" === i)
                      for (n = 0, o = 0; n < t.length; n += 3)
                        ((s = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                          (this.words[o] |= (s << a) & 67108863),
                          (this.words[o + 1] = (s >>> (26 - a)) & 67108863),
                          (a += 24),
                          a >= 26 && ((a -= 26), o++));
                    return this.strip();
                  }),
                  (n.prototype._parseHex = function (t, e, r) {
                    ((this.length = Math.ceil((t.length - e) / 6)),
                      (this.words = new Array(this.length)));
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var n,
                      o = 0,
                      s = 0;
                    if ("be" === r)
                      for (i = t.length - 1; i >= e; i -= 2)
                        ((n = a(t, e, i) << o),
                          (this.words[s] |= 67108863 & n),
                          o >= 18
                            ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                            : (o += 8));
                    else {
                      var h = t.length - e;
                      for (i = h % 2 === 0 ? e + 1 : e; i < t.length; i += 2)
                        ((n = a(t, e, i) << o),
                          (this.words[s] |= 67108863 & n),
                          o >= 18
                            ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                            : (o += 8));
                    }
                    this.strip();
                  }),
                  (n.prototype._parseBase = function (t, e, r) {
                    ((this.words = [0]), (this.length = 1));
                    for (var i = 0, n = 1; n <= 67108863; n *= e) i++;
                    (i--, (n = (n / e) | 0));
                    for (
                      var o = t.length - r,
                        s = o % i,
                        a = Math.min(o, o - s) + r,
                        u = 0,
                        l = r;
                      l < a;
                      l += i
                    )
                      ((u = h(t, l, l + i, e)),
                        this.imuln(n),
                        this.words[0] + u < 67108864
                          ? (this.words[0] += u)
                          : this._iaddn(u));
                    if (0 !== s) {
                      var f = 1;
                      for (u = h(t, l, t.length, e), l = 0; l < s; l++) f *= e;
                      (this.imuln(f),
                        this.words[0] + u < 67108864
                          ? (this.words[0] += u)
                          : this._iaddn(u));
                    }
                    this.strip();
                  }),
                  (n.prototype.copy = function (t) {
                    t.words = new Array(this.length);
                    for (var e = 0; e < this.length; e++)
                      t.words[e] = this.words[e];
                    ((t.length = this.length),
                      (t.negative = this.negative),
                      (t.red = this.red));
                  }),
                  (n.prototype.clone = function () {
                    var t = new n(null);
                    return (this.copy(t), t);
                  }),
                  (n.prototype._expand = function (t) {
                    while (this.length < t) this.words[this.length++] = 0;
                    return this;
                  }),
                  (n.prototype.strip = function () {
                    while (this.length > 1 && 0 === this.words[this.length - 1])
                      this.length--;
                    return this._normSign();
                  }),
                  (n.prototype._normSign = function () {
                    return (
                      1 === this.length &&
                        0 === this.words[0] &&
                        (this.negative = 0),
                      this
                    );
                  }),
                  (n.prototype.inspect = function () {
                    return (
                      (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                    );
                  }));
                var u = [
                    "",
                    "0",
                    "00",
                    "000",
                    "0000",
                    "00000",
                    "000000",
                    "0000000",
                    "00000000",
                    "000000000",
                    "0000000000",
                    "00000000000",
                    "000000000000",
                    "0000000000000",
                    "00000000000000",
                    "000000000000000",
                    "0000000000000000",
                    "00000000000000000",
                    "000000000000000000",
                    "0000000000000000000",
                    "00000000000000000000",
                    "000000000000000000000",
                    "0000000000000000000000",
                    "00000000000000000000000",
                    "000000000000000000000000",
                    "0000000000000000000000000",
                  ],
                  l = [
                    0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6,
                    6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
                  ],
                  f = [
                    0, 0, 33554432, 43046721, 16777216, 48828125, 60466176,
                    40353607, 16777216, 43046721, 1e7, 19487171, 35831808,
                    62748517, 7529536, 11390625, 16777216, 24137569, 34012224,
                    47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625,
                    11881376, 14348907, 17210368, 20511149, 243e5, 28629151,
                    33554432, 39135393, 45435424, 52521875, 60466176,
                  ];
                function c(t) {
                  for (
                    var e = new Array(t.bitLength()), r = 0;
                    r < e.length;
                    r++
                  ) {
                    var i = (r / 26) | 0,
                      n = r % 26;
                    e[r] = (t.words[i] & (1 << n)) >>> n;
                  }
                  return e;
                }
                function d(t, e, r) {
                  r.negative = e.negative ^ t.negative;
                  var i = (t.length + e.length) | 0;
                  ((r.length = i), (i = (i - 1) | 0));
                  var n = 0 | t.words[0],
                    o = 0 | e.words[0],
                    s = n * o,
                    a = 67108863 & s,
                    h = (s / 67108864) | 0;
                  r.words[0] = a;
                  for (var u = 1; u < i; u++) {
                    for (
                      var l = h >>> 26,
                        f = 67108863 & h,
                        c = Math.min(u, e.length - 1),
                        d = Math.max(0, u - t.length + 1);
                      d <= c;
                      d++
                    ) {
                      var p = (u - d) | 0;
                      ((n = 0 | t.words[p]),
                        (o = 0 | e.words[d]),
                        (s = n * o + f),
                        (l += (s / 67108864) | 0),
                        (f = 67108863 & s));
                    }
                    ((r.words[u] = 0 | f), (h = 0 | l));
                  }
                  return (
                    0 !== h ? (r.words[u] = 0 | h) : r.length--,
                    r.strip()
                  );
                }
                ((n.prototype.toString = function (t, e) {
                  var i;
                  if (
                    ((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)
                  ) {
                    i = "";
                    for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                      var a = this.words[s],
                        h = (16777215 & ((a << n) | o)).toString(16);
                      ((o = (a >>> (24 - n)) & 16777215),
                        (i =
                          0 !== o || s !== this.length - 1
                            ? u[6 - h.length] + h + i
                            : h + i),
                        (n += 2),
                        n >= 26 && ((n -= 26), s--));
                    }
                    0 !== o && (i = o.toString(16) + i);
                    while (i.length % e !== 0) i = "0" + i;
                    return (0 !== this.negative && (i = "-" + i), i);
                  }
                  if (t === (0 | t) && t >= 2 && t <= 36) {
                    var c = l[t],
                      d = f[t];
                    i = "";
                    var p = this.clone();
                    p.negative = 0;
                    while (!p.isZero()) {
                      var m = p.modn(d).toString(t);
                      ((p = p.idivn(d)),
                        (i = p.isZero() ? m + i : u[c - m.length] + m + i));
                    }
                    this.isZero() && (i = "0" + i);
                    while (i.length % e !== 0) i = "0" + i;
                    return (0 !== this.negative && (i = "-" + i), i);
                  }
                  r(!1, "Base should be between 2 and 36");
                }),
                  (n.prototype.toNumber = function () {
                    var t = this.words[0];
                    return (
                      2 === this.length
                        ? (t += 67108864 * this.words[1])
                        : 3 === this.length && 1 === this.words[2]
                          ? (t += 4503599627370496 + 67108864 * this.words[1])
                          : this.length > 2 &&
                            r(!1, "Number can only safely store up to 53 bits"),
                      0 !== this.negative ? -t : t
                    );
                  }),
                  (n.prototype.toJSON = function () {
                    return this.toString(16);
                  }),
                  (n.prototype.toBuffer = function (t, e) {
                    return (
                      r("undefined" !== typeof o),
                      this.toArrayLike(o, t, e)
                    );
                  }),
                  (n.prototype.toArray = function (t, e) {
                    return this.toArrayLike(Array, t, e);
                  }),
                  (n.prototype.toArrayLike = function (t, e, i) {
                    var n = this.byteLength(),
                      o = i || Math.max(1, n);
                    (r(n <= o, "byte array longer than desired length"),
                      r(o > 0, "Requested array length <= 0"),
                      this.strip());
                    var s,
                      a,
                      h = "le" === e,
                      u = new t(o),
                      l = this.clone();
                    if (h) {
                      for (a = 0; !l.isZero(); a++)
                        ((s = l.andln(255)), l.iushrn(8), (u[a] = s));
                      for (; a < o; a++) u[a] = 0;
                    } else {
                      for (a = 0; a < o - n; a++) u[a] = 0;
                      for (a = 0; !l.isZero(); a++)
                        ((s = l.andln(255)), l.iushrn(8), (u[o - a - 1] = s));
                    }
                    return u;
                  }),
                  Math.clz32
                    ? (n.prototype._countBits = function (t) {
                        return 32 - Math.clz32(t);
                      })
                    : (n.prototype._countBits = function (t) {
                        var e = t,
                          r = 0;
                        return (
                          e >= 4096 && ((r += 13), (e >>>= 13)),
                          e >= 64 && ((r += 7), (e >>>= 7)),
                          e >= 8 && ((r += 4), (e >>>= 4)),
                          e >= 2 && ((r += 2), (e >>>= 2)),
                          r + e
                        );
                      }),
                  (n.prototype._zeroBits = function (t) {
                    if (0 === t) return 26;
                    var e = t,
                      r = 0;
                    return (
                      0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                      0 === (127 & e) && ((r += 7), (e >>>= 7)),
                      0 === (15 & e) && ((r += 4), (e >>>= 4)),
                      0 === (3 & e) && ((r += 2), (e >>>= 2)),
                      0 === (1 & e) && r++,
                      r
                    );
                  }),
                  (n.prototype.bitLength = function () {
                    var t = this.words[this.length - 1],
                      e = this._countBits(t);
                    return 26 * (this.length - 1) + e;
                  }),
                  (n.prototype.zeroBits = function () {
                    if (this.isZero()) return 0;
                    for (var t = 0, e = 0; e < this.length; e++) {
                      var r = this._zeroBits(this.words[e]);
                      if (((t += r), 26 !== r)) break;
                    }
                    return t;
                  }),
                  (n.prototype.byteLength = function () {
                    return Math.ceil(this.bitLength() / 8);
                  }),
                  (n.prototype.toTwos = function (t) {
                    return 0 !== this.negative
                      ? this.abs().inotn(t).iaddn(1)
                      : this.clone();
                  }),
                  (n.prototype.fromTwos = function (t) {
                    return this.testn(t - 1)
                      ? this.notn(t).iaddn(1).ineg()
                      : this.clone();
                  }),
                  (n.prototype.isNeg = function () {
                    return 0 !== this.negative;
                  }),
                  (n.prototype.neg = function () {
                    return this.clone().ineg();
                  }),
                  (n.prototype.ineg = function () {
                    return (this.isZero() || (this.negative ^= 1), this);
                  }),
                  (n.prototype.iuor = function (t) {
                    while (this.length < t.length)
                      this.words[this.length++] = 0;
                    for (var e = 0; e < t.length; e++)
                      this.words[e] = this.words[e] | t.words[e];
                    return this.strip();
                  }),
                  (n.prototype.ior = function (t) {
                    return (
                      r(0 === (this.negative | t.negative)),
                      this.iuor(t)
                    );
                  }),
                  (n.prototype.or = function (t) {
                    return this.length > t.length
                      ? this.clone().ior(t)
                      : t.clone().ior(this);
                  }),
                  (n.prototype.uor = function (t) {
                    return this.length > t.length
                      ? this.clone().iuor(t)
                      : t.clone().iuor(this);
                  }),
                  (n.prototype.iuand = function (t) {
                    var e;
                    e = this.length > t.length ? t : this;
                    for (var r = 0; r < e.length; r++)
                      this.words[r] = this.words[r] & t.words[r];
                    return ((this.length = e.length), this.strip());
                  }),
                  (n.prototype.iand = function (t) {
                    return (
                      r(0 === (this.negative | t.negative)),
                      this.iuand(t)
                    );
                  }),
                  (n.prototype.and = function (t) {
                    return this.length > t.length
                      ? this.clone().iand(t)
                      : t.clone().iand(this);
                  }),
                  (n.prototype.uand = function (t) {
                    return this.length > t.length
                      ? this.clone().iuand(t)
                      : t.clone().iuand(this);
                  }),
                  (n.prototype.iuxor = function (t) {
                    var e, r;
                    this.length > t.length
                      ? ((e = this), (r = t))
                      : ((e = t), (r = this));
                    for (var i = 0; i < r.length; i++)
                      this.words[i] = e.words[i] ^ r.words[i];
                    if (this !== e)
                      for (; i < e.length; i++) this.words[i] = e.words[i];
                    return ((this.length = e.length), this.strip());
                  }),
                  (n.prototype.ixor = function (t) {
                    return (
                      r(0 === (this.negative | t.negative)),
                      this.iuxor(t)
                    );
                  }),
                  (n.prototype.xor = function (t) {
                    return this.length > t.length
                      ? this.clone().ixor(t)
                      : t.clone().ixor(this);
                  }),
                  (n.prototype.uxor = function (t) {
                    return this.length > t.length
                      ? this.clone().iuxor(t)
                      : t.clone().iuxor(this);
                  }),
                  (n.prototype.inotn = function (t) {
                    r("number" === typeof t && t >= 0);
                    var e = 0 | Math.ceil(t / 26),
                      i = t % 26;
                    (this._expand(e), i > 0 && e--);
                    for (var n = 0; n < e; n++)
                      this.words[n] = 67108863 & ~this.words[n];
                    return (
                      i > 0 &&
                        (this.words[n] =
                          ~this.words[n] & (67108863 >> (26 - i))),
                      this.strip()
                    );
                  }),
                  (n.prototype.notn = function (t) {
                    return this.clone().inotn(t);
                  }),
                  (n.prototype.setn = function (t, e) {
                    r("number" === typeof t && t >= 0);
                    var i = (t / 26) | 0,
                      n = t % 26;
                    return (
                      this._expand(i + 1),
                      (this.words[i] = e
                        ? this.words[i] | (1 << n)
                        : this.words[i] & ~(1 << n)),
                      this.strip()
                    );
                  }),
                  (n.prototype.iadd = function (t) {
                    var e, r, i;
                    if (0 !== this.negative && 0 === t.negative)
                      return (
                        (this.negative = 0),
                        (e = this.isub(t)),
                        (this.negative ^= 1),
                        this._normSign()
                      );
                    if (0 === this.negative && 0 !== t.negative)
                      return (
                        (t.negative = 0),
                        (e = this.isub(t)),
                        (t.negative = 1),
                        e._normSign()
                      );
                    this.length > t.length
                      ? ((r = this), (i = t))
                      : ((r = t), (i = this));
                    for (var n = 0, o = 0; o < i.length; o++)
                      ((e = (0 | r.words[o]) + (0 | i.words[o]) + n),
                        (this.words[o] = 67108863 & e),
                        (n = e >>> 26));
                    for (; 0 !== n && o < r.length; o++)
                      ((e = (0 | r.words[o]) + n),
                        (this.words[o] = 67108863 & e),
                        (n = e >>> 26));
                    if (((this.length = r.length), 0 !== n))
                      ((this.words[this.length] = n), this.length++);
                    else if (r !== this)
                      for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this;
                  }),
                  (n.prototype.add = function (t) {
                    var e;
                    return 0 !== t.negative && 0 === this.negative
                      ? ((t.negative = 0),
                        (e = this.sub(t)),
                        (t.negative ^= 1),
                        e)
                      : 0 === t.negative && 0 !== this.negative
                        ? ((this.negative = 0),
                          (e = t.sub(this)),
                          (this.negative = 1),
                          e)
                        : this.length > t.length
                          ? this.clone().iadd(t)
                          : t.clone().iadd(this);
                  }),
                  (n.prototype.isub = function (t) {
                    if (0 !== t.negative) {
                      t.negative = 0;
                      var e = this.iadd(t);
                      return ((t.negative = 1), e._normSign());
                    }
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iadd(t),
                        (this.negative = 1),
                        this._normSign()
                      );
                    var r,
                      i,
                      n = this.cmp(t);
                    if (0 === n)
                      return (
                        (this.negative = 0),
                        (this.length = 1),
                        (this.words[0] = 0),
                        this
                      );
                    n > 0 ? ((r = this), (i = t)) : ((r = t), (i = this));
                    for (var o = 0, s = 0; s < i.length; s++)
                      ((e = (0 | r.words[s]) - (0 | i.words[s]) + o),
                        (o = e >> 26),
                        (this.words[s] = 67108863 & e));
                    for (; 0 !== o && s < r.length; s++)
                      ((e = (0 | r.words[s]) + o),
                        (o = e >> 26),
                        (this.words[s] = 67108863 & e));
                    if (0 === o && s < r.length && r !== this)
                      for (; s < r.length; s++) this.words[s] = r.words[s];
                    return (
                      (this.length = Math.max(this.length, s)),
                      r !== this && (this.negative = 1),
                      this.strip()
                    );
                  }),
                  (n.prototype.sub = function (t) {
                    return this.clone().isub(t);
                  }));
                var p = function (t, e, r) {
                  var i,
                    n,
                    o,
                    s = t.words,
                    a = e.words,
                    h = r.words,
                    u = 0,
                    l = 0 | s[0],
                    f = 8191 & l,
                    c = l >>> 13,
                    d = 0 | s[1],
                    p = 8191 & d,
                    m = d >>> 13,
                    g = 0 | s[2],
                    w = 8191 & g,
                    y = g >>> 13,
                    v = 0 | s[3],
                    b = 8191 & v,
                    M = v >>> 13,
                    _ = 0 | s[4],
                    E = 8191 & _,
                    A = _ >>> 13,
                    T = 0 | s[5],
                    R = 8191 & T,
                    S = T >>> 13,
                    P = 0 | s[6],
                    B = 8191 & P,
                    C = P >>> 13,
                    N = 0 | s[7],
                    k = 8191 & N,
                    x = N >>> 13,
                    O = 0 | s[8],
                    L = 8191 & O,
                    I = O >>> 13,
                    U = 0 | s[9],
                    D = 8191 & U,
                    G = U >>> 13,
                    F = 0 | a[0],
                    q = 8191 & F,
                    j = F >>> 13,
                    Y = 0 | a[1],
                    Z = 8191 & Y,
                    z = Y >>> 13,
                    V = 0 | a[2],
                    K = 8191 & V,
                    H = V >>> 13,
                    W = 0 | a[3],
                    J = 8191 & W,
                    X = W >>> 13,
                    Q = 0 | a[4],
                    $ = 8191 & Q,
                    tt = Q >>> 13,
                    et = 0 | a[5],
                    rt = 8191 & et,
                    it = et >>> 13,
                    nt = 0 | a[6],
                    ot = 8191 & nt,
                    st = nt >>> 13,
                    at = 0 | a[7],
                    ht = 8191 & at,
                    ut = at >>> 13,
                    lt = 0 | a[8],
                    ft = 8191 & lt,
                    ct = lt >>> 13,
                    dt = 0 | a[9],
                    pt = 8191 & dt,
                    mt = dt >>> 13;
                  ((r.negative = t.negative ^ e.negative),
                    (r.length = 19),
                    (i = Math.imul(f, q)),
                    (n = Math.imul(f, j)),
                    (n = (n + Math.imul(c, q)) | 0),
                    (o = Math.imul(c, j)));
                  var gt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
                    (gt &= 67108863),
                    (i = Math.imul(p, q)),
                    (n = Math.imul(p, j)),
                    (n = (n + Math.imul(m, q)) | 0),
                    (o = Math.imul(m, j)),
                    (i = (i + Math.imul(f, Z)) | 0),
                    (n = (n + Math.imul(f, z)) | 0),
                    (n = (n + Math.imul(c, Z)) | 0),
                    (o = (o + Math.imul(c, z)) | 0));
                  var wt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
                    (wt &= 67108863),
                    (i = Math.imul(w, q)),
                    (n = Math.imul(w, j)),
                    (n = (n + Math.imul(y, q)) | 0),
                    (o = Math.imul(y, j)),
                    (i = (i + Math.imul(p, Z)) | 0),
                    (n = (n + Math.imul(p, z)) | 0),
                    (n = (n + Math.imul(m, Z)) | 0),
                    (o = (o + Math.imul(m, z)) | 0),
                    (i = (i + Math.imul(f, K)) | 0),
                    (n = (n + Math.imul(f, H)) | 0),
                    (n = (n + Math.imul(c, K)) | 0),
                    (o = (o + Math.imul(c, H)) | 0));
                  var yt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
                    (yt &= 67108863),
                    (i = Math.imul(b, q)),
                    (n = Math.imul(b, j)),
                    (n = (n + Math.imul(M, q)) | 0),
                    (o = Math.imul(M, j)),
                    (i = (i + Math.imul(w, Z)) | 0),
                    (n = (n + Math.imul(w, z)) | 0),
                    (n = (n + Math.imul(y, Z)) | 0),
                    (o = (o + Math.imul(y, z)) | 0),
                    (i = (i + Math.imul(p, K)) | 0),
                    (n = (n + Math.imul(p, H)) | 0),
                    (n = (n + Math.imul(m, K)) | 0),
                    (o = (o + Math.imul(m, H)) | 0),
                    (i = (i + Math.imul(f, J)) | 0),
                    (n = (n + Math.imul(f, X)) | 0),
                    (n = (n + Math.imul(c, J)) | 0),
                    (o = (o + Math.imul(c, X)) | 0));
                  var vt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
                    (vt &= 67108863),
                    (i = Math.imul(E, q)),
                    (n = Math.imul(E, j)),
                    (n = (n + Math.imul(A, q)) | 0),
                    (o = Math.imul(A, j)),
                    (i = (i + Math.imul(b, Z)) | 0),
                    (n = (n + Math.imul(b, z)) | 0),
                    (n = (n + Math.imul(M, Z)) | 0),
                    (o = (o + Math.imul(M, z)) | 0),
                    (i = (i + Math.imul(w, K)) | 0),
                    (n = (n + Math.imul(w, H)) | 0),
                    (n = (n + Math.imul(y, K)) | 0),
                    (o = (o + Math.imul(y, H)) | 0),
                    (i = (i + Math.imul(p, J)) | 0),
                    (n = (n + Math.imul(p, X)) | 0),
                    (n = (n + Math.imul(m, J)) | 0),
                    (o = (o + Math.imul(m, X)) | 0),
                    (i = (i + Math.imul(f, $)) | 0),
                    (n = (n + Math.imul(f, tt)) | 0),
                    (n = (n + Math.imul(c, $)) | 0),
                    (o = (o + Math.imul(c, tt)) | 0));
                  var bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
                    (bt &= 67108863),
                    (i = Math.imul(R, q)),
                    (n = Math.imul(R, j)),
                    (n = (n + Math.imul(S, q)) | 0),
                    (o = Math.imul(S, j)),
                    (i = (i + Math.imul(E, Z)) | 0),
                    (n = (n + Math.imul(E, z)) | 0),
                    (n = (n + Math.imul(A, Z)) | 0),
                    (o = (o + Math.imul(A, z)) | 0),
                    (i = (i + Math.imul(b, K)) | 0),
                    (n = (n + Math.imul(b, H)) | 0),
                    (n = (n + Math.imul(M, K)) | 0),
                    (o = (o + Math.imul(M, H)) | 0),
                    (i = (i + Math.imul(w, J)) | 0),
                    (n = (n + Math.imul(w, X)) | 0),
                    (n = (n + Math.imul(y, J)) | 0),
                    (o = (o + Math.imul(y, X)) | 0),
                    (i = (i + Math.imul(p, $)) | 0),
                    (n = (n + Math.imul(p, tt)) | 0),
                    (n = (n + Math.imul(m, $)) | 0),
                    (o = (o + Math.imul(m, tt)) | 0),
                    (i = (i + Math.imul(f, rt)) | 0),
                    (n = (n + Math.imul(f, it)) | 0),
                    (n = (n + Math.imul(c, rt)) | 0),
                    (o = (o + Math.imul(c, it)) | 0));
                  var Mt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
                    (Mt &= 67108863),
                    (i = Math.imul(B, q)),
                    (n = Math.imul(B, j)),
                    (n = (n + Math.imul(C, q)) | 0),
                    (o = Math.imul(C, j)),
                    (i = (i + Math.imul(R, Z)) | 0),
                    (n = (n + Math.imul(R, z)) | 0),
                    (n = (n + Math.imul(S, Z)) | 0),
                    (o = (o + Math.imul(S, z)) | 0),
                    (i = (i + Math.imul(E, K)) | 0),
                    (n = (n + Math.imul(E, H)) | 0),
                    (n = (n + Math.imul(A, K)) | 0),
                    (o = (o + Math.imul(A, H)) | 0),
                    (i = (i + Math.imul(b, J)) | 0),
                    (n = (n + Math.imul(b, X)) | 0),
                    (n = (n + Math.imul(M, J)) | 0),
                    (o = (o + Math.imul(M, X)) | 0),
                    (i = (i + Math.imul(w, $)) | 0),
                    (n = (n + Math.imul(w, tt)) | 0),
                    (n = (n + Math.imul(y, $)) | 0),
                    (o = (o + Math.imul(y, tt)) | 0),
                    (i = (i + Math.imul(p, rt)) | 0),
                    (n = (n + Math.imul(p, it)) | 0),
                    (n = (n + Math.imul(m, rt)) | 0),
                    (o = (o + Math.imul(m, it)) | 0),
                    (i = (i + Math.imul(f, ot)) | 0),
                    (n = (n + Math.imul(f, st)) | 0),
                    (n = (n + Math.imul(c, ot)) | 0),
                    (o = (o + Math.imul(c, st)) | 0));
                  var _t = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
                    (_t &= 67108863),
                    (i = Math.imul(k, q)),
                    (n = Math.imul(k, j)),
                    (n = (n + Math.imul(x, q)) | 0),
                    (o = Math.imul(x, j)),
                    (i = (i + Math.imul(B, Z)) | 0),
                    (n = (n + Math.imul(B, z)) | 0),
                    (n = (n + Math.imul(C, Z)) | 0),
                    (o = (o + Math.imul(C, z)) | 0),
                    (i = (i + Math.imul(R, K)) | 0),
                    (n = (n + Math.imul(R, H)) | 0),
                    (n = (n + Math.imul(S, K)) | 0),
                    (o = (o + Math.imul(S, H)) | 0),
                    (i = (i + Math.imul(E, J)) | 0),
                    (n = (n + Math.imul(E, X)) | 0),
                    (n = (n + Math.imul(A, J)) | 0),
                    (o = (o + Math.imul(A, X)) | 0),
                    (i = (i + Math.imul(b, $)) | 0),
                    (n = (n + Math.imul(b, tt)) | 0),
                    (n = (n + Math.imul(M, $)) | 0),
                    (o = (o + Math.imul(M, tt)) | 0),
                    (i = (i + Math.imul(w, rt)) | 0),
                    (n = (n + Math.imul(w, it)) | 0),
                    (n = (n + Math.imul(y, rt)) | 0),
                    (o = (o + Math.imul(y, it)) | 0),
                    (i = (i + Math.imul(p, ot)) | 0),
                    (n = (n + Math.imul(p, st)) | 0),
                    (n = (n + Math.imul(m, ot)) | 0),
                    (o = (o + Math.imul(m, st)) | 0),
                    (i = (i + Math.imul(f, ht)) | 0),
                    (n = (n + Math.imul(f, ut)) | 0),
                    (n = (n + Math.imul(c, ht)) | 0),
                    (o = (o + Math.imul(c, ut)) | 0));
                  var Et = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
                    (Et &= 67108863),
                    (i = Math.imul(L, q)),
                    (n = Math.imul(L, j)),
                    (n = (n + Math.imul(I, q)) | 0),
                    (o = Math.imul(I, j)),
                    (i = (i + Math.imul(k, Z)) | 0),
                    (n = (n + Math.imul(k, z)) | 0),
                    (n = (n + Math.imul(x, Z)) | 0),
                    (o = (o + Math.imul(x, z)) | 0),
                    (i = (i + Math.imul(B, K)) | 0),
                    (n = (n + Math.imul(B, H)) | 0),
                    (n = (n + Math.imul(C, K)) | 0),
                    (o = (o + Math.imul(C, H)) | 0),
                    (i = (i + Math.imul(R, J)) | 0),
                    (n = (n + Math.imul(R, X)) | 0),
                    (n = (n + Math.imul(S, J)) | 0),
                    (o = (o + Math.imul(S, X)) | 0),
                    (i = (i + Math.imul(E, $)) | 0),
                    (n = (n + Math.imul(E, tt)) | 0),
                    (n = (n + Math.imul(A, $)) | 0),
                    (o = (o + Math.imul(A, tt)) | 0),
                    (i = (i + Math.imul(b, rt)) | 0),
                    (n = (n + Math.imul(b, it)) | 0),
                    (n = (n + Math.imul(M, rt)) | 0),
                    (o = (o + Math.imul(M, it)) | 0),
                    (i = (i + Math.imul(w, ot)) | 0),
                    (n = (n + Math.imul(w, st)) | 0),
                    (n = (n + Math.imul(y, ot)) | 0),
                    (o = (o + Math.imul(y, st)) | 0),
                    (i = (i + Math.imul(p, ht)) | 0),
                    (n = (n + Math.imul(p, ut)) | 0),
                    (n = (n + Math.imul(m, ht)) | 0),
                    (o = (o + Math.imul(m, ut)) | 0),
                    (i = (i + Math.imul(f, ft)) | 0),
                    (n = (n + Math.imul(f, ct)) | 0),
                    (n = (n + Math.imul(c, ft)) | 0),
                    (o = (o + Math.imul(c, ct)) | 0));
                  var At = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
                    (At &= 67108863),
                    (i = Math.imul(D, q)),
                    (n = Math.imul(D, j)),
                    (n = (n + Math.imul(G, q)) | 0),
                    (o = Math.imul(G, j)),
                    (i = (i + Math.imul(L, Z)) | 0),
                    (n = (n + Math.imul(L, z)) | 0),
                    (n = (n + Math.imul(I, Z)) | 0),
                    (o = (o + Math.imul(I, z)) | 0),
                    (i = (i + Math.imul(k, K)) | 0),
                    (n = (n + Math.imul(k, H)) | 0),
                    (n = (n + Math.imul(x, K)) | 0),
                    (o = (o + Math.imul(x, H)) | 0),
                    (i = (i + Math.imul(B, J)) | 0),
                    (n = (n + Math.imul(B, X)) | 0),
                    (n = (n + Math.imul(C, J)) | 0),
                    (o = (o + Math.imul(C, X)) | 0),
                    (i = (i + Math.imul(R, $)) | 0),
                    (n = (n + Math.imul(R, tt)) | 0),
                    (n = (n + Math.imul(S, $)) | 0),
                    (o = (o + Math.imul(S, tt)) | 0),
                    (i = (i + Math.imul(E, rt)) | 0),
                    (n = (n + Math.imul(E, it)) | 0),
                    (n = (n + Math.imul(A, rt)) | 0),
                    (o = (o + Math.imul(A, it)) | 0),
                    (i = (i + Math.imul(b, ot)) | 0),
                    (n = (n + Math.imul(b, st)) | 0),
                    (n = (n + Math.imul(M, ot)) | 0),
                    (o = (o + Math.imul(M, st)) | 0),
                    (i = (i + Math.imul(w, ht)) | 0),
                    (n = (n + Math.imul(w, ut)) | 0),
                    (n = (n + Math.imul(y, ht)) | 0),
                    (o = (o + Math.imul(y, ut)) | 0),
                    (i = (i + Math.imul(p, ft)) | 0),
                    (n = (n + Math.imul(p, ct)) | 0),
                    (n = (n + Math.imul(m, ft)) | 0),
                    (o = (o + Math.imul(m, ct)) | 0),
                    (i = (i + Math.imul(f, pt)) | 0),
                    (n = (n + Math.imul(f, mt)) | 0),
                    (n = (n + Math.imul(c, pt)) | 0),
                    (o = (o + Math.imul(c, mt)) | 0));
                  var Tt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
                    (Tt &= 67108863),
                    (i = Math.imul(D, Z)),
                    (n = Math.imul(D, z)),
                    (n = (n + Math.imul(G, Z)) | 0),
                    (o = Math.imul(G, z)),
                    (i = (i + Math.imul(L, K)) | 0),
                    (n = (n + Math.imul(L, H)) | 0),
                    (n = (n + Math.imul(I, K)) | 0),
                    (o = (o + Math.imul(I, H)) | 0),
                    (i = (i + Math.imul(k, J)) | 0),
                    (n = (n + Math.imul(k, X)) | 0),
                    (n = (n + Math.imul(x, J)) | 0),
                    (o = (o + Math.imul(x, X)) | 0),
                    (i = (i + Math.imul(B, $)) | 0),
                    (n = (n + Math.imul(B, tt)) | 0),
                    (n = (n + Math.imul(C, $)) | 0),
                    (o = (o + Math.imul(C, tt)) | 0),
                    (i = (i + Math.imul(R, rt)) | 0),
                    (n = (n + Math.imul(R, it)) | 0),
                    (n = (n + Math.imul(S, rt)) | 0),
                    (o = (o + Math.imul(S, it)) | 0),
                    (i = (i + Math.imul(E, ot)) | 0),
                    (n = (n + Math.imul(E, st)) | 0),
                    (n = (n + Math.imul(A, ot)) | 0),
                    (o = (o + Math.imul(A, st)) | 0),
                    (i = (i + Math.imul(b, ht)) | 0),
                    (n = (n + Math.imul(b, ut)) | 0),
                    (n = (n + Math.imul(M, ht)) | 0),
                    (o = (o + Math.imul(M, ut)) | 0),
                    (i = (i + Math.imul(w, ft)) | 0),
                    (n = (n + Math.imul(w, ct)) | 0),
                    (n = (n + Math.imul(y, ft)) | 0),
                    (o = (o + Math.imul(y, ct)) | 0),
                    (i = (i + Math.imul(p, pt)) | 0),
                    (n = (n + Math.imul(p, mt)) | 0),
                    (n = (n + Math.imul(m, pt)) | 0),
                    (o = (o + Math.imul(m, mt)) | 0));
                  var Rt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
                    (Rt &= 67108863),
                    (i = Math.imul(D, K)),
                    (n = Math.imul(D, H)),
                    (n = (n + Math.imul(G, K)) | 0),
                    (o = Math.imul(G, H)),
                    (i = (i + Math.imul(L, J)) | 0),
                    (n = (n + Math.imul(L, X)) | 0),
                    (n = (n + Math.imul(I, J)) | 0),
                    (o = (o + Math.imul(I, X)) | 0),
                    (i = (i + Math.imul(k, $)) | 0),
                    (n = (n + Math.imul(k, tt)) | 0),
                    (n = (n + Math.imul(x, $)) | 0),
                    (o = (o + Math.imul(x, tt)) | 0),
                    (i = (i + Math.imul(B, rt)) | 0),
                    (n = (n + Math.imul(B, it)) | 0),
                    (n = (n + Math.imul(C, rt)) | 0),
                    (o = (o + Math.imul(C, it)) | 0),
                    (i = (i + Math.imul(R, ot)) | 0),
                    (n = (n + Math.imul(R, st)) | 0),
                    (n = (n + Math.imul(S, ot)) | 0),
                    (o = (o + Math.imul(S, st)) | 0),
                    (i = (i + Math.imul(E, ht)) | 0),
                    (n = (n + Math.imul(E, ut)) | 0),
                    (n = (n + Math.imul(A, ht)) | 0),
                    (o = (o + Math.imul(A, ut)) | 0),
                    (i = (i + Math.imul(b, ft)) | 0),
                    (n = (n + Math.imul(b, ct)) | 0),
                    (n = (n + Math.imul(M, ft)) | 0),
                    (o = (o + Math.imul(M, ct)) | 0),
                    (i = (i + Math.imul(w, pt)) | 0),
                    (n = (n + Math.imul(w, mt)) | 0),
                    (n = (n + Math.imul(y, pt)) | 0),
                    (o = (o + Math.imul(y, mt)) | 0));
                  var St = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
                    (St &= 67108863),
                    (i = Math.imul(D, J)),
                    (n = Math.imul(D, X)),
                    (n = (n + Math.imul(G, J)) | 0),
                    (o = Math.imul(G, X)),
                    (i = (i + Math.imul(L, $)) | 0),
                    (n = (n + Math.imul(L, tt)) | 0),
                    (n = (n + Math.imul(I, $)) | 0),
                    (o = (o + Math.imul(I, tt)) | 0),
                    (i = (i + Math.imul(k, rt)) | 0),
                    (n = (n + Math.imul(k, it)) | 0),
                    (n = (n + Math.imul(x, rt)) | 0),
                    (o = (o + Math.imul(x, it)) | 0),
                    (i = (i + Math.imul(B, ot)) | 0),
                    (n = (n + Math.imul(B, st)) | 0),
                    (n = (n + Math.imul(C, ot)) | 0),
                    (o = (o + Math.imul(C, st)) | 0),
                    (i = (i + Math.imul(R, ht)) | 0),
                    (n = (n + Math.imul(R, ut)) | 0),
                    (n = (n + Math.imul(S, ht)) | 0),
                    (o = (o + Math.imul(S, ut)) | 0),
                    (i = (i + Math.imul(E, ft)) | 0),
                    (n = (n + Math.imul(E, ct)) | 0),
                    (n = (n + Math.imul(A, ft)) | 0),
                    (o = (o + Math.imul(A, ct)) | 0),
                    (i = (i + Math.imul(b, pt)) | 0),
                    (n = (n + Math.imul(b, mt)) | 0),
                    (n = (n + Math.imul(M, pt)) | 0),
                    (o = (o + Math.imul(M, mt)) | 0));
                  var Pt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
                    (Pt &= 67108863),
                    (i = Math.imul(D, $)),
                    (n = Math.imul(D, tt)),
                    (n = (n + Math.imul(G, $)) | 0),
                    (o = Math.imul(G, tt)),
                    (i = (i + Math.imul(L, rt)) | 0),
                    (n = (n + Math.imul(L, it)) | 0),
                    (n = (n + Math.imul(I, rt)) | 0),
                    (o = (o + Math.imul(I, it)) | 0),
                    (i = (i + Math.imul(k, ot)) | 0),
                    (n = (n + Math.imul(k, st)) | 0),
                    (n = (n + Math.imul(x, ot)) | 0),
                    (o = (o + Math.imul(x, st)) | 0),
                    (i = (i + Math.imul(B, ht)) | 0),
                    (n = (n + Math.imul(B, ut)) | 0),
                    (n = (n + Math.imul(C, ht)) | 0),
                    (o = (o + Math.imul(C, ut)) | 0),
                    (i = (i + Math.imul(R, ft)) | 0),
                    (n = (n + Math.imul(R, ct)) | 0),
                    (n = (n + Math.imul(S, ft)) | 0),
                    (o = (o + Math.imul(S, ct)) | 0),
                    (i = (i + Math.imul(E, pt)) | 0),
                    (n = (n + Math.imul(E, mt)) | 0),
                    (n = (n + Math.imul(A, pt)) | 0),
                    (o = (o + Math.imul(A, mt)) | 0));
                  var Bt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
                    (Bt &= 67108863),
                    (i = Math.imul(D, rt)),
                    (n = Math.imul(D, it)),
                    (n = (n + Math.imul(G, rt)) | 0),
                    (o = Math.imul(G, it)),
                    (i = (i + Math.imul(L, ot)) | 0),
                    (n = (n + Math.imul(L, st)) | 0),
                    (n = (n + Math.imul(I, ot)) | 0),
                    (o = (o + Math.imul(I, st)) | 0),
                    (i = (i + Math.imul(k, ht)) | 0),
                    (n = (n + Math.imul(k, ut)) | 0),
                    (n = (n + Math.imul(x, ht)) | 0),
                    (o = (o + Math.imul(x, ut)) | 0),
                    (i = (i + Math.imul(B, ft)) | 0),
                    (n = (n + Math.imul(B, ct)) | 0),
                    (n = (n + Math.imul(C, ft)) | 0),
                    (o = (o + Math.imul(C, ct)) | 0),
                    (i = (i + Math.imul(R, pt)) | 0),
                    (n = (n + Math.imul(R, mt)) | 0),
                    (n = (n + Math.imul(S, pt)) | 0),
                    (o = (o + Math.imul(S, mt)) | 0));
                  var Ct = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Ct >>> 26)) | 0),
                    (Ct &= 67108863),
                    (i = Math.imul(D, ot)),
                    (n = Math.imul(D, st)),
                    (n = (n + Math.imul(G, ot)) | 0),
                    (o = Math.imul(G, st)),
                    (i = (i + Math.imul(L, ht)) | 0),
                    (n = (n + Math.imul(L, ut)) | 0),
                    (n = (n + Math.imul(I, ht)) | 0),
                    (o = (o + Math.imul(I, ut)) | 0),
                    (i = (i + Math.imul(k, ft)) | 0),
                    (n = (n + Math.imul(k, ct)) | 0),
                    (n = (n + Math.imul(x, ft)) | 0),
                    (o = (o + Math.imul(x, ct)) | 0),
                    (i = (i + Math.imul(B, pt)) | 0),
                    (n = (n + Math.imul(B, mt)) | 0),
                    (n = (n + Math.imul(C, pt)) | 0),
                    (o = (o + Math.imul(C, mt)) | 0));
                  var Nt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
                    (Nt &= 67108863),
                    (i = Math.imul(D, ht)),
                    (n = Math.imul(D, ut)),
                    (n = (n + Math.imul(G, ht)) | 0),
                    (o = Math.imul(G, ut)),
                    (i = (i + Math.imul(L, ft)) | 0),
                    (n = (n + Math.imul(L, ct)) | 0),
                    (n = (n + Math.imul(I, ft)) | 0),
                    (o = (o + Math.imul(I, ct)) | 0),
                    (i = (i + Math.imul(k, pt)) | 0),
                    (n = (n + Math.imul(k, mt)) | 0),
                    (n = (n + Math.imul(x, pt)) | 0),
                    (o = (o + Math.imul(x, mt)) | 0));
                  var kt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
                    (kt &= 67108863),
                    (i = Math.imul(D, ft)),
                    (n = Math.imul(D, ct)),
                    (n = (n + Math.imul(G, ft)) | 0),
                    (o = Math.imul(G, ct)),
                    (i = (i + Math.imul(L, pt)) | 0),
                    (n = (n + Math.imul(L, mt)) | 0),
                    (n = (n + Math.imul(I, pt)) | 0),
                    (o = (o + Math.imul(I, mt)) | 0));
                  var xt = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  ((u = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
                    (xt &= 67108863),
                    (i = Math.imul(D, pt)),
                    (n = Math.imul(D, mt)),
                    (n = (n + Math.imul(G, pt)) | 0),
                    (o = Math.imul(G, mt)));
                  var Ot = (((u + i) | 0) + ((8191 & n) << 13)) | 0;
                  return (
                    (u = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
                    (Ot &= 67108863),
                    (h[0] = gt),
                    (h[1] = wt),
                    (h[2] = yt),
                    (h[3] = vt),
                    (h[4] = bt),
                    (h[5] = Mt),
                    (h[6] = _t),
                    (h[7] = Et),
                    (h[8] = At),
                    (h[9] = Tt),
                    (h[10] = Rt),
                    (h[11] = St),
                    (h[12] = Pt),
                    (h[13] = Bt),
                    (h[14] = Ct),
                    (h[15] = Nt),
                    (h[16] = kt),
                    (h[17] = xt),
                    (h[18] = Ot),
                    0 !== u && ((h[19] = u), r.length++),
                    r
                  );
                };
                function m(t, e, r) {
                  ((r.negative = e.negative ^ t.negative),
                    (r.length = t.length + e.length));
                  for (var i = 0, n = 0, o = 0; o < r.length - 1; o++) {
                    var s = n;
                    n = 0;
                    for (
                      var a = 67108863 & i,
                        h = Math.min(o, e.length - 1),
                        u = Math.max(0, o - t.length + 1);
                      u <= h;
                      u++
                    ) {
                      var l = o - u,
                        f = 0 | t.words[l],
                        c = 0 | e.words[u],
                        d = f * c,
                        p = 67108863 & d;
                      ((s = (s + ((d / 67108864) | 0)) | 0),
                        (p = (p + a) | 0),
                        (a = 67108863 & p),
                        (s = (s + (p >>> 26)) | 0),
                        (n += s >>> 26),
                        (s &= 67108863));
                    }
                    ((r.words[o] = a), (i = s), (s = n));
                  }
                  return (0 !== i ? (r.words[o] = i) : r.length--, r.strip());
                }
                function g(t, e, r) {
                  var i = new w();
                  return i.mulp(t, e, r);
                }
                function w(t, e) {
                  ((this.x = t), (this.y = e));
                }
                (Math.imul || (p = d),
                  (n.prototype.mulTo = function (t, e) {
                    var r,
                      i = this.length + t.length;
                    return (
                      (r =
                        10 === this.length && 10 === t.length
                          ? p(this, t, e)
                          : i < 63
                            ? d(this, t, e)
                            : i < 1024
                              ? m(this, t, e)
                              : g(this, t, e)),
                      r
                    );
                  }),
                  (w.prototype.makeRBT = function (t) {
                    for (
                      var e = new Array(t),
                        r = n.prototype._countBits(t) - 1,
                        i = 0;
                      i < t;
                      i++
                    )
                      e[i] = this.revBin(i, r, t);
                    return e;
                  }),
                  (w.prototype.revBin = function (t, e, r) {
                    if (0 === t || t === r - 1) return t;
                    for (var i = 0, n = 0; n < e; n++)
                      ((i |= (1 & t) << (e - n - 1)), (t >>= 1));
                    return i;
                  }),
                  (w.prototype.permute = function (t, e, r, i, n, o) {
                    for (var s = 0; s < o; s++)
                      ((i[s] = e[t[s]]), (n[s] = r[t[s]]));
                  }),
                  (w.prototype.transform = function (t, e, r, i, n, o) {
                    this.permute(o, t, e, r, i, n);
                    for (var s = 1; s < n; s <<= 1)
                      for (
                        var a = s << 1,
                          h = Math.cos((2 * Math.PI) / a),
                          u = Math.sin((2 * Math.PI) / a),
                          l = 0;
                        l < n;
                        l += a
                      )
                        for (var f = h, c = u, d = 0; d < s; d++) {
                          var p = r[l + d],
                            m = i[l + d],
                            g = r[l + d + s],
                            w = i[l + d + s],
                            y = f * g - c * w;
                          ((w = f * w + c * g),
                            (g = y),
                            (r[l + d] = p + g),
                            (i[l + d] = m + w),
                            (r[l + d + s] = p - g),
                            (i[l + d + s] = m - w),
                            d !== a &&
                              ((y = h * f - u * c),
                              (c = h * c + u * f),
                              (f = y)));
                        }
                  }),
                  (w.prototype.guessLen13b = function (t, e) {
                    var r = 1 | Math.max(e, t),
                      i = 1 & r,
                      n = 0;
                    for (r = (r / 2) | 0; r; r >>>= 1) n++;
                    return 1 << (n + 1 + i);
                  }),
                  (w.prototype.conjugate = function (t, e, r) {
                    if (!(r <= 1))
                      for (var i = 0; i < r / 2; i++) {
                        var n = t[i];
                        ((t[i] = t[r - i - 1]),
                          (t[r - i - 1] = n),
                          (n = e[i]),
                          (e[i] = -e[r - i - 1]),
                          (e[r - i - 1] = -n));
                      }
                  }),
                  (w.prototype.normalize13b = function (t, e) {
                    for (var r = 0, i = 0; i < e / 2; i++) {
                      var n =
                        8192 * Math.round(t[2 * i + 1] / e) +
                        Math.round(t[2 * i] / e) +
                        r;
                      ((t[i] = 67108863 & n),
                        (r = n < 67108864 ? 0 : (n / 67108864) | 0));
                    }
                    return t;
                  }),
                  (w.prototype.convert13b = function (t, e, i, n) {
                    for (var o = 0, s = 0; s < e; s++)
                      ((o += 0 | t[s]),
                        (i[2 * s] = 8191 & o),
                        (o >>>= 13),
                        (i[2 * s + 1] = 8191 & o),
                        (o >>>= 13));
                    for (s = 2 * e; s < n; ++s) i[s] = 0;
                    (r(0 === o), r(0 === (-8192 & o)));
                  }),
                  (w.prototype.stub = function (t) {
                    for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
                    return e;
                  }),
                  (w.prototype.mulp = function (t, e, r) {
                    var i = 2 * this.guessLen13b(t.length, e.length),
                      n = this.makeRBT(i),
                      o = this.stub(i),
                      s = new Array(i),
                      a = new Array(i),
                      h = new Array(i),
                      u = new Array(i),
                      l = new Array(i),
                      f = new Array(i),
                      c = r.words;
                    ((c.length = i),
                      this.convert13b(t.words, t.length, s, i),
                      this.convert13b(e.words, e.length, u, i),
                      this.transform(s, o, a, h, i, n),
                      this.transform(u, o, l, f, i, n));
                    for (var d = 0; d < i; d++) {
                      var p = a[d] * l[d] - h[d] * f[d];
                      ((h[d] = a[d] * f[d] + h[d] * l[d]), (a[d] = p));
                    }
                    return (
                      this.conjugate(a, h, i),
                      this.transform(a, h, c, o, i, n),
                      this.conjugate(c, o, i),
                      this.normalize13b(c, i),
                      (r.negative = t.negative ^ e.negative),
                      (r.length = t.length + e.length),
                      r.strip()
                    );
                  }),
                  (n.prototype.mul = function (t) {
                    var e = new n(null);
                    return (
                      (e.words = new Array(this.length + t.length)),
                      this.mulTo(t, e)
                    );
                  }),
                  (n.prototype.mulf = function (t) {
                    var e = new n(null);
                    return (
                      (e.words = new Array(this.length + t.length)),
                      g(this, t, e)
                    );
                  }),
                  (n.prototype.imul = function (t) {
                    return this.clone().mulTo(t, this);
                  }),
                  (n.prototype.imuln = function (t) {
                    (r("number" === typeof t), r(t < 67108864));
                    for (var e = 0, i = 0; i < this.length; i++) {
                      var n = (0 | this.words[i]) * t,
                        o = (67108863 & n) + (67108863 & e);
                      ((e >>= 26),
                        (e += (n / 67108864) | 0),
                        (e += o >>> 26),
                        (this.words[i] = 67108863 & o));
                    }
                    return (
                      0 !== e && ((this.words[i] = e), this.length++),
                      this
                    );
                  }),
                  (n.prototype.muln = function (t) {
                    return this.clone().imuln(t);
                  }),
                  (n.prototype.sqr = function () {
                    return this.mul(this);
                  }),
                  (n.prototype.isqr = function () {
                    return this.imul(this.clone());
                  }),
                  (n.prototype.pow = function (t) {
                    var e = c(t);
                    if (0 === e.length) return new n(1);
                    for (var r = this, i = 0; i < e.length; i++, r = r.sqr())
                      if (0 !== e[i]) break;
                    if (++i < e.length)
                      for (var o = r.sqr(); i < e.length; i++, o = o.sqr())
                        0 !== e[i] && (r = r.mul(o));
                    return r;
                  }),
                  (n.prototype.iushln = function (t) {
                    r("number" === typeof t && t >= 0);
                    var e,
                      i = t % 26,
                      n = (t - i) / 26,
                      o = (67108863 >>> (26 - i)) << (26 - i);
                    if (0 !== i) {
                      var s = 0;
                      for (e = 0; e < this.length; e++) {
                        var a = this.words[e] & o,
                          h = ((0 | this.words[e]) - a) << i;
                        ((this.words[e] = h | s), (s = a >>> (26 - i)));
                      }
                      s && ((this.words[e] = s), this.length++);
                    }
                    if (0 !== n) {
                      for (e = this.length - 1; e >= 0; e--)
                        this.words[e + n] = this.words[e];
                      for (e = 0; e < n; e++) this.words[e] = 0;
                      this.length += n;
                    }
                    return this.strip();
                  }),
                  (n.prototype.ishln = function (t) {
                    return (r(0 === this.negative), this.iushln(t));
                  }),
                  (n.prototype.iushrn = function (t, e, i) {
                    var n;
                    (r("number" === typeof t && t >= 0),
                      (n = e ? (e - (e % 26)) / 26 : 0));
                    var o = t % 26,
                      s = Math.min((t - o) / 26, this.length),
                      a = 67108863 ^ ((67108863 >>> o) << o),
                      h = i;
                    if (((n -= s), (n = Math.max(0, n)), h)) {
                      for (var u = 0; u < s; u++) h.words[u] = this.words[u];
                      h.length = s;
                    }
                    if (0 === s);
                    else if (this.length > s)
                      for (this.length -= s, u = 0; u < this.length; u++)
                        this.words[u] = this.words[u + s];
                    else ((this.words[0] = 0), (this.length = 1));
                    var l = 0;
                    for (
                      u = this.length - 1;
                      u >= 0 && (0 !== l || u >= n);
                      u--
                    ) {
                      var f = 0 | this.words[u];
                      ((this.words[u] = (l << (26 - o)) | (f >>> o)),
                        (l = f & a));
                    }
                    return (
                      h && 0 !== l && (h.words[h.length++] = l),
                      0 === this.length &&
                        ((this.words[0] = 0), (this.length = 1)),
                      this.strip()
                    );
                  }),
                  (n.prototype.ishrn = function (t, e, i) {
                    return (r(0 === this.negative), this.iushrn(t, e, i));
                  }),
                  (n.prototype.shln = function (t) {
                    return this.clone().ishln(t);
                  }),
                  (n.prototype.ushln = function (t) {
                    return this.clone().iushln(t);
                  }),
                  (n.prototype.shrn = function (t) {
                    return this.clone().ishrn(t);
                  }),
                  (n.prototype.ushrn = function (t) {
                    return this.clone().iushrn(t);
                  }),
                  (n.prototype.testn = function (t) {
                    r("number" === typeof t && t >= 0);
                    var e = t % 26,
                      i = (t - e) / 26,
                      n = 1 << e;
                    if (this.length <= i) return !1;
                    var o = this.words[i];
                    return !!(o & n);
                  }),
                  (n.prototype.imaskn = function (t) {
                    r("number" === typeof t && t >= 0);
                    var e = t % 26,
                      i = (t - e) / 26;
                    if (
                      (r(
                        0 === this.negative,
                        "imaskn works only with positive numbers",
                      ),
                      this.length <= i)
                    )
                      return this;
                    if (
                      (0 !== e && i++,
                      (this.length = Math.min(i, this.length)),
                      0 !== e)
                    ) {
                      var n = 67108863 ^ ((67108863 >>> e) << e);
                      this.words[this.length - 1] &= n;
                    }
                    return this.strip();
                  }),
                  (n.prototype.maskn = function (t) {
                    return this.clone().imaskn(t);
                  }),
                  (n.prototype.iaddn = function (t) {
                    return (
                      r("number" === typeof t),
                      r(t < 67108864),
                      t < 0
                        ? this.isubn(-t)
                        : 0 !== this.negative
                          ? 1 === this.length && (0 | this.words[0]) < t
                            ? ((this.words[0] = t - (0 | this.words[0])),
                              (this.negative = 0),
                              this)
                            : ((this.negative = 0),
                              this.isubn(t),
                              (this.negative = 1),
                              this)
                          : this._iaddn(t)
                    );
                  }),
                  (n.prototype._iaddn = function (t) {
                    this.words[0] += t;
                    for (
                      var e = 0;
                      e < this.length && this.words[e] >= 67108864;
                      e++
                    )
                      ((this.words[e] -= 67108864),
                        e === this.length - 1
                          ? (this.words[e + 1] = 1)
                          : this.words[e + 1]++);
                    return ((this.length = Math.max(this.length, e + 1)), this);
                  }),
                  (n.prototype.isubn = function (t) {
                    if ((r("number" === typeof t), r(t < 67108864), t < 0))
                      return this.iaddn(-t);
                    if (0 !== this.negative)
                      return (
                        (this.negative = 0),
                        this.iaddn(t),
                        (this.negative = 1),
                        this
                      );
                    if (
                      ((this.words[0] -= t),
                      1 === this.length && this.words[0] < 0)
                    )
                      ((this.words[0] = -this.words[0]), (this.negative = 1));
                    else
                      for (var e = 0; e < this.length && this.words[e] < 0; e++)
                        ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
                    return this.strip();
                  }),
                  (n.prototype.addn = function (t) {
                    return this.clone().iaddn(t);
                  }),
                  (n.prototype.subn = function (t) {
                    return this.clone().isubn(t);
                  }),
                  (n.prototype.iabs = function () {
                    return ((this.negative = 0), this);
                  }),
                  (n.prototype.abs = function () {
                    return this.clone().iabs();
                  }),
                  (n.prototype._ishlnsubmul = function (t, e, i) {
                    var n,
                      o,
                      s = t.length + i;
                    this._expand(s);
                    var a = 0;
                    for (n = 0; n < t.length; n++) {
                      o = (0 | this.words[n + i]) + a;
                      var h = (0 | t.words[n]) * e;
                      ((o -= 67108863 & h),
                        (a = (o >> 26) - ((h / 67108864) | 0)),
                        (this.words[n + i] = 67108863 & o));
                    }
                    for (; n < this.length - i; n++)
                      ((o = (0 | this.words[n + i]) + a),
                        (a = o >> 26),
                        (this.words[n + i] = 67108863 & o));
                    if (0 === a) return this.strip();
                    for (r(-1 === a), a = 0, n = 0; n < this.length; n++)
                      ((o = -(0 | this.words[n]) + a),
                        (a = o >> 26),
                        (this.words[n] = 67108863 & o));
                    return ((this.negative = 1), this.strip());
                  }),
                  (n.prototype._wordDiv = function (t, e) {
                    var r = this.length - t.length,
                      i = this.clone(),
                      o = t,
                      s = 0 | o.words[o.length - 1],
                      a = this._countBits(s);
                    ((r = 26 - a),
                      0 !== r &&
                        ((o = o.ushln(r)),
                        i.iushln(r),
                        (s = 0 | o.words[o.length - 1])));
                    var h,
                      u = i.length - o.length;
                    if ("mod" !== e) {
                      ((h = new n(null)),
                        (h.length = u + 1),
                        (h.words = new Array(h.length)));
                      for (var l = 0; l < h.length; l++) h.words[l] = 0;
                    }
                    var f = i.clone()._ishlnsubmul(o, 1, u);
                    0 === f.negative && ((i = f), h && (h.words[u] = 1));
                    for (var c = u - 1; c >= 0; c--) {
                      var d =
                        67108864 * (0 | i.words[o.length + c]) +
                        (0 | i.words[o.length + c - 1]);
                      ((d = Math.min((d / s) | 0, 67108863)),
                        i._ishlnsubmul(o, d, c));
                      while (0 !== i.negative)
                        (d--,
                          (i.negative = 0),
                          i._ishlnsubmul(o, 1, c),
                          i.isZero() || (i.negative ^= 1));
                      h && (h.words[c] = d);
                    }
                    return (
                      h && h.strip(),
                      i.strip(),
                      "div" !== e && 0 !== r && i.iushrn(r),
                      { div: h || null, mod: i }
                    );
                  }),
                  (n.prototype.divmod = function (t, e, i) {
                    return (
                      r(!t.isZero()),
                      this.isZero()
                        ? { div: new n(0), mod: new n(0) }
                        : 0 !== this.negative && 0 === t.negative
                          ? ((a = this.neg().divmod(t, e)),
                            "mod" !== e && (o = a.div.neg()),
                            "div" !== e &&
                              ((s = a.mod.neg()),
                              i && 0 !== s.negative && s.iadd(t)),
                            { div: o, mod: s })
                          : 0 === this.negative && 0 !== t.negative
                            ? ((a = this.divmod(t.neg(), e)),
                              "mod" !== e && (o = a.div.neg()),
                              { div: o, mod: a.mod })
                            : 0 !== (this.negative & t.negative)
                              ? ((a = this.neg().divmod(t.neg(), e)),
                                "div" !== e &&
                                  ((s = a.mod.neg()),
                                  i && 0 !== s.negative && s.isub(t)),
                                { div: a.div, mod: s })
                              : t.length > this.length || this.cmp(t) < 0
                                ? { div: new n(0), mod: this }
                                : 1 === t.length
                                  ? "div" === e
                                    ? { div: this.divn(t.words[0]), mod: null }
                                    : "mod" === e
                                      ? {
                                          div: null,
                                          mod: new n(this.modn(t.words[0])),
                                        }
                                      : {
                                          div: this.divn(t.words[0]),
                                          mod: new n(this.modn(t.words[0])),
                                        }
                                  : this._wordDiv(t, e)
                    );
                    var o, s, a;
                  }),
                  (n.prototype.div = function (t) {
                    return this.divmod(t, "div", !1).div;
                  }),
                  (n.prototype.mod = function (t) {
                    return this.divmod(t, "mod", !1).mod;
                  }),
                  (n.prototype.umod = function (t) {
                    return this.divmod(t, "mod", !0).mod;
                  }),
                  (n.prototype.divRound = function (t) {
                    var e = this.divmod(t);
                    if (e.mod.isZero()) return e.div;
                    var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                      i = t.ushrn(1),
                      n = t.andln(1),
                      o = r.cmp(i);
                    return o < 0 || (1 === n && 0 === o)
                      ? e.div
                      : 0 !== e.div.negative
                        ? e.div.isubn(1)
                        : e.div.iaddn(1);
                  }),
                  (n.prototype.modn = function (t) {
                    r(t <= 67108863);
                    for (
                      var e = (1 << 26) % t, i = 0, n = this.length - 1;
                      n >= 0;
                      n--
                    )
                      i = (e * i + (0 | this.words[n])) % t;
                    return i;
                  }),
                  (n.prototype.idivn = function (t) {
                    r(t <= 67108863);
                    for (var e = 0, i = this.length - 1; i >= 0; i--) {
                      var n = (0 | this.words[i]) + 67108864 * e;
                      ((this.words[i] = (n / t) | 0), (e = n % t));
                    }
                    return this.strip();
                  }),
                  (n.prototype.divn = function (t) {
                    return this.clone().idivn(t);
                  }),
                  (n.prototype.egcd = function (t) {
                    (r(0 === t.negative), r(!t.isZero()));
                    var e = this,
                      i = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    var o = new n(1),
                      s = new n(0),
                      a = new n(0),
                      h = new n(1),
                      u = 0;
                    while (e.isEven() && i.isEven())
                      (e.iushrn(1), i.iushrn(1), ++u);
                    var l = i.clone(),
                      f = e.clone();
                    while (!e.isZero()) {
                      for (
                        var c = 0, d = 1;
                        0 === (e.words[0] & d) && c < 26;
                        ++c, d <<= 1
                      );
                      if (c > 0) {
                        e.iushrn(c);
                        while (c-- > 0)
                          ((o.isOdd() || s.isOdd()) && (o.iadd(l), s.isub(f)),
                            o.iushrn(1),
                            s.iushrn(1));
                      }
                      for (
                        var p = 0, m = 1;
                        0 === (i.words[0] & m) && p < 26;
                        ++p, m <<= 1
                      );
                      if (p > 0) {
                        i.iushrn(p);
                        while (p-- > 0)
                          ((a.isOdd() || h.isOdd()) && (a.iadd(l), h.isub(f)),
                            a.iushrn(1),
                            h.iushrn(1));
                      }
                      e.cmp(i) >= 0
                        ? (e.isub(i), o.isub(a), s.isub(h))
                        : (i.isub(e), a.isub(o), h.isub(s));
                    }
                    return { a: a, b: h, gcd: i.iushln(u) };
                  }),
                  (n.prototype._invmp = function (t) {
                    (r(0 === t.negative), r(!t.isZero()));
                    var e = this,
                      i = t.clone();
                    e = 0 !== e.negative ? e.umod(t) : e.clone();
                    var o,
                      s = new n(1),
                      a = new n(0),
                      h = i.clone();
                    while (e.cmpn(1) > 0 && i.cmpn(1) > 0) {
                      for (
                        var u = 0, l = 1;
                        0 === (e.words[0] & l) && u < 26;
                        ++u, l <<= 1
                      );
                      if (u > 0) {
                        e.iushrn(u);
                        while (u-- > 0) (s.isOdd() && s.iadd(h), s.iushrn(1));
                      }
                      for (
                        var f = 0, c = 1;
                        0 === (i.words[0] & c) && f < 26;
                        ++f, c <<= 1
                      );
                      if (f > 0) {
                        i.iushrn(f);
                        while (f-- > 0) (a.isOdd() && a.iadd(h), a.iushrn(1));
                      }
                      e.cmp(i) >= 0
                        ? (e.isub(i), s.isub(a))
                        : (i.isub(e), a.isub(s));
                    }
                    return (
                      (o = 0 === e.cmpn(1) ? s : a),
                      o.cmpn(0) < 0 && o.iadd(t),
                      o
                    );
                  }),
                  (n.prototype.gcd = function (t) {
                    if (this.isZero()) return t.abs();
                    if (t.isZero()) return this.abs();
                    var e = this.clone(),
                      r = t.clone();
                    ((e.negative = 0), (r.negative = 0));
                    for (var i = 0; e.isEven() && r.isEven(); i++)
                      (e.iushrn(1), r.iushrn(1));
                    do {
                      while (e.isEven()) e.iushrn(1);
                      while (r.isEven()) r.iushrn(1);
                      var n = e.cmp(r);
                      if (n < 0) {
                        var o = e;
                        ((e = r), (r = o));
                      } else if (0 === n || 0 === r.cmpn(1)) break;
                      e.isub(r);
                    } while (1);
                    return r.iushln(i);
                  }),
                  (n.prototype.invm = function (t) {
                    return this.egcd(t).a.umod(t);
                  }),
                  (n.prototype.isEven = function () {
                    return 0 === (1 & this.words[0]);
                  }),
                  (n.prototype.isOdd = function () {
                    return 1 === (1 & this.words[0]);
                  }),
                  (n.prototype.andln = function (t) {
                    return this.words[0] & t;
                  }),
                  (n.prototype.bincn = function (t) {
                    r("number" === typeof t);
                    var e = t % 26,
                      i = (t - e) / 26,
                      n = 1 << e;
                    if (this.length <= i)
                      return (this._expand(i + 1), (this.words[i] |= n), this);
                    for (var o = n, s = i; 0 !== o && s < this.length; s++) {
                      var a = 0 | this.words[s];
                      ((a += o),
                        (o = a >>> 26),
                        (a &= 67108863),
                        (this.words[s] = a));
                    }
                    return (
                      0 !== o && ((this.words[s] = o), this.length++),
                      this
                    );
                  }),
                  (n.prototype.isZero = function () {
                    return 1 === this.length && 0 === this.words[0];
                  }),
                  (n.prototype.cmpn = function (t) {
                    var e,
                      i = t < 0;
                    if (0 !== this.negative && !i) return -1;
                    if (0 === this.negative && i) return 1;
                    if ((this.strip(), this.length > 1)) e = 1;
                    else {
                      (i && (t = -t), r(t <= 67108863, "Number is too big"));
                      var n = 0 | this.words[0];
                      e = n === t ? 0 : n < t ? -1 : 1;
                    }
                    return 0 !== this.negative ? 0 | -e : e;
                  }),
                  (n.prototype.cmp = function (t) {
                    if (0 !== this.negative && 0 === t.negative) return -1;
                    if (0 === this.negative && 0 !== t.negative) return 1;
                    var e = this.ucmp(t);
                    return 0 !== this.negative ? 0 | -e : e;
                  }),
                  (n.prototype.ucmp = function (t) {
                    if (this.length > t.length) return 1;
                    if (this.length < t.length) return -1;
                    for (var e = 0, r = this.length - 1; r >= 0; r--) {
                      var i = 0 | this.words[r],
                        n = 0 | t.words[r];
                      if (i !== n) {
                        i < n ? (e = -1) : i > n && (e = 1);
                        break;
                      }
                    }
                    return e;
                  }),
                  (n.prototype.gtn = function (t) {
                    return 1 === this.cmpn(t);
                  }),
                  (n.prototype.gt = function (t) {
                    return 1 === this.cmp(t);
                  }),
                  (n.prototype.gten = function (t) {
                    return this.cmpn(t) >= 0;
                  }),
                  (n.prototype.gte = function (t) {
                    return this.cmp(t) >= 0;
                  }),
                  (n.prototype.ltn = function (t) {
                    return -1 === this.cmpn(t);
                  }),
                  (n.prototype.lt = function (t) {
                    return -1 === this.cmp(t);
                  }),
                  (n.prototype.lten = function (t) {
                    return this.cmpn(t) <= 0;
                  }),
                  (n.prototype.lte = function (t) {
                    return this.cmp(t) <= 0;
                  }),
                  (n.prototype.eqn = function (t) {
                    return 0 === this.cmpn(t);
                  }),
                  (n.prototype.eq = function (t) {
                    return 0 === this.cmp(t);
                  }),
                  (n.red = function (t) {
                    return new A(t);
                  }),
                  (n.prototype.toRed = function (t) {
                    return (
                      r(!this.red, "Already a number in reduction context"),
                      r(0 === this.negative, "red works only with positives"),
                      t.convertTo(this)._forceRed(t)
                    );
                  }),
                  (n.prototype.fromRed = function () {
                    return (
                      r(
                        this.red,
                        "fromRed works only with numbers in reduction context",
                      ),
                      this.red.convertFrom(this)
                    );
                  }),
                  (n.prototype._forceRed = function (t) {
                    return ((this.red = t), this);
                  }),
                  (n.prototype.forceRed = function (t) {
                    return (
                      r(!this.red, "Already a number in reduction context"),
                      this._forceRed(t)
                    );
                  }),
                  (n.prototype.redAdd = function (t) {
                    return (
                      r(this.red, "redAdd works only with red numbers"),
                      this.red.add(this, t)
                    );
                  }),
                  (n.prototype.redIAdd = function (t) {
                    return (
                      r(this.red, "redIAdd works only with red numbers"),
                      this.red.iadd(this, t)
                    );
                  }),
                  (n.prototype.redSub = function (t) {
                    return (
                      r(this.red, "redSub works only with red numbers"),
                      this.red.sub(this, t)
                    );
                  }),
                  (n.prototype.redISub = function (t) {
                    return (
                      r(this.red, "redISub works only with red numbers"),
                      this.red.isub(this, t)
                    );
                  }),
                  (n.prototype.redShl = function (t) {
                    return (
                      r(this.red, "redShl works only with red numbers"),
                      this.red.shl(this, t)
                    );
                  }),
                  (n.prototype.redMul = function (t) {
                    return (
                      r(this.red, "redMul works only with red numbers"),
                      this.red._verify2(this, t),
                      this.red.mul(this, t)
                    );
                  }),
                  (n.prototype.redIMul = function (t) {
                    return (
                      r(this.red, "redMul works only with red numbers"),
                      this.red._verify2(this, t),
                      this.red.imul(this, t)
                    );
                  }),
                  (n.prototype.redSqr = function () {
                    return (
                      r(this.red, "redSqr works only with red numbers"),
                      this.red._verify1(this),
                      this.red.sqr(this)
                    );
                  }),
                  (n.prototype.redISqr = function () {
                    return (
                      r(this.red, "redISqr works only with red numbers"),
                      this.red._verify1(this),
                      this.red.isqr(this)
                    );
                  }),
                  (n.prototype.redSqrt = function () {
                    return (
                      r(this.red, "redSqrt works only with red numbers"),
                      this.red._verify1(this),
                      this.red.sqrt(this)
                    );
                  }),
                  (n.prototype.redInvm = function () {
                    return (
                      r(this.red, "redInvm works only with red numbers"),
                      this.red._verify1(this),
                      this.red.invm(this)
                    );
                  }),
                  (n.prototype.redNeg = function () {
                    return (
                      r(this.red, "redNeg works only with red numbers"),
                      this.red._verify1(this),
                      this.red.neg(this)
                    );
                  }),
                  (n.prototype.redPow = function (t) {
                    return (
                      r(this.red && !t.red, "redPow(normalNum)"),
                      this.red._verify1(this),
                      this.red.pow(this, t)
                    );
                  }));
                var y = { k256: null, p224: null, p192: null, p25519: null };
                function v(t, e) {
                  ((this.name = t),
                    (this.p = new n(e, 16)),
                    (this.n = this.p.bitLength()),
                    (this.k = new n(1).iushln(this.n).isub(this.p)),
                    (this.tmp = this._tmp()));
                }
                function b() {
                  v.call(
                    this,
                    "k256",
                    "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                  );
                }
                function M() {
                  v.call(
                    this,
                    "p224",
                    "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                  );
                }
                function _() {
                  v.call(
                    this,
                    "p192",
                    "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                  );
                }
                function E() {
                  v.call(
                    this,
                    "25519",
                    "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                  );
                }
                function A(t) {
                  if ("string" === typeof t) {
                    var e = n._prime(t);
                    ((this.m = e.p), (this.prime = e));
                  } else
                    (r(t.gtn(1), "modulus must be greater than 1"),
                      (this.m = t),
                      (this.prime = null));
                }
                function T(t) {
                  (A.call(this, t),
                    (this.shift = this.m.bitLength()),
                    this.shift % 26 !== 0 &&
                      (this.shift += 26 - (this.shift % 26)),
                    (this.r = new n(1).iushln(this.shift)),
                    (this.r2 = this.imod(this.r.sqr())),
                    (this.rinv = this.r._invmp(this.m)),
                    (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
                    (this.minv = this.minv.umod(this.r)),
                    (this.minv = this.r.sub(this.minv)));
                }
                ((v.prototype._tmp = function () {
                  var t = new n(null);
                  return ((t.words = new Array(Math.ceil(this.n / 13))), t);
                }),
                  (v.prototype.ireduce = function (t) {
                    var e,
                      r = t;
                    do {
                      (this.split(r, this.tmp),
                        (r = this.imulK(r)),
                        (r = r.iadd(this.tmp)),
                        (e = r.bitLength()));
                    } while (e > this.n);
                    var i = e < this.n ? -1 : r.ucmp(this.p);
                    return (
                      0 === i
                        ? ((r.words[0] = 0), (r.length = 1))
                        : i > 0
                          ? r.isub(this.p)
                          : void 0 !== r.strip
                            ? r.strip()
                            : r._strip(),
                      r
                    );
                  }),
                  (v.prototype.split = function (t, e) {
                    t.iushrn(this.n, 0, e);
                  }),
                  (v.prototype.imulK = function (t) {
                    return t.imul(this.k);
                  }),
                  i(b, v),
                  (b.prototype.split = function (t, e) {
                    for (
                      var r = 4194303, i = Math.min(t.length, 9), n = 0;
                      n < i;
                      n++
                    )
                      e.words[n] = t.words[n];
                    if (((e.length = i), t.length <= 9))
                      return ((t.words[0] = 0), void (t.length = 1));
                    var o = t.words[9];
                    for (
                      e.words[e.length++] = o & r, n = 10;
                      n < t.length;
                      n++
                    ) {
                      var s = 0 | t.words[n];
                      ((t.words[n - 10] = ((s & r) << 4) | (o >>> 22)),
                        (o = s));
                    }
                    ((o >>>= 22),
                      (t.words[n - 10] = o),
                      0 === o && t.length > 10
                        ? (t.length -= 10)
                        : (t.length -= 9));
                  }),
                  (b.prototype.imulK = function (t) {
                    ((t.words[t.length] = 0),
                      (t.words[t.length + 1] = 0),
                      (t.length += 2));
                    for (var e = 0, r = 0; r < t.length; r++) {
                      var i = 0 | t.words[r];
                      ((e += 977 * i),
                        (t.words[r] = 67108863 & e),
                        (e = 64 * i + ((e / 67108864) | 0)));
                    }
                    return (
                      0 === t.words[t.length - 1] &&
                        (t.length--, 0 === t.words[t.length - 1] && t.length--),
                      t
                    );
                  }),
                  i(M, v),
                  i(_, v),
                  i(E, v),
                  (E.prototype.imulK = function (t) {
                    for (var e = 0, r = 0; r < t.length; r++) {
                      var i = 19 * (0 | t.words[r]) + e,
                        n = 67108863 & i;
                      ((i >>>= 26), (t.words[r] = n), (e = i));
                    }
                    return (0 !== e && (t.words[t.length++] = e), t);
                  }),
                  (n._prime = function (t) {
                    if (y[t]) return y[t];
                    var e;
                    if ("k256" === t) e = new b();
                    else if ("p224" === t) e = new M();
                    else if ("p192" === t) e = new _();
                    else {
                      if ("p25519" !== t) throw new Error("Unknown prime " + t);
                      e = new E();
                    }
                    return ((y[t] = e), e);
                  }),
                  (A.prototype._verify1 = function (t) {
                    (r(0 === t.negative, "red works only with positives"),
                      r(t.red, "red works only with red numbers"));
                  }),
                  (A.prototype._verify2 = function (t, e) {
                    (r(
                      0 === (t.negative | e.negative),
                      "red works only with positives",
                    ),
                      r(
                        t.red && t.red === e.red,
                        "red works only with red numbers",
                      ));
                  }),
                  (A.prototype.imod = function (t) {
                    return this.prime
                      ? this.prime.ireduce(t)._forceRed(this)
                      : t.umod(this.m)._forceRed(this);
                  }),
                  (A.prototype.neg = function (t) {
                    return t.isZero()
                      ? t.clone()
                      : this.m.sub(t)._forceRed(this);
                  }),
                  (A.prototype.add = function (t, e) {
                    this._verify2(t, e);
                    var r = t.add(e);
                    return (
                      r.cmp(this.m) >= 0 && r.isub(this.m),
                      r._forceRed(this)
                    );
                  }),
                  (A.prototype.iadd = function (t, e) {
                    this._verify2(t, e);
                    var r = t.iadd(e);
                    return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
                  }),
                  (A.prototype.sub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.sub(e);
                    return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
                  }),
                  (A.prototype.isub = function (t, e) {
                    this._verify2(t, e);
                    var r = t.isub(e);
                    return (r.cmpn(0) < 0 && r.iadd(this.m), r);
                  }),
                  (A.prototype.shl = function (t, e) {
                    return (this._verify1(t), this.imod(t.ushln(e)));
                  }),
                  (A.prototype.imul = function (t, e) {
                    return (this._verify2(t, e), this.imod(t.imul(e)));
                  }),
                  (A.prototype.mul = function (t, e) {
                    return (this._verify2(t, e), this.imod(t.mul(e)));
                  }),
                  (A.prototype.isqr = function (t) {
                    return this.imul(t, t.clone());
                  }),
                  (A.prototype.sqr = function (t) {
                    return this.mul(t, t);
                  }),
                  (A.prototype.sqrt = function (t) {
                    if (t.isZero()) return t.clone();
                    var e = this.m.andln(3);
                    if ((r(e % 2 === 1), 3 === e)) {
                      var i = this.m.add(new n(1)).iushrn(2);
                      return this.pow(t, i);
                    }
                    var o = this.m.subn(1),
                      s = 0;
                    while (!o.isZero() && 0 === o.andln(1)) (s++, o.iushrn(1));
                    r(!o.isZero());
                    var a = new n(1).toRed(this),
                      h = a.redNeg(),
                      u = this.m.subn(1).iushrn(1),
                      l = this.m.bitLength();
                    l = new n(2 * l * l).toRed(this);
                    while (0 !== this.pow(l, u).cmp(h)) l.redIAdd(h);
                    var f = this.pow(l, o),
                      c = this.pow(t, o.addn(1).iushrn(1)),
                      d = this.pow(t, o),
                      p = s;
                    while (0 !== d.cmp(a)) {
                      for (var m = d, g = 0; 0 !== m.cmp(a); g++)
                        m = m.redSqr();
                      r(g < p);
                      var w = this.pow(f, new n(1).iushln(p - g - 1));
                      ((c = c.redMul(w)),
                        (f = w.redSqr()),
                        (d = d.redMul(f)),
                        (p = g));
                    }
                    return c;
                  }),
                  (A.prototype.invm = function (t) {
                    var e = t._invmp(this.m);
                    return 0 !== e.negative
                      ? ((e.negative = 0), this.imod(e).redNeg())
                      : this.imod(e);
                  }),
                  (A.prototype.pow = function (t, e) {
                    if (e.isZero()) return new n(1).toRed(this);
                    if (0 === e.cmpn(1)) return t.clone();
                    var r = 4,
                      i = new Array(1 << r);
                    ((i[0] = new n(1).toRed(this)), (i[1] = t));
                    for (var o = 2; o < i.length; o++)
                      i[o] = this.mul(i[o - 1], t);
                    var s = i[0],
                      a = 0,
                      h = 0,
                      u = e.bitLength() % 26;
                    for (0 === u && (u = 26), o = e.length - 1; o >= 0; o--) {
                      for (var l = e.words[o], f = u - 1; f >= 0; f--) {
                        var c = (l >> f) & 1;
                        (s !== i[0] && (s = this.sqr(s)),
                          0 !== c || 0 !== a
                            ? ((a <<= 1),
                              (a |= c),
                              h++,
                              (h === r || (0 === o && 0 === f)) &&
                                ((s = this.mul(s, i[a])), (h = 0), (a = 0)))
                            : (h = 0));
                      }
                      u = 26;
                    }
                    return s;
                  }),
                  (A.prototype.convertTo = function (t) {
                    var e = t.umod(this.m);
                    return e === t ? e.clone() : e;
                  }),
                  (A.prototype.convertFrom = function (t) {
                    var e = t.clone();
                    return ((e.red = null), e);
                  }),
                  (n.mont = function (t) {
                    return new T(t);
                  }),
                  i(T, A),
                  (T.prototype.convertTo = function (t) {
                    return this.imod(t.ushln(this.shift));
                  }),
                  (T.prototype.convertFrom = function (t) {
                    var e = this.imod(t.mul(this.rinv));
                    return ((e.red = null), e);
                  }),
                  (T.prototype.imul = function (t, e) {
                    if (t.isZero() || e.isZero())
                      return ((t.words[0] = 0), (t.length = 1), t);
                    var r = t.imul(e),
                      i = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      n = r.isub(i).iushrn(this.shift),
                      o = n;
                    return (
                      n.cmp(this.m) >= 0
                        ? (o = n.isub(this.m))
                        : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                      o._forceRed(this)
                    );
                  }),
                  (T.prototype.mul = function (t, e) {
                    if (t.isZero() || e.isZero())
                      return new n(0)._forceRed(this);
                    var r = t.mul(e),
                      i = r
                        .maskn(this.shift)
                        .mul(this.minv)
                        .imaskn(this.shift)
                        .mul(this.m),
                      o = r.isub(i).iushrn(this.shift),
                      s = o;
                    return (
                      o.cmp(this.m) >= 0
                        ? (s = o.isub(this.m))
                        : o.cmpn(0) < 0 && (s = o.iadd(this.m)),
                      s._forceRed(this)
                    );
                  }),
                  (T.prototype.invm = function (t) {
                    var e = this.imod(t._invmp(this.m).mul(this.r2));
                    return e._forceRed(this);
                  }));
              })(t, c);
            })(m));
          var xt = m.exports,
            Ot = d(xt),
            Lt = Ut,
            It = null;
          try {
            It = new WebAssembly.Instance(
              new WebAssembly.Module(
                new Uint8Array([
                  0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4,
                  127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6,
                  1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5,
                  100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3,
                  5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0,
                  5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1,
                  6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66,
                  32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126,
                  34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126,
                  32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
                  173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0,
                  32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32,
                  134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34,
                  4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32,
                  0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173,
                  66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
                  167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
                  132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66,
                  32, 135, 167, 36, 0, 32, 4, 167, 11,
                ]),
              ),
              {},
            ).exports;
          } catch (ke) {}
          function Ut(t, e, r) {
            ((this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!r));
          }
          function Dt(t) {
            return !0 === (t && t["__isLong__"]);
          }
          (Ut.prototype.__isLong__,
            Object.defineProperty(Ut.prototype, "__isLong__", { value: !0 }),
            (Ut.isLong = Dt));
          var Gt = {},
            Ft = {};
          function qt(t, e) {
            var r, i, n;
            return e
              ? ((t >>>= 0),
                (n = 0 <= t && t < 256) && ((i = Ft[t]), i)
                  ? i
                  : ((r = Yt(t, (0 | t) < 0 ? -1 : 0, !0)),
                    n && (Ft[t] = r),
                    r))
              : ((t |= 0),
                (n = -128 <= t && t < 128) && ((i = Gt[t]), i)
                  ? i
                  : ((r = Yt(t, t < 0 ? -1 : 0, !1)), n && (Gt[t] = r), r));
          }
          function jt(t, e) {
            if (isNaN(t)) return e ? te : $t;
            if (e) {
              if (t < 0) return te;
              if (t >= Jt) return oe;
            } else {
              if (t <= -Xt) return se;
              if (t + 1 >= Xt) return ne;
            }
            return t < 0 ? jt(-t, e).neg() : Yt((t % Wt) | 0, (t / Wt) | 0, e);
          }
          function Yt(t, e, r) {
            return new Ut(t, e, r);
          }
          ((Ut.fromInt = qt), (Ut.fromNumber = jt), (Ut.fromBits = Yt));
          var Zt = Math.pow;
          function zt(t, e, r) {
            if (0 === t.length) throw Error("empty string");
            if (
              "NaN" === t ||
              "Infinity" === t ||
              "+Infinity" === t ||
              "-Infinity" === t
            )
              return $t;
            if (
              ("number" === typeof e ? ((r = e), (e = !1)) : (e = !!e),
              (r = r || 10),
              r < 2 || 36 < r)
            )
              throw RangeError("radix");
            var i;
            if ((i = t.indexOf("-")) > 0) throw Error("interior hyphen");
            if (0 === i) return zt(t.substring(1), e, r).neg();
            for (var n = jt(Zt(r, 8)), o = $t, s = 0; s < t.length; s += 8) {
              var a = Math.min(8, t.length - s),
                h = parseInt(t.substring(s, s + a), r);
              if (a < 8) {
                var u = jt(Zt(r, a));
                o = o.mul(u).add(jt(h));
              } else ((o = o.mul(n)), (o = o.add(jt(h))));
            }
            return ((o.unsigned = e), o);
          }
          function Vt(t, e) {
            return "number" === typeof t
              ? jt(t, e)
              : "string" === typeof t
                ? zt(t, e)
                : Yt(t.low, t.high, "boolean" === typeof e ? e : t.unsigned);
          }
          ((Ut.fromString = zt), (Ut.fromValue = Vt));
          var Kt = 65536,
            Ht = 1 << 24,
            Wt = Kt * Kt,
            Jt = Wt * Wt,
            Xt = Jt / 2,
            Qt = qt(Ht),
            $t = qt(0);
          Ut.ZERO = $t;
          var te = qt(0, !0);
          Ut.UZERO = te;
          var ee = qt(1);
          Ut.ONE = ee;
          var re = qt(1, !0);
          Ut.UONE = re;
          var ie = qt(-1);
          Ut.NEG_ONE = ie;
          var ne = Yt(-1, 2147483647, !1);
          Ut.MAX_VALUE = ne;
          var oe = Yt(-1, -1, !0);
          Ut.MAX_UNSIGNED_VALUE = oe;
          var se = Yt(0, -2147483648, !1);
          Ut.MIN_VALUE = se;
          var ae = Ut.prototype;
          ((ae.toInt = function () {
            return this.unsigned ? this.low >>> 0 : this.low;
          }),
            (ae.toNumber = function () {
              return this.unsigned
                ? (this.high >>> 0) * Wt + (this.low >>> 0)
                : this.high * Wt + (this.low >>> 0);
            }),
            (ae.toString = function (t) {
              if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
              if (this.isZero()) return "0";
              if (this.isNegative()) {
                if (this.eq(se)) {
                  var e = jt(t),
                    r = this.div(e),
                    i = r.mul(e).sub(this);
                  return r.toString(t) + i.toInt().toString(t);
                }
                return "-" + this.neg().toString(t);
              }
              var n = jt(Zt(t, 6), this.unsigned),
                o = this,
                s = "";
              while (1) {
                var a = o.div(n),
                  h = o.sub(a.mul(n)).toInt() >>> 0,
                  u = h.toString(t);
                if (((o = a), o.isZero())) return u + s;
                while (u.length < 6) u = "0" + u;
                s = "" + u + s;
              }
            }),
            (ae.getHighBits = function () {
              return this.high;
            }),
            (ae.getHighBitsUnsigned = function () {
              return this.high >>> 0;
            }),
            (ae.getLowBits = function () {
              return this.low;
            }),
            (ae.getLowBitsUnsigned = function () {
              return this.low >>> 0;
            }),
            (ae.getNumBitsAbs = function () {
              if (this.isNegative())
                return this.eq(se) ? 64 : this.neg().getNumBitsAbs();
              for (
                var t = 0 != this.high ? this.high : this.low, e = 31;
                e > 0;
                e--
              )
                if (0 != (t & (1 << e))) break;
              return 0 != this.high ? e + 33 : e + 1;
            }),
            (ae.isZero = function () {
              return 0 === this.high && 0 === this.low;
            }),
            (ae.eqz = ae.isZero),
            (ae.isNegative = function () {
              return !this.unsigned && this.high < 0;
            }),
            (ae.isPositive = function () {
              return this.unsigned || this.high >= 0;
            }),
            (ae.isOdd = function () {
              return 1 === (1 & this.low);
            }),
            (ae.isEven = function () {
              return 0 === (1 & this.low);
            }),
            (ae.equals = function (t) {
              return (
                Dt(t) || (t = Vt(t)),
                (this.unsigned === t.unsigned ||
                  this.high >>> 31 !== 1 ||
                  t.high >>> 31 !== 1) &&
                  this.high === t.high &&
                  this.low === t.low
              );
            }),
            (ae.eq = ae.equals),
            (ae.notEquals = function (t) {
              return !this.eq(t);
            }),
            (ae.neq = ae.notEquals),
            (ae.ne = ae.notEquals),
            (ae.lessThan = function (t) {
              return this.comp(t) < 0;
            }),
            (ae.lt = ae.lessThan),
            (ae.lessThanOrEqual = function (t) {
              return this.comp(t) <= 0;
            }),
            (ae.lte = ae.lessThanOrEqual),
            (ae.le = ae.lessThanOrEqual),
            (ae.greaterThan = function (t) {
              return this.comp(t) > 0;
            }),
            (ae.gt = ae.greaterThan),
            (ae.greaterThanOrEqual = function (t) {
              return this.comp(t) >= 0;
            }),
            (ae.gte = ae.greaterThanOrEqual),
            (ae.ge = ae.greaterThanOrEqual),
            (ae.compare = function (t) {
              if ((Dt(t) || (t = Vt(t)), this.eq(t))) return 0;
              var e = this.isNegative(),
                r = t.isNegative();
              return e && !r
                ? -1
                : !e && r
                  ? 1
                  : this.unsigned
                    ? t.high >>> 0 > this.high >>> 0 ||
                      (t.high === this.high && t.low >>> 0 > this.low >>> 0)
                      ? -1
                      : 1
                    : this.sub(t).isNegative()
                      ? -1
                      : 1;
            }),
            (ae.comp = ae.compare),
            (ae.negate = function () {
              return !this.unsigned && this.eq(se) ? se : this.not().add(ee);
            }),
            (ae.neg = ae.negate),
            (ae.add = function (t) {
              Dt(t) || (t = Vt(t));
              var e = this.high >>> 16,
                r = 65535 & this.high,
                i = this.low >>> 16,
                n = 65535 & this.low,
                o = t.high >>> 16,
                s = 65535 & t.high,
                a = t.low >>> 16,
                h = 65535 & t.low,
                u = 0,
                l = 0,
                f = 0,
                c = 0;
              return (
                (c += n + h),
                (f += c >>> 16),
                (c &= 65535),
                (f += i + a),
                (l += f >>> 16),
                (f &= 65535),
                (l += r + s),
                (u += l >>> 16),
                (l &= 65535),
                (u += e + o),
                (u &= 65535),
                Yt((f << 16) | c, (u << 16) | l, this.unsigned)
              );
            }),
            (ae.subtract = function (t) {
              return (Dt(t) || (t = Vt(t)), this.add(t.neg()));
            }),
            (ae.sub = ae.subtract),
            (ae.multiply = function (t) {
              if (this.isZero()) return $t;
              if ((Dt(t) || (t = Vt(t)), It)) {
                var e = It.mul(this.low, this.high, t.low, t.high);
                return Yt(e, It.get_high(), this.unsigned);
              }
              if (t.isZero()) return $t;
              if (this.eq(se)) return t.isOdd() ? se : $t;
              if (t.eq(se)) return this.isOdd() ? se : $t;
              if (this.isNegative())
                return t.isNegative()
                  ? this.neg().mul(t.neg())
                  : this.neg().mul(t).neg();
              if (t.isNegative()) return this.mul(t.neg()).neg();
              if (this.lt(Qt) && t.lt(Qt))
                return jt(this.toNumber() * t.toNumber(), this.unsigned);
              var r = this.high >>> 16,
                i = 65535 & this.high,
                n = this.low >>> 16,
                o = 65535 & this.low,
                s = t.high >>> 16,
                a = 65535 & t.high,
                h = t.low >>> 16,
                u = 65535 & t.low,
                l = 0,
                f = 0,
                c = 0,
                d = 0;
              return (
                (d += o * u),
                (c += d >>> 16),
                (d &= 65535),
                (c += n * u),
                (f += c >>> 16),
                (c &= 65535),
                (c += o * h),
                (f += c >>> 16),
                (c &= 65535),
                (f += i * u),
                (l += f >>> 16),
                (f &= 65535),
                (f += n * h),
                (l += f >>> 16),
                (f &= 65535),
                (f += o * a),
                (l += f >>> 16),
                (f &= 65535),
                (l += r * u + i * h + n * a + o * s),
                (l &= 65535),
                Yt((c << 16) | d, (l << 16) | f, this.unsigned)
              );
            }),
            (ae.mul = ae.multiply),
            (ae.divide = function (t) {
              if ((Dt(t) || (t = Vt(t)), t.isZero()))
                throw Error("division by zero");
              if (It) {
                if (
                  !this.unsigned &&
                  -2147483648 === this.high &&
                  -1 === t.low &&
                  -1 === t.high
                )
                  return this;
                var e = (this.unsigned ? It.div_u : It.div_s)(
                  this.low,
                  this.high,
                  t.low,
                  t.high,
                );
                return Yt(e, It.get_high(), this.unsigned);
              }
              if (this.isZero()) return this.unsigned ? te : $t;
              var r, i, n;
              if (this.unsigned) {
                if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return te;
                if (t.gt(this.shru(1))) return re;
                n = te;
              } else {
                if (this.eq(se)) {
                  if (t.eq(ee) || t.eq(ie)) return se;
                  if (t.eq(se)) return ee;
                  var o = this.shr(1);
                  return (
                    (r = o.div(t).shl(1)),
                    r.eq($t)
                      ? t.isNegative()
                        ? ee
                        : ie
                      : ((i = this.sub(t.mul(r))), (n = r.add(i.div(t))), n)
                  );
                }
                if (t.eq(se)) return this.unsigned ? te : $t;
                if (this.isNegative())
                  return t.isNegative()
                    ? this.neg().div(t.neg())
                    : this.neg().div(t).neg();
                if (t.isNegative()) return this.div(t.neg()).neg();
                n = $t;
              }
              i = this;
              while (i.gte(t)) {
                r = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
                var s = Math.ceil(Math.log(r) / Math.LN2),
                  a = s <= 48 ? 1 : Zt(2, s - 48),
                  h = jt(r),
                  u = h.mul(t);
                while (u.isNegative() || u.gt(i))
                  ((r -= a), (h = jt(r, this.unsigned)), (u = h.mul(t)));
                (h.isZero() && (h = ee), (n = n.add(h)), (i = i.sub(u)));
              }
              return n;
            }),
            (ae.div = ae.divide),
            (ae.modulo = function (t) {
              if ((Dt(t) || (t = Vt(t)), It)) {
                var e = (this.unsigned ? It.rem_u : It.rem_s)(
                  this.low,
                  this.high,
                  t.low,
                  t.high,
                );
                return Yt(e, It.get_high(), this.unsigned);
              }
              return this.sub(this.div(t).mul(t));
            }),
            (ae.mod = ae.modulo),
            (ae.rem = ae.modulo),
            (ae.not = function () {
              return Yt(~this.low, ~this.high, this.unsigned);
            }),
            (ae.and = function (t) {
              return (
                Dt(t) || (t = Vt(t)),
                Yt(this.low & t.low, this.high & t.high, this.unsigned)
              );
            }),
            (ae.or = function (t) {
              return (
                Dt(t) || (t = Vt(t)),
                Yt(this.low | t.low, this.high | t.high, this.unsigned)
              );
            }),
            (ae.xor = function (t) {
              return (
                Dt(t) || (t = Vt(t)),
                Yt(this.low ^ t.low, this.high ^ t.high, this.unsigned)
              );
            }),
            (ae.shiftLeft = function (t) {
              return (
                Dt(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : t < 32
                    ? Yt(
                        this.low << t,
                        (this.high << t) | (this.low >>> (32 - t)),
                        this.unsigned,
                      )
                    : Yt(0, this.low << (t - 32), this.unsigned)
              );
            }),
            (ae.shl = ae.shiftLeft),
            (ae.shiftRight = function (t) {
              return (
                Dt(t) && (t = t.toInt()),
                0 === (t &= 63)
                  ? this
                  : t < 32
                    ? Yt(
                        (this.low >>> t) | (this.high << (32 - t)),
                        this.high >> t,
                        this.unsigned,
                      )
                    : Yt(
                        this.high >> (t - 32),
                        this.high >= 0 ? 0 : -1,
                        this.unsigned,
                      )
              );
            }),
            (ae.shr = ae.shiftRight),
            (ae.shiftRightUnsigned = function (t) {
              if ((Dt(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
              var e = this.high;
              if (t < 32) {
                var r = this.low;
                return Yt((r >>> t) | (e << (32 - t)), e >>> t, this.unsigned);
              }
              return Yt(32 === t ? e : e >>> (t - 32), 0, this.unsigned);
            }),
            (ae.shru = ae.shiftRightUnsigned),
            (ae.shr_u = ae.shiftRightUnsigned),
            (ae.toSigned = function () {
              return this.unsigned ? Yt(this.low, this.high, !1) : this;
            }),
            (ae.toUnsigned = function () {
              return this.unsigned ? this : Yt(this.low, this.high, !0);
            }),
            (ae.toBytes = function (t) {
              return t ? this.toBytesLE() : this.toBytesBE();
            }),
            (ae.toBytesLE = function () {
              var t = this.high,
                e = this.low;
              return [
                255 & e,
                (e >>> 8) & 255,
                (e >>> 16) & 255,
                e >>> 24,
                255 & t,
                (t >>> 8) & 255,
                (t >>> 16) & 255,
                t >>> 24,
              ];
            }),
            (ae.toBytesBE = function () {
              var t = this.high,
                e = this.low;
              return [
                t >>> 24,
                (t >>> 16) & 255,
                (t >>> 8) & 255,
                255 & t,
                e >>> 24,
                (e >>> 16) & 255,
                (e >>> 8) & 255,
                255 & e,
              ];
            }),
            (Ut.fromBytes = function (t, e, r) {
              return r ? Ut.fromBytesLE(t, e) : Ut.fromBytesBE(t, e);
            }),
            (Ut.fromBytesLE = function (t, e) {
              return new Ut(
                t[0] | (t[1] << 8) | (t[2] << 16) | (t[3] << 24),
                t[4] | (t[5] << 8) | (t[6] << 16) | (t[7] << 24),
                e,
              );
            }),
            (Ut.fromBytesBE = function (t, e) {
              return new Ut(
                (t[4] << 24) | (t[5] << 16) | (t[6] << 8) | t[7],
                (t[0] << 24) | (t[1] << 16) | (t[2] << 8) | t[3],
                e,
              );
            }));
          var he,
            ue = d(Lt),
            le = function (t) {
              return ge(t, 40);
            },
            fe = function (t) {
              return !!t.match(/^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$/);
            },
            ce = function (t) {
              return !!t.match(
                /^[1-9ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/,
              );
            },
            de = function (t) {
              return ge(t, 64);
            },
            pe = function (t) {
              return ge(t, 66);
            },
            me = function (t) {
              return ge(t, 128);
            },
            ge = function (t, e) {
              return !!t
                .replace("0x", "")
                .match("^[0-9a-fA-F]{".concat(e, "}$"));
            },
            we = function (t) {
              return "number" === typeof t;
            },
            ye = function (t) {
              return Ot.isBN(t);
            },
            ve = function (t) {
              return ue.isLong(t);
            },
            be = function (t) {
              return "string" === typeof t;
            },
            Me = function (t) {
              if ("object" === typeof t && null !== t) {
                var e = Object.getPrototypeOf(t);
                return e === Object.prototype || null === e;
              }
              return !1;
            },
            _e = "@@ZJS_REQUIRED@@",
            Ee = function (t) {
              if ("function" === typeof t)
                return Object.defineProperty(t, "required", { value: _e });
              throw new Error("fn is not a function");
            },
            Ae = function (t, e) {
              var r, i;
              if (Me(t))
                for (var n in e)
                  if (e.hasOwnProperty(n))
                    try {
                      for (
                        var o = ((r = void 0), l(e[n])), s = o.next();
                        !s.done;
                        s = o.next()
                      ) {
                        var a = s.value,
                          h = t[n];
                        if ("undefined" === typeof h && a.required)
                          throw new Error("Key not found: " + n);
                      }
                    } catch (u) {
                      r = { error: u };
                    } finally {
                      try {
                        s && !s.done && (i = o.return) && i.call(o);
                      } finally {
                        if (r) throw r.error;
                      }
                    }
              return !0;
            },
            Te = Object.freeze({
              __proto__: null,
              isAddress: le,
              isBech32: fe,
              isBase58: ce,
              isPrivateKey: de,
              isPubKey: pe,
              isSignature: me,
              isByteString: ge,
              isNumber: we,
              isBN: ye,
              isLong: ve,
              isString: be,
              isPlainObject: Me,
              required: Ee,
              matchesObject: Ae,
            });
          (function (t) {
            ((t["Zil"] = "zil"), (t["Li"] = "li"), (t["Qa"] = "qa"));
          })(he || (he = {}));
          var Re = { pad: !1 },
            Se = new Map([
              [he.Qa, "1"],
              [he.Li, "1000000"],
              [he.Zil, "1000000000000"],
            ]),
            Pe = function (t) {
              if ("string" === typeof t) {
                if (!t.match(/^-?[0-9.]+$/))
                  throw new Error(
                    "while converting number to string, invalid number value '".concat(
                      t,
                      "', should be a number matching (^-?[0-9.]+).",
                    ),
                  );
                return t;
              }
              if ("number" === typeof t) return String(t);
              if (Ot.isBN(t)) return t.toString(10);
              throw new Error(
                "while converting number to string, invalid number value '"
                  .concat(t, "' type ")
                  .concat(typeof t, "."),
              );
            },
            Be = function (t, e, r) {
              if ((void 0 === r && (r = Re), "qa" === e)) return t.toString(10);
              var i = Se.get(e);
              if (!i) throw new Error("No unit of type ".concat(e, " exists."));
              var n = new Ot(i, 10),
                o = i.length - 1,
                s = t.abs().mod(n).toString(10);
              while (s.length < o) s = "0".concat(s);
              r.pad || (s = s.match(/^([0-9]*[1-9]|0)(0*)/)[1]);
              var a = t.div(n).toString(10);
              return "0" === s ? "".concat(a) : "".concat(a, ".").concat(s);
            },
            Ce = function (t, e) {
              var r = Pe(t),
                i = Se.get(e);
              if (!i) throw new Error("No unit of type ".concat(e, " exists."));
              var n = i.length - 1,
                o = new Ot(i, 10),
                s = "-" === r.substring(0, 1);
              if ((s && (r = r.substring(1)), "." === r))
                throw new Error("Cannot convert ".concat(r, " to Qa."));
              var a = r.split(".");
              if (a.length > 2)
                throw new Error("Cannot convert ".concat(r, " to Qa."));
              var h = f(a, 2),
                u = h[0],
                l = h[1];
              if ((u || (u = "0"), l || (l = "0"), l.length > n))
                throw new Error("Cannot convert ".concat(r, " to Qa."));
              while (l.length < n) l += "0";
              var c = new Ot(u),
                d = new Ot(l),
                p = c.mul(o).add(d);
              return (s && (p = p.neg()), new Ot(p.toString(10), 10));
            },
            Ne = Object.freeze({
              __proto__: null,
              get Units() {
                return he;
              },
              fromQa: Be,
              toQa: Ce,
            });
          ((e.BN = Ot),
            (e.Long = ue),
            (e.bytes = u),
            (e.units = Ne),
            (e.validation = Te),
            Object.defineProperty(e, "__esModule", { value: !0 }));
        });
      }).call(this, r(13));
    },
    7202: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(27),
        o = r(384),
        s = i(r(5894));
      const a = "Transactions not found";
      class ZilliqaAtomicExplorer extends s.default {
        handleRequestError(t, e) {
          var r, i;
          return e.type === n.GET_TRANSACTIONS_TYPE &&
            (null === (r = t.response) ||
            void 0 === r ||
            null === (i = r.data) ||
            void 0 === i
              ? void 0
              : i.error) === a
            ? []
            : super.handleRequestError(t, e);
        }
        getTransactionsModifiedResponse(t, e, r) {
          return (
            void 0 === r && (r = this.wallet.ticker),
            Object.assign(
              { txType: this.getTxType(t) },
              super.getTransactionsModifiedResponse(t, e, r),
            )
          );
        }
        getTransactionsParams(t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { address: t, limit: r, offset: e }
          );
        }
        getTransactionsUrl(t) {
          return "transactions";
        }
        getTransactionParams(t) {
          return { txId: t };
        }
        getTransactionUrl(t) {
          return "transaction";
        }
        getTxDateTime(t) {
          return new Date(t.timestamp);
        }
        getTxDirection(t, e) {
          return e.toAddr === this.getValidChecksumAddress(t);
        }
        getTxHash(t) {
          return t.txId;
        }
        getTxOtherSideAddress(t, e) {
          return this.getBech32Address(
            this.getTxDirection(t, e) ? e.fromAddr : e.toAddr,
          );
        }
        getTxType(t) {
          switch (t.operation) {
            case "Claim rewards":
              return o.TxTypes.CLAIM;
            case "Stake":
              return o.TxTypes.STAKE;
            case "Unstake":
              return o.TxTypes.UNSTAKE;
            case "Withdraw stake":
              return o.TxTypes.WITHDRAW;
            default:
              return o.TxTypes.TRANSFER;
          }
        }
        getTxValue(t, e) {
          return this.wallet.toCurrencyUnit(new this.wallet.BN(e.amount));
        }
        getTxConfirmations(t) {
          return null !== t && void 0 !== t && t.isConfirmed ? 1 : 0;
        }
      }
      e.default = ZilliqaAtomicExplorer;
    },
    7203: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(129));
      const o =
          "64e4ff5271a101d7e73f4ef8df119a01e578fb4215cca4a62e93282c87d67e53",
        s = 25;
      class ViewblockExplorer extends n.default {
        constructor() {
          (super(...arguments),
            (this.defaultTxLimit = s),
            (this.defaultRequestTimeout = 4));
        }
        getAllowedTickers() {
          return ["ZIL"];
        }
        getWalletAddress() {
          return this.activeWalletAddress;
        }
        getInfoUrl(t) {
          return "/addresses/" + t;
        }
        getTransactionsUrl(t) {
          return `/addresses/${t}/txs`;
        }
        getTransactionUrl(t) {
          return "/txs/" + t;
        }
        getInfoParams() {
          return { network: "mainnet", page: 1, type: "all" };
        }
        getInfoOptions() {
          return { headers: { "X-APIKEY": o } };
        }
        getTransactionsOptions() {
          return this.getInfoOptions();
        }
        getTransactionOptions() {
          return this.getInfoOptions();
        }
        getUtxoOptions() {
          return this.getInfoOptions();
        }
        getSendOptions() {
          return this.getInfoOptions();
        }
        getLatestBlockOptions() {
          return this.getInfoOptions();
        }
        modifyInfoResponse(t) {
          void 0 === t && (t = []);
          const e = t;
          return { balance: e.balance, nonce: e.nonce };
        }
        getTransactionsParams(t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { network: "mainnet", page: 1 + parseInt(e / r, 10), type: "all" }
          );
        }
        modifyTransactionsResponse(t, e) {
          return super.modifyTransactionsResponse(t, e);
        }
        getTxHash(t) {
          return t.hash;
        }
        getTxDateTime(t) {
          return new Date(Number("" + t.timestamp));
        }
        getTxDirection(t, e) {
          return e.to === t;
        }
        getTxOtherSideAddress(t, e) {
          return this.getTxDirection(t, e) ? e.from : e.to;
        }
        getTxValue(t, e) {
          return this.wallet.toCurrencyUnit(new this.wallet.BN(e.value));
        }
        getTxConfirmations(t) {
          return 1;
        }
      }
      e.default = ViewblockExplorer;
    },
    7204: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(4924),
        o = r(7205),
        s = r(7206),
        a = i(r(7207)),
        h = r(19),
        u = r(27),
        l = i(r(5894));
      const f = 30800,
        c = -5;
      class ZilliqaNodeExplorer extends l.default {
        constructor() {
          (super(...arguments),
            (this.zilliqa = new n.Zilliqa(this.config.baseUrl)));
        }
        async sendTransaction(t) {
          let { rawtx: e, privateKey: r } = t;
          const i = new o.Transaction(e);
          let n;
          try {
            this.zilliqa.wallet.addByPrivateKey(r);
            const t = await this.zilliqa.wallet.sign(i);
            ((t.amount = t.amount.toString()),
              (t.gasLimit = t.gasLimit.toString()),
              (t.gasPrice = t.gasPrice.toString()),
              (n = await this.request(
                this.config.baseUrl,
                "POST",
                {
                  id: "atomic",
                  jsonrpc: "2.0",
                  method: s.RPCMethod.CreateTransaction,
                  params: [{ ...t.txParams, priority: t.toDS }],
                },
                u.SEND_TRANSACTION_TYPE,
              )));
          } catch (a) {
            throw new h.ExplorerRequestError({
              type: u.SEND_TRANSACTION_TYPE,
              error: new Error(a.message),
              instance: this,
            });
          }
          if ("undefined" !== typeof n.error)
            throw new h.ExplorerRequestError({
              type: u.SEND_TRANSACTION_TYPE,
              error: new Error(n.error.message),
              instance: this,
            });
          return { txid: n.result.TranID };
        }
        async getBalance(t, e) {
          const { balance: r, nonce: i = 0 } =
            (await this.getInfo(this.toValidChecksumAddress(t)).catch((t) =>
              console.warn(t),
            )) || {};
          return { balance: r, nonce: Number(i) };
        }
        async getStakingBalance(t, e) {
          const r = this.toValidChecksumAddress(e),
            i = await this.getStakedAmountFromContract(t, r),
            n = await this.getWithdrawalsFromContract(t, r);
          return { staking: i, withdrawals: n };
        }
        async getRewards(t, e, r) {
          const i = this.toValidChecksumAddress(e),
            n = (await this.getRewardsFromContract(t, i, r)) || { total: "0" };
          return n;
        }
        async getTokenBalance(t, e) {
          const r = e
            .map(async (e) => {
              if (!e) return null;
              const r = "0x" + this.toValidChecksumAddress(t),
                i = await this.request(
                  this.config.baseUrl,
                  "POST",
                  {
                    id: "atomic",
                    jsonrpc: "2.0",
                    method: s.RPCMethod.GetSmartContractSubState,
                    params: [this.toValidChecksumAddress(e), "balances", [r]],
                  },
                  u.GET_BALANCE_TYPE,
                ),
                n = i && i.result && i.result.balances[r];
              return { contract: e, balance: n };
            })
            .filter(Boolean);
          return Promise.all(r);
        }
        getInfoUrl(t) {
          return "";
        }
        getInfoMethod() {
          return "POST";
        }
        getInfoParams(t) {
          return {
            id: "atomic",
            jsonrpc: "2.0",
            method: s.RPCMethod.GetBalance,
            params: [t],
          };
        }
        async getRewardsFromContract(t, e, r) {
          let { validators: i } = r;
          const n = new a.default(this.config.baseUrl, e),
            o = "0x" + this.toValidChecksumAddress(t),
            s = Object.keys(i);
          if (0 === s.length) return;
          const h = { total: "0", validators: {} };
          for (let a = 0; a < s.length; a += 1) {
            const t = s[a],
              e = await n.getRewards(t, o);
            ((h.total = new this.wallet.BN(h.total).add(e).toString()),
              (h.validators[t] = e.toString()));
          }
          return ((h.total = h.total.toString()), h);
        }
        async getStakedAmountFromContract(t, e) {
          const r = "0x" + this.toValidChecksumAddress(t),
            i = await this.request(
              this.config.baseUrl,
              "POST",
              {
                id: "atomic",
                jsonrpc: "2.0",
                method: s.RPCMethod.GetSmartContractSubState,
                params: [e, "deposit_amt_deleg", [r]],
              },
              u.GET_BALANCE_TYPE,
            ),
            n = await this.request(
              this.config.baseUrl,
              "POST",
              {
                id: "atomic",
                jsonrpc: "2.0",
                method: s.RPCMethod.GetSmartContractSubState,
                params: [e, "buff_deposit_deleg", [r]],
              },
              u.GET_BALANCE_TYPE,
            ),
            { deposit_amt_deleg: o = {} } = (i && i.result) || {},
            { buff_deposit_deleg: a = {} } = (n && n.result) || {};
          return Object.keys(o[r] || {}).reduce(
            (t, e) => (
              (t.validators[e] = {
                address: this.getBech32Address(e),
                amount: o[r][e],
                buffered:
                  !!(Object.keys(a).length > 0 && a[r][e]) &&
                  Object.keys(a[r][e]).length > 0,
              }),
              (t.total = new this.wallet.BN(t.total)
                .add(new this.wallet.BN(o[r][e]))
                .toString()),
              t
            ),
            { validators: {}, total: "0" },
          );
        }
        async getWithdrawalsFromContract(t, e) {
          const r = "0x" + this.toValidChecksumAddress(t),
            { CurrentMiniEpoch: i } = await this.getBlockchainInfo(),
            n = await this.request(
              this.config.baseUrl,
              "POST",
              {
                id: "atomic",
                jsonrpc: "2.0",
                method: s.RPCMethod.GetSmartContractSubState,
                params: [e, "withdrawal_pending", [r]],
              },
              u.GET_BALANCE_TYPE,
            ),
            { withdrawal_pending: o = {} } = (n && n.result) || {},
            a = {
              availableWithdrawal: { total: "0" },
              pendingWithdrawal: { total: "0" },
            };
          if (!o[r]) return { ...a, total: "0" };
          Object.keys(o[r] || {}).forEach((t) => {
            const e = Number(i) - Number(t),
              n = o[r][t];
            e < f
              ? ((a.pendingWithdrawal[t] = n),
                (a.pendingWithdrawal.total = new this.wallet.BN(
                  a.pendingWithdrawal.total,
                )
                  .add(new this.wallet.BN(n))
                  .toString()))
              : ((a.availableWithdrawal[t] = n),
                (a.availableWithdrawal.total = new this.wallet.BN(
                  a.availableWithdrawal.total,
                )
                  .add(new this.wallet.BN(n))
                  .toString()));
          });
          const h = Object.keys(o[r] || {}).reduce(
            (t, e) => (
              (t = new this.wallet.BN(t)
                .add(new this.wallet.BN(o[r][e]))
                .toString()),
              t
            ),
            "0",
          );
          return { ...a, total: h };
        }
        async getBlockchainInfo() {
          const { result: t } = await this.request(
            this.config.baseUrl,
            "POST",
            {
              id: "atomic",
              jsonrpc: "2.0",
              method: s.RPCMethod.GetBlockchainInfo,
              params: [],
            },
            u.GET_BALANCE_TYPE,
          );
          return t;
        }
        modifyInfoResponse(t) {
          var e;
          if (t.error && t.error.code !== c)
            throw new h.ExplorerRequestError({
              type: u.GET_BALANCE_TYPE,
              error: new Error(
                `[${this.wallet.ticker}] modifyInfoResponse error: ${JSON.stringify(t.error)}`,
              ),
              instance: this,
            });
          const { balance: r = "0", nonce: i = 0 } =
            null !== (e = t.result) && void 0 !== e ? e : {};
          return { balance: r, nonce: i };
        }
      }
      e.default = ZilliqaNodeExplorer;
    },
    7206: function (t, e, r) {
      (function (t, r) {
        r(e);
      })(0, function (t) {
        "use strict";
        var e = (function () {
          function t() {}
          return t;
        })();
        ((t.TransactionError = void 0),
          (function (t) {
            ((t[(t["CHECKER_FAILED"] = 0)] = "CHECKER_FAILED"),
              (t[(t["RUNNER_FAILED"] = 1)] = "RUNNER_FAILED"),
              (t[(t["BALANCE_TRANSFER_FAILED"] = 2)] =
                "BALANCE_TRANSFER_FAILED"),
              (t[(t["EXECUTE_CMD_FAILED"] = 3)] = "EXECUTE_CMD_FAILED"),
              (t[(t["EXECUTE_CMD_TIMEOUT"] = 4)] = "EXECUTE_CMD_TIMEOUT"),
              (t[(t["NO_GAS_REMAINING_FOUND"] = 5)] = "NO_GAS_REMAINING_FOUND"),
              (t[(t["NO_ACCEPTED_FOUND"] = 6)] = "NO_ACCEPTED_FOUND"),
              (t[(t["CALL_CONTRACT_FAILED"] = 7)] = "CALL_CONTRACT_FAILED"),
              (t[(t["CREATE_CONTRACT_FAILED"] = 8)] = "CREATE_CONTRACT_FAILED"),
              (t[(t["JSON_OUTPUT_CORRUPTED"] = 9)] = "JSON_OUTPUT_CORRUPTED"),
              (t[(t["CONTRACT_NOT_EXIST"] = 10)] = "CONTRACT_NOT_EXIST"),
              (t[(t["STATE_CORRUPTED"] = 11)] = "STATE_CORRUPTED"),
              (t[(t["LOG_ENTRY_INSTALL_FAILED"] = 12)] =
                "LOG_ENTRY_INSTALL_FAILED"),
              (t[(t["MESSAGE_CORRUPTED"] = 13)] = "MESSAGE_CORRUPTED"),
              (t[(t["RECEIPT_IS_NULL"] = 14)] = "RECEIPT_IS_NULL"),
              (t[(t["MAX_DEPTH_REACHED"] = 15)] = "MAX_DEPTH_REACHED"),
              (t[(t["CHAIN_CALL_DIFF_SHARD"] = 16)] = "CHAIN_CALL_DIFF_SHARD"),
              (t[(t["PREPARATION_FAILED"] = 17)] = "PREPARATION_FAILED"),
              (t[(t["NO_OUTPUT"] = 18)] = "NO_OUTPUT"),
              (t[(t["OUTPUT_ILLEGAL"] = 19)] = "OUTPUT_ILLEGAL"));
          })(t.TransactionError || (t.TransactionError = {})));
        var r = function (t, e) {
          return (
            (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }),
            r(t, e)
          );
        };
        function i(t, e) {
          if ("function" !== typeof e && null !== e)
            throw new TypeError(
              "Class extends value " +
                String(e) +
                " is not a constructor or null",
            );
          function i() {
            this.constructor = t;
          }
          (r(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((i.prototype = e.prototype), new i())));
        }
        var n = function () {
          return (
            (n =
              Object.assign ||
              function (t) {
                for (var e, r = 1, i = arguments.length; r < i; r++)
                  for (var n in ((e = arguments[r]), e))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }),
            n.apply(this, arguments)
          );
        };
        function o(t, e, r, i) {
          function n(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function s(t) {
              try {
                h(i.next(t));
              } catch (e) {
                o(e);
              }
            }
            function a(t) {
              try {
                h(i["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function h(t) {
              t.done ? r(t.value) : n(t.value).then(s, a);
            }
            h((i = i.apply(t, e || [])).next());
          });
        }
        function s(t, e) {
          var r,
            i,
            n,
            o,
            s = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function a(t) {
            return function (e) {
              return h([t, e]);
            };
          }
          function h(a) {
            if (r) throw new TypeError("Generator is already executing.");
            while ((o && ((o = 0), a[0] && (s = 0)), s))
              try {
                if (
                  ((r = 1),
                  i &&
                    (n =
                      2 & a[0]
                        ? i["return"]
                        : a[0]
                          ? i["throw"] || ((n = i["return"]) && n.call(i), 0)
                          : i.next) &&
                    !(n = n.call(i, a[1])).done)
                )
                  return n;
                switch (((i = 0), n && (a = [2 & a[0], n.value]), a[0])) {
                  case 0:
                  case 1:
                    n = a;
                    break;
                  case 4:
                    return (s.label++, { value: a[1], done: !1 });
                  case 5:
                    (s.label++, (i = a[1]), (a = [0]));
                    continue;
                  case 7:
                    ((a = s.ops.pop()), s.trys.pop());
                    continue;
                  default:
                    if (
                      ((n = s.trys),
                      !(n = n.length > 0 && n[n.length - 1]) &&
                        (6 === a[0] || 2 === a[0]))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === a[0] && (!n || (a[1] > n[0] && a[1] < n[3]))) {
                      s.label = a[1];
                      break;
                    }
                    if (6 === a[0] && s.label < n[1]) {
                      ((s.label = n[1]), (n = a));
                      break;
                    }
                    if (n && s.label < n[2]) {
                      ((s.label = n[2]), s.ops.push(a));
                      break;
                    }
                    (n[2] && s.ops.pop(), s.trys.pop());
                    continue;
                }
                a = e.call(t, s);
              } catch (h) {
                ((a = [6, h]), (i = 0));
              } finally {
                r = n = 0;
              }
            if (5 & a[0]) throw a[1];
            return { value: a[0] ? a[1] : void 0, done: !0 };
          }
        }
        function a(t) {
          var e = "function" === typeof Symbol && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && "number" === typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined.",
          );
        }
        function h(t, e) {
          var r = "function" === typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var i,
            n,
            o = r.call(t),
            s = [];
          try {
            while ((void 0 === e || e-- > 0) && !(i = o.next()).done)
              s.push(i.value);
          } catch (a) {
            n = { error: a };
          } finally {
            try {
              i && !i.done && (r = o["return"]) && r.call(o);
            } finally {
              if (n) throw n.error;
            }
          }
          return s;
        }
        function u(t, e, r) {
          if (r || 2 === arguments.length)
            for (var i, n = 0, o = e.length; n < o; n++)
              (!i && n in e) ||
                (i || (i = Array.prototype.slice.call(e, 0, n)), (i[n] = e[n]));
          return t.concat(i || Array.prototype.slice.call(e));
        }
        var l = function (t, e, r) {
          var i = r.value;
          function n(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
              e[r - 1] = arguments[r];
            return o(this, void 0, void 0, function () {
              var r;
              return s(this, function (n) {
                switch (n.label) {
                  case 0:
                    return i && t.bytes ? [4, this.signer.sign(t)] : [3, 2];
                  case 1:
                    return (
                      (r = n.sent()),
                      [2, i.call.apply(i, u([this, r], h(e), !1))]
                    );
                  case 2:
                    return [2];
                }
              });
            });
          }
          return ((r.value = n), r);
        };
        ((function (t) {
          if (!t.fetch) {
            var e = {
              searchParams: "URLSearchParams" in t,
              iterable: "Symbol" in t && "iterator" in Symbol,
              blob:
                "FileReader" in t &&
                "Blob" in t &&
                (function () {
                  try {
                    return (new Blob(), !0);
                  } catch (t) {
                    return !1;
                  }
                })(),
              formData: "FormData" in t,
              arrayBuffer: "ArrayBuffer" in t,
            };
            if (e.arrayBuffer)
              var r = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]",
                ],
                i = function (t) {
                  return t && DataView.prototype.isPrototypeOf(t);
                },
                n =
                  ArrayBuffer.isView ||
                  function (t) {
                    return (
                      t && r.indexOf(Object.prototype.toString.call(t)) > -1
                    );
                  };
            ((l.prototype.append = function (t, e) {
              ((t = a(t)), (e = h(e)));
              var r = this.map[t];
              this.map[t] = r ? r + "," + e : e;
            }),
              (l.prototype["delete"] = function (t) {
                delete this.map[a(t)];
              }),
              (l.prototype.get = function (t) {
                return ((t = a(t)), this.has(t) ? this.map[t] : null);
              }),
              (l.prototype.has = function (t) {
                return this.map.hasOwnProperty(a(t));
              }),
              (l.prototype.set = function (t, e) {
                this.map[a(t)] = h(e);
              }),
              (l.prototype.forEach = function (t, e) {
                for (var r in this.map)
                  this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
              }),
              (l.prototype.keys = function () {
                var t = [];
                return (
                  this.forEach(function (e, r) {
                    t.push(r);
                  }),
                  u(t)
                );
              }),
              (l.prototype.values = function () {
                var t = [];
                return (
                  this.forEach(function (e) {
                    t.push(e);
                  }),
                  u(t)
                );
              }),
              (l.prototype.entries = function () {
                var t = [];
                return (
                  this.forEach(function (e, r) {
                    t.push([r, e]);
                  }),
                  u(t)
                );
              }),
              e.iterable &&
                (l.prototype[Symbol.iterator] = l.prototype.entries));
            var o = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            ((v.prototype.clone = function () {
              return new v(this, { body: this._bodyInit });
            }),
              w.call(v.prototype),
              w.call(_.prototype),
              (_.prototype.clone = function () {
                return new _(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new l(this.headers),
                  url: this.url,
                });
              }),
              (_.error = function () {
                var t = new _(null, { status: 0, statusText: "" });
                return ((t.type = "error"), t);
              }));
            var s = [301, 302, 303, 307, 308];
            ((_.redirect = function (t, e) {
              if (-1 === s.indexOf(e))
                throw new RangeError("Invalid status code");
              return new _(null, { status: e, headers: { location: t } });
            }),
              (t.Headers = l),
              (t.Request = v),
              (t.Response = _),
              (t.fetch = function (t, r) {
                return new Promise(function (i, n) {
                  var o = new v(t, r),
                    s = new XMLHttpRequest();
                  ((s.onload = function () {
                    var t = {
                      status: s.status,
                      statusText: s.statusText,
                      headers: M(s.getAllResponseHeaders() || ""),
                    };
                    t.url =
                      "responseURL" in s
                        ? s.responseURL
                        : t.headers.get("X-Request-URL");
                    var e = "response" in s ? s.response : s.responseText;
                    i(new _(e, t));
                  }),
                    (s.onerror = function () {
                      n(new TypeError("Network request failed"));
                    }),
                    (s.ontimeout = function () {
                      n(new TypeError("Network request failed"));
                    }),
                    s.open(o.method, o.url, !0),
                    "include" === o.credentials
                      ? (s.withCredentials = !0)
                      : "omit" === o.credentials && (s.withCredentials = !1),
                    "responseType" in s && e.blob && (s.responseType = "blob"),
                    o.headers.forEach(function (t, e) {
                      s.setRequestHeader(e, t);
                    }),
                    s.send(
                      "undefined" === typeof o._bodyInit ? null : o._bodyInit,
                    ));
                });
              }),
              (t.fetch.polyfill = !0));
          }
          function a(t) {
            if (
              ("string" !== typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
            )
              throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function h(t) {
            return ("string" !== typeof t && (t = String(t)), t);
          }
          function u(t) {
            var r = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              e.iterable &&
                (r[Symbol.iterator] = function () {
                  return r;
                }),
              r
            );
          }
          function l(t) {
            ((this.map = {}),
              t instanceof l
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                  ? t.forEach(function (t) {
                      this.append(t[0], t[1]);
                    }, this)
                  : t &&
                    Object.getOwnPropertyNames(t).forEach(function (e) {
                      this.append(e, t[e]);
                    }, this));
          }
          function f(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function c(t) {
            return new Promise(function (e, r) {
              ((t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  r(t.error);
                }));
            });
          }
          function d(t) {
            var e = new FileReader(),
              r = c(e);
            return (e.readAsArrayBuffer(t), r);
          }
          function p(t) {
            var e = new FileReader(),
              r = c(e);
            return (e.readAsText(t), r);
          }
          function m(t) {
            for (
              var e = new Uint8Array(t), r = new Array(e.length), i = 0;
              i < e.length;
              i++
            )
              r[i] = String.fromCharCode(e[i]);
            return r.join("");
          }
          function g(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return (e.set(new Uint8Array(t)), e.buffer);
          }
          function w() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                if (((this._bodyInit = t), t))
                  if ("string" === typeof t) this._bodyText = t;
                  else if (e.blob && Blob.prototype.isPrototypeOf(t))
                    this._bodyBlob = t;
                  else if (e.formData && FormData.prototype.isPrototypeOf(t))
                    this._bodyFormData = t;
                  else if (
                    e.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(t)
                  )
                    this._bodyText = t.toString();
                  else if (e.arrayBuffer && e.blob && i(t))
                    ((this._bodyArrayBuffer = g(t.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])));
                  else {
                    if (
                      !e.arrayBuffer ||
                      (!ArrayBuffer.prototype.isPrototypeOf(t) && !n(t))
                    )
                      throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = g(t);
                  }
                else this._bodyText = "";
                this.headers.get("content-type") ||
                  ("string" === typeof t
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8",
                      )
                    : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : e.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8",
                        ));
              }),
              e.blob &&
                ((this.blob = function () {
                  var t = f(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(d);
                })),
              (this.text = function () {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob) return p(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(m(this._bodyArrayBuffer));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              e.formData &&
                (this.formData = function () {
                  return this.text().then(b);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          function y(t) {
            var e = t.toUpperCase();
            return o.indexOf(e) > -1 ? e : t;
          }
          function v(t, e) {
            e = e || {};
            var r = e.body;
            if (t instanceof v) {
              if (t.bodyUsed) throw new TypeError("Already read");
              ((this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new l(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                r ||
                  null == t._bodyInit ||
                  ((r = t._bodyInit), (t.bodyUsed = !0)));
            } else this.url = String(t);
            if (
              ((this.credentials = e.credentials || this.credentials || "omit"),
              (!e.headers && this.headers) || (this.headers = new l(e.headers)),
              (this.method = y(e.method || this.method || "GET")),
              (this.mode = e.mode || this.mode || null),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && r)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r);
          }
          function b(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var r = t.split("="),
                      i = r.shift().replace(/\+/g, " "),
                      n = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(i), decodeURIComponent(n));
                  }
                }),
              e
            );
          }
          function M(t) {
            var e = new l(),
              r = t.replace(/\r?\n[\t ]+/g, " ");
            return (
              r.split(/\r?\n/).forEach(function (t) {
                var r = t.split(":"),
                  i = r.shift().trim();
                if (i) {
                  var n = r.join(":").trim();
                  e.append(i, n);
                }
              }),
              e
            );
          }
          function _(t, e) {
            (e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new l(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t));
          }
        })("undefined" !== typeof self ? self : void 0),
          (t.RPCMethod = void 0),
          (function (t) {
            ((t["GetNetworkId"] = "GetNetworkId"),
              (t["GetBlockchainInfo"] = "GetBlockchainInfo"),
              (t["GetShardingStructure"] = "GetShardingStructure"),
              (t["GetDSBlock"] = "GetDsBlock"),
              (t["GetLatestDSBlock"] = "GetLatestDsBlock"),
              (t["GetNumDSBlocks"] = "GetNumDSBlocks"),
              (t["GetDSBlockRate"] = "GetDSBlockRate"),
              (t["DSBlockListing"] = "DSBlockListing"),
              (t["GetTxBlock"] = "GetTxBlock"),
              (t["GetLatestTxBlock"] = "GetLatestTxBlock"),
              (t["GetNumTxBlocks"] = "GetNumTxBlocks"),
              (t["GetTxBlockRate"] = "GetTxBlockRate"),
              (t["TxBlockListing"] = "TxBlockListing"),
              (t["GetNumTransactions"] = "GetNumTransactions"),
              (t["GetTransactionRate"] = "GetTransactionRate"),
              (t["GetCurrentMiniEpoch"] = "GetCurrentMiniEpoch"),
              (t["GetCurrentDSEpoch"] = "GetCurrentDSEpoch"),
              (t["GetPrevDifficulty"] = "GetPrevDifficulty"),
              (t["GetPrevDSDifficulty"] = "GetPrevDSDifficulty"),
              (t["GetTotalCoinSupply"] = "GetTotalCoinSupply"),
              (t["GetMinerInfo"] = "GetMinerInfo"),
              (t["CreateTransaction"] = "CreateTransaction"),
              (t["GetTransaction"] = "GetTransaction"),
              (t["GetTransactionStatus"] = "GetTransactionStatus"),
              (t["GetRecentTransactions"] = "GetRecentTransactions"),
              (t["GetTransactionsForTxBlock"] = "GetTransactionsForTxBlock"),
              (t["GetTransactionsForTxBlockEx"] =
                "GetTransactionsForTxBlockEx"),
              (t["GetTxnBodiesForTxBlock"] = "GetTxnBodiesForTxBlock"),
              (t["GetTxnBodiesForTxBlockEx"] = "GetTxnBodiesForTxBlockEx"),
              (t["GetNumTxnsTxEpoch"] = "GetNumTxnsTxEpoch"),
              (t["GetNumTxnsDSEpoch"] = "GetNumTxnsDSEpoch"),
              (t["GetMinimumGasPrice"] = "GetMinimumGasPrice"),
              (t["GetContractAddressFromTransactionID"] =
                "GetContractAddressFromTransactionID"),
              (t["GetSmartContracts"] = "GetSmartContracts"),
              (t["GetSmartContractCode"] = "GetSmartContractCode"),
              (t["GetSmartContractInit"] = "GetSmartContractInit"),
              (t["GetSmartContractState"] = "GetSmartContractState"),
              (t["GetSmartContractSubState"] = "GetSmartContractSubState"),
              (t["GetStateProof"] = "GetStateProof"),
              (t["GetBalance"] = "GetBalance"));
          })(t.RPCMethod || (t.RPCMethod = {})),
          (t.RPCErrorCode = void 0),
          (function (t) {
            ((t[(t["RPC_INVALID_REQUEST"] = -32600)] = "RPC_INVALID_REQUEST"),
              (t[(t["RPC_METHOD_NOT_FOUND"] = -32601)] =
                "RPC_METHOD_NOT_FOUND"),
              (t[(t["RPC_INVALID_PARAMS"] = -32602)] = "RPC_INVALID_PARAMS"),
              (t[(t["RPC_INTERNAL_ERROR"] = -32603)] = "RPC_INTERNAL_ERROR"),
              (t[(t["RPC_PARSE_ERROR"] = -32700)] = "RPC_PARSE_ERROR"),
              (t[(t["RPC_MISC_ERROR"] = -1)] = "RPC_MISC_ERROR"),
              (t[(t["RPC_TYPE_ERROR"] = -3)] = "RPC_TYPE_ERROR"),
              (t[(t["RPC_INVALID_ADDRESS_OR_KEY"] = -5)] =
                "RPC_INVALID_ADDRESS_OR_KEY"),
              (t[(t["RPC_INVALID_PARAMETER"] = -8)] = "RPC_INVALID_PARAMETER"),
              (t[(t["RPC_DATABASE_ERROR"] = -20)] = "RPC_DATABASE_ERROR"),
              (t[(t["RPC_DESERIALIZATION_ERROR"] = -22)] =
                "RPC_DESERIALIZATION_ERROR"),
              (t[(t["RPC_VERIFY_ERROR"] = -25)] = "RPC_VERIFY_ERROR"),
              (t[(t["RPC_VERIFY_REJECTED"] = -26)] = "RPC_VERIFY_REJECTED"),
              (t[(t["RPC_IN_WARMUP"] = -28)] = "RPC_IN_WARMUP"),
              (t[(t["RPC_METHOD_DEPRECATED"] = -32)] =
                "RPC_METHOD_DEPRECATED"));
          })(t.RPCErrorCode || (t.RPCErrorCode = {})));
        var f,
          c = { "Content-Type": "application/json" },
          d = function (t, e) {
            return o(void 0, void 0, void 0, function () {
              var r, i;
              return s(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      o.trys.push([0, 2, , 3]),
                      [
                        4,
                        fetch(t.url, {
                          method: "POST",
                          cache: "no-cache",
                          mode: "cors",
                          redirect: "follow",
                          body: JSON.stringify(t.payload),
                          headers: n(
                            n({}, c),
                            (t.options && t.options.headers) || {},
                          ),
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (r = o.sent()),
                      [
                        2,
                        r
                          .json()
                          .then(function (e) {
                            return n(n({}, e), { req: t });
                          })
                          .then(e),
                      ]
                    );
                  case 2:
                    throw ((i = o.sent()), i);
                  case 3:
                    return [2];
                }
              });
            });
          },
          p = function (t, e) {
            return o(void 0, void 0, void 0, function () {
              var e, r;
              return s(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      i.trys.push([0, 2, , 3]),
                      [
                        4,
                        fetch(t.url, {
                          method: "POST",
                          cache: "no-cache",
                          mode: "cors",
                          redirect: "follow",
                          referrer: "no-referrer",
                          body: JSON.stringify(t.payload),
                          headers: n(
                            n({}, c),
                            (t.options && t.options.headers) || {},
                          ),
                        }),
                      ]
                    );
                  case 1:
                    return (
                      (e = i.sent()),
                      [
                        2,
                        e
                          .json()
                          .then(function (e) {
                            return { batch_result: e, req: t };
                          })
                          .then(),
                      ]
                    );
                  case 2:
                    throw ((r = i.sent()), r);
                  case 3:
                    return [2];
                }
              });
            });
          };
        function m(t) {
          return !(
            "2.0" !== t.jsonrpc ||
            ("1" !== t.id && 1 !== t.id) ||
            (!t.error && !t.result)
          );
        }
        function g() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return 0 === t.length
            ? function (t) {
                return t;
              }
            : 1 === t.length
              ? t[0]
              : t.reduce(function (t, e) {
                  return function (r) {
                    return t(e(r));
                  };
                });
        }
        (function (t) {
          ((t[(t["REQ"] = 0)] = "REQ"), (t[(t["RES"] = 1)] = "RES"));
        })(f || (f = {}));
        var w = (function () {
            function t(t, e, r) {
              (void 0 === e && (e = new Map()),
                void 0 === r && (r = new Map()));
              var i = this;
              ((this.middleware = {
                request: {
                  use: function (t, e) {
                    (void 0 === e && (e = "*"), i.pushMiddleware(t, 0, e));
                  },
                },
                response: {
                  use: function (t, e) {
                    (void 0 === e && (e = "*"), i.pushMiddleware(t, 1, e));
                  },
                },
              }),
                (this.nodeURL = t),
                (this.reqMiddleware = e),
                (this.resMiddleware = r));
            }
            return (
              (t.prototype.pushMiddleware = function (t, e, r) {
                if (0 !== e && 1 !== e)
                  throw new Error(
                    "Please specify the type of middleware being added",
                  );
                if (0 === e) {
                  var i = this.reqMiddleware.get(r) || [];
                  this.reqMiddleware.set(r, u(u([], h(i), !1), [t], !1));
                } else {
                  i = this.resMiddleware.get(r) || [];
                  this.resMiddleware.set(r, u(u([], h(i), !1), [t], !1));
                }
              }),
              (t.prototype.getMiddleware = function (t) {
                var e,
                  r,
                  i,
                  n,
                  o = [],
                  s = [];
                try {
                  for (
                    var l = a(this.reqMiddleware.entries()), f = l.next();
                    !f.done;
                    f = l.next()
                  ) {
                    var c = h(f.value, 2),
                      d = c[0],
                      p = c[1];
                    ("string" === typeof d &&
                      "*" !== d &&
                      d === t &&
                      o.push.apply(o, u([], h(p), !1)),
                      d instanceof RegExp &&
                        d.test(t) &&
                        o.push.apply(o, u([], h(p), !1)),
                      "*" === d && o.push.apply(o, u([], h(p), !1)));
                  }
                } catch (y) {
                  e = { error: y };
                } finally {
                  try {
                    f && !f.done && (r = l.return) && r.call(l);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                try {
                  for (
                    var m = a(this.resMiddleware.entries()), g = m.next();
                    !g.done;
                    g = m.next()
                  ) {
                    var w = h(g.value, 2);
                    ((d = w[0]), (p = w[1]));
                    ("string" === typeof d &&
                      "*" !== d &&
                      d === t &&
                      s.push.apply(s, u([], h(p), !1)),
                      d instanceof RegExp &&
                        d.test(t) &&
                        s.push.apply(s, u([], h(p), !1)),
                      "*" === d && s.push.apply(s, u([], h(p), !1)));
                  }
                } catch (v) {
                  i = { error: v };
                } finally {
                  try {
                    g && !g.done && (n = m.return) && n.call(m);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                return [o, s];
              }),
              t
            );
          })(),
          y = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
              i(e, t),
              (e.prototype.buildPayload = function (t, e) {
                return {
                  url: this.nodeURL,
                  payload: { id: 1, jsonrpc: "2.0", method: t, params: e },
                };
              }),
              (e.prototype.buildBatchPayload = function (t, e) {
                for (var r = [], i = 0; i < e.length; i++) {
                  var n = e[i],
                    o = void 0;
                  ((o = Array.isArray(n) ? n : [n]),
                    r.push({
                      id: i + 1,
                      jsonrpc: "2.0",
                      method: t,
                      params: o,
                    }));
                }
                return { url: this.nodeURL, payload: r };
              }),
              (e.prototype.send = function (t) {
                for (var e = [], r = 1; r < arguments.length; r++)
                  e[r - 1] = arguments[r];
                var i = h(this.getMiddleware(t), 2),
                  n = i[0],
                  o = i[1],
                  s = g.apply(void 0, u([], h(n), !1)),
                  a = g.apply(void 0, u([], h(o), !1)),
                  l = s(this.buildPayload(t, e));
                return d(l, a);
              }),
              (e.prototype.sendBatch = function (t, e) {
                var r = h(this.getMiddleware(t), 2),
                  i = r[0],
                  n = r[1],
                  o = g.apply(void 0, u([], h(i), !1));
                g.apply(void 0, u([], h(n), !1));
                var s = this.buildBatchPayload(t, e),
                  a = o(s);
                return p(a);
              }),
              (e.prototype.subscribe = function (t, e) {
                throw new Error("HTTPProvider does not support subscriptions.");
              }),
              (e.prototype.unsubscribe = function (t) {
                throw new Error("HTTPProvider does not support subscriptions.");
              }),
              e
            );
          })(w),
          v = 33;
        function b(t) {
          return (
            (t = t || Object.create(null)),
            {
              on: function (e, r) {
                (t[e] || (t[e] = [])).push(r);
              },
              off: function (e, r) {
                t[e] && t[e].splice(t[e].indexOf(r) >>> 0, 1);
              },
              emit: function (e, r) {
                ((t[e] || []).slice().map(function (t) {
                  t(r);
                }),
                  (t["*"] || []).slice().map(function (t) {
                    t(e, r);
                  }));
              },
            }
          );
        }
        var M = (function () {
          function t() {
            var t = this;
            ((this.handlers = {}),
              (this.emitter = new b(this.handlers)),
              (this.off = this.emitter.off.bind(this)),
              (this.emit = this.emitter.emit.bind(this)),
              (this.promise = new Promise(function (e, r) {
                ((t.resolve = e), (t.reject = r));
              })),
              (this.then = this.promise.then.bind(this.promise)));
          }
          return (
            (t.prototype.resetHandlers = function () {
              for (var t in this.handlers) delete this.handlers[t];
            }),
            (t.prototype.on = function (t, e) {
              return (this.emitter.on(t, e), this);
            }),
            (t.prototype.once = function (t, e) {
              var r = this;
              this.emitter.on(t, function (i) {
                (e(i), r.removeEventListener(t));
              });
            }),
            (t.prototype.addEventListener = function (t, e) {
              this.emitter.on(t, e);
            }),
            (t.prototype.removeEventListener = function (t, e) {
              if (t)
                return e
                  ? this.emitter.off(t, e)
                  : void delete this.handlers[t];
              this.handlers = {};
            }),
            (t.prototype.onError = function (t) {
              (this.emitter.on("error", t), this.removeEventListener("*"));
            }),
            (t.prototype.onData = function (t) {
              (this.emitter.on("data", t), this.removeEventListener("*"));
            }),
            (t.prototype.listenerCount = function (t) {
              var e = 0;
              return (
                Object.keys(this.handlers).forEach(function (r) {
                  t === r && (e += 1);
                }),
                e
              );
            }),
            t
          );
        })();
        ((t.EventEmitter = M),
          (t.GET_TX_ATTEMPTS = v),
          (t.HTTPProvider = y),
          (t.Signer = e),
          (t.composeMiddleware = g),
          (t.isValidResponse = m),
          (t.performBatchRPC = p),
          (t.performRPC = d),
          (t.sign = l),
          Object.defineProperty(t, "__esModule", { value: !0 }));
      });
    },
    7207: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(11)),
        o = i(r(14)),
        s = r(4924);
      const a = "lastrewardcycle",
        h = "direct_deposit_deleg",
        u = "buff_deposit_deleg",
        l = "stake_ssn_per_cycle",
        f = "last_withdraw_cycle_deleg",
        c = "deleg_stake_per_cycle";
      class RewardCalculator {
        constructor(t, e) {
          ((this.baseUrl = t),
            (this.zilliqa = new s.Zilliqa(t)),
            (this.contract = this.zilliqa.contracts.at(e)),
            (this.jsonBody = (t) => ({
              id: "atomic",
              jsonrpc: "2.0",
              method: "GetSmartContractSubState",
              params: [e, ...t],
            })));
        }
        async getRewards(t, e) {
          const r = await o.default.post(
              this.baseUrl,
              this.jsonBody([f, [e.toLowerCase()]]),
            ),
            i = await o.default.post(this.baseUrl, this.jsonBody([a, []])),
            n = r.data.result,
            s = i.data.result,
            h = await this.getRewardCycleList(n, s, t, e),
            u = await this.combineBuffDirect(t, e, h),
            l = await this.getRewardNeedCycleList(n, s, t, e),
            c = await this.calculateRewards(t, u, l);
          return c;
        }
        async getRewardCycleList(t, e, r, i) {
          if (null !== t && void 0 !== t[f][i][r]) {
            const t = Number.parseInt(e[a]),
              r = [];
            let i = 1;
            for (i; i <= t; i++) r.push(i);
            return r;
          }
          return [];
        }
        async getRewardNeedCycleList(t, e, r, i) {
          const n = e[a];
          if (null === t) return [];
          const o = t[f][i][r],
            s = await this.getRewardCycleList(t, e, r, i),
            h = s.filter(
              (t) => t > Number.parseInt(o) && t <= Number.parseInt(n),
            );
          return h;
        }
        async combineBuffDirect(t, e, r) {
          const i = new Map(),
            s = await o.default.post(
              this.baseUrl,
              this.jsonBody([h, [e.toLowerCase(), t]]),
            ),
            a = await o.default.post(
              this.baseUrl,
              this.jsonBody([u, [e.toLowerCase(), t]]),
            ),
            l = await o.default.post(
              this.baseUrl,
              this.jsonBody([c, [e.toLowerCase(), t]]),
            ),
            f = s.data.result,
            d = a.data.result,
            p = l.data.result;
          let m = null,
            g = null,
            w = null;
          return (
            null !== f && (m = f[h][e.toLowerCase()][t]),
            null !== d && (g = d[u][e.toLowerCase()][t]),
            null !== p && (w = p[c][e.toLowerCase()][t]),
            r.forEach((t) => {
              const e = t - 1,
                r = t - 2;
              let o = new n.default(0);
              null !== w &&
                void 0 !== w[e.toString()] &&
                (o = new n.default(w[e.toString()]));
              let s = new n.default(0);
              null !== m &&
                void 0 !== m[e.toString()] &&
                (s = new n.default(m[e.toString()]));
              let a = new n.default(0);
              null !== g &&
                void 0 !== g[r.toString()] &&
                (a = new n.default(g[r.toString()]));
              let h = s.add(a);
              h = h.add(o);
              const u = i.get(e);
              if (void 0 !== u) {
                const e = h.add(u);
                i.set(t, e);
              } else i.set(t, h);
            }),
            i
          );
        }
        async calculateRewards(t, e, r) {
          let i = new n.default(0);
          const s = await o.default.post(this.baseUrl, this.jsonBody([l, [t]])),
            a = s.data.result;
          return (
            null === a ||
              r.forEach((r) => {
                const o = a[l][t][r];
                if (void 0 === o);
                else {
                  const t = new n.default(o.arguments[1]),
                    s = new n.default(o.arguments[0]),
                    a = e.get(r);
                  if (void 0 !== a) {
                    const e = a.mul(t),
                      r = e.div(s);
                    i = i.add(r);
                  }
                }
              }),
            i
          );
        }
      }
      e.default = RewardCalculator;
    },
  },
]);
