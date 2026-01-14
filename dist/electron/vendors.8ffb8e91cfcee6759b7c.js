(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [5],
  {
    2806: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BitcoinJSMixin", {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, "BitcoinLikeFeeMixin", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, "BitcoreBitcoinCashMixin", {
          enumerable: !0,
          get: function () {
            return b.default;
          },
        }),
        Object.defineProperty(t, "BitcoreMixin", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "BitgoMixin", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, "CosmosMixinV2", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, "HasBlockScanner", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, "HasProviders", {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, "HasTokensMixin", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, "Neo3Mixin", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "NeoMixin", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "NftMixin", {
          enumerable: !0,
          get: function () {
            return w.default;
          },
        }),
        Object.defineProperty(t, "OntMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "StakingMixin", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, "Web3Mixin", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }));
      var o = r(a(7099)),
        n = r(a(7100)),
        i = r(a(7104)),
        s = r(a(386)),
        c = r(a(7105)),
        d = r(a(397)),
        l = r(a(7106)),
        u = r(a(7141)),
        h = r(a(158)),
        m = r(a(7144)),
        g = r(a(382)),
        f = r(a(4105)),
        p = r(a(7145)),
        b = r(a(7146)),
        w = r(a(823));
    },
    4105: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const r = (e) =>
        class extends e {
          onConfirmSocketTx(e) {
            (this.getInfo(),
              null !== e && void 0 !== e && e.direction
                ? this.eventEmitter.emit("socket::newtx", {
                    id: this.id,
                    ticker: this.ticker,
                    amount: e.amount,
                    txid: e.txid,
                  })
                : this.eventEmitter.emit("socket::newtx::outgoing", {
                    id: this.id,
                    ticker: this.ticker,
                  }));
          }
        };
      t.default = r;
    },
    4912: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AdaLibApi", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, "AdaLibLegacy", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "CosmosTxTypes", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var o = r(a(5862)),
        n = r(a(7134)),
        i = r(a(7140));
    },
    5862: function (e, t, a) {
      "use strict";
      (a.r(t),
        function (e) {
          (a.d(t, "shelleyTxEqual", function () {
            return E;
          }),
            a.d(t, "default", function () {
              return AdaLibApi;
            }));
          var r = a(803),
            o = a.n(r),
            n = a(5863),
            i = a.n(n),
            s = a(2792),
            c = a.n(s),
            d = a(105),
            l = a.n(d),
            u = a(5864),
            h = a.n(u),
            m = a(3135),
            g = (e, t, a) =>
              new Promise((r, o) => {
                var n = (e) => {
                    try {
                      s(a.next(e));
                    } catch (t) {
                      o(t);
                    }
                  },
                  i = (e) => {
                    try {
                      s(a.throw(e));
                    } catch (t) {
                      o(t);
                    }
                  },
                  s = (e) =>
                    e.done ? r(e.value) : Promise.resolve(e.value).then(n, i);
                s((a = a.apply(e, t)).next());
              });
          const f = "1000000",
            p = 2147483648,
            b = [p, p],
            w = 21600,
            v = 1852,
            y = 1815,
            x = { EXTERNAL: 0, INTERNAL: 1, CHIMERIC: 2 },
            T = 1,
            _ = 6,
            A = 10;
          function N() {
            const e = new l.a(_);
            return {
              primaryTicker: "ADA",
              decimalPlaces: e,
              totalSupply: new l.a("45 000 000 000".replace(/ /g, ""), A).times(
                new l.a(A).pow(e),
              ),
            };
          }
          const P = (e) => p + e;
          class HaskellShelleyTxSignRequest {
            constructor(e, t) {
              ((this.cardano = t), (this.signRequest = e));
            }
            totalInput(e) {
              const t = this.signRequest.unsignedTx
                  .get_implicit_input()
                  .checked_add(
                    this.signRequest.unsignedTx.get_explicit_input(),
                  ),
                a = this.signRequest.changeAddr
                  .map((e) => new l.a(e.value || new l.a(0)))
                  .reduce((e, t) => e.plus(t), new l.a(0)),
                r = new l.a(t.to_str()).minus(a);
              return e ? r.shiftedBy(-N().decimalPlaces.toNumber()) : r;
            }
            totalOutput(e) {
              const t = this.signRequest.unsignedTx.get_explicit_output(),
                a = new l.a(t.to_str());
              return e ? a.shiftedBy(-N().decimalPlaces.toNumber()) : a;
            }
            fee(e) {
              const t = this.signRequest.unsignedTx.get_fee_or_calc(),
                a = new l.a(t.to_str());
              return e ? a.shiftedBy(-N().decimalPlaces.toNumber()) : a;
            }
            receivers(e) {
              const t = this.signRequest.unsignedTx.build().outputs(),
                a = [];
              for (let r = 0; r < t.len(); r += 1)
                a.push(this.toHexOrBase58(t.get(r).address()));
              if (!e) {
                const e = this.signRequest.changeAddr.map((e) => e.address);
                return a.filter((t) => !e.includes(t));
              }
              return a;
            }
            uniqueSenderAddresses() {
              return Array.from(
                new Set(this.signRequest.senderUtxos.map((e) => e.receiver)),
              );
            }
            isEqual(e) {
              return (
                null != e &&
                e instanceof this.cardano.TransactionBuilder &&
                E(this.signRequest.unsignedTx, e)
              );
            }
            toHexOrBase58(t) {
              const a = this.cardano.ByronAddress.from_address(t);
              return null == a
                ? e.from(t.to_bytes()).toString("hex")
                : a.to_base58();
            }
            self() {
              return this.signRequest;
            }
          }
          function E(t, a) {
            return (
              e.from(t.build().to_bytes()).toString("hex") ===
              e.from(a.build().to_bytes()).toString("hex")
            );
          }
          class AdaLibApi {
            constructor(t, a, r) {
              ((this.cardano = a),
                (this.legacyLib = t),
                (this.cip1852Account = void 0),
                (this.legacyAccount = void 0),
                (this.protocolParams = {
                  linearFee: this.cardano.LinearFee.new(
                    this.cardano.BigNum.from_str(String(r.feeCoefficient)),
                    this.cardano.BigNum.from_str(String(r.feeConst)),
                  ),
                  minimumUtxoVal: this.cardano.BigNum.from_str("1"),
                  poolDeposit: this.cardano.BigNum.from_str("50000000"),
                  keyDeposit: this.cardano.BigNum.from_str("2000000"),
                  coinsPerUtxo: this.cardano.BigNum.from_str("34482"),
                }),
                (this.legacyCrypto = {
                  HDNode: ({
                    secret: t,
                    secretKey: a,
                    publicKey: r,
                    chainCode: o,
                  }) => {
                    t
                      ? ((a = t.slice(0, 64)),
                        (r = t.slice(64, 96)),
                        (o = t.slice(96, 128)))
                      : (t = e.concat([a, r, o]));
                    const n = e.concat([r, o], 64);
                    function i() {
                      return e.concat([a, n]);
                    }
                    function s() {
                      return i().toString("hex");
                    }
                    return {
                      secretKey: a,
                      publicKey: r,
                      chainCode: o,
                      extendedPublicKey: n,
                      toBuffer: i,
                      toString: s,
                    };
                  },
                  deriveChildHdNode: (e, t) => {
                    const a = h.a.derivePrivate(e.toBuffer(), t, 1);
                    return this.legacyCrypto.HDNode({
                      secretKey: a.slice(0, 64),
                      publicKey: a.slice(64, 96),
                      chainCode: a.slice(96, 128),
                    });
                  },
                }));
            }
            getCip1852AccountFromMnemonic(t) {
              const a = i.a.mnemonicToEntropy(t),
                r = this.cardano.Bip32PrivateKey.from_bip39_entropy(
                  e.from(a, "hex"),
                  e.from(""),
                );
              return r.derive(P(v)).derive(P(y)).derive(P(0));
            }
            getCip1852AccountFromPrivateKey(e) {
              return (
                (this.cip1852Account =
                  this.cardano.Bip32PrivateKey.from_bech32(e)),
                this.cip1852Account
              );
            }
            getLegacyAccountFromMnemonic(e) {
              const t = this.legacyLib.Entropy.from_english_mnemonics(e);
              return (
                (this.legacyAccount = this.legacyLib.DaedalusWallet.recover(t)),
                this.legacyAccount
              );
            }
            getPrivateKeyByMnemonic(e) {
              return g(this, null, function* () {
                const t = this.getCip1852AccountFromMnemonic(e);
                return ((this.cip1852Account = t), t.to_bech32());
              });
            }
            getLegacyPrivateKeyByMnemonic(e) {
              return g(this, null, function* () {
                const t = yield h.a.mnemonicToRootKeypair(e, 1);
                return c.a.encode(t);
              });
            }
            getLegacyAddressByPrivateKeySync(e) {
              const { HDNode: HDNode, deriveChildHdNode: t } =
                  this.legacyCrypto,
                a = c.a.decode(e),
                r = HDNode({ secret: a }),
                o = b.reduce(t, r).extendedPublicKey,
                n = this.getHDPassphrase(e);
              return h.a.packAddress(b, o, n, 1);
            }
            getHDPassphrase(e) {
              const t = c.a.decode(e),
                a = this.legacyCrypto.HDNode({ secret: t });
              return Object(m["pbkdf2Sync"])(
                a.extendedPublicKey,
                "address-hashing",
                500,
                32,
                "sha512",
              );
            }
            getAddressByPrivateKey(e) {
              return g(this, null, function* () {
                const t = e || this.cip1852Account,
                  a = t.derive(x.EXTERNAL).derive(0).to_public(),
                  r = t.derive(x.CHIMERIC).derive(0).to_public(),
                  o = this.cardano.BaseAddress.new(
                    T,
                    this.cardano.Credential.from_keyhash(a.to_raw_key().hash()),
                    this.cardano.Credential.from_keyhash(r.to_raw_key().hash()),
                  );
                return o.to_address().to_bech32();
              });
            }
            validateShelleyPrivateKey(e) {
              try {
                return this.cardano.Bip32PrivateKey.from_bech32(e);
              } catch (t) {
                return !1;
              }
            }
            validateShelleyAddress(e) {
              if (!e) return !1;
              try {
                return this.cardano.Address.from_bech32(e);
              } catch (t) {
                return !1;
              }
            }
            validateAddress(e) {
              let t;
              if (!e) return !1;
              try {
                if (((t = this.cardano.Address.from_bech32(e)), t)) return t;
              } catch (a) {
                t = !1;
              }
              try {
                t = this.cardano.ByronAddress.from_base58(e);
              } catch (a) {
                t = !1;
              }
              return t;
            }
            normalizeToAddress(e) {
              return this.cardano.ByronAddress.is_valid(e)
                ? this.cardano.ByronAddress.from_base58(e).to_address()
                : this.cardano.Address.from_bech32(e);
            }
            newAdaUnsignedTx(e, t, a, r, o, n, i) {
              const s = o + w,
                c = new Map();
              for (const u of r)
                c.set(
                  {
                    amount: u.amount,
                    receiver: u.receiver,
                    tx_hash: u.tx_hash,
                    tx_index: u.tx_index,
                    utxo_id: u.tx_hash + u.tx_index,
                  },
                  u,
                );
              const d = this.newAdaUnsignedTxFromUtxo(
                  e,
                  t,
                  a,
                  Array.from(c.keys()),
                  this.protocolParams,
                  s,
                  n,
                  i,
                ),
                l = d.senderUtxos.map((e) => {
                  const t = c.get(e);
                  if (null == t)
                    throw new Error(
                      "[newAdaUnsignedTx] utxo reference was changed. Should not happen",
                    );
                  return t;
                });
              return {
                senderUtxos: l,
                txBuilder: d.txBuilder,
                changeAddr: d.changeAddr,
              };
            }
            findSuitableInputs(e = [], t) {
              if (e.length <= 0)
                throw new Error("[findSuitableInputs]: UTXOs must be provided");
              let a = new l.a(t);
              const r = new l.a(0),
                o = new l.a(-1),
                n = f ? new l.a(f) : r,
                i = [],
                s = [...e.sort((e, t) => Number(e.amount) - Number(t.amount))];
              let c = s.length - 1;
              while (a.gt(r) || (a.lt(r) && a.times(o).lt(n))) {
                if (c < 0) break;
                const e = s.findIndex((e) => new l.a(e.amount).gte(a));
                (e >= 0
                  ? ((a = a.minus(new l.a(s[e].amount))),
                    i.push(...s.splice(e, 1)))
                  : ((a = a.minus(new l.a(s[c].amount))),
                    i.push(...s.splice(c, 1))),
                  (c = s.length - 1));
              }
              return i;
            }
            newAdaUnsignedTxFromUtxo(
              e,
              t,
              a,
              r,
              o = this.protocolParams,
              n = w,
              i,
              s,
            ) {
              const c = this.normalizeToAddress(e);
              if (null == c)
                throw new Error(
                  "[newAdaUnsignedTxFromUtxo] receiver not a valid Shelley address",
                );
              const d = this.cardano.TransactionBuilderConfigBuilder.new()
                  .fee_algo(this.protocolParams.linearFee)
                  .pool_deposit(this.protocolParams.poolDeposit)
                  .key_deposit(this.protocolParams.keyDeposit)
                  .max_value_size(4e3)
                  .max_tx_size(8e3)
                  .coins_per_utxo_byte(this.protocolParams.minimumUtxoVal)
                  .build(),
                u = this.cardano.TransactionBuilder.new(d);
              u.set_ttl(n);
              const h = null === t && i,
                m = null === t;
              let g;
              if (
                (h ||
                  m ||
                  u.add_output(
                    this.cardano.TransactionOutput.new(
                      c,
                      this.cardano.Value.new(this.cardano.BigNum.from_str(t)),
                    ),
                  ),
                i && u.set_certs(i),
                s && u.set_withdrawals(s),
                h)
              )
                g = new l.a(25e5);
              else {
                const e = u
                  .get_explicit_output()
                  .checked_add(this.cardano.Value.new(u.min_fee()))
                  .coin();
                g = new l.a(e.to_str());
              }
              const f = this.findSuitableInputs(r, g, u);
              f.forEach((e) => {
                this.addUtxoInput(u, e);
              });
              const p = (() => {
                if (null == a) return (u.set_fee(u.min_fee()), []);
                const e = this.cardano.Value.new(
                    this.cardano.BigNum.from_str(g.toString()),
                  ),
                  t = this.normalizeToAddress(a);
                if (null == t)
                  throw new Error(
                    "[newAdaUnsignedTxFromUtxo] change not a valid Shelley address",
                  );
                const r = new l.a(
                  u.get_explicit_input().checked_sub(e).coin().to_str(),
                );
                let o = !1;
                try {
                  r.toNumber() > 0 && (u.add_change_if_needed(t), (o = !0));
                } catch (n) {
                  console.warn(n);
                }
                return o ? [{ address: a, value: r.toString() }] : [];
              })();
              return { senderUtxos: f, txBuilder: u, changeAddr: p };
            }
            addUtxoInput(e, t) {
              const a = this.normalizeToAddress(t.receiver),
                r = this.getCardanoAddrKeyHash(a);
              if (null !== r) {
                if (void 0 === r)
                  throw new Error("addUtxoInput script inputs not expected");
                e.add_key_input(
                  r,
                  this.utxoToTxInput(t),
                  this.cardano.Value.new(
                    this.cardano.BigNum.from_str(t.amount),
                  ),
                );
              } else {
                const r = this.cardano.ByronAddress.from_address(a);
                if (null == r)
                  throw new Error(
                    "Add input should never happen: non-byron address without key hash",
                  );
                e.add_bootstrap_input(
                  r,
                  this.utxoToTxInput(t),
                  this.cardano.Value.new(
                    this.cardano.BigNum.from_str(t.amount),
                  ),
                );
              }
            }
            utxoToTxInput(t) {
              return this.cardano.TransactionInput.new(
                this.cardano.TransactionHash.from_bytes(
                  e.from(t.tx_hash, "hex"),
                ),
                t.tx_index,
              );
            }
            getCardanoAddrKeyHash(e) {
              {
                const t = this.cardano.ByronAddress.from_address(e);
                if (t) return null;
              }
              {
                const t = this.cardano.BaseAddress.from_address(e);
                if (t) return t.payment_cred().to_keyhash();
              }
              {
                const t = this.cardano.PointerAddress.from_address(e);
                if (t) return t.payment_cred().to_keyhash();
              }
              {
                const t = this.cardano.EnterpriseAddress.from_address(e);
                if (t) return t.payment_cred().to_keyhash();
              }
              {
                const t = this.cardano.RewardAddress.from_address(e);
                if (t) return t.payment_cred().to_keyhash();
              }
              throw new Error(" unknown address type");
            }
            signTransaction(t, a = this.cip1852Account, r) {
              const o = new HaskellShelleyTxSignRequest(
                  {
                    senderUtxos: t.senderUtxos,
                    unsignedTx: t.txBuilder,
                    changeAddr: t.changeAddr,
                  },
                  this.cardano,
                ),
                n = this.legacyLib.DaedalusAddressChecker.new(
                  this.legacyAccount || r,
                );
              let i;
              const s = new Set(),
                c = new Set(),
                d = [];
              for (const b of t.senderUtxos) {
                const t = this.normalizeToAddress(b.receiver);
                if (null == t)
                  throw new Error(
                    "[signTransaction] utxo not a valid Shelley address",
                  );
                const a = this.getCardanoAddrKeyHash(t),
                  r = e.from(t.to_bytes()).toString("hex");
                if (null !== a) {
                  if (void 0 === a)
                    throw new Error(
                      "[signTransaction] cannot sign script inputs",
                    );
                  {
                    const t = e.from(a.to_bytes()).toString("hex");
                    c.has(t) || (c.add(t), d.push(b));
                  }
                } else
                  ((i = this.legacyLib.Address.from_base58(b.receiver)),
                    s.has(r) || (s.add(r), d.push(b)));
              }
              const l =
                  o.signRequest.unsignedTx instanceof
                  this.cardano.TransactionBuilder
                    ? o.signRequest.unsignedTx.build()
                    : o.signRequest.unsignedTx,
                u = {
                  shelleyKey: a.derive(0).derive(0).to_raw_key(),
                  shelleyStakeKey: a.derive(2).derive(0).to_raw_key(),
                };
              i &&
                (u.byronKey = e.from(
                  n.check_address(i).private_key().to_hex(),
                  "hex",
                ));
              const h = this.addWitnesses({
                  txBody: l,
                  uniqueUtxo: d,
                  keys: u,
                }),
                m = this.cardano.Transaction.new(l, h),
                g = e
                  .from(
                    this.cardano.FixedTransaction.new_from_body_bytes(
                      l.to_bytes(),
                    )
                      .transaction_hash()
                      .to_bytes(),
                  )
                  .toString("hex"),
                f = m.body().outputs().to_js_value(),
                p = f.map((e, t) => ({
                  amount: e.amount.coin,
                  receiver: e.address,
                  tx_hash: g,
                  tx_index: t,
                }));
              return { rawtx: m.to_bytes(), txid: g, utxo: p };
            }
            addWitnesses({ txBody: e, uniqueUtxo: t, keys: a }) {
              const { byronKey: r, shelleyKey: o, shelleyStakeKey: n } = a,
                i = this.cardano.FixedTransaction.new_from_body_bytes(
                  e.to_bytes(),
                ).transaction_hash(),
                s = this.cardano.BootstrapWitnesses.new(),
                c = this.cardano.Vkeywitnesses.new(),
                d = this.cardano.TransactionWitnessSet.new();
              for (let l = 0; l < t.length; l += 1) {
                const e = this.normalizeToAddress(t[l].receiver);
                if (null == e)
                  throw new Error(
                    "[addWitnesses] utxo not a valid Shelley address",
                  );
                const a = this.cardano.ByronAddress.from_address(e);
                if (a) {
                  const e = this.cardano.make_daedalus_bootstrap_witness(
                    i,
                    a,
                    this.cardano.LegacyDaedalusPrivateKey.from_bytes(r),
                  );
                  s.add(e);
                } else {
                  const e = this.cardano.make_vkey_witness(i, o),
                    t = this.cardano.make_vkey_witness(i, n);
                  (c.add(e), c.add(t));
                }
              }
              return (
                s.len() > 0 && d.set_bootstraps(s),
                c.len() > 0 && d.set_vkeys(c),
                d
              );
            }
            estimateFee({
              address: e,
              amount: t,
              outputs: a,
              ttl: r,
              certs: o,
            }) {
              const n = this.cardano.TransactionBuilderConfigBuilder.new()
                  .fee_algo(this.protocolParams.linearFee)
                  .pool_deposit(this.protocolParams.poolDeposit)
                  .key_deposit(this.protocolParams.keyDeposit)
                  .max_value_size(4e3)
                  .max_tx_size(8e3)
                  .coins_per_utxo_byte(this.protocolParams.minimumUtxoVal)
                  .build(),
                i = this.cardano.TransactionBuilder.new(n),
                s = this.normalizeToAddress(e);
              return (
                i.add_output(
                  this.cardano.TransactionOutput.new(
                    s,
                    this.cardano.Value.new(
                      this.cardano.BigNum.from_str(String(t)),
                    ),
                  ),
                ),
                a.forEach((e) => {
                  this.addUtxoInput(i, e);
                }),
                i.set_ttl(r + w),
                o && i.set_certs(o),
                i.min_fee().to_str()
              );
            }
            createTransaction({
              address: e,
              amount: t,
              changeAddress: a,
              utxo: r,
              slotNo: o,
              legacyAccount: n,
              cip: i,
            }) {
              const s = this.newAdaUnsignedTx(e, t, a, r, o, void 0),
                c = this.signTransaction(s, i, n);
              return c;
            }
            createStakeRegistrationCertificate(e) {
              const t = this.cardano.StakeRegistration.new(e);
              return this.cardano.Certificate.new_stake_registration(t);
            }
            createStakeDeregistrationCertificate(e) {
              const t = this.cardano.StakeDeregistration.new(e);
              return this.cardano.Certificate.new_stake_deregistration(t);
            }
            createStakeDelegationCertificate(e, t) {
              const a = this.cardano.StakeDelegation.new(e, t);
              return this.cardano.Certificate.new_stake_delegation(a);
            }
            createDelegationTransaction({
              paymentAddress: t,
              utxo: a,
              slotNo: r,
              poolId: n,
              stakeAddressRegistered: i,
            }) {
              const s = this.cardano.Address.from_bech32(t),
                c = this.cardano.BaseAddress.from_address(s),
                d = this.cardano.Certificates.new();
              let l;
              try {
                const t = o.a.decode(n);
                l = e.from(o.a.fromWords(t.words));
              } catch (g) {
                l = e.from(n, "hex");
              }
              const u = this.cardano.Ed25519KeyHash.from_bytes(l);
              (i ||
                d.add(this.createStakeRegistrationCertificate(c.stake_cred())),
                d.add(
                  this.createStakeDelegationCertificate(c.stake_cred(), u),
                ));
              const h = this.newAdaUnsignedTx(t, null, t, a, r, d),
                m = this.signTransaction(h);
              return m;
            }
            createVoteDelegationTransaction({
              address: e,
              amount: t,
              changeAddress: a,
              utxo: r,
              slotNo: o,
              legacyAccount: n,
              cip: i,
            }) {
              const s = this.getRewardAddress(e),
                c = this.cardano.Certificates.new();
              c.add(this.createVoteDelegationCertificate(s.payment_cred()));
              const d = this.newAdaUnsignedTx(e, t, a, r, o, c),
                l = this.signTransaction(d, i, n);
              return l;
            }
            getRewardAddressHexFromAddressStr(t) {
              return e
                .from(this.getRewardAddress(t).to_address().to_bytes())
                .toString("hex");
            }
            createVoteDelegationCertificate(e) {
              const t = this.cardano.DRep.new_always_abstain(),
                a = this.cardano.VoteDelegation.new(e, t);
              return this.cardano.Certificate.new_vote_delegation(a);
            }
            createWithdrawalTransaction({
              paymentAddress: e,
              utxo: t,
              slotNo: a,
              rewardAddress: r,
              amountToWithdraw: o,
            }) {
              const n = this.cardano.Withdrawals.new();
              n.insert(r, this.cardano.BigNum.from_str(o));
              const i = this.newAdaUnsignedTx(e, null, e, t, a, void 0, n),
                s = this.signTransaction(i);
              return s;
            }
            getRewardAddress(e) {
              const t = this.cardano.Address.from_bech32(e),
                a = this.cardano.BaseAddress.from_address(t),
                r = a.stake_cred(),
                o = this.cardano.RewardAddress.new(T, r);
              return o;
            }
          }
        }.call(this, a(2).Buffer));
    },
    7099: function (e, t, a) {
      "use strict";
      (function (e) {
        var r = a(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = r(a(794)),
          n = a(19),
          i = a(27);
        function s(e, t, a) {
          (c(e, t), t.set(e, a));
        }
        function c(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function d(e, t, a) {
          return (e.set(u(e, t), a), a);
        }
        function l(e, t) {
          return e.get(u(e, t));
        }
        function u(e, t, a) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : a;
          throw new TypeError("Private element is not present on this object");
        }
        const h = 5e3,
          m = 5,
          g = 8,
          f = "ANeo2toNeo3MigrationAddressxwPB2Hz",
          p = 10,
          b = new o.default(() => a.e(165).then(a.t.bind(null, 8898, 7))),
          w = (t) => {
            var a;
            return (
              (a = new WeakMap()),
              class extends t {
                constructor() {
                  (super(...arguments), s(this, a, void 0));
                }
                async loadWallet(e, t) {
                  const r = await b.get(),
                    o = r.HDNode.fromSeedBuffer(e, r.bitcoin),
                    s = o.derivePath(this.derivation),
                    { keyPair: c } = s.derive(0);
                  if (!c)
                    throw new n.WalletError({
                      type: i.WALLET_ERROR,
                      error: new Error("can't derive private key"),
                      instance: this,
                    });
                  return (
                    await this.setPrivateKey(c.toWIF()),
                    {
                      id: this.id,
                      privateKey: l(a, this),
                      address: this.address,
                    }
                  );
                }
                getAddress() {
                  return this.account
                    ? this.account.address
                    : new n.WalletError({
                        type: i.WALLET_ERROR,
                        error: new Error("this.account is empty"),
                        instance: this,
                      });
                }
                async validateAddress(e) {
                  if (!e) return !1;
                  const t = "NEO3" === this.id ? "N" : "A",
                    a = await this.loadLib("coreLib");
                  return e[0] === t && a.wallet.isAddress(e);
                }
                async createTransaction(e) {
                  let { address: t, amount: a, asset: r } = e;
                  (r || (r = this.ticker),
                    "GAS" === r.toUpperCase() &&
                      (a = this.toCurrencyUnit(a, g)));
                  const o = await this.loadLib("coreLib"),
                    n = await o.api.makeIntent({ [r.toUpperCase()]: a }, t);
                  return JSON.stringify(n);
                }
                async sendTransaction(e) {
                  const t = await this.loadLib("coreLib"),
                    a = new t.api.neoscan.instance("MainNet"),
                    r = JSON.parse(e);
                  try {
                    const {
                      response: { result: e, txid: o },
                    } = await t.default.sendAsset({
                      api: a,
                      account: this.account,
                      intents: r,
                    });
                    if (!e)
                      throw new n.ExplorerRequestError({
                        type: i.SEND_TRANSACTION_TYPE,
                        error: new Error("sendTransaction return false"),
                        instance: this,
                      });
                    return { txid: o };
                  } catch (o) {
                    throw new n.ExplorerRequestError({
                      type: i.SEND_TRANSACTION_TYPE,
                      error: o,
                      instance: this,
                    });
                  }
                }
                async getInfo() {
                  const { balance: e, balances: t } =
                    await this.explorer.getInfo(this.address);
                  return (
                    (this.balance = e),
                    (this.balances = t),
                    { balance: e, balances: t }
                  );
                }
                async sendAllToMyself() {
                  let e, t;
                  this.balances.neo > 0
                    ? ((t = "neo"), (e = this.balances.neo))
                    : this.balances.gas > 0 &&
                      ((t = "gas"),
                      (e = this.toMinimalUnit(this.balances.gas, g)));
                  const a = await this.createTransaction({
                    address: this.address,
                    amount: e,
                    asset: t,
                  });
                  return this.sendTransaction(a);
                }
                async claim() {
                  try {
                    if (!l(a, this))
                      throw new Error(`[${this.ticker}] claim: no private key`);
                    (await this.getInfo(this.address),
                      await this.sendAllToMyself(),
                      await new Promise((e, t) => setTimeout(e, h)));
                    const e = await this.loadLib("coreLib"),
                      t = new e.api.neoscan.instance("MainNet"),
                      r = await e.default.claimGas({
                        api: t,
                        account: this.account,
                      });
                    return { txid: r.response.txid };
                  } catch (e) {
                    throw new n.ExplorerRequestError({
                      type: i.SEND_TRANSACTION_TYPE,
                      error: e,
                      instance: this,
                    });
                  }
                }
                async waitUntilConfirmed(e) {
                  let t = !1,
                    a = 0;
                  do {
                    try {
                      (await new Promise((e, t) => setTimeout(e, h)),
                        await this.getTransaction(e),
                        (t = !0));
                    } catch (r) {
                      if (a >= m)
                        throw (
                          console.error(
                            `[${this.ticker}] waitUntilConfirmed: max tries count reached`,
                          ),
                          r
                        );
                    }
                    a++;
                  } while (a < m && !t);
                }
                async swap(t) {
                  let { amount: r, asset: o = this.ticker } = t;
                  const n = await this.loadLib("coreLib"),
                    { api: i, tx: s } = n,
                    { wallet: c } = this.coreLib3,
                    d = this.account,
                    u = i.makeIntent({ [o]: r }, f),
                    h = new n.api.neoscan.instance("MainNet"),
                    m = await h.getBalance(d.address),
                    g = {
                      url: h,
                      account: d,
                      balance: m,
                      intents: u,
                      fees: r > p ? 0 : 1,
                      signingCallback: i.signWithPrivateKey(l(a, this)),
                    },
                    b = await i.createContractTx(g),
                    w = new c.Account(l(a, this));
                  (b.tx.addAttribute(
                    s.TxAttrUsage.Remark14,
                    e.from(w.address).toString("hex"),
                  ),
                    await i.signTx(b));
                  const v = await i.sendTx(g);
                  return { txid: v.response.txid };
                }
                async setPrivateKey(e) {
                  const t = await this.loadLib("coreLib");
                  (d(a, this, e),
                    (this.account = new t.wallet.Account(e)),
                    (this.address = this.account.address));
                }
              }
            );
          };
        t.default = w;
      }).call(this, a(2).Buffer);
    },
    7100: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(a(7101)),
        n = a(19),
        i = r(a(794));
      function s(e, t, a) {
        (c(e, t), t.set(e, a));
      }
      function c(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function d(e, t) {
        return e.get(u(e, t));
      }
      function l(e, t, a) {
        return (e.set(u(e, t), a), a);
      }
      function u(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const h = new i.default(() =>
          Promise.all([a.e(20), a.e(129), a.e(228), a.e(203), a.e(438)]).then(
            a.t.bind(null, 2656, 7),
          ),
        ),
        m = "25000",
        g = "3500",
        f = "2500",
        p = 9,
        b = 5e3,
        w = 0.03,
        v = (e) => {
          var t;
          return (
            (t = new WeakMap()),
            class extends e {
              constructor(e) {
                (super(e),
                  s(this, t, void 0),
                  (this.gasLimit = (e && e.feeData.gasLimit) || m),
                  (this.gasPrice = (e && e.feeData.gasPrice) || g));
              }
              async loadWallet(e, a) {
                const { Crypto: r } = await h.get(),
                  o = r.PrivateKey.generateFromMnemonic(a, this.derivation);
                if (!o)
                  throw new Error(this.ticker + " can't get a privateKey");
                const n = o.getPublicKey(),
                  i = r.Address.fromPubKey(n);
                return (
                  l(t, this, o.serializeWIF()),
                  (this.address = i.toBase58()),
                  { id: this.id, privateKey: d(t, this), address: this.address }
                );
              }
              get feeTicker() {
                return "ONG";
              }
              getFee() {
                const e = new this.BN(this.gasLimit).mul(
                  new this.BN(this.gasPrice),
                );
                return e;
              }
              async getAddress() {
                if (d(t, this)) {
                  const { Crypto: e } = await h.get(),
                    t = await this.getPrivateKeyObject(),
                    a = t.getPublicKey(),
                    r = e.Address.fromPubKey(a);
                  return r.toBase58();
                }
                throw new Error(this.ticker + " privateKey is empty");
              }
              async validateAddress(e) {
                if (!e) return !1;
                const { CONST: t } = await h.get();
                try {
                  const { prefix: a } = o.default.decode(e, "hex");
                  return a === t.ADDR_VERSION;
                } catch (a) {
                  return !1;
                }
              }
              async createTransaction(e) {
                let { address: t, amount: a, asset: r } = e;
                r || (r = this.ticker);
                const {
                    OntAssetTxBuilder: o,
                    TransactionBuilder: n,
                    Crypto: i,
                  } = await h.get(),
                  s = await this.getPrivateKeyObject(),
                  c = new i.Address(this.address),
                  d = new i.Address(t),
                  l = o.makeTransferTx(r, c, d, Number(a), g, m);
                return (n.signTransaction(l, s), l.serialize());
              }
              createTokenTransaction(e) {
                let { address: t, amount: a, asset: r } = e;
                return this.createTransaction({
                  address: t,
                  amount: a,
                  asset: r,
                });
              }
              async getPrivateKeyObject() {
                const { Crypto: e } = await h.get();
                return e.PrivateKey.deserializeWIF(d(t, this));
              }
              async sendAllToMyself(e) {
                const t = await this.createTransaction({
                  address: this.address,
                  amount:
                    "ONT" === e
                      ? this.toMinimalUnit(this.balances.ont, 0)
                      : this.toMinimalUnit(this.balances.ong, p),
                  asset: e,
                });
                return this.sendTransaction(t);
              }
              async checkUnbondSendTxAndRefreshBalance() {
                return (
                  this.balances.ont > 0
                    ? await this.sendAllToMyself("ONT")
                    : this.balances.ong > 0 &&
                      (await this.sendAllToMyself("ONG")),
                  await new Promise((e) => setTimeout(e, b)),
                  this.getInfo()
                );
              }
              async checkRewardAndClaim() {
                const e = await this.createClaimTransaction(
                  this.balances.rewards,
                );
                return this.sendTransaction(e);
              }
              async makeClaim() {
                const e =
                  Number(this.balances.unbonding) +
                  Number(this.balances.rewards);
                if (e < w)
                  throw new Error(
                    `Unbonding + rewards ${e} ONG is less then ${w} ONG`,
                  );
                if (Number(this.balances.ong) <= Number(this.fee))
                  throw new Error(
                    `${this.balances.ong} ONG is available, but needed ${this.fee} ONG to pay for fee`,
                  );
                return (
                  await this.checkUnbondSendTxAndRefreshBalance(),
                  this.checkRewardAndClaim()
                );
              }
              async getInfo() {
                const { balances: e } = await this.explorer.getInfo(
                  this.address,
                );
                var t;
                ((this.balance = this.toMinimalUnit(
                  e[this.ticker.toLowerCase()],
                )),
                (this.balances = e),
                this.tokens.ONG) &&
                  (this.tokens.ONG.balance = this.tokens.ONG.toMinimalUnit(
                    null !==
                      (t = null === e || void 0 === e ? void 0 : e.ong) &&
                      void 0 !== t
                      ? t
                      : "0",
                  ));
                return { balance: this.balance, balances: this.balances };
              }
              async createClaimTransaction(e) {
                const {
                    CONST: t,
                    OntAssetTxBuilder: a,
                    TransactionBuilder: r,
                    Crypto: o,
                  } = await h.get(),
                  n = new o.Address(this.address),
                  i = this.toMinimalUnit(e, p),
                  s = a.makeWithdrawOngTx(
                    n,
                    n,
                    i,
                    n,
                    f,
                    "" + t.DEFAULT_GAS_LIMIT,
                  ),
                  c = await this.getPrivateKeyObject();
                return (r.signTransaction(s, c), s.serialize());
              }
              async claim() {
                try {
                  if (!this.address) throw new Error("No coin address");
                  if (
                    (this.balances || (await this.getInfo(this.address)),
                    this.balances.rewards)
                  )
                    return await this.makeClaim();
                  throw new Error("No rewards");
                } catch (e) {
                  throw new n.ExplorerRequestError({
                    type: "Send",
                    error: e,
                    instance: this,
                  });
                }
              }
              setPrivateKey(e) {
                (super.setPrivateKey(e), l(t, this, e));
              }
            }
          );
        };
      t.default = v;
    },
    7104: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(67);
      const o = (e) =>
        class extends e {
          async createTransaction(e) {
            let { address: t, amount: a, asset: r = this.ticker } = e;
            const o = "NEO" === r ? "NeoToken" : "GasToken",
              n = {
                from: this.account,
                to: t,
                integerAmt: Number(a),
                contractHash: this.coreLib.CONST.NATIVE_CONTRACT_HASH[o],
              },
              i = new this.coreLib.api.TransactionBuilder();
            i.addNep17Transfer(n.from, n.to, n.contractHash, n.integerAmt);
            const s = i.build(),
              c = await this.getProvider("node").getClient(),
              d = await this.coreLib.api.NetworkFacade.fromConfig({ node: c }),
              l = await d.validate(s);
            if (!l.valid)
              throw new Error("NEO: Unable to validate transaction");
            const u = {
              signingCallback: this.coreLib.api.signWithAccount(this.account),
            };
            return d.sign(s, u);
          }
          async sendTransaction(e) {
            const t = await this.getProvider("node").sendRawTransaction(e);
            return { txid: t };
          }
          async getInfo() {
            const { balance: e, balances: t } = await this.getProvider(
              "balance",
            ).getInfo(this.address);
            var a;
            ((this.balance = this.toMinimalUnit(e || 0)),
            (this.balances = t),
            this.tokens.GAS3) &&
              (this.tokens.GAS3.balance = this.tokens.GAS3.toMinimalUnit(
                null !== (a = null === t || void 0 === t ? void 0 : t.GAS) &&
                  void 0 !== a
                  ? a
                  : "0",
              ));
            return { balance: e, balances: t };
          }
          async getFee(e) {
            let { sendAmount: t = "0" } = void 0 === e ? {} : e;
            const [{ feePerByte: a, executionFeeFactor: o }, n] =
                await Promise.all([
                  this.getProvider("node").getFeeInformation(this.coreLib.api),
                  this.createTransaction({ address: this.address, amount: t }),
                ]),
              i = this.coreLib.api.calculateNetworkFee(n, a, o);
            return (0, r.toCurrency)(i.toString(), 8);
          }
        };
      t.default = o;
    },
    7105: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(19),
        o = a(27);
      function n(e, t, a) {
        (i(e, t), t.set(e, a));
      }
      function i(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function s(e, t, a) {
        return (e.set(d(e, t), a), a);
      }
      function c(e, t) {
        return e.get(d(e, t));
      }
      function d(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const l = (e) => {
        var t;
        return (
          (t = new WeakMap()),
          class extends e {
            constructor() {
              (super(...arguments), n(this, t, void 0));
            }
            async loadWallet(e) {
              const a = await this.loadCoreLibrary();
              return new Promise(async (n, i) => {
                const s = a.HDNode.fromSeedBuffer(e, await this.getNetwork()),
                  d = s.derivePath(this.derivation);
                (d.keyPair ||
                  i(
                    new r.WalletError({
                      type: o.WALLET_ERROR,
                      error: new Error("can't get a privateKey!"),
                      instance: this,
                    }),
                  ),
                  this.setPrivateKey(d.keyPair.toWIF()),
                  (this.address = d.keyPair.getAddress()),
                  n({
                    id: this.id,
                    privateKey: c(t, this),
                    address: this.address,
                  }));
              });
            }
            async getNetwork() {
              const e = await this.loadCoreLibrary();
              return e.networks.mainnet;
            }
            async getAddress(e) {
              (void 0 === e && (e = c(t, this)),
                this.getKeyForSignFromPrivateKey(e).getAddress());
            }
            async validateAddress(e) {
              if (!e) return !1;
              try {
                const t = await this.loadCoreLibrary();
                return (
                  t.address.toOutputScript(e, await this.getNetwork()),
                  !0
                );
              } catch (t) {
                return !1;
              }
            }
            async getTransactionBuilder() {
              const e = await this.loadCoreLibrary();
              return new e.TransactionBuilder(await this.getNetwork());
            }
            addInput(e, t) {
              e.addInput(t.txId, t.outputIndex);
            }
            signInput(e, t, a, r) {
              e.sign(a, t);
            }
            async createClaimTransaction(e) {
              const t = this.getAddress(e);
              if (!t || 0 === t.length)
                throw new r.WalletError({
                  type: o.WALLET_ERROR,
                  error: new Error(
                    "can't get a address from forked privateKey!",
                  ),
                  instance: this,
                });
              const a = await this.getUnspentOutputs(t);
              let n = this.explorer.calculateBalance(a);
              const i = await this.getFee(n, !0, t);
              if (
                ((n = new this.BN(n).sub(i).toString()),
                new this.BN(n).lt(new this.BN(0)))
              )
                throw new r.InsufficientFundsError({
                  type: o.SEND_TRANSACTION_TYPE,
                  error: new Error("Not enough otherside balance for claim"),
                  instance: this,
                });
              let s = new this.BN(0);
              const c = [],
                d = new this.BN(n).add(i);
              a.forEach((e) => {
                let { txid: t, vout: a, address: r, script: o, value: n } = e;
                if (s.lt(d)) {
                  const e = new this.BN(n);
                  ((s = s.add(e)),
                    c.push({
                      txId: t,
                      outputIndex: a,
                      address: r,
                      script: o,
                      satoshis: parseInt(n, 10),
                    }));
                }
              });
              const l = s.sub(new this.BN(n)).sub(i);
              if (l.lt(new this.BN(0)))
                throw new r.InsufficientFundsError({
                  type: o.SEND_TRANSACTION_TYPE,
                  error: new Error("Insufficient funds!"),
                  instance: this,
                });
              const u = await this.buildTx(c, this.address, n, l, e, t);
              return u;
            }
            async createTransaction(e) {
              let { address: t, amount: a } = e;
              const n = await this.getUnspentOutputs(
                  this.address,
                  await this.getScriptPubKey(),
                ),
                i = await this.getFee({ amount: a });
              let s = new this.BN(0);
              const c = [],
                d = new this.BN(a).add(i);
              n.forEach((e) => {
                if (s.lt(d)) {
                  const t = new this.BN(e.value);
                  ((s = s.add(t)),
                    c.push({
                      txId: e.txid,
                      outputIndex: e.vout,
                      address: e.address,
                      script: e.script,
                      satoshis: parseInt(e.value, 10),
                    }));
                }
              });
              const l = s.sub(new this.BN(a)).sub(i);
              if (l.lt(new this.BN(0)))
                throw new r.InsufficientFundsError({
                  type: o.SEND_TRANSACTION_TYPE,
                  error: new Error("Insufficient funds!"),
                  instance: this,
                });
              const u = await this.buildTx(c, t, a, l);
              return u;
            }
            async buildTx(e, t, a, r, o, n) {
              void 0 === n && (n = void 0);
              const i = await this.getTransactionBuilder();
              return new Promise(async (s, c) => {
                try {
                  (e.forEach((e) => {
                    this.addInput(i, e);
                  }),
                    i.addOutput(t, parseInt(a.toString(), 10)),
                    r.gt(new this.BN(0)) &&
                      i.addOutput(
                        n || this.address,
                        parseInt(r.toString(), 10),
                      ));
                  const c = await this.getKeyForSignFromPrivateKey(o);
                  await Promise.all(
                    e.map((e, t) => this.signInput(i, c, t, e)),
                  );
                  const d = i.build().toHex();
                  s(d);
                } catch (d) {
                  c(d);
                }
              });
            }
            async getKeyForSignFromPrivateKey(e) {
              void 0 === e && (e = c(t, this));
              const a = await this.loadCoreLibrary();
              return a.ECPair.fromWIF(e, await this.getNetwork());
            }
            async getScriptPubKey() {
              const e = await this.loadCoreLibrary();
              return e.address
                .toOutputScript(this.address, await this.getNetwork())
                .toString("hex");
            }
            setPrivateKey(e) {
              s(t, this, e);
            }
          }
        );
      };
      t.default = l;
    },
    7106: function (e, t, a) {
      "use strict";
      (function (e) {
        var r = a(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = a(19),
          n = a(27),
          i = a(4912),
          s = r(a(73)),
          c = r(a(794)),
          d = a(2806);
        function l(e, t, a) {
          (u(e, t), t.set(e, a));
        }
        function u(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function h(e, t) {
          return e.get(g(e, t));
        }
        function m(e, t, a) {
          return (e.set(g(e, t), a), a);
        }
        function g(e, t, a) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : a;
          throw new TypeError("Private element is not present on this object");
        }
        const f = "0.025",
          p = 2,
          b = {
            STAKE: "Stake",
            UNSTAKE: "Unstake",
            REDELEGATE: "Redelegate",
            CLAIM: "Claim",
          },
          w = (e) => {
            var t;
            let {
              sendType: a,
              fromAddress: r,
              address: o,
              delegatorAddress: n,
              validator: i,
              fromValidator: s = null,
              validatorsList: c = [],
              amount: d,
              denom: l,
            } = e;
            const u = {
                [b.STAKE]: [
                  {
                    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
                    value: {
                      delegatorAddress: n,
                      validatorAddress: i,
                      amount: { denom: l, amount: d },
                    },
                  },
                ],
                [b.UNSTAKE]: [
                  {
                    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
                    value: {
                      delegatorAddress: n,
                      validatorAddress: i,
                      amount: { denom: l, amount: d },
                    },
                  },
                ],
                [b.REDELEGATE]: [
                  {
                    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
                    value: {
                      delegatorAddress: n,
                      validatorSrcAddress: s,
                      validatorDstAddress: i,
                      amount: { denom: l, amount: d },
                    },
                  },
                ],
                [b.CLAIM]: c.map((e) => ({
                  typeUrl:
                    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                  value: { delegatorAddress: n, validatorAddress: e },
                })),
              },
              h = [
                {
                  typeUrl: "/cosmos.bank.v1beta1.MsgSend",
                  value: {
                    fromAddress: r,
                    toAddress: o,
                    amount: [{ denom: l, amount: d }],
                  },
                },
              ];
            return null !== (t = u[a]) && void 0 !== t ? t : h;
          },
          v = (t) => {
            var r;
            return (
              (r = new WeakMap()),
              class extends (0, d.StakingMixin)(t) {
                constructor(e) {
                  ((e.dependencies = {
                    bech32: new c.default(() =>
                      Promise.resolve().then(a.t.bind(null, 803, 7)),
                    ),
                    proto: new c.default(() =>
                      Promise.all([a.e(31), a.e(50), a.e(49), a.e(181)]).then(
                        a.t.bind(null, 2968, 7),
                      ),
                    ),
                    stargate: new c.default(() =>
                      Promise.all([
                        a.e(31),
                        a.e(50),
                        a.e(49),
                        a.e(274),
                        a.e(214),
                        a.e(162),
                        a.e(242),
                        a.e(318),
                        a.e(361),
                        a.e(319),
                        a.e(332),
                      ]).then(a.t.bind(null, 3914, 7)),
                    ),
                    tx: new c.default(() =>
                      a.e(253).then(a.t.bind(null, 3915, 7)),
                    ),
                    crypto: new c.default(() =>
                      Promise.all([a.e(31), a.e(263), a.e(262)]).then(
                        a.t.bind(null, 2800, 7),
                      ),
                    ),
                    bitcoinjsLib: new c.default(() =>
                      a.e(19).then(a.t.bind(null, 3218, 7)),
                    ),
                    ...(e.dependencies || {}),
                  }),
                    super(e),
                    l(this, r, void 0),
                    (this.gasPrice = e.feeData.gasPrice || f),
                    (this.useGasEstimate = e.feeData.useGasEstimate || !1),
                    (this.estimatedGasCoefficient =
                      e.feeData.estimatedGasCoefficient || p));
                }
                async loadWallet(t, a) {
                  const i = await this.loadLib("bitcoinjsLib"),
                    s = i.bip32.fromSeed(t),
                    c = await this.loadLib("bech32"),
                    d = s.derivePath(this.derivation);
                  if (!d)
                    throw new o.WalletError({
                      type: n.WALLET_ERROR,
                      error: new Error("can't get a privateKey!"),
                      instance: this,
                    });
                  const l = i.crypto.hash160(d.publicKey),
                    u = "0x" + e.from(d.privateKey).toString("hex");
                  return (
                    m(r, this, u),
                    (this.address = c.encode(this.prefix, c.toWords(l))),
                    this.setPrivateKey(u, a),
                    {
                      id: this.id,
                      privateKey: h(r, this),
                      address: this.address,
                    }
                  );
                }
                async validateAddress(e) {
                  const t = await this.loadLib("bech32");
                  try {
                    const { prefix: a } = t.decode(e);
                    return a === this.prefix;
                  } catch (a) {
                    return !1;
                  }
                }
                async getTransaction(e) {
                  return this.getProvider("history2").getTransaction(
                    this.address,
                    e,
                  );
                }
                async getTransactions(e) {
                  let {
                    address: t = this.address,
                    offset: a = 0,
                    limit: r = this.explorer.defaultTxLimit,
                    pageNum: i = 0,
                  } = e;
                  return (
                    (this.transactions = await this.getProvider("history2")
                      .getTransactions({
                        address: t,
                        offset: a,
                        limit: r,
                        pageNum: i,
                        denom: this.denom,
                      })
                      .catch((e) => {
                        throw new o.ExplorerRequestError({
                          type: n.GET_TRANSACTIONS_TYPE,
                          error: e,
                          instance: this,
                        });
                      })),
                    this.transactions
                  );
                }
                async getTransactionBlueprint(e) {
                  let { type: t, ...a } = e;
                  if (i.CosmosTxTypes[t]) return i.CosmosTxTypes[t](a);
                  if (t === n.ATOM_MSG_TYPES.Withdraw)
                    return this.getProvider(
                      "send2",
                    ).getTransactionRewardsBlueprint({
                      from: this.address,
                      ...a,
                    });
                  throw new Error(
                    `[${this.ticker}] no ${t} tx blueprint found`,
                  );
                }
                async sign(e, t, a) {
                  void 0 === a && (a = "");
                  const { SigningStargateClient: r } =
                    await this.loadLib("stargate");
                  this.signer = this.signer || (await r.offline(this.wallet));
                  const o = await this.getProvider("send2").getSignerData(
                    this.address,
                  );
                  return this.signer.signDirect(this.address, e, t, a, o);
                }
                async createTransaction(e) {
                  let { address: t, amount: a, memo: r = "" } = e;
                  const { feeObj: o, messages: n } =
                    await this.getFeeObjectWithMessages({
                      address: t,
                      amount: a,
                      memo: r,
                    });
                  return this.sign(n, o, r);
                }
                async sendTransaction(e) {
                  const { TxRaw: t } = await this.loadLib("tx"),
                    a = t.encode(e).finish();
                  return this.getProvider("send2").sendTransaction(a);
                }
                async createDelegationTransaction(e, t, a) {
                  void 0 === a && (a = "");
                  const { feeObj: r, messages: o } =
                    await this.getFeeObjectWithMessages({
                      sendType: b.STAKE,
                      validator: e,
                      amount: t,
                      memo: a,
                    });
                  return this.sign(o, r, a);
                }
                async createRedelegationTransaction(e, t, a, r) {
                  void 0 === r && (r = "");
                  const { feeObj: o, messages: n } =
                    await this.getFeeObjectWithMessages({
                      sendType: b.REDELEGATE,
                      fromValidator: e,
                      validator: t,
                      amount: a,
                      memo: r,
                    });
                  return this.sign(n, o);
                }
                async createUnbondingDelegationTransaction(e, t) {
                  const { feeObj: a, messages: r } =
                    await this.getFeeObjectWithMessages({
                      sendType: b.UNSTAKE,
                      validator: e,
                      amount: t,
                    });
                  return this.sign(r, a);
                }
                async createWithdrawDelegationTransaction(e) {
                  const t = await this.getProvider("balance2").getValidators(
                      this.address,
                    ),
                    { feeObj: a, messages: r } =
                      await this.getFeeObjectWithMessages({
                        sendType: b.CLAIM,
                        validatorsList: t,
                      });
                  return this.sign(r, a);
                }
                async getInfo() {
                  return (
                    (this.balance = this.calculateAvailableBalance(
                      await this.getProvider("balance2").getTotalBalance(
                        this.address,
                      ),
                    ).toBN()),
                    await this.getStakingInfo(),
                    { balance: this.balance, balances: this.balances }
                  );
                }
                async fetchStakingInfo() {
                  const e = this.getProvider("balance2");
                  await e.getLatestBlock();
                  const t = {},
                    a = this.calculateStakedBalance(
                      await e.getStakedDelegations(this.address),
                      t,
                    );
                  return {
                    rewards: this.calculateRewards(
                      await e.getRewardsBalance(this.address),
                    ),
                    staked: a,
                    unstaking: this.calculateUnstakingBalance(
                      await e.getUnbondingDelegations(this.address),
                    ),
                    validators: t,
                  };
                }
                async calculateAvailableForStake(e) {
                  let { balance: t } = e;
                  const a = await this.getFee({ sendType: b.STAKE }),
                    r = t
                      .toBN()
                      .sub(new this.BN(a))
                      .sub(new this.BN(this.reserveForStake));
                  return new s.default(r.isNeg() ? "0" : r, this);
                }
                calculateTotal(e) {
                  let { balance: t, staked: a, unstaking: r, rewards: o } = e;
                  return new s.default(
                    t
                      .toBN()
                      .add(a.toBN())
                      .add(r.toBN())
                      .add(o.toBN())
                      .toString(),
                    this,
                  );
                }
                calculateAvailableBalance(e) {
                  var t, a;
                  return new s.default(
                    null !==
                      (t =
                        null === (a = e.find((e) => e.denom === this.denom)) ||
                        void 0 === a
                          ? void 0
                          : a.amount) && void 0 !== t
                      ? t
                      : "0",
                    this,
                  );
                }
                calculateRewards(e) {
                  var t, a, r;
                  return new s.default(
                    null !==
                      (t =
                        null === e ||
                        void 0 === e ||
                        null === (a = e.find((e) => e.denom === this.denom)) ||
                        void 0 === a ||
                        null === (r = a.amount) ||
                        void 0 === r
                          ? void 0
                          : r.split(".")[0]) && void 0 !== t
                      ? t
                      : "0",
                    this,
                  );
                }
                calculateStakedBalance(e, t) {
                  return new s.default(
                    (null === e || void 0 === e ? void 0 : e.length) > 0
                      ? this.getTotalDelegations(e, t).toString()
                      : "0",
                    this,
                  );
                }
                calculateUnstakingBalance(e) {
                  const t = { validators: {} };
                  if ((null === e || void 0 === e ? void 0 : e.length) > 0) {
                    const a = e.reduce((e, a) => {
                      let { entries: r, validator_address: o } = a;
                      const n = o;
                      return (
                        (t.validators[n] = r
                          .map((e) => new this.BN(e.balance.split(".")[0]))
                          .reduce(
                            (e, t) => e.add(new this.BN(t)),
                            new this.BN("0"),
                          )),
                        e.add(t.validators[n])
                      );
                    }, new this.BN("0"));
                    t.total = a.toString().split(".")[0];
                  }
                  return new s.default(t.total || "0", this);
                }
                getTotalDelegations(e, t) {
                  return e.reduce((e, a) => {
                    let { delegation: r, balance: o } = a;
                    return (
                      (t[r.validator_address] = {
                        address: r.validator_address,
                        staked: new s.default(new this.BN(o.amount), this),
                      }),
                      e.add(new this.BN(o.amount))
                    );
                  }, new this.BN("0"));
                }
                async setPrivateKey(e, t) {
                  const { stringToPath: a } = await this.loadLib("crypto"),
                    { DirectSecp256k1HdWallet: o } =
                      await this.loadLib("proto");
                  m(r, this, e);
                  const n = a(this.derivation);
                  o.fromMnemonic(t, { hdPaths: [n], prefix: this.prefix }).then(
                    (e) => {
                      this.wallet = e;
                    },
                  );
                }
                isRedelegationSupported() {
                  return !0;
                }
                async getGasEstimation(e, t) {
                  const a = {
                      amount: [{ denom: this.denom, amount: "0" }],
                      gas: "0",
                    },
                    [r, { TxRaw: o }] = await Promise.all([
                      this.sign(e, a, t),
                      this.loadLib("tx"),
                    ]),
                    n = o.encode(r).finish(),
                    i = Number(
                      await this.getProvider("send2").getGasEstimation(n),
                    );
                  return String(Math.round(i * this.estimatedGasCoefficient));
                }
                getGasFromConfig(e) {
                  switch (e) {
                    case b.STAKE:
                      return this.stakingFeeGas;
                    case b.UNSTAKE:
                      return this.stakingFeeGas;
                    case b.REDELEGATE:
                      return this.reStakingFeeGas;
                    case b.CLAIM:
                      return this.claimFeeGas;
                    default:
                      return this.stakingFeeGas;
                  }
                }
                async getFeeObjectWithMessages(e) {
                  let {
                    sendType: t,
                    address: a,
                    validator: r,
                    fromValidator: o = null,
                    validatorsList: n = [],
                    amount: i,
                    memo: s = "",
                  } = e;
                  const c = w({
                    sendType: t,
                    fromAddress: this.address,
                    address: a,
                    delegatorAddress: this.address,
                    validator: r,
                    fromValidator: o,
                    validatorsList: n,
                    amount: i,
                    denom: this.denom,
                  });
                  if (!this.useGasEstimate) {
                    const e = this.getGasFromConfig(t);
                    return {
                      feeObj: {
                        amount: [{ denom: this.denom, amount: this.fee }],
                        gas: e,
                      },
                      messages: c,
                    };
                  }
                  const [{ calculateFee: d, GasPrice: l }, u] =
                      await Promise.all([
                        this.loadLib("stargate"),
                        this.getGasEstimation(c, s).catch(
                          (e) => (console.warn(e), this.getGasFromConfig(t)),
                        ),
                      ]),
                    h = l.fromString(`${this.gasPrice}${this.denom}`),
                    m = d(Number(u), h);
                  return { feeObj: m, messages: c };
                }
                async getDifferentFromSpecifiedValidator(e) {
                  const t = await this.getPredefinedValidators(),
                    a = t.find((t) => t.address !== e);
                  if (a) return a.address;
                  throw new Error("Different validator Not Found");
                }
                async getFee(e) {
                  var t;
                  let {
                    sendType: a,
                    address: r,
                    validator: o,
                    fromValidator: n,
                    amount: i = "1",
                    memo: s = "",
                  } = void 0 === e ? {} : e;
                  if (!this.useGasEstimate) return this.fee;
                  const c = await this.getProvider("balance2").getValidators(
                    this.address,
                  );
                  let d, l;
                  var u, h;
                  a === b.REDELEGATE
                    ? ((l =
                        null !== (u = null !== n && void 0 !== n ? n : o) &&
                        void 0 !== u
                          ? u
                          : c[0]),
                      (d =
                        null !== (h = c[1]) && void 0 !== h
                          ? h
                          : await this.getDifferentFromSpecifiedValidator(l)))
                    : (d = o || c[0]);
                  const { feeObj: m } = await this.getFeeObjectWithMessages({
                    sendType: a,
                    address: r || this.address,
                    validator: d,
                    fromValidator: l,
                    validatorsList: c,
                    amount: i,
                  });
                  return null === m ||
                    void 0 === m ||
                    null === (t = m.amount[0]) ||
                    void 0 === t
                    ? void 0
                    : t.amount;
                }
              }
            );
          };
        t.default = v;
      }).call(this, a(2).Buffer);
    },
    7112: function (e) {
      e.exports = JSON.parse(
        '["あいこくしん","あいさつ","あいだ","あおぞら","あかちゃん","あきる","あけがた","あける","あこがれる","あさい","あさひ","あしあと","あじわう","あずかる","あずき","あそぶ","あたえる","あたためる","あたりまえ","あたる","あつい","あつかう","あっしゅく","あつまり","あつめる","あてな","あてはまる","あひる","あぶら","あぶる","あふれる","あまい","あまど","あまやかす","あまり","あみもの","あめりか","あやまる","あゆむ","あらいぐま","あらし","あらすじ","あらためる","あらゆる","あらわす","ありがとう","あわせる","あわてる","あんい","あんがい","あんこ","あんぜん","あんてい","あんない","あんまり","いいだす","いおん","いがい","いがく","いきおい","いきなり","いきもの","いきる","いくじ","いくぶん","いけばな","いけん","いこう","いこく","いこつ","いさましい","いさん","いしき","いじゅう","いじょう","いじわる","いずみ","いずれ","いせい","いせえび","いせかい","いせき","いぜん","いそうろう","いそがしい","いだい","いだく","いたずら","いたみ","いたりあ","いちおう","いちじ","いちど","いちば","いちぶ","いちりゅう","いつか","いっしゅん","いっせい","いっそう","いったん","いっち","いってい","いっぽう","いてざ","いてん","いどう","いとこ","いない","いなか","いねむり","いのち","いのる","いはつ","いばる","いはん","いびき","いひん","いふく","いへん","いほう","いみん","いもうと","いもたれ","いもり","いやがる","いやす","いよかん","いよく","いらい","いらすと","いりぐち","いりょう","いれい","いれもの","いれる","いろえんぴつ","いわい","いわう","いわかん","いわば","いわゆる","いんげんまめ","いんさつ","いんしょう","いんよう","うえき","うえる","うおざ","うがい","うかぶ","うかべる","うきわ","うくらいな","うくれれ","うけたまわる","うけつけ","うけとる","うけもつ","うける","うごかす","うごく","うこん","うさぎ","うしなう","うしろがみ","うすい","うすぎ","うすぐらい","うすめる","うせつ","うちあわせ","うちがわ","うちき","うちゅう","うっかり","うつくしい","うったえる","うつる","うどん","うなぎ","うなじ","うなずく","うなる","うねる","うのう","うぶげ","うぶごえ","うまれる","うめる","うもう","うやまう","うよく","うらがえす","うらぐち","うらない","うりあげ","うりきれ","うるさい","うれしい","うれゆき","うれる","うろこ","うわき","うわさ","うんこう","うんちん","うんてん","うんどう","えいえん","えいが","えいきょう","えいご","えいせい","えいぶん","えいよう","えいわ","えおり","えがお","えがく","えきたい","えくせる","えしゃく","えすて","えつらん","えのぐ","えほうまき","えほん","えまき","えもじ","えもの","えらい","えらぶ","えりあ","えんえん","えんかい","えんぎ","えんげき","えんしゅう","えんぜつ","えんそく","えんちょう","えんとつ","おいかける","おいこす","おいしい","おいつく","おうえん","おうさま","おうじ","おうせつ","おうたい","おうふく","おうべい","おうよう","おえる","おおい","おおう","おおどおり","おおや","おおよそ","おかえり","おかず","おがむ","おかわり","おぎなう","おきる","おくさま","おくじょう","おくりがな","おくる","おくれる","おこす","おこなう","おこる","おさえる","おさない","おさめる","おしいれ","おしえる","おじぎ","おじさん","おしゃれ","おそらく","おそわる","おたがい","おたく","おだやか","おちつく","おっと","おつり","おでかけ","おとしもの","おとなしい","おどり","おどろかす","おばさん","おまいり","おめでとう","おもいで","おもう","おもたい","おもちゃ","おやつ","おやゆび","およぼす","おらんだ","おろす","おんがく","おんけい","おんしゃ","おんせん","おんだん","おんちゅう","おんどけい","かあつ","かいが","がいき","がいけん","がいこう","かいさつ","かいしゃ","かいすいよく","かいぜん","かいぞうど","かいつう","かいてん","かいとう","かいふく","がいへき","かいほう","かいよう","がいらい","かいわ","かえる","かおり","かかえる","かがく","かがし","かがみ","かくご","かくとく","かざる","がぞう","かたい","かたち","がちょう","がっきゅう","がっこう","がっさん","がっしょう","かなざわし","かのう","がはく","かぶか","かほう","かほご","かまう","かまぼこ","かめれおん","かゆい","かようび","からい","かるい","かろう","かわく","かわら","がんか","かんけい","かんこう","かんしゃ","かんそう","かんたん","かんち","がんばる","きあい","きあつ","きいろ","ぎいん","きうい","きうん","きえる","きおう","きおく","きおち","きおん","きかい","きかく","きかんしゃ","ききて","きくばり","きくらげ","きけんせい","きこう","きこえる","きこく","きさい","きさく","きさま","きさらぎ","ぎじかがく","ぎしき","ぎじたいけん","ぎじにってい","ぎじゅつしゃ","きすう","きせい","きせき","きせつ","きそう","きぞく","きぞん","きたえる","きちょう","きつえん","ぎっちり","きつつき","きつね","きてい","きどう","きどく","きない","きなが","きなこ","きぬごし","きねん","きのう","きのした","きはく","きびしい","きひん","きふく","きぶん","きぼう","きほん","きまる","きみつ","きむずかしい","きめる","きもだめし","きもち","きもの","きゃく","きやく","ぎゅうにく","きよう","きょうりゅう","きらい","きらく","きりん","きれい","きれつ","きろく","ぎろん","きわめる","ぎんいろ","きんかくじ","きんじょ","きんようび","ぐあい","くいず","くうかん","くうき","くうぐん","くうこう","ぐうせい","くうそう","ぐうたら","くうふく","くうぼ","くかん","くきょう","くげん","ぐこう","くさい","くさき","くさばな","くさる","くしゃみ","くしょう","くすのき","くすりゆび","くせげ","くせん","ぐたいてき","くださる","くたびれる","くちこみ","くちさき","くつした","ぐっすり","くつろぐ","くとうてん","くどく","くなん","くねくね","くのう","くふう","くみあわせ","くみたてる","くめる","くやくしょ","くらす","くらべる","くるま","くれる","くろう","くわしい","ぐんかん","ぐんしょく","ぐんたい","ぐんて","けあな","けいかく","けいけん","けいこ","けいさつ","げいじゅつ","けいたい","げいのうじん","けいれき","けいろ","けおとす","けおりもの","げきか","げきげん","げきだん","げきちん","げきとつ","げきは","げきやく","げこう","げこくじょう","げざい","けさき","げざん","けしき","けしごむ","けしょう","げすと","けたば","けちゃっぷ","けちらす","けつあつ","けつい","けつえき","けっこん","けつじょ","けっせき","けってい","けつまつ","げつようび","げつれい","けつろん","げどく","けとばす","けとる","けなげ","けなす","けなみ","けぬき","げねつ","けねん","けはい","げひん","けぶかい","げぼく","けまり","けみかる","けむし","けむり","けもの","けらい","けろけろ","けわしい","けんい","けんえつ","けんお","けんか","げんき","けんげん","けんこう","けんさく","けんしゅう","けんすう","げんそう","けんちく","けんてい","けんとう","けんない","けんにん","げんぶつ","けんま","けんみん","けんめい","けんらん","けんり","こあくま","こいぬ","こいびと","ごうい","こうえん","こうおん","こうかん","ごうきゅう","ごうけい","こうこう","こうさい","こうじ","こうすい","ごうせい","こうそく","こうたい","こうちゃ","こうつう","こうてい","こうどう","こうない","こうはい","ごうほう","ごうまん","こうもく","こうりつ","こえる","こおり","ごかい","ごがつ","ごかん","こくご","こくさい","こくとう","こくない","こくはく","こぐま","こけい","こける","ここのか","こころ","こさめ","こしつ","こすう","こせい","こせき","こぜん","こそだて","こたい","こたえる","こたつ","こちょう","こっか","こつこつ","こつばん","こつぶ","こてい","こてん","ことがら","ことし","ことば","ことり","こなごな","こねこね","このまま","このみ","このよ","ごはん","こひつじ","こふう","こふん","こぼれる","ごまあぶら","こまかい","ごますり","こまつな","こまる","こむぎこ","こもじ","こもち","こもの","こもん","こやく","こやま","こゆう","こゆび","こよい","こよう","こりる","これくしょん","ころっけ","こわもて","こわれる","こんいん","こんかい","こんき","こんしゅう","こんすい","こんだて","こんとん","こんなん","こんびに","こんぽん","こんまけ","こんや","こんれい","こんわく","ざいえき","さいかい","さいきん","ざいげん","ざいこ","さいしょ","さいせい","ざいたく","ざいちゅう","さいてき","ざいりょう","さうな","さかいし","さがす","さかな","さかみち","さがる","さぎょう","さくし","さくひん","さくら","さこく","さこつ","さずかる","ざせき","さたん","さつえい","ざつおん","ざっか","ざつがく","さっきょく","ざっし","さつじん","ざっそう","さつたば","さつまいも","さてい","さといも","さとう","さとおや","さとし","さとる","さのう","さばく","さびしい","さべつ","さほう","さほど","さます","さみしい","さみだれ","さむけ","さめる","さやえんどう","さゆう","さよう","さよく","さらだ","ざるそば","さわやか","さわる","さんいん","さんか","さんきゃく","さんこう","さんさい","ざんしょ","さんすう","さんせい","さんそ","さんち","さんま","さんみ","さんらん","しあい","しあげ","しあさって","しあわせ","しいく","しいん","しうち","しえい","しおけ","しかい","しかく","じかん","しごと","しすう","じだい","したうけ","したぎ","したて","したみ","しちょう","しちりん","しっかり","しつじ","しつもん","してい","してき","してつ","じてん","じどう","しなぎれ","しなもの","しなん","しねま","しねん","しのぐ","しのぶ","しはい","しばかり","しはつ","しはらい","しはん","しひょう","しふく","じぶん","しへい","しほう","しほん","しまう","しまる","しみん","しむける","じむしょ","しめい","しめる","しもん","しゃいん","しゃうん","しゃおん","じゃがいも","しやくしょ","しゃくほう","しゃけん","しゃこ","しゃざい","しゃしん","しゃせん","しゃそう","しゃたい","しゃちょう","しゃっきん","じゃま","しゃりん","しゃれい","じゆう","じゅうしょ","しゅくはく","じゅしん","しゅっせき","しゅみ","しゅらば","じゅんばん","しょうかい","しょくたく","しょっけん","しょどう","しょもつ","しらせる","しらべる","しんか","しんこう","じんじゃ","しんせいじ","しんちく","しんりん","すあげ","すあし","すあな","ずあん","すいえい","すいか","すいとう","ずいぶん","すいようび","すうがく","すうじつ","すうせん","すおどり","すきま","すくう","すくない","すける","すごい","すこし","ずさん","すずしい","すすむ","すすめる","すっかり","ずっしり","ずっと","すてき","すてる","すねる","すのこ","すはだ","すばらしい","ずひょう","ずぶぬれ","すぶり","すふれ","すべて","すべる","ずほう","すぼん","すまい","すめし","すもう","すやき","すらすら","するめ","すれちがう","すろっと","すわる","すんぜん","すんぽう","せあぶら","せいかつ","せいげん","せいじ","せいよう","せおう","せかいかん","せきにん","せきむ","せきゆ","せきらんうん","せけん","せこう","せすじ","せたい","せたけ","せっかく","せっきゃく","ぜっく","せっけん","せっこつ","せっさたくま","せつぞく","せつだん","せつでん","せっぱん","せつび","せつぶん","せつめい","せつりつ","せなか","せのび","せはば","せびろ","せぼね","せまい","せまる","せめる","せもたれ","せりふ","ぜんあく","せんい","せんえい","せんか","せんきょ","せんく","せんげん","ぜんご","せんさい","せんしゅ","せんすい","せんせい","せんぞ","せんたく","せんちょう","せんてい","せんとう","せんぬき","せんねん","せんぱい","ぜんぶ","ぜんぽう","せんむ","せんめんじょ","せんもん","せんやく","せんゆう","せんよう","ぜんら","ぜんりゃく","せんれい","せんろ","そあく","そいとげる","そいね","そうがんきょう","そうき","そうご","そうしん","そうだん","そうなん","そうび","そうめん","そうり","そえもの","そえん","そがい","そげき","そこう","そこそこ","そざい","そしな","そせい","そせん","そそぐ","そだてる","そつう","そつえん","そっかん","そつぎょう","そっけつ","そっこう","そっせん","そっと","そとがわ","そとづら","そなえる","そなた","そふぼ","そぼく","そぼろ","そまつ","そまる","そむく","そむりえ","そめる","そもそも","そよかぜ","そらまめ","そろう","そんかい","そんけい","そんざい","そんしつ","そんぞく","そんちょう","ぞんび","ぞんぶん","そんみん","たあい","たいいん","たいうん","たいえき","たいおう","だいがく","たいき","たいぐう","たいけん","たいこ","たいざい","だいじょうぶ","だいすき","たいせつ","たいそう","だいたい","たいちょう","たいてい","だいどころ","たいない","たいねつ","たいのう","たいはん","だいひょう","たいふう","たいへん","たいほ","たいまつばな","たいみんぐ","たいむ","たいめん","たいやき","たいよう","たいら","たいりょく","たいる","たいわん","たうえ","たえる","たおす","たおる","たおれる","たかい","たかね","たきび","たくさん","たこく","たこやき","たさい","たしざん","だじゃれ","たすける","たずさわる","たそがれ","たたかう","たたく","ただしい","たたみ","たちばな","だっかい","だっきゃく","だっこ","だっしゅつ","だったい","たてる","たとえる","たなばた","たにん","たぬき","たのしみ","たはつ","たぶん","たべる","たぼう","たまご","たまる","だむる","ためいき","ためす","ためる","たもつ","たやすい","たよる","たらす","たりきほんがん","たりょう","たりる","たると","たれる","たれんと","たろっと","たわむれる","だんあつ","たんい","たんおん","たんか","たんき","たんけん","たんご","たんさん","たんじょうび","だんせい","たんそく","たんたい","だんち","たんてい","たんとう","だんな","たんにん","だんねつ","たんのう","たんぴん","だんぼう","たんまつ","たんめい","だんれつ","だんろ","だんわ","ちあい","ちあん","ちいき","ちいさい","ちえん","ちかい","ちから","ちきゅう","ちきん","ちけいず","ちけん","ちこく","ちさい","ちしき","ちしりょう","ちせい","ちそう","ちたい","ちたん","ちちおや","ちつじょ","ちてき","ちてん","ちぬき","ちぬり","ちのう","ちひょう","ちへいせん","ちほう","ちまた","ちみつ","ちみどろ","ちめいど","ちゃんこなべ","ちゅうい","ちゆりょく","ちょうし","ちょさくけん","ちらし","ちらみ","ちりがみ","ちりょう","ちるど","ちわわ","ちんたい","ちんもく","ついか","ついたち","つうか","つうじょう","つうはん","つうわ","つかう","つかれる","つくね","つくる","つけね","つける","つごう","つたえる","つづく","つつじ","つつむ","つとめる","つながる","つなみ","つねづね","つのる","つぶす","つまらない","つまる","つみき","つめたい","つもり","つもる","つよい","つるぼ","つるみく","つわもの","つわり","てあし","てあて","てあみ","ていおん","ていか","ていき","ていけい","ていこく","ていさつ","ていし","ていせい","ていたい","ていど","ていねい","ていひょう","ていへん","ていぼう","てうち","ておくれ","てきとう","てくび","でこぼこ","てさぎょう","てさげ","てすり","てそう","てちがい","てちょう","てつがく","てつづき","でっぱ","てつぼう","てつや","でぬかえ","てぬき","てぬぐい","てのひら","てはい","てぶくろ","てふだ","てほどき","てほん","てまえ","てまきずし","てみじか","てみやげ","てらす","てれび","てわけ","てわたし","でんあつ","てんいん","てんかい","てんき","てんぐ","てんけん","てんごく","てんさい","てんし","てんすう","でんち","てんてき","てんとう","てんない","てんぷら","てんぼうだい","てんめつ","てんらんかい","でんりょく","でんわ","どあい","といれ","どうかん","とうきゅう","どうぐ","とうし","とうむぎ","とおい","とおか","とおく","とおす","とおる","とかい","とかす","ときおり","ときどき","とくい","とくしゅう","とくてん","とくに","とくべつ","とけい","とける","とこや","とさか","としょかん","とそう","とたん","とちゅう","とっきゅう","とっくん","とつぜん","とつにゅう","とどける","ととのえる","とない","となえる","となり","とのさま","とばす","どぶがわ","とほう","とまる","とめる","ともだち","ともる","どようび","とらえる","とんかつ","どんぶり","ないかく","ないこう","ないしょ","ないす","ないせん","ないそう","なおす","ながい","なくす","なげる","なこうど","なさけ","なたでここ","なっとう","なつやすみ","ななおし","なにごと","なにもの","なにわ","なのか","なふだ","なまいき","なまえ","なまみ","なみだ","なめらか","なめる","なやむ","ならう","ならび","ならぶ","なれる","なわとび","なわばり","にあう","にいがた","にうけ","におい","にかい","にがて","にきび","にくしみ","にくまん","にげる","にさんかたんそ","にしき","にせもの","にちじょう","にちようび","にっか","にっき","にっけい","にっこう","にっさん","にっしょく","にっすう","にっせき","にってい","になう","にほん","にまめ","にもつ","にやり","にゅういん","にりんしゃ","にわとり","にんい","にんか","にんき","にんげん","にんしき","にんずう","にんそう","にんたい","にんち","にんてい","にんにく","にんぷ","にんまり","にんむ","にんめい","にんよう","ぬいくぎ","ぬかす","ぬぐいとる","ぬぐう","ぬくもり","ぬすむ","ぬまえび","ぬめり","ぬらす","ぬんちゃく","ねあげ","ねいき","ねいる","ねいろ","ねぐせ","ねくたい","ねくら","ねこぜ","ねこむ","ねさげ","ねすごす","ねそべる","ねだん","ねつい","ねっしん","ねつぞう","ねったいぎょ","ねぶそく","ねふだ","ねぼう","ねほりはほり","ねまき","ねまわし","ねみみ","ねむい","ねむたい","ねもと","ねらう","ねわざ","ねんいり","ねんおし","ねんかん","ねんきん","ねんぐ","ねんざ","ねんし","ねんちゃく","ねんど","ねんぴ","ねんぶつ","ねんまつ","ねんりょう","ねんれい","のいず","のおづま","のがす","のきなみ","のこぎり","のこす","のこる","のせる","のぞく","のぞむ","のたまう","のちほど","のっく","のばす","のはら","のべる","のぼる","のみもの","のやま","のらいぬ","のらねこ","のりもの","のりゆき","のれん","のんき","ばあい","はあく","ばあさん","ばいか","ばいく","はいけん","はいご","はいしん","はいすい","はいせん","はいそう","はいち","ばいばい","はいれつ","はえる","はおる","はかい","ばかり","はかる","はくしゅ","はけん","はこぶ","はさみ","はさん","はしご","ばしょ","はしる","はせる","ぱそこん","はそん","はたん","はちみつ","はつおん","はっかく","はづき","はっきり","はっくつ","はっけん","はっこう","はっさん","はっしん","はったつ","はっちゅう","はってん","はっぴょう","はっぽう","はなす","はなび","はにかむ","はぶらし","はみがき","はむかう","はめつ","はやい","はやし","はらう","はろうぃん","はわい","はんい","はんえい","はんおん","はんかく","はんきょう","ばんぐみ","はんこ","はんしゃ","はんすう","はんだん","ぱんち","ぱんつ","はんてい","はんとし","はんのう","はんぱ","はんぶん","はんぺん","はんぼうき","はんめい","はんらん","はんろん","ひいき","ひうん","ひえる","ひかく","ひかり","ひかる","ひかん","ひくい","ひけつ","ひこうき","ひこく","ひさい","ひさしぶり","ひさん","びじゅつかん","ひしょ","ひそか","ひそむ","ひたむき","ひだり","ひたる","ひつぎ","ひっこし","ひっし","ひつじゅひん","ひっす","ひつぜん","ぴったり","ぴっちり","ひつよう","ひてい","ひとごみ","ひなまつり","ひなん","ひねる","ひはん","ひびく","ひひょう","ひほう","ひまわり","ひまん","ひみつ","ひめい","ひめじし","ひやけ","ひやす","ひよう","びょうき","ひらがな","ひらく","ひりつ","ひりょう","ひるま","ひるやすみ","ひれい","ひろい","ひろう","ひろき","ひろゆき","ひんかく","ひんけつ","ひんこん","ひんしゅ","ひんそう","ぴんち","ひんぱん","びんぼう","ふあん","ふいうち","ふうけい","ふうせん","ぷうたろう","ふうとう","ふうふ","ふえる","ふおん","ふかい","ふきん","ふくざつ","ふくぶくろ","ふこう","ふさい","ふしぎ","ふじみ","ふすま","ふせい","ふせぐ","ふそく","ぶたにく","ふたん","ふちょう","ふつう","ふつか","ふっかつ","ふっき","ふっこく","ぶどう","ふとる","ふとん","ふのう","ふはい","ふひょう","ふへん","ふまん","ふみん","ふめつ","ふめん","ふよう","ふりこ","ふりる","ふるい","ふんいき","ぶんがく","ぶんぐ","ふんしつ","ぶんせき","ふんそう","ぶんぽう","へいあん","へいおん","へいがい","へいき","へいげん","へいこう","へいさ","へいしゃ","へいせつ","へいそ","へいたく","へいてん","へいねつ","へいわ","へきが","へこむ","べにいろ","べにしょうが","へらす","へんかん","べんきょう","べんごし","へんさい","へんたい","べんり","ほあん","ほいく","ぼうぎょ","ほうこく","ほうそう","ほうほう","ほうもん","ほうりつ","ほえる","ほおん","ほかん","ほきょう","ぼきん","ほくろ","ほけつ","ほけん","ほこう","ほこる","ほしい","ほしつ","ほしゅ","ほしょう","ほせい","ほそい","ほそく","ほたて","ほたる","ぽちぶくろ","ほっきょく","ほっさ","ほったん","ほとんど","ほめる","ほんい","ほんき","ほんけ","ほんしつ","ほんやく","まいにち","まかい","まかせる","まがる","まける","まこと","まさつ","まじめ","ますく","まぜる","まつり","まとめ","まなぶ","まぬけ","まねく","まほう","まもる","まゆげ","まよう","まろやか","まわす","まわり","まわる","まんが","まんきつ","まんぞく","まんなか","みいら","みうち","みえる","みがく","みかた","みかん","みけん","みこん","みじかい","みすい","みすえる","みせる","みっか","みつかる","みつける","みてい","みとめる","みなと","みなみかさい","みねらる","みのう","みのがす","みほん","みもと","みやげ","みらい","みりょく","みわく","みんか","みんぞく","むいか","むえき","むえん","むかい","むかう","むかえ","むかし","むぎちゃ","むける","むげん","むさぼる","むしあつい","むしば","むじゅん","むしろ","むすう","むすこ","むすぶ","むすめ","むせる","むせん","むちゅう","むなしい","むのう","むやみ","むよう","むらさき","むりょう","むろん","めいあん","めいうん","めいえん","めいかく","めいきょく","めいさい","めいし","めいそう","めいぶつ","めいれい","めいわく","めぐまれる","めざす","めした","めずらしい","めだつ","めまい","めやす","めんきょ","めんせき","めんどう","もうしあげる","もうどうけん","もえる","もくし","もくてき","もくようび","もちろん","もどる","もらう","もんく","もんだい","やおや","やける","やさい","やさしい","やすい","やすたろう","やすみ","やせる","やそう","やたい","やちん","やっと","やっぱり","やぶる","やめる","ややこしい","やよい","やわらかい","ゆうき","ゆうびんきょく","ゆうべ","ゆうめい","ゆけつ","ゆしゅつ","ゆせん","ゆそう","ゆたか","ゆちゃく","ゆでる","ゆにゅう","ゆびわ","ゆらい","ゆれる","ようい","ようか","ようきゅう","ようじ","ようす","ようちえん","よかぜ","よかん","よきん","よくせい","よくぼう","よけい","よごれる","よさん","よしゅう","よそう","よそく","よっか","よてい","よどがわく","よねつ","よやく","よゆう","よろこぶ","よろしい","らいう","らくがき","らくご","らくさつ","らくだ","らしんばん","らせん","らぞく","らたい","らっか","られつ","りえき","りかい","りきさく","りきせつ","りくぐん","りくつ","りけん","りこう","りせい","りそう","りそく","りてん","りねん","りゆう","りゅうがく","りよう","りょうり","りょかん","りょくちゃ","りょこう","りりく","りれき","りろん","りんご","るいけい","るいさい","るいじ","るいせき","るすばん","るりがわら","れいかん","れいぎ","れいせい","れいぞうこ","れいとう","れいぼう","れきし","れきだい","れんあい","れんけい","れんこん","れんさい","れんしゅう","れんぞく","れんらく","ろうか","ろうご","ろうじん","ろうそく","ろくが","ろこつ","ろじうら","ろしゅつ","ろせん","ろてん","ろめん","ろれつ","ろんぎ","ろんぱ","ろんぶん","ろんり","わかす","わかめ","わかやま","わかれる","わしつ","わじまし","わすれもの","わらう","われる"]',
      );
    },
    7113: function (e) {
      e.exports = JSON.parse(
        '["가격","가끔","가난","가능","가득","가르침","가뭄","가방","가상","가슴","가운데","가을","가이드","가입","가장","가정","가족","가죽","각오","각자","간격","간부","간섭","간장","간접","간판","갈등","갈비","갈색","갈증","감각","감기","감소","감수성","감자","감정","갑자기","강남","강당","강도","강력히","강변","강북","강사","강수량","강아지","강원도","강의","강제","강조","같이","개구리","개나리","개방","개별","개선","개성","개인","객관적","거실","거액","거울","거짓","거품","걱정","건강","건물","건설","건조","건축","걸음","검사","검토","게시판","게임","겨울","견해","결과","결국","결론","결석","결승","결심","결정","결혼","경계","경고","경기","경력","경복궁","경비","경상도","경영","경우","경쟁","경제","경주","경찰","경치","경향","경험","계곡","계단","계란","계산","계속","계약","계절","계층","계획","고객","고구려","고궁","고급","고등학생","고무신","고민","고양이","고장","고전","고집","고춧가루","고통","고향","곡식","골목","골짜기","골프","공간","공개","공격","공군","공급","공기","공동","공무원","공부","공사","공식","공업","공연","공원","공장","공짜","공책","공통","공포","공항","공휴일","과목","과일","과장","과정","과학","관객","관계","관광","관념","관람","관련","관리","관습","관심","관점","관찰","광경","광고","광장","광주","괴로움","굉장히","교과서","교문","교복","교실","교양","교육","교장","교직","교통","교환","교훈","구경","구름","구멍","구별","구분","구석","구성","구속","구역","구입","구청","구체적","국가","국기","국내","국립","국물","국민","국수","국어","국왕","국적","국제","국회","군대","군사","군인","궁극적","권리","권위","권투","귀국","귀신","규정","규칙","균형","그날","그냥","그늘","그러나","그룹","그릇","그림","그제서야","그토록","극복","극히","근거","근교","근래","근로","근무","근본","근원","근육","근처","글씨","글자","금강산","금고","금년","금메달","금액","금연","금요일","금지","긍정적","기간","기관","기념","기능","기독교","기둥","기록","기름","기법","기본","기분","기쁨","기숙사","기술","기억","기업","기온","기운","기원","기적","기준","기침","기혼","기획","긴급","긴장","길이","김밥","김치","김포공항","깍두기","깜빡","깨달음","깨소금","껍질","꼭대기","꽃잎","나들이","나란히","나머지","나물","나침반","나흘","낙엽","난방","날개","날씨","날짜","남녀","남대문","남매","남산","남자","남편","남학생","낭비","낱말","내년","내용","내일","냄비","냄새","냇물","냉동","냉면","냉방","냉장고","넥타이","넷째","노동","노란색","노력","노인","녹음","녹차","녹화","논리","논문","논쟁","놀이","농구","농담","농민","농부","농업","농장","농촌","높이","눈동자","눈물","눈썹","뉴욕","느낌","늑대","능동적","능력","다방","다양성","다음","다이어트","다행","단계","단골","단독","단맛","단순","단어","단위","단점","단체","단추","단편","단풍","달걀","달러","달력","달리","닭고기","담당","담배","담요","담임","답변","답장","당근","당분간","당연히","당장","대규모","대낮","대단히","대답","대도시","대략","대량","대륙","대문","대부분","대신","대응","대장","대전","대접","대중","대책","대출","대충","대통령","대학","대한민국","대합실","대형","덩어리","데이트","도대체","도덕","도둑","도망","도서관","도심","도움","도입","도자기","도저히","도전","도중","도착","독감","독립","독서","독일","독창적","동화책","뒷모습","뒷산","딸아이","마누라","마늘","마당","마라톤","마련","마무리","마사지","마약","마요네즈","마을","마음","마이크","마중","마지막","마찬가지","마찰","마흔","막걸리","막내","막상","만남","만두","만세","만약","만일","만점","만족","만화","많이","말기","말씀","말투","맘대로","망원경","매년","매달","매력","매번","매스컴","매일","매장","맥주","먹이","먼저","먼지","멀리","메일","며느리","며칠","면담","멸치","명단","명령","명예","명의","명절","명칭","명함","모금","모니터","모델","모든","모범","모습","모양","모임","모조리","모집","모퉁이","목걸이","목록","목사","목소리","목숨","목적","목표","몰래","몸매","몸무게","몸살","몸속","몸짓","몸통","몹시","무관심","무궁화","무더위","무덤","무릎","무슨","무엇","무역","무용","무조건","무지개","무척","문구","문득","문법","문서","문제","문학","문화","물가","물건","물결","물고기","물론","물리학","물음","물질","물체","미국","미디어","미사일","미술","미역","미용실","미움","미인","미팅","미혼","민간","민족","민주","믿음","밀가루","밀리미터","밑바닥","바가지","바구니","바나나","바늘","바닥","바닷가","바람","바이러스","바탕","박물관","박사","박수","반대","반드시","반말","반발","반성","반응","반장","반죽","반지","반찬","받침","발가락","발걸음","발견","발달","발레","발목","발바닥","발생","발음","발자국","발전","발톱","발표","밤하늘","밥그릇","밥맛","밥상","밥솥","방금","방면","방문","방바닥","방법","방송","방식","방안","방울","방지","방학","방해","방향","배경","배꼽","배달","배드민턴","백두산","백색","백성","백인","백제","백화점","버릇","버섯","버튼","번개","번역","번지","번호","벌금","벌레","벌써","범위","범인","범죄","법률","법원","법적","법칙","베이징","벨트","변경","변동","변명","변신","변호사","변화","별도","별명","별일","병실","병아리","병원","보관","보너스","보라색","보람","보름","보상","보안","보자기","보장","보전","보존","보통","보편적","보험","복도","복사","복숭아","복습","볶음","본격적","본래","본부","본사","본성","본인","본질","볼펜","봉사","봉지","봉투","부근","부끄러움","부담","부동산","부문","부분","부산","부상","부엌","부인","부작용","부장","부정","부족","부지런히","부친","부탁","부품","부회장","북부","북한","분노","분량","분리","분명","분석","분야","분위기","분필","분홍색","불고기","불과","불교","불꽃","불만","불법","불빛","불안","불이익","불행","브랜드","비극","비난","비닐","비둘기","비디오","비로소","비만","비명","비밀","비바람","비빔밥","비상","비용","비율","비중","비타민","비판","빌딩","빗물","빗방울","빗줄기","빛깔","빨간색","빨래","빨리","사건","사계절","사나이","사냥","사람","사랑","사립","사모님","사물","사방","사상","사생활","사설","사슴","사실","사업","사용","사월","사장","사전","사진","사촌","사춘기","사탕","사투리","사흘","산길","산부인과","산업","산책","살림","살인","살짝","삼계탕","삼국","삼십","삼월","삼촌","상관","상금","상대","상류","상반기","상상","상식","상업","상인","상자","상점","상처","상추","상태","상표","상품","상황","새벽","색깔","색연필","생각","생명","생물","생방송","생산","생선","생신","생일","생활","서랍","서른","서명","서민","서비스","서양","서울","서적","서점","서쪽","서클","석사","석유","선거","선물","선배","선생","선수","선원","선장","선전","선택","선풍기","설거지","설날","설렁탕","설명","설문","설사","설악산","설치","설탕","섭씨","성공","성당","성명","성별","성인","성장","성적","성질","성함","세금","세미나","세상","세월","세종대왕","세탁","센터","센티미터","셋째","소규모","소극적","소금","소나기","소년","소득","소망","소문","소설","소속","소아과","소용","소원","소음","소중히","소지품","소질","소풍","소형","속담","속도","속옷","손가락","손길","손녀","손님","손등","손목","손뼉","손실","손질","손톱","손해","솔직히","솜씨","송아지","송이","송편","쇠고기","쇼핑","수건","수년","수단","수돗물","수동적","수면","수명","수박","수상","수석","수술","수시로","수업","수염","수영","수입","수준","수집","수출","수컷","수필","수학","수험생","수화기","숙녀","숙소","숙제","순간","순서","순수","순식간","순위","숟가락","술병","술집","숫자","스님","스물","스스로","스승","스웨터","스위치","스케이트","스튜디오","스트레스","스포츠","슬쩍","슬픔","습관","습기","승객","승리","승부","승용차","승진","시각","시간","시골","시금치","시나리오","시댁","시리즈","시멘트","시민","시부모","시선","시설","시스템","시아버지","시어머니","시월","시인","시일","시작","시장","시절","시점","시중","시즌","시집","시청","시합","시험","식구","식기","식당","식량","식료품","식물","식빵","식사","식생활","식초","식탁","식품","신고","신규","신념","신문","신발","신비","신사","신세","신용","신제품","신청","신체","신화","실감","실내","실력","실례","실망","실수","실습","실시","실장","실정","실질적","실천","실체","실컷","실태","실패","실험","실현","심리","심부름","심사","심장","심정","심판","쌍둥이","씨름","씨앗","아가씨","아나운서","아드님","아들","아쉬움","아스팔트","아시아","아울러","아저씨","아줌마","아직","아침","아파트","아프리카","아픔","아홉","아흔","악기","악몽","악수","안개","안경","안과","안내","안녕","안동","안방","안부","안주","알루미늄","알코올","암시","암컷","압력","앞날","앞문","애인","애정","액수","앨범","야간","야단","야옹","약간","약국","약속","약수","약점","약품","약혼녀","양념","양력","양말","양배추","양주","양파","어둠","어려움","어른","어젯밤","어쨌든","어쩌다가","어쩐지","언니","언덕","언론","언어","얼굴","얼른","얼음","얼핏","엄마","업무","업종","업체","엉덩이","엉망","엉터리","엊그제","에너지","에어컨","엔진","여건","여고생","여관","여군","여권","여대생","여덟","여동생","여든","여론","여름","여섯","여성","여왕","여인","여전히","여직원","여학생","여행","역사","역시","역할","연결","연구","연극","연기","연락","연설","연세","연속","연습","연애","연예인","연인","연장","연주","연출","연필","연합","연휴","열기","열매","열쇠","열심히","열정","열차","열흘","염려","엽서","영국","영남","영상","영양","영역","영웅","영원히","영하","영향","영혼","영화","옆구리","옆방","옆집","예감","예금","예방","예산","예상","예선","예술","예습","예식장","예약","예전","예절","예정","예컨대","옛날","오늘","오락","오랫동안","오렌지","오로지","오른발","오븐","오십","오염","오월","오전","오직","오징어","오페라","오피스텔","오히려","옥상","옥수수","온갖","온라인","온몸","온종일","온통","올가을","올림픽","올해","옷차림","와이셔츠","와인","완성","완전","왕비","왕자","왜냐하면","왠지","외갓집","외국","외로움","외삼촌","외출","외침","외할머니","왼발","왼손","왼쪽","요금","요일","요즘","요청","용기","용서","용어","우산","우선","우승","우연히","우정","우체국","우편","운동","운명","운반","운전","운행","울산","울음","움직임","웃어른","웃음","워낙","원고","원래","원서","원숭이","원인","원장","원피스","월급","월드컵","월세","월요일","웨이터","위반","위법","위성","위원","위험","위협","윗사람","유난히","유럽","유명","유물","유산","유적","유치원","유학","유행","유형","육군","육상","육십","육체","은행","음력","음료","음반","음성","음식","음악","음주","의견","의논","의문","의복","의식","의심","의외로","의욕","의원","의학","이것","이곳","이념","이놈","이달","이대로","이동","이렇게","이력서","이론적","이름","이민","이발소","이별","이불","이빨","이상","이성","이슬","이야기","이용","이웃","이월","이윽고","이익","이전","이중","이튿날","이틀","이혼","인간","인격","인공","인구","인근","인기","인도","인류","인물","인생","인쇄","인연","인원","인재","인종","인천","인체","인터넷","인하","인형","일곱","일기","일단","일대","일등","일반","일본","일부","일상","일생","일손","일요일","일월","일정","일종","일주일","일찍","일체","일치","일행","일회용","임금","임무","입대","입력","입맛","입사","입술","입시","입원","입장","입학","자가용","자격","자극","자동","자랑","자부심","자식","자신","자연","자원","자율","자전거","자정","자존심","자판","작가","작년","작성","작업","작용","작은딸","작품","잔디","잔뜩","잔치","잘못","잠깐","잠수함","잠시","잠옷","잠자리","잡지","장관","장군","장기간","장래","장례","장르","장마","장면","장모","장미","장비","장사","장소","장식","장애인","장인","장점","장차","장학금","재능","재빨리","재산","재생","재작년","재정","재채기","재판","재학","재활용","저것","저고리","저곳","저녁","저런","저렇게","저번","저울","저절로","저축","적극","적당히","적성","적용","적응","전개","전공","전기","전달","전라도","전망","전문","전반","전부","전세","전시","전용","전자","전쟁","전주","전철","전체","전통","전혀","전후","절대","절망","절반","절약","절차","점검","점수","점심","점원","점점","점차","접근","접시","접촉","젓가락","정거장","정도","정류장","정리","정말","정면","정문","정반대","정보","정부","정비","정상","정성","정오","정원","정장","정지","정치","정확히","제공","제과점","제대로","제목","제발","제법","제삿날","제안","제일","제작","제주도","제출","제품","제한","조각","조건","조금","조깅","조명","조미료","조상","조선","조용히","조절","조정","조직","존댓말","존재","졸업","졸음","종교","종로","종류","종소리","종업원","종종","종합","좌석","죄인","주관적","주름","주말","주머니","주먹","주문","주민","주방","주변","주식","주인","주일","주장","주전자","주택","준비","줄거리","줄기","줄무늬","중간","중계방송","중국","중년","중단","중독","중반","중부","중세","중소기업","중순","중앙","중요","중학교","즉석","즉시","즐거움","증가","증거","증권","증상","증세","지각","지갑","지경","지극히","지금","지급","지능","지름길","지리산","지방","지붕","지식","지역","지우개","지원","지적","지점","지진","지출","직선","직업","직원","직장","진급","진동","진로","진료","진리","진짜","진찰","진출","진통","진행","질문","질병","질서","짐작","집단","집안","집중","짜증","찌꺼기","차남","차라리","차량","차림","차별","차선","차츰","착각","찬물","찬성","참가","참기름","참새","참석","참여","참외","참조","찻잔","창가","창고","창구","창문","창밖","창작","창조","채널","채점","책가방","책방","책상","책임","챔피언","처벌","처음","천국","천둥","천장","천재","천천히","철도","철저히","철학","첫날","첫째","청년","청바지","청소","청춘","체계","체력","체온","체육","체중","체험","초등학생","초반","초밥","초상화","초순","초여름","초원","초저녁","초점","초청","초콜릿","촛불","총각","총리","총장","촬영","최근","최상","최선","최신","최악","최종","추석","추억","추진","추천","추측","축구","축소","축제","축하","출근","출발","출산","출신","출연","출입","출장","출판","충격","충고","충돌","충분히","충청도","취업","취직","취향","치약","친구","친척","칠십","칠월","칠판","침대","침묵","침실","칫솔","칭찬","카메라","카운터","칼국수","캐릭터","캠퍼스","캠페인","커튼","컨디션","컬러","컴퓨터","코끼리","코미디","콘서트","콜라","콤플렉스","콩나물","쾌감","쿠데타","크림","큰길","큰딸","큰소리","큰아들","큰어머니","큰일","큰절","클래식","클럽","킬로","타입","타자기","탁구","탁자","탄생","태권도","태양","태풍","택시","탤런트","터널","터미널","테니스","테스트","테이블","텔레비전","토론","토마토","토요일","통계","통과","통로","통신","통역","통일","통장","통제","통증","통합","통화","퇴근","퇴원","퇴직금","튀김","트럭","특급","특별","특성","특수","특징","특히","튼튼히","티셔츠","파란색","파일","파출소","판결","판단","판매","판사","팔십","팔월","팝송","패션","팩스","팩시밀리","팬티","퍼센트","페인트","편견","편의","편지","편히","평가","평균","평생","평소","평양","평일","평화","포스터","포인트","포장","포함","표면","표정","표준","표현","품목","품질","풍경","풍속","풍습","프랑스","프린터","플라스틱","피곤","피망","피아노","필름","필수","필요","필자","필통","핑계","하느님","하늘","하드웨어","하룻밤","하반기","하숙집","하순","하여튼","하지만","하천","하품","하필","학과","학교","학급","학기","학년","학력","학번","학부모","학비","학생","학술","학습","학용품","학원","학위","학자","학점","한계","한글","한꺼번에","한낮","한눈","한동안","한때","한라산","한마디","한문","한번","한복","한식","한여름","한쪽","할머니","할아버지","할인","함께","함부로","합격","합리적","항공","항구","항상","항의","해결","해군","해답","해당","해물","해석","해설","해수욕장","해안","핵심","핸드백","햄버거","햇볕","햇살","행동","행복","행사","행운","행위","향기","향상","향수","허락","허용","헬기","현관","현금","현대","현상","현실","현장","현재","현지","혈액","협력","형부","형사","형수","형식","형제","형태","형편","혜택","호기심","호남","호랑이","호박","호텔","호흡","혹시","홀로","홈페이지","홍보","홍수","홍차","화면","화분","화살","화요일","화장","화학","확보","확인","확장","확정","환갑","환경","환영","환율","환자","활기","활동","활발히","활용","활짝","회견","회관","회복","회색","회원","회장","회전","횟수","횡단보도","효율적","후반","후춧가루","훈련","훨씬","휴식","휴일","흉내","흐름","흑백","흑인","흔적","흔히","흥미","흥분","희곡","희망","희생","흰색","힘껏"]',
      );
    },
    7114: function (e) {
      e.exports = JSON.parse(
        '["ábaco","abdomen","abeja","abierto","abogado","abono","aborto","abrazo","abrir","abuelo","abuso","acabar","academia","acceso","acción","aceite","acelga","acento","aceptar","ácido","aclarar","acné","acoger","acoso","activo","acto","actriz","actuar","acudir","acuerdo","acusar","adicto","admitir","adoptar","adorno","aduana","adulto","aéreo","afectar","afición","afinar","afirmar","ágil","agitar","agonía","agosto","agotar","agregar","agrio","agua","agudo","águila","aguja","ahogo","ahorro","aire","aislar","ajedrez","ajeno","ajuste","alacrán","alambre","alarma","alba","álbum","alcalde","aldea","alegre","alejar","alerta","aleta","alfiler","alga","algodón","aliado","aliento","alivio","alma","almeja","almíbar","altar","alteza","altivo","alto","altura","alumno","alzar","amable","amante","amapola","amargo","amasar","ámbar","ámbito","ameno","amigo","amistad","amor","amparo","amplio","ancho","anciano","ancla","andar","andén","anemia","ángulo","anillo","ánimo","anís","anotar","antena","antiguo","antojo","anual","anular","anuncio","añadir","añejo","año","apagar","aparato","apetito","apio","aplicar","apodo","aporte","apoyo","aprender","aprobar","apuesta","apuro","arado","araña","arar","árbitro","árbol","arbusto","archivo","arco","arder","ardilla","arduo","área","árido","aries","armonía","arnés","aroma","arpa","arpón","arreglo","arroz","arruga","arte","artista","asa","asado","asalto","ascenso","asegurar","aseo","asesor","asiento","asilo","asistir","asno","asombro","áspero","astilla","astro","astuto","asumir","asunto","atajo","ataque","atar","atento","ateo","ático","atleta","átomo","atraer","atroz","atún","audaz","audio","auge","aula","aumento","ausente","autor","aval","avance","avaro","ave","avellana","avena","avestruz","avión","aviso","ayer","ayuda","ayuno","azafrán","azar","azote","azúcar","azufre","azul","baba","babor","bache","bahía","baile","bajar","balanza","balcón","balde","bambú","banco","banda","baño","barba","barco","barniz","barro","báscula","bastón","basura","batalla","batería","batir","batuta","baúl","bazar","bebé","bebida","bello","besar","beso","bestia","bicho","bien","bingo","blanco","bloque","blusa","boa","bobina","bobo","boca","bocina","boda","bodega","boina","bola","bolero","bolsa","bomba","bondad","bonito","bono","bonsái","borde","borrar","bosque","bote","botín","bóveda","bozal","bravo","brazo","brecha","breve","brillo","brinco","brisa","broca","broma","bronce","brote","bruja","brusco","bruto","buceo","bucle","bueno","buey","bufanda","bufón","búho","buitre","bulto","burbuja","burla","burro","buscar","butaca","buzón","caballo","cabeza","cabina","cabra","cacao","cadáver","cadena","caer","café","caída","caimán","caja","cajón","cal","calamar","calcio","caldo","calidad","calle","calma","calor","calvo","cama","cambio","camello","camino","campo","cáncer","candil","canela","canguro","canica","canto","caña","cañón","caoba","caos","capaz","capitán","capote","captar","capucha","cara","carbón","cárcel","careta","carga","cariño","carne","carpeta","carro","carta","casa","casco","casero","caspa","castor","catorce","catre","caudal","causa","cazo","cebolla","ceder","cedro","celda","célebre","celoso","célula","cemento","ceniza","centro","cerca","cerdo","cereza","cero","cerrar","certeza","césped","cetro","chacal","chaleco","champú","chancla","chapa","charla","chico","chiste","chivo","choque","choza","chuleta","chupar","ciclón","ciego","cielo","cien","cierto","cifra","cigarro","cima","cinco","cine","cinta","ciprés","circo","ciruela","cisne","cita","ciudad","clamor","clan","claro","clase","clave","cliente","clima","clínica","cobre","cocción","cochino","cocina","coco","código","codo","cofre","coger","cohete","cojín","cojo","cola","colcha","colegio","colgar","colina","collar","colmo","columna","combate","comer","comida","cómodo","compra","conde","conejo","conga","conocer","consejo","contar","copa","copia","corazón","corbata","corcho","cordón","corona","correr","coser","cosmos","costa","cráneo","cráter","crear","crecer","creído","crema","cría","crimen","cripta","crisis","cromo","crónica","croqueta","crudo","cruz","cuadro","cuarto","cuatro","cubo","cubrir","cuchara","cuello","cuento","cuerda","cuesta","cueva","cuidar","culebra","culpa","culto","cumbre","cumplir","cuna","cuneta","cuota","cupón","cúpula","curar","curioso","curso","curva","cutis","dama","danza","dar","dardo","dátil","deber","débil","década","decir","dedo","defensa","definir","dejar","delfín","delgado","delito","demora","denso","dental","deporte","derecho","derrota","desayuno","deseo","desfile","desnudo","destino","desvío","detalle","detener","deuda","día","diablo","diadema","diamante","diana","diario","dibujo","dictar","diente","dieta","diez","difícil","digno","dilema","diluir","dinero","directo","dirigir","disco","diseño","disfraz","diva","divino","doble","doce","dolor","domingo","don","donar","dorado","dormir","dorso","dos","dosis","dragón","droga","ducha","duda","duelo","dueño","dulce","dúo","duque","durar","dureza","duro","ébano","ebrio","echar","eco","ecuador","edad","edición","edificio","editor","educar","efecto","eficaz","eje","ejemplo","elefante","elegir","elemento","elevar","elipse","élite","elixir","elogio","eludir","embudo","emitir","emoción","empate","empeño","empleo","empresa","enano","encargo","enchufe","encía","enemigo","enero","enfado","enfermo","engaño","enigma","enlace","enorme","enredo","ensayo","enseñar","entero","entrar","envase","envío","época","equipo","erizo","escala","escena","escolar","escribir","escudo","esencia","esfera","esfuerzo","espada","espejo","espía","esposa","espuma","esquí","estar","este","estilo","estufa","etapa","eterno","ética","etnia","evadir","evaluar","evento","evitar","exacto","examen","exceso","excusa","exento","exigir","exilio","existir","éxito","experto","explicar","exponer","extremo","fábrica","fábula","fachada","fácil","factor","faena","faja","falda","fallo","falso","faltar","fama","familia","famoso","faraón","farmacia","farol","farsa","fase","fatiga","fauna","favor","fax","febrero","fecha","feliz","feo","feria","feroz","fértil","fervor","festín","fiable","fianza","fiar","fibra","ficción","ficha","fideo","fiebre","fiel","fiera","fiesta","figura","fijar","fijo","fila","filete","filial","filtro","fin","finca","fingir","finito","firma","flaco","flauta","flecha","flor","flota","fluir","flujo","flúor","fobia","foca","fogata","fogón","folio","folleto","fondo","forma","forro","fortuna","forzar","fosa","foto","fracaso","frágil","franja","frase","fraude","freír","freno","fresa","frío","frito","fruta","fuego","fuente","fuerza","fuga","fumar","función","funda","furgón","furia","fusil","fútbol","futuro","gacela","gafas","gaita","gajo","gala","galería","gallo","gamba","ganar","gancho","ganga","ganso","garaje","garza","gasolina","gastar","gato","gavilán","gemelo","gemir","gen","género","genio","gente","geranio","gerente","germen","gesto","gigante","gimnasio","girar","giro","glaciar","globo","gloria","gol","golfo","goloso","golpe","goma","gordo","gorila","gorra","gota","goteo","gozar","grada","gráfico","grano","grasa","gratis","grave","grieta","grillo","gripe","gris","grito","grosor","grúa","grueso","grumo","grupo","guante","guapo","guardia","guerra","guía","guiño","guion","guiso","guitarra","gusano","gustar","haber","hábil","hablar","hacer","hacha","hada","hallar","hamaca","harina","haz","hazaña","hebilla","hebra","hecho","helado","helio","hembra","herir","hermano","héroe","hervir","hielo","hierro","hígado","higiene","hijo","himno","historia","hocico","hogar","hoguera","hoja","hombre","hongo","honor","honra","hora","hormiga","horno","hostil","hoyo","hueco","huelga","huerta","hueso","huevo","huida","huir","humano","húmedo","humilde","humo","hundir","huracán","hurto","icono","ideal","idioma","ídolo","iglesia","iglú","igual","ilegal","ilusión","imagen","imán","imitar","impar","imperio","imponer","impulso","incapaz","índice","inerte","infiel","informe","ingenio","inicio","inmenso","inmune","innato","insecto","instante","interés","íntimo","intuir","inútil","invierno","ira","iris","ironía","isla","islote","jabalí","jabón","jamón","jarabe","jardín","jarra","jaula","jazmín","jefe","jeringa","jinete","jornada","joroba","joven","joya","juerga","jueves","juez","jugador","jugo","juguete","juicio","junco","jungla","junio","juntar","júpiter","jurar","justo","juvenil","juzgar","kilo","koala","labio","lacio","lacra","lado","ladrón","lagarto","lágrima","laguna","laico","lamer","lámina","lámpara","lana","lancha","langosta","lanza","lápiz","largo","larva","lástima","lata","látex","latir","laurel","lavar","lazo","leal","lección","leche","lector","leer","legión","legumbre","lejano","lengua","lento","leña","león","leopardo","lesión","letal","letra","leve","leyenda","libertad","libro","licor","líder","lidiar","lienzo","liga","ligero","lima","límite","limón","limpio","lince","lindo","línea","lingote","lino","linterna","líquido","liso","lista","litera","litio","litro","llaga","llama","llanto","llave","llegar","llenar","llevar","llorar","llover","lluvia","lobo","loción","loco","locura","lógica","logro","lombriz","lomo","lonja","lote","lucha","lucir","lugar","lujo","luna","lunes","lupa","lustro","luto","luz","maceta","macho","madera","madre","maduro","maestro","mafia","magia","mago","maíz","maldad","maleta","malla","malo","mamá","mambo","mamut","manco","mando","manejar","manga","maniquí","manjar","mano","manso","manta","mañana","mapa","máquina","mar","marco","marea","marfil","margen","marido","mármol","marrón","martes","marzo","masa","máscara","masivo","matar","materia","matiz","matriz","máximo","mayor","mazorca","mecha","medalla","medio","médula","mejilla","mejor","melena","melón","memoria","menor","mensaje","mente","menú","mercado","merengue","mérito","mes","mesón","meta","meter","método","metro","mezcla","miedo","miel","miembro","miga","mil","milagro","militar","millón","mimo","mina","minero","mínimo","minuto","miope","mirar","misa","miseria","misil","mismo","mitad","mito","mochila","moción","moda","modelo","moho","mojar","molde","moler","molino","momento","momia","monarca","moneda","monja","monto","moño","morada","morder","moreno","morir","morro","morsa","mortal","mosca","mostrar","motivo","mover","móvil","mozo","mucho","mudar","mueble","muela","muerte","muestra","mugre","mujer","mula","muleta","multa","mundo","muñeca","mural","muro","músculo","museo","musgo","música","muslo","nácar","nación","nadar","naipe","naranja","nariz","narrar","nasal","natal","nativo","natural","náusea","naval","nave","navidad","necio","néctar","negar","negocio","negro","neón","nervio","neto","neutro","nevar","nevera","nicho","nido","niebla","nieto","niñez","niño","nítido","nivel","nobleza","noche","nómina","noria","norma","norte","nota","noticia","novato","novela","novio","nube","nuca","núcleo","nudillo","nudo","nuera","nueve","nuez","nulo","número","nutria","oasis","obeso","obispo","objeto","obra","obrero","observar","obtener","obvio","oca","ocaso","océano","ochenta","ocho","ocio","ocre","octavo","octubre","oculto","ocupar","ocurrir","odiar","odio","odisea","oeste","ofensa","oferta","oficio","ofrecer","ogro","oído","oír","ojo","ola","oleada","olfato","olivo","olla","olmo","olor","olvido","ombligo","onda","onza","opaco","opción","ópera","opinar","oponer","optar","óptica","opuesto","oración","orador","oral","órbita","orca","orden","oreja","órgano","orgía","orgullo","oriente","origen","orilla","oro","orquesta","oruga","osadía","oscuro","osezno","oso","ostra","otoño","otro","oveja","óvulo","óxido","oxígeno","oyente","ozono","pacto","padre","paella","página","pago","país","pájaro","palabra","palco","paleta","pálido","palma","paloma","palpar","pan","panal","pánico","pantera","pañuelo","papá","papel","papilla","paquete","parar","parcela","pared","parir","paro","párpado","parque","párrafo","parte","pasar","paseo","pasión","paso","pasta","pata","patio","patria","pausa","pauta","pavo","payaso","peatón","pecado","pecera","pecho","pedal","pedir","pegar","peine","pelar","peldaño","pelea","peligro","pellejo","pelo","peluca","pena","pensar","peñón","peón","peor","pepino","pequeño","pera","percha","perder","pereza","perfil","perico","perla","permiso","perro","persona","pesa","pesca","pésimo","pestaña","pétalo","petróleo","pez","pezuña","picar","pichón","pie","piedra","pierna","pieza","pijama","pilar","piloto","pimienta","pino","pintor","pinza","piña","piojo","pipa","pirata","pisar","piscina","piso","pista","pitón","pizca","placa","plan","plata","playa","plaza","pleito","pleno","plomo","pluma","plural","pobre","poco","poder","podio","poema","poesía","poeta","polen","policía","pollo","polvo","pomada","pomelo","pomo","pompa","poner","porción","portal","posada","poseer","posible","poste","potencia","potro","pozo","prado","precoz","pregunta","premio","prensa","preso","previo","primo","príncipe","prisión","privar","proa","probar","proceso","producto","proeza","profesor","programa","prole","promesa","pronto","propio","próximo","prueba","público","puchero","pudor","pueblo","puerta","puesto","pulga","pulir","pulmón","pulpo","pulso","puma","punto","puñal","puño","pupa","pupila","puré","quedar","queja","quemar","querer","queso","quieto","química","quince","quitar","rábano","rabia","rabo","ración","radical","raíz","rama","rampa","rancho","rango","rapaz","rápido","rapto","rasgo","raspa","rato","rayo","raza","razón","reacción","realidad","rebaño","rebote","recaer","receta","rechazo","recoger","recreo","recto","recurso","red","redondo","reducir","reflejo","reforma","refrán","refugio","regalo","regir","regla","regreso","rehén","reino","reír","reja","relato","relevo","relieve","relleno","reloj","remar","remedio","remo","rencor","rendir","renta","reparto","repetir","reposo","reptil","res","rescate","resina","respeto","resto","resumen","retiro","retorno","retrato","reunir","revés","revista","rey","rezar","rico","riego","rienda","riesgo","rifa","rígido","rigor","rincón","riñón","río","riqueza","risa","ritmo","rito","rizo","roble","roce","rociar","rodar","rodeo","rodilla","roer","rojizo","rojo","romero","romper","ron","ronco","ronda","ropa","ropero","rosa","rosca","rostro","rotar","rubí","rubor","rudo","rueda","rugir","ruido","ruina","ruleta","rulo","rumbo","rumor","ruptura","ruta","rutina","sábado","saber","sabio","sable","sacar","sagaz","sagrado","sala","saldo","salero","salir","salmón","salón","salsa","salto","salud","salvar","samba","sanción","sandía","sanear","sangre","sanidad","sano","santo","sapo","saque","sardina","sartén","sastre","satán","sauna","saxofón","sección","seco","secreto","secta","sed","seguir","seis","sello","selva","semana","semilla","senda","sensor","señal","señor","separar","sepia","sequía","ser","serie","sermón","servir","sesenta","sesión","seta","setenta","severo","sexo","sexto","sidra","siesta","siete","siglo","signo","sílaba","silbar","silencio","silla","símbolo","simio","sirena","sistema","sitio","situar","sobre","socio","sodio","sol","solapa","soldado","soledad","sólido","soltar","solución","sombra","sondeo","sonido","sonoro","sonrisa","sopa","soplar","soporte","sordo","sorpresa","sorteo","sostén","sótano","suave","subir","suceso","sudor","suegra","suelo","sueño","suerte","sufrir","sujeto","sultán","sumar","superar","suplir","suponer","supremo","sur","surco","sureño","surgir","susto","sutil","tabaco","tabique","tabla","tabú","taco","tacto","tajo","talar","talco","talento","talla","talón","tamaño","tambor","tango","tanque","tapa","tapete","tapia","tapón","taquilla","tarde","tarea","tarifa","tarjeta","tarot","tarro","tarta","tatuaje","tauro","taza","tazón","teatro","techo","tecla","técnica","tejado","tejer","tejido","tela","teléfono","tema","temor","templo","tenaz","tender","tener","tenis","tenso","teoría","terapia","terco","término","ternura","terror","tesis","tesoro","testigo","tetera","texto","tez","tibio","tiburón","tiempo","tienda","tierra","tieso","tigre","tijera","tilde","timbre","tímido","timo","tinta","tío","típico","tipo","tira","tirón","titán","títere","título","tiza","toalla","tobillo","tocar","tocino","todo","toga","toldo","tomar","tono","tonto","topar","tope","toque","tórax","torero","tormenta","torneo","toro","torpedo","torre","torso","tortuga","tos","tosco","toser","tóxico","trabajo","tractor","traer","tráfico","trago","traje","tramo","trance","trato","trauma","trazar","trébol","tregua","treinta","tren","trepar","tres","tribu","trigo","tripa","triste","triunfo","trofeo","trompa","tronco","tropa","trote","trozo","truco","trueno","trufa","tubería","tubo","tuerto","tumba","tumor","túnel","túnica","turbina","turismo","turno","tutor","ubicar","úlcera","umbral","unidad","unir","universo","uno","untar","uña","urbano","urbe","urgente","urna","usar","usuario","útil","utopía","uva","vaca","vacío","vacuna","vagar","vago","vaina","vajilla","vale","válido","valle","valor","válvula","vampiro","vara","variar","varón","vaso","vecino","vector","vehículo","veinte","vejez","vela","velero","veloz","vena","vencer","venda","veneno","vengar","venir","venta","venus","ver","verano","verbo","verde","vereda","verja","verso","verter","vía","viaje","vibrar","vicio","víctima","vida","vídeo","vidrio","viejo","viernes","vigor","vil","villa","vinagre","vino","viñedo","violín","viral","virgo","virtud","visor","víspera","vista","vitamina","viudo","vivaz","vivero","vivir","vivo","volcán","volumen","volver","voraz","votar","voto","voz","vuelo","vulgar","yacer","yate","yegua","yema","yerno","yeso","yodo","yoga","yogur","zafiro","zanja","zapato","zarza","zona","zorro","zumo","zurdo"]',
      );
    },
    7134: function (e, t, a) {
      "use strict";
      (function (e) {
        var r = a(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = r(a(5864)),
          n = r(a(2792)),
          i = r(a(7135)),
          s = a(3135),
          c = a(27),
          d = a(19);
        const l = 2147483648,
          u = [l, l],
          h = 142,
          m = 2,
          g = "011a2d964a095820";
        class CborIndefiniteLengthArray {
          constructor(e) {
            this.elements = e;
          }
          encodeCBOR(t) {
            return t.push(
              e.concat([
                e.from([159]),
                ...this.elements.map((e) => i.default.encode(e)),
                e.from([255]),
              ]),
            );
          }
        }
        function f(e, t, a) {
          return Math.ceil(a + e * t);
        }
        function HDNode(t) {
          let { secret: a, secretKey: r, publicKey: o, chainCode: n } = t;
          a
            ? ((r = a.slice(0, 64)),
              (o = a.slice(64, 96)),
              (n = a.slice(96, 128)))
            : (a = e.concat([r, o, n]));
          const i = e.concat([o, n], 64);
          function s() {
            return e.concat([r, i]);
          }
          function c() {
            return s().toString("hex");
          }
          return {
            secretKey: r,
            publicKey: o,
            chainCode: n,
            extendedPublicKey: i,
            toBuffer: s,
            toString: c,
          };
        }
        async function p(e) {
          const t = await o.default.mnemonicToRootKeypair(e, 1);
          return n.default.encode(t);
        }
        function b(e, t) {
          const a = o.default.derivePrivate(e.toBuffer(), t, 1);
          return HDNode({
            secretKey: a.slice(0, 64),
            publicKey: a.slice(64, 96),
            chainCode: a.slice(96, 128),
          });
        }
        function w(e) {
          const t = n.default.decode(e),
            a = HDNode({ secret: t }),
            r = u.reduce(b, a).extendedPublicKey,
            i = x(e);
          return o.default.packAddress(u, r, i, 1);
        }
        async function v(e) {
          if (!e) return !1;
          try {
            return o.default.isValidAddress(e);
          } catch (t) {
            return !1;
          }
        }
        async function y(e, t) {
          const a = await x(t);
          return o.default.unpackAddress(e, a).derivationPath;
        }
        function x(e) {
          const t = n.default.decode(e),
            a = HDNode({ secret: t });
          return (0, s.pbkdf2Sync)(
            a.extendedPublicKey,
            "address-hashing",
            500,
            32,
            "sha512",
          );
        }
        function T(t) {
          const a = n.default.decode(t),
            r = HDNode({ secret: a });
          return (0, s.pbkdf2Sync)(
            e.concat([r.secretKey, r.chainCode]),
            "",
            4096,
            96,
            "sha512",
          );
        }
        function _(t, a, r) {
          const n = a.reduce(b, r),
            i = e.from(t, "hex");
          return o.default.sign(i, n.toBuffer());
        }
        async function A(e, t) {
          const a = e.getId(),
            r = await Promise.all(
              e.inputs.map(async (e) => {
                const r = await y(e.utxo.receiver, t),
                  o = n.default.decode(t),
                  i = HDNode({ secret: o }),
                  s = r.reduce(b, i).extendedPublicKey,
                  c = _(`${g}${a}`, r, i);
                return k(s, c);
              }),
            );
          return C(e, r);
        }
        async function N(e, t, a, r, o, n) {
          const i = await R(e, t, a, Number(r), n),
            s = P(i, o);
          return s;
        }
        async function P(e, t) {
          const a = await A(e, t);
          return {
            txHash: a.getId(),
            txBody: i.default.encode(a).toString("hex"),
            cbor: i.default.encode(a),
          };
        }
        function E(e, t, a) {
          function r() {
            return o.default
              .blake2b(i.default.encode(E(e, t, a)), 32)
              .toString("hex");
          }
          function n(r) {
            return r.pushAny([
              new CborIndefiniteLengthArray(e),
              new CborIndefiniteLengthArray(t),
              a,
            ]);
          }
          return {
            getId: r,
            inputs: e,
            outputs: t,
            attributes: a,
            encodeCBOR: n,
          };
        }
        function k(e, t) {
          const a = 0;
          function r(r) {
            return r.pushAny([
              a,
              new i.default.Tagged(24, i.default.encode([e, t])),
            ]);
          }
          return { extendedPublicKey: e, signature: t, encodeCBOR: r };
        }
        function S(t) {
          const a = 0,
            r = t.amount,
            o = t.tx_hash,
            n = t.tx_index;
          function s(t) {
            const r = t.pushAny([
              a,
              new i.default.Tagged(24, i.default.encode([e.from(o, "hex"), n])),
            ]);
            return r;
          }
          return {
            coins: r,
            txHash: o,
            outputIndex: n,
            utxo: t,
            encodeCBOR: s,
          };
        }
        function B(e, t, a) {
          function r(a) {
            return a.pushAny([j(e), t]);
          }
          return { address: e, coins: t, isChange: a, encodeCBOR: r };
        }
        function j(e) {
          function t(t) {
            return t.push(e);
          }
          return { address: e, encodeCBOR: t };
        }
        function C(e, t) {
          function a() {
            return e.getId();
          }
          function r(a) {
            return a.pushAny([e, t]);
          }
          return { getId: a, witnesses: t, txAux: e, encodeCBOR: r };
        }
        function O(e, t, a, r) {
          const o = i.default.encode(new CborIndefiniteLengthArray(e)).length,
            n = t.length,
            s = 76,
            c = 9,
            d = r ? n + s + c * m + m : n + c + m,
            l = 1,
            u = 1 + o + d + l,
            g = e.length * h + 1,
            f = 1 + u + g,
            p = 4;
          return f + p;
        }
        async function z(e) {
          const t = [];
          for (let a = 0; a < e.length; a += 1) t.push(S(e[a]));
          return t;
        }
        async function R(e, t, a, r, o) {
          const n = await z(e, t, r),
            i = n.reduce((e, t) => e + Number(t.coins), 0),
            s = i - r - Number(o);
          if (s < 0)
            throw new d.WalletError({
              type: c.WALLET_ERROR,
              error: new Error(
                `Transaction inputs (sum ${i}) don't cover coins (${r}) + fee (${o})`,
              ),
              instance: this,
            });
          const l = [B(t, r, !1)];
          return (s > 0 && l.push(B(a, s, !0)), E(n, l, {}));
        }
        async function L(e, t, a, r, o) {
          const n = await z(e, t, a);
          return Math.ceil(I(n, t, a, r, o));
        }
        function I(e, t, a, r, o) {
          if (a > Number.MAX_SAFE_INTEGER)
            throw new d.WalletError({
              type: c.WALLET_ERROR,
              error: new Error("Unsupported amount of coins: " + a),
              instance: this,
            });
          const n = e.reduce((e, t) => e + t.coins, 0),
            i = f(O(e, t, a, !1), r, o);
          if (a + i >= n) return i;
          const s = f(O(e, t, a, !0), r, o);
          return a + s > n ? n - a : s;
        }
        t.default = {
          getDerivationPathFromAddress: y,
          getPrivateKeyByMnemonic: p,
          getAddressByPrivateKey: w,
          getTxFee: L,
          prepareSignedTx: N,
          validateAddress: v,
          getHDKey: T,
        };
      }).call(this, a(2).Buffer);
    },
    7140: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.msgUndelegate =
          t.msgSend =
          t.msgRedelegate =
          t.msgDelegate =
          t.default =
            void 0));
      var r = a(27);
      const o = (e) => {
        let {
          fromAddress: t,
          toAddress: a,
          amount: o,
          fee: n,
          gas: i,
          memo: s,
          denom: c = "uatom",
        } = e;
        return {
          msg: [
            {
              type: r.ATOM_MSG_TYPES.Send,
              value: {
                from_address: t,
                to_address: a,
                amount: [{ denom: c, amount: o }],
              },
            },
          ],
          fee: { amount: [{ denom: c, amount: n }], gas: i },
          signatures: null,
          memo: s,
        };
      };
      t.msgSend = o;
      const n = (e) => {
        let {
          delegatorAddress: t,
          validatorAddress: a,
          amount: o,
          fee: n,
          gas: i,
          memo: s,
          denom: c = "uatom",
        } = e;
        return {
          msg: [
            {
              type: r.ATOM_MSG_TYPES.Delegate,
              value: {
                delegator_address: t,
                validator_address: a,
                amount: { denom: c, amount: o },
              },
            },
          ],
          fee: { amount: [{ denom: c, amount: n }], gas: i },
          signatures: null,
          memo: s,
        };
      };
      t.msgDelegate = n;
      const i = (e) => {
        let {
          delegatorAddress: t,
          validatorAddress: a,
          amount: o,
          fee: n,
          gas: i,
          memo: s = "",
          denom: c = "uatom",
        } = e;
        return {
          msg: [
            {
              type: r.ATOM_MSG_TYPES.Undelegate,
              value: {
                delegator_address: t,
                validator_address: a,
                amount: { denom: c, amount: o },
              },
            },
          ],
          fee: { amount: [{ denom: c, amount: n }], gas: i },
          signatures: null,
          memo: s,
        };
      };
      t.msgUndelegate = i;
      const s = (e) => {
        let {
          delegatorAddress: t,
          validatorSrcAddress: a,
          validatorDstAddress: o,
          amount: n,
          fee: i,
          gas: s,
          memo: c,
          denom: d = "uatom",
        } = e;
        return {
          msg: [
            {
              type: r.ATOM_MSG_TYPES.Redelegate,
              value: {
                delegator_address: t,
                validator_src_address: a,
                validator_dst_address: o,
                amount: { denom: d, amount: n },
              },
            },
          ],
          fee: { amount: [{ denom: d, amount: i }], gas: s },
          signatures: null,
          memo: c,
        };
      };
      t.msgRedelegate = s;
      t.default = {
        "cosmos-sdk/MsgSend": o,
        "cosmos-sdk/MsgDelegate": n,
        "cosmos-sdk/MsgUndelegate": i,
        "cosmos-sdk/MsgBeginRedelegate": s,
      };
    },
    7141: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(a(5880)),
        n = a(19),
        i = a(27);
      function s(e, t, a) {
        (c(e, t), t.set(e, a));
      }
      function c(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function d(e, t, a) {
        return (e.set(u(e, t), a), a);
      }
      function l(e, t) {
        return e.get(u(e, t));
      }
      function u(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const { BITCORE: h } = i.LIB_NAME_INDEX,
        m = (e) => {
          var t;
          return (
            (t = new WeakMap()),
            class extends e {
              constructor() {
                (super(...arguments), s(this, t, void 0));
              }
              async loadWallet(e) {
                const a = await this.loadLib(h);
                return new Promise(async (r, o) => {
                  const s = a.HDPrivateKey.fromSeed(e, await this.getNetwork()),
                    { privateKey: c } = s[this.getDeriveFunctionName()](
                      this.derivation,
                    );
                  (c ||
                    o(
                      new n.WalletError({
                        type: i.LOAD_WALLET_ERROR,
                        error: "can't derive privateKey!",
                        instance: this,
                      }),
                    ),
                    this.setPrivateKey(c.toWIF()),
                    (this.address = await this.getAddress()),
                    r({
                      id: this.id,
                      privateKey: l(t, this),
                      address: this.address,
                    }));
                });
              }
              async getNetwork() {
                const e = await this.loadLib(h);
                return e.Networks.get(this.networkName || "mainnet");
              }
              getDeriveFunctionName() {
                return "deriveChild";
              }
              async getAddress() {
                const e = await this.loadLib(h);
                return e.PrivateKey.fromWIF(l(t, this).toString())
                  .toAddress(await this.getNetwork())
                  .toString();
              }
              async validateAddress(e) {
                const t = await this.loadLib(h);
                return t.Address.isValid(
                  e || this.address,
                  await this.getNetwork(),
                );
              }
              async createTransaction(e) {
                let { address: a, amount: r, memo: o, userFee: n } = e;
                const i = await this.loadLib(h),
                  s = await this.getUnspentOutputs(
                    this.address,
                    await this.getScriptPubKey(),
                  ),
                  c = Number(n || (await this.getFee({ amount: r }))),
                  d = 1e3,
                  u = new i.Transaction().from(s).to(a, Number(r)).fee(c);
                return (
                  "XVG" === this.ticker &&
                    (u.timestamp = Number(
                      new Date().getTime().toString().slice(0, -3),
                    )),
                  Number(this.feePerByte) > 0 &&
                    u.feePerKb(this.getFeePerByte() * d),
                  u.change(this.address),
                  "function" === typeof u.enableRBF
                    ? u.enableRBF()
                    : console.warn(
                        `[${this.ticker}] bitcore-lib does not have enableRBF function`,
                      ),
                  u.sign(l(t, this)).serialize()
                );
              }
              async createTransactionSync(e) {
                let { inputs: a, outputs: r, fee: o } = e;
                const n = await this.loadLib(h),
                  i = r
                    .filter((e) => e.address)
                    .map((e) => {
                      let { address: t, value: a } = e;
                      return { address: t, satoshis: a };
                    }),
                  s = new n.Transaction().from(a).to(i);
                return (
                  o && s.fee(o).change(this.address),
                  "function" === typeof s.enableRBF
                    ? s.enableRBF()
                    : console.warn(
                        `[${this.ticker}] bitcore-lib does not have enableRBF function`,
                      ),
                  s.sign(l(t, this)).serialize()
                );
              }
              async getScriptPubKey() {
                const e = await this.loadLib(h);
                return e.Script.fromAddress(this.address).toHex();
              }
              async decodeTransaction(e) {
                const t = await this.loadLib(h);
                return new t.Transaction(e);
              }
              async getCoins(e) {
                let { address: t, value: a, feePerByte: r } = e;
                const n = await this.getUnspentOutputs(
                    this.address,
                    await this.getScriptPubKey(),
                  ),
                  i = n.map((e) => ({ ...e, value: Number(e.value) })),
                  s = (0, o.default)(i, [{ address: t, value: a }], r);
                if (!s.inputs || !s.outputs)
                  throw new Error("Could not select utxos");
                return s;
              }
              setPrivateKey(e) {
                d(t, this, e);
              }
            }
          );
        };
      t.default = m;
    },
    7144: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(19),
        o = a(27);
      function n(e, t, a) {
        (i(e, t), t.set(e, a));
      }
      function i(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function s(e, t, a) {
        return (e.set(d(e, t), a), a);
      }
      function c(e, t) {
        return e.get(d(e, t));
      }
      function d(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const { BITCOINJS: l } = o.LIB_NAME_INDEX,
        u = (e) => {
          var t;
          return (
            (t = new WeakMap()),
            class extends e {
              constructor() {
                (super(...arguments), n(this, t, void 0));
              }
              async loadWallet(e) {
                const a = await this.loadLib(l),
                  n = a.bip32.fromSeed(e, await this.getNetwork()),
                  i = n.derivePath(this.derivation);
                if (!i)
                  throw new r.WalletError({
                    type: o.WALLET_ERROR,
                    error: new Error("can't get a privateKey!"),
                    instance: this,
                  });
                const s = i.toWIF();
                return (
                  await this.setPrivateKey(s),
                  (this.address = await this.getAddress(s)),
                  { id: this.id, privateKey: c(t, this), address: this.address }
                );
              }
              async getNetwork() {
                const e = await this.loadLib(l);
                return e.networks[this.networkName] || this.network;
              }
              async getAddress(e) {
                void 0 === e && (e = c(t, this));
                const a = await this.getKeyForSignFromPrivateKey(e);
                return e
                  ? this.getAddressFromPublicKey(a.publicKey)
                  : new r.WalletError({
                      type: o.WALLET_ERROR,
                      error: new Error("privateKey is empty!"),
                      instance: this,
                    });
              }
              async getAddressFromPublicKey(e) {
                const t = await this.loadLib(l);
                return t.payments.p2pkh({
                  pubkey: e,
                  network: await this.getNetwork(),
                }).address;
              }
              async validateAddress(e) {
                const t = await this.loadLib(l);
                if (!e) return !1;
                try {
                  return (
                    t.address.toOutputScript(e, await this.getNetwork()),
                    !0
                  );
                } catch (a) {
                  return !1;
                }
              }
              async getTransactionBuilder() {
                const e = await this.loadLib(l);
                return new e.TransactionBuilder(await this.getNetwork());
              }
              addInput(e, t) {
                e.addInput(t.txId, t.outputIndex);
              }
              signInput(e, t, a, r) {
                e.sign(a, t);
              }
              async createClaimTransaction(e) {
                const t = await this.getAddress(e);
                if (!t || 0 === t.length)
                  throw new r.WalletError({
                    type: o.WALLET_ERROR,
                    error: new Error(
                      "can't get a address from forked privateKey!",
                    ),
                    instance: this,
                  });
                const a = await this.getUnspentOutputs(t);
                let n = this.explorer.calculateBalance(a);
                const i = await this.getFee(n, !0, t);
                if (
                  ((n = new this.BN(n).sub(i).toString()),
                  new this.BN(n).lt(new this.BN(0)))
                )
                  throw new r.InsufficientFundsError({
                    type: o.SEND_TRANSACTION_TYPE,
                    error: new Error("Not enough otherside balance for claim"),
                    instance: this,
                  });
                let s = new this.BN(0);
                const c = [],
                  d = new this.BN(n).add(i);
                a.forEach((e) => {
                  let { txid: t, vout: a, address: r, script: o, value: n } = e;
                  if (s.lt(d)) {
                    const e = new this.BN(n);
                    ((s = s.add(e)),
                      c.push({
                        txId: t,
                        outputIndex: a,
                        address: r,
                        script: o,
                        satoshis: parseInt(n, 10),
                      }));
                  }
                });
                const l = s.sub(new this.BN(n)).sub(i);
                if (l.lt(new this.BN(0)))
                  throw new r.InsufficientFundsError({
                    type: o.SEND_TRANSACTION_TYPE,
                    error: new Error("Insufficient funds!"),
                    instance: this,
                  });
                const u = await this.buildTx(c, this.address, n, l, e, t, 1);
                return u;
              }
              async createTransaction(e) {
                let { address: t, amount: a } = e;
                const n = await this.getUnspentOutputs(),
                  i = await this.getFee({ utxos: n });
                let s = new this.BN(0);
                const c = [],
                  d = new this.BN(a).add(i);
                n.forEach((e) => {
                  if (s.lt(d)) {
                    const t = new this.BN(e.value);
                    ((s = s.add(t)),
                      c.push({
                        txId: e.txid,
                        outputIndex: e.vout,
                        addres: e.address,
                        script: e.script,
                        satoshis: parseInt(e.value, 10),
                      }));
                  }
                });
                const l = s.sub(new this.BN(a)).sub(i);
                if (l.lt(new this.BN(0)))
                  throw new r.InsufficientFundsError({
                    type: o.SEND_TRANSACTION_TYPE,
                    error: new Error("Insufficient funds!"),
                    instance: this,
                  });
                const u = await this.buildTx(c, t, a, l, void 0, void 0, 1);
                return u;
              }
              async buildTx(e, t, a, r, o, n, i) {
                return (
                  void 0 === n && (n = void 0),
                  new Promise(async (s, c) => {
                    const d = await this.getTransactionBuilder();
                    (i && "BCD" !== this.ticker && d.setVersion(i),
                      e.forEach((e) => {
                        this.addInput(d, e);
                      }),
                      d.addOutput(t, parseInt(a.toString(), 10)),
                      r.gt(new this.BN(0)) &&
                        d.addOutput(
                          n || this.address,
                          parseInt(r.toString(), 10),
                        ));
                    const l = await this.getKeyForSignFromPrivateKey(o);
                    await Promise.all(
                      e.map(async (e, t) => this.signInput(d, l, t, e)),
                    ).catch(c);
                    try {
                      const e = d.build().toHex();
                      s(e);
                    } catch (u) {
                      c(u);
                    }
                  })
                );
              }
              async getKeyForSignFromPrivateKey(e) {
                void 0 === e && (e = c(t, this));
                const a = await this.loadLib(l);
                return a.ECPair.fromWIF(e, await this.getNetwork());
              }
              async getScriptPubKey() {
                const e = await this.loadLib(l);
                return e.address
                  .toOutputScript(this.address, await this.getNetwork())
                  .toString("hex");
              }
              setPrivateKey(e) {
                s(t, this, e);
              }
            }
          );
        };
      t.default = u;
    },
    7145: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(a(5880)),
        n = a(27);
      const i = (e) =>
        class extends e {
          async getFee(e) {
            let { utxos: t = null, feePerByte: a = null } =
              void 0 === e ? {} : e;
            const r = t || (await this.getUnspentOutputs()),
              i = this.calculateBalance(r),
              s = a || this.getFeePerByte(),
              c = i.toString(),
              d = r.map((e) => {
                let { txid: t, vout: a, script: r, value: o, amount: n } = e;
                return { txId: t, vout: a, value: Number(o || n) };
              }),
              { fee: l } = (0, o.default)(
                d,
                [
                  {
                    address: n.BTC_MOCK_ADDR || this.address,
                    value: Number(c),
                  },
                ],
                Number(s.toString()),
              );
            return new this.BN(l);
          }
          getMultiplier() {
            return new this.BN(this.coefficient);
          }
          getFeePerByte() {
            return new this.BN(this.feePerByte).add(this.getMultiplier());
          }
          calculateBalance(e) {
            return (
              void 0 === e && (e = []),
              e.reduce((e, t) => {
                let { value: a } = t;
                return new this.BN(a).add(e);
              }, new this.BN("0"))
            );
          }
        };
      t.default = i;
    },
    7146: function (e, t, a) {
      "use strict";
      var r = a(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(a(5881)),
        n = a(27);
      function i(e, t, a) {
        (s(e, t), t.set(e, a));
      }
      function s(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function c(e, t, a) {
        return (e.set(l(e, t), a), a);
      }
      function d(e, t) {
        return e.get(l(e, t));
      }
      function l(e, t, a) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : a;
        throw new TypeError("Private element is not present on this object");
      }
      const { BITCORE: u } = n.LIB_NAME_INDEX,
        h = (e) => {
          var t;
          return (
            (t = new WeakMap()),
            class extends e {
              constructor() {
                (super(...arguments), i(this, t, void 0));
              }
              async getAddress() {
                const e = await this.loadLib(u);
                let a = e.PrivateKey.fromWIF(d(t, this).toString())
                  .toAddress(await this.getNetwork())
                  .toString();
                return (
                  o.default.isCashAddress(a) ||
                    (a = this.convertToCashAddress(a)),
                  a
                );
              }
              convertToLegacyAddress(e) {
                return o.default.toLegacyAddress(e);
              }
              convertToCashAddress(e) {
                return o.default.toCashAddress(e);
              }
              async validateAddress(e) {
                try {
                  return (
                    o.default.isLegacyAddress(e) || o.default.isCashAddress(e)
                  );
                } catch (t) {
                  return !1;
                }
              }
              async createTransaction(e) {
                let { address: a, amount: r } = e;
                const n = await this.loadLib(u),
                  i = await this.getUnspentOutputs(),
                  s = Number(await this.getFee(r)),
                  c = 1e3,
                  l = o.default.isCashAddress(a)
                    ? a
                    : o.default.toCashAddress(a),
                  h = o.default.isCashAddress(this.address)
                    ? this.address
                    : o.default.toCashAddress(this.address),
                  m = new n.Transaction()
                    .from(i)
                    .to(l, Number(r))
                    .fee(s)
                    .feePerKb(this.getFeePerByte() * c)
                    .change(h)
                    .sign(d(t, this));
                return m.serialize();
              }
              setPrivateKey(e) {
                (super.setPrivateKey(e), c(t, this, e));
              }
            }
          );
        };
      t.default = h;
    },
  },
]);
