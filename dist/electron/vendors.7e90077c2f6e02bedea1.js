(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [132],
  {
    10188: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccountFlags = t.AccountSetFlags = t.AccountFields = void 0));
      const i = r(6626),
        n = {
          DefaultRipple: 8388608,
          DepositAuth: 16777216,
          DisableMaster: 1048576,
          DisallowXRP: 524288,
          GlobalFreeze: 4194304,
          NoFreeze: 2097152,
          PasswordSpent: 65536,
          RequireAuth: 262144,
          RequireDestTag: 131072,
        },
        s = {
          passwordSpent: n.PasswordSpent,
          requireDestinationTag: n.RequireDestTag,
          requireAuthorization: n.RequireAuth,
          depositAuth: n.DepositAuth,
          disallowIncomingXRP: n.DisallowXRP,
          disableMasterKey: n.DisableMaster,
          noFreeze: n.NoFreeze,
          globalFreeze: n.GlobalFreeze,
          defaultRipple: n.DefaultRipple,
        };
      t.AccountFlags = s;
      const o = {
        requireDestinationTag: i.txFlagIndices.AccountSet.asfRequireDest,
        requireAuthorization: i.txFlagIndices.AccountSet.asfRequireAuth,
        depositAuth: i.txFlagIndices.AccountSet.asfDepositAuth,
        disallowIncomingXRP: i.txFlagIndices.AccountSet.asfDisallowXRP,
        disableMasterKey: i.txFlagIndices.AccountSet.asfDisableMaster,
        enableTransactionIDTracking: i.txFlagIndices.AccountSet.asfAccountTxnID,
        noFreeze: i.txFlagIndices.AccountSet.asfNoFreeze,
        globalFreeze: i.txFlagIndices.AccountSet.asfGlobalFreeze,
        defaultRipple: i.txFlagIndices.AccountSet.asfDefaultRipple,
      };
      t.AccountSetFlags = o;
      const a = {
        EmailHash: {
          name: "emailHash",
          encoding: "hex",
          length: 32,
          defaults: "00000000000000000000000000000000",
        },
        WalletLocator: { name: "walletLocator" },
        MessageKey: { name: "messageKey" },
        Domain: { name: "domain", encoding: "hex" },
        TransferRate: { name: "transferRate", defaults: 0, shift: 9 },
        TickSize: { name: "tickSize", defaults: 0 },
      };
      t.AccountFields = a;
    },
    10189: function (e, t, r) {
      "use strict";
      function i(e, t) {
        Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t);
      }
      function n(e) {
        if (e.constructor.name) return e.constructor.name;
        const t = e.constructor.toString(),
          r = t.match(/^function\s+([^(]*)/),
          i = t.match(/^class\s([^\s]*)/);
        return r ? r[1] : i[1];
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setPrototypeOf = t.getConstructorName = void 0),
        (t.setPrototypeOf = i),
        (t.getConstructorName = n));
    },
    10190: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tx_json =
          t.instructions =
          t.apiOptions =
          t.verifyPaymentChannelClaim =
          t.signPaymentChannelClaim =
          t.generateAddress =
          t.computeLedgerHash =
          t.submit =
          t.combine =
          t.sign =
          t.prepareTicketCreate =
          t.prepareCheckCancel =
          t.prepareCheckCash =
          t.prepareCheckCreate =
          t.preparePaymentChannelClaim =
          t.preparePaymentChannelFund =
          t.preparePaymentChannelCreate =
          t.prepareEscrowExecution =
          t.prepareEscrowCancellation =
          t.prepareEscrowCreation =
          t.prepareSettings =
          t.prepareTrustline =
          t.prepareOrderCancellation =
          t.prepareOrder =
          t.preparePayment =
          t.getLedger =
          t.getPaymentChannel =
          t.getTransaction =
          t.getOrderbook =
          t.getOrders =
          t.getBalanceSheet =
          t.getBalances =
          t.getTrustlines =
          t.getAccountInfo =
          t.getSettings =
          t.getTransactions =
          t.getPaths =
            void 0));
      const o = s(r(2794)),
        a = r(3603),
        c = r(5543);
      function d(e) {
        return new a.ValidationError(e);
      }
      function h(e) {
        if (
          null != e &&
          null != e.minLedgerVersion &&
          null != e.maxLedgerVersion &&
          Number(e.minLedgerVersion) > Number(e.maxLedgerVersion)
        )
          throw d("minLedgerVersion must not be greater than maxLedgerVersion");
      }
      function u(e, t) {
        (c.schemaValidate(e, t), h(t.options));
      }
      ((t.getPaths = o.partial(c.schemaValidate, "getPathsParameters")),
        (t.getTransactions = o.partial(u, "getTransactionsParameters")),
        (t.getSettings = o.partial(u, "getSettingsParameters")),
        (t.getAccountInfo = o.partial(u, "getAccountInfoParameters")),
        (t.getTrustlines = o.partial(u, "getTrustlinesParameters")),
        (t.getBalances = o.partial(u, "getBalancesParameters")),
        (t.getBalanceSheet = o.partial(u, "getBalanceSheetParameters")),
        (t.getOrders = o.partial(u, "getOrdersParameters")),
        (t.getOrderbook = o.partial(u, "getOrderbookParameters")),
        (t.getTransaction = o.partial(u, "getTransactionParameters")),
        (t.getPaymentChannel = o.partial(u, "getPaymentChannelParameters")),
        (t.getLedger = o.partial(u, "getLedgerParameters")),
        (t.preparePayment = o.partial(
          c.schemaValidate,
          "preparePaymentParameters",
        )),
        (t.prepareOrder = o.partial(
          c.schemaValidate,
          "prepareOrderParameters",
        )),
        (t.prepareOrderCancellation = o.partial(
          c.schemaValidate,
          "prepareOrderCancellationParameters",
        )),
        (t.prepareTrustline = o.partial(
          c.schemaValidate,
          "prepareTrustlineParameters",
        )),
        (t.prepareSettings = o.partial(
          c.schemaValidate,
          "prepareSettingsParameters",
        )),
        (t.prepareEscrowCreation = o.partial(
          c.schemaValidate,
          "prepareEscrowCreationParameters",
        )),
        (t.prepareEscrowCancellation = o.partial(
          c.schemaValidate,
          "prepareEscrowCancellationParameters",
        )),
        (t.prepareEscrowExecution = o.partial(
          c.schemaValidate,
          "prepareEscrowExecutionParameters",
        )),
        (t.preparePaymentChannelCreate = o.partial(
          c.schemaValidate,
          "preparePaymentChannelCreateParameters",
        )),
        (t.preparePaymentChannelFund = o.partial(
          c.schemaValidate,
          "preparePaymentChannelFundParameters",
        )),
        (t.preparePaymentChannelClaim = o.partial(
          c.schemaValidate,
          "preparePaymentChannelClaimParameters",
        )),
        (t.prepareCheckCreate = o.partial(
          c.schemaValidate,
          "prepareCheckCreateParameters",
        )),
        (t.prepareCheckCash = o.partial(
          c.schemaValidate,
          "prepareCheckCashParameters",
        )),
        (t.prepareCheckCancel = o.partial(
          c.schemaValidate,
          "prepareCheckCancelParameters",
        )),
        (t.prepareTicketCreate = o.partial(
          c.schemaValidate,
          "prepareTicketParameters",
        )),
        (t.sign = o.partial(c.schemaValidate, "signParameters")),
        (t.combine = o.partial(c.schemaValidate, "combineParameters")),
        (t.submit = o.partial(c.schemaValidate, "submitParameters")),
        (t.computeLedgerHash = o.partial(
          c.schemaValidate,
          "computeLedgerHashParameters",
        )),
        (t.generateAddress = o.partial(
          c.schemaValidate,
          "generateAddressParameters",
        )),
        (t.signPaymentChannelClaim = o.partial(
          c.schemaValidate,
          "signPaymentChannelClaimParameters",
        )),
        (t.verifyPaymentChannelClaim = o.partial(
          c.schemaValidate,
          "verifyPaymentChannelClaimParameters",
        )),
        (t.apiOptions = o.partial(c.schemaValidate, "api-options")),
        (t.instructions = o.partial(c.schemaValidate, "instructions")),
        (t.tx_json = o.partial(c.schemaValidate, "tx-json")));
    },
    10194: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"tx-json","link":"https://xrpl.org/transaction-formats.html","description":"An object in rippled txJSON format","type":"object","properties":{"Account":{"$ref":"address"},"TransactionType":{"type":"string"}},"required":["Account","TransactionType"]}',
      );
    },
    10195: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"transactionType","link":"transaction-types","description":"The type of the transaction.","type":"string","enum":["payment","order","orderCancellation","trustline","settings","escrowCreation","escrowCancellation","escrowExecution","paymentChannelCreate","paymentChannelFund","paymentChannelClaim","checkCreate","checkCancel","checkCash","depositPreauth","accountDelete"]}',
      );
    },
    10196: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"hash128","description":"The hexadecimal representation of a 128-bit hash","type":"string","pattern":"^[A-F0-9]{32}$"}',
      );
    },
    10197: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"hash256","description":"The hexadecimal representation of a 256-bit hash","type":"string","pattern":"^[A-F0-9]{64}$"}',
      );
    },
    10198: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"sequence","link":"account-sequence-number","description":"An account transaction sequence number","type":"integer","minimum":0}',
      );
    },
    10199: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"ticket-sequence","link":"account-sequence-number","description":"An account transaction tickt sequence number","type":"integer","minimum":1}',
      );
    },
    10200: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"signature","description":"The hexadecimal representation of a signature.","type":"string","pattern":"^[A-F0-9]+$"}',
      );
    },
    10201: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"issue","description":"The currency code, and the counterparty if it\'s not XRP.","allOf":[{"$ref":"amountbase"},{"not":{"required":["value"]}}]}',
      );
    },
    10202: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"ledgerVersion","description":"A ledger version number","oneOf":[{"type":"integer","minimum":1},{"type":"string","enum":["validated","closed","current"]}]}',
      );
    },
    10203: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"maxAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"The address to send from."},"maxAmount":{"$ref":"laxAmount","description":"The maximum amount to send. (This field cannot be used with source.amount)"},"tag":{"$ref":"tag"}},"required":["address","maxAmount"],"additionalProperties":false}',
      );
    },
    10204: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"memo","description":"Memo objects represent arbitrary data that can be included in a transaction","type":"object","properties":{"type":{"pattern":"^[A-Za-z0-9\\\\-._~:/?#[\\\\]@!$&\'()*+,;=%]*$","description":"Conventionally, a unique relation (according to [RFC 5988](http://tools.ietf.org/html/rfc5988#section-4)) that defines the format of this memo. Only characters allowed in URLs are permitted."},"format":{"pattern":"^[A-Za-z0-9\\\\-._~:/?#[\\\\]@!$&\'()*+,;=%]*$","description":"Conventionally containing information on how the memo is encoded, for example as a [MIME type](http://www.iana.org/assignments/media-types/media-types.xhtml). Only characters allowed in URLs are permitted."},"data":{"type":"string","description":"Arbitrary string, conventionally containing the content of the memo."}},"additionalProperties":false,"anyOf":[{"required":["data"]},{"required":["type"]}]}',
      );
    },
    10205: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"memos","link":"transaction-memos","description":"Array of memos to attach to the transaction.","type":"array","items":{"$ref":"memo"}}',
      );
    },
    10206: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"publicKey","description":"The hexadecimal representation of a secp256k1 or Ed25519 public key.","type":"string","pattern":"^[A-F0-9]+$"}',
      );
    },
    10207: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"privateKey","description":"The hexadecimal representation of a secp256k1 or Ed25519 private key.","type":"string","pattern":"^[A-F0-9]+$"}',
      );
    },
    10208: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"uint32","description":"A 32-bit unsigned integer","type":"integer","minimum":0,"maximum":4294967295}',
      );
    },
    10209: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"value","link":"value","description":"A string representation of a non-negative floating point number","type":"string","pattern":"^[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?$"}',
      );
    },
    10210: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"sourceAdjustment","type":"object","oneOf":[{"$ref":"sourceExactAdjustment"},{"$ref":"maxAdjustment"}]}',
      );
    },
    10211: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"destinationAdjustment","type":"object","oneOf":[{"$ref":"destinationExactAdjustment"},{"$ref":"minAdjustment"}]}',
      );
    },
    10212: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"tag","description":"An arbitrary 32-bit unsigned integer. It typically maps to an off-ledger account; for example, a hosted wallet or exchange account.","type":"integer","$ref":"uint32"}',
      );
    },
    10213: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"laxAmount","description":"Amount where counterparty is optional","link":"amount","type":"object","properties":{"currency":{"$ref":"currency"},"counterparty":{"$ref":"address"},"value":{"$ref":"value"}},"required":["currency","value"],"additionalProperties":false}',
      );
    },
    10214: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"laxLaxAmount","description":"Amount where counterparty and value are optional","link":"amount","type":"object","properties":{"currency":{"$ref":"currency"},"counterparty":{"$ref":"address"},"value":{"$ref":"value"}},"required":["currency"],"additionalProperties":false}',
      );
    },
    10215: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"minAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"minAmount":{"$ref":"laxAmount","description":"The minimum amount to be delivered. (This field cannot be used with destination.amount)"},"tag":{"$ref":"tag"}},"required":["address","minAmount"],"additionalProperties":false}',
      );
    },
    10216: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"sourceExactAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"The address to send from."},"amount":{"$ref":"laxAmount","description":"An exact amount to send. If the counterparty is not specified, amounts with any counterparty may be used. (This field cannot be used with source.maxAmount)"},"tag":{"$ref":"tag"}},"required":["address","amount"],"additionalProperties":false}',
      );
    },
    10217: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"destinationExactAdjustment","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"amount":{"$ref":"laxAmount","description":"An exact amount to deliver to the recipient. If the counterparty is not specified, amounts with any counterparty may be used. (This field cannot be used with `destination.minAmount`.)"},"tag":{"$ref":"tag"}},"required":["address","amount"],"additionalProperties":false}',
      );
    },
    10218: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"destinationAddressTag","description":"A destination address and optional tag, with no amount included. When parsing an incoming transaction, the original specification\'s amount is hidden to prevent misinterpretation. For the amount that the transaction delivered, see `outcome.deliveredAmount`.","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"tag":{"$ref":"tag"}},"required":["address"],"additionalProperties":false}',
      );
    },
    10219: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"transactionHash","link":"transaction-id","description":"A hash of a transaction used to identify the transaction, represented in hexadecimal.","type":"string","pattern":"^[A-F0-9]{64}$"}',
      );
    },
    10220: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"address","description":"An account address on the XRP Ledger","type":"string","format":"address","link":"address","oneOf":[{"$ref":"xAddress"},{"$ref":"classicAddress"}]}',
      );
    },
    10221: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"xAddress","description":"An XRP Ledger address in X-address format","type":"string","format":"xAddress","link":"x-address","pattern":"^[XT][1-9A-HJ-NP-Za-km-z]{46}$"}',
      );
    },
    10222: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"classicAddress","description":"A classic address (Account ID) for the XRP Ledger","type":"string","format":"classicAddress","link":"classic-address","pattern":"^r[1-9A-HJ-NP-Za-km-z]{24,34}$"}',
      );
    },
    10223: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"adjustment","type":"object","properties":{"address":{"$ref":"address"},"amount":{"$ref":"amount"},"tag":{"$ref":"tag"}},"required":["address","amount"],"additionalProperties":false}',
      );
    },
    10224: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"quality","description":"Ratio for incoming/outgoing transit fees.","type":"number","minimum":1e-9,"maximum":4.294967295}',
      );
    },
    10225: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"amount","link":"amount","description":"An Amount on the XRP Ledger","allOf":[{"$ref":"amountbase"},{"required":["value"]}]}',
      );
    },
    10226: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"amountbase","description":"Base class for amount and issue","type":"object","properties":{"value":{"description":"The quantity of the currency, denoted as a string so that it does not lose precision","$ref":"value"},"currency":{"description":"The three-character code or hexadecimal string used to denote currencies, or \\"drops\\" for the smallest unit of XRP.","$ref":"currency"},"counterparty":{"description":"The XRP Ledger address of the account that owes or is owed the funds (omitted if `currency` is \\"XRP\\" or \\"drops\\")","$ref":"address"}},"additionalProperties":false,"required":["currency"],"oneOf":[{"properties":{"currency":{"not":{"enum":["XRP","drops"]}}},"required":["counterparty"]},{"properties":{"currency":{"enum":["XRP","drops"]}},"not":{"required":["counterparty"]}}]}',
      );
    },
    10227: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"balance","description":"Balance amount","link":"amount","type":"object","properties":{"value":{"description":"The balance on the trustline","$ref":"signedValue"},"currency":{"description":"The three-character code or hexadecimal string used to denote currencies","$ref":"currency"},"counterparty":{"description":"The XRP Ledger address of the account that owes or is owed the funds.","$ref":"address"}},"additionalProperties":false,"required":["currency","value"],"oneOf":[{"properties":{"currency":{"not":{"enum":["XRP"]}}},"required":["counterparty"]},{"properties":{"currency":{"enum":["XRP"]}},"not":{"required":["counterparty"]}}]}',
      );
    },
    10228: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"blob","description":"An uppercase hexadecimal string representation of a transaction","type":"string","minLength":1,"pattern":"^[0-9A-F]*$"}',
      );
    },
    10229: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"currency","description":"The three-character code or hexadecimal string used to denote currencies","type":"string","link":"currency","pattern":"^([a-zA-Z0-9<>(){}[\\\\]|?!@#$%^&*]{3}|[A-F0-9]{40}|drops)$"}',
      );
    },
    10230: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"signedValue","description":"A string representation of a floating point number","type":"string","link":"value","pattern":"^[-]?[0-9]*[.]?[0-9]+([eE][-+]?[0-9]+)?$"}',
      );
    },
    10231: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderbook","type":"object","properties":{"base":{"$ref":"issue"},"counter":{"$ref":"issue"}},"required":["base","counter"],"additionalProperties":false}',
      );
    },
    10232: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"instructions","link":"transaction-instructions","description":"Instructions for executing the transaction","type":"object","properties":{"sequence":{"description":"The initiating account\'s sequence number for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set.","$ref":"sequence"},"ticketSequence":{"description":"The ticket sequence to be used for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set.","$ref":"ticket-sequence"},"fee":{"description":"An exact fee to pay for the transaction, before multiplying for multi-signed transactions. See [Transaction Fees](#transaction-fees) for more information.","$ref":"value"},"maxFee":{"description":"Deprecated: Use `maxFeeXRP` in the RippleAPI constructor instead. The maximum fee to pay for this transaction. If this exceeds `maxFeeXRP`, use `maxFeeXRP` instead. See [Transaction Fees](#transaction-fees) for more information.","$ref":"value"},"maxLedgerVersion":{"description":"The highest ledger version that the transaction can be included in. If this option and `maxLedgerVersionOffset` are both omitted, the default is 3 greater than the current validated ledger version (equivalent to `maxLedgerVersionOffset=3`). Use `null` to not set a maximum ledger version. If not null, this must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'.","oneOf":[{"$ref":"ledgerVersion"},{"type":"null"}]},"maxLedgerVersionOffset":{"description":"Offset from current validated ledger version to highest ledger version that the transaction can be included in.","type":"integer","minimum":0},"signersCount":{"description":"Number of signers that can multi-sign this transaction.","type":"integer","minimum":1}},"additionalProperties":false,"not":{"anyOf":[{"description":"fee and maxFee are mutually exclusive","required":["fee","maxFee"]},{"description":"maxLedgerVersion and maxLedgerVersionOffset are mutually exclusive","required":["maxLedgerVersion","maxLedgerVersionOffset"]},{"description":"sequence and ticketSequence are mutually exclusive","required":["sequence","ticketSequence"]}]}}',
      );
    },
    10233: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"settingsPlusMemos","type":"object","properties":{"defaultRipple":{"type":"boolean","description":"Enable [rippling](https://xrpl.org/rippling.html) on this account’s trust lines by default. Currency issuers should enable this setting; most others should not."},"depositAuth":{"type":"boolean","description":"Enable [Deposit Authorization](https://xrpl.org/depositauth.html) on this account. If set, transactions cannot send value of any kind to this account unless the sender of those transactions is the account itself. (Requires the [DepositAuth amendment](https://xrpl.org/known-amendments.html#depositauth))"},"disableMasterKey":{"type":"boolean","description":"Disallows use of the master key to sign transactions for this account. To disable the master key, you must authorize the transaction by signing it with the master key pair. You cannot use a regular key pair or a multi-signature. You can re-enable the master key pair using a regular key pair or multi-signature. See [AccountSet](https://xrpl.org/accountset.html)."},"disallowIncomingXRP":{"type":"boolean","description":"Indicates that client applications should not send XRP to this account. Not enforced by rippled."},"domain":{"type":"string","description":"The domain that owns this account, as a hexadecimal string representing the ASCII for the domain in lowercase."},"emailHash":{"description":"Hash of an email address to be used for generating an avatar image. Conventionally, clients use Gravatar to display this image. Use `null` to clear.","oneOf":[{"type":"null"},{"$ref":"hash128"}]},"walletLocator":{"description":"Transaction hash or any other 64 character hexadecimal string, that may or may not represent the result of a hash operation. Use `null` to clear.","oneOf":[{"type":"null"},{"$ref":"hash256"}]},"enableTransactionIDTracking":{"type":"boolean","description":"Track the ID of this account’s most recent transaction."},"globalFreeze":{"type":"boolean","description":"Freeze all assets issued by this account."},"memos":{"$ref":"memos"},"messageKey":{"type":"string","description":"Public key for sending encrypted messages to this account. Conventionally, it should be a secp256k1 key, the same encryption that is used by the rest of Ripple."},"noFreeze":{"type":"boolean","description":"Permanently give up the ability to freeze individual trust lines. This flag can never be disabled after being enabled."},"passwordSpent":{"type":"boolean","description":"Indicates that the account has used its free SetRegularKey transaction."},"regularKey":{"oneOf":[{"$ref":"address"},{"type":"null"}],"description":"The public key of a new keypair, to use as the regular key to this account, as a base-58-encoded string in the same format as an account address. Use `null` to remove the regular key."},"requireAuthorization":{"type":"boolean","description":"If set, this account must individually give other users permission to hold this account’s issued tokens."},"requireDestinationTag":{"type":"boolean","description":"Requires incoming payments to specify a destination tag."},"signers":{"type":"object","description":"Settings that determine what sets of accounts can be used to sign a transaction on behalf of this account using multisigning.","properties":{"threshold":{"$ref":"uint32","description":"A target number for the signer weights. A multi-signature from this list is valid only if the sum weights of the signatures provided is equal or greater than this value. To delete the signers setting, use the value `0`."},"weights":{"type":"array","description":"Weights of signatures for each signer.","items":{"type":"object","description":"An association of an address and a weight.","properties":{"address":{"$ref":"address"},"weight":{"$ref":"uint32","description":"The weight that the signature of this account counts as towards the threshold."}},"required":["address","weight"],"additionalProperties":false},"minItems":1,"maxItems":8}},"required":["threshold"],"additionalProperties":false},"transferRate":{"description":"The fee to charge when users transfer this account’s issuances, as the decimal amount that must be sent to deliver 1 unit. Has precision up to 9 digits beyond the decimal point. Use `null` to set no fee.","oneOf":[{"type":"null"},{"type":"number","minimum":1,"maximum":4.294967295}]},"tickSize":{"description":"Tick size to use for offers involving a currency issued by this address. The exchange rates of those offers is rounded to this many significant digits. Valid values are 3 to 15 inclusive, or 0 to disable.","enum":[0,3,4,5,6,7,8,9,10,11,12,13,14,15]}},"additionalProperties":false}',
      );
    },
    10234: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"settings","link":"settings","$ref":"settingsPlusMemos","oneOf":[{"required":["memos"],"minProperties":2,"maxProperties":2},{"not":{"required":["memos"]},"minProperties":1,"maxProperties":1}]}',
      );
    },
    10235: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"payment","link":"payment","type":"object","properties":{"source":{"$ref":"sourceAdjustment","description":"The source of the funds to be sent."},"destination":{"$ref":"destinationAdjustment","description":"The destination of the funds to be sent."},"paths":{"type":"string","description":"The paths of trustlines and orders to use in executing the payment."},"memos":{"$ref":"memos"},"invoiceID":{"description":"A 256-bit hash that can be used to identify a particular payment.","$ref":"hash256"},"allowPartialPayment":{"description":"If true, this payment can deliver less than the full amount.","type":"boolean"},"noDirectRipple":{"description":"If true and paths are specified, the sender would like the XRP Ledger to disregard any direct paths from the source account to the destination account. This may be used to take advantage of an arbitrage opportunity or by gateways wishing to issue balances from a hot wallet to a user who has mistakenly set a trustline directly to the hot wallet.","type":"boolean"},"limitQuality":{"description":"Only take paths where all the conversions have an input:output ratio that is equal or better than the ratio of destination.amount:source.maxAmount.","type":"boolean"}},"required":["source","destination"],"additionalProperties":false}',
      );
    },
    10236: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPayment","description":"A specification of a payment in a response for getTransaction or getTransactions.","type":"object","properties":{"source":{"$ref":"sourceAdjustment","description":"The source of the funds to be sent."},"destination":{"$ref":"destinationAddressTag","description":"The destination of the funds to be sent. Since this is a payment response, the amount is not shown here. For the amount that the transaction delivered, see `outcome.deliveredAmount`."},"paths":{"type":"string","description":"The paths of trustlines and orders to use in executing the payment."},"memos":{"$ref":"memos"},"invoiceID":{"description":"A 256-bit hash that can be used to identify a particular payment.","$ref":"hash256"},"allowPartialPayment":{"description":"If true, this payment can deliver less than the full amount.","type":"boolean"},"noDirectRipple":{"description":"If true and paths are specified, the sender would like the XRP Ledger to disregard any direct paths from the source account to the destination account. This may be used to take advantage of an arbitrage opportunity or by gateways wishing to issue balances from a hot wallet to a user who has mistakenly set a trustline directly to the hot wallet.","type":"boolean"},"limitQuality":{"description":"Only take paths where all the conversions have an input:output ratio that is equal or better than the ratio of destination.amount:source.maxAmount.","type":"boolean"}},"required":["source","destination"],"additionalProperties":false}',
      );
    },
    10237: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"escrowCancellation","link":"escrow-cancellation","type":"object","properties":{"memos":{"$ref":"memos"},"owner":{"$ref":"address","description":"The address of the owner of the escrow to cancel."},"escrowSequence":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of the [Escrow Creation](#escrow-creation) transaction for the escrow to cancel."}},"required":["owner","escrowSequence"],"additionalProperties":false}',
      );
    },
    10238: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderCancellation","link":"order-cancellation","type":"object","properties":{"orderSequence":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of the order to cancel."},"memos":{"$ref":"memos"}},"required":["orderSequence"],"additionalProperties":false}',
      );
    },
    10239: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"order","link":"order","type":"object","properties":{"direction":{"type":"string","enum":["buy","sell"],"description":"Equal to \\"buy\\" for buy orders and \\"sell\\" for sell orders."},"quantity":{"$ref":"amount","description":"The amount of currency to buy or sell."},"totalPrice":{"$ref":"amount","description":"The total price to be paid for the `quantity` to be bought or sold."},"immediateOrCancel":{"type":"boolean","description":"Treat the offer as an [Immediate or Cancel order](http://en.wikipedia.org/wiki/Immediate_or_cancel). If enabled, do not create an object in the ledger that can be matched later: instead, only execute as much as can be fulfilled immediately. This cannot be used with `fillOrKill`."},"fillOrKill":{"type":"boolean","description":"Treat the offer as a [Fill or Kill order](http://en.wikipedia.org/wiki/Fill_or_kill). Only attempt to match existing offers in the ledger, and only do so if the entire quantity can be exchanged. This cannot be used with `immediateOrCancel`."},"passive":{"description":"If enabled, the offer does not consume offers that exactly match it, and instead becomes an Offer node in the ledger. It still consumes offers that cross it.","type":"boolean"},"expirationTime":{"type":"string","format":"date-time","description":"Time after which the offer is no longer active, as an [ISO 8601 date-time](https://en.wikipedia.org/wiki/ISO_8601)."},"orderToReplace":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of an order to cancel before the new order is created, effectively replacing the old order."},"memos":{"$ref":"memos"}},"required":["direction","quantity","totalPrice"],"additionalProperties":false,"not":{"description":"immediateOrCancel and fillOrKill are mutually exclusive","required":["immediateOrCancel","fillOrKill"]}}',
      );
    },
    10240: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"escrowExecution","link":"escrow-execution","type":"object","properties":{"memos":{"$ref":"memos"},"owner":{"$ref":"address","description":"The address of the owner of the escrow to execute."},"escrowSequence":{"$ref":"sequence","description":"The [account sequence number](#account-sequence-number) of the [Escrow Creation](#escrow-creation) transaction for the escrow to execute."},"condition":{"type":"string","description":"A hex value representing a [PREIMAGE-SHA-256 crypto-condition](https://tools.ietf.org/html/draft-thomas-crypto-conditions-02#section-8.1). This must match the original `condition` from the escrow creation transaction.","pattern":"^[A-F0-9]{0,256}$"},"fulfillment":{"type":"string","description":"A hex value representing the [PREIMAGE-SHA-256 crypto-condition](https://tools.ietf.org/html/draft-thomas-crypto-conditions-02#section-8.1) fulfillment for `condition`.","pattern":"^[A-F0-9]+$"}},"required":["owner","escrowSequence"],"additionalProperties":false}',
      );
    },
    10241: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"escrowCreation","link":"escrow-creation","type":"object","properties":{"amount":{"$ref":"value","description":"Amount of XRP for sender to escrow."},"destination":{"$ref":"address","description":"Address to receive escrowed XRP."},"memos":{"$ref":"memos"},"condition":{"type":"string","description":"A hex value representing a [PREIMAGE-SHA-256 crypto-condition](https://tools.ietf.org/html/draft-thomas-crypto-conditions-02#section-8.1). If present, `fulfillment` is required upon execution.","pattern":"^[A-F0-9]{0,256}$"},"allowCancelAfter":{"type":"string","format":"date-time","description":"If present, the escrow may be cancelled after this time."},"allowExecuteAfter":{"type":"string","format":"date-time","description":"If present, the escrow can not be executed before this time."},"sourceTag":{"$ref":"tag","description":"Source tag."},"destinationTag":{"$ref":"tag","description":"Destination tag."}},"required":["amount","destination"],"additionalProperties":false}',
      );
    },
    10242: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"paymentChannelCreate","link":"payment-channel-create","type":"object","properties":{"amount":{"$ref":"value","description":"Amount of XRP for sender to set aside in this channel."},"destination":{"$ref":"address","description":"Address to receive XRP claims against this channel."},"settleDelay":{"type":"number","description":"Amount of seconds the source address must wait before closing the channel if it has unclaimed XRP."},"publicKey":{"$ref":"publicKey","description":"Public key of the key pair the source may use to sign claims against this channel."},"cancelAfter":{"type":"string","format":"date-time","description":"Time when this channel expires. This expiration cannot be changed after creating the channel."},"sourceTag":{"$ref":"tag","description":"Source tag."},"destinationTag":{"$ref":"tag","description":"Destination tag."},"memos":{"$ref":"memos"}},"required":["amount","destination","settleDelay","publicKey"],"additionalProperties":false}',
      );
    },
    10243: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"paymentChannelFund","link":"payment-channel-fund","type":"object","properties":{"amount":{"$ref":"value","description":"Amount of XRP to fund the channel with."},"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"expiration":{"type":"string","format":"date-time","description":"New expiration for this channel. (This does not change the cancelAfter expiration, if the channel has one.) Cannot move the expiration sooner than settleDelay seconds from time of the request."},"memos":{"$ref":"memos"}},"required":["amount","channel"],"additionalProperties":false}',
      );
    },
    10244: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"paymentChannelClaim","link":"payment-channel-claim","type":"object","properties":{"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"amount":{"$ref":"value","description":"Amount of XRP authorized by this signature."},"balance":{"$ref":"value","description":"Total XRP balance delivered by this channel after claim is processed."},"signature":{"$ref":"signature","description":"Signed claim authorizing withdrawal of XRP from the channel. (Required except from the channel\'s source address.)"},"publicKey":{"$ref":"publicKey","description":"Public key of the channel. (For verifying the signature.)"},"renew":{"type":"boolean","description":"Clear the channel\'s expiration time."},"close":{"type":"boolean","description":"Request to close the channel. If the channel has no XRP remaining or the destination address requests it, closes the channel immediately (returning unclaimed XRP to the source address). Otherwise, sets the channel to expire after settleDelay seconds have passed."},"memos":{"$ref":"memos"}},"required":["channel"],"additionalProperties":false}',
      );
    },
    10245: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"checkCreate","link":"check-create","type":"object","properties":{"destination":{"$ref":"address","description":"Address of the account that can cash the check."},"sendMax":{"$ref":"laxAmount","description":"Amount of source currency the check is allowed to debit the sender, including transfer fees on non-XRP currencies."},"destinationTag":{"$ref":"tag","description":"Destination tag that identifies the reason for the check, or a hosted recipient to pay."},"expiration":{"type":"string","format":"date-time","description":"Time after which the check is no longer valid."},"invoiceID":{"$ref":"hash256","description":"256-bit hash, as a 64-character hexadecimal string, representing a specific reason or identifier for this check."},"memos":{"$ref":"memos"}},"required":["destination","sendMax"],"additionalProperties":false}',
      );
    },
    10246: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"checkCash","link":"check-cash","type":"object","properties":{"checkID":{"$ref":"hash256","description":"The ID of the Check ledger object to cash, as a 64-character hexadecimal string."},"amount":{"$ref":"laxAmount","description":"Redeem the Check for exactly this amount, if possible. The currency must match that of the sendMax of the corresponding CheckCreate transaction. You must provide either this field or deliverMin."},"deliverMin":{"$ref":"laxAmount","description":"Redeem the Check for at least this amount and for as much as possible. The currency must match that of the sendMax of the corresponding CheckCreate transaction. You must provide either this field or amount."},"memos":{"$ref":"memos"}},"required":["checkID"],"oneOf":[{"required":["amount"]},{"required":["deliverMin"]}],"additionalProperties":false}',
      );
    },
    10247: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"checkCancel","link":"check-cancel","type":"object","properties":{"checkID":{"$ref":"hash256","description":"The ID of the Check ledger object to cancel, as a 64-character hexadecimal string."},"memos":{"$ref":"memos"}},"required":["checkID"],"additionalProperties":false}',
      );
    },
    10248: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"trustline","link":"trustline","type":"object","properties":{"currency":{"$ref":"currency","description":"The currency this trustline applies to."},"counterparty":{"$ref":"address","description":"The address of the account this trustline extends trust to."},"limit":{"$ref":"value","description":"The maximum amount that the owner of the trustline can be owed through the trustline."},"qualityIn":{"$ref":"quality","description":"Incoming balances on this trustline are valued at this ratio."},"qualityOut":{"$ref":"quality","description":"Outgoing balances on this trustline are valued at this ratio."},"ripplingDisabled":{"type":"boolean","description":"If true, payments cannot ripple through this trustline."},"authorized":{"type":"boolean","description":"If true, authorize the counterparty to hold issuances from this account."},"frozen":{"type":"boolean","description":"If true, the trustline is frozen, which means that funds can only be sent to the owner."},"memos":{"$ref":"memos"}},"required":["currency","counterparty","limit"],"additionalProperties":false}',
      );
    },
    10249: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"depositPreauth","link":"deposit-preauth","type":"object","properties":{"authorize":{"$ref":"address","description":"Address of the account that can cash the check."},"unauthorize":{"$ref":"address","description":"Address of the account that can cash the check."},"memos":{"$ref":"memos"}},"oneOf":[{"required":["authorize"]},{"required":["unauthorize"]}],"additionalProperties":false}',
      );
    },
    10250: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"accountDelete","link":"account-delete","type":"object","properties":{"destination":{"$ref":"address","description":"Address of an account to receive any leftover XRP after deleting the sending account. Must be a funded account in the ledger, and must not be the sending account."},"destinationTag":{"$ref":"tag","description":"(Optional) Arbitrary destination tag that identifies a hosted recipient or other information for the recipient of the deleted account\'s leftover XRP."},"destinationXAddress":{"$ref":"address","description":"X-address of an account to receive any leftover XRP after deleting the sending account. Must be a funded account in the ledger, and must not be the sending account."},"memos":{"$ref":"memos"}},"anyOf":[{"required":["destination"]},{"required":["destinationXAddress"]}],"additionalProperties":false}',
      );
    },
    10251: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"sign","type":"object","properties":{"signedTransaction":{"type":"string","pattern":"^[A-F0-9]+$","description":"The signed transaction represented as an uppercase hexadecimal string."},"id":{"$ref":"transactionHash","description":"The [Transaction ID](#transaction-id) of the signed transaction."}},"required":["signedTransaction","id"],"additionalProperties":false}',
      );
    },
    10252: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"submit","type":"object","properties":{"resultCode":{"type":"string","description":"Deprecated: Use `engine_result` instead."},"resultMessage":{"type":"string","description":"Deprecated: Use `engine_result_message` instead."},"engine_result":{"type":"string","description":"Code indicating the preliminary result of the transaction, for example `tesSUCCESS`. [List of transaction responses](https://xrpl.org/transaction-results.html)"},"engine_result_code":{"type":"integer","description":"Numeric code indicating the preliminary result of the transaction, directly correlated to `engine_result`"},"engine_result_message":{"type":"string","description":"Human-readable explanation of the transaction\'s preliminary result."},"tx_blob":{"type":"string","description":"The complete transaction in hex string format."},"tx_json":{"$ref":"tx-json","description":"The complete transaction in JSON format."}},"required":["resultCode","resultMessage","engine_result","engine_result_code","engine_result_message","tx_blob","tx_json"],"additionalProperties":false}',
      );
    },
    10253: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getAccountInfo","type":"object","properties":{"sequence":{"$ref":"sequence","description":"The next (smallest unused) sequence number for this account."},"xrpBalance":{"$ref":"value","description":"The XRP balance owned by the account."},"ownerCount":{"type":"integer","minimum":0,"description":"Number of other ledger entries (specifically, trust lines and offers) attributed to this account. This is used to calculate the total reserve required to use the account."},"previousInitiatedTransactionID":{"$ref":"hash256","description":"Hash value representing the most recent transaction that was initiated by this account."},"previousAffectingTransactionID":{"$ref":"hash256","description":"Hash value representing the most recent transaction that affected this account node directly. **Note:** This does not include changes to the account’s trust lines and offers."},"previousAffectingTransactionLedgerVersion":{"$ref":"ledgerVersion","description":"The ledger version that the transaction identified by the `previousAffectingTransactionID` was validated in."}},"required":["sequence","xrpBalance","ownerCount","previousAffectingTransactionID","previousAffectingTransactionLedgerVersion"],"additionalProperties":false}',
      );
    },
    10254: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"AccountObjectsResponse","description":"Response format for account_objects","type":"object","properties":{"account":{"$ref":"address","description":"Unique address of the account this request corresponds to."},"account_objects":{"type":"array","items":{"type":"object"},"description":"Array of objects owned by this account. Each object is in its raw ledger format."},"ledger_hash":{"type":"string","description":"(May be omitted) The identifying hash of the ledger that was used to generate this response."},"ledger_index":{"$ref":"ledgerVersion","description":"(May be omitted) The sequence number of the ledger that was used to generate this response."},"ledger_current_index":{"$ref":"ledgerVersion","description":"(May be omitted) The sequence number of the ledger that was used to generate this response."},"limit":{"type":"integer","description":"(May be omitted) The limit that was used in this request, if any."},"validated":{"type":"boolean","description":"If included and set to true, the information in this request comes from a validated ledger version. Otherwise, the information is subject to change."}},"required":["account","account_objects"],"additionalProperties":false}',
      );
    },
    10255: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalances","type":"array","items":{"$ref":"balance"}}',
      );
    },
    10256: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalanceSheet","description":"getBalanceSheet response","type":"object","properties":{"balances":{"type":"array","items":{"$ref":"amount"},"description":"Amounts issued to the \\"hotwallet\\" accounts from the request. The keys are the accounts\' addresses, and the values are arrays of currency amounts they hold. The issuer (omitted from the currency amounts) is the account from the request."},"assets":{"type":"array","items":{"$ref":"amount"},"description":"Total amounts held that are issued by others. For the recommended gateway configuration, there should be none."},"obligations":{"type":"array","items":{"type":"object","required":["currency","value"],"additionalProperties":false,"properties":{"currency":{"$ref":"currency"},"value":{"$ref":"value"}},"description":"An amount that is owed."},"description":"Total amounts issued to accounts that are not hot wallets, as a map of currencies to the total value issued."}},"additionalProperties":false}',
      );
    },
    10257: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getLedger","type":"object","properties":{"stateHash":{"$ref":"hash256","description":"Hash of all state information in this ledger."},"closeTime":{"type":"string","format":"date-time","description":"The approximate time when this ledger was closed. This number is rounded based on the `closeTimeResolution`. If it would have been rounded to the same time as a previous ledger, the close time is recorded as 1 second later instead."},"closeTimeResolution":{"type":"integer","minimum":1,"description":"A number of seconds, indicating how much the `closeTime` could be rounded. Ledger close times are approximate so that small differences in servers clocks don\'t hinder consensus."},"closeFlags":{"type":"integer","minimum":0,"description":"A bit-map of flags relating to the closing of this ledger. Currently, the ledger has only one flag defined for `closeFlags`: **sLCF_NoConsensusTime** (value 1). If this flag is enabled, it means that validators disagreed on the correct close time for the ledger, but built otherwise the same ledger, so they declared consensus while \\"agreeing to disagree\\" on the close time. In this case, the consensus ledger contains a `closeTime` value that is 1 second after that of the previous ledger. (In this case, there is no official close time, but the actual real-world close time is probably 3-6 seconds later than the specified `closeTime`.)"},"ledgerHash":{"$ref":"hash256","description":"Unique identifying hash of the entire ledger."},"ledgerVersion":{"$ref":"ledgerVersion","description":"The ledger version of this ledger."},"parentLedgerHash":{"$ref":"hash256","description":"Unique identifying hash of the ledger that came immediately before this one."},"parentCloseTime":{"type":"string","format":"date-time","description":"The previous ledger\'s recorded close time."},"totalDrops":{"$ref":"value","description":"Total number of drops (1/1,000,000th of an XRP) in the network, as a quoted integer. (This decreases as transaction fees cause XRP to be destroyed.)"},"transactionHash":{"$ref":"hash256","description":"Hash of the transaction information included in this ledger."},"transactions":{"description":"Array of all transactions that were validated in this ledger. Transactions are represented in the same format as the return value of [getTransaction](#gettransaction).","type":"array","items":{"$ref":"getTransaction","description":"A transaction in the same format as the return value of [getTransaction](#gettransaction)."}},"transactionHashes":{"description":"An array of hashes of all transactions that were validated in this ledger.","type":"array","items":{"$ref":"transactionHash"}},"rawState":{"type":"string","description":"A JSON string containing all state data for this ledger in rippled JSON format."},"stateHashes":{"description":"An array of hashes of all state data in this ledger.","type":"array","items":{"$ref":"hash256"}}},"required":["stateHash","closeTime","closeTimeResolution","closeFlags","ledgerHash","ledgerVersion","parentLedgerHash","parentCloseTime","totalDrops","transactionHash"],"additionalProperties":false}',
      );
    },
    10258: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrderbook","type":"object","properties":{"bids":{"$ref":"orderbookOrders","description":"The buy orders in the order book."},"asks":{"$ref":"orderbookOrders","description":"The sell orders in the order book."}},"required":["bids","asks"],"additionalProperties":false}',
      );
    },
    10259: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrders","type":"array","items":{"type":"object","properties":{"specification":{"$ref":"order","description":"An order specification that would create an order equivalent to the current state of this order."},"properties":{"description":"Properties of the order not in the specification.","type":"object","properties":{"maker":{"$ref":"address","description":"The address of the account that submitted the order."},"sequence":{"$ref":"sequence","description":"The account sequence number of the transaction that created this order."},"makerExchangeRate":{"$ref":"value","description":"The exchange rate from the point of view of the account that submitted the order (also known as \\"quality\\")."}},"required":["maker","sequence","makerExchangeRate"],"addtionalProperties":false}},"required":["specification","properties"],"additionalProperties":false}}',
      );
    },
    10260: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderChange","type":"object","description":"A change to an order.","properties":{"direction":{"type":"string","enum":["buy","sell"],"description":"Equal to \\"buy\\" for buy orders and \\"sell\\" for sell orders."},"quantity":{"$ref":"amount","description":"The amount to be bought or sold by the maker."},"totalPrice":{"$ref":"amount","description":"The total amount to be paid or received by the taker."},"makerExchangeRate":{"$ref":"value","description":"The exchange rate between the `quantity` currency and the `totalPrice` currency from the point of view of the maker."},"sequence":{"$ref":"sequence","description":"The order sequence number, used to identify the order for cancellation"},"status":{"enum":["created","filled","partially-filled","cancelled"],"description":"The status of the order. One of \\"created\\", \\"filled\\", \\"partially-filled\\", \\"cancelled\\"."},"expirationTime":{"type":"string","format":"date-time","description":"The time after which the order expires, if any."}},"required":["direction","quantity","totalPrice","sequence","status"],"additionalProperties":false}',
      );
    },
    10261: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPaymentChannel","type":"object","properties":{"account":{"$ref":"address","description":"Address that created the payment channel."},"destination":{"$ref":"address","description":"Address to receive XRP claims against this channel."},"amount":{"$ref":"value","description":"The total amount of XRP funded in this channel."},"balance":{"$ref":"value","description":"The total amount of XRP delivered by this channel."},"settleDelay":{"type":"number","description":"Amount of seconds the source address must wait before closing the channel if it has unclaimed XRP."},"expiration":{"type":"string","format":"date-time","description":"Time when this channel expires."},"publicKey":{"$ref":"publicKey","description":"Public key of the key pair the source uses to sign claims against this channel."},"cancelAfter":{"type":"string","format":"date-time","description":"Time when this channel expires as specified at creation."},"sourceTag":{"$ref":"tag","description":"Source tag."},"destinationTag":{"$ref":"tag","description":"Destination tag."},"previousAffectingTransactionID":{"$ref":"hash256","description":"Hash value representing the most recent transaction that affected this payment channel."},"previousAffectingTransactionLedgerVersion":{"$ref":"ledgerVersion","description":"The ledger version that the transaction identified by the `previousAffectingTransactionID` was validated in."}},"required":["account","destination","amount","balance","settleDelay","previousAffectingTransactionID","previousAffectingTransactionLedgerVersion"],"additionalProperties":false}',
      );
    },
    10262: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepare","description":"Result of prepare function","type":"object","properties":{"txJSON":{"type":"string","description":"The prepared transaction in rippled JSON format."},"instructions":{"description":"The instructions for how to execute the transaction after adding automatic defaults.","type":"object","properties":{"fee":{"$ref":"value","description":"The fee to pay for the transaction. See [Transaction Fees](#transaction-fees) for more information. For multi-signed transactions, this fee is multiplied by (N+1), where N is the number of signatures you plan to provide."},"sequence":{"$ref":"sequence","description":"The initiating account\'s sequence number for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set."},"ticketSequence":{"$ref":"ticket-sequence","description":"The initiating account\'s ticket sequence number for this transaction. `sequence` and `ticketSequence` are mutually exclusive, only one of them can be set."},"maxLedgerVersion":{"oneOf":[{"$ref":"ledgerVersion"},{"type":"null"}],"description":"The highest ledger version that the transaction can be included in. Set to `null` if there is no maximum. If not null, this must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'."}},"additionalProperties":false,"required":["fee","maxLedgerVersion"],"anyOf":[{"required":["sequence"]},{"required":["ticketSequence"]}]}},"additionalProperties":false,"required":["txJSON","instructions"]}',
      );
    },
    10263: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"ledgerEvent","description":"A ledger event message","type":"object","properties":{"baseFeeXRP":{"$ref":"value","description":"Base fee, in XRP."},"ledgerHash":{"$ref":"hash256","description":"Unique hash of the ledger that was closed, as hex."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Ledger version of the ledger that closed."},"ledgerTimestamp":{"type":"string","format":"date-time","description":"The time at which this ledger closed."},"reserveBaseXRP":{"$ref":"value","description":"The minimum reserve, in XRP, that is required for an account."},"reserveIncrementXRP":{"$ref":"value","description":"The increase in account reserve that is added for each item the account owns, such as offers or trust lines."},"transactionCount":{"type":"integer","minimum":0,"description":"Number of new transactions included in this ledger."},"validatedLedgerVersions":{"type":"string","description":"Range of ledgers that the server has available. This may be discontiguous."}},"addtionalProperties":false,"required":["baseFeeXRP","ledgerHash","ledgerTimestamp","reserveBaseXRP","reserveIncrementXRP","transactionCount","ledgerVersion","validatedLedgerVersions"]}',
      );
    },
    10264: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPaths","type":"array","items":{"type":"object","properties":{"source":{"$ref":"sourceAdjustment","description":"Properties of the source of the payment."},"destination":{"$ref":"destinationAdjustment","description":"Properties of the destination of the payment."},"paths":{"type":"string","description":"The paths of trustlines and orders to use in executing the payment."}},"required":["source","destination","paths"],"additionalProperties":false}}',
      );
    },
    10265: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getServerInfo","type":"object","properties":{"buildVersion":{"type":"string","description":"The version number of the running rippled version."},"completeLedgers":{"type":"string","pattern":"[0-9,-]+","description":"Range expression indicating the sequence numbers of the ledger versions the local rippled has in its database. It is possible to be a disjoint sequence, e.g. “2500-5000,32570-7695432”."},"hostID":{"type":"string","description":"On an admin request, returns the hostname of the server running the rippled instance; otherwise, returns a unique four letter word."},"ioLatencyMs":{"type":"number","description":"Amount of time spent waiting for I/O operations, in milliseconds. If this number is not very, very low, then the rippled server is probably having serious load issues."},"load":{"type":"object","description":"*(Admin only)* Detailed information about the current load state of the server.","properties":{"jobTypes":{"type":"array","description":"*(Admin only)* Information about the rate of different types of jobs the server is doing and how much time it spends on each.","items":{"type":"object"}},"threads":{"type":"number","description":"*(Admin only)* The number of threads in the server’s main job pool, performing various operations."}},"required":["jobTypes","threads"]},"lastClose":{"type":"object","description":"Information about the last time the server closed a ledger.","properties":{"convergeTimeS":{"type":"number","description":"The time it took to reach a consensus for the last ledger closing, in seconds."},"proposers":{"type":"integer","minimum":0,"description":"Number of trusted validators participating in the ledger closing."}},"required":["convergeTimeS","proposers"]},"loadFactor":{"type":"number","description":"The load factor the server is currently enforcing, as a multiplier on the base transaction fee. The load factor is determined by the highest of the individual server’s load factor, cluster’s load factor, and the overall network’s load factor."},"peers":{"type":"integer","minimum":0,"description":"How many other rippled servers the node is currently connected to."},"pubkeyNode":{"type":"string","description":"Public key used to verify this node for internal communications; this key is automatically generated by the server the first time it starts up."},"pubkeyValidator":{"type":"string","description":"*(Admin only)* Public key used by this node to sign ledger validations."},"serverState":{"type":"string","description":"A string indicating to what extent the server is participating in the network. See [Possible Server States](https://xrpl.org/rippled-server-states.html) for more details.","enum":["disconnected","connected","syncing","tracking","full","validating","proposing"]},"validatedLedger":{"type":"object","description":"Information about the fully-validated ledger with the highest sequence number (the most recent).","properties":{"age":{"type":"integer","minimum":0,"description":"The time since the ledger was closed, in seconds."},"baseFeeXRP":{"$ref":"value","description":"Base fee, in XRP. This may be represented in scientific notation such as 1e-05 for 0.00005."},"hash":{"$ref":"hash256","description":"Unique hash for the ledger, as an uppercase hexadecimal string."},"reserveBaseXRP":{"$ref":"value","description":"Minimum amount of XRP necessary for every account to keep in reserve."},"reserveIncrementXRP":{"$ref":"value","description":"Amount of XRP added to the account reserve for each object an account owns in the ledger."},"ledgerVersion":{"type":"integer","minimum":0,"description":"Identifying ledger index of this ledger version."}},"additionalProperties":false,"required":["age","baseFeeXRP","hash","reserveBaseXRP","reserveIncrementXRP","ledgerVersion"]},"validationQuorum":{"type":"number","description":"Minimum number of trusted validations required to validate a ledger version. Some circumstances may cause the server to require more validations."}},"required":["buildVersion","completeLedgers","hostID","ioLatencyMs","lastClose","loadFactor","peers","pubkeyNode","serverState","validatedLedger","validationQuorum"],"additionalProperties":false}',
      );
    },
    10266: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getSettings","$ref":"settingsPlusMemos","not":{"required":["memos"]}}',
      );
    },
    10267: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"orderbookOrders","type":"array","items":{"description":"An order in the order book.","type":"object","properties":{"specification":{"$ref":"order","description":"An order specification that would create an order equivalent to the current state of this order."},"properties":{"description":"Properties of the order not in the specification.","type":"object","properties":{"maker":{"$ref":"address","description":"The address of the account that submitted the order."},"sequence":{"$ref":"sequence","description":"The account sequence number of the transaction that created this order."},"makerExchangeRate":{"$ref":"value","description":"The exchange rate from the point of view of the account that submitted the order (also known as \\"quality\\")."}},"required":["maker","sequence","makerExchangeRate"],"addtionalProperties":false},"state":{"description":"The state of the order.","type":"object","properties":{"fundedAmount":{"$ref":"amount","description":"How much of the amount the maker would have to pay that the maker currently holds."},"priceOfFundedAmount":{"$ref":"amount","description":"How much the `fundedAmount` would convert to through the exchange rate of this order."}},"required":["fundedAmount","priceOfFundedAmount"],"additionalProperties":false},"data":{"description":"The raw order data. This may include `owner_funds`, `Flags`, and other fields.","type":"object","additionalProperties":true}},"required":["specification","properties","data"],"additionalProperties":false}}',
      );
    },
    10268: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"outcome","type":"object","description":"The outcome of the transaction (what effects it had).","properties":{"result":{"type":"string","description":"Result code returned by rippled. See [Transaction Results](https://xrpl.org/transaction-results.html) for a complete list."},"timestamp":{"type":"string","format":"date-time","description":"The timestamp when the transaction was validated. (May be missing when requesting transactions in binary mode.)"},"fee":{"$ref":"value","description":"The XRP fee that was charged for the transaction."},"deliveredAmount":{"$ref":"amount","description":"For payment transactions, it is impossible to reliably compute the actual delivered amount from the balanceChanges due to fixed precision. If the payment is not a partial payment and the transaction succeeded, the deliveredAmount should always be considered to be the amount specified in the transaction."},"balanceChanges":{"type":"object","additionalProperties":{"type":"array","description":"Key is the XRP Ledger address; value is an array of signed amounts representing changes of balances for that address.","items":{"$ref":"balance"}}},"orderbookChanges":{"type":"object","additionalProperties":{"type":"array","description":"Key is the maker\'s XRP Ledger address; value is an array of changes","items":{"$ref":"orderChange"}}},"channelChanges":{"type":"object","description":"Properties reflecting the details of the payment channel."},"ledgerVersion":{"$ref":"ledgerVersion","description":"The ledger version that the transaction was validated in."},"indexInLedger":{"type":"integer","minimum":0,"description":"The ordering index of the transaction in the ledger."}},"required":["result","fee","balanceChanges","orderbookChanges","ledgerVersion","indexInLedger"],"additionalProperties":false}',
      );
    },
    10269: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransaction","description":"getTransaction response","link":"gettransaction","properties":{"type":{"$ref":"transactionType"},"specification":{"description":"A specification that would produce the same outcome as this transaction. *Exception:* For payment transactions, this omits the `destination.amount` field, to prevent misunderstanding. The structure of the specification depends on the value of the `type` field (see [Transaction Types](#transaction-types) for details). *Note:* This is **not** necessarily the same as the original specification."},"outcome":{"$ref":"outcome","description":"The outcome of the transaction (what effects it had)."},"id":{"$ref":"transactionHash","description":"A hash of the transaction that can be used to identify it."},"address":{"$ref":"address","description":"The address of the account that initiated the transaction."},"sequence":{"$ref":"sequence","description":"The account sequence number of the transaction for the account that initiated it."},"rawTransaction":{"description":"The raw transaction data as a JSON string. For advanced users only; exercise caution when interpreting this data.","type":"string"}},"required":["id","address","sequence","type","specification","outcome"],"additionalProperties":false,"oneOf":[{"properties":{"type":{"enum":["payment"]},"specification":{"$ref":"getPayment"}}},{"properties":{"type":{"enum":["order"]},"specification":{"$ref":"order"}}},{"properties":{"type":{"enum":["orderCancellation"]},"specification":{"$ref":"orderCancellation"}}},{"properties":{"type":{"enum":["trustline"]},"specification":{"$ref":"trustline"}}},{"properties":{"type":{"enum":["settings"]},"specification":{"$ref":"getSettings"}}},{"properties":{"type":{"enum":["checkCreate"]},"specification":{"$ref":"checkCreate"}}},{"properties":{"type":{"enum":["checkCancel"]},"specification":{"$ref":"checkCancel"}}},{"properties":{"type":{"enum":["checkCash"]},"specification":{"$ref":"checkCash"}}},{"properties":{"type":{"enum":["escrowCreation"]},"specification":{"$ref":"escrowCreation"}}},{"properties":{"type":{"enum":["escrowCancellation"]},"specification":{"$ref":"escrowCancellation"}}},{"properties":{"type":{"enum":["escrowExecution"]},"specification":{"$ref":"escrowExecution"}}},{"properties":{"type":{"enum":["paymentChannelCreate"]},"specification":{"$ref":"paymentChannelCreate"}}},{"properties":{"type":{"enum":["paymentChannelFund"]},"specification":{"$ref":"paymentChannelFund"}}},{"properties":{"type":{"enum":["paymentChannelClaim"]},"specification":{"$ref":"paymentChannelClaim"}}},{"properties":{"type":{"enum":["depositPreauth"]},"specification":{"$ref":"depositPreauth"}}},{"properties":{"type":{"enum":["accountDelete"]},"specification":{"$ref":"accountDelete"}}}]}',
      );
    },
    10270: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransactions","type":"array","items":{"$ref":"getTransaction"}}',
      );
    },
    10271: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTrustlines","type":"array","items":{"properties":{"specification":{"$ref":"trustline","description":"A trust line specification that would produce this trust line in its current state."},"counterparty":{"properties":{"limit":{"$ref":"value","description":"The maximum amount that the counterparty can be owed through the trust line."},"ripplingDisabled":{"type":"boolean","description":"If true, payments cannot ripple through this trustline."},"frozen":{"type":"boolean","description":"If true, the trust line is frozen, which means that funds can only be sent directly to the counterparty."},"authorized":{"type":"boolean","description":"If true, the counterparty authorizes this party to hold issuances from the counterparty."}},"description":"Properties of the trustline from the perspective of the counterparty.","required":["limit"],"additionalProperties":false},"state":{"properties":{"balance":{"$ref":"signedValue","description":"The balance on the trust line, representing which party owes the other and by how much."}},"description":"Non-settings details of the trust line\'s state.","required":["balance"],"additionalProperties":false}},"required":["specification","counterparty","state"],"additionalProperties":false}}',
      );
    },
    10272: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"signPaymentChannelClaim","type":"string","$ref":"signature","additionalProperties":false}',
      );
    },
    10273: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"verifyPaymentChannelClaim","type":"boolean","additionalProperties":false}',
      );
    },
    10274: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalancesParameters","description":"Parameters for getBalances","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get balances for."},"options":{"description":"Options to filter and determine which balances to return.","properties":{"counterparty":{"$ref":"address","description":"Only return balances with this counterparty."},"currency":{"$ref":"currency","description":"Only return balances for this currency."},"limit":{"type":"integer","minimum":1,"description":"Return at most this many balances."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return balances as they were in this historical ledger version."}},"additionalProperties":false}},"additionalProperties":false,"required":["address"]}',
      );
    },
    10275: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getBalanceSheetParameters","description":"Parameters for getBalanceSheet","type":"object","properties":{"address":{"$ref":"address","description":"The XRP Ledger address of the account to get the balance sheet of."},"options":{"properties":{"excludeAddresses":{"type":"array","items":{"$ref":"address"},"uniqueItems":true,"description":"Addresses to exclude from the balance totals."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Get the balance sheet as of this historical ledger version."}},"description":"Options to determine how the balances are calculated.","additionalProperties":false}},"additionalProperties":false,"required":["address"]}',
      );
    },
    10276: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getLedgerParameters","description":"Parameters for getLedger","type":"object","properties":{"options":{"description":"Options affecting what ledger and how much data to return.","properties":{"ledgerHash":{"type":"string","description":"Get ledger data for this historical ledger hash."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Get ledger data for this historical ledger version."},"includeAllData":{"type":"boolean","description":"Include the details of the transactions or state information if `includeTransactions` or `includeState` is set."},"includeTransactions":{"type":"boolean","description":"Return an array of transactions in this ledger. By default, provides the identifying hashes for each transaction. If `includeAllData` is true, include the entire transaction JSON for each transaction instead."},"includeState":{"type":"boolean","description":"Return an array of state data in this ledger. By default, provides the identifying hashes of state data. If `includeAllData` is true, return the state data in JSON form instead. **Admin required:** This is a very large amount of data."}},"additionalProperties":false}},"additionalProperties":false}',
      );
    },
    10277: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrdersParameters","description":"Parameters for getOrders","type":"object","properties":{"address":{"$ref":"address","description":"The XRP Ledger address of the account to get open orders for."},"options":{"description":"Options that determine what orders to return.","properties":{"limit":{"type":"integer","minimum":1,"description":"Return at most this many orders."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return orders as of this historical ledger version."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}',
      );
    },
    10278: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getOrderbookParameters","description":"Parameters for getOrderbook","type":"object","properties":{"address":{"$ref":"address","description":"Address of an account to use as point-of-view. (This affects which unfunded offers are returned.)"},"orderbook":{"$ref":"orderbook","description":"The order book to get."},"options":{"description":"Options to determine what to return.","properties":{"limit":{"type":"integer","minimum":1,"description":"Return at most this many orders from the order book."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return the order book as of this historical ledger version."}},"additionalProperties":false}},"required":["address","orderbook"],"additionalProperties":false}',
      );
    },
    10279: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPathsParameters","type":"object","properties":{"pathfind":{"description":"Specification of a pathfind request.","properties":{"source":{"description":"Properties of the source of funds.","type":"object","properties":{"address":{"$ref":"address","description":"The XRP Ledger address of the planned sender."},"amount":{"$ref":"laxAmount","description":"The amount of funds to send."},"currencies":{"description":"An array of currencies (with optional counterparty) that may be used in the payment paths.","type":"array","items":{"description":"A currency with optional counterparty.","type":"object","properties":{"currency":{"$ref":"currency"},"counterparty":{"$ref":"address","description":"The counterparty for the currency; if omitted any counterparty may be used."}},"required":["currency"],"additionalProperties":false},"uniqueItems":true}},"not":{"required":["amount","currencies"]},"additionalProperties":false,"required":["address"]},"destination":{"description":"Properties of the destination of funds.","type":"object","properties":{"address":{"$ref":"address","description":"An address representing the destination of the transaction."},"amount":{"$ref":"laxLaxAmount","description":"The amount to be received by the receiver (`value` may be ommitted if a source amount is specified)."}},"required":["address","amount"],"additionalProperties":false}},"required":["source","destination"],"additionalProperties":false}},"additionalProperties":false,"required":["pathfind"]}',
      );
    },
    10280: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getPaymentChannelParameters","description":"Parameters for getPaymentChannel","type":"object","properties":{"id":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."}},"additionalProperties":false,"required":["id"]}',
      );
    },
    10281: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"api-options","type":"object","properties":{"trace":{"type":"boolean","description":"If true, log rippled requests and responses to stdout."},"feeCushion":{"type":"number","minimum":1,"description":"Factor to multiply estimated fee by to provide a cushion in case the required fee rises during submission of a transaction. Defaults to `1.2`."},"maxFeeXRP":{"type":"string","description":"Maximum fee to use with transactions, in XRP. Must be a string-encoded number. Defaults to `\'2\'`."},"server":{"type":"string","description":"URI for rippled websocket port to connect to. Must start with `wss://`, `ws://`, `wss+unix://`, or `ws+unix://`.","format":"uri","pattern":"^(wss?|wss?\\\\+unix)://"},"proxy":{"format":"uri","description":"URI for HTTP/HTTPS proxy to use to connect to the rippled server."},"timeout":{"type":"integer","description":"Request timeout in milliseconds before considering a request to have failed. See also: connectionTimeout.","minimum":1},"connectionTimeout":{"type":"integer","description":"Connection timeout, in milliseconds, before considering connect() to have failed.","minimum":1},"proxyAuthorization":{"type":"string","description":"Username and password for HTTP basic authentication to the proxy in the format **username:password**."},"authorization":{"type":"string","description":"Username and password for HTTP basic authentication to the rippled server in the format **username:password**."},"trustedCertificates":{"type":"array","description":"Array of PEM-formatted SSL certificates to trust when connecting to a proxy. This is useful if you want to use a self-signed certificate on the proxy server. Note: Each element must contain a single certificate; concatenated certificates are not valid.","items":{"type":"string","description":"A PEM-formatted SSL certificate to trust when connecting to a proxy."}},"key":{"type":"string","description":"A string containing the private key of the client in PEM format. (Can be an array of keys)."},"passphrase":{"type":"string","description":"The passphrase for the private key of the client."},"certificate":{"type":"string","description":"A string containing the certificate key of the client in PEM format. (Can be an array of certificates)."}},"additionalProperties":false}',
      );
    },
    10282: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getSettingsParameters","description":"Parameters for getSettings","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get the settings of."},"options":{"description":"Options that affect what to return.","properties":{"ledgerVersion":{"$ref":"ledgerVersion","description":"Get the settings as of this historical ledger version."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}',
      );
    },
    10283: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getAccountInfoParameters","description":"Parameters for getAccountInfo","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get the account info of."},"options":{"description":"Options that affect what to return.","properties":{"ledgerVersion":{"$ref":"ledgerVersion","description":"Get the account info as of this historical ledger version."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}',
      );
    },
    10284: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getAccountObjectsOptions","description":"Request options for getAccountObjects","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get the account objects of."},"options":{"description":"Options that affect what to return.","properties":{"type":{"type":"string","enum":["check","escrow","offer","payment_channel","signer_list","state"],"description":"(Optional) Filter results to include only this type of ledger object. The valid types are: `check`, `escrow`, `offer`, `payment_channel`, `signer_list`, and `state` (trust line)."},"ledgerHash":{"type":"string","description":"(Optional) A 20-byte hex string for the ledger version to use."},"ledgerIndex":{"oneOf":[{"$ref":"ledgerVersion"},{"type":"string"}],"description":"(Optional) The sequence number of the ledger to use, or a shortcut string to choose a ledger automatically."},"limit":{"type":"integer","minimum":1,"description":"(Optional) The maximum number of objects to include in the results."}},"additionalProperties":false}},"required":["address"],"additionalProperties":false}',
      );
    },
    10285: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransactionParameters","description":"Parameters for getTransaction","type":"object","properties":{"id":{"$ref":"transactionHash"},"options":{"description":"Options to limit the ledger versions to search or include raw transaction data.","properties":{"minLedgerVersion":{"$ref":"ledgerVersion","description":"The lowest ledger version to search. This must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'."},"maxLedgerVersion":{"$ref":"ledgerVersion","description":"The highest ledger version to search. This must be an integer greater than 0, or one of the following strings: \'validated\', \'closed\', \'current\'."},"includeRawTransaction":{"description":"Include raw transaction data. For advanced users; exercise caution when interpreting this data."}},"additionalProperties":false}},"additionalProperties":false,"required":["id"]}',
      );
    },
    10286: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTransactionsParameters","description":"Parameters for getTransactions","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get transactions for."},"options":{"description":"Options to filter the resulting transactions.","properties":{"start":{"$ref":"hash256","description":"If specified, start the results from this transaction. You cannot use `start` with `minLedgerVersion` or `maxLedgerVersion`. When `start` is specified, these ledger versions are determined internally."},"limit":{"type":"integer","minimum":1,"description":"If specified, return at most this many transactions."},"minLedgerVersion":{"$ref":"ledgerVersion","description":"Return only transactions in this ledger version or higher."},"maxLedgerVersion":{"$ref":"ledgerVersion","description":"Return only transactions in this ledger version or lower."},"earliestFirst":{"type":"boolean","description":"If true, sort transactions so that the earliest ones come first. By default, the newest transactions come first."},"excludeFailures":{"type":"boolean","description":"If true, the result omits transactions that did not succeed."},"initiated":{"type":"boolean","description":"If true, return only transactions initiated by the account specified by `address`. If false, return only transactions not initiated by the account specified by `address`."},"counterparty":{"$ref":"address","description":"If provided, only return transactions with this account as a counterparty to the transaction."},"types":{"type":"array","items":{"$ref":"transactionType"},"description":"Only return transactions of the specified [Transaction Types](#transaction-types)."},"includeRawTransactions":{"description":"Include raw transaction data. For advanced users; exercise caution when interpreting this data. "},"binary":{"type":"boolean","description":"If true, return transactions in binary format rather than JSON."}},"additionalProperties":false,"not":{"anyOf":[{"required":["start","minLedgerVersion"]},{"required":["start","maxLedgerVersion"]}]}}},"additionalProperties":false,"required":["address"]}',
      );
    },
    10287: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"getTrustlinesParameters","description":"Parameters for getTrustlines","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account to get trustlines for."},"options":{"description":"Options to filter and determine which trustlines to return.","properties":{"counterparty":{"$ref":"address","description":"Only return trustlines with this counterparty."},"currency":{"$ref":"currency","description":"Only return trustlines for this currency."},"limit":{"type":"integer","minimum":1,"description":"Return at most this many trustlines."},"ledgerVersion":{"$ref":"ledgerVersion","description":"Return trustlines as they were in this historical ledger version."}},"additionalProperties":false}},"additionalProperties":false,"required":["address"]}',
      );
    },
    10288: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"payment":{"$ref":"payment","description":"The specification of the payment to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","payment"]}',
      );
    },
    10289: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareOrderParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"order":{"$ref":"order","description":"The specification of the order to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","order"]}',
      );
    },
    10290: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareTrustlineParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"trustline":{"$ref":"trustline","description":"The specification of the trustline to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","trustline"]}',
      );
    },
    10291: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareOrderCancellationParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"orderCancellation":{"$ref":"orderCancellation","description":"The specification of the order cancellation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","orderCancellation"]}',
      );
    },
    10292: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareSettingsParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"settings":{"$ref":"settings","description":"The specification of the settings to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","settings"]}',
      );
    },
    10293: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareEscrowCreationParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"escrowCreation":{"$ref":"escrowCreation","description":"The specification of the escrow creation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","escrowCreation"]}',
      );
    },
    10294: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareEscrowCancellationParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"escrowCancellation":{"$ref":"escrowCancellation","description":"The specification of the escrow cancellation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","escrowCancellation"]}',
      );
    },
    10295: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareEscrowExecutionParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"escrowExecution":{"$ref":"escrowExecution","description":"The specification of the escrow execution to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","escrowExecution"]}',
      );
    },
    10296: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentChannelCreateParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"paymentChannelCreate":{"$ref":"paymentChannelCreate","description":"The specification of the payment channel to create."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","paymentChannelCreate"]}',
      );
    },
    10297: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentChannelFundParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"paymentChannelFund":{"$ref":"paymentChannelFund","description":"The channel to fund, and the details of how to fund it."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","paymentChannelFund"]}',
      );
    },
    10298: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"preparePaymentChannelClaimParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"paymentChannelClaim":{"$ref":"paymentChannelClaim","description":"Details of the channel and claim."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","paymentChannelClaim"]}',
      );
    },
    10299: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareCheckCreateParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"checkCreate":{"$ref":"checkCreate","description":"The specification of the Check create creation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","checkCreate"]}',
      );
    },
    10300: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareCheckCashParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"checkCash":{"$ref":"checkCash","description":"The specification of the Check cash to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","checkCash"]}',
      );
    },
    10301: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareCheckCancelParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"checkCancel":{"$ref":"checkCancel","description":"The specification of the Check cancellation to prepare."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","checkCancel"]}',
      );
    },
    10302: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"prepareTicketParameters","type":"object","properties":{"address":{"$ref":"address","description":"The address of the account that is creating the transaction."},"ticketCount":{"type":"number","description":"The number of tickets to be created."},"instructions":{"$ref":"instructions"}},"additionalProperties":false,"required":["address","ticketCount"]}',
      );
    },
    10303: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"computeLedgerHashParameters","type":"object","properties":{"ledger":{"$ref":"getLedger","description":"The ledger header to hash."}},"additionalProperties":false,"required":["ledger"]}',
      );
    },
    10304: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"signParameters","type":"object","properties":{"txJSON":{"type":"string","description":"Transaction represented as a JSON string in rippled format."},"secret":{"type":"string","format":"secret","description":"The secret of the account that is initiating the transaction. (This field cannot be used with keypair)."},"keypair":{"type":"object","properties":{"privateKey":{"type":"privateKey","description":"The uppercase hexadecimal representation of the secp256k1 or Ed25519 private key. Ed25519 keys are prefixed with 0xED. You can read about how keys are derived [here](https://xrpl.org/cryptographic-keys.html)."},"publicKey":{"type":"publicKey","description":"The uppercase hexadecimal representation of the secp256k1 or Ed25519 public key. Ed25519 keys are prefixed with 0xED. You can read about how keys are derived [here](https://xrpl.org/cryptographic-keys.html)."}},"description":"The private and public key of the account that is initiating the transaction. (This field cannot be used with secret).","required":["privateKey","publicKey"],"additionalProperties":false},"options":{"type":"object","description":"Options that control the type of signature to create.","properties":{"signAs":{"$ref":"address","description":"The account that the signature should count for in multisigning."}},"additionalProperties":false}},"additionalProperties":false,"required":["txJSON"],"oneOf":[{"required":["secret"],"not":{"required":["keypair"]}},{"required":["keypair"],"not":{"required":["secret"]}}]}',
      );
    },
    10305: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"submitParameters","type":"object","properties":{"signedTransaction":{"$ref":"blob","description":"A signed transaction as returned by [sign](#sign)."},"failHard":{"type":"boolean","description":"If `true`, and the transaction fails locally, do not retry or relay the transaction to other servers. Defaults to `false`."}},"additionalProperties":false,"required":["signedTransaction"]}',
      );
    },
    10306: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"generateAddressParameters","type":"object","properties":{"options":{"type":"object","description":"Options to control how the address and secret are generated.","properties":{"entropy":{"type":"array","items":{"type":"integer","minimum":0,"maximum":255},"description":"The entropy to use to generate the seed. Must be an array of length 16 with values from 0-255 (16 bytes of entropy)"},"algorithm":{"type":"string","enum":["ecdsa-secp256k1","ed25519"],"description":"The digital signature algorithm to generate an address for. Can be `ecdsa-secp256k1` (default) or `ed25519`."},"test":{"type":"boolean","description":"Specifies whether the address is intended for use on a test network such as Testnet or Devnet. If `true`, the address should only be used for testing, and starts with `T`. If `false`, the address should only be used on Mainnet, and starts with `X`."},"includeClassicAddress":{"type":"boolean","description":"If `true`, also return the classic address."}},"additionalProperties":false}},"additionalProperties":false}',
      );
    },
    10307: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"signPaymentChannelClaimParameters","type":"object","properties":{"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"amount":{"$ref":"value","description":"Amount of XRP authorized by the claim."},"privateKey":{"$ref":"publicKey","description":"The private key to sign the payment channel claim."}},"additionalProperties":false,"required":["channel","amount","privateKey"]}',
      );
    },
    10308: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"verifyPaymentChannelClaimParameters","type":"object","properties":{"channel":{"$ref":"hash256","description":"256-bit hexadecimal channel identifier."},"amount":{"$ref":"value","description":"Amount of XRP authorized by the claim."},"signature":{"$ref":"signature","description":"Signature of this claim."},"publicKey":{"$ref":"publicKey","description":"Public key of the channel\'s sender"}},"additionalProperties":false,"required":["channel","amount","signature","publicKey"]}',
      );
    },
    10309: function (e) {
      e.exports = JSON.parse(
        '{"$schema":"http://json-schema.org/draft-04/schema#","title":"combineParameters","type":"object","properties":{"signedTransactions":{"type":"array","description":"An array of signed transactions (from the output of [sign](#sign)) to combine.","items":{"type":"string","pattern":"^[A-F0-9]+$","description":"A single-signed transaction represented as an uppercase hexadecimal string (from the output of [sign](#sign))"},"minLength":1}},"additionalProperties":false,"required":["signedTransactions"]}',
      );
    },
    10310: function (e, t, r) {
      "use strict";
      (function (e) {
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, i) {
                  (void 0 === i && (i = r),
                    Object.defineProperty(e, i, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, i) {
                  (void 0 === i && (i = r), (e[i] = t[r]));
                }),
          n =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e["default"] = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.hasOwnProperty.call(e, r) &&
                    i(t, e, r);
              return (n(t, e), t);
            },
          o =
            (this && this.__awaiter) ||
            function (e, t, r, i) {
              function n(e) {
                return e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    });
              }
              return new (r || (r = Promise))(function (r, s) {
                function o(e) {
                  try {
                    c(i.next(e));
                  } catch (t) {
                    s(t);
                  }
                }
                function a(e) {
                  try {
                    c(i["throw"](e));
                  } catch (t) {
                    s(t);
                  }
                }
                function c(e) {
                  e.done ? r(e.value) : n(e.value).then(o, a);
                }
                c((i = i.apply(e, t || [])).next());
              });
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Connection = void 0));
        const c = s(r(2794)),
          d = r(52),
          h = r(231),
          u = a(r(10311)),
          l = a(r(6628)),
          p = r(3603),
          f = r(10312),
          m = 4e3;
        function g(t, i) {
          const n = {};
          if (null != i.proxy) {
            const e = h.parse(t),
              s = h.parse(i.proxy),
              o = c.omitBy(
                {
                  secureEndpoint: "wss:" === e.protocol,
                  secureProxy: "https:" === s.protocol,
                  auth: i.proxyAuthorization,
                  ca: i.trustedCertificates,
                  key: i.key,
                  passphrase: i.passphrase,
                  cert: i.certificate,
                },
                (e) => null == e,
              ),
              a = Object.assign({}, s, o);
            let u;
            try {
              u = r(10313);
            } catch (d) {
              throw new Error('"proxy" option is not supported in the browser');
            }
            n.agent = new u(a);
          }
          if (null != i.authorization) {
            const t = e.from(i.authorization).toString("base64");
            n.headers = { Authorization: "Basic " + t };
          }
          const s = c.omitBy(
              {
                ca: i.trustedCertificates,
                key: i.key,
                passphrase: i.passphrase,
                cert: i.certificate,
              },
              (e) => null == e,
            ),
            o = Object.assign({}, n, s),
            a = new u.default(t, null, o);
          return (
            "function" === typeof a.setMaxListeners && a.setMaxListeners(1 / 0),
            a
          );
        }
        function y(e, t) {
          return new Promise((r, i) => {
            e.send(t, void 0, (e) => {
              e ? i(new p.DisconnectedError(e.message, e)) : r();
            });
          });
        }
        class LedgerHistory {
          constructor() {
            ((this.feeBase = null),
              (this.feeRef = null),
              (this.latestVersion = null),
              (this.reserveBase = null),
              (this.availableVersions = new l.default()));
          }
          hasVersion(e) {
            return this.availableVersions.containsValue(e);
          }
          hasVersions(e, t) {
            return this.availableVersions.containsRange(e, t);
          }
          update(e) {
            ((this.feeBase = e.fee_base),
              (this.feeRef = e.fee_ref),
              (this.latestVersion = e.ledger_index),
              (this.reserveBase = e.reserve_base),
              e.validated_ledgers
                ? (this.availableVersions.reset(),
                  this.availableVersions.parseAndAddRanges(e.validated_ledgers))
                : this.availableVersions.addValue(this.latestVersion));
          }
        }
        class ConnectionManager {
          constructor() {
            this.promisesAwaitingConnection = [];
          }
          resolveAllAwaiting() {
            (this.promisesAwaitingConnection.map((e) => {
              let { resolve: t } = e;
              return t();
            }),
              (this.promisesAwaitingConnection = []));
          }
          rejectAllAwaiting(e) {
            (this.promisesAwaitingConnection.map((t) => {
              let { reject: r } = t;
              return r(e);
            }),
              (this.promisesAwaitingConnection = []));
          }
          awaitConnection() {
            return new Promise((e, t) => {
              this.promisesAwaitingConnection.push({ resolve: e, reject: t });
            });
          }
        }
        class RequestManager {
          constructor() {
            ((this.nextId = 0), (this.promisesAwaitingResponse = []));
          }
          cancel(e) {
            const { timer: t } = this.promisesAwaitingResponse[e];
            (clearTimeout(t), delete this.promisesAwaitingResponse[e]);
          }
          resolve(e, t) {
            const { timer: r, resolve: i } = this.promisesAwaitingResponse[e];
            (clearTimeout(r), i(t), delete this.promisesAwaitingResponse[e]);
          }
          reject(e, t) {
            const { timer: r, reject: i } = this.promisesAwaitingResponse[e];
            (clearTimeout(r), i(t), delete this.promisesAwaitingResponse[e]);
          }
          rejectAll(e) {
            this.promisesAwaitingResponse.forEach((t, r) => {
              this.reject(r, e);
            });
          }
          createRequest(e, t) {
            const r = this.nextId++,
              i = JSON.stringify(
                Object.assign(Object.assign({}, e), { id: r }),
              ),
              n = setTimeout(() => this.reject(r, new p.TimeoutError()), t);
            n.unref && n.unref();
            const s = new Promise((e, t) => {
              this.promisesAwaitingResponse[r] = {
                resolve: e,
                reject: t,
                timer: n,
              };
            });
            return [r, i, s];
          }
          handleResponse(e) {
            if (!Number.isInteger(e.id) || e.id < 0)
              throw new p.ResponseFormatError(
                "valid id not found in response",
                e,
              );
            if (this.promisesAwaitingResponse[e.id])
              if ("error" !== e.status)
                if ("success" === e.status) this.resolve(e.id, e.result);
                else {
                  const t = new p.ResponseFormatError(
                    "unrecognized status: " + e.status,
                    e,
                  );
                  this.reject(e.id, t);
                }
              else {
                const t = new p.RippledError(e.error_message || e.error, e);
                this.reject(e.id, t);
              }
          }
        }
        class Connection extends d.EventEmitter {
          constructor(e, t) {
            (void 0 === t && (t = {}),
              super(),
              (this._ws = null),
              (this._reconnectTimeoutID = null),
              (this._heartbeatIntervalID = null),
              (this._retryConnectionBackoff = new f.ExponentialBackoff({
                min: 100,
                max: 6e4,
              })),
              (this._trace = () => {}),
              (this._ledger = new LedgerHistory()),
              (this._requestManager = new RequestManager()),
              (this._connectionManager = new ConnectionManager()),
              (this._clearHeartbeatInterval = () => {
                clearInterval(this._heartbeatIntervalID);
              }),
              (this._startHeartbeatInterval = () => {
                (this._clearHeartbeatInterval(),
                  (this._heartbeatIntervalID = setInterval(
                    () => this._heartbeat(),
                    this._config.timeout,
                  )));
              }),
              (this._heartbeat = () =>
                this.request({ command: "ping" }).catch(() =>
                  this.reconnect().catch((e) => {
                    this.emit("error", "reconnect", e.message, e);
                  }),
                )),
              (this._onConnectionFailed = (e) => {
                (this._ws &&
                  (this._ws.removeAllListeners(),
                  this._ws.on("error", () => {}),
                  this._ws.close(),
                  (this._ws = null)),
                  "number" === typeof e
                    ? this._connectionManager.rejectAllAwaiting(
                        new p.NotConnectedError(
                          `Connection failed with code ${e}.`,
                          { code: e },
                        ),
                      )
                    : e && e.message
                      ? this._connectionManager.rejectAllAwaiting(
                          new p.NotConnectedError(e.message, e),
                        )
                      : this._connectionManager.rejectAllAwaiting(
                          new p.NotConnectedError("Connection failed."),
                        ));
              }),
              this.setMaxListeners(1 / 0),
              (this._url = e),
              (this._config = Object.assign(
                { timeout: 2e4, connectionTimeout: 5e3 },
                t,
              )),
              "function" === typeof t.trace
                ? (this._trace = t.trace)
                : !0 === t.trace && (this._trace = console.log));
          }
          _onMessage(e) {
            let t;
            this._trace("receive", e);
            try {
              t = JSON.parse(e);
            } catch (r) {
              return void this.emit("error", "badMessage", r.message, e);
            }
            if (null == t.type && t.error)
              this.emit("error", t.error, t.error_message, t);
            else if (
              (t.type && this.emit(t.type, t),
              "ledgerClosed" === t.type && this._ledger.update(t),
              "response" === t.type)
            )
              try {
                this._requestManager.handleResponse(t);
              } catch (r) {
                this.emit("error", "badMessage", r.message, e);
              }
          }
          get _state() {
            return this._ws ? this._ws.readyState : u.default.CLOSED;
          }
          get _shouldBeConnected() {
            return null !== this._ws;
          }
          _waitForReady() {
            return new Promise((e, t) => {
              this._shouldBeConnected
                ? this._state === u.default.OPEN
                  ? e()
                  : this.once("connected", () => e())
                : t(new p.NotConnectedError());
            });
          }
          _subscribeToLedger() {
            return o(this, void 0, void 0, function* () {
              const e = yield this.request({
                command: "subscribe",
                streams: ["ledger"],
              });
              if (c.isEmpty(e) || !e.ledger_index)
                try {
                  yield this.disconnect();
                } catch (t) {
                } finally {
                  throw new p.RippledNotInitializedError(
                    "Rippled not initialized",
                  );
                }
              this._ledger.update(e);
            });
          }
          isConnected() {
            return this._state === u.default.OPEN;
          }
          connect() {
            if (this.isConnected()) return Promise.resolve();
            if (this._state === u.default.CONNECTING)
              return this._connectionManager.awaitConnection();
            if (!this._url)
              return Promise.reject(
                new p.ConnectionError(
                  "Cannot connect because no server was specified",
                ),
              );
            if (this._ws)
              return Promise.reject(
                new p.RippleError("Websocket connection never cleaned up.", {
                  state: this._state,
                }),
              );
            const e = setTimeout(() => {
              this._onConnectionFailed(
                new p.ConnectionError(
                  `Error: connect() timed out after ${this._config.connectionTimeout} ms. If your internet connection is working, the rippled server may be blocked or inaccessible. You can also try setting the 'connectionTimeout' option in the RippleAPI constructor.`,
                ),
              );
            }, this._config.connectionTimeout);
            return (
              (this._ws = g(this._url, this._config)),
              this._ws.on("error", this._onConnectionFailed),
              this._ws.on("error", () => clearTimeout(e)),
              this._ws.on("close", this._onConnectionFailed),
              this._ws.on("close", () => clearTimeout(e)),
              this._ws.once("open", () =>
                o(this, void 0, void 0, function* () {
                  (this._ws.removeAllListeners(),
                    clearTimeout(e),
                    this._ws.on("message", (e) => this._onMessage(e)),
                    this._ws.on("error", (e) =>
                      this.emit("error", "websocket", e.message, e),
                    ),
                    this._ws.once("close", (e) => {
                      if (
                        (this._clearHeartbeatInterval(),
                        this._requestManager.rejectAll(
                          new p.DisconnectedError("websocket was closed"),
                        ),
                        this._ws.removeAllListeners(),
                        (this._ws = null),
                        this.emit("disconnected", e),
                        e !== m)
                      ) {
                        const e = this._retryConnectionBackoff.duration();
                        (this._trace(
                          "reconnect",
                          `Retrying connection in ${e}ms.`,
                        ),
                          this.emit(
                            "reconnecting",
                            this._retryConnectionBackoff.attempts,
                          ),
                          (this._reconnectTimeoutID = setTimeout(() => {
                            this.reconnect().catch((e) => {
                              this.emit("error", "reconnect", e.message, e);
                            });
                          }, e)));
                      }
                    }));
                  try {
                    (this._retryConnectionBackoff.reset(),
                      yield this._subscribeToLedger(),
                      this._startHeartbeatInterval(),
                      this._connectionManager.resolveAllAwaiting(),
                      this.emit("connected"));
                  } catch (t) {
                    (this._connectionManager.rejectAllAwaiting(t),
                      yield this.disconnect().catch(() => {}));
                  }
                }),
              ),
              this._connectionManager.awaitConnection()
            );
          }
          disconnect() {
            return (
              clearTimeout(this._reconnectTimeoutID),
              (this._reconnectTimeoutID = null),
              this._state !== u.default.CLOSED && this._ws
                ? new Promise((e) => {
                    (this._ws.once("close", (t) => e(t)),
                      this._state !== u.default.CLOSING && this._ws.close(m));
                  })
                : Promise.resolve(void 0)
            );
          }
          reconnect() {
            return o(this, void 0, void 0, function* () {
              (this.emit("reconnect"),
                yield this.disconnect(),
                yield this.connect());
            });
          }
          getFeeBase() {
            return o(this, void 0, void 0, function* () {
              return (yield this._waitForReady(), this._ledger.feeBase);
            });
          }
          getFeeRef() {
            return o(this, void 0, void 0, function* () {
              return (yield this._waitForReady(), this._ledger.feeRef);
            });
          }
          getLedgerVersion() {
            return o(this, void 0, void 0, function* () {
              return (yield this._waitForReady(), this._ledger.latestVersion);
            });
          }
          getReserveBase() {
            return o(this, void 0, void 0, function* () {
              return (yield this._waitForReady(), this._ledger.reserveBase);
            });
          }
          hasLedgerVersions(e, t) {
            return o(this, void 0, void 0, function* () {
              return t
                ? (yield this._waitForReady(), this._ledger.hasVersions(e, t))
                : this.hasLedgerVersion(e);
            });
          }
          hasLedgerVersion(e) {
            return o(this, void 0, void 0, function* () {
              return (yield this._waitForReady(), this._ledger.hasVersion(e));
            });
          }
          request(e, t) {
            return o(this, void 0, void 0, function* () {
              if (!this._shouldBeConnected) throw new p.NotConnectedError();
              const [r, i, n] = this._requestManager.createRequest(
                e,
                t || this._config.timeout,
              );
              return (
                this._trace("send", i),
                y(this._ws, i).catch((e) => {
                  this._requestManager.reject(r, e);
                }),
                n
              );
            });
          }
          getUrl() {
            return this._url;
          }
        }
        t.Connection = Connection;
      }).call(this, r(2).Buffer);
    },
    10311: function (e, t, r) {
      "use strict";
      const i = r(52);
      class WSWrapper extends i.EventEmitter {
        constructor(e, t, r) {
          (super(),
            this.setMaxListeners(1 / 0),
            (this._ws = new WebSocket(e)),
            (this._ws.onclose = () => {
              this.emit("close");
            }),
            (this._ws.onopen = () => {
              this.emit("open");
            }),
            (this._ws.onerror = (e) => {
              this.emit("error", e);
            }),
            (this._ws.onmessage = (e) => {
              this.emit("message", e.data);
            }));
        }
        close() {
          1 === this.readyState && this._ws.close();
        }
        send(e) {
          this._ws.send(e);
        }
        get readyState() {
          return this._ws.readyState;
        }
      }
      ((WSWrapper.CONNECTING = 0),
        (WSWrapper.OPEN = 1),
        (WSWrapper.CLOSING = 2),
        (WSWrapper.CLOSED = 3),
        (e.exports = WSWrapper));
    },
    10312: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ExponentialBackoff = void 0));
      class ExponentialBackoff {
        constructor(e) {
          (void 0 === e && (e = {}),
            (this.factor = 2),
            (this.jitter = 0),
            (this.attempts = 0),
            (this.ms = e.min || 100),
            (this.max = e.max || 1e4));
        }
        duration() {
          var e = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            var t = Math.random(),
              r = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - r : e + r;
          }
          return 0 | Math.min(e, this.max);
        }
        reset() {
          this.attempts = 0;
        }
      }
      t.ExponentialBackoff = ExponentialBackoff;
    },
    10315: function (e, t, r) {
      "use strict";
      ((e.exports.parseBalanceChanges = r(6630).parseBalanceChanges),
        (e.exports.parseFinalBalances = r(6630).parseFinalBalances),
        (e.exports.parseOrderbookChanges = r(10316).parseOrderbookChanges),
        (e.exports.getAffectedAccounts = r(4549).getAffectedAccounts),
        (e.exports.parseChannelChanges = r(10318).parseChannelChanges));
    },
    10316: function (e, t, r) {
      "use strict";
      var i = r(2794),
        n = r(4549),
        s = r(800),
        o = s.clone({ DECIMAL_PLACES: 40 }),
        a = r(10317),
        c = 131072;
      function d(e) {
        return i.omitBy(e, i.isUndefined);
      }
      function h(e) {
        var t = e.taker_gets,
          r = e.taker_pays,
          i = e.sell ? "sell" : "buy",
          n = "buy" === i ? r : t,
          s = "buy" === i ? t : r;
        return d({
          direction: i,
          quantity: n,
          totalPrice: s,
          sequence: e.sequence,
          status: e.status,
          makerExchangeRate: e.quality,
          expirationTime: e.expiration,
        });
      }
      function u(e) {
        return 1e3 * (e + 946684800);
      }
      function l(e) {
        var t = e.finalFields.Expiration || e.newFields.Expiration;
        if (void 0 !== t) return new Date(u(t)).toISOString();
      }
      function p(e) {
        var t = e.finalFields.TakerGets || e.newFields.TakerGets,
          r = e.finalFields.TakerPays || e.newFields.TakerPays,
          i = t.currency || "XRP",
          n = r.currency || "XRP",
          s = e.finalFields.BookDirectory || e.newFields.BookDirectory,
          o = s.substring(s.length - 16);
        return a(o, i, n);
      }
      function f(e) {
        return "CreatedNode" === e.diffType
          ? "created"
          : "ModifiedNode" === e.diffType
            ? "partially-filled"
            : "DeletedNode" === e.diffType
              ? e.previousFields.hasOwnProperty("TakerPays")
                ? "filled"
                : "cancelled"
              : void 0;
      }
      function m(e, t) {
        if (t) {
          var r = new o(e.value),
            i = new o(t.value);
          return r.minus(i).abs().toString();
        }
        return "0";
      }
      function g(e, t) {
        var r = f(e);
        if ("cancelled" === r) return n.parseCurrencyAmount(e.finalFields[t]);
        if ("created" === r) return n.parseCurrencyAmount(e.newFields[t]);
        var s = n.parseCurrencyAmount(e.finalFields[t]),
          o = n.parseCurrencyAmount(e.previousFields[t]),
          a = m(s, o);
        return i.assign({}, s, { value: a });
      }
      function y(e) {
        var t = h({
          taker_pays: g(e, "TakerPays"),
          taker_gets: g(e, "TakerGets"),
          sell: 0 !== (e.finalFields.Flags & c),
          sequence: e.finalFields.Sequence || e.newFields.Sequence,
          status: f(e),
          quality: p(e),
          expiration: l(e),
        });
        return (
          Object.defineProperty(t, "account", {
            value: e.finalFields.Account || e.newFields.Account,
          }),
          t
        );
      }
      function v(e) {
        return i.groupBy(e, function (e) {
          return e.account;
        });
      }
      t.parseOrderbookChanges = function (e) {
        var t = n.normalizeNodes(e),
          r = i.map(
            i.filter(t, function (e) {
              return "Offer" === e.entryType;
            }),
            y,
          );
        return v(r);
      };
    },
    10317: function (e, t, r) {
      "use strict";
      var i = r(229),
        n = r(800);
      function s(e, t, r) {
        var i = "XRP" === r ? -6 : 0,
          s = "XRP" === t ? -6 : 0,
          o = i - s;
        return 0 === o ? new n(e).toString() : new n(e).shiftedBy(o).toString();
      }
      function o(e, t, r) {
        i(16 === e.length);
        var o = new n(e.substring(2), 16),
          a = parseInt(e.substring(0, 2), 16) - 100,
          c = o.toString() + "e" + a.toString();
        return s(c, t, r);
      }
      e.exports = o;
    },
    10318: function (e, t, r) {
      "use strict";
      const i = r(4549).normalizeNodes,
        n = r(800);
      function s(e) {
        return "CreatedNode" === e.diffType
          ? "created"
          : "ModifiedNode" === e.diffType
            ? "modified"
            : "DeletedNode" === e.diffType
              ? "deleted"
              : void 0;
      }
      function o(e) {
        const t = "CreatedNode" === e.diffType ? e.newFields : e.finalFields,
          r = e.previousFields || {},
          i = {
            status: s(e),
            channelId: e.ledgerIndex,
            source: t.Account,
            destination: t.Destination,
            channelAmountDrops: new n(t.Amount || 0).toString(10),
            channelBalanceDrops: new n(t.Balance || 0).toString(10),
          };
        return (
          r.Amount &&
            (i.channelAmountChangeDrops = new n(t.Amount)
              .minus(new n(r.Amount || 0))
              .toString(10)),
          r.Balance &&
            (i.channelBalanceChangeDrops = new n(t.Balance)
              .minus(new n(r.Balance || 0))
              .toString(10)),
          e.PreviousTxnID && (i.previousTxnId = e.PreviousTxnID),
          i
        );
      }
      function a(e) {
        const t = i(e).filter((e) => "PayChannel" === e.entryType);
        return 1 === t.length ? o(t[0]) : void 0;
      }
      e.exports.parseChannelChanges = a;
    },
    10349: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SHAMap = t.Leaf = t.InnerNode = t.Node = t.NodeType = void 0));
      const n = i(r(6639)),
        s = i(r(6638)),
        o = "0000000000000000000000000000000000000000000000000000000000000000";
      var a;
      (function (e) {
        ((e[(e["INNER"] = 1)] = "INNER"),
          (e[(e["TRANSACTION_NO_METADATA"] = 2)] = "TRANSACTION_NO_METADATA"),
          (e[(e["TRANSACTION_METADATA"] = 3)] = "TRANSACTION_METADATA"),
          (e[(e["ACCOUNT_STATE"] = 4)] = "ACCOUNT_STATE"));
      })((a = t.NodeType || (t.NodeType = {})));
      class Node {
        constructor() {}
        addItem(e, t) {
          throw new Error(
            "Called unimplemented virtual method SHAMapTreeNode#addItem.",
          );
        }
        get hash() {
          throw new Error(
            "Called unimplemented virtual method SHAMapTreeNode#hash.",
          );
        }
      }
      t.Node = Node;
      class InnerNode extends Node {
        constructor(e) {
          (void 0 === e && (e = 0),
            super(),
            (this.leaves = {}),
            (this.type = a.INNER),
            (this.depth = e),
            (this.empty = !0));
        }
        addItem(e, t) {
          const r = this.getNode(parseInt(e[this.depth], 16));
          if (r) {
            if (r instanceof InnerNode) r.addItem(e, t);
            else if (r instanceof Leaf) {
              if (r.tag === e)
                throw new Error(
                  "Tried to add a node to a SHAMap that was already in there.",
                );
              {
                const i = new InnerNode(this.depth + 1);
                (i.addItem(r.tag, r),
                  i.addItem(e, t),
                  this.setNode(parseInt(e[this.depth], 16), i));
              }
            }
          } else this.setNode(parseInt(e[this.depth], 16), t);
        }
        setNode(e, t) {
          if (e < 0 || e > 15)
            throw new Error("Invalid slot: slot must be between 0-15.");
          ((this.leaves[e] = t), (this.empty = !1));
        }
        getNode(e) {
          if (e < 0 || e > 15)
            throw new Error("Invalid slot: slot must be between 0-15.");
          return this.leaves[e];
        }
        get hash() {
          if (this.empty) return o;
          let e = "";
          for (let r = 0; r < 16; r++)
            e += this.leaves[r] ? this.leaves[r].hash : o;
          const t = n.default.INNER_NODE.toString(16);
          return s.default(t + e);
        }
      }
      t.InnerNode = InnerNode;
      class Leaf extends Node {
        constructor(e, t, r) {
          (super(), (this.tag = e), (this.type = r), (this.data = t));
        }
        get hash() {
          switch (this.type) {
            case a.ACCOUNT_STATE: {
              const e = n.default.LEAF_NODE.toString(16);
              return s.default(e + this.data + this.tag);
            }
            case a.TRANSACTION_NO_METADATA: {
              const e = n.default.TRANSACTION_ID.toString(16);
              return s.default(e + this.data);
            }
            case a.TRANSACTION_METADATA: {
              const e = n.default.TRANSACTION_NODE.toString(16);
              return s.default(e + this.data + this.tag);
            }
            default:
              throw new Error("Tried to hash a SHAMap node of unknown type.");
          }
        }
      }
      t.Leaf = Leaf;
      class SHAMap {
        constructor() {
          this.root = new InnerNode(0);
        }
        addItem(e, t, r) {
          this.root.addItem(e, new Leaf(e, t, r));
        }
        get hash() {
          return this.root.hash;
        }
      }
      t.SHAMap = SHAMap;
    },
    10350: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          account: "a",
          dirNode: "d",
          generatorMap: "g",
          rippleState: "r",
          offer: "o",
          ownerDir: "O",
          bookDir: "B",
          contract: "c",
          skipList: "s",
          escrow: "u",
          amendment: "f",
          feeSettings: "e",
          ticket: "T",
          signerList: "S",
          paychan: "x",
          check: "C",
          depositPreauth: "p",
        }));
    },
    10389: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    10390: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__awaiter) ||
        function (e, t, r, i) {
          function n(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, s) {
            function o(e) {
              try {
                c(i.next(e));
              } catch (t) {
                s(t);
              }
            }
            function a(e) {
              try {
                c(i["throw"](e));
              } catch (t) {
                s(t);
              }
            }
            function c(e) {
              e.done ? r(e.value) : n(e.value).then(o, a);
            }
            c((i = i.apply(e, t || [])).next());
          });
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RippleAPIBroadcast = void 0));
      const n = r(6625);
      class RippleAPIBroadcast extends n.RippleAPI {
        constructor(e, t) {
          (void 0 === t && (t = {}), super(t), (this.ledgerVersion = void 0));
          const r = e.map(
            (e) => new n.RippleAPI(Object.assign({}, t, { server: e })),
          );
          ((this._apis = r),
            this.getMethodNames().forEach((e) => {
              this[e] = function () {
                return Promise.race(r.map((t) => t[e](...arguments)));
              };
            }),
            (this.connect = function () {
              return i(this, void 0, void 0, function* () {
                yield Promise.all(r.map((e) => e.connect()));
              });
            }),
            (this.disconnect = function () {
              return i(this, void 0, void 0, function* () {
                yield Promise.all(r.map((e) => e.disconnect()));
              });
            }),
            (this.isConnected = function () {
              return r.map((e) => e.isConnected()).every(Boolean);
            }));
          const s = r[0],
            o = ["sign", "generateAddress", "computeLedgerHash"];
          (o.forEach((e) => {
            this[e] = s[e].bind(s);
          }),
            r.forEach((e) => {
              (e.on("ledger", this.onLedgerEvent.bind(this)),
                e.on("error", (e, t, r) => this.emit("error", e, t, r)));
            }));
        }
        onLedgerEvent(e) {
          (e.ledgerVersion > this.ledgerVersion ||
            null == this.ledgerVersion) &&
            ((this.ledgerVersion = e.ledgerVersion), this.emit("ledger", e));
        }
        getMethodNames() {
          const e = [],
            t = this._apis[0];
          for (const r of Object.getOwnPropertyNames(t))
            "function" === typeof t[r] && e.push(r);
          return e;
        }
      }
      t.RippleAPIBroadcast = RippleAPIBroadcast;
    },
    2793: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.serverInfo =
          t.validate =
          t.errors =
          t.constants =
          t.ensureClassicAddress =
            void 0));
      const o = s(r(10188));
      t.constants = o;
      const a = s(r(3603));
      t.errors = a;
      const c = s(r(10190));
      t.validate = c;
      const d = s(r(6627));
      t.serverInfo = d;
      const h = r(3124);
      function u(e) {
        if (h.isValidXAddress(e)) {
          const { classicAddress: t, tag: r } = h.xAddressToClassicAddress(e);
          if (!1 !== r)
            throw new Error(
              "This command does not support the use of a tag. Use an address without a tag.",
            );
          return t;
        }
        return e;
      }
      t.ensureClassicAddress = u;
      var l = r(4788);
      (Object.defineProperty(t, "dropsToXrp", {
        enumerable: !0,
        get: function () {
          return l.dropsToXrp;
        },
      }),
        Object.defineProperty(t, "xrpToDrops", {
          enumerable: !0,
          get: function () {
            return l.xrpToDrops;
          },
        }),
        Object.defineProperty(t, "toRippledAmount", {
          enumerable: !0,
          get: function () {
            return l.toRippledAmount;
          },
        }),
        Object.defineProperty(t, "removeUndefined", {
          enumerable: !0,
          get: function () {
            return l.removeUndefined;
          },
        }),
        Object.defineProperty(t, "convertKeysFromSnakeCaseToCamelCase", {
          enumerable: !0,
          get: function () {
            return l.convertKeysFromSnakeCaseToCamelCase;
          },
        }),
        Object.defineProperty(t, "iso8601ToRippleTime", {
          enumerable: !0,
          get: function () {
            return l.iso8601ToRippleTime;
          },
        }),
        Object.defineProperty(t, "rippleTimeToISO8601", {
          enumerable: !0,
          get: function () {
            return l.rippleTimeToISO8601;
          },
        }));
      var p = r(10310);
      Object.defineProperty(t, "Connection", {
        enumerable: !0,
        get: function () {
          return p.Connection;
        },
      });
      var f = r(6626);
      Object.defineProperty(t, "txFlags", {
        enumerable: !0,
        get: function () {
          return f.txFlags;
        },
      });
    },
    3602: function (e, t, r) {
      "use strict";
      (function (t) {
        const i = r(229),
          n = r(390),
          s = r(43),
          o = r(795),
          a = r(3124),
          c = r(5539),
          d = r(5542),
          h = o.eddsa("ed25519"),
          u = o.ec("secp256k1"),
          { hexToBytes: l } = d,
          { bytesToHex: p } = d;
        function f(e) {
          (void 0 === e && (e = {}),
            i(!e.entropy || e.entropy.length >= 16, "entropy too short"));
          const t = e.entropy ? e.entropy.slice(0, 16) : n(16),
            r = "ed25519" === e.algorithm ? "ed25519" : "secp256k1";
          return a.encodeSeed(t, r);
        }
        function m(e) {
          return s.sha512().update(e).digest().slice(0, 32);
        }
        const g = {
            deriveKeypair(e, t) {
              const r = "00",
                i = r + c.derivePrivateKey(e, t).toString(16, 64).toUpperCase(),
                n = p(
                  u.keyFromPrivate(i.slice(2)).getPublic().encodeCompressed(),
                );
              return { privateKey: i, publicKey: n };
            },
            sign(e, t) {
              return p(u.sign(m(e), l(t), { canonical: !0 }).toDER());
            },
            verify(e, t, r) {
              return u.verify(m(e), t, l(r));
            },
          },
          y = {
            deriveKeypair(e) {
              const t = "ED",
                r = m(e),
                i = t + p(r),
                n = t + p(h.keyFromSecret(r).pubBytes());
              return { privateKey: i, publicKey: n };
            },
            sign(e, t) {
              return (
                i(Array.isArray(e), "message must be array of octets"),
                p(h.sign(e, l(t).slice(1)).toBytes())
              );
            },
            verify(e, t, r) {
              return h.verify(e, l(t), l(r).slice(1));
            },
          };
        function v(e) {
          const t = { "ecdsa-secp256k1": g, ed25519: y };
          return t[e];
        }
        function b(e, t) {
          const r = a.decodeSeed(e),
            i = "ed25519" === r.type ? "ed25519" : "ecdsa-secp256k1",
            n = v(i),
            s = n.deriveKeypair(r.bytes, t),
            o = m("This test message should verify."),
            c = n.sign(o, s.privateKey);
          if (!0 !== n.verify(o, c, s.publicKey))
            throw new Error(
              "derived keypair did not generate verifiable signature",
            );
          return s;
        }
        function w(e) {
          const t = l(e);
          return 33 === t.length && 237 === t[0]
            ? "ed25519"
            : "ecdsa-secp256k1";
        }
        function T(e, t) {
          const r = w(t);
          return v(r).sign(l(e), t);
        }
        function M(e, t, r) {
          const i = w(r);
          return v(i).verify(l(e), t, r);
        }
        function P(e) {
          return a.encodeAccountID(d.computePublicKeyHash(e));
        }
        function A(e) {
          return P(t.from(l(e)));
        }
        function x(e) {
          const t = a.decodeNodePublic(e),
            r = c.accountPublicFromPublicGenerator(t);
          return P(r);
        }
        const { decodeSeed: _ } = a;
        e.exports = {
          generateSeed: f,
          deriveKeypair: b,
          sign: T,
          verify: M,
          deriveAddress: A,
          deriveNodeAddress: x,
          decodeSeed: _,
        };
      }).call(this, r(2).Buffer);
    },
    3603: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.XRPLFaucetError =
          t.LedgerVersionError =
          t.MissingLedgerHistoryError =
          t.PendingLedgerVersionError =
          t.NotFoundError =
          t.ValidationError =
          t.ResponseFormatError =
          t.TimeoutError =
          t.RippledNotInitializedError =
          t.DisconnectedError =
          t.NotConnectedError =
          t.RippledError =
          t.ConnectionError =
          t.UnexpectedError =
          t.RippleError =
            void 0));
      const o = r(799),
        a = s(r(10189));
      class RippleError extends Error {
        constructor(e, t) {
          (void 0 === e && (e = ""),
            super(e),
            (this.name = a.getConstructorName(this)),
            (this.message = e),
            (this.data = t),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, this.constructor));
        }
        toString() {
          let e = "[" + this.name + "(" + this.message;
          return (
            this.data && (e += ", " + o.inspect(this.data)),
            (e += ")]"),
            e
          );
        }
        inspect() {
          return this.toString();
        }
      }
      t.RippleError = RippleError;
      class RippledError extends RippleError {}
      t.RippledError = RippledError;
      class UnexpectedError extends RippleError {}
      t.UnexpectedError = UnexpectedError;
      class LedgerVersionError extends RippleError {}
      t.LedgerVersionError = LedgerVersionError;
      class ConnectionError extends RippleError {}
      t.ConnectionError = ConnectionError;
      class NotConnectedError extends ConnectionError {}
      t.NotConnectedError = NotConnectedError;
      class DisconnectedError extends ConnectionError {}
      t.DisconnectedError = DisconnectedError;
      class RippledNotInitializedError extends ConnectionError {}
      t.RippledNotInitializedError = RippledNotInitializedError;
      class TimeoutError extends ConnectionError {}
      t.TimeoutError = TimeoutError;
      class ResponseFormatError extends ConnectionError {}
      t.ResponseFormatError = ResponseFormatError;
      class ValidationError extends RippleError {}
      t.ValidationError = ValidationError;
      class XRPLFaucetError extends RippleError {}
      t.XRPLFaucetError = XRPLFaucetError;
      class NotFoundError extends RippleError {
        constructor(e) {
          (void 0 === e && (e = "Not found"), super(e));
        }
      }
      t.NotFoundError = NotFoundError;
      class MissingLedgerHistoryError extends RippleError {
        constructor(e) {
          super(e || "Server is missing ledger history in the specified range");
        }
      }
      t.MissingLedgerHistoryError = MissingLedgerHistoryError;
      class PendingLedgerVersionError extends RippleError {
        constructor(e) {
          super(
            e ||
              "maxLedgerVersion is greater than server's most recent validated ledger",
          );
        }
      }
      t.PendingLedgerVersionError = PendingLedgerVersionError;
    },
    3942: function (e, t, r) {
      "use strict";
      (function (e) {
        var i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.computePaymentChannelHash =
            t.computeEscrowHash =
            t.computeLedgerHash =
            t.computeStateTreeHash =
            t.computeTransactionTreeHash =
            t.computeTrustlineHash =
            t.computeOrderID =
            t.computeSignerListLedgerObjectID =
            t.computeAccountLedgerObjectID =
            t.computeBinaryTransactionSigningHash =
            t.computeTransactionHash =
            t.computeBinaryTransactionHash =
              void 0));
        const n = i(r(800)),
          s = r(3124),
          o = i(r(6638)),
          a = i(r(6639)),
          c = r(10349),
          d = r(3939),
          h = i(r(10350)),
          u = (e, t) => Array(t - e.length + 1).join("0") + e,
          l = (e, t) => u(Number(e).toString(16), 2 * t),
          p = (t) => e.from(t).toString("hex"),
          f = (e, t) => {
            const r = new n.default(e).toString(16);
            return u(r, 2 * t);
          },
          m = (e) => l(h.default[e].charCodeAt(0), 2),
          g = (t) => e.from(s.decodeAccountID(t)).toString("hex"),
          y = (e) => {
            if (3 === e.length) {
              const t = new Array(21).join("0").split("").map(parseFloat);
              return (
                (t[12] = 255 & e.charCodeAt(0)),
                (t[13] = 255 & e.charCodeAt(1)),
                (t[14] = 255 & e.charCodeAt(2)),
                p(t)
              );
            }
            return e;
          },
          v = (e) => {
            const t = e.length / 2;
            if (t <= 192) return p([t]) + e;
            if (t <= 12480) {
              const r = t - 193;
              return p([193 + (r >>> 8), 255 & r]) + e;
            }
            if (t <= 918744) {
              const r = t - 12481;
              return p([241 + (r >>> 16), (r >>> 8) & 255, 255 & r]) + e;
            }
            throw new Error("Variable integer overflow.");
          };
        ((t.computeBinaryTransactionHash = (e) => {
          const t = a.default.TRANSACTION_ID.toString(16).toUpperCase();
          return o.default(t + e);
        }),
          (t.computeTransactionHash = (e) =>
            t.computeBinaryTransactionHash(d.encode(e))),
          (t.computeBinaryTransactionSigningHash = (e) => {
            const t = a.default.TRANSACTION_SIGN.toString(16).toUpperCase();
            return o.default(t + e);
          }),
          (t.computeAccountLedgerObjectID = (e) =>
            o.default(m("account") + g(e))),
          (t.computeSignerListLedgerObjectID = (e) =>
            o.default(m("signerList") + g(e) + "00000000")),
          (t.computeOrderID = (e, t) => {
            const r = "00" + l(h.default.offer.charCodeAt(0), 1);
            return o.default(r + g(e) + l(t, 4));
          }),
          (t.computeTrustlineHash = (e, t, r) => {
            const i = g(e),
              s = g(t),
              a = new n.default(i, 16).isGreaterThan(new n.default(s, 16)),
              c = a ? s : i,
              d = a ? i : s,
              h = m("rippleState");
            return o.default(h + c + d + y(r));
          }),
          (t.computeTransactionTreeHash = (e) => {
            const r = new c.SHAMap();
            return (
              e.forEach((e) => {
                const i = d.encode(e),
                  n = d.encode(e.metaData),
                  s = t.computeBinaryTransactionHash(i),
                  o = v(i) + v(n);
                r.addItem(s, o, c.NodeType.TRANSACTION_METADATA);
              }),
              r.hash
            );
          }),
          (t.computeStateTreeHash = (e) => {
            const t = new c.SHAMap();
            return (
              e.forEach((e) => {
                const r = d.encode(e);
                t.addItem(e.index, r, c.NodeType.ACCOUNT_STATE);
              }),
              t.hash
            );
          }),
          (t.computeLedgerHash = (e) => {
            const t = a.default.LEDGER.toString(16).toUpperCase();
            return o.default(
              t +
                l(e.ledger_index, 4) +
                f(e.total_coins, 8) +
                e.parent_hash +
                e.transaction_hash +
                e.account_hash +
                l(e.parent_close_time, 4) +
                l(e.close_time, 4) +
                l(e.close_time_resolution, 1) +
                l(e.close_flags, 1),
            );
          }),
          (t.computeEscrowHash = (e, t) =>
            o.default(m("escrow") + g(e) + l(t, 4))),
          (t.computePaymentChannelHash = (e, t, r) =>
            o.default(m("paychan") + g(e) + g(t) + l(r, 4))));
      }).call(this, r(2).Buffer);
    },
    4547: function (e, t, r) {
      (function (e) {
        (function (e, t) {
          "use strict";
          function i(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function n(e, t) {
            e.super_ = t;
            var r = function () {};
            ((r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e));
          }
          function s(e, t, r) {
            if (s.isBN(e)) return e;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || "be")));
          }
          var o;
          ("object" === typeof e ? (e.exports = s) : (t.BN = s),
            (s.BN = s),
            (s.wordSize = 26));
          try {
            o =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(5541).Buffer;
          } catch (C) {}
          function a(e, t) {
            var r = e.charCodeAt(t);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void i(!1, "Invalid character in " + e);
          }
          function c(e, t, r) {
            var i = a(e, r);
            return (r - 1 >= t && (i |= a(e, r - 1) << 4), i);
          }
          function d(e, t, r, n) {
            for (
              var s = 0, o = 0, a = Math.min(e.length, r), c = t;
              c < a;
              c++
            ) {
              var d = e.charCodeAt(c) - 48;
              ((s *= n),
                (o = d >= 49 ? d - 49 + 10 : d >= 17 ? d - 17 + 10 : d),
                i(d >= 0 && o < n, "Invalid character"),
                (s += o));
            }
            return s;
          }
          function h(e, t) {
            ((e.words = t.words),
              (e.length = t.length),
              (e.negative = t.negative),
              (e.red = t.red));
          }
          if (
            ((s.isBN = function (e) {
              return (
                e instanceof s ||
                (null !== e &&
                  "object" === typeof e &&
                  e.constructor.wordSize === s.wordSize &&
                  Array.isArray(e.words))
              );
            }),
            (s.max = function (e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (s.min = function (e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (s.prototype._init = function (e, t, r) {
              if ("number" === typeof e) return this._initNumber(e, t, r);
              if ("object" === typeof e) return this._initArray(e, t, r);
              ("hex" === t && (t = 16),
                i(t === (0 | t) && t >= 2 && t <= 36),
                (e = e.toString().replace(/\s+/g, "")));
              var n = 0;
              ("-" === e[0] && (n++, (this.negative = 1)),
                n < e.length &&
                  (16 === t
                    ? this._parseHex(e, n, r)
                    : (this._parseBase(e, t, n),
                      "le" === r && this._initArray(this.toArray(), t, r))));
            }),
            (s.prototype._initNumber = function (e, t, r) {
              (e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                    ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                      (this.length = 2))
                    : (i(e < 9007199254740992),
                      (this.words = [
                        67108863 & e,
                        (e / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), t, r));
            }),
            (s.prototype._initArray = function (e, t, r) {
              if ((i("number" === typeof e.length), e.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var s,
                o,
                a = 0;
              if ("be" === r)
                for (n = e.length - 1, s = 0; n >= 0; n -= 3)
                  ((o = e[n] | (e[n - 1] << 8) | (e[n - 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++));
              else if ("le" === r)
                for (n = 0, s = 0; n < e.length; n += 3)
                  ((o = e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)),
                    (this.words[s] |= (o << a) & 67108863),
                    (this.words[s + 1] = (o >>> (26 - a)) & 67108863),
                    (a += 24),
                    a >= 26 && ((a -= 26), s++));
              return this._strip();
            }),
            (s.prototype._parseHex = function (e, t, r) {
              ((this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var n,
                s = 0,
                o = 0;
              if ("be" === r)
                for (i = e.length - 1; i >= t; i -= 2)
                  ((n = c(e, t, i) << s),
                    (this.words[o] |= 67108863 & n),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26))
                      : (s += 8));
              else {
                var a = e.length - t;
                for (i = a % 2 === 0 ? t + 1 : t; i < e.length; i += 2)
                  ((n = c(e, t, i) << s),
                    (this.words[o] |= 67108863 & n),
                    s >= 18
                      ? ((s -= 18), (o += 1), (this.words[o] |= n >>> 26))
                      : (s += 8));
              }
              this._strip();
            }),
            (s.prototype._parseBase = function (e, t, r) {
              ((this.words = [0]), (this.length = 1));
              for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
              (i--, (n = (n / t) | 0));
              for (
                var s = e.length - r,
                  o = s % i,
                  a = Math.min(s, s - o) + r,
                  c = 0,
                  h = r;
                h < a;
                h += i
              )
                ((c = d(e, h, h + i, t)),
                  this.imuln(n),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c));
              if (0 !== o) {
                var u = 1;
                for (c = d(e, h, e.length, t), h = 0; h < o; h++) u *= t;
                (this.imuln(u),
                  this.words[0] + c < 67108864
                    ? (this.words[0] += c)
                    : this._iaddn(c));
              }
              this._strip();
            }),
            (s.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              ((e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red));
            }),
            (s.prototype._move = function (e) {
              h(e, this);
            }),
            (s.prototype.clone = function () {
              var e = new s(null);
              return (this.copy(e), e);
            }),
            (s.prototype._expand = function (e) {
              while (this.length < e) this.words[this.length++] = 0;
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
              s.prototype[Symbol.for("nodejs.util.inspect.custom")] = u;
            } catch (C) {
              s.prototype.inspect = u;
            }
          else s.prototype.inspect = u;
          function u() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var l = [
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
            p = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            f = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((s.prototype.toString = function (e, t) {
            var r;
            if (((e = e || 10), (t = 0 | t || 1), 16 === e || "hex" === e)) {
              r = "";
              for (var n = 0, s = 0, o = 0; o < this.length; o++) {
                var a = this.words[o],
                  c = (16777215 & ((a << n) | s)).toString(16);
                ((s = (a >>> (24 - n)) & 16777215),
                  (n += 2),
                  n >= 26 && ((n -= 26), o--),
                  (r =
                    0 !== s || o !== this.length - 1
                      ? l[6 - c.length] + c + r
                      : c + r));
              }
              0 !== s && (r = s.toString(16) + r);
              while (r.length % t !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var d = p[e],
                h = f[e];
              r = "";
              var u = this.clone();
              u.negative = 0;
              while (!u.isZero()) {
                var m = u.modrn(h).toString(e);
                ((u = u.idivn(h)),
                  (r = u.isZero() ? m + r : l[d - m.length] + m + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % t !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            i(!1, "Base should be between 2 and 36");
          }),
            (s.prototype.toNumber = function () {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (e += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      i(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
              );
            }),
            (s.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            o &&
              (s.prototype.toBuffer = function (e, t) {
                return this.toArrayLike(o, e, t);
              }),
            (s.prototype.toArray = function (e, t) {
              return this.toArrayLike(Array, e, t);
            }));
          var m = function (e, t) {
            return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
          };
          function g(e) {
            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
              var i = (r / 26) | 0,
                n = r % 26;
              t[r] = (e.words[i] >>> n) & 1;
            }
            return t;
          }
          function y(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var i = (e.length + t.length) | 0;
            ((r.length = i), (i = (i - 1) | 0));
            var n = 0 | e.words[0],
              s = 0 | t.words[0],
              o = n * s,
              a = 67108863 & o,
              c = (o / 67108864) | 0;
            r.words[0] = a;
            for (var d = 1; d < i; d++) {
              for (
                var h = c >>> 26,
                  u = 67108863 & c,
                  l = Math.min(d, t.length - 1),
                  p = Math.max(0, d - e.length + 1);
                p <= l;
                p++
              ) {
                var f = (d - p) | 0;
                ((n = 0 | e.words[f]),
                  (s = 0 | t.words[p]),
                  (o = n * s + u),
                  (h += (o / 67108864) | 0),
                  (u = 67108863 & o));
              }
              ((r.words[d] = 0 | u), (c = 0 | h));
            }
            return (0 !== c ? (r.words[d] = 0 | c) : r.length--, r._strip());
          }
          ((s.prototype.toArrayLike = function (e, t, r) {
            this._strip();
            var n = this.byteLength(),
              s = r || Math.max(1, n);
            (i(n <= s, "byte array longer than desired length"),
              i(s > 0, "Requested array length <= 0"));
            var o = m(e, s),
              a = "le" === t ? "LE" : "BE";
            return (this["_toArrayLike" + a](o, n), o);
          }),
            (s.prototype._toArrayLikeLE = function (e, t) {
              for (var r = 0, i = 0, n = 0, s = 0; n < this.length; n++) {
                var o = (this.words[n] << s) | i;
                ((e[r++] = 255 & o),
                  r < e.length && (e[r++] = (o >> 8) & 255),
                  r < e.length && (e[r++] = (o >> 16) & 255),
                  6 === s
                    ? (r < e.length && (e[r++] = (o >> 24) & 255),
                      (i = 0),
                      (s = 0))
                    : ((i = o >>> 24), (s += 2)));
              }
              if (r < e.length) {
                e[r++] = i;
                while (r < e.length) e[r++] = 0;
              }
            }),
            (s.prototype._toArrayLikeBE = function (e, t) {
              for (
                var r = e.length - 1, i = 0, n = 0, s = 0;
                n < this.length;
                n++
              ) {
                var o = (this.words[n] << s) | i;
                ((e[r--] = 255 & o),
                  r >= 0 && (e[r--] = (o >> 8) & 255),
                  r >= 0 && (e[r--] = (o >> 16) & 255),
                  6 === s
                    ? (r >= 0 && (e[r--] = (o >> 24) & 255), (i = 0), (s = 0))
                    : ((i = o >>> 24), (s += 2)));
              }
              if (r >= 0) {
                e[r--] = i;
                while (r >= 0) e[r--] = 0;
              }
            }),
            Math.clz32
              ? (s.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (s.prototype._countBits = function (e) {
                  var t = e,
                    r = 0;
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  );
                }),
            (s.prototype._zeroBits = function (e) {
              if (0 === e) return 26;
              var t = e,
                r = 0;
              return (
                0 === (8191 & t) && ((r += 13), (t >>>= 13)),
                0 === (127 & t) && ((r += 7), (t >>>= 7)),
                0 === (15 & t) && ((r += 4), (t >>>= 4)),
                0 === (3 & t) && ((r += 2), (t >>>= 2)),
                0 === (1 & t) && r++,
                r
              );
            }),
            (s.prototype.bitLength = function () {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (s.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (s.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (s.prototype.toTwos = function (e) {
              return 0 !== this.negative
                ? this.abs().inotn(e).iaddn(1)
                : this.clone();
            }),
            (s.prototype.fromTwos = function (e) {
              return this.testn(e - 1)
                ? this.notn(e).iaddn(1).ineg()
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
            (s.prototype.iuor = function (e) {
              while (this.length < e.length) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this._strip();
            }),
            (s.prototype.ior = function (e) {
              return (i(0 === (this.negative | e.negative)), this.iuor(e));
            }),
            (s.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (s.prototype.uor = function (e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (s.prototype.iuand = function (e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return ((this.length = t.length), this._strip());
            }),
            (s.prototype.iand = function (e) {
              return (i(0 === (this.negative | e.negative)), this.iuand(e));
            }),
            (s.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (s.prototype.uand = function (e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (s.prototype.iuxor = function (e) {
              var t, r;
              this.length > e.length
                ? ((t = this), (r = e))
                : ((t = e), (r = this));
              for (var i = 0; i < r.length; i++)
                this.words[i] = t.words[i] ^ r.words[i];
              if (this !== t)
                for (; i < t.length; i++) this.words[i] = t.words[i];
              return ((this.length = t.length), this._strip());
            }),
            (s.prototype.ixor = function (e) {
              return (i(0 === (this.negative | e.negative)), this.iuxor(e));
            }),
            (s.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (s.prototype.uxor = function (e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (s.prototype.inotn = function (e) {
              i("number" === typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                r = e % 26;
              (this._expand(t), r > 0 && t--);
              for (var n = 0; n < t; n++)
                this.words[n] = 67108863 & ~this.words[n];
              return (
                r > 0 &&
                  (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (s.prototype.notn = function (e) {
              return this.clone().inotn(e);
            }),
            (s.prototype.setn = function (e, t) {
              i("number" === typeof e && e >= 0);
              var r = (e / 26) | 0,
                n = e % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = t
                  ? this.words[r] | (1 << n)
                  : this.words[r] & ~(1 << n)),
                this._strip()
              );
            }),
            (s.prototype.iadd = function (e) {
              var t, r, i;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              this.length > e.length
                ? ((r = this), (i = e))
                : ((r = e), (i = this));
              for (var n = 0, s = 0; s < i.length; s++)
                ((t = (0 | r.words[s]) + (0 | i.words[s]) + n),
                  (this.words[s] = 67108863 & t),
                  (n = t >>> 26));
              for (; 0 !== n && s < r.length; s++)
                ((t = (0 | r.words[s]) + n),
                  (this.words[s] = 67108863 & t),
                  (n = t >>> 26));
              if (((this.length = r.length), 0 !== n))
                ((this.words[this.length] = n), this.length++);
              else if (r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return this;
            }),
            (s.prototype.add = function (e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (t = e.sub(this)),
                    (this.negative = 1),
                    t)
                  : this.length > e.length
                    ? this.clone().iadd(e)
                    : e.clone().iadd(this);
            }),
            (s.prototype.isub = function (e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return ((e.negative = 1), t._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                i,
                n = this.cmp(e);
              if (0 === n)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              n > 0 ? ((r = this), (i = e)) : ((r = e), (i = this));
              for (var s = 0, o = 0; o < i.length; o++)
                ((t = (0 | r.words[o]) - (0 | i.words[o]) + s),
                  (s = t >> 26),
                  (this.words[o] = 67108863 & t));
              for (; 0 !== s && o < r.length; o++)
                ((t = (0 | r.words[o]) + s),
                  (s = t >> 26),
                  (this.words[o] = 67108863 & t));
              if (0 === s && o < r.length && r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return (
                (this.length = Math.max(this.length, o)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (s.prototype.sub = function (e) {
              return this.clone().isub(e);
            }));
          var v = function (e, t, r) {
            var i,
              n,
              s,
              o = e.words,
              a = t.words,
              c = r.words,
              d = 0,
              h = 0 | o[0],
              u = 8191 & h,
              l = h >>> 13,
              p = 0 | o[1],
              f = 8191 & p,
              m = p >>> 13,
              g = 0 | o[2],
              y = 8191 & g,
              v = g >>> 13,
              b = 0 | o[3],
              w = 8191 & b,
              T = b >>> 13,
              M = 0 | o[4],
              P = 8191 & M,
              A = M >>> 13,
              x = 0 | o[5],
              _ = 8191 & x,
              $ = x >>> 13,
              S = 0 | o[6],
              O = 8191 & S,
              C = S >>> 13,
              j = 0 | o[7],
              k = 8191 & j,
              R = j >>> 13,
              N = 0 | o[8],
              I = 8191 & N,
              q = N >>> 13,
              E = 0 | o[9],
              F = 8191 & E,
              D = E >>> 13,
              L = 0 | a[0],
              V = 8191 & L,
              B = L >>> 13,
              J = 0 | a[1],
              X = 8191 & J,
              H = J >>> 13,
              z = 0 | a[2],
              K = 8191 & z,
              U = z >>> 13,
              G = 0 | a[3],
              Z = 8191 & G,
              W = G >>> 13,
              Y = 0 | a[4],
              Q = 8191 & Y,
              ee = Y >>> 13,
              te = 0 | a[5],
              re = 8191 & te,
              ie = te >>> 13,
              ne = 0 | a[6],
              se = 8191 & ne,
              oe = ne >>> 13,
              ae = 0 | a[7],
              ce = 8191 & ae,
              de = ae >>> 13,
              he = 0 | a[8],
              ue = 8191 & he,
              le = he >>> 13,
              pe = 0 | a[9],
              fe = 8191 & pe,
              me = pe >>> 13;
            ((r.negative = e.negative ^ t.negative),
              (r.length = 19),
              (i = Math.imul(u, V)),
              (n = Math.imul(u, B)),
              (n = (n + Math.imul(l, V)) | 0),
              (s = Math.imul(l, B)));
            var ge = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (ge >>> 26)) | 0),
              (ge &= 67108863),
              (i = Math.imul(f, V)),
              (n = Math.imul(f, B)),
              (n = (n + Math.imul(m, V)) | 0),
              (s = Math.imul(m, B)),
              (i = (i + Math.imul(u, X)) | 0),
              (n = (n + Math.imul(u, H)) | 0),
              (n = (n + Math.imul(l, X)) | 0),
              (s = (s + Math.imul(l, H)) | 0));
            var ye = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (ye >>> 26)) | 0),
              (ye &= 67108863),
              (i = Math.imul(y, V)),
              (n = Math.imul(y, B)),
              (n = (n + Math.imul(v, V)) | 0),
              (s = Math.imul(v, B)),
              (i = (i + Math.imul(f, X)) | 0),
              (n = (n + Math.imul(f, H)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (s = (s + Math.imul(m, H)) | 0),
              (i = (i + Math.imul(u, K)) | 0),
              (n = (n + Math.imul(u, U)) | 0),
              (n = (n + Math.imul(l, K)) | 0),
              (s = (s + Math.imul(l, U)) | 0));
            var ve = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (ve >>> 26)) | 0),
              (ve &= 67108863),
              (i = Math.imul(w, V)),
              (n = Math.imul(w, B)),
              (n = (n + Math.imul(T, V)) | 0),
              (s = Math.imul(T, B)),
              (i = (i + Math.imul(y, X)) | 0),
              (n = (n + Math.imul(y, H)) | 0),
              (n = (n + Math.imul(v, X)) | 0),
              (s = (s + Math.imul(v, H)) | 0),
              (i = (i + Math.imul(f, K)) | 0),
              (n = (n + Math.imul(f, U)) | 0),
              (n = (n + Math.imul(m, K)) | 0),
              (s = (s + Math.imul(m, U)) | 0),
              (i = (i + Math.imul(u, Z)) | 0),
              (n = (n + Math.imul(u, W)) | 0),
              (n = (n + Math.imul(l, Z)) | 0),
              (s = (s + Math.imul(l, W)) | 0));
            var be = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (be >>> 26)) | 0),
              (be &= 67108863),
              (i = Math.imul(P, V)),
              (n = Math.imul(P, B)),
              (n = (n + Math.imul(A, V)) | 0),
              (s = Math.imul(A, B)),
              (i = (i + Math.imul(w, X)) | 0),
              (n = (n + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(T, X)) | 0),
              (s = (s + Math.imul(T, H)) | 0),
              (i = (i + Math.imul(y, K)) | 0),
              (n = (n + Math.imul(y, U)) | 0),
              (n = (n + Math.imul(v, K)) | 0),
              (s = (s + Math.imul(v, U)) | 0),
              (i = (i + Math.imul(f, Z)) | 0),
              (n = (n + Math.imul(f, W)) | 0),
              (n = (n + Math.imul(m, Z)) | 0),
              (s = (s + Math.imul(m, W)) | 0),
              (i = (i + Math.imul(u, Q)) | 0),
              (n = (n + Math.imul(u, ee)) | 0),
              (n = (n + Math.imul(l, Q)) | 0),
              (s = (s + Math.imul(l, ee)) | 0));
            var we = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (we >>> 26)) | 0),
              (we &= 67108863),
              (i = Math.imul(_, V)),
              (n = Math.imul(_, B)),
              (n = (n + Math.imul($, V)) | 0),
              (s = Math.imul($, B)),
              (i = (i + Math.imul(P, X)) | 0),
              (n = (n + Math.imul(P, H)) | 0),
              (n = (n + Math.imul(A, X)) | 0),
              (s = (s + Math.imul(A, H)) | 0),
              (i = (i + Math.imul(w, K)) | 0),
              (n = (n + Math.imul(w, U)) | 0),
              (n = (n + Math.imul(T, K)) | 0),
              (s = (s + Math.imul(T, U)) | 0),
              (i = (i + Math.imul(y, Z)) | 0),
              (n = (n + Math.imul(y, W)) | 0),
              (n = (n + Math.imul(v, Z)) | 0),
              (s = (s + Math.imul(v, W)) | 0),
              (i = (i + Math.imul(f, Q)) | 0),
              (n = (n + Math.imul(f, ee)) | 0),
              (n = (n + Math.imul(m, Q)) | 0),
              (s = (s + Math.imul(m, ee)) | 0),
              (i = (i + Math.imul(u, re)) | 0),
              (n = (n + Math.imul(u, ie)) | 0),
              (n = (n + Math.imul(l, re)) | 0),
              (s = (s + Math.imul(l, ie)) | 0));
            var Te = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Te >>> 26)) | 0),
              (Te &= 67108863),
              (i = Math.imul(O, V)),
              (n = Math.imul(O, B)),
              (n = (n + Math.imul(C, V)) | 0),
              (s = Math.imul(C, B)),
              (i = (i + Math.imul(_, X)) | 0),
              (n = (n + Math.imul(_, H)) | 0),
              (n = (n + Math.imul($, X)) | 0),
              (s = (s + Math.imul($, H)) | 0),
              (i = (i + Math.imul(P, K)) | 0),
              (n = (n + Math.imul(P, U)) | 0),
              (n = (n + Math.imul(A, K)) | 0),
              (s = (s + Math.imul(A, U)) | 0),
              (i = (i + Math.imul(w, Z)) | 0),
              (n = (n + Math.imul(w, W)) | 0),
              (n = (n + Math.imul(T, Z)) | 0),
              (s = (s + Math.imul(T, W)) | 0),
              (i = (i + Math.imul(y, Q)) | 0),
              (n = (n + Math.imul(y, ee)) | 0),
              (n = (n + Math.imul(v, Q)) | 0),
              (s = (s + Math.imul(v, ee)) | 0),
              (i = (i + Math.imul(f, re)) | 0),
              (n = (n + Math.imul(f, ie)) | 0),
              (n = (n + Math.imul(m, re)) | 0),
              (s = (s + Math.imul(m, ie)) | 0),
              (i = (i + Math.imul(u, se)) | 0),
              (n = (n + Math.imul(u, oe)) | 0),
              (n = (n + Math.imul(l, se)) | 0),
              (s = (s + Math.imul(l, oe)) | 0));
            var Me = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Me >>> 26)) | 0),
              (Me &= 67108863),
              (i = Math.imul(k, V)),
              (n = Math.imul(k, B)),
              (n = (n + Math.imul(R, V)) | 0),
              (s = Math.imul(R, B)),
              (i = (i + Math.imul(O, X)) | 0),
              (n = (n + Math.imul(O, H)) | 0),
              (n = (n + Math.imul(C, X)) | 0),
              (s = (s + Math.imul(C, H)) | 0),
              (i = (i + Math.imul(_, K)) | 0),
              (n = (n + Math.imul(_, U)) | 0),
              (n = (n + Math.imul($, K)) | 0),
              (s = (s + Math.imul($, U)) | 0),
              (i = (i + Math.imul(P, Z)) | 0),
              (n = (n + Math.imul(P, W)) | 0),
              (n = (n + Math.imul(A, Z)) | 0),
              (s = (s + Math.imul(A, W)) | 0),
              (i = (i + Math.imul(w, Q)) | 0),
              (n = (n + Math.imul(w, ee)) | 0),
              (n = (n + Math.imul(T, Q)) | 0),
              (s = (s + Math.imul(T, ee)) | 0),
              (i = (i + Math.imul(y, re)) | 0),
              (n = (n + Math.imul(y, ie)) | 0),
              (n = (n + Math.imul(v, re)) | 0),
              (s = (s + Math.imul(v, ie)) | 0),
              (i = (i + Math.imul(f, se)) | 0),
              (n = (n + Math.imul(f, oe)) | 0),
              (n = (n + Math.imul(m, se)) | 0),
              (s = (s + Math.imul(m, oe)) | 0),
              (i = (i + Math.imul(u, ce)) | 0),
              (n = (n + Math.imul(u, de)) | 0),
              (n = (n + Math.imul(l, ce)) | 0),
              (s = (s + Math.imul(l, de)) | 0));
            var Pe = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Pe >>> 26)) | 0),
              (Pe &= 67108863),
              (i = Math.imul(I, V)),
              (n = Math.imul(I, B)),
              (n = (n + Math.imul(q, V)) | 0),
              (s = Math.imul(q, B)),
              (i = (i + Math.imul(k, X)) | 0),
              (n = (n + Math.imul(k, H)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (s = (s + Math.imul(R, H)) | 0),
              (i = (i + Math.imul(O, K)) | 0),
              (n = (n + Math.imul(O, U)) | 0),
              (n = (n + Math.imul(C, K)) | 0),
              (s = (s + Math.imul(C, U)) | 0),
              (i = (i + Math.imul(_, Z)) | 0),
              (n = (n + Math.imul(_, W)) | 0),
              (n = (n + Math.imul($, Z)) | 0),
              (s = (s + Math.imul($, W)) | 0),
              (i = (i + Math.imul(P, Q)) | 0),
              (n = (n + Math.imul(P, ee)) | 0),
              (n = (n + Math.imul(A, Q)) | 0),
              (s = (s + Math.imul(A, ee)) | 0),
              (i = (i + Math.imul(w, re)) | 0),
              (n = (n + Math.imul(w, ie)) | 0),
              (n = (n + Math.imul(T, re)) | 0),
              (s = (s + Math.imul(T, ie)) | 0),
              (i = (i + Math.imul(y, se)) | 0),
              (n = (n + Math.imul(y, oe)) | 0),
              (n = (n + Math.imul(v, se)) | 0),
              (s = (s + Math.imul(v, oe)) | 0),
              (i = (i + Math.imul(f, ce)) | 0),
              (n = (n + Math.imul(f, de)) | 0),
              (n = (n + Math.imul(m, ce)) | 0),
              (s = (s + Math.imul(m, de)) | 0),
              (i = (i + Math.imul(u, ue)) | 0),
              (n = (n + Math.imul(u, le)) | 0),
              (n = (n + Math.imul(l, ue)) | 0),
              (s = (s + Math.imul(l, le)) | 0));
            var Ae = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Ae >>> 26)) | 0),
              (Ae &= 67108863),
              (i = Math.imul(F, V)),
              (n = Math.imul(F, B)),
              (n = (n + Math.imul(D, V)) | 0),
              (s = Math.imul(D, B)),
              (i = (i + Math.imul(I, X)) | 0),
              (n = (n + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(q, X)) | 0),
              (s = (s + Math.imul(q, H)) | 0),
              (i = (i + Math.imul(k, K)) | 0),
              (n = (n + Math.imul(k, U)) | 0),
              (n = (n + Math.imul(R, K)) | 0),
              (s = (s + Math.imul(R, U)) | 0),
              (i = (i + Math.imul(O, Z)) | 0),
              (n = (n + Math.imul(O, W)) | 0),
              (n = (n + Math.imul(C, Z)) | 0),
              (s = (s + Math.imul(C, W)) | 0),
              (i = (i + Math.imul(_, Q)) | 0),
              (n = (n + Math.imul(_, ee)) | 0),
              (n = (n + Math.imul($, Q)) | 0),
              (s = (s + Math.imul($, ee)) | 0),
              (i = (i + Math.imul(P, re)) | 0),
              (n = (n + Math.imul(P, ie)) | 0),
              (n = (n + Math.imul(A, re)) | 0),
              (s = (s + Math.imul(A, ie)) | 0),
              (i = (i + Math.imul(w, se)) | 0),
              (n = (n + Math.imul(w, oe)) | 0),
              (n = (n + Math.imul(T, se)) | 0),
              (s = (s + Math.imul(T, oe)) | 0),
              (i = (i + Math.imul(y, ce)) | 0),
              (n = (n + Math.imul(y, de)) | 0),
              (n = (n + Math.imul(v, ce)) | 0),
              (s = (s + Math.imul(v, de)) | 0),
              (i = (i + Math.imul(f, ue)) | 0),
              (n = (n + Math.imul(f, le)) | 0),
              (n = (n + Math.imul(m, ue)) | 0),
              (s = (s + Math.imul(m, le)) | 0),
              (i = (i + Math.imul(u, fe)) | 0),
              (n = (n + Math.imul(u, me)) | 0),
              (n = (n + Math.imul(l, fe)) | 0),
              (s = (s + Math.imul(l, me)) | 0));
            var xe = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (xe >>> 26)) | 0),
              (xe &= 67108863),
              (i = Math.imul(F, X)),
              (n = Math.imul(F, H)),
              (n = (n + Math.imul(D, X)) | 0),
              (s = Math.imul(D, H)),
              (i = (i + Math.imul(I, K)) | 0),
              (n = (n + Math.imul(I, U)) | 0),
              (n = (n + Math.imul(q, K)) | 0),
              (s = (s + Math.imul(q, U)) | 0),
              (i = (i + Math.imul(k, Z)) | 0),
              (n = (n + Math.imul(k, W)) | 0),
              (n = (n + Math.imul(R, Z)) | 0),
              (s = (s + Math.imul(R, W)) | 0),
              (i = (i + Math.imul(O, Q)) | 0),
              (n = (n + Math.imul(O, ee)) | 0),
              (n = (n + Math.imul(C, Q)) | 0),
              (s = (s + Math.imul(C, ee)) | 0),
              (i = (i + Math.imul(_, re)) | 0),
              (n = (n + Math.imul(_, ie)) | 0),
              (n = (n + Math.imul($, re)) | 0),
              (s = (s + Math.imul($, ie)) | 0),
              (i = (i + Math.imul(P, se)) | 0),
              (n = (n + Math.imul(P, oe)) | 0),
              (n = (n + Math.imul(A, se)) | 0),
              (s = (s + Math.imul(A, oe)) | 0),
              (i = (i + Math.imul(w, ce)) | 0),
              (n = (n + Math.imul(w, de)) | 0),
              (n = (n + Math.imul(T, ce)) | 0),
              (s = (s + Math.imul(T, de)) | 0),
              (i = (i + Math.imul(y, ue)) | 0),
              (n = (n + Math.imul(y, le)) | 0),
              (n = (n + Math.imul(v, ue)) | 0),
              (s = (s + Math.imul(v, le)) | 0),
              (i = (i + Math.imul(f, fe)) | 0),
              (n = (n + Math.imul(f, me)) | 0),
              (n = (n + Math.imul(m, fe)) | 0),
              (s = (s + Math.imul(m, me)) | 0));
            var _e = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (_e >>> 26)) | 0),
              (_e &= 67108863),
              (i = Math.imul(F, K)),
              (n = Math.imul(F, U)),
              (n = (n + Math.imul(D, K)) | 0),
              (s = Math.imul(D, U)),
              (i = (i + Math.imul(I, Z)) | 0),
              (n = (n + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(q, Z)) | 0),
              (s = (s + Math.imul(q, W)) | 0),
              (i = (i + Math.imul(k, Q)) | 0),
              (n = (n + Math.imul(k, ee)) | 0),
              (n = (n + Math.imul(R, Q)) | 0),
              (s = (s + Math.imul(R, ee)) | 0),
              (i = (i + Math.imul(O, re)) | 0),
              (n = (n + Math.imul(O, ie)) | 0),
              (n = (n + Math.imul(C, re)) | 0),
              (s = (s + Math.imul(C, ie)) | 0),
              (i = (i + Math.imul(_, se)) | 0),
              (n = (n + Math.imul(_, oe)) | 0),
              (n = (n + Math.imul($, se)) | 0),
              (s = (s + Math.imul($, oe)) | 0),
              (i = (i + Math.imul(P, ce)) | 0),
              (n = (n + Math.imul(P, de)) | 0),
              (n = (n + Math.imul(A, ce)) | 0),
              (s = (s + Math.imul(A, de)) | 0),
              (i = (i + Math.imul(w, ue)) | 0),
              (n = (n + Math.imul(w, le)) | 0),
              (n = (n + Math.imul(T, ue)) | 0),
              (s = (s + Math.imul(T, le)) | 0),
              (i = (i + Math.imul(y, fe)) | 0),
              (n = (n + Math.imul(y, me)) | 0),
              (n = (n + Math.imul(v, fe)) | 0),
              (s = (s + Math.imul(v, me)) | 0));
            var $e = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + ($e >>> 26)) | 0),
              ($e &= 67108863),
              (i = Math.imul(F, Z)),
              (n = Math.imul(F, W)),
              (n = (n + Math.imul(D, Z)) | 0),
              (s = Math.imul(D, W)),
              (i = (i + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(I, ee)) | 0),
              (n = (n + Math.imul(q, Q)) | 0),
              (s = (s + Math.imul(q, ee)) | 0),
              (i = (i + Math.imul(k, re)) | 0),
              (n = (n + Math.imul(k, ie)) | 0),
              (n = (n + Math.imul(R, re)) | 0),
              (s = (s + Math.imul(R, ie)) | 0),
              (i = (i + Math.imul(O, se)) | 0),
              (n = (n + Math.imul(O, oe)) | 0),
              (n = (n + Math.imul(C, se)) | 0),
              (s = (s + Math.imul(C, oe)) | 0),
              (i = (i + Math.imul(_, ce)) | 0),
              (n = (n + Math.imul(_, de)) | 0),
              (n = (n + Math.imul($, ce)) | 0),
              (s = (s + Math.imul($, de)) | 0),
              (i = (i + Math.imul(P, ue)) | 0),
              (n = (n + Math.imul(P, le)) | 0),
              (n = (n + Math.imul(A, ue)) | 0),
              (s = (s + Math.imul(A, le)) | 0),
              (i = (i + Math.imul(w, fe)) | 0),
              (n = (n + Math.imul(w, me)) | 0),
              (n = (n + Math.imul(T, fe)) | 0),
              (s = (s + Math.imul(T, me)) | 0));
            var Se = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Se >>> 26)) | 0),
              (Se &= 67108863),
              (i = Math.imul(F, Q)),
              (n = Math.imul(F, ee)),
              (n = (n + Math.imul(D, Q)) | 0),
              (s = Math.imul(D, ee)),
              (i = (i + Math.imul(I, re)) | 0),
              (n = (n + Math.imul(I, ie)) | 0),
              (n = (n + Math.imul(q, re)) | 0),
              (s = (s + Math.imul(q, ie)) | 0),
              (i = (i + Math.imul(k, se)) | 0),
              (n = (n + Math.imul(k, oe)) | 0),
              (n = (n + Math.imul(R, se)) | 0),
              (s = (s + Math.imul(R, oe)) | 0),
              (i = (i + Math.imul(O, ce)) | 0),
              (n = (n + Math.imul(O, de)) | 0),
              (n = (n + Math.imul(C, ce)) | 0),
              (s = (s + Math.imul(C, de)) | 0),
              (i = (i + Math.imul(_, ue)) | 0),
              (n = (n + Math.imul(_, le)) | 0),
              (n = (n + Math.imul($, ue)) | 0),
              (s = (s + Math.imul($, le)) | 0),
              (i = (i + Math.imul(P, fe)) | 0),
              (n = (n + Math.imul(P, me)) | 0),
              (n = (n + Math.imul(A, fe)) | 0),
              (s = (s + Math.imul(A, me)) | 0));
            var Oe = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Oe >>> 26)) | 0),
              (Oe &= 67108863),
              (i = Math.imul(F, re)),
              (n = Math.imul(F, ie)),
              (n = (n + Math.imul(D, re)) | 0),
              (s = Math.imul(D, ie)),
              (i = (i + Math.imul(I, se)) | 0),
              (n = (n + Math.imul(I, oe)) | 0),
              (n = (n + Math.imul(q, se)) | 0),
              (s = (s + Math.imul(q, oe)) | 0),
              (i = (i + Math.imul(k, ce)) | 0),
              (n = (n + Math.imul(k, de)) | 0),
              (n = (n + Math.imul(R, ce)) | 0),
              (s = (s + Math.imul(R, de)) | 0),
              (i = (i + Math.imul(O, ue)) | 0),
              (n = (n + Math.imul(O, le)) | 0),
              (n = (n + Math.imul(C, ue)) | 0),
              (s = (s + Math.imul(C, le)) | 0),
              (i = (i + Math.imul(_, fe)) | 0),
              (n = (n + Math.imul(_, me)) | 0),
              (n = (n + Math.imul($, fe)) | 0),
              (s = (s + Math.imul($, me)) | 0));
            var Ce = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Ce >>> 26)) | 0),
              (Ce &= 67108863),
              (i = Math.imul(F, se)),
              (n = Math.imul(F, oe)),
              (n = (n + Math.imul(D, se)) | 0),
              (s = Math.imul(D, oe)),
              (i = (i + Math.imul(I, ce)) | 0),
              (n = (n + Math.imul(I, de)) | 0),
              (n = (n + Math.imul(q, ce)) | 0),
              (s = (s + Math.imul(q, de)) | 0),
              (i = (i + Math.imul(k, ue)) | 0),
              (n = (n + Math.imul(k, le)) | 0),
              (n = (n + Math.imul(R, ue)) | 0),
              (s = (s + Math.imul(R, le)) | 0),
              (i = (i + Math.imul(O, fe)) | 0),
              (n = (n + Math.imul(O, me)) | 0),
              (n = (n + Math.imul(C, fe)) | 0),
              (s = (s + Math.imul(C, me)) | 0));
            var je = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (je >>> 26)) | 0),
              (je &= 67108863),
              (i = Math.imul(F, ce)),
              (n = Math.imul(F, de)),
              (n = (n + Math.imul(D, ce)) | 0),
              (s = Math.imul(D, de)),
              (i = (i + Math.imul(I, ue)) | 0),
              (n = (n + Math.imul(I, le)) | 0),
              (n = (n + Math.imul(q, ue)) | 0),
              (s = (s + Math.imul(q, le)) | 0),
              (i = (i + Math.imul(k, fe)) | 0),
              (n = (n + Math.imul(k, me)) | 0),
              (n = (n + Math.imul(R, fe)) | 0),
              (s = (s + Math.imul(R, me)) | 0));
            var ke = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (ke >>> 26)) | 0),
              (ke &= 67108863),
              (i = Math.imul(F, ue)),
              (n = Math.imul(F, le)),
              (n = (n + Math.imul(D, ue)) | 0),
              (s = Math.imul(D, le)),
              (i = (i + Math.imul(I, fe)) | 0),
              (n = (n + Math.imul(I, me)) | 0),
              (n = (n + Math.imul(q, fe)) | 0),
              (s = (s + Math.imul(q, me)) | 0));
            var Re = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            ((d = (((s + (n >>> 13)) | 0) + (Re >>> 26)) | 0),
              (Re &= 67108863),
              (i = Math.imul(F, fe)),
              (n = Math.imul(F, me)),
              (n = (n + Math.imul(D, fe)) | 0),
              (s = Math.imul(D, me)));
            var Ne = (((d + i) | 0) + ((8191 & n) << 13)) | 0;
            return (
              (d = (((s + (n >>> 13)) | 0) + (Ne >>> 26)) | 0),
              (Ne &= 67108863),
              (c[0] = ge),
              (c[1] = ye),
              (c[2] = ve),
              (c[3] = be),
              (c[4] = we),
              (c[5] = Te),
              (c[6] = Me),
              (c[7] = Pe),
              (c[8] = Ae),
              (c[9] = xe),
              (c[10] = _e),
              (c[11] = $e),
              (c[12] = Se),
              (c[13] = Oe),
              (c[14] = Ce),
              (c[15] = je),
              (c[16] = ke),
              (c[17] = Re),
              (c[18] = Ne),
              0 !== d && ((c[19] = d), r.length++),
              r
            );
          };
          function b(e, t, r) {
            ((r.negative = t.negative ^ e.negative),
              (r.length = e.length + t.length));
            for (var i = 0, n = 0, s = 0; s < r.length - 1; s++) {
              var o = n;
              n = 0;
              for (
                var a = 67108863 & i,
                  c = Math.min(s, t.length - 1),
                  d = Math.max(0, s - e.length + 1);
                d <= c;
                d++
              ) {
                var h = s - d,
                  u = 0 | e.words[h],
                  l = 0 | t.words[d],
                  p = u * l,
                  f = 67108863 & p;
                ((o = (o + ((p / 67108864) | 0)) | 0),
                  (f = (f + a) | 0),
                  (a = 67108863 & f),
                  (o = (o + (f >>> 26)) | 0),
                  (n += o >>> 26),
                  (o &= 67108863));
              }
              ((r.words[s] = a), (i = o), (o = n));
            }
            return (0 !== i ? (r.words[s] = i) : r.length--, r._strip());
          }
          function w(e, t, r) {
            return b(e, t, r);
          }
          function T(e, t) {
            ((this.x = e), (this.y = t));
          }
          (Math.imul || (v = y),
            (s.prototype.mulTo = function (e, t) {
              var r,
                i = this.length + e.length;
              return (
                (r =
                  10 === this.length && 10 === e.length
                    ? v(this, e, t)
                    : i < 63
                      ? y(this, e, t)
                      : i < 1024
                        ? b(this, e, t)
                        : w(this, e, t)),
                r
              );
            }),
            (T.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), r = s.prototype._countBits(e) - 1, i = 0;
                i < e;
                i++
              )
                t[i] = this.revBin(i, r, e);
              return t;
            }),
            (T.prototype.revBin = function (e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var i = 0, n = 0; n < t; n++)
                ((i |= (1 & e) << (t - n - 1)), (e >>= 1));
              return i;
            }),
            (T.prototype.permute = function (e, t, r, i, n, s) {
              for (var o = 0; o < s; o++) ((i[o] = t[e[o]]), (n[o] = r[e[o]]));
            }),
            (T.prototype.transform = function (e, t, r, i, n, s) {
              this.permute(s, e, t, r, i, n);
              for (var o = 1; o < n; o <<= 1)
                for (
                  var a = o << 1,
                    c = Math.cos((2 * Math.PI) / a),
                    d = Math.sin((2 * Math.PI) / a),
                    h = 0;
                  h < n;
                  h += a
                )
                  for (var u = c, l = d, p = 0; p < o; p++) {
                    var f = r[h + p],
                      m = i[h + p],
                      g = r[h + p + o],
                      y = i[h + p + o],
                      v = u * g - l * y;
                    ((y = u * y + l * g),
                      (g = v),
                      (r[h + p] = f + g),
                      (i[h + p] = m + y),
                      (r[h + p + o] = f - g),
                      (i[h + p + o] = m - y),
                      p !== a &&
                        ((v = c * u - d * l), (l = c * l + d * u), (u = v)));
                  }
            }),
            (T.prototype.guessLen13b = function (e, t) {
              var r = 1 | Math.max(t, e),
                i = 1 & r,
                n = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) n++;
              return 1 << (n + 1 + i);
            }),
            (T.prototype.conjugate = function (e, t, r) {
              if (!(r <= 1))
                for (var i = 0; i < r / 2; i++) {
                  var n = e[i];
                  ((e[i] = e[r - i - 1]),
                    (e[r - i - 1] = n),
                    (n = t[i]),
                    (t[i] = -t[r - i - 1]),
                    (t[r - i - 1] = -n));
                }
            }),
            (T.prototype.normalize13b = function (e, t) {
              for (var r = 0, i = 0; i < t / 2; i++) {
                var n =
                  8192 * Math.round(e[2 * i + 1] / t) +
                  Math.round(e[2 * i] / t) +
                  r;
                ((e[i] = 67108863 & n),
                  (r = n < 67108864 ? 0 : (n / 67108864) | 0));
              }
              return e;
            }),
            (T.prototype.convert13b = function (e, t, r, n) {
              for (var s = 0, o = 0; o < t; o++)
                ((s += 0 | e[o]),
                  (r[2 * o] = 8191 & s),
                  (s >>>= 13),
                  (r[2 * o + 1] = 8191 & s),
                  (s >>>= 13));
              for (o = 2 * t; o < n; ++o) r[o] = 0;
              (i(0 === s), i(0 === (-8192 & s)));
            }),
            (T.prototype.stub = function (e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (T.prototype.mulp = function (e, t, r) {
              var i = 2 * this.guessLen13b(e.length, t.length),
                n = this.makeRBT(i),
                s = this.stub(i),
                o = new Array(i),
                a = new Array(i),
                c = new Array(i),
                d = new Array(i),
                h = new Array(i),
                u = new Array(i),
                l = r.words;
              ((l.length = i),
                this.convert13b(e.words, e.length, o, i),
                this.convert13b(t.words, t.length, d, i),
                this.transform(o, s, a, c, i, n),
                this.transform(d, s, h, u, i, n));
              for (var p = 0; p < i; p++) {
                var f = a[p] * h[p] - c[p] * u[p];
                ((c[p] = a[p] * u[p] + c[p] * h[p]), (a[p] = f));
              }
              return (
                this.conjugate(a, c, i),
                this.transform(a, c, l, s, i, n),
                this.conjugate(l, s, i),
                this.normalize13b(l, i),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r._strip()
              );
            }),
            (s.prototype.mul = function (e) {
              var t = new s(null);
              return (
                (t.words = new Array(this.length + e.length)),
                this.mulTo(e, t)
              );
            }),
            (s.prototype.mulf = function (e) {
              var t = new s(null);
              return (
                (t.words = new Array(this.length + e.length)),
                w(this, e, t)
              );
            }),
            (s.prototype.imul = function (e) {
              return this.clone().mulTo(e, this);
            }),
            (s.prototype.imuln = function (e) {
              var t = e < 0;
              (t && (e = -e), i("number" === typeof e), i(e < 67108864));
              for (var r = 0, n = 0; n < this.length; n++) {
                var s = (0 | this.words[n]) * e,
                  o = (67108863 & s) + (67108863 & r);
                ((r >>= 26),
                  (r += (s / 67108864) | 0),
                  (r += o >>> 26),
                  (this.words[n] = 67108863 & o));
              }
              return (
                0 !== r && ((this.words[n] = r), this.length++),
                (this.length = 0 === e ? 1 : this.length),
                t ? this.ineg() : this
              );
            }),
            (s.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (s.prototype.sqr = function () {
              return this.mul(this);
            }),
            (s.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (s.prototype.pow = function (e) {
              var t = g(e);
              if (0 === t.length) return new s(1);
              for (var r = this, i = 0; i < t.length; i++, r = r.sqr())
                if (0 !== t[i]) break;
              if (++i < t.length)
                for (var n = r.sqr(); i < t.length; i++, n = n.sqr())
                  0 !== t[i] && (r = r.mul(n));
              return r;
            }),
            (s.prototype.iushln = function (e) {
              i("number" === typeof e && e >= 0);
              var t,
                r = e % 26,
                n = (e - r) / 26,
                s = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var o = 0;
                for (t = 0; t < this.length; t++) {
                  var a = this.words[t] & s,
                    c = ((0 | this.words[t]) - a) << r;
                  ((this.words[t] = c | o), (o = a >>> (26 - r)));
                }
                o && ((this.words[t] = o), this.length++);
              }
              if (0 !== n) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + n] = this.words[t];
                for (t = 0; t < n; t++) this.words[t] = 0;
                this.length += n;
              }
              return this._strip();
            }),
            (s.prototype.ishln = function (e) {
              return (i(0 === this.negative), this.iushln(e));
            }),
            (s.prototype.iushrn = function (e, t, r) {
              var n;
              (i("number" === typeof e && e >= 0),
                (n = t ? (t - (t % 26)) / 26 : 0));
              var s = e % 26,
                o = Math.min((e - s) / 26, this.length),
                a = 67108863 ^ ((67108863 >>> s) << s),
                c = r;
              if (((n -= o), (n = Math.max(0, n)), c)) {
                for (var d = 0; d < o; d++) c.words[d] = this.words[d];
                c.length = o;
              }
              if (0 === o);
              else if (this.length > o)
                for (this.length -= o, d = 0; d < this.length; d++)
                  this.words[d] = this.words[d + o];
              else ((this.words[0] = 0), (this.length = 1));
              var h = 0;
              for (d = this.length - 1; d >= 0 && (0 !== h || d >= n); d--) {
                var u = 0 | this.words[d];
                ((this.words[d] = (h << (26 - s)) | (u >>> s)), (h = u & a));
              }
              return (
                c && 0 !== h && (c.words[c.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (s.prototype.ishrn = function (e, t, r) {
              return (i(0 === this.negative), this.iushrn(e, t, r));
            }),
            (s.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (s.prototype.ushln = function (e) {
              return this.clone().iushln(e);
            }),
            (s.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (s.prototype.ushrn = function (e) {
              return this.clone().iushrn(e);
            }),
            (s.prototype.testn = function (e) {
              i("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26,
                n = 1 << t;
              if (this.length <= r) return !1;
              var s = this.words[r];
              return !!(s & n);
            }),
            (s.prototype.imaskn = function (e) {
              i("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26;
              if (
                (i(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== t && r++,
                (this.length = Math.min(r, this.length)),
                0 !== t)
              ) {
                var n = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= n;
              }
              return this._strip();
            }),
            (s.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (s.prototype.iaddn = function (e) {
              return (
                i("number" === typeof e),
                i(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= e
                      ? ((this.words[0] = e - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(e),
                        (this.negative = 1),
                        this)
                    : this._iaddn(e)
              );
            }),
            (s.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                ((this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++);
              return ((this.length = Math.max(this.length, t + 1)), this);
            }),
            (s.prototype.isubn = function (e) {
              if ((i("number" === typeof e), i(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(e),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  ((this.words[t] += 67108864), (this.words[t + 1] -= 1));
              return this._strip();
            }),
            (s.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (s.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (s.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (s.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (s.prototype._ishlnsubmul = function (e, t, r) {
              var n,
                s,
                o = e.length + r;
              this._expand(o);
              var a = 0;
              for (n = 0; n < e.length; n++) {
                s = (0 | this.words[n + r]) + a;
                var c = (0 | e.words[n]) * t;
                ((s -= 67108863 & c),
                  (a = (s >> 26) - ((c / 67108864) | 0)),
                  (this.words[n + r] = 67108863 & s));
              }
              for (; n < this.length - r; n++)
                ((s = (0 | this.words[n + r]) + a),
                  (a = s >> 26),
                  (this.words[n + r] = 67108863 & s));
              if (0 === a) return this._strip();
              for (i(-1 === a), a = 0, n = 0; n < this.length; n++)
                ((s = -(0 | this.words[n]) + a),
                  (a = s >> 26),
                  (this.words[n] = 67108863 & s));
              return ((this.negative = 1), this._strip());
            }),
            (s.prototype._wordDiv = function (e, t) {
              var r = this.length - e.length,
                i = this.clone(),
                n = e,
                o = 0 | n.words[n.length - 1],
                a = this._countBits(o);
              ((r = 26 - a),
                0 !== r &&
                  ((n = n.ushln(r)),
                  i.iushln(r),
                  (o = 0 | n.words[n.length - 1])));
              var c,
                d = i.length - n.length;
              if ("mod" !== t) {
                ((c = new s(null)),
                  (c.length = d + 1),
                  (c.words = new Array(c.length)));
                for (var h = 0; h < c.length; h++) c.words[h] = 0;
              }
              var u = i.clone()._ishlnsubmul(n, 1, d);
              0 === u.negative && ((i = u), c && (c.words[d] = 1));
              for (var l = d - 1; l >= 0; l--) {
                var p =
                  67108864 * (0 | i.words[n.length + l]) +
                  (0 | i.words[n.length + l - 1]);
                ((p = Math.min((p / o) | 0, 67108863)),
                  i._ishlnsubmul(n, p, l));
                while (0 !== i.negative)
                  (p--,
                    (i.negative = 0),
                    i._ishlnsubmul(n, 1, l),
                    i.isZero() || (i.negative ^= 1));
                c && (c.words[l] = p);
              }
              return (
                c && c._strip(),
                i._strip(),
                "div" !== t && 0 !== r && i.iushrn(r),
                { div: c || null, mod: i }
              );
            }),
            (s.prototype.divmod = function (e, t, r) {
              return (
                i(!e.isZero()),
                this.isZero()
                  ? { div: new s(0), mod: new s(0) }
                  : 0 !== this.negative && 0 === e.negative
                    ? ((a = this.neg().divmod(e, t)),
                      "mod" !== t && (n = a.div.neg()),
                      "div" !== t &&
                        ((o = a.mod.neg()), r && 0 !== o.negative && o.iadd(e)),
                      { div: n, mod: o })
                    : 0 === this.negative && 0 !== e.negative
                      ? ((a = this.divmod(e.neg(), t)),
                        "mod" !== t && (n = a.div.neg()),
                        { div: n, mod: a.mod })
                      : 0 !== (this.negative & e.negative)
                        ? ((a = this.neg().divmod(e.neg(), t)),
                          "div" !== t &&
                            ((o = a.mod.neg()),
                            r && 0 !== o.negative && o.isub(e)),
                          { div: a.div, mod: o })
                        : e.length > this.length || this.cmp(e) < 0
                          ? { div: new s(0), mod: this }
                          : 1 === e.length
                            ? "div" === t
                              ? { div: this.divn(e.words[0]), mod: null }
                              : "mod" === t
                                ? {
                                    div: null,
                                    mod: new s(this.modrn(e.words[0])),
                                  }
                                : {
                                    div: this.divn(e.words[0]),
                                    mod: new s(this.modrn(e.words[0])),
                                  }
                            : this._wordDiv(e, t)
              );
              var n, o, a;
            }),
            (s.prototype.div = function (e) {
              return this.divmod(e, "div", !1).div;
            }),
            (s.prototype.mod = function (e) {
              return this.divmod(e, "mod", !1).mod;
            }),
            (s.prototype.umod = function (e) {
              return this.divmod(e, "mod", !0).mod;
            }),
            (s.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                i = e.ushrn(1),
                n = e.andln(1),
                s = r.cmp(i);
              return s < 0 || (1 === n && 0 === s)
                ? t.div
                : 0 !== t.div.negative
                  ? t.div.isubn(1)
                  : t.div.iaddn(1);
            }),
            (s.prototype.modrn = function (e) {
              var t = e < 0;
              (t && (e = -e), i(e <= 67108863));
              for (
                var r = (1 << 26) % e, n = 0, s = this.length - 1;
                s >= 0;
                s--
              )
                n = (r * n + (0 | this.words[s])) % e;
              return t ? -n : n;
            }),
            (s.prototype.modn = function (e) {
              return this.modrn(e);
            }),
            (s.prototype.idivn = function (e) {
              var t = e < 0;
              (t && (e = -e), i(e <= 67108863));
              for (var r = 0, n = this.length - 1; n >= 0; n--) {
                var s = (0 | this.words[n]) + 67108864 * r;
                ((this.words[n] = (s / e) | 0), (r = s % e));
              }
              return (this._strip(), t ? this.ineg() : this);
            }),
            (s.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (s.prototype.egcd = function (e) {
              (i(0 === e.negative), i(!e.isZero()));
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var n = new s(1),
                o = new s(0),
                a = new s(0),
                c = new s(1),
                d = 0;
              while (t.isEven() && r.isEven()) (t.iushrn(1), r.iushrn(1), ++d);
              var h = r.clone(),
                u = t.clone();
              while (!t.isZero()) {
                for (
                  var l = 0, p = 1;
                  0 === (t.words[0] & p) && l < 26;
                  ++l, p <<= 1
                );
                if (l > 0) {
                  t.iushrn(l);
                  while (l-- > 0)
                    ((n.isOdd() || o.isOdd()) && (n.iadd(h), o.isub(u)),
                      n.iushrn(1),
                      o.iushrn(1));
                }
                for (
                  var f = 0, m = 1;
                  0 === (r.words[0] & m) && f < 26;
                  ++f, m <<= 1
                );
                if (f > 0) {
                  r.iushrn(f);
                  while (f-- > 0)
                    ((a.isOdd() || c.isOdd()) && (a.iadd(h), c.isub(u)),
                      a.iushrn(1),
                      c.iushrn(1));
                }
                t.cmp(r) >= 0
                  ? (t.isub(r), n.isub(a), o.isub(c))
                  : (r.isub(t), a.isub(n), c.isub(o));
              }
              return { a: a, b: c, gcd: r.iushln(d) };
            }),
            (s.prototype._invmp = function (e) {
              (i(0 === e.negative), i(!e.isZero()));
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var n,
                o = new s(1),
                a = new s(0),
                c = r.clone();
              while (t.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var d = 0, h = 1;
                  0 === (t.words[0] & h) && d < 26;
                  ++d, h <<= 1
                );
                if (d > 0) {
                  t.iushrn(d);
                  while (d-- > 0) (o.isOdd() && o.iadd(c), o.iushrn(1));
                }
                for (
                  var u = 0, l = 1;
                  0 === (r.words[0] & l) && u < 26;
                  ++u, l <<= 1
                );
                if (u > 0) {
                  r.iushrn(u);
                  while (u-- > 0) (a.isOdd() && a.iadd(c), a.iushrn(1));
                }
                t.cmp(r) >= 0 ? (t.isub(r), o.isub(a)) : (r.isub(t), a.isub(o));
              }
              return (
                (n = 0 === t.cmpn(1) ? o : a),
                n.cmpn(0) < 0 && n.iadd(e),
                n
              );
            }),
            (s.prototype.gcd = function (e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              ((t.negative = 0), (r.negative = 0));
              for (var i = 0; t.isEven() && r.isEven(); i++)
                (t.iushrn(1), r.iushrn(1));
              do {
                while (t.isEven()) t.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var n = t.cmp(r);
                if (n < 0) {
                  var s = t;
                  ((t = r), (r = s));
                } else if (0 === n || 0 === r.cmpn(1)) break;
                t.isub(r);
              } while (1);
              return r.iushln(i);
            }),
            (s.prototype.invm = function (e) {
              return this.egcd(e).a.umod(e);
            }),
            (s.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (s.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (s.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (s.prototype.bincn = function (e) {
              i("number" === typeof e);
              var t = e % 26,
                r = (e - t) / 26,
                n = 1 << t;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= n), this);
              for (var s = n, o = r; 0 !== s && o < this.length; o++) {
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
            (s.prototype.cmpn = function (e) {
              var t,
                r = e < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) t = 1;
              else {
                (r && (e = -e), i(e <= 67108863, "Number is too big"));
                var n = 0 | this.words[0];
                t = n === e ? 0 : n < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (s.prototype.cmp = function (e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (s.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var i = 0 | this.words[r],
                  n = 0 | e.words[r];
                if (i !== n) {
                  i < n ? (t = -1) : i > n && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (s.prototype.gtn = function (e) {
              return 1 === this.cmpn(e);
            }),
            (s.prototype.gt = function (e) {
              return 1 === this.cmp(e);
            }),
            (s.prototype.gten = function (e) {
              return this.cmpn(e) >= 0;
            }),
            (s.prototype.gte = function (e) {
              return this.cmp(e) >= 0;
            }),
            (s.prototype.ltn = function (e) {
              return -1 === this.cmpn(e);
            }),
            (s.prototype.lt = function (e) {
              return -1 === this.cmp(e);
            }),
            (s.prototype.lten = function (e) {
              return this.cmpn(e) <= 0;
            }),
            (s.prototype.lte = function (e) {
              return this.cmp(e) <= 0;
            }),
            (s.prototype.eqn = function (e) {
              return 0 === this.cmpn(e);
            }),
            (s.prototype.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (s.red = function (e) {
              return new S(e);
            }),
            (s.prototype.toRed = function (e) {
              return (
                i(!this.red, "Already a number in reduction context"),
                i(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (s.prototype.fromRed = function () {
              return (
                i(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (s.prototype._forceRed = function (e) {
              return ((this.red = e), this);
            }),
            (s.prototype.forceRed = function (e) {
              return (
                i(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (s.prototype.redAdd = function (e) {
              return (
                i(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (s.prototype.redIAdd = function (e) {
              return (
                i(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (s.prototype.redSub = function (e) {
              return (
                i(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (s.prototype.redISub = function (e) {
              return (
                i(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (s.prototype.redShl = function (e) {
              return (
                i(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (s.prototype.redMul = function (e) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (s.prototype.redIMul = function (e) {
              return (
                i(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (s.prototype.redSqr = function () {
              return (
                i(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (s.prototype.redISqr = function () {
              return (
                i(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (s.prototype.redSqrt = function () {
              return (
                i(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (s.prototype.redInvm = function () {
              return (
                i(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (s.prototype.redNeg = function () {
              return (
                i(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (s.prototype.redPow = function (e) {
              return (
                i(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            }));
          var M = { k256: null, p224: null, p192: null, p25519: null };
          function P(e, t) {
            ((this.name = e),
              (this.p = new s(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new s(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function A() {
            P.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function x() {
            P.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function _() {
            P.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function $() {
            P.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function S(e) {
            if ("string" === typeof e) {
              var t = s._prime(e);
              ((this.m = t.p), (this.prime = t));
            } else
              (i(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null));
          }
          function O(e) {
            (S.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new s(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((P.prototype._tmp = function () {
            var e = new s(null);
            return ((e.words = new Array(Math.ceil(this.n / 13))), e);
          }),
            (P.prototype.ireduce = function (e) {
              var t,
                r = e;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (t = r.bitLength()));
              } while (t > this.n);
              var i = t < this.n ? -1 : r.ucmp(this.p);
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
            (P.prototype.split = function (e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (P.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            n(A, P),
            (A.prototype.split = function (e, t) {
              for (
                var r = 4194303, i = Math.min(e.length, 9), n = 0;
                n < i;
                n++
              )
                t.words[n] = e.words[n];
              if (((t.length = i), e.length <= 9))
                return ((e.words[0] = 0), void (e.length = 1));
              var s = e.words[9];
              for (t.words[t.length++] = s & r, n = 10; n < e.length; n++) {
                var o = 0 | e.words[n];
                ((e.words[n - 10] = ((o & r) << 4) | (s >>> 22)), (s = o));
              }
              ((s >>>= 22),
                (e.words[n - 10] = s),
                0 === s && e.length > 10 ? (e.length -= 10) : (e.length -= 9));
            }),
            (A.prototype.imulK = function (e) {
              ((e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2));
              for (var t = 0, r = 0; r < e.length; r++) {
                var i = 0 | e.words[r];
                ((t += 977 * i),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * i + ((t / 67108864) | 0)));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            n(x, P),
            n(_, P),
            n($, P),
            ($.prototype.imulK = function (e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var i = 19 * (0 | e.words[r]) + t,
                  n = 67108863 & i;
                ((i >>>= 26), (e.words[r] = n), (t = i));
              }
              return (0 !== t && (e.words[e.length++] = t), e);
            }),
            (s._prime = function (e) {
              if (M[e]) return M[e];
              var t;
              if ("k256" === e) t = new A();
              else if ("p224" === e) t = new x();
              else if ("p192" === e) t = new _();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new $();
              }
              return ((M[e] = t), t);
            }),
            (S.prototype._verify1 = function (e) {
              (i(0 === e.negative, "red works only with positives"),
                i(e.red, "red works only with red numbers"));
            }),
            (S.prototype._verify2 = function (e, t) {
              (i(
                0 === (e.negative | t.negative),
                "red works only with positives",
              ),
                i(e.red && e.red === t.red, "red works only with red numbers"));
            }),
            (S.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : (h(e, e.umod(this.m)._forceRed(this)), e);
            }),
            (S.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (S.prototype.add = function (e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (S.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (S.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (S.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (S.prototype.shl = function (e, t) {
              return (this._verify1(e), this.imod(e.ushln(t)));
            }),
            (S.prototype.imul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.imul(t)));
            }),
            (S.prototype.mul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.mul(t)));
            }),
            (S.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (S.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (S.prototype.sqrt = function (e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((i(t % 2 === 1), 3 === t)) {
                var r = this.m.add(new s(1)).iushrn(2);
                return this.pow(e, r);
              }
              var n = this.m.subn(1),
                o = 0;
              while (!n.isZero() && 0 === n.andln(1)) (o++, n.iushrn(1));
              i(!n.isZero());
              var a = new s(1).toRed(this),
                c = a.redNeg(),
                d = this.m.subn(1).iushrn(1),
                h = this.m.bitLength();
              h = new s(2 * h * h).toRed(this);
              while (0 !== this.pow(h, d).cmp(c)) h.redIAdd(c);
              var u = this.pow(h, n),
                l = this.pow(e, n.addn(1).iushrn(1)),
                p = this.pow(e, n),
                f = o;
              while (0 !== p.cmp(a)) {
                for (var m = p, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
                i(g < f);
                var y = this.pow(u, new s(1).iushln(f - g - 1));
                ((l = l.redMul(y)),
                  (u = y.redSqr()),
                  (p = p.redMul(u)),
                  (f = g));
              }
              return l;
            }),
            (S.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (S.prototype.pow = function (e, t) {
              if (t.isZero()) return new s(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = 4,
                i = new Array(1 << r);
              ((i[0] = new s(1).toRed(this)), (i[1] = e));
              for (var n = 2; n < i.length; n++) i[n] = this.mul(i[n - 1], e);
              var o = i[0],
                a = 0,
                c = 0,
                d = t.bitLength() % 26;
              for (0 === d && (d = 26), n = t.length - 1; n >= 0; n--) {
                for (var h = t.words[n], u = d - 1; u >= 0; u--) {
                  var l = (h >> u) & 1;
                  (o !== i[0] && (o = this.sqr(o)),
                    0 !== l || 0 !== a
                      ? ((a <<= 1),
                        (a |= l),
                        c++,
                        (c === r || (0 === n && 0 === u)) &&
                          ((o = this.mul(o, i[a])), (c = 0), (a = 0)))
                      : (c = 0));
                }
                d = 26;
              }
              return o;
            }),
            (S.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (S.prototype.convertFrom = function (e) {
              var t = e.clone();
              return ((t.red = null), t);
            }),
            (s.mont = function (e) {
              return new O(e);
            }),
            n(O, S),
            (O.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (O.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return ((t.red = null), t);
            }),
            (O.prototype.imul = function (e, t) {
              if (e.isZero() || t.isZero())
                return ((e.words[0] = 0), (e.length = 1), e);
              var r = e.imul(t),
                i = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                n = r.isub(i).iushrn(this.shift),
                s = n;
              return (
                n.cmp(this.m) >= 0
                  ? (s = n.isub(this.m))
                  : n.cmpn(0) < 0 && (s = n.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (O.prototype.mul = function (e, t) {
              if (e.isZero() || t.isZero()) return new s(0)._forceRed(this);
              var r = e.mul(t),
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
            (O.prototype.invm = function (e) {
              var t = this.imod(e._invmp(this.m).mul(this.r2));
              return t._forceRed(this);
            }));
        })(e, this);
      }).call(this, r(20)(e));
    },
    4549: function (e, t, r) {
      "use strict";
      var i = r(2794),
        n = r(800);
      function s(e) {
        return e.dividedBy(1e6);
      }
      function o(e) {
        var t = Object.keys(e)[0],
          r = e[t];
        return Object.assign({}, r, {
          diffType: t,
          entryType: r.LedgerEntryType,
          ledgerIndex: r.LedgerIndex,
          newFields: r.NewFields || {},
          finalFields: r.FinalFields || {},
          previousFields: r.PreviousFields || {},
        });
      }
      function a(e) {
        return e.AffectedNodes ? e.AffectedNodes.map(o) : [];
      }
      function c(e) {
        if (void 0 !== e)
          return "string" === typeof e
            ? { currency: "XRP", value: s(new n(e)).toString() }
            : { currency: e.currency, counterparty: e.issuer, value: e.value };
      }
      function d(e) {
        var t = ["Account", "Owner", "Destination", "Issuer", "Target"];
        return i.includes(t, e);
      }
      function h(e) {
        var t = ["LowLimit", "HighLimit", "TakerPays", "TakerGets"];
        return i.includes(t, e);
      }
      function u(e) {
        var t = [];
        return (
          i.forEach(a(e), function (e) {
            var r = "CreatedNode" === e.diffType ? e.newFields : e.finalFields;
            i.forEach(r, function (e, r) {
              d(r) ? t.push(e) : h(r) && e.issuer && t.push(e.issuer);
            });
          }),
          i.uniq(t)
        );
      }
      e.exports = {
        dropsToXRP: s,
        normalizeNodes: a,
        parseCurrencyAmount: c,
        getAffectedAccounts: u,
      };
    },
    4788: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isValidSecret =
          t.iso8601ToRippleTime =
          t.rippleTimeToISO8601 =
          t.removeUndefined =
          t.convertKeysFromSnakeCaseToCamelCase =
          t.toRippledAmount =
          t.xrpToDrops =
          t.dropsToXrp =
            void 0));
      const a = s(r(2794)),
        c = o(r(800)),
        d = r(3602),
        h = r(3603),
        u = r(3124);
      function l(e) {
        try {
          return (d.deriveKeypair(e), !0);
        } catch (t) {
          return !1;
        }
      }
      function p(e) {
        if ("string" === typeof e) {
          if (!e.match(/^-?[0-9]*\.?[0-9]*$/))
            throw new h.ValidationError(
              `dropsToXrp: invalid value '${e}', should be a number matching (^-?[0-9]*\\.?[0-9]*$).`,
            );
          if ("." === e)
            throw new h.ValidationError(
              `dropsToXrp: invalid value '${e}', should be a BigNumber or string-encoded number.`,
            );
        }
        if (((e = new c.default(e).toString(10)), e.includes(".")))
          throw new h.ValidationError(
            `dropsToXrp: value '${e}' has too many decimal places.`,
          );
        if (!e.match(/^-?[0-9]+$/))
          throw new h.ValidationError(
            `dropsToXrp: failed sanity check - value '${e}', does not match (^-?[0-9]+$).`,
          );
        return new c.default(e).dividedBy(1e6).toString(10);
      }
      function f(e) {
        if ("string" === typeof e) {
          if (!e.match(/^-?[0-9]*\.?[0-9]*$/))
            throw new h.ValidationError(
              `xrpToDrops: invalid value '${e}', should be a number matching (^-?[0-9]*\\.?[0-9]*$).`,
            );
          if ("." === e)
            throw new h.ValidationError(
              `xrpToDrops: invalid value '${e}', should be a BigNumber or string-encoded number.`,
            );
        }
        if (((e = new c.default(e).toString(10)), !e.match(/^-?[0-9.]+$/)))
          throw new h.ValidationError(
            `xrpToDrops: failed sanity check - value '${e}', does not match (^-?[0-9.]+$).`,
          );
        const t = e.split(".");
        if (t.length > 2)
          throw new h.ValidationError(
            `xrpToDrops: failed sanity check - value '${e}' has too many decimal points.`,
          );
        const r = t[1] || "0";
        if (r.length > 6)
          throw new h.ValidationError(
            `xrpToDrops: value '${e}' has too many decimal places.`,
          );
        return new c.default(e)
          .times(1e6)
          .integerValue(c.default.ROUND_FLOOR)
          .toString(10);
      }
      function m(e) {
        if ("string" === typeof e) return e;
        if ("XRP" === e.currency) return f(e.value);
        if ("drops" === e.currency) return e.value;
        let t = e.counterparty || e.issuer,
          r = !1;
        try {
          ({ classicAddress: t, tag: r } = u.xAddressToClassicAddress(t));
        } catch (i) {}
        if (!1 !== r)
          throw new h.ValidationError("Issuer X-address includes a tag");
        return { currency: e.currency, issuer: t, value: e.value };
      }
      function g(e) {
        if ("object" === typeof e) {
          const t = Array.isArray(e) ? [] : {};
          let r;
          return Object.entries(e).reduce((e, t) => {
            let [i, n] = t;
            r = i;
            const s = /([a-zA-Z]_[a-zA-Z])/g;
            return (
              s.test(i) && (r = i.replace(s, (e) => e[0] + e[2].toUpperCase())),
              (e[r] = g(n)),
              e
            );
          }, t);
        }
        return e;
      }
      function y(e) {
        return a.omitBy(e, (e) => null == e);
      }
      function v(e) {
        return 1e3 * (e + 946684800);
      }
      function b(e) {
        return Math.round(e / 1e3) - 946684800;
      }
      function w(e) {
        return new Date(v(e)).toISOString();
      }
      function T(e) {
        return b(Date.parse(e));
      }
      ((t.isValidSecret = l),
        (t.dropsToXrp = p),
        (t.xrpToDrops = f),
        (t.toRippledAmount = m),
        (t.convertKeysFromSnakeCaseToCamelCase = g),
        (t.removeUndefined = y),
        (t.rippleTimeToISO8601 = w),
        (t.iso8601ToRippleTime = T));
    },
    5539: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.accountPublicFromPublicGenerator = t.derivePrivateKey = void 0));
      const i = r(795),
        n = r(5540),
        s = i.ec("secp256k1");
      function o(e, t) {
        const r = s.curve.n;
        for (let i = 0; i <= 4294967295; i++) {
          const s = new n.default().add(e);
          (void 0 !== t && s.addU32(t), s.addU32(i));
          const o = s.first256BN();
          if (o.cmpn(0) > 0 && o.cmp(r) < 0) return o;
        }
        throw new Error("impossible unicorn ;)");
      }
      function a(e, t) {
        void 0 === t && (t = {});
        const r = t.validator,
          i = s.curve.n,
          n = o(e);
        if (r) return n;
        const a = s.g.mul(n),
          c = t.accountIndex || 0;
        return o(a.encodeCompressed(), c).add(n).mod(i);
      }
      function c(e) {
        const t = s.curve.decodePoint(e),
          r = o(e, 0),
          i = s.g.mul(r),
          n = t.add(i);
        return n.encodeCompressed();
      }
      ((t.derivePrivateKey = a), (t.accountPublicFromPublicGenerator = c));
    },
    5540: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(43),
        n = r(4547);
      class Sha512 {
        constructor() {
          this.hash = i.sha512();
        }
        add(e) {
          return (this.hash.update(e), this);
        }
        addU32(e) {
          return this.add([
            (e >>> 24) & 255,
            (e >>> 16) & 255,
            (e >>> 8) & 255,
            255 & e,
          ]);
        }
        finish() {
          return this.hash.digest();
        }
        first256() {
          return this.finish().slice(0, 32);
        }
        first256BN() {
          return new n(this.first256());
        }
      }
      t.default = Sha512;
    },
    5542: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.computePublicKeyHash = t.hexToBytes = t.bytesToHex = void 0));
        const i = r(229),
          n = r(43),
          s = r(4547);
        function o(e) {
          return e
            .map((e) => {
              const t = e.toString(16).toUpperCase();
              return t.length > 1 ? t : "0" + t;
            })
            .join("");
        }
        function a(e) {
          return (
            i(e.length % 2 === 0),
            new s(e, 16).toArray(null, e.length / 2)
          );
        }
        function c(t) {
          const r = n.sha256().update(t).digest(),
            i = n.ripemd160().update(r).digest();
          return e.from(i);
        }
        ((t.bytesToHex = o), (t.hexToBytes = a), (t.computePublicKeyHash = c));
      }).call(this, r(2).Buffer);
    },
    5543: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isValidAddress = t.isValidSecret = t.schemaValidate = void 0));
      const o = s(r(2794)),
        a = s(r(229)),
        { Validator: c } = r(10191),
        d = r(3603),
        h = r(3124),
        u = r(4788);
      function l() {
        const e = [
            r(10194),
            r(10195),
            r(10196),
            r(10197),
            r(10198),
            r(10199),
            r(10200),
            r(10201),
            r(10202),
            r(10203),
            r(10204),
            r(10205),
            r(10206),
            r(10207),
            r(10208),
            r(10209),
            r(10210),
            r(10211),
            r(10212),
            r(10213),
            r(10214),
            r(10215),
            r(10216),
            r(10217),
            r(10218),
            r(10219),
            r(10220),
            r(10221),
            r(10222),
            r(10223),
            r(10224),
            r(10225),
            r(10226),
            r(10227),
            r(10228),
            r(10229),
            r(10230),
            r(10231),
            r(10232),
            r(10233),
            r(10234),
            r(10235),
            r(10236),
            r(10237),
            r(10238),
            r(10239),
            r(10240),
            r(10241),
            r(10242),
            r(10243),
            r(10244),
            r(10245),
            r(10246),
            r(10247),
            r(10248),
            r(10249),
            r(10250),
            r(10251),
            r(10252),
            r(10253),
            r(10254),
            r(10255),
            r(10256),
            r(10257),
            r(10258),
            r(10259),
            r(10260),
            r(10261),
            r(10262),
            r(10263),
            r(10264),
            r(10265),
            r(10266),
            r(10267),
            r(10268),
            r(10269),
            r(10270),
            r(10271),
            r(10272),
            r(10273),
            r(10274),
            r(10275),
            r(10276),
            r(10277),
            r(10278),
            r(10279),
            r(10280),
            r(10281),
            r(10282),
            r(10283),
            r(10284),
            r(10285),
            r(10286),
            r(10287),
            r(10288),
            r(10289),
            r(10290),
            r(10291),
            r(10292),
            r(10293),
            r(10294),
            r(10295),
            r(10296),
            r(10297),
            r(10298),
            r(10299),
            r(10300),
            r(10301),
            r(10302),
            r(10303),
            r(10304),
            r(10305),
            r(10306),
            r(10307),
            r(10308),
            r(10309),
          ],
          t = e.map((e) => e.title),
          i = Object.keys(o.pickBy(o.countBy(t), (e) => e > 1));
        a.ok(0 === i.length, "Duplicate schemas for: " + i);
        const n = new c();
        return (
          (n.customFormats.xAddress = function (e) {
            return null == e || h.isValidXAddress(e);
          }),
          (n.customFormats.classicAddress = function (e) {
            return null == e || m(e);
          }),
          (n.customFormats.secret = function (e) {
            return null == e || u.isValidSecret(e);
          }),
          e.forEach((e) => n.addSchema(e, "/" + e.title)),
          n
        );
      }
      Object.defineProperty(t, "isValidSecret", {
        enumerable: !0,
        get: function () {
          return u.isValidSecret;
        },
      });
      const p = l();
      function f(e, t) {
        const r = p.getSchema("/" + e);
        if (null == r) throw new d.ValidationError("no schema for " + e);
        const i = p.validate(t, r);
        if (!i.valid) throw new d.ValidationError(i.errors.join());
      }
      function m(e) {
        return h.isValidXAddress(e) || h.isValidClassicAddress(e);
      }
      ((t.schemaValidate = f), (t.isValidAddress = m));
    },
    6625: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          },
        o =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            function n(e) {
              return e instanceof r
                ? e
                : new r(function (t) {
                    t(e);
                  });
            }
            return new (r || (r = Promise))(function (r, s) {
              function o(e) {
                try {
                  c(i.next(e));
                } catch (t) {
                  s(t);
                }
              }
              function a(e) {
                try {
                  c(i["throw"](e));
                } catch (t) {
                  s(t);
                }
              }
              function c(e) {
                e.done ? r(e.value) : n(e.value).then(o, a);
              }
              c((i = i.apply(e, t || [])).next());
            });
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RippleAPI = void 0));
      const c = r(52),
        d = r(2793),
        h = r(10314),
        u = a(r(6629)),
        l = a(r(10338)),
        p = a(r(10351)),
        f = a(r(10353)),
        m = a(r(10354)),
        g = a(r(10355)),
        y = a(r(10357)),
        v = r(10359),
        b = r(10361),
        w = a(r(10362)),
        T = a(r(10363)),
        M = a(r(10364)),
        P = a(r(10366)),
        A = a(r(10367)),
        x = a(r(10368)),
        _ = a(r(10369)),
        $ = a(r(10370)),
        S = a(r(10371)),
        O = a(r(10372)),
        C = a(r(10373)),
        j = a(r(10374)),
        k = a(r(10375)),
        R = a(r(10376)),
        N = a(r(10377)),
        I = a(r(10378)),
        q = a(r(10379)),
        E = a(r(10380)),
        F = a(r(10381)),
        D = a(r(10382)),
        L = a(r(10383)),
        V = r(6641),
        B = r(6642),
        J = a(r(6643)),
        X = a(r(6644)),
        H = a(r(6645)),
        z = a(r(10385)),
        K = a(r(6628)),
        U = s(r(3604)),
        G = s(r(3004)),
        Z = s(r(5543)),
        W = r(6627),
        Y = r(3604),
        Q = r(3124),
        ee = r(3942),
        te = a(r(10387));
      function re(e) {
        switch (e) {
          case "account_offers":
          case "book_offers":
            return "offers";
          case "account_lines":
            return "lines";
          default:
            return;
        }
      }
      class RippleAPI extends c.EventEmitter {
        constructor(e) {
          (void 0 === e && (e = {}),
            super(),
            (this.generateAddress = V.generateAddress),
            (this.generateXAddress = V.generateXAddress),
            (this.connect = h.connect),
            (this.disconnect = h.disconnect),
            (this.isConnected = h.isConnected),
            (this.getServerInfo = W.getServerInfo),
            (this.getFee = W.getFee),
            (this.getLedgerVersion = h.getLedgerVersion),
            (this.getTransaction = u.default),
            (this.getTransactions = l.default),
            (this.getTrustlines = p.default),
            (this.getBalances = f.default),
            (this.getBalanceSheet = m.default),
            (this.getPaths = g.default),
            (this.getOrderbook = v.getOrderbook),
            (this.getOrders = y.default),
            (this.getSettings = b.getSettings),
            (this.getAccountInfo = w.default),
            (this.getAccountObjects = T.default),
            (this.getPaymentChannel = M.default),
            (this.getLedger = z.default),
            (this.parseAccountFlags = b.parseAccountFlags),
            (this.preparePayment = P.default),
            (this.prepareTrustline = A.default),
            (this.prepareOrder = x.default),
            (this.prepareOrderCancellation = _.default),
            (this.prepareEscrowCreation = $.default),
            (this.prepareEscrowExecution = S.default),
            (this.prepareEscrowCancellation = O.default),
            (this.preparePaymentChannelCreate = C.default),
            (this.preparePaymentChannelFund = j.default),
            (this.preparePaymentChannelClaim = k.default),
            (this.prepareCheckCreate = R.default),
            (this.prepareCheckCash = I.default),
            (this.prepareCheckCancel = N.default),
            (this.prepareTicketCreate = E.default),
            (this.prepareSettings = q.default),
            (this.sign = F.default),
            (this.combine = D.default),
            (this.submit = L.default),
            (this.deriveKeypair = B.deriveKeypair),
            (this.deriveAddress = B.deriveAddress),
            (this.computeLedgerHash = J.default),
            (this.signPaymentChannelClaim = X.default),
            (this.verifyPaymentChannelClaim = H.default),
            (this.generateFaucetWallet = te.default),
            (this.errors = d.errors),
            (this.xrpToDrops = d.xrpToDrops),
            (this.dropsToXrp = d.dropsToXrp),
            (this.rippleTimeToISO8601 = d.rippleTimeToISO8601),
            (this.iso8601ToRippleTime = d.iso8601ToRippleTime),
            (this.txFlags = d.txFlags),
            (this.isValidAddress = Z.isValidAddress),
            (this.isValidSecret = Z.isValidSecret),
            d.validate.apiOptions(e),
            (this._feeCushion = e.feeCushion || 1.2),
            (this._maxFeeXRP = e.maxFeeXRP || "2"));
          const t = e.server;
          null != t
            ? ((this.connection = new d.Connection(t, e)),
              this.connection.on("ledgerClosed", (e) => {
                this.emit("ledger", h.formatLedgerClose(e));
              }),
              this.connection.on("error", (e, t, r) => {
                this.emit("error", e, t, r);
              }),
              this.connection.on("connected", () => {
                this.emit("connected");
              }),
              this.connection.on("disconnected", (e) => {
                let t = e;
                ((1005 !== t && 4e3 !== t) || (t = 1e3),
                  this.emit("disconnected", t));
              }))
            : (this.connection = new d.Connection(null, e));
        }
        request(e, t) {
          return (
            void 0 === t && (t = {}),
            o(this, void 0, void 0, function* () {
              return this.connection.request(
                Object.assign(Object.assign({}, t), {
                  command: e,
                  account: t.account
                    ? d.ensureClassicAddress(t.account)
                    : void 0,
                }),
              );
            })
          );
        }
        hasNextPage(e) {
          return !!e.marker;
        }
        requestNextPage(e, t, r) {
          return (
            void 0 === t && (t = {}),
            o(this, void 0, void 0, function* () {
              if (!r.marker)
                return Promise.reject(
                  new d.errors.NotFoundError(
                    "response does not have a next page",
                  ),
                );
              const i = Object.assign({}, t, { marker: r.marker });
              return this.request(e, i);
            })
          );
        }
        prepareTransaction(e, t) {
          return (
            void 0 === t && (t = {}),
            o(this, void 0, void 0, function* () {
              return G.prepareTransaction(e, this, t);
            })
          );
        }
        convertStringToHex(e) {
          return G.convertStringToHex(e);
        }
        _requestAll(e, t, r) {
          return (
            void 0 === t && (t = {}),
            void 0 === r && (r = {}),
            o(this, void 0, void 0, function* () {
              const i = r.collect || re(e);
              if (!i)
                throw new d.errors.ValidationError(
                  "no collect key for command " + e,
                );
              const n = null != t.limit ? t.limit : 1 / 0;
              let s,
                o = 0,
                a = t.marker;
              const c = [];
              do {
                const r = Y.clamp(n - o, 10, 400),
                  d = Object.assign(Object.assign({}, t), {
                    limit: r,
                    marker: a,
                  }),
                  h = yield this.request(e, d),
                  u = h[i];
                ((a = h["marker"]), c.push(h));
                const l = Array.isArray(u);
                l ? ((o += u.length), (s = u.length)) : (s = 0);
              } while (a && o < n && 0 !== s);
              return c;
            })
          );
        }
      }
      ((t.RippleAPI = RippleAPI),
        (RippleAPI._PRIVATE = {
          validate: d.validate,
          RangeSet: K.default,
          ledgerUtils: U,
          schemaValidator: Z,
        }),
        (RippleAPI.renameCounterpartyToIssuer = Y.renameCounterpartyToIssuer),
        (RippleAPI.formatBidsAndAsks = v.formatBidsAndAsks),
        (RippleAPI.deriveXAddress = B.deriveXAddress),
        (RippleAPI.deriveClassicAddress = B.deriveAddress),
        (RippleAPI.classicAddressToXAddress = Q.classicAddressToXAddress),
        (RippleAPI.xAddressToClassicAddress = Q.xAddressToClassicAddress),
        (RippleAPI.isValidXAddress = Q.isValidXAddress),
        (RippleAPI.isValidClassicAddress = Q.isValidClassicAddress),
        (RippleAPI.encodeSeed = Q.encodeSeed),
        (RippleAPI.decodeSeed = Q.decodeSeed),
        (RippleAPI.encodeAccountID = Q.encodeAccountID),
        (RippleAPI.decodeAccountID = Q.decodeAccountID),
        (RippleAPI.encodeNodePublic = Q.encodeNodePublic),
        (RippleAPI.decodeNodePublic = Q.decodeNodePublic),
        (RippleAPI.encodeAccountPublic = Q.encodeAccountPublic),
        (RippleAPI.decodeAccountPublic = Q.decodeAccountPublic),
        (RippleAPI.encodeXAddress = Q.encodeXAddress),
        (RippleAPI.decodeXAddress = Q.decodeXAddress),
        (RippleAPI.computeBinaryTransactionHash =
          ee.computeBinaryTransactionHash),
        (RippleAPI.computeTransactionHash = ee.computeTransactionHash),
        (RippleAPI.computeBinaryTransactionSigningHash =
          ee.computeBinaryTransactionSigningHash),
        (RippleAPI.computeAccountLedgerObjectID =
          ee.computeAccountLedgerObjectID),
        (RippleAPI.computeSignerListLedgerObjectID =
          ee.computeSignerListLedgerObjectID),
        (RippleAPI.computeOrderID = ee.computeOrderID),
        (RippleAPI.computeTrustlineHash = ee.computeTrustlineHash),
        (RippleAPI.computeTransactionTreeHash = ee.computeTransactionTreeHash),
        (RippleAPI.computeStateTreeHash = ee.computeStateTreeHash),
        (RippleAPI.computeLedgerHash = J.default),
        (RippleAPI.computeEscrowHash = ee.computeEscrowHash),
        (RippleAPI.computePaymentChannelHash = ee.computePaymentChannelHash),
        (RippleAPI.accountSetFlags = d.constants.AccountSetFlags));
    },
    6626: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.txFlagIndices = t.txFlags = void 0));
      const i = {
        Universal: { FullyCanonicalSig: 2147483648 },
        AccountSet: {
          RequireDestTag: 65536,
          OptionalDestTag: 131072,
          RequireAuth: 262144,
          OptionalAuth: 524288,
          DisallowXRP: 1048576,
          AllowXRP: 2097152,
        },
        TrustSet: {
          SetAuth: 65536,
          NoRipple: 131072,
          SetNoRipple: 131072,
          ClearNoRipple: 262144,
          SetFreeze: 1048576,
          ClearFreeze: 2097152,
        },
        OfferCreate: {
          Passive: 65536,
          ImmediateOrCancel: 131072,
          FillOrKill: 262144,
          Sell: 524288,
        },
        Payment: {
          NoRippleDirect: 65536,
          PartialPayment: 131072,
          LimitQuality: 262144,
        },
        PaymentChannelClaim: { Renew: 65536, Close: 131072 },
      };
      t.txFlags = i;
      const n = {
        AccountSet: {
          asfRequireDest: 1,
          asfRequireAuth: 2,
          asfDisallowXRP: 3,
          asfDisableMaster: 4,
          asfAccountTxnID: 5,
          asfNoFreeze: 6,
          asfGlobalFreeze: 7,
          asfDefaultRipple: 8,
          asfDepositAuth: 9,
        },
      };
      t.txFlagIndices = n;
    },
    6627: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            function n(e) {
              return e instanceof r
                ? e
                : new r(function (t) {
                    t(e);
                  });
            }
            return new (r || (r = Promise))(function (r, s) {
              function o(e) {
                try {
                  c(i.next(e));
                } catch (t) {
                  s(t);
                }
              }
              function a(e) {
                try {
                  c(i["throw"](e));
                } catch (t) {
                  s(t);
                }
              }
              function c(e) {
                e.done ? r(e.value) : n(e.value).then(o, a);
              }
              c((i = i.apply(e, t || [])).next());
            });
          },
        n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFee = t.getServerInfo = void 0));
      const s = r(4788),
        o = n(r(800));
      function a(e, t) {
        Object.entries(t).forEach((t) => {
          const [r, i] = t;
          ((e[i] = e[r]), delete e[r]);
        });
      }
      function c() {
        return this.request("server_info").then((e) => {
          const t = s.convertKeysFromSnakeCaseToCamelCase(e.info);
          return (
            a(t, { hostid: "hostID" }),
            t.validatedLedger &&
              (a(t.validatedLedger, {
                baseFeeXrp: "baseFeeXRP",
                reserveBaseXrp: "reserveBaseXRP",
                reserveIncXrp: "reserveIncrementXRP",
                seq: "ledgerVersion",
              }),
              (t.validatedLedger.baseFeeXRP =
                t.validatedLedger.baseFeeXRP.toString()),
              (t.validatedLedger.reserveBaseXRP =
                t.validatedLedger.reserveBaseXRP.toString()),
              (t.validatedLedger.reserveIncrementXRP =
                t.validatedLedger.reserveIncrementXRP.toString())),
            t
          );
        });
      }
      function d(e) {
        return i(this, void 0, void 0, function* () {
          (null == e && (e = this._feeCushion), null == e && (e = 1.2));
          const t = (yield this.request("server_info")).info,
            r = new o.default(t.validated_ledger.base_fee_xrp);
          null == t.load_factor && (t.load_factor = 1);
          let i = r.times(t.load_factor).times(e);
          return (
            (i = o.default.min(i, this._maxFeeXRP)),
            new o.default(i.toFixed(6)).toString(10)
          );
        });
      }
      ((t.getServerInfo = c), (t.getFee = d));
    },
    6628: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, i) {
                (void 0 === i && (i = r),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, i) {
                (void 0 === i && (i = r), (e[i] = t[r]));
              }),
        n =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e["default"] = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  i(t, e, r);
            return (n(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = s(r(2794)),
        a = s(r(229));
      function c(e) {
        const t = [[-1 / 0, -1 / 0]];
        return (
          o
            .sortBy(e, (e) => e[0])
            .forEach((e) => {
              const r = t.pop();
              e[0] <= r[1] + 1
                ? t.push([r[0], Math.max(e[1], r[1])])
                : (t.push(r), t.push(e));
            }),
          t.slice(1)
        );
      }
      class RangeSet {
        constructor() {
          this.reset();
        }
        reset() {
          this.ranges = [];
        }
        serialize() {
          return this.ranges
            .map((e) => e[0].toString() + "-" + e[1].toString())
            .join(",");
        }
        addRange(e, t) {
          (a.ok(e <= t, `invalid range ${e} <= ${t}`),
            (this.ranges = c(this.ranges.concat([[e, t]]))));
        }
        addValue(e) {
          this.addRange(e, e);
        }
        parseAndAddRanges(e) {
          const t = e.split(",");
          t.forEach((e) => {
            const t = e.split("-").map(Number);
            this.addRange(t[0], 1 === t.length ? t[0] : t[1]);
          });
        }
        containsRange(e, t) {
          return this.ranges.some((r) => r[0] <= e && r[1] >= t);
        }
        containsValue(e) {
          return this.containsRange(e, e);
        }
      }
      t.default = RangeSet;
    },
    6630: function (e, t, r) {
      "use strict";
      var i = r(2794),
        n = r(800),
        s = r(4549).normalizeNodes,
        o = r(4549).dropsToXRP;
      function a(e) {
        var t = i.groupBy(e, function (e) {
          return e.address;
        });
        return i.mapValues(t, function (e) {
          return i.map(e, function (e) {
            return e.balance;
          });
        });
      }
      function c(e) {
        return new n(e.value || e);
      }
      function d(e) {
        var t = null;
        return (
          e.newFields.Balance
            ? (t = c(e.newFields.Balance))
            : e.previousFields.Balance &&
              e.finalFields.Balance &&
              (t = c(e.finalFields.Balance).minus(c(e.previousFields.Balance))),
          null === t || t.isZero() ? null : t
        );
      }
      function h(e) {
        return e.newFields.Balance
          ? c(e.newFields.Balance)
          : e.finalFields.Balance
            ? c(e.finalFields.Balance)
            : null;
      }
      function u(e, t) {
        var r = t(e);
        return null === r
          ? null
          : {
              address: e.finalFields.Account || e.newFields.Account,
              balance: {
                counterparty: "",
                currency: "XRP",
                value: o(r).toString(),
              },
            };
      }
      function l(e) {
        var t = new n(e.balance.value).negated();
        return {
          address: e.balance.counterparty,
          balance: {
            counterparty: e.address,
            currency: e.balance.currency,
            value: t.toString(),
          },
        };
      }
      function p(e, t) {
        var r = t(e);
        if (null === r) return null;
        var n = i.isEmpty(e.newFields) ? e.finalFields : e.newFields,
          s = {
            address: n.LowLimit.issuer,
            balance: {
              counterparty: n.HighLimit.issuer,
              currency: n.Balance.currency,
              value: r.toString(),
            },
          };
        return [s, l(s)];
      }
      function f(e, t) {
        var r = s(e).map(function (e) {
          return "AccountRoot" === e.entryType
            ? [u(e, t)]
            : "RippleState" === e.entryType
              ? p(e, t)
              : [];
        });
        return a(i.compact(i.flatten(r)));
      }
      function m(e) {
        return f(e, d);
      }
      function g(e) {
        return f(e, h);
      }
      ((e.exports.parseBalanceChanges = m), (e.exports.parseFinalBalances = g));
    },
    6638: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(2764),
          n = (t) =>
            i
              .createHash("sha512")
              .update(e.from(t, "hex"))
              .digest("hex")
              .toUpperCase()
              .slice(0, 64);
        t.default = n;
      }).call(this, r(2).Buffer);
    },
    6639: function (e, t, r) {
      "use strict";
      var i;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e[(e["TRANSACTION_ID"] = 1415073280)] = "TRANSACTION_ID"),
            (e[(e["TRANSACTION_NODE"] = 1397638144)] = "TRANSACTION_NODE"),
            (e[(e["INNER_NODE"] = 1296649728)] = "INNER_NODE"),
            (e[(e["LEAF_NODE"] = 1296846336)] = "LEAF_NODE"),
            (e[(e["TRANSACTION_SIGN"] = 1398036480)] = "TRANSACTION_SIGN"),
            (e[(e["TRANSACTION_SIGN_TESTNET"] = 1937012736)] =
              "TRANSACTION_SIGN_TESTNET"),
            (e[(e["TRANSACTION_MULTISIGN"] = 1397576704)] =
              "TRANSACTION_MULTISIGN"),
            (e[(e["LEDGER"] = 1280791040)] = "LEDGER"));
        })(i || (i = {})),
        (t.default = i));
    },
  },
]);
