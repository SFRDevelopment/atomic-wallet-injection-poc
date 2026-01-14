(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [153],
  {
    10187: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
              }
            : function (e, t, n, r) {
                (void 0 === r && (r = n), (e[r] = t[n]));
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n || t.hasOwnProperty(n) || r(t, e, n);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        i(n(6625), t),
        i(n(10388), t),
        i(n(10389), t),
        i(n(6641), t));
      var o = n(10390);
      Object.defineProperty(t, "RippleAPIBroadcast", {
        enumerable: !0,
        get: function () {
          return o.RippleAPIBroadcast;
        },
      });
    },
    10314: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatLedgerClose =
          t.getLedgerVersion =
          t.isConnected =
          t.disconnect =
          t.connect =
            void 0));
      const u = o(n(2793));
      function s() {
        return this.connection.isConnected();
      }
      function c() {
        return this.connection.getLedgerVersion();
      }
      function l() {
        return a(this, void 0, void 0, function* () {
          return this.connection.connect();
        });
      }
      function d() {
        return a(this, void 0, void 0, function* () {
          yield this.connection.disconnect();
        });
      }
      function f(e) {
        return {
          baseFeeXRP: u.dropsToXrp(e.fee_base),
          ledgerHash: e.ledger_hash,
          ledgerVersion: e.ledger_index,
          ledgerTimestamp: u.rippleTimeToISO8601(e.ledger_time),
          reserveBaseXRP: u.dropsToXrp(e.reserve_base),
          reserveIncrementXRP: u.dropsToXrp(e.reserve_inc),
          transactionCount: e.txn_count,
          validatedLedgerVersions: e.validated_ledgers,
        };
      }
      ((t.isConnected = s),
        (t.getLedgerVersion = c),
        (t.connect = l),
        (t.disconnect = d),
        (t.formatLedgerClose = f));
    },
    10319: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2794)),
        s = o(n(229)),
        c = n(2793),
        l = c.constants.AccountFlags,
        d = a(n(6631));
      function f(e) {
        const t = e.meta.AffectedNodes.filter(
          (e) => "AccountRoot" === e.ModifiedNode.LedgerEntryType,
        );
        return (s.ok(1 === t.length), t[0].ModifiedNode);
      }
      function m(e) {
        const t = {};
        if ("AccountSet" !== e.TransactionType) return t;
        const n = f(e),
          r = u.get(n.PreviousFields, "Flags"),
          i = u.get(n.FinalFields, "Flags");
        if (null != r && null != i) {
          const e = r ^ i,
            n = i & e,
            o = r & e;
          Object.entries(l).forEach((e) => {
            const [r, i] = e;
            n & i ? (t[r] = !0) : o & i && (t[r] = !1);
          });
        }
        const o = u.get(n.PreviousFields, "AccountTxnID"),
          a = u.get(n.FinalFields, "AccountTxnID");
        return (
          a && !o
            ? (t.enableTransactionIDTracking = !0)
            : o && !a && (t.enableTransactionIDTracking = !1),
          t
        );
      }
      function p(e) {
        const t = e.TransactionType;
        return (
          s.ok(
            "AccountSet" === t ||
              "SetRegularKey" === t ||
              "SignerListSet" === t,
          ),
          Object.assign({}, m(e), d.default(e))
        );
      }
      t.default = p;
    },
    10320: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2793),
        s = n(3124),
        c = n(2938);
      function l(e) {
        return (
          a.ok("AccountDelete" === e.TransactionType),
          u.removeUndefined({
            memos: c.parseMemos(e),
            destination: e.Destination,
            destinationTag: e.DestinationTag,
            destinationXAddress: s.classicAddressToXAddress(
              e.Destination,
              null != e.DestinationTag && e.DestinationTag,
              !1,
            ),
          })
        );
      }
      t.default = l;
    },
    10321: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2793),
        s = n(2938);
      function c(e) {
        return (
          a.ok("CheckCancel" === e.TransactionType),
          u.removeUndefined({ memos: s.parseMemos(e), checkID: e.CheckID })
        );
      }
      t.default = c;
    },
    10322: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = n(2793),
        c = a(n(3222)),
        l = n(2938);
      function d(e) {
        return (
          u.ok("CheckCash" === e.TransactionType),
          s.removeUndefined({
            memos: l.parseMemos(e),
            checkID: e.CheckID,
            amount: e.Amount && c.default(e.Amount),
            deliverMin: e.DeliverMin && c.default(e.DeliverMin),
          })
        );
      }
      t.default = d;
    },
    10323: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = n(2938),
        c = n(2793),
        l = a(n(3222)),
        d = n(2938);
      function f(e) {
        return (
          u.ok("CheckCreate" === e.TransactionType),
          c.removeUndefined({
            memos: d.parseMemos(e),
            destination: e.Destination,
            sendMax: l.default(e.SendMax),
            destinationTag: e.DestinationTag,
            expiration: e.Expiration && s.parseTimestamp(e.Expiration),
            invoiceID: e.InvoiceID,
          })
        );
      }
      t.default = f;
    },
    10324: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2793),
        s = n(2938);
      function c(e) {
        return (
          a.ok("DepositPreauth" === e.TransactionType),
          u.removeUndefined({
            memos: s.parseMemos(e),
            authorize: e.Authorize,
            unauthorize: e.Unauthorize,
          })
        );
      }
      t.default = c;
    },
    10325: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2938),
        s = n(2793);
      function c(e) {
        return (
          a.ok("EscrowCancel" === e.TransactionType),
          s.removeUndefined({
            memos: u.parseMemos(e),
            owner: e.Owner,
            escrowSequence: e.OfferSequence,
          })
        );
      }
      t.default = c;
    },
    10326: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = a(n(3222)),
        c = n(2938),
        l = n(2793);
      function d(e) {
        return (
          u.ok("EscrowCreate" === e.TransactionType),
          l.removeUndefined({
            amount: s.default(e.Amount).value,
            destination: e.Destination,
            memos: c.parseMemos(e),
            condition: e.Condition,
            allowCancelAfter: c.parseTimestamp(e.CancelAfter),
            allowExecuteAfter: c.parseTimestamp(e.FinishAfter),
            sourceTag: e.SourceTag,
            destinationTag: e.DestinationTag,
          })
        );
      }
      t.default = d;
    },
    10327: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2938),
        s = n(2793);
      function c(e) {
        return (
          a.ok("EscrowFinish" === e.TransactionType),
          s.removeUndefined({
            memos: u.parseMemos(e),
            owner: e.Owner,
            escrowSequence: e.OfferSequence,
            condition: e.Condition,
            fulfillment: e.Fulfillment,
          })
        );
      }
      t.default = c;
    },
    10328: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2938);
      function s(e) {
        return (
          a.ok("OfferCancel" === e.TransactionType),
          { memos: u.parseMemos(e), orderSequence: e.OfferSequence }
        );
      }
      t.default = s;
    },
    10329: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = n(2938),
        c = n(2938),
        l = a(n(3222)),
        d = n(2793),
        f = d.txFlags.OfferCreate;
      function m(e) {
        u.ok("OfferCreate" === e.TransactionType);
        const t = 0 === (e.Flags & f.Sell) ? "buy" : "sell",
          n = l.default(e.TakerGets),
          r = l.default(e.TakerPays),
          i = "buy" === t ? r : n,
          o = "buy" === t ? n : r;
        return d.removeUndefined({
          memos: c.parseMemos(e),
          direction: t,
          quantity: i,
          totalPrice: o,
          passive: 0 !== (e.Flags & f.Passive) || void 0,
          immediateOrCancel: 0 !== (e.Flags & f.ImmediateOrCancel) || void 0,
          fillOrKill: 0 !== (e.Flags & f.FillOrKill) || void 0,
          expirationTime: s.parseTimestamp(e.Expiration),
        });
      }
      t.default = m;
    },
    10330: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2794)),
        s = o(n(229)),
        c = o(n(2938)),
        l = n(2793),
        d = a(n(3222));
      function f(e) {
        return 0 !== (e.Flags & l.txFlags.Payment.NoRippleDirect);
      }
      function m(e) {
        return 0 !== (e.Flags & l.txFlags.Payment.LimitQuality);
      }
      function p(e, t) {
        return e.counterparty === t ? u.omit(e, "counterparty") : e;
      }
      function h(e) {
        s.ok("Payment" === e.TransactionType);
        const t = {
            address: e.Account,
            maxAmount: p(d.default(e.SendMax || e.Amount), e.Account),
            tag: e.SourceTag,
          },
          n = { address: e.Destination, tag: e.DestinationTag };
        return l.removeUndefined({
          source: l.removeUndefined(t),
          destination: l.removeUndefined(n),
          memos: c.parseMemos(e),
          invoiceID: e.InvoiceID,
          paths: e.Paths ? JSON.stringify(e.Paths) : void 0,
          allowPartialPayment: c.isPartialPayment(e) || void 0,
          noDirectRipple: f(e) || void 0,
          limitQuality: m(e) || void 0,
        });
      }
      t.default = h;
    },
    10331: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = n(2793),
        c = a(n(3222)),
        l = n(2938),
        d = s.txFlags.PaymentChannelClaim;
      function f(e) {
        return (
          u.ok("PaymentChannelClaim" === e.TransactionType),
          s.removeUndefined({
            memos: l.parseMemos(e),
            channel: e.Channel,
            balance: e.Balance && c.default(e.Balance).value,
            amount: e.Amount && c.default(e.Amount).value,
            signature: e.Signature,
            publicKey: e.PublicKey,
            renew: Boolean(e.Flags & d.Renew) || void 0,
            close: Boolean(e.Flags & d.Close) || void 0,
          })
        );
      }
      t.default = f;
    },
    10332: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = n(2938),
        c = n(2793),
        l = a(n(3222));
      function d(e) {
        return (
          u.ok("PaymentChannelCreate" === e.TransactionType),
          c.removeUndefined({
            memos: s.parseMemos(e),
            amount: l.default(e.Amount).value,
            destination: e.Destination,
            settleDelay: e.SettleDelay,
            publicKey: e.PublicKey,
            cancelAfter: e.CancelAfter && s.parseTimestamp(e.CancelAfter),
            sourceTag: e.SourceTag,
            destinationTag: e.DestinationTag,
          })
        );
      }
      t.default = d;
    },
    10333: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(229)),
        s = n(2938),
        c = n(2793),
        l = a(n(3222));
      function d(e) {
        return (
          u.ok("PaymentChannelFund" === e.TransactionType),
          c.removeUndefined({
            memos: s.parseMemos(e),
            channel: e.Channel,
            amount: l.default(e.Amount).value,
            expiration: e.Expiration && s.parseTimestamp(e.Expiration),
          })
        );
      }
      t.default = d;
    },
    10334: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2793),
        s = n(2938);
      function c(e) {
        return (
          a.ok("TicketCreate" === e.TransactionType),
          u.removeUndefined({
            memos: s.parseMemos(e),
            ticketCount: e.TicketCount,
          })
        );
      }
      t.default = c;
    },
    10335: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(229)),
        u = n(2938),
        s = n(2793),
        c = s.txFlags.TrustSet;
      function l(e, t, n) {
        return !!(e & t) || (!(e & n) && void 0);
      }
      function d(e) {
        return (
          a.ok("TrustSet" === e.TransactionType),
          s.removeUndefined({
            limit: e.LimitAmount.value,
            currency: e.LimitAmount.currency,
            counterparty: e.LimitAmount.issuer,
            memos: u.parseMemos(e),
            qualityIn: u.parseQuality(e.QualityIn),
            qualityOut: u.parseQuality(e.QualityOut),
            ripplingDisabled: l(e.Flags, c.SetNoRipple, c.ClearNoRipple),
            frozen: l(e.Flags, c.SetFreeze, c.ClearFreeze),
            authorized: l(e.Flags, c.SetAuth, 0),
          })
        );
      }
      t.default = d;
    },
    10336: function (e, t, n) {
      "use strict";
      function r(e) {
        return { amendment: e.Amendment };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    10337: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(n(800)),
        o = n(2793),
        a = n(2938);
      function u(e) {
        const t = new i.default(e.BaseFee, 16).toString();
        return {
          memos: a.parseMemos(e),
          baseFeeXRP: o.dropsToXrp(t),
          referenceFeeUnits: e.ReferenceFeeUnits,
          reserveBaseXRP: o.dropsToXrp(e.ReserveBase),
          reserveIncrementXRP: o.dropsToXrp(e.ReserveIncrement),
        };
      }
      t.default = u;
    },
    10338: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2794)),
        s = a(n(3939)),
        c = n(3942),
        l = o(n(3604)),
        d = a(n(5544)),
        f = a(n(6629)),
        m = n(2793);
      function p(e) {
        const t = s.default.decode(e.tx_blob);
        return (
          (t.hash = c.computeTransactionHash(t)),
          (t.ledger_index = e.ledger_index),
          { tx: t, meta: s.default.decode(e.meta), validated: e.validated }
        );
      }
      function h(e, t) {
        const n = e.tx_blob ? p(e) : e;
        return d.default(
          Object.assign({}, n.tx, { meta: n.meta, validated: n.validated }),
          t,
        );
      }
      function _(e, t) {
        if (t.address === e.counterparty) return !0;
        const n = t.specification;
        return !(
          !n ||
          !(
            (n.destination && n.destination.address === e.counterparty) ||
            n.counterparty === e.counterparty
          )
        );
      }
      function v(e, t, n) {
        return (
          (!t.excludeFailures || "tesSUCCESS" === n.outcome.result) &&
          !(t.types && !t.types.includes(n.type)) &&
          (!0 !== t.initiated || n.address === e) &&
          (!1 !== t.initiated || n.address !== e) &&
          !(t.counterparty && !_(t, n))
        );
      }
      function g(e, t) {
        return (
          !e.startTx ||
          (e.earliestFirst
            ? l.compareTransactions(t, e.startTx) > 0
            : l.compareTransactions(t, e.startTx) < 0)
        );
      }
      function y(e, t, n) {
        const r = (e) => h(e, t.includeRawTransactions);
        return {
          marker: n.marker,
          results: n.transactions
            .filter((e) => e.validated)
            .map(r)
            .filter(u.partial(v, e, t))
            .filter(u.partial(g, t)),
        };
      }
      function b(e, t, n, r, i) {
        const o = {
          command: "account_tx",
          account: t,
          ledger_index_min: n.minLedgerVersion || -1,
          ledger_index_max: n.maxLedgerVersion || -1,
          forward: n.earliestFirst,
          binary: n.binary,
          limit: l.clamp(i, 10, 400),
          marker: r,
        };
        return e.request(o).then((e) => y(t, n, e));
      }
      function O(e, t, n) {
        let { minLedgerVersion: r, maxLedgerVersion: i } = t;
        return (
          t.limit &&
            n.length === t.limit &&
            (t.earliestFirst
              ? (i = n[n.length - 1].outcome.ledgerVersion)
              : (r = n[n.length - 1].outcome.ledgerVersion)),
          l.hasCompleteLedgerRange(e, r, i).then((e) => {
            if (!e) throw new m.errors.MissingLedgerHistoryError();
          })
        );
      }
      function P(e, t, n) {
        const r = t.earliestFirst
          ? n.sort(l.compareTransactions)
          : n.sort(l.compareTransactions).reverse();
        return O(e, t, r).then(() => r);
      }
      function j(e, t, n) {
        const r = u.partial(b, e, t, n),
          i = u.partial(P, e, n);
        return l.getRecursive(r, n.limit).then(i);
      }
      function T(e, t) {
        (void 0 === t && (t = {}),
          m.validate.getTransactions({ address: e, options: t }),
          (e = m.ensureClassicAddress(e)));
        const n = { maxLedgerVersion: -1 };
        if (t.start)
          return f.default.call(this, t.start).then((r) => {
            const i = r.outcome.ledgerVersion,
              o = t.earliestFirst
                ? { minLedgerVersion: i }
                : { maxLedgerVersion: i },
              a = Object.assign({}, n, t, { startTx: r }, o);
            return j(this.connection, e, a);
          });
        const r = Object.assign({}, n, t);
        return j(this.connection, e, r);
      }
      t.default = T;
    },
    10351: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        u =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = o(n(2794)),
        c = n(2793),
        l = u(n(10352));
      function d(e, t) {
        return null === e || t.specification.currency === e;
      }
      function f(e, t) {
        var n;
        return (
          void 0 === t && (t = {}),
          a(this, void 0, void 0, function* () {
            (c.validate.getTrustlines({ address: e, options: t }),
              (e = c.ensureClassicAddress(e)));
            const r = yield this._requestAll("account_lines", {
                account: e,
                ledger_index:
                  null !== (n = t.ledgerVersion) && void 0 !== n
                    ? n
                    : yield this.getLedgerVersion(),
                limit: t.limit,
                peer: t.counterparty,
              }),
              i = s.flatMap(r, (e) => e.lines);
            return i.map(l.default).filter((e) => d(t.currency || null, e));
          })
        );
      }
      t.default = f;
    },
    10352: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(2938),
        i = n(2793);
      function o(e) {
        const t = i.removeUndefined({
            limit: e.limit,
            currency: e.currency,
            counterparty: e.account,
            qualityIn: r.parseQuality(e.quality_in) || void 0,
            qualityOut: r.parseQuality(e.quality_out) || void 0,
            ripplingDisabled: e.no_ripple,
            frozen: e.freeze,
            authorized: e.authorized,
          }),
          n = i.removeUndefined({
            limit: e.limit_peer,
            ripplingDisabled: e.no_ripple_peer,
            frozen: e.freeze_peer,
            authorized: e.peer_authorized,
          }),
          o = { balance: e.balance };
        return { specification: t, counterparty: n, state: o };
      }
      t.default = o;
    },
    10353: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3604)),
        u = n(2793);
      function s(e) {
        return {
          currency: e.specification.currency,
          counterparty: e.specification.counterparty,
          value: e.state.balance,
        };
      }
      function c(e, t) {
        const n = t.trustlines.map(s);
        if (!(e.counterparty || (e.currency && "XRP" !== e.currency))) {
          const e = { currency: "XRP", value: t.xrp };
          n.unshift(e);
        }
        if (e.limit && n.length > e.limit) {
          const t = n.length - e.limit;
          n.splice(-t, t);
        }
        return n;
      }
      function l(e, t) {
        return null != t && null !== t
          ? Promise.resolve(t)
          : e.getLedgerVersion();
      }
      function d(e, t) {
        return (
          void 0 === t && (t = {}),
          u.validate.getTrustlines({ address: e, options: t }),
          (e = u.ensureClassicAddress(e)),
          Promise.all([
            l(this.connection, t.ledgerVersion).then((t) =>
              a.getXRPBalance(this.connection, e, t),
            ),
            this.getTrustlines(e, t),
          ]).then((e) => c(t, { xrp: e[0], trustlines: e[1] }))
        );
      }
      t.default = d;
    },
    10354: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          function i(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              try {
                s(r["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              e.done ? n(e.value) : i(e.value).then(a, u);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(2793),
        o = n(3604);
      function a(e) {
        const t = {};
        return (
          null != e.balances &&
            ((t.balances = []),
            Object.entries(e.balances).forEach((e) => {
              const [n, r] = e;
              r.forEach((e) => {
                t.balances.push(Object.assign({ counterparty: n }, e));
              });
            })),
          null != e.assets &&
            ((t.assets = []),
            Object.entries(e.assets).forEach((e) => {
              let [n, r] = e;
              r.forEach((e) => {
                t.assets.push(Object.assign({ counterparty: n }, e));
              });
            })),
          null != e.obligations &&
            (t.obligations = Object.entries(e.obligations).map((e) => {
              let [t, n] = e;
              return { currency: t, value: n };
            })),
          t
        );
      }
      function u(e, t) {
        return (
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function* () {
            (i.validate.getBalanceSheet({ address: e, options: t }),
              (t = yield o.ensureLedgerVersion.call(this, t)));
            const n = yield this.request("gateway_balances", {
              account: e,
              strict: !0,
              hotwallet: t.excludeAddresses,
              ledger_index: t.ledgerVersion,
            });
            return a(n);
          })
        );
      }
      t.default = u;
    },
    10355: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2794)),
        s = a(n(800)),
        c = n(3604),
        l = n(2793),
        d = a(n(10356)),
        f = l.errors.NotFoundError,
        m = l.errors.ValidationError;
      function p(e, t) {
        return u.defaults(
          Object.assign({}, t, {
            source_account: e.source_account,
            source_currencies: e.source_currencies,
          }),
          { destination_amount: e.destination_amount },
        );
      }
      function h(e, t) {
        const n = Object.assign(
            {
              value:
                "XRP" === t.destination.amount.currency
                  ? l.dropsToXrp("-1")
                  : "-1",
            },
            t.destination.amount,
          ),
          r = {
            command: "ripple_path_find",
            source_account: t.source.address,
            destination_account: t.destination.address,
            destination_amount: l.toRippledAmount(n),
          };
        if (
          ("object" !== typeof r.destination_amount ||
            r.destination_amount.issuer ||
            (r.destination_amount.issuer = r.destination_account),
          t.source.currencies &&
            t.source.currencies.length > 0 &&
            (r.source_currencies = t.source.currencies.map((e) =>
              c.renameCounterpartyToIssuer(e),
            )),
          t.source.amount)
        ) {
          if (null != t.destination.amount.value)
            throw new m(
              "Cannot specify both source.amount and destination.amount.value in getPaths",
            );
          ((r.send_max = l.toRippledAmount(t.source.amount)),
            "string" === typeof r.send_max ||
              r.send_max.issuer ||
              (r.send_max.issuer = t.source.address));
        }
        return e.request(r).then((e) => p(r, e));
      }
      function _(e, t) {
        const n = e.destination_amount;
        return (
          new s.default(t).isGreaterThanOrEqualTo(n) &&
            e.alternatives.unshift({
              paths_computed: [],
              source_amount: e.destination_amount,
            }),
          e
        );
      }
      function v(e) {
        return "object" === typeof e && e.currency && "XRP" !== e.currency;
      }
      function g(e, t, n) {
        return v(n.destination_amount) ||
          !n.destination_currencies.includes("XRP")
          ? Promise.resolve(n)
          : c.getXRPBalance(e, t, void 0).then((e) => _(n, e));
      }
      function y(e, t) {
        return (
          e.source.amount &&
            null == e.destination.amount.value &&
            t.alternatives &&
            (t.alternatives = t.alternatives.filter((t) => {
              if (!t.source_amount) return !1;
              const n = new s.default(
                  "XRP" === e.source.amount.currency
                    ? l.xrpToDrops(e.source.amount.value)
                    : e.source.amount.value,
                ),
                r = new s.default(
                  "string" === typeof t.source_amount
                    ? t.source_amount
                    : t.source_amount.value,
                );
              return r.eq(n);
            })),
          t
        );
      }
      function b(e, t) {
        if (t.alternatives && t.alternatives.length > 0) return d.default(t);
        throw null == t.destination_currencies ||
          t.destination_currencies.includes(e.destination.amount.currency)
          ? t.source_currencies && t.source_currencies.length > 0
            ? new f(
                "No paths found. Please ensure that the source_account has sufficient funds to execute the payment in one of the specified source_currencies. If it does there may be insufficient liquidity in the network to execute this payment right now",
              )
            : new f(
                "No paths found. Please ensure that the source_account has sufficient funds to execute the payment. If it does there may be insufficient liquidity in the network to execute this payment right now",
              )
          : new f(
              "No paths found. The destination_account does not accept " +
                e.destination.amount.currency +
                ", they only accept: " +
                t.destination_currencies.join(", "),
            );
      }
      function O(e) {
        l.validate.getPaths({ pathfind: e });
        const t = e.source.address;
        return h(this.connection, e)
          .then((e) => g(this.connection, t, e))
          .then((t) => y(e, t))
          .then((t) => b(e, t));
      }
      t.default = O;
    },
    10356: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2794)),
        s = a(n(3222));
      function c(e) {
        return e.map((e) => e.map((e) => u.omit(e, ["type", "type_hex"])));
      }
      function l(e, t) {
        return t.counterparty === e ? u.omit(t, "counterparty") : t;
      }
      function d(e, t) {
        const n = Object.keys(t)[0],
          r = t[n];
        return u.set({ address: e }, n, l(e, r));
      }
      function f(e, t, n, r) {
        const i =
          null != r.destination_amount
            ? {
                source: { amount: s.default(r.source_amount) },
                destination: { minAmount: s.default(r.destination_amount) },
              }
            : {
                source: { maxAmount: s.default(r.source_amount) },
                destination: { amount: s.default(n) },
              };
        return {
          source: d(e, i.source),
          destination: d(t, i.destination),
          paths: JSON.stringify(c(r.paths_computed)),
        };
      }
      function m(e) {
        const t = e.source_account,
          n = e.destination_account,
          r = e.destination_amount;
        return e.alternatives.map((e) => f(t, n, r, e));
      }
      t.default = m;
    },
    10357: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2794)),
        s = n(2793),
        c = n(10358);
      function l(e, t) {
        let n = [];
        for (const r of t) {
          const t = r.offers.map((t) => c.parseAccountOrder(e, t));
          n = n.concat(t);
        }
        return u.sortBy(n, (e) => e.properties.sequence);
      }
      function d(e, t) {
        return (
          void 0 === t && (t = {}),
          a(this, void 0, void 0, function* () {
            s.validate.getOrders({ address: e, options: t });
            const n = yield this._requestAll("account_offers", {
              account: e,
              ledger_index: t.ledgerVersion || (yield this.getLedgerVersion()),
              limit: t.limit,
            });
            return l(e, n);
          })
        );
      }
      t.default = d;
    },
    10358: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseAccountOrder = void 0));
      const i = r(n(800)),
        o = r(n(3222)),
        a = n(2938),
        u = n(2793),
        s = n(6640);
      function c(e, t) {
        const n = new i.default(t.value).dividedBy(e.value);
        return n.precision(16, i.default.ROUND_HALF_UP).toString();
      }
      function l(e, t) {
        const n = 0 === (t.flags & s.orderFlags.Sell) ? "buy" : "sell",
          r = o.default(t.taker_gets),
          i = o.default(t.taker_pays),
          l = "buy" === n ? i : r,
          d = "buy" === n ? r : i,
          f = u.removeUndefined({
            direction: n,
            quantity: l,
            totalPrice: d,
            passive: 0 !== (t.flags & s.orderFlags.Passive) || void 0,
            expirationTime: a.parseTimestamp(t.expiration),
          }),
          m = t.quality
            ? a.adjustQualityForXRP(
                t.quality.toString(),
                r.currency,
                i.currency,
              )
            : c(r, i),
          p = { maker: e, sequence: t.seq, makerExchangeRate: m };
        return { specification: f, properties: p };
      }
      t.parseAccountOrder = l;
    },
    10359: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        u =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getOrderbook = t.formatBidsAndAsks = void 0));
      const s = o(n(2794)),
        c = o(n(3604)),
        l = n(10360),
        d = n(2793),
        f = u(n(800));
      function m(e, t) {
        return e.currency === t.currency && e.counterparty === t.counterparty;
      }
      function p(e, t) {
        return t.specification.direction === e;
      }
      function h(e) {
        const t = e.specification,
          n = {
            quantity: t.totalPrice,
            totalPrice: t.quantity,
            direction: "buy" === t.direction ? "sell" : "buy",
          },
          r = s.merge({}, t, n);
        return s.merge({}, e, { specification: r });
      }
      function _(e, t) {
        const n = t.specification.quantity;
        return m(n, e) ? t : h(t);
      }
      function v(e, t) {
        const n = t
            .sort((e, t) => new f.default(e.quality).comparedTo(t.quality))
            .map(l.parseOrderbookOrder),
          r = n.map(s.partial(_, e.base)),
          i = r.filter(s.partial(p, "buy")),
          o = r.filter(s.partial(p, "sell"));
        return { bids: i, asks: o };
      }
      function g(e, t, n, r, i) {
        return a(this, void 0, void 0, function* () {
          const o = c.renameCounterpartyToIssuerInOrder({
            taker_gets: r,
            taker_pays: i,
          });
          return e._requestAll("book_offers", {
            taker_gets: o.taker_gets,
            taker_pays: o.taker_pays,
            ledger_index: n.ledgerVersion || "validated",
            limit: n.limit,
            taker: t,
          });
        });
      }
      function y(e, t, n) {
        return (
          void 0 === n && (n = {}),
          a(this, void 0, void 0, function* () {
            d.validate.getOrderbook({ address: e, orderbook: t, options: n });
            const [r, i] = yield Promise.all([
                g(this, e, n, t.base, t.counter),
                g(this, e, n, t.counter, t.base),
              ]),
              o = s.flatMap(r, (e) => e.offers),
              a = s.flatMap(i, (e) => e.offers);
            return v(t, [...o, ...a]);
          })
        );
      }
      ((t.formatBidsAndAsks = v), (t.getOrderbook = y));
    },
    10360: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseOrderbookOrder = void 0));
      const u = o(n(2794)),
        s = n(2938),
        c = n(2793),
        l = n(6640),
        d = a(n(3222));
      function f(e) {
        const t = 0 === (e.Flags & l.orderFlags.Sell) ? "buy" : "sell",
          n = d.default(e.TakerGets),
          r = d.default(e.TakerPays),
          i = "buy" === t ? r : n,
          o = "buy" === t ? n : r,
          a = c.removeUndefined({
            direction: t,
            quantity: i,
            totalPrice: o,
            passive: 0 !== (e.Flags & l.orderFlags.Passive) || void 0,
            expirationTime: s.parseTimestamp(e.Expiration),
          }),
          f = {
            maker: e.Account,
            sequence: e.Sequence,
            makerExchangeRate: s.adjustQualityForXRP(
              e.quality,
              n.currency,
              r.currency,
            ),
          },
          m = e.taker_gets_funded ? d.default(e.taker_gets_funded) : void 0,
          p = e.taker_pays_funded ? d.default(e.taker_pays_funded) : void 0,
          h = c.removeUndefined({ fundedAmount: m, priceOfFundedAmount: p }),
          _ = u.isEmpty(h) ? void 0 : h;
        return c.removeUndefined({
          specification: a,
          properties: f,
          state: _,
          data: e,
        });
      }
      t.parseOrderbookOrder = f;
    },
    10361: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getSettings = t.parseAccountFlags = void 0));
      const o = i(n(6631)),
        a = n(2793),
        u = a.constants.AccountFlags;
      function s(e, t) {
        void 0 === t && (t = {});
        const n = {};
        for (const r in u)
          e & u[r] ? (n[r] = !0) : t.excludeFalse || (n[r] = !1);
        return n;
      }
      function c(e) {
        const t = e.account_data,
          n = s(t.Flags, { excludeFalse: !0 }),
          r = o.default(t);
        return Object.assign({}, n, r);
      }
      function l(e, t) {
        return (
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function* () {
            (a.validate.getSettings({ address: e, options: t }),
              (e = a.ensureClassicAddress(e)));
            const n = yield this.request("account_info", {
              account: e,
              ledger_index: t.ledgerVersion || "validated",
              signer_lists: !0,
            });
            return c(n);
          })
        );
      }
      ((t.parseAccountFlags = s), (t.getSettings = l));
    },
    10362: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          function i(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              try {
                s(r["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              e.done ? n(e.value) : i(e.value).then(a, u);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(2793);
      function o(e) {
        const t = e.account_data;
        return i.removeUndefined({
          sequence: t.Sequence,
          xrpBalance: i.dropsToXrp(t.Balance),
          ownerCount: t.OwnerCount,
          previousInitiatedTransactionID: t.AccountTxnID,
          previousAffectingTransactionID: t.PreviousTxnID,
          previousAffectingTransactionLedgerVersion: t.PreviousTxnLgrSeq,
        });
      }
      function a(e, t) {
        return (
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function* () {
            (i.validate.getAccountInfo({ address: e, options: t }),
              (e = i.ensureClassicAddress(e)));
            const n = yield this.request("account_info", {
              account: e,
              ledger_index: t.ledgerVersion || "validated",
            });
            return o(n);
          })
        );
      }
      t.default = a;
    },
    10363: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          function i(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              try {
                s(r["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              e.done ? n(e.value) : i(e.value).then(a, u);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(2793);
      function o(e, t) {
        return (
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function* () {
            const n = yield this.request(
              "account_objects",
              i.removeUndefined({
                account: e,
                type: t.type,
                ledger_hash: t.ledgerHash,
                ledger_index: t.ledgerIndex,
                limit: t.limit,
                marker: t.marker,
              }),
            );
            return n;
          })
        );
      }
      t.default = o;
    },
    10364: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          function i(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              try {
                s(r["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              e.done ? n(e.value) : i(e.value).then(a, u);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(10365),
        o = n(2793),
        a = o.errors.NotFoundError;
      function u(e) {
        if (null == e.node || "PayChannel" !== e.node.LedgerEntryType)
          throw new a("Payment channel ledger entry not found");
        return i.parsePaymentChannel(e.node);
      }
      function s(e) {
        return r(this, void 0, void 0, function* () {
          o.validate.getPaymentChannel({ id: e });
          const t = yield this.request("ledger_entry", {
            index: e,
            binary: !1,
            ledger_index: "validated",
          });
          return u(t);
        });
      }
      t.default = s;
    },
    10365: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parsePaymentChannel = void 0));
      const r = n(2938),
        i = n(2793);
      function o(e) {
        return i.removeUndefined({
          memos: r.parseMemos(e),
          account: e.Account,
          amount: i.dropsToXrp(e.Amount),
          balance: i.dropsToXrp(e.Balance),
          destination: e.Destination,
          publicKey: e.PublicKey,
          settleDelay: e.SettleDelay,
          expiration: r.parseTimestamp(e.Expiration),
          cancelAfter: r.parseTimestamp(e.CancelAfter),
          sourceTag: e.SourceTag,
          destinationTag: e.DestinationTag,
          previousAffectingTransactionID: e.PreviousTxnID,
          previousAffectingTransactionLedgerVersion: e.PreviousTxnLgrSeq,
        });
      }
      t.parsePaymentChannel = o;
    },
    10366: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(2794)),
        u = o(n(3004)),
        s = u.common.validate,
        c = u.common.txFlags.Payment,
        l = u.common.errors.ValidationError,
        d = n(2793),
        f = n(3004);
      function m(e) {
        return null != e.maxAmount;
      }
      function p(e) {
        return null != e.minAmount;
      }
      function h(e) {
        const { source: t, destination: n } = e,
          r = m(t) ? t.maxAmount.currency : t.amount.currency,
          i = p(n) ? n.minAmount.currency : n.amount.currency;
        return ("XRP" === r || "drops" === r) && ("XRP" === i || "drops" === i);
      }
      function _(e) {
        return (
          e &&
          "XRP" !== e.currency &&
          "drops" !== e.currency &&
          null == e.counterparty
        );
      }
      function v(e) {
        [e.source, e.destination].forEach((e) => {
          ["amount", "minAmount", "maxAmount"].forEach((t) => {
            _(e[t]) && (e[t].counterparty = e.address);
          });
        });
      }
      function g(e) {
        const t = "100000000000",
          n =
            "999999999999999900000000000000000000000000000000000000000000000000000000000000000000000000000000";
        let r;
        return (
          (r =
            "XRP" === e.currency
              ? t
              : "drops" === e.currency
                ? d.xrpToDrops(t)
                : n),
          Object.assign({}, e, { value: r })
        );
      }
      function y(e, t) {
        const n = f.getClassicAccountAndTag(e, t);
        return ((n.tag = !1 === n.tag ? void 0 : n.tag), n);
      }
      function b(e, t) {
        const n = a.cloneDeep(t);
        v(n);
        const r = y(n.source.address, n.source.tag),
          i = y(e, void 0);
        if (i.classicAccount !== r.classicAccount)
          throw new l("address must match payment.source.address");
        if (null != i.tag && null != r.tag && i.tag !== r.tag)
          throw new l(
            "address includes a tag that does not match payment.source.tag",
          );
        const o = y(n.destination.address, n.destination.tag);
        if (
          (m(n.source) && p(n.destination)) ||
          (!m(n.source) && !p(n.destination))
        )
          throw new l(
            "payment must specify either (source.maxAmount and destination.amount) or (source.amount and destination.minAmount)",
          );
        const s = p(n.destination)
            ? n.destination.minAmount
            : n.destination.amount,
          f = m(n.source) ? n.source.maxAmount : n.source.amount,
          _ = p(n.destination) && !h(n) ? g(s) : s,
          b = {
            TransactionType: "Payment",
            Account: r.classicAccount,
            Destination: o.classicAccount,
            Amount: d.toRippledAmount(_),
            Flags: 0,
          };
        if (
          (null != n.invoiceID && (b.InvoiceID = n.invoiceID),
          null != r.tag && (b.SourceTag = r.tag),
          null != o.tag && (b.DestinationTag = o.tag),
          null != n.memos && (b.Memos = n.memos.map(u.convertMemo)),
          !0 === n.noDirectRipple && (b.Flags |= c.NoRippleDirect),
          !0 === n.limitQuality && (b.Flags |= c.LimitQuality),
          h(n))
        ) {
          if (!0 === n.allowPartialPayment)
            throw new l("XRP to XRP payments cannot be partial payments");
        } else
          ((n.allowPartialPayment || p(n.destination)) &&
            (b.Flags |= c.PartialPayment),
            (b.SendMax = d.toRippledAmount(f)),
            p(n.destination) && (b.DeliverMin = d.toRippledAmount(s)),
            null != n.paths && (b.Paths = JSON.parse(n.paths)));
        return b;
      }
      function O(e, t, n) {
        void 0 === n && (n = {});
        try {
          s.preparePayment({ address: e, payment: t, instructions: n });
          const r = b(e, t);
          return u.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = O;
    },
    10367: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = a(n(800)),
        s = o(n(3004)),
        c = s.common.validate,
        l = s.common.txFlags.TrustSet;
      function d(e) {
        return new u.default(e)
          .shiftedBy(9)
          .integerValue(u.default.ROUND_DOWN)
          .toNumber();
      }
      function f(e, t) {
        const n = {
            currency: t.currency,
            issuer: t.counterparty,
            value: t.limit,
          },
          r = {
            TransactionType: "TrustSet",
            Account: e,
            LimitAmount: n,
            Flags: 0,
          };
        return (
          null != t.qualityIn && (r.QualityIn = d(t.qualityIn)),
          null != t.qualityOut && (r.QualityOut = d(t.qualityOut)),
          !0 === t.authorized && (r.Flags |= l.SetAuth),
          null != t.ripplingDisabled &&
            (r.Flags |= t.ripplingDisabled ? l.NoRipple : l.ClearNoRipple),
          null != t.frozen &&
            (r.Flags |= t.frozen ? l.SetFreeze : l.ClearFreeze),
          null != t.memos && (r.Memos = t.memos.map(s.convertMemo)),
          r
        );
      }
      function m(e, t, n) {
        void 0 === n && (n = {});
        try {
          c.prepareTrustline({ address: e, trustline: t, instructions: n });
          const r = f(e, t);
          return s.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = m;
    },
    10368: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.txFlags.OfferCreate,
        s = n(2793);
      function c(e, t) {
        const n = s.toRippledAmount(
            "buy" === t.direction ? t.quantity : t.totalPrice,
          ),
          r = s.toRippledAmount(
            "buy" === t.direction ? t.totalPrice : t.quantity,
          ),
          i = {
            TransactionType: "OfferCreate",
            Account: e,
            TakerGets: r,
            TakerPays: n,
            Flags: 0,
          };
        return (
          "sell" === t.direction && (i.Flags |= u.Sell),
          !0 === t.passive && (i.Flags |= u.Passive),
          !0 === t.immediateOrCancel && (i.Flags |= u.ImmediateOrCancel),
          !0 === t.fillOrKill && (i.Flags |= u.FillOrKill),
          null != t.expirationTime &&
            (i.Expiration = s.iso8601ToRippleTime(t.expirationTime)),
          null != t.orderToReplace && (i.OfferSequence = t.orderToReplace),
          null != t.memos && (i.Memos = t.memos.map(a.convertMemo)),
          i
        );
      }
      function l(e, t, n) {
        void 0 === n && (n = {});
        try {
          s.validate.prepareOrder({ address: e, order: t, instructions: n });
          const r = c(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = l;
    },
    10369: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.validate;
      function s(e, t) {
        const n = {
          TransactionType: "OfferCancel",
          Account: e,
          OfferSequence: t.orderSequence,
        };
        return (null != t.memos && (n.Memos = t.memos.map(a.convertMemo)), n);
      }
      function c(e, t, n) {
        void 0 === n && (n = {});
        try {
          u.prepareOrderCancellation({
            address: e,
            orderCancellation: t,
            instructions: n,
          });
          const r = s(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = c;
    },
    10370: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = n(2793),
        s = a.common.errors.ValidationError;
      function c(e, t) {
        const n = {
          TransactionType: "EscrowCreate",
          Account: e,
          Destination: t.destination,
          Amount: u.xrpToDrops(t.amount),
        };
        if (
          (null != t.condition && (n.Condition = t.condition),
          null != t.allowCancelAfter &&
            (n.CancelAfter = u.iso8601ToRippleTime(t.allowCancelAfter)),
          null != t.allowExecuteAfter &&
            (n.FinishAfter = u.iso8601ToRippleTime(t.allowExecuteAfter)),
          null != t.sourceTag && (n.SourceTag = t.sourceTag),
          null != t.destinationTag && (n.DestinationTag = t.destinationTag),
          null != t.memos && (n.Memos = t.memos.map(a.convertMemo)),
          Boolean(t.allowCancelAfter) &&
            Boolean(t.allowExecuteAfter) &&
            n.CancelAfter <= n.FinishAfter)
        )
          throw new s(
            'prepareEscrowCreation: "allowCancelAfter" must be after "allowExecuteAfter"',
          );
        return n;
      }
      function l(e, t, n) {
        void 0 === n && (n = {});
        try {
          u.validate.prepareEscrowCreation({
            address: e,
            escrowCreation: t,
            instructions: n,
          });
          const r = c(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = l;
    },
    10371: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.validate,
        s = a.common.errors.ValidationError;
      function c(e, t) {
        const n = {
          TransactionType: "EscrowFinish",
          Account: e,
          Owner: t.owner,
          OfferSequence: t.escrowSequence,
        };
        if (Boolean(t.condition) !== Boolean(t.fulfillment))
          throw new s(
            '"condition" and "fulfillment" fields on EscrowFinish must only be specified together.',
          );
        return (
          null != t.condition && (n.Condition = t.condition),
          null != t.fulfillment && (n.Fulfillment = t.fulfillment),
          null != t.memos && (n.Memos = t.memos.map(a.convertMemo)),
          n
        );
      }
      function l(e, t, n) {
        void 0 === n && (n = {});
        try {
          u.prepareEscrowExecution({
            address: e,
            escrowExecution: t,
            instructions: n,
          });
          const r = c(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = l;
    },
    10372: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.validate;
      function s(e, t) {
        const n = {
          TransactionType: "EscrowCancel",
          Account: e,
          Owner: t.owner,
          OfferSequence: t.escrowSequence,
        };
        return (null != t.memos && (n.Memos = t.memos.map(a.convertMemo)), n);
      }
      function c(e, t, n) {
        (void 0 === n && (n = {}),
          u.prepareEscrowCancellation({
            address: e,
            escrowCancellation: t,
            instructions: n,
          }));
        const r = s(e, t);
        return a.prepareTransaction(r, this, n);
      }
      t.default = c;
    },
    10373: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = n(2793);
      function s(e, t) {
        const n = {
          Account: e,
          TransactionType: "PaymentChannelCreate",
          Amount: u.xrpToDrops(t.amount),
          Destination: t.destination,
          SettleDelay: t.settleDelay,
          PublicKey: t.publicKey.toUpperCase(),
        };
        return (
          null != t.cancelAfter &&
            (n.CancelAfter = u.iso8601ToRippleTime(t.cancelAfter)),
          null != t.sourceTag && (n.SourceTag = t.sourceTag),
          null != t.destinationTag && (n.DestinationTag = t.destinationTag),
          n
        );
      }
      function c(e, t, n) {
        void 0 === n && (n = {});
        try {
          u.validate.preparePaymentChannelCreate({
            address: e,
            paymentChannelCreate: t,
            instructions: n,
          });
          const r = s(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = c;
    },
    10374: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = n(2793);
      function s(e, t) {
        const n = {
          Account: e,
          TransactionType: "PaymentChannelFund",
          Channel: t.channel,
          Amount: u.xrpToDrops(t.amount),
        };
        return (
          null != t.expiration &&
            (n.Expiration = u.iso8601ToRippleTime(t.expiration)),
          n
        );
      }
      function c(e, t, n) {
        void 0 === n && (n = {});
        try {
          u.validate.preparePaymentChannelFund({
            address: e,
            paymentChannelFund: t,
            instructions: n,
          });
          const r = s(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = c;
    },
    10375: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.errors.ValidationError,
        s = a.common.txFlags.PaymentChannelClaim,
        c = n(2793);
      function l(e, t) {
        const n = {
          Account: e,
          TransactionType: "PaymentChannelClaim",
          Channel: t.channel,
          Flags: 0,
        };
        if (
          (null != t.balance && (n.Balance = c.xrpToDrops(t.balance)),
          null != t.amount && (n.Amount = c.xrpToDrops(t.amount)),
          Boolean(t.signature) !== Boolean(t.publicKey))
        )
          throw new u(
            '"signature" and "publicKey" fields on PaymentChannelClaim must only be specified together.',
          );
        if (
          (null != t.signature && (n.Signature = t.signature),
          null != t.publicKey && (n.PublicKey = t.publicKey),
          !0 === t.renew && !0 === t.close)
        )
          throw new u(
            '"renew" and "close" flags on PaymentChannelClaim are mutually exclusive',
          );
        return (
          !0 === t.renew && (n.Flags |= s.Renew),
          !0 === t.close && (n.Flags |= s.Close),
          n
        );
      }
      function d(e, t, n) {
        void 0 === n && (n = {});
        try {
          c.validate.preparePaymentChannelClaim({
            address: e,
            paymentChannelClaim: t,
            instructions: n,
          });
          const r = l(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = d;
    },
    10376: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.toRippledAmount,
        s = n(2793);
      function c(e, t) {
        const n = {
          Account: e,
          TransactionType: "CheckCreate",
          Destination: t.destination,
          SendMax: u(t.sendMax),
        };
        return (
          null != t.destinationTag && (n.DestinationTag = t.destinationTag),
          null != t.expiration &&
            (n.Expiration = s.iso8601ToRippleTime(t.expiration)),
          null != t.invoiceID && (n.InvoiceID = t.invoiceID),
          n
        );
      }
      function l(e, t, n) {
        void 0 === n && (n = {});
        try {
          s.validate.prepareCheckCreate({
            address: e,
            checkCreate: t,
            instructions: n,
          });
          const r = c(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = l;
    },
    10377: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(3004),
        i = n(2793);
      function o(e, t) {
        const n = {
          Account: e,
          TransactionType: "CheckCancel",
          CheckID: t.checkID,
        };
        return n;
      }
      function a(e, t, n) {
        void 0 === n && (n = {});
        try {
          i.validate.prepareCheckCancel({
            address: e,
            checkCancel: t,
            instructions: n,
          });
          const a = o(e, t);
          return r.prepareTransaction(a, this, n);
        } catch (a) {
          return Promise.reject(a);
        }
      }
      t.default = a;
    },
    10378: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.errors.ValidationError,
        s = a.common.toRippledAmount,
        c = n(2793);
      function l(e, t) {
        if (t.amount && t.deliverMin)
          throw new u(
            '"amount" and "deliverMin" properties on CheckCash are mutually exclusive',
          );
        const n = {
          Account: e,
          TransactionType: "CheckCash",
          CheckID: t.checkID,
        };
        return (
          null != t.amount && (n.Amount = s(t.amount)),
          null != t.deliverMin && (n.DeliverMin = s(t.deliverMin)),
          n
        );
      }
      function d(e, t, n) {
        void 0 === n && (n = {});
        try {
          c.validate.prepareCheckCash({
            address: e,
            checkCash: t,
            instructions: n,
          });
          const r = l(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = d;
    },
    10379: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  (void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }));
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
                    Object.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return (i(t, e), t);
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const u = o(n(229)),
          s = a(n(800)),
          c = o(n(3004)),
          l = c.common.validate,
          d = c.common.constants.AccountSetFlags,
          f = c.common.constants.AccountFields;
        function m(e, t) {
          const n = Object.keys(t).filter((e) => null != d[e]);
          u.ok(
            n.length <= 1,
            "ERROR: can only set one setting per transaction",
          );
          const r = n[0],
            i = t[r],
            o = d[r];
          null != o && (i ? (e.SetFlag = o) : (e.ClearFlag = o));
        }
        function p(t, n) {
          const r = f;
          for (const i in r) {
            const o = r[i];
            let a = n[o.name];
            void 0 !== a &&
              (null === a && o.hasOwnProperty("defaults") && (a = o.defaults),
              "hex" !== o.encoding ||
                o.length ||
                (a = e.from(a, "ascii").toString("hex").toUpperCase()),
              (t[i] = a));
          }
        }
        function h(e) {
          return new s.default(e).shiftedBy(9).toNumber();
        }
        function _(e) {
          return {
            SignerEntry: { Account: e.address, SignerWeight: e.weight },
          };
        }
        function v(e, t) {
          if (void 0 !== t.regularKey) {
            const n = { TransactionType: "SetRegularKey", Account: e };
            return null === t.regularKey
              ? n
              : Object.assign({}, n, { RegularKey: t.regularKey });
          }
          if (null != t.signers) {
            const n = {
              TransactionType: "SignerListSet",
              Account: e,
              SignerEntries: [],
              SignerQuorum: t.signers.threshold,
            };
            return (
              null != t.signers.weights &&
                (n.SignerEntries = t.signers.weights.map(_)),
              n
            );
          }
          const n = { TransactionType: "AccountSet", Account: e },
            r = Object.assign({}, t);
          return (
            delete r.memos,
            m(n, r),
            p(n, t),
            null != n.TransferRate && (n.TransferRate = h(n.TransferRate)),
            n
          );
        }
        function g(e, t) {
          const n = v(e, t);
          return (null != t.memos && (n.Memos = t.memos.map(c.convertMemo)), n);
        }
        function y(e, t, n) {
          void 0 === n && (n = {});
          try {
            l.prepareSettings({ address: e, settings: t, instructions: n });
            const r = g(e, t);
            return c.prepareTransaction(r, this, n);
          } catch (r) {
            return Promise.reject(r);
          }
        }
        t.default = y;
      }).call(this, n(2).Buffer);
    },
    10380: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(3004)),
        u = a.common.validate,
        s = a.common.errors.ValidationError;
      function c(e, t) {
        if (!t || 0 === t) throw new s("Ticket count must be greater than 0.");
        const n = {
          TransactionType: "TicketCreate",
          Account: e,
          TicketCount: t,
        };
        return n;
      }
      function l(e, t, n) {
        void 0 === n && (n = {});
        try {
          u.prepareTicketCreate({
            address: e,
            ticketCount: t,
            instructions: n,
          });
          const r = c(e, t);
          return a.prepareTransaction(r, this, n);
        } catch (r) {
          return Promise.reject(r);
        }
      }
      t.default = l;
    },
    10381: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = a(n(2794)),
        s = o(n(3004)),
        c = a(n(3602)),
        l = a(n(3939)),
        d = n(3942),
        f = a(n(800)),
        m = n(2793),
        p = s.common.validate;
      function h(e, t, n) {
        const r = n
          ? l.default.encodeForMultisigning(e, n)
          : l.default.encodeForSigning(e);
        return c.default.sign(r, t);
      }
      function _(e, t, n, r) {
        (void 0 === r && (r = { signAs: "" }),
          p.sign({ txJSON: t, keypair: n }));
        const i = JSON.parse(t);
        if (i.TxnSignature || i.Signers)
          throw new s.common.errors.ValidationError(
            'txJSON must not contain "TxnSignature" or "Signers" properties',
          );
        y(e, i.Fee);
        const o = Object.assign({}, i);
        if (((o.SigningPubKey = r.signAs ? "" : n.publicKey), r.signAs)) {
          const e = {
            Account: r.signAs,
            SigningPubKey: n.publicKey,
            TxnSignature: h(o, n.privateKey, r.signAs),
          };
          o.Signers = [{ Signer: e }];
        } else o.TxnSignature = h(o, n.privateKey);
        const a = l.default.encode(o);
        return (
          g(a, i),
          { signedTransaction: a, id: d.computeBinaryTransactionHash(a) }
        );
      }
      function v(e, t) {
        const n = {},
          r = function (e, t, r) {
            const i = Object.prototype.toString.call(e),
              o = Object.prototype.toString.call(t);
            if ("[object Undefined]" !== o)
              if (i === o)
                if ("[object Object]" !== i)
                  "[object Array]" !== i
                    ? "[object Function]" !== i
                      ? e !== t && (n[r] = t)
                      : e.toString() !== t.toString() && (n[r] = t)
                    : u.default.isEqual(e, t) || (n[r] = t);
                else {
                  const i = v(e, t);
                  Object.keys(i).length > 0 && (n[r] = i);
                }
              else n[r] = t;
            else n[r] = null;
          };
        for (const i in e) e.hasOwnProperty(i) && r(e[i], t[i], i);
        for (const i in t)
          t.hasOwnProperty(i) && (e[i] || e[i] === t[i] || (n[i] = t[i]));
        return n;
      }
      function g(e, t) {
        var n;
        const r = l.default.decode(e);
        if (!r.TxnSignature && !r.Signers)
          throw new s.common.errors.ValidationError(
            "Serialized transaction must have a TxnSignature or Signers property",
          );
        if (
          (delete r.TxnSignature,
          delete r.Signers,
          t.SigningPubKey || delete r.SigningPubKey,
          null === (n = t.Memos) ||
            void 0 === n ||
            n.map((e) => {
              var t, n, r;
              return (
                (null === (t = null === e || void 0 === e ? void 0 : e.Memo) ||
                void 0 === t
                  ? void 0
                  : t.MemoData) &&
                  (e.Memo.MemoData = e.Memo.MemoData.toUpperCase()),
                (null === (n = null === e || void 0 === e ? void 0 : e.Memo) ||
                void 0 === n
                  ? void 0
                  : n.MemoType) &&
                  (e.Memo.MemoType = e.Memo.MemoType.toUpperCase()),
                (null === (r = null === e || void 0 === e ? void 0 : e.Memo) ||
                void 0 === r
                  ? void 0
                  : r.MemoFormat) &&
                  (e.Memo.MemoFormat = e.Memo.MemoFormat.toUpperCase()),
                e
              );
            }),
          !u.default.isEqual(r, t))
        ) {
          const e = new s.common.errors.ValidationError(
            "Serialized transaction does not match original txJSON. See `error.data`",
          );
          throw ((e.data = { decoded: r, tx: t, diff: v(t, r) }), e);
        }
      }
      function y(e, t) {
        const n = new f.default(t),
          r = m.xrpToDrops(e._maxFeeXRP);
        if (n.isGreaterThan(r))
          throw new s.common.errors.ValidationError(
            `"Fee" should not exceed "${r}". To use a higher fee, set \`maxFeeXRP\` in the RippleAPI constructor.`,
          );
      }
      function b(e, t, n, r) {
        if ("string" === typeof t)
          return (
            p.sign({ txJSON: e, secret: t }),
            _(this, e, c.default.deriveKeypair(t), n)
          );
        if (!r && !t)
          throw new s.common.errors.ValidationError(
            "sign: Missing secret or keypair.",
          );
        return _(this, e, r || t, n);
      }
      t.default = b;
    },
    10382: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  (void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }));
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
                    Object.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return (i(t, e), t);
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const u = o(n(2794)),
          s = a(n(3939)),
          c = a(n(800)),
          l = n(3603),
          d = n(3124),
          f = n(2793),
          m = n(3942);
        function p(e) {
          const t = JSON.stringify(
            Object.assign(Object.assign({}, e[0]), { Signers: null }),
          );
          if (
            e
              .slice(1)
              .some(
                (e) =>
                  JSON.stringify(
                    Object.assign(Object.assign({}, e), { Signers: null }),
                  ) !== t,
              )
          )
            throw new l.ValidationError(
              "txJSON is not the same for all signedTransactions",
            );
        }
        function h(t) {
          const n = e.from(d.decodeAccountID(t)).toString("hex");
          return new c.default(n, 16);
        }
        function _(e, t) {
          return h(e.Signer.Account).comparedTo(h(t.Signer.Account));
        }
        function v(e) {
          const t = u
            .flatMap(e, (e) => e.Signers)
            .filter((e) => e)
            .sort(_);
          return Object.assign(Object.assign({}, e[0]), { Signers: t });
        }
        function g(e) {
          f.validate.combine({ signedTransactions: e });
          const t = e.map(s.default.decode);
          p(t);
          const n = s.default.encode(v(t));
          return {
            signedTransaction: n,
            id: m.computeBinaryTransactionHash(n),
          };
        }
        t.default = g;
      }).call(this, n(2).Buffer);
    },
    10383: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(3004)),
        s = n(2793);
      function c(e) {
        return e.startsWith("tem");
      }
      function l(e) {
        const t = {
          resultCode: e.engine_result,
          resultMessage: e.engine_result_message,
          engine_result: e.engine_result,
          engine_result_code: e.engine_result_code,
          engine_result_message: e.engine_result_message,
          tx_blob: e.tx_blob,
          tx_json: e.tx_json,
        };
        if (c(e.engine_result))
          throw new u.common.errors.RippledError("Submit failed", t);
        return t;
      }
      function d(e, t) {
        return a(this, void 0, void 0, function* () {
          s.validate.submit({ signedTransaction: e });
          const n = yield this.request(
            "submit",
            Object.assign({ tx_blob: e }, t ? { fail_hard: t } : {}),
          );
          return l(n);
        });
      }
      t.default = d;
    },
    10384: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateAddressAPI = void 0));
      const i = n(3124),
        o = r(n(3602)),
        a = n(2793);
      function u(e) {
        (void 0 === e && (e = {}), a.validate.generateAddress({ options: e }));
        try {
          const t = { algorithm: e.algorithm };
          e.entropy && (t.entropy = Uint8Array.from(e.entropy));
          const n = o.default.generateSeed(t),
            r = o.default.deriveKeypair(n),
            a = o.default.deriveAddress(r.publicKey),
            u = {
              xAddress: i.classicAddressToXAddress(a, !1, e && e.test),
              secret: n,
            };
          return (
            e.includeClassicAddress &&
              ((u.classicAddress = a), (u.address = a)),
            u
          );
        } catch (t) {
          throw new a.errors.UnexpectedError(t.message);
        }
      }
      t.generateAddressAPI = u;
    },
    10385: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          function i(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              try {
                s(r["throw"](e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              e.done ? n(e.value) : i(e.value).then(a, u);
            }
            s((r = r.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(2793),
        o = n(10386);
      function a(e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function* () {
            i.validate.getLedger({ options: e });
            const t = yield this.request("ledger", {
              ledger_hash: e.ledgerHash,
              ledger_index: e.ledgerVersion || "validated",
              expand: e.includeAllData,
              transactions: e.includeTransactions,
              accounts: e.includeState,
            });
            return o.parseLedger(t.ledger);
          })
        );
      }
      t.default = a;
    },
    10386: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseLedger = void 0));
      const u = o(n(2794)),
        s = n(2793),
        c = a(n(5544));
      function l(e, t) {
        const n = Object.assign({}, u.omit(t, "metaData"), {
            meta: t.metaData,
            ledger_index: e,
          }),
          r = c.default(n, !0);
        return (r.outcome.ledgerVersion || (r.outcome.ledgerVersion = e), r);
      }
      function d(e, t) {
        return u.isEmpty(e)
          ? {}
          : "string" === typeof e[0]
            ? { transactionHashes: e }
            : { transactions: e.map(u.partial(l, t)) };
      }
      function f(e) {
        return u.isEmpty(e)
          ? {}
          : "string" === typeof e[0]
            ? { stateHashes: e }
            : { rawState: JSON.stringify(e) };
      }
      function m(e) {
        const t = parseInt(e.ledger_index, 10);
        return s.removeUndefined(
          Object.assign(
            {
              stateHash: e.account_hash,
              closeTime: s.rippleTimeToISO8601(e.close_time),
              closeTimeResolution: e.close_time_resolution,
              closeFlags: e.close_flags,
              ledgerHash: e.ledger_hash,
              ledgerVersion: t,
              parentLedgerHash: e.parent_hash,
              parentCloseTime: s.rippleTimeToISO8601(e.parent_close_time),
              totalDrops: e.total_coins,
              transactionHash: e.transaction_hash,
            },
            d(e.transactions, t),
            f(e.accountState),
          ),
        );
      }
      t.parseLedger = m;
    },
    10387: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getFaucetUrl = t.FaucetNetwork = void 0));
        const i = n(391),
          o = n(2793),
          a = n(5543),
          u = n(3603);
        var s;
        (function (e) {
          ((e["Testnet"] = "faucet.altnet.rippletest.net"),
            (e["Devnet"] = "faucet.devnet.rippletest.net"));
        })((s = t.FaucetNetwork || (t.FaucetNetwork = {})));
        const c = 1,
          l = 20;
        function d(t) {
          return r(this, void 0, void 0, function* () {
            if (!this.isConnected())
              throw new u.RippledError(
                "RippleAPI not connected, cannot call faucet",
              );
            let n,
              s = 0,
              d = p(this);
            if (t && a.isValidAddress(t)) {
              n = new TextEncoder().encode(JSON.stringify({ destination: t }));
              const e = yield f(this, t);
              s = e && !isNaN(+e) ? +e : 0;
            }
            const h = {
              hostname: d,
              port: 443,
              path: "/accounts",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Content-Length": n ? n.length : 0,
              },
            };
            return new Promise((t, a) => {
              const u = i.request(h, (n) => {
                const i = [];
                (n.on("data", (e) => {
                  i.push(e);
                }),
                  n.on("end", () =>
                    r(this, void 0, void 0, function* () {
                      const r = e.concat(i).toString();
                      if (
                        n.headers["content-type"].startsWith("application/json")
                      ) {
                        const e = JSON.parse(r),
                          n = e.account.classicAddress;
                        if (n)
                          try {
                            const r = yield m(this, n, s);
                            r
                              ? t(e)
                              : a(
                                  new o.errors.XRPLFaucetError(
                                    `Unable to fund address with faucet after waiting ${c * l} seconds`,
                                  ),
                                );
                          } catch (u) {
                            a(new o.errors.XRPLFaucetError(u));
                          }
                        else
                          a(
                            new o.errors.XRPLFaucetError(
                              "The faucet account classic address is undefined",
                            ),
                          );
                      } else
                        a({
                          statusCode: n.statusCode,
                          contentType: n.headers["content-type"],
                          body: r,
                        });
                    }),
                  ));
              });
              (u.write(n || ""),
                u.on("error", (e) => {
                  a(e);
                }),
                u.end());
            });
          });
        }
        function f(e, t) {
          return r(this, void 0, void 0, function* () {
            try {
              const n = yield e.getBalances(t),
                r = n.filter((e) => "XRP" === e.currency.toUpperCase());
              return r[0].value;
            } catch (n) {
              return `Unable to retrieve ${t} balance. Error: ${n}`;
            }
          });
        }
        function m(e, t, n) {
          return r(this, void 0, void 0, function* () {
            return new Promise((i, a) => {
              let u = l;
              const s = setInterval(
                () =>
                  r(this, void 0, void 0, function* () {
                    u < 0 ? (clearInterval(s), i(!1)) : u--;
                    try {
                      const r = +(yield f(e, t));
                      r > n && (clearInterval(s), i(!0));
                    } catch (r) {
                      (clearInterval(s),
                        a(
                          new o.errors.XRPLFaucetError(
                            `Unable to check if the address ${t} balance has increased. Error: ${r}`,
                          ),
                        ));
                    }
                  }),
                1e3 * c,
              );
            });
          });
        }
        function p(e) {
          const t = e.connection.getUrl();
          return t.includes("altnet") || t.includes("testnet")
            ? s.Testnet
            : t.includes("devnet")
              ? s.Devnet
              : void 0;
        }
        ((t.getFaucetUrl = p), (t.default = d));
      }).call(this, n(2).Buffer);
    },
    10388: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    2938: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  (void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }));
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
                    Object.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return (i(t, e), t);
            },
          a =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isPartialPayment =
            t.adjustQualityForXRP =
            t.parseTimestamp =
            t.hexToString =
            t.parseMemos =
            t.parseOutcome =
            t.parseQuality =
              void 0));
        const u = a(n(10315)),
          s = a(n(800)),
          c = o(n(2793)),
          l = a(n(3222));
        function d(e, t, n) {
          const r = "XRP" === n ? -6 : 0,
            i = "XRP" === t ? -6 : 0,
            o = r - i;
          return 0 === o ? e : new s.default(e).shiftedBy(o).toString();
        }
        function f(e) {
          if ("number" === typeof e)
            return new s.default(e).shiftedBy(-9).toNumber();
        }
        function m(e) {
          if ("number" === typeof e) return c.rippleTimeToISO8601(e);
        }
        function p(e) {
          "" === e.counterparty && delete e.counterparty;
        }
        function h(e) {
          Object.entries(e).forEach((e) => {
            let [t, n] = e;
            n.forEach(p);
          });
        }
        function _(e) {
          Object.entries(e).forEach((e) => {
            let [t, n] = e;
            n.forEach((e) => {
              Object.entries(e).forEach(p);
            });
          });
        }
        function v(e) {
          return 0 !== (e.Flags & c.txFlags.Payment.PartialPayment);
        }
        function g(e) {
          if (
            "Payment" === e.TransactionType &&
            "tesSUCCESS" === e.meta.TransactionResult &&
            (!e.meta.delivered_amount ||
              "unavailable" !== e.meta.delivered_amount)
          )
            return e.meta.delivered_amount
              ? l.default(e.meta.delivered_amount)
              : e.meta.DeliveredAmount
                ? l.default(e.meta.DeliveredAmount)
                : (e.Amount && !v(e)) || (e.Amount && e.ledger_index > 4594094)
                  ? l.default(e.Amount)
                  : void 0;
        }
        function y(e) {
          const t = e.meta || e.metaData;
          if (!t) return;
          const n = u.default.parseBalanceChanges(t),
            r = u.default.parseOrderbookChanges(t),
            i = u.default.parseChannelChanges(t);
          return (
            h(n),
            _(r),
            c.removeUndefined({
              result: e.meta.TransactionResult,
              timestamp: m(e.date),
              fee: c.dropsToXrp(e.Fee),
              balanceChanges: n,
              orderbookChanges: r,
              channelChanges: i,
              ledgerVersion: e.ledger_index,
              indexInLedger: e.meta.TransactionIndex,
              deliveredAmount: g(e),
            })
          );
        }
        function b(t) {
          return t ? e.from(t, "hex").toString("utf-8") : void 0;
        }
        function O(e) {
          if (Array.isArray(e.Memos) && 0 !== e.Memos.length)
            return e.Memos.map((e) =>
              c.removeUndefined({
                type: e.Memo.parsed_memo_type || b(e.Memo.MemoType),
                format: e.Memo.parsed_memo_format || b(e.Memo.MemoFormat),
                data: e.Memo.parsed_memo_data || b(e.Memo.MemoData),
              }),
            );
        }
        ((t.adjustQualityForXRP = d),
          (t.parseQuality = f),
          (t.parseTimestamp = m),
          (t.isPartialPayment = v),
          (t.parseOutcome = y),
          (t.hexToString = b),
          (t.parseMemos = O));
      }).call(this, n(2).Buffer);
    },
    3004: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  (void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    }));
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
                    Object.hasOwnProperty.call(e, n) &&
                    r(t, e, n);
              return (i(t, e), t);
            },
          a =
            (this && this.__awaiter) ||
            function (e, t, n, r) {
              function i(e) {
                return e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    });
              }
              return new (n || (n = Promise))(function (n, o) {
                function a(e) {
                  try {
                    s(r.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(e) {
                  try {
                    s(r["throw"](e));
                  } catch (t) {
                    o(t);
                  }
                }
                function s(e) {
                  e.done ? n(e.value) : i(e.value).then(a, u);
                }
                s((r = r.apply(e, t || [])).next());
              });
            },
          u =
            (this && this.__importDefault) ||
            function (e) {
              return e && e.__esModule ? e : { default: e };
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getClassicAccountAndTag =
            t.setCanonicalFlag =
            t.common =
            t.prepareTransaction =
            t.convertMemo =
            t.convertStringToHex =
              void 0));
        const s = u(n(800)),
          c = o(n(2793));
        t.common = c;
        const l = n(2793),
          d = n(3603),
          f = n(3124),
          m = c.txFlags,
          p = [
            "Payment",
            "CheckCreate",
            "EscrowCreate",
            "PaymentChannelCreate",
          ];
        function h(e) {
          const t = {
            fee: c.dropsToXrp(e.Fee),
            maxLedgerVersion:
              null == e.LastLedgerSequence ? null : e.LastLedgerSequence,
          };
          return (
            null != e.TicketSequence
              ? (t["ticketSequence"] = e.TicketSequence)
              : (t["sequence"] = e.Sequence),
            { txJSON: JSON.stringify(e), instructions: t }
          );
        }
        function _(e) {
          ((e.Flags |= m.Universal.FullyCanonicalSig),
            (e.Flags = e.Flags >>> 0));
        }
        function v(e, t, n) {
          return (
            void 0 === n && (n = 0),
            new s.default(e).times(t).plus(n).toString()
          );
        }
        function g(e, t) {
          if (f.isValidXAddress(e)) {
            const n = f.xAddressToClassicAddress(e);
            if (null != t && n.tag !== t)
              throw new d.ValidationError(
                "address includes a tag that does not match the tag specified in the transaction",
              );
            return { classicAccount: n.classicAddress, tag: n.tag };
          }
          return { classicAccount: e, tag: t };
        }
        function y(t, n, r) {
          if (
            (c.validate.instructions(r),
            c.validate.tx_json(t),
            null != r.sequence && 0 === r.sequence)
          )
            return Promise.reject(
              new d.ValidationError("`sequence` cannot be 0"),
            );
          const i = [
              "maxLedgerVersion",
              "maxLedgerVersionOffset",
              "fee",
              "sequence",
              "ticketSequence",
            ],
            o = i.filter((e) => t[e]);
          if (o.length)
            return Promise.reject(
              new d.ValidationError(
                'txJSON additionalProperty "' +
                  o[0] +
                  '" exists in instance when not allowed',
              ),
            );
          const u = Object.assign({}, t);
          0 === t["SignerQuorum"] && delete u.SignerEntries;
          const { classicAccount: f, tag: m } = g(t.Account);
          if (((u.Account = f), null != m)) {
            if (t.SourceTag && t.SourceTag !== m)
              return Promise.reject(
                new d.ValidationError(
                  "The `SourceTag`, if present, must match the tag of the `Account` X-address",
                ),
              );
            m && (u.SourceTag = m);
          }
          if ("string" === typeof t.Destination) {
            const { classicAccount: e, tag: n } = g(t.Destination);
            if (
              ((u.Destination = e), null != n && p.includes(t.TransactionType))
            ) {
              if (t.DestinationTag && t.DestinationTag !== n)
                return Promise.reject(
                  new d.ValidationError(
                    "The Payment `DestinationTag`, if present, must match the tag of the `Destination` X-address",
                  ),
                );
              n && (u.DestinationTag = n);
            }
          }
          function y(e) {
            const n = t[e];
            if ("string" === typeof n) {
              const { classicAccount: t } = g(n);
              u[e] = t;
            }
          }
          function b(e) {
            const n = t[e];
            "number" === typeof n ||
              n instanceof Array ||
              null == n ||
              (u[e] = l.toRippledAmount(n));
          }
          function O() {
            if (u.LastLedgerSequence && r.maxLedgerVersion)
              return Promise.reject(
                new d.ValidationError(
                  "`LastLedgerSequence` in txJSON and `maxLedgerVersion` in `instructions` cannot both be set",
                ),
              );
            if (u.LastLedgerSequence && r.maxLedgerVersionOffset)
              return Promise.reject(
                new d.ValidationError(
                  "`LastLedgerSequence` in txJSON and `maxLedgerVersionOffset` in `instructions` cannot both be set",
                ),
              );
            if (u.LastLedgerSequence) return Promise.resolve();
            if (void 0 !== r.maxLedgerVersion)
              return (
                null !== r.maxLedgerVersion &&
                  (u.LastLedgerSequence = r.maxLedgerVersion),
                Promise.resolve()
              );
            const e =
              null != r.maxLedgerVersionOffset ? r.maxLedgerVersionOffset : 3;
            return n.connection.getLedgerVersion().then((t) => {
              u.LastLedgerSequence = t + e;
            });
          }
          function P() {
            if (u.Fee && r.fee)
              return Promise.reject(
                new d.ValidationError(
                  "`Fee` in txJSON and `fee` in `instructions` cannot both be set",
                ),
              );
            if (u.Fee) return Promise.resolve();
            const t = null == r.signersCount ? 1 : r.signersCount + 1;
            if (null != r.fee) {
              const e = new s.default(r.fee);
              return e.isGreaterThan(n._maxFeeXRP)
                ? Promise.reject(
                    new d.ValidationError(
                      `Fee of ${e.toString(10)} XRP exceeds max of ${n._maxFeeXRP} XRP. To use this fee, increase \`maxFeeXRP\` in the RippleAPI constructor.`,
                    ),
                  )
                : ((u.Fee = v(c.xrpToDrops(r.fee), t)), Promise.resolve());
            }
            const i = n._feeCushion;
            return n.getFee(i).then((o) =>
              n.connection.getFeeRef().then((a) => {
                const l =
                    "EscrowFinish" !== u.TransactionType ||
                    null == u.Fulfillment
                      ? 0
                      : i *
                        a *
                        (32 +
                          Math.floor(e.from(u.Fulfillment, "hex").length / 16)),
                  d = c.xrpToDrops(o),
                  f = r.maxFee
                    ? s.default.min(n._maxFeeXRP, r.maxFee)
                    : n._maxFeeXRP,
                  m = c.xrpToDrops(f),
                  p = v(d, t, l);
                u.Fee = s.default.min(p, m).toString(10);
              }),
            );
          }
          function j() {
            return a(this, void 0, void 0, function* () {
              if (null != r.sequence)
                return null == u.Sequence || r.sequence === u.Sequence
                  ? ((u.Sequence = r.sequence), Promise.resolve())
                  : Promise.reject(
                      new d.ValidationError(
                        "`Sequence` in txJSON must match `sequence` in `instructions`",
                      ),
                    );
              if (null != u.Sequence) return Promise.resolve();
              if (null != r.ticketSequence)
                return (
                  (u.Sequence = 0),
                  (u.TicketSequence = r.ticketSequence),
                  Promise.resolve()
                );
              try {
                const e = yield n.request("account_info", {
                  account: f,
                  ledger_index: "current",
                });
                return (
                  (u.Sequence = e.account_data.Sequence),
                  Promise.resolve()
                );
              } catch (e) {
                return Promise.reject(e);
              }
            });
          }
          return (
            y("Authorize"),
            y("Unauthorize"),
            y("Owner"),
            y("RegularKey"),
            b("Amount"),
            b("SendMax"),
            b("DeliverMin"),
            b("TakerPays"),
            b("TakerGets"),
            b("LimitAmount"),
            _(u),
            Promise.all([O(), P(), j()]).then(() => h(u))
          );
        }
        function b(t) {
          return e.from(t, "utf8").toString("hex").toUpperCase();
        }
        function O(e) {
          return {
            Memo: c.removeUndefined({
              MemoData: e.data ? b(e.data) : void 0,
              MemoType: e.type ? b(e.type) : void 0,
              MemoFormat: e.format ? b(e.format) : void 0,
            }),
          };
        }
        ((t.setCanonicalFlag = _),
          (t.getClassicAccountAndTag = g),
          (t.prepareTransaction = y),
          (t.convertStringToHex = b),
          (t.convertMemo = O));
      }).call(this, n(2).Buffer);
    },
    3222: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(2793));
      function u(e) {
        return "string" === typeof e
          ? { currency: "XRP", value: a.dropsToXrp(e) }
          : { currency: e.currency, value: e.value, counterparty: e.issuer };
      }
      t.default = u;
    },
    3604: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.common =
          t.clamp =
          t.isPendingLedgerVersion =
          t.hasCompleteLedgerRange =
          t.getRecursive =
          t.renameCounterpartyToIssuerInOrder =
          t.renameCounterpartyToIssuer =
          t.compareTransactions =
          t.ensureLedgerVersion =
          t.getXRPBalance =
            void 0));
      const a = o(n(2794)),
        u = o(n(229)),
        s = o(n(2793));
      function c(e, t, n) {
        return (
          u.ok(t <= n, "Illegal clamp bounds"),
          Math.min(Math.max(e, t), n)
        );
      }
      function l(e, t, n) {
        const r = { command: "account_info", account: t, ledger_index: n };
        return e.request(r).then((e) => s.dropsToXrp(e.account_data.Balance));
      }
      function d(e, t, n) {
        return e(t, n).then((t) => {
          const r = n - t.results.length;
          return r > 0 && null != t.marker
            ? d(e, t.marker, r).then((e) => t.results.concat(e))
            : t.results.slice(0, n);
        });
      }
      function f(e, t) {
        return d(e, void 0, t || 1 / 0);
      }
      function m(e) {
        const t =
            null != e.counterparty
              ? e.counterparty
              : null != e.issuer
                ? e.issuer
                : void 0,
          n = Object.assign({}, e, { issuer: t });
        return (delete n.counterparty, n);
      }
      function p(e) {
        const t = m(e.taker_gets),
          n = m(e.taker_pays),
          r = { taker_gets: t, taker_pays: n };
        return Object.assign(
          {},
          e,
          a.omitBy(r, (e) => null == e),
        );
      }
      function h(e) {
        return 0 === e ? 0 : e > 0 ? 1 : -1;
      }
      function _(e, t) {
        return e.outcome && t.outcome
          ? e.outcome.ledgerVersion === t.outcome.ledgerVersion
            ? h(e.outcome.indexInLedger - t.outcome.indexInLedger)
            : e.outcome.ledgerVersion < t.outcome.ledgerVersion
              ? -1
              : 1
          : 0;
      }
      function v(e, t, n) {
        const r = 32570;
        return e.hasLedgerVersions(t || r, n);
      }
      function g(e, t) {
        return e.getLedgerVersion().then((e) => e < (t || 0));
      }
      function y(e) {
        return Boolean(e) && null != e.ledgerVersion && null !== e.ledgerVersion
          ? Promise.resolve(e)
          : this.getLedgerVersion().then((t) =>
              Object.assign({}, e, { ledgerVersion: t }),
            );
      }
      ((t.common = s),
        (t.clamp = c),
        (t.getXRPBalance = l),
        (t.getRecursive = f),
        (t.renameCounterpartyToIssuer = m),
        (t.renameCounterpartyToIssuerInOrder = p),
        (t.compareTransactions = _),
        (t.hasCompleteLedgerRange = v),
        (t.isPendingLedgerVersion = g),
        (t.ensureLedgerVersion = y));
    },
    5544: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(2938),
        o = n(2793),
        a = r(n(10319)),
        u = r(n(10320)),
        s = r(n(10321)),
        c = r(n(10322)),
        l = r(n(10323)),
        d = r(n(10324)),
        f = r(n(10325)),
        m = r(n(10326)),
        p = r(n(10327)),
        h = r(n(10328)),
        _ = r(n(10329)),
        v = r(n(10330)),
        g = r(n(10331)),
        y = r(n(10332)),
        b = r(n(10333)),
        O = r(n(10334)),
        P = r(n(10335)),
        j = r(n(10336)),
        T = r(n(10337));
      function w(e) {
        const t = {
          AccountSet: "settings",
          AccountDelete: "accountDelete",
          CheckCancel: "checkCancel",
          CheckCash: "checkCash",
          CheckCreate: "checkCreate",
          DepositPreauth: "depositPreauth",
          EscrowCancel: "escrowCancellation",
          EscrowCreate: "escrowCreation",
          EscrowFinish: "escrowExecution",
          OfferCancel: "orderCancellation",
          OfferCreate: "order",
          Payment: "payment",
          PaymentChannelClaim: "paymentChannelClaim",
          PaymentChannelCreate: "paymentChannelCreate",
          PaymentChannelFund: "paymentChannelFund",
          SetRegularKey: "settings",
          SignerListSet: "settings",
          TicketCreate: "ticketCreate",
          TrustSet: "trustline",
          EnableAmendment: "amendment",
          SetFee: "feeUpdate",
        };
        return t[e] || null;
      }
      function M(e, t) {
        const n = w(e.TransactionType),
          r = {
            settings: a.default,
            accountDelete: u.default,
            checkCancel: s.default,
            checkCash: c.default,
            checkCreate: l.default,
            depositPreauth: d.default,
            escrowCancellation: f.default,
            escrowCreation: m.default,
            escrowExecution: p.default,
            orderCancellation: h.default,
            order: _.default,
            payment: v.default,
            paymentChannelClaim: g.default,
            paymentChannelCreate: y.default,
            paymentChannelFund: b.default,
            ticketCreate: O.default,
            trustline: P.default,
            amendment: j.default,
            feeUpdate: T.default,
          },
          M = r[n],
          S = M
            ? M(e)
            : {
                UNAVAILABLE: "Unrecognized transaction type.",
                SEE_RAW_TRANSACTION:
                  "Since this type is unrecognized, `rawTransaction` is included in this response.",
              };
        M || (t = !0);
        const x = i.parseOutcome(e);
        return o.removeUndefined({
          type: n,
          address: e.Account,
          sequence: e.Sequence,
          id: e.hash,
          specification: o.removeUndefined(S),
          outcome: x ? o.removeUndefined(x) : void 0,
          rawTransaction: t ? JSON.stringify(e) : void 0,
        });
      }
      t.default = M;
    },
    6629: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            function i(e) {
              return e instanceof n
                ? e
                : new n(function (t) {
                    t(e);
                  });
            }
            return new (n || (n = Promise))(function (n, o) {
              function a(e) {
                try {
                  s(r.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                try {
                  s(r["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function s(e) {
                e.done ? n(e.value) : i(e.value).then(a, u);
              }
              s((r = r.apply(e, t || [])).next());
            });
          },
        u =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = o(n(3604)),
        c = u(n(5544)),
        l = n(2793);
      function d(e, t) {
        if (t.date) return Promise.resolve(t);
        const n = t.ledger_index || t.LedgerSequence;
        if (!n)
          return new Promise(() => {
            const e = new l.errors.NotFoundError(
              "Transaction has not been validated yet; try again later",
            );
            throw (
              (e.data = {
                details: "(ledger_index and LedgerSequence not found in tx)",
              }),
              e
            );
          });
        const r = { command: "ledger", ledger_index: n };
        return e
          .request(r)
          .then((e) => {
            if ("number" === typeof e.ledger.close_time)
              return Object.assign({ date: e.ledger.close_time }, t);
            throw new l.errors.UnexpectedError("Ledger missing close_time");
          })
          .catch((e) => {
            if (e instanceof l.errors.UnexpectedError) throw e;
            throw new l.errors.NotFoundError("Transaction ledger not found");
          });
      }
      function f(e, t) {
        return (
          (!t.minLedgerVersion || e.ledger_index >= t.minLedgerVersion) &&
          (!t.maxLedgerVersion || e.ledger_index <= t.maxLedgerVersion)
        );
      }
      function m(e, t, n) {
        let r = !1;
        ((n.data && "txnNotFound" === n.data.error) ||
          "txnNotFound" === n.message) &&
          (r = !0);
        const i = r ? new l.errors.NotFoundError("Transaction not found") : n;
        return i instanceof l.errors.NotFoundError
          ? s
              .hasCompleteLedgerRange(e, t.minLedgerVersion, t.maxLedgerVersion)
              .then((n) =>
                n
                  ? i
                  : s
                      .isPendingLedgerVersion(e, t.maxLedgerVersion)
                      .then((e) =>
                        e
                          ? new l.errors.PendingLedgerVersionError()
                          : new l.errors.MissingLedgerHistoryError(),
                      ),
              )
          : Promise.resolve(i);
      }
      function p(e, t) {
        if (!0 !== t.validated || !f(t, e))
          throw new l.errors.NotFoundError("Transaction not found");
        return c.default(t, e.includeRawTransaction);
      }
      function h(e, t) {
        return (
          void 0 === t && (t = {}),
          a(this, void 0, void 0, function* () {
            l.validate.getTransaction({ id: e, options: t });
            const n = yield s.ensureLedgerVersion.call(this, t);
            try {
              const t = yield this.request("tx", {
                  transaction: e,
                  binary: !1,
                }),
                r = yield d(this.connection, t);
              return p(n, r);
            } catch (r) {
              throw yield m(this.connection, n, r);
            }
          })
        );
      }
      t.default = h;
    },
    6631: function (e, t, n) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(n(800)),
          o = n(2793),
          a = o.constants.AccountFields;
        function u(t, n) {
          return "hex" !== t.encoding || t.length
            ? t.shift
              ? new i.default(n).shiftedBy(-t.shift).toNumber()
              : n
            : e.from(n, "hex").toString("ascii");
        }
        function s(e) {
          const t = {};
          for (const n in a) {
            const r = e[n];
            if (null != r) {
              const e = a[n];
              t[e.name] = u(e, r);
            }
          }
          return (
            e.RegularKey && (t.regularKey = e.RegularKey),
            e.signer_lists &&
              1 === e.signer_lists.length &&
              ((t.signers = {}),
              e.signer_lists[0].SignerQuorum &&
                (t.signers.threshold = e.signer_lists[0].SignerQuorum),
              e.signer_lists[0].SignerEntries &&
                (t.signers.weights = e.signer_lists[0].SignerEntries.map(
                  (e) => ({
                    address: e.SignerEntry.Account,
                    weight: e.SignerEntry.SignerWeight,
                  }),
                ))),
            t
          );
        }
        t.default = s;
      }).call(this, n(2).Buffer);
    },
    6640: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.trustlineFlags = t.orderFlags = void 0));
      const r = { Passive: 65536, Sell: 131072 };
      t.orderFlags = r;
      const i = {
        LowReserve: 65536,
        HighReserve: 131072,
        LowAuth: 262144,
        HighAuth: 524288,
        LowNoRipple: 1048576,
        HighNoRipple: 2097152,
        LowFreeze: 4194304,
        HighFreeze: 8388608,
      };
      t.trustlineFlags = i;
    },
    6641: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.verifyPaymentChannelClaim =
          t.signPaymentChannelClaim =
          t.deriveXAddress =
          t.deriveAddress =
          t.deriveKeypair =
          t.generateXAddress =
          t.generateAddress =
          t.computePaymentChannelHash =
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
          t.isValidSecret =
          t.iso8601ToRippleTime =
          t.rippleTimeToISO8601 =
          t.removeUndefined =
          t.convertKeysFromSnakeCaseToCamelCase =
          t.toRippledAmount =
          t.xrpToDrops =
          t.dropsToXrp =
          t.computeLedgerHeaderHash =
            void 0));
      const i = n(6642);
      (Object.defineProperty(t, "deriveKeypair", {
        enumerable: !0,
        get: function () {
          return i.deriveKeypair;
        },
      }),
        Object.defineProperty(t, "deriveAddress", {
          enumerable: !0,
          get: function () {
            return i.deriveAddress;
          },
        }),
        Object.defineProperty(t, "deriveXAddress", {
          enumerable: !0,
          get: function () {
            return i.deriveXAddress;
          },
        }));
      const o = r(n(6643));
      t.computeLedgerHeaderHash = o.default;
      const a = r(n(6644));
      t.signPaymentChannelClaim = a.default;
      const u = r(n(6645));
      t.verifyPaymentChannelClaim = u.default;
      const s = n(4788);
      (Object.defineProperty(t, "dropsToXrp", {
        enumerable: !0,
        get: function () {
          return s.dropsToXrp;
        },
      }),
        Object.defineProperty(t, "xrpToDrops", {
          enumerable: !0,
          get: function () {
            return s.xrpToDrops;
          },
        }),
        Object.defineProperty(t, "toRippledAmount", {
          enumerable: !0,
          get: function () {
            return s.toRippledAmount;
          },
        }),
        Object.defineProperty(t, "convertKeysFromSnakeCaseToCamelCase", {
          enumerable: !0,
          get: function () {
            return s.convertKeysFromSnakeCaseToCamelCase;
          },
        }),
        Object.defineProperty(t, "removeUndefined", {
          enumerable: !0,
          get: function () {
            return s.removeUndefined;
          },
        }),
        Object.defineProperty(t, "rippleTimeToISO8601", {
          enumerable: !0,
          get: function () {
            return s.rippleTimeToISO8601;
          },
        }),
        Object.defineProperty(t, "iso8601ToRippleTime", {
          enumerable: !0,
          get: function () {
            return s.iso8601ToRippleTime;
          },
        }),
        Object.defineProperty(t, "isValidSecret", {
          enumerable: !0,
          get: function () {
            return s.isValidSecret;
          },
        }));
      const c = n(3942);
      (Object.defineProperty(t, "computeBinaryTransactionHash", {
        enumerable: !0,
        get: function () {
          return c.computeBinaryTransactionHash;
        },
      }),
        Object.defineProperty(t, "computeTransactionHash", {
          enumerable: !0,
          get: function () {
            return c.computeTransactionHash;
          },
        }),
        Object.defineProperty(t, "computeBinaryTransactionSigningHash", {
          enumerable: !0,
          get: function () {
            return c.computeBinaryTransactionSigningHash;
          },
        }),
        Object.defineProperty(t, "computeAccountLedgerObjectID", {
          enumerable: !0,
          get: function () {
            return c.computeAccountLedgerObjectID;
          },
        }),
        Object.defineProperty(t, "computeSignerListLedgerObjectID", {
          enumerable: !0,
          get: function () {
            return c.computeSignerListLedgerObjectID;
          },
        }),
        Object.defineProperty(t, "computeOrderID", {
          enumerable: !0,
          get: function () {
            return c.computeOrderID;
          },
        }),
        Object.defineProperty(t, "computeTrustlineHash", {
          enumerable: !0,
          get: function () {
            return c.computeTrustlineHash;
          },
        }),
        Object.defineProperty(t, "computeTransactionTreeHash", {
          enumerable: !0,
          get: function () {
            return c.computeTransactionTreeHash;
          },
        }),
        Object.defineProperty(t, "computeStateTreeHash", {
          enumerable: !0,
          get: function () {
            return c.computeStateTreeHash;
          },
        }),
        Object.defineProperty(t, "computeLedgerHash", {
          enumerable: !0,
          get: function () {
            return c.computeLedgerHash;
          },
        }),
        Object.defineProperty(t, "computeEscrowHash", {
          enumerable: !0,
          get: function () {
            return c.computeEscrowHash;
          },
        }),
        Object.defineProperty(t, "computePaymentChannelHash", {
          enumerable: !0,
          get: function () {
            return c.computePaymentChannelHash;
          },
        }));
      const l = n(10384);
      Object.defineProperty(t, "generateXAddress", {
        enumerable: !0,
        get: function () {
          return l.generateAddressAPI;
        },
      });
      const d = function (e) {
        return (
          void 0 === e && (e = {}),
          l.generateAddressAPI(
            Object.assign(Object.assign({}, e), { includeClassicAddress: !0 }),
          )
        );
      };
      t.generateAddress = d;
    },
    6642: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deriveXAddress = t.deriveAddress = t.deriveKeypair = void 0));
      const r = n(3602);
      (Object.defineProperty(t, "deriveKeypair", {
        enumerable: !0,
        get: function () {
          return r.deriveKeypair;
        },
      }),
        Object.defineProperty(t, "deriveAddress", {
          enumerable: !0,
          get: function () {
            return r.deriveAddress;
          },
        }));
      const i = n(3124);
      function o(e) {
        const t = r.deriveAddress(e.publicKey);
        return i.classicAddressToXAddress(t, e.tag, e.test);
      }
      t.deriveXAddress = o;
    },
    6643: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(n(2794)),
        u = n(3942),
        s = o(n(2793));
      function c(e) {
        return {
          account_hash: e.stateHash,
          close_time: s.iso8601ToRippleTime(e.closeTime),
          close_time_resolution: e.closeTimeResolution,
          close_flags: e.closeFlags,
          hash: e.ledgerHash,
          ledger_hash: e.ledgerHash,
          ledger_index: e.ledgerVersion.toString(),
          parent_hash: e.parentLedgerHash,
          parent_close_time: s.iso8601ToRippleTime(e.parentCloseTime),
          total_coins: e.totalDrops,
          transaction_hash: e.transactionHash,
        };
      }
      function l(e) {
        const t = c(e);
        return u.computeLedgerHash(t);
      }
      function d(e, t) {
        let n;
        if (e.rawTransactions) n = JSON.parse(e.rawTransactions);
        else {
          if (!e.transactions) {
            if (t.computeTreeHashes)
              throw new s.errors.ValidationError(
                "transactions property is missing from the ledger",
              );
            return e.transactionHash;
          }
          try {
            n = e.transactions.map((e) => JSON.parse(e.rawTransaction));
          } catch (o) {
            if (
              "SyntaxError: Unexpected token u in JSON at position 0" ===
              o.toString()
            )
              throw new s.errors.ValidationError(
                "ledger is missing raw transactions",
              );
          }
        }
        const r = n.map((e) => {
            const t = Object.assign({}, a.omit(e, "tx"), e.tx || {}),
              n = Object.assign(
                {},
                a.omit(t, "meta"),
                e.meta ? { metaData: e.meta } : {},
              );
            return n;
          }),
          i = u.computeTransactionTreeHash(r);
        if (null != e.transactionHash && e.transactionHash !== i)
          throw new s.errors.ValidationError(
            "transactionHash in header does not match computed hash of transactions",
            {
              transactionHashInHeader: e.transactionHash,
              computedHashOfTransactions: i,
            },
          );
        return i;
      }
      function f(e, t) {
        if (null == e.rawState) {
          if (t.computeTreeHashes)
            throw new s.errors.ValidationError(
              "rawState property is missing from the ledger",
            );
          return e.stateHash;
        }
        const n = JSON.parse(e.rawState),
          r = u.computeStateTreeHash(n);
        if (null != e.stateHash && e.stateHash !== r)
          throw new s.errors.ValidationError(
            "stateHash in header does not match computed hash of state",
          );
        return r;
      }
      function m(e, t) {
        void 0 === t && (t = {});
        const n = { transactionHash: d(e, t), stateHash: f(e, t) };
        return l(Object.assign({}, e, n));
      }
      t.default = m;
    },
    6644: function (e, t, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, r) {
                (void 0 === r && (r = n),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }));
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
                  Object.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return (i(t, e), t);
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const u = o(n(2793)),
        s = a(n(3602)),
        c = a(n(3939)),
        { validate: l, xrpToDrops: d } = u;
      function f(e, t, n) {
        l.signPaymentChannelClaim({ channel: e, amount: t, privateKey: n });
        const r = c.default.encodeForSigningClaim({ channel: e, amount: d(t) });
        return s.default.sign(r, n);
      }
      t.default = f;
    },
    6645: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(n(3602)),
        o = r(n(3939)),
        a = n(2793);
      function u(e, t, n, r) {
        a.validate.verifyPaymentChannelClaim({
          channel: e,
          amount: t,
          signature: n,
          publicKey: r,
        });
        const u = o.default.encodeForSigningClaim({
          channel: e,
          amount: a.xrpToDrops(t),
        });
        return i.default.verify(u, n, r);
      }
      t.default = u;
    },
  },
]);
