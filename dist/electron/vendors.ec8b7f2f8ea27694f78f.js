(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [41],
  {
    10719: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = function () {
        var e = new Array(128),
          t = String.fromCodePoint || String.fromCharCode,
          r = [];
        return function (i) {
          var s,
            n,
            o = i.length;
          r.length = 0;
          for (var a = 0; a < o; )
            ((n = i[a++]),
              n <= 127
                ? (s = n)
                : n <= 223
                  ? (s = ((31 & n) << 6) | (63 & i[a++]))
                  : n <= 239
                    ? (s =
                        ((15 & n) << 12) | ((63 & i[a++]) << 6) | (63 & i[a++]))
                    : String.fromCodePoint
                      ? (s =
                          ((7 & n) << 18) |
                          ((63 & i[a++]) << 12) |
                          ((63 & i[a++]) << 6) |
                          (63 & i[a++]))
                      : ((s = 63), (a += 3)),
              r.push(e[s] || (e[s] = t(s))));
          return r.join("");
        };
      };
      t.Utf8ArrayToStr = i();
    },
    10720: function (e, t, r) {
      "use strict";
      function i(e, t) {
        return new AnyOfClass(e, t);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e["INTEGER"] = "integer"),
            (e["BOOLEAN"] = "boolean"),
            (e["STRING"] = "string"),
            (e["BINARY"] = "binary"));
        })(t.DATA_FIELD_TYPE || (t.DATA_FIELD_TYPE = {})),
        (t.anyOf = i));
      class AnyOfClass {
        constructor(e, t) {
          ((this._items = e),
            (this.type = "anyOf"),
            (this.discriminatorField = "type"),
            (this.discriminatorBytePos = 0),
            Object.assign(this, t));
        }
        itemByKey(e) {
          const t = this._items.find((t) => {
            let [r, i, s] = t;
            return s === e || r == e;
          });
          return t && { schema: t[1], key: t[0], strKey: t[2] };
        }
        itemByByteKey(e) {
          const t = this._items.find((t) => {
            let [r, i] = t;
            return r === e;
          });
          return (
            t && { schema: t[1], key: t[0], strKey: t[2] || t[0].toString(10) }
          );
        }
      }
    },
    10721: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(5603),
        s = r(5602),
        n = r(4566);
      function o(e, r) {
        const { type: i, version: s } = t.parseHeader(e),
          o = n.getTransactionSchema(i, s);
        return t.parserFromSchema(o, r)(e).value;
      }
      function a(e, r) {
        return t.parserFromSchema(n.orderSchemaV2, r)(e).value;
      }
      ((t.parserFromSchema = (e, r) =>
        function (n, o) {
          void 0 === o && (o = 0);
          let a = o;
          if ("array" === e.type) {
            const u = [],
              { value: c, shift: l } = (e.fromBytes || i.P_SHORT)(n, o);
            return (
              (a += l),
              s.range(0, c).forEach((i) => {
                const s = t.parserFromSchema(e.items, r),
                  { value: o, shift: c } = s(n, a);
                (u.push(o), (a += c));
              }),
              { value: u, shift: a - o }
            );
          }
          if ("object" === e.type) {
            if (e.optional) {
              const e = 1 === n[a];
              if (((a += 1), !e)) return { value: void 0, shift: 1 };
            }
            if (e.withLength) {
              const t = e.withLength.fromBytes(n, a);
              a += t.shift;
            }
            const i = {};
            return (
              e.schema.forEach((e) => {
                const [s, o] = e,
                  u = t.parserFromSchema(o, r),
                  { value: c, shift: l } = u(n, a);
                ((a += l),
                  void 0 !== c &&
                    (Array.isArray(s) ? Object.assign(i, c) : (i[s] = c)));
              }),
              { value: i, shift: a - o }
            );
          }
          if ("anyOf" === e.type) {
            const s = (e.fromBytes || i.P_BYTE)(n, a + e.discriminatorBytePos);
            e.valueField && 0 === e.discriminatorBytePos && (a += s.shift);
            const u = e.itemByByteKey(s.value);
            if (null == u)
              throw new Error(
                "Failed to get schema for item with bytecode: " + s.value,
              );
            const c = t.parserFromSchema(u.schema, r),
              { value: l, shift: d } = c(n, a);
            return (
              (a += d),
              {
                value: e.valueField
                  ? { [e.discriminatorField]: u.strKey, [e.valueField]: l }
                  : l,
                shift: a - o,
              }
            );
          }
          if ("dataTxField" === e.type) {
            const s = i.byteToStringWithLength(n, a);
            a += s.shift;
            let o = i.P_BYTE(n, a);
            a += o.shift;
            const u = [...e.items].find((e, t) => t === o.value);
            if (!u)
              throw new Error(
                "Parser Error: Unknown dataTxField type: " + o.value,
              );
            const c = t.parserFromSchema(u[1], r),
              l = c(n, a);
            return {
              value: { value: l.value, key: s.value, type: u[0] },
              shift: l.shift + s.shift + o.shift,
            };
          }
          if ("primitive" === e.type || void 0 === e.type) {
            const t = e.fromBytes;
            let { value: s, shift: a } = t(n, o);
            return (t === i.P_LONG && r && (s = r(s)), { value: s, shift: a });
          }
          throw new Error("Parser Error: Unknown schema type: " + e.type);
        }),
        (t.parseHeader = (e) => {
          let t = 0,
            r = i.P_BYTE(e, t);
          ((t += r.shift),
            0 === r.value && ((r = i.P_BYTE(e, t)), (t += r.shift)));
          let s = i.P_BYTE(e, t);
          return { type: r.value, version: s.value };
        }),
        (t.parseTx = o),
        (t.parseOrder = a));
    },
    10722: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(5604),
        { parse: s, stringify: n } = i(),
        o = r(4566),
        a = r(4828),
        u = r(2928);
      function c(e, t) {
        return 0 === e.length
          ? t
          : "object" === typeof t
            ? c(e.slice(1), t[e[0]])
            : void 0;
      }
      const l = (e, t, r) => {
        function i(t, s) {
          if (null == s) return !1;
          if (0 === t.length && ("primitive" === s.type || void 0 === s.type))
            return s.toBytes === a.LONG;
          if ("object" === s.type) {
            const e = s.schema.find((e) => {
              let [r, i] = e;
              return r === t[0];
            });
            return i(t.slice(1), e && e[1]);
          }
          if ("array" === s.type) return i(t.slice(1), s.items);
          if ("dataTxField" === s.type) {
            if ("value" !== t[0]) return !1;
            const n = c(e.slice(0, e.length - 1), r),
              o = s.items.get(n.type);
            return i(t.slice(1), o);
          }
          if ("anyOf" === s.type) {
            const n = c(e.slice(0, e.length - 1), r),
              o = n[s.discriminatorField],
              a = s.itemByKey(o);
            return (
              !!a &&
              (null != s.valueField && e[e.length - 1] === s.valueField
                ? i(t.slice(1), a.schema)
                : i(t, a.schema))
            );
          }
          return !1;
        }
        return i(e, t);
      };
      function d(e, t) {
        const r = [],
          i = [];
        function s(i) {
          return "string" === typeof i && l(r, t, e)
            ? i
            : "boolean" === typeof i ||
                i instanceof Boolean ||
                null === i ||
                "number" === typeof i ||
                i instanceof Number ||
                "string" === typeof i ||
                i instanceof String ||
                i instanceof Date
              ? JSON.stringify(i)
              : Array.isArray(i)
                ? n(i)
                : i && "object" === typeof i
                  ? o(i)
                  : void 0;
        }
        function n(e) {
          let t = "[";
          const n = i.length;
          i[n] = e;
          for (let i = 0; i < e.length; i++) {
            let o = i + "",
              a = e[i];
            ("undefined" !== typeof a && "function" !== typeof a
              ? ((r[n] = o), (t += s(a)))
              : (t += "null"),
              i < e.length - 1 && (t += ","));
          }
          return ((i.length = n), (r.length = n), (t += "]"), t);
        }
        function o(e) {
          let t = !0,
            n = "{";
          const o = i.length;
          i[o] = e;
          for (let i in e)
            if (e.hasOwnProperty(i)) {
              let u = e[i];
              a(u) &&
                (t ? (t = !1) : (n += ","),
                (n += '"' + i + '":'),
                (r[o] = i),
                (n += s(u)));
            }
          return ((i.length = o), (r.length = o), (n += "}"), n);
        }
        function a(e) {
          return "undefined" !== typeof e && "function" !== typeof e;
        }
        return s(e) || "";
      }
      function f(e, t) {
        const r = s(e);
        return t ? u.convertTxLongFields(r, t) : r;
      }
      function h(e, t) {
        const { type: r, version: i } = e,
          s = o.getTransactionSchema(r, i),
          n = u.convertLongFields(e, s, void 0, t);
        return d(n, s);
      }
      function p(e, t) {
        const r = s(e),
          i = 2 === r.version ? o.orderSchemaV2 : o.orderSchemaV1;
        return t ? u.convertLongFields(r, i, t) : r;
      }
      function y(e, t) {
        const r = 2 === e.version ? o.orderSchemaV2 : o.orderSchemaV1,
          i = u.convertLongFields(e, r, void 0, t);
        return d(i, r);
      }
      ((t.stringifyWithSchema = d),
        (t.parseTx = f),
        (t.stringifyTx = h),
        (t.parseOrder = p),
        (t.stringifyOrder = y));
    },
    10723: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.TRANSFER),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 2]),
          assetId: s.isAssetId,
          feeAssetId: s.isAssetId,
          recipient: s.isRecipient,
          amount: s.isNumberLike,
          attachment: s.isAttachment,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.transferValidator = s.validateByShema(n, s.getError);
    },
    10724: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.MASS_TRANSFER),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 0, 1]),
          transfers: s.validatePipe(
            s.isArray,
            s.pipe(s.prop("length"), s.gte(0)),
            (e) =>
              e.every(
                s.validatePipe(
                  s.isRequired(!0),
                  s.pipe(s.prop("recipient"), s.isRecipient),
                  s.pipe(s.prop("amount"), s.isNumberLike),
                ),
              ),
          ),
          assetId: s.isAssetId,
          attachment: s.isAttachment,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.massTransferValidator = s.validateByShema(n, s.getError);
    },
    10725: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.ALIAS),
          version: s.orEq([void 0, 2]),
          senderPublicKey: s.isPublicKey,
          alias: s.isValidAliasName,
          fee: s.isNumberLike,
          chainId: s.isNumber,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.aliasValidator = s.validateByShema(n, s.getError);
    },
    10726: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.BURN),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 2]),
          assetId: s.isAssetId,
          amount: s.isNumberLike,
          chainId: s.isNumber,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.burnValidator = s.validateByShema(n, s.getError);
    },
    10727: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.CANCEL_LEASE),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 2]),
          leaseId: s.isAssetId,
          chainId: s.isNumber,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.cancelLeaseValidator = s.validateByShema(n, s.getError);
    },
    10728: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.DATA),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 0, 1]),
          data: (e) => s.isArray(e) && e.every((e) => s.isValidData(e)),
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.dataValidator = s.validateByShema(n, s.getError);
    },
    10729: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.SPONSORSHIP),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 0, 1]),
          assetId: s.isAssetId,
          minSponsoredAssetFee: s.isNumberLike,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.sponsorshipValidator = s.validateByShema(n, s.getError);
    },
    10730: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.SET_ASSET_SCRIPT),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 0, 1]),
          assetId: s.isAssetId,
          chainId: s.isNumber,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          script: s.isBase64,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.setAssetScriptValidator = s.validateByShema(n, s.getError);
    },
    10731: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.SET_SCRIPT),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 0, 1]),
          chainId: s.isNumber,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          script: s.ifElse(s.isEq(null), s.defaultValue(!0), s.isBase64),
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.setScriptValidator = s.validateByShema(n, s.getError);
    },
    10732: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.REISSUE),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 2]),
          assetId: s.isAssetId,
          quantity: s.isNumberLike,
          reissuable: s.isBoolean,
          chainId: s.isNumber,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.reissueValidator = s.validateByShema(n, s.getError);
    },
    10733: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.ISSUE),
          version: s.orEq([void 0, 2]),
          senderPublicKey: s.isPublicKey,
          name: s.isValidAssetName,
          description: s.isValidAssetDescription,
          quantity: s.isNumberLike,
          decimals: s.isNumber,
          reissuable: s.isBoolean,
          script: s.ifElse(s.isRequired(!0), s.isBase64, s.defaultValue(!0)),
          chainId: s.isNumber,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.issueValidator = s.validateByShema(n, s.getError);
    },
    10734: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.LEASE),
          version: s.orEq([void 0, 2]),
          senderPublicKey: s.isPublicKey,
          recipient: s.isRecipient,
          amount: s.isNumberLike,
          fee: s.isNumberLike,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.leaseValidator = s.validateByShema(n, s.getError);
    },
    10735: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2987),
        n = {
          type: s.isEq(i.TRANSACTION_TYPE.INVOKE_SCRIPT),
          senderPublicKey: s.isPublicKey,
          version: s.orEq([void 0, 0, 1]),
          dApp: s.isRecipient,
          call: s.ifElse(
            s.isRequired(!1),
            s.defaultValue(!0),
            s.validatePipe(
              s.pipe(s.prop("function"), s.isString),
              s.pipe(s.prop("function"), s.prop("length"), s.gte(0)),
              s.pipe(s.prop("args"), s.isArray),
              (e) =>
                e.every(s.validatePipe(s.isRequired(!0), s.isValidDataPair)),
            ),
          ),
          payment: s.validatePipe(s.isArray, (e) =>
            e.every(
              s.validatePipe(
                s.pipe(s.prop("amount"), s.isNumberLike),
                s.pipe(s.prop("assetId"), s.isAssetId),
              ),
            ),
          ),
          fee: s.isNumberLike,
          feeAssetId: s.isAssetId,
          chainId: s.isNumber,
          timestamp: s.isNumber,
          proofs: s.ifElse(s.isArray, s.defaultValue(!0), s.orEq([void 0])),
        };
      t.invokeValidator = s.validateByShema(n, s.getError);
    },
    10736: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(6746),
        n = r(2987),
        o = {
          type: n.isEq(i.TRANSACTION_TYPE.EXCHANGE),
          senderPublicKey: n.isPublicKey,
          version: n.orEq([void 0, 0, 1, 2]),
          order1: n.validatePipe(n.isRequired(!0), s.orderValidator),
          order2: n.validatePipe(n.isRequired(!0), s.orderValidator),
          amount: n.isNumberLike,
          price: n.isNumberLike,
          buyMatcherFee: n.isNumberLike,
          sellMatcherFee: n.isNumberLike,
          fee: n.isNumberLike,
          timestamp: n.isNumber,
          proofs: n.ifElse(n.isArray, n.defaultValue(!0), n.orEq([void 0])),
        };
      t.exchangeValidator = n.validateByShema(o, n.getError);
    },
    10737: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2987),
        s = {
          sender: i.isPublicKey,
          orderId: i.isHash,
          signature: i.isBase58,
          hash: i.isBase58,
        };
      t.cancelOrderValidator = i.validateByShema(s, i.getError);
    },
    10738: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2987),
        s = { version: i.isEq(1), binary: i.isBase64 },
        n = {
          version: i.isEq(2),
          data: i.validatePipe(i.isArray, (e) =>
            e.every(i.validatePipe(i.isRequired(!0), i.isValidDataPair)),
          ),
        },
        o = i.validateByShema(s, i.getError),
        a = i.validateByShema(n, i.getError);
      t.customDataValidator = i.ifElse(
        i.pipe(i.prop("version"), i.isEq(1)),
        o,
        a,
      );
    },
    10739: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2987),
        s = { data: i.isString, host: i.isString };
      t.authValidator = i.validateByShema(s, i.getError);
    },
    10740: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2987),
        s = { publicKey: i.isPublicKey, timestamp: i.isNumber };
      t.authValidator = i.validateByShema(s, i.getError);
    },
    10741: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939),
        s = r(3009),
        n = r(2928),
        o = r(2986);
      function a(e, t) {
        const r = s.isOrder(e) ? e.assetPair.amountAsset : e.amountAsset,
          a = s.isOrder(e) ? e.assetPair.priceAsset : e.priceAsset,
          u = s.isOrder(e) ? e.proofs : [],
          {
            matcherFee: c,
            matcherPublicKey: l,
            price: d,
            amount: f,
            orderType: h,
            expiration: p,
            timestamp: y,
          } = e,
          m = y || Date.now(),
          v = s.convertToPairs(t),
          S = e.senderPublicKey || s.getSenderPublicKey(v, e),
          b = null === e.version ? void 0 : e.version || 2,
          g = {
            orderType: h,
            version: b,
            assetPair: { amountAsset: r, priceAsset: a },
            price: d,
            amount: f,
            timestamp: m,
            expiration: p || m + 25056e5,
            matcherFee: c || 3e5,
            matcherPublicKey: l,
            senderPublicKey: S,
            proofs: u,
            id: "",
          };
        3 === g.version &&
          (g.matcherFeeAssetId =
            "WAVES" === e.matcherFeeAssetId ? null : e.matcherFeeAssetId);
        const E = n.binary.serializeOrder(g);
        return (
          v.forEach((e) => {
            let [t, r] = e;
            return s.addProof(g, i.signBytes(t, E), r);
          }),
          o.validate.order(g),
          (g.id = i.base58Encode(i.blake2b(E))),
          (void 0 !== g.version && 1 !== g.version) ||
            (g.signature = g.proofs && g.proofs[0]),
          g
        );
      }
      t.order = a;
    },
    10742: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939),
        s = r(2928),
        { BASE58_STRING: n } = s.serializePrimitives,
        o = r(3009),
        a = r(2986);
      function u(e, t) {
        const r = o.convertToPairs(t),
          s =
            e.senderPublicKey ||
            o.getSenderPublicKey(r, { senderPublicKey: void 0 }),
          u = i.concat(n(s), n(e.orderId)),
          c = e.signature || (null != t && i.signBytes(t, u)) || "",
          l = i.base58Encode(i.blake2b(Uint8Array.from(u))),
          d = { sender: s, orderId: e.orderId, signature: c, hash: l };
        return (a.validate.cancelOrder(d), d);
      }
      ((t.cancelOrderParamsToBytes = (e) =>
        i.concat(n(e.sender), n(e.orderId))),
        (t.cancelOrder = u));
    },
    10743: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = i(r(6750)),
        n = r(2928),
        o = r(2939),
        a = r(2900),
        u = r(5611),
        c = r(5612),
        l = r(5605),
        d = r(5606),
        f = r(5608),
        h = r(5609),
        p = r(5610),
        y = r(5594),
        m = r(5613),
        v = r(5614),
        S = r(3009),
        b = r(5615),
        g = r(5607),
        E = r(5616),
        A = r(5617),
        T = r(6747),
        N = r(6748),
        P = r(6749);
      function _(e, r) {
        if (!t.txTypeMap[e.type]) throw new Error("Unknown tx type: " + e.type);
        return t.txTypeMap[e.type].sign(e, r);
      }
      function I(e) {
        return S.isOrder(e)
          ? n.binary.serializeOrder(e)
          : n.binary.serializeTx(e);
      }
      function O(e, t, r) {
        (void 0 === t && (t = 0), (r = r || e.senderPublicKey));
        const i = I(e),
          s = null == e.version ? e.signature : e.proofs[t];
        return o.verifySignature(r, i, s);
      }
      function R(e) {
        const t = T.serializeCustomData(e);
        return o.verifySignature(e.publicKey, t, e.signature);
      }
      function B(e, t, r) {
        r = r || "W";
        const i = N.serializeAuthData(t),
          s = o.address({ publicKey: e.publicKey }, r);
        return (
          s === e.address && o.verifySignature(e.publicKey, i, e.signature)
        );
      }
      function w(e, t, r) {
        r = r || "W";
        const i = P.serializeWavesAuthData(t),
          s = o.address({ publicKey: e.publicKey }, r);
        return (
          s === e.address && o.verifySignature(e.publicKey, i, e.signature)
        );
      }
      function L(e, t) {
        let r, i;
        return (
          "string" === typeof t
            ? ((i = t), (r = "matcher/orderbook"))
            : ((i = t.matcherUrl),
              (r = t.market
                ? "matcher/orderbook/market"
                : "matcher/orderbook")),
          s.default
            .post(r, n.json.stringifyOrder(e), {
              baseURL: i,
              headers: { "content-type": "application/json" },
            })
            .then((e) => e.data)
            .catch((e) =>
              Promise.reject(
                e.response && 400 === e.response.status
                  ? new Error(e.response.data.message)
                  : e,
              ),
            )
        );
      }
      function C(e, t, r, i) {
        return s.default
          .post(
            `matcher/orderbook/${t || "WAVES"}/${r || "WAVES"}/cancel`,
            JSON.stringify(e),
            { baseURL: i, headers: { "content-type": "application/json" } },
          )
          .then((e) => e.data)
          .catch((e) =>
            Promise.reject(
              e.response && 400 === e.response.status
                ? new Error(e.response.data.message)
                : e,
            ),
          );
      }
      ((t.txTypeMap = {
        [a.TRANSACTION_TYPE.ISSUE]: { sign: (e, t) => u.issue(e, t) },
        [a.TRANSACTION_TYPE.TRANSFER]: { sign: (e, t) => c.transfer(e, t) },
        [a.TRANSACTION_TYPE.REISSUE]: { sign: (e, t) => l.reissue(e, t) },
        [a.TRANSACTION_TYPE.BURN]: { sign: (e, t) => d.burn(e, t) },
        [a.TRANSACTION_TYPE.LEASE]: { sign: (e, t) => f.lease(e, t) },
        [a.TRANSACTION_TYPE.CANCEL_LEASE]: {
          sign: (e, t) => h.cancelLease(e, t),
        },
        [a.TRANSACTION_TYPE.ALIAS]: { sign: (e, t) => m.alias(e, t) },
        [a.TRANSACTION_TYPE.MASS_TRANSFER]: {
          sign: (e, t) => y.massTransfer(e, t),
        },
        [a.TRANSACTION_TYPE.DATA]: { sign: (e, t) => p.data(e, t) },
        [a.TRANSACTION_TYPE.SET_SCRIPT]: { sign: (e, t) => v.setScript(e, t) },
        [a.TRANSACTION_TYPE.SET_ASSET_SCRIPT]: {
          sign: (e, t) => b.setAssetScript(e, t),
        },
        [a.TRANSACTION_TYPE.SPONSORSHIP]: {
          sign: (e, t) => E.sponsorship(e, t),
        },
        [a.TRANSACTION_TYPE.EXCHANGE]: { sign: (e, t) => g.exchange(e, t) },
        [a.TRANSACTION_TYPE.INVOKE_SCRIPT]: {
          sign: (e, t) => A.invokeScript(e, t),
        },
      }),
        (t.signTx = _),
        (t.serialize = I),
        (t.verify = O),
        (t.verifyCustomData = R),
        (t.verifyAuthData = B),
        (t.verifyWavesAuthData = w),
        (t.submitOrder = L),
        (t.cancelSubmittedOrder = C));
    },
    10744: function (e, t, r) {
      "use strict";
      var i = r(3198),
        s = r(6751),
        n = r(10745),
        o = r(6757),
        a = r(6754);
      function u(e) {
        var t = new n(e),
          r = s(n.prototype.request, t);
        return (i.extend(r, n.prototype, t), i.extend(r, t), r);
      }
      var c = u(a);
      ((c.Axios = n),
        (c.create = function (e) {
          return u(o(c.defaults, e));
        }),
        (c.Cancel = r(6758)),
        (c.CancelToken = r(10758)),
        (c.isCancel = r(6753)),
        (c.all = function (e) {
          return Promise.all(e);
        }),
        (c.spread = r(10759)),
        (e.exports = c),
        (e.exports.default = c));
    },
    10745: function (e, t, r) {
      "use strict";
      var i = r(3198),
        s = r(6752),
        n = r(10746),
        o = r(10747),
        a = r(6757);
      function u(e) {
        ((this.defaults = e),
          (this.interceptors = { request: new n(), response: new n() }));
      }
      ((u.prototype.request = function (e) {
        ("string" === typeof e
          ? ((e = arguments[1] || {}), (e.url = arguments[0]))
          : (e = e || {}),
          (e = a(this.defaults, e)),
          e.method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get"));
        var t = [o, void 0],
          r = Promise.resolve(e);
        (this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          }));
        while (t.length) r = r.then(t.shift(), t.shift());
        return r;
      }),
        (u.prototype.getUri = function (e) {
          return (
            (e = a(this.defaults, e)),
            s(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        i.forEach(["delete", "get", "head", "options"], function (e) {
          u.prototype[e] = function (t, r) {
            return this.request(i.merge(r || {}, { method: e, url: t }));
          };
        }),
        i.forEach(["post", "put", "patch"], function (e) {
          u.prototype[e] = function (t, r, s) {
            return this.request(
              i.merge(s || {}, { method: e, url: t, data: r }),
            );
          };
        }),
        (e.exports = u));
    },
    10746: function (e, t, r) {
      "use strict";
      var i = r(3198);
      function s() {
        this.handlers = [];
      }
      ((s.prototype.use = function (e, t) {
        return (
          this.handlers.push({ fulfilled: e, rejected: t }),
          this.handlers.length - 1
        );
      }),
        (s.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (s.prototype.forEach = function (e) {
          i.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = s));
    },
    10747: function (e, t, r) {
      "use strict";
      var i = r(3198),
        s = r(10748),
        n = r(6753),
        o = r(6754);
      function a(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
      }
      e.exports = function (e) {
        (a(e),
          (e.headers = e.headers || {}),
          (e.data = s(e.data, e.headers, e.transformRequest)),
          (e.headers = i.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          i.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            },
          ));
        var t = e.adapter || o.adapter;
        return t(e).then(
          function (t) {
            return (
              a(e),
              (t.data = s(t.data, t.headers, e.transformResponse)),
              t
            );
          },
          function (t) {
            return (
              n(t) ||
                (a(e),
                t &&
                  t.response &&
                  (t.response.data = s(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse,
                  ))),
              Promise.reject(t)
            );
          },
        );
      };
    },
    10748: function (e, t, r) {
      "use strict";
      var i = r(3198);
      e.exports = function (e, t, r) {
        return (
          i.forEach(r, function (r) {
            e = r(e, t);
          }),
          e
        );
      };
    },
    10749: function (e, t, r) {
      "use strict";
      var i = r(3198);
      e.exports = function (e, t) {
        i.forEach(e, function (r, i) {
          i !== t &&
            i.toUpperCase() === t.toUpperCase() &&
            ((e[t] = r), delete e[i]);
        });
      };
    },
    10750: function (e, t, r) {
      "use strict";
      var i = r(6756);
      e.exports = function (e, t, r) {
        var s = r.config.validateStatus;
        !s || s(r.status)
          ? e(r)
          : t(
              i(
                "Request failed with status code " + r.status,
                r.config,
                null,
                r.request,
                r,
              ),
            );
      };
    },
    10751: function (e, t, r) {
      "use strict";
      e.exports = function (e, t, r, i, s) {
        return (
          (e.config = t),
          r && (e.code = r),
          (e.request = i),
          (e.response = s),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
            };
          }),
          e
        );
      };
    },
    10752: function (e, t, r) {
      "use strict";
      var i = r(10753),
        s = r(10754);
      e.exports = function (e, t) {
        return e && !i(t) ? s(e, t) : t;
      };
    },
    10753: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    10754: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    10755: function (e, t, r) {
      "use strict";
      var i = r(3198),
        s = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          r,
          n,
          o = {};
        return e
          ? (i.forEach(e.split("\n"), function (e) {
              if (
                ((n = e.indexOf(":")),
                (t = i.trim(e.substr(0, n)).toLowerCase()),
                (r = i.trim(e.substr(n + 1))),
                t)
              ) {
                if (o[t] && s.indexOf(t) >= 0) return;
                o[t] =
                  "set-cookie" === t
                    ? (o[t] ? o[t] : []).concat([r])
                    : o[t]
                      ? o[t] + ", " + r
                      : r;
              }
            }),
            o)
          : o;
      };
    },
    10756: function (e, t, r) {
      "use strict";
      var i = r(3198);
      e.exports = i.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            function s(e) {
              var i = e;
              return (
                t && (r.setAttribute("href", i), (i = r.href)),
                r.setAttribute("href", i),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname:
                    "/" === r.pathname.charAt(0)
                      ? r.pathname
                      : "/" + r.pathname,
                }
              );
            }
            return (
              (e = s(window.location.href)),
              function (t) {
                var r = i.isString(t) ? s(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })();
    },
    10757: function (e, t, r) {
      "use strict";
      var i = r(3198);
      e.exports = i.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (e, t, r, s, n, o) {
                var a = [];
                (a.push(e + "=" + encodeURIComponent(t)),
                  i.isNumber(r) &&
                    a.push("expires=" + new Date(r).toGMTString()),
                  i.isString(s) && a.push("path=" + s),
                  i.isString(n) && a.push("domain=" + n),
                  !0 === o && a.push("secure"),
                  (document.cookie = a.join("; ")));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })();
    },
    10758: function (e, t, r) {
      "use strict";
      var i = r(6758);
      function s(e) {
        if ("function" !== typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        e(function (e) {
          r.reason || ((r.reason = new i(e)), t(r.reason));
        });
      }
      ((s.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (s.source = function () {
          var e,
            t = new s(function (t) {
              e = t;
            });
          return { token: t, cancel: e };
        }),
        (e.exports = s));
    },
    10759: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    10760: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(5611),
        n = r(5612),
        o = r(5605),
        a = r(5606),
        u = r(5608),
        c = r(5609),
        l = r(5613),
        d = r(5594),
        f = r(5610),
        h = r(5614),
        p = r(5615),
        y = r(5616),
        m = r(5607),
        v = r(5617);
      function S(e) {
        switch (e.type) {
          case i.TRANSACTION_TYPE.ISSUE:
            return s.issue(e);
          case i.TRANSACTION_TYPE.TRANSFER:
            return n.transfer(e);
          case i.TRANSACTION_TYPE.REISSUE:
            return o.reissue(e);
          case i.TRANSACTION_TYPE.BURN:
            return a.burn(e);
          case i.TRANSACTION_TYPE.LEASE:
            return u.lease(e);
          case i.TRANSACTION_TYPE.CANCEL_LEASE:
            return c.cancelLease(e);
          case i.TRANSACTION_TYPE.ALIAS:
            return l.alias(e);
          case i.TRANSACTION_TYPE.MASS_TRANSFER:
            return d.massTransfer(e);
          case i.TRANSACTION_TYPE.DATA:
            return f.data(e);
          case i.TRANSACTION_TYPE.SET_SCRIPT:
            return h.setScript(e);
          case i.TRANSACTION_TYPE.SET_ASSET_SCRIPT:
            return p.setAssetScript(e);
          case i.TRANSACTION_TYPE.SPONSORSHIP:
            return y.sponsorship(e);
          case i.TRANSACTION_TYPE.EXCHANGE:
            return m.exchange(e);
          case i.TRANSACTION_TYPE.INVOKE_SCRIPT:
            return v.invokeScript(e);
          default:
            throw new Error("Unknown tx type: " + e.type);
        }
      }
      t.makeTx = S;
    },
    10761: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939);
      ((t.encryptSeed = i.encryptSeed), (t.decryptSeed = i.decryptSeed));
      const s = r(2928);
      class Seed {
        constructor(e, t) {
          if (e.length < 12)
            throw new Error("Your seed length is less than allowed in config");
          ((this.phrase = e),
            (this.address = i.address(e, t)),
            (this.keyPair = {
              privateKey: i.privateKey(e),
              publicKey: i.publicKey(e),
            }),
            Object.freeze(this),
            Object.freeze(this.keyPair));
        }
        encrypt(e, t) {
          return Seed.encryptSeedPhrase(this.phrase, e, t);
        }
        static encryptSeedPhrase(e, t, r) {
          if ((void 0 === r && (r = 5e3), t && t.length, e.length < 12))
            throw new Error(
              "The seed phrase you are trying to encrypt is too short",
            );
          return i.encryptSeed(e, t, r);
        }
        static decryptSeedPhrase(e, t, r) {
          void 0 === r && (r = 5e3);
          const s = "The password is wrong";
          let n;
          try {
            n = i.decryptSeed(e, t, r);
          } catch (o) {
            throw new Error(s);
          }
          if ("" === n || n.length < 12) throw new Error(s);
          return n;
        }
        static create(e) {
          void 0 === e && (e = 15);
          const t = n(e),
            r = 12;
          if (t.length < r)
            throw new Error(
              `The resulted seed length is less than the minimum length (${r})`,
            );
          return new Seed(t);
        }
        static fromExistingPhrase(e) {
          const t = 12;
          if (e.length < t)
            throw new Error(
              `The resulted seed length is less than the minimum length (${t})`,
            );
          return new Seed(e);
        }
      }
      function n(e) {
        return (void 0 === e && (e = 15), i.randomSeed(e));
      }
      function o(e, t) {
        void 0 === t && (t = 5e3);
        while (t--) {
          const t = s.serializePrimitives.STRING(e);
          e = i.base16Encode(i.sha256(t));
        }
        return e;
      }
      ((t.Seed = Seed), (t.generateNewSeed = n), (t.strengthenPassword = o));
    },
    2754: function (e, t) {
      e.exports = i;
      var r = null;
      try {
        r = new WebAssembly.Instance(
          new WebAssembly.Module(
            new Uint8Array([
              0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127,
              127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1,
              65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95,
              115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95,
              115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95,
              104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1,
              1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32,
              3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32,
              4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134,
              132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32,
              135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1,
              173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132,
              128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1,
              126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3,
              173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4,
              167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132,
              32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135,
              167, 36, 0, 32, 4, 167, 11,
            ]),
          ),
          {},
        ).exports;
      } catch (O) {}
      function i(e, t, r) {
        ((this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!r));
      }
      function s(e) {
        return !0 === (e && e["__isLong__"]);
      }
      (i.prototype.__isLong__,
        Object.defineProperty(i.prototype, "__isLong__", { value: !0 }),
        (i.isLong = s));
      var n = {},
        o = {};
      function a(e, t) {
        var r, i, s;
        return t
          ? ((e >>>= 0),
            (s = 0 <= e && e < 256) && ((i = o[e]), i)
              ? i
              : ((r = c(e, (0 | e) < 0 ? -1 : 0, !0)), s && (o[e] = r), r))
          : ((e |= 0),
            (s = -128 <= e && e < 128) && ((i = n[e]), i)
              ? i
              : ((r = c(e, e < 0 ? -1 : 0, !1)), s && (n[e] = r), r));
      }
      function u(e, t) {
        if (isNaN(e)) return t ? g : b;
        if (t) {
          if (e < 0) return g;
          if (e >= m) return P;
        } else {
          if (e <= -v) return _;
          if (e + 1 >= v) return N;
        }
        return e < 0 ? u(-e, t).neg() : c((e % y) | 0, (e / y) | 0, t);
      }
      function c(e, t, r) {
        return new i(e, t, r);
      }
      ((i.fromInt = a), (i.fromNumber = u), (i.fromBits = c));
      var l = Math.pow;
      function d(e, t, r) {
        if (0 === e.length) throw Error("empty string");
        if (
          "NaN" === e ||
          "Infinity" === e ||
          "+Infinity" === e ||
          "-Infinity" === e
        )
          return b;
        if (
          ("number" === typeof t ? ((r = t), (t = !1)) : (t = !!t),
          (r = r || 10),
          r < 2 || 36 < r)
        )
          throw RangeError("radix");
        var i;
        if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
        if (0 === i) return d(e.substring(1), t, r).neg();
        for (var s = u(l(r, 8)), n = b, o = 0; o < e.length; o += 8) {
          var a = Math.min(8, e.length - o),
            c = parseInt(e.substring(o, o + a), r);
          if (a < 8) {
            var f = u(l(r, a));
            n = n.mul(f).add(u(c));
          } else ((n = n.mul(s)), (n = n.add(u(c))));
        }
        return ((n.unsigned = t), n);
      }
      function f(e, t) {
        return "number" === typeof e
          ? u(e, t)
          : "string" === typeof e
            ? d(e, t)
            : c(e.low, e.high, "boolean" === typeof t ? t : e.unsigned);
      }
      ((i.fromString = d), (i.fromValue = f));
      var h = 65536,
        p = 1 << 24,
        y = h * h,
        m = y * y,
        v = m / 2,
        S = a(p),
        b = a(0);
      i.ZERO = b;
      var g = a(0, !0);
      i.UZERO = g;
      var E = a(1);
      i.ONE = E;
      var A = a(1, !0);
      i.UONE = A;
      var T = a(-1);
      i.NEG_ONE = T;
      var N = c(-1, 2147483647, !1);
      i.MAX_VALUE = N;
      var P = c(-1, -1, !0);
      i.MAX_UNSIGNED_VALUE = P;
      var _ = c(0, -2147483648, !1);
      i.MIN_VALUE = _;
      var I = i.prototype;
      ((I.toInt = function () {
        return this.unsigned ? this.low >>> 0 : this.low;
      }),
        (I.toNumber = function () {
          return this.unsigned
            ? (this.high >>> 0) * y + (this.low >>> 0)
            : this.high * y + (this.low >>> 0);
        }),
        (I.toString = function (e) {
          if (((e = e || 10), e < 2 || 36 < e)) throw RangeError("radix");
          if (this.isZero()) return "0";
          if (this.isNegative()) {
            if (this.eq(_)) {
              var t = u(e),
                r = this.div(t),
                i = r.mul(t).sub(this);
              return r.toString(e) + i.toInt().toString(e);
            }
            return "-" + this.neg().toString(e);
          }
          var s = u(l(e, 6), this.unsigned),
            n = this,
            o = "";
          while (1) {
            var a = n.div(s),
              c = n.sub(a.mul(s)).toInt() >>> 0,
              d = c.toString(e);
            if (((n = a), n.isZero())) return d + o;
            while (d.length < 6) d = "0" + d;
            o = "" + d + o;
          }
        }),
        (I.getHighBits = function () {
          return this.high;
        }),
        (I.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        }),
        (I.getLowBits = function () {
          return this.low;
        }),
        (I.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        }),
        (I.getNumBitsAbs = function () {
          if (this.isNegative())
            return this.eq(_) ? 64 : this.neg().getNumBitsAbs();
          for (
            var e = 0 != this.high ? this.high : this.low, t = 31;
            t > 0;
            t--
          )
            if (0 != (e & (1 << t))) break;
          return 0 != this.high ? t + 33 : t + 1;
        }),
        (I.isZero = function () {
          return 0 === this.high && 0 === this.low;
        }),
        (I.eqz = I.isZero),
        (I.isNegative = function () {
          return !this.unsigned && this.high < 0;
        }),
        (I.isPositive = function () {
          return this.unsigned || this.high >= 0;
        }),
        (I.isOdd = function () {
          return 1 === (1 & this.low);
        }),
        (I.isEven = function () {
          return 0 === (1 & this.low);
        }),
        (I.equals = function (e) {
          return (
            s(e) || (e = f(e)),
            (this.unsigned === e.unsigned ||
              this.high >>> 31 !== 1 ||
              e.high >>> 31 !== 1) &&
              this.high === e.high &&
              this.low === e.low
          );
        }),
        (I.eq = I.equals),
        (I.notEquals = function (e) {
          return !this.eq(e);
        }),
        (I.neq = I.notEquals),
        (I.ne = I.notEquals),
        (I.lessThan = function (e) {
          return this.comp(e) < 0;
        }),
        (I.lt = I.lessThan),
        (I.lessThanOrEqual = function (e) {
          return this.comp(e) <= 0;
        }),
        (I.lte = I.lessThanOrEqual),
        (I.le = I.lessThanOrEqual),
        (I.greaterThan = function (e) {
          return this.comp(e) > 0;
        }),
        (I.gt = I.greaterThan),
        (I.greaterThanOrEqual = function (e) {
          return this.comp(e) >= 0;
        }),
        (I.gte = I.greaterThanOrEqual),
        (I.ge = I.greaterThanOrEqual),
        (I.compare = function (e) {
          if ((s(e) || (e = f(e)), this.eq(e))) return 0;
          var t = this.isNegative(),
            r = e.isNegative();
          return t && !r
            ? -1
            : !t && r
              ? 1
              : this.unsigned
                ? e.high >>> 0 > this.high >>> 0 ||
                  (e.high === this.high && e.low >>> 0 > this.low >>> 0)
                  ? -1
                  : 1
                : this.sub(e).isNegative()
                  ? -1
                  : 1;
        }),
        (I.comp = I.compare),
        (I.negate = function () {
          return !this.unsigned && this.eq(_) ? _ : this.not().add(E);
        }),
        (I.neg = I.negate),
        (I.add = function (e) {
          s(e) || (e = f(e));
          var t = this.high >>> 16,
            r = 65535 & this.high,
            i = this.low >>> 16,
            n = 65535 & this.low,
            o = e.high >>> 16,
            a = 65535 & e.high,
            u = e.low >>> 16,
            l = 65535 & e.low,
            d = 0,
            h = 0,
            p = 0,
            y = 0;
          return (
            (y += n + l),
            (p += y >>> 16),
            (y &= 65535),
            (p += i + u),
            (h += p >>> 16),
            (p &= 65535),
            (h += r + a),
            (d += h >>> 16),
            (h &= 65535),
            (d += t + o),
            (d &= 65535),
            c((p << 16) | y, (d << 16) | h, this.unsigned)
          );
        }),
        (I.subtract = function (e) {
          return (s(e) || (e = f(e)), this.add(e.neg()));
        }),
        (I.sub = I.subtract),
        (I.multiply = function (e) {
          if (this.isZero()) return b;
          if ((s(e) || (e = f(e)), r)) {
            var t = r.mul(this.low, this.high, e.low, e.high);
            return c(t, r.get_high(), this.unsigned);
          }
          if (e.isZero()) return b;
          if (this.eq(_)) return e.isOdd() ? _ : b;
          if (e.eq(_)) return this.isOdd() ? _ : b;
          if (this.isNegative())
            return e.isNegative()
              ? this.neg().mul(e.neg())
              : this.neg().mul(e).neg();
          if (e.isNegative()) return this.mul(e.neg()).neg();
          if (this.lt(S) && e.lt(S))
            return u(this.toNumber() * e.toNumber(), this.unsigned);
          var i = this.high >>> 16,
            n = 65535 & this.high,
            o = this.low >>> 16,
            a = 65535 & this.low,
            l = e.high >>> 16,
            d = 65535 & e.high,
            h = e.low >>> 16,
            p = 65535 & e.low,
            y = 0,
            m = 0,
            v = 0,
            g = 0;
          return (
            (g += a * p),
            (v += g >>> 16),
            (g &= 65535),
            (v += o * p),
            (m += v >>> 16),
            (v &= 65535),
            (v += a * h),
            (m += v >>> 16),
            (v &= 65535),
            (m += n * p),
            (y += m >>> 16),
            (m &= 65535),
            (m += o * h),
            (y += m >>> 16),
            (m &= 65535),
            (m += a * d),
            (y += m >>> 16),
            (m &= 65535),
            (y += i * p + n * h + o * d + a * l),
            (y &= 65535),
            c((v << 16) | g, (y << 16) | m, this.unsigned)
          );
        }),
        (I.mul = I.multiply),
        (I.divide = function (e) {
          if ((s(e) || (e = f(e)), e.isZero())) throw Error("division by zero");
          if (r) {
            if (
              !this.unsigned &&
              -2147483648 === this.high &&
              -1 === e.low &&
              -1 === e.high
            )
              return this;
            var t = (this.unsigned ? r.div_u : r.div_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            );
            return c(t, r.get_high(), this.unsigned);
          }
          if (this.isZero()) return this.unsigned ? g : b;
          var i, n, o;
          if (this.unsigned) {
            if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return g;
            if (e.gt(this.shru(1))) return A;
            o = g;
          } else {
            if (this.eq(_)) {
              if (e.eq(E) || e.eq(T)) return _;
              if (e.eq(_)) return E;
              var a = this.shr(1);
              return (
                (i = a.div(e).shl(1)),
                i.eq(b)
                  ? e.isNegative()
                    ? E
                    : T
                  : ((n = this.sub(e.mul(i))), (o = i.add(n.div(e))), o)
              );
            }
            if (e.eq(_)) return this.unsigned ? g : b;
            if (this.isNegative())
              return e.isNegative()
                ? this.neg().div(e.neg())
                : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            o = b;
          }
          n = this;
          while (n.gte(e)) {
            i = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
            var d = Math.ceil(Math.log(i) / Math.LN2),
              h = d <= 48 ? 1 : l(2, d - 48),
              p = u(i),
              y = p.mul(e);
            while (y.isNegative() || y.gt(n))
              ((i -= h), (p = u(i, this.unsigned)), (y = p.mul(e)));
            (p.isZero() && (p = E), (o = o.add(p)), (n = n.sub(y)));
          }
          return o;
        }),
        (I.div = I.divide),
        (I.modulo = function (e) {
          if ((s(e) || (e = f(e)), r)) {
            var t = (this.unsigned ? r.rem_u : r.rem_s)(
              this.low,
              this.high,
              e.low,
              e.high,
            );
            return c(t, r.get_high(), this.unsigned);
          }
          return this.sub(this.div(e).mul(e));
        }),
        (I.mod = I.modulo),
        (I.rem = I.modulo),
        (I.not = function () {
          return c(~this.low, ~this.high, this.unsigned);
        }),
        (I.and = function (e) {
          return (
            s(e) || (e = f(e)),
            c(this.low & e.low, this.high & e.high, this.unsigned)
          );
        }),
        (I.or = function (e) {
          return (
            s(e) || (e = f(e)),
            c(this.low | e.low, this.high | e.high, this.unsigned)
          );
        }),
        (I.xor = function (e) {
          return (
            s(e) || (e = f(e)),
            c(this.low ^ e.low, this.high ^ e.high, this.unsigned)
          );
        }),
        (I.shiftLeft = function (e) {
          return (
            s(e) && (e = e.toInt()),
            0 === (e &= 63)
              ? this
              : e < 32
                ? c(
                    this.low << e,
                    (this.high << e) | (this.low >>> (32 - e)),
                    this.unsigned,
                  )
                : c(0, this.low << (e - 32), this.unsigned)
          );
        }),
        (I.shl = I.shiftLeft),
        (I.shiftRight = function (e) {
          return (
            s(e) && (e = e.toInt()),
            0 === (e &= 63)
              ? this
              : e < 32
                ? c(
                    (this.low >>> e) | (this.high << (32 - e)),
                    this.high >> e,
                    this.unsigned,
                  )
                : c(
                    this.high >> (e - 32),
                    this.high >= 0 ? 0 : -1,
                    this.unsigned,
                  )
          );
        }),
        (I.shr = I.shiftRight),
        (I.shiftRightUnsigned = function (e) {
          if ((s(e) && (e = e.toInt()), (e &= 63), 0 === e)) return this;
          var t = this.high;
          if (e < 32) {
            var r = this.low;
            return c((r >>> e) | (t << (32 - e)), t >>> e, this.unsigned);
          }
          return c(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
        }),
        (I.shru = I.shiftRightUnsigned),
        (I.shr_u = I.shiftRightUnsigned),
        (I.toSigned = function () {
          return this.unsigned ? c(this.low, this.high, !1) : this;
        }),
        (I.toUnsigned = function () {
          return this.unsigned ? this : c(this.low, this.high, !0);
        }),
        (I.toBytes = function (e) {
          return e ? this.toBytesLE() : this.toBytesBE();
        }),
        (I.toBytesLE = function () {
          var e = this.high,
            t = this.low;
          return [
            255 & t,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            t >>> 24,
            255 & e,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            e >>> 24,
          ];
        }),
        (I.toBytesBE = function () {
          var e = this.high,
            t = this.low;
          return [
            e >>> 24,
            (e >>> 16) & 255,
            (e >>> 8) & 255,
            255 & e,
            t >>> 24,
            (t >>> 16) & 255,
            (t >>> 8) & 255,
            255 & t,
          ];
        }),
        (i.fromBytes = function (e, t, r) {
          return r ? i.fromBytesLE(e, t) : i.fromBytesBE(e, t);
        }),
        (i.fromBytesLE = function (e, t) {
          return new i(
            e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
            e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
            t,
          );
        }),
        (i.fromBytesBE = function (e, t) {
          return new i(
            (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
            (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
            t,
          );
        }));
    },
    2900: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TRANSACTION_TYPE = {
          ISSUE: 3,
          TRANSFER: 4,
          REISSUE: 5,
          BURN: 6,
          EXCHANGE: 7,
          LEASE: 8,
          CANCEL_LEASE: 9,
          ALIAS: 10,
          MASS_TRANSFER: 11,
          DATA: 12,
          SET_SCRIPT: 13,
          SPONSORSHIP: 14,
          SET_ASSET_SCRIPT: 15,
          INVOKE_SCRIPT: 16,
        }),
        (t.DATA_FIELD_TYPE = {
          INTEGER: "integer",
          BOOLEAN: "boolean",
          BINARY: "binary",
          STRING: "string",
        }));
    },
    2928: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4566),
        s = r(6745),
        n = r(10721),
        o = r(10722);
      t.json = o;
      const a = r(4828);
      t.serializePrimitives = a;
      const u = r(5603);
      t.parsePrimitives = u;
      const c = r(4566);
      t.schemas = c;
      const l = {
        serializerFromSchema: s.serializerFromSchema,
        serializeTx: s.serializeTx,
        serializeOrder: s.serializeOrder,
        parserFromSchema: n.parserFromSchema,
        parseTx: n.parseTx,
        parseOrder: n.parseOrder,
      };
      function d(e, t, r, i) {
        const o = s.serializerFromSchema(t, i),
          a = n.parserFromSchema(t, r),
          u = a(o(e)).value;
        return Object.assign({}, e, u);
      }
      function f(e, t, r) {
        const { type: s, version: n } = e,
          o = i.getTransactionSchema(s, n);
        return d(e, o, t, r);
      }
      ((t.binary = l), (t.convertLongFields = d), (t.convertTxLongFields = f));
    },
    2986: function (e, t, r) {
      "use strict";
      function i(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), i(r(2987)));
      const s = r(10723),
        n = r(10724),
        o = r(10725),
        a = r(10726),
        u = r(10727),
        c = r(10728),
        l = r(10729),
        d = r(10730),
        f = r(10731),
        h = r(10732),
        p = r(10733),
        y = r(10734),
        m = r(10735),
        v = r(10736),
        S = r(6746),
        b = r(10737),
        g = r(10738),
        E = r(10739),
        A = r(10740);
      t.validate = {
        transfer: s.transferValidator,
        massTransfer: n.massTransferValidator,
        alias: o.aliasValidator,
        issue: p.issueValidator,
        reissue: h.reissueValidator,
        sponsorship: l.sponsorshipValidator,
        burn: a.burnValidator,
        setAssetScript: d.setAssetScriptValidator,
        cancelLease: u.cancelLeaseValidator,
        data: c.dataValidator,
        lease: y.leaseValidator,
        setScript: f.setScriptValidator,
        invokeScript: m.invokeValidator,
        exchange: v.exchangeValidator,
        cancelOrder: b.cancelOrderValidator,
        customData: g.customDataValidator,
        order: S.orderValidator,
        wavesAuth: A.authValidator,
        auth: E.authValidator,
      };
    },
    2987: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939),
        s = {
          MAX_ATTACHMENT: 140,
          ALIAS: {
            AVAILABLE_CHARS: "-.0123456789@_abcdefghijklmnopqrstuvwxyz",
            MAX_ALIAS_LENGTH: 30,
            MIN_ALIAS_LENGTH: 4,
          },
        },
        n = {
          NAME_MIN_BYTES: 4,
          NAME_MAX_BYTES: 16,
          DESCRIPTION_MAX_BYTES: 1e3,
        };
      ((t.defaultValue = (e) => () => e),
        (t.nope = (e) => e),
        (t.pipe = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return (e) => t.reduce((e, t) => t(e), e);
        }),
        (t.validatePipe = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return (e) => {
            let r = !0;
            for (const i of t) if (((r = !!i(e)), !r)) return !1;
            return r;
          };
        }),
        (t.prop = (e) => (t) => (t ? t[e] : void 0)),
        (t.lte = (e) => (t) => e >= t),
        (t.gte = (e) => (t) => e <= t),
        (t.ifElse = (e, t, r) => (i) => (e(i) ? t(i) : r(i))),
        (t.isEq = (e) => (r) => {
          switch (!0) {
            case t.isNumber(r) && t.isNumber(e):
              return Number(r) === Number(e);
            case t.isString(r) && t.isString(e):
              return String(e) === String(r);
            case t.isBoolean(r) && t.isBoolean(e):
              return Boolean(r) === Boolean(e);
            default:
              return e === r;
          }
        }),
        (t.orEq = (e) => (r) => e.some(t.isEq(r))),
        (t.isRequired = (e) => (t) => !e || null != t),
        (t.isString = (e) => "string" === typeof e || e instanceof String),
        (t.isNumber = (e) =>
          ("number" === typeof e || e instanceof Number) && !isNaN(Number(e))),
        (t.isNumberLike = (e) =>
          null != e && !isNaN(Number(e)) && !(!e && 0 !== e)),
        (t.isBoolean = (e) =>
          null != e && ("boolean" === typeof e || e instanceof Boolean)),
        (t.isByteArray = (e) => {
          if (!e) return !1;
          const r = new Uint8Array(e);
          return r.length === e.length && r.every((r, i) => t.isEq(r)(e[i]));
        }),
        (t.isArray = (e) => Array.isArray(e)),
        (t.bytesLength = (e) => (t) => {
          try {
            return Uint8Array.from(t).length === e;
          } catch (r) {
            return !1;
          }
        }),
        (t.isBase58 = (e) => {
          try {
            i.base58Decode(e);
          } catch (t) {
            return !1;
          }
          return !0;
        }),
        (t.isBase64 = (e) => {
          try {
            ((e = e.replace(/^base64:/, "")), i.base64Decode(e));
          } catch (t) {
            return !1;
          }
          return !0;
        }),
        (t.isValidAddress = (e, r) => {
          if ("string" !== typeof e || !t.isBase58(e)) return !1;
          let s = i.base58Decode(e);
          if (1 !== s[0]) return !1;
          if (null != r && s[1] != r) return !1;
          let n = s.slice(0, 22),
            o = s.slice(22, 26),
            a = i.keccak(i.blake2b(n)).slice(0, 4);
          for (let t = 0; t < 4; t++) if (o[t] !== a[t]) return !1;
          return !0;
        }));
      const o = (e) => (t) => t.split("").every((t) => e.includes(t));
      ((t.isValidAliasName = t.ifElse(
        o(s.ALIAS.AVAILABLE_CHARS),
        t.pipe(
          t.prop("length"),
          t.validatePipe(
            t.lte(s.ALIAS.MAX_ALIAS_LENGTH),
            t.gte(s.ALIAS.MIN_ALIAS_LENGTH),
          ),
        ),
        t.defaultValue(!1),
      )),
        (t.isValidAlias = t.validatePipe(
          t.isString,
          t.pipe(
            (e) => e.split(":"),
            t.ifElse(
              (e) => "alias" !== e[0] || 3 !== e.length,
              t.defaultValue(!1),
              t.pipe(t.prop(2), t.isValidAliasName),
            ),
          ),
        )),
        (t.isHash = t.validatePipe(
          t.isRequired(!0),
          t.isBase58,
          t.pipe((e) => i.base58Decode(e), t.bytesLength(32)),
        )),
        (t.isPublicKey = t.isHash),
        (t.isAssetId = t.ifElse(
          t.orEq(["", null, void 0, "WAVES"]),
          t.defaultValue(!0),
          t.isHash,
        )),
        (t.isAttachment = t.ifElse(
          t.orEq([null, void 0]),
          t.defaultValue(!0),
          t.pipe(
            t.ifElse(t.isBase58, i.base58Decode, t.nope),
            t.ifElse(
              t.isByteArray,
              t.pipe(t.prop("length"), t.lte(s.MAX_ATTACHMENT)),
              t.defaultValue(!1),
            ),
          ),
        )));
      const a = {
        integer: t.isNumberLike,
        boolean: t.isBoolean,
        string: t.isString,
        binary: t.isBase64,
      };
      ((t.isValidDataPair = (e) => !(!a[e.type] || !a[e.type](e.value))),
        (t.isValidData = t.validatePipe(
          t.isRequired(!0),
          t.pipe(
            t.prop("key"),
            t.validatePipe(t.isString, (e) => !!e),
          ),
          t.isValidDataPair,
        )),
        (t.isValidAssetName = t.validatePipe(
          t.isRequired(!0),
          t.isString,
          t.pipe(
            i.stringToBytes,
            t.prop("length"),
            t.ifElse(
              t.gte(n.NAME_MIN_BYTES),
              t.lte(n.NAME_MAX_BYTES),
              t.defaultValue(!1),
            ),
          ),
        )),
        (t.isValidAssetDescription = t.ifElse(
          t.isRequired(!1),
          t.defaultValue(!0),
          t.pipe(
            i.stringToBytes,
            t.prop("length"),
            t.lte(n.DESCRIPTION_MAX_BYTES),
          ),
        )),
        (t.exception = (e) => {
          throw new Error(e);
        }),
        (t.isRecipient = t.ifElse(
          t.isValidAddress,
          t.defaultValue(!0),
          t.isValidAlias,
        )),
        (t.validateByShema = (e, r) => (i) => (
          Object.entries(e).forEach((e) => {
            let [s, n] = e;
            const o = t.prop(s)(i || {});
            n(o) || t.exception(r(s, o));
          }),
          !0
        )),
        (t.getError = (e, t) =>
          `tx "${e}", has wrong data: ${JSON.stringify(t)}. Check tx data.`));
    },
    3009: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939);
      function s(e, t) {
        if (0 === e.length && null == t.senderPublicKey)
          throw new Error("Please provide either seed or senderPublicKey");
        return null == t.senderPublicKey
          ? i.publicKey(e[0][0])
          : t.senderPublicKey;
      }
      function n(e, t, r) {
        if (null == r) return ((e.proofs = [...e.proofs, t]), e);
        if (null != e.proofs && e.proofs[r])
          throw new Error(`Proof at index ${r} already exists.`);
        for (let i = e.proofs.length; i < r; i++) e.proofs.push("");
        return ((e.proofs[r] = t), e);
      }
      function o(e) {
        if (null == e) return [];
        if ("string" === typeof e) return [[e, void 0]];
        if ("privateKey" in e) return [[e, void 0]];
        if (Array.isArray(e))
          return e
            .map((e, t) => [e, t])
            .filter((e) => {
              let [t, r] = e;
              return t;
            });
        {
          const t = Object.keys(e)
            .map((e) => parseInt(e))
            .filter((e) => !isNaN(e))
            .sort();
          return t.map((t) => [e[t], t]);
        }
      }
      function a(e, t) {
        switch (typeof e) {
          case "string":
            return e.charCodeAt(0);
          case "number":
            return e;
          default:
            return t;
        }
      }
      function u(e, t) {
        return e.fee ? e.fee : e.additionalFee ? t + e.additionalFee : t;
      }
      function c(e) {
        return ((e = e || null), "WAVES" === e ? null : e);
      }
      ((t.mapObj = (e, t) =>
        Object.entries(e)
          .map((e) => {
            let [r, i] = e;
            return [r, t(i)];
          })
          .reduce((e, t) => {
            let [r, i] = t;
            return Object.assign({}, e, { [r]: i });
          }, {})),
        (t.getSenderPublicKey = s),
        (t.base64Prefix = (e) =>
          null == e || "base64:" === e.slice(0, 7) ? e : "base64:" + e),
        (t.addProof = n),
        (t.convertToPairs = o),
        (t.isOrder = (e) => void 0 !== e.assetPair),
        (t.networkByte = a),
        (t.fee = u),
        (t.normalizeAssetId = c));
    },
    3198: function (e, t, r) {
      "use strict";
      var i = r(6751),
        s = Object.prototype.toString;
      function n(e) {
        return "[object Array]" === s.call(e);
      }
      function o(e) {
        return "undefined" === typeof e;
      }
      function a(e) {
        return (
          null !== e &&
          !o(e) &&
          null !== e.constructor &&
          !o(e.constructor) &&
          "function" === typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      }
      function u(e) {
        return "[object ArrayBuffer]" === s.call(e);
      }
      function c(e) {
        return "undefined" !== typeof FormData && e instanceof FormData;
      }
      function l(e) {
        var t;
        return (
          (t =
            "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer),
          t
        );
      }
      function d(e) {
        return "string" === typeof e;
      }
      function f(e) {
        return "number" === typeof e;
      }
      function h(e) {
        return null !== e && "object" === typeof e;
      }
      function p(e) {
        return "[object Date]" === s.call(e);
      }
      function y(e) {
        return "[object File]" === s.call(e);
      }
      function m(e) {
        return "[object Blob]" === s.call(e);
      }
      function v(e) {
        return "[object Function]" === s.call(e);
      }
      function S(e) {
        return h(e) && v(e.pipe);
      }
      function b(e) {
        return (
          "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
        );
      }
      function g(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      }
      function E() {
        return (
          ("undefined" === typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" !== typeof window &&
          "undefined" !== typeof document
        );
      }
      function A(e, t) {
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), n(e)))
            for (var r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
          else
            for (var s in e)
              Object.prototype.hasOwnProperty.call(e, s) &&
                t.call(null, e[s], s, e);
      }
      function T() {
        var e = {};
        function t(t, r) {
          "object" === typeof e[r] && "object" === typeof t
            ? (e[r] = T(e[r], t))
            : (e[r] = t);
        }
        for (var r = 0, i = arguments.length; r < i; r++) A(arguments[r], t);
        return e;
      }
      function N() {
        var e = {};
        function t(t, r) {
          "object" === typeof e[r] && "object" === typeof t
            ? (e[r] = N(e[r], t))
            : (e[r] = "object" === typeof t ? N({}, t) : t);
        }
        for (var r = 0, i = arguments.length; r < i; r++) A(arguments[r], t);
        return e;
      }
      function P(e, t, r) {
        return (
          A(t, function (t, s) {
            e[s] = r && "function" === typeof t ? i(t, r) : t;
          }),
          e
        );
      }
      e.exports = {
        isArray: n,
        isArrayBuffer: u,
        isBuffer: a,
        isFormData: c,
        isArrayBufferView: l,
        isString: d,
        isNumber: f,
        isObject: h,
        isUndefined: o,
        isDate: p,
        isFile: y,
        isBlob: m,
        isFunction: v,
        isStream: S,
        isURLSearchParams: b,
        isStandardBrowserEnv: E,
        forEach: A,
        merge: T,
        deepMerge: N,
        extend: P,
        trim: g,
      };
    },
    3830: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return ((t["default"] = e), t);
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = r(5594);
      t.massTransfer = s.massTransfer;
      var n = r(5605);
      t.reissue = n.reissue;
      var o = r(5606);
      t.burn = o.burn;
      var a = r(5607);
      t.exchange = a.exchange;
      var u = r(5608);
      t.lease = u.lease;
      var c = r(5609);
      t.cancelLease = c.cancelLease;
      var l = r(5610);
      t.data = l.data;
      var d = r(5611);
      t.issue = d.issue;
      var f = r(5612);
      t.transfer = f.transfer;
      var h = r(5613);
      t.alias = h.alias;
      var p = r(5614);
      t.setScript = p.setScript;
      var y = r(5615);
      t.setAssetScript = y.setAssetScript;
      var m = r(5616);
      t.sponsorship = m.sponsorship;
      var v = r(10741);
      t.order = v.order;
      var S = r(10742);
      t.cancelOrder = S.cancelOrder;
      var b = r(6747);
      ((t.customData = b.customData),
        (t.serializeCustomData = b.serializeCustomData));
      var g = r(6748);
      t.auth = g.auth;
      var E = r(6749);
      t.wavesAuth = E.wavesAuth;
      var A = r(5617);
      t.invokeScript = A.invokeScript;
      var T = r(10743);
      ((t.signTx = T.signTx),
        (t.verify = T.verify),
        (t.serialize = T.serialize),
        (t.submitOrder = T.submitOrder),
        (t.cancelSubmittedOrder = T.cancelSubmittedOrder),
        (t.verifyAuthData = T.verifyAuthData),
        (t.verifyCustomData = T.verifyCustomData),
        (t.verifyWavesAuthData = T.verifyWavesAuthData));
      var N = r(6759);
      ((t.waitForTx = N.waitForTx), (t.broadcast = N.broadcast));
      var P = r(10760);
      t.makeTx = P.makeTx;
      const _ = i(r(2939)),
        I = i(r(2928)),
        O = { crypto: _, marshall: I };
      t.libs = O;
      const R = i(r(10761));
      t.seedUtils = R;
      const B = i(r(6759));
      t.nodeInteraction = B;
      const w = i(r(2986));
      t.validators = w;
    },
    4566: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4828),
        s = r(5603),
        n = r(10720),
        o = r(6745);
      var a;
      (function (e) {
        ((e[(e["GENESIS"] = 1)] = "GENESIS"),
          (e[(e["PAYMENT"] = 2)] = "PAYMENT"),
          (e[(e["ISSUE"] = 3)] = "ISSUE"),
          (e[(e["TRANSFER"] = 4)] = "TRANSFER"),
          (e[(e["REISSUE"] = 5)] = "REISSUE"),
          (e[(e["BURN"] = 6)] = "BURN"),
          (e[(e["EXCHANGE"] = 7)] = "EXCHANGE"),
          (e[(e["LEASE"] = 8)] = "LEASE"),
          (e[(e["CANCEL_LEASE"] = 9)] = "CANCEL_LEASE"),
          (e[(e["ALIAS"] = 10)] = "ALIAS"),
          (e[(e["MASS_TRANSFER"] = 11)] = "MASS_TRANSFER"),
          (e[(e["DATA"] = 12)] = "DATA"),
          (e[(e["SET_SCRIPT"] = 13)] = "SET_SCRIPT"),
          (e[(e["SPONSORSHIP"] = 14)] = "SPONSORSHIP"),
          (e[(e["SET_ASSET_SCRIPT"] = 15)] = "SET_ASSET_SCRIPT"),
          (e[(e["INVOKE_SCRIPT"] = 16)] = "INVOKE_SCRIPT"));
      })((a = t.TRANSACTION_TYPE || (t.TRANSACTION_TYPE = {})));
      const u = { toBytes: i.SHORT, fromBytes: s.P_SHORT },
        c = { toBytes: i.INT, fromBytes: s.P_INT };
      var l;
      ((function (e) {
        ((e.longField = (e) => [e, { toBytes: i.LONG, fromBytes: s.P_LONG }]),
          (e.byteField = (e) => [e, { toBytes: i.BYTE, fromBytes: s.P_BYTE }]),
          (e.booleanField = (e) => [
            e,
            { toBytes: i.BOOL, fromBytes: s.P_BOOLEAN },
          ]),
          (e.stringField = (e) => [
            e,
            {
              toBytes: i.LEN(i.SHORT)(i.STRING),
              fromBytes: s.P_STRING_VAR(s.P_SHORT),
            },
          ]),
          (e.base58field32 = (e) => [
            e,
            { toBytes: i.BASE58_STRING, fromBytes: s.P_BASE58_FIXED(32) },
          ]),
          (e.base58Option32 = (e) => [
            e,
            {
              toBytes: (e) =>
                "WAVES" === e
                  ? i.OPTION(i.BASE58_STRING)(null)
                  : i.OPTION(i.BASE58_STRING)(e),
              fromBytes: s.P_OPTION(s.P_BASE58_FIXED(32)),
            },
          ]),
          (e.base64field = (e) => [
            e,
            {
              toBytes: i.LEN(i.SHORT)(i.BASE64_STRING),
              fromBytes: s.P_BASE64(s.P_SHORT),
            },
          ]),
          (e.byteConstant = (e) => [
            "noname",
            {
              toBytes: () => Uint8Array.from([e]),
              fromBytes: () => ({ value: void 0, shift: 1 }),
            },
          ]),
          (e.alias = [
            "alias",
            {
              toBytes: i.LEN(i.SHORT)(i.STRING),
              fromBytes: s.byteNewAliasToString,
            },
          ]),
          (e.amount = e.longField("amount")),
          (e.assetDescription = e.stringField("description")),
          (e.assetId = e.base58field32("assetId")),
          (e.assetName = e.stringField("name")),
          (e.attachment = [
            "attachment",
            {
              toBytes: i.LEN(i.SHORT)(i.BASE58_STRING),
              fromBytes: s.P_BASE58_VAR(s.P_SHORT),
            },
          ]),
          (e.chainId = e.byteField("chainId")),
          (e.decimals = e.byteField("decimals")),
          (e.fee = e.longField("fee")),
          (e.leaseAssetId = e.base58Option32("leaseAssetId")),
          (e.leaseId = e.base58field32("leaseId")),
          (e.optionalAssetId = e.base58Option32("assetId")),
          (e.quantity = e.longField("quantity")),
          (e.reissuable = e.booleanField("reissuable")),
          (e.recipient = [
            "recipient",
            { toBytes: i.ADDRESS_OR_ALIAS, fromBytes: s.byteToAddressOrAlias },
          ]),
          (e.script = [
            "script",
            { toBytes: i.SCRIPT, fromBytes: s.byteToScript },
          ]),
          (e.senderPublicKey = e.base58field32("senderPublicKey")),
          (e.signature = [
            "signature",
            { toBytes: i.BASE58_STRING, fromBytes: s.P_BASE58_FIXED(64) },
          ]),
          (e.timestamp = e.longField("timestamp")),
          (e.type = e.byteField("type")),
          (e.version = e.byteField("version")),
          (e.proofs = [
            "proofs",
            {
              type: "array",
              items: {
                toBytes: i.LEN(i.SHORT)(i.BASE58_STRING),
                fromBytes: s.P_BASE58_VAR(s.P_SHORT),
              },
            },
          ]));
        const t = { type: "object", schema: [e.recipient, e.amount] };
        e.transfers = ["transfers", { type: "array", items: t }];
        const r = {
          type: "dataTxField",
          items: new Map([
            [
              n.DATA_FIELD_TYPE.INTEGER,
              { toBytes: i.LONG, fromBytes: s.P_LONG },
            ],
            [
              n.DATA_FIELD_TYPE.BOOLEAN,
              { toBytes: i.BOOL, fromBytes: s.P_BOOLEAN },
            ],
            [
              n.DATA_FIELD_TYPE.BINARY,
              {
                toBytes: i.LEN(i.SHORT)(i.BASE64_STRING),
                fromBytes: s.P_BASE64(s.P_SHORT),
              },
            ],
            [
              n.DATA_FIELD_TYPE.STRING,
              {
                toBytes: i.LEN(i.SHORT)(i.STRING),
                fromBytes: s.P_STRING_VAR(s.P_SHORT),
              },
            ],
          ]),
        };
        e.data = ["data", { type: "array", items: r }];
        const o = n.anyOf(
          [
            [0, { toBytes: i.LONG, fromBytes: s.P_LONG }, "integer"],
            [
              1,
              {
                toBytes: i.LEN(i.INT)(i.BASE64_STRING),
                fromBytes: s.P_BASE64(s.P_INT),
              },
              "binary",
            ],
            [
              2,
              {
                toBytes: i.LEN(i.INT)(i.STRING),
                fromBytes: s.P_STRING_VAR(s.P_INT),
              },
              "string",
            ],
            [
              6,
              {
                toBytes: () => Uint8Array.from([]),
                fromBytes: () => ({ value: !0, shift: 0 }),
              },
              "boolean",
            ],
            [
              7,
              {
                toBytes: () => Uint8Array.from([]),
                fromBytes: () => ({ value: !1, shift: 0 }),
              },
              "boolean",
            ],
          ],
          { valueField: "value" },
        );
        ((e.functionCall = [
          "call",
          {
            type: "object",
            optional: !0,
            schema: [
              e.byteConstant(9),
              e.byteConstant(1),
              [
                "function",
                {
                  toBytes: i.LEN(i.INT)(i.STRING),
                  fromBytes: s.P_STRING_VAR(s.P_INT),
                },
              ],
              [
                "args",
                { type: "array", toBytes: i.INT, fromBytes: s.P_INT, items: o },
              ],
            ],
          },
        ]),
          (e.payment = {
            type: "object",
            withLength: u,
            schema: [e.amount, e.optionalAssetId],
          }),
          (e.payments = ["payment", { type: "array", items: e.payment }]));
      })((l = t.txFields || (t.txFields = {}))),
        (t.orderSchemaV1 = {
          type: "object",
          schema: [
            l.senderPublicKey,
            l.base58field32("matcherPublicKey"),
            [
              "assetPair",
              {
                type: "object",
                schema: [
                  l.base58Option32("amountAsset"),
                  l.base58Option32("priceAsset"),
                ],
              },
            ],
            [
              "orderType",
              {
                toBytes: (e) => i.BYTE("sell" === e ? 1 : 0),
                fromBytes: function (e, t) {
                  return (
                    void 0 === t && (t = 0),
                    1 === s.P_BYTE(e, t).value
                      ? { value: "sell", shift: 1 }
                      : { value: "buy", shift: 1 }
                  );
                },
              },
            ],
            l.longField("price"),
            l.longField("amount"),
            l.timestamp,
            l.longField("expiration"),
            l.longField("matcherFee"),
          ],
        }),
        (t.orderSchemaV2 = {
          type: "object",
          schema: [l.version, ...t.orderSchemaV1.schema],
        }),
        (t.orderSchemaV3 = {
          type: "object",
          schema: [
            ...t.orderSchemaV2.schema,
            ["matcherFeeAssetId", l.optionalAssetId[1]],
          ],
        }),
        (t.aliasSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.senderPublicKey,
            [
              ["alias", "chainId"],
              {
                type: "object",
                withLength: u,
                schema: [l.byteConstant(2), l.chainId, l.alias],
              },
            ],
            l.fee,
            l.timestamp,
          ],
        }),
        (t.burnSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            l.assetId,
            l.amount,
            l.fee,
            l.timestamp,
          ],
        }),
        (t.cancelLeaseSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            l.fee,
            l.timestamp,
            l.leaseId,
          ],
        }),
        (t.invokeScriptSchemaV1 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            ["dApp", l.recipient[1]],
            l.functionCall,
            l.payments,
            l.fee,
            ["feeAssetId", l.optionalAssetId[1]],
            l.timestamp,
          ],
        }),
        (t.dataSchemaV1 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.senderPublicKey,
            l.data,
            l.timestamp,
            l.fee,
          ],
        }),
        (t.proofsSchemaV0 = {
          type: "object",
          schema: [
            [
              "signature",
              { toBytes: i.BASE58_STRING, fromBytes: s.P_BASE58_FIXED(64) },
            ],
          ],
        }),
        (t.proofsSchemaV1 = {
          type: "object",
          schema: [l.byteConstant(1), l.proofs],
        }));
      const d = {
        type: "object",
        schema: [...t.orderSchemaV1.schema, l.signature],
      };
      t.exchangeSchemaV1 = {
        type: "object",
        schema: [
          l.type,
          [
            "order1",
            {
              fromBytes: () => ({ value: void 0, shift: 4 }),
              toBytes: (e) => i.INT(o.serializerFromSchema(d)(e).length),
            },
          ],
          [
            "order2",
            {
              fromBytes: () => ({ value: void 0, shift: 4 }),
              toBytes: (e) => i.INT(o.serializerFromSchema(d)(e).length),
            },
          ],
          ["order1", d],
          ["order2", d],
          l.longField("price"),
          l.longField("amount"),
          l.longField("buyMatcherFee"),
          l.longField("sellMatcherFee"),
          l.longField("fee"),
          l.longField("timestamp"),
        ],
      };
      const f = n.anyOf(
        [
          [
            1,
            {
              type: "object",
              withLength: {
                toBytes: (e) => i.INT(e - 1),
                fromBytes: (e) => {
                  const { value: t, shift: r } = s.P_INT(e);
                  return { value: t + 1, shift: r };
                },
              },
              schema: [
                l.byteConstant(1),
                ...t.orderSchemaV1.schema,
                ...t.proofsSchemaV0.schema,
              ],
            },
          ],
          [
            2,
            {
              type: "object",
              withLength: c,
              schema: [...t.orderSchemaV2.schema, ...t.proofsSchemaV1.schema],
            },
          ],
        ],
        { discriminatorField: "version", discriminatorBytePos: 4 },
      );
      function h(e, r) {
        const i = t.schemasByTypeMap[e];
        if ("object" !== typeof i) throw new Error("Incorrect tx type: " + e);
        const s = i[r || 1];
        if ("object" !== typeof s)
          throw new Error("Incorrect tx version: " + r);
        return s;
      }
      ((t.exchangeSchemaV2 = {
        type: "object",
        schema: [
          l.byteConstant(0),
          l.type,
          l.version,
          ["order1", f],
          ["order2", f],
          l.longField("price"),
          l.longField("amount"),
          l.longField("buyMatcherFee"),
          l.longField("sellMatcherFee"),
          l.longField("fee"),
          l.longField("timestamp"),
        ],
      }),
        (t.issueSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            l.assetName,
            l.assetDescription,
            l.quantity,
            l.decimals,
            l.reissuable,
            l.fee,
            l.timestamp,
            l.script,
          ],
        }),
        (t.leaseSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.leaseAssetId,
            l.senderPublicKey,
            l.recipient,
            l.amount,
            l.fee,
            l.timestamp,
          ],
        }),
        (t.massTransferSchemaV1 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.senderPublicKey,
            l.optionalAssetId,
            l.transfers,
            l.timestamp,
            l.fee,
            l.attachment,
          ],
        }),
        (t.reissueSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            l.assetId,
            l.quantity,
            l.reissuable,
            l.fee,
            l.timestamp,
          ],
        }),
        (t.setAssetScriptSchemaV1 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            l.assetId,
            l.fee,
            l.timestamp,
            l.script,
          ],
        }),
        (t.setScriptSchemaV1 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.chainId,
            l.senderPublicKey,
            l.script,
            l.fee,
            l.timestamp,
          ],
        }),
        (t.sponsorshipSchemaV1 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.senderPublicKey,
            l.assetId,
            l.longField("minSponsoredAssetFee"),
            l.fee,
            l.timestamp,
          ],
        }),
        (t.transferSchemaV2 = {
          type: "object",
          schema: [
            l.type,
            l.version,
            l.senderPublicKey,
            l.optionalAssetId,
            ["feeAssetId", l.optionalAssetId[1]],
            l.timestamp,
            l.amount,
            l.fee,
            l.recipient,
            l.attachment,
          ],
        }),
        (t.schemasByTypeMap = {
          [a.GENESIS]: {},
          [a.PAYMENT]: {},
          [a.ISSUE]: { 2: t.issueSchemaV2 },
          [a.TRANSFER]: { 2: t.transferSchemaV2 },
          [a.REISSUE]: { 2: t.reissueSchemaV2 },
          [a.BURN]: { 2: t.burnSchemaV2 },
          [a.EXCHANGE]: { 1: t.exchangeSchemaV1, 2: t.exchangeSchemaV2 },
          [a.LEASE]: { 2: t.leaseSchemaV2 },
          [a.CANCEL_LEASE]: { 2: t.cancelLeaseSchemaV2 },
          [a.ALIAS]: { 2: t.aliasSchemaV2 },
          [a.MASS_TRANSFER]: { 1: t.massTransferSchemaV1 },
          [a.DATA]: { 1: t.dataSchemaV1 },
          [a.SET_SCRIPT]: { 1: t.setScriptSchemaV1 },
          [a.SPONSORSHIP]: { 1: t.sponsorshipSchemaV1 },
          [a.SET_ASSET_SCRIPT]: { 1: t.setAssetScriptSchemaV1 },
          [a.INVOKE_SCRIPT]: { 1: t.invokeScriptSchemaV1 },
        }),
        (t.orderVersionMap = {
          1: t.orderSchemaV1,
          2: t.orderSchemaV2,
          3: t.orderSchemaV3,
        }),
        (t.getTransactionSchema = h));
    },
    4828: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(6744),
        s = r(812),
        n = r(5602),
        o = r(2754),
        a = (e) =>
          Uint8Array.from(
            [...unescape(encodeURIComponent(e))].map((e) => e.charCodeAt(0)),
          );
      ((t.empty = Uint8Array.from([])),
        (t.zero = Uint8Array.from([0])),
        (t.one = Uint8Array.from([1])),
        (t.BASE58_STRING = (e) => i.default.decode(e)),
        (t.BASE64_STRING = (e) => s.toByteArray(e.replace("base64:", ""))),
        (t.STRING = (e) => (e ? a(e) : t.empty)),
        (t.BYTE = (e) => Uint8Array.from([e])),
        (t.BOOL = (e) => t.BYTE(1 == e ? 1 : 0)),
        (t.BYTES = (e) => Uint8Array.from(e)),
        (t.SHORT = (e) => {
          const t = o.fromNumber(e, !0);
          return Uint8Array.from(t.toBytesBE().slice(6));
        }),
        (t.INT = (e) => {
          const t = o.fromNumber(e, !0);
          return Uint8Array.from(t.toBytesBE().slice(4));
        }),
        (t.OPTION = (e) => (r) =>
          null == r || ("string" == typeof r && 0 == r.length)
            ? t.zero
            : n.concat(t.one, e(r))),
        (t.LEN = (e) => (t) => (r) => {
          const i = t(r),
            s = e(i.length);
          return n.concat(s, i);
        }),
        (t.COUNT = (e) => (t) => (r) => {
          const i = n.concat(...r.map((e) => t(e))),
            s = e(r.length);
          return n.concat(s, i);
        }),
        (t.LONG = (e) => {
          let t;
          if ("number" === typeof e) {
            if (e > Math.pow(2, 53) - 1)
              throw new Error(
                e +
                  " is too big to be precisely represented as js number. Use string instead",
              );
            t = o.fromNumber(e);
          } else t = o.fromString(e.toString());
          return Uint8Array.from(t.toBytesBE());
        }),
        (t.SCRIPT = (e) =>
          t.OPTION(t.LEN(t.SHORT)(t.BASE64_STRING))(e ? e.slice(7) : null)),
        (t.ALIAS = (e) => {
          const [r, i, s] = e.split(":");
          if (!i || 1 !== i.length)
            throw new Error("Invalid network byte in alias");
          if (!s || 0 === s.length) throw new Error("Invalid alias body");
          return n.concat([2], [i.charCodeAt(0)], t.LEN(t.SHORT)(t.STRING)(s));
        }),
        (t.ADDRESS_OR_ALIAS = (e) =>
          e.startsWith("alias") ? t.ALIAS(e) : t.BASE58_STRING(e)));
    },
    5594: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(3009),
        n = r(2939),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.MASS_TRANSFER,
          u = e.version || 1,
          c = s.convertToPairs(t),
          l = s.getSenderPublicKey(c, e);
        if (!Array.isArray(e.transfers))
          throw new Error('["transfers should be array"]');
        const d = {
          type: r,
          version: u,
          senderPublicKey: l,
          assetId: s.normalizeAssetId(e.assetId),
          transfers: e.transfers,
          fee: s.fee(e, 1e5 + 1e5 * Math.ceil(0.5 * e.transfers.length)),
          timestamp: e.timestamp || Date.now(),
          attachment: e.attachment || "",
          proofs: e.proofs || [],
          id: "",
        };
        a.validate.massTransfer(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return s.addProof(d, n.signBytes(t, f), r);
          }),
          (d.id = n.base58Encode(n.blake2b(f))),
          d
        );
      }
      t.massTransfer = u;
    },
    5602: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.concat = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.reduce(
            (e, t) => Uint8Array.from([...e, ...t]),
            new Uint8Array(0),
          );
        }),
        (t.range = function (e, t, r) {
          return (
            void 0 === r && (r = 1),
            Array.from({ length: t - e }).map((t, i) => i * r + e)
          );
        }));
    },
    5603: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2754),
        s = r(10719),
        n = r(6744),
        o = r(812);
      t.ALIAS_VERSION = 2;
      const a = 2;
      ((t.P_OPTION = (e) =>
        function (t, r) {
          if ((void 0 === r && (r = 0), 0 === t[r]))
            return { value: null, shift: 1 };
          const i = e(t, r + 1);
          return { value: i.value, shift: i.shift + 1 };
        }),
        (t.P_BYTE = function (e, t) {
          return (void 0 === t && (t = 0), { value: e[t], shift: 1 });
        }),
        (t.P_SHORT = function (e, t) {
          return (
            void 0 === t && (t = 0),
            { value: 256 * e[t] + e[t + 1], shift: 2 }
          );
        }),
        (t.P_INT = function (e, t) {
          return (
            void 0 === t && (t = 0),
            {
              value:
                Math.pow(2, 24) * e[t] +
                Math.pow(2, 16) * e[t + 1] +
                Math.pow(2, 8) * e[t + 2] +
                e[t + 3],
              shift: 4,
            }
          );
        }),
        (t.P_LONG = function (e, t) {
          return (
            void 0 === t && (t = 0),
            {
              value: i.fromBytesBE(Array.from(e.slice(t, t + 8))).toString(),
              shift: 8,
            }
          );
        }),
        (t.P_BOOLEAN = function (e, t) {
          void 0 === t && (t = 0);
          const r = !!e[t];
          return { value: r, shift: 1 };
        }),
        (t.P_STRING_FIXED = (e) =>
          function (t, r) {
            void 0 === r && (r = 0);
            const i = s.Utf8ArrayToStr(t.slice(r, r + e));
            return { shift: e, value: i };
          }),
        (t.P_STRING_VAR = (e) =>
          function (r, i) {
            void 0 === i && (i = 0);
            const s = e(r, i),
              { value: n } = t.P_STRING_FIXED(s.value)(r, i + s.shift);
            return { shift: s.value + s.shift, value: n };
          }),
        (t.P_BASE58_FIXED = (e) =>
          function (t, r) {
            void 0 === r && (r = 0);
            const i = n.default.encode(t.slice(r, r + e));
            return { value: i, shift: e };
          }),
        (t.P_BASE58_VAR = (e) =>
          function (r, i) {
            void 0 === i && (i = 0);
            const s = e(r, i),
              { value: n } = t.P_BASE58_FIXED(s.value)(r, i + a);
            return { shift: s.value + a, value: n };
          }),
        (t.P_BASE64 = (e) =>
          function (t, r) {
            void 0 === r && (r = 0);
            const i = e(t, r),
              s =
                "base64:" +
                o.fromByteArray(t.slice(r + i.shift, r + i.shift + i.value));
            return { shift: i.value + i.shift, value: s };
          }));
      const u = (e) => (t, r) => {
        const i = s.Utf8ArrayToStr(t.slice(r, r + e));
        return { shift: e, value: i };
      };
      ((t.byteToStringWithLength = function (e, r) {
        void 0 === r && (r = 0);
        const i = t.P_SHORT(e, r),
          { value: s } = u(i.value)(e, r + a);
        return { shift: i.value + a, value: s };
      }),
        (t.byteToBase58 = function (e, t, r) {
          void 0 === t && (t = 0);
          const i = r || 32,
            s = n.default.encode(e.slice(t, t + i));
          return { value: s, shift: i };
        }),
        (t.byteToBase58WithLength = function (e, r) {
          void 0 === r && (r = 0);
          const i = t.P_SHORT(e, r),
            s = n.default.encode(e.slice(r + i.shift, r + i.shift + i.value));
          return { value: s, shift: i.shift + i.value };
        }),
        (t.byteToAddressOrAlias = function (e, r) {
          if ((void 0 === r && (r = 0), e[r] === t.ALIAS_VERSION)) {
            const i = t.byteToStringWithLength(e, r + 2);
            return {
              shift: i.shift + 2,
              value: `alias:${String.fromCharCode(e[r + 1])}:${i.value}`,
            };
          }
          return t.byteToBase58(e, r, 26);
        }),
        (t.byteNewAliasToString = function (e, r) {
          void 0 === r && (r = 0);
          const i = t.P_SHORT(e, r).value + a,
            { value: s } = t.byteToStringWithLength(e, r);
          return { shift: i, value: s };
        }),
        (t.byteToScript = function (e, r) {
          void 0 === r && (r = 0);
          const i = 1;
          if (0 === e[r]) return { shift: i, value: null };
          const s = t.P_SHORT(e, r + i),
            n = r + i + s.shift,
            a = r + i + s.shift + s.value,
            u = "base64:" + o.fromByteArray(e.slice(n, a));
          return { value: u, shift: a - r };
        }));
    },
    5605: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.REISSUE,
          u = e.version || 2,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            assetId: e.assetId,
            quantity: e.quantity,
            reissuable: e.reissuable,
            chainId: n.networkByte(e.chainId, 87),
            fee: n.fee(e, 1e8),
            timestamp: e.timestamp || Date.now(),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.reissue(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.reissue = u;
    },
    5606: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2928),
        n = r(2939),
        o = r(3009),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.BURN,
          u = e.version || 2,
          c = o.convertToPairs(t),
          l = o.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            assetId: e.assetId,
            amount: e.amount,
            chainId: o.networkByte(e.chainId, 87),
            fee: o.fee(e, 1e5),
            timestamp: e.timestamp || Date.now(),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.burn(d);
        const f = s.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return o.addProof(d, n.signBytes(t, f), r);
          }),
          (d.id = n.base58Encode(n.blake2b(f))),
          d
        );
      }
      t.burn = u;
    },
    5607: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2928),
        n = r(2939),
        o = r(3009),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.EXCHANGE,
          u = e.version || 2,
          c = o.convertToPairs(t),
          l = o.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            order1: e.order1,
            order2: e.order2,
            price: e.price,
            amount: e.amount,
            buyMatcherFee: e.buyMatcherFee,
            sellMatcherFee: e.sellMatcherFee,
            fee: o.fee(e, 1e5),
            timestamp: e.timestamp || Date.now(),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.exchange(d);
        const f = s.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return o.addProof(d, n.signBytes(t, f), r);
          }),
          Object.assign({}, d, { id: n.base58Encode(n.blake2b(f)) })
        );
      }
      t.exchange = u;
    },
    5608: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.LEASE,
          u = e.version || 2,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            amount: e.amount,
            recipient: e.recipient,
            fee: n.fee(e, 1e5),
            timestamp: e.timestamp || Date.now(),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.lease(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.lease = u;
    },
    5609: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2928),
        n = r(2939),
        o = r(3009),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.CANCEL_LEASE,
          u = e.version || 2,
          c = o.convertToPairs(t),
          l = o.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            leaseId: e.leaseId,
            fee: o.fee(e, 1e5),
            timestamp: e.timestamp || Date.now(),
            chainId: o.networkByte(e.chainId, 87),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.cancelLease(d);
        const f = s.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return o.addProof(d, n.signBytes(t, f), r);
          }),
          (d.id = n.base58Encode(n.blake2b(f))),
          d
        );
      }
      t.cancelLease = u;
    },
    5610: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(2928),
          {
            BASE58_STRING: s,
            BASE64_STRING: n,
            BYTE: o,
            BYTES: a,
            COUNT: u,
            LEN: c,
            LONG: l,
            SHORT: d,
            STRING: f,
          } = i.serializePrimitives,
          h = r(2939),
          p = r(2900),
          y = r(3009),
          m = r(2928),
          v = r(2986),
          S = {
            integer: ["integer", 0, l],
            number: ["integer", 0, l],
            boolean: ["boolean", 1, o],
            string: ["string", 3, c(d)(f)],
            binary: ["binary", 2, (e) => c(d)(n)(e.slice(7))],
            _: ["binary", 2, c(d)(a)],
          },
          b = (e) => S[typeof e] || S["_"];
        function g(t, r) {
          const i = p.TRANSACTION_TYPE.DATA,
            n = t.version || 1,
            a = y.convertToPairs(r),
            S = y.getSenderPublicKey(a, t);
          if (!Array.isArray(t.data))
            throw new Error('["data should be array"]');
          const g = t.timestamp || Date.now();
          let E = h.concat(
            o(p.TRANSACTION_TYPE.DATA),
            o(1),
            s(S),
            u(d)((e) =>
              h.concat(c(d)(f)(e.key), [b(e.value)[1]], b(e.value)[2](e.value)),
            )(t.data),
            l(g),
          );
          const A = 1e5 * Math.floor(1 + (E.length + 8 - 1) / 1024),
            T = {
              type: i,
              version: n,
              senderPublicKey: S,
              fee: y.fee(t, A),
              timestamp: g,
              proofs: t.proofs || [],
              id: "",
              data:
                t.data &&
                t.data.map((t) => {
                  if (t.type) return t;
                  {
                    const r = b(t.value)[0];
                    return {
                      type: r,
                      key: t.key,
                      value:
                        "binary" === r
                          ? "base64:" + e.from(t.value).toString("base64")
                          : t.value,
                    };
                  }
                }),
            };
          v.validate.data(T);
          const N = m.binary.serializeTx(T);
          return (
            a.forEach((e) => {
              let [t, r] = e;
              return y.addProof(T, h.signBytes(t, N), r);
            }),
            (T.id = h.base58Encode(h.blake2b(N))),
            T
          );
        }
        t.data = g;
      }).call(this, r(2).Buffer);
    },
    5611: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.ISSUE,
          u = e.version || 2,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            name: e.name,
            description: e.description,
            quantity: e.quantity,
            script: null == e.script ? void 0 : n.base64Prefix(e.script),
            decimals: null == e.decimals ? 8 : e.decimals,
            reissuable: e.reissuable || !1,
            fee: 1 === e.quantity ? n.fee(e, 1e6) : n.fee(e, 1e8),
            timestamp: e.timestamp || Date.now(),
            chainId: n.networkByte(e.chainId, 87),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.issue(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.issue = u;
    },
    5612: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2986),
        a = r(2928);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.TRANSFER,
          u = e.version || 2,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            assetId: n.normalizeAssetId(e.assetId),
            recipient: e.recipient,
            amount: e.amount,
            attachment: e.attachment || "",
            fee: n.fee(e, 1e5),
            feeAssetId: n.normalizeAssetId(e.feeAssetId),
            timestamp: e.timestamp || Date.now(),
            proofs: e.proofs || [],
            id: "",
          };
        o.validate.transfer(d);
        const f = a.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.transfer = u;
    },
    5613: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2928),
        n = r(2939),
        o = r(3009),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.ALIAS,
          u = e.version || 2,
          c = o.convertToPairs(t),
          l = o.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            alias: e.alias,
            fee: o.fee(e, 1e5),
            timestamp: e.timestamp || Date.now(),
            chainId: o.networkByte(e.chainId, 87),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.alias(d);
        const f = s.binary.serializeTx(d);
        c.forEach((e) => {
          let [t, r] = e;
          return o.addProof(d, n.signBytes(t, f), r);
        });
        const h = [f[0], ...f.slice(36, -16)];
        return ((d.id = n.base58Encode(n.blake2b(Uint8Array.from(h)))), d);
      }
      t.alias = u;
    },
    5614: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.SET_SCRIPT,
          u = e.version || 1,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e);
        if (void 0 === e.script)
          throw new Error(
            "Script field cannot be undefined. Use null explicitly to remove script",
          );
        const d = {
          type: r,
          version: u,
          senderPublicKey: l,
          chainId: n.networkByte(e.chainId, 87),
          fee: n.fee(e, 1e6),
          timestamp: e.timestamp || Date.now(),
          proofs: e.proofs || [],
          id: "",
          script: n.base64Prefix(e.script),
        };
        a.validate.setScript(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.setScript = u;
    },
    5615: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.SET_ASSET_SCRIPT,
          u = e.version || 1,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e);
        if (null == e.script) throw new Error("Asset script cannot be empty");
        const d = {
          type: r,
          version: u,
          senderPublicKey: l,
          assetId: e.assetId,
          chainId: n.networkByte(e.chainId, 87),
          fee: n.fee(e, 1e8),
          timestamp: e.timestamp || Date.now(),
          proofs: e.proofs || [],
          id: "",
          script: n.base64Prefix(e.script),
        };
        a.validate.setAssetScript(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.setAssetScript = u;
    },
    5616: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.SPONSORSHIP,
          u = e.version || 1,
          c = n.convertToPairs(t),
          l = n.getSenderPublicKey(c, e),
          d = {
            type: r,
            version: u,
            senderPublicKey: l,
            minSponsoredAssetFee: e.minSponsoredAssetFee,
            assetId: e.assetId,
            fee: n.fee(e, 1e8),
            timestamp: e.timestamp || Date.now(),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.sponsorship(d);
        const f = o.binary.serializeTx(d);
        return (
          c.forEach((e) => {
            let [t, r] = e;
            return n.addProof(d, s.signBytes(t, f), r);
          }),
          (d.id = s.base58Encode(s.blake2b(f))),
          d
        );
      }
      t.sponsorship = u;
    },
    5617: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2900),
        s = r(2939),
        n = r(3009),
        o = r(2928),
        a = r(2986);
      function u(e, t) {
        const r = i.TRANSACTION_TYPE.INVOKE_SCRIPT,
          u = e.version || 1,
          l = n.convertToPairs(t),
          d = n.getSenderPublicKey(l, e),
          f = {
            type: r,
            version: u,
            senderPublicKey: d,
            dApp: e.dApp,
            call: e.call && Object.assign({ args: [] }, e.call),
            payment: c(e.payment),
            fee: n.fee(e, 5e5),
            feeAssetId: n.normalizeAssetId(e.feeAssetId),
            timestamp: e.timestamp || Date.now(),
            chainId: n.networkByte(e.chainId, 87),
            proofs: e.proofs || [],
            id: "",
          };
        a.validate.invokeScript(f);
        const h = o.binary.serializeTx(f);
        return (
          l.forEach((e) => {
            let [t, r] = e;
            return n.addProof(f, s.signBytes(t, h), r);
          }),
          (f.id = s.base58Encode(s.base58Encode(s.blake2b(h)))),
          f
        );
      }
      t.invokeScript = u;
      const c = (e) =>
        null == e
          ? []
          : e.map((e) =>
              Object.assign({}, e, {
                assetId: "WAVES" === e.assetId ? null : e.assetId,
              }),
            );
    },
    6744: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        s = i.split("").reduce((e, t, r) => ((e[t] = r), e), {});
      t.default = {
        encode(e) {
          if (!e.length) return "";
          const t = [0];
          for (let r = 0; r < e.length; r++) {
            for (let e = 0; e < t.length; e++) t[e] <<= 8;
            t[0] += e[r];
            let i = 0;
            for (let e = 0; e < t.length; e++)
              ((t[e] += i), (i = (t[e] / 58) | 0), (t[e] %= 58));
            while (i) (t.push(i % 58), (i = (i / 58) | 0));
          }
          for (let r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
          return t
            .reverse()
            .map(function (e) {
              return i[e];
            })
            .join("");
        },
        decode(e) {
          if (!e.length) return new Uint8Array(0);
          const t = [0];
          for (let r = 0; r < e.length; r++) {
            const i = e[r];
            if (!(i in s))
              throw new Error(
                `There is no character "${i}" in the Base58 sequence!`,
              );
            for (let e = 0; e < t.length; e++) t[e] *= 58;
            t[0] += s[i];
            let n = 0;
            for (let e = 0; e < t.length; e++)
              ((t[e] += n), (n = t[e] >> 8), (t[e] &= 255));
            while (n) (t.push(255 & n), (n >>= 8));
          }
          for (let r = 0; "1" === e[r] && r < e.length - 1; r++) t.push(0);
          return new Uint8Array(t.reverse());
        },
      };
    },
    6745: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(4828),
        s = r(5602),
        n = r(4566);
      function o(e, r) {
        const { type: i, version: s } = e,
          o = n.getTransactionSchema(i, s);
        return t.serializerFromSchema(o, r)(e);
      }
      function a(e, r) {
        const i = e.version || 1,
          s = n.orderVersionMap[i];
        if (null == s) throw new Error("Unknown order version: " + i);
        return t.serializerFromSchema(s, r)(e);
      }
      ((t.serializerFromSchema = (e, r) => (n) => {
        let o, a;
        if ("array" === e.type)
          return (
            (o = t.serializerFromSchema(e.items, r)),
            (a = s.concat(...n.map((e) => o(e)))),
            s.concat((e.toBytes || i.SHORT)(n.length), a)
          );
        if ("object" === e.type) {
          let i = Uint8Array.from([]);
          if (e.optional && null == n) return Uint8Array.from([0]);
          if (
            (e.schema.forEach((e) => {
              const [u, c] = e;
              let l;
              ((l = Array.isArray(u)
                ? u.reduce((e, t) => Object.assign({}, e, { [t]: n[t] }), {})
                : n[u]),
                (o = t.serializerFromSchema(c, r)),
                (a = o(l)),
                (i = s.concat(i, a)));
            }),
            e.withLength)
          ) {
            const t = e.withLength.toBytes(i.length);
            i = s.concat(t, i);
          }
          return (e.optional && (i = s.concat([1], i)), i);
        }
        if ("anyOf" === e.type) {
          const u = n[e.discriminatorField],
            c = e.itemByKey(u);
          if (null == c)
            throw new Error("Serializer Error: Unknown anyOf type: " + u);
          return (
            "boolean" === c.strKey &&
              6 === c.key &&
              !1 === n.value &&
              (c.key = 7),
            (o = t.serializerFromSchema(c.schema, r)),
            null == e.valueField
              ? o(n)
              : ((a = o(n[e.valueField])),
                s.concat((e.toBytes || i.BYTE)(c.key), a))
          );
        }
        if ("primitive" === e.type || void 0 === e.type) return e.toBytes(n);
        if ("dataTxField" === e.type) {
          const u = i.LEN(i.SHORT)(i.STRING)(n.key),
            c = n.type,
            l = e.items.get(c);
          if (null == l)
            throw new Error("Serializer Error: Unknown dataTxField type: " + c);
          const d = [...e.items.values()].findIndex((e) => e === l);
          return (
            (o = t.serializerFromSchema(l, r)),
            (a = o(n.value)),
            s.concat(u, i.BYTE(d), a)
          );
        }
        throw new Error("Serializer Error: Unknown schema type: " + e.type);
      }),
        (t.serializeTx = o),
        (t.serializeOrder = a));
    },
    6746: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2987),
        s = {
          orderType: i.orEq(["sell", "buy"]),
          senderPublicKey: i.isPublicKey,
          matcherPublicKey: i.isPublicKey,
          version: i.orEq([void 0, 0, 1, 2, 3]),
          assetPair: i.validatePipe(
            i.isRequired(!0),
            i.pipe(i.prop("amountAsset"), i.isAssetId),
            i.pipe(i.prop("priceAsset"), i.isAssetId),
          ),
          price: i.isNumberLike,
          amount: i.isNumberLike,
          matcherFee: i.isNumberLike,
          expiration: i.isNumberLike,
          timestamp: i.isNumber,
          proofs: i.ifElse(i.isArray, i.defaultValue(!0), i.orEq([void 0])),
        },
        n = { matcherFeeAssetId: i.orEq([void 0, null, "WAVES"]) },
        o = { matcherFeeAssetId: i.isAssetId },
        a = i.validateByShema(s, i.getError),
        u = i.validateByShema(n, i.getError),
        c = i.validateByShema(o, i.getError);
      t.orderValidator = i.validatePipe(
        a,
        i.ifElse(i.pipe(i.prop("version"), i.isEq(3)), c, u),
      );
    },
    6747: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939),
        s = r(2928),
        n = r(2928),
        o = r(2986);
      function a(e, t) {
        o.validate.customData(e);
        let r = u(e);
        const s = i.base58Encode(i.blake2b(r)),
          n = e.publicKey ? e.publicKey : t && i.publicKey(t),
          a = t && i.signBytes(t, r);
        return Object.assign({}, e, { hash: s, publicKey: n, signature: a });
      }
      function u(e) {
        if (1 === e.version)
          return i.concat(
            [255, 255, 255, 1],
            s.serializePrimitives.BASE64_STRING(e.binary),
          );
        if (2 === e.version) {
          const t = n.binary.serializerFromSchema(s.schemas.txFields.data[1]);
          return i.concat([255, 255, 255, 2], t(e.data));
        }
        throw new Error("Invalid CustomData version: " + e.version);
      }
      ((t.customData = a), (t.serializeCustomData = u));
    },
    6748: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939),
        s = r(2928),
        { STRING: n, LEN: o, SHORT: a } = s.serializePrimitives,
        u = r(3009),
        c = r(2986);
      function l(e, r, s) {
        const n = u.convertToPairs(r),
          o =
            e.publicKey || u.getSenderPublicKey(n, { senderPublicKey: void 0 });
        c.validate.auth(e);
        const a = {
            hash: "",
            signature: "",
            host: e.host,
            data: e.data,
            publicKey: o,
            address: i.address({ publicKey: o }, s),
          },
          l = t.serializeAuthData(a);
        return (
          (a.signature = (null != r && i.signBytes(r, l)) || ""),
          (a.hash = i.base58Encode(i.blake2b(Uint8Array.from(l)))),
          a
        );
      }
      ((t.serializeAuthData = (e) =>
        i.concat(
          o(a)(n)("WavesWalletAuthentication"),
          o(a)(n)(e.host || ""),
          o(a)(n)(e.data || ""),
        )),
        (t.auth = l));
    },
    6749: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2939),
        s = r(2928),
        { LONG: n, BASE58_STRING: o } = s.serializePrimitives,
        a = r(3009),
        u = r(2986);
      function c(e, r, s) {
        const n = a.convertToPairs(r),
          o =
            e.publicKey || a.getSenderPublicKey(n, { senderPublicKey: void 0 }),
          c = e.timestamp || Date.now();
        u.validate.wavesAuth({ publicKey: o, timestamp: c });
        const l = {
            hash: "",
            signature: "",
            timestamp: c,
            publicKey: o,
            address: i.address({ publicKey: o }, s),
          },
          d = t.serializeWavesAuthData(l);
        return (
          (l.signature =
            n.map((e) => {
              let [t] = e;
              return i.signBytes(t, d);
            })[0] || ""),
          (l.hash = i.base58Encode(i.blake2b(Uint8Array.from(d)))),
          l
        );
      }
      ((t.serializeWavesAuthData = (e) =>
        i.concat(o(e.publicKey), n(e.timestamp))),
        (t.wavesAuth = c));
    },
    6750: function (e, t, r) {
      e.exports = r(10744);
    },
    6751: function (e, t, r) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), i = 0; i < r.length; i++)
            r[i] = arguments[i];
          return e.apply(t, r);
        };
      };
    },
    6752: function (e, t, r) {
      "use strict";
      var i = r(3198);
      function s(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, r) {
        if (!t) return e;
        var n;
        if (r) n = r(t);
        else if (i.isURLSearchParams(t)) n = t.toString();
        else {
          var o = [];
          (i.forEach(t, function (e, t) {
            null !== e &&
              "undefined" !== typeof e &&
              (i.isArray(e) ? (t += "[]") : (e = [e]),
              i.forEach(e, function (e) {
                (i.isDate(e)
                  ? (e = e.toISOString())
                  : i.isObject(e) && (e = JSON.stringify(e)),
                  o.push(s(t) + "=" + s(e)));
              }));
          }),
            (n = o.join("&")));
        }
        if (n) {
          var a = e.indexOf("#");
          (-1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + n));
        }
        return e;
      };
    },
    6753: function (e, t, r) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    6754: function (e, t, r) {
      "use strict";
      (function (t) {
        var i = r(3198),
          s = r(10749),
          n = { "Content-Type": "application/x-www-form-urlencoded" };
        function o(e, t) {
          !i.isUndefined(e) &&
            i.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        function a() {
          var e;
          return (
            ("undefined" !== typeof XMLHttpRequest ||
              ("undefined" !== typeof t &&
                "[object process]" === Object.prototype.toString.call(t))) &&
              (e = r(6755)),
            e
          );
        }
        var u = {
          adapter: a(),
          transformRequest: [
            function (e, t) {
              return (
                s(t, "Accept"),
                s(t, "Content-Type"),
                i.isFormData(e) ||
                i.isArrayBuffer(e) ||
                i.isBuffer(e) ||
                i.isStream(e) ||
                i.isFile(e) ||
                i.isBlob(e)
                  ? e
                  : i.isArrayBufferView(e)
                    ? e.buffer
                    : i.isURLSearchParams(e)
                      ? (o(
                          t,
                          "application/x-www-form-urlencoded;charset=utf-8",
                        ),
                        e.toString())
                      : i.isObject(e)
                        ? (o(t, "application/json;charset=utf-8"),
                          JSON.stringify(e))
                        : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" === typeof e)
                try {
                  e = JSON.parse(e);
                } catch (t) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        (i.forEach(["delete", "get", "head"], function (e) {
          u.headers[e] = {};
        }),
          i.forEach(["post", "put", "patch"], function (e) {
            u.headers[e] = i.merge(n);
          }),
          (e.exports = u));
      }).call(this, r(18));
    },
    6755: function (e, t, r) {
      "use strict";
      var i = r(3198),
        s = r(10750),
        n = r(6752),
        o = r(10752),
        a = r(10755),
        u = r(10756),
        c = r(6756);
      e.exports = function (e) {
        return new Promise(function (t, l) {
          var d = e.data,
            f = e.headers;
          i.isFormData(d) && delete f["Content-Type"];
          var h = new XMLHttpRequest();
          if (e.auth) {
            var p = e.auth.username || "",
              y = e.auth.password || "";
            f.Authorization = "Basic " + btoa(p + ":" + y);
          }
          var m = o(e.baseURL, e.url);
          if (
            (h.open(
              e.method.toUpperCase(),
              n(m, e.params, e.paramsSerializer),
              !0,
            ),
            (h.timeout = e.timeout),
            (h.onreadystatechange = function () {
              if (
                h &&
                4 === h.readyState &&
                (0 !== h.status ||
                  (h.responseURL && 0 === h.responseURL.indexOf("file:")))
              ) {
                var r =
                    "getAllResponseHeaders" in h
                      ? a(h.getAllResponseHeaders())
                      : null,
                  i =
                    e.responseType && "text" !== e.responseType
                      ? h.response
                      : h.responseText,
                  n = {
                    data: i,
                    status: h.status,
                    statusText: h.statusText,
                    headers: r,
                    config: e,
                    request: h,
                  };
                (s(t, l, n), (h = null));
              }
            }),
            (h.onabort = function () {
              h && (l(c("Request aborted", e, "ECONNABORTED", h)), (h = null));
            }),
            (h.onerror = function () {
              (l(c("Network Error", e, null, h)), (h = null));
            }),
            (h.ontimeout = function () {
              var t = "timeout of " + e.timeout + "ms exceeded";
              (e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                l(c(t, e, "ECONNABORTED", h)),
                (h = null));
            }),
            i.isStandardBrowserEnv())
          ) {
            var v = r(10757),
              S =
                (e.withCredentials || u(m)) && e.xsrfCookieName
                  ? v.read(e.xsrfCookieName)
                  : void 0;
            S && (f[e.xsrfHeaderName] = S);
          }
          if (
            ("setRequestHeader" in h &&
              i.forEach(f, function (e, t) {
                "undefined" === typeof d && "content-type" === t.toLowerCase()
                  ? delete f[t]
                  : h.setRequestHeader(t, e);
              }),
            i.isUndefined(e.withCredentials) ||
              (h.withCredentials = !!e.withCredentials),
            e.responseType)
          )
            try {
              h.responseType = e.responseType;
            } catch (b) {
              if ("json" !== e.responseType) throw b;
            }
          ("function" === typeof e.onDownloadProgress &&
            h.addEventListener("progress", e.onDownloadProgress),
            "function" === typeof e.onUploadProgress &&
              h.upload &&
              h.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                h && (h.abort(), l(e), (h = null));
              }),
            void 0 === d && (d = null),
            h.send(d));
        });
      };
    },
    6756: function (e, t, r) {
      "use strict";
      var i = r(10751);
      e.exports = function (e, t, r, s, n) {
        var o = new Error(e);
        return i(o, t, r, s, n);
      };
    },
    6757: function (e, t, r) {
      "use strict";
      var i = r(3198);
      e.exports = function (e, t) {
        t = t || {};
        var r = {},
          s = ["url", "method", "params", "data"],
          n = ["headers", "auth", "proxy"],
          o = [
            "baseURL",
            "url",
            "transformRequest",
            "transformResponse",
            "paramsSerializer",
            "timeout",
            "withCredentials",
            "adapter",
            "responseType",
            "xsrfCookieName",
            "xsrfHeaderName",
            "onUploadProgress",
            "onDownloadProgress",
            "maxContentLength",
            "validateStatus",
            "maxRedirects",
            "httpAgent",
            "httpsAgent",
            "cancelToken",
            "socketPath",
          ];
        (i.forEach(s, function (e) {
          "undefined" !== typeof t[e] && (r[e] = t[e]);
        }),
          i.forEach(n, function (s) {
            i.isObject(t[s])
              ? (r[s] = i.deepMerge(e[s], t[s]))
              : "undefined" !== typeof t[s]
                ? (r[s] = t[s])
                : i.isObject(e[s])
                  ? (r[s] = i.deepMerge(e[s]))
                  : "undefined" !== typeof e[s] && (r[s] = e[s]);
          }),
          i.forEach(o, function (i) {
            "undefined" !== typeof t[i]
              ? (r[i] = t[i])
              : "undefined" !== typeof e[i] && (r[i] = e[i]);
          }));
        var a = s.concat(n).concat(o),
          u = Object.keys(t).filter(function (e) {
            return -1 === a.indexOf(e);
          });
        return (
          i.forEach(u, function (i) {
            "undefined" !== typeof t[i]
              ? (r[i] = t[i])
              : "undefined" !== typeof e[i] && (r[i] = e[i]);
          }),
          r
        );
      };
    },
    6758: function (e, t, r) {
      "use strict";
      function i(e) {
        this.message = e;
      }
      ((i.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (i.prototype.__CANCEL__ = !0),
        (e.exports = i));
    },
    6759: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__awaiter) ||
          function (e, t, r, i) {
            return new (r || (r = Promise))(function (s, n) {
              function o(e) {
                try {
                  u(i.next(e));
                } catch (t) {
                  n(t);
                }
              }
              function a(e) {
                try {
                  u(i["throw"](e));
                } catch (t) {
                  n(t);
                }
              }
              function u(e) {
                e.done
                  ? s(e.value)
                  : new r(function (t) {
                      t(e.value);
                    }).then(o, a);
              }
              u((i = i.apply(e, t || [])).next());
            });
          },
        s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = s(r(6750)),
        o = r(2928),
        a = (e) => {
          const t = {},
            r = new Promise((r, i) => {
              ((t.resolve = r), (t.id = setTimeout(() => r(), e)));
            });
          return (
            (r.cancel = () => {
              (t.resolve(), clearTimeout(t.id));
            }),
            r
          );
        },
        u = function (e, t, r) {
          return (
            void 0 === r && (r = 1e3),
            a(r).then((r) =>
              t ? Promise.reject(new Error("Tx wait stopped: timeout")) : e(),
            )
          );
        },
        c = { timeout: 12e4, apiBase: "https://nodes.wavesplatform.com" };
      function l(e, r) {
        return i(this, void 0, void 0, function* () {
          const { timeout: i, apiBase: s } = Object.assign({}, c, r);
          let n = !1;
          const o = a(i);
          o.then(() => (n = !0));
          const l = () =>
            t
              .currentHeight(s)
              .then((t) => (t >= e ? (o.cancel(), t) : u(l, n, 1e4)))
              .catch((e) => u(l, n));
          return l();
        });
      }
      function d(e, t) {
        return i(this, void 0, void 0, function* () {
          const { timeout: r, apiBase: i } = Object.assign({}, c, t);
          let s = !1;
          const o = a(r);
          o.then(() => (s = !0));
          const u = () =>
            n.default
              .get("transactions/info/" + e, { baseURL: i })
              .then((e) => (o.cancel(), e.data))
              .catch((e) =>
                a(1e3).then((e) =>
                  s
                    ? Promise.reject(new Error("Tx wait stopped: timeout"))
                    : u(),
                ),
              );
          return u();
        });
      }
      ((t.currentHeight = (e) =>
        i(this, void 0, void 0, function* () {
          return yield n.default
            .get("/blocks/height", { baseURL: e })
            .then((e) => e.data && e.data.height);
        })),
        (t.waitForHeight = l),
        (t.waitForTx = d));
      const f = (e) =>
          400 === e.status
            ? Promise.reject(Object.assign(new Error(), e.data))
            : e,
        h = (e) => 400 === e || (e >= 200 && e < 300);
      function p(e, t, r) {
        return i(this, void 0, void 0, function* () {
          const { timeout: i } = Object.assign({}, c, r);
          let s = !1;
          const n = a(i);
          n.then(() => (s = !0));
          let o = yield d(e, r),
            u = o.height,
            f = o.height;
          while (u + t > f) {
            if (s) throw new Error("Tx wait stopped: timeout");
            (yield l(u + t, r), (o = yield d(e, r)), (u = o.height));
          }
          return o;
        });
      }
      function y(e, r) {
        return (
          void 0 === r && (r = c),
          i(this, void 0, void 0, function* () {
            const { apiBase: i } = Object.assign({}, c, r),
              s = yield t.currentHeight(i),
              n = s + e;
            return yield l(n, r);
          })
        );
      }
      function m(e, t) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get("transactions/info/" + e, {
              baseURL: t,
              validateStatus: (e) => 404 === e || h(e),
            })
            .then((e) => (311 === e.data.error ? null : e.data));
        });
      }
      function v(e, t) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get("addresses/balance/" + e, { baseURL: t, validateStatus: h })
            .then(f)
            .then((e) => e.data.balance);
        });
      }
      function S(e, t) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get("addresses/balance/details/" + e, {
              baseURL: t,
              validateStatus: h,
            })
            .then(f)
            .then((e) => e.data);
        });
      }
      function b(e, t, r) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get(`assets/balance/${t}/${e}`, { baseURL: r, validateStatus: h })
            .then(f)
            .then((e) => e.data.balance);
        });
      }
      function g(e, t) {
        return i(this, void 0, void 0, function* () {
          let r, i;
          "string" === typeof e
            ? ((r = e), (i = void 0))
            : ((r = e.address),
              (i =
                e.match &&
                encodeURIComponent(
                  "string" === typeof e.match ? e.match : e.match.source,
                )));
          const s = "addresses/data/" + r,
            o = { baseURL: t, params: { matches: i }, validateStatus: h },
            a = yield n.default
              .get(s, o)
              .then(f)
              .then((e) => e.data);
          return a.reduce((e, t) => Object.assign({}, e, { [t.key]: t }), {});
        });
      }
      function E(e, t, r) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get(`addresses/data/${t}/${e}`, {
              baseURL: r,
              validateStatus: (e) => 404 === e || h(e),
            })
            .then(f)
            .then((e) => (404 === e.status ? null : e.data));
        });
      }
      function A(e, t) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get("addresses/scriptInfo/" + e, {
              baseURL: t,
              validateStatus: (e) => h(e),
            })
            .then(f)
            .then((e) => e.data);
        });
      }
      function T(e, t) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get(`addresses/scriptInfo/${e}/meta`, {
              baseURL: t,
              validateStatus: (e) => h(e),
            })
            .then(f)
            .then((e) => e.data);
        });
      }
      function N() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return i(this, void 0, void 0, function* () {
          let e,
            r = "blockchain/rewards/";
          return (
            void 0 !== t[1] ? ((r += t[0].toString()), (e = t[1])) : (e = t[0]),
            n.default
              .get(r, { baseURL: e, validateStatus: (e) => h(e) })
              .then(f)
              .then((e) => e.data)
          );
        });
      }
      function P(e, t) {
        return i(this, void 0, void 0, function* () {
          return n.default
            .get("debug/stateChanges/info/" + e, {
              baseURL: t,
              validateStatus: (e) => h(e),
            })
            .then(f)
            .then((e) => e.data && e.data.stateChanges);
        });
      }
      function _(e, t) {
        return n.default
          .post("transactions/broadcast", o.json.stringifyTx(e), {
            baseURL: t,
            headers: { "content-type": "application/json" },
            validateStatus: h,
          })
          .then(f)
          .then((e) => e.data);
      }
      ((t.waitForTxWithNConfirmations = p),
        (t.waitNBlocks = y),
        (t.transactionById = m),
        (t.balance = v),
        (t.balanceDetails = S),
        (t.assetBalance = b),
        (t.accountData = g),
        (t.accountDataByKey = E),
        (t.scriptInfo = A),
        (t.scriptMeta = T),
        (t.rewards = N),
        (t.stateChanges = P),
        (t.broadcast = _));
    },
  },
]);
