(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [252],
  {
    2710: function (t, e, i) {
      "use strict";
      (function (t) {
        var r = i(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var n = r(i(69)),
          s = r(i(3090)),
          o = r(i(402)),
          a = r(i(230)),
          h = r(i(28)),
          u = r(i(73)),
          l = r(i(8)),
          c = r(i(794)),
          f = r(i(8070)),
          d = r(i(8071)),
          p = i(2806);
        function m(t, e, i) {
          (g(t, e), e.set(t, i));
        }
        function g(t, e) {
          if (e.has(t))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function w(t, e) {
          return t.get(y(t, e));
        }
        function v(t, e, i) {
          return (t.set(y(t, e), i), i);
        }
        function y(t, e, i) {
          if ("function" == typeof t ? t === e : t.has(e))
            return arguments.length < 3 ? e : i;
          throw new TypeError("Private element is not present on this object");
        }
        const M = new c.default(() =>
            Promise.resolve().then(i.t.bind(null, 6173, 7)),
          ),
          b = new c.default(() => i.e(403).then(i.t.bind(null, 11366, 7))),
          _ = "NEAR Coin",
          S = "NEAR",
          E = "m/44'/9000'/0'/0/0",
          k = 24,
          A = "100000000000000000000000",
          R = "100000000000000000000000",
          H = "25000000000000",
          B = 5,
          T = /^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/,
          x = 2,
          C = 64,
          O = 5e3;
        var P = new WeakMap();
        class NEARCoin extends (0, p.StakingMixin)(
          (0, p.HasBlockScanner)((0, p.HasProviders)(a.default)),
        ) {
          constructor(t) {
            let {
              alias: e,
              notify: i,
              feeData: r,
              explorers: o,
              txWebUrl: a,
              socket: h,
              network: u,
              id: l,
            } = t;
            const c = {
              id: l,
              alias: e,
              notify: i,
              name: _,
              ticker: S,
              decimal: k,
              txWebUrl: a,
              explorers: o,
              socket: h,
              feeData: r,
              network: u,
            };
            (super(c),
              m(this, P, void 0),
              (0, n.default)(
                this,
                "updateBalance",
                s.default.throttle(this._updateBalance, O),
              ),
              (this.derivation = E),
              this.setExplorersModules([f.default, d.default]),
              this.loadExplorers(c),
              this.setFeeData(r),
              (this.bannedTokens = []),
              (this.unspendableBalance = "0"),
              (this.network = u),
              (this.fields.paymentId = !1),
              (this.tokens = {}),
              (this.nonce = new this.BN("0")),
              (this.activationAmount = A));
          }
          setFeeData(t) {
            var e;
            (void 0 === t && (t = {}),
              super.setFeeData(t),
              (this.gasLimit = String(t.gasLimit)),
              (this.gasLimitCoefficient = t.gasLimitCoefficient || 0),
              (this.gasPriceCoefficient = t.gasPriceCoefficient || 0),
              (this.stakingGas = t.stakingGasLimit || H),
              (this.stakingGasCoefficient = t.stakingGasLimitCoefficient || B),
              (this.defaultGasPrice = this.toMinimalUnit(
                t.defaultGasPrice || "",
              )),
              (this.resendTimeout = t.resendTimeout),
              (this.reserveForStake =
                null !== (e = t.reserveForStake) && void 0 !== e ? e : R));
          }
          get stakingGasLimit() {
            return new this.BN(this.stakingGas)
              .mul(new this.BN(this.stakingGasCoefficient))
              .toString();
          }
          async loadWallet(e, i) {
            try {
              const e = await M.get(),
                { parseSeedPhrase: r } = await b.get(),
                { KeyPair: n } = e,
                s = n.fromString(r(i).secretKey);
              return (
                (this.keyPair = s),
                v(P, this, s.toString()),
                (this.address = t.from(s.getPublicKey().data).toString("hex")),
                { id: this.id, privateKey: w(P, this), address: this.address }
              );
            } catch (r) {
              return (h.default.error({ instance: this, error: r }), this);
            }
          }
          getAddress() {
            return w(P, this)
              ? this.address
              : new Error(this.wallet.ticker + " private key is empty");
          }
          validateAddress(t) {
            return (
              !t.startsWith("cosmos") &&
              t.length >= x &&
              t.length <= C &&
              T.test(t)
            );
          }
          async createDelegationTransaction(t) {
            let { amount: e, validator: i, nonce: r } = t;
            const n = await M.get(),
              { transactions: s } = n,
              o = this.keyPair.getPublicKey(),
              a = await this.getProvider("node").getAccessKey(this.address, o),
              h = n.utils.serialize.base_decode(a.block_hash),
              u = [
                s.functionCall(
                  "deposit_and_stake",
                  {},
                  this.stakingGasLimit,
                  e,
                ),
              ],
              l = n.transactions.createTransaction(
                this.address,
                o,
                i,
                a.nonce + 1,
                u,
                h,
              );
            return this.serializeAndSignTransaction(l);
          }
          async createUnDelegationTransaction(t) {
            let { amount: e, validator: i, nonce: r } = t;
            const n = await M.get(),
              { transactions: s } = n,
              o = this.keyPair.getPublicKey(),
              a = await this.getProvider("node").getAccessKey(this.address, o),
              h = n.utils.serialize.base_decode(a.block_hash),
              u = [
                s.functionCall(
                  "unstake",
                  { amount: null !== e && void 0 !== e ? e : void 0 },
                  this.stakingGasLimit,
                  "0",
                ),
              ],
              l = n.transactions.createTransaction(
                this.address,
                o,
                i,
                a.nonce + 1,
                u,
                h,
              );
            return this.serializeAndSignTransaction(l);
          }
          async createWithdrawDelegationTransaction(t) {
            let { validator: e, nonce: i } = t;
            const r = await M.get(),
              { transactions: n } = r,
              s = this.keyPair.getPublicKey(),
              o = await this.getProvider("node").getAccessKey(this.address, s),
              a = r.utils.serialize.base_decode(o.block_hash),
              h = [
                n.functionCall("withdraw_all", {}, this.stakingGasLimit, "0"),
              ],
              u = r.transactions.createTransaction(
                this.address,
                s,
                e,
                o.nonce + 1,
                h,
                a,
              );
            return this.serializeAndSignTransaction(u);
          }
          async createTransaction(t) {
            let { address: e, amount: i, nonce: r } = t;
            const n = await M.get(),
              s = this.keyPair.getPublicKey(),
              o = await this.getProvider("node").getAccessKey(this.address, s),
              a = n.utils.serialize.base_decode(o.block_hash),
              h = [
                new n.transactions.Action({
                  transfer: new n.transactions.Transfer({ deposit: i }),
                }),
              ],
              u = n.transactions.createTransaction(
                this.address,
                s,
                e,
                r || o.nonce + 1,
                h,
                a,
              );
            return this.serializeAndSignTransaction(u);
          }
          async serializeTransaction(t) {
            const e = await M.get(),
              i = e.utils.serialize.serialize(e.transactions.SCHEMA, t);
            return {
              txHash: new Uint8Array((0, o.default)(i, { asBytes: !0 })),
              rawTx: t,
            };
          }
          async signTransaction(e) {
            let { txHash: i, rawTx: r } = e;
            const n = await M.get(),
              { signature: s } = this.keyPair.sign(i),
              o = new n.transactions.SignedTransaction({
                transaction: r,
                signature: new n.transactions.Signature({
                  keyType: r.publicKey.keyType,
                  data: s,
                }),
              });
            return t.from(o.encode()).toString("base64");
          }
          async serializeAndSignTransaction(t) {
            return this.signTransaction(await this.serializeTransaction(t));
          }
          async getFee(t) {
            let {
              userGasPrice: e = null,
              gasLimit: i = null,
              contract: r,
              address: n,
            } = void 0 === t ? {} : t;
            return new this.BN(i || (await this.estimateGas(null, n, r))).mul(
              new this.BN(e || (await this.getGasPrice())),
            );
          }
          async getGasPrice(t, e) {
            (void 0 === t && (t = !1), void 0 === e && (e = !1));
            const i = await this.getProvider("node").getGasPrice();
            return t
              ? new this.BN(i || this.defaultGasPrice)
              : new this.BN(i || this.defaultGasPrice).add(
                  new this.BN(this.gasPriceCoefficient),
                );
          }
          async estimateGas(t, e, i) {
            const r = await this.getProvider("node").getNodeConfig();
            if (!r)
              return new this.BN(this.gasLimit)
                .add(new this.BN(this.gasLimitCoefficient))
                .toString();
            const n = [
                r.runtime_config.transaction_costs
                  .action_receipt_creation_config,
                r.runtime_config.transaction_costs.action_creation_config[
                  i ? "transfer_cost" : "function_call_cost"
                ],
              ],
              s = [
                e === this.address ? "send_sir" : "send_not_sir",
                "execution",
              ];
            return n
              .reduce(
                (t, e) =>
                  t.add(
                    s.reduce(
                      (t, i) => t.add(new this.BN(e[i])),
                      new this.BN(0),
                    ),
                  ),
                new this.BN(0),
              )
              .add(new this.BN(this.gasLimitCoefficient))
              .toString();
          }
          async availableBalance(t) {
            await this.updateBalance();
            const e = new this.BN(this.balance)
              .sub(
                new this.BN(
                  new this.BN(t).gt(new this.BN(0)) ? t : await this.getFee(),
                ),
              )
              .sub(new this.BN(this.unspendableBalance));
            return e.gt(new this.BN(0)) ? this.toCurrencyUnit(e) : "0";
          }
          async _updateBalance() {
            try {
              const { balance: t, unspendable: e } = await this.getProvider(
                "node",
              ).getInfo(this.address, {
                gasLimit: this.stakingGasLimit,
                gasPrice: await this.getGasPrice(),
                reserve: new this.BN(this.reserveForStake),
              });
              if (!t) throw new Error(this.ticker + " can't get balance");
              ((this.balance = t), (this.unspendableBalance = e));
            } catch (t) {
              h.default.error({ instance: this, error: t });
            }
          }
          async getInfo() {
            if (!this.address)
              throw new Error(this.ticker + " address not found");
            return (
              await this.updateBalance(),
              { balance: this.balance, balances: this.balances }
            );
          }
          async getStakingInfo() {
            null === this.balance && (await this.updateBalance());
            const t = await this.getProvider("node").fetchStakingInfo(
              this.address,
              {
                activeValidators: await l.default.get(
                  this.getPredefineValidatorsConfigName(),
                ),
              },
            );
            return (
              this.setBalances(await this.makeStakingInfoStruct(t)),
              { balances: this.balances }
            );
          }
          calculateTotal(t) {
            let { balance: e, staked: i, unstaking: r } = t;
            return new u.default(
              e.toBN().add(i.toBN()).add(r.toBN()).toString(),
              this,
            );
          }
          async calculateAvailableForStake() {
            const t = await this.getFee({ gasLimit: this.stakingGasLimit }),
              e = new this.BN(this.balance)
                .sub(new this.BN(this.reserveForStake))
                .sub(t)
                .sub(new this.BN(this.unspendableBalance));
            return new u.default(e.isNeg() ? "0" : e, this);
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(t, e) {
            this.loadWallet("", e);
          }
          async checkTransaction(t) {
            await super.checkTransaction({
              feeTicker: this.ticker,
              ...t,
              fee: null,
            });
          }
          async getBalance() {
            return (await this.getInfo()).balance;
          }
        }
        e.default = NEARCoin;
      }).call(this, i(2).Buffer);
    },
    2807: function (t, e) {},
    3053: function (t, e) {},
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
          s =
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
          o =
            (this && this.__decorate) ||
            function (t, e, i, r) {
              var n,
                s = arguments.length,
                o =
                  s < 3
                    ? e
                    : null === r
                      ? (r = Object.getOwnPropertyDescriptor(e, i))
                      : r;
              if (
                "object" === typeof Reflect &&
                "function" === typeof Reflect.decorate
              )
                o = Reflect.decorate(t, e, i, r);
              else
                for (var a = t.length - 1; a >= 0; a--)
                  (n = t[a]) &&
                    (o = (s < 3 ? n(o) : s > 3 ? n(e, i, o) : n(e, i)) || o);
              return (s > 3 && o && Object.defineProperty(e, i, o), o);
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
              return (s(e, t), e);
            },
          h =
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
        const u = h(i(4920)),
          l = h(i(234)),
          c = a(i(843)),
          f =
            "function" !== typeof t.TextDecoder ? c.TextDecoder : t.TextDecoder,
          d = new f("utf-8", { fatal: !0 });
        function p(t) {
          return (
            "string" === typeof t && (t = r.from(t, "utf8")),
            l.default.encode(r.from(t))
          );
        }
        function m(t) {
          return r.from(l.default.decode(t));
        }
        ((e.baseEncode = p), (e.baseDecode = m));
        const g = 1024;
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
            ((this.buf = r.alloc(g)), (this.length = 0));
          }
          maybeResize() {
            this.buf.length < 16 + this.length &&
              (this.buf = r.concat([this.buf, r.alloc(g)]));
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
              this.writeBuffer(r.from(new u.default(t).toArray("le", 8))));
          }
          writeU128(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new u.default(t).toArray("le", 16))));
          }
          writeU256(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new u.default(t).toArray("le", 32))));
          }
          writeU512(t) {
            (this.maybeResize(),
              this.writeBuffer(r.from(new u.default(t).toArray("le", 64))));
          }
          writeBuffer(t) {
            ((this.buf = r.concat([
              r.from(this.buf.subarray(0, this.length)),
              t,
              r.alloc(g),
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
        function w(t, e, i) {
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
            return new u.default(t, "le");
          }
          readU128() {
            const t = this.readBuffer(16);
            return new u.default(t, "le");
          }
          readU256() {
            const t = this.readBuffer(32);
            return new u.default(t, "le");
          }
          readU512() {
            const t = this.readBuffer(64);
            return new u.default(t, "le");
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
              return d.decode(e);
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
        function v(t) {
          return t.charAt(0).toUpperCase() + t.slice(1);
        }
        function y(t, e, i, r, n) {
          try {
            if ("string" === typeof r) n["write" + v(r)](i);
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
                for (let e = 0; e < r[1]; e++) y(t, null, i[e], r[0], n);
              } else
                n.writeArray(i, (i) => {
                  y(t, e, i, r[0], n);
                });
            else if (void 0 !== r.kind)
              switch (r.kind) {
                case "option":
                  null === i || void 0 === i
                    ? n.writeU8(0)
                    : (n.writeU8(1), y(t, e, i, r.type, n));
                  break;
                default:
                  throw new BorshError(`FieldType ${r} unrecognized`);
              }
            else M(t, i, n);
          } catch (s) {
            throw (s instanceof BorshError && s.addToFieldPath(e), s);
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
              let [n, s] = r;
              y(t, n, e[n], s, i);
            });
          else {
            if ("enum" !== r.kind)
              throw new BorshError(
                `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`,
              );
            {
              const n = e[r.field];
              for (let s = 0; s < r.values.length; ++s) {
                const [o, a] = r.values[s];
                if (o === n) {
                  (i.writeU8(s), y(t, o, e[o], a, i));
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
            if ("string" === typeof i) return r["read" + v(i)]();
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
            return S(t, i, r);
          } catch (n) {
            throw (n instanceof BorshError && n.addToFieldPath(e), n);
          }
        }
        function S(t, e, i) {
          if ("function" === typeof e.borshDeserialize)
            return e.borshDeserialize(i);
          const r = t.get(e);
          if (!r) throw new BorshError(`Class ${e.name} is missing in schema`);
          if ("struct" === r.kind) {
            const r = {};
            for (const [n, s] of t.get(e).fields) r[n] = _(t, n, s, i);
            return new e(r);
          }
          if ("enum" === r.kind) {
            const n = i.readU8();
            if (n >= r.values.length)
              throw new BorshError(`Enum index: ${n} is out of range`);
            const [s, o] = r.values[n],
              a = _(t, s, o, i);
            return new e({ [s]: a });
          }
          throw new BorshError(
            `Unexpected schema kind: ${r.kind} for ${e.constructor.name}`,
          );
        }
        function E(t, e, i, r) {
          void 0 === r && (r = BinaryReader);
          const n = new r(i),
            s = S(t, e, n);
          if (n.offset < i.length)
            throw new BorshError(
              `Unexpected ${i.length - n.offset} bytes after deserialized data`,
            );
          return s;
        }
        function k(t, e, i, r) {
          void 0 === r && (r = BinaryReader);
          const n = new r(i);
          return S(t, e, n);
        }
        (o([w], BinaryReader.prototype, "readU8", null),
          o([w], BinaryReader.prototype, "readU16", null),
          o([w], BinaryReader.prototype, "readU32", null),
          o([w], BinaryReader.prototype, "readU64", null),
          o([w], BinaryReader.prototype, "readU128", null),
          o([w], BinaryReader.prototype, "readU256", null),
          o([w], BinaryReader.prototype, "readU512", null),
          o([w], BinaryReader.prototype, "readString", null),
          o([w], BinaryReader.prototype, "readFixedArray", null),
          o([w], BinaryReader.prototype, "readArray", null),
          (e.BinaryReader = BinaryReader),
          (e.serialize = b),
          (e.deserialize = E),
          (e.deserializeUnchecked = k));
      }).call(this, i(13), i(2).Buffer);
    },
    3900: function (t, e, i) {
      "use strict";
      function r(t) {
        if (!t) throw new TypeError("argument namespace is required");
        function e(t) {}
        return (
          (e._file = void 0),
          (e._ignored = !0),
          (e._namespace = t),
          (e._traced = !1),
          (e._warned = Object.create(null)),
          (e.function = n),
          (e.property = s),
          e
        );
      }
      function n(t, e) {
        if ("function" !== typeof t)
          throw new TypeError("argument fn must be a function");
        return t;
      }
      function s(t, e, i) {
        if (!t || ("object" !== typeof t && "function" !== typeof t))
          throw new TypeError("argument obj must be object");
        var r = Object.getOwnPropertyDescriptor(t, e);
        if (!r) throw new TypeError("must call property on owner object");
        if (!r.configurable)
          throw new TypeError("property must be configurable");
      }
      t.exports = r;
    },
    4616: function (module, exports, __webpack_require__) {
      (function (process, global) {
        var __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * [js-sha256]{@link https://github.com/emn178/js-sha256}
         *
         * @version 0.9.0
         * @author Chen, Yi-Cyuan [emn178@gmail.com]
         * @copyright Chen, Yi-Cyuan 2014-2017
         * @license MIT
         */ (function () {
          "use strict";
          var ERROR = "input is invalid type",
            WINDOW = "object" === typeof window,
            root = WINDOW ? window : {};
          root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
          var WEB_WORKER = !WINDOW && "object" === typeof self,
            NODE_JS =
              !root.JS_SHA256_NO_NODE_JS &&
              "object" === typeof process &&
              process.versions &&
              process.versions.node;
          NODE_JS ? (root = global) : WEB_WORKER && (root = self);
          var COMMON_JS =
              !root.JS_SHA256_NO_COMMON_JS &&
              "object" === typeof module &&
              module.exports,
            AMD = __webpack_require__(826),
            ARRAY_BUFFER =
              !root.JS_SHA256_NO_ARRAY_BUFFER &&
              "undefined" !== typeof ArrayBuffer,
            HEX_CHARS = "0123456789abcdef".split(""),
            EXTRA = [-2147483648, 8388608, 32768, 128],
            SHIFT = [24, 16, 8, 0],
            K = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ],
            OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
            blocks = [];
          ((!root.JS_SHA256_NO_NODE_JS && Array.isArray) ||
            (Array.isArray = function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            }),
            !ARRAY_BUFFER ||
              (!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
              (ArrayBuffer.isView = function (t) {
                return (
                  "object" === typeof t &&
                  t.buffer &&
                  t.buffer.constructor === ArrayBuffer
                );
              }));
          var createOutputMethod = function (t, e) {
              return function (i) {
                return new Sha256(e, !0).update(i)[t]();
              };
            },
            createMethod = function (t) {
              var e = createOutputMethod("hex", t);
              (NODE_JS && (e = nodeWrap(e, t)),
                (e.create = function () {
                  return new Sha256(t);
                }),
                (e.update = function (t) {
                  return e.create().update(t);
                }));
              for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                var r = OUTPUT_TYPES[i];
                e[r] = createOutputMethod(r, t);
              }
              return e;
            },
            nodeWrap = function (method, is224) {
              var crypto = eval("require('crypto')"),
                Buffer = eval("require('buffer').Buffer"),
                algorithm = is224 ? "sha224" : "sha256",
                nodeMethod = function (t) {
                  if ("string" === typeof t)
                    return crypto
                      .createHash(algorithm)
                      .update(t, "utf8")
                      .digest("hex");
                  if (null === t || void 0 === t) throw new Error(ERROR);
                  return (
                    t.constructor === ArrayBuffer && (t = new Uint8Array(t)),
                    Array.isArray(t) ||
                    ArrayBuffer.isView(t) ||
                    t.constructor === Buffer
                      ? crypto
                          .createHash(algorithm)
                          .update(new Buffer(t))
                          .digest("hex")
                      : method(t)
                  );
                };
              return nodeMethod;
            },
            createHmacOutputMethod = function (t, e) {
              return function (i, r) {
                return new HmacSha256(i, e, !0).update(r)[t]();
              };
            },
            createHmacMethod = function (t) {
              var e = createHmacOutputMethod("hex", t);
              ((e.create = function (e) {
                return new HmacSha256(e, t);
              }),
                (e.update = function (t, i) {
                  return e.create(t).update(i);
                }));
              for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
                var r = OUTPUT_TYPES[i];
                e[r] = createHmacOutputMethod(r, t);
              }
              return e;
            };
          function Sha256(t, e) {
            (e
              ? ((blocks[0] =
                  blocks[16] =
                  blocks[1] =
                  blocks[2] =
                  blocks[3] =
                  blocks[4] =
                  blocks[5] =
                  blocks[6] =
                  blocks[7] =
                  blocks[8] =
                  blocks[9] =
                  blocks[10] =
                  blocks[11] =
                  blocks[12] =
                  blocks[13] =
                  blocks[14] =
                  blocks[15] =
                    0),
                (this.blocks = blocks))
              : (this.blocks = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                ]),
              t
                ? ((this.h0 = 3238371032),
                  (this.h1 = 914150663),
                  (this.h2 = 812702999),
                  (this.h3 = 4144912697),
                  (this.h4 = 4290775857),
                  (this.h5 = 1750603025),
                  (this.h6 = 1694076839),
                  (this.h7 = 3204075428))
                : ((this.h0 = 1779033703),
                  (this.h1 = 3144134277),
                  (this.h2 = 1013904242),
                  (this.h3 = 2773480762),
                  (this.h4 = 1359893119),
                  (this.h5 = 2600822924),
                  (this.h6 = 528734635),
                  (this.h7 = 1541459225)),
              (this.block = this.start = this.bytes = this.hBytes = 0),
              (this.finalized = this.hashed = !1),
              (this.first = !0),
              (this.is224 = t));
          }
          function HmacSha256(t, e, i) {
            var r,
              n = typeof t;
            if ("string" === n) {
              var s,
                o = [],
                a = t.length,
                h = 0;
              for (r = 0; r < a; ++r)
                ((s = t.charCodeAt(r)),
                  s < 128
                    ? (o[h++] = s)
                    : s < 2048
                      ? ((o[h++] = 192 | (s >> 6)), (o[h++] = 128 | (63 & s)))
                      : s < 55296 || s >= 57344
                        ? ((o[h++] = 224 | (s >> 12)),
                          (o[h++] = 128 | ((s >> 6) & 63)),
                          (o[h++] = 128 | (63 & s)))
                        : ((s =
                            65536 +
                            (((1023 & s) << 10) | (1023 & t.charCodeAt(++r)))),
                          (o[h++] = 240 | (s >> 18)),
                          (o[h++] = 128 | ((s >> 12) & 63)),
                          (o[h++] = 128 | ((s >> 6) & 63)),
                          (o[h++] = 128 | (63 & s))));
              t = o;
            } else {
              if ("object" !== n) throw new Error(ERROR);
              if (null === t) throw new Error(ERROR);
              if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                t = new Uint8Array(t);
              else if (
                !Array.isArray(t) &&
                (!ARRAY_BUFFER || !ArrayBuffer.isView(t))
              )
                throw new Error(ERROR);
            }
            t.length > 64 && (t = new Sha256(e, !0).update(t).array());
            var u = [],
              l = [];
            for (r = 0; r < 64; ++r) {
              var c = t[r] || 0;
              ((u[r] = 92 ^ c), (l[r] = 54 ^ c));
            }
            (Sha256.call(this, e, i),
              this.update(l),
              (this.oKeyPad = u),
              (this.inner = !0),
              (this.sharedMemory = i));
          }
          ((Sha256.prototype.update = function (t) {
            if (!this.finalized) {
              var e,
                i = typeof t;
              if ("string" !== i) {
                if ("object" !== i) throw new Error(ERROR);
                if (null === t) throw new Error(ERROR);
                if (ARRAY_BUFFER && t.constructor === ArrayBuffer)
                  t = new Uint8Array(t);
                else if (
                  !Array.isArray(t) &&
                  (!ARRAY_BUFFER || !ArrayBuffer.isView(t))
                )
                  throw new Error(ERROR);
                e = !0;
              }
              var r,
                n,
                s = 0,
                o = t.length,
                a = this.blocks;
              while (s < o) {
                if (
                  (this.hashed &&
                    ((this.hashed = !1),
                    (a[0] = this.block),
                    (a[16] =
                      a[1] =
                      a[2] =
                      a[3] =
                      a[4] =
                      a[5] =
                      a[6] =
                      a[7] =
                      a[8] =
                      a[9] =
                      a[10] =
                      a[11] =
                      a[12] =
                      a[13] =
                      a[14] =
                      a[15] =
                        0)),
                  e)
                )
                  for (n = this.start; s < o && n < 64; ++s)
                    a[n >> 2] |= t[s] << SHIFT[3 & n++];
                else
                  for (n = this.start; s < o && n < 64; ++s)
                    ((r = t.charCodeAt(s)),
                      r < 128
                        ? (a[n >> 2] |= r << SHIFT[3 & n++])
                        : r < 2048
                          ? ((a[n >> 2] |= (192 | (r >> 6)) << SHIFT[3 & n++]),
                            (a[n >> 2] |= (128 | (63 & r)) << SHIFT[3 & n++]))
                          : r < 55296 || r >= 57344
                            ? ((a[n >> 2] |=
                                (224 | (r >> 12)) << SHIFT[3 & n++]),
                              (a[n >> 2] |=
                                (128 | ((r >> 6) & 63)) << SHIFT[3 & n++]),
                              (a[n >> 2] |= (128 | (63 & r)) << SHIFT[3 & n++]))
                            : ((r =
                                65536 +
                                (((1023 & r) << 10) |
                                  (1023 & t.charCodeAt(++s)))),
                              (a[n >> 2] |=
                                (240 | (r >> 18)) << SHIFT[3 & n++]),
                              (a[n >> 2] |=
                                (128 | ((r >> 12) & 63)) << SHIFT[3 & n++]),
                              (a[n >> 2] |=
                                (128 | ((r >> 6) & 63)) << SHIFT[3 & n++]),
                              (a[n >> 2] |=
                                (128 | (63 & r)) << SHIFT[3 & n++])));
                ((this.lastByteIndex = n),
                  (this.bytes += n - this.start),
                  n >= 64
                    ? ((this.block = a[16]),
                      (this.start = n - 64),
                      this.hash(),
                      (this.hashed = !0))
                    : (this.start = n));
              }
              return (
                this.bytes > 4294967295 &&
                  ((this.hBytes += (this.bytes / 4294967296) << 0),
                  (this.bytes = this.bytes % 4294967296)),
                this
              );
            }
          }),
            (Sha256.prototype.finalize = function () {
              if (!this.finalized) {
                this.finalized = !0;
                var t = this.blocks,
                  e = this.lastByteIndex;
                ((t[16] = this.block),
                  (t[e >> 2] |= EXTRA[3 & e]),
                  (this.block = t[16]),
                  e >= 56 &&
                    (this.hashed || this.hash(),
                    (t[0] = this.block),
                    (t[16] =
                      t[1] =
                      t[2] =
                      t[3] =
                      t[4] =
                      t[5] =
                      t[6] =
                      t[7] =
                      t[8] =
                      t[9] =
                      t[10] =
                      t[11] =
                      t[12] =
                      t[13] =
                      t[14] =
                      t[15] =
                        0)),
                  (t[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                  (t[15] = this.bytes << 3),
                  this.hash());
              }
            }),
            (Sha256.prototype.hash = function () {
              var t,
                e,
                i,
                r,
                n,
                s,
                o,
                a,
                h,
                u,
                l,
                c = this.h0,
                f = this.h1,
                d = this.h2,
                p = this.h3,
                m = this.h4,
                g = this.h5,
                w = this.h6,
                v = this.h7,
                y = this.blocks;
              for (t = 16; t < 64; ++t)
                ((n = y[t - 15]),
                  (e =
                    ((n >>> 7) | (n << 25)) ^
                    ((n >>> 18) | (n << 14)) ^
                    (n >>> 3)),
                  (n = y[t - 2]),
                  (i =
                    ((n >>> 17) | (n << 15)) ^
                    ((n >>> 19) | (n << 13)) ^
                    (n >>> 10)),
                  (y[t] = (y[t - 16] + e + y[t - 7] + i) << 0));
              for (l = f & d, t = 0; t < 64; t += 4)
                (this.first
                  ? (this.is224
                      ? ((a = 300032),
                        (n = y[0] - 1413257819),
                        (v = (n - 150054599) << 0),
                        (p = (n + 24177077) << 0))
                      : ((a = 704751109),
                        (n = y[0] - 210244248),
                        (v = (n - 1521486534) << 0),
                        (p = (n + 143694565) << 0)),
                    (this.first = !1))
                  : ((e =
                      ((c >>> 2) | (c << 30)) ^
                      ((c >>> 13) | (c << 19)) ^
                      ((c >>> 22) | (c << 10))),
                    (i =
                      ((m >>> 6) | (m << 26)) ^
                      ((m >>> 11) | (m << 21)) ^
                      ((m >>> 25) | (m << 7))),
                    (a = c & f),
                    (r = a ^ (c & d) ^ l),
                    (o = (m & g) ^ (~m & w)),
                    (n = v + i + o + K[t] + y[t]),
                    (s = e + r),
                    (v = (p + n) << 0),
                    (p = (n + s) << 0)),
                  (e =
                    ((p >>> 2) | (p << 30)) ^
                    ((p >>> 13) | (p << 19)) ^
                    ((p >>> 22) | (p << 10))),
                  (i =
                    ((v >>> 6) | (v << 26)) ^
                    ((v >>> 11) | (v << 21)) ^
                    ((v >>> 25) | (v << 7))),
                  (h = p & c),
                  (r = h ^ (p & f) ^ a),
                  (o = (v & m) ^ (~v & g)),
                  (n = w + i + o + K[t + 1] + y[t + 1]),
                  (s = e + r),
                  (w = (d + n) << 0),
                  (d = (n + s) << 0),
                  (e =
                    ((d >>> 2) | (d << 30)) ^
                    ((d >>> 13) | (d << 19)) ^
                    ((d >>> 22) | (d << 10))),
                  (i =
                    ((w >>> 6) | (w << 26)) ^
                    ((w >>> 11) | (w << 21)) ^
                    ((w >>> 25) | (w << 7))),
                  (u = d & p),
                  (r = u ^ (d & c) ^ h),
                  (o = (w & v) ^ (~w & m)),
                  (n = g + i + o + K[t + 2] + y[t + 2]),
                  (s = e + r),
                  (g = (f + n) << 0),
                  (f = (n + s) << 0),
                  (e =
                    ((f >>> 2) | (f << 30)) ^
                    ((f >>> 13) | (f << 19)) ^
                    ((f >>> 22) | (f << 10))),
                  (i =
                    ((g >>> 6) | (g << 26)) ^
                    ((g >>> 11) | (g << 21)) ^
                    ((g >>> 25) | (g << 7))),
                  (l = f & d),
                  (r = l ^ (f & p) ^ u),
                  (o = (g & w) ^ (~g & v)),
                  (n = m + i + o + K[t + 3] + y[t + 3]),
                  (s = e + r),
                  (m = (c + n) << 0),
                  (c = (n + s) << 0));
              ((this.h0 = (this.h0 + c) << 0),
                (this.h1 = (this.h1 + f) << 0),
                (this.h2 = (this.h2 + d) << 0),
                (this.h3 = (this.h3 + p) << 0),
                (this.h4 = (this.h4 + m) << 0),
                (this.h5 = (this.h5 + g) << 0),
                (this.h6 = (this.h6 + w) << 0),
                (this.h7 = (this.h7 + v) << 0));
            }),
            (Sha256.prototype.hex = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                i = this.h2,
                r = this.h3,
                n = this.h4,
                s = this.h5,
                o = this.h6,
                a = this.h7,
                h =
                  HEX_CHARS[(t >> 28) & 15] +
                  HEX_CHARS[(t >> 24) & 15] +
                  HEX_CHARS[(t >> 20) & 15] +
                  HEX_CHARS[(t >> 16) & 15] +
                  HEX_CHARS[(t >> 12) & 15] +
                  HEX_CHARS[(t >> 8) & 15] +
                  HEX_CHARS[(t >> 4) & 15] +
                  HEX_CHARS[15 & t] +
                  HEX_CHARS[(e >> 28) & 15] +
                  HEX_CHARS[(e >> 24) & 15] +
                  HEX_CHARS[(e >> 20) & 15] +
                  HEX_CHARS[(e >> 16) & 15] +
                  HEX_CHARS[(e >> 12) & 15] +
                  HEX_CHARS[(e >> 8) & 15] +
                  HEX_CHARS[(e >> 4) & 15] +
                  HEX_CHARS[15 & e] +
                  HEX_CHARS[(i >> 28) & 15] +
                  HEX_CHARS[(i >> 24) & 15] +
                  HEX_CHARS[(i >> 20) & 15] +
                  HEX_CHARS[(i >> 16) & 15] +
                  HEX_CHARS[(i >> 12) & 15] +
                  HEX_CHARS[(i >> 8) & 15] +
                  HEX_CHARS[(i >> 4) & 15] +
                  HEX_CHARS[15 & i] +
                  HEX_CHARS[(r >> 28) & 15] +
                  HEX_CHARS[(r >> 24) & 15] +
                  HEX_CHARS[(r >> 20) & 15] +
                  HEX_CHARS[(r >> 16) & 15] +
                  HEX_CHARS[(r >> 12) & 15] +
                  HEX_CHARS[(r >> 8) & 15] +
                  HEX_CHARS[(r >> 4) & 15] +
                  HEX_CHARS[15 & r] +
                  HEX_CHARS[(n >> 28) & 15] +
                  HEX_CHARS[(n >> 24) & 15] +
                  HEX_CHARS[(n >> 20) & 15] +
                  HEX_CHARS[(n >> 16) & 15] +
                  HEX_CHARS[(n >> 12) & 15] +
                  HEX_CHARS[(n >> 8) & 15] +
                  HEX_CHARS[(n >> 4) & 15] +
                  HEX_CHARS[15 & n] +
                  HEX_CHARS[(s >> 28) & 15] +
                  HEX_CHARS[(s >> 24) & 15] +
                  HEX_CHARS[(s >> 20) & 15] +
                  HEX_CHARS[(s >> 16) & 15] +
                  HEX_CHARS[(s >> 12) & 15] +
                  HEX_CHARS[(s >> 8) & 15] +
                  HEX_CHARS[(s >> 4) & 15] +
                  HEX_CHARS[15 & s] +
                  HEX_CHARS[(o >> 28) & 15] +
                  HEX_CHARS[(o >> 24) & 15] +
                  HEX_CHARS[(o >> 20) & 15] +
                  HEX_CHARS[(o >> 16) & 15] +
                  HEX_CHARS[(o >> 12) & 15] +
                  HEX_CHARS[(o >> 8) & 15] +
                  HEX_CHARS[(o >> 4) & 15] +
                  HEX_CHARS[15 & o];
              return (
                this.is224 ||
                  (h +=
                    HEX_CHARS[(a >> 28) & 15] +
                    HEX_CHARS[(a >> 24) & 15] +
                    HEX_CHARS[(a >> 20) & 15] +
                    HEX_CHARS[(a >> 16) & 15] +
                    HEX_CHARS[(a >> 12) & 15] +
                    HEX_CHARS[(a >> 8) & 15] +
                    HEX_CHARS[(a >> 4) & 15] +
                    HEX_CHARS[15 & a]),
                h
              );
            }),
            (Sha256.prototype.toString = Sha256.prototype.hex),
            (Sha256.prototype.digest = function () {
              this.finalize();
              var t = this.h0,
                e = this.h1,
                i = this.h2,
                r = this.h3,
                n = this.h4,
                s = this.h5,
                o = this.h6,
                a = this.h7,
                h = [
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                  (e >> 24) & 255,
                  (e >> 16) & 255,
                  (e >> 8) & 255,
                  255 & e,
                  (i >> 24) & 255,
                  (i >> 16) & 255,
                  (i >> 8) & 255,
                  255 & i,
                  (r >> 24) & 255,
                  (r >> 16) & 255,
                  (r >> 8) & 255,
                  255 & r,
                  (n >> 24) & 255,
                  (n >> 16) & 255,
                  (n >> 8) & 255,
                  255 & n,
                  (s >> 24) & 255,
                  (s >> 16) & 255,
                  (s >> 8) & 255,
                  255 & s,
                  (o >> 24) & 255,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o,
                ];
              return (
                this.is224 ||
                  h.push(
                    (a >> 24) & 255,
                    (a >> 16) & 255,
                    (a >> 8) & 255,
                    255 & a,
                  ),
                h
              );
            }),
            (Sha256.prototype.array = Sha256.prototype.digest),
            (Sha256.prototype.arrayBuffer = function () {
              this.finalize();
              var t = new ArrayBuffer(this.is224 ? 28 : 32),
                e = new DataView(t);
              return (
                e.setUint32(0, this.h0),
                e.setUint32(4, this.h1),
                e.setUint32(8, this.h2),
                e.setUint32(12, this.h3),
                e.setUint32(16, this.h4),
                e.setUint32(20, this.h5),
                e.setUint32(24, this.h6),
                this.is224 || e.setUint32(28, this.h7),
                t
              );
            }),
            (HmacSha256.prototype = new Sha256()),
            (HmacSha256.prototype.finalize = function () {
              if ((Sha256.prototype.finalize.call(this), this.inner)) {
                this.inner = !1;
                var t = this.array();
                (Sha256.call(this, this.is224, this.sharedMemory),
                  this.update(this.oKeyPad),
                  this.update(t),
                  Sha256.prototype.finalize.call(this));
              }
            }));
          var exports = createMethod();
          ((exports.sha256 = exports),
            (exports.sha224 = createMethod(!0)),
            (exports.sha256.hmac = createHmacMethod()),
            (exports.sha224.hmac = createHmacMethod(!0)),
            COMMON_JS
              ? (module.exports = exports)
              : ((root.sha256 = exports.sha256),
                (root.sha224 = exports.sha224),
                AMD &&
                  ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                    return exports;
                  }.call(exports, __webpack_require__, exports, module)),
                  void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                    (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))));
        })();
      }).call(this, __webpack_require__(18), __webpack_require__(13));
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
          function s(t, e, i) {
            if (s.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((i = e), (e = 10)),
                this._init(t || 0, e || 10, i || "be")));
          }
          var o;
          ("object" === typeof t ? (t.exports = s) : (e.BN = s),
            (s.BN = s),
            (s.wordSize = 26));
          try {
            o =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : i(4921).Buffer;
          } catch (T) {}
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
          function h(t, e, i) {
            var r = a(t, i);
            return (i - 1 >= e && (r |= a(t, i - 1) << 4), r);
          }
          function u(t, e, i, n) {
            for (
              var s = 0, o = 0, a = Math.min(t.length, i), h = e;
              h < a;
              h++
            ) {
              var u = t.charCodeAt(h) - 48;
              ((s *= n),
                (o = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u),
                r(u >= 0 && o < n, "Invalid character"),
                (s += o));
            }
            return s;
          }
          function l(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((s.isBN = function (t) {
              return (
                t instanceof s ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === s.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (s.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (s.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (s.prototype._init = function (t, e, i) {
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
            (s.prototype._initNumber = function (t, e, i) {
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
            (s.prototype._initArray = function (t, e, i) {
              if ((r("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var s,
                o,
                a = 0;
              if ("be" === i)
                for (n = t.length - 1, s = 0; n >= 0; n -= 3)
                  ((o = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++));
              else if ("le" === i)
                for (n = 0, s = 0; n < t.length; n += 3)
                  ((o = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++));
              return this._strip();
            }),
            (s.prototype._parseHex = function (t, e, i) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var r = 0; r < this.length; r++) this.words[r] = 0;
              var n,
                s = 0,
                o = 0;
              if ("be" === i)
                for (r = t.length - 1; r >= e; r -= 2)
                  ((n = h(t, e, r) << s),
                    (this.words[o] |= 67108863 & n),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26))
                      : (s += 8));
              else {
                var a = t.length - e;
                for (r = a % 2 === 0 ? e + 1 : e; r < t.length; r += 2)
                  ((n = h(t, e, r) << s),
                    (this.words[o] |= 67108863 & n),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26))
                      : (s += 8));
              }
              this._strip();
            }),
            (s.prototype._parseBase = function (t, e, i) {
              ((this.words = [0]), (this.length = 1));
              for (var r = 0, n = 1; n <= 67108863; n *= e) r++;
              (r--, (n = (n / e) | 0));
              for (
                var s = t.length - i,
                  o = s % r,
                  a = Math.min(s, s - o) + i,
                  h = 0,
                  l = i;
                l < a;
                l += r
              )
                ((h = u(t, l, l + r, e)),
                  this.imuln(n),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              if (0 !== o) {
                var c = 1;
                for (h = u(t, l, t.length, e), l = 0; l < o; l++) c *= e;
                (this.imuln(c),
                  this.words[0] + h < 67108864
                    ? (this.words[0] += h)
                    : this._iaddn(h));
              }
              this._strip();
            }),
            (s.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (s.prototype._move = function (t) {
              l(t, this);
            }),
            (s.prototype.clone = function () {
              var t = new s(null);
              return (this.copy(t), t);
            }),
            (s.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
              return this;
            }),
            (s.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (s.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              s.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
            } catch (T) {
              s.prototype.inspect = c;
            }
          else s.prototype.inspect = c;
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var f = [
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
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((s.prototype.toString = function (t, e) {
            var i;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              i = "";
              for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  h = (16777215 & ((a << n) | s)).toString(16);
                ((s = (a >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), o--),
                  (i =
                    0 !== s || o !== this.length - 1
                      ? f[6 - h.length] + h + i
                      : h + i));
              }
              0 !== s && (i = s.toString(16) + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var u = d[t],
                l = p[t];
              i = "";
              var c = this.clone();
              c.negative = 0;
              while (!c.isZero()) {
                var m = c.modrn(l).toString(t);
                ((c = c.idivn(l)),
                  (i = c.isZero() ? m + i : f[u - m.length] + m + i));
              }
              this.isZero() && (i = "0" + i);
              while (i.length % e !== 0) i = "0" + i;
              return (0 !== this.negative && (i = "-" + i), i);
            }
            r(!1, "Base should be between 2 and 36");
          }),
            (s.prototype.toNumber = function () {
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
            (s.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            o &&
              (s.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(o, t, e);
              }),
            (s.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var m = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function g(t) {
            for (var e = new Array(t.bitLength()), i = 0; i < e.length; i++) {
              var r = (i / 26) | 0,
                n = i % 26;
              e[i] = (t.words[r] >>> n) & 1;
            }
            return e;
          }
          function w(t, e, i) {
            i.negative = e.negative ^ t.negative;
            var r = (t.length + e.length) | 0;
            ((i.length = r), (r = (r - 1) | 0));
            var n = 0 | t.words[0],
              s = 0 | e.words[0],
              o = n * s,
              a = 67108863 & o,
              h = (o / 67108864) | 0;
            i.words[0] = a;
            for (var u = 1; u < r; u++) {
              for (
                var l = h >>> 26,
                  c = 67108863 & h,
                  f = Math.min(u, e.length - 1),
                  d = Math.max(0, u - t.length + 1);
                d <= f;
                d++
              ) {
                var p = (u - d) | 0;
                ((n = 0 | t.words[p]),
                  (s = 0 | e.words[d]),
                  (o = n * s + c),
                  (l += (o / 67108864) | 0),
                  (c = 67108863 & o));
              }
              ((i.words[u] = 0 | c), (h = 0 | l));
            }
            return (0 !== h ? (i.words[u] = 0 | h) : i.length--, i._strip());
          }
          ((s.prototype.toArrayLike = function (t, e, i) {
            this._strip();
            var n = this.byteLength(),
              s = i || Math.max(1, n);
            (r(n <= s, "byte array longer than desired length"),
              r(s > 0, "Requested array length <= 0"));
            var o = m(t, s),
              a = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + a](o, n), o);
          }),
            (s.prototype._toArrayLikeLE = function (t, e) {
              for (var i = 0, r = 0, n = 0, s = 0; n < this.length; n++) {
                var o = (this.words[n] << s) | r;
                ((t[i++] = 255 & o),
                  i < t.length && (t[i++] = (o >> 8) & 255),
                  i < t.length && (t[i++] = (o >> 16) & 255),
                  6 === s
                    ? (i < t.length && (t[i++] = (o >> 24) & 255),
                      (r = 0),
                      (s = 0))
                    : ((r = o >>> 24), (s += 2)));
              }
              if (i < t.length) {
                t[i++] = r;
                while (i < t.length) t[i++] = 0;
              }
            }),
            (s.prototype._toArrayLikeBE = function (t, e) {
              for (
                var i = t.length - 1, r = 0, n = 0, s = 0;
                n < this.length;
                n++
              ) {
                var o = (this.words[n] << s) | r;
                ((t[i--] = 255 & o),
                  i >= 0 && (t[i--] = (o >> 8) & 255),
                  i >= 0 && (t[i--] = (o >> 16) & 255),
                  6 === s
                    ? (i >= 0 && (t[i--] = (o >> 24) & 255), (r = 0), (s = 0))
                    : ((r = o >>> 24), (s += 2)));
              }
              if (i >= 0) {
                t[i--] = r;
                while (i >= 0) t[i--] = 0;
              }
            }),
            Math.clz32
              ? (s.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (s.prototype._countBits = function (t) {
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
            (s.prototype._zeroBits = function (t) {
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
            (s.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (s.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var i = this._zeroBits(this.words[e]);
                if (((t += i), 26 !== i)) break;
              }
              return t;
            }),
            (s.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
                : this.clone();
            }),
            (s.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (s.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (s.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (s.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (s.prototype.ior = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (s.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (s.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (s.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var i = 0; i < e.length; i++)
                this.words[i] = this.words[i] & t.words[i];
              return ((this.length = e.length), this._strip());
            }),
            (s.prototype.iand = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (s.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (s.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (s.prototype.iuxor = function (t) {
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
            (s.prototype.ixor = function (t) {
              return (r(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (s.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (s.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (s.prototype.inotn = function (t) {
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
            (s.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (s.prototype.setn = function (t, e) {
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
            (s.prototype.iadd = function (t) {
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
              for (var n = 0, s = 0; s < r.length; s++)
                ((e = (0 | i.words[s]) + (0 | r.words[s]) + n),
                  (this.words[s] = 67108863 & e),
                  (n = e >>> 26));
              for (; 0 !== n && s < i.length; s++)
                ((e = (0 | i.words[s]) + n),
                  (this.words[s] = 67108863 & e),
                  (n = e >>> 26));
              if (((this.length = i.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (i !== this)
                for (; s < i.length; s++) this.words[s] = i.words[s];
              return this;
            }),
            (s.prototype.add = function (t) {
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
            (s.prototype.isub = function (t) {
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
              for (var s = 0, o = 0; o < r.length; o++)
                ((e = (0 | i.words[o]) - (0 | r.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e));
              for (; 0 !== s && o < i.length; o++)
                ((e = (0 | i.words[o]) + s),
                  (s = e >> 26),
                  (this.words[o] = 67108863 & e));
              if (0 === s && o < i.length && i !== this)
                for (; o < i.length; o++) this.words[o] = i.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                i !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (s.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var v = function (t, e, i) {
            var r,
              n,
              s,
              o = t.words,
              a = e.words,
              h = i.words,
              u = 0,
              l = 0 | o[0],
              c = 8191 & l,
              f = l >>> 13,
              d = 0 | o[1],
              p = 8191 & d,
              m = d >>> 13,
              g = 0 | o[2],
              w = 8191 & g,
              v = g >>> 13,
              y = 0 | o[3],
              M = 8191 & y,
              b = y >>> 13,
              _ = 0 | o[4],
              S = 8191 & _,
              E = _ >>> 13,
              k = 0 | o[5],
              A = 8191 & k,
              R = k >>> 13,
              H = 0 | o[6],
              B = 8191 & H,
              T = H >>> 13,
              x = 0 | o[7],
              C = 8191 & x,
              O = x >>> 13,
              P = 0 | o[8],
              N = 8191 & P,
              U = P >>> 13,
              F = 0 | o[9],
              j = 8191 & F,
              X = F >>> 13,
              I = 0 | a[0],
              z = 8191 & I,
              L = I >>> 13,
              D = 0 | a[1],
              W = 8191 & D,
              q = D >>> 13,
              G = 0 | a[2],
              V = 8191 & G,
              Z = G >>> 13,
              J = 0 | a[3],
              $ = 8191 & J,
              Y = J >>> 13,
              Q = 0 | a[4],
              tt = 8191 & Q,
              et = Q >>> 13,
              it = 0 | a[5],
              rt = 8191 & it,
              nt = it >>> 13,
              st = 0 | a[6],
              ot = 8191 & st,
              at = st >>> 13,
              ht = 0 | a[7],
              ut = 8191 & ht,
              lt = ht >>> 13,
              ct = 0 | a[8],
              ft = 8191 & ct,
              dt = ct >>> 13,
              pt = 0 | a[9],
              mt = 8191 & pt,
              gt = pt >>> 13;
            ((i.negative = t.negative ^ e.negative),
              (i.length = 19),
              (r = Math.imul(c, z)),
              (n = Math.imul(c, L)),
              (n = (n + Math.imul(f, z)) | 0),
              (s = Math.imul(f, L)));
            var wt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (r = Math.imul(p, z)),
              (n = Math.imul(p, L)),
              (n = (n + Math.imul(m, z)) | 0),
              (s = Math.imul(m, L)),
              (r = (r + Math.imul(c, W)) | 0),
              (n = (n + Math.imul(c, q)) | 0),
              (n = (n + Math.imul(f, W)) | 0),
              (s = (s + Math.imul(f, q)) | 0));
            var vt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (r = Math.imul(w, z)),
              (n = Math.imul(w, L)),
              (n = (n + Math.imul(v, z)) | 0),
              (s = Math.imul(v, L)),
              (r = (r + Math.imul(p, W)) | 0),
              (n = (n + Math.imul(p, q)) | 0),
              (n = (n + Math.imul(m, W)) | 0),
              (s = (s + Math.imul(m, q)) | 0),
              (r = (r + Math.imul(c, V)) | 0),
              (n = (n + Math.imul(c, Z)) | 0),
              (n = (n + Math.imul(f, V)) | 0),
              (s = (s + Math.imul(f, Z)) | 0));
            var yt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (r = Math.imul(M, z)),
              (n = Math.imul(M, L)),
              (n = (n + Math.imul(b, z)) | 0),
              (s = Math.imul(b, L)),
              (r = (r + Math.imul(w, W)) | 0),
              (n = (n + Math.imul(w, q)) | 0),
              (n = (n + Math.imul(v, W)) | 0),
              (s = (s + Math.imul(v, q)) | 0),
              (r = (r + Math.imul(p, V)) | 0),
              (n = (n + Math.imul(p, Z)) | 0),
              (n = (n + Math.imul(m, V)) | 0),
              (s = (s + Math.imul(m, Z)) | 0),
              (r = (r + Math.imul(c, $)) | 0),
              (n = (n + Math.imul(c, Y)) | 0),
              (n = (n + Math.imul(f, $)) | 0),
              (s = (s + Math.imul(f, Y)) | 0));
            var Mt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (r = Math.imul(S, z)),
              (n = Math.imul(S, L)),
              (n = (n + Math.imul(E, z)) | 0),
              (s = Math.imul(E, L)),
              (r = (r + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(M, q)) | 0),
              (n = (n + Math.imul(b, W)) | 0),
              (s = (s + Math.imul(b, q)) | 0),
              (r = (r + Math.imul(w, V)) | 0),
              (n = (n + Math.imul(w, Z)) | 0),
              (n = (n + Math.imul(v, V)) | 0),
              (s = (s + Math.imul(v, Z)) | 0),
              (r = (r + Math.imul(p, $)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (n = (n + Math.imul(m, $)) | 0),
              (s = (s + Math.imul(m, Y)) | 0),
              (r = (r + Math.imul(c, tt)) | 0),
              (n = (n + Math.imul(c, et)) | 0),
              (n = (n + Math.imul(f, tt)) | 0),
              (s = (s + Math.imul(f, et)) | 0));
            var bt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (r = Math.imul(A, z)),
              (n = Math.imul(A, L)),
              (n = (n + Math.imul(R, z)) | 0),
              (s = Math.imul(R, L)),
              (r = (r + Math.imul(S, W)) | 0),
              (n = (n + Math.imul(S, q)) | 0),
              (n = (n + Math.imul(E, W)) | 0),
              (s = (s + Math.imul(E, q)) | 0),
              (r = (r + Math.imul(M, V)) | 0),
              (n = (n + Math.imul(M, Z)) | 0),
              (n = (n + Math.imul(b, V)) | 0),
              (s = (s + Math.imul(b, Z)) | 0),
              (r = (r + Math.imul(w, $)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (n = (n + Math.imul(v, $)) | 0),
              (s = (s + Math.imul(v, Y)) | 0),
              (r = (r + Math.imul(p, tt)) | 0),
              (n = (n + Math.imul(p, et)) | 0),
              (n = (n + Math.imul(m, tt)) | 0),
              (s = (s + Math.imul(m, et)) | 0),
              (r = (r + Math.imul(c, rt)) | 0),
              (n = (n + Math.imul(c, nt)) | 0),
              (n = (n + Math.imul(f, rt)) | 0),
              (s = (s + Math.imul(f, nt)) | 0));
            var _t = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (r = Math.imul(B, z)),
              (n = Math.imul(B, L)),
              (n = (n + Math.imul(T, z)) | 0),
              (s = Math.imul(T, L)),
              (r = (r + Math.imul(A, W)) | 0),
              (n = (n + Math.imul(A, q)) | 0),
              (n = (n + Math.imul(R, W)) | 0),
              (s = (s + Math.imul(R, q)) | 0),
              (r = (r + Math.imul(S, V)) | 0),
              (n = (n + Math.imul(S, Z)) | 0),
              (n = (n + Math.imul(E, V)) | 0),
              (s = (s + Math.imul(E, Z)) | 0),
              (r = (r + Math.imul(M, $)) | 0),
              (n = (n + Math.imul(M, Y)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (s = (s + Math.imul(b, Y)) | 0),
              (r = (r + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(w, et)) | 0),
              (n = (n + Math.imul(v, tt)) | 0),
              (s = (s + Math.imul(v, et)) | 0),
              (r = (r + Math.imul(p, rt)) | 0),
              (n = (n + Math.imul(p, nt)) | 0),
              (n = (n + Math.imul(m, rt)) | 0),
              (s = (s + Math.imul(m, nt)) | 0),
              (r = (r + Math.imul(c, ot)) | 0),
              (n = (n + Math.imul(c, at)) | 0),
              (n = (n + Math.imul(f, ot)) | 0),
              (s = (s + Math.imul(f, at)) | 0));
            var St = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (r = Math.imul(C, z)),
              (n = Math.imul(C, L)),
              (n = (n + Math.imul(O, z)) | 0),
              (s = Math.imul(O, L)),
              (r = (r + Math.imul(B, W)) | 0),
              (n = (n + Math.imul(B, q)) | 0),
              (n = (n + Math.imul(T, W)) | 0),
              (s = (s + Math.imul(T, q)) | 0),
              (r = (r + Math.imul(A, V)) | 0),
              (n = (n + Math.imul(A, Z)) | 0),
              (n = (n + Math.imul(R, V)) | 0),
              (s = (s + Math.imul(R, Z)) | 0),
              (r = (r + Math.imul(S, $)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (s = (s + Math.imul(E, Y)) | 0),
              (r = (r + Math.imul(M, tt)) | 0),
              (n = (n + Math.imul(M, et)) | 0),
              (n = (n + Math.imul(b, tt)) | 0),
              (s = (s + Math.imul(b, et)) | 0),
              (r = (r + Math.imul(w, rt)) | 0),
              (n = (n + Math.imul(w, nt)) | 0),
              (n = (n + Math.imul(v, rt)) | 0),
              (s = (s + Math.imul(v, nt)) | 0),
              (r = (r + Math.imul(p, ot)) | 0),
              (n = (n + Math.imul(p, at)) | 0),
              (n = (n + Math.imul(m, ot)) | 0),
              (s = (s + Math.imul(m, at)) | 0),
              (r = (r + Math.imul(c, ut)) | 0),
              (n = (n + Math.imul(c, lt)) | 0),
              (n = (n + Math.imul(f, ut)) | 0),
              (s = (s + Math.imul(f, lt)) | 0));
            var Et = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (r = Math.imul(N, z)),
              (n = Math.imul(N, L)),
              (n = (n + Math.imul(U, z)) | 0),
              (s = Math.imul(U, L)),
              (r = (r + Math.imul(C, W)) | 0),
              (n = (n + Math.imul(C, q)) | 0),
              (n = (n + Math.imul(O, W)) | 0),
              (s = (s + Math.imul(O, q)) | 0),
              (r = (r + Math.imul(B, V)) | 0),
              (n = (n + Math.imul(B, Z)) | 0),
              (n = (n + Math.imul(T, V)) | 0),
              (s = (s + Math.imul(T, Z)) | 0),
              (r = (r + Math.imul(A, $)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (n = (n + Math.imul(R, $)) | 0),
              (s = (s + Math.imul(R, Y)) | 0),
              (r = (r + Math.imul(S, tt)) | 0),
              (n = (n + Math.imul(S, et)) | 0),
              (n = (n + Math.imul(E, tt)) | 0),
              (s = (s + Math.imul(E, et)) | 0),
              (r = (r + Math.imul(M, rt)) | 0),
              (n = (n + Math.imul(M, nt)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (s = (s + Math.imul(b, nt)) | 0),
              (r = (r + Math.imul(w, ot)) | 0),
              (n = (n + Math.imul(w, at)) | 0),
              (n = (n + Math.imul(v, ot)) | 0),
              (s = (s + Math.imul(v, at)) | 0),
              (r = (r + Math.imul(p, ut)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (n = (n + Math.imul(m, ut)) | 0),
              (s = (s + Math.imul(m, lt)) | 0),
              (r = (r + Math.imul(c, ft)) | 0),
              (n = (n + Math.imul(c, dt)) | 0),
              (n = (n + Math.imul(f, ft)) | 0),
              (s = (s + Math.imul(f, dt)) | 0));
            var kt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (kt >>> 26)) | 0),
              (kt &= 67108863),
              (r = Math.imul(j, z)),
              (n = Math.imul(j, L)),
              (n = (n + Math.imul(X, z)) | 0),
              (s = Math.imul(X, L)),
              (r = (r + Math.imul(N, W)) | 0),
              (n = (n + Math.imul(N, q)) | 0),
              (n = (n + Math.imul(U, W)) | 0),
              (s = (s + Math.imul(U, q)) | 0),
              (r = (r + Math.imul(C, V)) | 0),
              (n = (n + Math.imul(C, Z)) | 0),
              (n = (n + Math.imul(O, V)) | 0),
              (s = (s + Math.imul(O, Z)) | 0),
              (r = (r + Math.imul(B, $)) | 0),
              (n = (n + Math.imul(B, Y)) | 0),
              (n = (n + Math.imul(T, $)) | 0),
              (s = (s + Math.imul(T, Y)) | 0),
              (r = (r + Math.imul(A, tt)) | 0),
              (n = (n + Math.imul(A, et)) | 0),
              (n = (n + Math.imul(R, tt)) | 0),
              (s = (s + Math.imul(R, et)) | 0),
              (r = (r + Math.imul(S, rt)) | 0),
              (n = (n + Math.imul(S, nt)) | 0),
              (n = (n + Math.imul(E, rt)) | 0),
              (s = (s + Math.imul(E, nt)) | 0),
              (r = (r + Math.imul(M, ot)) | 0),
              (n = (n + Math.imul(M, at)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (s = (s + Math.imul(b, at)) | 0),
              (r = (r + Math.imul(w, ut)) | 0),
              (n = (n + Math.imul(w, lt)) | 0),
              (n = (n + Math.imul(v, ut)) | 0),
              (s = (s + Math.imul(v, lt)) | 0),
              (r = (r + Math.imul(p, ft)) | 0),
              (n = (n + Math.imul(p, dt)) | 0),
              (n = (n + Math.imul(m, ft)) | 0),
              (s = (s + Math.imul(m, dt)) | 0),
              (r = (r + Math.imul(c, mt)) | 0),
              (n = (n + Math.imul(c, gt)) | 0),
              (n = (n + Math.imul(f, mt)) | 0),
              (s = (s + Math.imul(f, gt)) | 0));
            var At = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (r = Math.imul(j, W)),
              (n = Math.imul(j, q)),
              (n = (n + Math.imul(X, W)) | 0),
              (s = Math.imul(X, q)),
              (r = (r + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(N, Z)) | 0),
              (n = (n + Math.imul(U, V)) | 0),
              (s = (s + Math.imul(U, Z)) | 0),
              (r = (r + Math.imul(C, $)) | 0),
              (n = (n + Math.imul(C, Y)) | 0),
              (n = (n + Math.imul(O, $)) | 0),
              (s = (s + Math.imul(O, Y)) | 0),
              (r = (r + Math.imul(B, tt)) | 0),
              (n = (n + Math.imul(B, et)) | 0),
              (n = (n + Math.imul(T, tt)) | 0),
              (s = (s + Math.imul(T, et)) | 0),
              (r = (r + Math.imul(A, rt)) | 0),
              (n = (n + Math.imul(A, nt)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (s = (s + Math.imul(R, nt)) | 0),
              (r = (r + Math.imul(S, ot)) | 0),
              (n = (n + Math.imul(S, at)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (s = (s + Math.imul(E, at)) | 0),
              (r = (r + Math.imul(M, ut)) | 0),
              (n = (n + Math.imul(M, lt)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (s = (s + Math.imul(b, lt)) | 0),
              (r = (r + Math.imul(w, ft)) | 0),
              (n = (n + Math.imul(w, dt)) | 0),
              (n = (n + Math.imul(v, ft)) | 0),
              (s = (s + Math.imul(v, dt)) | 0),
              (r = (r + Math.imul(p, mt)) | 0),
              (n = (n + Math.imul(p, gt)) | 0),
              (n = (n + Math.imul(m, mt)) | 0),
              (s = (s + Math.imul(m, gt)) | 0));
            var Rt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (r = Math.imul(j, V)),
              (n = Math.imul(j, Z)),
              (n = (n + Math.imul(X, V)) | 0),
              (s = Math.imul(X, Z)),
              (r = (r + Math.imul(N, $)) | 0),
              (n = (n + Math.imul(N, Y)) | 0),
              (n = (n + Math.imul(U, $)) | 0),
              (s = (s + Math.imul(U, Y)) | 0),
              (r = (r + Math.imul(C, tt)) | 0),
              (n = (n + Math.imul(C, et)) | 0),
              (n = (n + Math.imul(O, tt)) | 0),
              (s = (s + Math.imul(O, et)) | 0),
              (r = (r + Math.imul(B, rt)) | 0),
              (n = (n + Math.imul(B, nt)) | 0),
              (n = (n + Math.imul(T, rt)) | 0),
              (s = (s + Math.imul(T, nt)) | 0),
              (r = (r + Math.imul(A, ot)) | 0),
              (n = (n + Math.imul(A, at)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (s = (s + Math.imul(R, at)) | 0),
              (r = (r + Math.imul(S, ut)) | 0),
              (n = (n + Math.imul(S, lt)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (s = (s + Math.imul(E, lt)) | 0),
              (r = (r + Math.imul(M, ft)) | 0),
              (n = (n + Math.imul(M, dt)) | 0),
              (n = (n + Math.imul(b, ft)) | 0),
              (s = (s + Math.imul(b, dt)) | 0),
              (r = (r + Math.imul(w, mt)) | 0),
              (n = (n + Math.imul(w, gt)) | 0),
              (n = (n + Math.imul(v, mt)) | 0),
              (s = (s + Math.imul(v, gt)) | 0));
            var Ht = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Ht >>> 26)) | 0),
              (Ht &= 67108863),
              (r = Math.imul(j, $)),
              (n = Math.imul(j, Y)),
              (n = (n + Math.imul(X, $)) | 0),
              (s = Math.imul(X, Y)),
              (r = (r + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(N, et)) | 0),
              (n = (n + Math.imul(U, tt)) | 0),
              (s = (s + Math.imul(U, et)) | 0),
              (r = (r + Math.imul(C, rt)) | 0),
              (n = (n + Math.imul(C, nt)) | 0),
              (n = (n + Math.imul(O, rt)) | 0),
              (s = (s + Math.imul(O, nt)) | 0),
              (r = (r + Math.imul(B, ot)) | 0),
              (n = (n + Math.imul(B, at)) | 0),
              (n = (n + Math.imul(T, ot)) | 0),
              (s = (s + Math.imul(T, at)) | 0),
              (r = (r + Math.imul(A, ut)) | 0),
              (n = (n + Math.imul(A, lt)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (s = (s + Math.imul(R, lt)) | 0),
              (r = (r + Math.imul(S, ft)) | 0),
              (n = (n + Math.imul(S, dt)) | 0),
              (n = (n + Math.imul(E, ft)) | 0),
              (s = (s + Math.imul(E, dt)) | 0),
              (r = (r + Math.imul(M, mt)) | 0),
              (n = (n + Math.imul(M, gt)) | 0),
              (n = (n + Math.imul(b, mt)) | 0),
              (s = (s + Math.imul(b, gt)) | 0));
            var Bt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (r = Math.imul(j, tt)),
              (n = Math.imul(j, et)),
              (n = (n + Math.imul(X, tt)) | 0),
              (s = Math.imul(X, et)),
              (r = (r + Math.imul(N, rt)) | 0),
              (n = (n + Math.imul(N, nt)) | 0),
              (n = (n + Math.imul(U, rt)) | 0),
              (s = (s + Math.imul(U, nt)) | 0),
              (r = (r + Math.imul(C, ot)) | 0),
              (n = (n + Math.imul(C, at)) | 0),
              (n = (n + Math.imul(O, ot)) | 0),
              (s = (s + Math.imul(O, at)) | 0),
              (r = (r + Math.imul(B, ut)) | 0),
              (n = (n + Math.imul(B, lt)) | 0),
              (n = (n + Math.imul(T, ut)) | 0),
              (s = (s + Math.imul(T, lt)) | 0),
              (r = (r + Math.imul(A, ft)) | 0),
              (n = (n + Math.imul(A, dt)) | 0),
              (n = (n + Math.imul(R, ft)) | 0),
              (s = (s + Math.imul(R, dt)) | 0),
              (r = (r + Math.imul(S, mt)) | 0),
              (n = (n + Math.imul(S, gt)) | 0),
              (n = (n + Math.imul(E, mt)) | 0),
              (s = (s + Math.imul(E, gt)) | 0));
            var Tt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Tt >>> 26)) | 0),
              (Tt &= 67108863),
              (r = Math.imul(j, rt)),
              (n = Math.imul(j, nt)),
              (n = (n + Math.imul(X, rt)) | 0),
              (s = Math.imul(X, nt)),
              (r = (r + Math.imul(N, ot)) | 0),
              (n = (n + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(U, ot)) | 0),
              (s = (s + Math.imul(U, at)) | 0),
              (r = (r + Math.imul(C, ut)) | 0),
              (n = (n + Math.imul(C, lt)) | 0),
              (n = (n + Math.imul(O, ut)) | 0),
              (s = (s + Math.imul(O, lt)) | 0),
              (r = (r + Math.imul(B, ft)) | 0),
              (n = (n + Math.imul(B, dt)) | 0),
              (n = (n + Math.imul(T, ft)) | 0),
              (s = (s + Math.imul(T, dt)) | 0),
              (r = (r + Math.imul(A, mt)) | 0),
              (n = (n + Math.imul(A, gt)) | 0),
              (n = (n + Math.imul(R, mt)) | 0),
              (s = (s + Math.imul(R, gt)) | 0));
            var xt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (r = Math.imul(j, ot)),
              (n = Math.imul(j, at)),
              (n = (n + Math.imul(X, ot)) | 0),
              (s = Math.imul(X, at)),
              (r = (r + Math.imul(N, ut)) | 0),
              (n = (n + Math.imul(N, lt)) | 0),
              (n = (n + Math.imul(U, ut)) | 0),
              (s = (s + Math.imul(U, lt)) | 0),
              (r = (r + Math.imul(C, ft)) | 0),
              (n = (n + Math.imul(C, dt)) | 0),
              (n = (n + Math.imul(O, ft)) | 0),
              (s = (s + Math.imul(O, dt)) | 0),
              (r = (r + Math.imul(B, mt)) | 0),
              (n = (n + Math.imul(B, gt)) | 0),
              (n = (n + Math.imul(T, mt)) | 0),
              (s = (s + Math.imul(T, gt)) | 0));
            var Ct = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (r = Math.imul(j, ut)),
              (n = Math.imul(j, lt)),
              (n = (n + Math.imul(X, ut)) | 0),
              (s = Math.imul(X, lt)),
              (r = (r + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(U, ft)) | 0),
              (s = (s + Math.imul(U, dt)) | 0),
              (r = (r + Math.imul(C, mt)) | 0),
              (n = (n + Math.imul(C, gt)) | 0),
              (n = (n + Math.imul(O, mt)) | 0),
              (s = (s + Math.imul(O, gt)) | 0));
            var Ot = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (r = Math.imul(j, ft)),
              (n = Math.imul(j, dt)),
              (n = (n + Math.imul(X, ft)) | 0),
              (s = Math.imul(X, dt)),
              (r = (r + Math.imul(N, mt)) | 0),
              (n = (n + Math.imul(N, gt)) | 0),
              (n = (n + Math.imul(U, mt)) | 0),
              (s = (s + Math.imul(U, gt)) | 0));
            var Pt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            ((u = (((s + (n >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (r = Math.imul(j, mt)),
              (n = Math.imul(j, gt)),
              (n = (n + Math.imul(X, mt)) | 0),
              (s = Math.imul(X, gt)));
            var Nt = (((u + r) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (u = (((s + (n >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (h[0] = wt),
              (h[1] = vt),
              (h[2] = yt),
              (h[3] = Mt),
              (h[4] = bt),
              (h[5] = _t),
              (h[6] = St),
              (h[7] = Et),
              (h[8] = kt),
              (h[9] = At),
              (h[10] = Rt),
              (h[11] = Ht),
              (h[12] = Bt),
              (h[13] = Tt),
              (h[14] = xt),
              (h[15] = Ct),
              (h[16] = Ot),
              (h[17] = Pt),
              (h[18] = Nt),
              0 !== u && ((h[19] = u), i.length++),
              i
            );
          };
          function y(t, e, i) {
            ((i.negative = e.negative ^ t.negative),
              (i.length = t.length + e.length));
            for (var r = 0, n = 0, s = 0; s < i.length - 1; s++) {
              var o = n;
              n = 0;
              for (
                var a = 67108863 & r,
                  h = Math.min(s, e.length - 1),
                  u = Math.max(0, s - t.length + 1);
                u <= h;
                u++
              ) {
                var l = s - u,
                  c = 0 | t.words[l],
                  f = 0 | e.words[u],
                  d = c * f,
                  p = 67108863 & d;
                ((o = (o + ((d / 67108864) | 0)) | 0),
                  (p = (p + a) | 0),
                  (a = 67108863 & p),
                  (o = (o + (p >>> 26)) | 0),
                  (n += o >>> 26),
                  (o &= 67108863));
              }
              ((i.words[s] = a), (r = o), (o = n));
            }
            return (0 !== r ? (i.words[s] = r) : i.length--, i._strip());
          }
          function M(t, e, i) {
            return y(t, e, i);
          }
          function b(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (v = w),
            (s.prototype.mulTo = function (t, e) {
              var i,
                r = this.length + t.length;
              return (
                (i =
                  10 === this.length && 10 === t.length
                    ? v(this, t, e)
                    : r < 63
                      ? w(this, t, e)
                      : r < 1024
                        ? y(this, t, e)
                        : M(this, t, e)),
                i
              );
            }),
            (b.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), i = s.prototype._countBits(t) - 1, r = 0;
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
            (b.prototype.permute = function (t, e, i, r, n, s) {
              for (var o = 0; o < s; o++) ((r[o] = e[t[o]]), (n[o] = i[t[o]]));
            }),
            (b.prototype.transform = function (t, e, i, r, n, s) {
              this.permute(s, t, e, i, r, n);
              for (var o = 1; o < n; o <<= 1)
                for (
                  var a = o << 1,
                    h = Math.cos((2 * Math.PI) / a),
                    u = Math.sin((2 * Math.PI) / a),
                    l = 0;
                  l < n;
                  l += a
                )
                  for (var c = h, f = u, d = 0; d < o; d++) {
                    var p = i[l + d],
                      m = r[l + d],
                      g = i[l + d + o],
                      w = r[l + d + o],
                      v = c * g - f * w;
                    ((w = c * w + f * g),
                      (g = v),
                      (i[l + d] = p + g),
                      (r[l + d] = m + w),
                      (i[l + d + o] = p - g),
                      (r[l + d + o] = m - w),
                      d !== a &&
                        ((v = h * c - u * f), (f = h * f + u * c), (c = v)));
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
              for (var s = 0, o = 0; o < e; o++)
                ((s += 0 | t[o]),
                  (i[2 * o] = 8191 & s),
                  (s >>>= 13),
                  (i[2 * o + 1] = 8191 & s),
                  (s >>>= 13));
              for (o = 2 * e; o < n; ++o) i[o] = 0;
              (r(0 === s), r(0 === (-8192 & s)));
            }),
            (b.prototype.stub = function (t) {
              for (var e = new Array(t), i = 0; i < t; i++) e[i] = 0;
              return e;
            }),
            (b.prototype.mulp = function (t, e, i) {
              var r = 2 * this.guessLen13b(t.length, e.length),
                n = this.makeRBT(r),
                s = this.stub(r),
                o = new Array(r),
                a = new Array(r),
                h = new Array(r),
                u = new Array(r),
                l = new Array(r),
                c = new Array(r),
                f = i.words;
              ((f.length = r),
                this.convert13b(t.words, t.length, o, r),
                this.convert13b(e.words, e.length, u, r),
                this.transform(o, s, a, h, r, n),
                this.transform(u, s, l, c, r, n));
              for (var d = 0; d < r; d++) {
                var p = a[d] * l[d] - h[d] * c[d];
                ((h[d] = a[d] * c[d] + h[d] * l[d]), (a[d] = p));
              }
              return (
                this.conjugate(a, h, r),
                this.transform(a, h, f, s, r, n),
                this.conjugate(f, s, r),
                this.normalize13b(f, r),
                (i.negative = t.negative ^ e.negative),
                (i.length = t.length + e.length),
                i._strip()
              );
            }),
            (s.prototype.mul = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (s.prototype.mulf = function (t) {
              var e = new s(null);
              return (
                (e.words = new Array(this.length + t.length)),
                M(this, t, e)
              );
            }),
            (s.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (s.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), r("number" === typeof t), r(t < 67108864));
              for (var i = 0, n = 0; n < this.length; n++) {
                var s = (0 | this.words[n]) * t,
                  o = (67108863 & s) + (67108863 & i);
                ((i >>= 26),
                  (i += (s / 67108864) | 0),
                  (i += o >>> 26),
                  (this.words[n] = 67108863 & o));
              }
              return (
                0 !== i && ((this.words[n] = i), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (s.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (s.prototype.sqr = function () {
              return this.mul(this);
            }),
            (s.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function (t) {
              var e = g(t);
              if (0 === e.length) return new s(1);
              for (var i = this, r = 0; r < e.length; r++, i = i.sqr())
                if (0 !== e[r]) break;
              if (++r < e.length)
                for (var n = i.sqr(); r < e.length; r++, n = n.sqr())
                  0 !== e[r] && (i = i.mul(n));
              return i;
            }),
            (s.prototype.iushln = function (t) {
              r("number" === typeof t && t >= 0);
              var e,
                i = t % 26,
                n = (t - i) / 26,
                s = (67108863 >>> (26 - i)) << (26 - i);
              if (0 !== i) {
                var o = 0;
                for (e = 0; e < this.length; e++) {
                  var a = this.words[e] & s,
                    h = ((0 | this.words[e]) - a) << i;
                  ((this.words[e] = h | o), (o = a >>> (26 - i)));
                }
                o && ((this.words[e] = o), this.length++);
              }
              if (0 !== n) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + n] = this.words[e];
                for (e = 0; e < n; e++) this.words[e] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (s.prototype.ishln = function (t) {
              return (r(0 === this.negative), this.iushln(t));
            }),
            (s.prototype.iushrn = function (t, e, i) {
              var n;
              (r("number" === typeof t && t >= 0),
                (n = e ? (e - (e % 26)) / 26 : 0));
              var s = t % 26,
                o = Math.min((t - s) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> s) << s),
                h = i;
              if (((n -= o), (n = Math.max(0, n)), h)) {
                for (var u = 0; u < o; u++) h.words[u] = this.words[u];
                h.length = o;
              }
              if (0 === o);
              else if (this.length > o)
                for (this.length -= o, u = 0; u < this.length; u++)
                  this.words[u] = this.words[u + o];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (u = this.length - 1; u >= 0 && (0 !== l || u >= n); u--) {
                var c = 0 | this.words[u];
                ((this.words[u] = (l << (26 - s)) | (c >>> s)), (l = c & a));
              }
              return (
                h && 0 !== l && (h.words[h.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (s.prototype.ishrn = function (t, e, i) {
              return (r(0 === this.negative), this.iushrn(t, e, i));
            }),
            (s.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (s.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (s.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (s.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (s.prototype.testn = function (t) {
              r("number" === typeof t && t >= 0);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i) return !1;
              var s = this.words[i];
              return !!(s & n);
            }),
            (s.prototype.imaskn = function (t) {
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
            (s.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (s.prototype.iaddn = function (t) {
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
            (s.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (s.prototype.isubn = function (t) {
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
            (s.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (s.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (s.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (s.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function (t, e, i) {
              var n,
                s,
                o = t.length + i;
              this._expand(o);
              var a = 0;
              for (n = 0; n < t.length; n++) {
                s = (0 | this.words[n + i]) + a;
                var h = (0 | t.words[n]) * e;
                ((s -= 67108863 & h),
                  (a = (s >> 26) - ((h / 67108864) | 0)),
                  (this.words[n + i] = 67108863 & s));
              }
              for (; n < this.length - i; n++)
                ((s = (0 | this.words[n + i]) + a),
                  (a = s >> 26),
                  (this.words[n + i] = 67108863 & s));
              if (0 === a) return this._strip();
              for (r(-1 === a), a = 0, n = 0; n < this.length; n++)
                ((s = -(0 | this.words[n]) + a),
                  (a = s >> 26),
                  (this.words[n] = 67108863 & s));
              return ((this.negative = 1), this._strip());
            }),
            (s.prototype._wordDiv = function (t, e) {
              var i = this.length - t.length,
                r = this.clone(),
                n = t,
                o = 0 | n.words[n.length - 1],
                a = this._countBits(o);
              ((i = 26 - a),
                0 !== i &&
                  ((n = n.ushln(i)),
                  r.iushln(i),
                  (o = 0 | n.words[n.length - 1])));
              var h,
                u = r.length - n.length;
              if ("mod" !== e) {
                ((h = new s(null)),
                  (h.length = u + 1),
                  (h.words = new Array(h.length)));
                for (var l = 0; l < h.length; l++) h.words[l] = 0;
              }
              var c = r.clone()._ishlnsubmul(n, 1, u);
              0 === c.negative && ((r = c), h && (h.words[u] = 1));
              for (var f = u - 1; f >= 0; f--) {
                var d =
                  67108864 * (0 | r.words[n.length + f]) +
                  (0 | r.words[n.length + f - 1]);
                ((d = Math.min((d / o) | 0, 67108863)),
                  r._ishlnsubmul(n, d, f));
                while (0 !== r.negative)
                  (d--,
                    (r.negative = 0),
                    r._ishlnsubmul(n, 1, f),
                    r.isZero() || (r.negative ^= 1));
                h && (h.words[f] = d);
              }
              return (
                h && h._strip(),
                r._strip(),
                "div" !== e && 0 !== i && r.iushrn(i),
                { div: h || null, mod: r }
              );
            }),
            (s.prototype.divmod = function (t, e, i) {
              return (
                r(!t.isZero()),
                this.isZero()
                  ? { div: new s(0), mod: new s(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((a = this.neg().divmod(t, e)),
                      "mod" !== e && (n = a.div.neg()),
                      "div" !== e &&
                        ((o = a.mod.neg()), i && 0 !== o.negative && o.iadd(t)),
                      { div: n, mod: o })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((a = this.divmod(t.neg(), e)),
                        "mod" !== e && (n = a.div.neg()),
                        { div: n, mod: a.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((a = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((o = a.mod.neg()),
                            i && 0 !== o.negative && o.isub(t)),
                          { div: a.div, mod: o })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new s(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new s(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new s(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var n, o, a;
            }),
            (s.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (s.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (s.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (s.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var i = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                r = t.ushrn(1),
                n = t.andln(1),
                s = i.cmp(r);
              return s < 0 || (1 === n && 0 === s)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (s.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (
                var i = (1 << 26) % t, n = 0, s = this.length - 1;
                s >= 0;
                s--
              )
                n = (i * n + (0 | this.words[s])) % t;
              return e ? -n : n;
            }),
            (s.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (s.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), r(t <= 67108863));
              for (var i = 0, n = this.length - 1; n >= 0; n--) {
                var s = (0 | this.words[n]) + 67108864 * i;
                ((this.words[n] = (s / t) | 0), (i = s % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (s.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (s.prototype.egcd = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n = new s(1),
                o = new s(0),
                a = new s(0),
                h = new s(1),
                u = 0;
              while (e.isEven() && i.isEven()) (e.iushrn(1), i.iushrn(1), ++u);
              var l = i.clone(),
                c = e.clone();
              while (!e.isZero()) {
                for (
                  var f = 0, d = 1;
                  0 === (e.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0) {
                  e.iushrn(f);
                  while (f-- > 0)
                    ((n.isOdd() || o.isOdd()) && (n.iadd(l), o.isub(c)),
                      n.iushrn(1),
                      o.iushrn(1));
                }
                for (
                  var p = 0, m = 1;
                  0 === (i.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0) {
                  i.iushrn(p);
                  while (p-- > 0)
                    ((a.isOdd() || h.isOdd()) && (a.iadd(l), h.isub(c)),
                      a.iushrn(1),
                      h.iushrn(1));
                }
                e.cmp(i) >= 0
                  ? (e.isub(i), n.isub(a), o.isub(h))
                  : (i.isub(e), a.isub(n), h.isub(o));
              }
              return { a: a, b: h, gcd: i.iushln(u) };
            }),
            (s.prototype._invmp = function (t) {
              (r(0 === t.negative), r(!t.isZero()));
              var e = this,
                i = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var n,
                o = new s(1),
                a = new s(0),
                h = i.clone();
              while (e.cmpn(1) > 0 && i.cmpn(1) > 0) {
                for (
                  var u = 0, l = 1;
                  0 === (e.words[0] & l) && u < 26;
                  ++u, l <<= 1
                );
                if (u > 0) {
                  e.iushrn(u);
                  while (u-- > 0) (o.isOdd() && o.iadd(h), o.iushrn(1));
                }
                for (
                  var c = 0, f = 1;
                  0 === (i.words[0] & f) && c < 26;
                  ++c, f <<= 1
                );
                if (c > 0) {
                  i.iushrn(c);
                  while (c-- > 0) (a.isOdd() && a.iadd(h), a.iushrn(1));
                }
                e.cmp(i) >= 0 ? (e.isub(i), o.isub(a)) : (i.isub(e), a.isub(o));
              }
              return (
                (n = 0 === e.cmpn(1) ? o : a),
                n.cmpn(0) < 0 && n.iadd(t),
                n
              );
            }),
            (s.prototype.gcd = function (t) {
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
                  var s = e;
                  ((e = i), (i = s));
                } else if (0 === n || 0 === i.cmpn(1)) break;
                e.isub(i);
              } while (1);
              return i.iushln(r);
            }),
            (s.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (s.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (s.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (s.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (s.prototype.bincn = function (t) {
              r("number" === typeof t);
              var e = t % 26,
                i = (t - e) / 26,
                n = 1 << e;
              if (this.length <= i)
                return (this._expand(i + 1), (this.words[i] |= n), this);
              for (var s = n, o = i; 0 !== s && o < this.length; o++) {
                var a = 0 | this.words[o];
                ((a += s),
                  (s = a >>> 26),
                  (a &= 67108863),
                  (this.words[o] = a));
              }
              return (0 !== s && ((this.words[o] = s), this.length++), this);
            }),
            (s.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (s.prototype.cmpn = function (t) {
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
            (s.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (s.prototype.ucmp = function (t) {
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
            (s.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (s.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (s.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (s.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (s.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (s.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (s.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (s.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (s.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (s.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (s.red = function (t) {
              return new H(t);
            }),
            (s.prototype.toRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                r(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
              );
            }),
            (s.prototype.fromRed = function () {
              return (
                r(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (s.prototype.forceRed = function (t) {
              return (
                r(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (s.prototype.redAdd = function (t) {
              return (
                r(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (s.prototype.redIAdd = function (t) {
              return (
                r(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (s.prototype.redSub = function (t) {
              return (
                r(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (s.prototype.redISub = function (t) {
              return (
                r(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (s.prototype.redShl = function (t) {
              return (
                r(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (s.prototype.redMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (s.prototype.redIMul = function (t) {
              return (
                r(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
              );
            }),
            (s.prototype.redSqr = function () {
              return (
                r(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function () {
              return (
                r(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function () {
              return (
                r(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function () {
              return (
                r(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function () {
              return (
                r(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function (t) {
              return (
                r(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var _ = { k256: null, p224: null, p192: null, p25519: null };
          function S(t, e) {
            ((this.name = t),
              (this.p = new s(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function E() {
            S.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function k() {
            S.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function A() {
            S.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function R() {
            S.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function H(t) {
            if ("string" === typeof t) {
              var e = s._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (r(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function B(t) {
            (H.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((S.prototype._tmp = function () {
            var t = new s(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (S.prototype.ireduce = function (t) {
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
            (S.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (S.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            n(E, S),
            (E.prototype.split = function (t, e) {
              for (
                var i = 4194303, r = Math.min(t.length, 9), n = 0;
                n < r;
                n++
              )
                e.words[n] = t.words[n];
              if (((e.length = r), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var s = t.words[9];
              for (e.words[e.length++] = s & i, n = 10; n < t.length; n++) {
                var o = 0 | t.words[n];
                ((t.words[n - 10] = ((o & i) << 4) | (s >>> 22)), (s = o));
              }
              ((s >>>= 22),
                (t.words[n - 10] = s),
                0 === s && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (E.prototype.imulK = function (t) {
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
            n(k, S),
            n(A, S),
            n(R, S),
            (R.prototype.imulK = function (t) {
              for (var e = 0, i = 0; i < t.length; i++) {
                var r = 19 * (0 | t.words[i]) + e,
                  n = 67108863 & r;
                ((r >>>= 26), (t.words[i] = n), (e = r));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (s._prime = function (t) {
              if (_[t]) return _[t];
              var e;
              if ("k256" === t) e = new E();
              else if ("p224" === t) e = new k();
              else if ("p192" === t) e = new A();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new R();
              }
              return ((_[t] = e), e);
            }),
            (H.prototype._verify1 = function (t) {
              (r(0 === t.negative, "red works only with positives"),
                r(t.red, "red works only with red numbers"));
            }),
            (H.prototype._verify2 = function (t, e) {
              (r(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                r(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (H.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (l(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (H.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (H.prototype.add = function (t, e) {
              this._verify2(t, e);
              var i = t.add(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i._forceRed(this));
            }),
            (H.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var i = t.iadd(e);
              return (i.cmp(this.m) >= 0 && i.isub(this.m), i);
            }),
            (H.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var i = t.sub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i._forceRed(this));
            }),
            (H.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var i = t.isub(e);
              return (i.cmpn(0) < 0 && i.iadd(this.m), i);
            }),
            (H.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (H.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (H.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (H.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (H.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (H.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((r(e % 2 === 1), 3 === e)) {
                var i = this.m.add(new s(1)).iushrn(2);
                return this.pow(t, i);
              }
              var n = this.m.subn(1),
                o = 0;
              while (!n.isZero() && 0 === n.andln(1)) (o++, n.iushrn(1));
              r(!n.isZero());
              var a = new s(1).toRed(this),
                h = a.redNeg(),
                u = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new s(2 * l * l).toRed(this);
              while (0 !== this.pow(l, u).cmp(h)) l.redIAdd(h);
              var c = this.pow(l, n),
                f = this.pow(t, n.addn(1).iushrn(1)),
                d = this.pow(t, n),
                p = o;
              while (0 !== d.cmp(a)) {
                for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                r(g < p);
                var w = this.pow(c, new s(1).iushln(p - g - 1));
                ((f = f.redMul(w)),
                  (c = w.redSqr()),
                  (d = d.redMul(c)),
                  (p = g));
              }
              return f;
            }),
            (H.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (H.prototype.pow = function (t, e) {
              if (e.isZero()) return new s(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var i = 4,
                r = new Array(1 << i);
              ((r[0] = new s(1).toRed(this)), (r[1] = t));
              for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
              var o = r[0],
                a = 0,
                h = 0,
                u = e.bitLength() % 26;
              for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
                for (var l = e.words[n], c = u - 1; c >= 0; c--) {
                  var f = (l >> c) & 1;
                  (o !== r[0] && (o = this.sqr(o)),
                    0 !== f || 0 !== a
                      ? ((a <<= 1),
                        (a |= f),
                        h++,
                        (h === i || (0 === n && 0 === c)) &&
                          ((o = this.mul(o, r[a])), (h = 0), (a = 0)))
                      : (h = 0));
                }
                u = 26;
              }
              return o;
            }),
            (H.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (H.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (s.mont = function (t) {
              return new B(t);
            }),
            n(B, H),
            (B.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (B.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (B.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var i = t.imul(e),
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
            (B.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new s(0)._forceRed(this);
              var i = t.mul(e),
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
            (B.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, i(20)(t));
    },
    4921: function (t, e) {},
    5032: function (t, e, i) {
      (i(8093), (t.exports = i(6186)));
    },
    5033: function (t, e) {
      var i = function (t, e, i) {
        var r = "";
        if (
          ((r += t.name || "Error"),
          (r += ": " + (t.message || "")),
          i instanceof Array)
        )
          for (var n in i) {
            var s = i[n];
            r += "\n   # " + s;
          }
        for (var o in e) {
          var a = e[o];
          r += "\n   at " + a.toString();
        }
        return r;
      };
      t.exports = i;
    },
    6185: function (t, e, i) {
      i(5032).check("es5");
    },
    6186: function (t, e, i) {
      var r = i(8094),
        n = new r(),
        s = function (t) {
          return n.test(t);
        };
      ((s.define = function (t, e) {
        n.define(t, e);
      }),
        (s.check = function (t) {
          n.check(t);
        }),
        (s.test = s),
        (t.exports = s));
    },
    8070: function (t, e, i) {
      "use strict";
      var r = i(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(67),
        s = r(i(80)),
        o = r(i(129));
      const a = "UNSTAKE";
      class NearblocksExplorer extends o.default {
        constructor() {
          (super(...arguments), (this.defaultTxLimit = 25));
        }
        getTxLimit() {
          return this.defaultTxLimit;
        }
        getAllowedTickers() {
          return ["NEAR"];
        }
        getTransactionsUrl(t, e, i, r) {
          return (
            void 0 === i && (i = this.defaultTxLimit),
            void 0 === r && (r = 0),
            `account/${t}/txns?page=${r + 1}&per_page=${i}&order=desc`
          );
        }
        getTransactionsMethod() {
          return "GET";
        }
        getTransactionsParams(t, e, i) {
          return (
            void 0 === e && (e = 0),
            void 0 === i && (i = this.defaultTxLimit),
            { address: t, offset: e, limit: i }
          );
        }
        modifyTransactionsResponse(t, e) {
          return super.modifyTransactionsResponse(t.txns, e).filter(Boolean);
        }
        getTransactionsModifiedResponse(t, e) {
          try {
            const i = this.getTxDirection(e, t);
            return new s.default({
              walletid: this.wallet.id,
              ticker: this.wallet.ticker,
              name: this.wallet.name,
              alias: this.wallet.alias,
              explorer: this.constructor.name,
              txid: this.getTxHash(t),
              direction: i,
              otherSideAddress: this.getTxOtherSideAddress(e, t, i),
              amount: this.getTxValue(e, t),
              fee: this.getTxFee(t),
              feeTicker: this.wallet.parent,
              datetime: this.getTxDateTime(t),
              memo: this.getTxMemo(t),
              confirmations: this.getTxConfirmations(),
            });
          } catch (i) {
            return void console.error(i);
          }
        }
        getTxDirection(t, e) {
          return e.actions[0].action === a || e.receiver_account_id === t;
        }
        getTxDateTime(t) {
          try {
            return new Date(Number(String(t.block_timestamp).substr(0, 13)));
          } catch (e) {
            return (console.error(e), new Date());
          }
        }
        getTxOtherSideAddress(t, e, i) {
          return i ? e.predecessor_account_id : e.receiver_account_id;
        }
        getTxValue(t, e) {
          try {
            return this.wallet.toCurrencyUnit(
              (0, n.getNumberWithoutENotation)(e.actions_agg.deposit),
            );
          } catch (i) {
            return (console.error(i), "0");
          }
        }
        getTxHash(t) {
          return t.transaction_hash;
        }
        getTxFee(t) {
          try {
            return this.wallet.toCurrencyUnit(
              (0, n.getNumberWithoutENotation)(t.outcomes_agg.transaction_fee),
            );
          } catch (e) {
            return (console.error(e), "0");
          }
        }
        getTxConfirmations() {
          return 2;
        }
      }
      e.default = NearblocksExplorer;
    },
    8071: function (t, e, i) {
      "use strict";
      (function (t) {
        var r = i(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var n = r(i(69)),
          s = d(i(6173)),
          o = r(i(3090)),
          a = r(i(11)),
          h = r(i(129)),
          u = r(i(28)),
          l = i(19),
          c = i(27),
          f = r(i(73));
        function d(t, e) {
          if ("function" == typeof WeakMap)
            var i = new WeakMap(),
              r = new WeakMap();
          return (d = function (t, e) {
            if (!e && t && t.__esModule) return t;
            var n,
              s,
              o = { __proto__: null, default: t };
            if (null === t || ("object" != typeof t && "function" != typeof t))
              return o;
            if ((n = e ? r : i)) {
              if (n.has(t)) return n.get(t);
              n.set(t, o);
            }
            for (const i in t)
              "default" !== i &&
                {}.hasOwnProperty.call(t, i) &&
                ((s =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(t, i)) &&
                (s.get || s.set)
                  ? n(o, i, s)
                  : (o[i] = t[i]));
            return o;
          })(t, e);
        }
        const p = 800,
          m = "AccountDoesNotExist",
          g = new a.default("100");
        class NearRPCExplorer extends h.default {
          constructor() {
            (super(...arguments),
              (0, n.default)(
                this,
                "getNodeConfig",
                o.default.throttle(this._getNodeConfig, p),
              ),
              (0, n.default)(
                this,
                "getGasPrice",
                o.default.throttle(this._getGasPrice, p),
              ),
              (this.provider = new s.providers.JsonRpcProvider(
                this.config.baseUrl,
              )));
          }
          getAllowedTickers() {
            return ["NEAR"];
          }
          async _getNodeConfig() {
            try {
              return this.provider.experimental_protocolConfig({
                finality: "final",
              });
            } catch (t) {
              return (u.default.error({ instance: this, error: t }), null);
            }
          }
          async getAccessKey(t, e) {
            return this.provider.query(`access_key/${t}/${e}`, "");
          }
          async sendTransaction(t) {
            const { transaction: e } = await this.provider.sendJsonRpc(
              "broadcast_tx_commit",
              [t],
            );
            return { txid: null === e || void 0 === e ? void 0 : e.hash };
          }
          async _getGasPrice() {
            try {
              const { gas_price: t } = await this.provider.gasPrice(null);
              return t;
            } catch (t) {
              return (u.default.error({ instance: this, error: t }), null);
            }
          }
          async getInfo(t) {
            try {
              const {
                  runtime_config: { storage_amount_per_byte: e },
                } = await this.getNodeConfig(),
                i = await this.provider.query({
                  request_type: "view_account",
                  finality: "final",
                  account_id: t,
                }),
                r = new this.wallet.BN(i.storage_usage).mul(
                  new this.wallet.BN(e),
                ),
                n = new this.wallet.BN(i.locked),
                s = r.sub(n),
                o = new this.wallet.BN(i.amount).add(n),
                a = o.sub(n);
              return { balance: a.toString(), unspendable: s };
            } catch (e) {
              if (e.type === m) return { balance: "0" };
              throw e;
            }
          }
          async fetchStakingInfo(t, e) {
            let { activeValidators: i = [] } = void 0 === e ? {} : e;
            const r = {};
            for (const { address: h } of i)
              r[h] = await this.getValidatorInfo(t, h);
            const [n, s, o, a] = [
              "unstaking",
              "staked",
              "availableWithdrawals",
              "pendingWithdrawals",
            ].map((t) =>
              Object.values(r).reduce(
                (e, i) => new this.wallet.BN(e).add(i[t].toBN()).toString(),
                "0",
              ),
            );
            return {
              staked: new f.default(s, this.wallet),
              unstaking: new f.default(n, this.wallet),
              pendingWithdrawals: new f.default(a, this.wallet),
              availableWithdrawals: new f.default(
                new this.wallet.BN(o).gt(g) ? o : "0",
                this.wallet,
              ),
              validators: r,
            };
          }
          async getValidatorInfo(t, e) {
            const [i, r, n, s] = await Promise.all([
              this.viewFunction(e, "get_account_total_balance", {
                account_id: t,
              }),
              this.viewFunction(e, "get_account_staked_balance", {
                account_id: t,
              }),
              this.viewFunction(e, "get_account_unstaked_balance", {
                account_id: t,
              }),
              this.viewFunction(e, "is_account_unstaked_balance_available", {
                account_id: t,
              }),
            ]);
            return {
              total: new f.default(i, this.wallet),
              staked: new f.default(r, this.wallet),
              unstaking: new f.default(n, this.wallet),
              availableWithdrawals: new f.default(s ? n : "0", this.wallet),
              pendingWithdrawals: new f.default(s ? "0" : n, this.wallet),
            };
          }
          async viewFunction(e, i, r) {
            void 0 === r && (r = {});
            try {
              var n;
              const s = this.bytesJsonStringify(r).toString("base64"),
                o = await this.provider.query({
                  request_type: "call_function",
                  account_id: e,
                  method_name: i,
                  args_base64: s,
                  finality: "final",
                });
              return (
                (null === o ||
                void 0 === o ||
                null === (n = o.result) ||
                void 0 === n
                  ? void 0
                  : n.length) > 0 && this.jsonFromRawResponse(t.from(o.result))
              );
            } catch (s) {
              throw (
                console.warn(s),
                new l.ExternalError({
                  type: c.EXTERNAL_ERROR,
                  error: s,
                  instance: this,
                })
              );
            }
          }
          jsonFromRawResponse(e) {
            return JSON.parse(t.from(e).toString());
          }
          bytesJsonStringify(e) {
            return t.from(JSON.stringify(e));
          }
        }
        e.default = NearRPCExplorer;
      }).call(this, i(2).Buffer);
    },
    8082: function (t, e, i) {
      (function (e, i) {
        t.exports = i();
      })(0, function () {
        "use strict";
        var t = Object.prototype.toString,
          e =
            Array.isArray ||
            function (e) {
              return "[object Array]" === t.call(e);
            };
        function i(t) {
          return "function" === typeof t;
        }
        function r(t) {
          return e(t) ? "array" : typeof t;
        }
        function n(t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        }
        function s(t, e) {
          return null != t && "object" === typeof t && e in t;
        }
        function o(t, e) {
          return (
            null != t &&
            "object" !== typeof t &&
            t.hasOwnProperty &&
            t.hasOwnProperty(e)
          );
        }
        var a = RegExp.prototype.test;
        function h(t, e) {
          return a.call(t, e);
        }
        var u = /\S/;
        function l(t) {
          return !h(u, t);
        }
        var c = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
          "/": "&#x2F;",
          "`": "&#x60;",
          "=": "&#x3D;",
        };
        function f(t) {
          return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return c[t];
          });
        }
        var d = /\s*/,
          p = /\s+/,
          m = /\s*=/,
          g = /\s*\}/,
          w = /#|\^|\/|>|\{|&|=|!/;
        function v(t, i) {
          if (!t) return [];
          var r,
            s,
            o,
            a = !1,
            h = [],
            u = [],
            c = [],
            f = !1,
            v = !1,
            _ = "",
            S = 0;
          function k() {
            if (f && !v) while (c.length) delete u[c.pop()];
            else c = [];
            ((f = !1), (v = !1));
          }
          function A(t) {
            if (
              ("string" === typeof t && (t = t.split(p, 2)),
              !e(t) || 2 !== t.length)
            )
              throw new Error("Invalid tags: " + t);
            ((r = new RegExp(n(t[0]) + "\\s*")),
              (s = new RegExp("\\s*" + n(t[1]))),
              (o = new RegExp("\\s*" + n("}" + t[1]))));
          }
          A(i || E.tags);
          var R,
            H,
            B,
            T,
            x,
            C,
            O = new b(t);
          while (!O.eos()) {
            if (((R = O.pos), (B = O.scanUntil(r)), B))
              for (var P = 0, N = B.length; P < N; ++P)
                ((T = B.charAt(P)),
                  l(T)
                    ? (c.push(u.length), (_ += T))
                    : ((v = !0), (a = !0), (_ += " ")),
                  u.push(["text", T, R, R + 1]),
                  (R += 1),
                  "\n" === T && (k(), (_ = ""), (S = 0), (a = !1)));
            if (!O.scan(r)) break;
            if (
              ((f = !0),
              (H = O.scan(w) || "name"),
              O.scan(d),
              "=" === H
                ? ((B = O.scanUntil(m)), O.scan(m), O.scanUntil(s))
                : "{" === H
                  ? ((B = O.scanUntil(o)), O.scan(g), O.scanUntil(s), (H = "&"))
                  : (B = O.scanUntil(s)),
              !O.scan(s))
            )
              throw new Error("Unclosed tag at " + O.pos);
            if (
              ((x = ">" == H ? [H, B, R, O.pos, _, S, a] : [H, B, R, O.pos]),
              S++,
              u.push(x),
              "#" === H || "^" === H)
            )
              h.push(x);
            else if ("/" === H) {
              if (((C = h.pop()), !C))
                throw new Error('Unopened section "' + B + '" at ' + R);
              if (C[1] !== B)
                throw new Error('Unclosed section "' + C[1] + '" at ' + R);
            } else
              "name" === H || "{" === H || "&" === H
                ? (v = !0)
                : "=" === H && A(B);
          }
          if ((k(), (C = h.pop()), C))
            throw new Error('Unclosed section "' + C[1] + '" at ' + O.pos);
          return M(y(u));
        }
        function y(t) {
          for (var e, i, r = [], n = 0, s = t.length; n < s; ++n)
            ((e = t[n]),
              e &&
                ("text" === e[0] && i && "text" === i[0]
                  ? ((i[1] += e[1]), (i[3] = e[3]))
                  : (r.push(e), (i = e))));
          return r;
        }
        function M(t) {
          for (var e, i, r = [], n = r, s = [], o = 0, a = t.length; o < a; ++o)
            switch (((e = t[o]), e[0])) {
              case "#":
              case "^":
                (n.push(e), s.push(e), (n = e[4] = []));
                break;
              case "/":
                ((i = s.pop()),
                  (i[5] = e[2]),
                  (n = s.length > 0 ? s[s.length - 1][4] : r));
                break;
              default:
                n.push(e);
            }
          return r;
        }
        function b(t) {
          ((this.string = t), (this.tail = t), (this.pos = 0));
        }
        function _(t, e) {
          ((this.view = t),
            (this.cache = { ".": this.view }),
            (this.parent = e));
        }
        function S() {
          this.templateCache = {
            _cache: {},
            set: function (t, e) {
              this._cache[t] = e;
            },
            get: function (t) {
              return this._cache[t];
            },
            clear: function () {
              this._cache = {};
            },
          };
        }
        ((b.prototype.eos = function () {
          return "" === this.tail;
        }),
          (b.prototype.scan = function (t) {
            var e = this.tail.match(t);
            if (!e || 0 !== e.index) return "";
            var i = e[0];
            return (
              (this.tail = this.tail.substring(i.length)),
              (this.pos += i.length),
              i
            );
          }),
          (b.prototype.scanUntil = function (t) {
            var e,
              i = this.tail.search(t);
            switch (i) {
              case -1:
                ((e = this.tail), (this.tail = ""));
                break;
              case 0:
                e = "";
                break;
              default:
                ((e = this.tail.substring(0, i)),
                  (this.tail = this.tail.substring(i)));
            }
            return ((this.pos += e.length), e);
          }),
          (_.prototype.push = function (t) {
            return new _(t, this);
          }),
          (_.prototype.lookup = function (t) {
            var e,
              r = this.cache;
            if (r.hasOwnProperty(t)) e = r[t];
            else {
              var n,
                a,
                h,
                u = this,
                l = !1;
              while (u) {
                if (t.indexOf(".") > 0) {
                  ((n = u.view), (a = t.split(".")), (h = 0));
                  while (null != n && h < a.length)
                    (h === a.length - 1 && (l = s(n, a[h]) || o(n, a[h])),
                      (n = n[a[h++]]));
                } else ((n = u.view[t]), (l = s(u.view, t)));
                if (l) {
                  e = n;
                  break;
                }
                u = u.parent;
              }
              r[t] = e;
            }
            return (i(e) && (e = e.call(this.view)), e);
          }),
          (S.prototype.clearCache = function () {
            "undefined" !== typeof this.templateCache &&
              this.templateCache.clear();
          }),
          (S.prototype.parse = function (t, e) {
            var i = this.templateCache,
              r = t + ":" + (e || E.tags).join(":"),
              n = "undefined" !== typeof i,
              s = n ? i.get(r) : void 0;
            return (void 0 == s && ((s = v(t, e)), n && i.set(r, s)), s);
          }),
          (S.prototype.render = function (t, e, i, r) {
            var n = this.getConfigTags(r),
              s = this.parse(t, n),
              o = e instanceof _ ? e : new _(e, void 0);
            return this.renderTokens(s, o, i, t, r);
          }),
          (S.prototype.renderTokens = function (t, e, i, r, n) {
            for (var s, o, a, h = "", u = 0, l = t.length; u < l; ++u)
              ((a = void 0),
                (s = t[u]),
                (o = s[0]),
                "#" === o
                  ? (a = this.renderSection(s, e, i, r, n))
                  : "^" === o
                    ? (a = this.renderInverted(s, e, i, r, n))
                    : ">" === o
                      ? (a = this.renderPartial(s, e, i, n))
                      : "&" === o
                        ? (a = this.unescapedValue(s, e))
                        : "name" === o
                          ? (a = this.escapedValue(s, e, n))
                          : "text" === o && (a = this.rawValue(s)),
                void 0 !== a && (h += a));
            return h;
          }),
          (S.prototype.renderSection = function (t, r, n, s, o) {
            var a = this,
              h = "",
              u = r.lookup(t[1]);
            function l(t) {
              return a.render(t, r, n, o);
            }
            if (u) {
              if (e(u))
                for (var c = 0, f = u.length; c < f; ++c)
                  h += this.renderTokens(t[4], r.push(u[c]), n, s, o);
              else if (
                "object" === typeof u ||
                "string" === typeof u ||
                "number" === typeof u
              )
                h += this.renderTokens(t[4], r.push(u), n, s, o);
              else if (i(u)) {
                if ("string" !== typeof s)
                  throw new Error(
                    "Cannot use higher-order sections without the original template",
                  );
                ((u = u.call(r.view, s.slice(t[3], t[5]), l)),
                  null != u && (h += u));
              } else h += this.renderTokens(t[4], r, n, s, o);
              return h;
            }
          }),
          (S.prototype.renderInverted = function (t, i, r, n, s) {
            var o = i.lookup(t[1]);
            if (!o || (e(o) && 0 === o.length))
              return this.renderTokens(t[4], i, r, n, s);
          }),
          (S.prototype.indentPartial = function (t, e, i) {
            for (
              var r = e.replace(/[^ \t]/g, ""), n = t.split("\n"), s = 0;
              s < n.length;
              s++
            )
              n[s].length && (s > 0 || !i) && (n[s] = r + n[s]);
            return n.join("\n");
          }),
          (S.prototype.renderPartial = function (t, e, r, n) {
            if (r) {
              var s = this.getConfigTags(n),
                o = i(r) ? r(t[1]) : r[t[1]];
              if (null != o) {
                var a = t[6],
                  h = t[5],
                  u = t[4],
                  l = o;
                0 == h && u && (l = this.indentPartial(o, u, a));
                var c = this.parse(l, s);
                return this.renderTokens(c, e, r, l, n);
              }
            }
          }),
          (S.prototype.unescapedValue = function (t, e) {
            var i = e.lookup(t[1]);
            if (null != i) return i;
          }),
          (S.prototype.escapedValue = function (t, e, i) {
            var r = this.getConfigEscape(i) || E.escape,
              n = e.lookup(t[1]);
            if (null != n)
              return "number" === typeof n && r === E.escape ? String(n) : r(n);
          }),
          (S.prototype.rawValue = function (t) {
            return t[1];
          }),
          (S.prototype.getConfigTags = function (t) {
            return e(t) ? t : t && "object" === typeof t ? t.tags : void 0;
          }),
          (S.prototype.getConfigEscape = function (t) {
            return t && "object" === typeof t && !e(t) ? t.escape : void 0;
          }));
        var E = {
            name: "mustache.js",
            version: "4.2.0",
            tags: ["{{", "}}"],
            clearCache: void 0,
            escape: void 0,
            parse: void 0,
            render: void 0,
            Scanner: void 0,
            Context: void 0,
            Writer: void 0,
            set templateCache(t) {
              k.templateCache = t;
            },
            get templateCache() {
              return k.templateCache;
            },
          },
          k = new S();
        return (
          (E.clearCache = function () {
            return k.clearCache();
          }),
          (E.parse = function (t, e) {
            return k.parse(t, e);
          }),
          (E.render = function (t, e, i, n) {
            if ("string" !== typeof t)
              throw new TypeError(
                'Invalid template! Template should be a "string" but "' +
                  r(t) +
                  '" was given as the first argument for mustache#render(template, view, partials)',
              );
            return k.render(t, e, i, n);
          }),
          (E.escape = f),
          (E.Scanner = b),
          (E.Context = _),
          (E.Writer = S),
          E
        );
      });
    },
    8085: function (t, e) {},
    8091: function (t, e, i) {
      t.exports = i(8092);
    },
    8092: function (t, e, i) {
      i(6185);
      var r,
        n = i(5032);
      ((r = n("Error.captureStackTrace")
        ? i(8095)
        : n("Error.prototype.stack")
          ? i(8096)
          : i(8106)),
        (t.exports = r()));
    },
    8093: function (t, e, i) {
      var r = i(6186),
        n = r.define,
        s = r.test;
      (n("strict mode", function () {
        return void 0 === this;
      }),
        n("arguments.callee.caller", function () {
          try {
            return (
              (function () {
                return arguments.callee.caller;
              })() === arguments.callee
            );
          } catch (t) {
            return !1;
          }
        }),
        n("es5", function () {
          return (
            s("Array.prototype.forEach") &&
            s("Array.prototype.map") &&
            s("Function.prototype.bind") &&
            s("Object.create") &&
            s("Object.defineProperties") &&
            s("Object.defineProperty") &&
            s("Object.prototype.hasOwnProperty")
          );
        }),
        n("Array.prototype.forEach", function () {
          return Array.prototype.forEach;
        }),
        n("Array.prototype.map", function () {
          return Array.prototype.map;
        }),
        n("Function.prototype.bind", function () {
          return Function.prototype.bind;
        }),
        n("Object.create", function () {
          return Object.create;
        }),
        n("Object.defineProperties", function () {
          return Object.defineProperties;
        }),
        n("Object.defineProperty", function () {
          return Object.defineProperty;
        }),
        n("Object.prototype.hasOwnProperty", function () {
          return Object.prototype.hasOwnProperty;
        }),
        n("Error.captureStackTrace", function () {
          return Error.captureStackTrace;
        }),
        n("Error.prototype.stack", function () {
          try {
            throw new Error();
          } catch (t) {
            return t.stack || t.stacktrace;
          }
        }));
    },
    8094: function (t, e) {
      var i = function () {
        ((this.tests = {}), (this.cache = {}));
      };
      ((i.prototype = {
        constructor: i,
        define: function (t, e) {
          if ("string" != typeof t || !(e instanceof Function))
            throw new Error("Invalid capability definition.");
          if (this.tests[t])
            throw new Error('Duplicated capability definition by "' + t + '".');
          this.tests[t] = e;
        },
        check: function (t) {
          if (!this.test(t))
            throw new Error(
              'The current environment does not support "' +
                t +
                '", therefore we cannot continue.',
            );
        },
        test: function (t) {
          if (void 0 !== this.cache[t]) return this.cache[t];
          if (!this.tests[t])
            throw new Error('Unknown capability with name "' + t + '".');
          var e = this.tests[t];
          return ((this.cache[t] = !!e()), this.cache[t]);
        },
      }),
        (t.exports = i));
    },
    8095: function (t, e, i) {
      var r = i(5033);
      t.exports = function () {
        return (
          (Error.getStackTrace = function (t) {
            return t.stack;
          }),
          { prepareStackTrace: r }
        );
      };
    },
    8096: function (t, e, i) {
      var r = i(8097),
        n = i(8104),
        s = i(4300).cache,
        o = i(5033);
      t.exports = function () {
        return (
          (Error.captureStackTrace = function t(e, i) {
            var a,
              h = [t];
            i && h.push(i);
            var u = r.getInstance().captureFrameStrings(h);
            Object.defineProperties(e, {
              stack: {
                configurable: !0,
                get: s(function () {
                  var t = n
                    .getInstance()
                    .getFrames(u.frameStrings, u.functionValues);
                  return (Error.prepareStackTrace || o)(e, t, a);
                }),
              },
              cachedStack: {
                configurable: !0,
                writable: !0,
                enumerable: !1,
                value: !0,
              },
            });
          }),
          (Error.getStackTrace = function (t) {
            if (t.cachedStack) return t.stack;
            var e,
              i = r.getInstance().getFrameStrings(t),
              s = [];
            i
              ? (s = n.getInstance().getFrames(i, []))
              : (e = [
                  "The stack is not readable by unthrown errors in this environment.",
                ]);
            var a = (Error.prepareStackTrace || o)(t, s, e);
            if (i)
              try {
                Object.defineProperties(t, {
                  stack: {
                    configurable: !0,
                    writable: !0,
                    enumerable: !1,
                    value: a,
                  },
                  cachedStack: {
                    configurable: !0,
                    writable: !0,
                    enumerable: !1,
                    value: !0,
                  },
                });
              } catch (h) {}
            return a;
          }),
          { prepareStackTrace: o }
        );
      };
    },
    8097: function (t, e, i) {
      var r = i(4299).Class,
        n = i(4299).abstractMethod,
        s = i(4300).eachCombination,
        o = i(4300).cache,
        a = i(5032),
        h = r(Object, {
          prototype: {
            captureFrameStrings: function (t) {
              var e = this.createError();
              (t.unshift(this.captureFrameStrings),
                t.unshift(this.createError));
              var i = this.getFrameStrings(e),
                r = i.slice(t.length),
                n = [];
              if (a("arguments.callee.caller")) {
                var s = [this.createError, this.captureFrameStrings];
                try {
                  var o = arguments.callee;
                  while ((o = o.caller)) s.push(o);
                } catch (h) {}
                n = s.slice(t.length);
              }
              return { frameStrings: r, functionValues: n };
            },
            getFrameStrings: function (t) {
              var e = t.message || "",
                i = t.name || "",
                r = this.getStackString(t);
              if (void 0 !== r) {
                var n = r.split("\n"),
                  s = 0,
                  o = n.length;
                return (
                  this.hasHeader &&
                    (s += i.split("\n").length + e.split("\n").length - 1),
                  this.hasFooter && (o -= 1),
                  n.slice(s, o)
                );
              }
            },
            createError: n,
            getStackString: n,
            hasHeader: void 0,
            hasFooter: void 0,
          },
        }),
        u = r(Object, {
          prototype: {
            calibrateClass: function (t) {
              return this.calibrateMethods(t) && this.calibrateEnvelope(t);
            },
            calibrateMethods: function (t) {
              try {
                s(
                  [
                    [
                      function (t) {
                        return new Error(t);
                      },
                      function (t) {
                        try {
                          throw new Error(t);
                        } catch (e) {
                          return e;
                        }
                      },
                    ],
                    [
                      function (t) {
                        return t.stack;
                      },
                      function (t) {
                        return t.stacktrace;
                      },
                    ],
                  ],
                  function (t, e) {
                    if (e(t())) throw { getStackString: e, createError: t };
                  },
                );
              } catch (e) {
                return (r.merge.call(t, { prototype: e }), !0);
              }
              return !1;
            },
            calibrateEnvelope: function (t) {
              var e = t.prototype.getStackString,
                i = t.prototype.createError,
                n = e(i("marker")),
                s = n.split("\n");
              return (
                r.merge.call(t, {
                  prototype: {
                    hasHeader: /marker/.test(s[0]),
                    hasFooter: "" === s[s.length - 1],
                  },
                }),
                !0
              );
            },
          },
        });
      t.exports = {
        getClass: o(function () {
          var t;
          if (t) return t;
          t = r(h, {});
          var e = new u();
          if (!e.calibrateClass(t))
            throw new Error(
              "Cannot read Error.prototype.stack in this environment.",
            );
          return t;
        }),
        getInstance: o(function () {
          var t = this.getClass(),
            e = new t();
          return e;
        }),
      };
    },
    8104: function (t, e, i) {
      var r = i(4299).Class,
        n = i(8105),
        s = i(4300).cache,
        o = r(Object, {
          prototype: {
            stackParser: null,
            frameParser: null,
            locationParsers: null,
            constructor: function (t) {
              r.prototype.merge.call(this, t);
            },
            getFrames: function (t, e) {
              for (var i = [], r = 0, n = t.length; r < n; ++r)
                i[r] = this.getFrame(t[r], e[r]);
              return i;
            },
            getFrame: function (t, e) {
              var i = { frameString: t, functionValue: e };
              return new n(i);
            },
          },
        });
      t.exports = {
        getClass: s(function () {
          return o;
        }),
        getInstance: s(function () {
          var t = this.getClass(),
            e = new t();
          return e;
        }),
      };
    },
    8105: function (t, e, i) {
      var r = i(4299).Class,
        n = i(4299).abstractMethod,
        s = r(Object, {
          prototype: {
            init: r.prototype.merge,
            frameString: void 0,
            toString: function () {
              return this.frameString;
            },
            functionValue: void 0,
            getThis: n,
            getTypeName: n,
            getFunction: function () {
              return this.functionValue;
            },
            getFunctionName: n,
            getMethodName: n,
            getFileName: n,
            getLineNumber: n,
            getColumnNumber: n,
            getEvalOrigin: n,
            isTopLevel: n,
            isEval: n,
            isNative: n,
            isConstructor: n,
          },
        });
      t.exports = s;
    },
    8106: function (t, e, i) {
      var r = i(4300).cache,
        n = i(5033);
      t.exports = function () {
        return (
          (Error.captureStackTrace = function (t, e) {
            Object.defineProperties(t, {
              stack: {
                configurable: !0,
                get: r(function () {
                  return (Error.prepareStackTrace || n)(t, []);
                }),
              },
              cachedStack: {
                configurable: !0,
                writable: !0,
                enumerable: !1,
                value: !0,
              },
            });
          }),
          (Error.getStackTrace = function (t) {
            if (t.cachedStack) return t.stack;
            var e = (Error.prepareStackTrace || n)(t, []);
            try {
              Object.defineProperties(t, {
                stack: {
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                  value: e,
                },
                cachedStack: {
                  configurable: !0,
                  writable: !0,
                  enumerable: !1,
                  value: !0,
                },
              });
            } catch (i) {}
            return e;
          }),
          { prepareStackTrace: n }
        );
      };
    },
  },
]);
