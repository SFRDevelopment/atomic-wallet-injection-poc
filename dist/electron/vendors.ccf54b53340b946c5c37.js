(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [318, 316, 317],
  {
    3152: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompactBitArray = t.MultiSignature = t.protobufPackage = void 0));
        const s = r(o(2754)),
          i = r(o(2755));
        t.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const a = {};
        t.MultiSignature = {
          encode(e, t = i.default.Writer.create()) {
            for (const o of e.signatures) t.uint32(10).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, a);
            s.signatures = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(u(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.signatures
                ? (t.signatures = e.signatures.map((e) =>
                    p(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.signatures = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, a);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(o);
            return t;
          },
        };
        const n = { extraBitsStored: 0 };
        t.CompactBitArray = {
          encode(e, t = i.default.Writer.create()) {
            return (
              0 !== e.extraBitsStored && t.uint32(8).uint32(e.extraBitsStored),
              0 !== e.elems.length && t.uint32(18).bytes(e.elems),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, n);
            s.elems = new Uint8Array();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.extraBitsStored = o.uint32();
                  break;
                case 2:
                  s.elems = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, n);
            return (
              (t.elems = new Uint8Array()),
              void 0 !== e.extraBitsStored && null !== e.extraBitsStored
                ? (t.extraBitsStored = Number(e.extraBitsStored))
                : (t.extraBitsStored = 0),
              void 0 !== e.elems && null !== e.elems && (t.elems = u(e.elems)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.extraBitsStored &&
                (t.extraBitsStored = e.extraBitsStored),
              void 0 !== e.elems &&
                (t.elems = p(void 0 !== e.elems ? e.elems : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = Object.assign({}, n);
            return (
              (r.extraBitsStored =
                null !== (t = e.extraBitsStored) && void 0 !== t ? t : 0),
              (r.elems =
                null !== (o = e.elems) && void 0 !== o ? o : new Uint8Array()),
              r
            );
          },
        };
        var d = (() => {
          if ("undefined" !== typeof d) return d;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const l =
          d.atob || ((e) => d.Buffer.from(e, "base64").toString("binary"));
        function u(e) {
          const t = l(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const c =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function p(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return c(t.join(""));
        }
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure());
      }).call(this, o(13));
    },
    3324: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.TallyParams =
            t.VotingParams =
            t.DepositParams =
            t.Vote =
            t.TallyResult =
            t.Proposal =
            t.Deposit =
            t.TextProposal =
            t.proposalStatusToJSON =
            t.proposalStatusFromJSON =
            t.ProposalStatus =
            t.voteOptionToJSON =
            t.voteOptionFromJSON =
            t.VoteOption =
            t.protobufPackage =
              void 0));
        const s = r(o(2754)),
          i = r(o(2755)),
          a = o(2781),
          n = o(3325),
          d = o(3064),
          l = o(2801);
        var u, c;
        function p(e) {
          switch (e) {
            case 0:
            case "VOTE_OPTION_UNSPECIFIED":
              return u.VOTE_OPTION_UNSPECIFIED;
            case 1:
            case "VOTE_OPTION_YES":
              return u.VOTE_OPTION_YES;
            case 2:
            case "VOTE_OPTION_ABSTAIN":
              return u.VOTE_OPTION_ABSTAIN;
            case 3:
            case "VOTE_OPTION_NO":
              return u.VOTE_OPTION_NO;
            case 4:
            case "VOTE_OPTION_NO_WITH_VETO":
              return u.VOTE_OPTION_NO_WITH_VETO;
            case -1:
            case "UNRECOGNIZED":
            default:
              return u.UNRECOGNIZED;
          }
        }
        function f(e) {
          switch (e) {
            case u.VOTE_OPTION_UNSPECIFIED:
              return "VOTE_OPTION_UNSPECIFIED";
            case u.VOTE_OPTION_YES:
              return "VOTE_OPTION_YES";
            case u.VOTE_OPTION_ABSTAIN:
              return "VOTE_OPTION_ABSTAIN";
            case u.VOTE_OPTION_NO:
              return "VOTE_OPTION_NO";
            case u.VOTE_OPTION_NO_WITH_VETO:
              return "VOTE_OPTION_NO_WITH_VETO";
            default:
              return "UNKNOWN";
          }
        }
        function v(e) {
          switch (e) {
            case 0:
            case "PROPOSAL_STATUS_UNSPECIFIED":
              return c.PROPOSAL_STATUS_UNSPECIFIED;
            case 1:
            case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
              return c.PROPOSAL_STATUS_DEPOSIT_PERIOD;
            case 2:
            case "PROPOSAL_STATUS_VOTING_PERIOD":
              return c.PROPOSAL_STATUS_VOTING_PERIOD;
            case 3:
            case "PROPOSAL_STATUS_PASSED":
              return c.PROPOSAL_STATUS_PASSED;
            case 4:
            case "PROPOSAL_STATUS_REJECTED":
              return c.PROPOSAL_STATUS_REJECTED;
            case 5:
            case "PROPOSAL_STATUS_FAILED":
              return c.PROPOSAL_STATUS_FAILED;
            case -1:
            case "UNRECOGNIZED":
            default:
              return c.UNRECOGNIZED;
          }
        }
        function g(e) {
          switch (e) {
            case c.PROPOSAL_STATUS_UNSPECIFIED:
              return "PROPOSAL_STATUS_UNSPECIFIED";
            case c.PROPOSAL_STATUS_DEPOSIT_PERIOD:
              return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
            case c.PROPOSAL_STATUS_VOTING_PERIOD:
              return "PROPOSAL_STATUS_VOTING_PERIOD";
            case c.PROPOSAL_STATUS_PASSED:
              return "PROPOSAL_STATUS_PASSED";
            case c.PROPOSAL_STATUS_REJECTED:
              return "PROPOSAL_STATUS_REJECTED";
            case c.PROPOSAL_STATUS_FAILED:
              return "PROPOSAL_STATUS_FAILED";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "cosmos.gov.v1beta1"),
          (function (e) {
            ((e[(e["VOTE_OPTION_UNSPECIFIED"] = 0)] =
              "VOTE_OPTION_UNSPECIFIED"),
              (e[(e["VOTE_OPTION_YES"] = 1)] = "VOTE_OPTION_YES"),
              (e[(e["VOTE_OPTION_ABSTAIN"] = 2)] = "VOTE_OPTION_ABSTAIN"),
              (e[(e["VOTE_OPTION_NO"] = 3)] = "VOTE_OPTION_NO"),
              (e[(e["VOTE_OPTION_NO_WITH_VETO"] = 4)] =
                "VOTE_OPTION_NO_WITH_VETO"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((u = t.VoteOption || (t.VoteOption = {}))),
          (t.voteOptionFromJSON = p),
          (t.voteOptionToJSON = f),
          (function (e) {
            ((e[(e["PROPOSAL_STATUS_UNSPECIFIED"] = 0)] =
              "PROPOSAL_STATUS_UNSPECIFIED"),
              (e[(e["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1)] =
                "PROPOSAL_STATUS_DEPOSIT_PERIOD"),
              (e[(e["PROPOSAL_STATUS_VOTING_PERIOD"] = 2)] =
                "PROPOSAL_STATUS_VOTING_PERIOD"),
              (e[(e["PROPOSAL_STATUS_PASSED"] = 3)] = "PROPOSAL_STATUS_PASSED"),
              (e[(e["PROPOSAL_STATUS_REJECTED"] = 4)] =
                "PROPOSAL_STATUS_REJECTED"),
              (e[(e["PROPOSAL_STATUS_FAILED"] = 5)] = "PROPOSAL_STATUS_FAILED"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((c = t.ProposalStatus || (t.ProposalStatus = {}))),
          (t.proposalStatusFromJSON = v),
          (t.proposalStatusToJSON = g));
        const m = { title: "", description: "" };
        t.TextProposal = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.title && t.uint32(10).string(e.title),
              "" !== e.description && t.uint32(18).string(e.description),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, m);
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.title = o.string();
                  break;
                case 2:
                  s.description = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = String(e.title))
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = String(e.description))
                : (t.description = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.title && (t.title = e.title),
              void 0 !== e.description && (t.description = e.description),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = Object.assign({}, m);
            return (
              (r.title = null !== (t = e.title) && void 0 !== t ? t : ""),
              (r.description =
                null !== (o = e.description) && void 0 !== o ? o : ""),
              r
            );
          },
        };
        const O = { proposalId: s.default.UZERO, depositor: "" };
        t.Deposit = {
          encode(e, t) {
            (void 0 === t && (t = i.default.Writer.create()),
              e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
              "" !== e.depositor && t.uint32(18).string(e.depositor));
            for (const o of e.amount)
              l.Coin.encode(o, t.uint32(26).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, O);
            s.amount = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.proposalId = o.uint64();
                  break;
                case 2:
                  s.depositor = o.string();
                  break;
                case 3:
                  s.amount.push(l.Coin.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, O);
            if (
              ((t.amount = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (t.proposalId = s.default.fromString(e.proposalId))
                : (t.proposalId = s.default.UZERO),
              void 0 !== e.depositor && null !== e.depositor
                ? (t.depositor = String(e.depositor))
                : (t.depositor = ""),
              void 0 !== e.amount && null !== e.amount)
            )
              for (const o of e.amount) t.amount.push(l.Coin.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.proposalId &&
                (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
              void 0 !== e.depositor && (t.depositor = e.depositor),
              e.amount
                ? (t.amount = e.amount.map((e) =>
                    e ? l.Coin.toJSON(e) : void 0,
                  ))
                : (t.amount = []),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, O);
            if (
              (void 0 !== e.proposalId && null !== e.proposalId
                ? (o.proposalId = e.proposalId)
                : (o.proposalId = s.default.UZERO),
              (o.depositor =
                null !== (t = e.depositor) && void 0 !== t ? t : ""),
              (o.amount = []),
              void 0 !== e.amount && null !== e.amount)
            )
              for (const r of e.amount) o.amount.push(l.Coin.fromPartial(r));
            return o;
          },
        };
        const h = { proposalId: s.default.UZERO, status: 0 };
        t.Proposal = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId),
              void 0 !== e.content &&
                a.Any.encode(e.content, o.uint32(18).fork()).ldelim(),
              0 !== e.status && o.uint32(24).int32(e.status),
              void 0 !== e.finalTallyResult &&
                t.TallyResult.encode(
                  e.finalTallyResult,
                  o.uint32(34).fork(),
                ).ldelim(),
              void 0 !== e.submitTime &&
                d.Timestamp.encode(
                  I(e.submitTime),
                  o.uint32(42).fork(),
                ).ldelim(),
              void 0 !== e.depositEndTime &&
                d.Timestamp.encode(
                  I(e.depositEndTime),
                  o.uint32(50).fork(),
                ).ldelim());
            for (const t of e.totalDeposit)
              l.Coin.encode(t, o.uint32(58).fork()).ldelim();
            return (
              void 0 !== e.votingStartTime &&
                d.Timestamp.encode(
                  I(e.votingStartTime),
                  o.uint32(66).fork(),
                ).ldelim(),
              void 0 !== e.votingEndTime &&
                d.Timestamp.encode(
                  I(e.votingEndTime),
                  o.uint32(74).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const r =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let s = void 0 === o ? r.len : r.pos + o;
            const n = Object.assign({}, h);
            n.totalDeposit = [];
            while (r.pos < s) {
              const e = r.uint32();
              switch (e >>> 3) {
                case 1:
                  n.proposalId = r.uint64();
                  break;
                case 2:
                  n.content = a.Any.decode(r, r.uint32());
                  break;
                case 3:
                  n.status = r.int32();
                  break;
                case 4:
                  n.finalTallyResult = t.TallyResult.decode(r, r.uint32());
                  break;
                case 5:
                  n.submitTime = D(d.Timestamp.decode(r, r.uint32()));
                  break;
                case 6:
                  n.depositEndTime = D(d.Timestamp.decode(r, r.uint32()));
                  break;
                case 7:
                  n.totalDeposit.push(l.Coin.decode(r, r.uint32()));
                  break;
                case 8:
                  n.votingStartTime = D(d.Timestamp.decode(r, r.uint32()));
                  break;
                case 9:
                  n.votingEndTime = D(d.Timestamp.decode(r, r.uint32()));
                  break;
                default:
                  r.skipType(7 & e);
                  break;
              }
            }
            return n;
          },
          fromJSON(e) {
            const o = Object.assign({}, h);
            if (
              ((o.totalDeposit = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (o.proposalId = s.default.fromString(e.proposalId))
                : (o.proposalId = s.default.UZERO),
              void 0 !== e.content && null !== e.content
                ? (o.content = a.Any.fromJSON(e.content))
                : (o.content = void 0),
              void 0 !== e.status && null !== e.status
                ? (o.status = v(e.status))
                : (o.status = 0),
              void 0 !== e.finalTallyResult && null !== e.finalTallyResult
                ? (o.finalTallyResult = t.TallyResult.fromJSON(
                    e.finalTallyResult,
                  ))
                : (o.finalTallyResult = void 0),
              void 0 !== e.submitTime && null !== e.submitTime
                ? (o.submitTime = E(e.submitTime))
                : (o.submitTime = void 0),
              void 0 !== e.depositEndTime && null !== e.depositEndTime
                ? (o.depositEndTime = E(e.depositEndTime))
                : (o.depositEndTime = void 0),
              void 0 !== e.totalDeposit && null !== e.totalDeposit)
            )
              for (const t of e.totalDeposit)
                o.totalDeposit.push(l.Coin.fromJSON(t));
            return (
              void 0 !== e.votingStartTime && null !== e.votingStartTime
                ? (o.votingStartTime = E(e.votingStartTime))
                : (o.votingStartTime = void 0),
              void 0 !== e.votingEndTime && null !== e.votingEndTime
                ? (o.votingEndTime = E(e.votingEndTime))
                : (o.votingEndTime = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.proposalId &&
                (o.proposalId = (e.proposalId || s.default.UZERO).toString()),
              void 0 !== e.content &&
                (o.content = e.content ? a.Any.toJSON(e.content) : void 0),
              void 0 !== e.status && (o.status = g(e.status)),
              void 0 !== e.finalTallyResult &&
                (o.finalTallyResult = e.finalTallyResult
                  ? t.TallyResult.toJSON(e.finalTallyResult)
                  : void 0),
              void 0 !== e.submitTime &&
                (o.submitTime = e.submitTime.toISOString()),
              void 0 !== e.depositEndTime &&
                (o.depositEndTime = e.depositEndTime.toISOString()),
              e.totalDeposit
                ? (o.totalDeposit = e.totalDeposit.map((e) =>
                    e ? l.Coin.toJSON(e) : void 0,
                  ))
                : (o.totalDeposit = []),
              void 0 !== e.votingStartTime &&
                (o.votingStartTime = e.votingStartTime.toISOString()),
              void 0 !== e.votingEndTime &&
                (o.votingEndTime = e.votingEndTime.toISOString()),
              o
            );
          },
          fromPartial(e) {
            var o, r, i, n, d;
            const u = Object.assign({}, h);
            if (
              (void 0 !== e.proposalId && null !== e.proposalId
                ? (u.proposalId = e.proposalId)
                : (u.proposalId = s.default.UZERO),
              void 0 !== e.content && null !== e.content
                ? (u.content = a.Any.fromPartial(e.content))
                : (u.content = void 0),
              (u.status = null !== (o = e.status) && void 0 !== o ? o : 0),
              void 0 !== e.finalTallyResult && null !== e.finalTallyResult
                ? (u.finalTallyResult = t.TallyResult.fromPartial(
                    e.finalTallyResult,
                  ))
                : (u.finalTallyResult = void 0),
              (u.submitTime =
                null !== (r = e.submitTime) && void 0 !== r ? r : void 0),
              (u.depositEndTime =
                null !== (i = e.depositEndTime) && void 0 !== i ? i : void 0),
              (u.totalDeposit = []),
              void 0 !== e.totalDeposit && null !== e.totalDeposit)
            )
              for (const t of e.totalDeposit)
                u.totalDeposit.push(l.Coin.fromPartial(t));
            return (
              (u.votingStartTime =
                null !== (n = e.votingStartTime) && void 0 !== n ? n : void 0),
              (u.votingEndTime =
                null !== (d = e.votingEndTime) && void 0 !== d ? d : void 0),
              u
            );
          },
        };
        const b = { yes: "", abstain: "", no: "", noWithVeto: "" };
        t.TallyResult = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.yes && t.uint32(10).string(e.yes),
              "" !== e.abstain && t.uint32(18).string(e.abstain),
              "" !== e.no && t.uint32(26).string(e.no),
              "" !== e.noWithVeto && t.uint32(34).string(e.noWithVeto),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, b);
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.yes = o.string();
                  break;
                case 2:
                  s.abstain = o.string();
                  break;
                case 3:
                  s.no = o.string();
                  break;
                case 4:
                  s.noWithVeto = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            return (
              void 0 !== e.yes && null !== e.yes
                ? (t.yes = String(e.yes))
                : (t.yes = ""),
              void 0 !== e.abstain && null !== e.abstain
                ? (t.abstain = String(e.abstain))
                : (t.abstain = ""),
              void 0 !== e.no && null !== e.no
                ? (t.no = String(e.no))
                : (t.no = ""),
              void 0 !== e.noWithVeto && null !== e.noWithVeto
                ? (t.noWithVeto = String(e.noWithVeto))
                : (t.noWithVeto = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.yes && (t.yes = e.yes),
              void 0 !== e.abstain && (t.abstain = e.abstain),
              void 0 !== e.no && (t.no = e.no),
              void 0 !== e.noWithVeto && (t.noWithVeto = e.noWithVeto),
              t
            );
          },
          fromPartial(e) {
            var t, o, r, s;
            const i = Object.assign({}, b);
            return (
              (i.yes = null !== (t = e.yes) && void 0 !== t ? t : ""),
              (i.abstain = null !== (o = e.abstain) && void 0 !== o ? o : ""),
              (i.no = null !== (r = e.no) && void 0 !== r ? r : ""),
              (i.noWithVeto =
                null !== (s = e.noWithVeto) && void 0 !== s ? s : ""),
              i
            );
          },
        };
        const R = { proposalId: s.default.UZERO, voter: "", option: 0 };
        t.Vote = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
              "" !== e.voter && t.uint32(18).string(e.voter),
              0 !== e.option && t.uint32(24).int32(e.option),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, R);
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.proposalId = o.uint64();
                  break;
                case 2:
                  s.voter = o.string();
                  break;
                case 3:
                  s.option = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, R);
            return (
              void 0 !== e.proposalId && null !== e.proposalId
                ? (t.proposalId = s.default.fromString(e.proposalId))
                : (t.proposalId = s.default.UZERO),
              void 0 !== e.voter && null !== e.voter
                ? (t.voter = String(e.voter))
                : (t.voter = ""),
              void 0 !== e.option && null !== e.option
                ? (t.option = p(e.option))
                : (t.option = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.proposalId &&
                (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
              void 0 !== e.voter && (t.voter = e.voter),
              void 0 !== e.option && (t.option = f(e.option)),
              t
            );
          },
          fromPartial(e) {
            var t, o;
            const r = Object.assign({}, R);
            return (
              void 0 !== e.proposalId && null !== e.proposalId
                ? (r.proposalId = e.proposalId)
                : (r.proposalId = s.default.UZERO),
              (r.voter = null !== (t = e.voter) && void 0 !== t ? t : ""),
              (r.option = null !== (o = e.option) && void 0 !== o ? o : 0),
              r
            );
          },
        };
        const w = {};
        t.DepositParams = {
          encode(e, t) {
            void 0 === t && (t = i.default.Writer.create());
            for (const o of e.minDeposit)
              l.Coin.encode(o, t.uint32(10).fork()).ldelim();
            return (
              void 0 !== e.maxDepositPeriod &&
                n.Duration.encode(
                  e.maxDepositPeriod,
                  t.uint32(18).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, w);
            s.minDeposit = [];
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.minDeposit.push(l.Coin.decode(o, o.uint32()));
                  break;
                case 2:
                  s.maxDepositPeriod = n.Duration.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, w);
            if (
              ((t.minDeposit = []),
              void 0 !== e.minDeposit && null !== e.minDeposit)
            )
              for (const o of e.minDeposit)
                t.minDeposit.push(l.Coin.fromJSON(o));
            return (
              void 0 !== e.maxDepositPeriod && null !== e.maxDepositPeriod
                ? (t.maxDepositPeriod = n.Duration.fromJSON(e.maxDepositPeriod))
                : (t.maxDepositPeriod = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.minDeposit
                ? (t.minDeposit = e.minDeposit.map((e) =>
                    e ? l.Coin.toJSON(e) : void 0,
                  ))
                : (t.minDeposit = []),
              void 0 !== e.maxDepositPeriod &&
                (t.maxDepositPeriod = e.maxDepositPeriod
                  ? n.Duration.toJSON(e.maxDepositPeriod)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, w);
            if (
              ((t.minDeposit = []),
              void 0 !== e.minDeposit && null !== e.minDeposit)
            )
              for (const o of e.minDeposit)
                t.minDeposit.push(l.Coin.fromPartial(o));
            return (
              void 0 !== e.maxDepositPeriod && null !== e.maxDepositPeriod
                ? (t.maxDepositPeriod = n.Duration.fromPartial(
                    e.maxDepositPeriod,
                  ))
                : (t.maxDepositPeriod = void 0),
              t
            );
          },
        };
        const P = {};
        t.VotingParams = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.votingPeriod &&
                n.Duration.encode(e.votingPeriod, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, P);
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.votingPeriod = n.Duration.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, P);
            return (
              void 0 !== e.votingPeriod && null !== e.votingPeriod
                ? (t.votingPeriod = n.Duration.fromJSON(e.votingPeriod))
                : (t.votingPeriod = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.votingPeriod &&
                (t.votingPeriod = e.votingPeriod
                  ? n.Duration.toJSON(e.votingPeriod)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, P);
            return (
              void 0 !== e.votingPeriod && null !== e.votingPeriod
                ? (t.votingPeriod = n.Duration.fromPartial(e.votingPeriod))
                : (t.votingPeriod = void 0),
              t
            );
          },
        };
        const S = {};
        t.TallyParams = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.quorum.length && t.uint32(10).bytes(e.quorum),
              0 !== e.threshold.length && t.uint32(18).bytes(e.threshold),
              0 !== e.vetoThreshold.length &&
                t.uint32(26).bytes(e.vetoThreshold),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, S);
            ((s.quorum = new Uint8Array()),
              (s.threshold = new Uint8Array()),
              (s.vetoThreshold = new Uint8Array()));
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.quorum = o.bytes();
                  break;
                case 2:
                  s.threshold = o.bytes();
                  break;
                case 3:
                  s.vetoThreshold = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
            return (
              (t.quorum = new Uint8Array()),
              (t.threshold = new Uint8Array()),
              (t.vetoThreshold = new Uint8Array()),
              void 0 !== e.quorum &&
                null !== e.quorum &&
                (t.quorum = A(e.quorum)),
              void 0 !== e.threshold &&
                null !== e.threshold &&
                (t.threshold = A(e.threshold)),
              void 0 !== e.vetoThreshold &&
                null !== e.vetoThreshold &&
                (t.vetoThreshold = A(e.vetoThreshold)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.quorum &&
                (t.quorum = N(
                  void 0 !== e.quorum ? e.quorum : new Uint8Array(),
                )),
              void 0 !== e.threshold &&
                (t.threshold = N(
                  void 0 !== e.threshold ? e.threshold : new Uint8Array(),
                )),
              void 0 !== e.vetoThreshold &&
                (t.vetoThreshold = N(
                  void 0 !== e.vetoThreshold
                    ? e.vetoThreshold
                    : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            var t, o, r;
            const s = Object.assign({}, S);
            return (
              (s.quorum =
                null !== (t = e.quorum) && void 0 !== t ? t : new Uint8Array()),
              (s.threshold =
                null !== (o = e.threshold) && void 0 !== o
                  ? o
                  : new Uint8Array()),
              (s.vetoThreshold =
                null !== (r = e.vetoThreshold) && void 0 !== r
                  ? r
                  : new Uint8Array()),
              s
            );
          },
        };
        var y = (() => {
          if ("undefined" !== typeof y) return y;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const T =
          y.atob || ((e) => y.Buffer.from(e, "base64").toString("binary"));
        function A(e) {
          const t = T(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const k =
          y.btoa || ((e) => y.Buffer.from(e, "binary").toString("base64"));
        function N(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return k(t.join(""));
        }
        function I(e) {
          const t = J(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function D(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function E(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : D(d.Timestamp.fromJSON(e));
        }
        function J(e) {
          return s.default.fromNumber(e);
        }
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure());
      }).call(this, o(13));
    },
    3789: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LegacyAminoPubKey = t.protobufPackage = void 0));
      const s = r(o(2754)),
        i = r(o(2755)),
        a = o(2781);
      t.protobufPackage = "cosmos.crypto.multisig";
      const n = { threshold: 0 };
      ((t.LegacyAminoPubKey = {
        encode(e, t = i.default.Writer.create()) {
          0 !== e.threshold && t.uint32(8).uint32(e.threshold);
          for (const o of e.publicKeys)
            a.Any.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, n);
          s.publicKeys = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.threshold = o.uint32();
                break;
              case 2:
                s.publicKeys.push(a.Any.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, n);
          if (
            ((t.publicKeys = []),
            void 0 !== e.threshold && null !== e.threshold
              ? (t.threshold = Number(e.threshold))
              : (t.threshold = 0),
            void 0 !== e.publicKeys && null !== e.publicKeys)
          )
            for (const o of e.publicKeys) t.publicKeys.push(a.Any.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.threshold && (t.threshold = e.threshold),
            e.publicKeys
              ? (t.publicKeys = e.publicKeys.map((e) =>
                  e ? a.Any.toJSON(e) : void 0,
                ))
              : (t.publicKeys = []),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, n);
          if (
            ((o.threshold = null !== (t = e.threshold) && void 0 !== t ? t : 0),
            (o.publicKeys = []),
            void 0 !== e.publicKeys && null !== e.publicKeys)
          )
            for (const r of e.publicKeys)
              o.publicKeys.push(a.Any.fromPartial(r));
          return o;
        },
      }),
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure()));
    },
    3790: function (e, t, o) {
      "use strict";
      (function (e) {
        var r =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PrivKey = t.PubKey = t.protobufPackage = void 0));
        const s = r(o(2754)),
          i = r(o(2755));
        t.protobufPackage = "cosmos.crypto.secp256k1";
        const a = {};
        t.PubKey = {
          encode(e, t = i.default.Writer.create()) {
            return (0 !== e.key.length && t.uint32(10).bytes(e.key), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, a);
            s.key = new Uint8Array();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
            return (
              (t.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (t.key = u(e.key)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key &&
                (t.key = p(void 0 !== e.key ? e.key : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, a);
            return (
              (o.key =
                null !== (t = e.key) && void 0 !== t ? t : new Uint8Array()),
              o
            );
          },
        };
        const n = {};
        t.PrivKey = {
          encode(e, t = i.default.Writer.create()) {
            return (0 !== e.key.length && t.uint32(10).bytes(e.key), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === t ? o.len : o.pos + t;
            const s = Object.assign({}, n);
            s.key = new Uint8Array();
            while (o.pos < r) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const t = Object.assign({}, n);
            return (
              (t.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (t.key = u(e.key)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key &&
                (t.key = p(void 0 !== e.key ? e.key : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            var t;
            const o = Object.assign({}, n);
            return (
              (o.key =
                null !== (t = e.key) && void 0 !== t ? t : new Uint8Array()),
              o
            );
          },
        };
        var d = (() => {
          if ("undefined" !== typeof d) return d;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const l =
          d.atob || ((e) => d.Buffer.from(e, "base64").toString("binary"));
        function u(e) {
          const t = l(e),
            o = new Uint8Array(t.length);
          for (let r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
          return o;
        }
        const c =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function p(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return c(t.join(""));
        }
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure());
      }).call(this, o(13));
    },
    4430: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QueryClientImpl =
          t.QueryCommunityPoolResponse =
          t.QueryCommunityPoolRequest =
          t.QueryDelegatorWithdrawAddressResponse =
          t.QueryDelegatorWithdrawAddressRequest =
          t.QueryDelegatorValidatorsResponse =
          t.QueryDelegatorValidatorsRequest =
          t.QueryDelegationTotalRewardsResponse =
          t.QueryDelegationTotalRewardsRequest =
          t.QueryDelegationRewardsResponse =
          t.QueryDelegationRewardsRequest =
          t.QueryValidatorSlashesResponse =
          t.QueryValidatorSlashesRequest =
          t.QueryValidatorCommissionResponse =
          t.QueryValidatorCommissionRequest =
          t.QueryValidatorOutstandingRewardsResponse =
          t.QueryValidatorOutstandingRewardsRequest =
          t.QueryParamsResponse =
          t.QueryParamsRequest =
          t.protobufPackage =
            void 0));
      const s = r(o(2754)),
        i = r(o(2755)),
        a = o(4431),
        n = o(2926),
        d = o(2801);
      t.protobufPackage = "cosmos.distribution.v1beta1";
      const l = {};
      t.QueryParamsRequest = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, l);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return t;
        },
      };
      const u = {};
      t.QueryParamsResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.params &&
              a.Params.encode(e.params, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, u);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.params = a.Params.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.params && null !== e.params
              ? (t.params = a.Params.fromJSON(e.params))
              : (t.params = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.params &&
              (t.params = e.params ? a.Params.toJSON(e.params) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.params && null !== e.params
              ? (t.params = a.Params.fromPartial(e.params))
              : (t.params = void 0),
            t
          );
        },
      };
      const c = { validatorAddress: "" };
      t.QueryValidatorOutstandingRewardsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, c);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, c);
          return (
            (o.validatorAddress =
              null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const p = {};
      t.QueryValidatorOutstandingRewardsResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.rewards &&
              a.ValidatorOutstandingRewards.encode(
                e.rewards,
                t.uint32(10).fork(),
              ).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, p);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.rewards = a.ValidatorOutstandingRewards.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.rewards && null !== e.rewards
              ? (t.rewards = a.ValidatorOutstandingRewards.fromJSON(e.rewards))
              : (t.rewards = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.rewards &&
              (t.rewards = e.rewards
                ? a.ValidatorOutstandingRewards.toJSON(e.rewards)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.rewards && null !== e.rewards
              ? (t.rewards = a.ValidatorOutstandingRewards.fromPartial(
                  e.rewards,
                ))
              : (t.rewards = void 0),
            t
          );
        },
      };
      const f = { validatorAddress: "" };
      t.QueryValidatorCommissionRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, f);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, f);
          return (
            (o.validatorAddress =
              null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const v = {};
      t.QueryValidatorCommissionResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.commission &&
              a.ValidatorAccumulatedCommission.encode(
                e.commission,
                t.uint32(10).fork(),
              ).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, v);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.commission = a.ValidatorAccumulatedCommission.decode(
                  o,
                  o.uint32(),
                );
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.commission && null !== e.commission
              ? (t.commission = a.ValidatorAccumulatedCommission.fromJSON(
                  e.commission,
                ))
              : (t.commission = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.commission &&
              (t.commission = e.commission
                ? a.ValidatorAccumulatedCommission.toJSON(e.commission)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.commission && null !== e.commission
              ? (t.commission = a.ValidatorAccumulatedCommission.fromPartial(
                  e.commission,
                ))
              : (t.commission = void 0),
            t
          );
        },
      };
      const g = {
        validatorAddress: "",
        startingHeight: s.default.UZERO,
        endingHeight: s.default.UZERO,
      };
      t.QueryValidatorSlashesRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress),
            e.startingHeight.isZero() || t.uint32(16).uint64(e.startingHeight),
            e.endingHeight.isZero() || t.uint32(24).uint64(e.endingHeight),
            void 0 !== e.pagination &&
              n.PageRequest.encode(e.pagination, t.uint32(34).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, g);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorAddress = o.string();
                break;
              case 2:
                s.startingHeight = o.uint64();
                break;
              case 3:
                s.endingHeight = o.uint64();
                break;
              case 4:
                s.pagination = n.PageRequest.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.startingHeight && null !== e.startingHeight
              ? (t.startingHeight = s.default.fromString(e.startingHeight))
              : (t.startingHeight = s.default.UZERO),
            void 0 !== e.endingHeight && null !== e.endingHeight
              ? (t.endingHeight = s.default.fromString(e.endingHeight))
              : (t.endingHeight = s.default.UZERO),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageRequest.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            void 0 !== e.startingHeight &&
              (t.startingHeight = (
                e.startingHeight || s.default.UZERO
              ).toString()),
            void 0 !== e.endingHeight &&
              (t.endingHeight = (e.endingHeight || s.default.UZERO).toString()),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageRequest.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, g);
          return (
            (o.validatorAddress =
              null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
            void 0 !== e.startingHeight && null !== e.startingHeight
              ? (o.startingHeight = e.startingHeight)
              : (o.startingHeight = s.default.UZERO),
            void 0 !== e.endingHeight && null !== e.endingHeight
              ? (o.endingHeight = e.endingHeight)
              : (o.endingHeight = s.default.UZERO),
            void 0 !== e.pagination && null !== e.pagination
              ? (o.pagination = n.PageRequest.fromPartial(e.pagination))
              : (o.pagination = void 0),
            o
          );
        },
      };
      const m = {};
      t.QueryValidatorSlashesResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.slashes)
            a.ValidatorSlashEvent.encode(o, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.pagination &&
              n.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, m);
          s.slashes = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.slashes.push(a.ValidatorSlashEvent.decode(o, o.uint32()));
                break;
              case 2:
                s.pagination = n.PageResponse.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          if (((t.slashes = []), void 0 !== e.slashes && null !== e.slashes))
            for (const o of e.slashes)
              t.slashes.push(a.ValidatorSlashEvent.fromJSON(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.slashes
              ? (t.slashes = e.slashes.map((e) =>
                  e ? a.ValidatorSlashEvent.toJSON(e) : void 0,
                ))
              : (t.slashes = []),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageResponse.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          if (((t.slashes = []), void 0 !== e.slashes && null !== e.slashes))
            for (const o of e.slashes)
              t.slashes.push(a.ValidatorSlashEvent.fromPartial(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const O = { delegatorAddress: "", validatorAddress: "" };
      t.QueryDelegationRewardsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, O);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.delegatorAddress = o.string();
                break;
              case 2:
                s.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t, o;
          const r = Object.assign({}, O);
          return (
            (r.delegatorAddress =
              null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
            (r.validatorAddress =
              null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
            r
          );
        },
      };
      const h = {};
      t.QueryDelegationRewardsResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.rewards)
            d.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, h);
          s.rewards = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.rewards.push(d.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(d.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.rewards
              ? (t.rewards = e.rewards.map((e) =>
                  e ? d.DecCoin.toJSON(e) : void 0,
                ))
              : (t.rewards = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, h);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(d.DecCoin.fromPartial(o));
          return t;
        },
      };
      const b = { delegatorAddress: "" };
      t.QueryDelegationTotalRewardsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, b);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.delegatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, b);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, b);
          return (
            (o.delegatorAddress =
              null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const R = {};
      t.QueryDelegationTotalRewardsResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.rewards)
            a.DelegationDelegatorReward.encode(o, t.uint32(10).fork()).ldelim();
          for (const o of e.total)
            d.DecCoin.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, R);
          ((s.rewards = []), (s.total = []));
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.rewards.push(
                  a.DelegationDelegatorReward.decode(o, o.uint32()),
                );
                break;
              case 2:
                s.total.push(d.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, R);
          if (
            ((t.rewards = []),
            (t.total = []),
            void 0 !== e.rewards && null !== e.rewards)
          )
            for (const o of e.rewards)
              t.rewards.push(a.DelegationDelegatorReward.fromJSON(o));
          if (void 0 !== e.total && null !== e.total)
            for (const o of e.total) t.total.push(d.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.rewards
              ? (t.rewards = e.rewards.map((e) =>
                  e ? a.DelegationDelegatorReward.toJSON(e) : void 0,
                ))
              : (t.rewards = []),
            e.total
              ? (t.total = e.total.map((e) =>
                  e ? d.DecCoin.toJSON(e) : void 0,
                ))
              : (t.total = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, R);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards)
              t.rewards.push(a.DelegationDelegatorReward.fromPartial(o));
          if (((t.total = []), void 0 !== e.total && null !== e.total))
            for (const o of e.total) t.total.push(d.DecCoin.fromPartial(o));
          return t;
        },
      };
      const w = { delegatorAddress: "" };
      t.QueryDelegatorValidatorsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, w);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.delegatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, w);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, w);
          return (
            (o.delegatorAddress =
              null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const P = { validators: "" };
      t.QueryDelegatorValidatorsResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.validators) t.uint32(10).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, P);
          s.validators = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validators.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, P);
          if (
            ((t.validators = []),
            void 0 !== e.validators && null !== e.validators)
          )
            for (const o of e.validators) t.validators.push(String(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.validators
              ? (t.validators = e.validators.map((e) => e))
              : (t.validators = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, P);
          if (
            ((t.validators = []),
            void 0 !== e.validators && null !== e.validators)
          )
            for (const o of e.validators) t.validators.push(o);
          return t;
        },
      };
      const S = { delegatorAddress: "" };
      t.QueryDelegatorWithdrawAddressRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, S);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.delegatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, S);
          return (
            (o.delegatorAddress =
              null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const y = { withdrawAddress: "" };
      t.QueryDelegatorWithdrawAddressResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.withdrawAddress && t.uint32(10).string(e.withdrawAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, y);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.withdrawAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, y);
          return (
            void 0 !== e.withdrawAddress && null !== e.withdrawAddress
              ? (t.withdrawAddress = String(e.withdrawAddress))
              : (t.withdrawAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.withdrawAddress &&
              (t.withdrawAddress = e.withdrawAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, y);
          return (
            (o.withdrawAddress =
              null !== (t = e.withdrawAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const T = {};
      t.QueryCommunityPoolRequest = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, T);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, T);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, T);
          return t;
        },
      };
      const A = {};
      t.QueryCommunityPoolResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.pool)
            d.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, A);
          s.pool = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.pool.push(d.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, A);
          if (((t.pool = []), void 0 !== e.pool && null !== e.pool))
            for (const o of e.pool) t.pool.push(d.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.pool
              ? (t.pool = e.pool.map((e) => (e ? d.DecCoin.toJSON(e) : void 0)))
              : (t.pool = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, A);
          if (((t.pool = []), void 0 !== e.pool && null !== e.pool))
            for (const o of e.pool) t.pool.push(d.DecCoin.fromPartial(o));
          return t;
        },
      };
      class QueryClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Params = this.Params.bind(this)),
            (this.ValidatorOutstandingRewards =
              this.ValidatorOutstandingRewards.bind(this)),
            (this.ValidatorCommission = this.ValidatorCommission.bind(this)),
            (this.ValidatorSlashes = this.ValidatorSlashes.bind(this)),
            (this.DelegationRewards = this.DelegationRewards.bind(this)),
            (this.DelegationTotalRewards =
              this.DelegationTotalRewards.bind(this)),
            (this.DelegatorValidators = this.DelegatorValidators.bind(this)),
            (this.DelegatorWithdrawAddress =
              this.DelegatorWithdrawAddress.bind(this)),
            (this.CommunityPool = this.CommunityPool.bind(this)));
        }
        Params(e) {
          const o = t.QueryParamsRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "Params",
              o,
            );
          return r.then((e) =>
            t.QueryParamsResponse.decode(new i.default.Reader(e)),
          );
        }
        ValidatorOutstandingRewards(e) {
          const o =
              t.QueryValidatorOutstandingRewardsRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "ValidatorOutstandingRewards",
              o,
            );
          return r.then((e) =>
            t.QueryValidatorOutstandingRewardsResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        ValidatorCommission(e) {
          const o = t.QueryValidatorCommissionRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "ValidatorCommission",
              o,
            );
          return r.then((e) =>
            t.QueryValidatorCommissionResponse.decode(new i.default.Reader(e)),
          );
        }
        ValidatorSlashes(e) {
          const o = t.QueryValidatorSlashesRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "ValidatorSlashes",
              o,
            );
          return r.then((e) =>
            t.QueryValidatorSlashesResponse.decode(new i.default.Reader(e)),
          );
        }
        DelegationRewards(e) {
          const o = t.QueryDelegationRewardsRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "DelegationRewards",
              o,
            );
          return r.then((e) =>
            t.QueryDelegationRewardsResponse.decode(new i.default.Reader(e)),
          );
        }
        DelegationTotalRewards(e) {
          const o = t.QueryDelegationTotalRewardsRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "DelegationTotalRewards",
              o,
            );
          return r.then((e) =>
            t.QueryDelegationTotalRewardsResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        DelegatorValidators(e) {
          const o = t.QueryDelegatorValidatorsRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "DelegatorValidators",
              o,
            );
          return r.then((e) =>
            t.QueryDelegatorValidatorsResponse.decode(new i.default.Reader(e)),
          );
        }
        DelegatorWithdrawAddress(e) {
          const o = t.QueryDelegatorWithdrawAddressRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "DelegatorWithdrawAddress",
              o,
            );
          return r.then((e) =>
            t.QueryDelegatorWithdrawAddressResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        CommunityPool(e) {
          const o = t.QueryCommunityPoolRequest.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Query",
              "CommunityPool",
              o,
            );
          return r.then((e) =>
            t.QueryCommunityPoolResponse.decode(new i.default.Reader(e)),
          );
        }
      }
      ((t.QueryClientImpl = QueryClientImpl),
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure()));
    },
    4431: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CommunityPoolSpendProposalWithDeposit =
          t.DelegationDelegatorReward =
          t.DelegatorStartingInfo =
          t.CommunityPoolSpendProposal =
          t.FeePool =
          t.ValidatorSlashEvents =
          t.ValidatorSlashEvent =
          t.ValidatorOutstandingRewards =
          t.ValidatorAccumulatedCommission =
          t.ValidatorCurrentRewards =
          t.ValidatorHistoricalRewards =
          t.Params =
          t.protobufPackage =
            void 0));
      const s = r(o(2754)),
        i = r(o(2755)),
        a = o(2801);
      t.protobufPackage = "cosmos.distribution.v1beta1";
      const n = {
        communityTax: "",
        baseProposerReward: "",
        bonusProposerReward: "",
        withdrawAddrEnabled: !1,
      };
      t.Params = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.communityTax && t.uint32(10).string(e.communityTax),
            "" !== e.baseProposerReward &&
              t.uint32(18).string(e.baseProposerReward),
            "" !== e.bonusProposerReward &&
              t.uint32(26).string(e.bonusProposerReward),
            !0 === e.withdrawAddrEnabled &&
              t.uint32(32).bool(e.withdrawAddrEnabled),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, n);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.communityTax = o.string();
                break;
              case 2:
                s.baseProposerReward = o.string();
                break;
              case 3:
                s.bonusProposerReward = o.string();
                break;
              case 4:
                s.withdrawAddrEnabled = o.bool();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, n);
          return (
            void 0 !== e.communityTax && null !== e.communityTax
              ? (t.communityTax = String(e.communityTax))
              : (t.communityTax = ""),
            void 0 !== e.baseProposerReward && null !== e.baseProposerReward
              ? (t.baseProposerReward = String(e.baseProposerReward))
              : (t.baseProposerReward = ""),
            void 0 !== e.bonusProposerReward && null !== e.bonusProposerReward
              ? (t.bonusProposerReward = String(e.bonusProposerReward))
              : (t.bonusProposerReward = ""),
            void 0 !== e.withdrawAddrEnabled && null !== e.withdrawAddrEnabled
              ? (t.withdrawAddrEnabled = Boolean(e.withdrawAddrEnabled))
              : (t.withdrawAddrEnabled = !1),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.communityTax && (t.communityTax = e.communityTax),
            void 0 !== e.baseProposerReward &&
              (t.baseProposerReward = e.baseProposerReward),
            void 0 !== e.bonusProposerReward &&
              (t.bonusProposerReward = e.bonusProposerReward),
            void 0 !== e.withdrawAddrEnabled &&
              (t.withdrawAddrEnabled = e.withdrawAddrEnabled),
            t
          );
        },
        fromPartial(e) {
          var t, o, r, s;
          const i = Object.assign({}, n);
          return (
            (i.communityTax =
              null !== (t = e.communityTax) && void 0 !== t ? t : ""),
            (i.baseProposerReward =
              null !== (o = e.baseProposerReward) && void 0 !== o ? o : ""),
            (i.bonusProposerReward =
              null !== (r = e.bonusProposerReward) && void 0 !== r ? r : ""),
            (i.withdrawAddrEnabled =
              null !== (s = e.withdrawAddrEnabled) && void 0 !== s && s),
            i
          );
        },
      };
      const d = { referenceCount: 0 };
      t.ValidatorHistoricalRewards = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.cumulativeRewardRatio)
            a.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return (
            0 !== e.referenceCount && t.uint32(16).uint32(e.referenceCount),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, d);
          s.cumulativeRewardRatio = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.cumulativeRewardRatio.push(a.DecCoin.decode(o, o.uint32()));
                break;
              case 2:
                s.referenceCount = o.uint32();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          if (
            ((t.cumulativeRewardRatio = []),
            void 0 !== e.cumulativeRewardRatio &&
              null !== e.cumulativeRewardRatio)
          )
            for (const o of e.cumulativeRewardRatio)
              t.cumulativeRewardRatio.push(a.DecCoin.fromJSON(o));
          return (
            void 0 !== e.referenceCount && null !== e.referenceCount
              ? (t.referenceCount = Number(e.referenceCount))
              : (t.referenceCount = 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.cumulativeRewardRatio
              ? (t.cumulativeRewardRatio = e.cumulativeRewardRatio.map((e) =>
                  e ? a.DecCoin.toJSON(e) : void 0,
                ))
              : (t.cumulativeRewardRatio = []),
            void 0 !== e.referenceCount &&
              (t.referenceCount = e.referenceCount),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, d);
          if (
            ((o.cumulativeRewardRatio = []),
            void 0 !== e.cumulativeRewardRatio &&
              null !== e.cumulativeRewardRatio)
          )
            for (const r of e.cumulativeRewardRatio)
              o.cumulativeRewardRatio.push(a.DecCoin.fromPartial(r));
          return (
            (o.referenceCount =
              null !== (t = e.referenceCount) && void 0 !== t ? t : 0),
            o
          );
        },
      };
      const l = { period: s.default.UZERO };
      t.ValidatorCurrentRewards = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.rewards)
            a.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return (e.period.isZero() || t.uint32(16).uint64(e.period), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, l);
          s.rewards = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.rewards.push(a.DecCoin.decode(o, o.uint32()));
                break;
              case 2:
                s.period = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(a.DecCoin.fromJSON(o));
          return (
            void 0 !== e.period && null !== e.period
              ? (t.period = s.default.fromString(e.period))
              : (t.period = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.rewards
              ? (t.rewards = e.rewards.map((e) =>
                  e ? a.DecCoin.toJSON(e) : void 0,
                ))
              : (t.rewards = []),
            void 0 !== e.period &&
              (t.period = (e.period || s.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(a.DecCoin.fromPartial(o));
          return (
            void 0 !== e.period && null !== e.period
              ? (t.period = e.period)
              : (t.period = s.default.UZERO),
            t
          );
        },
      };
      const u = {};
      t.ValidatorAccumulatedCommission = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.commission)
            a.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, u);
          s.commission = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.commission.push(a.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.commission = []),
            void 0 !== e.commission && null !== e.commission)
          )
            for (const o of e.commission)
              t.commission.push(a.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.commission
              ? (t.commission = e.commission.map((e) =>
                  e ? a.DecCoin.toJSON(e) : void 0,
                ))
              : (t.commission = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (
            ((t.commission = []),
            void 0 !== e.commission && null !== e.commission)
          )
            for (const o of e.commission)
              t.commission.push(a.DecCoin.fromPartial(o));
          return t;
        },
      };
      const c = {};
      t.ValidatorOutstandingRewards = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.rewards)
            a.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, c);
          s.rewards = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.rewards.push(a.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(a.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.rewards
              ? (t.rewards = e.rewards.map((e) =>
                  e ? a.DecCoin.toJSON(e) : void 0,
                ))
              : (t.rewards = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(a.DecCoin.fromPartial(o));
          return t;
        },
      };
      const p = { validatorPeriod: s.default.UZERO, fraction: "" };
      t.ValidatorSlashEvent = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.validatorPeriod.isZero() || t.uint32(8).uint64(e.validatorPeriod),
            "" !== e.fraction && t.uint32(18).string(e.fraction),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, p);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorPeriod = o.uint64();
                break;
              case 2:
                s.fraction = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.validatorPeriod && null !== e.validatorPeriod
              ? (t.validatorPeriod = s.default.fromString(e.validatorPeriod))
              : (t.validatorPeriod = s.default.UZERO),
            void 0 !== e.fraction && null !== e.fraction
              ? (t.fraction = String(e.fraction))
              : (t.fraction = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorPeriod &&
              (t.validatorPeriod = (
                e.validatorPeriod || s.default.UZERO
              ).toString()),
            void 0 !== e.fraction && (t.fraction = e.fraction),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, p);
          return (
            void 0 !== e.validatorPeriod && null !== e.validatorPeriod
              ? (o.validatorPeriod = e.validatorPeriod)
              : (o.validatorPeriod = s.default.UZERO),
            (o.fraction = null !== (t = e.fraction) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const f = {};
      t.ValidatorSlashEvents = {
        encode(e, o) {
          void 0 === o && (o = i.default.Writer.create());
          for (const r of e.validatorSlashEvents)
            t.ValidatorSlashEvent.encode(r, o.uint32(10).fork()).ldelim();
          return o;
        },
        decode(e, o) {
          const r = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let s = void 0 === o ? r.len : r.pos + o;
          const a = Object.assign({}, f);
          a.validatorSlashEvents = [];
          while (r.pos < s) {
            const e = r.uint32();
            switch (e >>> 3) {
              case 1:
                a.validatorSlashEvents.push(
                  t.ValidatorSlashEvent.decode(r, r.uint32()),
                );
                break;
              default:
                r.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const o = Object.assign({}, f);
          if (
            ((o.validatorSlashEvents = []),
            void 0 !== e.validatorSlashEvents &&
              null !== e.validatorSlashEvents)
          )
            for (const r of e.validatorSlashEvents)
              o.validatorSlashEvents.push(t.ValidatorSlashEvent.fromJSON(r));
          return o;
        },
        toJSON(e) {
          const o = {};
          return (
            e.validatorSlashEvents
              ? (o.validatorSlashEvents = e.validatorSlashEvents.map((e) =>
                  e ? t.ValidatorSlashEvent.toJSON(e) : void 0,
                ))
              : (o.validatorSlashEvents = []),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, f);
          if (
            ((o.validatorSlashEvents = []),
            void 0 !== e.validatorSlashEvents &&
              null !== e.validatorSlashEvents)
          )
            for (const r of e.validatorSlashEvents)
              o.validatorSlashEvents.push(t.ValidatorSlashEvent.fromPartial(r));
          return o;
        },
      };
      const v = {};
      t.FeePool = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.communityPool)
            a.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, v);
          s.communityPool = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.communityPool.push(a.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          if (
            ((t.communityPool = []),
            void 0 !== e.communityPool && null !== e.communityPool)
          )
            for (const o of e.communityPool)
              t.communityPool.push(a.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.communityPool
              ? (t.communityPool = e.communityPool.map((e) =>
                  e ? a.DecCoin.toJSON(e) : void 0,
                ))
              : (t.communityPool = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          if (
            ((t.communityPool = []),
            void 0 !== e.communityPool && null !== e.communityPool)
          )
            for (const o of e.communityPool)
              t.communityPool.push(a.DecCoin.fromPartial(o));
          return t;
        },
      };
      const g = { title: "", description: "", recipient: "" };
      t.CommunityPoolSpendProposal = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            "" !== e.recipient && t.uint32(26).string(e.recipient));
          for (const o of e.amount)
            a.Coin.encode(o, t.uint32(34).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, g);
          s.amount = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.title = o.string();
                break;
              case 2:
                s.description = o.string();
                break;
              case 3:
                s.recipient = o.string();
                break;
              case 4:
                s.amount.push(a.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (
            ((t.amount = []),
            void 0 !== e.title && null !== e.title
              ? (t.title = String(e.title))
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = String(e.description))
              : (t.description = ""),
            void 0 !== e.recipient && null !== e.recipient
              ? (t.recipient = String(e.recipient))
              : (t.recipient = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(a.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.description && (t.description = e.description),
            void 0 !== e.recipient && (t.recipient = e.recipient),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          var t, o, r;
          const s = Object.assign({}, g);
          if (
            ((s.title = null !== (t = e.title) && void 0 !== t ? t : ""),
            (s.description =
              null !== (o = e.description) && void 0 !== o ? o : ""),
            (s.recipient = null !== (r = e.recipient) && void 0 !== r ? r : ""),
            (s.amount = []),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const i of e.amount) s.amount.push(a.Coin.fromPartial(i));
          return s;
        },
      };
      const m = {
        previousPeriod: s.default.UZERO,
        stake: "",
        height: s.default.UZERO,
      };
      t.DelegatorStartingInfo = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.previousPeriod.isZero() || t.uint32(8).uint64(e.previousPeriod),
            "" !== e.stake && t.uint32(18).string(e.stake),
            e.height.isZero() || t.uint32(24).uint64(e.height),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, m);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.previousPeriod = o.uint64();
                break;
              case 2:
                s.stake = o.string();
                break;
              case 3:
                s.height = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          return (
            void 0 !== e.previousPeriod && null !== e.previousPeriod
              ? (t.previousPeriod = s.default.fromString(e.previousPeriod))
              : (t.previousPeriod = s.default.UZERO),
            void 0 !== e.stake && null !== e.stake
              ? (t.stake = String(e.stake))
              : (t.stake = ""),
            void 0 !== e.height && null !== e.height
              ? (t.height = s.default.fromString(e.height))
              : (t.height = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.previousPeriod &&
              (t.previousPeriod = (
                e.previousPeriod || s.default.UZERO
              ).toString()),
            void 0 !== e.stake && (t.stake = e.stake),
            void 0 !== e.height &&
              (t.height = (e.height || s.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, m);
          return (
            void 0 !== e.previousPeriod && null !== e.previousPeriod
              ? (o.previousPeriod = e.previousPeriod)
              : (o.previousPeriod = s.default.UZERO),
            (o.stake = null !== (t = e.stake) && void 0 !== t ? t : ""),
            void 0 !== e.height && null !== e.height
              ? (o.height = e.height)
              : (o.height = s.default.UZERO),
            o
          );
        },
      };
      const O = { validatorAddress: "" };
      t.DelegationDelegatorReward = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress));
          for (const o of e.reward)
            a.DecCoin.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, O);
          s.reward = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorAddress = o.string();
                break;
              case 2:
                s.reward.push(a.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, O);
          if (
            ((t.reward = []),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.reward && null !== e.reward)
          )
            for (const o of e.reward) t.reward.push(a.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            e.reward
              ? (t.reward = e.reward.map((e) =>
                  e ? a.DecCoin.toJSON(e) : void 0,
                ))
              : (t.reward = []),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, O);
          if (
            ((o.validatorAddress =
              null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
            (o.reward = []),
            void 0 !== e.reward && null !== e.reward)
          )
            for (const r of e.reward) o.reward.push(a.DecCoin.fromPartial(r));
          return o;
        },
      };
      const h = {
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: "",
      };
      ((t.CommunityPoolSpendProposalWithDeposit = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            "" !== e.recipient && t.uint32(26).string(e.recipient),
            "" !== e.amount && t.uint32(34).string(e.amount),
            "" !== e.deposit && t.uint32(42).string(e.deposit),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, h);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.title = o.string();
                break;
              case 2:
                s.description = o.string();
                break;
              case 3:
                s.recipient = o.string();
                break;
              case 4:
                s.amount = o.string();
                break;
              case 5:
                s.deposit = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = String(e.title))
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = String(e.description))
              : (t.description = ""),
            void 0 !== e.recipient && null !== e.recipient
              ? (t.recipient = String(e.recipient))
              : (t.recipient = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            void 0 !== e.deposit && null !== e.deposit
              ? (t.deposit = String(e.deposit))
              : (t.deposit = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.title && (t.title = e.title),
            void 0 !== e.description && (t.description = e.description),
            void 0 !== e.recipient && (t.recipient = e.recipient),
            void 0 !== e.amount && (t.amount = e.amount),
            void 0 !== e.deposit && (t.deposit = e.deposit),
            t
          );
        },
        fromPartial(e) {
          var t, o, r, s, i;
          const a = Object.assign({}, h);
          return (
            (a.title = null !== (t = e.title) && void 0 !== t ? t : ""),
            (a.description =
              null !== (o = e.description) && void 0 !== o ? o : ""),
            (a.recipient = null !== (r = e.recipient) && void 0 !== r ? r : ""),
            (a.amount = null !== (s = e.amount) && void 0 !== s ? s : ""),
            (a.deposit = null !== (i = e.deposit) && void 0 !== i ? i : ""),
            a
          );
        },
      }),
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure()));
    },
    4433: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QueryClientImpl =
          t.QueryTallyResultResponse =
          t.QueryTallyResultRequest =
          t.QueryDepositsResponse =
          t.QueryDepositsRequest =
          t.QueryDepositResponse =
          t.QueryDepositRequest =
          t.QueryParamsResponse =
          t.QueryParamsRequest =
          t.QueryVotesResponse =
          t.QueryVotesRequest =
          t.QueryVoteResponse =
          t.QueryVoteRequest =
          t.QueryProposalsResponse =
          t.QueryProposalsRequest =
          t.QueryProposalResponse =
          t.QueryProposalRequest =
          t.protobufPackage =
            void 0));
      const s = r(o(2754)),
        i = r(o(2755)),
        a = o(3324),
        n = o(2926);
      t.protobufPackage = "cosmos.gov.v1beta1";
      const d = { proposalId: s.default.UZERO };
      t.QueryProposalRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, d);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = s.default.UZERO),
            t
          );
        },
      };
      const l = {};
      t.QueryProposalResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.proposal &&
              a.Proposal.encode(e.proposal, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, l);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposal = a.Proposal.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.proposal && null !== e.proposal
              ? (t.proposal = a.Proposal.fromJSON(e.proposal))
              : (t.proposal = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposal &&
              (t.proposal = e.proposal
                ? a.Proposal.toJSON(e.proposal)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.proposal && null !== e.proposal
              ? (t.proposal = a.Proposal.fromPartial(e.proposal))
              : (t.proposal = void 0),
            t
          );
        },
      };
      const u = { proposalStatus: 0, voter: "", depositor: "" };
      t.QueryProposalsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            0 !== e.proposalStatus && t.uint32(8).int32(e.proposalStatus),
            "" !== e.voter && t.uint32(18).string(e.voter),
            "" !== e.depositor && t.uint32(26).string(e.depositor),
            void 0 !== e.pagination &&
              n.PageRequest.encode(e.pagination, t.uint32(34).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, u);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalStatus = o.int32();
                break;
              case 2:
                s.voter = o.string();
                break;
              case 3:
                s.depositor = o.string();
                break;
              case 4:
                s.pagination = n.PageRequest.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.proposalStatus && null !== e.proposalStatus
              ? (t.proposalStatus = a.proposalStatusFromJSON(e.proposalStatus))
              : (t.proposalStatus = 0),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = String(e.voter))
              : (t.voter = ""),
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = String(e.depositor))
              : (t.depositor = ""),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageRequest.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalStatus &&
              (t.proposalStatus = a.proposalStatusToJSON(e.proposalStatus)),
            void 0 !== e.voter && (t.voter = e.voter),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageRequest.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          var t, o, r;
          const s = Object.assign({}, u);
          return (
            (s.proposalStatus =
              null !== (t = e.proposalStatus) && void 0 !== t ? t : 0),
            (s.voter = null !== (o = e.voter) && void 0 !== o ? o : ""),
            (s.depositor = null !== (r = e.depositor) && void 0 !== r ? r : ""),
            void 0 !== e.pagination && null !== e.pagination
              ? (s.pagination = n.PageRequest.fromPartial(e.pagination))
              : (s.pagination = void 0),
            s
          );
        },
      };
      const c = {};
      t.QueryProposalsResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.proposals)
            a.Proposal.encode(o, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.pagination &&
              n.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, c);
          s.proposals = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposals.push(a.Proposal.decode(o, o.uint32()));
                break;
              case 2:
                s.pagination = n.PageResponse.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (
            ((t.proposals = []), void 0 !== e.proposals && null !== e.proposals)
          )
            for (const o of e.proposals)
              t.proposals.push(a.Proposal.fromJSON(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.proposals
              ? (t.proposals = e.proposals.map((e) =>
                  e ? a.Proposal.toJSON(e) : void 0,
                ))
              : (t.proposals = []),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageResponse.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (
            ((t.proposals = []), void 0 !== e.proposals && null !== e.proposals)
          )
            for (const o of e.proposals)
              t.proposals.push(a.Proposal.fromPartial(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const p = { proposalId: s.default.UZERO, voter: "" };
      t.QueryVoteRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.voter && t.uint32(18).string(e.voter),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, p);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              case 2:
                s.voter = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = String(e.voter))
              : (t.voter = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            void 0 !== e.voter && (t.voter = e.voter),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, p);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (o.proposalId = e.proposalId)
              : (o.proposalId = s.default.UZERO),
            (o.voter = null !== (t = e.voter) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const f = {};
      t.QueryVoteResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.vote &&
              a.Vote.encode(e.vote, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, f);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.vote = a.Vote.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.vote && null !== e.vote
              ? (t.vote = a.Vote.fromJSON(e.vote))
              : (t.vote = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.vote &&
              (t.vote = e.vote ? a.Vote.toJSON(e.vote) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.vote && null !== e.vote
              ? (t.vote = a.Vote.fromPartial(e.vote))
              : (t.vote = void 0),
            t
          );
        },
      };
      const v = { proposalId: s.default.UZERO };
      t.QueryVotesRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            void 0 !== e.pagination &&
              n.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, v);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              case 2:
                s.pagination = n.PageRequest.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageRequest.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageRequest.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageRequest.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const g = {};
      t.QueryVotesResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.votes)
            a.Vote.encode(o, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.pagination &&
              n.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, g);
          s.votes = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.votes.push(a.Vote.decode(o, o.uint32()));
                break;
              case 2:
                s.pagination = n.PageResponse.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (((t.votes = []), void 0 !== e.votes && null !== e.votes))
            for (const o of e.votes) t.votes.push(a.Vote.fromJSON(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.votes
              ? (t.votes = e.votes.map((e) => (e ? a.Vote.toJSON(e) : void 0)))
              : (t.votes = []),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageResponse.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          if (((t.votes = []), void 0 !== e.votes && null !== e.votes))
            for (const o of e.votes) t.votes.push(a.Vote.fromPartial(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const m = { paramsType: "" };
      t.QueryParamsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.paramsType && t.uint32(10).string(e.paramsType),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, m);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.paramsType = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          return (
            void 0 !== e.paramsType && null !== e.paramsType
              ? (t.paramsType = String(e.paramsType))
              : (t.paramsType = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.paramsType && (t.paramsType = e.paramsType), t);
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, m);
          return (
            (o.paramsType =
              null !== (t = e.paramsType) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const O = {};
      t.QueryParamsResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.votingParams &&
              a.VotingParams.encode(
                e.votingParams,
                t.uint32(10).fork(),
              ).ldelim(),
            void 0 !== e.depositParams &&
              a.DepositParams.encode(
                e.depositParams,
                t.uint32(18).fork(),
              ).ldelim(),
            void 0 !== e.tallyParams &&
              a.TallyParams.encode(e.tallyParams, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, O);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.votingParams = a.VotingParams.decode(o, o.uint32());
                break;
              case 2:
                s.depositParams = a.DepositParams.decode(o, o.uint32());
                break;
              case 3:
                s.tallyParams = a.TallyParams.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.votingParams && null !== e.votingParams
              ? (t.votingParams = a.VotingParams.fromJSON(e.votingParams))
              : (t.votingParams = void 0),
            void 0 !== e.depositParams && null !== e.depositParams
              ? (t.depositParams = a.DepositParams.fromJSON(e.depositParams))
              : (t.depositParams = void 0),
            void 0 !== e.tallyParams && null !== e.tallyParams
              ? (t.tallyParams = a.TallyParams.fromJSON(e.tallyParams))
              : (t.tallyParams = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.votingParams &&
              (t.votingParams = e.votingParams
                ? a.VotingParams.toJSON(e.votingParams)
                : void 0),
            void 0 !== e.depositParams &&
              (t.depositParams = e.depositParams
                ? a.DepositParams.toJSON(e.depositParams)
                : void 0),
            void 0 !== e.tallyParams &&
              (t.tallyParams = e.tallyParams
                ? a.TallyParams.toJSON(e.tallyParams)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, O);
          return (
            void 0 !== e.votingParams && null !== e.votingParams
              ? (t.votingParams = a.VotingParams.fromPartial(e.votingParams))
              : (t.votingParams = void 0),
            void 0 !== e.depositParams && null !== e.depositParams
              ? (t.depositParams = a.DepositParams.fromPartial(e.depositParams))
              : (t.depositParams = void 0),
            void 0 !== e.tallyParams && null !== e.tallyParams
              ? (t.tallyParams = a.TallyParams.fromPartial(e.tallyParams))
              : (t.tallyParams = void 0),
            t
          );
        },
      };
      const h = { proposalId: s.default.UZERO, depositor: "" };
      t.QueryDepositRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.depositor && t.uint32(18).string(e.depositor),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, h);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              case 2:
                s.depositor = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = String(e.depositor))
              : (t.depositor = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, h);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (o.proposalId = e.proposalId)
              : (o.proposalId = s.default.UZERO),
            (o.depositor = null !== (t = e.depositor) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const b = {};
      t.QueryDepositResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.deposit &&
              a.Deposit.encode(e.deposit, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, b);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.deposit = a.Deposit.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, b);
          return (
            void 0 !== e.deposit && null !== e.deposit
              ? (t.deposit = a.Deposit.fromJSON(e.deposit))
              : (t.deposit = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.deposit &&
              (t.deposit = e.deposit ? a.Deposit.toJSON(e.deposit) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, b);
          return (
            void 0 !== e.deposit && null !== e.deposit
              ? (t.deposit = a.Deposit.fromPartial(e.deposit))
              : (t.deposit = void 0),
            t
          );
        },
      };
      const R = { proposalId: s.default.UZERO };
      t.QueryDepositsRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            void 0 !== e.pagination &&
              n.PageRequest.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, R);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              case 2:
                s.pagination = n.PageRequest.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, R);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageRequest.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageRequest.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, R);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageRequest.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const w = {};
      t.QueryDepositsResponse = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.deposits)
            a.Deposit.encode(o, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.pagination &&
              n.PageResponse.encode(e.pagination, t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, w);
          s.deposits = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.deposits.push(a.Deposit.decode(o, o.uint32()));
                break;
              case 2:
                s.pagination = n.PageResponse.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, w);
          if (((t.deposits = []), void 0 !== e.deposits && null !== e.deposits))
            for (const o of e.deposits) t.deposits.push(a.Deposit.fromJSON(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromJSON(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.deposits
              ? (t.deposits = e.deposits.map((e) =>
                  e ? a.Deposit.toJSON(e) : void 0,
                ))
              : (t.deposits = []),
            void 0 !== e.pagination &&
              (t.pagination = e.pagination
                ? n.PageResponse.toJSON(e.pagination)
                : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, w);
          if (((t.deposits = []), void 0 !== e.deposits && null !== e.deposits))
            for (const o of e.deposits)
              t.deposits.push(a.Deposit.fromPartial(o));
          return (
            void 0 !== e.pagination && null !== e.pagination
              ? (t.pagination = n.PageResponse.fromPartial(e.pagination))
              : (t.pagination = void 0),
            t
          );
        },
      };
      const P = { proposalId: s.default.UZERO };
      t.QueryTallyResultRequest = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, P);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, P);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, P);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = s.default.UZERO),
            t
          );
        },
      };
      const S = {};
      t.QueryTallyResultResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.tally &&
              a.TallyResult.encode(e.tally, t.uint32(10).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, S);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.tally = a.TallyResult.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.tally && null !== e.tally
              ? (t.tally = a.TallyResult.fromJSON(e.tally))
              : (t.tally = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.tally &&
              (t.tally = e.tally ? a.TallyResult.toJSON(e.tally) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, S);
          return (
            void 0 !== e.tally && null !== e.tally
              ? (t.tally = a.TallyResult.fromPartial(e.tally))
              : (t.tally = void 0),
            t
          );
        },
      };
      class QueryClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Proposal = this.Proposal.bind(this)),
            (this.Proposals = this.Proposals.bind(this)),
            (this.Vote = this.Vote.bind(this)),
            (this.Votes = this.Votes.bind(this)),
            (this.Params = this.Params.bind(this)),
            (this.Deposit = this.Deposit.bind(this)),
            (this.Deposits = this.Deposits.bind(this)),
            (this.TallyResult = this.TallyResult.bind(this)));
        }
        Proposal(e) {
          const o = t.QueryProposalRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", o);
          return r.then((e) =>
            t.QueryProposalResponse.decode(new i.default.Reader(e)),
          );
        }
        Proposals(e) {
          const o = t.QueryProposalsRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", o);
          return r.then((e) =>
            t.QueryProposalsResponse.decode(new i.default.Reader(e)),
          );
        }
        Vote(e) {
          const o = t.QueryVoteRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", o);
          return r.then((e) =>
            t.QueryVoteResponse.decode(new i.default.Reader(e)),
          );
        }
        Votes(e) {
          const o = t.QueryVotesRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", o);
          return r.then((e) =>
            t.QueryVotesResponse.decode(new i.default.Reader(e)),
          );
        }
        Params(e) {
          const o = t.QueryParamsRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", o);
          return r.then((e) =>
            t.QueryParamsResponse.decode(new i.default.Reader(e)),
          );
        }
        Deposit(e) {
          const o = t.QueryDepositRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", o);
          return r.then((e) =>
            t.QueryDepositResponse.decode(new i.default.Reader(e)),
          );
        }
        Deposits(e) {
          const o = t.QueryDepositsRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", o);
          return r.then((e) =>
            t.QueryDepositsResponse.decode(new i.default.Reader(e)),
          );
        }
        TallyResult(e) {
          const o = t.QueryTallyResultRequest.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", o);
          return r.then((e) =>
            t.QueryTallyResultResponse.decode(new i.default.Reader(e)),
          );
        }
      }
      ((t.QueryClientImpl = QueryClientImpl),
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure()));
    },
    4467: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgClientImpl =
          t.MsgFundCommunityPoolResponse =
          t.MsgFundCommunityPool =
          t.MsgWithdrawValidatorCommissionResponse =
          t.MsgWithdrawValidatorCommission =
          t.MsgWithdrawDelegatorRewardResponse =
          t.MsgWithdrawDelegatorReward =
          t.MsgSetWithdrawAddressResponse =
          t.MsgSetWithdrawAddress =
          t.protobufPackage =
            void 0));
      const s = r(o(2754)),
        i = r(o(2755)),
        a = o(2801);
      t.protobufPackage = "cosmos.distribution.v1beta1";
      const n = { delegatorAddress: "", withdrawAddress: "" };
      t.MsgSetWithdrawAddress = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.withdrawAddress && t.uint32(18).string(e.withdrawAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, n);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.delegatorAddress = o.string();
                break;
              case 2:
                s.withdrawAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, n);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.withdrawAddress && null !== e.withdrawAddress
              ? (t.withdrawAddress = String(e.withdrawAddress))
              : (t.withdrawAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.withdrawAddress &&
              (t.withdrawAddress = e.withdrawAddress),
            t
          );
        },
        fromPartial(e) {
          var t, o;
          const r = Object.assign({}, n);
          return (
            (r.delegatorAddress =
              null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
            (r.withdrawAddress =
              null !== (o = e.withdrawAddress) && void 0 !== o ? o : ""),
            r
          );
        },
      };
      const d = {};
      t.MsgSetWithdrawAddressResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, d);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return t;
        },
      };
      const l = { delegatorAddress: "", validatorAddress: "" };
      t.MsgWithdrawDelegatorReward = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, l);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.delegatorAddress = o.string();
                break;
              case 2:
                s.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = String(e.delegatorAddress))
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.delegatorAddress &&
              (t.delegatorAddress = e.delegatorAddress),
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t, o;
          const r = Object.assign({}, l);
          return (
            (r.delegatorAddress =
              null !== (t = e.delegatorAddress) && void 0 !== t ? t : ""),
            (r.validatorAddress =
              null !== (o = e.validatorAddress) && void 0 !== o ? o : ""),
            r
          );
        },
      };
      const u = {};
      t.MsgWithdrawDelegatorRewardResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, u);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return t;
        },
      };
      const c = { validatorAddress: "" };
      t.MsgWithdrawValidatorCommission = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, c);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, c);
          return (
            (o.validatorAddress =
              null !== (t = e.validatorAddress) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const p = {};
      t.MsgWithdrawValidatorCommissionResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, p);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return t;
        },
      };
      const f = { depositor: "" };
      t.MsgFundCommunityPool = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.amount)
            a.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return ("" !== e.depositor && t.uint32(18).string(e.depositor), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, f);
          s.amount = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.amount.push(a.Coin.decode(o, o.uint32()));
                break;
              case 2:
                s.depositor = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
            for (const o of e.amount) t.amount.push(a.Coin.fromJSON(o));
          return (
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = String(e.depositor))
              : (t.depositor = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? a.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, f);
          if (((o.amount = []), void 0 !== e.amount && null !== e.amount))
            for (const r of e.amount) o.amount.push(a.Coin.fromPartial(r));
          return (
            (o.depositor = null !== (t = e.depositor) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const v = {};
      t.MsgFundCommunityPoolResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, v);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return t;
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this)),
            (this.WithdrawDelegatorReward =
              this.WithdrawDelegatorReward.bind(this)),
            (this.WithdrawValidatorCommission =
              this.WithdrawValidatorCommission.bind(this)),
            (this.FundCommunityPool = this.FundCommunityPool.bind(this)));
        }
        SetWithdrawAddress(e) {
          const o = t.MsgSetWithdrawAddress.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "SetWithdrawAddress",
              o,
            );
          return r.then((e) =>
            t.MsgSetWithdrawAddressResponse.decode(new i.default.Reader(e)),
          );
        }
        WithdrawDelegatorReward(e) {
          const o = t.MsgWithdrawDelegatorReward.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "WithdrawDelegatorReward",
              o,
            );
          return r.then((e) =>
            t.MsgWithdrawDelegatorRewardResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        WithdrawValidatorCommission(e) {
          const o = t.MsgWithdrawValidatorCommission.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "WithdrawValidatorCommission",
              o,
            );
          return r.then((e) =>
            t.MsgWithdrawValidatorCommissionResponse.decode(
              new i.default.Reader(e),
            ),
          );
        }
        FundCommunityPool(e) {
          const o = t.MsgFundCommunityPool.encode(e).finish(),
            r = this.rpc.request(
              "cosmos.distribution.v1beta1.Msg",
              "FundCommunityPool",
              o,
            );
          return r.then((e) =>
            t.MsgFundCommunityPoolResponse.decode(new i.default.Reader(e)),
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure()));
    },
    4468: function (e, t, o) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MsgClientImpl =
          t.MsgDepositResponse =
          t.MsgDeposit =
          t.MsgVoteResponse =
          t.MsgVote =
          t.MsgSubmitProposalResponse =
          t.MsgSubmitProposal =
          t.protobufPackage =
            void 0));
      const s = r(o(2754)),
        i = r(o(2755)),
        a = o(2781),
        n = o(3324),
        d = o(2801);
      t.protobufPackage = "cosmos.gov.v1beta1";
      const l = { proposer: "" };
      t.MsgSubmitProposal = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.content &&
              a.Any.encode(e.content, t.uint32(10).fork()).ldelim());
          for (const o of e.initialDeposit)
            d.Coin.encode(o, t.uint32(18).fork()).ldelim();
          return ("" !== e.proposer && t.uint32(26).string(e.proposer), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, l);
          s.initialDeposit = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.content = a.Any.decode(o, o.uint32());
                break;
              case 2:
                s.initialDeposit.push(d.Coin.decode(o, o.uint32()));
                break;
              case 3:
                s.proposer = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          if (
            ((t.initialDeposit = []),
            void 0 !== e.content && null !== e.content
              ? (t.content = a.Any.fromJSON(e.content))
              : (t.content = void 0),
            void 0 !== e.initialDeposit && null !== e.initialDeposit)
          )
            for (const o of e.initialDeposit)
              t.initialDeposit.push(d.Coin.fromJSON(o));
          return (
            void 0 !== e.proposer && null !== e.proposer
              ? (t.proposer = String(e.proposer))
              : (t.proposer = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.content &&
              (t.content = e.content ? a.Any.toJSON(e.content) : void 0),
            e.initialDeposit
              ? (t.initialDeposit = e.initialDeposit.map((e) =>
                  e ? d.Coin.toJSON(e) : void 0,
                ))
              : (t.initialDeposit = []),
            void 0 !== e.proposer && (t.proposer = e.proposer),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, l);
          if (
            (void 0 !== e.content && null !== e.content
              ? (o.content = a.Any.fromPartial(e.content))
              : (o.content = void 0),
            (o.initialDeposit = []),
            void 0 !== e.initialDeposit && null !== e.initialDeposit)
          )
            for (const r of e.initialDeposit)
              o.initialDeposit.push(d.Coin.fromPartial(r));
          return (
            (o.proposer = null !== (t = e.proposer) && void 0 !== t ? t : ""),
            o
          );
        },
      };
      const u = { proposalId: s.default.UZERO };
      t.MsgSubmitProposalResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, u);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = s.default.UZERO),
            t
          );
        },
      };
      const c = { proposalId: s.default.UZERO, voter: "", option: 0 };
      t.MsgVote = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.voter && t.uint32(18).string(e.voter),
            0 !== e.option && t.uint32(24).int32(e.option),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, c);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              case 2:
                s.voter = o.string();
                break;
              case 3:
                s.option = o.int32();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = String(e.voter))
              : (t.voter = ""),
            void 0 !== e.option && null !== e.option
              ? (t.option = n.voteOptionFromJSON(e.option))
              : (t.option = 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            void 0 !== e.voter && (t.voter = e.voter),
            void 0 !== e.option && (t.option = n.voteOptionToJSON(e.option)),
            t
          );
        },
        fromPartial(e) {
          var t, o;
          const r = Object.assign({}, c);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (r.proposalId = e.proposalId)
              : (r.proposalId = s.default.UZERO),
            (r.voter = null !== (t = e.voter) && void 0 !== t ? t : ""),
            (r.option = null !== (o = e.option) && void 0 !== o ? o : 0),
            r
          );
        },
      };
      const p = {};
      t.MsgVoteResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, p);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return t;
        },
      };
      const f = { proposalId: s.default.UZERO, depositor: "" };
      t.MsgDeposit = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.depositor && t.uint32(18).string(e.depositor));
          for (const o of e.amount)
            d.Coin.encode(o, t.uint32(26).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, f);
          s.amount = [];
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                s.proposalId = o.uint64();
                break;
              case 2:
                s.depositor = o.string();
                break;
              case 3:
                s.amount.push(d.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          if (
            ((t.amount = []),
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = s.default.fromString(e.proposalId))
              : (t.proposalId = s.default.UZERO),
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = String(e.depositor))
              : (t.depositor = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(d.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || s.default.UZERO).toString()),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? d.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          var t;
          const o = Object.assign({}, f);
          if (
            (void 0 !== e.proposalId && null !== e.proposalId
              ? (o.proposalId = e.proposalId)
              : (o.proposalId = s.default.UZERO),
            (o.depositor = null !== (t = e.depositor) && void 0 !== t ? t : ""),
            (o.amount = []),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const r of e.amount) o.amount.push(d.Coin.fromPartial(r));
          return o;
        },
      };
      const v = {};
      t.MsgDepositResponse = {
        encode(e, t) {
          return (void 0 === t && (t = i.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === t ? o.len : o.pos + t;
          const s = Object.assign({}, v);
          while (o.pos < r) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return t;
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.SubmitProposal = this.SubmitProposal.bind(this)),
            (this.Vote = this.Vote.bind(this)),
            (this.Deposit = this.Deposit.bind(this)));
        }
        SubmitProposal(e) {
          const o = t.MsgSubmitProposal.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", o);
          return r.then((e) =>
            t.MsgSubmitProposalResponse.decode(new i.default.Reader(e)),
          );
        }
        Vote(e) {
          const o = t.MsgVote.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", o);
          return r.then((e) =>
            t.MsgVoteResponse.decode(new i.default.Reader(e)),
          );
        }
        Deposit(e) {
          const o = t.MsgDeposit.encode(e).finish(),
            r = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", o);
          return r.then((e) =>
            t.MsgDepositResponse.decode(new i.default.Reader(e)),
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        i.default.util.Long !== s.default &&
          ((i.default.util.Long = s.default), i.default.configure()));
    },
  },
]);
