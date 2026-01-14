(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [314],
  {
    4927: function (t, e, o) {
      const { ADDRESS_PREFIX: r, ADDRESS_PREFIX_BYTE: s } = o(5902),
        { base64DecodeFromString: n, hexStr2byteArray: a } =
          (o(3877).base64EncodeToString, o(3877)),
        { encode58: i, decode58: p } = o(7238),
        c = o(795).ec,
        { keccak256: l } = o(7239),
        u = o(5903),
        d = o(5902).ADDRESS_SIZE,
        { byte2hexStr: g, byteArray2hexStr: y } = o(5904);
      function f(t, e) {
        "string" === typeof t && (t = a(t));
        let o = e.getRawData(),
          r = o.serializeBinary(),
          s = I(r),
          n = m(s, t),
          i = new Uint8Array(n),
          p = o.getContractList().length;
        for (let a = 0; a < p; a++) e.addSignature(i);
        return { transaction: e, hex: y(e.serializeBinary()) };
      }
      function h(t, e) {
        "string" === typeof t && (t = a(t));
        let o = I(e),
          r = m(o, t);
        return r;
      }
      function B() {
        let t = new c("secp256k1"),
          e = t.genKeyPair(),
          o = e.getPrivate(),
          r = o.toString("hex");
        while (r.length < 64) r = "0" + r;
        return a(r);
      }
      function A(t) {
        65 === t.length && (t = t.slice(1));
        var e = l(t).toString(),
          o = e.substring(24);
        return ((o = r + o), a(o));
      }
      function M(t) {
        let e = w(t);
        return A(e);
      }
      function F(t) {
        var e = I(t),
          o = I(e),
          r = o.slice(0, 4);
        return ((r = t.concat(r)), i(r));
      }
      function T(t) {
        var e = p(t);
        if (e.length <= 4) return (console.error("ERROR CHECK"), null);
        var o = e.slice(0, e.length - 4),
          r = I(o),
          s = I(r);
        return s[0] === e[o.length] &&
          s[1] === e[o.length + 1] &&
          s[2] === e[o.length + 2] &&
          s[3] === e[o.length + 3]
          ? o
          : null;
      }
      function b(t) {
        try {
          if ("string" !== typeof t) return !1;
          if (t.length !== d) return !1;
          var e = p(t);
          if (25 !== e.length) return !1;
          if (e[0] !== s) return !1;
          var o = e.slice(21);
          e = e.slice(0, 21);
          var r = I(e),
            n = I(r),
            a = n.slice(0, 4);
          if (o[0] == a[0] && o[1] == a[1] && o[2] == a[2] && o[3] == a[3])
            return !0;
        } catch (i) {}
        return !1;
      }
      function C(t) {
        var e = n(t),
          o = w(e),
          r = A(o);
        return F(r);
      }
      function w(t) {
        var e = new c("secp256k1"),
          o = e.keyFromPrivate(t, "bytes"),
          r = o.getPublic(),
          s = r.x,
          n = r.y,
          i = s.toString("hex");
        while (i.length < 64) i = "0" + i;
        var p = n.toString("hex");
        while (p.length < 64) p = "0" + p;
        var l = "04" + i + p,
          u = a(l);
        return u;
      }
      function m(t, e) {
        let o = new c("secp256k1"),
          r = o.keyFromPrivate(e, "bytes"),
          s = r.sign(t),
          n = s.r,
          i = s.s,
          p = s.recoveryParam,
          l = n.toString("hex");
        while (l.length < 64) l = "0" + l;
        let u = i.toString("hex");
        while (u.length < 64) u = "0" + u;
        let d = g(p),
          y = l + u + d;
        return a(y);
      }
      function I(t) {
        let e = new u("SHA-256", "HEX"),
          o = y(t);
        e.update(o);
        let r = e.getHash("HEX");
        return a(r);
      }
      function k(t) {
        let e = n(t),
          o = M(e);
        return F(o);
      }
      function W(t) {
        let e = a(t),
          o = M(e);
        return F(o);
      }
      t.exports = {
        signTransaction: f,
        passwordToAddress: k,
        genPriKey: B,
        getAddressFromPriKey: M,
        getPubKeyFromPriKey: w,
        getBase58CheckAddress: F,
        isAddressValid: b,
        getBase58CheckAddressFromPriKeyBase64String: C,
        pkToAddress: W,
        decode58Check: T,
        signBytes: h,
      };
    },
    5901: function (t, e, o) {
      const r = o(4927).decode58Check,
        { Block: Block, Transaction: s, Account: n } = o(5905),
        a = o(5906),
        i = o(3877).encodeString,
        {
          TransferContract: p,
          TransferAssetContract: c,
          AccountUpdateContract: l,
          VoteWitnessContract: u,
          ParticipateAssetIssueContract: d,
          AssetIssueContract: g,
          FreezeBalanceContract: y,
          UnfreezeBalanceContract: f,
          WitnessUpdateContract: h,
          WithdrawBalanceContract: B,
          WitnessCreateContract: A,
          UnfreezeAssetContract: M,
        } = o(7242);
      function F(t, e, o) {
        let r = new a.Any();
        r.pack(t.serializeBinary(), "protocol." + o);
        let n = new s.Contract();
        (n.setType(e), n.setParameter(r));
        let i = new s.raw();
        i.addContract(n);
        let p = new s();
        return (p.setRawData(i), p);
      }
      function T(t, e, o, n) {
        if ("TRX" === t.toUpperCase()) {
          let t = new p();
          return (
            t.setToAddress(Uint8Array.from(r(o))),
            t.setOwnerAddress(Uint8Array.from(r(e))),
            t.setAmount(n),
            F(t, s.Contract.ContractType.TRANSFERCONTRACT, "TransferContract")
          );
        }
        {
          let a = new c();
          return (
            a.setToAddress(Uint8Array.from(r(o))),
            a.setOwnerAddress(Uint8Array.from(r(e))),
            a.setAmount(n),
            a.setAssetName(i(t)),
            F(
              a,
              s.Contract.ContractType.TRANSFERASSETCONTRACT,
              "TransferAssetContract",
            )
          );
        }
      }
      function b(t, e) {
        let o = new l();
        return (
          o.setOwnerAddress(Uint8Array.from(r(t))),
          o.setAccountName(i(e)),
          F(
            o,
            s.Contract.ContractType.ACCOUNTUPDATECONTRACT,
            "AccountUpdateContract",
          )
        );
      }
      function C(t, e) {
        let o = new A();
        return (
          o.setOwnerAddress(Uint8Array.from(r(t))),
          o.setUrl(i(e)),
          F(
            o,
            s.Contract.ContractType.WITNESSCREATECONTRACT,
            "WitnessCreateContract",
          )
        );
      }
      function w(t, e) {
        let o = new h();
        return (
          o.setOwnerAddress(Uint8Array.from(r(t))),
          o.setUpdateUrl(i(e)),
          F(
            o,
            s.Contract.ContractType.WITNESSUPDATECONTRACT,
            "WitnessUpdateContract",
          )
        );
      }
      function m(t) {
        let e = new B();
        return (
          e.setOwnerAddress(Uint8Array.from(r(t))),
          F(
            e,
            s.Contract.ContractType.WITHDRAWBALANCECONTRACT,
            "WithdrawBalanceContract",
          )
        );
      }
      function I(t, e) {
        let o = new u();
        o.setOwnerAddress(Uint8Array.from(r(t)));
        for (let s of Object.keys(e)) {
          let t = new u.Vote();
          t.setVoteAddress(Uint8Array.from(r(s)));
          let n = parseInt(e[s]);
          isNaN(n) || n <= 0 || (t.setVoteCount(n), o.addVotes(t));
        }
        return F(
          o,
          s.Contract.ContractType.VOTEWITNESSCONTRACT,
          "VoteWitnessContract",
        );
      }
      function k(t, e, o, n) {
        let a = new d();
        return (
          a.setToAddress(Uint8Array.from(r(e))),
          a.setOwnerAddress(Uint8Array.from(r(t))),
          a.setAssetName(i(o)),
          a.setAmount(n),
          F(
            a,
            s.Contract.ContractType.PARTICIPATEASSETISSUECONTRACT,
            "ParticipateAssetIssueContract",
          )
        );
      }
      function W(t) {
        let e = new g();
        if (
          (e.setOwnerAddress(Uint8Array.from(r(t.address))),
          e.setName(i(t.name)),
          e.setAbbr(i(t.shortName)),
          e.setTotalSupply(t.totalSupply),
          e.setNum(t.num),
          e.setEndTime(Date.parse(t.endTime)),
          e.setStartTime(Date.parse(t.startTime)),
          e.setTrxNum(t.trxNum),
          e.setDescription(i(t.description)),
          e.setUrl(i(t.url)),
          e.setPublicFreeAssetNetUsage(0),
          e.setFreeAssetNetLimit(0),
          e.setPublicFreeAssetNetLimit(0),
          t.frozenSupply)
        )
          for (let o of t.frozenSupply) {
            let t = new g.FrozenSupply();
            (t.setFrozenAmount(o.amount),
              t.setFrozenDays(o.days),
              e.addFrozenSupply(t));
          }
        return F(
          e,
          s.Contract.ContractType.ASSETISSUECONTRACT,
          "AssetIssueContract",
        );
      }
      function O(t, e, o) {
        let n = new y();
        return (
          n.setOwnerAddress(Uint8Array.from(r(t))),
          n.setFrozenBalance(e),
          n.setFrozenDuration(o),
          F(
            n,
            s.Contract.ContractType.FREEZEBALANCECONTRACT,
            "FreezeBalanceContract",
          )
        );
      }
      function z(t) {
        let e = new f();
        return (
          e.setOwnerAddress(Uint8Array.from(r(t))),
          F(
            e,
            s.Contract.ContractType.UNFREEZEBALANCECONTRACT,
            "UnfreezeBalanceContract",
          )
        );
      }
      function E(t) {
        let e = new M();
        return (
          e.setOwnerAddress(Uint8Array.from(r(t))),
          F(
            e,
            s.Contract.ContractType.UNFREEZEASSETCONTRACT,
            "UnfreezeAssetContract",
          )
        );
      }
      t.exports = {
        buildTransferTransaction: T,
        buildAccountUpdate: b,
        buildAssetParticipate: k,
        buildVote: I,
        buildFreezeBalance: O,
        buildUnfreezeBalance: z,
        buildAssetIssue: W,
        buildWitnessUpdate: w,
        buildWithdrawBalance: m,
        buildWitnessCreate: C,
        buildUnfreezeAsset: E,
      };
    },
    5902: function (t, e) {
      const o = 34,
        r = "41",
        s = 65;
      t.exports = {
        ADDRESS_SIZE: o,
        ADDRESS_PREFIX: r,
        ADDRESS_PREFIX_BYTE: s,
      };
    },
    5904: function (t, e, o) {
      const { Base64: r } = o(7240);
      function s(t) {
        var e = "0123456789ABCDEF",
          o = "";
        return ((o += e.charAt(t >> 4)), (o += e.charAt(15 & t)), o);
      }
      function n(t) {
        if ("string" === typeof t) return t;
        let e = "",
          o = t;
        for (let r = 0; r < o.length; r++) {
          let t = o[r].toString(2),
            s = t.match(/^1+?(?=0)/);
          if (s && 8 === t.length) {
            let t = s[0].length,
              n = o[r].toString(2).slice(7 - t);
            for (let e = 1; e < t; e++) n += o[e + r].toString(2).slice(2);
            ((e += String.fromCharCode(parseInt(n, 2))), (r += t - 1));
          } else e += String.fromCharCode(o[r]);
        }
        return e;
      }
      function a(t) {
        let e = t.split(""),
          o = "";
        for (let r = 0; r < e.length / 2; r++) {
          let t = "0x" + e[2 * r] + e[2 * r + 1];
          o += String.fromCharCode(t);
        }
        return o;
      }
      function i(t) {
        return new r().decodeToByteArray(t);
      }
      function p(t) {
        let e = "";
        for (let o = 0; o < t.length; o++) e += s(t[o]);
        return e;
      }
      t.exports = {
        byteArray2hexStr: p,
        hextoString: a,
        base64DecodeFromString: i,
        bytesToString: n,
        byte2hexStr: s,
      };
    },
    5905: function (t, e, o) {
      var r = o(4627),
        s = r,
        n = (function () {
          return this;
        })(),
        a = o(5906),
        i = o(7241);
      (s.exportSymbol("proto.protocol.Account", null, n),
        s.exportSymbol("proto.protocol.Account.Frozen", null, n),
        s.exportSymbol("proto.protocol.AccountId", null, n),
        s.exportSymbol("proto.protocol.AccountType", null, n),
        s.exportSymbol("proto.protocol.Block", null, n),
        s.exportSymbol("proto.protocol.BlockHeader", null, n),
        s.exportSymbol("proto.protocol.BlockHeader.raw", null, n),
        s.exportSymbol("proto.protocol.BlockInventory", null, n),
        s.exportSymbol("proto.protocol.BlockInventory.BlockId", null, n),
        s.exportSymbol("proto.protocol.BlockInventory.Type", null, n),
        s.exportSymbol("proto.protocol.ChainInventory", null, n),
        s.exportSymbol("proto.protocol.ChainInventory.BlockId", null, n),
        s.exportSymbol("proto.protocol.DisconnectMessage", null, n),
        s.exportSymbol("proto.protocol.DynamicProperties", null, n),
        s.exportSymbol("proto.protocol.HelloMessage", null, n),
        s.exportSymbol("proto.protocol.HelloMessage.BlockId", null, n),
        s.exportSymbol("proto.protocol.Inventory", null, n),
        s.exportSymbol("proto.protocol.Inventory.InventoryType", null, n),
        s.exportSymbol("proto.protocol.Items", null, n),
        s.exportSymbol("proto.protocol.Items.ItemType", null, n),
        s.exportSymbol("proto.protocol.ReasonCode", null, n),
        s.exportSymbol("proto.protocol.TXInput", null, n),
        s.exportSymbol("proto.protocol.TXInput.raw", null, n),
        s.exportSymbol("proto.protocol.TXOutput", null, n),
        s.exportSymbol("proto.protocol.TXOutputs", null, n),
        s.exportSymbol("proto.protocol.Transaction", null, n),
        s.exportSymbol("proto.protocol.Transaction.Contract", null, n),
        s.exportSymbol(
          "proto.protocol.Transaction.Contract.ContractType",
          null,
          n,
        ),
        s.exportSymbol("proto.protocol.Transaction.Result", null, n),
        s.exportSymbol("proto.protocol.Transaction.Result.code", null, n),
        s.exportSymbol("proto.protocol.Transaction.raw", null, n),
        s.exportSymbol("proto.protocol.Transactions", null, n),
        s.exportSymbol("proto.protocol.Vote", null, n),
        s.exportSymbol("proto.protocol.Votes", null, n),
        s.exportSymbol("proto.protocol.Witness", null, n),
        s.exportSymbol("proto.protocol.acuthrity", null, n),
        s.exportSymbol("proto.protocol.permision", null, n),
        (proto.protocol.AccountId = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.AccountId, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.AccountId.displayName = "proto.protocol.AccountId"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.AccountId.prototype.toObject = function (t) {
            return proto.protocol.AccountId.toObject(t, this);
          }),
          (proto.protocol.AccountId.toObject = function (t, e) {
            var o = { name: e.getName_asB64(), address: e.getAddress_asB64() };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.AccountId.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.AccountId();
          return proto.protocol.AccountId.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.AccountId.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setName(r);
                break;
              case 2:
                r = e.readBytes();
                t.setAddress(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.AccountId.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.AccountId.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.AccountId.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getName_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getAddress_asU8()),
            o.length > 0 && e.writeBytes(2, o));
        }),
        (proto.protocol.AccountId.prototype.getName = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.AccountId.prototype.getName_asB64 = function () {
          return r.Message.bytesAsB64(this.getName());
        }),
        (proto.protocol.AccountId.prototype.getName_asU8 = function () {
          return r.Message.bytesAsU8(this.getName());
        }),
        (proto.protocol.AccountId.prototype.setName = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.AccountId.prototype.getAddress = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.AccountId.prototype.getAddress_asB64 = function () {
          return r.Message.bytesAsB64(this.getAddress());
        }),
        (proto.protocol.AccountId.prototype.getAddress_asU8 = function () {
          return r.Message.bytesAsU8(this.getAddress());
        }),
        (proto.protocol.AccountId.prototype.setAddress = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.Vote = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.Vote, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Vote.displayName = "proto.protocol.Vote"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Vote.prototype.toObject = function (t) {
            return proto.protocol.Vote.toObject(t, this);
          }),
          (proto.protocol.Vote.toObject = function (t, e) {
            var o = {
              voteAddress: e.getVoteAddress_asB64(),
              voteCount: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Vote.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Vote();
          return proto.protocol.Vote.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Vote.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setVoteAddress(r);
                break;
              case 2:
                r = e.readInt64();
                t.setVoteCount(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Vote.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Vote.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Vote.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getVoteAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getVoteCount()),
            0 !== o && e.writeInt64(2, o));
        }),
        (proto.protocol.Vote.prototype.getVoteAddress = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.Vote.prototype.getVoteAddress_asB64 = function () {
          return r.Message.bytesAsB64(this.getVoteAddress());
        }),
        (proto.protocol.Vote.prototype.getVoteAddress_asU8 = function () {
          return r.Message.bytesAsU8(this.getVoteAddress());
        }),
        (proto.protocol.Vote.prototype.setVoteAddress = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.Vote.prototype.getVoteCount = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.Vote.prototype.setVoteCount = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.Account = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Account.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Account, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Account.displayName = "proto.protocol.Account"),
        (proto.protocol.Account.repeatedFields_ = [5, 7, 16]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Account.prototype.toObject = function (t) {
            return proto.protocol.Account.toObject(t, this);
          }),
          (proto.protocol.Account.toObject = function (t, e) {
            var o,
              s = {
                accountName: e.getAccountName_asB64(),
                type: r.Message.getFieldWithDefault(e, 2, 0),
                address: e.getAddress_asB64(),
                balance: r.Message.getFieldWithDefault(e, 4, 0),
                votesList: r.Message.toObjectList(
                  e.getVotesList(),
                  proto.protocol.Vote.toObject,
                  t,
                ),
                assetMap: (o = e.getAssetMap()) ? o.toObject(t, void 0) : [],
                frozenList: r.Message.toObjectList(
                  e.getFrozenList(),
                  proto.protocol.Account.Frozen.toObject,
                  t,
                ),
                netUsage: r.Message.getFieldWithDefault(e, 8, 0),
                createTime: r.Message.getFieldWithDefault(e, 9, 0),
                latestOprationTime: r.Message.getFieldWithDefault(e, 10, 0),
                allowance: r.Message.getFieldWithDefault(e, 11, 0),
                latestWithdrawTime: r.Message.getFieldWithDefault(e, 12, 0),
                code: e.getCode_asB64(),
                isWitness: r.Message.getFieldWithDefault(e, 14, !1),
                isCommittee: r.Message.getFieldWithDefault(e, 15, !1),
                frozenSupplyList: r.Message.toObjectList(
                  e.getFrozenSupplyList(),
                  proto.protocol.Account.Frozen.toObject,
                  t,
                ),
                assetIssuedName: e.getAssetIssuedName_asB64(),
                latestAssetOperationTimeMap: (o =
                  e.getLatestAssetOperationTimeMap())
                  ? o.toObject(t, void 0)
                  : [],
                freeNetUsage: r.Message.getFieldWithDefault(e, 19, 0),
                freeAssetNetUsageMap: (o = e.getFreeAssetNetUsageMap())
                  ? o.toObject(t, void 0)
                  : [],
                latestConsumeTime: r.Message.getFieldWithDefault(e, 21, 0),
                latestConsumeFreeTime: r.Message.getFieldWithDefault(e, 22, 0),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.Account.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Account();
          return proto.protocol.Account.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Account.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var s = e.readBytes();
                t.setAccountName(s);
                break;
              case 2:
                s = e.readEnum();
                t.setType(s);
                break;
              case 3:
                s = e.readBytes();
                t.setAddress(s);
                break;
              case 4:
                s = e.readInt64();
                t.setBalance(s);
                break;
              case 5:
                s = new proto.protocol.Vote();
                (e.readMessage(
                  s,
                  proto.protocol.Vote.deserializeBinaryFromReader,
                ),
                  t.addVotes(s));
                break;
              case 6:
                s = t.getAssetMap();
                e.readMessage(s, function (t, e) {
                  r.Map.deserializeBinary(
                    t,
                    e,
                    r.BinaryReader.prototype.readString,
                    r.BinaryReader.prototype.readInt64,
                  );
                });
                break;
              case 7:
                s = new proto.protocol.Account.Frozen();
                (e.readMessage(
                  s,
                  proto.protocol.Account.Frozen.deserializeBinaryFromReader,
                ),
                  t.addFrozen(s));
                break;
              case 8:
                s = e.readInt64();
                t.setNetUsage(s);
                break;
              case 9:
                s = e.readInt64();
                t.setCreateTime(s);
                break;
              case 10:
                s = e.readInt64();
                t.setLatestOprationTime(s);
                break;
              case 11:
                s = e.readInt64();
                t.setAllowance(s);
                break;
              case 12:
                s = e.readInt64();
                t.setLatestWithdrawTime(s);
                break;
              case 13:
                s = e.readBytes();
                t.setCode(s);
                break;
              case 14:
                s = e.readBool();
                t.setIsWitness(s);
                break;
              case 15:
                s = e.readBool();
                t.setIsCommittee(s);
                break;
              case 16:
                s = new proto.protocol.Account.Frozen();
                (e.readMessage(
                  s,
                  proto.protocol.Account.Frozen.deserializeBinaryFromReader,
                ),
                  t.addFrozenSupply(s));
                break;
              case 17:
                s = e.readBytes();
                t.setAssetIssuedName(s);
                break;
              case 18:
                s = t.getLatestAssetOperationTimeMap();
                e.readMessage(s, function (t, e) {
                  r.Map.deserializeBinary(
                    t,
                    e,
                    r.BinaryReader.prototype.readString,
                    r.BinaryReader.prototype.readInt64,
                  );
                });
                break;
              case 19:
                s = e.readInt64();
                t.setFreeNetUsage(s);
                break;
              case 20:
                s = t.getFreeAssetNetUsageMap();
                e.readMessage(s, function (t, e) {
                  r.Map.deserializeBinary(
                    t,
                    e,
                    r.BinaryReader.prototype.readString,
                    r.BinaryReader.prototype.readInt64,
                  );
                });
                break;
              case 21:
                s = e.readInt64();
                t.setLatestConsumeTime(s);
                break;
              case 22:
                s = e.readInt64();
                t.setLatestConsumeFreeTime(s);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Account.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Account.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Account.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getAccountName_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getType()),
            0 !== o && e.writeEnum(2, o),
            (o = t.getAddress_asU8()),
            o.length > 0 && e.writeBytes(3, o),
            (o = t.getBalance()),
            0 !== o && e.writeInt64(4, o),
            (o = t.getVotesList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                5,
                o,
                proto.protocol.Vote.serializeBinaryToWriter,
              ),
            (o = t.getAssetMap(!0)),
            o &&
              o.getLength() > 0 &&
              o.serializeBinary(
                6,
                e,
                r.BinaryWriter.prototype.writeString,
                r.BinaryWriter.prototype.writeInt64,
              ),
            (o = t.getFrozenList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                7,
                o,
                proto.protocol.Account.Frozen.serializeBinaryToWriter,
              ),
            (o = t.getNetUsage()),
            0 !== o && e.writeInt64(8, o),
            (o = t.getCreateTime()),
            0 !== o && e.writeInt64(9, o),
            (o = t.getLatestOprationTime()),
            0 !== o && e.writeInt64(10, o),
            (o = t.getAllowance()),
            0 !== o && e.writeInt64(11, o),
            (o = t.getLatestWithdrawTime()),
            0 !== o && e.writeInt64(12, o),
            (o = t.getCode_asU8()),
            o.length > 0 && e.writeBytes(13, o),
            (o = t.getIsWitness()),
            o && e.writeBool(14, o),
            (o = t.getIsCommittee()),
            o && e.writeBool(15, o),
            (o = t.getFrozenSupplyList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                16,
                o,
                proto.protocol.Account.Frozen.serializeBinaryToWriter,
              ),
            (o = t.getAssetIssuedName_asU8()),
            o.length > 0 && e.writeBytes(17, o),
            (o = t.getLatestAssetOperationTimeMap(!0)),
            o &&
              o.getLength() > 0 &&
              o.serializeBinary(
                18,
                e,
                r.BinaryWriter.prototype.writeString,
                r.BinaryWriter.prototype.writeInt64,
              ),
            (o = t.getFreeNetUsage()),
            0 !== o && e.writeInt64(19, o),
            (o = t.getFreeAssetNetUsageMap(!0)),
            o &&
              o.getLength() > 0 &&
              o.serializeBinary(
                20,
                e,
                r.BinaryWriter.prototype.writeString,
                r.BinaryWriter.prototype.writeInt64,
              ),
            (o = t.getLatestConsumeTime()),
            0 !== o && e.writeInt64(21, o),
            (o = t.getLatestConsumeFreeTime()),
            0 !== o && e.writeInt64(22, o));
        }),
        (proto.protocol.Account.Frozen = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.Account.Frozen, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Account.Frozen.displayName =
            "proto.protocol.Account.Frozen"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Account.Frozen.prototype.toObject = function (t) {
            return proto.protocol.Account.Frozen.toObject(t, this);
          }),
          (proto.protocol.Account.Frozen.toObject = function (t, e) {
            var o = {
              frozenBalance: r.Message.getFieldWithDefault(e, 1, 0),
              expireTime: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Account.Frozen.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Account.Frozen();
          return proto.protocol.Account.Frozen.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.Account.Frozen.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readInt64();
                t.setFrozenBalance(r);
                break;
              case 2:
                r = e.readInt64();
                t.setExpireTime(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Account.Frozen.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Account.Frozen.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Account.Frozen.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getFrozenBalance()),
            0 !== o && e.writeInt64(1, o),
            (o = t.getExpireTime()),
            0 !== o && e.writeInt64(2, o));
        }),
        (proto.protocol.Account.Frozen.prototype.getFrozenBalance =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.protocol.Account.Frozen.prototype.setFrozenBalance = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 1, t);
        }),
        (proto.protocol.Account.Frozen.prototype.getExpireTime = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.Account.Frozen.prototype.setExpireTime = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.Account.prototype.getAccountName = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.Account.prototype.getAccountName_asB64 = function () {
          return r.Message.bytesAsB64(this.getAccountName());
        }),
        (proto.protocol.Account.prototype.getAccountName_asU8 = function () {
          return r.Message.bytesAsU8(this.getAccountName());
        }),
        (proto.protocol.Account.prototype.setAccountName = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.Account.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.Account.prototype.setType = function (t) {
          r.Message.setProto3EnumField(this, 2, t);
        }),
        (proto.protocol.Account.prototype.getAddress = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.Account.prototype.getAddress_asB64 = function () {
          return r.Message.bytesAsB64(this.getAddress());
        }),
        (proto.protocol.Account.prototype.getAddress_asU8 = function () {
          return r.Message.bytesAsU8(this.getAddress());
        }),
        (proto.protocol.Account.prototype.setAddress = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.Account.prototype.getBalance = function () {
          return r.Message.getFieldWithDefault(this, 4, 0);
        }),
        (proto.protocol.Account.prototype.setBalance = function (t) {
          r.Message.setProto3IntField(this, 4, t);
        }),
        (proto.protocol.Account.prototype.getVotesList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Vote,
            5,
          );
        }),
        (proto.protocol.Account.prototype.setVotesList = function (t) {
          r.Message.setRepeatedWrapperField(this, 5, t);
        }),
        (proto.protocol.Account.prototype.addVotes = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            5,
            t,
            proto.protocol.Vote,
            e,
          );
        }),
        (proto.protocol.Account.prototype.clearVotesList = function () {
          this.setVotesList([]);
        }),
        (proto.protocol.Account.prototype.getAssetMap = function (t) {
          return r.Message.getMapField(this, 6, t, null);
        }),
        (proto.protocol.Account.prototype.clearAssetMap = function () {
          this.getAssetMap().clear();
        }),
        (proto.protocol.Account.prototype.getFrozenList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Account.Frozen,
            7,
          );
        }),
        (proto.protocol.Account.prototype.setFrozenList = function (t) {
          r.Message.setRepeatedWrapperField(this, 7, t);
        }),
        (proto.protocol.Account.prototype.addFrozen = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            7,
            t,
            proto.protocol.Account.Frozen,
            e,
          );
        }),
        (proto.protocol.Account.prototype.clearFrozenList = function () {
          this.setFrozenList([]);
        }),
        (proto.protocol.Account.prototype.getNetUsage = function () {
          return r.Message.getFieldWithDefault(this, 8, 0);
        }),
        (proto.protocol.Account.prototype.setNetUsage = function (t) {
          r.Message.setProto3IntField(this, 8, t);
        }),
        (proto.protocol.Account.prototype.getCreateTime = function () {
          return r.Message.getFieldWithDefault(this, 9, 0);
        }),
        (proto.protocol.Account.prototype.setCreateTime = function (t) {
          r.Message.setProto3IntField(this, 9, t);
        }),
        (proto.protocol.Account.prototype.getLatestOprationTime = function () {
          return r.Message.getFieldWithDefault(this, 10, 0);
        }),
        (proto.protocol.Account.prototype.setLatestOprationTime = function (t) {
          r.Message.setProto3IntField(this, 10, t);
        }),
        (proto.protocol.Account.prototype.getAllowance = function () {
          return r.Message.getFieldWithDefault(this, 11, 0);
        }),
        (proto.protocol.Account.prototype.setAllowance = function (t) {
          r.Message.setProto3IntField(this, 11, t);
        }),
        (proto.protocol.Account.prototype.getLatestWithdrawTime = function () {
          return r.Message.getFieldWithDefault(this, 12, 0);
        }),
        (proto.protocol.Account.prototype.setLatestWithdrawTime = function (t) {
          r.Message.setProto3IntField(this, 12, t);
        }),
        (proto.protocol.Account.prototype.getCode = function () {
          return r.Message.getFieldWithDefault(this, 13, "");
        }),
        (proto.protocol.Account.prototype.getCode_asB64 = function () {
          return r.Message.bytesAsB64(this.getCode());
        }),
        (proto.protocol.Account.prototype.getCode_asU8 = function () {
          return r.Message.bytesAsU8(this.getCode());
        }),
        (proto.protocol.Account.prototype.setCode = function (t) {
          r.Message.setProto3BytesField(this, 13, t);
        }),
        (proto.protocol.Account.prototype.getIsWitness = function () {
          return r.Message.getFieldWithDefault(this, 14, !1);
        }),
        (proto.protocol.Account.prototype.setIsWitness = function (t) {
          r.Message.setProto3BooleanField(this, 14, t);
        }),
        (proto.protocol.Account.prototype.getIsCommittee = function () {
          return r.Message.getFieldWithDefault(this, 15, !1);
        }),
        (proto.protocol.Account.prototype.setIsCommittee = function (t) {
          r.Message.setProto3BooleanField(this, 15, t);
        }),
        (proto.protocol.Account.prototype.getFrozenSupplyList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Account.Frozen,
            16,
          );
        }),
        (proto.protocol.Account.prototype.setFrozenSupplyList = function (t) {
          r.Message.setRepeatedWrapperField(this, 16, t);
        }),
        (proto.protocol.Account.prototype.addFrozenSupply = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            16,
            t,
            proto.protocol.Account.Frozen,
            e,
          );
        }),
        (proto.protocol.Account.prototype.clearFrozenSupplyList = function () {
          this.setFrozenSupplyList([]);
        }),
        (proto.protocol.Account.prototype.getAssetIssuedName = function () {
          return r.Message.getFieldWithDefault(this, 17, "");
        }),
        (proto.protocol.Account.prototype.getAssetIssuedName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getAssetIssuedName());
          }),
        (proto.protocol.Account.prototype.getAssetIssuedName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getAssetIssuedName());
          }),
        (proto.protocol.Account.prototype.setAssetIssuedName = function (t) {
          r.Message.setProto3BytesField(this, 17, t);
        }),
        (proto.protocol.Account.prototype.getLatestAssetOperationTimeMap =
          function (t) {
            return r.Message.getMapField(this, 18, t, null);
          }),
        (proto.protocol.Account.prototype.clearLatestAssetOperationTimeMap =
          function () {
            this.getLatestAssetOperationTimeMap().clear();
          }),
        (proto.protocol.Account.prototype.getFreeNetUsage = function () {
          return r.Message.getFieldWithDefault(this, 19, 0);
        }),
        (proto.protocol.Account.prototype.setFreeNetUsage = function (t) {
          r.Message.setProto3IntField(this, 19, t);
        }),
        (proto.protocol.Account.prototype.getFreeAssetNetUsageMap = function (
          t,
        ) {
          return r.Message.getMapField(this, 20, t, null);
        }),
        (proto.protocol.Account.prototype.clearFreeAssetNetUsageMap =
          function () {
            this.getFreeAssetNetUsageMap().clear();
          }),
        (proto.protocol.Account.prototype.getLatestConsumeTime = function () {
          return r.Message.getFieldWithDefault(this, 21, 0);
        }),
        (proto.protocol.Account.prototype.setLatestConsumeTime = function (t) {
          r.Message.setProto3IntField(this, 21, t);
        }),
        (proto.protocol.Account.prototype.getLatestConsumeFreeTime =
          function () {
            return r.Message.getFieldWithDefault(this, 22, 0);
          }),
        (proto.protocol.Account.prototype.setLatestConsumeFreeTime = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 22, t);
        }),
        (proto.protocol.acuthrity = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.acuthrity, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.acuthrity.displayName = "proto.protocol.acuthrity"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.acuthrity.prototype.toObject = function (t) {
            return proto.protocol.acuthrity.toObject(t, this);
          }),
          (proto.protocol.acuthrity.toObject = function (t, e) {
            var o,
              r = {
                account:
                  (o = e.getAccount()) &&
                  proto.protocol.AccountId.toObject(t, o),
                permissionName: e.getPermissionName_asB64(),
              };
            return (t && (r.$jspbMessageInstance = e), r);
          })),
        (proto.protocol.acuthrity.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.acuthrity();
          return proto.protocol.acuthrity.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.acuthrity.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.AccountId();
                (e.readMessage(
                  r,
                  proto.protocol.AccountId.deserializeBinaryFromReader,
                ),
                  t.setAccount(r));
                break;
              case 2:
                r = e.readBytes();
                t.setPermissionName(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.acuthrity.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.acuthrity.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.acuthrity.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getAccount()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.AccountId.serializeBinaryToWriter,
              ),
            (o = t.getPermissionName_asU8()),
            o.length > 0 && e.writeBytes(2, o));
        }),
        (proto.protocol.acuthrity.prototype.getAccount = function () {
          return r.Message.getWrapperField(this, proto.protocol.AccountId, 1);
        }),
        (proto.protocol.acuthrity.prototype.setAccount = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.acuthrity.prototype.clearAccount = function () {
          this.setAccount(void 0);
        }),
        (proto.protocol.acuthrity.prototype.hasAccount = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.acuthrity.prototype.getPermissionName = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.acuthrity.prototype.getPermissionName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getPermissionName());
          }),
        (proto.protocol.acuthrity.prototype.getPermissionName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getPermissionName());
          }),
        (proto.protocol.acuthrity.prototype.setPermissionName = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.permision = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.permision, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.permision.displayName = "proto.protocol.permision"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.permision.prototype.toObject = function (t) {
            return proto.protocol.permision.toObject(t, this);
          }),
          (proto.protocol.permision.toObject = function (t, e) {
            var o,
              r = {
                account:
                  (o = e.getAccount()) &&
                  proto.protocol.AccountId.toObject(t, o),
              };
            return (t && (r.$jspbMessageInstance = e), r);
          })),
        (proto.protocol.permision.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.permision();
          return proto.protocol.permision.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.permision.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.AccountId();
                (e.readMessage(
                  r,
                  proto.protocol.AccountId.deserializeBinaryFromReader,
                ),
                  t.setAccount(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.permision.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.permision.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.permision.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getAccount()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.AccountId.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.permision.prototype.getAccount = function () {
          return r.Message.getWrapperField(this, proto.protocol.AccountId, 1);
        }),
        (proto.protocol.permision.prototype.setAccount = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.permision.prototype.clearAccount = function () {
          this.setAccount(void 0);
        }),
        (proto.protocol.permision.prototype.hasAccount = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.Witness = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.Witness, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Witness.displayName = "proto.protocol.Witness"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Witness.prototype.toObject = function (t) {
            return proto.protocol.Witness.toObject(t, this);
          }),
          (proto.protocol.Witness.toObject = function (t, e) {
            var o = {
              address: e.getAddress_asB64(),
              votecount: r.Message.getFieldWithDefault(e, 2, 0),
              pubkey: e.getPubkey_asB64(),
              url: r.Message.getFieldWithDefault(e, 4, ""),
              totalproduced: r.Message.getFieldWithDefault(e, 5, 0),
              totalmissed: r.Message.getFieldWithDefault(e, 6, 0),
              latestblocknum: r.Message.getFieldWithDefault(e, 7, 0),
              latestslotnum: r.Message.getFieldWithDefault(e, 8, 0),
              isjobs: r.Message.getFieldWithDefault(e, 9, !1),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Witness.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Witness();
          return proto.protocol.Witness.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Witness.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setAddress(r);
                break;
              case 2:
                r = e.readInt64();
                t.setVotecount(r);
                break;
              case 3:
                r = e.readBytes();
                t.setPubkey(r);
                break;
              case 4:
                r = e.readString();
                t.setUrl(r);
                break;
              case 5:
                r = e.readInt64();
                t.setTotalproduced(r);
                break;
              case 6:
                r = e.readInt64();
                t.setTotalmissed(r);
                break;
              case 7:
                r = e.readInt64();
                t.setLatestblocknum(r);
                break;
              case 8:
                r = e.readInt64();
                t.setLatestslotnum(r);
                break;
              case 9:
                r = e.readBool();
                t.setIsjobs(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Witness.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Witness.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Witness.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getVotecount()),
            0 !== o && e.writeInt64(2, o),
            (o = t.getPubkey_asU8()),
            o.length > 0 && e.writeBytes(3, o),
            (o = t.getUrl()),
            o.length > 0 && e.writeString(4, o),
            (o = t.getTotalproduced()),
            0 !== o && e.writeInt64(5, o),
            (o = t.getTotalmissed()),
            0 !== o && e.writeInt64(6, o),
            (o = t.getLatestblocknum()),
            0 !== o && e.writeInt64(7, o),
            (o = t.getLatestslotnum()),
            0 !== o && e.writeInt64(8, o),
            (o = t.getIsjobs()),
            o && e.writeBool(9, o));
        }),
        (proto.protocol.Witness.prototype.getAddress = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.Witness.prototype.getAddress_asB64 = function () {
          return r.Message.bytesAsB64(this.getAddress());
        }),
        (proto.protocol.Witness.prototype.getAddress_asU8 = function () {
          return r.Message.bytesAsU8(this.getAddress());
        }),
        (proto.protocol.Witness.prototype.setAddress = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.Witness.prototype.getVotecount = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.Witness.prototype.setVotecount = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.Witness.prototype.getPubkey = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.Witness.prototype.getPubkey_asB64 = function () {
          return r.Message.bytesAsB64(this.getPubkey());
        }),
        (proto.protocol.Witness.prototype.getPubkey_asU8 = function () {
          return r.Message.bytesAsU8(this.getPubkey());
        }),
        (proto.protocol.Witness.prototype.setPubkey = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.Witness.prototype.getUrl = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.protocol.Witness.prototype.setUrl = function (t) {
          r.Message.setProto3StringField(this, 4, t);
        }),
        (proto.protocol.Witness.prototype.getTotalproduced = function () {
          return r.Message.getFieldWithDefault(this, 5, 0);
        }),
        (proto.protocol.Witness.prototype.setTotalproduced = function (t) {
          r.Message.setProto3IntField(this, 5, t);
        }),
        (proto.protocol.Witness.prototype.getTotalmissed = function () {
          return r.Message.getFieldWithDefault(this, 6, 0);
        }),
        (proto.protocol.Witness.prototype.setTotalmissed = function (t) {
          r.Message.setProto3IntField(this, 6, t);
        }),
        (proto.protocol.Witness.prototype.getLatestblocknum = function () {
          return r.Message.getFieldWithDefault(this, 7, 0);
        }),
        (proto.protocol.Witness.prototype.setLatestblocknum = function (t) {
          r.Message.setProto3IntField(this, 7, t);
        }),
        (proto.protocol.Witness.prototype.getLatestslotnum = function () {
          return r.Message.getFieldWithDefault(this, 8, 0);
        }),
        (proto.protocol.Witness.prototype.setLatestslotnum = function (t) {
          r.Message.setProto3IntField(this, 8, t);
        }),
        (proto.protocol.Witness.prototype.getIsjobs = function () {
          return r.Message.getFieldWithDefault(this, 9, !1);
        }),
        (proto.protocol.Witness.prototype.setIsjobs = function (t) {
          r.Message.setProto3BooleanField(this, 9, t);
        }),
        (proto.protocol.Votes = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Votes.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Votes, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Votes.displayName = "proto.protocol.Votes"),
        (proto.protocol.Votes.repeatedFields_ = [2, 3]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Votes.prototype.toObject = function (t) {
            return proto.protocol.Votes.toObject(t, this);
          }),
          (proto.protocol.Votes.toObject = function (t, e) {
            var o = {
              address: e.getAddress_asB64(),
              oldVotesList: r.Message.toObjectList(
                e.getOldVotesList(),
                proto.protocol.Vote.toObject,
                t,
              ),
              newVotesList: r.Message.toObjectList(
                e.getNewVotesList(),
                proto.protocol.Vote.toObject,
                t,
              ),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Votes.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Votes();
          return proto.protocol.Votes.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Votes.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setAddress(r);
                break;
              case 2:
                r = new proto.protocol.Vote();
                (e.readMessage(
                  r,
                  proto.protocol.Vote.deserializeBinaryFromReader,
                ),
                  t.addOldVotes(r));
                break;
              case 3:
                r = new proto.protocol.Vote();
                (e.readMessage(
                  r,
                  proto.protocol.Vote.deserializeBinaryFromReader,
                ),
                  t.addNewVotes(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Votes.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Votes.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Votes.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getOldVotesList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                2,
                o,
                proto.protocol.Vote.serializeBinaryToWriter,
              ),
            (o = t.getNewVotesList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                3,
                o,
                proto.protocol.Vote.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.Votes.prototype.getAddress = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.Votes.prototype.getAddress_asB64 = function () {
          return r.Message.bytesAsB64(this.getAddress());
        }),
        (proto.protocol.Votes.prototype.getAddress_asU8 = function () {
          return r.Message.bytesAsU8(this.getAddress());
        }),
        (proto.protocol.Votes.prototype.setAddress = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.Votes.prototype.getOldVotesList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Vote,
            2,
          );
        }),
        (proto.protocol.Votes.prototype.setOldVotesList = function (t) {
          r.Message.setRepeatedWrapperField(this, 2, t);
        }),
        (proto.protocol.Votes.prototype.addOldVotes = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            t,
            proto.protocol.Vote,
            e,
          );
        }),
        (proto.protocol.Votes.prototype.clearOldVotesList = function () {
          this.setOldVotesList([]);
        }),
        (proto.protocol.Votes.prototype.getNewVotesList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Vote,
            3,
          );
        }),
        (proto.protocol.Votes.prototype.setNewVotesList = function (t) {
          r.Message.setRepeatedWrapperField(this, 3, t);
        }),
        (proto.protocol.Votes.prototype.addNewVotes = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            3,
            t,
            proto.protocol.Vote,
            e,
          );
        }),
        (proto.protocol.Votes.prototype.clearNewVotesList = function () {
          this.setNewVotesList([]);
        }),
        (proto.protocol.TXOutput = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.TXOutput, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.TXOutput.displayName = "proto.protocol.TXOutput"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.TXOutput.prototype.toObject = function (t) {
            return proto.protocol.TXOutput.toObject(t, this);
          }),
          (proto.protocol.TXOutput.toObject = function (t, e) {
            var o = {
              value: r.Message.getFieldWithDefault(e, 1, 0),
              pubkeyhash: e.getPubkeyhash_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.TXOutput.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.TXOutput();
          return proto.protocol.TXOutput.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.TXOutput.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readInt64();
                t.setValue(r);
                break;
              case 2:
                r = e.readBytes();
                t.setPubkeyhash(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.TXOutput.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.TXOutput.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.TXOutput.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getValue()),
            0 !== o && e.writeInt64(1, o),
            (o = t.getPubkeyhash_asU8()),
            o.length > 0 && e.writeBytes(2, o));
        }),
        (proto.protocol.TXOutput.prototype.getValue = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.TXOutput.prototype.setValue = function (t) {
          r.Message.setProto3IntField(this, 1, t);
        }),
        (proto.protocol.TXOutput.prototype.getPubkeyhash = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.TXOutput.prototype.getPubkeyhash_asB64 = function () {
          return r.Message.bytesAsB64(this.getPubkeyhash());
        }),
        (proto.protocol.TXOutput.prototype.getPubkeyhash_asU8 = function () {
          return r.Message.bytesAsU8(this.getPubkeyhash());
        }),
        (proto.protocol.TXOutput.prototype.setPubkeyhash = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.TXInput = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.TXInput, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.TXInput.displayName = "proto.protocol.TXInput"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.TXInput.prototype.toObject = function (t) {
            return proto.protocol.TXInput.toObject(t, this);
          }),
          (proto.protocol.TXInput.toObject = function (t, e) {
            var o,
              r = {
                rawData:
                  (o = e.getRawData()) &&
                  proto.protocol.TXInput.raw.toObject(t, o),
                signature: e.getSignature_asB64(),
              };
            return (t && (r.$jspbMessageInstance = e), r);
          })),
        (proto.protocol.TXInput.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.TXInput();
          return proto.protocol.TXInput.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.TXInput.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.TXInput.raw();
                (e.readMessage(
                  r,
                  proto.protocol.TXInput.raw.deserializeBinaryFromReader,
                ),
                  t.setRawData(r));
                break;
              case 4:
                r = e.readBytes();
                t.setSignature(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.TXInput.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.TXInput.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.TXInput.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getRawData()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.TXInput.raw.serializeBinaryToWriter,
              ),
            (o = t.getSignature_asU8()),
            o.length > 0 && e.writeBytes(4, o));
        }),
        (proto.protocol.TXInput.raw = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.TXInput.raw, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.TXInput.raw.displayName =
            "proto.protocol.TXInput.raw"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.TXInput.raw.prototype.toObject = function (t) {
            return proto.protocol.TXInput.raw.toObject(t, this);
          }),
          (proto.protocol.TXInput.raw.toObject = function (t, e) {
            var o = {
              txid: e.getTxid_asB64(),
              vout: r.Message.getFieldWithDefault(e, 2, 0),
              pubkey: e.getPubkey_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.TXInput.raw.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.TXInput.raw();
          return proto.protocol.TXInput.raw.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.TXInput.raw.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setTxid(r);
                break;
              case 2:
                r = e.readInt64();
                t.setVout(r);
                break;
              case 3:
                r = e.readBytes();
                t.setPubkey(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.TXInput.raw.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.TXInput.raw.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.TXInput.raw.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getTxid_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getVout()),
            0 !== o && e.writeInt64(2, o),
            (o = t.getPubkey_asU8()),
            o.length > 0 && e.writeBytes(3, o));
        }),
        (proto.protocol.TXInput.raw.prototype.getTxid = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.TXInput.raw.prototype.getTxid_asB64 = function () {
          return r.Message.bytesAsB64(this.getTxid());
        }),
        (proto.protocol.TXInput.raw.prototype.getTxid_asU8 = function () {
          return r.Message.bytesAsU8(this.getTxid());
        }),
        (proto.protocol.TXInput.raw.prototype.setTxid = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.TXInput.raw.prototype.getVout = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.TXInput.raw.prototype.setVout = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.TXInput.raw.prototype.getPubkey = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.TXInput.raw.prototype.getPubkey_asB64 = function () {
          return r.Message.bytesAsB64(this.getPubkey());
        }),
        (proto.protocol.TXInput.raw.prototype.getPubkey_asU8 = function () {
          return r.Message.bytesAsU8(this.getPubkey());
        }),
        (proto.protocol.TXInput.raw.prototype.setPubkey = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.TXInput.prototype.getRawData = function () {
          return r.Message.getWrapperField(this, proto.protocol.TXInput.raw, 1);
        }),
        (proto.protocol.TXInput.prototype.setRawData = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.TXInput.prototype.clearRawData = function () {
          this.setRawData(void 0);
        }),
        (proto.protocol.TXInput.prototype.hasRawData = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.TXInput.prototype.getSignature = function () {
          return r.Message.getFieldWithDefault(this, 4, "");
        }),
        (proto.protocol.TXInput.prototype.getSignature_asB64 = function () {
          return r.Message.bytesAsB64(this.getSignature());
        }),
        (proto.protocol.TXInput.prototype.getSignature_asU8 = function () {
          return r.Message.bytesAsU8(this.getSignature());
        }),
        (proto.protocol.TXInput.prototype.setSignature = function (t) {
          r.Message.setProto3BytesField(this, 4, t);
        }),
        (proto.protocol.TXOutputs = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.TXOutputs.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.TXOutputs, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.TXOutputs.displayName = "proto.protocol.TXOutputs"),
        (proto.protocol.TXOutputs.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.TXOutputs.prototype.toObject = function (t) {
            return proto.protocol.TXOutputs.toObject(t, this);
          }),
          (proto.protocol.TXOutputs.toObject = function (t, e) {
            var o = {
              outputsList: r.Message.toObjectList(
                e.getOutputsList(),
                proto.protocol.TXOutput.toObject,
                t,
              ),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.TXOutputs.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.TXOutputs();
          return proto.protocol.TXOutputs.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.TXOutputs.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.TXOutput();
                (e.readMessage(
                  r,
                  proto.protocol.TXOutput.deserializeBinaryFromReader,
                ),
                  t.addOutputs(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.TXOutputs.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.TXOutputs.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.TXOutputs.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getOutputsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                1,
                o,
                proto.protocol.TXOutput.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.TXOutputs.prototype.getOutputsList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.TXOutput,
            1,
          );
        }),
        (proto.protocol.TXOutputs.prototype.setOutputsList = function (t) {
          r.Message.setRepeatedWrapperField(this, 1, t);
        }),
        (proto.protocol.TXOutputs.prototype.addOutputs = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            t,
            proto.protocol.TXOutput,
            e,
          );
        }),
        (proto.protocol.TXOutputs.prototype.clearOutputsList = function () {
          this.setOutputsList([]);
        }),
        (proto.protocol.Transaction = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Transaction.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Transaction, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Transaction.displayName =
            "proto.protocol.Transaction"),
        (proto.protocol.Transaction.repeatedFields_ = [2, 5]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Transaction.prototype.toObject = function (t) {
            return proto.protocol.Transaction.toObject(t, this);
          }),
          (proto.protocol.Transaction.toObject = function (t, e) {
            var o,
              s = {
                rawData:
                  (o = e.getRawData()) &&
                  proto.protocol.Transaction.raw.toObject(t, o),
                signatureList: e.getSignatureList_asB64(),
                retList: r.Message.toObjectList(
                  e.getRetList(),
                  proto.protocol.Transaction.Result.toObject,
                  t,
                ),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.Transaction.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Transaction();
          return proto.protocol.Transaction.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Transaction.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Transaction.raw();
                (e.readMessage(
                  r,
                  proto.protocol.Transaction.raw.deserializeBinaryFromReader,
                ),
                  t.setRawData(r));
                break;
              case 2:
                r = e.readBytes();
                t.addSignature(r);
                break;
              case 5:
                r = new proto.protocol.Transaction.Result();
                (e.readMessage(
                  r,
                  proto.protocol.Transaction.Result.deserializeBinaryFromReader,
                ),
                  t.addRet(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Transaction.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Transaction.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Transaction.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getRawData()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.Transaction.raw.serializeBinaryToWriter,
              ),
            (o = t.getSignatureList_asU8()),
            o.length > 0 && e.writeRepeatedBytes(2, o),
            (o = t.getRetList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                5,
                o,
                proto.protocol.Transaction.Result.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.Transaction.Contract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.Transaction.Contract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Transaction.Contract.displayName =
            "proto.protocol.Transaction.Contract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Transaction.Contract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.Transaction.Contract.toObject(t, this);
          }),
          (proto.protocol.Transaction.Contract.toObject = function (t, e) {
            var o,
              s = {
                type: r.Message.getFieldWithDefault(e, 1, 0),
                parameter: (o = e.getParameter()) && a.Any.toObject(t, o),
                provider: e.getProvider_asB64(),
                contractname: e.getContractname_asB64(),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.Transaction.Contract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Transaction.Contract();
          return proto.protocol.Transaction.Contract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.Transaction.Contract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readEnum();
                  t.setType(r);
                  break;
                case 2:
                  r = new a.Any();
                  (e.readMessage(r, a.Any.deserializeBinaryFromReader),
                    t.setParameter(r));
                  break;
                case 3:
                  r = e.readBytes();
                  t.setProvider(r);
                  break;
                case 4:
                  r = e.readBytes();
                  t.setContractname(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.Transaction.Contract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.Transaction.Contract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.Transaction.Contract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getType()),
              0 !== o && e.writeEnum(1, o),
              (o = t.getParameter()),
              null != o && e.writeMessage(2, o, a.Any.serializeBinaryToWriter),
              (o = t.getProvider_asU8()),
              o.length > 0 && e.writeBytes(3, o),
              (o = t.getContractname_asU8()),
              o.length > 0 && e.writeBytes(4, o));
          }),
        (proto.protocol.Transaction.Contract.ContractType = {
          ACCOUNTCREATECONTRACT: 0,
          TRANSFERCONTRACT: 1,
          TRANSFERASSETCONTRACT: 2,
          VOTEASSETCONTRACT: 3,
          VOTEWITNESSCONTRACT: 4,
          WITNESSCREATECONTRACT: 5,
          ASSETISSUECONTRACT: 6,
          DEPLOYCONTRACT: 7,
          WITNESSUPDATECONTRACT: 8,
          PARTICIPATEASSETISSUECONTRACT: 9,
          ACCOUNTUPDATECONTRACT: 10,
          FREEZEBALANCECONTRACT: 11,
          UNFREEZEBALANCECONTRACT: 12,
          WITHDRAWBALANCECONTRACT: 13,
          UNFREEZEASSETCONTRACT: 14,
          UPDATEASSETCONTRACT: 15,
          CUSTOMCONTRACT: 20,
        }),
        (proto.protocol.Transaction.Contract.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.Transaction.Contract.prototype.setType = function (t) {
          r.Message.setProto3EnumField(this, 1, t);
        }),
        (proto.protocol.Transaction.Contract.prototype.getParameter =
          function () {
            return r.Message.getWrapperField(this, a.Any, 2);
          }),
        (proto.protocol.Transaction.Contract.prototype.setParameter = function (
          t,
        ) {
          r.Message.setWrapperField(this, 2, t);
        }),
        (proto.protocol.Transaction.Contract.prototype.clearParameter =
          function () {
            this.setParameter(void 0);
          }),
        (proto.protocol.Transaction.Contract.prototype.hasParameter =
          function () {
            return null != r.Message.getField(this, 2);
          }),
        (proto.protocol.Transaction.Contract.prototype.getProvider =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.protocol.Transaction.Contract.prototype.getProvider_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getProvider());
          }),
        (proto.protocol.Transaction.Contract.prototype.getProvider_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getProvider());
          }),
        (proto.protocol.Transaction.Contract.prototype.setProvider = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.Transaction.Contract.prototype.getContractname =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.protocol.Transaction.Contract.prototype.getContractname_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getContractname());
          }),
        (proto.protocol.Transaction.Contract.prototype.getContractname_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getContractname());
          }),
        (proto.protocol.Transaction.Contract.prototype.setContractname =
          function (t) {
            r.Message.setProto3BytesField(this, 4, t);
          }),
        (proto.protocol.Transaction.Result = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.Transaction.Result, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Transaction.Result.displayName =
            "proto.protocol.Transaction.Result"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Transaction.Result.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.Transaction.Result.toObject(t, this);
          }),
          (proto.protocol.Transaction.Result.toObject = function (t, e) {
            var o = {
              fee: r.Message.getFieldWithDefault(e, 1, 0),
              ret: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Transaction.Result.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Transaction.Result();
          return proto.protocol.Transaction.Result.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.Transaction.Result.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readInt64();
                  t.setFee(r);
                  break;
                case 2:
                  r = e.readEnum();
                  t.setRet(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.Transaction.Result.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.Transaction.Result.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.Transaction.Result.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getFee()),
            0 !== o && e.writeInt64(1, o),
            (o = t.getRet()),
            0 !== o && e.writeEnum(2, o));
        }),
        (proto.protocol.Transaction.Result.code = { SUCESS: 0, FAILED: 1 }),
        (proto.protocol.Transaction.Result.prototype.getFee = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.Transaction.Result.prototype.setFee = function (t) {
          r.Message.setProto3IntField(this, 1, t);
        }),
        (proto.protocol.Transaction.Result.prototype.getRet = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.Transaction.Result.prototype.setRet = function (t) {
          r.Message.setProto3EnumField(this, 2, t);
        }),
        (proto.protocol.Transaction.raw = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Transaction.raw.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Transaction.raw, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Transaction.raw.displayName =
            "proto.protocol.Transaction.raw"),
        (proto.protocol.Transaction.raw.repeatedFields_ = [9, 11]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Transaction.raw.prototype.toObject = function (t) {
            return proto.protocol.Transaction.raw.toObject(t, this);
          }),
          (proto.protocol.Transaction.raw.toObject = function (t, e) {
            var o = {
              refBlockBytes: e.getRefBlockBytes_asB64(),
              refBlockNum: r.Message.getFieldWithDefault(e, 3, 0),
              refBlockHash: e.getRefBlockHash_asB64(),
              expiration: r.Message.getFieldWithDefault(e, 8, 0),
              authsList: r.Message.toObjectList(
                e.getAuthsList(),
                proto.protocol.acuthrity.toObject,
                t,
              ),
              data: e.getData_asB64(),
              contractList: r.Message.toObjectList(
                e.getContractList(),
                proto.protocol.Transaction.Contract.toObject,
                t,
              ),
              scripts: e.getScripts_asB64(),
              timestamp: r.Message.getFieldWithDefault(e, 14, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Transaction.raw.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Transaction.raw();
          return proto.protocol.Transaction.raw.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.Transaction.raw.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setRefBlockBytes(r);
                break;
              case 3:
                r = e.readInt64();
                t.setRefBlockNum(r);
                break;
              case 4:
                r = e.readBytes();
                t.setRefBlockHash(r);
                break;
              case 8:
                r = e.readInt64();
                t.setExpiration(r);
                break;
              case 9:
                r = new proto.protocol.acuthrity();
                (e.readMessage(
                  r,
                  proto.protocol.acuthrity.deserializeBinaryFromReader,
                ),
                  t.addAuths(r));
                break;
              case 10:
                r = e.readBytes();
                t.setData(r);
                break;
              case 11:
                r = new proto.protocol.Transaction.Contract();
                (e.readMessage(
                  r,
                  proto.protocol.Transaction.Contract
                    .deserializeBinaryFromReader,
                ),
                  t.addContract(r));
                break;
              case 12:
                r = e.readBytes();
                t.setScripts(r);
                break;
              case 14:
                r = e.readInt64();
                t.setTimestamp(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Transaction.raw.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.Transaction.raw.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.Transaction.raw.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getRefBlockBytes_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getRefBlockNum()),
            0 !== o && e.writeInt64(3, o),
            (o = t.getRefBlockHash_asU8()),
            o.length > 0 && e.writeBytes(4, o),
            (o = t.getExpiration()),
            0 !== o && e.writeInt64(8, o),
            (o = t.getAuthsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                9,
                o,
                proto.protocol.acuthrity.serializeBinaryToWriter,
              ),
            (o = t.getData_asU8()),
            o.length > 0 && e.writeBytes(10, o),
            (o = t.getContractList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                11,
                o,
                proto.protocol.Transaction.Contract.serializeBinaryToWriter,
              ),
            (o = t.getScripts_asU8()),
            o.length > 0 && e.writeBytes(12, o),
            (o = t.getTimestamp()),
            0 !== o && e.writeInt64(14, o));
        }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockBytes =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getRefBlockBytes());
          }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockBytes_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getRefBlockBytes());
          }),
        (proto.protocol.Transaction.raw.prototype.setRefBlockBytes = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockNum = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.Transaction.raw.prototype.setRefBlockNum = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockHash =
          function () {
            return r.Message.getFieldWithDefault(this, 4, "");
          }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockHash_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getRefBlockHash());
          }),
        (proto.protocol.Transaction.raw.prototype.getRefBlockHash_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getRefBlockHash());
          }),
        (proto.protocol.Transaction.raw.prototype.setRefBlockHash = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 4, t);
        }),
        (proto.protocol.Transaction.raw.prototype.getExpiration = function () {
          return r.Message.getFieldWithDefault(this, 8, 0);
        }),
        (proto.protocol.Transaction.raw.prototype.setExpiration = function (t) {
          r.Message.setProto3IntField(this, 8, t);
        }),
        (proto.protocol.Transaction.raw.prototype.getAuthsList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.acuthrity,
            9,
          );
        }),
        (proto.protocol.Transaction.raw.prototype.setAuthsList = function (t) {
          r.Message.setRepeatedWrapperField(this, 9, t);
        }),
        (proto.protocol.Transaction.raw.prototype.addAuths = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            9,
            t,
            proto.protocol.acuthrity,
            e,
          );
        }),
        (proto.protocol.Transaction.raw.prototype.clearAuthsList = function () {
          this.setAuthsList([]);
        }),
        (proto.protocol.Transaction.raw.prototype.getData = function () {
          return r.Message.getFieldWithDefault(this, 10, "");
        }),
        (proto.protocol.Transaction.raw.prototype.getData_asB64 = function () {
          return r.Message.bytesAsB64(this.getData());
        }),
        (proto.protocol.Transaction.raw.prototype.getData_asU8 = function () {
          return r.Message.bytesAsU8(this.getData());
        }),
        (proto.protocol.Transaction.raw.prototype.setData = function (t) {
          r.Message.setProto3BytesField(this, 10, t);
        }),
        (proto.protocol.Transaction.raw.prototype.getContractList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.protocol.Transaction.Contract,
              11,
            );
          }),
        (proto.protocol.Transaction.raw.prototype.setContractList = function (
          t,
        ) {
          r.Message.setRepeatedWrapperField(this, 11, t);
        }),
        (proto.protocol.Transaction.raw.prototype.addContract = function (
          t,
          e,
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            11,
            t,
            proto.protocol.Transaction.Contract,
            e,
          );
        }),
        (proto.protocol.Transaction.raw.prototype.clearContractList =
          function () {
            this.setContractList([]);
          }),
        (proto.protocol.Transaction.raw.prototype.getScripts = function () {
          return r.Message.getFieldWithDefault(this, 12, "");
        }),
        (proto.protocol.Transaction.raw.prototype.getScripts_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getScripts());
          }),
        (proto.protocol.Transaction.raw.prototype.getScripts_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getScripts());
          }),
        (proto.protocol.Transaction.raw.prototype.setScripts = function (t) {
          r.Message.setProto3BytesField(this, 12, t);
        }),
        (proto.protocol.Transaction.raw.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 14, 0);
        }),
        (proto.protocol.Transaction.raw.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 14, t);
        }),
        (proto.protocol.Transaction.prototype.getRawData = function () {
          return r.Message.getWrapperField(
            this,
            proto.protocol.Transaction.raw,
            1,
          );
        }),
        (proto.protocol.Transaction.prototype.setRawData = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.Transaction.prototype.clearRawData = function () {
          this.setRawData(void 0);
        }),
        (proto.protocol.Transaction.prototype.hasRawData = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.Transaction.prototype.getSignatureList = function () {
          return r.Message.getRepeatedField(this, 2);
        }),
        (proto.protocol.Transaction.prototype.getSignatureList_asB64 =
          function () {
            return r.Message.bytesListAsB64(this.getSignatureList());
          }),
        (proto.protocol.Transaction.prototype.getSignatureList_asU8 =
          function () {
            return r.Message.bytesListAsU8(this.getSignatureList());
          }),
        (proto.protocol.Transaction.prototype.setSignatureList = function (t) {
          r.Message.setField(this, 2, t || []);
        }),
        (proto.protocol.Transaction.prototype.addSignature = function (t, e) {
          r.Message.addToRepeatedField(this, 2, t, e);
        }),
        (proto.protocol.Transaction.prototype.clearSignatureList = function () {
          this.setSignatureList([]);
        }),
        (proto.protocol.Transaction.prototype.getRetList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Transaction.Result,
            5,
          );
        }),
        (proto.protocol.Transaction.prototype.setRetList = function (t) {
          r.Message.setRepeatedWrapperField(this, 5, t);
        }),
        (proto.protocol.Transaction.prototype.addRet = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            5,
            t,
            proto.protocol.Transaction.Result,
            e,
          );
        }),
        (proto.protocol.Transaction.prototype.clearRetList = function () {
          this.setRetList([]);
        }),
        (proto.protocol.Transactions = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Transactions.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Transactions, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Transactions.displayName =
            "proto.protocol.Transactions"),
        (proto.protocol.Transactions.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Transactions.prototype.toObject = function (t) {
            return proto.protocol.Transactions.toObject(t, this);
          }),
          (proto.protocol.Transactions.toObject = function (t, e) {
            var o = {
              transactionsList: r.Message.toObjectList(
                e.getTransactionsList(),
                proto.protocol.Transaction.toObject,
                t,
              ),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Transactions.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Transactions();
          return proto.protocol.Transactions.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Transactions.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Transaction();
                (e.readMessage(
                  r,
                  proto.protocol.Transaction.deserializeBinaryFromReader,
                ),
                  t.addTransactions(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Transactions.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Transactions.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Transactions.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getTransactionsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                1,
                o,
                proto.protocol.Transaction.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.Transactions.prototype.getTransactionsList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.protocol.Transaction,
              1,
            );
          }),
        (proto.protocol.Transactions.prototype.setTransactionsList = function (
          t,
        ) {
          r.Message.setRepeatedWrapperField(this, 1, t);
        }),
        (proto.protocol.Transactions.prototype.addTransactions = function (
          t,
          e,
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            t,
            proto.protocol.Transaction,
            e,
          );
        }),
        (proto.protocol.Transactions.prototype.clearTransactionsList =
          function () {
            this.setTransactionsList([]);
          }),
        (proto.protocol.BlockHeader = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.BlockHeader, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.BlockHeader.displayName =
            "proto.protocol.BlockHeader"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.BlockHeader.prototype.toObject = function (t) {
            return proto.protocol.BlockHeader.toObject(t, this);
          }),
          (proto.protocol.BlockHeader.toObject = function (t, e) {
            var o,
              r = {
                rawData:
                  (o = e.getRawData()) &&
                  proto.protocol.BlockHeader.raw.toObject(t, o),
                witnessSignature: e.getWitnessSignature_asB64(),
              };
            return (t && (r.$jspbMessageInstance = e), r);
          })),
        (proto.protocol.BlockHeader.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.BlockHeader();
          return proto.protocol.BlockHeader.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.BlockHeader.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.BlockHeader.raw();
                (e.readMessage(
                  r,
                  proto.protocol.BlockHeader.raw.deserializeBinaryFromReader,
                ),
                  t.setRawData(r));
                break;
              case 2:
                r = e.readBytes();
                t.setWitnessSignature(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.BlockHeader.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.BlockHeader.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.BlockHeader.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getRawData()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.BlockHeader.raw.serializeBinaryToWriter,
              ),
            (o = t.getWitnessSignature_asU8()),
            o.length > 0 && e.writeBytes(2, o));
        }),
        (proto.protocol.BlockHeader.raw = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.BlockHeader.raw, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.BlockHeader.raw.displayName =
            "proto.protocol.BlockHeader.raw"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.BlockHeader.raw.prototype.toObject = function (t) {
            return proto.protocol.BlockHeader.raw.toObject(t, this);
          }),
          (proto.protocol.BlockHeader.raw.toObject = function (t, e) {
            var o = {
              timestamp: r.Message.getFieldWithDefault(e, 1, 0),
              txtrieroot: e.getTxtrieroot_asB64(),
              parenthash: e.getParenthash_asB64(),
              number: r.Message.getFieldWithDefault(e, 7, 0),
              witnessId: r.Message.getFieldWithDefault(e, 8, 0),
              witnessAddress: e.getWitnessAddress_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.BlockHeader.raw.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.BlockHeader.raw();
          return proto.protocol.BlockHeader.raw.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.BlockHeader.raw.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readInt64();
                t.setTimestamp(r);
                break;
              case 2:
                r = e.readBytes();
                t.setTxtrieroot(r);
                break;
              case 3:
                r = e.readBytes();
                t.setParenthash(r);
                break;
              case 7:
                r = e.readInt64();
                t.setNumber(r);
                break;
              case 8:
                r = e.readInt64();
                t.setWitnessId(r);
                break;
              case 9:
                r = e.readBytes();
                t.setWitnessAddress(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.BlockHeader.raw.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.BlockHeader.raw.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.BlockHeader.raw.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getTimestamp()),
            0 !== o && e.writeInt64(1, o),
            (o = t.getTxtrieroot_asU8()),
            o.length > 0 && e.writeBytes(2, o),
            (o = t.getParenthash_asU8()),
            o.length > 0 && e.writeBytes(3, o),
            (o = t.getNumber()),
            0 !== o && e.writeInt64(7, o),
            (o = t.getWitnessId()),
            0 !== o && e.writeInt64(8, o),
            (o = t.getWitnessAddress_asU8()),
            o.length > 0 && e.writeBytes(9, o));
        }),
        (proto.protocol.BlockHeader.raw.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.BlockHeader.raw.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 1, t);
        }),
        (proto.protocol.BlockHeader.raw.prototype.getTxtrieroot = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.BlockHeader.raw.prototype.getTxtrieroot_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getTxtrieroot());
          }),
        (proto.protocol.BlockHeader.raw.prototype.getTxtrieroot_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getTxtrieroot());
          }),
        (proto.protocol.BlockHeader.raw.prototype.setTxtrieroot = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.BlockHeader.raw.prototype.getParenthash = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.BlockHeader.raw.prototype.getParenthash_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getParenthash());
          }),
        (proto.protocol.BlockHeader.raw.prototype.getParenthash_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getParenthash());
          }),
        (proto.protocol.BlockHeader.raw.prototype.setParenthash = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.BlockHeader.raw.prototype.getNumber = function () {
          return r.Message.getFieldWithDefault(this, 7, 0);
        }),
        (proto.protocol.BlockHeader.raw.prototype.setNumber = function (t) {
          r.Message.setProto3IntField(this, 7, t);
        }),
        (proto.protocol.BlockHeader.raw.prototype.getWitnessId = function () {
          return r.Message.getFieldWithDefault(this, 8, 0);
        }),
        (proto.protocol.BlockHeader.raw.prototype.setWitnessId = function (t) {
          r.Message.setProto3IntField(this, 8, t);
        }),
        (proto.protocol.BlockHeader.raw.prototype.getWitnessAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 9, "");
          }),
        (proto.protocol.BlockHeader.raw.prototype.getWitnessAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getWitnessAddress());
          }),
        (proto.protocol.BlockHeader.raw.prototype.getWitnessAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getWitnessAddress());
          }),
        (proto.protocol.BlockHeader.raw.prototype.setWitnessAddress = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 9, t);
        }),
        (proto.protocol.BlockHeader.prototype.getRawData = function () {
          return r.Message.getWrapperField(
            this,
            proto.protocol.BlockHeader.raw,
            1,
          );
        }),
        (proto.protocol.BlockHeader.prototype.setRawData = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.BlockHeader.prototype.clearRawData = function () {
          this.setRawData(void 0);
        }),
        (proto.protocol.BlockHeader.prototype.hasRawData = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.BlockHeader.prototype.getWitnessSignature =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.protocol.BlockHeader.prototype.getWitnessSignature_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getWitnessSignature());
          }),
        (proto.protocol.BlockHeader.prototype.getWitnessSignature_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getWitnessSignature());
          }),
        (proto.protocol.BlockHeader.prototype.setWitnessSignature = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.Block = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Block.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Block, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Block.displayName = "proto.protocol.Block"),
        (proto.protocol.Block.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Block.prototype.toObject = function (t) {
            return proto.protocol.Block.toObject(t, this);
          }),
          (proto.protocol.Block.toObject = function (t, e) {
            var o,
              s = {
                transactionsList: r.Message.toObjectList(
                  e.getTransactionsList(),
                  proto.protocol.Transaction.toObject,
                  t,
                ),
                blockHeader:
                  (o = e.getBlockHeader()) &&
                  proto.protocol.BlockHeader.toObject(t, o),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.Block.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Block();
          return proto.protocol.Block.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Block.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Transaction();
                (e.readMessage(
                  r,
                  proto.protocol.Transaction.deserializeBinaryFromReader,
                ),
                  t.addTransactions(r));
                break;
              case 2:
                r = new proto.protocol.BlockHeader();
                (e.readMessage(
                  r,
                  proto.protocol.BlockHeader.deserializeBinaryFromReader,
                ),
                  t.setBlockHeader(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Block.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Block.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Block.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getTransactionsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                1,
                o,
                proto.protocol.Transaction.serializeBinaryToWriter,
              ),
            (o = t.getBlockHeader()),
            null != o &&
              e.writeMessage(
                2,
                o,
                proto.protocol.BlockHeader.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.Block.prototype.getTransactionsList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Transaction,
            1,
          );
        }),
        (proto.protocol.Block.prototype.setTransactionsList = function (t) {
          r.Message.setRepeatedWrapperField(this, 1, t);
        }),
        (proto.protocol.Block.prototype.addTransactions = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            t,
            proto.protocol.Transaction,
            e,
          );
        }),
        (proto.protocol.Block.prototype.clearTransactionsList = function () {
          this.setTransactionsList([]);
        }),
        (proto.protocol.Block.prototype.getBlockHeader = function () {
          return r.Message.getWrapperField(this, proto.protocol.BlockHeader, 2);
        }),
        (proto.protocol.Block.prototype.setBlockHeader = function (t) {
          r.Message.setWrapperField(this, 2, t);
        }),
        (proto.protocol.Block.prototype.clearBlockHeader = function () {
          this.setBlockHeader(void 0);
        }),
        (proto.protocol.Block.prototype.hasBlockHeader = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.protocol.ChainInventory = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.ChainInventory.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.ChainInventory, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.ChainInventory.displayName =
            "proto.protocol.ChainInventory"),
        (proto.protocol.ChainInventory.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.ChainInventory.prototype.toObject = function (t) {
            return proto.protocol.ChainInventory.toObject(t, this);
          }),
          (proto.protocol.ChainInventory.toObject = function (t, e) {
            var o = {
              idsList: r.Message.toObjectList(
                e.getIdsList(),
                proto.protocol.ChainInventory.BlockId.toObject,
                t,
              ),
              remainNum: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.ChainInventory.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.ChainInventory();
          return proto.protocol.ChainInventory.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.ChainInventory.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.ChainInventory.BlockId();
                (e.readMessage(
                  r,
                  proto.protocol.ChainInventory.BlockId
                    .deserializeBinaryFromReader,
                ),
                  t.addIds(r));
                break;
              case 2:
                r = e.readInt64();
                t.setRemainNum(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.ChainInventory.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.ChainInventory.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.ChainInventory.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getIdsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                1,
                o,
                proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter,
              ),
            (o = t.getRemainNum()),
            0 !== o && e.writeInt64(2, o));
        }),
        (proto.protocol.ChainInventory.BlockId = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.ChainInventory.BlockId, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.ChainInventory.BlockId.displayName =
            "proto.protocol.ChainInventory.BlockId"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.ChainInventory.BlockId.prototype.toObject =
            function (t) {
              return proto.protocol.ChainInventory.BlockId.toObject(t, this);
            }),
          (proto.protocol.ChainInventory.BlockId.toObject = function (t, e) {
            var o = {
              hash: e.getHash_asB64(),
              number: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.ChainInventory.BlockId.deserializeBinary = function (
          t,
        ) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.ChainInventory.BlockId();
          return proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.ChainInventory.BlockId.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setHash(r);
                  break;
                case 2:
                  r = e.readInt64();
                  t.setNumber(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.ChainInventory.BlockId.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.ChainInventory.BlockId.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getHash_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getNumber()),
              0 !== o && e.writeInt64(2, o));
          }),
        (proto.protocol.ChainInventory.BlockId.prototype.getHash = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.ChainInventory.BlockId.prototype.getHash_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getHash());
          }),
        (proto.protocol.ChainInventory.BlockId.prototype.getHash_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getHash());
          }),
        (proto.protocol.ChainInventory.BlockId.prototype.setHash = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.ChainInventory.BlockId.prototype.getNumber =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.protocol.ChainInventory.BlockId.prototype.setNumber = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.ChainInventory.prototype.getIdsList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.ChainInventory.BlockId,
            1,
          );
        }),
        (proto.protocol.ChainInventory.prototype.setIdsList = function (t) {
          r.Message.setRepeatedWrapperField(this, 1, t);
        }),
        (proto.protocol.ChainInventory.prototype.addIds = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            t,
            proto.protocol.ChainInventory.BlockId,
            e,
          );
        }),
        (proto.protocol.ChainInventory.prototype.clearIdsList = function () {
          this.setIdsList([]);
        }),
        (proto.protocol.ChainInventory.prototype.getRemainNum = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.ChainInventory.prototype.setRemainNum = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.BlockInventory = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.BlockInventory.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.BlockInventory, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.BlockInventory.displayName =
            "proto.protocol.BlockInventory"),
        (proto.protocol.BlockInventory.repeatedFields_ = [1]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.BlockInventory.prototype.toObject = function (t) {
            return proto.protocol.BlockInventory.toObject(t, this);
          }),
          (proto.protocol.BlockInventory.toObject = function (t, e) {
            var o = {
              idsList: r.Message.toObjectList(
                e.getIdsList(),
                proto.protocol.BlockInventory.BlockId.toObject,
                t,
              ),
              type: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.BlockInventory.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.BlockInventory();
          return proto.protocol.BlockInventory.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.BlockInventory.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.BlockInventory.BlockId();
                (e.readMessage(
                  r,
                  proto.protocol.BlockInventory.BlockId
                    .deserializeBinaryFromReader,
                ),
                  t.addIds(r));
                break;
              case 2:
                r = e.readEnum();
                t.setType(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.BlockInventory.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.BlockInventory.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.BlockInventory.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getIdsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                1,
                o,
                proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter,
              ),
            (o = t.getType()),
            0 !== o && e.writeEnum(2, o));
        }),
        (proto.protocol.BlockInventory.Type = {
          SYNC: 0,
          ADVTISE: 1,
          FETCH: 2,
        }),
        (proto.protocol.BlockInventory.BlockId = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.BlockInventory.BlockId, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.BlockInventory.BlockId.displayName =
            "proto.protocol.BlockInventory.BlockId"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.BlockInventory.BlockId.prototype.toObject =
            function (t) {
              return proto.protocol.BlockInventory.BlockId.toObject(t, this);
            }),
          (proto.protocol.BlockInventory.BlockId.toObject = function (t, e) {
            var o = {
              hash: e.getHash_asB64(),
              number: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.BlockInventory.BlockId.deserializeBinary = function (
          t,
        ) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.BlockInventory.BlockId();
          return proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.BlockInventory.BlockId.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setHash(r);
                  break;
                case 2:
                  r = e.readInt64();
                  t.setNumber(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.BlockInventory.BlockId.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.BlockInventory.BlockId.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getHash_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getNumber()),
              0 !== o && e.writeInt64(2, o));
          }),
        (proto.protocol.BlockInventory.BlockId.prototype.getHash = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.BlockInventory.BlockId.prototype.getHash_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getHash());
          }),
        (proto.protocol.BlockInventory.BlockId.prototype.getHash_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getHash());
          }),
        (proto.protocol.BlockInventory.BlockId.prototype.setHash = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.BlockInventory.BlockId.prototype.getNumber =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.protocol.BlockInventory.BlockId.prototype.setNumber = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.BlockInventory.prototype.getIdsList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.BlockInventory.BlockId,
            1,
          );
        }),
        (proto.protocol.BlockInventory.prototype.setIdsList = function (t) {
          r.Message.setRepeatedWrapperField(this, 1, t);
        }),
        (proto.protocol.BlockInventory.prototype.addIds = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            1,
            t,
            proto.protocol.BlockInventory.BlockId,
            e,
          );
        }),
        (proto.protocol.BlockInventory.prototype.clearIdsList = function () {
          this.setIdsList([]);
        }),
        (proto.protocol.BlockInventory.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.BlockInventory.prototype.setType = function (t) {
          r.Message.setProto3EnumField(this, 2, t);
        }),
        (proto.protocol.Inventory = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Inventory.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Inventory, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Inventory.displayName = "proto.protocol.Inventory"),
        (proto.protocol.Inventory.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Inventory.prototype.toObject = function (t) {
            return proto.protocol.Inventory.toObject(t, this);
          }),
          (proto.protocol.Inventory.toObject = function (t, e) {
            var o = {
              type: r.Message.getFieldWithDefault(e, 1, 0),
              idsList: e.getIdsList_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Inventory.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Inventory();
          return proto.protocol.Inventory.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Inventory.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readEnum();
                t.setType(r);
                break;
              case 2:
                r = e.readBytes();
                t.addIds(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Inventory.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Inventory.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Inventory.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getType()),
            0 !== o && e.writeEnum(1, o),
            (o = t.getIdsList_asU8()),
            o.length > 0 && e.writeRepeatedBytes(2, o));
        }),
        (proto.protocol.Inventory.InventoryType = { TRX: 0, BLOCK: 1 }),
        (proto.protocol.Inventory.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.Inventory.prototype.setType = function (t) {
          r.Message.setProto3EnumField(this, 1, t);
        }),
        (proto.protocol.Inventory.prototype.getIdsList = function () {
          return r.Message.getRepeatedField(this, 2);
        }),
        (proto.protocol.Inventory.prototype.getIdsList_asB64 = function () {
          return r.Message.bytesListAsB64(this.getIdsList());
        }),
        (proto.protocol.Inventory.prototype.getIdsList_asU8 = function () {
          return r.Message.bytesListAsU8(this.getIdsList());
        }),
        (proto.protocol.Inventory.prototype.setIdsList = function (t) {
          r.Message.setField(this, 2, t || []);
        }),
        (proto.protocol.Inventory.prototype.addIds = function (t, e) {
          r.Message.addToRepeatedField(this, 2, t, e);
        }),
        (proto.protocol.Inventory.prototype.clearIdsList = function () {
          this.setIdsList([]);
        }),
        (proto.protocol.Items = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Items.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Items, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Items.displayName = "proto.protocol.Items"),
        (proto.protocol.Items.repeatedFields_ = [2, 3, 4]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Items.prototype.toObject = function (t) {
            return proto.protocol.Items.toObject(t, this);
          }),
          (proto.protocol.Items.toObject = function (t, e) {
            var o = {
              type: r.Message.getFieldWithDefault(e, 1, 0),
              blocksList: r.Message.toObjectList(
                e.getBlocksList(),
                proto.protocol.Block.toObject,
                t,
              ),
              blockHeadersList: r.Message.toObjectList(
                e.getBlockHeadersList(),
                proto.protocol.BlockHeader.toObject,
                t,
              ),
              transactionsList: r.Message.toObjectList(
                e.getTransactionsList(),
                proto.protocol.Transaction.toObject,
                t,
              ),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Items.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Items();
          return proto.protocol.Items.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Items.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readEnum();
                t.setType(r);
                break;
              case 2:
                r = new proto.protocol.Block();
                (e.readMessage(
                  r,
                  proto.protocol.Block.deserializeBinaryFromReader,
                ),
                  t.addBlocks(r));
                break;
              case 3:
                r = new proto.protocol.BlockHeader();
                (e.readMessage(
                  r,
                  proto.protocol.BlockHeader.deserializeBinaryFromReader,
                ),
                  t.addBlockHeaders(r));
                break;
              case 4:
                r = new proto.protocol.Transaction();
                (e.readMessage(
                  r,
                  proto.protocol.Transaction.deserializeBinaryFromReader,
                ),
                  t.addTransactions(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Items.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Items.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Items.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getType()),
            0 !== o && e.writeEnum(1, o),
            (o = t.getBlocksList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                2,
                o,
                proto.protocol.Block.serializeBinaryToWriter,
              ),
            (o = t.getBlockHeadersList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                3,
                o,
                proto.protocol.BlockHeader.serializeBinaryToWriter,
              ),
            (o = t.getTransactionsList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                4,
                o,
                proto.protocol.Transaction.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.Items.ItemType = {
          ERR: 0,
          TRX: 1,
          BLOCK: 2,
          BLOCKHEADER: 3,
        }),
        (proto.protocol.Items.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.Items.prototype.setType = function (t) {
          r.Message.setProto3EnumField(this, 1, t);
        }),
        (proto.protocol.Items.prototype.getBlocksList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Block,
            2,
          );
        }),
        (proto.protocol.Items.prototype.setBlocksList = function (t) {
          r.Message.setRepeatedWrapperField(this, 2, t);
        }),
        (proto.protocol.Items.prototype.addBlocks = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            t,
            proto.protocol.Block,
            e,
          );
        }),
        (proto.protocol.Items.prototype.clearBlocksList = function () {
          this.setBlocksList([]);
        }),
        (proto.protocol.Items.prototype.getBlockHeadersList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.BlockHeader,
            3,
          );
        }),
        (proto.protocol.Items.prototype.setBlockHeadersList = function (t) {
          r.Message.setRepeatedWrapperField(this, 3, t);
        }),
        (proto.protocol.Items.prototype.addBlockHeaders = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            3,
            t,
            proto.protocol.BlockHeader,
            e,
          );
        }),
        (proto.protocol.Items.prototype.clearBlockHeadersList = function () {
          this.setBlockHeadersList([]);
        }),
        (proto.protocol.Items.prototype.getTransactionsList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Transaction,
            4,
          );
        }),
        (proto.protocol.Items.prototype.setTransactionsList = function (t) {
          r.Message.setRepeatedWrapperField(this, 4, t);
        }),
        (proto.protocol.Items.prototype.addTransactions = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            4,
            t,
            proto.protocol.Transaction,
            e,
          );
        }),
        (proto.protocol.Items.prototype.clearTransactionsList = function () {
          this.setTransactionsList([]);
        }),
        (proto.protocol.DynamicProperties = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.DynamicProperties, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.DynamicProperties.displayName =
            "proto.protocol.DynamicProperties"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.DynamicProperties.prototype.toObject = function (t) {
            return proto.protocol.DynamicProperties.toObject(t, this);
          }),
          (proto.protocol.DynamicProperties.toObject = function (t, e) {
            var o = {
              lastSolidityBlockNum: r.Message.getFieldWithDefault(e, 1, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.DynamicProperties.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.DynamicProperties();
          return proto.protocol.DynamicProperties.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.DynamicProperties.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readInt64();
                  t.setLastSolidityBlockNum(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.DynamicProperties.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.DynamicProperties.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.DynamicProperties.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getLastSolidityBlockNum()), 0 !== o && e.writeInt64(1, o));
        }),
        (proto.protocol.DynamicProperties.prototype.getLastSolidityBlockNum =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.protocol.DynamicProperties.prototype.setLastSolidityBlockNum =
          function (t) {
            r.Message.setProto3IntField(this, 1, t);
          }),
        (proto.protocol.DisconnectMessage = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.DisconnectMessage, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.DisconnectMessage.displayName =
            "proto.protocol.DisconnectMessage"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.DisconnectMessage.prototype.toObject = function (t) {
            return proto.protocol.DisconnectMessage.toObject(t, this);
          }),
          (proto.protocol.DisconnectMessage.toObject = function (t, e) {
            var o = { reason: r.Message.getFieldWithDefault(e, 1, 0) };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.DisconnectMessage.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.DisconnectMessage();
          return proto.protocol.DisconnectMessage.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.DisconnectMessage.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readEnum();
                  t.setReason(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.DisconnectMessage.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.DisconnectMessage.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.DisconnectMessage.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getReason()), 0 !== o && e.writeEnum(1, o));
        }),
        (proto.protocol.DisconnectMessage.prototype.getReason = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.DisconnectMessage.prototype.setReason = function (t) {
          r.Message.setProto3EnumField(this, 1, t);
        }),
        (proto.protocol.HelloMessage = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.HelloMessage, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.HelloMessage.displayName =
            "proto.protocol.HelloMessage"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.HelloMessage.prototype.toObject = function (t) {
            return proto.protocol.HelloMessage.toObject(t, this);
          }),
          (proto.protocol.HelloMessage.toObject = function (t, e) {
            var o,
              s = {
                from: (o = e.getFrom()) && i.Endpoint.toObject(t, o),
                version: r.Message.getFieldWithDefault(e, 2, 0),
                timestamp: r.Message.getFieldWithDefault(e, 3, 0),
                genesisblockid:
                  (o = e.getGenesisblockid()) &&
                  proto.protocol.HelloMessage.BlockId.toObject(t, o),
                solidblockid:
                  (o = e.getSolidblockid()) &&
                  proto.protocol.HelloMessage.BlockId.toObject(t, o),
                headblockid:
                  (o = e.getHeadblockid()) &&
                  proto.protocol.HelloMessage.BlockId.toObject(t, o),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.HelloMessage.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.HelloMessage();
          return proto.protocol.HelloMessage.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.HelloMessage.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new i.Endpoint();
                (e.readMessage(r, i.Endpoint.deserializeBinaryFromReader),
                  t.setFrom(r));
                break;
              case 2:
                r = e.readInt32();
                t.setVersion(r);
                break;
              case 3:
                r = e.readInt64();
                t.setTimestamp(r);
                break;
              case 4:
                r = new proto.protocol.HelloMessage.BlockId();
                (e.readMessage(
                  r,
                  proto.protocol.HelloMessage.BlockId
                    .deserializeBinaryFromReader,
                ),
                  t.setGenesisblockid(r));
                break;
              case 5:
                r = new proto.protocol.HelloMessage.BlockId();
                (e.readMessage(
                  r,
                  proto.protocol.HelloMessage.BlockId
                    .deserializeBinaryFromReader,
                ),
                  t.setSolidblockid(r));
                break;
              case 6:
                r = new proto.protocol.HelloMessage.BlockId();
                (e.readMessage(
                  r,
                  proto.protocol.HelloMessage.BlockId
                    .deserializeBinaryFromReader,
                ),
                  t.setHeadblockid(r));
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.HelloMessage.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.HelloMessage.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.HelloMessage.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getFrom()),
            null != o &&
              e.writeMessage(1, o, i.Endpoint.serializeBinaryToWriter),
            (o = t.getVersion()),
            0 !== o && e.writeInt32(2, o),
            (o = t.getTimestamp()),
            0 !== o && e.writeInt64(3, o),
            (o = t.getGenesisblockid()),
            null != o &&
              e.writeMessage(
                4,
                o,
                proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter,
              ),
            (o = t.getSolidblockid()),
            null != o &&
              e.writeMessage(
                5,
                o,
                proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter,
              ),
            (o = t.getHeadblockid()),
            null != o &&
              e.writeMessage(
                6,
                o,
                proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter,
              ));
        }),
        (proto.protocol.HelloMessage.BlockId = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.HelloMessage.BlockId, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.HelloMessage.BlockId.displayName =
            "proto.protocol.HelloMessage.BlockId"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.HelloMessage.BlockId.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.HelloMessage.BlockId.toObject(t, this);
          }),
          (proto.protocol.HelloMessage.BlockId.toObject = function (t, e) {
            var o = {
              hash: e.getHash_asB64(),
              number: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.HelloMessage.BlockId.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.HelloMessage.BlockId();
          return proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.HelloMessage.BlockId.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setHash(r);
                  break;
                case 2:
                  r = e.readInt64();
                  t.setNumber(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.HelloMessage.BlockId.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.HelloMessage.BlockId.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getHash_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getNumber()),
              0 !== o && e.writeInt64(2, o));
          }),
        (proto.protocol.HelloMessage.BlockId.prototype.getHash = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.HelloMessage.BlockId.prototype.getHash_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getHash());
          }),
        (proto.protocol.HelloMessage.BlockId.prototype.getHash_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getHash());
          }),
        (proto.protocol.HelloMessage.BlockId.prototype.setHash = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.HelloMessage.BlockId.prototype.getNumber = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.HelloMessage.BlockId.prototype.setNumber = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.HelloMessage.prototype.getFrom = function () {
          return r.Message.getWrapperField(this, i.Endpoint, 1);
        }),
        (proto.protocol.HelloMessage.prototype.setFrom = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.HelloMessage.prototype.clearFrom = function () {
          this.setFrom(void 0);
        }),
        (proto.protocol.HelloMessage.prototype.hasFrom = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.HelloMessage.prototype.getVersion = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.HelloMessage.prototype.setVersion = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.HelloMessage.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.HelloMessage.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        (proto.protocol.HelloMessage.prototype.getGenesisblockid = function () {
          return r.Message.getWrapperField(
            this,
            proto.protocol.HelloMessage.BlockId,
            4,
          );
        }),
        (proto.protocol.HelloMessage.prototype.setGenesisblockid = function (
          t,
        ) {
          r.Message.setWrapperField(this, 4, t);
        }),
        (proto.protocol.HelloMessage.prototype.clearGenesisblockid =
          function () {
            this.setGenesisblockid(void 0);
          }),
        (proto.protocol.HelloMessage.prototype.hasGenesisblockid = function () {
          return null != r.Message.getField(this, 4);
        }),
        (proto.protocol.HelloMessage.prototype.getSolidblockid = function () {
          return r.Message.getWrapperField(
            this,
            proto.protocol.HelloMessage.BlockId,
            5,
          );
        }),
        (proto.protocol.HelloMessage.prototype.setSolidblockid = function (t) {
          r.Message.setWrapperField(this, 5, t);
        }),
        (proto.protocol.HelloMessage.prototype.clearSolidblockid = function () {
          this.setSolidblockid(void 0);
        }),
        (proto.protocol.HelloMessage.prototype.hasSolidblockid = function () {
          return null != r.Message.getField(this, 5);
        }),
        (proto.protocol.HelloMessage.prototype.getHeadblockid = function () {
          return r.Message.getWrapperField(
            this,
            proto.protocol.HelloMessage.BlockId,
            6,
          );
        }),
        (proto.protocol.HelloMessage.prototype.setHeadblockid = function (t) {
          r.Message.setWrapperField(this, 6, t);
        }),
        (proto.protocol.HelloMessage.prototype.clearHeadblockid = function () {
          this.setHeadblockid(void 0);
        }),
        (proto.protocol.HelloMessage.prototype.hasHeadblockid = function () {
          return null != r.Message.getField(this, 6);
        }),
        (proto.protocol.AccountType = {
          NORMAL: 0,
          ASSETISSUE: 1,
          CONTRACT: 2,
        }),
        (proto.protocol.ReasonCode = {
          REQUESTED: 0,
          BAD_PROTOCOL: 2,
          TOO_MANY_PEERS: 4,
          DUPLICATE_PEER: 5,
          INCOMPATIBLE_PROTOCOL: 6,
          NULL_IDENTITY: 7,
          PEER_QUITING: 8,
          UNEXPECTED_IDENTITY: 9,
          LOCAL_IDENTITY: 10,
          PING_TIMEOUT: 11,
          USER_REASON: 16,
          RESET: 17,
          SYNC_FAIL: 18,
          FETCH_FAIL: 19,
          BAD_TX: 20,
          BAD_BLOCK: 21,
          FORKED: 22,
          UNLINKABLE: 23,
          INCOMPATIBLE_VERSION: 24,
          INCOMPATIBLE_CHAIN: 25,
          TIME_OUT: 32,
          CONNECT_FAIL: 33,
          UNKNOWN: 255,
        }),
        s.object.extend(e, proto.protocol));
    },
    7240: function (t, e) {
      e.Base64 = function () {
        var t =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        ((this.encode = function (e) {
          var o,
            r,
            s,
            n,
            a,
            i,
            p,
            c = "",
            l = 0;
          while (l < e.length)
            ((o = e.charCodeAt(l++)),
              (r = e.charCodeAt(l++)),
              (s = e.charCodeAt(l++)),
              (n = o >> 2),
              (a = ((3 & o) << 4) | (r >> 4)),
              (i = ((15 & r) << 2) | (s >> 6)),
              (p = 63 & s),
              isNaN(r) ? (i = p = 64) : isNaN(s) && (p = 64),
              (c = c + t.charAt(n) + t.charAt(a) + t.charAt(i) + t.charAt(p)));
          return c;
        }),
          (this.encodeIgnoreUtf8 = function (e) {
            var o,
              r,
              s,
              n,
              a,
              i,
              p,
              c = "",
              l = 0;
            while (l < e.length)
              ((o = e[l++]),
                (r = e[l++]),
                (s = e[l++]),
                (n = o >> 2),
                (a = ((3 & o) << 4) | (r >> 4)),
                (i = ((15 & r) << 2) | (s >> 6)),
                (p = 63 & s),
                isNaN(r) ? (i = p = 64) : isNaN(s) && (p = 64),
                (c =
                  c + t.charAt(n) + t.charAt(a) + t.charAt(i) + t.charAt(p)));
            return c;
          }),
          (this.decode = function (e) {
            var r,
              s,
              n,
              a,
              i,
              p,
              c,
              l = "",
              u = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (u < e.length)
              ((a = t.indexOf(e.charAt(u++))),
                (i = t.indexOf(e.charAt(u++))),
                (p = t.indexOf(e.charAt(u++))),
                (c = t.indexOf(e.charAt(u++))),
                (r = (a << 2) | (i >> 4)),
                (s = ((15 & i) << 4) | (p >> 2)),
                (n = ((3 & p) << 6) | c),
                (l += String.fromCharCode(r)),
                64 != p && (l += String.fromCharCode(s)),
                64 != c && (l += String.fromCharCode(n)));
            return ((l = o(l)), l);
          }),
          (this.decodeToByteArray = function (o) {
            var r,
              s,
              n,
              a,
              i,
              p,
              c,
              l = "",
              u = 0;
            o = o.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (u < o.length)
              ((a = t.indexOf(o.charAt(u++))),
                (i = t.indexOf(o.charAt(u++))),
                (p = t.indexOf(o.charAt(u++))),
                (c = t.indexOf(o.charAt(u++))),
                (r = (a << 2) | (i >> 4)),
                (s = ((15 & i) << 4) | (p >> 2)),
                (n = ((3 & p) << 6) | c),
                (l += String.fromCharCode(r)),
                64 != p && (l += String.fromCharCode(s)),
                64 != c && (l += String.fromCharCode(n)));
            var d = e(l);
            return d;
          }));
        var e = function (t) {
            var e = new Array(t.length),
              o = 0,
              r = (c1 = c2 = 0);
            while (o < t.length) ((r = t.charCodeAt(o)), (e[o] = r), o++);
            return e;
          },
          o = function (t) {
            var e = "",
              o = 0,
              r = (c1 = c2 = 0);
            while (o < t.length)
              ((r = t.charCodeAt(o)),
                r < 128
                  ? ((e += String.fromCharCode(r)), o++)
                  : r > 191 && r < 224
                    ? ((c2 = t.charCodeAt(o + 1)),
                      (e += String.fromCharCode(((31 & r) << 6) | (63 & c2))),
                      (o += 2))
                    : ((c2 = t.charCodeAt(o + 1)),
                      (c3 = t.charCodeAt(o + 2)),
                      (e += String.fromCharCode(
                        ((15 & r) << 12) | ((63 & c2) << 6) | (63 & c3),
                      )),
                      (o += 3)));
            return e;
          };
      };
    },
    7241: function (t, e, o) {
      var r = o(4627),
        s = r,
        n = (function () {
          return this;
        })();
      (s.exportSymbol("proto.protocol.Endpoint", null, n),
        s.exportSymbol("proto.protocol.FindNeighbours", null, n),
        s.exportSymbol("proto.protocol.Neighbours", null, n),
        s.exportSymbol("proto.protocol.PingMessage", null, n),
        s.exportSymbol("proto.protocol.PongMessage", null, n),
        (proto.protocol.Endpoint = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.Endpoint, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Endpoint.displayName = "proto.protocol.Endpoint"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Endpoint.prototype.toObject = function (t) {
            return proto.protocol.Endpoint.toObject(t, this);
          }),
          (proto.protocol.Endpoint.toObject = function (t, e) {
            var o = {
              address: e.getAddress_asB64(),
              port: r.Message.getFieldWithDefault(e, 2, 0),
              nodeid: e.getNodeid_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.Endpoint.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Endpoint();
          return proto.protocol.Endpoint.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Endpoint.deserializeBinaryFromReader = function (t, e) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setAddress(r);
                break;
              case 2:
                r = e.readInt32();
                t.setPort(r);
                break;
              case 3:
                r = e.readBytes();
                t.setNodeid(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Endpoint.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Endpoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Endpoint.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getPort()),
            0 !== o && e.writeInt32(2, o),
            (o = t.getNodeid_asU8()),
            o.length > 0 && e.writeBytes(3, o));
        }),
        (proto.protocol.Endpoint.prototype.getAddress = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.Endpoint.prototype.getAddress_asB64 = function () {
          return r.Message.bytesAsB64(this.getAddress());
        }),
        (proto.protocol.Endpoint.prototype.getAddress_asU8 = function () {
          return r.Message.bytesAsU8(this.getAddress());
        }),
        (proto.protocol.Endpoint.prototype.setAddress = function (t) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.Endpoint.prototype.getPort = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.Endpoint.prototype.setPort = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.Endpoint.prototype.getNodeid = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.Endpoint.prototype.getNodeid_asB64 = function () {
          return r.Message.bytesAsB64(this.getNodeid());
        }),
        (proto.protocol.Endpoint.prototype.getNodeid_asU8 = function () {
          return r.Message.bytesAsU8(this.getNodeid());
        }),
        (proto.protocol.Endpoint.prototype.setNodeid = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.PingMessage = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.PingMessage, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.PingMessage.displayName =
            "proto.protocol.PingMessage"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.PingMessage.prototype.toObject = function (t) {
            return proto.protocol.PingMessage.toObject(t, this);
          }),
          (proto.protocol.PingMessage.toObject = function (t, e) {
            var o,
              s = {
                from:
                  (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                to: (o = e.getTo()) && proto.protocol.Endpoint.toObject(t, o),
                version: r.Message.getFieldWithDefault(e, 3, 0),
                timestamp: r.Message.getFieldWithDefault(e, 4, 0),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.PingMessage.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.PingMessage();
          return proto.protocol.PingMessage.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.PingMessage.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Endpoint();
                (e.readMessage(
                  r,
                  proto.protocol.Endpoint.deserializeBinaryFromReader,
                ),
                  t.setFrom(r));
                break;
              case 2:
                r = new proto.protocol.Endpoint();
                (e.readMessage(
                  r,
                  proto.protocol.Endpoint.deserializeBinaryFromReader,
                ),
                  t.setTo(r));
                break;
              case 3:
                r = e.readInt32();
                t.setVersion(r);
                break;
              case 4:
                r = e.readInt64();
                t.setTimestamp(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.PingMessage.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.PingMessage.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.PingMessage.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getFrom()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.Endpoint.serializeBinaryToWriter,
              ),
            (o = t.getTo()),
            null != o &&
              e.writeMessage(
                2,
                o,
                proto.protocol.Endpoint.serializeBinaryToWriter,
              ),
            (o = t.getVersion()),
            0 !== o && e.writeInt32(3, o),
            (o = t.getTimestamp()),
            0 !== o && e.writeInt64(4, o));
        }),
        (proto.protocol.PingMessage.prototype.getFrom = function () {
          return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1);
        }),
        (proto.protocol.PingMessage.prototype.setFrom = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.PingMessage.prototype.clearFrom = function () {
          this.setFrom(void 0);
        }),
        (proto.protocol.PingMessage.prototype.hasFrom = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.PingMessage.prototype.getTo = function () {
          return r.Message.getWrapperField(this, proto.protocol.Endpoint, 2);
        }),
        (proto.protocol.PingMessage.prototype.setTo = function (t) {
          r.Message.setWrapperField(this, 2, t);
        }),
        (proto.protocol.PingMessage.prototype.clearTo = function () {
          this.setTo(void 0);
        }),
        (proto.protocol.PingMessage.prototype.hasTo = function () {
          return null != r.Message.getField(this, 2);
        }),
        (proto.protocol.PingMessage.prototype.getVersion = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.PingMessage.prototype.setVersion = function (t) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        (proto.protocol.PingMessage.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 4, 0);
        }),
        (proto.protocol.PingMessage.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 4, t);
        }),
        (proto.protocol.PongMessage = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.PongMessage, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.PongMessage.displayName =
            "proto.protocol.PongMessage"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.PongMessage.prototype.toObject = function (t) {
            return proto.protocol.PongMessage.toObject(t, this);
          }),
          (proto.protocol.PongMessage.toObject = function (t, e) {
            var o,
              s = {
                from:
                  (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                echo: r.Message.getFieldWithDefault(e, 2, 0),
                timestamp: r.Message.getFieldWithDefault(e, 3, 0),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.PongMessage.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.PongMessage();
          return proto.protocol.PongMessage.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.PongMessage.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Endpoint();
                (e.readMessage(
                  r,
                  proto.protocol.Endpoint.deserializeBinaryFromReader,
                ),
                  t.setFrom(r));
                break;
              case 2:
                r = e.readInt32();
                t.setEcho(r);
                break;
              case 3:
                r = e.readInt64();
                t.setTimestamp(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.PongMessage.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.PongMessage.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.PongMessage.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getFrom()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.Endpoint.serializeBinaryToWriter,
              ),
            (o = t.getEcho()),
            0 !== o && e.writeInt32(2, o),
            (o = t.getTimestamp()),
            0 !== o && e.writeInt64(3, o));
        }),
        (proto.protocol.PongMessage.prototype.getFrom = function () {
          return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1);
        }),
        (proto.protocol.PongMessage.prototype.setFrom = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.PongMessage.prototype.clearFrom = function () {
          this.setFrom(void 0);
        }),
        (proto.protocol.PongMessage.prototype.hasFrom = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.PongMessage.prototype.getEcho = function () {
          return r.Message.getFieldWithDefault(this, 2, 0);
        }),
        (proto.protocol.PongMessage.prototype.setEcho = function (t) {
          r.Message.setProto3IntField(this, 2, t);
        }),
        (proto.protocol.PongMessage.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.PongMessage.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        (proto.protocol.FindNeighbours = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.FindNeighbours, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.FindNeighbours.displayName =
            "proto.protocol.FindNeighbours"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.FindNeighbours.prototype.toObject = function (t) {
            return proto.protocol.FindNeighbours.toObject(t, this);
          }),
          (proto.protocol.FindNeighbours.toObject = function (t, e) {
            var o,
              s = {
                from:
                  (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                targetid: e.getTargetid_asB64(),
                timestamp: r.Message.getFieldWithDefault(e, 3, 0),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.FindNeighbours.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.FindNeighbours();
          return proto.protocol.FindNeighbours.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.FindNeighbours.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Endpoint();
                (e.readMessage(
                  r,
                  proto.protocol.Endpoint.deserializeBinaryFromReader,
                ),
                  t.setFrom(r));
                break;
              case 2:
                r = e.readBytes();
                t.setTargetid(r);
                break;
              case 3:
                r = e.readInt64();
                t.setTimestamp(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.FindNeighbours.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.FindNeighbours.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.FindNeighbours.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getFrom()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.Endpoint.serializeBinaryToWriter,
              ),
            (o = t.getTargetid_asU8()),
            o.length > 0 && e.writeBytes(2, o),
            (o = t.getTimestamp()),
            0 !== o && e.writeInt64(3, o));
        }),
        (proto.protocol.FindNeighbours.prototype.getFrom = function () {
          return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1);
        }),
        (proto.protocol.FindNeighbours.prototype.setFrom = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.FindNeighbours.prototype.clearFrom = function () {
          this.setFrom(void 0);
        }),
        (proto.protocol.FindNeighbours.prototype.hasFrom = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.FindNeighbours.prototype.getTargetid = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.FindNeighbours.prototype.getTargetid_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getTargetid());
          }),
        (proto.protocol.FindNeighbours.prototype.getTargetid_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getTargetid());
          }),
        (proto.protocol.FindNeighbours.prototype.setTargetid = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.FindNeighbours.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.FindNeighbours.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        (proto.protocol.Neighbours = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.Neighbours.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.Neighbours, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.Neighbours.displayName = "proto.protocol.Neighbours"),
        (proto.protocol.Neighbours.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.Neighbours.prototype.toObject = function (t) {
            return proto.protocol.Neighbours.toObject(t, this);
          }),
          (proto.protocol.Neighbours.toObject = function (t, e) {
            var o,
              s = {
                from:
                  (o = e.getFrom()) && proto.protocol.Endpoint.toObject(t, o),
                neighboursList: r.Message.toObjectList(
                  e.getNeighboursList(),
                  proto.protocol.Endpoint.toObject,
                  t,
                ),
                timestamp: r.Message.getFieldWithDefault(e, 3, 0),
              };
            return (t && (s.$jspbMessageInstance = e), s);
          })),
        (proto.protocol.Neighbours.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.Neighbours();
          return proto.protocol.Neighbours.deserializeBinaryFromReader(o, e);
        }),
        (proto.protocol.Neighbours.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = new proto.protocol.Endpoint();
                (e.readMessage(
                  r,
                  proto.protocol.Endpoint.deserializeBinaryFromReader,
                ),
                  t.setFrom(r));
                break;
              case 2:
                r = new proto.protocol.Endpoint();
                (e.readMessage(
                  r,
                  proto.protocol.Endpoint.deserializeBinaryFromReader,
                ),
                  t.addNeighbours(r));
                break;
              case 3:
                r = e.readInt64();
                t.setTimestamp(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.Neighbours.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.Neighbours.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.Neighbours.serializeBinaryToWriter = function (t, e) {
          var o = void 0;
          ((o = t.getFrom()),
            null != o &&
              e.writeMessage(
                1,
                o,
                proto.protocol.Endpoint.serializeBinaryToWriter,
              ),
            (o = t.getNeighboursList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                2,
                o,
                proto.protocol.Endpoint.serializeBinaryToWriter,
              ),
            (o = t.getTimestamp()),
            0 !== o && e.writeInt64(3, o));
        }),
        (proto.protocol.Neighbours.prototype.getFrom = function () {
          return r.Message.getWrapperField(this, proto.protocol.Endpoint, 1);
        }),
        (proto.protocol.Neighbours.prototype.setFrom = function (t) {
          r.Message.setWrapperField(this, 1, t);
        }),
        (proto.protocol.Neighbours.prototype.clearFrom = function () {
          this.setFrom(void 0);
        }),
        (proto.protocol.Neighbours.prototype.hasFrom = function () {
          return null != r.Message.getField(this, 1);
        }),
        (proto.protocol.Neighbours.prototype.getNeighboursList = function () {
          return r.Message.getRepeatedWrapperField(
            this,
            proto.protocol.Endpoint,
            2,
          );
        }),
        (proto.protocol.Neighbours.prototype.setNeighboursList = function (t) {
          r.Message.setRepeatedWrapperField(this, 2, t);
        }),
        (proto.protocol.Neighbours.prototype.addNeighbours = function (t, e) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            t,
            proto.protocol.Endpoint,
            e,
          );
        }),
        (proto.protocol.Neighbours.prototype.clearNeighboursList = function () {
          this.setNeighboursList([]);
        }),
        (proto.protocol.Neighbours.prototype.getTimestamp = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.Neighbours.prototype.setTimestamp = function (t) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        s.object.extend(e, proto.protocol));
    },
    7242: function (t, e, o) {
      var r = o(4627),
        s = r,
        n = (function () {
          return this;
        })();
      o(5905);
      (s.exportSymbol("proto.protocol.AccountCreateContract", null, n),
        s.exportSymbol("proto.protocol.AccountUpdateContract", null, n),
        s.exportSymbol("proto.protocol.AssetIssueContract", null, n),
        s.exportSymbol(
          "proto.protocol.AssetIssueContract.FrozenSupply",
          null,
          n,
        ),
        s.exportSymbol("proto.protocol.DeployContract", null, n),
        s.exportSymbol("proto.protocol.FreezeBalanceContract", null, n),
        s.exportSymbol("proto.protocol.ParticipateAssetIssueContract", null, n),
        s.exportSymbol("proto.protocol.TransferAssetContract", null, n),
        s.exportSymbol("proto.protocol.TransferContract", null, n),
        s.exportSymbol("proto.protocol.UnfreezeAssetContract", null, n),
        s.exportSymbol("proto.protocol.UnfreezeBalanceContract", null, n),
        s.exportSymbol("proto.protocol.UpdateAssetContract", null, n),
        s.exportSymbol("proto.protocol.VoteAssetContract", null, n),
        s.exportSymbol("proto.protocol.VoteWitnessContract", null, n),
        s.exportSymbol("proto.protocol.VoteWitnessContract.Vote", null, n),
        s.exportSymbol("proto.protocol.WithdrawBalanceContract", null, n),
        s.exportSymbol("proto.protocol.WitnessCreateContract", null, n),
        s.exportSymbol("proto.protocol.WitnessUpdateContract", null, n),
        (proto.protocol.AccountCreateContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.AccountCreateContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.AccountCreateContract.displayName =
            "proto.protocol.AccountCreateContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.AccountCreateContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.AccountCreateContract.toObject(t, this);
          }),
          (proto.protocol.AccountCreateContract.toObject = function (t, e) {
            var o = {
              type: r.Message.getFieldWithDefault(e, 1, 0),
              accountName: e.getAccountName_asB64(),
              ownerAddress: e.getOwnerAddress_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.AccountCreateContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.AccountCreateContract();
          return proto.protocol.AccountCreateContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.AccountCreateContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readEnum();
                  t.setType(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setAccountName(r);
                  break;
                case 3:
                  r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.AccountCreateContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.AccountCreateContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.AccountCreateContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getType()),
              0 !== o && e.writeEnum(1, o),
              (o = t.getAccountName_asU8()),
              o.length > 0 && e.writeBytes(2, o),
              (o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(3, o));
          }),
        (proto.protocol.AccountCreateContract.prototype.getType = function () {
          return r.Message.getFieldWithDefault(this, 1, 0);
        }),
        (proto.protocol.AccountCreateContract.prototype.setType = function (t) {
          r.Message.setProto3EnumField(this, 1, t);
        }),
        (proto.protocol.AccountCreateContract.prototype.getAccountName =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.protocol.AccountCreateContract.prototype.getAccountName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getAccountName());
          }),
        (proto.protocol.AccountCreateContract.prototype.getAccountName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getAccountName());
          }),
        (proto.protocol.AccountCreateContract.prototype.setAccountName =
          function (t) {
            r.Message.setProto3BytesField(this, 2, t);
          }),
        (proto.protocol.AccountCreateContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.protocol.AccountCreateContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.AccountCreateContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.AccountCreateContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 3, t);
          }),
        (proto.protocol.AccountUpdateContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.AccountUpdateContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.AccountUpdateContract.displayName =
            "proto.protocol.AccountUpdateContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.AccountUpdateContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.AccountUpdateContract.toObject(t, this);
          }),
          (proto.protocol.AccountUpdateContract.toObject = function (t, e) {
            var o = {
              accountName: e.getAccountName_asB64(),
              ownerAddress: e.getOwnerAddress_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.AccountUpdateContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.AccountUpdateContract();
          return proto.protocol.AccountUpdateContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.AccountUpdateContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setAccountName(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.AccountUpdateContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.AccountUpdateContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.AccountUpdateContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getAccountName_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(2, o));
          }),
        (proto.protocol.AccountUpdateContract.prototype.getAccountName =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.AccountUpdateContract.prototype.getAccountName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getAccountName());
          }),
        (proto.protocol.AccountUpdateContract.prototype.getAccountName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getAccountName());
          }),
        (proto.protocol.AccountUpdateContract.prototype.setAccountName =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.AccountUpdateContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.protocol.AccountUpdateContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.AccountUpdateContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.AccountUpdateContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 2, t);
          }),
        (proto.protocol.TransferContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.TransferContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.TransferContract.displayName =
            "proto.protocol.TransferContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.TransferContract.prototype.toObject = function (t) {
            return proto.protocol.TransferContract.toObject(t, this);
          }),
          (proto.protocol.TransferContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              toAddress: e.getToAddress_asB64(),
              amount: r.Message.getFieldWithDefault(e, 3, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.TransferContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.TransferContract();
          return proto.protocol.TransferContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.TransferContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setToAddress(r);
                  break;
                case 3:
                  r = e.readInt64();
                  t.setAmount(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.TransferContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.TransferContract.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.TransferContract.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getOwnerAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getToAddress_asU8()),
            o.length > 0 && e.writeBytes(2, o),
            (o = t.getAmount()),
            0 !== o && e.writeInt64(3, o));
        }),
        (proto.protocol.TransferContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.TransferContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.TransferContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.TransferContract.prototype.setOwnerAddress = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.TransferContract.prototype.getToAddress = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.TransferContract.prototype.getToAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getToAddress());
          }),
        (proto.protocol.TransferContract.prototype.getToAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getToAddress());
          }),
        (proto.protocol.TransferContract.prototype.setToAddress = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.TransferContract.prototype.getAmount = function () {
          return r.Message.getFieldWithDefault(this, 3, 0);
        }),
        (proto.protocol.TransferContract.prototype.setAmount = function (t) {
          r.Message.setProto3IntField(this, 3, t);
        }),
        (proto.protocol.TransferAssetContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.TransferAssetContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.TransferAssetContract.displayName =
            "proto.protocol.TransferAssetContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.TransferAssetContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.TransferAssetContract.toObject(t, this);
          }),
          (proto.protocol.TransferAssetContract.toObject = function (t, e) {
            var o = {
              assetName: e.getAssetName_asB64(),
              ownerAddress: e.getOwnerAddress_asB64(),
              toAddress: e.getToAddress_asB64(),
              amount: r.Message.getFieldWithDefault(e, 4, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.TransferAssetContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.TransferAssetContract();
          return proto.protocol.TransferAssetContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.TransferAssetContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setAssetName(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 3:
                  r = e.readBytes();
                  t.setToAddress(r);
                  break;
                case 4:
                  r = e.readInt64();
                  t.setAmount(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.TransferAssetContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.TransferAssetContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.TransferAssetContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getAssetName_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(2, o),
              (o = t.getToAddress_asU8()),
              o.length > 0 && e.writeBytes(3, o),
              (o = t.getAmount()),
              0 !== o && e.writeInt64(4, o));
          }),
        (proto.protocol.TransferAssetContract.prototype.getAssetName =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.TransferAssetContract.prototype.getAssetName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getAssetName());
          }),
        (proto.protocol.TransferAssetContract.prototype.getAssetName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getAssetName());
          }),
        (proto.protocol.TransferAssetContract.prototype.setAssetName =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.TransferAssetContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.protocol.TransferAssetContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.TransferAssetContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.TransferAssetContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 2, t);
          }),
        (proto.protocol.TransferAssetContract.prototype.getToAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.protocol.TransferAssetContract.prototype.getToAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getToAddress());
          }),
        (proto.protocol.TransferAssetContract.prototype.getToAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getToAddress());
          }),
        (proto.protocol.TransferAssetContract.prototype.setToAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 3, t);
          }),
        (proto.protocol.TransferAssetContract.prototype.getAmount =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.protocol.TransferAssetContract.prototype.setAmount = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 4, t);
        }),
        (proto.protocol.VoteAssetContract = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.VoteAssetContract.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.VoteAssetContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.VoteAssetContract.displayName =
            "proto.protocol.VoteAssetContract"),
        (proto.protocol.VoteAssetContract.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.VoteAssetContract.prototype.toObject = function (t) {
            return proto.protocol.VoteAssetContract.toObject(t, this);
          }),
          (proto.protocol.VoteAssetContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              voteAddressList: e.getVoteAddressList_asB64(),
              support: r.Message.getFieldWithDefault(e, 3, !1),
              count: r.Message.getFieldWithDefault(e, 5, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.VoteAssetContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.VoteAssetContract();
          return proto.protocol.VoteAssetContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.VoteAssetContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.addVoteAddress(r);
                  break;
                case 3:
                  r = e.readBool();
                  t.setSupport(r);
                  break;
                case 5:
                  r = e.readInt32();
                  t.setCount(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.VoteAssetContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.VoteAssetContract.serializeBinaryToWriter(this, t),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.VoteAssetContract.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getOwnerAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getVoteAddressList_asU8()),
            o.length > 0 && e.writeRepeatedBytes(2, o),
            (o = t.getSupport()),
            o && e.writeBool(3, o),
            (o = t.getCount()),
            0 !== o && e.writeInt32(5, o));
        }),
        (proto.protocol.VoteAssetContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.VoteAssetContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.VoteAssetContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.VoteAssetContract.prototype.setOwnerAddress = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.VoteAssetContract.prototype.getVoteAddressList =
          function () {
            return r.Message.getRepeatedField(this, 2);
          }),
        (proto.protocol.VoteAssetContract.prototype.getVoteAddressList_asB64 =
          function () {
            return r.Message.bytesListAsB64(this.getVoteAddressList());
          }),
        (proto.protocol.VoteAssetContract.prototype.getVoteAddressList_asU8 =
          function () {
            return r.Message.bytesListAsU8(this.getVoteAddressList());
          }),
        (proto.protocol.VoteAssetContract.prototype.setVoteAddressList =
          function (t) {
            r.Message.setField(this, 2, t || []);
          }),
        (proto.protocol.VoteAssetContract.prototype.addVoteAddress = function (
          t,
          e,
        ) {
          r.Message.addToRepeatedField(this, 2, t, e);
        }),
        (proto.protocol.VoteAssetContract.prototype.clearVoteAddressList =
          function () {
            this.setVoteAddressList([]);
          }),
        (proto.protocol.VoteAssetContract.prototype.getSupport = function () {
          return r.Message.getFieldWithDefault(this, 3, !1);
        }),
        (proto.protocol.VoteAssetContract.prototype.setSupport = function (t) {
          r.Message.setProto3BooleanField(this, 3, t);
        }),
        (proto.protocol.VoteAssetContract.prototype.getCount = function () {
          return r.Message.getFieldWithDefault(this, 5, 0);
        }),
        (proto.protocol.VoteAssetContract.prototype.setCount = function (t) {
          r.Message.setProto3IntField(this, 5, t);
        }),
        (proto.protocol.VoteWitnessContract = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.VoteWitnessContract.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.VoteWitnessContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.VoteWitnessContract.displayName =
            "proto.protocol.VoteWitnessContract"),
        (proto.protocol.VoteWitnessContract.repeatedFields_ = [2]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.VoteWitnessContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.VoteWitnessContract.toObject(t, this);
          }),
          (proto.protocol.VoteWitnessContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              votesList: r.Message.toObjectList(
                e.getVotesList(),
                proto.protocol.VoteWitnessContract.Vote.toObject,
                t,
              ),
              support: r.Message.getFieldWithDefault(e, 3, !1),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.VoteWitnessContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.VoteWitnessContract();
          return proto.protocol.VoteWitnessContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.VoteWitnessContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = new proto.protocol.VoteWitnessContract.Vote();
                  (e.readMessage(
                    r,
                    proto.protocol.VoteWitnessContract.Vote
                      .deserializeBinaryFromReader,
                  ),
                    t.addVotes(r));
                  break;
                case 3:
                  r = e.readBool();
                  t.setSupport(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.VoteWitnessContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.VoteWitnessContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.VoteWitnessContract.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getOwnerAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getVotesList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                2,
                o,
                proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter,
              ),
            (o = t.getSupport()),
            o && e.writeBool(3, o));
        }),
        (proto.protocol.VoteWitnessContract.Vote = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.VoteWitnessContract.Vote, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.VoteWitnessContract.Vote.displayName =
            "proto.protocol.VoteWitnessContract.Vote"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.VoteWitnessContract.Vote.prototype.toObject =
            function (t) {
              return proto.protocol.VoteWitnessContract.Vote.toObject(t, this);
            }),
          (proto.protocol.VoteWitnessContract.Vote.toObject = function (t, e) {
            var o = {
              voteAddress: e.getVoteAddress_asB64(),
              voteCount: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.VoteWitnessContract.Vote.deserializeBinary = function (
          t,
        ) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.VoteWitnessContract.Vote();
          return proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.VoteWitnessContract.Vote.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setVoteAddress(r);
                  break;
                case 2:
                  r = e.readInt64();
                  t.setVoteCount(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.VoteWitnessContract.Vote.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getVoteAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getVoteCount()),
              0 !== o && e.writeInt64(2, o));
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getVoteAddress());
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.getVoteAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getVoteAddress());
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.setVoteAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.getVoteCount =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.protocol.VoteWitnessContract.Vote.prototype.setVoteCount =
          function (t) {
            r.Message.setProto3IntField(this, 2, t);
          }),
        (proto.protocol.VoteWitnessContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.VoteWitnessContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.VoteWitnessContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.VoteWitnessContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.VoteWitnessContract.prototype.getVotesList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.protocol.VoteWitnessContract.Vote,
              2,
            );
          }),
        (proto.protocol.VoteWitnessContract.prototype.setVotesList = function (
          t,
        ) {
          r.Message.setRepeatedWrapperField(this, 2, t);
        }),
        (proto.protocol.VoteWitnessContract.prototype.addVotes = function (
          t,
          e,
        ) {
          return r.Message.addToRepeatedWrapperField(
            this,
            2,
            t,
            proto.protocol.VoteWitnessContract.Vote,
            e,
          );
        }),
        (proto.protocol.VoteWitnessContract.prototype.clearVotesList =
          function () {
            this.setVotesList([]);
          }),
        (proto.protocol.VoteWitnessContract.prototype.getSupport = function () {
          return r.Message.getFieldWithDefault(this, 3, !1);
        }),
        (proto.protocol.VoteWitnessContract.prototype.setSupport = function (
          t,
        ) {
          r.Message.setProto3BooleanField(this, 3, t);
        }),
        (proto.protocol.WitnessCreateContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.WitnessCreateContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.WitnessCreateContract.displayName =
            "proto.protocol.WitnessCreateContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.WitnessCreateContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.WitnessCreateContract.toObject(t, this);
          }),
          (proto.protocol.WitnessCreateContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              url: e.getUrl_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.WitnessCreateContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.WitnessCreateContract();
          return proto.protocol.WitnessCreateContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.WitnessCreateContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setUrl(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.WitnessCreateContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.WitnessCreateContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.WitnessCreateContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getUrl_asU8()),
              o.length > 0 && e.writeBytes(2, o));
          }),
        (proto.protocol.WitnessCreateContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.WitnessCreateContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.WitnessCreateContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.WitnessCreateContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.WitnessCreateContract.prototype.getUrl = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.WitnessCreateContract.prototype.getUrl_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getUrl());
          }),
        (proto.protocol.WitnessCreateContract.prototype.getUrl_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getUrl());
          }),
        (proto.protocol.WitnessCreateContract.prototype.setUrl = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.WitnessUpdateContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.WitnessUpdateContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.WitnessUpdateContract.displayName =
            "proto.protocol.WitnessUpdateContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.WitnessUpdateContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.WitnessUpdateContract.toObject(t, this);
          }),
          (proto.protocol.WitnessUpdateContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              updateUrl: e.getUpdateUrl_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.WitnessUpdateContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.WitnessUpdateContract();
          return proto.protocol.WitnessUpdateContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.WitnessUpdateContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 12:
                  r = e.readBytes();
                  t.setUpdateUrl(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.WitnessUpdateContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.WitnessUpdateContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.WitnessUpdateContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getUpdateUrl_asU8()),
              o.length > 0 && e.writeBytes(12, o));
          }),
        (proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.WitnessUpdateContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.WitnessUpdateContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl =
          function () {
            return r.Message.getFieldWithDefault(this, 12, "");
          }),
        (proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getUpdateUrl());
          }),
        (proto.protocol.WitnessUpdateContract.prototype.getUpdateUrl_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getUpdateUrl());
          }),
        (proto.protocol.WitnessUpdateContract.prototype.setUpdateUrl =
          function (t) {
            r.Message.setProto3BytesField(this, 12, t);
          }),
        (proto.protocol.AssetIssueContract = function (t) {
          r.Message.initialize(
            this,
            t,
            0,
            -1,
            proto.protocol.AssetIssueContract.repeatedFields_,
            null,
          );
        }),
        s.inherits(proto.protocol.AssetIssueContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.AssetIssueContract.displayName =
            "proto.protocol.AssetIssueContract"),
        (proto.protocol.AssetIssueContract.repeatedFields_ = [5]),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.AssetIssueContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.AssetIssueContract.toObject(t, this);
          }),
          (proto.protocol.AssetIssueContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              name: e.getName_asB64(),
              abbr: e.getAbbr_asB64(),
              totalSupply: r.Message.getFieldWithDefault(e, 4, 0),
              frozenSupplyList: r.Message.toObjectList(
                e.getFrozenSupplyList(),
                proto.protocol.AssetIssueContract.FrozenSupply.toObject,
                t,
              ),
              trxNum: r.Message.getFieldWithDefault(e, 6, 0),
              num: r.Message.getFieldWithDefault(e, 8, 0),
              startTime: r.Message.getFieldWithDefault(e, 9, 0),
              endTime: r.Message.getFieldWithDefault(e, 10, 0),
              voteScore: r.Message.getFieldWithDefault(e, 16, 0),
              description: e.getDescription_asB64(),
              url: e.getUrl_asB64(),
              freeAssetNetLimit: r.Message.getFieldWithDefault(e, 22, 0),
              publicFreeAssetNetLimit: r.Message.getFieldWithDefault(e, 23, 0),
              publicFreeAssetNetUsage: r.Message.getFieldWithDefault(e, 24, 0),
              publicLatestFreeNetTime: r.Message.getFieldWithDefault(e, 25, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.AssetIssueContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.AssetIssueContract();
          return proto.protocol.AssetIssueContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.AssetIssueContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setName(r);
                  break;
                case 3:
                  r = e.readBytes();
                  t.setAbbr(r);
                  break;
                case 4:
                  r = e.readInt64();
                  t.setTotalSupply(r);
                  break;
                case 5:
                  r = new proto.protocol.AssetIssueContract.FrozenSupply();
                  (e.readMessage(
                    r,
                    proto.protocol.AssetIssueContract.FrozenSupply
                      .deserializeBinaryFromReader,
                  ),
                    t.addFrozenSupply(r));
                  break;
                case 6:
                  r = e.readInt32();
                  t.setTrxNum(r);
                  break;
                case 8:
                  r = e.readInt32();
                  t.setNum(r);
                  break;
                case 9:
                  r = e.readInt64();
                  t.setStartTime(r);
                  break;
                case 10:
                  r = e.readInt64();
                  t.setEndTime(r);
                  break;
                case 16:
                  r = e.readInt32();
                  t.setVoteScore(r);
                  break;
                case 20:
                  r = e.readBytes();
                  t.setDescription(r);
                  break;
                case 21:
                  r = e.readBytes();
                  t.setUrl(r);
                  break;
                case 22:
                  r = e.readInt64();
                  t.setFreeAssetNetLimit(r);
                  break;
                case 23:
                  r = e.readInt64();
                  t.setPublicFreeAssetNetLimit(r);
                  break;
                case 24:
                  r = e.readInt64();
                  t.setPublicFreeAssetNetUsage(r);
                  break;
                case 25:
                  r = e.readInt64();
                  t.setPublicLatestFreeNetTime(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.AssetIssueContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.AssetIssueContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.AssetIssueContract.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getOwnerAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getName_asU8()),
            o.length > 0 && e.writeBytes(2, o),
            (o = t.getAbbr_asU8()),
            o.length > 0 && e.writeBytes(3, o),
            (o = t.getTotalSupply()),
            0 !== o && e.writeInt64(4, o),
            (o = t.getFrozenSupplyList()),
            o.length > 0 &&
              e.writeRepeatedMessage(
                5,
                o,
                proto.protocol.AssetIssueContract.FrozenSupply
                  .serializeBinaryToWriter,
              ),
            (o = t.getTrxNum()),
            0 !== o && e.writeInt32(6, o),
            (o = t.getNum()),
            0 !== o && e.writeInt32(8, o),
            (o = t.getStartTime()),
            0 !== o && e.writeInt64(9, o),
            (o = t.getEndTime()),
            0 !== o && e.writeInt64(10, o),
            (o = t.getVoteScore()),
            0 !== o && e.writeInt32(16, o),
            (o = t.getDescription_asU8()),
            o.length > 0 && e.writeBytes(20, o),
            (o = t.getUrl_asU8()),
            o.length > 0 && e.writeBytes(21, o),
            (o = t.getFreeAssetNetLimit()),
            0 !== o && e.writeInt64(22, o),
            (o = t.getPublicFreeAssetNetLimit()),
            0 !== o && e.writeInt64(23, o),
            (o = t.getPublicFreeAssetNetUsage()),
            0 !== o && e.writeInt64(24, o),
            (o = t.getPublicLatestFreeNetTime()),
            0 !== o && e.writeInt64(25, o));
        }),
        (proto.protocol.AssetIssueContract.FrozenSupply = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.AssetIssueContract.FrozenSupply, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.AssetIssueContract.FrozenSupply.displayName =
            "proto.protocol.AssetIssueContract.FrozenSupply"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.AssetIssueContract.FrozenSupply.prototype.toObject =
            function (t) {
              return proto.protocol.AssetIssueContract.FrozenSupply.toObject(
                t,
                this,
              );
            }),
          (proto.protocol.AssetIssueContract.FrozenSupply.toObject = function (
            t,
            e,
          ) {
            var o = {
              frozenAmount: r.Message.getFieldWithDefault(e, 1, 0),
              frozenDays: r.Message.getFieldWithDefault(e, 2, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinary =
          function (t) {
            var e = new r.BinaryReader(t),
              o = new proto.protocol.AssetIssueContract.FrozenSupply();
            return proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader(
              o,
              e,
            );
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readInt64();
                  t.setFrozenAmount(r);
                  break;
                case 2:
                  r = e.readInt64();
                  t.setFrozenDays(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getFrozenAmount()),
              0 !== o && e.writeInt64(1, o),
              (o = t.getFrozenDays()),
              0 !== o && e.writeInt64(2, o));
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.prototype.getFrozenAmount =
          function () {
            return r.Message.getFieldWithDefault(this, 1, 0);
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.prototype.setFrozenAmount =
          function (t) {
            r.Message.setProto3IntField(this, 1, t);
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.prototype.getFrozenDays =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.protocol.AssetIssueContract.FrozenSupply.prototype.setFrozenDays =
          function (t) {
            r.Message.setProto3IntField(this, 2, t);
          }),
        (proto.protocol.AssetIssueContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.AssetIssueContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.AssetIssueContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.AssetIssueContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.AssetIssueContract.prototype.getName = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.AssetIssueContract.prototype.getName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getName());
          }),
        (proto.protocol.AssetIssueContract.prototype.getName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getName());
          }),
        (proto.protocol.AssetIssueContract.prototype.setName = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getAbbr = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.AssetIssueContract.prototype.getAbbr_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getAbbr());
          }),
        (proto.protocol.AssetIssueContract.prototype.getAbbr_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getAbbr());
          }),
        (proto.protocol.AssetIssueContract.prototype.setAbbr = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getTotalSupply =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setTotalSupply = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 4, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getFrozenSupplyList =
          function () {
            return r.Message.getRepeatedWrapperField(
              this,
              proto.protocol.AssetIssueContract.FrozenSupply,
              5,
            );
          }),
        (proto.protocol.AssetIssueContract.prototype.setFrozenSupplyList =
          function (t) {
            r.Message.setRepeatedWrapperField(this, 5, t);
          }),
        (proto.protocol.AssetIssueContract.prototype.addFrozenSupply =
          function (t, e) {
            return r.Message.addToRepeatedWrapperField(
              this,
              5,
              t,
              proto.protocol.AssetIssueContract.FrozenSupply,
              e,
            );
          }),
        (proto.protocol.AssetIssueContract.prototype.clearFrozenSupplyList =
          function () {
            this.setFrozenSupplyList([]);
          }),
        (proto.protocol.AssetIssueContract.prototype.getTrxNum = function () {
          return r.Message.getFieldWithDefault(this, 6, 0);
        }),
        (proto.protocol.AssetIssueContract.prototype.setTrxNum = function (t) {
          r.Message.setProto3IntField(this, 6, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getNum = function () {
          return r.Message.getFieldWithDefault(this, 8, 0);
        }),
        (proto.protocol.AssetIssueContract.prototype.setNum = function (t) {
          r.Message.setProto3IntField(this, 8, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getStartTime =
          function () {
            return r.Message.getFieldWithDefault(this, 9, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setStartTime = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 9, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getEndTime = function () {
          return r.Message.getFieldWithDefault(this, 10, 0);
        }),
        (proto.protocol.AssetIssueContract.prototype.setEndTime = function (t) {
          r.Message.setProto3IntField(this, 10, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getVoteScore =
          function () {
            return r.Message.getFieldWithDefault(this, 16, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setVoteScore = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 16, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 20, "");
          }),
        (proto.protocol.AssetIssueContract.prototype.getDescription_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getDescription());
          }),
        (proto.protocol.AssetIssueContract.prototype.getDescription_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getDescription());
          }),
        (proto.protocol.AssetIssueContract.prototype.setDescription = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 20, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getUrl = function () {
          return r.Message.getFieldWithDefault(this, 21, "");
        }),
        (proto.protocol.AssetIssueContract.prototype.getUrl_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getUrl());
          }),
        (proto.protocol.AssetIssueContract.prototype.getUrl_asU8 = function () {
          return r.Message.bytesAsU8(this.getUrl());
        }),
        (proto.protocol.AssetIssueContract.prototype.setUrl = function (t) {
          r.Message.setProto3BytesField(this, 21, t);
        }),
        (proto.protocol.AssetIssueContract.prototype.getFreeAssetNetLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 22, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setFreeAssetNetLimit =
          function (t) {
            r.Message.setProto3IntField(this, 22, t);
          }),
        (proto.protocol.AssetIssueContract.prototype.getPublicFreeAssetNetLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 23, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setPublicFreeAssetNetLimit =
          function (t) {
            r.Message.setProto3IntField(this, 23, t);
          }),
        (proto.protocol.AssetIssueContract.prototype.getPublicFreeAssetNetUsage =
          function () {
            return r.Message.getFieldWithDefault(this, 24, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setPublicFreeAssetNetUsage =
          function (t) {
            r.Message.setProto3IntField(this, 24, t);
          }),
        (proto.protocol.AssetIssueContract.prototype.getPublicLatestFreeNetTime =
          function () {
            return r.Message.getFieldWithDefault(this, 25, 0);
          }),
        (proto.protocol.AssetIssueContract.prototype.setPublicLatestFreeNetTime =
          function (t) {
            r.Message.setProto3IntField(this, 25, t);
          }),
        (proto.protocol.ParticipateAssetIssueContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.ParticipateAssetIssueContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.ParticipateAssetIssueContract.displayName =
            "proto.protocol.ParticipateAssetIssueContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.ParticipateAssetIssueContract.prototype.toObject =
            function (t) {
              return proto.protocol.ParticipateAssetIssueContract.toObject(
                t,
                this,
              );
            }),
          (proto.protocol.ParticipateAssetIssueContract.toObject = function (
            t,
            e,
          ) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              toAddress: e.getToAddress_asB64(),
              assetName: e.getAssetName_asB64(),
              amount: r.Message.getFieldWithDefault(e, 4, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.ParticipateAssetIssueContract.deserializeBinary =
          function (t) {
            var e = new r.BinaryReader(t),
              o = new proto.protocol.ParticipateAssetIssueContract();
            return proto.protocol.ParticipateAssetIssueContract.deserializeBinaryFromReader(
              o,
              e,
            );
          }),
        (proto.protocol.ParticipateAssetIssueContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setToAddress(r);
                  break;
                case 3:
                  r = e.readBytes();
                  t.setAssetName(r);
                  break;
                case 4:
                  r = e.readInt64();
                  t.setAmount(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.ParticipateAssetIssueContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.ParticipateAssetIssueContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getToAddress_asU8()),
              o.length > 0 && e.writeBytes(2, o),
              (o = t.getAssetName_asU8()),
              o.length > 0 && e.writeBytes(3, o),
              (o = t.getAmount()),
              0 !== o && e.writeInt64(4, o));
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getToAddress());
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getToAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getToAddress());
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.setToAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 2, t);
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName =
          function () {
            return r.Message.getFieldWithDefault(this, 3, "");
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getAssetName());
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getAssetName_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getAssetName());
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.setAssetName =
          function (t) {
            r.Message.setProto3BytesField(this, 3, t);
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.getAmount =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.protocol.ParticipateAssetIssueContract.prototype.setAmount =
          function (t) {
            r.Message.setProto3IntField(this, 4, t);
          }),
        (proto.protocol.DeployContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.DeployContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.DeployContract.displayName =
            "proto.protocol.DeployContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.DeployContract.prototype.toObject = function (t) {
            return proto.protocol.DeployContract.toObject(t, this);
          }),
          (proto.protocol.DeployContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              script: e.getScript_asB64(),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.DeployContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.DeployContract();
          return proto.protocol.DeployContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.DeployContract.deserializeBinaryFromReader = function (
          t,
          e,
        ) {
          while (e.nextField()) {
            if (e.isEndGroup()) break;
            var o = e.getFieldNumber();
            switch (o) {
              case 1:
                var r = e.readBytes();
                t.setOwnerAddress(r);
                break;
              case 2:
                r = e.readBytes();
                t.setScript(r);
                break;
              default:
                e.skipField();
                break;
            }
          }
          return t;
        }),
        (proto.protocol.DeployContract.prototype.serializeBinary = function () {
          var t = new r.BinaryWriter();
          return (
            proto.protocol.DeployContract.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
          );
        }),
        (proto.protocol.DeployContract.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getOwnerAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getScript_asU8()),
            o.length > 0 && e.writeBytes(2, o));
        }),
        (proto.protocol.DeployContract.prototype.getOwnerAddress = function () {
          return r.Message.getFieldWithDefault(this, 1, "");
        }),
        (proto.protocol.DeployContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.DeployContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.DeployContract.prototype.setOwnerAddress = function (
          t,
        ) {
          r.Message.setProto3BytesField(this, 1, t);
        }),
        (proto.protocol.DeployContract.prototype.getScript = function () {
          return r.Message.getFieldWithDefault(this, 2, "");
        }),
        (proto.protocol.DeployContract.prototype.getScript_asB64 = function () {
          return r.Message.bytesAsB64(this.getScript());
        }),
        (proto.protocol.DeployContract.prototype.getScript_asU8 = function () {
          return r.Message.bytesAsU8(this.getScript());
        }),
        (proto.protocol.DeployContract.prototype.setScript = function (t) {
          r.Message.setProto3BytesField(this, 2, t);
        }),
        (proto.protocol.FreezeBalanceContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.FreezeBalanceContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.FreezeBalanceContract.displayName =
            "proto.protocol.FreezeBalanceContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.FreezeBalanceContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.FreezeBalanceContract.toObject(t, this);
          }),
          (proto.protocol.FreezeBalanceContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              frozenBalance: r.Message.getFieldWithDefault(e, 2, 0),
              frozenDuration: r.Message.getFieldWithDefault(e, 3, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.FreezeBalanceContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.FreezeBalanceContract();
          return proto.protocol.FreezeBalanceContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.FreezeBalanceContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readInt64();
                  t.setFrozenBalance(r);
                  break;
                case 3:
                  r = e.readInt64();
                  t.setFrozenDuration(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.FreezeBalanceContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.FreezeBalanceContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.FreezeBalanceContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o),
              (o = t.getFrozenBalance()),
              0 !== o && e.writeInt64(2, o),
              (o = t.getFrozenDuration()),
              0 !== o && e.writeInt64(3, o));
          }),
        (proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.FreezeBalanceContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.FreezeBalanceContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.FreezeBalanceContract.prototype.getFrozenBalance =
          function () {
            return r.Message.getFieldWithDefault(this, 2, 0);
          }),
        (proto.protocol.FreezeBalanceContract.prototype.setFrozenBalance =
          function (t) {
            r.Message.setProto3IntField(this, 2, t);
          }),
        (proto.protocol.FreezeBalanceContract.prototype.getFrozenDuration =
          function () {
            return r.Message.getFieldWithDefault(this, 3, 0);
          }),
        (proto.protocol.FreezeBalanceContract.prototype.setFrozenDuration =
          function (t) {
            r.Message.setProto3IntField(this, 3, t);
          }),
        (proto.protocol.UnfreezeBalanceContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.UnfreezeBalanceContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.UnfreezeBalanceContract.displayName =
            "proto.protocol.UnfreezeBalanceContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.UnfreezeBalanceContract.prototype.toObject =
            function (t) {
              return proto.protocol.UnfreezeBalanceContract.toObject(t, this);
            }),
          (proto.protocol.UnfreezeBalanceContract.toObject = function (t, e) {
            var o = { ownerAddress: e.getOwnerAddress_asB64() };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.UnfreezeBalanceContract.deserializeBinary = function (
          t,
        ) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.UnfreezeBalanceContract();
          return proto.protocol.UnfreezeBalanceContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.UnfreezeBalanceContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.UnfreezeBalanceContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.UnfreezeBalanceContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.UnfreezeBalanceContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o));
          }),
        (proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.UnfreezeBalanceContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.UnfreezeBalanceContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.UnfreezeAssetContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.UnfreezeAssetContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.UnfreezeAssetContract.displayName =
            "proto.protocol.UnfreezeAssetContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.UnfreezeAssetContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.UnfreezeAssetContract.toObject(t, this);
          }),
          (proto.protocol.UnfreezeAssetContract.toObject = function (t, e) {
            var o = { ownerAddress: e.getOwnerAddress_asB64() };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.UnfreezeAssetContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.UnfreezeAssetContract();
          return proto.protocol.UnfreezeAssetContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.UnfreezeAssetContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.UnfreezeAssetContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.UnfreezeAssetContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.UnfreezeAssetContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o));
          }),
        (proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.UnfreezeAssetContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.UnfreezeAssetContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.WithdrawBalanceContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.WithdrawBalanceContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.WithdrawBalanceContract.displayName =
            "proto.protocol.WithdrawBalanceContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.WithdrawBalanceContract.prototype.toObject =
            function (t) {
              return proto.protocol.WithdrawBalanceContract.toObject(t, this);
            }),
          (proto.protocol.WithdrawBalanceContract.toObject = function (t, e) {
            var o = { ownerAddress: e.getOwnerAddress_asB64() };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.WithdrawBalanceContract.deserializeBinary = function (
          t,
        ) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.WithdrawBalanceContract();
          return proto.protocol.WithdrawBalanceContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.WithdrawBalanceContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.WithdrawBalanceContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.WithdrawBalanceContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.WithdrawBalanceContract.serializeBinaryToWriter =
          function (t, e) {
            var o = void 0;
            ((o = t.getOwnerAddress_asU8()),
              o.length > 0 && e.writeBytes(1, o));
          }),
        (proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.WithdrawBalanceContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.WithdrawBalanceContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.UpdateAssetContract = function (t) {
          r.Message.initialize(this, t, 0, -1, null, null);
        }),
        s.inherits(proto.protocol.UpdateAssetContract, r.Message),
        s.DEBUG &&
          !COMPILED &&
          (proto.protocol.UpdateAssetContract.displayName =
            "proto.protocol.UpdateAssetContract"),
        r.Message.GENERATE_TO_OBJECT &&
          ((proto.protocol.UpdateAssetContract.prototype.toObject = function (
            t,
          ) {
            return proto.protocol.UpdateAssetContract.toObject(t, this);
          }),
          (proto.protocol.UpdateAssetContract.toObject = function (t, e) {
            var o = {
              ownerAddress: e.getOwnerAddress_asB64(),
              description: e.getDescription_asB64(),
              url: e.getUrl_asB64(),
              newLimit: r.Message.getFieldWithDefault(e, 4, 0),
              newPublicLimit: r.Message.getFieldWithDefault(e, 5, 0),
            };
            return (t && (o.$jspbMessageInstance = e), o);
          })),
        (proto.protocol.UpdateAssetContract.deserializeBinary = function (t) {
          var e = new r.BinaryReader(t),
            o = new proto.protocol.UpdateAssetContract();
          return proto.protocol.UpdateAssetContract.deserializeBinaryFromReader(
            o,
            e,
          );
        }),
        (proto.protocol.UpdateAssetContract.deserializeBinaryFromReader =
          function (t, e) {
            while (e.nextField()) {
              if (e.isEndGroup()) break;
              var o = e.getFieldNumber();
              switch (o) {
                case 1:
                  var r = e.readBytes();
                  t.setOwnerAddress(r);
                  break;
                case 2:
                  r = e.readBytes();
                  t.setDescription(r);
                  break;
                case 3:
                  r = e.readBytes();
                  t.setUrl(r);
                  break;
                case 4:
                  r = e.readInt64();
                  t.setNewLimit(r);
                  break;
                case 5:
                  r = e.readInt64();
                  t.setNewPublicLimit(r);
                  break;
                default:
                  e.skipField();
                  break;
              }
            }
            return t;
          }),
        (proto.protocol.UpdateAssetContract.prototype.serializeBinary =
          function () {
            var t = new r.BinaryWriter();
            return (
              proto.protocol.UpdateAssetContract.serializeBinaryToWriter(
                this,
                t,
              ),
              t.getResultBuffer()
            );
          }),
        (proto.protocol.UpdateAssetContract.serializeBinaryToWriter = function (
          t,
          e,
        ) {
          var o = void 0;
          ((o = t.getOwnerAddress_asU8()),
            o.length > 0 && e.writeBytes(1, o),
            (o = t.getDescription_asU8()),
            o.length > 0 && e.writeBytes(2, o),
            (o = t.getUrl_asU8()),
            o.length > 0 && e.writeBytes(3, o),
            (o = t.getNewLimit()),
            0 !== o && e.writeInt64(4, o),
            (o = t.getNewPublicLimit()),
            0 !== o && e.writeInt64(5, o));
        }),
        (proto.protocol.UpdateAssetContract.prototype.getOwnerAddress =
          function () {
            return r.Message.getFieldWithDefault(this, 1, "");
          }),
        (proto.protocol.UpdateAssetContract.prototype.getOwnerAddress_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getOwnerAddress());
          }),
        (proto.protocol.UpdateAssetContract.prototype.getOwnerAddress_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getOwnerAddress());
          }),
        (proto.protocol.UpdateAssetContract.prototype.setOwnerAddress =
          function (t) {
            r.Message.setProto3BytesField(this, 1, t);
          }),
        (proto.protocol.UpdateAssetContract.prototype.getDescription =
          function () {
            return r.Message.getFieldWithDefault(this, 2, "");
          }),
        (proto.protocol.UpdateAssetContract.prototype.getDescription_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getDescription());
          }),
        (proto.protocol.UpdateAssetContract.prototype.getDescription_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getDescription());
          }),
        (proto.protocol.UpdateAssetContract.prototype.setDescription =
          function (t) {
            r.Message.setProto3BytesField(this, 2, t);
          }),
        (proto.protocol.UpdateAssetContract.prototype.getUrl = function () {
          return r.Message.getFieldWithDefault(this, 3, "");
        }),
        (proto.protocol.UpdateAssetContract.prototype.getUrl_asB64 =
          function () {
            return r.Message.bytesAsB64(this.getUrl());
          }),
        (proto.protocol.UpdateAssetContract.prototype.getUrl_asU8 =
          function () {
            return r.Message.bytesAsU8(this.getUrl());
          }),
        (proto.protocol.UpdateAssetContract.prototype.setUrl = function (t) {
          r.Message.setProto3BytesField(this, 3, t);
        }),
        (proto.protocol.UpdateAssetContract.prototype.getNewLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 4, 0);
          }),
        (proto.protocol.UpdateAssetContract.prototype.setNewLimit = function (
          t,
        ) {
          r.Message.setProto3IntField(this, 4, t);
        }),
        (proto.protocol.UpdateAssetContract.prototype.getNewPublicLimit =
          function () {
            return r.Message.getFieldWithDefault(this, 5, 0);
          }),
        (proto.protocol.UpdateAssetContract.prototype.setNewPublicLimit =
          function (t) {
            r.Message.setProto3IntField(this, 5, t);
          }),
        s.object.extend(e, proto.protocol));
    },
    7243: function (t, e, o) {
      const { signTransaction: r } = o(4927);
      class PrivateKeySigner {
        constructor(t) {
          this.privateKey = t;
        }
        async signTransaction(t) {
          return r(this.privateKey, t);
        }
      }
      t.exports = PrivateKeySigner;
    },
  },
]);
