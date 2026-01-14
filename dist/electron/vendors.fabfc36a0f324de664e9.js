(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [224],
  {
    10339: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.types =
          t.ShaMap =
          t.HashPrefix =
          t.quality =
          t.TransactionResult =
          t.Type =
          t.LedgerEntryType =
          t.TransactionType =
          t.Field =
          t.ledgerHashes =
          t.binary =
          t.hashes =
            void 0));
      var r = n(4550);
      (Object.defineProperty(t, "Field", {
        enumerable: !0,
        get: function () {
          return r.Field;
        },
      }),
        Object.defineProperty(t, "TransactionType", {
          enumerable: !0,
          get: function () {
            return r.TransactionType;
          },
        }),
        Object.defineProperty(t, "LedgerEntryType", {
          enumerable: !0,
          get: function () {
            return r.LedgerEntryType;
          },
        }),
        Object.defineProperty(t, "Type", {
          enumerable: !0,
          get: function () {
            return r.Type;
          },
        }),
        Object.defineProperty(t, "TransactionResult", {
          enumerable: !0,
          get: function () {
            return r.TransactionResult;
          },
        }));
      var i = n(4789);
      t.types = i;
      var o = n(6635);
      t.binary = o;
      var s = n(6636);
      Object.defineProperty(t, "ShaMap", {
        enumerable: !0,
        get: function () {
          return s.ShaMap;
        },
      });
      var a = n(6637);
      t.ledgerHashes = a;
      var u = n(4792);
      t.hashes = u;
      var c = n(10348);
      Object.defineProperty(t, "quality", {
        enumerable: !0,
        get: function () {
          return c.quality;
        },
      });
      var d = n(4552);
      Object.defineProperty(t, "HashPrefix", {
        enumerable: !0,
        get: function () {
          return d.HashPrefix;
        },
      });
    },
    10340: function (e) {
      e.exports = JSON.parse(
        '{"TYPES":{"Validation":10003,"Done":-1,"Hash128":4,"Blob":7,"AccountID":8,"Amount":6,"Hash256":5,"UInt8":16,"Vector256":19,"STObject":14,"Unknown":-2,"Transaction":10001,"Hash160":17,"PathSet":18,"LedgerEntry":10002,"UInt16":1,"NotPresent":0,"UInt64":3,"UInt32":2,"STArray":15},"LEDGER_ENTRY_TYPES":{"Any":-3,"Child":-2,"Invalid":-1,"AccountRoot":97,"DirectoryNode":100,"RippleState":114,"Ticket":84,"SignerList":83,"Offer":111,"LedgerHashes":104,"Amendments":102,"FeeSettings":115,"Escrow":117,"PayChannel":120,"DepositPreauth":112,"Check":67,"Nickname":110,"Contract":99,"NFTokenPage":80,"NFTokenOffer":55,"NegativeUNL":78},"FIELDS":[["Generic",{"nth":0,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Unknown"}],["Invalid",{"nth":-1,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Unknown"}],["LedgerEntryType",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt16"}],["TransactionType",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt16"}],["SignerWeight",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt16"}],["TransferFee",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt16"}],["Flags",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["SourceTag",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["Sequence",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["PreviousTxnLgrSeq",{"nth":5,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["LedgerSequence",{"nth":6,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["CloseTime",{"nth":7,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["ParentCloseTime",{"nth":8,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["SigningTime",{"nth":9,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["Expiration",{"nth":10,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["TransferRate",{"nth":11,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["WalletSize",{"nth":12,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["OwnerCount",{"nth":13,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["DestinationTag",{"nth":14,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["HighQualityIn",{"nth":16,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["HighQualityOut",{"nth":17,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["LowQualityIn",{"nth":18,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["LowQualityOut",{"nth":19,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["QualityIn",{"nth":20,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["QualityOut",{"nth":21,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["StampEscrow",{"nth":22,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["BondAmount",{"nth":23,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["LoadFee",{"nth":24,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["OfferSequence",{"nth":25,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["FirstLedgerSequence",{"nth":26,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["LastLedgerSequence",{"nth":27,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["TransactionIndex",{"nth":28,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["OperationLimit",{"nth":29,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["ReferenceFeeUnits",{"nth":30,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["ReserveBase",{"nth":31,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["ReserveIncrement",{"nth":32,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["SetFlag",{"nth":33,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["ClearFlag",{"nth":34,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["SignerQuorum",{"nth":35,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["CancelAfter",{"nth":36,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["FinishAfter",{"nth":37,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["IndexNext",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["IndexPrevious",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["BookNode",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["OwnerNode",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["BaseFee",{"nth":5,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["ExchangeRate",{"nth":6,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["LowNode",{"nth":7,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["HighNode",{"nth":8,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["EmailHash",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash128"}],["LedgerHash",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["ParentHash",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["TransactionHash",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["AccountHash",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["PreviousTxnID",{"nth":5,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["LedgerIndex",{"nth":6,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["WalletLocator",{"nth":7,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["RootIndex",{"nth":8,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["AccountTxnID",{"nth":9,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["NFTokenID",{"nth":10,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["BookDirectory",{"nth":16,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["InvoiceID",{"nth":17,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["Nickname",{"nth":18,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["Amendment",{"nth":19,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["TicketID",{"nth":20,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["Digest",{"nth":21,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["hash",{"nth":257,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Hash256"}],["index",{"nth":258,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Hash256"}],["Amount",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["Balance",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["LimitAmount",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["TakerPays",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["TakerGets",{"nth":5,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["LowLimit",{"nth":6,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["HighLimit",{"nth":7,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["Fee",{"nth":8,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["SendMax",{"nth":9,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["DeliverMin",{"nth":10,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["MinimumOffer",{"nth":16,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["RippleEscrow",{"nth":17,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["DeliveredAmount",{"nth":18,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["NFTokenBrokerFee",{"nth":19,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Amount"}],["taker_gets_funded",{"nth":258,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Amount"}],["taker_pays_funded",{"nth":259,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Amount"}],["PublicKey",{"nth":1,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["MessageKey",{"nth":2,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["SigningPubKey",{"nth":3,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["TxnSignature",{"nth":4,"isVLEncoded":true,"isSerialized":true,"isSigningField":false,"type":"Blob"}],["URI",{"nth":5,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["Signature",{"nth":6,"isVLEncoded":true,"isSerialized":true,"isSigningField":false,"type":"Blob"}],["Domain",{"nth":7,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["FundCode",{"nth":8,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["RemoveCode",{"nth":9,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["ExpireCode",{"nth":10,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["CreateCode",{"nth":11,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["MemoType",{"nth":12,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["MemoData",{"nth":13,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["MemoFormat",{"nth":14,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["Fulfillment",{"nth":16,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["Condition",{"nth":17,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["MasterSignature",{"nth":18,"isVLEncoded":true,"isSerialized":true,"isSigningField":false,"type":"Blob"}],["UNLModifyValidator",{"nth":19,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["ValidatorToDisable",{"nth":20,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["ValidatorToReEnable",{"nth":21,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Blob"}],["Account",{"nth":1,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["Owner",{"nth":2,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["Destination",{"nth":3,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["Issuer",{"nth":4,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["Authorize",{"nth":5,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["Unauthorize",{"nth":6,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["Target",{"nth":7,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["RegularKey",{"nth":8,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["NFTokenMinter",{"nth":9,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"AccountID"}],["ObjectEndMarker",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["TransactionMetaData",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["CreatedNode",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["DeletedNode",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["ModifiedNode",{"nth":5,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["PreviousFields",{"nth":6,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["FinalFields",{"nth":7,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["NewFields",{"nth":8,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["TemplateEntry",{"nth":9,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["Memo",{"nth":10,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["SignerEntry",{"nth":11,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["NFToken",{"nth":12,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["Signer",{"nth":16,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["Majority",{"nth":18,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["DisabledValidator",{"nth":19,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STObject"}],["ArrayEndMarker",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["Signers",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":false,"type":"STArray"}],["SignerEntries",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["Template",{"nth":5,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["Necessary",{"nth":6,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["Sufficient",{"nth":7,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["AffectedNodes",{"nth":8,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["Memos",{"nth":9,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["NFTokens",{"nth":10,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["Majorities",{"nth":16,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["DisabledValidators",{"nth":17,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"STArray"}],["CloseResolution",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt8"}],["Method",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt8"}],["TransactionResult",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt8"}],["TakerPaysCurrency",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash160"}],["TakerPaysIssuer",{"nth":2,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash160"}],["TakerGetsCurrency",{"nth":3,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash160"}],["TakerGetsIssuer",{"nth":4,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash160"}],["Paths",{"nth":1,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"PathSet"}],["Indexes",{"nth":1,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Vector256"}],["Hashes",{"nth":2,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Vector256"}],["Amendments",{"nth":3,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Vector256"}],["NFTokenOffers",{"nth":4,"isVLEncoded":true,"isSerialized":true,"isSigningField":true,"type":"Vector256"}],["Transaction",{"nth":1,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Transaction"}],["LedgerEntry",{"nth":1,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"LedgerEntry"}],["Validation",{"nth":1,"isVLEncoded":false,"isSerialized":false,"isSigningField":false,"type":"Validation"}],["SignerListID",{"nth":38,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["SettleDelay",{"nth":39,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["TicketCount",{"nth":40,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["TicketSequence",{"nth":41,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["NFTokenTaxon",{"nth":42,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["MintedNFTokens",{"nth":43,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["BurnedNFTokens",{"nth":44,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt32"}],["Channel",{"nth":22,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["ConsensusHash",{"nth":23,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["CheckID",{"nth":24,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["ValidatedHash",{"nth":25,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["PreviousPageMin",{"nth":26,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["NextPageMin",{"nth":27,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["NFTokenBuyOffer",{"nth":28,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["NFTokenSellOffer",{"nth":29,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"Hash256"}],["TickSize",{"nth":16,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt8"}],["UNLModifyDisabling",{"nth":17,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt8"}],["DestinationNode",{"nth":9,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["Cookie",{"nth":10,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["ServerVersion",{"nth":11,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}],["NFTokenOfferNode",{"nth":12,"isVLEncoded":false,"isSerialized":true,"isSigningField":true,"type":"UInt64"}]],"TRANSACTION_RESULTS":{"telLOCAL_ERROR":-399,"telBAD_DOMAIN":-398,"telBAD_PATH_COUNT":-397,"telBAD_PUBLIC_KEY":-396,"telFAILED_PROCESSING":-395,"telINSUF_FEE_P":-394,"telNO_DST_PARTIAL":-393,"telCAN_NOT_QUEUE":-392,"telCAN_NOT_QUEUE_BALANCE":-391,"telCAN_NOT_QUEUE_BLOCKS":-390,"telCAN_NOT_QUEUE_BLOCKED":-389,"telCAN_NOT_QUEUE_FEE":-388,"telCAN_NOT_QUEUE_FULL":-387,"temMALFORMED":-299,"temBAD_AMOUNT":-298,"temBAD_CURRENCY":-297,"temBAD_EXPIRATION":-296,"temBAD_FEE":-295,"temBAD_ISSUER":-294,"temBAD_LIMIT":-293,"temBAD_OFFER":-292,"temBAD_PATH":-291,"temBAD_PATH_LOOP":-290,"temBAD_REGKEY":-289,"temBAD_SEND_XRP_LIMIT":-288,"temBAD_SEND_XRP_MAX":-287,"temBAD_SEND_XRP_NO_DIRECT":-286,"temBAD_SEND_XRP_PARTIAL":-285,"temBAD_SEND_XRP_PATHS":-284,"temBAD_SEQUENCE":-283,"temBAD_SIGNATURE":-282,"temBAD_SRC_ACCOUNT":-281,"temBAD_TRANSFER_RATE":-280,"temDST_IS_SRC":-279,"temDST_NEEDED":-278,"temINVALID":-277,"temINVALID_FLAG":-276,"temREDUNDANT":-275,"temRIPPLE_EMPTY":-274,"temDISABLED":-273,"temBAD_SIGNER":-272,"temBAD_QUORUM":-271,"temBAD_WEIGHT":-270,"temBAD_TICK_SIZE":-269,"temINVALID_ACCOUNT_ID":-268,"temCANNOT_PREAUTH_SELF":-267,"temUNCERTAIN":-266,"temUNKNOWN":-265,"temSEQ_AND_TICKET":-264,"temBAD_NFTOKEN_TRANSFER_FEE":-263,"tefFAILURE":-199,"tefALREADY":-198,"tefBAD_ADD_AUTH":-197,"tefBAD_AUTH":-196,"tefBAD_LEDGER":-195,"tefCREATED":-194,"tefEXCEPTION":-193,"tefINTERNAL":-192,"tefNO_AUTH_REQUIRED":-191,"tefPAST_SEQ":-190,"tefWRONG_PRIOR":-189,"tefMASTER_DISABLED":-188,"tefMAX_LEDGER":-187,"tefBAD_SIGNATURE":-186,"tefBAD_QUORUM":-185,"tefNOT_MULTI_SIGNING":-184,"tefBAD_AUTH_MASTER":-183,"tefINVARIANT_FAILED":-182,"tefTOO_BIG":-181,"tefNO_TICKET":-180,"tefNFTOKEN_IS_NOT_TRANSFERABLE":-179,"terRETRY":-99,"terFUNDS_SPENT":-98,"terINSUF_FEE_B":-97,"terNO_ACCOUNT":-96,"terNO_AUTH":-95,"terNO_LINE":-94,"terOWNERS":-93,"terPRE_SEQ":-92,"terLAST":-91,"terNO_RIPPLE":-90,"terQUEUED":-89,"terPRE_TICKET":-88,"tesSUCCESS":0,"tecCLAIM":100,"tecPATH_PARTIAL":101,"tecUNFUNDED_ADD":102,"tecUNFUNDED_OFFER":103,"tecUNFUNDED_PAYMENT":104,"tecFAILED_PROCESSING":105,"tecDIR_FULL":121,"tecINSUF_RESERVE_LINE":122,"tecINSUF_RESERVE_OFFER":123,"tecNO_DST":124,"tecNO_DST_INSUF_XRP":125,"tecNO_LINE_INSUF_RESERVE":126,"tecNO_LINE_REDUNDANT":127,"tecPATH_DRY":128,"tecUNFUNDED":129,"tecNO_ALTERNATIVE_KEY":130,"tecNO_REGULAR_KEY":131,"tecOWNERS":132,"tecNO_ISSUER":133,"tecNO_AUTH":134,"tecNO_LINE":135,"tecINSUFF_FEE":136,"tecFROZEN":137,"tecNO_TARGET":138,"tecNO_PERMISSION":139,"tecNO_ENTRY":140,"tecINSUFFICIENT_RESERVE":141,"tecNEED_MASTER_KEY":142,"tecDST_TAG_NEEDED":143,"tecINTERNAL":144,"tecOVERSIZE":145,"tecCRYPTOCONDITION_ERROR":146,"tecINVARIANT_FAILED":147,"tecEXPIRED":148,"tecDUPLICATE":149,"tecKILLED":150,"tecHAS_OBLIGATIONS":151,"tecTOO_SOON":152,"tecMAX_SEQUENCE_REACHED":154,"tecNO_SUITABLE_NFTOKEN_PAGE":155,"tecNFTOKEN_BUY_SELL_MISMATCH":156,"tecNFTOKEN_OFFER_TYPE_MISMATCH":157,"tecCANT_ACCEPT_OWN_NFTOKEN_OFFER":158,"tecINSUFFICIENT_FUNDS":159,"tecOBJECT_NOT_FOUND":160,"tecINSUFFICIENT_PAYMENT":161,"tecINCORRECT_ASSET":162,"tecTOO_MANY":163},"TRANSACTION_TYPES":{"Invalid":-1,"Payment":0,"EscrowCreate":1,"EscrowFinish":2,"AccountSet":3,"EscrowCancel":4,"SetRegularKey":5,"NickNameSet":6,"OfferCreate":7,"OfferCancel":8,"Contract":9,"TicketCreate":10,"TicketCancel":11,"SignerListSet":12,"PaymentChannelCreate":13,"PaymentChannelFund":14,"PaymentChannelClaim":15,"CheckCreate":16,"CheckCash":17,"CheckCancel":18,"DepositPreauth":19,"TrustSet":20,"AccountDelete":21,"NFTokenMint":25,"NFTokenBurn":26,"NFTokenCreateOffer":27,"NFTokenCancelOffer":28,"NFTokenAcceptOffer":29,"EnableAmendment":100,"SetFee":101,"UNLModify":102}}',
      );
    },
    10341: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Amount = void 0));
      var i = n(3902),
        o = n(3940),
        s = n(5545),
        a = n(5548),
        u = n(3455),
        c = n(3941),
        d = n(2),
        l = -96,
        f = 80,
        p = 16,
        h = new i.Decimal("1e17"),
        y = new i.Decimal("1e-6"),
        S = c(4294967295);
      function g(e) {
        var t = Object.keys(e).sort();
        return (
          3 === t.length &&
          "currency" === t[0] &&
          "issuer" === t[1] &&
          "value" === t[2]
        );
      }
      i.Decimal.config({ toExpPos: f + p, toExpNeg: l - p });
      var E = (function (e) {
        function t(n) {
          return (
            e.call(
              this,
              null !== n && void 0 !== n ? n : t.defaultAmount.bytes,
            ) || this
          );
        }
        return (
          r(t, e),
          (t.from = function (e) {
            if (e instanceof t) return e;
            var n = d.Buffer.alloc(8);
            if ("string" === typeof e) {
              t.assertXrpIsValid(e);
              var r = c(e),
                o = [d.Buffer.alloc(4), d.Buffer.alloc(4)];
              return (
                o[0].writeUInt32BE(Number(r.shiftRight(32)), 0),
                o[1].writeUInt32BE(Number(r.and(S)), 0),
                (n = d.Buffer.concat(o)),
                (n[0] |= 64),
                new t(n)
              );
            }
            if (g(e)) {
              r = new i.Decimal(e.value);
              if ((t.assertIouIsValid(r), r.isZero())) n[0] |= 128;
              else {
                var u = r
                    .times("1e".concat(-(r.e - 15)))
                    .abs()
                    .toString(),
                  l = c(u);
                o = [d.Buffer.alloc(4), d.Buffer.alloc(4)];
                (o[0].writeUInt32BE(Number(l.shiftRight(32)), 0),
                  o[1].writeUInt32BE(Number(l.and(S)), 0),
                  (n = d.Buffer.concat(o)),
                  (n[0] |= 128),
                  r.gt(new i.Decimal(0)) && (n[0] |= 64));
                var f = r.e - 15,
                  p = 97 + f;
                ((n[0] |= p >>> 2), (n[1] |= (3 & p) << 6));
              }
              var h = a.Currency.from(e.currency).toBytes(),
                y = s.AccountID.from(e.issuer).toBytes();
              return new t(d.Buffer.concat([n, h, y]));
            }
            throw new Error("Invalid type to construct an Amount");
          }),
          (t.fromParser = function (e) {
            var n = 128 & e.peek(),
              r = n ? 48 : 8;
            return new t(e.read(r));
          }),
          (t.prototype.toJSON = function () {
            if (this.isNative()) {
              var e = this.bytes,
                n = 64 & e[0],
                r = n ? "" : "-";
              e[0] &= 63;
              var u = c(e.slice(0, 4).readUInt32BE(0)),
                d = c(e.slice(4).readUInt32BE(0)),
                l = u.shiftLeft(32).or(d);
              return "".concat(r).concat(l.toString());
            }
            var f = new o.BinaryParser(this.toString()),
              p = f.read(8),
              h = a.Currency.fromParser(f),
              y = s.AccountID.fromParser(f),
              S = p[0],
              g = p[1],
              E =
                ((n = 64 & S),
                (r = n ? "" : "-"),
                ((63 & S) << 2) + ((255 & g) >> 6) - 97);
            ((p[0] = 0), (p[1] &= 63));
            var _ = new i.Decimal(
              "".concat(r, "0x").concat(p.toString("hex")),
            ).times("1e".concat(E));
            return (
              t.assertIouIsValid(_),
              { value: _.toString(), currency: h.toJSON(), issuer: y.toJSON() }
            );
          }),
          (t.assertXrpIsValid = function (e) {
            if (-1 !== e.indexOf("."))
              throw new Error("".concat(e.toString(), " is an illegal amount"));
            var t = new i.Decimal(e);
            if (!t.isZero() && (t.lt(y) || t.gt(h)))
              throw new Error("".concat(e.toString(), " is an illegal amount"));
          }),
          (t.assertIouIsValid = function (e) {
            if (!e.isZero()) {
              var t = e.precision(),
                n = e.e - 15;
              if (t > p || n > f || n < l)
                throw new Error("Decimal precision out of range");
              this.verifyNoDecimal(e);
            }
          }),
          (t.verifyNoDecimal = function (e) {
            var t = e
              .times("1e".concat(-(e.e - 15)))
              .abs()
              .toString();
            if (-1 !== t.indexOf("."))
              throw new Error("Decimal place found in integerNumberString");
          }),
          (t.prototype.isNative = function () {
            return 0 === (128 & this.bytes[0]);
          }),
          (t.defaultAmount = new t(d.Buffer.from("4000000000000000", "hex"))),
          t
        );
      })(u.SerializedType);
      t.Amount = E;
    },
    10342: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Blob = void 0));
      var i = n(3455),
        o = n(2),
        s = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            r(t, e),
            (t.fromParser = function (e, n) {
              return new t(e.read(n));
            }),
            (t.from = function (e) {
              if (e instanceof t) return e;
              if ("string" === typeof e) return new t(o.Buffer.from(e, "hex"));
              throw new Error("Cannot construct Blob from value given");
            }),
            t
          );
        })(i.SerializedType);
      t.Blob = s;
    },
    10343: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash128 = void 0));
      var i = n(5547),
        o = n(2),
        s = (function (e) {
          function t(n) {
            return (
              e.call(this, null !== n && void 0 !== n ? n : t.ZERO_128.bytes) ||
              this
            );
          }
          return (
            r(t, e),
            (t.width = 16),
            (t.ZERO_128 = new t(o.Buffer.alloc(t.width))),
            t
          );
        })(i.Hash);
      t.Hash128 = s;
    },
    10344: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PathSet = void 0));
      var i = n(5545),
        o = n(5548),
        s = n(3940),
        a = n(3455),
        u = n(2),
        c = 0,
        d = 255,
        l = 1,
        f = 16,
        p = 32;
      function h(e) {
        return (
          void 0 !== e.issuer || void 0 !== e.account || void 0 !== e.currency
        );
      }
      function y(e) {
        return (
          (Array.isArray(e) && 0 === e.length) ||
          (Array.isArray(e) && Array.isArray(e[0]) && 0 === e[0].length) ||
          (Array.isArray(e) && Array.isArray(e[0]) && h(e[0][0]))
        );
      }
      var S = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r(t, e),
            (t.from = function (e) {
              if (e instanceof t) return e;
              var n = [u.Buffer.from([0])];
              return (
                e.account &&
                  (n.push(i.AccountID.from(e.account).toBytes()),
                  (n[0][0] |= l)),
                e.currency &&
                  (n.push(o.Currency.from(e.currency).toBytes()),
                  (n[0][0] |= f)),
                e.issuer &&
                  (n.push(i.AccountID.from(e.issuer).toBytes()),
                  (n[0][0] |= p)),
                new t(u.Buffer.concat(n))
              );
            }),
            (t.fromParser = function (e) {
              var n = e.readUInt8(),
                r = [u.Buffer.from([n])];
              return (
                n & l && r.push(e.read(i.AccountID.width)),
                n & f && r.push(e.read(o.Currency.width)),
                n & p && r.push(e.read(i.AccountID.width)),
                new t(u.Buffer.concat(r))
              );
            }),
            (t.prototype.toJSON = function () {
              var e,
                t,
                n,
                r = new s.BinaryParser(this.bytes.toString("hex")),
                a = r.readUInt8();
              (a & l && (e = i.AccountID.fromParser(r).toJSON()),
                a & f && (t = o.Currency.fromParser(r).toJSON()),
                a & p && (n = i.AccountID.fromParser(r).toJSON()));
              var u = {};
              return (
                e && (u.account = e),
                n && (u.issuer = n),
                t && (u.currency = t),
                u
              );
            }),
            (t.prototype.type = function () {
              return this.bytes[0];
            }),
            t
          );
        })(a.SerializedType),
        g = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r(t, e),
            (t.from = function (e) {
              if (e instanceof t) return e;
              var n = [];
              return (
                e.forEach(function (e) {
                  n.push(S.from(e).toBytes());
                }),
                new t(u.Buffer.concat(n))
              );
            }),
            (t.fromParser = function (e) {
              var n = [];
              while (!e.end())
                if (
                  (n.push(S.fromParser(e).toBytes()),
                  e.peek() === c || e.peek() === d)
                )
                  break;
              return new t(u.Buffer.concat(n));
            }),
            (t.prototype.toJSON = function () {
              var e = [],
                t = new s.BinaryParser(this.toString());
              while (!t.end()) e.push(S.fromParser(t).toJSON());
              return e;
            }),
            t
          );
        })(a.SerializedType),
        E = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            r(t, e),
            (t.from = function (e) {
              if (e instanceof t) return e;
              if (y(e)) {
                var n = [];
                return (
                  e.forEach(function (e) {
                    (n.push(g.from(e).toBytes()), n.push(u.Buffer.from([d])));
                  }),
                  (n[n.length - 1] = u.Buffer.from([c])),
                  new t(u.Buffer.concat(n))
                );
              }
              throw new Error("Cannot construct PathSet from given value");
            }),
            (t.fromParser = function (e) {
              var n = [];
              while (!e.end())
                if (
                  (n.push(g.fromParser(e).toBytes()),
                  n.push(e.read(1)),
                  n[n.length - 1][0] == c)
                )
                  break;
              return new t(u.Buffer.concat(n));
            }),
            (t.prototype.toJSON = function () {
              var e = [],
                t = new s.BinaryParser(this.toString());
              while (!t.end()) (e.push(g.fromParser(t).toJSON()), t.skip(1));
              return e;
            }),
            t
          );
        })(a.SerializedType);
      t.PathSet = E;
    },
    10345: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STArray = void 0));
      var i = n(3455),
        o = n(5549),
        s = n(3940),
        a = n(2),
        u = a.Buffer.from([241]),
        c = "ArrayEndMarker",
        d = a.Buffer.from([225]);
      function l(e) {
        return Array.isArray(e) && (0 === e.length || "object" === typeof e[0]);
      }
      var f = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r(t, e),
          (t.fromParser = function (e) {
            var n = [];
            while (!e.end()) {
              var r = e.readField();
              if (r.name === c) break;
              n.push(r.header, e.readFieldValue(r).toBytes(), d);
            }
            return (n.push(u), new t(a.Buffer.concat(n)));
          }),
          (t.from = function (e) {
            if (e instanceof t) return e;
            if (l(e)) {
              var n = [];
              return (
                e.forEach(function (e) {
                  n.push(o.STObject.from(e).toBytes());
                }),
                n.push(u),
                new t(a.Buffer.concat(n))
              );
            }
            throw new Error("Cannot construct STArray from value given");
          }),
          (t.prototype.toJSON = function () {
            var e = [],
              t = new s.BinaryParser(this.toString());
            while (!t.end()) {
              var n = t.readField();
              if (n.name === c) break;
              var r = {};
              ((r[n.name] = o.STObject.fromParser(t).toJSON()), e.push(r));
            }
            return e;
          }),
          t
        );
      })(i.SerializedType);
      t.STArray = f;
    },
    10346: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UInt16 = void 0));
      var i = n(4791),
        o = n(2),
        s = (function (e) {
          function t(n) {
            return (
              e.call(
                this,
                null !== n && void 0 !== n ? n : t.defaultUInt16.bytes,
              ) || this
            );
          }
          return (
            r(t, e),
            (t.fromParser = function (e) {
              return new t(e.read(t.width));
            }),
            (t.from = function (e) {
              if (e instanceof t) return e;
              if ("number" === typeof e) {
                var n = o.Buffer.alloc(t.width);
                return (n.writeUInt16BE(e, 0), new t(n));
              }
              throw new Error("Can not construct UInt16 with given value");
            }),
            (t.prototype.valueOf = function () {
              return this.bytes.readUInt16BE(0);
            }),
            (t.width = 2),
            (t.defaultUInt16 = new t(o.Buffer.alloc(t.width))),
            t
          );
        })(i.UInt);
      t.UInt16 = s;
    },
    10347: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Vector256 = void 0));
      var i = n(3455),
        o = n(4790),
        s = n(4551);
      function a(e) {
        return Array.isArray(e) && (0 === e.length || "string" === typeof e[0]);
      }
      var u = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          r(t, e),
          (t.fromParser = function (e, n) {
            for (
              var r = new s.BytesList(),
                i = null !== n && void 0 !== n ? n : e.size(),
                a = i / 32,
                u = 0;
              u < a;
              u++
            )
              o.Hash256.fromParser(e).toBytesSink(r);
            return new t(r.toBytes());
          }),
          (t.from = function (e) {
            if (e instanceof t) return e;
            if (a(e)) {
              var n = new s.BytesList();
              return (
                e.forEach(function (e) {
                  o.Hash256.from(e).toBytesSink(n);
                }),
                new t(n.toBytes())
              );
            }
            throw new Error("Cannot construct Vector256 from given value");
          }),
          (t.prototype.toJSON = function () {
            if (this.bytes.byteLength % 32 !== 0)
              throw new Error("Invalid bytes for Vector256");
            for (var e = [], t = 0; t < this.bytes.byteLength; t += 32)
              e.push(
                this.bytes
                  .slice(t, t + 32)
                  .toString("hex")
                  .toUpperCase(),
              );
            return e;
          }),
          t
        );
      })(i.SerializedType);
      t.Vector256 = u;
    },
    10348: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.quality = void 0));
      var r = n(4789),
        i = n(3902),
        o = n(3941),
        s = n(2),
        a = (function () {
          function e() {}
          return (
            (e.encode = function (e) {
              var t = new i.Decimal(e),
                n = t.e - 15,
                s = t.times("1e".concat(-n)).abs().toString(),
                a = r.coreTypes.UInt64.from(o(s)).toBytes();
              return ((a[0] = n + 100), a);
            }),
            (e.decode = function (e) {
              var t = s.Buffer.from(e, "hex").slice(-8),
                n = t[0] - 100,
                r = new i.Decimal("0x".concat(t.slice(1).toString("hex")));
              return r.times("1e".concat(n));
            }),
            e
          );
        })();
      t.quality = a;
    },
    3124: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  ((i &&
                    !("get" in i
                      ? !t.__esModule
                      : i.writable || i.configurable)) ||
                    (i = {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }),
                    Object.defineProperty(e, r, i));
                }
              : function (e, t, n, r) {
                  (void 0 === r && (r = n), (e[r] = t[n]));
                }),
          i =
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
          o =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var n in e)
                  "default" !== n &&
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return (i(t, e), t);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isValidXAddress =
            t.decodeXAddress =
            t.xAddressToClassicAddress =
            t.encodeXAddress =
            t.classicAddressToXAddress =
            t.isValidClassicAddress =
            t.decodeAccountPublic =
            t.encodeAccountPublic =
            t.decodeNodePublic =
            t.encodeNodePublic =
            t.decodeAccountID =
            t.encodeAccountID =
            t.decodeSeed =
            t.encodeSeed =
            t.codec =
              void 0));
        const s = o(n(229)),
          a = n(5537);
        (Object.defineProperty(t, "codec", {
          enumerable: !0,
          get: function () {
            return a.codec;
          },
        }),
          Object.defineProperty(t, "encodeSeed", {
            enumerable: !0,
            get: function () {
              return a.encodeSeed;
            },
          }),
          Object.defineProperty(t, "decodeSeed", {
            enumerable: !0,
            get: function () {
              return a.decodeSeed;
            },
          }),
          Object.defineProperty(t, "encodeAccountID", {
            enumerable: !0,
            get: function () {
              return a.encodeAccountID;
            },
          }),
          Object.defineProperty(t, "decodeAccountID", {
            enumerable: !0,
            get: function () {
              return a.decodeAccountID;
            },
          }),
          Object.defineProperty(t, "encodeNodePublic", {
            enumerable: !0,
            get: function () {
              return a.encodeNodePublic;
            },
          }),
          Object.defineProperty(t, "decodeNodePublic", {
            enumerable: !0,
            get: function () {
              return a.decodeNodePublic;
            },
          }),
          Object.defineProperty(t, "encodeAccountPublic", {
            enumerable: !0,
            get: function () {
              return a.encodeAccountPublic;
            },
          }),
          Object.defineProperty(t, "decodeAccountPublic", {
            enumerable: !0,
            get: function () {
              return a.decodeAccountPublic;
            },
          }),
          Object.defineProperty(t, "isValidClassicAddress", {
            enumerable: !0,
            get: function () {
              return a.isValidClassicAddress;
            },
          }));
        const u = { main: e.from([5, 68]), test: e.from([4, 147]) },
          c = 4294967295;
        function d(e, t, n) {
          const r = (0, a.decodeAccountID)(e);
          return l(r, t, n);
        }
        function l(t, n, r) {
          if (20 !== t.length) throw new Error("Account ID must be 20 bytes");
          if (n > c) throw new Error("Invalid tag");
          const i = n || 0,
            o = !1 === n || null == n ? 0 : 1,
            s = e.concat([
              r ? u.test : u.main,
              t,
              e.from([
                o,
                255 & i,
                (i >> 8) & 255,
                (i >> 16) & 255,
                (i >> 24) & 255,
                0,
                0,
                0,
                0,
              ]),
            ]);
          return a.codec.encodeChecked(s);
        }
        function f(e) {
          const { accountId: t, tag: n, test: r } = p(e),
            i = (0, a.encodeAccountID)(t);
          return { classicAddress: i, tag: n, test: r };
        }
        function p(e) {
          const t = a.codec.decodeChecked(e),
            n = h(t),
            r = t.slice(2, 22),
            i = y(t);
          return { accountId: r, tag: i, test: n };
        }
        function h(e) {
          const t = e.slice(0, 2);
          if (u.main.equals(t)) return !1;
          if (u.test.equals(t)) return !0;
          throw new Error("Invalid X-address: bad prefix");
        }
        function y(t) {
          const n = t[22];
          if (n >= 2) throw new Error("Unsupported X-address");
          return 1 === n
            ? t[23] + 256 * t[24] + 65536 * t[25] + 16777216 * t[26]
            : (s.strictEqual(n, 0, "flag must be zero to indicate no tag"),
              s.ok(
                e.from("0000000000000000", "hex").equals(t.slice(23, 31)),
                "remaining bytes must be zero",
              ),
              !1);
        }
        function S(e) {
          try {
            p(e);
          } catch (t) {
            return !1;
          }
          return !0;
        }
        ((t.classicAddressToXAddress = d),
          (t.encodeXAddress = l),
          (t.xAddressToClassicAddress = f),
          (t.decodeXAddress = p),
          (t.isValidXAddress = S));
      }).call(this, n(2).Buffer);
    },
    3455: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Comparable = t.SerializedType = void 0));
      var i = n(4551),
        o = n(2),
        s = (function () {
          function e(e) {
            ((this.bytes = o.Buffer.alloc(0)),
              (this.bytes =
                null !== e && void 0 !== e ? e : o.Buffer.alloc(0)));
          }
          return (
            (e.fromParser = function (e, t) {
              throw new Error("fromParser not implemented");
            }),
            (e.from = function (e) {
              throw new Error("from not implemented");
            }),
            (e.prototype.toBytesSink = function (e) {
              e.put(this.bytes);
            }),
            (e.prototype.toHex = function () {
              return this.toBytes().toString("hex").toUpperCase();
            }),
            (e.prototype.toBytes = function () {
              if (this.bytes) return this.bytes;
              var e = new i.BytesList();
              return (this.toBytesSink(e), e.toBytes());
            }),
            (e.prototype.toJSON = function () {
              return this.toHex();
            }),
            (e.prototype.toString = function () {
              return this.toHex();
            }),
            e
          );
        })();
      t.SerializedType = s;
      var a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r(t, e),
          (t.prototype.lt = function (e) {
            return this.compareTo(e) < 0;
          }),
          (t.prototype.eq = function (e) {
            return 0 === this.compareTo(e);
          }),
          (t.prototype.gt = function (e) {
            return this.compareTo(e) > 0;
          }),
          (t.prototype.gte = function (e) {
            return this.compareTo(e) > -1;
          }),
          (t.prototype.lte = function (e) {
            return this.compareTo(e) < 1;
          }),
          (t.prototype.compareTo = function (e) {
            throw new Error(
              "cannot compare "
                .concat(this.toString(), " and ")
                .concat(e.toString()),
            );
          }),
          t
        );
      })(s);
      t.Comparable = a;
    },
    3939: function (e, t, n) {
      "use strict";
      var r = n(229),
        i = n(10339),
        o = n(6637),
        s = n(4550),
        a = i.binary.signingData,
        u = i.binary.signingClaimData,
        c = i.binary.multiSigningData,
        d = i.binary.binaryToJSON,
        l = i.binary.serializeObject;
      function f(e) {
        return (
          r.ok("string" === typeof e, "binary must be a hex string"),
          d(e)
        );
      }
      function p(e) {
        return (
          r.ok("object" === typeof e),
          l(e).toString("hex").toUpperCase()
        );
      }
      function h(e) {
        return (
          r.ok("object" === typeof e),
          a(e).toString("hex").toUpperCase()
        );
      }
      function y(e) {
        return (
          r.ok("object" === typeof e),
          u(e).toString("hex").toUpperCase()
        );
      }
      function S(e, t) {
        return (
          r.ok("object" === typeof e),
          r.equal(e["SigningPubKey"], ""),
          c(e, t).toString("hex").toUpperCase()
        );
      }
      function g(e) {
        return (
          r.ok("string" === typeof e),
          i.quality.encode(e).toString("hex").toUpperCase()
        );
      }
      function E(e) {
        return (r.ok("string" === typeof e), i.quality.decode(e).toString());
      }
      e.exports = {
        decode: f,
        encode: p,
        encodeForSigning: h,
        encodeForSigningClaim: y,
        encodeForMultisigning: S,
        encodeQuality: g,
        decodeQuality: E,
        decodeLedgerData: o.decodeLedgerData,
        TRANSACTION_TYPES: s.TRANSACTION_TYPES,
      };
    },
    3940: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BinaryParser = void 0));
      var r = n(229),
        i = n(4550),
        o = n(2),
        s = (function () {
          function e(e) {
            this.bytes = o.Buffer.from(e, "hex");
          }
          return (
            (e.prototype.peek = function () {
              return (r.ok(0 !== this.bytes.byteLength), this.bytes[0]);
            }),
            (e.prototype.skip = function (e) {
              (r.ok(e <= this.bytes.byteLength),
                (this.bytes = this.bytes.slice(e)));
            }),
            (e.prototype.read = function (e) {
              r.ok(e <= this.bytes.byteLength);
              var t = this.bytes.slice(0, e);
              return (this.skip(e), t);
            }),
            (e.prototype.readUIntN = function (e) {
              return (
                r.ok(0 < e && e <= 4, "invalid n"),
                this.read(e).reduce(function (e, t) {
                  return (e << 8) | t;
                }) >>> 0
              );
            }),
            (e.prototype.readUInt8 = function () {
              return this.readUIntN(1);
            }),
            (e.prototype.readUInt16 = function () {
              return this.readUIntN(2);
            }),
            (e.prototype.readUInt32 = function () {
              return this.readUIntN(4);
            }),
            (e.prototype.size = function () {
              return this.bytes.byteLength;
            }),
            (e.prototype.end = function (e) {
              var t = this.bytes.byteLength;
              return 0 === t || (void 0 !== e && t <= e);
            }),
            (e.prototype.readVariableLength = function () {
              return this.read(this.readVariableLengthLength());
            }),
            (e.prototype.readVariableLengthLength = function () {
              var e = this.readUInt8();
              if (e <= 192) return e;
              if (e <= 240) {
                var t = this.readUInt8();
                return 193 + 256 * (e - 193) + t;
              }
              if (e <= 254) {
                t = this.readUInt8();
                var n = this.readUInt8();
                return 12481 + 65536 * (e - 241) + 256 * t + n;
              }
              throw new Error("Invalid variable length indicator");
            }),
            (e.prototype.readFieldOrdinal = function () {
              var e = this.readUInt8(),
                t = 15 & e;
              if (
                ((e >>= 4),
                0 === e && ((e = this.readUInt8()), 0 === e || e < 16))
              )
                throw new Error(
                  "Cannot read FieldOrdinal, type_code out of range",
                );
              if (0 === t && ((t = this.readUInt8()), 0 === t || t < 16))
                throw new Error(
                  "Cannot read FieldOrdinal, field_code out of range",
                );
              return (e << 16) | t;
            }),
            (e.prototype.readField = function () {
              return i.Field.fromString(this.readFieldOrdinal().toString());
            }),
            (e.prototype.readType = function (e) {
              return e.fromParser(this);
            }),
            (e.prototype.typeForField = function (e) {
              return e.associatedType;
            }),
            (e.prototype.readFieldValue = function (e) {
              var t = this.typeForField(e);
              if (!t)
                throw new Error(
                  "unsupported: ("
                    .concat(e.name, ", ")
                    .concat(e.type.name, ")"),
                );
              var n = e.isVariableLengthEncoded
                  ? this.readVariableLengthLength()
                  : void 0,
                r = t.fromParser(this, n);
              if (void 0 === r)
                throw new Error(
                  "fromParser for ("
                    .concat(e.name, ", ")
                    .concat(e.type.name, ") -> undefined "),
                );
              return r;
            }),
            (e.prototype.readFieldAndValue = function () {
              var e = this.readField();
              return [e, this.readFieldValue(e)];
            }),
            e
          );
        })();
      t.BinaryParser = s;
    },
    4550: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionType =
          t.TransactionResult =
          t.LedgerEntryType =
          t.Type =
          t.Field =
          t.Bytes =
          t.TRANSACTION_TYPES =
            void 0));
      var r = n(10340),
        i = n(3455),
        o = n(2);
      t.TRANSACTION_TYPES = Object.entries(r.TRANSACTION_TYPES)
        .filter(function (e) {
          e[0];
          var t = e[1];
          return t >= 0;
        })
        .map(function (e) {
          var t = e[0];
          e[1];
          return t;
        });
      var s = 2,
        a = 2,
        u = 2,
        c = 1;
      function d(e, t) {
        var n = [];
        return (
          e < 16
            ? t < 16
              ? n.push((e << 4) | t)
              : n.push(e << 4, t)
            : t < 16
              ? n.push(t, e)
              : n.push(0, e, t),
          o.Buffer.from(n)
        );
      }
      var l = (function () {
        function e(e, t, n) {
          ((this.name = e),
            (this.ordinal = t),
            (this.ordinalWidth = n),
            (this.bytes = o.Buffer.alloc(n)));
          for (var r = 0; r < n; r++)
            this.bytes[n - r - 1] = (t >>> (8 * r)) & 255;
        }
        return (
          (e.prototype.toJSON = function () {
            return this.name;
          }),
          (e.prototype.toBytesSink = function (e) {
            e.put(this.bytes);
          }),
          (e.prototype.toBytes = function () {
            return this.bytes;
          }),
          e
        );
      })();
      t.Bytes = l;
      var f = (function () {
        function e(e, t) {
          var n = this;
          ((this.ordinalWidth = t),
            Object.entries(e).forEach(function (e) {
              var r = e[0],
                i = e[1];
              ((n[r] = new l(r, i, t)), (n[i.toString()] = n[r]));
            }));
        }
        return (
          (e.prototype.from = function (e) {
            return e instanceof l ? e : this[e];
          }),
          (e.prototype.fromParser = function (e) {
            return this.from(e.readUIntN(this.ordinalWidth).toString());
          }),
          e
        );
      })();
      function p(e) {
        var t = e[0],
          n = e[1],
          o = r.TYPES[n.type],
          a = d(o, n.nth);
        return {
          name: t,
          nth: n.nth,
          isVariableLengthEncoded: n.isVLEncoded,
          isSerialized: n.isSerialized,
          isSigningField: n.isSigningField,
          ordinal: (o << 16) | n.nth,
          type: new l(n.type, o, s),
          header: a,
          associatedType: i.SerializedType,
        };
      }
      var h = (function () {
          function e(e) {
            var t = this;
            e.forEach(function (e) {
              var n = e[0],
                r = e[1];
              ((t[n] = p([n, r])), (t[t[n].ordinal.toString()] = t[n]));
            });
          }
          return (
            (e.prototype.fromString = function (e) {
              return this[e];
            }),
            e
          );
        })(),
        y = new f(r.TYPES, s);
      t.Type = y;
      var S = new f(r.LEDGER_ENTRY_TYPES, a);
      t.LedgerEntryType = S;
      var g = new f(r.TRANSACTION_TYPES, u);
      t.TransactionType = g;
      var E = new f(r.TRANSACTION_RESULTS, c);
      t.TransactionResult = E;
      var _ = new h(r.FIELDS);
      t.Field = _;
    },
    4551: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BinarySerializer = t.BytesList = void 0));
      var r = n(229),
        i = n(2),
        o = (function () {
          function e() {
            this.bytesArray = [];
          }
          return (
            (e.prototype.getLength = function () {
              return i.Buffer.concat(this.bytesArray).byteLength;
            }),
            (e.prototype.put = function (e) {
              var t = i.Buffer.from(e);
              return (this.bytesArray.push(t), this);
            }),
            (e.prototype.toBytesSink = function (e) {
              e.put(this.toBytes());
            }),
            (e.prototype.toBytes = function () {
              return i.Buffer.concat(this.bytesArray);
            }),
            (e.prototype.toHex = function () {
              return this.toBytes().toString("hex").toUpperCase();
            }),
            e
          );
        })();
      t.BytesList = o;
      var s = (function () {
        function e(e) {
          ((this.sink = new o()), (this.sink = e));
        }
        return (
          (e.prototype.write = function (e) {
            e.toBytesSink(this.sink);
          }),
          (e.prototype.put = function (e) {
            this.sink.put(e);
          }),
          (e.prototype.writeType = function (e, t) {
            this.write(e.from(t));
          }),
          (e.prototype.writeBytesList = function (e) {
            e.toBytesSink(this.sink);
          }),
          (e.prototype.encodeVariableLength = function (e) {
            var t = i.Buffer.alloc(3);
            if (e <= 192) return ((t[0] = e), t.slice(0, 1));
            if (e <= 12480)
              return (
                (e -= 193),
                (t[0] = 193 + (e >>> 8)),
                (t[1] = 255 & e),
                t.slice(0, 2)
              );
            if (e <= 918744)
              return (
                (e -= 12481),
                (t[0] = 241 + (e >>> 16)),
                (t[1] = (e >> 8) & 255),
                (t[2] = 255 & e),
                t.slice(0, 3)
              );
            throw new Error("Overflow error");
          }),
          (e.prototype.writeFieldAndValue = function (e, t, n) {
            void 0 === n && (n = !1);
            var i = e.associatedType.from(t);
            (r.ok(void 0 !== i.toBytesSink),
              r.ok(void 0 !== e.name),
              this.sink.put(e.header),
              e.isVariableLengthEncoded
                ? this.writeLengthEncoded(i, n)
                : i.toBytesSink(this.sink));
          }),
          (e.prototype.writeLengthEncoded = function (e, t) {
            void 0 === t && (t = !1);
            var n = new o();
            (t || e.toBytesSink(n),
              this.put(this.encodeVariableLength(n.getLength())),
              this.writeBytesList(n));
          }),
          e
        );
      })();
      t.BinarySerializer = s;
    },
    4552: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HashPrefix = void 0));
      var r = n(2);
      function i(e) {
        var t = r.Buffer.alloc(4);
        return (t.writeUInt32BE(e, 0), t);
      }
      var o = {
        transactionID: i(1415073280),
        transaction: i(1397638144),
        accountStateEntry: i(1296846336),
        innerNode: i(1296649728),
        ledgerHeader: i(1280791040),
        transactionSig: i(1398036480),
        transactionMultiSig: i(1397576704),
        validation: i(1447119872),
        proposal: i(1347571712),
        paymentChannelClaim: i(1129073920),
      };
      t.HashPrefix = o;
    },
    4789: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.coreTypes = void 0));
      var r = n(4550),
        i = n(5545),
        o = n(10341),
        s = n(10342),
        a = n(5548),
        u = n(10343),
        c = n(5546),
        d = n(4790),
        l = n(10344),
        f = n(10345),
        p = n(5549),
        h = n(10346),
        y = n(6632),
        S = n(6633),
        g = n(6634),
        E = n(10347),
        _ = {
          AccountID: i.AccountID,
          Amount: o.Amount,
          Blob: s.Blob,
          Currency: a.Currency,
          Hash128: u.Hash128,
          Hash160: c.Hash160,
          Hash256: d.Hash256,
          PathSet: l.PathSet,
          STArray: f.STArray,
          STObject: p.STObject,
          UInt8: g.UInt8,
          UInt16: h.UInt16,
          UInt32: y.UInt32,
          UInt64: S.UInt64,
          Vector256: E.Vector256,
        };
      ((t.coreTypes = _),
        Object.values(r.Field).forEach(function (e) {
          e.associatedType = _[e.type.name];
        }),
        (r.Field["TransactionType"].associatedType = r.TransactionType),
        (r.Field["TransactionResult"].associatedType = r.TransactionResult),
        (r.Field["LedgerEntryType"].associatedType = r.LedgerEntryType));
    },
    4790: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash256 = void 0));
      var i = n(5547),
        o = n(2),
        s = (function (e) {
          function t(n) {
            return (
              e.call(this, null !== n && void 0 !== n ? n : t.ZERO_256.bytes) ||
              this
            );
          }
          return (
            r(t, e),
            (t.width = 32),
            (t.ZERO_256 = new t(o.Buffer.alloc(t.width))),
            t
          );
        })(i.Hash);
      t.Hash256 = s;
    },
    4791: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UInt = void 0));
      var i = n(3455);
      function o(e, t) {
        return e < t ? -1 : e == t ? 0 : 1;
      }
      var s = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          r(t, e),
          (t.prototype.compareTo = function (e) {
            return o(this.valueOf(), e.valueOf());
          }),
          (t.prototype.toJSON = function () {
            var e = this.valueOf();
            return "number" === typeof e ? e : e.toString();
          }),
          t
        );
      })(i.Comparable);
      t.UInt = s;
    },
    4792: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.transactionID = t.sha512Half = t.Sha512Half = void 0));
      var i = n(4552),
        o = n(797),
        s = n(4790),
        a = n(4551),
        u = n(2),
        c = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return ((t.hash = o("sha512")), t);
          }
          return (
            r(t, e),
            (t.put = function (e) {
              return new t().put(e);
            }),
            (t.prototype.put = function (e) {
              return (this.hash.update(e), this);
            }),
            (t.prototype.finish256 = function () {
              return u.Buffer.from(this.hash.digest().slice(0, 32));
            }),
            (t.prototype.finish = function () {
              return new s.Hash256(this.finish256());
            }),
            t
          );
        })(a.BytesList);
      function d() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = new c();
        return (
          e.forEach(function (e) {
            return n.put(e);
          }),
          n.finish256()
        );
      }
      function l(e) {
        return new s.Hash256(d(i.HashPrefix.transactionID, e));
      }
      ((t.Sha512Half = c), (t.sha512Half = d), (t.transactionID = l));
    },
    5537: function (e, t, n) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isValidClassicAddress =
            t.decodeAccountPublic =
            t.encodeAccountPublic =
            t.encodeNodePublic =
            t.decodeNodePublic =
            t.decodeAddress =
            t.decodeAccountID =
            t.encodeAddress =
            t.encodeAccountID =
            t.decodeSeed =
            t.encodeSeed =
            t.codec =
              void 0));
        const r = n(822),
          i = n(797),
          o = n(5538);
        class Codec {
          constructor(e) {
            ((this._sha256 = e.sha256),
              (this._alphabet = e.alphabet),
              (this._codec = r(this._alphabet)));
          }
          encode(e, t) {
            const n = t.versions;
            return this._encodeVersioned(e, n, t.expectedLength);
          }
          decode(e, t) {
            var n;
            const r = t.versions,
              i = t.versionTypes,
              s = this.decodeChecked(e);
            if (r.length > 1 && !t.expectedLength)
              throw new Error(
                "expectedLength is required because there are >= 2 possible versions",
              );
            const a = "number" === typeof r[0] ? 1 : r[0].length,
              u =
                null !== (n = t.expectedLength) && void 0 !== n
                  ? n
                  : s.length - a,
              c = s.slice(0, -u),
              d = s.slice(-u);
            for (let l = 0; l < r.length; l++) {
              const e = Array.isArray(r[l]) ? r[l] : [r[l]];
              if ((0, o.seqEqual)(c, e))
                return { version: e, bytes: d, type: i ? i[l] : null };
            }
            throw new Error(
              "version_invalid: version bytes do not match any of the provided version(s)",
            );
          }
          encodeChecked(t) {
            const n = this._sha256(this._sha256(t)).slice(0, 4);
            return this._encodeRaw(e.from((0, o.concatArgs)(t, n)));
          }
          decodeChecked(e) {
            const t = this._decodeRaw(e);
            if (t.length < 5)
              throw new Error(
                "invalid_input_size: decoded data must have length >= 5",
              );
            if (!this._verifyCheckSum(t)) throw new Error("checksum_invalid");
            return t.slice(0, -4);
          }
          _encodeVersioned(t, n, r) {
            if (r && t.length !== r)
              throw new Error(
                "unexpected_payload_length: bytes.length does not match expectedLength. Ensure that the bytes are a Buffer.",
              );
            return this.encodeChecked(e.from((0, o.concatArgs)(n, t)));
          }
          _encodeRaw(e) {
            return this._codec.encode(e);
          }
          _decodeRaw(e) {
            return this._codec.decode(e);
          }
          _verifyCheckSum(e) {
            const t = this._sha256(this._sha256(e.slice(0, -4))).slice(0, 4),
              n = e.slice(-4);
            return (0, o.seqEqual)(t, n);
          }
        }
        const s = 0,
          a = 35,
          u = 33,
          c = 28,
          d = [1, 225, 75],
          l = {
            sha256(t) {
              return i("sha256").update(e.from(t)).digest();
            },
            alphabet:
              "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
          },
          f = new Codec(l);
        function p(e, t) {
          if (16 !== e.length) throw new Error("entropy must have length 16");
          const n = { expectedLength: 16, versions: "ed25519" === t ? d : [u] };
          return f.encode(e, n);
        }
        function h(e, t) {
          return (
            void 0 === t &&
              (t = {
                versionTypes: ["ed25519", "secp256k1"],
                versions: [d, u],
                expectedLength: 16,
              }),
            f.decode(e, t)
          );
        }
        function y(e) {
          const t = { versions: [s], expectedLength: 20 };
          return f.encode(e, t);
        }
        function S(e) {
          const t = { versions: [s], expectedLength: 20 };
          return f.decode(e, t).bytes;
        }
        function g(e) {
          const t = { versions: [c], expectedLength: 33 };
          return f.decode(e, t).bytes;
        }
        function E(e) {
          const t = { versions: [c], expectedLength: 33 };
          return f.encode(e, t);
        }
        function _(e) {
          const t = { versions: [a], expectedLength: 33 };
          return f.encode(e, t);
        }
        function v(e) {
          const t = { versions: [a], expectedLength: 33 };
          return f.decode(e, t).bytes;
        }
        function b(e) {
          try {
            S(e);
          } catch (t) {
            return !1;
          }
          return !0;
        }
        ((t.codec = f),
          (t.encodeSeed = p),
          (t.decodeSeed = h),
          (t.encodeAccountID = y),
          (t.encodeAddress = y),
          (t.decodeAccountID = S),
          (t.decodeAddress = S),
          (t.decodeNodePublic = g),
          (t.encodeNodePublic = E),
          (t.encodeAccountPublic = _),
          (t.decodeAccountPublic = v),
          (t.isValidClassicAddress = b));
      }).call(this, n(2).Buffer);
    },
    5538: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function i(e) {
        return "number" !== typeof e;
      }
      function o() {
        const e = [];
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return (
          n.forEach((t) => {
            if (i(t)) for (const n of t) e.push(n);
            else e.push(t);
          }),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.concatArgs = t.seqEqual = void 0),
        (t.seqEqual = r),
        (t.concatArgs = o));
    },
    5545: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccountID = void 0));
      var i = n(3124),
        o = n(5546),
        s = n(2),
        a = /^[A-F0-9]{40}$/,
        u = (function (e) {
          function t(n) {
            return (
              e.call(
                this,
                null !== n && void 0 !== n ? n : t.defaultAccountID.bytes,
              ) || this
            );
          }
          return (
            r(t, e),
            (t.from = function (e) {
              if (e instanceof t) return e;
              if ("string" === typeof e)
                return "" === e
                  ? new t()
                  : a.test(e)
                    ? new t(s.Buffer.from(e, "hex"))
                    : this.fromBase58(e);
              throw new Error("Cannot construct AccountID from value given");
            }),
            (t.fromBase58 = function (e) {
              if ((0, i.isValidXAddress)(e)) {
                var n = (0, i.xAddressToClassicAddress)(e);
                if (!1 !== n.tag)
                  throw new Error(
                    "Only allowed to have tag on Account or Destination",
                  );
                e = n.classicAddress;
              }
              return new t(s.Buffer.from((0, i.decodeAccountID)(e)));
            }),
            (t.prototype.toJSON = function () {
              return this.toBase58();
            }),
            (t.prototype.toBase58 = function () {
              return (0, i.encodeAccountID)(this.bytes);
            }),
            (t.defaultAccountID = new t(s.Buffer.alloc(20))),
            t
          );
        })(o.Hash160);
      t.AccountID = u;
    },
    5546: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash160 = void 0));
      var i = n(5547),
        o = n(2),
        s = (function (e) {
          function t(n) {
            return (
              n && 0 === n.byteLength && (n = t.ZERO_160.bytes),
              e.call(this, null !== n && void 0 !== n ? n : t.ZERO_160.bytes) ||
                this
            );
          }
          return (
            r(t, e),
            (t.width = 20),
            (t.ZERO_160 = new t(o.Buffer.alloc(t.width))),
            t
          );
        })(i.Hash);
      t.Hash160 = s;
    },
    5547: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Hash = void 0));
      var i = n(3455),
        o = n(2),
        s = (function (e) {
          function t(t) {
            var n = e.call(this, t) || this;
            if (n.bytes.byteLength !== n.constructor.width)
              throw new Error(
                "Invalid Hash length ".concat(n.bytes.byteLength),
              );
            return n;
          }
          return (
            r(t, e),
            (t.from = function (e) {
              if (e instanceof this) return e;
              if ("string" === typeof e)
                return new this(o.Buffer.from(e, "hex"));
              throw new Error("Cannot construct Hash from given value");
            }),
            (t.fromParser = function (e, t) {
              return new this(
                e.read(null !== t && void 0 !== t ? t : this.width),
              );
            }),
            (t.prototype.compareTo = function (e) {
              return this.bytes.compare(this.constructor.from(e).bytes);
            }),
            (t.prototype.toString = function () {
              return this.toHex();
            }),
            (t.prototype.nibblet = function (e) {
              var t = e > 0 ? (e / 2) | 0 : 0,
                n = this.bytes[t];
              return (e % 2 === 0 ? (n = (240 & n) >>> 4) : (n &= 15), n);
            }),
            t
          );
        })(i.Comparable);
      t.Hash = s;
    },
    5548: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Currency = void 0));
      var i = n(5546),
        o = n(2),
        s = /^0{40}$/,
        a = /^[A-Z0-9a-z?!@#$%^&*(){}[\]|]{3}$/,
        u = /^[A-F0-9]{40}$/,
        c = /^0{24}[\x00-\x7F]{6}0{10}$/;
      function d(e) {
        var t = o.Buffer.alloc(20);
        if ("XRP" !== e) {
          var n = e.split("").map(function (e) {
            return e.charCodeAt(0);
          });
          t.set(n, 12);
        }
        return t;
      }
      function l(e) {
        return a.test(e);
      }
      function f(e) {
        var t = e.toString();
        return "XRP" === t ? null : l(t) ? t : null;
      }
      function p(e) {
        return u.test(e);
      }
      function h(e) {
        return 3 === e.length || p(e);
      }
      function y(e) {
        return 20 === e.byteLength;
      }
      function S(e) {
        return e instanceof o.Buffer ? y(e) : h(e);
      }
      function g(e) {
        if (!S(e))
          throw new Error("Unsupported Currency representation: ".concat(e));
        return 3 === e.length ? d(e) : o.Buffer.from(e, "hex");
      }
      var E = (function (e) {
        function t(n) {
          var r =
              e.call(this, null !== n && void 0 !== n ? n : t.XRP.bytes) ||
              this,
            i = r.bytes.toString("hex");
          return (
            s.test(i)
              ? (r._iso = "XRP")
              : c.test(i)
                ? (r._iso = f(r.bytes.slice(12, 15)))
                : (r._iso = null),
            r
          );
        }
        return (
          r(t, e),
          (t.prototype.iso = function () {
            return this._iso;
          }),
          (t.from = function (e) {
            if (e instanceof t) return e;
            if ("string" === typeof e) return new t(g(e));
            throw new Error("Cannot construct Currency from value given");
          }),
          (t.prototype.toJSON = function () {
            var e = this.iso();
            return null !== e ? e : this.bytes.toString("hex").toUpperCase();
          }),
          (t.XRP = new t(o.Buffer.alloc(20))),
          t
        );
      })(i.Hash160);
      t.Currency = E;
    },
    5549: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.STObject = void 0));
      var i = n(4550),
        o = n(3455),
        s = n(3124),
        a = n(3940),
        u = n(4551),
        c = n(2),
        d = c.Buffer.from([225]),
        l = "ObjectEndMarker",
        f = "STObject",
        p = "Destination",
        h = "Account",
        y = "SourceTag",
        S = "DestinationTag";
      function g(e, t) {
        var n,
          r,
          i,
          o = (0, s.xAddressToClassicAddress)(t);
        if (e === p) i = S;
        else if (e === h) i = y;
        else if (!1 !== o.tag)
          throw new Error("".concat(e, " cannot have an associated tag"));
        return !1 !== o.tag
          ? ((n = {}), (n[e] = o.classicAddress), (n[i] = o.tag), n)
          : ((r = {}), (r[e] = o.classicAddress), r);
      }
      function E(e, t) {
        if (void 0 !== e[y] && void 0 !== t[y])
          throw new Error("Cannot have Account X-Address and SourceTag");
        if (void 0 !== e[S] && void 0 !== t[S])
          throw new Error(
            "Cannot have Destination X-Address and DestinationTag",
          );
      }
      var _ = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r(t, e),
          (t.fromParser = function (e) {
            var n = new u.BytesList(),
              r = new u.BinarySerializer(n);
            while (!e.end()) {
              var i = e.readField();
              if (i.name === l) break;
              var o = e.readFieldValue(i);
              (r.writeFieldAndValue(i, o), i.type.name === f && r.put(d));
            }
            return new t(n.toBytes());
          }),
          (t.from = function (e, n) {
            if (e instanceof t) return e;
            var r = new u.BytesList(),
              o = new u.BinarySerializer(r),
              a = !1,
              c = Object.entries(e).reduce(function (t, n) {
                var r,
                  i = n[0],
                  o = n[1],
                  a = void 0;
                return (
                  o &&
                    (0, s.isValidXAddress)(o.toString()) &&
                    ((a = g(i, o.toString())), E(a, e)),
                  Object.assign(
                    t,
                    null !== a && void 0 !== a ? a : ((r = {}), (r[i] = o), r),
                  )
                );
              }, {}),
              l = Object.keys(c)
                .map(function (e) {
                  return i.Field[e];
                })
                .filter(function (e) {
                  return void 0 !== e && void 0 !== c[e.name] && e.isSerialized;
                })
                .sort(function (e, t) {
                  return e.ordinal - t.ordinal;
                });
            return (
              void 0 !== n && (l = l.filter(n)),
              l.forEach(function (e) {
                var t = e.associatedType.from(c[e.name]);
                if (void 0 == t)
                  throw new TypeError(
                    'Unable to interpret "'
                      .concat(e.name, ": ")
                      .concat(c[e.name], '".'),
                  );
                "UNLModify" === t.name && (a = !0);
                var n = "Account" == e.name && a;
                (o.writeFieldAndValue(e, t, n), e.type.name === f && o.put(d));
              }),
              new t(r.toBytes())
            );
          }),
          (t.prototype.toJSON = function () {
            var e = new a.BinaryParser(this.toString()),
              t = {};
            while (!e.end()) {
              var n = e.readField();
              if (n.name === l) break;
              t[n.name] = e.readFieldValue(n).toJSON();
            }
            return t;
          }),
          t
        );
      })(o.SerializedType);
      t.STObject = _;
    },
    6632: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UInt32 = void 0));
      var i = n(4791),
        o = n(2),
        s = (function (e) {
          function t(n) {
            return (
              e.call(
                this,
                null !== n && void 0 !== n ? n : t.defaultUInt32.bytes,
              ) || this
            );
          }
          return (
            r(t, e),
            (t.fromParser = function (e) {
              return new t(e.read(t.width));
            }),
            (t.from = function (e) {
              if (e instanceof t) return e;
              var n = o.Buffer.alloc(t.width);
              if ("string" === typeof e) {
                var r = Number.parseInt(e);
                return (n.writeUInt32BE(r, 0), new t(n));
              }
              if ("number" === typeof e)
                return (n.writeUInt32BE(e, 0), new t(n));
              throw new Error("Cannot construct UInt32 from given value");
            }),
            (t.prototype.valueOf = function () {
              return this.bytes.readUInt32BE(0);
            }),
            (t.width = 4),
            (t.defaultUInt32 = new t(o.Buffer.alloc(t.width))),
            t
          );
        })(i.UInt);
      t.UInt32 = s;
    },
    6633: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UInt64 = void 0));
      var i = n(4791),
        o = n(3941),
        s = n(3941),
        a = n(2),
        u = /^[a-fA-F0-9]{1,16}$/,
        c = o(4294967295),
        d = (function (e) {
          function t(n) {
            return (
              e.call(
                this,
                null !== n && void 0 !== n ? n : t.defaultUInt64.bytes,
              ) || this
            );
          }
          return (
            r(t, e),
            (t.fromParser = function (e) {
              return new t(e.read(t.width));
            }),
            (t.from = function (e) {
              if (e instanceof t) return e;
              var n = a.Buffer.alloc(t.width);
              if ("number" === typeof e) {
                if (e < 0) throw new Error("value must be an unsigned integer");
                var r = o(e),
                  i = [a.Buffer.alloc(4), a.Buffer.alloc(4)];
                return (
                  i[0].writeUInt32BE(Number(r.shiftRight(32)), 0),
                  i[1].writeUInt32BE(Number(r.and(c)), 0),
                  new t(a.Buffer.concat(i))
                );
              }
              if ("string" === typeof e) {
                if (!u.test(e))
                  throw new Error("".concat(e, " is not a valid hex-string"));
                var d = e.padStart(16, "0");
                return ((n = a.Buffer.from(d, "hex")), new t(n));
              }
              if ((0, s.isInstance)(e)) {
                i = [a.Buffer.alloc(4), a.Buffer.alloc(4)];
                return (
                  i[0].writeUInt32BE(Number(e.shiftRight(o(32))), 0),
                  i[1].writeUInt32BE(Number(e.and(c)), 0),
                  new t(a.Buffer.concat(i))
                );
              }
              throw new Error("Cannot construct UInt64 from given value");
            }),
            (t.prototype.toJSON = function () {
              return this.bytes.toString("hex").toUpperCase();
            }),
            (t.prototype.valueOf = function () {
              var e = o(this.bytes.slice(0, 4).readUInt32BE(0)),
                t = o(this.bytes.slice(4).readUInt32BE(0));
              return e.shiftLeft(o(32)).or(t);
            }),
            (t.prototype.toBytes = function () {
              return this.bytes;
            }),
            (t.width = 8),
            (t.defaultUInt64 = new t(a.Buffer.alloc(t.width))),
            t
          );
        })(i.UInt);
      t.UInt64 = d;
    },
    6634: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UInt8 = void 0));
      var i = n(4791),
        o = n(2),
        s = (function (e) {
          function t(n) {
            return (
              e.call(
                this,
                null !== n && void 0 !== n ? n : t.defaultUInt8.bytes,
              ) || this
            );
          }
          return (
            r(t, e),
            (t.fromParser = function (e) {
              return new t(e.read(t.width));
            }),
            (t.from = function (e) {
              if (e instanceof t) return e;
              if ("number" === typeof e) {
                var n = o.Buffer.alloc(t.width);
                return (n.writeUInt8(e, 0), new t(n));
              }
              throw new Error("Cannot construct UInt8 from given value");
            }),
            (t.prototype.valueOf = function () {
              return this.bytes.readUInt8(0);
            }),
            (t.width = 1),
            (t.defaultUInt8 = new t(o.Buffer.alloc(t.width))),
            t
          );
        })(i.UInt);
      t.UInt8 = s;
    },
    6635: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.transactionID =
          t.sha512Half =
          t.binaryToJSON =
          t.signingClaimData =
          t.signingData =
          t.multiSigningData =
          t.readJSON =
          t.serializeObject =
          t.makeParser =
          t.BytesList =
          t.BinarySerializer =
          t.BinaryParser =
            void 0));
      var r = n(4789),
        i = n(3940);
      Object.defineProperty(t, "BinaryParser", {
        enumerable: !0,
        get: function () {
          return i.BinaryParser;
        },
      });
      var o = n(4552),
        s = n(4551);
      (Object.defineProperty(t, "BinarySerializer", {
        enumerable: !0,
        get: function () {
          return s.BinarySerializer;
        },
      }),
        Object.defineProperty(t, "BytesList", {
          enumerable: !0,
          get: function () {
            return s.BytesList;
          },
        }));
      var a = n(4792);
      (Object.defineProperty(t, "sha512Half", {
        enumerable: !0,
        get: function () {
          return a.sha512Half;
        },
      }),
        Object.defineProperty(t, "transactionID", {
          enumerable: !0,
          get: function () {
            return a.transactionID;
          },
        }));
      var u = n(3941),
        c = function (e) {
          return new i.BinaryParser(e);
        };
      t.makeParser = c;
      var d = function (e) {
        return e.readType(r.coreTypes.STObject).toJSON();
      };
      t.readJSON = d;
      var l = function (e) {
        return d(c(e));
      };
      function f(e, t) {
        void 0 === t && (t = {});
        var n = t.prefix,
          i = t.suffix,
          o = t.signingFieldsOnly,
          a = void 0 !== o && o,
          u = new s.BytesList();
        n && u.put(n);
        var c = a
          ? function (e) {
              return e.isSigningField;
            }
          : void 0;
        return (
          r.coreTypes.STObject.from(e, c).toBytesSink(u),
          i && u.put(i),
          u.toBytes()
        );
      }
      function p(e, t) {
        return (
          void 0 === t && (t = o.HashPrefix.transactionSig),
          f(e, { prefix: t, signingFieldsOnly: !0 })
        );
      }
      function h(e) {
        var t = u(String(e.amount)),
          n = o.HashPrefix.paymentChannelClaim,
          i = r.coreTypes.Hash256.from(e.channel).toBytes(),
          a = r.coreTypes.UInt64.from(t).toBytes(),
          c = new s.BytesList();
        return (c.put(n), c.put(i), c.put(a), c.toBytes());
      }
      function y(e, t) {
        var n = o.HashPrefix.transactionMultiSig,
          i = r.coreTypes.AccountID.from(t).toBytes();
        return f(e, { prefix: n, suffix: i, signingFieldsOnly: !0 });
      }
      ((t.binaryToJSON = l),
        (t.serializeObject = f),
        (t.signingData = p),
        (t.signingClaimData = h),
        (t.multiSigningData = y));
    },
    6636: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__extends) ||
        (function () {
          var e = function (t, n) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                }),
              e(t, n)
            );
          };
          return function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Class extends value " +
                  String(n) +
                  " is not a constructor or null",
              );
            function r() {
              this.constructor = t;
            }
            (e(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r())));
          };
        })();
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ShaMapLeaf = t.ShaMapNode = t.ShaMap = void 0));
      var i = n(229),
        o = n(4789),
        s = n(4552),
        a = n(4792),
        u = n(2),
        c = (function () {
          function e() {}
          return e;
        })();
      t.ShaMapNode = c;
      var d = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return ((r.index = t), (r.item = n), r);
        }
        return (
          r(t, e),
          (t.prototype.isLeaf = function () {
            return !0;
          }),
          (t.prototype.isInner = function () {
            return !1;
          }),
          (t.prototype.hashPrefix = function () {
            return void 0 === this.item
              ? u.Buffer.alloc(0)
              : this.item.hashPrefix();
          }),
          (t.prototype.hash = function () {
            var e = a.Sha512Half.put(this.hashPrefix());
            return (this.toBytesSink(e), e.finish());
          }),
          (t.prototype.toBytesSink = function (e) {
            (void 0 !== this.item && this.item.toBytesSink(e),
              this.index.toBytesSink(e));
          }),
          t
        );
      })(c);
      t.ShaMapLeaf = d;
      var l = (function (e) {
          function t(t) {
            void 0 === t && (t = 0);
            var n = e.call(this) || this;
            return (
              (n.depth = t),
              (n.slotBits = 0),
              (n.branches = Array(16)),
              n
            );
          }
          return (
            r(t, e),
            (t.prototype.isInner = function () {
              return !0;
            }),
            (t.prototype.isLeaf = function () {
              return !1;
            }),
            (t.prototype.hashPrefix = function () {
              return s.HashPrefix.innerNode;
            }),
            (t.prototype.setBranch = function (e, t) {
              ((this.slotBits = this.slotBits | (1 << e)),
                (this.branches[e] = t));
            }),
            (t.prototype.empty = function () {
              return 0 === this.slotBits;
            }),
            (t.prototype.hash = function () {
              if (this.empty()) return o.coreTypes.Hash256.ZERO_256;
              var e = a.Sha512Half.put(this.hashPrefix());
              return (this.toBytesSink(e), e.finish());
            }),
            (t.prototype.toBytesSink = function (e) {
              for (var t = 0; t < this.branches.length; t++) {
                var n = this.branches[t],
                  r = n ? n.hash() : o.coreTypes.Hash256.ZERO_256;
                r.toBytesSink(e);
              }
            }),
            (t.prototype.addItem = function (e, n, r) {
              i.strict.ok(void 0 !== e);
              var o = e.nibblet(this.depth),
                s = this.branches[o];
              if (void 0 === s) this.setBranch(o, r || new d(e, n));
              else if (s instanceof d) {
                var a = new t(this.depth + 1);
                (a.addItem(s.index, void 0, s),
                  a.addItem(e, n, r),
                  this.setBranch(o, a));
              } else {
                if (!(s instanceof t))
                  throw new Error("invalid ShaMap.addItem call");
                s.addItem(e, n, r);
              }
            }),
            t
          );
        })(c),
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (r(t, e), t);
        })(l);
      t.ShaMap = f;
    },
    6637: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeLedgerData =
          t.ledgerHash =
          t.transactionTreeHash =
          t.accountStateHash =
            void 0));
      var r = n(229),
        i = n(6636),
        o = n(4552),
        s = n(4792),
        a = n(6635),
        u = n(4790),
        c = n(5549),
        d = n(6633),
        l = n(6632),
        f = n(6634),
        p = n(3940),
        h = n(3941);
      function y(e, t) {
        var n = new i.ShaMap();
        return (
          t.forEach(function (t) {
            return n.addItem.apply(n, e(t));
          }),
          n.hash()
        );
      }
      function S(e) {
        r.ok(e.hash);
        var t = u.Hash256.from(e.hash),
          n = {
            hashPrefix: function () {
              return o.HashPrefix.transaction;
            },
            toBytesSink: function (t) {
              var n = new a.BinarySerializer(t);
              (n.writeLengthEncoded(c.STObject.from(e)),
                n.writeLengthEncoded(c.STObject.from(e.metaData)));
            },
          };
        return [t, n, void 0];
      }
      function g(e) {
        var t = u.Hash256.from(e.index),
          n = (0, a.serializeObject)(e),
          r = {
            hashPrefix: function () {
              return o.HashPrefix.accountStateEntry;
            },
            toBytesSink: function (e) {
              e.put(n);
            },
          };
        return [t, r, void 0];
      }
      function E(e) {
        var t = S;
        return y(t, e);
      }
      function _(e) {
        var t = g;
        return y(t, e);
      }
      function v(e) {
        var t = new s.Sha512Half();
        return (
          t.put(o.HashPrefix.ledgerHeader),
          r.ok(void 0 !== e.parent_close_time),
          r.ok(void 0 !== e.close_flags),
          l.UInt32.from(e.ledger_index).toBytesSink(t),
          d.UInt64.from(h(String(e.total_coins))).toBytesSink(t),
          u.Hash256.from(e.parent_hash).toBytesSink(t),
          u.Hash256.from(e.transaction_hash).toBytesSink(t),
          u.Hash256.from(e.account_hash).toBytesSink(t),
          l.UInt32.from(e.parent_close_time).toBytesSink(t),
          l.UInt32.from(e.close_time).toBytesSink(t),
          f.UInt8.from(e.close_time_resolution).toBytesSink(t),
          f.UInt8.from(e.close_flags).toBytesSink(t),
          t.finish()
        );
      }
      function b(e) {
        r.ok("string" === typeof e, "binary must be a hex string");
        var t = new p.BinaryParser(e);
        return {
          ledger_index: t.readUInt32(),
          total_coins: t.readType(d.UInt64).valueOf().toString(),
          parent_hash: t.readType(u.Hash256).toHex(),
          transaction_hash: t.readType(u.Hash256).toHex(),
          account_hash: t.readType(u.Hash256).toHex(),
          parent_close_time: t.readUInt32(),
          close_time: t.readUInt32(),
          close_time_resolution: t.readUInt8(),
          close_flags: t.readUInt8(),
        };
      }
      ((t.transactionTreeHash = E),
        (t.accountStateHash = _),
        (t.ledgerHash = v),
        (t.decodeLedgerData = b));
    },
  },
]);
