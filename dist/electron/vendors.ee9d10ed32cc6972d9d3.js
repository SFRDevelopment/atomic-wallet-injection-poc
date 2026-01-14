(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [149, 32],
  {
    2707: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(230)),
        o = i(r(28)),
        s = i(r(794)),
        a = i(r(8034)),
        f = i(r(8067)),
        u = r(2806);
      function h(t, e, r) {
        (c(t, e), e.set(t, r));
      }
      function c(t, e) {
        if (e.has(t))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function l(t, e) {
        return t.get(d(t, e));
      }
      function p(t, e, r) {
        return (t.set(d(t, e), r), r);
      }
      function d(t, e, r) {
        if ("function" == typeof t ? t === e : t.has(e))
          return arguments.length < 3 ? e : r;
        throw new TypeError("Private element is not present on this object");
      }
      const y = new s.default(() =>
          Promise.resolve().then(r.t.bind(null, 6155, 7)),
        ),
        g = "EOS",
        v = "EOS",
        m = 4,
        w = "0",
        b = 13,
        _ = "";
      var E = new WeakMap();
      class EOSCoin extends (0, u.HasProviders)(n.default) {
        constructor(t) {
          let {
            alias: e,
            notify: r,
            feeData: i,
            explorers: n,
            txWebUrl: o,
            socket: s,
            id: u,
          } = t;
          const c = {
            id: u,
            alias: e,
            notify: r,
            name: g,
            ticker: v,
            decimal: m,
            unspendableBalance: w,
            txWebUrl: o,
            explorers: n,
            socket: s,
          };
          (super(c),
            h(this, E, void 0),
            (this.derivation = _),
            this.setExplorersModules([a.default, f.default]),
            this.loadExplorers(c),
            (this.fields.paymentId = !0),
            (this.assetName = "eosio.token"),
            (this.accountActivationSum = i.accountActivationSum),
            (this.accountActivationAddress = i.accountActivationAddress),
            (this.transactions = []),
            (this.balances = null));
        }
        get activated() {
          return !!this.address;
        }
        async loadWallet(t, e) {
          const { default: r } = await y.get(),
            i = r.PrivateKey.fromSeed(e);
          if (!i) throw new Error(this.ticker + " privateKey is empty");
          const n = i.getChildKey("owner"),
            o = n.getChildKey("active"),
            s = n.toPublic().toString(),
            a = n.toWif(),
            f = o.toPublic().toString(),
            u = o.toWif();
          return (
            (this.privateKeysObject = {
              owner: { privateKey: a, publicKey: s },
              active: { privateKey: u, publicKey: f },
            }),
            p(E, this, JSON.stringify(this.privateKeysObject)),
            this.address || this.resolveAccountName(f),
            { id: this.id, privateKey: l(E, this), address: this.address }
          );
        }
        resolveAccountName(t) {
          return this.getProvider("checkActivation")
            .getKeyAccounts(t)
            .then((t) => {
              t && t.length > 0 && (this.address = t[0]);
            })
            .catch((t) => o.default.error({ instance: this, error: t }));
        }
        getAddress() {
          return this.address;
        }
        async validateNewAccountName(t) {
          const e =
            await this.getProvider("checkActivation").checkAccountName(t);
          return e;
        }
        async validateAddress(t) {
          return (
            !!t &&
            t.length <= b &&
            /^[a-z1-5.]{1,11}[a-z1-5]$|^[a-z1-5.]{12}[a-j1-5]$/.test(t)
          );
        }
        async createTransaction(t) {
          let { address: e, amount: r, memo: i } = t;
          const n = {
            actions: [
              {
                account: this.assetName,
                name: "transfer",
                authorization: [{ actor: this.address, permission: "active" }],
                data: {
                  from: this.address,
                  to: e,
                  quantity: `${Number(this.toCurrencyUnit(r)).toFixed(m)} ${this.ticker}`,
                  memo: i,
                },
              },
            ],
          };
          return JSON.stringify(n);
        }
        async sendTransaction(t) {
          return this.getProvider("send").sendTransaction(t, l(E, this));
        }
        async getInfo() {
          if (this.address) {
            const t = await this.getProvider("balance").getAccount(
              this.address,
            );
            this.balance = t.core_liquid_balance
              ? this.toMinimalUnit(t.core_liquid_balance.split(" ")[0])
              : 0;
            const e = Number(t.total_resources.net_weight.split(" ")[0]),
              r = Number(t.total_resources.cpu_weight.split(" ")[0]),
              i = Number(t.self_delegated_bandwidth.net_weight.split(" ")[0]),
              n = Number(t.self_delegated_bandwidth.cpu_weight.split(" ")[0]),
              o = e - i,
              s = r - n;
            this.balances = {
              net: t.net_limit,
              cpu: t.cpu_limit,
              ram: {
                ramUsage: t.ram_usage,
                ramQuota: t.ram_quota,
                ramBytesTotal: t.total_resources.ram_bytes,
              },
              staked: {
                selfStakedNet: i,
                selfStakedCpu: n,
                othersStakedNet: o,
                othersStakedCpu: s,
                totalStakedNet: e,
                totalStakedCpu: r,
              },
            };
          }
          return { balance: this.balance, balances: this.balances };
        }
        setPrivateKey(t) {
          p(E, this, t);
        }
      }
      e.default = EOSCoin;
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2802: function (t, e, r) {
      var BigInteger = r(3048);
      (r(3268), (t.exports = BigInteger));
    },
    2807: function (t, e) {},
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
      var i,
        n = BigInteger.prototype;
      function o(t, e, r, i, n, o) {
        while (--o >= 0) {
          var s = e * this[t++] + r[i] + n;
          ((n = Math.floor(s / 67108864)), (r[i++] = 67108863 & s));
        }
        return n;
      }
      ((n.__bigi = r(3267).version),
        (BigInteger.isBigInteger = function (t, e) {
          return t && t.__bigi && (!e || t.__bigi === n.__bigi);
        }),
        (BigInteger.prototype.am = o),
        (i = 26),
        (BigInteger.prototype.DB = i),
        (BigInteger.prototype.DM = (1 << i) - 1));
      var s = (BigInteger.prototype.DV = 1 << i),
        a = 52;
      ((BigInteger.prototype.FV = Math.pow(2, a)),
        (BigInteger.prototype.F1 = a - i),
        (BigInteger.prototype.F2 = 2 * i - a));
      var f,
        u,
        h = "0123456789abcdefghijklmnopqrstuvwxyz",
        c = new Array();
      for (f = "0".charCodeAt(0), u = 0; u <= 9; ++u) c[f++] = u;
      for (f = "a".charCodeAt(0), u = 10; u < 36; ++u) c[f++] = u;
      for (f = "A".charCodeAt(0), u = 10; u < 36; ++u) c[f++] = u;
      function l(t) {
        return h.charAt(t);
      }
      function p(t, e) {
        var r = c[t.charCodeAt(e)];
        return null == r ? -1 : r;
      }
      function d(t) {
        for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
        ((t.t = this.t), (t.s = this.s));
      }
      function y(t) {
        ((this.t = 1),
          (this.s = t < 0 ? -1 : 0),
          t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + s) : (this.t = 0));
      }
      function g(t) {
        var e = new BigInteger();
        return (e.fromInt(t), e);
      }
      function v(t, e) {
        var r,
          i = this;
        if (16 == e) r = 4;
        else if (8 == e) r = 3;
        else if (256 == e) r = 8;
        else if (2 == e) r = 1;
        else if (32 == e) r = 5;
        else {
          if (4 != e) return void i.fromRadix(t, e);
          r = 2;
        }
        ((i.t = 0), (i.s = 0));
        var n = t.length,
          o = !1,
          s = 0;
        while (--n >= 0) {
          var a = 8 == r ? 255 & t[n] : p(t, n);
          a < 0
            ? "-" == t.charAt(n) && (o = !0)
            : ((o = !1),
              0 == s
                ? (i[i.t++] = a)
                : s + r > i.DB
                  ? ((i[i.t - 1] |= (a & ((1 << (i.DB - s)) - 1)) << s),
                    (i[i.t++] = a >> (i.DB - s)))
                  : (i[i.t - 1] |= a << s),
              (s += r),
              s >= i.DB && (s -= i.DB));
        }
        (8 == r &&
          0 != (128 & t[0]) &&
          ((i.s = -1), s > 0 && (i[i.t - 1] |= ((1 << (i.DB - s)) - 1) << s)),
          i.clamp(),
          o && BigInteger.ZERO.subTo(i, i));
      }
      function m() {
        var t = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == t) --this.t;
      }
      function w(t) {
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
        var i,
          n = (1 << e) - 1,
          o = !1,
          s = "",
          a = r.t,
          f = r.DB - ((a * r.DB) % e);
        if (a-- > 0) {
          f < r.DB && (i = r[a] >> f) > 0 && ((o = !0), (s = l(i)));
          while (a >= 0)
            (f < e
              ? ((i = (r[a] & ((1 << f) - 1)) << (e - f)),
                (i |= r[--a] >> (f += r.DB - e)))
              : ((i = (r[a] >> (f -= e)) & n), f <= 0 && ((f += r.DB), --a)),
              i > 0 && (o = !0),
              o && (s += l(i)));
        }
        return o ? s : "0";
      }
      function b() {
        var t = new BigInteger();
        return (BigInteger.ZERO.subTo(this, t), t);
      }
      function _() {
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
      function T(t) {
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
      function A() {
        return this.t <= 0
          ? 0
          : this.DB * (this.t - 1) + T(this[this.t - 1] ^ (this.s & this.DM));
      }
      function S() {
        return this.bitLength() >> 3;
      }
      function B(t, e) {
        var r;
        for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
        for (r = t - 1; r >= 0; --r) e[r] = 0;
        ((e.t = this.t + t), (e.s = this.s));
      }
      function I(t, e) {
        for (var r = t; r < this.t; ++r) e[r - t] = this[r];
        ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
      }
      function x(t, e) {
        var r,
          i = this,
          n = t % i.DB,
          o = i.DB - n,
          s = (1 << o) - 1,
          a = Math.floor(t / i.DB),
          f = (i.s << n) & i.DM;
        for (r = i.t - 1; r >= 0; --r)
          ((e[r + a + 1] = (i[r] >> o) | f), (f = (i[r] & s) << n));
        for (r = a - 1; r >= 0; --r) e[r] = 0;
        ((e[a] = f), (e.t = i.t + a + 1), (e.s = i.s), e.clamp());
      }
      function k(t, e) {
        var r = this;
        e.s = r.s;
        var i = Math.floor(t / r.DB);
        if (i >= r.t) e.t = 0;
        else {
          var n = t % r.DB,
            o = r.DB - n,
            s = (1 << n) - 1;
          e[0] = r[i] >> n;
          for (var a = i + 1; a < r.t; ++a)
            ((e[a - i - 1] |= (r[a] & s) << o), (e[a - i] = r[a] >> n));
          (n > 0 && (e[r.t - i - 1] |= (r.s & s) << o),
            (e.t = r.t - i),
            e.clamp());
        }
      }
      function U(t, e) {
        var r = this,
          i = 0,
          n = 0,
          o = Math.min(t.t, r.t);
        while (i < o) ((n += r[i] - t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
        if (t.t < r.t) {
          n -= t.s;
          while (i < r.t) ((n += r[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n += r.s;
        } else {
          n += r.s;
          while (i < t.t) ((n -= t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n -= t.s;
        }
        ((e.s = n < 0 ? -1 : 0),
          n < -1 ? (e[i++] = r.DV + n) : n > 0 && (e[i++] = n),
          (e.t = i),
          e.clamp());
      }
      function z(t, e) {
        var r = this.abs(),
          i = t.abs(),
          n = r.t;
        e.t = n + i.t;
        while (--n >= 0) e[n] = 0;
        for (n = 0; n < i.t; ++n) e[n + r.t] = r.am(0, i[n], e, n, 0, r.t);
        ((e.s = 0), e.clamp(), this.s != t.s && BigInteger.ZERO.subTo(e, e));
      }
      function O(t) {
        var e = this.abs(),
          r = (t.t = 2 * e.t);
        while (--r >= 0) t[r] = 0;
        for (r = 0; r < e.t - 1; ++r) {
          var i = e.am(r, e[r], t, 2 * r, 0, 1);
          (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >=
            e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
        }
        (t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
          (t.s = 0),
          t.clamp());
      }
      function D(t, e, r) {
        var i = this,
          n = t.abs();
        if (!(n.t <= 0)) {
          var o = i.abs();
          if (o.t < n.t)
            return (null != e && e.fromInt(0), void (null != r && i.copyTo(r)));
          null == r && (r = new BigInteger());
          var s = new BigInteger(),
            a = i.s,
            f = t.s,
            u = i.DB - T(n[n.t - 1]);
          u > 0
            ? (n.lShiftTo(u, s), o.lShiftTo(u, r))
            : (n.copyTo(s), o.copyTo(r));
          var h = s.t,
            c = s[h - 1];
          if (0 != c) {
            var l = c * (1 << i.F1) + (h > 1 ? s[h - 2] >> i.F2 : 0),
              p = i.FV / l,
              d = (1 << i.F1) / l,
              y = 1 << i.F2,
              g = r.t,
              v = g - h,
              m = null == e ? new BigInteger() : e;
            (s.dlShiftTo(v, m),
              r.compareTo(m) >= 0 && ((r[r.t++] = 1), r.subTo(m, r)),
              BigInteger.ONE.dlShiftTo(h, m),
              m.subTo(s, s));
            while (s.t < h) s[s.t++] = 0;
            while (--v >= 0) {
              var w =
                r[--g] == c ? i.DM : Math.floor(r[g] * p + (r[g - 1] + y) * d);
              if ((r[g] += s.am(0, w, r, v, 0, h)) < w) {
                (s.dlShiftTo(v, m), r.subTo(m, r));
                while (r[g] < --w) r.subTo(m, r);
              }
            }
            (null != e &&
              (r.drShiftTo(h, e), a != f && BigInteger.ZERO.subTo(e, e)),
              (r.t = h),
              r.clamp(),
              u > 0 && r.rShiftTo(u, r),
              a < 0 && BigInteger.ZERO.subTo(r, r));
          }
        }
      }
      function L(t) {
        var e = new BigInteger();
        return (
          this.abs().divRemTo(t, null, e),
          this.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && t.subTo(e, e),
          e
        );
      }
      function N(t) {
        this.m = t;
      }
      function R(t) {
        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
      }
      function C(t) {
        return t;
      }
      function P(t) {
        t.divRemTo(this.m, null, t);
      }
      function M(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function F(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function q() {
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
      function K(t) {
        ((this.m = t),
          (this.mp = t.invDigit()),
          (this.mpl = 32767 & this.mp),
          (this.mph = this.mp >> 15),
          (this.um = (1 << (t.DB - 15)) - 1),
          (this.mt2 = 2 * t.t));
      }
      function V(t) {
        var e = new BigInteger();
        return (
          t.abs().dlShiftTo(this.m.t, e),
          e.divRemTo(this.m, null, e),
          t.s < 0 && e.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(e, e),
          e
        );
      }
      function j(t) {
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function H(t) {
        while (t.t <= this.mt2) t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
          var r = 32767 & t[e],
            i =
              (r * this.mpl +
                (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) &
              t.DM;
          ((r = e + this.m.t), (t[r] += this.m.am(0, i, t, e, 0, this.m.t)));
          while (t[r] >= t.DV) ((t[r] -= t.DV), t[++r]++);
        }
        (t.clamp(),
          t.drShiftTo(this.m.t, t),
          t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
      }
      function Z(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function X(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function G() {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s);
      }
      function W(t, e) {
        if (t > 4294967295 || t < 1) return BigInteger.ONE;
        var r = new BigInteger(),
          i = new BigInteger(),
          n = e.convert(this),
          o = T(t) - 1;
        n.copyTo(r);
        while (--o >= 0)
          if ((e.sqrTo(r, i), (t & (1 << o)) > 0)) e.mulTo(i, n, r);
          else {
            var s = r;
            ((r = i), (i = s));
          }
        return e.revert(r);
      }
      function J(t, e) {
        var r;
        return (
          (r = t < 256 || e.isEven() ? new N(e) : new K(e)),
          this.exp(t, r)
        );
      }
      function Y() {
        var t = new BigInteger();
        return (this.copyTo(t), t);
      }
      function $() {
        if (this.s < 0) {
          if (1 == this.t) return this[0] - this.DV;
          if (0 == this.t) return -1;
        } else {
          if (1 == this.t) return this[0];
          if (0 == this.t) return 0;
        }
        return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
      }
      function Q() {
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
      function it(t) {
        if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
          return "0";
        var e = this.chunkSize(t),
          r = Math.pow(t, e),
          i = g(r),
          n = new BigInteger(),
          o = new BigInteger(),
          s = "";
        this.divRemTo(i, n, o);
        while (n.signum() > 0)
          ((s = (r + o.intValue()).toString(t).substr(1) + s),
            n.divRemTo(i, n, o));
        return o.intValue().toString(t) + s;
      }
      function nt(t, e) {
        var r = this;
        (r.fromInt(0), null == e && (e = 10));
        for (
          var i = r.chunkSize(e),
            n = Math.pow(e, i),
            o = !1,
            s = 0,
            a = 0,
            f = 0;
          f < t.length;
          ++f
        ) {
          var u = p(t, f);
          u < 0
            ? "-" == t.charAt(f) && 0 == r.signum() && (o = !0)
            : ((a = e * a + u),
              ++s >= i &&
                (r.dMultiply(n), r.dAddOffset(a, 0), (s = 0), (a = 0)));
        }
        (s > 0 && (r.dMultiply(Math.pow(e, s)), r.dAddOffset(a, 0)),
          o && BigInteger.ZERO.subTo(r, r));
      }
      function ot(t, e, r) {
        var i = this;
        if ("number" == typeof e)
          if (t < 2) i.fromInt(1);
          else {
            (i.fromNumber(t, r),
              i.testBit(t - 1) ||
                i.bitwiseTo(BigInteger.ONE.shiftLeft(t - 1), pt, i),
              i.isEven() && i.dAddOffset(1, 0));
            while (!i.isProbablePrime(e))
              (i.dAddOffset(2, 0),
                i.bitLength() > t &&
                  i.subTo(BigInteger.ONE.shiftLeft(t - 1), i));
          }
        else {
          var n = new Array(),
            o = 7 & t;
          ((n.length = 1 + (t >> 3)),
            e.nextBytes(n),
            o > 0 ? (n[0] &= (1 << o) - 1) : (n[0] = 0),
            i.fromString(n, 256));
        }
      }
      function st() {
        var t = this,
          e = t.t,
          r = new Array();
        r[0] = t.s;
        var i,
          n = t.DB - ((e * t.DB) % 8),
          o = 0;
        if (e-- > 0) {
          n < t.DB &&
            (i = t[e] >> n) != (t.s & t.DM) >> n &&
            (r[o++] = i | (t.s << (t.DB - n)));
          while (e >= 0)
            (n < 8
              ? ((i = (t[e] & ((1 << n) - 1)) << (8 - n)),
                (i |= t[--e] >> (n += t.DB - 8)))
              : ((i = (t[e] >> (n -= 8)) & 255), n <= 0 && ((n += t.DB), --e)),
              0 != (128 & i) && (i |= -256),
              0 === o && (128 & t.s) != (128 & i) && ++o,
              (o > 0 || i != t.s) && (r[o++] = i));
        }
        return r;
      }
      function at(t) {
        return 0 == this.compareTo(t);
      }
      function ft(t) {
        return this.compareTo(t) < 0 ? this : t;
      }
      function ut(t) {
        return this.compareTo(t) > 0 ? this : t;
      }
      function ht(t, e, r) {
        var i,
          n,
          o = this,
          s = Math.min(t.t, o.t);
        for (i = 0; i < s; ++i) r[i] = e(o[i], t[i]);
        if (t.t < o.t) {
          for (n = t.s & o.DM, i = s; i < o.t; ++i) r[i] = e(o[i], n);
          r.t = o.t;
        } else {
          for (n = o.s & o.DM, i = s; i < t.t; ++i) r[i] = e(n, t[i]);
          r.t = t.t;
        }
        ((r.s = e(o.s, t.s)), r.clamp());
      }
      function ct(t, e) {
        return t & e;
      }
      function lt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, ct, e), e);
      }
      function pt(t, e) {
        return t | e;
      }
      function dt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, pt, e), e);
      }
      function yt(t, e) {
        return t ^ e;
      }
      function gt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, yt, e), e);
      }
      function vt(t, e) {
        return t & ~e;
      }
      function mt(t) {
        var e = new BigInteger();
        return (this.bitwiseTo(t, vt, e), e);
      }
      function wt() {
        for (var t = new BigInteger(), e = 0; e < this.t; ++e)
          t[e] = this.DM & ~this[e];
        return ((t.t = this.t), (t.s = ~this.s), t);
      }
      function bt(t) {
        var e = new BigInteger();
        return (t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e);
      }
      function _t(t) {
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
      function Tt() {
        for (var t = 0; t < this.t; ++t)
          if (0 != this[t]) return t * this.DB + Et(this[t]);
        return this.s < 0 ? this.t * this.DB : -1;
      }
      function At(t) {
        var e = 0;
        while (0 != t) ((t &= t - 1), ++e);
        return e;
      }
      function St() {
        for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
          t += At(this[r] ^ e);
        return t;
      }
      function Bt(t) {
        var e = Math.floor(t / this.DB);
        return e >= this.t
          ? 0 != this.s
          : 0 != (this[e] & (1 << (t % this.DB)));
      }
      function It(t, e) {
        var r = BigInteger.ONE.shiftLeft(t);
        return (this.bitwiseTo(r, e, r), r);
      }
      function xt(t) {
        return this.changeBit(t, pt);
      }
      function kt(t) {
        return this.changeBit(t, vt);
      }
      function Ut(t) {
        return this.changeBit(t, yt);
      }
      function zt(t, e) {
        var r = this,
          i = 0,
          n = 0,
          o = Math.min(t.t, r.t);
        while (i < o) ((n += r[i] + t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
        if (t.t < r.t) {
          n += t.s;
          while (i < r.t) ((n += r[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n += r.s;
        } else {
          n += r.s;
          while (i < t.t) ((n += t[i]), (e[i++] = n & r.DM), (n >>= r.DB));
          n += t.s;
        }
        ((e.s = n < 0 ? -1 : 0),
          n > 0 ? (e[i++] = n) : n < -1 && (e[i++] = r.DV + n),
          (e.t = i),
          e.clamp());
      }
      function Ot(t) {
        var e = new BigInteger();
        return (this.addTo(t, e), e);
      }
      function Dt(t) {
        var e = new BigInteger();
        return (this.subTo(t, e), e);
      }
      function Lt(t) {
        var e = new BigInteger();
        return (this.multiplyTo(t, e), e);
      }
      function Nt() {
        var t = new BigInteger();
        return (this.squareTo(t), t);
      }
      function Rt(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, e, null), e);
      }
      function Ct(t) {
        var e = new BigInteger();
        return (this.divRemTo(t, null, e), e);
      }
      function Pt(t) {
        var e = new BigInteger(),
          r = new BigInteger();
        return (this.divRemTo(t, e, r), new Array(e, r));
      }
      function Mt(t) {
        ((this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
          ++this.t,
          this.clamp());
      }
      function Ft(t, e) {
        if (0 != t) {
          while (this.t <= e) this[this.t++] = 0;
          this[e] += t;
          while (this[e] >= this.DV)
            ((this[e] -= this.DV),
              ++e >= this.t && (this[this.t++] = 0),
              ++this[e]);
        }
      }
      function qt() {}
      function Kt(t) {
        return t;
      }
      function Vt(t, e, r) {
        t.multiplyTo(e, r);
      }
      function jt(t, e) {
        t.squareTo(e);
      }
      function Ht(t) {
        return this.exp(t, new qt());
      }
      function Zt(t, e, r) {
        var i,
          n = Math.min(this.t + t.t, e);
        ((r.s = 0), (r.t = n));
        while (n > 0) r[--n] = 0;
        for (i = r.t - this.t; n < i; ++n)
          r[n + this.t] = this.am(0, t[n], r, n, 0, this.t);
        for (i = Math.min(t.t, e); n < i; ++n) this.am(0, t[n], r, n, 0, e - n);
        r.clamp();
      }
      function Xt(t, e, r) {
        --e;
        var i = (r.t = this.t + t.t - e);
        r.s = 0;
        while (--i >= 0) r[i] = 0;
        for (i = Math.max(e - this.t, 0); i < t.t; ++i)
          r[this.t + i - e] = this.am(e - i, t[i], r, 0, 0, this.t + i - e);
        (r.clamp(), r.drShiftTo(1, r));
      }
      function Gt(t) {
        ((this.r2 = new BigInteger()),
          (this.q3 = new BigInteger()),
          BigInteger.ONE.dlShiftTo(2 * t.t, this.r2),
          (this.mu = this.r2.divide(t)),
          (this.m = t));
      }
      function Wt(t) {
        if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
        if (t.compareTo(this.m) < 0) return t;
        var e = new BigInteger();
        return (t.copyTo(e), this.reduce(e), e);
      }
      function Jt(t) {
        return t;
      }
      function Yt(t) {
        var e = this;
        (t.drShiftTo(e.m.t - 1, e.r2),
          t.t > e.m.t + 1 && ((t.t = e.m.t + 1), t.clamp()),
          e.mu.multiplyUpperTo(e.r2, e.m.t + 1, e.q3),
          e.m.multiplyLowerTo(e.q3, e.m.t + 1, e.r2));
        while (t.compareTo(e.r2) < 0) t.dAddOffset(1, e.m.t + 1);
        t.subTo(e.r2, t);
        while (t.compareTo(e.m) >= 0) t.subTo(e.m, t);
      }
      function $t(t, e) {
        (t.squareTo(e), this.reduce(e));
      }
      function Qt(t, e, r) {
        (t.multiplyTo(e, r), this.reduce(r));
      }
      function te(t, e) {
        var r,
          i,
          n = t.bitLength(),
          o = g(1);
        if (n <= 0) return o;
        ((r = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6),
          (i = n < 8 ? new N(e) : e.isEven() ? new Gt(e) : new K(e)));
        var s = new Array(),
          a = 3,
          f = r - 1,
          u = (1 << r) - 1;
        if (((s[1] = i.convert(this)), r > 1)) {
          var h = new BigInteger();
          i.sqrTo(s[1], h);
          while (a <= u)
            ((s[a] = new BigInteger()), i.mulTo(h, s[a - 2], s[a]), (a += 2));
        }
        var c,
          l,
          p = t.t - 1,
          d = !0,
          y = new BigInteger();
        n = T(t[p]) - 1;
        while (p >= 0) {
          (n >= f
            ? (c = (t[p] >> (n - f)) & u)
            : ((c = (t[p] & ((1 << (n + 1)) - 1)) << (f - n)),
              p > 0 && (c |= t[p - 1] >> (this.DB + n - f))),
            (a = r));
          while (0 == (1 & c)) ((c >>= 1), --a);
          if (((n -= a) < 0 && ((n += this.DB), --p), d))
            (s[c].copyTo(o), (d = !1));
          else {
            while (a > 1) (i.sqrTo(o, y), i.sqrTo(y, o), (a -= 2));
            (a > 0 ? i.sqrTo(o, y) : ((l = o), (o = y), (y = l)),
              i.mulTo(y, s[c], o));
          }
          while (p >= 0 && 0 == (t[p] & (1 << n)))
            (i.sqrTo(o, y),
              (l = o),
              (o = y),
              (y = l),
              --n < 0 && ((n = this.DB - 1), --p));
        }
        return i.revert(o);
      }
      function ee(t) {
        var e = this.s < 0 ? this.negate() : this.clone(),
          r = t.s < 0 ? t.negate() : t.clone();
        if (e.compareTo(r) < 0) {
          var i = e;
          ((e = r), (r = i));
        }
        var n = e.getLowestSetBit(),
          o = r.getLowestSetBit();
        if (o < 0) return e;
        (n < o && (o = n), o > 0 && (e.rShiftTo(o, e), r.rShiftTo(o, r)));
        while (e.signum() > 0)
          ((n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
            (n = r.getLowestSetBit()) > 0 && r.rShiftTo(n, r),
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
          else for (var i = this.t - 1; i >= 0; --i) r = (e * r + this[i]) % t;
        return r;
      }
      function ie(t) {
        var e = t.isEven();
        if (0 === this.signum()) throw new Error("division by zero");
        if ((this.isEven() && e) || 0 == t.signum()) return BigInteger.ZERO;
        var r = t.clone(),
          i = this.clone(),
          n = g(1),
          o = g(0),
          s = g(0),
          a = g(1);
        while (0 != r.signum()) {
          while (r.isEven())
            (r.rShiftTo(1, r),
              e
                ? ((n.isEven() && o.isEven()) ||
                    (n.addTo(this, n), o.subTo(t, o)),
                  n.rShiftTo(1, n))
                : o.isEven() || o.subTo(t, o),
              o.rShiftTo(1, o));
          while (i.isEven())
            (i.rShiftTo(1, i),
              e
                ? ((s.isEven() && a.isEven()) ||
                    (s.addTo(this, s), a.subTo(t, a)),
                  s.rShiftTo(1, s))
                : a.isEven() || a.subTo(t, a),
              a.rShiftTo(1, a));
          r.compareTo(i) >= 0
            ? (r.subTo(i, r), e && n.subTo(s, n), o.subTo(a, o))
            : (i.subTo(r, i), e && s.subTo(n, s), a.subTo(o, a));
        }
        if (0 != i.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
        while (a.compareTo(t) >= 0) a.subTo(t, a);
        while (a.signum() < 0) a.addTo(t, a);
        return a;
      }
      ((N.prototype.convert = R),
        (N.prototype.revert = C),
        (N.prototype.reduce = P),
        (N.prototype.mulTo = M),
        (N.prototype.sqrTo = F),
        (K.prototype.convert = V),
        (K.prototype.revert = j),
        (K.prototype.reduce = H),
        (K.prototype.mulTo = X),
        (K.prototype.sqrTo = Z),
        (n.copyTo = d),
        (n.fromInt = y),
        (n.fromString = v),
        (n.clamp = m),
        (n.dlShiftTo = B),
        (n.drShiftTo = I),
        (n.lShiftTo = x),
        (n.rShiftTo = k),
        (n.subTo = U),
        (n.multiplyTo = z),
        (n.squareTo = O),
        (n.divRemTo = D),
        (n.invDigit = q),
        (n.isEven = G),
        (n.exp = W),
        (n.toString = w),
        (n.negate = b),
        (n.abs = _),
        (n.compareTo = E),
        (n.bitLength = A),
        (n.byteLength = S),
        (n.mod = L),
        (n.modPowInt = J),
        (qt.prototype.convert = Kt),
        (qt.prototype.revert = Kt),
        (qt.prototype.mulTo = Vt),
        (qt.prototype.sqrTo = jt),
        (Gt.prototype.convert = Wt),
        (Gt.prototype.revert = Jt),
        (Gt.prototype.reduce = Yt),
        (Gt.prototype.mulTo = Qt),
        (Gt.prototype.sqrTo = $t));
      var ne = [
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
        oe = (1 << 26) / ne[ne.length - 1];
      function se(t) {
        var e,
          r = this.abs();
        if (1 == r.t && r[0] <= ne[ne.length - 1]) {
          for (e = 0; e < ne.length; ++e) if (r[0] == ne[e]) return !0;
          return !1;
        }
        if (r.isEven()) return !1;
        e = 1;
        while (e < ne.length) {
          var i = ne[e],
            n = e + 1;
          while (n < ne.length && i < oe) i *= ne[n++];
          i = r.modInt(i);
          while (e < n) if (i % ne[e++] == 0) return !1;
        }
        return r.millerRabin(t);
      }
      function ae(t) {
        var e = this.subtract(BigInteger.ONE),
          r = e.getLowestSetBit();
        if (r <= 0) return !1;
        var i = e.shiftRight(r);
        ((t = (t + 1) >> 1), t > ne.length && (t = ne.length));
        for (var n = new BigInteger(null), o = [], s = 0; s < t; ++s) {
          for (;;)
            if (
              ((f = ne[Math.floor(Math.random() * ne.length)]),
              -1 == o.indexOf(f))
            )
              break;
          (o.push(f), n.fromInt(f));
          var a = n.modPow(i, this);
          if (0 != a.compareTo(BigInteger.ONE) && 0 != a.compareTo(e)) {
            var f = 1;
            while (f++ < r && 0 != a.compareTo(e))
              if (
                ((a = a.modPowInt(2, this)), 0 == a.compareTo(BigInteger.ONE))
              )
                return !1;
            if (0 != a.compareTo(e)) return !1;
          }
        }
        return !0;
      }
      ((n.chunkSize = et),
        (n.toRadix = it),
        (n.fromRadix = nt),
        (n.fromNumber = ot),
        (n.bitwiseTo = ht),
        (n.changeBit = It),
        (n.addTo = zt),
        (n.dMultiply = Mt),
        (n.dAddOffset = Ft),
        (n.multiplyLowerTo = Zt),
        (n.multiplyUpperTo = Xt),
        (n.modInt = re),
        (n.millerRabin = ae),
        (n.clone = Y),
        (n.intValue = $),
        (n.byteValue = Q),
        (n.shortValue = tt),
        (n.signum = rt),
        (n.toByteArray = st),
        (n.equals = at),
        (n.min = ft),
        (n.max = ut),
        (n.and = lt),
        (n.or = dt),
        (n.xor = gt),
        (n.andNot = mt),
        (n.not = wt),
        (n.shiftLeft = bt),
        (n.shiftRight = _t),
        (n.getLowestSetBit = Tt),
        (n.bitCount = St),
        (n.testBit = Bt),
        (n.setBit = xt),
        (n.clearBit = kt),
        (n.flipBit = Ut),
        (n.add = Ot),
        (n.subtract = Dt),
        (n.multiply = Lt),
        (n.divide = Rt),
        (n.remainder = Ct),
        (n.divideAndRemainder = Pt),
        (n.modPow = te),
        (n.modInverse = ie),
        (n.pow = Ht),
        (n.gcd = ee),
        (n.isProbablePrime = se),
        (n.square = Nt),
        (BigInteger.ZERO = g(0)),
        (BigInteger.ONE = g(1)),
        (BigInteger.valueOf = g),
        (t.exports = BigInteger));
    },
    3057: function (t, e, r) {
      var i, n, o;
      /**
       * @license bytebuffer.js (c) 2015 Daniel Wirtz <dcode@dcode.io>
       * Backing buffer: ArrayBuffer, Accessor: Uint8Array
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/bytebuffer.js for details
       */ (function (s, a) {
        ((n = [r(5025)]),
          (i = a),
          (o = "function" === typeof i ? i.apply(e, n) : i),
          void 0 === o || (t.exports = o));
      })(0, function (t) {
        "use strict";
        var e = function (t, r, n) {
          if (
            ("undefined" === typeof t && (t = e.DEFAULT_CAPACITY),
            "undefined" === typeof r && (r = e.DEFAULT_ENDIAN),
            "undefined" === typeof n && (n = e.DEFAULT_NOASSERT),
            !n)
          ) {
            if (((t |= 0), t < 0)) throw RangeError("Illegal capacity");
            ((r = !!r), (n = !!n));
          }
          ((this.buffer = 0 === t ? i : new ArrayBuffer(t)),
            (this.view = 0 === t ? null : new Uint8Array(this.buffer)),
            (this.offset = 0),
            (this.markedOffset = -1),
            (this.limit = t),
            (this.littleEndian = r),
            (this.noAssert = n));
        };
        ((e.VERSION = "5.0.1"),
          (e.LITTLE_ENDIAN = !0),
          (e.BIG_ENDIAN = !1),
          (e.DEFAULT_CAPACITY = 16),
          (e.DEFAULT_ENDIAN = e.BIG_ENDIAN),
          (e.DEFAULT_NOASSERT = !1),
          (e.Long = t || null));
        var r = e.prototype;
        (r.__isByteBuffer__,
          Object.defineProperty(r, "__isByteBuffer__", {
            value: !0,
            enumerable: !1,
            configurable: !1,
          }));
        var i = new ArrayBuffer(0),
          n = String.fromCharCode;
        function o(t) {
          var e = 0;
          return function () {
            return e < t.length ? t.charCodeAt(e++) : null;
          };
        }
        function s() {
          var t = [],
            e = [];
          return function () {
            if (0 === arguments.length) return e.join("") + n.apply(String, t);
            (t.length + arguments.length > 1024 &&
              (e.push(n.apply(String, t)), (t.length = 0)),
              Array.prototype.push.apply(t, arguments));
          };
        }
        function a(t, e, r, i, n) {
          var o,
            s,
            a = 8 * n - i - 1,
            f = (1 << a) - 1,
            u = f >> 1,
            h = -7,
            c = r ? n - 1 : 0,
            l = r ? -1 : 1,
            p = t[e + c];
          for (
            c += l, o = p & ((1 << -h) - 1), p >>= -h, h += a;
            h > 0;
            o = 256 * o + t[e + c], c += l, h -= 8
          );
          for (
            s = o & ((1 << -h) - 1), o >>= -h, h += i;
            h > 0;
            s = 256 * s + t[e + c], c += l, h -= 8
          );
          if (0 === o) o = 1 - u;
          else {
            if (o === f) return s ? NaN : (1 / 0) * (p ? -1 : 1);
            ((s += Math.pow(2, i)), (o -= u));
          }
          return (p ? -1 : 1) * s * Math.pow(2, o - i);
        }
        function f(t, e, r, i, n, o) {
          var s,
            a,
            f,
            u = 8 * o - n - 1,
            h = (1 << u) - 1,
            c = h >> 1,
            l = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = i ? 0 : o - 1,
            d = i ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (s = h))
                : ((s = Math.floor(Math.log(e) / Math.LN2)),
                  e * (f = Math.pow(2, -s)) < 1 && (s--, (f *= 2)),
                  (e += s + c >= 1 ? l / f : l * Math.pow(2, 1 - c)),
                  e * f >= 2 && (s++, (f /= 2)),
                  s + c >= h
                    ? ((a = 0), (s = h))
                    : s + c >= 1
                      ? ((a = (e * f - 1) * Math.pow(2, n)), (s += c))
                      : ((a = e * Math.pow(2, c - 1) * Math.pow(2, n)),
                        (s = 0)));
            n >= 8;
            t[r + p] = 255 & a, p += d, a /= 256, n -= 8
          );
          for (
            s = (s << n) | a, u += n;
            u > 0;
            t[r + p] = 255 & s, p += d, s /= 256, u -= 8
          );
          t[r + p - d] |= 128 * y;
        }
        ((e.accessor = function () {
          return Uint8Array;
        }),
          (e.allocate = function (t, r, i) {
            return new e(t, r, i);
          }),
          (e.concat = function (t, r, i, n) {
            ("boolean" !== typeof r && "string" === typeof r) ||
              ((n = i), (i = r), (r = void 0));
            for (var o, s = 0, a = 0, f = t.length; a < f; ++a)
              (e.isByteBuffer(t[a]) || (t[a] = e.wrap(t[a], r)),
                (o = t[a].limit - t[a].offset),
                o > 0 && (s += o));
            if (0 === s) return new e(0, i, n);
            var u,
              h = new e(s, i, n);
            a = 0;
            while (a < f)
              ((u = t[a++]),
                (o = u.limit - u.offset),
                o <= 0 ||
                  (h.view.set(u.view.subarray(u.offset, u.limit), h.offset),
                  (h.offset += o)));
            return ((h.limit = h.offset), (h.offset = 0), h);
          }),
          (e.isByteBuffer = function (t) {
            return !0 === (t && t["__isByteBuffer__"]);
          }),
          (e.type = function () {
            return ArrayBuffer;
          }),
          (e.wrap = function (t, i, n, o) {
            if (
              ("string" !== typeof i && ((o = n), (n = i), (i = void 0)),
              "string" === typeof t)
            )
              switch (("undefined" === typeof i && (i = "utf8"), i)) {
                case "base64":
                  return e.fromBase64(t, n);
                case "hex":
                  return e.fromHex(t, n);
                case "binary":
                  return e.fromBinary(t, n);
                case "utf8":
                  return e.fromUTF8(t, n);
                case "debug":
                  return e.fromDebug(t, n);
                default:
                  throw Error("Unsupported encoding: " + i);
              }
            if (null === t || "object" !== typeof t)
              throw TypeError("Illegal buffer");
            var s;
            if (e.isByteBuffer(t))
              return ((s = r.clone.call(t)), (s.markedOffset = -1), s);
            if (t instanceof Uint8Array)
              ((s = new e(0, n, o)),
                t.length > 0 &&
                  ((s.buffer = t.buffer),
                  (s.offset = t.byteOffset),
                  (s.limit = t.byteOffset + t.byteLength),
                  (s.view = new Uint8Array(t.buffer))));
            else if (t instanceof ArrayBuffer)
              ((s = new e(0, n, o)),
                t.byteLength > 0 &&
                  ((s.buffer = t),
                  (s.offset = 0),
                  (s.limit = t.byteLength),
                  (s.view = t.byteLength > 0 ? new Uint8Array(t) : null)));
            else {
              if ("[object Array]" !== Object.prototype.toString.call(t))
                throw TypeError("Illegal buffer");
              ((s = new e(t.length, n, o)), (s.limit = t.length));
              for (var a = 0; a < t.length; ++a) s.view[a] = t[a];
            }
            return s;
          }),
          (r.writeBitSet = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if (!(t instanceof Array))
                throw TypeError("Illegal BitSet: Not an array");
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            var i,
              n = e,
              o = t.length,
              s = o >> 3,
              a = 0;
            e += this.writeVarint32(o, e);
            while (s--)
              ((i =
                (1 & !!t[a++]) |
                ((1 & !!t[a++]) << 1) |
                ((1 & !!t[a++]) << 2) |
                ((1 & !!t[a++]) << 3) |
                ((1 & !!t[a++]) << 4) |
                ((1 & !!t[a++]) << 5) |
                ((1 & !!t[a++]) << 6) |
                ((1 & !!t[a++]) << 7)),
                this.writeByte(i, e++));
            if (a < o) {
              var f = 0;
              i = 0;
              while (a < o) i |= (1 & !!t[a++]) << f++;
              this.writeByte(i, e++);
            }
            return r ? ((this.offset = e), this) : e - n;
          }),
          (r.readBitSet = function (t) {
            var e = "undefined" === typeof t;
            e && (t = this.offset);
            var r,
              i = this.readVarint32(t),
              n = i.value,
              o = n >> 3,
              s = 0,
              a = [];
            t += i.length;
            while (o--)
              ((r = this.readByte(t++)),
                (a[s++] = !!(1 & r)),
                (a[s++] = !!(2 & r)),
                (a[s++] = !!(4 & r)),
                (a[s++] = !!(8 & r)),
                (a[s++] = !!(16 & r)),
                (a[s++] = !!(32 & r)),
                (a[s++] = !!(64 & r)),
                (a[s++] = !!(128 & r)));
            if (s < n) {
              var f = 0;
              r = this.readByte(t++);
              while (s < n) a[s++] = !!((r >> f++) & 1);
            }
            return (e && (this.offset = t), a);
          }),
          (r.readBytes = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + t > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+" +
                    t +
                    ") <= " +
                    this.buffer.byteLength,
                );
            }
            var i = this.slice(e, e + t);
            return (r && (this.offset += t), i);
          }),
          (r.writeBytes = r.append),
          (r.writeInt8 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t |= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 1;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 1),
              (this.view[e] = t),
              r && (this.offset += 1),
              this
            );
          }),
          (r.writeByte = r.writeInt8),
          (r.readInt8 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 1 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+1) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = this.view[t];
            return (
              128 === (128 & r) && (r = -(255 - r + 1)),
              e && (this.offset += 1),
              r
            );
          }),
          (r.readByte = r.readInt8),
          (r.writeUint8 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 1;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 1),
              (this.view[e] = t),
              r && (this.offset += 1),
              this
            );
          }),
          (r.writeUInt8 = r.writeUint8),
          (r.readUint8 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 1 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+1) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = this.view[t];
            return (e && (this.offset += 1), r);
          }),
          (r.readUInt8 = r.readUint8),
          (r.writeInt16 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t |= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 2;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 2),
              this.littleEndian
                ? ((this.view[e + 1] = (65280 & t) >>> 8),
                  (this.view[e] = 255 & t))
                : ((this.view[e] = (65280 & t) >>> 8),
                  (this.view[e + 1] = 255 & t)),
              r && (this.offset += 2),
              this
            );
          }),
          (r.writeShort = r.writeInt16),
          (r.readInt16 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 2 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+2) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = 0;
            return (
              this.littleEndian
                ? ((r = this.view[t]), (r |= this.view[t + 1] << 8))
                : ((r = this.view[t] << 8), (r |= this.view[t + 1])),
              32768 === (32768 & r) && (r = -(65535 - r + 1)),
              e && (this.offset += 2),
              r
            );
          }),
          (r.readShort = r.readInt16),
          (r.writeUint16 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 2;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 2),
              this.littleEndian
                ? ((this.view[e + 1] = (65280 & t) >>> 8),
                  (this.view[e] = 255 & t))
                : ((this.view[e] = (65280 & t) >>> 8),
                  (this.view[e + 1] = 255 & t)),
              r && (this.offset += 2),
              this
            );
          }),
          (r.writeUInt16 = r.writeUint16),
          (r.readUint16 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 2 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+2) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = 0;
            return (
              this.littleEndian
                ? ((r = this.view[t]), (r |= this.view[t + 1] << 8))
                : ((r = this.view[t] << 8), (r |= this.view[t + 1])),
              e && (this.offset += 2),
              r
            );
          }),
          (r.readUInt16 = r.readUint16),
          (r.writeInt32 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t |= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 4;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 4),
              this.littleEndian
                ? ((this.view[e + 3] = (t >>> 24) & 255),
                  (this.view[e + 2] = (t >>> 16) & 255),
                  (this.view[e + 1] = (t >>> 8) & 255),
                  (this.view[e] = 255 & t))
                : ((this.view[e] = (t >>> 24) & 255),
                  (this.view[e + 1] = (t >>> 16) & 255),
                  (this.view[e + 2] = (t >>> 8) & 255),
                  (this.view[e + 3] = 255 & t)),
              r && (this.offset += 4),
              this
            );
          }),
          (r.writeInt = r.writeInt32),
          (r.readInt32 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 4 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+4) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = 0;
            return (
              this.littleEndian
                ? ((r = this.view[t + 2] << 16),
                  (r |= this.view[t + 1] << 8),
                  (r |= this.view[t]),
                  (r += (this.view[t + 3] << 24) >>> 0))
                : ((r = this.view[t + 1] << 16),
                  (r |= this.view[t + 2] << 8),
                  (r |= this.view[t + 3]),
                  (r += (this.view[t] << 24) >>> 0)),
              (r |= 0),
              e && (this.offset += 4),
              r
            );
          }),
          (r.readInt = r.readInt32),
          (r.writeUint32 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 4;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 4),
              this.littleEndian
                ? ((this.view[e + 3] = (t >>> 24) & 255),
                  (this.view[e + 2] = (t >>> 16) & 255),
                  (this.view[e + 1] = (t >>> 8) & 255),
                  (this.view[e] = 255 & t))
                : ((this.view[e] = (t >>> 24) & 255),
                  (this.view[e + 1] = (t >>> 16) & 255),
                  (this.view[e + 2] = (t >>> 8) & 255),
                  (this.view[e + 3] = 255 & t)),
              r && (this.offset += 4),
              this
            );
          }),
          (r.writeUInt32 = r.writeUint32),
          (r.readUint32 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 4 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+4) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = 0;
            return (
              this.littleEndian
                ? ((r = this.view[t + 2] << 16),
                  (r |= this.view[t + 1] << 8),
                  (r |= this.view[t]),
                  (r += (this.view[t + 3] << 24) >>> 0))
                : ((r = this.view[t + 1] << 16),
                  (r |= this.view[t + 2] << 8),
                  (r |= this.view[t + 3]),
                  (r += (this.view[t] << 24) >>> 0)),
              e && (this.offset += 4),
              r
            );
          }),
          (r.readUInt32 = r.readUint32),
          t &&
            ((r.writeInt64 = function (e, r) {
              var i = "undefined" === typeof r;
              if ((i && (r = this.offset), !this.noAssert)) {
                if ("number" === typeof e) e = t.fromNumber(e);
                else if ("string" === typeof e) e = t.fromString(e);
                else if (!(e && e instanceof t))
                  throw TypeError(
                    "Illegal value: " + e + " (not an integer or Long)",
                  );
                if ("number" !== typeof r || r % 1 !== 0)
                  throw TypeError("Illegal offset: " + r + " (not an integer)");
                if (((r >>>= 0), r < 0 || r + 0 > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      r +
                      " (+0) <= " +
                      this.buffer.byteLength,
                  );
              }
              ("number" === typeof e
                ? (e = t.fromNumber(e))
                : "string" === typeof e && (e = t.fromString(e)),
                (r += 8));
              var n = this.buffer.byteLength;
              (r > n && this.resize((n *= 2) > r ? n : r), (r -= 8));
              var o = e.low,
                s = e.high;
              return (
                this.littleEndian
                  ? ((this.view[r + 3] = (o >>> 24) & 255),
                    (this.view[r + 2] = (o >>> 16) & 255),
                    (this.view[r + 1] = (o >>> 8) & 255),
                    (this.view[r] = 255 & o),
                    (r += 4),
                    (this.view[r + 3] = (s >>> 24) & 255),
                    (this.view[r + 2] = (s >>> 16) & 255),
                    (this.view[r + 1] = (s >>> 8) & 255),
                    (this.view[r] = 255 & s))
                  : ((this.view[r] = (s >>> 24) & 255),
                    (this.view[r + 1] = (s >>> 16) & 255),
                    (this.view[r + 2] = (s >>> 8) & 255),
                    (this.view[r + 3] = 255 & s),
                    (r += 4),
                    (this.view[r] = (o >>> 24) & 255),
                    (this.view[r + 1] = (o >>> 16) & 255),
                    (this.view[r + 2] = (o >>> 8) & 255),
                    (this.view[r + 3] = 255 & o)),
                i && (this.offset += 8),
                this
              );
            }),
            (r.writeLong = r.writeInt64),
            (r.readInt64 = function (e) {
              var r = "undefined" === typeof e;
              if ((r && (e = this.offset), !this.noAssert)) {
                if ("number" !== typeof e || e % 1 !== 0)
                  throw TypeError("Illegal offset: " + e + " (not an integer)");
                if (((e >>>= 0), e < 0 || e + 8 > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      e +
                      " (+8) <= " +
                      this.buffer.byteLength,
                  );
              }
              var i = 0,
                n = 0;
              this.littleEndian
                ? ((i = this.view[e + 2] << 16),
                  (i |= this.view[e + 1] << 8),
                  (i |= this.view[e]),
                  (i += (this.view[e + 3] << 24) >>> 0),
                  (e += 4),
                  (n = this.view[e + 2] << 16),
                  (n |= this.view[e + 1] << 8),
                  (n |= this.view[e]),
                  (n += (this.view[e + 3] << 24) >>> 0))
                : ((n = this.view[e + 1] << 16),
                  (n |= this.view[e + 2] << 8),
                  (n |= this.view[e + 3]),
                  (n += (this.view[e] << 24) >>> 0),
                  (e += 4),
                  (i = this.view[e + 1] << 16),
                  (i |= this.view[e + 2] << 8),
                  (i |= this.view[e + 3]),
                  (i += (this.view[e] << 24) >>> 0));
              var o = new t(i, n, !1);
              return (r && (this.offset += 8), o);
            }),
            (r.readLong = r.readInt64),
            (r.writeUint64 = function (e, r) {
              var i = "undefined" === typeof r;
              if ((i && (r = this.offset), !this.noAssert)) {
                if ("number" === typeof e) e = t.fromNumber(e);
                else if ("string" === typeof e) e = t.fromString(e);
                else if (!(e && e instanceof t))
                  throw TypeError(
                    "Illegal value: " + e + " (not an integer or Long)",
                  );
                if ("number" !== typeof r || r % 1 !== 0)
                  throw TypeError("Illegal offset: " + r + " (not an integer)");
                if (((r >>>= 0), r < 0 || r + 0 > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      r +
                      " (+0) <= " +
                      this.buffer.byteLength,
                  );
              }
              ("number" === typeof e
                ? (e = t.fromNumber(e))
                : "string" === typeof e && (e = t.fromString(e)),
                (r += 8));
              var n = this.buffer.byteLength;
              (r > n && this.resize((n *= 2) > r ? n : r), (r -= 8));
              var o = e.low,
                s = e.high;
              return (
                this.littleEndian
                  ? ((this.view[r + 3] = (o >>> 24) & 255),
                    (this.view[r + 2] = (o >>> 16) & 255),
                    (this.view[r + 1] = (o >>> 8) & 255),
                    (this.view[r] = 255 & o),
                    (r += 4),
                    (this.view[r + 3] = (s >>> 24) & 255),
                    (this.view[r + 2] = (s >>> 16) & 255),
                    (this.view[r + 1] = (s >>> 8) & 255),
                    (this.view[r] = 255 & s))
                  : ((this.view[r] = (s >>> 24) & 255),
                    (this.view[r + 1] = (s >>> 16) & 255),
                    (this.view[r + 2] = (s >>> 8) & 255),
                    (this.view[r + 3] = 255 & s),
                    (r += 4),
                    (this.view[r] = (o >>> 24) & 255),
                    (this.view[r + 1] = (o >>> 16) & 255),
                    (this.view[r + 2] = (o >>> 8) & 255),
                    (this.view[r + 3] = 255 & o)),
                i && (this.offset += 8),
                this
              );
            }),
            (r.writeUInt64 = r.writeUint64),
            (r.readUint64 = function (e) {
              var r = "undefined" === typeof e;
              if ((r && (e = this.offset), !this.noAssert)) {
                if ("number" !== typeof e || e % 1 !== 0)
                  throw TypeError("Illegal offset: " + e + " (not an integer)");
                if (((e >>>= 0), e < 0 || e + 8 > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      e +
                      " (+8) <= " +
                      this.buffer.byteLength,
                  );
              }
              var i = 0,
                n = 0;
              this.littleEndian
                ? ((i = this.view[e + 2] << 16),
                  (i |= this.view[e + 1] << 8),
                  (i |= this.view[e]),
                  (i += (this.view[e + 3] << 24) >>> 0),
                  (e += 4),
                  (n = this.view[e + 2] << 16),
                  (n |= this.view[e + 1] << 8),
                  (n |= this.view[e]),
                  (n += (this.view[e + 3] << 24) >>> 0))
                : ((n = this.view[e + 1] << 16),
                  (n |= this.view[e + 2] << 8),
                  (n |= this.view[e + 3]),
                  (n += (this.view[e] << 24) >>> 0),
                  (e += 4),
                  (i = this.view[e + 1] << 16),
                  (i |= this.view[e + 2] << 8),
                  (i |= this.view[e + 3]),
                  (i += (this.view[e] << 24) >>> 0));
              var o = new t(i, n, !0);
              return (r && (this.offset += 8), o);
            }),
            (r.readUInt64 = r.readUint64)),
          (r.writeFloat32 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t)
                throw TypeError("Illegal value: " + t + " (not a number)");
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 4;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 4),
              f(this.view, t, e, this.littleEndian, 23, 4),
              r && (this.offset += 4),
              this
            );
          }),
          (r.writeFloat = r.writeFloat32),
          (r.readFloat32 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 4 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+4) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = a(this.view, t, this.littleEndian, 23, 4);
            return (e && (this.offset += 4), r);
          }),
          (r.readFloat = r.readFloat32),
          (r.writeFloat64 = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof t)
                throw TypeError("Illegal value: " + t + " (not a number)");
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            e += 8;
            var i = this.buffer.byteLength;
            return (
              e > i && this.resize((i *= 2) > e ? i : e),
              (e -= 8),
              f(this.view, t, e, this.littleEndian, 52, 8),
              r && (this.offset += 8),
              this
            );
          }),
          (r.writeDouble = r.writeFloat64),
          (r.readFloat64 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 8 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+8) <= " +
                    this.buffer.byteLength,
                );
            }
            var r = a(this.view, t, this.littleEndian, 52, 8);
            return (e && (this.offset += 8), r);
          }),
          (r.readDouble = r.readFloat64),
          (e.MAX_VARINT32_BYTES = 5),
          (e.calculateVarint32 = function (t) {
            return (
              (t >>>= 0),
              t < 128
                ? 1
                : t < 16384
                  ? 2
                  : t < 1 << 21
                    ? 3
                    : t < 1 << 28
                      ? 4
                      : 5
            );
          }),
          (e.zigZagEncode32 = function (t) {
            return (((t |= 0) << 1) ^ (t >> 31)) >>> 0;
          }),
          (e.zigZagDecode32 = function (t) {
            return ((t >>> 1) ^ -(1 & t)) | 0;
          }),
          (r.writeVarint32 = function (t, r) {
            var i = "undefined" === typeof r;
            if ((i && (r = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t |= 0), "number" !== typeof r || r % 1 !== 0))
                throw TypeError("Illegal offset: " + r + " (not an integer)");
              if (((r >>>= 0), r < 0 || r + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    r +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            var n,
              o = e.calculateVarint32(t);
            r += o;
            var s = this.buffer.byteLength;
            (r > s && this.resize((s *= 2) > r ? s : r), (r -= o), (t >>>= 0));
            while (t >= 128)
              ((n = (127 & t) | 128), (this.view[r++] = n), (t >>>= 7));
            return ((this.view[r++] = t), i ? ((this.offset = r), this) : o);
          }),
          (r.writeVarint32ZigZag = function (t, r) {
            return this.writeVarint32(e.zigZagEncode32(t), r);
          }),
          (r.readVarint32 = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 1 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+1) <= " +
                    this.buffer.byteLength,
                );
            }
            var r,
              i = 0,
              n = 0;
            do {
              if (!this.noAssert && t > this.limit) {
                var o = Error("Truncated");
                throw ((o["truncated"] = !0), o);
              }
              ((r = this.view[t++]), i < 5 && (n |= (127 & r) << (7 * i)), ++i);
            } while (0 !== (128 & r));
            return (
              (n |= 0),
              e ? ((this.offset = t), n) : { value: n, length: i }
            );
          }),
          (r.readVarint32ZigZag = function (t) {
            var r = this.readVarint32(t);
            return (
              "object" === typeof r
                ? (r["value"] = e.zigZagDecode32(r["value"]))
                : (r = e.zigZagDecode32(r)),
              r
            );
          }),
          t &&
            ((e.MAX_VARINT64_BYTES = 10),
            (e.calculateVarint64 = function (e) {
              "number" === typeof e
                ? (e = t.fromNumber(e))
                : "string" === typeof e && (e = t.fromString(e));
              var r = e.toInt() >>> 0,
                i = e.shiftRightUnsigned(28).toInt() >>> 0,
                n = e.shiftRightUnsigned(56).toInt() >>> 0;
              return 0 == n
                ? 0 == i
                  ? r < 16384
                    ? r < 128
                      ? 1
                      : 2
                    : r < 1 << 21
                      ? 3
                      : 4
                  : i < 16384
                    ? i < 128
                      ? 5
                      : 6
                    : i < 1 << 21
                      ? 7
                      : 8
                : n < 128
                  ? 9
                  : 10;
            }),
            (e.zigZagEncode64 = function (e) {
              return (
                "number" === typeof e
                  ? (e = t.fromNumber(e, !1))
                  : "string" === typeof e
                    ? (e = t.fromString(e, !1))
                    : !1 !== e.unsigned && (e = e.toSigned()),
                e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()
              );
            }),
            (e.zigZagDecode64 = function (e) {
              return (
                "number" === typeof e
                  ? (e = t.fromNumber(e, !1))
                  : "string" === typeof e
                    ? (e = t.fromString(e, !1))
                    : !1 !== e.unsigned && (e = e.toSigned()),
                e
                  .shiftRightUnsigned(1)
                  .xor(e.and(t.ONE).toSigned().negate())
                  .toSigned()
              );
            }),
            (r.writeVarint64 = function (r, i) {
              var n = "undefined" === typeof i;
              if ((n && (i = this.offset), !this.noAssert)) {
                if ("number" === typeof r) r = t.fromNumber(r);
                else if ("string" === typeof r) r = t.fromString(r);
                else if (!(r && r instanceof t))
                  throw TypeError(
                    "Illegal value: " + r + " (not an integer or Long)",
                  );
                if ("number" !== typeof i || i % 1 !== 0)
                  throw TypeError("Illegal offset: " + i + " (not an integer)");
                if (((i >>>= 0), i < 0 || i + 0 > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      i +
                      " (+0) <= " +
                      this.buffer.byteLength,
                  );
              }
              "number" === typeof r
                ? (r = t.fromNumber(r, !1))
                : "string" === typeof r
                  ? (r = t.fromString(r, !1))
                  : !1 !== r.unsigned && (r = r.toSigned());
              var o = e.calculateVarint64(r),
                s = r.toInt() >>> 0,
                a = r.shiftRightUnsigned(28).toInt() >>> 0,
                f = r.shiftRightUnsigned(56).toInt() >>> 0;
              i += o;
              var u = this.buffer.byteLength;
              switch (
                (i > u && this.resize((u *= 2) > i ? u : i), (i -= o), o)
              ) {
                case 10:
                  this.view[i + 9] = (f >>> 7) & 1;
                case 9:
                  this.view[i + 8] = 9 !== o ? 128 | f : 127 & f;
                case 8:
                  this.view[i + 7] =
                    8 !== o ? (a >>> 21) | 128 : (a >>> 21) & 127;
                case 7:
                  this.view[i + 6] =
                    7 !== o ? (a >>> 14) | 128 : (a >>> 14) & 127;
                case 6:
                  this.view[i + 5] =
                    6 !== o ? (a >>> 7) | 128 : (a >>> 7) & 127;
                case 5:
                  this.view[i + 4] = 5 !== o ? 128 | a : 127 & a;
                case 4:
                  this.view[i + 3] =
                    4 !== o ? (s >>> 21) | 128 : (s >>> 21) & 127;
                case 3:
                  this.view[i + 2] =
                    3 !== o ? (s >>> 14) | 128 : (s >>> 14) & 127;
                case 2:
                  this.view[i + 1] =
                    2 !== o ? (s >>> 7) | 128 : (s >>> 7) & 127;
                case 1:
                  this.view[i] = 1 !== o ? 128 | s : 127 & s;
              }
              return n ? ((this.offset += o), this) : o;
            }),
            (r.writeVarint64ZigZag = function (t, r) {
              return this.writeVarint64(e.zigZagEncode64(t), r);
            }),
            (r.readVarint64 = function (e) {
              var r = "undefined" === typeof e;
              if ((r && (e = this.offset), !this.noAssert)) {
                if ("number" !== typeof e || e % 1 !== 0)
                  throw TypeError("Illegal offset: " + e + " (not an integer)");
                if (((e >>>= 0), e < 0 || e + 1 > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      e +
                      " (+1) <= " +
                      this.buffer.byteLength,
                  );
              }
              var i = e,
                n = 0,
                o = 0,
                s = 0,
                a = 0;
              if (
                ((a = this.view[e++]),
                (n = 127 & a),
                128 & a &&
                  ((a = this.view[e++]),
                  (n |= (127 & a) << 7),
                  (128 & a || (this.noAssert && "undefined" === typeof a)) &&
                    ((a = this.view[e++]),
                    (n |= (127 & a) << 14),
                    (128 & a || (this.noAssert && "undefined" === typeof a)) &&
                      ((a = this.view[e++]),
                      (n |= (127 & a) << 21),
                      (128 & a ||
                        (this.noAssert && "undefined" === typeof a)) &&
                        ((a = this.view[e++]),
                        (o = 127 & a),
                        (128 & a ||
                          (this.noAssert && "undefined" === typeof a)) &&
                          ((a = this.view[e++]),
                          (o |= (127 & a) << 7),
                          (128 & a ||
                            (this.noAssert && "undefined" === typeof a)) &&
                            ((a = this.view[e++]),
                            (o |= (127 & a) << 14),
                            (128 & a ||
                              (this.noAssert && "undefined" === typeof a)) &&
                              ((a = this.view[e++]),
                              (o |= (127 & a) << 21),
                              (128 & a ||
                                (this.noAssert && "undefined" === typeof a)) &&
                                ((a = this.view[e++]),
                                (s = 127 & a),
                                (128 & a ||
                                  (this.noAssert &&
                                    "undefined" === typeof a)) &&
                                  ((a = this.view[e++]),
                                  (s |= (127 & a) << 7),
                                  128 & a ||
                                    (this.noAssert &&
                                      "undefined" === typeof a)))))))))))
              )
                throw Error("Buffer overrun");
              var f = t.fromBits(n | (o << 28), (o >>> 4) | (s << 24), !1);
              return r ? ((this.offset = e), f) : { value: f, length: e - i };
            }),
            (r.readVarint64ZigZag = function (r) {
              var i = this.readVarint64(r);
              return (
                i && i["value"] instanceof t
                  ? (i["value"] = e.zigZagDecode64(i["value"]))
                  : (i = e.zigZagDecode64(i)),
                i
              );
            })),
          (r.writeCString = function (t, e) {
            var r = "undefined" === typeof e;
            r && (e = this.offset);
            var i,
              n = t.length;
            if (!this.noAssert) {
              if ("string" !== typeof t)
                throw TypeError("Illegal str: Not a string");
              for (i = 0; i < n; ++i)
                if (0 === t.charCodeAt(i))
                  throw RangeError("Illegal str: Contains NULL-characters");
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            ((n = h.calculateUTF16asUTF8(o(t))[1]), (e += n + 1));
            var s = this.buffer.byteLength;
            return (
              e > s && this.resize((s *= 2) > e ? s : e),
              (e -= n + 1),
              h.encodeUTF16toUTF8(
                o(t),
                function (t) {
                  this.view[e++] = t;
                }.bind(this),
              ),
              (this.view[e++] = 0),
              r ? ((this.offset = e), this) : n
            );
          }),
          (r.readCString = function (t) {
            var e = "undefined" === typeof t;
            if ((e && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 1 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+1) <= " +
                    this.buffer.byteLength,
                );
            }
            var r,
              i = t,
              n = -1;
            return (
              h.decodeUTF8toUTF16(
                function () {
                  if (0 === n) return null;
                  if (t >= this.limit)
                    throw RangeError(
                      "Illegal range: Truncated data, " +
                        t +
                        " < " +
                        this.limit,
                    );
                  return ((n = this.view[t++]), 0 === n ? null : n);
                }.bind(this),
                (r = s()),
                !0,
              ),
              e ? ((this.offset = t), r()) : { string: r(), length: t - i }
            );
          }),
          (r.writeIString = function (t, e) {
            var r = "undefined" === typeof e;
            if ((r && (e = this.offset), !this.noAssert)) {
              if ("string" !== typeof t)
                throw TypeError("Illegal str: Not a string");
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            var i,
              n = e;
            ((i = h.calculateUTF16asUTF8(o(t), this.noAssert)[1]),
              (e += 4 + i));
            var s = this.buffer.byteLength;
            if (
              (e > s && this.resize((s *= 2) > e ? s : e),
              (e -= 4 + i),
              this.littleEndian
                ? ((this.view[e + 3] = (i >>> 24) & 255),
                  (this.view[e + 2] = (i >>> 16) & 255),
                  (this.view[e + 1] = (i >>> 8) & 255),
                  (this.view[e] = 255 & i))
                : ((this.view[e] = (i >>> 24) & 255),
                  (this.view[e + 1] = (i >>> 16) & 255),
                  (this.view[e + 2] = (i >>> 8) & 255),
                  (this.view[e + 3] = 255 & i)),
              (e += 4),
              h.encodeUTF16toUTF8(
                o(t),
                function (t) {
                  this.view[e++] = t;
                }.bind(this),
              ),
              e !== n + 4 + i)
            )
              throw RangeError(
                "Illegal range: Truncated data, " + e + " == " + (e + 4 + i),
              );
            return r ? ((this.offset = e), this) : e - n;
          }),
          (r.readIString = function (t) {
            var r = "undefined" === typeof t;
            if ((r && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 4 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+4) <= " +
                    this.buffer.byteLength,
                );
            }
            var i = t,
              n = this.readUint32(t),
              o = this.readUTF8String(n, e.METRICS_BYTES, (t += 4));
            return (
              (t += o["length"]),
              r
                ? ((this.offset = t), o["string"])
                : { string: o["string"], length: t - i }
            );
          }),
          (e.METRICS_CHARS = "c"),
          (e.METRICS_BYTES = "b"),
          (r.writeUTF8String = function (t, e) {
            var r,
              i = "undefined" === typeof e;
            if ((i && (e = this.offset), !this.noAssert)) {
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: " + e + " (not an integer)");
              if (((e >>>= 0), e < 0 || e + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    e +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            var n = e;
            ((r = h.calculateUTF16asUTF8(o(t))[1]), (e += r));
            var s = this.buffer.byteLength;
            return (
              e > s && this.resize((s *= 2) > e ? s : e),
              (e -= r),
              h.encodeUTF16toUTF8(
                o(t),
                function (t) {
                  this.view[e++] = t;
                }.bind(this),
              ),
              i ? ((this.offset = e), this) : e - n
            );
          }),
          (r.writeString = r.writeUTF8String),
          (e.calculateUTF8Chars = function (t) {
            return h.calculateUTF16asUTF8(o(t))[0];
          }),
          (e.calculateUTF8Bytes = function (t) {
            return h.calculateUTF16asUTF8(o(t))[1];
          }),
          (e.calculateString = e.calculateUTF8Bytes),
          (r.readUTF8String = function (t, r, i) {
            "number" === typeof r && ((i = r), (r = void 0));
            var n = "undefined" === typeof i;
            if (
              (n && (i = this.offset),
              "undefined" === typeof r && (r = e.METRICS_CHARS),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal length: " + t + " (not an integer)");
              if (((t |= 0), "number" !== typeof i || i % 1 !== 0))
                throw TypeError("Illegal offset: " + i + " (not an integer)");
              if (((i >>>= 0), i < 0 || i + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    i +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            var o,
              a = 0,
              f = i;
            if (r === e.METRICS_CHARS) {
              if (
                ((o = s()),
                h.decodeUTF8(
                  function () {
                    return a < t && i < this.limit ? this.view[i++] : null;
                  }.bind(this),
                  function (t) {
                    (++a, h.UTF8toUTF16(t, o));
                  },
                ),
                a !== t)
              )
                throw RangeError(
                  "Illegal range: Truncated data, " + a + " == " + t,
                );
              return n
                ? ((this.offset = i), o())
                : { string: o(), length: i - f };
            }
            if (r === e.METRICS_BYTES) {
              if (!this.noAssert) {
                if ("number" !== typeof i || i % 1 !== 0)
                  throw TypeError("Illegal offset: " + i + " (not an integer)");
                if (((i >>>= 0), i < 0 || i + t > this.buffer.byteLength))
                  throw RangeError(
                    "Illegal offset: 0 <= " +
                      i +
                      " (+" +
                      t +
                      ") <= " +
                      this.buffer.byteLength,
                  );
              }
              var u = i + t;
              if (
                (h.decodeUTF8toUTF16(
                  function () {
                    return i < u ? this.view[i++] : null;
                  }.bind(this),
                  (o = s()),
                  this.noAssert,
                ),
                i !== u)
              )
                throw RangeError(
                  "Illegal range: Truncated data, " + i + " == " + u,
                );
              return n
                ? ((this.offset = i), o())
                : { string: o(), length: i - f };
            }
            throw TypeError("Unsupported metrics: " + r);
          }),
          (r.readString = r.readUTF8String),
          (r.writeVString = function (t, r) {
            var i = "undefined" === typeof r;
            if ((i && (r = this.offset), !this.noAssert)) {
              if ("string" !== typeof t)
                throw TypeError("Illegal str: Not a string");
              if ("number" !== typeof r || r % 1 !== 0)
                throw TypeError("Illegal offset: " + r + " (not an integer)");
              if (((r >>>= 0), r < 0 || r + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    r +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            var n,
              s,
              a = r;
            ((n = h.calculateUTF16asUTF8(o(t), this.noAssert)[1]),
              (s = e.calculateVarint32(n)),
              (r += s + n));
            var f = this.buffer.byteLength;
            if (
              (r > f && this.resize((f *= 2) > r ? f : r),
              (r -= s + n),
              (r += this.writeVarint32(n, r)),
              h.encodeUTF16toUTF8(
                o(t),
                function (t) {
                  this.view[r++] = t;
                }.bind(this),
              ),
              r !== a + n + s)
            )
              throw RangeError(
                "Illegal range: Truncated data, " + r + " == " + (r + n + s),
              );
            return i ? ((this.offset = r), this) : r - a;
          }),
          (r.readVString = function (t) {
            var r = "undefined" === typeof t;
            if ((r && (t = this.offset), !this.noAssert)) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 1 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+1) <= " +
                    this.buffer.byteLength,
                );
            }
            var i = t,
              n = this.readVarint32(t),
              o = this.readUTF8String(
                n["value"],
                e.METRICS_BYTES,
                (t += n["length"]),
              );
            return (
              (t += o["length"]),
              r
                ? ((this.offset = t), o["string"])
                : { string: o["string"], length: t - i }
            );
          }),
          (r.append = function (t, r, i) {
            ("number" !== typeof r && "string" === typeof r) ||
              ((i = r), (r = void 0));
            var n = "undefined" === typeof i;
            if ((n && (i = this.offset), !this.noAssert)) {
              if ("number" !== typeof i || i % 1 !== 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
              if (((i >>>= 0), i < 0 || i + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    i +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            t instanceof e || (t = e.wrap(t, r));
            var o = t.limit - t.offset;
            if (o <= 0) return this;
            i += o;
            var s = this.buffer.byteLength;
            return (
              i > s && this.resize((s *= 2) > i ? s : i),
              (i -= o),
              this.view.set(t.view.subarray(t.offset, t.limit), i),
              (t.offset += o),
              n && (this.offset += o),
              this
            );
          }),
          (r.appendTo = function (t, e) {
            return (t.append(this, e), this);
          }),
          (r.assert = function (t) {
            return ((this.noAssert = !t), this);
          }),
          (r.capacity = function () {
            return this.buffer.byteLength;
          }),
          (r.clear = function () {
            return (
              (this.offset = 0),
              (this.limit = this.buffer.byteLength),
              (this.markedOffset = -1),
              this
            );
          }),
          (r.clone = function (t) {
            var r = new e(0, this.littleEndian, this.noAssert);
            return (
              t
                ? ((r.buffer = new ArrayBuffer(this.buffer.byteLength)),
                  (r.view = new Uint8Array(r.buffer)))
                : ((r.buffer = this.buffer), (r.view = this.view)),
              (r.offset = this.offset),
              (r.markedOffset = this.markedOffset),
              (r.limit = this.limit),
              r
            );
          }),
          (r.compact = function (t, e) {
            if (
              ("undefined" === typeof t && (t = this.offset),
              "undefined" === typeof e && (e = this.limit),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((e >>>= 0), t < 0 || t > e || e > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    t +
                    " <= " +
                    e +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            if (0 === t && e === this.buffer.byteLength) return this;
            var r = e - t;
            if (0 === r)
              return (
                (this.buffer = i),
                (this.view = null),
                this.markedOffset >= 0 && (this.markedOffset -= t),
                (this.offset = 0),
                (this.limit = 0),
                this
              );
            var n = new ArrayBuffer(r),
              o = new Uint8Array(n);
            return (
              o.set(this.view.subarray(t, e)),
              (this.buffer = n),
              (this.view = o),
              this.markedOffset >= 0 && (this.markedOffset -= t),
              (this.offset = 0),
              (this.limit = r),
              this
            );
          }),
          (r.copy = function (t, r) {
            if (
              ("undefined" === typeof t && (t = this.offset),
              "undefined" === typeof r && (r = this.limit),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
              if (((t >>>= 0), "number" !== typeof r || r % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((r >>>= 0), t < 0 || t > r || r > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    t +
                    " <= " +
                    r +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            if (t === r) return new e(0, this.littleEndian, this.noAssert);
            var i = r - t,
              n = new e(i, this.littleEndian, this.noAssert);
            return (
              (n.offset = 0),
              (n.limit = i),
              n.markedOffset >= 0 && (n.markedOffset -= t),
              this.copyTo(n, 0, t, r),
              n
            );
          }),
          (r.copyTo = function (t, r, i, n) {
            var o, s;
            if (!this.noAssert && !e.isByteBuffer(t))
              throw TypeError("Illegal target: Not a ByteBuffer");
            if (
              ((r = (s = "undefined" === typeof r) ? t.offset : 0 | r),
              (i = (o = "undefined" === typeof i) ? this.offset : 0 | i),
              (n = "undefined" === typeof n ? this.limit : 0 | n),
              r < 0 || r > t.buffer.byteLength)
            )
              throw RangeError(
                "Illegal target range: 0 <= " +
                  r +
                  " <= " +
                  t.buffer.byteLength,
              );
            if (i < 0 || n > this.buffer.byteLength)
              throw RangeError(
                "Illegal source range: 0 <= " +
                  i +
                  " <= " +
                  this.buffer.byteLength,
              );
            var a = n - i;
            return 0 === a
              ? t
              : (t.ensureCapacity(r + a),
                t.view.set(this.view.subarray(i, n), r),
                o && (this.offset += a),
                s && (t.offset += a),
                this);
          }),
          (r.ensureCapacity = function (t) {
            var e = this.buffer.byteLength;
            return e < t ? this.resize((e *= 2) > t ? e : t) : this;
          }),
          (r.fill = function (t, e, r) {
            var i = "undefined" === typeof e;
            if (
              (i && (e = this.offset),
              "string" === typeof t && t.length > 0 && (t = t.charCodeAt(0)),
              "undefined" === typeof e && (e = this.offset),
              "undefined" === typeof r && (r = this.limit),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal value: " + t + " (not an integer)");
              if (((t |= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal begin: Not an integer");
              if (((e >>>= 0), "number" !== typeof r || r % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((r >>>= 0), e < 0 || e > r || r > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    e +
                    " <= " +
                    r +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            if (e >= r) return this;
            while (e < r) this.view[e++] = t;
            return (i && (this.offset = e), this);
          }),
          (r.flip = function () {
            return ((this.limit = this.offset), (this.offset = 0), this);
          }),
          (r.mark = function (t) {
            if (
              ((t = "undefined" === typeof t ? this.offset : t), !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if (((t >>>= 0), t < 0 || t + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    t +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            return ((this.markedOffset = t), this);
          }),
          (r.order = function (t) {
            if (!this.noAssert && "boolean" !== typeof t)
              throw TypeError("Illegal littleEndian: Not a boolean");
            return ((this.littleEndian = !!t), this);
          }),
          (r.LE = function (t) {
            return (
              (this.littleEndian = "undefined" === typeof t || !!t),
              this
            );
          }),
          (r.BE = function (t) {
            return ((this.littleEndian = "undefined" !== typeof t && !t), this);
          }),
          (r.prepend = function (t, r, i) {
            ("number" !== typeof r && "string" === typeof r) ||
              ((i = r), (r = void 0));
            var n = "undefined" === typeof i;
            if ((n && (i = this.offset), !this.noAssert)) {
              if ("number" !== typeof i || i % 1 !== 0)
                throw TypeError("Illegal offset: " + i + " (not an integer)");
              if (((i >>>= 0), i < 0 || i + 0 > this.buffer.byteLength))
                throw RangeError(
                  "Illegal offset: 0 <= " +
                    i +
                    " (+0) <= " +
                    this.buffer.byteLength,
                );
            }
            t instanceof e || (t = e.wrap(t, r));
            var o = t.limit - t.offset;
            if (o <= 0) return this;
            var s = o - i;
            if (s > 0) {
              var a = new ArrayBuffer(this.buffer.byteLength + s),
                f = new Uint8Array(a);
              (f.set(this.view.subarray(i, this.buffer.byteLength), o),
                (this.buffer = a),
                (this.view = f),
                (this.offset += s),
                this.markedOffset >= 0 && (this.markedOffset += s),
                (this.limit += s),
                (i += s));
            } else new Uint8Array(this.buffer);
            return (
              this.view.set(t.view.subarray(t.offset, t.limit), i - o),
              (t.offset = t.limit),
              n && (this.offset -= o),
              this
            );
          }),
          (r.prependTo = function (t, e) {
            return (t.prepend(this, e), this);
          }),
          (r.printDebug = function (t) {
            ("function" !== typeof t && (t = console.log.bind(console)),
              t(
                this.toString() +
                  "\n-------------------------------------------------------------------\n" +
                  this.toDebug(!0),
              ));
          }),
          (r.remaining = function () {
            return this.limit - this.offset;
          }),
          (r.reset = function () {
            return (
              this.markedOffset >= 0
                ? ((this.offset = this.markedOffset), (this.markedOffset = -1))
                : (this.offset = 0),
              this
            );
          }),
          (r.resize = function (t) {
            if (!this.noAssert) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal capacity: " + t + " (not an integer)");
              if (((t |= 0), t < 0))
                throw RangeError("Illegal capacity: 0 <= " + t);
            }
            if (this.buffer.byteLength < t) {
              var e = new ArrayBuffer(t),
                r = new Uint8Array(e);
              (r.set(this.view), (this.buffer = e), (this.view = r));
            }
            return this;
          }),
          (r.reverse = function (t, e) {
            if (
              ("undefined" === typeof t && (t = this.offset),
              "undefined" === typeof e && (e = this.limit),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((e >>>= 0), t < 0 || t > e || e > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    t +
                    " <= " +
                    e +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            return (
              t === e || Array.prototype.reverse.call(this.view.subarray(t, e)),
              this
            );
          }),
          (r.skip = function (t) {
            if (!this.noAssert) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal length: " + t + " (not an integer)");
              t |= 0;
            }
            var e = this.offset + t;
            if (!this.noAssert && (e < 0 || e > this.buffer.byteLength))
              throw RangeError(
                "Illegal length: 0 <= " +
                  this.offset +
                  " + " +
                  t +
                  " <= " +
                  this.buffer.byteLength,
              );
            return ((this.offset = e), this);
          }),
          (r.slice = function (t, e) {
            if (
              ("undefined" === typeof t && (t = this.offset),
              "undefined" === typeof e && (e = this.limit),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((e >>>= 0), t < 0 || t > e || e > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    t +
                    " <= " +
                    e +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            var r = this.clone();
            return ((r.offset = t), (r.limit = e), r);
          }),
          (r.toBuffer = function (t) {
            var e = this.offset,
              r = this.limit;
            if (!this.noAssert) {
              if ("number" !== typeof e || e % 1 !== 0)
                throw TypeError("Illegal offset: Not an integer");
              if (((e >>>= 0), "number" !== typeof r || r % 1 !== 0))
                throw TypeError("Illegal limit: Not an integer");
              if (((r >>>= 0), e < 0 || e > r || r > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    e +
                    " <= " +
                    r +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            if (!t && 0 === e && r === this.buffer.byteLength)
              return this.buffer;
            if (e === r) return i;
            var n = new ArrayBuffer(r - e);
            return (
              new Uint8Array(n).set(
                new Uint8Array(this.buffer).subarray(e, r),
                0,
              ),
              n
            );
          }),
          (r.toArrayBuffer = r.toBuffer),
          (r.toString = function (t, e, r) {
            if ("undefined" === typeof t)
              return (
                "ByteBufferAB(offset=" +
                this.offset +
                ",markedOffset=" +
                this.markedOffset +
                ",limit=" +
                this.limit +
                ",capacity=" +
                this.capacity() +
                ")"
              );
            switch (
              ("number" === typeof t && ((t = "utf8"), (e = t), (r = e)), t)
            ) {
              case "utf8":
                return this.toUTF8(e, r);
              case "base64":
                return this.toBase64(e, r);
              case "hex":
                return this.toHex(e, r);
              case "binary":
                return this.toBinary(e, r);
              case "debug":
                return this.toDebug();
              case "columns":
                return this.toColumns();
              default:
                throw Error("Unsupported encoding: " + t);
            }
          }));
        var u = (function () {
          for (
            var t = {},
              e = [
                65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
                81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101,
                102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53,
                54, 55, 56, 57, 43, 47,
              ],
              r = [],
              i = 0,
              n = e.length;
            i < n;
            ++i
          )
            r[e[i]] = i;
          return (
            (t.encode = function (t, r) {
              var i, n;
              while (null !== (i = t()))
                (r(e[(i >> 2) & 63]),
                  (n = (3 & i) << 4),
                  null !== (i = t())
                    ? ((n |= (i >> 4) & 15),
                      r(e[63 & (n | ((i >> 4) & 15))]),
                      (n = (15 & i) << 2),
                      null !== (i = t())
                        ? (r(e[63 & (n | ((i >> 6) & 3))]), r(e[63 & i]))
                        : (r(e[63 & n]), r(61)))
                    : (r(e[63 & n]), r(61), r(61)));
            }),
            (t.decode = function (t, e) {
              var i, n, o;
              function s(t) {
                throw Error("Illegal character code: " + t);
              }
              while (null !== (i = t()))
                if (
                  ((n = r[i]),
                  "undefined" === typeof n && s(i),
                  null !== (i = t()) &&
                    ((o = r[i]),
                    "undefined" === typeof o && s(i),
                    e(((n << 2) >>> 0) | ((48 & o) >> 4)),
                    null !== (i = t())))
                ) {
                  if (((n = r[i]), "undefined" === typeof n)) {
                    if (61 === i) break;
                    s(i);
                  }
                  if (
                    (e((((15 & o) << 4) >>> 0) | ((60 & n) >> 2)),
                    null !== (i = t()))
                  ) {
                    if (((o = r[i]), "undefined" === typeof o)) {
                      if (61 === i) break;
                      s(i);
                    }
                    e((((3 & n) << 6) >>> 0) | o);
                  }
                }
            }),
            (t.test = function (t) {
              return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
                t,
              );
            }),
            t
          );
        })();
        ((r.toBase64 = function (t, e) {
          if (
            ("undefined" === typeof t && (t = this.offset),
            "undefined" === typeof e && (e = this.limit),
            (t |= 0),
            (e |= 0),
            t < 0 || e > this.capacity || t > e)
          )
            throw RangeError("begin, end");
          var r;
          return (
            u.encode(
              function () {
                return t < e ? this.view[t++] : null;
              }.bind(this),
              (r = s()),
            ),
            r()
          );
        }),
          (e.fromBase64 = function (t, r) {
            if ("string" !== typeof t) throw TypeError("str");
            var i = new e((t.length / 4) * 3, r),
              n = 0;
            return (
              u.decode(o(t), function (t) {
                i.view[n++] = t;
              }),
              (i.limit = n),
              i
            );
          }),
          (e.btoa = function (t) {
            return e.fromBinary(t).toBase64();
          }),
          (e.atob = function (t) {
            return e.fromBase64(t).toBinary();
          }),
          (r.toBinary = function (t, e) {
            if (
              ("undefined" === typeof t && (t = this.offset),
              "undefined" === typeof e && (e = this.limit),
              (t |= 0),
              (e |= 0),
              t < 0 || e > this.capacity() || t > e)
            )
              throw RangeError("begin, end");
            if (t === e) return "";
            var r = [],
              i = [];
            while (t < e)
              (r.push(this.view[t++]),
                r.length >= 1024 &&
                  (i.push(String.fromCharCode.apply(String, r)), (r = [])));
            return i.join("") + String.fromCharCode.apply(String, r);
          }),
          (e.fromBinary = function (t, r) {
            if ("string" !== typeof t) throw TypeError("str");
            var i,
              n = 0,
              o = t.length,
              s = new e(o, r);
            while (n < o) {
              if (((i = t.charCodeAt(n)), i > 255))
                throw RangeError("illegal char code: " + i);
              s.view[n++] = i;
            }
            return ((s.limit = o), s);
          }),
          (r.toDebug = function (t) {
            var e,
              r = -1,
              i = this.buffer.byteLength,
              n = "",
              o = "",
              s = "";
            while (r < i) {
              if (
                (-1 !== r &&
                  ((e = this.view[r]),
                  (n +=
                    e < 16
                      ? "0" + e.toString(16).toUpperCase()
                      : e.toString(16).toUpperCase()),
                  t && (o += e > 32 && e < 127 ? String.fromCharCode(e) : ".")),
                ++r,
                t && r > 0 && r % 16 === 0 && r !== i)
              ) {
                while (n.length < 51) n += " ";
                ((s += n + o + "\n"), (n = o = ""));
              }
              r === this.offset && r === this.limit
                ? (n += r === this.markedOffset ? "!" : "|")
                : r === this.offset
                  ? (n += r === this.markedOffset ? "[" : "<")
                  : r === this.limit
                    ? (n += r === this.markedOffset ? "]" : ">")
                    : (n +=
                        r === this.markedOffset
                          ? "'"
                          : t || (0 !== r && r !== i)
                            ? " "
                            : "");
            }
            if (t && " " !== n) {
              while (n.length < 51) n += " ";
              s += n + o + "\n";
            }
            return t ? s : n;
          }),
          (e.fromDebug = function (t, r, i) {
            var n,
              o,
              s = t.length,
              a = new e(((s + 1) / 3) | 0, r, i),
              f = 0,
              u = 0,
              h = !1,
              c = !1,
              l = !1,
              p = !1,
              d = !1;
            while (f < s) {
              switch ((n = t.charAt(f++))) {
                case "!":
                  if (!i) {
                    if (c || l || p) {
                      d = !0;
                      break;
                    }
                    c = l = p = !0;
                  }
                  ((a.offset = a.markedOffset = a.limit = u), (h = !1));
                  break;
                case "|":
                  if (!i) {
                    if (c || p) {
                      d = !0;
                      break;
                    }
                    c = p = !0;
                  }
                  ((a.offset = a.limit = u), (h = !1));
                  break;
                case "[":
                  if (!i) {
                    if (c || l) {
                      d = !0;
                      break;
                    }
                    c = l = !0;
                  }
                  ((a.offset = a.markedOffset = u), (h = !1));
                  break;
                case "<":
                  if (!i) {
                    if (c) {
                      d = !0;
                      break;
                    }
                    c = !0;
                  }
                  ((a.offset = u), (h = !1));
                  break;
                case "]":
                  if (!i) {
                    if (p || l) {
                      d = !0;
                      break;
                    }
                    p = l = !0;
                  }
                  ((a.limit = a.markedOffset = u), (h = !1));
                  break;
                case ">":
                  if (!i) {
                    if (p) {
                      d = !0;
                      break;
                    }
                    p = !0;
                  }
                  ((a.limit = u), (h = !1));
                  break;
                case "'":
                  if (!i) {
                    if (l) {
                      d = !0;
                      break;
                    }
                    l = !0;
                  }
                  ((a.markedOffset = u), (h = !1));
                  break;
                case " ":
                  h = !1;
                  break;
                default:
                  if (!i && h) {
                    d = !0;
                    break;
                  }
                  if (
                    ((o = parseInt(n + t.charAt(f++), 16)),
                    !i && (isNaN(o) || o < 0 || o > 255))
                  )
                    throw TypeError("Illegal str: Not a debug encoded string");
                  ((a.view[u++] = o), (h = !0));
              }
              if (d) throw TypeError("Illegal str: Invalid symbol at " + f);
            }
            if (!i) {
              if (!c || !p)
                throw TypeError("Illegal str: Missing offset or limit");
              if (u < a.buffer.byteLength)
                throw TypeError(
                  "Illegal str: Not a debug encoded string (is it hex?) " +
                    u +
                    " < " +
                    s,
                );
            }
            return a;
          }),
          (r.toHex = function (t, e) {
            if (
              ((t = "undefined" === typeof t ? this.offset : t),
              (e = "undefined" === typeof e ? this.limit : e),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((e >>>= 0), t < 0 || t > e || e > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    t +
                    " <= " +
                    e +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            var r,
              i = new Array(e - t);
            while (t < e)
              ((r = this.view[t++]),
                r < 16 ? i.push("0", r.toString(16)) : i.push(r.toString(16)));
            return i.join("");
          }),
          (e.fromHex = function (t, r, i) {
            if (!i) {
              if ("string" !== typeof t)
                throw TypeError("Illegal str: Not a string");
              if (t.length % 2 !== 0)
                throw TypeError("Illegal str: Length not a multiple of 2");
            }
            for (
              var n, o = t.length, s = new e((o / 2) | 0, r), a = 0, f = 0;
              a < o;
              a += 2
            ) {
              if (
                ((n = parseInt(t.substring(a, a + 2), 16)),
                !i && (!isFinite(n) || n < 0 || n > 255))
              )
                throw TypeError("Illegal str: Contains non-hex characters");
              s.view[f++] = n;
            }
            return ((s.limit = f), s);
          }));
        var h = (function () {
          var t = {
            MAX_CODEPOINT: 1114111,
            encodeUTF8: function (t, e) {
              var r = null;
              "number" === typeof t &&
                ((r = t),
                (t = function () {
                  return null;
                }));
              while (null !== r || null !== (r = t()))
                (r < 128
                  ? e(127 & r)
                  : r < 2048
                    ? (e(((r >> 6) & 31) | 192), e((63 & r) | 128))
                    : r < 65536
                      ? (e(((r >> 12) & 15) | 224),
                        e(((r >> 6) & 63) | 128),
                        e((63 & r) | 128))
                      : (e(((r >> 18) & 7) | 240),
                        e(((r >> 12) & 63) | 128),
                        e(((r >> 6) & 63) | 128),
                        e((63 & r) | 128)),
                  (r = null));
            },
            decodeUTF8: function (t, e) {
              var r,
                i,
                n,
                o,
                s = function (t) {
                  t = t.slice(0, t.indexOf(null));
                  var e = Error(t.toString());
                  throw ((e.name = "TruncatedError"), (e["bytes"] = t), e);
                };
              while (null !== (r = t()))
                if (0 === (128 & r)) e(r);
                else if (192 === (224 & r))
                  (null === (i = t()) && s([r, i]),
                    e(((31 & r) << 6) | (63 & i)));
                else if (224 === (240 & r))
                  ((null === (i = t()) || null === (n = t())) && s([r, i, n]),
                    e(((15 & r) << 12) | ((63 & i) << 6) | (63 & n)));
                else {
                  if (240 !== (248 & r))
                    throw RangeError("Illegal starting byte: " + r);
                  ((null === (i = t()) ||
                    null === (n = t()) ||
                    null === (o = t())) &&
                    s([r, i, n, o]),
                    e(
                      ((7 & r) << 18) |
                        ((63 & i) << 12) |
                        ((63 & n) << 6) |
                        (63 & o),
                    ));
                }
            },
            UTF16toUTF8: function (t, e) {
              var r,
                i = null;
              while (1) {
                if (null === (r = null !== i ? i : t())) break;
                r >= 55296 &&
                r <= 57343 &&
                null !== (i = t()) &&
                i >= 56320 &&
                i <= 57343
                  ? (e(1024 * (r - 55296) + i - 56320 + 65536), (i = null))
                  : e(r);
              }
              null !== i && e(i);
            },
            UTF8toUTF16: function (t, e) {
              var r = null;
              "number" === typeof t &&
                ((r = t),
                (t = function () {
                  return null;
                }));
              while (null !== r || null !== (r = t()))
                (r <= 65535
                  ? e(r)
                  : ((r -= 65536), e(55296 + (r >> 10)), e((r % 1024) + 56320)),
                  (r = null));
            },
            encodeUTF16toUTF8: function (e, r) {
              t.UTF16toUTF8(e, function (e) {
                t.encodeUTF8(e, r);
              });
            },
            decodeUTF8toUTF16: function (e, r) {
              t.decodeUTF8(e, function (e) {
                t.UTF8toUTF16(e, r);
              });
            },
            calculateCodePoint: function (t) {
              return t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
            },
            calculateUTF8: function (t) {
              var e,
                r = 0;
              while (null !== (e = t()))
                r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
              return r;
            },
            calculateUTF16asUTF8: function (e) {
              var r = 0,
                i = 0;
              return (
                t.UTF16toUTF8(e, function (t) {
                  (++r, (i += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4));
                }),
                [r, i]
              );
            },
          };
          return t;
        })();
        return (
          (r.toUTF8 = function (t, e) {
            if (
              ("undefined" === typeof t && (t = this.offset),
              "undefined" === typeof e && (e = this.limit),
              !this.noAssert)
            ) {
              if ("number" !== typeof t || t % 1 !== 0)
                throw TypeError("Illegal begin: Not an integer");
              if (((t >>>= 0), "number" !== typeof e || e % 1 !== 0))
                throw TypeError("Illegal end: Not an integer");
              if (((e >>>= 0), t < 0 || t > e || e > this.buffer.byteLength))
                throw RangeError(
                  "Illegal range: 0 <= " +
                    t +
                    " <= " +
                    e +
                    " <= " +
                    this.buffer.byteLength,
                );
            }
            var r;
            try {
              h.decodeUTF8toUTF16(
                function () {
                  return t < e ? this.view[t++] : null;
                }.bind(this),
                (r = s()),
              );
            } catch (i) {
              if (t !== e)
                throw RangeError(
                  "Illegal range: Truncated data, " + t + " != " + e,
                );
            }
            return r();
          }),
          (e.fromUTF8 = function (t, r, i) {
            if (!i && "string" !== typeof t)
              throw TypeError("Illegal str: Not a string");
            var n = new e(h.calculateUTF16asUTF8(o(t), !0)[1], r, i),
              s = 0;
            return (
              h.encodeUTF16toUTF8(o(t), function (t) {
                n.view[s++] = t;
              }),
              (n.limit = s),
              n
            );
          }),
          e
        );
      });
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
              i = [],
              n = e - r.length;
            while (i.length < n) i.push(0);
            return new t(i.concat(r));
          }),
          (BigInteger.prototype.toHex = function (t) {
            return this.toBuffer(t).toString("hex");
          }));
      }).call(this, r(2).Buffer);
    },
    3666: function (t, e, r) {
      "use strict";
      var i = r(6168),
        n = r(8048);
      function o(t, e) {
        return i("sha1").update(t).digest(e);
      }
      function s(t, e) {
        return i("sha256").update(t).digest(e);
      }
      function a(t, e) {
        return i("sha512").update(t).digest(e);
      }
      function f(t, e) {
        return n("sha256", e).update(t).digest();
      }
      function u(t) {
        try {
          return i("rmd160").update(t).digest();
        } catch (e) {
          return i("ripemd160").update(t).digest();
        }
      }
      t.exports = {
        sha1: o,
        sha256: s,
        sha512: a,
        HmacSHA256: f,
        ripemd160: u,
      };
    },
    4296: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(4686),
          n = i(r(5027)),
          o = i(r(4687)),
          s = r(229),
          a = r(5028),
          BigInteger = r(2802),
          f = a.getCurveByName("secp256k1"),
          u = r(3666),
          h = r(4297),
          c = f.G,
          l = f.n;
        function p(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "EOS";
          if ("string" === typeof t) {
            var i = p.fromString(t, r);
            return (s(null != i, "Invalid public key"), i);
          }
          if (e.isBuffer(t)) return p.fromBuffer(t);
          if ("object" === (0, o["default"])(t) && t.Q) return p(t.Q);
          function n() {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : t.compressed;
            return t.getEncoded(e);
          }
          function d() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "EOS";
            return t + h.checkEncode(n());
          }
          function y() {
            var e = t.getEncoded(!1),
              r = a.Point.decodeFrom(f, e);
            return p.fromPoint(r);
          }
          function g(r) {
            (console.error("Deprecated warning: PublicKey.child"),
              s(e.isBuffer(r), "Buffer required: offset"),
              s.equal(r.length, 32, "offset length"),
              (r = e.concat([n(), r])),
              (r = u.sha256(r)));
            var i = BigInteger.fromBuffer(r);
            if (i.compareTo(l) >= 0)
              throw new Error("Child offset went out of bounds, try again");
            var o = c.multiply(i),
              a = t.add(o);
            if (f.isInfinity(a))
              throw new Error(
                "Child offset derived to an invalid key, try again",
              );
            return p.fromPoint(a);
          }
          function v() {
            return n().toString("hex");
          }
          return (
            s.equal((0, o["default"])(t), "object", "Invalid public key"),
            s.equal(
              (0, o["default"])(t.compressed),
              "boolean",
              "Invalid public key",
            ),
            {
              Q: t,
              toString: d,
              toUncompressed: y,
              toBuffer: n,
              child: g,
              toHex: v,
            }
          );
        }
        ((t.exports = p),
          (p.isValid = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "EOS";
            try {
              return (p(t, e), !0);
            } catch (r) {
              return !1;
            }
          }),
          (p.fromBinary = function (t) {
            return p.fromBuffer(new e(t, "binary"));
          }),
          (p.fromBuffer = function (t) {
            return p(a.Point.decodeFrom(f, t));
          }),
          (p.fromPoint = function (t) {
            return p(t);
          }),
          (p.fromString = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "EOS";
            try {
              return p.fromStringOrThrow(t, e);
            } catch (r) {
              return null;
            }
          }),
          (p.fromStringOrThrow = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "EOS";
            s.equal((0, o["default"])(t), "string", "public_key");
            var r = t.match(/^PUB_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
            if (null === r) {
              var i = new RegExp("^" + e);
              return (
                i.test(t) && (t = t.substring(e.length)),
                p.fromBuffer(h.checkDecode(t))
              );
            }
            s(
              3 === r.length,
              "Expecting public key like: PUB_K1_base58pubkey..",
            );
            var a = (0, n["default"])(r, 3),
              f = a[1],
              u = a[2];
            return (
              s.equal(f, "K1", "K1 private key expected"),
              p.fromBuffer(h.checkDecode(u, f))
            );
          }),
          (p.fromHex = function (t) {
            return p.fromBuffer(new e(t, "hex"));
          }),
          (p.fromStringHex = function (t) {
            return p.fromString(new e(t, "hex"));
          }));
      }).call(this, r(2).Buffer);
    },
    4297: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(4686),
          n = i(r(4687)),
          o = r(234),
          s = r(229),
          a = r(6157),
          f = r(3666);
        t.exports = {
          random32ByteBuffer: l,
          addEntropy: p,
          cpuEntropy: d,
          entropyCount: function () {
            return h;
          },
          checkDecode: w,
          checkEncode: m,
        };
        var u = 0,
          h = 0,
          c = a(101);
        function l() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = t.cpuEntropyBits,
            i = void 0 === r ? 0 : r,
            o = t.safe,
            u = void 0 === o || o;
          (s.equal((0, n["default"])(i), "number", "cpuEntropyBits"),
            s.equal((0, n["default"])(u), "boolean", "boolean"),
            u && s(h >= 128, "Call initialize() to add entropy"));
          var l = [];
          return (
            l.push(a(32)),
            l.push(e.from(d(i))),
            l.push(c),
            l.push(v()),
            f.sha256(e.concat(l))
          );
        }
        function p() {
          s.equal(c.length, 101, "externalEntropyArray");
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          h += e.length;
          for (var i = 0, n = e; i < n.length; i++) {
            var o = n[i],
              a = u++ % 101,
              f = (c[a] += o);
            f > 9007199254740991 && (c[a] = 0);
          }
        }
        function d() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 128,
            e = [],
            r = null,
            i = 0;
          while (e.length < t) {
            var n = y();
            if (null != r) {
              var o = n - r;
              if (Math.abs(o) < 1) {
                i++;
                continue;
              }
              var s = Math.floor(g(Math.abs(o)) + 1);
              if (s < 4) {
                s < 2 && i++;
                continue;
              }
              e.push(o);
            }
            r = n;
          }
          if (i > 10) {
            var a = Number((i / t) * 100).toFixed(2);
            console.warn("WARN: ".concat(a, "% low CPU entropy re-sampled"));
          }
          return e;
        }
        function y() {
          var t = 7,
            e = Date.now(),
            r = 0,
            i = 0;
          while (Date.now() < e + t + 1)
            i = Math.sin(Math.sqrt(Math.log(++r + i)));
          return r;
        }
        var g = function (t) {
          return Math.log(t) / Math.LN2;
        };
        function v() {
          var t = Array(a(101)).join();
          try {
            t +=
              new Date().toString() +
              " " +
              window.screen.height +
              " " +
              window.screen.width +
              " " +
              window.screen.colorDepth +
              "  " +
              window.screen.availHeight +
              " " +
              window.screen.availWidth +
              " " +
              window.screen.pixelDepth +
              navigator.language +
              " " +
              window.location +
              " " +
              window.history.length;
            for (var r, i = 0; i < navigator.mimeTypes.length; i++)
              ((r = navigator.mimeTypes[i]),
                (t += r.description + " " + r.type + " " + r.suffixes + " "));
          } catch (u) {
            t += f.sha256(new Date().toString());
          }
          var n = new e(t);
          t += n.toString("binary") + " " + new Date().toString();
          var o = t,
            s = Date.now();
          while (Date.now() - s < 25) o = f.sha256(o);
          return o;
        }
        function m(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          if (
            (s(e.isBuffer(t), "expecting keyBuffer<Buffer>"), "sha256x2" === r)
          ) {
            var i = f.sha256(f.sha256(t)).slice(0, 4);
            return o.encode(e.concat([t, i]));
          }
          var n = [t];
          r && n.push(e.from(r));
          var a = f.ripemd160(e.concat(n)).slice(0, 4);
          return o.encode(e.concat([t, a]));
        }
        function w(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          s(null != t, "private key expected");
          var i,
            n = new e(o.decode(t)),
            a = n.slice(-4),
            u = n.slice(0, -4);
          if ("sha256x2" === r) i = f.sha256(f.sha256(u)).slice(0, 4);
          else {
            var h = [u];
            (r && h.push(e.from(r)),
              (i = f.ripemd160(e.concat(h)).slice(0, 4)));
          }
          if (a.toString("hex") !== i.toString("hex"))
            throw new Error(
              "Invalid checksum, " +
                "".concat(a.toString("hex"), " != ").concat(i.toString("hex")),
            );
          return u;
        }
      }).call(this, r(2).Buffer);
    },
    4684: function (t, e, r) {
      (function (t) {
        var r = Math.pow(2, 32);
        function i(t) {
          var e, i;
          return (
            (e =
              t > r || t < 0 ? ((i = Math.abs(t) % r), t < 0 ? r - i : i) : t),
            e
          );
        }
        function n(t) {
          for (var e = 0; e < t.length; t++) t[e] = 0;
          return !1;
        }
        function o() {
          ((this.SBOX = []),
            (this.INV_SBOX = []),
            (this.SUB_MIX = [[], [], [], []]),
            (this.INV_SUB_MIX = [[], [], [], []]),
            this.init(),
            (this.RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]));
        }
        o.prototype.init = function () {
          var t, e, r, i, n, o, s, a, f, u;
          for (
            t = (function () {
              var t, r;
              for (r = [], e = t = 0; t < 256; e = ++t)
                e < 128 ? r.push(e << 1) : r.push((e << 1) ^ 283);
              return r;
            })(),
              n = 0,
              f = 0,
              e = u = 0;
            u < 256;
            e = ++u
          )
            ((r = f ^ (f << 1) ^ (f << 2) ^ (f << 3) ^ (f << 4)),
              (r = (r >>> 8) ^ (255 & r) ^ 99),
              (this.SBOX[n] = r),
              (this.INV_SBOX[r] = n),
              (o = t[n]),
              (s = t[o]),
              (a = t[s]),
              (i = (257 * t[r]) ^ (16843008 * r)),
              (this.SUB_MIX[0][n] = (i << 24) | (i >>> 8)),
              (this.SUB_MIX[1][n] = (i << 16) | (i >>> 16)),
              (this.SUB_MIX[2][n] = (i << 8) | (i >>> 24)),
              (this.SUB_MIX[3][n] = i),
              (i = (16843009 * a) ^ (65537 * s) ^ (257 * o) ^ (16843008 * n)),
              (this.INV_SUB_MIX[0][r] = (i << 24) | (i >>> 8)),
              (this.INV_SUB_MIX[1][r] = (i << 16) | (i >>> 16)),
              (this.INV_SUB_MIX[2][r] = (i << 8) | (i >>> 24)),
              (this.INV_SUB_MIX[3][r] = i),
              0 === n
                ? (n = f = 1)
                : ((n = o ^ t[t[t[a ^ o]]]), (f ^= t[t[f]])));
          return !0;
        };
        var s = new o();
        function a(t) {
          var e = t.length / 4,
            r = new Array(e),
            i = -1;
          while (++i < e) r[i] = t.readUInt32BE(4 * i);
          return r;
        }
        function f(t) {
          ((this._key = a(t)), this._doReset());
        }
        ((f.blockSize = 16),
          (f.prototype.blockSize = f.blockSize),
          (f.keySize = 32),
          (f.prototype.keySize = f.keySize),
          (f.prototype._doReset = function () {
            var t, e, r, i, n, o;
            for (
              r = this._key,
                e = r.length,
                this._nRounds = e + 6,
                n = 4 * (this._nRounds + 1),
                this._keySchedule = [],
                i = 0;
              i < n;
              i++
            )
              this._keySchedule[i] =
                i < e
                  ? r[i]
                  : ((o = this._keySchedule[i - 1]),
                    i % e === 0
                      ? ((o = (o << 8) | (o >>> 24)),
                        (o =
                          (s.SBOX[o >>> 24] << 24) |
                          (s.SBOX[(o >>> 16) & 255] << 16) |
                          (s.SBOX[(o >>> 8) & 255] << 8) |
                          s.SBOX[255 & o]),
                        (o ^= s.RCON[(i / e) | 0] << 24))
                      : e > 6 &&
                        i % e === 4 &&
                        (o =
                          (s.SBOX[o >>> 24] << 24) |
                          (s.SBOX[(o >>> 16) & 255] << 16) |
                          (s.SBOX[(o >>> 8) & 255] << 8) |
                          s.SBOX[255 & o]),
                    this._keySchedule[i - e] ^ o);
            for (this._invKeySchedule = [], t = 0; t < n; t++)
              ((i = n - t),
                (o = this._keySchedule[i - (t % 4 ? 0 : 4)]),
                (this._invKeySchedule[t] =
                  t < 4 || i <= 4
                    ? o
                    : s.INV_SUB_MIX[0][s.SBOX[o >>> 24]] ^
                      s.INV_SUB_MIX[1][s.SBOX[(o >>> 16) & 255]] ^
                      s.INV_SUB_MIX[2][s.SBOX[(o >>> 8) & 255]] ^
                      s.INV_SUB_MIX[3][s.SBOX[255 & o]]));
            return !0;
          }),
          (f.prototype.encryptBlock = function (e) {
            e = a(new t(e));
            var r = this._doCryptBlock(e, this._keySchedule, s.SUB_MIX, s.SBOX),
              i = new t(16);
            return (
              i.writeUInt32BE(r[0], 0),
              i.writeUInt32BE(r[1], 4),
              i.writeUInt32BE(r[2], 8),
              i.writeUInt32BE(r[3], 12),
              i
            );
          }),
          (f.prototype.decryptBlock = function (e) {
            e = a(new t(e));
            var r = [e[3], e[1]];
            ((e[1] = r[0]), (e[3] = r[1]));
            var i = this._doCryptBlock(
                e,
                this._invKeySchedule,
                s.INV_SUB_MIX,
                s.INV_SBOX,
              ),
              n = new t(16);
            return (
              n.writeUInt32BE(i[0], 0),
              n.writeUInt32BE(i[3], 4),
              n.writeUInt32BE(i[2], 8),
              n.writeUInt32BE(i[1], 12),
              n
            );
          }),
          (f.prototype.scrub = function () {
            (n(this._keySchedule), n(this._invKeySchedule), n(this._key));
          }),
          (f.prototype._doCryptBlock = function (t, e, r, n) {
            var o, s, a, f, u, h, c, l, p;
            ((s = t[0] ^ e[0]),
              (a = t[1] ^ e[1]),
              (f = t[2] ^ e[2]),
              (u = t[3] ^ e[3]),
              (o = 4));
            for (var d = 1; d < this._nRounds; d++)
              ((h =
                r[0][s >>> 24] ^
                r[1][(a >>> 16) & 255] ^
                r[2][(f >>> 8) & 255] ^
                r[3][255 & u] ^
                e[o++]),
                (c =
                  r[0][a >>> 24] ^
                  r[1][(f >>> 16) & 255] ^
                  r[2][(u >>> 8) & 255] ^
                  r[3][255 & s] ^
                  e[o++]),
                (l =
                  r[0][f >>> 24] ^
                  r[1][(u >>> 16) & 255] ^
                  r[2][(s >>> 8) & 255] ^
                  r[3][255 & a] ^
                  e[o++]),
                (p =
                  r[0][u >>> 24] ^
                  r[1][(s >>> 16) & 255] ^
                  r[2][(a >>> 8) & 255] ^
                  r[3][255 & f] ^
                  e[o++]),
                (s = h),
                (a = c),
                (f = l),
                (u = p));
            return (
              (h =
                ((n[s >>> 24] << 24) |
                  (n[(a >>> 16) & 255] << 16) |
                  (n[(f >>> 8) & 255] << 8) |
                  n[255 & u]) ^
                e[o++]),
              (c =
                ((n[a >>> 24] << 24) |
                  (n[(f >>> 16) & 255] << 16) |
                  (n[(u >>> 8) & 255] << 8) |
                  n[255 & s]) ^
                e[o++]),
              (l =
                ((n[f >>> 24] << 24) |
                  (n[(u >>> 16) & 255] << 16) |
                  (n[(s >>> 8) & 255] << 8) |
                  n[255 & a]) ^
                e[o++]),
              (p =
                ((n[u >>> 24] << 24) |
                  (n[(s >>> 16) & 255] << 16) |
                  (n[(a >>> 8) & 255] << 8) |
                  n[255 & f]) ^
                e[o++]),
              [i(h), i(c), i(l), i(p)]
            );
          }),
          (e.AES = f));
      }).call(this, r(2).Buffer);
    },
    4685: function (t, e, r) {
      (function (t) {
        var i = r(3365);
        function n(t) {
          var e,
            r = t.length;
          while (r--) {
            if (((e = t.readUInt8(r)), 255 !== e)) {
              (e++, t.writeUInt8(e, r));
              break;
            }
            t.writeUInt8(0, r);
          }
        }
        function o(t) {
          var e = t._cipher.encryptBlock(t._prev);
          return (n(t._prev), e);
        }
        e.encrypt = function (e, r) {
          while (e._cache.length < r.length)
            e._cache = t.concat([e._cache, o(e)]);
          var n = e._cache.slice(0, r.length);
          return ((e._cache = e._cache.slice(r.length)), i(r, n));
        };
      }).call(this, r(2).Buffer);
    },
    4686: function (t, e) {
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      t.exports = r;
    },
    4687: function (t, e) {
      function r(t) {
        return (
          (r =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          r(t)
        );
      }
      function i(e) {
        return (
          "function" === typeof Symbol && "symbol" === r(Symbol.iterator)
            ? (t.exports = i =
                function (t) {
                  return r(t);
                })
            : (t.exports = i =
                function (t) {
                  return t &&
                    "function" === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : r(t);
                }),
          i(e)
        );
      }
      t.exports = i;
    },
    4688: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(4686),
          n = i(r(8051)),
          o = i(r(5027)),
          s = i(r(4687)),
          a = r(5028),
          Point = a.Point,
          f = a.getCurveByName("secp256k1"),
          BigInteger = r(2802),
          u = r(229),
          h = r(3666),
          c = r(4296),
          l = r(4297),
          p = r(6168),
          d = r(8055);
        (f.G, f.n);
        function y(t) {
          if ("string" === typeof t) return y.fromString(t);
          if (e.isBuffer(t)) return y.fromBuffer(t);
          if ("object" === (0, s["default"])(t) && BigInteger.isBigInteger(t.d))
            return y(t.d);
          if (!BigInteger.isBigInteger(t))
            throw new TypeError("Invalid private key");
          function r() {
            return i();
          }
          function i() {
            var t = a();
            return (
              (t = e.concat([new e([128]), t])),
              l.checkEncode(t, "sha256x2")
            );
          }
          var n;
          function o() {
            if (n) return n;
            var e = f.G.multiply(t);
            return (n = c.fromPoint(e));
          }
          function a() {
            return t.toBuffer(32);
          }
          function u(t) {
            t = c(t);
            var e = t.toUncompressed().toBuffer(),
              r = Point.fromAffine(
                f,
                BigInteger.fromBuffer(e.slice(1, 33)),
                BigInteger.fromBuffer(e.slice(33, 65)),
              ),
              i = a(),
              n = r.multiply(BigInteger.fromBuffer(i)),
              o = n.affineX.toBuffer({ size: 32 });
            return h.sha512(o);
          }
          function d(t) {
            var e = p("sha256").update(a()).update(t).digest();
            return y(e);
          }
          return {
            d: t,
            toWif: i,
            toString: r,
            toPublic: o,
            toBuffer: a,
            getSharedSecret: u,
            getChildKey: d,
          };
        }
        function g(t) {
          u.equal((0, s["default"])(t), "string", "privateStr");
          var e = t.match(/^PVT_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
          if (null === e) {
            var r = l.checkDecode(t, "sha256x2"),
              i = r.readUInt8(0);
            u.equal(
              128,
              i,
              "Expected version ".concat(128, ", instead got ", i),
            );
            var n = y.fromBuffer(r.slice(1)),
              a = "K1",
              f = "WIF";
            return { privateKey: n, format: f, keyType: a };
          }
          u(
            3 === e.length,
            "Expecting private key like: PVT_K1_base58privateKey..",
          );
          var h = (0, o["default"])(e, 3),
            c = h[1],
            p = h[2];
          u.equal(c, "K1", "K1 private key expected");
          var d = y.fromBuffer(l.checkDecode(p, c));
          return { privateKey: d, format: "PVT", keyType: c };
        }
        ((t.exports = y),
          (y.fromHex = function (t) {
            return y.fromBuffer(new e(t, "hex"));
          }),
          (y.fromBuffer = function (t) {
            if (!e.isBuffer(t))
              throw new Error("Expecting parameter to be a Buffer type");
            if (
              (33 === t.length && 1 === t[32] && (t = t.slice(0, -1)),
              32 !== t.length)
            )
              throw new Error(
                "Expecting 32 bytes, instead got ".concat(t.length),
              );
            return y(BigInteger.fromBuffer(t));
          }),
          (y.fromSeed = function (t) {
            if ("string" !== typeof t)
              throw new Error("seed must be of type string");
            return y.fromBuffer(h.sha256(t));
          }),
          (y.isWif = function (t) {
            try {
              return (u("WIF" === g(t).format), !0);
            } catch (e) {
              return !1;
            }
          }),
          (y.isValid = function (t) {
            try {
              return (y(t), !0);
            } catch (e) {
              return !1;
            }
          }),
          (y.fromWif = function (t) {
            return (
              console.log(
                "PrivateKey.fromWif is deprecated, please use PrivateKey.fromString",
              ),
              y.fromString(t)
            );
          }),
          (y.fromString = function (t) {
            return g(t).privateKey;
          }),
          (y.randomKey = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return y.initialize().then(function () {
              return y.fromBuffer(l.random32ByteBuffer({ cpuEntropyBits: t }));
            });
          }),
          (y.unsafeRandomKey = function () {
            return Promise.resolve(
              y.fromBuffer(l.random32ByteBuffer({ safe: !1 })),
            );
          }));
        var v = !1;
        function m() {
          v ||
            (w(),
            l.addEntropy.apply(l, (0, n["default"])(l.cpuEntropy())),
            u(l.entropyCount() >= 128, "insufficient entropy"),
            (v = !0));
        }
        function w() {
          var t = y(h.sha256("")),
            e = "key comparison test failed on a known private key";
          (u.equal(
            t.toWif(),
            "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss",
            e,
          ),
            u.equal(
              t.toString(),
              "5KYZdUEo39z3FPrtuX2QbbwGnNP5zTd7yyr2SC1j299sBCnWjss",
              e,
            ));
          var r = t.toPublic(),
            i = "pubkey string comparison test failed on a known public key";
          (u.equal(
            r.toString(),
            "EOS859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM",
            i,
          ),
            b(function () {
              return y.fromString(t.toWif());
            }, "converting known wif from string"),
            b(function () {
              return y.fromString(t.toString());
            }, "converting known pvt from string"),
            b(function () {
              return c.fromString(r.toString());
            }, "converting known public key from string"),
            !0);
        }
        y.initialize = d(m);
        var b = function (t, e) {
          try {
            t();
          } catch (r) {
            throw ((r.message = "".concat(e, " ==> ").concat(r.message)), r);
          }
        };
      }).call(this, r(2).Buffer);
    },
    4689: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__read) ||
          function (t, e) {
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
          },
        n =
          (this && this.__spread) ||
          function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(i(arguments[e]));
            return t;
          },
        o =
          (this && this.__values) ||
          function (t) {
            var e = "function" === typeof Symbol && t[Symbol.iterator],
              r = 0;
            return e
              ? e.call(t)
              : {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
                    );
                  },
                };
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s = r(8059).RIPEMD160.hash,
        a = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      function u() {
        for (var t = Array(256).fill(-1), e = 0; e < a.length; ++e)
          t[a.charCodeAt(e)] = e;
        return t;
      }
      var h = u();
      function c() {
        for (var t = Array(256).fill(-1), e = 0; e < f.length; ++e)
          t[f.charCodeAt(e)] = e;
        return ((t["=".charCodeAt(0)] = 0), t);
      }
      var l,
        p = c();
      function d(t) {
        return 0 !== (128 & t[t.length - 1]);
      }
      function y(t) {
        for (var e = 1, r = 0; r < t.length; ++r) {
          var i = (255 & ~t[r]) + e;
          ((t[r] = i), (e = i >> 8));
        }
      }
      function g(t, e) {
        for (var r = new Uint8Array(t), i = 0; i < e.length; ++i) {
          var n = e.charCodeAt(i);
          if (n < "0".charCodeAt(0) || n > "9".charCodeAt(0))
            throw new Error("invalid number");
          for (var o = n - "0".charCodeAt(0), s = 0; s < t; ++s) {
            var a = 10 * r[s] + o;
            ((r[s] = a), (o = a >> 8));
          }
          if (o) throw new Error("number is out of range");
        }
        return r;
      }
      function v(t, e) {
        var r = "-" === e[0];
        r && (e = e.substr(1));
        var i = g(t, e);
        if (r) {
          if ((y(i), !d(i))) throw new Error("number is out of range");
        } else if (d(i)) throw new Error("number is out of range");
        return i;
      }
      function m(t, e) {
        void 0 === e && (e = 1);
        for (
          var r = Array(e).fill("0".charCodeAt(0)), i = t.length - 1;
          i >= 0;
          --i
        ) {
          for (var o = t[i], s = 0; s < r.length; ++s) {
            var a = ((r[s] - "0".charCodeAt(0)) << 8) + o;
            ((r[s] = "0".charCodeAt(0) + (a % 10)), (o = (a / 10) | 0));
          }
          while (o) (r.push("0".charCodeAt(0) + (o % 10)), (o = (o / 10) | 0));
        }
        return (r.reverse(), String.fromCharCode.apply(String, n(r)));
      }
      function w(t, e) {
        if ((void 0 === e && (e = 1), d(t))) {
          var r = t.slice();
          return (y(r), "-" + m(r, e));
        }
        return m(t, e);
      }
      function b(t, e) {
        for (var r = new Uint8Array(t), i = 0; i < e.length; ++i) {
          var n = h[e.charCodeAt(i)];
          if (n < 0) throw new Error("invalid base-58 value");
          for (var o = 0; o < t; ++o) {
            var s = 58 * r[o] + n;
            ((r[o] = s), (n = s >> 8));
          }
          if (n) throw new Error("base-58 value is out of range");
        }
        return (r.reverse(), r);
      }
      function _(t, e) {
        var r, i, s, f;
        void 0 === e && (e = 1);
        var u = [];
        try {
          for (var c = o(t), l = c.next(); !l.done; l = c.next()) {
            for (var p = l.value, d = p, y = 0; y < u.length; ++y) {
              var g = (h[u[y]] << 8) + d;
              ((u[y] = a.charCodeAt(g % 58)), (d = (g / 58) | 0));
            }
            while (d) (u.push(a.charCodeAt(d % 58)), (d = (d / 58) | 0));
          }
        } catch (w) {
          r = { error: w };
        } finally {
          try {
            l && !l.done && (i = c.return) && i.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        try {
          for (var v = o(t), m = v.next(); !m.done; m = v.next()) {
            p = m.value;
            if (p) break;
            u.push("1".charCodeAt(0));
          }
        } catch (b) {
          s = { error: b };
        } finally {
          try {
            m && !m.done && (f = v.return) && f.call(v);
          } finally {
            if (s) throw s.error;
          }
        }
        return (u.reverse(), String.fromCharCode.apply(String, n(u)));
      }
      function E(t) {
        var e = t.length;
        if ((1 === (3 & e) && "=" === t[e - 1] && (e -= 1), 0 !== (3 & e)))
          throw new Error("base-64 value is not padded correctly");
        var r = e >> 2,
          i = 3 * r;
        e > 0 && "=" === t[e - 1] && ("=" === t[e - 2] ? (i -= 2) : (i -= 1));
        for (var n = new Uint8Array(i), o = 0; o < r; ++o) {
          var s = p[t.charCodeAt(4 * o + 0)],
            a = p[t.charCodeAt(4 * o + 1)],
            f = p[t.charCodeAt(4 * o + 2)],
            u = p[t.charCodeAt(4 * o + 3)];
          ((n[3 * o + 0] = (s << 2) | (a >> 4)),
            3 * o + 1 < i && (n[3 * o + 1] = ((15 & a) << 4) | (f >> 2)),
            3 * o + 2 < i && (n[3 * o + 2] = ((3 & f) << 6) | u));
        }
        return n;
      }
      function T(t, e) {
        for (
          var r = new Uint8Array(t.length + e.length), i = 0;
          i < t.length;
          ++i
        )
          r[i] = t[i];
        for (i = 0; i < e.length; ++i) r[t.length + i] = e.charCodeAt(i);
        return s(r);
      }
      function A(t, e, r, i) {
        var n = b(r + 4, t),
          o = { type: e, data: new Uint8Array(n.buffer, 0, r) },
          s = new Uint8Array(T(o.data, i));
        if (
          s[0] !== n[r + 0] ||
          s[1] !== n[r + 1] ||
          s[2] !== n[r + 2] ||
          s[3] !== n[r + 3]
        )
          throw new Error("checksum doesn't match");
        return o;
      }
      function S(t, e, r) {
        for (
          var i = new Uint8Array(T(t.data, e)),
            n = new Uint8Array(t.data.length + 4),
            o = 0;
          o < t.data.length;
          ++o
        )
          n[o] = t.data[o];
        for (o = 0; o < 4; ++o) n[o + t.data.length] = i[o];
        return r + _(n);
      }
      function B(t) {
        if ("string" !== typeof t)
          throw new Error("expected string containing public key");
        if ("EOS" === t.substr(0, 3)) {
          for (
            var r = b(e.publicKeyDataSize + 4, t.substr(3)),
              i = { type: l.k1, data: new Uint8Array(e.publicKeyDataSize) },
              n = 0;
            n < e.publicKeyDataSize;
            ++n
          )
            i.data[n] = r[n];
          var o = new Uint8Array(s(i.data));
          if (
            o[0] !== r[e.publicKeyDataSize] ||
            o[1] !== r[34] ||
            o[2] !== r[35] ||
            o[3] !== r[36]
          )
            throw new Error("checksum doesn't match");
          return i;
        }
        if ("PUB_K1_" === t.substr(0, 7))
          return A(t.substr(7), l.k1, e.publicKeyDataSize, "K1");
        if ("PUB_R1_" === t.substr(0, 7))
          return A(t.substr(7), l.r1, e.publicKeyDataSize, "R1");
        throw new Error("unrecognized public key format");
      }
      function I(t) {
        if (t.type === l.k1 && t.data.length === e.publicKeyDataSize)
          return S(t, "K1", "PUB_K1_");
        if (t.type === l.r1 && t.data.length === e.publicKeyDataSize)
          return S(t, "R1", "PUB_R1_");
        throw new Error("unrecognized public key format");
      }
      function x(t) {
        return "EOS" === t.substr(0, 3) ? I(B(t)) : t;
      }
      function k(t) {
        return t.map(x);
      }
      function U(t) {
        if ("string" !== typeof t)
          throw new Error("expected string containing private key");
        if ("PVT_R1_" === t.substr(0, 7))
          return A(t.substr(7), l.r1, e.privateKeyDataSize, "R1");
        throw new Error("unrecognized private key format");
      }
      function z(t) {
        if (t.type === l.r1) return S(t, "R1", "PVT_R1_");
        throw new Error("unrecognized private key format");
      }
      function O(t) {
        if ("string" !== typeof t)
          throw new Error("expected string containing signature");
        if ("SIG_K1_" === t.substr(0, 7))
          return A(t.substr(7), l.k1, e.signatureDataSize, "K1");
        if ("SIG_R1_" === t.substr(0, 7))
          return A(t.substr(7), l.r1, e.signatureDataSize, "R1");
        throw new Error("unrecognized signature format");
      }
      function D(t) {
        if (t.type === l.k1) return S(t, "K1", "SIG_K1_");
        if (t.type === l.r1) return S(t, "R1", "SIG_R1_");
        throw new Error("unrecognized signature format");
      }
      ((e.isNegative = d),
        (e.negate = y),
        (e.decimalToBinary = g),
        (e.signedDecimalToBinary = v),
        (e.binaryToDecimal = m),
        (e.signedBinaryToDecimal = w),
        (e.base58ToBinary = b),
        (e.binaryToBase58 = _),
        (e.base64ToBinary = E),
        (function (t) {
          ((t[(t["k1"] = 0)] = "k1"), (t[(t["r1"] = 1)] = "r1"));
        })((l = e.KeyType || (e.KeyType = {}))),
        (e.publicKeyDataSize = 33),
        (e.privateKeyDataSize = 32),
        (e.signatureDataSize = 65),
        (e.stringToPublicKey = B),
        (e.publicKeyToString = I),
        (e.convertLegacyPublicKey = x),
        (e.convertLegacyPublicKeys = k),
        (e.stringToPrivateKey = U),
        (e.privateKeyToString = z),
        (e.stringToSignature = O),
        (e.signatureToString = D));
    },
    5025: function (t, e, r) {
      var i, n, o;
      /**
       * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
       * Released under the Apache License, Version 2.0
       * see: https://github.com/dcodeIO/long.js for details
       */ (function (r, s) {
        ((n = []),
          (i = s),
          (o = "function" === typeof i ? i.apply(e, n) : i),
          void 0 === o || (t.exports = o));
      })(0, function () {
        "use strict";
        function t(t, e, r) {
          ((this.low = 0 | t), (this.high = 0 | e), (this.unsigned = !!r));
        }
        function e(t) {
          return !0 === (t && t["__isLong__"]);
        }
        (t.prototype.__isLong__,
          Object.defineProperty(t.prototype, "__isLong__", {
            value: !0,
            enumerable: !1,
            configurable: !1,
          }),
          (t.isLong = e));
        var r = {},
          i = {};
        function n(t, e) {
          var n, o, a;
          return e
            ? ((t >>>= 0),
              (a = 0 <= t && t < 256) && ((o = i[t]), o)
                ? o
                : ((n = s(t, (0 | t) < 0 ? -1 : 0, !0)), a && (i[t] = n), n))
            : ((t |= 0),
              (a = -128 <= t && t < 128) && ((o = r[t]), o)
                ? o
                : ((n = s(t, t < 0 ? -1 : 0, !1)), a && (r[t] = n), n));
        }
        function o(t, e) {
          if (isNaN(t) || !isFinite(t)) return e ? v : g;
          if (e) {
            if (t < 0) return v;
            if (t >= p) return E;
          } else {
            if (t <= -d) return T;
            if (t + 1 >= d) return _;
          }
          return t < 0 ? o(-t, e).neg() : s((t % l) | 0, (t / l) | 0, e);
        }
        function s(e, r, i) {
          return new t(e, r, i);
        }
        ((t.fromInt = n), (t.fromNumber = o), (t.fromBits = s));
        var a = Math.pow;
        function f(t, e, r) {
          if (0 === t.length) throw Error("empty string");
          if (
            "NaN" === t ||
            "Infinity" === t ||
            "+Infinity" === t ||
            "-Infinity" === t
          )
            return g;
          if (
            ("number" === typeof e ? ((r = e), (e = !1)) : (e = !!e),
            (r = r || 10),
            r < 2 || 36 < r)
          )
            throw RangeError("radix");
          var i;
          if ((i = t.indexOf("-")) > 0) throw Error("interior hyphen");
          if (0 === i) return f(t.substring(1), e, r).neg();
          for (var n = o(a(r, 8)), s = g, u = 0; u < t.length; u += 8) {
            var h = Math.min(8, t.length - u),
              c = parseInt(t.substring(u, u + h), r);
            if (h < 8) {
              var l = o(a(r, h));
              s = s.mul(l).add(o(c));
            } else ((s = s.mul(n)), (s = s.add(o(c))));
          }
          return ((s.unsigned = e), s);
        }
        function u(e) {
          return e instanceof t
            ? e
            : "number" === typeof e
              ? o(e)
              : "string" === typeof e
                ? f(e)
                : s(e.low, e.high, e.unsigned);
        }
        ((t.fromString = f), (t.fromValue = u));
        var h = 65536,
          c = 1 << 24,
          l = h * h,
          p = l * l,
          d = p / 2,
          y = n(c),
          g = n(0);
        t.ZERO = g;
        var v = n(0, !0);
        t.UZERO = v;
        var m = n(1);
        t.ONE = m;
        var w = n(1, !0);
        t.UONE = w;
        var b = n(-1);
        t.NEG_ONE = b;
        var _ = s(-1, 2147483647, !1);
        t.MAX_VALUE = _;
        var E = s(-1, -1, !0);
        t.MAX_UNSIGNED_VALUE = E;
        var T = s(0, -2147483648, !1);
        t.MIN_VALUE = T;
        var A = t.prototype;
        return (
          (A.toInt = function () {
            return this.unsigned ? this.low >>> 0 : this.low;
          }),
          (A.toNumber = function () {
            return this.unsigned
              ? (this.high >>> 0) * l + (this.low >>> 0)
              : this.high * l + (this.low >>> 0);
          }),
          (A.toString = function (t) {
            if (((t = t || 10), t < 2 || 36 < t)) throw RangeError("radix");
            if (this.isZero()) return "0";
            if (this.isNegative()) {
              if (this.eq(T)) {
                var e = o(t),
                  r = this.div(e),
                  i = r.mul(e).sub(this);
                return r.toString(t) + i.toInt().toString(t);
              }
              return "-" + this.neg().toString(t);
            }
            var n = o(a(t, 6), this.unsigned),
              s = this,
              f = "";
            while (1) {
              var u = s.div(n),
                h = s.sub(u.mul(n)).toInt() >>> 0,
                c = h.toString(t);
              if (((s = u), s.isZero())) return c + f;
              while (c.length < 6) c = "0" + c;
              f = "" + c + f;
            }
          }),
          (A.getHighBits = function () {
            return this.high;
          }),
          (A.getHighBitsUnsigned = function () {
            return this.high >>> 0;
          }),
          (A.getLowBits = function () {
            return this.low;
          }),
          (A.getLowBitsUnsigned = function () {
            return this.low >>> 0;
          }),
          (A.getNumBitsAbs = function () {
            if (this.isNegative())
              return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
            for (
              var t = 0 != this.high ? this.high : this.low, e = 31;
              e > 0;
              e--
            )
              if (0 != (t & (1 << e))) break;
            return 0 != this.high ? e + 33 : e + 1;
          }),
          (A.isZero = function () {
            return 0 === this.high && 0 === this.low;
          }),
          (A.isNegative = function () {
            return !this.unsigned && this.high < 0;
          }),
          (A.isPositive = function () {
            return this.unsigned || this.high >= 0;
          }),
          (A.isOdd = function () {
            return 1 === (1 & this.low);
          }),
          (A.isEven = function () {
            return 0 === (1 & this.low);
          }),
          (A.equals = function (t) {
            return (
              e(t) || (t = u(t)),
              (this.unsigned === t.unsigned ||
                this.high >>> 31 !== 1 ||
                t.high >>> 31 !== 1) &&
                this.high === t.high &&
                this.low === t.low
            );
          }),
          (A.eq = A.equals),
          (A.notEquals = function (t) {
            return !this.eq(t);
          }),
          (A.neq = A.notEquals),
          (A.lessThan = function (t) {
            return this.comp(t) < 0;
          }),
          (A.lt = A.lessThan),
          (A.lessThanOrEqual = function (t) {
            return this.comp(t) <= 0;
          }),
          (A.lte = A.lessThanOrEqual),
          (A.greaterThan = function (t) {
            return this.comp(t) > 0;
          }),
          (A.gt = A.greaterThan),
          (A.greaterThanOrEqual = function (t) {
            return this.comp(t) >= 0;
          }),
          (A.gte = A.greaterThanOrEqual),
          (A.compare = function (t) {
            if ((e(t) || (t = u(t)), this.eq(t))) return 0;
            var r = this.isNegative(),
              i = t.isNegative();
            return r && !i
              ? -1
              : !r && i
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
          (A.comp = A.compare),
          (A.negate = function () {
            return !this.unsigned && this.eq(T) ? T : this.not().add(m);
          }),
          (A.neg = A.negate),
          (A.add = function (t) {
            e(t) || (t = u(t));
            var r = this.high >>> 16,
              i = 65535 & this.high,
              n = this.low >>> 16,
              o = 65535 & this.low,
              a = t.high >>> 16,
              f = 65535 & t.high,
              h = t.low >>> 16,
              c = 65535 & t.low,
              l = 0,
              p = 0,
              d = 0,
              y = 0;
            return (
              (y += o + c),
              (d += y >>> 16),
              (y &= 65535),
              (d += n + h),
              (p += d >>> 16),
              (d &= 65535),
              (p += i + f),
              (l += p >>> 16),
              (p &= 65535),
              (l += r + a),
              (l &= 65535),
              s((d << 16) | y, (l << 16) | p, this.unsigned)
            );
          }),
          (A.subtract = function (t) {
            return (e(t) || (t = u(t)), this.add(t.neg()));
          }),
          (A.sub = A.subtract),
          (A.multiply = function (t) {
            if (this.isZero()) return g;
            if ((e(t) || (t = u(t)), t.isZero())) return g;
            if (this.eq(T)) return t.isOdd() ? T : g;
            if (t.eq(T)) return this.isOdd() ? T : g;
            if (this.isNegative())
              return t.isNegative()
                ? this.neg().mul(t.neg())
                : this.neg().mul(t).neg();
            if (t.isNegative()) return this.mul(t.neg()).neg();
            if (this.lt(y) && t.lt(y))
              return o(this.toNumber() * t.toNumber(), this.unsigned);
            var r = this.high >>> 16,
              i = 65535 & this.high,
              n = this.low >>> 16,
              a = 65535 & this.low,
              f = t.high >>> 16,
              h = 65535 & t.high,
              c = t.low >>> 16,
              l = 65535 & t.low,
              p = 0,
              d = 0,
              v = 0,
              m = 0;
            return (
              (m += a * l),
              (v += m >>> 16),
              (m &= 65535),
              (v += n * l),
              (d += v >>> 16),
              (v &= 65535),
              (v += a * c),
              (d += v >>> 16),
              (v &= 65535),
              (d += i * l),
              (p += d >>> 16),
              (d &= 65535),
              (d += n * c),
              (p += d >>> 16),
              (d &= 65535),
              (d += a * h),
              (p += d >>> 16),
              (d &= 65535),
              (p += r * l + i * c + n * h + a * f),
              (p &= 65535),
              s((v << 16) | m, (p << 16) | d, this.unsigned)
            );
          }),
          (A.mul = A.multiply),
          (A.divide = function (t) {
            if ((e(t) || (t = u(t)), t.isZero()))
              throw Error("division by zero");
            if (this.isZero()) return this.unsigned ? v : g;
            var r, i, n;
            if (this.unsigned) {
              if ((t.unsigned || (t = t.toUnsigned()), t.gt(this))) return v;
              if (t.gt(this.shru(1))) return w;
              n = v;
            } else {
              if (this.eq(T)) {
                if (t.eq(m) || t.eq(b)) return T;
                if (t.eq(T)) return m;
                var s = this.shr(1);
                return (
                  (r = s.div(t).shl(1)),
                  r.eq(g)
                    ? t.isNegative()
                      ? m
                      : b
                    : ((i = this.sub(t.mul(r))), (n = r.add(i.div(t))), n)
                );
              }
              if (t.eq(T)) return this.unsigned ? v : g;
              if (this.isNegative())
                return t.isNegative()
                  ? this.neg().div(t.neg())
                  : this.neg().div(t).neg();
              if (t.isNegative()) return this.div(t.neg()).neg();
              n = g;
            }
            i = this;
            while (i.gte(t)) {
              r = Math.max(1, Math.floor(i.toNumber() / t.toNumber()));
              var f = Math.ceil(Math.log(r) / Math.LN2),
                h = f <= 48 ? 1 : a(2, f - 48),
                c = o(r),
                l = c.mul(t);
              while (l.isNegative() || l.gt(i))
                ((r -= h), (c = o(r, this.unsigned)), (l = c.mul(t)));
              (c.isZero() && (c = m), (n = n.add(c)), (i = i.sub(l)));
            }
            return n;
          }),
          (A.div = A.divide),
          (A.modulo = function (t) {
            return (e(t) || (t = u(t)), this.sub(this.div(t).mul(t)));
          }),
          (A.mod = A.modulo),
          (A.not = function () {
            return s(~this.low, ~this.high, this.unsigned);
          }),
          (A.and = function (t) {
            return (
              e(t) || (t = u(t)),
              s(this.low & t.low, this.high & t.high, this.unsigned)
            );
          }),
          (A.or = function (t) {
            return (
              e(t) || (t = u(t)),
              s(this.low | t.low, this.high | t.high, this.unsigned)
            );
          }),
          (A.xor = function (t) {
            return (
              e(t) || (t = u(t)),
              s(this.low ^ t.low, this.high ^ t.high, this.unsigned)
            );
          }),
          (A.shiftLeft = function (t) {
            return (
              e(t) && (t = t.toInt()),
              0 === (t &= 63)
                ? this
                : t < 32
                  ? s(
                      this.low << t,
                      (this.high << t) | (this.low >>> (32 - t)),
                      this.unsigned,
                    )
                  : s(0, this.low << (t - 32), this.unsigned)
            );
          }),
          (A.shl = A.shiftLeft),
          (A.shiftRight = function (t) {
            return (
              e(t) && (t = t.toInt()),
              0 === (t &= 63)
                ? this
                : t < 32
                  ? s(
                      (this.low >>> t) | (this.high << (32 - t)),
                      this.high >> t,
                      this.unsigned,
                    )
                  : s(
                      this.high >> (t - 32),
                      this.high >= 0 ? 0 : -1,
                      this.unsigned,
                    )
            );
          }),
          (A.shr = A.shiftRight),
          (A.shiftRightUnsigned = function (t) {
            if ((e(t) && (t = t.toInt()), (t &= 63), 0 === t)) return this;
            var r = this.high;
            if (t < 32) {
              var i = this.low;
              return s((i >>> t) | (r << (32 - t)), r >>> t, this.unsigned);
            }
            return s(32 === t ? r : r >>> (t - 32), 0, this.unsigned);
          }),
          (A.shru = A.shiftRightUnsigned),
          (A.toSigned = function () {
            return this.unsigned ? s(this.low, this.high, !1) : this;
          }),
          (A.toUnsigned = function () {
            return this.unsigned ? this : s(this.low, this.high, !0);
          }),
          (A.toBytes = function (t) {
            return t ? this.toBytesLE() : this.toBytesBE();
          }),
          (A.toBytesLE = function () {
            var t = this.high,
              e = this.low;
            return [
              255 & e,
              (e >>> 8) & 255,
              (e >>> 16) & 255,
              (e >>> 24) & 255,
              255 & t,
              (t >>> 8) & 255,
              (t >>> 16) & 255,
              (t >>> 24) & 255,
            ];
          }),
          (A.toBytesBE = function () {
            var t = this.high,
              e = this.low;
            return [
              (t >>> 24) & 255,
              (t >>> 16) & 255,
              (t >>> 8) & 255,
              255 & t,
              (e >>> 24) & 255,
              (e >>> 16) & 255,
              (e >>> 8) & 255,
              255 & e,
            ];
          }),
          t
        );
      });
    },
    5026: function (t, e) {
      ((e["aes-128-ecb"] = {
        cipher: "AES",
        key: 128,
        iv: 0,
        mode: "ECB",
        type: "block",
      }),
        (e["aes-192-ecb"] = {
          cipher: "AES",
          key: 192,
          iv: 0,
          mode: "ECB",
          type: "block",
        }),
        (e["aes-256-ecb"] = {
          cipher: "AES",
          key: 256,
          iv: 0,
          mode: "ECB",
          type: "block",
        }),
        (e["aes-128-cbc"] = {
          cipher: "AES",
          key: 128,
          iv: 16,
          mode: "CBC",
          type: "block",
        }),
        (e["aes-192-cbc"] = {
          cipher: "AES",
          key: 192,
          iv: 16,
          mode: "CBC",
          type: "block",
        }),
        (e["aes-256-cbc"] = {
          cipher: "AES",
          key: 256,
          iv: 16,
          mode: "CBC",
          type: "block",
        }),
        (e["aes128"] = e["aes-128-cbc"]),
        (e["aes192"] = e["aes-192-cbc"]),
        (e["aes256"] = e["aes-256-cbc"]),
        (e["aes-128-cfb"] = {
          cipher: "AES",
          key: 128,
          iv: 16,
          mode: "CFB",
          type: "stream",
        }),
        (e["aes-192-cfb"] = {
          cipher: "AES",
          key: 192,
          iv: 16,
          mode: "CFB",
          type: "stream",
        }),
        (e["aes-256-cfb"] = {
          cipher: "AES",
          key: 256,
          iv: 16,
          mode: "CFB",
          type: "stream",
        }),
        (e["aes-128-cfb8"] = {
          cipher: "AES",
          key: 128,
          iv: 16,
          mode: "CFB8",
          type: "stream",
        }),
        (e["aes-192-cfb8"] = {
          cipher: "AES",
          key: 192,
          iv: 16,
          mode: "CFB8",
          type: "stream",
        }),
        (e["aes-256-cfb8"] = {
          cipher: "AES",
          key: 256,
          iv: 16,
          mode: "CFB8",
          type: "stream",
        }),
        (e["aes-128-cfb1"] = {
          cipher: "AES",
          key: 128,
          iv: 16,
          mode: "CFB1",
          type: "stream",
        }),
        (e["aes-192-cfb1"] = {
          cipher: "AES",
          key: 192,
          iv: 16,
          mode: "CFB1",
          type: "stream",
        }),
        (e["aes-256-cfb1"] = {
          cipher: "AES",
          key: 256,
          iv: 16,
          mode: "CFB1",
          type: "stream",
        }),
        (e["aes-128-ofb"] = {
          cipher: "AES",
          key: 128,
          iv: 16,
          mode: "OFB",
          type: "stream",
        }),
        (e["aes-192-ofb"] = {
          cipher: "AES",
          key: 192,
          iv: 16,
          mode: "OFB",
          type: "stream",
        }),
        (e["aes-256-ofb"] = {
          cipher: "AES",
          key: 256,
          iv: 16,
          mode: "OFB",
          type: "stream",
        }),
        (e["aes-128-ctr"] = {
          cipher: "AES",
          key: 128,
          iv: 16,
          mode: "CTR",
          type: "stream",
        }),
        (e["aes-192-ctr"] = {
          cipher: "AES",
          key: 192,
          iv: 16,
          mode: "CTR",
          type: "stream",
        }),
        (e["aes-256-ctr"] = {
          cipher: "AES",
          key: 256,
          iv: 16,
          mode: "CTR",
          type: "stream",
        }),
        (e["aes-128-gcm"] = {
          cipher: "AES",
          key: 128,
          iv: 12,
          mode: "GCM",
          type: "auth",
        }),
        (e["aes-192-gcm"] = {
          cipher: "AES",
          key: 192,
          iv: 12,
          mode: "GCM",
          type: "auth",
        }),
        (e["aes-256-gcm"] = {
          cipher: "AES",
          key: 256,
          iv: 12,
          mode: "GCM",
          type: "auth",
        }));
    },
    5027: function (t, e, r) {
      var i = r(8041),
        n = r(8042),
        o = r(8043);
      function s(t, e) {
        return i(t) || n(t, e) || o();
      }
      t.exports = s;
    },
    5028: function (t, e, r) {
      var Point = r(6166),
        i = r(6167),
        n = r(8044);
      t.exports = { Curve: i, Point: Point, getCurveByName: n };
    },
    6155: function (t, e, r) {
      "use strict";
      var i = r(8036),
        n = r(8058),
        o = Object.assign({}, i, n);
      t.exports = o;
    },
    6156: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(6157),
          n = r(3057),
          o = r(8037),
          s = r(229),
          a = r(4296),
          f = r(4688),
          u = r(3666),
          h = n.Long;
        function c(t, e, r) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : g();
          return p(t, e, i, r);
        }
        function l(t, e, r, i, n) {
          return p(t, e, r, i, n).message;
        }
        function p(t, r, i, o, s) {
          if (((t = f(t)), !t)) throw new TypeError("private_key is required");
          if (((r = a(r)), !r)) throw new TypeError("public_key is required");
          if (((i = m(i)), !i)) throw new TypeError("nonce is required");
          if (!e.isBuffer(o)) {
            if ("string" !== typeof o)
              throw new TypeError("message should be buffer or string");
            o = new e(o, "binary");
          }
          if (s && "number" !== typeof s)
            throw new TypeError("checksum should be a number");
          var h = t.getSharedSecret(r),
            c = new n(n.DEFAULT_CAPACITY, n.LITTLE_ENDIAN);
          (c.writeUint64(i),
            c.append(h.toString("binary"), "binary"),
            (c = new e(c.copy(0, c.offset).toBinary(), "binary")));
          var l = u.sha512(c),
            p = l.slice(32, 48),
            g = l.slice(0, 32),
            v = u.sha256(l);
          v = v.slice(0, 4);
          var w = n.fromBinary(
            v.toString("binary"),
            n.DEFAULT_CAPACITY,
            n.LITTLE_ENDIAN,
          );
          if (((v = w.readUint32()), s)) {
            if (v !== s) throw new Error("Invalid key");
            o = d(o, g, p);
          } else o = y(o, g, p);
          return { nonce: i, message: o, checksum: v };
        }
        function d(t, r, i) {
          (s(t, "Missing cipher text"), (t = w(t)));
          var n = o.createDecipheriv("aes-256-cbc", r, i);
          return ((t = e.concat([n.update(t), n["final"]()])), t);
        }
        function y(t, r, i) {
          (s(t, "Missing plain text"), (t = w(t)));
          var n = o.createCipheriv("aes-256-cbc", r, i);
          return ((t = e.concat([n.update(t), n["final"]()])), t);
        }
        function g() {
          if (null === v) {
            var t = new Uint8Array(i(2));
            v = parseInt((t[0] << 8) | t[1], 10);
          }
          var e = h.fromNumber(Date.now()),
            r = ++v % 65535;
          return ((e = e.shiftLeft(16).or(h.fromNumber(r))), e.toString());
        }
        t.exports = { encrypt: c, decrypt: l };
        var v = null,
          m = function (t) {
            return t ? (h.isLong(t) ? t : h.fromString(t)) : t;
          },
          w = function (t) {
            return t ? (e.isBuffer(t) ? t : new e(t, "binary")) : t;
          };
      }).call(this, r(2).Buffer);
    },
    6157: function (t, e, r) {
      "use strict";
      (function (e, i) {
        function n() {
          throw new Error(
            "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11",
          );
        }
        var o = r(46).Buffer,
          s = e.crypto || e.msCrypto;
        function a(t, r) {
          if (t > 65536) throw new Error("requested too many random bytes");
          var n = new e.Uint8Array(t);
          t > 0 && s.getRandomValues(n);
          var a = o.from(n.buffer);
          return "function" === typeof r
            ? i.nextTick(function () {
                r(null, a);
              })
            : a;
        }
        s && s.getRandomValues ? (t.exports = a) : (t.exports = n);
      }).call(this, r(13), r(18));
    },
    6158: function (t, e, r) {
      (function (e) {
        var i = r(4684),
          n = r(806),
          o = r(16);
        function s(t, r, o, a) {
          if (!(this instanceof s)) return new s(t, r, o);
          (n.call(this),
            (this._cipher = new i.AES(r)),
            (this._prev = new e(o.length)),
            (this._cache = new e("")),
            (this._secCache = new e("")),
            (this._decrypt = a),
            o.copy(this._prev),
            (this._mode = t));
        }
        (o(s, n),
          (t.exports = s),
          (s.prototype._update = function (t) {
            return this._mode.encrypt(this, t, this._decrypt);
          }),
          (s.prototype._final = function () {
            this._cipher.scrub();
          }));
      }).call(this, r(2).Buffer);
    },
    6159: function (t, e, r) {
      (function (e) {
        var i = r(4684),
          n = r(806),
          o = r(16),
          s = r(8039),
          a = r(3365);
        function f(t, r, o, a) {
          if (!(this instanceof f)) return new f(t, r, o);
          (n.call(this),
            (this._finID = e.concat([o, new e([0, 0, 0, 1])])),
            (o = e.concat([o, new e([0, 0, 0, 2])])),
            (this._cipher = new i.AES(r)),
            (this._prev = new e(o.length)),
            (this._cache = new e("")),
            (this._secCache = new e("")),
            (this._decrypt = a),
            (this._alen = 0),
            (this._len = 0),
            o.copy(this._prev),
            (this._mode = t));
          var u = new e(4);
          (u.fill(0),
            (this._ghash = new s(this._cipher.encryptBlock(u))),
            (this._authTag = null),
            (this._called = !1));
        }
        function u(t, e) {
          var r = 0;
          t.length !== e.length && r++;
          var i = Math.min(t.length, e.length),
            n = -1;
          while (++n < i) r += t[n] ^ e[n];
          return r;
        }
        (o(f, n),
          (t.exports = f),
          (f.prototype._update = function (t) {
            if (!this._called && this._alen) {
              var r = 16 - (this._alen % 16);
              r < 16 && ((r = new e(r)), r.fill(0), this._ghash.update(r));
            }
            this._called = !0;
            var i = this._mode.encrypt(this, t);
            return (
              this._decrypt ? this._ghash.update(t) : this._ghash.update(i),
              (this._len += t.length),
              i
            );
          }),
          (f.prototype._final = function () {
            if (this._decrypt && !this._authTag)
              throw new Error(
                "Unsupported state or unable to authenticate data",
              );
            var t = a(
              this._ghash.final(8 * this._alen, 8 * this._len),
              this._cipher.encryptBlock(this._finID),
            );
            if (this._decrypt) {
              if (u(t, this._authTag))
                throw new Error(
                  "Unsupported state or unable to authenticate data",
                );
            } else this._authTag = t;
            this._cipher.scrub();
          }),
          (f.prototype.getAuthTag = function () {
            if (!this._decrypt && e.isBuffer(this._authTag))
              return this._authTag;
            throw new Error("Attempting to get auth tag in unsupported state");
          }),
          (f.prototype.setAuthTag = function (t) {
            if (!this._decrypt)
              throw new Error(
                "Attempting to set auth tag in unsupported state",
              );
            this._authTag = t;
          }),
          (f.prototype.setAAD = function (t) {
            if (this._called)
              throw new Error("Attempting to set AAD in unsupported state");
            (this._ghash.update(t), (this._alen += t.length));
          }));
      }).call(this, r(2).Buffer);
    },
    6160: function (t, e) {
      ((e.encrypt = function (t, e) {
        return t._cipher.encryptBlock(e);
      }),
        (e.decrypt = function (t, e) {
          return t._cipher.decryptBlock(e);
        }));
    },
    6161: function (t, e, r) {
      var i = r(3365);
      ((e.encrypt = function (t, e) {
        var r = i(e, t._prev);
        return ((t._prev = t._cipher.encryptBlock(r)), t._prev);
      }),
        (e.decrypt = function (t, e) {
          var r = t._prev;
          t._prev = e;
          var n = t._cipher.decryptBlock(e);
          return i(n, r);
        }));
    },
    6162: function (t, e, r) {
      (function (t) {
        var i = r(3365);
        function n(e, r, n) {
          var o = r.length,
            s = i(r, e._cache);
          return (
            (e._cache = e._cache.slice(o)),
            (e._prev = t.concat([e._prev, n ? r : s])),
            s
          );
        }
        e.encrypt = function (e, r, i) {
          var o,
            s = new t("");
          while (r.length) {
            if (
              (0 === e._cache.length &&
                ((e._cache = e._cipher.encryptBlock(e._prev)),
                (e._prev = new t(""))),
              !(e._cache.length <= r.length))
            ) {
              s = t.concat([s, n(e, r, i)]);
              break;
            }
            ((o = e._cache.length),
              (s = t.concat([s, n(e, r.slice(0, o), i)])),
              (r = r.slice(o)));
          }
          return s;
        };
      }).call(this, r(2).Buffer);
    },
    6163: function (t, e, r) {
      (function (t) {
        function r(e, r, i) {
          var n = e._cipher.encryptBlock(e._prev),
            o = n[0] ^ r;
          return (
            (e._prev = t.concat([e._prev.slice(1), new t([i ? r : o])])),
            o
          );
        }
        e.encrypt = function (e, i, n) {
          var o = i.length,
            s = new t(o),
            a = -1;
          while (++a < o) s[a] = r(e, i[a], n);
          return s;
        };
      }).call(this, r(2).Buffer);
    },
    6164: function (t, e, r) {
      (function (t) {
        function r(t, e, r) {
          var n,
            o,
            s,
            a = -1,
            f = 8,
            u = 0;
          while (++a < f)
            ((n = t._cipher.encryptBlock(t._prev)),
              (o = e & (1 << (7 - a)) ? 128 : 0),
              (s = n[0] ^ o),
              (u += (128 & s) >> (a % 8)),
              (t._prev = i(t._prev, r ? o : s)));
          return u;
        }
        function i(e, r) {
          var i = e.length,
            n = -1,
            o = new t(e.length);
          e = t.concat([e, new t([r])]);
          while (++n < i) o[n] = (e[n] << 1) | (e[n + 1] >> 7);
          return o;
        }
        e.encrypt = function (e, i, n) {
          var o = i.length,
            s = new t(o),
            a = -1;
          while (++a < o) s[a] = r(e, i[a], n);
          return s;
        };
      }).call(this, r(2).Buffer);
    },
    6165: function (t, e, r) {
      (function (t) {
        var i = r(3365);
        function n(t) {
          return ((t._prev = t._cipher.encryptBlock(t._prev)), t._prev);
        }
        e.encrypt = function (e, r) {
          while (e._cache.length < r.length)
            e._cache = t.concat([e._cache, n(e)]);
          var o = e._cache.slice(0, r.length);
          return ((e._cache = e._cache.slice(r.length)), i(r, o));
        };
      }).call(this, r(2).Buffer);
    },
    6166: function (t, e, r) {
      (function (e) {
        var i = r(229),
          BigInteger = r(2802),
          n = BigInteger.valueOf(3);
        function Point(t, e, r, n) {
          (i.notStrictEqual(n, void 0, "Missing Z coordinate"),
            (this.curve = t),
            (this.x = e),
            (this.y = r),
            (this.z = n),
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
              i = t.x,
              o = t.y,
              s = o
                .multiply(this.z)
                .subtract(r.multiply(t.z))
                .mod(this.curve.p),
              a = i
                .multiply(this.z)
                .subtract(e.multiply(t.z))
                .mod(this.curve.p);
            if (0 === a.signum())
              return 0 === s.signum() ? this.twice() : this.curve.infinity;
            var f = a.square(),
              u = f.multiply(a),
              h = e.multiply(f),
              c = s.square().multiply(this.z),
              l = c
                .subtract(h.shiftLeft(1))
                .multiply(t.z)
                .subtract(u)
                .multiply(a)
                .mod(this.curve.p),
              p = h
                .multiply(n)
                .multiply(s)
                .subtract(r.multiply(u))
                .subtract(c.multiply(s))
                .multiply(t.z)
                .add(s.multiply(u))
                .mod(this.curve.p),
              d = u.multiply(this.z).multiply(t.z).mod(this.curve.p);
            return new Point(this.curve, l, p, d);
          }),
          (Point.prototype.twice = function () {
            if (this.curve.isInfinity(this)) return this;
            if (0 === this.y.signum()) return this.curve.infinity;
            var t = this.x,
              e = this.y,
              r = e.multiply(this.z).mod(this.curve.p),
              i = r.multiply(e).mod(this.curve.p),
              o = this.curve.a,
              s = t.square().multiply(n);
            (0 !== o.signum() && (s = s.add(this.z.square().multiply(o))),
              (s = s.mod(this.curve.p)));
            var a = s
                .square()
                .subtract(t.shiftLeft(3).multiply(i))
                .shiftLeft(1)
                .multiply(r)
                .mod(this.curve.p),
              f = s
                .multiply(n)
                .multiply(t)
                .subtract(i.shiftLeft(1))
                .shiftLeft(2)
                .multiply(i)
                .subtract(s.pow(3))
                .mod(this.curve.p),
              u = r.pow(3).shiftLeft(3).mod(this.curve.p);
            return new Point(this.curve, a, f, u);
          }),
          (Point.prototype.multiply = function (t) {
            if (this.curve.isInfinity(this)) return this;
            if (0 === t.signum()) return this.curve.infinity;
            for (
              var e = t,
                r = e.multiply(n),
                i = this.negate(),
                o = this,
                s = r.bitLength() - 2;
              s > 0;
              --s
            ) {
              var a = r.testBit(s),
                f = e.testBit(s);
              ((o = o.twice()), a !== f && (o = o.add(a ? this : i)));
            }
            return o;
          }),
          (Point.prototype.multiplyTwo = function (t, e, r) {
            var i = Math.max(t.bitLength(), r.bitLength()) - 1,
              n = this.curve.infinity,
              o = this.add(e);
            while (i >= 0) {
              var s = t.testBit(i),
                a = r.testBit(i);
              ((n = n.twice()),
                s ? (n = a ? n.add(o) : n.add(this)) : a && (n = n.add(e)),
                --i);
            }
            return n;
          }),
          (Point.prototype.getEncoded = function (t) {
            if (
              (null == t && (t = this.compressed), this.curve.isInfinity(this))
            )
              return new e("00", "hex");
            var r,
              i = this.affineX,
              n = this.affineY,
              o = this.curve.pLength;
            return (
              t
                ? ((r = new e(1 + o)), r.writeUInt8(n.isEven() ? 2 : 3, 0))
                : ((r = new e(1 + o + o)),
                  r.writeUInt8(4, 0),
                  n.toBuffer(o).copy(r, 1 + o)),
              i.toBuffer(o).copy(r, 1),
              r
            );
          }),
          (Point.decodeFrom = function (t, e) {
            var r,
              n = e.readUInt8(0),
              o = 4 !== n,
              s = Math.floor((t.p.bitLength() + 7) / 8),
              a = BigInteger.fromBuffer(e.slice(1, 1 + s));
            if (o) {
              (i.equal(e.length, s + 1, "Invalid sequence length"),
                i(2 === n || 3 === n, "Invalid sequence tag"));
              var f = 3 === n;
              r = t.pointFromX(f, a);
            } else {
              i.equal(e.length, 1 + s + s, "Invalid sequence length");
              var u = BigInteger.fromBuffer(e.slice(1 + s));
              r = Point.fromAffine(t, a, u);
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
      }).call(this, r(2).Buffer);
    },
    6167: function (t, e, r) {
      var i = r(229),
        BigInteger = r(2802),
        Point = r(6166);
      function n(t, e, r, i, n, o, s) {
        ((this.p = t),
          (this.a = e),
          (this.b = r),
          (this.G = Point.fromAffine(this, i, n)),
          (this.n = o),
          (this.h = s),
          (this.infinity = new Point(this, null, null, BigInteger.ZERO)),
          (this.pOverFour = t.add(BigInteger.ONE).shiftRight(2)),
          (this.pLength = Math.floor((this.p.bitLength() + 7) / 8)));
      }
      ((n.prototype.pointFromX = function (t, e) {
        var r = e.pow(3).add(this.a.multiply(e)).add(this.b).mod(this.p),
          i = r.modPow(this.pOverFour, this.p),
          n = i;
        return (
          i.isEven() ^ !t && (n = this.p.subtract(n)),
          Point.fromAffine(this, e, n)
        );
      }),
        (n.prototype.isInfinity = function (t) {
          return (
            t === this.infinity || (0 === t.z.signum() && 0 !== t.y.signum())
          );
        }),
        (n.prototype.isOnCurve = function (t) {
          if (this.isInfinity(t)) return !0;
          var e = t.affineX,
            r = t.affineY,
            i = this.a,
            n = this.b,
            o = this.p;
          if (e.signum() < 0 || e.compareTo(o) >= 0) return !1;
          if (r.signum() < 0 || r.compareTo(o) >= 0) return !1;
          var s = r.square().mod(o),
            a = e.pow(3).add(i.multiply(e)).add(n).mod(o);
          return s.equals(a);
        }),
        (n.prototype.validate = function (t) {
          (i(!this.isInfinity(t), "Point is at infinity"),
            i(this.isOnCurve(t), "Point is not on the curve"));
          var e = t.multiply(this.n);
          return (
            i(this.isInfinity(e), "Point is not a scalar multiple of G"),
            !0
          );
        }),
        (t.exports = n));
    },
    6168: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(16),
          n = r(8046),
          o = r(819),
          s = r(814),
          a = r(806);
        function f(t) {
          (a.call(this, "digest"), (this._hash = t), (this.buffers = []));
        }
        function u(t) {
          (a.call(this, "digest"), (this._hash = t));
        }
        (i(f, a),
          (f.prototype._update = function (t) {
            this.buffers.push(t);
          }),
          (f.prototype._final = function () {
            var t = e.concat(this.buffers),
              r = this._hash(t);
            return ((this.buffers = null), r);
          }),
          i(u, a),
          (u.prototype._update = function (t) {
            this._hash.update(t);
          }),
          (u.prototype._final = function () {
            return this._hash.digest();
          }),
          (t.exports = function (t) {
            return (
              (t = t.toLowerCase()),
              "md5" === t
                ? new f(n)
                : new u("rmd160" === t || "ripemd160" === t ? new o() : s(t))
            );
          }));
      }).call(this, r(2).Buffer);
    },
    6169: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(4686),
          n = i(r(5027)),
          o = i(r(4687)),
          s = r(8056),
          a = r(3666),
          f = r(5028).getCurveByName("secp256k1"),
          u = r(229),
          BigInteger = r(2802),
          h = r(4297),
          c = r(4296),
          l = r(4688);
        function p(t, r, i) {
          function n(t, r) {
            var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "utf8";
            return (
              "string" === typeof t && (t = e.from(t, i)),
              u(e.isBuffer(t), "data is a required String or Buffer"),
              (t = a.sha256(t)),
              o(t, r)
            );
          }
          function o(i, n) {
            var o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "hex";
            if (
              ("string" === typeof i && (i = e.from(i, o)),
              32 !== i.length || !e.isBuffer(i))
            )
              throw new Error("dataSha256: 32 bytes required");
            var a = c(n);
            return (
              u(a, "pubkey required"),
              s.verify(f, i, { r: t, s: r }, a.Q)
            );
          }
          function l(t, r) {
            console.log('Deprecated: use verify(data, pubkey, "hex")');
            var i = e.from(t, "hex");
            return n(i, r);
          }
          function p(t) {
            var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            return (
              "string" === typeof t && (t = e.from(t, r)),
              u(e.isBuffer(t), "data is a required String or Buffer"),
              (t = a.sha256(t)),
              d(t)
            );
          }
          function d(n) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "hex";
            if (
              ("string" === typeof n && (n = e.from(n, o)),
              32 !== n.length || !e.isBuffer(n))
            )
              throw new Error("dataSha256: 32 byte String or buffer requred");
            var a = BigInteger.fromBuffer(n),
              u = i;
            ((u -= 27), (u &= 3));
            var h = s.recoverPubKey(f, a, { r: t, s: r, i: i }, u);
            return c.fromPoint(h);
          }
          function y() {
            var n;
            return (
              (n = new e(65)),
              n.writeUInt8(i, 0),
              t.toBuffer(32).copy(n, 1),
              r.toBuffer(32).copy(n, 33),
              n
            );
          }
          function g() {
            return y().toString("hex");
          }
          var v;
          function m() {
            return v || ((v = "SIG_K1_" + h.checkEncode(y(), "K1")), v);
          }
          return (
            u.equal(null != t, !0, "Missing parameter"),
            u.equal(null != r, !0, "Missing parameter"),
            u.equal(null != i, !0, "Missing parameter"),
            {
              r: t,
              s: r,
              i: i,
              toBuffer: y,
              verify: n,
              verifyHash: o,
              verifyHex: l,
              recover: p,
              recoverHash: d,
              toHex: g,
              toString: m,
              verifyBuffer: function () {
                return (
                  console.log(
                    "Deprecated: use signature.verify instead (same arguments)",
                  ),
                  n.apply(void 0, arguments)
                );
              },
              recoverPublicKey: function () {
                return (
                  console.log(
                    "Deprecated: use signature.recover instead (same arguments)",
                  ),
                  p.apply(void 0, arguments)
                );
              },
              recoverPublicKeyFromBuffer: function () {
                return (
                  console.log(
                    "Deprecated: use signature.recoverHash instead (same arguments)",
                  ),
                  d.apply(void 0, arguments)
                );
              },
            }
          );
        }
        ((t.exports = p),
          (p.sign = function (t, r) {
            var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "utf8";
            return (
              "string" === typeof t && (t = e.from(t, i)),
              u(e.isBuffer(t), "data is a required String or Buffer"),
              (t = a.sha256(t)),
              p.signHash(t, r)
            );
          }),
          (p.signHash = function (t, r) {
            var i,
              n,
              o,
              a,
              h,
              c,
              d,
              y =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "hex";
            if (
              ("string" === typeof t && (t = e.from(t, y)),
              32 !== t.length || !e.isBuffer(t))
            )
              throw new Error("dataSha256: 32 byte buffer requred");
            ((r = l(r)),
              u(r, "privateKey required"),
              (a = null),
              (d = 0),
              (n = BigInteger.fromBuffer(t)));
            while (1) {
              if (
                ((o = s.sign(f, t, r.d, d++)),
                (i = o.toDER()),
                (h = i[3]),
                (c = i[5 + h]),
                32 === h && 32 === c)
              ) {
                ((a = s.calcPubKeyRecoveryParam(f, n, o, r.toPublic().Q)),
                  (a += 4),
                  (a += 27));
                break;
              }
              d % 10 === 0 &&
                console.log(
                  "WARN: " + d + " attempts to find canonical signature",
                );
            }
            return p(o.r, o.s, a);
          }),
          (p.fromBuffer = function (t) {
            var r, i, n;
            return (
              u(e.isBuffer(t), "Buffer is required"),
              u.equal(t.length, 65, "Invalid signature length"),
              (r = t.readUInt8(0)),
              u.equal(r - 27, (r - 27) & 7, "Invalid signature parameter"),
              (i = BigInteger.fromBuffer(t.slice(1, 33))),
              (n = BigInteger.fromBuffer(t.slice(33))),
              p(i, n, r)
            );
          }),
          (p.fromHex = function (t) {
            return p.fromBuffer(e.from(t, "hex"));
          }),
          (p.fromString = function (t) {
            try {
              return p.fromStringOrThrow(t);
            } catch (e) {
              return null;
            }
          }),
          (p.fromStringOrThrow = function (t) {
            u.equal((0, o["default"])(t), "string", "signature");
            var e = t.match(/^SIG_([A-Za-z0-9]+)_([A-Za-z0-9]+)$/);
            u(
              null != e && 3 === e.length,
              "Expecting signature like: SIG_K1_base58signature..",
            );
            var r = (0, n["default"])(e, 3),
              i = r[1],
              s = r[2];
            return (
              u.equal(i, "K1", "K1 signature expected"),
              p.fromBuffer(h.checkDecode(s, i))
            );
          }),
          (p.from = function (t) {
            var r = t
              ? t.r && t.s && t.i
                ? t
                : "string" === typeof t && 130 === t.length
                  ? p.fromHex(t)
                  : "string" === typeof t && 130 !== t.length
                    ? p.fromStringOrThrow(t)
                    : e.isBuffer(t)
                      ? p.fromBuffer(t)
                      : null
              : t;
            if (!r)
              throw new TypeError("signature should be a hex string or buffer");
            return r;
          }));
      }).call(this, r(2).Buffer);
    },
    6170: function (t, e, r) {
      "use strict";
      (function (e) {
        function r(t) {
          var e = t.toString().match(/function (.*?)\(/);
          return e ? e[1] : null;
        }
        t.exports = function (t, i) {
          switch (t) {
            case "Array":
              if (Array.isArray(i)) return;
              break;
            case "Boolean":
              if ("boolean" === typeof i) return;
              break;
            case "Buffer":
              if (e.isBuffer(i)) return;
              break;
            case "Number":
              if ("number" === typeof i) return;
              break;
            case "String":
              if ("string" === typeof i) return;
              break;
            default:
              if (r(i.constructor) === r(t)) return;
          }
          throw new TypeError("Expected " + (r(t) || t) + ", got " + i);
        };
      }).call(this, r(2).Buffer);
    },
    6171: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, i = arguments.length; r < i; r++)
                    for (var n in ((e = arguments[r]), e))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }),
              i.apply(this, arguments)
            );
          },
        n =
          (this && this.__read) ||
          function (t, e) {
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
          },
        o =
          (this && this.__spread) ||
          function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(n(arguments[e]));
            return t;
          },
        s =
          (this && this.__values) ||
          function (t) {
            var e = "function" === typeof Symbol && t[Symbol.iterator],
              r = 0;
            return e
              ? e.call(t)
              : {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
                    );
                  },
                };
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = r(4689),
        f = (function () {
          function t(t) {
            (void 0 === t && (t = {}),
              (this.skippedBinaryExtension = !1),
              (this.options = t));
          }
          return t;
        })();
      e.SerializerState = f;
      var u = (function () {
        function t(t) {
          var e = void 0 === t ? {} : t,
            r = e.textEncoder,
            i = e.textDecoder,
            n = e.array;
          ((this.readPos = 0),
            (this.array = n || new Uint8Array(1024)),
            (this.length = n ? n.length : 0),
            (this.textEncoder = r || new TextEncoder()),
            (this.textDecoder = i || new TextDecoder("utf-8", { fatal: !0 })));
        }
        return (
          (t.prototype.reserve = function (t) {
            if (!(this.length + t <= this.array.length)) {
              var e = this.array.length;
              while (this.length + t > e) e = Math.ceil(1.5 * e);
              var r = new Uint8Array(e);
              (r.set(this.array), (this.array = r));
            }
          }),
          (t.prototype.haveReadData = function () {
            return this.readPos < this.length;
          }),
          (t.prototype.restartRead = function () {
            this.readPos = 0;
          }),
          (t.prototype.asUint8Array = function () {
            return new Uint8Array(
              this.array.buffer,
              this.array.byteOffset,
              this.length,
            );
          }),
          (t.prototype.pushArray = function (t) {
            (this.reserve(t.length),
              this.array.set(t, this.length),
              (this.length += t.length));
          }),
          (t.prototype.push = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            this.pushArray(t);
          }),
          (t.prototype.get = function () {
            if (this.readPos < this.length) return this.array[this.readPos++];
            throw new Error("Read past end of buffer");
          }),
          (t.prototype.pushUint8ArrayChecked = function (t, e) {
            if (t.length !== e)
              throw new Error("Binary data has incorrect size");
            this.pushArray(t);
          }),
          (t.prototype.getUint8Array = function (t) {
            if (this.readPos + t > this.length)
              throw new Error("Read past end of buffer");
            var e = new Uint8Array(
              this.array.buffer,
              this.array.byteOffset + this.readPos,
              t,
            );
            return ((this.readPos += t), e);
          }),
          (t.prototype.pushUint16 = function (t) {
            this.push((t >> 0) & 255, (t >> 8) & 255);
          }),
          (t.prototype.getUint16 = function () {
            var t = 0;
            return ((t |= this.get() << 0), (t |= this.get() << 8), t);
          }),
          (t.prototype.pushUint32 = function (t) {
            this.push(
              (t >> 0) & 255,
              (t >> 8) & 255,
              (t >> 16) & 255,
              (t >> 24) & 255,
            );
          }),
          (t.prototype.getUint32 = function () {
            var t = 0;
            return (
              (t |= this.get() << 0),
              (t |= this.get() << 8),
              (t |= this.get() << 16),
              (t |= this.get() << 24),
              t >>> 0
            );
          }),
          (t.prototype.pushNumberAsUint64 = function (t) {
            (this.pushUint32(t >>> 0),
              this.pushUint32(Math.floor(t / 4294967296) >>> 0));
          }),
          (t.prototype.getUint64AsNumber = function () {
            var t = this.getUint32(),
              e = this.getUint32();
            return 4294967296 * (e >>> 0) + (t >>> 0);
          }),
          (t.prototype.pushVaruint32 = function (t) {
            while (1) {
              if (!(t >>> 7)) {
                this.push(t);
                break;
              }
              (this.push(128 | (127 & t)), (t >>>= 7));
            }
          }),
          (t.prototype.getVaruint32 = function () {
            var t = 0,
              e = 0;
            while (1) {
              var r = this.get();
              if (((t |= (127 & r) << e), (e += 7), !(128 & r))) break;
            }
            return t >>> 0;
          }),
          (t.prototype.pushVarint32 = function (t) {
            this.pushVaruint32((t << 1) ^ (t >> 31));
          }),
          (t.prototype.getVarint32 = function () {
            var t = this.getVaruint32();
            return 1 & t ? (~t >> 1) | 2147483648 : t >>> 1;
          }),
          (t.prototype.pushFloat32 = function (t) {
            this.pushArray(new Uint8Array(new Float32Array([t]).buffer));
          }),
          (t.prototype.getFloat32 = function () {
            return new Float32Array(this.getUint8Array(4).slice().buffer)[0];
          }),
          (t.prototype.pushFloat64 = function (t) {
            this.pushArray(new Uint8Array(new Float64Array([t]).buffer));
          }),
          (t.prototype.getFloat64 = function () {
            return new Float64Array(this.getUint8Array(8).slice().buffer)[0];
          }),
          (t.prototype.pushName = function (t) {
            if ("string" !== typeof t)
              throw new Error("Expected string containing name");
            function e(t) {
              return t >= "a".charCodeAt(0) && t <= "z".charCodeAt(0)
                ? t - "a".charCodeAt(0) + 6
                : t >= "1".charCodeAt(0) && t <= "5".charCodeAt(0)
                  ? t - "1".charCodeAt(0) + 1
                  : 0;
            }
            for (var r = new Uint8Array(8), i = 63, n = 0; n < t.length; ++n) {
              var o = e(t.charCodeAt(n));
              i < 5 && (o <<= 1);
              for (var s = 4; s >= 0; --s)
                i >= 0 &&
                  ((r[Math.floor(i / 8)] |= ((o >> s) & 1) << (i % 8)), --i);
            }
            this.pushArray(r);
          }),
          (t.prototype.getName = function () {
            for (var t = this.getUint8Array(8), e = "", r = 63; r >= 0; ) {
              for (var i = 0, n = 0; n < 5; ++n)
                r >= 0 &&
                  ((i = (i << 1) | ((t[Math.floor(r / 8)] >> (r % 8)) & 1)),
                  --r);
              e +=
                i >= 6
                  ? String.fromCharCode(i + "a".charCodeAt(0) - 6)
                  : i >= 1
                    ? String.fromCharCode(i + "1".charCodeAt(0) - 1)
                    : ".";
            }
            while (e.endsWith(".")) e = e.substr(0, e.length - 1);
            return e;
          }),
          (t.prototype.pushBytes = function (t) {
            (this.pushVaruint32(t.length), this.pushArray(t));
          }),
          (t.prototype.getBytes = function () {
            return this.getUint8Array(this.getVaruint32());
          }),
          (t.prototype.pushString = function (t) {
            this.pushBytes(this.textEncoder.encode(t));
          }),
          (t.prototype.getString = function () {
            return this.textDecoder.decode(this.getBytes());
          }),
          (t.prototype.pushSymbolCode = function (t) {
            if ("string" !== typeof t)
              throw new Error("Expected string containing symbol_code");
            var e = [];
            e.push.apply(e, o(this.textEncoder.encode(t)));
            while (e.length < 8) e.push(0);
            this.pushArray(e.slice(0, 8));
          }),
          (t.prototype.getSymbolCode = function () {
            var t,
              e = this.getUint8Array(8);
            for (t = 0; t < e.length; ++t) if (!e[t]) break;
            var r = this.textDecoder.decode(
              new Uint8Array(e.buffer, e.byteOffset, t),
            );
            return r;
          }),
          (t.prototype.pushSymbol = function (t) {
            var e = t.name,
              r = t.precision,
              i = [255 & r];
            i.push.apply(i, o(this.textEncoder.encode(e)));
            while (i.length < 8) i.push(0);
            this.pushArray(i.slice(0, 8));
          }),
          (t.prototype.getSymbol = function () {
            var t,
              e = this.get(),
              r = this.getUint8Array(7);
            for (t = 0; t < r.length; ++t) if (!r[t]) break;
            var i = this.textDecoder.decode(
              new Uint8Array(r.buffer, r.byteOffset, t),
            );
            return { name: i, precision: e };
          }),
          (t.prototype.pushAsset = function (t) {
            if ("string" !== typeof t)
              throw new Error("Expected string containing asset");
            t = t.trim();
            var e = 0,
              r = "",
              i = 0;
            "-" === t[e] && ((r += "-"), ++e);
            var n = !1;
            while (
              e < t.length &&
              t.charCodeAt(e) >= "0".charCodeAt(0) &&
              t.charCodeAt(e) <= "9".charCodeAt(0)
            )
              ((n = !0), (r += t[e]), ++e);
            if (!n) throw new Error("Asset must begin with a number");
            if ("." === t[e]) {
              ++e;
              while (
                e < t.length &&
                t.charCodeAt(e) >= "0".charCodeAt(0) &&
                t.charCodeAt(e) <= "9".charCodeAt(0)
              )
                ((r += t[e]), ++i, ++e);
            }
            var o = t.substr(e).trim();
            (this.pushArray(a.signedDecimalToBinary(8, r)),
              this.pushSymbol({ name: o, precision: i }));
          }),
          (t.prototype.getAsset = function () {
            var t = this.getUint8Array(8),
              e = this.getSymbol(),
              r = e.name,
              i = e.precision,
              n = a.signedBinaryToDecimal(t, i + 1);
            return (
              i &&
                (n = n.substr(0, n.length - i) + "." + n.substr(n.length - i)),
              n + " " + r
            );
          }),
          (t.prototype.pushPublicKey = function (t) {
            var e = a.stringToPublicKey(t);
            (this.push(e.type), this.pushArray(e.data));
          }),
          (t.prototype.getPublicKey = function () {
            var t = this.get(),
              e = this.getUint8Array(a.publicKeyDataSize);
            return a.publicKeyToString({ type: t, data: e });
          }),
          (t.prototype.pushPrivateKey = function (t) {
            var e = a.stringToPrivateKey(t);
            (this.push(e.type), this.pushArray(e.data));
          }),
          (t.prototype.getPrivateKey = function () {
            var t = this.get(),
              e = this.getUint8Array(a.privateKeyDataSize);
            return a.privateKeyToString({ type: t, data: e });
          }),
          (t.prototype.pushSignature = function (t) {
            var e = a.stringToSignature(t);
            (this.push(e.type), this.pushArray(e.data));
          }),
          (t.prototype.getSignature = function () {
            var t = this.get(),
              e = this.getUint8Array(a.signatureDataSize);
            return a.signatureToString({ type: t, data: e });
          }),
          t
        );
      })();
      function h(t) {
        return t.startsWith("eosio::abi/1.");
      }
      function c(t) {
        var e = Date.parse(t);
        if (Number.isNaN(e)) throw new Error("Invalid time format");
        return e;
      }
      function l(t) {
        return Math.round(1e3 * c(t + "Z"));
      }
      function p(t) {
        var e = new Date(t / 1e3).toISOString();
        return e.substr(0, e.length - 1);
      }
      function d(t) {
        return Math.round(c(t + "Z") / 1e3);
      }
      function y(t) {
        var e = new Date(1e3 * t).toISOString();
        return e.substr(0, e.length - 1);
      }
      function g(t) {
        return Math.round((c(t + "Z") - 9466848e5) / 500);
      }
      function v(t) {
        var e = new Date(500 * t + 9466848e5).toISOString();
        return e.substr(0, e.length - 1);
      }
      function m(t) {
        if ("string" !== typeof t)
          throw new Error("Expected string containing symbol");
        var e = t.match(/^([0-9]+),([A-Z]+)$/);
        if (!e) throw new Error("Invalid symbol");
        return { name: e[2], precision: +e[1] };
      }
      function w(t) {
        var e = t.name,
          r = t.precision;
        return r + "," + e;
      }
      function b(t) {
        var e,
          r,
          i = "";
        try {
          for (var n = s(t), o = n.next(); !o.done; o = n.next()) {
            var a = o.value;
            i += ("00" + a.toString(16)).slice(-2);
          }
        } catch (f) {
          e = { error: f };
        } finally {
          try {
            o && !o.done && (r = n.return) && r.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
        return i.toUpperCase();
      }
      function _(t) {
        if ("string" !== typeof t)
          throw new Error("Expected string containing hex digits");
        if (t.length % 2) throw new Error("Odd number of hex digits");
        for (var e = t.length / 2, r = new Uint8Array(e), i = 0; i < e; ++i) {
          var n = parseInt(t.substr(2 * i, 2), 16);
          if (Number.isNaN(n)) throw new Error("Expected hex string");
          r[i] = n;
        }
        return r;
      }
      function E(t, e) {
        throw new Error("Don't know how to serialize " + this.name);
      }
      function T(t) {
        throw new Error("Don't know how to deserialize " + this.name);
      }
      function A(t, e, r, i) {
        var n, o;
        if (
          (void 0 === r && (r = new f()),
          void 0 === i && (i = !0),
          "object" !== typeof e)
        )
          throw new Error(
            "expected object containing data: " + JSON.stringify(e),
          );
        this.base && this.base.serialize(t, e, r, i);
        try {
          for (var a = s(this.fields), u = a.next(); !u.done; u = a.next()) {
            var h = u.value;
            if (h.name in e) {
              if (r.skippedBinaryExtension)
                throw new Error("unexpected " + this.name + "." + h.name);
              h.type.serialize(
                t,
                e[h.name],
                r,
                i && h === this.fields[this.fields.length - 1],
              );
            } else {
              if (!i || !h.type.extensionOf)
                throw new Error(
                  "missing " +
                    this.name +
                    "." +
                    h.name +
                    " (type=" +
                    h.type.name +
                    ")",
                );
              r.skippedBinaryExtension = !0;
            }
          }
        } catch (c) {
          n = { error: c };
        } finally {
          try {
            u && !u.done && (o = a.return) && o.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      function S(t, e, r) {
        var i, n, o;
        (void 0 === e && (e = new f()),
          void 0 === r && (r = !0),
          (o = this.base ? this.base.deserialize(t, e, r) : {}));
        try {
          for (var a = s(this.fields), u = a.next(); !u.done; u = a.next()) {
            var h = u.value;
            r && h.type.extensionOf && !t.haveReadData()
              ? (e.skippedBinaryExtension = !0)
              : (o[h.name] = h.type.deserialize(t, e, r));
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (n = a.return) && n.call(a);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function B(t, e, r, i) {
        if (!Array.isArray(e) || 2 !== e.length || "string" !== typeof e[0])
          throw new Error('expected variant: ["type", value]');
        var n = this.fields.findIndex(function (t) {
          return t.name === e[0];
        });
        if (n < 0)
          throw new Error('type "' + e[0] + '" is not valid for variant');
        (t.pushVaruint32(n), this.fields[n].type.serialize(t, e[1], r, i));
      }
      function I(t, e, r) {
        var i = t.getVaruint32();
        if (i >= this.fields.length)
          throw new Error("type index " + i + " is not valid for variant");
        var n = this.fields[i];
        return [n.name, n.type.deserialize(t, e, r)];
      }
      function x(t, e, r, i) {
        var n, o;
        t.pushVaruint32(e.length);
        try {
          for (var a = s(e), f = a.next(); !f.done; f = a.next()) {
            var u = f.value;
            this.arrayOf.serialize(t, u, r, !1);
          }
        } catch (h) {
          n = { error: h };
        } finally {
          try {
            f && !f.done && (o = a.return) && o.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      function k(t, e, r) {
        for (var i = t.getVaruint32(), n = [], o = 0; o < i; ++o)
          n.push(this.arrayOf.deserialize(t, e, !1));
        return n;
      }
      function U(t, e, r, i) {
        null === e || void 0 === e
          ? t.push(0)
          : (t.push(1), this.optionalOf.serialize(t, e, r, i));
      }
      function z(t, e, r) {
        return t.get() ? this.optionalOf.deserialize(t, e, r) : null;
      }
      function O(t, e, r, i) {
        this.extensionOf.serialize(t, e, r, i);
      }
      function D(t, e, r) {
        return this.extensionOf.deserialize(t, e, r);
      }
      function L(t) {
        return i(
          {
            name: "<missing name>",
            aliasOfName: "",
            arrayOf: null,
            optionalOf: null,
            extensionOf: null,
            baseName: "",
            base: null,
            fields: [],
            serialize: E,
            deserialize: T,
          },
          t,
        );
      }
      function N(t, e) {
        if (
          Number.isNaN(+t) ||
          Number.isNaN(+e) ||
          ("number" !== typeof t && "string" !== typeof t)
        )
          throw new Error("Expected number");
        if (+t !== +e) throw new Error("Number is out of range");
        return +t;
      }
      function R() {
        var t = new Map(
          Object.entries({
            bool: L({
              name: "bool",
              serialize: function (t, e) {
                if ("boolean" !== typeof e)
                  throw new Error("Expected true or false");
                t.push(e ? 1 : 0);
              },
              deserialize: function (t) {
                return !!t.get();
              },
            }),
            uint8: L({
              name: "uint8",
              serialize: function (t, e) {
                t.push(N(e, 255 & e));
              },
              deserialize: function (t) {
                return t.get();
              },
            }),
            int8: L({
              name: "int8",
              serialize: function (t, e) {
                t.push(N(e, (e << 24) >> 24));
              },
              deserialize: function (t) {
                return (t.get() << 24) >> 24;
              },
            }),
            uint16: L({
              name: "uint16",
              serialize: function (t, e) {
                t.pushUint16(N(e, 65535 & e));
              },
              deserialize: function (t) {
                return t.getUint16();
              },
            }),
            int16: L({
              name: "int16",
              serialize: function (t, e) {
                t.pushUint16(N(e, (e << 16) >> 16));
              },
              deserialize: function (t) {
                return (t.getUint16() << 16) >> 16;
              },
            }),
            uint32: L({
              name: "uint32",
              serialize: function (t, e) {
                t.pushUint32(N(e, e >>> 0));
              },
              deserialize: function (t) {
                return t.getUint32();
              },
            }),
            uint64: L({
              name: "uint64",
              serialize: function (t, e) {
                t.pushArray(a.decimalToBinary(8, "" + e));
              },
              deserialize: function (t) {
                return a.binaryToDecimal(t.getUint8Array(8));
              },
            }),
            int64: L({
              name: "int64",
              serialize: function (t, e) {
                t.pushArray(a.signedDecimalToBinary(8, "" + e));
              },
              deserialize: function (t) {
                return a.signedBinaryToDecimal(t.getUint8Array(8));
              },
            }),
            int32: L({
              name: "int32",
              serialize: function (t, e) {
                t.pushUint32(N(e, 0 | e));
              },
              deserialize: function (t) {
                return 0 | t.getUint32();
              },
            }),
            varuint32: L({
              name: "varuint32",
              serialize: function (t, e) {
                t.pushVaruint32(N(e, e >>> 0));
              },
              deserialize: function (t) {
                return t.getVaruint32();
              },
            }),
            varint32: L({
              name: "varint32",
              serialize: function (t, e) {
                t.pushVarint32(N(e, 0 | e));
              },
              deserialize: function (t) {
                return t.getVarint32();
              },
            }),
            uint128: L({
              name: "uint128",
              serialize: function (t, e) {
                t.pushArray(a.decimalToBinary(16, "" + e));
              },
              deserialize: function (t) {
                return a.binaryToDecimal(t.getUint8Array(16));
              },
            }),
            int128: L({
              name: "int128",
              serialize: function (t, e) {
                t.pushArray(a.signedDecimalToBinary(16, "" + e));
              },
              deserialize: function (t) {
                return a.signedBinaryToDecimal(t.getUint8Array(16));
              },
            }),
            float32: L({
              name: "float32",
              serialize: function (t, e) {
                t.pushFloat32(e);
              },
              deserialize: function (t) {
                return t.getFloat32();
              },
            }),
            float64: L({
              name: "float64",
              serialize: function (t, e) {
                t.pushFloat64(e);
              },
              deserialize: function (t) {
                return t.getFloat64();
              },
            }),
            float128: L({
              name: "float128",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(_(e), 16);
              },
              deserialize: function (t) {
                return b(t.getUint8Array(16));
              },
            }),
            bytes: L({
              name: "bytes",
              serialize: function (t, e) {
                e instanceof Uint8Array || Array.isArray(e)
                  ? t.pushBytes(e)
                  : t.pushBytes(_(e));
              },
              deserialize: function (t, e) {
                return e && e.options.bytesAsUint8Array
                  ? t.getBytes()
                  : b(t.getBytes());
              },
            }),
            string: L({
              name: "string",
              serialize: function (t, e) {
                t.pushString(e);
              },
              deserialize: function (t) {
                return t.getString();
              },
            }),
            name: L({
              name: "name",
              serialize: function (t, e) {
                t.pushName(e);
              },
              deserialize: function (t) {
                return t.getName();
              },
            }),
            time_point: L({
              name: "time_point",
              serialize: function (t, e) {
                t.pushNumberAsUint64(l(e));
              },
              deserialize: function (t) {
                return p(t.getUint64AsNumber());
              },
            }),
            time_point_sec: L({
              name: "time_point_sec",
              serialize: function (t, e) {
                t.pushUint32(d(e));
              },
              deserialize: function (t) {
                return y(t.getUint32());
              },
            }),
            block_timestamp_type: L({
              name: "block_timestamp_type",
              serialize: function (t, e) {
                t.pushUint32(g(e));
              },
              deserialize: function (t) {
                return v(t.getUint32());
              },
            }),
            symbol_code: L({
              name: "symbol_code",
              serialize: function (t, e) {
                t.pushSymbolCode(e);
              },
              deserialize: function (t) {
                return t.getSymbolCode();
              },
            }),
            symbol: L({
              name: "symbol",
              serialize: function (t, e) {
                t.pushSymbol(m(e));
              },
              deserialize: function (t) {
                return w(t.getSymbol());
              },
            }),
            asset: L({
              name: "asset",
              serialize: function (t, e) {
                t.pushAsset(e);
              },
              deserialize: function (t) {
                return t.getAsset();
              },
            }),
            checksum160: L({
              name: "checksum160",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(_(e), 20);
              },
              deserialize: function (t) {
                return b(t.getUint8Array(20));
              },
            }),
            checksum256: L({
              name: "checksum256",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(_(e), 32);
              },
              deserialize: function (t) {
                return b(t.getUint8Array(32));
              },
            }),
            checksum512: L({
              name: "checksum512",
              serialize: function (t, e) {
                t.pushUint8ArrayChecked(_(e), 64);
              },
              deserialize: function (t) {
                return b(t.getUint8Array(64));
              },
            }),
            public_key: L({
              name: "public_key",
              serialize: function (t, e) {
                t.pushPublicKey(e);
              },
              deserialize: function (t) {
                return t.getPublicKey();
              },
            }),
            private_key: L({
              name: "private_key",
              serialize: function (t, e) {
                t.pushPrivateKey(e);
              },
              deserialize: function (t) {
                return t.getPrivateKey();
              },
            }),
            signature: L({
              name: "signature",
              serialize: function (t, e) {
                t.pushSignature(e);
              },
              deserialize: function (t) {
                return t.getSignature();
              },
            }),
          }),
        );
        return (
          t.set(
            "extended_asset",
            L({
              name: "extended_asset",
              baseName: "",
              fields: [
                { name: "quantity", typeName: "asset", type: t.get("asset") },
                { name: "contract", typeName: "name", type: t.get("name") },
              ],
              serialize: A,
              deserialize: S,
            }),
          ),
          t
        );
      }
      function C(t, e) {
        var r = t.get(e);
        if (r && r.aliasOfName) return C(t, r.aliasOfName);
        if (r) return r;
        if (e.endsWith("[]"))
          return L({
            name: e,
            arrayOf: C(t, e.substr(0, e.length - 2)),
            serialize: x,
            deserialize: k,
          });
        if (e.endsWith("?"))
          return L({
            name: e,
            optionalOf: C(t, e.substr(0, e.length - 1)),
            serialize: U,
            deserialize: z,
          });
        if (e.endsWith("$"))
          return L({
            name: e,
            extensionOf: C(t, e.substr(0, e.length - 1)),
            serialize: O,
            deserialize: D,
          });
        throw new Error("Unknown type: " + e);
      }
      function P(t, e) {
        var r,
          i,
          o,
          a,
          f,
          u,
          h,
          c,
          l,
          p,
          d = new Map(t);
        if (e.types)
          try {
            for (var y = s(e.types), g = y.next(); !g.done; g = y.next()) {
              var v = g.value,
                m = v.new_type_name,
                w = v.type;
              d.set(m, L({ name: m, aliasOfName: w }));
            }
          } catch (V) {
            r = { error: V };
          } finally {
            try {
              g && !g.done && (i = y.return) && i.call(y);
            } finally {
              if (r) throw r.error;
            }
          }
        if (e.structs)
          try {
            for (var b = s(e.structs), _ = b.next(); !_.done; _ = b.next()) {
              var E = _.value,
                T = E.name,
                x = E.base,
                k = E.fields;
              d.set(
                T,
                L({
                  name: T,
                  baseName: x,
                  fields: k.map(function (t) {
                    var e = t.name,
                      r = t.type;
                    return { name: e, typeName: r, type: null };
                  }),
                  serialize: A,
                  deserialize: S,
                }),
              );
            }
          } catch (j) {
            o = { error: j };
          } finally {
            try {
              _ && !_.done && (a = b.return) && a.call(b);
            } finally {
              if (o) throw o.error;
            }
          }
        if (e.variants)
          try {
            for (var U = s(e.variants), z = U.next(); !z.done; z = U.next()) {
              var O = z.value,
                D = O.name,
                N = O.types;
              d.set(
                D,
                L({
                  name: D,
                  fields: N.map(function (t) {
                    return { name: t, typeName: t, type: null };
                  }),
                  serialize: B,
                  deserialize: I,
                }),
              );
            }
          } catch (H) {
            f = { error: H };
          } finally {
            try {
              z && !z.done && (u = U.return) && u.call(U);
            } finally {
              if (f) throw f.error;
            }
          }
        try {
          for (var R = s(d), P = R.next(); !P.done; P = R.next()) {
            var M = n(P.value, 2);
            (M[0], (w = M[1]));
            w.baseName && (w.base = C(d, w.baseName));
            try {
              for (var F = s(w.fields), q = F.next(); !q.done; q = F.next()) {
                var K = q.value;
                K.type = C(d, K.typeName);
              }
            } catch (Z) {
              l = { error: Z };
            } finally {
              try {
                q && !q.done && (p = F.return) && p.call(F);
              } finally {
                if (l) throw l.error;
              }
            }
          }
        } catch (X) {
          h = { error: X };
        } finally {
          try {
            P && !P.done && (c = R.return) && c.call(R);
          } finally {
            if (h) throw h.error;
          }
        }
        return d;
      }
      function M(t, e) {
        return {
          expiration: y(d(t.timestamp) + e),
          ref_block_num: 65535 & t.block_num,
          ref_block_prefix: t.ref_block_prefix,
        };
      }
      function F(t, e, r, i, n, o) {
        var s = t.actions.get(r);
        if (!s) throw new Error("Unknown action " + r + " in contract " + e);
        var a = new u({ textEncoder: n, textDecoder: o });
        return (s.serialize(a, i), b(a.asUint8Array()));
      }
      function q(t, e, r, i, n, o, s) {
        return {
          account: e,
          name: r,
          authorization: i,
          data: F(t, e, r, n, o, s),
        };
      }
      function K(t, e, r, i, n, o) {
        var s = t.actions.get(r);
        if (("string" === typeof i && (i = _(i)), !s))
          throw new Error("Unknown action " + r + " in contract " + e);
        var a = new u({ textDecoder: o, textEncoder: n });
        return (a.pushArray(i), s.deserialize(a));
      }
      function V(t, e, r, i, n, o, s) {
        return {
          account: e,
          name: r,
          authorization: i,
          data: K(t, e, r, n, o, s),
        };
      }
      ((e.SerialBuffer = u),
        (e.supportedAbiVersion = h),
        (e.dateToTimePoint = l),
        (e.timePointToDate = p),
        (e.dateToTimePointSec = d),
        (e.timePointSecToDate = y),
        (e.dateToBlockTimestamp = g),
        (e.blockTimestampToDate = v),
        (e.stringToSymbol = m),
        (e.symbolToString = w),
        (e.arrayToHex = b),
        (e.hexToUint8Array = _),
        (e.createInitialTypes = R),
        (e.getType = C),
        (e.getTypesFromAbi = P),
        (e.transactionHeader = M),
        (e.serializeActionData = F),
        (e.serializeAction = q),
        (e.deserializeActionData = K),
        (e.deserializeAction = V));
    },
    6172: function (t, e, r) {
      "use strict";
      var i =
        (this && this.__extends) ||
        (function () {
          var t = function (e, r) {
            return (
              (t =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, e) {
                    t.__proto__ = e;
                  }) ||
                function (t, e) {
                  for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                }),
              t(e, r)
            );
          };
          return function (e, r) {
            function i() {
              this.constructor = e;
            }
            (t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((i.prototype = r.prototype), new i())));
          };
        })();
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = (function (t) {
        function e(r) {
          var i = this;
          return (
            (i =
              r.error &&
              r.error.details &&
              r.error.details.length &&
              r.error.details[0].message
                ? t.call(this, r.error.details[0].message) || this
                : r.processed &&
                    r.processed.except &&
                    r.processed.except.message
                  ? t.call(this, r.processed.except.message) || this
                  : t.call(this, r.message) || this),
            Object.setPrototypeOf(i, e.prototype),
            (i.json = r),
            i
          );
        }
        return (i(e, t), e);
      })(Error);
      e.RpcError = n;
    },
    8034: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = r(8035),
        o = r(8060),
        s = i(r(129)),
        a = r(19),
        f = r(27);
      const u = 10;
      class EOSNodeExplorer extends s.default {
        getAllowedTickers() {
          return ["EOS"];
        }
        async getKeyAccounts(t) {
          const e = await this.request(
            this.getApiPrefix() + "history/get_key_accounts",
            "post",
            { public_key: t },
            "KeyAccountInfo",
          );
          if (!e.account_names)
            throw new a.WalletError({
              type: f.LOAD_WALLET_ERROR,
              error: new Error(
                `${f.PUBLIC_KEY_TO_ADDRESS_ERROR}${this.config.baseUrl}`,
              ),
              instance: this,
            });
          return e.account_names;
        }
        async checkAccountName(t) {
          const e = await this.request(
            this.getApiPrefix() + "chain/get_account",
            "post",
            { account_name: t },
            "checkAccountName",
          ).catch(() => {
            console.warn(t + " is already in use");
          });
          return !(e && e.permissions && e.permissions.length > 0);
        }
        getInfoUrl(t) {
          return this.getApiPrefix() + "chain/get_currency_balance";
        }
        getApiPrefix() {
          return "/v1/";
        }
        getInfoMethod() {
          return "post";
        }
        getInfoParams(t) {
          return { code: this.wallet.assetName, account: t };
        }
        modifyInfoResponse(t) {
          return { balance: t, transactions: [] };
        }
        getTransactionsUrl(t) {
          return this.getApiPrefix() + "history/get_actions";
        }
        getTransactionsMethod() {
          return "post";
        }
        getTransactionsParams(t, e, r) {
          return (
            void 0 === e && (e = 0),
            void 0 === r && (r = this.defaultTxLimit),
            { pos: -1, offset: -r, account_name: t }
          );
        }
        modifyTransactionsResponse(t, e) {
          return super.modifyTransactionsResponse(
            t.actions
              .filter(
                (t) =>
                  this.wallet.assetName === t.action_trace.act.account &&
                  "transfer" === t.action_trace.act.name,
              )
              .reduce(
                (t, e) => (
                  t.some(
                    (t) => t.action_trace.trx_id === e.action_trace.trx_id,
                  ) || t.push(e),
                  t
                ),
                [],
              )
              .reverse(),
            e,
          );
        }
        getTxHash(t) {
          return t.action_trace.trx_id;
        }
        getTxDirection(t, e) {
          return e.action_trace.act.data.to === t;
        }
        getTxOtherSideAddress(t, e) {
          return e.action_trace.act.data.to === t
            ? e.action_trace.act.data.from
            : e.action_trace.act.data.to;
        }
        getTxValue(t, e) {
          const r = e.action_trace.act.data.quantity.split(" ");
          return Number(r[0]);
        }
        getTxDateTime(t) {
          return new Date(t.action_trace.block_time);
        }
        getTxConfirmations(t) {
          return u;
        }
        getTxMemo(t) {
          return t.action_trace.act.data.memo;
        }
        async sendTransaction(t, e) {
          const r = JSON.parse(t),
            i = new o.Api({
              rpc: new o.JsonRpc(this.config.baseUrl.replace(/\/$/, ""), {
                fetch: fetch,
              }),
              signatureProvider: new n.JsSignatureProvider([
                JSON.parse(e).active.privateKey,
              ]),
              textDecoder: new TextDecoder(),
              textEncoder: new TextEncoder(),
            });
          try {
            const t = await i.transact(r, {
              blocksBehind: 10,
              expireSeconds: 3600,
            });
            return { txid: t.transaction_id };
          } catch (s) {
            if (s.message && s.message.indexOf("CPU") + 1)
              return { error: "CPU" };
            if (s.message && s.message.indexOf("RAM") + 1)
              return { error: "RAM" };
            throw new a.ExplorerRequestError({
              type: f.SEND_TRANSACTION_TYPE,
              error: s,
              instance: this,
            });
          }
        }
        async getAccount(t) {
          return this.request(
            this.getApiPrefix() + "chain/get_account",
            "post",
            { account_name: t },
          );
        }
        getTxFee() {
          return 0;
        }
      }
      e.default = EOSNodeExplorer;
    },
    8035: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
            (this && this.__awaiter) ||
            function (t, e, r, i) {
              return new (r || (r = Promise))(function (n, o) {
                function s(t) {
                  try {
                    f(i.next(t));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(t) {
                  try {
                    f(i["throw"](t));
                  } catch (e) {
                    o(e);
                  }
                }
                function f(t) {
                  t.done
                    ? n(t.value)
                    : new r(function (e) {
                        e(t.value);
                      }).then(s, a);
                }
                f((i = i.apply(t, e || [])).next());
              });
            },
          n =
            (this && this.__generator) ||
            function (t, e) {
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
                  return f([t, e]);
                };
              }
              function f(o) {
                if (r) throw new TypeError("Generator is already executing.");
                while (s)
                  try {
                    if (
                      ((r = 1),
                      i &&
                        (n =
                          2 & o[0]
                            ? i["return"]
                            : o[0]
                              ? i["throw"] ||
                                ((n = i["return"]) && n.call(i), 0)
                              : i.next) &&
                        !(n = n.call(i, o[1])).done)
                    )
                      return n;
                    switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return (s.label++, { value: o[1], done: !1 });
                      case 5:
                        (s.label++, (i = o[1]), (o = [0]));
                        continue;
                      case 7:
                        ((o = s.ops.pop()), s.trys.pop());
                        continue;
                      default:
                        if (
                          ((n = s.trys),
                          !(n = n.length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0]))
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!n || (o[1] > n[0] && o[1] < n[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < n[1]) {
                          ((s.label = n[1]), (n = o));
                          break;
                        }
                        if (n && s.label < n[2]) {
                          ((s.label = n[2]), s.ops.push(o));
                          break;
                        }
                        (n[2] && s.ops.pop(), s.trys.pop());
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (a) {
                    ((o = [6, a]), (i = 0));
                  } finally {
                    r = n = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            },
          o =
            (this && this.__values) ||
            function (t) {
              var e = "function" === typeof Symbol && t[Symbol.iterator],
                r = 0;
              return e
                ? e.call(t)
                : {
                    next: function () {
                      return (
                        t && r >= t.length && (t = void 0),
                        { value: t && t[r++], done: !t }
                      );
                    },
                  };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(6155),
          a = r(4689),
          f = (function () {
            function e(t) {
              var e, r;
              ((this.keys = new Map()), (this.availableKeys = []));
              try {
                for (var i = o(t), n = i.next(); !n.done; n = i.next()) {
                  var f = n.value,
                    u = a.convertLegacyPublicKey(
                      s.PrivateKey.fromString(f).toPublic().toString(),
                    );
                  (this.keys.set(u, f), this.availableKeys.push(u));
                }
              } catch (h) {
                e = { error: h };
              } finally {
                try {
                  n && !n.done && (r = i.return) && r.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
            }
            return (
              (e.prototype.getAvailableKeys = function () {
                return i(this, void 0, void 0, function () {
                  return n(this, function (t) {
                    return [2, this.availableKeys];
                  });
                });
              }),
              (e.prototype.sign = function (e) {
                var r = e.chainId,
                  o = e.requiredKeys,
                  f = e.serializedTransaction;
                return i(this, void 0, void 0, function () {
                  var e,
                    i,
                    u = this;
                  return n(this, function (n) {
                    return (
                      (e = t.concat([
                        new t(r, "hex"),
                        new t(f),
                        new t(new Uint8Array(32)),
                      ])),
                      (i = o.map(function (t) {
                        return s.Signature.sign(
                          e,
                          u.keys.get(a.convertLegacyPublicKey(t)),
                        ).toString();
                      })),
                      [2, { signatures: i, serializedTransaction: f }]
                    );
                  });
                });
              }),
              e
            );
          })();
        e.JsSignatureProvider = f;
      }).call(this, r(2).Buffer);
    },
    8036: function (t, e, r) {
      "use strict";
      r(6156);
      var i = r(4688),
        n = r(4296),
        o = r(6169),
        s = (r(4297), r(3666)),
        a = {
          initialize: i.initialize,
          unsafeRandomKey: function () {
            return i.unsafeRandomKey().then(function (t) {
              return t.toString();
            });
          },
          randomKey: function (t) {
            return i.randomKey(t).then(function (t) {
              return t.toString();
            });
          },
          seedPrivate: function (t) {
            return i.fromSeed(t).toString();
          },
          privateToPublic: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "EOS";
            return i(t).toPublic().toString(e);
          },
          isValidPublic: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "EOS";
            return n.isValid(t, e);
          },
          isValidPrivate: function (t) {
            return i.isValid(t);
          },
          sign: function (t, e) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "utf8";
            if (!0 === r)
              throw new TypeError("API changed, use signHash(..) instead");
            return (
              !1 === r &&
                console.log("Warning: ecc.sign hashData parameter was removed"),
              o.sign(t, e, r).toString()
            );
          },
          signHash: function (t, e) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "hex";
            return o.signHash(t, e, r).toString();
          },
          verify: function (t, e, r) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "utf8";
            if (!0 === i)
              throw new TypeError("API changed, use verifyHash(..) instead");
            return (
              !1 === i &&
                console.log(
                  "Warning: ecc.verify hashData parameter was removed",
                ),
              (t = o.from(t)),
              t.verify(e, r, i)
            );
          },
          verifyHash: function (t, e, r) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "hex";
            return ((t = o.from(t)), t.verifyHash(e, r, i));
          },
          recover: function (t, e) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "utf8";
            if (!0 === r)
              throw new TypeError(
                "API changed, use recoverHash(signature, data) instead",
              );
            return (
              !1 === r &&
                console.log(
                  "Warning: ecc.recover hashData parameter was removed",
                ),
              (t = o.from(t)),
              t.recover(e, r).toString()
            );
          },
          recoverHash: function (t, e) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "hex";
            return ((t = o.from(t)), t.recoverHash(e, r).toString());
          },
          sha256: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "hex";
            return s.sha256(t, e);
          },
        };
      t.exports = a;
    },
    8037: function (t, e, r) {
      var i = r(8038);
      ((e.createCipher = e.Cipher = i.createCipher),
        (e.createCipheriv = e.Cipheriv = i.createCipheriv));
      var n = r(8040);
      ((e.createDecipher = e.Decipher = n.createDecipher),
        (e.createDecipheriv = e.Decipheriv = n.createDecipheriv));
      var o = r(5026);
      function s() {
        return Object.keys(o);
      }
      e.listCiphers = e.getCiphers = s;
    },
    8038: function (t, e, r) {
      (function (t) {
        var i = r(4684),
          n = r(806),
          o = r(16),
          s = r(5026),
          a = r(3867),
          f = r(6158),
          u = r(6159);
        function h(e, r, o) {
          if (!(this instanceof h)) return new h(e, r, o);
          (n.call(this),
            (this._cache = new c()),
            (this._cipher = new i.AES(r)),
            (this._prev = new t(o.length)),
            o.copy(this._prev),
            (this._mode = e),
            (this._autopadding = !0));
        }
        function c() {
          if (!(this instanceof c)) return new c();
          this.cache = new t("");
        }
        (o(h, n),
          (h.prototype._update = function (e) {
            var r, i;
            this._cache.add(e);
            var n = [];
            while ((r = this._cache.get()))
              ((i = this._mode.encrypt(this, r)), n.push(i));
            return t.concat(n);
          }),
          (h.prototype._final = function () {
            var t = this._cache.flush();
            if (this._autopadding)
              return (
                (t = this._mode.encrypt(this, t)),
                this._cipher.scrub(),
                t
              );
            if ("10101010101010101010101010101010" !== t.toString("hex"))
              throw (
                this._cipher.scrub(),
                new Error("data not multiple of block length")
              );
          }),
          (h.prototype.setAutoPadding = function (t) {
            return ((this._autopadding = !!t), this);
          }),
          (c.prototype.add = function (e) {
            this.cache = t.concat([this.cache, e]);
          }),
          (c.prototype.get = function () {
            if (this.cache.length > 15) {
              var t = this.cache.slice(0, 16);
              return ((this.cache = this.cache.slice(16)), t);
            }
            return null;
          }),
          (c.prototype.flush = function () {
            var e = 16 - this.cache.length,
              r = new t(e),
              i = -1;
            while (++i < e) r.writeUInt8(e, i);
            var n = t.concat([this.cache, r]);
            return n;
          }));
        var l = {
          ECB: r(6160),
          CBC: r(6161),
          CFB: r(6162),
          CFB8: r(6163),
          CFB1: r(6164),
          OFB: r(6165),
          CTR: r(4685),
          GCM: r(4685),
        };
        function p(e, r, i) {
          var n = s[e.toLowerCase()];
          if (!n) throw new TypeError("invalid suite type");
          if (
            ("string" === typeof i && (i = new t(i)),
            "string" === typeof r && (r = new t(r)),
            r.length !== n.key / 8)
          )
            throw new TypeError("invalid key length " + r.length);
          if (i.length !== n.iv)
            throw new TypeError("invalid iv length " + i.length);
          return "stream" === n.type
            ? new f(l[n.mode], r, i)
            : "auth" === n.type
              ? new u(l[n.mode], r, i)
              : new h(l[n.mode], r, i);
        }
        function d(t, e) {
          var r = s[t.toLowerCase()];
          if (!r) throw new TypeError("invalid suite type");
          var i = a(e, !1, r.key, r.iv);
          return p(t, i.key, i.iv);
        }
        ((e.createCipheriv = p), (e.createCipher = d));
      }).call(this, r(2).Buffer);
    },
    8039: function (t, e, r) {
      (function (e) {
        var r = new e(16);
        function i(t) {
          ((this.h = t),
            (this.state = new e(16)),
            this.state.fill(0),
            (this.cache = new e("")));
        }
        function n(t) {
          return [
            t.readUInt32BE(0),
            t.readUInt32BE(4),
            t.readUInt32BE(8),
            t.readUInt32BE(12),
          ];
        }
        function o(t) {
          t = t.map(a);
          var r = new e(16);
          return (
            r.writeUInt32BE(t[0], 0),
            r.writeUInt32BE(t[1], 4),
            r.writeUInt32BE(t[2], 8),
            r.writeUInt32BE(t[3], 12),
            r
          );
        }
        (r.fill(0),
          (t.exports = i),
          (i.prototype.ghash = function (t) {
            var e = -1;
            while (++e < t.length) this.state[e] ^= t[e];
            this._multiply();
          }),
          (i.prototype._multiply = function () {
            var t,
              e,
              r,
              i = n(this.h),
              s = [0, 0, 0, 0],
              a = -1;
            while (++a < 128) {
              for (
                e = 0 !== (this.state[~~(a / 8)] & (1 << (7 - (a % 8)))),
                  e && (s = f(s, i)),
                  r = 0 !== (1 & i[3]),
                  t = 3;
                t > 0;
                t--
              )
                i[t] = (i[t] >>> 1) | ((1 & i[t - 1]) << 31);
              ((i[0] = i[0] >>> 1), r && (i[0] = i[0] ^ (225 << 24)));
            }
            this.state = o(s);
          }),
          (i.prototype.update = function (t) {
            var r;
            this.cache = e.concat([this.cache, t]);
            while (this.cache.length >= 16)
              ((r = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                this.ghash(r));
          }),
          (i.prototype.final = function (t, i) {
            return (
              this.cache.length && this.ghash(e.concat([this.cache, r], 16)),
              this.ghash(o([0, t, 0, i])),
              this.state
            );
          }));
        var s = Math.pow(2, 32);
        function a(t) {
          var e, r;
          return (
            (e =
              t > s || t < 0 ? ((r = Math.abs(t) % s), t < 0 ? s - r : r) : t),
            e
          );
        }
        function f(t, e) {
          return [t[0] ^ e[0], t[1] ^ e[1], t[2] ^ e[2], t[3] ^ e[3]];
        }
      }).call(this, r(2).Buffer);
    },
    8040: function (t, e, r) {
      (function (t) {
        var i = r(4684),
          n = r(806),
          o = r(16),
          s = r(5026),
          a = r(6158),
          f = r(6159),
          u = r(3867);
        function h(e, r, o) {
          if (!(this instanceof h)) return new h(e, r, o);
          (n.call(this),
            (this._cache = new c()),
            (this._last = void 0),
            (this._cipher = new i.AES(r)),
            (this._prev = new t(o.length)),
            o.copy(this._prev),
            (this._mode = e),
            (this._autopadding = !0));
        }
        function c() {
          if (!(this instanceof c)) return new c();
          this.cache = new t("");
        }
        function l(t) {
          var e = t[15],
            r = -1;
          while (++r < e)
            if (t[r + (16 - e)] !== e)
              throw new Error("unable to decrypt data");
          if (16 !== e) return t.slice(0, 16 - e);
        }
        (o(h, n),
          (h.prototype._update = function (e) {
            var r, i;
            this._cache.add(e);
            var n = [];
            while ((r = this._cache.get(this._autopadding)))
              ((i = this._mode.decrypt(this, r)), n.push(i));
            return t.concat(n);
          }),
          (h.prototype._final = function () {
            var t = this._cache.flush();
            if (this._autopadding) return l(this._mode.decrypt(this, t));
            if (t) throw new Error("data not multiple of block length");
          }),
          (h.prototype.setAutoPadding = function (t) {
            return ((this._autopadding = !!t), this);
          }),
          (c.prototype.add = function (e) {
            this.cache = t.concat([this.cache, e]);
          }),
          (c.prototype.get = function (t) {
            var e;
            if (t) {
              if (this.cache.length > 16)
                return (
                  (e = this.cache.slice(0, 16)),
                  (this.cache = this.cache.slice(16)),
                  e
                );
            } else if (this.cache.length >= 16)
              return (
                (e = this.cache.slice(0, 16)),
                (this.cache = this.cache.slice(16)),
                e
              );
            return null;
          }),
          (c.prototype.flush = function () {
            if (this.cache.length) return this.cache;
          }));
        var p = {
          ECB: r(6160),
          CBC: r(6161),
          CFB: r(6162),
          CFB8: r(6163),
          CFB1: r(6164),
          OFB: r(6165),
          CTR: r(4685),
          GCM: r(4685),
        };
        function d(e, r, i) {
          var n = s[e.toLowerCase()];
          if (!n) throw new TypeError("invalid suite type");
          if (
            ("string" === typeof i && (i = new t(i)),
            "string" === typeof r && (r = new t(r)),
            r.length !== n.key / 8)
          )
            throw new TypeError("invalid key length " + r.length);
          if (i.length !== n.iv)
            throw new TypeError("invalid iv length " + i.length);
          return "stream" === n.type
            ? new a(p[n.mode], r, i, !0)
            : "auth" === n.type
              ? new f(p[n.mode], r, i, !0)
              : new h(p[n.mode], r, i);
        }
        function y(t, e) {
          var r = s[t.toLowerCase()];
          if (!r) throw new TypeError("invalid suite type");
          var i = u(e, !1, r.key, r.iv);
          return d(t, i.key, i.iv);
        }
        ((e.createDecipher = y), (e.createDecipheriv = d));
      }).call(this, r(2).Buffer);
    },
    8041: function (t, e) {
      function r(t) {
        if (Array.isArray(t)) return t;
      }
      t.exports = r;
    },
    8042: function (t, e) {
      function r(t, e) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        ) {
          var r = [],
            i = !0,
            n = !1,
            o = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(i = (s = a.next()).done);
              i = !0
            )
              if ((r.push(s.value), e && r.length === e)) break;
          } catch (f) {
            ((n = !0), (o = f));
          } finally {
            try {
              i || null == a["return"] || a["return"]();
            } finally {
              if (n) throw o;
            }
          }
          return r;
        }
      }
      t.exports = r;
    },
    8043: function (t, e) {
      function r() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      }
      t.exports = r;
    },
    8044: function (t, e, r) {
      var BigInteger = r(2802),
        i = r(8045),
        n = r(6167);
      function o(t) {
        var e = i[t];
        if (!e) return null;
        var r = new BigInteger(e.p, 16),
          o = new BigInteger(e.a, 16),
          s = new BigInteger(e.b, 16),
          a = new BigInteger(e.n, 16),
          f = new BigInteger(e.h, 16),
          u = new BigInteger(e.Gx, 16),
          h = new BigInteger(e.Gy, 16);
        return new n(r, o, s, u, h, a, f);
      }
      t.exports = o;
    },
    8045: function (t) {
      t.exports = JSON.parse(
        '{"secp128r1":{"p":"fffffffdffffffffffffffffffffffff","a":"fffffffdfffffffffffffffffffffffc","b":"e87579c11079f43dd824993c2cee5ed3","n":"fffffffe0000000075a30d1b9038a115","h":"01","Gx":"161ff7528b899b2d0c28607ca52c5b86","Gy":"cf5ac8395bafeb13c02da292dded7a83"},"secp160k1":{"p":"fffffffffffffffffffffffffffffffeffffac73","a":"00","b":"07","n":"0100000000000000000001b8fa16dfab9aca16b6b3","h":"01","Gx":"3b4c382ce37aa192a4019e763036f4f5dd4d7ebb","Gy":"938cf935318fdced6bc28286531733c3f03c4fee"},"secp160r1":{"p":"ffffffffffffffffffffffffffffffff7fffffff","a":"ffffffffffffffffffffffffffffffff7ffffffc","b":"1c97befc54bd7a8b65acf89f81d4d4adc565fa45","n":"0100000000000000000001f4c8f927aed3ca752257","h":"01","Gx":"4a96b5688ef573284664698968c38bb913cbfc82","Gy":"23a628553168947d59dcc912042351377ac5fb32"},"secp192k1":{"p":"fffffffffffffffffffffffffffffffffffffffeffffee37","a":"00","b":"03","n":"fffffffffffffffffffffffe26f2fc170f69466a74defd8d","h":"01","Gx":"db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d","Gy":"9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"},"secp192r1":{"p":"fffffffffffffffffffffffffffffffeffffffffffffffff","a":"fffffffffffffffffffffffffffffffefffffffffffffffc","b":"64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1","n":"ffffffffffffffffffffffff99def836146bc9b1b4d22831","h":"01","Gx":"188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012","Gy":"07192b95ffc8da78631011ed6b24cdd573f977a11e794811"},"secp256k1":{"p":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f","a":"00","b":"07","n":"fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141","h":"01","Gx":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","Gy":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"},"secp256r1":{"p":"ffffffff00000001000000000000000000000000ffffffffffffffffffffffff","a":"ffffffff00000001000000000000000000000000fffffffffffffffffffffffc","b":"5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b","n":"ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551","h":"01","Gx":"6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296","Gy":"4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"}}',
      );
    },
    8046: function (t, e, r) {
      "use strict";
      var i = r(8047);
      function n(t, e) {
        ((t[e >> 5] |= 128 << (e % 32)), (t[14 + (((e + 64) >>> 9) << 4)] = e));
        for (
          var r = 1732584193,
            i = -271733879,
            n = -1732584194,
            o = 271733878,
            c = 0;
          c < t.length;
          c += 16
        ) {
          var l = r,
            p = i,
            d = n,
            y = o;
          ((r = s(r, i, n, o, t[c + 0], 7, -680876936)),
            (o = s(o, r, i, n, t[c + 1], 12, -389564586)),
            (n = s(n, o, r, i, t[c + 2], 17, 606105819)),
            (i = s(i, n, o, r, t[c + 3], 22, -1044525330)),
            (r = s(r, i, n, o, t[c + 4], 7, -176418897)),
            (o = s(o, r, i, n, t[c + 5], 12, 1200080426)),
            (n = s(n, o, r, i, t[c + 6], 17, -1473231341)),
            (i = s(i, n, o, r, t[c + 7], 22, -45705983)),
            (r = s(r, i, n, o, t[c + 8], 7, 1770035416)),
            (o = s(o, r, i, n, t[c + 9], 12, -1958414417)),
            (n = s(n, o, r, i, t[c + 10], 17, -42063)),
            (i = s(i, n, o, r, t[c + 11], 22, -1990404162)),
            (r = s(r, i, n, o, t[c + 12], 7, 1804603682)),
            (o = s(o, r, i, n, t[c + 13], 12, -40341101)),
            (n = s(n, o, r, i, t[c + 14], 17, -1502002290)),
            (i = s(i, n, o, r, t[c + 15], 22, 1236535329)),
            (r = a(r, i, n, o, t[c + 1], 5, -165796510)),
            (o = a(o, r, i, n, t[c + 6], 9, -1069501632)),
            (n = a(n, o, r, i, t[c + 11], 14, 643717713)),
            (i = a(i, n, o, r, t[c + 0], 20, -373897302)),
            (r = a(r, i, n, o, t[c + 5], 5, -701558691)),
            (o = a(o, r, i, n, t[c + 10], 9, 38016083)),
            (n = a(n, o, r, i, t[c + 15], 14, -660478335)),
            (i = a(i, n, o, r, t[c + 4], 20, -405537848)),
            (r = a(r, i, n, o, t[c + 9], 5, 568446438)),
            (o = a(o, r, i, n, t[c + 14], 9, -1019803690)),
            (n = a(n, o, r, i, t[c + 3], 14, -187363961)),
            (i = a(i, n, o, r, t[c + 8], 20, 1163531501)),
            (r = a(r, i, n, o, t[c + 13], 5, -1444681467)),
            (o = a(o, r, i, n, t[c + 2], 9, -51403784)),
            (n = a(n, o, r, i, t[c + 7], 14, 1735328473)),
            (i = a(i, n, o, r, t[c + 12], 20, -1926607734)),
            (r = f(r, i, n, o, t[c + 5], 4, -378558)),
            (o = f(o, r, i, n, t[c + 8], 11, -2022574463)),
            (n = f(n, o, r, i, t[c + 11], 16, 1839030562)),
            (i = f(i, n, o, r, t[c + 14], 23, -35309556)),
            (r = f(r, i, n, o, t[c + 1], 4, -1530992060)),
            (o = f(o, r, i, n, t[c + 4], 11, 1272893353)),
            (n = f(n, o, r, i, t[c + 7], 16, -155497632)),
            (i = f(i, n, o, r, t[c + 10], 23, -1094730640)),
            (r = f(r, i, n, o, t[c + 13], 4, 681279174)),
            (o = f(o, r, i, n, t[c + 0], 11, -358537222)),
            (n = f(n, o, r, i, t[c + 3], 16, -722521979)),
            (i = f(i, n, o, r, t[c + 6], 23, 76029189)),
            (r = f(r, i, n, o, t[c + 9], 4, -640364487)),
            (o = f(o, r, i, n, t[c + 12], 11, -421815835)),
            (n = f(n, o, r, i, t[c + 15], 16, 530742520)),
            (i = f(i, n, o, r, t[c + 2], 23, -995338651)),
            (r = u(r, i, n, o, t[c + 0], 6, -198630844)),
            (o = u(o, r, i, n, t[c + 7], 10, 1126891415)),
            (n = u(n, o, r, i, t[c + 14], 15, -1416354905)),
            (i = u(i, n, o, r, t[c + 5], 21, -57434055)),
            (r = u(r, i, n, o, t[c + 12], 6, 1700485571)),
            (o = u(o, r, i, n, t[c + 3], 10, -1894986606)),
            (n = u(n, o, r, i, t[c + 10], 15, -1051523)),
            (i = u(i, n, o, r, t[c + 1], 21, -2054922799)),
            (r = u(r, i, n, o, t[c + 8], 6, 1873313359)),
            (o = u(o, r, i, n, t[c + 15], 10, -30611744)),
            (n = u(n, o, r, i, t[c + 6], 15, -1560198380)),
            (i = u(i, n, o, r, t[c + 13], 21, 1309151649)),
            (r = u(r, i, n, o, t[c + 4], 6, -145523070)),
            (o = u(o, r, i, n, t[c + 11], 10, -1120210379)),
            (n = u(n, o, r, i, t[c + 2], 15, 718787259)),
            (i = u(i, n, o, r, t[c + 9], 21, -343485551)),
            (r = h(r, l)),
            (i = h(i, p)),
            (n = h(n, d)),
            (o = h(o, y)));
        }
        return [r, i, n, o];
      }
      function o(t, e, r, i, n, o) {
        return h(c(h(h(e, t), h(i, o)), n), r);
      }
      function s(t, e, r, i, n, s, a) {
        return o((e & r) | (~e & i), t, e, n, s, a);
      }
      function a(t, e, r, i, n, s, a) {
        return o((e & i) | (r & ~i), t, e, n, s, a);
      }
      function f(t, e, r, i, n, s, a) {
        return o(e ^ r ^ i, t, e, n, s, a);
      }
      function u(t, e, r, i, n, s, a) {
        return o(r ^ (e | ~i), t, e, n, s, a);
      }
      function h(t, e) {
        var r = (65535 & t) + (65535 & e),
          i = (t >> 16) + (e >> 16) + (r >> 16);
        return (i << 16) | (65535 & r);
      }
      function c(t, e) {
        return (t << e) | (t >>> (32 - e));
      }
      t.exports = function (t) {
        return i(t, n);
      };
    },
    8047: function (t, e, r) {
      "use strict";
      (function (e) {
        var r = 4,
          i = new e(r);
        i.fill(0);
        var n = 8,
          o = 16;
        function s(t) {
          if (t.length % r !== 0) {
            var n = t.length + (r - (t.length % r));
            t = e.concat([t, i], n);
          }
          for (
            var o = new Array(t.length >>> 2), s = 0, a = 0;
            s < t.length;
            s += r, a++
          )
            o[a] = t.readInt32LE(s);
          return o;
        }
        t.exports = function (t, r) {
          var i = r(s(t), t.length * n);
          t = new e(o);
          for (var a = 0; a < i.length; a++) t.writeInt32LE(i[a], a << 2, !0);
          return t;
        };
      }).call(this, r(2).Buffer);
    },
    8048: function (t, e, r) {
      "use strict";
      var i = r(16),
        n = r(8049),
        o = r(806),
        s = r(46).Buffer,
        a = r(8050),
        f = r(819),
        u = r(814),
        h = s.alloc(128);
      function c(t, e) {
        (o.call(this, "digest"), "string" === typeof e && (e = s.from(e)));
        var r = "sha512" === t || "sha384" === t ? 128 : 64;
        if (((this._alg = t), (this._key = e), e.length > r)) {
          var i = "rmd160" === t ? new f() : u(t);
          e = i.update(e).digest();
        } else e.length < r && (e = s.concat([e, h], r));
        for (
          var n = (this._ipad = s.allocUnsafe(r)),
            a = (this._opad = s.allocUnsafe(r)),
            c = 0;
          c < r;
          c++
        )
          ((n[c] = 54 ^ e[c]), (a[c] = 92 ^ e[c]));
        ((this._hash = "rmd160" === t ? new f() : u(t)), this._hash.update(n));
      }
      (i(c, o),
        (c.prototype._update = function (t) {
          this._hash.update(t);
        }),
        (c.prototype._final = function () {
          var t = this._hash.digest(),
            e = "rmd160" === this._alg ? new f() : u(this._alg);
          return e.update(this._opad).update(t).digest();
        }),
        (t.exports = function (t, e) {
          return (
            (t = t.toLowerCase()),
            "rmd160" === t || "ripemd160" === t
              ? new c("rmd160", e)
              : "md5" === t
                ? new n(a, e)
                : new c(t, e)
          );
        }));
    },
    8049: function (t, e, r) {
      "use strict";
      var i = r(16),
        n = r(46).Buffer,
        o = r(806),
        s = n.alloc(128),
        a = 64;
      function f(t, e) {
        (o.call(this, "digest"),
          "string" === typeof e && (e = n.from(e)),
          (this._alg = t),
          (this._key = e),
          e.length > a
            ? (e = t(e))
            : e.length < a && (e = n.concat([e, s], a)));
        for (
          var r = (this._ipad = n.allocUnsafe(a)),
            i = (this._opad = n.allocUnsafe(a)),
            f = 0;
          f < a;
          f++
        )
          ((r[f] = 54 ^ e[f]), (i[f] = 92 ^ e[f]));
        this._hash = [r];
      }
      (i(f, o),
        (f.prototype._update = function (t) {
          this._hash.push(t);
        }),
        (f.prototype._final = function () {
          var t = this._alg(n.concat(this._hash));
          return this._alg(n.concat([this._opad, t]));
        }),
        (t.exports = f));
    },
    8050: function (t, e, r) {
      var i = r(838);
      t.exports = function (t) {
        return new i().update(t).digest();
      };
    },
    8051: function (t, e, r) {
      var i = r(8052),
        n = r(8053),
        o = r(8054);
      function s(t) {
        return i(t) || n(t) || o();
      }
      t.exports = s;
    },
    8052: function (t, e) {
      function r(t) {
        if (Array.isArray(t)) {
          for (var e = 0, r = new Array(t.length); e < t.length; e++)
            r[e] = t[e];
          return r;
        }
      }
      t.exports = r;
    },
    8053: function (t, e) {
      function r(t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      }
      t.exports = r;
    },
    8054: function (t, e) {
      function r() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      t.exports = r;
    },
    8055: function (t, e, r) {
      "use strict";
      t.exports = function (t) {
        return function () {
          for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          return new Promise(function (e, i) {
            setTimeout(function () {
              try {
                e(t.apply(void 0, r));
              } catch (n) {
                i(n);
              }
            });
          });
        };
      };
    },
    8056: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(229),
          n = r(3666),
          o = r(6170),
          BigInteger = r(2802),
          ECSignature = r(8057);
        function s(t, r, s, a, f) {
          (o("Buffer", r),
            o(BigInteger, s),
            f && (r = n.sha256(e.concat([r, new e(f)]))),
            i.equal(r.length, 32, "Hash must be 256 bit"));
          var u = s.toBuffer(32),
            h = new e(32),
            c = new e(32);
          (c.fill(1),
            h.fill(0),
            (h = n.HmacSHA256(e.concat([c, new e([0]), u, r]), h)),
            (c = n.HmacSHA256(c, h)),
            (h = n.HmacSHA256(e.concat([c, new e([1]), u, r]), h)),
            (c = n.HmacSHA256(c, h)),
            (c = n.HmacSHA256(c, h)));
          var l = BigInteger.fromBuffer(c);
          while (l.signum() <= 0 || l.compareTo(t.n) >= 0 || !a(l))
            ((h = n.HmacSHA256(e.concat([c, new e([0])]), h)),
              (c = n.HmacSHA256(c, h)),
              (c = n.HmacSHA256(c, h)),
              (l = BigInteger.fromBuffer(c)));
          return l;
        }
        function a(t, e, r, i) {
          var n,
            o,
            a = BigInteger.fromBuffer(e),
            f = t.n,
            u = t.G,
            h =
              (s(
                t,
                e,
                r,
                function (e) {
                  var i = u.multiply(e);
                  return (
                    !t.isInfinity(i) &&
                    ((n = i.affineX.mod(f)),
                    0 !== n.signum() &&
                      ((o = e
                        .modInverse(f)
                        .multiply(a.add(r.multiply(n)))
                        .mod(f)),
                      0 !== o.signum()))
                  );
                },
                i,
              ),
              f.shiftRight(1));
          return (o.compareTo(h) > 0 && (o = f.subtract(o)), ECSignature(n, o));
        }
        function f(t, e, r, i) {
          var n = t.n,
            o = t.G,
            s = r.r,
            a = r.s;
          if (s.signum() <= 0 || s.compareTo(n) >= 0) return !1;
          if (a.signum() <= 0 || a.compareTo(n) >= 0) return !1;
          var f = a.modInverse(n),
            u = e.multiply(f).mod(n),
            h = s.multiply(f).mod(n),
            c = o.multiplyTwo(u, i, h);
          if (t.isInfinity(c)) return !1;
          var l = c.affineX,
            p = l.mod(n);
          return p.equals(s);
        }
        function u(t, e, r, i) {
          var n = BigInteger.fromBuffer(e);
          return f(t, n, r, i);
        }
        function h(t, e, r, n) {
          i.strictEqual(3 & n, n, "Recovery param is more than two bits");
          var o = t.n,
            s = t.G,
            a = r.r,
            f = r.s;
          (i(a.signum() > 0 && a.compareTo(o) < 0, "Invalid r value"),
            i(f.signum() > 0 && f.compareTo(o) < 0, "Invalid s value"));
          var u = 1 & n,
            h = n >> 1,
            c = h ? a.add(o) : a,
            l = t.pointFromX(u, c),
            p = l.multiply(o);
          i(t.isInfinity(p), "nR is not a valid curve point");
          var d = e.negate().mod(o),
            y = a.modInverse(o),
            g = l.multiplyTwo(f, s, d).multiply(y);
          return (t.validate(g), g);
        }
        function c(t, e, r, i) {
          for (var n = 0; n < 4; n++) {
            var o = h(t, e, r, n);
            if (o.equals(i)) return n;
          }
          throw new Error("Unable to find valid recovery factor");
        }
        t.exports = {
          calcPubKeyRecoveryParam: c,
          deterministicGenerateK: s,
          recoverPubKey: h,
          sign: a,
          verify: u,
          verifyRaw: f,
        };
      }).call(this, r(2).Buffer);
    },
    8057: function (t, e, r) {
      "use strict";
      (function (e) {
        var i = r(229),
          n = r(6170),
          BigInteger = r(2802);
        function ECSignature(t, r) {
          function i(i, n) {
            (n && (i += 4), (i += 27));
            var o = new e(65);
            return (
              o.writeUInt8(i, 0),
              t.toBuffer(32).copy(o, 1),
              r.toBuffer(32).copy(o, 33),
              o
            );
          }
          function o() {
            var i = t.toDERInteger(),
              n = r.toDERInteger(),
              o = [];
            return (
              o.push(2, i.length),
              (o = o.concat(i)),
              o.push(2, n.length),
              (o = o.concat(n)),
              o.unshift(48, o.length),
              new e(o)
            );
          }
          function s(t) {
            var r = new e(1);
            return (r.writeUInt8(t, 0), e.concat([o(), r]));
          }
          return (
            n(BigInteger, t),
            n(BigInteger, r),
            { r: t, s: r, toCompact: i, toDER: o, toScriptSignature: s }
          );
        }
        ((ECSignature.parseCompact = function (t) {
          i.equal(t.length, 65, "Invalid signature length");
          var e = t.readUInt8(0) - 27;
          i.equal(e, 7 & e, "Invalid signature parameter");
          var r = !!(4 & e);
          e &= 3;
          var n = BigInteger.fromBuffer(t.slice(1, 33)),
            o = BigInteger.fromBuffer(t.slice(33));
          return { compressed: r, i: e, signature: ECSignature(n, o) };
        }),
          (ECSignature.fromDER = function (t) {
            (i.equal(t.readUInt8(0), 48, "Not a DER sequence"),
              i.equal(t.readUInt8(1), t.length - 2, "Invalid sequence length"),
              i.equal(t.readUInt8(2), 2, "Expected a DER integer"));
            var e = t.readUInt8(3);
            i(e > 0, "R length is zero");
            var r = 4 + e;
            i.equal(t.readUInt8(r), 2, "Expected a DER integer (2)");
            var n = t.readUInt8(r + 1);
            i(n > 0, "S length is zero");
            var o = t.slice(4, r),
              s = t.slice(r + 2);
            ((r += 2 + n),
              e > 1 &&
                0 === o.readUInt8(0) &&
                i(128 & o.readUInt8(1), "R value excessively padded"),
              n > 1 &&
                0 === s.readUInt8(0) &&
                i(128 & s.readUInt8(1), "S value excessively padded"),
              i.equal(r, t.length, "Invalid DER encoding"));
            var a = BigInteger.fromDERInteger(o),
              f = BigInteger.fromDERInteger(s);
            return (
              i(a.signum() >= 0, "R value is negative"),
              i(f.signum() >= 0, "S value is negative"),
              ECSignature(a, f)
            );
          }),
          (ECSignature.parseScriptSignature = function (t) {
            var e = t.readUInt8(t.length - 1),
              r = -129 & e;
            return (
              i(r > 0 && r < 4, "Invalid hashType"),
              { signature: ECSignature.fromDER(t.slice(0, -1)), hashType: e }
            );
          }),
          (t.exports = ECSignature));
      }).call(this, r(2).Buffer);
    },
    8058: function (t, e, r) {
      "use strict";
      var i = r(6156),
        n = r(4688),
        o = r(4296),
        s = r(6169),
        a = r(4297);
      t.exports = {
        Aes: i,
        PrivateKey: n,
        PublicKey: o,
        Signature: s,
        key_utils: a,
      };
    },
    8059: function (t, e, r) {
      "use strict";
      var i = (function () {
          function t(t, e) {
            var r = [],
              i = !0,
              n = !1,
              o = void 0;
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(i = (s = a.next()).done);
                i = !0
              )
                if ((r.push(s.value), e && r.length === e)) break;
            } catch (f) {
              ((n = !0), (o = f));
            } finally {
              try {
                !i && a["return"] && a["return"]();
              } finally {
                if (n) throw o;
              }
            }
            return r;
          }
          return function (e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, r);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        n = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              ((i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i));
            }
          }
          return function (e, r, i) {
            return (r && t(e.prototype, r), i && t(e, i), e);
          };
        })();
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var s = (function () {
        function t() {
          o(this, t);
        }
        return (
          n(t, null, [
            {
              key: "get_n_pad_bytes",
              value: function (t) {
                return 64 - ((t + 8) & 63);
              },
            },
            {
              key: "pad",
              value: function (e) {
                var r = e.byteLength,
                  n = t.get_n_pad_bytes(r),
                  o = function (t, e) {
                    return [Math.floor(t / e), t % e];
                  },
                  s = o(r, 536870912).map(function (t, e) {
                    return e ? 8 * t : t;
                  }),
                  a = i(s, 2),
                  f = a[0],
                  u = a[1],
                  h = new Uint8Array(r + n + 8);
                h.set(new Uint8Array(e), 0);
                var c = new DataView(h.buffer);
                return (
                  c.setUint8(r, 128),
                  c.setUint32(r + n, u, !0),
                  c.setUint32(r + n + 4, f, !0),
                  h.buffer
                );
              },
            },
            {
              key: "f",
              value: function (t, e, r, i) {
                return 0 <= t && t <= 15
                  ? e ^ r ^ i
                  : 16 <= t && t <= 31
                    ? (e & r) | (~e & i)
                    : 32 <= t && t <= 47
                      ? (e | ~r) ^ i
                      : 48 <= t && t <= 63
                        ? (e & i) | (r & ~i)
                        : 64 <= t && t <= 79
                          ? e ^ (r | ~i)
                          : void 0;
              },
            },
            {
              key: "K",
              value: function (t) {
                return 0 <= t && t <= 15
                  ? 0
                  : 16 <= t && t <= 31
                    ? 1518500249
                    : 32 <= t && t <= 47
                      ? 1859775393
                      : 48 <= t && t <= 63
                        ? 2400959708
                        : 64 <= t && t <= 79
                          ? 2840853838
                          : void 0;
              },
            },
            {
              key: "KP",
              value: function (t) {
                return 0 <= t && t <= 15
                  ? 1352829926
                  : 16 <= t && t <= 31
                    ? 1548603684
                    : 32 <= t && t <= 47
                      ? 1836072691
                      : 48 <= t && t <= 63
                        ? 2053994217
                        : 64 <= t && t <= 79
                          ? 0
                          : void 0;
              },
            },
            {
              key: "add_modulo32",
              value: function () {
                return (
                  0 |
                  Array.from(arguments).reduce(function (t, e) {
                    return t + e;
                  }, 0)
                );
              },
            },
            {
              key: "rol32",
              value: function (t, e) {
                return (t << e) | (t >>> (32 - e));
              },
            },
            {
              key: "hash",
              value: function (e) {
                for (
                  var r = t.pad(e),
                    i = [
                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7,
                      4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10,
                      14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11,
                      10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7,
                      12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
                    ],
                    n = [
                      5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6,
                      11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5,
                      1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1,
                      3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4,
                      1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
                    ],
                    o = [
                      11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7,
                      6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11,
                      13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11,
                      12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15,
                      5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                    ],
                    s = [
                      8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9,
                      13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7,
                      15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5,
                      8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12,
                      9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
                    ],
                    a = 4,
                    f = 64,
                    u = r.byteLength / f,
                    h = new Array(u).fill(void 0).map(function (t, e) {
                      return function (t) {
                        return new DataView(r, e * f, f).getUint32(t * a, !0);
                      };
                    }),
                    c = [
                      1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                    ],
                    l = 0;
                  l < u;
                  ++l
                ) {
                  for (
                    var p = c[0],
                      d = c[1],
                      y = c[2],
                      g = c[3],
                      v = c[4],
                      m = p,
                      w = d,
                      b = y,
                      _ = g,
                      E = v,
                      T = 0;
                    T < 80;
                    ++T
                  ) {
                    var A = t.add_modulo32(
                      t.rol32(
                        t.add_modulo32(p, t.f(T, d, y, g), h[l](i[T]), t.K(T)),
                        o[T],
                      ),
                      v,
                    );
                    ((p = v),
                      (v = g),
                      (g = t.rol32(y, 10)),
                      (y = d),
                      (d = A),
                      (A = t.add_modulo32(
                        t.rol32(
                          t.add_modulo32(
                            m,
                            t.f(79 - T, w, b, _),
                            h[l](n[T]),
                            t.KP(T),
                          ),
                          s[T],
                        ),
                        E,
                      )),
                      (m = E),
                      (E = _),
                      (_ = t.rol32(b, 10)),
                      (b = w),
                      (w = A));
                  }
                  var S = t.add_modulo32(c[1], y, _);
                  ((c[1] = t.add_modulo32(c[2], g, E)),
                    (c[2] = t.add_modulo32(c[3], v, m)),
                    (c[3] = t.add_modulo32(c[4], p, w)),
                    (c[4] = t.add_modulo32(c[0], d, b)),
                    (c[0] = S));
                }
                var B = new ArrayBuffer(20),
                  I = new DataView(B);
                return (
                  c.forEach(function (t, e) {
                    return I.setUint32(4 * e, t, !0);
                  }),
                  B
                );
              },
            },
          ]),
          t
        );
      })();
      t.exports = { RIPEMD160: s };
    },
    8060: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = r(8061);
      e.Api = i.Api;
      var n = r(8064);
      e.ApiInterfaces = n;
      var o = r(8065);
      e.JsonRpc = o.JsonRpc;
      var s = r(4689);
      e.Numeric = s;
      var a = r(8066);
      e.RpcInterfaces = a;
      var f = r(6172);
      e.RpcError = f.RpcError;
      var u = r(6171);
      e.Serialize = u;
    },
    8061: function (t, e, r) {
      "use strict";
      var i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (t) {
                  for (var e, r = 1, i = arguments.length; r < i; r++)
                    for (var n in ((e = arguments[r]), e))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }),
              i.apply(this, arguments)
            );
          },
        n =
          (this && this.__awaiter) ||
          function (t, e, r, i) {
            return new (r || (r = Promise))(function (n, o) {
              function s(t) {
                try {
                  f(i.next(t));
                } catch (e) {
                  o(e);
                }
              }
              function a(t) {
                try {
                  f(i["throw"](t));
                } catch (e) {
                  o(e);
                }
              }
              function f(t) {
                t.done
                  ? n(t.value)
                  : new r(function (e) {
                      e(t.value);
                    }).then(s, a);
              }
              f((i = i.apply(t, e || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (t, e) {
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
                return f([t, e]);
              };
            }
            function f(o) {
              if (r) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((r = 1),
                    i &&
                      (n =
                        2 & o[0]
                          ? i["return"]
                          : o[0]
                            ? i["throw"] || ((n = i["return"]) && n.call(i), 0)
                            : i.next) &&
                      !(n = n.call(i, o[1])).done)
                  )
                    return n;
                  switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (i = o[1]), (o = [0]));
                      continue;
                    case 7:
                      ((o = s.ops.pop()), s.trys.pop());
                      continue;
                    default:
                      if (
                        ((n = s.trys),
                        !(n = n.length > 0 && n[n.length - 1]) &&
                          (6 === o[0] || 2 === o[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!n || (o[1] > n[0] && o[1] < n[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < n[1]) {
                        ((s.label = n[1]), (n = o));
                        break;
                      }
                      if (n && s.label < n[2]) {
                        ((s.label = n[2]), s.ops.push(o));
                        break;
                      }
                      (n[2] && s.ops.pop(), s.trys.pop());
                      continue;
                  }
                  o = e.call(t, s);
                } catch (a) {
                  ((o = [6, a]), (i = 0));
                } finally {
                  r = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          },
        s =
          (this && this.__rest) ||
          function (t, e) {
            var r = {};
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) &&
                e.indexOf(i) < 0 &&
                (r[i] = t[i]);
            if (
              null != t &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var n = 0;
              for (i = Object.getOwnPropertySymbols(t); n < i.length; n++)
                e.indexOf(i[n]) < 0 && (r[i[n]] = t[i[n]]);
            }
            return r;
          },
        a =
          (this && this.__read) ||
          function (t, e) {
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
          },
        f =
          (this && this.__spread) ||
          function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t = t.concat(a(arguments[e]));
            return t;
          },
        u =
          (this && this.__values) ||
          function (t) {
            var e = "function" === typeof Symbol && t[Symbol.iterator],
              r = 0;
            return e
              ? e.call(t)
              : {
                  next: function () {
                    return (
                      t && r >= t.length && (t = void 0),
                      { value: t && t[r++], done: !t }
                    );
                  },
                };
          };
      Object.defineProperty(e, "__esModule", { value: !0 });
      var h = r(6171),
        c = r(8062),
        l = r(8063),
        p = (function () {
          function t(t) {
            ((this.contracts = new Map()),
              (this.cachedAbis = new Map()),
              (this.rpc = t.rpc),
              (this.authorityProvider = t.authorityProvider || t.rpc),
              (this.abiProvider = t.abiProvider || t.rpc),
              (this.signatureProvider = t.signatureProvider),
              (this.chainId = t.chainId),
              (this.textEncoder = t.textEncoder),
              (this.textDecoder = t.textDecoder),
              (this.abiTypes = h.getTypesFromAbi(h.createInitialTypes(), c)),
              (this.transactionTypes = h.getTypesFromAbi(
                h.createInitialTypes(),
                l,
              )));
          }
          return (
            (t.prototype.rawAbiToJson = function (t) {
              var e = new h.SerialBuffer({
                textEncoder: this.textEncoder,
                textDecoder: this.textDecoder,
                array: t,
              });
              if (!h.supportedAbiVersion(e.getString()))
                throw new Error("Unsupported abi version");
              return (
                e.restartRead(),
                this.abiTypes.get("abi_def").deserialize(e)
              );
            }),
            (t.prototype.getCachedAbi = function (t, e) {
              return (
                void 0 === e && (e = !1),
                n(this, void 0, void 0, function () {
                  var r, i, n, s;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!e && this.cachedAbis.get(t))
                          return [2, this.cachedAbis.get(t)];
                        o.label = 1;
                      case 1:
                        return (
                          o.trys.push([1, 3, , 4]),
                          [4, this.abiProvider.getRawAbi(t)]
                        );
                      case 2:
                        return (
                          (i = o.sent().abi),
                          (n = this.rawAbiToJson(i)),
                          (r = { rawAbi: i, abi: n }),
                          [3, 4]
                        );
                      case 3:
                        throw (
                          (s = o.sent()),
                          (s.message =
                            "fetching abi for " + t + ": " + s.message),
                          s
                        );
                      case 4:
                        if (!r) throw new Error("Missing abi for " + t);
                        return (this.cachedAbis.set(t, r), [2, r]);
                    }
                  });
                })
              );
            }),
            (t.prototype.getAbi = function (t, e) {
              return (
                void 0 === e && (e = !1),
                n(this, void 0, void 0, function () {
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, this.getCachedAbi(t, e)];
                      case 1:
                        return [2, r.sent().abi];
                    }
                  });
                })
              );
            }),
            (t.prototype.getTransactionAbis = function (t, e) {
              return (
                void 0 === e && (e = !1),
                n(this, void 0, void 0, function () {
                  var r,
                    i,
                    s,
                    a = this;
                  return o(this, function (u) {
                    return (
                      (r = t.actions.map(function (t) {
                        return t.account;
                      })),
                      (i = new Set(r)),
                      (s = f(i).map(function (t) {
                        return n(a, void 0, void 0, function () {
                          var r;
                          return o(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return (
                                  (r = { accountName: t }),
                                  [4, this.getCachedAbi(t, e)]
                                );
                              case 1:
                                return [2, ((r.abi = i.sent().rawAbi), r)];
                            }
                          });
                        });
                      })),
                      [2, Promise.all(s)]
                    );
                  });
                })
              );
            }),
            (t.prototype.getContract = function (t, e) {
              return (
                void 0 === e && (e = !1),
                n(this, void 0, void 0, function () {
                  var r, i, n, s, a, f, c, l, p, d, y;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return !e && this.contracts.get(t)
                          ? [2, this.contracts.get(t)]
                          : [4, this.getAbi(t, e)];
                      case 1:
                        ((n = o.sent()),
                          (s = h.getTypesFromAbi(h.createInitialTypes(), n)),
                          (a = new Map()));
                        try {
                          for (
                            f = u(n.actions), c = f.next();
                            !c.done;
                            c = f.next()
                          )
                            ((l = c.value),
                              (p = l.name),
                              (d = l.type),
                              a.set(p, h.getType(s, d)));
                        } catch (g) {
                          r = { error: g };
                        } finally {
                          try {
                            c && !c.done && (i = f.return) && i.call(f);
                          } finally {
                            if (r) throw r.error;
                          }
                        }
                        return (
                          (y = { types: s, actions: a }),
                          this.contracts.set(t, y),
                          [2, y]
                        );
                    }
                  });
                })
              );
            }),
            (t.prototype.serialize = function (t, e, r) {
              this.transactionTypes.get(e).serialize(t, r);
            }),
            (t.prototype.deserialize = function (t, e) {
              return this.transactionTypes.get(e).deserialize(t);
            }),
            (t.prototype.serializeTransaction = function (t) {
              var e = new h.SerialBuffer({
                textEncoder: this.textEncoder,
                textDecoder: this.textDecoder,
              });
              return (
                this.serialize(
                  e,
                  "transaction",
                  i(
                    {
                      max_net_usage_words: 0,
                      max_cpu_usage_ms: 0,
                      delay_sec: 0,
                      context_free_actions: [],
                      actions: [],
                      transaction_extensions: [],
                    },
                    t,
                  ),
                ),
                e.asUint8Array()
              );
            }),
            (t.prototype.deserializeTransaction = function (t) {
              var e = new h.SerialBuffer({
                textEncoder: this.textEncoder,
                textDecoder: this.textDecoder,
              });
              return (e.pushArray(t), this.deserialize(e, "transaction"));
            }),
            (t.prototype.serializeActions = function (t) {
              return n(this, void 0, void 0, function () {
                var e = this;
                return o(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        Promise.all(
                          t.map(function (t) {
                            var r = t.account,
                              i = t.name,
                              s = t.authorization,
                              a = t.data;
                            return n(e, void 0, void 0, function () {
                              var t;
                              return o(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, this.getContract(r)];
                                  case 1:
                                    return (
                                      (t = e.sent()),
                                      [
                                        2,
                                        h.serializeAction(
                                          t,
                                          r,
                                          i,
                                          s,
                                          a,
                                          this.textEncoder,
                                          this.textDecoder,
                                        ),
                                      ]
                                    );
                                }
                              });
                            });
                          }),
                        ),
                      ];
                    case 1:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.deserializeActions = function (t) {
              return n(this, void 0, void 0, function () {
                var e = this;
                return o(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        Promise.all(
                          t.map(function (t) {
                            var r = t.account,
                              i = t.name,
                              s = t.authorization,
                              a = t.data;
                            return n(e, void 0, void 0, function () {
                              var t;
                              return o(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, this.getContract(r)];
                                  case 1:
                                    return (
                                      (t = e.sent()),
                                      [
                                        2,
                                        h.deserializeAction(
                                          t,
                                          r,
                                          i,
                                          s,
                                          a,
                                          this.textEncoder,
                                          this.textDecoder,
                                        ),
                                      ]
                                    );
                                }
                              });
                            });
                          }),
                        ),
                      ];
                    case 1:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (t.prototype.deserializeTransactionWithActions = function (t) {
              return n(this, void 0, void 0, function () {
                var e, r;
                return o(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        "string" === typeof t && (t = h.hexToUint8Array(t)),
                        (e = this.deserializeTransaction(t)),
                        [4, this.deserializeActions(e.actions)]
                      );
                    case 1:
                      return ((r = n.sent()), [2, i({}, e, { actions: r })]);
                  }
                });
              });
            }),
            (t.prototype.transact = function (t, e) {
              var r = void 0 === e ? {} : e,
                s = r.broadcast,
                a = void 0 === s || s,
                f = r.sign,
                u = void 0 === f || f,
                c = r.blocksBehind,
                l = r.expireSeconds;
              return n(this, void 0, void 0, function () {
                var e, r, n, s, f, p, d, y, g;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return this.chainId ? [3, 2] : [4, this.rpc.get_info()];
                    case 1:
                      ((e = o.sent()),
                        (this.chainId = e.chain_id),
                        (o.label = 2));
                    case 2:
                      return "number" === typeof c && l
                        ? e
                          ? [3, 4]
                          : [4, this.rpc.get_info()]
                        : [3, 6];
                    case 3:
                      ((e = o.sent()), (o.label = 4));
                    case 4:
                      return [4, this.rpc.get_block(e.head_block_num - c)];
                    case 5:
                      ((r = o.sent()),
                        (t = i({}, h.transactionHeader(r, l), t)),
                        (o.label = 6));
                    case 6:
                      if (!this.hasRequiredTaposFields(t))
                        throw new Error(
                          "Required configuration or TAPOS fields are not present",
                        );
                      return [4, this.getTransactionAbis(t)];
                    case 7:
                      return (
                        (n = o.sent()),
                        (s = [{}, t]),
                        (f = {}),
                        [4, this.serializeActions(t.actions)]
                      );
                    case 8:
                      return (
                        (t = i.apply(
                          void 0,
                          s.concat([((f.actions = o.sent()), f)]),
                        )),
                        (p = this.serializeTransaction(t)),
                        (d = { serializedTransaction: p, signatures: [] }),
                        u
                          ? [4, this.signatureProvider.getAvailableKeys()]
                          : [3, 12]
                      );
                    case 9:
                      return (
                        (y = o.sent()),
                        [
                          4,
                          this.authorityProvider.getRequiredKeys({
                            transaction: t,
                            availableKeys: y,
                          }),
                        ]
                      );
                    case 10:
                      return (
                        (g = o.sent()),
                        [
                          4,
                          this.signatureProvider.sign({
                            chainId: this.chainId,
                            requiredKeys: g,
                            serializedTransaction: p,
                            abis: n,
                          }),
                        ]
                      );
                    case 11:
                      ((d = o.sent()), (o.label = 12));
                    case 12:
                      return a ? [2, this.pushSignedTransaction(d)] : [2, d];
                  }
                });
              });
            }),
            (t.prototype.pushSignedTransaction = function (t) {
              var e = t.signatures,
                r = t.serializedTransaction;
              return n(this, void 0, void 0, function () {
                return o(this, function (t) {
                  return [
                    2,
                    this.rpc.push_transaction({
                      signatures: e,
                      serializedTransaction: r,
                    }),
                  ];
                });
              });
            }),
            (t.prototype.hasRequiredTaposFields = function (t) {
              var e = t.expiration,
                r = t.ref_block_num,
                i = t.ref_block_prefix;
              s(t, ["expiration", "ref_block_num", "ref_block_prefix"]);
              return !!(e && r && i);
            }),
            t
          );
        })();
      e.Api = p;
    },
    8062: function (t) {
      t.exports = JSON.parse(
        '{"version":"eosio::abi/1.1","structs":[{"name":"extensions_entry","base":"","fields":[{"name":"tag","type":"uint16"},{"name":"value","type":"bytes"}]},{"name":"type_def","base":"","fields":[{"name":"new_type_name","type":"string"},{"name":"type","type":"string"}]},{"name":"field_def","base":"","fields":[{"name":"name","type":"string"},{"name":"type","type":"string"}]},{"name":"struct_def","base":"","fields":[{"name":"name","type":"string"},{"name":"base","type":"string"},{"name":"fields","type":"field_def[]"}]},{"name":"action_def","base":"","fields":[{"name":"name","type":"name"},{"name":"type","type":"string"},{"name":"ricardian_contract","type":"string"}]},{"name":"table_def","base":"","fields":[{"name":"name","type":"name"},{"name":"index_type","type":"string"},{"name":"key_names","type":"string[]"},{"name":"key_types","type":"string[]"},{"name":"type","type":"string"}]},{"name":"clause_pair","base":"","fields":[{"name":"id","type":"string"},{"name":"body","type":"string"}]},{"name":"error_message","base":"","fields":[{"name":"error_code","type":"uint64"},{"name":"error_msg","type":"string"}]},{"name":"variant_def","base":"","fields":[{"name":"name","type":"string"},{"name":"types","type":"string[]"}]},{"name":"abi_def","base":"","fields":[{"name":"version","type":"string"},{"name":"types","type":"type_def[]"},{"name":"structs","type":"struct_def[]"},{"name":"actions","type":"action_def[]"},{"name":"tables","type":"table_def[]"},{"name":"ricardian_clauses","type":"clause_pair[]"},{"name":"error_messages","type":"error_message[]"},{"name":"abi_extensions","type":"extensions_entry[]"},{"name":"variants","type":"variant_def[]$"}]}]}',
      );
    },
    8063: function (t) {
      t.exports = JSON.parse(
        '{"version":"eosio::abi/1.0","types":[{"new_type_name":"account_name","type":"name"},{"new_type_name":"action_name","type":"name"},{"new_type_name":"permission_name","type":"name"}],"structs":[{"name":"permission_level","base":"","fields":[{"name":"actor","type":"account_name"},{"name":"permission","type":"permission_name"}]},{"name":"action","base":"","fields":[{"name":"account","type":"account_name"},{"name":"name","type":"action_name"},{"name":"authorization","type":"permission_level[]"},{"name":"data","type":"bytes"}]},{"name":"extension","base":"","fields":[{"name":"type","type":"uint16"},{"name":"data","type":"bytes"}]},{"name":"transaction_header","base":"","fields":[{"name":"expiration","type":"time_point_sec"},{"name":"ref_block_num","type":"uint16"},{"name":"ref_block_prefix","type":"uint32"},{"name":"max_net_usage_words","type":"varuint32"},{"name":"max_cpu_usage_ms","type":"uint8"},{"name":"delay_sec","type":"varuint32"}]},{"name":"transaction","base":"transaction_header","fields":[{"name":"context_free_actions","type":"action[]"},{"name":"actions","type":"action[]"},{"name":"transaction_extensions","type":"extension[]"}]}]}',
      );
    },
    8064: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    8065: function (t, e, r) {
      "use strict";
      (function (t) {
        var i =
            (this && this.__awaiter) ||
            function (t, e, r, i) {
              return new (r || (r = Promise))(function (n, o) {
                function s(t) {
                  try {
                    f(i.next(t));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(t) {
                  try {
                    f(i["throw"](t));
                  } catch (e) {
                    o(e);
                  }
                }
                function f(t) {
                  t.done
                    ? n(t.value)
                    : new r(function (e) {
                        e(t.value);
                      }).then(s, a);
                }
                f((i = i.apply(t, e || [])).next());
              });
            },
          n =
            (this && this.__generator) ||
            function (t, e) {
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
                  return f([t, e]);
                };
              }
              function f(o) {
                if (r) throw new TypeError("Generator is already executing.");
                while (s)
                  try {
                    if (
                      ((r = 1),
                      i &&
                        (n =
                          2 & o[0]
                            ? i["return"]
                            : o[0]
                              ? i["throw"] ||
                                ((n = i["return"]) && n.call(i), 0)
                              : i.next) &&
                        !(n = n.call(i, o[1])).done)
                    )
                      return n;
                    switch (((i = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return (s.label++, { value: o[1], done: !1 });
                      case 5:
                        (s.label++, (i = o[1]), (o = [0]));
                        continue;
                      case 7:
                        ((o = s.ops.pop()), s.trys.pop());
                        continue;
                      default:
                        if (
                          ((n = s.trys),
                          !(n = n.length > 0 && n[n.length - 1]) &&
                            (6 === o[0] || 2 === o[0]))
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!n || (o[1] > n[0] && o[1] < n[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < n[1]) {
                          ((s.label = n[1]), (n = o));
                          break;
                        }
                        if (n && s.label < n[2]) {
                          ((s.label = n[2]), s.ops.push(o));
                          break;
                        }
                        (n[2] && s.ops.pop(), s.trys.pop());
                        continue;
                    }
                    o = e.call(t, s);
                  } catch (a) {
                    ((o = [6, a]), (i = 0));
                  } finally {
                    r = n = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            },
          o =
            (this && this.__values) ||
            function (t) {
              var e = "function" === typeof Symbol && t[Symbol.iterator],
                r = 0;
              return e
                ? e.call(t)
                : {
                    next: function () {
                      return (
                        t && r >= t.length && (t = void 0),
                        { value: t && t[r++], done: !t }
                      );
                    },
                  };
            };
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = r(4689),
          a = r(6172);
        function f(t) {
          var e,
            r,
            i = "";
          try {
            for (var n = o(t), s = n.next(); !s.done; s = n.next()) {
              var a = s.value;
              i += ("00" + a.toString(16)).slice(-2);
            }
          } catch (f) {
            e = { error: f };
          } finally {
            try {
              s && !s.done && (r = n.return) && r.call(n);
            } finally {
              if (e) throw e.error;
            }
          }
          return i;
        }
        var u = (function () {
          function e(e, r) {
            (void 0 === r && (r = {}),
              (this.endpoint = e),
              r.fetch
                ? (this.fetchBuiltin = r.fetch)
                : (this.fetchBuiltin = t.fetch));
          }
          return (
            (e.prototype.fetch = function (t, e) {
              return i(this, void 0, void 0, function () {
                var r, i, o, s;
                return n(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 3, , 4]),
                        (o = this.fetchBuiltin),
                        [
                          4,
                          o(this.endpoint + t, {
                            body: JSON.stringify(e),
                            method: "POST",
                          }),
                        ]
                      );
                    case 1:
                      return ((r = n.sent()), [4, r.json()]);
                    case 2:
                      if (((i = n.sent()), i.processed && i.processed.except))
                        throw new a.RpcError(i);
                      return [3, 4];
                    case 3:
                      throw ((s = n.sent()), (s.isFetchError = !0), s);
                    case 4:
                      if (!r.ok) throw new a.RpcError(i);
                      return [2, i];
                  }
                });
              });
            }),
            (e.prototype.get_abi = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_abi", { account_name: t }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_account = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_account", {
                          account_name: t,
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_block_header_state = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_block_header_state", {
                          block_num_or_id: t,
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_block = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_block", {
                          block_num_or_id: t,
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_code = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_code", { account_name: t }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_currency_balance = function (t, e, r) {
              return (
                void 0 === r && (r = null),
                i(this, void 0, void 0, function () {
                  return n(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          this.fetch("/v1/chain/get_currency_balance", {
                            code: t,
                            account: e,
                            symbol: r,
                          }),
                        ];
                      case 1:
                        return [2, i.sent()];
                    }
                  });
                })
              );
            }),
            (e.prototype.get_currency_stats = function (t, e) {
              return i(this, void 0, void 0, function () {
                return n(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_currency_stats", {
                          code: t,
                          symbol: e,
                        }),
                      ];
                    case 1:
                      return [2, r.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_info = function () {
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.fetch("/v1/chain/get_info", {})];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_producer_schedule = function () {
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_producer_schedule", {}),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_producers = function (t, e, r) {
              return (
                void 0 === t && (t = !0),
                void 0 === e && (e = ""),
                void 0 === r && (r = 50),
                i(this, void 0, void 0, function () {
                  return n(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          this.fetch("/v1/chain/get_producers", {
                            json: t,
                            lower_bound: e,
                            limit: r,
                          }),
                        ];
                      case 1:
                        return [2, i.sent()];
                    }
                  });
                })
              );
            }),
            (e.prototype.get_raw_code_and_abi = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_raw_code_and_abi", {
                          account_name: t,
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.getRawAbi = function (t) {
              return i(this, void 0, void 0, function () {
                var e, r;
                return n(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, this.get_raw_code_and_abi(t)];
                    case 1:
                      return (
                        (e = i.sent()),
                        (r = s.base64ToBinary(e.abi)),
                        [2, { accountName: e.account_name, abi: r }]
                      );
                  }
                });
              });
            }),
            (e.prototype.get_table_rows = function (t) {
              var e = t.json,
                r = void 0 === e || e,
                o = t.code,
                s = t.scope,
                a = t.table,
                f = t.table_key,
                u = void 0 === f ? "" : f,
                h = t.lower_bound,
                c = void 0 === h ? "" : h,
                l = t.upper_bound,
                p = void 0 === l ? "" : l,
                d = t.index_position,
                y = void 0 === d ? 1 : d,
                g = t.key_type,
                v = void 0 === g ? "" : g,
                m = t.limit,
                w = void 0 === m ? 10 : m,
                b = t.reverse,
                _ = void 0 !== b && b,
                E = t.show_payer,
                T = void 0 !== E && E;
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_table_rows", {
                          json: r,
                          code: o,
                          scope: s,
                          table: a,
                          table_key: u,
                          lower_bound: c,
                          upper_bound: p,
                          index_position: y,
                          key_type: v,
                          limit: w,
                          reverse: _,
                          show_payer: T,
                        }),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.get_table_by_scope = function (t) {
              var e = t.code,
                r = t.table,
                o = t.lower_bound,
                s = void 0 === o ? "" : o,
                a = t.upper_bound,
                f = void 0 === a ? "" : a,
                u = t.limit,
                h = void 0 === u ? 10 : u;
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/get_table_by_scope", {
                          code: e,
                          table: r,
                          lower_bound: s,
                          upper_bound: f,
                          limit: h,
                        }),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.getRequiredKeys = function (t) {
              return i(this, void 0, void 0, function () {
                var e;
                return n(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = s.convertLegacyPublicKeys),
                        [
                          4,
                          this.fetch("/v1/chain/get_required_keys", {
                            transaction: t.transaction,
                            available_keys: t.availableKeys,
                          }),
                        ]
                      );
                    case 1:
                      return [2, e.apply(void 0, [r.sent().required_keys])];
                  }
                });
              });
            }),
            (e.prototype.push_transaction = function (t) {
              var e = t.signatures,
                r = t.serializedTransaction;
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/chain/push_transaction", {
                          signatures: e,
                          compression: 0,
                          packed_context_free_data: "",
                          packed_trx: f(r),
                        }),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.db_size_get = function () {
              return i(this, void 0, void 0, function () {
                return n(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.fetch("/v1/db_size/get", {})];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.history_get_actions = function (t, e, r) {
              return (
                void 0 === e && (e = null),
                void 0 === r && (r = null),
                i(this, void 0, void 0, function () {
                  return n(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          this.fetch("/v1/history/get_actions", {
                            account_name: t,
                            pos: e,
                            offset: r,
                          }),
                        ];
                      case 1:
                        return [2, i.sent()];
                    }
                  });
                })
              );
            }),
            (e.prototype.history_get_transaction = function (t, e) {
              return (
                void 0 === e && (e = null),
                i(this, void 0, void 0, function () {
                  return n(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [
                          4,
                          this.fetch("/v1/history/get_transaction", {
                            id: t,
                            block_num_hint: e,
                          }),
                        ];
                      case 1:
                        return [2, r.sent()];
                    }
                  });
                })
              );
            }),
            (e.prototype.history_get_key_accounts = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/history/get_key_accounts", {
                          public_key: t,
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.history_get_controlled_accounts = function (t) {
              return i(this, void 0, void 0, function () {
                return n(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [
                        4,
                        this.fetch("/v1/history/get_controlled_accounts", {
                          controlling_account: t,
                        }),
                      ];
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            e
          );
        })();
        e.JsonRpc = u;
      }).call(this, r(13));
    },
    8066: function (t, e, r) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
    },
    8067: function (t, e, r) {
      "use strict";
      var i = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(129)),
        o = r(19),
        s = r(27);
      class EOSApiExplorer extends n.default {
        constructor() {
          (super(...arguments),
            (this.apiKey = arguments.length <= 3 ? void 0 : arguments[3]));
        }
        getAllowedTickers() {
          return ["EOS"];
        }
        async validateNewAccountName(t) {
          const e = await this.request(this.config.baseUrl, "get", {
            module: "account",
            action: "get_account_info",
            apikey: this.apiKey,
            account: t,
          }).catch((t) => {
            throw new o.ExplorerRequestError({
              type: s.EXPLORER_API_ERROR,
              error: t,
              instance: this,
            });
          });
          return (
            !(e.data && e.data.permissions && e.data.permissions.length > 0) &&
            ((this.wallet.address = t), !0)
          );
        }
      }
      e.default = EOSApiExplorer;
    },
  },
]);
