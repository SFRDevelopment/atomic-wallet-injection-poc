(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [264, 265],
  {
    2840: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DecProto =
          t.IntProto =
          t.DecCoin =
          t.Coin =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = n(o(2755));
      t.protobufPackage = "cosmos.base.v1beta1";
      const s = { denom: "", amount: "" };
      t.Coin = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, s);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.denom = o.string();
                break;
              case 2:
                r.amount = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, s);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = e.amount)
              : (t.amount = ""),
            t
          );
        },
      };
      const a = { denom: "", amount: "" };
      t.DecCoin = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            "" !== e.amount && t.uint32(18).string(e.amount),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, a);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.denom = o.string();
                break;
              case 2:
                r.amount = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = String(e.amount))
              : (t.amount = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.amount && (t.amount = e.amount),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = e.amount)
              : (t.amount = ""),
            t
          );
        },
      };
      const d = { int: "" };
      t.IntProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.int && t.uint32(10).string(e.int),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.int = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.int && null !== e.int
              ? (t.int = String(e.int))
              : (t.int = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.int && (t.int = e.int), t);
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.int && null !== e.int ? (t.int = e.int) : (t.int = ""),
            t
          );
        },
      };
      const l = { dec: "" };
      ((t.DecProto = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.dec && t.uint32(10).string(e.dec),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.dec = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.dec && null !== e.dec
              ? (t.dec = String(e.dec))
              : (t.dec = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.dec && (t.dec = e.dec), t);
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.dec && null !== e.dec ? (t.dec = e.dec) : (t.dec = ""),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    3172: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
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
            t.WeightedVoteOption =
            t.proposalStatusToJSON =
            t.proposalStatusFromJSON =
            t.ProposalStatus =
            t.voteOptionToJSON =
            t.voteOptionFromJSON =
            t.VoteOption =
            t.protobufPackage =
              void 0));
        const r = n(o(2754)),
          i = n(o(2755)),
          s = o(2759),
          a = o(3296),
          d = o(2993),
          l = o(2840);
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
        function g(e) {
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
        function m(e) {
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
          (t.proposalStatusFromJSON = g),
          (t.proposalStatusToJSON = m));
        const v = { option: 0, weight: "" };
        t.WeightedVoteOption = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.option && t.uint32(8).int32(e.option),
              "" !== e.weight && t.uint32(18).string(e.weight),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, v);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.option = o.int32();
                  break;
                case 2:
                  r.weight = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.option && null !== e.option
                ? (t.option = p(e.option))
                : (t.option = 0),
              void 0 !== e.weight && null !== e.weight
                ? (t.weight = String(e.weight))
                : (t.weight = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.option && (t.option = f(e.option)),
              void 0 !== e.weight && (t.weight = e.weight),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.option && null !== e.option
                ? (t.option = e.option)
                : (t.option = 0),
              void 0 !== e.weight && null !== e.weight
                ? (t.weight = e.weight)
                : (t.weight = ""),
              t
            );
          },
        };
        const h = { title: "", description: "" };
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
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, h);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.title = o.string();
                  break;
                case 2:
                  r.description = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
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
            const t = Object.assign({}, h);
            return (
              void 0 !== e.title && null !== e.title
                ? (t.title = e.title)
                : (t.title = ""),
              void 0 !== e.description && null !== e.description
                ? (t.description = e.description)
                : (t.description = ""),
              t
            );
          },
        };
        const b = { proposalId: r.default.UZERO, depositor: "" };
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
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, b);
            r.amount = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.proposalId = o.uint64();
                  break;
                case 2:
                  r.depositor = o.string();
                  break;
                case 3:
                  r.amount.push(l.Coin.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            if (
              ((t.amount = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (t.proposalId = r.default.fromString(e.proposalId))
                : (t.proposalId = r.default.UZERO),
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
                (t.proposalId = (e.proposalId || r.default.UZERO).toString()),
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
            const t = Object.assign({}, b);
            if (
              ((t.amount = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (t.proposalId = e.proposalId)
                : (t.proposalId = r.default.UZERO),
              void 0 !== e.depositor && null !== e.depositor
                ? (t.depositor = e.depositor)
                : (t.depositor = ""),
              void 0 !== e.amount && null !== e.amount)
            )
              for (const o of e.amount) t.amount.push(l.Coin.fromPartial(o));
            return t;
          },
        };
        const O = { proposalId: r.default.UZERO, status: 0 };
        t.Proposal = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId),
              void 0 !== e.content &&
                s.Any.encode(e.content, o.uint32(18).fork()).ldelim(),
              0 !== e.status && o.uint32(24).int32(e.status),
              void 0 !== e.finalTallyResult &&
                t.TallyResult.encode(
                  e.finalTallyResult,
                  o.uint32(34).fork(),
                ).ldelim(),
              void 0 !== e.submitTime &&
                d.Timestamp.encode(
                  A(e.submitTime),
                  o.uint32(42).fork(),
                ).ldelim(),
              void 0 !== e.depositEndTime &&
                d.Timestamp.encode(
                  A(e.depositEndTime),
                  o.uint32(50).fork(),
                ).ldelim());
            for (const t of e.totalDeposit)
              l.Coin.encode(t, o.uint32(58).fork()).ldelim();
            return (
              void 0 !== e.votingStartTime &&
                d.Timestamp.encode(
                  A(e.votingStartTime),
                  o.uint32(66).fork(),
                ).ldelim(),
              void 0 !== e.votingEndTime &&
                d.Timestamp.encode(
                  A(e.votingEndTime),
                  o.uint32(74).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const a = Object.assign({}, O);
            a.totalDeposit = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  a.proposalId = n.uint64();
                  break;
                case 2:
                  a.content = s.Any.decode(n, n.uint32());
                  break;
                case 3:
                  a.status = n.int32();
                  break;
                case 4:
                  a.finalTallyResult = t.TallyResult.decode(n, n.uint32());
                  break;
                case 5:
                  a.submitTime = I(d.Timestamp.decode(n, n.uint32()));
                  break;
                case 6:
                  a.depositEndTime = I(d.Timestamp.decode(n, n.uint32()));
                  break;
                case 7:
                  a.totalDeposit.push(l.Coin.decode(n, n.uint32()));
                  break;
                case 8:
                  a.votingStartTime = I(d.Timestamp.decode(n, n.uint32()));
                  break;
                case 9:
                  a.votingEndTime = I(d.Timestamp.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return a;
          },
          fromJSON(e) {
            const o = Object.assign({}, O);
            if (
              ((o.totalDeposit = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (o.proposalId = r.default.fromString(e.proposalId))
                : (o.proposalId = r.default.UZERO),
              void 0 !== e.content && null !== e.content
                ? (o.content = s.Any.fromJSON(e.content))
                : (o.content = void 0),
              void 0 !== e.status && null !== e.status
                ? (o.status = g(e.status))
                : (o.status = 0),
              void 0 !== e.finalTallyResult && null !== e.finalTallyResult
                ? (o.finalTallyResult = t.TallyResult.fromJSON(
                    e.finalTallyResult,
                  ))
                : (o.finalTallyResult = void 0),
              void 0 !== e.submitTime && null !== e.submitTime
                ? (o.submitTime = C(e.submitTime))
                : (o.submitTime = void 0),
              void 0 !== e.depositEndTime && null !== e.depositEndTime
                ? (o.depositEndTime = C(e.depositEndTime))
                : (o.depositEndTime = void 0),
              void 0 !== e.totalDeposit && null !== e.totalDeposit)
            )
              for (const t of e.totalDeposit)
                o.totalDeposit.push(l.Coin.fromJSON(t));
            return (
              void 0 !== e.votingStartTime && null !== e.votingStartTime
                ? (o.votingStartTime = C(e.votingStartTime))
                : (o.votingStartTime = void 0),
              void 0 !== e.votingEndTime && null !== e.votingEndTime
                ? (o.votingEndTime = C(e.votingEndTime))
                : (o.votingEndTime = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.proposalId &&
                (o.proposalId = (e.proposalId || r.default.UZERO).toString()),
              void 0 !== e.content &&
                (o.content = e.content ? s.Any.toJSON(e.content) : void 0),
              void 0 !== e.status && (o.status = m(e.status)),
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
            const o = Object.assign({}, O);
            if (
              ((o.totalDeposit = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (o.proposalId = e.proposalId)
                : (o.proposalId = r.default.UZERO),
              void 0 !== e.content && null !== e.content
                ? (o.content = s.Any.fromPartial(e.content))
                : (o.content = void 0),
              void 0 !== e.status && null !== e.status
                ? (o.status = e.status)
                : (o.status = 0),
              void 0 !== e.finalTallyResult && null !== e.finalTallyResult
                ? (o.finalTallyResult = t.TallyResult.fromPartial(
                    e.finalTallyResult,
                  ))
                : (o.finalTallyResult = void 0),
              void 0 !== e.submitTime && null !== e.submitTime
                ? (o.submitTime = e.submitTime)
                : (o.submitTime = void 0),
              void 0 !== e.depositEndTime && null !== e.depositEndTime
                ? (o.depositEndTime = e.depositEndTime)
                : (o.depositEndTime = void 0),
              void 0 !== e.totalDeposit && null !== e.totalDeposit)
            )
              for (const t of e.totalDeposit)
                o.totalDeposit.push(l.Coin.fromPartial(t));
            return (
              void 0 !== e.votingStartTime && null !== e.votingStartTime
                ? (o.votingStartTime = e.votingStartTime)
                : (o.votingStartTime = void 0),
              void 0 !== e.votingEndTime && null !== e.votingEndTime
                ? (o.votingEndTime = e.votingEndTime)
                : (o.votingEndTime = void 0),
              o
            );
          },
        };
        const S = { yes: "", abstain: "", no: "", noWithVeto: "" };
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
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, S);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.yes = o.string();
                  break;
                case 2:
                  r.abstain = o.string();
                  break;
                case 3:
                  r.no = o.string();
                  break;
                case 4:
                  r.noWithVeto = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, S);
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
            const t = Object.assign({}, S);
            return (
              void 0 !== e.yes && null !== e.yes
                ? (t.yes = e.yes)
                : (t.yes = ""),
              void 0 !== e.abstain && null !== e.abstain
                ? (t.abstain = e.abstain)
                : (t.abstain = ""),
              void 0 !== e.no && null !== e.no ? (t.no = e.no) : (t.no = ""),
              void 0 !== e.noWithVeto && null !== e.noWithVeto
                ? (t.noWithVeto = e.noWithVeto)
                : (t.noWithVeto = ""),
              t
            );
          },
        };
        const y = { proposalId: r.default.UZERO, voter: "", option: 0 };
        t.Vote = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              e.proposalId.isZero() || o.uint32(8).uint64(e.proposalId),
              "" !== e.voter && o.uint32(18).string(e.voter),
              0 !== e.option && o.uint32(24).int32(e.option));
            for (const n of e.options)
              t.WeightedVoteOption.encode(n, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, y);
            s.options = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.proposalId = n.uint64();
                  break;
                case 2:
                  s.voter = n.string();
                  break;
                case 3:
                  s.option = n.int32();
                  break;
                case 4:
                  s.options.push(t.WeightedVoteOption.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, y);
            if (
              ((o.options = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (o.proposalId = r.default.fromString(e.proposalId))
                : (o.proposalId = r.default.UZERO),
              void 0 !== e.voter && null !== e.voter
                ? (o.voter = String(e.voter))
                : (o.voter = ""),
              void 0 !== e.option && null !== e.option
                ? (o.option = p(e.option))
                : (o.option = 0),
              void 0 !== e.options && null !== e.options)
            )
              for (const n of e.options)
                o.options.push(t.WeightedVoteOption.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.proposalId &&
                (o.proposalId = (e.proposalId || r.default.UZERO).toString()),
              void 0 !== e.voter && (o.voter = e.voter),
              void 0 !== e.option && (o.option = f(e.option)),
              e.options
                ? (o.options = e.options.map((e) =>
                    e ? t.WeightedVoteOption.toJSON(e) : void 0,
                  ))
                : (o.options = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, y);
            if (
              ((o.options = []),
              void 0 !== e.proposalId && null !== e.proposalId
                ? (o.proposalId = e.proposalId)
                : (o.proposalId = r.default.UZERO),
              void 0 !== e.voter && null !== e.voter
                ? (o.voter = e.voter)
                : (o.voter = ""),
              void 0 !== e.option && null !== e.option
                ? (o.option = e.option)
                : (o.option = 0),
              void 0 !== e.options && null !== e.options)
            )
              for (const n of e.options)
                o.options.push(t.WeightedVoteOption.fromPartial(n));
            return o;
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
                a.Duration.encode(
                  e.maxDepositPeriod,
                  t.uint32(18).fork(),
                ).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, w);
            r.minDeposit = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.minDeposit.push(l.Coin.decode(o, o.uint32()));
                  break;
                case 2:
                  r.maxDepositPeriod = a.Duration.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
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
                ? (t.maxDepositPeriod = a.Duration.fromJSON(e.maxDepositPeriod))
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
                  ? a.Duration.toJSON(e.maxDepositPeriod)
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
                ? (t.maxDepositPeriod = a.Duration.fromPartial(
                    e.maxDepositPeriod,
                  ))
                : (t.maxDepositPeriod = void 0),
              t
            );
          },
        };
        const k = {};
        t.VotingParams = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              void 0 !== e.votingPeriod &&
                a.Duration.encode(e.votingPeriod, t.uint32(10).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, k);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.votingPeriod = a.Duration.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, k);
            return (
              void 0 !== e.votingPeriod && null !== e.votingPeriod
                ? (t.votingPeriod = a.Duration.fromJSON(e.votingPeriod))
                : (t.votingPeriod = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.votingPeriod &&
                (t.votingPeriod = e.votingPeriod
                  ? a.Duration.toJSON(e.votingPeriod)
                  : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, k);
            return (
              void 0 !== e.votingPeriod && null !== e.votingPeriod
                ? (t.votingPeriod = a.Duration.fromPartial(e.votingPeriod))
                : (t.votingPeriod = void 0),
              t
            );
          },
        };
        const P = {};
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
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, P);
            ((r.quorum = new Uint8Array()),
              (r.threshold = new Uint8Array()),
              (r.vetoThreshold = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.quorum = o.bytes();
                  break;
                case 2:
                  r.threshold = o.bytes();
                  break;
                case 3:
                  r.vetoThreshold = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, P);
            return (
              (t.quorum = new Uint8Array()),
              (t.threshold = new Uint8Array()),
              (t.vetoThreshold = new Uint8Array()),
              void 0 !== e.quorum &&
                null !== e.quorum &&
                (t.quorum = E(e.quorum)),
              void 0 !== e.threshold &&
                null !== e.threshold &&
                (t.threshold = E(e.threshold)),
              void 0 !== e.vetoThreshold &&
                null !== e.vetoThreshold &&
                (t.vetoThreshold = E(e.vetoThreshold)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.quorum &&
                (t.quorum = x(
                  void 0 !== e.quorum ? e.quorum : new Uint8Array(),
                )),
              void 0 !== e.threshold &&
                (t.threshold = x(
                  void 0 !== e.threshold ? e.threshold : new Uint8Array(),
                )),
              void 0 !== e.vetoThreshold &&
                (t.vetoThreshold = x(
                  void 0 !== e.vetoThreshold
                    ? e.vetoThreshold
                    : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, P);
            return (
              void 0 !== e.quorum && null !== e.quorum
                ? (t.quorum = e.quorum)
                : (t.quorum = new Uint8Array()),
              void 0 !== e.threshold && null !== e.threshold
                ? (t.threshold = e.threshold)
                : (t.threshold = new Uint8Array()),
              void 0 !== e.vetoThreshold && null !== e.vetoThreshold
                ? (t.vetoThreshold = e.vetoThreshold)
                : (t.vetoThreshold = new Uint8Array()),
              t
            );
          },
        };
        var R = (() => {
          if ("undefined" !== typeof R) return R;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const N =
          R.atob || ((e) => R.Buffer.from(e, "base64").toString("binary"));
        function E(e) {
          const t = N(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const T =
          R.btoa || ((e) => R.Buffer.from(e, "binary").toString("base64"));
        function x(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return T(t.join(""));
        }
        function A(e) {
          const t = j(e.getTime() / 1e3),
            o = (e.getTime() % 1e3) * 1e6;
          return { seconds: t, nanos: o };
        }
        function I(e) {
          let t = 1e3 * e.seconds.toNumber();
          return ((t += e.nanos / 1e6), new Date(t));
        }
        function C(e) {
          return e instanceof Date
            ? e
            : "string" === typeof e
              ? new Date(e)
              : I(d.Timestamp.fromJSON(e));
        }
        function j(e) {
          return r.default.fromNumber(e);
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, o(13));
    },
    3425: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgDepositDesc =
          t.MsgVoteWeightedDesc =
          t.MsgVoteDesc =
          t.MsgSubmitProposalDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgDepositResponse =
          t.MsgDeposit =
          t.MsgVoteWeightedResponse =
          t.MsgVoteWeighted =
          t.MsgVoteResponse =
          t.MsgVote =
          t.MsgSubmitProposalResponse =
          t.MsgSubmitProposal =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = o(2889),
        s = n(o(2755)),
        a = o(2759),
        d = o(3172),
        l = o(2890),
        u = o(2840);
      t.protobufPackage = "cosmos.gov.v1beta1";
      const c = { proposer: "" };
      t.MsgSubmitProposal = {
        encode(e, t) {
          (void 0 === t && (t = s.default.Writer.create()),
            void 0 !== e.content &&
              a.Any.encode(e.content, t.uint32(10).fork()).ldelim());
          for (const o of e.initialDeposit)
            u.Coin.encode(o, t.uint32(18).fork()).ldelim();
          return ("" !== e.proposer && t.uint32(26).string(e.proposer), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, c);
          r.initialDeposit = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.content = a.Any.decode(o, o.uint32());
                break;
              case 2:
                r.initialDeposit.push(u.Coin.decode(o, o.uint32()));
                break;
              case 3:
                r.proposer = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (
            ((t.initialDeposit = []),
            void 0 !== e.content && null !== e.content
              ? (t.content = a.Any.fromJSON(e.content))
              : (t.content = void 0),
            void 0 !== e.initialDeposit && null !== e.initialDeposit)
          )
            for (const o of e.initialDeposit)
              t.initialDeposit.push(u.Coin.fromJSON(o));
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
                  e ? u.Coin.toJSON(e) : void 0,
                ))
              : (t.initialDeposit = []),
            void 0 !== e.proposer && (t.proposer = e.proposer),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (
            ((t.initialDeposit = []),
            void 0 !== e.content && null !== e.content
              ? (t.content = a.Any.fromPartial(e.content))
              : (t.content = void 0),
            void 0 !== e.initialDeposit && null !== e.initialDeposit)
          )
            for (const o of e.initialDeposit)
              t.initialDeposit.push(u.Coin.fromPartial(o));
          return (
            void 0 !== e.proposer && null !== e.proposer
              ? (t.proposer = e.proposer)
              : (t.proposer = ""),
            t
          );
        },
      };
      const p = { proposalId: r.default.UZERO };
      t.MsgSubmitProposalResponse = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.proposalId = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = r.default.fromString(e.proposalId))
              : (t.proposalId = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || r.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = r.default.UZERO),
            t
          );
        },
      };
      const f = { proposalId: r.default.UZERO, voter: "", option: 0 };
      t.MsgVote = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.voter && t.uint32(18).string(e.voter),
            0 !== e.option && t.uint32(24).int32(e.option),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, f);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.proposalId = o.uint64();
                break;
              case 2:
                r.voter = o.string();
                break;
              case 3:
                r.option = o.int32();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = r.default.fromString(e.proposalId))
              : (t.proposalId = r.default.UZERO),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = String(e.voter))
              : (t.voter = ""),
            void 0 !== e.option && null !== e.option
              ? (t.option = d.voteOptionFromJSON(e.option))
              : (t.option = 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || r.default.UZERO).toString()),
            void 0 !== e.voter && (t.voter = e.voter),
            void 0 !== e.option && (t.option = d.voteOptionToJSON(e.option)),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = r.default.UZERO),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = e.voter)
              : (t.voter = ""),
            void 0 !== e.option && null !== e.option
              ? (t.option = e.option)
              : (t.option = 0),
            t
          );
        },
      };
      const g = {};
      t.MsgVoteResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, g);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          return t;
        },
      };
      const m = { proposalId: r.default.UZERO, voter: "" };
      t.MsgVoteWeighted = {
        encode(e, t) {
          (void 0 === t && (t = s.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.voter && t.uint32(18).string(e.voter));
          for (const o of e.options)
            d.WeightedVoteOption.encode(o, t.uint32(26).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, m);
          r.options = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.proposalId = o.uint64();
                break;
              case 2:
                r.voter = o.string();
                break;
              case 3:
                r.options.push(d.WeightedVoteOption.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          if (
            ((t.options = []),
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = r.default.fromString(e.proposalId))
              : (t.proposalId = r.default.UZERO),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = String(e.voter))
              : (t.voter = ""),
            void 0 !== e.options && null !== e.options)
          )
            for (const o of e.options)
              t.options.push(d.WeightedVoteOption.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || r.default.UZERO).toString()),
            void 0 !== e.voter && (t.voter = e.voter),
            e.options
              ? (t.options = e.options.map((e) =>
                  e ? d.WeightedVoteOption.toJSON(e) : void 0,
                ))
              : (t.options = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          if (
            ((t.options = []),
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = r.default.UZERO),
            void 0 !== e.voter && null !== e.voter
              ? (t.voter = e.voter)
              : (t.voter = ""),
            void 0 !== e.options && null !== e.options)
          )
            for (const o of e.options)
              t.options.push(d.WeightedVoteOption.fromPartial(o));
          return t;
        },
      };
      const v = {};
      t.MsgVoteWeightedResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, v);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
      const h = { proposalId: r.default.UZERO, depositor: "" };
      t.MsgDeposit = {
        encode(e, t) {
          (void 0 === t && (t = s.default.Writer.create()),
            e.proposalId.isZero() || t.uint32(8).uint64(e.proposalId),
            "" !== e.depositor && t.uint32(18).string(e.depositor));
          for (const o of e.amount)
            u.Coin.encode(o, t.uint32(26).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, h);
          r.amount = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.proposalId = o.uint64();
                break;
              case 2:
                r.depositor = o.string();
                break;
              case 3:
                r.amount.push(u.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          if (
            ((t.amount = []),
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = r.default.fromString(e.proposalId))
              : (t.proposalId = r.default.UZERO),
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = String(e.depositor))
              : (t.depositor = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(u.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.proposalId &&
              (t.proposalId = (e.proposalId || r.default.UZERO).toString()),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? u.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, h);
          if (
            ((t.amount = []),
            void 0 !== e.proposalId && null !== e.proposalId
              ? (t.proposalId = e.proposalId)
              : (t.proposalId = r.default.UZERO),
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = e.depositor)
              : (t.depositor = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(u.Coin.fromPartial(o));
          return t;
        },
      };
      const b = {};
      t.MsgDepositResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, b);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, b);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, b);
          return t;
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.SubmitProposal = this.SubmitProposal.bind(this)),
            (this.Vote = this.Vote.bind(this)),
            (this.VoteWeighted = this.VoteWeighted.bind(this)),
            (this.Deposit = this.Deposit.bind(this)));
        }
        SubmitProposal(e, o) {
          return this.rpc.unary(
            t.MsgSubmitProposalDesc,
            t.MsgSubmitProposal.fromPartial(e),
            o,
          );
        }
        Vote(e, o) {
          return this.rpc.unary(t.MsgVoteDesc, t.MsgVote.fromPartial(e), o);
        }
        VoteWeighted(e, o) {
          return this.rpc.unary(
            t.MsgVoteWeightedDesc,
            t.MsgVoteWeighted.fromPartial(e),
            o,
          );
        }
        Deposit(e, o) {
          return this.rpc.unary(
            t.MsgDepositDesc,
            t.MsgDeposit.fromPartial(e),
            o,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.gov.v1beta1.Msg" }),
        (t.MsgSubmitProposalDesc = {
          methodName: "SubmitProposal",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgSubmitProposal.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgSubmitProposalResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgVoteDesc = {
          methodName: "Vote",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgVote.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgVoteResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgVoteWeightedDesc = {
          methodName: "VoteWeighted",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgVoteWeighted.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgVoteWeightedResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgDepositDesc = {
          methodName: "Deposit",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgDeposit.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgDepositResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }));
      class GrpcWebImpl {
        constructor(e, t) {
          ((this.host = e), (this.options = t));
        }
        unary(e, t, o) {
          var n;
          const r = Object.assign(Object.assign({}, t), e.requestType),
            s =
              o && this.options.metadata
                ? new l.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (n = this.options) || void 0 === n
                          ? void 0
                          : n.metadata.headersMap,
                      ),
                      null === o || void 0 === o ? void 0 : o.headersMap,
                    ),
                  )
                : o || this.options.metadata;
          return new Promise((t, o) => {
            i.grpc.unary(e, {
              request: r,
              host: this.host,
              metadata: s,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === i.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), o(t));
                }
              },
            });
          });
        }
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    3436: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompactBitArray = t.MultiSignature = t.protobufPackage = void 0));
        const r = n(o(2754)),
          i = n(o(2755));
        t.protobufPackage = "cosmos.crypto.multisig.v1beta1";
        const s = {};
        t.MultiSignature = {
          encode(e, t = i.default.Writer.create()) {
            for (const o of e.signatures) t.uint32(10).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, s);
            r.signatures = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.signatures.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
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
            const t = Object.assign({}, s);
            if (
              ((t.signatures = []),
              void 0 !== e.signatures && null !== e.signatures)
            )
              for (const o of e.signatures) t.signatures.push(o);
            return t;
          },
        };
        const a = { extraBitsStored: 0 };
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
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, a);
            r.elems = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.extraBitsStored = o.uint32();
                  break;
                case 2:
                  r.elems = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, a);
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
            const t = Object.assign({}, a);
            return (
              void 0 !== e.extraBitsStored && null !== e.extraBitsStored
                ? (t.extraBitsStored = e.extraBitsStored)
                : (t.extraBitsStored = 0),
              void 0 !== e.elems && null !== e.elems
                ? (t.elems = e.elems)
                : (t.elems = new Uint8Array()),
              t
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
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const c =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function p(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return c(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, o(13));
    },
    3669: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgFundCommunityPoolDesc =
          t.MsgWithdrawValidatorCommissionDesc =
          t.MsgWithdrawDelegatorRewardDesc =
          t.MsgSetWithdrawAddressDesc =
          t.MsgDesc =
          t.MsgClientImpl =
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
      const r = n(o(2754)),
        i = o(2889),
        s = n(o(2755)),
        a = o(2890),
        d = o(2840);
      t.protobufPackage = "cosmos.distribution.v1beta1";
      const l = { delegatorAddress: "", withdrawAddress: "" };
      t.MsgSetWithdrawAddress = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.withdrawAddress && t.uint32(18).string(e.withdrawAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.delegatorAddress = o.string();
                break;
              case 2:
                r.withdrawAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
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
          const t = Object.assign({}, l);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.withdrawAddress && null !== e.withdrawAddress
              ? (t.withdrawAddress = e.withdrawAddress)
              : (t.withdrawAddress = ""),
            t
          );
        },
      };
      const u = {};
      t.MsgSetWithdrawAddressResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
      const c = { delegatorAddress: "", validatorAddress: "" };
      t.MsgWithdrawDelegatorReward = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.delegatorAddress &&
              t.uint32(10).string(e.delegatorAddress),
            "" !== e.validatorAddress &&
              t.uint32(18).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.delegatorAddress = o.string();
                break;
              case 2:
                r.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
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
          const t = Object.assign({}, c);
          return (
            void 0 !== e.delegatorAddress && null !== e.delegatorAddress
              ? (t.delegatorAddress = e.delegatorAddress)
              : (t.delegatorAddress = ""),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            t
          );
        },
      };
      const p = {};
      t.MsgWithdrawDelegatorRewardResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
      const f = { validatorAddress: "" };
      t.MsgWithdrawValidatorCommission = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, f);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.validatorAddress = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
          const t = Object.assign({}, f);
          return (
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            t
          );
        },
      };
      const g = {};
      t.MsgWithdrawValidatorCommissionResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, g);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          return t;
        },
      };
      const m = { depositor: "" };
      t.MsgFundCommunityPool = {
        encode(e, t) {
          void 0 === t && (t = s.default.Writer.create());
          for (const o of e.amount)
            d.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return ("" !== e.depositor && t.uint32(18).string(e.depositor), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, m);
          r.amount = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.amount.push(d.Coin.decode(o, o.uint32()));
                break;
              case 2:
                r.depositor = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
          if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
            for (const o of e.amount) t.amount.push(d.Coin.fromJSON(o));
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
                  e ? d.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            void 0 !== e.depositor && (t.depositor = e.depositor),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          if (((t.amount = []), void 0 !== e.amount && null !== e.amount))
            for (const o of e.amount) t.amount.push(d.Coin.fromPartial(o));
          return (
            void 0 !== e.depositor && null !== e.depositor
              ? (t.depositor = e.depositor)
              : (t.depositor = ""),
            t
          );
        },
      };
      const v = {};
      t.MsgFundCommunityPoolResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, v);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
        SetWithdrawAddress(e, o) {
          return this.rpc.unary(
            t.MsgSetWithdrawAddressDesc,
            t.MsgSetWithdrawAddress.fromPartial(e),
            o,
          );
        }
        WithdrawDelegatorReward(e, o) {
          return this.rpc.unary(
            t.MsgWithdrawDelegatorRewardDesc,
            t.MsgWithdrawDelegatorReward.fromPartial(e),
            o,
          );
        }
        WithdrawValidatorCommission(e, o) {
          return this.rpc.unary(
            t.MsgWithdrawValidatorCommissionDesc,
            t.MsgWithdrawValidatorCommission.fromPartial(e),
            o,
          );
        }
        FundCommunityPool(e, o) {
          return this.rpc.unary(
            t.MsgFundCommunityPoolDesc,
            t.MsgFundCommunityPool.fromPartial(e),
            o,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.distribution.v1beta1.Msg" }),
        (t.MsgSetWithdrawAddressDesc = {
          methodName: "SetWithdrawAddress",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgSetWithdrawAddress.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgSetWithdrawAddressResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgWithdrawDelegatorRewardDesc = {
          methodName: "WithdrawDelegatorReward",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgWithdrawDelegatorReward.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign(
                  {},
                  t.MsgWithdrawDelegatorRewardResponse.decode(e),
                ),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgWithdrawValidatorCommissionDesc = {
          methodName: "WithdrawValidatorCommission",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgWithdrawValidatorCommission.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign(
                  {},
                  t.MsgWithdrawValidatorCommissionResponse.decode(e),
                ),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgFundCommunityPoolDesc = {
          methodName: "FundCommunityPool",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgFundCommunityPool.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgFundCommunityPoolResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }));
      class GrpcWebImpl {
        constructor(e, t) {
          ((this.host = e), (this.options = t));
        }
        unary(e, t, o) {
          var n;
          const r = Object.assign(Object.assign({}, t), e.requestType),
            s =
              o && this.options.metadata
                ? new a.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (n = this.options) || void 0 === n
                          ? void 0
                          : n.metadata.headersMap,
                      ),
                      null === o || void 0 === o ? void 0 : o.headersMap,
                    ),
                  )
                : o || this.options.metadata;
          return new Promise((t, o) => {
            i.grpc.unary(e, {
              request: r,
              host: this.host,
              metadata: s,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === i.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), o(t));
                }
              },
            });
          });
        }
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    3671: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Grant =
          t.AllowedMsgAllowance =
          t.PeriodicAllowance =
          t.BasicAllowance =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(3296),
        a = o(2759),
        d = o(2993),
        l = o(2840);
      t.protobufPackage = "cosmos.feegrant.v1beta1";
      const u = {};
      t.BasicAllowance = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.spendLimit)
            l.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return (
            void 0 !== e.expiration &&
              d.Timestamp.encode(g(e.expiration), t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          r.spendLimit = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.spendLimit.push(l.Coin.decode(o, o.uint32()));
                break;
              case 2:
                r.expiration = m(d.Timestamp.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.spendLimit = []),
            void 0 !== e.spendLimit && null !== e.spendLimit)
          )
            for (const o of e.spendLimit) t.spendLimit.push(l.Coin.fromJSON(o));
          return (
            void 0 !== e.expiration && null !== e.expiration
              ? (t.expiration = v(e.expiration))
              : (t.expiration = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.spendLimit
              ? (t.spendLimit = e.spendLimit.map((e) =>
                  e ? l.Coin.toJSON(e) : void 0,
                ))
              : (t.spendLimit = []),
            void 0 !== e.expiration &&
              (t.expiration = e.expiration.toISOString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (
            ((t.spendLimit = []),
            void 0 !== e.spendLimit && null !== e.spendLimit)
          )
            for (const o of e.spendLimit)
              t.spendLimit.push(l.Coin.fromPartial(o));
          return (
            void 0 !== e.expiration && null !== e.expiration
              ? (t.expiration = e.expiration)
              : (t.expiration = void 0),
            t
          );
        },
      };
      const c = {};
      t.PeriodicAllowance = {
        encode(e, o) {
          (void 0 === o && (o = i.default.Writer.create()),
            void 0 !== e.basic &&
              t.BasicAllowance.encode(e.basic, o.uint32(10).fork()).ldelim(),
            void 0 !== e.period &&
              s.Duration.encode(e.period, o.uint32(18).fork()).ldelim());
          for (const t of e.periodSpendLimit)
            l.Coin.encode(t, o.uint32(26).fork()).ldelim();
          for (const t of e.periodCanSpend)
            l.Coin.encode(t, o.uint32(34).fork()).ldelim();
          return (
            void 0 !== e.periodReset &&
              d.Timestamp.encode(
                g(e.periodReset),
                o.uint32(42).fork(),
              ).ldelim(),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === o ? n.len : n.pos + o;
          const a = Object.assign({}, c);
          ((a.periodSpendLimit = []), (a.periodCanSpend = []));
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                a.basic = t.BasicAllowance.decode(n, n.uint32());
                break;
              case 2:
                a.period = s.Duration.decode(n, n.uint32());
                break;
              case 3:
                a.periodSpendLimit.push(l.Coin.decode(n, n.uint32()));
                break;
              case 4:
                a.periodCanSpend.push(l.Coin.decode(n, n.uint32()));
                break;
              case 5:
                a.periodReset = m(d.Timestamp.decode(n, n.uint32()));
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return a;
        },
        fromJSON(e) {
          const o = Object.assign({}, c);
          if (
            ((o.periodSpendLimit = []),
            (o.periodCanSpend = []),
            void 0 !== e.basic && null !== e.basic
              ? (o.basic = t.BasicAllowance.fromJSON(e.basic))
              : (o.basic = void 0),
            void 0 !== e.period && null !== e.period
              ? (o.period = s.Duration.fromJSON(e.period))
              : (o.period = void 0),
            void 0 !== e.periodSpendLimit && null !== e.periodSpendLimit)
          )
            for (const t of e.periodSpendLimit)
              o.periodSpendLimit.push(l.Coin.fromJSON(t));
          if (void 0 !== e.periodCanSpend && null !== e.periodCanSpend)
            for (const t of e.periodCanSpend)
              o.periodCanSpend.push(l.Coin.fromJSON(t));
          return (
            void 0 !== e.periodReset && null !== e.periodReset
              ? (o.periodReset = v(e.periodReset))
              : (o.periodReset = void 0),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.basic &&
              (o.basic = e.basic ? t.BasicAllowance.toJSON(e.basic) : void 0),
            void 0 !== e.period &&
              (o.period = e.period ? s.Duration.toJSON(e.period) : void 0),
            e.periodSpendLimit
              ? (o.periodSpendLimit = e.periodSpendLimit.map((e) =>
                  e ? l.Coin.toJSON(e) : void 0,
                ))
              : (o.periodSpendLimit = []),
            e.periodCanSpend
              ? (o.periodCanSpend = e.periodCanSpend.map((e) =>
                  e ? l.Coin.toJSON(e) : void 0,
                ))
              : (o.periodCanSpend = []),
            void 0 !== e.periodReset &&
              (o.periodReset = e.periodReset.toISOString()),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, c);
          if (
            ((o.periodSpendLimit = []),
            (o.periodCanSpend = []),
            void 0 !== e.basic && null !== e.basic
              ? (o.basic = t.BasicAllowance.fromPartial(e.basic))
              : (o.basic = void 0),
            void 0 !== e.period && null !== e.period
              ? (o.period = s.Duration.fromPartial(e.period))
              : (o.period = void 0),
            void 0 !== e.periodSpendLimit && null !== e.periodSpendLimit)
          )
            for (const t of e.periodSpendLimit)
              o.periodSpendLimit.push(l.Coin.fromPartial(t));
          if (void 0 !== e.periodCanSpend && null !== e.periodCanSpend)
            for (const t of e.periodCanSpend)
              o.periodCanSpend.push(l.Coin.fromPartial(t));
          return (
            void 0 !== e.periodReset && null !== e.periodReset
              ? (o.periodReset = e.periodReset)
              : (o.periodReset = void 0),
            o
          );
        },
      };
      const p = { allowedMessages: "" };
      t.AllowedMsgAllowance = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.allowance &&
              a.Any.encode(e.allowance, t.uint32(10).fork()).ldelim());
          for (const o of e.allowedMessages) t.uint32(18).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          r.allowedMessages = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.allowance = a.Any.decode(o, o.uint32());
                break;
              case 2:
                r.allowedMessages.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          if (
            ((t.allowedMessages = []),
            void 0 !== e.allowance && null !== e.allowance
              ? (t.allowance = a.Any.fromJSON(e.allowance))
              : (t.allowance = void 0),
            void 0 !== e.allowedMessages && null !== e.allowedMessages)
          )
            for (const o of e.allowedMessages)
              t.allowedMessages.push(String(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.allowance &&
              (t.allowance = e.allowance ? a.Any.toJSON(e.allowance) : void 0),
            e.allowedMessages
              ? (t.allowedMessages = e.allowedMessages.map((e) => e))
              : (t.allowedMessages = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          if (
            ((t.allowedMessages = []),
            void 0 !== e.allowance && null !== e.allowance
              ? (t.allowance = a.Any.fromPartial(e.allowance))
              : (t.allowance = void 0),
            void 0 !== e.allowedMessages && null !== e.allowedMessages)
          )
            for (const o of e.allowedMessages) t.allowedMessages.push(o);
          return t;
        },
      };
      const f = { granter: "", grantee: "" };
      function g(e) {
        const t = h(e.getTime() / 1e3),
          o = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: o };
      }
      function m(e) {
        let t = 1e3 * e.seconds.toNumber();
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function v(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : m(d.Timestamp.fromJSON(e));
      }
      function h(e) {
        return r.default.fromNumber(e);
      }
      ((t.Grant = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.granter && t.uint32(10).string(e.granter),
            "" !== e.grantee && t.uint32(18).string(e.grantee),
            void 0 !== e.allowance &&
              a.Any.encode(e.allowance, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, f);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.granter = o.string();
                break;
              case 2:
                r.grantee = o.string();
                break;
              case 3:
                r.allowance = a.Any.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = String(e.granter))
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = String(e.grantee))
              : (t.grantee = ""),
            void 0 !== e.allowance && null !== e.allowance
              ? (t.allowance = a.Any.fromJSON(e.allowance))
              : (t.allowance = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.granter && (t.granter = e.granter),
            void 0 !== e.grantee && (t.grantee = e.grantee),
            void 0 !== e.allowance &&
              (t.allowance = e.allowance ? a.Any.toJSON(e.allowance) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = e.granter)
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = e.grantee)
              : (t.grantee = ""),
            void 0 !== e.allowance && null !== e.allowance
              ? (t.allowance = a.Any.fromPartial(e.allowance))
              : (t.allowance = void 0),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    3674: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrantAuthorization =
          t.Grant =
          t.GenericAuthorization =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(2759),
        a = o(2993);
      t.protobufPackage = "cosmos.authz.v1beta1";
      const d = { msg: "" };
      t.GenericAuthorization = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.msg && t.uint32(10).string(e.msg),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.msg = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.msg && null !== e.msg
              ? (t.msg = String(e.msg))
              : (t.msg = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (void 0 !== e.msg && (t.msg = e.msg), t);
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.msg && null !== e.msg ? (t.msg = e.msg) : (t.msg = ""),
            t
          );
        },
      };
      const l = {};
      t.Grant = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            void 0 !== e.authorization &&
              s.Any.encode(e.authorization, t.uint32(10).fork()).ldelim(),
            void 0 !== e.expiration &&
              a.Timestamp.encode(c(e.expiration), t.uint32(18).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.authorization = s.Any.decode(o, o.uint32());
                break;
              case 2:
                r.expiration = p(a.Timestamp.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.authorization && null !== e.authorization
              ? (t.authorization = s.Any.fromJSON(e.authorization))
              : (t.authorization = void 0),
            void 0 !== e.expiration && null !== e.expiration
              ? (t.expiration = f(e.expiration))
              : (t.expiration = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.authorization &&
              (t.authorization = e.authorization
                ? s.Any.toJSON(e.authorization)
                : void 0),
            void 0 !== e.expiration &&
              (t.expiration = e.expiration.toISOString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.authorization && null !== e.authorization
              ? (t.authorization = s.Any.fromPartial(e.authorization))
              : (t.authorization = void 0),
            void 0 !== e.expiration && null !== e.expiration
              ? (t.expiration = e.expiration)
              : (t.expiration = void 0),
            t
          );
        },
      };
      const u = { granter: "", grantee: "" };
      function c(e) {
        const t = g(e.getTime() / 1e3),
          o = (e.getTime() % 1e3) * 1e6;
        return { seconds: t, nanos: o };
      }
      function p(e) {
        let t = 1e3 * e.seconds.toNumber();
        return ((t += e.nanos / 1e6), new Date(t));
      }
      function f(e) {
        return e instanceof Date
          ? e
          : "string" === typeof e
            ? new Date(e)
            : p(a.Timestamp.fromJSON(e));
      }
      function g(e) {
        return r.default.fromNumber(e);
      }
      ((t.GrantAuthorization = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.granter && t.uint32(10).string(e.granter),
            "" !== e.grantee && t.uint32(18).string(e.grantee),
            void 0 !== e.authorization &&
              s.Any.encode(e.authorization, t.uint32(26).fork()).ldelim(),
            void 0 !== e.expiration &&
              a.Timestamp.encode(c(e.expiration), t.uint32(34).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.granter = o.string();
                break;
              case 2:
                r.grantee = o.string();
                break;
              case 3:
                r.authorization = s.Any.decode(o, o.uint32());
                break;
              case 4:
                r.expiration = p(a.Timestamp.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = String(e.granter))
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = String(e.grantee))
              : (t.grantee = ""),
            void 0 !== e.authorization && null !== e.authorization
              ? (t.authorization = s.Any.fromJSON(e.authorization))
              : (t.authorization = void 0),
            void 0 !== e.expiration && null !== e.expiration
              ? (t.expiration = f(e.expiration))
              : (t.expiration = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.granter && (t.granter = e.granter),
            void 0 !== e.grantee && (t.grantee = e.grantee),
            void 0 !== e.authorization &&
              (t.authorization = e.authorization
                ? s.Any.toJSON(e.authorization)
                : void 0),
            void 0 !== e.expiration &&
              (t.expiration = e.expiration.toISOString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = e.granter)
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = e.grantee)
              : (t.grantee = ""),
            void 0 !== e.authorization && null !== e.authorization
              ? (t.authorization = s.Any.fromPartial(e.authorization))
              : (t.authorization = void 0),
            void 0 !== e.expiration && null !== e.expiration
              ? (t.expiration = e.expiration)
              : (t.expiration = void 0),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    3675: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.GrpcWebImpl =
            t.MsgRevokeDesc =
            t.MsgExecDesc =
            t.MsgGrantDesc =
            t.MsgDesc =
            t.MsgClientImpl =
            t.MsgRevokeResponse =
            t.MsgRevoke =
            t.MsgGrantResponse =
            t.MsgExec =
            t.MsgExecResponse =
            t.MsgGrant =
            t.protobufPackage =
              void 0));
        const r = n(o(2754)),
          i = o(2889),
          s = n(o(2755)),
          a = o(3674),
          d = o(2890),
          l = o(2759);
        t.protobufPackage = "cosmos.authz.v1beta1";
        const u = { granter: "", grantee: "" };
        t.MsgGrant = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.granter && t.uint32(10).string(e.granter),
              "" !== e.grantee && t.uint32(18).string(e.grantee),
              void 0 !== e.grant &&
                a.Grant.encode(e.grant, t.uint32(26).fork()).ldelim(),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, u);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.granter = o.string();
                  break;
                case 2:
                  r.grantee = o.string();
                  break;
                case 3:
                  r.grant = a.Grant.decode(o, o.uint32());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = String(e.granter))
                : (t.granter = ""),
              void 0 !== e.grantee && null !== e.grantee
                ? (t.grantee = String(e.grantee))
                : (t.grantee = ""),
              void 0 !== e.grant && null !== e.grant
                ? (t.grant = a.Grant.fromJSON(e.grant))
                : (t.grant = void 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.granter && (t.granter = e.granter),
              void 0 !== e.grantee && (t.grantee = e.grantee),
              void 0 !== e.grant &&
                (t.grant = e.grant ? a.Grant.toJSON(e.grant) : void 0),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, u);
            return (
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = e.granter)
                : (t.granter = ""),
              void 0 !== e.grantee && null !== e.grantee
                ? (t.grantee = e.grantee)
                : (t.grantee = ""),
              void 0 !== e.grant && null !== e.grant
                ? (t.grant = a.Grant.fromPartial(e.grant))
                : (t.grant = void 0),
              t
            );
          },
        };
        const c = {};
        t.MsgExecResponse = {
          encode(e, t) {
            void 0 === t && (t = s.default.Writer.create());
            for (const o of e.results) t.uint32(10).bytes(o);
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, c);
            r.results = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.results.push(o.bytes());
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            if (((t.results = []), void 0 !== e.results && null !== e.results))
              for (const o of e.results) t.results.push(b(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              e.results
                ? (t.results = e.results.map((e) =>
                    S(void 0 !== e ? e : new Uint8Array()),
                  ))
                : (t.results = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            if (((t.results = []), void 0 !== e.results && null !== e.results))
              for (const o of e.results) t.results.push(o);
            return t;
          },
        };
        const p = { grantee: "" };
        t.MsgExec = {
          encode(e, t) {
            (void 0 === t && (t = s.default.Writer.create()),
              "" !== e.grantee && t.uint32(10).string(e.grantee));
            for (const o of e.msgs)
              l.Any.encode(o, t.uint32(18).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, p);
            r.msgs = [];
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.grantee = o.string();
                  break;
                case 2:
                  r.msgs.push(l.Any.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            if (
              ((t.msgs = []),
              void 0 !== e.grantee && null !== e.grantee
                ? (t.grantee = String(e.grantee))
                : (t.grantee = ""),
              void 0 !== e.msgs && null !== e.msgs)
            )
              for (const o of e.msgs) t.msgs.push(l.Any.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.grantee && (t.grantee = e.grantee),
              e.msgs
                ? (t.msgs = e.msgs.map((e) => (e ? l.Any.toJSON(e) : void 0)))
                : (t.msgs = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            if (
              ((t.msgs = []),
              void 0 !== e.grantee && null !== e.grantee
                ? (t.grantee = e.grantee)
                : (t.grantee = ""),
              void 0 !== e.msgs && null !== e.msgs)
            )
              for (const o of e.msgs) t.msgs.push(l.Any.fromPartial(o));
            return t;
          },
        };
        const f = {};
        t.MsgGrantResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, f);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            return t;
          },
        };
        const g = { granter: "", grantee: "", msgTypeUrl: "" };
        t.MsgRevoke = {
          encode(e, t) {
            return (
              void 0 === t && (t = s.default.Writer.create()),
              "" !== e.granter && t.uint32(10).string(e.granter),
              "" !== e.grantee && t.uint32(18).string(e.grantee),
              "" !== e.msgTypeUrl && t.uint32(26).string(e.msgTypeUrl),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, g);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.granter = o.string();
                  break;
                case 2:
                  r.grantee = o.string();
                  break;
                case 3:
                  r.msgTypeUrl = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = String(e.granter))
                : (t.granter = ""),
              void 0 !== e.grantee && null !== e.grantee
                ? (t.grantee = String(e.grantee))
                : (t.grantee = ""),
              void 0 !== e.msgTypeUrl && null !== e.msgTypeUrl
                ? (t.msgTypeUrl = String(e.msgTypeUrl))
                : (t.msgTypeUrl = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.granter && (t.granter = e.granter),
              void 0 !== e.grantee && (t.grantee = e.grantee),
              void 0 !== e.msgTypeUrl && (t.msgTypeUrl = e.msgTypeUrl),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, g);
            return (
              void 0 !== e.granter && null !== e.granter
                ? (t.granter = e.granter)
                : (t.granter = ""),
              void 0 !== e.grantee && null !== e.grantee
                ? (t.grantee = e.grantee)
                : (t.grantee = ""),
              void 0 !== e.msgTypeUrl && null !== e.msgTypeUrl
                ? (t.msgTypeUrl = e.msgTypeUrl)
                : (t.msgTypeUrl = ""),
              t
            );
          },
        };
        const m = {};
        t.MsgRevokeResponse = {
          encode(e, t) {
            return (void 0 === t && (t = s.default.Writer.create()), t);
          },
          decode(e, t) {
            const o =
              e instanceof s.default.Reader ? e : new s.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, m);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return t;
          },
          toJSON(e) {
            const t = {};
            return t;
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return t;
          },
        };
        class MsgClientImpl {
          constructor(e) {
            ((this.rpc = e),
              (this.Grant = this.Grant.bind(this)),
              (this.Exec = this.Exec.bind(this)),
              (this.Revoke = this.Revoke.bind(this)));
          }
          Grant(e, o) {
            return this.rpc.unary(t.MsgGrantDesc, t.MsgGrant.fromPartial(e), o);
          }
          Exec(e, o) {
            return this.rpc.unary(t.MsgExecDesc, t.MsgExec.fromPartial(e), o);
          }
          Revoke(e, o) {
            return this.rpc.unary(
              t.MsgRevokeDesc,
              t.MsgRevoke.fromPartial(e),
              o,
            );
          }
        }
        ((t.MsgClientImpl = MsgClientImpl),
          (t.MsgDesc = { serviceName: "cosmos.authz.v1beta1.Msg" }),
          (t.MsgGrantDesc = {
            methodName: "Grant",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgGrant.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgGrantResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgExecDesc = {
            methodName: "Exec",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgExec.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgExecResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }),
          (t.MsgRevokeDesc = {
            methodName: "Revoke",
            service: t.MsgDesc,
            requestStream: !1,
            responseStream: !1,
            requestType: {
              serializeBinary() {
                return t.MsgRevoke.encode(this).finish();
              },
            },
            responseType: {
              deserializeBinary(e) {
                return Object.assign(
                  Object.assign({}, t.MsgRevokeResponse.decode(e)),
                  {
                    toObject() {
                      return this;
                    },
                  },
                );
              },
            },
          }));
        class GrpcWebImpl {
          constructor(e, t) {
            ((this.host = e), (this.options = t));
          }
          unary(e, t, o) {
            var n;
            const r = Object.assign(Object.assign({}, t), e.requestType),
              s =
                o && this.options.metadata
                  ? new d.BrowserHeaders(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (n = this.options) || void 0 === n
                            ? void 0
                            : n.metadata.headersMap,
                        ),
                        null === o || void 0 === o ? void 0 : o.headersMap,
                      ),
                    )
                  : o || this.options.metadata;
            return new Promise((t, o) => {
              i.grpc.unary(e, {
                request: r,
                host: this.host,
                metadata: s,
                transport: this.options.transport,
                debug: this.options.debug,
                onEnd: function (e) {
                  if (e.status === i.grpc.Code.OK) t(e.message);
                  else {
                    const t = new Error(e.statusMessage);
                    ((t.code = e.status), (t.metadata = e.trailers), o(t));
                  }
                },
              });
            });
          }
        }
        t.GrpcWebImpl = GrpcWebImpl;
        var v = (() => {
          if ("undefined" !== typeof v) return v;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const h =
          v.atob || ((e) => v.Buffer.from(e, "base64").toString("binary"));
        function b(e) {
          const t = h(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const O =
          v.btoa || ((e) => v.Buffer.from(e, "binary").toString("base64"));
        function S(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return O(t.join(""));
        }
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure());
      }).call(this, o(13));
    },
    4303: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgMultiSendDesc =
          t.MsgSendDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgMultiSendResponse =
          t.MsgMultiSend =
          t.MsgSendResponse =
          t.MsgSend =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = o(2889),
        s = n(o(2755)),
        a = o(2890),
        d = o(2840),
        l = o(4304);
      t.protobufPackage = "cosmos.bank.v1beta1";
      const u = { fromAddress: "", toAddress: "" };
      t.MsgSend = {
        encode(e, t) {
          (void 0 === t && (t = s.default.Writer.create()),
            "" !== e.fromAddress && t.uint32(10).string(e.fromAddress),
            "" !== e.toAddress && t.uint32(18).string(e.toAddress));
          for (const o of e.amount)
            d.Coin.encode(o, t.uint32(26).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          r.amount = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.fromAddress = o.string();
                break;
              case 2:
                r.toAddress = o.string();
                break;
              case 3:
                r.amount.push(d.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.amount = []),
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = String(e.fromAddress))
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = String(e.toAddress))
              : (t.toAddress = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(d.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.fromAddress && (t.fromAddress = e.fromAddress),
            void 0 !== e.toAddress && (t.toAddress = e.toAddress),
            e.amount
              ? (t.amount = e.amount.map((e) =>
                  e ? d.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (
            ((t.amount = []),
            void 0 !== e.fromAddress && null !== e.fromAddress
              ? (t.fromAddress = e.fromAddress)
              : (t.fromAddress = ""),
            void 0 !== e.toAddress && null !== e.toAddress
              ? (t.toAddress = e.toAddress)
              : (t.toAddress = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(d.Coin.fromPartial(o));
          return t;
        },
      };
      const c = {};
      t.MsgSendResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return t;
        },
      };
      const p = {};
      t.MsgMultiSend = {
        encode(e, t) {
          void 0 === t && (t = s.default.Writer.create());
          for (const o of e.inputs)
            l.Input.encode(o, t.uint32(10).fork()).ldelim();
          for (const o of e.outputs)
            l.Output.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          ((r.inputs = []), (r.outputs = []));
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.inputs.push(l.Input.decode(o, o.uint32()));
                break;
              case 2:
                r.outputs.push(l.Output.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          if (
            ((t.inputs = []),
            (t.outputs = []),
            void 0 !== e.inputs && null !== e.inputs)
          )
            for (const o of e.inputs) t.inputs.push(l.Input.fromJSON(o));
          if (void 0 !== e.outputs && null !== e.outputs)
            for (const o of e.outputs) t.outputs.push(l.Output.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.inputs
              ? (t.inputs = e.inputs.map((e) =>
                  e ? l.Input.toJSON(e) : void 0,
                ))
              : (t.inputs = []),
            e.outputs
              ? (t.outputs = e.outputs.map((e) =>
                  e ? l.Output.toJSON(e) : void 0,
                ))
              : (t.outputs = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          if (
            ((t.inputs = []),
            (t.outputs = []),
            void 0 !== e.inputs && null !== e.inputs)
          )
            for (const o of e.inputs) t.inputs.push(l.Input.fromPartial(o));
          if (void 0 !== e.outputs && null !== e.outputs)
            for (const o of e.outputs) t.outputs.push(l.Output.fromPartial(o));
          return t;
        },
      };
      const f = {};
      t.MsgMultiSendResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, f);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, f);
          return t;
        },
        toJSON(e) {
          const t = {};
          return t;
        },
        fromPartial(e) {
          const t = Object.assign({}, f);
          return t;
        },
      };
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.Send = this.Send.bind(this)),
            (this.MultiSend = this.MultiSend.bind(this)));
        }
        Send(e, o) {
          return this.rpc.unary(t.MsgSendDesc, t.MsgSend.fromPartial(e), o);
        }
        MultiSend(e, o) {
          return this.rpc.unary(
            t.MsgMultiSendDesc,
            t.MsgMultiSend.fromPartial(e),
            o,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.bank.v1beta1.Msg" }),
        (t.MsgSendDesc = {
          methodName: "Send",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgSend.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgSendResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgMultiSendDesc = {
          methodName: "MultiSend",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgMultiSend.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgMultiSendResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }));
      class GrpcWebImpl {
        constructor(e, t) {
          ((this.host = e), (this.options = t));
        }
        unary(e, t, o) {
          var n;
          const r = Object.assign(Object.assign({}, t), e.requestType),
            s =
              o && this.options.metadata
                ? new a.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (n = this.options) || void 0 === n
                          ? void 0
                          : n.metadata.headersMap,
                      ),
                      null === o || void 0 === o ? void 0 : o.headersMap,
                    ),
                  )
                : o || this.options.metadata;
          return new Promise((t, o) => {
            i.grpc.unary(e, {
              request: r,
              host: this.host,
              metadata: s,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === i.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), o(t));
                }
              },
            });
          });
        }
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    4304: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Metadata =
          t.DenomUnit =
          t.Supply =
          t.Output =
          t.Input =
          t.SendEnabled =
          t.Params =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(2840);
      t.protobufPackage = "cosmos.bank.v1beta1";
      const a = { defaultSendEnabled: !1 };
      t.Params = {
        encode(e, o) {
          void 0 === o && (o = i.default.Writer.create());
          for (const n of e.sendEnabled)
            t.SendEnabled.encode(n, o.uint32(10).fork()).ldelim();
          return (
            !0 === e.defaultSendEnabled &&
              o.uint32(16).bool(e.defaultSendEnabled),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === o ? n.len : n.pos + o;
          const s = Object.assign({}, a);
          s.sendEnabled = [];
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.sendEnabled.push(t.SendEnabled.decode(n, n.uint32()));
                break;
              case 2:
                s.defaultSendEnabled = n.bool();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const o = Object.assign({}, a);
          if (
            ((o.sendEnabled = []),
            void 0 !== e.sendEnabled && null !== e.sendEnabled)
          )
            for (const n of e.sendEnabled)
              o.sendEnabled.push(t.SendEnabled.fromJSON(n));
          return (
            void 0 !== e.defaultSendEnabled && null !== e.defaultSendEnabled
              ? (o.defaultSendEnabled = Boolean(e.defaultSendEnabled))
              : (o.defaultSendEnabled = !1),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            e.sendEnabled
              ? (o.sendEnabled = e.sendEnabled.map((e) =>
                  e ? t.SendEnabled.toJSON(e) : void 0,
                ))
              : (o.sendEnabled = []),
            void 0 !== e.defaultSendEnabled &&
              (o.defaultSendEnabled = e.defaultSendEnabled),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, a);
          if (
            ((o.sendEnabled = []),
            void 0 !== e.sendEnabled && null !== e.sendEnabled)
          )
            for (const n of e.sendEnabled)
              o.sendEnabled.push(t.SendEnabled.fromPartial(n));
          return (
            void 0 !== e.defaultSendEnabled && null !== e.defaultSendEnabled
              ? (o.defaultSendEnabled = e.defaultSendEnabled)
              : (o.defaultSendEnabled = !1),
            o
          );
        },
      };
      const d = { denom: "", enabled: !1 };
      t.SendEnabled = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            !0 === e.enabled && t.uint32(16).bool(e.enabled),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.denom = o.string();
                break;
              case 2:
                r.enabled = o.bool();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.enabled && null !== e.enabled
              ? (t.enabled = Boolean(e.enabled))
              : (t.enabled = !1),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.enabled && (t.enabled = e.enabled),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.enabled && null !== e.enabled
              ? (t.enabled = e.enabled)
              : (t.enabled = !1),
            t
          );
        },
      };
      const l = { address: "" };
      t.Input = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address));
          for (const o of e.coins)
            s.Coin.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          r.coins = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.address = o.string();
                break;
              case 2:
                r.coins.push(s.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          if (
            ((t.coins = []),
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const o of e.coins) t.coins.push(s.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            e.coins
              ? (t.coins = e.coins.map((e) => (e ? s.Coin.toJSON(e) : void 0)))
              : (t.coins = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          if (
            ((t.coins = []),
            void 0 !== e.address && null !== e.address
              ? (t.address = e.address)
              : (t.address = ""),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const o of e.coins) t.coins.push(s.Coin.fromPartial(o));
          return t;
        },
      };
      const u = { address: "" };
      t.Output = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address));
          for (const o of e.coins)
            s.Coin.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          r.coins = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.address = o.string();
                break;
              case 2:
                r.coins.push(s.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.coins = []),
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const o of e.coins) t.coins.push(s.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            e.coins
              ? (t.coins = e.coins.map((e) => (e ? s.Coin.toJSON(e) : void 0)))
              : (t.coins = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, u);
          if (
            ((t.coins = []),
            void 0 !== e.address && null !== e.address
              ? (t.address = e.address)
              : (t.address = ""),
            void 0 !== e.coins && null !== e.coins)
          )
            for (const o of e.coins) t.coins.push(s.Coin.fromPartial(o));
          return t;
        },
      };
      const c = {};
      t.Supply = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.total)
            s.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, c);
          r.total = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.total.push(s.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (((t.total = []), void 0 !== e.total && null !== e.total))
            for (const o of e.total) t.total.push(s.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.total
              ? (t.total = e.total.map((e) => (e ? s.Coin.toJSON(e) : void 0)))
              : (t.total = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (((t.total = []), void 0 !== e.total && null !== e.total))
            for (const o of e.total) t.total.push(s.Coin.fromPartial(o));
          return t;
        },
      };
      const p = { denom: "", exponent: 0, aliases: "" };
      t.DenomUnit = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.denom && t.uint32(10).string(e.denom),
            0 !== e.exponent && t.uint32(16).uint32(e.exponent));
          for (const o of e.aliases) t.uint32(26).string(o);
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          r.aliases = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.denom = o.string();
                break;
              case 2:
                r.exponent = o.uint32();
                break;
              case 3:
                r.aliases.push(o.string());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          if (
            ((t.aliases = []),
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = String(e.denom))
              : (t.denom = ""),
            void 0 !== e.exponent && null !== e.exponent
              ? (t.exponent = Number(e.exponent))
              : (t.exponent = 0),
            void 0 !== e.aliases && null !== e.aliases)
          )
            for (const o of e.aliases) t.aliases.push(String(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.denom && (t.denom = e.denom),
            void 0 !== e.exponent && (t.exponent = e.exponent),
            e.aliases
              ? (t.aliases = e.aliases.map((e) => e))
              : (t.aliases = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          if (
            ((t.aliases = []),
            void 0 !== e.denom && null !== e.denom
              ? (t.denom = e.denom)
              : (t.denom = ""),
            void 0 !== e.exponent && null !== e.exponent
              ? (t.exponent = e.exponent)
              : (t.exponent = 0),
            void 0 !== e.aliases && null !== e.aliases)
          )
            for (const o of e.aliases) t.aliases.push(o);
          return t;
        },
      };
      const f = {
        description: "",
        base: "",
        display: "",
        name: "",
        symbol: "",
      };
      ((t.Metadata = {
        encode(e, o) {
          (void 0 === o && (o = i.default.Writer.create()),
            "" !== e.description && o.uint32(10).string(e.description));
          for (const n of e.denomUnits)
            t.DenomUnit.encode(n, o.uint32(18).fork()).ldelim();
          return (
            "" !== e.base && o.uint32(26).string(e.base),
            "" !== e.display && o.uint32(34).string(e.display),
            "" !== e.name && o.uint32(42).string(e.name),
            "" !== e.symbol && o.uint32(50).string(e.symbol),
            o
          );
        },
        decode(e, o) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === o ? n.len : n.pos + o;
          const s = Object.assign({}, f);
          s.denomUnits = [];
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.description = n.string();
                break;
              case 2:
                s.denomUnits.push(t.DenomUnit.decode(n, n.uint32()));
                break;
              case 3:
                s.base = n.string();
                break;
              case 4:
                s.display = n.string();
                break;
              case 5:
                s.name = n.string();
                break;
              case 6:
                s.symbol = n.string();
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const o = Object.assign({}, f);
          if (
            ((o.denomUnits = []),
            void 0 !== e.description && null !== e.description
              ? (o.description = String(e.description))
              : (o.description = ""),
            void 0 !== e.denomUnits && null !== e.denomUnits)
          )
            for (const n of e.denomUnits)
              o.denomUnits.push(t.DenomUnit.fromJSON(n));
          return (
            void 0 !== e.base && null !== e.base
              ? (o.base = String(e.base))
              : (o.base = ""),
            void 0 !== e.display && null !== e.display
              ? (o.display = String(e.display))
              : (o.display = ""),
            void 0 !== e.name && null !== e.name
              ? (o.name = String(e.name))
              : (o.name = ""),
            void 0 !== e.symbol && null !== e.symbol
              ? (o.symbol = String(e.symbol))
              : (o.symbol = ""),
            o
          );
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.description && (o.description = e.description),
            e.denomUnits
              ? (o.denomUnits = e.denomUnits.map((e) =>
                  e ? t.DenomUnit.toJSON(e) : void 0,
                ))
              : (o.denomUnits = []),
            void 0 !== e.base && (o.base = e.base),
            void 0 !== e.display && (o.display = e.display),
            void 0 !== e.name && (o.name = e.name),
            void 0 !== e.symbol && (o.symbol = e.symbol),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, f);
          if (
            ((o.denomUnits = []),
            void 0 !== e.description && null !== e.description
              ? (o.description = e.description)
              : (o.description = ""),
            void 0 !== e.denomUnits && null !== e.denomUnits)
          )
            for (const n of e.denomUnits)
              o.denomUnits.push(t.DenomUnit.fromPartial(n));
          return (
            void 0 !== e.base && null !== e.base
              ? (o.base = e.base)
              : (o.base = ""),
            void 0 !== e.display && null !== e.display
              ? (o.display = e.display)
              : (o.display = ""),
            void 0 !== e.name && null !== e.name
              ? (o.name = e.name)
              : (o.name = ""),
            void 0 !== e.symbol && null !== e.symbol
              ? (o.symbol = e.symbol)
              : (o.symbol = ""),
            o
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    4308: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgRevokeAllowanceDesc =
          t.MsgGrantAllowanceDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgRevokeAllowanceResponse =
          t.MsgRevokeAllowance =
          t.MsgGrantAllowanceResponse =
          t.MsgGrantAllowance =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = o(2889),
        s = n(o(2755)),
        a = o(2759),
        d = o(2890);
      t.protobufPackage = "cosmos.feegrant.v1beta1";
      const l = { granter: "", grantee: "" };
      t.MsgGrantAllowance = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.granter && t.uint32(10).string(e.granter),
            "" !== e.grantee && t.uint32(18).string(e.grantee),
            void 0 !== e.allowance &&
              a.Any.encode(e.allowance, t.uint32(26).fork()).ldelim(),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.granter = o.string();
                break;
              case 2:
                r.grantee = o.string();
                break;
              case 3:
                r.allowance = a.Any.decode(o, o.uint32());
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = String(e.granter))
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = String(e.grantee))
              : (t.grantee = ""),
            void 0 !== e.allowance && null !== e.allowance
              ? (t.allowance = a.Any.fromJSON(e.allowance))
              : (t.allowance = void 0),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.granter && (t.granter = e.granter),
            void 0 !== e.grantee && (t.grantee = e.grantee),
            void 0 !== e.allowance &&
              (t.allowance = e.allowance ? a.Any.toJSON(e.allowance) : void 0),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = e.granter)
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = e.grantee)
              : (t.grantee = ""),
            void 0 !== e.allowance && null !== e.allowance
              ? (t.allowance = a.Any.fromPartial(e.allowance))
              : (t.allowance = void 0),
            t
          );
        },
      };
      const u = {};
      t.MsgGrantAllowanceResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
      const c = { granter: "", grantee: "" };
      t.MsgRevokeAllowance = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.granter && t.uint32(10).string(e.granter),
            "" !== e.grantee && t.uint32(18).string(e.grantee),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, c);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.granter = o.string();
                break;
              case 2:
                r.grantee = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = String(e.granter))
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = String(e.grantee))
              : (t.grantee = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.granter && (t.granter = e.granter),
            void 0 !== e.grantee && (t.grantee = e.grantee),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          return (
            void 0 !== e.granter && null !== e.granter
              ? (t.granter = e.granter)
              : (t.granter = ""),
            void 0 !== e.grantee && null !== e.grantee
              ? (t.grantee = e.grantee)
              : (t.grantee = ""),
            t
          );
        },
      };
      const p = {};
      t.MsgRevokeAllowanceResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.GrantAllowance = this.GrantAllowance.bind(this)),
            (this.RevokeAllowance = this.RevokeAllowance.bind(this)));
        }
        GrantAllowance(e, o) {
          return this.rpc.unary(
            t.MsgGrantAllowanceDesc,
            t.MsgGrantAllowance.fromPartial(e),
            o,
          );
        }
        RevokeAllowance(e, o) {
          return this.rpc.unary(
            t.MsgRevokeAllowanceDesc,
            t.MsgRevokeAllowance.fromPartial(e),
            o,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.feegrant.v1beta1.Msg" }),
        (t.MsgGrantAllowanceDesc = {
          methodName: "GrantAllowance",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgGrantAllowance.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgGrantAllowanceResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }),
        (t.MsgRevokeAllowanceDesc = {
          methodName: "RevokeAllowance",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgRevokeAllowance.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgRevokeAllowanceResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }));
      class GrpcWebImpl {
        constructor(e, t) {
          ((this.host = e), (this.options = t));
        }
        unary(e, t, o) {
          var n;
          const r = Object.assign(Object.assign({}, t), e.requestType),
            s =
              o && this.options.metadata
                ? new d.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (n = this.options) || void 0 === n
                          ? void 0
                          : n.metadata.headersMap,
                      ),
                      null === o || void 0 === o ? void 0 : o.headersMap,
                    ),
                  )
                : o || this.options.metadata;
          return new Promise((t, o) => {
            i.grpc.unary(e, {
              request: r,
              host: this.host,
              metadata: s,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === i.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), o(t));
                }
              },
            });
          });
        }
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    4336: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Params =
          t.ModuleAccount =
          t.BaseAccount =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(2759);
      t.protobufPackage = "cosmos.auth.v1beta1";
      const a = {
        address: "",
        accountNumber: r.default.UZERO,
        sequence: r.default.UZERO,
      };
      t.BaseAccount = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            "" !== e.address && t.uint32(10).string(e.address),
            void 0 !== e.pubKey &&
              s.Any.encode(e.pubKey, t.uint32(18).fork()).ldelim(),
            e.accountNumber.isZero() || t.uint32(24).uint64(e.accountNumber),
            e.sequence.isZero() || t.uint32(32).uint64(e.sequence),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, a);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.address = o.string();
                break;
              case 2:
                r.pubKey = s.Any.decode(o, o.uint32());
                break;
              case 3:
                r.accountNumber = o.uint64();
                break;
              case 4:
                r.sequence = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.address && null !== e.address
              ? (t.address = String(e.address))
              : (t.address = ""),
            void 0 !== e.pubKey && null !== e.pubKey
              ? (t.pubKey = s.Any.fromJSON(e.pubKey))
              : (t.pubKey = void 0),
            void 0 !== e.accountNumber && null !== e.accountNumber
              ? (t.accountNumber = r.default.fromString(e.accountNumber))
              : (t.accountNumber = r.default.UZERO),
            void 0 !== e.sequence && null !== e.sequence
              ? (t.sequence = r.default.fromString(e.sequence))
              : (t.sequence = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.address && (t.address = e.address),
            void 0 !== e.pubKey &&
              (t.pubKey = e.pubKey ? s.Any.toJSON(e.pubKey) : void 0),
            void 0 !== e.accountNumber &&
              (t.accountNumber = (
                e.accountNumber || r.default.UZERO
              ).toString()),
            void 0 !== e.sequence &&
              (t.sequence = (e.sequence || r.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, a);
          return (
            void 0 !== e.address && null !== e.address
              ? (t.address = e.address)
              : (t.address = ""),
            void 0 !== e.pubKey && null !== e.pubKey
              ? (t.pubKey = s.Any.fromPartial(e.pubKey))
              : (t.pubKey = void 0),
            void 0 !== e.accountNumber && null !== e.accountNumber
              ? (t.accountNumber = e.accountNumber)
              : (t.accountNumber = r.default.UZERO),
            void 0 !== e.sequence && null !== e.sequence
              ? (t.sequence = e.sequence)
              : (t.sequence = r.default.UZERO),
            t
          );
        },
      };
      const d = { name: "", permissions: "" };
      t.ModuleAccount = {
        encode(e, o) {
          (void 0 === o && (o = i.default.Writer.create()),
            void 0 !== e.baseAccount &&
              t.BaseAccount.encode(e.baseAccount, o.uint32(10).fork()).ldelim(),
            "" !== e.name && o.uint32(18).string(e.name));
          for (const t of e.permissions) o.uint32(26).string(t);
          return o;
        },
        decode(e, o) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === o ? n.len : n.pos + o;
          const s = Object.assign({}, d);
          s.permissions = [];
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.baseAccount = t.BaseAccount.decode(n, n.uint32());
                break;
              case 2:
                s.name = n.string();
                break;
              case 3:
                s.permissions.push(n.string());
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const o = Object.assign({}, d);
          if (
            ((o.permissions = []),
            void 0 !== e.baseAccount && null !== e.baseAccount
              ? (o.baseAccount = t.BaseAccount.fromJSON(e.baseAccount))
              : (o.baseAccount = void 0),
            void 0 !== e.name && null !== e.name
              ? (o.name = String(e.name))
              : (o.name = ""),
            void 0 !== e.permissions && null !== e.permissions)
          )
            for (const t of e.permissions) o.permissions.push(String(t));
          return o;
        },
        toJSON(e) {
          const o = {};
          return (
            void 0 !== e.baseAccount &&
              (o.baseAccount = e.baseAccount
                ? t.BaseAccount.toJSON(e.baseAccount)
                : void 0),
            void 0 !== e.name && (o.name = e.name),
            e.permissions
              ? (o.permissions = e.permissions.map((e) => e))
              : (o.permissions = []),
            o
          );
        },
        fromPartial(e) {
          const o = Object.assign({}, d);
          if (
            ((o.permissions = []),
            void 0 !== e.baseAccount && null !== e.baseAccount
              ? (o.baseAccount = t.BaseAccount.fromPartial(e.baseAccount))
              : (o.baseAccount = void 0),
            void 0 !== e.name && null !== e.name
              ? (o.name = e.name)
              : (o.name = ""),
            void 0 !== e.permissions && null !== e.permissions)
          )
            for (const t of e.permissions) o.permissions.push(t);
          return o;
        },
      };
      const l = {
        maxMemoCharacters: r.default.UZERO,
        txSigLimit: r.default.UZERO,
        txSizeCostPerByte: r.default.UZERO,
        sigVerifyCostEd25519: r.default.UZERO,
        sigVerifyCostSecp256k1: r.default.UZERO,
      };
      ((t.Params = {
        encode(e, t) {
          return (
            void 0 === t && (t = i.default.Writer.create()),
            e.maxMemoCharacters.isZero() ||
              t.uint32(8).uint64(e.maxMemoCharacters),
            e.txSigLimit.isZero() || t.uint32(16).uint64(e.txSigLimit),
            e.txSizeCostPerByte.isZero() ||
              t.uint32(24).uint64(e.txSizeCostPerByte),
            e.sigVerifyCostEd25519.isZero() ||
              t.uint32(32).uint64(e.sigVerifyCostEd25519),
            e.sigVerifyCostSecp256k1.isZero() ||
              t.uint32(40).uint64(e.sigVerifyCostSecp256k1),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.maxMemoCharacters = o.uint64();
                break;
              case 2:
                r.txSigLimit = o.uint64();
                break;
              case 3:
                r.txSizeCostPerByte = o.uint64();
                break;
              case 4:
                r.sigVerifyCostEd25519 = o.uint64();
                break;
              case 5:
                r.sigVerifyCostSecp256k1 = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters
              ? (t.maxMemoCharacters = r.default.fromString(
                  e.maxMemoCharacters,
                ))
              : (t.maxMemoCharacters = r.default.UZERO),
            void 0 !== e.txSigLimit && null !== e.txSigLimit
              ? (t.txSigLimit = r.default.fromString(e.txSigLimit))
              : (t.txSigLimit = r.default.UZERO),
            void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte
              ? (t.txSizeCostPerByte = r.default.fromString(
                  e.txSizeCostPerByte,
                ))
              : (t.txSizeCostPerByte = r.default.UZERO),
            void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519
              ? (t.sigVerifyCostEd25519 = r.default.fromString(
                  e.sigVerifyCostEd25519,
                ))
              : (t.sigVerifyCostEd25519 = r.default.UZERO),
            void 0 !== e.sigVerifyCostSecp256k1 &&
            null !== e.sigVerifyCostSecp256k1
              ? (t.sigVerifyCostSecp256k1 = r.default.fromString(
                  e.sigVerifyCostSecp256k1,
                ))
              : (t.sigVerifyCostSecp256k1 = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.maxMemoCharacters &&
              (t.maxMemoCharacters = (
                e.maxMemoCharacters || r.default.UZERO
              ).toString()),
            void 0 !== e.txSigLimit &&
              (t.txSigLimit = (e.txSigLimit || r.default.UZERO).toString()),
            void 0 !== e.txSizeCostPerByte &&
              (t.txSizeCostPerByte = (
                e.txSizeCostPerByte || r.default.UZERO
              ).toString()),
            void 0 !== e.sigVerifyCostEd25519 &&
              (t.sigVerifyCostEd25519 = (
                e.sigVerifyCostEd25519 || r.default.UZERO
              ).toString()),
            void 0 !== e.sigVerifyCostSecp256k1 &&
              (t.sigVerifyCostSecp256k1 = (
                e.sigVerifyCostSecp256k1 || r.default.UZERO
              ).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          return (
            void 0 !== e.maxMemoCharacters && null !== e.maxMemoCharacters
              ? (t.maxMemoCharacters = e.maxMemoCharacters)
              : (t.maxMemoCharacters = r.default.UZERO),
            void 0 !== e.txSigLimit && null !== e.txSigLimit
              ? (t.txSigLimit = e.txSigLimit)
              : (t.txSigLimit = r.default.UZERO),
            void 0 !== e.txSizeCostPerByte && null !== e.txSizeCostPerByte
              ? (t.txSizeCostPerByte = e.txSizeCostPerByte)
              : (t.txSizeCostPerByte = r.default.UZERO),
            void 0 !== e.sigVerifyCostEd25519 && null !== e.sigVerifyCostEd25519
              ? (t.sigVerifyCostEd25519 = e.sigVerifyCostEd25519)
              : (t.sigVerifyCostEd25519 = r.default.UZERO),
            void 0 !== e.sigVerifyCostSecp256k1 &&
            null !== e.sigVerifyCostSecp256k1
              ? (t.sigVerifyCostSecp256k1 = e.sigVerifyCostSecp256k1)
              : (t.sigVerifyCostSecp256k1 = r.default.UZERO),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    4341: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.CompressedNonExistenceProof =
            t.CompressedExistenceProof =
            t.CompressedBatchEntry =
            t.CompressedBatchProof =
            t.BatchEntry =
            t.BatchProof =
            t.InnerSpec =
            t.ProofSpec =
            t.InnerOp =
            t.LeafOp =
            t.CommitmentProof =
            t.NonExistenceProof =
            t.ExistenceProof =
            t.lengthOpToJSON =
            t.lengthOpFromJSON =
            t.LengthOp =
            t.hashOpToJSON =
            t.hashOpFromJSON =
            t.HashOp =
            t.protobufPackage =
              void 0));
        const r = n(o(2754)),
          i = n(o(2755));
        var s, a;
        function d(e) {
          switch (e) {
            case 0:
            case "NO_HASH":
              return s.NO_HASH;
            case 1:
            case "SHA256":
              return s.SHA256;
            case 2:
            case "SHA512":
              return s.SHA512;
            case 3:
            case "KECCAK":
              return s.KECCAK;
            case 4:
            case "RIPEMD160":
              return s.RIPEMD160;
            case 5:
            case "BITCOIN":
              return s.BITCOIN;
            case -1:
            case "UNRECOGNIZED":
            default:
              return s.UNRECOGNIZED;
          }
        }
        function l(e) {
          switch (e) {
            case s.NO_HASH:
              return "NO_HASH";
            case s.SHA256:
              return "SHA256";
            case s.SHA512:
              return "SHA512";
            case s.KECCAK:
              return "KECCAK";
            case s.RIPEMD160:
              return "RIPEMD160";
            case s.BITCOIN:
              return "BITCOIN";
            default:
              return "UNKNOWN";
          }
        }
        function u(e) {
          switch (e) {
            case 0:
            case "NO_PREFIX":
              return a.NO_PREFIX;
            case 1:
            case "VAR_PROTO":
              return a.VAR_PROTO;
            case 2:
            case "VAR_RLP":
              return a.VAR_RLP;
            case 3:
            case "FIXED32_BIG":
              return a.FIXED32_BIG;
            case 4:
            case "FIXED32_LITTLE":
              return a.FIXED32_LITTLE;
            case 5:
            case "FIXED64_BIG":
              return a.FIXED64_BIG;
            case 6:
            case "FIXED64_LITTLE":
              return a.FIXED64_LITTLE;
            case 7:
            case "REQUIRE_32_BYTES":
              return a.REQUIRE_32_BYTES;
            case 8:
            case "REQUIRE_64_BYTES":
              return a.REQUIRE_64_BYTES;
            case -1:
            case "UNRECOGNIZED":
            default:
              return a.UNRECOGNIZED;
          }
        }
        function c(e) {
          switch (e) {
            case a.NO_PREFIX:
              return "NO_PREFIX";
            case a.VAR_PROTO:
              return "VAR_PROTO";
            case a.VAR_RLP:
              return "VAR_RLP";
            case a.FIXED32_BIG:
              return "FIXED32_BIG";
            case a.FIXED32_LITTLE:
              return "FIXED32_LITTLE";
            case a.FIXED64_BIG:
              return "FIXED64_BIG";
            case a.FIXED64_LITTLE:
              return "FIXED64_LITTLE";
            case a.REQUIRE_32_BYTES:
              return "REQUIRE_32_BYTES";
            case a.REQUIRE_64_BYTES:
              return "REQUIRE_64_BYTES";
            default:
              return "UNKNOWN";
          }
        }
        ((t.protobufPackage = "ics23"),
          (function (e) {
            ((e[(e["NO_HASH"] = 0)] = "NO_HASH"),
              (e[(e["SHA256"] = 1)] = "SHA256"),
              (e[(e["SHA512"] = 2)] = "SHA512"),
              (e[(e["KECCAK"] = 3)] = "KECCAK"),
              (e[(e["RIPEMD160"] = 4)] = "RIPEMD160"),
              (e[(e["BITCOIN"] = 5)] = "BITCOIN"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((s = t.HashOp || (t.HashOp = {}))),
          (t.hashOpFromJSON = d),
          (t.hashOpToJSON = l),
          (function (e) {
            ((e[(e["NO_PREFIX"] = 0)] = "NO_PREFIX"),
              (e[(e["VAR_PROTO"] = 1)] = "VAR_PROTO"),
              (e[(e["VAR_RLP"] = 2)] = "VAR_RLP"),
              (e[(e["FIXED32_BIG"] = 3)] = "FIXED32_BIG"),
              (e[(e["FIXED32_LITTLE"] = 4)] = "FIXED32_LITTLE"),
              (e[(e["FIXED64_BIG"] = 5)] = "FIXED64_BIG"),
              (e[(e["FIXED64_LITTLE"] = 6)] = "FIXED64_LITTLE"),
              (e[(e["REQUIRE_32_BYTES"] = 7)] = "REQUIRE_32_BYTES"),
              (e[(e["REQUIRE_64_BYTES"] = 8)] = "REQUIRE_64_BYTES"),
              (e[(e["UNRECOGNIZED"] = -1)] = "UNRECOGNIZED"));
          })((a = t.LengthOp || (t.LengthOp = {}))),
          (t.lengthOpFromJSON = u),
          (t.lengthOpToJSON = c));
        const p = {};
        t.ExistenceProof = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.key.length && o.uint32(10).bytes(e.key),
              0 !== e.value.length && o.uint32(18).bytes(e.value),
              void 0 !== e.leaf &&
                t.LeafOp.encode(e.leaf, o.uint32(26).fork()).ldelim());
            for (const n of e.path)
              t.InnerOp.encode(n, o.uint32(34).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, p);
            ((s.path = []),
              (s.key = new Uint8Array()),
              (s.value = new Uint8Array()));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = n.bytes();
                  break;
                case 2:
                  s.value = n.bytes();
                  break;
                case 3:
                  s.leaf = t.LeafOp.decode(n, n.uint32());
                  break;
                case 4:
                  s.path.push(t.InnerOp.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, p);
            if (
              ((o.path = []),
              (o.key = new Uint8Array()),
              (o.value = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = E(e.key)),
              void 0 !== e.value && null !== e.value && (o.value = E(e.value)),
              void 0 !== e.leaf && null !== e.leaf
                ? (o.leaf = t.LeafOp.fromJSON(e.leaf))
                : (o.leaf = void 0),
              void 0 !== e.path && null !== e.path)
            )
              for (const n of e.path) o.path.push(t.InnerOp.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.key &&
                (o.key = x(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (o.value = x(void 0 !== e.value ? e.value : new Uint8Array())),
              void 0 !== e.leaf &&
                (o.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0),
              e.path
                ? (o.path = e.path.map((e) =>
                    e ? t.InnerOp.toJSON(e) : void 0,
                  ))
                : (o.path = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, p);
            if (
              ((o.path = []),
              void 0 !== e.key && null !== e.key
                ? (o.key = e.key)
                : (o.key = new Uint8Array()),
              void 0 !== e.value && null !== e.value
                ? (o.value = e.value)
                : (o.value = new Uint8Array()),
              void 0 !== e.leaf && null !== e.leaf
                ? (o.leaf = t.LeafOp.fromPartial(e.leaf))
                : (o.leaf = void 0),
              void 0 !== e.path && null !== e.path)
            )
              for (const n of e.path) o.path.push(t.InnerOp.fromPartial(n));
            return o;
          },
        };
        const f = {};
        t.NonExistenceProof = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              0 !== e.key.length && o.uint32(10).bytes(e.key),
              void 0 !== e.left &&
                t.ExistenceProof.encode(e.left, o.uint32(18).fork()).ldelim(),
              void 0 !== e.right &&
                t.ExistenceProof.encode(e.right, o.uint32(26).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, f);
            s.key = new Uint8Array();
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = n.bytes();
                  break;
                case 2:
                  s.left = t.ExistenceProof.decode(n, n.uint32());
                  break;
                case 3:
                  s.right = t.ExistenceProof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, f);
            return (
              (o.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = E(e.key)),
              void 0 !== e.left && null !== e.left
                ? (o.left = t.ExistenceProof.fromJSON(e.left))
                : (o.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (o.right = t.ExistenceProof.fromJSON(e.right))
                : (o.right = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.key &&
                (o.key = x(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.left &&
                (o.left = e.left ? t.ExistenceProof.toJSON(e.left) : void 0),
              void 0 !== e.right &&
                (o.right = e.right ? t.ExistenceProof.toJSON(e.right) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, f);
            return (
              void 0 !== e.key && null !== e.key
                ? (o.key = e.key)
                : (o.key = new Uint8Array()),
              void 0 !== e.left && null !== e.left
                ? (o.left = t.ExistenceProof.fromPartial(e.left))
                : (o.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (o.right = t.ExistenceProof.fromPartial(e.right))
                : (o.right = void 0),
              o
            );
          },
        };
        const g = {};
        t.CommitmentProof = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.exist &&
                t.ExistenceProof.encode(e.exist, o.uint32(10).fork()).ldelim(),
              void 0 !== e.nonexist &&
                t.NonExistenceProof.encode(
                  e.nonexist,
                  o.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.batch &&
                t.BatchProof.encode(e.batch, o.uint32(26).fork()).ldelim(),
              void 0 !== e.compressed &&
                t.CompressedBatchProof.encode(
                  e.compressed,
                  o.uint32(34).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, g);
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.exist = t.ExistenceProof.decode(n, n.uint32());
                  break;
                case 2:
                  s.nonexist = t.NonExistenceProof.decode(n, n.uint32());
                  break;
                case 3:
                  s.batch = t.BatchProof.decode(n, n.uint32());
                  break;
                case 4:
                  s.compressed = t.CompressedBatchProof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, g);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (o.exist = t.ExistenceProof.fromJSON(e.exist))
                : (o.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (o.nonexist = t.NonExistenceProof.fromJSON(e.nonexist))
                : (o.nonexist = void 0),
              void 0 !== e.batch && null !== e.batch
                ? (o.batch = t.BatchProof.fromJSON(e.batch))
                : (o.batch = void 0),
              void 0 !== e.compressed && null !== e.compressed
                ? (o.compressed = t.CompressedBatchProof.fromJSON(e.compressed))
                : (o.compressed = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.exist &&
                (o.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0),
              void 0 !== e.nonexist &&
                (o.nonexist = e.nonexist
                  ? t.NonExistenceProof.toJSON(e.nonexist)
                  : void 0),
              void 0 !== e.batch &&
                (o.batch = e.batch ? t.BatchProof.toJSON(e.batch) : void 0),
              void 0 !== e.compressed &&
                (o.compressed = e.compressed
                  ? t.CompressedBatchProof.toJSON(e.compressed)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, g);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (o.exist = t.ExistenceProof.fromPartial(e.exist))
                : (o.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (o.nonexist = t.NonExistenceProof.fromPartial(e.nonexist))
                : (o.nonexist = void 0),
              void 0 !== e.batch && null !== e.batch
                ? (o.batch = t.BatchProof.fromPartial(e.batch))
                : (o.batch = void 0),
              void 0 !== e.compressed && null !== e.compressed
                ? (o.compressed = t.CompressedBatchProof.fromPartial(
                    e.compressed,
                  ))
                : (o.compressed = void 0),
              o
            );
          },
        };
        const m = { hash: 0, prehashKey: 0, prehashValue: 0, length: 0 };
        t.LeafOp = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.hash && t.uint32(8).int32(e.hash),
              0 !== e.prehashKey && t.uint32(16).int32(e.prehashKey),
              0 !== e.prehashValue && t.uint32(24).int32(e.prehashValue),
              0 !== e.length && t.uint32(32).int32(e.length),
              0 !== e.prefix.length && t.uint32(42).bytes(e.prefix),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, m);
            r.prefix = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.hash = o.int32();
                  break;
                case 2:
                  r.prehashKey = o.int32();
                  break;
                case 3:
                  r.prehashValue = o.int32();
                  break;
                case 4:
                  r.length = o.int32();
                  break;
                case 5:
                  r.prefix = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.prefix = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = d(e.hash))
                : (t.hash = 0),
              void 0 !== e.prehashKey && null !== e.prehashKey
                ? (t.prehashKey = d(e.prehashKey))
                : (t.prehashKey = 0),
              void 0 !== e.prehashValue && null !== e.prehashValue
                ? (t.prehashValue = d(e.prehashValue))
                : (t.prehashValue = 0),
              void 0 !== e.length && null !== e.length
                ? (t.length = u(e.length))
                : (t.length = 0),
              void 0 !== e.prefix &&
                null !== e.prefix &&
                (t.prefix = E(e.prefix)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.hash && (t.hash = l(e.hash)),
              void 0 !== e.prehashKey && (t.prehashKey = l(e.prehashKey)),
              void 0 !== e.prehashValue && (t.prehashValue = l(e.prehashValue)),
              void 0 !== e.length && (t.length = c(e.length)),
              void 0 !== e.prefix &&
                (t.prefix = x(
                  void 0 !== e.prefix ? e.prefix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = 0),
              void 0 !== e.prehashKey && null !== e.prehashKey
                ? (t.prehashKey = e.prehashKey)
                : (t.prehashKey = 0),
              void 0 !== e.prehashValue && null !== e.prehashValue
                ? (t.prehashValue = e.prehashValue)
                : (t.prehashValue = 0),
              void 0 !== e.length && null !== e.length
                ? (t.length = e.length)
                : (t.length = 0),
              void 0 !== e.prefix && null !== e.prefix
                ? (t.prefix = e.prefix)
                : (t.prefix = new Uint8Array()),
              t
            );
          },
        };
        const v = { hash: 0 };
        t.InnerOp = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              0 !== e.hash && t.uint32(8).int32(e.hash),
              0 !== e.prefix.length && t.uint32(18).bytes(e.prefix),
              0 !== e.suffix.length && t.uint32(26).bytes(e.suffix),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, v);
            ((r.prefix = new Uint8Array()), (r.suffix = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.hash = o.int32();
                  break;
                case 2:
                  r.prefix = o.bytes();
                  break;
                case 3:
                  r.suffix = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, v);
            return (
              (t.prefix = new Uint8Array()),
              (t.suffix = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = d(e.hash))
                : (t.hash = 0),
              void 0 !== e.prefix &&
                null !== e.prefix &&
                (t.prefix = E(e.prefix)),
              void 0 !== e.suffix &&
                null !== e.suffix &&
                (t.suffix = E(e.suffix)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.hash && (t.hash = l(e.hash)),
              void 0 !== e.prefix &&
                (t.prefix = x(
                  void 0 !== e.prefix ? e.prefix : new Uint8Array(),
                )),
              void 0 !== e.suffix &&
                (t.suffix = x(
                  void 0 !== e.suffix ? e.suffix : new Uint8Array(),
                )),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, v);
            return (
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = 0),
              void 0 !== e.prefix && null !== e.prefix
                ? (t.prefix = e.prefix)
                : (t.prefix = new Uint8Array()),
              void 0 !== e.suffix && null !== e.suffix
                ? (t.suffix = e.suffix)
                : (t.suffix = new Uint8Array()),
              t
            );
          },
        };
        const h = { maxDepth: 0, minDepth: 0 };
        t.ProofSpec = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.leafSpec &&
                t.LeafOp.encode(e.leafSpec, o.uint32(10).fork()).ldelim(),
              void 0 !== e.innerSpec &&
                t.InnerSpec.encode(e.innerSpec, o.uint32(18).fork()).ldelim(),
              0 !== e.maxDepth && o.uint32(24).int32(e.maxDepth),
              0 !== e.minDepth && o.uint32(32).int32(e.minDepth),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, h);
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.leafSpec = t.LeafOp.decode(n, n.uint32());
                  break;
                case 2:
                  s.innerSpec = t.InnerSpec.decode(n, n.uint32());
                  break;
                case 3:
                  s.maxDepth = n.int32();
                  break;
                case 4:
                  s.minDepth = n.int32();
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, h);
            return (
              void 0 !== e.leafSpec && null !== e.leafSpec
                ? (o.leafSpec = t.LeafOp.fromJSON(e.leafSpec))
                : (o.leafSpec = void 0),
              void 0 !== e.innerSpec && null !== e.innerSpec
                ? (o.innerSpec = t.InnerSpec.fromJSON(e.innerSpec))
                : (o.innerSpec = void 0),
              void 0 !== e.maxDepth && null !== e.maxDepth
                ? (o.maxDepth = Number(e.maxDepth))
                : (o.maxDepth = 0),
              void 0 !== e.minDepth && null !== e.minDepth
                ? (o.minDepth = Number(e.minDepth))
                : (o.minDepth = 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.leafSpec &&
                (o.leafSpec = e.leafSpec
                  ? t.LeafOp.toJSON(e.leafSpec)
                  : void 0),
              void 0 !== e.innerSpec &&
                (o.innerSpec = e.innerSpec
                  ? t.InnerSpec.toJSON(e.innerSpec)
                  : void 0),
              void 0 !== e.maxDepth && (o.maxDepth = e.maxDepth),
              void 0 !== e.minDepth && (o.minDepth = e.minDepth),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, h);
            return (
              void 0 !== e.leafSpec && null !== e.leafSpec
                ? (o.leafSpec = t.LeafOp.fromPartial(e.leafSpec))
                : (o.leafSpec = void 0),
              void 0 !== e.innerSpec && null !== e.innerSpec
                ? (o.innerSpec = t.InnerSpec.fromPartial(e.innerSpec))
                : (o.innerSpec = void 0),
              void 0 !== e.maxDepth && null !== e.maxDepth
                ? (o.maxDepth = e.maxDepth)
                : (o.maxDepth = 0),
              void 0 !== e.minDepth && null !== e.minDepth
                ? (o.minDepth = e.minDepth)
                : (o.minDepth = 0),
              o
            );
          },
        };
        const b = {
          childOrder: 0,
          childSize: 0,
          minPrefixLength: 0,
          maxPrefixLength: 0,
          hash: 0,
        };
        t.InnerSpec = {
          encode(e, t) {
            (void 0 === t && (t = i.default.Writer.create()),
              t.uint32(10).fork());
            for (const o of e.childOrder) t.int32(o);
            return (
              t.ldelim(),
              0 !== e.childSize && t.uint32(16).int32(e.childSize),
              0 !== e.minPrefixLength && t.uint32(24).int32(e.minPrefixLength),
              0 !== e.maxPrefixLength && t.uint32(32).int32(e.maxPrefixLength),
              0 !== e.emptyChild.length && t.uint32(42).bytes(e.emptyChild),
              0 !== e.hash && t.uint32(48).int32(e.hash),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, b);
            ((r.childOrder = []), (r.emptyChild = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  if (2 === (7 & e)) {
                    const e = o.uint32() + o.pos;
                    while (o.pos < e) r.childOrder.push(o.int32());
                  } else r.childOrder.push(o.int32());
                  break;
                case 2:
                  r.childSize = o.int32();
                  break;
                case 3:
                  r.minPrefixLength = o.int32();
                  break;
                case 4:
                  r.maxPrefixLength = o.int32();
                  break;
                case 5:
                  r.emptyChild = o.bytes();
                  break;
                case 6:
                  r.hash = o.int32();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, b);
            if (
              ((t.childOrder = []),
              (t.emptyChild = new Uint8Array()),
              void 0 !== e.childOrder && null !== e.childOrder)
            )
              for (const o of e.childOrder) t.childOrder.push(Number(o));
            return (
              void 0 !== e.childSize && null !== e.childSize
                ? (t.childSize = Number(e.childSize))
                : (t.childSize = 0),
              void 0 !== e.minPrefixLength && null !== e.minPrefixLength
                ? (t.minPrefixLength = Number(e.minPrefixLength))
                : (t.minPrefixLength = 0),
              void 0 !== e.maxPrefixLength && null !== e.maxPrefixLength
                ? (t.maxPrefixLength = Number(e.maxPrefixLength))
                : (t.maxPrefixLength = 0),
              void 0 !== e.emptyChild &&
                null !== e.emptyChild &&
                (t.emptyChild = E(e.emptyChild)),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = d(e.hash))
                : (t.hash = 0),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              e.childOrder
                ? (t.childOrder = e.childOrder.map((e) => e))
                : (t.childOrder = []),
              void 0 !== e.childSize && (t.childSize = e.childSize),
              void 0 !== e.minPrefixLength &&
                (t.minPrefixLength = e.minPrefixLength),
              void 0 !== e.maxPrefixLength &&
                (t.maxPrefixLength = e.maxPrefixLength),
              void 0 !== e.emptyChild &&
                (t.emptyChild = x(
                  void 0 !== e.emptyChild ? e.emptyChild : new Uint8Array(),
                )),
              void 0 !== e.hash && (t.hash = l(e.hash)),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, b);
            if (
              ((t.childOrder = []),
              void 0 !== e.childOrder && null !== e.childOrder)
            )
              for (const o of e.childOrder) t.childOrder.push(o);
            return (
              void 0 !== e.childSize && null !== e.childSize
                ? (t.childSize = e.childSize)
                : (t.childSize = 0),
              void 0 !== e.minPrefixLength && null !== e.minPrefixLength
                ? (t.minPrefixLength = e.minPrefixLength)
                : (t.minPrefixLength = 0),
              void 0 !== e.maxPrefixLength && null !== e.maxPrefixLength
                ? (t.maxPrefixLength = e.maxPrefixLength)
                : (t.maxPrefixLength = 0),
              void 0 !== e.emptyChild && null !== e.emptyChild
                ? (t.emptyChild = e.emptyChild)
                : (t.emptyChild = new Uint8Array()),
              void 0 !== e.hash && null !== e.hash
                ? (t.hash = e.hash)
                : (t.hash = 0),
              t
            );
          },
        };
        const O = {};
        t.BatchProof = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const n of e.entries)
              t.BatchEntry.encode(n, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, O);
            s.entries = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.entries.push(t.BatchEntry.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, O);
            if (((o.entries = []), void 0 !== e.entries && null !== e.entries))
              for (const n of e.entries)
                o.entries.push(t.BatchEntry.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.entries
                ? (o.entries = e.entries.map((e) =>
                    e ? t.BatchEntry.toJSON(e) : void 0,
                  ))
                : (o.entries = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, O);
            if (((o.entries = []), void 0 !== e.entries && null !== e.entries))
              for (const n of e.entries)
                o.entries.push(t.BatchEntry.fromPartial(n));
            return o;
          },
        };
        const S = {};
        t.BatchEntry = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.exist &&
                t.ExistenceProof.encode(e.exist, o.uint32(10).fork()).ldelim(),
              void 0 !== e.nonexist &&
                t.NonExistenceProof.encode(
                  e.nonexist,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, S);
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.exist = t.ExistenceProof.decode(n, n.uint32());
                  break;
                case 2:
                  s.nonexist = t.NonExistenceProof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, S);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (o.exist = t.ExistenceProof.fromJSON(e.exist))
                : (o.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (o.nonexist = t.NonExistenceProof.fromJSON(e.nonexist))
                : (o.nonexist = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.exist &&
                (o.exist = e.exist ? t.ExistenceProof.toJSON(e.exist) : void 0),
              void 0 !== e.nonexist &&
                (o.nonexist = e.nonexist
                  ? t.NonExistenceProof.toJSON(e.nonexist)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, S);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (o.exist = t.ExistenceProof.fromPartial(e.exist))
                : (o.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (o.nonexist = t.NonExistenceProof.fromPartial(e.nonexist))
                : (o.nonexist = void 0),
              o
            );
          },
        };
        const y = {};
        t.CompressedBatchProof = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const n of e.entries)
              t.CompressedBatchEntry.encode(n, o.uint32(10).fork()).ldelim();
            for (const n of e.lookupInners)
              t.InnerOp.encode(n, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, y);
            ((s.entries = []), (s.lookupInners = []));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.entries.push(t.CompressedBatchEntry.decode(n, n.uint32()));
                  break;
                case 2:
                  s.lookupInners.push(t.InnerOp.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, y);
            if (
              ((o.entries = []),
              (o.lookupInners = []),
              void 0 !== e.entries && null !== e.entries)
            )
              for (const n of e.entries)
                o.entries.push(t.CompressedBatchEntry.fromJSON(n));
            if (void 0 !== e.lookupInners && null !== e.lookupInners)
              for (const n of e.lookupInners)
                o.lookupInners.push(t.InnerOp.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.entries
                ? (o.entries = e.entries.map((e) =>
                    e ? t.CompressedBatchEntry.toJSON(e) : void 0,
                  ))
                : (o.entries = []),
              e.lookupInners
                ? (o.lookupInners = e.lookupInners.map((e) =>
                    e ? t.InnerOp.toJSON(e) : void 0,
                  ))
                : (o.lookupInners = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, y);
            if (
              ((o.entries = []),
              (o.lookupInners = []),
              void 0 !== e.entries && null !== e.entries)
            )
              for (const n of e.entries)
                o.entries.push(t.CompressedBatchEntry.fromPartial(n));
            if (void 0 !== e.lookupInners && null !== e.lookupInners)
              for (const n of e.lookupInners)
                o.lookupInners.push(t.InnerOp.fromPartial(n));
            return o;
          },
        };
        const w = {};
        t.CompressedBatchEntry = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.exist &&
                t.CompressedExistenceProof.encode(
                  e.exist,
                  o.uint32(10).fork(),
                ).ldelim(),
              void 0 !== e.nonexist &&
                t.CompressedNonExistenceProof.encode(
                  e.nonexist,
                  o.uint32(18).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, w);
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.exist = t.CompressedExistenceProof.decode(n, n.uint32());
                  break;
                case 2:
                  s.nonexist = t.CompressedNonExistenceProof.decode(
                    n,
                    n.uint32(),
                  );
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, w);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (o.exist = t.CompressedExistenceProof.fromJSON(e.exist))
                : (o.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (o.nonexist = t.CompressedNonExistenceProof.fromJSON(
                    e.nonexist,
                  ))
                : (o.nonexist = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.exist &&
                (o.exist = e.exist
                  ? t.CompressedExistenceProof.toJSON(e.exist)
                  : void 0),
              void 0 !== e.nonexist &&
                (o.nonexist = e.nonexist
                  ? t.CompressedNonExistenceProof.toJSON(e.nonexist)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, w);
            return (
              void 0 !== e.exist && null !== e.exist
                ? (o.exist = t.CompressedExistenceProof.fromPartial(e.exist))
                : (o.exist = void 0),
              void 0 !== e.nonexist && null !== e.nonexist
                ? (o.nonexist = t.CompressedNonExistenceProof.fromPartial(
                    e.nonexist,
                  ))
                : (o.nonexist = void 0),
              o
            );
          },
        };
        const k = { path: 0 };
        t.CompressedExistenceProof = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.key.length && o.uint32(10).bytes(e.key),
              0 !== e.value.length && o.uint32(18).bytes(e.value),
              void 0 !== e.leaf &&
                t.LeafOp.encode(e.leaf, o.uint32(26).fork()).ldelim(),
              o.uint32(34).fork());
            for (const t of e.path) o.int32(t);
            return (o.ldelim(), o);
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, k);
            ((s.path = []),
              (s.key = new Uint8Array()),
              (s.value = new Uint8Array()));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = n.bytes();
                  break;
                case 2:
                  s.value = n.bytes();
                  break;
                case 3:
                  s.leaf = t.LeafOp.decode(n, n.uint32());
                  break;
                case 4:
                  if (2 === (7 & e)) {
                    const e = n.uint32() + n.pos;
                    while (n.pos < e) s.path.push(n.int32());
                  } else s.path.push(n.int32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, k);
            if (
              ((o.path = []),
              (o.key = new Uint8Array()),
              (o.value = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = E(e.key)),
              void 0 !== e.value && null !== e.value && (o.value = E(e.value)),
              void 0 !== e.leaf && null !== e.leaf
                ? (o.leaf = t.LeafOp.fromJSON(e.leaf))
                : (o.leaf = void 0),
              void 0 !== e.path && null !== e.path)
            )
              for (const t of e.path) o.path.push(Number(t));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.key &&
                (o.key = x(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.value &&
                (o.value = x(void 0 !== e.value ? e.value : new Uint8Array())),
              void 0 !== e.leaf &&
                (o.leaf = e.leaf ? t.LeafOp.toJSON(e.leaf) : void 0),
              e.path ? (o.path = e.path.map((e) => e)) : (o.path = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, k);
            if (
              ((o.path = []),
              void 0 !== e.key && null !== e.key
                ? (o.key = e.key)
                : (o.key = new Uint8Array()),
              void 0 !== e.value && null !== e.value
                ? (o.value = e.value)
                : (o.value = new Uint8Array()),
              void 0 !== e.leaf && null !== e.leaf
                ? (o.leaf = t.LeafOp.fromPartial(e.leaf))
                : (o.leaf = void 0),
              void 0 !== e.path && null !== e.path)
            )
              for (const t of e.path) o.path.push(t);
            return o;
          },
        };
        const P = {};
        t.CompressedNonExistenceProof = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              0 !== e.key.length && o.uint32(10).bytes(e.key),
              void 0 !== e.left &&
                t.CompressedExistenceProof.encode(
                  e.left,
                  o.uint32(18).fork(),
                ).ldelim(),
              void 0 !== e.right &&
                t.CompressedExistenceProof.encode(
                  e.right,
                  o.uint32(26).fork(),
                ).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, P);
            s.key = new Uint8Array();
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.key = n.bytes();
                  break;
                case 2:
                  s.left = t.CompressedExistenceProof.decode(n, n.uint32());
                  break;
                case 3:
                  s.right = t.CompressedExistenceProof.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, P);
            return (
              (o.key = new Uint8Array()),
              void 0 !== e.key && null !== e.key && (o.key = E(e.key)),
              void 0 !== e.left && null !== e.left
                ? (o.left = t.CompressedExistenceProof.fromJSON(e.left))
                : (o.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (o.right = t.CompressedExistenceProof.fromJSON(e.right))
                : (o.right = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.key &&
                (o.key = x(void 0 !== e.key ? e.key : new Uint8Array())),
              void 0 !== e.left &&
                (o.left = e.left
                  ? t.CompressedExistenceProof.toJSON(e.left)
                  : void 0),
              void 0 !== e.right &&
                (o.right = e.right
                  ? t.CompressedExistenceProof.toJSON(e.right)
                  : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, P);
            return (
              void 0 !== e.key && null !== e.key
                ? (o.key = e.key)
                : (o.key = new Uint8Array()),
              void 0 !== e.left && null !== e.left
                ? (o.left = t.CompressedExistenceProof.fromPartial(e.left))
                : (o.left = void 0),
              void 0 !== e.right && null !== e.right
                ? (o.right = t.CompressedExistenceProof.fromPartial(e.right))
                : (o.right = void 0),
              o
            );
          },
        };
        var R = (() => {
          if ("undefined" !== typeof R) return R;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const N =
          R.atob || ((e) => R.Buffer.from(e, "base64").toString("binary"));
        function E(e) {
          const t = N(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const T =
          R.btoa || ((e) => R.Buffer.from(e, "binary").toString("base64"));
        function x(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return T(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, o(13));
    },
    5048: function (e, t, o) {
      "use strict";
      var n =
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
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(2840);
      t.protobufPackage = "cosmos.distribution.v1beta1";
      const a = {
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
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, a);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.communityTax = o.string();
                break;
              case 2:
                r.baseProposerReward = o.string();
                break;
              case 3:
                r.bonusProposerReward = o.string();
                break;
              case 4:
                r.withdrawAddrEnabled = o.bool();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
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
          const t = Object.assign({}, a);
          return (
            void 0 !== e.communityTax && null !== e.communityTax
              ? (t.communityTax = e.communityTax)
              : (t.communityTax = ""),
            void 0 !== e.baseProposerReward && null !== e.baseProposerReward
              ? (t.baseProposerReward = e.baseProposerReward)
              : (t.baseProposerReward = ""),
            void 0 !== e.bonusProposerReward && null !== e.bonusProposerReward
              ? (t.bonusProposerReward = e.bonusProposerReward)
              : (t.bonusProposerReward = ""),
            void 0 !== e.withdrawAddrEnabled && null !== e.withdrawAddrEnabled
              ? (t.withdrawAddrEnabled = e.withdrawAddrEnabled)
              : (t.withdrawAddrEnabled = !1),
            t
          );
        },
      };
      const d = { referenceCount: 0 };
      t.ValidatorHistoricalRewards = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.cumulativeRewardRatio)
            s.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return (
            0 !== e.referenceCount && t.uint32(16).uint32(e.referenceCount),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, d);
          r.cumulativeRewardRatio = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.cumulativeRewardRatio.push(s.DecCoin.decode(o, o.uint32()));
                break;
              case 2:
                r.referenceCount = o.uint32();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          if (
            ((t.cumulativeRewardRatio = []),
            void 0 !== e.cumulativeRewardRatio &&
              null !== e.cumulativeRewardRatio)
          )
            for (const o of e.cumulativeRewardRatio)
              t.cumulativeRewardRatio.push(s.DecCoin.fromJSON(o));
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
                  e ? s.DecCoin.toJSON(e) : void 0,
                ))
              : (t.cumulativeRewardRatio = []),
            void 0 !== e.referenceCount &&
              (t.referenceCount = e.referenceCount),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          if (
            ((t.cumulativeRewardRatio = []),
            void 0 !== e.cumulativeRewardRatio &&
              null !== e.cumulativeRewardRatio)
          )
            for (const o of e.cumulativeRewardRatio)
              t.cumulativeRewardRatio.push(s.DecCoin.fromPartial(o));
          return (
            void 0 !== e.referenceCount && null !== e.referenceCount
              ? (t.referenceCount = e.referenceCount)
              : (t.referenceCount = 0),
            t
          );
        },
      };
      const l = { period: r.default.UZERO };
      t.ValidatorCurrentRewards = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.rewards)
            s.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return (e.period.isZero() || t.uint32(16).uint64(e.period), t);
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          r.rewards = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.rewards.push(s.DecCoin.decode(o, o.uint32()));
                break;
              case 2:
                r.period = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, l);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(s.DecCoin.fromJSON(o));
          return (
            void 0 !== e.period && null !== e.period
              ? (t.period = r.default.fromString(e.period))
              : (t.period = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            e.rewards
              ? (t.rewards = e.rewards.map((e) =>
                  e ? s.DecCoin.toJSON(e) : void 0,
                ))
              : (t.rewards = []),
            void 0 !== e.period &&
              (t.period = (e.period || r.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, l);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(s.DecCoin.fromPartial(o));
          return (
            void 0 !== e.period && null !== e.period
              ? (t.period = e.period)
              : (t.period = r.default.UZERO),
            t
          );
        },
      };
      const u = {};
      t.ValidatorAccumulatedCommission = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.commission)
            s.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, u);
          r.commission = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.commission.push(s.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, u);
          if (
            ((t.commission = []),
            void 0 !== e.commission && null !== e.commission)
          )
            for (const o of e.commission)
              t.commission.push(s.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.commission
              ? (t.commission = e.commission.map((e) =>
                  e ? s.DecCoin.toJSON(e) : void 0,
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
              t.commission.push(s.DecCoin.fromPartial(o));
          return t;
        },
      };
      const c = {};
      t.ValidatorOutstandingRewards = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.rewards)
            s.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, c);
          r.rewards = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.rewards.push(s.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, c);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(s.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.rewards
              ? (t.rewards = e.rewards.map((e) =>
                  e ? s.DecCoin.toJSON(e) : void 0,
                ))
              : (t.rewards = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, c);
          if (((t.rewards = []), void 0 !== e.rewards && null !== e.rewards))
            for (const o of e.rewards) t.rewards.push(s.DecCoin.fromPartial(o));
          return t;
        },
      };
      const p = { validatorPeriod: r.default.UZERO, fraction: "" };
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
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, p);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.validatorPeriod = o.uint64();
                break;
              case 2:
                r.fraction = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.validatorPeriod && null !== e.validatorPeriod
              ? (t.validatorPeriod = r.default.fromString(e.validatorPeriod))
              : (t.validatorPeriod = r.default.UZERO),
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
                e.validatorPeriod || r.default.UZERO
              ).toString()),
            void 0 !== e.fraction && (t.fraction = e.fraction),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, p);
          return (
            void 0 !== e.validatorPeriod && null !== e.validatorPeriod
              ? (t.validatorPeriod = e.validatorPeriod)
              : (t.validatorPeriod = r.default.UZERO),
            void 0 !== e.fraction && null !== e.fraction
              ? (t.fraction = e.fraction)
              : (t.fraction = ""),
            t
          );
        },
      };
      const f = {};
      t.ValidatorSlashEvents = {
        encode(e, o) {
          void 0 === o && (o = i.default.Writer.create());
          for (const n of e.validatorSlashEvents)
            t.ValidatorSlashEvent.encode(n, o.uint32(10).fork()).ldelim();
          return o;
        },
        decode(e, o) {
          const n = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let r = void 0 === o ? n.len : n.pos + o;
          const s = Object.assign({}, f);
          s.validatorSlashEvents = [];
          while (n.pos < r) {
            const e = n.uint32();
            switch (e >>> 3) {
              case 1:
                s.validatorSlashEvents.push(
                  t.ValidatorSlashEvent.decode(n, n.uint32()),
                );
                break;
              default:
                n.skipType(7 & e);
                break;
            }
          }
          return s;
        },
        fromJSON(e) {
          const o = Object.assign({}, f);
          if (
            ((o.validatorSlashEvents = []),
            void 0 !== e.validatorSlashEvents &&
              null !== e.validatorSlashEvents)
          )
            for (const n of e.validatorSlashEvents)
              o.validatorSlashEvents.push(t.ValidatorSlashEvent.fromJSON(n));
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
            for (const n of e.validatorSlashEvents)
              o.validatorSlashEvents.push(t.ValidatorSlashEvent.fromPartial(n));
          return o;
        },
      };
      const g = {};
      t.FeePool = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.communityPool)
            s.DecCoin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, g);
          r.communityPool = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.communityPool.push(s.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, g);
          if (
            ((t.communityPool = []),
            void 0 !== e.communityPool && null !== e.communityPool)
          )
            for (const o of e.communityPool)
              t.communityPool.push(s.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.communityPool
              ? (t.communityPool = e.communityPool.map((e) =>
                  e ? s.DecCoin.toJSON(e) : void 0,
                ))
              : (t.communityPool = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, g);
          if (
            ((t.communityPool = []),
            void 0 !== e.communityPool && null !== e.communityPool)
          )
            for (const o of e.communityPool)
              t.communityPool.push(s.DecCoin.fromPartial(o));
          return t;
        },
      };
      const m = { title: "", description: "", recipient: "" };
      t.CommunityPoolSpendProposal = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.title && t.uint32(10).string(e.title),
            "" !== e.description && t.uint32(18).string(e.description),
            "" !== e.recipient && t.uint32(26).string(e.recipient));
          for (const o of e.amount)
            s.Coin.encode(o, t.uint32(34).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, m);
          r.amount = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.title = o.string();
                break;
              case 2:
                r.description = o.string();
                break;
              case 3:
                r.recipient = o.string();
                break;
              case 4:
                r.amount.push(s.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, m);
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
            for (const o of e.amount) t.amount.push(s.Coin.fromJSON(o));
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
                  e ? s.Coin.toJSON(e) : void 0,
                ))
              : (t.amount = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, m);
          if (
            ((t.amount = []),
            void 0 !== e.title && null !== e.title
              ? (t.title = e.title)
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = e.description)
              : (t.description = ""),
            void 0 !== e.recipient && null !== e.recipient
              ? (t.recipient = e.recipient)
              : (t.recipient = ""),
            void 0 !== e.amount && null !== e.amount)
          )
            for (const o of e.amount) t.amount.push(s.Coin.fromPartial(o));
          return t;
        },
      };
      const v = {
        previousPeriod: r.default.UZERO,
        stake: "",
        height: r.default.UZERO,
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
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, v);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.previousPeriod = o.uint64();
                break;
              case 2:
                r.stake = o.string();
                break;
              case 3:
                r.height = o.uint64();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.previousPeriod && null !== e.previousPeriod
              ? (t.previousPeriod = r.default.fromString(e.previousPeriod))
              : (t.previousPeriod = r.default.UZERO),
            void 0 !== e.stake && null !== e.stake
              ? (t.stake = String(e.stake))
              : (t.stake = ""),
            void 0 !== e.height && null !== e.height
              ? (t.height = r.default.fromString(e.height))
              : (t.height = r.default.UZERO),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.previousPeriod &&
              (t.previousPeriod = (
                e.previousPeriod || r.default.UZERO
              ).toString()),
            void 0 !== e.stake && (t.stake = e.stake),
            void 0 !== e.height &&
              (t.height = (e.height || r.default.UZERO).toString()),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, v);
          return (
            void 0 !== e.previousPeriod && null !== e.previousPeriod
              ? (t.previousPeriod = e.previousPeriod)
              : (t.previousPeriod = r.default.UZERO),
            void 0 !== e.stake && null !== e.stake
              ? (t.stake = e.stake)
              : (t.stake = ""),
            void 0 !== e.height && null !== e.height
              ? (t.height = e.height)
              : (t.height = r.default.UZERO),
            t
          );
        },
      };
      const h = { validatorAddress: "" };
      t.DelegationDelegatorReward = {
        encode(e, t) {
          (void 0 === t && (t = i.default.Writer.create()),
            "" !== e.validatorAddress &&
              t.uint32(10).string(e.validatorAddress));
          for (const o of e.reward)
            s.DecCoin.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, h);
          r.reward = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.validatorAddress = o.string();
                break;
              case 2:
                r.reward.push(s.DecCoin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, h);
          if (
            ((t.reward = []),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = String(e.validatorAddress))
              : (t.validatorAddress = ""),
            void 0 !== e.reward && null !== e.reward)
          )
            for (const o of e.reward) t.reward.push(s.DecCoin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.validatorAddress &&
              (t.validatorAddress = e.validatorAddress),
            e.reward
              ? (t.reward = e.reward.map((e) =>
                  e ? s.DecCoin.toJSON(e) : void 0,
                ))
              : (t.reward = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, h);
          if (
            ((t.reward = []),
            void 0 !== e.validatorAddress && null !== e.validatorAddress
              ? (t.validatorAddress = e.validatorAddress)
              : (t.validatorAddress = ""),
            void 0 !== e.reward && null !== e.reward)
          )
            for (const o of e.reward) t.reward.push(s.DecCoin.fromPartial(o));
          return t;
        },
      };
      const b = {
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
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, b);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.title = o.string();
                break;
              case 2:
                r.description = o.string();
                break;
              case 3:
                r.recipient = o.string();
                break;
              case 4:
                r.amount = o.string();
                break;
              case 5:
                r.deposit = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, b);
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
          const t = Object.assign({}, b);
          return (
            void 0 !== e.title && null !== e.title
              ? (t.title = e.title)
              : (t.title = ""),
            void 0 !== e.description && null !== e.description
              ? (t.description = e.description)
              : (t.description = ""),
            void 0 !== e.recipient && null !== e.recipient
              ? (t.recipient = e.recipient)
              : (t.recipient = ""),
            void 0 !== e.amount && null !== e.amount
              ? (t.amount = e.amount)
              : (t.amount = ""),
            void 0 !== e.deposit && null !== e.deposit
              ? (t.deposit = e.deposit)
              : (t.deposit = ""),
            t
          );
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    5074: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SendAuthorization = t.protobufPackage = void 0));
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(2840);
      t.protobufPackage = "cosmos.bank.v1beta1";
      const a = {};
      ((t.SendAuthorization = {
        encode(e, t) {
          void 0 === t && (t = i.default.Writer.create());
          for (const o of e.spendLimit)
            s.Coin.encode(o, t.uint32(10).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, a);
          r.spendLimit = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.spendLimit.push(s.Coin.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          if (
            ((t.spendLimit = []),
            void 0 !== e.spendLimit && null !== e.spendLimit)
          )
            for (const o of e.spendLimit) t.spendLimit.push(s.Coin.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            e.spendLimit
              ? (t.spendLimit = e.spendLimit.map((e) =>
                  e ? s.Coin.toJSON(e) : void 0,
                ))
              : (t.spendLimit = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, a);
          if (
            ((t.spendLimit = []),
            void 0 !== e.spendLimit && null !== e.spendLimit)
          )
            for (const o of e.spendLimit)
              t.spendLimit.push(s.Coin.fromPartial(o));
          return t;
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    5088: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.LegacyAminoPubKey = t.protobufPackage = void 0));
      const r = n(o(2754)),
        i = n(o(2755)),
        s = o(2759);
      t.protobufPackage = "cosmos.crypto.multisig";
      const a = { threshold: 0 };
      ((t.LegacyAminoPubKey = {
        encode(e, t = i.default.Writer.create()) {
          0 !== e.threshold && t.uint32(8).uint32(e.threshold);
          for (const o of e.publicKeys)
            s.Any.encode(o, t.uint32(18).fork()).ldelim();
          return t;
        },
        decode(e, t) {
          const o = e instanceof i.default.Reader ? e : new i.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, a);
          r.publicKeys = [];
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.threshold = o.uint32();
                break;
              case 2:
                r.publicKeys.push(s.Any.decode(o, o.uint32()));
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, a);
          if (
            ((t.publicKeys = []),
            void 0 !== e.threshold && null !== e.threshold
              ? (t.threshold = Number(e.threshold))
              : (t.threshold = 0),
            void 0 !== e.publicKeys && null !== e.publicKeys)
          )
            for (const o of e.publicKeys) t.publicKeys.push(s.Any.fromJSON(o));
          return t;
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.threshold && (t.threshold = e.threshold),
            e.publicKeys
              ? (t.publicKeys = e.publicKeys.map((e) =>
                  e ? s.Any.toJSON(e) : void 0,
                ))
              : (t.publicKeys = []),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, a);
          if (
            ((t.publicKeys = []),
            void 0 !== e.threshold && null !== e.threshold
              ? (t.threshold = e.threshold)
              : (t.threshold = 0),
            void 0 !== e.publicKeys && null !== e.publicKeys)
          )
            for (const o of e.publicKeys)
              t.publicKeys.push(s.Any.fromPartial(o));
          return t;
        },
      }),
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure()));
    },
    5089: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PrivKey = t.PubKey = t.protobufPackage = void 0));
        const r = n(o(2754)),
          i = n(o(2755));
        t.protobufPackage = "cosmos.crypto.secp256k1";
        const s = {};
        t.PubKey = {
          encode(e, t = i.default.Writer.create()) {
            return (0 !== e.key.length && t.uint32(10).bytes(e.key), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, s);
            r.key = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.key = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
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
            const t = Object.assign({}, s);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              t
            );
          },
        };
        const a = {};
        t.PrivKey = {
          encode(e, t = i.default.Writer.create()) {
            return (0 !== e.key.length && t.uint32(10).bytes(e.key), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, a);
            r.key = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.key = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
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
            const t = Object.assign({}, a);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              t
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
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const c =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function p(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return c(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, o(13));
    },
    5090: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PrivKey = t.PubKey = t.protobufPackage = void 0));
        const r = n(o(2754)),
          i = n(o(2755));
        t.protobufPackage = "cosmos.crypto.ed25519";
        const s = {};
        t.PubKey = {
          encode(e, t = i.default.Writer.create()) {
            return (0 !== e.key.length && t.uint32(10).bytes(e.key), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, s);
            r.key = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.key = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, s);
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
            const t = Object.assign({}, s);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              t
            );
          },
        };
        const a = {};
        t.PrivKey = {
          encode(e, t = i.default.Writer.create()) {
            return (0 !== e.key.length && t.uint32(10).bytes(e.key), t);
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, a);
            r.key = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.key = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
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
            const t = Object.assign({}, a);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = new Uint8Array()),
              t
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
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const c =
          d.btoa || ((e) => d.Buffer.from(e, "binary").toString("base64"));
        function p(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return c(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, o(13));
    },
    5134: function (e, t, o) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GrpcWebImpl =
          t.MsgVerifyInvariantDesc =
          t.MsgDesc =
          t.MsgClientImpl =
          t.MsgVerifyInvariantResponse =
          t.MsgVerifyInvariant =
          t.protobufPackage =
            void 0));
      const r = n(o(2754)),
        i = o(2889),
        s = n(o(2755)),
        a = o(2890);
      t.protobufPackage = "cosmos.crisis.v1beta1";
      const d = { sender: "", invariantModuleName: "", invariantRoute: "" };
      t.MsgVerifyInvariant = {
        encode(e, t) {
          return (
            void 0 === t && (t = s.default.Writer.create()),
            "" !== e.sender && t.uint32(10).string(e.sender),
            "" !== e.invariantModuleName &&
              t.uint32(18).string(e.invariantModuleName),
            "" !== e.invariantRoute && t.uint32(26).string(e.invariantRoute),
            t
          );
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, d);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              case 1:
                r.sender = o.string();
                break;
              case 2:
                r.invariantModuleName = o.string();
                break;
              case 3:
                r.invariantRoute = o.string();
                break;
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
        },
        fromJSON(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.sender && null !== e.sender
              ? (t.sender = String(e.sender))
              : (t.sender = ""),
            void 0 !== e.invariantModuleName && null !== e.invariantModuleName
              ? (t.invariantModuleName = String(e.invariantModuleName))
              : (t.invariantModuleName = ""),
            void 0 !== e.invariantRoute && null !== e.invariantRoute
              ? (t.invariantRoute = String(e.invariantRoute))
              : (t.invariantRoute = ""),
            t
          );
        },
        toJSON(e) {
          const t = {};
          return (
            void 0 !== e.sender && (t.sender = e.sender),
            void 0 !== e.invariantModuleName &&
              (t.invariantModuleName = e.invariantModuleName),
            void 0 !== e.invariantRoute &&
              (t.invariantRoute = e.invariantRoute),
            t
          );
        },
        fromPartial(e) {
          const t = Object.assign({}, d);
          return (
            void 0 !== e.sender && null !== e.sender
              ? (t.sender = e.sender)
              : (t.sender = ""),
            void 0 !== e.invariantModuleName && null !== e.invariantModuleName
              ? (t.invariantModuleName = e.invariantModuleName)
              : (t.invariantModuleName = ""),
            void 0 !== e.invariantRoute && null !== e.invariantRoute
              ? (t.invariantRoute = e.invariantRoute)
              : (t.invariantRoute = ""),
            t
          );
        },
      };
      const l = {};
      t.MsgVerifyInvariantResponse = {
        encode(e, t) {
          return (void 0 === t && (t = s.default.Writer.create()), t);
        },
        decode(e, t) {
          const o = e instanceof s.default.Reader ? e : new s.default.Reader(e);
          let n = void 0 === t ? o.len : o.pos + t;
          const r = Object.assign({}, l);
          while (o.pos < n) {
            const e = o.uint32();
            switch (e >>> 3) {
              default:
                o.skipType(7 & e);
                break;
            }
          }
          return r;
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
      class MsgClientImpl {
        constructor(e) {
          ((this.rpc = e),
            (this.VerifyInvariant = this.VerifyInvariant.bind(this)));
        }
        VerifyInvariant(e, o) {
          return this.rpc.unary(
            t.MsgVerifyInvariantDesc,
            t.MsgVerifyInvariant.fromPartial(e),
            o,
          );
        }
      }
      ((t.MsgClientImpl = MsgClientImpl),
        (t.MsgDesc = { serviceName: "cosmos.crisis.v1beta1.Msg" }),
        (t.MsgVerifyInvariantDesc = {
          methodName: "VerifyInvariant",
          service: t.MsgDesc,
          requestStream: !1,
          responseStream: !1,
          requestType: {
            serializeBinary() {
              return t.MsgVerifyInvariant.encode(this).finish();
            },
          },
          responseType: {
            deserializeBinary(e) {
              return Object.assign(
                Object.assign({}, t.MsgVerifyInvariantResponse.decode(e)),
                {
                  toObject() {
                    return this;
                  },
                },
              );
            },
          },
        }));
      class GrpcWebImpl {
        constructor(e, t) {
          ((this.host = e), (this.options = t));
        }
        unary(e, t, o) {
          var n;
          const r = Object.assign(Object.assign({}, t), e.requestType),
            s =
              o && this.options.metadata
                ? new a.BrowserHeaders(
                    Object.assign(
                      Object.assign(
                        {},
                        null === (n = this.options) || void 0 === n
                          ? void 0
                          : n.metadata.headersMap,
                      ),
                      null === o || void 0 === o ? void 0 : o.headersMap,
                    ),
                  )
                : o || this.options.metadata;
          return new Promise((t, o) => {
            i.grpc.unary(e, {
              request: r,
              host: this.host,
              metadata: s,
              transport: this.options.transport,
              debug: this.options.debug,
              onEnd: function (e) {
                if (e.status === i.grpc.Code.OK) t(e.message);
                else {
                  const t = new Error(e.statusMessage);
                  ((t.code = e.status), (t.metadata = e.trailers), o(t));
                }
              },
            });
          });
        }
      }
      ((t.GrpcWebImpl = GrpcWebImpl),
        s.default.util.Long !== r.default &&
          ((s.default.util.Long = r.default), s.default.configure()));
    },
    5137: function (e, t, o) {
      "use strict";
      (function (e) {
        var n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SearchTxsResult =
            t.TxMsgData =
            t.MsgData =
            t.SimulationResponse =
            t.Result =
            t.GasInfo =
            t.Attribute =
            t.StringEvent =
            t.ABCIMessageLog =
            t.TxResponse =
            t.protobufPackage =
              void 0));
        const r = n(o(2754)),
          i = n(o(2755)),
          s = o(2759),
          a = o(5138);
        t.protobufPackage = "cosmos.base.abci.v1beta1";
        const d = {
          height: r.default.ZERO,
          txhash: "",
          codespace: "",
          code: 0,
          data: "",
          rawLog: "",
          info: "",
          gasWanted: r.default.ZERO,
          gasUsed: r.default.ZERO,
          timestamp: "",
        };
        t.TxResponse = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              e.height.isZero() || o.uint32(8).int64(e.height),
              "" !== e.txhash && o.uint32(18).string(e.txhash),
              "" !== e.codespace && o.uint32(26).string(e.codespace),
              0 !== e.code && o.uint32(32).uint32(e.code),
              "" !== e.data && o.uint32(42).string(e.data),
              "" !== e.rawLog && o.uint32(50).string(e.rawLog));
            for (const n of e.logs)
              t.ABCIMessageLog.encode(n, o.uint32(58).fork()).ldelim();
            ("" !== e.info && o.uint32(66).string(e.info),
              e.gasWanted.isZero() || o.uint32(72).int64(e.gasWanted),
              e.gasUsed.isZero() || o.uint32(80).int64(e.gasUsed),
              void 0 !== e.tx &&
                s.Any.encode(e.tx, o.uint32(90).fork()).ldelim(),
              "" !== e.timestamp && o.uint32(98).string(e.timestamp));
            for (const t of e.events)
              a.Event.encode(t, o.uint32(106).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const l = Object.assign({}, d);
            ((l.logs = []), (l.events = []));
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  l.height = n.int64();
                  break;
                case 2:
                  l.txhash = n.string();
                  break;
                case 3:
                  l.codespace = n.string();
                  break;
                case 4:
                  l.code = n.uint32();
                  break;
                case 5:
                  l.data = n.string();
                  break;
                case 6:
                  l.rawLog = n.string();
                  break;
                case 7:
                  l.logs.push(t.ABCIMessageLog.decode(n, n.uint32()));
                  break;
                case 8:
                  l.info = n.string();
                  break;
                case 9:
                  l.gasWanted = n.int64();
                  break;
                case 10:
                  l.gasUsed = n.int64();
                  break;
                case 11:
                  l.tx = s.Any.decode(n, n.uint32());
                  break;
                case 12:
                  l.timestamp = n.string();
                  break;
                case 13:
                  l.events.push(a.Event.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return l;
          },
          fromJSON(e) {
            const o = Object.assign({}, d);
            if (
              ((o.logs = []),
              (o.events = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = r.default.fromString(e.height))
                : (o.height = r.default.ZERO),
              void 0 !== e.txhash && null !== e.txhash
                ? (o.txhash = String(e.txhash))
                : (o.txhash = ""),
              void 0 !== e.codespace && null !== e.codespace
                ? (o.codespace = String(e.codespace))
                : (o.codespace = ""),
              void 0 !== e.code && null !== e.code
                ? (o.code = Number(e.code))
                : (o.code = 0),
              void 0 !== e.data && null !== e.data
                ? (o.data = String(e.data))
                : (o.data = ""),
              void 0 !== e.rawLog && null !== e.rawLog
                ? (o.rawLog = String(e.rawLog))
                : (o.rawLog = ""),
              void 0 !== e.logs && null !== e.logs)
            )
              for (const n of e.logs) o.logs.push(t.ABCIMessageLog.fromJSON(n));
            if (
              (void 0 !== e.info && null !== e.info
                ? (o.info = String(e.info))
                : (o.info = ""),
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (o.gasWanted = r.default.fromString(e.gasWanted))
                : (o.gasWanted = r.default.ZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (o.gasUsed = r.default.fromString(e.gasUsed))
                : (o.gasUsed = r.default.ZERO),
              void 0 !== e.tx && null !== e.tx
                ? (o.tx = s.Any.fromJSON(e.tx))
                : (o.tx = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = String(e.timestamp))
                : (o.timestamp = ""),
              void 0 !== e.events && null !== e.events)
            )
              for (const t of e.events) o.events.push(a.Event.fromJSON(t));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.height &&
                (o.height = (e.height || r.default.ZERO).toString()),
              void 0 !== e.txhash && (o.txhash = e.txhash),
              void 0 !== e.codespace && (o.codespace = e.codespace),
              void 0 !== e.code && (o.code = e.code),
              void 0 !== e.data && (o.data = e.data),
              void 0 !== e.rawLog && (o.rawLog = e.rawLog),
              e.logs
                ? (o.logs = e.logs.map((e) =>
                    e ? t.ABCIMessageLog.toJSON(e) : void 0,
                  ))
                : (o.logs = []),
              void 0 !== e.info && (o.info = e.info),
              void 0 !== e.gasWanted &&
                (o.gasWanted = (e.gasWanted || r.default.ZERO).toString()),
              void 0 !== e.gasUsed &&
                (o.gasUsed = (e.gasUsed || r.default.ZERO).toString()),
              void 0 !== e.tx && (o.tx = e.tx ? s.Any.toJSON(e.tx) : void 0),
              void 0 !== e.timestamp && (o.timestamp = e.timestamp),
              e.events
                ? (o.events = e.events.map((e) =>
                    e ? a.Event.toJSON(e) : void 0,
                  ))
                : (o.events = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, d);
            if (
              ((o.logs = []),
              (o.events = []),
              void 0 !== e.height && null !== e.height
                ? (o.height = e.height)
                : (o.height = r.default.ZERO),
              void 0 !== e.txhash && null !== e.txhash
                ? (o.txhash = e.txhash)
                : (o.txhash = ""),
              void 0 !== e.codespace && null !== e.codespace
                ? (o.codespace = e.codespace)
                : (o.codespace = ""),
              void 0 !== e.code && null !== e.code
                ? (o.code = e.code)
                : (o.code = 0),
              void 0 !== e.data && null !== e.data
                ? (o.data = e.data)
                : (o.data = ""),
              void 0 !== e.rawLog && null !== e.rawLog
                ? (o.rawLog = e.rawLog)
                : (o.rawLog = ""),
              void 0 !== e.logs && null !== e.logs)
            )
              for (const n of e.logs)
                o.logs.push(t.ABCIMessageLog.fromPartial(n));
            if (
              (void 0 !== e.info && null !== e.info
                ? (o.info = e.info)
                : (o.info = ""),
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (o.gasWanted = e.gasWanted)
                : (o.gasWanted = r.default.ZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (o.gasUsed = e.gasUsed)
                : (o.gasUsed = r.default.ZERO),
              void 0 !== e.tx && null !== e.tx
                ? (o.tx = s.Any.fromPartial(e.tx))
                : (o.tx = void 0),
              void 0 !== e.timestamp && null !== e.timestamp
                ? (o.timestamp = e.timestamp)
                : (o.timestamp = ""),
              void 0 !== e.events && null !== e.events)
            )
              for (const t of e.events) o.events.push(a.Event.fromPartial(t));
            return o;
          },
        };
        const l = { msgIndex: 0, log: "" };
        t.ABCIMessageLog = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              0 !== e.msgIndex && o.uint32(8).uint32(e.msgIndex),
              "" !== e.log && o.uint32(18).string(e.log));
            for (const n of e.events)
              t.StringEvent.encode(n, o.uint32(26).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, l);
            s.events = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.msgIndex = n.uint32();
                  break;
                case 2:
                  s.log = n.string();
                  break;
                case 3:
                  s.events.push(t.StringEvent.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, l);
            if (
              ((o.events = []),
              void 0 !== e.msgIndex && null !== e.msgIndex
                ? (o.msgIndex = Number(e.msgIndex))
                : (o.msgIndex = 0),
              void 0 !== e.log && null !== e.log
                ? (o.log = String(e.log))
                : (o.log = ""),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events)
                o.events.push(t.StringEvent.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.msgIndex && (o.msgIndex = e.msgIndex),
              void 0 !== e.log && (o.log = e.log),
              e.events
                ? (o.events = e.events.map((e) =>
                    e ? t.StringEvent.toJSON(e) : void 0,
                  ))
                : (o.events = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, l);
            if (
              ((o.events = []),
              void 0 !== e.msgIndex && null !== e.msgIndex
                ? (o.msgIndex = e.msgIndex)
                : (o.msgIndex = 0),
              void 0 !== e.log && null !== e.log
                ? (o.log = e.log)
                : (o.log = ""),
              void 0 !== e.events && null !== e.events)
            )
              for (const n of e.events)
                o.events.push(t.StringEvent.fromPartial(n));
            return o;
          },
        };
        const u = { type: "" };
        t.StringEvent = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              "" !== e.type && o.uint32(10).string(e.type));
            for (const n of e.attributes)
              t.Attribute.encode(n, o.uint32(18).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, u);
            s.attributes = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.type = n.string();
                  break;
                case 2:
                  s.attributes.push(t.Attribute.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, u);
            if (
              ((o.attributes = []),
              void 0 !== e.type && null !== e.type
                ? (o.type = String(e.type))
                : (o.type = ""),
              void 0 !== e.attributes && null !== e.attributes)
            )
              for (const n of e.attributes)
                o.attributes.push(t.Attribute.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.type && (o.type = e.type),
              e.attributes
                ? (o.attributes = e.attributes.map((e) =>
                    e ? t.Attribute.toJSON(e) : void 0,
                  ))
                : (o.attributes = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, u);
            if (
              ((o.attributes = []),
              void 0 !== e.type && null !== e.type
                ? (o.type = e.type)
                : (o.type = ""),
              void 0 !== e.attributes && null !== e.attributes)
            )
              for (const n of e.attributes)
                o.attributes.push(t.Attribute.fromPartial(n));
            return o;
          },
        };
        const c = { key: "", value: "" };
        t.Attribute = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.key && t.uint32(10).string(e.key),
              "" !== e.value && t.uint32(18).string(e.value),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, c);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.key = o.string();
                  break;
                case 2:
                  r.value = o.string();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = String(e.key))
                : (t.key = ""),
              void 0 !== e.value && null !== e.value
                ? (t.value = String(e.value))
                : (t.value = ""),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.key && (t.key = e.key),
              void 0 !== e.value && (t.value = e.value),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, c);
            return (
              void 0 !== e.key && null !== e.key
                ? (t.key = e.key)
                : (t.key = ""),
              void 0 !== e.value && null !== e.value
                ? (t.value = e.value)
                : (t.value = ""),
              t
            );
          },
        };
        const p = { gasWanted: r.default.UZERO, gasUsed: r.default.UZERO };
        t.GasInfo = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              e.gasWanted.isZero() || t.uint32(8).uint64(e.gasWanted),
              e.gasUsed.isZero() || t.uint32(16).uint64(e.gasUsed),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, p);
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.gasWanted = o.uint64();
                  break;
                case 2:
                  r.gasUsed = o.uint64();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, p);
            return (
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (t.gasWanted = r.default.fromString(e.gasWanted))
                : (t.gasWanted = r.default.UZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (t.gasUsed = r.default.fromString(e.gasUsed))
                : (t.gasUsed = r.default.UZERO),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.gasWanted &&
                (t.gasWanted = (e.gasWanted || r.default.UZERO).toString()),
              void 0 !== e.gasUsed &&
                (t.gasUsed = (e.gasUsed || r.default.UZERO).toString()),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, p);
            return (
              void 0 !== e.gasWanted && null !== e.gasWanted
                ? (t.gasWanted = e.gasWanted)
                : (t.gasWanted = r.default.UZERO),
              void 0 !== e.gasUsed && null !== e.gasUsed
                ? (t.gasUsed = e.gasUsed)
                : (t.gasUsed = r.default.UZERO),
              t
            );
          },
        };
        const f = { log: "" };
        t.Result = {
          encode(e, t) {
            (void 0 === t && (t = i.default.Writer.create()),
              0 !== e.data.length && t.uint32(10).bytes(e.data),
              "" !== e.log && t.uint32(18).string(e.log));
            for (const o of e.events)
              a.Event.encode(o, t.uint32(26).fork()).ldelim();
            return t;
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, f);
            ((r.events = []), (r.data = new Uint8Array()));
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.data = o.bytes();
                  break;
                case 2:
                  r.log = o.string();
                  break;
                case 3:
                  r.events.push(a.Event.decode(o, o.uint32()));
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, f);
            if (
              ((t.events = []),
              (t.data = new Uint8Array()),
              void 0 !== e.data && null !== e.data && (t.data = S(e.data)),
              void 0 !== e.log && null !== e.log
                ? (t.log = String(e.log))
                : (t.log = ""),
              void 0 !== e.events && null !== e.events)
            )
              for (const o of e.events) t.events.push(a.Event.fromJSON(o));
            return t;
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.data &&
                (t.data = w(void 0 !== e.data ? e.data : new Uint8Array())),
              void 0 !== e.log && (t.log = e.log),
              e.events
                ? (t.events = e.events.map((e) =>
                    e ? a.Event.toJSON(e) : void 0,
                  ))
                : (t.events = []),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, f);
            if (
              ((t.events = []),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              void 0 !== e.log && null !== e.log
                ? (t.log = e.log)
                : (t.log = ""),
              void 0 !== e.events && null !== e.events)
            )
              for (const o of e.events) t.events.push(a.Event.fromPartial(o));
            return t;
          },
        };
        const g = {};
        t.SimulationResponse = {
          encode(e, o) {
            return (
              void 0 === o && (o = i.default.Writer.create()),
              void 0 !== e.gasInfo &&
                t.GasInfo.encode(e.gasInfo, o.uint32(10).fork()).ldelim(),
              void 0 !== e.result &&
                t.Result.encode(e.result, o.uint32(18).fork()).ldelim(),
              o
            );
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, g);
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.gasInfo = t.GasInfo.decode(n, n.uint32());
                  break;
                case 2:
                  s.result = t.Result.decode(n, n.uint32());
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, g);
            return (
              void 0 !== e.gasInfo && null !== e.gasInfo
                ? (o.gasInfo = t.GasInfo.fromJSON(e.gasInfo))
                : (o.gasInfo = void 0),
              void 0 !== e.result && null !== e.result
                ? (o.result = t.Result.fromJSON(e.result))
                : (o.result = void 0),
              o
            );
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.gasInfo &&
                (o.gasInfo = e.gasInfo ? t.GasInfo.toJSON(e.gasInfo) : void 0),
              void 0 !== e.result &&
                (o.result = e.result ? t.Result.toJSON(e.result) : void 0),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, g);
            return (
              void 0 !== e.gasInfo && null !== e.gasInfo
                ? (o.gasInfo = t.GasInfo.fromPartial(e.gasInfo))
                : (o.gasInfo = void 0),
              void 0 !== e.result && null !== e.result
                ? (o.result = t.Result.fromPartial(e.result))
                : (o.result = void 0),
              o
            );
          },
        };
        const m = { msgType: "" };
        t.MsgData = {
          encode(e, t) {
            return (
              void 0 === t && (t = i.default.Writer.create()),
              "" !== e.msgType && t.uint32(10).string(e.msgType),
              0 !== e.data.length && t.uint32(18).bytes(e.data),
              t
            );
          },
          decode(e, t) {
            const o =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let n = void 0 === t ? o.len : o.pos + t;
            const r = Object.assign({}, m);
            r.data = new Uint8Array();
            while (o.pos < n) {
              const e = o.uint32();
              switch (e >>> 3) {
                case 1:
                  r.msgType = o.string();
                  break;
                case 2:
                  r.data = o.bytes();
                  break;
                default:
                  o.skipType(7 & e);
                  break;
              }
            }
            return r;
          },
          fromJSON(e) {
            const t = Object.assign({}, m);
            return (
              (t.data = new Uint8Array()),
              void 0 !== e.msgType && null !== e.msgType
                ? (t.msgType = String(e.msgType))
                : (t.msgType = ""),
              void 0 !== e.data && null !== e.data && (t.data = S(e.data)),
              t
            );
          },
          toJSON(e) {
            const t = {};
            return (
              void 0 !== e.msgType && (t.msgType = e.msgType),
              void 0 !== e.data &&
                (t.data = w(void 0 !== e.data ? e.data : new Uint8Array())),
              t
            );
          },
          fromPartial(e) {
            const t = Object.assign({}, m);
            return (
              void 0 !== e.msgType && null !== e.msgType
                ? (t.msgType = e.msgType)
                : (t.msgType = ""),
              void 0 !== e.data && null !== e.data
                ? (t.data = e.data)
                : (t.data = new Uint8Array()),
              t
            );
          },
        };
        const v = {};
        t.TxMsgData = {
          encode(e, o) {
            void 0 === o && (o = i.default.Writer.create());
            for (const n of e.data)
              t.MsgData.encode(n, o.uint32(10).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, v);
            s.data = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.data.push(t.MsgData.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, v);
            if (((o.data = []), void 0 !== e.data && null !== e.data))
              for (const n of e.data) o.data.push(t.MsgData.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              e.data
                ? (o.data = e.data.map((e) =>
                    e ? t.MsgData.toJSON(e) : void 0,
                  ))
                : (o.data = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, v);
            if (((o.data = []), void 0 !== e.data && null !== e.data))
              for (const n of e.data) o.data.push(t.MsgData.fromPartial(n));
            return o;
          },
        };
        const h = {
          totalCount: r.default.UZERO,
          count: r.default.UZERO,
          pageNumber: r.default.UZERO,
          pageTotal: r.default.UZERO,
          limit: r.default.UZERO,
        };
        t.SearchTxsResult = {
          encode(e, o) {
            (void 0 === o && (o = i.default.Writer.create()),
              e.totalCount.isZero() || o.uint32(8).uint64(e.totalCount),
              e.count.isZero() || o.uint32(16).uint64(e.count),
              e.pageNumber.isZero() || o.uint32(24).uint64(e.pageNumber),
              e.pageTotal.isZero() || o.uint32(32).uint64(e.pageTotal),
              e.limit.isZero() || o.uint32(40).uint64(e.limit));
            for (const n of e.txs)
              t.TxResponse.encode(n, o.uint32(50).fork()).ldelim();
            return o;
          },
          decode(e, o) {
            const n =
              e instanceof i.default.Reader ? e : new i.default.Reader(e);
            let r = void 0 === o ? n.len : n.pos + o;
            const s = Object.assign({}, h);
            s.txs = [];
            while (n.pos < r) {
              const e = n.uint32();
              switch (e >>> 3) {
                case 1:
                  s.totalCount = n.uint64();
                  break;
                case 2:
                  s.count = n.uint64();
                  break;
                case 3:
                  s.pageNumber = n.uint64();
                  break;
                case 4:
                  s.pageTotal = n.uint64();
                  break;
                case 5:
                  s.limit = n.uint64();
                  break;
                case 6:
                  s.txs.push(t.TxResponse.decode(n, n.uint32()));
                  break;
                default:
                  n.skipType(7 & e);
                  break;
              }
            }
            return s;
          },
          fromJSON(e) {
            const o = Object.assign({}, h);
            if (
              ((o.txs = []),
              void 0 !== e.totalCount && null !== e.totalCount
                ? (o.totalCount = r.default.fromString(e.totalCount))
                : (o.totalCount = r.default.UZERO),
              void 0 !== e.count && null !== e.count
                ? (o.count = r.default.fromString(e.count))
                : (o.count = r.default.UZERO),
              void 0 !== e.pageNumber && null !== e.pageNumber
                ? (o.pageNumber = r.default.fromString(e.pageNumber))
                : (o.pageNumber = r.default.UZERO),
              void 0 !== e.pageTotal && null !== e.pageTotal
                ? (o.pageTotal = r.default.fromString(e.pageTotal))
                : (o.pageTotal = r.default.UZERO),
              void 0 !== e.limit && null !== e.limit
                ? (o.limit = r.default.fromString(e.limit))
                : (o.limit = r.default.UZERO),
              void 0 !== e.txs && null !== e.txs)
            )
              for (const n of e.txs) o.txs.push(t.TxResponse.fromJSON(n));
            return o;
          },
          toJSON(e) {
            const o = {};
            return (
              void 0 !== e.totalCount &&
                (o.totalCount = (e.totalCount || r.default.UZERO).toString()),
              void 0 !== e.count &&
                (o.count = (e.count || r.default.UZERO).toString()),
              void 0 !== e.pageNumber &&
                (o.pageNumber = (e.pageNumber || r.default.UZERO).toString()),
              void 0 !== e.pageTotal &&
                (o.pageTotal = (e.pageTotal || r.default.UZERO).toString()),
              void 0 !== e.limit &&
                (o.limit = (e.limit || r.default.UZERO).toString()),
              e.txs
                ? (o.txs = e.txs.map((e) =>
                    e ? t.TxResponse.toJSON(e) : void 0,
                  ))
                : (o.txs = []),
              o
            );
          },
          fromPartial(e) {
            const o = Object.assign({}, h);
            if (
              ((o.txs = []),
              void 0 !== e.totalCount && null !== e.totalCount
                ? (o.totalCount = e.totalCount)
                : (o.totalCount = r.default.UZERO),
              void 0 !== e.count && null !== e.count
                ? (o.count = e.count)
                : (o.count = r.default.UZERO),
              void 0 !== e.pageNumber && null !== e.pageNumber
                ? (o.pageNumber = e.pageNumber)
                : (o.pageNumber = r.default.UZERO),
              void 0 !== e.pageTotal && null !== e.pageTotal
                ? (o.pageTotal = e.pageTotal)
                : (o.pageTotal = r.default.UZERO),
              void 0 !== e.limit && null !== e.limit
                ? (o.limit = e.limit)
                : (o.limit = r.default.UZERO),
              void 0 !== e.txs && null !== e.txs)
            )
              for (const n of e.txs) o.txs.push(t.TxResponse.fromPartial(n));
            return o;
          },
        };
        var b = (() => {
          if ("undefined" !== typeof b) return b;
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw "Unable to locate global object";
        })();
        const O =
          b.atob || ((e) => b.Buffer.from(e, "base64").toString("binary"));
        function S(e) {
          const t = O(e),
            o = new Uint8Array(t.length);
          for (let n = 0; n < t.length; ++n) o[n] = t.charCodeAt(n);
          return o;
        }
        const y =
          b.btoa || ((e) => b.Buffer.from(e, "binary").toString("base64"));
        function w(e) {
          const t = [];
          for (const o of e) t.push(String.fromCharCode(o));
          return y(t.join(""));
        }
        i.default.util.Long !== r.default &&
          ((i.default.util.Long = r.default), i.default.configure());
      }).call(this, o(13));
    },
  },
]);
