(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [341],
  {
    2720: function (e, t, s) {
      "use strict";
      var n = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(s(230)),
        a = n(s(2977)),
        i = s(2806);
      const o = "Fetch.AI",
        c = "FET",
        u = "m/44'/118'/0'/0/0",
        l = 18,
        d = "0",
        h = "fetch",
        g = "afet",
        m = "250000",
        f = "300000",
        p = "600000",
        v = "600000",
        y = "10000",
        x = 0.01;
      class FETCoin extends (0, i.CosmosMixinV2)(
        (0, i.HasBlockScanner)((0, i.HasProviders)(r.default)),
      ) {
        constructor(e) {
          var t, s, n, r;
          let {
            alias: i,
            notify: b,
            feeData: w,
            explorers: T,
            txWebUrl: _,
            socket: k,
            id: S,
          } = e;
          const E = {
            id: S,
            alias: i,
            notify: b,
            name: o,
            ticker: c,
            decimal: l,
            unspendableBalance: d,
            explorers: T,
            txWebUrl: _,
            socket: k,
            feeData: w,
            denom: g,
          };
          (super(E),
            (this.derivation = u),
            this.setExplorersModules([a.default]),
            this.loadExplorers(E),
            (this.prefix = h),
            (this.denom = g),
            (this.sendFeeGas =
              (null === (t = w.sendFeeGas) || void 0 === t
                ? void 0
                : t.toString()) || m),
            (this.stakingFeeGas =
              (null === (s = w.stakingFeeGas) || void 0 === s
                ? void 0
                : s.toString()) || f),
            (this.claimFeeGas =
              (null === (n = w.claimFeeGas) || void 0 === n
                ? void 0
                : n.toString()) || v),
            (this.reStakingFeeGas =
              (null === (r = w.reStakingFeeGas) || void 0 === r
                ? void 0
                : r.toString()) || p),
            (this.transactions = []),
            (this.minClaimSum = x),
            (this.fields.paymentId = !0),
            this.eventEmitter.on(
              this.ticker + "::confirmed-socket-tx",
              (e, t) => {
                this.onConfirmSocketTx(t);
              },
            ),
            (this.reserveForStake = w.reserveForStake || y));
        }
        getPredefineValidatorsConfigIdentifier() {
          return "" + this.ticker;
        }
      }
      t.default = FETCoin;
    },
    2807: function (e, t) {},
    2853: function (e, t, s) {
      "use strict";
      var n = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BtcLikeNodeMixin", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "CosmosNodeTransactionTypeMixin", {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, "HasBlockscannerMixin", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var r = n(s(2886)),
        a = n(s(2887)),
        i = n(s(2888));
    },
    2886: function (e, t, s) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = (e) =>
        class extends e {
          getSendTransactionUrl() {
            return this.config.baseUrl;
          }
          getSendTransactionParams(e) {
            return { method: "sendrawtransaction", params: [e] };
          }
          modifySendTransactionResponse(e) {
            return { txid: e.result };
          }
        };
      t.default = n;
    },
    2887: function (e, t, s) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = (e) =>
        class extends e {
          getTransactionsModifiedResponse(e, t, s) {
            return (
              void 0 === s && (s = this.wallet.ticker),
              Object.assign(
                { txType: this.getTransactionType(e) },
                super.getTransactionsModifiedResponse(e, t, s),
              )
            );
          }
          getTransactionNativeType(e) {
            const t = Array.isArray(
              null === e || void 0 === e ? void 0 : e.messages,
            )
              ? e.messages
              : [];
            return t.map((e) => {
              let { "@type": t } = e;
              return t.split(".").pop();
            })[0];
          }
          getTransactionType(e) {
            const t = this.getTransactionNativeType(e),
              s = {
                MsgWithdrawDelegatorReward: "reward",
                MsgDelegate: "stake",
                MsgUndelegate: "unstake",
              };
            return void 0 === s[t] ? "transfer" : s[t];
          }
        };
      t.default = n;
    },
    2888: function (e, t, s) {
      "use strict";
      var n = s(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(s(81));
      const a = ["reward", "unfreeze", "freeze", "vote"],
        i = (e) =>
          class extends e {
            async getSocketTransaction(e) {
              let {
                address: t,
                hash: s,
                tokens: n,
                type: i,
                scriptPubKey: o,
              } = e;
              const c = await this.getTransaction(t, s, n);
              (await r.default.filterAndUpdateTransactions([c]),
                "receive" === i &&
                  this.eventEmitter.emit(
                    `${this.wallet.parent}-${c.walletid}::new-socket-tx`,
                    { unconfirmedTx: c },
                  ),
                "confirm" === i &&
                  this.eventEmitter.emit(
                    this.wallet.parent + "::confirmed-socket-tx",
                    c.walletid,
                    c,
                    c.ticker,
                  ),
                a.forEach((e) => {
                  i === e &&
                    this.eventEmitter.emit(
                      `${this.wallet.parent}::confirmed-${i}`,
                      c || {},
                    );
                }));
            }
          };
      t.default = i;
    },
    2977: function (e, t, s) {
      "use strict";
      (function (e) {
        var n = s(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var r = s(3090),
          a = n(s(129)),
          i = s(19),
          o = s(27),
          c = s(4),
          u = s(2853);
        const l = 50;
        class CosmosNodeExplorerV2 extends (0,
        u.CosmosNodeTransactionTypeMixin)(a.default) {
          constructor() {
            (super(...arguments),
              (this.defaultTxLimit = l),
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
            const e = await super.request(...arguments);
            return (
              e &&
                e.height &&
                this.lastKnownHeight < Number(e.height) &&
                (this.lastKnownHeight = e.height),
              e && e.result ? e.result : e
            );
          }
          async getAuth(e) {
            const t = await this.request("cosmos/auth/v1beta1/accounts/" + e);
            return t.account.base_account || t.account;
          }
          getLatestBlockUrl() {
            return "cosmos/base/tendermint/v1beta1/blocks/latest";
          }
          getSendTransactionUrl() {
            return "cosmos/tx/v1beta1/txs";
          }
          getSendTransactionParams(t) {
            return {
              tx_bytes: e.from(t).toString("base64"),
              mode: "BROADCAST_MODE_SYNC",
            };
          }
          modifySendTransactionResponse(e) {
            var t;
            if (e.tx_response.code)
              throw new i.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(JSON.stringify(e)),
                instance: this,
              });
            return {
              txid:
                null === (t = e.tx_response) || void 0 === t
                  ? void 0
                  : t.txhash,
            };
          }
          async sendDelegationTransaction(e, t) {
            const s = await this.request(
              `staking/delegators/${e}/delegations`,
              "post",
              t,
            );
            if (s.value && "0" === s.value.account_number)
              throw new i.ExplorerRequestError({
                type: o.SEND_TRANSACTION_TYPE,
                error: new Error(s),
                instance: this,
              });
            return s.value;
          }
          async getTransaction(e, t) {
            const s = await this.request("txs/" + t);
            return this.modifyTransactionResponse(s, e);
          }
          async getTransactions(e) {
            let { address: t, limit: s, denom: n } = e;
            const a = await this.request(
                `/cosmos/tx/v1beta1/txs?events=message.sender=%27${t}%27&query=message.sender=%27${t}%27`,
              ),
              i = await this.request(
                `/cosmos/tx/v1beta1/txs?events=transfer.recipient=%27${t}%27&query=transfer.recipient=%27${t}%27`,
              ),
              o = new Map();
            (a.tx_responses.forEach((e) => {
              o.set(e.txhash, { ...e, direction: !1 });
            }),
              i.tx_responses.forEach((e) => {
                o.set(e.txhash, { ...e, direction: !0 });
              }));
            const c = [];
            for (const [, r] of o.entries()) c.push(r);
            c.sort((e, t) => Number(e.height) < Number(t.height));
            const u = c
                .flatMap((e) => [
                  ...e.tx.body.messages.map((t) => {
                    var s, n, a;
                    let i;
                    const o =
                      null === (s = e.tx) ||
                      void 0 === s ||
                      null === (n = s.auth_info) ||
                      void 0 === n ||
                      null === (a = n.fee) ||
                      void 0 === a
                        ? void 0
                        : a.amount;
                    var c, u, l;
                    o && Array.isArray(e.tx.auth_info.fee.amount)
                      ? (i = e.tx.auth_info.fee.amount.reduce(
                          (e, t) => e + parseInt(t.amount, 10),
                          0,
                        ))
                      : (i =
                          null === (c = e.tx) ||
                          void 0 === c ||
                          null === (u = c.auth_info) ||
                          void 0 === u ||
                          null === (l = u.fee) ||
                          void 0 === l
                            ? void 0
                            : l.amount);
                    return {
                      ...t,
                      ...(0, r.pick)(
                        e,
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
                      memo: e.tx.body.memo,
                      messages: e.tx.body.messages,
                      fee: i,
                    };
                  }),
                ])
                .filter(
                  (e) =>
                    "MsgBeginRedelegate" !== this.getTransactionNativeType(e),
                ),
              l = (e) => {
                let { "@type": t, txhash: s } = e;
                return `${s}/${t}`;
              };
            return this.modifyTransactionsResponse((0, r.uniqBy)(u, l), t);
          }
          getTxValue(e, t) {
            var s;
            const n = Array.isArray(t.amount)
              ? t.amount[0].amount
              : (null === (s = t.amount) || void 0 === s ? void 0 : s.amount) ||
                t.withdraw_amount ||
                this.getAmountFromLogs(t);
            return this.wallet.toCurrencyUnit(n);
          }
          getAmountFromLogs(e) {
            return (e.logs || [])
              .reduce((e, t) => {
                let { events: s } = t;
                return e.concat(s || []);
              }, [])
              .filter((e) => {
                let { type: t } = e;
                return "transfer" === t;
              })
              .reduce((e, t) => {
                let { attributes: s } = t;
                return e.concat(s);
              }, [])
              .filter((e) => {
                let { key: t } = e;
                return "amount" === t;
              })
              .reduce((e, t) => {
                let { value: s } = t;
                return e + parseInt((s || "0").replace(/\D/gi, ""), 10);
              }, 0);
          }
          getTxDirection(e, t) {
            return t.direction;
          }
          getTxOtherSideAddress(e, t) {
            return this.getTxDirection(e, t)
              ? t.from_address || t.validator_address
              : t.to_address;
          }
          getTxDateTime(e) {
            return new Date(e.timestamp);
          }
          getTxConfirmations(e) {
            return this.lastKnownHeight
              ? this.lastKnownHeight - Number(e.height)
              : 1;
          }
          getTxHash(e) {
            return e.txhash;
          }
          getTxMemo(e) {
            return e.memo;
          }
          getTxType(e) {
            return this.getTransactionType(e);
          }
          async getTotalBalance(e) {
            try {
              const { balances: t } = await this.request(
                "cosmos/bank/v1beta1/balances/" + e,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return [];
          }
          async getRewardsBalance(e) {
            try {
              const { total: t } = await this.request(
                `cosmos/distribution/v1beta1/delegators/${e}/rewards`,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return "0";
          }
          async getStakedDelegations(e) {
            try {
              const { delegation_responses: t } = await this.request(
                "cosmos/staking/v1beta1/delegations/" + e,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return [];
          }
          async getUnbondingDelegations(e) {
            try {
              const { unbonding_responses: t } = await this.request(
                `cosmos/staking/v1beta1/delegators/${e}/unbonding_delegations`,
              );
              return t;
            } catch (t) {
              console.warn(t);
            }
            return [];
          }
          modifyLatestBlockResponse(e) {
            if (!e)
              throw new Error(
                "[CosmosNodeExplorer] wrong latest block response",
              );
            const t = Object.hasOwnProperty.call(e, "block")
              ? "block"
              : "block_meta";
            return (
              (this.chainId = e[t].header.chain_id),
              (this.lastKnownHeight = Number(e[t].header.height) || 0),
              e
            );
          }
          async getChainId() {
            return (await this.getLatestBlock(), this.chainId);
          }
          async getSignerData(e) {
            const { sequence: t = "0", account_number: s } =
                await this.getAuth(e),
              n = this.chainId || (await this.getChainId());
            return { sequence: t, accountNumber: s, chainId: n };
          }
          async getValidators(e) {
            const { validators: t } = await this.request(
              `cosmos/distribution/v1beta1/delegators/${e}/validators`,
            );
            return t.map(c.sanitizeString);
          }
          getTxFee(e) {
            return this.wallet.toCurrencyUnit(
              e.fee || this.wallet.feeDefault || 0,
            );
          }
          async getGasEstimation(e) {
            const {
              gas_info: { gas_used: t },
            } = await super.request(
              "cosmos/tx/v1beta1/simulate",
              "post",
              this.getSendTransactionParams(e),
            );
            return t;
          }
        }
        t.default = CosmosNodeExplorerV2;
      }).call(this, s(2).Buffer);
    },
  },
]);
