(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [141, 415],
  {
    2854: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ErrGasLimitShouldBe0ForInnerTransaction =
          t.ErrInvalidRelayedV2BuilderArguments =
          t.ErrInvalidRelayedV1BuilderArguments =
          t.ErrNotImplemented =
          t.ErrContractInteraction =
          t.ErrCodec =
          t.ErrCannotParseContractResults =
          t.ErrMissingFieldOnEnum =
          t.ErrMissingFieldOnStruct =
          t.ErrTypeInferenceSystemRequiresRegularJavascriptObjects =
          t.ErrTypingSystem =
          t.ErrMock =
          t.ErrContractHasNoAddress =
          t.ErrContract =
          t.ErrExpectedTransactionEventsNotFound =
          t.ErrExpectedTransactionStatusNotReached =
          t.ErrTransactionWatcherTimeout =
          t.ErrAsyncTimerAborted =
          t.ErrAsyncTimerAlreadyRunning =
          t.ErrInvalidFunctionName =
          t.ErrSignatureCannotCreate =
          t.ErrTransactionOptionsInvalid =
          t.ErrTransactionVersionInvalid =
          t.ErrNonceInvalid =
          t.ErrNotEnoughGas =
          t.ErrAddressEmpty =
          t.ErrAddressBadHrp =
          t.ErrAddressCannotCreate =
          t.ErrUnexpectedCondition =
          t.ErrInvariantFailed =
          t.ErrBadType =
          t.ErrUnsupportedOperation =
          t.ErrInvalidArgument =
          t.Err =
            void 0));
      class Err extends Error {
        constructor(e, t) {
          (super(e), (this.inner = void 0), (this.inner = t));
        }
        summary() {
          let e = [];
          e.push({ name: this.name, message: this.message });
          let t = this.inner;
          while (t)
            (e.push({ name: t.name, message: t.message }), (t = t.inner));
          return e;
        }
      }
      t.Err = Err;
      class ErrInvalidArgument extends Err {
        constructor(e, t) {
          super("Invalid argument: " + e, t);
        }
      }
      t.ErrInvalidArgument = ErrInvalidArgument;
      class ErrUnsupportedOperation extends Err {
        constructor(e, t) {
          (void 0 === t && (t = "not specified"),
            super(`Operation "${e}" not supported. Reason: ${t}`));
        }
      }
      t.ErrUnsupportedOperation = ErrUnsupportedOperation;
      class ErrBadType extends Err {
        constructor(e, t, r) {
          super(`Bad type of "${e}": ${r}. Expected type: ${t}`);
        }
      }
      t.ErrBadType = ErrBadType;
      class ErrInvariantFailed extends Err {
        constructor(e) {
          super(`Invariant failed: [${e}]`);
        }
      }
      t.ErrInvariantFailed = ErrInvariantFailed;
      class ErrUnexpectedCondition extends Err {
        constructor(e) {
          super(`Unexpected condition: [${e}]`);
        }
      }
      t.ErrUnexpectedCondition = ErrUnexpectedCondition;
      class ErrAddressCannotCreate extends Err {
        constructor(e, t) {
          let r = "Cannot create address from: " + e;
          super(r, t);
        }
      }
      t.ErrAddressCannotCreate = ErrAddressCannotCreate;
      class ErrAddressBadHrp extends Err {
        constructor(e, t) {
          super(`Wrong address HRP. Expected: ${e}, got ${t}`);
        }
      }
      t.ErrAddressBadHrp = ErrAddressBadHrp;
      class ErrAddressEmpty extends Err {
        constructor() {
          super("Address is empty");
        }
      }
      t.ErrAddressEmpty = ErrAddressEmpty;
      class ErrNotEnoughGas extends Err {
        constructor(e) {
          super("Not enough gas provided: " + e);
        }
      }
      t.ErrNotEnoughGas = ErrNotEnoughGas;
      class ErrNonceInvalid extends Err {
        constructor(e) {
          super("Invalid nonce: " + e);
        }
      }
      t.ErrNonceInvalid = ErrNonceInvalid;
      class ErrTransactionVersionInvalid extends Err {
        constructor(e) {
          super("Invalid transaction version: " + e);
        }
      }
      t.ErrTransactionVersionInvalid = ErrTransactionVersionInvalid;
      class ErrTransactionOptionsInvalid extends Err {
        constructor(e) {
          super("Invalid transaction options: " + e);
        }
      }
      t.ErrTransactionOptionsInvalid = ErrTransactionOptionsInvalid;
      class ErrSignatureCannotCreate extends Err {
        constructor(e, t) {
          let r = "Cannot create signature from: " + e;
          super(r, t);
        }
      }
      t.ErrSignatureCannotCreate = ErrSignatureCannotCreate;
      class ErrInvalidFunctionName extends Err {
        constructor() {
          super("Invalid function name");
        }
      }
      t.ErrInvalidFunctionName = ErrInvalidFunctionName;
      class ErrAsyncTimerAlreadyRunning extends Err {
        constructor() {
          super("Async timer already running");
        }
      }
      t.ErrAsyncTimerAlreadyRunning = ErrAsyncTimerAlreadyRunning;
      class ErrAsyncTimerAborted extends Err {
        constructor() {
          super("Async timer aborted");
        }
      }
      t.ErrAsyncTimerAborted = ErrAsyncTimerAborted;
      class ErrTransactionWatcherTimeout extends Err {
        constructor() {
          super("TransactionWatcher has timed out");
        }
      }
      t.ErrTransactionWatcherTimeout = ErrTransactionWatcherTimeout;
      class ErrExpectedTransactionStatusNotReached extends Err {
        constructor() {
          super("Expected transaction status not reached");
        }
      }
      t.ErrExpectedTransactionStatusNotReached =
        ErrExpectedTransactionStatusNotReached;
      class ErrExpectedTransactionEventsNotFound extends Err {
        constructor() {
          super("Expected transaction events not found");
        }
      }
      t.ErrExpectedTransactionEventsNotFound =
        ErrExpectedTransactionEventsNotFound;
      class ErrContract extends Err {
        constructor(e) {
          super(e);
        }
      }
      t.ErrContract = ErrContract;
      class ErrContractHasNoAddress extends ErrContract {
        constructor() {
          super(
            "\nThe smart contract has no address set. Make sure you provide the address in the constructor, or call setAddress() appropriately.\nIf you need to recompute the address of the contract, make use of SmartContract.computeAddress() (static method). \n",
          );
        }
      }
      t.ErrContractHasNoAddress = ErrContractHasNoAddress;
      class ErrMock extends Err {
        constructor(e) {
          super(e);
        }
      }
      t.ErrMock = ErrMock;
      class ErrTypingSystem extends Err {
        constructor(e) {
          super(e);
        }
      }
      t.ErrTypingSystem = ErrTypingSystem;
      class ErrTypeInferenceSystemRequiresRegularJavascriptObjects extends ErrTypingSystem {
        constructor(e) {
          super(
            `\nargument at position ${e} seems to be a TypedValue. The automatic type inference system requires regular javascript objects as input.\nThis error might occur when you pass a TypedValue to contract.methods.myFunction([...]). For passing TypedValues instead of regular javascript objects, and bypass the automatic type inference system, use contract.methodsExplicit.myFunction([...]) instead.\nAlso see https://github.com/ElrondNetwork/elrond-sdk-erdjs/pull/187.\n`,
          );
        }
      }
      t.ErrTypeInferenceSystemRequiresRegularJavascriptObjects =
        ErrTypeInferenceSystemRequiresRegularJavascriptObjects;
      class ErrMissingFieldOnStruct extends Err {
        constructor(e, t) {
          super(`field ${e} does not exist on struct ${t}`);
        }
      }
      t.ErrMissingFieldOnStruct = ErrMissingFieldOnStruct;
      class ErrMissingFieldOnEnum extends Err {
        constructor(e, t) {
          super(`field ${e} does not exist on enum ${t}`);
        }
      }
      t.ErrMissingFieldOnEnum = ErrMissingFieldOnEnum;
      class ErrCannotParseContractResults extends Err {
        constructor(e) {
          super("cannot parse contract results: " + e);
        }
      }
      t.ErrCannotParseContractResults = ErrCannotParseContractResults;
      class ErrCodec extends Err {
        constructor(e) {
          super(e);
        }
      }
      t.ErrCodec = ErrCodec;
      class ErrContractInteraction extends Err {
        constructor(e) {
          super(e);
        }
      }
      t.ErrContractInteraction = ErrContractInteraction;
      class ErrNotImplemented extends Err {
        constructor() {
          super("Method not yet implemented");
        }
      }
      t.ErrNotImplemented = ErrNotImplemented;
      class ErrInvalidRelayedV1BuilderArguments extends Err {
        constructor() {
          super("invalid arguments for relayed v1 builder");
        }
      }
      t.ErrInvalidRelayedV1BuilderArguments =
        ErrInvalidRelayedV1BuilderArguments;
      class ErrInvalidRelayedV2BuilderArguments extends Err {
        constructor() {
          super("invalid arguments for relayed v2 builder");
        }
      }
      t.ErrInvalidRelayedV2BuilderArguments =
        ErrInvalidRelayedV2BuilderArguments;
      class ErrGasLimitShouldBe0ForInnerTransaction extends Err {
        constructor() {
          super("gas limit must be 0 for the inner transaction for relayed v2");
        }
      }
      t.ErrGasLimitShouldBe0ForInnerTransaction =
        ErrGasLimitShouldBe0ForInnerTransaction;
    },
    3002: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(8952), t),
        i(r(4744), t),
        i(r(5420), t),
        i(r(5416), t),
        i(r(3925), t),
        i(r(5417), t),
        i(r(6373), t),
        i(r(5415), t),
        i(r(4743), t),
        i(r(8957), t),
        i(r(4515), t),
        i(r(4745), t),
        i(r(5421), t),
        i(r(4746), t),
        i(r(8958), t),
        i(r(5424), t),
        i(r(5418), t),
        i(r(5422), t),
        i(r(3924), t),
        i(r(5423), t),
        i(r(4516), t),
        i(r(5414), t),
        i(r(6374), t),
        i(r(3003), t),
        i(r(5419), t));
    },
    3003: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NullType =
          t.TypePlaceholder =
          t.isTyped =
          t.PrimitiveValue =
          t.TypedValue =
          t.CustomType =
          t.PrimitiveType =
          t.TypeCardinality =
          t.Type =
            void 0));
      const n = r(8953),
        i = r(3160);
      class Type {
        constructor(e, t, r) {
          (void 0 === t && (t = []),
            void 0 === r && (r = TypeCardinality.fixed(1)),
            i.guardValueIsSet("name", e),
            (this.name = e),
            (this.typeParameters = t),
            (this.cardinality = r));
        }
        getName() {
          return this.name;
        }
        getClassName() {
          return Type.ClassName;
        }
        getClassHierarchy() {
          let e = n.getJavascriptPrototypesInHierarchy(
              this,
              (e) => e.belongsToTypesystem,
            ),
            t = e.map((e) => e.getClassName()).reverse();
          return t;
        }
        getFullyQualifiedName() {
          let e = this.getTypeParameters()
            .map((e) => e.getFullyQualifiedName())
            .join(", ");
          return this.isGenericType()
            ? `erdjs:types:${this.getName()}<${e}>`
            : "erdjs:types:" + this.getName();
        }
        hasExactClass(e) {
          return this.getClassName() == e;
        }
        hasClassOrSuperclass(e) {
          let t = this.getClassHierarchy();
          return t.includes(e);
        }
        getTypeParameters() {
          return this.typeParameters;
        }
        isGenericType() {
          return this.typeParameters.length > 0;
        }
        getFirstTypeParameter() {
          return (
            i.guardTrue(
              this.typeParameters.length > 0,
              "type parameters length > 0",
            ),
            this.typeParameters[0]
          );
        }
        toString() {
          let e = this.getTypeParameters()
              .map((e) => e.toString())
              .join(", "),
            t = e ? `<${e}>` : "";
          return `${this.name}${t}`;
        }
        equals(e) {
          return Type.equals(this, e);
        }
        static equals(e, t) {
          return e.getFullyQualifiedName() == t.getFullyQualifiedName();
        }
        static equalsMany(e, t) {
          return e.every((e, r) => e.equals(t[r]));
        }
        static isAssignableFromMany(e, t) {
          return e.every((e, r) => e.isAssignableFrom(t[r]));
        }
        differs(e) {
          return !this.equals(e);
        }
        valueOf() {
          return this.name;
        }
        isAssignableFrom(e) {
          let t = Type.equalsMany(
            this.getTypeParameters(),
            e.getTypeParameters(),
          );
          if (!t) return !1;
          let r = this.getFullyQualifiedName(),
            n = Type.getFullyQualifiedNamesInHierarchy(e);
          return !!n.includes(r) || e.hasClassOrSuperclass(this.getClassName());
        }
        static getFullyQualifiedNamesInHierarchy(e) {
          let t = n.getJavascriptPrototypesInHierarchy(
              e,
              (e) => e.belongsToTypesystem,
            ),
            r = t.map((t) => t.getFullyQualifiedName.call(e));
          return r;
        }
        getNamesOfDependencies() {
          const e = [];
          for (const t of this.typeParameters)
            (e.push(t.getName()), e.push(...t.getNamesOfDependencies()));
          return [...new Set(e)];
        }
        toJSON() {
          return {
            name: this.name,
            typeParameters: this.typeParameters.map((e) => e.toJSON()),
          };
        }
        getCardinality() {
          return this.cardinality;
        }
        belongsToTypesystem() {}
      }
      ((t.Type = Type), (Type.ClassName = "Type"));
      class TypeCardinality {
        constructor(e, t) {
          ((this.lowerBound = e), (this.upperBound = t));
        }
        static fixed(e) {
          return new TypeCardinality(e, e);
        }
        static variable(e) {
          return new TypeCardinality(0, e);
        }
        isSingular() {
          return 1 == this.lowerBound && 1 == this.upperBound;
        }
        isSingularOrNone() {
          return 0 == this.lowerBound && 1 == this.upperBound;
        }
        isComposite() {
          return 1 != this.upperBound;
        }
        isFixed() {
          return this.lowerBound == this.upperBound;
        }
        getLowerBound() {
          return this.lowerBound;
        }
        getUpperBound() {
          return this.upperBound || TypeCardinality.MaxCardinality;
        }
      }
      ((t.TypeCardinality = TypeCardinality),
        (TypeCardinality.MaxCardinality = 4096));
      class PrimitiveType extends Type {
        constructor(e) {
          super(e);
        }
        getClassName() {
          return PrimitiveType.ClassName;
        }
      }
      ((t.PrimitiveType = PrimitiveType),
        (PrimitiveType.ClassName = "PrimitiveType"));
      class CustomType extends Type {
        getClassName() {
          return CustomType.ClassName;
        }
      }
      ((t.CustomType = CustomType), (CustomType.ClassName = "CustomType"));
      class TypedValue {
        constructor(e) {
          this.type = e;
        }
        getClassName() {
          return TypedValue.ClassName;
        }
        getClassHierarchy() {
          let e = n.getJavascriptPrototypesInHierarchy(
              this,
              (e) => e.belongsToTypesystem,
            ),
            t = e.map((e) => e.getClassName()).reverse();
          return t;
        }
        getType() {
          return this.type;
        }
        hasExactClass(e) {
          return this.getClassName() == e;
        }
        hasClassOrSuperclass(e) {
          let t = this.getClassHierarchy();
          return t.includes(e);
        }
        belongsToTypesystem() {}
      }
      ((t.TypedValue = TypedValue), (TypedValue.ClassName = "TypedValue"));
      class PrimitiveValue extends TypedValue {
        constructor(e) {
          super(e);
        }
        getClassName() {
          return PrimitiveValue.ClassName;
        }
      }
      function s(e) {
        return void 0 !== e.belongsToTypesystem;
      }
      ((t.PrimitiveValue = PrimitiveValue),
        (PrimitiveValue.ClassName = "PrimitiveValue"),
        (t.isTyped = s));
      class TypePlaceholder extends Type {
        constructor() {
          super("...");
        }
        getClassName() {
          return TypePlaceholder.ClassName;
        }
      }
      ((t.TypePlaceholder = TypePlaceholder),
        (TypePlaceholder.ClassName = "TypePlaceholder"));
      class NullType extends Type {
        constructor() {
          super("?");
        }
        getClassName() {
          return NullType.ClassName;
        }
      }
      ((t.NullType = NullType), (NullType.ClassName = "NullType"));
    },
    3121: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  (void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
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
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return (i(t, e), t);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Address = void 0));
        const a = s(r(803)),
          o = s(r(2854)),
          u = "erd",
          l = 32,
          c = "0".repeat(16);
        class Address {
          constructor(t) {
            if (((this.valueHex = ""), t)) {
              if (t instanceof Address) return Address.fromAddress(t);
              if (t instanceof e) return Address.fromBuffer(t);
              if ("string" === typeof t) return Address.fromString(t);
              throw new o.ErrAddressCannotCreate(t);
            }
          }
          static fromAddress(e) {
            return Address.fromValidHex(e.valueHex);
          }
          static fromValidHex(e) {
            let t = new Address();
            return ((t.valueHex = e), t);
          }
          static fromBuffer(e) {
            if (e.length != l) throw new o.ErrAddressCannotCreate(e);
            return Address.fromValidHex(e.toString("hex"));
          }
          static fromString(e) {
            return Address.isValidHex(e)
              ? Address.fromValidHex(e)
              : Address.fromBech32(e);
          }
          static isValidHex(t) {
            return e.from(t, "hex").length == l;
          }
          static fromHex(e) {
            if (!Address.isValidHex(e)) throw new o.ErrAddressCannotCreate(e);
            return Address.fromValidHex(e);
          }
          static fromBech32(t) {
            let r;
            try {
              r = a.decode(t);
            } catch (s) {
              throw new o.ErrAddressCannotCreate(t, s);
            }
            let n = r.prefix;
            if (n != u) throw new o.ErrAddressBadHrp(u, n);
            let i = e.from(a.fromWords(r.words));
            if (i.length != l) throw new o.ErrAddressCannotCreate(t);
            return Address.fromValidHex(i.toString("hex"));
          }
          hex() {
            return this.isEmpty() ? "" : this.valueHex;
          }
          bech32() {
            if (this.isEmpty()) return "";
            let e = a.toWords(this.pubkey()),
              t = a.encode(u, e);
            return t;
          }
          pubkey() {
            return this.isEmpty() ? e.from([]) : e.from(this.valueHex, "hex");
          }
          isEmpty() {
            return !this.valueHex;
          }
          equals(e) {
            return !!e && this.valueHex == e.valueHex;
          }
          toString() {
            return this.bech32();
          }
          toJSON() {
            return { bech32: this.bech32(), pubkey: this.hex() };
          }
          static Zero() {
            return new Address("0".repeat(64));
          }
          isContractAddress() {
            return this.hex().startsWith(c);
          }
        }
        t.Address = Address;
      }).call(this, r(2).Buffer);
    },
    3219: function (e, t, r) {
      var n;
      (function (i) {
        "use strict";
        var s,
          a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          o = Math.ceil,
          u = Math.floor,
          l = "[BigNumber Error] ",
          c = l + "Number primitive has more than 15 significant digits: ",
          d = 1e14,
          f = 14,
          p = 9007199254740991,
          h = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          g = 1e7,
          y = 1e9;
        function m(e) {
          var t,
            r,
            n,
            i = (M.prototype = {
              constructor: M,
              toString: null,
              valueOf: null,
            }),
            s = new M(1),
            S = 20,
            E = 4,
            V = -7,
            B = 21,
            I = -1e7,
            A = 1e7,
            P = !1,
            _ = 1,
            L = 0,
            x = {
              prefix: "",
              groupSize: 3,
              secondaryGroupSize: 0,
              groupSeparator: ",",
              decimalSeparator: ".",
              fractionGroupSize: 0,
              fractionGroupSeparator: " ",
              suffix: "",
            },
            D = "0123456789abcdefghijklmnopqrstuvwxyz";
          function M(e, t) {
            var i,
              s,
              o,
              l,
              d,
              h,
              g,
              y,
              m = this;
            if (!(m instanceof M)) return new M(e, t);
            if (null == t) {
              if (e && !0 === e._isBigNumber)
                return (
                  (m.s = e.s),
                  void (!e.c || e.e > A
                    ? (m.c = m.e = null)
                    : e.e < I
                      ? (m.c = [(m.e = 0)])
                      : ((m.e = e.e), (m.c = e.c.slice())))
                );
              if ((h = "number" == typeof e) && 0 * e == 0) {
                if (((m.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                  for (l = 0, d = e; d >= 10; d /= 10, l++);
                  return void (l > A
                    ? (m.c = m.e = null)
                    : ((m.e = l), (m.c = [e])));
                }
                y = String(e);
              } else {
                if (!a.test((y = String(e)))) return n(m, y, h);
                m.s = 45 == y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
              }
              ((l = y.indexOf(".")) > -1 && (y = y.replace(".", "")),
                (d = y.search(/e/i)) > 0
                  ? (l < 0 && (l = d),
                    (l += +y.slice(d + 1)),
                    (y = y.substring(0, d)))
                  : l < 0 && (l = y.length));
            } else {
              if ((N(t, 2, D.length, "Base"), 10 == t))
                return ((m = new M(e)), j(m, S + m.e + 1, E));
              if (((y = String(e)), (h = "number" == typeof e))) {
                if (0 * e != 0) return n(m, y, h, t);
                if (
                  ((m.s = 1 / e < 0 ? ((y = y.slice(1)), -1) : 1),
                  M.DEBUG && y.replace(/^0\.0*|\./, "").length > 15)
                )
                  throw Error(c + e);
              } else m.s = 45 === y.charCodeAt(0) ? ((y = y.slice(1)), -1) : 1;
              for (i = D.slice(0, t), l = d = 0, g = y.length; d < g; d++)
                if (i.indexOf((s = y.charAt(d))) < 0) {
                  if ("." == s) {
                    if (d > l) {
                      l = g;
                      continue;
                    }
                  } else if (
                    !o &&
                    ((y == y.toUpperCase() && (y = y.toLowerCase())) ||
                      (y == y.toLowerCase() && (y = y.toUpperCase())))
                  ) {
                    ((o = !0), (d = -1), (l = 0));
                    continue;
                  }
                  return n(m, String(e), h, t);
                }
              ((h = !1),
                (y = r(y, t, 10, m.s)),
                (l = y.indexOf(".")) > -1
                  ? (y = y.replace(".", ""))
                  : (l = y.length));
            }
            for (d = 0; 48 === y.charCodeAt(d); d++);
            for (g = y.length; 48 === y.charCodeAt(--g); );
            if ((y = y.slice(d, ++g))) {
              if (((g -= d), h && M.DEBUG && g > 15 && (e > p || e !== u(e))))
                throw Error(c + m.s * e);
              if ((l = l - d - 1) > A) m.c = m.e = null;
              else if (l < I) m.c = [(m.e = 0)];
              else {
                if (
                  ((m.e = l),
                  (m.c = []),
                  (d = (l + 1) % f),
                  l < 0 && (d += f),
                  d < g)
                ) {
                  for (d && m.c.push(+y.slice(0, d)), g -= f; d < g; )
                    m.c.push(+y.slice(d, (d += f)));
                  d = f - (y = y.slice(d)).length;
                } else d -= g;
                for (; d--; y += "0");
                m.c.push(+y);
              }
            } else m.c = [(m.e = 0)];
          }
          function R(e, t, r, n) {
            var i, s, a, o, u;
            if ((null == r ? (r = E) : N(r, 0, 8), !e.c)) return e.toString();
            if (((i = e.c[0]), (a = e.e), null == t))
              ((u = v(e.c)),
                (u =
                  1 == n || (2 == n && (a <= V || a >= B))
                    ? w(u, a)
                    : O(u, a, "0")));
            else if (
              ((e = j(new M(e), t, r)),
              (s = e.e),
              (u = v(e.c)),
              (o = u.length),
              1 == n || (2 == n && (t <= s || s <= V)))
            ) {
              for (; o < t; u += "0", o++);
              u = w(u, s);
            } else if (((t -= a), (u = O(u, s, "0")), s + 1 > o)) {
              if (--t > 0) for (u += "."; t--; u += "0");
            } else if (((t += s - o), t > 0))
              for (s + 1 == o && (u += "."); t--; u += "0");
            return e.s < 0 && i ? "-" + u : u;
          }
          function F(e, t) {
            for (var r, n = 1, i = new M(e[0]); n < e.length; n++) {
              if (((r = new M(e[n])), !r.s)) {
                i = r;
                break;
              }
              t.call(i, r) && (i = r);
            }
            return i;
          }
          function U(e, t, r) {
            for (var n = 1, i = t.length; !t[--i]; t.pop());
            for (i = t[0]; i >= 10; i /= 10, n++);
            return (
              (r = n + r * f - 1) > A
                ? (e.c = e.e = null)
                : r < I
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
              e
            );
          }
          function j(e, t, r, n) {
            var i,
              s,
              a,
              l,
              c,
              p,
              g,
              y = e.c,
              m = h;
            if (y) {
              e: {
                for (i = 1, l = y[0]; l >= 10; l /= 10, i++);
                if (((s = t - i), s < 0))
                  ((s += f),
                    (a = t),
                    (c = y[(p = 0)]),
                    (g = ((c / m[i - a - 1]) % 10) | 0));
                else if (((p = o((s + 1) / f)), p >= y.length)) {
                  if (!n) break e;
                  for (; y.length <= p; y.push(0));
                  ((c = g = 0), (i = 1), (s %= f), (a = s - f + 1));
                } else {
                  for (c = l = y[p], i = 1; l >= 10; l /= 10, i++);
                  ((s %= f),
                    (a = s - f + i),
                    (g = a < 0 ? 0 : ((c / m[i - a - 1]) % 10) | 0));
                }
                if (
                  ((n =
                    n ||
                    t < 0 ||
                    null != y[p + 1] ||
                    (a < 0 ? c : c % m[i - a - 1])),
                  (n =
                    r < 4
                      ? (g || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                      : g > 5 ||
                        (5 == g &&
                          (4 == r ||
                            n ||
                            (6 == r &&
                              ((s > 0 ? (a > 0 ? c / m[i - a] : 0) : y[p - 1]) %
                                10) &
                                1) ||
                            r == (e.s < 0 ? 8 : 7)))),
                  t < 1 || !y[0])
                )
                  return (
                    (y.length = 0),
                    n
                      ? ((t -= e.e + 1),
                        (y[0] = m[(f - (t % f)) % f]),
                        (e.e = -t || 0))
                      : (y[0] = e.e = 0),
                    e
                  );
                if (
                  (0 == s
                    ? ((y.length = p), (l = 1), p--)
                    : ((y.length = p + 1),
                      (l = m[f - s]),
                      (y[p] = a > 0 ? u((c / m[i - a]) % m[a]) * l : 0)),
                  n)
                )
                  for (;;) {
                    if (0 == p) {
                      for (s = 1, a = y[0]; a >= 10; a /= 10, s++);
                      for (a = y[0] += l, l = 1; a >= 10; a /= 10, l++);
                      s != l && (e.e++, y[0] == d && (y[0] = 1));
                      break;
                    }
                    if (((y[p] += l), y[p] != d)) break;
                    ((y[p--] = 0), (l = 1));
                  }
                for (s = y.length; 0 === y[--s]; y.pop());
              }
              e.e > A ? (e.c = e.e = null) : e.e < I && (e.c = [(e.e = 0)]);
            }
            return e;
          }
          function k(e) {
            var t,
              r = e.e;
            return null === r
              ? e.toString()
              : ((t = v(e.c)),
                (t = r <= V || r >= B ? w(t, r) : O(t, r, "0")),
                e.s < 0 ? "-" + t : t);
          }
          return (
            (M.clone = m),
            (M.ROUND_UP = 0),
            (M.ROUND_DOWN = 1),
            (M.ROUND_CEIL = 2),
            (M.ROUND_FLOOR = 3),
            (M.ROUND_HALF_UP = 4),
            (M.ROUND_HALF_DOWN = 5),
            (M.ROUND_HALF_EVEN = 6),
            (M.ROUND_HALF_CEIL = 7),
            (M.ROUND_HALF_FLOOR = 8),
            (M.EUCLID = 9),
            (M.config = M.set =
              function (e) {
                var t, r;
                if (null != e) {
                  if ("object" != typeof e)
                    throw Error(l + "Object expected: " + e);
                  if (
                    (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                      ((r = e[t]), N(r, 0, y, t), (S = r)),
                    e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                      ((r = e[t]), N(r, 0, 8, t), (E = r)),
                    e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                      ((r = e[t]),
                      r && r.pop
                        ? (N(r[0], -y, 0, t),
                          N(r[1], 0, y, t),
                          (V = r[0]),
                          (B = r[1]))
                        : (N(r, -y, y, t), (V = -(B = r < 0 ? -r : r)))),
                    e.hasOwnProperty((t = "RANGE")))
                  )
                    if (((r = e[t]), r && r.pop))
                      (N(r[0], -y, -1, t),
                        N(r[1], 1, y, t),
                        (I = r[0]),
                        (A = r[1]));
                    else {
                      if ((N(r, -y, y, t), !r))
                        throw Error(l + t + " cannot be zero: " + r);
                      I = -(A = r < 0 ? -r : r);
                    }
                  if (e.hasOwnProperty((t = "CRYPTO"))) {
                    if (((r = e[t]), r !== !!r))
                      throw Error(l + t + " not true or false: " + r);
                    if (r) {
                      if (
                        "undefined" == typeof crypto ||
                        !crypto ||
                        (!crypto.getRandomValues && !crypto.randomBytes)
                      )
                        throw ((P = !r), Error(l + "crypto unavailable"));
                      P = r;
                    } else P = r;
                  }
                  if (
                    (e.hasOwnProperty((t = "MODULO_MODE")) &&
                      ((r = e[t]), N(r, 0, 9, t), (_ = r)),
                    e.hasOwnProperty((t = "POW_PRECISION")) &&
                      ((r = e[t]), N(r, 0, y, t), (L = r)),
                    e.hasOwnProperty((t = "FORMAT")))
                  ) {
                    if (((r = e[t]), "object" != typeof r))
                      throw Error(l + t + " not an object: " + r);
                    x = r;
                  }
                  if (e.hasOwnProperty((t = "ALPHABET"))) {
                    if (
                      ((r = e[t]),
                      "string" != typeof r || /^.?$|[+\-.\s]|(.).*\1/.test(r))
                    )
                      throw Error(l + t + " invalid: " + r);
                    D = r;
                  }
                }
                return {
                  DECIMAL_PLACES: S,
                  ROUNDING_MODE: E,
                  EXPONENTIAL_AT: [V, B],
                  RANGE: [I, A],
                  CRYPTO: P,
                  MODULO_MODE: _,
                  POW_PRECISION: L,
                  FORMAT: x,
                  ALPHABET: D,
                };
              }),
            (M.isBigNumber = function (e) {
              if (!e || !0 !== e._isBigNumber) return !1;
              if (!M.DEBUG) return !0;
              var t,
                r,
                n = e.c,
                i = e.e,
                s = e.s;
              e: if ("[object Array]" == {}.toString.call(n)) {
                if ((1 === s || -1 === s) && i >= -y && i <= y && i === u(i)) {
                  if (0 === n[0]) {
                    if (0 === i && 1 === n.length) return !0;
                    break e;
                  }
                  if (
                    ((t = (i + 1) % f),
                    t < 1 && (t += f),
                    String(n[0]).length == t)
                  ) {
                    for (t = 0; t < n.length; t++)
                      if (((r = n[t]), r < 0 || r >= d || r !== u(r))) break e;
                    if (0 !== r) return !0;
                  }
                }
              } else if (
                null === n &&
                null === i &&
                (null === s || 1 === s || -1 === s)
              )
                return !0;
              throw Error(l + "Invalid BigNumber: " + e);
            }),
            (M.maximum = M.max =
              function () {
                return F(arguments, i.lt);
              }),
            (M.minimum = M.min =
              function () {
                return F(arguments, i.gt);
              }),
            (M.random = (function () {
              var e = 9007199254740992,
                t =
                  (Math.random() * e) & 2097151
                    ? function () {
                        return u(Math.random() * e);
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      };
              return function (e) {
                var r,
                  n,
                  i,
                  a,
                  c,
                  d = 0,
                  p = [],
                  g = new M(s);
                if ((null == e ? (e = S) : N(e, 0, y), (a = o(e / f)), P))
                  if (crypto.getRandomValues) {
                    for (
                      r = crypto.getRandomValues(new Uint32Array((a *= 2)));
                      d < a;
                    )
                      ((c = 131072 * r[d] + (r[d + 1] >>> 11)),
                        c >= 9e15
                          ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                            (r[d] = n[0]),
                            (r[d + 1] = n[1]))
                          : (p.push(c % 1e14), (d += 2)));
                    d = a / 2;
                  } else {
                    if (!crypto.randomBytes)
                      throw ((P = !1), Error(l + "crypto unavailable"));
                    for (r = crypto.randomBytes((a *= 7)); d < a; )
                      ((c =
                        281474976710656 * (31 & r[d]) +
                        1099511627776 * r[d + 1] +
                        4294967296 * r[d + 2] +
                        16777216 * r[d + 3] +
                        (r[d + 4] << 16) +
                        (r[d + 5] << 8) +
                        r[d + 6]),
                        c >= 9e15
                          ? crypto.randomBytes(7).copy(r, d)
                          : (p.push(c % 1e14), (d += 7)));
                    d = a / 7;
                  }
                if (!P)
                  for (; d < a; ) ((c = t()), c < 9e15 && (p[d++] = c % 1e14));
                for (
                  a = p[--d],
                    e %= f,
                    a && e && ((c = h[f - e]), (p[d] = u(a / c) * c));
                  0 === p[d];
                  p.pop(), d--
                );
                if (d < 0) p = [(i = 0)];
                else {
                  for (i = -1; 0 === p[0]; p.splice(0, 1), i -= f);
                  for (d = 1, c = p[0]; c >= 10; c /= 10, d++);
                  d < f && (i -= f - d);
                }
                return ((g.e = i), (g.c = p), g);
              };
            })()),
            (M.sum = function () {
              for (var e = 1, t = arguments, r = new M(t[0]); e < t.length; )
                r = r.plus(t[e++]);
              return r;
            }),
            (r = (function () {
              var e = "0123456789";
              function r(e, t, r, n) {
                for (var i, s, a = [0], o = 0, u = e.length; o < u; ) {
                  for (s = a.length; s--; a[s] *= t);
                  for (
                    a[0] += n.indexOf(e.charAt(o++)), i = 0;
                    i < a.length;
                    i++
                  )
                    a[i] > r - 1 &&
                      (null == a[i + 1] && (a[i + 1] = 0),
                      (a[i + 1] += (a[i] / r) | 0),
                      (a[i] %= r));
                }
                return a.reverse();
              }
              return function (n, i, s, a, o) {
                var u,
                  l,
                  c,
                  d,
                  f,
                  p,
                  h,
                  g,
                  y = n.indexOf("."),
                  m = S,
                  T = E;
                for (
                  y >= 0 &&
                    ((d = L),
                    (L = 0),
                    (n = n.replace(".", "")),
                    (g = new M(i)),
                    (p = g.pow(n.length - y)),
                    (L = d),
                    (g.c = r(O(v(p.c), p.e, "0"), 10, s, e)),
                    (g.e = g.c.length)),
                    h = r(n, i, s, o ? ((u = D), e) : ((u = e), D)),
                    c = d = h.length;
                  0 == h[--d];
                  h.pop()
                );
                if (!h[0]) return u.charAt(0);
                if (
                  (y < 0
                    ? --c
                    : ((p.c = h),
                      (p.e = c),
                      (p.s = a),
                      (p = t(p, g, m, T, s)),
                      (h = p.c),
                      (f = p.r),
                      (c = p.e)),
                  (l = c + m + 1),
                  (y = h[l]),
                  (d = s / 2),
                  (f = f || l < 0 || null != h[l + 1]),
                  (f =
                    T < 4
                      ? (null != y || f) && (0 == T || T == (p.s < 0 ? 3 : 2))
                      : y > d ||
                        (y == d &&
                          (4 == T ||
                            f ||
                            (6 == T && 1 & h[l - 1]) ||
                            T == (p.s < 0 ? 8 : 7)))),
                  l < 1 || !h[0])
                )
                  n = f ? O(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
                else {
                  if (((h.length = l), f))
                    for (--s; ++h[--l] > s; )
                      ((h[l] = 0), l || (++c, (h = [1].concat(h))));
                  for (d = h.length; !h[--d]; );
                  for (y = 0, n = ""; y <= d; n += u.charAt(h[y++]));
                  n = O(n, c, u.charAt(0));
                }
                return n;
              };
            })()),
            (t = (function () {
              function e(e, t, r) {
                var n,
                  i,
                  s,
                  a,
                  o = 0,
                  u = e.length,
                  l = t % g,
                  c = (t / g) | 0;
                for (e = e.slice(); u--; )
                  ((s = e[u] % g),
                    (a = (e[u] / g) | 0),
                    (n = c * s + a * l),
                    (i = l * s + (n % g) * g + o),
                    (o = ((i / r) | 0) + ((n / g) | 0) + c * a),
                    (e[u] = i % r));
                return (o && (e = [o].concat(e)), e);
              }
              function t(e, t, r, n) {
                var i, s;
                if (r != n) s = r > n ? 1 : -1;
                else
                  for (i = s = 0; i < r; i++)
                    if (e[i] != t[i]) {
                      s = e[i] > t[i] ? 1 : -1;
                      break;
                    }
                return s;
              }
              function r(e, t, r, n) {
                for (var i = 0; r--; )
                  ((e[r] -= i),
                    (i = e[r] < t[r] ? 1 : 0),
                    (e[r] = i * n + e[r] - t[r]));
                for (; !e[0] && e.length > 1; e.splice(0, 1));
              }
              return function (n, i, s, a, o) {
                var l,
                  c,
                  p,
                  h,
                  g,
                  y,
                  m,
                  v,
                  C,
                  N,
                  b,
                  w,
                  O,
                  S,
                  E,
                  V,
                  B,
                  I = n.s == i.s ? 1 : -1,
                  A = n.c,
                  P = i.c;
                if (!A || !A[0] || !P || !P[0])
                  return new M(
                    n.s && i.s && (A ? !P || A[0] != P[0] : P)
                      ? (A && 0 == A[0]) || !P
                        ? 0 * I
                        : I / 0
                      : NaN,
                  );
                for (
                  v = new M(I),
                    C = v.c = [],
                    c = n.e - i.e,
                    I = s + c + 1,
                    o ||
                      ((o = d),
                      (c = T(n.e / f) - T(i.e / f)),
                      (I = (I / f) | 0)),
                    p = 0;
                  P[p] == (A[p] || 0);
                  p++
                );
                if ((P[p] > (A[p] || 0) && c--, I < 0)) (C.push(1), (h = !0));
                else {
                  for (
                    S = A.length,
                      V = P.length,
                      p = 0,
                      I += 2,
                      g = u(o / (P[0] + 1)),
                      g > 1 &&
                        ((P = e(P, g, o)),
                        (A = e(A, g, o)),
                        (V = P.length),
                        (S = A.length)),
                      O = V,
                      N = A.slice(0, V),
                      b = N.length;
                    b < V;
                    N[b++] = 0
                  );
                  ((B = P.slice()),
                    (B = [0].concat(B)),
                    (E = P[0]),
                    P[1] >= o / 2 && E++);
                  do {
                    if (((g = 0), (l = t(P, N, V, b)), l < 0)) {
                      if (
                        ((w = N[0]),
                        V != b && (w = w * o + (N[1] || 0)),
                        (g = u(w / E)),
                        g > 1)
                      ) {
                        (g >= o && (g = o - 1),
                          (y = e(P, g, o)),
                          (m = y.length),
                          (b = N.length));
                        while (1 == t(y, N, m, b))
                          (g--,
                            r(y, V < m ? B : P, m, o),
                            (m = y.length),
                            (l = 1));
                      } else
                        (0 == g && (l = g = 1),
                          (y = P.slice()),
                          (m = y.length));
                      if (
                        (m < b && (y = [0].concat(y)),
                        r(N, y, b, o),
                        (b = N.length),
                        -1 == l)
                      )
                        while (t(P, N, V, b) < 1)
                          (g++, r(N, V < b ? B : P, b, o), (b = N.length));
                    } else 0 === l && (g++, (N = [0]));
                    ((C[p++] = g),
                      N[0] ? (N[b++] = A[O] || 0) : ((N = [A[O]]), (b = 1)));
                  } while ((O++ < S || null != N[0]) && I--);
                  ((h = null != N[0]), C[0] || C.splice(0, 1));
                }
                if (o == d) {
                  for (p = 1, I = C[0]; I >= 10; I /= 10, p++);
                  j(v, s + (v.e = p + c * f - 1) + 1, a, h);
                } else ((v.e = c), (v.r = +h));
                return v;
              };
            })()),
            (n = (function () {
              var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                t = /^([^.]+)\.$/,
                r = /^\.([^.]+)$/,
                n = /^-?(Infinity|NaN)$/,
                i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
              return function (s, a, o, u) {
                var c,
                  d = o ? a : a.replace(i, "");
                if (n.test(d)) s.s = isNaN(d) ? null : d < 0 ? -1 : 1;
                else {
                  if (
                    !o &&
                    ((d = d.replace(e, function (e, t, r) {
                      return (
                        (c =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        u && u != c ? e : t
                      );
                    })),
                    u && ((c = u), (d = d.replace(t, "$1").replace(r, "0.$1"))),
                    a != d)
                  )
                    return new M(d, c);
                  if (M.DEBUG)
                    throw Error(
                      l + "Not a" + (u ? " base " + u : "") + " number: " + a,
                    );
                  s.s = null;
                }
                s.c = s.e = null;
              };
            })()),
            (i.absoluteValue = i.abs =
              function () {
                var e = new M(this);
                return (e.s < 0 && (e.s = 1), e);
              }),
            (i.comparedTo = function (e, t) {
              return C(this, new M(e, t));
            }),
            (i.decimalPlaces = i.dp =
              function (e, t) {
                var r,
                  n,
                  i,
                  s = this;
                if (null != e)
                  return (
                    N(e, 0, y),
                    null == t ? (t = E) : N(t, 0, 8),
                    j(new M(s), e + s.e + 1, t)
                  );
                if (!(r = s.c)) return null;
                if (
                  ((n = ((i = r.length - 1) - T(this.e / f)) * f), (i = r[i]))
                )
                  for (; i % 10 == 0; i /= 10, n--);
                return (n < 0 && (n = 0), n);
              }),
            (i.dividedBy = i.div =
              function (e, r) {
                return t(this, new M(e, r), S, E);
              }),
            (i.dividedToIntegerBy = i.idiv =
              function (e, r) {
                return t(this, new M(e, r), 0, 1);
              }),
            (i.exponentiatedBy = i.pow =
              function (e, t) {
                var r,
                  n,
                  i,
                  a,
                  c,
                  d,
                  p,
                  h,
                  g,
                  y = this;
                if (((e = new M(e)), e.c && !e.isInteger()))
                  throw Error(l + "Exponent not an integer: " + k(e));
                if (
                  (null != t && (t = new M(t)),
                  (d = e.e > 14),
                  !y.c ||
                    !y.c[0] ||
                    (1 == y.c[0] && !y.e && 1 == y.c.length) ||
                    !e.c ||
                    !e.c[0])
                )
                  return (
                    (g = new M(Math.pow(+k(y), d ? 2 - b(e) : +k(e)))),
                    t ? g.mod(t) : g
                  );
                if (((p = e.s < 0), t)) {
                  if (t.c ? !t.c[0] : !t.s) return new M(NaN);
                  ((n = !p && y.isInteger() && t.isInteger()),
                    n && (y = y.mod(t)));
                } else {
                  if (
                    e.e > 9 &&
                    (y.e > 0 ||
                      y.e < -1 ||
                      (0 == y.e
                        ? y.c[0] > 1 || (d && y.c[1] >= 24e7)
                        : y.c[0] < 8e13 || (d && y.c[0] <= 9999975e7)))
                  )
                    return (
                      (a = y.s < 0 && b(e) ? -0 : 0),
                      y.e > -1 && (a = 1 / a),
                      new M(p ? 1 / a : a)
                    );
                  L && (a = o(L / f + 2));
                }
                for (
                  d
                    ? ((r = new M(0.5)), p && (e.s = 1), (h = b(e)))
                    : ((i = Math.abs(+k(e))), (h = i % 2)),
                    g = new M(s);
                  ;
                ) {
                  if (h) {
                    if (((g = g.times(y)), !g.c)) break;
                    a
                      ? g.c.length > a && (g.c.length = a)
                      : n && (g = g.mod(t));
                  }
                  if (i) {
                    if (((i = u(i / 2)), 0 === i)) break;
                    h = i % 2;
                  } else if (((e = e.times(r)), j(e, e.e + 1, 1), e.e > 14))
                    h = b(e);
                  else {
                    if (((i = +k(e)), 0 === i)) break;
                    h = i % 2;
                  }
                  ((y = y.times(y)),
                    a
                      ? y.c && y.c.length > a && (y.c.length = a)
                      : n && (y = y.mod(t)));
                }
                return n
                  ? g
                  : (p && (g = s.div(g)), t ? g.mod(t) : a ? j(g, L, E, c) : g);
              }),
            (i.integerValue = function (e) {
              var t = new M(this);
              return (null == e ? (e = E) : N(e, 0, 8), j(t, t.e + 1, e));
            }),
            (i.isEqualTo = i.eq =
              function (e, t) {
                return 0 === C(this, new M(e, t));
              }),
            (i.isFinite = function () {
              return !!this.c;
            }),
            (i.isGreaterThan = i.gt =
              function (e, t) {
                return C(this, new M(e, t)) > 0;
              }),
            (i.isGreaterThanOrEqualTo = i.gte =
              function (e, t) {
                return 1 === (t = C(this, new M(e, t))) || 0 === t;
              }),
            (i.isInteger = function () {
              return !!this.c && T(this.e / f) > this.c.length - 2;
            }),
            (i.isLessThan = i.lt =
              function (e, t) {
                return C(this, new M(e, t)) < 0;
              }),
            (i.isLessThanOrEqualTo = i.lte =
              function (e, t) {
                return -1 === (t = C(this, new M(e, t))) || 0 === t;
              }),
            (i.isNaN = function () {
              return !this.s;
            }),
            (i.isNegative = function () {
              return this.s < 0;
            }),
            (i.isPositive = function () {
              return this.s > 0;
            }),
            (i.isZero = function () {
              return !!this.c && 0 == this.c[0];
            }),
            (i.minus = function (e, t) {
              var r,
                n,
                i,
                s,
                a = this,
                o = a.s;
              if (((e = new M(e, t)), (t = e.s), !o || !t)) return new M(NaN);
              if (o != t) return ((e.s = -t), a.plus(e));
              var u = a.e / f,
                l = e.e / f,
                c = a.c,
                p = e.c;
              if (!u || !l) {
                if (!c || !p) return c ? ((e.s = -t), e) : new M(p ? a : NaN);
                if (!c[0] || !p[0])
                  return p[0]
                    ? ((e.s = -t), e)
                    : new M(c[0] ? a : 3 == E ? -0 : 0);
              }
              if (((u = T(u)), (l = T(l)), (c = c.slice()), (o = u - l))) {
                for (
                  (s = o < 0) ? ((o = -o), (i = c)) : ((l = u), (i = p)),
                    i.reverse(),
                    t = o;
                  t--;
                  i.push(0)
                );
                i.reverse();
              } else
                for (
                  n = (s = (o = c.length) < (t = p.length)) ? o : t, o = t = 0;
                  t < n;
                  t++
                )
                  if (c[t] != p[t]) {
                    s = c[t] < p[t];
                    break;
                  }
              if (
                (s && ((i = c), (c = p), (p = i), (e.s = -e.s)),
                (t = (n = p.length) - (r = c.length)),
                t > 0)
              )
                for (; t--; c[r++] = 0);
              for (t = d - 1; n > o; ) {
                if (c[--n] < p[n]) {
                  for (r = n; r && !c[--r]; c[r] = t);
                  (--c[r], (c[n] += d));
                }
                c[n] -= p[n];
              }
              for (; 0 == c[0]; c.splice(0, 1), --l);
              return c[0]
                ? U(e, c, l)
                : ((e.s = 3 == E ? -1 : 1), (e.c = [(e.e = 0)]), e);
            }),
            (i.modulo = i.mod =
              function (e, r) {
                var n,
                  i,
                  s = this;
                return (
                  (e = new M(e, r)),
                  !s.c || !e.s || (e.c && !e.c[0])
                    ? new M(NaN)
                    : !e.c || (s.c && !s.c[0])
                      ? new M(s)
                      : (9 == _
                          ? ((i = e.s),
                            (e.s = 1),
                            (n = t(s, e, 0, 3)),
                            (e.s = i),
                            (n.s *= i))
                          : (n = t(s, e, 0, _)),
                        (e = s.minus(n.times(e))),
                        e.c[0] || 1 != _ || (e.s = s.s),
                        e)
                );
              }),
            (i.multipliedBy = i.times =
              function (e, t) {
                var r,
                  n,
                  i,
                  s,
                  a,
                  o,
                  u,
                  l,
                  c,
                  p,
                  h,
                  y,
                  m,
                  v,
                  C,
                  N = this,
                  b = N.c,
                  w = (e = new M(e, t)).c;
                if (!b || !w || !b[0] || !w[0])
                  return (
                    !N.s || !e.s || (b && !b[0] && !w) || (w && !w[0] && !b)
                      ? (e.c = e.e = e.s = null)
                      : ((e.s *= N.s),
                        b && w ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
                    e
                  );
                for (
                  n = T(N.e / f) + T(e.e / f),
                    e.s *= N.s,
                    u = b.length,
                    p = w.length,
                    u < p &&
                      ((m = b), (b = w), (w = m), (i = u), (u = p), (p = i)),
                    i = u + p,
                    m = [];
                  i--;
                  m.push(0)
                );
                for (v = d, C = g, i = p; --i >= 0; ) {
                  for (
                    r = 0, h = w[i] % C, y = (w[i] / C) | 0, a = u, s = i + a;
                    s > i;
                  )
                    ((l = b[--a] % C),
                      (c = (b[a] / C) | 0),
                      (o = y * l + c * h),
                      (l = h * l + (o % C) * C + m[s] + r),
                      (r = ((l / v) | 0) + ((o / C) | 0) + y * c),
                      (m[s--] = l % v));
                  m[s] = r;
                }
                return (r ? ++n : m.splice(0, 1), U(e, m, n));
              }),
            (i.negated = function () {
              var e = new M(this);
              return ((e.s = -e.s || null), e);
            }),
            (i.plus = function (e, t) {
              var r,
                n = this,
                i = n.s;
              if (((e = new M(e, t)), (t = e.s), !i || !t)) return new M(NaN);
              if (i != t) return ((e.s = -t), n.minus(e));
              var s = n.e / f,
                a = e.e / f,
                o = n.c,
                u = e.c;
              if (!s || !a) {
                if (!o || !u) return new M(i / 0);
                if (!o[0] || !u[0]) return u[0] ? e : new M(o[0] ? n : 0 * i);
              }
              if (((s = T(s)), (a = T(a)), (o = o.slice()), (i = s - a))) {
                for (
                  i > 0 ? ((a = s), (r = u)) : ((i = -i), (r = o)), r.reverse();
                  i--;
                  r.push(0)
                );
                r.reverse();
              }
              for (
                i = o.length,
                  t = u.length,
                  i - t < 0 && ((r = u), (u = o), (o = r), (t = i)),
                  i = 0;
                t;
              )
                ((i = ((o[--t] = o[t] + u[t] + i) / d) | 0),
                  (o[t] = d === o[t] ? 0 : o[t] % d));
              return (i && ((o = [i].concat(o)), ++a), U(e, o, a));
            }),
            (i.precision = i.sd =
              function (e, t) {
                var r,
                  n,
                  i,
                  s = this;
                if (null != e && e !== !!e)
                  return (
                    N(e, 1, y),
                    null == t ? (t = E) : N(t, 0, 8),
                    j(new M(s), e, t)
                  );
                if (!(r = s.c)) return null;
                if (((i = r.length - 1), (n = i * f + 1), (i = r[i]))) {
                  for (; i % 10 == 0; i /= 10, n--);
                  for (i = r[0]; i >= 10; i /= 10, n++);
                }
                return (e && s.e + 1 > n && (n = s.e + 1), n);
              }),
            (i.shiftedBy = function (e) {
              return (N(e, -p, p), this.times("1e" + e));
            }),
            (i.squareRoot = i.sqrt =
              function () {
                var e,
                  r,
                  n,
                  i,
                  s,
                  a = this,
                  o = a.c,
                  u = a.s,
                  l = a.e,
                  c = S + 4,
                  d = new M("0.5");
                if (1 !== u || !o || !o[0])
                  return new M(
                    !u || (u < 0 && (!o || o[0])) ? NaN : o ? a : 1 / 0,
                  );
                if (
                  ((u = Math.sqrt(+k(a))),
                  0 == u || u == 1 / 0
                    ? ((r = v(o)),
                      (r.length + l) % 2 == 0 && (r += "0"),
                      (u = Math.sqrt(+r)),
                      (l = T((l + 1) / 2) - (l < 0 || l % 2)),
                      u == 1 / 0
                        ? (r = "5e" + l)
                        : ((r = u.toExponential()),
                          (r = r.slice(0, r.indexOf("e") + 1) + l)),
                      (n = new M(r)))
                    : (n = new M(u + "")),
                  n.c[0])
                )
                  for (l = n.e, u = l + c, u < 3 && (u = 0); ; )
                    if (
                      ((s = n),
                      (n = d.times(s.plus(t(a, s, c, 1)))),
                      v(s.c).slice(0, u) === (r = v(n.c)).slice(0, u))
                    ) {
                      if (
                        (n.e < l && --u,
                        (r = r.slice(u - 3, u + 1)),
                        "9999" != r && (i || "4999" != r))
                      ) {
                        (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                          (j(n, n.e + S + 2, 1), (e = !n.times(n).eq(a)));
                        break;
                      }
                      if (!i && (j(s, s.e + S + 2, 0), s.times(s).eq(a))) {
                        n = s;
                        break;
                      }
                      ((c += 4), (u += 4), (i = 1));
                    }
                return j(n, n.e + S + 1, E, e);
              }),
            (i.toExponential = function (e, t) {
              return (null != e && (N(e, 0, y), e++), R(this, e, t, 1));
            }),
            (i.toFixed = function (e, t) {
              return (
                null != e && (N(e, 0, y), (e = e + this.e + 1)),
                R(this, e, t)
              );
            }),
            (i.toFormat = function (e, t, r) {
              var n,
                i = this;
              if (null == r)
                null != e && t && "object" == typeof t
                  ? ((r = t), (t = null))
                  : e && "object" == typeof e
                    ? ((r = e), (e = t = null))
                    : (r = x);
              else if ("object" != typeof r)
                throw Error(l + "Argument not an object: " + r);
              if (((n = i.toFixed(e, t)), i.c)) {
                var s,
                  a = n.split("."),
                  o = +r.groupSize,
                  u = +r.secondaryGroupSize,
                  c = r.groupSeparator || "",
                  d = a[0],
                  f = a[1],
                  p = i.s < 0,
                  h = p ? d.slice(1) : d,
                  g = h.length;
                if (
                  (u && ((s = o), (o = u), (u = s), (g -= s)), o > 0 && g > 0)
                ) {
                  for (s = g % o || o, d = h.substr(0, s); s < g; s += o)
                    d += c + h.substr(s, o);
                  (u > 0 && (d += c + h.slice(s)), p && (d = "-" + d));
                }
                n = f
                  ? d +
                    (r.decimalSeparator || "") +
                    ((u = +r.fractionGroupSize)
                      ? f.replace(
                          new RegExp("\\d{" + u + "}\\B", "g"),
                          "$&" + (r.fractionGroupSeparator || ""),
                        )
                      : f)
                  : d;
              }
              return (r.prefix || "") + n + (r.suffix || "");
            }),
            (i.toFraction = function (e) {
              var r,
                n,
                i,
                a,
                o,
                u,
                c,
                d,
                p,
                g,
                y,
                m,
                T = this,
                C = T.c;
              if (
                null != e &&
                ((c = new M(e)),
                (!c.isInteger() && (c.c || 1 !== c.s)) || c.lt(s))
              )
                throw Error(
                  l +
                    "Argument " +
                    (c.isInteger() ? "out of range: " : "not an integer: ") +
                    k(c),
                );
              if (!C) return new M(T);
              for (
                r = new M(s),
                  p = n = new M(s),
                  i = d = new M(s),
                  m = v(C),
                  o = r.e = m.length - T.e - 1,
                  r.c[0] = h[(u = o % f) < 0 ? f + u : u],
                  e = !e || c.comparedTo(r) > 0 ? (o > 0 ? r : p) : c,
                  u = A,
                  A = 1 / 0,
                  c = new M(m),
                  d.c[0] = 0;
                ;
              ) {
                if (
                  ((g = t(c, r, 0, 1)),
                  (a = n.plus(g.times(i))),
                  1 == a.comparedTo(e))
                )
                  break;
                ((n = i),
                  (i = a),
                  (p = d.plus(g.times((a = p)))),
                  (d = a),
                  (r = c.minus(g.times((a = r)))),
                  (c = a));
              }
              return (
                (a = t(e.minus(n), i, 0, 1)),
                (d = d.plus(a.times(p))),
                (n = n.plus(a.times(i))),
                (d.s = p.s = T.s),
                (o *= 2),
                (y =
                  t(p, i, o, E)
                    .minus(T)
                    .abs()
                    .comparedTo(t(d, n, o, E).minus(T).abs()) < 1
                    ? [p, i]
                    : [d, n]),
                (A = u),
                y
              );
            }),
            (i.toNumber = function () {
              return +k(this);
            }),
            (i.toPrecision = function (e, t) {
              return (null != e && N(e, 1, y), R(this, e, t, 2));
            }),
            (i.toString = function (e) {
              var t,
                n = this,
                i = n.s,
                s = n.e;
              return (
                null === s
                  ? i
                    ? ((t = "Infinity"), i < 0 && (t = "-" + t))
                    : (t = "NaN")
                  : (null == e
                      ? (t =
                          s <= V || s >= B ? w(v(n.c), s) : O(v(n.c), s, "0"))
                      : 10 === e
                        ? ((n = j(new M(n), S + s + 1, E)),
                          (t = O(v(n.c), n.e, "0")))
                        : (N(e, 2, D.length, "Base"),
                          (t = r(O(v(n.c), s, "0"), 10, e, i, !0))),
                    i < 0 && n.c[0] && (t = "-" + t)),
                t
              );
            }),
            (i.valueOf = i.toJSON =
              function () {
                return k(this);
              }),
            (i._isBigNumber = !0),
            null != e && M.set(e),
            M
          );
        }
        function T(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function v(e) {
          for (var t, r, n = 1, i = e.length, s = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = f - t.length; r--; t = "0" + t);
            s += t;
          }
          for (i = s.length; 48 === s.charCodeAt(--i); );
          return s.slice(0, i + 1 || 1);
        }
        function C(e, t) {
          var r,
            n,
            i = e.c,
            s = t.c,
            a = e.s,
            o = t.s,
            u = e.e,
            l = t.e;
          if (!a || !o) return null;
          if (((r = i && !i[0]), (n = s && !s[0]), r || n))
            return r ? (n ? 0 : -o) : a;
          if (a != o) return a;
          if (((r = a < 0), (n = u == l), !i || !s))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (u > l) ^ r ? 1 : -1;
          for (o = (u = i.length) < (l = s.length) ? u : l, a = 0; a < o; a++)
            if (i[a] != s[a]) return (i[a] > s[a]) ^ r ? 1 : -1;
          return u == l ? 0 : (u > l) ^ r ? 1 : -1;
        }
        function N(e, t, r, n) {
          if (e < t || e > r || e !== u(e))
            throw Error(
              l +
                (n || "Argument") +
                ("number" == typeof e
                  ? e < t || e > r
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e),
            );
        }
        function b(e) {
          var t = e.c.length - 1;
          return T(e.e / f) == t && e.c[t] % 2 != 0;
        }
        function w(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function O(e, t, r) {
          var n, i;
          if (t < 0) {
            for (i = r + "."; ++t; i += r);
            e = i + e;
          } else if (((n = e.length), ++t > n)) {
            for (i = r, t -= n; --t; i += r);
            e += i;
          } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        ((s = m()),
          (s["default"] = s.BigNumber = s),
          (n = function () {
            return s;
          }.call(t, r, t, e)),
          void 0 === n || (e.exports = n));
      })();
    },
    3924: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Struct = t.StructType = void 0));
      const n = r(2854),
        i = r(4515),
        s = r(3003);
      class StructType extends s.CustomType {
        constructor(e, t) {
          (super(e),
            (this.fieldsDefinitions = []),
            (this.fieldsDefinitions = t));
        }
        getClassName() {
          return StructType.ClassName;
        }
        static fromJSON(e) {
          let t = (e.fields || []).map((e) => i.FieldDefinition.fromJSON(e));
          return new StructType(e.name, t);
        }
        getFieldsDefinitions() {
          return this.fieldsDefinitions;
        }
        getFieldDefinition(e) {
          return this.fieldsDefinitions.find((t) => t.name == e);
        }
        getNamesOfDependencies() {
          return i.Fields.getNamesOfTypeDependencies(this.fieldsDefinitions);
        }
      }
      ((t.StructType = StructType), (StructType.ClassName = "StructType"));
      class Struct extends s.TypedValue {
        constructor(e, t) {
          (super(e),
            (this.fields = t),
            (this.fieldsByName = new Map(t.map((e) => [e.name, e]))),
            this.checkTyping());
        }
        getClassName() {
          return Struct.ClassName;
        }
        checkTyping() {
          let e = this.getType(),
            t = e.getFieldsDefinitions();
          i.Fields.checkTyping(this.fields, t);
        }
        getFields() {
          return this.fields;
        }
        getFieldValue(e) {
          let t = this.fieldsByName.get(e);
          if (t) return t.value.valueOf();
          throw new n.ErrMissingFieldOnStruct(e, this.getType().getName());
        }
        valueOf() {
          let e = {};
          for (const t of this.fields) e[t.name] = t.value.valueOf();
          return e;
        }
        equals(e) {
          if (!this.getType().equals(e.getType())) return !1;
          let t = this.getFields(),
            r = e.getFields();
          return i.Fields.equals(t, r);
        }
      }
      ((t.Struct = Struct), (Struct.ClassName = "Struct"));
    },
    3925: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BytesValue = t.BytesType = void 0));
        const n = r(3003);
        class BytesType extends n.PrimitiveType {
          constructor() {
            super("bytes");
          }
          getClassName() {
            return BytesType.ClassName;
          }
        }
        ((t.BytesType = BytesType), (BytesType.ClassName = "BytesType"));
        class BytesValue extends n.PrimitiveValue {
          constructor(e) {
            (super(new BytesType()), (this.value = e));
          }
          getClassName() {
            return BytesValue.ClassName;
          }
          static fromUTF8(t) {
            let r = e.from(t, "utf-8");
            return new BytesValue(r);
          }
          static fromHex(t) {
            let r = e.from(t, "hex");
            return new BytesValue(r);
          }
          getLength() {
            return this.value.length;
          }
          equals(e) {
            return (
              this.getLength() == e.getLength() && this.value.equals(e.value)
            );
          }
          valueOf() {
            return this.value;
          }
          toString() {
            return this.value.toString();
          }
        }
        ((t.BytesValue = BytesValue), (BytesValue.ClassName = "BytesValue"));
      }).call(this, r(2).Buffer);
    },
    4514: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ArgSerializer = t.ArgumentsSeparator = void 0));
        const n = r(6371),
          i = r(5420),
          s = r(5417),
          a = r(5419);
        t.ArgumentsSeparator = "@";
        const o = { codec: new n.BinaryCodec() };
        class ArgSerializer {
          constructor(e) {
            ((e = Object.assign(Object.assign({}, o), e)),
              (this.codec = e.codec));
          }
          stringToValues(e, t) {
            let r = this.stringToBuffers(e),
              n = this.buffersToValues(r, t);
            return n;
          }
          stringToBuffers(r) {
            return r.split(t.ArgumentsSeparator).map((t) => e.from(t, "hex"));
          }
          buffersToValues(e, t) {
            const r = this;
            e = e || [];
            let n = [],
              o = 0,
              u = e.length;
            for (let i = 0; i < t.length; i++) {
              let e = t[i],
                r = e.type,
                s = l(r);
              n.push(s);
            }
            function l(e) {
              if (e.hasExactClass(i.OptionalType.ClassName)) {
                let t = l(e.getFirstTypeParameter());
                return new i.OptionalValue(e, t);
              }
              if (e.hasExactClass(a.VariadicType.ClassName)) {
                let t = [];
                while (!d()) t.push(l(e.getFirstTypeParameter()));
                return new a.VariadicValue(e, t);
              }
              if (e.hasExactClass(s.CompositeType.ClassName)) {
                let t = [];
                for (const r of e.getTypeParameters()) t.push(l(r));
                return new s.CompositeValue(e, t);
              }
              {
                let t = c(e);
                return t;
              }
            }
            function c(t) {
              if (d()) return null;
              let n = e[o++],
                i = r.codec.decodeTopLevel(n, t);
              return i;
            }
            function d() {
              return o >= u;
            }
            return n;
          }
          valuesToString(e) {
            let r = this.valuesToStrings(e),
              n = r.join(t.ArgumentsSeparator),
              i = r.length;
            return { argumentsString: n, count: i };
          }
          valuesToStrings(e) {
            let t = this.valuesToBuffers(e),
              r = t.map((e) => e.toString("hex"));
            return r;
          }
          valuesToBuffers(e) {
            const t = this;
            let r = [];
            for (const i of e) n(i);
            function n(e) {
              if (e.hasExactClass(i.OptionalValue.ClassName)) {
                let t = e;
                t.isSet() && n(t.getTypedValue());
              } else if (e.hasExactClass(a.VariadicValue.ClassName)) {
                let t = e;
                for (const e of t.getItems()) n(e);
              } else if (e.hasExactClass(s.CompositeValue.ClassName)) {
                let t = e;
                for (const e of t.getItems()) n(e);
              } else {
                let n = t.codec.encodeTopLevel(e);
                r.push(n);
              }
            }
            return r;
          }
        }
        t.ArgSerializer = ArgSerializer;
      }).call(this, r(2).Buffer);
    },
    4515: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Fields = t.Field = t.FieldDefinition = void 0));
      const a = s(r(2854)),
        o = r(5414);
      class FieldDefinition {
        constructor(e, t, r) {
          ((this.name = e), (this.description = t), (this.type = r));
        }
        static fromJSON(e) {
          let t = new o.TypeExpressionParser().parse(e.type);
          return new FieldDefinition(e.name, e.description, t);
        }
      }
      t.FieldDefinition = FieldDefinition;
      class Field {
        constructor(e, t) {
          (void 0 === t && (t = ""), (this.value = e), (this.name = t));
        }
        checkTyping(e) {
          const t = this.value.getType();
          if (!t.equals(e.type))
            throw new a.ErrTypingSystem(
              `check type of field "${e.name}; expected: ${e.type}, actual: ${t}"`,
            );
          if (this.name != e.name)
            throw new a.ErrTypingSystem(`check name of field "${e.name}"`);
        }
        equals(e) {
          return this.name == e.name && this.value.equals(e.value);
        }
      }
      t.Field = Field;
      class Fields {
        static checkTyping(e, t) {
          if (e.length != t.length)
            throw new a.ErrTypingSystem(
              "fields length vs. field definitions length",
            );
          for (let r = 0; r < e.length; r++) {
            let n = e[r],
              i = t[r];
            n.checkTyping(i);
          }
        }
        static equals(e, t) {
          if (e.length != t.length) return !1;
          for (let r = 0; r < e.length; r++) {
            let n = e[r],
              i = t[r];
            if (!n.equals(i)) return !1;
          }
          return !0;
        }
        static getNamesOfTypeDependencies(e) {
          const t = [];
          for (const r of e)
            (t.push(r.type.getName()),
              t.push(...r.type.getNamesOfDependencies()));
          return [...new Set(t)];
        }
      }
      t.Fields = Fields;
    },
    4516: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TokenIdentifierValue = t.TokenIdentifierType = void 0));
      const n = r(3003),
        i = "EGLD";
      class TokenIdentifierType extends n.PrimitiveType {
        constructor() {
          super("TokenIdentifier");
        }
        getClassName() {
          return TokenIdentifierType.ClassName;
        }
      }
      ((t.TokenIdentifierType = TokenIdentifierType),
        (TokenIdentifierType.ClassName = "TokenIdentifierType"));
      class TokenIdentifierValue extends n.PrimitiveValue {
        constructor(e) {
          (super(new TokenIdentifierType()), (this.value = e));
        }
        static egld() {
          return new TokenIdentifierValue(i);
        }
        static esdtTokenIdentifier(e) {
          return new TokenIdentifierValue(e);
        }
        getClassName() {
          return TokenIdentifierValue.ClassName;
        }
        getLength() {
          return this.value.length;
        }
        equals(e) {
          return this.getLength() == e.getLength() && this.value == e.value;
        }
        valueOf() {
          return this.value;
        }
        toString() {
          return this.value.toString();
        }
      }
      ((t.TokenIdentifierValue = TokenIdentifierValue),
        (TokenIdentifierValue.ClassName = "TokenIdentifierValue"));
    },
    4740: function (e, t, r) {
      "use strict";
      var n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Logger = t.LogLevel = void 0),
        (function (e) {
          ((e[(e["Trace"] = 0)] = "Trace"),
            (e[(e["Debug"] = 1)] = "Debug"),
            (e[(e["Info"] = 2)] = "Info"),
            (e[(e["Warn"] = 3)] = "Warn"),
            (e[(e["Error"] = 4)] = "Error"),
            (e[(e["None"] = 5)] = "None"));
        })((n = t.LogLevel || (t.LogLevel = {}))));
      class Logger {
        static setLevel(e) {
          Logger.logLevel = e;
        }
        static trace(e) {
          if (!(Logger.logLevel >= n.Debug)) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            console.debug(e, r);
          }
        }
        static debug(e) {
          if (!(Logger.logLevel >= n.Debug)) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            console.debug(e, r);
          }
        }
        static info(e) {
          if (!(Logger.logLevel >= n.Info)) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            console.log(e, r);
          }
        }
        static warn(e) {
          if (!(Logger.logLevel >= n.Warn)) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            console.warn(e, r);
          }
        }
        static error(e) {
          if (!(Logger.logLevel >= n.Error)) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              r[i - 1] = arguments[i];
            console.error(e, r);
          }
        }
      }
      ((t.Logger = Logger), (Logger.logLevel = n.Debug));
    },
    4741: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ESDT_TRANSFER_VALUE =
          t.MULTI_ESDTNFT_TRANSFER_FUNCTION_NAME =
          t.ESDTNFT_TRANSFER_FUNCTION_NAME =
          t.ESDT_TRANSFER_FUNCTION_NAME =
          t.ESDT_TRANSFER_GAS_LIMIT =
          t.TRANSACTION_VERSION_TX_HASH_SIGN =
          t.TRANSACTION_VERSION_DEFAULT =
          t.TRANSACTION_OPTIONS_TX_HASH_SIGN =
          t.TRANSACTION_OPTIONS_DEFAULT =
          t.TRANSACTION_MIN_GAS_PRICE =
            void 0),
        (t.TRANSACTION_MIN_GAS_PRICE = 1e9),
        (t.TRANSACTION_OPTIONS_DEFAULT = 0),
        (t.TRANSACTION_OPTIONS_TX_HASH_SIGN = 1),
        (t.TRANSACTION_VERSION_DEFAULT = 1),
        (t.TRANSACTION_VERSION_TX_HASH_SIGN = 2),
        (t.ESDT_TRANSFER_GAS_LIMIT = 5e5),
        (t.ESDT_TRANSFER_FUNCTION_NAME = "ESDTTransfer"),
        (t.ESDTNFT_TRANSFER_FUNCTION_NAME = "ESDTNFTTransfer"),
        (t.MULTI_ESDTNFT_TRANSFER_FUNCTION_NAME = "MultiESDTNFTTransfer"),
        (t.ESDT_TRANSFER_VALUE = "0"));
    },
    4742: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  (void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
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
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return (i(t, e), t);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Signature = void 0));
        const a = s(r(2854)),
          o = 64;
        class Signature {
          constructor(t) {
            if (((this.valueHex = ""), t))
              return "string" === typeof t
                ? Signature.fromHex(t)
                : t instanceof e
                  ? Signature.fromBuffer(t)
                  : void 0;
          }
          static empty() {
            return new Signature();
          }
          static fromHex(e) {
            if (
              (e.startsWith("0x") && (e = e.slice(2)), !Signature.isValidHex(e))
            )
              throw new a.ErrSignatureCannotCreate(e);
            return Signature.fromValidHex(e);
          }
          static isValidHex(t) {
            return e.from(t, "hex").length == o;
          }
          static fromValidHex(e) {
            let t = new Signature();
            return ((t.valueHex = e), t);
          }
          static fromBuffer(e) {
            if (e.length != o) throw new a.ErrSignatureCannotCreate(e);
            return Signature.fromValidHex(e.toString("hex"));
          }
          hex() {
            return this.valueHex;
          }
        }
        t.Signature = Signature;
      }).call(this, r(2).Buffer);
    },
    4743: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EnumValue = t.EnumVariantDefinition = t.EnumType = void 0));
      const n = r(2854),
        i = r(3160),
        s = r(4515),
        a = r(3003),
        o = 256;
      class EnumType extends a.CustomType {
        constructor(e, t) {
          (super(e), (this.variants = []), (this.variants = t));
        }
        getClassName() {
          return EnumType.ClassName;
        }
        static fromJSON(e) {
          let t = (e.variants || []).map((e) =>
            EnumVariantDefinition.fromJSON(e),
          );
          return new EnumType(e.name, t);
        }
        getVariantByDiscriminant(e) {
          let t = this.variants.find((t) => t.discriminant == e);
          return (i.guardValueIsSet(`variant by discriminant (${e})`, t), t);
        }
        getVariantByName(e) {
          let t = this.variants.find((t) => t.name == e);
          return (i.guardValueIsSet(`variant by name (${e})`, t), t);
        }
        getNamesOfDependencies() {
          const e = [];
          for (const t of this.variants) e.push(...t.getNamesOfDependencies());
          return [...new Set(e)];
        }
      }
      ((t.EnumType = EnumType), (EnumType.ClassName = "EnumType"));
      class EnumVariantDefinition {
        constructor(e, t, r) {
          (void 0 === r && (r = []),
            (this.fieldsDefinitions = []),
            i.guardTrue(
              t < o,
              "discriminant for simple enum should be less than " + o,
            ),
            (this.name = e),
            (this.discriminant = t),
            (this.fieldsDefinitions = r));
        }
        static fromJSON(e) {
          let t = (e.fields || []).map((e) => s.FieldDefinition.fromJSON(e));
          return new EnumVariantDefinition(e.name, e.discriminant, t);
        }
        getFieldsDefinitions() {
          return this.fieldsDefinitions;
        }
        getFieldDefinition(e) {
          return this.fieldsDefinitions.find((t) => t.name == e);
        }
        getNamesOfDependencies() {
          return s.Fields.getNamesOfTypeDependencies(this.fieldsDefinitions);
        }
      }
      t.EnumVariantDefinition = EnumVariantDefinition;
      class EnumValue extends a.TypedValue {
        constructor(e, t, r) {
          (super(e),
            (this.fields = []),
            (this.name = t.name),
            (this.discriminant = t.discriminant),
            (this.fields = r),
            (this.fieldsByName = new Map(r.map((e) => [e.name, e]))));
          let n = t.getFieldsDefinitions();
          s.Fields.checkTyping(this.fields, n);
        }
        getClassName() {
          return EnumValue.ClassName;
        }
        static fromName(e, t) {
          let r = e.getVariantByName(t);
          return new EnumValue(e, r, []);
        }
        static fromDiscriminant(e, t) {
          let r = e.getVariantByDiscriminant(t);
          return new EnumValue(e, r, []);
        }
        equals(e) {
          if (!this.getType().equals(e.getType())) return !1;
          let t = this.getFields(),
            r = e.getFields();
          const n = this.name == e.name,
            i = this.discriminant == e.discriminant,
            a = s.Fields.equals(t, r);
          return n && i && a;
        }
        getFields() {
          return this.fields;
        }
        getFieldValue(e) {
          let t = this.fieldsByName.get(e);
          if (t) return t.value.valueOf();
          throw new n.ErrMissingFieldOnEnum(e, this.getType().getName());
        }
        valueOf() {
          let e = { name: this.name, fields: [] };
          return (
            this.fields.forEach((t) => (e.fields[t.name] = t.value.valueOf())),
            e
          );
        }
      }
      ((t.EnumValue = EnumValue), (EnumValue.ClassName = "EnumValue"));
    },
    4744: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressValue = t.AddressType = void 0));
      const n = r(3121),
        i = r(3003);
      class AddressType extends i.PrimitiveType {
        constructor() {
          super("Address");
        }
        getClassName() {
          return AddressType.ClassName;
        }
      }
      ((t.AddressType = AddressType), (AddressType.ClassName = "AddressType"));
      class AddressValue extends i.PrimitiveValue {
        constructor(e) {
          (super(new AddressType()), (this.value = new n.Address(e.bech32())));
        }
        getClassName() {
          return AddressValue.ClassName;
        }
        equals(e) {
          return this.value.equals(e.value);
        }
        valueOf() {
          return this.value;
        }
      }
      ((t.AddressValue = AddressValue),
        (AddressValue.ClassName = "AddressValue"));
    },
    4745: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.List = t.OptionValue = t.ListType = t.OptionType = void 0));
      const n = r(3160),
        i = r(6375),
        s = r(3003);
      class OptionType extends s.Type {
        constructor(e) {
          super("Option", [e]);
        }
        getClassName() {
          return OptionType.ClassName;
        }
        isAssignableFrom(e) {
          if (!e.hasExactClass(OptionType.ClassName)) return !1;
          let t = this.getFirstTypeParameter().equals(
              e.getFirstTypeParameter(),
            ),
            r = e.getFirstTypeParameter().hasExactClass(s.NullType.ClassName);
          return t || r;
        }
      }
      ((t.OptionType = OptionType), (OptionType.ClassName = "OptionType"));
      class ListType extends s.Type {
        constructor(e) {
          super("List", [e]);
        }
        getClassName() {
          return ListType.ClassName;
        }
      }
      ((t.ListType = ListType), (ListType.ClassName = "ListType"));
      class OptionValue extends s.TypedValue {
        constructor(e, t) {
          (void 0 === t && (t = null), super(e), (this.value = t));
        }
        getClassName() {
          return OptionValue.ClassName;
        }
        static newMissing() {
          let e = new OptionType(new s.NullType());
          return new OptionValue(e);
        }
        static newMissingTyped(e) {
          return new OptionValue(new OptionType(e));
        }
        static newProvided(e) {
          let t = new OptionType(e.getType());
          return new OptionValue(t, e);
        }
        isSet() {
          return !!this.value;
        }
        getTypedValue() {
          return (n.guardValueIsSet("value", this.value), this.value);
        }
        valueOf() {
          return this.value ? this.value.valueOf() : null;
        }
        equals(e) {
          var t;
          return (
            (null === (t = this.value) || void 0 === t
              ? void 0
              : t.equals(e.value)) || !1
          );
        }
      }
      ((t.OptionValue = OptionValue), (OptionValue.ClassName = "OptionValue"));
      class List extends s.TypedValue {
        constructor(e, t) {
          (super(e),
            (this.backingCollection = new i.CollectionOfTypedValues(t)));
        }
        getClassName() {
          return List.ClassName;
        }
        static fromItems(e) {
          if (0 == e.length) return new List(new s.TypePlaceholder(), []);
          let t = e[0].getType(),
            r = new ListType(t);
          return new List(r, e);
        }
        getLength() {
          return this.backingCollection.getLength();
        }
        getItems() {
          return this.backingCollection.getItems();
        }
        valueOf() {
          return this.backingCollection.valueOf();
        }
        equals(e) {
          return this.backingCollection.equals(e.backingCollection);
        }
      }
      ((t.List = List), (List.ClassName = "List"));
    },
    4746: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.H256Value = t.H256Type = void 0));
      const n = r(3003);
      class H256Type extends n.PrimitiveType {
        constructor() {
          super("H256");
        }
        getClassName() {
          return H256Type.ClassName;
        }
      }
      ((t.H256Type = H256Type), (H256Type.ClassName = "H256Type"));
      class H256Value extends n.PrimitiveValue {
        constructor(e) {
          (super(new H256Type()), (this.value = e));
        }
        getClassName() {
          return H256Value.ClassName;
        }
        equals(e) {
          return this.value.equals(e.value);
        }
        valueOf() {
          return this.value;
        }
      }
      ((t.H256Value = H256Value), (H256Value.ClassName = "H256Value"));
    },
    4747: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ContractFunction = void 0));
      const a = s(r(2854));
      class ContractFunction {
        constructor(e) {
          if (((this.name = e), null == e))
            throw new a.ErrInvalidFunctionName();
        }
        static none() {
          return new ContractFunction("untitled");
        }
        toString() {
          return this.name;
        }
        valueOf() {
          return this.name;
        }
        equals(e) {
          return !!e && this.name == e.name;
        }
      }
      t.ContractFunction = ContractFunction;
    },
    5413: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ContractCallPayloadBuilder =
          t.ContractUpgradePayloadBuilder =
          t.ContractDeployPayloadBuilder =
          t.ArwenVirtualMachine =
            void 0));
      const n = r(3806),
        i = r(3160),
        s = r(4514);
      t.ArwenVirtualMachine = "0500";
      class ContractDeployPayloadBuilder {
        constructor() {
          ((this.code = null), (this.codeMetadata = ""), (this.arguments = []));
        }
        setCode(e) {
          return ((this.code = e), this);
        }
        setCodeMetadata(e) {
          return ((this.codeMetadata = e), this);
        }
        addInitArg(e) {
          return (this.arguments.push(e), this);
        }
        setInitArgs(e) {
          return ((this.arguments = e), this);
        }
        build() {
          i.guardValueIsSet("code", this.code);
          let e = this.code.toString(),
            r = this.codeMetadata.toString(),
            s = `${e}@${t.ArwenVirtualMachine}@${r}`;
          return ((s = a(s, this.arguments)), new n.TransactionPayload(s));
        }
      }
      t.ContractDeployPayloadBuilder = ContractDeployPayloadBuilder;
      class ContractUpgradePayloadBuilder {
        constructor() {
          ((this.code = null), (this.codeMetadata = ""), (this.arguments = []));
        }
        setCode(e) {
          return ((this.code = e), this);
        }
        setCodeMetadata(e) {
          return ((this.codeMetadata = e), this);
        }
        addInitArg(e) {
          return (this.arguments.push(e), this);
        }
        setInitArgs(e) {
          return ((this.arguments = e), this);
        }
        build() {
          i.guardValueIsSet("code", this.code);
          let e = this.code.toString(),
            t = this.codeMetadata.toString(),
            r = `upgradeContract@${e}@${t}`;
          return ((r = a(r, this.arguments)), new n.TransactionPayload(r));
        }
      }
      t.ContractUpgradePayloadBuilder = ContractUpgradePayloadBuilder;
      class ContractCallPayloadBuilder {
        constructor() {
          ((this.contractFunction = null), (this.arguments = []));
        }
        setFunction(e) {
          return ((this.contractFunction = e), this);
        }
        addArg(e) {
          return (this.arguments.push(e), this);
        }
        setArgs(e) {
          return ((this.arguments = e), this);
        }
        build() {
          i.guardValueIsSet("calledFunction", this.contractFunction);
          let e = this.contractFunction.name;
          return ((e = a(e, this.arguments)), new n.TransactionPayload(e));
        }
      }
      function a(e, t) {
        let { argumentsString: r, count: n } =
          new s.ArgSerializer().valuesToString(t);
        return 0 == n ? e : `${e}@${r}`;
      }
      t.ContractCallPayloadBuilder = ContractCallPayloadBuilder;
    },
    5414: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TypeExpressionParser = void 0));
      const a = s(r(2854)),
        o = r(3003);
      var u = r(8954);
      class TypeExpressionParser {
        parse(e) {
          let t = this.doParse(e),
            r = Object.keys(t);
          if (1 != r.length)
            throw new a.ErrTypingSystem("bad type expression: " + e);
          let n = r[0],
            i = this.nodeToType(n, t[n]);
          return i;
        }
        doParse(e) {
          let t = this.getJsonedString(e);
          try {
            return u.parse(t);
          } catch (r) {
            throw new a.ErrTypingSystem(
              `cannot parse type expression: ${e}. internal json: ${t}.`,
            );
          }
        }
        getJsonedString(e) {
          let t = "";
          for (var r = 0; r < e.length; r++) {
            let n = e.charAt(r),
              i = e.charAt(r - 1),
              s = e.charAt(r + 1);
            "<" == n
              ? (t += ": {")
              : ">" == n
                ? (t += ">" != i ? ": {} }" : "}")
                : "," == n
                  ? ">" == s || (t += ">" == i ? "," : ": {},")
                  : (t += n);
          }
          let n = /(:|\{|\}|,|\s)/,
            i = t
              .replace(/utf\-8\sstring/gi, "utf-8-string")
              .split(n)
              .filter((e) => e);
          return (
            (t = i
              .map((e) => (n.test(e) ? e : `"${e}"`))
              .map((e) => e.replace(/utf\-8\-string/gi, "utf-8 string"))
              .join("")),
            1 == i.length ? `{${t}: {}}` : `{${t}}`
          );
        }
        nodeToType(e, t) {
          "1" === e.charAt(e.length - 1) && (e = e.slice(0, -1));
          let r = Object.keys(t).map((e) => this.nodeToType(e, t[e]));
          return new o.Type(e, r);
        }
      }
      t.TypeExpressionParser = TypeExpressionParser;
    },
    5415: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EndpointParameterDefinition =
          t.EndpointModifiers =
          t.EndpointDefinition =
            void 0));
      const n = r(5414),
        i = "?",
        s = "N / A";
      class EndpointDefinition {
        constructor(e, t, r, n) {
          ((this.input = []),
            (this.output = []),
            (this.name = e),
            (this.input = t || []),
            (this.output = r || []),
            (this.modifiers = n));
        }
        isConstructor() {
          return "constructor" == this.name;
        }
        static fromJSON(e) {
          ((e.name = null == e.name ? i : e.name),
            (e.payableInTokens = e.payableInTokens || []),
            (e.inputs = e.inputs || []),
            (e.outputs = e.outputs || []));
          let t = e.inputs.map((e) => EndpointParameterDefinition.fromJSON(e)),
            r = e.outputs.map((e) => EndpointParameterDefinition.fromJSON(e)),
            n = new EndpointModifiers(e.mutability, e.payableInTokens);
          return new EndpointDefinition(e.name, t, r, n);
        }
      }
      t.EndpointDefinition = EndpointDefinition;
      class EndpointModifiers {
        constructor(e, t) {
          ((this.mutability = e || ""), (this.payableInTokens = t || []));
        }
        isPayableInEGLD() {
          return this.isPayableInToken("EGLD");
        }
        isPayableInToken(e) {
          return (
            !!this.payableInTokens.includes(e) ||
            (!this.payableInTokens.includes("!" + e) &&
              !!this.payableInTokens.includes("*"))
          );
        }
        isPayable() {
          return 0 != this.payableInTokens.length;
        }
        isReadonly() {
          return "readonly" == this.mutability;
        }
      }
      t.EndpointModifiers = EndpointModifiers;
      class EndpointParameterDefinition {
        constructor(e, t, r) {
          ((this.name = e), (this.description = t), (this.type = r));
        }
        static fromJSON(e) {
          let t = new n.TypeExpressionParser().parse(e.type);
          return new EndpointParameterDefinition(
            e.name || i,
            e.description || s,
            t,
          );
        }
      }
      t.EndpointParameterDefinition = EndpointParameterDefinition;
    },
    5416: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BooleanValue = t.BooleanType = void 0));
      const n = r(3003);
      class BooleanType extends n.PrimitiveType {
        constructor() {
          super("bool");
        }
        getClassName() {
          return BooleanType.ClassName;
        }
      }
      ((t.BooleanType = BooleanType), (BooleanType.ClassName = "BooleanType"));
      class BooleanValue extends n.PrimitiveValue {
        constructor(e) {
          (super(new BooleanType()), (this.value = e));
        }
        getClassName() {
          return BooleanValue.ClassName;
        }
        equals(e) {
          return this.value === e.value;
        }
        isTrue() {
          return !0 === this.value;
        }
        isFalse() {
          return !this.isTrue();
        }
        valueOf() {
          return this.value;
        }
      }
      ((t.BooleanValue = BooleanValue),
        (BooleanValue.ClassName = "BooleanValue"));
    },
    5417: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CompositeValue = t.CompositeType = void 0));
      const n = r(3160),
        i = r(3003);
      class CompositeType extends i.Type {
        constructor() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          super("Composite", t, i.TypeCardinality.variable(t.length));
        }
        getClassName() {
          return CompositeType.ClassName;
        }
      }
      ((t.CompositeType = CompositeType),
        (CompositeType.ClassName = "CompositeType"));
      class CompositeValue extends i.TypedValue {
        constructor(e, t) {
          (super(e),
            n.guardLength(t, e.getTypeParameters().length),
            (this.items = t));
        }
        getClassName() {
          return CompositeValue.ClassName;
        }
        static fromItems() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          let n = t.map((e) => e.getType()),
            i = new CompositeType(...n);
          return new CompositeValue(i, t);
        }
        getItems() {
          return this.items;
        }
        valueOf() {
          return this.items.map((e) =>
            null === e || void 0 === e ? void 0 : e.valueOf(),
          );
        }
        equals(e) {
          if (this.getType().differs(e.getType())) return !1;
          for (let t = 0; t < this.items.length; t++) {
            let r = this.items[t],
              n = e.items[t];
            if (!r.equals(n)) return !1;
          }
          return !0;
        }
      }
      ((t.CompositeValue = CompositeValue),
        (CompositeValue.ClassName = "CompositeValue"));
    },
    5418: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BigIntValue =
          t.BigUIntValue =
          t.I64Value =
          t.U64Value =
          t.I32Value =
          t.U32Value =
          t.I16Value =
          t.U16Value =
          t.I8Value =
          t.U8Value =
          t.NumericalValue =
          t.BigIntType =
          t.BigUIntType =
          t.I64Type =
          t.U64Type =
          t.I32Type =
          t.U32Type =
          t.I16Type =
          t.U16Type =
          t.I8Type =
          t.U8Type =
          t.NumericalType =
            void 0));
      const o = s(r(2854)),
        u = r(3003),
        l = a(r(3219));
      class NumericalType extends u.PrimitiveType {
        constructor(e, t, r) {
          (super(e), (this.sizeInBytes = t), (this.withSign = r));
        }
        getClassName() {
          return NumericalType.ClassName;
        }
        hasFixedSize() {
          return !!this.sizeInBytes;
        }
        hasArbitrarySize() {
          return !this.hasFixedSize();
        }
      }
      ((t.NumericalType = NumericalType),
        (NumericalType.ClassName = "NumericalType"));
      class U8Type extends NumericalType {
        constructor() {
          super("u8", 1, !1);
        }
        getClassName() {
          return U8Type.ClassName;
        }
      }
      ((t.U8Type = U8Type), (U8Type.ClassName = "U8Type"));
      class I8Type extends NumericalType {
        constructor() {
          super("i8", 1, !0);
        }
        getClassName() {
          return I8Type.ClassName;
        }
      }
      ((t.I8Type = I8Type), (I8Type.ClassName = "I8Type"));
      class U16Type extends NumericalType {
        constructor() {
          super("u16", 2, !1);
        }
        getClassName() {
          return U16Type.ClassName;
        }
      }
      ((t.U16Type = U16Type), (U16Type.ClassName = "U16Type"));
      class I16Type extends NumericalType {
        constructor() {
          super("i16", 2, !0);
        }
        getClassName() {
          return I16Type.ClassName;
        }
      }
      ((t.I16Type = I16Type), (I16Type.ClassName = "I16Type"));
      class U32Type extends NumericalType {
        constructor() {
          super("u32", 4, !1);
        }
        getClassName() {
          return U32Type.ClassName;
        }
      }
      ((t.U32Type = U32Type), (U32Type.ClassName = "U32Type"));
      class I32Type extends NumericalType {
        constructor() {
          super("i32", 4, !0);
        }
        getClassName() {
          return I32Type.ClassName;
        }
      }
      ((t.I32Type = I32Type), (I32Type.ClassName = "I32Type"));
      class U64Type extends NumericalType {
        constructor() {
          super("u64", 8, !1);
        }
        getClassName() {
          return U64Type.ClassName;
        }
      }
      ((t.U64Type = U64Type), (U64Type.ClassName = "U64Type"));
      class I64Type extends NumericalType {
        constructor() {
          super("i64", 8, !0);
        }
        getClassName() {
          return I64Type.ClassName;
        }
      }
      ((t.I64Type = I64Type), (I64Type.ClassName = "I64Type"));
      class BigUIntType extends NumericalType {
        constructor() {
          super("BigUint", 0, !1);
        }
        getClassName() {
          return BigUIntType.ClassName;
        }
      }
      ((t.BigUIntType = BigUIntType), (BigUIntType.ClassName = "BigUIntType"));
      class BigIntType extends NumericalType {
        constructor() {
          super("Bigint", 0, !0);
        }
        getClassName() {
          return BigIntType.ClassName;
        }
      }
      ((t.BigIntType = BigIntType), (BigIntType.ClassName = "BigIntType"));
      class NumericalValue extends u.PrimitiveValue {
        constructor(e, t) {
          if (
            (super(e),
            (this.value = new l.default(t)),
            (this.sizeInBytes = e.sizeInBytes),
            (this.withSign = e.withSign),
            this.value.isNaN())
          )
            throw new o.ErrInvalidArgument("not a number: " + t);
          if (!this.withSign && this.value.isNegative())
            throw new o.ErrInvalidArgument(
              "negative, but type is unsigned: " + t,
            );
        }
        getClassName() {
          return NumericalValue.ClassName;
        }
        equals(e) {
          return this.value.isEqualTo(e.value);
        }
        valueOf() {
          return this.value;
        }
        toString() {
          return this.value.toString();
        }
      }
      ((t.NumericalValue = NumericalValue),
        (NumericalValue.ClassName = "NumericalValue"));
      class U8Value extends NumericalValue {
        constructor(e) {
          super(new U8Type(), new l.default(e));
        }
        getClassName() {
          return U8Value.ClassName;
        }
      }
      ((t.U8Value = U8Value), (U8Value.ClassName = "U8Value"));
      class I8Value extends NumericalValue {
        constructor(e) {
          super(new I8Type(), new l.default(e));
        }
        getClassName() {
          return I8Value.ClassName;
        }
      }
      ((t.I8Value = I8Value), (I8Value.ClassName = "I8Value"));
      class U16Value extends NumericalValue {
        constructor(e) {
          super(new U16Type(), new l.default(e));
        }
        getClassName() {
          return U16Value.ClassName;
        }
      }
      ((t.U16Value = U16Value), (U16Value.ClassName = "U16Value"));
      class I16Value extends NumericalValue {
        constructor(e) {
          super(new I16Type(), new l.default(e));
        }
        getClassName() {
          return I16Value.ClassName;
        }
      }
      ((t.I16Value = I16Value), (I16Value.ClassName = "I16Value"));
      class U32Value extends NumericalValue {
        constructor(e) {
          super(new U32Type(), new l.default(e));
        }
        getClassName() {
          return U32Value.ClassName;
        }
      }
      ((t.U32Value = U32Value), (U32Value.ClassName = "U32Value"));
      class I32Value extends NumericalValue {
        constructor(e) {
          super(new I32Type(), new l.default(e));
        }
        getClassName() {
          return I32Value.ClassName;
        }
      }
      ((t.I32Value = I32Value), (I32Value.ClassName = "I32Value"));
      class U64Value extends NumericalValue {
        constructor(e) {
          super(new U64Type(), e);
        }
        getClassName() {
          return U64Value.ClassName;
        }
      }
      ((t.U64Value = U64Value), (U64Value.ClassName = "U64Value"));
      class I64Value extends NumericalValue {
        constructor(e) {
          super(new I64Type(), e);
        }
        getClassName() {
          return I64Value.ClassName;
        }
      }
      ((t.I64Value = I64Value), (I64Value.ClassName = "I64Value"));
      class BigUIntValue extends NumericalValue {
        constructor(e) {
          super(new BigUIntType(), e);
        }
        getClassName() {
          return BigUIntValue.ClassName;
        }
      }
      ((t.BigUIntValue = BigUIntValue),
        (BigUIntValue.ClassName = "BigUIntValue"));
      class BigIntValue extends NumericalValue {
        constructor(e) {
          super(new BigIntType(), e);
        }
        getClassName() {
          return BigIntValue.ClassName;
        }
      }
      ((t.BigIntValue = BigIntValue), (BigIntValue.ClassName = "BigIntValue"));
    },
    5419: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.VariadicValue = t.VariadicType = void 0));
      const n = r(3003);
      class VariadicType extends n.Type {
        constructor(e) {
          super("Variadic", [e], n.TypeCardinality.variable());
        }
        getClassName() {
          return VariadicType.ClassName;
        }
      }
      ((t.VariadicType = VariadicType),
        (VariadicType.ClassName = "VariadicType"));
      class VariadicValue extends n.TypedValue {
        constructor(e, t) {
          (super(e), (this.items = t));
        }
        getClassName() {
          return VariadicValue.ClassName;
        }
        static fromItems() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (0 == t.length)
            return new VariadicValue(
              new VariadicType(new n.TypePlaceholder()),
              [],
            );
          let i = t[0].getType();
          return new VariadicValue(new VariadicType(i), t);
        }
        getItems() {
          return this.items;
        }
        valueOf() {
          return this.items.map((e) => e.valueOf());
        }
        equals(e) {
          if (this.getType().differs(e.getType())) return !1;
          for (let t = 0; t < this.items.length; t++) {
            let r = this.items[t],
              n = e.items[t];
            if (!r.equals(n)) return !1;
          }
          return !0;
        }
      }
      ((t.VariadicValue = VariadicValue),
        (VariadicValue.ClassName = "VariadicValue"));
    },
    5420: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.OptionalValue = t.OptionalType = void 0));
      const n = r(3160),
        i = r(3003);
      class OptionalType extends i.Type {
        constructor(e) {
          super("Optional", [e], i.TypeCardinality.variable(1));
        }
        getClassName() {
          return OptionalType.ClassName;
        }
        isAssignableFrom(e) {
          if (!e.hasExactClass(OptionalType.ClassName)) return !1;
          let t = this.getFirstTypeParameter().equals(
              e.getFirstTypeParameter(),
            ),
            r = e.getFirstTypeParameter().hasExactClass(i.NullType.ClassName);
          return t || r;
        }
      }
      ((t.OptionalType = OptionalType),
        (OptionalType.ClassName = "OptionalType"));
      class OptionalValue extends i.TypedValue {
        constructor(e, t) {
          (void 0 === t && (t = null), super(e), (this.value = t));
        }
        getClassName() {
          return OptionalValue.ClassName;
        }
        static newMissing() {
          let e = new OptionalType(new i.NullType());
          return new OptionalValue(e);
        }
        isSet() {
          return !!this.value;
        }
        getTypedValue() {
          return (n.guardValueIsSet("value", this.value), this.value);
        }
        valueOf() {
          return this.value ? this.value.valueOf() : null;
        }
        equals(e) {
          var t;
          return (
            (null === (t = this.value) || void 0 === t
              ? void 0
              : t.equals(e.value)) || !1
          );
        }
      }
      ((t.OptionalValue = OptionalValue),
        (OptionalValue.ClassName = "OptionalValue"));
    },
    5421: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ArrayVec = t.ArrayVecType = void 0));
      const n = r(3160),
        i = r(6375),
        s = r(3003);
      class ArrayVecType extends s.Type {
        constructor(e, t) {
          (super("Array", [t]),
            n.guardTrue(e > 0, "array length > 0"),
            (this.length = e));
        }
        getClassName() {
          return ArrayVecType.ClassName;
        }
      }
      ((t.ArrayVecType = ArrayVecType),
        (ArrayVecType.ClassName = "ArrayVecType"));
      class ArrayVec extends s.TypedValue {
        constructor(e, t) {
          (super(e),
            n.guardLength(t, e.length),
            (this.backingCollection = new i.CollectionOfTypedValues(t)));
        }
        getClassName() {
          return ArrayVec.ClassName;
        }
        getLength() {
          return this.backingCollection.getLength();
        }
        getItems() {
          return this.backingCollection.getItems();
        }
        valueOf() {
          return this.backingCollection.valueOf();
        }
        equals(e) {
          return this.backingCollection.equals(e.backingCollection);
        }
      }
      ((t.ArrayVec = ArrayVec), (ArrayVec.ClassName = "ArrayVec"));
    },
    5422: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StringValue = t.StringType = void 0));
        const n = r(3003);
        class StringType extends n.PrimitiveType {
          constructor() {
            super("utf-8 string");
          }
          getClassName() {
            return StringType.ClassName;
          }
        }
        ((t.StringType = StringType), (StringType.ClassName = "StringType"));
        class StringValue extends n.PrimitiveValue {
          constructor(e) {
            (super(new StringType()), (this.value = e));
          }
          getClassName() {
            return StringValue.ClassName;
          }
          static fromUTF8(e) {
            return new StringValue(e);
          }
          static fromHex(t) {
            let r = e.from(t, "hex").toString();
            return new StringValue(r);
          }
          getLength() {
            return this.value.length;
          }
          equals(e) {
            return this.value === e.value;
          }
          valueOf() {
            return this.value;
          }
        }
        ((t.StringValue = StringValue),
          (StringValue.ClassName = "StringValue"));
      }).call(this, r(2).Buffer);
    },
    5423: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Tuple = t.TupleType = void 0));
      const a = s(r(2854)),
        o = r(3924),
        u = r(4515),
        l = r(3924);
      class TupleType extends l.StructType {
        constructor() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          super(TupleType.prepareName(t), TupleType.prepareFieldDefinitions(t));
        }
        getClassName() {
          return TupleType.ClassName;
        }
        static prepareName(e) {
          let t = e.map((e) => e.toString()).join(", "),
            r = `tuple${t.length}<${t}>`;
          return r;
        }
        static prepareFieldDefinitions(e) {
          let t = e.map(
            (e, t) => new u.FieldDefinition(c(t), "anonymous tuple field", e),
          );
          return t;
        }
      }
      function c(e) {
        return "field" + e;
      }
      ((t.TupleType = TupleType), (TupleType.ClassName = "TupleType"));
      class Tuple extends o.Struct {
        constructor(e, t) {
          super(e, t);
        }
        getClassName() {
          return Tuple.ClassName;
        }
        static fromItems(e) {
          if (e.length < 1) throw new a.ErrTypingSystem("bad tuple items");
          let t = e.map((e) => e.getType()),
            r = new TupleType(...t),
            n = e.map((e, t) => new u.Field(e, c(t)));
          return new Tuple(r, n);
        }
      }
      ((t.Tuple = Tuple), (Tuple.ClassName = "Tuple"));
    },
    5424: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NothingValue = t.NothingType = void 0));
      const n = r(3003);
      class NothingType extends n.PrimitiveType {
        constructor() {
          super("nothing");
        }
        getClassName() {
          return NothingType.ClassName;
        }
      }
      ((t.NothingType = NothingType), (NothingType.ClassName = "NothingType"));
      class NothingValue extends n.PrimitiveValue {
        constructor() {
          super(new NothingType());
        }
        getClassName() {
          return NothingValue.ClassName;
        }
        equals(e) {
          return !1;
        }
        valueOf() {
          return {};
        }
      }
      ((t.NothingValue = NothingValue),
        (NothingValue.ClassName = "NothingValue"));
    },
    5425: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.prependByteToBuffer =
            t.flipBufferBitsInPlace =
            t.getHexMagnitudeOfBigInt =
            t.bigIntToBuffer =
            t.bufferToBigInt =
            t.cloneBuffer =
            t.isMsbZero =
            t.isMsbOne =
              void 0));
        const i = n(r(3219)),
          s = r(6376);
        function a(e, t) {
          void 0 === t && (t = 0);
          let r = e[t],
            n = r >> 7,
            i = 1 == n;
          return i;
        }
        function o(e, t) {
          return (void 0 === t && (t = 0), !a(e, t));
        }
        function u(t) {
          let r = e.alloc(t.length);
          return (t.copy(r), r);
        }
        function l(e) {
          let t = e.toString("hex");
          return new i.default("0x" + t, 16);
        }
        function c(t) {
          let r = d(t);
          return e.from(r, "hex");
        }
        function d(e) {
          return e
            ? (e.isNegative() && (e = e.multipliedBy(new i.default(-1))),
              s.numberToPaddedHex(e))
            : "";
        }
        function f(e) {
          for (let t = 0; t < e.length; t++) e[t] = ~e[t];
        }
        function p(t, r) {
          return e.concat([e.from([r]), t]);
        }
        ((t.isMsbOne = a),
          (t.isMsbZero = o),
          (t.cloneBuffer = u),
          (t.bufferToBigInt = l),
          (t.bigIntToBuffer = c),
          (t.getHexMagnitudeOfBigInt = d),
          (t.flipBufferBitsInPlace = f),
          (t.prependByteToBuffer = p));
      }).call(this, r(2).Buffer);
    },
    5426: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SizeOfU32 = void 0),
        (t.SizeOfU32 = 4));
    },
    5427: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BytesBinaryCodec = void 0));
        const n = r(3925),
          i = r(5426);
        class BytesBinaryCodec {
          decodeNested(e) {
            let t = e.readUInt32BE(0),
              r = e.slice(i.SizeOfU32, i.SizeOfU32 + t),
              s = new n.BytesValue(r);
            return [s, i.SizeOfU32 + t];
          }
          decodeTopLevel(e) {
            return new n.BytesValue(e);
          }
          encodeNested(t) {
            let r = e.alloc(i.SizeOfU32);
            r.writeUInt32BE(t.getLength());
            let n = e.concat([r, t.valueOf()]);
            return n;
          }
          encodeTopLevel(e) {
            return e.valueOf();
          }
        }
        t.BytesBinaryCodec = BytesBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    5428: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(8980), t),
        i(r(4514), t),
        i(r(8981), t),
        i(r(6371), t),
        i(r(6381), t),
        i(r(4747), t),
        i(r(6382), t),
        i(r(6383), t),
        i(r(8982), t),
        i(r(6384), t),
        i(r(5429), t),
        i(r(8984), t),
        i(r(6385), t),
        i(r(8987), t),
        i(r(5413), t),
        i(r(3002), t));
    },
    5429: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Query = void 0));
      const n = r(3121),
        i = r(4514);
      class Query {
        constructor(e) {
          ((this.caller = e.caller || new n.Address()),
            (this.address = e.address),
            (this.func = e.func),
            (this.args = e.args || []),
            (this.value = e.value || 0));
        }
        getEncodedArguments() {
          return new i.ArgSerializer().valuesToStrings(this.args);
        }
      }
      t.Query = Query;
    },
    6369: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AsyncTimer = void 0));
      const a = s(r(2854)),
        o = r(2854),
        u = r(4740);
      class AsyncTimer {
        constructor(e) {
          ((this.timeoutHandle = null),
            (this.rejectionFunc = null),
            (this.name = e),
            (this.correlationTag = 0));
        }
        start(e) {
          if (this.timeoutHandle) throw new a.ErrAsyncTimerAlreadyRunning();
          return (
            this.correlationTag++,
            u.Logger.trace(
              `AsyncTimer[${this.name}'${this.correlationTag}].start()`,
            ),
            new Promise((t, r) => {
              this.rejectionFunc = r;
              let n = () => {
                ((this.rejectionFunc = null), this.stop(), t());
              };
              this.timeoutHandle = setTimeout(n, e);
            })
          );
        }
        abort() {
          (u.Logger.trace(
            `AsyncTimer[${this.name}'${this.correlationTag}].abort()`,
          ),
            this.rejectionFunc &&
              (this.rejectionFunc(new o.ErrAsyncTimerAborted()),
              (this.rejectionFunc = null)),
            this.stop());
        }
        stop() {
          this.isStopped() ||
            (u.Logger.trace(
              `AsyncTimer[${this.name}'${this.correlationTag}].stop()`,
            ),
            this.timeoutHandle &&
              (clearTimeout(this.timeoutHandle), (this.timeoutHandle = null)));
        }
        isStopped() {
          return !this.timeoutHandle;
        }
      }
      t.AsyncTimer = AsyncTimer;
    },
    6370: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionOptions = t.TransactionVersion = void 0));
      const a = s(r(2854)),
        o = r(4741);
      class TransactionVersion {
        constructor(e) {
          if (((e = Number(e)), e < 1))
            throw new a.ErrTransactionVersionInvalid(e);
          this.value = e;
        }
        static withDefaultVersion() {
          return new TransactionVersion(o.TRANSACTION_VERSION_DEFAULT);
        }
        static withTxHashSignVersion() {
          return new TransactionVersion(o.TRANSACTION_VERSION_TX_HASH_SIGN);
        }
        valueOf() {
          return this.value;
        }
      }
      t.TransactionVersion = TransactionVersion;
      class TransactionOptions {
        constructor(e) {
          if (((e = Number(e)), e < 0))
            throw new a.ErrTransactionOptionsInvalid(e);
          this.value = e;
        }
        static withDefaultOptions() {
          return new TransactionOptions(o.TRANSACTION_OPTIONS_DEFAULT);
        }
        static withTxHashSignOptions() {
          return new TransactionOptions(o.TRANSACTION_OPTIONS_TX_HASH_SIGN);
        }
        valueOf() {
          return this.value;
        }
      }
      t.TransactionOptions = TransactionOptions;
    },
    6371: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(6372), t),
        i(r(8972), t));
    },
    6372: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BinaryCodecConstraints = t.BinaryCodec = void 0));
      const a = s(r(2854)),
        o = r(3002),
        u = r(3160),
        l = r(8959),
        c = r(8960),
        d = r(8968),
        f = r(6377),
        p = r(8969),
        h = r(8970),
        g = r(8971);
      class BinaryCodec {
        constructor(e) {
          (void 0 === e && (e = null),
            (this.constraints = e || new BinaryCodecConstraints()),
            (this.optionCodec = new l.OptionValueBinaryCodec(this)),
            (this.listCodec = new d.ListBinaryCodec(this)),
            (this.arrayCodec = new g.ArrayVecBinaryCodec(this)),
            (this.primitiveCodec = new c.PrimitiveBinaryCodec(this)),
            (this.structCodec = new f.StructBinaryCodec(this)),
            (this.tupleCodec = new h.TupleBinaryCodec(this)),
            (this.enumCodec = new p.EnumBinaryCodec(this)));
        }
        decodeTopLevel(e, t) {
          this.constraints.checkBufferLength(e);
          let r = o.onTypeSelect(t, {
            onOption: () =>
              this.optionCodec.decodeTopLevel(e, t.getFirstTypeParameter()),
            onList: () => this.listCodec.decodeTopLevel(e, t),
            onArray: () => this.arrayCodec.decodeTopLevel(e, t),
            onPrimitive: () => this.primitiveCodec.decodeTopLevel(e, t),
            onStruct: () => this.structCodec.decodeTopLevel(e, t),
            onTuple: () => this.tupleCodec.decodeTopLevel(e, t),
            onEnum: () => this.enumCodec.decodeTopLevel(e, t),
          });
          return r;
        }
        decodeNested(e, t) {
          this.constraints.checkBufferLength(e);
          let [r, n] = o.onTypeSelect(t, {
            onOption: () =>
              this.optionCodec.decodeNested(e, t.getFirstTypeParameter()),
            onList: () => this.listCodec.decodeNested(e, t),
            onArray: () => this.arrayCodec.decodeNested(e, t),
            onPrimitive: () => this.primitiveCodec.decodeNested(e, t),
            onStruct: () => this.structCodec.decodeNested(e, t),
            onTuple: () => this.tupleCodec.decodeNested(e, t),
            onEnum: () => this.enumCodec.decodeNested(e, t),
          });
          return [r, n];
        }
        encodeNested(e) {
          return (
            u.guardTrue(
              e.getType().getCardinality().isSingular(),
              "singular cardinality, thus encodable type",
            ),
            o.onTypedValueSelect(e, {
              onPrimitive: () => this.primitiveCodec.encodeNested(e),
              onOption: () => this.optionCodec.encodeNested(e),
              onList: () => this.listCodec.encodeNested(e),
              onArray: () => this.arrayCodec.encodeNested(e),
              onStruct: () => this.structCodec.encodeNested(e),
              onTuple: () => this.tupleCodec.encodeNested(e),
              onEnum: () => this.enumCodec.encodeNested(e),
            })
          );
        }
        encodeTopLevel(e) {
          return (
            u.guardTrue(
              e.getType().getCardinality().isSingular(),
              "singular cardinality, thus encodable type",
            ),
            o.onTypedValueSelect(e, {
              onPrimitive: () => this.primitiveCodec.encodeTopLevel(e),
              onOption: () => this.optionCodec.encodeTopLevel(e),
              onList: () => this.listCodec.encodeTopLevel(e),
              onArray: () => this.arrayCodec.encodeTopLevel(e),
              onStruct: () => this.structCodec.encodeTopLevel(e),
              onTuple: () => this.tupleCodec.encodeTopLevel(e),
              onEnum: () => this.enumCodec.encodeTopLevel(e),
            })
          );
        }
      }
      t.BinaryCodec = BinaryCodec;
      class BinaryCodecConstraints {
        constructor(e) {
          ((this.maxBufferLength =
            (null === e || void 0 === e ? void 0 : e.maxBufferLength) || 40960),
            (this.maxListLength =
              (null === e || void 0 === e ? void 0 : e.maxListLength) || 8192));
        }
        checkBufferLength(e) {
          if (e.length > this.maxBufferLength)
            throw new a.ErrCodec(
              `Buffer too large: ${e.length} > ${this.maxBufferLength}`,
            );
        }
        checkListLength(e) {
          if (e > this.maxListLength)
            throw new a.ErrCodec(
              `List too large: ${e} > ${this.maxListLength}`,
            );
        }
      }
      t.BinaryCodecConstraints = BinaryCodecConstraints;
    },
    6373: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ContractInterface = void 0));
      const n = r(3160),
        i = r(5415),
        s = "?";
      class ContractInterface {
        constructor(e, t, r) {
          ((this.endpoints = []),
            (this.name = e),
            (this.constructorDefinition = t),
            (this.endpoints = r));
        }
        static fromJSON(e) {
          ((e.name = e.name || s), (e.endpoints = e.endpoints || []));
          let t = a(e),
            r = e.endpoints.map((e) => i.EndpointDefinition.fromJSON(e));
          return new ContractInterface(e.name, t, r);
        }
        getConstructorDefinition() {
          return this.constructorDefinition;
        }
        getEndpoint(e) {
          let t = this.endpoints.find((t) => t.name == e);
          return (
            n.guardValueIsSetWithMessage(`endpoint [${e}] not found`, t),
            t
          );
        }
      }
      function a(e) {
        if (void 0 === e.constructor.inputs || void 0 === e.constructor.outputs)
          return null;
        let t = Object.assign({ name: "constructor" }, e.constructor);
        return i.EndpointDefinition.fromJSON(t);
      }
      t.ContractInterface = ContractInterface;
    },
    6374: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TypeMapper = void 0));
      const a = s(r(2854)),
        o = r(4744),
        u = r(5416),
        l = r(3925),
        c = r(5417),
        d = r(4743),
        f = r(4745),
        p = r(4746),
        h = r(5418),
        g = r(3924),
        y = r(4515),
        m = r(4516),
        T = r(5419),
        v = r(5420),
        C = r(5421),
        N = r(5422),
        b = r(5423),
        w = r(8956),
        O = r(5424);
      class TypeMapper {
        constructor(e) {
          (void 0 === e && (e = []),
            (this.openTypesFactories = new Map([
              [
                "Option",
                function () {
                  return new f.OptionType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "List",
                function () {
                  return new f.ListType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "VarArgs",
                function () {
                  return new T.VariadicType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "MultiResultVec",
                function () {
                  return new T.VariadicType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "variadic",
                function () {
                  return new T.VariadicType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "OptionalArg",
                function () {
                  return new v.OptionalType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "optional",
                function () {
                  return new v.OptionalType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "OptionalResult",
                function () {
                  return new v.OptionalType(
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "multi",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new c.CompositeType(...t);
                },
              ],
              [
                "MultiArg",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new c.CompositeType(...t);
                },
              ],
              [
                "MultiResult",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new c.CompositeType(...t);
                },
              ],
              [
                "multi",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new c.CompositeType(...t);
                },
              ],
              [
                "tuple",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple2",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple3",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple4",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple5",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple6",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple7",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "tuple8",
                function () {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  return new b.TupleType(...t);
                },
              ],
              [
                "array20",
                function () {
                  return new C.ArrayVecType(
                    20,
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "array32",
                function () {
                  return new C.ArrayVecType(
                    32,
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "array46",
                function () {
                  return new C.ArrayVecType(
                    46,
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
              [
                "array64",
                function () {
                  return new C.ArrayVecType(
                    64,
                    arguments.length <= 0 ? void 0 : arguments[0],
                  );
                },
              ],
            ])),
            (this.closedTypesMap = new Map([
              ["u8", new h.U8Type()],
              ["u16", new h.U16Type()],
              ["u32", new h.U32Type()],
              ["u64", new h.U64Type()],
              ["U64", new h.U64Type()],
              ["BigUint", new h.BigUIntType()],
              ["i8", new h.I8Type()],
              ["i16", new h.I16Type()],
              ["i32", new h.I32Type()],
              ["i64", new h.I64Type()],
              ["Bigint", new h.BigIntType()],
              ["BigInt", new h.BigIntType()],
              ["bool", new u.BooleanType()],
              ["bytes", new l.BytesType()],
              ["Address", new o.AddressType()],
              ["H256", new p.H256Type()],
              ["utf-8 string", new N.StringType()],
              ["TokenIdentifier", new m.TokenIdentifierType()],
              ["EgldOrEsdtTokenIdentifier", new m.TokenIdentifierType()],
              ["CodeMetadata", new w.CodeMetadataType()],
              ["nothing", new O.NothingType()],
              ["AsyncCall", new O.NothingType()],
            ])),
            (this.learnedTypesMap = new Map()));
          for (const t of e) this.learnedTypesMap.set(t.getName(), t);
        }
        mapType(e) {
          let t = this.mapRecursiveType(e);
          if (t) return (t.isGenericType() || this.learnType(t), t);
          throw new a.ErrTypingSystem(
            `Cannot map the type "${e.getName()}" to a known type`,
          );
        }
        mapRecursiveType(e) {
          let t = e.isGenericType(),
            r = this.learnedTypesMap.get(e.getName());
          if (r) return r;
          let n = this.closedTypesMap.get(e.getName());
          return (
            n ||
            (e.hasExactClass(d.EnumType.ClassName)
              ? this.mapEnumType(e)
              : e.hasExactClass(g.StructType.ClassName)
                ? this.mapStructType(e)
                : t
                  ? this.mapGenericType(e)
                  : null)
          );
        }
        learnType(e) {
          (this.learnedTypesMap.delete(e.getName()),
            this.learnedTypesMap.set(e.getName(), e));
        }
        mapStructType(e) {
          let t = this.mappedFields(e.getFieldsDefinitions()),
            r = new g.StructType(e.getName(), t);
          return r;
        }
        mapEnumType(e) {
          let t = e.variants.map(
              (e) =>
                new d.EnumVariantDefinition(
                  e.name,
                  e.discriminant,
                  this.mappedFields(e.getFieldsDefinitions()),
                ),
            ),
            r = new d.EnumType(e.getName(), t);
          return r;
        }
        mappedFields(e) {
          return e.map(
            (e) =>
              new y.FieldDefinition(
                e.name,
                e.description,
                this.mapType(e.type),
              ),
          );
        }
        mapGenericType(e) {
          let t = e.getTypeParameters(),
            r = t.map((e) => this.mapType(e)),
            n = this.openTypesFactories.get(e.getName());
          if (!n)
            throw new a.ErrTypingSystem(
              `Cannot map the generic type "${e.getName()}" to a known type`,
            );
          return n(...r);
        }
      }
      t.TypeMapper = TypeMapper;
    },
    6375: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CollectionOfTypedValues = void 0));
      class CollectionOfTypedValues {
        constructor(e) {
          this.items = e;
        }
        getLength() {
          return this.items.length;
        }
        getItems() {
          return this.items;
        }
        valueOf() {
          return this.items.map((e) => e.valueOf());
        }
        equals(e) {
          if (this.getLength() != e.getLength()) return !1;
          for (let t = 0; t < this.getLength(); t++) {
            let r = this.items[t],
              n = e.items[t];
            if (!r.equals(n)) return !1;
          }
          return !0;
        }
      }
      t.CollectionOfTypedValues = CollectionOfTypedValues;
    },
    6377: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StructBinaryCodec = void 0));
      const n = r(3002),
        i = r(6378);
      class StructBinaryCodec {
        constructor(e) {
          this.fieldsCodec = new i.FieldsBinaryCodec(e);
        }
        decodeTopLevel(e, t) {
          let [r] = this.decodeNested(e, t);
          return r;
        }
        decodeNested(e, t) {
          let r = t.getFieldsDefinitions(),
            [i, s] = this.fieldsCodec.decodeNested(e, r),
            a = new n.Struct(t, i);
          return [a, s];
        }
        encodeNested(e) {
          let t = e.getFields(),
            r = this.fieldsCodec.encodeNested(t);
          return r;
        }
        encodeTopLevel(e) {
          return this.encodeNested(e);
        }
      }
      t.StructBinaryCodec = StructBinaryCodec;
    },
    6378: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.FieldsBinaryCodec = void 0));
        const n = r(3002);
        class FieldsBinaryCodec {
          constructor(e) {
            this.binaryCodec = e;
          }
          decodeNested(e, t) {
            let r = [],
              i = 0;
            for (const s of t) {
              let [t, a] = this.binaryCodec.decodeNested(e, s.type);
              ((e = e.slice(a)), (i += a));
              let o = new n.Field(t, s.name);
              r.push(o);
            }
            return [r, i];
          }
          encodeNested(t) {
            let r = [];
            for (const e of t) {
              let t = this.binaryCodec.encodeNested(e.value);
              r.push(t);
            }
            return e.concat(r);
          }
        }
        t.FieldsBinaryCodec = FieldsBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    6381: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CodeMetadata = void 0));
        class CodeMetadata {
          constructor(e, t, r, n) {
            (void 0 === e && (e = !0),
              void 0 === t && (t = !1),
              void 0 === r && (r = !1),
              void 0 === n && (n = !1),
              (this.upgradeable = e),
              (this.readable = t),
              (this.payable = r),
              (this.payableBySc = n));
          }
          toggleUpgradeable(e) {
            this.upgradeable = e;
          }
          toggleReadable(e) {
            this.readable = e;
          }
          togglePayable(e) {
            this.payable = e;
          }
          togglePayableBySc(e) {
            this.payableBySc = e;
          }
          toBuffer() {
            let t = 0,
              i = 0;
            return (
              this.upgradeable && (t |= r.Upgradeable),
              this.readable && (t |= r.Readable),
              this.payable && (i |= n.Payable),
              this.payableBySc && (i |= n.PayableBySc),
              e.from([t, i])
            );
          }
          toString() {
            return this.toBuffer().toString("hex");
          }
          toJSON() {
            return {
              upgradeable: this.upgradeable,
              readable: this.readable,
              payable: this.payable,
              payableBySc: this.payableBySc,
            };
          }
          equals(e) {
            return (
              this.upgradeable == e.upgradeable &&
              this.readable == e.readable &&
              this.payable == e.payable &&
              this.payableBySc == e.payableBySc
            );
          }
        }
        var r, n;
        ((t.CodeMetadata = CodeMetadata),
          (function (e) {
            ((e[(e["Upgradeable"] = 1)] = "Upgradeable"),
              (e[(e["Reserved2"] = 2)] = "Reserved2"),
              (e[(e["Readable"] = 4)] = "Readable"));
          })(r || (r = {})),
          (function (e) {
            ((e[(e["Reserved1"] = 1)] = "Reserved1"),
              (e[(e["Payable"] = 2)] = "Payable"),
              (e[(e["PayableBySc"] = 4)] = "PayableBySc"));
          })(n || (n = {})));
      }).call(this, r(2).Buffer);
    },
    6382: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Interaction = void 0));
      const n = r(5429),
        i = r(4747),
        s = r(3121),
        a = r(3002),
        o = r(4741),
        u = r(6383);
      class Interaction {
        constructor(e, t, r) {
          ((this.nonce = 0),
            (this.value = "0"),
            (this.gasLimit = 0),
            (this.gasPrice = void 0),
            (this.chainID = ""),
            (this.querent = new s.Address()),
            (this.isWithSingleESDTTransfer = !1),
            (this.isWithSingleESDTNFTTransfer = !1),
            (this.isWithMultiESDTNFTTransfer = !1),
            (this.tokenTransfersSender = new s.Address()),
            (this.contract = e),
            (this.function = t),
            (this.args = r),
            (this.tokenTransfers = new TokenTransfersWithinInteraction(
              [],
              this,
            )));
        }
        getContractAddress() {
          return this.contract.getAddress();
        }
        getFunction() {
          return this.function;
        }
        getEndpoint() {
          return this.contract.getEndpoint(this.function);
        }
        getArguments() {
          return this.args;
        }
        getValue() {
          return this.value;
        }
        getTokenTransfers() {
          return this.tokenTransfers.getTransfers();
        }
        getGasLimit() {
          return this.gasLimit;
        }
        getExplicitReceiver() {
          return this.explicitReceiver;
        }
        buildTransaction() {
          let e = this.explicitReceiver || this.contract.getAddress(),
            t = this.function,
            r = this.args;
          this.isWithSingleESDTTransfer
            ? ((t = new i.ContractFunction(o.ESDT_TRANSFER_FUNCTION_NAME)),
              (r = this.tokenTransfers.buildArgsForSingleESDTTransfer()))
            : this.isWithSingleESDTNFTTransfer
              ? ((e = this.tokenTransfersSender),
                (t = new i.ContractFunction(o.ESDTNFT_TRANSFER_FUNCTION_NAME)),
                (r = this.tokenTransfers.buildArgsForSingleESDTNFTTransfer()))
              : this.isWithMultiESDTNFTTransfer &&
                ((e = this.tokenTransfersSender),
                (t = new i.ContractFunction(
                  o.MULTI_ESDTNFT_TRANSFER_FUNCTION_NAME,
                )),
                (r = this.tokenTransfers.buildArgsForMultiESDTNFTTransfer()));
          let n = this.contract.call({
            func: t,
            gasLimit: this.gasLimit,
            gasPrice: this.gasPrice,
            args: r,
            value: this.value,
            receiver: e,
            chainID: this.chainID,
          });
          return (n.setNonce(this.nonce), n);
        }
        buildQuery() {
          return new n.Query({
            address: this.contract.getAddress(),
            func: this.function,
            args: this.args,
            value: this.value,
            caller: this.querent,
          });
        }
        withValue(e) {
          return ((this.value = e), this);
        }
        withSingleESDTTransfer(e) {
          return (
            (this.isWithSingleESDTTransfer = !0),
            (this.tokenTransfers = new TokenTransfersWithinInteraction(
              [e],
              this,
            )),
            this
          );
        }
        withSingleESDTNFTTransfer(e, t) {
          return (
            (this.isWithSingleESDTNFTTransfer = !0),
            (this.tokenTransfers = new TokenTransfersWithinInteraction(
              [e],
              this,
            )),
            (this.tokenTransfersSender = t),
            this
          );
        }
        withMultiESDTNFTTransfer(e, t) {
          return (
            (this.isWithMultiESDTNFTTransfer = !0),
            (this.tokenTransfers = new TokenTransfersWithinInteraction(
              e,
              this,
            )),
            (this.tokenTransfersSender = t),
            this
          );
        }
        withGasLimit(e) {
          return ((this.gasLimit = e), this);
        }
        withGasPrice(e) {
          return ((this.gasPrice = e), this);
        }
        withNonce(e) {
          return ((this.nonce = e), this);
        }
        useThenIncrementNonceOf(e) {
          return this.withNonce(e.getNonceThenIncrement());
        }
        withChainID(e) {
          return ((this.chainID = e), this);
        }
        withQuerent(e) {
          return ((this.querent = e), this);
        }
        withExplicitReceiver(e) {
          return ((this.explicitReceiver = e), this);
        }
        check() {
          return (
            new u.InteractionChecker().checkInteraction(
              this,
              this.getEndpoint(),
            ),
            this
          );
        }
      }
      t.Interaction = Interaction;
      class TokenTransfersWithinInteraction {
        constructor(e, t) {
          ((this.transfers = e), (this.interaction = t));
        }
        getTransfers() {
          return this.transfers;
        }
        buildArgsForSingleESDTTransfer() {
          let e = this.transfers[0];
          return [
            this.getTypedTokenIdentifier(e),
            this.getTypedTokenQuantity(e),
            this.getTypedInteractionFunction(),
            ...this.getInteractionArguments(),
          ];
        }
        buildArgsForSingleESDTNFTTransfer() {
          let e = this.transfers[0];
          return [
            this.getTypedTokenIdentifier(e),
            this.getTypedTokenNonce(e),
            this.getTypedTokenQuantity(e),
            this.getTypedTokensReceiver(),
            this.getTypedInteractionFunction(),
            ...this.getInteractionArguments(),
          ];
        }
        buildArgsForMultiESDTNFTTransfer() {
          let e = [];
          (e.push(this.getTypedTokensReceiver()),
            e.push(this.getTypedNumberOfTransfers()));
          for (const t of this.transfers)
            (e.push(this.getTypedTokenIdentifier(t)),
              e.push(this.getTypedTokenNonce(t)),
              e.push(this.getTypedTokenQuantity(t)));
          return (
            e.push(this.getTypedInteractionFunction()),
            e.push(...this.getInteractionArguments()),
            e
          );
        }
        getTypedNumberOfTransfers() {
          return new a.U8Value(this.transfers.length);
        }
        getTypedTokenIdentifier(e) {
          return a.BytesValue.fromUTF8(e.tokenIdentifier);
        }
        getTypedTokenNonce(e) {
          return new a.U64Value(e.nonce);
        }
        getTypedTokenQuantity(e) {
          return new a.BigUIntValue(e.amountAsBigInteger);
        }
        getTypedTokensReceiver() {
          return new a.AddressValue(this.interaction.getContractAddress());
        }
        getTypedInteractionFunction() {
          return a.BytesValue.fromUTF8(
            this.interaction.getFunction().valueOf(),
          );
        }
        getInteractionArguments() {
          return this.interaction.getArguments();
        }
      }
    },
    6383: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InteractionChecker = void 0));
      const o = s(r(2854)),
        u = a(r(3219));
      class InteractionChecker {
        checkInteraction(e, t) {
          (this.checkPayable(e, t), this.checkArguments(e, t));
        }
        checkPayable(e, t) {
          let r = !new u.default(e.getValue().toString()).isZero(),
            n = t.modifiers.isPayableInEGLD();
          if (r && !n)
            throw new o.ErrContractInteraction(
              "cannot send EGLD value to non-payable",
            );
        }
        checkArguments(e, t) {
          let r = t.input,
            n = e.getArguments(),
            i = r.length,
            s = n.length;
          if (i != s)
            throw new o.ErrContractInteraction(
              `bad arguments, expected: ${i}, got: ${s}`,
            );
          for (let a = 0; a < i; a++) {
            let e = r[a].type,
              t = n[a],
              i = t.getType(),
              s = e.isAssignableFrom(i);
            if (!s)
              throw new o.ErrContractInteraction(
                `type mismatch at index ${a}, expected: ${e}, got: ${i}`,
              );
          }
        }
      }
      t.InteractionChecker = InteractionChecker;
    },
    6384: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NativeSerializer = void 0));
        const i = n(r(3219)),
          s = r(3002),
          a = r(8983),
          o = r(3002),
          u = r(3121),
          l = r(2854),
          c = r(6376);
        (function (t) {
          function r(e, t) {
            ((e = e || []), n(e), (e = d(e, t)));
            let r = t.input,
              i = [];
            for (let n = 0; n < r.length; n++) {
              let s = r[n],
                o = new a.ArgumentErrorContext(t.name, n, s),
                u = p(e[n], s.type, o);
              i.push(u);
            }
            return i;
          }
          function n(e) {
            for (let t = 0; t < e.length; t++) {
              let r = e[t];
              if (r && r.belongsToTypesystem)
                throw new l.ErrTypeInferenceSystemRequiresRegularJavascriptObjects(
                  t,
                );
            }
          }
          function d(e, t) {
            let r = t.input,
              { min: n, max: i, variadic: s } = f(r);
            if (!(n <= e.length && e.length <= i))
              throw new l.ErrInvalidArgument(
                `Wrong number of arguments for endpoint ${t.name}: expected between ${n} and ${i} arguments, have ${e.length}`,
              );
            if (s) {
              let t = r.length - 1,
                n = e.slice(t);
              e[t] = n;
            }
            return e;
          }
          function f(e) {
            let t = [...e].reverse(),
              r = e.length,
              n = e.length,
              i = !1;
            t.length > 0 &&
              t[0].type.getCardinality().isComposite() &&
              ((n = 1 / 0), (i = !0));
            for (let s of t) {
              if (s.type.getCardinality().isSingular()) break;
              r -= 1;
            }
            return { min: r, max: n, variadic: i };
          }
          function p(e, t, r) {
            return t instanceof s.OptionType
              ? h(e, t, r)
              : t instanceof s.OptionalType
                ? g(e, t, r)
                : t instanceof s.VariadicType
                  ? y(e, t, r)
                  : t instanceof s.CompositeType
                    ? T(e, t, r)
                    : t instanceof s.TupleType
                      ? v(e, t, r)
                      : t instanceof o.StructType
                        ? C(e, t, r)
                        : t instanceof s.ListType
                          ? m(e, t, r)
                          : t instanceof s.PrimitiveType
                            ? N(e, t, r)
                            : void r.throwError(
                                "convertToTypedValue: unhandled type " + t,
                              );
          }
          function h(e, t, r) {
            if (null == e) return s.OptionValue.newMissing();
            let n = p(e, t.getFirstTypeParameter(), r);
            return s.OptionValue.newProvided(n);
          }
          function g(e, t, r) {
            if (null == e) return new s.OptionalValue(t);
            let n = p(e, t.getFirstTypeParameter(), r);
            return new s.OptionalValue(t, n);
          }
          function y(e, t, r) {
            (null == e && (e = []),
              void 0 === e.map && r.convertError(e, "Variadic"));
            let n = e.map(function (e) {
              return p(e, t.getFirstTypeParameter(), r);
            });
            return new s.VariadicValue(t, n);
          }
          function m(e, t, r) {
            void 0 === e.map && r.convertError(e, "List");
            let n = e.map(function (e) {
              return p(e, t.getFirstTypeParameter(), r);
            });
            return new s.List(t, n);
          }
          function T(e, t, r) {
            let n = [],
              i = t.getTypeParameters();
            r.guardSameLength(e, i);
            for (let s = 0; s < i.length; s++) n.push(p(e[s], i[s], r));
            return new s.CompositeValue(t, n);
          }
          function v(e, t, r) {
            let n = [];
            const i = t.getFieldsDefinitions();
            r.guardSameLength(e, i);
            for (let s = 0; s < i.length; s++) n.push(p(e[s], i[s].type, r));
            return o.Tuple.fromItems(n);
          }
          function C(e, t, r) {
            let n = [];
            const i = t.getFieldsDefinitions();
            for (let s = 0; s < i.length; s++) {
              const t = i[s].name;
              r.guardHasField(e, t);
              const a = e[t],
                u = p(a, i[s].type, r);
              n.push(new o.Field(u, t));
            }
            return new o.Struct(t, n);
          }
          function N(e, t, r) {
            if (t instanceof s.NumericalType) {
              let n = new i.default(e);
              return S(n, t, r);
            }
            return t instanceof s.BytesType
              ? b(e, r)
              : t instanceof s.AddressType
                ? new s.AddressValue(O(e, r))
                : t instanceof s.BooleanType
                  ? new s.BooleanValue(e)
                  : t instanceof s.TokenIdentifierType
                    ? new s.TokenIdentifierValue(w(e, r))
                    : void r.throwError(
                        "(function: toPrimitive) unsupported type " + t,
                      );
          }
          function b(t, r) {
            const n = t.valueOf();
            return (
              void 0 === t && r.convertError(t, "BytesValue"),
              t instanceof e
                ? new s.BytesValue(t)
                : "string" === typeof t
                  ? s.BytesValue.fromUTF8(t)
                  : n instanceof e
                    ? new s.BytesValue(n)
                    : "number" === typeof n
                      ? s.BytesValue.fromHex(c.numberToPaddedHex(n))
                      : void r.convertError(t, "BytesValue")
            );
          }
          function w(t, r) {
            return (
              void 0 === t && r.convertError(t, "Buffer"),
              t instanceof e
                ? t.toString()
                : "string" === typeof t
                  ? t
                  : void r.convertError(t, "Buffer")
            );
          }
          function O(t, r) {
            if (t.bech32) return t;
            if (t.getAddress) return t.getAddress();
            switch (t.constructor) {
              case e:
              case String:
                return new u.Address(t);
              default:
                r.convertError(t, "Address");
            }
          }
          function S(e, t, r) {
            switch (t.constructor) {
              case s.U8Type:
                return new s.U8Value(e);
              case s.I8Type:
                return new s.I8Value(e);
              case s.U16Type:
                return new s.U16Value(e);
              case s.I16Type:
                return new s.I16Value(e);
              case s.U32Type:
                return new s.U32Value(e);
              case s.I32Type:
                return new s.I32Value(e);
              case s.U64Type:
                return new s.U64Value(e);
              case s.I64Type:
                return new s.I64Value(e);
              case s.BigUIntType:
                return new s.BigUIntValue(e);
              case s.BigIntType:
                return new s.BigIntValue(e);
              default:
                r.unhandledType("convertNumericalType", t);
            }
          }
          ((t.nativeToTypedValues = r), (t.convertNativeToAddress = O));
        })(t.NativeSerializer || (t.NativeSerializer = {}));
      }).call(this, r(2).Buffer);
    },
    6385: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ReturnCode = void 0));
      class ReturnCode {
        constructor(e) {
          this.text = e;
        }
        static fromBuffer(e) {
          let t = e.toString();
          return new ReturnCode(t);
        }
        toString() {
          return this.text;
        }
        valueOf() {
          return this.text;
        }
        equals(e) {
          return !!e && this.text == e.text;
        }
        isSuccess() {
          return this.equals(ReturnCode.Ok) || this.equals(ReturnCode.None);
        }
      }
      ((t.ReturnCode = ReturnCode),
        (ReturnCode.None = new ReturnCode("")),
        (ReturnCode.Ok = new ReturnCode("ok")),
        (ReturnCode.FunctionNotFound = new ReturnCode("function not found")),
        (ReturnCode.FunctionWrongSignature = new ReturnCode(
          "wrong signature for function",
        )),
        (ReturnCode.ContractNotFound = new ReturnCode("contract not found")),
        (ReturnCode.UserError = new ReturnCode("user error")),
        (ReturnCode.OutOfGas = new ReturnCode("out of gas")),
        (ReturnCode.AccountCollision = new ReturnCode("account collision")),
        (ReturnCode.OutOfFunds = new ReturnCode("out of funds")),
        (ReturnCode.CallStackOverFlow = new ReturnCode("call stack overflow")),
        (ReturnCode.ContractInvalid = new ReturnCode("contract invalid")),
        (ReturnCode.ExecutionFailed = new ReturnCode("execution failed")),
        (ReturnCode.Unknown = new ReturnCode("unknown")));
    },
    8946: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        r(8947),
        i(r(8948), t),
        i(r(8949), t),
        i(r(2854), t),
        i(r(8950), t),
        i(r(3121), t),
        i(r(6369), t),
        i(r(8951), t),
        i(r(4513), t),
        i(r(8977), t),
        i(r(3806), t),
        i(r(8978), t),
        i(r(4740), t),
        i(r(6370), t),
        i(r(8979), t),
        i(r(3160), t),
        i(r(6380), t),
        i(r(6379), t),
        i(r(5428), t),
        i(r(8988), t),
        i(r(8989), t));
    },
    8947: function (e, t, r) {
      "use strict";
      (function (e) {
        e.Buffer || (e.Buffer = r(2).Buffer);
      }).call(this, r(13));
    },
    8948: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8949: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8950: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Account = void 0));
      const n = r(3121);
      class Account {
        constructor(e) {
          ((this.address = new n.Address()),
            (this.nonce = 0),
            (this.balance = "0"),
            (this.address = e));
        }
        update(e) {
          ((this.nonce = e.nonce), (this.balance = e.balance));
        }
        incrementNonce() {
          this.nonce = this.nonce.valueOf() + 1;
        }
        getNonceThenIncrement() {
          let e = this.nonce;
          return ((this.nonce = this.nonce.valueOf() + 1), e);
        }
        toJSON() {
          return {
            address: this.address.bech32(),
            nonce: this.nonce.valueOf(),
            balance: this.balance.toString(),
          };
        }
      }
      t.Account = Account;
    },
    8951: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GasEstimator = t.DefaultGasConfiguration = void 0),
        (t.DefaultGasConfiguration = {
          minGasLimit: 5e4,
          gasPerDataByte: 1500,
          gasCostESDTTransfer: 2e5,
          gasCostESDTNFTTransfer: 2e5,
          gasCostESDTNFTMultiTransfer: 2e5,
        }));
      const n = 1e5,
        i = 8e5;
      class GasEstimator {
        constructor(e) {
          this.gasConfiguration = e || t.DefaultGasConfiguration;
        }
        forEGLDTransfer(e) {
          const t =
            this.gasConfiguration.minGasLimit +
            this.gasConfiguration.gasPerDataByte * e;
          return t;
        }
        forESDTTransfer(e) {
          const t =
            this.gasConfiguration.minGasLimit +
            this.gasConfiguration.gasCostESDTTransfer +
            this.gasConfiguration.gasPerDataByte * e +
            n;
          return t;
        }
        forESDTNFTTransfer(e) {
          const t =
            this.gasConfiguration.minGasLimit +
            this.gasConfiguration.gasCostESDTNFTTransfer +
            this.gasConfiguration.gasPerDataByte * e +
            i;
          return t;
        }
        forMultiESDTNFTTransfer(e, t) {
          const r =
            this.gasConfiguration.minGasLimit +
            (this.gasConfiguration.gasCostESDTNFTMultiTransfer + i) * t +
            this.gasConfiguration.gasPerDataByte * e;
          return r;
        }
      }
      t.GasEstimator = GasEstimator;
    },
    8952: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AbiRegistry = void 0));
      const a = s(r(2854)),
        o = r(3160),
        u = r(3924),
        l = r(6373),
        c = r(4743),
        d = r(6374),
        f = r(5415);
      class AbiRegistry {
        constructor() {
          ((this.interfaces = []), (this.customTypes = []));
        }
        static create(e) {
          let t = new AbiRegistry().extend(e),
            r = t.remapToKnownTypes();
          return r;
        }
        extend(e) {
          e.types = e.types || {};
          let t = l.ContractInterface.fromJSON(e);
          this.interfaces.push(t);
          for (const r in e.types) {
            let t = e.types[r],
              n = t.type;
            t.name = r;
            let i = this.createCustomType(n, t);
            this.customTypes.push(i);
          }
          return (this.sortCustomTypesByDependencies(), this);
        }
        createCustomType(e, t) {
          if ("struct" == e) return u.StructType.fromJSON(t);
          if ("enum" == e) return c.EnumType.fromJSON(t);
          throw new a.ErrTypingSystem("Unknown type discriminant: " + e);
        }
        sortCustomTypesByDependencies() {
          this.customTypes.sort((e, t) => {
            const r = t.getNamesOfDependencies().indexOf(e.getName()) > -1;
            return r ? -1 : 1;
          });
        }
        getInterface(e) {
          let t = this.interfaces.find((t) => t.name == e);
          return (
            o.guardValueIsSetWithMessage(`interface [${e}] not found`, t),
            t
          );
        }
        getInterfaces(e) {
          return e.map((e) => this.getInterface(e));
        }
        getStruct(e) {
          let t = this.customTypes.find(
            (t) => t.getName() == e && t.hasExactClass(u.StructType.ClassName),
          );
          return (
            o.guardValueIsSetWithMessage(`struct [${e}] not found`, t),
            t
          );
        }
        getStructs(e) {
          return e.map((e) => this.getStruct(e));
        }
        getEnum(e) {
          let t = this.customTypes.find(
            (t) => t.getName() == e && t.hasExactClass(c.EnumType.ClassName),
          );
          return (o.guardValueIsSetWithMessage(`enum [${e}] not found`, t), t);
        }
        getEnums(e) {
          return e.map((e) => this.getEnum(e));
        }
        remapToKnownTypes() {
          let e = new d.TypeMapper([]),
            t = [],
            r = [];
          for (const i of this.customTypes) {
            const r = e.mapType(i);
            t.push(r);
          }
          e = new d.TypeMapper(t);
          for (const i of this.interfaces) {
            let t = [];
            for (const r of i.endpoints) t.push(p(r, e));
            let n = i.constructorDefinition
              ? p(i.constructorDefinition, e)
              : null;
            r.push(new l.ContractInterface(i.name, n, t));
          }
          let n = new AbiRegistry();
          return (n.customTypes.push(...t), n.interfaces.push(...r), n);
        }
      }
      function p(e, t) {
        let r = e.input.map(
            (e) =>
              new f.EndpointParameterDefinition(
                e.name,
                e.description,
                t.mapType(e.type),
              ),
          ),
          n = e.output.map(
            (e) =>
              new f.EndpointParameterDefinition(
                e.name,
                e.description,
                t.mapType(e.type),
              ),
          );
        return new f.EndpointDefinition(e.name, r, n, e.modifiers);
      }
      t.AbiRegistry = AbiRegistry;
    },
    8953: function (e, t, r) {
      "use strict";
      function n(e, t) {
        let r = [],
          n = Object.getPrototypeOf(e);
        while (n && t(n)) (r.push(n), (n = Object.getPrototypeOf(n)));
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getJavascriptPrototypesInHierarchy = void 0),
        (t.getJavascriptPrototypesInHierarchy = n));
    },
    8956: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CodeMetadataValue = t.CodeMetadataType = void 0));
      const n = r(3003);
      class CodeMetadataType extends n.PrimitiveType {
        constructor() {
          super("CodeMetadata");
        }
      }
      t.CodeMetadataType = CodeMetadataType;
      class CodeMetadataValue extends n.PrimitiveValue {
        constructor(e) {
          (super(new CodeMetadataType()), (this.value = e));
        }
        equals(e) {
          return this.value.equals(e.value);
        }
        valueOf() {
          return this.value;
        }
      }
      t.CodeMetadataValue = CodeMetadataValue;
    },
    8957: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createListOfTokenIdentifiers = t.createListOfAddresses = void 0));
      const n = r(4744),
        i = r(4745),
        s = r(4516);
      function a(e) {
        let t = e.map((e) => new n.AddressValue(e)),
          r = i.List.fromItems(t);
        return r;
      }
      function o(e) {
        let t = e.map((e) => new s.TokenIdentifierValue(e)),
          r = i.List.fromItems(t);
        return r;
      }
      ((t.createListOfAddresses = a), (t.createListOfTokenIdentifiers = o));
    },
    8958: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
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
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.onPrimitiveTypeSelect =
          t.onPrimitiveValueSelect =
          t.onTypedValueSelect =
          t.onTypeSelect =
            void 0));
      const a = s(r(2854)),
        o = r(4744),
        u = r(5416),
        l = r(3925),
        c = r(4743),
        d = r(4745),
        f = r(4746),
        p = r(5418),
        h = r(5424),
        g = r(3924),
        y = r(4516),
        m = r(5423),
        T = r(3003),
        v = r(5421),
        C = r(5422);
      function N(e, t) {
        if (e.hasExactClass(d.OptionType.ClassName)) return t.onOption();
        if (e.hasExactClass(d.ListType.ClassName)) return t.onList();
        if (e.hasExactClass(v.ArrayVecType.ClassName)) return t.onArray();
        if (e.hasClassOrSuperclass(T.PrimitiveType.ClassName))
          return t.onPrimitive();
        if (e.hasExactClass(g.StructType.ClassName)) return t.onStruct();
        if (e.hasExactClass(m.TupleType.ClassName)) return t.onTuple();
        if (e.hasExactClass(c.EnumType.ClassName)) return t.onEnum();
        if (t.onOther) return t.onOther();
        throw new a.ErrTypingSystem("type isn't known: " + e);
      }
      function b(e, t) {
        if (e.hasClassOrSuperclass(T.PrimitiveValue.ClassName))
          return t.onPrimitive();
        if (e.hasExactClass(d.OptionValue.ClassName)) return t.onOption();
        if (e.hasExactClass(d.List.ClassName)) return t.onList();
        if (e.hasExactClass(v.ArrayVec.ClassName)) return t.onArray();
        if (e.hasExactClass(g.Struct.ClassName)) return t.onStruct();
        if (e.hasExactClass(m.Tuple.ClassName)) return t.onTuple();
        if (e.hasExactClass(c.EnumValue.ClassName)) return t.onEnum();
        if (t.onOther) return t.onOther();
        throw new a.ErrTypingSystem("value isn't typed: " + e);
      }
      function w(e, t) {
        if (e.hasExactClass(u.BooleanValue.ClassName)) return t.onBoolean();
        if (e.hasClassOrSuperclass(p.NumericalValue.ClassName))
          return t.onNumerical();
        if (e.hasExactClass(o.AddressValue.ClassName)) return t.onAddress();
        if (e.hasExactClass(l.BytesValue.ClassName)) return t.onBytes();
        if (e.hasExactClass(C.StringValue.ClassName)) return t.onString();
        if (e.hasExactClass(f.H256Value.ClassName)) return t.onH256();
        if (e.hasExactClass(y.TokenIdentifierValue.ClassName))
          return t.onTypeIdentifier();
        if (e.hasExactClass(h.NothingValue.ClassName)) return t.onNothing();
        if (t.onOther) return t.onOther();
        throw new a.ErrTypingSystem("value isn't a primitive: " + e.getType());
      }
      function O(e, t) {
        if (e.hasExactClass(u.BooleanType.ClassName)) return t.onBoolean();
        if (e.hasClassOrSuperclass(p.NumericalType.ClassName))
          return t.onNumerical();
        if (e.hasExactClass(o.AddressType.ClassName)) return t.onAddress();
        if (e.hasExactClass(l.BytesType.ClassName)) return t.onBytes();
        if (e.hasExactClass(C.StringType.ClassName)) return t.onString();
        if (e.hasExactClass(f.H256Type.ClassName)) return t.onH256();
        if (e.hasExactClass(y.TokenIdentifierType.ClassName))
          return t.onTokenIndetifier();
        if (e.hasExactClass(h.NothingType.ClassName)) return t.onNothing();
        if (t.onOther) return t.onOther();
        throw new a.ErrTypingSystem("type isn't a known primitive: " + e);
      }
      ((t.onTypeSelect = N),
        (t.onTypedValueSelect = b),
        (t.onPrimitiveValueSelect = w),
        (t.onPrimitiveTypeSelect = O));
    },
    8959: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  (void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
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
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return (i(t, e), t);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.OptionValueBinaryCodec = void 0));
        const a = s(r(2854)),
          o = r(3002);
        class OptionValueBinaryCodec {
          constructor(e) {
            this.binaryCodec = e;
          }
          decodeNested(e, t) {
            if (0 == e[0]) return [o.OptionValue.newMissingTyped(t), 1];
            if (1 != e[0])
              throw new a.ErrCodec("invalid buffer for optional value");
            let [r, n] = this.binaryCodec.decodeNested(e.slice(1), t);
            return [o.OptionValue.newProvided(r), n + 1];
          }
          decodeTopLevel(e, t) {
            if (0 == e.length) return new o.OptionValue(t);
            if (1 != e[0])
              throw new a.ErrCodec("invalid buffer for optional value");
            let [r, n] = this.binaryCodec.decodeNested(e.slice(1), t);
            return new o.OptionValue(t, r);
          }
          encodeNested(t) {
            return t.isSet()
              ? e.concat([
                  e.from([1]),
                  this.binaryCodec.encodeNested(t.getTypedValue()),
                ])
              : e.from([0]);
          }
          encodeTopLevel(t) {
            return t.isSet()
              ? e.concat([
                  e.from([1]),
                  this.binaryCodec.encodeNested(t.getTypedValue()),
                ])
              : e.from([]);
          }
        }
        t.OptionValueBinaryCodec = OptionValueBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    8960: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PrimitiveBinaryCodec = void 0));
      const n = r(3002),
        i = r(8961),
        s = r(8962),
        a = r(8963),
        o = r(8964),
        u = r(5427),
        l = r(8965),
        c = r(8966),
        d = r(8967);
      class PrimitiveBinaryCodec {
        constructor(e) {
          ((this.binaryCodec = e),
            (this.booleanCodec = new s.BooleanBinaryCodec()),
            (this.numericalCodec = new a.NumericalBinaryCodec()),
            (this.addressCodec = new i.AddressBinaryCodec()),
            (this.h256Codec = new o.H256BinaryCodec()),
            (this.bytesCodec = new u.BytesBinaryCodec()),
            (this.stringCodec = new d.StringBinaryCodec()),
            (this.tokenIdentifierCodec = new l.TokenIdentifierCodec()),
            (this.nothingCodec = new c.NothingCodec()));
        }
        decodeNested(e, t) {
          return n.onPrimitiveTypeSelect(t, {
            onBoolean: () => this.booleanCodec.decodeNested(e),
            onNumerical: () => this.numericalCodec.decodeNested(e, t),
            onAddress: () => this.addressCodec.decodeNested(e),
            onBytes: () => this.bytesCodec.decodeNested(e),
            onString: () => this.stringCodec.decodeNested(e),
            onH256: () => this.h256Codec.decodeNested(e),
            onTokenIndetifier: () => this.tokenIdentifierCodec.decodeNested(e),
            onNothing: () => this.nothingCodec.decodeNested(),
          });
        }
        decodeTopLevel(e, t) {
          return n.onPrimitiveTypeSelect(t, {
            onBoolean: () => this.booleanCodec.decodeTopLevel(e),
            onNumerical: () => this.numericalCodec.decodeTopLevel(e, t),
            onAddress: () => this.addressCodec.decodeTopLevel(e),
            onBytes: () => this.bytesCodec.decodeTopLevel(e),
            onString: () => this.stringCodec.decodeTopLevel(e),
            onH256: () => this.h256Codec.decodeTopLevel(e),
            onTokenIndetifier: () =>
              this.tokenIdentifierCodec.decodeTopLevel(e),
            onNothing: () => this.nothingCodec.decodeTopLevel(),
          });
        }
        encodeNested(e) {
          return n.onPrimitiveValueSelect(e, {
            onBoolean: () => this.booleanCodec.encodeNested(e),
            onNumerical: () => this.numericalCodec.encodeNested(e),
            onAddress: () => this.addressCodec.encodeNested(e),
            onBytes: () => this.bytesCodec.encodeNested(e),
            onString: () => this.stringCodec.encodeNested(e),
            onH256: () => this.h256Codec.encodeNested(e),
            onTypeIdentifier: () => this.tokenIdentifierCodec.encodeNested(e),
            onNothing: () => this.nothingCodec.encodeNested(),
          });
        }
        encodeTopLevel(e) {
          return n.onPrimitiveValueSelect(e, {
            onBoolean: () => this.booleanCodec.encodeTopLevel(e),
            onNumerical: () => this.numericalCodec.encodeTopLevel(e),
            onAddress: () => this.addressCodec.encodeTopLevel(e),
            onBytes: () => this.bytesCodec.encodeTopLevel(e),
            onString: () => this.stringCodec.encodeTopLevel(e),
            onH256: () => this.h256Codec.encodeTopLevel(e),
            onTypeIdentifier: () => this.tokenIdentifierCodec.encodeTopLevel(e),
            onNothing: () => this.nothingCodec.encodeTopLevel(),
          });
        }
      }
      t.PrimitiveBinaryCodec = PrimitiveBinaryCodec;
    },
    8961: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressBinaryCodec = void 0));
      const n = r(3121),
        i = r(3002);
      class AddressBinaryCodec {
        decodeNested(e) {
          let t = e.slice(0, 32),
            r = new n.Address(t);
          return [new i.AddressValue(r), 32];
        }
        decodeTopLevel(e) {
          let [t, r] = this.decodeNested(e);
          return t;
        }
        encodeNested(e) {
          return e.valueOf().pubkey();
        }
        encodeTopLevel(e) {
          return e.valueOf().pubkey();
        }
      }
      t.AddressBinaryCodec = AddressBinaryCodec;
    },
    8962: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  (void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
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
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return (i(t, e), t);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BooleanBinaryCodec = void 0));
        const a = s(r(2854)),
          o = r(3002);
        class BooleanBinaryCodec {
          decodeNested(e) {
            let t = e.readUInt8(0);
            return [new o.BooleanValue(t == BooleanBinaryCodec.TRUE), 1];
          }
          decodeTopLevel(e) {
            if (e.length > 1)
              throw new a.ErrInvalidArgument("buffer should be of size <= 1");
            let t = e[0];
            return new o.BooleanValue(t == BooleanBinaryCodec.TRUE);
          }
          encodeNested(t) {
            return t.isTrue()
              ? e.from([BooleanBinaryCodec.TRUE])
              : e.from([BooleanBinaryCodec.FALSE]);
          }
          encodeTopLevel(t) {
            return t.isTrue() ? e.from([BooleanBinaryCodec.TRUE]) : e.from([]);
          }
        }
        ((t.BooleanBinaryCodec = BooleanBinaryCodec),
          (BooleanBinaryCodec.TRUE = 1),
          (BooleanBinaryCodec.FALSE = 0));
      }).call(this, r(2).Buffer);
    },
    8963: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NumericalBinaryCodec = void 0));
        const i = r(3002),
          s = r(5425),
          a = n(r(3219)),
          o = r(5426);
        class NumericalBinaryCodec {
          decodeNested(e, t) {
            let r = 0,
              n = t.sizeInBytes;
            n || ((r = o.SizeOfU32), (n = e.readUInt32BE(0)));
            let i = e.slice(r, r + n),
              s = this.decodeTopLevel(i, t),
              a = n + r;
            return [s, a];
          }
          decodeTopLevel(e, t) {
            let r = s.cloneBuffer(e),
              n = 0 == e.length;
            if (n) return new i.NumericalValue(t, new a.default(0));
            let o = !t.withSign || s.isMsbZero(r);
            if (o) {
              let e = s.bufferToBigInt(r);
              return new i.NumericalValue(t, e);
            }
            s.flipBufferBitsInPlace(r);
            let u = s.bufferToBigInt(r),
              l = u.multipliedBy(new a.default(-1)),
              c = l.minus(new a.default(1));
            return new i.NumericalValue(t, c);
          }
          encodeNested(t) {
            if (t.sizeInBytes)
              return this.encodeNestedFixedSize(t, t.sizeInBytes);
            let r = this.encodeTopLevel(t),
              n = e.alloc(o.SizeOfU32);
            return (n.writeUInt32BE(r.length), e.concat([n, r]));
          }
          encodeNestedFixedSize(t, r) {
            if (t.value.isZero()) return e.alloc(r, 0);
            if (!t.withSign) {
              const n = s.bigIntToBuffer(t.value),
                i = e.alloc(r - n.length, 0);
              return e.concat([i, n]);
            }
            if (t.value.isPositive()) {
              let n = s.bigIntToBuffer(t.value);
              s.isMsbOne(n) && (n = s.prependByteToBuffer(n, 0));
              const i = e.alloc(r - n.length, 0);
              return e.concat([i, n]);
            }
            let n = t.value.plus(new a.default(1)),
              i = s.bigIntToBuffer(n);
            (s.flipBufferBitsInPlace(i),
              s.isMsbZero(i) && (i = s.prependByteToBuffer(i, 255)));
            const o = e.alloc(r - i.length, 255);
            return e.concat([o, i]);
          }
          encodeTopLevel(t) {
            let r = t.withSign;
            return t.value.isZero()
              ? e.alloc(0)
              : r
                ? this.encodePrimitive(t)
                : s.bigIntToBuffer(t.value);
          }
          encodePrimitive(e) {
            if (e.value.isPositive()) {
              let t = s.bigIntToBuffer(e.value);
              return (s.isMsbOne(t) && (t = s.prependByteToBuffer(t, 0)), t);
            }
            let t = e.value.plus(new a.default(1)),
              r = s.bigIntToBuffer(t);
            return (
              s.flipBufferBitsInPlace(r),
              s.isMsbZero(r) && (r = s.prependByteToBuffer(r, 255)),
              r
            );
          }
        }
        t.NumericalBinaryCodec = NumericalBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    8964: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.H256BinaryCodec = void 0));
      const n = r(4746);
      class H256BinaryCodec {
        decodeNested(e) {
          let t = e.slice(0, 32);
          return [new n.H256Value(t), 32];
        }
        decodeTopLevel(e) {
          let [t, r] = this.decodeNested(e);
          return t;
        }
        encodeNested(e) {
          return e.valueOf();
        }
        encodeTopLevel(e) {
          return e.valueOf();
        }
      }
      t.H256BinaryCodec = H256BinaryCodec;
    },
    8965: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TokenIdentifierCodec = void 0));
        const n = r(3925),
          i = r(4516),
          s = r(5427);
        class TokenIdentifierCodec {
          constructor() {
            this.bytesCodec = new s.BytesBinaryCodec();
          }
          decodeNested(e) {
            let [t, r] = this.bytesCodec.decodeNested(e);
            return [new i.TokenIdentifierValue(t.toString()), r];
          }
          decodeTopLevel(e) {
            let t = this.bytesCodec.decodeTopLevel(e);
            return new i.TokenIdentifierValue(t.toString());
          }
          encodeNested(e) {
            let t = n.BytesValue.fromUTF8(e.valueOf());
            return this.bytesCodec.encodeNested(t);
          }
          encodeTopLevel(t) {
            return e.from(t.valueOf());
          }
        }
        t.TokenIdentifierCodec = TokenIdentifierCodec;
      }).call(this, r(2).Buffer);
    },
    8966: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.NothingCodec = void 0));
        const n = r(3002);
        class NothingCodec {
          decodeNested() {
            return [new n.NothingValue(), 0];
          }
          decodeTopLevel() {
            return new n.NothingValue();
          }
          encodeNested() {
            return e.from([]);
          }
          encodeTopLevel() {
            return e.from([]);
          }
        }
        t.NothingCodec = NothingCodec;
      }).call(this, r(2).Buffer);
    },
    8967: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.StringBinaryCodec = void 0));
        const n = r(3002),
          i = r(3925),
          s = r(5427);
        class StringBinaryCodec {
          constructor() {
            this.bytesBinaryCodec = new s.BytesBinaryCodec();
          }
          decodeNested(e) {
            let [t, r] = this.bytesBinaryCodec.decodeNested(e),
              i = new n.StringValue(t.valueOf().toString());
            return [i, r];
          }
          decodeTopLevel(e) {
            return new n.StringValue(e.toString());
          }
          encodeNested(e) {
            let t = i.BytesValue.fromUTF8(e.valueOf());
            return this.bytesBinaryCodec.encodeNested(t);
          }
          encodeTopLevel(t) {
            return e.from(t.valueOf());
          }
        }
        t.StringBinaryCodec = StringBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    8968: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ListBinaryCodec = void 0));
        const n = r(3002),
          i = r(5426);
        class ListBinaryCodec {
          constructor(e) {
            this.binaryCodec = e;
          }
          decodeNested(e, t) {
            let r = t.getFirstTypeParameter(),
              s = [],
              a = e.readUInt32BE(0);
            this.binaryCodec.constraints.checkListLength(a);
            let o = e,
              u = i.SizeOfU32;
            e = o.slice(u);
            for (let n = 0; n < a; n++) {
              let [t, n] = this.binaryCodec.decodeNested(e, r);
              (s.push(t), (u += n), (e = o.slice(u)));
            }
            return [new n.List(t, s), u];
          }
          decodeTopLevel(e, t) {
            let r = t.getFirstTypeParameter(),
              i = [],
              s = e,
              a = 0;
            while (e.length > 0) {
              let [t, n] = this.binaryCodec.decodeNested(e, r);
              (i.push(t),
                (a += n),
                (e = s.slice(a)),
                this.binaryCodec.constraints.checkListLength(i.length));
            }
            return new n.List(t, i);
          }
          encodeNested(t) {
            this.binaryCodec.constraints.checkListLength(t.getLength());
            let r = e.alloc(i.SizeOfU32);
            r.writeUInt32BE(t.getLength());
            let n = [];
            for (const e of t.getItems()) {
              let t = this.binaryCodec.encodeNested(e);
              n.push(t);
            }
            let s = e.concat([r, ...n]);
            return s;
          }
          encodeTopLevel(t) {
            this.binaryCodec.constraints.checkListLength(t.getLength());
            let r = [];
            for (const e of t.getItems()) {
              let t = this.binaryCodec.encodeNested(e);
              r.push(t);
            }
            let n = e.concat(r);
            return n;
          }
        }
        t.ListBinaryCodec = ListBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    8969: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.EnumBinaryCodec = void 0));
        const n = r(3002),
          i = r(6378);
        class EnumBinaryCodec {
          constructor(e) {
            ((this.binaryCodec = e),
              (this.fieldsCodec = new i.FieldsBinaryCodec(e)));
          }
          decodeTopLevel(e, t) {
            let [r] = this.decodeNested(e, t);
            return r;
          }
          decodeNested(e, t) {
            let [r, i] = this.readDiscriminant(e);
            e = e.slice(i);
            let s = t.getVariantByDiscriminant(r),
              a = s.getFieldsDefinitions(),
              [o, u] = this.fieldsCodec.decodeNested(e, a),
              l = new n.EnumValue(t, s, o);
            return [l, i + u];
          }
          readDiscriminant(e) {
            let [t, r] = this.binaryCodec.decodeNested(e, new n.U8Type()),
              i = t.valueOf();
            return [i, r];
          }
          encodeNested(t) {
            let r = new n.U8Value(t.discriminant),
              i = this.binaryCodec.encodeNested(r),
              s = t.getFields(),
              a = this.fieldsCodec.encodeNested(s);
            return e.concat([i, a]);
          }
          encodeTopLevel(t) {
            let r = t.getFields(),
              i = r.length > 0,
              s = this.fieldsCodec.encodeNested(r),
              a = new n.U8Value(t.discriminant),
              o = i
                ? this.binaryCodec.encodeNested(a)
                : this.binaryCodec.encodeTopLevel(a);
            return e.concat([o, s]);
          }
        }
        t.EnumBinaryCodec = EnumBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    8970: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TupleBinaryCodec = void 0));
      const n = r(6377);
      class TupleBinaryCodec {
        constructor(e) {
          this.structCodec = new n.StructBinaryCodec(e);
        }
        decodeTopLevel(e, t) {
          return this.structCodec.decodeTopLevel(e, t);
        }
        decodeNested(e, t) {
          return this.structCodec.decodeNested(e, t);
        }
        encodeNested(e) {
          return this.structCodec.encodeNested(e);
        }
        encodeTopLevel(e) {
          return this.structCodec.encodeTopLevel(e);
        }
      }
      t.TupleBinaryCodec = TupleBinaryCodec;
    },
    8971: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ArrayVecBinaryCodec = void 0));
        const n = r(3002);
        class ArrayVecBinaryCodec {
          constructor(e) {
            this.binaryCodec = e;
          }
          decodeNested(e, t) {
            let r = t.length,
              i = t.getFirstTypeParameter(),
              s = [],
              a = 0;
            for (let n = 0; n < r; n++) {
              let [t, r] = this.binaryCodec.decodeNested(e, i);
              (s.push(t), (a += r), (e = e.slice(r)));
            }
            return [new n.ArrayVec(t, s), a];
          }
          decodeTopLevel(e, t) {
            let [r, n] = this.decodeNested(e, t);
            return r;
          }
          encodeNested(t) {
            let r = [];
            for (const e of t.getItems()) {
              let t = this.binaryCodec.encodeNested(e);
              r.push(t);
            }
            return e.concat(r);
          }
          encodeTopLevel(e) {
            return this.encodeNested(e);
          }
        }
        t.ArrayVecBinaryCodec = ArrayVecBinaryCodec;
      }).call(this, r(2).Buffer);
    },
    8972: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeBigNumber =
          t.decodeString =
          t.decodeBool =
          t.decodeUnsignedNumber =
            void 0));
      const i = n(r(3219)),
        s = r(3002),
        a = r(6372),
        o = new a.BinaryCodec();
      function u(e) {
        let t = o.decodeTopLevel(e, new s.BigUIntType()),
          r = Number(t.valueOf());
        return r;
      }
      function l(e) {
        let t = o.decodeTopLevel(e, new s.BooleanType()),
          r = Boolean(t.valueOf());
        return r;
      }
      function c(e) {
        let t = o.decodeTopLevel(e, new s.BytesType()),
          r = String(t.valueOf());
        return r;
      }
      function d(e) {
        let t = o.decodeTopLevel(e, new s.BigUIntType()),
          r = new i.default(t.valueOf());
        return r;
      }
      ((t.decodeUnsignedNumber = u),
        (t.decodeBool = l),
        (t.decodeString = c),
        (t.decodeBigNumber = d));
    },
    8973: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                (void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }));
              }
            : function (e, t, r, n) {
                (void 0 === n && (n = r), (e[n] = t[r]));
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }), i(r(8974), t));
    },
    8974: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  (void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
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
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return (i(t, e), t);
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ProtoSerializer = void 0));
        const o = s(r(2854)),
          u = r(5425),
          l = r(8975),
          c = r(4741),
          d = r(3121),
          f = a(r(3219));
        class ProtoSerializer {
          serializeTransaction(t) {
            let r = new d.Address(t.getReceiver().bech32()).pubkey(),
              n = new d.Address(t.getSender().bech32()).pubkey(),
              i = new l.proto.Transaction({
                Nonce: t.getNonce().valueOf() ? t.getNonce().valueOf() : void 0,
                Value: this.serializeTransactionValue(t.getValue()),
                RcvAddr: r,
                RcvUserName: null,
                SndAddr: n,
                SndUserName: null,
                GasPrice: t.getGasPrice().valueOf(),
                GasLimit: t.getGasLimit().valueOf(),
                Data: 0 == t.getData().length() ? null : t.getData().valueOf(),
                ChainID: e.from(t.getChainID().valueOf()),
                Version: t.getVersion().valueOf(),
                Signature: e.from(t.getSignature().hex(), "hex"),
              });
            t.getOptions().valueOf() !== c.TRANSACTION_OPTIONS_DEFAULT &&
              (i.Options = t.getOptions().valueOf());
            let s = l.proto.Transaction.encode(i).finish(),
              a = e.from(s);
            return a;
          }
          serializeTransactionValue(t) {
            let r = new f.default(t.toString());
            if (r.isZero()) return e.from([0, 0]);
            let n = u.bigIntToBuffer(r);
            return ((n = e.concat([e.from([0]), n])), n);
          }
          deserializeTransaction(e) {
            throw new o.ErrUnsupportedOperation("deserializeTransaction");
          }
        }
        t.ProtoSerializer = ProtoSerializer;
      }).call(this, r(2).Buffer);
    },
    8975: function (e, t, r) {
      "use strict";
      var n = r(2755),
        i = n.Reader,
        s = n.Writer,
        a = n.util,
        o = n.roots["default"] || (n.roots["default"] = {});
      ((o.proto = (function () {
        var e = {};
        return (
          (e.Transaction = (function () {
            function e(e) {
              if (e)
                for (var t = Object.keys(e), r = 0; r < t.length; ++r)
                  null != e[t[r]] && (this[t[r]] = e[t[r]]);
            }
            return (
              (e.prototype.Nonce = a.Long ? a.Long.fromBits(0, 0, !0) : 0),
              (e.prototype.Value = a.newBuffer([])),
              (e.prototype.RcvAddr = a.newBuffer([])),
              (e.prototype.RcvUserName = a.newBuffer([])),
              (e.prototype.SndAddr = a.newBuffer([])),
              (e.prototype.SndUserName = a.newBuffer([])),
              (e.prototype.GasPrice = a.Long ? a.Long.fromBits(0, 0, !0) : 0),
              (e.prototype.GasLimit = a.Long ? a.Long.fromBits(0, 0, !0) : 0),
              (e.prototype.Data = a.newBuffer([])),
              (e.prototype.ChainID = a.newBuffer([])),
              (e.prototype.Version = 0),
              (e.prototype.Signature = a.newBuffer([])),
              (e.prototype.Options = 0),
              (e.create = function (t) {
                return new e(t);
              }),
              (e.encode = function (e, t) {
                return (
                  t || (t = s.create()),
                  null != e.Nonce &&
                    Object.hasOwnProperty.call(e, "Nonce") &&
                    t.uint32(8).uint64(e.Nonce),
                  null != e.Value &&
                    Object.hasOwnProperty.call(e, "Value") &&
                    t.uint32(18).bytes(e.Value),
                  null != e.RcvAddr &&
                    Object.hasOwnProperty.call(e, "RcvAddr") &&
                    t.uint32(26).bytes(e.RcvAddr),
                  null != e.RcvUserName &&
                    Object.hasOwnProperty.call(e, "RcvUserName") &&
                    t.uint32(34).bytes(e.RcvUserName),
                  null != e.SndAddr &&
                    Object.hasOwnProperty.call(e, "SndAddr") &&
                    t.uint32(42).bytes(e.SndAddr),
                  null != e.SndUserName &&
                    Object.hasOwnProperty.call(e, "SndUserName") &&
                    t.uint32(50).bytes(e.SndUserName),
                  null != e.GasPrice &&
                    Object.hasOwnProperty.call(e, "GasPrice") &&
                    t.uint32(56).uint64(e.GasPrice),
                  null != e.GasLimit &&
                    Object.hasOwnProperty.call(e, "GasLimit") &&
                    t.uint32(64).uint64(e.GasLimit),
                  null != e.Data &&
                    Object.hasOwnProperty.call(e, "Data") &&
                    t.uint32(74).bytes(e.Data),
                  null != e.ChainID &&
                    Object.hasOwnProperty.call(e, "ChainID") &&
                    t.uint32(82).bytes(e.ChainID),
                  null != e.Version &&
                    Object.hasOwnProperty.call(e, "Version") &&
                    t.uint32(88).uint32(e.Version),
                  null != e.Signature &&
                    Object.hasOwnProperty.call(e, "Signature") &&
                    t.uint32(98).bytes(e.Signature),
                  null != e.Options &&
                    Object.hasOwnProperty.call(e, "Options") &&
                    t.uint32(104).uint32(e.Options),
                  t
                );
              }),
              (e.encodeDelimited = function (e, t) {
                return this.encode(e, t).ldelim();
              }),
              (e.decode = function (e, t) {
                e instanceof i || (e = i.create(e));
                var r = void 0 === t ? e.len : e.pos + t,
                  n = new o.proto.Transaction();
                while (e.pos < r) {
                  var s = e.uint32();
                  switch (s >>> 3) {
                    case 1:
                      n.Nonce = e.uint64();
                      break;
                    case 2:
                      n.Value = e.bytes();
                      break;
                    case 3:
                      n.RcvAddr = e.bytes();
                      break;
                    case 4:
                      n.RcvUserName = e.bytes();
                      break;
                    case 5:
                      n.SndAddr = e.bytes();
                      break;
                    case 6:
                      n.SndUserName = e.bytes();
                      break;
                    case 7:
                      n.GasPrice = e.uint64();
                      break;
                    case 8:
                      n.GasLimit = e.uint64();
                      break;
                    case 9:
                      n.Data = e.bytes();
                      break;
                    case 10:
                      n.ChainID = e.bytes();
                      break;
                    case 11:
                      n.Version = e.uint32();
                      break;
                    case 12:
                      n.Signature = e.bytes();
                      break;
                    case 13:
                      n.Options = e.uint32();
                      break;
                    default:
                      e.skipType(7 & s);
                      break;
                  }
                }
                return n;
              }),
              (e.decodeDelimited = function (e) {
                return (
                  e instanceof i || (e = new i(e)),
                  this.decode(e, e.uint32())
                );
              }),
              (e.verify = function (e) {
                return "object" !== typeof e || null === e
                  ? "object expected"
                  : null == e.Nonce ||
                      !e.hasOwnProperty("Nonce") ||
                      a.isInteger(e.Nonce) ||
                      (e.Nonce &&
                        a.isInteger(e.Nonce.low) &&
                        a.isInteger(e.Nonce.high))
                    ? null != e.Value &&
                      e.hasOwnProperty("Value") &&
                      !(
                        (e.Value && "number" === typeof e.Value.length) ||
                        a.isString(e.Value)
                      )
                      ? "Value: buffer expected"
                      : null != e.RcvAddr &&
                          e.hasOwnProperty("RcvAddr") &&
                          !(
                            (e.RcvAddr &&
                              "number" === typeof e.RcvAddr.length) ||
                            a.isString(e.RcvAddr)
                          )
                        ? "RcvAddr: buffer expected"
                        : null != e.RcvUserName &&
                            e.hasOwnProperty("RcvUserName") &&
                            !(
                              (e.RcvUserName &&
                                "number" === typeof e.RcvUserName.length) ||
                              a.isString(e.RcvUserName)
                            )
                          ? "RcvUserName: buffer expected"
                          : null != e.SndAddr &&
                              e.hasOwnProperty("SndAddr") &&
                              !(
                                (e.SndAddr &&
                                  "number" === typeof e.SndAddr.length) ||
                                a.isString(e.SndAddr)
                              )
                            ? "SndAddr: buffer expected"
                            : null != e.SndUserName &&
                                e.hasOwnProperty("SndUserName") &&
                                !(
                                  (e.SndUserName &&
                                    "number" === typeof e.SndUserName.length) ||
                                  a.isString(e.SndUserName)
                                )
                              ? "SndUserName: buffer expected"
                              : null == e.GasPrice ||
                                  !e.hasOwnProperty("GasPrice") ||
                                  a.isInteger(e.GasPrice) ||
                                  (e.GasPrice &&
                                    a.isInteger(e.GasPrice.low) &&
                                    a.isInteger(e.GasPrice.high))
                                ? null == e.GasLimit ||
                                  !e.hasOwnProperty("GasLimit") ||
                                  a.isInteger(e.GasLimit) ||
                                  (e.GasLimit &&
                                    a.isInteger(e.GasLimit.low) &&
                                    a.isInteger(e.GasLimit.high))
                                  ? null != e.Data &&
                                    e.hasOwnProperty("Data") &&
                                    !(
                                      (e.Data &&
                                        "number" === typeof e.Data.length) ||
                                      a.isString(e.Data)
                                    )
                                    ? "Data: buffer expected"
                                    : null != e.ChainID &&
                                        e.hasOwnProperty("ChainID") &&
                                        !(
                                          (e.ChainID &&
                                            "number" ===
                                              typeof e.ChainID.length) ||
                                          a.isString(e.ChainID)
                                        )
                                      ? "ChainID: buffer expected"
                                      : null != e.Version &&
                                          e.hasOwnProperty("Version") &&
                                          !a.isInteger(e.Version)
                                        ? "Version: integer expected"
                                        : null != e.Signature &&
                                            e.hasOwnProperty("Signature") &&
                                            !(
                                              (e.Signature &&
                                                "number" ===
                                                  typeof e.Signature.length) ||
                                              a.isString(e.Signature)
                                            )
                                          ? "Signature: buffer expected"
                                          : null != e.Options &&
                                              e.hasOwnProperty("Options") &&
                                              !a.isInteger(e.Options)
                                            ? "Options: integer expected"
                                            : null
                                  : "GasLimit: integer|Long expected"
                                : "GasPrice: integer|Long expected"
                    : "Nonce: integer|Long expected";
              }),
              (e.fromObject = function (e) {
                if (e instanceof o.proto.Transaction) return e;
                var t = new o.proto.Transaction();
                return (
                  null != e.Nonce &&
                    (a.Long
                      ? ((t.Nonce = a.Long.fromValue(e.Nonce)).unsigned = !0)
                      : "string" === typeof e.Nonce
                        ? (t.Nonce = parseInt(e.Nonce, 10))
                        : "number" === typeof e.Nonce
                          ? (t.Nonce = e.Nonce)
                          : "object" === typeof e.Nonce &&
                            (t.Nonce = new a.LongBits(
                              e.Nonce.low >>> 0,
                              e.Nonce.high >>> 0,
                            ).toNumber(!0))),
                  null != e.Value &&
                    ("string" === typeof e.Value
                      ? a.base64.decode(
                          e.Value,
                          (t.Value = a.newBuffer(a.base64.length(e.Value))),
                          0,
                        )
                      : e.Value.length && (t.Value = e.Value)),
                  null != e.RcvAddr &&
                    ("string" === typeof e.RcvAddr
                      ? a.base64.decode(
                          e.RcvAddr,
                          (t.RcvAddr = a.newBuffer(a.base64.length(e.RcvAddr))),
                          0,
                        )
                      : e.RcvAddr.length && (t.RcvAddr = e.RcvAddr)),
                  null != e.RcvUserName &&
                    ("string" === typeof e.RcvUserName
                      ? a.base64.decode(
                          e.RcvUserName,
                          (t.RcvUserName = a.newBuffer(
                            a.base64.length(e.RcvUserName),
                          )),
                          0,
                        )
                      : e.RcvUserName.length &&
                        (t.RcvUserName = e.RcvUserName)),
                  null != e.SndAddr &&
                    ("string" === typeof e.SndAddr
                      ? a.base64.decode(
                          e.SndAddr,
                          (t.SndAddr = a.newBuffer(a.base64.length(e.SndAddr))),
                          0,
                        )
                      : e.SndAddr.length && (t.SndAddr = e.SndAddr)),
                  null != e.SndUserName &&
                    ("string" === typeof e.SndUserName
                      ? a.base64.decode(
                          e.SndUserName,
                          (t.SndUserName = a.newBuffer(
                            a.base64.length(e.SndUserName),
                          )),
                          0,
                        )
                      : e.SndUserName.length &&
                        (t.SndUserName = e.SndUserName)),
                  null != e.GasPrice &&
                    (a.Long
                      ? ((t.GasPrice = a.Long.fromValue(e.GasPrice)).unsigned =
                          !0)
                      : "string" === typeof e.GasPrice
                        ? (t.GasPrice = parseInt(e.GasPrice, 10))
                        : "number" === typeof e.GasPrice
                          ? (t.GasPrice = e.GasPrice)
                          : "object" === typeof e.GasPrice &&
                            (t.GasPrice = new a.LongBits(
                              e.GasPrice.low >>> 0,
                              e.GasPrice.high >>> 0,
                            ).toNumber(!0))),
                  null != e.GasLimit &&
                    (a.Long
                      ? ((t.GasLimit = a.Long.fromValue(e.GasLimit)).unsigned =
                          !0)
                      : "string" === typeof e.GasLimit
                        ? (t.GasLimit = parseInt(e.GasLimit, 10))
                        : "number" === typeof e.GasLimit
                          ? (t.GasLimit = e.GasLimit)
                          : "object" === typeof e.GasLimit &&
                            (t.GasLimit = new a.LongBits(
                              e.GasLimit.low >>> 0,
                              e.GasLimit.high >>> 0,
                            ).toNumber(!0))),
                  null != e.Data &&
                    ("string" === typeof e.Data
                      ? a.base64.decode(
                          e.Data,
                          (t.Data = a.newBuffer(a.base64.length(e.Data))),
                          0,
                        )
                      : e.Data.length && (t.Data = e.Data)),
                  null != e.ChainID &&
                    ("string" === typeof e.ChainID
                      ? a.base64.decode(
                          e.ChainID,
                          (t.ChainID = a.newBuffer(a.base64.length(e.ChainID))),
                          0,
                        )
                      : e.ChainID.length && (t.ChainID = e.ChainID)),
                  null != e.Version && (t.Version = e.Version >>> 0),
                  null != e.Signature &&
                    ("string" === typeof e.Signature
                      ? a.base64.decode(
                          e.Signature,
                          (t.Signature = a.newBuffer(
                            a.base64.length(e.Signature),
                          )),
                          0,
                        )
                      : e.Signature.length && (t.Signature = e.Signature)),
                  null != e.Options && (t.Options = e.Options >>> 0),
                  t
                );
              }),
              (e.toObject = function (e, t) {
                t || (t = {});
                var r = {};
                if (t.defaults) {
                  if (a.Long) {
                    var n = new a.Long(0, 0, !0);
                    r.Nonce =
                      t.longs === String
                        ? n.toString()
                        : t.longs === Number
                          ? n.toNumber()
                          : n;
                  } else r.Nonce = t.longs === String ? "0" : 0;
                  if (
                    (t.bytes === String
                      ? (r.Value = "")
                      : ((r.Value = []),
                        t.bytes !== Array && (r.Value = a.newBuffer(r.Value))),
                    t.bytes === String
                      ? (r.RcvAddr = "")
                      : ((r.RcvAddr = []),
                        t.bytes !== Array &&
                          (r.RcvAddr = a.newBuffer(r.RcvAddr))),
                    t.bytes === String
                      ? (r.RcvUserName = "")
                      : ((r.RcvUserName = []),
                        t.bytes !== Array &&
                          (r.RcvUserName = a.newBuffer(r.RcvUserName))),
                    t.bytes === String
                      ? (r.SndAddr = "")
                      : ((r.SndAddr = []),
                        t.bytes !== Array &&
                          (r.SndAddr = a.newBuffer(r.SndAddr))),
                    t.bytes === String
                      ? (r.SndUserName = "")
                      : ((r.SndUserName = []),
                        t.bytes !== Array &&
                          (r.SndUserName = a.newBuffer(r.SndUserName))),
                    a.Long)
                  ) {
                    n = new a.Long(0, 0, !0);
                    r.GasPrice =
                      t.longs === String
                        ? n.toString()
                        : t.longs === Number
                          ? n.toNumber()
                          : n;
                  } else r.GasPrice = t.longs === String ? "0" : 0;
                  if (a.Long) {
                    n = new a.Long(0, 0, !0);
                    r.GasLimit =
                      t.longs === String
                        ? n.toString()
                        : t.longs === Number
                          ? n.toNumber()
                          : n;
                  } else r.GasLimit = t.longs === String ? "0" : 0;
                  (t.bytes === String
                    ? (r.Data = "")
                    : ((r.Data = []),
                      t.bytes !== Array && (r.Data = a.newBuffer(r.Data))),
                    t.bytes === String
                      ? (r.ChainID = "")
                      : ((r.ChainID = []),
                        t.bytes !== Array &&
                          (r.ChainID = a.newBuffer(r.ChainID))),
                    (r.Version = 0),
                    t.bytes === String
                      ? (r.Signature = "")
                      : ((r.Signature = []),
                        t.bytes !== Array &&
                          (r.Signature = a.newBuffer(r.Signature))),
                    (r.Options = 0));
                }
                return (
                  null != e.Nonce &&
                    e.hasOwnProperty("Nonce") &&
                    ("number" === typeof e.Nonce
                      ? (r.Nonce =
                          t.longs === String ? String(e.Nonce) : e.Nonce)
                      : (r.Nonce =
                          t.longs === String
                            ? a.Long.prototype.toString.call(e.Nonce)
                            : t.longs === Number
                              ? new a.LongBits(
                                  e.Nonce.low >>> 0,
                                  e.Nonce.high >>> 0,
                                ).toNumber(!0)
                              : e.Nonce)),
                  null != e.Value &&
                    e.hasOwnProperty("Value") &&
                    (r.Value =
                      t.bytes === String
                        ? a.base64.encode(e.Value, 0, e.Value.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.Value)
                          : e.Value),
                  null != e.RcvAddr &&
                    e.hasOwnProperty("RcvAddr") &&
                    (r.RcvAddr =
                      t.bytes === String
                        ? a.base64.encode(e.RcvAddr, 0, e.RcvAddr.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.RcvAddr)
                          : e.RcvAddr),
                  null != e.RcvUserName &&
                    e.hasOwnProperty("RcvUserName") &&
                    (r.RcvUserName =
                      t.bytes === String
                        ? a.base64.encode(
                            e.RcvUserName,
                            0,
                            e.RcvUserName.length,
                          )
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.RcvUserName)
                          : e.RcvUserName),
                  null != e.SndAddr &&
                    e.hasOwnProperty("SndAddr") &&
                    (r.SndAddr =
                      t.bytes === String
                        ? a.base64.encode(e.SndAddr, 0, e.SndAddr.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.SndAddr)
                          : e.SndAddr),
                  null != e.SndUserName &&
                    e.hasOwnProperty("SndUserName") &&
                    (r.SndUserName =
                      t.bytes === String
                        ? a.base64.encode(
                            e.SndUserName,
                            0,
                            e.SndUserName.length,
                          )
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.SndUserName)
                          : e.SndUserName),
                  null != e.GasPrice &&
                    e.hasOwnProperty("GasPrice") &&
                    ("number" === typeof e.GasPrice
                      ? (r.GasPrice =
                          t.longs === String ? String(e.GasPrice) : e.GasPrice)
                      : (r.GasPrice =
                          t.longs === String
                            ? a.Long.prototype.toString.call(e.GasPrice)
                            : t.longs === Number
                              ? new a.LongBits(
                                  e.GasPrice.low >>> 0,
                                  e.GasPrice.high >>> 0,
                                ).toNumber(!0)
                              : e.GasPrice)),
                  null != e.GasLimit &&
                    e.hasOwnProperty("GasLimit") &&
                    ("number" === typeof e.GasLimit
                      ? (r.GasLimit =
                          t.longs === String ? String(e.GasLimit) : e.GasLimit)
                      : (r.GasLimit =
                          t.longs === String
                            ? a.Long.prototype.toString.call(e.GasLimit)
                            : t.longs === Number
                              ? new a.LongBits(
                                  e.GasLimit.low >>> 0,
                                  e.GasLimit.high >>> 0,
                                ).toNumber(!0)
                              : e.GasLimit)),
                  null != e.Data &&
                    e.hasOwnProperty("Data") &&
                    (r.Data =
                      t.bytes === String
                        ? a.base64.encode(e.Data, 0, e.Data.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.Data)
                          : e.Data),
                  null != e.ChainID &&
                    e.hasOwnProperty("ChainID") &&
                    (r.ChainID =
                      t.bytes === String
                        ? a.base64.encode(e.ChainID, 0, e.ChainID.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.ChainID)
                          : e.ChainID),
                  null != e.Version &&
                    e.hasOwnProperty("Version") &&
                    (r.Version = e.Version),
                  null != e.Signature &&
                    e.hasOwnProperty("Signature") &&
                    (r.Signature =
                      t.bytes === String
                        ? a.base64.encode(e.Signature, 0, e.Signature.length)
                        : t.bytes === Array
                          ? Array.prototype.slice.call(e.Signature)
                          : e.Signature),
                  null != e.Options &&
                    e.hasOwnProperty("Options") &&
                    (r.Options = e.Options),
                  r
                );
              }),
              (e.prototype.toJSON = function () {
                return this.constructor.toObject(this, n.util.toJSONOptions);
              }),
              e
            );
          })()),
          e
        );
      })()),
        (e.exports = o));
    },
    8976: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, n) {
                  (void 0 === n && (n = r),
                    Object.defineProperty(e, n, {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }));
                }
              : function (e, t, r, n) {
                  (void 0 === n && (n = r), (e[n] = t[r]));
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
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  "default" !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    n(t, e, r);
              return (i(t, e), t);
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Hash = void 0));
        const a = s(r(2854));
        class Hash {
          constructor(t) {
            if (t)
              if (t instanceof e) this.hash = t;
              else {
                if ("string" !== typeof t)
                  throw new a.ErrBadType("hash", "buffer | string", t);
                this.hash = e.from(t, "hex");
              }
            else this.hash = e.from([]);
          }
          static empty() {
            return new Hash(e.from([]));
          }
          isEmpty() {
            return 0 == this.hash.length;
          }
          toString() {
            return this.hex();
          }
          hex() {
            return this.hash.toString("hex");
          }
          valueOf() {
            return this.hash;
          }
        }
        t.Hash = Hash;
      }).call(this, r(2).Buffer);
    },
    8979: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SignableMessage = t.MESSAGE_PREFIX = void 0));
        const n = r(4742),
          i = r(3121),
          s = r(832);
        t.MESSAGE_PREFIX = "Elrond Signed Message:\n";
        class SignableMessage {
          constructor(t) {
            ((this.message = e.from([])),
              (this.signature = new n.Signature()),
              (this.version = 1),
              (this.signer = "ErdJS"),
              (this.address = new i.Address()),
              Object.assign(this, t));
          }
          serializeForSigning() {
            const r = e.from(this.message.length.toString()),
              n = e.concat([r, this.message]);
            let i = e.concat([e.from(t.MESSAGE_PREFIX), n]);
            return s("keccak256").update(i).digest();
          }
          serializeForSigningRaw() {
            return e.concat([this.getMessageSize(), this.message]);
          }
          getSignature() {
            return this.signature;
          }
          applySignature(e) {
            this.signature = e;
          }
          getMessageSize() {
            const t = e.alloc(4);
            return (t.writeUInt32BE(this.message.length, 0), t);
          }
          toJSON() {
            return {
              address: this.address.bech32(),
              message: "0x" + this.message.toString("hex"),
              signature: "0x" + this.signature.hex(),
              version: this.version,
              signer: this.signer,
            };
          }
        }
        t.SignableMessage = SignableMessage;
      }).call(this, r(2).Buffer);
    },
    8980: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SmartContractAbi = void 0));
      const n = r(3160),
        i = r(4747);
      class SmartContractAbi {
        constructor(e, t) {
          this.interface = e.interfaces[0];
        }
        getAllEndpoints() {
          return this.interface.endpoints;
        }
        getEndpoint(e) {
          e instanceof i.ContractFunction && (e = e.name);
          let t = this.getAllEndpoints().find((t) => t.name === e);
          return (
            n.guardValueIsSetWithMessage(`endpoint [${e}] not found`, t),
            t
          );
        }
        getConstructorDefinition() {
          return this.interface.getConstructorDefinition();
        }
      }
      t.SmartContractAbi = SmartContractAbi;
    },
    8981: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.Code = void 0));
        class Code {
          constructor(e) {
            this.hex = e;
          }
          static fromBuffer(e) {
            return new Code(e.toString("hex"));
          }
          toString() {
            return this.hex;
          }
          valueOf() {
            return e.from(this.hex, "hex");
          }
        }
        t.Code = Code;
      }).call(this, r(2).Buffer);
    },
    8982: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    8983: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ArgumentErrorContext = void 0));
      const n = r(2854);
      class ArgumentErrorContext {
        constructor(e, t, r) {
          ((this.endpointName = e),
            (this.argumentIndex = t),
            (this.parameterDefinition = r));
        }
        throwError(e) {
          throw new n.ErrInvalidArgument(
            `Error when converting arguments for endpoint (endpoint name: ${this.endpointName}, argument index: ${this.argumentIndex}, name: ${this.parameterDefinition.name}, type: ${this.parameterDefinition.type})\nNested error: ${e}`,
          );
        }
        convertError(e, t) {
          this.throwError(
            `Can't convert argument (argument: ${e}, type ${typeof e}), wanted type: ${t})`,
          );
        }
        unhandledType(e, t) {
          this.throwError(`Unhandled type (function: ${e}, type: ${t})`);
        }
        guardSameLength(e, t) {
          ((e = e || []),
            e.length != t.length &&
              this.throwError(
                `Incorrect composite type length: have ${e.length}, expected ${t.length} (argument: ${e})`,
              ));
        }
        guardHasField(e, t) {
          ((e = e || {}),
            t in e ||
              this.throwError(
                `Struct argument does not contain a field named "${t}" (argument: ${JSON.stringify(e)})`,
              ));
        }
      }
      t.ArgumentErrorContext = ArgumentErrorContext;
    },
    8984: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ResultsParser = void 0));
        const n = r(8985),
          i = r(3121),
          s = r(2854),
          a = r(4740),
          o = r(4514),
          u = r(6385);
        var l, c;
        ((function (e) {
          ((e["OnTransactionCompleted"] = "completedTxEvent"),
            (e["OnSignalError"] = "signalError"),
            (e["OnWriteLog"] = "writeLog"));
        })(l || (l = {})),
          (function (e) {
            e["TooMuchGas"] = "@too much gas provided for processing";
          })(c || (c = {})));
        const d = { argsSerializer: new o.ArgSerializer() };
        class ResultsParser {
          constructor(e) {
            ((e = Object.assign(Object.assign({}, d), e)),
              (this.argsSerializer = e.argsSerializer));
          }
          parseQueryResponse(e, t) {
            let r = e.getReturnDataParts(),
              n = this.argsSerializer.buffersToValues(r, t.output),
              i = new u.ReturnCode(e.returnCode.toString());
            return {
              returnCode: i,
              returnMessage: e.returnMessage,
              values: n,
              firstValue: n[0],
              secondValue: n[1],
              thirdValue: n[2],
              lastValue: n[n.length - 1],
            };
          }
          parseUntypedQueryResponse(e) {
            let t = new u.ReturnCode(e.returnCode.toString());
            return {
              returnCode: t,
              returnMessage: e.returnMessage,
              values: e.getReturnDataParts(),
            };
          }
          parseOutcome(e, t) {
            let r = this.parseUntypedOutcome(e),
              n = this.argsSerializer.buffersToValues(r.values, t.output);
            return {
              returnCode: r.returnCode,
              returnMessage: r.returnMessage,
              values: n,
              firstValue: n[0],
              secondValue: n[1],
              thirdValue: n[2],
              lastValue: n[n.length - 1],
            };
          }
          parseUntypedOutcome(e) {
            let t,
              r = this.parseTransactionMetadata(e);
            if (((t = this.createBundleOnSimpleMoveBalance(e)), t))
              return (
                a.Logger.trace("parseUntypedOutcome(): on simple move balance"),
                t
              );
            if (((t = this.createBundleOnInvalidTransaction(e)), t))
              return (
                a.Logger.trace("parseUntypedOutcome(): on invalid transaction"),
                t
              );
            if (
              ((t = this.createBundleOnEasilyFoundResultWithReturnData(
                e.contractResults,
              )),
              t)
            )
              return (
                a.Logger.trace(
                  "parseUntypedOutcome(): on easily found result with return data",
                ),
                t
              );
            if (((t = this.createBundleOnSignalError(e.logs)), t))
              return (
                a.Logger.trace("parseUntypedOutcome(): on signal error"),
                t
              );
            if (((t = this.createBundleOnTooMuchGasWarning(e.logs)), t))
              return (
                a.Logger.trace(
                  "parseUntypedOutcome(): on 'too much gas' warning",
                ),
                t
              );
            if (
              ((t = this.createBundleOnWriteLogWhereFirstTopicEqualsAddress(
                e.logs,
                e.sender,
              )),
              t)
            )
              return (
                a.Logger.trace(
                  "parseUntypedOutcome(): on writelog with topics[0] == tx.sender",
                ),
                t
              );
            if (((t = this.createBundleWithCustomHeuristics(e, r)), t))
              return (
                a.Logger.trace("parseUntypedOutcome(): with custom heuristics"),
                t
              );
            if (((t = this.createBundleWithFallbackHeuristics(e, r)), t))
              return (
                a.Logger.trace(
                  "parseUntypedOutcome(): with fallback heuristics",
                ),
                t
              );
            throw new s.ErrCannotParseContractResults(
              "transaction " + e.hash.toString(),
            );
          }
          parseTransactionMetadata(e) {
            return new n.TransactionDecoder().getTransactionMetadata({
              sender: e.sender.bech32(),
              receiver: e.receiver.bech32(),
              data: e.data.toString("base64"),
              value: e.value.toString(),
              type: e.type,
            });
          }
          createBundleOnSimpleMoveBalance(e) {
            let t = 0 == e.contractResults.items.length,
              r = 0 == e.logs.events.length;
            return t && r
              ? {
                  returnCode: u.ReturnCode.None,
                  returnMessage: u.ReturnCode.None.toString(),
                  values: [],
                }
              : null;
          }
          createBundleOnInvalidTransaction(e) {
            return e.status.isInvalid() && e.receipt.data
              ? {
                  returnCode: u.ReturnCode.OutOfFunds,
                  returnMessage: e.receipt.data,
                  values: [],
                }
              : null;
          }
          createBundleOnEasilyFoundResultWithReturnData(e) {
            let t = e.items.find(
              (e) => 0 != e.nonce.valueOf() && e.data.startsWith("@"),
            );
            if (!t) return null;
            let { returnCode: r, returnDataParts: n } =
                this.sliceDataFieldInParts(t.data),
              i = t.returnMessage || r.toString();
            return { returnCode: r, returnMessage: i, values: n };
          }
          createBundleOnSignalError(e) {
            let t = e.findSingleOrNoneEvent(l.OnSignalError);
            if (!t) return null;
            let { returnCode: r, returnDataParts: n } =
                this.sliceDataFieldInParts(t.data),
              i = t.getLastTopic(),
              s =
                (null === i || void 0 === i ? void 0 : i.toString()) ||
                r.toString();
            return { returnCode: r, returnMessage: s, values: n };
          }
          createBundleOnTooMuchGasWarning(e) {
            let t = e.findSingleOrNoneEvent(
              l.OnWriteLog,
              (e) =>
                void 0 !=
                e.findFirstOrNoneTopic((e) =>
                  e.toString().startsWith(c.TooMuchGas),
                ),
            );
            if (!t) return null;
            let { returnCode: r, returnDataParts: n } =
                this.sliceDataFieldInParts(t.data),
              i = t.getLastTopic(),
              s =
                (null === i || void 0 === i ? void 0 : i.toString()) ||
                r.toString();
            return { returnCode: r, returnMessage: s, values: n };
          }
          createBundleOnWriteLogWhereFirstTopicEqualsAddress(e, t) {
            let r = new i.Address(t.bech32()).hex(),
              n = e.findSingleOrNoneEvent(
                l.OnWriteLog,
                (e) => void 0 != e.findFirstOrNoneTopic((e) => e.hex() == r),
              );
            if (!n) return null;
            let { returnCode: s, returnDataParts: a } =
                this.sliceDataFieldInParts(n.data),
              o = s.toString();
            return { returnCode: s, returnMessage: o, values: a };
          }
          createBundleWithCustomHeuristics(e, t) {
            return null;
          }
          createBundleWithFallbackHeuristics(e, t) {
            let r = new i.Address(t.receiver);
            for (const n of e.contractResults.items) {
              let t = n.logs.findSingleOrNoneEvent(l.OnWriteLog, (t) => {
                var n;
                let i = t.address.bech32() == e.sender.bech32(),
                  s =
                    (null === (n = t.topics[0]) || void 0 === n
                      ? void 0
                      : n.hex()) == r.hex();
                return i && s;
              });
              if (t) {
                let { returnCode: e, returnDataParts: r } =
                    this.sliceDataFieldInParts(t.data),
                  n = e.toString();
                return { returnCode: e, returnMessage: n, values: r };
              }
            }
            return null;
          }
          sliceDataFieldInParts(t) {
            let r = 1;
            t.startsWith("ESDTTransfer") && (r = 3);
            let n = this.argsSerializer.stringToBuffers(t),
              i = n[r] || e.from([]),
              a = n.slice(r + 1);
            if (0 == i.length)
              throw new s.ErrCannotParseContractResults("no return code");
            let o = u.ReturnCode.fromBuffer(i);
            return { returnCode: o, returnDataParts: a };
          }
        }
        t.ResultsParser = ResultsParser;
      }).call(this, r(2).Buffer);
    },
    8987: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SmartContract = void 0));
        const i = r(3121),
          s = r(4513),
          a = r(3806),
          o = r(6381),
          u = r(5413),
          l = r(4747),
          c = r(5429),
          d = r(3160),
          f = r(5425),
          p = n(r(3219)),
          h = r(6382),
          g = r(6384),
          y = r(2854),
          m = r(832);
        class SmartContract {
          constructor(e) {
            let { address: t, abi: r } = e;
            ((this.address = new i.Address()),
              (this.methodsExplicit = {}),
              (this.methods = {}),
              (this.address = t || new i.Address()),
              (this.abi = r),
              r && this.setupMethods());
          }
          setupMethods() {
            let e = this,
              t = this.getAbi();
            for (const r of t.getAllEndpoints()) {
              let t = r.name;
              ((this.methodsExplicit[t] = function (r) {
                let n = new l.ContractFunction(t),
                  i = new h.Interaction(e, n, r || []);
                return i;
              }),
                (this.methods[t] = function (n) {
                  let i = new l.ContractFunction(t),
                    s = g.NativeSerializer.nativeToTypedValues(n || [], r),
                    a = new h.Interaction(e, i, s || []);
                  return a;
                }));
            }
          }
          setAddress(e) {
            this.address = e;
          }
          getAddress() {
            return this.address;
          }
          setAbi(e) {
            this.abi = e;
          }
          getAbi() {
            return (d.guardValueIsSet("abi", this.abi), this.abi);
          }
          getEndpoint(e) {
            return this.getAbi().getEndpoint(e);
          }
          deploy(e) {
            let {
              code: t,
              codeMetadata: r,
              initArguments: n,
              value: u,
              gasLimit: l,
              gasPrice: c,
              chainID: d,
            } = e;
            ((r = r || new o.CodeMetadata()), (n = n || []), (u = u || 0));
            let f = a.TransactionPayload.contractDeploy()
                .setCode(t)
                .setCodeMetadata(r)
                .setInitArgs(n)
                .build(),
              p = new s.Transaction({
                receiver: i.Address.Zero(),
                sender: i.Address.Zero(),
                value: u,
                gasLimit: l,
                gasPrice: c,
                data: f,
                chainID: d,
              });
            return p;
          }
          upgrade(e) {
            let {
              code: t,
              codeMetadata: r,
              initArguments: n,
              value: u,
              gasLimit: l,
              gasPrice: c,
              chainID: d,
            } = e;
            (this.ensureHasAddress(),
              (r = r || new o.CodeMetadata()),
              (n = n || []),
              (u = u || 0));
            let f = a.TransactionPayload.contractUpgrade()
                .setCode(t)
                .setCodeMetadata(r)
                .setInitArgs(n)
                .build(),
              p = new s.Transaction({
                sender: i.Address.Zero(),
                receiver: this.getAddress(),
                value: u,
                gasLimit: l,
                gasPrice: c,
                data: f,
                chainID: d,
              });
            return p;
          }
          call(e) {
            let {
              func: t,
              args: r,
              value: n,
              gasLimit: o,
              receiver: u,
              gasPrice: l,
              chainID: c,
            } = e;
            (this.ensureHasAddress(), (r = r || []), (n = n || 0));
            let d = a.TransactionPayload.contractCall()
                .setFunction(t)
                .setArgs(r)
                .build(),
              f = new s.Transaction({
                sender: i.Address.Zero(),
                receiver: u || this.getAddress(),
                value: n,
                gasLimit: o,
                gasPrice: l,
                data: d,
                chainID: c,
              });
            return f;
          }
          createQuery(e) {
            let { func: t, args: r, value: n, caller: i } = e;
            return (
              this.ensureHasAddress(),
              new c.Query({
                address: this.getAddress(),
                func: t,
                args: r,
                value: n,
                caller: i,
              })
            );
          }
          ensureHasAddress() {
            if (!this.getAddress().bech32())
              throw new y.ErrContractHasNoAddress();
          }
          static computeAddress(t, r) {
            let n = e.alloc(8, 0),
              s = new i.Address(t.bech32()).pubkey(),
              a = s.slice(30),
              o = e.alloc(8);
            const l = new p.default(r.valueOf().toString(10)),
              c = f.bigIntToBuffer(l);
            o.write(c.reverse().toString("hex"), "hex");
            let d = e.concat([s, o]),
              h = m("keccak256").update(d).digest(),
              g = e.from(u.ArwenVirtualMachine, "hex"),
              y = e.concat([n, g, h.slice(10, 30), a]),
              T = new i.Address(y);
            return T;
          }
        }
        t.SmartContract = SmartContract;
      }).call(this, r(2).Buffer);
    },
    8988: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.RelayedTransactionV1Builder = void 0));
        const i = r(4513),
          s = r(2854),
          a = r(3806),
          o = r(5428),
          u = r(3121),
          l = n(r(3219));
        class RelayedTransactionV1Builder {
          setInnerTransaction(e) {
            return ((this.innerTransaction = e), this);
          }
          setNetworkConfig(e) {
            return ((this.netConfig = e), this);
          }
          setRelayerAddress(e) {
            return ((this.relayerAddress = e), this);
          }
          setRelayerNonce(e) {
            return ((this.relayerNonce = e), this);
          }
          build() {
            if (
              !this.innerTransaction ||
              !this.netConfig ||
              !this.relayerAddress ||
              !this.innerTransaction.getSignature()
            )
              throw new s.ErrInvalidRelayedV1BuilderArguments();
            const e = this.prepareInnerTransaction(),
              t = a.TransactionPayload.contractCall()
                .setFunction(new o.ContractFunction("relayedTx"))
                .setArgs([new o.StringValue(e)])
                .build(),
              r =
                this.netConfig.MinGasLimit +
                this.netConfig.GasPerDataByte * t.length() +
                this.innerTransaction.getGasLimit().valueOf();
            let n = new i.Transaction({
              nonce: this.relayerNonce,
              sender: this.relayerAddress,
              receiver: this.innerTransaction.getSender(),
              value: 0,
              gasLimit: r,
              data: t,
              chainID: this.netConfig.ChainID,
            });
            return (this.relayerNonce && n.setNonce(this.relayerNonce), n);
          }
          prepareInnerTransaction() {
            if (!this.innerTransaction) return "";
            const t = {
              nonce: this.innerTransaction.getNonce().valueOf(),
              sender: new u.Address(this.innerTransaction.getSender().bech32())
                .pubkey()
                .toString("base64"),
              receiver: new u.Address(
                this.innerTransaction.getReceiver().bech32(),
              )
                .pubkey()
                .toString("base64"),
              value: new l.default(
                this.innerTransaction.getValue().toString(),
                10,
              ).toNumber(),
              gasPrice: this.innerTransaction.getGasPrice().valueOf(),
              gasLimit: this.innerTransaction.getGasLimit().valueOf(),
              data: this.innerTransaction
                .getData()
                .valueOf()
                .toString("base64"),
              signature: e
                .from(this.innerTransaction.getSignature().hex(), "hex")
                .toString("base64"),
              chainID: e
                .from(this.innerTransaction.getChainID().valueOf())
                .toString("base64"),
              version: this.innerTransaction.getVersion().valueOf(),
            };
            return JSON.stringify(t);
          }
        }
        t.RelayedTransactionV1Builder = RelayedTransactionV1Builder;
      }).call(this, r(2).Buffer);
    },
    8989: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.RelayedTransactionV2Builder = void 0));
      const n = r(4513),
        i = r(3806),
        s = r(5428),
        a = r(2854);
      class RelayedTransactionV2Builder {
        setInnerTransaction(e) {
          return ((this.innerTransaction = e), this);
        }
        setInnerTransactionGasLimit(e) {
          return ((this.innerTransactionGasLimit = e), this);
        }
        setNetworkConfig(e) {
          return ((this.netConfig = e), this);
        }
        setRelayerAddress(e) {
          return ((this.relayerAddress = e), this);
        }
        setRelayerNonce(e) {
          return ((this.relayerNonce = e), this);
        }
        build() {
          if (
            !this.innerTransaction ||
            !this.innerTransactionGasLimit ||
            !this.relayerAddress ||
            !this.netConfig ||
            !this.innerTransaction.getSignature()
          )
            throw new a.ErrInvalidRelayedV2BuilderArguments();
          if (0 != this.innerTransaction.getGasLimit())
            throw new a.ErrGasLimitShouldBe0ForInnerTransaction();
          const e = i.TransactionPayload.contractCall()
            .setFunction(new s.ContractFunction("relayedTxV2"))
            .setArgs([
              new s.AddressValue(this.innerTransaction.getReceiver()),
              new s.U64Value(this.innerTransaction.getNonce().valueOf()),
              new s.BytesValue(this.innerTransaction.getData().valueOf()),
              s.BytesValue.fromHex(this.innerTransaction.getSignature().hex()),
            ])
            .build();
          let t = new n.Transaction({
            sender: this.relayerAddress,
            receiver: this.innerTransaction.getSender(),
            value: 0,
            gasLimit:
              this.innerTransactionGasLimit.valueOf() +
              this.netConfig.MinGasLimit +
              this.netConfig.GasPerDataByte * e.length(),
            data: e,
            chainID: this.netConfig.ChainID,
          });
          return (this.relayerNonce && t.setNonce(this.relayerNonce), t);
        }
      }
      t.RelayedTransactionV2Builder = RelayedTransactionV2Builder;
    },
  },
]);
