(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [415],
  {
    2854: function (r, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ErrGasLimitShouldBe0ForInnerTransaction =
          e.ErrInvalidRelayedV2BuilderArguments =
          e.ErrInvalidRelayedV1BuilderArguments =
          e.ErrNotImplemented =
          e.ErrContractInteraction =
          e.ErrCodec =
          e.ErrCannotParseContractResults =
          e.ErrMissingFieldOnEnum =
          e.ErrMissingFieldOnStruct =
          e.ErrTypeInferenceSystemRequiresRegularJavascriptObjects =
          e.ErrTypingSystem =
          e.ErrMock =
          e.ErrContractHasNoAddress =
          e.ErrContract =
          e.ErrExpectedTransactionEventsNotFound =
          e.ErrExpectedTransactionStatusNotReached =
          e.ErrTransactionWatcherTimeout =
          e.ErrAsyncTimerAborted =
          e.ErrAsyncTimerAlreadyRunning =
          e.ErrInvalidFunctionName =
          e.ErrSignatureCannotCreate =
          e.ErrTransactionOptionsInvalid =
          e.ErrTransactionVersionInvalid =
          e.ErrNonceInvalid =
          e.ErrNotEnoughGas =
          e.ErrAddressEmpty =
          e.ErrAddressBadHrp =
          e.ErrAddressCannotCreate =
          e.ErrUnexpectedCondition =
          e.ErrInvariantFailed =
          e.ErrBadType =
          e.ErrUnsupportedOperation =
          e.ErrInvalidArgument =
          e.Err =
            void 0));
      class Err extends Error {
        constructor(r, e) {
          (super(r), (this.inner = void 0), (this.inner = e));
        }
        summary() {
          let r = [];
          r.push({ name: this.name, message: this.message });
          let e = this.inner;
          while (e)
            (r.push({ name: e.name, message: e.message }), (e = e.inner));
          return r;
        }
      }
      e.Err = Err;
      class ErrInvalidArgument extends Err {
        constructor(r, e) {
          super("Invalid argument: " + r, e);
        }
      }
      e.ErrInvalidArgument = ErrInvalidArgument;
      class ErrUnsupportedOperation extends Err {
        constructor(r, e) {
          (void 0 === e && (e = "not specified"),
            super(`Operation "${r}" not supported. Reason: ${e}`));
        }
      }
      e.ErrUnsupportedOperation = ErrUnsupportedOperation;
      class ErrBadType extends Err {
        constructor(r, e, t) {
          super(`Bad type of "${r}": ${t}. Expected type: ${e}`);
        }
      }
      e.ErrBadType = ErrBadType;
      class ErrInvariantFailed extends Err {
        constructor(r) {
          super(`Invariant failed: [${r}]`);
        }
      }
      e.ErrInvariantFailed = ErrInvariantFailed;
      class ErrUnexpectedCondition extends Err {
        constructor(r) {
          super(`Unexpected condition: [${r}]`);
        }
      }
      e.ErrUnexpectedCondition = ErrUnexpectedCondition;
      class ErrAddressCannotCreate extends Err {
        constructor(r, e) {
          let t = "Cannot create address from: " + r;
          super(t, e);
        }
      }
      e.ErrAddressCannotCreate = ErrAddressCannotCreate;
      class ErrAddressBadHrp extends Err {
        constructor(r, e) {
          super(`Wrong address HRP. Expected: ${r}, got ${e}`);
        }
      }
      e.ErrAddressBadHrp = ErrAddressBadHrp;
      class ErrAddressEmpty extends Err {
        constructor() {
          super("Address is empty");
        }
      }
      e.ErrAddressEmpty = ErrAddressEmpty;
      class ErrNotEnoughGas extends Err {
        constructor(r) {
          super("Not enough gas provided: " + r);
        }
      }
      e.ErrNotEnoughGas = ErrNotEnoughGas;
      class ErrNonceInvalid extends Err {
        constructor(r) {
          super("Invalid nonce: " + r);
        }
      }
      e.ErrNonceInvalid = ErrNonceInvalid;
      class ErrTransactionVersionInvalid extends Err {
        constructor(r) {
          super("Invalid transaction version: " + r);
        }
      }
      e.ErrTransactionVersionInvalid = ErrTransactionVersionInvalid;
      class ErrTransactionOptionsInvalid extends Err {
        constructor(r) {
          super("Invalid transaction options: " + r);
        }
      }
      e.ErrTransactionOptionsInvalid = ErrTransactionOptionsInvalid;
      class ErrSignatureCannotCreate extends Err {
        constructor(r, e) {
          let t = "Cannot create signature from: " + r;
          super(t, e);
        }
      }
      e.ErrSignatureCannotCreate = ErrSignatureCannotCreate;
      class ErrInvalidFunctionName extends Err {
        constructor() {
          super("Invalid function name");
        }
      }
      e.ErrInvalidFunctionName = ErrInvalidFunctionName;
      class ErrAsyncTimerAlreadyRunning extends Err {
        constructor() {
          super("Async timer already running");
        }
      }
      e.ErrAsyncTimerAlreadyRunning = ErrAsyncTimerAlreadyRunning;
      class ErrAsyncTimerAborted extends Err {
        constructor() {
          super("Async timer aborted");
        }
      }
      e.ErrAsyncTimerAborted = ErrAsyncTimerAborted;
      class ErrTransactionWatcherTimeout extends Err {
        constructor() {
          super("TransactionWatcher has timed out");
        }
      }
      e.ErrTransactionWatcherTimeout = ErrTransactionWatcherTimeout;
      class ErrExpectedTransactionStatusNotReached extends Err {
        constructor() {
          super("Expected transaction status not reached");
        }
      }
      e.ErrExpectedTransactionStatusNotReached =
        ErrExpectedTransactionStatusNotReached;
      class ErrExpectedTransactionEventsNotFound extends Err {
        constructor() {
          super("Expected transaction events not found");
        }
      }
      e.ErrExpectedTransactionEventsNotFound =
        ErrExpectedTransactionEventsNotFound;
      class ErrContract extends Err {
        constructor(r) {
          super(r);
        }
      }
      e.ErrContract = ErrContract;
      class ErrContractHasNoAddress extends ErrContract {
        constructor() {
          super(
            "\nThe smart contract has no address set. Make sure you provide the address in the constructor, or call setAddress() appropriately.\nIf you need to recompute the address of the contract, make use of SmartContract.computeAddress() (static method). \n",
          );
        }
      }
      e.ErrContractHasNoAddress = ErrContractHasNoAddress;
      class ErrMock extends Err {
        constructor(r) {
          super(r);
        }
      }
      e.ErrMock = ErrMock;
      class ErrTypingSystem extends Err {
        constructor(r) {
          super(r);
        }
      }
      e.ErrTypingSystem = ErrTypingSystem;
      class ErrTypeInferenceSystemRequiresRegularJavascriptObjects extends ErrTypingSystem {
        constructor(r) {
          super(
            `\nargument at position ${r} seems to be a TypedValue. The automatic type inference system requires regular javascript objects as input.\nThis error might occur when you pass a TypedValue to contract.methods.myFunction([...]). For passing TypedValues instead of regular javascript objects, and bypass the automatic type inference system, use contract.methodsExplicit.myFunction([...]) instead.\nAlso see https://github.com/ElrondNetwork/elrond-sdk-erdjs/pull/187.\n`,
          );
        }
      }
      e.ErrTypeInferenceSystemRequiresRegularJavascriptObjects =
        ErrTypeInferenceSystemRequiresRegularJavascriptObjects;
      class ErrMissingFieldOnStruct extends Err {
        constructor(r, e) {
          super(`field ${r} does not exist on struct ${e}`);
        }
      }
      e.ErrMissingFieldOnStruct = ErrMissingFieldOnStruct;
      class ErrMissingFieldOnEnum extends Err {
        constructor(r, e) {
          super(`field ${r} does not exist on enum ${e}`);
        }
      }
      e.ErrMissingFieldOnEnum = ErrMissingFieldOnEnum;
      class ErrCannotParseContractResults extends Err {
        constructor(r) {
          super("cannot parse contract results: " + r);
        }
      }
      e.ErrCannotParseContractResults = ErrCannotParseContractResults;
      class ErrCodec extends Err {
        constructor(r) {
          super(r);
        }
      }
      e.ErrCodec = ErrCodec;
      class ErrContractInteraction extends Err {
        constructor(r) {
          super(r);
        }
      }
      e.ErrContractInteraction = ErrContractInteraction;
      class ErrNotImplemented extends Err {
        constructor() {
          super("Method not yet implemented");
        }
      }
      e.ErrNotImplemented = ErrNotImplemented;
      class ErrInvalidRelayedV1BuilderArguments extends Err {
        constructor() {
          super("invalid arguments for relayed v1 builder");
        }
      }
      e.ErrInvalidRelayedV1BuilderArguments =
        ErrInvalidRelayedV1BuilderArguments;
      class ErrInvalidRelayedV2BuilderArguments extends Err {
        constructor() {
          super("invalid arguments for relayed v2 builder");
        }
      }
      e.ErrInvalidRelayedV2BuilderArguments =
        ErrInvalidRelayedV2BuilderArguments;
      class ErrGasLimitShouldBe0ForInnerTransaction extends Err {
        constructor() {
          super("gas limit must be 0 for the inner transaction for relayed v2");
        }
      }
      e.ErrGasLimitShouldBe0ForInnerTransaction =
        ErrGasLimitShouldBe0ForInnerTransaction;
    },
    4742: function (r, e, t) {
      "use strict";
      (function (r) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (r, e, t, n) {
                  (void 0 === n && (n = t),
                    Object.defineProperty(r, n, {
                      enumerable: !0,
                      get: function () {
                        return e[t];
                      },
                    }));
                }
              : function (r, e, t, n) {
                  (void 0 === n && (n = t), (r[n] = e[t]));
                }),
          s =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (r, e) {
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: e,
                  });
                }
              : function (r, e) {
                  r["default"] = e;
                }),
          a =
            (this && this.__importStar) ||
            function (r) {
              if (r && r.__esModule) return r;
              var e = {};
              if (null != r)
                for (var t in r)
                  "default" !== t &&
                    Object.prototype.hasOwnProperty.call(r, t) &&
                    n(e, r, t);
              return (s(e, r), e);
            };
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.Signature = void 0));
        const o = a(t(2854)),
          i = 64;
        class Signature {
          constructor(e) {
            if (((this.valueHex = ""), e))
              return "string" === typeof e
                ? Signature.fromHex(e)
                : e instanceof r
                  ? Signature.fromBuffer(e)
                  : void 0;
          }
          static empty() {
            return new Signature();
          }
          static fromHex(r) {
            if (
              (r.startsWith("0x") && (r = r.slice(2)), !Signature.isValidHex(r))
            )
              throw new o.ErrSignatureCannotCreate(r);
            return Signature.fromValidHex(r);
          }
          static isValidHex(e) {
            return r.from(e, "hex").length == i;
          }
          static fromValidHex(r) {
            let e = new Signature();
            return ((e.valueHex = r), e);
          }
          static fromBuffer(r) {
            if (r.length != i) throw new o.ErrSignatureCannotCreate(r);
            return Signature.fromValidHex(r.toString("hex"));
          }
          hex() {
            return this.valueHex;
          }
        }
        e.Signature = Signature;
      }).call(this, t(2).Buffer);
    },
  },
]);
