(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [163],
  {
    10499: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function s(e) {
                try {
                  u(n.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function a(e) {
                try {
                  u(n["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                e.done
                  ? i(e.value)
                  : new r(function (t) {
                      t(e.value);
                    }).then(s, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(e) {
              return function (t) {
                return u([e, t]);
              };
            }
            function u(o) {
              if (r) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n["return"]
                          : o[0]
                            ? n["throw"] || ((i = n["return"]) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (n = o[1]), (o = [0]));
                      continue;
                    case 7:
                      ((o = s.ops.pop()), s.trys.pop());
                      continue;
                    default:
                      if (
                        ((i = s.trys),
                        !(i = i.length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        ((s.label = i[1]), (i = o));
                        break;
                      }
                      if (i && s.label < i[2]) {
                        ((s.label = i[2]), s.ops.push(o));
                        break;
                      }
                      (i[2] && s.ops.pop(), s.trys.pop());
                      continue;
                  }
                  o = t.call(e, s);
                } catch (a) {
                  ((o = [6, a]), (n = 0));
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          };
      function o(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = r(5573);
      (o(r(6763)), o(r(3611)));
      var a = r(5622);
      ((t.isValidAddress = a.isValidAddress),
        o(r(6801)),
        o(r(6764)),
        o(r(6765)),
        o(r(5573)));
      var u = r(6801);
      function c() {
        var e = this;
        return Promise.all(
          u.adapterPriorityList.map(function (t) {
            return n(e, void 0, void 0, function () {
              var e, r;
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return ((e = l(t)), [4, e.isAvailable()]);
                  case 1:
                    return ((r = n.sent()), [2, r ? e : null]);
                }
              });
            });
          }),
        ).then(function (e) {
          return e.filter(Boolean);
        });
      }
      function l(e) {
        return s.find({ type: e }, u.adapterList);
      }
      ((t.getAvailableList = c), (t.getAdapterByType = l));
    },
    10762: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(5618),
        o = r(3069),
        s = function (e, t) {
          return Object.assign({}, e, { fee: t(e.fee) });
        };
      function a(e, r) {
        if (o.isOrder(e)) return t.order(e, r);
        switch (e.type) {
          case i.TYPES.ISSUE:
            return t.issue(e, r);
          case i.TYPES.TRANSFER:
            return t.transfer(e, r);
          case i.TYPES.REISSUE:
            return t.reissue(e, r);
          case i.TYPES.BURN:
            return t.burn(e, r);
          case i.TYPES.EXCHANGE:
            return t.exchange(e, r);
          case i.TYPES.LEASE:
            return t.lease(e, r);
          case i.TYPES.CANCEL_LEASE:
            return t.cancelLease(e, r);
          case i.TYPES.ALIAS:
            return t.alias(e, r);
          case i.TYPES.MASS_TRANSFER:
            return t.massTransfer(e, r);
          case i.TYPES.DATA:
            return t.data(e, r);
          case i.TYPES.SET_SCRIPT:
            return t.setScript(e, r);
          case i.TYPES.SPONSORSHIP:
            return t.sponsorship(e, r);
          case i.TYPES.SET_ASSET_SCRIPT:
            return t.setAssetScript(e, r);
          case i.TYPES.INVOKE_SCRIPT:
            return t.invokeScript(e, r);
          default:
            throw new Error("Unknown transaction type!");
        }
      }
      ((t.issue = function (e, t) {
        return n({}, s(e, t), { quantity: t(e.quantity) });
      }),
        (t.transfer = function (e, t) {
          return n({}, s(e, t), { amount: t(e.amount) });
        }),
        (t.reissue = function (e, t) {
          return n({}, s(e, t), { quantity: t(e.quantity) });
        }),
        (t.burn = function (e, t) {
          return n({}, s(e, t), { quantity: t(e.quantity) });
        }),
        (t.order = function (e, t) {
          return n({}, e, {
            price: t(e.price),
            amount: t(e.amount),
            matcherFee: t(e.matcherFee),
          });
        }),
        (t.exchange = function (e, r) {
          return n({}, s(e, r), {
            buyOrder: t.order(e.buyOrder, r),
            sellOrder: t.order(e.sellOrder, r),
            amount: r(e.amount),
            price: r(e.price),
            sellMatcherFee: r(e.sellMatcherFee),
            buyMatcherFee: r(e.buyMatcherFee),
          });
        }),
        (t.lease = function (e, t) {
          return n({}, s(e, t), { amount: t(e.amount) });
        }),
        (t.cancelLease = function (e, t) {
          return s(e, t);
        }),
        (t.alias = function (e, t) {
          return s(e, t);
        }),
        (t.massTransfer = function (e, t) {
          return n({}, s(e, t), {
            transfers: e.transfers.map(function (e) {
              return n({}, e, { amount: t(e.amount) });
            }),
          });
        }),
        (t.data = function (e, t) {
          return n({}, s(e, t), {
            data: e.data.map(function (e) {
              switch (e.type) {
                case "integer":
                  return n({}, e, { value: t(e.value) });
                default:
                  return e;
              }
            }),
          });
        }),
        (t.setScript = function (e, t) {
          return s(e, t);
        }),
        (t.sponsorship = function (e, t) {
          return n({}, s(e, t), {
            minSponsoredAssetFee: t(e.minSponsoredAssetFee),
          });
        }),
        (t.invokeScript = function (e, t) {
          return n({}, s(e, t), {
            payment:
              e.payment &&
              e.payment.map(function (e) {
                return n({}, e, { amount: t(e.amount) });
              }),
            call: n({}, e.call, {
              args:
                e.call &&
                e.call.args.map(function (e) {
                  return n({}, e, {
                    value: "integer" === e.type ? t(e.value) : e.value,
                  });
                }),
            }),
          });
        }),
        (t.setAssetScript = function (e, t) {
          return s(e, t);
        }),
        (t.convert = a));
    },
    10763: function (e, t, r) {
      "use strict";
      function n(e) {
        return e && "object" === typeof e
          ? "toCoins" in e
            ? e.asset.id
            : "assetId" in e
              ? e.assetId
              : null
          : null;
      }
      function i(e) {
        var t;
        return null == e
          ? null
          : ((t =
              "object" === typeof e
                ? "toCoins" in e
                  ? e.toCoins()
                  : "toFixed" in e
                    ? e.toFixed()
                    : String(e.coins)
                : String(e)),
            t);
      }
      function o(e) {
        return "orderType" in e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAssetId = n),
        (t.getCoins = i),
        (t.curry = function (e) {
          function t(r) {
            for (var n = [], i = 1; i < arguments.length; i++)
              n[i - 1] = arguments[i];
            return r.length <= n.length
              ? r.apply(void 0, n)
              : function () {
                  for (var r = [], i = 0; i < arguments.length; i++)
                    r[i] = arguments[i];
                  return t.apply(void 0, [e].concat(n.concat(r)));
                };
          }
          return function () {
            for (var r = [], n = 0; n < arguments.length; n++)
              r[n] = arguments[n];
            return t.apply(void 0, [e].concat(r));
          };
        }),
        (t.ifElse = function (e, t, r) {
          return function (n) {
            return e(n) ? t(n) : r(n);
          };
        }),
        (t.has = t.curry(function (e, t) {
          return Object.prototype.hasOwnProperty.call(t, e);
        })),
        (t.emptyError = function (e) {
          return function (t) {
            if (null == t) throw new Error(e);
            return t;
          };
        }),
        (t.isOrder = o),
        (t.length = function (e) {
          return e.length;
        }),
        (t.lt = t.curry(function (e, t) {
          return e < t;
        })),
        (t.gt = t.curry(function (e, t) {
          return e > t;
        })),
        (t.lte = t.curry(function (e, t) {
          return e <= t;
        })),
        (t.gte = t.curry(function (e, t) {
          return e >= t;
        })),
        (t.head = function (e) {
          return e[0];
        }),
        (t.defaultTo = function (e) {
          return function (t) {
            return null == t ? e : t;
          };
        }),
        (t.map = t.curry(function (e, t) {
          return t.map(e);
        })),
        (t.prop = t.curry(function (e, t) {
          return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
        })),
        (t.pipe = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return function (t) {
            return e.reduce(function (e, t) {
              return t(e);
            }, t);
          };
        }));
    },
    10764: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10765),
        i = r(10766),
        o = r(10767),
        s = r(10768),
        a = r(10770),
        u = r(10771),
        c = r(10772),
        l = r(10773),
        p = r(10774),
        f = r(10775),
        h = r(10776),
        d = r(10777),
        g = r(10778),
        _ = r(5618),
        m = r(3069),
        y = r(10779);
      function E(e) {
        if (m.isOrder(e)) return a.remapOrder(e);
        switch (e.type) {
          case _.TYPES.ISSUE:
            return u.issue(e);
          case _.TYPES.TRANSFER:
            return g.transfer(e);
          case _.TYPES.REISSUE:
            return c.reissue(e);
          case _.TYPES.BURN:
            return i.burn(e);
          case _.TYPES.EXCHANGE:
            return a.exchange(e);
          case _.TYPES.LEASE:
            return l.lease(e);
          case _.TYPES.CANCEL_LEASE:
            return o.cancelLease(e);
          case _.TYPES.ALIAS:
            return n.alias(e);
          case _.TYPES.MASS_TRANSFER:
            return p.massTransfer(e);
          case _.TYPES.DATA:
            return s.data(e);
          case _.TYPES.SET_SCRIPT:
            return h.setScript(e);
          case _.TYPES.SPONSORSHIP:
            return d.sponsorship(e);
          case _.TYPES.SET_ASSET_SCRIPT:
            return f.setAssetScript(e);
          case _.TYPES.INVOKE_SCRIPT:
            return y.invokeScript(e);
          default:
            throw new Error("Unknown transaction type!");
        }
      }
      ((t.node = {
        alias: n.alias,
        burn: i.burn,
        cancelLease: o.cancelLease,
        data: s.data,
        exchange: a.exchange,
        issue: u.issue,
        reissue: c.reissue,
        lease: l.lease,
        massTransfer: p.massTransfer,
        setAssetScript: f.setAssetScript,
        setScript: h.setScript,
        sponsorship: d.sponsorship,
        transfer: g.transfer,
        order: a.remapOrder,
        invokeScript: y.invokeScript,
      }),
        (t.toNode = E));
    },
    10765: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(5618),
        o = r(3165),
        s = r(3166),
        a = r(3069),
        u = r(6761);
      t.alias = o.factory(
        n({}, s.getDefaultTransform(), {
          alias: a.pipe(
            a.prop("alias"),
            u.validate(
              u.requiredValidator("alias"),
              u.createValidator(u.isString, "Alias is not a string!"),
              u.createValidator(
                a.pipe(a.length, a.gte(i.ALIAS.MAX_ALIAS_LENGTH)),
                "Alias max length is " + i.ALIAS.MAX_ALIAS_LENGTH,
              ),
              u.createValidator(
                a.pipe(a.length, a.lte(i.ALIAS.MIN_ALIAS_LENGTH)),
                "Alias min length is " + i.ALIAS.MIN_ALIAS_LENGTH,
              ),
              u.createValidator(
                u.charsInDictionary(i.ALIAS.AVAILABLE_CHARS),
                'Available alias chars is "' + i.ALIAS.AVAILABLE_CHARS + '"',
              ),
            ),
          ),
        }),
      );
    },
    10766: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.burn = i.factory(
        n({}, o.getDefaultTransform(), {
          assetId: s.pipe(
            s.ifElse(
              s.has("assetId"),
              s.prop("assetId"),
              s.pipe(s.prop("quantity"), s.getAssetId),
            ),
            s.emptyError("Has no assetId!"),
          ),
          quantity: s.pipe(s.prop("quantity"), s.getCoins),
          chainId: s.prop("chainId"),
        }),
      );
    },
    10767: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.cancelLease = i.factory(
        n({}, o.getDefaultTransform(), {
          leaseId: s.prop("leaseId"),
          chainId: s.prop("chainId"),
        }),
      );
    },
    10768: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(10769),
        o = r(3165),
        s = r(3166),
        a = r(3069),
        u = function (e) {
          switch (e.type) {
            case i.DATA_FIELD_TYPE.BINARY:
            case i.DATA_FIELD_TYPE.STRING:
            case i.DATA_FIELD_TYPE.BOOLEAN:
              return e.value;
            case i.DATA_FIELD_TYPE.INTEGER:
              return a.getCoins(e.value);
          }
        },
        c = function (e) {
          return {
            key: a.prop("key", e),
            type: a.prop("type", e),
            value: u(e),
          };
        };
      t.data = o.factory(
        n({}, s.getDefaultTransform(), {
          data: a.pipe(a.prop("data"), a.map(c)),
        }),
      );
    },
    10769: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TRANSACTION_TYPE = {
          GENESIS: 1,
          PAYMENT: 2,
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
          STRING: "string",
          BINARY: "binary",
        }));
    },
    10770: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069),
        a = i.factory({
          amountAsset: s.pipe(s.prop("amount"), s.getAssetId),
          priceAsset: s.pipe(s.prop("price"), s.getAssetId),
        });
      ((t.remapOrder = i.factory({
        version: s.prop("version"),
        matcherPublicKey: s.prop("matcherPublicKey"),
        orderType: s.prop("orderType"),
        timestamp: s.prop("timestamp"),
        expiration: s.prop("expiration"),
        senderPublicKey: s.prop("senderPublicKey"),
        proofs: s.prop("proofs"),
        price: s.pipe(s.prop("price"), s.getCoins),
        amount: s.pipe(s.prop("amount"), s.getCoins),
        matcherFee: s.pipe(s.prop("matcherFee"), s.getCoins),
        matcherFeeAssetId: s.pipe(s.prop("matcherFee"), s.getAssetId),
        assetPair: a,
      })),
        (t.exchange = i.factory(
          n({}, o.getDefaultTransform(), {
            buyOrder: s.pipe(s.prop("buyOrder"), t.remapOrder),
            sellOrder: s.pipe(s.prop("sellOrder"), t.remapOrder),
            price: s.pipe(s.prop("price"), s.getCoins),
            amount: s.pipe(s.prop("amount"), s.getCoins),
            buyMatcherFee: s.pipe(s.prop("buyMatcherFee"), s.getCoins),
            sellMatcherFee: s.pipe(s.prop("sellMatcherFee"), s.getCoins),
          }),
        )));
    },
    10771: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.issue = i.factory(
        n({}, o.getDefaultTransform(), {
          name: s.prop("name"),
          description: s.prop("description"),
          decimals: s.prop("precision"),
          quantity: s.pipe(s.prop("quantity"), s.getCoins),
          reissuable: s.prop("reissuable"),
          chainId: s.prop("chainId"),
          script: s.prop("script"),
        }),
      );
    },
    10772: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.reissue = i.factory(
        n({}, o.getDefaultTransform(), {
          assetId: s.pipe(
            s.ifElse(
              s.has("assetId"),
              s.prop("assetId"),
              s.pipe(s.prop("quantity"), s.getAssetId),
            ),
            s.emptyError("Has no assetId!"),
          ),
          quantity: s.pipe(s.prop("quantity"), s.getCoins),
          reissuable: s.prop("reissuable"),
          chainId: s.prop("chainId"),
        }),
      );
    },
    10773: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.lease = i.factory(
        n({}, o.getDefaultTransform(), {
          amount: s.pipe(s.prop("amount"), s.getCoins),
          recipient: s.prop("recipient"),
        }),
      );
    },
    10774: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069),
        a = i.factory({
          recipient: s.prop("recipient"),
          amount: s.pipe(s.prop("amount"), s.getCoins),
        }),
        u = function (e) {
          if (!e.length)
            throw new Error("MassTransfer transaction must have one transfer!");
          return e[0];
        };
      t.massTransfer = i.factory(
        n({}, o.getDefaultTransform(), {
          transfers: s.pipe(s.prop("transfers"), s.map(a)),
          assetId: s.pipe(
            s.ifElse(
              s.has("assetId"),
              s.prop("assetId"),
              s.pipe(s.prop("transfers"), u, s.prop("amount"), s.getAssetId),
            ),
            s.emptyError("Has no assetId!"),
          ),
          attachment: s.prop("attachment"),
        }),
      );
    },
    10775: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.setAssetScript = i.factory(
        n({}, o.getDefaultTransform(), {
          assetId: s.prop("assetId"),
          script: s.prop("script"),
          chainId: s.prop("chainId"),
        }),
      );
    },
    10776: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.setScript = i.factory(
        n({}, o.getDefaultTransform(), {
          script: s.prop("script"),
          chainId: s.prop("chainId"),
        }),
      );
    },
    10777: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.sponsorship = i.factory(
        n({}, o.getDefaultTransform(), {
          assetId: s.pipe(s.prop("minSponsoredAssetFee"), s.getAssetId),
          minSponsoredAssetFee: s.pipe(
            s.prop("minSponsoredAssetFee"),
            s.getCoins,
          ),
        }),
      );
    },
    10778: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069);
      t.transfer = i.factory(
        n({}, o.getDefaultTransform(), {
          recipient: s.prop("recipient"),
          amount: s.pipe(s.prop("amount"), s.getCoins),
          feeAssetId: s.pipe(s.prop("fee"), s.getAssetId, s.defaultTo("WAVES")),
          assetId: s.pipe(s.prop("amount"), s.getAssetId),
          attachment: s.pipe(s.prop("attachment"), s.defaultTo("")),
        }),
      );
    },
    10779: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3165),
        o = r(3166),
        s = r(3069),
        a = function (e) {
          return null == e;
        },
        u = function () {
          return null;
        },
        c = function (e) {
          return "integer" === e.type
            ? { type: e.type, value: s.getCoins(e.value) }
            : e;
        },
        l = i.factory({
          function: s.prop("function"),
          args: s.pipe(s.prop("args"), s.map(c)),
        }),
        p = i.factory({ amount: s.getCoins, assetId: s.getAssetId });
      t.invokeScript = i.factory(
        n({}, o.getDefaultTransform(), {
          chainId: s.prop("chainId"),
          dApp: s.prop("dApp"),
          feeAssetId: s.pipe(s.prop("fee"), s.getAssetId, s.defaultTo("WAVES")),
          call: s.pipe(
            s.prop("call"),
            s.ifElse(a, u, function (e) {
              return l(e);
            }),
          ),
          payment: s.pipe(
            s.prop("payment"),
            s.ifElse(a, u, function (e) {
              return s.map(p)(e);
            }),
          ),
        }),
      );
    },
    10780: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5620),
        i = r(4830),
        o = (function () {
          function e(e) {
            ((e = n.config.get("remapAsset")(e)),
              (this.quantity = i.toBigNumber(e.quantity)),
              (this.minSponsoredFee = i.toBigNumber(e.minSponsoredFee)),
              (this.ticker = e.ticker || null),
              (this.id = e.id),
              (this.name = e.name),
              (this.precision = e.precision),
              (this.description = e.description),
              (this.height = e.height),
              (this.timestamp = e.timestamp),
              (this.sender = e.sender),
              (this.reissuable = e.reissuable),
              (this.hasScript = e.hasScript || !1),
              (this.displayName = e.ticker || e.name));
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                ticker: this.ticker,
                id: this.id,
                name: this.name,
                precision: this.precision,
                description: this.description,
                height: this.height,
                timestamp: this.timestamp,
                sender: this.sender,
                quantity: this.quantity,
                reissuable: this.reissuable,
                hasScript: this.hasScript,
                minSponsoredFee: this.minSponsoredFee,
              };
            }),
            (e.prototype.toString = function () {
              return this.id;
            }),
            (e.isAsset = function (t) {
              return t instanceof e;
            }),
            e
          );
        })();
      t.Asset = o;
    },
    10781: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5620),
        i = r(4830),
        o = (function () {
          function e(e) {
            var t = this;
            e = n.config.get("remapCandle")(e);
            var r = [
              "open",
              "close",
              "high",
              "low",
              "volume",
              "quoteVolume",
              "weightedAveragePrice",
            ];
            (r.forEach(function (r) {
              return (t[r] = i.toBigNumber(e[r]));
            }),
              (this.time = e.time),
              (this.maxHeight = e.maxHeight),
              (this.txsCount = e.txsCount));
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                time: this.time,
                open: this.open,
                close: this.close,
                high: this.high,
                low: this.low,
                volume: this.volume,
                quoteVolume: this.quoteVolume,
                weightedAveragePrice: this.weightedAveragePrice,
                maxHeight: this.maxHeight,
                txsCount: this.txsCount,
              };
            }),
            (e.prototype.toString = function () {
              return "[object Candle]";
            }),
            (e.isCandle = function (t) {
              return t instanceof e;
            }),
            e
          );
        })();
      t.Candle = o;
    },
    10782: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5621),
        i = r(4830),
        o = (function () {
          function e(t, r) {
            var n = e._getDivider(r.precision);
            ((this.asset = r),
              (this._coins = i.toBigNumber(t).roundTo(0, 3)),
              (this._tokens = this._coins.div(n)));
          }
          return (
            (e.prototype.getCoins = function () {
              return this._coins.add(0);
            }),
            (e.prototype.getTokens = function () {
              return this._tokens.add(0);
            }),
            (e.prototype.toCoins = function () {
              return this._coins.toFixed(0);
            }),
            (e.prototype.toTokens = function () {
              return this._tokens.toFixed(this.asset.precision);
            }),
            (e.prototype.toFormat = function (e) {
              return this._tokens.toFormat(e);
            }),
            (e.prototype.add = function (t) {
              this._matchAssets(t);
              var r = t.getCoins(),
                n = this._coins.add(r);
              return new e(n, this.asset);
            }),
            (e.prototype.plus = function (e) {
              return this.add(e);
            }),
            (e.prototype.sub = function (t) {
              this._matchAssets(t);
              var r = t.getCoins(),
                n = this._coins.sub(r);
              return new e(n, this.asset);
            }),
            (e.prototype.minus = function (e) {
              return this.sub(e);
            }),
            (e.prototype.times = function (t) {
              return (
                this._matchAssets(t),
                new e(this.getCoins().mul(t.getCoins()), this.asset)
              );
            }),
            (e.prototype.div = function (t) {
              return (
                this._matchAssets(t),
                new e(this.getCoins().div(t.getCoins()), this.asset)
              );
            }),
            (e.prototype.eq = function (e) {
              return (this._matchAssets(e), this._coins.eq(e.getCoins()));
            }),
            (e.prototype.lt = function (e) {
              return (this._matchAssets(e), this._coins.lt(e.getCoins()));
            }),
            (e.prototype.lte = function (e) {
              return (this._matchAssets(e), this._coins.lte(e.getCoins()));
            }),
            (e.prototype.gt = function (e) {
              return (this._matchAssets(e), this._coins.gt(e.getCoins()));
            }),
            (e.prototype.gte = function (e) {
              return (this._matchAssets(e), this._coins.gte(e.getCoins()));
            }),
            (e.prototype.safeSub = function (e) {
              return this.asset.id === e.asset.id ? this.sub(e) : this;
            }),
            (e.prototype.toNonNegative = function () {
              return this.getTokens().lt(0) ? this.cloneWithTokens(0) : this;
            }),
            (e.prototype.cloneWithCoins = function (t) {
              return new e(new n.BigNumber(t), this.asset);
            }),
            (e.prototype.cloneWithTokens = function (t) {
              var r = e._tokensToCoins(t, this.asset.precision);
              return new e(r, this.asset);
            }),
            (e.prototype.convertTo = function (t, r) {
              return e.convert(this, t, i.toBigNumber(r));
            }),
            (e.prototype.toJSON = function () {
              return { assetId: this.asset.id, tokens: this.toTokens() };
            }),
            (e.prototype.toString = function () {
              return this.toTokens() + " " + this.asset.id;
            }),
            (e.prototype._matchAssets = function (e) {
              if (this.asset.id !== e.asset.id)
                throw new Error(
                  "You cannot apply arithmetic operations to Money created with different assets",
                );
            }),
            (e.max = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return e.reduce(function (e, t) {
                return e.gte(t) ? e : t;
              });
            }),
            (e.min = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return e.reduce(function (e, t) {
                return e.lte(t) ? e : t;
              });
            }),
            (e.isMoney = function (t) {
              return t instanceof e;
            }),
            (e.convert = function (t, r, i) {
              if (t.asset === r) return t;
              var o = t.asset.precision - r.precision,
                s = new n.BigNumber(10).pow(o),
                a = t.getCoins(),
                u = a.mul(i).div(s).roundTo(0, 1).toFixed();
              return new e(new n.BigNumber(u), r);
            }),
            (e.fromTokens = function (t, r) {
              var o = i.toBigNumber(t);
              return new e(o.mul(new n.BigNumber(10).pow(r.precision)), r);
            }),
            (e.fromCoins = function (t, r) {
              return new e(t, r);
            }),
            (e._tokensToCoins = function (t, r) {
              var i = e._getDivider(r);
              return (
                (t = new n.BigNumber(t).toFixed(r)),
                new n.BigNumber(t).mul(i)
              );
            }),
            (e._getDivider = function (e) {
              return new n.BigNumber(10).pow(e);
            }),
            e
          );
        })();
      t.Money = o;
    },
    10783: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5621),
        i = r(4830),
        o = (function () {
          function e(t, r) {
            var n = e._getMatcherDivider(r.precisionDifference);
            ((this.pair = r),
              (this._matcherCoins = t),
              (this._tokens = this._matcherCoins.div(n)));
          }
          return (
            (e.prototype.getMatcherCoins = function () {
              return this._matcherCoins.clone();
            }),
            (e.prototype.getTokens = function () {
              return this._tokens.clone();
            }),
            (e.prototype.toMatcherCoins = function () {
              return this._matcherCoins.toFixed(0);
            }),
            (e.prototype.toTokens = function () {
              return this._tokens.toFixed(this.pair.priceAsset.precision);
            }),
            (e.prototype.toFormat = function () {
              return this._tokens.toFormat(this.pair.priceAsset.precision);
            }),
            (e.prototype.toJSON = function () {
              return {
                amountAssetId: this.pair.amountAsset.id,
                priceAssetId: this.pair.priceAsset.id,
                priceTokens: this.toTokens(),
              };
            }),
            (e.prototype.toString = function () {
              return (
                this.toTokens() +
                " " +
                this.pair.amountAsset.id +
                "/" +
                this.pair.priceAsset.id
              );
            }),
            (e.fromMatcherCoins = function (t, r) {
              return (e._checkAmount(t), new e(i.toBigNumber(t), r));
            }),
            (e.fromTokens = function (t, r) {
              (e._checkAmount(t),
                (t = i.toBigNumber(t).toFixed(r.priceAsset.precision)));
              var o = e._getMatcherDivider(r.precisionDifference),
                s = new n.BigNumber(t).mul(o);
              return new e(s, r);
            }),
            (e._getMatcherDivider = function (t) {
              return new n.BigNumber(10).pow(t).mul(e._MATCHER_SCALE);
            }),
            (e.isOrderPrice = function (t) {
              return t instanceof e;
            }),
            (e._checkAmount = function (e) {
              if (
                !(
                  ["string", "number"].includes(typeof e) ||
                  e instanceof n.BigNumber
                )
              )
                throw new Error(
                  "Please use strings to create instances of OrderPrice",
                );
            }),
            (e._MATCHER_SCALE = new n.BigNumber(10).pow(8)),
            e
          );
        })();
      t.OrderPrice = o;
    },
    10784: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
        function e(e, t) {
          ((this.amountAsset = e),
            (this.priceAsset = t),
            (this.precisionDifference =
              this.priceAsset.precision - this.amountAsset.precision));
        }
        return (
          (e.prototype.toJSON = function () {
            return {
              amountAsset: this.amountAsset.id,
              priceAsset: this.priceAsset.id,
            };
          }),
          (e.prototype.toString = function () {
            return this.amountAsset + "/" + this.priceAsset;
          }),
          (e.isAssetPair = function (t) {
            return t instanceof e;
          }),
          e
        );
      })();
      t.AssetPair = n;
    },
    10785: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e, t) {
        return function (r, n, i, o) {
          return (
            void 0 === n && (n = r),
            void 0 === i && (i = null),
            void 0 === o && (o = !1),
            {
              name: r,
              field: n || r,
              optional: o,
              processor: i,
              type: e,
              optionalData: t,
            }
          );
        };
      };
      ((t.string = function (e) {
        return n("string");
      }),
        (t.asset = function (e) {
          return n("assetId");
        }),
        (t.assetName = function (e) {
          return n("assetName");
        }),
        (t.assetDescription = function (e) {
          return n("assetDescription");
        }),
        (t.precision = function (e) {
          return n("precision");
        }),
        (t.number = function (e) {
          return n("number");
        }),
        (t.address = function (e) {
          return n("address", e);
        }),
        (t.aliasName = function (e) {
          return n("aliasName", e);
        }),
        (t.aliasOrAddress = function (e) {
          return n("aliasOrAddress", e);
        }),
        (t.money = function (e) {
          return n("money");
        }),
        (t.numberLike = function (e) {
          return n("numberLike");
        }),
        (t.attachment = function (e) {
          return n("attachment");
        }),
        (t.httpsUrl = function (e) {
          return n("httpsUrl");
        }),
        (t.timestamp = function (e) {
          return n("timestamp");
        }),
        (t.orderType = function (e) {
          return n("orderType");
        }),
        (t.fromData = function (e) {
          return n("fromData");
        }),
        (t.boolean = function (e) {
          return n("boolean");
        }),
        (t.transfers = function (e) {
          return n("transfers", e);
        }),
        (t.data = function (e) {
          return n("data");
        }),
        (t.script = function (e) {
          return n("script");
        }),
        (t.asset_script = function (e) {
          return n("asset_script");
        }),
        (t.required = function (e) {
          return n("required");
        }),
        (t.call = function (e) {
          return n("call");
        }),
        (t.payment = function (e) {
          return n("payment");
        }));
    },
    10786: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (
            (n =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            n.apply(this, arguments)
          );
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(3611),
        o = r(6762),
        s = r(4829);
      function a(e, t) {
        var r = o.getValidateSchema(t)[e.type],
          a =
            e.data.version ||
            Object.keys(i.SIGN_TYPES[e.type].getBytes).sort().pop(),
          u = n({}, s.prepare.signSchema(r)(e.data), e.data, {
            version: a,
            type: e.type,
          }),
          c = i.SIGN_TYPES[e.type].toNode || null,
          l = (c && c(u, t)) || u;
        return i.SIGN_TYPES[e.type].getBytes[Number(a)](l);
      }
      t.default = a;
    },
    10787: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            (e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n())));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function (e) {
        function t(r, n) {
          var i = e.call(this, r) || this;
          return ((i.code = n), Object.setPrototypeOf(i, t.prototype), i);
        }
        return (n(t, e), t);
      })(Error);
      t.SignError = i;
    },
    10788: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__assign) ||
            function () {
              return (
                (n =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                      for (var i in ((t = arguments[r]), t))
                        Object.prototype.hasOwnProperty.call(t, i) &&
                          (e[i] = t[i]);
                    return e;
                  }),
                n.apply(this, arguments)
              );
            },
          i =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (i, o) {
                function s(e) {
                  try {
                    u(n.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(e) {
                  try {
                    u(n["throw"](e));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(e) {
                  e.done
                    ? i(e.value)
                    : new r(function (t) {
                        t(e.value);
                      }).then(s, a);
                }
                u((n = n.apply(e, t || [])).next());
              });
            },
          o =
            (this && this.__generator) ||
            function (e, t) {
              var r,
                n,
                i,
                o,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" === typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(e) {
                return function (t) {
                  return u([e, t]);
                };
              }
              function u(o) {
                if (r) throw new TypeError("Generator is already executing.");
                while (s)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n["return"]
                            : o[0]
                              ? n["throw"] ||
                                ((i = n["return"]) && i.call(n), 0)
                              : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return (s.label++, { value: o[1], done: !1 });
                      case 5:
                        (s.label++, (n = o[1]), (o = [0]));
                        continue;
                      case 7:
                        ((o = s.ops.pop()), s.trys.pop());
                        continue;
                      default:
                        if (
                          ((i = s.trys),
                          !(i = i.length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0]))
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          ((s.label = i[1]), (i = o));
                          break;
                        }
                        if (i && s.label < i[2]) {
                          ((s.label = i[2]), s.ops.push(o));
                          break;
                        }
                        (i[2] && s.ops.pop(), s.trys.pop());
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    ((o = [6, a]), (n = 0));
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }), r(10789));
        var s = r(10975),
          a = r(5434),
          u = "44'/5741564'/0'/0'/",
          c = (function () {
            function t(e) {
              ((this.ready = !1),
                (this._networkCode =
                  null == e.networkCode ? 87 : e.networkCode),
                (this._wavesLibPromise = null),
                (this._initTransportPromise = null),
                (this._debug = null != e.debug && e.debug),
                (this._openTimeout = e.openTimeout),
                (this._listenTimeout = e.listenTimeout),
                (this._exchangeTimeout = e.exchangeTimeout),
                (this._error = null),
                (this._transport = e.transport || a.default),
                this.tryConnect().catch(function (e) {
                  return console.warn("Ledger lib is not available", e);
                }));
            }
            return (
              (t.prototype.tryConnect = function () {
                return i(this, void 0, void 0, function () {
                  var e, t;
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 3, , 4]),
                          (e = this.disconnect()),
                          this._initU2FTransport(),
                          this._setSettings(),
                          this._initWavesLib(),
                          [4, e]
                        );
                      case 1:
                        return (
                          r.sent(),
                          [
                            4,
                            Promise.all([
                              this._initTransportPromise,
                              this._wavesLibPromise,
                            ]),
                          ]
                        );
                      case 2:
                        return (r.sent(), [3, 4]);
                      case 3:
                        throw ((t = r.sent()), new Error(t));
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.disconnect = function () {
                return i(this, void 0, void 0, function () {
                  var e, t;
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (
                          ((e = this._initTransportPromise),
                          (this._initTransportPromise = null),
                          (this._wavesLibPromise = null),
                          !e)
                        )
                          return [3, 4];
                        r.label = 1;
                      case 1:
                        return (r.trys.push([1, 3, , 4]), [4, e]);
                      case 2:
                        return ((t = r.sent()), t.close(), [3, 4]);
                      case 3:
                        return (r.sent(), [3, 4]);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.getTransport = function () {
                return i(this, void 0, void 0, function () {
                  return o(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          e.trys.push([0, 2, , 5]),
                          [4, this._wavesLibPromise]
                        );
                      case 1:
                        return [2, e.sent()];
                      case 2:
                        return (e.sent(), [4, this.tryConnect()]);
                      case 3:
                        return (e.sent(), [4, this._wavesLibPromise]);
                      case 4:
                        return [2, e.sent()];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.getUserDataById = function (e) {
                return i(this, void 0, void 0, function () {
                  var t, r, i, s;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          o.trys.push([0, 3, , 4]),
                          [4, this.getTransport()]
                        );
                      case 1:
                        return (
                          (t = o.sent()),
                          (r = this.getPathById(e)),
                          [4, t.getWalletPublicKey(r, !1)]
                        );
                      case 2:
                        return (
                          (i = o.sent()),
                          [2, n({}, i, { id: e, path: r })]
                        );
                      case 3:
                        throw (
                          (s = o.sent()),
                          this.tryConnect(),
                          (this._error = s),
                          s
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.getVersion = function () {
                return i(this, void 0, void 0, function () {
                  var e, t;
                  return o(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return (
                          r.trys.push([0, 3, , 4]),
                          [4, this.getTransport()]
                        );
                      case 1:
                        return ((e = r.sent()), [4, e.getVersion()]);
                      case 2:
                        return [2, r.sent()];
                      case 3:
                        throw (
                          (t = r.sent()),
                          this.tryConnect(),
                          (this._error = t),
                          t
                        );
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.getPaginationUsersData = function (e, t) {
                return i(this, void 0, void 0, function () {
                  var r, n, i, s;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        ((r = []), (o.label = 1));
                      case 1:
                        (o.trys.push([1, 6, , 7]), (n = e), (o.label = 2));
                      case 2:
                        return n <= e + t
                          ? [4, this.getUserDataById(n)]
                          : [3, 5];
                      case 3:
                        ((i = o.sent()), r.push(i), (o.label = 4));
                      case 4:
                        return (n++, [3, 2]);
                      case 5:
                        return [3, 7];
                      case 6:
                        throw (
                          (s = o.sent()),
                          this.tryConnect(),
                          (this._error = s),
                          s
                        );
                      case 7:
                        return [2, r];
                    }
                  });
                });
              }),
              (t.prototype.signTransaction = function (t, r, n, s) {
                return (
                  void 0 === s && (s = 2),
                  i(this, void 0, void 0, function () {
                    var i, a, u, c;
                    return o(this, function (o) {
                      switch (o.label) {
                        case 0:
                          ((i = this.getPathById(t)),
                            (a = new e(n)),
                            (o.label = 1));
                        case 1:
                          return (
                            o.trys.push([1, 4, , 5]),
                            [4, this.getTransport()]
                          );
                        case 2:
                          return (
                            (u = o.sent()),
                            [4, u.signTransaction(i, r.precision, a, s)]
                          );
                        case 3:
                          return [2, o.sent()];
                        case 4:
                          throw (
                            (c = o.sent()),
                            this.tryConnect(),
                            (this._error = c),
                            c
                          );
                        case 5:
                          return [2];
                      }
                    });
                  })
                );
              }),
              (t.prototype.signOrder = function (t, r, n) {
                return i(this, void 0, void 0, function () {
                  var i, s, a, u;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        ((i = this.getPathById(t)),
                          (s = new e(n)),
                          (o.label = 1));
                      case 1:
                        return (
                          o.trys.push([1, 4, , 5]),
                          [4, this.getTransport()]
                        );
                      case 2:
                        return (
                          (a = o.sent()),
                          [4, a.signOrder(i, r.precision, s)]
                        );
                      case 3:
                        return [2, o.sent()];
                      case 4:
                        throw (
                          (u = o.sent()),
                          this.tryConnect(),
                          (this._error = u),
                          u
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.signSomeData = function (t, r) {
                return i(this, void 0, void 0, function () {
                  var n, i, s, a;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        ((n = this.getPathById(t)),
                          (i = new e(r)),
                          (o.label = 1));
                      case 1:
                        return (
                          o.trys.push([1, 4, , 5]),
                          [4, this.getTransport()]
                        );
                      case 2:
                        return ((s = o.sent()), [4, s.signSomeData(n, i)]);
                      case 3:
                        return [2, o.sent()];
                      case 4:
                        throw (
                          (a = o.sent()),
                          this.tryConnect(),
                          (this._error = a),
                          a
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.signRequest = function (t, r) {
                return i(this, void 0, void 0, function () {
                  var n, i, s, a;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        ((n = this.getPathById(t)),
                          (i = new e(r)),
                          (o.label = 1));
                      case 1:
                        return (
                          o.trys.push([1, 4, , 5]),
                          [4, this.getTransport()]
                        );
                      case 2:
                        return ((s = o.sent()), [4, s.signRequest(n, i)]);
                      case 3:
                        return [2, o.sent()];
                      case 4:
                        throw (
                          (a = o.sent()),
                          this.tryConnect(),
                          (this._error = a),
                          a
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.signMessage = function (t, r) {
                return i(this, void 0, void 0, function () {
                  var n, i, s, a;
                  return o(this, function (o) {
                    switch (o.label) {
                      case 0:
                        ((n = this.getPathById(t)),
                          (i = new e(r, "ascii")),
                          (o.label = 1));
                      case 1:
                        return (
                          o.trys.push([1, 4, , 5]),
                          [4, this.getTransport()]
                        );
                      case 2:
                        return ((s = o.sent()), [4, s.signMessage(n, i)]);
                      case 3:
                        return [2, o.sent()];
                      case 4:
                        throw (
                          (a = o.sent()),
                          this.tryConnect(),
                          (this._error = a),
                          a
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype.getLastError = function () {
                return this._error;
              }),
              (t.prototype.probeDevice = function () {
                return i(this, void 0, void 0, function () {
                  var e;
                  return o(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.ready ? [3, 2] : [4, this.tryConnect()];
                      case 1:
                        (t.sent(), (t.label = 2));
                      case 2:
                        ((this._error = null), (t.label = 3));
                      case 3:
                        return (
                          t.trys.push([3, 5, , 6]),
                          [4, this.getUserDataById(1)]
                        );
                      case 4:
                        return (t.sent(), [3, 6]);
                      case 5:
                        return ((e = t.sent()), (this._error = e), [2, !1]);
                      case 6:
                        return [2, !0];
                    }
                  });
                });
              }),
              (t.prototype.getPathById = function (e) {
                return "" + u + e + "'";
              }),
              (t.prototype._setSettings = function () {
                var e = this;
                this._initTransportPromise
                  .then(function (t) {
                    (t.setDebugMode(e._debug),
                      t.setExchangeTimeout(e._exchangeTimeout));
                  })
                  .catch(function (e) {
                    return console.warn("can't init ledger", e);
                  });
              }),
              (t.prototype._initU2FTransport = function () {
                return (
                  (this.ready = !1),
                  (this._initTransportPromise = this._transport.create(
                    this._openTimeout,
                    this._listenTimeout,
                  )),
                  this._initTransportPromise.catch(function (e) {
                    return console.warn("Can't init transport", e);
                  }),
                  this._initTransportPromise
                );
              }),
              (t.prototype._initWavesLib = function () {
                var e = this;
                return (
                  (this._wavesLibPromise = this._initTransportPromise.then(
                    function (t) {
                      return ((e.ready = !0), new s.Waves(t, e._networkCode));
                    },
                  )),
                  this._wavesLibPromise
                );
              }),
              t
            );
          })();
        ((t.WavesLedger = c), (t.default = c));
      }).call(this, r(2).Buffer);
    },
    10975: function (e, t, r) {
      "use strict";
      (function (e) {
        var n =
            (this && this.__awaiter) ||
            function (e, t, r, n) {
              return new (r || (r = Promise))(function (i, o) {
                function s(e) {
                  try {
                    u(n.next(e));
                  } catch (t) {
                    o(t);
                  }
                }
                function a(e) {
                  try {
                    u(n["throw"](e));
                  } catch (t) {
                    o(t);
                  }
                }
                function u(e) {
                  e.done
                    ? i(e.value)
                    : new r(function (t) {
                        t(e.value);
                      }).then(s, a);
                }
                u((n = n.apply(e, t || [])).next());
              });
            },
          i =
            (this && this.__generator) ||
            function (e, t) {
              var r,
                n,
                i,
                o,
                s = {
                  label: 0,
                  sent: function () {
                    if (1 & i[0]) throw i[1];
                    return i[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: a(0), throw: a(1), return: a(2) }),
                "function" === typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function a(e) {
                return function (t) {
                  return u([e, t]);
                };
              }
              function u(o) {
                if (r) throw new TypeError("Generator is already executing.");
                while (s)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (i =
                          2 & o[0]
                            ? n["return"]
                            : o[0]
                              ? n["throw"] ||
                                ((i = n["return"]) && i.call(n), 0)
                              : n.next) &&
                        !(i = i.call(n, o[1])).done)
                    )
                      return i;
                    switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                      case 0:
                      case 1:
                        i = o;
                        break;
                      case 4:
                        return (s.label++, { value: o[1], done: !1 });
                      case 5:
                        (s.label++, (n = o[1]), (o = [0]));
                        continue;
                      case 7:
                        ((o = s.ops.pop()), s.trys.pop());
                        continue;
                      default:
                        if (
                          ((i = s.trys),
                          !(i = i.length > 0 && i[i.length - 1]) &&
                            (6 === o[0] || 2 === o[0]))
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!i || (o[1] > i[0] && o[1] < i[3]))
                        ) {
                          s.label = o[1];
                          break;
                        }
                        if (6 === o[0] && s.label < i[1]) {
                          ((s.label = i[1]), (i = o));
                          break;
                        }
                        if (i && s.label < i[2]) {
                          ((s.label = i[2]), s.ops.push(o));
                          break;
                        }
                        (i[2] && s.ops.pop(), s.trys.pop());
                        continue;
                    }
                    o = t.call(e, s);
                  } catch (a) {
                    ((o = [6, a]), (n = 0));
                  } finally {
                    r = i = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              }
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = r(10976),
          s = {
            STATUS: {
              SW_OK: 36864,
              SW_USER_CANCELLED: 37120,
              SW_CONDITIONS_NOT_SATISFIED: 27013,
              SW_BUFFER_OVERFLOW: 27024,
              SW_INCORRECT_P1_P2: 27270,
              SW_INS_NOT_SUPPORTED: 27904,
              SW_CLA_NOT_SUPPORTED: 28160,
              SW_SECURITY_STATUS_NOT_SATISFIED: 27010,
            },
            SECRET: "WAVES",
            PUBLIC_KEY_LENGTH: 32,
            ADDRESS_LENGTH: 35,
            STATUS_LENGTH: 2,
            SIGNED_CODES: {
              ORDER: 252,
              SOME_DATA: 253,
              REQUEST: 254,
              MESSAGE: 255,
            },
            MAX_SIZE: 128,
            WAVES_PRECISION: 8,
            MAIN_NET_CODE: 87,
          },
          a = (function () {
            function t(e, t) {
              (void 0 === t && (t = s.MAIN_NET_CODE),
                (this._version = null),
                (this.transport = e),
                (this.networkCode = t),
                this.decorateClassByTransport());
            }
            return (
              (t.prototype.decorateClassByTransport = function () {
                this.transport.decorateAppAPIMethods(
                  this,
                  ["getWalletPublicKey", "_signData", "getVersion"],
                  s.SECRET,
                );
              }),
              (t._toInt32Bytes = function (e) {
                var t = new ArrayBuffer(4),
                  r = new DataView(t);
                return (r.setUint32(0, e, !1), new Uint8Array(t));
              }),
              (t.prototype.getWalletPublicKey = function (e, r) {
                return (
                  void 0 === r && (r = !1),
                  n(this, void 0, void 0, function () {
                    var n, a, u, c, l, p;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = t.splitPath(e)),
                            (a = r ? 128 : 0),
                            [
                              4,
                              this.transport.send(
                                128,
                                4,
                                a,
                                this.networkCode,
                                n,
                              ),
                            ]
                          );
                        case 1:
                          return (
                            (u = i.sent()),
                            (c = o.base58Encode(
                              u.slice(0, s.PUBLIC_KEY_LENGTH),
                            )),
                            (l = u
                              .slice(
                                s.PUBLIC_KEY_LENGTH,
                                s.PUBLIC_KEY_LENGTH + s.ADDRESS_LENGTH,
                              )
                              .toString("ascii")),
                            (p = u.slice(-s.STATUS_LENGTH).toString("hex")),
                            [2, { publicKey: c, address: l, statusCode: p }]
                          );
                      }
                    });
                  })
                );
              }),
              (t.prototype.signTransaction = function (e, t, r, o) {
                return (
                  void 0 === o && (o = 2),
                  n(this, void 0, void 0, function () {
                    var n, o;
                    return i(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return (
                            (n = r[0]),
                            [
                              4,
                              this._fillDataForSign(
                                e,
                                n,
                                2,
                                t,
                                s.WAVES_PRECISION,
                                r,
                              ),
                            ]
                          );
                        case 1:
                          return ((o = i.sent()), [4, this._signData(o)]);
                        case 2:
                          return [2, i.sent()];
                      }
                    });
                  })
                );
              }),
              (t.prototype.signOrder = function (e, t, r) {
                return n(this, void 0, void 0, function () {
                  var n;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [
                          4,
                          this._fillDataForSign(
                            e,
                            s.SIGNED_CODES.ORDER,
                            0,
                            t,
                            s.WAVES_PRECISION,
                            r,
                          ),
                        ];
                      case 1:
                        return ((n = i.sent()), [4, this._signData(n)]);
                      case 2:
                        return [2, i.sent()];
                    }
                  });
                });
              }),
              (t.prototype.signSomeData = function (e, t) {
                return n(this, void 0, void 0, function () {
                  var r;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          this._fillDataForSign(
                            e,
                            s.SIGNED_CODES.SOME_DATA,
                            0,
                            0,
                            0,
                            t,
                          ),
                        ];
                      case 1:
                        return ((r = n.sent()), [4, this._signData(r)]);
                      case 2:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (t.prototype.signRequest = function (e, t) {
                return n(this, void 0, void 0, function () {
                  var r;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          this._fillDataForSign(
                            e,
                            s.SIGNED_CODES.REQUEST,
                            0,
                            0,
                            0,
                            t,
                          ),
                        ];
                      case 1:
                        return ((r = n.sent()), [4, this._signData(r)]);
                      case 2:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (t.prototype.signMessage = function (e, t) {
                return n(this, void 0, void 0, function () {
                  var r;
                  return i(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [
                          4,
                          this._fillDataForSign(
                            e,
                            s.SIGNED_CODES.MESSAGE,
                            0,
                            0,
                            0,
                            t,
                          ),
                        ];
                      case 1:
                        return ((r = n.sent()), [4, this._signData(r)]);
                      case 2:
                        return [2, n.sent()];
                    }
                  });
                });
              }),
              (t.prototype.getVersion = function () {
                return n(this, void 0, void 0, function () {
                  var e, r, n;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (this._version ||
                          (this._version = this.transport.send(128, 6, 0, 0)),
                          (i.label = 1));
                      case 1:
                        return (i.trys.push([1, 3, , 4]), [4, this._version]);
                      case 2:
                        if (
                          ((e = i.sent()), (r = t.checkError(e.slice(-2))), r)
                        )
                          throw r;
                        return [2, e.slice(0, -2)];
                      case 3:
                        throw ((n = i.sent()), (this._version = null), n);
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (t.prototype._fillDataForSign = function (r, o, s, a, u, c) {
                return n(this, void 0, void 0, function () {
                  var n, l;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, this.getVersion()];
                      case 1:
                        return (
                          (n = i.sent()),
                          n[0] >= 1 && n[1] >= 1 && n[2] >= 0
                            ? ((l = e.concat([
                                t.splitPath(r),
                                e.from([a, u, o, s]),
                                t._toInt32Bytes(c.byteLength),
                              ])),
                              [2, e.concat([l, c, c])])
                            : ((l = e.concat([
                                t.splitPath(r),
                                e.from([a, u, o, s]),
                              ])),
                              [2, e.concat([l, c])])
                        );
                    }
                  });
                });
              }),
              (t.prototype._signData = function (e) {
                return n(this, void 0, void 0, function () {
                  var r, n, a, u, c, l, p, f, h, d;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, e];
                      case 1:
                        ((r = i.sent()),
                          (n = s.MAX_SIZE - 5),
                          (a = r.length),
                          (u = 0),
                          (i.label = 2));
                      case 2:
                        return a > u
                          ? ((l = Math.min(a - u, n)),
                            (p = a - u > n ? 0 : 128),
                            (f = this.networkCode),
                            (h = r.slice(u, l + u)),
                            (u += l),
                            [4, this.transport.send(128, 2, p, f, h)])
                          : [3, 4];
                      case 3:
                        if (
                          ((c = i.sent()), (d = t.checkError(c.slice(-2))), d)
                        )
                          throw d;
                        return [3, 2];
                      case 4:
                        return [2, o.base58Encode(c.slice(0, -2))];
                    }
                  });
                });
              }),
              (t.checkError = function (e) {
                var t = 256 * e[0] + e[1];
                return t === s.STATUS.SW_OK
                  ? null
                  : { error: "Wrong data", status: t };
              }),
              (t.splitPath = function (t) {
                var r = [];
                t.split("/").forEach(function (e) {
                  var t = parseInt(e, 10);
                  isNaN(t) ||
                    (e.length > 1 &&
                      "'" === e[e.length - 1] &&
                      (t += 2147483648),
                    r.push(t));
                });
                var n = new e(4 * r.length);
                return (
                  r.forEach(function (e, t) {
                    n.writeUInt32BE(e, 4 * t);
                  }),
                  n
                );
              }),
              t
            );
          })();
        t.Waves = a;
      }).call(this, r(2).Buffer);
    },
    10976: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
      t.base58Encode = function (e) {
        if (!e.length) return "";
        for (var t = [0], r = 0; r < e.length; r++) {
          for (var i = 0; i < t.length; i++) t[i] <<= 8;
          t[0] += e[r];
          for (var o = 0, s = 0; s < t.length; s++)
            ((t[s] += o), (o = (t[s] / 58) | 0), (t[s] %= 58));
          while (o) (t.push(o % 58), (o = (o / 58) | 0));
        }
        for (r = 0; 0 === e[r] && r < e.length - 1; r++) t.push(0);
        return t
          .reverse()
          .map(function (e) {
            return n[e];
          })
          .join("");
      };
    },
    10977: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__extends) ||
          (function () {
            var e = function (t, r) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                  }),
                e(t, r)
              );
            };
            return function (t, r) {
              function n() {
                this.constructor = t;
              }
              (e(t, r),
                (t.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n())));
            };
          })(),
        o =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function s(e) {
                try {
                  u(n.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function a(e) {
                try {
                  u(n["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                e.done
                  ? i(e.value)
                  : new r(function (t) {
                      t(e.value);
                    }).then(s, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        s =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(e) {
              return function (t) {
                return u([e, t]);
              };
            }
            function u(o) {
              if (r) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n["return"]
                          : o[0]
                            ? n["throw"] || ((i = n["return"]) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (n = o[1]), (o = [0]));
                      continue;
                    case 7:
                      ((o = s.ops.pop()), s.trys.pop());
                      continue;
                    default:
                      if (
                        ((i = s.trys),
                        !(i = i.length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        ((s.label = i[1]), (i = o));
                        break;
                      }
                      if (i && s.label < i[2]) {
                        ((s.label = i[2]), s.ops.push(o));
                        break;
                      }
                      (i[2] && s.ops.pop(), s.trys.pop());
                      continue;
                  }
                  o = t.call(e, s);
                } catch (a) {
                  ((o = [6, a]), (n = 0));
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = r(4831),
        u = r(3611),
        c = r(5622),
        l =
          ((n = {}),
          (n[u.SIGN_TYPE.AUTH] = [1]),
          (n[u.SIGN_TYPE.MATCHER_ORDERS] = [1]),
          (n[u.SIGN_TYPE.CREATE_ORDER] = [1, 2, 3]),
          (n[u.SIGN_TYPE.CANCEL_ORDER] = [1]),
          (n[u.SIGN_TYPE.COINOMAT_CONFIRMATION] = [1]),
          (n[u.SIGN_TYPE.ISSUE] = [2]),
          (n[u.SIGN_TYPE.TRANSFER] = [2]),
          (n[u.SIGN_TYPE.REISSUE] = [2]),
          (n[u.SIGN_TYPE.BURN] = [2]),
          (n[u.SIGN_TYPE.EXCHANGE] = []),
          (n[u.SIGN_TYPE.LEASE] = [2]),
          (n[u.SIGN_TYPE.CANCEL_LEASING] = [2]),
          (n[u.SIGN_TYPE.CREATE_ALIAS] = [2]),
          (n[u.SIGN_TYPE.MASS_TRANSFER] = [1]),
          (n[u.SIGN_TYPE.DATA] = [1]),
          (n[u.SIGN_TYPE.SET_SCRIPT] = [1]),
          (n[u.SIGN_TYPE.SPONSORSHIP] = [1]),
          (n[u.SIGN_TYPE.SET_ASSET_SCRIPT] = [1]),
          (n[u.SIGN_TYPE.SCRIPT_INVOCATION] = [1]),
          n),
        p = (function (e) {
          function t(r, n) {
            var i = r.address,
              o = r.publicKey,
              s = e.call(this, n) || this;
            return (
              (s._onDestoryCb = []),
              (s._needDestroy = !1),
              (s._address = i),
              (s._pKey = o),
              t._initExtension(),
              t.onUpdate(function (e) {
                e.locked ||
                  (e.account && e.account.address === s._address) ||
                  ((s._needDestroy = !0),
                  s._onDestoryCb.forEach(function (e) {
                    return e();
                  }));
              }),
              s
            );
          }
          return (
            i(t, e),
            (t.prototype.isAvailable = function (e) {
              return (
                void 0 === e && (e = !1),
                o(this, void 0, void 0, function () {
                  var r;
                  return s(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          n.trys.push([0, 3, , 4]),
                          [4, t.isAvailable(this.getNetworkByte())]
                        );
                      case 1:
                        return (n.sent(), [4, t._api.publicState()]);
                      case 2:
                        return (
                          (r = n.sent()),
                          t._updateState(r),
                          r.locked
                            ? [
                                2,
                                e
                                  ? Promise.resolve()
                                  : Promise.reject({
                                      code: 4,
                                      msg: "Keeper is locked",
                                    }),
                              ]
                            : r.account && r.account.address === this._address
                              ? [2, Promise.resolve()]
                              : [3, 4]
                        );
                      case 3:
                        return (n.sent(), [3, 4]);
                      case 4:
                        return [
                          2,
                          Promise.reject({
                            code: 5,
                            msg: "Keeper has another active account",
                          }),
                        ];
                    }
                  });
                })
              );
            }),
            (t.prototype.isLocked = function () {
              return o(this, void 0, void 0, function () {
                var e;
                return s(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, t.isAvailable()];
                    case 1:
                      return (r.sent(), [4, t._api.publicState()]);
                    case 2:
                      return (
                        (e = r.sent()),
                        t._updateState(e),
                        e.locked ? [2, Promise.resolve()] : [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.getSignVersions = function () {
              return t._txVersion;
            }),
            (t.prototype.onDestroy = function (e) {
              if (this._needDestroy) return e();
              this._onDestoryCb.push(e);
            }),
            (t.prototype.getPublicKey = function () {
              return Promise.resolve(this._pKey);
            }),
            (t.prototype.getAddress = function () {
              return Promise.resolve(this._address);
            }),
            (t.prototype.getSeed = function () {
              return Promise.reject(
                Error('Method "getSeed" is not available!'),
              );
            }),
            (t.prototype.signRequest = function (e, r, n) {
              return o(this, void 0, void 0, function () {
                return s(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.isAvailable(!0)];
                    case 1:
                      return (
                        e.sent(),
                        [4, t._api.signRequest(t._serializedData(n))]
                      );
                    case 2:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (t.prototype.signTransaction = function (e, r, n) {
              return o(this, void 0, void 0, function () {
                var e, r, i, o;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, this.isAvailable(!0)];
                    case 1:
                      return (
                        s.sent(),
                        [4, t._api.signTransaction(t._serializedData(n))]
                      );
                    case 2:
                      return (
                        (e = s.sent()),
                        (r = JSON.parse(e)),
                        (i = r.proofs),
                        (o = r.signature),
                        [2, o || i.pop()]
                      );
                  }
                });
              });
            }),
            (t.prototype.signOrder = function (e, r, n) {
              return o(this, void 0, void 0, function () {
                var e, r, i, o, a;
                return s(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, this.isAvailable(!0)];
                    case 1:
                      switch ((s.sent(), n.type)) {
                        case u.SIGN_TYPE.CREATE_ORDER:
                          e = t._api.signOrder(t._serializedData(n));
                          break;
                        case u.SIGN_TYPE.CANCEL_ORDER:
                          e = t._api.signCancelOrder(t._serializedData(n));
                          break;
                        default:
                          return [2, t._api.signRequest(t._serializedData(n))];
                      }
                      return [4, e];
                    case 2:
                      return (
                        (r = s.sent()),
                        (i = JSON.parse(r)),
                        (o = i.proofs),
                        (a = i.signature),
                        [2, a || o.pop()]
                      );
                  }
                });
              });
            }),
            (t.prototype.signData = function (e) {
              return o(this, void 0, void 0, function () {
                return s(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.isAvailable(!0)];
                    case 1:
                      return (e.sent(), [2, Promise.resolve("")]);
                  }
                });
              });
            }),
            (t.prototype.getPrivateKey = function () {
              return Promise.reject("No private key");
            }),
            (t.isAvailable = function (e) {
              return o(this, void 0, void 0, function () {
                var r, n;
                return s(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return [4, t._initExtension()];
                    case 1:
                      if ((i.sent(), !this._api))
                        throw { code: 0, message: "Install WavesKeeper" };
                      if (!e && !a.Adapter._code)
                        throw { code: 5, message: "Set adapter network code" };
                      i.label = 2;
                    case 2:
                      return (
                        i.trys.push([2, 4, , 5]),
                        [4, this._api.publicState()]
                      );
                    case 3:
                      return (
                        (n = i.sent()),
                        t._updateState(n),
                        n.txVersion && (t._txVersion = n.txVersion),
                        [3, 5]
                      );
                    case 4:
                      return (
                        i.sent(),
                        (r = { code: 1, message: "No permissions" }),
                        [3, 5]
                      );
                    case 5:
                      if (
                        (!r &&
                          n &&
                          (n.account
                            ? (n.account.address &&
                                c.isValidAddress(
                                  n.account.address,
                                  e || a.Adapter._code,
                                )) ||
                              (r = {
                                code: 3,
                                message: "Selected network incorrect",
                              })
                            : (r = {
                                code: 2,
                                message: "No accounts in waveskeeper",
                              })),
                        r)
                      )
                        throw r;
                      return [2, !0];
                  }
                });
              });
            }),
            (t.getUserList = function () {
              return o(this, void 0, void 0, function () {
                return s(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, t.isAvailable()];
                    case 1:
                      return (
                        e.sent(),
                        [
                          2,
                          t._api.publicState().then(function (e) {
                            return (t._updateState(e), [e.account]);
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (t.initOptions = function (e) {
              (a.Adapter.initOptions(e),
                this.setApiExtension(e.extension),
                this._initExtension());
              try {
                this._api.publicState().then(t._updateState);
              } catch (r) {}
            }),
            (t.setApiExtension = function (e) {
              var r;
              ("function" === typeof e
                ? (r = e)
                : e &&
                  (r = function () {
                    return e;
                  }),
                (t._getApiCb = r));
            }),
            (t.onUpdate = function (e) {
              t._onUpdateCb.push(e);
            }),
            (t._updateState = function (e) {
              for (var r = 0, n = t._onUpdateCb; r < n.length; r++) {
                var i = n[r];
                i(e);
              }
            }),
            (t._initExtension = function () {
              var e = this;
              if (t._api || !t._getApiCb) return t._api.initialPromise;
              var r = t._getApiCb();
              return r
                ? r.initialPromise.then(function (r) {
                    ((e._api = r),
                      e._api.on("update", t._updateState),
                      e._api.publicState().then(function (e) {
                        (e.txVersion && (t._txVersion = e.txVersion),
                          t._updateState(e));
                      }));
                  })
                : void 0;
            }),
            (t._serializedData = function (e) {
              return JSON.parse(
                JSON.stringify(e, function (e, t) {
                  return t instanceof Uint8Array ? Array.from(t) : t;
                }),
              );
            }),
            (t.type = "wavesKeeper"),
            (t._onUpdateCb = []),
            (t._txVersion = l),
            t
          );
        })(a.Adapter);
      t.WavesKeeperAdapter = p;
    },
    3069: function (e, t, r) {
      "use strict";
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), n(r(10763)));
    },
    3165: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.factory = function (e) {
          return function (t) {
            var r = [],
              n = Object.entries(e).reduce(function (e, n) {
                var i,
                  o = n[0],
                  s = n[1];
                try {
                  var a = s(t);
                  return Object.assign(e, ((i = {}), (i[o] = a), i));
                } catch (u) {
                  r.push({ path: o, message: u.message });
                }
              }, Object.create(null));
            if (r.length)
              throw new Error("Errors: " + JSON.stringify(r, null, 4));
            return n;
          };
        }));
    },
    3166: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3069),
        i = r(6761),
        o = function (e) {
          return e || Date.now();
        };
      t.getDefaultTransform = function () {
        return {
          type: n.pipe(n.prop("type"), i.validate(i.requiredValidator("type"))),
          version: n.pipe(
            n.prop("version"),
            i.validate(i.requiredValidator("version")),
          ),
          senderPublicKey: n.pipe(
            n.prop("senderPublicKey"),
            i.validate(i.requiredValidator("senderPublicKey")),
          ),
          timestamp: n.pipe(n.prop("timestamp"), o),
          fee: n.pipe(
            n.prop("fee"),
            n.getCoins,
            i.validate(i.requiredValidator("fee")),
          ),
        };
      };
    },
    3302: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TimeoutTagged =
          t.SyncError =
          t.StatusCodes =
          t.RecommendUndelegation =
          t.RecommendSubAccountsToEmpty =
          t.RecipientRequired =
          t.PasswordsDontMatchError =
          t.PasswordIncorrectError =
          t.PairingFailed =
          t.NotSupportedLegacyAddress =
          t.NotEnoughSpendableBalance =
          t.NotEnoughGas =
          t.NotEnoughBalanceToDelegate =
          t.NotEnoughBalanceInParentAccount =
          t.NotEnoughBalanceBecauseDestinationNotCreated =
          t.NotEnoughBalance =
          t.NoDBPathGiven =
          t.NoAddressesFound =
          t.NoAccessToCamera =
          t.NetworkDown =
          t.ManagerUninstallBTCDep =
          t.ManagerNotEnoughSpaceError =
          t.ManagerFirmwareNotEnoughSpaceError =
          t.ManagerDeviceLockedError =
          t.ManagerAppRelyOnBTCError =
          t.ManagerAppDepUninstallRequired =
          t.ManagerAppDepInstallRequired =
          t.ManagerAppAlreadyInstalledError =
          t.MCUNotGenuineToDashboard =
          t.LedgerAPINotAvailable =
          t.LedgerAPIErrorWithMessage =
          t.LedgerAPIError =
          t.LedgerAPI5xx =
          t.LedgerAPI4xx =
          t.LatestMCUInstalledError =
          t.InvalidXRPTag =
          t.InvalidAddressBecauseDestinationIsAlsoSource =
          t.InvalidAddress =
          t.HardResetFail =
          t.GenuineCheckFailed =
          t.GasLessThanEstimate =
          t.FirmwareOrAppUpdateRequired =
          t.FirmwareNotRecognized =
          t.FeeTooHigh =
          t.FeeRequired =
          t.FeeNotLoaded =
          t.FeeEstimationFailed =
          t.EthAppPleaseEnableContractData =
          t.EnpointConfigError =
          t.ETHAddressNonEIP =
          t.DisconnectedDeviceDuringOperation =
          t.DisconnectedDevice =
          t.DeviceSocketNoBulkStatus =
          t.DeviceSocketFail =
          t.DeviceShouldStayInApp =
          t.DeviceOnDashboardUnexpected =
          t.DeviceOnDashboardExpected =
          t.DeviceNotGenuineError =
          t.DeviceNameInvalid =
          t.DeviceInOSUExpected =
          t.DeviceHalted =
          t.DeviceGenuineSocketEarlyClose =
          t.DeviceAppVerifyNotSupported =
          t.DBWrongPassword =
          t.DBNotReset =
          t.CurrencyNotSupported =
          t.CashAddrNotSupported =
          t.CantScanQRCode =
          t.CantOpenDevice =
          t.BtcUnmatchedApp =
          t.BluetoothRequired =
          t.AmountRequired =
          t.AccountNotSupported =
          t.AccountNameRequiredError =
            void 0),
        (t.TransportError = l),
        (t.TransportRaceCondition =
          t.TransportOpenUserCancelled =
          t.TransportInterfaceNotAvailable =
            void 0),
        (t.TransportStatusError = h),
        (t.deserializeError =
          t.createCustomErrorClass =
          t.addCustomErrorDeserializer =
          t.WrongDeviceForAccount =
          t.WrongAppForCurrency =
          t.WebsocketConnectionFailed =
          t.WebsocketConnectionError =
          t.UserRefusedOnDevice =
          t.UserRefusedFirmwareUpdate =
          t.UserRefusedDeviceNameChange =
          t.UserRefusedAllowManager =
          t.UserRefusedAddress =
          t.UpdateYourApp =
          t.UpdateIncorrectSig =
          t.UpdateIncorrectHash =
          t.UpdateFetchFileFail =
          t.UnknownMCU =
          t.UnexpectedBootloader =
          t.UnavailableTezosOriginatedAccountSend =
          t.UnavailableTezosOriginatedAccountReceive =
          t.TransportWebUSBGestureRequired =
            void 0),
        (t.getAltStatusMessage = f),
        (t.serializeError = void 0));
      var n = {},
        i = {},
        o = function (e, t) {
          i[e] = t;
        };
      t.addCustomErrorDeserializer = o;
      var s = function (e) {
        var t = function (t, r) {
          (Object.assign(this, r),
            (this.name = e),
            (this.message = t || e),
            (this.stack = new Error().stack));
        };
        return ((t.prototype = new Error()), (n[e] = t), t);
      };
      t.createCustomErrorClass = s;
      var a = function (e) {
        if ("object" === typeof e && e) {
          try {
            var t = JSON.parse(e.message);
            t.message && t.name && (e = t);
          } catch (p) {}
          var r = void 0;
          if ("string" === typeof e.name) {
            var o = e.name,
              u = i[o];
            if (u) r = u(e);
            else {
              var c = "Error" === o ? Error : n[o];
              (c ||
                (console.warn("deserializing an unknown class '" + o + "'"),
                (c = s(o))),
                (r = Object.create(c.prototype)));
              try {
                for (var l in e) e.hasOwnProperty(l) && (r[l] = e[l]);
              } catch (p) {}
            }
          } else r = new Error(e.message);
          return (
            !r.stack &&
              Error.captureStackTrace &&
              Error.captureStackTrace(r, a),
            r
          );
        }
        return new Error(String(e));
      };
      t.deserializeError = a;
      var u = function (e) {
        return e
          ? "object" === typeof e
            ? c(e, [])
            : "function" === typeof e
              ? "[Function: " + (e.name || "anonymous") + "]"
              : e
          : e;
      };
      function c(e, t) {
        var r = {};
        t.push(e);
        for (var n = 0, i = Object.keys(e); n < i.length; n++) {
          var o = i[n],
            s = e[o];
          "function" !== typeof s &&
            (s && "object" === typeof s
              ? -1 !== t.indexOf(e[o])
                ? (r[o] = "[Circular]")
                : (r[o] = c(e[o], t.slice(0)))
              : (r[o] = s));
        }
        return (
          "string" === typeof e.name && (r.name = e.name),
          "string" === typeof e.message && (r.message = e.message),
          "string" === typeof e.stack && (r.stack = e.stack),
          r
        );
      }
      t.serializeError = u;
      ((t.AccountNameRequiredError = s("AccountNameRequired")),
        (t.AccountNotSupported = s("AccountNotSupported")),
        (t.AmountRequired = s("AmountRequired")),
        (t.BluetoothRequired = s("BluetoothRequired")),
        (t.BtcUnmatchedApp = s("BtcUnmatchedApp")),
        (t.CantOpenDevice = s("CantOpenDevice")),
        (t.CashAddrNotSupported = s("CashAddrNotSupported")),
        (t.CurrencyNotSupported = s("CurrencyNotSupported")),
        (t.DeviceAppVerifyNotSupported = s("DeviceAppVerifyNotSupported")),
        (t.DeviceGenuineSocketEarlyClose = s("DeviceGenuineSocketEarlyClose")),
        (t.DeviceNotGenuineError = s("DeviceNotGenuine")),
        (t.DeviceOnDashboardExpected = s("DeviceOnDashboardExpected")),
        (t.DeviceOnDashboardUnexpected = s("DeviceOnDashboardUnexpected")),
        (t.DeviceInOSUExpected = s("DeviceInOSUExpected")),
        (t.DeviceHalted = s("DeviceHalted")),
        (t.DeviceNameInvalid = s("DeviceNameInvalid")),
        (t.DeviceSocketFail = s("DeviceSocketFail")),
        (t.DeviceSocketNoBulkStatus = s("DeviceSocketNoBulkStatus")),
        (t.DisconnectedDevice = s("DisconnectedDevice")),
        (t.DisconnectedDeviceDuringOperation = s(
          "DisconnectedDeviceDuringOperation",
        )),
        (t.EnpointConfigError = s("EnpointConfig")),
        (t.EthAppPleaseEnableContractData = s(
          "EthAppPleaseEnableContractData",
        )),
        (t.FeeEstimationFailed = s("FeeEstimationFailed")),
        (t.FirmwareNotRecognized = s("FirmwareNotRecognized")),
        (t.HardResetFail = s("HardResetFail")),
        (t.InvalidXRPTag = s("InvalidXRPTag")),
        (t.InvalidAddress = s("InvalidAddress")),
        (t.InvalidAddressBecauseDestinationIsAlsoSource = s(
          "InvalidAddressBecauseDestinationIsAlsoSource",
        )),
        (t.LatestMCUInstalledError = s("LatestMCUInstalledError")),
        (t.UnknownMCU = s("UnknownMCU")),
        (t.LedgerAPIError = s("LedgerAPIError")),
        (t.LedgerAPIErrorWithMessage = s("LedgerAPIErrorWithMessage")),
        (t.LedgerAPINotAvailable = s("LedgerAPINotAvailable")),
        (t.ManagerAppAlreadyInstalledError = s("ManagerAppAlreadyInstalled")),
        (t.ManagerAppRelyOnBTCError = s("ManagerAppRelyOnBTC")),
        (t.ManagerAppDepInstallRequired = s("ManagerAppDepInstallRequired")),
        (t.ManagerAppDepUninstallRequired = s(
          "ManagerAppDepUninstallRequired",
        )),
        (t.ManagerDeviceLockedError = s("ManagerDeviceLocked")),
        (t.ManagerFirmwareNotEnoughSpaceError = s(
          "ManagerFirmwareNotEnoughSpace",
        )),
        (t.ManagerNotEnoughSpaceError = s("ManagerNotEnoughSpace")),
        (t.ManagerUninstallBTCDep = s("ManagerUninstallBTCDep")),
        (t.NetworkDown = s("NetworkDown")),
        (t.NoAddressesFound = s("NoAddressesFound")),
        (t.NotEnoughBalance = s("NotEnoughBalance")),
        (t.NotEnoughBalanceToDelegate = s("NotEnoughBalanceToDelegate")),
        (t.NotEnoughBalanceInParentAccount = s(
          "NotEnoughBalanceInParentAccount",
        )),
        (t.NotEnoughSpendableBalance = s("NotEnoughSpendableBalance")),
        (t.NotEnoughBalanceBecauseDestinationNotCreated = s(
          "NotEnoughBalanceBecauseDestinationNotCreated",
        )),
        (t.NoAccessToCamera = s("NoAccessToCamera")),
        (t.NotEnoughGas = s("NotEnoughGas")),
        (t.NotSupportedLegacyAddress = s("NotSupportedLegacyAddress")),
        (t.GasLessThanEstimate = s("GasLessThanEstimate")),
        (t.PasswordsDontMatchError = s("PasswordsDontMatch")),
        (t.PasswordIncorrectError = s("PasswordIncorrect")),
        (t.RecommendSubAccountsToEmpty = s("RecommendSubAccountsToEmpty")),
        (t.RecommendUndelegation = s("RecommendUndelegation")),
        (t.TimeoutTagged = s("TimeoutTagged")),
        (t.UnexpectedBootloader = s("UnexpectedBootloader")),
        (t.MCUNotGenuineToDashboard = s("MCUNotGenuineToDashboard")),
        (t.RecipientRequired = s("RecipientRequired")),
        (t.UnavailableTezosOriginatedAccountReceive = s(
          "UnavailableTezosOriginatedAccountReceive",
        )),
        (t.UnavailableTezosOriginatedAccountSend = s(
          "UnavailableTezosOriginatedAccountSend",
        )),
        (t.UpdateFetchFileFail = s("UpdateFetchFileFail")),
        (t.UpdateIncorrectHash = s("UpdateIncorrectHash")),
        (t.UpdateIncorrectSig = s("UpdateIncorrectSig")),
        (t.UpdateYourApp = s("UpdateYourApp")),
        (t.UserRefusedDeviceNameChange = s("UserRefusedDeviceNameChange")),
        (t.UserRefusedAddress = s("UserRefusedAddress")),
        (t.UserRefusedFirmwareUpdate = s("UserRefusedFirmwareUpdate")),
        (t.UserRefusedAllowManager = s("UserRefusedAllowManager")),
        (t.UserRefusedOnDevice = s("UserRefusedOnDevice")),
        (t.TransportOpenUserCancelled = s("TransportOpenUserCancelled")),
        (t.TransportInterfaceNotAvailable = s(
          "TransportInterfaceNotAvailable",
        )),
        (t.TransportRaceCondition = s("TransportRaceCondition")),
        (t.TransportWebUSBGestureRequired = s(
          "TransportWebUSBGestureRequired",
        )),
        (t.DeviceShouldStayInApp = s("DeviceShouldStayInApp")),
        (t.WebsocketConnectionError = s("WebsocketConnectionError")),
        (t.WebsocketConnectionFailed = s("WebsocketConnectionFailed")),
        (t.WrongDeviceForAccount = s("WrongDeviceForAccount")),
        (t.WrongAppForCurrency = s("WrongAppForCurrency")),
        (t.ETHAddressNonEIP = s("ETHAddressNonEIP")),
        (t.CantScanQRCode = s("CantScanQRCode")),
        (t.FeeNotLoaded = s("FeeNotLoaded")),
        (t.FeeRequired = s("FeeRequired")),
        (t.FeeTooHigh = s("FeeTooHigh")),
        (t.SyncError = s("SyncError")),
        (t.PairingFailed = s("PairingFailed")),
        (t.GenuineCheckFailed = s("GenuineCheckFailed")),
        (t.LedgerAPI4xx = s("LedgerAPI4xx")),
        (t.LedgerAPI5xx = s("LedgerAPI5xx")),
        (t.FirmwareOrAppUpdateRequired = s("FirmwareOrAppUpdateRequired")),
        (t.NoDBPathGiven = s("NoDBPathGiven")),
        (t.DBWrongPassword = s("DBWrongPassword")),
        (t.DBNotReset = s("DBNotReset")));
      function l(e, t) {
        ((this.name = "TransportError"),
          (this.message = e),
          (this.stack = new Error().stack),
          (this.id = t));
      }
      ((l.prototype = new Error()),
        o("TransportError", function (e) {
          return new l(e.message, e.id);
        }));
      var p = (t.StatusCodes = {
        PIN_REMAINING_ATTEMPTS: 25536,
        INCORRECT_LENGTH: 26368,
        MISSING_CRITICAL_PARAMETER: 26624,
        COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 27009,
        SECURITY_STATUS_NOT_SATISFIED: 27010,
        CONDITIONS_OF_USE_NOT_SATISFIED: 27013,
        INCORRECT_DATA: 27264,
        NOT_ENOUGH_MEMORY_SPACE: 27268,
        REFERENCED_DATA_NOT_FOUND: 27272,
        FILE_ALREADY_EXISTS: 27273,
        INCORRECT_P1_P2: 27392,
        INS_NOT_SUPPORTED: 27904,
        CLA_NOT_SUPPORTED: 28160,
        TECHNICAL_PROBLEM: 28416,
        OK: 36864,
        MEMORY_PROBLEM: 37440,
        NO_EF_SELECTED: 37888,
        INVALID_OFFSET: 37890,
        FILE_NOT_FOUND: 37892,
        INCONSISTENT_FILE: 37896,
        ALGORITHM_NOT_SUPPORTED: 38020,
        INVALID_KCV: 38021,
        CODE_NOT_INITIALIZED: 38914,
        ACCESS_CONDITION_NOT_FULFILLED: 38916,
        CONTRADICTION_SECRET_CODE_STATUS: 38920,
        CONTRADICTION_INVALIDATION: 38928,
        CODE_BLOCKED: 38976,
        MAX_VALUE_REACHED: 38992,
        GP_AUTH_FAILED: 25344,
        LICENSING: 28482,
        HALTED: 28586,
      });
      function f(e) {
        switch (e) {
          case 26368:
            return "Incorrect length";
          case 26624:
            return "Missing critical parameter";
          case 27010:
            return "Security not satisfied (dongle locked or have invalid access rights)";
          case 27013:
            return "Condition of use not satisfied (denied by the user?)";
          case 27264:
            return "Invalid data received";
          case 27392:
            return "Invalid parameter received";
        }
        if (28416 <= e && e <= 28671) return "Internal error, please report";
      }
      function h(e) {
        this.name = "TransportStatusError";
        var t =
            Object.keys(p).find(function (t) {
              return p[t] === e;
            }) || "UNKNOWN_ERROR",
          r = f(e) || t,
          n = e.toString(16);
        ((this.message = "Ledger device: " + r + " (0x" + n + ")"),
          (this.stack = new Error().stack),
          (this.statusCode = e),
          (this.statusText = t));
      }
      ((h.prototype = new Error()),
        o("TransportStatusError", function (e) {
          return new h(e.statusCode);
        }));
    },
    3305: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.log = t.listen = void 0));
      let n = 0;
      const i = [],
        o = (e, t, r) => {
          const i = { type: e, id: String(++n), date: new Date() };
          (t && (i.message = t), r && (i.data = r), a(i));
        };
      t.log = o;
      const s = (e) => (
        i.push(e),
        () => {
          const t = i.indexOf(e);
          -1 !== t && ((i[t] = i[i.length - 1]), i.pop());
        }
      );
      function a(e) {
        for (let r = 0; r < i.length; r++)
          try {
            i[r](e);
          } catch (t) {
            console.error(t);
          }
      }
      ((t.listen = s),
        "undefined" !== typeof window && (window.__ledgerLogsListen = s));
    },
    3611: function (e, t, r) {
      "use strict";
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        n(r(6728)),
        n(r(4829)),
        n(r(6762)),
        n(r(10786)));
    },
    3690: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "StatusCodes", {
            enumerable: !0,
            get: function () {
              return o.StatusCodes;
            },
          }),
          Object.defineProperty(t, "TransportError", {
            enumerable: !0,
            get: function () {
              return o.TransportError;
            },
          }),
          Object.defineProperty(t, "TransportStatusError", {
            enumerable: !0,
            get: function () {
              return o.TransportStatusError;
            },
          }),
          (t.default = void 0),
          Object.defineProperty(t, "getAltStatusMessage", {
            enumerable: !0,
            get: function () {
              return o.getAltStatusMessage;
            },
          }));
        var i = n(r(52)),
          o = r(3302);
        class Transport {
          constructor() {
            var t = this;
            ((this.exchangeTimeout = 3e4),
              (this.unresponsiveTimeout = 15e3),
              (this.deviceModel = null),
              (this._events = new i.default()),
              (this.send = async function (r, n, i, s, a, u) {
                if (
                  (void 0 === a && (a = e.alloc(0)),
                  void 0 === u && (u = [o.StatusCodes.OK]),
                  a.length >= 256)
                )
                  throw new o.TransportError(
                    "data.length exceed 256 bytes limit. Got: " + a.length,
                    "DataLengthTooBig",
                  );
                const c = await t.exchange(
                    e.concat([e.from([r, n, i, s]), e.from([a.length]), a]),
                  ),
                  l = c.readUInt16BE(c.length - 2);
                if (!u.some((e) => e === l))
                  throw new o.TransportStatusError(l);
                return c;
              }),
              (this.exchangeBusyPromise = void 0),
              (this.exchangeAtomicImpl = async (e) => {
                if (this.exchangeBusyPromise)
                  throw new o.TransportRaceCondition(
                    "An action was already pending on the Ledger device. Please deny or reconnect.",
                  );
                let t;
                const r = new Promise((e) => {
                  t = e;
                });
                this.exchangeBusyPromise = r;
                let n = !1;
                const i = setTimeout(() => {
                  ((n = !0), this.emit("unresponsive"));
                }, this.unresponsiveTimeout);
                try {
                  const r = await e();
                  return (n && this.emit("responsive"), r);
                } finally {
                  (clearTimeout(i),
                    t && t(),
                    (this.exchangeBusyPromise = null));
                }
              }),
              (this._appAPIlock = null));
          }
          exchange(e) {
            throw new Error("exchange not implemented");
          }
          setScrambleKey(e) {}
          close() {
            return Promise.resolve();
          }
          on(e, t) {
            this._events.on(e, t);
          }
          off(e, t) {
            this._events.removeListener(e, t);
          }
          emit(e) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
              n < t;
              n++
            )
              r[n - 1] = arguments[n];
            this._events.emit(e, ...r);
          }
          setDebugMode() {
            console.warn(
              "setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.",
            );
          }
          setExchangeTimeout(e) {
            this.exchangeTimeout = e;
          }
          setExchangeUnresponsiveTimeout(e) {
            this.unresponsiveTimeout = e;
          }
          static create(e, t) {
            return (
              void 0 === e && (e = 3e3),
              new Promise((r, n) => {
                let i = !1;
                const s = this.listen({
                    next: (t) => {
                      ((i = !0),
                        s && s.unsubscribe(),
                        a && clearTimeout(a),
                        this.open(t.descriptor, e).then(r, n));
                    },
                    error: (e) => {
                      (a && clearTimeout(a), n(e));
                    },
                    complete: () => {
                      (a && clearTimeout(a),
                        i ||
                          n(
                            new o.TransportError(
                              this.ErrorMessage_NoDeviceFound,
                              "NoDeviceFound",
                            ),
                          ));
                    },
                  }),
                  a = t
                    ? setTimeout(() => {
                        (s.unsubscribe(),
                          n(
                            new o.TransportError(
                              this.ErrorMessage_ListenTimeout,
                              "ListenTimeout",
                            ),
                          ));
                      }, t)
                    : null;
              })
            );
          }
          decorateAppAPIMethods(e, t, r) {
            for (let n of t) e[n] = this.decorateAppAPIMethod(n, e[n], e, r);
          }
          decorateAppAPIMethod(e, t, r, n) {
            var i = this;
            return async function () {
              const { _appAPIlock: s } = i;
              if (s)
                return Promise.reject(
                  new o.TransportError(
                    "Ledger Device is busy (lock " + s + ")",
                    "TransportLocked",
                  ),
                );
              try {
                ((i._appAPIlock = e), i.setScrambleKey(n));
                for (
                  var a = arguments.length, u = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  u[c] = arguments[c];
                return await t.apply(r, u);
              } finally {
                i._appAPIlock = null;
              }
            };
          }
        }
        ((t.default = Transport),
          (Transport.isSupported = void 0),
          (Transport.list = void 0),
          (Transport.listen = void 0),
          (Transport.open = void 0),
          (Transport.ErrorMessage_ListenTimeout =
            "No Ledger device found (timeout)"),
          (Transport.ErrorMessage_NoDeviceFound = "No Ledger device found"));
      }).call(this, r(2).Buffer);
    },
    4807: function (e, t, r) {
      !(function (e, r) {
        r(t);
      })(0, function (e) {
        "use strict";
        var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          r = Math.ceil,
          n = Math.floor,
          i = "[BigNumber Error] ",
          o = i + "Number primitive has more than 15 significant digits: ",
          s = 1e14,
          a = 14,
          u = 9007199254740991,
          c = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          l = 1e7,
          p = 1e9;
        function f(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function h(e) {
          for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = a - t.length; r--; t = "0" + t);
            o += t;
          }
          for (i = o.length; 48 === o.charCodeAt(--i); );
          return o.slice(0, i + 1 || 1);
        }
        function d(e, t) {
          var r,
            n,
            i = e.c,
            o = t.c,
            s = e.s,
            a = t.s,
            u = e.e,
            c = t.e;
          if (!s || !a) return null;
          if (((r = i && !i[0]), (n = o && !o[0]), r || n))
            return r ? (n ? 0 : -a) : s;
          if (s != a) return s;
          if (((r = s < 0), (n = u == c), !i || !o))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (u > c) ^ r ? 1 : -1;
          for (a = (u = i.length) < (c = o.length) ? u : c, s = 0; s < a; s++)
            if (i[s] != o[s]) return (i[s] > o[s]) ^ r ? 1 : -1;
          return u == c ? 0 : (u > c) ^ r ? 1 : -1;
        }
        function g(e, t, r, o) {
          if (e < t || e > r || e !== n(e))
            throw Error(
              i +
                (o || "Argument") +
                ("number" == typeof e
                  ? e < t || e > r
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e),
            );
        }
        function _(e) {
          var t = e.c.length - 1;
          return f(e.e / a) == t && e.c[t] % 2 != 0;
        }
        function m(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function y(e, t, r) {
          var n, i;
          if (t < 0) {
            for (i = r + "."; ++t; i += r);
            e = i + e;
          } else if (++t > (n = e.length)) {
            for (i = r, t -= n; --t; i += r);
            e += i;
          } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        var E = (function e(E) {
            var S,
              v,
              N,
              A,
              b,
              T,
              O,
              R,
              I,
              P = (j.prototype = {
                constructor: j,
                toString: null,
                valueOf: null,
              }),
              w = new j(1),
              C = 20,
              D = 4,
              L = -7,
              M = 21,
              U = -1e7,
              B = 1e7,
              G = !1,
              F = 1,
              k = 0,
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
              Y = "0123456789abcdefghijklmnopqrstuvwxyz";
            function j(e, r) {
              var i,
                s,
                c,
                l,
                p,
                f,
                h,
                d,
                _ = this;
              if (!(_ instanceof j)) return new j(e, r);
              if (null == r) {
                if (e && !0 === e._isBigNumber)
                  return (
                    (_.s = e.s),
                    void (!e.c || e.e > B
                      ? (_.c = _.e = null)
                      : e.e < U
                        ? (_.c = [(_.e = 0)])
                        : ((_.e = e.e), (_.c = e.c.slice())))
                  );
                if ((f = "number" == typeof e) && 0 * e == 0) {
                  if (((_.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                    for (l = 0, p = e; p >= 10; p /= 10, l++);
                    return void (l > B
                      ? (_.c = _.e = null)
                      : ((_.e = l), (_.c = [e])));
                  }
                  d = String(e);
                } else {
                  if (!t.test((d = String(e)))) return N(_, d, f);
                  _.s = 45 == d.charCodeAt(0) ? ((d = d.slice(1)), -1) : 1;
                }
                ((l = d.indexOf(".")) > -1 && (d = d.replace(".", "")),
                  (p = d.search(/e/i)) > 0
                    ? (l < 0 && (l = p),
                      (l += +d.slice(p + 1)),
                      (d = d.substring(0, p)))
                    : l < 0 && (l = d.length));
              } else {
                if ((g(r, 2, Y.length, "Base"), 10 == r))
                  return W((_ = new j(e)), C + _.e + 1, D);
                if (((d = String(e)), (f = "number" == typeof e))) {
                  if (0 * e != 0) return N(_, d, f, r);
                  if (
                    ((_.s = 1 / e < 0 ? ((d = d.slice(1)), -1) : 1),
                    j.DEBUG && d.replace(/^0\.0*|\./, "").length > 15)
                  )
                    throw Error(o + e);
                } else
                  _.s = 45 === d.charCodeAt(0) ? ((d = d.slice(1)), -1) : 1;
                for (i = Y.slice(0, r), l = p = 0, h = d.length; p < h; p++)
                  if (i.indexOf((s = d.charAt(p))) < 0) {
                    if ("." == s) {
                      if (p > l) {
                        l = h;
                        continue;
                      }
                    } else if (
                      !c &&
                      ((d == d.toUpperCase() && (d = d.toLowerCase())) ||
                        (d == d.toLowerCase() && (d = d.toUpperCase())))
                    ) {
                      ((c = !0), (p = -1), (l = 0));
                      continue;
                    }
                    return N(_, String(e), f, r);
                  }
                ((f = !1),
                  (l = (d = v(d, r, 10, _.s)).indexOf(".")) > -1
                    ? (d = d.replace(".", ""))
                    : (l = d.length));
              }
              for (p = 0; 48 === d.charCodeAt(p); p++);
              for (h = d.length; 48 === d.charCodeAt(--h); );
              if ((d = d.slice(p, ++h))) {
                if (((h -= p), f && j.DEBUG && h > 15 && (e > u || e !== n(e))))
                  throw Error(o + _.s * e);
                if ((l = l - p - 1) > B) _.c = _.e = null;
                else if (l < U) _.c = [(_.e = 0)];
                else {
                  if (
                    ((_.e = l),
                    (_.c = []),
                    (p = (l + 1) % a),
                    l < 0 && (p += a),
                    p < h)
                  ) {
                    for (p && _.c.push(+d.slice(0, p)), h -= a; p < h; )
                      _.c.push(+d.slice(p, (p += a)));
                    p = a - (d = d.slice(p)).length;
                  } else p -= h;
                  for (; p--; d += "0");
                  _.c.push(+d);
                }
              } else _.c = [(_.e = 0)];
            }
            function H(e, t, r, n) {
              var i, o, s, a, u;
              if ((null == r ? (r = D) : g(r, 0, 8), !e.c)) return e.toString();
              if (((i = e.c[0]), (s = e.e), null == t))
                ((u = h(e.c)),
                  (u =
                    1 == n || (2 == n && (s <= L || s >= M))
                      ? m(u, s)
                      : y(u, s, "0")));
              else if (
                ((o = (e = W(new j(e), t, r)).e),
                (a = (u = h(e.c)).length),
                1 == n || (2 == n && (t <= o || o <= L)))
              ) {
                for (; a < t; u += "0", a++);
                u = m(u, o);
              } else if (((t -= s), (u = y(u, o, "0")), o + 1 > a)) {
                if (--t > 0) for (u += "."; t--; u += "0");
              } else if ((t += o - a) > 0)
                for (o + 1 == a && (u += "."); t--; u += "0");
              return e.s < 0 && i ? "-" + u : u;
            }
            function V(e, t) {
              for (var r, n = 1, i = new j(e[0]); n < e.length; n++) {
                if (!(r = new j(e[n])).s) {
                  i = r;
                  break;
                }
                t.call(i, r) && (i = r);
              }
              return i;
            }
            function q(e, t, r) {
              for (var n = 1, i = t.length; !t[--i]; t.pop());
              for (i = t[0]; i >= 10; i /= 10, n++);
              return (
                (r = n + r * a - 1) > B
                  ? (e.c = e.e = null)
                  : r < U
                    ? (e.c = [(e.e = 0)])
                    : ((e.e = r), (e.c = t)),
                e
              );
            }
            function W(e, t, i, o) {
              var u,
                l,
                p,
                f,
                h,
                d,
                g,
                _ = e.c,
                m = c;
              if (_) {
                e: {
                  for (u = 1, f = _[0]; f >= 10; f /= 10, u++);
                  if ((l = t - u) < 0)
                    ((l += a),
                      (p = t),
                      (g = (((h = _[(d = 0)]) / m[u - p - 1]) % 10) | 0));
                  else if ((d = r((l + 1) / a)) >= _.length) {
                    if (!o) break e;
                    for (; _.length <= d; _.push(0));
                    ((h = g = 0), (u = 1), (p = (l %= a) - a + 1));
                  } else {
                    for (h = f = _[d], u = 1; f >= 10; f /= 10, u++);
                    g =
                      (p = (l %= a) - a + u) < 0
                        ? 0
                        : ((h / m[u - p - 1]) % 10) | 0;
                  }
                  if (
                    ((o =
                      o ||
                      t < 0 ||
                      null != _[d + 1] ||
                      (p < 0 ? h : h % m[u - p - 1])),
                    (o =
                      i < 4
                        ? (g || o) && (0 == i || i == (e.s < 0 ? 3 : 2))
                        : g > 5 ||
                          (5 == g &&
                            (4 == i ||
                              o ||
                              (6 == i &&
                                ((l > 0
                                  ? p > 0
                                    ? h / m[u - p]
                                    : 0
                                  : _[d - 1]) %
                                  10) &
                                  1) ||
                              i == (e.s < 0 ? 8 : 7)))),
                    t < 1 || !_[0])
                  )
                    return (
                      (_.length = 0),
                      o
                        ? ((t -= e.e + 1),
                          (_[0] = m[(a - (t % a)) % a]),
                          (e.e = -t || 0))
                        : (_[0] = e.e = 0),
                      e
                    );
                  if (
                    (0 == l
                      ? ((_.length = d), (f = 1), d--)
                      : ((_.length = d + 1),
                        (f = m[a - l]),
                        (_[d] = p > 0 ? n((h / m[u - p]) % m[p]) * f : 0)),
                    o)
                  )
                    for (;;) {
                      if (0 == d) {
                        for (l = 1, p = _[0]; p >= 10; p /= 10, l++);
                        for (p = _[0] += f, f = 1; p >= 10; p /= 10, f++);
                        l != f && (e.e++, _[0] == s && (_[0] = 1));
                        break;
                      }
                      if (((_[d] += f), _[d] != s)) break;
                      ((_[d--] = 0), (f = 1));
                    }
                  for (l = _.length; 0 === _[--l]; _.pop());
                }
                e.e > B ? (e.c = e.e = null) : e.e < U && (e.c = [(e.e = 0)]);
              }
              return e;
            }
            function z(e) {
              var t,
                r = e.e;
              return null === r
                ? e.toString()
                : ((t = h(e.c)),
                  (t = r <= L || r >= M ? m(t, r) : y(t, r, "0")),
                  e.s < 0 ? "-" + t : t);
            }
            return (
              (j.clone = e),
              (j.ROUND_UP = 0),
              (j.ROUND_DOWN = 1),
              (j.ROUND_CEIL = 2),
              (j.ROUND_FLOOR = 3),
              (j.ROUND_HALF_UP = 4),
              (j.ROUND_HALF_DOWN = 5),
              (j.ROUND_HALF_EVEN = 6),
              (j.ROUND_HALF_CEIL = 7),
              (j.ROUND_HALF_FLOOR = 8),
              (j.EUCLID = 9),
              (j.config = j.set =
                function (e) {
                  var t, r;
                  if (null != e) {
                    if ("object" != typeof e)
                      throw Error(i + "Object expected: " + e);
                    if (
                      (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                        (g((r = e[t]), 0, p, t), (C = r)),
                      e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                        (g((r = e[t]), 0, 8, t), (D = r)),
                      e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                        ((r = e[t]) && r.pop
                          ? (g(r[0], -p, 0, t),
                            g(r[1], 0, p, t),
                            (L = r[0]),
                            (M = r[1]))
                          : (g(r, -p, p, t), (L = -(M = r < 0 ? -r : r)))),
                      e.hasOwnProperty((t = "RANGE")))
                    )
                      if ((r = e[t]) && r.pop)
                        (g(r[0], -p, -1, t),
                          g(r[1], 1, p, t),
                          (U = r[0]),
                          (B = r[1]));
                      else {
                        if ((g(r, -p, p, t), !r))
                          throw Error(i + t + " cannot be zero: " + r);
                        U = -(B = r < 0 ? -r : r);
                      }
                    if (e.hasOwnProperty((t = "CRYPTO"))) {
                      if ((r = e[t]) !== !!r)
                        throw Error(i + t + " not true or false: " + r);
                      if (r) {
                        if (
                          "undefined" == typeof crypto ||
                          !crypto ||
                          (!crypto.getRandomValues && !crypto.randomBytes)
                        )
                          throw ((G = !r), Error(i + "crypto unavailable"));
                        G = r;
                      } else G = r;
                    }
                    if (
                      (e.hasOwnProperty((t = "MODULO_MODE")) &&
                        (g((r = e[t]), 0, 9, t), (F = r)),
                      e.hasOwnProperty((t = "POW_PRECISION")) &&
                        (g((r = e[t]), 0, p, t), (k = r)),
                      e.hasOwnProperty((t = "FORMAT")))
                    ) {
                      if ("object" != typeof (r = e[t]))
                        throw Error(i + t + " not an object: " + r);
                      x = r;
                    }
                    if (e.hasOwnProperty((t = "ALPHABET"))) {
                      if (
                        "string" != typeof (r = e[t]) ||
                        /^.$|[+-.\s]|(.).*\1/.test(r)
                      )
                        throw Error(i + t + " invalid: " + r);
                      Y = r;
                    }
                  }
                  return {
                    DECIMAL_PLACES: C,
                    ROUNDING_MODE: D,
                    EXPONENTIAL_AT: [L, M],
                    RANGE: [U, B],
                    CRYPTO: G,
                    MODULO_MODE: F,
                    POW_PRECISION: k,
                    FORMAT: x,
                    ALPHABET: Y,
                  };
                }),
              (j.isBigNumber = function (e) {
                if (!e || !0 !== e._isBigNumber) return !1;
                if (!j.DEBUG) return !0;
                var t,
                  r,
                  o = e.c,
                  u = e.e,
                  c = e.s;
                e: if ("[object Array]" == {}.toString.call(o)) {
                  if (
                    (1 === c || -1 === c) &&
                    u >= -p &&
                    u <= p &&
                    u === n(u)
                  ) {
                    if (0 === o[0]) {
                      if (0 === u && 1 === o.length) return !0;
                      break e;
                    }
                    if (
                      ((t = (u + 1) % a) < 1 && (t += a),
                      String(o[0]).length == t)
                    ) {
                      for (t = 0; t < o.length; t++)
                        if ((r = o[t]) < 0 || r >= s || r !== n(r)) break e;
                      if (0 !== r) return !0;
                    }
                  }
                } else if (
                  null === o &&
                  null === u &&
                  (null === c || 1 === c || -1 === c)
                )
                  return !0;
                throw Error(i + "Invalid BigNumber: " + e);
              }),
              (j.maximum = j.max =
                function () {
                  return V(arguments, P.lt);
                }),
              (j.minimum = j.min =
                function () {
                  return V(arguments, P.gt);
                }),
              (j.random =
                ((A =
                  (9007199254740992 * Math.random()) & 2097151
                    ? function () {
                        return n(9007199254740992 * Math.random());
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      }),
                function (e) {
                  var t,
                    o,
                    s,
                    u,
                    l,
                    f = 0,
                    h = [],
                    d = new j(w);
                  if ((null == e ? (e = C) : g(e, 0, p), (u = r(e / a)), G))
                    if (crypto.getRandomValues) {
                      for (
                        t = crypto.getRandomValues(new Uint32Array((u *= 2)));
                        f < u;
                      )
                        (l = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15
                          ? ((o = crypto.getRandomValues(new Uint32Array(2))),
                            (t[f] = o[0]),
                            (t[f + 1] = o[1]))
                          : (h.push(l % 1e14), (f += 2));
                      f = u / 2;
                    } else {
                      if (!crypto.randomBytes)
                        throw ((G = !1), Error(i + "crypto unavailable"));
                      for (t = crypto.randomBytes((u *= 7)); f < u; )
                        (l =
                          281474976710656 * (31 & t[f]) +
                          1099511627776 * t[f + 1] +
                          4294967296 * t[f + 2] +
                          16777216 * t[f + 3] +
                          (t[f + 4] << 16) +
                          (t[f + 5] << 8) +
                          t[f + 6]) >= 9e15
                          ? crypto.randomBytes(7).copy(t, f)
                          : (h.push(l % 1e14), (f += 7));
                      f = u / 7;
                    }
                  if (!G)
                    for (; f < u; ) (l = A()) < 9e15 && (h[f++] = l % 1e14);
                  for (
                    u = h[--f],
                      e %= a,
                      u && e && ((l = c[a - e]), (h[f] = n(u / l) * l));
                    0 === h[f];
                    h.pop(), f--
                  );
                  if (f < 0) h = [(s = 0)];
                  else {
                    for (s = -1; 0 === h[0]; h.splice(0, 1), s -= a);
                    for (f = 1, l = h[0]; l >= 10; l /= 10, f++);
                    f < a && (s -= a - f);
                  }
                  return ((d.e = s), (d.c = h), d);
                })),
              (j.sum = function () {
                for (var e = 1, t = arguments, r = new j(t[0]); e < t.length; )
                  r = r.plus(t[e++]);
                return r;
              }),
              (v = (function () {
                function e(e, t, r, n) {
                  for (var i, o, s = [0], a = 0, u = e.length; a < u; ) {
                    for (o = s.length; o--; s[o] *= t);
                    for (
                      s[0] += n.indexOf(e.charAt(a++)), i = 0;
                      i < s.length;
                      i++
                    )
                      s[i] > r - 1 &&
                        (null == s[i + 1] && (s[i + 1] = 0),
                        (s[i + 1] += (s[i] / r) | 0),
                        (s[i] %= r));
                  }
                  return s.reverse();
                }
                return function (t, r, n, i, o) {
                  var s,
                    a,
                    u,
                    c,
                    l,
                    p,
                    f,
                    d,
                    g = t.indexOf("."),
                    _ = C,
                    m = D;
                  for (
                    g >= 0 &&
                      ((c = k),
                      (k = 0),
                      (t = t.replace(".", "")),
                      (p = (d = new j(r)).pow(t.length - g)),
                      (k = c),
                      (d.c = e(y(h(p.c), p.e, "0"), 10, n, "0123456789")),
                      (d.e = d.c.length)),
                      u = c =
                        (f = e(
                          t,
                          r,
                          n,
                          o ? ((s = Y), "0123456789") : ((s = "0123456789"), Y),
                        )).length;
                    0 == f[--c];
                    f.pop()
                  );
                  if (!f[0]) return s.charAt(0);
                  if (
                    (g < 0
                      ? --u
                      : ((p.c = f),
                        (p.e = u),
                        (p.s = i),
                        (f = (p = S(p, d, _, m, n)).c),
                        (l = p.r),
                        (u = p.e)),
                    (g = f[(a = u + _ + 1)]),
                    (c = n / 2),
                    (l = l || a < 0 || null != f[a + 1]),
                    (l =
                      m < 4
                        ? (null != g || l) && (0 == m || m == (p.s < 0 ? 3 : 2))
                        : g > c ||
                          (g == c &&
                            (4 == m ||
                              l ||
                              (6 == m && 1 & f[a - 1]) ||
                              m == (p.s < 0 ? 8 : 7)))),
                    a < 1 || !f[0])
                  )
                    t = l ? y(s.charAt(1), -_, s.charAt(0)) : s.charAt(0);
                  else {
                    if (((f.length = a), l))
                      for (--n; ++f[--a] > n; )
                        ((f[a] = 0), a || (++u, (f = [1].concat(f))));
                    for (c = f.length; !f[--c]; );
                    for (g = 0, t = ""; g <= c; t += s.charAt(f[g++]));
                    t = y(t, u, s.charAt(0));
                  }
                  return t;
                };
              })()),
              (S = (function () {
                function e(e, t, r) {
                  var n,
                    i,
                    o,
                    s,
                    a = 0,
                    u = e.length,
                    c = t % l,
                    p = (t / l) | 0;
                  for (e = e.slice(); u--; )
                    ((a =
                      (((i =
                        c * (o = e[u] % l) +
                        ((n = p * o + (s = (e[u] / l) | 0) * c) % l) * l +
                        a) /
                        r) |
                        0) +
                      ((n / l) | 0) +
                      p * s),
                      (e[u] = i % r));
                  return (a && (e = [a].concat(e)), e);
                }
                function t(e, t, r, n) {
                  var i, o;
                  if (r != n) o = r > n ? 1 : -1;
                  else
                    for (i = o = 0; i < r; i++)
                      if (e[i] != t[i]) {
                        o = e[i] > t[i] ? 1 : -1;
                        break;
                      }
                  return o;
                }
                function r(e, t, r, n) {
                  for (var i = 0; r--; )
                    ((e[r] -= i),
                      (i = e[r] < t[r] ? 1 : 0),
                      (e[r] = i * n + e[r] - t[r]));
                  for (; !e[0] && e.length > 1; e.splice(0, 1));
                }
                return function (i, o, u, c, l) {
                  var p,
                    h,
                    d,
                    g,
                    _,
                    m,
                    y,
                    E,
                    S,
                    v,
                    N,
                    A,
                    b,
                    T,
                    O,
                    R,
                    I,
                    P = i.s == o.s ? 1 : -1,
                    w = i.c,
                    C = o.c;
                  if (!(w && w[0] && C && C[0]))
                    return new j(
                      i.s && o.s && (w ? !C || w[0] != C[0] : C)
                        ? (w && 0 == w[0]) || !C
                          ? 0 * P
                          : P / 0
                        : NaN,
                    );
                  for (
                    S = (E = new j(P)).c = [],
                      P = u + (h = i.e - o.e) + 1,
                      l ||
                        ((l = s),
                        (h = f(i.e / a) - f(o.e / a)),
                        (P = (P / a) | 0)),
                      d = 0;
                    C[d] == (w[d] || 0);
                    d++
                  );
                  if ((C[d] > (w[d] || 0) && h--, P < 0)) (S.push(1), (g = !0));
                  else {
                    for (
                      T = w.length,
                        R = C.length,
                        d = 0,
                        P += 2,
                        (_ = n(l / (C[0] + 1))) > 1 &&
                          ((C = e(C, _, l)),
                          (w = e(w, _, l)),
                          (R = C.length),
                          (T = w.length)),
                        b = R,
                        N = (v = w.slice(0, R)).length;
                      N < R;
                      v[N++] = 0
                    );
                    ((I = C.slice()),
                      (I = [0].concat(I)),
                      (O = C[0]),
                      C[1] >= l / 2 && O++);
                    do {
                      if (((_ = 0), (p = t(C, v, R, N)) < 0)) {
                        if (
                          ((A = v[0]),
                          R != N && (A = A * l + (v[1] || 0)),
                          (_ = n(A / O)) > 1)
                        )
                          for (
                            _ >= l && (_ = l - 1),
                              y = (m = e(C, _, l)).length,
                              N = v.length;
                            1 == t(m, v, y, N);
                          )
                            (_--,
                              r(m, R < y ? I : C, y, l),
                              (y = m.length),
                              (p = 1));
                        else
                          (0 == _ && (p = _ = 1), (y = (m = C.slice()).length));
                        if (
                          (y < N && (m = [0].concat(m)),
                          r(v, m, N, l),
                          (N = v.length),
                          -1 == p)
                        )
                          for (; t(C, v, R, N) < 1; )
                            (_++, r(v, R < N ? I : C, N, l), (N = v.length));
                      } else 0 === p && (_++, (v = [0]));
                      ((S[d++] = _),
                        v[0] ? (v[N++] = w[b] || 0) : ((v = [w[b]]), (N = 1)));
                    } while ((b++ < T || null != v[0]) && P--);
                    ((g = null != v[0]), S[0] || S.splice(0, 1));
                  }
                  if (l == s) {
                    for (d = 1, P = S[0]; P >= 10; P /= 10, d++);
                    W(E, u + (E.e = d + h * a - 1) + 1, c, g);
                  } else ((E.e = h), (E.r = +g));
                  return E;
                };
              })()),
              (b = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
              (T = /^([^.]+)\.$/),
              (O = /^\.([^.]+)$/),
              (R = /^-?(Infinity|NaN)$/),
              (I = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
              (N = function (e, t, r, n) {
                var o,
                  s = r ? t : t.replace(I, "");
                if (R.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                else {
                  if (
                    !r &&
                    ((s = s.replace(b, function (e, t, r) {
                      return (
                        (o =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        n && n != o ? e : t
                      );
                    })),
                    n && ((o = n), (s = s.replace(T, "$1").replace(O, "0.$1"))),
                    t != s)
                  )
                    return new j(s, o);
                  if (j.DEBUG)
                    throw Error(
                      i + "Not a" + (n ? " base " + n : "") + " number: " + t,
                    );
                  e.s = null;
                }
                e.c = e.e = null;
              }),
              (P.absoluteValue = P.abs =
                function () {
                  var e = new j(this);
                  return (e.s < 0 && (e.s = 1), e);
                }),
              (P.comparedTo = function (e, t) {
                return d(this, new j(e, t));
              }),
              (P.decimalPlaces = P.dp =
                function (e, t) {
                  var r,
                    n,
                    i,
                    o = this;
                  if (null != e)
                    return (
                      g(e, 0, p),
                      null == t ? (t = D) : g(t, 0, 8),
                      W(new j(o), e + o.e + 1, t)
                    );
                  if (!(r = o.c)) return null;
                  if (
                    ((n = ((i = r.length - 1) - f(this.e / a)) * a), (i = r[i]))
                  )
                    for (; i % 10 == 0; i /= 10, n--);
                  return (n < 0 && (n = 0), n);
                }),
              (P.dividedBy = P.div =
                function (e, t) {
                  return S(this, new j(e, t), C, D);
                }),
              (P.dividedToIntegerBy = P.idiv =
                function (e, t) {
                  return S(this, new j(e, t), 0, 1);
                }),
              (P.exponentiatedBy = P.pow =
                function (e, t) {
                  var o,
                    s,
                    u,
                    c,
                    l,
                    p,
                    f,
                    h,
                    d = this;
                  if ((e = new j(e)).c && !e.isInteger())
                    throw Error(i + "Exponent not an integer: " + z(e));
                  if (
                    (null != t && (t = new j(t)),
                    (l = e.e > 14),
                    !d.c ||
                      !d.c[0] ||
                      (1 == d.c[0] && !d.e && 1 == d.c.length) ||
                      !e.c ||
                      !e.c[0])
                  )
                    return (
                      (h = new j(Math.pow(+z(d), l ? 2 - _(e) : +z(e)))),
                      t ? h.mod(t) : h
                    );
                  if (((p = e.s < 0), t)) {
                    if (t.c ? !t.c[0] : !t.s) return new j(NaN);
                    (s = !p && d.isInteger() && t.isInteger()) &&
                      (d = d.mod(t));
                  } else {
                    if (
                      e.e > 9 &&
                      (d.e > 0 ||
                        d.e < -1 ||
                        (0 == d.e
                          ? d.c[0] > 1 || (l && d.c[1] >= 24e7)
                          : d.c[0] < 8e13 || (l && d.c[0] <= 9999975e7)))
                    )
                      return (
                        (c = d.s < 0 && _(e) ? -0 : 0),
                        d.e > -1 && (c = 1 / c),
                        new j(p ? 1 / c : c)
                      );
                    k && (c = r(k / a + 2));
                  }
                  for (
                    l
                      ? ((o = new j(0.5)), p && (e.s = 1), (f = _(e)))
                      : (f = (u = Math.abs(+z(e))) % 2),
                      h = new j(w);
                    ;
                  ) {
                    if (f) {
                      if (!(h = h.times(d)).c) break;
                      c
                        ? h.c.length > c && (h.c.length = c)
                        : s && (h = h.mod(t));
                    }
                    if (u) {
                      if (0 === (u = n(u / 2))) break;
                      f = u % 2;
                    } else if ((W((e = e.times(o)), e.e + 1, 1), e.e > 14))
                      f = _(e);
                    else {
                      if (0 == (u = +z(e))) break;
                      f = u % 2;
                    }
                    ((d = d.times(d)),
                      c
                        ? d.c && d.c.length > c && (d.c.length = c)
                        : s && (d = d.mod(t)));
                  }
                  return s
                    ? h
                    : (p && (h = w.div(h)),
                      t ? h.mod(t) : c ? W(h, k, D, void 0) : h);
                }),
              (P.integerValue = function (e) {
                var t = new j(this);
                return (null == e ? (e = D) : g(e, 0, 8), W(t, t.e + 1, e));
              }),
              (P.isEqualTo = P.eq =
                function (e, t) {
                  return 0 === d(this, new j(e, t));
                }),
              (P.isFinite = function () {
                return !!this.c;
              }),
              (P.isGreaterThan = P.gt =
                function (e, t) {
                  return d(this, new j(e, t)) > 0;
                }),
              (P.isGreaterThanOrEqualTo = P.gte =
                function (e, t) {
                  return 1 === (t = d(this, new j(e, t))) || 0 === t;
                }),
              (P.isInteger = function () {
                return !!this.c && f(this.e / a) > this.c.length - 2;
              }),
              (P.isLessThan = P.lt =
                function (e, t) {
                  return d(this, new j(e, t)) < 0;
                }),
              (P.isLessThanOrEqualTo = P.lte =
                function (e, t) {
                  return -1 === (t = d(this, new j(e, t))) || 0 === t;
                }),
              (P.isNaN = function () {
                return !this.s;
              }),
              (P.isNegative = function () {
                return this.s < 0;
              }),
              (P.isPositive = function () {
                return this.s > 0;
              }),
              (P.isZero = function () {
                return !!this.c && 0 == this.c[0];
              }),
              (P.minus = function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  u = this,
                  c = u.s;
                if (((t = (e = new j(e, t)).s), !c || !t)) return new j(NaN);
                if (c != t) return ((e.s = -t), u.plus(e));
                var l = u.e / a,
                  p = e.e / a,
                  h = u.c,
                  d = e.c;
                if (!l || !p) {
                  if (!h || !d) return h ? ((e.s = -t), e) : new j(d ? u : NaN);
                  if (!h[0] || !d[0])
                    return d[0]
                      ? ((e.s = -t), e)
                      : new j(h[0] ? u : 3 == D ? -0 : 0);
                }
                if (((l = f(l)), (p = f(p)), (h = h.slice()), (c = l - p))) {
                  for (
                    (o = c < 0) ? ((c = -c), (i = h)) : ((p = l), (i = d)),
                      i.reverse(),
                      t = c;
                    t--;
                    i.push(0)
                  );
                  i.reverse();
                } else
                  for (
                    n = (o = (c = h.length) < (t = d.length)) ? c : t,
                      c = t = 0;
                    t < n;
                    t++
                  )
                    if (h[t] != d[t]) {
                      o = h[t] < d[t];
                      break;
                    }
                if (
                  (o && ((i = h), (h = d), (d = i), (e.s = -e.s)),
                  (t = (n = d.length) - (r = h.length)) > 0)
                )
                  for (; t--; h[r++] = 0);
                for (t = s - 1; n > c; ) {
                  if (h[--n] < d[n]) {
                    for (r = n; r && !h[--r]; h[r] = t);
                    (--h[r], (h[n] += s));
                  }
                  h[n] -= d[n];
                }
                for (; 0 == h[0]; h.splice(0, 1), --p);
                return h[0]
                  ? q(e, h, p)
                  : ((e.s = 3 == D ? -1 : 1), (e.c = [(e.e = 0)]), e);
              }),
              (P.modulo = P.mod =
                function (e, t) {
                  var r,
                    n,
                    i = this;
                  return (
                    (e = new j(e, t)),
                    !i.c || !e.s || (e.c && !e.c[0])
                      ? new j(NaN)
                      : !e.c || (i.c && !i.c[0])
                        ? new j(i)
                        : (9 == F
                            ? ((n = e.s),
                              (e.s = 1),
                              (r = S(i, e, 0, 3)),
                              (e.s = n),
                              (r.s *= n))
                            : (r = S(i, e, 0, F)),
                          (e = i.minus(r.times(e))).c[0] ||
                            1 != F ||
                            (e.s = i.s),
                          e)
                  );
                }),
              (P.multipliedBy = P.times =
                function (e, t) {
                  var r,
                    n,
                    i,
                    o,
                    u,
                    c,
                    p,
                    h,
                    d,
                    g,
                    _,
                    m,
                    y,
                    E,
                    S,
                    v = this,
                    N = v.c,
                    A = (e = new j(e, t)).c;
                  if (!(N && A && N[0] && A[0]))
                    return (
                      !v.s || !e.s || (N && !N[0] && !A) || (A && !A[0] && !N)
                        ? (e.c = e.e = e.s = null)
                        : ((e.s *= v.s),
                          N && A
                            ? ((e.c = [0]), (e.e = 0))
                            : (e.c = e.e = null)),
                      e
                    );
                  for (
                    n = f(v.e / a) + f(e.e / a),
                      e.s *= v.s,
                      (p = N.length) < (g = A.length) &&
                        ((y = N), (N = A), (A = y), (i = p), (p = g), (g = i)),
                      i = p + g,
                      y = [];
                    i--;
                    y.push(0)
                  );
                  for (E = s, S = l, i = g; --i >= 0; ) {
                    for (
                      r = 0, _ = A[i] % S, m = (A[i] / S) | 0, o = i + (u = p);
                      o > i;
                    )
                      ((r =
                        (((h =
                          _ * (h = N[--u] % S) +
                          ((c = m * h + (d = (N[u] / S) | 0) * _) % S) * S +
                          y[o] +
                          r) /
                          E) |
                          0) +
                        ((c / S) | 0) +
                        m * d),
                        (y[o--] = h % E));
                    y[o] = r;
                  }
                  return (r ? ++n : y.splice(0, 1), q(e, y, n));
                }),
              (P.negated = function () {
                var e = new j(this);
                return ((e.s = -e.s || null), e);
              }),
              (P.plus = function (e, t) {
                var r,
                  n = this,
                  i = n.s;
                if (((t = (e = new j(e, t)).s), !i || !t)) return new j(NaN);
                if (i != t) return ((e.s = -t), n.minus(e));
                var o = n.e / a,
                  u = e.e / a,
                  c = n.c,
                  l = e.c;
                if (!o || !u) {
                  if (!c || !l) return new j(i / 0);
                  if (!c[0] || !l[0]) return l[0] ? e : new j(c[0] ? n : 0 * i);
                }
                if (((o = f(o)), (u = f(u)), (c = c.slice()), (i = o - u))) {
                  for (
                    i > 0 ? ((u = o), (r = l)) : ((i = -i), (r = c)),
                      r.reverse();
                    i--;
                    r.push(0)
                  );
                  r.reverse();
                }
                for (
                  (i = c.length) - (t = l.length) < 0 &&
                    ((r = l), (l = c), (c = r), (t = i)),
                    i = 0;
                  t;
                )
                  ((i = ((c[--t] = c[t] + l[t] + i) / s) | 0),
                    (c[t] = s === c[t] ? 0 : c[t] % s));
                return (i && ((c = [i].concat(c)), ++u), q(e, c, u));
              }),
              (P.precision = P.sd =
                function (e, t) {
                  var r,
                    n,
                    i,
                    o = this;
                  if (null != e && e !== !!e)
                    return (
                      g(e, 1, p),
                      null == t ? (t = D) : g(t, 0, 8),
                      W(new j(o), e, t)
                    );
                  if (!(r = o.c)) return null;
                  if (((n = (i = r.length - 1) * a + 1), (i = r[i]))) {
                    for (; i % 10 == 0; i /= 10, n--);
                    for (i = r[0]; i >= 10; i /= 10, n++);
                  }
                  return (e && o.e + 1 > n && (n = o.e + 1), n);
                }),
              (P.shiftedBy = function (e) {
                return (g(e, -u, u), this.times("1e" + e));
              }),
              (P.squareRoot = P.sqrt =
                function () {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    o = this,
                    s = o.c,
                    a = o.s,
                    u = o.e,
                    c = C + 4,
                    l = new j("0.5");
                  if (1 !== a || !s || !s[0])
                    return new j(
                      !a || (a < 0 && (!s || s[0])) ? NaN : s ? o : 1 / 0,
                    );
                  if (
                    (0 == (a = Math.sqrt(+z(o))) || a == 1 / 0
                      ? (((t = h(s)).length + u) % 2 == 0 && (t += "0"),
                        (a = Math.sqrt(+t)),
                        (u = f((u + 1) / 2) - (u < 0 || u % 2)),
                        (r = new j(
                          (t =
                            a == 1 / 0
                              ? "1e" + u
                              : (t = a.toExponential()).slice(
                                  0,
                                  t.indexOf("e") + 1,
                                ) + u),
                        )))
                      : (r = new j(a + "")),
                    r.c[0])
                  )
                    for ((a = (u = r.e) + c) < 3 && (a = 0); ; )
                      if (
                        ((i = r),
                        (r = l.times(i.plus(S(o, i, c, 1)))),
                        h(i.c).slice(0, a) === (t = h(r.c)).slice(0, a))
                      ) {
                        if (
                          (r.e < u && --a,
                          "9999" != (t = t.slice(a - 3, a + 1)) &&
                            (n || "4999" != t))
                        ) {
                          (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (W(r, r.e + C + 2, 1), (e = !r.times(r).eq(o)));
                          break;
                        }
                        if (!n && (W(i, i.e + C + 2, 0), i.times(i).eq(o))) {
                          r = i;
                          break;
                        }
                        ((c += 4), (a += 4), (n = 1));
                      }
                  return W(r, r.e + C + 1, D, e);
                }),
              (P.toExponential = function (e, t) {
                return (null != e && (g(e, 0, p), e++), H(this, e, t, 1));
              }),
              (P.toFixed = function (e, t) {
                return (
                  null != e && (g(e, 0, p), (e = e + this.e + 1)),
                  H(this, e, t)
                );
              }),
              (P.toFormat = function (e, t, r) {
                var n,
                  o = this;
                if (null == r)
                  null != e && t && "object" == typeof t
                    ? ((r = t), (t = null))
                    : e && "object" == typeof e
                      ? ((r = e), (e = t = null))
                      : (r = x);
                else if ("object" != typeof r)
                  throw Error(i + "Argument not an object: " + r);
                if (((n = o.toFixed(e, t)), o.c)) {
                  var s,
                    a = n.split("."),
                    u = +r.groupSize,
                    c = +r.secondaryGroupSize,
                    l = r.groupSeparator || "",
                    p = a[0],
                    f = a[1],
                    h = o.s < 0,
                    d = h ? p.slice(1) : p,
                    g = d.length;
                  if (
                    (c && ((s = u), (u = c), (c = s), (g -= s)), u > 0 && g > 0)
                  ) {
                    for (s = g % u || u, p = d.substr(0, s); s < g; s += u)
                      p += l + d.substr(s, u);
                    (c > 0 && (p += l + d.slice(s)), h && (p = "-" + p));
                  }
                  n = f
                    ? p +
                      (r.decimalSeparator || "") +
                      ((c = +r.fractionGroupSize)
                        ? f.replace(
                            new RegExp("\\d{" + c + "}\\B", "g"),
                            "$&" + (r.fractionGroupSeparator || ""),
                          )
                        : f)
                    : p;
                }
                return (r.prefix || "") + n + (r.suffix || "");
              }),
              (P.toFraction = function (e) {
                var t,
                  r,
                  n,
                  o,
                  s,
                  u,
                  l,
                  p,
                  f,
                  d,
                  g,
                  _,
                  m = this,
                  y = m.c;
                if (
                  null != e &&
                  ((!(l = new j(e)).isInteger() && (l.c || 1 !== l.s)) ||
                    l.lt(w))
                )
                  throw Error(
                    i +
                      "Argument " +
                      (l.isInteger() ? "out of range: " : "not an integer: ") +
                      z(l),
                  );
                if (!y) return new j(m);
                for (
                  t = new j(w),
                    f = r = new j(w),
                    n = p = new j(w),
                    _ = h(y),
                    s = t.e = _.length - m.e - 1,
                    t.c[0] = c[(u = s % a) < 0 ? a + u : u],
                    e = !e || l.comparedTo(t) > 0 ? (s > 0 ? t : f) : l,
                    u = B,
                    B = 1 / 0,
                    l = new j(_),
                    p.c[0] = 0;
                  (d = S(l, t, 0, 1)),
                    1 != (o = r.plus(d.times(n))).comparedTo(e);
                )
                  ((r = n),
                    (n = o),
                    (f = p.plus(d.times((o = f)))),
                    (p = o),
                    (t = l.minus(d.times((o = t)))),
                    (l = o));
                return (
                  (o = S(e.minus(r), n, 0, 1)),
                  (p = p.plus(o.times(f))),
                  (r = r.plus(o.times(n))),
                  (p.s = f.s = m.s),
                  (g =
                    S(f, n, (s *= 2), D)
                      .minus(m)
                      .abs()
                      .comparedTo(S(p, r, s, D).minus(m).abs()) < 1
                      ? [f, n]
                      : [p, r]),
                  (B = u),
                  g
                );
              }),
              (P.toNumber = function () {
                return +z(this);
              }),
              (P.toPrecision = function (e, t) {
                return (null != e && g(e, 1, p), H(this, e, t, 2));
              }),
              (P.toString = function (e) {
                var t,
                  r = this,
                  n = r.s,
                  i = r.e;
                return (
                  null === i
                    ? n
                      ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                      : (t = "NaN")
                    : (null == e
                        ? (t =
                            i <= L || i >= M ? m(h(r.c), i) : y(h(r.c), i, "0"))
                        : 10 === e
                          ? (t = y(
                              h((r = W(new j(r), C + i + 1, D)).c),
                              r.e,
                              "0",
                            ))
                          : (g(e, 2, Y.length, "Base"),
                            (t = v(y(h(r.c), i, "0"), 10, e, n, !0))),
                      n < 0 && r.c[0] && (t = "-" + t)),
                  t
                );
              }),
              (P.valueOf = P.toJSON =
                function () {
                  return z(this);
                }),
              (P._isBigNumber = !0),
              (P[Symbol.toStringTag] = "BigNumber"),
              (P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf),
              null != E && j.set(E),
              j
            );
          })(),
          S = function () {
            return (S =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          v = (function () {
            function e() {
              ((this.format = e.DEFAULT_FORMAT),
                E.config({ FORMAT: this.format }));
            }
            return (
              (e.prototype.set = function (e) {
                ("FORMAT" in e &&
                  ((this.format = S({}, this.format, e.FORMAT)),
                  (e.FORMAT = this.format)),
                  E.config(e));
              }),
              (e.DEFAULT_FORMAT = {
                prefix: "",
                decimalSeparator: ".",
                groupSeparator: ",",
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: " ",
                fractionGroupSize: 0,
                suffix: "",
              }),
              e
            );
          })();
        ((e.BigNumber = (function () {
          function e(t) {
            "object" == typeof t && e.isBigNumber(t)
              ? (this.bn = t.bn.plus(0))
              : (this.bn = e.toBigNumberJs(t));
          }
          return (
            (e.prototype.clone = function () {
              return new e(this);
            }),
            (e.prototype.add = function (t) {
              return new e(this.bn.plus(e.toBigNumberJs(t)));
            }),
            (e.prototype.sub = function (t) {
              return new e(this.bn.minus(e.toBigNumberJs(t)));
            }),
            (e.prototype.mul = function (t) {
              return new e(this.bn.times(e.toBigNumberJs(t)));
            }),
            (e.prototype.div = function (t) {
              return new e(this.bn.div(e.toBigNumberJs(t)));
            }),
            (e.prototype.pow = function (t) {
              return new e(this.bn.pow(e.toBigNumberJs(t)));
            }),
            (e.prototype.abs = function () {
              return new e(this.bn.abs());
            }),
            (e.prototype.mod = function (t) {
              return new e(this.bn.mod(e.toBigNumberJs(t)));
            }),
            (e.prototype.roundTo = function (t, r) {
              return (
                void 0 === t && (t = 0),
                void 0 === r && (r = 4),
                new e(this.bn.dp(t || 0, r))
              );
            }),
            (e.prototype.eq = function (t) {
              return this.bn.eq(e.toBigNumberJs(t));
            }),
            (e.prototype.lt = function (t) {
              return this.bn.lt(e.toBigNumberJs(t));
            }),
            (e.prototype.gt = function (t) {
              return this.bn.gt(e.toBigNumberJs(t));
            }),
            (e.prototype.lte = function (t) {
              return this.bn.lte(e.toBigNumberJs(t));
            }),
            (e.prototype.gte = function (t) {
              return this.bn.gte(e.toBigNumberJs(t));
            }),
            (e.prototype.isNaN = function () {
              return this.bn.isNaN();
            }),
            (e.prototype.isFinite = function () {
              return this.bn.isFinite();
            }),
            (e.prototype.isZero = function () {
              return this.eq(0);
            }),
            (e.prototype.isPositive = function () {
              return this.gt(0);
            }),
            (e.prototype.isNegative = function () {
              return this.lt(0);
            }),
            (e.prototype.isInt = function () {
              return this.bn.isInteger();
            }),
            (e.prototype.getDecimalsCount = function () {
              return this.bn.dp();
            }),
            (e.prototype.isEven = function () {
              return this.mod(2).eq(0);
            }),
            (e.prototype.isOdd = function () {
              return !this.isEven();
            }),
            (e.prototype.toBytes = function () {
              if (!this.isInt())
                throw new Error("Cant create bytes from number with decimals!");
              var t = this.isNegative(),
                r = t ? "1" : "0",
                n = e
                  ._toLength(
                    64,
                    this.bn.plus(r).abs().toString(2).replace("-", ""),
                  )
                  .split(""),
                i = [];
              do {
                i.push(parseInt(n.splice(0, 8).join(""), 2));
              } while (n.length);
              return t
                ? Uint8Array.from(
                    i.map(function (e) {
                      return 255 - e;
                    }),
                  )
                : Uint8Array.from(i);
            }),
            (e.prototype.toFormat = function (e, t, r) {
              return this.bn.toFormat(e, t, r);
            }),
            (e.prototype.toFixed = function (e, t) {
              return null == e ? this.bn.toFixed() : this.bn.toFixed(e, t);
            }),
            (e.prototype.toString = function () {
              return this.toFixed();
            }),
            (e.prototype.toNumber = function () {
              return this.bn.toNumber();
            }),
            (e.prototype.toJSON = function () {
              return this.bn.toFixed();
            }),
            (e.prototype.valueOf = function () {
              return this.bn.valueOf();
            }),
            (e.fromBytes = function (t) {
              if (8 !== t.length)
                throw new Error("Wrong bytes length! Need 8 bytes!");
              var r = t[0] > 127,
                n = Array.from(t)
                  .map(function (e) {
                    return r ? 255 - e : e;
                  })
                  .map(function (t) {
                    return e._toLength(8, t.toString(2));
                  })
                  .join(""),
                i = new e(new E(n, 2));
              return r ? i.mul(-1).sub(1) : i;
            }),
            (e.max = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return e.toBigNumber(t).reduce(function (e, t) {
                return e.gte(t) ? e : t;
              });
            }),
            (e.min = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return e.toBigNumber(t).reduce(function (e, t) {
                return e.lte(t) ? e : t;
              });
            }),
            (e.sum = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return e.toBigNumber(t).reduce(function (e, t) {
                return e.add(t);
              });
            }),
            (e.isBigNumber = function (t) {
              return (
                t &&
                "object" == typeof t &&
                (t instanceof e ||
                  Object.entries(e.prototype)
                    .filter(function (e) {
                      return "_" !== e[0].charAt(0);
                    })
                    .every(function (e) {
                      var r = e[0],
                        n = e[1];
                      return r in t && typeof n == typeof t[r];
                    }))
              );
            }),
            (e.toBigNumber = function (t) {
              return Array.isArray(t)
                ? t.map(function (t) {
                    return new e(t);
                  })
                : new e(t);
            }),
            (e.toBigNumberJs = function (t) {
              return E.isBigNumber(t) ? t : t instanceof e ? t.bn : new E(t);
            }),
            (e._toLength = function (e, t) {
              return new Array(e)
                .fill("0", 0, e)
                .concat(t.split(""))
                .slice(-e)
                .join("");
            }),
            (e.MAX_VALUE = new e("9223372036854775807")),
            (e.MIN_VALUE = new e("-9223372036854775808")),
            (e.MAX_UNSIGNED_VALUE = new e("18446744073709551615")),
            (e.config = new v()),
            e
          );
        })()),
          (function (e) {
            !(function (e) {
              ((e[(e.ROUND_UP = 0)] = "ROUND_UP"),
                (e[(e.ROUND_DOWN = 1)] = "ROUND_DOWN"),
                (e[(e.ROUND_CEIL = 2)] = "ROUND_CEIL"),
                (e[(e.ROUND_FLOOR = 3)] = "ROUND_FLOOR"),
                (e[(e.ROUND_HALF_UP = 4)] = "ROUND_HALF_UP"),
                (e[(e.ROUND_HALF_DOWN = 5)] = "ROUND_HALF_DOWN"),
                (e[(e.ROUND_HALF_EVEN = 6)] = "ROUND_HALF_EVEN"),
                (e[(e.ROUND_HALF_CEIL = 7)] = "ROUND_HALF_CEIL"),
                (e[(e.ROUND_HALF_FLOOR = 8)] = "ROUND_HALF_FLOOR"));
            })(e.ROUND_MODE || (e.ROUND_MODE = {}));
          })(e.BigNumber || (e.BigNumber = {})));
        var N = e.BigNumber;
        ((e.default = N),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      });
    },
    4829: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5619),
        i = r(4807),
        o = r(3830),
        s = r(5622);
      t.WAVES_ID = "WAVES";
      var a = o.libs.crypto,
        u = a.stringToBytes,
        c = a.base58Encode,
        l = function (e) {
          return e === t.WAVES_ID ? "" : e;
        };
      (function (e) {
        var r;
        function o(e, t, r) {
          return "function" != typeof r
            ? {
                from: e,
                to: t,
                cb: function () {
                  return r;
                },
              }
            : { from: e, to: t, cb: r };
        }
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return function (t) {
            return e
              .map(function (e) {
                return "string" === typeof e
                  ? { key: e, value: r.noProcess(t[e]) }
                  : { key: e.to, value: e.cb(e.from ? t[e.from] : t) };
              })
              .reduce(function (e, t) {
                return ((e[t.key] = t.value), e);
              }, Object.create(null));
          };
        }
        function p(e) {
          return function (t, n) {
            void 0 === n && (n = !1);
            var i = [],
              a = e
                .map(function (e) {
                  var a = o(e.name, e.field, e.processor || r.noProcess),
                    u = {
                      key: a.to,
                      value: a.from ? t[a.from] : t,
                      optional: e.optional,
                      optionalData: e.optionalData,
                      type: e.type,
                      name: e.name,
                    },
                    c = s.VALIDATORS[u.type];
                  try {
                    return (
                      n && c && c(u),
                      { key: u.key, value: a.cb(u.value) }
                    );
                  } catch (l) {
                    i.push(l);
                  }
                  return { key: u.key, value: null };
                })
                .reduce(function (e, t) {
                  var r = t.key,
                    n = t.value;
                  return ((e[r] = n), e);
                }, Object.create(null));
            if (i.length) throw new Error(JSON.stringify(i));
            return a;
          };
        }
        function f(e) {
          return e === t.WAVES_ID ? "" : e;
        }
        ((function (e) {
          function t(e) {
            return e
              ? { function: (e && e.function) || "", args: (e && e.args) || [] }
              : null;
          }
          function r(e) {
            return (e || []).map(function (e) {
              return { amount: h(e).toString(), assetId: m(e) };
            });
          }
          function o(e) {
            return (e || []).map(function (e) {
              return { amount: h(e), assetId: m(e) || null };
            });
          }
          function s(e) {
            return (e || "").replace("base64:", "") ? e : null;
          }
          function a(e) {
            return {
              amountAsset: l(e.amount.asset.id),
              priceAsset: l(e.price.asset.id),
            };
          }
          function p(e) {
            return e[0];
          }
          function h(e) {
            switch (typeof e) {
              case "string":
              case "number":
                return new i.BigNumber(e);
              case "object":
                return e instanceof i.BigNumber ? e : e.getCoins();
            }
          }
          function d(e) {
            return h(e).toString();
          }
          function g(e) {
            var t = e.getCoins();
            return t.eq(0) ? null : t;
          }
          function _(e) {
            return e.asset.id;
          }
          function m(e) {
            return f(e.asset.id);
          }
          function y(e) {
            return +e || "string" !== typeof e
              ? e && e instanceof Date
                ? e.getTime()
                : e
              : Date.parse(e);
          }
          function E(e) {
            return e || "";
          }
          function S(e) {
            return e;
          }
          function v(e) {
            e = e || "";
            var t = e;
            return ("string" === typeof e && (t = u(e)), c(Uint8Array.from(t)));
          }
          function N(e) {
            return "function" === typeof e
              ? e
              : function () {
                  return e;
                };
          }
          function A(e) {
            return e || new Date().setDate(new Date().getDate() + 20);
          }
          function b(e, t) {
            return function (r) {
              return r.map(function (r) {
                return { recipient: e(r.recipient), amount: t(r.amount) };
              });
            };
          }
          function T(e) {
            return new i.BigNumber(e.quantity).mul(
              new i.BigNumber(10).pow(e.precision),
            );
          }
          function O(e) {
            return (e || "").replace("base64:", "");
          }
          function R(e) {
            var t = new n.AssetPair(e.amount.asset, e.price.asset),
              r = n.OrderPrice.fromTokens(e.price.toTokens(), t);
            return r.getMatcherCoins();
          }
          ((e.callFunc = t),
            (e.payments = r),
            (e.paymentsToNode = o),
            (e.scriptProcessor = s),
            (e.assetPair = a),
            (e.signatureFromProof = p),
            (e.toBigNumber = h),
            (e.toNumberString = d),
            (e.toSponsorshipFee = g),
            (e.moneyToAssetId = _),
            (e.moneyToNodeAssetId = m),
            (e.timestamp = y),
            (e.orString = E),
            (e.noProcess = S),
            (e.recipient = function (e) {
              return function (t) {
                return t.length <= 30 ? "alias:" + e + ":" + t : t;
              };
            }),
            (e.attachment = v),
            (e.addValue = N),
            (e.expiration = A),
            (e.transfers = b),
            (e.quantity = T),
            (e.base64 = O),
            (e.toOrderPrice = R));
        })((r = e.processors || (e.processors = {}))),
          (e.wrap = o),
          (e.schema = a),
          (e.signSchema = p),
          (e.idToNode = f));
      })(t.prepare || (t.prepare = {}));
    },
    4830: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5621);
      function i(e) {
        return e instanceof n.BigNumber ? e : new n.BigNumber(e);
      }
      t.toBigNumber = i;
    },
    4831: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6764),
        i = (function () {
          function e(t) {
            ((t = "string" === typeof t ? t.charCodeAt(0) : t),
              (this.type = this.constructor.type),
              (this._code = t || e._code || "W".charCodeAt(0)));
          }
          return (
            (e.prototype.makeSignable = function (e) {
              return new n.Signable(e, this);
            }),
            (e.prototype.isAvailable = function () {
              return Promise.resolve();
            }),
            (e.prototype.onDestroy = function (e) {}),
            (e.prototype.getNetworkByte = function () {
              return this._code || e._code;
            }),
            (e.initOptions = function (t) {
              e._code = t.networkCode;
            }),
            (e.getUserList = function () {
              return Promise.resolve([]);
            }),
            (e.isAvailable = function () {
              return Promise.resolve(!1);
            }),
            (e.type = "seed"),
            e
          );
        })();
      t.Adapter = i;
    },
    5434: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(9);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var i = r(5435),
          o = n(r(3690)),
          s = r(3305),
          a = r(3302);
        function u(e, t, r) {
          const n = new a.TransportError(t, r);
          return ((n.originalError = e), n);
        }
        function c(t, r) {
          const n = e.alloc(t.length);
          for (let e = 0; e < t.length; e++) n[e] = t[e] ^ r[e % r.length];
          return n;
        }
        const l = (e) =>
            e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
          p = (e) =>
            e.replace(/-/g, "+").replace(/_/g, "/") +
            "==".substring(0, (3 * e.length) % 4);
        function f(t, r, n, o) {
          const a = c(t, n),
            u = e.from(
              "0000000000000000000000000000000000000000000000000000000000000000",
              "hex",
            ),
            f = {
              version: "U2F_V2",
              keyHandle: l(a.toString("base64")),
              challenge: l(u.toString("base64")),
              appId: location.origin,
            };
          return (
            (0, s.log)("apdu", "=> " + t.toString("hex")),
            (0, i.sign)(f, r / 1e3).then((t) => {
              const { signatureData: r } = t;
              if ("string" === typeof r) {
                const t = e.from(p(r), "base64");
                let n;
                return (
                  (n = o ? t.slice(5) : t),
                  (0, s.log)("apdu", "<= " + n.toString("hex")),
                  n
                );
              }
              throw t;
            })
          );
        }
        let h = [];
        function d() {
          (h.forEach((e) => e.emit("disconnect")), (h = []));
        }
        function g(e) {
          return 5 === e.metaData.code;
        }
        class TransportU2F extends o.default {
          static async open(e, t) {
            return (void 0 === t && (t = 5e3), new TransportU2F());
          }
          constructor() {
            (super(),
              (this.scrambleKey = void 0),
              (this.unwrap = !0),
              h.push(this));
          }
          async exchange(e) {
            try {
              return await f(
                e,
                this.exchangeTimeout,
                this.scrambleKey,
                this.unwrap,
              );
            } catch (t) {
              const e = "object" === typeof t.metaData;
              throw e
                ? (g(t) && d(),
                  u(
                    t,
                    "Failed to sign with Ledger device: U2F " + t.metaData.type,
                    "U2F_" + t.metaData.code,
                  ))
                : t;
            }
          }
          setScrambleKey(t) {
            this.scrambleKey = e.from(t, "ascii");
          }
          setUnwrap(e) {
            this.unwrap = e;
          }
          close() {
            return Promise.resolve();
          }
        }
        ((t.default = TransportU2F),
          (TransportU2F.isSupported = i.isSupported),
          (TransportU2F.list = () =>
            (0, i.isSupported)().then((e) => (e ? [null] : []))),
          (TransportU2F.listen = (e) => {
            let t = !1;
            return (
              (0, i.isSupported)().then((r) => {
                t ||
                  (r
                    ? (e.next({ type: "add", descriptor: null }), e.complete())
                    : e.error(
                        new a.TransportError(
                          "U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection",
                          "U2FNotSupported",
                        ),
                      ));
              }),
              {
                unsubscribe: () => {
                  t = !0;
                },
              }
            );
          }));
      }).call(this, r(2).Buffer);
    },
    5573: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(4807),
        i = r(10500),
        o = r(3611);
      function s(e, t) {
        for (
          var r = Object.keys(e),
            n = function (t) {
              return r.every(function (r) {
                return t[r] === e[r];
              });
            },
            i = 0;
          i < t.length;
          i++
        )
          if (n(t[i])) return t[i];
        return null;
      }
      function a(e) {
        return null == e;
      }
      function u(e) {
        return e || o.WAVES_ID;
      }
      function c(e) {
        return e[e.length - 1];
      }
      function l(e, t) {
        return function (r, i, o) {
          (void 0 === i && (i = !1), void 0 === o && (o = []));
          var s = i
              ? new n.BigNumber(e.smart_account_extra_fee)
              : new n.BigNumber(0),
            a = Object.values(r.assetPair)
              .map(function (t) {
                return t && o.includes(t)
                  ? new n.BigNumber(e.smart_asset_extra_fee)
                  : new n.BigNumber(0);
              })
              .reduce(function (e, t) {
                return e.add(t);
              }, new n.BigNumber(0));
          return t.add(s).add(a);
        };
      }
      function p(e) {
        return function (r, i, o, s) {
          var a = o
              ? new n.BigNumber(e.smart_account_extra_fee)
              : new n.BigNumber(0),
            u = a.add(m(r.type, "fee", e));
          switch (r.type) {
            case t.TRANSACTION_TYPE.CANCEL_LEASE:
            case t.TRANSACTION_TYPE.ALIAS:
            case t.TRANSACTION_TYPE.LEASE:
            case t.TRANSACTION_TYPE.SET_ASSET_SCRIPT:
            case t.TRANSACTION_TYPE.SET_SCRIPT:
            case t.TRANSACTION_TYPE.SPONSORSHIP:
              return u;
            case t.TRANSACTION_TYPE.REISSUE:
            case t.TRANSACTION_TYPE.BURN:
            case t.TRANSACTION_TYPE.TRANSFER:
              return u.add(d(r.assetId, e, s || []));
            case t.TRANSACTION_TYPE.MASS_TRANSFER:
              return u.add(_(r, e, s || []));
            case t.TRANSACTION_TYPE.DATA:
              return a.add(g(i, r, e));
            case t.TRANSACTION_TYPE.ISSUE:
              return h(r, a, e);
            default:
              throw new Error("Wrong transaction type!");
          }
        };
      }
      function f(e) {
        var t = e.quantity,
          r = e.precision,
          i = e.decimals,
          o = e.reissuable,
          s = new n.BigNumber(t).eq(1),
          a = new n.BigNumber(r || i || 0).eq(0);
        return !o && a && s;
      }
      function h(e, t, r) {
        var n = t.add(m(e.type, "fee", r));
        return f(e) ? t.add(m(e.type, "nftFee", r)) : n;
      }
      function d(e, t, r) {
        return e && r.includes(e)
          ? new n.BigNumber(t.smart_asset_extra_fee)
          : new n.BigNumber(0);
      }
      function g(e, t, r) {
        var i = m(t.type, "price_per_kb", r) || 0;
        return new n.BigNumber(i).mul(Math.floor(1 + (e.length - 1) / 1024));
      }
      function _(e, t, r) {
        var o = new n.BigNumber(m(e.type, "price_per_transfer", t) || 0),
          s = i.path(["transfers", "length"], e) || 0,
          a =
            e.assetId && r.includes(e.assetId)
              ? new n.BigNumber(t.smart_asset_extra_fee)
              : new n.BigNumber(0),
          u = new n.BigNumber(m(e.type, "min_price_step", t)),
          c = o.mul(s);
        return (
          c.div(u).isInt() || (c = c.div(u).roundTo(0, 0).mul(u)),
          c.add(a)
        );
      }
      function m(e, t, r) {
        var n = i.path(["calculate_fee_rules", e, t], r);
        return a(n) ? i.path(["calculate_fee_rules", "default", t], r) : n;
      }
      ((t.find = s),
        (t.isEmpty = a),
        (t.normalizeAssetId = u),
        (t.last = c),
        (t.TRANSACTION_TYPE = {
          GENESIS: 1,
          PAYMENT: 2,
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
          SCRIPT_INVOCATION: 16,
        }),
        (t.currentCreateOrderFactory = l),
        (t.currentFeeFactory = p));
    },
    5618: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TYPES = {
          GENESIS: 1,
          PAYMENT: 2,
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
        (t.ALIAS = {
          AVAILABLE_CHARS: "-.0123456789@_abcdefghijklmnopqrstuvwxyz",
          MAX_ALIAS_LENGTH: 30,
          MIN_ALIAS_LENGTH: 4,
        }));
    },
    5619: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10780);
      t.Asset = n.Asset;
      var i = r(10781);
      t.Candle = i.Candle;
      var o = r(10782);
      t.Money = o.Money;
      var s = r(10783);
      t.OrderPrice = s.OrderPrice;
      var a = r(10784);
      t.AssetPair = a.AssetPair;
      var u = r(5620);
      t.config = u.config;
    },
    5620: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        remapAsset: function (e) {
          return e;
        },
        remapCandle: function (e) {
          return e;
        },
      };
      (function (e) {
        function t(e) {
          return n[e];
        }
        function r(e, t) {
          "string" === typeof e
            ? (n[e] = t)
            : Object.keys(e).forEach(function (t) {
                return r(t, e[t]);
              });
        }
        ((e.get = t), (e.set = r));
      })(t.config || (t.config = {}));
    },
    5621: function (e, t, r) {
      !(function (e, r) {
        r(t);
      })(0, function (e) {
        "use strict";
        var t = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
          r = Math.ceil,
          n = Math.floor,
          i = "[BigNumber Error] ",
          o = i + "Number primitive has more than 15 significant digits: ",
          s = 1e14,
          a = 14,
          u = 9007199254740991,
          c = [
            1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
            1e13,
          ],
          l = 1e7,
          p = 1e9;
        function f(e) {
          var t = 0 | e;
          return e > 0 || e === t ? t : t - 1;
        }
        function h(e) {
          for (var t, r, n = 1, i = e.length, o = e[0] + ""; n < i; ) {
            for (t = e[n++] + "", r = a - t.length; r--; t = "0" + t);
            o += t;
          }
          for (i = o.length; 48 === o.charCodeAt(--i); );
          return o.slice(0, i + 1 || 1);
        }
        function d(e, t) {
          var r,
            n,
            i = e.c,
            o = t.c,
            s = e.s,
            a = t.s,
            u = e.e,
            c = t.e;
          if (!s || !a) return null;
          if (((r = i && !i[0]), (n = o && !o[0]), r || n))
            return r ? (n ? 0 : -a) : s;
          if (s != a) return s;
          if (((r = s < 0), (n = u == c), !i || !o))
            return n ? 0 : !i ^ r ? 1 : -1;
          if (!n) return (u > c) ^ r ? 1 : -1;
          for (a = (u = i.length) < (c = o.length) ? u : c, s = 0; s < a; s++)
            if (i[s] != o[s]) return (i[s] > o[s]) ^ r ? 1 : -1;
          return u == c ? 0 : (u > c) ^ r ? 1 : -1;
        }
        function g(e, t, r, o) {
          if (e < t || e > r || e !== n(e))
            throw Error(
              i +
                (o || "Argument") +
                ("number" == typeof e
                  ? e < t || e > r
                    ? " out of range: "
                    : " not an integer: "
                  : " not a primitive number: ") +
                String(e),
            );
        }
        function _(e) {
          var t = e.c.length - 1;
          return f(e.e / a) == t && e.c[t] % 2 != 0;
        }
        function m(e, t) {
          return (
            (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
            (t < 0 ? "e" : "e+") +
            t
          );
        }
        function y(e, t, r) {
          var n, i;
          if (t < 0) {
            for (i = r + "."; ++t; i += r);
            e = i + e;
          } else if (++t > (n = e.length)) {
            for (i = r, t -= n; --t; i += r);
            e += i;
          } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
          return e;
        }
        var E = (function e(E) {
            var S,
              v,
              N,
              A,
              b,
              T,
              O,
              R,
              I,
              P = (H.prototype = {
                constructor: H,
                toString: null,
                valueOf: null,
              }),
              w = new H(1),
              C = 20,
              D = 4,
              L = -7,
              M = 21,
              U = -1e7,
              B = 1e7,
              G = !1,
              F = 1,
              k = 0,
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
              Y = "0123456789abcdefghijklmnopqrstuvwxyz",
              j = !0;
            function H(e, r) {
              var i,
                s,
                c,
                l,
                p,
                f,
                h,
                d,
                _ = this;
              if (!(_ instanceof H)) return new H(e, r);
              if (null == r) {
                if (e && !0 === e._isBigNumber)
                  return (
                    (_.s = e.s),
                    void (!e.c || e.e > B
                      ? (_.c = _.e = null)
                      : e.e < U
                        ? (_.c = [(_.e = 0)])
                        : ((_.e = e.e), (_.c = e.c.slice())))
                  );
                if ((f = "number" == typeof e) && 0 * e == 0) {
                  if (((_.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                    for (l = 0, p = e; p >= 10; p /= 10, l++);
                    return void (l > B
                      ? (_.c = _.e = null)
                      : ((_.e = l), (_.c = [e])));
                  }
                  d = String(e);
                } else {
                  if (!t.test((d = String(e)))) return N(_, d, f);
                  _.s = 45 == d.charCodeAt(0) ? ((d = d.slice(1)), -1) : 1;
                }
                ((l = d.indexOf(".")) > -1 && (d = d.replace(".", "")),
                  (p = d.search(/e/i)) > 0
                    ? (l < 0 && (l = p),
                      (l += +d.slice(p + 1)),
                      (d = d.substring(0, p)))
                    : l < 0 && (l = d.length));
              } else {
                if ((g(r, 2, Y.length, "Base"), 10 == r && j))
                  return z((_ = new H(e)), C + _.e + 1, D);
                if (((d = String(e)), (f = "number" == typeof e))) {
                  if (0 * e != 0) return N(_, d, f, r);
                  if (
                    ((_.s = 1 / e < 0 ? ((d = d.slice(1)), -1) : 1),
                    H.DEBUG && d.replace(/^0\.0*|\./, "").length > 15)
                  )
                    throw Error(o + e);
                } else
                  _.s = 45 === d.charCodeAt(0) ? ((d = d.slice(1)), -1) : 1;
                for (i = Y.slice(0, r), l = p = 0, h = d.length; p < h; p++)
                  if (i.indexOf((s = d.charAt(p))) < 0) {
                    if ("." == s) {
                      if (p > l) {
                        l = h;
                        continue;
                      }
                    } else if (
                      !c &&
                      ((d == d.toUpperCase() && (d = d.toLowerCase())) ||
                        (d == d.toLowerCase() && (d = d.toUpperCase())))
                    ) {
                      ((c = !0), (p = -1), (l = 0));
                      continue;
                    }
                    return N(_, String(e), f, r);
                  }
                ((f = !1),
                  (l = (d = v(d, r, 10, _.s)).indexOf(".")) > -1
                    ? (d = d.replace(".", ""))
                    : (l = d.length));
              }
              for (p = 0; 48 === d.charCodeAt(p); p++);
              for (h = d.length; 48 === d.charCodeAt(--h); );
              if ((d = d.slice(p, ++h))) {
                if (((h -= p), f && H.DEBUG && h > 15 && (e > u || e !== n(e))))
                  throw Error(o + _.s * e);
                if ((l = l - p - 1) > B) _.c = _.e = null;
                else if (l < U) _.c = [(_.e = 0)];
                else {
                  if (
                    ((_.e = l),
                    (_.c = []),
                    (p = (l + 1) % a),
                    l < 0 && (p += a),
                    p < h)
                  ) {
                    for (p && _.c.push(+d.slice(0, p)), h -= a; p < h; )
                      _.c.push(+d.slice(p, (p += a)));
                    p = a - (d = d.slice(p)).length;
                  } else p -= h;
                  for (; p--; d += "0");
                  _.c.push(+d);
                }
              } else _.c = [(_.e = 0)];
            }
            function V(e, t, r, n) {
              var i, o, s, a, u;
              if ((null == r ? (r = D) : g(r, 0, 8), !e.c)) return e.toString();
              if (((i = e.c[0]), (s = e.e), null == t))
                ((u = h(e.c)),
                  (u =
                    1 == n || (2 == n && (s <= L || s >= M))
                      ? m(u, s)
                      : y(u, s, "0")));
              else if (
                ((o = (e = z(new H(e), t, r)).e),
                (a = (u = h(e.c)).length),
                1 == n || (2 == n && (t <= o || o <= L)))
              ) {
                for (; a < t; u += "0", a++);
                u = m(u, o);
              } else if (((t -= s), (u = y(u, o, "0")), o + 1 > a)) {
                if (--t > 0) for (u += "."; t--; u += "0");
              } else if ((t += o - a) > 0)
                for (o + 1 == a && (u += "."); t--; u += "0");
              return e.s < 0 && i ? "-" + u : u;
            }
            function q(e, t) {
              for (var r, n, i = 1, o = new H(e[0]); i < e.length; i++)
                (!(n = new H(e[i])).s ||
                  (r = d(o, n)) === t ||
                  (0 === r && o.s === t)) &&
                  (o = n);
              return o;
            }
            function W(e, t, r) {
              for (var n = 1, i = t.length; !t[--i]; t.pop());
              for (i = t[0]; i >= 10; i /= 10, n++);
              return (
                (r = n + r * a - 1) > B
                  ? (e.c = e.e = null)
                  : r < U
                    ? (e.c = [(e.e = 0)])
                    : ((e.e = r), (e.c = t)),
                e
              );
            }
            function z(e, t, i, o) {
              var u,
                l,
                p,
                f,
                h,
                d,
                g,
                _ = e.c,
                m = c;
              if (_) {
                e: {
                  for (u = 1, f = _[0]; f >= 10; f /= 10, u++);
                  if ((l = t - u) < 0)
                    ((l += a),
                      (p = t),
                      (h = _[(d = 0)]),
                      (g = n((h / m[u - p - 1]) % 10)));
                  else if ((d = r((l + 1) / a)) >= _.length) {
                    if (!o) break e;
                    for (; _.length <= d; _.push(0));
                    ((h = g = 0), (u = 1), (p = (l %= a) - a + 1));
                  } else {
                    for (h = f = _[d], u = 1; f >= 10; f /= 10, u++);
                    g =
                      (p = (l %= a) - a + u) < 0
                        ? 0
                        : n((h / m[u - p - 1]) % 10);
                  }
                  if (
                    ((o =
                      o ||
                      t < 0 ||
                      null != _[d + 1] ||
                      (p < 0 ? h : h % m[u - p - 1])),
                    (o =
                      i < 4
                        ? (g || o) && (0 == i || i == (e.s < 0 ? 3 : 2))
                        : g > 5 ||
                          (5 == g &&
                            (4 == i ||
                              o ||
                              (6 == i &&
                                ((l > 0
                                  ? p > 0
                                    ? h / m[u - p]
                                    : 0
                                  : _[d - 1]) %
                                  10) &
                                  1) ||
                              i == (e.s < 0 ? 8 : 7)))),
                    t < 1 || !_[0])
                  )
                    return (
                      (_.length = 0),
                      o
                        ? ((t -= e.e + 1),
                          (_[0] = m[(a - (t % a)) % a]),
                          (e.e = -t || 0))
                        : (_[0] = e.e = 0),
                      e
                    );
                  if (
                    (0 == l
                      ? ((_.length = d), (f = 1), d--)
                      : ((_.length = d + 1),
                        (f = m[a - l]),
                        (_[d] = p > 0 ? n((h / m[u - p]) % m[p]) * f : 0)),
                    o)
                  )
                    for (;;) {
                      if (0 == d) {
                        for (l = 1, p = _[0]; p >= 10; p /= 10, l++);
                        for (p = _[0] += f, f = 1; p >= 10; p /= 10, f++);
                        l != f && (e.e++, _[0] == s && (_[0] = 1));
                        break;
                      }
                      if (((_[d] += f), _[d] != s)) break;
                      ((_[d--] = 0), (f = 1));
                    }
                  for (l = _.length; 0 === _[--l]; _.pop());
                }
                e.e > B ? (e.c = e.e = null) : e.e < U && (e.c = [(e.e = 0)]);
              }
              return e;
            }
            function K(e) {
              var t,
                r = e.e;
              return null === r
                ? e.toString()
                : ((t = h(e.c)),
                  (t = r <= L || r >= M ? m(t, r) : y(t, r, "0")),
                  e.s < 0 ? "-" + t : t);
            }
            return (
              (H.clone = e),
              (H.ROUND_UP = 0),
              (H.ROUND_DOWN = 1),
              (H.ROUND_CEIL = 2),
              (H.ROUND_FLOOR = 3),
              (H.ROUND_HALF_UP = 4),
              (H.ROUND_HALF_DOWN = 5),
              (H.ROUND_HALF_EVEN = 6),
              (H.ROUND_HALF_CEIL = 7),
              (H.ROUND_HALF_FLOOR = 8),
              (H.EUCLID = 9),
              (H.config = H.set =
                function (e) {
                  var t, r;
                  if (null != e) {
                    if ("object" != typeof e)
                      throw Error(i + "Object expected: " + e);
                    if (
                      (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                        (g((r = e[t]), 0, p, t), (C = r)),
                      e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                        (g((r = e[t]), 0, 8, t), (D = r)),
                      e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                        ((r = e[t]) && r.pop
                          ? (g(r[0], -p, 0, t),
                            g(r[1], 0, p, t),
                            (L = r[0]),
                            (M = r[1]))
                          : (g(r, -p, p, t), (L = -(M = r < 0 ? -r : r)))),
                      e.hasOwnProperty((t = "RANGE")))
                    )
                      if ((r = e[t]) && r.pop)
                        (g(r[0], -p, -1, t),
                          g(r[1], 1, p, t),
                          (U = r[0]),
                          (B = r[1]));
                      else {
                        if ((g(r, -p, p, t), !r))
                          throw Error(i + t + " cannot be zero: " + r);
                        U = -(B = r < 0 ? -r : r);
                      }
                    if (e.hasOwnProperty((t = "CRYPTO"))) {
                      if ((r = e[t]) !== !!r)
                        throw Error(i + t + " not true or false: " + r);
                      if (r) {
                        if (
                          "undefined" == typeof crypto ||
                          !crypto ||
                          (!crypto.getRandomValues && !crypto.randomBytes)
                        )
                          throw ((G = !r), Error(i + "crypto unavailable"));
                        G = r;
                      } else G = r;
                    }
                    if (
                      (e.hasOwnProperty((t = "MODULO_MODE")) &&
                        (g((r = e[t]), 0, 9, t), (F = r)),
                      e.hasOwnProperty((t = "POW_PRECISION")) &&
                        (g((r = e[t]), 0, p, t), (k = r)),
                      e.hasOwnProperty((t = "FORMAT")))
                    ) {
                      if ("object" != typeof (r = e[t]))
                        throw Error(i + t + " not an object: " + r);
                      x = r;
                    }
                    if (e.hasOwnProperty((t = "ALPHABET"))) {
                      if (
                        "string" != typeof (r = e[t]) ||
                        /^.?$|[+\-.\s]|(.).*\1/.test(r)
                      )
                        throw Error(i + t + " invalid: " + r);
                      ((j = "0123456789" == r.slice(0, 10)), (Y = r));
                    }
                  }
                  return {
                    DECIMAL_PLACES: C,
                    ROUNDING_MODE: D,
                    EXPONENTIAL_AT: [L, M],
                    RANGE: [U, B],
                    CRYPTO: G,
                    MODULO_MODE: F,
                    POW_PRECISION: k,
                    FORMAT: x,
                    ALPHABET: Y,
                  };
                }),
              (H.isBigNumber = function (e) {
                if (!e || !0 !== e._isBigNumber) return !1;
                if (!H.DEBUG) return !0;
                var t,
                  r,
                  o = e.c,
                  u = e.e,
                  c = e.s;
                e: if ("[object Array]" == {}.toString.call(o)) {
                  if (
                    (1 === c || -1 === c) &&
                    u >= -p &&
                    u <= p &&
                    u === n(u)
                  ) {
                    if (0 === o[0]) {
                      if (0 === u && 1 === o.length) return !0;
                      break e;
                    }
                    if (
                      ((t = (u + 1) % a) < 1 && (t += a),
                      String(o[0]).length == t)
                    ) {
                      for (t = 0; t < o.length; t++)
                        if ((r = o[t]) < 0 || r >= s || r !== n(r)) break e;
                      if (0 !== r) return !0;
                    }
                  }
                } else if (
                  null === o &&
                  null === u &&
                  (null === c || 1 === c || -1 === c)
                )
                  return !0;
                throw Error(i + "Invalid BigNumber: " + e);
              }),
              (H.maximum = H.max =
                function () {
                  return q(arguments, -1);
                }),
              (H.minimum = H.min =
                function () {
                  return q(arguments, 1);
                }),
              (H.random =
                ((A =
                  (9007199254740992 * Math.random()) & 2097151
                    ? function () {
                        return n(9007199254740992 * Math.random());
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      }),
                function (e) {
                  var t,
                    o,
                    s,
                    u,
                    l,
                    f = 0,
                    h = [],
                    d = new H(w);
                  if ((null == e ? (e = C) : g(e, 0, p), (u = r(e / a)), G))
                    if (crypto.getRandomValues) {
                      for (
                        t = crypto.getRandomValues(new Uint32Array((u *= 2)));
                        f < u;
                      )
                        (l = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15
                          ? ((o = crypto.getRandomValues(new Uint32Array(2))),
                            (t[f] = o[0]),
                            (t[f + 1] = o[1]))
                          : (h.push(l % 1e14), (f += 2));
                      f = u / 2;
                    } else {
                      if (!crypto.randomBytes)
                        throw ((G = !1), Error(i + "crypto unavailable"));
                      for (t = crypto.randomBytes((u *= 7)); f < u; )
                        (l =
                          281474976710656 * (31 & t[f]) +
                          1099511627776 * t[f + 1] +
                          4294967296 * t[f + 2] +
                          16777216 * t[f + 3] +
                          (t[f + 4] << 16) +
                          (t[f + 5] << 8) +
                          t[f + 6]) >= 9e15
                          ? crypto.randomBytes(7).copy(t, f)
                          : (h.push(l % 1e14), (f += 7));
                      f = u / 7;
                    }
                  if (!G)
                    for (; f < u; ) (l = A()) < 9e15 && (h[f++] = l % 1e14);
                  for (
                    u = h[--f],
                      e %= a,
                      u && e && ((l = c[a - e]), (h[f] = n(u / l) * l));
                    0 === h[f];
                    h.pop(), f--
                  );
                  if (f < 0) h = [(s = 0)];
                  else {
                    for (s = -1; 0 === h[0]; h.splice(0, 1), s -= a);
                    for (f = 1, l = h[0]; l >= 10; l /= 10, f++);
                    f < a && (s -= a - f);
                  }
                  return ((d.e = s), (d.c = h), d);
                })),
              (H.sum = function () {
                for (var e = 1, t = arguments, r = new H(t[0]); e < t.length; )
                  r = r.plus(t[e++]);
                return r;
              }),
              (v = (function () {
                function e(e, t, r, n) {
                  for (var i, o, s = [0], a = 0, u = e.length; a < u; ) {
                    for (o = s.length; o--; s[o] *= t);
                    for (
                      s[0] += n.indexOf(e.charAt(a++)), i = 0;
                      i < s.length;
                      i++
                    )
                      s[i] > r - 1 &&
                        (null == s[i + 1] && (s[i + 1] = 0),
                        (s[i + 1] += (s[i] / r) | 0),
                        (s[i] %= r));
                  }
                  return s.reverse();
                }
                return function (t, r, n, i, o) {
                  var s,
                    a,
                    u,
                    c,
                    l,
                    p,
                    f,
                    d,
                    g = t.indexOf("."),
                    _ = C,
                    m = D;
                  for (
                    g >= 0 &&
                      ((c = k),
                      (k = 0),
                      (t = t.replace(".", "")),
                      (p = (d = new H(r)).pow(t.length - g)),
                      (k = c),
                      (d.c = e(y(h(p.c), p.e, "0"), 10, n, "0123456789")),
                      (d.e = d.c.length)),
                      u = c =
                        (f = e(
                          t,
                          r,
                          n,
                          o ? ((s = Y), "0123456789") : ((s = "0123456789"), Y),
                        )).length;
                    0 == f[--c];
                    f.pop()
                  );
                  if (!f[0]) return s.charAt(0);
                  if (
                    (g < 0
                      ? --u
                      : ((p.c = f),
                        (p.e = u),
                        (p.s = i),
                        (f = (p = S(p, d, _, m, n)).c),
                        (l = p.r),
                        (u = p.e)),
                    (g = f[(a = u + _ + 1)]),
                    (c = n / 2),
                    (l = l || a < 0 || null != f[a + 1]),
                    (l =
                      m < 4
                        ? (null != g || l) && (0 == m || m == (p.s < 0 ? 3 : 2))
                        : g > c ||
                          (g == c &&
                            (4 == m ||
                              l ||
                              (6 == m && 1 & f[a - 1]) ||
                              m == (p.s < 0 ? 8 : 7)))),
                    a < 1 || !f[0])
                  )
                    t = l ? y(s.charAt(1), -_, s.charAt(0)) : s.charAt(0);
                  else {
                    if (((f.length = a), l))
                      for (--n; ++f[--a] > n; )
                        ((f[a] = 0), a || (++u, (f = [1].concat(f))));
                    for (c = f.length; !f[--c]; );
                    for (g = 0, t = ""; g <= c; t += s.charAt(f[g++]));
                    t = y(t, u, s.charAt(0));
                  }
                  return t;
                };
              })()),
              (S = (function () {
                function e(e, t, r) {
                  var n,
                    i,
                    o,
                    s,
                    a = 0,
                    u = e.length,
                    c = t % l,
                    p = (t / l) | 0;
                  for (e = e.slice(); u--; )
                    ((a =
                      (((i =
                        c * (o = e[u] % l) +
                        ((n = p * o + (s = (e[u] / l) | 0) * c) % l) * l +
                        a) /
                        r) |
                        0) +
                      ((n / l) | 0) +
                      p * s),
                      (e[u] = i % r));
                  return (a && (e = [a].concat(e)), e);
                }
                function t(e, t, r, n) {
                  var i, o;
                  if (r != n) o = r > n ? 1 : -1;
                  else
                    for (i = o = 0; i < r; i++)
                      if (e[i] != t[i]) {
                        o = e[i] > t[i] ? 1 : -1;
                        break;
                      }
                  return o;
                }
                function r(e, t, r, n) {
                  for (var i = 0; r--; )
                    ((e[r] -= i),
                      (i = e[r] < t[r] ? 1 : 0),
                      (e[r] = i * n + e[r] - t[r]));
                  for (; !e[0] && e.length > 1; e.splice(0, 1));
                }
                return function (i, o, u, c, l) {
                  var p,
                    h,
                    d,
                    g,
                    _,
                    m,
                    y,
                    E,
                    S,
                    v,
                    N,
                    A,
                    b,
                    T,
                    O,
                    R,
                    I,
                    P = i.s == o.s ? 1 : -1,
                    w = i.c,
                    C = o.c;
                  if (!(w && w[0] && C && C[0]))
                    return new H(
                      i.s && o.s && (w ? !C || w[0] != C[0] : C)
                        ? (w && 0 == w[0]) || !C
                          ? 0 * P
                          : P / 0
                        : NaN,
                    );
                  for (
                    S = (E = new H(P)).c = [],
                      P = u + (h = i.e - o.e) + 1,
                      l ||
                        ((l = s),
                        (h = f(i.e / a) - f(o.e / a)),
                        (P = (P / a) | 0)),
                      d = 0;
                    C[d] == (w[d] || 0);
                    d++
                  );
                  if ((C[d] > (w[d] || 0) && h--, P < 0)) (S.push(1), (g = !0));
                  else {
                    for (
                      T = w.length,
                        R = C.length,
                        d = 0,
                        P += 2,
                        (_ = n(l / (C[0] + 1))) > 1 &&
                          ((C = e(C, _, l)),
                          (w = e(w, _, l)),
                          (R = C.length),
                          (T = w.length)),
                        b = R,
                        N = (v = w.slice(0, R)).length;
                      N < R;
                      v[N++] = 0
                    );
                    ((I = C.slice()),
                      (I = [0].concat(I)),
                      (O = C[0]),
                      C[1] >= l / 2 && O++);
                    do {
                      if (((_ = 0), (p = t(C, v, R, N)) < 0)) {
                        if (
                          ((A = v[0]),
                          R != N && (A = A * l + (v[1] || 0)),
                          (_ = n(A / O)) > 1)
                        )
                          for (
                            _ >= l && (_ = l - 1),
                              y = (m = e(C, _, l)).length,
                              N = v.length;
                            1 == t(m, v, y, N);
                          )
                            (_--,
                              r(m, R < y ? I : C, y, l),
                              (y = m.length),
                              (p = 1));
                        else
                          (0 == _ && (p = _ = 1), (y = (m = C.slice()).length));
                        if (
                          (y < N && (m = [0].concat(m)),
                          r(v, m, N, l),
                          (N = v.length),
                          -1 == p)
                        )
                          for (; t(C, v, R, N) < 1; )
                            (_++, r(v, R < N ? I : C, N, l), (N = v.length));
                      } else 0 === p && (_++, (v = [0]));
                      ((S[d++] = _),
                        v[0] ? (v[N++] = w[b] || 0) : ((v = [w[b]]), (N = 1)));
                    } while ((b++ < T || null != v[0]) && P--);
                    ((g = null != v[0]), S[0] || S.splice(0, 1));
                  }
                  if (l == s) {
                    for (d = 1, P = S[0]; P >= 10; P /= 10, d++);
                    z(E, u + (E.e = d + h * a - 1) + 1, c, g);
                  } else ((E.e = h), (E.r = +g));
                  return E;
                };
              })()),
              (b = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
              (T = /^([^.]+)\.$/),
              (O = /^\.([^.]+)$/),
              (R = /^-?(Infinity|NaN)$/),
              (I = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
              (N = function (e, t, r, n) {
                var o,
                  s = r ? t : t.replace(I, "");
                if (R.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1;
                else {
                  if (
                    !r &&
                    ((s = s.replace(b, function (e, t, r) {
                      return (
                        (o =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        n && n != o ? e : t
                      );
                    })),
                    n && ((o = n), (s = s.replace(T, "$1").replace(O, "0.$1"))),
                    t != s)
                  )
                    return new H(s, o);
                  if (H.DEBUG)
                    throw Error(
                      i + "Not a" + (n ? " base " + n : "") + " number: " + t,
                    );
                  e.s = null;
                }
                e.c = e.e = null;
              }),
              (P.absoluteValue = P.abs =
                function () {
                  var e = new H(this);
                  return (e.s < 0 && (e.s = 1), e);
                }),
              (P.comparedTo = function (e, t) {
                return d(this, new H(e, t));
              }),
              (P.decimalPlaces = P.dp =
                function (e, t) {
                  var r,
                    n,
                    i,
                    o = this;
                  if (null != e)
                    return (
                      g(e, 0, p),
                      null == t ? (t = D) : g(t, 0, 8),
                      z(new H(o), e + o.e + 1, t)
                    );
                  if (!(r = o.c)) return null;
                  if (
                    ((n = ((i = r.length - 1) - f(this.e / a)) * a), (i = r[i]))
                  )
                    for (; i % 10 == 0; i /= 10, n--);
                  return (n < 0 && (n = 0), n);
                }),
              (P.dividedBy = P.div =
                function (e, t) {
                  return S(this, new H(e, t), C, D);
                }),
              (P.dividedToIntegerBy = P.idiv =
                function (e, t) {
                  return S(this, new H(e, t), 0, 1);
                }),
              (P.exponentiatedBy = P.pow =
                function (e, t) {
                  var o,
                    s,
                    u,
                    c,
                    l,
                    p,
                    f,
                    h,
                    d = this;
                  if ((e = new H(e)).c && !e.isInteger())
                    throw Error(i + "Exponent not an integer: " + K(e));
                  if (
                    (null != t && (t = new H(t)),
                    (l = e.e > 14),
                    !d.c ||
                      !d.c[0] ||
                      (1 == d.c[0] && !d.e && 1 == d.c.length) ||
                      !e.c ||
                      !e.c[0])
                  )
                    return (
                      (h = new H(
                        Math.pow(+K(d), l ? e.s * (2 - _(e)) : +K(e)),
                      )),
                      t ? h.mod(t) : h
                    );
                  if (((p = e.s < 0), t)) {
                    if (t.c ? !t.c[0] : !t.s) return new H(NaN);
                    (s = !p && d.isInteger() && t.isInteger()) &&
                      (d = d.mod(t));
                  } else {
                    if (
                      e.e > 9 &&
                      (d.e > 0 ||
                        d.e < -1 ||
                        (0 == d.e
                          ? d.c[0] > 1 || (l && d.c[1] >= 24e7)
                          : d.c[0] < 8e13 || (l && d.c[0] <= 9999975e7)))
                    )
                      return (
                        (c = d.s < 0 && _(e) ? -0 : 0),
                        d.e > -1 && (c = 1 / c),
                        new H(p ? 1 / c : c)
                      );
                    k && (c = r(k / a + 2));
                  }
                  for (
                    l
                      ? ((o = new H(0.5)), p && (e.s = 1), (f = _(e)))
                      : (f = (u = Math.abs(+K(e))) % 2),
                      h = new H(w);
                    ;
                  ) {
                    if (f) {
                      if (!(h = h.times(d)).c) break;
                      c
                        ? h.c.length > c && (h.c.length = c)
                        : s && (h = h.mod(t));
                    }
                    if (u) {
                      if (0 === (u = n(u / 2))) break;
                      f = u % 2;
                    } else if ((z((e = e.times(o)), e.e + 1, 1), e.e > 14))
                      f = _(e);
                    else {
                      if (0 == (u = +K(e))) break;
                      f = u % 2;
                    }
                    ((d = d.times(d)),
                      c
                        ? d.c && d.c.length > c && (d.c.length = c)
                        : s && (d = d.mod(t)));
                  }
                  return s
                    ? h
                    : (p && (h = w.div(h)),
                      t ? h.mod(t) : c ? z(h, k, D, void 0) : h);
                }),
              (P.integerValue = function (e) {
                var t = new H(this);
                return (null == e ? (e = D) : g(e, 0, 8), z(t, t.e + 1, e));
              }),
              (P.isEqualTo = P.eq =
                function (e, t) {
                  return 0 === d(this, new H(e, t));
                }),
              (P.isFinite = function () {
                return !!this.c;
              }),
              (P.isGreaterThan = P.gt =
                function (e, t) {
                  return d(this, new H(e, t)) > 0;
                }),
              (P.isGreaterThanOrEqualTo = P.gte =
                function (e, t) {
                  return 1 === (t = d(this, new H(e, t))) || 0 === t;
                }),
              (P.isInteger = function () {
                return !!this.c && f(this.e / a) > this.c.length - 2;
              }),
              (P.isLessThan = P.lt =
                function (e, t) {
                  return d(this, new H(e, t)) < 0;
                }),
              (P.isLessThanOrEqualTo = P.lte =
                function (e, t) {
                  return -1 === (t = d(this, new H(e, t))) || 0 === t;
                }),
              (P.isNaN = function () {
                return !this.s;
              }),
              (P.isNegative = function () {
                return this.s < 0;
              }),
              (P.isPositive = function () {
                return this.s > 0;
              }),
              (P.isZero = function () {
                return !!this.c && 0 == this.c[0];
              }),
              (P.minus = function (e, t) {
                var r,
                  n,
                  i,
                  o,
                  u = this,
                  c = u.s;
                if (((t = (e = new H(e, t)).s), !c || !t)) return new H(NaN);
                if (c != t) return ((e.s = -t), u.plus(e));
                var l = u.e / a,
                  p = e.e / a,
                  h = u.c,
                  d = e.c;
                if (!l || !p) {
                  if (!h || !d) return h ? ((e.s = -t), e) : new H(d ? u : NaN);
                  if (!h[0] || !d[0])
                    return d[0]
                      ? ((e.s = -t), e)
                      : new H(h[0] ? u : 3 == D ? -0 : 0);
                }
                if (((l = f(l)), (p = f(p)), (h = h.slice()), (c = l - p))) {
                  for (
                    (o = c < 0) ? ((c = -c), (i = h)) : ((p = l), (i = d)),
                      i.reverse(),
                      t = c;
                    t--;
                    i.push(0)
                  );
                  i.reverse();
                } else
                  for (
                    n = (o = (c = h.length) < (t = d.length)) ? c : t,
                      c = t = 0;
                    t < n;
                    t++
                  )
                    if (h[t] != d[t]) {
                      o = h[t] < d[t];
                      break;
                    }
                if (
                  (o && ((i = h), (h = d), (d = i), (e.s = -e.s)),
                  (t = (n = d.length) - (r = h.length)) > 0)
                )
                  for (; t--; h[r++] = 0);
                for (t = s - 1; n > c; ) {
                  if (h[--n] < d[n]) {
                    for (r = n; r && !h[--r]; h[r] = t);
                    (--h[r], (h[n] += s));
                  }
                  h[n] -= d[n];
                }
                for (; 0 == h[0]; h.splice(0, 1), --p);
                return h[0]
                  ? W(e, h, p)
                  : ((e.s = 3 == D ? -1 : 1), (e.c = [(e.e = 0)]), e);
              }),
              (P.modulo = P.mod =
                function (e, t) {
                  var r,
                    n,
                    i = this;
                  return (
                    (e = new H(e, t)),
                    !i.c || !e.s || (e.c && !e.c[0])
                      ? new H(NaN)
                      : !e.c || (i.c && !i.c[0])
                        ? new H(i)
                        : (9 == F
                            ? ((n = e.s),
                              (e.s = 1),
                              (r = S(i, e, 0, 3)),
                              (e.s = n),
                              (r.s *= n))
                            : (r = S(i, e, 0, F)),
                          (e = i.minus(r.times(e))).c[0] ||
                            1 != F ||
                            (e.s = i.s),
                          e)
                  );
                }),
              (P.multipliedBy = P.times =
                function (e, t) {
                  var r,
                    n,
                    i,
                    o,
                    u,
                    c,
                    p,
                    h,
                    d,
                    g,
                    _,
                    m,
                    y,
                    E,
                    S,
                    v = this,
                    N = v.c,
                    A = (e = new H(e, t)).c;
                  if (!(N && A && N[0] && A[0]))
                    return (
                      !v.s || !e.s || (N && !N[0] && !A) || (A && !A[0] && !N)
                        ? (e.c = e.e = e.s = null)
                        : ((e.s *= v.s),
                          N && A
                            ? ((e.c = [0]), (e.e = 0))
                            : (e.c = e.e = null)),
                      e
                    );
                  for (
                    n = f(v.e / a) + f(e.e / a),
                      e.s *= v.s,
                      (p = N.length) < (g = A.length) &&
                        ((y = N), (N = A), (A = y), (i = p), (p = g), (g = i)),
                      i = p + g,
                      y = [];
                    i--;
                    y.push(0)
                  );
                  for (E = s, S = l, i = g; --i >= 0; ) {
                    for (
                      r = 0, _ = A[i] % S, m = (A[i] / S) | 0, o = i + (u = p);
                      o > i;
                    )
                      ((r =
                        (((h =
                          _ * (h = N[--u] % S) +
                          ((c = m * h + (d = (N[u] / S) | 0) * _) % S) * S +
                          y[o] +
                          r) /
                          E) |
                          0) +
                        ((c / S) | 0) +
                        m * d),
                        (y[o--] = h % E));
                    y[o] = r;
                  }
                  return (r ? ++n : y.splice(0, 1), W(e, y, n));
                }),
              (P.negated = function () {
                var e = new H(this);
                return ((e.s = -e.s || null), e);
              }),
              (P.plus = function (e, t) {
                var r,
                  n = this,
                  i = n.s;
                if (((t = (e = new H(e, t)).s), !i || !t)) return new H(NaN);
                if (i != t) return ((e.s = -t), n.minus(e));
                var o = n.e / a,
                  u = e.e / a,
                  c = n.c,
                  l = e.c;
                if (!o || !u) {
                  if (!c || !l) return new H(i / 0);
                  if (!c[0] || !l[0]) return l[0] ? e : new H(c[0] ? n : 0 * i);
                }
                if (((o = f(o)), (u = f(u)), (c = c.slice()), (i = o - u))) {
                  for (
                    i > 0 ? ((u = o), (r = l)) : ((i = -i), (r = c)),
                      r.reverse();
                    i--;
                    r.push(0)
                  );
                  r.reverse();
                }
                for (
                  (i = c.length) - (t = l.length) < 0 &&
                    ((r = l), (l = c), (c = r), (t = i)),
                    i = 0;
                  t;
                )
                  ((i = ((c[--t] = c[t] + l[t] + i) / s) | 0),
                    (c[t] = s === c[t] ? 0 : c[t] % s));
                return (i && ((c = [i].concat(c)), ++u), W(e, c, u));
              }),
              (P.precision = P.sd =
                function (e, t) {
                  var r,
                    n,
                    i,
                    o = this;
                  if (null != e && e !== !!e)
                    return (
                      g(e, 1, p),
                      null == t ? (t = D) : g(t, 0, 8),
                      z(new H(o), e, t)
                    );
                  if (!(r = o.c)) return null;
                  if (((n = (i = r.length - 1) * a + 1), (i = r[i]))) {
                    for (; i % 10 == 0; i /= 10, n--);
                    for (i = r[0]; i >= 10; i /= 10, n++);
                  }
                  return (e && o.e + 1 > n && (n = o.e + 1), n);
                }),
              (P.shiftedBy = function (e) {
                return (g(e, -u, u), this.times("1e" + e));
              }),
              (P.squareRoot = P.sqrt =
                function () {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    o = this,
                    s = o.c,
                    a = o.s,
                    u = o.e,
                    c = C + 4,
                    l = new H("0.5");
                  if (1 !== a || !s || !s[0])
                    return new H(
                      !a || (a < 0 && (!s || s[0])) ? NaN : s ? o : 1 / 0,
                    );
                  if (
                    (0 == (a = Math.sqrt(+K(o))) || a == 1 / 0
                      ? (((t = h(s)).length + u) % 2 == 0 && (t += "0"),
                        (a = Math.sqrt(+t)),
                        (u = f((u + 1) / 2) - (u < 0 || u % 2)),
                        (r = new H(
                          (t =
                            a == 1 / 0
                              ? "5e" + u
                              : (t = a.toExponential()).slice(
                                  0,
                                  t.indexOf("e") + 1,
                                ) + u),
                        )))
                      : (r = new H(a + "")),
                    r.c[0])
                  )
                    for ((a = (u = r.e) + c) < 3 && (a = 0); ; )
                      if (
                        ((i = r),
                        (r = l.times(i.plus(S(o, i, c, 1)))),
                        h(i.c).slice(0, a) === (t = h(r.c)).slice(0, a))
                      ) {
                        if (
                          (r.e < u && --a,
                          "9999" != (t = t.slice(a - 3, a + 1)) &&
                            (n || "4999" != t))
                        ) {
                          (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (z(r, r.e + C + 2, 1), (e = !r.times(r).eq(o)));
                          break;
                        }
                        if (!n && (z(i, i.e + C + 2, 0), i.times(i).eq(o))) {
                          r = i;
                          break;
                        }
                        ((c += 4), (a += 4), (n = 1));
                      }
                  return z(r, r.e + C + 1, D, e);
                }),
              (P.toExponential = function (e, t) {
                return (null != e && (g(e, 0, p), e++), V(this, e, t, 1));
              }),
              (P.toFixed = function (e, t) {
                return (
                  null != e && (g(e, 0, p), (e = e + this.e + 1)),
                  V(this, e, t)
                );
              }),
              (P.toFormat = function (e, t, r) {
                var n,
                  o = this;
                if (null == r)
                  null != e && t && "object" == typeof t
                    ? ((r = t), (t = null))
                    : e && "object" == typeof e
                      ? ((r = e), (e = t = null))
                      : (r = x);
                else if ("object" != typeof r)
                  throw Error(i + "Argument not an object: " + r);
                if (((n = o.toFixed(e, t)), o.c)) {
                  var s,
                    a = n.split("."),
                    u = +r.groupSize,
                    c = +r.secondaryGroupSize,
                    l = r.groupSeparator || "",
                    p = a[0],
                    f = a[1],
                    h = o.s < 0,
                    d = h ? p.slice(1) : p,
                    g = d.length;
                  if (
                    (c && ((s = u), (u = c), (c = s), (g -= s)), u > 0 && g > 0)
                  ) {
                    for (s = g % u || u, p = d.substr(0, s); s < g; s += u)
                      p += l + d.substr(s, u);
                    (c > 0 && (p += l + d.slice(s)), h && (p = "-" + p));
                  }
                  n = f
                    ? p +
                      (r.decimalSeparator || "") +
                      ((c = +r.fractionGroupSize)
                        ? f.replace(
                            new RegExp("\\d{" + c + "}\\B", "g"),
                            "$&" + (r.fractionGroupSeparator || ""),
                          )
                        : f)
                    : p;
                }
                return (r.prefix || "") + n + (r.suffix || "");
              }),
              (P.toFraction = function (e) {
                var t,
                  r,
                  n,
                  o,
                  s,
                  u,
                  l,
                  p,
                  f,
                  d,
                  g,
                  _,
                  m = this,
                  y = m.c;
                if (
                  null != e &&
                  ((!(l = new H(e)).isInteger() && (l.c || 1 !== l.s)) ||
                    l.lt(w))
                )
                  throw Error(
                    i +
                      "Argument " +
                      (l.isInteger() ? "out of range: " : "not an integer: ") +
                      K(l),
                  );
                if (!y) return new H(m);
                for (
                  t = new H(w),
                    f = r = new H(w),
                    n = p = new H(w),
                    _ = h(y),
                    s = t.e = _.length - m.e - 1,
                    t.c[0] = c[(u = s % a) < 0 ? a + u : u],
                    e = !e || l.comparedTo(t) > 0 ? (s > 0 ? t : f) : l,
                    u = B,
                    B = 1 / 0,
                    l = new H(_),
                    p.c[0] = 0;
                  (d = S(l, t, 0, 1)),
                    1 != (o = r.plus(d.times(n))).comparedTo(e);
                )
                  ((r = n),
                    (n = o),
                    (f = p.plus(d.times((o = f)))),
                    (p = o),
                    (t = l.minus(d.times((o = t)))),
                    (l = o));
                return (
                  (o = S(e.minus(r), n, 0, 1)),
                  (p = p.plus(o.times(f))),
                  (r = r.plus(o.times(n))),
                  (p.s = f.s = m.s),
                  (g =
                    S(f, n, (s *= 2), D)
                      .minus(m)
                      .abs()
                      .comparedTo(S(p, r, s, D).minus(m).abs()) < 1
                      ? [f, n]
                      : [p, r]),
                  (B = u),
                  g
                );
              }),
              (P.toNumber = function () {
                return +K(this);
              }),
              (P.toPrecision = function (e, t) {
                return (null != e && g(e, 1, p), V(this, e, t, 2));
              }),
              (P.toString = function (e) {
                var t,
                  r = this,
                  n = r.s,
                  i = r.e;
                return (
                  null === i
                    ? n
                      ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                      : (t = "NaN")
                    : (null == e
                        ? (t =
                            i <= L || i >= M ? m(h(r.c), i) : y(h(r.c), i, "0"))
                        : 10 === e && j
                          ? (t = y(
                              h((r = z(new H(r), C + i + 1, D)).c),
                              r.e,
                              "0",
                            ))
                          : (g(e, 2, Y.length, "Base"),
                            (t = v(y(h(r.c), i, "0"), 10, e, n, !0))),
                      n < 0 && r.c[0] && (t = "-" + t)),
                  t
                );
              }),
              (P.valueOf = P.toJSON =
                function () {
                  return K(this);
                }),
              (P._isBigNumber = !0),
              (P[Symbol.toStringTag] = "BigNumber"),
              (P[Symbol.for("nodejs.util.inspect.custom")] = P.valueOf),
              null != E && H.set(E),
              H
            );
          })(),
          S = function () {
            return (S =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }).apply(this, arguments);
          },
          v = (function () {
            function e() {
              ((this.format = e.DEFAULT_FORMAT),
                E.config({ FORMAT: this.format }));
            }
            return (
              (e.prototype.set = function (e) {
                ("FORMAT" in e &&
                  ((this.format = S(S({}, this.format), e.FORMAT)),
                  (e.FORMAT = this.format)),
                  E.config(e));
              }),
              (e.DEFAULT_FORMAT = {
                prefix: "",
                decimalSeparator: ".",
                groupSeparator: ",",
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: " ",
                fractionGroupSize: 0,
                suffix: "",
              }),
              e
            );
          })();
        ((e.BigNumber = (function () {
          function e(t) {
            "object" == typeof t && e.isBigNumber(t)
              ? (this.bn = t.bn.plus(0))
              : (this.bn = e.toBigNumberJs(t));
          }
          return (
            (e.prototype.clone = function () {
              return new e(this);
            }),
            (e.prototype.add = function (t) {
              return new e(this.bn.plus(e.toBigNumberJs(t)));
            }),
            (e.prototype.sub = function (t) {
              return new e(this.bn.minus(e.toBigNumberJs(t)));
            }),
            (e.prototype.mul = function (t) {
              return new e(this.bn.times(e.toBigNumberJs(t)));
            }),
            (e.prototype.div = function (t) {
              return new e(this.bn.div(e.toBigNumberJs(t)));
            }),
            (e.prototype.pow = function (t) {
              return new e(this.bn.pow(e.toBigNumberJs(t)));
            }),
            (e.prototype.sqrt = function () {
              return new e(this.bn.sqrt());
            }),
            (e.prototype.abs = function () {
              return new e(this.bn.abs());
            }),
            (e.prototype.mod = function (t) {
              return new e(this.bn.mod(e.toBigNumberJs(t)));
            }),
            (e.prototype.roundTo = function (t, r) {
              return (
                void 0 === t && (t = 0),
                void 0 === r && (r = 4),
                new e(this.bn.dp(t || 0, r))
              );
            }),
            (e.prototype.eq = function (t) {
              return this.bn.eq(e.toBigNumberJs(t));
            }),
            (e.prototype.lt = function (t) {
              return this.bn.lt(e.toBigNumberJs(t));
            }),
            (e.prototype.gt = function (t) {
              return this.bn.gt(e.toBigNumberJs(t));
            }),
            (e.prototype.lte = function (t) {
              return this.bn.lte(e.toBigNumberJs(t));
            }),
            (e.prototype.gte = function (t) {
              return this.bn.gte(e.toBigNumberJs(t));
            }),
            (e.prototype.isNaN = function () {
              return this.bn.isNaN();
            }),
            (e.prototype.isFinite = function () {
              return this.bn.isFinite();
            }),
            (e.prototype.isZero = function () {
              return this.eq(0);
            }),
            (e.prototype.isPositive = function () {
              return this.gt(0);
            }),
            (e.prototype.isNegative = function () {
              return this.lt(0);
            }),
            (e.prototype.isInt = function () {
              return this.bn.isInteger();
            }),
            (e.prototype.getDecimalsCount = function () {
              return this.bn.dp();
            }),
            (e.prototype.isEven = function () {
              return this.mod(2).eq(0);
            }),
            (e.prototype.isOdd = function () {
              return !this.isEven();
            }),
            (e.prototype.isInSignedRange = function () {
              return this.gte(e.MIN_VALUE) && this.lte(e.MAX_VALUE);
            }),
            (e.prototype.isInUnsignedRange = function () {
              return (
                this.gte(e.MIN_UNSIGNED_VALUE) && this.lte(e.MAX_UNSIGNED_VALUE)
              );
            }),
            (e.prototype.toFormat = function (e, t, r) {
              return this.bn.toFormat(e, t, r);
            }),
            (e.prototype.toFixed = function (e, t) {
              return null == e ? this.bn.toFixed() : this.bn.toFixed(e, t);
            }),
            (e.prototype.toString = function (e) {
              return e ? this.bn.toString(e) : this.toFixed();
            }),
            (e.prototype.toNumber = function () {
              return this.bn.toNumber();
            }),
            (e.prototype.toJSON = function () {
              return this.bn.toFixed();
            }),
            (e.prototype.valueOf = function () {
              return this.bn.valueOf();
            }),
            (e.prototype.toBytes = function (t) {
              var r = void 0 === t ? {} : t,
                n = r.isSigned,
                i = void 0 === n || n,
                o = r.isLong,
                s = void 0 === o || o;
              if (!this.isInt())
                throw new Error("Cant create bytes from number with decimals!");
              if (!i && this.isNegative())
                throw new Error(
                  "Cant create bytes from negative number in signed mode!",
                );
              if (s && i && !this.isInSignedRange())
                throw new Error("Number is not from signed numbers range");
              if (s && !i && !this.isInUnsignedRange())
                throw new Error("Number is not from unsigned numbers range");
              var a = i && this.isNegative(),
                u = a ? "1" : "0",
                c = this.bn.plus(u).toString(2).replace("-", ""),
                l = s ? 64 : 8 * Math.ceil(c.length / 8),
                p = e._toLength(l, c).split(""),
                f = [];
              do {
                f.push(parseInt(p.splice(0, 8).join(""), 2));
              } while (p.length);
              return a
                ? Uint8Array.from(
                    f.map(function (e) {
                      return 255 - e;
                    }),
                  )
                : Uint8Array.from(f);
            }),
            (e.fromBytes = function (t, r) {
              var n = void 0 === r ? {} : r,
                i = n.isSigned,
                o = void 0 === i || i,
                s = n.isLong,
                a = void 0 === s || s;
              if (a && 8 !== t.length)
                throw new Error(
                  "Wrong bytes length! Minimal length is 8 byte!",
                );
              t = (!a && t.length > 0) || a ? t : [0];
              var u = !!o && t[0] > 127,
                c = Array.from(t)
                  .map(function (e) {
                    return u ? 255 - e : e;
                  })
                  .map(function (t) {
                    return e._toLength(8, t.toString(2));
                  })
                  .join(""),
                l = new e(new E(c, 2));
              return u ? l.mul(-1).sub(1) : l;
            }),
            (e.max = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return e.toBigNumber(t).reduce(function (e, t) {
                return e.gte(t) ? e : t;
              });
            }),
            (e.min = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return e.toBigNumber(t).reduce(function (e, t) {
                return e.lte(t) ? e : t;
              });
            }),
            (e.sum = function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return e.toBigNumber(t).reduce(function (e, t) {
                return e.add(t);
              });
            }),
            (e.isBigNumber = function (t) {
              return (
                t &&
                "object" == typeof t &&
                (t instanceof e ||
                  Object.entries(e.prototype)
                    .filter(function (e) {
                      return "_" !== e[0].charAt(0);
                    })
                    .every(function (e) {
                      var r = e[0],
                        n = e[1];
                      return r in t && typeof n == typeof t[r];
                    }))
              );
            }),
            (e.toBigNumber = function (t) {
              return Array.isArray(t)
                ? t.map(function (t) {
                    return new e(t);
                  })
                : new e(t);
            }),
            (e.toBigNumberJs = function (t) {
              return E.isBigNumber(t) ? t : t instanceof e ? t.bn : new E(t);
            }),
            (e._toLength = function (e, t) {
              return new Array(e)
                .fill("0", 0, e)
                .concat(t.split(""))
                .slice(-e)
                .join("");
            }),
            (e.MIN_VALUE = new e("-9223372036854775808")),
            (e.MAX_VALUE = new e("9223372036854775807")),
            (e.MIN_UNSIGNED_VALUE = new e("0")),
            (e.MAX_UNSIGNED_VALUE = new e("18446744073709551615")),
            (e.config = new v()),
            e
          );
        })()),
          (function (e) {
            !(function (e) {
              ((e[(e.ROUND_UP = 0)] = "ROUND_UP"),
                (e[(e.ROUND_DOWN = 1)] = "ROUND_DOWN"),
                (e[(e.ROUND_CEIL = 2)] = "ROUND_CEIL"),
                (e[(e.ROUND_FLOOR = 3)] = "ROUND_FLOOR"),
                (e[(e.ROUND_HALF_UP = 4)] = "ROUND_HALF_UP"),
                (e[(e.ROUND_HALF_DOWN = 5)] = "ROUND_HALF_DOWN"),
                (e[(e.ROUND_HALF_EVEN = 6)] = "ROUND_HALF_EVEN"),
                (e[(e.ROUND_HALF_CEIL = 7)] = "ROUND_HALF_CEIL"),
                (e[(e.ROUND_HALF_FLOOR = 8)] = "ROUND_HALF_FLOOR"));
            })(e.ROUND_MODE || (e.ROUND_MODE = {}));
          })(e.BigNumber || (e.BigNumber = {})));
        var N = e.BigNumber;
        ((e.default = N),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      });
    },
    5622: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in ((t = arguments[r]), t))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        i =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (r[n] = e[n]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                t.indexOf(n[i]) < 0 && (r[n[i]] = e[n[i]]);
            }
            return r;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(3830),
        s = r(5619),
        a = r(4807),
        u = o.libs.crypto,
        c = u.stringToBytes,
        l = u.base58Decode,
        p = u.keccak,
        f = u.blake2b,
        h = { ATTACHMENT: 140 },
        d = {
          AVAILABLE_CHARS: "-.0123456789@_abcdefghijklmnopqrstuvwxyz",
          MAX_ALIAS_LENGTH: 30,
          MIN_ALIAS_LENGTH: 4,
        },
        g = { MAX_ADDRESS_LENGTH: 45 },
        _ = {
          NAME_MIN_BYTES: 4,
          NAME_MAX_BYTES: 16,
          DESCRIPTION_MAX_BYTES: 1e3,
        };
      ((t.ERROR_MSG = {
        REQUIRED: "field is required",
        WRONG_TYPE: "field is wrong type",
        WRONG_NUMBER: "field is not number",
        WRONG_TIMESTAMP: "field is not timestamp",
        SMALL_FIELD: "field is small",
        LARGE_FIELD: "field is large",
        WRONG_SYMBOLS: "field has wrong symbols",
        WRONG_ADDRESS: "field is wrong address",
        WRONG_BOOLEAN: "field is wrong boolean",
        WRONG_ASSET_ID: "field is wrong assetId",
        WRONG_ORDER_TYPE:
          'field is wrong order type. Field can be "buy" or "sell"',
        NOT_HTTPS_URL: "field can be url with https protocol",
        BASE64: 'field can be base64 string with prefix "base64:"',
        EMPTY_BASE64: 'field can be not empty base64"',
      }),
        (t.isValidAddress = function (e, t) {
          if (!e || "string" !== typeof e)
            throw new Error("Missing or invalid address");
          var r = l(e);
          if (1 !== r[0] || r[1] !== t) return !1;
          for (
            var n = r.slice(0, 22),
              i = r.slice(22, 26),
              o = p(f(n)).slice(0, 4),
              s = 0;
            s < 4;
            s++
          )
            if (i[s] !== o[s]) return !1;
          return !0;
        }));
      var m = function (e) {
          if ("" === e) return !0;
          var t =
            /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
          return t.test(e);
        },
        y = function (e) {
          return c(e);
        },
        E = function (e) {
          return e && "number" === typeof e ? e.toString() : e;
        },
        S = function (e, t) {
          var r = e.value,
            n = i(e, ["value"]),
            o = n.name,
            s = n.type;
          throw { value: r, field: o, type: s, message: t };
        },
        v = function (e) {
          var r = e.value,
            n = e.optional;
          n || null != r || S(e, t.ERROR_MSG.REQUIRED);
        },
        N = function (e) {
          ((e = n({}, e, { value: E(e.value) })), v(e));
          var r = e.value,
            i = e.optional;
          if (!i && null == r && null != r && "string" !== typeof r)
            return S(e, t.ERROR_MSG.WRONG_TYPE);
        },
        A = function (e) {
          var r = e.value;
          if (null != r)
            if ("string" !== typeof r && "number" !== typeof r)
              if ("object" !== typeof r) S(e, t.ERROR_MSG.WRONG_TYPE);
              else
                switch (!0) {
                  case "number" !== typeof r.length || r.length < 0:
                    S(e, t.ERROR_MSG.WRONG_TYPE);
                    break;
                  case r.length > h.ATTACHMENT:
                    S(e, t.ERROR_MSG.LARGE_FIELD);
                    break;
                }
            else
              switch ((N(e), !0)) {
                case "string" != typeof r:
                  S(e, t.ERROR_MSG.WRONG_TYPE);
                  break;
                case y(r).length > h.ATTACHMENT:
                  S(e, t.ERROR_MSG.LARGE_FIELD);
                  break;
              }
        },
        b = function (e) {
          v(e);
          var r = e.value;
          if (null != r && new a.BigNumber(r).isNaN())
            return S(e, t.ERROR_MSG.WRONG_NUMBER);
        },
        T = function (e) {
          v(e);
          var r = e.value;
          if (null != r && "boolean" !== typeof r)
            return S(e, t.ERROR_MSG.WRONG_BOOLEAN);
        },
        O = function (e) {
          v(e);
          var r = e.value;
          if (null != r)
            switch (!0) {
              case !(r instanceof s.Money):
                return S(e, t.ERROR_MSG.WRONG_TYPE);
              case r instanceof s.Money && r.getCoins().isNaN():
                return S(e, t.ERROR_MSG.WRONG_NUMBER);
            }
        },
        R = function (e, r, n) {
          v(e);
          var i = e.value;
          if (null != i) {
            var o = function (i) {
              (null != r &&
                i.lt(new a.BigNumber(r)) &&
                S(e, t.ERROR_MSG.SMALL_FIELD),
                null != n &&
                  i.gt(new a.BigNumber(n)) &&
                  S(e, t.ERROR_MSG.LARGE_FIELD));
            };
            switch (!0) {
              case i instanceof a.BigNumber:
                (i.isNaN() && S(e, t.ERROR_MSG.WRONG_TYPE), o(i));
                break;
              case i instanceof s.Money:
                var u = i.getCoins();
                (u.isNaN() && S(e, t.ERROR_MSG.WRONG_NUMBER), o(u));
                break;
              case "string" === typeof i && !i:
                S(e, t.ERROR_MSG.WRONG_NUMBER);
                break;
              case new a.BigNumber(i).isNaN():
                return S(e, t.ERROR_MSG.WRONG_NUMBER);
              default:
                o(new a.BigNumber(i));
            }
          }
        },
        I = function (e) {
          ((e = n({}, e, { value: E(e.value) })), v(e));
          var r = e.value;
          if (null == r) return null;
          switch (!0) {
            case "string" !== typeof r:
              return S(e, t.ERROR_MSG.WRONG_TYPE);
            case r.length < d.MIN_ALIAS_LENGTH:
              return S(e, t.ERROR_MSG.SMALL_FIELD);
            case r.length > d.MAX_ALIAS_LENGTH:
              return S(e, t.ERROR_MSG.LARGE_FIELD);
            case !r.split("").every(function (e) {
              return d.AVAILABLE_CHARS.includes(e);
            }):
              return S(e, t.ERROR_MSG.WRONG_SYMBOLS);
          }
        },
        P = function (e) {
          ((e = n({}, e, { value: E(e.value) })), v(e));
          var r = e.value,
            i = function (r) {
              try {
                return t.isValidAddress(r, e.optionalData);
              } catch (n) {
                return !1;
              }
            };
          if (null == r) return null;
          switch (!0) {
            case "string" !== typeof r:
              return S(e, t.ERROR_MSG.WRONG_TYPE);
            case r.length <= d.MAX_ALIAS_LENGTH:
              return S(e, t.ERROR_MSG.SMALL_FIELD);
            case r.length > g.MAX_ADDRESS_LENGTH:
              return S(e, t.ERROR_MSG.LARGE_FIELD);
            case !i(r):
              return S(e, t.ERROR_MSG.WRONG_ADDRESS);
          }
        },
        w = function (e) {
          try {
            I(e);
          } catch (t) {
            P(e);
          }
        },
        C = function (e) {
          ((e = n({}, e, { value: E(e.value) })), v(e));
          var r = e.value;
          if (null == r) return null;
          if ("string" !== typeof r) return S(e, t.ERROR_MSG.WRONG_TYPE);
          var i = !1;
          try {
            i = 32 === l(r.trim()).length;
          } catch (o) {
            i = !1;
          }
          return i || "WAVES" === r ? void 0 : S(e, t.ERROR_MSG.WRONG_ASSET_ID);
        },
        D = function (e) {
          v(e);
          var r = e.value;
          if (
            (isNaN(r) ||
              (r && !(r instanceof Date || "number" === typeof r || +r))) &&
            ("string" !== typeof r || isNaN(Date.parse(r)))
          )
            return S(e, t.ERROR_MSG.WRONG_TIMESTAMP);
        },
        L = function (e) {
          v(e);
          var r = e.value;
          return null == r
            ? null
            : "string" !== typeof r
              ? S(e, t.ERROR_MSG.WRONG_TYPE)
              : "sell" !== r && "buy" !== r
                ? S(e, t.ERROR_MSG.WRONG_ORDER_TYPE)
                : void 0;
        },
        M = function (e) {
          ((e = n({}, e, { value: E(e.value) })), v(e));
          var r = e.value;
          if (null != r) {
            "string" !== typeof r && S(e, t.ERROR_MSG.WRONG_TYPE);
            var i = y(r).length;
            (i < _.NAME_MIN_BYTES && S(e, t.ERROR_MSG.SMALL_FIELD),
              i > _.NAME_MAX_BYTES && S(e, t.ERROR_MSG.LARGE_FIELD));
          }
        },
        U = function (e) {
          ((e = n({}, e, { value: E(e.value) })), v(e));
          var r = e.value;
          if (null != r) {
            "string" !== typeof r && S(e, t.ERROR_MSG.WRONG_TYPE);
            var i = y(r).length;
            i > _.DESCRIPTION_MAX_BYTES && S(e, t.ERROR_MSG.LARGE_FIELD);
          }
        },
        B = function (e) {
          (v(e), R(e, 0, 8));
        },
        G = function (e) {
          v(e);
          var r = e.value,
            n = function (e) {
              try {
                return (new URL(e), !1);
              } catch (t) {
                return !0;
              }
            };
          if (null == r) return null;
          switch (!0) {
            case "string" !== typeof r:
              S(e, t.ERROR_MSG.WRONG_TYPE);
              break;
            case -1 === r.indexOf("https://"):
              S(e, t.ERROR_MSG.NOT_HTTPS_URL);
              break;
            case n(r):
              S(e, t.ERROR_MSG.NOT_HTTPS_URL);
              break;
          }
        },
        F = function (e) {
          v(e);
          var r = e.value;
          (Array.isArray(r) || S(e, t.ERROR_MSG.WRONG_TYPE),
            e.optional || 0 !== r.length || S(e, t.ERROR_MSG.REQUIRED));
          var i = (r || [])
            .map(function (t, r) {
              var i = t.recipient,
                o = t.amount,
                s = t.name,
                a = [];
              try {
                R(
                  n({}, e, {
                    value: o,
                    name: e.name + ":" + r + ":amount",
                    optional: !1,
                  }),
                );
              } catch (u) {
                a.push(u);
              }
              try {
                w(
                  n({}, e, {
                    value: i || s,
                    name: e.name + ":" + r + ":recipient",
                    optional: !1,
                  }),
                );
              } catch (u) {
                a.push(u);
              }
              return a;
            })
            .filter(function (e) {
              return e.length;
            });
          i.length && (S(e, i), S(e, i));
        },
        k = function (e, r) {
          v(e);
          var i = e.value;
          Array.isArray(i) || S(e, t.ERROR_MSG.WRONG_TYPE);
          var o = i
            .map(function (i, o) {
              var s = i.key,
                a = i.type,
                u = i.value;
              if (!r)
                try {
                  N(
                    n({}, e, {
                      value: s,
                      name: e.name + ":" + o + ":key",
                      optional: !1,
                    }),
                  );
                } catch (l) {
                  return l;
                }
              var c = n({}, e, {
                name: e.name + ":" + o + ":value",
                optional: !1,
                value: u,
              });
              try {
                switch (a) {
                  case "integer":
                    R(c);
                    break;
                  case "boolean":
                    T(c);
                    break;
                  case "binary":
                    x(c);
                    break;
                  case "string":
                    N(c);
                    break;
                  default:
                    S(
                      n({}, e, { value: s, name: e.name + ":" + o + ":type" }),
                      t.ERROR_MSG.WRONG_TYPE,
                    );
                }
              } catch (l) {
                return l;
              }
            })
            .filter(function (e) {
              return e;
            });
          o.length && S(e, o);
        },
        x = function (e) {
          var r = e.value,
            n = void 0 === r ? "" : r;
          (n && !n.includes("base64:") && S(e, t.ERROR_MSG.BASE64),
            n && !m(n.replace("base64:", "")) && S(e, t.ERROR_MSG.BASE64));
        },
        Y = function (e) {
          x(e);
        },
        j = function (e) {
          var r = e.value;
          ((r && r.replace("base64:", "")) || S(e, t.ERROR_MSG.EMPTY_BASE64),
            Y(e));
        },
        H = function (e) {
          v(e);
          var r = e.value;
          if (null != r) {
            (r && "object" === typeof r) || S(e, t.ERROR_MSG.WRONG_TYPE);
            var n = {
              key: "call.function",
              value: r.function,
              optional: !1,
              type: "string",
              name: "function",
            };
            N(n);
            var i = {
              key: "call.args",
              value: r.args,
              optional: !0,
              type: "args",
              name: "args",
            };
            i.value && k(i, !0);
          }
        },
        V = function (e) {
          v(e);
          var r = e.value;
          ("object" === typeof r &&
            "number" === typeof r.length &&
            r.forEach) ||
            S(e, t.ERROR_MSG.WRONG_TYPE);
          var i = (r || [])
            .map(function (t, r) {
              var i = [];
              try {
                O(n({}, e, { value: t, name: e.name + ":" + r, optional: !1 }));
              } catch (o) {
                i.push(o);
              }
              return i;
            })
            .filter(function (e) {
              return e.length;
            });
          i.length && (S(e, i), S(e, i));
        };
      t.VALIDATORS = {
        string: N,
        number: b,
        required: v,
        numberLike: R,
        money: O,
        aliasName: I,
        address: P,
        boolean: T,
        assetId: C,
        timestamp: D,
        orderType: L,
        assetName: M,
        assetDescription: U,
        httpsUrl: G,
        attachment: A,
        transfers: F,
        aliasOrAddress: w,
        data: k,
        script: Y,
        asset_script: j,
        binary: x,
        precision: B,
        call: H,
        payment: V,
      };
    },
    6728: function (e, t, r) {
      "use strict";
      var n,
        i =
          (this && this.__assign) ||
          function () {
            return (
              (i =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in ((t = arguments[r]), t))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              i.apply(this, arguments)
            );
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o,
        s = r(3830),
        a = r(3830),
        u = r(6760),
        c = r(4829),
        l = c.prepare.processors,
        p = r(5619),
        f = s.libs.marshall.serializePrimitives,
        h = f.LEN,
        d = f.SHORT,
        g = f.STRING,
        _ = f.LONG,
        m = f.BASE58_STRING,
        y = s.libs.marshall.binary,
        E = function (e, t) {
          var r = u.toNode(e);
          return (
            (r.timestamp = new Date(r.timestamp).getTime()),
            t ? t(r) : r
          );
        },
        S = function (e) {
          var t = (e || "").replace("base64:", "");
          return t ? "base64:" + t : null;
        };
      ((function (e) {
        ((e[(e["SEND_OLD"] = 2)] = "SEND_OLD"),
          (e[(e["ISSUE"] = 3)] = "ISSUE"),
          (e[(e["TRANSFER"] = 4)] = "TRANSFER"),
          (e[(e["REISSUE"] = 5)] = "REISSUE"),
          (e[(e["BURN"] = 6)] = "BURN"),
          (e[(e["EXCHANGE"] = 7)] = "EXCHANGE"),
          (e[(e["LEASE"] = 8)] = "LEASE"),
          (e[(e["CANCEL_LEASING"] = 9)] = "CANCEL_LEASING"),
          (e[(e["CREATE_ALIAS"] = 10)] = "CREATE_ALIAS"),
          (e[(e["MASS_TRANSFER"] = 11)] = "MASS_TRANSFER"),
          (e[(e["DATA"] = 12)] = "DATA"),
          (e[(e["SET_SCRIPT"] = 13)] = "SET_SCRIPT"),
          (e[(e["SPONSORSHIP"] = 14)] = "SPONSORSHIP"),
          (e[(e["SET_ASSET_SCRIPT"] = 15)] = "SET_ASSET_SCRIPT"),
          (e[(e["SCRIPT_INVOCATION"] = 16)] = "SCRIPT_INVOCATION"));
      })(t.TRANSACTION_TYPE_NUMBER || (t.TRANSACTION_TYPE_NUMBER = {})),
        (function (e) {
          ((e[(e["AUTH"] = 1e3)] = "AUTH"),
            (e[(e["MATCHER_ORDERS"] = 1001)] = "MATCHER_ORDERS"),
            (e[(e["CREATE_ORDER"] = 1002)] = "CREATE_ORDER"),
            (e[(e["CANCEL_ORDER"] = 1003)] = "CANCEL_ORDER"),
            (e[(e["COINOMAT_CONFIRMATION"] = 1004)] = "COINOMAT_CONFIRMATION"),
            (e[(e["ISSUE"] = 3)] = "ISSUE"),
            (e[(e["TRANSFER"] = 4)] = "TRANSFER"),
            (e[(e["REISSUE"] = 5)] = "REISSUE"),
            (e[(e["BURN"] = 6)] = "BURN"),
            (e[(e["EXCHANGE"] = 7)] = "EXCHANGE"),
            (e[(e["LEASE"] = 8)] = "LEASE"),
            (e[(e["CANCEL_LEASING"] = 9)] = "CANCEL_LEASING"),
            (e[(e["CREATE_ALIAS"] = 10)] = "CREATE_ALIAS"),
            (e[(e["MASS_TRANSFER"] = 11)] = "MASS_TRANSFER"),
            (e[(e["DATA"] = 12)] = "DATA"),
            (e[(e["SET_SCRIPT"] = 13)] = "SET_SCRIPT"),
            (e[(e["SPONSORSHIP"] = 14)] = "SPONSORSHIP"),
            (e[(e["SET_ASSET_SCRIPT"] = 15)] = "SET_ASSET_SCRIPT"),
            (e[(e["SCRIPT_INVOCATION"] = 16)] = "SCRIPT_INVOCATION"));
        })((o = t.SIGN_TYPE || (t.SIGN_TYPE = {}))));
      var v = function (e) {
        var t = e.orderId,
          r = e.id,
          n = e.senderPublicKey,
          i = e.sender,
          o = m(n || i),
          s = m(r || t);
        return Uint8Array.from(Array.from(o).concat(Array.from(s)));
      };
      t.SIGN_TYPES =
        ((n = {}),
        (n[o.AUTH] = {
          getBytes: {
            1: function (e) {
              var t = e.host,
                r = e.data,
                n = h(d)(g)("WavesWalletAuthentication"),
                i = h(d)(g)(t || ""),
                o = h(d)(g)(r || "");
              return Uint8Array.from(
                Array.from(n).concat(Array.from(i), Array.from(o)),
              );
            },
          },
          adapter: "signRequest",
        }),
        (n[o.COINOMAT_CONFIRMATION] = {
          getBytes: {
            1: function (e) {
              var t = e.timestamp,
                r = e.prefix,
                n = h(d)(g)(r),
                i = _(t);
              return Uint8Array.from(Array.from(n).concat(Array.from(i)));
            },
          },
          adapter: "signRequest",
        }),
        (n[o.MATCHER_ORDERS] = {
          getBytes: {
            1: function (e) {
              var t = e.timestamp,
                r = e.senderPublicKey,
                n = m(r),
                i = _(t);
              return Uint8Array.from(Array.from(n).concat(Array.from(i)));
            },
          },
          adapter: "signRequest",
        }),
        (n[o.CREATE_ORDER] = {
          getBytes: {
            0: y.serializeOrder,
            1: y.serializeOrder,
            2: y.serializeOrder,
            3: y.serializeOrder,
          },
          toNode: function (e) {
            var t = l.toOrderPrice(e);
            return (
              (e = i({}, e, { price: p.Money.fromCoins(t, e.price.asset) })),
              E(e, a.order)
            );
          },
          adapter: "signOrder",
        }),
        (n[o.CANCEL_ORDER] = {
          getBytes: { 0: v, 1: v },
          adapter: "signRequest",
          toNode: function (e) {
            return {
              orderId: e.orderId,
              sender: e.senderPublicKey,
              senderPublicKey: e.senderPublicKey,
              signature: e.proofs && e.proofs[0],
            };
          },
        }),
        (n[o.TRANSFER] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e, t) {
            return E(
              i({}, e, {
                recipient: l.recipient(String.fromCharCode(t))(e.recipient),
                attachment: l.attachment(e.attachment),
              }),
              a.transfer,
            );
          },
          adapter: "signTransaction",
        }),
        (n[o.ISSUE] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e) {
            return E(
              i({}, e, {
                quantity: e.amount || e.quantity,
                script: S(e.script),
              }),
              a.issue,
            );
          },
          adapter: "signTransaction",
        }),
        (n[o.REISSUE] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e) {
            var t = e.amount || e.quantity;
            return E(i({}, e, { quantity: t }), a.reissue);
          },
          adapter: "signTransaction",
        }),
        (n[o.BURN] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e) {
            var t = e.amount || e.quantity;
            return E(i({}, e, { quantity: t }), a.burn);
          },
          adapter: "signTransaction",
        }),
        (n[o.EXCHANGE] = {
          getBytes: { 0: y.serializeTx, 2: y.serializeTx },
          toNode: function (e) {
            var t = E(e),
              r = e.buyOrder.signature || e.buyOrder.proofs[0],
              n = e.buyOrder.proofs ? e.buyOrder.proofs : e.buyOrder.signature,
              o = i({}, t.buyOrder, { signature: r, proofs: n }),
              s = e.sellOrder.signature || e.sellOrder.proofs[0],
              u = e.sellOrder.proofs
                ? e.sellOrder.proofs
                : e.sellOrder.signature,
              c = i({}, t.sellOrder, { signature: s, proofs: u });
            return a.exchange(i({}, t, { order1: o, order2: c }));
          },
          adapter: "signTransaction",
        }),
        (n[o.LEASE] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e) {
            return E(e, a.lease);
          },
          adapter: "signTransaction",
        }),
        (n[o.CANCEL_LEASING] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e) {
            return E(e, a.cancelLease);
          },
          adapter: "signTransaction",
        }),
        (n[o.CREATE_ALIAS] = {
          getBytes: { 2: y.serializeTx },
          toNode: function (e) {
            return i({}, E(e, a.alias), { chainId: e.chainId });
          },
          adapter: "signTransaction",
        }),
        (n[o.MASS_TRANSFER] = {
          getBytes: { 0: y.serializeTx, 1: y.serializeTx },
          toNode: function (e, t) {
            return E(
              i({}, e, {
                transfers: e.transfers.map(function (e) {
                  var r = l.recipient(String.fromCharCode(t))(
                    e.name || e.recipient,
                  );
                  return i({}, e, { recipient: r });
                }),
                attachment: l.attachment(e.attachment),
              }),
              a.massTransfer,
            );
          },
          adapter: "signTransaction",
        }),
        (n[o.DATA] = {
          getBytes: { 0: y.serializeTx, 1: y.serializeTx },
          toNode: function (e) {
            return E(e, a.data);
          },
          adapter: "signTransaction",
        }),
        (n[o.SET_SCRIPT] = {
          getBytes: { 0: y.serializeTx, 1: y.serializeTx },
          toNode: function (e) {
            return E(i({}, e, { script: S(e.script) }), a.setScript);
          },
          adapter: "signTransaction",
        }),
        (n[o.SPONSORSHIP] = {
          getBytes: { 0: y.serializeTx, 1: y.serializeTx },
          toNode: function (e) {
            return E(e, a.sponsorship);
          },
          adapter: "signTransaction",
        }),
        (n[o.SET_ASSET_SCRIPT] = {
          getBytes: { 0: y.serializeTx, 1: y.serializeTx },
          toNode: function (e) {
            return E(i({}, e, { script: S(e.script) }), a.setAssetScript);
          },
          adapter: "signTransaction",
        }),
        (n[o.SCRIPT_INVOCATION] = {
          getBytes: { 0: y.serializeTx, 1: y.serializeTx },
          toNode: function (e) {
            return E(e, a.invokeScript);
          },
          adapter: "signTransaction",
        }),
        n);
    },
    6760: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(10762);
      t.convert = n.convert;
      var i = r(10764);
      t.toNode = i.toNode;
    },
    6761: function (e, t, r) {
      "use strict";
      function n(e) {
        return "string" === typeof e;
      }
      function i() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return function (t) {
          var r = e.reduce(function (e, r) {
            var n = r(t);
            return (n && e.push(n), e);
          }, []);
          if (r.length)
            throw new Error(
              "Validation error! Details: " + JSON.stringify(r, null, 4),
            );
          return t;
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBase64 = function (e) {
          var t =
            /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
          return t.test(e);
        }),
        (t.isString = n),
        (t.required = function (e) {
          return null != e;
        }),
        (t.charsInDictionary = function (e) {
          return function (t) {
            return t.split("").every(function (t) {
              return e.includes(t);
            });
          };
        }),
        (t.createValidator = function (e, t) {
          return function (r) {
            return e(r) ? null : t;
          };
        }),
        (t.requiredValidator = function (e) {
          return t.createValidator(
            t.required,
            'Property "' + e + '" is required!',
          );
        }),
        (t.validate = i));
    },
    6762: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(4829),
        i = r(6728),
        o = r(10785),
        s = n.prepare.processors;
      t.getValidateSchema = function (e) {
        var t;
        return (
          (t = {}),
          (t[i.SIGN_TYPE.MATCHER_ORDERS] = [
            o.string()("senderPublicKey", null, null, !0),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.AUTH] = [
            o.string()(
              "prefix",
              null,
              s.addValue("WavesWalletAuthentication"),
              !0,
            ),
            o.string()("host"),
            o.string()("data"),
          ]),
          (t[i.SIGN_TYPE.COINOMAT_CONFIRMATION] = [
            o.string()("prefix", null, s.addValue("Coinomat"), !0),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.CREATE_ORDER] = [
            o.string()("senderPublicKey", null, null, !0),
            o.string()("matcherPublicKey"),
            o.money()("amount", "amountAsset", s.moneyToAssetId),
            o.money()("price", "priceAsset", s.moneyToAssetId),
            o.orderType()("orderType"),
            o.money()("amount", "amount", s.toBigNumber),
            o.fromData()(null, "price", s.toOrderPrice),
            o.money()("matcherFee", null, s.toBigNumber),
            o.timestamp()("expiration", null, s.expiration),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.CANCEL_ORDER] = [
            o.string()("senderPublicKey", null, null, !0),
            o.string()("id", "orderId"),
          ]),
          (t[i.SIGN_TYPE.ISSUE] = [
            o.string()("senderPublicKey", null, null, !0),
            o.assetName()("name"),
            o.assetDescription()("description"),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.numberLike()("quantity", null, s.toBigNumber),
            o.precision()("precision"),
            o.boolean()("reissuable"),
            o.script()("script", null, s.orString, !0),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.REISSUE] = [
            o.string()("senderPublicKey", null, null, !0),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.asset()("assetId"),
            o.numberLike()("quantity", null, s.toBigNumber),
            o.boolean()("reissuable"),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.EXCHANGE] = [
            o.string()("senderPublicKey", null, null, !0),
            o.timestamp()("timestamp", null, s.timestamp),
            o.numberLike()("fee", null, s.toBigNumber),
            o.fromData()("buyOrder"),
            o.fromData()("sellOrder"),
            o.numberLike()("amount", "amount", s.toBigNumber),
            o.numberLike()("price", "price", s.toBigNumber),
            o.numberLike()("buyMatcherFee", "buyMatcherFee", s.toBigNumber),
            o.numberLike()("sellMatcherFee", "sellMatcherFee", s.toBigNumber),
          ]),
          (t[i.SIGN_TYPE.BURN] = [
            o.string()("senderPublicKey", null, null, !0),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.asset()("assetId"),
            o.numberLike()("amount", "quantity", s.toBigNumber),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.SPONSORSHIP] = [
            o.string()("senderPublicKey", null, null, !0),
            o.money()("minSponsoredAssetFee", "assetId", s.moneyToAssetId),
            o.numberLike()("minSponsoredAssetFee", null, s.toBigNumber),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.TRANSFER] = [
            o.string()("senderPublicKey", null, null, !0),
            o.money()("amount", "assetId", s.moneyToAssetId),
            o.required()("amount", null, s.toBigNumber),
            o.money()("fee", "feeAssetId", s.moneyToAssetId),
            o.required()("fee", "fee", s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
            o.aliasOrAddress(e)("recipient"),
            o.attachment()("attachment", null, s.orString, !0),
          ]),
          (t[i.SIGN_TYPE.LEASE] = [
            o.string()("senderPublicKey", null, null, !0),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.aliasOrAddress(e)("recipient"),
            o.numberLike()("amount", null, s.toBigNumber),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.CANCEL_LEASING] = [
            o.string()("senderPublicKey", null, null, !0),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.string()("leaseId", "transactionId"),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.CREATE_ALIAS] = [
            o.string()("senderPublicKey", null, null, !0),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.aliasName(e)("alias"),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.MASS_TRANSFER] = [
            o.string()("senderPublicKey", null, null, !0),
            o.money()("totalAmount", "assetId", s.moneyToAssetId),
            o.transfers(e)(
              "transfers",
              null,
              s.transfers(s.noProcess, s.toBigNumber),
            ),
            o.numberLike()("fee", null, s.toBigNumber),
            o.attachment()("attachment", null, s.orString, !0),
            o.timestamp()("timestamp", null, s.timestamp),
          ]),
          (t[i.SIGN_TYPE.DATA] = [
            o.string()("senderPublicKey", null, null, !0),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
            o.data()("data"),
          ]),
          (t[i.SIGN_TYPE.SET_SCRIPT] = [
            o.string()("senderPublicKey", null, null, !0),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.script()("script"),
          ]),
          (t[i.SIGN_TYPE.SET_ASSET_SCRIPT] = [
            o.string()("senderPublicKey", null, null, !0),
            o.asset()("assetId"),
            o.numberLike()("fee", null, s.toBigNumber),
            o.timestamp()("timestamp", null, s.timestamp),
            o.number()(
              "chainId",
              null,
              s.addValue(function () {
                return e;
              }),
              !0,
            ),
            o.asset_script()("script"),
          ]),
          (t[i.SIGN_TYPE.SCRIPT_INVOCATION] = [
            o.number()(
              "type",
              null,
              s.addValue(function () {
                return i.SIGN_TYPE.SCRIPT_INVOCATION;
              }),
              !0,
            ),
            o.number()(
              "version",
              null,
              s.addValue(function () {
                return 1;
              }),
              !0,
            ),
            o.string()("senderPublicKey", null, null, !0),
            o.aliasOrAddress(e)("dApp"),
            o.call()("call", "call", s.callFunc, !0),
            o.payment()("payment", null, s.payments, !0),
            o.numberLike()("fee", null, s.toNumberString),
            o.numberLike()("fee", "assetId", s.moneyToAssetId),
            o.timestamp()("timestamp", null, s.timestamp),
            o.number()("chainId", null, s.addValue(e), !0),
          ]),
          t
        );
      };
    },
    6763: function (e, t, r) {
      "use strict";
      function n(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        n(r(4831)),
        n(r(6766)),
        n(r(6800)),
        n(r(10977)));
    },
    6764: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in ((t = arguments[r]), t))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        i =
          (this && this.__awaiter) ||
          function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function s(e) {
                try {
                  u(n.next(e));
                } catch (t) {
                  o(t);
                }
              }
              function a(e) {
                try {
                  u(n["throw"](e));
                } catch (t) {
                  o(t);
                }
              }
              function u(e) {
                e.done
                  ? i(e.value)
                  : new r(function (t) {
                      t(e.value);
                    }).then(s, a);
              }
              u((n = n.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var r,
              n,
              i,
              o,
              s = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              "function" === typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(e) {
              return function (t) {
                return u([e, t]);
              };
            }
            function u(o) {
              if (r) throw new TypeError("Generator is already executing.");
              while (s)
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n["return"]
                          : o[0]
                            ? n["throw"] || ((i = n["return"]) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return (s.label++, { value: o[1], done: !1 });
                    case 5:
                      (s.label++, (n = o[1]), (o = [0]));
                      continue;
                    case 7:
                      ((o = s.ops.pop()), s.trys.pop());
                      continue;
                    default:
                      if (
                        ((i = s.trys),
                        !(i = i.length > 0 && i[i.length - 1]) &&
                          (6 === o[0] || 2 === o[0]))
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        ((s.label = i[1]), (i = o));
                        break;
                      }
                      if (i && s.label < i[2]) {
                        ((s.label = i[2]), s.ops.push(o));
                        break;
                      }
                      (i[2] && s.ops.pop(), s.trys.pop());
                      continue;
                  }
                  o = t.call(e, s);
                } catch (a) {
                  ((o = [6, a]), (n = 0));
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = r(3611),
        a = r(5573),
        u = r(6765),
        c = r(10787),
        l = r(3830),
        p = r(6760),
        f = r(4807),
        h = r(3611),
        d = l.libs.crypto,
        g = d.base58Encode,
        _ = d.blake2b,
        m = d.verifySignature,
        y = (function () {
          function e(e, t) {
            ((this._signMethod = "signRequest"), (this._proofs = []));
            var r = t.getNetworkByte();
            ((this._forSign = n({}, e)),
              (this.type = e.type),
              (this._adapter = t));
            var i = s.getValidateSchema(r)[e.type];
            if (!i)
              throw new c.SignError(
                "Can't find prepare api for tx type \"" + e.type + '"!',
                u.ERRORS.UNKNOWN_SIGN_TYPE,
              );
            ((this._forSign.data.timestamp = new Date(
              this._forSign.data.timestamp || Date.now(),
            ).getTime()),
              this._forSign.data.proofs &&
                (this._proofs = this._forSign.data.proofs.slice()));
            var o = t.getSignVersions()[e.type];
            if (0 === o.length)
              throw new c.SignError(
                "Can't sign data with type " + this.type,
                u.ERRORS.NO_SUPPORTED_VERSIONS,
              );
            a.isEmpty(this._forSign.data.version) &&
              (this._forSign.data.version = a.last(o));
            var l = this._forSign.data.version;
            if (!o.includes(l))
              throw new c.SignError(
                "Can't sign data with type \"" +
                  this.type +
                  '" and version "' +
                  l +
                  '"',
                u.ERRORS.VERSION_IS_NOT_SUPPORTED,
              );
            if (!s.SIGN_TYPES[e.type].getBytes[l])
              throw new c.SignError(
                "Can't find prepare api for tx type \"" +
                  e.type +
                  '" with version ' +
                  l +
                  "!",
                u.ERRORS.VERSION_IS_NOT_SUPPORTED,
              );
            this._signMethod = s.SIGN_TYPES[e.type].adapter;
            try {
              this._preparedData = s.prepare.signSchema(i)(
                this._forSign.data,
                !0,
              );
            } catch (p) {
              throw new c.SignError(p.message, u.ERRORS.VALIDATION_FAILED);
            }
            this._bytePromise = this.getSignData().then(function (t) {
              return s.SIGN_TYPES[e.type].getBytes[l](t);
            });
          }
          return (
            (e.prototype.getOrderFee = function (e, t, r, n) {
              return i(this, void 0, void 0, function () {
                var i, u;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return this._forSign.type !== s.SIGN_TYPE.CREATE_ORDER
                        ? [3, 2]
                        : ((i = a.currentCreateOrderFactory(e, t)),
                          (u = i),
                          [4, this.getDataForApi()]);
                    case 1:
                      return [2, u.apply(void 0, [o.sent(), r, n])];
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getFee = function (e, t, r) {
              return i(this, void 0, void 0, function () {
                var n, i, s;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (n = a.currentFeeFactory(e)),
                        [4, this.getSignData()]
                      );
                    case 1:
                      return ((i = o.sent()), [4, this.getBytes()]);
                    case 2:
                      return ((s = o.sent()), [2, n(i, s, t, r)]);
                  }
                });
              });
            }),
            (e.prototype.getTxData = function () {
              return n({}, this._forSign.data);
            }),
            (e.prototype.getSignData = function () {
              return i(this, void 0, void 0, function () {
                var e, t, r, i, a;
                return o(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [4, this._adapter.getPublicKey()];
                    case 1:
                      return ((e = o.sent()), [4, this._adapter.getAddress()]);
                    case 2:
                      return (
                        (t = o.sent()),
                        (r = n(
                          {},
                          this._preparedData,
                          { senderPublicKey: e, sender: t },
                          this._forSign.data,
                          { type: this._forSign.type },
                        )),
                        (i = s.SIGN_TYPES[this._forSign.type].toNode || null),
                        (a = i && i(r, this._adapter.getNetworkByte())),
                        [2, a || r]
                      );
                  }
                });
              });
            }),
            (e.prototype.getAssetIds = function () {
              return i(this, void 0, void 0, function () {
                var e, t;
                return o(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.getSignData()];
                    case 1:
                      switch (
                        ((e = r.sent()),
                        (t = Object.create(null)),
                        (t[s.WAVES_ID] = !0),
                        (t[a.normalizeAssetId(e.feeAssetId)] = !0),
                        e.type)
                      ) {
                        case s.SIGN_TYPE.CREATE_ORDER:
                          ((t[a.normalizeAssetId(e.matcherFeeAssetId)] = !0),
                            (t[a.normalizeAssetId(e.assetPair.amountAsset)] =
                              !0),
                            (t[a.normalizeAssetId(e.assetPair.priceAsset)] =
                              !0));
                          break;
                        case h.TRANSACTION_TYPE_NUMBER.REISSUE:
                        case h.TRANSACTION_TYPE_NUMBER.BURN:
                        case h.TRANSACTION_TYPE_NUMBER.MASS_TRANSFER:
                        case h.TRANSACTION_TYPE_NUMBER.SPONSORSHIP:
                        case h.TRANSACTION_TYPE_NUMBER.TRANSFER:
                          t[a.normalizeAssetId(e.assetId)] = !0;
                          break;
                        case h.TRANSACTION_TYPE_NUMBER.EXCHANGE:
                          ((t[
                            a.normalizeAssetId(e.order1.assetPair.amountAsset)
                          ] = !0),
                            (t[
                              a.normalizeAssetId(e.order1.assetPair.priceAsset)
                            ] = !0),
                            (t[a.normalizeAssetId(e.order1.matcherFeeAssetId)] =
                              !0),
                            (t[a.normalizeAssetId(e.order2.matcherFeeAssetId)] =
                              !0));
                          break;
                        case h.TRANSACTION_TYPE_NUMBER.SCRIPT_INVOCATION:
                          e.payment.forEach(function (e) {
                            t[a.normalizeAssetId(e.assetId)] = !0;
                          });
                          break;
                      }
                      return [2, Object.keys(t)];
                  }
                });
              });
            }),
            (e.prototype.sign2fa = function (e) {
              var t = this,
                r = e.code;
              return this._adapter
                .getAddress()
                .then(function (n) {
                  return e.request({
                    address: n,
                    code: r,
                    signData: t._forSign,
                  });
                })
                .then(function (e) {
                  return (t._proofs.push(e), t);
                });
            }),
            (e.prototype.addProof = function (e) {
              return (
                -1 !== this._proofs.indexOf(e) && this._proofs.push(e),
                this
              );
            }),
            (e.prototype.getHash = function () {
              return this._bytePromise.then(function (e) {
                return g(_(e));
              });
            }),
            (e.prototype.getId = function () {
              return this._bytePromise.then(function (e) {
                var t = Array.from(e);
                return (
                  10 === e[0] &&
                    (e = new Uint8Array([t[0]].concat(t.slice(36, -16)))),
                  g(_(e))
                );
              });
            }),
            (e.prototype.sign = function () {
              var e = this;
              return (
                this._makeSignPromise(),
                this._signPromise.then(function () {
                  return e;
                })
              );
            }),
            (e.prototype.getSignature = function () {
              return (this._makeSignPromise(), this._signPromise);
            }),
            (e.prototype.getBytes = function () {
              return this._bytePromise;
            }),
            (e.prototype.getMyProofs = function () {
              var e = this;
              return Promise.all([
                this.getBytes(),
                this._adapter.getPublicKey(),
              ]).then(function (t) {
                var r = t[0],
                  n = t[1];
                return e._proofs.filter(function (e) {
                  try {
                    return m(n, r, e);
                  } catch (t) {
                    return !1;
                  }
                });
              });
            }),
            (e.prototype.hasMySignature = function () {
              return this.getMyProofs().then(function (e) {
                return !!e.length;
              });
            }),
            (e.prototype.addMyProof = function () {
              var e = this;
              return this.hasMySignature().then(function (t) {
                return t
                  ? e.getMyProofs().then(function (e) {
                      return e[e.length - 1];
                    })
                  : e.getSignature().then(function (t) {
                      return (e._proofs.push(t), t);
                    });
              });
            }),
            (e.prototype.getDataForApi = function () {
              return i(this, void 0, void 0, function () {
                var e, t;
                return o(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, this.getSignData()];
                    case 1:
                      return ((e = r.sent()), [4, this.addMyProof()]);
                    case 2:
                      (r.sent(), (t = this._proofs.slice()));
                      try {
                        return [
                          2,
                          p.convert(n({}, e, { proofs: t }), function (e) {
                            return new f.BigNumber(e);
                          }),
                        ];
                      } catch (i) {
                        return [2, n({}, e, { proofs: t, signature: t[0] })];
                      }
                      return [2];
                  }
                });
              });
            }),
            (e.prototype._makeSignPromise = function () {
              var e = this;
              return (
                this._signPromise ||
                  ((this._signPromise = this._bytePromise.then(function (t) {
                    return e._adapter[e._signMethod](
                      t,
                      e._getAmountPrecision(),
                      e._forSign,
                    );
                  })),
                  this._signPromise.catch(function () {
                    e._signPromise = void 0;
                  })),
                this
              );
            }),
            (e.prototype._getAmountPrecision = function () {
              var e = this._forSign.data;
              return e.amount && e.amount.asset && e.amount.asset.precision
                ? e.amount.asset.precision
                : 0;
            }),
            e
          );
        })();
      t.Signable = y;
    },
    6765: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e) {
          ((e[(e["UNKNOWN_SIGN_TYPE"] = 0)] = "UNKNOWN_SIGN_TYPE"),
            (e[(e["NO_SUPPORTED_VERSIONS"] = 1)] = "NO_SUPPORTED_VERSIONS"),
            (e[(e["VERSION_IS_NOT_SUPPORTED"] = 2)] =
              "VERSION_IS_NOT_SUPPORTED"),
            (e[(e["VALIDATION_FAILED"] = 3)] = "VALIDATION_FAILED"));
        })(t.ERRORS || (t.ERRORS = {})));
    },
    6766: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            (e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n())));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(4831),
        o = r(10788),
        s = r(3611),
        a = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            if (((r._currentUser = t), !r._currentUser))
              throw "No selected user";
            return r;
          }
          return (
            n(t, e),
            (t.prototype.isAvailable = function () {
              return this._isMyLedger();
            }),
            (t.prototype.getPublicKey = function () {
              return Promise.resolve(this._currentUser.publicKey);
            }),
            (t.prototype.getAddress = function () {
              return Promise.resolve(this._currentUser.address);
            }),
            (t.prototype.getSeed = function () {
              return Promise.reject(
                Error('Method "getSeed" is not available!'),
              );
            }),
            (t.prototype.getAdapterVersion = function () {
              return t._ledger.getVersion();
            }),
            (t.prototype.signRequest = function (e) {
              var r = this;
              return this._isMyLedger().then(function () {
                return t._ledger.signRequest(r._currentUser.id, e);
              });
            }),
            (t.prototype.signTransaction = function (e, r) {
              var n = this;
              return 15 === e[0]
                ? this.signData(e)
                : this._isMyLedger().then(function () {
                    return t._ledger.signTransaction(
                      n._currentUser.id,
                      { precision: r },
                      e,
                    );
                  });
            }),
            (t.prototype.signOrder = function (e, r) {
              var n = this;
              return this._isMyLedger().then(function () {
                return t._ledger.signOrder(
                  n._currentUser.id,
                  { precision: r },
                  e,
                );
              });
            }),
            (t.prototype.signData = function (e) {
              var r = this;
              return this._isMyLedger().then(function () {
                return t._ledger.signSomeData(r._currentUser.id, e);
              });
            }),
            (t.prototype.getPrivateKey = function () {
              return Promise.reject("No private key");
            }),
            (t.prototype.getSignVersions = function () {
              var e;
              return (
                (e = {}),
                (e[s.SIGN_TYPE.AUTH] = [1]),
                (e[s.SIGN_TYPE.MATCHER_ORDERS] = [1]),
                (e[s.SIGN_TYPE.CREATE_ORDER] = [1, 2, 3]),
                (e[s.SIGN_TYPE.CANCEL_ORDER] = [1]),
                (e[s.SIGN_TYPE.COINOMAT_CONFIRMATION] = [1]),
                (e[s.SIGN_TYPE.ISSUE] = [2]),
                (e[s.SIGN_TYPE.TRANSFER] = [2]),
                (e[s.SIGN_TYPE.REISSUE] = [2]),
                (e[s.SIGN_TYPE.BURN] = [2]),
                (e[s.SIGN_TYPE.EXCHANGE] = []),
                (e[s.SIGN_TYPE.LEASE] = [2]),
                (e[s.SIGN_TYPE.CANCEL_LEASING] = [2]),
                (e[s.SIGN_TYPE.CREATE_ALIAS] = [2]),
                (e[s.SIGN_TYPE.MASS_TRANSFER] = [1]),
                (e[s.SIGN_TYPE.DATA] = [1]),
                (e[s.SIGN_TYPE.SET_SCRIPT] = [1]),
                (e[s.SIGN_TYPE.SPONSORSHIP] = [1]),
                (e[s.SIGN_TYPE.SET_ASSET_SCRIPT] = [1]),
                (e[s.SIGN_TYPE.SCRIPT_INVOCATION] = [1]),
                e
              );
            }),
            (t.prototype._isMyLedger = function () {
              var e = this;
              return t._ledger
                .getUserDataById(this._currentUser.id)
                .then(function (t) {
                  if (t.address !== e._currentUser.address)
                    throw { error: "Invalid ledger" };
                });
            }),
            (t.getUserList = function (e, r) {
              return (
                void 0 === e && (e = 1),
                void 0 === r && (r = 1),
                t._ledger.getPaginationUsersData(e, r)
              );
            }),
            (t.initOptions = function (e) {
              (i.Adapter.initOptions(e), (this._ledger = new o.WavesLedger(e)));
            }),
            (t.isAvailable = function () {
              return (
                t._hasConnectionPromise ||
                  (t._hasConnectionPromise = t._ledger.probeDevice()),
                t._hasConnectionPromise.then(
                  function () {
                    return ((t._hasConnectionPromise = null), !0);
                  },
                  function (e) {
                    return ((t._hasConnectionPromise = null), !1);
                  },
                )
              );
            }),
            (t.type = "ledger"),
            t
          );
        })(i.Adapter);
      t.LedgerAdapter = a;
    },
    6800: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__extends) ||
        (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            (e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n())));
          };
        })();
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(4831),
        o = r(3830),
        s = r(3611),
        a = o.seedUtils.Seed,
        u = o.libs.crypto.signBytes,
        c = (function (e) {
          function t(t, r) {
            var n,
              i = e.call(this, r) || this;
            if ("string" === typeof t) n = t;
            else {
              var o = t,
                s = o.encryptionRounds;
              n = a.decryptSeedPhrase(o.encryptedSeed, o.password, s);
            }
            return (
              (i.seed = new a(n, String.fromCharCode(i.getNetworkByte()))),
              i
            );
          }
          return (
            n(t, e),
            (t.prototype.getSignVersions = function () {
              var e;
              return (
                (e = {}),
                (e[s.SIGN_TYPE.AUTH] = [1]),
                (e[s.SIGN_TYPE.MATCHER_ORDERS] = [1]),
                (e[s.SIGN_TYPE.CREATE_ORDER] = [1, 2, 3]),
                (e[s.SIGN_TYPE.CANCEL_ORDER] = [0, 1]),
                (e[s.SIGN_TYPE.COINOMAT_CONFIRMATION] = [1]),
                (e[s.SIGN_TYPE.ISSUE] = [2]),
                (e[s.SIGN_TYPE.TRANSFER] = [2]),
                (e[s.SIGN_TYPE.REISSUE] = [2]),
                (e[s.SIGN_TYPE.BURN] = [2]),
                (e[s.SIGN_TYPE.EXCHANGE] = [0, 2]),
                (e[s.SIGN_TYPE.LEASE] = [2]),
                (e[s.SIGN_TYPE.CANCEL_LEASING] = [2]),
                (e[s.SIGN_TYPE.CREATE_ALIAS] = [2]),
                (e[s.SIGN_TYPE.MASS_TRANSFER] = [1]),
                (e[s.SIGN_TYPE.DATA] = [1]),
                (e[s.SIGN_TYPE.SET_SCRIPT] = [1]),
                (e[s.SIGN_TYPE.SPONSORSHIP] = [1]),
                (e[s.SIGN_TYPE.SET_ASSET_SCRIPT] = [1]),
                (e[s.SIGN_TYPE.SCRIPT_INVOCATION] = [1]),
                e
              );
            }),
            (t.prototype.getPublicKey = function () {
              return Promise.resolve(this.seed.keyPair.publicKey);
            }),
            (t.prototype.getPrivateKey = function () {
              return Promise.resolve(this.seed.keyPair.privateKey);
            }),
            (t.prototype.getAddress = function () {
              return Promise.resolve(this.seed.address);
            }),
            (t.prototype.getSeed = function () {
              return Promise.resolve(this.seed.phrase);
            }),
            (t.prototype.signRequest = function (e) {
              return this._sign(e);
            }),
            (t.prototype.signTransaction = function (e, t) {
              return this._sign(e);
            }),
            (t.prototype.signOrder = function (e, t) {
              return this._sign(e);
            }),
            (t.prototype.signData = function (e) {
              return this._sign(e);
            }),
            (t.prototype._sign = function (e) {
              return Promise.resolve(u(this.seed.keyPair, e));
            }),
            (t.isAvailable = function () {
              return Promise.resolve(!0);
            }),
            (t.type = "seed"),
            t
          );
        })(i.Adapter);
      t.SeedAdapter = c;
    },
    6801: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6800),
        i = r(6766),
        o = r(6763);
      ((function (e) {
        ((e["Seed"] = "seed"),
          (e["WavesKeeper"] = "wavesKeeper"),
          (e["Ledger"] = "ledger"),
          (e["Tresor"] = "tresor"));
      })(t.AdapterType || (t.AdapterType = {})),
        (t.adapterPriorityList = ["wavesKeeper", "ledger", "tresor", "seed"]),
        (t.adapterList = [
          n.SeedAdapter,
          i.LedgerAdapter,
          o.WavesKeeperAdapter,
        ]));
    },
  },
]);
