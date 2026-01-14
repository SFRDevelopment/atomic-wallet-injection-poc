(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [328],
  {
    2680: function (t, e, s) {
      "use strict";
      var a = s(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = a(s(230)),
        n = a(s(4939)),
        i = a(s(2977)),
        o = s(2806);
      const l = "Band Protocol",
        c = "BAND",
        u = "m/44'/494'/0'/0/0",
        d = 6,
        h = "0",
        g = "band",
        m = "uband",
        w = "200000",
        f = "300000",
        p = "600000",
        v = "600000",
        x = "400";
      class BANDCoin extends (0, o.CosmosMixinV2)(
        (0, o.HasBlockScanner)((0, o.HasProviders)(r.default)),
      ) {
        constructor(t) {
          var e, s, a, r;
          let {
            alias: o,
            notify: y,
            feeData: T,
            explorers: b,
            txWebUrl: _,
            socket: N,
            id: k,
          } = t;
          const E = {
            id: k,
            alias: o,
            notify: y,
            name: l,
            ticker: c,
            decimal: d,
            unspendableBalance: h,
            explorers: b,
            txWebUrl: _,
            socket: N,
            feeData: T,
            denom: m,
          };
          (super(E),
            (this.derivation = u),
            this.setExplorersModules([n.default, i.default]),
            this.loadExplorers(E),
            (this.prefix = g),
            (this.denom = m),
            (this.sendFeeGas =
              (null === (e = T.sendFeeGas) || void 0 === e
                ? void 0
                : e.toString()) || w),
            (this.stakingFeeGas =
              (null === (s = T.stakingFeeGas) || void 0 === s
                ? void 0
                : s.toString()) || f),
            (this.claimFeeGas =
              (null === (a = T.claimFeeGas) || void 0 === a
                ? void 0
                : a.toString()) || v),
            (this.reStakingFeeGas =
              (null === (r = T.reStakingFeeGas) || void 0 === r
                ? void 0
                : r.toString()) || p),
            (this.transactions = []),
            (this.fields.paymentId = !0),
            (this.reserveForStake = T.reserveForStake || x));
        }
      }
      e.default = BANDCoin;
    },
    2807: function (t, e) {},
    2853: function (t, e, s) {
      "use strict";
      var a = s(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "CosmosNodeTransactionTypeMixin", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(e, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var r = a(s(2886)),
        n = a(s(2887)),
        i = a(s(2888));
    },
    2886: function (t, e, s) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const a = (t) =>
        class extends t {
          getSendTransactionUrl() {
            return this.config.baseUrl;
          }
          getSendTransactionParams(t) {
            return { method: "sendrawtransaction", params: [t] };
          }
          modifySendTransactionResponse(t) {
            return { txid: t.result };
          }
        };
      e.default = a;
    },
    2887: function (t, e, s) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const a = (t) =>
        class extends t {
          getTransactionsModifiedResponse(t, e, s) {
            return (
              void 0 === s && (s = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(t) },
                super.getTransactionsModifiedResponse(t, e, s),
              )
            );
          }
          getTransactionNativeType(t) {
            const e = Array.isArray(
              null === t || void 0 === t ? void 0 : t.messages,
            )
              ? t.messages
              : [];
            return e.map((t) => {
              let { "@type": e } = t;
              return e.split(".").pop();
            })[0];
          }
          getTransactionType(t) {
            const e = this.getTransactionNativeType(t),
              s = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === s[e] ? "transfer" : s[e];
          }
        };
      e.default = a;
    },
    2888: function (t, e, s) {
      "use strict";
      var a = s(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = a(s(81));
      const n = ["reward", "unfreeze", "freeze", "vote"],
        i = (t) =>
          class extends t {
            async getSocketTransaction(t) {
              let {
                address: e,
                hash: s,
                tokens: a,
                type: i,
                scriptPubKey: o,
              } = t;
              const l = await this.getTransaction(e, s, a);
              (await r.default.filterAndUpdateTransactions([l]),
                "receive" === i &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${l.walletid}::new-socket-tx`,
                    { unconfirmedTx: l },
                  ),
                "confirm" === i &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    l.walletid,
                    l,
                    l.ticker,
                  ),
                n.forEach((t) => {
                  i === t &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${i}`,
                      l || {},
                    );
                }));
            }
          };
      e.default = i;
    },
    2977: function (t, e, s) {
      "use strict";
      (function (t) {
        var a = s(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0));
        var r = s(3090),
          n = a(s(129)),
          i = s(19),
          o = s(27),
          l = s(4),
          c = s(2853);
        const u = 50;
        class CosmosNodeExplorerV2 extends (0,
        c.CosmosNodeTransactionTypeMixin)(n.default) {
          constructor() {
            (super(...arguments),
              (this.defaultTxLimit = u),
              (this.canPaginate = !1),
              (this.lastKnownHeight = 0));
          }
          getInitParams() {
            if (!this.config.baseUrl)
              throw new Error(
                `${this.wallet.ticker} ${this.constructor.name}: explorer config have no baseUrl`,
              );
            return {
              baseURL: this.config.baseUrl,
              headers: {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                Pragma: "no-cache",
                Expires: 0,
              },
            };
          }
          getAllowedTickers() {
            return ["ATOM", "BAND", "OSMO", "KAVA", "FET"];
          }
          async request() {
            const t = await super.request(...arguments);
            return (
              t &&
                t.height &&
                this.lastKnownHeight < Number(t.height) &&
                (this.lastKnownHeight = t.height),
              t && t.result ? t.result : t
            );
          }
          async getAuth(t) {
            const e = await this.request("cosmos/auth/v1beta1/accounts/" + t);
            return e.account.base_account || e.account;
          }
          getLatestBlockUrl() {
            return "cosmos/base/tendermint/v1beta1/blocks/latest";
          }
          getSendTransactionUrl() {
            return "cosmos/tx/v1beta1/txs";
          }
          getSendTransactionParams(e) {
            return {
              tx_bytes: t.from(e).toString("base64"),
              mode: "BROADCAST_MODE_SYNC",
            };
          }
          modifySendTransactionResponse(t) {
            var e;
            if (t.tx_response.code)
              throw new i.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(JSON.stringify(t)),
                instance: this,
              });
            return {
              txid:
                null === (e = t.tx_response) || void 0 === e
                  ? void 0
                  : e.txhash,
            };
          }
          async sendDelegationTransaction(t, e) {
            const s = await this.request(
              `staking/delegators/${t}/delegations`,
              "post",
              e,
            );
            if (s.value && "0" === s.value.account_number)
              throw new i.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(s),
                instance: this,
              });
            return s.value;
          }
          async getTransaction(t, e) {
            const s = await this.request("txs/" + e);
            return this.modifyTransactionResponse(s, t);
          }
          async getTransactions(t) {
            let { address: e, limit: s, denom: a } = t;
            const n = await this.request(
                `/cosmos/tx/v1beta1/txs?events=message.sender=%27${e}%27&query=message.sender=%27${e}%27`,
              ),
              i = await this.request(
                `/cosmos/tx/v1beta1/txs?events=transfer.recipient=%27${e}%27&query=transfer.recipient=%27${e}%27`,
              ),
              o = new Map();
            (n.tx_responses.forEach((t) => {
              o.set(t.txhash, { ...t, direction: !1 });
            }),
              i.tx_responses.forEach((t) => {
                o.set(t.txhash, { ...t, direction: !0 });
              }));
            const l = [];
            for (const [, r] of o.entries()) l.push(r);
            l.sort((t, e) => Number(t.height) < Number(e.height));
            const c = l
                .flatMap((t) => [
                  ...t.tx.body.messages.map((e) => {
                    var s, a, n;
                    let i;
                    const o =
                      null === (s = t.tx) ||
                      void 0 === s ||
                      null === (a = s.auth_info) ||
                      void 0 === a ||
                      null === (n = a.fee) ||
                      void 0 === n
                        ? void 0
                        : n.amount;
                    var l, c, u;
                    o && Array.isArray(t.tx.auth_info.fee.amount)
                      ? (i = t.tx.auth_info.fee.amount.reduce(
                          (t, e) => t + parseInt(e.amount, 10),
                          0,
                        ))
                      : (i =
                          null === (l = t.tx) ||
                          void 0 === l ||
                          null === (c = l.auth_info) ||
                          void 0 === c ||
                          null === (u = c.fee) ||
                          void 0 === u
                            ? void 0
                            : u.amount);
                    return {
                      ...e,
                      ...(0, r.pick)(
                        t,
                        "from_address",
                        "to_address",
                        "amount",
                        "txhash",
                        "height",
                        "gas_used",
                        "gas_wanted",
                        "direction",
                        "logs",
                        "timestamp",
                      ),
                      memo: t.tx.body.memo,
                      messages: t.tx.body.messages,
                      fee: i,
                    };
                  }),
                ])
                .filter(
                  (t) =>
                    "MsgBeginRedelegate" !== this.getTransactionNativeType(t),
                ),
              u = (t) => {
                let { "@type": e, txhash: s } = t;
                return `${s}/${e}`;
              };
            return this.modifyTransactionsResponse((0, r.uniqBy)(c, u), e);
          }
          getTxValue(t, e) {
            var s;
            const a = Array.isArray(e.amount)
              ? e.amount[0].amount
              : (null === (s = e.amount) || void 0 === s ? void 0 : s.amount) ||
                e.withdraw_amount ||
                this.getAmountFromLogs(e);
            return this.wallet.toCurrencyUnit(a);
          }
          getAmountFromLogs(t) {
            return (t.logs || [])
              .reduce((t, e) => {
                let { events: s } = e;
                return t.concat(s || []);
              }, [])
              .filter((t) => {
                let { type: e } = t;
                return "transfer" === e;
              })
              .reduce((t, e) => {
                let { attributes: s } = e;
                return t.concat(s);
              }, [])
              .filter((t) => {
                let { key: e } = t;
                return "amount" === e;
              })
              .reduce((t, e) => {
                let { value: s } = e;
                return t + parseInt((s || "0").replace(/\D/gi, ""), 10);
              }, 0);
          }
          getTxDirection(t, e) {
            return e.direction;
          }
          getTxOtherSideAddress(t, e) {
            return this.getTxDirection(t, e)
              ? e.from_address || e.validator_address
              : e.to_address;
          }
          getTxDateTime(t) {
            return new Date(t.timestamp);
          }
          getTxConfirmations(t) {
            return this.lastKnownHeight
              ? this.lastKnownHeight - Number(t.height)
              : 1;
          }
          getTxHash(t) {
            return t.txhash;
          }
          getTxMemo(t) {
            return t.memo;
          }
          getTxType(t) {
            return this.getTransactionType(t);
          }
          async getTotalBalance(t) {
            try {
              const { balances: e } = await this.request(
                "cosmos/bank/v1beta1/balances/" + t,
              );
              return e;
            } catch (e) {
              console.warn(e);
            }
            return [];
          }
          async getRewardsBalance(t) {
            try {
              const { total: e } = await this.request(
                `cosmos/distribution/v1beta1/delegators/${t}/rewards`,
              );
              return e;
            } catch (e) {
              console.warn(e);
            }
            return "0";
          }
          async getStakedDelegations(t) {
            try {
              const { delegation_responses: e } = await this.request(
                "cosmos/staking/v1beta1/delegations/" + t,
              );
              return e;
            } catch (e) {
              console.warn(e);
            }
            return [];
          }
          async getUnbondingDelegations(t) {
            try {
              const { unbonding_responses: e } = await this.request(
                `cosmos/staking/v1beta1/delegators/${t}/unbonding_delegations`,
              );
              return e;
            } catch (e) {
              console.warn(e);
            }
            return [];
          }
          modifyLatestBlockResponse(t) {
            if (!t)
              throw new Error(
                "[CosmosNodeExplorer] wrong latest block response",
              );
            const e = Object.hasOwnProperty.call(t, "block")
              ? "block"
              : "block_meta";
            return (
              (this.chainId = t[e].header.chain_id),
              (this.lastKnownHeight = Number(t[e].header.height) || 0),
              t
            );
          }
          async getChainId() {
            return (await this.getLatestBlock(), this.chainId);
          }
          async getSignerData(t) {
            const { sequence: e = "0", account_number: s } =
                await this.getAuth(t),
              a = this.chainId || (await this.getChainId());
            return { sequence: e, accountNumber: s, chainId: a };
          }
          async getValidators(t) {
            const { validators: e } = await this.request(
              `cosmos/distribution/v1beta1/delegators/${t}/validators`,
            );
            return e.map(l.sanitizeString);
          }
          getTxFee(t) {
            return this.wallet.toCurrencyUnit(
              t.fee || this.wallet.feeDefault || 0,
            );
          }
          async getGasEstimation(t) {
            const {
              gas_info: { gas_used: e },
            } = await super.request(
              "cosmos/tx/v1beta1/simulate",
              "post",
              this.getSendTransactionParams(t),
            );
            return e;
          }
        }
        e.default = CosmosNodeExplorerV2;
      }).call(this, s(2).Buffer);
    },
    4939: function (t, e, s) {
      "use strict";
      var a = s(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = a(s(129)),
        n = s(19),
        i = s(27),
        o = a(s(388)),
        l = s(2853);
      const c = 50;
      class CosmosNodeExplorer extends (0, l.CosmosNodeTransactionTypeMixin)(
        r.default,
      ) {
        constructor() {
          (super(...arguments),
            (this.defaultTxLimit = c),
            (this.canPaginate = !0),
            (this.lastKnownHeight = 0));
          const t = o.default.find((t) => t.currency === this.wallet.ticker);
          ((this.validatorMoniker = {}),
            t.validators.forEach((t) => {
              this.validatorMoniker[t.address] = t.name;
            }));
        }
        getAllowedTickers() {
          return ["ATOM", "BAND"];
        }
        async request() {
          const t = await super.request(...arguments);
          return (
            t &&
              t.height &&
              this.lastKnownHeight < Number(t.height) &&
              (this.lastKnownHeight = t.height),
            t && t.result ? t.result : t
          );
        }
        async getAuth(t) {
          const e = await this.request("auth/accounts/" + t);
          if (e && e.value && "0" === e.value.account_number)
            throw new n.ExplorerRequestError({
              type: i.EXTERNAL_ERROR,
              error: new Error(JSON.stringify(e)),
              instance: this,
            });
          return e && e.value;
        }
        getLatestBlockUrl() {
          return "blocks/latest";
        }
        getSendTransactionUrl() {
          return "txs";
        }
        getSendTransactionParams(t) {
          return t;
        }
        modifySendTransactionResponse(t) {
          if (t.code)
            throw new n.ExplorerRequestError({
              type: i.SEND_TRANSACTION_TYPE,
              error: new Error(t.raw_log),
              instance: this,
            });
          return { txid: t.txhash };
        }
        async sendDelegationTransaction(t, e) {
          const s = await this.request(
            `staking/delegators/${t}/delegations`,
            "post",
            e,
          );
          if (s.value && "0" === s.value.account_number)
            throw new n.ExplorerRequestError({
              type: i.SEND_TRANSACTION_TYPE,
              error: new Error(s),
              instance: this,
            });
          return s.value;
        }
        async getTransactionRewardsBlueprint(t) {
          let {
            from: e,
            gas: s,
            gas_adjustment: a = "1.2",
            fee: r,
            chain_id: n,
            denom: i = "uatom",
          } = t;
          const o = await this.request(
            `distribution/delegators/${e}/rewards`,
            "post",
            {
              base_req: {
                from: e,
                chain_id: n,
                gas: s,
                gas_adjustment: a,
                fees: [{ denom: i, amount: r }],
                simulate: !1,
              },
            },
          );
          return o.value;
        }
        async getTransaction(t, e) {
          const s = await this.request("txs/" + e);
          return this.modifyTransactionResponse(s, t);
        }
        async getTransactions(t) {
          let { address: e, limit: s, pageNum: a } = t;
          a += 1;
          const [r, n] = await Promise.all([
              this.request(
                `txs?message.sender=${e}&message.action=send&page=${a}&limit=${s}`,
              ),
              this.request(
                `txs?transfer.recipient=${e}&message.action=send&page=${a}&limit=${s}`,
              ),
            ]),
            i = n.txs.map((t) => t.txhash),
            o = r.txs.filter((t) => !i.includes(t.txhash));
          (n.txs.forEach((t) => {
            t.direction = !0;
          }),
            o.forEach((t) => {
              t.direction = !1;
            }));
          const l = n.txs
            .concat(o)
            .sort((t, e) => (Number(t.height) < Number(e.height) ? 1 : -1));
          return (
            await this.getLatestBlock(),
            this.modifyTransactionsResponse(l, e)
          );
        }
        getTxValue(t, e) {
          const s = e.tx.value.msg[0].value.amount,
            a = Array.isArray(s) ? s[0].amount : s.amount;
          return this.wallet.toCurrencyUnit(a);
        }
        getTxDirection(t, e) {
          return (
            String(e.tx.value.msg[0].value.to_address).toLowerCase() ===
            t.toLowerCase()
          );
        }
        getTxOtherSideAddress(t, e) {
          return this.getTxDirection(t, e)
            ? e.tx.value.msg[0].value.from_address
            : e.tx.value.msg[0].value.to_address;
        }
        getTxDateTime(t) {
          return new Date(t.timestamp);
        }
        getTxConfirmations(t) {
          return this.lastKnownHeight - Number(t.height);
        }
        getTxHash(t) {
          return t.txhash;
        }
        getTxMemo(t) {
          return t.tx.value.memo;
        }
        getTotalDelegations(t, e) {
          switch (this.wallet.ticker) {
            case "ATOM":
              return this.getTotalDelegationsAtom(t, e);
            case "BAND":
              return this.getTotalDelegationsBand(t, e);
            default:
              throw new Error("Unknown wallet ticker");
          }
        }
        getTotalDelegationsBand(t, e) {
          let s = new this.wallet.BN("0");
          return (
            t.forEach((t) => {
              let { shares: a, validator_address: r } = t;
              const n = this.validatorMoniker[r] || r;
              ((e.validators[n] = {
                shares: this.wallet.toCurrencyUnit(a.split(".")[0]),
                address: r,
              }),
                (s = s.add(new this.wallet.BN(a.split(".")[0]))));
            }),
            s
          );
        }
        getTotalDelegationsAtom(t, e) {
          let s = new this.wallet.BN("0");
          return (
            t.forEach((t) => {
              let { delegation: a } = t;
              const r =
                this.validatorMoniker[a.validator_address] ||
                a.validator_address;
              ((e.validators[r] = {
                shares: this.wallet.toCurrencyUnit(a.shares.split(".")[0]),
                address: a.validator_address,
              }),
                (s = s.add(new this.wallet.BN(a.shares.split(".")[0]))));
            }),
            s
          );
        }
        async getInfo(t) {
          await this.getLatestBlock();
          const e = await this.request("bank/balances/" + t),
            s = await this.request(`staking/delegators/${t}/delegations`),
            a = await this.request(
              `staking/delegators/${t}/unbonding_delegations`,
            ),
            r = await this.request(`distribution/delegators/${t}/rewards`);
          let n = new this.wallet.BN(0);
          r.total &&
            r.total.length > 0 &&
            (n = new this.wallet.BN(r.total[0].amount.split(".")[0]));
          const i = this.wallet.toCurrencyUnit(n.toString());
          let o = "0";
          const l = { validators: {}, total: new this.wallet.BN("0") },
            c = { validators: {}, total: new this.wallet.BN("0") };
          let u = new this.wallet.BN(0);
          if (e && e.length > 0) {
            const t = new this.wallet.BN(e[0].amount);
            ((u = u.add(t)), (o = t.toString()));
          }
          if (s && s.length > 0) {
            const t = this.getTotalDelegations(s, l);
            ((u = u.add(t)),
              (l.total = this.wallet.toCurrencyUnit(t.toString())));
          }
          if (a && a.length > 0) {
            let t = new this.wallet.BN("0");
            (a.forEach((e) => {
              let { entries: s, validator_address: a } = e;
              const r = a;
              ((c.validators[r] = s
                .map((t) => new this.wallet.BN(t.balance.split(".")[0]))
                .reduce(
                  (t, e) => t.add(new this.wallet.BN(e)),
                  new this.wallet.BN("0"),
                )),
                (t = t.add(c.validators[r])));
            }),
              (u = u.add(t)),
              (c.total = this.wallet.toCurrencyUnit(
                t.toString().split(".")[0],
              )));
          }
          u = u.add(n);
          const d = new this.wallet.BN(o)
              .sub(new this.wallet.BN(this.wallet.feeDefault || 0))
              .sub(new this.wallet.BN(this.wallet.reserveForStake || 0)),
            h = Number(d) > 0 ? this.wallet.toCurrencyUnit(d) : 0;
          return {
            balance: u,
            balances: {
              available: this.wallet.toCurrencyUnit(o),
              total: u,
              staking: l,
              rewards: i,
              unbonding: c,
              availableForStake: h,
            },
            transactions: this.wallet.transactions,
          };
        }
        modifyLatestBlockResponse(t) {
          if (!t)
            throw new Error("[CosmosNodeExplorer] wrong latest block response");
          const e = Object.hasOwnProperty.call(t, "block")
            ? "block"
            : "block_meta";
          return (
            (this.chainId = t[e].header.chain_id),
            (this.lastKnownHeight = Number(t[e].header.height) || 0),
            t
          );
        }
        getChainId() {
          return this.chainId;
        }
        getTxFee(t) {
          try {
            const e = t.tx.value.fee.amount[0].amount;
            return this.wallet.toCurrencyUnit(e);
          } catch (e) {
            return 0;
          }
        }
      }
      e.default = CosmosNodeExplorer;
    },
  },
]);
