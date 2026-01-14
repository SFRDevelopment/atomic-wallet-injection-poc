(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [233, 32],
  {
    2671: function (t, e, i) {
      "use strict";
      (i.r(e),
        function (t) {
          var r,
            n = i(230),
            o = i(8),
            s = i.n(o),
            a = i(3269),
            u = i(126),
            h = i(27),
            l = i(794),
            c = i.n(l),
            d = i(28),
            f = i.n(d),
            m = i(840),
            p = i(19),
            v = i(35),
            g = i(5887),
            y = i(7197),
            w = i(388),
            M = i(805),
            b = i(4),
            _ = i(5893),
            T = i.n(_),
            A = i(2806),
            k = i(158),
            R = Object.defineProperty,
            E = Object.defineProperties,
            O = Object.getOwnPropertyDescriptors,
            P = Object.getOwnPropertySymbols,
            S = Object.prototype.hasOwnProperty,
            I = Object.prototype.propertyIsEnumerable,
            B = (t, e, i) =>
              e in t
                ? R(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (t[e] = i),
            N = (t, e) => {
              for (var i in e || (e = {})) S.call(e, i) && B(t, i, e[i]);
              if (P) for (var i of P(e)) I.call(e, i) && B(t, i, e[i]);
              return t;
            },
            x = (t, e) => E(t, O(e)),
            j = (t, e, i) => {
              if (!e.has(t)) throw TypeError("Cannot " + i);
            },
            K = (t, e, i) => (
              j(t, e, "read from private field"),
              i ? i.call(t) : e.get(t)
            ),
            U = (t, e, i) => {
              if (e.has(t))
                throw TypeError(
                  "Cannot add the same private member more than once",
                );
              e instanceof WeakSet ? e.add(t) : e.set(t, i);
            },
            L = (t, e, i, r) => (
              j(t, e, "write to private field"),
              r ? r.call(t, i) : e.set(t, i),
              i
            ),
            C = (t, e, i) =>
              new Promise((r, n) => {
                var o = (t) => {
                    try {
                      a(i.next(t));
                    } catch (e) {
                      n(e);
                    }
                  },
                  s = (t) => {
                    try {
                      a(i.throw(t));
                    } catch (e) {
                      n(e);
                    }
                  },
                  a = (t) =>
                    t.done ? r(t.value) : Promise.resolve(t.value).then(o, s);
                a((i = i.apply(t, e)).next());
              });
          const D = "Solana",
            F = "SOL",
            z = "m/44'/501'/0'",
            W = 9,
            H = "0",
            q = "7000",
            G = "28000",
            Y = 2,
            Z = 200,
            V = "solanaWeb3Lib",
            $ = "hdKeyLib",
            X = "tweetnaclLib",
            J = "splTokenLib";
          class SOLCoin extends Object(a["NftMixin"])(
            Object(A["HasProviders"])(
              Object(A["HasBlockScanner"])(
                Object(A["HasTokensMixin"])(n["default"]),
              ),
            ),
          ) {
            constructor(t) {
              var e, n;
              (super(
                x(N({}, t), {
                  name: null != (e = t.name) ? e : D,
                  ticker: null != (n = t.ticker) ? n : F,
                  decimal: W,
                  unspendableBalance: H,
                  dependencies: {
                    [V]: new c.a(() =>
                      Promise.resolve().then(i.t.bind(null, 1, 7)),
                    ),
                    [$]: new c.a(() => i.e(392).then(i.t.bind(null, 9208, 7))),
                    [X]: new c.a(() => i.e(422).then(i.t.bind(null, 2925, 7))),
                    [J]: new c.a(() =>
                      Promise.resolve().then(i.t.bind(null, 125, 7)),
                    ),
                  },
                }),
              ),
                U(this, r, void 0),
                (this.mint = "So11111111111111111111111111111111111111112"),
                (this.derivation = z),
                this.setExplorersModules([g["a"], y["a"]]),
                this.loadExplorers(t));
              const { feeData: o } = t;
              (s.a.register("stake_validators_sol"),
                (this.fee = o.fee || q),
                (this.feeData = o),
                (this.feePerByte = 0),
                (this.coefficient = 0),
                (this.reserveForStake = o.reserveForStake || G),
                (this.balances = {}),
                (this.tokens = {}),
                (this.bannedTokens = []),
                this.eventEmitter.on(v["WALLETS"].FINISH_LOADING_ALL, () =>
                  this.initTokenBalances(),
                ));
            }
            getPrivateKey() {
              return t.from(K(this, r), "hex");
            }
            loadWallet(t) {
              return C(this, null, function* () {
                const { Keypair: e } = yield this.loadLib(V),
                  { derivePath: i } = yield this.loadLib($),
                  { default: n } = yield this.loadLib(X),
                  o = i(z, t).key,
                  { secretKey: s, publicKey: a } = this.generateKeys(e, n, o);
                return (
                  L(
                    this,
                    r,
                    s.reduce((t, e) => t + e.toString(16).padStart(2, "0"), ""),
                  ),
                  (this.address = a.toString()),
                  this.getProvider("websocket").connection.onAccountChange(
                    a,
                    (t) => this.processAccountChange(t),
                    "confirmed",
                  ),
                  { id: this.id, privateKey: K(this, r), address: this.address }
                );
              });
            }
            processAccountChange(t) {
              ((this.balance = t.lamports),
                this.eventEmitter.emit("update", { id: this.id }));
            }
            createTransaction(t) {
              return C(this, arguments, function* ({ address: t, amount: e }) {
                const {
                  Transaction: i,
                  SystemProgram: r,
                  PublicKey: n,
                } = yield this.loadLib(V);
                return new i().add(
                  r.transfer({
                    fromPubkey: new n(this.address),
                    toPubkey: new n(t),
                    lamports: e,
                  }),
                );
              });
            }
            createTokenTransaction(t) {
              return C(
                this,
                arguments,
                function* ({
                  mint: t,
                  address: e,
                  amount: i,
                  decimals: r,
                  transfer: n,
                }) {
                  return {
                    mint: t,
                    address: e,
                    amount: i,
                    decimals: r,
                    transfer: n,
                  };
                },
              );
            }
            getFee() {
              return C(this, null, function* () {
                try {
                  const t = yield this.getProvider("balance").getFee();
                  return new this.BN(t);
                } catch (t) {
                  return new this.BN(this.fee);
                }
              });
            }
            getNftFee() {
              return this.getFee();
            }
            sendTransaction(t) {
              return C(this, null, function* () {
                if (t.transfer) {
                  const { mint: e, address: i, amount: r, decimals: n } = t;
                  return this.sendTokenTransaction({
                    mint: e,
                    address: i,
                    amount: r,
                    decimals: n,
                  });
                }
                const { Transaction: e, PublicKey: i } = yield this.loadLib(V);
                if (!(t instanceof e))
                  return this.getProvider("send").sendRawTransaction(t);
                const r = {
                  secretKey: this.getPrivateKey(),
                  publicKey: new i(this.address),
                };
                return this.getProvider("send").sendTransaction({
                  rawtx: t,
                  signer: r,
                });
              });
            }
            validateAddress(t) {
              return C(this, null, function* () {
                const { PublicKey: e } = yield this.loadLib(V);
                try {
                  const i = new e(t);
                  return e.isOnCurve(i);
                } catch (i) {
                  return !1;
                }
              });
            }
            generateKeys(t, e, i = null) {
              const { _keypair: r } = new t(
                i
                  ? e.sign.keyPair.fromSeed(i).secretKey
                  : e.sign.keyPair().secretKey,
              );
              return t.fromSecretKey(r);
            }
            createStakeAccount(t, e) {
              return C(this, null, function* () {
                const [
                    {
                      Keypair: i,
                      PublicKey: r,
                      Authorized: n,
                      Lockup: o,
                      StakeProgram: s,
                    },
                    { default: a },
                  ] = yield Promise.all([this.loadLib(V), this.loadLib(X)]),
                  { secretKey: u, publicKey: h } = this.generateKeys(i, a),
                  l = new r(t),
                  c = h,
                  d = u,
                  f = new n(l, l),
                  m = new o(0, 0, l),
                  p = Number(e),
                  v = s.createAccount({
                    fromPubkey: l,
                    stakePubkey: c,
                    authorized: f,
                    lockup: m,
                    lamports: p,
                  });
                return {
                  createStakeAccountInstructions: v.instructions,
                  stakePubkey: c,
                  stakeSeckey: d,
                  authorized: f,
                  lockup: m,
                };
              });
            }
            createDelegationTransaction(e) {
              return C(
                this,
                arguments,
                function* ({ validator: e, amount: i }) {
                  const {
                      PublicKey: n,
                      StakeProgram: o,
                      Transaction: s,
                    } = yield this.loadLib(V),
                    {
                      createStakeAccountInstructions: a,
                      stakePubkey: u,
                      stakeSeckey: l,
                      authorized: c,
                    } = yield this.createStakeAccount(this.address, i),
                    d = new n(e),
                    f = {
                      stakePubkey: u,
                      authorizedPubkey: c.staker,
                      votePubkey: d,
                    },
                    m = o.delegate(f),
                    p = [...a, ...m.instructions],
                    v = new s();
                  v.add(...p);
                  const g = [
                      {
                        publicKey: c.staker,
                        secretKey: t.from(K(this, r), "hex"),
                      },
                      { publicKey: u, secretKey: l },
                    ],
                    { blockhash: y } =
                      yield this.getProvider("node").getLatestBlock();
                  return (
                    (v.recentBlockhash = y),
                    (v.feePayer = c.staker),
                    v.sign(...g),
                    T.a.setAddrCache({
                      ticker: this.ticker,
                      type: h["STAKE_ADDR_TYPE"],
                      addresses: [u.toBase58()],
                    }),
                    v.serialize()
                  );
                },
              );
            }
            createDeactivateStakeTransaction(t) {
              return C(
                this,
                arguments,
                function* ({
                  stakeAccount: t,
                  ownerAddress: e = this.address,
                }) {
                  const { PublicKey: i, StakeProgram: r } =
                      yield this.loadLib(V),
                    n = new i(t),
                    o = new i(e),
                    s = { stakePubkey: n, authorizedPubkey: o };
                  return r.deactivate(s);
                },
              );
            }
            createUndelegationTransaction(t) {
              return C(
                this,
                arguments,
                function* ({
                  stakeAccount: t,
                  ownerAddress: e = this.address,
                  amount: i,
                }) {
                  const { PublicKey: r, StakeProgram: n } =
                      yield this.loadLib(V),
                    o = new r(t),
                    s = new r(e),
                    a = new r(e),
                    u = {
                      stakePubkey: o,
                      authorizedPubkey: s,
                      toPubkey: a,
                      custodianPubkey: s,
                      lamports: i,
                    };
                  return n.withdraw(u);
                },
              );
            }
            getInfo() {
              return C(this, arguments, function* (t = {}) {
                var e, i;
                if (!this.address)
                  throw new Error(
                    "SOL: trying to call getInfo before address is loaded",
                  );
                if (null == t ? void 0 : t.isToken) {
                  const r = yield this.getTokenInfo({ mint: t.mint });
                  return (
                    r &&
                      null !== r &&
                      this.tokens[
                        (null != (e = t.mint) ? e : "").toLowerCase()
                      ] &&
                      (this.tokens[
                        (null != (i = t.mint) ? i : "").toLowerCase()
                      ].balance = r),
                    { balance: this.balance, balances: this.balances }
                  );
                }
                const r = yield this.getProvider("balance").getBalance(
                  this.address,
                  !0,
                );
                r && (this.balance = r);
                const n = {
                    address: this.address,
                    ignoreCache: (null == t ? void 0 : t.ignoreCache) || !1,
                  },
                  o = yield this.getProvider("stake").getStakingBalance(n),
                  s = yield this.getFee(),
                  a = s.mul(new this.BN(Y)),
                  u = new this.BN(r)
                    .sub(new this.BN(a))
                    .sub(new this.BN(this.reserveForStake));
                o &&
                  ((o.availableForStake =
                    Number(u) > 0 ? this.toCurrencyUnit(u) : "0"),
                  (this.balances = o));
                const h = new Promise((t, e) => {
                  t({ balance: this.balance, balances: this.balances });
                });
                return (
                  (this.getInfoPromise = h),
                  setTimeout(() => {
                    this.getInfoPromise = void 0;
                  }, 3e4),
                  this.getInfoPromise
                );
              });
            }
            getAccountInfo(t) {
              return C(this, null, function* () {
                const { PublicKey: e } = yield this.loadLib(V);
                return this.getProvider("node").getAccountInfo(
                  new e(t || this.address),
                );
              });
            }
            getMinRent(t = Z) {
              return this.getProvider("node").getMinRent(t);
            }
            convertToPubkey(t) {
              return C(this, null, function* () {
                const { PublicKey: e } = yield this.loadLib(V);
                return new e(t);
              });
            }
            getPredefinedValidators() {
              return C(this, null, function* () {
                var t;
                const e = m["coinStakings"].find(
                  (t) =>
                    t.getName().toLowerCase() === this.ticker.toLowerCase(),
                );
                if (!e || (null == (t = e.validators) ? void 0 : t.length) > 0)
                  return;
                s.a.register("stake_validators_sol");
                const i = yield s.a
                  .get("stake_validators_sol")
                  .catch(
                    (t) => (
                      f.a.error(t),
                      w.find((t) => t.currency === this.ticker)
                    ),
                  );
                e.modifyPredefinedValidators(i);
              });
            }
            setPrivateKey(t) {
              L(this, r, t);
            }
            getTokenList() {
              return C(this, null, function* () {
                return (
                  (this.bannedTokens = yield this.getBannedTokenList()),
                  s.a
                    .get(o["ConfigKey"].SolTokens)
                    .then((t) => t)
                    .catch(
                      (t) => (
                        t instanceof p["UnknownConfigKeyError"] ||
                          f.a.error({ instance: this, error: t }),
                        []
                      ),
                    )
                );
              });
            }
            getBannedTokenList() {
              return s.a
                .get(o["ConfigKey"].SolTokensBanned)
                .catch(
                  (t) => (
                    t instanceof p["UnknownConfigKeyError"] ||
                      f.a.error({ instance: this, error: t }),
                    []
                  ),
                );
            }
            getUserTokenList() {
              return C(this, null, function* () {
                const t = this.getProvider(k["TOKEN_PROVIDER_OPERATION"]);
                if (!(null == t ? void 0 : t.getUserTokenList)) return [];
                const e = yield t.getUserTokenList(this.address);
                e.forEach((t) =>
                  C(this, null, function* () {
                    const e = this.tokens[t.mint.toLowerCase()];
                    e &&
                      ((e.decimal = t.tokenAmount.decimals),
                      (e.balance = t.tokenAmount.amount));
                  }),
                );
                const i = yield this.formUserTokensData(e);
                return i;
              });
            }
            isPublicKey(t) {
              return C(this, null, function* () {
                const { PublicKey: e } = yield this.loadLib(V);
                try {
                  return !!new e(t);
                } catch (i) {
                  return (console.error(i), !1);
                }
              });
            }
            formUserTokensData(t) {
              return C(this, null, function* () {
                const e = t.filter((t) => "0" !== t.tokenAmount.amount);
                return (yield Promise.allSettled(
                  e.map((t) =>
                    C(this, null, function* () {
                      const { mint: e } = t;
                      if (!(yield this.isPublicKey(e)))
                        return (console.error("Mint is invalid"), null);
                      const { data: i } = yield u["solTrackerClient"].get(
                        "/tokens/" + e,
                      );
                      if (i) {
                        const { token: r, pools: n = [] } = i,
                          {
                            name: o,
                            symbol: s,
                            decimals: a,
                            image: u,
                          } = null != r ? r : {};
                        if (n.length > 0) {
                          const i = n.reduce(
                            (t, e) => t + Number(e.liquidity.usd),
                            0,
                          );
                          if (i > 0) {
                            const i = {
                              mint: e,
                              isNative: Object(b["sanitizeBoolean"])(
                                t.isNative,
                              ),
                              owner: Object(b["sanitizeString"])(t.isNative),
                              state: Object(b["sanitizeString"])(t.state),
                              tokenAmount: {
                                amount: Object(b["sanitizeString"])(
                                  t.tokenAmount.amount,
                                ),
                                decimals: Object(b["sanitizeNumber"])(
                                  t.tokenAmount.decimals,
                                ),
                                uiAmount: Object(b["sanitizeNumber"])(
                                  t.tokenAmount.uiAmount,
                                ),
                                uiAmountString: Object(b["sanitizeString"])(
                                  t.tokenAmount.uiAmountString,
                                ),
                              },
                            };
                            return x(N({}, i), {
                              symbol: Object(b["sanitizeString"])(s),
                              name: Object(b["sanitizeString"])(o),
                              decimals: Object(b["sanitizeNumber"])(a),
                              imgUri: Object(b["sanitizeUrl"])(u),
                            });
                          }
                        }
                      }
                      return null;
                    }),
                  ),
                ))
                  .filter((t) => "fulfilled" === t.status && !!t.value)
                  .map((t) => t.value);
              });
            }
            getTokenFromCommonList(t, e) {
              return {
                name: t.name,
                ticker: t.symbol,
                decimal: t.decimal || 0,
                contract: t.mint.toLowerCase(),
                parentTicker: this.ticker,
                uniqueField: t.mint.toLowerCase(),
                visibility: !1 !== t.visibility,
                confirmed: t.confirmed,
                source: t.source || e,
                mint: t.mint,
                notify: Boolean(t.notify),
                imgUri: t.imgUri,
              };
            }
            getTokenFromUserList(t, e) {
              return x(
                N(
                  {},
                  this.getTokenFromCommonList(
                    x(N({}, t), { decimal: t.decimals }),
                    e,
                  ),
                ),
                { notify: t.notify },
              );
            }
            createToken(t) {
              return new M["SOLToken"](N({ parent: this }, t));
            }
            getTokenInfo(t) {
              return C(this, arguments, function* ({ mint: t }) {
                const e = yield this.getProvider(
                  k["NODE_PROVIDER_OPERATION"],
                ).getTokenBalance({ address: this.address, mint: t });
                return e;
              });
            }
            sendTokenTransaction(t) {
              return C(
                this,
                arguments,
                function* ({ mint: t, address: e, amount: i, decimals: r }) {
                  return this.getProvider(
                    k["TOKEN_PROVIDER_OPERATION"],
                  ).sendTokenTransaction(this, t, e, i, r);
                },
              );
            }
            getTransactions(t) {
              return C(this, null, function* () {
                try {
                  if (!this.address)
                    throw new Error(
                      `[${this.ticker}] getTransactions error: address is not loaded`,
                    );
                  return this.getProvider("history").getTransactions(
                    N({ address: this.address }, t),
                  );
                } catch (e) {
                  return (console.error(e), this.transactions || []);
                }
              });
            }
            getSwapTransaction(t, e, i) {
              return C(this, null, function* () {
                try {
                  return this.getProvider("history").getSwapTransaction(
                    t,
                    e,
                    i,
                  );
                } catch (r) {
                  return (console.error(r), null);
                }
              });
            }
            createCustomToken(t, e) {
              return C(
                this,
                arguments,
                function* ({ name: t, ticker: e, mint: i, imgUri: r }, n) {
                  const o = i.toLowerCase();
                  if (this.tokens[o]) return this.tokens[o];
                  const s = this.getProvider(k["NODE_PROVIDER_OPERATION"]),
                    [a, u] = yield Promise.all([
                      s.getTokenInfo({ mint: i }),
                      s.getTokenBalance({ mint: i }),
                    ]),
                    h = {
                      name: t,
                      ticker: e,
                      mint: i,
                      imgUri: r,
                      parent: this,
                      balance: u,
                      decimal: a.value.data.parsed.info.decimals,
                      contract: o,
                      confirmed: !0,
                    },
                    l = new M["SOLToken"](h);
                  return (
                    yield this.insertTokensToDb([
                      {
                        name: t,
                        ticker: e,
                        decimal: h.decimal,
                        contract: o,
                        parentTicker: "SOL",
                        source: "custom",
                        uniqueField: o,
                        visibility: !1,
                        confirmed: !0,
                        mint: h.mint,
                        imgUri: h.imgUri,
                      },
                    ]),
                    (this.tokens[o] = l),
                    n.addWallet(l),
                    yield l.getInfo(),
                    l
                  );
                },
              );
            }
            initTokenBalances() {
              return C(this, null, function* () {
                const t =
                    (yield this.getProvider("websocket").getTokensBalances(
                      this.address,
                    )) || [],
                  e = Object.keys(t).reduce(
                    (e, i) => ((e[i.toLowerCase()] = t[i]), e),
                    {},
                  ),
                  i = new Set(Object.keys(e)),
                  r = Object.keys(this.tokens),
                  n = r.filter((t) => i.has(t)),
                  o = r.filter((t) => !i.has(t));
                yield new Promise((t, i) => {
                  try {
                    (n.forEach((t) => {
                      ((this.tokens[t].balance = e[t]),
                        this.eventEmitter.emit("update", {
                          id: this.tokens[t].id,
                        }));
                    }),
                      o.forEach((t) => {
                        ((this.tokens[t].balance = "0"),
                          this.eventEmitter.emit("update", {
                            id: this.tokens[t].id,
                          }));
                      }),
                      t(void 0));
                  } catch (r) {
                    (console.error(r), i(r));
                  }
                });
              });
            }
          }
          ((r = new WeakMap()), (e["default"] = SOLCoin));
        }.call(this, i(2).Buffer));
    },
    2798: function (t, e) {},
    2799: function (t, e) {},
    2807: function (t, e) {},
    3269: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "NftMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }));
      var n = r(i(823));
    },
    3414: function (t, e, i) {
      "use strict";
      (function (t, r) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, i, r) {
                  (void 0 === r && (r = i),
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[i];
                      },
                    }));
                }
              : function (t, e, i, r) {
                  (void 0 === r && (r = i), (t[r] = e[i]));
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t["default"] = e;
                }),
          s =
            (this && this.__decorate) ||
            function (t, e, i, r) {
              var n,
                o = arguments.length,
                s =
                  o < 3
                    ? e
                    : null === r
                      ? (r = Object.getOwnPropertyDescriptor(e, i))
                      : r;
              if (
                "object" === typeof Reflect &&
                "function" === typeof Reflect.decorate
              )
                s = Reflect.decorate(t, e, i, r);
              else
                for (var a = t.length - 1; a >= 0; a--)
                  (n = t[a]) &&
                    (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
              return (o > 3 && s && Object.defineProperty(e, i, s), s);
            },
          a =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var i in t)
                  "default" !== i &&
                    Object.hasOwnProperty.call(t, i) &&
                    n(e, t, i);
              return (o(e, t), e);
            },
          u =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.deserializeUnchecked =
            e.deserialize =
            e.serialize =
            e.BinaryReader =
            e.BinaryWriter =
            e.BorshError =
            e.baseDecode =
            e.baseEncode =
              void 0));
        const h = u(i(4920)),
          l = u(i(234)),
          c = a(i(843)),
          d =
            "function" !== typeof t.TextDecoder ? c.TextDecoder : t.TextDecoder,
          f = new d("utf-8", { fatal: !0 });
        function m(t) {
          return (
            "string" === typeof t && (t = r.from(t, "utf8")),
            l.default.encode(r.from(t))
          );
        }
        function p(t) {
          return r.from(l.default.decode(t));
        }
        ((e.baseEncode = m), (e.baseDecode = p));
        const v = 1024;
        class BorshError extends Error {
          constructor(t) {
            (super(t), (this.fieldPath = []), (this.originalMessage = t));
          }
          addToFieldPath(t) {
            (this.fieldPath.splice(0, 0, t),
              (this.message =
                this.originalMessage + ": " + this.fieldPath.join(".")));
          }
        }
        e.BorshError = BorshError;
        class BinaryWriter {
          constructor() {
            ((this.buf = r.alloc(v)), (this.length = 0));
          }
          maybeResize() {
            this.buf.length < 16 + this.length &&
              (this.buf = r.concat([this.buf, r.alloc(v)]));
          }
          writeU8(t) {
            (this.maybeResize(),
              this.buf.writeUInt8(t, this.length),
              (this.length += 1));
          }
          writeU16(t) {
            (this.maybeResize(),
              this.buf.writeUInt16LE(t, this.length),
              (this.length += 2));
          }
          writeU32(t) {
            (this.maybeResize(),
              this.buf.writeUInt32LE(t, this.length),
              (this.length += 4));
          }
          writeU64(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 8))));
          }
          writeU128(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 16))));
          }
          writeU256(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 32))));
          }
          writeU512(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 64))));
          }
          writeBuffer(t) {
            ((this.buf = r.concat([
              r.from(this.buf.subarray(0, this.length)),
              t,
              r.alloc(v),
            ])),
              (this.length += t.length));
          }
          writeString(t) {
            this.maybeResize();
            const e = r.from(t, "utf8");
            (this.writeU32(e.length), this.writeBuffer(e));
          }
          writeFixedArray(t) {
            this.writeBuffer(r.from(t));
          }
          writeArray(t, e) {
            (this.maybeResize(), this.writeU32(t.length));
            for (const i of t) (this.maybeResize(), e(i));
          }
          toArray() {
            return this.buf.subarray(0, this.length);
          }
        }
        function g(t, e, i) {
          const r = i.value;
          i.value = function () {
            try {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              return r.apply(this, e);
            } catch (n) {
              if (n instanceof RangeError) {
                const t = n.code;
                if (
                  ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(t) >=
                  0
                )
                  throw new BorshError(
                    "Reached the end of buffer when deserializing",
                  );
              }
              throw n;
            }
          };
        }
        e.BinaryWriter = BinaryWriter;
        class BinaryReader {
          constructor(t) {
            ((this.buf = t), (this.offset = 0));
          }
          readU8() {
            const t = this.buf.readUInt8(this.offset);
            return ((this.offset += 1), t);
          }
          readU16() {
            const t = this.buf.readUInt16LE(this.offset);
            return ((this.offset += 2), t);
          }
          readU32() {
            const t = this.buf.readUInt32LE(this.offset);
            return ((this.offset += 4), t);
          }
          readU64() {
            const t = this.readBuffer(8);
            return new h.default(t, "le");
          }
          readU128() {
            const t = this.readBuffer(16);
            return new h.default(t, "le");
          }
          readU256() {
            const t = this.readBuffer(32);
            return new h.default(t, "le");
          }
          readU512() {
            const t = this.readBuffer(64);
            return new h.default(t, "le");
          }
          readBuffer(t) {
            if (this.offset + t > this.buf.length)
              throw new BorshError(
                `Expected buffer length ${t} isn't within bounds`,
              );
            const e = this.buf.slice(this.offset, this.offset + t);
            return ((this.offset += t), e);
          }
          readString() {
            const t = this.readU32(),
              e = this.readBuffer(t);
            try {
              return f.decode(e);
            } catch (i) {
              throw new BorshError("Error decoding UTF-8 string: " + i);
            }
          }
          readFixedArray(t) {
            return new Uint8Array(this.readBuffer(t));
          }
          readArray(t) {
            const e = this.readU32(),
              i = Array();
            for (let r = 0; r < e; ++r) i.push(t());
            return i;
          }
        }
        function y(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function w(t, e, i, r, n) {
          try {
            if ("string" === typeof r) n["write" + y(r)](i);
            else if (r instanceof Array)
              if ("number" === typeof r[0]) {
                if (i.length !== r[0])
                  throw new BorshError(
                    `Expecting byte array of length ${r[0]}, but got ${i.length} bytes`,
                  );
                n.writeFixedArray(i);
              } else if (2 === r.length && "number" === typeof r[1]) {
                if (i.length !== r[1])
                  throw new BorshError(
                    `Expecting byte array of length ${r[1]}, but got ${i.length} bytes`,
                  );
                for (let e = 0; e < r[1]; e++) w(t, null, i[e], r[0], n);
              } else
                n.writeArray(i, (i) => {
                  w(t, e, i, r[0], n);
                });
            else if (void 0 !== r.kind)
              switch (r.kind) {
                case "option":
                  null === i || void 0 === i
                    ? n.writeU8(0)
                    : (n.writeU8(1), w(t, e, i, r.type, n));
                  break;
                default:
                  throw new BorshError(`FieldType ${r} unrecognized`);
              }
            else M(t, i, n);
          } catch (o) {
            throw (o instanceof BorshError && o.addToFieldPath(e), o);
          }
        }
        function M(t, e, i) {
          if ("function" === typeof e.borshSerialize)
            return void e.borshSerialize(i);
          const r = t.get(e.constructor);
          if (!r)
            throw new BorshError(
              `Class ${e.constructor.name} is missing in schema`,
            );
          if ("struct" === r.kind)
            r.fields.map((r) => {
              let [n, o] = r;
              w(t, n, e[n], o, i);
            });
          else {
            if ("enum" !== r.kind)
              throw new BorshError(
                `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`,
              );
            {
              const n = e[r.field];
              for (let o = 0; o < r.values.length; ++o) {
                const [s, a] = r.values[o];
                if (s === n) {
                  (i.writeU8(o), w(t, s, e[s], a, i));
                  break;
                }
              }
            }
          }
        }
        function b(t, e, i) {
          void 0 === i && (i = BinaryWriter);
          const r = new i();
          return (M(t, e, r), r.toArray());
        }
        function _(t, e, i, r) {
          try {
            if ("string" === typeof i) return r["read" + y(i)]();
            if (i instanceof Array) {
              if ("number" === typeof i[0]) return r.readFixedArray(i[0]);
              if ("number" === typeof i[1]) {
                const e = [];
                for (let n = 0; n < i[1]; n++) e.push(_(t, null, i[0], r));
                return e;
              }
              return r.readArray(() => _(t, e, i[0], r));
            }
            if ("option" === i.kind) {
              const n = r.readU8();
              return n ? _(t, e, i.type, r) : void 0;
            }
            return T(t, i, r);
          } catch (n) {
            throw (n instanceof BorshError && n.addToFieldPath(e), n);
          }
        }
        function T(t, e, i) {
          if ("function" === typeof e.borshDeserialize)
            return e.borshDeserialize(i);
          const r = t.get(e);
          if (!r) throw new BorshError(`Class ${e.name} is missing in schema`);
          if ("struct" === r.kind) {
            const r = {};
            for (const [n, o] of t.get(e).fields) r[n] = _(t, n, o, i);
            return new e(r);
          }
          if ("enum" === r.kind) {
            const n = i.readU8();
            if (n >= r.values.length)
              throw new BorshError(`Enum index: ${n} is out of range`);
            const [o, s] = r.values[n],
              a = _(t, o, s, i);
            return new e({ [o]: a });
          }
          throw new BorshError(
            `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`,
          );
        }
        function A(t, e, i, r) {
          void 0 === r && (r = BinaryReader);
          const n = new r(i),
            o = T(t, e, n);
          if (n.offset < i.length)
            throw new BorshError(
              `Unexpected ${i.length - n.offset} bytes after deserialized data`,
            );
          return o;
        }
        function k(t, e, i, r) {
          void 0 === r && (r = BinaryReader);
          const n = new r(i);
          return T(t, e, n);
        }
        (s([g], BinaryReader.prototype, "readU8", null),
          s([g], BinaryReader.prototype, "readU16", null),
          s([g], BinaryReader.prototype, "readU32", null),
          s([g], BinaryReader.prototype, "readU64", null),
          s([g], BinaryReader.prototype, "readU128", null),
          s([g], BinaryReader.prototype, "readU256", null),
          s([g], BinaryReader.prototype, "readU512", null),
          s([g], BinaryReader.prototype, "readString", null),
          s([g], BinaryReader.prototype, "readFixedArray", null),
          s([g], BinaryReader.prototype, "readArray", null),
          (e.BinaryReader = BinaryReader),
          (e.serialize = b),
          (e.deserialize = A),
          (e.deserializeUnchecked = k));
      }).call(this, i(13), i(2).Buffer);
    },
    4259: function (t, e, i) {
      "use strict";
      (function (t) {
        var r =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getFilteredProgramAccounts =
            e.getNameOwner =
            e.getNameAccountKey =
            e.getHashedName =
            e.signAndSendTransactionInstructions =
            e.Numberu64 =
            e.Numberu32 =
              void 0));
        const n = r(i(229)),
          o = i(2764),
          s = i(1),
          a = r(i(5891)),
          u = i(4922),
          h = i(4626);
        class Numberu32 extends a.default {
          toBuffer() {
            const e = super.toArray().reverse(),
              i = t.from(e);
            if (4 === i.length) return i;
            (0, n.default)(i.length < 4, "Numberu32 too large");
            const r = t.alloc(4);
            return (i.copy(r), r);
          }
          static fromBuffer(t) {
            return (
              (0, n.default)(
                4 === t.length,
                "Invalid buffer length: " + t.length,
              ),
              new a.default(
                [...t]
                  .reverse()
                  .map((t) => ("00" + t.toString(16)).slice(-2))
                  .join(""),
                16,
              )
            );
          }
        }
        e.Numberu32 = Numberu32;
        class Numberu64 extends a.default {
          toBuffer() {
            const e = super.toArray().reverse(),
              i = t.from(e);
            if (8 === i.length) return i;
            (0, n.default)(i.length < 8, "Numberu64 too large");
            const r = t.alloc(8);
            return (i.copy(r), r);
          }
          static fromBuffer(t) {
            return (
              (0, n.default)(
                8 === t.length,
                "Invalid buffer length: " + t.length,
              ),
              new a.default(
                [...t]
                  .reverse()
                  .map((t) => ("00" + t.toString(16)).slice(-2))
                  .join(""),
                16,
              )
            );
          }
        }
        e.Numberu64 = Numberu64;
        const l = async (t, e, i, r) => {
          const n = new s.Transaction();
          return (
            (n.feePayer = i.publicKey),
            e.push(i),
            n.add(...r),
            await t.sendTransaction(n, e)
          );
        };
        async function c(t) {
          const e = u.HASH_PREFIX + t,
            i = (0, o.createHash)("sha256").update(e, "utf8").digest();
          return i;
        }
        async function d(e, i, r) {
          const n = [e];
          (i ? n.push(i.toBuffer()) : n.push(t.alloc(32)),
            r ? n.push(r.toBuffer()) : n.push(t.alloc(32)));
          const [o] = await s.PublicKey.findProgramAddress(
            n,
            u.NAME_PROGRAM_ID,
          );
          return o;
        }
        async function f(t, e) {
          const i = await t.getAccountInfo(e);
          if (!i) throw new Error("Unable to find the given account.");
          return h.NameRegistryState.retrieve(t, e);
        }
        async function m(t, e, i) {
          const r = await t.getProgramAccounts(e, {
            commitment: t.commitment,
            filters: i,
            encoding: "base64",
          });
          return r.map((t) => {
            let {
              pubkey: e,
              account: { data: i, executable: r, owner: n, lamports: o },
            } = t;
            return {
              publicKey: e,
              accountInfo: { data: i, executable: r, owner: n, lamports: o },
            };
          });
        }
        ((e.signAndSendTransactionInstructions = l),
          (e.getHashedName = c),
          (e.getNameAccountKey = d),
          (e.getNameOwner = f),
          (e.getFilteredProgramAccounts = m));
      }).call(this, i(2).Buffer);
    },
    4625: function (t, e, i) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          function (t, e, i, r) {
            function n(t) {
              return t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  });
            }
            return new (i || (i = Promise))(function (i, o) {
              function s(t) {
                try {
                  u(r.next(t));
                } catch (e) {
                  o(e);
                }
              }
              function a(t) {
                try {
                  u(r["throw"](t));
                } catch (e) {
                  o(e);
                }
              }
              function u(t) {
                t.done ? i(t.value) : n(t.value).then(s, a);
              }
              u((r = r.apply(t, e || [])).next());
            });
          },
        n =
          (this && this.__generator) ||
          function (t, e) {
            var i,
              r,
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
                return u([t, e]);
              };
            }
            function u(o) {
              if (i) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((i = 1),
                    r &&
                      (n =
                        2 & o[0]
                          ? r["return"]
                          : o[0]
                            ? r["throw"] || ((n = r["return"]) && n.call(r), 0)
                            : r.next) &&
                      !(n = n.call(r, o[1])).done)
                  )
                    return n;
                  switch (((r = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (r = o[1]), (o = [0]));
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
                  ((o = [6, a]), (r = 0));
                } finally {
                  i = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.createConnectionConfig =
          e.isValidSolanaAddress =
          e.getSolanaMetadataAddress =
          e.decodeTokenMetadata =
            void 0));
      var o = i(3414),
        s = i(1),
        a = i(7190),
        u = i(7191);
      (0, u.extendBorsh)();
      var h = new s.PublicKey(a.METADATA_PROGRAM),
        l = h.toBuffer(),
        c = new TextEncoder().encode(a.METADATA_PREFIX),
        d = function (t) {
          return r(void 0, void 0, void 0, function () {
            return n(this, function (e) {
              return [
                2,
                (0, o.deserializeUnchecked)(a.METADATA_SCHEMA, a.Metadata, t),
              ];
            });
          });
        };
      function f(t) {
        return r(this, void 0, void 0, function () {
          var e;
          return n(this, function (i) {
            switch (i.label) {
              case 0:
                return (
                  (e = new s.PublicKey(a.METADATA_PROGRAM)),
                  [4, s.PublicKey.findProgramAddress([c, l, t.toBuffer()], e)]
                );
              case 1:
                return [2, i.sent()[0]];
            }
          });
        });
      }
      ((e.decodeTokenMetadata = d), (e.getSolanaMetadataAddress = f));
      var m = function (t) {
        try {
          return (new s.PublicKey(t), !0);
        } catch (e) {
          return !1;
        }
      };
      e.isValidSolanaAddress = m;
      var p = function (t, e) {
        return (
          void 0 === t && (t = (0, s.clusterApiUrl)("mainnet-beta")),
          void 0 === e && (e = "confirmed"),
          new s.Connection(t, e)
        );
      };
      e.createConnectionConfig = p;
    },
    4626: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.NameRegistryState = void 0));
      const r = i(1),
        n = i(5892);
      class NameRegistryState {
        constructor(t) {
          ((this.parentName = new r.PublicKey(t.parentName)),
            (this.owner = new r.PublicKey(t.owner)),
            (this.class = new r.PublicKey(t.class)));
        }
        static async retrieve(t, e) {
          var i;
          const r = await t.getAccountInfo(e, "processed");
          if (!r) throw new Error("Invalid name account provided");
          const o = (0, n.deserializeUnchecked)(
            this.schema,
            NameRegistryState,
            r.data,
          );
          return (
            (o.data =
              null === (i = r.data) || void 0 === i
                ? void 0
                : i.slice(this.HEADER_LEN)),
            o
          );
        }
      }
      ((e.NameRegistryState = NameRegistryState),
        (NameRegistryState.HEADER_LEN = 96),
        (NameRegistryState.schema = new Map([
          [
            NameRegistryState,
            {
              kind: "struct",
              fields: [
                ["parentName", [32]],
                ["owner", [32]],
                ["class", [32]],
              ],
            },
          ],
        ])));
    },
    4920: function (t, e, i) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var i = function () {};
            ((i.prototype = e.prototype),
              (t.prototype = new i()),
              (t.prototype.constructor = t));
          }
          function o(t, e, i) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((i = e), (e = 10)),
                this._init(t || 0, e || 10, i || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : i(4921).Buffer;
          } catch (S) {}
          function a(t, e) {
            var i = t.charCodeAt(e);
            return i >= 48 && i <= 57
              ? i - 48
              : i >= 65 && i <= 70
                ? i - 55
                : i >= 97 && i <= 102
                  ? i - 87
                  : void r(!1, "Invalid character in " + t);
          }
          function u(t, e, i) {
            var r = a(t, i);
            return (i - 1 >= e && (r |= a(t, i - 1) << 4), r);
          }
          function h(t, e, i, n) {
            for (
              var o = 0, s = 0, a = Math.min(t.length, i), u = e;
              u < a;
              u++
            ) {
              var h = t.charCodeAt(u) - 48;
              ((o *= n),
                (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                r(h >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, i) {
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
                      "le" === i && this._initArray(this.toArray(), e, i))));
            }),
            (o.prototype._initNumber = function (t, e, i) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
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
            (o.prototype._initArray = function (t, e, i) {
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
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, i) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === i)
                for (r = t.length - 1; r >= e; r -= 2)
                  ((n = u(t, e, r) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var a = t.length - e;
                for (r = a % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  ((n = u(t, e, r) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, i) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
              (r--, (n = (n / e) | 0));
              for (
                var o = t.length - i,
                  s = o % r,
                  a = Math.min(o, o - s) + i,
                  u = 0,
                  l = i;
                l < a;
                l += r
              )
                ((u = h(t, l, l + r, e)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var c = 1;
                for (u = h(t, l, t.length, e), l = 0; l < s; l++) c *= e;
                (this.imuln(c),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
            } catch (S) {
              o.prototype.inspect = c;
            }
          else o.prototype.inspect = c;
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var d = [
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
            f = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            m = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var i;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              i = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << n) | o)).toString(16);
                ((o = (a >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (i =
                    0 !== o || s !== this.length - 1
                      ? d[6 - u.length] + u + i
                      : u + i));
              }
              0 !== o && (i = o.toString(16) + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = f[t],
                l = m[t];
              i = "";
              var c = this.clone();
              c.negative = 0;
              while (!c.isZero()) {
                var p = c.modrn(l).toString(t);
                ((c = c.idivn(l)),
                  (i = c.isZero() ? p + i : d[h - p.length] + p + i));
              }
              this.isZero() && (i = "0" + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
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
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var p = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function v(t) {
            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
              var r = (i / 26) | 0,
                n = i % 26;
              e[i] = (t.words[r] >>> n) & 1;
            }
            return e;
          }
          function g(t, e, i) {
            i.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            ((i.length = r), (r = (r - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0;
            i.words[0] = a;
            for (var h = 1; h < r; h++) {
              for (
                var l = u >>> 26,
                  c = 67108863 & u,
                  d = Math.min(h, e.length - 1),
                  f = Math.max(0, h - t.length + 1);
                f <= d;
                f++
              ) {
                var m = (h - f) | 0;
                ((n = 0 | t.words[m]),
                  (o = 0 | e.words[f]),
                  (s = n * o + c),
                  (l += (s / 67108864) | 0),
                  (c = 67108863 & s));
              }
              ((i.words[h] = 0 | c), (u = 0 | l));
            }
            return (0 !== u ? (i.words[h] = 0 | u) : i.length--, i._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, i) {
            this._strip();
            var n = this.byteLength(),
              o = i || Math.max(1, n);
            (r(n <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0"));
            var s = p(t, o),
              a = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + a](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var i = 0, r = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | r;
                ((t[i++] = 255 & s),
                  i < t.length && (t[i++] = (s >> 8) & 255),
                  i < t.length && (t[i++] = (s >> 16) & 255),
                  6 === o
                    ? (i < t.length && (t[i++] = (s >> 24) & 255),
                      (r = 0),
                      (o = 0))
                    : ((r = s >>> 24), (o += 2)));
              }
              if (i < t.length) {
                t[i++] = r;
                while (i < t.length) t[i++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var i = t.length - 1, r = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | r;
                ((t[i--] = 255 & s),
                  i >= 0 && (t[i--] = (s >> 8) & 255),
                  i >= 0 && (t[i--] = (s >> 16) & 255),
                  6 === o
                    ? (i >= 0 && (t[i--] = (s >> 24) & 255), (r = 0), (o = 0))
                    : ((r = s >>> 24), (o += 2)));
              }
              if (i >= 0) {
                t[i--] = r;
                while (i >= 0) t[i--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    i = 0;
                  return (
                    e >= 4096 && ((i += 13), (e >>>= 13)),
                    e >= 64 && ((i += 7), (e >>>= 7)),
                    e >= 8 && ((i += 4), (e >>>= 4)),
                    e >= 2 && ((i += 2), (e >>>= 2)),
                    i + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                i = 0;
              return (
                0 === (8191 & e) && ((i += 13), (e >>>= 13)),
                0 === (127 & e) && ((i += 7), (e >>>= 7)),
                0 === (15 & e) && ((i += 4), (e >>>= 4)),
                0 === (3 & e) && ((i += 2), (e >>>= 2)),
                0 === (1 & e) && i++,
                i
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var i = this._zeroBits(this.words[e]);
                if (((t += i), 26 !== i)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var i = 0; i < e.length; i++)
                this.words[i] = this.words[i] & t.words[i];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, i;
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var r = 0; r < i.length; r++)
                this.words[r] = e.words[r] ^ i.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                i = t % 26;
              (this._expand(e), i > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                i > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var i = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(i + 1),
                (this.words[i] = e
                  ? this.words[i] | (1 << n)
                  : this.words[i] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, i, r;
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
                ? ((i = this), (r = t))
                : ((i = t), (r = this));
              for (var n = 0, o = 0; o < r.length; o++)
                ((e = (0 | i.words[o]) + (0 | r.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && o < i.length; o++)
                ((e = (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = i.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (i !== this)
                for (; o < i.length; o++) this.words[o] = i.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
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
              var i,
                r,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
              for (var o = 0, s = 0; s < r.length; s++)
                ((e = (0 | i.words[s]) - (0 | r.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== o && s < i.length; s++)
                ((e = (0 | i.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === o && s < i.length && i !== this)
                for (; s < i.length; s++) this.words[s] = i.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                i !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, e, i) {
            var r,
              n,
              o,
              s = t.words,
              a = e.words,
              u = i.words,
              h = 0,
              l = 0 | s[0],
              c = 8191 & l,
              d = l >>> 13,
              f = 0 | s[1],
              m = 8191 & f,
              p = f >>> 13,
              v = 0 | s[2],
              g = 8191 & v,
              y = v >>> 13,
              w = 0 | s[3],
              M = 8191 & w,
              b = w >>> 13,
              _ = 0 | s[4],
              T = 8191 & _,
              A = _ >>> 13,
              k = 0 | s[5],
              R = 8191 & k,
              E = k >>> 13,
              O = 0 | s[6],
              P = 8191 & O,
              S = O >>> 13,
              I = 0 | s[7],
              B = 8191 & I,
              N = I >>> 13,
              x = 0 | s[8],
              j = 8191 & x,
              K = x >>> 13,
              U = 0 | s[9],
              L = 8191 & U,
              C = U >>> 13,
              D = 0 | a[0],
              F = 8191 & D,
              z = D >>> 13,
              W = 0 | a[1],
              H = 8191 & W,
              q = W >>> 13,
              G = 0 | a[2],
              Y = 8191 & G,
              Z = G >>> 13,
              V = 0 | a[3],
              $ = 8191 & V,
              X = V >>> 13,
              J = 0 | a[4],
              Q = 8191 & J,
              tt = J >>> 13,
              et = 0 | a[5],
              it = 8191 & et,
              rt = et >>> 13,
              nt = 0 | a[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ht = at >>> 13,
              lt = 0 | a[8],
              ct = 8191 & lt,
              dt = lt >>> 13,
              ft = 0 | a[9],
              mt = 8191 & ft,
              pt = ft >>> 13;
            ((i.negative = t.negative ^ e.negative),
              (i.length = 19),
              (r = Math.imul(c, F)),
              (n = Math.imul(c, z)),
              (n = (n + Math.imul(d, F)) | 0),
              (o = Math.imul(d, z)));
            var vt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(m, F)),
              (n = Math.imul(m, z)),
              (n = (n + Math.imul(p, F)) | 0),
              (o = Math.imul(p, z)),
              (r = (r + Math.imul(c, H)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (n = (n + Math.imul(d, H)) | 0),
              (o = (o + Math.imul(d, q)) | 0));
            var gt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(g, F)),
              (n = Math.imul(g, z)),
              (n = (n + Math.imul(y, F)) | 0),
              (o = Math.imul(y, z)),
              (r = (r + Math.imul(m, H)) | 0),
              (n = (n + Math.imul(m, q)) | 0),
              (n = (n + Math.imul(p, H)) | 0),
              (o = (o + Math.imul(p, q)) | 0),
              (r = (r + Math.imul(c, Y)) | 0),
              (n = (n + Math.imul(c, Z)) | 0),
              (n = (n + Math.imul(d, Y)) | 0),
              (o = (o + Math.imul(d, Z)) | 0));
            var yt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(M, F)),
              (n = Math.imul(M, z)),
              (n = (n + Math.imul(b, F)) | 0),
              (o = Math.imul(b, z)),
              (r = (r + Math.imul(g, H)) | 0),
              (n = (n + Math.imul(g, q)) | 0),
              (n = (n + Math.imul(y, H)) | 0),
              (o = (o + Math.imul(y, q)) | 0),
              (r = (r + Math.imul(m, Y)) | 0),
              (n = (n + Math.imul(m, Z)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (o = (o + Math.imul(p, Z)) | 0),
              (r = (r + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(c, X)) | 0),
              (n = (n + Math.imul(d, $)) | 0),
              (o = (o + Math.imul(d, X)) | 0));
            var wt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(T, F)),
              (n = Math.imul(T, z)),
              (n = (n + Math.imul(A, F)) | 0),
              (o = Math.imul(A, z)),
              (r = (r + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(b, H)) | 0),
              (o = (o + Math.imul(b, q)) | 0),
              (r = (r + Math.imul(g, Y)) | 0),
              (n = (n + Math.imul(g, Z)) | 0),
              (n = (n + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, Z)) | 0),
              (r = (r + Math.imul(m, $)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (o = (o + Math.imul(p, X)) | 0),
              (r = (r + Math.imul(c, Q)) | 0),
              (n = (n + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(d, Q)) | 0),
              (o = (o + Math.imul(d, tt)) | 0));
            var Mt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(R, F)),
              (n = Math.imul(R, z)),
              (n = (n + Math.imul(E, F)) | 0),
              (o = Math.imul(E, z)),
              (r = (r + Math.imul(T, H)) | 0),
              (n = (n + Math.imul(T, q)) | 0),
              (n = (n + Math.imul(A, H)) | 0),
              (o = (o + Math.imul(A, q)) | 0),
              (r = (r + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, Z)) | 0),
              (r = (r + Math.imul(g, $)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (n = (n + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, X)) | 0),
              (r = (r + Math.imul(m, Q)) | 0),
              (n = (n + Math.imul(m, tt)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (o = (o + Math.imul(p, tt)) | 0),
              (r = (r + Math.imul(c, it)) | 0),
              (n = (n + Math.imul(c, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (o = (o + Math.imul(d, rt)) | 0));
            var bt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (r = Math.imul(P, F)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(S, F)) | 0),
              (o = Math.imul(S, z)),
              (r = (r + Math.imul(R, H)) | 0),
              (n = (n + Math.imul(R, q)) | 0),
              (n = (n + Math.imul(E, H)) | 0),
              (o = (o + Math.imul(E, q)) | 0),
              (r = (r + Math.imul(T, Y)) | 0),
              (n = (n + Math.imul(T, Z)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, Z)) | 0),
              (r = (r + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (o = (o + Math.imul(b, X)) | 0),
              (r = (r + Math.imul(g, Q)) | 0),
              (n = (n + Math.imul(g, tt)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (r = (r + Math.imul(m, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (o = (o + Math.imul(p, rt)) | 0),
              (r = (r + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0));
            var _t = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(B, F)),
              (n = Math.imul(B, z)),
              (n = (n + Math.imul(N, F)) | 0),
              (o = Math.imul(N, z)),
              (r = (r + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(S, H)) | 0),
              (o = (o + Math.imul(S, q)) | 0),
              (r = (r + Math.imul(R, Y)) | 0),
              (n = (n + Math.imul(R, Z)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (o = (o + Math.imul(E, Z)) | 0),
              (r = (r + Math.imul(T, $)) | 0),
              (n = (n + Math.imul(T, X)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (o = (o + Math.imul(A, X)) | 0),
              (r = (r + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (r = (r + Math.imul(g, it)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (n = (n + Math.imul(y, it)) | 0),
              (o = (o + Math.imul(y, rt)) | 0),
              (r = (r + Math.imul(m, ot)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (o = (o + Math.imul(p, st)) | 0),
              (r = (r + Math.imul(c, ut)) | 0),
              (n = (n + Math.imul(c, ht)) | 0),
              (n = (n + Math.imul(d, ut)) | 0),
              (o = (o + Math.imul(d, ht)) | 0));
            var Tt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (r = Math.imul(j, F)),
              (n = Math.imul(j, z)),
              (n = (n + Math.imul(K, F)) | 0),
              (o = Math.imul(K, z)),
              (r = (r + Math.imul(B, H)) | 0),
              (n = (n + Math.imul(B, q)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (o = (o + Math.imul(N, q)) | 0),
              (r = (r + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, Z)) | 0),
              (r = (r + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (o = (o + Math.imul(E, X)) | 0),
              (r = (r + Math.imul(T, Q)) | 0),
              (n = (n + Math.imul(T, tt)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (r = (r + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(b, it)) | 0),
              (o = (o + Math.imul(b, rt)) | 0),
              (r = (r + Math.imul(g, ot)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (r = (r + Math.imul(m, ut)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (o = (o + Math.imul(p, ht)) | 0),
              (r = (r + Math.imul(c, ct)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var At = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(L, F)),
              (n = Math.imul(L, z)),
              (n = (n + Math.imul(C, F)) | 0),
              (o = Math.imul(C, z)),
              (r = (r + Math.imul(j, H)) | 0),
              (n = (n + Math.imul(j, q)) | 0),
              (n = (n + Math.imul(K, H)) | 0),
              (o = (o + Math.imul(K, q)) | 0),
              (r = (r + Math.imul(B, Y)) | 0),
              (n = (n + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (o = (o + Math.imul(N, Z)) | 0),
              (r = (r + Math.imul(P, $)) | 0),
              (n = (n + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(S, $)) | 0),
              (o = (o + Math.imul(S, X)) | 0),
              (r = (r + Math.imul(R, Q)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(E, Q)) | 0),
              (o = (o + Math.imul(E, tt)) | 0),
              (r = (r + Math.imul(T, it)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (o = (o + Math.imul(A, rt)) | 0),
              (r = (r + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (r = (r + Math.imul(g, ut)) | 0),
              (n = (n + Math.imul(g, ht)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, ht)) | 0),
              (r = (r + Math.imul(m, ct)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (n = (n + Math.imul(p, ct)) | 0),
              (o = (o + Math.imul(p, dt)) | 0),
              (r = (r + Math.imul(c, mt)) | 0),
              (n = (n + Math.imul(c, pt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (o = (o + Math.imul(d, pt)) | 0));
            var kt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(L, H)),
              (n = Math.imul(L, q)),
              (n = (n + Math.imul(C, H)) | 0),
              (o = Math.imul(C, q)),
              (r = (r + Math.imul(j, Y)) | 0),
              (n = (n + Math.imul(j, Z)) | 0),
              (n = (n + Math.imul(K, Y)) | 0),
              (o = (o + Math.imul(K, Z)) | 0),
              (r = (r + Math.imul(B, $)) | 0),
              (n = (n + Math.imul(B, X)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (o = (o + Math.imul(N, X)) | 0),
              (r = (r + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (r = (r + Math.imul(R, it)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (o = (o + Math.imul(E, rt)) | 0),
              (r = (r + Math.imul(T, ot)) | 0),
              (n = (n + Math.imul(T, st)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (r = (r + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, ht)) | 0),
              (r = (r + Math.imul(g, ct)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (o = (o + Math.imul(y, dt)) | 0),
              (r = (r + Math.imul(m, mt)) | 0),
              (n = (n + Math.imul(m, pt)) | 0),
              (n = (n + Math.imul(p, mt)) | 0),
              (o = (o + Math.imul(p, pt)) | 0));
            var Rt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(L, Y)),
              (n = Math.imul(L, Z)),
              (n = (n + Math.imul(C, Y)) | 0),
              (o = Math.imul(C, Z)),
              (r = (r + Math.imul(j, $)) | 0),
              (n = (n + Math.imul(j, X)) | 0),
              (n = (n + Math.imul(K, $)) | 0),
              (o = (o + Math.imul(K, X)) | 0),
              (r = (r + Math.imul(B, Q)) | 0),
              (n = (n + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (r = (r + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(S, it)) | 0),
              (o = (o + Math.imul(S, rt)) | 0),
              (r = (r + Math.imul(R, ot)) | 0),
              (n = (n + Math.imul(R, st)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (o = (o + Math.imul(E, st)) | 0),
              (r = (r + Math.imul(T, ut)) | 0),
              (n = (n + Math.imul(T, ht)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (o = (o + Math.imul(A, ht)) | 0),
              (r = (r + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(b, ct)) | 0),
              (o = (o + Math.imul(b, dt)) | 0),
              (r = (r + Math.imul(g, mt)) | 0),
              (n = (n + Math.imul(g, pt)) | 0),
              (n = (n + Math.imul(y, mt)) | 0),
              (o = (o + Math.imul(y, pt)) | 0));
            var Et = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(L, $)),
              (n = Math.imul(L, X)),
              (n = (n + Math.imul(C, $)) | 0),
              (o = Math.imul(C, X)),
              (r = (r + Math.imul(j, Q)) | 0),
              (n = (n + Math.imul(j, tt)) | 0),
              (n = (n + Math.imul(K, Q)) | 0),
              (o = (o + Math.imul(K, tt)) | 0),
              (r = (r + Math.imul(B, it)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (o = (o + Math.imul(N, rt)) | 0),
              (r = (r + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (r = (r + Math.imul(R, ut)) | 0),
              (n = (n + Math.imul(R, ht)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (o = (o + Math.imul(E, ht)) | 0),
              (r = (r + Math.imul(T, ct)) | 0),
              (n = (n + Math.imul(T, dt)) | 0),
              (n = (n + Math.imul(A, ct)) | 0),
              (o = (o + Math.imul(A, dt)) | 0),
              (r = (r + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(M, pt)) | 0),
              (n = (n + Math.imul(b, mt)) | 0),
              (o = (o + Math.imul(b, pt)) | 0));
            var Ot = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (r = Math.imul(L, Q)),
              (n = Math.imul(L, tt)),
              (n = (n + Math.imul(C, Q)) | 0),
              (o = Math.imul(C, tt)),
              (r = (r + Math.imul(j, it)) | 0),
              (n = (n + Math.imul(j, rt)) | 0),
              (n = (n + Math.imul(K, it)) | 0),
              (o = (o + Math.imul(K, rt)) | 0),
              (r = (r + Math.imul(B, ot)) | 0),
              (n = (n + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (r = (r + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, ht)) | 0),
              (r = (r + Math.imul(R, ct)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (o = (o + Math.imul(E, dt)) | 0),
              (r = (r + Math.imul(T, mt)) | 0),
              (n = (n + Math.imul(T, pt)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (o = (o + Math.imul(A, pt)) | 0));
            var Pt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (r = Math.imul(L, it)),
              (n = Math.imul(L, rt)),
              (n = (n + Math.imul(C, it)) | 0),
              (o = Math.imul(C, rt)),
              (r = (r + Math.imul(j, ot)) | 0),
              (n = (n + Math.imul(j, st)) | 0),
              (n = (n + Math.imul(K, ot)) | 0),
              (o = (o + Math.imul(K, st)) | 0),
              (r = (r + Math.imul(B, ut)) | 0),
              (n = (n + Math.imul(B, ht)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, ht)) | 0),
              (r = (r + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (o = (o + Math.imul(S, dt)) | 0),
              (r = (r + Math.imul(R, mt)) | 0),
              (n = (n + Math.imul(R, pt)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (o = (o + Math.imul(E, pt)) | 0));
            var St = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(L, ot)),
              (n = Math.imul(L, st)),
              (n = (n + Math.imul(C, ot)) | 0),
              (o = Math.imul(C, st)),
              (r = (r + Math.imul(j, ut)) | 0),
              (n = (n + Math.imul(j, ht)) | 0),
              (n = (n + Math.imul(K, ut)) | 0),
              (o = (o + Math.imul(K, ht)) | 0),
              (r = (r + Math.imul(B, ct)) | 0),
              (n = (n + Math.imul(B, dt)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (o = (o + Math.imul(N, dt)) | 0),
              (r = (r + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(P, pt)) | 0),
              (n = (n + Math.imul(S, mt)) | 0),
              (o = (o + Math.imul(S, pt)) | 0));
            var It = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (r = Math.imul(L, ut)),
              (n = Math.imul(L, ht)),
              (n = (n + Math.imul(C, ut)) | 0),
              (o = Math.imul(C, ht)),
              (r = (r + Math.imul(j, ct)) | 0),
              (n = (n + Math.imul(j, dt)) | 0),
              (n = (n + Math.imul(K, ct)) | 0),
              (o = (o + Math.imul(K, dt)) | 0),
              (r = (r + Math.imul(B, mt)) | 0),
              (n = (n + Math.imul(B, pt)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (o = (o + Math.imul(N, pt)) | 0));
            var Bt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (r = Math.imul(L, ct)),
              (n = Math.imul(L, dt)),
              (n = (n + Math.imul(C, ct)) | 0),
              (o = Math.imul(C, dt)),
              (r = (r + Math.imul(j, mt)) | 0),
              (n = (n + Math.imul(j, pt)) | 0),
              (n = (n + Math.imul(K, mt)) | 0),
              (o = (o + Math.imul(K, pt)) | 0));
            var Nt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (r = Math.imul(L, mt)),
              (n = Math.imul(L, pt)),
              (n = (n + Math.imul(C, mt)) | 0),
              (o = Math.imul(C, pt)));
            var xt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (h = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (u[0] = vt),
              (u[1] = gt),
              (u[2] = yt),
              (u[3] = wt),
              (u[4] = Mt),
              (u[5] = bt),
              (u[6] = _t),
              (u[7] = Tt),
              (u[8] = At),
              (u[9] = kt),
              (u[10] = Rt),
              (u[11] = Et),
              (u[12] = Ot),
              (u[13] = Pt),
              (u[14] = St),
              (u[15] = It),
              (u[16] = Bt),
              (u[17] = Nt),
              (u[18] = xt),
              0 !== h && ((u[19] = h), i.length++),
              i
            );
          };
          function w(t, e, i) {
            ((i.negative = e.negative ^ t.negative),
              (i.length = t.length + e.length));
            for (var r = 0, n = 0, o = 0; o < i.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var a = 67108863 & r,
                  u = Math.min(o, e.length - 1),
                  h = Math.max(0, o - t.length + 1);
                h <= u;
                h++
              ) {
                var l = o - h,
                  c = 0 | t.words[l],
                  d = 0 | e.words[h],
                  f = c * d,
                  m = 67108863 & f;
                ((s = (s + ((f / 67108864) | 0)) | 0),
                  (m = (m + a) | 0),
                  (a = 67108863 & m),
                  (s = (s + (m >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((i.words[o] = a), (r = s), (s = n));
            }
            return (0 !== r ? (i.words[o] = r) : i.length--, i._strip());
          }
          function M(t, e, i) {
            return w(t, e, i);
          }
          function b(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (y = g),
            (o.prototype.mulTo = function (t, e) {
              var i,
                r = this.length + t.length;
              return (
                (i =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : r < 63
                      ? g(this, t, e)
                      : r < 1024
                        ? w(this, t, e)
                        : M(this, t, e)),
                i
              );
            }),
            (b.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), i = o.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, i, t);
              return e;
            }),
            (b.prototype.revBin = function (t, e, i) {
              if (0 === t || t === i - 1) return t;
              for (var r = 0, n = 0; n < e; n++)
                ((r |= (1 & t) << (e - n - 1)), (t >>= 1));
              return r;
            }),
            (b.prototype.permute = function (t, e, i, r, n, o) {
              for (var s = 0; s < o; s++) ((r[s] = e[t[s]]), (n[s] = i[t[s]]));
            }),
            (b.prototype.transform = function (t, e, i, r, n, o) {
              this.permute(o, t, e, i, r, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var a = s << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    h = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < n;
                  l += a
                )
                  for (var c = u, d = h, f = 0; f < s; f++) {
                    var m = i[l + f],
                      p = r[l + f],
                      v = i[l + f + s],
                      g = r[l + f + s],
                      y = c * v - d * g;
                    ((g = c * g + d * v),
                      (v = y),
                      (i[l + f] = m + v),
                      (r[l + f] = p + g),
                      (i[l + f + s] = m - v),
                      (r[l + f + s] = p - g),
                      f !== a &&
                        ((y = u * c - h * d), (d = u * d + h * c), (c = y)));
                  }
            }),
            (b.prototype.guessLen13b = function (t, e) {
              var i = 1 | Math.max(e, t),
                r = 1 & i,
                n = 0;
              for (i = (i / 2) | 0; i; i >>>= 1) n++;
              return 1 << (n + 1 + r);
            }),
            (b.prototype.conjugate = function (t, e, i) {
              if (!(i <= 1))
                for (var r = 0; r < i / 2; r++) {
                  var n = t[r];
                  ((t[r] = t[i - r - 1]),
                    (t[i - r - 1] = n),
                    (n = e[r]),
                    (e[r] = -e[i - r - 1]),
                    (e[i - r - 1] = -n));
                }
            }),
            (b.prototype.normalize13b = function (t, e) {
              for (var i = 0, r = 0; r < e / 2; r++) {
                var n =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  i;
                ((t[r] = 67108863 & n),
                  (i = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (b.prototype.convert13b = function (t, e, i, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (i[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (i[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) i[s] = 0;
              (r(0 === o), r(0 === (-8192 & o)));
            }),
            (b.prototype.stub = function (t) {
              for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
              return e;
            }),
            (b.prototype.mulp = function (t, e, i) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(r),
                o = this.stub(r),
                s = new Array(r),
                a = new Array(r),
                u = new Array(r),
                h = new Array(r),
                l = new Array(r),
                c = new Array(r),
                d = i.words;
              ((d.length = r),
                this.convert13b(t.words, t.length, s, r),
                this.convert13b(e.words, e.length, h, r),
                this.transform(s, o, a, u, r, n),
                this.transform(h, o, l, c, r, n));
              for (var f = 0; f < r; f++) {
                var m = a[f] * l[f] - u[f] * c[f];
                ((u[f] = a[f] * c[f] + u[f] * l[f]), (a[f] = m));
              }
              return (
                this.conjugate(a, u, r),
                this.transform(a, u, d, o, r, n),
                this.conjugate(d, o, r),
                this.normalize13b(d, r),
                (i.negative = t.negative ^ e.negative),
                (i.length = t.length + e.length),
                i._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                M(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), r("number" === typeof t), r(t < 67108864));
              for (var i = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & i);
                ((i >>= 26),
                  (i += (o / 67108864) | 0),
                  (i += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== i && ((this.words[n] = i), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = v(t);
              if (0 === e.length) return new o(1);
              for (var i = this, r = 0; r < e.length; r++, i = i.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var n = i.sqr(); r < e.length; r++, n = n.sqr())
                  0 !== e[r] && (i = i.mul(n));
              return i;
            }),
            (o.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                i = t % 26,
                n = (t - i) / 26,
                o = (67108863 >>> (26 - i)) << (26 - i);
              if (0 !== i) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    u = ((0 | this.words[e]) - a) << i;
                  ((this.words[e] = u | s), (s = a >>> (26 - i)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (r(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, i) {
              var n;
              (r("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = i;
              if (((n -= s), (n = Math.max(0, n)), u)) {
                for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (h = this.length - 1; h >= 0 && (0 !== l || h >= n); h--) {
                var c = 0 | this.words[h];
                ((this.words[h] = (l << (26 - o)) | (c >>> o)), (l = c & a));
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, i) {
              return (r(0 === this.negative), this.iushrn(t, e, i));
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i) return !1;
              var o = this.words[i];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
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
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
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
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
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
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, i) {
              var n,
                o,
                s = t.length + i;
              this._expand(s);
              var a = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + i]) + a;
                var u = (0 | t.words[n]) * e;
                ((o -= 67108863 & u),
                  (a = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + i] = 67108863 & o));
              }
              for (; n < this.length - i; n++)
                ((o = (0 | this.words[n + i]) + a),
                  (a = o >> 26),
                  (this.words[n + i] = 67108863 & o));
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + a),
                  (a = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var i = this.length - t.length,
                r = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                a = this._countBits(s);
              ((i = 26 - a),
                0 !== i &&
                  ((n = n.ushln(i)),
                  r.iushln(i),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                h = r.length - n.length;
              if ("mod" !== e) {
                ((u = new o(null)),
                  (u.length = h + 1),
                  (u.words = new Array(u.length)));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var c = r.clone()._ishlnsubmul(n, 1, h);
              0 === c.negative && ((r = c), u && (u.words[h] = 1));
              for (var d = h - 1; d >= 0; d--) {
                var f =
                  67108864 * (0 | r.words[n.length + d]) +
                  (0 | r.words[n.length + d - 1]);
                ((f = Math.min((f / s) | 0, 67108863)),
                  r._ishlnsubmul(n, f, d));
                while (0 !== r.negative)
                  (f--,
                    (r.negative = 0),
                    r._ishlnsubmul(n, 1, d),
                    r.isZero() || (r.negative ^= 1));
                u && (u.words[d] = f);
              }
              return (
                u && u._strip(),
                r._strip(),
                "div" !== e && 0 !== i && r.iushrn(i),
                { div: u || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (t, e, i) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((a = this.neg().divmod(t, e)),
                      "mod" !== e && (n = a.div.neg()),
                      "div" !== e &&
                        ((s = a.mod.neg()), i && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((a = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = a.div.neg()),
                        { div: n, mod: a.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((a = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = a.mod.neg()),
                            i && 0 !== s.negative && s.isub(t)),
                          { div: a.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, s, a;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                n = t.andln(1),
                o = i.cmp(r);
              return o < 0 || (1 === n && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (
                var i = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (i * n + (0 | this.words[o])) % t;
              return e ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (var i = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * i;
                ((this.words[n] = (o / t) | 0), (i = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new o(1),
                s = new o(0),
                a = new o(0),
                u = new o(1),
                h = 0;
              while (e.isEven() && i.isEven()) (e.iushrn(1), i.iushrn(1), ++h);
              var l = i.clone(),
                c = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, f = 1;
                  0 === (e.words[0] & f) && d < 26;
                  ++d, f <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(c)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var m = 0, p = 1;
                  0 === (i.words[0] & p) && m < 26;
                  ++m, p <<= 1
                );
                if (m > 0) {
                  i.iushrn(m);
                  while (m-- > 0)
                    ((a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(c)),
                      a.iushrn(1),
                      u.iushrn(1));
                }
                e.cmp(i) >= 0
                  ? (e.isub(i), n.isub(a), s.isub(u))
                  : (i.isub(e), a.isub(n), u.isub(s));
              }
              return { a: a, b: u, gcd: i.iushln(h) };
            }),
            (o.prototype._invmp = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                a = new o(0),
                u = i.clone();
              while (e.cmpn(1) > 0 && i.cmpn(1) > 0) {
                for (
                  var h = 0, l = 1;
                  0 === (e.words[0] & l) && h < 26;
                  ++h, l <<= 1
                );
                if (h > 0) {
                  e.iushrn(h);
                  while (h-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var c = 0, d = 1;
                  0 === (i.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  i.iushrn(c);
                  while (c-- > 0) (a.isOdd() && a.iadd(u), a.iushrn(1));
                }
                e.cmp(i) >= 0 ? (e.isub(i), s.isub(a)) : (i.isub(e), a.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : a),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                i = t.clone();
              ((e.negative = 0), (i.negative = 0));
              for (var r = 0; e.isEven() && i.isEven(); r++)
                (e.iushrn(1), i.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (i.isEven()) i.iushrn(1);
                var n = e.cmp(i);
                if (n < 0) {
                  var o = e;
                  ((e = i), (i = o));
                } else if (0 === n || 0 === i.cmpn(1)) break;
                e.isub(i);
              } while (1);
              return i.iushln(r);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
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
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                i = t < 0;
              if (0 !== this.negative && !i) return -1;
              if (0 === this.negative && i) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (i && (t = -t), r(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, i = this.length - 1; i >= 0; i--) {
                var r = 0 | this.words[i],
                  n = 0 | t.words[i];
                if (r !== n) {
                  r < n ? (e = -1) : r > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new O(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (o.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function T(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function A() {
            T.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function k() {
            T.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function R() {
            T.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function E() {
            T.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function O(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (O.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((T.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (T.prototype.ireduce = function (t) {
              var e,
                i = t;
              do {
                (this.split(i, this.tmp),
                  (i = this.imulK(i)),
                  (i = i.iadd(this.tmp)),
                  (e = i.bitLength()));
              } while (e > this.n);
              var r = e < this.n ? -1 : i.ucmp(this.p);
              return (
                0 === r
                  ? ((i.words[0] = 0), (i.length = 1))
                  : r > 0
                    ? i.isub(this.p)
                    : void 0 !== i.strip
                      ? i.strip()
                      : i._strip(),
                i
              );
            }),
            (T.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (T.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(A, T),
            (A.prototype.split = function (t, e) {
              for (
                var i = 4194303, r = Math.min(t.length, 9), n = 0;
                n < r;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = r), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & i, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & i) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (A.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 0 | t.words[i];
                ((e += 977 * r),
                  (t.words[i] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(k, T),
            n(R, T),
            n(E, T),
            (E.prototype.imulK = function (t) {
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 19 * (0 | t.words[i]) + e,
                  n = 67108863 & r;
                ((r >>>= 26), (t.words[i] = n), (e = r));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var e;
              if ("k256" === t) e = new A();
              else if ("p224" === t) e = new k();
              else if ("p192" === t) e = new R();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new E();
              }
              return ((_[t] = e), e);
            }),
            (O.prototype._verify1 = function (t) {
              (r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers"));
            }),
            (O.prototype._verify2 = function (t, e) {
              (r(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                r(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (O.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (O.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (O.prototype.add = function (t, e) {
              this._verify2(t, e);
              var i = t.add(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this));
            }),
            (O.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var i = t.iadd(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i);
            }),
            (O.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var i = t.sub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this));
            }),
            (O.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var i = t.isub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i);
            }),
            (O.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (O.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (O.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (O.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (O.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (O.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var i = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, i);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              r(!n.isZero());
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                h = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, h).cmp(u)) l.redIAdd(u);
              var c = this.pow(l, n),
                d = this.pow(t, n.addn(1).iushrn(1)),
                f = this.pow(t, n),
                m = s;
              while (0 !== f.cmp(a)) {
                for (var p = f, v = 0; 0 !== p.cmp(a); v++) p = p.redSqr();
                r(v < m);
                var g = this.pow(c, new o(1).iushln(m - v - 1));
                ((d = d.redMul(g)),
                  (c = g.redSqr()),
                  (f = f.redMul(c)),
                  (m = v));
              }
              return d;
            }),
            (O.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (O.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var i = 4,
                r = new Array(1 << i);
              ((r[0] = new o(1).toRed(this)), (r[1] = t));
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
              var s = r[0],
                a = 0,
                u = 0,
                h = e.bitLength() % 26;
              for (0 === h && (h = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], c = h - 1; c >= 0; c--) {
                  var d = (l >> c) & 1;
                  (s !== r[0] && (s = this.sqr(s)),
                    0 !== d || 0 !== a
                      ? ((a <<= 1),
                        (a |= d),
                        u++,
                        (u === i || (0 === n && 0 === c)) &&
                          ((s = this.mul(s, r[a])), (u = 0), (a = 0)))
                      : (u = 0));
                }
                h = 26;
              }
              return s;
            }),
            (O.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (O.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, O),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (P.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var i = t.imul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var i = t.mul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, i(20)(t));
    },
    4921: function (t, e) {},
    4922: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.deleteNameRegistry =
          e.transferNameOwnership =
          e.updateNameRegistryData =
          e.createNameRegistry =
          e.HASH_PREFIX =
          e.NAME_PROGRAM_ID =
            void 0));
      const r = i(1),
        n = i(4923),
        o = i(4626),
        s = i(4259),
        a = i(4259);
      async function u(t, i, o, u, h, l, c, d) {
        const f = await (0, a.getHashedName)(i),
          m = await (0, a.getNameAccountKey)(f, c, d),
          p = l || (await t.getMinimumBalanceForRentExemption(o));
        let v;
        if (d) {
          const e = await (0, a.getNameOwner)(t, d);
          v = e.owner;
        }
        const g = (0, n.createInstruction)(
          e.NAME_PROGRAM_ID,
          r.SystemProgram.programId,
          m,
          h,
          u,
          f,
          new s.Numberu64(p),
          new a.Numberu32(o),
          c,
          d,
          v,
        );
        return g;
      }
      async function h(t, i, r, s, u, h) {
        const l = await (0, a.getHashedName)(i),
          c = await (0, a.getNameAccountKey)(l, u, h);
        let d;
        d = u || (await o.NameRegistryState.retrieve(t, c)).owner;
        const f = (0, n.updateInstruction)(
          e.NAME_PROGRAM_ID,
          c,
          new a.Numberu32(r),
          s,
          d,
          h,
        );
        return f;
      }
      async function l(t, i, r, s, u) {
        const h = await (0, a.getHashedName)(i),
          l = await (0, a.getNameAccountKey)(h, s, u);
        let c;
        c = s || (await o.NameRegistryState.retrieve(t, l)).owner;
        const d = (0, n.transferInstruction)(e.NAME_PROGRAM_ID, l, r, c, s, u);
        return d;
      }
      async function c(t, i, r, s, u) {
        const h = await (0, a.getHashedName)(i),
          l = await (0, a.getNameAccountKey)(h, s, u);
        let c;
        c = s || (await o.NameRegistryState.retrieve(t, l)).owner;
        const d = (0, n.deleteInstruction)(e.NAME_PROGRAM_ID, l, r, c);
        return d;
      }
      ((e.NAME_PROGRAM_ID = new r.PublicKey(
        "namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX",
      )),
        (e.HASH_PREFIX = "SPL Name Service"),
        (e.createNameRegistry = u),
        (e.updateNameRegistryData = h),
        (e.transferNameOwnership = l),
        (e.deleteNameRegistry = c));
    },
    4923: function (t, e, i) {
      "use strict";
      (function (t) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.deleteInstruction =
            e.transferInstruction =
            e.updateInstruction =
            e.createInstruction =
              void 0));
        const r = i(1),
          n = i(4259);
        function o(e, i, o, s, a, u, h, l, c, d, f) {
          const m = [
              t.from(Int8Array.from([0])),
              new n.Numberu32(u.length).toBuffer(),
              u,
              h.toBuffer(),
              l.toBuffer(),
            ],
            p = t.concat(m),
            v = [
              { pubkey: i, isSigner: !1, isWritable: !1 },
              { pubkey: a, isSigner: !0, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !1 },
            ];
          return (
            c
              ? v.push({ pubkey: c, isSigner: !0, isWritable: !1 })
              : v.push({
                  pubkey: new r.PublicKey(t.alloc(32)),
                  isSigner: !1,
                  isWritable: !1,
                }),
            d
              ? v.push({ pubkey: d, isSigner: !1, isWritable: !1 })
              : v.push({
                  pubkey: new r.PublicKey(t.alloc(32)),
                  isSigner: !1,
                  isWritable: !1,
                }),
            f && v.push({ pubkey: f, isSigner: !0, isWritable: !1 }),
            new r.TransactionInstruction({ keys: v, programId: e, data: p })
          );
        }
        function s(e, i, o, s, a, u) {
          const h = [
              t.from(Int8Array.from([1])),
              o.toBuffer(),
              new n.Numberu32(s.length).toBuffer(),
              s,
            ],
            l = t.concat(h),
            c = [
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: a, isSigner: !0, isWritable: !1 },
            ];
          return (
            u && c.push({ pubkey: u, isSigner: !1, isWritable: !1 }),
            new r.TransactionInstruction({ keys: c, programId: e, data: l })
          );
        }
        function a(e, i, n, o, s, a) {
          const u = [t.from(Int8Array.from([2])), n.toBuffer()],
            h = t.concat(u),
            l = [
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !0, isWritable: !1 },
            ];
          return (
            s && l.push({ pubkey: s, isSigner: !0, isWritable: !1 }),
            a && l.push({ pubkey: a, isSigner: !1, isWritable: !1 }),
            new r.TransactionInstruction({ keys: l, programId: e, data: h })
          );
        }
        function u(e, i, n, o) {
          const s = [t.from(Int8Array.from([3]))],
            a = t.concat(s),
            u = [
              { pubkey: i, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !0, isWritable: !1 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
            ];
          return new r.TransactionInstruction({
            keys: u,
            programId: e,
            data: a,
          });
        }
        ((e.createInstruction = o),
          (e.updateInstruction = s),
          (e.transferInstruction = a),
          (e.deleteInstruction = u));
      }).call(this, i(2).Buffer);
    },
    5887: function (t, e, i) {
      "use strict";
      (function (t) {
        var r,
          n,
          o = i(125),
          s = i(1),
          a = i(14),
          u = i.n(a),
          h = i(11),
          l = i.n(h),
          c = i(7188),
          d = i(5893),
          f = i.n(d),
          m = i(129),
          p = i.n(m),
          v = i(81),
          g = i.n(v),
          y = i(80),
          w = i.n(y),
          M = i(19),
          b = i(160),
          _ = i(4),
          T = i(27),
          A = i(67),
          k = Object.defineProperty,
          R = Object.defineProperties,
          E = Object.getOwnPropertyDescriptors,
          O = Object.getOwnPropertySymbols,
          P = Object.prototype.hasOwnProperty,
          S = Object.prototype.propertyIsEnumerable,
          I = (t, e, i) =>
            e in t
              ? k(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (t[e] = i),
          B = (t, e) => {
            for (var i in e || (e = {})) P.call(e, i) && I(t, i, e[i]);
            if (O) for (var i of O(e)) S.call(e, i) && I(t, i, e[i]);
            return t;
          },
          N = (t, e) => R(t, E(e)),
          x = (t, e, i) => {
            if (!e.has(t)) throw TypeError("Cannot " + i);
          },
          j = (t, e, i) => (
            x(t, e, "read from private field"),
            i ? i.call(t) : e.get(t)
          ),
          K = (t, e, i) => {
            if (e.has(t))
              throw TypeError(
                "Cannot add the same private member more than once",
              );
            e instanceof WeakSet ? e.add(t) : e.set(t, i);
          },
          U = (t, e, i, r) => (
            x(t, e, "write to private field"),
            r ? r.call(t, i) : e.set(t, i),
            i
          ),
          L = (t, e, i) =>
            new Promise((r, n) => {
              var o = (t) => {
                  try {
                    a(i.next(t));
                  } catch (e) {
                    n(e);
                  }
                },
                s = (t) => {
                  try {
                    a(i.throw(t));
                  } catch (e) {
                    n(e);
                  }
                },
                a = (t) =>
                  t.done ? r(t.value) : Promise.resolve(t.value).then(o, s);
              a((i = i.apply(t, e)).next());
            });
        const C = 200,
          D = [o["TOKEN_PROGRAM_ID"], o["TOKEN_2022_PROGRAM_ID"]],
          F = class extends p.a {
            constructor({ wallet: t, config: e }) {
              (super({ wallet: t, config: e }),
                K(this, r, null),
                K(this, n, null),
                (this.connection = new s["Connection"](e.baseUrl)),
                (this.socket = void 0));
            }
            setAxiosClient() {
              const { baseURL: t } = this.getInitParams();
              this.connection = new s["Connection"](t);
            }
            setSocketClient(t) {
              this.socket = new s["Connection"](t);
            }
            getAllowedTickers() {
              return ["SOL"];
            }
            getInfo(t) {
              return L(this, null, function* () {
                const e = new s["PublicKey"](t),
                  i = yield this.connection.getBalance(e, "confirmed");
                return this.modifyInfoResponse(i);
              });
            }
            modifyInfoResponse(t) {
              return { balance: String(t) };
            }
            getCurrentSigs(t, e = "confirmed") {
              return L(this, null, function* () {
                const i =
                  yield this.connection.getConfirmedSignaturesForAddress2(
                    t,
                    {},
                    e,
                  );
                return i
                  .map(({ confirmationStatus: t, signature: i }) => {
                    if (t === e) return i;
                  })
                  .filter((t) => Boolean(t));
              });
            }
            getLatestBlock() {
              return L(this, null, function* () {
                return this.connection.getLatestBlockhash();
              });
            }
            modifyLatestBlockResponse(t) {
              return t && t.value;
            }
            sendTransaction(t) {
              return L(this, arguments, function* ({ rawtx: t, signer: e }) {
                try {
                  const i = yield this.connection.sendTransaction(t, [e]);
                  return { txid: i };
                } catch (i) {
                  throw new M["ExternalError"]({
                    type: T["EXTERNAL_ERROR"],
                    error: i,
                    instance: this,
                  });
                }
              });
            }
            sendRawTransaction(t) {
              return L(this, null, function* () {
                try {
                  const e = yield this.connection.sendRawTransaction(t);
                  return { txid: e };
                } catch (e) {
                  throw new M["ExternalError"]({
                    type: T["EXTERNAL_ERROR"],
                    error: e,
                    instance: this,
                  });
                }
              });
            }
            sendRawTransactionToJito(t, e = !0) {
              return L(this, null, function* () {
                const i = yield u.a.post(
                    "https://mainnet.block-engine.jito.wtf/api/v1/transactions?bundleOnly=" +
                      e,
                    {
                      id: 1,
                      jsonrpc: "2.0",
                      method: "sendTransaction",
                      params: [t.toString("base64"), { encoding: "base64" }],
                    },
                  ),
                  { result: r } = i.data;
                return { txid: r };
              });
            }
            getFee() {
              return L(this, null, function* () {
                try {
                  const t = new s["Transaction"]();
                  t.feePayer = new s["PublicKey"](this.wallet.address);
                  const { blockhash: e } = yield this.getLatestBlock();
                  t.recentBlockhash = e;
                  const i = t.compileMessage(),
                    { value: r } = yield this.connection.getFeeForMessage(i);
                  return String(r);
                } catch (t) {
                  throw new M["ExternalError"]({
                    type: T["EXTERNAL_ERROR"],
                    error: t,
                    instance: this,
                  });
                }
              });
            }
            getAccountInfo(t) {
              const e = this.connection.getParsedAccountInfo(t);
              return e;
            }
            getEpochInfo() {
              return this.connection.getEpochInfo("confirmed");
            }
            getStakeProgramInfo(t) {
              return this.connection.getParsedProgramAccounts(
                s["StakeProgram"].programId,
                {
                  commitment: "confirmed",
                  filters: [{ memcmp: { bytes: t, offset: 12 } }],
                },
              );
            }
            getStakeAccountInfo(t) {
              return L(this, null, function* () {
                const e = yield this.connection.getParsedAccountInfo(
                  new s["PublicKey"](t),
                  "processed",
                );
                return this.modifyStakeAccountInfo(e, t);
              });
            }
            modifyStakeAccountInfo(t, e) {
              return {
                account: (null == t ? void 0 : t.value) || null,
                pubkey: new s["PublicKey"](e),
              };
            }
            getStakingBalance(t) {
              return L(this, null, function* () {
                const e = yield f.a.getAddrCache(
                  this.wallet.ticker,
                  T["STAKE_ADDR_TYPE"],
                );
                let i = [];
                e && (i = e.map(({ address: t }) => t));
                const r =
                  i.length > 0
                    ? yield Promise.all(
                        i.map((t) => this.getStakeAccountInfo(t)),
                      )
                    : yield this.getStakeProgramInfo(t.address);
                ((0 === i.length && r) || t.ignoreCache) &&
                  ((i = r.map(({ pubkey: t }) => {
                    try {
                      return t.toBase58();
                    } catch (e) {
                      return t.toString();
                    }
                  })),
                  f.a.setAddrCache({
                    ticker: this.wallet.ticker,
                    type: T["STAKE_ADDR_TYPE"],
                    addresses: i,
                  }));
                const { epoch: n } = yield this.getEpochInfo(),
                  o = r
                    .map((t) => {
                      if (!t.account)
                        return void f.a._removeItem(t.pubkey.toBase58());
                      if ("delegated" !== t.account.data.parsed.type) return;
                      const e = t.pubkey.toBase58(),
                        i = t.account.lamports,
                        r = t.account.data.parsed.info.stake.delegation.voter,
                        o = Number.isSafeInteger(
                          Number(
                            t.account.data.parsed.info.stake.delegation
                              .deactivationEpoch,
                          ),
                        ),
                        s =
                          o &&
                          Number(
                            t.account.data.parsed.info.stake.delegation
                              .deactivationEpoch,
                          ) < n;
                      return {
                        accountAddress: e,
                        staked: i,
                        validator: r,
                        isDeactivated: o,
                        isAvailableForWithdraw: s,
                      };
                    })
                    .filter((t) => Boolean(t)),
                  s = o.reduce(
                    (t, e) => t.add(new this.wallet.BN(e.staked)),
                    new this.wallet.BN(0),
                  );
                return {
                  staking: o,
                  staked: s,
                  total: o.reduce(
                    (t, e) => t.add(new l.a(e.staked)),
                    new l.a(0),
                  ),
                };
              });
            }
            getTxInstruction(t) {
              const e = { destination: "", source: "", lamports: 0 };
              return (
                t.transaction.message.instructions.forEach((t) => {
                  var i;
                  "parsed" in t &&
                    t.parsed &&
                    [
                      "transfer",
                      "createAccount",
                      "createAccountWithSeed",
                      "delegate",
                      "deactivate",
                      "withdraw",
                    ].includes(null == (i = t.parsed) ? void 0 : i.type) &&
                    ((e.destination =
                      t.parsed.info.destination ||
                      t.parsed.info.voteAccount ||
                      t.parsed.info.stakeAccount),
                    (e.source =
                      t.parsed.info.source ||
                      t.parsed.info.stakeAuthority ||
                      t.parsed.info.stakeAccount),
                    t.parsed.info.lamports &&
                      (e.lamports = t.parsed.info.lamports));
                }),
                e
              );
            }
            getTxHash(t) {
              return t.transaction.signatures[0];
            }
            getTxDirection(t, e) {
              return this.getTxInstruction(e).destination === t;
            }
            getTxOtherSideAddress(t, e) {
              const { destination: i, source: r } = this.getTxInstruction(e);
              return i === t ? r : i;
            }
            getTxValue(t, e) {
              return Number(
                Object(A["toCurrency"])(
                  this.getTxInstruction(e).lamports,
                  this.wallet.decimal,
                ),
              );
            }
            getTxDateTime(t) {
              return new Date(Number(t.blockTime + "000"));
            }
            getTxMemo(t) {
              return "";
            }
            getTransactions(t) {
              return L(this, arguments, function* ({ address: t }) {
                const e = yield this.getCurrentSigs(
                    new s["PublicKey"](t),
                    "confirmed",
                  ),
                  i = yield this.connection.getParsedTransactions(
                    e,
                    "confirmed",
                  );
                return this.modifyTransactionsResponse(i, t);
              });
            }
            getSwapTransaction(t, e, i) {
              return L(this, null, function* () {
                const r = yield this.connection.getParsedTransactions([t], {
                  commitment: "confirmed",
                  maxSupportedTransactionVersion: 0,
                });
                if (1 === (null == r ? void 0 : r.length) && null !== r[0]) {
                  const t = this.createHistorySwapTransaction({
                    tx: r[0],
                    sendAsset: e,
                    receiveAsset: i,
                  });
                  return t;
                }
                return null;
              });
            }
            getSpecifiedTransactions(t, e) {
              return L(this, null, function* () {
                return this.modifyTransactionsResponse(
                  yield this.connection.getParsedTransactions(t, "confirmed"),
                  e,
                );
              });
            }
            createHistorySwapTransaction({
              tx: t,
              sendAsset: e,
              receiveAsset: i,
            }) {
              return {
                txid: this.getTxHash(t),
                timestamp: this.getTxTimestamp(t),
                from: {
                  id: e.id,
                  contract: e.mint,
                  amount: Math.abs(
                    this.extractTransactionAmountsByMint(t, e.mint),
                  ).toString(),
                },
                to: {
                  id: i.id,
                  contract: i.mint,
                  amount: Math.abs(
                    this.extractTransactionAmountsByMint(t, i.mint),
                  ).toString(),
                },
                status: "confirmed",
                fee: this.getTxFee(t),
                feeTicker: "SOL",
              };
            }
            extractTransactionAmountsByMint(t, e) {
              let i = 0;
              if (t.meta && "So11111111111111111111111111111111111111112" === e)
                return Math.abs(t.meta.postBalances[0] - t.meta.preBalances[0]);
              if (t.meta) {
                const r = t.transaction.message.accountKeys
                  .map((t, e) => N(B({}, t), { index: e }))
                  .filter((t) => t.signer);
                r.forEach((r) => {
                  var n, o;
                  const s = (
                      (null == (n = t.meta) ? void 0 : n.preTokenBalances) || []
                    ).find(
                      (t) => t.mint === e && t.owner === r.pubkey.toString(),
                    ),
                    a = (
                      (null == (o = t.meta) ? void 0 : o.postTokenBalances) ||
                      []
                    ).find(
                      (t) => t.mint === e && t.owner === r.pubkey.toString(),
                    );
                  if (s && a) {
                    const t = parseInt(s.uiTokenAmount.amount, 10),
                      e = parseInt(a.uiTokenAmount.amount, 10);
                    i += e - t;
                  } else if (!s && a) {
                    const t = parseInt(a.uiTokenAmount.amount, 10);
                    i += t;
                  } else if (s && !a) {
                    const t = parseInt(s.uiTokenAmount.amount, 10);
                    i -= t;
                  }
                });
              }
              return i;
            }
            getTxTimestamp(t) {
              return t.blockTime;
            }
            modifyTransactionsResponse(t, e) {
              return t
                .filter((t) => null !== t)
                .map(
                  (t) =>
                    new w.a({
                      ticker: this.wallet.ticker,
                      name: this.wallet.name,
                      alias: this.wallet.alias,
                      walletid: this.wallet.id,
                      explorer: this.constructor.name,
                      txid: this.getTxHash(t),
                      direction: this.getTxDirection(e.toString(), t),
                      otherSideAddress: this.getTxOtherSideAddress(
                        e.toString(),
                        t,
                      ),
                      amount: this.getTxValue(e.toString(), t),
                      datetime: this.getTxDateTime(t),
                      memo: this.getTxMemo(t),
                      confirmations: 1,
                    }),
                );
            }
            getMinRent(t = C) {
              return this.connection.getMinimumBalanceForRentExemption(t);
            }
            connectSocket(t) {
              return L(this, null, function* () {
                var e, i;
                const { baseUrl: o, websocketUrl: a } = this.config;
                (j(this, r) &&
                  (null == (e = this.socket) ||
                    e.removeAccountChangeListener(+j(this, r)),
                  U(this, r, null)),
                  j(this, n) &&
                    (null == (i = this.socket) ||
                      i.removeAccountChangeListener(+j(this, n)),
                    U(this, n, null)),
                  this.setSocketClient(a || o));
                const u = new s["PublicKey"](t);
                this.socket &&
                  (U(
                    this,
                    r,
                    this.socket.onAccountChange(
                      u,
                      (t) => this.processBalanceChangeEvent(t, u),
                      "confirmed",
                    ),
                  ),
                  U(
                    this,
                    n,
                    this.socket.onAccountChange(
                      u,
                      (t) => this.processTxsChangeEvent(t, u),
                      "confirmed",
                    ),
                  ));
              });
            }
            updateParams(t) {
              (super.updateParams(t),
                t.websocketUrl &&
                  this.config.websocketUrl !== t.websocketUrl &&
                  ((this.config.websocketUrl = t.websocketUrl),
                  this.connectSocket(this.wallet.address)));
            }
            processTxsChangeEvent(t, e) {
              return L(this, null, function* () {
                const t = yield this.getCurrentSigs(e, "confirmed"),
                  i = yield this.getSpecifiedTransactions(t, e.toBase58());
                (yield g.a.filterAndUpdateTransactions(i),
                  i.forEach((t) => {
                    t.direction &&
                      this.eventEmitter.emit(
                        `${this.wallet.parent}-${this.wallet.id}::new-socket-tx`,
                        { unconfirmedTx: t },
                      );
                  }));
              });
            }
            processBalanceChangeEvent(t, e) {
              this.eventEmitter.emit(
                `update::${this.wallet.id}::balance`,
                t.lamports,
              );
            }
            getTxFee(t) {
              return this.wallet.toCurrencyUnit((t.meta && t.meta.fee) || 0);
            }
            getTxConfirmations() {
              return 1;
            }
            fetchRawList(t) {
              return L(this, null, function* () {
                try {
                  const e = yield Object(c["resolveToWalletAddress"])({
                      text: t,
                      connection: this.connection,
                    }),
                    i = yield Object(c["getParsedNftAccountsByOwner"])({
                      publicAddress: e,
                      connection: this.connection,
                    }),
                    r = [],
                    n = i.map(
                      ({ mint: t, data: { name: e, uri: i } }) => (
                        r.push(i),
                        { tokenId: t, name: e }
                      ),
                    ),
                    o = yield Promise.allSettled(r.map((t) => u.a.get(t)));
                  for (let t = 0; t < n.length; t++) {
                    const e = n[t],
                      { status: i, value: r, reason: s } = o[t];
                    if ("fulfilled" === i) {
                      const {
                        data: { description: t, image: i },
                      } = r;
                      ((e.description = t), (e.imageUrl = i));
                    } else console.warn(s);
                  }
                  return n;
                } catch (e) {
                  throw (
                    console.warn(e),
                    new M["ExternalError"]({
                      type: T["EXTERNAL_ERROR"],
                      error: e,
                      instance: this,
                    })
                  );
                }
              });
            }
            fetchNftList(t) {
              return L(this, null, function* () {
                const { address: e, ticker: i } = t;
                try {
                  const t = yield this.fetchRawList(e);
                  return t.map(
                    ({ tokenId: t, name: e, description: r, imageUrl: n }) =>
                      new b["SOLNftToken"](t, i, e, r, n),
                  );
                } catch (r) {
                  throw (
                    console.warn(r),
                    new M["ExternalError"]({
                      type: T["EXTERNAL_ERROR"],
                      error: r,
                      instance: this,
                    })
                  );
                }
              });
            }
            sendNft(t, e, i, r, n, a) {
              return L(this, null, function* () {
                const i = s["Keypair"].fromSecretKey(t.getPrivateKey()),
                  n = new s["PublicKey"](r),
                  a = new s["PublicKey"](e);
                try {
                  const t = yield Object(
                      o["getOrCreateAssociatedTokenAccount"],
                    )(this.connection, i, n, i.publicKey),
                    e = yield Object(o["getOrCreateAssociatedTokenAccount"])(
                      this.connection,
                      i,
                      n,
                      a,
                    ),
                    r = new s["Transaction"]().add(
                      Object(o["createTransferCheckedInstruction"])(
                        t.address,
                        n,
                        e.address,
                        i.publicKey,
                        1,
                        0,
                        [],
                        o["TOKEN_PROGRAM_ID"],
                      ),
                    ),
                    u = yield this.connection.sendTransaction(r, [i]);
                  return { tx: u };
                } catch (u) {
                  throw (
                    console.warn(u),
                    new M["ExternalError"]({
                      type: T["EXTERNAL_ERROR"],
                      error: u,
                      instance: this,
                    })
                  );
                }
              });
            }
            makeNftInfoUrl(t, e) {
              return `${Object(A["getStringWithEnsuredEndChar"])(this.config.baseUrl, "/")}${e}`;
            }
            getUserTokenList() {
              return L(this, null, function* () {
                const t = yield this.getParsedTokenAccountsByOwner({
                    owner: this.wallet.address,
                  }),
                  e = t.map((t) => t.account.data.parsed.info);
                return e;
              });
            }
            sendTokenTransaction(t, e, i, r, n) {
              return L(this, null, function* () {
                var a;
                const u = s["Keypair"].fromSecretKey(t.getPrivateKey()),
                  h = new s["PublicKey"](e),
                  l = new s["PublicKey"](i);
                try {
                  const t =
                    null != (a = this.findTokenProgramId(e))
                      ? a
                      : yield this.getAccountOwner(e);
                  if (!t) throw new Error("Cannot find token program id");
                  const i = Object(o["getAssociatedTokenAddressSync"])(
                      h,
                      u.publicKey,
                      !1,
                      t,
                    ),
                    c = Object(o["getAssociatedTokenAddressSync"])(h, l, !1, t),
                    d = new s["Transaction"]().add(
                      Object(
                        o["createAssociatedTokenAccountIdempotentInstruction"],
                      )(u.publicKey, i, u.publicKey, h, t),
                      Object(
                        o["createAssociatedTokenAccountIdempotentInstruction"],
                      )(u.publicKey, c, l, h, t),
                      Object(o["createTransferCheckedInstruction"])(
                        i,
                        h,
                        c,
                        u.publicKey,
                        BigInt(r),
                        n,
                        [],
                        t,
                      ),
                    ),
                    f = yield this.connection.sendTransaction(d, [u]);
                  return { txid: f };
                } catch (c) {
                  throw (
                    console.warn(c),
                    new M["ExternalError"]({
                      type: T["EXTERNAL_ERROR"],
                      error: c,
                      instance: this,
                    })
                  );
                }
              });
            }
            getTokenBalance(t) {
              return L(this, null, function* () {
                var e;
                if (!t.mint && !t.address)
                  throw new Error("Missing mint and address");
                try {
                  const i = t.mint
                      ? Object(o["getAssociatedTokenAddressSync"])(
                          new s["PublicKey"](t.mint),
                          new s["PublicKey"](t.address || this.wallet.address),
                          !1,
                          t.programId
                            ? new s["PublicKey"](t.programId)
                            : null !=
                                (e = this.findTokenProgramId(t.mint.toString()))
                              ? e
                              : yield this.getAccountOwner(t.mint),
                        )
                      : new s["PublicKey"](t.address),
                    {
                      value: { amount: r },
                    } = yield this.connection.getTokenAccountBalance(i);
                  return r;
                } catch (i) {
                  return (console.log(i), null);
                }
              });
            }
            getTokensBalances() {
              return L(this, null, function* () {
                const t = {},
                  e = yield this.getParsedTokenAccountsByOwner({
                    owner: this.wallet.address,
                  });
                return (
                  e.forEach((e) => {
                    const i = e.account.data.parsed.info,
                      r = i.mint;
                    Object(_["isPrototypePollutionKey"])(r) ||
                      (t[r] = Object(_["sanitizeString"])(
                        i.tokenAmount.amount,
                      ));
                  }),
                  t
                );
              });
            }
            getTokenInfo(t) {
              return L(this, arguments, function* ({ mint: t }) {
                var e;
                try {
                  const i = yield this.connection.getParsedAccountInfo(
                      new s["PublicKey"](t),
                    ),
                    r = null == (e = i.value) ? void 0 : e.owner;
                  return (
                    r &&
                      this.updateTokenProgramsMap([{ programId: r, mint: t }]),
                    i
                  );
                } catch (i) {
                  return (console.warn(i), null);
                }
              });
            }
            getTokenAccountsByOwner(t) {
              return L(
                this,
                arguments,
                function* ({ owner: t, programId: e = o["TOKEN_PROGRAM_ID"] }) {
                  return (yield this.connection.getTokenAccountsByOwner(
                    new s["PublicKey"](t),
                    { programId: e },
                    { commitment: "confirmed" },
                  )).value;
                },
              );
            }
            getAddressLookupTable(t) {
              return L(this, arguments, function* ({ address: t }) {
                return (yield this.connection.getAddressLookupTable(
                  new s["PublicKey"](t),
                )).value;
              });
            }
            getMultipleAccountsInfo(t) {
              return this.connection.getMultipleAccountsInfo(
                t.map((t) => new s["PublicKey"](t)),
              );
            }
            simulateTransaction(e, i) {
              return L(this, null, function* () {
                try {
                  const r = s["VersionedTransaction"].deserialize(
                      t.from(e, "base64"),
                    ),
                    n = yield this.connection.simulateTransaction(r, i);
                  return { success: !0, simulation: n.value };
                } catch (r) {
                  return (
                    console.error("Error in simulateTransaction:", r),
                    { success: !1, simulation: null }
                  );
                }
              });
            }
            getAccountOwner(t) {
              return L(this, null, function* () {
                var e;
                const i = yield this.connection.getParsedAccountInfo(
                  new s["PublicKey"](t),
                );
                if (!(null == (e = i.value) ? void 0 : e.owner))
                  throw new Error("Invalid address");
                return new s["PublicKey"](i.value.owner);
              });
            }
            getParsedTokenAccountsByOwner(t) {
              return L(this, arguments, function* ({ owner: t }) {
                const e = (yield Promise.allSettled(
                  D.map((e) =>
                    this.connection.getParsedTokenAccountsByOwner(
                      new s["PublicKey"](t),
                      { programId: e },
                    ),
                  ),
                ))
                  .map((t) => {
                    if ("fulfilled" === t.status) {
                      const e = t.value.value.map(
                        ({ account: t, pubkey: e }) => ({
                          account: t,
                          pubkey: e,
                          programId:
                            "spl-token" === t.data.program
                              ? o["TOKEN_PROGRAM_ID"]
                              : o["TOKEN_2022_PROGRAM_ID"],
                        }),
                      );
                      return e;
                    }
                    return [];
                  })
                  .flat();
                return (
                  this.updateTokenProgramsMap(
                    e.map(({ programId: t, account: e }) => ({
                      programId: t,
                      mint: e.data.parsed.info.mint,
                    })),
                  ),
                  this.updateTokenAccountsMap(e.map(({ pubkey: t }) => t)),
                  e
                );
              });
            }
            updateTokenProgramsMap(t) {
              t.forEach(({ programId: t, mint: e }) =>
                F[
                  t.equals(o["TOKEN_PROGRAM_ID"]) ? "tokens2020" : "tokens2022"
                ].add(e.toString()),
              );
            }
            updateTokenAccountsMap(t) {
              t.forEach((t) => F.tokenAccounts.add(t.toBase58()));
            }
            findTokenProgramId(t) {
              return F.tokens2020.has(t)
                ? o["TOKEN_PROGRAM_ID"]
                : F.tokens2022.has(t)
                  ? o["TOKEN_2022_PROGRAM_ID"]
                  : void 0;
            }
            getCachedTokenAccounts() {
              return Array.from(F.tokenAccounts);
            }
          };
        let z = F;
        ((r = new WeakMap()),
          (n = new WeakMap()),
          (z.tokens2020 = new Set()),
          (z.tokens2022 = new Set()),
          (z.tokenAccounts = new Set()),
          Object.defineProperty(z, "name", { value: "SolanaNodeExplorer" }),
          (e["a"] = z));
      }).call(this, i(2).Buffer);
    },
    5888: function (t, e) {
      var i = 1 / 0,
        r = 9007199254740991,
        n = 17976931348623157e292,
        o = NaN,
        s = "[object Function]",
        a = "[object GeneratorFunction]",
        u = "[object Symbol]",
        h = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        f = /^(?:0|[1-9]\d*)$/,
        m = parseInt,
        p = Object.prototype,
        v = p.toString,
        g = Math.ceil,
        y = Math.max;
      function w(t, e, i) {
        var r = -1,
          n = t.length;
        (e < 0 && (e = -e > n ? 0 : n + e),
          (i = i > n ? n : i),
          i < 0 && (i += n),
          (n = e > i ? 0 : (i - e) >>> 0),
          (e >>>= 0));
        var o = Array(n);
        while (++r < n) o[r] = t[r + e];
        return o;
      }
      function M(t, e) {
        return (
          (e = null == e ? r : e),
          !!e &&
            ("number" == typeof t || f.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
        );
      }
      function b(t, e, i) {
        if (!E(i)) return !1;
        var r = typeof e;
        return (
          !!("number" == r
            ? A(i) && M(e, i.length)
            : "string" == r && e in i) && T(i[e], t)
        );
      }
      function _(t, e, i) {
        e = (i ? b(t, e, i) : void 0 === e) ? 1 : y(I(e), 0);
        var r = t ? t.length : 0;
        if (!r || e < 1) return [];
        var n = 0,
          o = 0,
          s = Array(g(r / e));
        while (n < r) s[o++] = w(t, n, (n += e));
        return s;
      }
      function T(t, e) {
        return t === e || (t !== t && e !== e);
      }
      function A(t) {
        return null != t && R(t.length) && !k(t);
      }
      function k(t) {
        var e = E(t) ? v.call(t) : "";
        return e == s || e == a;
      }
      function R(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r;
      }
      function E(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function O(t) {
        return !!t && "object" == typeof t;
      }
      function P(t) {
        return "symbol" == typeof t || (O(t) && v.call(t) == u);
      }
      function S(t) {
        if (!t) return 0 === t ? t : 0;
        if (((t = B(t)), t === i || t === -i)) {
          var e = t < 0 ? -1 : 1;
          return e * n;
        }
        return t === t ? t : 0;
      }
      function I(t) {
        var e = S(t),
          i = e % 1;
        return e === e ? (i ? e - i : e) : 0;
      }
      function B(t) {
        if ("number" == typeof t) return t;
        if (P(t)) return o;
        if (E(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = E(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(h, "");
        var i = c.test(t);
        return i || d.test(t) ? m(t.slice(2), i ? 2 : 8) : l.test(t) ? o : +t;
      }
      t.exports = _;
    },
    5889: function (t, e, i) {
      (function (t, i) {
        var r = 200,
          n = "Expected a function",
          o = "__lodash_hash_undefined__",
          s = 1,
          a = 2,
          u = 1 / 0,
          h = 9007199254740991,
          l = "[object Arguments]",
          c = "[object Array]",
          d = "[object Boolean]",
          f = "[object Date]",
          m = "[object Error]",
          p = "[object Function]",
          v = "[object GeneratorFunction]",
          g = "[object Map]",
          y = "[object Number]",
          w = "[object Object]",
          M = "[object Promise]",
          b = "[object RegExp]",
          _ = "[object Set]",
          T = "[object String]",
          A = "[object Symbol]",
          k = "[object WeakMap]",
          R = "[object ArrayBuffer]",
          E = "[object DataView]",
          O = "[object Float32Array]",
          P = "[object Float64Array]",
          S = "[object Int8Array]",
          I = "[object Int16Array]",
          B = "[object Int32Array]",
          N = "[object Uint8Array]",
          x = "[object Uint8ClampedArray]",
          j = "[object Uint16Array]",
          K = "[object Uint32Array]",
          U = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          L = /^\w*$/,
          C = /^\./,
          D =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          F = /[\\^$.*+?()[\]{}|]/g,
          z = /\\(\\)?/g,
          W = /^\[object .+?Constructor\]$/,
          H = /^(?:0|[1-9]\d*)$/,
          q = {};
        ((q[O] = q[P] = q[S] = q[I] = q[B] = q[N] = q[x] = q[j] = q[K] = !0),
          (q[l] =
            q[c] =
            q[R] =
            q[d] =
            q[E] =
            q[f] =
            q[m] =
            q[p] =
            q[g] =
            q[y] =
            q[w] =
            q[b] =
            q[_] =
            q[T] =
            q[k] =
              !1));
        var G = "object" == typeof t && t && t.Object === Object && t,
          Y = "object" == typeof self && self && self.Object === Object && self,
          Z = G || Y || Function("return this")(),
          V = e && !e.nodeType && e,
          $ = V && "object" == typeof i && i && !i.nodeType && i,
          X = $ && $.exports === V,
          J = X && G.process,
          Q = (function () {
            try {
              return J && J.binding("util");
            } catch (t) {}
          })(),
          tt = Q && Q.isTypedArray;
        function et(t, e) {
          var i = -1,
            r = t ? t.length : 0,
            n = Array(r);
          while (++i < r) n[i] = e(t[i], i, t);
          return n;
        }
        function it(t, e) {
          var i = -1,
            r = t ? t.length : 0;
          while (++i < r) if (e(t[i], i, t)) return !0;
          return !1;
        }
        function rt(t) {
          return function (e) {
            return null == e ? void 0 : e[t];
          };
        }
        function nt(t, e) {
          var i = t.length;
          t.sort(e);
          while (i--) t[i] = t[i].value;
          return t;
        }
        function ot(t, e) {
          var i = -1,
            r = Array(t);
          while (++i < t) r[i] = e(i);
          return r;
        }
        function st(t) {
          return function (e) {
            return t(e);
          };
        }
        function at(t, e) {
          return null == t ? void 0 : t[e];
        }
        function ut(t) {
          var e = !1;
          if (null != t && "function" != typeof t.toString)
            try {
              e = !!(t + "");
            } catch (i) {}
          return e;
        }
        function ht(t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t, r) {
              i[++e] = [r, t];
            }),
            i
          );
        }
        function lt(t, e) {
          return function (i) {
            return t(e(i));
          };
        }
        function ct(t) {
          var e = -1,
            i = Array(t.size);
          return (
            t.forEach(function (t) {
              i[++e] = t;
            }),
            i
          );
        }
        var dt = Array.prototype,
          ft = Function.prototype,
          mt = Object.prototype,
          pt = Z["__core-js_shared__"],
          vt = (function () {
            var t = /[^.]+$/.exec((pt && pt.keys && pt.keys.IE_PROTO) || "");
            return t ? "Symbol(src)_1." + t : "";
          })(),
          gt = ft.toString,
          yt = mt.hasOwnProperty,
          wt = mt.toString,
          Mt = RegExp(
            "^" +
              gt
                .call(yt)
                .replace(F, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          bt = Z.Symbol,
          _t = Z.Uint8Array,
          Tt = mt.propertyIsEnumerable,
          At = dt.splice,
          kt = lt(Object.keys, Object),
          Rt = He(Z, "DataView"),
          Et = He(Z, "Map"),
          Ot = He(Z, "Promise"),
          Pt = He(Z, "Set"),
          St = He(Z, "WeakMap"),
          It = He(Object, "create"),
          Bt = ii(Rt),
          Nt = ii(Et),
          xt = ii(Ot),
          jt = ii(Pt),
          Kt = ii(St),
          Ut = bt ? bt.prototype : void 0,
          Lt = Ut ? Ut.valueOf : void 0,
          Ct = Ut ? Ut.toString : void 0;
        function Dt(t) {
          var e = -1,
            i = t ? t.length : 0;
          this.clear();
          while (++e < i) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Ft() {
          this.__data__ = It ? It(null) : {};
        }
        function zt(t) {
          return this.has(t) && delete this.__data__[t];
        }
        function Wt(t) {
          var e = this.__data__;
          if (It) {
            var i = e[t];
            return i === o ? void 0 : i;
          }
          return yt.call(e, t) ? e[t] : void 0;
        }
        function Ht(t) {
          var e = this.__data__;
          return It ? void 0 !== e[t] : yt.call(e, t);
        }
        function qt(t, e) {
          var i = this.__data__;
          return ((i[t] = It && void 0 === e ? o : e), this);
        }
        function Gt(t) {
          var e = -1,
            i = t ? t.length : 0;
          this.clear();
          while (++e < i) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Yt() {
          this.__data__ = [];
        }
        function Zt(t) {
          var e = this.__data__,
            i = me(e, t);
          if (i < 0) return !1;
          var r = e.length - 1;
          return (i == r ? e.pop() : At.call(e, i, 1), !0);
        }
        function Vt(t) {
          var e = this.__data__,
            i = me(e, t);
          return i < 0 ? void 0 : e[i][1];
        }
        function $t(t) {
          return me(this.__data__, t) > -1;
        }
        function Xt(t, e) {
          var i = this.__data__,
            r = me(i, t);
          return (r < 0 ? i.push([t, e]) : (i[r][1] = e), this);
        }
        function Jt(t) {
          var e = -1,
            i = t ? t.length : 0;
          this.clear();
          while (++e < i) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Qt() {
          this.__data__ = {
            hash: new Dt(),
            map: new (Et || Gt)(),
            string: new Dt(),
          };
        }
        function te(t) {
          return ze(this, t)["delete"](t);
        }
        function ee(t) {
          return ze(this, t).get(t);
        }
        function ie(t) {
          return ze(this, t).has(t);
        }
        function re(t, e) {
          return (ze(this, t).set(t, e), this);
        }
        function ne(t) {
          var e = -1,
            i = t ? t.length : 0;
          this.__data__ = new Jt();
          while (++e < i) this.add(t[e]);
        }
        function oe(t) {
          return (this.__data__.set(t, o), this);
        }
        function se(t) {
          return this.__data__.has(t);
        }
        function ae(t) {
          this.__data__ = new Gt(t);
        }
        function ue() {
          this.__data__ = new Gt();
        }
        function he(t) {
          return this.__data__["delete"](t);
        }
        function le(t) {
          return this.__data__.get(t);
        }
        function ce(t) {
          return this.__data__.has(t);
        }
        function de(t, e) {
          var i = this.__data__;
          if (i instanceof Gt) {
            var n = i.__data__;
            if (!Et || n.length < r - 1) return (n.push([t, e]), this);
            i = this.__data__ = new Jt(n);
          }
          return (i.set(t, e), this);
        }
        function fe(t, e) {
          var i = ai(t) || si(t) ? ot(t.length, String) : [],
            r = i.length,
            n = !!r;
          for (var o in t)
            (!e && !yt.call(t, o)) ||
              (n && ("length" == o || Ye(o, r))) ||
              i.push(o);
          return i;
        }
        function me(t, e) {
          var i = t.length;
          while (i--) if (oi(t[i][0], e)) return i;
          return -1;
        }
        ((Dt.prototype.clear = Ft),
          (Dt.prototype["delete"] = zt),
          (Dt.prototype.get = Wt),
          (Dt.prototype.has = Ht),
          (Dt.prototype.set = qt),
          (Gt.prototype.clear = Yt),
          (Gt.prototype["delete"] = Zt),
          (Gt.prototype.get = Vt),
          (Gt.prototype.has = $t),
          (Gt.prototype.set = Xt),
          (Jt.prototype.clear = Qt),
          (Jt.prototype["delete"] = te),
          (Jt.prototype.get = ee),
          (Jt.prototype.has = ie),
          (Jt.prototype.set = re),
          (ne.prototype.add = ne.prototype.push = oe),
          (ne.prototype.has = se),
          (ae.prototype.clear = ue),
          (ae.prototype["delete"] = he),
          (ae.prototype.get = le),
          (ae.prototype.has = ce),
          (ae.prototype.set = de));
        var pe = Ue(ge),
          ve = Le();
        function ge(t, e) {
          return t && ve(t, e, wi);
        }
        function ye(t, e) {
          e = Ze(e, t) ? [e] : xe(e);
          var i = 0,
            r = e.length;
          while (null != t && i < r) t = t[ei(e[i++])];
          return i && i == r ? t : void 0;
        }
        function we(t) {
          return wt.call(t);
        }
        function Me(t, e) {
          return null != t && e in Object(t);
        }
        function be(t, e, i, r, n) {
          return (
            t === e ||
            (null == t || null == e || (!di(t) && !fi(e))
              ? t !== t && e !== e
              : _e(t, e, be, i, r, n))
          );
        }
        function _e(t, e, i, r, n, o) {
          var s = ai(t),
            u = ai(e),
            h = c,
            d = c;
          (s || ((h = qe(t)), (h = h == l ? w : h)),
            u || ((d = qe(e)), (d = d == l ? w : d)));
          var f = h == w && !ut(t),
            m = d == w && !ut(e),
            p = h == d;
          if (p && !f)
            return (
              o || (o = new ae()),
              s || pi(t) ? Ce(t, e, i, r, n, o) : De(t, e, h, i, r, n, o)
            );
          if (!(n & a)) {
            var v = f && yt.call(t, "__wrapped__"),
              g = m && yt.call(e, "__wrapped__");
            if (v || g) {
              var y = v ? t.value() : t,
                M = g ? e.value() : e;
              return (o || (o = new ae()), i(y, M, r, n, o));
            }
          }
          return !!p && (o || (o = new ae()), Fe(t, e, i, r, n, o));
        }
        function Te(t, e, i, r) {
          var n = i.length,
            o = n,
            u = !r;
          if (null == t) return !o;
          t = Object(t);
          while (n--) {
            var h = i[n];
            if (u && h[2] ? h[1] !== t[h[0]] : !(h[0] in t)) return !1;
          }
          while (++n < o) {
            h = i[n];
            var l = h[0],
              c = t[l],
              d = h[1];
            if (u && h[2]) {
              if (void 0 === c && !(l in t)) return !1;
            } else {
              var f = new ae();
              if (r) var m = r(c, d, l, t, e, f);
              if (!(void 0 === m ? be(d, c, r, s | a, f) : m)) return !1;
            }
          }
          return !0;
        }
        function Ae(t) {
          if (!di(t) || $e(t)) return !1;
          var e = li(t) || ut(t) ? Mt : W;
          return e.test(ii(t));
        }
        function ke(t) {
          return fi(t) && ci(t.length) && !!q[wt.call(t)];
        }
        function Re(t) {
          return "function" == typeof t
            ? t
            : null == t
              ? Mi
              : "object" == typeof t
                ? ai(t)
                  ? Se(t[0], t[1])
                  : Pe(t)
                : bi(t);
        }
        function Ee(t) {
          if (!Xe(t)) return kt(t);
          var e = [];
          for (var i in Object(t))
            yt.call(t, i) && "constructor" != i && e.push(i);
          return e;
        }
        function Oe(t, e) {
          var i = -1,
            r = ui(t) ? Array(t.length) : [];
          return (
            pe(t, function (t, n, o) {
              r[++i] = e(t, n, o);
            }),
            r
          );
        }
        function Pe(t) {
          var e = We(t);
          return 1 == e.length && e[0][2]
            ? Qe(e[0][0], e[0][1])
            : function (i) {
                return i === t || Te(i, t, e);
              };
        }
        function Se(t, e) {
          return Ze(t) && Je(e)
            ? Qe(ei(t), e)
            : function (i) {
                var r = gi(i, t);
                return void 0 === r && r === e
                  ? yi(i, t)
                  : be(e, r, void 0, s | a);
              };
        }
        function Ie(t, e, i) {
          var r = -1;
          e = et(e.length ? e : [Mi], st(Re));
          var n = Oe(t, function (t, i, n) {
            var o = et(e, function (e) {
              return e(t);
            });
            return { criteria: o, index: ++r, value: t };
          });
          return nt(n, function (t, e) {
            return Ke(t, e, i);
          });
        }
        function Be(t) {
          return function (e) {
            return ye(e, t);
          };
        }
        function Ne(t) {
          if ("string" == typeof t) return t;
          if (mi(t)) return Ct ? Ct.call(t) : "";
          var e = t + "";
          return "0" == e && 1 / t == -u ? "-0" : e;
        }
        function xe(t) {
          return ai(t) ? t : ti(t);
        }
        function je(t, e) {
          if (t !== e) {
            var i = void 0 !== t,
              r = null === t,
              n = t === t,
              o = mi(t),
              s = void 0 !== e,
              a = null === e,
              u = e === e,
              h = mi(e);
            if (
              (!a && !h && !o && t > e) ||
              (o && s && u && !a && !h) ||
              (r && s && u) ||
              (!i && u) ||
              !n
            )
              return 1;
            if (
              (!r && !o && !h && t < e) ||
              (h && i && n && !r && !o) ||
              (a && i && n) ||
              (!s && n) ||
              !u
            )
              return -1;
          }
          return 0;
        }
        function Ke(t, e, i) {
          var r = -1,
            n = t.criteria,
            o = e.criteria,
            s = n.length,
            a = i.length;
          while (++r < s) {
            var u = je(n[r], o[r]);
            if (u) {
              if (r >= a) return u;
              var h = i[r];
              return u * ("desc" == h ? -1 : 1);
            }
          }
          return t.index - e.index;
        }
        function Ue(t, e) {
          return function (i, r) {
            if (null == i) return i;
            if (!ui(i)) return t(i, r);
            var n = i.length,
              o = e ? n : -1,
              s = Object(i);
            while (e ? o-- : ++o < n) if (!1 === r(s[o], o, s)) break;
            return i;
          };
        }
        function Le(t) {
          return function (e, i, r) {
            var n = -1,
              o = Object(e),
              s = r(e),
              a = s.length;
            while (a--) {
              var u = s[t ? a : ++n];
              if (!1 === i(o[u], u, o)) break;
            }
            return e;
          };
        }
        function Ce(t, e, i, r, n, o) {
          var u = n & a,
            h = t.length,
            l = e.length;
          if (h != l && !(u && l > h)) return !1;
          var c = o.get(t);
          if (c && o.get(e)) return c == e;
          var d = -1,
            f = !0,
            m = n & s ? new ne() : void 0;
          (o.set(t, e), o.set(e, t));
          while (++d < h) {
            var p = t[d],
              v = e[d];
            if (r) var g = u ? r(v, p, d, e, t, o) : r(p, v, d, t, e, o);
            if (void 0 !== g) {
              if (g) continue;
              f = !1;
              break;
            }
            if (m) {
              if (
                !it(e, function (t, e) {
                  if (!m.has(e) && (p === t || i(p, t, r, n, o)))
                    return m.add(e);
                })
              ) {
                f = !1;
                break;
              }
            } else if (p !== v && !i(p, v, r, n, o)) {
              f = !1;
              break;
            }
          }
          return (o["delete"](t), o["delete"](e), f);
        }
        function De(t, e, i, r, n, o, u) {
          switch (i) {
            case E:
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
              ((t = t.buffer), (e = e.buffer));
            case R:
              return !(
                t.byteLength != e.byteLength || !r(new _t(t), new _t(e))
              );
            case d:
            case f:
            case y:
              return oi(+t, +e);
            case m:
              return t.name == e.name && t.message == e.message;
            case b:
            case T:
              return t == e + "";
            case g:
              var h = ht;
            case _:
              var l = o & a;
              if ((h || (h = ct), t.size != e.size && !l)) return !1;
              var c = u.get(t);
              if (c) return c == e;
              ((o |= s), u.set(t, e));
              var p = Ce(h(t), h(e), r, n, o, u);
              return (u["delete"](t), p);
            case A:
              if (Lt) return Lt.call(t) == Lt.call(e);
          }
          return !1;
        }
        function Fe(t, e, i, r, n, o) {
          var s = n & a,
            u = wi(t),
            h = u.length,
            l = wi(e),
            c = l.length;
          if (h != c && !s) return !1;
          var d = h;
          while (d--) {
            var f = u[d];
            if (!(s ? f in e : yt.call(e, f))) return !1;
          }
          var m = o.get(t);
          if (m && o.get(e)) return m == e;
          var p = !0;
          (o.set(t, e), o.set(e, t));
          var v = s;
          while (++d < h) {
            f = u[d];
            var g = t[f],
              y = e[f];
            if (r) var w = s ? r(y, g, f, e, t, o) : r(g, y, f, t, e, o);
            if (!(void 0 === w ? g === y || i(g, y, r, n, o) : w)) {
              p = !1;
              break;
            }
            v || (v = "constructor" == f);
          }
          if (p && !v) {
            var M = t.constructor,
              b = e.constructor;
            M == b ||
              !("constructor" in t) ||
              !("constructor" in e) ||
              ("function" == typeof M &&
                M instanceof M &&
                "function" == typeof b &&
                b instanceof b) ||
              (p = !1);
          }
          return (o["delete"](t), o["delete"](e), p);
        }
        function ze(t, e) {
          var i = t.__data__;
          return Ve(e) ? i["string" == typeof e ? "string" : "hash"] : i.map;
        }
        function We(t) {
          var e = wi(t),
            i = e.length;
          while (i--) {
            var r = e[i],
              n = t[r];
            e[i] = [r, n, Je(n)];
          }
          return e;
        }
        function He(t, e) {
          var i = at(t, e);
          return Ae(i) ? i : void 0;
        }
        var qe = we;
        function Ge(t, e, i) {
          e = Ze(e, t) ? [e] : xe(e);
          var r,
            n = -1,
            o = e.length;
          while (++n < o) {
            var s = ei(e[n]);
            if (!(r = null != t && i(t, s))) break;
            t = t[s];
          }
          if (r) return r;
          o = t ? t.length : 0;
          return !!o && ci(o) && Ye(s, o) && (ai(t) || si(t));
        }
        function Ye(t, e) {
          return (
            (e = null == e ? h : e),
            !!e &&
              ("number" == typeof t || H.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
          );
        }
        function Ze(t, e) {
          if (ai(t)) return !1;
          var i = typeof t;
          return (
            !(
              "number" != i &&
              "symbol" != i &&
              "boolean" != i &&
              null != t &&
              !mi(t)
            ) ||
            L.test(t) ||
            !U.test(t) ||
            (null != e && t in Object(e))
          );
        }
        function Ve(t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        }
        function $e(t) {
          return !!vt && vt in t;
        }
        function Xe(t) {
          var e = t && t.constructor,
            i = ("function" == typeof e && e.prototype) || mt;
          return t === i;
        }
        function Je(t) {
          return t === t && !di(t);
        }
        function Qe(t, e) {
          return function (i) {
            return null != i && i[t] === e && (void 0 !== e || t in Object(i));
          };
        }
        ((Rt && qe(new Rt(new ArrayBuffer(1))) != E) ||
          (Et && qe(new Et()) != g) ||
          (Ot && qe(Ot.resolve()) != M) ||
          (Pt && qe(new Pt()) != _) ||
          (St && qe(new St()) != k)) &&
          (qe = function (t) {
            var e = wt.call(t),
              i = e == w ? t.constructor : void 0,
              r = i ? ii(i) : void 0;
            if (r)
              switch (r) {
                case Bt:
                  return E;
                case Nt:
                  return g;
                case xt:
                  return M;
                case jt:
                  return _;
                case Kt:
                  return k;
              }
            return e;
          });
        var ti = ni(function (t) {
          t = vi(t);
          var e = [];
          return (
            C.test(t) && e.push(""),
            t.replace(D, function (t, i, r, n) {
              e.push(r ? n.replace(z, "$1") : i || t);
            }),
            e
          );
        });
        function ei(t) {
          if ("string" == typeof t || mi(t)) return t;
          var e = t + "";
          return "0" == e && 1 / t == -u ? "-0" : e;
        }
        function ii(t) {
          if (null != t) {
            try {
              return gt.call(t);
            } catch (e) {}
            try {
              return t + "";
            } catch (e) {}
          }
          return "";
        }
        function ri(t, e, i, r) {
          return null == t
            ? []
            : (ai(e) || (e = null == e ? [] : [e]),
              (i = r ? void 0 : i),
              ai(i) || (i = null == i ? [] : [i]),
              Ie(t, e, i));
        }
        function ni(t, e) {
          if ("function" != typeof t || (e && "function" != typeof e))
            throw new TypeError(n);
          var i = function () {
            var r = arguments,
              n = e ? e.apply(this, r) : r[0],
              o = i.cache;
            if (o.has(n)) return o.get(n);
            var s = t.apply(this, r);
            return ((i.cache = o.set(n, s)), s);
          };
          return ((i.cache = new (ni.Cache || Jt)()), i);
        }
        function oi(t, e) {
          return t === e || (t !== t && e !== e);
        }
        function si(t) {
          return (
            hi(t) &&
            yt.call(t, "callee") &&
            (!Tt.call(t, "callee") || wt.call(t) == l)
          );
        }
        ni.Cache = Jt;
        var ai = Array.isArray;
        function ui(t) {
          return null != t && ci(t.length) && !li(t);
        }
        function hi(t) {
          return fi(t) && ui(t);
        }
        function li(t) {
          var e = di(t) ? wt.call(t) : "";
          return e == p || e == v;
        }
        function ci(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= h;
        }
        function di(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function fi(t) {
          return !!t && "object" == typeof t;
        }
        function mi(t) {
          return "symbol" == typeof t || (fi(t) && wt.call(t) == A);
        }
        var pi = tt ? st(tt) : ke;
        function vi(t) {
          return null == t ? "" : Ne(t);
        }
        function gi(t, e, i) {
          var r = null == t ? void 0 : ye(t, e);
          return void 0 === r ? i : r;
        }
        function yi(t, e) {
          return null != t && Ge(t, e, Me);
        }
        function wi(t) {
          return ui(t) ? fe(t) : Ee(t);
        }
        function Mi(t) {
          return t;
        }
        function bi(t) {
          return Ze(t) ? rt(ei(t)) : Be(t);
        }
        i.exports = ri;
      }).call(this, i(13), i(20)(t));
    },
    5890: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TOKEN_PROGRAM = void 0),
        (e.TOKEN_PROGRAM = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"));
    },
    5891: function (t, e, i) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function r(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function n(t, e) {
            t.super_ = e;
            var i = function () {};
            ((i.prototype = e.prototype),
              (t.prototype = new i()),
              (t.prototype.constructor = t));
          }
          function o(t, e, i) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((i = e), (e = 10)),
                this._init(t || 0, e || 10, i || "be")));
          }
          var s;
          ("object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : i(7195).Buffer;
          } catch (S) {}
          function a(t, e) {
            var i = t.charCodeAt(e);
            return i >= 48 && i <= 57
              ? i - 48
              : i >= 65 && i <= 70
                ? i - 55
                : i >= 97 && i <= 102
                  ? i - 87
                  : void r(!1, "Invalid character in " + t);
          }
          function u(t, e, i) {
            var r = a(t, i);
            return (i - 1 >= e && (r |= a(t, i - 1) << 4), r);
          }
          function h(t, e, i, n) {
            for (
              var o = 0, s = 0, a = Math.min(t.length, i), u = e;
              u < a;
              u++
            ) {
              var h = t.charCodeAt(u) - 48;
              ((o *= n),
                (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                r(h >= 0 && s < n, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, i) {
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
                      "le" === i && this._initArray(this.toArray(), e, i))));
            }),
            (o.prototype._initNumber = function (t, e, i) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
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
            (o.prototype._initArray = function (t, e, i) {
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
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, i) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                o = 0,
                s = 0;
              if ("be" === i)
                for (r = t.length - 1; r >= e; r -= 2)
                  ((n = u(t, e, r) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              else {
                var a = t.length - e;
                for (r = a % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  ((n = u(t, e, r) << o),
                    (this.words[s] |= 67108863 & n),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, i) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
              (r--, (n = (n / e) | 0));
              for (
                var o = t.length - i,
                  s = o % r,
                  a = Math.min(o, o - s) + i,
                  u = 0,
                  l = i;
                l < a;
                l += r
              )
                ((u = h(t, l, l + r, e)),
                  this.imuln(n),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== s) {
                var c = 1;
                for (u = h(t, l, t.length, e), l = 0; l < s; l++) c *= e;
                (this.imuln(c),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              l(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
            } catch (S) {
              o.prototype.inspect = c;
            }
          else o.prototype.inspect = c;
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var d = [
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
            f = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            m = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var i;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              i = "";
              for (var n = 0, o = 0, s = 0; s < this.length; s++) {
                var a = this.words[s],
                  u = (16777215 & ((a << n) | o)).toString(16);
                ((o = (a >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), s--),
                  (i =
                    0 !== o || s !== this.length - 1
                      ? d[6 - u.length] + u + i
                      : u + i));
              }
              0 !== o && (i = o.toString(16) + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var h = f[t],
                l = m[t];
              i = "";
              var c = this.clone();
              c.negative = 0;
              while (!c.isZero()) {
                var p = c.modrn(l).toString(t);
                ((c = c.idivn(l)),
                  (i = c.isZero() ? p + i : d[h - p.length] + p + i));
              }
              this.isZero() && (i = "0" + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
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
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(s, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var p = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function v(t) {
            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
              var r = (i / 26) | 0,
                n = i % 26;
              e[i] = (t.words[r] >>> n) & 1;
            }
            return e;
          }
          function g(t, e, i) {
            i.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            ((i.length = r), (r = (r - 1) | 0));
            var n = 0 | t.words[0],
              o = 0 | e.words[0],
              s = n * o,
              a = 67108863 & s,
              u = (s / 67108864) | 0;
            i.words[0] = a;
            for (var h = 1; h < r; h++) {
              for (
                var l = u >>> 26,
                  c = 67108863 & u,
                  d = Math.min(h, e.length - 1),
                  f = Math.max(0, h - t.length + 1);
                f <= d;
                f++
              ) {
                var m = (h - f) | 0;
                ((n = 0 | t.words[m]),
                  (o = 0 | e.words[f]),
                  (s = n * o + c),
                  (l += (s / 67108864) | 0),
                  (c = 67108863 & s));
              }
              ((i.words[h] = 0 | c), (u = 0 | l));
            }
            return (0 !== u ? (i.words[h] = 0 | u) : i.length--, i._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, i) {
            this._strip();
            var n = this.byteLength(),
              o = i || Math.max(1, n);
            (r(n <= o, "byte array longer than desired length"),
              r(o > 0, "Requested array length <= 0"));
            var s = p(t, o),
              a = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + a](s, n), s);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var i = 0, r = 0, n = 0, o = 0; n < this.length; n++) {
                var s = (this.words[n] << o) | r;
                ((t[i++] = 255 & s),
                  i < t.length && (t[i++] = (s >> 8) & 255),
                  i < t.length && (t[i++] = (s >> 16) & 255),
                  6 === o
                    ? (i < t.length && (t[i++] = (s >> 24) & 255),
                      (r = 0),
                      (o = 0))
                    : ((r = s >>> 24), (o += 2)));
              }
              if (i < t.length) {
                t[i++] = r;
                while (i < t.length) t[i++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var i = t.length - 1, r = 0, n = 0, o = 0;
                n < this.length;
                n++
              ) {
                var s = (this.words[n] << o) | r;
                ((t[i--] = 255 & s),
                  i >= 0 && (t[i--] = (s >> 8) & 255),
                  i >= 0 && (t[i--] = (s >> 16) & 255),
                  6 === o
                    ? (i >= 0 && (t[i--] = (s >> 24) & 255), (r = 0), (o = 0))
                    : ((r = s >>> 24), (o += 2)));
              }
              if (i >= 0) {
                t[i--] = r;
                while (i >= 0) t[i--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    i = 0;
                  return (
                    e >= 4096 && ((i += 13), (e >>>= 13)),
                    e >= 64 && ((i += 7), (e >>>= 7)),
                    e >= 8 && ((i += 4), (e >>>= 4)),
                    e >= 2 && ((i += 2), (e >>>= 2)),
                    i + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                i = 0;
              return (
                0 === (8191 & e) && ((i += 13), (e >>>= 13)),
                0 === (127 & e) && ((i += 7), (e >>>= 7)),
                0 === (15 & e) && ((i += 4), (e >>>= 4)),
                0 === (3 & e) && ((i += 2), (e >>>= 2)),
                0 === (1 & e) && i++,
                i
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var i = this._zeroBits(this.words[e]);
                if (((t += i), 26 !== i)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var i = 0; i < e.length; i++)
                this.words[i] = this.words[i] & t.words[i];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, i;
              this.length > t.length
                ? ((e = this), (i = t))
                : ((e = t), (i = this));
              for (var r = 0; r < i.length; r++)
                this.words[r] = e.words[r] ^ i.words[r];
              if (this !== e)
                for (; r < e.length; r++) this.words[r] = e.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                i = t % 26;
              (this._expand(e), i > 0 && e--);
              for (var n = 0; n < e; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                i > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - i))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              r("number" === typeof t && t >= 0);
              var i = (t / 26) | 0,
                n = t % 26;
              return (
                this._expand(i + 1),
                (this.words[i] = e
                  ? this.words[i] | (1 << n)
                  : this.words[i] & ~(1 << n)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, i, r;
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
                ? ((i = this), (r = t))
                : ((i = t), (r = this));
              for (var n = 0, o = 0; o < r.length; o++)
                ((e = (0 | i.words[o]) + (0 | r.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && o < i.length; o++)
                ((e = (0 | i.words[o]) + n),
                  (this.words[o] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = i.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (i !== this)
                for (; o < i.length; o++) this.words[o] = i.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
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
              var i,
                r,
                n = this.cmp(t);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
              for (var o = 0, s = 0; s < r.length; s++)
                ((e = (0 | i.words[s]) - (0 | r.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              for (; 0 !== o && s < i.length; s++)
                ((e = (0 | i.words[s]) + o),
                  (o = e >> 26),
                  (this.words[s] = 67108863 & e));
              if (0 === o && s < i.length && i !== this)
                for (; s < i.length; s++) this.words[s] = i.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                i !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, e, i) {
            var r,
              n,
              o,
              s = t.words,
              a = e.words,
              u = i.words,
              h = 0,
              l = 0 | s[0],
              c = 8191 & l,
              d = l >>> 13,
              f = 0 | s[1],
              m = 8191 & f,
              p = f >>> 13,
              v = 0 | s[2],
              g = 8191 & v,
              y = v >>> 13,
              w = 0 | s[3],
              M = 8191 & w,
              b = w >>> 13,
              _ = 0 | s[4],
              T = 8191 & _,
              A = _ >>> 13,
              k = 0 | s[5],
              R = 8191 & k,
              E = k >>> 13,
              O = 0 | s[6],
              P = 8191 & O,
              S = O >>> 13,
              I = 0 | s[7],
              B = 8191 & I,
              N = I >>> 13,
              x = 0 | s[8],
              j = 8191 & x,
              K = x >>> 13,
              U = 0 | s[9],
              L = 8191 & U,
              C = U >>> 13,
              D = 0 | a[0],
              F = 8191 & D,
              z = D >>> 13,
              W = 0 | a[1],
              H = 8191 & W,
              q = W >>> 13,
              G = 0 | a[2],
              Y = 8191 & G,
              Z = G >>> 13,
              V = 0 | a[3],
              $ = 8191 & V,
              X = V >>> 13,
              J = 0 | a[4],
              Q = 8191 & J,
              tt = J >>> 13,
              et = 0 | a[5],
              it = 8191 & et,
              rt = et >>> 13,
              nt = 0 | a[6],
              ot = 8191 & nt,
              st = nt >>> 13,
              at = 0 | a[7],
              ut = 8191 & at,
              ht = at >>> 13,
              lt = 0 | a[8],
              ct = 8191 & lt,
              dt = lt >>> 13,
              ft = 0 | a[9],
              mt = 8191 & ft,
              pt = ft >>> 13;
            ((i.negative = t.negative ^ e.negative),
              (i.length = 19),
              (r = Math.imul(c, F)),
              (n = Math.imul(c, z)),
              (n = (n + Math.imul(d, F)) | 0),
              (o = Math.imul(d, z)));
            var vt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(m, F)),
              (n = Math.imul(m, z)),
              (n = (n + Math.imul(p, F)) | 0),
              (o = Math.imul(p, z)),
              (r = (r + Math.imul(c, H)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (n = (n + Math.imul(d, H)) | 0),
              (o = (o + Math.imul(d, q)) | 0));
            var gt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (r = Math.imul(g, F)),
              (n = Math.imul(g, z)),
              (n = (n + Math.imul(y, F)) | 0),
              (o = Math.imul(y, z)),
              (r = (r + Math.imul(m, H)) | 0),
              (n = (n + Math.imul(m, q)) | 0),
              (n = (n + Math.imul(p, H)) | 0),
              (o = (o + Math.imul(p, q)) | 0),
              (r = (r + Math.imul(c, Y)) | 0),
              (n = (n + Math.imul(c, Z)) | 0),
              (n = (n + Math.imul(d, Y)) | 0),
              (o = (o + Math.imul(d, Z)) | 0));
            var yt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(M, F)),
              (n = Math.imul(M, z)),
              (n = (n + Math.imul(b, F)) | 0),
              (o = Math.imul(b, z)),
              (r = (r + Math.imul(g, H)) | 0),
              (n = (n + Math.imul(g, q)) | 0),
              (n = (n + Math.imul(y, H)) | 0),
              (o = (o + Math.imul(y, q)) | 0),
              (r = (r + Math.imul(m, Y)) | 0),
              (n = (n + Math.imul(m, Z)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (o = (o + Math.imul(p, Z)) | 0),
              (r = (r + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(c, X)) | 0),
              (n = (n + Math.imul(d, $)) | 0),
              (o = (o + Math.imul(d, X)) | 0));
            var wt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(T, F)),
              (n = Math.imul(T, z)),
              (n = (n + Math.imul(A, F)) | 0),
              (o = Math.imul(A, z)),
              (r = (r + Math.imul(M, H)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(b, H)) | 0),
              (o = (o + Math.imul(b, q)) | 0),
              (r = (r + Math.imul(g, Y)) | 0),
              (n = (n + Math.imul(g, Z)) | 0),
              (n = (n + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, Z)) | 0),
              (r = (r + Math.imul(m, $)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (o = (o + Math.imul(p, X)) | 0),
              (r = (r + Math.imul(c, Q)) | 0),
              (n = (n + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(d, Q)) | 0),
              (o = (o + Math.imul(d, tt)) | 0));
            var Mt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(R, F)),
              (n = Math.imul(R, z)),
              (n = (n + Math.imul(E, F)) | 0),
              (o = Math.imul(E, z)),
              (r = (r + Math.imul(T, H)) | 0),
              (n = (n + Math.imul(T, q)) | 0),
              (n = (n + Math.imul(A, H)) | 0),
              (o = (o + Math.imul(A, q)) | 0),
              (r = (r + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (o = (o + Math.imul(b, Z)) | 0),
              (r = (r + Math.imul(g, $)) | 0),
              (n = (n + Math.imul(g, X)) | 0),
              (n = (n + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, X)) | 0),
              (r = (r + Math.imul(m, Q)) | 0),
              (n = (n + Math.imul(m, tt)) | 0),
              (n = (n + Math.imul(p, Q)) | 0),
              (o = (o + Math.imul(p, tt)) | 0),
              (r = (r + Math.imul(c, it)) | 0),
              (n = (n + Math.imul(c, rt)) | 0),
              (n = (n + Math.imul(d, it)) | 0),
              (o = (o + Math.imul(d, rt)) | 0));
            var bt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (r = Math.imul(P, F)),
              (n = Math.imul(P, z)),
              (n = (n + Math.imul(S, F)) | 0),
              (o = Math.imul(S, z)),
              (r = (r + Math.imul(R, H)) | 0),
              (n = (n + Math.imul(R, q)) | 0),
              (n = (n + Math.imul(E, H)) | 0),
              (o = (o + Math.imul(E, q)) | 0),
              (r = (r + Math.imul(T, Y)) | 0),
              (n = (n + Math.imul(T, Z)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (o = (o + Math.imul(A, Z)) | 0),
              (r = (r + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(M, X)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (o = (o + Math.imul(b, X)) | 0),
              (r = (r + Math.imul(g, Q)) | 0),
              (n = (n + Math.imul(g, tt)) | 0),
              (n = (n + Math.imul(y, Q)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (r = (r + Math.imul(m, it)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (n = (n + Math.imul(p, it)) | 0),
              (o = (o + Math.imul(p, rt)) | 0),
              (r = (r + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(c, st)) | 0),
              (n = (n + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, st)) | 0));
            var _t = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(B, F)),
              (n = Math.imul(B, z)),
              (n = (n + Math.imul(N, F)) | 0),
              (o = Math.imul(N, z)),
              (r = (r + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(P, q)) | 0),
              (n = (n + Math.imul(S, H)) | 0),
              (o = (o + Math.imul(S, q)) | 0),
              (r = (r + Math.imul(R, Y)) | 0),
              (n = (n + Math.imul(R, Z)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (o = (o + Math.imul(E, Z)) | 0),
              (r = (r + Math.imul(T, $)) | 0),
              (n = (n + Math.imul(T, X)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (o = (o + Math.imul(A, X)) | 0),
              (r = (r + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(b, Q)) | 0),
              (o = (o + Math.imul(b, tt)) | 0),
              (r = (r + Math.imul(g, it)) | 0),
              (n = (n + Math.imul(g, rt)) | 0),
              (n = (n + Math.imul(y, it)) | 0),
              (o = (o + Math.imul(y, rt)) | 0),
              (r = (r + Math.imul(m, ot)) | 0),
              (n = (n + Math.imul(m, st)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (o = (o + Math.imul(p, st)) | 0),
              (r = (r + Math.imul(c, ut)) | 0),
              (n = (n + Math.imul(c, ht)) | 0),
              (n = (n + Math.imul(d, ut)) | 0),
              (o = (o + Math.imul(d, ht)) | 0));
            var Tt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (r = Math.imul(j, F)),
              (n = Math.imul(j, z)),
              (n = (n + Math.imul(K, F)) | 0),
              (o = Math.imul(K, z)),
              (r = (r + Math.imul(B, H)) | 0),
              (n = (n + Math.imul(B, q)) | 0),
              (n = (n + Math.imul(N, H)) | 0),
              (o = (o + Math.imul(N, q)) | 0),
              (r = (r + Math.imul(P, Y)) | 0),
              (n = (n + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (o = (o + Math.imul(S, Z)) | 0),
              (r = (r + Math.imul(R, $)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (o = (o + Math.imul(E, X)) | 0),
              (r = (r + Math.imul(T, Q)) | 0),
              (n = (n + Math.imul(T, tt)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (o = (o + Math.imul(A, tt)) | 0),
              (r = (r + Math.imul(M, it)) | 0),
              (n = (n + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(b, it)) | 0),
              (o = (o + Math.imul(b, rt)) | 0),
              (r = (r + Math.imul(g, ot)) | 0),
              (n = (n + Math.imul(g, st)) | 0),
              (n = (n + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, st)) | 0),
              (r = (r + Math.imul(m, ut)) | 0),
              (n = (n + Math.imul(m, ht)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (o = (o + Math.imul(p, ht)) | 0),
              (r = (r + Math.imul(c, ct)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(d, ct)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var At = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(L, F)),
              (n = Math.imul(L, z)),
              (n = (n + Math.imul(C, F)) | 0),
              (o = Math.imul(C, z)),
              (r = (r + Math.imul(j, H)) | 0),
              (n = (n + Math.imul(j, q)) | 0),
              (n = (n + Math.imul(K, H)) | 0),
              (o = (o + Math.imul(K, q)) | 0),
              (r = (r + Math.imul(B, Y)) | 0),
              (n = (n + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (o = (o + Math.imul(N, Z)) | 0),
              (r = (r + Math.imul(P, $)) | 0),
              (n = (n + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(S, $)) | 0),
              (o = (o + Math.imul(S, X)) | 0),
              (r = (r + Math.imul(R, Q)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (n = (n + Math.imul(E, Q)) | 0),
              (o = (o + Math.imul(E, tt)) | 0),
              (r = (r + Math.imul(T, it)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (n = (n + Math.imul(A, it)) | 0),
              (o = (o + Math.imul(A, rt)) | 0),
              (r = (r + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, st)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (o = (o + Math.imul(b, st)) | 0),
              (r = (r + Math.imul(g, ut)) | 0),
              (n = (n + Math.imul(g, ht)) | 0),
              (n = (n + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, ht)) | 0),
              (r = (r + Math.imul(m, ct)) | 0),
              (n = (n + Math.imul(m, dt)) | 0),
              (n = (n + Math.imul(p, ct)) | 0),
              (o = (o + Math.imul(p, dt)) | 0),
              (r = (r + Math.imul(c, mt)) | 0),
              (n = (n + Math.imul(c, pt)) | 0),
              (n = (n + Math.imul(d, mt)) | 0),
              (o = (o + Math.imul(d, pt)) | 0));
            var kt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(L, H)),
              (n = Math.imul(L, q)),
              (n = (n + Math.imul(C, H)) | 0),
              (o = Math.imul(C, q)),
              (r = (r + Math.imul(j, Y)) | 0),
              (n = (n + Math.imul(j, Z)) | 0),
              (n = (n + Math.imul(K, Y)) | 0),
              (o = (o + Math.imul(K, Z)) | 0),
              (r = (r + Math.imul(B, $)) | 0),
              (n = (n + Math.imul(B, X)) | 0),
              (n = (n + Math.imul(N, $)) | 0),
              (o = (o + Math.imul(N, X)) | 0),
              (r = (r + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, tt)) | 0),
              (n = (n + Math.imul(S, Q)) | 0),
              (o = (o + Math.imul(S, tt)) | 0),
              (r = (r + Math.imul(R, it)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (n = (n + Math.imul(E, it)) | 0),
              (o = (o + Math.imul(E, rt)) | 0),
              (r = (r + Math.imul(T, ot)) | 0),
              (n = (n + Math.imul(T, st)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (o = (o + Math.imul(A, st)) | 0),
              (r = (r + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, ht)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (o = (o + Math.imul(b, ht)) | 0),
              (r = (r + Math.imul(g, ct)) | 0),
              (n = (n + Math.imul(g, dt)) | 0),
              (n = (n + Math.imul(y, ct)) | 0),
              (o = (o + Math.imul(y, dt)) | 0),
              (r = (r + Math.imul(m, mt)) | 0),
              (n = (n + Math.imul(m, pt)) | 0),
              (n = (n + Math.imul(p, mt)) | 0),
              (o = (o + Math.imul(p, pt)) | 0));
            var Rt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(L, Y)),
              (n = Math.imul(L, Z)),
              (n = (n + Math.imul(C, Y)) | 0),
              (o = Math.imul(C, Z)),
              (r = (r + Math.imul(j, $)) | 0),
              (n = (n + Math.imul(j, X)) | 0),
              (n = (n + Math.imul(K, $)) | 0),
              (o = (o + Math.imul(K, X)) | 0),
              (r = (r + Math.imul(B, Q)) | 0),
              (n = (n + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(N, Q)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (r = (r + Math.imul(P, it)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (n = (n + Math.imul(S, it)) | 0),
              (o = (o + Math.imul(S, rt)) | 0),
              (r = (r + Math.imul(R, ot)) | 0),
              (n = (n + Math.imul(R, st)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (o = (o + Math.imul(E, st)) | 0),
              (r = (r + Math.imul(T, ut)) | 0),
              (n = (n + Math.imul(T, ht)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (o = (o + Math.imul(A, ht)) | 0),
              (r = (r + Math.imul(M, ct)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(b, ct)) | 0),
              (o = (o + Math.imul(b, dt)) | 0),
              (r = (r + Math.imul(g, mt)) | 0),
              (n = (n + Math.imul(g, pt)) | 0),
              (n = (n + Math.imul(y, mt)) | 0),
              (o = (o + Math.imul(y, pt)) | 0));
            var Et = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(L, $)),
              (n = Math.imul(L, X)),
              (n = (n + Math.imul(C, $)) | 0),
              (o = Math.imul(C, X)),
              (r = (r + Math.imul(j, Q)) | 0),
              (n = (n + Math.imul(j, tt)) | 0),
              (n = (n + Math.imul(K, Q)) | 0),
              (o = (o + Math.imul(K, tt)) | 0),
              (r = (r + Math.imul(B, it)) | 0),
              (n = (n + Math.imul(B, rt)) | 0),
              (n = (n + Math.imul(N, it)) | 0),
              (o = (o + Math.imul(N, rt)) | 0),
              (r = (r + Math.imul(P, ot)) | 0),
              (n = (n + Math.imul(P, st)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (o = (o + Math.imul(S, st)) | 0),
              (r = (r + Math.imul(R, ut)) | 0),
              (n = (n + Math.imul(R, ht)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (o = (o + Math.imul(E, ht)) | 0),
              (r = (r + Math.imul(T, ct)) | 0),
              (n = (n + Math.imul(T, dt)) | 0),
              (n = (n + Math.imul(A, ct)) | 0),
              (o = (o + Math.imul(A, dt)) | 0),
              (r = (r + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(M, pt)) | 0),
              (n = (n + Math.imul(b, mt)) | 0),
              (o = (o + Math.imul(b, pt)) | 0));
            var Ot = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (r = Math.imul(L, Q)),
              (n = Math.imul(L, tt)),
              (n = (n + Math.imul(C, Q)) | 0),
              (o = Math.imul(C, tt)),
              (r = (r + Math.imul(j, it)) | 0),
              (n = (n + Math.imul(j, rt)) | 0),
              (n = (n + Math.imul(K, it)) | 0),
              (o = (o + Math.imul(K, rt)) | 0),
              (r = (r + Math.imul(B, ot)) | 0),
              (n = (n + Math.imul(B, st)) | 0),
              (n = (n + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, st)) | 0),
              (r = (r + Math.imul(P, ut)) | 0),
              (n = (n + Math.imul(P, ht)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (o = (o + Math.imul(S, ht)) | 0),
              (r = (r + Math.imul(R, ct)) | 0),
              (n = (n + Math.imul(R, dt)) | 0),
              (n = (n + Math.imul(E, ct)) | 0),
              (o = (o + Math.imul(E, dt)) | 0),
              (r = (r + Math.imul(T, mt)) | 0),
              (n = (n + Math.imul(T, pt)) | 0),
              (n = (n + Math.imul(A, mt)) | 0),
              (o = (o + Math.imul(A, pt)) | 0));
            var Pt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (r = Math.imul(L, it)),
              (n = Math.imul(L, rt)),
              (n = (n + Math.imul(C, it)) | 0),
              (o = Math.imul(C, rt)),
              (r = (r + Math.imul(j, ot)) | 0),
              (n = (n + Math.imul(j, st)) | 0),
              (n = (n + Math.imul(K, ot)) | 0),
              (o = (o + Math.imul(K, st)) | 0),
              (r = (r + Math.imul(B, ut)) | 0),
              (n = (n + Math.imul(B, ht)) | 0),
              (n = (n + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, ht)) | 0),
              (r = (r + Math.imul(P, ct)) | 0),
              (n = (n + Math.imul(P, dt)) | 0),
              (n = (n + Math.imul(S, ct)) | 0),
              (o = (o + Math.imul(S, dt)) | 0),
              (r = (r + Math.imul(R, mt)) | 0),
              (n = (n + Math.imul(R, pt)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (o = (o + Math.imul(E, pt)) | 0));
            var St = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(L, ot)),
              (n = Math.imul(L, st)),
              (n = (n + Math.imul(C, ot)) | 0),
              (o = Math.imul(C, st)),
              (r = (r + Math.imul(j, ut)) | 0),
              (n = (n + Math.imul(j, ht)) | 0),
              (n = (n + Math.imul(K, ut)) | 0),
              (o = (o + Math.imul(K, ht)) | 0),
              (r = (r + Math.imul(B, ct)) | 0),
              (n = (n + Math.imul(B, dt)) | 0),
              (n = (n + Math.imul(N, ct)) | 0),
              (o = (o + Math.imul(N, dt)) | 0),
              (r = (r + Math.imul(P, mt)) | 0),
              (n = (n + Math.imul(P, pt)) | 0),
              (n = (n + Math.imul(S, mt)) | 0),
              (o = (o + Math.imul(S, pt)) | 0));
            var It = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (r = Math.imul(L, ut)),
              (n = Math.imul(L, ht)),
              (n = (n + Math.imul(C, ut)) | 0),
              (o = Math.imul(C, ht)),
              (r = (r + Math.imul(j, ct)) | 0),
              (n = (n + Math.imul(j, dt)) | 0),
              (n = (n + Math.imul(K, ct)) | 0),
              (o = (o + Math.imul(K, dt)) | 0),
              (r = (r + Math.imul(B, mt)) | 0),
              (n = (n + Math.imul(B, pt)) | 0),
              (n = (n + Math.imul(N, mt)) | 0),
              (o = (o + Math.imul(N, pt)) | 0));
            var Bt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (r = Math.imul(L, ct)),
              (n = Math.imul(L, dt)),
              (n = (n + Math.imul(C, ct)) | 0),
              (o = Math.imul(C, dt)),
              (r = (r + Math.imul(j, mt)) | 0),
              (n = (n + Math.imul(j, pt)) | 0),
              (n = (n + Math.imul(K, mt)) | 0),
              (o = (o + Math.imul(K, pt)) | 0));
            var Nt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            ((h = (((o + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (r = Math.imul(L, mt)),
              (n = Math.imul(L, pt)),
              (n = (n + Math.imul(C, mt)) | 0),
              (o = Math.imul(C, pt)));
            var xt = (((h + r) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (h = (((o + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (u[0] = vt),
              (u[1] = gt),
              (u[2] = yt),
              (u[3] = wt),
              (u[4] = Mt),
              (u[5] = bt),
              (u[6] = _t),
              (u[7] = Tt),
              (u[8] = At),
              (u[9] = kt),
              (u[10] = Rt),
              (u[11] = Et),
              (u[12] = Ot),
              (u[13] = Pt),
              (u[14] = St),
              (u[15] = It),
              (u[16] = Bt),
              (u[17] = Nt),
              (u[18] = xt),
              0 !== h && ((u[19] = h), i.length++),
              i
            );
          };
          function w(t, e, i) {
            ((i.negative = e.negative ^ t.negative),
              (i.length = t.length + e.length));
            for (var r = 0, n = 0, o = 0; o < i.length - 1; o++) {
              var s = n;
              n = 0;
              for (
                var a = 67108863 & r,
                  u = Math.min(o, e.length - 1),
                  h = Math.max(0, o - t.length + 1);
                h <= u;
                h++
              ) {
                var l = o - h,
                  c = 0 | t.words[l],
                  d = 0 | e.words[h],
                  f = c * d,
                  m = 67108863 & f;
                ((s = (s + ((f / 67108864) | 0)) | 0),
                  (m = (m + a) | 0),
                  (a = 67108863 & m),
                  (s = (s + (m >>> 26)) | 0),
                  (n += s >>> 26),
                  (s &= 67108863));
              }
              ((i.words[o] = a), (r = s), (s = n));
            }
            return (0 !== r ? (i.words[o] = r) : i.length--, i._strip());
          }
          function M(t, e, i) {
            return w(t, e, i);
          }
          function b(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (y = g),
            (o.prototype.mulTo = function (t, e) {
              var i,
                r = this.length + t.length;
              return (
                (i =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : r < 63
                      ? g(this, t, e)
                      : r < 1024
                        ? w(this, t, e)
                        : M(this, t, e)),
                i
              );
            }),
            (b.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), i = o.prototype._countBits(t) - 1, r = 0;
                r < t;
                r++
              )
                e[r] = this.revBin(r, i, t);
              return e;
            }),
            (b.prototype.revBin = function (t, e, i) {
              if (0 === t || t === i - 1) return t;
              for (var r = 0, n = 0; n < e; n++)
                ((r |= (1 & t) << (e - n - 1)), (t >>= 1));
              return r;
            }),
            (b.prototype.permute = function (t, e, i, r, n, o) {
              for (var s = 0; s < o; s++) ((r[s] = e[t[s]]), (n[s] = i[t[s]]));
            }),
            (b.prototype.transform = function (t, e, i, r, n, o) {
              this.permute(o, t, e, i, r, n);
              for (var s = 1; s < n; s <<= 1)
                for (
                  var a = s << 1,
                    u = Math.cos((2 * Math.PI) / a),
                    h = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < n;
                  l += a
                )
                  for (var c = u, d = h, f = 0; f < s; f++) {
                    var m = i[l + f],
                      p = r[l + f],
                      v = i[l + f + s],
                      g = r[l + f + s],
                      y = c * v - d * g;
                    ((g = c * g + d * v),
                      (v = y),
                      (i[l + f] = m + v),
                      (r[l + f] = p + g),
                      (i[l + f + s] = m - v),
                      (r[l + f + s] = p - g),
                      f !== a &&
                        ((y = u * c - h * d), (d = u * d + h * c), (c = y)));
                  }
            }),
            (b.prototype.guessLen13b = function (t, e) {
              var i = 1 | Math.max(e, t),
                r = 1 & i,
                n = 0;
              for (i = (i / 2) | 0; i; i >>>= 1) n++;
              return 1 << (n + 1 + r);
            }),
            (b.prototype.conjugate = function (t, e, i) {
              if (!(i <= 1))
                for (var r = 0; r < i / 2; r++) {
                  var n = t[r];
                  ((t[r] = t[i - r - 1]),
                    (t[i - r - 1] = n),
                    (n = e[r]),
                    (e[r] = -e[i - r - 1]),
                    (e[i - r - 1] = -n));
                }
            }),
            (b.prototype.normalize13b = function (t, e) {
              for (var i = 0, r = 0; r < e / 2; r++) {
                var n =
                  8192 * Math.round(t[2 * r + 1] / e) +
                  Math.round(t[2 * r] / e) +
                  i;
                ((t[r] = 67108863 & n),
                  (i = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return t;
            }),
            (b.prototype.convert13b = function (t, e, i, n) {
              for (var o = 0, s = 0; s < e; s++)
                ((o += 0 | t[s]),
                  (i[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (i[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * e; s < n; ++s) i[s] = 0;
              (r(0 === o), r(0 === (-8192 & o)));
            }),
            (b.prototype.stub = function (t) {
              for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
              return e;
            }),
            (b.prototype.mulp = function (t, e, i) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(r),
                o = this.stub(r),
                s = new Array(r),
                a = new Array(r),
                u = new Array(r),
                h = new Array(r),
                l = new Array(r),
                c = new Array(r),
                d = i.words;
              ((d.length = r),
                this.convert13b(t.words, t.length, s, r),
                this.convert13b(e.words, e.length, h, r),
                this.transform(s, o, a, u, r, n),
                this.transform(h, o, l, c, r, n));
              for (var f = 0; f < r; f++) {
                var m = a[f] * l[f] - u[f] * c[f];
                ((u[f] = a[f] * c[f] + u[f] * l[f]), (a[f] = m));
              }
              return (
                this.conjugate(a, u, r),
                this.transform(a, u, d, o, r, n),
                this.conjugate(d, o, r),
                this.normalize13b(d, r),
                (i.negative = t.negative ^ e.negative),
                (i.length = t.length + e.length),
                i._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                M(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), r("number" === typeof t), r(t < 67108864));
              for (var i = 0, n = 0; n < this.length; n++) {
                var o = (0 | this.words[n]) * t,
                  s = (67108863 & o) + (67108863 & i);
                ((i >>= 26),
                  (i += (o / 67108864) | 0),
                  (i += s >>> 26),
                  (this.words[n] = 67108863 & s));
              }
              return (
                0 !== i && ((this.words[n] = i), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = v(t);
              if (0 === e.length) return new o(1);
              for (var i = this, r = 0; r < e.length; r++, i = i.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var n = i.sqr(); r < e.length; r++, n = n.sqr())
                  0 !== e[r] && (i = i.mul(n));
              return i;
            }),
            (o.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                i = t % 26,
                n = (t - i) / 26,
                o = (67108863 >>> (26 - i)) << (26 - i);
              if (0 !== i) {
                var s = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & o,
                    u = ((0 | this.words[e]) - a) << i;
                  ((this.words[e] = u | s), (s = a >>> (26 - i)));
                }
                s && ((this.words[e] = s), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (r(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, i) {
              var n;
              (r("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                s = Math.min((t - o) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> o) << o),
                u = i;
              if (((n -= s), (n = Math.max(0, n)), u)) {
                for (var h = 0; h < s; h++) u.words[h] = this.words[h];
                u.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (h = this.length - 1; h >= 0 && (0 !== l || h >= n); h--) {
                var c = 0 | this.words[h];
                ((this.words[h] = (l << (26 - o)) | (c >>> o)), (l = c & a));
              }
              return (
                u && 0 !== l && (u.words[u.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, i) {
              return (r(0 === this.negative), this.iushrn(t, e, i));
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i) return !1;
              var o = this.words[i];
              return !!(o & n);
            }),
            (o.prototype.imaskn = function (t) {
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
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                r("number" === typeof t),
                r(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
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
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
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
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, i) {
              var n,
                o,
                s = t.length + i;
              this._expand(s);
              var a = 0;
              for (n = 0; n < t.length; n++) {
                o = (0 | this.words[n + i]) + a;
                var u = (0 | t.words[n]) * e;
                ((o -= 67108863 & u),
                  (a = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[n + i] = 67108863 & o));
              }
              for (; n < this.length - i; n++)
                ((o = (0 | this.words[n + i]) + a),
                  (a = o >> 26),
                  (this.words[n + i] = 67108863 & o));
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, n = 0; n < this.length; n++)
                ((o = -(0 | this.words[n]) + a),
                  (a = o >> 26),
                  (this.words[n] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var i = this.length - t.length,
                r = this.clone(),
                n = t,
                s = 0 | n.words[n.length - 1],
                a = this._countBits(s);
              ((i = 26 - a),
                0 !== i &&
                  ((n = n.ushln(i)),
                  r.iushln(i),
                  (s = 0 | n.words[n.length - 1])));
              var u,
                h = r.length - n.length;
              if ("mod" !== e) {
                ((u = new o(null)),
                  (u.length = h + 1),
                  (u.words = new Array(u.length)));
                for (var l = 0; l < u.length; l++) u.words[l] = 0;
              }
              var c = r.clone()._ishlnsubmul(n, 1, h);
              0 === c.negative && ((r = c), u && (u.words[h] = 1));
              for (var d = h - 1; d >= 0; d--) {
                var f =
                  67108864 * (0 | r.words[n.length + d]) +
                  (0 | r.words[n.length + d - 1]);
                ((f = Math.min((f / s) | 0, 67108863)),
                  r._ishlnsubmul(n, f, d));
                while (0 !== r.negative)
                  (f--,
                    (r.negative = 0),
                    r._ishlnsubmul(n, 1, d),
                    r.isZero() || (r.negative ^= 1));
                u && (u.words[d] = f);
              }
              return (
                u && u._strip(),
                r._strip(),
                "div" !== e && 0 !== i && r.iushrn(i),
                { div: u || null, mod: r }
              );
            }),
            (o.prototype.divmod = function (t, e, i) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((a = this.neg().divmod(t, e)),
                      "mod" !== e && (n = a.div.neg()),
                      "div" !== e &&
                        ((s = a.mod.neg()), i && 0 !== s.negative && s.iadd(t)),
                      { div: n, mod: s })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((a = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = a.div.neg()),
                        { div: n, mod: a.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((a = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((s = a.mod.neg()),
                            i && 0 !== s.negative && s.isub(t)),
                          { div: a.div, mod: s })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, s, a;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                n = t.andln(1),
                o = i.cmp(r);
              return o < 0 || (1 === n && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (
                var i = (1 << 26) % t, n = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                n = (i * n + (0 | this.words[o])) % t;
              return e ? -n : n;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (var i = 0, n = this.length - 1; n >= 0; n--) {
                var o = (0 | this.words[n]) + 67108864 * i;
                ((this.words[n] = (o / t) | 0), (i = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new o(1),
                s = new o(0),
                a = new o(0),
                u = new o(1),
                h = 0;
              while (e.isEven() && i.isEven()) (e.iushrn(1), i.iushrn(1), ++h);
              var l = i.clone(),
                c = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, f = 1;
                  0 === (e.words[0] & f) && d < 26;
                  ++d, f <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((n.isOdd() || s.isOdd()) && (n.iadd(l), s.isub(c)),
                      n.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var m = 0, p = 1;
                  0 === (i.words[0] & p) && m < 26;
                  ++m, p <<= 1
                );
                if (m > 0) {
                  i.iushrn(m);
                  while (m-- > 0)
                    ((a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(c)),
                      a.iushrn(1),
                      u.iushrn(1));
                }
                e.cmp(i) >= 0
                  ? (e.isub(i), n.isub(a), s.isub(u))
                  : (i.isub(e), a.isub(n), u.isub(s));
              }
              return { a: a, b: u, gcd: i.iushln(h) };
            }),
            (o.prototype._invmp = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                s = new o(1),
                a = new o(0),
                u = i.clone();
              while (e.cmpn(1) > 0 && i.cmpn(1) > 0) {
                for (
                  var h = 0, l = 1;
                  0 === (e.words[0] & l) && h < 26;
                  ++h, l <<= 1
                );
                if (h > 0) {
                  e.iushrn(h);
                  while (h-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                for (
                  var c = 0, d = 1;
                  0 === (i.words[0] & d) && c < 26;
                  ++c, d <<= 1
                );
                if (c > 0) {
                  i.iushrn(c);
                  while (c-- > 0) (a.isOdd() && a.iadd(u), a.iushrn(1));
                }
                e.cmp(i) >= 0 ? (e.isub(i), s.isub(a)) : (i.isub(e), a.isub(s));
              }
              return (
                (n = 0 === e.cmpn(1) ? s : a),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                i = t.clone();
              ((e.negative = 0), (i.negative = 0));
              for (var r = 0; e.isEven() && i.isEven(); r++)
                (e.iushrn(1), i.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (i.isEven()) i.iushrn(1);
                var n = e.cmp(i);
                if (n < 0) {
                  var o = e;
                  ((e = i), (i = o));
                } else if (0 === n || 0 === i.cmpn(1)) break;
                e.isub(i);
              } while (1);
              return i.iushln(r);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
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
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                i = t < 0;
              if (0 !== this.negative && !i) return -1;
              if (0 === this.negative && i) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (i && (t = -t), r(t <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                e = n === t ? 0 : n < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, i = this.length - 1; i >= 0; i--) {
                var r = 0 | this.words[i],
                  n = 0 | t.words[i];
                if (r !== n) {
                  r < n ? (e = -1) : r > n && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new O(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (o.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function T(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function A() {
            T.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function k() {
            T.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function R() {
            T.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function E() {
            T.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function O(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (O.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((T.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (T.prototype.ireduce = function (t) {
              var e,
                i = t;
              do {
                (this.split(i, this.tmp),
                  (i = this.imulK(i)),
                  (i = i.iadd(this.tmp)),
                  (e = i.bitLength()));
              } while (e > this.n);
              var r = e < this.n ? -1 : i.ucmp(this.p);
              return (
                0 === r
                  ? ((i.words[0] = 0), (i.length = 1))
                  : r > 0
                    ? i.isub(this.p)
                    : void 0 !== i.strip
                      ? i.strip()
                      : i._strip(),
                i
              );
            }),
            (T.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (T.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(A, T),
            (A.prototype.split = function (t, e) {
              for (
                var i = 4194303, r = Math.min(t.length, 9), n = 0;
                n < r;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = r), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & i, n = 10; n < t.length; n++) {
                var s = 0 | t.words[n];
                ((t.words[n - 10] = ((s & i) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (t.words[n - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (A.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 0 | t.words[i];
                ((e += 977 * r),
                  (t.words[i] = 67108863 & e),
                  (e = 64 * r + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            n(k, T),
            n(R, T),
            n(E, T),
            (E.prototype.imulK = function (t) {
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 19 * (0 | t.words[i]) + e,
                  n = 67108863 & r;
                ((r >>>= 26), (t.words[i] = n), (e = r));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (_[t]) return _[t];
              var e;
              if ("k256" === t) e = new A();
              else if ("p224" === t) e = new k();
              else if ("p192" === t) e = new R();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new E();
              }
              return ((_[t] = e), e);
            }),
            (O.prototype._verify1 = function (t) {
              (r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers"));
            }),
            (O.prototype._verify2 = function (t, e) {
              (r(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                r(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (O.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (O.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (O.prototype.add = function (t, e) {
              this._verify2(t, e);
              var i = t.add(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this));
            }),
            (O.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var i = t.iadd(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i);
            }),
            (O.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var i = t.sub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this));
            }),
            (O.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var i = t.isub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i);
            }),
            (O.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (O.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (O.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (O.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (O.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (O.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var i = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, i);
              }
              var n = this.m.subn(1),
                s = 0;
              while (!n.isZero() && 0 === n.andln(1)) (s++, n.iushrn(1));
              r(!n.isZero());
              var a = new o(1).toRed(this),
                u = a.redNeg(),
                h = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, h).cmp(u)) l.redIAdd(u);
              var c = this.pow(l, n),
                d = this.pow(t, n.addn(1).iushrn(1)),
                f = this.pow(t, n),
                m = s;
              while (0 !== f.cmp(a)) {
                for (var p = f, v = 0; 0 !== p.cmp(a); v++) p = p.redSqr();
                r(v < m);
                var g = this.pow(c, new o(1).iushln(m - v - 1));
                ((d = d.redMul(g)),
                  (c = g.redSqr()),
                  (f = f.redMul(c)),
                  (m = v));
              }
              return d;
            }),
            (O.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (O.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var i = 4,
                r = new Array(1 << i);
              ((r[0] = new o(1).toRed(this)), (r[1] = t));
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
              var s = r[0],
                a = 0,
                u = 0,
                h = e.bitLength() % 26;
              for (0 === h && (h = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], c = h - 1; c >= 0; c--) {
                  var d = (l >> c) & 1;
                  (s !== r[0] && (s = this.sqr(s)),
                    0 !== d || 0 !== a
                      ? ((a <<= 1),
                        (a |= d),
                        u++,
                        (u === i || (0 === n && 0 === c)) &&
                          ((s = this.mul(s, r[a])), (u = 0), (a = 0)))
                      : (u = 0));
                }
                h = 26;
              }
              return s;
            }),
            (O.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (O.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            n(P, O),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (P.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var i = t.imul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                o = n;
              return (
                n.cmp(this.m) >= 0
                  ? (o = n.isub(this.m))
                  : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (P.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var i = t.mul(e),
                r = i
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = i.isub(r).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, i(20)(t));
    },
    5892: function (t, e, i) {
      "use strict";
      (function (t, r) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (t, e, i, r) {
                  (void 0 === r && (r = i),
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[i];
                      },
                    }));
                }
              : function (t, e, i, r) {
                  (void 0 === r && (r = i), (t[r] = e[i]));
                }),
          o =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (t, e) {
                  Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (t, e) {
                  t["default"] = e;
                }),
          s =
            (this && this.__decorate) ||
            function (t, e, i, r) {
              var n,
                o = arguments.length,
                s =
                  o < 3
                    ? e
                    : null === r
                      ? (r = Object.getOwnPropertyDescriptor(e, i))
                      : r;
              if (
                "object" === typeof Reflect &&
                "function" === typeof Reflect.decorate
              )
                s = Reflect.decorate(t, e, i, r);
              else
                for (var a = t.length - 1; a >= 0; a--)
                  (n = t[a]) &&
                    (s = (o < 3 ? n(s) : o > 3 ? n(e, i, s) : n(e, i)) || s);
              return (o > 3 && s && Object.defineProperty(e, i, s), s);
            },
          a =
            (this && this.__importStar) ||
            function (t) {
              if (t && t.__esModule) return t;
              var e = {};
              if (null != t)
                for (var i in t)
                  "default" !== i &&
                    Object.hasOwnProperty.call(t, i) &&
                    n(e, t, i);
              return (o(e, t), e);
            },
          u =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.deserializeUnchecked =
            e.deserialize =
            e.serialize =
            e.BinaryReader =
            e.BinaryWriter =
            e.BorshError =
            e.baseDecode =
            e.baseEncode =
              void 0));
        const h = u(i(5891)),
          l = u(i(234)),
          c = a(i(843)),
          d =
            "function" !== typeof t.TextDecoder ? c.TextDecoder : t.TextDecoder,
          f = new d("utf-8", { fatal: !0 });
        function m(t) {
          return (
            "string" === typeof t && (t = r.from(t, "utf8")),
            l.default.encode(r.from(t))
          );
        }
        function p(t) {
          return r.from(l.default.decode(t));
        }
        ((e.baseEncode = m), (e.baseDecode = p));
        const v = 1024;
        class BorshError extends Error {
          constructor(t) {
            (super(t), (this.fieldPath = []), (this.originalMessage = t));
          }
          addToFieldPath(t) {
            (this.fieldPath.splice(0, 0, t),
              (this.message =
                this.originalMessage + ": " + this.fieldPath.join(".")));
          }
        }
        e.BorshError = BorshError;
        class BinaryWriter {
          constructor() {
            ((this.buf = r.alloc(v)), (this.length = 0));
          }
          maybeResize() {
            this.buf.length < 16 + this.length &&
              (this.buf = r.concat([this.buf, r.alloc(v)]));
          }
          writeU8(t) {
            (this.maybeResize(),
              this.buf.writeUInt8(t, this.length),
              (this.length += 1));
          }
          writeU16(t) {
            (this.maybeResize(),
              this.buf.writeUInt16LE(t, this.length),
              (this.length += 2));
          }
          writeU32(t) {
            (this.maybeResize(),
              this.buf.writeUInt32LE(t, this.length),
              (this.length += 4));
          }
          writeU64(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 8))));
          }
          writeU128(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 16))));
          }
          writeU256(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 32))));
          }
          writeU512(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new h.default(t).toArray("le", 64))));
          }
          writeBuffer(t) {
            ((this.buf = r.concat([
              r.from(this.buf.subarray(0, this.length)),
              t,
              r.alloc(v),
            ])),
              (this.length += t.length));
          }
          writeString(t) {
            this.maybeResize();
            const e = r.from(t, "utf8");
            (this.writeU32(e.length), this.writeBuffer(e));
          }
          writeFixedArray(t) {
            this.writeBuffer(r.from(t));
          }
          writeArray(t, e) {
            (this.maybeResize(), this.writeU32(t.length));
            for (const i of t) (this.maybeResize(), e(i));
          }
          toArray() {
            return this.buf.subarray(0, this.length);
          }
        }
        function g(t, e, i) {
          const r = i.value;
          i.value = function () {
            try {
              for (
                var t = arguments.length, e = new Array(t), i = 0;
                i < t;
                i++
              )
                e[i] = arguments[i];
              return r.apply(this, e);
            } catch (n) {
              if (n instanceof RangeError) {
                const t = n.code;
                if (
                  ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(t) >=
                  0
                )
                  throw new BorshError(
                    "Reached the end of buffer when deserializing",
                  );
              }
              throw n;
            }
          };
        }
        e.BinaryWriter = BinaryWriter;
        class BinaryReader {
          constructor(t) {
            ((this.buf = t), (this.offset = 0));
          }
          readU8() {
            const t = this.buf.readUInt8(this.offset);
            return ((this.offset += 1), t);
          }
          readU16() {
            const t = this.buf.readUInt16LE(this.offset);
            return ((this.offset += 2), t);
          }
          readU32() {
            const t = this.buf.readUInt32LE(this.offset);
            return ((this.offset += 4), t);
          }
          readU64() {
            const t = this.readBuffer(8);
            return new h.default(t, "le");
          }
          readU128() {
            const t = this.readBuffer(16);
            return new h.default(t, "le");
          }
          readU256() {
            const t = this.readBuffer(32);
            return new h.default(t, "le");
          }
          readU512() {
            const t = this.readBuffer(64);
            return new h.default(t, "le");
          }
          readBuffer(t) {
            if (this.offset + t > this.buf.length)
              throw new BorshError(
                `Expected buffer length ${t} isn't within bounds`,
              );
            const e = this.buf.slice(this.offset, this.offset + t);
            return ((this.offset += t), e);
          }
          readString() {
            const t = this.readU32(),
              e = this.readBuffer(t);
            try {
              return f.decode(e);
            } catch (i) {
              throw new BorshError("Error decoding UTF-8 string: " + i);
            }
          }
          readFixedArray(t) {
            return new Uint8Array(this.readBuffer(t));
          }
          readArray(t) {
            const e = this.readU32(),
              i = Array();
            for (let r = 0; r < e; ++r) i.push(t());
            return i;
          }
        }
        function y(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function w(t, e, i, r, n) {
          try {
            if ("string" === typeof r) n["write" + y(r)](i);
            else if (r instanceof Array)
              if ("number" === typeof r[0]) {
                if (i.length !== r[0])
                  throw new BorshError(
                    `Expecting byte array of length ${r[0]}, but got ${i.length} bytes`,
                  );
                n.writeFixedArray(i);
              } else
                n.writeArray(i, (i) => {
                  w(t, e, i, r[0], n);
                });
            else if (void 0 !== r.kind)
              switch (r.kind) {
                case "option":
                  null === i || void 0 === i
                    ? n.writeU8(0)
                    : (n.writeU8(1), w(t, e, i, r.type, n));
                  break;
                default:
                  throw new BorshError(`FieldType ${r} unrecognized`);
              }
            else M(t, i, n);
          } catch (o) {
            throw (o instanceof BorshError && o.addToFieldPath(e), o);
          }
        }
        function M(t, e, i) {
          const r = t.get(e.constructor);
          if (!r)
            throw new BorshError(
              `Class ${e.constructor.name} is missing in schema`,
            );
          if ("struct" === r.kind)
            r.fields.map((r) => {
              let [n, o] = r;
              w(t, n, e[n], o, i);
            });
          else {
            if ("enum" !== r.kind)
              throw new BorshError(
                `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`,
              );
            {
              const n = e[r.field];
              for (let o = 0; o < r.values.length; ++o) {
                const [s, a] = r.values[o];
                if (s === n) {
                  (i.writeU8(o), w(t, s, e[s], a, i));
                  break;
                }
              }
            }
          }
        }
        function b(t, e) {
          const i = new BinaryWriter();
          return (M(t, e, i), i.toArray());
        }
        function _(t, e, i, r) {
          try {
            if ("string" === typeof i) return r["read" + y(i)]();
            if (i instanceof Array)
              return "number" === typeof i[0]
                ? r.readFixedArray(i[0])
                : r.readArray(() => _(t, e, i[0], r));
            if ("option" === i.kind) {
              const n = r.readU8();
              return n ? _(t, e, i.type, r) : void 0;
            }
            return T(t, i, r);
          } catch (n) {
            throw (n instanceof BorshError && n.addToFieldPath(e), n);
          }
        }
        function T(t, e, i) {
          const r = t.get(e);
          if (!r) throw new BorshError(`Class ${e.name} is missing in schema`);
          if ("struct" === r.kind) {
            const r = {};
            for (const [n, o] of t.get(e).fields) r[n] = _(t, n, o, i);
            return new e(r);
          }
          if ("enum" === r.kind) {
            const n = i.readU8();
            if (n >= r.values.length)
              throw new BorshError(`Enum index: ${n} is out of range`);
            const [o, s] = r.values[n],
              a = _(t, o, s, i);
            return new e({ [o]: a });
          }
          throw new BorshError(
            `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`,
          );
        }
        function A(t, e, i) {
          const r = new BinaryReader(i),
            n = T(t, e, r);
          if (r.offset < i.length)
            throw new BorshError(
              `Unexpected ${i.length - r.offset} bytes after deserialized data`,
            );
          return n;
        }
        function k(t, e, i) {
          const r = new BinaryReader(i);
          return T(t, e, r);
        }
        (s([g], BinaryReader.prototype, "readU8", null),
          s([g], BinaryReader.prototype, "readU16", null),
          s([g], BinaryReader.prototype, "readU32", null),
          s([g], BinaryReader.prototype, "readU64", null),
          s([g], BinaryReader.prototype, "readU128", null),
          s([g], BinaryReader.prototype, "readU256", null),
          s([g], BinaryReader.prototype, "readU512", null),
          s([g], BinaryReader.prototype, "readString", null),
          s([g], BinaryReader.prototype, "readFixedArray", null),
          s([g], BinaryReader.prototype, "readArray", null),
          (e.BinaryReader = BinaryReader),
          (e.serialize = b),
          (e.deserialize = A),
          (e.deserializeUnchecked = k));
      }).call(this, i(13), i(2).Buffer);
    },
    5893: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = i(4);
      class AddrCacheDb {
        async getAddrCache(t, e) {
          (void 0 === t && (t = void 0), void 0 === e && (e = void 0));
          const i = await r.db.addrCache;
          return t && e
            ? i.where({ ticker: t, type: e }).toArray()
            : t
              ? i.where({ ticker: t }).toArray()
              : i.toArray();
        }
        async setAddrCache(t) {
          let { ticker: e, type: i, addresses: r } = t;
          const n = r.map((t) => ({ id: t, ticker: e, type: i, address: t }));
          return (await this._insertBatch(n), n);
        }
        async _insertBatch(t) {
          return (await r.db.addrCache.bulkPut(t), t);
        }
        async _removeItem(t) {
          await r.db.addrCache.delete(t);
        }
      }
      e.default = new AddrCacheDb();
    },
    7188: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decodeTokenMetadata =
          e.getSolanaMetadataAddress =
          e.createConnectionConfig =
          e.isValidSolanaAddress =
          e.resolveToWalletAddress =
          e.getParsedTokenAccountsByOwner =
          e.getParsedNftAccountsByOwner =
            void 0));
      var r = i(7189);
      Object.defineProperty(e, "getParsedNftAccountsByOwner", {
        enumerable: !0,
        get: function () {
          return r.getParsedNftAccountsByOwner;
        },
      });
      var n = i(7192);
      Object.defineProperty(e, "getParsedTokenAccountsByOwner", {
        enumerable: !0,
        get: function () {
          return n.getParsedTokenAccountsByOwner;
        },
      });
      var o = i(7193);
      Object.defineProperty(e, "resolveToWalletAddress", {
        enumerable: !0,
        get: function () {
          return o.resolveToWalletAddress;
        },
      });
      var s = i(4625);
      (Object.defineProperty(e, "isValidSolanaAddress", {
        enumerable: !0,
        get: function () {
          return s.isValidSolanaAddress;
        },
      }),
        Object.defineProperty(e, "createConnectionConfig", {
          enumerable: !0,
          get: function () {
            return s.createConnectionConfig;
          },
        }),
        Object.defineProperty(e, "getSolanaMetadataAddress", {
          enumerable: !0,
          get: function () {
            return s.getSolanaMetadataAddress;
          },
        }),
        Object.defineProperty(e, "decodeTokenMetadata", {
          enumerable: !0,
          get: function () {
            return s.decodeTokenMetadata;
          },
        }));
    },
    7189: function (t, e, i) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (
              (r =
                Object.assign ||
                function (t) {
                  for (var e, i = 1, r = arguments.length; i < r; i++)
                    for (var n in ((e = arguments[i]), e))
                      Object.prototype.hasOwnProperty.call(e, n) &&
                        (t[n] = e[n]);
                  return t;
                }),
              r.apply(this, arguments)
            );
          },
        n =
          (this && this.__awaiter) ||
          function (t, e, i, r) {
            function n(t) {
              return t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  });
            }
            return new (i || (i = Promise))(function (i, o) {
              function s(t) {
                try {
                  u(r.next(t));
                } catch (e) {
                  o(e);
                }
              }
              function a(t) {
                try {
                  u(r["throw"](t));
                } catch (e) {
                  o(e);
                }
              }
              function u(t) {
                t.done ? i(t.value) : n(t.value).then(s, a);
              }
              u((r = r.apply(t, e || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (t, e) {
            var i,
              r,
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
                return u([t, e]);
              };
            }
            function u(o) {
              if (i) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((i = 1),
                    r &&
                      (n =
                        2 & o[0]
                          ? r["return"]
                          : o[0]
                            ? r["throw"] || ((n = r["return"]) && n.call(r), 0)
                            : r.next) &&
                      !(n = n.call(r, o[1])).done)
                  )
                    return n;
                  switch (((r = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (r = o[1]), (o = [0]));
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
                  ((o = [6, a]), (r = 0));
                } finally {
                  i = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          },
        s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sanitizeMetaStrings = e.getParsedNftAccountsByOwner = void 0));
      var a,
        u = i(1),
        h = s(i(5888)),
        l = s(i(5889)),
        c = i(4625),
        d = i(5890);
      (function (t) {
        t["updateAuthority"] = "updateAuthority";
      })(a || (a = {}));
      var f = function (t) {
        var e = t.publicAddress,
          i = t.connection,
          r = void 0 === i ? (0, c.createConnectionConfig)() : i,
          s = t.sanitize,
          f = void 0 === s || s,
          v = t.stringifyPubKeys,
          w = void 0 === v || v,
          M = t.sort,
          b = void 0 === M || M,
          _ = t.limit,
          T = void 0 === _ ? 5e3 : _,
          A = t.metaAccountsRequestChunkSize,
          k = void 0 === A ? 99 : A;
        return n(void 0, void 0, void 0, function () {
          var t, i, n, s, v, M, _, A, R, E, O;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (t = (0, c.isValidSolanaAddress)(e)),
                  t
                    ? [
                        4,
                        r.getParsedTokenAccountsByOwner(new u.PublicKey(e), {
                          programId: new u.PublicKey(d.TOKEN_PROGRAM),
                        }),
                      ]
                    : [2, []]
                );
              case 1:
                return (
                  (i = o.sent().value),
                  (n = i
                    .filter(function (t) {
                      var e,
                        i,
                        r,
                        n,
                        o,
                        s,
                        a,
                        u,
                        h,
                        l,
                        c =
                          null ===
                            (o =
                              null ===
                                (n =
                                  null ===
                                    (r =
                                      null ===
                                        (i =
                                          null === (e = t.account) ||
                                          void 0 === e
                                            ? void 0
                                            : e.data) || void 0 === i
                                        ? void 0
                                        : i.parsed) || void 0 === r
                                    ? void 0
                                    : r.info) || void 0 === n
                                ? void 0
                                : n.tokenAmount) || void 0 === o
                            ? void 0
                            : o.uiAmount,
                        d =
                          null ===
                            (l =
                              null ===
                                (h =
                                  null ===
                                    (u =
                                      null ===
                                        (a =
                                          null === (s = t.account) ||
                                          void 0 === s
                                            ? void 0
                                            : s.data) || void 0 === a
                                        ? void 0
                                        : a.parsed) || void 0 === u
                                    ? void 0
                                    : u.info) || void 0 === h
                                ? void 0
                                : h.tokenAmount) || void 0 === l
                            ? void 0
                            : l.decimals;
                      return 0 === d && c >= 1;
                    })
                    .map(function (t) {
                      var e,
                        i,
                        r,
                        n,
                        o =
                          null ===
                            (n =
                              null ===
                                (r =
                                  null ===
                                    (i =
                                      null === (e = t.account) || void 0 === e
                                        ? void 0
                                        : e.data) || void 0 === i
                                    ? void 0
                                    : i.parsed) || void 0 === r
                                ? void 0
                                : r.info) || void 0 === n
                            ? void 0
                            : n.mint;
                      return new u.PublicKey(o);
                    })),
                  (s = null === n || void 0 === n ? void 0 : n.slice(0, T)),
                  [4, Promise.allSettled(s.map(c.getSolanaMetadataAddress))]
                );
              case 2:
                return (
                  (v = o.sent()),
                  (M = v.filter(g).map(function (t) {
                    return t.value;
                  })),
                  [
                    4,
                    Promise.allSettled(
                      (0, h.default)(M, k).map(function (t) {
                        return r.getMultipleAccountsInfo(t);
                      }),
                    ),
                  ]
                );
              case 3:
                return (
                  (_ = o.sent()),
                  (A = _.filter(function (t) {
                    var e = t.status;
                    return "fulfilled" === e;
                  }).flatMap(function (t) {
                    return t.value;
                  })),
                  (null === A || void 0 === A ? void 0 : A.length) &&
                  0 !== (null === A || void 0 === A ? void 0 : A.length)
                    ? [
                        4,
                        Promise.allSettled(
                          A.map(function (t) {
                            var e;
                            return (0, c.decodeTokenMetadata)(
                              null === (e = t) || void 0 === e
                                ? void 0
                                : e.data,
                            );
                          }),
                        ),
                      ]
                    : [2, []]
                );
              case 4:
                return (
                  (R = o.sent()),
                  (E = R.filter(g)
                    .filter(y)
                    .map(function (t) {
                      var e = t.value;
                      return f ? m(e) : e;
                    })
                    .map(function (t) {
                      return w ? p(t) : t;
                    })),
                  w && b
                    ? ((O = (0, l.default)(E, [a.updateAuthority], ["asc"])),
                      [2, O])
                    : [2, E]
                );
            }
          });
        });
      };
      e.getParsedNftAccountsByOwner = f;
      var m = function (t) {
          var i, n, o;
          return r(r({}, t), {
            data: r(r({}, null === t || void 0 === t ? void 0 : t.data), {
              name: (0, e.sanitizeMetaStrings)(
                null === (i = null === t || void 0 === t ? void 0 : t.data) ||
                  void 0 === i
                  ? void 0
                  : i.name,
              ),
              symbol: (0, e.sanitizeMetaStrings)(
                null === (n = null === t || void 0 === t ? void 0 : t.data) ||
                  void 0 === n
                  ? void 0
                  : n.symbol,
              ),
              uri: (0, e.sanitizeMetaStrings)(
                null === (o = null === t || void 0 === t ? void 0 : t.data) ||
                  void 0 === o
                  ? void 0
                  : o.uri,
              ),
            }),
          });
        },
        p = function (t) {
          var e, i, n, o, s, a;
          return r(r({}, t), {
            mint:
              null ===
                (i =
                  null === (e = null === t || void 0 === t ? void 0 : t.mint) ||
                  void 0 === e
                    ? void 0
                    : e.toString) || void 0 === i
                ? void 0
                : i.call(e),
            updateAuthority:
              null ===
                (o =
                  null ===
                    (n =
                      null === t || void 0 === t
                        ? void 0
                        : t.updateAuthority) || void 0 === n
                    ? void 0
                    : n.toString) || void 0 === o
                ? void 0
                : o.call(n),
            data: r(r({}, null === t || void 0 === t ? void 0 : t.data), {
              creators:
                null ===
                  (a =
                    null ===
                      (s = null === t || void 0 === t ? void 0 : t.data) ||
                    void 0 === s
                      ? void 0
                      : s.creators) || void 0 === a
                  ? void 0
                  : a.map(function (t) {
                      var e, i;
                      return r(r({}, t), {
                        address:
                          null ===
                            (i =
                              null ===
                                (e = new u.PublicKey(
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.address,
                                )) || void 0 === e
                                ? void 0
                                : e.toString) || void 0 === i
                            ? void 0
                            : i.call(e),
                      });
                    }),
            }),
          });
        },
        v = function (t) {
          return t.replace(/\0/g, "");
        };
      e.sanitizeMetaStrings = v;
      var g = function (t) {
          return t && "fulfilled" === t.status;
        },
        y = function (t) {
          var e,
            i,
            r,
            n =
              null ===
                (r =
                  null ===
                    (i =
                      null === (e = t.value.data) || void 0 === e
                        ? void 0
                        : e.uri) || void 0 === i
                    ? void 0
                    : i.replace) || void 0 === r
                ? void 0
                : r.call(i, /\0/g, "");
          return "" !== n && void 0 !== n;
        };
    },
    7190: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Metadata =
          e.METADATA_PROGRAM =
          e.METADATA_PREFIX =
          e.METADATA_SCHEMA =
          e.Data =
          e.Creator =
          e.MetadataKey =
            void 0));
      var r = "metadata";
      e.METADATA_PREFIX = r;
      var n,
        o = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
      ((e.METADATA_PROGRAM = o),
        (function (t) {
          ((t[(t["Uninitialized"] = 0)] = "Uninitialized"),
            (t[(t["MetadataV1"] = 4)] = "MetadataV1"),
            (t[(t["EditionV1"] = 1)] = "EditionV1"),
            (t[(t["MasterEditionV1"] = 2)] = "MasterEditionV1"),
            (t[(t["MasterEditionV2"] = 6)] = "MasterEditionV2"),
            (t[(t["EditionMarker"] = 7)] = "EditionMarker"));
        })((n = e.MetadataKey || (e.MetadataKey = {}))));
      var s = (function () {
        function t(t) {
          ((this.address = t.address),
            (this.verified = t.verified),
            (this.share = t.share));
        }
        return t;
      })();
      e.Creator = s;
      var a = (function () {
        function t(t) {
          var e;
          ((this.key = n.MetadataV1),
            (this.updateAuthority = t.updateAuthority),
            (this.mint = t.mint),
            (this.data = t.data),
            (this.primarySaleHappened = t.primarySaleHappened),
            (this.isMutable = t.isMutable),
            (this.editionNonce =
              null !== (e = t.editionNonce) && void 0 !== e ? e : null));
        }
        return t;
      })();
      e.Metadata = a;
      var u = (function () {
        function t(t) {
          ((this.name = t.name),
            (this.symbol = t.symbol),
            (this.uri = t.uri),
            (this.sellerFeeBasisPoints = t.sellerFeeBasisPoints),
            (this.creators = t.creators));
        }
        return t;
      })();
      e.Data = u;
      var h = new Map([
        [
          u,
          {
            kind: "struct",
            fields: [
              ["name", "string"],
              ["symbol", "string"],
              ["uri", "string"],
              ["sellerFeeBasisPoints", "u16"],
              ["creators", { kind: "option", type: [s] }],
            ],
          },
        ],
        [
          a,
          {
            kind: "struct",
            fields: [
              ["key", "u8"],
              ["updateAuthority", "pubkey"],
              ["mint", "pubkey"],
              ["data", u],
              ["primarySaleHappened", "u8"],
              ["isMutable", "u8"],
            ],
          },
        ],
        [
          s,
          {
            kind: "struct",
            fields: [
              ["address", "pubkey"],
              ["verified", "u8"],
              ["share", "u8"],
            ],
          },
        ],
      ]);
      e.METADATA_SCHEMA = h;
    },
    7191: function (t, e, i) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.extendBorsh = void 0));
      var r = i(1),
        n = i(3414),
        o = function () {
          ((n.BinaryReader.prototype.readPubkey = function () {
            var t = this,
              e = t.readFixedArray(32);
            return new r.PublicKey(e);
          }),
            (n.BinaryWriter.prototype.writePubkey = function (t) {
              var e = this;
              e.writeFixedArray(t.toBuffer());
            }));
        };
      ((e.extendBorsh = o), (0, e.extendBorsh)());
    },
    7192: function (t, e, i) {
      "use strict";
      (function (t) {
        var r =
            (this && this.__assign) ||
            function () {
              return (
                (r =
                  Object.assign ||
                  function (t) {
                    for (var e, i = 1, r = arguments.length; i < r; i++)
                      for (var n in ((e = arguments[i]), e))
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    return t;
                  }),
                r.apply(this, arguments)
              );
            },
          n =
            (this && this.__awaiter) ||
            function (t, e, i, r) {
              function n(t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              }
              return new (i || (i = Promise))(function (i, o) {
                function s(t) {
                  try {
                    u(r.next(t));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(t) {
                  try {
                    u(r["throw"](t));
                  } catch (e) {
                    o(e);
                  }
                }
                function u(t) {
                  t.done ? i(t.value) : n(t.value).then(s, a);
                }
                u((r = r.apply(t, e || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (t, e) {
              var i,
                r,
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
                  return u([t, e]);
                };
              }
              function u(o) {
                if (i) throw new TypeError("Generator is already executing.");
                while (s)
                  try {
                    if (
                      ((i = 1),
                      r &&
                        (n =
                          2 & o[0]
                            ? r["return"]
                            : o[0]
                              ? r["throw"] ||
                                ((n = r["return"]) && n.call(r), 0)
                              : r.next) &&
                        !(n = n.call(r, o[1])).done)
                    )
                      return n;
                    switch (((r = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                      case 0:
                      case 1:
                        n = o;
                        break;
                      case 4:
                        return (s.label++, { value: o[1], done: !1 });
                      case 5:
                        (s.label++, (r = o[1]), (o = [0]));
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
                    ((o = [6, a]), (r = 0));
                  } finally {
                    i = n = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            },
          s =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.getParsedTokenAccountsByOwner = e.TokenType = void 0));
        var a,
          u,
          h = i(1),
          l = s(i(5888)),
          c = s(i(5889)),
          d = i(4625),
          f = i(5890);
        ((function (t) {
          ((t["nftsOnly"] = "nftsOnly"), (t["tokensOnly"] = "tokensOnly"));
        })((a = e.TokenType || (e.TokenType = {}))),
          (function (t) {
            t["updateAuthority"] = "updateAuthority";
          })(u || (u = {})));
        var m = function (t, e) {
          return t.reduce(function (t, i) {
            var r,
              n,
              o,
              s,
              u,
              h,
              l,
              c,
              d,
              f,
              m,
              p,
              v,
              g,
              y =
                null ===
                  (s =
                    null ===
                      (o =
                        null ===
                          (n =
                            null === (r = i.account) || void 0 === r
                              ? void 0
                              : r.data) || void 0 === n
                          ? void 0
                          : n.parsed) || void 0 === o
                      ? void 0
                      : o.info) || void 0 === s
                  ? void 0
                  : s.mint,
              w =
                null ===
                  (d =
                    null ===
                      (c =
                        null ===
                          (l =
                            null ===
                              (h =
                                null === (u = i.account) || void 0 === u
                                  ? void 0
                                  : u.data) || void 0 === h
                              ? void 0
                              : h.parsed) || void 0 === l
                          ? void 0
                          : l.info) || void 0 === c
                      ? void 0
                      : c.tokenAmount) || void 0 === d
                  ? void 0
                  : d.decimals,
              M =
                null ===
                  (g =
                    null ===
                      (v =
                        null ===
                          (p =
                            null ===
                              (m =
                                null === (f = i.account) || void 0 === f
                                  ? void 0
                                  : f.data) || void 0 === m
                              ? void 0
                              : m.parsed) || void 0 === p
                          ? void 0
                          : p.info) || void 0 === v
                      ? void 0
                      : v.tokenAmount) || void 0 === g
                  ? void 0
                  : g.uiAmount;
            return (
              e === a.nftsOnly &&
                0 === w &&
                M >= 1 &&
                t.push({ tokenType: e, mint: y }),
              e === a.tokensOnly &&
                w > 0 &&
                t.push({ tokenType: e, mint: y, amount: M, decimals: w }),
              t
            );
          }, []);
        };
        function p(t) {
          return n(this, void 0, void 0, function () {
            var e, i, r;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (i = {}),
                    (e = t.mint),
                    (r = {}),
                    [
                      4,
                      (0, d.getSolanaMetadataAddress)(new h.PublicKey(t.mint)),
                    ]
                  );
                case 1:
                  return [2, ((i[e] = ((r.address = n.sent()), r)), i)];
              }
            });
          });
        }
        function v(t) {
          return n(this, void 0, void 0, function () {
            return o(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, Promise.allSettled(t.map(p))];
                case 1:
                  return [
                    2,
                    e
                      .sent()
                      .filter(b)
                      .map(function (t) {
                        return t.value;
                      }),
                  ];
              }
            });
          });
        }
        function g(t) {
          var e,
            i = t.data,
            r = t.updateAuthority;
          return {
            name: null === i || void 0 === i ? void 0 : i.name,
            symbol: null === i || void 0 === i ? void 0 : i.symbol,
            uri: null === i || void 0 === i ? void 0 : i.uri,
            updateAuthority:
              null === (e = null === r || void 0 === r ? void 0 : r.toString) ||
              void 0 === e
                ? void 0
                : e.call(r),
          };
        }
        var y = function (e) {
          var i = e.publicAddress,
            s = e.tokenType,
            p = e.connection,
            y = void 0 === p ? (0, d.createConnectionConfig)() : p,
            M = e.limit,
            _ = void 0 === M ? 5e3 : M,
            T = e.metaAccountsRequestChunkSize,
            A = void 0 === T ? 99 : T;
          return n(void 0, void 0, void 0, function () {
            function e(e) {
              return n(this, void 0, void 0, function () {
                var i,
                  r,
                  s,
                  a,
                  u = this;
                return o(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return (
                        h.trys.push([0, 3, , 4]),
                        (i = e.map(function (t) {
                          return Object.values(t)[0].address;
                        })),
                        [4, y.getMultipleAccountsInfo(i)]
                      );
                    case 1:
                      return (
                        (r = h.sent().filter(function (e) {
                          return t.isBuffer(
                            null === e || void 0 === e ? void 0 : e.data,
                          );
                        })),
                        [
                          4,
                          Promise.allSettled(
                            r.map(function (t, e) {
                              return n(u, void 0, void 0, function () {
                                var i, r;
                                return o(this, function (n) {
                                  switch (n.label) {
                                    case 0:
                                      return (
                                        (r = g),
                                        [
                                          4,
                                          (0, d.decodeTokenMetadata)(
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.data,
                                          ),
                                        ]
                                      );
                                    case 1:
                                      return (
                                        (i = r.apply(void 0, [n.sent()])),
                                        [2, [e, i]]
                                      );
                                  }
                                });
                              });
                            }),
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (s = h.sent()),
                        [
                          2,
                          s
                            .filter(b)
                            .map(function (t) {
                              return t["value"];
                            })
                            .reduce(function (t, i) {
                              var r = i[0],
                                n = i[1],
                                o = e[r];
                              if (o) {
                                var s = Object.keys(o)[0];
                                t[s] = n;
                              }
                              return t;
                            }, {}),
                        ]
                      );
                    case 3:
                      return ((a = h.sent()), console.error(a), [3, 4]);
                    case 4:
                      return [2];
                  }
                });
              });
            }
            function p(t) {
              return n(this, void 0, void 0, function () {
                var i, n;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, v(t)];
                    case 1:
                      return ((i = o.sent()), [4, e(i)]);
                    case 2:
                      return (
                        (n = o.sent()),
                        [
                          2,
                          t.reduce(function (t, e) {
                            var i = n[e.mint];
                            if (i) {
                              var o = r(r({}, e), w(i));
                              t.push(o);
                            }
                            return t;
                          }, []),
                        ]
                      );
                  }
                });
              });
            }
            function M(t) {
              return n(this, void 0, void 0, function () {
                return o(this, function (e) {
                  try {
                    return [2, p(t)];
                  } catch (i) {
                    console.error(i);
                  }
                  return [2, t];
                });
              });
            }
            var T, k, R, E, O, P, S;
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  if (s !== a.nftsOnly && s !== a.tokensOnly)
                    throw new Error("Wrong token type " + s);
                  return (
                    (T = (0, d.isValidSolanaAddress)(i)),
                    T
                      ? [
                          4,
                          y.getParsedTokenAccountsByOwner(new h.PublicKey(i), {
                            programId: new h.PublicKey(f.TOKEN_PROGRAM),
                          }),
                        ]
                      : [2, []]
                  );
                case 1:
                  return (
                    (k = t.sent().value),
                    (R = m(k, s)),
                    (E = null === R || void 0 === R ? void 0 : R.slice(0, _)),
                    (O = (0, l.default)(E, A).map(M)),
                    [4, Promise.allSettled(O)]
                  );
                case 2:
                  return (
                    (P = t.sent()),
                    (S = P.filter(function (t) {
                      var e = t.status;
                      return "fulfilled" === e;
                    }).flatMap(function (t) {
                      return t.value;
                    })),
                    [2, (0, c.default)(S, [u.updateAuthority], ["asc"])]
                  );
              }
            });
          });
        };
        function w(t) {
          var e, i, n;
          return r(r({}, t), {
            name: M(
              null !== (e = null === t || void 0 === t ? void 0 : t.name) &&
                void 0 !== e
                ? e
                : "",
            ),
            symbol: M(
              null !== (i = null === t || void 0 === t ? void 0 : t.symbol) &&
                void 0 !== i
                ? i
                : "",
            ),
            uri: M(
              null !== (n = null === t || void 0 === t ? void 0 : t.uri) &&
                void 0 !== n
                ? n
                : "",
            ),
          });
        }
        function M(t) {
          return t.replace(/\0/g, "");
        }
        function b(t) {
          return t && "fulfilled" === t.status;
        }
        e.getParsedTokenAccountsByOwner = y;
      }).call(this, i(2).Buffer);
    },
    7193: function (t, e, i) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          function (t, e, i, r) {
            function n(t) {
              return t instanceof i
                ? t
                : new i(function (e) {
                    e(t);
                  });
            }
            return new (i || (i = Promise))(function (i, o) {
              function s(t) {
                try {
                  u(r.next(t));
                } catch (e) {
                  o(e);
                }
              }
              function a(t) {
                try {
                  u(r["throw"](t));
                } catch (e) {
                  o(e);
                }
              }
              function u(t) {
                t.done ? i(t.value) : n(t.value).then(s, a);
              }
              u((r = r.apply(t, e || [])).next());
            });
          },
        n =
          (this && this.__generator) ||
          function (t, e) {
            var i,
              r,
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
                return u([t, e]);
              };
            }
            function u(o) {
              if (i) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((i = 1),
                    r &&
                      (n =
                        2 & o[0]
                          ? r["return"]
                          : o[0]
                            ? r["throw"] || ((n = r["return"]) && n.call(r), 0)
                            : r.next) &&
                      !(n = n.call(r, o[1])).done)
                  )
                    return n;
                  switch (((r = 0), n && (o = [2 & o[0], n.value]), o[0])) {
                    case 0:
                    case 1:
                      n = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (r = o[1]), (o = [0]));
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
                  ((o = [6, a]), (r = 0));
                } finally {
                  i = n = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.resolveToWalletAddress =
          e.getInputKey =
          e.SOL_TLD_AUTHORITY =
            void 0));
      var o = i(1),
        s = i(7194),
        a = i(4625);
      e.SOL_TLD_AUTHORITY = new o.PublicKey(
        "58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx",
      );
      var u = function (t) {
        return r(void 0, void 0, void 0, function () {
          var i, r;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, (0, s.getHashedName)(t)];
              case 1:
                return (
                  (i = n.sent()),
                  [4, (0, s.getNameAccountKey)(i, void 0, e.SOL_TLD_AUTHORITY)]
                );
              case 2:
                return (
                  (r = n.sent()),
                  [2, { inputDomainKey: r, hashedInputName: i }]
                );
            }
          });
        });
      };
      e.getInputKey = u;
      var h = new Error(
          "Can't resolve provided name into valid Solana address =(",
        ),
        l = function (t) {
          var i = t.text,
            o = t.connection,
            u = void 0 === o ? (0, a.createConnectionConfig)() : o;
          return r(void 0, void 0, void 0, function () {
            var t, r, o, l, c, d, f, m, p, v, g, y;
            return n(this, function (n) {
              switch (n.label) {
                case 0:
                  return (
                    (t =
                      null ===
                        (p = null === i || void 0 === i ? void 0 : i.trim) ||
                      void 0 === p
                        ? void 0
                        : p.call(i)),
                    t
                      ? ((r = (0, a.isValidSolanaAddress)(t)),
                        r
                          ? [2, Promise.resolve(t)]
                          : ((o =
                              null === t || void 0 === t
                                ? void 0
                                : t.toLowerCase()),
                            (l =
                              null ===
                                (v =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.endsWith) || void 0 === v
                                ? void 0
                                : v.call(o, ".sol")),
                            l
                              ? ((c = o.split(".sol")[0]),
                                [4, (0, e.getInputKey)(c)])
                              : [3, 3]))
                      : [2, Promise.reject(h)]
                  );
                case 1:
                  return (
                    (d = n.sent().inputDomainKey),
                    [4, s.NameRegistryState.retrieve(u, d)]
                  );
                case 2:
                  if (
                    ((f = n.sent()),
                    (m =
                      null ===
                        (y =
                          null ===
                            (g =
                              null === f || void 0 === f ? void 0 : f.owner) ||
                          void 0 === g
                            ? void 0
                            : g.toBase58) || void 0 === y
                        ? void 0
                        : y.call(g)),
                    m)
                  )
                    return [2, Promise.resolve(m)];
                  n.label = 3;
                case 3:
                  return [2, Promise.reject(h)];
              }
            });
          });
        };
      e.resolveToWalletAddress = l;
    },
    7194: function (t, e, i) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, i, r) {
                void 0 === r && (r = i);
                var n = Object.getOwnPropertyDescriptor(e, i);
                ((n &&
                  !("get" in n
                    ? !e.__esModule
                    : n.writable || n.configurable)) ||
                  (n = {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  }),
                  Object.defineProperty(t, r, n));
              }
            : function (t, e, i, r) {
                (void 0 === r && (r = i), (t[r] = e[i]));
              }),
        n =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var i in t)
              "default" === i ||
                Object.prototype.hasOwnProperty.call(e, i) ||
                r(e, t, i);
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        n(i(4922), e),
        n(i(4923), e),
        n(i(4626), e),
        n(i(4259), e),
        n(i(7196), e));
    },
    7195: function (t, e) {},
    7196: function (t, e, i) {
      "use strict";
      (function (t) {
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.createReverseTwitterRegistry =
            e.ReverseTwitterRegistryState =
            e.getTwitterRegistryData =
            e.getTwitterHandleandRegistryKeyViaFilters =
            e.getHandleAndRegistryKey =
            e.getTwitterRegistry =
            e.getTwitterRegistryKey =
            e.deleteTwitterRegistry =
            e.changeVerifiedPubkey =
            e.changeTwitterRegistryData =
            e.createVerifiedTwitterRegistry =
            e.TWITTER_ROOT_PARENT_REGISTRY_KEY =
            e.TWITTER_VERIFICATION_AUTHORITY =
              void 0));
        const r = i(1),
          n = i(5892),
          o = i(4922),
          s = i(4923),
          a = i(4626),
          u = i(4259);
        async function h(t, i, n, a, h) {
          const l = await (0, u.getHashedName)(i),
            c = await (0, u.getNameAccountKey)(
              l,
              void 0,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            );
          let d = [
            (0, s.createInstruction)(
              o.NAME_PROGRAM_ID,
              r.SystemProgram.programId,
              c,
              n,
              h,
              l,
              new u.Numberu64(await t.getMinimumBalanceForRentExemption(a)),
              new u.Numberu32(a),
              void 0,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
              e.TWITTER_VERIFICATION_AUTHORITY,
            ),
          ];
          return ((d = d.concat(await y(t, i, c, n, h))), d);
        }
        async function l(t, i, r, n) {
          const a = await (0, u.getHashedName)(t),
            h = await (0, u.getNameAccountKey)(
              a,
              void 0,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            ),
            l = [
              (0, s.updateInstruction)(
                o.NAME_PROGRAM_ID,
                h,
                new u.Numberu32(r),
                n,
                i,
                void 0,
              ),
            ];
          return l;
        }
        async function c(t, i, r, n, a) {
          const h = await (0, u.getHashedName)(i),
            l = await (0, u.getNameAccountKey)(
              h,
              void 0,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            );
          let c = [
            (0, s.transferInstruction)(o.NAME_PROGRAM_ID, l, n, r, void 0),
          ];
          return (
            c.push(
              await (0, o.deleteNameRegistry)(
                t,
                r.toString(),
                a,
                e.TWITTER_VERIFICATION_AUTHORITY,
                e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
              ),
            ),
            (c = c.concat(await y(t, i, l, n, a))),
            c
          );
        }
        async function d(t, i) {
          const r = await (0, u.getHashedName)(t),
            n = await (0, u.getNameAccountKey)(
              r,
              void 0,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            ),
            a = await (0, u.getHashedName)(i.toString()),
            h = await (0, u.getNameAccountKey)(
              a,
              e.TWITTER_VERIFICATION_AUTHORITY,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            ),
            l = [
              (0, s.deleteInstruction)(o.NAME_PROGRAM_ID, n, i, i),
              (0, s.deleteInstruction)(o.NAME_PROGRAM_ID, h, i, i),
            ];
          return l;
        }
        async function f(t) {
          const i = await (0, u.getHashedName)(t);
          return await (0, u.getNameAccountKey)(
            i,
            void 0,
            e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
          );
        }
        async function m(t, i) {
          const r = await (0, u.getHashedName)(i),
            n = await (0, u.getNameAccountKey)(
              r,
              void 0,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            ),
            o = a.NameRegistryState.retrieve(t, n);
          return o;
        }
        async function p(t, i) {
          const n = await (0, u.getHashedName)(i.toString()),
            o = await (0, u.getNameAccountKey)(
              n,
              e.TWITTER_VERIFICATION_AUTHORITY,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            ),
            s = await ReverseTwitterRegistryState.retrieve(t, o);
          return [s.twitterHandle, new r.PublicKey(s.twitterRegistryKey)];
        }
        async function v(t, i) {
          const s = [
              {
                memcmp: {
                  offset: 0,
                  bytes: e.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBase58(),
                },
              },
              { memcmp: { offset: 32, bytes: i.toBase58() } },
              {
                memcmp: {
                  offset: 64,
                  bytes: e.TWITTER_VERIFICATION_AUTHORITY.toBase58(),
                },
              },
            ],
            h = await (0, u.getFilteredProgramAccounts)(
              t,
              o.NAME_PROGRAM_ID,
              s,
            );
          for (const e of h)
            if (
              e.accountInfo.data.length >
              a.NameRegistryState.HEADER_LEN + 32
            ) {
              const t = e.accountInfo.data.slice(
                  a.NameRegistryState.HEADER_LEN,
                ),
                i = (0, n.deserialize)(
                  ReverseTwitterRegistryState.schema,
                  ReverseTwitterRegistryState,
                  t,
                );
              return [i.twitterHandle, new r.PublicKey(i.twitterRegistryKey)];
            }
          throw new Error("Registry not found.");
        }
        async function g(i, n) {
          const s = [
              {
                memcmp: {
                  offset: 0,
                  bytes: e.TWITTER_ROOT_PARENT_REGISTRY_KEY.toBytes(),
                },
              },
              { memcmp: { offset: 32, bytes: n.toBytes() } },
              {
                memcmp: {
                  offset: 64,
                  bytes: new r.PublicKey(t.alloc(32, 0)).toBase58(),
                },
              },
            ],
            h = await (0, u.getFilteredProgramAccounts)(
              i,
              o.NAME_PROGRAM_ID,
              s,
            );
          if (h.length > 1) throw new Error("Found more than one registry.");
          return h[0].accountInfo.data.slice(a.NameRegistryState.HEADER_LEN);
        }
        ((e.TWITTER_VERIFICATION_AUTHORITY = new r.PublicKey(
          "FvPH7PrVrLGKPfqaf3xJodFTjZriqrAXXLTVWEorTFBi",
        )),
          (e.TWITTER_ROOT_PARENT_REGISTRY_KEY = new r.PublicKey(
            "4YcexoW3r78zz16J2aqmukBLRwGq6rAvWzJpkYAXqebv",
          )),
          (e.createVerifiedTwitterRegistry = h),
          (e.changeTwitterRegistryData = l),
          (e.changeVerifiedPubkey = c),
          (e.deleteTwitterRegistry = d),
          (e.getTwitterRegistryKey = f),
          (e.getTwitterRegistry = m),
          (e.getHandleAndRegistryKey = p),
          (e.getTwitterHandleandRegistryKeyViaFilters = v),
          (e.getTwitterRegistryData = g));
        class ReverseTwitterRegistryState {
          constructor(t) {
            ((this.twitterRegistryKey = t.twitterRegistryKey),
              (this.twitterHandle = t.twitterHandle));
          }
          static async retrieve(t, e) {
            const i = await t.getAccountInfo(e, "processed");
            if (!i) throw new Error("Invalid reverse Twitter account provided");
            const r = (0, n.deserializeUnchecked)(
              this.schema,
              ReverseTwitterRegistryState,
              i.data.slice(a.NameRegistryState.HEADER_LEN),
            );
            return r;
          }
        }
        async function y(i, a, h, l, c) {
          const d = await (0, u.getHashedName)(l.toString()),
            f = await (0, u.getNameAccountKey)(
              d,
              e.TWITTER_VERIFICATION_AUTHORITY,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
            ),
            m = (0, n.serialize)(
              ReverseTwitterRegistryState.schema,
              new ReverseTwitterRegistryState({
                twitterRegistryKey: h.toBytes(),
                twitterHandle: a,
              }),
            );
          return [
            (0, s.createInstruction)(
              o.NAME_PROGRAM_ID,
              r.SystemProgram.programId,
              f,
              l,
              c,
              d,
              new u.Numberu64(
                await i.getMinimumBalanceForRentExemption(m.length),
              ),
              new u.Numberu32(m.length),
              e.TWITTER_VERIFICATION_AUTHORITY,
              e.TWITTER_ROOT_PARENT_REGISTRY_KEY,
              e.TWITTER_VERIFICATION_AUTHORITY,
            ),
            (0, s.updateInstruction)(
              o.NAME_PROGRAM_ID,
              f,
              new u.Numberu32(0),
              t.from(m),
              e.TWITTER_VERIFICATION_AUTHORITY,
              void 0,
            ),
          ];
        }
        ((e.ReverseTwitterRegistryState = ReverseTwitterRegistryState),
          (ReverseTwitterRegistryState.schema = new Map([
            [
              ReverseTwitterRegistryState,
              {
                kind: "struct",
                fields: [
                  ["twitterRegistryKey", [32]],
                  ["twitterHandle", "string"],
                ],
              },
            ],
          ])),
          (e.createReverseTwitterRegistry = y));
      }).call(this, i(2).Buffer);
    },
    7197: function (t, e, i) {
      "use strict";
      var r = i(1),
        n = i(4),
        o = i(80),
        s = i.n(o),
        a = i(67),
        u = i(5887),
        h = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        c = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        f = (t, e, i) =>
          e in t
            ? h(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (t[e] = i),
        m = (t, e) => {
          for (var i in e || (e = {})) c.call(e, i) && f(t, i, e[i]);
          if (l) for (var i of l(e)) d.call(e, i) && f(t, i, e[i]);
          return t;
        },
        p = (t, e, i) =>
          new Promise((r, n) => {
            var o = (t) => {
                try {
                  a(i.next(t));
                } catch (e) {
                  n(e);
                }
              },
              s = (t) => {
                try {
                  a(i.throw(t));
                } catch (e) {
                  n(e);
                }
              },
              a = (t) =>
                t.done ? r(t.value) : Promise.resolve(t.value).then(o, s);
            a((i = i.apply(t, e)).next());
          });
      const v = 500,
        g = "atomicwallet.io",
        y = "finalized",
        w = "system",
        M = "transfer",
        b = "TRANSFER_COIN",
        _ = "TRANSFER_NFT",
        T = "TRANSFER_TOKEN",
        A = (t) => {
          const {
            transaction: {
              message: {
                instructions: [{ program: e, parsed: { type: i } = {} }] = [{}],
              },
            } = {},
          } = t || {};
          return e === w && i === M;
        },
        k = (t) => {
          var e, i;
          const { meta: { postTokenBalances: r = [] } = {} } = t || {};
          return (
            r.length > 0 &&
            0 ===
              (null == (i = null == (e = r[0]) ? void 0 : e.uiTokenAmount)
                ? void 0
                : i.decimals)
          );
        },
        R = (t) => {
          var e, i;
          return null == (i = null == (e = t.transaction) ? void 0 : e.message)
            ? void 0
            : i.instructions.find((t) => {
                var e;
                return (
                  "spl-token" === t.program &&
                  "transferChecked" ===
                    (null == (e = t.parsed) ? void 0 : e.type)
                );
              });
        },
        E = (t) => !!R(t),
        O = (t) => {
          const {
            transaction: {
              message: {
                instructions: [
                  {
                    parsed: {
                      info: { source: e, destination: i, lamports: r = 0 },
                    },
                  },
                ],
              },
            },
          } = t;
          return { source: e, destination: i, isNft: !1, amount: r };
        },
        P = (t) => {
          const {
              meta: { postTokenBalances: e = [] },
            } = t,
            i = {
              source: "",
              destination: "",
              isNft: !0,
              isToken: !1,
              amount: "1",
              decimal: 0,
            };
          return e.reduce((t, e) => {
            const {
              owner: i,
              uiTokenAmount: { amount: r },
            } = e;
            switch (r) {
              case "1":
                t.destination = i;
                break;
              case "0":
                t.source = i;
                break;
              default:
            }
            return t;
          }, i);
        },
        S = (t, e) => {
          var i, r, n, o;
          const s = R(t),
            a =
              null ==
              (n =
                null ==
                (r =
                  null == (i = null == t ? void 0 : t.meta)
                    ? void 0
                    : i.postTokenBalances)
                  ? void 0
                  : r[0])
                ? void 0
                : n.owner,
            { info: u } = s.parsed;
          if (!u) throw new Error("Could not parse token tx");
          const {
              tokenAmount: { amount: h, decimals: l } = {},
              destination: c = "",
              source: d,
              mint: f,
            } = null != u ? u : { tokenAmount: {} },
            m = null == (o = e[f.toLowerCase()]) ? void 0 : o.ticker;
          return {
            source: d,
            destination: c,
            isNft: !1,
            isToken: !0,
            amount: h,
            decimal: l,
            symbol: m,
            mint: f,
            firstPostTokenBalanceOwner: a,
          };
        },
        I = {
          [b]: { isMatch: A, parse: O },
          [_]: { isMatch: k, parse: P },
          [T]: { isMatch: E, parse: S },
        };
      class SolanaTritonExplorer extends u["a"] {
        constructor({ wallet: t, config: e }) {
          super({ wallet: t, config: e });
          const i =
            "" + Object(a["getStringWithEnsuredEndChar"])(e.baseUrl, "/");
          this.connection = new r["Connection"](i, {
            httpHeaders: { "Access-Control-Allow-Origin": g },
          });
        }
        fetchTxSignaturesForChunk(t) {
          return p(this, arguments, function* (t, e = v) {
            try {
              return (yield this.connection.getSignaturesForAddress(
                t,
                { limit: e },
                y,
              )).map(({ signature: t }) => t);
            } catch (i) {
              return (console.warn(i), []);
            }
          });
        }
        getTxInstruction(t, e) {
          const i = {
            destination: "",
            source: "",
            isNft: !1,
            isToken: !1,
            amount: "0",
            decimal: 0,
            symbol: "",
            mint: "",
          };
          return Object.entries(I).reduce((i, [, { isMatch: r, parse: n }]) => {
            const o = r(t) ? n(t, e) : {};
            return m(m({}, i), o);
          }, i);
        }
        getTxDateTime(t) {
          return Object(a["convertSecondsToDateTime"])(t.blockTime);
        }
        getTxMemo(t) {
          return t.memo || "";
        }
        fetchTxsForChunk(t) {
          return p(this, null, function* () {
            try {
              return this.connection.getParsedTransactions(t, {
                commitment: y,
                maxSupportedTransactionVersion: 0,
              });
            } catch (e) {
              return (console.warn(e), []);
            }
          });
        }
        getTransactions(t) {
          return p(
            this,
            arguments,
            function* ({
              address: t,
              limit: e = this.defaultTxLimit,
              pageNum: i = 0,
            }) {
              const o = yield this.fetchTxSignaturesForChunk(
                  new r["PublicKey"](t),
                  e * (i + 1),
                ),
                s = yield this.fetchTxsForChunk(
                  Object(n["chunkArray"])(o, e)[i] || [],
                );
              return this.modifyTransactionsResponse(s, t);
            },
          );
        }
        modifyTransactionsResponse(t, e) {
          const i = Object.fromEntries(Object.entries(this.wallet.tokens()));
          return t.reduce((t, r) => {
            try {
              const {
                source: o,
                destination: u,
                isNft: h,
                isToken: l,
                amount: c,
                decimal: d,
                symbol: f,
                mint: m,
                firstPostTokenBalanceOwner: p,
              } = this.getTxInstruction(r, i);
              let v, g;
              if (h) ((v = "NFT"), (g = this.wallet.id));
              else if (l)
                ((v = "" + Object(a["toCurrency"])(c, d)),
                  (g = Object(n["getTokenId"])({
                    contract: m.toLowerCase(),
                    parent: "SOL",
                    ticker: f,
                  })));
              else {
                if (!Number(c)) return t;
                ((v = "" + Object(a["toCurrency"])(c, this.wallet.decimal)),
                  (g = this.wallet.id));
              }
              return (
                t.push(
                  new s.a({
                    ticker: f || this.wallet.ticker,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: this.getTxHash(r),
                    direction: u === e,
                    otherSideAddress: this.getTxOtherSideAddress({
                      selfAddress: e,
                      source: o,
                      destination: u,
                      isToken: l,
                      firstPostTokenBalanceOwner: p,
                    }),
                    amount: v,
                    datetime: this.getTxDateTime(r),
                    memo: this.getTxMemo(r),
                    confirmations: this.getTxConfirmations(r),
                    fee: this.getTxFee(r),
                    feeTicker: this.getTxFeeTicker(),
                    isNft: h,
                    isToken: l,
                    symbol: f,
                    walletid: g,
                    walletId: g,
                  }),
                ),
                t
              );
            } catch (o) {
              return (
                console.warn("[SOL] tx parse failed"),
                console.error(o),
                t
              );
            }
          }, []);
        }
        getTxOtherSideAddress({
          selfAddress: t,
          source: e,
          destination: i,
          isToken: r,
          firstPostTokenBalanceOwner: n,
        }) {
          return r && n ? n : i === t ? e : i;
        }
      }
      e["a"] = SolanaTritonExplorer;
    },
  },
]);
