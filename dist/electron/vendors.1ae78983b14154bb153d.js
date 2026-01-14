(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [175],
  {
    2835: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = u(n(3658)),
        r = u(n(2826));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenId {
        constructor(e, t, n) {
          const r = o.constructor(e, t, n);
          ((this.shard = r.shard),
            (this.realm = r.realm),
            (this.num = r.num),
            (this._checksum = null));
        }
        static fromString(e) {
          const t = o.fromString(e),
            n = new TokenId(t);
          return ((n._checksum = t.checksum), n);
        }
        static _fromProtobuf(e) {
          const t = new TokenId(
            null != e.shardNum ? e.shardNum : 0,
            null != e.realmNum ? e.realmNum : 0,
            null != e.tokenNum ? e.tokenNum : 0,
          );
          return t;
        }
        get checksum() {
          return this._checksum;
        }
        validate(e) {
          (console.warn("Deprecated: Use `validateChecksum` instead"),
            this.validateChecksum(e));
        }
        validateChecksum(e) {
          o.validateChecksum(
            this.shard,
            this.realm,
            this.num,
            this._checksum,
            e,
          );
        }
        static fromBytes(e) {
          return TokenId._fromProtobuf(r.proto.TokenID.decode(e));
        }
        static fromSolidityAddress(e) {
          return new TokenId(...o.fromSolidityAddress(e));
        }
        toSolidityAddress() {
          return o.toSolidityAddress([this.shard, this.realm, this.num]);
        }
        _toProtobuf() {
          return {
            tokenNum: this.num,
            shardNum: this.shard,
            realmNum: this.realm,
          };
        }
        toString() {
          return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`;
        }
        toStringWithChecksum(e) {
          return o.toStringWithChecksum(this.toString(), e);
        }
        toBytes() {
          return r.proto.TokenID.encode(this._toProtobuf()).finish();
        }
        clone() {
          const e = new TokenId(this);
          return ((e._checksum = this._checksum), e);
        }
        compare(e) {
          return o.compare(
            [this.shard, this.realm, this.num],
            [e.shard, e.realm, e.num],
          );
        }
      }
      t.default = TokenId;
    },
    2978: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QUERY_REGISTRY = t.COST_QUERY = void 0),
        (t._makePaymentTransaction = m),
        (t.default = void 0));
      var r = o(n(3555)),
        u = o(n(2774)),
        s = o(n(2831)),
        i = h(n(3557)),
        a = o(n(3093)),
        l = h(n(2826)),
        c = o(n(3899)),
        d = o(n(6110)),
        f = o(n(2754));
      function h(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (h = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      const _ = (t.QUERY_REGISTRY = new Map());
      class Query extends i.default {
        constructor() {
          (super(),
            (this._paymentTransactionId = null),
            (this._paymentTransactions = []),
            (this._queryPayment = null),
            (this._maxQueryPayment = null),
            (this._timestamp = Date.now()));
        }
        static fromBytes(e) {
          const t = l.proto.Query.decode(e);
          if (null == t.query)
            throw new Error("(BUG) query.query was not set in the protobuf");
          const n = _.get(t.query);
          if (null == n)
            throw new Error(
              "(BUG) Query.fromBytes() not implemented for type " + t.query,
            );
          return n(t);
        }
        toBytes() {
          return l.proto.Query.encode(this._makeRequest()).finish();
        }
        setQueryPayment(e) {
          return ((this._queryPayment = e), this);
        }
        setMaxQueryPayment(e) {
          return ((this._maxQueryPayment = e), this);
        }
        async getCost(e) {
          if (
            (this._nodeAccountIds.isEmpty &&
              this._nodeAccountIds.setList(
                e._network.getNodeAccountIdsForExecute(),
              ),
            1 != p.length)
          )
            throw new Error("CostQuery has not been loaded yet");
          this._timestamp = Date.now();
          const t = await p[0](this).execute(e);
          return s.default.fromTinybars(
            t._valueInTinybar.multipliedBy(1.1).toFixed(0),
          );
        }
        setPaymentTransactionId(e) {
          return ((this._paymentTransactionId = e), this);
        }
        get paymentTransactionId() {
          return this._paymentTransactionId;
        }
        _getTransactionId() {
          if (null == this._paymentTransactionId)
            throw new Error(
              "Query.PaymentTransactionId was not set duration execution",
            );
          return this._paymentTransactionId;
        }
        _isPaymentRequired() {
          return !0;
        }
        _validateChecksums(e) {}
        async _beforeExecute(e) {
          if (this._paymentTransactions.length > 0) return;
          if (
            (e.isAutoValidateChecksumsEnabled() && this._validateChecksums(e),
            this._nodeAccountIds.isEmpty &&
              this._nodeAccountIds.setList(
                e._network.getNodeAccountIdsForExecute(),
              ),
            (this._operator =
              null != this._operator ? this._operator : e._operator),
            null == this._paymentTransactionId)
          )
            if (this._isPaymentRequired()) {
              if (null == this._operator)
                throw new Error(
                  "`client` must have an `operator` or an explicit payment transaction must be provided",
                );
              this._paymentTransactionId = a.default.generate(
                this._operator.accountId,
              );
            } else
              this._paymentTransactionId = a.default.generate(new u.default(0));
          let t = new s.default(0);
          const n =
            null != this._maxQueryPayment
              ? this._maxQueryPayment
              : e.defaultMaxQueryPayment;
          if (null != this._queryPayment) t = this._queryPayment;
          else if (
            0 === this._paymentTransactions.length &&
            this._isPaymentRequired()
          ) {
            const o = await this.getCost(e);
            if (n.toTinybars().toInt() < o.toTinybars().toInt())
              throw new d.default(o, n);
            ((t = o),
              this._logger &&
                this._logger.debug(
                  `[${this._getLogId()}] received cost for query ${t.toString()}`,
                ));
          }
          ((this._queryPayment = t),
            (this._timestamp = Date.now()),
            this._nodeAccountIds.setLocked());
          for (const o of this._nodeAccountIds.list) {
            const e = this._getLogId(),
              t = this._paymentTransactionId,
              n = this._queryPayment;
            (this._logger &&
              this._logger.debug(
                `[${e}] making a payment transaction for node ${o.toString()} and transaction ID ${t.toString()} with amount ${n.toString()}`,
              ),
              this._paymentTransactions.push(
                await m(
                  t,
                  o,
                  this._isPaymentRequired() ? this._operator : null,
                  n,
                ),
              ));
          }
        }
        _mapResponseHeader(e) {
          throw new Error("not implemented");
        }
        _makeRequestHeader() {
          let e = {};
          return (
            this._isPaymentRequired() &&
              this._paymentTransactions.length > 0 &&
              (e = {
                responseType: l.proto.ResponseType.ANSWER_ONLY,
                payment: this._paymentTransactions[this._nodeAccountIds.index],
              }),
            e
          );
        }
        _onMakeRequest(e) {
          throw new Error("not implemented");
        }
        _makeRequest() {
          let e = {};
          return (
            this._isPaymentRequired() &&
              null != this._paymentTransactions &&
              (e = {
                payment: this._paymentTransactions[this._nodeAccountIds.index],
                responseType: l.proto.ResponseType.ANSWER_ONLY,
              }),
            this._onMakeRequest(e)
          );
        }
        async _makeRequestAsync() {
          let e = { responseType: l.proto.ResponseType.ANSWER_ONLY };
          if (this._isPaymentRequired() && null != this._paymentTransactions)
            if (this._nodeAccountIds.locked)
              e.payment = this._paymentTransactions[this._nodeAccountIds.index];
            else {
              const t = this._getLogId(),
                n = this._nodeAccountIds.current,
                o = this._paymentTransactionId,
                r = this._queryPayment;
              (this._logger &&
                this._logger.debug(
                  `[${t}] making a payment transaction for node ${n.toString()} and transaction ID ${o.toString()} with amount ${r.toString()}`,
                ),
                (e.payment = await m(
                  o,
                  n,
                  this._isPaymentRequired() ? this._operator : null,
                  r,
                )));
            }
          return this._onMakeRequest(e);
        }
        _shouldRetry(e, t) {
          const { nodeTransactionPrecheckCode: n } = this._mapResponseHeader(t),
            o = r.default._fromCode(
              null != n ? n : l.proto.ResponseCodeEnum.OK,
            );
          switch (
            (this._logger &&
              this._logger.debug(
                `[${this._getLogId()}] received status ${o.toString()}`,
              ),
            o)
          ) {
            case r.default.Busy:
            case r.default.Unknown:
            case r.default.PlatformTransactionNotCreated:
              return [o, i.ExecutionState.Retry];
            case r.default.Ok:
              return [o, i.ExecutionState.Finished];
            default:
              return [o, i.ExecutionState.Error];
          }
        }
        _mapStatusError(e, t) {
          const { nodeTransactionPrecheckCode: n } = this._mapResponseHeader(t),
            o = r.default._fromCode(
              null != n ? n : l.proto.ResponseCodeEnum.OK,
            );
          return new c.default({
            status: o,
            transactionId: this._getTransactionId(),
            contractFunctionResult: null,
          });
        }
        _requestToBytes(e) {
          return l.proto.Query.encode(e).finish();
        }
        _responseToBytes(e) {
          return l.proto.Response.encode(e).finish();
        }
      }
      async function m(e, t, n, o) {
        const r = [];
        null != n
          ? (r.push({
              accountID: n.accountId._toProtobuf(),
              amount: o.negated().toTinybars(),
            }),
            r.push({ accountID: t._toProtobuf(), amount: o.toTinybars() }))
          : (r.push({
              accountID: new u.default(0)._toProtobuf(),
              amount: o.negated().toTinybars(),
            }),
            r.push({ accountID: t._toProtobuf(), amount: o.toTinybars() }));
        const i = {
            transactionID: e._toProtobuf(),
            nodeAccountID: t._toProtobuf(),
            transactionFee: new s.default(1).toTinybars(),
            transactionValidDuration: { seconds: f.default.fromNumber(120) },
            cryptoTransfer: { transfers: { accountAmounts: r } },
          },
          a = { bodyBytes: l.proto.TransactionBody.encode(i).finish() };
        if (null != n) {
          const e = await n.transactionSigner(a.bodyBytes);
          a.sigMap = { sigPair: [n.publicKey._toProtobufSignature(e)] };
        }
        return {
          signedTransactionBytes: l.proto.SignedTransaction.encode(a).finish(),
        };
      }
      t.default = Query;
      const p = (t.COST_QUERY = []);
    },
    3558: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = u(n(3658)),
        r = u(n(2826));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicId {
        constructor(e, t, n) {
          const r = o.constructor(e, t, n);
          ((this.shard = r.shard),
            (this.realm = r.realm),
            (this.num = r.num),
            (this._checksum = null));
        }
        static fromString(e) {
          const t = o.fromString(e),
            n = new TopicId(t);
          return ((n._checksum = t.checksum), n);
        }
        static _fromProtobuf(e) {
          const t = new TopicId(
            null != e.shardNum ? e.shardNum : 0,
            null != e.realmNum ? e.realmNum : 0,
            null != e.topicNum ? e.topicNum : 0,
          );
          return t;
        }
        get checksum() {
          return this._checksum;
        }
        validate(e) {
          (console.warn("Deprecated: Use `validateChecksum` instead"),
            this.validateChecksum(e));
        }
        validateChecksum(e) {
          o.validateChecksum(
            this.shard,
            this.realm,
            this.num,
            this._checksum,
            e,
          );
        }
        static fromBytes(e) {
          return TopicId._fromProtobuf(r.proto.TopicID.decode(e));
        }
        static fromSolidityAddress(e) {
          const [t, n, r] = o.fromSolidityAddress(e);
          return new TopicId(t, n, r);
        }
        toSolidityAddress() {
          return o.toSolidityAddress([this.shard, this.realm, this.num]);
        }
        _toProtobuf() {
          return {
            topicNum: this.num,
            shardNum: this.shard,
            realmNum: this.realm,
          };
        }
        toString() {
          return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`;
        }
        toStringWithChecksum(e) {
          return o.toStringWithChecksum(this.toString(), e);
        }
        toBytes() {
          return r.proto.TopicID.encode(this._toProtobuf()).finish();
        }
        clone() {
          const e = new TopicId(this);
          return ((e._checksum = this._checksum), e);
        }
        compare(e) {
          return o.compare(
            [this.shard, this.realm, this.num],
            [e.shard, e.realm, e.num],
          );
        }
      }
      t.default = TopicId;
    },
    3664: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = u(n(3658)),
        r = u(n(2826));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class ScheduleId {
        constructor(e, t, n) {
          const r = o.constructor(e, t, n);
          ((this.shard = r.shard),
            (this.realm = r.realm),
            (this.num = r.num),
            (this._checksum = null));
        }
        static fromString(e) {
          const t = o.fromString(e),
            n = new ScheduleId(t);
          return ((n._checksum = t.checksum), n);
        }
        static _fromProtobuf(e) {
          const t = new ScheduleId(
            null != e.shardNum ? e.shardNum : 0,
            null != e.realmNum ? e.realmNum : 0,
            null != e.scheduleNum ? e.scheduleNum : 0,
          );
          return t;
        }
        get checksum() {
          return this._checksum;
        }
        validate(e) {
          (console.warn("Deprecated: Use `validateChecksum` instead"),
            this.validateChecksum(e));
        }
        validateChecksum(e) {
          o.validateChecksum(
            this.shard,
            this.realm,
            this.num,
            this._checksum,
            e,
          );
        }
        static fromBytes(e) {
          return ScheduleId._fromProtobuf(r.proto.ScheduleID.decode(e));
        }
        static fromSolidityAddress(e) {
          return new ScheduleId(...o.fromSolidityAddress(e));
        }
        toSolidityAddress() {
          return o.toSolidityAddress([this.shard, this.realm, this.num]);
        }
        _toProtobuf() {
          return {
            scheduleNum: this.num,
            shardNum: this.shard,
            realmNum: this.realm,
          };
        }
        toString() {
          return `${this.shard.toString()}.${this.realm.toString()}.${this.num.toString()}`;
        }
        toStringWithChecksum(e) {
          return o.toStringWithChecksum(this.toString(), e);
        }
        toBytes() {
          return r.proto.ScheduleID.encode(this._toProtobuf()).finish();
        }
        clone() {
          const e = new ScheduleId(this);
          return ((e._checksum = this._checksum), e);
        }
        compare(e) {
          return o.compare(
            [this.shard, this.realm, this.num],
            [e.shard, e.realm, e.num],
          );
        }
      }
      t.default = ScheduleId;
    },
    3665: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(n(2826)),
        u = o(n(2835)),
        s = o(n(2754));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class NftId {
        constructor(e, t) {
          ((this.tokenId = e),
            (this.serial = "number" === typeof t ? s.default.fromNumber(t) : t),
            Object.freeze(this));
        }
        static fromString(e) {
          const t = e.split("/").length > 1 ? e.split("/") : e.split("@");
          for (const r of t)
            if ("" === r)
              throw new Error(
                "invalid format for NftId: use [token]/[serial] or [token]@[serial]",
              );
          const n = u.default.fromString(t[0]),
            o = s.default.fromString(t[1]);
          return new NftId(n, o);
        }
        static _fromProtobuf(e) {
          return new NftId(
            u.default._fromProtobuf(e.tokenID),
            null != e.serialNumber ? e.serialNumber : s.default.ZERO,
          );
        }
        static fromBytes(e) {
          return NftId._fromProtobuf(r.proto.NftID.decode(e));
        }
        _toProtobuf() {
          return {
            tokenID: this.tokenId._toProtobuf(),
            serialNumber: s.default.fromValue(
              void 0 !== this.serial ? this.serial : 0,
            ),
          };
        }
        toString() {
          return `${this.tokenId.toString()}/${this.serial.toString()}`;
        }
        toBytes() {
          return r.proto.NftID.encode(this._toProtobuf()).finish();
        }
      }
      t.default = NftId;
    },
    4294: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(4680)),
        s = o(n(2774)),
        i = o(n(2754)),
        a = o(n(2831));
      class CustomFixedFee extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(e),
            (this._denominatingTokenId = null),
            null != e.denominatingTokenId &&
              this.setDenominatingTokenId(e.denominatingTokenId),
            (this._amount = null),
            null != e.amount && this.setAmount(e.amount));
        }
        setHbarAmount(e) {
          return (
            (this._amount = e.toTinybars()),
            (this._denominatingTokenId = null),
            this
          );
        }
        get hbarAmount() {
          return null != this._denominatingTokenId
            ? null
            : a.default.fromTinybars(null != this._amount ? this._amount : 0);
        }
        setDenominatingTokenToSameToken() {
          return ((this._denominatingTokenId = new r.default(0, 0, 0)), this);
        }
        get denominatingTokenId() {
          return this._denominatingTokenId;
        }
        setDenominatingTokenId(e) {
          return (
            (this._denominatingTokenId =
              "string" === typeof e ? r.default.fromString(e) : e),
            this
          );
        }
        get amount() {
          return this._amount;
        }
        setAmount(e) {
          return (
            (this._amount =
              "number" === typeof e ? i.default.fromNumber(e) : e),
            this
          );
        }
        static _fromProtobuf(e) {
          const t = e.fixedFee;
          return new CustomFixedFee({
            feeCollectorAccountId:
              null != e.feeCollectorAccountId
                ? s.default._fromProtobuf(e.feeCollectorAccountId)
                : void 0,
            allCollectorsAreExempt:
              null != e.allCollectorsAreExempt
                ? e.allCollectorsAreExempt
                : void 0,
            denominatingTokenId:
              null != t.denominatingTokenId
                ? r.default._fromProtobuf(t.denominatingTokenId)
                : void 0,
            amount: null != t.amount ? t.amount : void 0,
          });
        }
        _toProtobuf() {
          return {
            feeCollectorAccountId:
              null != this.feeCollectorAccountId
                ? this.feeCollectorAccountId._toProtobuf()
                : null,
            allCollectorsAreExempt: this.allCollectorsAreExempt,
            fixedFee: {
              denominatingTokenId:
                null != this._denominatingTokenId
                  ? this._denominatingTokenId._toProtobuf()
                  : null,
              amount: this._amount,
            },
          };
        }
      }
      t.default = CustomFixedFee;
    },
    4680: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2774));
      class CustomFee {
        constructor(e) {
          (void 0 === e && (e = {}),
            (this._feeCollectorAccountId = null),
            (this._allCollectorsAreExempt = !1),
            null != e.feeCollectorAccountId &&
              this.setFeeCollectorAccountId(e.feeCollectorAccountId),
            null != e.allCollectorsAreExempt &&
              this.setAllCollectorsAreExempt(e.allCollectorsAreExempt));
        }
        get feeCollectorAccountId() {
          return this._feeCollectorAccountId;
        }
        setFeeCollectorAccountId(e) {
          return (
            (this._feeCollectorAccountId =
              "string" === typeof e ? r.default.fromString(e) : e),
            this
          );
        }
        get allCollectorsAreExempt() {
          return this._allCollectorsAreExempt;
        }
        setAllCollectorsAreExempt(e) {
          return ((this._allCollectorsAreExempt = e), this);
        }
        static _fromProtobuf(e) {
          throw new Error("not implemented");
        }
        _toProtobuf() {
          throw new Error("not implemented");
        }
      }
      t.default = CustomFee;
    },
    4681: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(4680)),
        u = o(n(2774)),
        s = o(n(6132)),
        i = o(n(2754));
      class CustomFractionalFee extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(e),
            (this._numerator = null),
            null != e.numerator && this.setNumerator(e.numerator),
            (this._denominator = null),
            null != e.denominator && this.setDenominator(e.denominator),
            (this._min = null),
            null != e.min && this.setMin(e.min),
            this._max,
            null != e.max && this.setMax(e.max),
            this._assessmentMethod,
            null != e.assessmentMethod &&
              this.setAssessmentMethod(e.assessmentMethod));
        }
        get numerator() {
          return this._numerator;
        }
        setNumerator(e) {
          return (
            (this._numerator =
              "number" === typeof e ? i.default.fromNumber(e) : e),
            this
          );
        }
        get denominator() {
          return this._denominator;
        }
        setDenominator(e) {
          return (
            (this._denominator =
              "number" === typeof e ? i.default.fromNumber(e) : e),
            this
          );
        }
        get min() {
          return this._min;
        }
        setMin(e) {
          return (
            (this._min = "number" === typeof e ? i.default.fromNumber(e) : e),
            this
          );
        }
        get max() {
          return this._max;
        }
        setMax(e) {
          return (
            (this._max = "number" === typeof e ? i.default.fromNumber(e) : e),
            this
          );
        }
        get assessmentMethod() {
          return this._assessmentMethod;
        }
        setAssessmentMethod(e) {
          return ((this._assessmentMethod = e), this);
        }
        static _fromProtobuf(e) {
          const t = e.fractionalFee,
            n = t.fractionalAmount;
          return new CustomFractionalFee({
            feeCollectorAccountId:
              null != e.feeCollectorAccountId
                ? u.default._fromProtobuf(e.feeCollectorAccountId)
                : void 0,
            allCollectorsAreExempt:
              null != e.allCollectorsAreExempt
                ? e.allCollectorsAreExempt
                : void 0,
            numerator: null != n.numerator ? n.numerator : void 0,
            denominator: null != n.denominator ? n.denominator : void 0,
            min: null != t.minimumAmount ? t.minimumAmount : void 0,
            max: null != t.maximumAmount ? t.maximumAmount : void 0,
            assessmentMethod:
              null != t.netOfTransfers
                ? new s.default(t.netOfTransfers)
                : void 0,
          });
        }
        _toProtobuf() {
          return {
            feeCollectorAccountId:
              null != this.feeCollectorAccountId
                ? this.feeCollectorAccountId._toProtobuf()
                : null,
            allCollectorsAreExempt: this.allCollectorsAreExempt,
            fractionalFee: {
              fractionalAmount: {
                numerator: this._numerator,
                denominator: this._denominator,
              },
              minimumAmount: this._min,
              maximumAmount: this._max,
              netOfTransfers:
                null != this._assessmentMethod &&
                this._assessmentMethod.valueOf(),
            },
          };
        }
      }
      t.default = CustomFractionalFee;
    },
    4682: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(4680)),
        u = o(n(2774)),
        s = o(n(2754)),
        i = o(n(4294));
      class CustomRoyalyFee extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(e),
            (this._fallbackFee = null),
            null != e.fallbackFee && this.setFallbackFee(e.fallbackFee),
            (this._numerator = null),
            null != e.numerator && this.setNumerator(e.numerator),
            (this._denominator = null),
            null != e.denominator && this.setDenominator(e.denominator));
        }
        get fallbackFee() {
          return this._fallbackFee;
        }
        setFallbackFee(e) {
          return ((this._fallbackFee = e), this);
        }
        get numerator() {
          return this._numerator;
        }
        setNumerator(e) {
          return (
            (this._numerator =
              "number" === typeof e ? s.default.fromNumber(e) : e),
            this
          );
        }
        get denominator() {
          return this._denominator;
        }
        setDenominator(e) {
          return (
            (this._denominator =
              "number" === typeof e ? s.default.fromNumber(e) : e),
            this
          );
        }
        static _fromProtobuf(e) {
          const t = e.royaltyFee,
            n = t.exchangeValueFraction;
          return new CustomRoyalyFee({
            feeCollectorAccountId:
              null != e.feeCollectorAccountId
                ? u.default._fromProtobuf(e.feeCollectorAccountId)
                : void 0,
            allCollectorsAreExempt:
              null != e.allCollectorsAreExempt
                ? e.allCollectorsAreExempt
                : void 0,
            fallbackFee:
              null != t.fallbackFee
                ? i.default._fromProtobuf({ fixedFee: t.fallbackFee })
                : void 0,
            numerator: null != n.numerator ? n.numerator : void 0,
            denominator: null != n.denominator ? n.denominator : void 0,
          });
        }
        _toProtobuf() {
          return {
            feeCollectorAccountId:
              null != this.feeCollectorAccountId
                ? this.feeCollectorAccountId._toProtobuf()
                : null,
            allCollectorsAreExempt: this.allCollectorsAreExempt,
            royaltyFee: {
              exchangeValueFraction: {
                numerator: this._numerator,
                denominator: this._denominator,
              },
              fallbackFee:
                null != this._fallbackFee
                  ? this._fallbackFee._toProtobuf().fixedFee
                  : null,
            },
          };
        }
      }
      t.default = CustomRoyalyFee;
    },
    5023: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      class TokenType {
        constructor(e) {
          ((this._code = e), Object.freeze(this));
        }
        toString() {
          switch (this) {
            case TokenType.FungibleCommon:
              return "FUNGIBLE_COMMON";
            case TokenType.NonFungibleUnique:
              return "NON_FUNGIBLE_UNIQUE";
            default:
              return `UNKNOWN (${this._code})`;
          }
        }
        static _fromCode(e) {
          switch (e) {
            case 0:
              return TokenType.FungibleCommon;
            case 1:
              return TokenType.NonFungibleUnique;
          }
          throw new Error(
            "(BUG) TokenType.fromCode() does not handle code: " + e,
          );
        }
        valueOf() {
          return this._code;
        }
      }
      ((t.default = TokenType),
        (TokenType.FungibleCommon = new TokenType(0)),
        (TokenType.NonFungibleUnique = new TokenType(1)));
    },
    5024: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      class TokenSupplyType {
        constructor(e) {
          ((this._code = e), Object.freeze(this));
        }
        toString() {
          switch (this) {
            case TokenSupplyType.Infinite:
              return "INFINITE";
            case TokenSupplyType.Finite:
              return "FINITE";
            default:
              return `UNKNOWN (${this._code})`;
          }
        }
        static _fromCode(e) {
          switch (e) {
            case 0:
              return TokenSupplyType.Infinite;
            case 1:
              return TokenSupplyType.Finite;
          }
          throw new Error(
            "(BUG) TokenSupplyType.fromCode() does not handle code: " + e,
          );
        }
        valueOf() {
          return this._code;
        }
      }
      ((t.default = TokenSupplyType),
        (TokenSupplyType.Infinite = new TokenSupplyType(0)),
        (TokenSupplyType.Finite = new TokenSupplyType(1)));
    },
    6117: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = o(n(2754));
      class AssessedCustomFee {
        constructor(e) {
          (void 0 === e && (e = {}),
            (this._feeCollectorAccountId = null),
            null != e.feeCollectorAccountId &&
              this.setFeeCollectorAccountId(e.feeCollectorAccountId),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            (this._amount = null),
            null != e.amount && this.setAmount(e.amount),
            (this._payerAccountIds = null),
            null != e.payerAccountIds &&
              this.setPayerAccountIds(e.payerAccountIds));
        }
        get feeCollectorAccountId() {
          return this._feeCollectorAccountId;
        }
        setFeeCollectorAccountId(e) {
          return (
            (this._feeCollectorAccountId =
              "string" === typeof e ? u.default.fromString(e) : e),
            this
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e),
            this
          );
        }
        get amount() {
          return this._amount;
        }
        setAmount(e) {
          return (
            (this._amount =
              "number" === typeof e ? s.default.fromNumber(e) : e),
            this
          );
        }
        get payerAccountIds() {
          return this._payerAccountIds;
        }
        setPayerAccountIds(e) {
          return ((this._payerAccountIds = e), this);
        }
        static _fromProtobuf(e) {
          return new AssessedCustomFee({
            feeCollectorAccountId:
              null != e.feeCollectorAccountId
                ? u.default._fromProtobuf(e.feeCollectorAccountId)
                : void 0,
            tokenId:
              null != e.tokenId ? r.default._fromProtobuf(e.tokenId) : void 0,
            amount: null != e.amount ? e.amount : void 0,
            payerAccountIds:
              null != e.effectivePayerAccountId
                ? e.effectivePayerAccountId.map((e) =>
                    u.default._fromProtobuf(e),
                  )
                : void 0,
          });
        }
        _toProtobuf() {
          return {
            feeCollectorAccountId:
              null != this.feeCollectorAccountId
                ? this.feeCollectorAccountId._toProtobuf()
                : null,
            tokenId: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            amount: this._amount,
            effectivePayerAccountId:
              null != this._payerAccountIds
                ? this._payerAccountIds.map((e) => e._toProtobuf())
                : null,
          };
        }
        toJSON() {
          var e, t, n, o;
          return {
            feeCollectorAccountId:
              (null === (e = this.feeCollectorAccountId) || void 0 === e
                ? void 0
                : e.toString()) || null,
            tokenId:
              (null === (t = this._tokenId) || void 0 === t
                ? void 0
                : t.toString()) || null,
            amount:
              (null === (n = this._amount) || void 0 === n
                ? void 0
                : n.toString()) || null,
            payerAccountIds:
              (null === (o = this._payerAccountIds) || void 0 === o
                ? void 0
                : o.map((e) => e.toString())) || [],
          };
        }
      }
      t.default = AssessedCustomFee;
    },
    6118: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2754)),
        u = o(n(2774)),
        s = o(n(2835));
      class TokenTransfer {
        constructor(e) {
          ((this.tokenId =
            e.tokenId instanceof s.default
              ? e.tokenId
              : s.default.fromString(e.tokenId)),
            (this.accountId =
              e.accountId instanceof u.default
                ? e.accountId
                : u.default.fromString(e.accountId)),
            (this.expectedDecimals = e.expectedDecimals),
            (this.amount = r.default.fromValue(e.amount)),
            (this.isApproved = e.isApproved));
        }
        static _fromProtobuf(e) {
          const t = [];
          for (const n of e) {
            const e = s.default._fromProtobuf(n.token),
              o = null != n.expectedDecimals ? n.expectedDecimals.value : null;
            for (const s of null != n.transfers ? n.transfers : [])
              t.push(
                new TokenTransfer({
                  tokenId: e,
                  accountId: u.default._fromProtobuf(s.accountID),
                  expectedDecimals: o,
                  amount: null != s.amount ? s.amount : r.default.ZERO,
                  isApproved: 1 == s.isApproval,
                }),
              );
          }
          return t;
        }
        _toProtobuf() {
          return {
            accountID: this.accountId._toProtobuf(),
            amount: this.amount,
            isApproval: this.isApproved,
          };
        }
        toJSON() {
          return {
            tokenId: this.tokenId.toString(),
            accountId: this.accountId.toString(),
            expectedDecimals: this.expectedDecimals,
            amount: this.amount.toString(),
            isApproved: this.isApproved,
          };
        }
        toString() {
          return JSON.stringify(this.toJSON());
        }
      }
      t.default = TokenTransfer;
    },
    6132: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      class FeeAssessmentMethod {
        constructor(e) {
          ((this._value = e), Object.freeze(this));
        }
        toString() {
          switch (this) {
            case FeeAssessmentMethod.Inclusive:
              return "INCLUSIVE";
            case FeeAssessmentMethod.Exclusive:
              return "EXCLUSIVE";
            default:
              return `UNKNOWN (${this._value.toString()})`;
          }
        }
        static _fromValue(e) {
          switch (e) {
            case !1:
              return FeeAssessmentMethod.Inclusive;
            case !0:
              return FeeAssessmentMethod.Exclusive;
          }
        }
        valueOf() {
          return this._value;
        }
      }
      ((t.default = FeeAssessmentMethod),
        (FeeAssessmentMethod.Inclusive = new FeeAssessmentMethod(!1)),
        (FeeAssessmentMethod.Exclusive = new FeeAssessmentMethod(!0)));
    },
    6143: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(3664)),
        u = o(n(2774)),
        s = o(n(2909)),
        i = o(n(2814)),
        a = f(n(2826)),
        l = o(n(3093)),
        c = o(n(2934)),
        d = o(n(3554));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      const { proto: h } = a;
      class ScheduleInfo {
        constructor(e) {
          ((this.scheduleId = e.scheduleId),
            (this.creatorAccountId = e.creatorAccountID),
            (this.payerAccountId = e.payerAccountID),
            (this.schedulableTransactionBody = e.schedulableTransactionBody),
            (this.signers = e.signers),
            (this.scheduleMemo = e.scheduleMemo),
            (this.adminKey = null != e.adminKey ? e.adminKey : null),
            (this.expirationTime = e.expirationTime),
            (this.executed = e.executed),
            (this.deleted = e.deleted),
            (this.scheduledTransactionId = e.scheduledTransactionId),
            (this.waitForExpiry = e.waitForExpiry),
            Object.freeze(this));
        }
        static _fromProtobuf(e) {
          return new ScheduleInfo({
            scheduleId: r.default._fromProtobuf(e.scheduleID),
            creatorAccountID:
              null != e.creatorAccountID
                ? u.default._fromProtobuf(e.creatorAccountID)
                : null,
            payerAccountID:
              null != e.payerAccountID
                ? u.default._fromProtobuf(e.payerAccountID)
                : null,
            schedulableTransactionBody:
              null != e.scheduledTransactionBody
                ? e.scheduledTransactionBody
                : null,
            adminKey:
              null != e.adminKey
                ? c.default._fromProtobufKey(e.adminKey)
                : null,
            signers:
              null != e.signers
                ? d.default.__fromProtobufKeyList(e.signers)
                : null,
            scheduleMemo: null != e.memo ? e.memo : null,
            expirationTime:
              null != e.expirationTime
                ? s.default._fromProtobuf(e.expirationTime)
                : null,
            executed:
              null != e.executionTime
                ? s.default._fromProtobuf(e.executionTime)
                : null,
            deleted:
              null != e.deletionTime
                ? s.default._fromProtobuf(e.deletionTime)
                : null,
            scheduledTransactionId:
              null != e.scheduledTransactionID
                ? l.default._fromProtobuf(e.scheduledTransactionID)
                : null,
            waitForExpiry: null != e.waitForExpiry && e.waitForExpiry,
          });
        }
        _toProtobuf() {
          return {
            scheduleID:
              null != this.scheduleId ? this.scheduleId._toProtobuf() : null,
            creatorAccountID:
              null != this.creatorAccountId
                ? this.creatorAccountId._toProtobuf()
                : null,
            payerAccountID:
              null != this.payerAccountId
                ? this.payerAccountId._toProtobuf()
                : null,
            scheduledTransactionBody:
              null != this.schedulableTransactionBody
                ? this.schedulableTransactionBody
                : null,
            adminKey:
              null != this.adminKey ? this.adminKey._toProtobufKey() : null,
            signers:
              null != this.signers
                ? this.signers._toProtobufKey().keyList
                : null,
            memo: null != this.scheduleMemo ? this.scheduleMemo : "",
            expirationTime:
              null != this.expirationTime
                ? this.expirationTime._toProtobuf()
                : null,
            scheduledTransactionID:
              null != this.scheduledTransactionId
                ? this.scheduledTransactionId._toProtobuf()
                : null,
            waitForExpiry: this.waitForExpiry,
          };
        }
        get scheduledTransaction() {
          if (null == this.schedulableTransactionBody)
            throw new Error("Scheduled transaction body is empty");
          const e = new h.SchedulableTransactionBody(
              this.schedulableTransactionBody,
            ),
            t = e.data;
          return i.default.fromBytes(
            h.TransactionList.encode({
              transactionList: [
                {
                  signedTransactionBytes: h.SignedTransaction.encode({
                    bodyBytes: h.TransactionBody.encode({
                      transactionFee:
                        this.schedulableTransactionBody.transactionFee,
                      memo: this.schedulableTransactionBody.memo,
                      [t]: e[t],
                    }).finish(),
                  }).finish(),
                },
              ],
            }).finish(),
          );
        }
      }
      t.default = ScheduleInfo;
    },
    6145: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      class SubscriptionHandle {
        constructor() {
          this._call = null;
        }
        _setCall(e) {
          this._call = e;
        }
        unsubscribe() {
          null != this._call && this._call();
        }
      }
      t.default = SubscriptionHandle;
    },
    6146: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = o(n(3146)),
        i = o(n(2909)),
        a = o(n(2754)),
        l = y(n(2826)),
        c = o(n(5023)),
        d = o(n(5024)),
        f = o(n(4294)),
        h = o(n(4681)),
        _ = o(n(4682)),
        m = o(n(2934)),
        p = o(n(3375));
      function y(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (y = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenInfo {
        constructor(e) {
          ((this.tokenId = e.tokenId),
            (this.name = e.name),
            (this.symbol = e.symbol),
            (this.decimals = e.decimals),
            (this.totalSupply = e.totalSupply),
            (this.treasuryAccountId = e.treasuryAccountId),
            (this.adminKey = e.adminKey),
            (this.kycKey = e.kycKey),
            (this.freezeKey = e.freezeKey),
            (this.pauseKey = e.pauseKey),
            (this.wipeKey = e.wipeKey),
            (this.supplyKey = e.supplyKey),
            (this.feeScheduleKey = e.feeScheduleKey),
            (this.defaultFreezeStatus = e.defaultFreezeStatus),
            (this.defaultKycStatus = e.defaultKycStatus),
            (this.pauseStatus = e.pauseStatus),
            (this.isDeleted = e.isDeleted),
            (this.autoRenewAccountId = e.autoRenewAccountId),
            (this.autoRenewPeriod = e.autoRenewPeriod),
            (this.expirationTime = e.expirationTime),
            (this.tokenMemo = e.tokenMemo),
            (this.customFees = e.customFees),
            (this.tokenType = e.tokenType),
            (this.supplyType = e.supplyType),
            (this.maxSupply = e.maxSupply),
            (this.ledgerId = e.ledgerId));
        }
        static _fromProtobuf(e) {
          const t = e.defaultFreezeStatus,
            n = e.defaultKycStatus,
            o = e.pauseStatus,
            l =
              null != e.autoRenewAccount
                ? u.default._fromProtobuf(e.autoRenewAccount)
                : new u.default(0);
          return new TokenInfo({
            tokenId: r.default._fromProtobuf(e.tokenId),
            name: e.name,
            symbol: e.symbol,
            decimals: e.decimals,
            totalSupply: a.default.fromValue(e.totalSupply),
            treasuryAccountId:
              null != e.treasury ? u.default._fromProtobuf(e.treasury) : null,
            adminKey:
              null != e.adminKey
                ? m.default._fromProtobufKey(e.adminKey)
                : null,
            kycKey:
              null != e.kycKey ? m.default._fromProtobufKey(e.kycKey) : null,
            freezeKey:
              null != e.freezeKey
                ? m.default._fromProtobufKey(e.freezeKey)
                : null,
            pauseKey:
              null != e.pauseKey
                ? m.default._fromProtobufKey(e.pauseKey)
                : null,
            wipeKey:
              null != e.wipeKey ? m.default._fromProtobufKey(e.wipeKey) : null,
            supplyKey:
              null != e.supplyKey
                ? m.default._fromProtobufKey(e.supplyKey)
                : null,
            feeScheduleKey:
              null != e.feeScheduleKey
                ? m.default._fromProtobufKey(e.feeScheduleKey)
                : null,
            defaultFreezeStatus: 0 === t ? null : 1 == t,
            defaultKycStatus: 0 === n ? null : 1 == n,
            pauseStatus: 0 === o ? null : 1 == o,
            isDeleted: e.deleted,
            autoRenewAccountId:
              0 != l.shard.toInt() || 0 != l.realm.toInt() || 0 != l.num.toInt()
                ? l
                : null,
            autoRenewPeriod:
              null != e.autoRenewPeriod
                ? s.default._fromProtobuf(e.autoRenewPeriod)
                : null,
            expirationTime:
              null != e.expiry ? i.default._fromProtobuf(e.expiry) : null,
            tokenMemo: null != e.memo ? e.memo : "",
            customFees:
              null != e.customFees
                ? e.customFees.map((e) =>
                    null != e.fixedFee
                      ? f.default._fromProtobuf(e)
                      : null != e.fractionalFee
                        ? h.default._fromProtobuf(e)
                        : _.default._fromProtobuf(e),
                  )
                : [],
            tokenType:
              null != e.tokenType ? c.default._fromCode(e.tokenType) : null,
            supplyType:
              null != e.supplyType ? d.default._fromCode(e.supplyType) : null,
            maxSupply: null != e.maxSupply ? e.maxSupply : null,
            ledgerId:
              null != e.ledgerId ? p.default.fromBytes(e.ledgerId) : null,
          });
        }
        _toProtobuf() {
          return {
            tokenId: this.tokenId._toProtobuf(),
            name: this.name,
            symbol: this.symbol,
            decimals: this.decimals,
            totalSupply: this.totalSupply,
            treasury:
              null != this.treasuryAccountId
                ? this.treasuryAccountId._toProtobuf()
                : null,
            adminKey:
              null != this.adminKey ? this.adminKey._toProtobufKey() : null,
            kycKey: null != this.kycKey ? this.kycKey._toProtobufKey() : null,
            freezeKey:
              null != this.freezeKey ? this.freezeKey._toProtobufKey() : null,
            pauseKey:
              null != this.pauseKey ? this.pauseKey._toProtobufKey() : null,
            wipeKey:
              null != this.wipeKey ? this.wipeKey._toProtobufKey() : null,
            supplyKey:
              null != this.supplyKey ? this.supplyKey._toProtobufKey() : null,
            feeScheduleKey:
              null != this.feeScheduleKey
                ? this.feeScheduleKey._toProtobufKey()
                : null,
            defaultFreezeStatus:
              null == this.defaultFreezeStatus
                ? 0
                : this.defaultFreezeStatus
                  ? 1
                  : 2,
            defaultKycStatus:
              null == this.defaultKycStatus ? 0 : this.defaultKycStatus ? 1 : 2,
            pauseStatus:
              null == this.pauseStatus ? 0 : this.pauseStatus ? 1 : 2,
            deleted: this.isDeleted,
            autoRenewAccount:
              null != this.autoRenewAccountId
                ? this.autoRenewAccountId._toProtobuf()
                : void 0,
            autoRenewPeriod:
              null != this.autoRenewPeriod
                ? this.autoRenewPeriod._toProtobuf()
                : null,
            expiry:
              null != this.expirationTime
                ? this.expirationTime._toProtobuf()
                : null,
            memo: this.tokenMemo,
            customFees: this.customFees.map((e) => e._toProtobuf()),
            tokenType: null != this.tokenType ? this.tokenType._code : null,
            supplyType: null != this.supplyType ? this.supplyType._code : null,
            maxSupply: this.maxSupply,
            ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null,
          };
        }
        static fromBytes(e) {
          return TokenInfo._fromProtobuf(l.proto.TokenInfo.decode(e));
        }
        toBytes() {
          return l.proto.TokenInfo.encode(this._toProtobuf()).finish();
        }
      }
      t.default = TokenInfo;
    },
    6147: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(3665)),
        u = o(n(2774)),
        s = o(n(2909)),
        i = l(n(2950)),
        a = o(n(3375));
      function l(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (l = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenNftInfo {
        constructor(e) {
          ((this.nftId = e.nftId),
            (this.accountId = e.accountId),
            (this.creationTime = e.creationTime),
            (this.metadata = e.metadata),
            (this.ledgerId = e.ledgerId),
            (this.spenderId = e.spenderId),
            Object.freeze(this));
        }
        static _fromProtobuf(e) {
          return new TokenNftInfo({
            nftId: r.default._fromProtobuf(e.nftID),
            accountId: u.default._fromProtobuf(e.accountID),
            creationTime: s.default._fromProtobuf(e.creationTime),
            metadata: void 0 !== e.metadata ? e.metadata : null,
            ledgerId:
              null != e.ledgerId ? a.default.fromBytes(e.ledgerId) : null,
            spenderId:
              null != e.spenderId ? u.default._fromProtobuf(e.spenderId) : null,
          });
        }
        _toProtobuf() {
          return {
            nftID: this.nftId._toProtobuf(),
            accountID: this.accountId._toProtobuf(),
            creationTime: this.creationTime._toProtobuf(),
            metadata: this.metadata,
            ledgerId: null != this.ledgerId ? this.ledgerId.toBytes() : null,
            spenderId:
              null != this.spenderId ? this.spenderId._toProtobuf() : null,
          };
        }
        toJson() {
          return {
            nftId: this.nftId.toString(),
            accountId: this.accountId.toString(),
            creationTime: this.creationTime.toString(),
            metadata: null != this.metadata ? i.encode(this.metadata) : null,
            ledgerId: null != this.ledgerId ? this.ledgerId.toString() : null,
            spenderId:
              null != this.spenderId ? this.spenderId.toString() : null,
          };
        }
        toString() {
          return JSON.stringify(this.toJson());
        }
      }
      t.default = TokenNftInfo;
    },
    6148: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(3558)),
        u = o(n(2774)),
        s = o(n(2909)),
        i = o(n(2754)),
        a = o(n(3146)),
        l = f(n(2826)),
        c = o(n(2934)),
        d = o(n(3375));
      function f(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (f = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicInfo {
        constructor(e) {
          ((this.topicId = e.topicId),
            (this.topicMemo = e.topicMemo),
            (this.runningHash = e.runningHash),
            (this.sequenceNumber = e.sequenceNumber),
            (this.expirationTime = e.expirationTime),
            (this.adminKey = e.adminKey),
            (this.submitKey = e.submitKey),
            (this.autoRenewPeriod = e.autoRenewPeriod),
            (this.autoRenewAccountId = e.autoRenewAccountId),
            (this.ledgerId = e.ledgerId),
            Object.freeze(this));
        }
        static _fromProtobuf(e) {
          const t = e.topicInfo;
          return new TopicInfo({
            topicId: r.default._fromProtobuf(e.topicID),
            topicMemo: null != t.memo ? t.memo : "",
            runningHash:
              null != t.runningHash ? t.runningHash : new Uint8Array(),
            sequenceNumber:
              null != t.sequenceNumber
                ? t.sequenceNumber instanceof i.default
                  ? t.sequenceNumber
                  : i.default.fromValue(t.sequenceNumber)
                : i.default.ZERO,
            expirationTime:
              null != t.expirationTime
                ? s.default._fromProtobuf(t.expirationTime)
                : null,
            adminKey:
              null != t.adminKey
                ? c.default._fromProtobufKey(t.adminKey)
                : null,
            submitKey:
              null != t.submitKey
                ? c.default._fromProtobufKey(t.submitKey)
                : null,
            autoRenewPeriod:
              null != t.autoRenewPeriod
                ? new a.default(t.autoRenewPeriod.seconds)
                : null,
            autoRenewAccountId:
              null != t.autoRenewAccount
                ? u.default._fromProtobuf(t.autoRenewAccount)
                : null,
            ledgerId:
              null != t.ledgerId ? d.default.fromBytes(t.ledgerId) : null,
          });
        }
        _toProtobuf() {
          return {
            topicID: this.topicId._toProtobuf(),
            topicInfo: {
              memo: this.topicMemo,
              runningHash: this.runningHash,
              sequenceNumber: this.sequenceNumber,
              expirationTime:
                null != this.expirationTime
                  ? this.expirationTime._toProtobuf()
                  : null,
              adminKey:
                null != this.adminKey ? this.adminKey._toProtobufKey() : null,
              submitKey:
                null != this.submitKey ? this.submitKey._toProtobufKey() : null,
              autoRenewPeriod:
                null != this.autoRenewPeriod
                  ? this.autoRenewPeriod._toProtobuf()
                  : null,
              autoRenewAccount:
                null != this.autoRenewAccountId
                  ? this.autoRenewAccountId._toProtobuf()
                  : null,
            },
          };
        }
        static fromBytes(e) {
          return TopicInfo._fromProtobuf({
            topicInfo: l.proto.ConsensusTopicInfo.decode(e),
          });
        }
        toBytes() {
          return l.proto.ConsensusTopicInfo.encode(
            this._toProtobuf().topicInfo,
          ).finish();
        }
      }
      t.default = TopicInfo;
    },
    6149: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2909)),
        u = o(n(6150)),
        s = o(n(2754)),
        i = o(n(3093));
      class TopicMessage {
        constructor(e) {
          ((this.consensusTimestamp = e.consensusTimestamp),
            (this.contents = e.contents),
            (this.runningHash = e.runningHash),
            (this.sequenceNumber = e.sequenceNumber),
            (this.chunks = e.chunks),
            (this.initialTransactionId = e.initialTransactionId),
            Object.freeze(this));
        }
        static _ofSingle(e) {
          return new TopicMessage({
            consensusTimestamp: r.default._fromProtobuf(e.consensusTimestamp),
            contents: null != e.message ? e.message : new Uint8Array(),
            runningHash:
              null != e.runningHash ? e.runningHash : new Uint8Array(),
            sequenceNumber:
              null != e.sequenceNumber
                ? e.sequenceNumber instanceof s.default
                  ? e.sequenceNumber
                  : s.default.fromNumber(e.sequenceNumber)
                : s.default.ZERO,
            initialTransactionId:
              null != e.chunkInfo && null != e.chunkInfo.initialTransactionID
                ? i.default._fromProtobuf(e.chunkInfo.initialTransactionID)
                : null,
            chunks: [u.default._fromProtobuf(e)],
          });
        }
        static _ofMany(e) {
          const t = e.length,
            n = e[t - 1],
            o = r.default._fromProtobuf(n.consensusTimestamp),
            a = n.runningHash,
            l =
              null != n.sequenceNumber
                ? n.sequenceNumber instanceof s.default
                  ? n.sequenceNumber
                  : s.default.fromValue(n.sequenceNumber)
                : s.default.ZERO;
          e.sort((e, t) =>
            (null != e && null != e.chunkInfo && null != e.chunkInfo.number
              ? e.chunkInfo.number
              : 0) <
            (null != t && null != t.chunkInfo && null != t.chunkInfo.number
              ? t.chunkInfo.number
              : 0)
              ? -1
              : 1,
          );
          const c = e.map((e) => u.default._fromProtobuf(e)),
            d = c.map((e) => e.contents.length).reduce((e, t) => e + t, 0),
            f = new Uint8Array(d);
          let h = 0;
          e.forEach((e) => {
            (f.set(e.message, h), (h += e.message.length));
          });
          let _ = null;
          return (
            e.length > 0 &&
              null != e[0].chunkInfo &&
              null != e[0].chunkInfo.initialTransactionID &&
              (_ = i.default._fromProtobuf(
                e[0].chunkInfo.initialTransactionID,
              )),
            new TopicMessage({
              consensusTimestamp: o,
              contents: f,
              runningHash: a,
              sequenceNumber: l,
              chunks: c,
              initialTransactionId: _,
            })
          );
        }
      }
      t.default = TopicMessage;
    },
    6150: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2909)),
        u = o(n(2754));
      class TopicMessageChunk {
        constructor(e) {
          ((this.consensusTimestamp = e.consensusTimestamp),
            (this.contents = e.contents),
            (this.runningHash = e.runningHash),
            (this.sequenceNumber = e.sequenceNumber),
            Object.freeze(this));
        }
        static _fromProtobuf(e) {
          return new TopicMessageChunk({
            consensusTimestamp: r.default._fromProtobuf(e.consensusTimestamp),
            contents: null != e.message ? e.message : new Uint8Array(),
            runningHash:
              null != e.runningHash ? e.runningHash : new Uint8Array(),
            sequenceNumber:
              null != e.sequenceNumber
                ? e.sequenceNumber instanceof u.default
                  ? e.sequenceNumber
                  : u.default.fromValue(e.sequenceNumber)
                : u.default.ZERO,
          });
        }
        _toProtobuf() {
          return {
            consensusTimestamp: this.consensusTimestamp._toProtobuf(),
            message: this.contents,
            runningHash: this.runningHash,
            sequenceNumber: this.sequenceNumber,
          };
        }
      }
      t.default = TopicMessageChunk;
    },
    7909: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2774)),
        u = o(n(2835)),
        s = o(n(2831));
      class TokenAssociation {
        constructor(e) {
          (void 0 === e && (e = {}),
            (this._accountId = null),
            null != e.accountId && this.setAccountId(e.accountId),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            (this._defaultMaxTransactionFee = new s.default(5)));
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            (this._accountId =
              "string" === typeof e ? r.default.fromString(e) : e),
            this
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            (this._tokenId =
              "string" === typeof e ? u.default.fromString(e) : e),
            this
          );
        }
        static _fromProtobuf(e) {
          return new TokenAssociation({
            accountId:
              null != e.accountId
                ? r.default._fromProtobuf(e.accountId)
                : void 0,
            tokenId:
              null != e.tokenId ? u.default._fromProtobuf(e.tokenId) : void 0,
          });
        }
        _toProtobuf() {
          return {
            accountId:
              null != this._accountId ? this._accountId._toProtobuf() : void 0,
            tokenId:
              null != this._tokenId ? this._tokenId._toProtobuf() : void 0,
          };
        }
        toJSON() {
          var e, t;
          return {
            accountId:
              (null === (e = this._accountId) || void 0 === e
                ? void 0
                : e.toString()) || null,
            tokenId:
              (null === (t = this._tokenId) || void 0 === t
                ? void 0
                : t.toString()) || null,
          };
        }
      }
      t.default = TokenAssociation;
    },
    7946: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = l(n(2814)),
        u = o(n(2909)),
        s = o(n(3079)),
        i = l(n(2950)),
        a = o(n(7947));
      function l(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (l = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class FreezeTransaction extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._startTime = null),
            (this._startTimestamp = null),
            (this._endTime = null),
            (this._fileId = null),
            (this._fileHash = null),
            (this._freezeType = null),
            null != e.startTime &&
              this.setStartTime(e.startTime.hour, e.startTime.minute),
            null != e.endTime &&
              this.setEndTime(e.endTime.hour, e.endTime.minute),
            null != e.startTimestamp &&
              this.setStartTimestamp(e.startTimestamp),
            null != e.updateFileId && this.setUpdateFileId(e.updateFileId),
            null != e.fileId && this.setFileId(e.fileId),
            null != e.fileHash && this.setFileHash(e.fileHash),
            null != e.freezeType && this.setFreezeType(e.freezeType));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const l = i[0],
            c = l.freeze;
          return r.default._fromProtobufTransactions(
            new FreezeTransaction({
              startTime:
                null != c.startHour && null != c.startMin
                  ? { hour: c.startHour, minute: c.startMin }
                  : void 0,
              endTime:
                null != c.endHour && null != c.endMin
                  ? { hour: c.endHour, minute: c.endMin }
                  : void 0,
              startTimestamp:
                null != c.startTime
                  ? u.default._fromProtobuf(c.startTime)
                  : void 0,
              updateFileId:
                null != c.updateFile
                  ? s.default._fromProtobuf(c.updateFile)
                  : void 0,
              fileHash: null != c.fileHash ? c.fileHash : void 0,
              freezeType:
                null != c.freezeType
                  ? a.default._fromCode(c.freezeType)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get startTime() {
          return null;
        }
        setStartTime(e, t) {
          if ((this._requireNotFrozen(), "string" === typeof e)) {
            const t = e.split(":");
            this._startTime = { hour: Number(t[0]), minute: Number(t[1]) };
          } else this._startTime = { hour: e, minute: t };
          return this;
        }
        get startTimestamp() {
          return this._startTimestamp;
        }
        setStartTimestamp(e) {
          return (this._requireNotFrozen(), (this._startTimestamp = e), this);
        }
        get endTime() {
          return (
            console.warn("`FreezeTransaction.endTime` is deprecated"),
            this._endTime
          );
        }
        setEndTime(e, t) {
          if (
            (console.warn("`FreezeTransaction.endTime` is deprecated"),
            this._requireNotFrozen(),
            "string" === typeof e)
          ) {
            const t = e.split(":");
            this._endTime = { hour: Number(t[0]), minute: Number(t[1]) };
          } else this._endTime = { hour: e, minute: t };
          return this;
        }
        get updateFileId() {
          return this.fileId;
        }
        setUpdateFileId(e) {
          return this.setFileId(e);
        }
        get fileId() {
          return this._fileId;
        }
        setFileId(e) {
          return (this._requireNotFrozen(), (this._fileId = e), this);
        }
        get fileHash() {
          return this._fileHash;
        }
        setFileHash(e) {
          return (
            this._requireNotFrozen(),
            (this._fileHash = "string" === typeof e ? i.decode(e) : e),
            this
          );
        }
        get freezeType() {
          return this._freezeType;
        }
        setFreezeType(e) {
          return (this._requireNotFrozen(), (this._freezeType = e), this);
        }
        _getTransactionDataCase() {
          return "freeze";
        }
        _makeTransactionData() {
          return {
            startTime:
              null != this._startTimestamp
                ? this._startTimestamp._toProtobuf()
                : null,
            updateFile:
              null != this._fileId ? this._fileId._toProtobuf() : null,
            fileHash: this._fileHash,
            freezeType:
              null != this._freezeType ? this._freezeType.valueOf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "FreezeTransaction:" + e.toString();
        }
      }
      ((t.default = FreezeTransaction),
        r.TRANSACTION_REGISTRY.set("freeze", FreezeTransaction._fromProtobuf));
    },
    7954: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2909)),
        u = o(n(2774)),
        s = c(n(2814)),
        i = o(n(2934)),
        a = o(n(2831)),
        l = c(n(2826));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class ScheduleCreateTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._adminKey = null),
            (this._scheduledTransaction = null),
            (this._payerAccountId = null),
            (this._scheduleMemo = null),
            (this._scheduledSignerPublicKeys = new Set()),
            (this._expirationTime = null),
            (this._waitForExpiry = null),
            null != e.adminKey && this.setAdminKey(e.adminKey),
            null != e.payerAccountID &&
              this.setPayerAccountId(e.payerAccountID),
            null != e.scheduleMemo && this.setScheduleMemo(e.scheduleMemo),
            (this._defaultMaxTransactionFee = new a.default(5)));
        }
        static _fromProtobuf(e, t, n, o, a) {
          const c = a[0],
            d = c.scheduleCreate,
            f = new ScheduleCreateTransaction({
              adminKey:
                null != d.adminKey
                  ? i.default._fromProtobufKey(d.adminKey)
                  : void 0,
              payerAccountID:
                null != d.payerAccountID
                  ? u.default._fromProtobuf(d.payerAccountID)
                  : void 0,
              scheduleMemo: null != d.memo ? d.memo : void 0,
              waitForExpiry: null != d.waitForExpiry ? d.waitForExpiry : void 0,
              expirationTime:
                null != d.expirationTime
                  ? r.default._fromProtobuf(d.expirationTime)
                  : void 0,
            });
          if (null != c.scheduleCreate) {
            const e = c.scheduleCreate.scheduledTransactionBody,
              t = l.proto.TransactionBody.encode(e).finish(),
              n = l.proto.SignedTransaction.encode({ bodyBytes: t }).finish(),
              o = { signedTransactionBytes: n },
              r = l.proto.TransactionList.encode({
                transactionList: [o],
              }).finish(),
              u = s.default.fromBytes(r);
            f._setScheduledTransaction(u);
          }
          return s.default._fromProtobufTransactions(f, e, t, n, o, a);
        }
        _setScheduledTransaction(e) {
          return ((this._scheduledTransaction = e), this);
        }
        get adminKey() {
          return this._adminKey;
        }
        setAdminKey(e) {
          return (this._requireNotFrozen(), (this._adminKey = e), this);
        }
        get payerAccountId() {
          return this._payerAccountId;
        }
        setPayerAccountId(e) {
          return (this._requireNotFrozen(), (this._payerAccountId = e), this);
        }
        setScheduleMemo(e) {
          return (this._requireNotFrozen(), (this._scheduleMemo = e), this);
        }
        get getScheduleMemo() {
          return (this._requireNotFrozen(), this._scheduleMemo);
        }
        setScheduledTransaction(e) {
          return (
            this._requireNotFrozen(),
            e._requireNotFrozen(),
            (this._scheduledTransaction = e.schedule()._scheduledTransaction),
            this
          );
        }
        _validateChecksums(e) {
          null != this._payerAccountId &&
            this._payerAccountId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.schedule.createSchedule(t);
        }
        _getTransactionDataCase() {
          return "scheduleCreate";
        }
        _makeTransactionData() {
          return {
            adminKey:
              null != this._adminKey ? this._adminKey._toProtobufKey() : null,
            payerAccountID:
              null != this._payerAccountId
                ? this._payerAccountId._toProtobuf()
                : null,
            scheduledTransactionBody:
              null != this._scheduledTransaction
                ? this._scheduledTransaction._getScheduledTransactionBody()
                : null,
            memo: this._scheduleMemo,
            waitForExpiry: this._waitForExpiry,
            expirationTime:
              null != this._expirationTime
                ? this._expirationTime._toProtobuf()
                : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "ScheduleCreateTransaction:" + e.toString();
        }
        setExpirationTime(e) {
          return ((this._expirationTime = e), this);
        }
        get expirationTime() {
          return (this._requireNotFrozen(), this._expirationTime);
        }
        setWaitForExpiry(e) {
          return ((this._waitForExpiry = e), this);
        }
        get waitForExpiry() {
          return (this._requireNotFrozen(), this._waitForExpiry);
        }
      }
      ((t.default = ScheduleCreateTransaction),
        s.TRANSACTION_REGISTRY.set(
          "scheduleCreate",
          ScheduleCreateTransaction._fromProtobuf,
        ),
        s.SCHEDULE_CREATE_TRANSACTION.push(
          () => new ScheduleCreateTransaction(),
        ));
    },
    7955: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(3664)),
        u = i(n(2814)),
        s = o(n(2831));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class ScheduleDeleteTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._scheduleId = null),
            null != e.scheduleId && this.setScheduleId(e.scheduleId),
            (this._defaultMaxTransactionFee = new s.default(5)));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.scheduleDelete;
          return u.default._fromProtobufTransactions(
            new ScheduleDeleteTransaction({
              scheduleId:
                null != a.scheduleID
                  ? r.default._fromProtobuf(a.scheduleID)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get scheduleId() {
          return this._scheduleId;
        }
        setScheduleId(e) {
          return (
            this._requireNotFrozen(),
            (this._scheduleId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._scheduleId && this._scheduleId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.schedule.deleteSchedule(t);
        }
        _getTransactionDataCase() {
          return "scheduleDelete";
        }
        _makeTransactionData() {
          return {
            scheduleID:
              null != this._scheduleId ? this._scheduleId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "ScheduleDeleteTransaction:" + e.toString();
        }
      }
      ((t.default = ScheduleDeleteTransaction),
        u.TRANSACTION_REGISTRY.set(
          "scheduleDelete",
          ScheduleDeleteTransaction._fromProtobuf,
        ));
    },
    7956: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(n(2978)),
        u = o(n(3664)),
        s = o(n(6143));
      o(n(2831));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class ScheduleInfoQuery extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._scheduleId = null),
            null != e.scheduleId && this.setScheduleId(e.scheduleId));
        }
        static _fromProtobuf(e) {
          const t = e.scheduleGetInfo;
          return new ScheduleInfoQuery({
            scheduleId:
              null != t.scheduleID
                ? u.default._fromProtobuf(t.scheduleID)
                : void 0,
          });
        }
        get scheduleId() {
          return this._scheduleId;
        }
        setScheduleId(e) {
          return (
            (this._scheduleId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        async getCost(e) {
          return super.getCost(e);
        }
        _validateChecksums(e) {
          null != this._scheduleId && this._scheduleId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.schedule.getScheduleInfo(t);
        }
        _mapResponseHeader(e) {
          const t = e.scheduleGetInfo;
          return t.header;
        }
        _mapResponse(e, t, n) {
          const o = e.scheduleGetInfo;
          return Promise.resolve(s.default._fromProtobuf(o.scheduleInfo));
        }
        _onMakeRequest(e) {
          return {
            scheduleGetInfo: {
              header: e,
              scheduleID:
                null != this._scheduleId
                  ? this._scheduleId._toProtobuf()
                  : null,
            },
          };
        }
        _getLogId() {
          const e =
            null != this._paymentTransactionId &&
            null != this._paymentTransactionId.validStart
              ? this._paymentTransactionId.validStart
              : this._timestamp;
          return "ScheduleInfoQuery:" + e.toString();
        }
      }
      ((t.default = ScheduleInfoQuery),
        r.QUERY_REGISTRY.set(
          "scheduleGetInfo",
          ScheduleInfoQuery._fromProtobuf,
        ));
    },
    7957: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(3664)),
        u = o(n(2831)),
        s = i(n(2814));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class ScheduleSignTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._scheduleId = null),
            null != e.scheduleId && this.setScheduleId(e.scheduleId),
            (this._defaultMaxTransactionFee = new u.default(5)));
        }
        static _fromProtobuf(e, t, n, o, u) {
          const i = u[0],
            a = i.scheduleSign;
          return s.default._fromProtobufTransactions(
            new ScheduleSignTransaction({
              scheduleId:
                null != a.scheduleID
                  ? r.default._fromProtobuf(a.scheduleID)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            u,
          );
        }
        get scheduleId() {
          return this._scheduleId;
        }
        setScheduleId(e) {
          return (
            this._requireNotFrozen(),
            (this._scheduleId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._scheduleId && this._scheduleId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.schedule.signSchedule(t);
        }
        _getTransactionDataCase() {
          return "scheduleSign";
        }
        _makeTransactionData() {
          return {
            scheduleID:
              null != this._scheduleId ? this._scheduleId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "ScheduleSignTransaction:" + e.toString();
        }
      }
      ((t.default = ScheduleSignTransaction),
        s.TRANSACTION_REGISTRY.set(
          "scheduleSign",
          ScheduleSignTransaction._fromProtobuf,
        ));
    },
    7959: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = a(n(2814)),
        u = o(n(3079)),
        s = o(n(3028)),
        i = o(n(2909));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class SystemDeleteTransaction extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._fileId = null),
            (this._contractId = null),
            (this._expirationTime = null),
            null != e.fileId && this.setFileId(e.fileId),
            null != e.contractId && this.setContractId(e.contractId),
            null != e.expirationTime &&
              this.setExpirationTime(e.expirationTime));
        }
        static _fromProtobuf(e, t, n, o, a) {
          const l = a[0],
            c = l.systemDelete;
          return r.default._fromProtobufTransactions(
            new SystemDeleteTransaction({
              fileId:
                null != c.fileID ? u.default._fromProtobuf(c.fileID) : void 0,
              contractId:
                null != c.contractID
                  ? s.default._fromProtobuf(c.contractID)
                  : void 0,
              expirationTime:
                null != c.expirationTime
                  ? i.default._fromProtobuf(c.expirationTime)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            a,
          );
        }
        get fileId() {
          return this._fileId;
        }
        setFileId(e) {
          return (
            this._requireNotFrozen(),
            (this._fileId =
              e instanceof u.default ? e : u.default.fromString(e)),
            this
          );
        }
        get contractId() {
          return this._contractId;
        }
        setContractId(e) {
          return (
            this._requireNotFrozen(),
            (this._contractId =
              e instanceof s.default ? e : s.default.fromString(e)),
            this
          );
        }
        get expirationTime() {
          return this._expirationTime;
        }
        setExpirationTime(e) {
          return (this._requireNotFrozen(), (this._expirationTime = e), this);
        }
        _execute(e, t) {
          return null != this._fileId
            ? e.file.systemDelete(t)
            : e.smartContract.systemDelete(t);
        }
        _getTransactionDataCase() {
          return "systemDelete";
        }
        _makeTransactionData() {
          return {
            fileID: null != this._fileId ? this._fileId._toProtobuf() : null,
            contractID:
              null != this._contractId ? this._contractId._toProtobuf() : null,
            expirationTime:
              null != this._expirationTime
                ? this._expirationTime._toProtobuf()
                : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "SystemDeleteTransaction:" + e.toString();
        }
      }
      ((t.default = SystemDeleteTransaction),
        r.TRANSACTION_REGISTRY.set(
          "systemDelete",
          SystemDeleteTransaction._fromProtobuf,
        ));
    },
    7960: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(n(2814)),
        u = o(n(3079)),
        s = o(n(3028));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class SystemUndeleteTransaction extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._fileId = null),
            (this._contractId = null),
            null != e.fileId && this.setFileId(e.fileId),
            null != e.contractId && this.setContractId(e.contractId));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const a = i[0],
            l = a.systemUndelete;
          return r.default._fromProtobufTransactions(
            new SystemUndeleteTransaction({
              fileId:
                null != l.fileID ? u.default._fromProtobuf(l.fileID) : void 0,
              contractId:
                null != l.contractID
                  ? s.default._fromProtobuf(l.contractID)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get fileId() {
          return this._fileId;
        }
        setFileId(e) {
          return (
            this._requireNotFrozen(),
            (this._fileId =
              e instanceof u.default ? e : u.default.fromString(e)),
            this
          );
        }
        get contractId() {
          return this._contractId;
        }
        setContractId(e) {
          return (
            this._requireNotFrozen(),
            (this._contractId =
              e instanceof s.default ? e : s.default.fromString(e)),
            this
          );
        }
        _execute(e, t) {
          return null != this._fileId
            ? e.file.systemUndelete(t)
            : e.smartContract.systemUndelete(t);
        }
        _getTransactionDataCase() {
          return "systemUndelete";
        }
        _makeTransactionData() {
          return {
            fileID: null != this._fileId ? this._fileId._toProtobuf() : null,
            contractID:
              null != this._contractId ? this._contractId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "SystemUndeleteTransaction:" + e.toString();
        }
      }
      ((t.default = SystemUndeleteTransaction),
        r.TRANSACTION_REGISTRY.set(
          "systemUndelete",
          SystemUndeleteTransaction._fromProtobuf,
        ));
    },
    7961: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2831)),
        u = o(n(2835)),
        s = o(n(2774)),
        i = a(n(2814));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenAssociateTransaction extends i.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenIds = null),
            (this._accountId = null),
            (this._defaultMaxTransactionFee = new r.default(5)),
            null != e.tokenIds && this.setTokenIds(e.tokenIds),
            null != e.accountId && this.setAccountId(e.accountId));
        }
        static _fromProtobuf(e, t, n, o, r) {
          const a = r[0],
            l = a.tokenAssociate;
          return i.default._fromProtobufTransactions(
            new TokenAssociateTransaction({
              tokenIds:
                null != l.tokens
                  ? l.tokens.map((e) => u.default._fromProtobuf(e))
                  : void 0,
              accountId:
                null != l.account ? s.default._fromProtobuf(l.account) : void 0,
            }),
            e,
            t,
            n,
            o,
            r,
          );
        }
        get tokenIds() {
          return this._tokenIds;
        }
        setTokenIds(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenIds = e.map((e) =>
              "string" === typeof e ? u.default.fromString(e) : e.clone(),
            )),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? s.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._accountId && this._accountId.validateChecksum(e);
          for (const t of null != this._tokenIds ? this._tokenIds : [])
            null != t && t.validateChecksum(e);
        }
        _execute(e, t) {
          return e.token.associateTokens(t);
        }
        _getTransactionDataCase() {
          return "tokenAssociate";
        }
        _makeTransactionData() {
          return {
            tokens:
              null != this._tokenIds
                ? this._tokenIds.map((e) => e._toProtobuf())
                : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenAssociateTransaction:" + e.toString();
        }
      }
      ((t.default = TokenAssociateTransaction),
        i.TRANSACTION_REGISTRY.set(
          "tokenAssociate",
          TokenAssociateTransaction._fromProtobuf,
        ));
    },
    7962: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = i(n(2814)),
        s = o(n(2754));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenBurnTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._amount = null),
            (this._serials = []),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.amount && this.setAmount(e.amount),
            null != e.serials && this.setSerials(e.serials));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.tokenBurn;
          return u.default._fromProtobufTransactions(
            new TokenBurnTransaction({
              tokenId:
                null != a.token ? r.default._fromProtobuf(a.token) : void 0,
              amount: null != a.amount ? a.amount : void 0,
              serials: null != a.serialNumbers ? a.serialNumbers : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get amount() {
          return this._amount;
        }
        setAmount(e) {
          return (
            this._requireNotFrozen(),
            (this._amount =
              e instanceof s.default ? e : s.default.fromValue(e)),
            this
          );
        }
        _validateChecksums(e) {
          null != this._tokenId && this._tokenId.validateChecksum(e);
        }
        get serials() {
          return this._serials;
        }
        setSerials(e) {
          return (
            this._requireNotFrozen(),
            (this._serials = e.map((e) =>
              e instanceof s.default ? e : s.default.fromValue(e),
            )),
            this
          );
        }
        _execute(e, t) {
          return e.token.burnToken(t);
        }
        _getTransactionDataCase() {
          return "tokenBurn";
        }
        _makeTransactionData() {
          return {
            amount: this._amount,
            serialNumbers: this._serials,
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenBurnTransaction:" + e.toString();
        }
      }
      ((t.default = TokenBurnTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenBurn",
          TokenBurnTransaction._fromProtobuf,
        ));
    },
    7963: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2831)),
        u = p(n(2814)),
        s = o(n(2754)),
        i = o(n(2774)),
        a = o(n(2909)),
        l = o(n(3146)),
        c = o(n(4294)),
        d = o(n(4681)),
        f = o(n(4682)),
        h = o(n(5023)),
        _ = o(n(5024)),
        m = o(n(2934));
      function p(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (p = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenCreateTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenName = null),
            (this._tokenSymbol = null),
            (this._decimals = null),
            (this._initialSupply = null),
            (this._treasuryAccountId = null),
            (this._adminKey = null),
            (this._kycKey = null),
            (this._freezeKey = null),
            (this._pauseKey = null),
            (this._wipeKey = null),
            (this._supplyKey = null),
            (this._feeScheduleKey = null),
            (this._freezeDefault = null),
            (this._autoRenewAccountId = null),
            (this._expirationTime = null),
            (this._autoRenewPeriod = new l.default(
              u.DEFAULT_AUTO_RENEW_PERIOD,
            )),
            (this._tokenMemo = null),
            (this._customFees = []),
            (this._tokenType = null),
            (this._supplyType = null),
            (this._maxSupply = null),
            (this._defaultMaxTransactionFee = new r.default(30)),
            null != e.tokenName && this.setTokenName(e.tokenName),
            null != e.tokenSymbol && this.setTokenSymbol(e.tokenSymbol),
            null != e.decimals && this.setDecimals(e.decimals),
            null != e.initialSupply && this.setInitialSupply(e.initialSupply),
            null != e.treasuryAccountId &&
              this.setTreasuryAccountId(e.treasuryAccountId),
            null != e.adminKey && this.setAdminKey(e.adminKey),
            null != e.kycKey && this.setKycKey(e.kycKey),
            null != e.freezeKey && this.setFreezeKey(e.freezeKey),
            null != e.pauseKey && this.setPauseKey(e.pauseKey),
            null != e.wipeKey && this.setWipeKey(e.wipeKey),
            null != e.supplyKey && this.setSupplyKey(e.supplyKey),
            null != e.feeScheduleKey &&
              this.setFeeScheduleKey(e.feeScheduleKey),
            null != e.freezeDefault && this.setFreezeDefault(e.freezeDefault),
            null != e.autoRenewAccountId &&
              this.setAutoRenewAccountId(e.autoRenewAccountId),
            null != e.expirationTime &&
              this.setExpirationTime(e.expirationTime),
            null != e.autoRenewPeriod &&
              this.setAutoRenewPeriod(e.autoRenewPeriod),
            null != e.tokenMemo && this.setTokenMemo(e.tokenMemo),
            null != e.customFees && this.setCustomFees(e.customFees),
            null != e.tokenType && this.setTokenType(e.tokenType),
            null != e.supplyType && this.setSupplyType(e.supplyType),
            null != e.maxSupply && this.setMaxSupply(e.maxSupply));
        }
        static _fromProtobuf(e, t, n, o, r) {
          const s = r[0],
            p = s.tokenCreation;
          return u.default._fromProtobufTransactions(
            new TokenCreateTransaction({
              tokenName: null != p.name ? p.name : void 0,
              tokenSymbol: null != p.symbol ? p.symbol : void 0,
              decimals: null != p.decimals ? p.decimals : void 0,
              initialSupply: null != p.initialSupply ? p.initialSupply : void 0,
              treasuryAccountId:
                null != p.treasury
                  ? i.default._fromProtobuf(p.treasury)
                  : void 0,
              adminKey:
                null != p.adminKey
                  ? m.default._fromProtobufKey(p.adminKey)
                  : void 0,
              kycKey:
                null != p.kycKey
                  ? m.default._fromProtobufKey(p.kycKey)
                  : void 0,
              freezeKey:
                null != p.freezeKey
                  ? m.default._fromProtobufKey(p.freezeKey)
                  : void 0,
              pauseKey:
                null != p.pauseKey
                  ? m.default._fromProtobufKey(p.pauseKey)
                  : void 0,
              wipeKey:
                null != p.wipeKey
                  ? m.default._fromProtobufKey(p.wipeKey)
                  : void 0,
              supplyKey:
                null != p.supplyKey
                  ? m.default._fromProtobufKey(p.supplyKey)
                  : void 0,
              feeScheduleKey:
                null != p.feeScheduleKey
                  ? m.default._fromProtobufKey(p.feeScheduleKey)
                  : void 0,
              freezeDefault: null != p.freezeDefault ? p.freezeDefault : void 0,
              autoRenewAccountId:
                null != p.autoRenewAccount
                  ? i.default._fromProtobuf(p.autoRenewAccount)
                  : void 0,
              expirationTime:
                null != p.expiry ? a.default._fromProtobuf(p.expiry) : void 0,
              autoRenewPeriod:
                null != p.autoRenewPeriod
                  ? l.default._fromProtobuf(p.autoRenewPeriod)
                  : void 0,
              tokenMemo: null != p.memo ? p.memo : void 0,
              customFees:
                null != p.customFees
                  ? p.customFees.map((e) =>
                      null != e.fixedFee
                        ? c.default._fromProtobuf(e)
                        : null != e.fractionalFee
                          ? d.default._fromProtobuf(e)
                          : f.default._fromProtobuf(e),
                    )
                  : void 0,
              tokenType:
                null != p.tokenType ? h.default._fromCode(p.tokenType) : void 0,
              supplyType:
                null != p.supplyType
                  ? _.default._fromCode(p.supplyType)
                  : void 0,
              maxSupply: null != p.maxSupply ? p.maxSupply : void 0,
            }),
            e,
            t,
            n,
            o,
            r,
          );
        }
        get tokenName() {
          return this._tokenName;
        }
        setTokenName(e) {
          return (this._requireNotFrozen(), (this._tokenName = e), this);
        }
        get tokenSymbol() {
          return this._tokenSymbol;
        }
        setTokenSymbol(e) {
          return (this._requireNotFrozen(), (this._tokenSymbol = e), this);
        }
        get decimals() {
          return this._decimals;
        }
        setDecimals(e) {
          return (
            this._requireNotFrozen(),
            (this._decimals =
              e instanceof s.default ? e : s.default.fromValue(e)),
            this
          );
        }
        get initialSupply() {
          return this._initialSupply;
        }
        setInitialSupply(e) {
          return (
            this._requireNotFrozen(),
            (this._initialSupply = s.default.fromValue(e)),
            this
          );
        }
        get treasuryAccountId() {
          return this._treasuryAccountId;
        }
        setTreasuryAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._treasuryAccountId =
              "string" === typeof e ? i.default.fromString(e) : e.clone()),
            this
          );
        }
        get adminKey() {
          return this._adminKey;
        }
        setAdminKey(e) {
          return (this._requireNotFrozen(), (this._adminKey = e), this);
        }
        get kycKey() {
          return this._kycKey;
        }
        setKycKey(e) {
          return (this._requireNotFrozen(), (this._kycKey = e), this);
        }
        get freezeKey() {
          return this._freezeKey;
        }
        setFreezeKey(e) {
          return (this._requireNotFrozen(), (this._freezeKey = e), this);
        }
        get pauseKey() {
          return this._pauseKey;
        }
        setPauseKey(e) {
          return (this._requireNotFrozen(), (this._pauseKey = e), this);
        }
        get wipeKey() {
          return this._wipeKey;
        }
        setWipeKey(e) {
          return (this._requireNotFrozen(), (this._wipeKey = e), this);
        }
        get supplyKey() {
          return this._supplyKey;
        }
        setSupplyKey(e) {
          return (this._requireNotFrozen(), (this._supplyKey = e), this);
        }
        get feeScheduleKey() {
          return this._feeScheduleKey;
        }
        setFeeScheduleKey(e) {
          return (this._requireNotFrozen(), (this._feeScheduleKey = e), this);
        }
        get freezeDefault() {
          return this._freezeDefault;
        }
        setFreezeDefault(e) {
          return (this._requireNotFrozen(), (this._freezeDefault = e), this);
        }
        get expirationTime() {
          return this._expirationTime;
        }
        setExpirationTime(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewPeriod = null),
            (this._expirationTime =
              e instanceof a.default ? e : a.default.fromDate(e)),
            this
          );
        }
        get autoRenewAccountId() {
          return this._autoRenewAccountId;
        }
        setAutoRenewAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewAccountId =
              e instanceof i.default ? e : i.default.fromString(e)),
            this
          );
        }
        get autoRenewPeriod() {
          return this._autoRenewPeriod;
        }
        setAutoRenewPeriod(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewPeriod =
              e instanceof l.default ? e : new l.default(e)),
            this
          );
        }
        get tokenMemo() {
          return this._tokenMemo;
        }
        setTokenMemo(e) {
          return (this._requireNotFrozen(), (this._tokenMemo = e), this);
        }
        get customFees() {
          return this._customFees;
        }
        setCustomFees(e) {
          return ((this._customFees = e), this);
        }
        get tokenType() {
          return this._tokenType;
        }
        setTokenType(e) {
          return ((this._tokenType = e), this);
        }
        get supplyType() {
          return this._supplyType;
        }
        setSupplyType(e) {
          return ((this._supplyType = e), this);
        }
        get maxSupply() {
          return this._maxSupply;
        }
        setMaxSupply(e) {
          return (
            (this._maxSupply =
              "number" === typeof e ? s.default.fromNumber(e) : e),
            this
          );
        }
        _freezeWithAccountId(e) {
          (super._freezeWithAccountId(e),
            null != this._autoRenewPeriod &&
              null != e &&
              (this._autoRenewAccountId = e));
        }
        freezeWith(e) {
          return (
            null != e &&
              null != e.operatorAccountId &&
              this._freezeWithAccountId(e.operatorAccountId),
            super.freezeWith(e)
          );
        }
        _validateChecksums(e) {
          (null != this._treasuryAccountId &&
            this._treasuryAccountId.validateChecksum(e),
            null != this._autoRenewAccountId &&
              this._autoRenewAccountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.token.createToken(t);
        }
        _getTransactionDataCase() {
          return "tokenCreation";
        }
        _makeTransactionData() {
          return {
            name: this._tokenName,
            symbol: this._tokenSymbol,
            decimals: null != this._decimals ? this._decimals.toInt() : null,
            initialSupply: this._initialSupply,
            treasury:
              null != this._treasuryAccountId
                ? this._treasuryAccountId._toProtobuf()
                : null,
            adminKey:
              null != this._adminKey ? this._adminKey._toProtobufKey() : null,
            kycKey: null != this._kycKey ? this._kycKey._toProtobufKey() : null,
            freezeKey:
              null != this._freezeKey ? this._freezeKey._toProtobufKey() : null,
            pauseKey:
              null != this._pauseKey ? this._pauseKey._toProtobufKey() : null,
            wipeKey:
              null != this._wipeKey ? this._wipeKey._toProtobufKey() : null,
            supplyKey:
              null != this._supplyKey ? this._supplyKey._toProtobufKey() : null,
            feeScheduleKey:
              null != this._feeScheduleKey
                ? this._feeScheduleKey._toProtobufKey()
                : null,
            freezeDefault: this._freezeDefault,
            autoRenewAccount:
              null != this._autoRenewAccountId
                ? this._autoRenewAccountId._toProtobuf()
                : null,
            expiry:
              null != this._expirationTime
                ? this._expirationTime._toProtobuf()
                : null,
            autoRenewPeriod:
              null != this._autoRenewPeriod
                ? this._autoRenewPeriod._toProtobuf()
                : null,
            memo: this._tokenMemo,
            customFees: this.customFees.map((e) => e._toProtobuf()),
            tokenType: null != this._tokenType ? this._tokenType._code : null,
            supplyType:
              null != this._supplyType ? this._supplyType._code : null,
            maxSupply: this.maxSupply,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenCreateTransaction:" + e.toString();
        }
      }
      ((t.default = TokenCreateTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenCreation",
          TokenCreateTransaction._fromProtobuf,
        ));
    },
    7964: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = s(n(2814));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenDeleteTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.tokenDeletion;
          return u.default._fromProtobufTransactions(
            new TokenDeleteTransaction({
              tokenId:
                null != a.token ? r.default._fromProtobuf(a.token) : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._tokenId && this._tokenId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.token.deleteToken(t);
        }
        _getTransactionDataCase() {
          return "tokenDeletion";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenDeleteTransaction:" + e.toString();
        }
      }
      ((t.default = TokenDeleteTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenDeletion",
          TokenDeleteTransaction._fromProtobuf,
        ));
    },
    7965: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2831)),
        u = o(n(2835)),
        s = o(n(2774)),
        i = a(n(2814));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenDissociateTransaction extends i.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenIds = null),
            (this._accountId = null),
            (this._defaultMaxTransactionFee = new r.default(5)),
            null != e.tokenIds && this.setTokenIds(e.tokenIds),
            null != e.accountId && this.setAccountId(e.accountId));
        }
        static _fromProtobuf(e, t, n, o, r) {
          const a = r[0],
            l = a.tokenDissociate;
          return i.default._fromProtobufTransactions(
            new TokenDissociateTransaction({
              tokenIds:
                null != l.tokens
                  ? l.tokens.map((e) => u.default._fromProtobuf(e))
                  : void 0,
              accountId:
                null != l.account ? s.default._fromProtobuf(l.account) : void 0,
            }),
            e,
            t,
            n,
            o,
            r,
          );
        }
        get tokenIds() {
          return this._tokenIds;
        }
        setTokenIds(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenIds = e.map((e) =>
              "string" === typeof e ? u.default.fromString(e) : e.clone(),
            )),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? s.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._accountId && this._accountId.validateChecksum(e);
          for (const t of null != this._tokenIds ? this._tokenIds : [])
            null != t && t.validateChecksum(e);
        }
        _execute(e, t) {
          return e.token.dissociateTokens(t);
        }
        _getTransactionDataCase() {
          return "tokenDissociate";
        }
        _makeTransactionData() {
          return {
            tokens:
              null != this._tokenIds
                ? this._tokenIds.map((e) => e._toProtobuf())
                : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenDissociateTransaction:" + e.toString();
        }
      }
      ((t.default = TokenDissociateTransaction),
        i.TRANSACTION_REGISTRY.set(
          "tokenDissociate",
          TokenDissociateTransaction._fromProtobuf,
        ));
    },
    7966: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = l(n(2814)),
        s = o(n(4294)),
        i = o(n(4681)),
        a = o(n(4682));
      function l(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (l = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenFeeScheduleUpdateTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._customFees = []),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.customFees && this.setCustomFees(e.customFees));
        }
        static _fromProtobuf(e, t, n, o, l) {
          const c = l[0],
            d = c.tokenFeeScheduleUpdate;
          return u.default._fromProtobufTransactions(
            new TokenFeeScheduleUpdateTransaction({
              tokenId:
                null != d.tokenId ? r.default._fromProtobuf(d.tokenId) : void 0,
              customFees:
                null != d.customFees
                  ? d.customFees.map((e) =>
                      null != e.fixedFee
                        ? s.default._fromProtobuf(e)
                        : null != e.fractionalFee
                          ? i.default._fromProtobuf(e)
                          : a.default._fromProtobuf(e),
                    )
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            l,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e
                ? r.default.fromString(e)
                : r.default._fromProtobuf(e._toProtobuf())),
            this
          );
        }
        get customFees() {
          return this._customFees;
        }
        setCustomFees(e) {
          return (this._requireNotFrozen(), (this._customFees = e), this);
        }
        _execute(e, t) {
          return e.token.updateTokenFeeSchedule(t);
        }
        _getTransactionDataCase() {
          return "tokenFeeScheduleUpdate";
        }
        _makeTransactionData() {
          return {
            tokenId: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            customFees: this._customFees.map((e) => e._toProtobuf()),
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenFeeScheduleUpdateTransaction:" + e.toString();
        }
      }
      ((t.default = TokenFeeScheduleUpdateTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenFeeScheduleUpdate",
          TokenFeeScheduleUpdateTransaction._fromProtobuf,
        ));
    },
    7967: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = i(n(2814));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenFreezeTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._accountId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.accountId && this.setAccountId(e.accountId));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const a = i[0],
            l = a.tokenFreeze;
          return s.default._fromProtobufTransactions(
            new TokenFreezeTransaction({
              tokenId:
                null != l.token ? r.default._fromProtobuf(l.token) : void 0,
              accountId:
                null != l.account ? u.default._fromProtobuf(l.account) : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          (null != this._tokenId && this._tokenId.validateChecksum(e),
            null != this._accountId && this._accountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.token.freezeTokenAccount(t);
        }
        _getTransactionDataCase() {
          return "tokenFreeze";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenFreezeTransaction:" + e.toString();
        }
      }
      ((t.default = TokenFreezeTransaction),
        s.TRANSACTION_REGISTRY.set(
          "tokenFreeze",
          TokenFreezeTransaction._fromProtobuf,
        ));
    },
    7968: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = i(n(2814));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenGrantKycTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._accountId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.accountId && this.setAccountId(e.accountId));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const a = i[0],
            l = a.tokenGrantKyc;
          return s.default._fromProtobufTransactions(
            new TokenGrantKycTransaction({
              tokenId:
                null != l.token ? r.default._fromProtobuf(l.token) : void 0,
              accountId:
                null != l.account ? u.default._fromProtobuf(l.account) : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          (null != this._tokenId && this._tokenId.validateChecksum(e),
            null != this._accountId && this._accountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.token.grantKycToTokenAccount(t);
        }
        _getTransactionDataCase() {
          return "tokenGrantKyc";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenGrantKycTransaction:" + e.toString();
        }
      }
      ((t.default = TokenGrantKycTransaction),
        s.TRANSACTION_REGISTRY.set(
          "tokenGrantKyc",
          TokenGrantKycTransaction._fromProtobuf,
        ));
    },
    7969: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(n(2978)),
        u = o(n(2835)),
        s = o(n(6146));
      o(n(2831));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenInfoQuery extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId));
        }
        static _fromProtobuf(e) {
          const t = e.tokenGetInfo;
          return new TokenInfoQuery({
            tokenId:
              null != t.token ? u.default._fromProtobuf(t.token) : void 0,
          });
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            (this._tokenId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        async getCost(e) {
          return super.getCost(e);
        }
        _validateChecksums(e) {
          null != this._tokenId && this._tokenId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.token.getTokenInfo(t);
        }
        _mapResponseHeader(e) {
          const t = e.tokenGetInfo;
          return t.header;
        }
        _mapResponse(e, t, n) {
          const o = e.tokenGetInfo;
          return Promise.resolve(s.default._fromProtobuf(o.tokenInfo));
        }
        _onMakeRequest(e) {
          return {
            tokenGetInfo: {
              header: e,
              token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            },
          };
        }
        _getLogId() {
          const e =
            null != this._paymentTransactionId &&
            null != this._paymentTransactionId.validStart
              ? this._paymentTransactionId.validStart
              : this._timestamp;
          return "TokenInfoQuery:" + e.toString();
        }
      }
      ((t.default = TokenInfoQuery),
        r.QUERY_REGISTRY.set("tokenGetInfo", TokenInfoQuery._fromProtobuf));
    },
    7970: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = a(n(2814)),
        s = o(n(2754)),
        i = a(n(2950));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenMintTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._amount = null),
            (this._metadata = []),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.amount && this.setAmount(e.amount),
            null != e.metadata && this.setMetadata(e.metadata));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.tokenMint;
          return u.default._fromProtobufTransactions(
            new TokenMintTransaction({
              tokenId:
                null != a.token ? r.default._fromProtobuf(a.token) : void 0,
              amount: null != a.amount ? a.amount : void 0,
              metadata: null != a.metadata ? a.metadata : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get amount() {
          return this._amount;
        }
        setAmount(e) {
          return (
            this._requireNotFrozen(),
            (this._amount =
              e instanceof s.default ? e : s.default.fromValue(e)),
            this
          );
        }
        _validateChecksums(e) {
          null != this._tokenId && this._tokenId.validateChecksum(e);
        }
        get metadata() {
          return this._metadata;
        }
        addMetadata(e) {
          return (
            this._requireNotFrozen(),
            "string" === typeof e &&
              console.warn(
                "Passing a `string` for token metadata is considered a bug, and has been removed. Please provide a `Uint8Array` instead.",
              ),
            this._metadata.push("string" === typeof e ? i.decode(e) : e),
            this
          );
        }
        setMetadata(e) {
          this._requireNotFrozen();
          for (const t of e)
            if ("string" === typeof t) {
              console.warn(
                "Passing a `string` for token metadata is considered a bug, and has been removed. Please provide a `Uint8Array` instead.",
              );
              break;
            }
          return (
            (this._metadata = e.map((e) =>
              "string" === typeof e ? i.decode(e) : e,
            )),
            this
          );
        }
        _execute(e, t) {
          return e.token.mintToken(t);
        }
        _getTransactionDataCase() {
          return "tokenMint";
        }
        _makeTransactionData() {
          return {
            amount: this._amount,
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            metadata: this._metadata,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenMintTransaction:" + e.toString();
        }
      }
      ((t.default = TokenMintTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenMint",
          TokenMintTransaction._fromProtobuf,
        ));
    },
    7971: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = c(n(2978)),
        u = o(n(3665)),
        s = o(n(2774)),
        i = o(n(2835)),
        a = o(n(6147)),
        l = (o(n(2831)), o(n(2754)));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenNftInfoQuery extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._nftId = null),
            null != e.nftId && this.setNftId(e.nftId),
            (this._accountId = null),
            null != e.accountId && this.setAccountId(e.accountId),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            (this._start = null),
            null != e.start && this.setStart(e.start),
            (this._end = null),
            null != e.end && this.setEnd(e.end));
        }
        static _fromProtobuf(e) {
          if (null != e.tokenGetNftInfo) {
            const t = e.tokenGetNftInfo;
            return new TokenNftInfoQuery({
              nftId:
                null != t.nftID ? u.default._fromProtobuf(t.nftID) : void 0,
            });
          }
          if (null != e.tokenGetAccountNftInfos) {
            const t = e.tokenGetAccountNftInfos;
            return new TokenNftInfoQuery({
              accountId:
                null != t.accountID
                  ? s.default._fromProtobuf(t.accountID)
                  : void 0,
              start: null != t.start ? t.start : void 0,
              end: null != t.end ? t.end : void 0,
            });
          }
          {
            const t = e.tokenGetNftInfos;
            return new TokenNftInfoQuery({
              tokenId:
                null != t.tokenID ? i.default._fromProtobuf(t.tokenID) : void 0,
              start: null != t.start ? t.start : void 0,
              end: null != t.end ? t.end : void 0,
            });
          }
        }
        get nftId() {
          return this._nftId;
        }
        setNftId(e) {
          return (
            (this._nftId =
              "string" === typeof e
                ? u.default.fromString(e)
                : u.default._fromProtobuf(e._toProtobuf())),
            this
          );
        }
        get accountId() {
          return (
            console.warn(
              "`TokenNftInfoQuery.accountId` is deprecated with no replacement",
            ),
            this._accountId
          );
        }
        setAccountId(e) {
          return (
            console.warn(
              "`TokenNftInfoQuery.setAccountId()` is deprecated with no replacement",
            ),
            (this._accountId =
              "string" === typeof e
                ? s.default.fromString(e)
                : s.default._fromProtobuf(e._toProtobuf())),
            this
          );
        }
        get tokenId() {
          return (
            console.warn(
              "`TokenNftInfoQuery.tokenId` is deprecated with no replacement",
            ),
            this._tokenId
          );
        }
        setTokenId(e) {
          return (
            console.warn(
              "`TokenNftInfoQuery.setTokenId()` is deprecated with no replacement",
            ),
            (this._tokenId =
              "string" === typeof e
                ? i.default.fromString(e)
                : i.default._fromProtobuf(e._toProtobuf())),
            this
          );
        }
        get start() {
          return (
            console.warn(
              "`TokenNftInfoQuery.start` is deprecated with no replacement",
            ),
            this._start
          );
        }
        setStart(e) {
          return (
            console.warn(
              "`TokenNftInfoQuery.setStart()` is deprecated with no replacement",
            ),
            (this._start = "number" === typeof e ? l.default.fromNumber(e) : e),
            this
          );
        }
        get end() {
          return (
            console.warn(
              "`TokenNftInfoQuery.end` is deprecated with no replacement",
            ),
            this._end
          );
        }
        setEnd(e) {
          return (
            console.warn(
              "`TokenNftInfoQuery.setEnd()` is deprecated with no replacement",
            ),
            (this._end = "number" === typeof e ? l.default.fromNumber(e) : e),
            this
          );
        }
        async getCost(e) {
          return super.getCost(e);
        }
        _execute(e, t) {
          return e.token.getTokenNftInfo(t);
        }
        _mapResponseHeader(e) {
          const t = e.tokenGetNftInfo;
          return t.header;
        }
        _mapResponse(e, t, n) {
          const o = [e.tokenGetNftInfo.nft];
          return Promise.resolve(o.map((e) => a.default._fromProtobuf(e)));
        }
        _onMakeRequest(e) {
          return {
            tokenGetNftInfo: {
              header: e,
              nftID: null != this._nftId ? this._nftId._toProtobuf() : null,
            },
          };
        }
        _getLogId() {
          const e =
            null != this._paymentTransactionId &&
            null != this._paymentTransactionId.validStart
              ? this._paymentTransactionId.validStart
              : this._timestamp;
          return "TokenNftInfoQuery:" + e.toString();
        }
      }
      ((t.default = TokenNftInfoQuery),
        r.QUERY_REGISTRY.set(
          "tokenGetNftInfo",
          TokenNftInfoQuery._fromProtobuf,
        ));
    },
    7972: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = s(n(2814));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenPauseTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.tokenPause;
          return u.default._fromProtobufTransactions(
            new TokenPauseTransaction({
              tokenId:
                null != a.token ? r.default._fromProtobuf(a.token) : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._tokenId && this._tokenId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.token.pauseToken(t);
        }
        _getTransactionDataCase() {
          return "tokenPause";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenPauseTransaction:" + e.toString();
        }
      }
      ((t.default = TokenPauseTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenPause",
          TokenPauseTransaction._fromProtobuf,
        ));
    },
    7973: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = i(n(2814));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenRevokeKycTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._accountId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.accountId && this.setAccountId(e.accountId));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const a = i[0],
            l = a.tokenRevokeKyc;
          return s.default._fromProtobufTransactions(
            new TokenRevokeKycTransaction({
              tokenId:
                null != l.token ? r.default._fromProtobuf(l.token) : void 0,
              accountId:
                null != l.account ? u.default._fromProtobuf(l.account) : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          (null != this._tokenId && this._tokenId.validateChecksum(e),
            null != this._accountId && this._accountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.token.revokeKycFromTokenAccount(t);
        }
        _getTransactionDataCase() {
          return "tokenRevokeKyc";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenRevokeKycTransaction:" + e.toString();
        }
      }
      ((t.default = TokenRevokeKycTransaction),
        s.TRANSACTION_REGISTRY.set(
          "tokenRevokeKyc",
          TokenRevokeKycTransaction._fromProtobuf,
        ));
    },
    7974: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = i(n(2814));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenUnfreezeTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._accountId = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.accountId && this.setAccountId(e.accountId));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const a = i[0],
            l = a.tokenUnfreeze;
          return s.default._fromProtobufTransactions(
            new TokenUnfreezeTransaction({
              tokenId:
                null != l.token ? r.default._fromProtobuf(l.token) : void 0,
              accountId:
                null != l.account ? u.default._fromProtobuf(l.account) : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          (null != this._tokenId && this._tokenId.validateChecksum(e),
            null != this._accountId && this._accountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.token.unfreezeTokenAccount(t);
        }
        _getTransactionDataCase() {
          return "tokenUnfreeze";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenUnfreezeTransaction:" + e.toString();
        }
      }
      ((t.default = TokenUnfreezeTransaction),
        s.TRANSACTION_REGISTRY.set(
          "tokenUnfreeze",
          TokenUnfreezeTransaction._fromProtobuf,
        ));
    },
    7975: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = s(n(2814));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenUnpauseTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            null != e.tokenId && this.setTokenId(e.tokenId));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.tokenUnpause;
          return u.default._fromProtobufTransactions(
            new TokenUnpauseTransaction({
              tokenId:
                null != a.token ? r.default._fromProtobuf(a.token) : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._tokenId && this._tokenId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.token.unpauseToken(t);
        }
        _getTransactionDataCase() {
          return "tokenUnpause";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenUnpauseTransaction:" + e.toString();
        }
      }
      ((t.default = TokenUnpauseTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenUnpause",
          TokenUnpauseTransaction._fromProtobuf,
        ));
    },
    7976: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = c(n(2814)),
        s = o(n(2774)),
        i = o(n(2909)),
        a = o(n(3146)),
        l = o(n(2934));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenUpdateTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._tokenName = null),
            (this._tokenSymbol = null),
            (this._treasuryAccountId = null),
            (this._adminKey = null),
            (this._kycKey = null),
            (this._freezeKey = null),
            (this._wipeKey = null),
            (this._supplyKey = null),
            (this._autoRenewAccountId = null),
            (this._expirationTime = null),
            (this._autoRenewPeriod = null),
            (this._tokenMemo = null),
            (this._feeScheduleKey = null),
            (this._pauseKey = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.tokenName && this.setTokenName(e.tokenName),
            null != e.tokenSymbol && this.setTokenSymbol(e.tokenSymbol),
            null != e.treasuryAccountId &&
              this.setTreasuryAccountId(e.treasuryAccountId),
            null != e.adminKey && this.setAdminKey(e.adminKey),
            null != e.kycKey && this.setKycKey(e.kycKey),
            null != e.freezeKey && this.setFreezeKey(e.freezeKey),
            null != e.wipeKey && this.setWipeKey(e.wipeKey),
            null != e.supplyKey && this.setSupplyKey(e.supplyKey),
            null != e.autoRenewAccountId &&
              this.setAutoRenewAccountId(e.autoRenewAccountId),
            null != e.expirationTime &&
              this.setExpirationTime(e.expirationTime),
            null != e.autoRenewPeriod &&
              this.setAutoRenewPeriod(e.autoRenewPeriod),
            null != e.tokenMemo && this.setTokenMemo(e.tokenMemo),
            null != e.feeScheduleKey &&
              this.setFeeScheduleKey(e.feeScheduleKey),
            null != e.pauseKey && this.setPauseKey(e.pauseKey));
        }
        static _fromProtobuf(e, t, n, o, c) {
          const d = c[0],
            f = d.tokenUpdate;
          return u.default._fromProtobufTransactions(
            new TokenUpdateTransaction({
              tokenId:
                null != f.token ? r.default._fromProtobuf(f.token) : void 0,
              tokenName: null != f.name ? f.name : void 0,
              tokenSymbol: null != f.symbol ? f.symbol : void 0,
              treasuryAccountId:
                null != f.treasury
                  ? s.default._fromProtobuf(f.treasury)
                  : void 0,
              adminKey:
                null != f.adminKey
                  ? l.default._fromProtobufKey(f.adminKey)
                  : void 0,
              kycKey:
                null != f.kycKey
                  ? l.default._fromProtobufKey(f.kycKey)
                  : void 0,
              freezeKey:
                null != f.freezeKey
                  ? l.default._fromProtobufKey(f.freezeKey)
                  : void 0,
              wipeKey:
                null != f.wipeKey
                  ? l.default._fromProtobufKey(f.wipeKey)
                  : void 0,
              supplyKey:
                null != f.supplyKey
                  ? l.default._fromProtobufKey(f.supplyKey)
                  : void 0,
              autoRenewAccountId:
                null != f.autoRenewAccount
                  ? s.default._fromProtobuf(f.autoRenewAccount)
                  : void 0,
              expirationTime:
                null != f.expiry ? i.default._fromProtobuf(f.expiry) : void 0,
              autoRenewPeriod:
                null != f.autoRenewPeriod
                  ? a.default._fromProtobuf(f.autoRenewPeriod)
                  : void 0,
              tokenMemo:
                null != f.memo && null != f.memo.value ? f.memo.value : void 0,
              feeScheduleKey:
                null != f.feeScheduleKey
                  ? l.default._fromProtobufKey(f.feeScheduleKey)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            c,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get tokenName() {
          return this._tokenName;
        }
        setTokenName(e) {
          return (this._requireNotFrozen(), (this._tokenName = e), this);
        }
        get tokenSymbol() {
          return this._tokenSymbol;
        }
        setTokenSymbol(e) {
          return (this._requireNotFrozen(), (this._tokenSymbol = e), this);
        }
        get treasuryAccountId() {
          return this._treasuryAccountId;
        }
        setTreasuryAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._treasuryAccountId =
              "string" === typeof e ? s.default.fromString(e) : e.clone()),
            this
          );
        }
        get adminKey() {
          return this._adminKey;
        }
        setAdminKey(e) {
          return (this._requireNotFrozen(), (this._adminKey = e), this);
        }
        get kycKey() {
          return this._kycKey;
        }
        setKycKey(e) {
          return (this._requireNotFrozen(), (this._kycKey = e), this);
        }
        get freezeKey() {
          return this._freezeKey;
        }
        setFreezeKey(e) {
          return (this._requireNotFrozen(), (this._freezeKey = e), this);
        }
        get wipeKey() {
          return this._wipeKey;
        }
        setWipeKey(e) {
          return (this._requireNotFrozen(), (this._wipeKey = e), this);
        }
        get supplyKey() {
          return this._supplyKey;
        }
        setSupplyKey(e) {
          return (this._requireNotFrozen(), (this._supplyKey = e), this);
        }
        setsupplyKey(e) {
          return (this._requireNotFrozen(), (this._supplyKey = e), this);
        }
        get expirationTime() {
          return this._expirationTime;
        }
        setExpirationTime(e) {
          return (
            this._requireNotFrozen(),
            (this._expirationTime =
              e instanceof i.default ? e : i.default.fromDate(e)),
            this
          );
        }
        get autoRenewAccountId() {
          return this._autoRenewAccountId;
        }
        setAutoRenewAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewAccountId =
              e instanceof s.default ? e : s.default.fromString(e)),
            this
          );
        }
        get autoRenewPeriod() {
          return this._autoRenewPeriod;
        }
        setAutoRenewPeriod(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewPeriod =
              e instanceof a.default ? e : new a.default(e)),
            this
          );
        }
        get tokenMemo() {
          return this._tokenMemo;
        }
        setTokenMemo(e) {
          return (this._requireNotFrozen(), (this._tokenMemo = e), this);
        }
        get feeScheduleKey() {
          return this._feeScheduleKey;
        }
        setFeeScheduleKey(e) {
          return (this._requireNotFrozen(), (this._feeScheduleKey = e), this);
        }
        get pauseKey() {
          return this._pauseKey;
        }
        setPauseKey(e) {
          return (this._requireNotFrozen(), (this._pauseKey = e), this);
        }
        clearTokenMemo() {
          return (this._requireNotFrozen(), (this._tokenMemo = null), this);
        }
        _validateChecksums(e) {
          (null != this._tokenId && this._tokenId.validateChecksum(e),
            null != this._treasuryAccountId &&
              this._treasuryAccountId.validateChecksum(e),
            null != this._autoRenewAccountId &&
              this._autoRenewAccountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.token.updateToken(t);
        }
        _getTransactionDataCase() {
          return "tokenUpdate";
        }
        _makeTransactionData() {
          return {
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            name: this.tokenName,
            symbol: this.tokenSymbol,
            treasury:
              null != this._treasuryAccountId
                ? this._treasuryAccountId._toProtobuf()
                : null,
            adminKey:
              null != this._adminKey ? this._adminKey._toProtobufKey() : null,
            kycKey: null != this._kycKey ? this._kycKey._toProtobufKey() : null,
            freezeKey:
              null != this._freezeKey ? this._freezeKey._toProtobufKey() : null,
            pauseKey:
              null != this._pauseKey ? this._pauseKey._toProtobufKey() : null,
            wipeKey:
              null != this._wipeKey ? this._wipeKey._toProtobufKey() : null,
            supplyKey:
              null != this._supplyKey ? this._supplyKey._toProtobufKey() : null,
            autoRenewAccount:
              null != this._autoRenewAccountId
                ? this._autoRenewAccountId._toProtobuf()
                : null,
            expiry:
              null != this._expirationTime
                ? this._expirationTime._toProtobuf()
                : null,
            autoRenewPeriod:
              null != this._autoRenewPeriod
                ? this._autoRenewPeriod._toProtobuf()
                : null,
            memo: null != this._tokenMemo ? { value: this._tokenMemo } : null,
            feeScheduleKey:
              null != this._feeScheduleKey
                ? this._feeScheduleKey._toProtobufKey()
                : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenUpdateTransaction:" + e.toString();
        }
      }
      ((t.default = TokenUpdateTransaction),
        u.TRANSACTION_REGISTRY.set(
          "tokenUpdate",
          TokenUpdateTransaction._fromProtobuf,
        ));
    },
    7977: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2835)),
        u = o(n(2774)),
        s = a(n(2814)),
        i = o(n(2754));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TokenWipeTransaction extends s.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._tokenId = null),
            (this._accountId = null),
            (this._serials = []),
            (this._amount = null),
            null != e.tokenId && this.setTokenId(e.tokenId),
            null != e.accountId && this.setAccountId(e.accountId),
            null != e.amount && this.setAmount(e.amount),
            null != e.serials && this.setSerials(e.serials));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const a = i[0],
            l = a.tokenWipe;
          return s.default._fromProtobufTransactions(
            new TokenWipeTransaction({
              tokenId:
                null != l.token ? r.default._fromProtobuf(l.token) : void 0,
              accountId:
                null != l.account ? u.default._fromProtobuf(l.account) : void 0,
              amount: null != l.amount ? l.amount : void 0,
              serials: null != l.serialNumbers ? l.serialNumbers : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get tokenId() {
          return this._tokenId;
        }
        setTokenId(e) {
          return (
            this._requireNotFrozen(),
            (this._tokenId =
              "string" === typeof e ? r.default.fromString(e) : e.clone()),
            this
          );
        }
        get accountId() {
          return this._accountId;
        }
        setAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._accountId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        get amount() {
          return this._amount;
        }
        setAmount(e) {
          return (
            this._requireNotFrozen(),
            (this._amount =
              e instanceof i.default ? e : i.default.fromValue(e)),
            this
          );
        }
        _validateChecksums(e) {
          (null != this._tokenId && this._tokenId.validateChecksum(e),
            null != this._accountId && this._accountId.validateChecksum(e));
        }
        get serials() {
          return this._serials;
        }
        setSerials(e) {
          return (
            this._requireNotFrozen(),
            (this._serials = e.map((e) =>
              "number" === typeof e ? i.default.fromNumber(e) : e,
            )),
            this
          );
        }
        _execute(e, t) {
          return e.token.wipeTokenAccount(t);
        }
        _getTransactionDataCase() {
          return "tokenWipe";
        }
        _makeTransactionData() {
          return {
            amount: this._amount,
            token: null != this._tokenId ? this._tokenId._toProtobuf() : null,
            account:
              null != this._accountId ? this._accountId._toProtobuf() : null,
            serialNumbers: this.serials,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TokenWipeTransaction:" + e.toString();
        }
      }
      ((t.default = TokenWipeTransaction),
        s.TRANSACTION_REGISTRY.set(
          "tokenWipe",
          TokenWipeTransaction._fromProtobuf,
        ));
    },
    7978: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2774)),
        u = a(n(2814)),
        s = o(n(3146)),
        i = o(n(2934));
      function a(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (a = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicCreateTransaction extends u.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._adminKey = null),
            (this._submitKey = null),
            (this._autoRenewAccountId = null),
            (this._autoRenewPeriod = new s.default(
              u.DEFAULT_AUTO_RENEW_PERIOD,
            )),
            (this._topicMemo = null),
            null != e.adminKey && this.setAdminKey(e.adminKey),
            null != e.submitKey && this.setSubmitKey(e.submitKey),
            null != e.autoRenewAccountId &&
              this.setAutoRenewAccountId(e.autoRenewAccountId),
            null != e.autoRenewPeriod &&
              this.setAutoRenewPeriod(e.autoRenewPeriod),
            null != e.topicMemo && this.setTopicMemo(e.topicMemo));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const a = s[0],
            l = a.consensusCreateTopic;
          return u.default._fromProtobufTransactions(
            new TopicCreateTransaction({
              adminKey:
                null != l.adminKey
                  ? i.default._fromProtobufKey(l.adminKey)
                  : void 0,
              submitKey:
                null != l.submitKey
                  ? i.default._fromProtobufKey(l.submitKey)
                  : void 0,
              autoRenewAccountId:
                null != l.autoRenewAccount
                  ? r.default._fromProtobuf(l.autoRenewAccount)
                  : void 0,
              autoRenewPeriod:
                null != l.autoRenewPeriod && null != l.autoRenewPeriod.seconds
                  ? l.autoRenewPeriod.seconds
                  : void 0,
              topicMemo: null != l.memo ? l.memo : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get topicMemo() {
          return this._topicMemo;
        }
        getTopicMemo() {
          return this._topicMemo;
        }
        setTopicMemo(e) {
          return (this._requireNotFrozen(), (this._topicMemo = e), this);
        }
        get adminKey() {
          return this._adminKey;
        }
        getAdminKey() {
          return this._adminKey;
        }
        setAdminKey(e) {
          return (this._requireNotFrozen(), (this._adminKey = e), this);
        }
        get submitKey() {
          return this._submitKey;
        }
        getSubmitKey() {
          return this._submitKey;
        }
        setSubmitKey(e) {
          return (this._requireNotFrozen(), (this._submitKey = e), this);
        }
        get autoRenewAccountId() {
          return this._autoRenewAccountId;
        }
        getAutoRenewAccountId() {
          return this._autoRenewAccountId;
        }
        setAutoRenewAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewAccountId =
              e instanceof r.default ? e : r.default.fromString(e)),
            this
          );
        }
        get autoRenewPeriod() {
          return this._autoRenewPeriod;
        }
        getAutoRenewPeriod() {
          return this._autoRenewPeriod;
        }
        setAutoRenewPeriod(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewPeriod =
              e instanceof s.default ? e : new s.default(e)),
            this
          );
        }
        _validateChecksums(e) {
          null != this._autoRenewAccountId &&
            this._autoRenewAccountId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.consensus.createTopic(t);
        }
        _getTransactionDataCase() {
          return "consensusCreateTopic";
        }
        _makeTransactionData() {
          return {
            adminKey:
              null != this._adminKey ? this._adminKey._toProtobufKey() : null,
            submitKey:
              null != this._submitKey ? this._submitKey._toProtobufKey() : null,
            autoRenewAccount:
              null != this._autoRenewAccountId
                ? this._autoRenewAccountId._toProtobuf()
                : null,
            autoRenewPeriod: this._autoRenewPeriod._toProtobuf(),
            memo: this._topicMemo,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TopicCreateTransaction:" + e.toString();
        }
      }
      ((t.default = TopicCreateTransaction),
        u.TRANSACTION_REGISTRY.set(
          "consensusCreateTopic",
          TopicCreateTransaction._fromProtobuf,
        ));
    },
    7979: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = s(n(2814)),
        u = o(n(3558));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicDeleteTransaction extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._topicId = null),
            null != e.topicId && this.setTopicId(e.topicId));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.consensusDeleteTopic;
          return r.default._fromProtobufTransactions(
            new TopicDeleteTransaction({
              topicId:
                null != a.topicID ? u.default._fromProtobuf(a.topicID) : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get topicId() {
          return this._topicId;
        }
        setTopicId(e) {
          return (
            this._requireNotFrozen(),
            (this._topicId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        _validateChecksums(e) {
          null != this._topicId && this._topicId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.consensus.deleteTopic(t);
        }
        _getTransactionDataCase() {
          return "consensusDeleteTopic";
        }
        _makeTransactionData() {
          return {
            topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TopicDeleteTransaction:" + e.toString();
        }
      }
      ((t.default = TopicDeleteTransaction),
        r.TRANSACTION_REGISTRY.set(
          "consensusDeleteTopic",
          TopicDeleteTransaction._fromProtobuf,
        ));
    },
    7980: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = i(n(2978)),
        u = o(n(3558)),
        s = o(n(6148));
      o(n(2831));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicInfoQuery extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._topicId = null),
            null != e.topicId && this.setTopicId(e.topicId));
        }
        static _fromProtobuf(e) {
          const t = e.consensusGetTopicInfo;
          return new TopicInfoQuery({
            topicId:
              null != t.topicID ? u.default._fromProtobuf(t.topicID) : void 0,
          });
        }
        get topicId() {
          return this._topicId;
        }
        setTopicId(e) {
          return (
            (this._topicId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        async getCost(e) {
          return super.getCost(e);
        }
        _validateChecksums(e) {
          null != this._topicId && this._topicId.validateChecksum(e);
        }
        _execute(e, t) {
          return e.consensus.getTopicInfo(t);
        }
        _mapResponseHeader(e) {
          const t = e.consensusGetTopicInfo;
          return t.header;
        }
        _mapResponse(e, t, n) {
          return Promise.resolve(
            s.default._fromProtobuf(e.consensusGetTopicInfo),
          );
        }
        _onMakeRequest(e) {
          return {
            consensusGetTopicInfo: {
              header: e,
              topicID:
                null != this._topicId ? this._topicId._toProtobuf() : null,
            },
          };
        }
        _getLogId() {
          const e =
            null != this._paymentTransactionId &&
            null != this._paymentTransactionId.validStart
              ? this._paymentTransactionId.validStart
              : this._timestamp;
          return "TopicInfoQuery:" + e.toString();
        }
      }
      ((t.default = TopicInfoQuery),
        r.QUERY_REGISTRY.set(
          "consensusGetTopicInfo",
          TopicInfoQuery._fromProtobuf,
        ));
    },
    7981: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2978)),
        u = o(n(3093)),
        s = o(n(6145)),
        i = o(n(6149)),
        a = h(n(2826)),
        l = o(n(3558)),
        c = o(n(2754)),
        d = o(n(2909)),
        f = n(3557);
      function h(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (h = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicMessageQuery extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._topicId = null),
            null != e.topicId && this.setTopicId(e.topicId),
            (this._startTime = null),
            null != e.startTime && this.setStartTime(e.startTime),
            (this._endTime = null),
            null != e.endTime && this.setEndTime(e.endTime),
            (this._limit = null),
            null != e.limit && this.setLimit(e.limit),
            (this._errorHandler = (e, t) => {
              console.error(
                "Error attempting to subscribe to topic: " +
                  (null != this._topicId ? this._topicId.toString() : ""),
              );
            }),
            null != e.errorHandler && (this._errorHandler = e.errorHandler),
            (this._listener = null),
            (this._completionHandler = () => {
              this._logger &&
                this._logger.info(
                  `Subscription to topic ${null != this._topicId ? this._topicId.toString() : ""} complete`,
                );
            }),
            null != e.completionHandler &&
              (this._completionHandler = e.completionHandler),
            (this._retryHandler = (e) => {
              if (null != e) {
                if (e instanceof Error) return !0;
                switch (e.code) {
                  case 13:
                    return f.RST_STREAM.test(e.details.toString());
                  case 5:
                  case 8:
                  case 14:
                  case 17:
                    return !0;
                  default:
                    return !1;
                }
              }
              return !1;
            }),
            null != e.retryHandler && (this._retryHandler = e.retryHandler),
            (this._attempt = 0),
            (this._handle = null),
            this.setMaxBackoff(8e3));
        }
        get topicId() {
          return this._topicId;
        }
        setTopicId(e) {
          return (
            this.requireNotSubscribed(),
            (this._topicId =
              "string" === typeof e ? l.default.fromString(e) : e.clone()),
            this
          );
        }
        get startTime() {
          return this._startTime;
        }
        setStartTime(e) {
          return (
            this.requireNotSubscribed(),
            (this._startTime =
              e instanceof d.default
                ? e
                : e instanceof Date
                  ? d.default.fromDate(e)
                  : new d.default(e, 0)),
            this
          );
        }
        get endTime() {
          return this._endTime;
        }
        setEndTime(e) {
          return (
            this.requireNotSubscribed(),
            (this._endTime =
              e instanceof d.default
                ? e
                : e instanceof Date
                  ? d.default.fromDate(e)
                  : new d.default(e, 0)),
            this
          );
        }
        get limit() {
          return this._limit;
        }
        setLimit(e) {
          return (
            this.requireNotSubscribed(),
            (this._limit = e instanceof c.default ? e : c.default.fromValue(e)),
            this
          );
        }
        setErrorHandler(e) {
          return ((this._errorHandler = e), this);
        }
        setCompletionHandler(e) {
          return (
            this.requireNotSubscribed(),
            (this._completionHandler = e),
            this
          );
        }
        setMaxAttempts(e) {
          return (this.requireNotSubscribed(), (this._maxAttempts = e), this);
        }
        setMaxBackoff(e) {
          return (this.requireNotSubscribed(), (this._maxBackoff = e), this);
        }
        subscribe(e, t, n) {
          return (
            (this._handle = new s.default()),
            (this._listener = n),
            null != t && (this._errorHandler = t),
            this._makeServerStreamRequest(e),
            this._handle
          );
        }
        _makeServerStreamRequest(e) {
          const t = new Map(),
            n = a.com.hedera.mirror.api.proto.ConsensusTopicQuery.encode({
              topicID:
                null != this._topicId ? this._topicId._toProtobuf() : null,
              consensusStartTime:
                null != this._startTime ? this._startTime._toProtobuf() : null,
              consensusEndTime:
                null != this._endTime ? this._endTime._toProtobuf() : null,
              limit: this._limit,
            }).finish(),
            o = e._mirrorNetwork
              .getNextMirrorNode()
              .getChannel()
              .makeServerStreamRequest(
                "ConsensusService",
                "subscribeTopic",
                n,
                (e) => {
                  const n =
                    a.com.hedera.mirror.api.proto.ConsensusTopicResponse.decode(
                      e,
                    );
                  if (
                    (null != this._limit &&
                      this._limit.gt(0) &&
                      (this._limit = this._limit.sub(1)),
                    (this._startTime = d.default
                      ._fromProtobuf(n.consensusTimestamp)
                      .plusNanos(1)),
                    null == n.chunkInfo ||
                      (null != n.chunkInfo && 1 === n.chunkInfo.total))
                  )
                    this._passTopicMessage(i.default._ofSingle(n));
                  else {
                    const e = n.chunkInfo,
                      o = e.initialTransactionID,
                      r = e.total,
                      s = u.default._fromProtobuf(o).toString();
                    let a = [];
                    const l = t.get(s);
                    if (
                      (null == l ? t.set(s, a) : (a = l),
                      a.push(n),
                      a.length === r)
                    ) {
                      const e = i.default._ofMany(a);
                      (t.delete(s), this._passTopicMessage(e));
                    }
                  }
                },
                (t) => {
                  const n = t instanceof Error ? t.message : t.details;
                  if (
                    this._attempt < this._maxAttempts &&
                    this._retryHandler(t)
                  ) {
                    const t = Math.min(
                      250 * 2 ** this._attempt,
                      this._maxBackoff,
                    );
                    (console.warn(
                      `Error subscribing to topic ${null != this._topicId ? this._topicId.toString() : "UNKNOWN"} during attempt ${this._attempt}. Waiting ${t} ms before next attempt: ${n}`,
                    ),
                      (this._attempt += 1),
                      setTimeout(() => {
                        this._makeServerStreamRequest(e);
                      }, t));
                  } else this._errorHandler(null, new Error(n));
                },
                this._completionHandler,
              );
          null != this._handle && this._handle._setCall(() => o());
        }
        requireNotSubscribed() {
          if (null != this._handle)
            throw new Error(
              "Cannot change fields on an already subscribed query",
            );
        }
        _passTopicMessage(e) {
          try {
            if (null == this._listener)
              throw new Error("(BUG) listener is unexpectedly not set");
            this._listener(e);
          } catch (t) {
            this._errorHandler(e, t);
          }
        }
      }
      t.default = TopicMessageQuery;
    },
    7982: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = c(n(2814)),
        u = o(n(3558)),
        s = c(n(3374)),
        i = o(n(3093)),
        a = o(n(2909)),
        l = c(n(3215));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicMessageSubmitTransaction extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._topicId = null),
            null != e.topicId && this.setTopicId(e.topicId),
            (this._message = null),
            null != e.message && this.setMessage(e.message),
            (this._maxChunks = 20),
            (this._chunkSize = r.CHUNK_SIZE),
            null != e.maxChunks && this.setMaxChunks(e.maxChunks),
            null != e.chunkSize && this.setChunkSize(e.chunkSize),
            (this._chunkInfo = null));
        }
        static _fromProtobuf(e, t, n, o, s) {
          const i = s[0],
            a = i.consensusSubmitMessage;
          return r.default._fromProtobufTransactions(
            new TopicMessageSubmitTransaction({
              topicId:
                null != a.topicID ? u.default._fromProtobuf(a.topicID) : void 0,
              message: null != a.message ? a.message : void 0,
            }),
            e,
            t,
            n,
            o,
            s,
          );
        }
        get topicId() {
          return this._topicId;
        }
        setTopicId(e) {
          return (
            this._requireNotFrozen(),
            (this._topicId =
              "string" === typeof e ? u.default.fromString(e) : e.clone()),
            this
          );
        }
        get message() {
          return this._message;
        }
        getMessage() {
          return this._message;
        }
        setMessage(e) {
          return (
            this._requireNotFrozen(),
            (e = l.requireStringOrUint8Array(e)),
            (this._message = e instanceof Uint8Array ? e : s.encode(e)),
            this
          );
        }
        get maxChunks() {
          return this._maxChunks;
        }
        getMaxChunks() {
          return this._maxChunks;
        }
        setMaxChunks(e) {
          return (this._requireNotFrozen(), (this._maxChunks = e), this);
        }
        get chunkSize() {
          return this._chunkSize;
        }
        getChunkSize() {
          return this._chunkSize;
        }
        setChunkSize(e) {
          return ((this._chunkSize = e), this);
        }
        freezeWith(e) {
          if ((super.freezeWith(e), null == this._message)) return this;
          const t = Math.floor(
            (this._message.length + (this._chunkSize - 1)) / this._chunkSize,
          );
          if (t > this._maxChunks)
            throw new Error(
              `Message with size ${this._message.length} too long for ${this._maxChunks} chunks`,
            );
          const n = this._getTransactionId()._toProtobuf();
          let o = this._getTransactionId();
          ((this._transactionIds.locked = !1),
            this._transactions.clear(),
            this._transactionIds.clear(),
            this._signedTransactions.clear());
          for (let r = 0; r < t; r++) {
            ((this._chunkInfo = {
              initialTransactionID: n,
              total: t,
              number: r + 1,
            }),
              this._transactionIds.push(o),
              this._transactionIds.advance());
            for (const e of this._nodeAccountIds.list)
              this._signedTransactions.push(this._makeSignedTransaction(e));
            o = new i.default(
              o.accountId,
              new a.default(o.validStart.seconds, o.validStart.nanos.add(1)),
            );
          }
          return (
            this._transactionIds.advance(),
            (this._chunkInfo = null),
            this
          );
        }
        schedule() {
          if (
            (this._requireNotFrozen(),
            null != this._message && this._message.length > this._chunkSize)
          )
            throw new Error(
              `cannot schedule \`TopicMessageSubmitTransaction\` with message over ${this._chunkSize} bytes`,
            );
          return super.schedule();
        }
        async execute(e, t) {
          return (await this.executeAll(e, t))[0];
        }
        async executeAll(e, t) {
          super._isFrozen() || this.freezeWith(e);
          const n = this._getTransactionId(),
            o = e.operatorAccountId;
          null != o &&
            o.equals(n.accountId) &&
            (await super.signWithOperator(e));
          const r = [];
          let u = t;
          for (let s = 0; s < this._transactionIds.length; s++) {
            const t = Date.now();
            (r.push(await super.execute(e, u)),
              null != u && (u = Date.now() - t));
          }
          return r;
        }
        _execute(e, t) {
          return e.consensus.submitMessage(t);
        }
        _getTransactionDataCase() {
          return "consensusSubmitMessage";
        }
        _makeTransactionData() {
          if (null != this._chunkInfo && null != this._message) {
            const e = this._chunkInfo.number,
              t = (e - 1) * this._chunkSize;
            let n = t + this._chunkSize;
            return (
              n > this._message.length && (n = this._message.length),
              {
                topicID:
                  null != this._topicId ? this._topicId._toProtobuf() : null,
                message: this._message.slice(t, n),
                chunkInfo: this._chunkInfo,
              }
            );
          }
          return {
            topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
            message: this._message,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TopicMessageSubmitTransaction:" + e.toString();
        }
      }
      ((t.default = TopicMessageSubmitTransaction),
        r.TRANSACTION_REGISTRY.set(
          "consensusSubmitMessage",
          TopicMessageSubmitTransaction._fromProtobuf,
        ));
    },
    7983: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = c(n(2814)),
        u = o(n(2774)),
        s = o(n(3558)),
        i = o(n(3146)),
        a = o(n(2934)),
        l = o(n(2909));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class TopicUpdateTransaction extends r.default {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this._topicId = null),
            null != e.topicId && this.setTopicId(e.topicId),
            (this._topicMemo = null),
            null != e.topicMemo && this.setTopicMemo(e.topicMemo),
            (this._submitKey = null),
            null != e.submitKey && this.setSubmitKey(e.submitKey),
            (this._adminKey = null),
            null != e.adminKey && this.setAdminKey(e.adminKey),
            (this._autoRenewAccountId = null),
            null != e.autoRenewAccountId &&
              this.setAutoRenewAccountId(e.autoRenewAccountId),
            (this._autoRenewPeriod = null),
            null != e.autoRenewPeriod &&
              this.setAutoRenewPeriod(e.autoRenewPeriod),
            (this._expirationTime = null),
            null != e.expirationTime &&
              this.setExpirationTime(e.expirationTime));
        }
        static _fromProtobuf(e, t, n, o, i) {
          const c = i[0],
            d = c.consensusUpdateTopic;
          return r.default._fromProtobufTransactions(
            new TopicUpdateTransaction({
              topicId:
                null != d.topicID ? s.default._fromProtobuf(d.topicID) : void 0,
              adminKey:
                null != d.adminKey
                  ? a.default._fromProtobufKey(d.adminKey)
                  : void 0,
              submitKey:
                null != d.submitKey
                  ? a.default._fromProtobufKey(d.submitKey)
                  : void 0,
              autoRenewAccountId:
                null != d.autoRenewAccount
                  ? u.default._fromProtobuf(d.autoRenewAccount)
                  : void 0,
              autoRenewPeriod:
                null != d.autoRenewPeriod && null != d.autoRenewPeriod.seconds
                  ? d.autoRenewPeriod.seconds
                  : void 0,
              topicMemo:
                null != d.memo && null != d.memo.value ? d.memo.value : void 0,
              expirationTime:
                null != d.expirationTime
                  ? l.default._fromProtobuf(d.expirationTime)
                  : void 0,
            }),
            e,
            t,
            n,
            o,
            i,
          );
        }
        get expirationTime() {
          return this._expirationTime;
        }
        setExpirationTime(e) {
          return (
            this._requireNotFrozen(),
            (this._expirationTime =
              e instanceof Date ? l.default.fromDate(e) : e),
            this
          );
        }
        get topicId() {
          return this._topicId;
        }
        setTopicId(e) {
          return (
            this._requireNotFrozen(),
            (this._topicId =
              "string" === typeof e ? s.default.fromString(e) : e.clone()),
            this
          );
        }
        clearTopicId() {
          return (this._requireNotFrozen(), (this._topicId = null), this);
        }
        get topicMemo() {
          return this._topicMemo;
        }
        setTopicMemo(e) {
          return (this._requireNotFrozen(), (this._topicMemo = e), this);
        }
        clearTopicMemo() {
          return (this._requireNotFrozen(), (this._topicMemo = null), this);
        }
        get adminKey() {
          return this._adminKey;
        }
        setAdminKey(e) {
          return (this._requireNotFrozen(), (this._adminKey = e), this);
        }
        clearAdminKey() {
          return (this._requireNotFrozen(), (this._adminKey = null), this);
        }
        get submitKey() {
          return this._submitKey;
        }
        setSubmitKey(e) {
          return (this._requireNotFrozen(), (this._submitKey = e), this);
        }
        clearSubmitKey() {
          return (this._requireNotFrozen(), (this._submitKey = null), this);
        }
        get autoRenewAccountId() {
          return this._autoRenewAccountId;
        }
        setAutoRenewAccountId(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewAccountId =
              e instanceof u.default ? e : u.default.fromString(e)),
            this
          );
        }
        clearAutoRenewAccountId() {
          return (
            this._requireNotFrozen(),
            (this._autoRenewAccountId = null),
            this
          );
        }
        get autoRenewPeriod() {
          return this._autoRenewPeriod;
        }
        setAutoRenewPeriod(e) {
          return (
            this._requireNotFrozen(),
            (this._autoRenewPeriod =
              e instanceof i.default ? e : new i.default(e)),
            this
          );
        }
        _validateChecksums(e) {
          (null != this._topicId && this._topicId.validateChecksum(e),
            null != this._autoRenewAccountId &&
              this._autoRenewAccountId.validateChecksum(e));
        }
        _execute(e, t) {
          return e.consensus.updateTopic(t);
        }
        _getTransactionDataCase() {
          return "consensusUpdateTopic";
        }
        _makeTransactionData() {
          return {
            topicID: null != this._topicId ? this._topicId._toProtobuf() : null,
            adminKey:
              null != this._adminKey ? this._adminKey._toProtobufKey() : null,
            submitKey:
              null != this._submitKey ? this._submitKey._toProtobufKey() : null,
            memo: null != this._topicMemo ? { value: this._topicMemo } : null,
            autoRenewAccount:
              null != this._autoRenewAccountId
                ? this._autoRenewAccountId._toProtobuf()
                : null,
            autoRenewPeriod:
              null != this._autoRenewPeriod
                ? this._autoRenewPeriod._toProtobuf()
                : null,
            expirationTime:
              null != this._expirationTime
                ? this._expirationTime._toProtobuf()
                : null,
          };
        }
        _getLogId() {
          const e = this._transactionIds.current.validStart;
          return "TopicUpdateTransaction:" + e.toString();
        }
      }
      ((t.default = TopicUpdateTransaction),
        r.TRANSACTION_REGISTRY.set(
          "consensusUpdateTopic",
          TopicUpdateTransaction._fromProtobuf,
        ));
    },
    7987: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(2754)),
        u = o(n(2774)),
        s = o(n(2835));
      class TokenNftTransfer {
        constructor(e) {
          ((this.tokenId =
            e.tokenId instanceof s.default
              ? e.tokenId
              : s.default.fromString(e.tokenId)),
            (this.senderAccountId =
              e.senderAccountId instanceof u.default
                ? e.senderAccountId
                : u.default.fromString(e.senderAccountId)),
            (this.receiverAccountId =
              e.receiverAccountId instanceof u.default
                ? e.receiverAccountId
                : u.default.fromString(e.receiverAccountId)),
            (this.serialNumber = r.default.fromValue(e.serialNumber)),
            (this.isApproved = e.isApproved));
        }
        static _fromProtobuf(e) {
          const t = [];
          for (const n of e) {
            const e = s.default._fromProtobuf(n.token);
            for (const o of null != n.nftTransfers ? n.nftTransfers : [])
              t.push(
                new TokenNftTransfer({
                  tokenId: e,
                  senderAccountId: u.default._fromProtobuf(o.senderAccountID),
                  receiverAccountId: u.default._fromProtobuf(
                    o.receiverAccountID,
                  ),
                  serialNumber:
                    null != o.serialNumber ? o.serialNumber : r.default.ZERO,
                  isApproved: 1 == o.isApproval,
                }),
              );
          }
          return t;
        }
        _toProtobuf() {
          return {
            senderAccountID: this.senderAccountId._toProtobuf(),
            receiverAccountID: this.receiverAccountId._toProtobuf(),
            serialNumber: this.serialNumber,
            isApproval: this.isApproved,
          };
        }
      }
      t.default = TokenNftTransfer;
    },
    7991: function (e, t, n) {
      "use strict";
      var o = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = o(n(3093)),
        u = o(n(2831)),
        s = o(n(3557)),
        i = o(n(2774)),
        a = n(2978),
        l = c(n(2826));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            o = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            u,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((r = t ? o : n)) {
            if (r.has(e)) return r.get(e);
            r.set(e, s);
          }
          for (const n in e)
            "default" !== n &&
              {}.hasOwnProperty.call(e, n) &&
              ((u =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, n)) &&
              (u.get || u.set)
                ? r(s, n, u)
                : (s[n] = e[n]));
          return s;
        })(e, t);
      }
      class CostQuery extends s.default {
        constructor(e) {
          (super(),
            (this._query = e),
            (this._grpcDeadline = e._grpcDeadline),
            (this._requestTimeout = e._requestTimeout),
            (this._nodeAccountIds = e._nodeAccountIds.clone()),
            (this._operator = e._operator),
            (this._header = null));
        }
        _getTransactionId() {
          return this._query._getTransactionId();
        }
        _getLogId() {
          return "CostQuery:" + this._query._getLogId();
        }
        async _beforeExecute(e) {
          if (null == e) throw new Error("Cannot do CostQuery without Client");
          const t = null != this._operator ? this._operator : e._operator;
          if (null == t)
            throw new Error(
              "`client` must have an `operator` or an explicit payment transaction must be provided",
            );
          this._query._nodeAccountIds.isEmpty &&
            this._query._nodeAccountIds.setList(
              e._network.getNodeAccountIdsForExecute(),
            );
          const n = r.default.generate(t.accountId);
          null == this._query.paymentTransactionId &&
            this._query.setPaymentTransactionId(n);
          const o = this._getLogId(),
            s = new i.default(0),
            c = r.default.generate(new i.default(0)),
            d = new u.default(0);
          (this._logger &&
            this._logger.debug(
              `[${o}] making a payment transaction for node ${s.toString()} and transaction ID ${c.toString()} with amount ${d.toString()}`,
            ),
            (this._header = {
              payment: await (0, a._makePaymentTransaction)(
                c,
                new i.default(0),
                t,
                d,
              ),
              responseType: l.proto.ResponseType.COST_ANSWER,
            }));
        }
        _makeRequestAsync() {
          return Promise.resolve(this._query._onMakeRequest(this._header));
        }
        _shouldRetry(e, t) {
          return this._query._shouldRetry(e, t);
        }
        _mapStatusError(e, t) {
          return this._query._mapStatusError(e, t);
        }
        _mapResponse(e, t, n) {
          const o = this._query._mapResponseHeader(e).cost;
          return Promise.resolve(u.default.fromTinybars(o));
        }
        _execute(e, t) {
          return this._query._execute(e, t);
        }
        _requestToBytes(e) {
          return this._query._requestToBytes(e);
        }
        _responseToBytes(e) {
          return this._query._responseToBytes(e);
        }
      }
      ((t.default = CostQuery), a.COST_QUERY.push((e) => new CostQuery(e)));
    },
  },
]);
