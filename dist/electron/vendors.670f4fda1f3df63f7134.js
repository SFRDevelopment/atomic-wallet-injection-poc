(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [313],
  {
    3053: function (e, t) {},
    6256: function (e, t, r) {
      "use strict";
      var n = r(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PureTransactionArgument =
          t.PureCallArg =
          t.PublishTransaction =
          t.ProgrammableTransaction =
          t.PaginatedTransactionResponse =
          t.PaginatedObjectsResponse =
          t.PaginatedEvents =
          t.PaginatedCoins =
          t.PROGRAMMABLE_TX_BLOCK =
          t.PROGRAMMABLE_CALL_INNER =
          t.PROGRAMMABLE_CALL =
          t.PRIVATE_KEY_SIZE =
          t.PAY_SPLIT_COIN_VEC_FUNC_NAME =
          t.PAY_MODULE_NAME =
          t.PAY_JOIN_COIN_FUNC_NAME =
          t.OwnedObjectRef =
          t.ObjectType =
          t.ObjectTransactionArgument =
          t.ObjectStatus =
          t.ObjectRead =
          t.ObjectOwner =
          t.ObjectId =
          t.ObjectDigest =
          t.ObjectContentFields =
          t.ObjectCallArg =
          t.OPTION =
          t.OBJECT_MODULE_NAME =
          t.OBJECT_ARG =
          t.MovePackageContent =
          t.MoveCallTransaction =
          t.MoveCallSuiTransaction =
          t.MoveCallMetrics =
          t.MoveCallMetric =
          t.MergeCoinsTransaction =
          t.MakeMoveVecTransaction =
          t.MOVE_STDLIB_ADDRESS =
          t.MIST_PER_SUI =
          t.LEGACY_PRIVATE_KEY_SIZE =
          t.JsonRpcProvider =
          t.JsonRpcClient =
          t.IntentVersion =
          t.IntentScope =
          t.Inputs =
          t.ID_STRUCT_NAME =
          t.GetOwnedObjectsResponse =
          t.Genesis =
          t.GenericAuthoritySignature =
          t.GasCostSummary =
          t.FaucetResponse =
          t.FaucetRateLimitError =
          t.FaucetCoinInfo =
          t.ExecutionStatusType =
          t.ExecutionStatus =
          t.EventId =
          t.ErrorResponse =
          t.EpochPage =
          t.EpochInfo =
          t.EpochId =
          t.EndOfEpochInfo =
          t.Ed25519PublicKey =
          t.Ed25519Keypair =
          t.ENUM_KIND =
          t.DryRunTransactionBlockResponse =
          t.DisplayFieldsResponse =
          t.DisplayFieldsBackwardCompatibleResponse =
          t.DevInspectResults =
          t.DelegationStakingPoolFields =
          t.DelegationStakingPool =
          t.Delegation =
          t.DelegatedStake =
          t.DEFAULT_SECP256K1_DERIVATION_PATH =
          t.DEFAULT_ED25519_DERIVATION_PATH =
          t.DEFAULT_CLIENT_OPTIONS =
          t.ContentsFieldsWithdraw =
          t.ContentsFields =
          t.Contents =
          t.Connection =
          t.CommitteeInfo =
          t.CoinSupply =
          t.CoinStruct =
          t.CoinMetadataStruct =
          t.CoinBalance =
          t.Coin =
          t.CheckpointedObjectId =
          t.CheckpointDigest =
          t.Checkpoint =
          t.COIN_TYPE_ARG_REGEX =
          t.CALL_ARG =
          t.BuilderCallArg =
          t.BalanceChange =
          t.Balance =
          t.AuthoritySignature =
          t.AuthorityQuorumSignInfo =
          t.AuthorityName =
          t.Apy =
          t.AppId =
          t.ARGUMENT_INNER =
          t.ARGUMENT =
          t.ADD_STAKE_LOCKED_COIN_FUN_NAME =
          t.ADD_STAKE_FUN_NAME =
            void 0),
        (t.WebsocketClient =
          t.WITHDRAW_STAKE_FUN_NAME =
          t.ValidatorsApy =
          t.Validators =
          t.ValidResponse =
          t.VECTOR =
          t.VALIDATORS_EVENTS_QUERY =
          t.UpgradeTransaction =
          t.UpgradePolicy =
          t.UID_STRUCT_NAME =
          t.TypeTagSerializer =
          t.TransferObjectsTransaction =
          t.Transactions =
          t.TransactionType =
          t.TransactionEvents =
          t.TransactionEventDigest =
          t.TransactionEffectsModifiedAtVersions =
          t.TransactionEffectsDigest =
          t.TransactionEffects =
          t.TransactionDigest =
          t.TransactionBlockInput =
          t.TransactionBlock =
          t.TransactionArgument =
          t.TYPE_TAG =
          t.TRANSACTION_INNER =
          t.TRANSACTION =
          t.SuiValidatorSummary =
          t.SuiTransactionBlockResponseOptions =
          t.SuiTransactionBlockResponse =
          t.SuiTransactionBlockKind =
          t.SuiTransactionBlockData =
          t.SuiTransactionBlock =
          t.SuiTransaction =
          t.SuiSystemStateUtil =
          t.SuiSystemStateSummary =
          t.SuiSupplyFields =
          t.SuiRawMovePackage =
          t.SuiRawMoveObject =
          t.SuiRawData =
          t.SuiParsedData =
          t.SuiObjectResponseError =
          t.SuiObjectResponse =
          t.SuiObjectRef =
          t.SuiObjectInfo =
          t.SuiObjectDataOptions =
          t.SuiObjectData =
          t.SuiObjectChangeWrapped =
          t.SuiObjectChangeTransferred =
          t.SuiObjectChangePublished =
          t.SuiObjectChangeMutated =
          t.SuiObjectChangeDeleted =
          t.SuiObjectChangeCreated =
          t.SuiObjectChange =
          t.SuiMoveVisibility =
          t.SuiMoveStructTypeParameter =
          t.SuiMovePackage =
          t.SuiMoveObject =
          t.SuiMoveNormalizedTypeParameterType =
          t.SuiMoveNormalizedType =
          t.SuiMoveNormalizedStructType =
          t.SuiMoveNormalizedStruct =
          t.SuiMoveNormalizedModules =
          t.SuiMoveNormalizedModule =
          t.SuiMoveNormalizedFunction =
          t.SuiMoveNormalizedField =
          t.SuiMoveModuleId =
          t.SuiMoveFunctionArgTypes =
          t.SuiMoveFunctionArgType =
          t.SuiMoveAbilitySet =
          t.SuiJsonValue =
          t.SuiGasData =
          t.SuiEvent =
          t.SuiConsensusCommitPrologue =
          t.SuiChangeEpoch =
          t.SuiCallArg =
          t.SuiArgument =
          t.SuiAddress =
          t.SubscriptionId =
          t.SubscriptionEvent =
          t.StakeSubsidyFields =
          t.StakeSubsidy =
          t.StakeObject =
          t.SplitCoinsTransaction =
          t.SignerWithProvider =
          t.SequenceNumber =
          t.Secp256k1PublicKey =
          t.Secp256k1Keypair =
          t.SUI_TYPE_ARG =
          t.SUI_SYSTEM_STATE_OBJECT_ID =
          t.SUI_SYSTEM_MODULE_NAME =
          t.SUI_SYSTEM_ADDRESS =
          t.SUI_FRAMEWORK_ADDRESS =
          t.SUI_DECIMALS =
          t.SUI_CLOCK_OBJECT_ID =
          t.SUI_ADDRESS_LENGTH =
          t.SIGNATURE_SCHEME_TO_FLAG =
          t.SIGNATURE_FLAG_TO_SCHEME =
          t.RawSigner =
          t.RPCValidationError =
          t.RPCError =
            void 0),
        Object.defineProperty(t, "assert", {
          enumerable: !0,
          get: function () {
            return u.assert;
          },
        }),
        (t.builder = t.bcs = void 0),
        (t.bytesEqual = an),
        (t.devnetConnection = void 0),
        (t.extractMutableReference = Cr),
        (t.extractReference = Ar),
        (t.extractStructTag = Or),
        (t.formatAddress = Wo),
        (t.formatDigest = Ho),
        Object.defineProperty(t, "fromB64", {
          enumerable: !0,
          get: function () {
            return o.fromB64;
          },
        }),
        (t.fromExportedKeypair = vn),
        (t.fromSerializedSignature = nn),
        (t.getChangeEpochTransaction = Ct),
        (t.getConsensusCommitPrologueTransaction = At),
        (t.getCreatedObjects = Kt),
        (t.getEventPackage = Pe),
        (t.getEventSender = Re),
        (t.getEvents = Nt),
        (t.getExecutionStatus = _t),
        (t.getExecutionStatusError = Rt),
        (t.getExecutionStatusGasSummary = Pt),
        (t.getExecutionStatusType = Bt),
        (t.getGasData = Et),
        (t.getIdFromCallArg = Vi),
        (t.getMoveObject = Ee),
        (t.getMoveObjectType = ve),
        (t.getMovePackageContent = je),
        (t.getNewlyCreatedCoinRefsAfterSplit = $t),
        (t.getObjectChanges = Ft),
        (t.getObjectDeletedResponse = se),
        (t.getObjectDisplay = fe),
        (t.getObjectFields = we),
        (t.getObjectId = ue),
        (t.getObjectNotExistsResponse = ae),
        (t.getObjectOwner = ge),
        (t.getObjectPreviousTransactionDigest = he),
        (t.getObjectReference = ce),
        (t.getObjectType = pe),
        (t.getObjectVersion = le),
        (t.getProgrammableTransaction = xt),
        (t.getPublishedObjectChanges = Lt),
        (t.getPureSerializationType = io),
        (t.getSharedObjectInitialVersion = ye),
        (t.getSharedObjectInput = $i),
        (t.getSuiObjectData = oe),
        (t.getTimestampFromTransactionResponse = Vt),
        (t.getTotalGasUsed = Mt),
        (t.getTotalGasUsedUpperBound = Dt),
        (t.getTransaction = mt),
        (t.getTransactionDigest = vt),
        (t.getTransactionEffects = Ut),
        (t.getTransactionGasBudget = kt),
        (t.getTransactionGasObject = Tt),
        (t.getTransactionGasPrice = jt),
        (t.getTransactionKind = Ot),
        (t.getTransactionKindName = It),
        (t.getTransactionSender = St),
        (t.getTransactionSignature = wt),
        (t.getTransactionType = vi),
        (t.getWebsocketUrl = void 0),
        (t.hasPublicTransfer = Te),
        Object.defineProperty(t, "is", {
          enumerable: !0,
          get: function () {
            return u.is;
          },
        }),
        (t.isImmutableObject = me),
        (t.isMutableSharedObjectInput = Li),
        (t.isObjectDataFull = Zt),
        (t.isPureArg = nr),
        (t.isSharedObject = be),
        (t.isSharedObjectInput = Fi),
        (t.isSuiObjectResponse = de),
        (t.isTxContext = to),
        (t.isValidBIP32Path = pn),
        (t.isValidHardenedPath = dn),
        (t.isValidSuiAddress = P),
        (t.isValidSuiObjectId = M),
        (t.isValidTransactionDigest = _),
        (t.mainnetConnection = t.localnetConnection = void 0),
        (t.messageWithIntent = Lo),
        (t.mnemonicToSeed = hn),
        (t.mnemonicToSeedHex = gn),
        (t.normalizeStructTag = N),
        (t.normalizeSuiAddress = K),
        (t.normalizeSuiObjectId = V),
        (t.parseStructTag = U),
        (t.publicKeyFromSerialized = cn),
        (t.requestSuiFromFaucet = Jn),
        (t.testnetConnection = void 0),
        Object.defineProperty(t, "toB64", {
          enumerable: !0,
          get: function () {
            return o.toB64;
          },
        }),
        (t.toSerializedSignature = rn),
        (t.verifyMessage = Jo));
      var i = n(r(2925)),
        o = r(8389),
        s = r(378),
        a = r(4398),
        c = r(130),
        u = r(8392),
        l = r(3559),
        d = r(8393),
        p = r(8394),
        h = r(380),
        g = r(379),
        f = n(r(8395)),
        y = r(405),
        b = r(8406),
        m = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        v = (e, t, r) => (
          m(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        w = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        S = (e, t, r, n) => (
          m(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        ),
        E = (e, t, r) => (m(e, t, "access private method"), r),
        T = (t.TransactionDigest = (0, u.string)()),
        j = (t.TransactionEffectsDigest = (0, u.string)()),
        k = (t.TransactionEventDigest = (0, u.string)()),
        C = (t.ObjectId = (0, u.string)()),
        A = (t.SuiAddress = (0, u.string)()),
        O = (t.SequenceNumber = (0, u.string)()),
        I = (t.ObjectOwner = (0, u.union)([
          (0, u.object)({ AddressOwner: A }),
          (0, u.object)({ ObjectOwner: A }),
          (0, u.object)({
            Shared: (0, u.object)({ initial_shared_version: (0, u.number)() }),
          }),
          (0, u.literal)("Immutable"),
        ])),
        x = (t.SuiJsonValue = (0, u.define)("SuiJsonValue", () => !0)),
        B = 32;
      function _(e) {
        try {
          const t = (0, o.fromB58)(e);
          return t.length === B;
        } catch (t) {
          return !1;
        }
      }
      var R = (t.SUI_ADDRESS_LENGTH = 32);
      function P(e) {
        return $(e) && F(e) === R;
      }
      function M(e) {
        return P(e);
      }
      function D(e) {
        return e.includes("::") ? U(e) : e;
      }
      function U(e) {
        const [t, r] = e.split("::"),
          n = e.slice(t.length + r.length + 4),
          i = n.includes("<") ? n.slice(0, n.indexOf("<")) : n,
          o = n.includes("<")
            ? n
                .slice(n.indexOf("<") + 1, n.lastIndexOf(">"))
                .split(",")
                .map((e) => D(e.trim()))
            : [];
        return { address: K(t), module: r, name: i, typeParams: o };
      }
      function N(e) {
        const {
            address: t,
            module: r,
            name: n,
            typeParams: i,
          } = "string" === typeof e ? U(e) : e,
          o =
            i.length > 0
              ? `<${i.map((e) => ("string" === typeof e ? e : N(e))).join(",")}>`
              : "";
        return `${t}::${r}::${n}${o}`;
      }
      function K(e, t) {
        void 0 === t && (t = !1);
        let r = e.toLowerCase();
        return (
          !t && r.startsWith("0x") && (r = r.slice(2)),
          "0x" + r.padStart(2 * R, "0")
        );
      }
      function V(e, t) {
        return (void 0 === t && (t = !1), K(e, t));
      }
      function $(e) {
        return /^(0x|0X)?[a-fA-F0-9]+$/.test(e) && e.length % 2 === 0;
      }
      function F(e) {
        return /^(0x|0X)/.test(e) ? (e.length - 2) / 2 : e.length / 2;
      }
      t.ObjectType = (0, u.union)([(0, u.string)(), (0, u.literal)("package")]);
      var L = (t.SuiObjectRef = (0, u.object)({
          digest: T,
          objectId: (0, u.string)(),
          version: (0, u.union)([(0, u.number)(), (0, u.string)()]),
        })),
        z = (t.SuiGasData = (0, u.object)({
          payment: (0, u.array)(L),
          owner: (0, u.string)(),
          price: (0, u.string)(),
          budget: (0, u.string)(),
        })),
        G = (t.SuiObjectInfo = (0, u.assign)(
          L,
          (0, u.object)({
            type: (0, u.string)(),
            owner: I,
            previousTransaction: T,
          }),
        )),
        q = (t.ObjectContentFields = (0, u.record)(
          (0, u.string)(),
          (0, u.any)(),
        )),
        W = (t.MovePackageContent = (0, u.record)(
          (0, u.string)(),
          (0, u.string)(),
        )),
        H = (t.SuiMoveObject = (0, u.object)({
          type: (0, u.string)(),
          fields: q,
          hasPublicTransfer: (0, u.boolean)(),
        })),
        J = (t.SuiMovePackage = (0, u.object)({ disassembled: W })),
        Y = (t.SuiParsedData = (0, u.union)([
          (0, u.assign)(
            H,
            (0, u.object)({ dataType: (0, u.literal)("moveObject") }),
          ),
          (0, u.assign)(
            J,
            (0, u.object)({ dataType: (0, u.literal)("package") }),
          ),
        ])),
        X =
          ((t.SuiRawMoveObject = (0, u.object)({
            type: (0, u.string)(),
            hasPublicTransfer: (0, u.boolean)(),
            version: O,
            bcsBytes: (0, u.array)((0, u.number)()),
          })),
          (t.SuiRawMovePackage = (0, u.object)({
            id: C,
            moduleMap: (0, u.record)((0, u.string)(), (0, u.string)()),
          }))),
        Z = (t.SuiRawData = (0, u.union)([
          (0, u.assign)(
            H,
            (0, u.object)({ dataType: (0, u.literal)("moveObject") }),
          ),
          (0, u.assign)(
            X,
            (0, u.object)({ dataType: (0, u.literal)("package") }),
          ),
        ])),
        Q =
          ((t.SUI_DECIMALS = 9),
          (t.MIST_PER_SUI = BigInt(1e9)),
          (t.ObjectDigest = (0, u.string)())),
        ee = (t.SuiObjectResponseError = (0, u.object)({
          code: (0, u.string)(),
          error: (0, u.optional)((0, u.string)()),
          object_id: (0, u.optional)(C),
          version: (0, u.optional)(O),
          digest: (0, u.optional)(Q),
        })),
        te = (t.DisplayFieldsResponse = (0, u.object)({
          data: (0, u.nullable)(
            (0, u.record)((0, u.string)(), (0, u.string)()),
          ),
          error: (0, u.nullable)(ee),
        })),
        re = (t.DisplayFieldsBackwardCompatibleResponse = (0, u.union)([
          te,
          (0, u.optional)((0, u.record)((0, u.string)(), (0, u.string)())),
        ])),
        ne = (t.SuiObjectData = (0, u.object)({
          objectId: C,
          version: O,
          digest: Q,
          type: (0, u.optional)((0, u.string)()),
          content: (0, u.optional)(Y),
          bcs: (0, u.optional)(Z),
          owner: (0, u.optional)(I),
          previousTransaction: (0, u.optional)(T),
          storageRebate: (0, u.optional)((0, u.string)()),
          display: (0, u.optional)(re),
        })),
        ie =
          ((t.SuiObjectDataOptions = (0, u.object)({
            showType: (0, u.optional)((0, u.boolean)()),
            showContent: (0, u.optional)((0, u.boolean)()),
            showBcs: (0, u.optional)((0, u.boolean)()),
            showOwner: (0, u.optional)((0, u.boolean)()),
            showPreviousTransaction: (0, u.optional)((0, u.boolean)()),
            showStorageRebate: (0, u.optional)((0, u.boolean)()),
            showDisplay: (0, u.optional)((0, u.boolean)()),
          })),
          (t.ObjectStatus = (0, u.union)([
            (0, u.literal)("Exists"),
            (0, u.literal)("notExists"),
            (0, u.literal)("Deleted"),
          ])),
          (t.GetOwnedObjectsResponse = (0, u.array)(G)),
          (t.SuiObjectResponse = (0, u.object)({
            data: (0, u.optional)(ne),
            error: (0, u.optional)(ee),
          })));
      function oe(e) {
        return e.data;
      }
      function se(e) {
        if (
          e.error &&
          "object_id" in e.error &&
          "version" in e.error &&
          "digest" in e.error
        ) {
          const t = e.error;
          return {
            objectId: t.object_id,
            version: t.version,
            digest: t.digest,
          };
        }
      }
      function ae(e) {
        if (
          e.error &&
          "object_id" in e.error &&
          !("version" in e.error) &&
          !("digest" in e.error)
        )
          return e.error.object_id;
      }
      function ce(e) {
        if ("reference" in e) return e.reference;
        const t = oe(e);
        return t
          ? { objectId: t.objectId, version: t.version, digest: t.digest }
          : se(e);
      }
      function ue(e) {
        var t, r;
        return "objectId" in e
          ? e.objectId
          : null !==
                (t =
                  null === (r = ce(e)) || void 0 === r ? void 0 : r.objectId) &&
              void 0 !== t
            ? t
            : ae(e);
      }
      function le(e) {
        var t;
        return "version" in e
          ? e.version
          : null === (t = ce(e)) || void 0 === t
            ? void 0
            : t.version;
      }
      function de(e) {
        return void 0 !== e.data;
      }
      function pe(e) {
        const t = de(e) ? e.data : e;
        var r;
        return (null !== t && void 0 !== t && t.type) || !("data" in e)
          ? null === t || void 0 === t
            ? void 0
            : t.type
          : "package" ===
              (null === t ||
              void 0 === t ||
              null === (r = t.content) ||
              void 0 === r
                ? void 0
                : r.dataType)
            ? "package"
            : ve(e);
      }
      function he(e) {
        var t;
        return null === (t = oe(e)) || void 0 === t
          ? void 0
          : t.previousTransaction;
      }
      function ge(e) {
        var t;
        return (0, u.is)(e, I)
          ? e
          : null === (t = oe(e)) || void 0 === t
            ? void 0
            : t.owner;
      }
      function fe(e) {
        var t;
        const r = null === (t = oe(e)) || void 0 === t ? void 0 : t.display;
        return r
          ? (0, u.is)(r, te)
            ? r
            : { data: r, error: null }
          : { data: null, error: null };
      }
      function ye(e) {
        const t = ge(e);
        return "object" === typeof t && "Shared" in t
          ? t.Shared.initial_shared_version
          : void 0;
      }
      function be(e) {
        const t = ge(e);
        return "object" === typeof t && "Shared" in t;
      }
      function me(e) {
        const t = ge(e);
        return "Immutable" === t;
      }
      function ve(e) {
        var t;
        return null === (t = Ee(e)) || void 0 === t ? void 0 : t.type;
      }
      function we(e) {
        var t;
        return "fields" in e
          ? e.fields
          : null === (t = Ee(e)) || void 0 === t
            ? void 0
            : t.fields;
      }
      function Se(e) {
        return void 0 !== e.content;
      }
      function Ee(e) {
        const t = "data" in e ? oe(e) : e;
        if (t && Se(t) && "moveObject" === t.content.dataType) return t.content;
      }
      function Te(e) {
        var t, r;
        return (
          null !==
            (t =
              null === (r = Ee(e)) || void 0 === r
                ? void 0
                : r.hasPublicTransfer) &&
          void 0 !== t &&
          t
        );
      }
      function je(e) {
        var t;
        if ("disassembled" in e) return e.disassembled;
        const r = oe(e);
        return "package" ===
          (null === r ||
          void 0 === r ||
          null === (t = r.content) ||
          void 0 === t
            ? void 0
            : t.dataType)
          ? r.content.disassembled
          : void 0;
      }
      var ke = (t.CheckpointedObjectId = (0, u.object)({
          objectId: C,
          atCheckpoint: (0, u.optional)((0, u.number)()),
        })),
        Ce = (t.PaginatedObjectsResponse = (0, u.object)({
          data: (0, u.array)(ie),
          nextCursor: (0, u.union)([(0, u.nullable)(C), (0, u.nullable)(ke)]),
          hasNextPage: (0, u.boolean)(),
        })),
        Ae = (t.ObjectRead = (0, u.union)([
          (0, u.object)({
            details: ne,
            status: (0, u.literal)("VersionFound"),
          }),
          (0, u.object)({
            details: C,
            status: (0, u.literal)("ObjectNotExists"),
          }),
          (0, u.object)({
            details: L,
            status: (0, u.literal)("ObjectDeleted"),
          }),
          (0, u.object)({
            details: (0, u.tuple)([C, (0, u.number)()]),
            status: (0, u.literal)("VersionNotFound"),
          }),
          (0, u.object)({
            details: (0, u.object)({
              asked_version: (0, u.number)(),
              latest_version: (0, u.number)(),
              object_id: C,
            }),
            status: (0, u.literal)("VersionTooHigh"),
          }),
        ])),
        Oe = (t.EventId = (0, u.object)({ txDigest: T, eventSeq: O })),
        Ie = (t.SuiEvent = (0, u.object)({
          id: Oe,
          packageId: C,
          transactionModule: (0, u.string)(),
          sender: A,
          type: (0, u.string)(),
          parsedJson: (0, u.optional)(
            (0, u.record)((0, u.string)(), (0, u.any)()),
          ),
          bcs: (0, u.optional)((0, u.string)()),
          timestampMs: (0, u.optional)((0, u.string)()),
        })),
        xe = (t.PaginatedEvents = (0, u.object)({
          data: (0, u.array)(Ie),
          nextCursor: (0, u.nullable)(Oe),
          hasNextPage: (0, u.boolean)(),
        })),
        Be = (t.SubscriptionId = (0, u.number)()),
        _e = (t.SubscriptionEvent = (0, u.object)({
          subscription: Be,
          result: Ie,
        }));
      function Re(e) {
        return e.sender;
      }
      function Pe(e) {
        return e.packageId;
      }
      var Me = (t.EpochId = (0, u.string)()),
        De = (t.SuiChangeEpoch = (0, u.object)({
          epoch: Me,
          storage_charge: (0, u.string)(),
          computation_charge: (0, u.string)(),
          storage_rebate: (0, u.string)(),
          epoch_start_timestamp_ms: (0, u.optional)((0, u.string)()),
        })),
        Ue = (t.SuiConsensusCommitPrologue = (0, u.object)({
          epoch: Me,
          round: (0, u.string)(),
          commit_timestamp_ms: (0, u.string)(),
        })),
        Ne = (t.Genesis = (0, u.object)({ objects: (0, u.array)(C) })),
        Ke = (t.SuiArgument = (0, u.union)([
          (0, u.literal)("GasCoin"),
          (0, u.object)({ Input: (0, u.number)() }),
          (0, u.object)({ Result: (0, u.number)() }),
          (0, u.object)({
            NestedResult: (0, u.tuple)([(0, u.number)(), (0, u.number)()]),
          }),
        ])),
        Ve = (t.MoveCallSuiTransaction = (0, u.object)({
          arguments: (0, u.optional)((0, u.array)(Ke)),
          type_arguments: (0, u.optional)((0, u.array)((0, u.string)())),
          package: C,
          module: (0, u.string)(),
          function: (0, u.string)(),
        })),
        $e = (t.SuiTransaction = (0, u.union)([
          (0, u.object)({ MoveCall: Ve }),
          (0, u.object)({
            TransferObjects: (0, u.tuple)([(0, u.array)(Ke), Ke]),
          }),
          (0, u.object)({ SplitCoins: (0, u.tuple)([Ke, (0, u.array)(Ke)]) }),
          (0, u.object)({ MergeCoins: (0, u.tuple)([Ke, (0, u.array)(Ke)]) }),
          (0, u.object)({
            Publish: (0, u.union)([
              (0, u.tuple)([J, (0, u.array)(C)]),
              (0, u.array)(C),
            ]),
          }),
          (0, u.object)({
            Upgrade: (0, u.union)([
              (0, u.tuple)([J, (0, u.array)(C), C, Ke]),
              (0, u.tuple)([(0, u.array)(C), C, Ke]),
            ]),
          }),
          (0, u.object)({
            MakeMoveVec: (0, u.tuple)([
              (0, u.nullable)((0, u.string)()),
              (0, u.array)(Ke),
            ]),
          }),
        ])),
        Fe = (t.SuiCallArg = (0, u.union)([
          (0, u.object)({
            type: (0, u.literal)("pure"),
            valueType: (0, u.optional)((0, u.string)()),
            value: x,
          }),
          (0, u.object)({
            type: (0, u.literal)("object"),
            objectType: (0, u.literal)("immOrOwnedObject"),
            objectId: C,
            version: O,
            digest: Q,
          }),
          (0, u.object)({
            type: (0, u.literal)("object"),
            objectType: (0, u.literal)("sharedObject"),
            objectId: C,
            initialSharedVersion: O,
            mutable: (0, u.boolean)(),
          }),
        ])),
        Le = (t.ProgrammableTransaction = (0, u.object)({
          transactions: (0, u.array)($e),
          inputs: (0, u.array)(Fe),
        })),
        ze = (t.SuiTransactionBlockKind = (0, u.union)([
          (0, u.assign)(
            De,
            (0, u.object)({ kind: (0, u.literal)("ChangeEpoch") }),
          ),
          (0, u.assign)(
            Ue,
            (0, u.object)({ kind: (0, u.literal)("ConsensusCommitPrologue") }),
          ),
          (0, u.assign)(Ne, (0, u.object)({ kind: (0, u.literal)("Genesis") })),
          (0, u.assign)(
            Le,
            (0, u.object)({ kind: (0, u.literal)("ProgrammableTransaction") }),
          ),
        ])),
        Ge = (t.SuiTransactionBlockData = (0, u.object)({
          messageVersion: (0, u.literal)("v1"),
          transaction: ze,
          sender: A,
          gasData: z,
        })),
        qe = (t.AuthoritySignature = (0, u.string)()),
        We = (t.GenericAuthoritySignature = (0, u.union)([
          qe,
          (0, u.array)(qe),
        ])),
        He =
          ((t.AuthorityQuorumSignInfo = (0, u.object)({
            epoch: Me,
            signature: We,
            signers_map: (0, u.array)((0, u.number)()),
          })),
          (0, u.object)({
            computationCost: (0, u.string)(),
            storageCost: (0, u.string)(),
            storageRebate: (0, u.string)(),
            nonRefundableStorageFee: (0, u.string)(),
          })),
        Je = (t.ExecutionStatusType = (0, u.union)([
          (0, u.literal)("success"),
          (0, u.literal)("failure"),
        ])),
        Ye = (t.ExecutionStatus = (0, u.object)({
          status: Je,
          error: (0, u.optional)((0, u.string)()),
        })),
        Xe = (t.OwnedObjectRef = (0, u.object)({ owner: I, reference: L })),
        Ze = (t.TransactionEffectsModifiedAtVersions = (0, u.object)({
          objectId: C,
          sequenceNumber: O,
        })),
        Qe = (t.TransactionEffects = (0, u.object)({
          messageVersion: (0, u.literal)("v1"),
          status: Ye,
          executedEpoch: Me,
          modifiedAtVersions: (0, u.optional)((0, u.array)(Ze)),
          gasUsed: He,
          sharedObjects: (0, u.optional)((0, u.array)(L)),
          transactionDigest: T,
          created: (0, u.optional)((0, u.array)(Xe)),
          mutated: (0, u.optional)((0, u.array)(Xe)),
          unwrapped: (0, u.optional)((0, u.array)(Xe)),
          deleted: (0, u.optional)((0, u.array)(L)),
          unwrapped_then_deleted: (0, u.optional)((0, u.array)(L)),
          wrapped: (0, u.optional)((0, u.array)(L)),
          gasObject: Xe,
          eventsDigest: (0, u.optional)(k),
          dependencies: (0, u.optional)((0, u.array)(T)),
        })),
        et = (t.TransactionEvents = (0, u.array)(Ie)),
        tt = (0, u.tuple)([(0, u.array)((0, u.number)()), (0, u.string)()]),
        rt = (0, u.tuple)([Ke, (0, u.array)((0, u.number)()), (0, u.string)()]),
        nt = (0, u.object)({
          mutableReferenceOutputs: (0, u.optional)((0, u.array)(rt)),
          returnValues: (0, u.optional)((0, u.array)(tt)),
        }),
        it = (t.DevInspectResults = (0, u.object)({
          effects: Qe,
          events: et,
          results: (0, u.optional)((0, u.array)(nt)),
          error: (0, u.optional)((0, u.string)()),
        })),
        ot = (t.AuthorityName = (0, u.string)()),
        st = (t.SuiTransactionBlock = (0, u.object)({
          data: Ge,
          txSignatures: (0, u.array)((0, u.string)()),
        })),
        at = (t.SuiObjectChangePublished = (0, u.object)({
          type: (0, u.literal)("published"),
          packageId: C,
          version: O,
          digest: Q,
          modules: (0, u.array)((0, u.string)()),
        })),
        ct = (t.SuiObjectChangeTransferred = (0, u.object)({
          type: (0, u.literal)("transferred"),
          sender: A,
          recipient: I,
          objectType: (0, u.string)(),
          objectId: C,
          version: O,
          digest: Q,
        })),
        ut = (t.SuiObjectChangeMutated = (0, u.object)({
          type: (0, u.literal)("mutated"),
          sender: A,
          owner: I,
          objectType: (0, u.string)(),
          objectId: C,
          version: O,
          previousVersion: O,
          digest: Q,
        })),
        lt = (t.SuiObjectChangeDeleted = (0, u.object)({
          type: (0, u.literal)("deleted"),
          sender: A,
          objectType: (0, u.string)(),
          objectId: C,
          version: O,
        })),
        dt = (t.SuiObjectChangeWrapped = (0, u.object)({
          type: (0, u.literal)("wrapped"),
          sender: A,
          objectType: (0, u.string)(),
          objectId: C,
          version: O,
        })),
        pt = (t.SuiObjectChangeCreated = (0, u.object)({
          type: (0, u.literal)("created"),
          sender: A,
          owner: I,
          objectType: (0, u.string)(),
          objectId: C,
          version: O,
          digest: Q,
        })),
        ht = (t.SuiObjectChange = (0, u.union)([at, ct, ut, lt, dt, pt])),
        gt = (t.BalanceChange = (0, u.object)({
          owner: I,
          coinType: (0, u.string)(),
          amount: (0, u.string)(),
        })),
        ft = (t.SuiTransactionBlockResponse = (0, u.object)({
          digest: T,
          transaction: (0, u.optional)(st),
          effects: (0, u.optional)(Qe),
          events: (0, u.optional)(et),
          timestampMs: (0, u.optional)((0, u.string)()),
          checkpoint: (0, u.optional)((0, u.string)()),
          confirmedLocalExecution: (0, u.optional)((0, u.boolean)()),
          objectChanges: (0, u.optional)((0, u.array)(ht)),
          balanceChanges: (0, u.optional)((0, u.array)(gt)),
          errors: (0, u.optional)((0, u.array)((0, u.string)())),
        })),
        yt =
          ((t.SuiTransactionBlockResponseOptions = (0, u.object)({
            showInput: (0, u.optional)((0, u.boolean)()),
            showEffects: (0, u.optional)((0, u.boolean)()),
            showEvents: (0, u.optional)((0, u.boolean)()),
            showObjectChanges: (0, u.optional)((0, u.boolean)()),
            showBalanceChanges: (0, u.optional)((0, u.boolean)()),
          })),
          (t.PaginatedTransactionResponse = (0, u.object)({
            data: (0, u.array)(ft),
            nextCursor: (0, u.nullable)(T),
            hasNextPage: (0, u.boolean)(),
          }))),
        bt = (t.DryRunTransactionBlockResponse = (0, u.object)({
          effects: Qe,
          events: et,
          objectChanges: (0, u.array)(ht),
          balanceChanges: (0, u.array)(gt),
          input: (0, u.optional)(Ge),
        }));
      function mt(e) {
        return e.transaction;
      }
      function vt(e) {
        return e.digest;
      }
      function wt(e) {
        var t;
        return null === (t = e.transaction) || void 0 === t
          ? void 0
          : t.txSignatures;
      }
      function St(e) {
        var t;
        return null === (t = e.transaction) || void 0 === t
          ? void 0
          : t.data.sender;
      }
      function Et(e) {
        var t;
        return null === (t = e.transaction) || void 0 === t
          ? void 0
          : t.data.gasData;
      }
      function Tt(e) {
        var t;
        return null === (t = Et(e)) || void 0 === t ? void 0 : t.payment;
      }
      function jt(e) {
        var t;
        return null === (t = Et(e)) || void 0 === t ? void 0 : t.price;
      }
      function kt(e) {
        var t;
        return null === (t = Et(e)) || void 0 === t ? void 0 : t.budget;
      }
      function Ct(e) {
        return "ChangeEpoch" === e.kind ? e : void 0;
      }
      function At(e) {
        return "ConsensusCommitPrologue" === e.kind ? e : void 0;
      }
      function Ot(e) {
        var t;
        return null === (t = e.transaction) || void 0 === t
          ? void 0
          : t.data.transaction;
      }
      function It(e) {
        return e.kind;
      }
      function xt(e) {
        return "ProgrammableTransaction" === e.kind ? e : void 0;
      }
      function Bt(e) {
        var t;
        return null === (t = _t(e)) || void 0 === t ? void 0 : t.status;
      }
      function _t(e) {
        var t;
        return null === (t = Ut(e)) || void 0 === t ? void 0 : t.status;
      }
      function Rt(e) {
        var t;
        return null === (t = _t(e)) || void 0 === t ? void 0 : t.error;
      }
      function Pt(e) {
        var t;
        return (0, u.is)(e, Qe)
          ? e.gasUsed
          : null === (t = Ut(e)) || void 0 === t
            ? void 0
            : t.gasUsed;
      }
      function Mt(e) {
        const t = Pt(e);
        return t
          ? BigInt(t.computationCost) +
              BigInt(t.storageCost) -
              BigInt(t.storageRebate)
          : void 0;
      }
      function Dt(e) {
        const t = Pt(e);
        return t ? BigInt(t.computationCost) + BigInt(t.storageCost) : void 0;
      }
      function Ut(e) {
        return e.effects;
      }
      function Nt(e) {
        return e.events;
      }
      function Kt(e) {
        var t;
        return null === (t = Ut(e)) || void 0 === t ? void 0 : t.created;
      }
      function Vt(e) {
        var t;
        return null !== (t = e.timestampMs) && void 0 !== t ? t : void 0;
      }
      function $t(e) {
        var t, r;
        return null === (t = Ut(e)) ||
          void 0 === t ||
          null === (r = t.created) ||
          void 0 === r
          ? void 0
          : r.map((e) => e.reference);
      }
      function Ft(e) {
        return e.objectChanges;
      }
      function Lt(e) {
        var t, r;
        return null !==
          (t =
            null === (r = e.objectChanges) || void 0 === r
              ? void 0
              : r.filter((e) => (0, u.is)(e, at))) && void 0 !== t
          ? t
          : [];
      }
      function zt(e) {
        if (
          "object" !== typeof e ||
          null === e ||
          !("type" in e) ||
          !e.type.startsWith("0x1::option::Option<")
        )
          return e;
      }
      var Gt = (t.SUI_SYSTEM_ADDRESS = "0x3"),
        qt = (t.SUI_FRAMEWORK_ADDRESS = "0x2"),
        Wt = (t.MOVE_STDLIB_ADDRESS = "0x1"),
        Ht = (t.OBJECT_MODULE_NAME = "object"),
        Jt = ((t.UID_STRUCT_NAME = "UID"), (t.ID_STRUCT_NAME = "ID")),
        Yt = (t.SUI_TYPE_ARG = qt + "::sui::SUI"),
        Xt =
          ((t.VALIDATORS_EVENTS_QUERY =
            "0x3::validator_set::ValidatorEpochInfoEventV2"),
          (t.SUI_CLOCK_OBJECT_ID = V("0x6")),
          (t.PAY_MODULE_NAME = "pay"),
          (t.PAY_SPLIT_COIN_VEC_FUNC_NAME = "split_vec"),
          (t.PAY_JOIN_COIN_FUNC_NAME = "join"),
          (t.COIN_TYPE_ARG_REGEX = /^0x2::coin::Coin<(.+)>$/));
      function Zt(e) {
        return !!e.data || !!e.type;
      }
      var Qt = (t.CoinMetadataStruct = (0, u.object)({
          decimals: (0, u.number)(),
          name: (0, u.string)(),
          symbol: (0, u.string)(),
          description: (0, u.string)(),
          iconUrl: (0, u.nullable)((0, u.string)()),
          id: (0, u.nullable)(C),
        })),
        er = class {
          static isCoin(e) {
            var t;
            return (
              null !=
              (null === (t = er.getType(e)) || void 0 === t
                ? void 0
                : t.match(Xt))
            );
          }
          static getCoinType(e) {
            var t;
            const [, r] = null !== (t = e.match(Xt)) && void 0 !== t ? t : [];
            return r || null;
          }
          static getCoinTypeArg(e) {
            const t = er.getType(e);
            return t ? er.getCoinType(t) : null;
          }
          static isSUI(e) {
            const t = er.getCoinTypeArg(e);
            return !!t && "SUI" === er.getCoinSymbol(t);
          }
          static getCoinSymbol(e) {
            return e.substring(e.lastIndexOf(":") + 1);
          }
          static getCoinStructTag(e) {
            return {
              address: V(e.split("::")[0]),
              module: e.split("::")[1],
              name: e.split("::")[2],
              typeParams: [],
            };
          }
          static getID(e) {
            return "fields" in e ? e.fields.id.id : ue(e);
          }
          static totalBalance(e) {
            return e.reduce(
              (e, t) => e + er.getBalanceFromCoinStruct(t),
              BigInt(0),
            );
          }
          static sortByBalance(e) {
            return [...e].sort((e, t) =>
              er.getBalanceFromCoinStruct(e) < er.getBalanceFromCoinStruct(t)
                ? -1
                : er.getBalanceFromCoinStruct(e) >
                    er.getBalanceFromCoinStruct(t)
                  ? 1
                  : 0,
            );
          }
          static getBalanceFromCoinStruct(e) {
            return BigInt(e.balance);
          }
          static getBalance(e) {
            var t;
            if (!er.isCoin(e)) return;
            const r = null === (t = we(e)) || void 0 === t ? void 0 : t.balance;
            return BigInt(r);
          }
          static getType(e) {
            return Zt(e) ? pe(e) : e.type;
          }
        };
      t.Coin = er;
      var tr = class {
          static isDelegationSuiObject(e) {
            return "type" in e && e.type === tr.SUI_OBJECT_TYPE;
          }
          constructor(e) {
            this.suiObject = e;
          }
          nextRewardUnclaimedEpoch() {
            return this.suiObject.data.fields.next_reward_unclaimed_epoch;
          }
          activeDelegation() {
            return BigInt(
              zt(this.suiObject.data.fields.active_delegation) || 0,
            );
          }
          delegateAmount() {
            return this.suiObject.data.fields.delegate_amount;
          }
          endingEpoch() {
            return zt(this.suiObject.data.fields.ending_epoch);
          }
          validatorAddress() {
            return this.suiObject.data.fields.validator_address;
          }
          isActive() {
            return this.activeDelegation() > 0 && !this.endingEpoch();
          }
          hasUnclaimedRewards(e) {
            return (
              this.nextRewardUnclaimedEpoch() <= e &&
              (this.isActive() || (this.endingEpoch() || 0) > e)
            );
          }
        },
        rr = (t.Delegation = tr);
      function nr(e) {
        return void 0 !== e.Pure;
      }
      rr.SUI_OBJECT_TYPE = "0x2::delegation::Delegation";
      var ir = "vector",
        or = {
          kind: "TransactionKind",
          sender: o.BCS.ADDRESS,
          gasData: "GasData",
          expiration: "TransactionExpiration",
        },
        sr = {
          enums: {
            "Option<T>": { None: null, Some: "T" },
            ObjectArg: {
              ImmOrOwned: "SuiObjectRef",
              Shared: "SharedObjectRef",
            },
            CallArg: {
              Pure: [ir, o.BCS.U8],
              Object: "ObjectArg",
              ObjVec: [ir, "ObjectArg"],
            },
            TypeTag: {
              bool: null,
              u8: null,
              u64: null,
              u128: null,
              address: null,
              signer: null,
              vector: "TypeTag",
              struct: "StructTag",
              u16: null,
              u32: null,
              u256: null,
            },
            TransactionKind: {
              ProgrammableTransaction: "ProgrammableTransaction",
              ChangeEpoch: null,
              Genesis: null,
              ConsensusCommitPrologue: null,
            },
            TransactionExpiration: { None: null, Epoch: o.BCS.U64 },
            TransactionData: { V1: "TransactionDataV1" },
          },
          structs: {
            SuiObjectRef: {
              objectId: o.BCS.ADDRESS,
              version: o.BCS.U64,
              digest: "ObjectDigest",
            },
            SharedObjectRef: {
              objectId: o.BCS.ADDRESS,
              initialSharedVersion: o.BCS.U64,
              mutable: o.BCS.BOOL,
            },
            StructTag: {
              address: o.BCS.ADDRESS,
              module: o.BCS.STRING,
              name: o.BCS.STRING,
              typeParams: [ir, "TypeTag"],
            },
            GasData: {
              payment: [ir, "SuiObjectRef"],
              owner: o.BCS.ADDRESS,
              price: o.BCS.U64,
              budget: o.BCS.U64,
            },
            SenderSignedData: {
              data: "TransactionData",
              txSignatures: [ir, [ir, o.BCS.U8]],
            },
            TransactionDataV1: or,
          },
          aliases: { ObjectDigest: o.BCS.BASE58 },
        },
        ar = (t.bcs = new o.BCS({ ...(0, o.getSuiMoveConfig)(), types: sr }));
      ar.registerType(
        "utf8string",
        (e, t) => {
          const r = Array.from(new TextEncoder().encode(t));
          return e.writeVec(r, (e, t) => e.write8(t));
        },
        (e) => {
          let t = e.readVec((e) => e.read8());
          return new TextDecoder().decode(new Uint8Array(t));
        },
      );
      var cr = (t.FaucetCoinInfo = (0, u.object)({
          amount: (0, u.number)(),
          id: C,
          transferTxDigest: T,
        })),
        ur =
          ((t.FaucetResponse = (0, u.object)({
            transferredGasObjects: (0, u.array)(cr),
            error: (0, u.nullable)((0, u.string)()),
          })),
          (t.SuiMoveFunctionArgType = (0, u.union)([
            (0, u.string)(),
            (0, u.object)({ Object: (0, u.string)() }),
          ]))),
        lr = (t.SuiMoveFunctionArgTypes = (0, u.array)(ur)),
        dr = (t.SuiMoveModuleId = (0, u.object)({
          address: (0, u.string)(),
          name: (0, u.string)(),
        })),
        pr = (t.SuiMoveVisibility = (0, u.union)([
          (0, u.literal)("Private"),
          (0, u.literal)("Public"),
          (0, u.literal)("Friend"),
        ])),
        hr = (t.SuiMoveAbilitySet = (0, u.object)({
          abilities: (0, u.array)((0, u.string)()),
        })),
        gr = (t.SuiMoveStructTypeParameter = (0, u.object)({
          constraints: hr,
          isPhantom: (0, u.boolean)(),
        })),
        fr = (t.SuiMoveNormalizedTypeParameterType = (0, u.object)({
          TypeParameter: (0, u.number)(),
        })),
        yr = (t.MoveCallMetric = (0, u.tuple)([
          (0, u.object)({
            module: (0, u.string)(),
            package: (0, u.string)(),
            function: (0, u.string)(),
          }),
          (0, u.string)(),
        ])),
        br = (t.MoveCallMetrics = (0, u.object)({
          rank3Days: (0, u.array)(yr),
          rank7Days: (0, u.array)(yr),
          rank30Days: (0, u.array)(yr),
        }));
      function mr(e) {
        if (!e) return !1;
        if ("string" === typeof e) return !0;
        if ((0, u.is)(e, fr)) return !0;
        if (wr(e)) return !0;
        if ("object" !== typeof e) return !1;
        const t = e;
        return (
          !!(0, u.is)(t.Reference, vr) ||
          !!(0, u.is)(t.MutableReference, vr) ||
          !!(0, u.is)(t.Vector, vr)
        );
      }
      var vr = (t.SuiMoveNormalizedType = (0, u.define)(
        "SuiMoveNormalizedType",
        mr,
      ));
      function wr(e) {
        if (!e || "object" !== typeof e) return !1;
        const t = e;
        if (!t.Struct || "object" !== typeof t.Struct) return !1;
        const r = t.Struct;
        return !(
          "string" !== typeof r.address ||
          "string" !== typeof r.module ||
          "string" !== typeof r.name ||
          !Array.isArray(r.typeArguments) ||
          !r.typeArguments.every((e) => mr(e))
        );
      }
      t.SuiMoveNormalizedStructType = (0, u.define)(
        "SuiMoveNormalizedStructType",
        wr,
      );
      var Sr = (t.SuiMoveNormalizedFunction = (0, u.object)({
          visibility: pr,
          isEntry: (0, u.boolean)(),
          typeParameters: (0, u.array)(hr),
          parameters: (0, u.array)(vr),
          return: (0, u.array)(vr),
        })),
        Er = (t.SuiMoveNormalizedField = (0, u.object)({
          name: (0, u.string)(),
          type: vr,
        })),
        Tr = (t.SuiMoveNormalizedStruct = (0, u.object)({
          abilities: hr,
          typeParameters: (0, u.array)(gr),
          fields: (0, u.array)(Er),
        })),
        jr = (t.SuiMoveNormalizedModule = (0, u.object)({
          fileFormatVersion: (0, u.number)(),
          address: (0, u.string)(),
          name: (0, u.string)(),
          friends: (0, u.array)(dr),
          structs: (0, u.record)((0, u.string)(), Tr),
          exposedFunctions: (0, u.record)((0, u.string)(), Sr),
        })),
        kr = (t.SuiMoveNormalizedModules = (0, u.record)((0, u.string)(), jr));
      function Cr(e) {
        return "object" === typeof e && "MutableReference" in e
          ? e.MutableReference
          : void 0;
      }
      function Ar(e) {
        return "object" === typeof e && "Reference" in e ? e.Reference : void 0;
      }
      function Or(e) {
        if ("object" === typeof e && "Struct" in e) return e;
        const t = Ar(e),
          r = Cr(e);
        return "object" === typeof t && "Struct" in t
          ? t
          : "object" === typeof r && "Struct" in r
            ? r
            : void 0;
      }
      var Ir = (t.Apy = (0, u.object)({ apy: (0, u.number)(), address: A })),
        xr = (t.ValidatorsApy = (0, u.object)({
          epoch: (0, u.string)(),
          apys: (0, u.array)(Ir),
        })),
        Br =
          ((t.Balance = (0, u.object)({ value: (0, u.number)() })),
          (t.StakeObject = (0, u.object)({
            stakedSuiId: C,
            stakeRequestEpoch: Me,
            stakeActiveEpoch: Me,
            principal: (0, u.string)(),
            status: (0, u.union)([
              (0, u.literal)("Active"),
              (0, u.literal)("Pending"),
              (0, u.literal)("Unstaked"),
            ]),
            estimatedReward: (0, u.optional)((0, u.string)()),
          }))),
        _r = (t.DelegatedStake = (0, u.object)({
          validatorAddress: A,
          stakingPool: C,
          stakes: (0, u.array)(Br),
        })),
        Rr = (t.StakeSubsidyFields = (0, u.object)({
          balance: (0, u.object)({ value: (0, u.number)() }),
          distribution_counter: (0, u.number)(),
          current_distribution_amount: (0, u.number)(),
          stake_subsidy_period_length: (0, u.number)(),
          stake_subsidy_decrease_rate: (0, u.number)(),
        })),
        Pr =
          ((t.StakeSubsidy = (0, u.object)({
            type: (0, u.string)(),
            fields: Rr,
          })),
          (t.SuiSupplyFields = (0, u.object)({ value: (0, u.number)() })),
          (t.ContentsFields = (0, u.object)({
            id: (0, u.string)(),
            size: (0, u.number)(),
            head: (0, u.object)({ vec: (0, u.array)() }),
            tail: (0, u.object)({ vec: (0, u.array)() }),
          }))),
        Mr =
          ((t.ContentsFieldsWithdraw = (0, u.object)({
            id: (0, u.string)(),
            size: (0, u.number)(),
          })),
          (t.Contents = (0, u.object)({ type: (0, u.string)(), fields: Pr })),
          (t.DelegationStakingPoolFields = (0, u.object)({
            exchangeRates: (0, u.object)({
              id: (0, u.string)(),
              size: (0, u.number)(),
            }),
            id: (0, u.string)(),
            pendingStake: (0, u.number)(),
            pendingPoolTokenWithdraw: (0, u.number)(),
            pendingTotalSuiWithdraw: (0, u.number)(),
            poolTokenBalance: (0, u.number)(),
            rewardsPool: (0, u.object)({ value: (0, u.number)() }),
            activationEpoch: (0, u.object)({ vec: (0, u.array)() }),
            deactivationEpoch: (0, u.object)({ vec: (0, u.array)() }),
            suiBalance: (0, u.number)(),
          }))),
        Dr =
          ((t.DelegationStakingPool = (0, u.object)({
            type: (0, u.string)(),
            fields: Mr,
          })),
          (t.Validators = (0, u.array)((0, u.tuple)([ot, (0, u.string)()])))),
        Ur = (t.CommitteeInfo = (0, u.object)({ epoch: Me, validators: Dr })),
        Nr = (t.SuiValidatorSummary = (0, u.object)({
          suiAddress: A,
          protocolPubkeyBytes: (0, u.string)(),
          networkPubkeyBytes: (0, u.string)(),
          workerPubkeyBytes: (0, u.string)(),
          proofOfPossessionBytes: (0, u.string)(),
          operationCapId: (0, u.string)(),
          name: (0, u.string)(),
          description: (0, u.string)(),
          imageUrl: (0, u.string)(),
          projectUrl: (0, u.string)(),
          p2pAddress: (0, u.string)(),
          netAddress: (0, u.string)(),
          primaryAddress: (0, u.string)(),
          workerAddress: (0, u.string)(),
          nextEpochProtocolPubkeyBytes: (0, u.nullable)((0, u.string)()),
          nextEpochProofOfPossession: (0, u.nullable)((0, u.string)()),
          nextEpochNetworkPubkeyBytes: (0, u.nullable)((0, u.string)()),
          nextEpochWorkerPubkeyBytes: (0, u.nullable)((0, u.string)()),
          nextEpochNetAddress: (0, u.nullable)((0, u.string)()),
          nextEpochP2pAddress: (0, u.nullable)((0, u.string)()),
          nextEpochPrimaryAddress: (0, u.nullable)((0, u.string)()),
          nextEpochWorkerAddress: (0, u.nullable)((0, u.string)()),
          votingPower: (0, u.string)(),
          gasPrice: (0, u.string)(),
          commissionRate: (0, u.string)(),
          nextEpochStake: (0, u.string)(),
          nextEpochGasPrice: (0, u.string)(),
          nextEpochCommissionRate: (0, u.string)(),
          stakingPoolId: (0, u.string)(),
          stakingPoolActivationEpoch: (0, u.nullable)((0, u.string)()),
          stakingPoolDeactivationEpoch: (0, u.nullable)((0, u.string)()),
          stakingPoolSuiBalance: (0, u.string)(),
          rewardsPool: (0, u.string)(),
          poolTokenBalance: (0, u.string)(),
          pendingStake: (0, u.string)(),
          pendingPoolTokenWithdraw: (0, u.string)(),
          pendingTotalSuiWithdraw: (0, u.string)(),
          exchangeRatesId: (0, u.string)(),
          exchangeRatesSize: (0, u.string)(),
        })),
        Kr = (t.SuiSystemStateSummary = (0, u.object)({
          epoch: (0, u.string)(),
          protocolVersion: (0, u.string)(),
          systemStateVersion: (0, u.string)(),
          storageFundTotalObjectStorageRebates: (0, u.string)(),
          storageFundNonRefundableBalance: (0, u.string)(),
          referenceGasPrice: (0, u.string)(),
          safeMode: (0, u.boolean)(),
          safeModeStorageRewards: (0, u.string)(),
          safeModeComputationRewards: (0, u.string)(),
          safeModeStorageRebates: (0, u.string)(),
          safeModeNonRefundableStorageFee: (0, u.string)(),
          epochStartTimestampMs: (0, u.string)(),
          epochDurationMs: (0, u.string)(),
          stakeSubsidyStartEpoch: (0, u.string)(),
          maxValidatorCount: (0, u.string)(),
          minValidatorJoiningStake: (0, u.string)(),
          validatorLowStakeThreshold: (0, u.string)(),
          validatorVeryLowStakeThreshold: (0, u.string)(),
          validatorLowStakeGracePeriod: (0, u.string)(),
          stakeSubsidyBalance: (0, u.string)(),
          stakeSubsidyDistributionCounter: (0, u.string)(),
          stakeSubsidyCurrentDistributionAmount: (0, u.string)(),
          stakeSubsidyPeriodLength: (0, u.string)(),
          stakeSubsidyDecreaseRate: (0, u.number)(),
          totalStake: (0, u.string)(),
          activeValidators: (0, u.array)(Nr),
          pendingActiveValidatorsId: (0, u.string)(),
          pendingActiveValidatorsSize: (0, u.string)(),
          pendingRemovals: (0, u.array)((0, u.string)()),
          stakingPoolMappingsId: (0, u.string)(),
          stakingPoolMappingsSize: (0, u.string)(),
          inactivePoolsId: (0, u.string)(),
          inactivePoolsSize: (0, u.string)(),
          validatorCandidatesId: (0, u.string)(),
          validatorCandidatesSize: (0, u.string)(),
          atRiskValidators: (0, u.array)((0, u.tuple)([A, (0, u.string)()])),
          validatorReportRecords: (0, u.array)(
            (0, u.tuple)([A, (0, u.array)(A)]),
          ),
        })),
        Vr = (t.CoinStruct = (0, u.object)({
          coinType: (0, u.string)(),
          coinObjectId: C,
          version: (0, u.string)(),
          digest: T,
          balance: (0, u.string)(),
          lockedUntilEpoch: (0, u.optional)((0, u.nullable)((0, u.number)())),
          previousTransaction: T,
        })),
        $r = (t.PaginatedCoins = (0, u.object)({
          data: (0, u.array)(Vr),
          nextCursor: (0, u.nullable)(C),
          hasNextPage: (0, u.boolean)(),
        })),
        Fr = (t.CoinBalance = (0, u.object)({
          coinType: (0, u.string)(),
          coinObjectCount: (0, u.number)(),
          totalBalance: (0, u.string)(),
          lockedBalance: (0, u.object)({
            epochId: (0, u.optional)((0, u.number)()),
            number: (0, u.optional)((0, u.number)()),
          }),
        })),
        Lr = (t.CoinSupply = (0, u.object)({ value: (0, u.string)() })),
        zr = (t.EndOfEpochInfo = (0, u.object)({
          lastCheckpointId: (0, u.string)(),
          epochEndTimestamp: (0, u.string)(),
          protocolVersion: (0, u.string)(),
          referenceGasPrice: (0, u.string)(),
          totalStake: (0, u.string)(),
          storageFundReinvestment: (0, u.string)(),
          storageCharge: (0, u.string)(),
          storageRebate: (0, u.string)(),
          storageFundBalance: (0, u.string)(),
          stakeSubsidyAmount: (0, u.string)(),
          totalGasFees: (0, u.string)(),
          totalStakeRewardsDistributed: (0, u.string)(),
          leftoverStorageFundInflow: (0, u.string)(),
        })),
        Gr = (t.EpochInfo = (0, u.object)({
          epoch: (0, u.string)(),
          validators: (0, u.array)(Nr),
          epochTotalTransactions: (0, u.string)(),
          firstCheckpointId: (0, u.string)(),
          epochStartTimestamp: (0, u.string)(),
          endOfEpochInfo: (0, u.nullable)(zr),
        })),
        qr = (t.EpochPage = (0, u.object)({
          data: (0, u.array)(Gr),
          nextCursor: (0, u.nullable)((0, u.string)()),
          hasNextPage: (0, u.boolean)(),
        })),
        Wr = (t.GasCostSummary = (0, u.object)({
          computationCost: (0, u.string)(),
          storageCost: (0, u.string)(),
          storageRebate: (0, u.string)(),
          nonRefundableStorageFee: (0, u.string)(),
        })),
        Hr = ((0, u.string)(), (t.CheckpointDigest = (0, u.string)())),
        Jr =
          ((0, u.object)({ digest: (0, u.array)((0, u.number)()) }),
          (0, u.any)()),
        Yr = (0, u.string)(),
        Xr = (0, u.object)({
          nextEpochCommittee: (0, u.array)(
            (0, u.tuple)([(0, u.string)(), (0, u.string)()]),
          ),
          nextEpochProtocolVersion: (0, u.string)(),
          epochCommitments: (0, u.array)(Jr),
        }),
        Zr =
          ((0, u.object)({ transaction: T, effects: j }),
          (t.Checkpoint = (0, u.object)({
            epoch: (0, u.string)(),
            sequenceNumber: (0, u.string)(),
            digest: Hr,
            networkTotalTransactions: (0, u.string)(),
            previousDigest: (0, u.optional)(Hr),
            epochRollingGasCostSummary: Wr,
            timestampMs: (0, u.string)(),
            endOfEpochData: (0, u.optional)(Xr),
            validatorSignature: (0, u.optional)(Yr),
            transactions: (0, u.array)(T),
            checkpointCommitments: (0, u.array)(Jr),
          }))),
        Qr = (0, u.object)({
          data: (0, u.array)(Zr),
          nextCursor: (0, u.nullable)((0, u.string)()),
          hasNextPage: (0, u.boolean)(),
        }),
        en = (t.SIGNATURE_SCHEME_TO_FLAG = { ED25519: 0, Secp256k1: 1 }),
        tn = (t.SIGNATURE_FLAG_TO_SCHEME = { 0: "ED25519", 1: "Secp256k1" });
      function rn(e) {
        let { signature: t, signatureScheme: r, pubKey: n } = e;
        const i = new Uint8Array(1 + t.length + n.toBytes().length);
        return (
          i.set([en[r]]),
          i.set(t, 1),
          i.set(n.toBytes(), 1 + t.length),
          (0, o.toB64)(i)
        );
      }
      function nn(e) {
        const t = (0, o.fromB64)(e),
          r = tn[t[0]],
          n = "ED25519" === r ? sn : ln,
          i = t.slice(1, t.length - n.SIZE),
          s = t.slice(1 + i.length),
          a = new n(s);
        return { signatureScheme: r, signature: i, pubKey: a };
      }
      var on = 32,
        sn = class {
          constructor(e) {
            if (
              ("string" === typeof e
                ? (this.data = (0, o.fromB64)(e))
                : e instanceof Uint8Array
                  ? (this.data = e)
                  : (this.data = Uint8Array.from(e)),
              this.data.length !== on)
            )
              throw new Error(
                `Invalid public key input. Expected ${on} bytes, got ${this.data.length}`,
              );
          }
          equals(e) {
            return an(this.toBytes(), e.toBytes());
          }
          toBase64() {
            return (0, o.toB64)(this.toBytes());
          }
          toBytes() {
            return this.data;
          }
          toString() {
            return this.toBase64();
          }
          toSuiAddress() {
            let e = new Uint8Array(on + 1);
            return (
              e.set([en["ED25519"]]),
              e.set(this.toBytes(), 1),
              K(
                (0, c.bytesToHex)((0, a.blake2b)(e, { dkLen: 32 })).slice(
                  0,
                  2 * R,
                ),
              )
            );
          }
        };
      function an(e, t) {
        if (e === t) return !0;
        if (e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function cn(e, t) {
        if ("ED25519" === e) return new sn(t);
        if ("Secp256k1" === e) return new ln(t);
        throw new Error("Unknown public key schema");
      }
      ((t.Ed25519PublicKey = sn), (sn.SIZE = on));
      var un = 33,
        ln = class {
          constructor(e) {
            if (
              ("string" === typeof e
                ? (this.data = (0, o.fromB64)(e))
                : e instanceof Uint8Array
                  ? (this.data = e)
                  : (this.data = Uint8Array.from(e)),
              this.data.length !== un)
            )
              throw new Error(
                `Invalid public key input. Expected ${un} bytes, got ${this.data.length}`,
              );
          }
          equals(e) {
            return an(this.toBytes(), e.toBytes());
          }
          toBase64() {
            return (0, o.toB64)(this.toBytes());
          }
          toBytes() {
            return this.data;
          }
          toString() {
            return this.toBase64();
          }
          toSuiAddress() {
            let e = new Uint8Array(un + 1);
            return (
              e.set([en["Secp256k1"]]),
              e.set(this.toBytes(), 1),
              K(
                (0, c.bytesToHex)((0, a.blake2b)(e, { dkLen: 32 })).slice(
                  0,
                  2 * R,
                ),
              )
            );
          }
        };
      function dn(e) {
        return !!new RegExp(
          "^m\\/44'\\/784'\\/[0-9]+'\\/[0-9]+'\\/[0-9]+'+$",
        ).test(e);
      }
      function pn(e) {
        return !!new RegExp(
          "^m\\/54'\\/784'\\/[0-9]+'\\/[0-9]+\\/[0-9]+$",
        ).test(e);
      }
      function hn(e) {
        return (0, d.mnemonicToSeedSync)(e, "");
      }
      function gn(e) {
        return (0, o.toHEX)(hn(e));
      }
      ((t.Secp256k1PublicKey = ln), (ln.SIZE = un));
      var fn = (t.DEFAULT_SECP256K1_DERIVATION_PATH = "m/54'/784'/0'/0/0"),
        yn = class {
          constructor(e) {
            if (e) this.keypair = e;
            else {
              const e = l.secp256k1.utils.randomPrivateKey(),
                t = l.secp256k1.getPublicKey(e, !0);
              this.keypair = { publicKey: t, secretKey: e };
            }
          }
          getKeyScheme() {
            return "Secp256k1";
          }
          static generate() {
            return new yn();
          }
          static fromSecretKey(e, t) {
            const r = l.secp256k1.getPublicKey(e, !0);
            if (!t || !t.skipValidation) {
              const t = new TextEncoder(),
                n = t.encode("sui validation"),
                i = (0, c.bytesToHex)((0, a.blake2b)(n, { dkLen: 32 })),
                o = l.secp256k1.sign(i, e);
              if (!l.secp256k1.verify(o, i, r, { lowS: !0 }))
                throw new Error("Provided secretKey is invalid");
            }
            return new yn({ publicKey: r, secretKey: e });
          }
          static fromSeed(e) {
            let t = l.secp256k1.getPublicKey(e, !0);
            return new yn({ publicKey: t, secretKey: e });
          }
          getPublicKey() {
            return new ln(this.keypair.publicKey);
          }
          signData(e) {
            const t = (0, s.sha256)(e),
              r = l.secp256k1.sign(t, this.keypair.secretKey, { lowS: !0 });
            return r.toCompactRawBytes();
          }
          static deriveKeypair(e, t) {
            if ((null == t && (t = fn), !pn(t)))
              throw new Error("Invalid derivation path");
            const r = p.HDKey.fromMasterSeed(hn(e)).derive(t);
            if (null == r.publicKey || null == r.privateKey)
              throw new Error("Invalid key");
            return new yn({ publicKey: r.publicKey, secretKey: r.privateKey });
          }
          export() {
            return {
              schema: "Secp256k1",
              privateKey: (0, o.toB64)(this.keypair.secretKey),
            };
          }
        };
      t.Secp256k1Keypair = yn;
      var bn = (t.PRIVATE_KEY_SIZE = 32),
        mn = (t.LEGACY_PRIVATE_KEY_SIZE = 64);
      function vn(e) {
        const t = (0, o.fromB64)(e.privateKey);
        switch (e.schema) {
          case "ED25519":
            let r = t;
            return (
              t.length === mn && (r = t.slice(0, bn)),
              In.fromSecretKey(r)
            );
          case "Secp256k1":
            return yn.fromSecretKey(t);
          default:
            throw new Error("Invalid keypair schema " + e.schema);
        }
      }
      var wn = "ed25519 seed",
        Sn = 2147483648,
        En = new RegExp("^m(\\/[0-9]+')+$"),
        Tn = (e) => e.replace("'", ""),
        jn = (e) => {
          const t = g.hmac.create(h.sha512, wn),
            r = t.update((0, o.fromHEX)(e)).digest(),
            n = r.slice(0, 32),
            i = r.slice(32);
          return { key: n, chainCode: i };
        },
        kn = (e, t) => {
          let { key: r, chainCode: n } = e;
          const i = new ArrayBuffer(4),
            o = new DataView(i);
          o.setUint32(0, t);
          const s = new Uint8Array(1 + r.length + i.byteLength);
          (s.set(new Uint8Array(1).fill(0)),
            s.set(r, 1),
            s.set(new Uint8Array(i, 0, i.byteLength), r.length + 1));
          const a = g.hmac.create(h.sha512, n).update(s).digest(),
            c = a.slice(0, 32),
            u = a.slice(32);
          return { key: c, chainCode: u };
        },
        Cn = (e) => !!En.test(e) && !e.split("/").slice(1).map(Tn).some(isNaN),
        An = function (e, t, r) {
          if ((void 0 === r && (r = Sn), !Cn(e)))
            throw new Error("Invalid derivation path");
          const { key: n, chainCode: i } = jn(t),
            o = e
              .split("/")
              .slice(1)
              .map(Tn)
              .map((e) => parseInt(e, 10));
          return o.reduce((e, t) => kn(e, t + r), { key: n, chainCode: i });
        },
        On = (t.DEFAULT_ED25519_DERIVATION_PATH = "m/44'/784'/0'/0'/0'"),
        In = class {
          constructor(e) {
            this.keypair = e || i.default.sign.keyPair();
          }
          getKeyScheme() {
            return "ED25519";
          }
          static generate() {
            return new In(i.default.sign.keyPair());
          }
          static fromSecretKey(e, t) {
            const r = e.length;
            if (r !== bn)
              throw new Error(
                `Wrong secretKey size. Expected ${bn} bytes, got ${r}.`,
              );
            const n = i.default.sign.keyPair.fromSeed(e);
            if (!t || !t.skipValidation) {
              const e = new TextEncoder(),
                t = e.encode("sui validation"),
                r = i.default.sign.detached(t, n.secretKey);
              if (!i.default.sign.detached.verify(t, r, n.publicKey))
                throw new Error("provided secretKey is invalid");
            }
            return new In(n);
          }
          getPublicKey() {
            return new sn(this.keypair.publicKey);
          }
          signData(e) {
            return i.default.sign.detached(e, this.keypair.secretKey);
          }
          static deriveKeypair(e, t) {
            if ((null == t && (t = On), !dn(t)))
              throw new Error("Invalid derivation path");
            const { key: r } = An(t, gn(e));
            return In.fromSecretKey(r);
          }
          export() {
            return {
              schema: "ED25519",
              privateKey: (0, o.toB64)(this.keypair.secretKey.slice(0, bn)),
            };
          }
        };
      t.Ed25519Keypair = In;
      var xn = "0.34.1",
        Bn = "1.2.0",
        _n = class extends Error {
          constructor(e) {
            (super(
              e.cause ? "RPC Error: " + e.cause.message : "Unknown RPC Error",
              { cause: e.cause },
            ),
              (this.req = e.req),
              (this.code = e.code),
              (this.data = e.data));
          }
        };
      t.RPCError = _n;
      var Rn = class extends Error {
        constructor(e) {
          (super(
            "RPC Validation Error: The response returned from RPC server does not match the TypeScript definition. This is likely because the SDK version is not compatible with the RPC server.",
            { cause: e.cause },
          ),
            (this.req = e.req),
            (this.result = e.result),
            (this.message = this.toString()));
        }
        toString() {
          let e = super.toString();
          return (
            this.cause && (e += "\nCause: " + this.cause),
            this.result &&
              (e +=
                "\nReponse Received: " + JSON.stringify(this.result, null, 2)),
            e
          );
        }
      };
      t.RPCValidationError = Rn;
      var Pn = class extends Error {};
      t.FaucetRateLimitError = Pn;
      var Mn = (t.ValidResponse = (0, u.object)({
          jsonrpc: (0, u.literal)("2.0"),
          id: (0, u.string)(),
          result: (0, u.any)(),
        })),
        Dn = (t.ErrorResponse = (0, u.object)({
          jsonrpc: (0, u.literal)("2.0"),
          id: (0, u.string)(),
          error: (0, u.object)({
            code: (0, u.any)(),
            message: (0, u.string)(),
            data: (0, u.optional)((0, u.any)()),
          }),
        })),
        Un = class {
          constructor(e, t) {
            this.rpcClient = new f.default(async (r, n) => {
              const i = {
                method: "POST",
                body: r,
                headers: {
                  "Content-Type": "application/json",
                  "Client-Sdk-Type": "typescript",
                  "Client-Sdk-Version": xn,
                  "Client-Target-Api-Version": Bn,
                  ...t,
                },
              };
              try {
                let t = await fetch(e, i);
                const r = await t.text();
                if (t.ok) n(null, r);
                else {
                  const e = "text/html" === t.headers.get("content-type");
                  n(
                    new Error(
                      `${t.status} ${t.statusText}${e ? "" : ": " + r}`,
                    ),
                  );
                }
              } catch (o) {
                n(o);
              }
            }, {});
          }
          async requestWithType(e, t, r) {
            const n = { method: e, args: t },
              i = await this.request(e, t);
            if ((0, u.is)(i, Dn))
              throw new _n({
                req: n,
                code: i.error.code,
                data: i.error.data,
                cause: new Error(i.error.message),
              });
            if ((0, u.is)(i, Mn)) {
              const [e] = (0, u.validate)(i.result, r);
              return e
                ? (console.warn(new Rn({ req: n, result: i.result, cause: e })),
                  i.result)
                : i.result;
            }
            throw new _n({ req: n, data: i });
          }
          async request(e, t) {
            return new Promise((r, n) => {
              this.rpcClient.request(e, t, (e, t) => {
                e ? n(e) : r(t);
              });
            });
          }
        };
      t.JsonRpcClient = Un;
      var Nn = (0, u.union)([
          (0, u.literal)("DynamicField"),
          (0, u.literal)("DynamicObject"),
        ]),
        Kn = (0, u.object)({ type: (0, u.string)(), value: (0, u.any)() }),
        Vn = (0, u.object)({
          name: Kn,
          bcsName: (0, u.string)(),
          type: Nn,
          objectType: (0, u.string)(),
          objectId: C,
          version: (0, u.number)(),
          digest: (0, u.string)(),
        }),
        $n = (0, u.object)({
          data: (0, u.array)(Vn),
          nextCursor: (0, u.nullable)(C),
          hasNextPage: (0, u.boolean)(),
        }),
        Fn = (e, t) => {
          const r = new URL(e);
          return (
            (r.protocol = r.protocol.replace("http", "ws")),
            t && (r.port = t.toString()),
            r.toString()
          );
        };
      t.getWebsocketUrl = Fn;
      var Ln,
        zn = (e) =>
          e &&
          "subscription" in e &&
          "number" === typeof e["subscription"] &&
          "result" in e &&
          "object" === typeof e["result"],
        Gn = (t.DEFAULT_CLIENT_OPTIONS = {
          connectTimeout: 15e3,
          callTimeout: 3e4,
          reconnectInterval: 3e3,
          maxReconnects: 5,
        }),
        qn = "suix_subscribeEvent",
        Wn = "suix_unsubscribeEvent",
        Hn = class {
          constructor(e, t) {
            (void 0 === t && (t = Gn),
              (this.endpoint = e),
              (this.options = t),
              (this.connectionState = 0),
              (this.connectionTimeout = null),
              (this.isSetup = !1),
              (this.connectionPromise = null),
              (this.eventSubscriptions = new Map()),
              this.endpoint.startsWith("http") &&
                (this.endpoint = Fn(this.endpoint)),
              (this.rpcClient = new y.Client(this.endpoint, {
                reconnect_interval: this.options.reconnectInterval,
                max_reconnects: this.options.maxReconnects,
                autoconnect: !1,
              })));
          }
          setupSocket() {
            this.isSetup ||
              (this.rpcClient.on("open", () => {
                (this.connectionTimeout &&
                  (clearTimeout(this.connectionTimeout),
                  (this.connectionTimeout = null)),
                  (this.connectionState = 2),
                  this.rpcClient.socket.on(
                    "message",
                    this.onSocketMessage.bind(this),
                  ));
              }),
              this.rpcClient.on("close", () => {
                this.connectionState = 0;
              }),
              this.rpcClient.on("error", console.error),
              (this.isSetup = !0));
          }
          onSocketMessage(e) {
            const t = JSON.parse(e),
              r = t.params;
            if (t.method === qn)
              if (zn(r)) {
                const e = this.eventSubscriptions.get(r.subscription);
                e && e.onMessage(r.result);
              } else if ((0, u.is)(r, _e)) {
                const e = this.eventSubscriptions.get(r.subscription);
                e && e.onMessage(r.result);
              }
          }
          async connect() {
            return this.connectionPromise
              ? this.connectionPromise
              : 2 === this.connectionState
                ? Promise.resolve()
                : (this.setupSocket(),
                  this.rpcClient.connect(),
                  (this.connectionState = 1),
                  (this.connectionPromise = new Promise((e, t) => {
                    ((this.connectionTimeout = setTimeout(
                      () => t(new Error("timeout")),
                      this.options.connectTimeout,
                    )),
                      this.rpcClient.once("open", () => {
                        (this.refreshSubscriptions(),
                          (this.connectionPromise = null),
                          e());
                      }),
                      this.rpcClient.once("error", (e) => {
                        ((this.connectionPromise = null), t(e));
                      }));
                  })),
                  this.connectionPromise);
          }
          async refreshSubscriptions() {
            if (0 !== this.eventSubscriptions.size)
              try {
                let e = new Map(),
                  t = await Promise.all(
                    Array.from(this.eventSubscriptions.values()).map(
                      async (e) => {
                        const t = e.onMessage,
                          r = e.filter;
                        if (!r || !t) return Promise.resolve(null);
                        const n = await this.subscribeEvent(r, t);
                        return { id: n, onMessage: t, filter: r };
                      },
                    ),
                  );
                (t.forEach((t) => {
                  if (null === t) return;
                  const r = t.filter,
                    n = t.onMessage;
                  e.set(t.id, { filter: r, onMessage: n });
                }),
                  (this.eventSubscriptions = e));
              } catch (e) {
                throw new Error("error refreshing event subscriptions: " + e);
              }
          }
          async subscribeEvent(e, t) {
            try {
              2 !== this.connectionState && (await this.connect());
              let r = await this.rpcClient.call(
                qn,
                [e],
                this.options.callTimeout,
              );
              return (
                this.eventSubscriptions.set(r, { filter: e, onMessage: t }),
                r
              );
            } catch (r) {
              throw new Error(
                `Error subscribing to event: ${JSON.stringify(r, null, 2)}, filter: ${JSON.stringify(e)}`,
              );
            }
          }
          async unsubscribeEvent(e) {
            try {
              2 !== this.connectionState && (await this.connect());
              let t = await this.rpcClient.call(
                Wn,
                [e],
                this.options.callTimeout,
              );
              return this.eventSubscriptions.delete(e) || t;
            } catch (t) {
              throw new Error(
                `Error unsubscribing from event: ${t}, subscription: ${e}`,
              );
            }
          }
        };
      async function Jn(e, t, r) {
        const n = await fetch(e, {
          method: "POST",
          body: JSON.stringify({ FixedAmountRequest: { recipient: t } }),
          headers: { "Content-Type": "application/json", ...(r || {}) },
        });
        if (429 === n.status)
          throw new Pn(
            "Too many requests from this client have been sent to the faucet. Please retry later",
          );
        let i;
        try {
          i = await n.json();
        } catch (o) {
          throw new Error(
            `Encountered error when parsing response from faucet, error: ${o}, status ${n.status}, response ${n}`,
          );
        }
        if (i.error) throw new Error("Faucet returns error: " + i.error);
        return i;
      }
      t.WebsocketClient = Hn;
      var Yn = class {
        constructor(e) {
          (w(this, Ln, void 0), S(this, Ln, e));
        }
        get fullnode() {
          return v(this, Ln).fullnode;
        }
        get websocket() {
          return v(this, Ln).websocket || v(this, Ln).fullnode;
        }
        get faucet() {
          return v(this, Ln).faucet;
        }
      };
      ((t.Connection = Yn), (Ln = new WeakMap()));
      t.localnetConnection = new Yn({
        fullnode: "http://127.0.0.1:9000",
        faucet: "http://127.0.0.1:9123/gas",
      });
      var Xn = (t.devnetConnection = new Yn({
        fullnode: "https://fullnode.devnet.sui.io:443/",
        faucet: "https://faucet.devnet.sui.io/gas",
      }));
      ((t.testnetConnection = new Yn({
        fullnode: "https://fullnode.testnet.sui.io:443/",
        faucet: "https://faucet.testnet.sui.io/gas",
      })),
        (t.mainnetConnection = new Yn({
          fullnode: "https://fullnode.mainnet.sui.io:443/",
        })));
      function Zn(e, t) {
        return (0, u.create)(e, t);
      }
      var Qn = Symbol("transaction-argument-type"),
        ei = /^vector<(.+)>$/,
        ti = /^([^:]+)::([^:]+)::([^<]+)(<(.+)>)?/,
        ri = class {
          static parseFromStr(e, t) {
            if ((void 0 === t && (t = !1), "address" === e))
              return { address: null };
            if ("bool" === e) return { bool: null };
            if ("u8" === e) return { u8: null };
            if ("u16" === e) return { u16: null };
            if ("u32" === e) return { u32: null };
            if ("u64" === e) return { u64: null };
            if ("u128" === e) return { u128: null };
            if ("u256" === e) return { u256: null };
            if ("signer" === e) return { signer: null };
            const r = e.match(ei);
            if (r) return { vector: ri.parseFromStr(r[1], t) };
            const n = e.match(ti);
            if (n) {
              const e = t ? K(n[1]) : n[1];
              return {
                struct: {
                  address: e,
                  module: n[2],
                  name: n[3],
                  typeParams:
                    void 0 === n[5] ? [] : ri.parseStructTypeArgs(n[5], t),
                },
              };
            }
            throw new Error(
              "Encountered unexpected token when parsing type args for " + e,
            );
          }
          static parseStructTypeArgs(e, t) {
            void 0 === t && (t = !1);
            const r = [];
            let n = "",
              i = 0;
            for (let o = 0; o < e.length; o++) {
              const t = e[o];
              ("<" === t && i++,
                ">" === t && i--,
                0 !== i || "," !== t ? (n += t) : (r.push(n.trim()), (n = "")));
            }
            return (r.push(n.trim()), r.map((e) => ri.parseFromStr(e, t)));
          }
          static tagToString(e) {
            if ("bool" in e) return "bool";
            if ("u8" in e) return "u8";
            if ("u16" in e) return "u16";
            if ("u32" in e) return "u32";
            if ("u64" in e) return "u64";
            if ("u128" in e) return "u128";
            if ("u256" in e) return "u256";
            if ("address" in e) return "address";
            if ("signer" in e) return "signer";
            if ("vector" in e) return `vector<${ri.tagToString(e.vector)}>`;
            if ("struct" in e) {
              const t = e.struct,
                r = t.typeParams.map(ri.tagToString).join(", ");
              return `${t.address}::${t.module}::${t.name}${r ? `<${r}>` : ""}`;
            }
            throw new Error("Invalid TypeTag");
          }
        };
      t.TypeTagSerializer = ri;
      var ni = (e) =>
          (0, u.union)([
            (0, u.object)({
              None: (0, u.union)([(0, u.literal)(!0), (0, u.literal)(null)]),
            }),
            (0, u.object)({ Some: e }),
          ]),
        ii = (t.TransactionBlockInput = (0, u.object)({
          kind: (0, u.literal)("Input"),
          index: (0, u.integer)(),
          value: (0, u.optional)((0, u.any)()),
          type: (0, u.optional)(
            (0, u.union)([(0, u.literal)("pure"), (0, u.literal)("object")]),
          ),
        })),
        oi = [
          ii,
          (0, u.object)({ kind: (0, u.literal)("GasCoin") }),
          (0, u.object)({
            kind: (0, u.literal)("Result"),
            index: (0, u.integer)(),
          }),
          (0, u.object)({
            kind: (0, u.literal)("NestedResult"),
            index: (0, u.integer)(),
            resultIndex: (0, u.integer)(),
          }),
        ],
        si = (t.TransactionArgument = (0, u.union)([...oi])),
        ai = (t.ObjectTransactionArgument = (0, u.union)([...oi]));
      ai[Qn] = { kind: "object" };
      var ci = (e) => {
        const t = (0, u.union)([...oi]);
        return ((t[Qn] = { kind: "pure", type: e }), t);
      };
      t.PureTransactionArgument = ci;
      var ui = (t.MoveCallTransaction = (0, u.object)({
          kind: (0, u.literal)("MoveCall"),
          target: (0, u.define)("target", (0, u.string)().validator),
          typeArguments: (0, u.array)((0, u.string)()),
          arguments: (0, u.array)(si),
        })),
        li = (t.TransferObjectsTransaction = (0, u.object)({
          kind: (0, u.literal)("TransferObjects"),
          objects: (0, u.array)(ai),
          address: ci(o.BCS.ADDRESS),
        })),
        di = (t.SplitCoinsTransaction = (0, u.object)({
          kind: (0, u.literal)("SplitCoins"),
          coin: ai,
          amounts: (0, u.array)(ci("u64")),
        })),
        pi = (t.MergeCoinsTransaction = (0, u.object)({
          kind: (0, u.literal)("MergeCoins"),
          destination: ai,
          sources: (0, u.array)(ai),
        })),
        hi = (t.MakeMoveVecTransaction = (0, u.object)({
          kind: (0, u.literal)("MakeMoveVec"),
          type: (0, u.optional)(
            ni((0, u.record)((0, u.string)(), (0, u.unknown)())),
          ),
          objects: (0, u.array)(ai),
        })),
        gi = (t.PublishTransaction = (0, u.object)({
          kind: (0, u.literal)("Publish"),
          modules: (0, u.array)((0, u.array)((0, u.integer)())),
          dependencies: (0, u.array)(C),
        })),
        fi = (t.UpgradePolicy = ((e) => (
          (e[(e["COMPATIBLE"] = 0)] = "COMPATIBLE"),
          (e[(e["ADDITIVE"] = 128)] = "ADDITIVE"),
          (e[(e["DEP_ONLY"] = 192)] = "DEP_ONLY"),
          e
        ))(fi || {})),
        yi = (t.UpgradeTransaction = (0, u.object)({
          kind: (0, u.literal)("Upgrade"),
          modules: (0, u.array)((0, u.array)((0, u.integer)())),
          dependencies: (0, u.array)(C),
          packageId: C,
          ticket: ai,
        })),
        bi = [ui, li, di, pi, gi, yi, hi],
        mi = (t.TransactionType = (0, u.union)([...bi]));
      function vi(e) {
        return ((0, u.assert)(e, mi), bi.find((t) => (0, u.is)(e, t)));
      }
      var wi = (t.Transactions = {
          MoveCall(e) {
            var t, r;
            return Zn(
              {
                kind: "MoveCall",
                target: e.target,
                arguments: null !== (t = e.arguments) && void 0 !== t ? t : [],
                typeArguments:
                  null !== (r = e.typeArguments) && void 0 !== r ? r : [],
              },
              ui,
            );
          },
          TransferObjects(e, t) {
            return Zn({ kind: "TransferObjects", objects: e, address: t }, li);
          },
          SplitCoins(e, t) {
            return Zn({ kind: "SplitCoins", coin: e, amounts: t }, di);
          },
          MergeCoins(e, t) {
            return Zn({ kind: "MergeCoins", destination: e, sources: t }, pi);
          },
          Publish(e) {
            let { modules: t, dependencies: r } = e;
            return Zn(
              {
                kind: "Publish",
                modules: t.map((e) =>
                  "string" === typeof e ? Array.from((0, o.fromB64)(e)) : e,
                ),
                dependencies: r.map((e) => V(e)),
              },
              gi,
            );
          },
          Upgrade(e) {
            let { modules: t, dependencies: r, packageId: n, ticket: i } = e;
            return Zn(
              {
                kind: "Upgrade",
                modules: t.map((e) =>
                  "string" === typeof e ? Array.from((0, o.fromB64)(e)) : e,
                ),
                dependencies: r.map((e) => V(e)),
                packageId: n,
                ticket: i,
              },
              yi,
            );
          },
          MakeMoveVec(e) {
            let { type: t, objects: r } = e;
            return Zn(
              {
                kind: "MakeMoveVec",
                type: t ? { Some: ri.parseFromStr(t) } : { None: null },
                objects: r,
              },
              hi,
            );
          },
        }),
        Si = (t.ARGUMENT_INNER = "Argument"),
        Ei = (t.VECTOR = "vector"),
        Ti = (t.OPTION = "Option"),
        ji = (t.CALL_ARG = "CallArg"),
        ki = (t.TYPE_TAG = "TypeTag"),
        Ci =
          ((t.OBJECT_ARG = "ObjectArg"),
          (t.PROGRAMMABLE_TX_BLOCK = "ProgrammableTransaction")),
        Ai = (t.PROGRAMMABLE_CALL_INNER = "ProgrammableMoveCall"),
        Oi = (t.TRANSACTION_INNER = "Transaction"),
        Ii = (t.ENUM_KIND = "EnumKind"),
        xi = (t.TRANSACTION = [Ii, Oi]),
        Bi = (t.ARGUMENT = [Ii, Si]),
        _i = (t.PROGRAMMABLE_CALL = "SimpleProgrammableMoveCall"),
        Ri = (t.builder = new o.BCS(ar)
          .registerStructType(Ci, { inputs: [Ei, ji], transactions: [Ei, xi] })
          .registerEnumType(Si, {
            GasCoin: null,
            Input: { index: o.BCS.U16 },
            Result: { index: o.BCS.U16 },
            NestedResult: { index: o.BCS.U16, resultIndex: o.BCS.U16 },
          })
          .registerStructType(Ai, {
            package: o.BCS.ADDRESS,
            module: o.BCS.STRING,
            function: o.BCS.STRING,
            type_arguments: [Ei, ki],
            arguments: [Ei, Bi],
          })
          .registerEnumType(Oi, {
            MoveCall: _i,
            TransferObjects: { objects: [Ei, Bi], address: Bi },
            SplitCoins: { coin: Bi, amounts: [Ei, Bi] },
            MergeCoins: { destination: Bi, sources: [Ei, Bi] },
            Publish: {
              modules: [Ei, [Ei, o.BCS.U8]],
              dependencies: [Ei, o.BCS.ADDRESS],
            },
            MakeMoveVec: { type: [Ti, ki], objects: [Ei, Bi] },
            Upgrade: {
              modules: [Ei, [Ei, o.BCS.U8]],
              dependencies: [Ei, o.BCS.ADDRESS],
              packageId: o.BCS.ADDRESS,
              ticket: Bi,
            },
          }));
      (Ri.registerType(
        [Ii, "T"],
        function (e, t, r, n) {
          const i = t.kind,
            o = { [i]: t },
            [s] = r;
          return this.getTypeInterface(s)._encodeRaw.call(this, e, o, r, n);
        },
        function (e, t, r) {
          const [n] = t,
            i = this.getTypeInterface(n)._decodeRaw.call(this, e, t, r),
            o = Object.keys(i)[0];
          return { kind: o, ...i[o] };
        },
        (e) => {
          if ("object" !== typeof e && !("kind" in e))
            throw new Error(
              'EnumKind: Missing property "kind" in the input ' +
                JSON.stringify(e),
            );
          return !0;
        },
      ),
        Ri.registerType(
          _i,
          function (e, t, r, n) {
            const [i, o, s] = t.target.split("::"),
              a = t.typeArguments.map((e) => ri.parseFromStr(e, !0));
            return this.getTypeInterface(Ai)._encodeRaw.call(
              this,
              e,
              {
                package: K(i),
                module: o,
                function: s,
                type_arguments: a,
                arguments: t.arguments,
              },
              r,
              n,
            );
          },
          function (e, t, r) {
            let n = Ri.getTypeInterface(Ai)._decodeRaw.call(this, e, t, r);
            return {
              target: [n.package, n.module, n.function].join("::"),
              arguments: n.arguments,
              typeArguments: n.type_arguments.map(ri.tagToString),
            };
          },
          (e) => 3 === e.target.split("::").length,
        ));
      var Pi = (0, u.union)([
          (0, u.object)({ ImmOrOwned: L }),
          (0, u.object)({
            Shared: (0, u.object)({
              objectId: (0, u.string)(),
              initialSharedVersion: (0, u.union)([
                (0, u.integer)(),
                (0, u.string)(),
              ]),
              mutable: (0, u.boolean)(),
            }),
          }),
        ]),
        Mi = (t.PureCallArg = (0, u.object)({
          Pure: (0, u.array)((0, u.integer)()),
        })),
        Di = (t.ObjectCallArg = (0, u.object)({ Object: Pi })),
        Ui = (t.BuilderCallArg = (0, u.union)([Mi, Di])),
        Ni = 16384,
        Ki = (t.Inputs = {
          Pure(e, t) {
            return {
              Pure: Array.from(
                e instanceof Uint8Array
                  ? e
                  : Ri.ser(t, e, { maxSize: Ni }).toBytes(),
              ),
            };
          },
          ObjectRef(e) {
            let { objectId: t, digest: r, version: n } = e;
            return {
              Object: { ImmOrOwned: { digest: r, version: n, objectId: K(t) } },
            };
          },
          SharedObjectRef(e) {
            let { objectId: t, mutable: r, initialSharedVersion: n } = e;
            return {
              Object: {
                Shared: { mutable: r, initialSharedVersion: n, objectId: K(t) },
              },
            };
          },
        });
      function Vi(e) {
        return "string" === typeof e
          ? K(e)
          : "ImmOrOwned" in e.Object
            ? K(e.Object.ImmOrOwned.objectId)
            : K(e.Object.Shared.objectId);
      }
      function $i(e) {
        return "object" === typeof e && "Object" in e && "Shared" in e.Object
          ? e.Object.Shared
          : void 0;
      }
      function Fi(e) {
        return !!$i(e);
      }
      function Li(e) {
        var t, r;
        return (
          null !==
            (t = null === (r = $i(e)) || void 0 === r ? void 0 : r.mutable) &&
          void 0 !== t &&
          t
        );
      }
      var zi = "ascii",
        Gi = "String",
        qi = "string",
        Wi = "String",
        Hi = "option",
        Ji = "Option",
        Yi = { address: qt, module: Ht, name: Jt },
        Xi = { address: Wt, module: zi, name: Gi },
        Zi = { address: Wt, module: qi, name: Wi },
        Qi = { address: Wt, module: Hi, name: Ji },
        eo = (e, t) =>
          e.address === t.address && e.module === t.module && e.name === t.name;
      function to(e) {
        var t;
        const r = null === (t = Or(e)) || void 0 === t ? void 0 : t.Struct;
        return (
          "0x2" === (null === r || void 0 === r ? void 0 : r.address) &&
          "tx_context" === (null === r || void 0 === r ? void 0 : r.module) &&
          "TxContext" === (null === r || void 0 === r ? void 0 : r.name)
        );
      }
      function ro(e, t) {
        if ("undefined" !== typeof t && typeof t !== e)
          throw new Error(`Expect ${t} to be ${e}, received ${typeof t}`);
      }
      var no = ["Address", "Bool", "U8", "U16", "U32", "U64", "U128", "U256"];
      function io(e, t) {
        if ("string" === typeof e && no.includes(e)) {
          if (e in ["U8", "U16", "U32", "U64", "U128", "U256"]) ro("number", t);
          else if ("Bool" === e) ro("boolean", t);
          else if ("Address" === e && (ro("string", t), t && !P(t)))
            throw new Error("Invalid Sui Address");
          return e.toLowerCase();
        }
        if ("string" === typeof e)
          throw new Error(
            "Unknown pure normalized type " + JSON.stringify(e, null, 2),
          );
        if ("Vector" in e) {
          if ((void 0 === t || "string" === typeof t) && "U8" === e.Vector)
            return "string";
          if (void 0 !== t && !Array.isArray(t))
            throw new Error(`Expect ${t} to be a array, received ${typeof t}`);
          const r = io(e.Vector, t ? t[0] : void 0);
          if (void 0 === r) return;
          return `vector<${r}>`;
        }
        if ("Struct" in e) {
          if (eo(e.Struct, Xi)) return "string";
          if (eo(e.Struct, Zi)) return "utf8string";
          if (eo(e.Struct, Yi)) return "address";
          if (eo(e.Struct, Qi)) {
            const r = { Vector: e.Struct.typeArguments[0] };
            return io(r, t);
          }
        }
      }
      function oo(e, t) {
        const r = Array.from(e + "::").map((e) => e.charCodeAt(0)),
          n = new Uint8Array(r.length + t.length);
        return (n.set(r), n.set(t, r.length), (0, a.blake2b)(n, { dkLen: 32 }));
      }
      var so = (0, u.optional)(
          (0, u.nullable)(
            (0, u.union)([
              (0, u.object)({ Epoch: (0, u.integer)() }),
              (0, u.object)({
                None: (0, u.union)([(0, u.literal)(!0), (0, u.literal)(null)]),
              }),
            ]),
          ),
        ),
        ao = (0, u.string)(),
        co = (0, u.define)("StringEncodedBigint", (e) => {
          if (!["string", "number", "bigint"].includes(typeof e)) return !1;
          try {
            return (BigInt(e), !0);
          } catch {
            return !1;
          }
        }),
        uo = (0, u.object)({
          budget: (0, u.optional)(co),
          price: (0, u.optional)(co),
          payment: (0, u.optional)((0, u.array)(L)),
          owner: (0, u.optional)(ao),
        }),
        lo = (0, u.object)({
          version: (0, u.literal)(1),
          sender: (0, u.optional)(ao),
          expiration: so,
          gasConfig: uo,
          inputs: (0, u.array)(ii),
          transactions: (0, u.array)(mi),
        });
      function po(e) {
        return K(e).replace("0x", "");
      }
      var ho = 131072,
        go = class {
          constructor(e) {
            var t, r, n;
            ((this.version = 1),
              (this.sender = null === e || void 0 === e ? void 0 : e.sender),
              (this.expiration =
                null === e || void 0 === e ? void 0 : e.expiration),
              (this.gasConfig =
                null !==
                  (t = null === e || void 0 === e ? void 0 : e.gasConfig) &&
                void 0 !== t
                  ? t
                  : {}),
              (this.inputs =
                null !== (r = null === e || void 0 === e ? void 0 : e.inputs) &&
                void 0 !== r
                  ? r
                  : []),
              (this.transactions =
                null !==
                  (n = null === e || void 0 === e ? void 0 : e.transactions) &&
                void 0 !== n
                  ? n
                  : []));
          }
          static fromKindBytes(e) {
            const t = Ri.de("TransactionKind", e),
              r =
                null === t || void 0 === t ? void 0 : t.ProgrammableTransaction;
            if (!r) throw new Error("Unable to deserialize from bytes.");
            const n = Zn(
              {
                version: 1,
                gasConfig: {},
                inputs: r.inputs.map((e, t) =>
                  Zn(
                    {
                      kind: "Input",
                      value: e,
                      index: t,
                      type: (0, u.is)(e, Mi) ? "pure" : "object",
                    },
                    ii,
                  ),
                ),
                transactions: r.transactions,
              },
              lo,
            );
            return go.restore(n);
          }
          static fromBytes(e) {
            var t;
            const r = Ri.de("TransactionData", e),
              n = null === r || void 0 === r ? void 0 : r.V1,
              i =
                null === n ||
                void 0 === n ||
                null === (t = n.kind) ||
                void 0 === t
                  ? void 0
                  : t.ProgrammableTransaction;
            if (!n || !i) throw new Error("Unable to deserialize from bytes.");
            const o = Zn(
              {
                version: 1,
                sender: n.sender,
                expiration: n.expiration,
                gasConfig: n.gasData,
                inputs: i.inputs.map((e, t) =>
                  Zn(
                    {
                      kind: "Input",
                      value: e,
                      index: t,
                      type: (0, u.is)(e, Mi) ? "pure" : "object",
                    },
                    ii,
                  ),
                ),
                transactions: i.transactions,
              },
              lo,
            );
            return go.restore(o);
          }
          static restore(e) {
            (0, u.assert)(e, lo);
            const t = new go();
            return (Object.assign(t, e), t);
          }
          static getDigestFromBytes(e) {
            const t = oo("TransactionData", e);
            return (0, o.toB58)(t);
          }
          build(e) {
            var t, r, n;
            let { overrides: i, onlyTransactionKind: o } =
              void 0 === e ? {} : e;
            const s = this.inputs.map(
                (e) => ((0, u.assert)(e.value, Ui), e.value),
              ),
              a = {
                ProgrammableTransaction: {
                  inputs: s,
                  transactions: this.transactions,
                },
              };
            if (o)
              return Ri.ser("TransactionKind", a, { maxSize: ho }).toBytes();
            const c =
                null !==
                  (t = null === i || void 0 === i ? void 0 : i.expiration) &&
                void 0 !== t
                  ? t
                  : this.expiration,
              l =
                null !== (r = null === i || void 0 === i ? void 0 : i.sender) &&
                void 0 !== r
                  ? r
                  : this.sender,
              d = {
                ...this.gasConfig,
                ...(null === i || void 0 === i ? void 0 : i.gasConfig),
              };
            if (!l) throw new Error("Missing transaction sender");
            if (!d.budget) throw new Error("Missing gas budget");
            if (!d.payment) throw new Error("Missing gas payment");
            if (!d.price) throw new Error("Missing gas price");
            const p = {
              sender: po(l),
              expiration: c || { None: !0 },
              gasData: {
                payment: d.payment,
                owner: po(
                  null !== (n = this.gasConfig.owner) && void 0 !== n ? n : l,
                ),
                price: BigInt(d.price),
                budget: BigInt(d.budget),
              },
              kind: {
                ProgrammableTransaction: {
                  inputs: s,
                  transactions: this.transactions,
                },
              },
            };
            return Ri.ser(
              "TransactionData",
              { V1: p },
              { maxSize: ho },
            ).toBytes();
          }
          getDigest() {
            const e = this.build({ onlyTransactionKind: !1 });
            return go.getDigestFromBytes(e);
          }
          snapshot() {
            return Zn(this, lo);
          }
        };
      function fo(e) {
        const t = { kind: "Result", index: e },
          r = [],
          n = (t) => {
            var n;
            return null !== (n = r[t]) && void 0 !== n
              ? n
              : (r[t] = { kind: "NestedResult", index: e, resultIndex: t });
          };
        return new Proxy(t, {
          set() {
            throw new Error(
              "The transaction result is a proxy, and does not support setting properties directly",
            );
          },
          get(e, t) {
            if (t in e) return Reflect.get(e, t);
            if (t === Symbol.iterator)
              return function* () {
                let e = 0;
                while (1) (yield n(e), e++);
              };
            if ("symbol" === typeof t) return;
            const r = parseInt(t, 10);
            return Number.isNaN(r) || r < 0 ? void 0 : n(r);
          },
        });
      }
      function yo(e) {
        if (!e)
          throw new Error(
            "No provider passed to Transaction#build, but transaction data was not sufficient to build offline.",
          );
        return e;
      }
      var bo,
        mo,
        vo,
        wo,
        So,
        Eo,
        To,
        jo,
        ko,
        Co,
        Ao,
        Oo = Symbol.for("@mysten/transaction"),
        Io = 256,
        xo = 5e10,
        Bo = 1000n,
        _o = 50,
        Ro = (e, t) =>
          Array.from({ length: Math.ceil(e.length / t) }, (r, n) =>
            e.slice(n * t, n * t + t),
          ),
        Po = class {
          constructor(e) {
            (w(this, mo),
              w(this, wo),
              w(this, Eo),
              w(this, jo),
              w(this, Co),
              w(this, bo, void 0),
              S(this, bo, new go(e ? e.blockData : void 0)));
          }
          static is(e) {
            return !!e && "object" === typeof e && !0 === e[Oo];
          }
          static fromKind(e) {
            const t = new Po();
            return (
              S(
                t,
                bo,
                go.fromKindBytes("string" === typeof e ? (0, o.fromB64)(e) : e),
              ),
              t
            );
          }
          static from(e) {
            const t = new Po();
            return (
              "string" === typeof e && e.startsWith("{")
                ? S(t, bo, go.restore(JSON.parse(e)))
                : S(
                    t,
                    bo,
                    go.fromBytes("string" === typeof e ? (0, o.fromB64)(e) : e),
                  ),
              t
            );
          }
          static get Transactions() {
            return wi;
          }
          static get Inputs() {
            return Ki;
          }
          setSender(e) {
            v(this, bo).sender = e;
          }
          setSenderIfNotSet(e) {
            v(this, bo).sender || (v(this, bo).sender = e);
          }
          setExpiration(e) {
            v(this, bo).expiration = e;
          }
          setGasPrice(e) {
            v(this, bo).gasConfig.price = String(e);
          }
          setGasBudget(e) {
            v(this, bo).gasConfig.budget = String(e);
          }
          setGasOwner(e) {
            v(this, bo).gasConfig.owner = e;
          }
          setGasPayment(e) {
            if (e.length >= Io)
              throw new Error("Payment objects exceed maximum amount " + Io);
            v(this, bo).gasConfig.payment = e.map((e) => (0, u.mask)(e, L));
          }
          get blockData() {
            return v(this, bo).snapshot();
          }
          get [Oo]() {
            return !0;
          }
          get gas() {
            return { kind: "GasCoin" };
          }
          object(e) {
            const t = Vi(e),
              r = v(this, bo).inputs.find(
                (e) => "object" === e.type && t === Vi(e.value),
              );
            return null !== r && void 0 !== r
              ? r
              : E(this, mo, vo).call(this, "object", e);
          }
          objectRef() {
            return this.object(Ki.ObjectRef(...arguments));
          }
          sharedObjectRef() {
            return this.object(Ki.SharedObjectRef(...arguments));
          }
          pure(e, t) {
            return E(this, mo, vo).call(
              this,
              "pure",
              e instanceof Uint8Array ? Ki.Pure(e) : t ? Ki.Pure(e, t) : e,
            );
          }
          add(e) {
            const t = v(this, bo).transactions.push(e);
            return fo(t - 1);
          }
          splitCoins() {
            return this.add(wi.SplitCoins(...arguments));
          }
          mergeCoins() {
            return this.add(wi.MergeCoins(...arguments));
          }
          publish() {
            return this.add(wi.Publish(...arguments));
          }
          upgrade() {
            return this.add(wi.Upgrade(...arguments));
          }
          moveCall() {
            return this.add(wi.MoveCall(...arguments));
          }
          transferObjects() {
            return this.add(wi.TransferObjects(...arguments));
          }
          makeMoveVec() {
            return this.add(wi.MakeMoveVec(...arguments));
          }
          serialize() {
            return JSON.stringify(v(this, bo).snapshot());
          }
          async build(e) {
            let { provider: t, onlyTransactionKind: r } = void 0 === e ? {} : e;
            return (
              await E(this, Co, Ao).call(this, {
                provider: t,
                onlyTransactionKind: r,
              }),
              v(this, bo).build({ onlyTransactionKind: r })
            );
          }
          async getDigest(e) {
            let { provider: t } = void 0 === e ? {} : e;
            return (
              await E(this, Co, Ao).call(this, { provider: t }),
              v(this, bo).getDigest()
            );
          }
        },
        Mo = (t.TransactionBlock = Po);
      ((bo = new WeakMap()),
        (mo = new WeakSet()),
        (vo = function (e, t) {
          const r = v(this, bo).inputs.length,
            n = Zn(
              {
                kind: "Input",
                value: "bigint" === typeof t ? String(t) : t,
                index: r,
                type: e,
              },
              ii,
            );
          return (v(this, bo).inputs.push(n), n);
        }),
        (wo = new WeakSet()),
        (So = async function (e) {
          var t;
          let { provider: r, onlyTransactionKind: n } = e;
          if (n || v(this, bo).gasConfig.payment) return;
          const i =
              null !== (t = v(this, bo).gasConfig.owner) && void 0 !== t
                ? t
                : v(this, bo).sender,
            o = await yo(r).getCoins({ owner: i, coinType: Yt }),
            s = o.data
              .filter((e) => {
                const t = v(this, bo).inputs.find(
                  (t) =>
                    !!(
                      (0, u.is)(t.value, Ui) &&
                      "Object" in t.value &&
                      "ImmOrOwned" in t.value.Object
                    ) && e.coinObjectId === t.value.Object.ImmOrOwned.objectId,
                );
                return !t;
              })
              .slice(0, Io - 1)
              .map((e) => ({
                objectId: e.coinObjectId,
                digest: e.digest,
                version: e.version,
              }));
          if (!s.length)
            throw new Error("No valid gas coins found for the transaction.");
          this.setGasPayment(s);
        }),
        (Eo = new WeakSet()),
        (To = async function (e) {
          let { provider: t, onlyTransactionKind: r } = e;
          r ||
            v(this, bo).gasConfig.price ||
            this.setGasPrice(await yo(t).getReferenceGasPrice());
        }),
        (jo = new WeakSet()),
        (ko = async function (e) {
          const { inputs: t, transactions: r } = v(this, bo),
            n = [],
            i = [];
          if (
            (r.forEach((e) => {
              if ("MoveCall" === e.kind) {
                const r = e.arguments.some(
                  (e) => "Input" === e.kind && !(0, u.is)(t[e.index].value, Ui),
                );
                return void (r && n.push(e));
              }
              const r = vi(e);
              r.schema &&
                Object.entries(e).forEach((e) => {
                  let [n, o] = e;
                  if ("kind" === n) return;
                  const s = r.schema[n],
                    a = "array" === s.type,
                    c = a ? s.schema[Qn] : s[Qn];
                  if (!c) return;
                  const l = (e) => {
                    const r = t[e];
                    if (!r) throw new Error("Missing input " + o.index);
                    if (!(0, u.is)(r.value, Ui))
                      if ("object" === c.kind && "string" === typeof r.value)
                        i.push({ id: r.value, input: r });
                      else {
                        if ("pure" !== c.kind)
                          throw new Error("Unexpected input format.");
                        r.value = Ki.Pure(r.value, c.type);
                      }
                  };
                  if (a)
                    o.forEach((e) => {
                      "Input" === e.kind && l(e.index);
                    });
                  else {
                    if ("Input" !== o.kind) return;
                    l(o.index);
                  }
                });
            }),
            n.length &&
              (await Promise.all(
                n.map(async (r) => {
                  const [n, o, s] = r.target.split("::"),
                    a = await yo(e).getNormalizedMoveFunction({
                      package: V(n),
                      module: o,
                      function: s,
                    }),
                    c = a.parameters.length > 0 && to(a.parameters.at(-1)),
                    l = c
                      ? a.parameters.slice(0, a.parameters.length - 1)
                      : a.parameters;
                  if (l.length !== r.arguments.length)
                    throw new Error("Incorrect number of arguments.");
                  l.forEach((e, n) => {
                    const o = r.arguments[n];
                    if ("Input" !== o.kind) return;
                    const s = t[o.index];
                    if ((0, u.is)(s.value, Ui)) return;
                    const a = s.value,
                      c = io(e, a);
                    if (c) return void (s.value = Ki.Pure(a, c));
                    const l = Or(e);
                    if (
                      !(
                        null != l ||
                        ("object" === typeof e && "TypeParameter" in e)
                      )
                    )
                      throw new Error(
                        `Unknown call arg type ${JSON.stringify(e, null, 2)} for value ${JSON.stringify(a, null, 2)}`,
                      );
                    if ("string" !== typeof a)
                      throw new Error(
                        "Expect the argument to be an object id string, got " +
                          JSON.stringify(a, null, 2),
                      );
                    i.push({ id: a, input: s, normalizedType: e });
                  });
                }),
              )),
            i.length)
          ) {
            const t = [
                ...new Set(
                  i.map((e) => {
                    let { id: t } = e;
                    return t;
                  }),
                ),
              ],
              r = Ro(t, _o),
              n = (
                await Promise.all(
                  r.map((t) =>
                    yo(e).multiGetObjects({
                      ids: t,
                      options: { showOwner: !0 },
                    }),
                  ),
                )
              ).flat();
            let o = new Map(t.map((e, t) => [e, n[t]]));
            const s = Array.from(o)
              .filter((e) => {
                let [t, r] = e;
                return r.error;
              })
              .map((e) => {
                let [t, r] = e;
                return t;
              });
            if (s.length)
              throw new Error(
                "The following input objects are not invalid: " + s.join(", "),
              );
            i.forEach((e) => {
              let { id: t, input: r, normalizedType: n } = e;
              const i = o.get(t),
                s = ye(i);
              if (s) {
                const e = Li(r.value) || (null != n && null != Cr(n));
                r.value = Ki.SharedObjectRef({
                  objectId: t,
                  initialSharedVersion: s,
                  mutable: e,
                });
              } else r.value = Ki.ObjectRef(ce(i));
            });
          }
        }),
        (Co = new WeakSet()),
        (Ao = async function (e) {
          let { provider: t, onlyTransactionKind: r } = e;
          if (!r && !v(this, bo).sender)
            throw new Error("Missing transaction sender");
          if (
            (await Promise.all([
              E(this, Eo, To).call(this, {
                provider: t,
                onlyTransactionKind: r,
              }),
              E(this, jo, ko).call(this, t),
            ]),
            !r &&
              (await E(this, wo, So).call(this, {
                provider: t,
                onlyTransactionKind: r,
              }),
              !v(this, bo).gasConfig.budget))
          ) {
            const e = await yo(t).dryRunTransactionBlock({
              transactionBlock: v(this, bo).build({
                overrides: { gasConfig: { budget: String(xo), payment: [] } },
              }),
            });
            if ("success" !== e.effects.status.status)
              throw new Error(
                "Dry run failed, could not automatically determine a budget: " +
                  e.effects.status.error,
                { cause: e },
              );
            const r = Bo * BigInt(this.blockData.gasConfig.price || 1n),
              n = BigInt(e.effects.gasUsed.computationCost) + r,
              i =
                n +
                BigInt(e.effects.gasUsed.storageCost) -
                BigInt(e.effects.gasUsed.storageRebate);
            this.setGasBudget(i > n ? i : n);
          }
        }));
      var Do = (0, u.object)({
          currentTps: (0, u.number)(),
          tps30Days: (0, u.number)(),
          currentCheckpoint: (0, u.string)(),
          currentEpoch: (0, u.string)(),
          totalAddresses: (0, u.string)(),
          totalObjects: (0, u.string)(),
          totalPackages: (0, u.string)(),
        }),
        Uo = { socketOptions: Gn, versionCacheTimeoutInSeconds: 600 },
        No = class {
          constructor(e, t) {
            var r, n;
            (void 0 === e && (e = Xn),
              void 0 === t && (t = Uo),
              (this.options = t),
              (this.connection = e));
            const i = { ...Uo, ...t };
            ((this.options = i),
              (this.client =
                null !== (r = i.rpcClient) && void 0 !== r
                  ? r
                  : new Un(this.connection.fullnode)),
              (this.wsClient =
                null !== (n = i.websocketClient) && void 0 !== n
                  ? n
                  : new Hn(this.connection.websocket, i.socketOptions)));
          }
          async getRpcApiVersion() {
            if (
              this.rpcApiVersion &&
              this.cacheExpiry &&
              this.cacheExpiry <= Date.now()
            )
              return this.rpcApiVersion;
            try {
              var e;
              const t = await this.client.requestWithType(
                "rpc.discover",
                [],
                (0, u.any)(),
              );
              return (
                (this.rpcApiVersion = t.info.version),
                (this.cacheExpiry =
                  Date.now() +
                  1e3 *
                    (null !== (e = this.options.versionCacheTimeoutInSeconds) &&
                    void 0 !== e
                      ? e
                      : 0)),
                this.rpcApiVersion
              );
            } catch (t) {
              console.warn("Error fetching version number of the RPC API", t);
            }
          }
          async requestSuiFromFaucet(e, t) {
            if (!this.connection.faucet)
              throw new Error("Faucet URL is not specified");
            return Jn(this.connection.faucet, e, t);
          }
          async getCoins(e) {
            if (!e.owner || !P(K(e.owner)))
              throw new Error("Invalid Sui address");
            return await this.client.requestWithType(
              "suix_getCoins",
              [e.owner, e.coinType, e.cursor, e.limit],
              $r,
            );
          }
          async getAllCoins(e) {
            if (!e.owner || !P(K(e.owner)))
              throw new Error("Invalid Sui address");
            return await this.client.requestWithType(
              "suix_getAllCoins",
              [e.owner, e.cursor, e.limit],
              $r,
            );
          }
          async getBalance(e) {
            if (!e.owner || !P(K(e.owner)))
              throw new Error("Invalid Sui address");
            return await this.client.requestWithType(
              "suix_getBalance",
              [e.owner, e.coinType],
              Fr,
            );
          }
          async getAllBalances(e) {
            if (!e.owner || !P(K(e.owner)))
              throw new Error("Invalid Sui address");
            return await this.client.requestWithType(
              "suix_getAllBalances",
              [e.owner],
              (0, u.array)(Fr),
            );
          }
          async getCoinMetadata(e) {
            return await this.client.requestWithType(
              "suix_getCoinMetadata",
              [e.coinType],
              Qt,
            );
          }
          async getTotalSupply(e) {
            return await this.client.requestWithType(
              "suix_getTotalSupply",
              [e.coinType],
              Lr,
            );
          }
          async call(e, t) {
            const r = await this.client.request(e, t);
            if ((0, u.is)(r, Dn))
              throw new _n({
                req: { method: e, args: t },
                code: r.error.code,
                data: r.error.data,
                cause: new Error(r.error.message),
              });
            return r.result;
          }
          async getMoveFunctionArgTypes(e) {
            return await this.client.requestWithType(
              "sui_getMoveFunctionArgTypes",
              [e.package, e.module, e.function],
              lr,
            );
          }
          async getNormalizedMoveModulesByPackage(e) {
            return await this.client.requestWithType(
              "sui_getNormalizedMoveModulesByPackage",
              [e.package],
              kr,
            );
          }
          async getNormalizedMoveModule(e) {
            return await this.client.requestWithType(
              "sui_getNormalizedMoveModule",
              [e.package, e.module],
              jr,
            );
          }
          async getNormalizedMoveFunction(e) {
            return await this.client.requestWithType(
              "sui_getNormalizedMoveFunction",
              [e.package, e.module, e.function],
              Sr,
            );
          }
          async getNormalizedMoveStruct(e) {
            return await this.client.requestWithType(
              "sui_getNormalizedMoveStruct",
              [e.package, e.module, e.struct],
              Tr,
            );
          }
          async getOwnedObjects(e) {
            if (!e.owner || !P(K(e.owner)))
              throw new Error("Invalid Sui address");
            return await this.client.requestWithType(
              "suix_getOwnedObjects",
              [
                e.owner,
                { filter: e.filter, options: e.options },
                e.cursor,
                e.limit,
              ],
              Ce,
            );
          }
          async getObject(e) {
            if (!e.id || !M(V(e.id))) throw new Error("Invalid Sui Object id");
            return await this.client.requestWithType(
              "sui_getObject",
              [e.id, e.options],
              ie,
            );
          }
          async tryGetPastObject(e) {
            return await this.client.requestWithType(
              "sui_tryGetPastObject",
              [e.id, e.version, e.options],
              Ae,
            );
          }
          async multiGetObjects(e) {
            e.ids.forEach((e) => {
              if (!e || !M(V(e))) throw new Error("Invalid Sui Object id " + e);
            });
            const t = e.ids.length !== new Set(e.ids).size;
            if (t)
              throw new Error("Duplicate object ids in batch call " + e.ids);
            return await this.client.requestWithType(
              "sui_multiGetObjects",
              [e.ids, e.options],
              (0, u.array)(ie),
            );
          }
          async queryTransactionBlocks(e) {
            return await this.client.requestWithType(
              "suix_queryTransactionBlocks",
              [
                { filter: e.filter, options: e.options },
                e.cursor,
                e.limit,
                "descending" === (e.order || "descending"),
              ],
              yt,
            );
          }
          async getTransactionBlock(e) {
            if (!_(e.digest)) throw new Error("Invalid Transaction digest");
            return await this.client.requestWithType(
              "sui_getTransactionBlock",
              [e.digest, e.options],
              ft,
            );
          }
          async multiGetTransactionBlocks(e) {
            e.digests.forEach((e) => {
              if (!_(e)) throw new Error("Invalid Transaction digest " + e);
            });
            const t = e.digests.length !== new Set(e.digests).size;
            if (t)
              throw new Error("Duplicate digests in batch call " + e.digests);
            return await this.client.requestWithType(
              "sui_multiGetTransactionBlocks",
              [e.digests, e.options],
              (0, u.array)(ft),
            );
          }
          async executeTransactionBlock(e) {
            return await this.client.requestWithType(
              "sui_executeTransactionBlock",
              [
                "string" === typeof e.transactionBlock
                  ? e.transactionBlock
                  : (0, o.toB64)(e.transactionBlock),
                Array.isArray(e.signature) ? e.signature : [e.signature],
                e.options,
                e.requestType,
              ],
              ft,
            );
          }
          async getTotalTransactionBlocks() {
            const e = await this.client.requestWithType(
              "sui_getTotalTransactionBlocks",
              [],
              (0, u.string)(),
            );
            return BigInt(e);
          }
          async getReferenceGasPrice() {
            const e = await this.client.requestWithType(
              "suix_getReferenceGasPrice",
              [],
              (0, u.string)(),
            );
            return BigInt(e);
          }
          async getStakes(e) {
            if (!e.owner || !P(K(e.owner)))
              throw new Error("Invalid Sui address");
            return await this.client.requestWithType(
              "suix_getStakes",
              [e.owner],
              (0, u.array)(_r),
            );
          }
          async getStakesByIds(e) {
            return (
              e.stakedSuiIds.forEach((e) => {
                if (!e || !M(V(e)))
                  throw new Error("Invalid Sui Stake id " + e);
              }),
              await this.client.requestWithType(
                "suix_getStakesByIds",
                [e.stakedSuiIds],
                (0, u.array)(_r),
              )
            );
          }
          async getLatestSuiSystemState() {
            return await this.client.requestWithType(
              "suix_getLatestSuiSystemState",
              [],
              Kr,
            );
          }
          async queryEvents(e) {
            return await this.client.requestWithType(
              "suix_queryEvents",
              [
                e.query,
                e.cursor,
                e.limit,
                "descending" === (e.order || "descending"),
              ],
              xe,
            );
          }
          async subscribeEvent(e) {
            return this.wsClient.subscribeEvent(e.filter, e.onMessage);
          }
          async unsubscribeEvent(e) {
            return this.wsClient.unsubscribeEvent(e.id);
          }
          async devInspectTransactionBlock(e) {
            let t;
            if (Mo.is(e.transactionBlock))
              (e.transactionBlock.setSenderIfNotSet(e.sender),
                (t = (0, o.toB64)(
                  await e.transactionBlock.build({
                    provider: this,
                    onlyTransactionKind: !0,
                  }),
                )));
            else if ("string" === typeof e.transactionBlock)
              t = e.transactionBlock;
            else {
              if (!(e.transactionBlock instanceof Uint8Array))
                throw new Error("Unknown transaction block format.");
              t = (0, o.toB64)(e.transactionBlock);
            }
            return await this.client.requestWithType(
              "sui_devInspectTransactionBlock",
              [e.sender, t, e.gasPrice, e.epoch],
              it,
            );
          }
          async dryRunTransactionBlock(e) {
            return await this.client.requestWithType(
              "sui_dryRunTransactionBlock",
              [
                "string" === typeof e.transactionBlock
                  ? e.transactionBlock
                  : (0, o.toB64)(e.transactionBlock),
              ],
              bt,
            );
          }
          async getDynamicFields(e) {
            if (!e.parentId || !M(V(e.parentId)))
              throw new Error("Invalid Sui Object id");
            return await this.client.requestWithType(
              "suix_getDynamicFields",
              [e.parentId, e.cursor, e.limit],
              $n,
            );
          }
          async getDynamicFieldObject(e) {
            return await this.client.requestWithType(
              "suix_getDynamicFieldObject",
              [e.parentId, e.name],
              ie,
            );
          }
          async getLatestCheckpointSequenceNumber() {
            const e = await this.client.requestWithType(
              "sui_getLatestCheckpointSequenceNumber",
              [],
              (0, u.string)(),
            );
            return String(e);
          }
          async getCheckpoint(e) {
            return await this.client.requestWithType(
              "sui_getCheckpoint",
              [e.id],
              Zr,
            );
          }
          async getCheckpoints(e) {
            const t = await this.getRpcApiVersion(),
              r = await this.client.requestWithType(
                "sui_getCheckpoints",
                [
                  e.cursor,
                  t && (0, b.lt)(t, "0.32.0")
                    ? String(null === e || void 0 === e ? void 0 : e.limit)
                    : null === e || void 0 === e
                      ? void 0
                      : e.limit,
                  e.descendingOrder,
                ],
                Qr,
              );
            return r;
          }
          async getCommitteeInfo(e) {
            return await this.client.requestWithType(
              "suix_getCommitteeInfo",
              [null === e || void 0 === e ? void 0 : e.epoch],
              Ur,
            );
          }
          async getNetworkMetrics() {
            return await this.client.requestWithType(
              "suix_getNetworkMetrics",
              [],
              Do,
            );
          }
          async getEpochs(e) {
            const t = await this.getRpcApiVersion();
            return await this.client.requestWithType(
              "suix_getEpochs",
              [
                null === e || void 0 === e ? void 0 : e.cursor,
                t && (0, b.lt)(t, "0.32.0")
                  ? String(null === e || void 0 === e ? void 0 : e.limit)
                  : null === e || void 0 === e
                    ? void 0
                    : e.limit,
                null === e || void 0 === e ? void 0 : e.descendingOrder,
              ],
              qr,
            );
          }
          async getMoveCallMetrics() {
            return await this.client.requestWithType(
              "suix_getMoveCallMetrics",
              [],
              br,
            );
          }
          async getCurrentEpoch() {
            return await this.client.requestWithType(
              "suix_getCurrentEpoch",
              [],
              Gr,
            );
          }
          async getValidatorsApy() {
            return await this.client.requestWithType(
              "suix_getValidatorsApy",
              [],
              xr,
            );
          }
          async waitForTransactionBlock(e) {
            let {
              signal: t,
              timeout: r = 6e4,
              pollInterval: n = 2e3,
              ...i
            } = e;
            const o = AbortSignal.timeout(r),
              s = new Promise((e, t) => {
                o.addEventListener("abort", () => t(o.reason));
              });
            while (!o.aborted) {
              null === t || void 0 === t || t.throwIfAborted();
              try {
                return await this.getTransactionBlock(i);
              } catch (a) {
                await Promise.race([new Promise((e) => setTimeout(e, n)), s]);
              }
            }
            throw (
              o.throwIfAborted(),
              new Error("Unexpected error while waiting for transaction block.")
            );
          }
        };
      t.JsonRpcProvider = No;
      var Ko = (t.AppId = ((e) => ((e[(e["Sui"] = 0)] = "Sui"), e))(Ko || {})),
        Vo = (t.IntentVersion = ((e) => ((e[(e["V0"] = 0)] = "V0"), e))(
          Vo || {},
        )),
        $o = (t.IntentScope = ((e) => (
          (e[(e["TransactionData"] = 0)] = "TransactionData"),
          (e[(e["TransactionEffects"] = 1)] = "TransactionEffects"),
          (e[(e["CheckpointSummary"] = 2)] = "CheckpointSummary"),
          (e[(e["PersonalMessage"] = 3)] = "PersonalMessage"),
          e
        ))($o || {}));
      function Fo(e) {
        return [e, 0, 0];
      }
      function Lo(e, t) {
        const r = Fo(e),
          n = new Uint8Array(r.length + t.length);
        return (n.set(r), n.set(t, r.length), n);
      }
      var zo = class {
        async requestSuiFromFaucet(e) {
          return this.provider.requestSuiFromFaucet(await this.getAddress(), e);
        }
        constructor(e) {
          this.provider = e;
        }
        async signMessage(e) {
          const t = await this.signData(Lo(3, e.message));
          return { messageBytes: (0, o.toB64)(e.message), signature: t };
        }
        async signTransactionBlock(e) {
          let t;
          if (Mo.is(e.transactionBlock))
            (e.transactionBlock.setSenderIfNotSet(await this.getAddress()),
              (t = await e.transactionBlock.build({
                provider: this.provider,
              })));
          else {
            if (!(e.transactionBlock instanceof Uint8Array))
              throw new Error("Unknown transaction format");
            t = e.transactionBlock;
          }
          const r = Lo(0, t),
            n = await this.signData(r);
          return { transactionBlockBytes: (0, o.toB64)(t), signature: n };
        }
        async signAndExecuteTransactionBlock(e) {
          const { transactionBlockBytes: t, signature: r } =
            await this.signTransactionBlock({
              transactionBlock: e.transactionBlock,
            });
          return await this.provider.executeTransactionBlock({
            transactionBlock: t,
            signature: r,
            options: e.options,
            requestType: e.requestType,
          });
        }
        async getTransactionBlockDigest(e) {
          if (Mo.is(e))
            return (
              e.setSenderIfNotSet(await this.getAddress()),
              e.getDigest({ provider: this.provider })
            );
          if (e instanceof Uint8Array) return go.getDigestFromBytes(e);
          throw new Error("Unknown transaction format.");
        }
        async devInspectTransactionBlock(e) {
          const t = await this.getAddress();
          return this.provider.devInspectTransactionBlock({ sender: t, ...e });
        }
        async dryRunTransactionBlock(e) {
          let t;
          if (Mo.is(e.transactionBlock))
            (e.transactionBlock.setSenderIfNotSet(await this.getAddress()),
              (t = await e.transactionBlock.build({
                provider: this.provider,
              })));
          else if ("string" === typeof e.transactionBlock)
            t = (0, o.fromB64)(e.transactionBlock);
          else {
            if (!(e.transactionBlock instanceof Uint8Array))
              throw new Error("Unknown transaction format");
            t = e.transactionBlock;
          }
          return this.provider.dryRunTransactionBlock({ transactionBlock: t });
        }
        async getGasCostEstimation() {
          const e = await this.dryRunTransactionBlock(...arguments),
            t = Dt(e.effects);
          if ("undefined" === typeof t)
            throw new Error("Failed to estimate the gas cost from transaction");
          return t;
        }
      };
      t.SignerWithProvider = zo;
      var Go = class extends zo {
        constructor(e, t) {
          (super(t), (this.keypair = e));
        }
        async getAddress() {
          return this.keypair.getPublicKey().toSuiAddress();
        }
        async signData(e) {
          const t = this.keypair.getPublicKey(),
            r = (0, a.blake2b)(e, { dkLen: 32 }),
            n = this.keypair.signData(r),
            i = this.keypair.getKeyScheme();
          return rn({ signatureScheme: i, signature: n, pubKey: t });
        }
        connect(e) {
          return new Go(this.keypair, e);
        }
      };
      t.RawSigner = Go;
      var qo = "…";
      function Wo(e) {
        const t = e.startsWith("0x") ? 2 : 0;
        return `0x${e.slice(t, t + 4)}${qo}${e.slice(-4)}`;
      }
      function Ho(e) {
        return `${e.slice(0, 10)}${qo}`;
      }
      async function Jo(e, t, r) {
        const n = nn(t),
          c = Lo(r, "string" === typeof e ? (0, o.fromB64)(e) : e),
          u = (0, a.blake2b)(c, { dkLen: 32 });
        switch (n.signatureScheme) {
          case "ED25519":
            return i.default.sign.detached.verify(
              u,
              n.signature,
              n.pubKey.toBytes(),
            );
          case "Secp256k1":
            return l.secp256k1.verify(
              l.secp256k1.Signature.fromCompact(n.signature),
              (0, s.sha256)(u),
              n.pubKey.toBytes(),
            );
          default:
            throw new Error(`Unknown signature scheme: "${n.signatureScheme}"`);
        }
      }
      var Yo = (t.SUI_SYSTEM_STATE_OBJECT_ID = V("0x5")),
        Xo = (t.SUI_SYSTEM_MODULE_NAME = "sui_system"),
        Zo = (t.ADD_STAKE_FUN_NAME = "request_add_stake"),
        Qo =
          ((t.ADD_STAKE_LOCKED_COIN_FUN_NAME =
            "request_add_stake_with_locked_coin"),
          (t.WITHDRAW_STAKE_FUN_NAME = "request_withdraw_stake")),
        es = class {
          static async newRequestAddStakeTxn(e, t, r, n) {
            const i = new Mo(),
              o = i.splitCoins(i.gas, [i.pure(r)]);
            i.moveCall({
              target: `${Gt}::${Xo}::${Zo}`,
              arguments: [i.object(Yo), o, i.pure(n)],
            });
            const s = await e.multiGetObjects({
              ids: t,
              options: { showOwner: !0 },
            });
            return (i.setGasPayment(s.map((e) => ce(e))), i);
          }
          static async newRequestWithdrawlStakeTxn(e, t) {
            const r = new Mo();
            return (
              r.moveCall({
                target: `${Gt}::${Xo}::${Qo}`,
                arguments: [r.object(Yo), r.object(e), r.object(t)],
              }),
              r
            );
          }
        };
      t.SuiSystemStateUtil = es;
    },
    6257: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          e instanceof Uint8Array ||
          (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
        );
      }
      function i(e) {
        if (!n(e)) throw new Error("Uint8Array expected");
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
          i < t;
          i++
        )
          r[i - 1] = arguments[i];
        if (r.length > 0 && !r.includes(e.length))
          throw new Error(
            "Uint8Array expected of length " + r + ", got length=" + e.length,
          );
      }
      function o(e, t) {
        return (
          !!Array.isArray(t) &&
          (0 === t.length ||
            (e
              ? t.every((e) => "string" === typeof e)
              : t.every((e) => Number.isSafeInteger(e))))
        );
      }
      function s(e) {
        if ("function" !== typeof e) throw new Error("function expected");
        return !0;
      }
      function a(e, t) {
        if ("string" !== typeof t) throw new Error(e + ": string expected");
        return !0;
      }
      function c(e) {
        if (!Number.isSafeInteger(e)) throw new Error("invalid integer: " + e);
      }
      function u(e) {
        if (!Array.isArray(e)) throw new Error("array expected");
      }
      function l(e, t) {
        if (!o(!0, t)) throw new Error(e + ": array of strings expected");
      }
      function d(e, t) {
        if (!o(!1, t)) throw new Error(e + ": array of numbers expected");
      }
      function p() {
        const e = (e) => e,
          t = (e, t) => (r) => e(t(r));
        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        const o = n.map((e) => e.encode).reduceRight(t, e),
          s = n.map((e) => e.decode).reduce(t, e);
        return { encode: o, decode: s };
      }
      function h(e) {
        const t = "string" === typeof e ? e.split("") : e,
          r = t.length;
        l("alphabet", t);
        const n = new Map(t.map((e, t) => [e, t]));
        return {
          encode: (n) => (
            u(n),
            n.map((n) => {
              if (!Number.isSafeInteger(n) || n < 0 || n >= r)
                throw new Error(
                  `alphabet.encode: digit index outside alphabet "${n}". Allowed: ${e}`,
                );
              return t[n];
            })
          ),
          decode: (t) => (
            u(t),
            t.map((t) => {
              a("alphabet.decode", t);
              const r = n.get(t);
              if (void 0 === r)
                throw new Error(`Unknown letter: "${t}". Allowed: ${e}`);
              return r;
            })
          ),
        };
      }
      function g(e) {
        return (
          void 0 === e && (e = ""),
          a("join", e),
          {
            encode: (t) => (l("join.decode", t), t.join(e)),
            decode: (t) => (a("join.decode", t), t.split(e)),
          }
        );
      }
      function f(e, t) {
        return (
          void 0 === t && (t = "="),
          c(e),
          a("padding", t),
          {
            encode(r) {
              l("padding.encode", r);
              while ((r.length * e) % 8) r.push(t);
              return r;
            },
            decode(r) {
              l("padding.decode", r);
              let n = r.length;
              if ((n * e) % 8)
                throw new Error(
                  "padding: invalid, string should have whole number of bytes",
                );
              for (; n > 0 && r[n - 1] === t; n--) {
                const t = n - 1,
                  r = t * e;
                if (r % 8 === 0)
                  throw new Error(
                    "padding: invalid, string has too much padding",
                  );
              }
              return r.slice(0, n);
            },
          }
        );
      }
      function y(e) {
        return (s(e), { encode: (e) => e, decode: (t) => e(t) });
      }
      function b(e, t, r) {
        if (t < 2)
          throw new Error(
            `convertRadix: invalid from=${t}, base cannot be less than 2`,
          );
        if (r < 2)
          throw new Error(
            `convertRadix: invalid to=${r}, base cannot be less than 2`,
          );
        if ((u(e), !e.length)) return [];
        let n = 0;
        const i = [],
          o = Array.from(e, (e) => {
            if ((c(e), e < 0 || e >= t))
              throw new Error("invalid integer: " + e);
            return e;
          }),
          s = o.length;
        while (1) {
          let e = 0,
            a = !0;
          for (let i = n; i < s; i++) {
            const s = o[i],
              c = t * e,
              u = c + s;
            if (!Number.isSafeInteger(u) || c / t !== e || u - s !== c)
              throw new Error("convertRadix: carry overflow");
            const l = u / r;
            e = u % r;
            const d = Math.floor(l);
            if (((o[i] = d), !Number.isSafeInteger(d) || d * r + e !== u))
              throw new Error("convertRadix: carry overflow");
            a && (d ? (a = !1) : (n = i));
          }
          if ((i.push(e), a)) break;
        }
        for (let a = 0; a < e.length - 1 && 0 === e[a]; a++) i.push(0);
        return i.reverse();
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.utils =
          t.utf8 =
          t.stringToBytes =
          t.str =
          t.hex =
          t.createBase58check =
          t.bytesToString =
          t.bytes =
          t.bech32m =
          t.bech32 =
          t.base64urlnopad =
          t.base64url =
          t.base64nopad =
          t.base64 =
          t.base58xrp =
          t.base58xmr =
          t.base58flickr =
          t.base58check =
          t.base58 =
          t.base32nopad =
          t.base32hexnopad =
          t.base32hex =
          t.base32crockford =
          t.base32 =
          t.base16 =
            void 0));
      const m = (e, t) => (0 === t ? e : m(t, e % t)),
        v = (e, t) => e + (t - m(e, t)),
        w = (() => {
          let e = [];
          for (let t = 0; t < 40; t++) e.push(2 ** t);
          return e;
        })();
      function S(e, t, r, n) {
        if ((u(e), t <= 0 || t > 32))
          throw new Error("convertRadix2: wrong from=" + t);
        if (r <= 0 || r > 32) throw new Error("convertRadix2: wrong to=" + r);
        if (v(t, r) > 32)
          throw new Error(
            `convertRadix2: carry overflow from=${t} to=${r} carryBits=${v(t, r)}`,
          );
        let i = 0,
          o = 0;
        const s = w[t],
          a = w[r] - 1,
          l = [];
        for (const u of e) {
          if ((c(u), u >= s))
            throw new Error(`convertRadix2: invalid data word=${u} from=${t}`);
          if (((i = (i << t) | u), o + t > 32))
            throw new Error(`convertRadix2: carry overflow pos=${o} from=${t}`);
          for (o += t; o >= r; o -= r) l.push(((i >> (o - r)) & a) >>> 0);
          const e = w[o];
          if (void 0 === e) throw new Error("invalid carry");
          i &= e - 1;
        }
        if (((i = (i << (r - o)) & a), !n && o >= t))
          throw new Error("Excess padding");
        if (!n && i > 0) throw new Error("Non-zero padding: " + i);
        return (n && o > 0 && l.push(i >>> 0), l);
      }
      function E(e) {
        c(e);
        const t = 256;
        return {
          encode: (r) => {
            if (!n(r))
              throw new Error("radix.encode input should be Uint8Array");
            return b(Array.from(r), t, e);
          },
          decode: (r) => (d("radix.decode", r), Uint8Array.from(b(r, e, t))),
        };
      }
      function T(e, t) {
        if ((void 0 === t && (t = !1), c(e), e <= 0 || e > 32))
          throw new Error("radix2: bits should be in (0..32]");
        if (v(8, e) > 32 || v(e, 8) > 32)
          throw new Error("radix2: carry overflow");
        return {
          encode: (r) => {
            if (!n(r))
              throw new Error("radix2.encode input should be Uint8Array");
            return S(Array.from(r), 8, e, !t);
          },
          decode: (r) => (
            d("radix2.decode", r),
            Uint8Array.from(S(r, e, 8, t))
          ),
        };
      }
      function j(e) {
        return (
          s(e),
          function () {
            try {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.apply(null, r);
            } catch (i) {}
          }
        );
      }
      function k(e, t) {
        return (
          c(e),
          s(t),
          {
            encode(r) {
              if (!n(r))
                throw new Error("checksum.encode: input should be Uint8Array");
              const i = t(r).slice(0, e),
                o = new Uint8Array(r.length + e);
              return (o.set(r), o.set(i, r.length), o);
            },
            decode(r) {
              if (!n(r))
                throw new Error("checksum.decode: input should be Uint8Array");
              const i = r.slice(0, -e),
                o = r.slice(-e),
                s = t(i).slice(0, e);
              for (let t = 0; t < e; t++)
                if (s[t] !== o[t]) throw new Error("Invalid checksum");
              return i;
            },
          }
        );
      }
      t.utils = {
        alphabet: h,
        chain: p,
        checksum: k,
        convertRadix: b,
        convertRadix2: S,
        radix: E,
        radix2: T,
        join: g,
        padding: f,
      };
      const C = (t.base16 = p(T(4), h("0123456789ABCDEF"), g(""))),
        A = (t.base32 = p(
          T(5),
          h("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
          f(5),
          g(""),
        )),
        O =
          ((t.base32nopad = p(
            T(5),
            h("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
            g(""),
          )),
          (t.base32hex = p(
            T(5),
            h("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
            f(5),
            g(""),
          )),
          (t.base32hexnopad = p(
            T(5),
            h("0123456789ABCDEFGHIJKLMNOPQRSTUV"),
            g(""),
          )),
          (t.base32crockford = p(
            T(5),
            h("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),
            g(""),
            y((e) => e.toUpperCase().replace(/O/g, "0").replace(/[IL]/g, "1")),
          )),
          (() =>
            "function" === typeof Uint8Array.from([]).toBase64 &&
            "function" === typeof Uint8Array.fromBase64)()),
        I = (e, t) => {
          a("base64", e);
          const r = t ? /^[A-Za-z0-9=_-]+$/ : /^[A-Za-z0-9=+/]+$/,
            n = t ? "base64url" : "base64";
          if (e.length > 0 && !r.test(e)) throw new Error("invalid base64");
          return Uint8Array.fromBase64(e, {
            alphabet: n,
            lastChunkHandling: "strict",
          });
        },
        x = (t.base64 = O
          ? {
              encode(e) {
                return (i(e), e.toBase64());
              },
              decode(e) {
                return I(e, !1);
              },
            }
          : p(
              T(6),
              h(
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ),
              f(6),
              g(""),
            )),
        B =
          ((t.base64nopad = p(
            T(6),
            h(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            ),
            g(""),
          )),
          (t.base64url = O
            ? {
                encode(e) {
                  return (i(e), e.toBase64({ alphabet: "base64url" }));
                },
                decode(e) {
                  return I(e, !0);
                },
              }
            : p(
                T(6),
                h(
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                ),
                f(6),
                g(""),
              ))),
        _ =
          ((t.base64urlnopad = p(
            T(6),
            h(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ),
            g(""),
          )),
          (e) => p(E(58), h(e), g(""))),
        R = (t.base58 = _(
          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        )),
        P =
          ((t.base58flickr = _(
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          )),
          (t.base58xrp = _(
            "rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz",
          )),
          [0, 2, 3, 5, 6, 7, 9, 10, 11]),
        M = (t.base58xmr = {
          encode(e) {
            let t = "";
            for (let r = 0; r < e.length; r += 8) {
              const n = e.subarray(r, r + 8);
              t += R.encode(n).padStart(P[n.length], "1");
            }
            return t;
          },
          decode(e) {
            let t = [];
            for (let r = 0; r < e.length; r += 11) {
              const n = e.slice(r, r + 11),
                i = P.indexOf(n.length),
                o = R.decode(n);
              for (let e = 0; e < o.length - i; e++)
                if (0 !== o[e]) throw new Error("base58xmr: wrong padding");
              t = t.concat(Array.from(o.slice(o.length - i)));
            }
            return Uint8Array.from(t);
          },
        }),
        D = (e) =>
          p(
            k(4, (t) => e(e(t))),
            R,
          );
      t.createBase58check = D;
      t.base58check = D;
      const U = p(h("qpzry9x8gf2tvdw0s3jn54khce6mua7l"), g("")),
        N = [996825010, 642813549, 513874426, 1027748829, 705979059];
      function K(e) {
        const t = e >> 25;
        let r = (33554431 & e) << 5;
        for (let n = 0; n < N.length; n++) 1 === ((t >> n) & 1) && (r ^= N[n]);
        return r;
      }
      function V(e, t, r) {
        void 0 === r && (r = 1);
        const n = e.length;
        let i = 1;
        for (let o = 0; o < n; o++) {
          const t = e.charCodeAt(o);
          if (t < 33 || t > 126) throw new Error(`Invalid prefix (${e})`);
          i = K(i) ^ (t >> 5);
        }
        i = K(i);
        for (let o = 0; o < n; o++) i = K(i) ^ (31 & e.charCodeAt(o));
        for (let o of t) i = K(i) ^ o;
        for (let o = 0; o < 6; o++) i = K(i);
        return ((i ^= r), U.encode(S([i % w[30]], 30, 5, !1)));
      }
      function $(e) {
        const t = "bech32" === e ? 1 : 734539939,
          r = T(5),
          i = r.decode,
          o = r.encode,
          s = j(i);
        function c(e, r, i) {
          (void 0 === i && (i = 90),
            a("bech32.encode prefix", e),
            n(r) && (r = Array.from(r)),
            d("bech32.encode", r));
          const o = e.length;
          if (0 === o) throw new TypeError("Invalid prefix length " + o);
          const s = o + 7 + r.length;
          if (!1 !== i && s > i)
            throw new TypeError(`Length ${s} exceeds limit ${i}`);
          const c = e.toLowerCase(),
            u = V(c, r, t);
          return `${c}1${U.encode(r)}${u}`;
        }
        function u(e, r) {
          (void 0 === r && (r = 90), a("bech32.decode input", e));
          const n = e.length;
          if (n < 8 || (!1 !== r && n > r))
            throw new TypeError(
              `invalid string length: ${n} (${e}). Expected (8..${r})`,
            );
          const i = e.toLowerCase();
          if (e !== i && e !== e.toUpperCase())
            throw new Error("String must be lowercase or uppercase");
          const o = i.lastIndexOf("1");
          if (0 === o || -1 === o)
            throw new Error(
              'Letter "1" must be present between prefix and data only',
            );
          const s = i.slice(0, o),
            c = i.slice(o + 1);
          if (c.length < 6)
            throw new Error("Data must be at least 6 characters long");
          const u = U.decode(c).slice(0, -6),
            l = V(s, u, t);
          if (!c.endsWith(l))
            throw new Error(`Invalid checksum in ${e}: expected "${l}"`);
          return { prefix: s, words: u };
        }
        const l = j(u);
        function p(e) {
          const { prefix: t, words: r } = u(e, !1);
          return { prefix: t, words: r, bytes: i(r) };
        }
        function h(e, t) {
          return c(e, o(t));
        }
        return {
          encode: c,
          decode: u,
          encodeFromBytes: h,
          decodeToBytes: p,
          decodeUnsafe: l,
          fromWords: i,
          fromWordsUnsafe: s,
          toWords: o,
        };
      }
      ((t.bech32 = $("bech32")), (t.bech32m = $("bech32m")));
      const F = (t.utf8 = {
          encode: (e) => new TextDecoder().decode(e),
          decode: (e) => new TextEncoder().encode(e),
        }),
        L = (() =>
          "function" === typeof Uint8Array.from([]).toHex &&
          "function" === typeof Uint8Array.fromHex)(),
        z = {
          encode(e) {
            return (i(e), e.toHex());
          },
          decode(e) {
            return (a("hex", e), Uint8Array.fromHex(e));
          },
        },
        G = (t.hex = L
          ? z
          : p(
              T(4),
              h("0123456789abcdef"),
              g(""),
              y((e) => {
                if ("string" !== typeof e || e.length % 2 !== 0)
                  throw new TypeError(
                    `hex.decode: expected string, got ${typeof e} with length ${e.length}`,
                  );
                return e.toLowerCase();
              }),
            )),
        q = {
          utf8: F,
          hex: G,
          base16: C,
          base32: A,
          base64: x,
          base64url: B,
          base58: R,
          base58xmr: M,
        },
        W =
          "Invalid encoding type. Available types: utf8, hex, base16, base32, base64, base64url, base58, base58xmr",
        H = (e, t) => {
          if ("string" !== typeof e || !q.hasOwnProperty(e))
            throw new TypeError(W);
          if (!n(t)) throw new TypeError("bytesToString() expects Uint8Array");
          return q[e].encode(t);
        };
      t.bytesToString = H;
      t.str = H;
      const J = (e, t) => {
        if (!q.hasOwnProperty(e)) throw new TypeError(W);
        if ("string" !== typeof t)
          throw new TypeError("stringToBytes() expects string");
        return q[e].decode(t);
      };
      t.stringToBytes = J;
      t.bytes = J;
    },
    8389: function (e, t, r) {
      "use strict";
      var n = Object.create,
        i = Object.defineProperty,
        o = Object.getOwnPropertyDescriptor,
        s = Object.getOwnPropertyNames,
        a = Object.getPrototypeOf,
        c = Object.prototype.hasOwnProperty,
        u = (e, t) => {
          for (var r in t) i(e, r, { get: t[r], enumerable: !0 });
        },
        l = (e, t, r, n) => {
          if ((t && "object" === typeof t) || "function" === typeof t)
            for (let a of s(t))
              c.call(e, a) ||
                a === r ||
                i(e, a, {
                  get: () => t[a],
                  enumerable: !(n = o(t, a)) || n.enumerable,
                });
          return e;
        },
        d = (e, t, r) => (
          (r = null != e ? n(a(e)) : {}),
          l(
            !t && e && e.__esModule
              ? r
              : i(r, "default", { value: e, enumerable: !0 }),
            e,
          )
        ),
        p = (e) => l(i({}, "__esModule", { value: !0 }), e),
        h = {};
      function g(e) {
        return e > 64 && e < 91
          ? e - 65
          : e > 96 && e < 123
            ? e - 71
            : e > 47 && e < 58
              ? e + 4
              : 43 === e
                ? 62
                : 47 === e
                  ? 63
                  : 0;
      }
      function f(e, t) {
        for (
          var r,
            n,
            i = e.replace(/[^A-Za-z0-9+/]/g, ""),
            o = i.length,
            s = t ? Math.ceil(((3 * o + 1) >> 2) / t) * t : (3 * o + 1) >> 2,
            a = new Uint8Array(s),
            c = 0,
            u = 0,
            l = 0;
          l < o;
          l++
        )
          if (
            ((n = 3 & l),
            (c |= g(i.charCodeAt(l)) << (6 * (3 - n))),
            3 === n || o - l === 1)
          ) {
            for (r = 0; r < 3 && u < s; r++, u++)
              a[u] = (c >>> ((16 >>> r) & 24)) & 255;
            c = 0;
          }
        return a;
      }
      function y(e) {
        return e < 26
          ? e + 65
          : e < 52
            ? e + 71
            : e < 62
              ? e - 4
              : 62 === e
                ? 43
                : 63 === e
                  ? 47
                  : 65;
      }
      function b(e) {
        for (var t = 2, r = "", n = e.length, i = 0, o = 0; o < n; o++)
          ((t = o % 3),
            o > 0 && ((4 * o) / 3) % 76 === 0 && (r += ""),
            (i |= e[o] << ((16 >>> t) & 24)),
            (2 !== t && e.length - o !== 1) ||
              ((r += String.fromCodePoint(
                y((i >>> 18) & 63),
                y((i >>> 12) & 63),
                y((i >>> 6) & 63),
                y(63 & i),
              )),
              (i = 0)));
        return (
          r.slice(0, r.length - 2 + t) + (2 === t ? "" : 1 === t ? "=" : "==")
        );
      }
      function m(e) {
        let t = e
          .replace("0x", "")
          .match(/.{1,2}/g)
          .map((e) => parseInt(e, 16));
        if (null === t) throw new Error("Unable to parse HEX: " + e);
        return Uint8Array.from(t);
      }
      function v(e) {
        return e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
      }
      (u(h, {
        BCS: () => x,
        BcsReader: () => k,
        BcsWriter: () => C,
        decodeStr: () => _,
        encodeStr: () => B,
        fromB58: () => j,
        fromB64: () => f,
        fromHEX: () => m,
        getRustConfig: () => P,
        getSuiMoveConfig: () => M,
        registerPrimitives: () => R,
        toB58: () => T,
        toB64: () => b,
        toHEX: () => v,
      }),
        (e.exports = p(h)));
      var w = d(r(8390)),
        S = 32;
      function E(e, t) {
        let r = new Uint8Array(t),
          n = 0;
        while (e > 0)
          ((r[n] = Number(e % BigInt(256))), (e /= BigInt(256)), (n += 1));
        return r;
      }
      var T = (e) => w.default.encode(e),
        j = (e) => w.default.decode(e),
        k = class {
          constructor(e) {
            ((this.bytePosition = 0), (this.dataView = new DataView(e.buffer)));
          }
          shift(e) {
            return ((this.bytePosition += e), this);
          }
          read8() {
            let e = this.dataView.getUint8(this.bytePosition);
            return (this.shift(1), e);
          }
          read16() {
            let e = this.dataView.getUint16(this.bytePosition, !0);
            return (this.shift(2), e);
          }
          read32() {
            let e = this.dataView.getUint32(this.bytePosition, !0);
            return (this.shift(4), e);
          }
          read64() {
            let e = this.read32(),
              t = this.read32(),
              r = t.toString(16) + e.toString(16).padStart(8, "0");
            return BigInt("0x" + r).toString(10);
          }
          read128() {
            let e = BigInt(this.read64()),
              t = BigInt(this.read64()),
              r = t.toString(16) + e.toString(16).padStart(8, "0");
            return BigInt("0x" + r).toString(10);
          }
          read256() {
            let e = BigInt(this.read128()),
              t = BigInt(this.read128()),
              r = t.toString(16) + e.toString(16).padStart(16, "0");
            return BigInt("0x" + r).toString(10);
          }
          readBytes(e) {
            let t = this.bytePosition + this.dataView.byteOffset,
              r = new Uint8Array(this.dataView.buffer, t, e);
            return (this.shift(e), r);
          }
          readULEB() {
            let e = this.bytePosition + this.dataView.byteOffset,
              t = new Uint8Array(this.dataView.buffer, e),
              { value: r, length: n } = O(t);
            return (this.shift(n), r);
          }
          readVec(e) {
            let t = this.readULEB(),
              r = [];
            for (let n = 0; n < t; n++) r.push(e(this, n, t));
            return r;
          }
        },
        C = class {
          constructor(e) {
            let {
              size: t = 1024,
              maxSize: r,
              allocateSize: n = 1024,
            } = void 0 === e ? {} : e;
            ((this.bytePosition = 0),
              (this.size = t),
              (this.maxSize = r || t),
              (this.allocateSize = n),
              (this.dataView = new DataView(new ArrayBuffer(t))));
          }
          ensureSizeOrGrow(e) {
            const t = this.bytePosition + e;
            if (t > this.size) {
              const e = Math.min(this.maxSize, this.size + this.allocateSize);
              if (t > e)
                throw new Error(
                  `Attempting to serialize to BCS, but buffer does not have enough size. Allocated size: ${this.size}, Max size: ${this.maxSize}, Required size: ${t}`,
                );
              this.size = e;
              const r = new ArrayBuffer(this.size);
              (new Uint8Array(r).set(new Uint8Array(this.dataView.buffer)),
                (this.dataView = new DataView(r)));
            }
          }
          shift(e) {
            return ((this.bytePosition += e), this);
          }
          write8(e) {
            return (
              this.ensureSizeOrGrow(1),
              this.dataView.setUint8(this.bytePosition, Number(e)),
              this.shift(1)
            );
          }
          write16(e) {
            return (
              this.ensureSizeOrGrow(2),
              this.dataView.setUint16(this.bytePosition, Number(e), !0),
              this.shift(2)
            );
          }
          write32(e) {
            return (
              this.ensureSizeOrGrow(4),
              this.dataView.setUint32(this.bytePosition, Number(e), !0),
              this.shift(4)
            );
          }
          write64(e) {
            return (E(BigInt(e), 8).forEach((e) => this.write8(e)), this);
          }
          write128(e) {
            return (E(BigInt(e), 16).forEach((e) => this.write8(e)), this);
          }
          write256(e) {
            return (E(BigInt(e), 32).forEach((e) => this.write8(e)), this);
          }
          writeULEB(e) {
            return (A(e).forEach((e) => this.write8(e)), this);
          }
          writeVec(e, t) {
            return (
              this.writeULEB(e.length),
              Array.from(e).forEach((r, n) => t(this, r, n, e.length)),
              this
            );
          }
          *[Symbol.iterator]() {
            for (let e = 0; e < this.bytePosition; e++)
              yield this.dataView.getUint8(e);
            return this.toBytes();
          }
          toBytes() {
            return new Uint8Array(
              this.dataView.buffer.slice(0, this.bytePosition),
            );
          }
          toString(e) {
            return B(this.toBytes(), e);
          }
        };
      function A(e) {
        let t = [],
          r = 0;
        if (0 === e) return [0];
        while (e > 0) ((t[r] = 127 & e), (e >>= 7) && (t[r] |= 128), (r += 1));
        return t;
      }
      function O(e) {
        let t = 0,
          r = 0,
          n = 0;
        while (1) {
          let i = e[n];
          if (((n += 1), (t |= (127 & i) << r), 0 === (128 & i))) break;
          r += 7;
        }
        return { value: t, length: n };
      }
      var I = class {
          constructor(e) {
            if (((this.types = new Map()), (this.counter = 0), e instanceof I))
              return (
                (this.schema = e.schema),
                void (this.types = new Map(e.types))
              );
            if (
              ((this.schema = e),
              this.registerAddressType(
                I.ADDRESS,
                e.addressLength,
                e.addressEncoding,
              ),
              this.registerVectorType(e.vectorType),
              e.types && e.types.structs)
            )
              for (let t of Object.keys(e.types.structs))
                this.registerStructType(t, e.types.structs[t]);
            if (e.types && e.types.enums)
              for (let t of Object.keys(e.types.enums))
                this.registerEnumType(t, e.types.enums[t]);
            if (e.types && e.types.aliases)
              for (let t of Object.keys(e.types.aliases))
                this.registerAlias(t, e.types.aliases[t]);
            !1 !== e.withPrimitives && R(this);
          }
          tempKey() {
            return "bcs-struct-" + ++this.counter;
          }
          ser(e, t, r) {
            if ("string" === typeof e || Array.isArray(e)) {
              const { name: n, params: i } = this.parseTypeName(e);
              return this.getTypeInterface(n).encode(this, t, r, i);
            }
            if ("object" === typeof e) {
              const n = this.tempKey(),
                i = new I(this);
              return i.registerStructType(n, e).ser(n, t, r);
            }
            throw new Error(
              "Incorrect type passed into the '.ser()' function. \n" +
                JSON.stringify(e),
            );
          }
          de(e, t, r) {
            if ("string" === typeof t) {
              if (!r)
                throw new Error(
                  "To pass a string to `bcs.de`, specify encoding",
                );
              t = _(t, r);
            }
            if ("string" === typeof e || Array.isArray(e)) {
              const { name: r, params: n } = this.parseTypeName(e);
              return this.getTypeInterface(r).decode(this, t, n);
            }
            if ("object" === typeof e) {
              const n = new I(this),
                i = this.tempKey();
              return n.registerStructType(i, e).de(i, t, r);
            }
            throw new Error(
              "Incorrect type passed into the '.de()' function. \n" +
                JSON.stringify(e),
            );
          }
          hasType(e) {
            return this.types.has(e);
          }
          registerAlias(e, t) {
            return (this.types.set(e, t), this);
          }
          registerType(e, t, r, n) {
            void 0 === n && (n = () => !0);
            const { name: i, params: o } = this.parseTypeName(e);
            return (
              this.types.set(i, {
                encode(e, t, r, n) {
                  const i = o.reduce(
                    (e, t, r) => Object.assign(e, { [t]: n[r] }),
                    {},
                  );
                  return this._encodeRaw.call(e, new C(r), t, n, i);
                },
                decode(e, t, r) {
                  const n = o.reduce(
                    (e, t, n) => Object.assign(e, { [t]: r[n] }),
                    {},
                  );
                  return this._decodeRaw.call(e, new k(t), r, n);
                },
                _encodeRaw(e, r, o, s) {
                  if (n(r)) return t.call(this, e, r, o, s);
                  throw new Error(
                    `Validation failed for type ${i}, data: ${r}`,
                  );
                },
                _decodeRaw(e, t, n) {
                  return r.call(this, e, t, n);
                },
              }),
              this
            );
          }
          registerAddressType(e, t, r) {
            switch ((void 0 === r && (r = "hex"), r)) {
              case "base64":
                return this.registerType(
                  e,
                  function (e, t) {
                    return f(t).reduce((e, t) => e.write8(t), e);
                  },
                  function (e) {
                    return b(e.readBytes(t));
                  },
                );
              case "hex":
                return this.registerType(
                  e,
                  function (e, t) {
                    return m(t).reduce((e, t) => e.write8(t), e);
                  },
                  function (e) {
                    return v(e.readBytes(t));
                  },
                );
              default:
                throw new Error(
                  "Unsupported encoding! Use either hex or base64",
                );
            }
          }
          registerVectorType(e) {
            let { name: t, params: r } = this.parseTypeName(e);
            if (r.length > 1)
              throw new Error(
                "Vector can have only one type parameter; got " + t,
              );
            return this.registerType(
              e,
              function (t, r, n, i) {
                return t.writeVec(r, (t, r) => {
                  let o = n[0];
                  if (!o)
                    throw new Error(
                      `Incorrect number of type parameters passed a to vector '${e}'`,
                    );
                  let { name: s, params: a } = this.parseTypeName(o);
                  if (this.hasType(s))
                    return this.getTypeInterface(s)._encodeRaw.call(
                      this,
                      t,
                      r,
                      a,
                      i,
                    );
                  if (!(s in i))
                    throw new Error(
                      `Unable to find a matching type definition for ${s} in vector; make sure you passed a generic`,
                    );
                  let { name: c, params: u } = this.parseTypeName(i[s]);
                  return this.getTypeInterface(c)._encodeRaw.call(
                    this,
                    t,
                    r,
                    u,
                    i,
                  );
                });
              },
              function (t, r, n) {
                return t.readVec((t) => {
                  let i = r[0];
                  if (!i)
                    throw new Error(
                      `Incorrect number of type parameters passed to a vector '${e}'`,
                    );
                  let { name: o, params: s } = this.parseTypeName(i);
                  if (this.hasType(o))
                    return this.getTypeInterface(o)._decodeRaw.call(
                      this,
                      t,
                      s,
                      n,
                    );
                  if (!(o in n))
                    throw new Error(
                      `Unable to find a matching type definition for ${o} in vector; make sure you passed a generic`,
                    );
                  let { name: a, params: c } = this.parseTypeName(n[o]);
                  this.getTypeInterface(a)._decodeRaw.call(this, t, c, n);
                });
              },
            );
          }
          registerStructType(e, t) {
            for (let s in t) {
              let e = this.tempKey(),
                r = t[s];
              Array.isArray(r) ||
                "string" === typeof r ||
                ((t[s] = e), this.registerStructType(e, r));
            }
            let r = Object.freeze(t),
              n = Object.keys(r),
              { name: i, params: o } = this.parseTypeName(e);
            return this.registerType(
              e,
              function (e, t, s, a) {
                if (!t || t.constructor !== Object)
                  throw new Error(`Expected ${i} to be an Object, got: ${t}`);
                if (s.length !== o.length)
                  throw new Error(
                    `Incorrect number of generic parameters passed; expected: ${o.length}, got: ${s.length}`,
                  );
                for (let c of n) {
                  if (!(c in t))
                    throw new Error(`Struct ${i} requires field ${c}:${r[c]}`);
                  const { name: n, params: u } = this.parseTypeName(r[c]);
                  if (o.includes(n)) {
                    const r = o.indexOf(n);
                    let { name: u, params: l } = this.parseTypeName(s[r]);
                    if (this.hasType(u)) {
                      this.getTypeInterface(u)._encodeRaw.call(
                        this,
                        e,
                        t[c],
                        l,
                        a,
                      );
                      continue;
                    }
                    if (!(u in a))
                      throw new Error(
                        `Unable to find a matching type definition for ${u} in ${i}; make sure you passed a generic`,
                      );
                    let { name: d, params: p } = this.parseTypeName(a[u]);
                    this.getTypeInterface(d)._encodeRaw.call(
                      this,
                      e,
                      t[c],
                      p,
                      a,
                    );
                  } else
                    this.getTypeInterface(n)._encodeRaw.call(
                      this,
                      e,
                      t[c],
                      u,
                      a,
                    );
                }
                return e;
              },
              function (e, t, s) {
                if (t.length !== o.length)
                  throw new Error(
                    `Incorrect number of generic parameters passed; expected: ${o.length}, got: ${t.length}`,
                  );
                let a = {};
                for (let c of n) {
                  const { name: n, params: u } = this.parseTypeName(r[c]);
                  if (o.includes(n)) {
                    const r = o.indexOf(n);
                    let { name: u, params: l } = this.parseTypeName(t[r]);
                    if (this.hasType(u)) {
                      a[c] = this.getTypeInterface(u)._decodeRaw.call(
                        this,
                        e,
                        l,
                        s,
                      );
                      continue;
                    }
                    if (!(u in s))
                      throw new Error(
                        `Unable to find a matching type definition for ${u} in ${i}; make sure you passed a generic`,
                      );
                    let { name: d, params: p } = this.parseTypeName(s[u]);
                    a[c] = this.getTypeInterface(d)._decodeRaw.call(
                      this,
                      e,
                      p,
                      s,
                    );
                  } else
                    a[c] = this.getTypeInterface(n)._decodeRaw.call(
                      this,
                      e,
                      u,
                      s,
                    );
                }
                return a;
              },
            );
          }
          registerEnumType(e, t) {
            for (let s in t) {
              let e = this.tempKey(),
                r = t[s];
              null === r ||
                Array.isArray(r) ||
                "string" === typeof r ||
                ((t[s] = e), this.registerStructType(e, r));
            }
            let r = Object.freeze(t),
              n = Object.keys(r),
              { name: i, params: o } = this.parseTypeName(e);
            return this.registerType(
              e,
              function (e, t, s, a) {
                if (!t)
                  throw new Error(
                    `Unable to write enum "${i}", missing data.\nReceived: "${t}"`,
                  );
                if ("object" !== typeof t)
                  throw new Error(
                    `Incorrect data passed into enum "${i}", expected object with properties: "${n.join(" | ")}".\nReceived: "${JSON.stringify(t)}"`,
                  );
                let c = Object.keys(t)[0];
                if (void 0 === c)
                  throw new Error(
                    `Empty object passed as invariant of the enum "${i}"`,
                  );
                let u = n.indexOf(c);
                if (-1 === u)
                  throw new Error(
                    `Unknown invariant of the enum "${i}", allowed values: "${n.join(" | ")}"; received "${c}"`,
                  );
                let l = n[u],
                  d = r[l];
                if ((e.write8(u), null === d)) return e;
                let p = o.indexOf(d),
                  h = -1 === p ? d : s[p];
                {
                  let { name: r, params: n } = this.parseTypeName(h);
                  return this.getTypeInterface(r)._encodeRaw.call(
                    this,
                    e,
                    t[c],
                    n,
                    a,
                  );
                }
              },
              function (e, t, s) {
                let a = e.readULEB(),
                  c = n[a],
                  u = r[c];
                if (-1 === a)
                  throw new Error(
                    `Decoding type mismatch, expected enum "${i}" invariant index, received "${a}"`,
                  );
                if (null === u) return { [c]: !0 };
                let l = o.indexOf(u),
                  d = -1 === l ? u : t[l];
                {
                  let { name: t, params: r } = this.parseTypeName(d);
                  return {
                    [c]: this.getTypeInterface(t)._decodeRaw.call(
                      this,
                      e,
                      r,
                      s,
                    ),
                  };
                }
              },
            );
          }
          getTypeInterface(e) {
            let t = this.types.get(e);
            if ("string" === typeof t) {
              let e = [];
              while ("string" === typeof t) {
                if (e.includes(t))
                  throw new Error(
                    `Recursive definition found: ${e.join(" -> ")} -> ${t}`,
                  );
                (e.push(t), (t = this.types.get(t)));
              }
            }
            if (void 0 === t) throw new Error(`Type ${e} is not registered`);
            return t;
          }
          parseTypeName(e) {
            if (Array.isArray(e)) {
              let [t, ...r] = e;
              return { name: t, params: r };
            }
            if ("string" !== typeof e)
              throw new Error(
                "Illegal type passed as a name of the type: " + e,
              );
            let [t, r] = this.schema.genericSeparators || ["<", ">"],
              n = e.indexOf(t),
              i = Array.from(e).reverse().indexOf(r);
            if (-1 === n && -1 === i) return { name: e, params: [] };
            if (-1 === n || -1 === i)
              throw new Error(`Unclosed generic in name '${e}'`);
            let o = e.slice(0, n),
              s = e
                .slice(n + 1, e.length - i - 1)
                .split(",")
                .map((e) => e.trim());
            return { name: o, params: s };
          }
        },
        x = I;
      function B(e, t) {
        switch (t) {
          case "base58":
            return T(e);
          case "base64":
            return b(e);
          case "hex":
            return v(e);
          default:
            throw new Error(
              "Unsupported encoding, supported values are: base64, hex",
            );
        }
      }
      function _(e, t) {
        switch (t) {
          case "base58":
            return j(e);
          case "base64":
            return f(e);
          case "hex":
            return m(e);
          default:
            throw new Error(
              "Unsupported encoding, supported values are: base64, hex",
            );
        }
      }
      function R(e) {
        (e.registerType(
          x.U8,
          function (e, t) {
            return e.write8(t);
          },
          function (e) {
            return e.read8();
          },
          (e) => e < 256,
        ),
          e.registerType(
            x.U16,
            function (e, t) {
              return e.write16(t);
            },
            function (e) {
              return e.read16();
            },
            (e) => e < 65536,
          ),
          e.registerType(
            x.U32,
            function (e, t) {
              return e.write32(t);
            },
            function (e) {
              return e.read32();
            },
            (e) => e <= 4294967296n,
          ),
          e.registerType(
            x.U64,
            function (e, t) {
              return e.write64(t);
            },
            function (e) {
              return e.read64();
            },
          ),
          e.registerType(
            x.U128,
            function (e, t) {
              return e.write128(t);
            },
            function (e) {
              return e.read128();
            },
          ),
          e.registerType(
            x.U256,
            function (e, t) {
              return e.write256(t);
            },
            function (e) {
              return e.read256();
            },
          ),
          e.registerType(
            x.BOOL,
            function (e, t) {
              return e.write8(t);
            },
            function (e) {
              return "1" === e.read8().toString(10);
            },
          ),
          e.registerType(
            x.STRING,
            function (e, t) {
              return e.writeVec(Array.from(t), (e, t) =>
                e.write8(t.charCodeAt(0)),
              );
            },
            function (e) {
              return e
                .readVec((e) => e.read8())
                .map((e) => String.fromCharCode(Number(e)))
                .join("");
            },
            (e) => !0,
          ),
          e.registerType(
            x.HEX,
            function (e, t) {
              return e.writeVec(Array.from(m(t)), (e, t) => e.write8(t));
            },
            function (e) {
              let t = e.readVec((e) => e.read8());
              return v(new Uint8Array(t));
            },
          ),
          e.registerType(
            x.BASE58,
            function (e, t) {
              return e.writeVec(Array.from(j(t)), (e, t) => e.write8(t));
            },
            function (e) {
              let t = e.readVec((e) => e.read8());
              return T(new Uint8Array(t));
            },
          ),
          e.registerType(
            x.BASE64,
            function (e, t) {
              return e.writeVec(Array.from(f(t)), (e, t) => e.write8(t));
            },
            function (e) {
              let t = e.readVec((e) => e.read8());
              return b(new Uint8Array(t));
            },
          ));
      }
      function P() {
        return {
          genericSeparators: ["<", ">"],
          vectorType: "Vec",
          addressLength: S,
          addressEncoding: "hex",
        };
      }
      function M() {
        return {
          genericSeparators: ["<", ">"],
          vectorType: "vector",
          addressLength: S,
          addressEncoding: "hex",
        };
      }
      ((x.U8 = "u8"),
        (x.U16 = "u16"),
        (x.U32 = "u32"),
        (x.U64 = "u64"),
        (x.U128 = "u128"),
        (x.U256 = "u256"),
        (x.BOOL = "bool"),
        (x.VECTOR = "vector"),
        (x.ADDRESS = "address"),
        (x.STRING = "string"),
        (x.HEX = "hex-string"),
        (x.BASE58 = "base58-string"),
        (x.BASE64 = "base64-string"));
    },
    8390: function (e, t, r) {
      const n = r(8391),
        i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      e.exports = n(i);
    },
    8391: function (e, t, r) {
      "use strict";
      function n(e) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), r = 0; r < t.length; r++) t[r] = 255;
        for (var n = 0; n < e.length; n++) {
          var i = e.charAt(n),
            o = i.charCodeAt(0);
          if (255 !== t[o]) throw new TypeError(i + " is ambiguous");
          t[o] = n;
        }
        var s = e.length,
          a = e.charAt(0),
          c = Math.log(s) / Math.log(256),
          u = Math.log(256) / Math.log(s);
        function l(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var r = 0,
            n = 0,
            i = 0,
            o = t.length;
          while (i !== o && 0 === t[i]) (i++, r++);
          var c = ((o - i) * u + 1) >>> 0,
            l = new Uint8Array(c);
          while (i !== o) {
            for (
              var d = t[i], p = 0, h = c - 1;
              (0 !== d || p < n) && -1 !== h;
              h--, p++
            )
              ((d += (256 * l[h]) >>> 0),
                (l[h] = (d % s) >>> 0),
                (d = (d / s) >>> 0));
            if (0 !== d) throw new Error("Non-zero carry");
            ((n = p), i++);
          }
          var g = c - n;
          while (g !== c && 0 === l[g]) g++;
          for (var f = a.repeat(r); g < c; ++g) f += e.charAt(l[g]);
          return f;
        }
        function d(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var r = 0,
            n = 0,
            i = 0;
          while (e[r] === a) (n++, r++);
          var o = ((e.length - r) * c + 1) >>> 0,
            u = new Uint8Array(o);
          while (e[r]) {
            var l = e.charCodeAt(r);
            if (l > 255) return;
            var d = t[l];
            if (255 === d) return;
            for (var p = 0, h = o - 1; (0 !== d || p < i) && -1 !== h; h--, p++)
              ((d += (s * u[h]) >>> 0),
                (u[h] = (d % 256) >>> 0),
                (d = (d / 256) >>> 0));
            if (0 !== d) throw new Error("Non-zero carry");
            ((i = p), r++);
          }
          var g = o - i;
          while (g !== o && 0 === u[g]) g++;
          var f = new Uint8Array(n + (o - g)),
            y = n;
          while (g !== o) f[y++] = u[g++];
          return f;
        }
        function p(e) {
          var t = d(e);
          if (t) return t;
          throw new Error("Non-base" + s + " character");
        }
        return { encode: l, decodeUnsafe: d, decode: p };
      }
      e.exports = n;
    },
    8392: function (e, t, r) {
      (function (e, r) {
        r(t);
      })(0, function (e) {
        "use strict";
        class StructError extends TypeError {
          constructor(e, t) {
            let r;
            const { message: n, explanation: i, ...o } = e,
              { path: s } = e,
              a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
            (super(null !== i && void 0 !== i ? i : a),
              null != i && (this.cause = a),
              Object.assign(this, o),
              (this.name = this.constructor.name),
              (this.failures = () => {
                var n;
                return null !== (n = r) && void 0 !== n ? n : (r = [e, ...t()]);
              }));
          }
        }
        function t(e) {
          return r(e) && "function" === typeof e[Symbol.iterator];
        }
        function r(e) {
          return "object" === typeof e && null != e;
        }
        function n(e) {
          if ("[object Object]" !== Object.prototype.toString.call(e))
            return !1;
          const t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function i(e) {
          return "symbol" === typeof e
            ? e.toString()
            : "string" === typeof e
              ? JSON.stringify(e)
              : "" + e;
        }
        function o(e) {
          const { done: t, value: r } = e.next();
          return t ? void 0 : r;
        }
        function s(e, t, r, n) {
          if (!0 === e) return;
          !1 === e ? (e = {}) : "string" === typeof e && (e = { message: e });
          const { path: o, branch: s } = t,
            { type: a } = r,
            {
              refinement: c,
              message:
                u = `Expected a value of type \`${a}\`${c ? ` with refinement \`${c}\`` : ""}, but received: \`${i(n)}\``,
            } = e;
          return {
            value: n,
            type: a,
            refinement: c,
            key: o[o.length - 1],
            path: o,
            branch: s,
            ...e,
            message: u,
          };
        }
        function* a(e, r, n, i) {
          t(e) || (e = [e]);
          for (const t of e) {
            const e = s(t, r, n, i);
            e && (yield e);
          }
        }
        function c(e, t, n) {
          return (
            void 0 === n && (n = {}),
            (function* () {
              const {
                  path: i = [],
                  branch: o = [e],
                  coerce: s = !1,
                  mask: a = !1,
                } = n,
                u = { path: i, branch: o };
              if (
                s &&
                ((e = t.coercer(e, u)),
                a &&
                  "type" !== t.type &&
                  r(t.schema) &&
                  r(e) &&
                  !Array.isArray(e))
              )
                for (const r in e) void 0 === t.schema[r] && delete e[r];
              let l = "valid";
              for (const r of t.validator(e, u))
                ((r.explanation = n.message),
                  (l = "not_valid"),
                  yield [r, void 0]);
              for (let [d, p, h] of t.entries(e, u)) {
                const t = c(p, h, {
                  path: void 0 === d ? i : [...i, d],
                  branch: void 0 === d ? o : [...o, p],
                  coerce: s,
                  mask: a,
                  message: n.message,
                });
                for (const n of t)
                  n[0]
                    ? ((l =
                        null != n[0].refinement ? "not_refined" : "not_valid"),
                      yield [n[0], void 0])
                    : s &&
                      ((p = n[1]),
                      void 0 === d
                        ? (e = p)
                        : e instanceof Map
                          ? e.set(d, p)
                          : e instanceof Set
                            ? e.add(p)
                            : r(e) && (void 0 !== p || d in e) && (e[d] = p));
              }
              if ("not_valid" !== l)
                for (const r of t.refiner(e, u))
                  ((r.explanation = n.message),
                    (l = "not_refined"),
                    yield [r, void 0]);
              "valid" === l && (yield [void 0, e]);
            })()
          );
        }
        class Struct {
          constructor(e) {
            const {
              type: t,
              schema: r,
              validator: n,
              refiner: i,
              coercer: o = (e) => e,
              entries: s = function* () {},
            } = e;
            ((this.type = t),
              (this.schema = r),
              (this.entries = s),
              (this.coercer = o),
              (this.validator = n
                ? (e, t) => {
                    const r = n(e, t);
                    return a(r, t, this, e);
                  }
                : () => []),
              (this.refiner = i
                ? (e, t) => {
                    const r = i(e, t);
                    return a(r, t, this, e);
                  }
                : () => []));
          }
          assert(e, t) {
            return u(e, this, t);
          }
          create(e, t) {
            return l(e, this, t);
          }
          is(e) {
            return p(e, this);
          }
          mask(e, t) {
            return d(e, this, t);
          }
          validate(e, t) {
            return (void 0 === t && (t = {}), h(e, this, t));
          }
        }
        function u(e, t, r) {
          const n = h(e, t, { message: r });
          if (n[0]) throw n[0];
        }
        function l(e, t, r) {
          const n = h(e, t, { coerce: !0, message: r });
          if (n[0]) throw n[0];
          return n[1];
        }
        function d(e, t, r) {
          const n = h(e, t, { coerce: !0, mask: !0, message: r });
          if (n[0]) throw n[0];
          return n[1];
        }
        function p(e, t) {
          const r = h(e, t);
          return !r[0];
        }
        function h(e, t, r) {
          void 0 === r && (r = {});
          const n = c(e, t, r),
            i = o(n);
          if (i[0]) {
            const e = new StructError(i[0], function* () {
              for (const e of n) e[0] && (yield e[0]);
            });
            return [e, void 0];
          }
          {
            const e = i[1];
            return [void 0, e];
          }
        }
        function g() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          const n = "type" === t[0].type,
            i = t.map((e) => e.schema),
            o = Object.assign({}, ...i);
          return n ? G(o) : N(o);
        }
        function f(e, t) {
          return new Struct({ type: e, schema: null, validator: t });
        }
        function y(e, t) {
          return new Struct({
            ...e,
            refiner: (t, r) => void 0 === t || e.refiner(t, r),
            validator(r, n) {
              return void 0 === r || (t(r, n), e.validator(r, n));
            },
          });
        }
        function b(e) {
          return new Struct({
            type: "dynamic",
            schema: null,
            *entries(t, r) {
              const n = e(t, r);
              yield* n.entries(t, r);
            },
            validator(t, r) {
              const n = e(t, r);
              return n.validator(t, r);
            },
            coercer(t, r) {
              const n = e(t, r);
              return n.coercer(t, r);
            },
            refiner(t, r) {
              const n = e(t, r);
              return n.refiner(t, r);
            },
          });
        }
        function m(e) {
          let t;
          return new Struct({
            type: "lazy",
            schema: null,
            *entries(r, n) {
              var i;
              ((null !== (i = t) && void 0 !== i) || (t = e()),
                yield* t.entries(r, n));
            },
            validator(r, n) {
              var i;
              return (
                (null !== (i = t) && void 0 !== i) || (t = e()),
                t.validator(r, n)
              );
            },
            coercer(r, n) {
              var i;
              return (
                (null !== (i = t) && void 0 !== i) || (t = e()),
                t.coercer(r, n)
              );
            },
            refiner(r, n) {
              var i;
              return (
                (null !== (i = t) && void 0 !== i) || (t = e()),
                t.refiner(r, n)
              );
            },
          });
        }
        function v(e, t) {
          const { schema: r } = e,
            n = { ...r };
          for (const i of t) delete n[i];
          switch (e.type) {
            case "type":
              return G(n);
            default:
              return N(n);
          }
        }
        function w(e) {
          const t = e instanceof Struct,
            r = t ? { ...e.schema } : { ...e };
          for (const n in r) r[n] = K(r[n]);
          return t && "type" === e.type ? G(r) : N(r);
        }
        function S(e, t) {
          const { schema: r } = e,
            n = {};
          for (const i of t) n[i] = r[i];
          switch (e.type) {
            case "type":
              return G(n);
            default:
              return N(n);
          }
        }
        function E(e, t) {
          return (
            console.warn(
              "superstruct@0.11 - The `struct` helper has been renamed to `define`.",
            ),
            f(e, t)
          );
        }
        function T() {
          return f("any", () => !0);
        }
        function j(e) {
          return new Struct({
            type: "array",
            schema: e,
            *entries(t) {
              if (e && Array.isArray(t))
                for (const [r, n] of t.entries()) yield [r, n, e];
            },
            coercer(e) {
              return Array.isArray(e) ? e.slice() : e;
            },
            validator(e) {
              return (
                Array.isArray(e) ||
                "Expected an array value, but received: " + i(e)
              );
            },
          });
        }
        function k() {
          return f("bigint", (e) => "bigint" === typeof e);
        }
        function C() {
          return f("boolean", (e) => "boolean" === typeof e);
        }
        function A() {
          return f(
            "date",
            (e) =>
              (e instanceof Date && !isNaN(e.getTime())) ||
              "Expected a valid `Date` object, but received: " + i(e),
          );
        }
        function O(e) {
          const t = {},
            r = e.map((e) => i(e)).join();
          for (const n of e) t[n] = n;
          return new Struct({
            type: "enums",
            schema: t,
            validator(t) {
              return (
                e.includes(t) ||
                `Expected one of \`${r}\`, but received: ${i(t)}`
              );
            },
          });
        }
        function I() {
          return f(
            "func",
            (e) =>
              "function" === typeof e ||
              "Expected a function, but received: " + i(e),
          );
        }
        function x(e) {
          return f(
            "instance",
            (t) =>
              t instanceof e ||
              `Expected a \`${e.name}\` instance, but received: ${i(t)}`,
          );
        }
        function B() {
          return f(
            "integer",
            (e) =>
              ("number" === typeof e && !isNaN(e) && Number.isInteger(e)) ||
              "Expected an integer, but received: " + i(e),
          );
        }
        function _(e) {
          return new Struct({
            type: "intersection",
            schema: null,
            *entries(t, r) {
              for (const n of e) yield* n.entries(t, r);
            },
            *validator(t, r) {
              for (const n of e) yield* n.validator(t, r);
            },
            *refiner(t, r) {
              for (const n of e) yield* n.refiner(t, r);
            },
          });
        }
        function R(e) {
          const t = i(e),
            r = typeof e;
          return new Struct({
            type: "literal",
            schema:
              "string" === r || "number" === r || "boolean" === r ? e : null,
            validator(r) {
              return (
                r === e ||
                `Expected the literal \`${t}\`, but received: ${i(r)}`
              );
            },
          });
        }
        function P(e, t) {
          return new Struct({
            type: "map",
            schema: null,
            *entries(r) {
              if (e && t && r instanceof Map)
                for (const [n, i] of r.entries())
                  (yield [n, n, e], yield [n, i, t]);
            },
            coercer(e) {
              return e instanceof Map ? new Map(e) : e;
            },
            validator(e) {
              return (
                e instanceof Map ||
                "Expected a `Map` object, but received: " + i(e)
              );
            },
          });
        }
        function M() {
          return f("never", () => !1);
        }
        function D(e) {
          return new Struct({
            ...e,
            validator: (t, r) => null === t || e.validator(t, r),
            refiner: (t, r) => null === t || e.refiner(t, r),
          });
        }
        function U() {
          return f(
            "number",
            (e) =>
              ("number" === typeof e && !isNaN(e)) ||
              "Expected a number, but received: " + i(e),
          );
        }
        function N(e) {
          const t = e ? Object.keys(e) : [],
            n = M();
          return new Struct({
            type: "object",
            schema: e || null,
            *entries(i) {
              if (e && r(i)) {
                const r = new Set(Object.keys(i));
                for (const n of t) (r.delete(n), yield [n, i[n], e[n]]);
                for (const e of r) yield [e, i[e], n];
              }
            },
            validator(e) {
              return r(e) || "Expected an object, but received: " + i(e);
            },
            coercer(e) {
              return r(e) ? { ...e } : e;
            },
          });
        }
        function K(e) {
          return new Struct({
            ...e,
            validator: (t, r) => void 0 === t || e.validator(t, r),
            refiner: (t, r) => void 0 === t || e.refiner(t, r),
          });
        }
        function V(e, t) {
          return new Struct({
            type: "record",
            schema: null,
            *entries(n) {
              if (r(n))
                for (const r in n) {
                  const i = n[r];
                  (yield [r, r, e], yield [r, i, t]);
                }
            },
            validator(e) {
              return r(e) || "Expected an object, but received: " + i(e);
            },
          });
        }
        function $() {
          return f("regexp", (e) => e instanceof RegExp);
        }
        function F(e) {
          return new Struct({
            type: "set",
            schema: null,
            *entries(t) {
              if (e && t instanceof Set) for (const r of t) yield [r, r, e];
            },
            coercer(e) {
              return e instanceof Set ? new Set(e) : e;
            },
            validator(e) {
              return (
                e instanceof Set ||
                "Expected a `Set` object, but received: " + i(e)
              );
            },
          });
        }
        function L() {
          return f(
            "string",
            (e) =>
              "string" === typeof e ||
              "Expected a string, but received: " + i(e),
          );
        }
        function z(e) {
          const t = M();
          return new Struct({
            type: "tuple",
            schema: null,
            *entries(r) {
              if (Array.isArray(r)) {
                const n = Math.max(e.length, r.length);
                for (let i = 0; i < n; i++) yield [i, r[i], e[i] || t];
              }
            },
            validator(e) {
              return (
                Array.isArray(e) || "Expected an array, but received: " + i(e)
              );
            },
          });
        }
        function G(e) {
          const t = Object.keys(e);
          return new Struct({
            type: "type",
            schema: e,
            *entries(n) {
              if (r(n)) for (const r of t) yield [r, n[r], e[r]];
            },
            validator(e) {
              return r(e) || "Expected an object, but received: " + i(e);
            },
            coercer(e) {
              return r(e) ? { ...e } : e;
            },
          });
        }
        function q(e) {
          const t = e.map((e) => e.type).join(" | ");
          return new Struct({
            type: "union",
            schema: null,
            coercer(t) {
              for (const r of e) {
                const [e, n] = r.validate(t, { coerce: !0 });
                if (!e) return n;
              }
              return t;
            },
            validator(r, n) {
              const o = [];
              for (const t of e) {
                const [...e] = c(r, t, n),
                  [i] = e;
                if (!i[0]) return [];
                for (const [t] of e) t && o.push(t);
              }
              return [
                `Expected the value to satisfy a union of \`${t}\`, but received: ${i(r)}`,
                ...o,
              ];
            },
          });
        }
        function W() {
          return f("unknown", () => !0);
        }
        function H(e, t, r) {
          return new Struct({
            ...e,
            coercer: (n, i) =>
              p(n, t) ? e.coercer(r(n, i), i) : e.coercer(n, i),
          });
        }
        function J(e, t, r) {
          return (
            void 0 === r && (r = {}),
            H(e, W(), (e) => {
              const i = "function" === typeof t ? t() : t;
              if (void 0 === e) return i;
              if (!r.strict && n(e) && n(i)) {
                const t = { ...e };
                let r = !1;
                for (const e in i) void 0 === t[e] && ((t[e] = i[e]), (r = !0));
                if (r) return t;
              }
              return e;
            })
          );
        }
        function Y(e) {
          return H(e, L(), (e) => e.trim());
        }
        function X(e) {
          return ie(e, "empty", (t) => {
            const r = Z(t);
            return (
              0 === r ||
              `Expected an empty ${e.type} but received one with a size of \`${r}\``
            );
          });
        }
        function Z(e) {
          return e instanceof Map || e instanceof Set ? e.size : e.length;
        }
        function Q(e, t, r) {
          void 0 === r && (r = {});
          const { exclusive: n } = r;
          return ie(e, "max", (r) =>
            n
              ? r < t
              : r <= t ||
                `Expected a ${e.type} less than ${n ? "" : "or equal to "}${t} but received \`${r}\``,
          );
        }
        function ee(e, t, r) {
          void 0 === r && (r = {});
          const { exclusive: n } = r;
          return ie(e, "min", (r) =>
            n
              ? r > t
              : r >= t ||
                `Expected a ${e.type} greater than ${n ? "" : "or equal to "}${t} but received \`${r}\``,
          );
        }
        function te(e) {
          return ie(e, "nonempty", (t) => {
            const r = Z(t);
            return (
              r > 0 || `Expected a nonempty ${e.type} but received an empty one`
            );
          });
        }
        function re(e, t) {
          return ie(
            e,
            "pattern",
            (r) =>
              t.test(r) ||
              `Expected a ${e.type} matching \`/${t.source}/\` but received "${r}"`,
          );
        }
        function ne(e, t, r) {
          void 0 === r && (r = t);
          const n = "Expected a " + e.type,
            i = t === r ? `of \`${t}\`` : `between \`${t}\` and \`${r}\``;
          return ie(e, "size", (e) => {
            if ("number" === typeof e || e instanceof Date)
              return (t <= e && e <= r) || `${n} ${i} but received \`${e}\``;
            if (e instanceof Map || e instanceof Set) {
              const { size: o } = e;
              return (
                (t <= o && o <= r) ||
                `${n} with a size ${i} but received one with a size of \`${o}\``
              );
            }
            {
              const { length: o } = e;
              return (
                (t <= o && o <= r) ||
                `${n} with a length ${i} but received one with a length of \`${o}\``
              );
            }
          });
        }
        function ie(e, t, r) {
          return new Struct({
            ...e,
            *refiner(n, i) {
              yield* e.refiner(n, i);
              const o = r(n, i),
                s = a(o, i, e, n);
              for (const e of s) yield { ...e, refinement: t };
            },
          });
        }
        ((e.Struct = Struct),
          (e.StructError = StructError),
          (e.any = T),
          (e.array = j),
          (e.assert = u),
          (e.assign = g),
          (e.bigint = k),
          (e.boolean = C),
          (e.coerce = H),
          (e.create = l),
          (e.date = A),
          (e.defaulted = J),
          (e.define = f),
          (e.deprecated = y),
          (e.dynamic = b),
          (e.empty = X),
          (e.enums = O),
          (e.func = I),
          (e.instance = x),
          (e.integer = B),
          (e.intersection = _),
          (e.is = p),
          (e.lazy = m),
          (e.literal = R),
          (e.map = P),
          (e.mask = d),
          (e.max = Q),
          (e.min = ee),
          (e.never = M),
          (e.nonempty = te),
          (e.nullable = D),
          (e.number = U),
          (e.object = N),
          (e.omit = v),
          (e.optional = K),
          (e.partial = w),
          (e.pattern = re),
          (e.pick = S),
          (e.record = V),
          (e.refine = ie),
          (e.regexp = $),
          (e.set = F),
          (e.size = ne),
          (e.string = L),
          (e.struct = E),
          (e.trimmed = Y),
          (e.tuple = z),
          (e.type = G),
          (e.union = q),
          (e.unknown = W),
          (e.validate = h));
      });
    },
    8393: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateMnemonic = d),
        (t.mnemonicToEntropy = g),
        (t.entropyToMnemonic = f),
        (t.validateMnemonic = y),
        (t.mnemonicToSeed = m),
        (t.mnemonicToSeedSync = v));
      const n = r(2966),
        i = r(389),
        o = r(130),
        s = r(6257),
        a = (e) => "あいこくしん" === e[0];
      function c(e) {
        if ("string" !== typeof e)
          throw new TypeError("invalid mnemonic type: " + typeof e);
        return e.normalize("NFKD");
      }
      function u(e) {
        const t = c(e),
          r = t.split(" ");
        if (![12, 15, 18, 21, 24].includes(r.length))
          throw new Error("Invalid mnemonic");
        return { nfkd: t, words: r };
      }
      function l(e) {
        (0, o.abytes)(e, 16, 20, 24, 28, 32);
      }
      function d(e, t) {
        if (
          (void 0 === t && (t = 128),
          (0, o.anumber)(t),
          t % 32 !== 0 || t > 256)
        )
          throw new TypeError("Invalid entropy");
        return f((0, o.randomBytes)(t / 8), e);
      }
      const p = (e) => {
        const t = 8 - e.length / 4;
        return new Uint8Array([((0, i.sha256)(e)[0] >> t) << t]);
      };
      function h(e) {
        if (!Array.isArray(e) || 2048 !== e.length || "string" !== typeof e[0])
          throw new Error("Wordlist: expected array of 2048 strings");
        return (
          e.forEach((e) => {
            if ("string" !== typeof e)
              throw new Error("wordlist: non-string element: " + e);
          }),
          s.utils.chain(
            s.utils.checksum(1, p),
            s.utils.radix2(11, !0),
            s.utils.alphabet(e),
          )
        );
      }
      function g(e, t) {
        const { words: r } = u(e),
          n = h(t).decode(r);
        return (l(n), n);
      }
      function f(e, t) {
        l(e);
        const r = h(t).encode(e);
        return r.join(a(t) ? "　" : " ");
      }
      function y(e, t) {
        try {
          g(e, t);
        } catch (r) {
          return !1;
        }
        return !0;
      }
      const b = (e) => c("mnemonic" + e);
      function m(e, t) {
        return (
          void 0 === t && (t = ""),
          (0, n.pbkdf2Async)(i.sha512, u(e).nfkd, b(t), { c: 2048, dkLen: 64 })
        );
      }
      function v(e, t) {
        return (
          void 0 === t && (t = ""),
          (0, n.pbkdf2)(i.sha512, u(e).nfkd, b(t), { c: 2048, dkLen: 64 })
        );
      }
    },
    8394: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HDKey = t.HARDENED_OFFSET = void 0));
      const n = r(3185),
        i = r(3559),
        o = r(379),
        s = r(3695),
        a = r(389),
        c = r(130),
        u = r(6257),
        Point = i.secp256k1.ProjectivePoint,
        l = (0, u.createBase58check)(a.sha256);
      function d(e) {
        (0, c.abytes)(e);
        const t = 0 === e.length ? "0" : (0, c.bytesToHex)(e);
        return BigInt("0x" + t);
      }
      function p(e) {
        if ("bigint" !== typeof e) throw new Error("bigint expected");
        return (0, c.hexToBytes)(e.toString(16).padStart(64, "0"));
      }
      const h = (0, c.utf8ToBytes)("Bitcoin seed"),
        g = { private: 76066276, public: 76067358 };
      t.HARDENED_OFFSET = 2147483648;
      const f = (e) => (0, s.ripemd160)((0, a.sha256)(e)),
        y = (e) => (0, c.createView)(e).getUint32(0, !1),
        b = (e) => {
          if (!Number.isSafeInteger(e) || e < 0 || e > 2 ** 32 - 1)
            throw new Error(
              "invalid number, should be from 0 to 2**32-1, got " + e,
            );
          const t = new Uint8Array(4);
          return ((0, c.createView)(t).setUint32(0, e, !1), t);
        };
      class HDKey {
        get fingerprint() {
          if (!this.pubHash) throw new Error("No publicKey set!");
          return y(this.pubHash);
        }
        get identifier() {
          return this.pubHash;
        }
        get pubKeyHash() {
          return this.pubHash;
        }
        get privateKey() {
          return this.privKeyBytes || null;
        }
        get publicKey() {
          return this.pubKey || null;
        }
        get privateExtendedKey() {
          const e = this.privateKey;
          if (!e) throw new Error("No private key");
          return l.encode(
            this.serialize(
              this.versions.private,
              (0, c.concatBytes)(new Uint8Array([0]), e),
            ),
          );
        }
        get publicExtendedKey() {
          if (!this.pubKey) throw new Error("No public key");
          return l.encode(this.serialize(this.versions.public, this.pubKey));
        }
        static fromMasterSeed(e, t) {
          if (
            (void 0 === t && (t = g),
            (0, c.abytes)(e),
            8 * e.length < 128 || 8 * e.length > 512)
          )
            throw new Error(
              "HDKey: seed length must be between 128 and 512 bits; 256 bits is advised, got " +
                e.length,
            );
          const r = (0, o.hmac)(a.sha512, h, e);
          return new HDKey({
            versions: t,
            chainCode: r.slice(32),
            privateKey: r.slice(0, 32),
          });
        }
        static fromExtendedKey(e, t) {
          void 0 === t && (t = g);
          const r = l.decode(e),
            n = (0, c.createView)(r),
            i = n.getUint32(0, !1),
            o = {
              versions: t,
              depth: r[4],
              parentFingerprint: n.getUint32(5, !1),
              index: n.getUint32(9, !1),
              chainCode: r.slice(13, 45),
            },
            s = r.slice(45),
            a = 0 === s[0];
          if (i !== t[a ? "private" : "public"])
            throw new Error("Version mismatch");
          return new HDKey(
            a ? { ...o, privateKey: s.slice(1) } : { ...o, publicKey: s },
          );
        }
        static fromJSON(e) {
          return HDKey.fromExtendedKey(e.xpriv);
        }
        constructor(e) {
          if (
            ((this.depth = 0),
            (this.index = 0),
            (this.chainCode = null),
            (this.parentFingerprint = 0),
            !e || "object" !== typeof e)
          )
            throw new Error("HDKey.constructor must not be called directly");
          if (
            ((this.versions = e.versions || g),
            (this.depth = e.depth || 0),
            (this.chainCode = e.chainCode || null),
            (this.index = e.index || 0),
            (this.parentFingerprint = e.parentFingerprint || 0),
            !this.depth && (this.parentFingerprint || this.index))
          )
            throw new Error(
              "HDKey: zero depth with non-zero index/parent fingerprint",
            );
          if (e.publicKey && e.privateKey)
            throw new Error("HDKey: publicKey and privateKey at same time.");
          if (e.privateKey) {
            if (!i.secp256k1.utils.isValidPrivateKey(e.privateKey))
              throw new Error("Invalid private key");
            ((this.privKey =
              "bigint" === typeof e.privateKey
                ? e.privateKey
                : d(e.privateKey)),
              (this.privKeyBytes = p(this.privKey)),
              (this.pubKey = i.secp256k1.getPublicKey(e.privateKey, !0)));
          } else {
            if (!e.publicKey)
              throw new Error("HDKey: no public or private key provided");
            this.pubKey = Point.fromHex(e.publicKey).toRawBytes(!0);
          }
          this.pubHash = f(this.pubKey);
        }
        derive(e) {
          if (!/^[mM]'?/.test(e))
            throw new Error('Path must start with "m" or "M"');
          if (/^[mM]'?$/.test(e)) return this;
          const r = e.replace(/^[mM]'?\//, "").split("/");
          let n = this;
          for (const i of r) {
            const e = /^(\d+)('?)$/.exec(i),
              r = e && e[1];
            if (!e || 3 !== e.length || "string" !== typeof r)
              throw new Error("invalid child index: " + i);
            let o = +r;
            if (!Number.isSafeInteger(o) || o >= t.HARDENED_OFFSET)
              throw new Error("Invalid index");
            ("'" === e[2] && (o += t.HARDENED_OFFSET), (n = n.deriveChild(o)));
          }
          return n;
        }
        deriveChild(e) {
          if (!this.pubKey || !this.chainCode)
            throw new Error("No publicKey or chainCode set");
          let r = b(e);
          if (e >= t.HARDENED_OFFSET) {
            const e = this.privateKey;
            if (!e) throw new Error("Could not derive hardened child key");
            r = (0, c.concatBytes)(new Uint8Array([0]), e, r);
          } else r = (0, c.concatBytes)(this.pubKey, r);
          const s = (0, o.hmac)(a.sha512, this.chainCode, r),
            u = d(s.slice(0, 32)),
            l = s.slice(32);
          if (!i.secp256k1.utils.isValidPrivateKey(u))
            throw new Error("Tweak bigger than curve order");
          const p = {
            versions: this.versions,
            chainCode: l,
            depth: this.depth + 1,
            parentFingerprint: this.fingerprint,
            index: e,
          };
          try {
            if (this.privateKey) {
              const e = (0, n.mod)(this.privKey + u, i.secp256k1.CURVE.n);
              if (!i.secp256k1.utils.isValidPrivateKey(e))
                throw new Error(
                  "The tweak was out of range or the resulted private key is invalid",
                );
              p.privateKey = e;
            } else {
              const e = Point.fromHex(this.pubKey).add(Point.fromPrivateKey(u));
              if (e.equals(Point.ZERO))
                throw new Error(
                  "The tweak was equal to negative P, which made the result key invalid",
                );
              p.publicKey = e.toRawBytes(!0);
            }
            return new HDKey(p);
          } catch (h) {
            return this.deriveChild(e + 1);
          }
        }
        sign(e) {
          if (!this.privateKey) throw new Error("No privateKey set!");
          return (
            (0, c.abytes)(e, 32),
            i.secp256k1.sign(e, this.privKey).toCompactRawBytes()
          );
        }
        verify(e, t) {
          if (((0, c.abytes)(e, 32), (0, c.abytes)(t, 64), !this.publicKey))
            throw new Error("No publicKey set!");
          let r;
          try {
            r = i.secp256k1.Signature.fromCompact(t);
          } catch (n) {
            return !1;
          }
          return i.secp256k1.verify(r, e, this.publicKey);
        }
        wipePrivateData() {
          return (
            (this.privKey = void 0),
            this.privKeyBytes &&
              (this.privKeyBytes.fill(0), (this.privKeyBytes = void 0)),
            this
          );
        }
        toJSON() {
          return {
            xpriv: this.privateExtendedKey,
            xpub: this.publicExtendedKey,
          };
        }
        serialize(e, t) {
          if (!this.chainCode) throw new Error("No chainCode set");
          return (
            (0, c.abytes)(t, 33),
            (0, c.concatBytes)(
              b(e),
              new Uint8Array([this.depth]),
              b(this.parentFingerprint),
              b(this.index),
              this.chainCode,
              t,
            )
          );
        }
      }
      t.HDKey = HDKey;
    },
  },
]);
