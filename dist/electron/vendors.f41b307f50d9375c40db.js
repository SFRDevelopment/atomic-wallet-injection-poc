(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [74],
  {
    10: function (t, n, e) {
      "use strict";
      var r;
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.TokenInstruction = void 0),
        (function (t) {
          ((t[(t["InitializeMint"] = 0)] = "InitializeMint"),
            (t[(t["InitializeAccount"] = 1)] = "InitializeAccount"),
            (t[(t["InitializeMultisig"] = 2)] = "InitializeMultisig"),
            (t[(t["Transfer"] = 3)] = "Transfer"),
            (t[(t["Approve"] = 4)] = "Approve"),
            (t[(t["Revoke"] = 5)] = "Revoke"),
            (t[(t["SetAuthority"] = 6)] = "SetAuthority"),
            (t[(t["MintTo"] = 7)] = "MintTo"),
            (t[(t["Burn"] = 8)] = "Burn"),
            (t[(t["CloseAccount"] = 9)] = "CloseAccount"),
            (t[(t["FreezeAccount"] = 10)] = "FreezeAccount"),
            (t[(t["ThawAccount"] = 11)] = "ThawAccount"),
            (t[(t["TransferChecked"] = 12)] = "TransferChecked"),
            (t[(t["ApproveChecked"] = 13)] = "ApproveChecked"),
            (t[(t["MintToChecked"] = 14)] = "MintToChecked"),
            (t[(t["BurnChecked"] = 15)] = "BurnChecked"),
            (t[(t["InitializeAccount2"] = 16)] = "InitializeAccount2"),
            (t[(t["SyncNative"] = 17)] = "SyncNative"),
            (t[(t["InitializeAccount3"] = 18)] = "InitializeAccount3"),
            (t[(t["InitializeMultisig2"] = 19)] = "InitializeMultisig2"),
            (t[(t["InitializeMint2"] = 20)] = "InitializeMint2"),
            (t[(t["GetAccountDataSize"] = 21)] = "GetAccountDataSize"),
            (t[(t["InitializeImmutableOwner"] = 22)] =
              "InitializeImmutableOwner"),
            (t[(t["AmountToUiAmount"] = 23)] = "AmountToUiAmount"),
            (t[(t["UiAmountToAmount"] = 24)] = "UiAmountToAmount"),
            (t[(t["InitializeMintCloseAuthority"] = 25)] =
              "InitializeMintCloseAuthority"),
            (t[(t["TransferFeeExtension"] = 26)] = "TransferFeeExtension"),
            (t[(t["ConfidentialTransferExtension"] = 27)] =
              "ConfidentialTransferExtension"),
            (t[(t["DefaultAccountStateExtension"] = 28)] =
              "DefaultAccountStateExtension"),
            (t[(t["Reallocate"] = 29)] = "Reallocate"),
            (t[(t["MemoTransferExtension"] = 30)] = "MemoTransferExtension"),
            (t[(t["CreateNativeMint"] = 31)] = "CreateNativeMint"),
            (t[(t["InitializeNonTransferableMint"] = 32)] =
              "InitializeNonTransferableMint"),
            (t[(t["InterestBearingMintExtension"] = 33)] =
              "InterestBearingMintExtension"),
            (t[(t["CpiGuardExtension"] = 34)] = "CpiGuardExtension"),
            (t[(t["InitializePermanentDelegate"] = 35)] =
              "InitializePermanentDelegate"),
            (t[(t["TransferHookExtension"] = 36)] = "TransferHookExtension"),
            (t[(t["MetadataPointerExtension"] = 39)] =
              "MetadataPointerExtension"),
            (t[(t["GroupPointerExtension"] = 40)] = "GroupPointerExtension"),
            (t[(t["GroupMemberPointerExtension"] = 41)] =
              "GroupMemberPointerExtension"),
            (t[(t["ScaledUiAmountExtension"] = 43)] =
              "ScaledUiAmountExtension"),
            (t[(t["PausableExtension"] = 44)] = "PausableExtension"));
        })(r || (n.TokenInstruction = r = {})));
    },
    117: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createAssociatedTokenAccountIdempotentInstruction = u),
          (n.createAssociatedTokenAccountIdempotentInstructionWithDerivation =
            a),
          (n.createAssociatedTokenAccountInstruction = c),
          (n.createRecoverNestedInstruction = d));
        var r = e(1),
          i = e(3),
          o = e(51);
        function c(n, e, r, o, c, u) {
          return (
            void 0 === c && (c = i.TOKEN_PROGRAM_ID),
            void 0 === u && (u = i.ASSOCIATED_TOKEN_PROGRAM_ID),
            s(n, e, r, o, t.alloc(0), c, u)
          );
        }
        function u(n, e, r, o, c, u) {
          return (
            void 0 === c && (c = i.TOKEN_PROGRAM_ID),
            void 0 === u && (u = i.ASSOCIATED_TOKEN_PROGRAM_ID),
            s(n, e, r, o, t.from([1]), c, u)
          );
        }
        function a(t, n, e, r, c, a) {
          (void 0 === r && (r = !0),
            void 0 === c && (c = i.TOKEN_PROGRAM_ID),
            void 0 === a && (a = i.ASSOCIATED_TOKEN_PROGRAM_ID));
          const s = (0, o.getAssociatedTokenAddressSync)(e, n, r);
          return u(t, s, n, e, c, a);
        }
        function s(t, n, e, o, c, u, a) {
          (void 0 === u && (u = i.TOKEN_PROGRAM_ID),
            void 0 === a && (a = i.ASSOCIATED_TOKEN_PROGRAM_ID));
          const s = [
            { pubkey: t, isSigner: !0, isWritable: !0 },
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: e, isSigner: !1, isWritable: !1 },
            { pubkey: o, isSigner: !1, isWritable: !1 },
            { pubkey: r.SystemProgram.programId, isSigner: !1, isWritable: !1 },
            { pubkey: u, isSigner: !1, isWritable: !1 },
          ];
          return new r.TransactionInstruction({
            keys: s,
            programId: a,
            data: c,
          });
        }
        function d(n, e, o, c, u, a, s, d) {
          (void 0 === s && (s = i.TOKEN_PROGRAM_ID),
            void 0 === d && (d = i.ASSOCIATED_TOKEN_PROGRAM_ID));
          const l = [
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: e, isSigner: !1, isWritable: !1 },
            { pubkey: o, isSigner: !1, isWritable: !0 },
            { pubkey: c, isSigner: !1, isWritable: !0 },
            { pubkey: u, isSigner: !1, isWritable: !1 },
            { pubkey: a, isSigner: !0, isWritable: !0 },
            { pubkey: s, isSigner: !1, isWritable: !1 },
          ];
          return new r.TransactionInstruction({
            keys: l,
            programId: d,
            data: t.from([2]),
          });
        }
      }).call(this, e(2).Buffer);
    },
    125: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = e(1780);
      Object.keys(r).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === r[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            }));
      });
      var i = e(3);
      Object.keys(i).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === i[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return i[t];
              },
            }));
      });
      var o = e(7);
      Object.keys(o).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === o[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return o[t];
              },
            }));
      });
      var c = e(1850);
      Object.keys(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === c[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return c[t];
              },
            }));
      });
      var u = e(1864);
      Object.keys(u).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === u[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return u[t];
              },
            }));
      });
      var a = e(640);
      Object.keys(a).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === a[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return a[t];
              },
            }));
      });
    },
    153: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.AccountState = n.AccountLayout = n.ACCOUNT_SIZE = void 0),
          (n.getAccount = f),
          (n.getMinimumBalanceForRentExemptAccount = y),
          (n.getMinimumBalanceForRentExemptAccountWithExtensions = k),
          (n.getMultipleAccounts = p),
          (n.unpackAccount = m));
        var r,
          i = e(6),
          o = e(12),
          c = e(3),
          u = e(7),
          a = e(182),
          s = e(30),
          d = e(154);
        (function (t) {
          ((t[(t["Uninitialized"] = 0)] = "Uninitialized"),
            (t[(t["Initialized"] = 1)] = "Initialized"),
            (t[(t["Frozen"] = 2)] = "Frozen"));
        })(r || (n.AccountState = r = {}));
        const l = (n.AccountLayout = (0, i.struct)([
            (0, o.publicKey)("mint"),
            (0, o.publicKey)("owner"),
            (0, o.u64)("amount"),
            (0, i.u32)("delegateOption"),
            (0, o.publicKey)("delegate"),
            (0, i.u8)("state"),
            (0, i.u32)("isNativeOption"),
            (0, o.u64)("isNative"),
            (0, o.u64)("delegatedAmount"),
            (0, i.u32)("closeAuthorityOption"),
            (0, o.publicKey)("closeAuthority"),
          ])),
          I = (n.ACCOUNT_SIZE = l.span);
        async function f(t, n, e, r) {
          void 0 === r && (r = c.TOKEN_PROGRAM_ID);
          const i = await t.getAccountInfo(n, e);
          return m(n, i, r);
        }
        async function p(t, n, e, r) {
          void 0 === r && (r = c.TOKEN_PROGRAM_ID);
          const i = await t.getMultipleAccountsInfo(n, e);
          return n.map((t, n) => m(t, i[n], r));
        }
        async function y(t, n) {
          return await k(t, [], n);
        }
        async function k(t, n, e) {
          const r = (0, s.getAccountLen)(n);
          return await t.getMinimumBalanceForRentExemption(r, e);
        }
        function m(n, e, i) {
          if ((void 0 === i && (i = c.TOKEN_PROGRAM_ID), !e))
            throw new u.TokenAccountNotFoundError();
          if (!e.owner.equals(i)) throw new u.TokenInvalidAccountOwnerError();
          if (e.data.length < I) throw new u.TokenInvalidAccountSizeError();
          const o = l.decode(e.data.slice(0, I));
          let s = t.alloc(0);
          if (e.data.length > I) {
            if (e.data.length === d.MULTISIG_SIZE)
              throw new u.TokenInvalidAccountSizeError();
            if (e.data[I] != a.AccountType.Account)
              throw new u.TokenInvalidAccountError();
            s = e.data.slice(I + a.ACCOUNT_TYPE_SIZE);
          }
          return {
            address: n,
            mint: o.mint,
            owner: o.owner,
            amount: o.amount,
            delegate: o.delegateOption ? o.delegate : null,
            delegatedAmount: o.delegatedAmount,
            isInitialized: o.state !== r.Uninitialized,
            isFrozen: o.state === r.Frozen,
            isNative: !!o.isNativeOption,
            rentExemptReserve: o.isNativeOption ? o.isNative : null,
            closeAuthority: o.closeAuthorityOption ? o.closeAuthority : null,
            tlvData: s,
          };
        }
      }).call(this, e(2).Buffer);
    },
    154: function (t, n, e) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.MultisigLayout = n.MULTISIG_SIZE = void 0),
        (n.getMinimumBalanceForRentExemptMultisig = l),
        (n.getMultisig = s),
        (n.unpackMultisig = d));
      var r = e(6),
        i = e(12),
        o = e(3),
        c = e(7);
      const u = (n.MultisigLayout = (0, r.struct)([
          (0, r.u8)("m"),
          (0, r.u8)("n"),
          (0, i.bool)("isInitialized"),
          (0, i.publicKey)("signer1"),
          (0, i.publicKey)("signer2"),
          (0, i.publicKey)("signer3"),
          (0, i.publicKey)("signer4"),
          (0, i.publicKey)("signer5"),
          (0, i.publicKey)("signer6"),
          (0, i.publicKey)("signer7"),
          (0, i.publicKey)("signer8"),
          (0, i.publicKey)("signer9"),
          (0, i.publicKey)("signer10"),
          (0, i.publicKey)("signer11"),
        ])),
        a = (n.MULTISIG_SIZE = u.span);
      async function s(t, n, e, r) {
        void 0 === r && (r = o.TOKEN_PROGRAM_ID);
        const i = await t.getAccountInfo(n, e);
        return d(n, i, r);
      }
      function d(t, n, e) {
        if ((void 0 === e && (e = o.TOKEN_PROGRAM_ID), !n))
          throw new c.TokenAccountNotFoundError();
        if (!n.owner.equals(e)) throw new c.TokenInvalidAccountOwnerError();
        if (n.data.length != a) throw new c.TokenInvalidAccountSizeError();
        const r = u.decode(n.data);
        return { address: t, ...r };
      }
      async function l(t, n) {
        return await t.getMinimumBalanceForRentExemption(a, n);
      }
    },
    155: function (t, n, e) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.COptionPublicKeyLayout = void 0));
      var r = e(6),
        i = e(12);
      class COptionPublicKeyLayout extends r.Layout {
        constructor(t) {
          (super(-1, t), (this.publicKeyLayout = (0, i.publicKey)()));
        }
        decode(t, n) {
          void 0 === n && (n = 0);
          const e = t[n];
          return 0 === e ? null : this.publicKeyLayout.decode(t, n + 1);
        }
        encode(t, n, e) {
          return (
            void 0 === e && (e = 0),
            null === t
              ? ((n[e] = 0), 1)
              : ((n[e] = 1), this.publicKeyLayout.encode(t, n, e + 1), 33)
          );
        }
        getSpan(t, n) {
          if ((void 0 === n && (n = 0), t)) {
            const e = t[n];
            return 0 === e ? 1 : 1 + this.publicKeyLayout.span;
          }
          throw new RangeError("Buffer must be provided");
        }
      }
      n.COptionPublicKeyLayout = COptionPublicKeyLayout;
    },
    185: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createTransferCheckedInstruction = l),
          (n.decodeTransferCheckedInstruction = I),
          (n.decodeTransferCheckedInstructionUnchecked = f),
          (n.transferCheckedInstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.transferCheckedInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
          (0, r.u8)("decimals"),
        ]));
        function l(n, e, r, i, u, l, I, f) {
          (void 0 === I && (I = []), void 0 === f && (f = c.TOKEN_PROGRAM_ID));
          const p = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !1 },
                { pubkey: r, isSigner: !1, isWritable: !0 },
              ],
              i,
              I,
            ),
            y = t.alloc(d.span);
          return (
            d.encode(
              {
                instruction: s.TokenInstruction.TransferChecked,
                amount: BigInt(u),
                decimals: l,
              },
              y,
            ),
            new o.TransactionInstruction({ keys: p, programId: f, data: y })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: {
              source: e,
              mint: r,
              destination: i,
              owner: o,
              multiSigners: a,
            },
            data: l,
          } = f(t);
          if (l.instruction !== s.TokenInstruction.TransferChecked)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i || !o)
            throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: {
              source: e,
              mint: r,
              destination: i,
              owner: o,
              multiSigners: a,
            },
            data: l,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, o, ...c],
            data: u,
          } = t;
          return {
            programId: n,
            keys: {
              source: e,
              mint: r,
              destination: i,
              owner: o,
              multiSigners: c,
            },
            data: d.decode(u),
          };
        }
      }).call(this, e(2).Buffer);
    },
    186: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeAccountInstruction = s),
          (n.decodeInitializeAccountInstruction = d),
          (n.decodeInitializeAccountInstructionUnchecked = l),
          (n.initializeAccountInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10);
        const a = (n.initializeAccountInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function s(n, e, r, c) {
          void 0 === c && (c = o.TOKEN_PROGRAM_ID);
          const s = [
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: e, isSigner: !1, isWritable: !1 },
              { pubkey: r, isSigner: !1, isWritable: !1 },
              { pubkey: i.SYSVAR_RENT_PUBKEY, isSigner: !1, isWritable: !1 },
            ],
            d = t.alloc(a.span);
          return (
            a.encode({ instruction: u.TokenInstruction.InitializeAccount }, d),
            new i.TransactionInstruction({ keys: s, programId: c, data: d })
          );
        }
        function d(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== a.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r, owner: i, rent: s },
            data: d,
          } = l(t);
          if (d.instruction !== u.TokenInstruction.InitializeAccount)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e || !r || !i || !s)
            throw new c.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, mint: r, owner: i, rent: s },
            data: d,
          };
        }
        function l(t) {
          let {
            programId: n,
            keys: [e, r, i, o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r, owner: i, rent: o },
            data: a.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    1864: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = {
        createInitializeInstruction: !0,
        createUpdateFieldInstruction: !0,
        createRemoveKeyInstruction: !0,
        createUpdateAuthorityInstruction: !0,
        createEmitInstruction: !0,
        createInitializeGroupInstruction: !0,
        createUpdateGroupMaxSizeInstruction: !0,
        createUpdateGroupAuthorityInstruction: !0,
        createInitializeMemberInstruction: !0,
      };
      (Object.defineProperty(n, "createEmitInstruction", {
        enumerable: !0,
        get: function () {
          return i.createEmitInstruction;
        },
      }),
        Object.defineProperty(n, "createInitializeGroupInstruction", {
          enumerable: !0,
          get: function () {
            return o.createInitializeGroupInstruction;
          },
        }),
        Object.defineProperty(n, "createInitializeInstruction", {
          enumerable: !0,
          get: function () {
            return i.createInitializeInstruction;
          },
        }),
        Object.defineProperty(n, "createInitializeMemberInstruction", {
          enumerable: !0,
          get: function () {
            return o.createInitializeMemberInstruction;
          },
        }),
        Object.defineProperty(n, "createRemoveKeyInstruction", {
          enumerable: !0,
          get: function () {
            return i.createRemoveKeyInstruction;
          },
        }),
        Object.defineProperty(n, "createUpdateAuthorityInstruction", {
          enumerable: !0,
          get: function () {
            return i.createUpdateAuthorityInstruction;
          },
        }),
        Object.defineProperty(n, "createUpdateFieldInstruction", {
          enumerable: !0,
          get: function () {
            return i.createUpdateFieldInstruction;
          },
        }),
        Object.defineProperty(n, "createUpdateGroupAuthorityInstruction", {
          enumerable: !0,
          get: function () {
            return o.createUpdateGroupAuthorityInstruction;
          },
        }),
        Object.defineProperty(n, "createUpdateGroupMaxSizeInstruction", {
          enumerable: !0,
          get: function () {
            return o.createUpdateGroupMaxSizeInstruction;
          },
        }));
      var i = e(318),
        o = e(297),
        c = e(117);
      Object.keys(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === c[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return c[t];
              },
            }));
      });
      var u = e(1865);
      Object.keys(u).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === u[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return u[t];
              },
            }));
      });
      var a = e(10);
      Object.keys(a).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === a[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return a[t];
              },
            }));
      });
      var s = e(317);
      Object.keys(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === s[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return s[t];
              },
            }));
      });
      var d = e(186);
      Object.keys(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === d[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return d[t];
              },
            }));
      });
      var l = e(308);
      Object.keys(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === l[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return l[t];
              },
            }));
      });
      var I = e(315);
      Object.keys(I).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === I[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return I[t];
              },
            }));
      });
      var f = e(302);
      Object.keys(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === f[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return f[t];
              },
            }));
      });
      var p = e(312);
      Object.keys(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === p[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return p[t];
              },
            }));
      });
      var y = e(313);
      Object.keys(y).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === y[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return y[t];
              },
            }));
      });
      var k = e(310);
      Object.keys(k).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === k[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return k[t];
              },
            }));
      });
      var m = e(304);
      Object.keys(m).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === m[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return m[t];
              },
            }));
      });
      var T = e(306);
      Object.keys(T).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === T[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return T[t];
              },
            }));
      });
      var g = e(309);
      Object.keys(g).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === g[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return g[t];
              },
            }));
      });
      var h = e(314);
      Object.keys(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === h[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return h[t];
              },
            }));
      });
      var b = e(185);
      Object.keys(b).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === b[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return b[t];
              },
            }));
      });
      var v = e(303);
      Object.keys(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === v[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return v[t];
              },
            }));
      });
      var w = e(311);
      Object.keys(w).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === w[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return w[t];
              },
            }));
      });
      var O = e(305);
      Object.keys(O).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === O[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return O[t];
              },
            }));
      });
      var A = e(641);
      Object.keys(A).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === A[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return A[t];
              },
            }));
      });
      var _ = e(187);
      Object.keys(_).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === _[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return _[t];
              },
            }));
      });
      var E = e(642);
      Object.keys(E).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === E[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return E[t];
              },
            }));
      });
      var M = e(1866);
      Object.keys(M).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === M[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return M[t];
              },
            }));
      });
      var P = e(307);
      Object.keys(P).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === P[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return P[t];
              },
            }));
      });
      var S = e(1867);
      Object.keys(S).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === S[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return S[t];
              },
            }));
      });
      var z = e(296);
      Object.keys(z).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === z[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return z[t];
              },
            }));
      });
      var R = e(316);
      Object.keys(R).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === R[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return R[t];
              },
            }));
      });
      var D = e(1868);
      Object.keys(D).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === D[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return D[t];
              },
            }));
      });
      var j = e(1869);
      Object.keys(j).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === j[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return j[t];
              },
            }));
      });
      var K = e(636);
      Object.keys(K).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === K[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return K[t];
              },
            }));
      });
      var C = e(1870);
      Object.keys(C).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === C[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return C[t];
              },
            }));
      });
      var N = e(1871);
      Object.keys(N).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(r, t) ||
            (t in n && n[t] === N[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return N[t];
              },
            }));
      });
    },
    1865: function (t, n, e) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.decodeInstruction = P),
        (n.isAmountToUiAmountInstruction = J),
        (n.isApproveCheckedInstruction = F),
        (n.isApproveInstruction = j),
        (n.isBurnCheckedInstruction = L),
        (n.isBurnInstruction = G),
        (n.isCloseAccountInstruction = U),
        (n.isFreezeAccountInstruction = B),
        (n.isInitializeAccount2Instruction = Z),
        (n.isInitializeAccount3Instruction = V),
        (n.isInitializeAccountInstruction = z),
        (n.isInitializeMint2Instruction = H),
        (n.isInitializeMintInstruction = S),
        (n.isInitializeMultisigInstruction = R),
        (n.isMintToCheckedInstruction = q),
        (n.isMintToInstruction = N),
        (n.isRevokeInstruction = K),
        (n.isSetAuthorityInstruction = C),
        (n.isSyncNativeInstruction = Y),
        (n.isThawAccountInstruction = W),
        (n.isTransferCheckedInstruction = x),
        (n.isTransferInstruction = D),
        (n.isUiamountToAmountInstruction = Q));
      var r = e(6),
        i = e(3),
        o = e(7),
        c = e(296),
        u = e(302),
        a = e(303),
        s = e(304),
        d = e(305),
        l = e(306),
        I = e(309),
        f = e(186),
        p = e(641),
        y = e(642),
        k = e(317),
        m = e(307),
        T = e(308),
        g = e(310),
        h = e(311),
        b = e(312),
        v = e(313),
        w = e(187),
        O = e(314),
        A = e(315),
        _ = e(185),
        E = e(10),
        M = e(316);
      function P(t, n) {
        if ((void 0 === n && (n = i.TOKEN_PROGRAM_ID), !t.data.length))
          throw new o.TokenInvalidInstructionDataError();
        const e = (0, r.u8)().decode(t.data);
        if (e === E.TokenInstruction.InitializeMint)
          return (0, k.decodeInitializeMintInstruction)(t, n);
        if (e === E.TokenInstruction.InitializeAccount)
          return (0, f.decodeInitializeAccountInstruction)(t, n);
        if (e === E.TokenInstruction.InitializeMultisig)
          return (0, T.decodeInitializeMultisigInstruction)(t, n);
        if (e === E.TokenInstruction.Transfer)
          return (0, A.decodeTransferInstruction)(t, n);
        if (e === E.TokenInstruction.Approve)
          return (0, u.decodeApproveInstruction)(t, n);
        if (e === E.TokenInstruction.Revoke)
          return (0, b.decodeRevokeInstruction)(t, n);
        if (e === E.TokenInstruction.SetAuthority)
          return (0, v.decodeSetAuthorityInstruction)(t, n);
        if (e === E.TokenInstruction.MintTo)
          return (0, g.decodeMintToInstruction)(t, n);
        if (e === E.TokenInstruction.Burn)
          return (0, s.decodeBurnInstruction)(t, n);
        if (e === E.TokenInstruction.CloseAccount)
          return (0, l.decodeCloseAccountInstruction)(t, n);
        if (e === E.TokenInstruction.FreezeAccount)
          return (0, I.decodeFreezeAccountInstruction)(t, n);
        if (e === E.TokenInstruction.ThawAccount)
          return (0, O.decodeThawAccountInstruction)(t, n);
        if (e === E.TokenInstruction.TransferChecked)
          return (0, _.decodeTransferCheckedInstruction)(t, n);
        if (e === E.TokenInstruction.ApproveChecked)
          return (0, a.decodeApproveCheckedInstruction)(t, n);
        if (e === E.TokenInstruction.MintToChecked)
          return (0, h.decodeMintToCheckedInstruction)(t, n);
        if (e === E.TokenInstruction.BurnChecked)
          return (0, d.decodeBurnCheckedInstruction)(t, n);
        if (e === E.TokenInstruction.InitializeAccount2)
          return (0, p.decodeInitializeAccount2Instruction)(t, n);
        if (e === E.TokenInstruction.SyncNative)
          return (0, w.decodeSyncNativeInstruction)(t, n);
        if (e === E.TokenInstruction.InitializeAccount3)
          return (0, y.decodeInitializeAccount3Instruction)(t, n);
        if (e === E.TokenInstruction.InitializeMint2)
          return (0, m.decodeInitializeMint2Instruction)(t, n);
        if (e === E.TokenInstruction.AmountToUiAmount)
          return (0, c.decodeAmountToUiAmountInstruction)(t, n);
        if (e === E.TokenInstruction.UiAmountToAmount)
          return (0, M.decodeUiAmountToAmountInstruction)(t, n);
        if (e === E.TokenInstruction.InitializeMultisig2)
          throw new o.TokenInvalidInstructionTypeError();
        throw new o.TokenInvalidInstructionTypeError();
      }
      function S(t) {
        return t.data.instruction === E.TokenInstruction.InitializeMint;
      }
      function z(t) {
        return t.data.instruction === E.TokenInstruction.InitializeAccount;
      }
      function R(t) {
        return t.data.instruction === E.TokenInstruction.InitializeMultisig;
      }
      function D(t) {
        return t.data.instruction === E.TokenInstruction.Transfer;
      }
      function j(t) {
        return t.data.instruction === E.TokenInstruction.Approve;
      }
      function K(t) {
        return t.data.instruction === E.TokenInstruction.Revoke;
      }
      function C(t) {
        return t.data.instruction === E.TokenInstruction.SetAuthority;
      }
      function N(t) {
        return t.data.instruction === E.TokenInstruction.MintTo;
      }
      function G(t) {
        return t.data.instruction === E.TokenInstruction.Burn;
      }
      function U(t) {
        return t.data.instruction === E.TokenInstruction.CloseAccount;
      }
      function B(t) {
        return t.data.instruction === E.TokenInstruction.FreezeAccount;
      }
      function W(t) {
        return t.data.instruction === E.TokenInstruction.ThawAccount;
      }
      function x(t) {
        return t.data.instruction === E.TokenInstruction.TransferChecked;
      }
      function F(t) {
        return t.data.instruction === E.TokenInstruction.ApproveChecked;
      }
      function q(t) {
        return t.data.instruction === E.TokenInstruction.MintToChecked;
      }
      function L(t) {
        return t.data.instruction === E.TokenInstruction.BurnChecked;
      }
      function Z(t) {
        return t.data.instruction === E.TokenInstruction.InitializeAccount2;
      }
      function Y(t) {
        return t.data.instruction === E.TokenInstruction.SyncNative;
      }
      function V(t) {
        return t.data.instruction === E.TokenInstruction.InitializeAccount3;
      }
      function H(t) {
        return t.data.instruction === E.TokenInstruction.InitializeMint2;
      }
      function J(t) {
        return t.data.instruction === E.TokenInstruction.AmountToUiAmount;
      }
      function Q(t) {
        return t.data.instruction === E.TokenInstruction.UiAmountToAmount;
      }
    },
    1866: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
    },
    1867: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeImmutableOwnerInstruction = a),
          (n.decodeInitializeImmutableOwnerInstruction = s),
          (n.decodeInitializeImmutableOwnerInstructionUnchecked = d),
          (n.initializeImmutableOwnerInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(7),
          c = e(10);
        const u = (n.initializeImmutableOwnerInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function a(n, e) {
          const r = [{ pubkey: n, isSigner: !1, isWritable: !0 }],
            o = t.alloc(u.span);
          return (
            u.encode(
              { instruction: c.TokenInstruction.InitializeImmutableOwner },
              o,
            ),
            new i.TransactionInstruction({ keys: r, programId: e, data: o })
          );
        }
        function s(t, n) {
          if (!t.programId.equals(n))
            throw new o.TokenInvalidInstructionProgramError();
          if (t.data.length !== u.span)
            throw new o.TokenInvalidInstructionDataError();
          const {
            keys: { account: e },
            data: r,
          } = d(t);
          if (r.instruction !== c.TokenInstruction.InitializeImmutableOwner)
            throw new o.TokenInvalidInstructionTypeError();
          if (!e) throw new o.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { account: e }, data: r };
        }
        function d(t) {
          let {
            programId: n,
            keys: [e],
            data: r,
          } = t;
          const { instruction: i } = u.decode(r);
          return {
            programId: n,
            keys: { account: e },
            data: { instruction: i },
          };
        }
      }).call(this, e(2).Buffer);
    },
    1868: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeMintCloseAuthorityInstruction = d),
          (n.decodeInitializeMintCloseAuthorityInstruction = l),
          (n.decodeInitializeMintCloseAuthorityInstructionUnchecked = I),
          (n.initializeMintCloseAuthorityInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10),
          a = e(155);
        const s = (n.initializeMintCloseAuthorityInstructionData = (0,
        r.struct)([
          (0, r.u8)("instruction"),
          new a.COptionPublicKeyLayout("closeAuthority"),
        ]));
        function d(n, e, r) {
          if (!(0, o.programSupportsExtensions)(r))
            throw new c.TokenUnsupportedInstructionError();
          const a = [{ pubkey: n, isSigner: !1, isWritable: !0 }],
            d = t.alloc(34);
          return (
            s.encode(
              {
                instruction: u.TokenInstruction.InitializeMintCloseAuthority,
                closeAuthority: e,
              },
              d,
            ),
            new i.TransactionInstruction({
              keys: a,
              programId: r,
              data: d.subarray(0, s.getSpan(d)),
            })
          );
        }
        function l(t, n) {
          if (!t.programId.equals(n))
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.getSpan(t.data))
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e },
            data: r,
          } = I(t);
          if (r.instruction !== u.TokenInstruction.InitializeMintCloseAuthority)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e) throw new c.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { mint: e }, data: r };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e],
            data: r,
          } = t;
          const { instruction: i, closeAuthority: o } = s.decode(r);
          return {
            programId: n,
            keys: { mint: e },
            data: { instruction: i, closeAuthority: o },
          };
        }
      }).call(this, e(2).Buffer);
    },
    1869: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createReallocateInstruction = s));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(24),
          a = e(10);
        function s(n, e, s, d, l, I) {
          if (
            (void 0 === l && (l = []),
            void 0 === I && (I = o.TOKEN_2022_PROGRAM_ID),
            !(0, o.programSupportsExtensions)(I))
          )
            throw new c.TokenUnsupportedInstructionError();
          const f = [
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: e, isSigner: !0, isWritable: !0 },
              {
                pubkey: i.SystemProgram.programId,
                isSigner: !1,
                isWritable: !1,
              },
            ],
            p = (0, u.addSigners)(f, d, l),
            y = (0, r.struct)([
              (0, r.u8)("instruction"),
              (0, r.seq)((0, r.u16)(), s.length, "extensionTypes"),
            ]),
            k = t.alloc(y.span);
          return (
            y.encode(
              { instruction: a.TokenInstruction.Reallocate, extensionTypes: s },
              k,
            ),
            new i.TransactionInstruction({ keys: p, programId: I, data: k })
          );
        }
      }).call(this, e(2).Buffer);
    },
    187: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createSyncNativeInstruction = s),
          (n.decodeSyncNativeInstruction = d),
          (n.decodeSyncNativeInstructionUnchecked = l),
          (n.syncNativeInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10);
        const a = (n.syncNativeInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function s(n, e) {
          void 0 === e && (e = o.TOKEN_PROGRAM_ID);
          const r = [{ pubkey: n, isSigner: !1, isWritable: !0 }],
            c = t.alloc(a.span);
          return (
            a.encode({ instruction: u.TokenInstruction.SyncNative }, c),
            new i.TransactionInstruction({ keys: r, programId: e, data: c })
          );
        }
        function d(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== a.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e },
            data: r,
          } = l(t);
          if (r.instruction !== u.TokenInstruction.SyncNative)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e) throw new c.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { account: e }, data: r };
        }
        function l(t) {
          let {
            programId: n,
            keys: [e],
            data: r,
          } = t;
          return { programId: n, keys: { account: e }, data: a.decode(r) };
        }
      }).call(this, e(2).Buffer);
    },
    1870: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeNonTransferableMintInstruction = s),
          (n.initializeNonTransferableMintInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10);
        const a = (n.initializeNonTransferableMintInstructionData = (0,
        r.struct)([(0, r.u8)("instruction")]));
        function s(n, e) {
          if (!(0, o.programSupportsExtensions)(e))
            throw new c.TokenUnsupportedInstructionError();
          const r = [{ pubkey: n, isSigner: !1, isWritable: !0 }],
            s = t.alloc(a.span);
          return (
            a.encode(
              { instruction: u.TokenInstruction.InitializeNonTransferableMint },
              s,
            ),
            new i.TransactionInstruction({ keys: r, programId: e, data: s })
          );
        }
      }).call(this, e(2).Buffer);
    },
    1871: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializePermanentDelegateInstruction = d),
          (n.decodeInitializePermanentDelegateInstruction = l),
          (n.decodeInitializePermanentDelegateInstructionUnchecked = I),
          (n.initializePermanentDelegateInstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(10);
        const s = (n.initializePermanentDelegateInstructionData = (0, r.struct)(
          [(0, r.u8)("instruction"), (0, i.publicKey)("delegate")],
        ));
        function d(n, e, r) {
          if (!(0, c.programSupportsExtensions)(r))
            throw new u.TokenUnsupportedInstructionError();
          const i = [{ pubkey: n, isSigner: !1, isWritable: !0 }],
            d = t.alloc(s.span);
          return (
            s.encode(
              {
                instruction: a.TokenInstruction.InitializePermanentDelegate,
                delegate: e || new o.PublicKey(0),
              },
              d,
            ),
            new o.TransactionInstruction({ keys: i, programId: r, data: d })
          );
        }
        function l(t, n) {
          if (!t.programId.equals(n))
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e },
            data: r,
          } = I(t);
          if (r.instruction !== a.TokenInstruction.InitializePermanentDelegate)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e) throw new u.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { mint: e }, data: r };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e],
            data: r,
          } = t;
          const { instruction: i, delegate: o } = s.decode(r);
          return {
            programId: n,
            keys: { mint: e },
            data: { instruction: i, delegate: o },
          };
        }
      }).call(this, e(2).Buffer);
    },
    24: function (t, n, e) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.addSigners = i));
      var r = e(1);
      function i(t, n, e) {
        if (e.length) {
          t.push({ pubkey: n, isSigner: !1, isWritable: !1 });
          for (const n of e)
            t.push({
              pubkey: n instanceof r.PublicKey ? n : n.publicKey,
              isSigner: !0,
              isWritable: !1,
            });
        } else t.push({ pubkey: n, isSigner: !0, isWritable: !1 });
        return t;
      }
    },
    296: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.amountToUiAmountInstructionData = void 0),
          (n.createAmountToUiAmountInstruction = d),
          (n.decodeAmountToUiAmountInstruction = l),
          (n.decodeAmountToUiAmountInstructionUnchecked = I));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(10);
        const s = (n.amountToUiAmountInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
        ]));
        function d(n, e, r) {
          void 0 === r && (r = c.TOKEN_PROGRAM_ID);
          const i = [{ pubkey: n, isSigner: !1, isWritable: !1 }],
            u = t.alloc(s.span);
          return (
            s.encode(
              {
                instruction: a.TokenInstruction.AmountToUiAmount,
                amount: BigInt(e),
              },
              u,
            ),
            new o.TransactionInstruction({ keys: i, programId: r, data: u })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e },
            data: r,
          } = I(t);
          if (r.instruction !== a.TokenInstruction.AmountToUiAmount)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e) throw new u.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { mint: e }, data: r };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e],
            data: r,
          } = t;
          return { programId: n, keys: { mint: e }, data: s.decode(r) };
        }
      }).call(this, e(2).Buffer);
    },
    302: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.approveInstructionData = void 0),
          (n.createApproveInstruction = l),
          (n.decodeApproveInstruction = I),
          (n.decodeApproveInstructionUnchecked = f));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.approveInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
        ]));
        function l(n, e, r, i, u, l) {
          (void 0 === u && (u = []), void 0 === l && (l = c.TOKEN_PROGRAM_ID));
          const I = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !1 },
              ],
              r,
              u,
            ),
            f = t.alloc(d.span);
          return (
            d.encode(
              { instruction: s.TokenInstruction.Approve, amount: BigInt(i) },
              f,
            ),
            new o.TransactionInstruction({ keys: I, programId: l, data: f })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, delegate: r, owner: i, multiSigners: o },
            data: a,
          } = f(t);
          if (a.instruction !== s.TokenInstruction.Approve)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, delegate: r, owner: i, multiSigners: o },
            data: a,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, delegate: r, owner: i, multiSigners: o },
            data: d.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    303: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.approveCheckedInstructionData = void 0),
          (n.createApproveCheckedInstruction = l),
          (n.decodeApproveCheckedInstruction = I),
          (n.decodeApproveCheckedInstructionUnchecked = f));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.approveCheckedInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
          (0, r.u8)("decimals"),
        ]));
        function l(n, e, r, i, u, l, I, f) {
          (void 0 === I && (I = []), void 0 === f && (f = c.TOKEN_PROGRAM_ID));
          const p = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !1 },
                { pubkey: r, isSigner: !1, isWritable: !1 },
              ],
              i,
              I,
            ),
            y = t.alloc(d.span);
          return (
            d.encode(
              {
                instruction: s.TokenInstruction.ApproveChecked,
                amount: BigInt(u),
                decimals: l,
              },
              y,
            ),
            new o.TransactionInstruction({ keys: p, programId: f, data: y })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: {
              account: e,
              mint: r,
              delegate: i,
              owner: o,
              multiSigners: a,
            },
            data: l,
          } = f(t);
          if (l.instruction !== s.TokenInstruction.ApproveChecked)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i || !o)
            throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: {
              account: e,
              mint: r,
              delegate: i,
              owner: o,
              multiSigners: a,
            },
            data: l,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, o, ...c],
            data: u,
          } = t;
          return {
            programId: n,
            keys: {
              account: e,
              mint: r,
              delegate: i,
              owner: o,
              multiSigners: c,
            },
            data: d.decode(u),
          };
        }
      }).call(this, e(2).Buffer);
    },
    304: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.burnInstructionData = void 0),
          (n.createBurnInstruction = l),
          (n.decodeBurnInstruction = I),
          (n.decodeBurnInstructionUnchecked = f));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.burnInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
        ]));
        function l(n, e, r, i, u, l) {
          (void 0 === u && (u = []), void 0 === l && (l = c.TOKEN_PROGRAM_ID));
          const I = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !0 },
              ],
              r,
              u,
            ),
            f = t.alloc(d.span);
          return (
            d.encode(
              { instruction: s.TokenInstruction.Burn, amount: BigInt(i) },
              f,
            ),
            new o.TransactionInstruction({ keys: I, programId: l, data: f })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r, owner: i, multiSigners: o },
            data: a,
          } = f(t);
          if (a.instruction !== s.TokenInstruction.Burn)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, mint: r, owner: i, multiSigners: o },
            data: a,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r, owner: i, multiSigners: o },
            data: d.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    305: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.burnCheckedInstructionData = void 0),
          (n.createBurnCheckedInstruction = l),
          (n.decodeBurnCheckedInstruction = I),
          (n.decodeBurnCheckedInstructionUnchecked = f));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.burnCheckedInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
          (0, r.u8)("decimals"),
        ]));
        function l(n, e, r, i, u, l, I) {
          (void 0 === l && (l = []), void 0 === I && (I = c.TOKEN_PROGRAM_ID));
          const f = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !0 },
              ],
              r,
              l,
            ),
            p = t.alloc(d.span);
          return (
            d.encode(
              {
                instruction: s.TokenInstruction.BurnChecked,
                amount: BigInt(i),
                decimals: u,
              },
              p,
            ),
            new o.TransactionInstruction({ keys: f, programId: I, data: p })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r, owner: i, multiSigners: o },
            data: a,
          } = f(t);
          if (a.instruction !== s.TokenInstruction.BurnChecked)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, mint: r, owner: i, multiSigners: o },
            data: a,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r, owner: i, multiSigners: o },
            data: d.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    306: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.closeAccountInstructionData = void 0),
          (n.createCloseAccountInstruction = d),
          (n.decodeCloseAccountInstruction = l),
          (n.decodeCloseAccountInstructionUnchecked = I));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(24),
          a = e(10);
        const s = (n.closeAccountInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function d(n, e, r, c, d) {
          (void 0 === c && (c = []), void 0 === d && (d = o.TOKEN_PROGRAM_ID));
          const l = (0, u.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !0 },
              ],
              r,
              c,
            ),
            I = t.alloc(s.span);
          return (
            s.encode({ instruction: a.TokenInstruction.CloseAccount }, I),
            new i.TransactionInstruction({ keys: l, programId: d, data: I })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, destination: r, authority: i, multiSigners: u },
            data: d,
          } = I(t);
          if (d.instruction !== a.TokenInstruction.CloseAccount)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new c.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, destination: r, authority: i, multiSigners: u },
            data: d,
          };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, destination: r, authority: i, multiSigners: o },
            data: s.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    307: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeMint2Instruction = l),
          (n.decodeInitializeMint2Instruction = I),
          (n.decodeInitializeMint2InstructionUnchecked = f),
          (n.initializeMint2InstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(10),
          s = e(155);
        const d = (n.initializeMint2InstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, r.u8)("decimals"),
          (0, i.publicKey)("mintAuthority"),
          new s.COptionPublicKeyLayout("freezeAuthority"),
        ]));
        function l(n, e, r, i, u) {
          void 0 === u && (u = c.TOKEN_PROGRAM_ID);
          const s = [{ pubkey: n, isSigner: !1, isWritable: !0 }],
            l = t.alloc(67);
          return (
            d.encode(
              {
                instruction: a.TokenInstruction.InitializeMint2,
                decimals: e,
                mintAuthority: r,
                freezeAuthority: i,
              },
              l,
            ),
            new o.TransactionInstruction({
              keys: s,
              programId: u,
              data: l.subarray(0, d.getSpan(l)),
            })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.getSpan(t.data))
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e },
            data: r,
          } = f(t);
          if (r.instruction !== a.TokenInstruction.InitializeMint2)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e) throw new u.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { mint: e }, data: r };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e],
            data: r,
          } = t;
          const {
            instruction: i,
            decimals: o,
            mintAuthority: c,
            freezeAuthority: u,
          } = d.decode(r);
          return {
            programId: n,
            keys: { mint: e },
            data: {
              instruction: i,
              decimals: o,
              mintAuthority: c,
              freezeAuthority: u,
            },
          };
        }
      }).call(this, e(2).Buffer);
    },
    308: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeMultisigInstruction = s),
          (n.decodeInitializeMultisigInstruction = d),
          (n.decodeInitializeMultisigInstructionUnchecked = l),
          (n.initializeMultisigInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10);
        const a = (n.initializeMultisigInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, r.u8)("m"),
        ]));
        function s(n, e, r, c) {
          void 0 === c && (c = o.TOKEN_PROGRAM_ID);
          const s = [
            { pubkey: n, isSigner: !1, isWritable: !0 },
            { pubkey: i.SYSVAR_RENT_PUBKEY, isSigner: !1, isWritable: !1 },
          ];
          for (const t of e)
            s.push({
              pubkey: t instanceof i.PublicKey ? t : t.publicKey,
              isSigner: !1,
              isWritable: !1,
            });
          const d = t.alloc(a.span);
          return (
            a.encode(
              { instruction: u.TokenInstruction.InitializeMultisig, m: r },
              d,
            ),
            new i.TransactionInstruction({ keys: s, programId: c, data: d })
          );
        }
        function d(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== a.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, rent: r, signers: i },
            data: s,
          } = l(t);
          if (s.instruction !== u.TokenInstruction.InitializeMultisig)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e || !r || !i.length)
            throw new c.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, rent: r, signers: i },
            data: s,
          };
        }
        function l(t) {
          let {
            programId: n,
            keys: [e, r, ...i],
            data: o,
          } = t;
          return {
            programId: n,
            keys: { account: e, rent: r, signers: i },
            data: a.decode(o),
          };
        }
      }).call(this, e(2).Buffer);
    },
    309: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createFreezeAccountInstruction = d),
          (n.decodeFreezeAccountInstruction = l),
          (n.decodeFreezeAccountInstructionUnchecked = I),
          (n.freezeAccountInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(24),
          a = e(10);
        const s = (n.freezeAccountInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function d(n, e, r, c, d) {
          (void 0 === c && (c = []), void 0 === d && (d = o.TOKEN_PROGRAM_ID));
          const l = (0, u.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !1 },
              ],
              r,
              c,
            ),
            I = t.alloc(s.span);
          return (
            s.encode({ instruction: a.TokenInstruction.FreezeAccount }, I),
            new i.TransactionInstruction({ keys: l, programId: d, data: I })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r, authority: i, multiSigners: u },
            data: d,
          } = I(t);
          if (d.instruction !== a.TokenInstruction.FreezeAccount)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new c.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, mint: r, authority: i, multiSigners: u },
            data: d,
          };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r, authority: i, multiSigners: o },
            data: s.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    310: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createMintToInstruction = l),
          (n.decodeMintToInstruction = I),
          (n.decodeMintToInstructionUnchecked = f),
          (n.mintToInstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.mintToInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
        ]));
        function l(n, e, r, i, u, l) {
          (void 0 === u && (u = []), void 0 === l && (l = c.TOKEN_PROGRAM_ID));
          const I = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !0 },
              ],
              r,
              u,
            ),
            f = t.alloc(d.span);
          return (
            d.encode(
              { instruction: s.TokenInstruction.MintTo, amount: BigInt(i) },
              f,
            ),
            new o.TransactionInstruction({ keys: I, programId: l, data: f })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e, destination: r, authority: i, multiSigners: o },
            data: a,
          } = f(t);
          if (a.instruction !== s.TokenInstruction.MintTo)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { mint: e, destination: r, authority: i, multiSigners: o },
            data: a,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { mint: e, destination: r, authority: i, multiSigners: o },
            data: d.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    311: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createMintToCheckedInstruction = l),
          (n.decodeMintToCheckedInstruction = I),
          (n.decodeMintToCheckedInstructionUnchecked = f),
          (n.mintToCheckedInstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.mintToCheckedInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
          (0, r.u8)("decimals"),
        ]));
        function l(n, e, r, i, u, l, I) {
          (void 0 === l && (l = []), void 0 === I && (I = c.TOKEN_PROGRAM_ID));
          const f = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !0 },
              ],
              r,
              l,
            ),
            p = t.alloc(d.span);
          return (
            d.encode(
              {
                instruction: s.TokenInstruction.MintToChecked,
                amount: BigInt(i),
                decimals: u,
              },
              p,
            ),
            new o.TransactionInstruction({ keys: f, programId: I, data: p })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e, destination: r, authority: i, multiSigners: o },
            data: a,
          } = f(t);
          if (a.instruction !== s.TokenInstruction.MintToChecked)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { mint: e, destination: r, authority: i, multiSigners: o },
            data: a,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { mint: e, destination: r, authority: i, multiSigners: o },
            data: d.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    312: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createRevokeInstruction = d),
          (n.decodeRevokeInstruction = l),
          (n.decodeRevokeInstructionUnchecked = I),
          (n.revokeInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(24),
          a = e(10);
        const s = (n.revokeInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function d(n, e, r, c) {
          (void 0 === r && (r = []), void 0 === c && (c = o.TOKEN_PROGRAM_ID));
          const d = (0, u.addSigners)(
              [{ pubkey: n, isSigner: !1, isWritable: !0 }],
              e,
              r,
            ),
            l = t.alloc(s.span);
          return (
            s.encode({ instruction: a.TokenInstruction.Revoke }, l),
            new i.TransactionInstruction({ keys: d, programId: c, data: l })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, owner: r, multiSigners: i },
            data: u,
          } = I(t);
          if (u.instruction !== a.TokenInstruction.Revoke)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e || !r) throw new c.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, owner: r, multiSigners: i },
            data: u,
          };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e, r, ...i],
            data: o,
          } = t;
          return {
            programId: n,
            keys: { account: e, owner: r, multiSigners: i },
            data: s.decode(o),
          };
        }
      }).call(this, e(2).Buffer);
    },
    313: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.AuthorityType = void 0),
          (n.createSetAuthorityInstruction = I),
          (n.decodeSetAuthorityInstruction = f),
          (n.decodeSetAuthorityInstructionUnchecked = p),
          (n.setAuthorityInstructionData = void 0));
        var r,
          i = e(6),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10),
          d = e(155);
        (function (t) {
          ((t[(t["MintTokens"] = 0)] = "MintTokens"),
            (t[(t["FreezeAccount"] = 1)] = "FreezeAccount"),
            (t[(t["AccountOwner"] = 2)] = "AccountOwner"),
            (t[(t["CloseAccount"] = 3)] = "CloseAccount"),
            (t[(t["TransferFeeConfig"] = 4)] = "TransferFeeConfig"),
            (t[(t["WithheldWithdraw"] = 5)] = "WithheldWithdraw"),
            (t[(t["CloseMint"] = 6)] = "CloseMint"),
            (t[(t["InterestRate"] = 7)] = "InterestRate"),
            (t[(t["PermanentDelegate"] = 8)] = "PermanentDelegate"),
            (t[(t["ConfidentialTransferMint"] = 9)] =
              "ConfidentialTransferMint"),
            (t[(t["TransferHookProgramId"] = 10)] = "TransferHookProgramId"),
            (t[(t["ConfidentialTransferFeeConfig"] = 11)] =
              "ConfidentialTransferFeeConfig"),
            (t[(t["MetadataPointer"] = 12)] = "MetadataPointer"),
            (t[(t["GroupPointer"] = 13)] = "GroupPointer"),
            (t[(t["GroupMemberPointer"] = 14)] = "GroupMemberPointer"),
            (t[(t["ScaledUiAmountConfig"] = 15)] = "ScaledUiAmountConfig"),
            (t[(t["PausableConfig"] = 16)] = "PausableConfig"));
        })(r || (n.AuthorityType = r = {}));
        const l = (n.setAuthorityInstructionData = (0, i.struct)([
          (0, i.u8)("instruction"),
          (0, i.u8)("authorityType"),
          new d.COptionPublicKeyLayout("newAuthority"),
        ]));
        function I(n, e, r, i, u, d) {
          (void 0 === u && (u = []), void 0 === d && (d = c.TOKEN_PROGRAM_ID));
          const I = (0, a.addSigners)(
              [{ pubkey: n, isSigner: !1, isWritable: !0 }],
              e,
              u,
            ),
            f = t.alloc(35);
          return (
            l.encode(
              {
                instruction: s.TokenInstruction.SetAuthority,
                authorityType: r,
                newAuthority: i,
              },
              f,
            ),
            new o.TransactionInstruction({
              keys: I,
              programId: d,
              data: f.subarray(0, l.getSpan(f)),
            })
          );
        }
        function f(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== l.getSpan(t.data))
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, currentAuthority: r, multiSigners: i },
            data: o,
          } = p(t);
          if (o.instruction !== s.TokenInstruction.SetAuthority)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, currentAuthority: r, multiSigners: i },
            data: o,
          };
        }
        function p(t) {
          let {
            programId: n,
            keys: [e, r, ...i],
            data: o,
          } = t;
          const {
            instruction: c,
            authorityType: u,
            newAuthority: a,
          } = l.decode(o);
          return {
            programId: n,
            keys: { account: e, currentAuthority: r, multiSigners: i },
            data: { instruction: c, authorityType: u, newAuthority: a },
          };
        }
      }).call(this, e(2).Buffer);
    },
    314: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createThawAccountInstruction = d),
          (n.decodeThawAccountInstruction = l),
          (n.decodeThawAccountInstructionUnchecked = I),
          (n.thawAccountInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(24),
          a = e(10);
        const s = (n.thawAccountInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function d(n, e, r, c, d) {
          (void 0 === c && (c = []), void 0 === d && (d = o.TOKEN_PROGRAM_ID));
          const l = (0, u.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !1 },
              ],
              r,
              c,
            ),
            I = t.alloc(s.span);
          return (
            s.encode({ instruction: a.TokenInstruction.ThawAccount }, I),
            new i.TransactionInstruction({ keys: l, programId: d, data: I })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r, authority: i, multiSigners: u },
            data: d,
          } = I(t);
          if (d.instruction !== a.TokenInstruction.ThawAccount)
            throw new c.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new c.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, mint: r, authority: i, multiSigners: u },
            data: d,
          };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r, authority: i, multiSigners: o },
            data: s.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    315: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createTransferInstruction = l),
          (n.decodeTransferInstruction = I),
          (n.decodeTransferInstructionUnchecked = f),
          (n.transferInstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(24),
          s = e(10);
        const d = (n.transferInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.u64)("amount"),
        ]));
        function l(n, e, r, i, u, l) {
          (void 0 === u && (u = []), void 0 === l && (l = c.TOKEN_PROGRAM_ID));
          const I = (0, a.addSigners)(
              [
                { pubkey: n, isSigner: !1, isWritable: !0 },
                { pubkey: e, isSigner: !1, isWritable: !0 },
              ],
              r,
              u,
            ),
            f = t.alloc(d.span);
          return (
            d.encode(
              { instruction: s.TokenInstruction.Transfer, amount: BigInt(i) },
              f,
            ),
            new o.TransactionInstruction({ keys: I, programId: l, data: f })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { source: e, destination: r, owner: i, multiSigners: o },
            data: a,
          } = f(t);
          if (a.instruction !== s.TokenInstruction.Transfer)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { source: e, destination: r, owner: i, multiSigners: o },
            data: a,
          };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r, i, ...o],
            data: c,
          } = t;
          return {
            programId: n,
            keys: { source: e, destination: r, owner: i, multiSigners: o },
            data: d.decode(c),
          };
        }
      }).call(this, e(2).Buffer);
    },
    316: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createUiAmountToAmountInstruction = a),
          (n.decodeUiAmountToAmountInstruction = s),
          (n.decodeUiAmountToAmountInstructionUnchecked = d));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10);
        function a(n, e, c) {
          void 0 === c && (c = o.TOKEN_PROGRAM_ID);
          const a = [{ pubkey: n, isSigner: !1, isWritable: !1 }],
            s = t.from(e, "utf8"),
            d = (0, r.struct)([
              (0, r.u8)("instruction"),
              (0, r.blob)(s.length, "amount"),
            ]),
            l = t.alloc(d.span);
          return (
            d.encode(
              { instruction: u.TokenInstruction.UiAmountToAmount, amount: s },
              l,
            ),
            new i.TransactionInstruction({ keys: a, programId: c, data: l })
          );
        }
        function s(t, n) {
          if (
            (void 0 === n && (n = o.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new c.TokenInvalidInstructionProgramError();
          const e = (0, r.struct)([
            (0, r.u8)("instruction"),
            (0, r.blob)(t.data.length - 1, "amount"),
          ]);
          if (t.data.length !== e.span)
            throw new c.TokenInvalidInstructionDataError();
          const {
            keys: { mint: i },
            data: a,
          } = d(t);
          if (a.instruction !== u.TokenInstruction.UiAmountToAmount)
            throw new c.TokenInvalidInstructionTypeError();
          if (!i) throw new c.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { mint: i }, data: a };
        }
        function d(t) {
          let {
            programId: n,
            keys: [e],
            data: i,
          } = t;
          const o = (0, r.struct)([
            (0, r.u8)("instruction"),
            (0, r.blob)(i.length - 1, "amount"),
          ]);
          return { programId: n, keys: { mint: e }, data: o.decode(i) };
        }
      }).call(this, e(2).Buffer);
    },
    317: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeMintInstruction = l),
          (n.decodeInitializeMintInstruction = I),
          (n.decodeInitializeMintInstructionUnchecked = f),
          (n.initializeMintInstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(10),
          s = e(155);
        const d = (n.initializeMintInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, r.u8)("decimals"),
          (0, i.publicKey)("mintAuthority"),
          new s.COptionPublicKeyLayout("freezeAuthority"),
        ]));
        function l(n, e, r, i, u) {
          void 0 === u && (u = c.TOKEN_PROGRAM_ID);
          const s = [
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: o.SYSVAR_RENT_PUBKEY, isSigner: !1, isWritable: !1 },
            ],
            l = t.alloc(67);
          return (
            d.encode(
              {
                instruction: a.TokenInstruction.InitializeMint,
                decimals: e,
                mintAuthority: r,
                freezeAuthority: i,
              },
              l,
            ),
            new o.TransactionInstruction({
              keys: s,
              programId: u,
              data: l.subarray(0, d.getSpan(l)),
            })
          );
        }
        function I(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== d.getSpan(t.data))
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { mint: e, rent: r },
            data: i,
          } = f(t);
          if (i.instruction !== a.TokenInstruction.InitializeMint)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r) throw new u.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { mint: e, rent: r }, data: i };
        }
        function f(t) {
          let {
            programId: n,
            keys: [e, r],
            data: i,
          } = t;
          const {
            instruction: o,
            decimals: c,
            mintAuthority: u,
            freezeAuthority: a,
          } = d.decode(i);
          return {
            programId: n,
            keys: { mint: e, rent: r },
            data: {
              instruction: o,
              decimals: c,
              mintAuthority: u,
              freezeAuthority: a,
            },
          };
        }
      }).call(this, e(2).Buffer);
    },
    51: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.MintLayout = n.MINT_SIZE = void 0),
          (n.getAssociatedTokenAddress = T),
          (n.getAssociatedTokenAddressSync = g),
          (n.getMinimumBalanceForRentExemptMint = k),
          (n.getMinimumBalanceForRentExemptMintWithExtensions = m),
          (n.getMint = p),
          (n.unpackMint = y));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(182),
          s = e(30),
          d = e(153),
          l = e(154);
        const I = (n.MintLayout = (0, r.struct)([
            (0, r.u32)("mintAuthorityOption"),
            (0, i.publicKey)("mintAuthority"),
            (0, i.u64)("supply"),
            (0, r.u8)("decimals"),
            (0, i.bool)("isInitialized"),
            (0, r.u32)("freezeAuthorityOption"),
            (0, i.publicKey)("freezeAuthority"),
          ])),
          f = (n.MINT_SIZE = I.span);
        async function p(t, n, e, r) {
          void 0 === r && (r = c.TOKEN_PROGRAM_ID);
          const i = await t.getAccountInfo(n, e);
          return y(n, i, r);
        }
        function y(n, e, r) {
          if ((void 0 === r && (r = c.TOKEN_PROGRAM_ID), !e))
            throw new u.TokenAccountNotFoundError();
          if (!e.owner.equals(r)) throw new u.TokenInvalidAccountOwnerError();
          if (e.data.length < f) throw new u.TokenInvalidAccountSizeError();
          const i = I.decode(e.data.slice(0, f));
          let o = t.alloc(0);
          if (e.data.length > f) {
            if (e.data.length <= d.ACCOUNT_SIZE)
              throw new u.TokenInvalidAccountSizeError();
            if (e.data.length === l.MULTISIG_SIZE)
              throw new u.TokenInvalidAccountSizeError();
            if (e.data[d.ACCOUNT_SIZE] != a.AccountType.Mint)
              throw new u.TokenInvalidMintError();
            o = e.data.slice(d.ACCOUNT_SIZE + a.ACCOUNT_TYPE_SIZE);
          }
          return {
            address: n,
            mintAuthority: i.mintAuthorityOption ? i.mintAuthority : null,
            supply: i.supply,
            decimals: i.decimals,
            isInitialized: i.isInitialized,
            freezeAuthority: i.freezeAuthorityOption ? i.freezeAuthority : null,
            tlvData: o,
          };
        }
        async function k(t, n) {
          return await m(t, [], n);
        }
        async function m(t, n, e) {
          const r = (0, s.getMintLen)(n);
          return await t.getMinimumBalanceForRentExemption(r, e);
        }
        async function T(t, n, e, r, i) {
          if (
            (void 0 === e && (e = !1),
            void 0 === r && (r = c.TOKEN_PROGRAM_ID),
            void 0 === i && (i = c.ASSOCIATED_TOKEN_PROGRAM_ID),
            !e && !o.PublicKey.isOnCurve(n.toBuffer()))
          )
            throw new u.TokenOwnerOffCurveError();
          const [a] = await o.PublicKey.findProgramAddress(
            [n.toBuffer(), r.toBuffer(), t.toBuffer()],
            i,
          );
          return a;
        }
        function g(t, n, e, r, i) {
          if (
            (void 0 === e && (e = !1),
            void 0 === r && (r = c.TOKEN_PROGRAM_ID),
            void 0 === i && (i = c.ASSOCIATED_TOKEN_PROGRAM_ID),
            !e && !o.PublicKey.isOnCurve(n.toBuffer()))
          )
            throw new u.TokenOwnerOffCurveError();
          const [a] = o.PublicKey.findProgramAddressSync(
            [n.toBuffer(), r.toBuffer(), t.toBuffer()],
            i,
          );
          return a;
        }
      }).call(this, e(2).Buffer);
    },
    636: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createCreateNativeMintInstruction = s),
          (n.createNativeMintInstructionData = void 0));
        var r = e(6),
          i = e(1),
          o = e(3),
          c = e(7),
          u = e(10);
        const a = (n.createNativeMintInstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
        ]));
        function s(n, e, r) {
          if (
            (void 0 === e && (e = o.NATIVE_MINT_2022),
            void 0 === r && (r = o.TOKEN_2022_PROGRAM_ID),
            !(0, o.programSupportsExtensions)(r))
          )
            throw new c.TokenUnsupportedInstructionError();
          const s = [
              { pubkey: n, isSigner: !0, isWritable: !0 },
              { pubkey: e, isSigner: !1, isWritable: !0 },
              {
                pubkey: i.SystemProgram.programId,
                isSigner: !1,
                isWritable: !1,
              },
            ],
            d = t.alloc(a.span);
          return (
            a.encode({ instruction: u.TokenInstruction.CreateNativeMint }, d),
            new i.TransactionInstruction({ keys: s, programId: r, data: d })
          );
        }
      }).call(this, e(2).Buffer);
    },
    640: function (t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 });
      var r = e(153);
      Object.keys(r).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === r[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return r[t];
              },
            }));
      });
      var i = e(51);
      Object.keys(i).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === i[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return i[t];
              },
            }));
      });
      var o = e(154);
      Object.keys(o).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          ((t in n && n[t] === o[t]) ||
            Object.defineProperty(n, t, {
              enumerable: !0,
              get: function () {
                return o[t];
              },
            }));
      });
    },
    641: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeAccount2Instruction = d),
          (n.decodeInitializeAccount2Instruction = l),
          (n.decodeInitializeAccount2InstructionUnchecked = I),
          (n.initializeAccount2InstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(10);
        const s = (n.initializeAccount2InstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.publicKey)("owner"),
        ]));
        function d(n, e, r, i) {
          void 0 === i && (i = c.TOKEN_PROGRAM_ID);
          const u = [
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: e, isSigner: !1, isWritable: !1 },
              { pubkey: o.SYSVAR_RENT_PUBKEY, isSigner: !1, isWritable: !1 },
            ],
            d = t.alloc(s.span);
          return (
            s.encode(
              { instruction: a.TokenInstruction.InitializeAccount2, owner: r },
              d,
            ),
            new o.TransactionInstruction({ keys: u, programId: i, data: d })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r, rent: i },
            data: o,
          } = I(t);
          if (o.instruction !== a.TokenInstruction.InitializeAccount2)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r || !i) throw new u.TokenInvalidInstructionKeysError();
          return {
            programId: n,
            keys: { account: e, mint: r, rent: i },
            data: o,
          };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e, r, i],
            data: o,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r, rent: i },
            data: s.decode(o),
          };
        }
      }).call(this, e(2).Buffer);
    },
    642: function (t, n, e) {
      "use strict";
      (function (t) {
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createInitializeAccount3Instruction = d),
          (n.decodeInitializeAccount3Instruction = l),
          (n.decodeInitializeAccount3InstructionUnchecked = I),
          (n.initializeAccount3InstructionData = void 0));
        var r = e(6),
          i = e(12),
          o = e(1),
          c = e(3),
          u = e(7),
          a = e(10);
        const s = (n.initializeAccount3InstructionData = (0, r.struct)([
          (0, r.u8)("instruction"),
          (0, i.publicKey)("owner"),
        ]));
        function d(n, e, r, i) {
          void 0 === i && (i = c.TOKEN_PROGRAM_ID);
          const u = [
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: e, isSigner: !1, isWritable: !1 },
            ],
            d = t.alloc(s.span);
          return (
            s.encode(
              { instruction: a.TokenInstruction.InitializeAccount3, owner: r },
              d,
            ),
            new o.TransactionInstruction({ keys: u, programId: i, data: d })
          );
        }
        function l(t, n) {
          if (
            (void 0 === n && (n = c.TOKEN_PROGRAM_ID), !t.programId.equals(n))
          )
            throw new u.TokenInvalidInstructionProgramError();
          if (t.data.length !== s.span)
            throw new u.TokenInvalidInstructionDataError();
          const {
            keys: { account: e, mint: r },
            data: i,
          } = I(t);
          if (i.instruction !== a.TokenInstruction.InitializeAccount3)
            throw new u.TokenInvalidInstructionTypeError();
          if (!e || !r) throw new u.TokenInvalidInstructionKeysError();
          return { programId: n, keys: { account: e, mint: r }, data: i };
        }
        function I(t) {
          let {
            programId: n,
            keys: [e, r],
            data: i,
          } = t;
          return {
            programId: n,
            keys: { account: e, mint: r },
            data: s.decode(i),
          };
        }
      }).call(this, e(2).Buffer);
    },
  },
]);
