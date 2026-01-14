(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [396],
  {
    2804: function (_, t, e) {
      "use strict";
      (function (_, r) {
        let n;
        function i(_) {
          n = _;
        }
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.MoveInstantaneousRewardsCert =
            t.MoveInstantaneousReward =
            t.MintsAssets =
            t.MintWitness =
            t.MintBuilder =
            t.MintAssets =
            t.Mint =
            t.MetadataMap =
            t.MetadataList =
            t.MetadataJsonSchema =
            t.MalformedAddress =
            t.MIRToStakeCredentials =
            t.MIRPot =
            t.MIRKind =
            t.LinearFee =
            t.LegacyDaedalusPrivateKey =
            t.Languages =
            t.LanguageKind =
            t.Language =
            t.KESVKey =
            t.KESSignature =
            t.Ipv6 =
            t.Ipv4 =
            t.Int =
            t.InfoAction =
            t.HeaderBody =
            t.Header =
            t.HardForkInitiationAction =
            t.GovernanceActionKind =
            t.GovernanceActionIds =
            t.GovernanceActionId =
            t.GovernanceAction =
            t.GenesisKeyDelegation =
            t.GenesisHashes =
            t.GenesisHash =
            t.GenesisDelegateHash =
            t.GeneralTransactionMetadata =
            t.FixedVersionedBlock =
            t.FixedTxWitnessesSet =
            t.FixedTransactionBody =
            t.FixedTransactionBodies =
            t.FixedTransaction =
            t.FixedBlock =
            t.ExUnits =
            t.ExUnitPrices =
            t.EnterpriseAddress =
            t.Ed25519Signature =
            t.Ed25519KeyHashes =
            t.Ed25519KeyHash =
            t.DatumSource =
            t.DataHash =
            t.DataCost =
            t.DRepVotingThresholds =
            t.DRepUpdate =
            t.DRepRegistration =
            t.DRepKind =
            t.DRepDeregistration =
            t.DRep =
            t.DNSRecordSRV =
            t.DNSRecordAorAAAA =
            t.Credentials =
            t.Credential =
            t.CredKind =
            t.Costmdls =
            t.CostModel =
            t.ConstrPlutusData =
            t.Constitution =
            t.CommitteeHotAuth =
            t.CommitteeColdResign =
            t.Committee =
            t.CoinSelectionStrategyCIP2 =
            t.ChangeConfig =
            t.CertificatesBuilder =
            t.Certificates =
            t.CertificateKind =
            t.Certificate =
            t.CborSetType =
            t.CborContainerType =
            t.ByronAddressType =
            t.ByronAddress =
            t.BootstrapWitnesses =
            t.BootstrapWitness =
            t.BlockHash =
            t.BlockEra =
            t.Block =
            t.Bip32PublicKey =
            t.Bip32PrivateKey =
            t.BigNum =
            t.BigInt =
            t.BaseAddress =
            t.AuxiliaryDataSet =
            t.AuxiliaryDataHash =
            t.AuxiliaryData =
            t.Assets =
            t.AssetNames =
            t.AssetName =
            t.AnchorDataHash =
            t.Anchor =
            t.AddressKind =
            t.Address =
              void 0),
          (t.UpdateCommitteeAction =
            t.Update =
            t.UnitInterval =
            t.URL =
            t.TxInputsBuilder =
            t.TreasuryWithdrawalsAction =
            t.TreasuryWithdrawals =
            t.TransactionWitnessSets =
            t.TransactionWitnessSet =
            t.TransactionUnspentOutputs =
            t.TransactionUnspentOutput =
            t.TransactionSetsState =
            t.TransactionOutputs =
            t.TransactionOutputBuilder =
            t.TransactionOutputAmountBuilder =
            t.TransactionOutput =
            t.TransactionMetadatumLabels =
            t.TransactionMetadatumKind =
            t.TransactionMetadatum =
            t.TransactionInputs =
            t.TransactionInput =
            t.TransactionHash =
            t.TransactionBuilderConfigBuilder =
            t.TransactionBuilderConfig =
            t.TransactionBuilder =
            t.TransactionBody =
            t.TransactionBodies =
            t.TransactionBatchList =
            t.TransactionBatch =
            t.Transaction =
            t.TimelockStart =
            t.TimelockExpiry =
            t.Strings =
            t.StakeVoteRegistrationAndDelegation =
            t.StakeRegistrationAndDelegation =
            t.StakeRegistration =
            t.StakeDeregistration =
            t.StakeDelegation =
            t.StakeAndVoteDelegation =
            t.SingleHostName =
            t.SingleHostAddr =
            t.ScriptSchema =
            t.ScriptRef =
            t.ScriptPubkey =
            t.ScriptNOfK =
            t.ScriptHashes =
            t.ScriptHashNamespace =
            t.ScriptHash =
            t.ScriptDataHash =
            t.ScriptAny =
            t.ScriptAll =
            t.RewardAddresses =
            t.RewardAddress =
            t.Relays =
            t.RelayKind =
            t.Relay =
            t.Redeemers =
            t.RedeemerTagKind =
            t.RedeemerTag =
            t.Redeemer =
            t.PublicKeys =
            t.PublicKey =
            t.ProtocolVersion =
            t.ProtocolParamUpdate =
            t.ProposedProtocolParameterUpdates =
            t.PrivateKey =
            t.PoolVotingThresholds =
            t.PoolRetirement =
            t.PoolRegistration =
            t.PoolParams =
            t.PoolMetadataHash =
            t.PoolMetadata =
            t.PointerAddress =
            t.Pointer =
            t.PlutusWitnesses =
            t.PlutusWitness =
            t.PlutusScripts =
            t.PlutusScriptSource =
            t.PlutusScript =
            t.PlutusMapValues =
            t.PlutusMap =
            t.PlutusList =
            t.PlutusDatumSchema =
            t.PlutusDataKind =
            t.PlutusData =
            t.ParameterChangeAction =
            t.OutputDatum =
            t.OperationalCert =
            t.Nonce =
            t.NoConfidenceAction =
            t.NewConstitutionAction =
            t.NetworkInfo =
            t.NetworkIdKind =
            t.NetworkId =
            t.NativeScripts =
            t.NativeScriptSource =
            t.NativeScriptKind =
            t.NativeScript =
            t.MultiHostName =
            t.MultiAsset =
              void 0),
          (t.WithdrawalsBuilder =
            t.Withdrawals =
            t.VotingProposals =
            t.VotingProposalBuilder =
            t.VotingProposal =
            t.VotingProcedures =
            t.VotingProcedure =
            t.VotingBuilder =
            t.Voters =
            t.VoterKind =
            t.Voter =
            t.VoteRegistrationAndDelegation =
            t.VoteKind =
            t.VoteDelegation =
            t.Vkeywitnesses =
            t.Vkeywitness =
            t.Vkeys =
            t.Vkey =
            t.VersionedBlock =
            t.Value =
            t.VRFVKey =
            t.VRFKeyHash =
            t.VRFCert =
              void 0),
          (t.__wbg_String_91fba7ded13ba54c = Gr),
          (t.__wbg_buffer_12d079cc21e14bdb = yn),
          (t.__wbg_call_27c0f87801dedf93 = sn),
          (t.__wbg_call_b3ca7c6051f9bec1 = un),
          (t.__wbg_call_eae29933372a39be = Rn),
          (t.__wbg_crypto_1d1f22824a6a080c = $r),
          (t.__wbg_crypto_e95a6e54c5c2e37f = Bn),
          (t.__wbg_getRandomValues_02639197c8166a96 = zn),
          (t.__wbg_getRandomValues_3aa56aa6edec874c = tn),
          (t.__wbg_getRandomValues_dc67302a7bd1aec5 = Fn),
          (t.__wbg_globalThis_d1e6af4856ba331b = pn),
          (t.__wbg_global_207b558942527489 = gn),
          (t.__wbg_msCrypto_eb05e62b530a1508 = _n),
          (t.__wbg_new_16b304a2cfa7ff4a = rn),
          (t.__wbg_new_63b92bc8671ed464 = kn),
          (t.__wbg_new_72fb9a18b5ae2624 = dn),
          (t.__wbg_new_d87f272aec784ec0 = jn),
          (t.__wbg_new_d9bc3a0147634640 = on),
          (t.__wbg_newnoargs_e258087cd0daa0ea = an),
          (t.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = fn),
          (t.__wbg_newwithlength_e9b4878cebadb3d3 = vn),
          (t.__wbg_node_104a2ff8d6ea03a2 = Qr),
          (t.__wbg_process_4a72847cc503995b = Jr),
          (t.__wbg_randomFillSync_5c9c955aa56b6049 = en),
          (t.__wbg_randomFillSync_dd2297de5917c74e = Tn),
          (t.__wbg_require_0993fe224bf8e202 = Pn),
          (t.__wbg_require_cca90b1a94a0255b = Zr),
          (t.__wbg_self_ce0dbfc45cf2f5be = cn),
          (t.__wbg_self_e0b3266d2d9eba1a = Sn),
          (t.__wbg_set_20cbc34131e76824 = qr),
          (t.__wbg_set_8417257aaedc936b = hn),
          (t.__wbg_set_a47bac70306a19a7 = mn),
          (t.__wbg_set_d4638f722068f043 = ln),
          (t.__wbg_set_wasm = i),
          (t.__wbg_subarray_a1f73cd4b5b42fe1 = xn),
          (t.__wbg_versions_f686565e586dd935 = Yr),
          (t.__wbg_window_c6fb939a7f436783 = wn),
          (t.__wbindgen_debug_string = Cn),
          (t.__wbindgen_error_new = Ur),
          (t.__wbindgen_is_function = nn),
          (t.__wbindgen_is_object = Lr),
          (t.__wbindgen_is_string = Xr),
          (t.__wbindgen_is_undefined = bn),
          (t.__wbindgen_jsval_eq = An),
          (t.__wbindgen_memory = Dn),
          (t.__wbindgen_number_new = Ir),
          (t.__wbindgen_object_clone_ref = Wr),
          (t.__wbindgen_object_drop_ref = Mr),
          (t.__wbindgen_string_get = Er),
          (t.__wbindgen_string_new = Kr),
          (t.__wbindgen_throw = Nn),
          (t.calculate_ex_units_ceil_cost = N),
          (t.create_send_all = z),
          (t.decode_arbitrary_bytes_from_metadatum = M),
          (t.decode_metadatum_to_json_str = U),
          (t.decode_plutus_datum_to_json_str = H),
          (t.decrypt_with_password = W),
          (t.encode_arbitrary_bytes_as_metadatum = I),
          (t.encode_json_str_to_metadatum = K),
          (t.encode_json_str_to_native_script = __),
          (t.encode_json_str_to_plutus_datum = O),
          (t.encrypt_with_password = E),
          (t.get_deposit = X),
          (t.get_implicit_input = Q),
          (t.has_transaction_set_tag = t_),
          (t.hash_auxiliary_data = $),
          (t.hash_plutus_data = J),
          (t.hash_script_data = Y),
          (t.make_daedalus_bootstrap_witness = L),
          (t.make_icarus_bootstrap_witness = G),
          (t.make_vkey_witness = q),
          (t.min_ada_for_output = Z),
          (t.min_fee = C),
          (t.min_ref_script_fee = V),
          (t.min_script_fee = D));
        const a = new Array(128).fill(void 0);
        a.push(void 0, null, !0, !1);
        let o = a.length;
        function s(_) {
          o === a.length && a.push(a.length + 1);
          const t = o;
          return ((o = a[t]), (a[t] = _), t);
        }
        function d(_) {
          return a[_];
        }
        function c(_) {
          _ < 132 || ((a[_] = o), (o = _));
        }
        function w(_) {
          const t = d(_);
          return (c(_), t);
        }
        const p =
          "undefined" === typeof TextDecoder
            ? (0, _.require)("util").TextDecoder
            : TextDecoder;
        let g = new p("utf-8", { ignoreBOM: !0, fatal: !0 });
        g.decode();
        let b = null;
        function l() {
          return (
            (null !== b && 0 !== b.byteLength) ||
              (b = new Uint8Array(n.memory.buffer)),
            b
          );
        }
        function u(_, t) {
          return ((_ >>>= 0), g.decode(l().subarray(_, _ + t)));
        }
        let h = 0;
        const y =
          "undefined" === typeof TextEncoder
            ? (0, _.require)("util").TextEncoder
            : TextEncoder;
        let f = new y("utf-8");
        const k =
          "function" === typeof f.encodeInto
            ? function (_, t) {
                return f.encodeInto(_, t);
              }
            : function (_, t) {
                const e = f.encode(_);
                return (t.set(e), { read: _.length, written: e.length });
              };
        function m(_, t, e) {
          if (void 0 === e) {
            const e = f.encode(_),
              r = t(e.length, 1) >>> 0;
            return (
              l()
                .subarray(r, r + e.length)
                .set(e),
              (h = e.length),
              r
            );
          }
          let r = _.length,
            n = t(r, 1) >>> 0;
          const i = l();
          let a = 0;
          for (; a < r; a++) {
            const t = _.charCodeAt(a);
            if (t > 127) break;
            i[n + a] = t;
          }
          if (a !== r) {
            (0 !== a && (_ = _.slice(a)),
              (n = e(n, r, (r = a + 3 * _.length), 1) >>> 0));
            const t = l().subarray(n + a, n + r),
              i = k(_, t);
            ((a += i.written), (n = e(n, r, a, 1) >>> 0));
          }
          return ((h = a), n);
        }
        function v(_) {
          return void 0 === _ || null === _;
        }
        let x = null;
        function j() {
          return (
            (null !== x && 0 !== x.byteLength) ||
              (x = new Int32Array(n.memory.buffer)),
            x
          );
        }
        function R(_) {
          const t = typeof _;
          if ("number" == t || "boolean" == t || null == _) return "" + _;
          if ("string" == t) return `"${_}"`;
          if ("symbol" == t) {
            const t = _.description;
            return null == t ? "Symbol" : `Symbol(${t})`;
          }
          if ("function" == t) {
            const t = _.name;
            return "string" == typeof t && t.length > 0
              ? `Function(${t})`
              : "Function";
          }
          if (Array.isArray(_)) {
            const t = _.length;
            let e = "[";
            t > 0 && (e += R(_[0]));
            for (let r = 1; r < t; r++) e += ", " + R(_[r]);
            return ((e += "]"), e);
          }
          const e = /\[object ([^\]]+)\]/.exec(toString.call(_));
          let r;
          if (!(e.length > 1)) return toString.call(_);
          if (((r = e[1]), "Object" == r))
            try {
              return "Object(" + JSON.stringify(_) + ")";
            } catch (n) {
              return "Object";
            }
          return _ instanceof Error ? `${_.name}: ${_.message}\n${_.stack}` : r;
        }
        function A(_, t) {
          return ((_ >>>= 0), l().subarray(_ / 1, _ / 1 + t));
        }
        function S(_, t) {
          const e = t(1 * _.length, 1) >>> 0;
          return (l().set(_, e / 1), (h = _.length), e);
        }
        function P(_, t) {
          if (!(_ instanceof t))
            throw new Error("expected instance of " + t.name);
          return _.ptr;
        }
        let B = null;
        function F() {
          return (
            (null !== B && 0 !== B.byteLength) ||
              (B = new Uint32Array(n.memory.buffer)),
            B
          );
        }
        function T(_, t) {
          return ((_ >>>= 0), F().subarray(_ / 4, _ / 4 + t));
        }
        function z(_, t, e) {
          try {
            const o = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, Address),
              P(t, TransactionUnspentOutputs),
              P(e, TransactionBuilderConfig),
              n.create_send_all(o, _.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr));
            var r = j()[o / 4 + 0],
              i = j()[o / 4 + 1],
              a = j()[o / 4 + 2];
            if (a) throw w(i);
            return TransactionBatchList.__wrap(r);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function C(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, Transaction),
              P(t, LinearFee),
              n.min_fee(a, _.__wbg_ptr, t.__wbg_ptr));
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return BigNum.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function N(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, ExUnits),
              P(t, ExUnitPrices),
              n.calculate_ex_units_ceil_cost(a, _.__wbg_ptr, t.__wbg_ptr));
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return BigNum.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function D(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, Transaction),
              P(t, ExUnitPrices),
              n.min_script_fee(a, _.__wbg_ptr, t.__wbg_ptr));
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return BigNum.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function V(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16);
            (P(t, UnitInterval), n.min_ref_script_fee(a, _, t.__wbg_ptr));
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return BigNum.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function O(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16),
              o = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              s = h;
            n.encode_json_str_to_plutus_datum(a, o, s, t);
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return PlutusData.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function H(_, t) {
          let e, r;
          try {
            const p = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, PlutusData),
              n.decode_plutus_datum_to_json_str(p, _.__wbg_ptr, t));
            var i = j()[p / 4 + 0],
              a = j()[p / 4 + 1],
              o = j()[p / 4 + 2],
              s = j()[p / 4 + 3],
              d = i,
              c = a;
            if (s) throw ((d = 0), (c = 0), w(o));
            return ((e = d), (r = c), u(d, c));
          } finally {
            (n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(e, r, 1));
          }
        }
        function I(_) {
          const t = S(_, n.__wbindgen_malloc),
            e = h,
            r = n.encode_arbitrary_bytes_as_metadatum(t, e);
          return TransactionMetadatum.__wrap(r);
        }
        function M(_) {
          try {
            const o = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, TransactionMetadatum),
              n.decode_arbitrary_bytes_from_metadatum(o, _.__wbg_ptr));
            var t = j()[o / 4 + 0],
              e = j()[o / 4 + 1],
              r = j()[o / 4 + 2],
              i = j()[o / 4 + 3];
            if (i) throw w(r);
            var a = A(t, e).slice();
            return (n.__wbindgen_free(t, 1 * e, 1), a);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function K(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16),
              o = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              s = h;
            n.encode_json_str_to_metadatum(a, o, s, t);
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return TransactionMetadatum.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function U(_, t) {
          let e, r;
          try {
            const p = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, TransactionMetadatum),
              n.decode_metadatum_to_json_str(p, _.__wbg_ptr, t));
            var i = j()[p / 4 + 0],
              a = j()[p / 4 + 1],
              o = j()[p / 4 + 2],
              s = j()[p / 4 + 3],
              d = i,
              c = a;
            if (s) throw ((d = 0), (c = 0), w(o));
            return ((e = d), (r = c), u(d, c));
          } finally {
            (n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(e, r, 1));
          }
        }
        function E(_, t, e, r) {
          let i, a;
          try {
            const b = n.__wbindgen_add_to_stack_pointer(-16),
              l = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              y = h,
              f = m(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
              k = h,
              v = m(e, n.__wbindgen_malloc, n.__wbindgen_realloc),
              x = h,
              R = m(r, n.__wbindgen_malloc, n.__wbindgen_realloc),
              A = h;
            n.encrypt_with_password(b, l, y, f, k, v, x, R, A);
            var o = j()[b / 4 + 0],
              s = j()[b / 4 + 1],
              d = j()[b / 4 + 2],
              c = j()[b / 4 + 3],
              p = o,
              g = s;
            if (c) throw ((p = 0), (g = 0), w(d));
            return ((i = p), (a = g), u(p, g));
          } finally {
            (n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(i, a, 1));
          }
        }
        function W(_, t) {
          let e, r;
          try {
            const p = n.__wbindgen_add_to_stack_pointer(-16),
              g = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              b = h,
              l = m(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
              y = h;
            n.decrypt_with_password(p, g, b, l, y);
            var i = j()[p / 4 + 0],
              a = j()[p / 4 + 1],
              o = j()[p / 4 + 2],
              s = j()[p / 4 + 3],
              d = i,
              c = a;
            if (s) throw ((d = 0), (c = 0), w(o));
            return ((e = d), (r = c), u(d, c));
          } finally {
            (n.__wbindgen_add_to_stack_pointer(16), n.__wbindgen_free(e, r, 1));
          }
        }
        function L(_, t, e) {
          (P(_, TransactionHash),
            P(t, ByronAddress),
            P(e, LegacyDaedalusPrivateKey));
          const r = n.make_daedalus_bootstrap_witness(
            _.__wbg_ptr,
            t.__wbg_ptr,
            e.__wbg_ptr,
          );
          return BootstrapWitness.__wrap(r);
        }
        function G(_, t, e) {
          (P(_, TransactionHash), P(t, ByronAddress), P(e, Bip32PrivateKey));
          const r = n.make_icarus_bootstrap_witness(
            _.__wbg_ptr,
            t.__wbg_ptr,
            e.__wbg_ptr,
          );
          return BootstrapWitness.__wrap(r);
        }
        function q(_, t) {
          (P(_, TransactionHash), P(t, PrivateKey));
          const e = n.make_vkey_witness(_.__wbg_ptr, t.__wbg_ptr);
          return Vkeywitness.__wrap(e);
        }
        function $(_) {
          P(_, AuxiliaryData);
          const t = n.hash_auxiliary_data(_.__wbg_ptr);
          return AuxiliaryDataHash.__wrap(t);
        }
        function J(_) {
          P(_, PlutusData);
          const t = n.hash_plutus_data(_.__wbg_ptr);
          return DataHash.__wrap(t);
        }
        function Y(_, t, e) {
          (P(_, Redeemers), P(t, Costmdls));
          let r = 0;
          v(e) || (P(e, PlutusList), (r = e.__destroy_into_raw()));
          const i = n.hash_script_data(_.__wbg_ptr, t.__wbg_ptr, r);
          return ScriptDataHash.__wrap(i);
        }
        function Q(_, t, e) {
          try {
            const o = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, TransactionBody),
              P(t, BigNum),
              P(e, BigNum),
              n.get_implicit_input(o, _.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr));
            var r = j()[o / 4 + 0],
              i = j()[o / 4 + 1],
              a = j()[o / 4 + 2];
            if (a) throw w(i);
            return Value.__wrap(r);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function X(_, t, e) {
          try {
            const o = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, TransactionBody),
              P(t, BigNum),
              P(e, BigNum),
              n.get_deposit(o, _.__wbg_ptr, t.__wbg_ptr, e.__wbg_ptr));
            var r = j()[o / 4 + 0],
              i = j()[o / 4 + 1],
              a = j()[o / 4 + 2];
            if (a) throw w(i);
            return BigNum.__wrap(r);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function Z(_, t) {
          try {
            const a = n.__wbindgen_add_to_stack_pointer(-16);
            (P(_, TransactionOutput),
              P(t, DataCost),
              n.min_ada_for_output(a, _.__wbg_ptr, t.__wbg_ptr));
            var e = j()[a / 4 + 0],
              r = j()[a / 4 + 1],
              i = j()[a / 4 + 2];
            if (i) throw w(r);
            return BigNum.__wrap(e);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function __(_, t, e) {
          try {
            const o = n.__wbindgen_add_to_stack_pointer(-16),
              s = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              d = h,
              c = m(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
              p = h;
            n.encode_json_str_to_native_script(o, s, d, c, p, e);
            var r = j()[o / 4 + 0],
              i = j()[o / 4 + 1],
              a = j()[o / 4 + 2];
            if (a) throw w(i);
            return NativeScript.__wrap(r);
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function t_(_) {
          try {
            const i = n.__wbindgen_add_to_stack_pointer(-16),
              a = S(_, n.__wbindgen_malloc),
              o = h;
            n.has_transaction_set_tag(i, a, o);
            var t = j()[i / 4 + 0],
              e = j()[i / 4 + 1],
              r = j()[i / 4 + 2];
            if (r) throw w(e);
            return t;
          } finally {
            n.__wbindgen_add_to_stack_pointer(16);
          }
        }
        function e_(_, t) {
          const e = t(4 * _.length, 4) >>> 0;
          return (F().set(_, e / 4), (h = _.length), e);
        }
        function r_(_, t) {
          try {
            return _.apply(this, t);
          } catch (e) {
            n.__wbindgen_exn_store(s(e));
          }
        }
        ((t.LanguageKind = Object.freeze({
          PlutusV1: 0,
          0: "PlutusV1",
          PlutusV2: 1,
          1: "PlutusV2",
          PlutusV3: 2,
          2: "PlutusV3",
        })),
          (t.CborSetType = Object.freeze({
            Tagged: 0,
            0: "Tagged",
            Untagged: 1,
            1: "Untagged",
          })),
          (t.MIRKind = Object.freeze({
            ToOtherPot: 0,
            0: "ToOtherPot",
            ToStakeCredentials: 1,
            1: "ToStakeCredentials",
          })),
          (t.CborContainerType = Object.freeze({
            Array: 0,
            0: "Array",
            Map: 1,
            1: "Map",
          })),
          (t.ScriptHashNamespace = Object.freeze({
            NativeScript: 0,
            0: "NativeScript",
            PlutusScript: 1,
            1: "PlutusScript",
            PlutusScriptV2: 2,
            2: "PlutusScriptV2",
            PlutusScriptV3: 3,
            3: "PlutusScriptV3",
          })),
          (t.RedeemerTagKind = Object.freeze({
            Spend: 0,
            0: "Spend",
            Mint: 1,
            1: "Mint",
            Cert: 2,
            2: "Cert",
            Reward: 3,
            3: "Reward",
            Vote: 4,
            4: "Vote",
            VotingProposal: 5,
            5: "VotingProposal",
          })),
          (t.ScriptSchema = Object.freeze({
            Wallet: 0,
            0: "Wallet",
            Node: 1,
            1: "Node",
          })),
          (t.TransactionMetadatumKind = Object.freeze({
            MetadataMap: 0,
            0: "MetadataMap",
            MetadataList: 1,
            1: "MetadataList",
            Int: 2,
            2: "Int",
            Bytes: 3,
            3: "Bytes",
            Text: 4,
            4: "Text",
          })),
          (t.MetadataJsonSchema = Object.freeze({
            NoConversions: 0,
            0: "NoConversions",
            BasicConversions: 1,
            1: "BasicConversions",
            DetailedSchema: 2,
            2: "DetailedSchema",
          })),
          (t.BlockEra = Object.freeze({
            Byron: 0,
            0: "Byron",
            Shelley: 1,
            1: "Shelley",
            Allegra: 2,
            2: "Allegra",
            Mary: 3,
            3: "Mary",
            Alonzo: 4,
            4: "Alonzo",
            Babbage: 5,
            5: "Babbage",
            Conway: 6,
            6: "Conway",
            Unknown: 7,
            7: "Unknown",
          })),
          (t.GovernanceActionKind = Object.freeze({
            ParameterChangeAction: 0,
            0: "ParameterChangeAction",
            HardForkInitiationAction: 1,
            1: "HardForkInitiationAction",
            TreasuryWithdrawalsAction: 2,
            2: "TreasuryWithdrawalsAction",
            NoConfidenceAction: 3,
            3: "NoConfidenceAction",
            UpdateCommitteeAction: 4,
            4: "UpdateCommitteeAction",
            NewConstitutionAction: 5,
            5: "NewConstitutionAction",
            InfoAction: 6,
            6: "InfoAction",
          })),
          (t.ByronAddressType = Object.freeze({
            ATPubKey: 0,
            0: "ATPubKey",
            ATScript: 1,
            1: "ATScript",
            ATRedeem: 2,
            2: "ATRedeem",
          })),
          (t.NetworkIdKind = Object.freeze({
            Testnet: 0,
            0: "Testnet",
            Mainnet: 1,
            1: "Mainnet",
          })),
          (t.PlutusDatumSchema = Object.freeze({
            BasicConversions: 0,
            0: "BasicConversions",
            DetailedSchema: 1,
            1: "DetailedSchema",
          })),
          (t.TransactionSetsState = Object.freeze({
            AllSetsHaveTag: 0,
            0: "AllSetsHaveTag",
            AllSetsHaveNoTag: 1,
            1: "AllSetsHaveNoTag",
            MixedSets: 2,
            2: "MixedSets",
          })),
          (t.AddressKind = Object.freeze({
            Base: 0,
            0: "Base",
            Pointer: 1,
            1: "Pointer",
            Enterprise: 2,
            2: "Enterprise",
            Reward: 3,
            3: "Reward",
            Byron: 4,
            4: "Byron",
            Malformed: 5,
            5: "Malformed",
          })),
          (t.VoterKind = Object.freeze({
            ConstitutionalCommitteeHotKeyHash: 0,
            0: "ConstitutionalCommitteeHotKeyHash",
            ConstitutionalCommitteeHotScriptHash: 1,
            1: "ConstitutionalCommitteeHotScriptHash",
            DRepKeyHash: 2,
            2: "DRepKeyHash",
            DRepScriptHash: 3,
            3: "DRepScriptHash",
            StakingPoolKeyHash: 4,
            4: "StakingPoolKeyHash",
          })),
          (t.CoinSelectionStrategyCIP2 = Object.freeze({
            LargestFirst: 0,
            0: "LargestFirst",
            RandomImprove: 1,
            1: "RandomImprove",
            LargestFirstMultiAsset: 2,
            2: "LargestFirstMultiAsset",
            RandomImproveMultiAsset: 3,
            3: "RandomImproveMultiAsset",
          })),
          (t.RelayKind = Object.freeze({
            SingleHostAddr: 0,
            0: "SingleHostAddr",
            SingleHostName: 1,
            1: "SingleHostName",
            MultiHostName: 2,
            2: "MultiHostName",
          })),
          (t.CredKind = Object.freeze({
            Key: 0,
            0: "Key",
            Script: 1,
            1: "Script",
          })),
          (t.NativeScriptKind = Object.freeze({
            ScriptPubkey: 0,
            0: "ScriptPubkey",
            ScriptAll: 1,
            1: "ScriptAll",
            ScriptAny: 2,
            2: "ScriptAny",
            ScriptNOfK: 3,
            3: "ScriptNOfK",
            TimelockStart: 4,
            4: "TimelockStart",
            TimelockExpiry: 5,
            5: "TimelockExpiry",
          })),
          (t.VoteKind = Object.freeze({
            No: 0,
            0: "No",
            Yes: 1,
            1: "Yes",
            Abstain: 2,
            2: "Abstain",
          })),
          (t.MIRPot = Object.freeze({
            Reserves: 0,
            0: "Reserves",
            Treasury: 1,
            1: "Treasury",
          })),
          (t.PlutusDataKind = Object.freeze({
            ConstrPlutusData: 0,
            0: "ConstrPlutusData",
            Map: 1,
            1: "Map",
            List: 2,
            2: "List",
            Integer: 3,
            3: "Integer",
            Bytes: 4,
            4: "Bytes",
          })),
          (t.CertificateKind = Object.freeze({
            StakeRegistration: 0,
            0: "StakeRegistration",
            StakeDeregistration: 1,
            1: "StakeDeregistration",
            StakeDelegation: 2,
            2: "StakeDelegation",
            PoolRegistration: 3,
            3: "PoolRegistration",
            PoolRetirement: 4,
            4: "PoolRetirement",
            GenesisKeyDelegation: 5,
            5: "GenesisKeyDelegation",
            MoveInstantaneousRewardsCert: 6,
            6: "MoveInstantaneousRewardsCert",
            CommitteeHotAuth: 7,
            7: "CommitteeHotAuth",
            CommitteeColdResign: 8,
            8: "CommitteeColdResign",
            DRepDeregistration: 9,
            9: "DRepDeregistration",
            DRepRegistration: 10,
            10: "DRepRegistration",
            DRepUpdate: 11,
            11: "DRepUpdate",
            StakeAndVoteDelegation: 12,
            12: "StakeAndVoteDelegation",
            StakeRegistrationAndDelegation: 13,
            13: "StakeRegistrationAndDelegation",
            StakeVoteRegistrationAndDelegation: 14,
            14: "StakeVoteRegistrationAndDelegation",
            VoteDelegation: 15,
            15: "VoteDelegation",
            VoteRegistrationAndDelegation: 16,
            16: "VoteRegistrationAndDelegation",
          })),
          (t.DRepKind = Object.freeze({
            KeyHash: 0,
            0: "KeyHash",
            ScriptHash: 1,
            1: "ScriptHash",
            AlwaysAbstain: 2,
            2: "AlwaysAbstain",
            AlwaysNoConfidence: 3,
            3: "AlwaysNoConfidence",
          })));
        const n_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_address_free(_ >>> 0));
        class Address {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Address.prototype);
            return ((t.__wbg_ptr = _), n_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), n_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_address_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.address_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Address.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.address_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.address_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.address_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Address.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          kind() {
            const _ = n.address_kind(this.__wbg_ptr);
            return _;
          }
          payment_cred() {
            const _ = n.address_payment_cred(this.__wbg_ptr);
            return 0 === _ ? void 0 : Credential.__wrap(_);
          }
          is_malformed() {
            const _ = n.address_is_malformed(this.__wbg_ptr);
            return 0 !== _;
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.address_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.address_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Address.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.address_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const g = n.__wbindgen_add_to_stack_pointer(-16);
              var r = v(_)
                  ? 0
                  : m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                i = h;
              n.address_to_bech32(g, this.__wbg_ptr, r, i);
              var a = j()[g / 4 + 0],
                o = j()[g / 4 + 1],
                s = j()[g / 4 + 2],
                d = j()[g / 4 + 3],
                c = a,
                p = o;
              if (d) throw ((c = 0), (p = 0), w(s));
              return ((t = c), (e = p), u(c, p));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.address_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Address.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          network_id() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.address_network_id(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Address = Address;
        const i_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_anchor_free(_ >>> 0));
        class Anchor {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Anchor.prototype);
            return ((t.__wbg_ptr = _), i_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), i_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_anchor_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchor_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.anchor_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Anchor.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchor_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.anchor_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Anchor.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchor_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchor_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.anchor_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Anchor.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          url() {
            const _ = n.anchor_url(this.__wbg_ptr);
            return URL.__wrap(_);
          }
          anchor_data_hash() {
            const _ = n.anchor_anchor_data_hash(this.__wbg_ptr);
            return AnchorDataHash.__wrap(_);
          }
          static new(_, t) {
            (P(_, URL), P(t, AnchorDataHash));
            const e = n.anchor_new(_.__wbg_ptr, t.__wbg_ptr);
            return Anchor.__wrap(e);
          }
        }
        t.Anchor = Anchor;
        const a_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_anchordatahash_free(_ >>> 0),
              );
        class AnchorDataHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(AnchorDataHash.prototype);
            return ((t.__wbg_ptr = _), a_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), a_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_anchordatahash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.anchordatahash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AnchorDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.anchordatahash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AnchorDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.anchordatahash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AnchorDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.AnchorDataHash = AnchorDataHash;
        const o_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_assetname_free(_ >>> 0));
        class AssetName {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(AssetName.prototype);
            return ((t.__wbg_ptr = _), o_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), o_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_assetname_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetname_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.assetname_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetname_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.assetname_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetname_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetname_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.assetname_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.assetname_new(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          name() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetname_name(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.AssetName = AssetName;
        const s_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_assetnames_free(_ >>> 0));
        class AssetNames {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(AssetNames.prototype);
            return ((t.__wbg_ptr = _), s_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), s_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_assetnames_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetnames_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.assetnames_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetNames.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetnames_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.assetnames_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetNames.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetnames_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assetnames_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.assetnames_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AssetNames.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.assetnames_new();
            return AssetNames.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.assetnames_get(this.__wbg_ptr, _);
            return AssetName.__wrap(t);
          }
          add(_) {
            (P(_, AssetName), n.assetnames_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.AssetNames = AssetNames;
        const d_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_assets_free(_ >>> 0));
        class Assets {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Assets.prototype);
            return ((t.__wbg_ptr = _), d_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), d_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_assets_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assets_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.assets_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Assets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.assets_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.assets_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Assets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.assets_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.assets_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.assets_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Assets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.assets_new();
            return Assets.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, AssetName), P(t, BigNum));
            const e = n.assets_insert(this.__wbg_ptr, _.__wbg_ptr, t.__wbg_ptr);
            return 0 === e ? void 0 : BigNum.__wrap(e);
          }
          get(_) {
            P(_, AssetName);
            const t = n.assets_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : BigNum.__wrap(t);
          }
          keys() {
            const _ = n.assets_keys(this.__wbg_ptr);
            return AssetNames.__wrap(_);
          }
        }
        t.Assets = Assets;
        const c_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_auxiliarydata_free(_ >>> 0),
              );
        class AuxiliaryData {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(AuxiliaryData.prototype);
            return ((t.__wbg_ptr = _), c_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), c_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_auxiliarydata_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.auxiliarydata_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.auxiliarydata_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AuxiliaryData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.auxiliarydata_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.auxiliarydata_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AuxiliaryData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.auxiliarydata_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.auxiliarydata_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.auxiliarydata_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AuxiliaryData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.auxiliarydata_new();
            return AuxiliaryData.__wrap(_);
          }
          metadata() {
            const _ = n.auxiliarydata_metadata(this.__wbg_ptr);
            return 0 === _ ? void 0 : GeneralTransactionMetadata.__wrap(_);
          }
          set_metadata(_) {
            (P(_, GeneralTransactionMetadata),
              n.auxiliarydata_set_metadata(this.__wbg_ptr, _.__wbg_ptr));
          }
          native_scripts() {
            const _ = n.auxiliarydata_native_scripts(this.__wbg_ptr);
            return 0 === _ ? void 0 : NativeScripts.__wrap(_);
          }
          set_native_scripts(_) {
            (P(_, NativeScripts),
              n.auxiliarydata_set_native_scripts(this.__wbg_ptr, _.__wbg_ptr));
          }
          plutus_scripts() {
            const _ = n.auxiliarydata_plutus_scripts(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusScripts.__wrap(_);
          }
          set_plutus_scripts(_) {
            (P(_, PlutusScripts),
              n.auxiliarydata_set_plutus_scripts(this.__wbg_ptr, _.__wbg_ptr));
          }
          prefer_alonzo_format() {
            const _ = n.auxiliarydata_prefer_alonzo_format(this.__wbg_ptr);
            return 0 !== _;
          }
          set_prefer_alonzo_format(_) {
            n.auxiliarydata_set_prefer_alonzo_format(this.__wbg_ptr, _);
          }
        }
        t.AuxiliaryData = AuxiliaryData;
        const w_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_auxiliarydatahash_free(_ >>> 0),
              );
        class AuxiliaryDataHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(AuxiliaryDataHash.prototype);
            return ((t.__wbg_ptr = _), w_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), w_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_auxiliarydatahash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.auxiliarydatahash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AuxiliaryDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.auxiliarydatahash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AuxiliaryDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.auxiliarydatahash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return AuxiliaryDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.AuxiliaryDataHash = AuxiliaryDataHash;
        const p_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_auxiliarydataset_free(_ >>> 0),
              );
        class AuxiliaryDataSet {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(AuxiliaryDataSet.prototype);
            return ((t.__wbg_ptr = _), p_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), p_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_auxiliarydataset_free(_);
          }
          static new() {
            const _ = n.auxiliarydataset_new();
            return AuxiliaryDataSet.__wrap(_);
          }
          len() {
            const _ = n.auxiliarydataset_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            P(t, AuxiliaryData);
            const e = n.auxiliarydataset_insert(this.__wbg_ptr, _, t.__wbg_ptr);
            return 0 === e ? void 0 : AuxiliaryData.__wrap(e);
          }
          get(_) {
            const t = n.auxiliarydataset_get(this.__wbg_ptr, _);
            return 0 === t ? void 0 : AuxiliaryData.__wrap(t);
          }
          indices() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.auxiliarydataset_indices(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = T(_, t).slice();
              return (n.__wbindgen_free(_, 4 * t, 4), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.AuxiliaryDataSet = AuxiliaryDataSet;
        const g_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_baseaddress_free(_ >>> 0),
              );
        class BaseAddress {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(BaseAddress.prototype);
            return ((t.__wbg_ptr = _), g_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), g_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_baseaddress_free(_);
          }
          static new(_, t, e) {
            (P(t, Credential), P(e, Credential));
            const r = n.baseaddress_new(_, t.__wbg_ptr, e.__wbg_ptr);
            return BaseAddress.__wrap(r);
          }
          payment_cred() {
            const _ = n.baseaddress_payment_cred(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          stake_cred() {
            const _ = n.baseaddress_stake_cred(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          to_address() {
            const _ = n.baseaddress_to_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          static from_address(_) {
            P(_, Address);
            const t = n.baseaddress_from_address(_.__wbg_ptr);
            return 0 === t ? void 0 : BaseAddress.__wrap(t);
          }
          network_id() {
            const _ = n.baseaddress_network_id(this.__wbg_ptr);
            return _;
          }
        }
        t.BaseAddress = BaseAddress;
        const b_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_bigint_free(_ >>> 0));
        class BigInt {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(BigInt.prototype);
            return ((t.__wbg_ptr = _), b_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), b_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_bigint_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bigint_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bigint_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigInt.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bigint_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bigint_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigInt.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.bigint_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bigint_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bigint_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigInt.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          is_zero() {
            const _ = n.bigint_is_zero(this.__wbg_ptr);
            return 0 !== _;
          }
          as_u64() {
            const _ = n.bigint_as_u64(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          as_int() {
            const _ = n.bigint_as_int(this.__wbg_ptr);
            return 0 === _ ? void 0 : Int.__wrap(_);
          }
          static from_str(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bigint_from_str(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigInt.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_str() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bigint_to_str(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          add(_) {
            P(_, BigInt);
            const t = n.bigint_add(this.__wbg_ptr, _.__wbg_ptr);
            return BigInt.__wrap(t);
          }
          sub(_) {
            P(_, BigInt);
            const t = n.bigint_sub(this.__wbg_ptr, _.__wbg_ptr);
            return BigInt.__wrap(t);
          }
          mul(_) {
            P(_, BigInt);
            const t = n.bigint_mul(this.__wbg_ptr, _.__wbg_ptr);
            return BigInt.__wrap(t);
          }
          pow(_) {
            const t = n.bigint_pow(this.__wbg_ptr, _);
            return BigInt.__wrap(t);
          }
          static one() {
            const _ = n.bigint_one();
            return BigInt.__wrap(_);
          }
          static zero() {
            const _ = n.bigint_zero();
            return BigInt.__wrap(_);
          }
          abs() {
            const _ = n.bigint_abs(this.__wbg_ptr);
            return BigInt.__wrap(_);
          }
          increment() {
            const _ = n.bigint_increment(this.__wbg_ptr);
            return BigInt.__wrap(_);
          }
          div_ceil(_) {
            P(_, BigInt);
            const t = n.bigint_div_ceil(this.__wbg_ptr, _.__wbg_ptr);
            return BigInt.__wrap(t);
          }
          div_floor(_) {
            P(_, BigInt);
            const t = n.bigint_div_floor(this.__wbg_ptr, _.__wbg_ptr);
            return BigInt.__wrap(t);
          }
        }
        t.BigInt = BigInt;
        const l_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_bignum_free(_ >>> 0));
        class BigNum {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(BigNum.prototype);
            return ((t.__wbg_ptr = _), l_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), l_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_bignum_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bignum_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bignum_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bignum_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bignum_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.bignum_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bignum_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bignum_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_str(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bignum_from_str(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_str() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bignum_to_str(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static zero() {
            const _ = n.bignum_zero();
            return BigNum.__wrap(_);
          }
          static one() {
            const _ = n.bignum_one();
            return BigNum.__wrap(_);
          }
          is_zero() {
            const _ = n.bignum_is_zero(this.__wbg_ptr);
            return 0 !== _;
          }
          div_floor(_) {
            P(_, BigNum);
            const t = n.bignum_div_floor(this.__wbg_ptr, _.__wbg_ptr);
            return BigNum.__wrap(t);
          }
          checked_mul(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                n.bignum_checked_mul(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          checked_add(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                n.bignum_checked_add(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          checked_sub(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                n.bignum_checked_sub(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          clamped_sub(_) {
            P(_, BigNum);
            const t = n.bignum_clamped_sub(this.__wbg_ptr, _.__wbg_ptr);
            return BigNum.__wrap(t);
          }
          compare(_) {
            P(_, BigNum);
            const t = n.bignum_compare(this.__wbg_ptr, _.__wbg_ptr);
            return t;
          }
          less_than(_) {
            P(_, BigNum);
            const t = n.bignum_less_than(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          static max_value() {
            const _ = n.bignum_max_value();
            return BigNum.__wrap(_);
          }
          static max(_, t) {
            (P(_, BigNum), P(t, BigNum));
            const e = n.bignum_max(_.__wbg_ptr, t.__wbg_ptr);
            return BigNum.__wrap(e);
          }
        }
        t.BigNum = BigNum;
        const u_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_bip32privatekey_free(_ >>> 0),
              );
        class Bip32PrivateKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Bip32PrivateKey.prototype);
            return ((t.__wbg_ptr = _), u_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), u_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_bip32privatekey_free(_);
          }
          derive(_) {
            const t = n.bip32privatekey_derive(this.__wbg_ptr, _);
            return Bip32PrivateKey.__wrap(t);
          }
          static from_128_xprv(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bip32privatekey_from_128_xprv(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_128_xprv() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32privatekey_to_128_xprv(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static generate_ed25519_bip32() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32privatekey_generate_ed25519_bip32(r);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Bip32PrivateKey.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_raw_key() {
            const _ = n.bip32privatekey_to_raw_key(this.__wbg_ptr);
            return PrivateKey.__wrap(_);
          }
          to_public() {
            const _ = n.bip32privatekey_to_public(this.__wbg_ptr);
            return Bip32PublicKey.__wrap(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bip32privatekey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32privatekey_as_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bip32privatekey_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32privatekey_to_bech32(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_bip39_entropy(_, t) {
            const e = S(_, n.__wbindgen_malloc),
              r = h,
              i = S(t, n.__wbindgen_malloc),
              a = h,
              o = n.bip32privatekey_from_bip39_entropy(e, r, i, a);
            return Bip32PrivateKey.__wrap(o);
          }
          chaincode() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32privatekey_chaincode(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32privatekey_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bip32privatekey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Bip32PrivateKey = Bip32PrivateKey;
        const h_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_bip32publickey_free(_ >>> 0),
              );
        class Bip32PublicKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Bip32PublicKey.prototype);
            return ((t.__wbg_ptr = _), h_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), h_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_bip32publickey_free(_);
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bip32publickey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32publickey_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          chaincode() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32publickey_chaincode(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32publickey_to_bech32(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bip32publickey_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32publickey_as_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bip32publickey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_raw_key() {
            const _ = n.bip32publickey_to_raw_key(this.__wbg_ptr);
            return PublicKey.__wrap(_);
          }
          derive(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bip32publickey_derive(i, this.__wbg_ptr, _);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Bip32PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Bip32PublicKey = Bip32PublicKey;
        const y_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_block_free(_ >>> 0));
        class Block {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Block.prototype);
            return ((t.__wbg_ptr = _), y_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), y_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_block_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.block_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.block_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Block.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.block_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.block_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Block.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.block_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.block_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.block_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Block.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          header() {
            const _ = n.block_header(this.__wbg_ptr);
            return Header.__wrap(_);
          }
          transaction_bodies() {
            const _ = n.block_transaction_bodies(this.__wbg_ptr);
            return TransactionBodies.__wrap(_);
          }
          transaction_witness_sets() {
            const _ = n.block_transaction_witness_sets(this.__wbg_ptr);
            return TransactionWitnessSets.__wrap(_);
          }
          auxiliary_data_set() {
            const _ = n.block_auxiliary_data_set(this.__wbg_ptr);
            return AuxiliaryDataSet.__wrap(_);
          }
          invalid_transactions() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.block_invalid_transactions(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = T(_, t).slice();
              return (n.__wbindgen_free(_, 4 * t, 4), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t, e, r, i) {
            (P(_, Header),
              P(t, TransactionBodies),
              P(e, TransactionWitnessSets),
              P(r, AuxiliaryDataSet));
            const a = e_(i, n.__wbindgen_malloc),
              o = h,
              s = n.block_new(
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
                r.__wbg_ptr,
                a,
                o,
              );
            return Block.__wrap(s);
          }
        }
        t.Block = Block;
        const f_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_blockhash_free(_ >>> 0));
        class BlockHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(BlockHash.prototype);
            return ((t.__wbg_ptr = _), f_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), f_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_blockhash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.blockhash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BlockHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.blockhash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BlockHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.blockhash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BlockHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.BlockHash = BlockHash;
        const k_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_bootstrapwitness_free(_ >>> 0),
              );
        class BootstrapWitness {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(BootstrapWitness.prototype);
            return ((t.__wbg_ptr = _), k_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), k_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_bootstrapwitness_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitness_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bootstrapwitness_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BootstrapWitness.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitness_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bootstrapwitness_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BootstrapWitness.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitness_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitness_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bootstrapwitness_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BootstrapWitness.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          vkey() {
            const _ = n.bootstrapwitness_vkey(this.__wbg_ptr);
            return Vkey.__wrap(_);
          }
          signature() {
            const _ = n.bootstrapwitness_signature(this.__wbg_ptr);
            return Ed25519Signature.__wrap(_);
          }
          chain_code() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitness_chain_code(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          attributes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitness_attributes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t, e, r) {
            (P(_, Vkey), P(t, Ed25519Signature));
            const i = S(e, n.__wbindgen_malloc),
              a = h,
              o = S(r, n.__wbindgen_malloc),
              s = h,
              d = n.bootstrapwitness_new(_.__wbg_ptr, t.__wbg_ptr, i, a, o, s);
            return BootstrapWitness.__wrap(d);
          }
        }
        t.BootstrapWitness = BootstrapWitness;
        const m_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_bootstrapwitnesses_free(_ >>> 0),
              );
        class BootstrapWitnesses {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(BootstrapWitnesses.prototype);
            return ((t.__wbg_ptr = _), m_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), m_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_bootstrapwitnesses_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitnesses_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.bootstrapwitnesses_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BootstrapWitnesses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitnesses_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bootstrapwitnesses_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BootstrapWitnesses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitnesses_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.bootstrapwitnesses_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.bootstrapwitnesses_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BootstrapWitnesses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.bootstrapwitnesses_new();
            return BootstrapWitnesses.__wrap(_);
          }
          len() {
            const _ = n.bootstrapwitnesses_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.bootstrapwitnesses_get(this.__wbg_ptr, _);
            return BootstrapWitness.__wrap(t);
          }
          add(_) {
            P(_, BootstrapWitness);
            const t = n.bootstrapwitnesses_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
        }
        t.BootstrapWitnesses = BootstrapWitnesses;
        const v_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_byronaddress_free(_ >>> 0),
              );
        class ByronAddress {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ByronAddress.prototype);
            return ((t.__wbg_ptr = _), v_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), v_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_byronaddress_free(_);
          }
          to_base58() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.byronaddress_to_base58(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.byronaddress_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.byronaddress_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ByronAddress.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          byron_protocol_magic() {
            const _ = n.byronaddress_byron_protocol_magic(this.__wbg_ptr);
            return _ >>> 0;
          }
          byron_address_kind() {
            const _ = n.byronaddress_byron_address_kind(this.__wbg_ptr);
            return _;
          }
          attributes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.byronaddress_attributes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          network_id() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.byronaddress_network_id(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_base58(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.byronaddress_from_base58(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ByronAddress.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static icarus_from_key(_, t) {
            P(_, Bip32PublicKey);
            const e = n.byronaddress_icarus_from_key(_.__wbg_ptr, t);
            return ByronAddress.__wrap(e);
          }
          static is_valid(_) {
            const t = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              e = h,
              r = n.byronaddress_is_valid(t, e);
            return 0 !== r;
          }
          to_address() {
            const _ = n.byronaddress_to_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          static from_address(_) {
            P(_, Address);
            const t = n.byronaddress_from_address(_.__wbg_ptr);
            return 0 === t ? void 0 : ByronAddress.__wrap(t);
          }
        }
        t.ByronAddress = ByronAddress;
        const x_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_certificate_free(_ >>> 0),
              );
        class Certificate {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Certificate.prototype);
            return ((t.__wbg_ptr = _), x_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), x_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_certificate_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificate_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.certificate_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificate_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.certificate_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificate_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificate_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.certificate_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_stake_registration(_) {
            P(_, StakeRegistration);
            const t = n.certificate_new_stake_registration(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_reg_cert(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, StakeRegistration),
                n.certificate_new_reg_cert(i, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_stake_deregistration(_) {
            P(_, StakeDeregistration);
            const t = n.certificate_new_stake_deregistration(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_unreg_cert(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, StakeDeregistration),
                n.certificate_new_unreg_cert(i, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_stake_delegation(_) {
            P(_, StakeDelegation);
            const t = n.certificate_new_stake_delegation(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_pool_registration(_) {
            P(_, PoolRegistration);
            const t = n.certificate_new_pool_registration(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_pool_retirement(_) {
            P(_, PoolRetirement);
            const t = n.certificate_new_pool_retirement(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_genesis_key_delegation(_) {
            P(_, GenesisKeyDelegation);
            const t = n.certificate_new_genesis_key_delegation(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_move_instantaneous_rewards_cert(_) {
            P(_, MoveInstantaneousRewardsCert);
            const t = n.certificate_new_move_instantaneous_rewards_cert(
              _.__wbg_ptr,
            );
            return Certificate.__wrap(t);
          }
          static new_committee_hot_auth(_) {
            P(_, CommitteeHotAuth);
            const t = n.certificate_new_committee_hot_auth(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_committee_cold_resign(_) {
            P(_, CommitteeColdResign);
            const t = n.certificate_new_committee_cold_resign(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_drep_deregistration(_) {
            P(_, DRepDeregistration);
            const t = n.certificate_new_drep_deregistration(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_drep_registration(_) {
            P(_, DRepRegistration);
            const t = n.certificate_new_drep_registration(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_drep_update(_) {
            P(_, DRepUpdate);
            const t = n.certificate_new_drep_update(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_stake_and_vote_delegation(_) {
            P(_, StakeAndVoteDelegation);
            const t = n.certificate_new_stake_and_vote_delegation(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_stake_registration_and_delegation(_) {
            P(_, StakeRegistrationAndDelegation);
            const t = n.certificate_new_stake_registration_and_delegation(
              _.__wbg_ptr,
            );
            return Certificate.__wrap(t);
          }
          static new_stake_vote_registration_and_delegation(_) {
            P(_, StakeVoteRegistrationAndDelegation);
            const t = n.certificate_new_stake_vote_registration_and_delegation(
              _.__wbg_ptr,
            );
            return Certificate.__wrap(t);
          }
          static new_vote_delegation(_) {
            P(_, VoteDelegation);
            const t = n.certificate_new_vote_delegation(_.__wbg_ptr);
            return Certificate.__wrap(t);
          }
          static new_vote_registration_and_delegation(_) {
            P(_, VoteRegistrationAndDelegation);
            const t = n.certificate_new_vote_registration_and_delegation(
              _.__wbg_ptr,
            );
            return Certificate.__wrap(t);
          }
          kind() {
            const _ = n.certificate_kind(this.__wbg_ptr);
            return _;
          }
          as_stake_registration() {
            const _ = n.certificate_as_stake_registration(this.__wbg_ptr);
            return 0 === _ ? void 0 : StakeRegistration.__wrap(_);
          }
          as_reg_cert() {
            const _ = n.certificate_as_reg_cert(this.__wbg_ptr);
            return 0 === _ ? void 0 : StakeRegistration.__wrap(_);
          }
          as_stake_deregistration() {
            const _ = n.certificate_as_stake_deregistration(this.__wbg_ptr);
            return 0 === _ ? void 0 : StakeDeregistration.__wrap(_);
          }
          as_unreg_cert() {
            const _ = n.certificate_as_unreg_cert(this.__wbg_ptr);
            return 0 === _ ? void 0 : StakeDeregistration.__wrap(_);
          }
          as_stake_delegation() {
            const _ = n.certificate_as_stake_delegation(this.__wbg_ptr);
            return 0 === _ ? void 0 : StakeDelegation.__wrap(_);
          }
          as_pool_registration() {
            const _ = n.certificate_as_pool_registration(this.__wbg_ptr);
            return 0 === _ ? void 0 : PoolRegistration.__wrap(_);
          }
          as_pool_retirement() {
            const _ = n.certificate_as_pool_retirement(this.__wbg_ptr);
            return 0 === _ ? void 0 : PoolRetirement.__wrap(_);
          }
          as_genesis_key_delegation() {
            const _ = n.certificate_as_genesis_key_delegation(this.__wbg_ptr);
            return 0 === _ ? void 0 : GenesisKeyDelegation.__wrap(_);
          }
          as_move_instantaneous_rewards_cert() {
            const _ = n.certificate_as_move_instantaneous_rewards_cert(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : MoveInstantaneousRewardsCert.__wrap(_);
          }
          as_committee_hot_auth() {
            const _ = n.certificate_as_committee_hot_auth(this.__wbg_ptr);
            return 0 === _ ? void 0 : CommitteeHotAuth.__wrap(_);
          }
          as_committee_cold_resign() {
            const _ = n.certificate_as_committee_cold_resign(this.__wbg_ptr);
            return 0 === _ ? void 0 : CommitteeColdResign.__wrap(_);
          }
          as_drep_deregistration() {
            const _ = n.certificate_as_drep_deregistration(this.__wbg_ptr);
            return 0 === _ ? void 0 : DRepDeregistration.__wrap(_);
          }
          as_drep_registration() {
            const _ = n.certificate_as_drep_registration(this.__wbg_ptr);
            return 0 === _ ? void 0 : DRepRegistration.__wrap(_);
          }
          as_drep_update() {
            const _ = n.certificate_as_drep_update(this.__wbg_ptr);
            return 0 === _ ? void 0 : DRepUpdate.__wrap(_);
          }
          as_stake_and_vote_delegation() {
            const _ = n.certificate_as_stake_and_vote_delegation(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : StakeAndVoteDelegation.__wrap(_);
          }
          as_stake_registration_and_delegation() {
            const _ = n.certificate_as_stake_registration_and_delegation(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : StakeRegistrationAndDelegation.__wrap(_);
          }
          as_stake_vote_registration_and_delegation() {
            const _ = n.certificate_as_stake_vote_registration_and_delegation(
              this.__wbg_ptr,
            );
            return 0 === _
              ? void 0
              : StakeVoteRegistrationAndDelegation.__wrap(_);
          }
          as_vote_delegation() {
            const _ = n.certificate_as_vote_delegation(this.__wbg_ptr);
            return 0 === _ ? void 0 : VoteDelegation.__wrap(_);
          }
          as_vote_registration_and_delegation() {
            const _ = n.certificate_as_vote_registration_and_delegation(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : VoteRegistrationAndDelegation.__wrap(_);
          }
          has_required_script_witness() {
            const _ = n.certificate_has_required_script_witness(this.__wbg_ptr);
            return 0 !== _;
          }
        }
        t.Certificate = Certificate;
        const j_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_certificates_free(_ >>> 0),
              );
        class Certificates {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Certificates.prototype);
            return ((t.__wbg_ptr = _), j_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), j_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_certificates_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificates_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.certificates_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificates.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificates_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.certificates_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificates.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificates_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.certificates_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.certificates_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Certificates.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.certificates_new();
            return Certificates.__wrap(_);
          }
          len() {
            const _ = n.certificates_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.certificates_get(this.__wbg_ptr, _);
            return Certificate.__wrap(t);
          }
          add(_) {
            P(_, Certificate);
            const t = n.certificates_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
        }
        t.Certificates = Certificates;
        const R_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_certificatesbuilder_free(_ >>> 0),
              );
        class CertificatesBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(CertificatesBuilder.prototype);
            return ((t.__wbg_ptr = _), R_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), R_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_certificatesbuilder_free(_);
          }
          static new() {
            const _ = n.certificatesbuilder_new();
            return CertificatesBuilder.__wrap(_);
          }
          add(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Certificate),
                n.certificatesbuilder_add(r, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_plutus_witness(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Certificate),
                P(t, PlutusWitness),
                n.certificatesbuilder_add_with_plutus_witness(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_native_script(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Certificate),
                P(t, NativeScriptSource),
                n.certificatesbuilder_add_with_native_script(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_plutus_witnesses() {
            const _ = n.certificatesbuilder_get_plutus_witnesses(
              this.__wbg_ptr,
            );
            return PlutusWitnesses.__wrap(_);
          }
          get_ref_inputs() {
            const _ = n.certificatesbuilder_get_ref_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          get_native_scripts() {
            const _ = n.certificatesbuilder_get_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          get_certificates_refund(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                P(t, BigNum),
                n.certificatesbuilder_get_certificates_refund(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return Value.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_certificates_deposit(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                P(t, BigNum),
                n.certificatesbuilder_get_certificates_deposit(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return BigNum.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          has_plutus_scripts() {
            const _ = n.certificatesbuilder_has_plutus_scripts(this.__wbg_ptr);
            return 0 !== _;
          }
          build() {
            const _ = n.certificatesbuilder_build(this.__wbg_ptr);
            return Certificates.__wrap(_);
          }
        }
        t.CertificatesBuilder = CertificatesBuilder;
        const A_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_changeconfig_free(_ >>> 0),
              );
        class ChangeConfig {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ChangeConfig.prototype);
            return ((t.__wbg_ptr = _), A_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), A_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_changeconfig_free(_);
          }
          static new(_) {
            P(_, Address);
            const t = n.changeconfig_new(_.__wbg_ptr);
            return ChangeConfig.__wrap(t);
          }
          change_address(_) {
            P(_, Address);
            const t = n.changeconfig_change_address(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return ChangeConfig.__wrap(t);
          }
          change_plutus_data(_) {
            P(_, OutputDatum);
            const t = n.changeconfig_change_plutus_data(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return ChangeConfig.__wrap(t);
          }
          change_script_ref(_) {
            P(_, ScriptRef);
            const t = n.changeconfig_change_script_ref(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return ChangeConfig.__wrap(t);
          }
        }
        t.ChangeConfig = ChangeConfig;
        const S_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_committee_free(_ >>> 0));
        class Committee {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Committee.prototype);
            return ((t.__wbg_ptr = _), S_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), S_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_committee_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.committee_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.committee_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Committee.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.committee_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.committee_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Committee.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.committee_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.committee_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.committee_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Committee.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            P(_, UnitInterval);
            const t = n.committee_new(_.__wbg_ptr);
            return Committee.__wrap(t);
          }
          members_keys() {
            const _ = n.committee_members_keys(this.__wbg_ptr);
            return Credentials.__wrap(_);
          }
          quorum_threshold() {
            const _ = n.committee_quorum_threshold(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          add_member(_, t) {
            (P(_, Credential),
              n.committee_add_member(this.__wbg_ptr, _.__wbg_ptr, t));
          }
          get_member_epoch(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Credential),
                n.committee_get_member_epoch(r, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              return 0 === t ? void 0 : e >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Committee = Committee;
        const P_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_committeecoldresign_free(_ >>> 0),
              );
        class CommitteeColdResign {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(CommitteeColdResign.prototype);
            return ((t.__wbg_ptr = _), P_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), P_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_committeecoldresign_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeecoldresign_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.committeecoldresign_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CommitteeColdResign.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeecoldresign_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.committeecoldresign_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CommitteeColdResign.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeecoldresign_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeecoldresign_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.committeecoldresign_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CommitteeColdResign.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          committee_cold_credential() {
            const _ = n.committeecoldresign_committee_cold_credential(
              this.__wbg_ptr,
            );
            return Credential.__wrap(_);
          }
          anchor() {
            const _ = n.committeecoldresign_anchor(this.__wbg_ptr);
            return 0 === _ ? void 0 : Anchor.__wrap(_);
          }
          static new(_) {
            P(_, Credential);
            const t = n.committeecoldresign_new(_.__wbg_ptr);
            return CommitteeColdResign.__wrap(t);
          }
          static new_with_anchor(_, t) {
            (P(_, Credential), P(t, Anchor));
            const e = n.committeecoldresign_new_with_anchor(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return CommitteeColdResign.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.committeecoldresign_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.CommitteeColdResign = CommitteeColdResign;
        const B_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_committeehotauth_free(_ >>> 0),
              );
        class CommitteeHotAuth {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(CommitteeHotAuth.prototype);
            return ((t.__wbg_ptr = _), B_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), B_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_committeehotauth_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeehotauth_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.committeehotauth_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CommitteeHotAuth.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeehotauth_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.committeehotauth_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CommitteeHotAuth.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeehotauth_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.committeehotauth_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.committeehotauth_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CommitteeHotAuth.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          committee_cold_credential() {
            const _ = n.committeehotauth_committee_cold_credential(
              this.__wbg_ptr,
            );
            return Credential.__wrap(_);
          }
          committee_hot_credential() {
            const _ = n.committeehotauth_committee_hot_credential(
              this.__wbg_ptr,
            );
            return Credential.__wrap(_);
          }
          static new(_, t) {
            (P(_, Credential), P(t, Credential));
            const e = n.committeehotauth_new(_.__wbg_ptr, t.__wbg_ptr);
            return CommitteeHotAuth.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.committeehotauth_has_script_credentials(this.__wbg_ptr);
            return 0 !== _;
          }
        }
        t.CommitteeHotAuth = CommitteeHotAuth;
        const F_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_constitution_free(_ >>> 0),
              );
        class Constitution {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Constitution.prototype);
            return ((t.__wbg_ptr = _), F_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), F_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_constitution_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.constitution_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.constitution_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Constitution.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.constitution_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.constitution_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Constitution.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.constitution_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.constitution_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.constitution_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Constitution.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          anchor() {
            const _ = n.constitution_anchor(this.__wbg_ptr);
            return Anchor.__wrap(_);
          }
          script_hash() {
            const _ = n.constitution_script_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptHash.__wrap(_);
          }
          static new(_) {
            P(_, Anchor);
            const t = n.constitution_new(_.__wbg_ptr);
            return Constitution.__wrap(t);
          }
          static new_with_script_hash(_, t) {
            (P(_, Anchor), P(t, ScriptHash));
            const e = n.constitution_new_with_script_hash(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return Constitution.__wrap(e);
          }
        }
        t.Constitution = Constitution;
        const T_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_constrplutusdata_free(_ >>> 0),
              );
        class ConstrPlutusData {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ConstrPlutusData.prototype);
            return ((t.__wbg_ptr = _), T_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), T_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_constrplutusdata_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.constrplutusdata_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.constrplutusdata_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ConstrPlutusData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.constrplutusdata_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.constrplutusdata_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ConstrPlutusData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          alternative() {
            const _ = n.constrplutusdata_alternative(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          data() {
            const _ = n.constrplutusdata_data(this.__wbg_ptr);
            return PlutusList.__wrap(_);
          }
          static new(_, t) {
            (P(_, BigNum), P(t, PlutusList));
            const e = n.constrplutusdata_new(_.__wbg_ptr, t.__wbg_ptr);
            return ConstrPlutusData.__wrap(e);
          }
        }
        t.ConstrPlutusData = ConstrPlutusData;
        const z_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_costmodel_free(_ >>> 0));
        class CostModel {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(CostModel.prototype);
            return ((t.__wbg_ptr = _), z_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), z_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_costmodel_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmodel_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.costmodel_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CostModel.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmodel_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.costmodel_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CostModel.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmodel_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmodel_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.costmodel_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return CostModel.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.costmodel_new();
            return CostModel.__wrap(_);
          }
          set(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(t, Int), n.costmodel_set(a, this.__wbg_ptr, _, t.__wbg_ptr));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return Int.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmodel_get(i, this.__wbg_ptr, _);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Int.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          len() {
            const _ = n.costmodel_len(this.__wbg_ptr);
            return _ >>> 0;
          }
        }
        t.CostModel = CostModel;
        const C_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_costmdls_free(_ >>> 0));
        class Costmdls {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Costmdls.prototype);
            return ((t.__wbg_ptr = _), C_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), C_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_costmdls_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmdls_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.costmdls_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Costmdls.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmdls_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.costmdls_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Costmdls.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmdls_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.costmdls_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.costmdls_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Costmdls.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.costmdls_new();
            return Costmdls.__wrap(_);
          }
          len() {
            const _ = n.costmdls_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, Language), P(t, CostModel));
            const e = n.costmdls_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : CostModel.__wrap(e);
          }
          get(_) {
            P(_, Language);
            const t = n.costmdls_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : CostModel.__wrap(t);
          }
          keys() {
            const _ = n.costmdls_keys(this.__wbg_ptr);
            return Languages.__wrap(_);
          }
          retain_language_versions(_) {
            P(_, Languages);
            const t = n.costmdls_retain_language_versions(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return Costmdls.__wrap(t);
          }
        }
        t.Costmdls = Costmdls;
        const N_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_credential_free(_ >>> 0));
        class Credential {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Credential.prototype);
            return ((t.__wbg_ptr = _), N_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), N_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_credential_free(_);
          }
          static from_keyhash(_) {
            P(_, Ed25519KeyHash);
            const t = n.credential_from_keyhash(_.__wbg_ptr);
            return Credential.__wrap(t);
          }
          static from_scripthash(_) {
            P(_, ScriptHash);
            const t = n.credential_from_scripthash(_.__wbg_ptr);
            return Credential.__wrap(t);
          }
          to_keyhash() {
            const _ = n.credential_to_keyhash(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ed25519KeyHash.__wrap(_);
          }
          to_scripthash() {
            const _ = n.credential_to_scripthash(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptHash.__wrap(_);
          }
          kind() {
            const _ = n.credential_has_script_hash(this.__wbg_ptr);
            return _;
          }
          has_script_hash() {
            const _ = n.credential_has_script_hash(this.__wbg_ptr);
            return 0 !== _;
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.credential_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.credential_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Credential.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.credential_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.credential_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Credential.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.credential_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.credential_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.credential_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Credential.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Credential = Credential;
        const D_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_credentials_free(_ >>> 0),
              );
        class Credentials {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Credentials.prototype);
            return ((t.__wbg_ptr = _), D_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), D_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_credentials_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.credentials_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.credentials_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Credentials.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.credentials_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.credentials_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Credentials.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.credentials_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.credentials_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.credentials_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Credentials.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.credentials_new();
            return Credentials.__wrap(_);
          }
          len() {
            const _ = n.credentials_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.credentials_get(this.__wbg_ptr, _);
            return Credential.__wrap(t);
          }
          add(_) {
            P(_, Credential);
            const t = n.credentials_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
        }
        t.Credentials = Credentials;
        const V_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_dnsrecordaoraaaa_free(_ >>> 0),
              );
        class DNSRecordAorAAAA {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DNSRecordAorAAAA.prototype);
            return ((t.__wbg_ptr = _), V_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), V_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_dnsrecordaoraaaa_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.dnsrecordaoraaaa_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordAorAAAA.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.dnsrecordaoraaaa_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordAorAAAA.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.dnsrecordaoraaaa_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordAorAAAA.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.dnsrecordaoraaaa_new(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordAorAAAA.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          record() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_record(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
        }
        t.DNSRecordAorAAAA = DNSRecordAorAAAA;
        const O_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_dnsrecordsrv_free(_ >>> 0),
              );
        class DNSRecordSRV {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DNSRecordSRV.prototype);
            return ((t.__wbg_ptr = _), O_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), O_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_dnsrecordsrv_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordsrv_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.dnsrecordsrv_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordSRV.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordsrv_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.dnsrecordsrv_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordSRV.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.dnsrecordsrv_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordSRV.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.dnsrecordsrv_new(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DNSRecordSRV.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          record() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_record(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
        }
        t.DNSRecordSRV = DNSRecordSRV;
        const H_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_drep_free(_ >>> 0));
        class DRep {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DRep.prototype);
            return ((t.__wbg_ptr = _), H_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), H_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_drep_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drep_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.drep_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRep.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.drep_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drep_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRep.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.drep_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drep_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drep_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRep.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_key_hash(_) {
            P(_, Ed25519KeyHash);
            const t = n.drep_new_key_hash(_.__wbg_ptr);
            return DRep.__wrap(t);
          }
          static new_script_hash(_) {
            P(_, ScriptHash);
            const t = n.drep_new_script_hash(_.__wbg_ptr);
            return DRep.__wrap(t);
          }
          static new_always_abstain() {
            const _ = n.drep_new_always_abstain();
            return DRep.__wrap(_);
          }
          static new_always_no_confidence() {
            const _ = n.drep_new_always_no_confidence();
            return DRep.__wrap(_);
          }
          static new_from_credential(_) {
            P(_, Credential);
            const t = n.drep_new_from_credential(_.__wbg_ptr);
            return DRep.__wrap(t);
          }
          kind() {
            const _ = n.drep_kind(this.__wbg_ptr);
            return _;
          }
          to_key_hash() {
            const _ = n.drep_to_key_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ed25519KeyHash.__wrap(_);
          }
          to_script_hash() {
            const _ = n.drep_to_script_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptHash.__wrap(_);
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16);
              n.drep_to_bech32(c, this.__wbg_ptr, _);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drep_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRep.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.DRep = DRep;
        const I_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_drepderegistration_free(_ >>> 0),
              );
        class DRepDeregistration {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DRepDeregistration.prototype);
            return ((t.__wbg_ptr = _), I_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), I_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_drepderegistration_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepderegistration_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.drepderegistration_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepDeregistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepderegistration_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepderegistration_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepDeregistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepderegistration_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepderegistration_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepderegistration_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepDeregistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          voting_credential() {
            const _ = n.drepderegistration_voting_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          coin() {
            const _ = n.drepderegistration_coin(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t) {
            (P(_, Credential), P(t, BigNum));
            const e = n.drepderegistration_new(_.__wbg_ptr, t.__wbg_ptr);
            return DRepDeregistration.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.drepderegistration_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.DRepDeregistration = DRepDeregistration;
        const M_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_drepregistration_free(_ >>> 0),
              );
        class DRepRegistration {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DRepRegistration.prototype);
            return ((t.__wbg_ptr = _), M_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), M_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_drepregistration_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepregistration_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.drepregistration_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepregistration_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepregistration_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepregistration_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepregistration_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepregistration_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          voting_credential() {
            const _ = n.drepregistration_voting_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          coin() {
            const _ = n.drepregistration_coin(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          anchor() {
            const _ = n.drepregistration_anchor(this.__wbg_ptr);
            return 0 === _ ? void 0 : Anchor.__wrap(_);
          }
          static new(_, t) {
            (P(_, Credential), P(t, BigNum));
            const e = n.drepregistration_new(_.__wbg_ptr, t.__wbg_ptr);
            return DRepRegistration.__wrap(e);
          }
          static new_with_anchor(_, t, e) {
            (P(_, Credential), P(t, BigNum), P(e, Anchor));
            const r = n.drepregistration_new_with_anchor(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return DRepRegistration.__wrap(r);
          }
          has_script_credentials() {
            const _ = n.drepregistration_has_script_credentials(this.__wbg_ptr);
            return 0 !== _;
          }
        }
        t.DRepRegistration = DRepRegistration;
        const K_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_drepupdate_free(_ >>> 0));
        class DRepUpdate {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DRepUpdate.prototype);
            return ((t.__wbg_ptr = _), K_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), K_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_drepupdate_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepupdate_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.drepupdate_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepUpdate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepupdate_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepupdate_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepUpdate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepupdate_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepupdate_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepupdate_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepUpdate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          voting_credential() {
            const _ = n.drepupdate_voting_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          anchor() {
            const _ = n.drepupdate_anchor(this.__wbg_ptr);
            return 0 === _ ? void 0 : Anchor.__wrap(_);
          }
          static new(_) {
            P(_, Credential);
            const t = n.drepupdate_new(_.__wbg_ptr);
            return DRepUpdate.__wrap(t);
          }
          static new_with_anchor(_, t) {
            (P(_, Credential), P(t, Anchor));
            const e = n.drepupdate_new_with_anchor(_.__wbg_ptr, t.__wbg_ptr);
            return DRepUpdate.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.drepupdate_has_script_credentials(this.__wbg_ptr);
            return 0 !== _;
          }
        }
        t.DRepUpdate = DRepUpdate;
        const U_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_drepvotingthresholds_free(_ >>> 0),
              );
        class DRepVotingThresholds {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DRepVotingThresholds.prototype);
            return ((t.__wbg_ptr = _), U_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), U_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_drepvotingthresholds_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepvotingthresholds_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.drepvotingthresholds_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepVotingThresholds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepvotingthresholds_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepvotingthresholds_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepVotingThresholds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepvotingthresholds_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.drepvotingthresholds_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.drepvotingthresholds_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DRepVotingThresholds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t, e, r, i, a, o, s, d, c) {
            (P(_, UnitInterval),
              P(t, UnitInterval),
              P(e, UnitInterval),
              P(r, UnitInterval),
              P(i, UnitInterval),
              P(a, UnitInterval),
              P(o, UnitInterval),
              P(s, UnitInterval),
              P(d, UnitInterval),
              P(c, UnitInterval));
            const w = n.drepvotingthresholds_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r.__wbg_ptr,
              i.__wbg_ptr,
              a.__wbg_ptr,
              o.__wbg_ptr,
              s.__wbg_ptr,
              d.__wbg_ptr,
              c.__wbg_ptr,
            );
            return DRepVotingThresholds.__wrap(w);
          }
          set_motion_no_confidence(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_motion_no_confidence(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_committee_normal(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_committee_normal(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_committee_no_confidence(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_committee_no_confidence(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_update_constitution(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_update_constitution(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_hard_fork_initiation(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_hard_fork_initiation(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_pp_network_group(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_pp_network_group(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_pp_economic_group(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_pp_economic_group(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_pp_technical_group(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_pp_technical_group(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_pp_governance_group(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_pp_governance_group(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_treasury_withdrawal(_) {
            (P(_, UnitInterval),
              n.drepvotingthresholds_set_treasury_withdrawal(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          motion_no_confidence() {
            const _ = n.drepvotingthresholds_motion_no_confidence(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          committee_normal() {
            const _ = n.drepvotingthresholds_committee_normal(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          committee_no_confidence() {
            const _ = n.drepvotingthresholds_committee_no_confidence(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          update_constitution() {
            const _ = n.drepvotingthresholds_update_constitution(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          hard_fork_initiation() {
            const _ = n.drepvotingthresholds_hard_fork_initiation(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          pp_network_group() {
            const _ = n.drepvotingthresholds_pp_network_group(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          pp_economic_group() {
            const _ = n.drepvotingthresholds_pp_economic_group(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          pp_technical_group() {
            const _ = n.drepvotingthresholds_pp_technical_group(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          pp_governance_group() {
            const _ = n.drepvotingthresholds_pp_governance_group(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          treasury_withdrawal() {
            const _ = n.drepvotingthresholds_treasury_withdrawal(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
        }
        t.DRepVotingThresholds = DRepVotingThresholds;
        const E_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_datacost_free(_ >>> 0));
        class DataCost {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DataCost.prototype);
            return ((t.__wbg_ptr = _), E_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), E_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_datacost_free(_);
          }
          static new_coins_per_byte(_) {
            P(_, BigNum);
            const t = n.datacost_coins_per_byte(_.__wbg_ptr);
            return DataCost.__wrap(t);
          }
          coins_per_byte() {
            const _ = n.datacost_coins_per_byte(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
        }
        t.DataCost = DataCost;
        const W_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_datahash_free(_ >>> 0));
        class DataHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DataHash.prototype);
            return ((t.__wbg_ptr = _), W_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), W_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_datahash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.datahash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.datahash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.datahash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return DataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.DataHash = DataHash;
        const L_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_datumsource_free(_ >>> 0),
              );
        class DatumSource {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(DatumSource.prototype);
            return ((t.__wbg_ptr = _), L_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), L_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_datumsource_free(_);
          }
          static new(_) {
            P(_, PlutusData);
            const t = n.datumsource_new(_.__wbg_ptr);
            return DatumSource.__wrap(t);
          }
          static new_ref_input(_) {
            P(_, TransactionInput);
            const t = n.datumsource_new_ref_input(_.__wbg_ptr);
            return DatumSource.__wrap(t);
          }
        }
        t.DatumSource = DatumSource;
        const G_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_ed25519keyhash_free(_ >>> 0),
              );
        class Ed25519KeyHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Ed25519KeyHash.prototype);
            return ((t.__wbg_ptr = _), G_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), G_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_ed25519keyhash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ed25519keyhash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519KeyHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.ed25519keyhash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ed25519keyhash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519KeyHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ed25519keyhash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519KeyHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Ed25519KeyHash = Ed25519KeyHash;
        const q_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_ed25519keyhashes_free(_ >>> 0),
              );
        class Ed25519KeyHashes {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Ed25519KeyHashes.prototype);
            return ((t.__wbg_ptr = _), q_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), q_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_ed25519keyhashes_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhashes_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ed25519keyhashes_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519KeyHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhashes_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ed25519keyhashes_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519KeyHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhashes_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhashes_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ed25519keyhashes_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519KeyHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.credentials_new();
            return Ed25519KeyHashes.__wrap(_);
          }
          len() {
            const _ = n.credentials_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.ed25519keyhashes_get(this.__wbg_ptr, _);
            return Ed25519KeyHash.__wrap(t);
          }
          add(_) {
            P(_, Ed25519KeyHash);
            const t = n.ed25519keyhashes_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          contains(_) {
            P(_, Ed25519KeyHash);
            const t = n.ed25519keyhashes_contains(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          to_option() {
            const _ = n.ed25519keyhashes_to_option(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ed25519KeyHashes.__wrap(_);
          }
        }
        t.Ed25519KeyHashes = Ed25519KeyHashes;
        const $_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_ed25519signature_free(_ >>> 0),
              );
        class Ed25519Signature {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Ed25519Signature.prototype);
            return ((t.__wbg_ptr = _), $_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), $_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_ed25519signature_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519signature_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519signature_to_bech32(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519signature_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ed25519signature_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519Signature.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ed25519signature_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519Signature.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ed25519signature_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ed25519Signature.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Ed25519Signature = Ed25519Signature;
        const J_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_enterpriseaddress_free(_ >>> 0),
              );
        class EnterpriseAddress {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(EnterpriseAddress.prototype);
            return ((t.__wbg_ptr = _), J_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), J_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_enterpriseaddress_free(_);
          }
          static new(_, t) {
            P(t, Credential);
            const e = n.enterpriseaddress_new(_, t.__wbg_ptr);
            return EnterpriseAddress.__wrap(e);
          }
          payment_cred() {
            const _ = n.baseaddress_payment_cred(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          to_address() {
            const _ = n.enterpriseaddress_to_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          static from_address(_) {
            P(_, Address);
            const t = n.enterpriseaddress_from_address(_.__wbg_ptr);
            return 0 === t ? void 0 : EnterpriseAddress.__wrap(t);
          }
          network_id() {
            const _ = n.enterpriseaddress_network_id(this.__wbg_ptr);
            return _;
          }
        }
        t.EnterpriseAddress = EnterpriseAddress;
        const Y_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_exunitprices_free(_ >>> 0),
              );
        class ExUnitPrices {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ExUnitPrices.prototype);
            return ((t.__wbg_ptr = _), Y_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Y_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_exunitprices_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunitprices_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.exunitprices_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ExUnitPrices.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunitprices_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.exunitprices_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ExUnitPrices.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunitprices_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunitprices_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.exunitprices_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ExUnitPrices.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          mem_price() {
            const _ = n.drepvotingthresholds_motion_no_confidence(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          step_price() {
            const _ = n.drepvotingthresholds_committee_normal(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          static new(_, t) {
            (P(_, UnitInterval), P(t, UnitInterval));
            const e = n.exunitprices_new(_.__wbg_ptr, t.__wbg_ptr);
            return ExUnitPrices.__wrap(e);
          }
        }
        t.ExUnitPrices = ExUnitPrices;
        const Q_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_exunits_free(_ >>> 0));
        class ExUnits {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ExUnits.prototype);
            return ((t.__wbg_ptr = _), Q_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Q_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_exunits_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunits_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.exunits_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ExUnits.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunits_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.exunits_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ExUnits.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunits_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.exunits_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.exunits_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ExUnits.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          mem() {
            const _ = n.exunits_mem(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          steps() {
            const _ = n.exunits_steps(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t) {
            (P(_, BigNum), P(t, BigNum));
            const e = n.exunits_new(_.__wbg_ptr, t.__wbg_ptr);
            return ExUnits.__wrap(e);
          }
        }
        t.ExUnits = ExUnits;
        const X_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_fixedblock_free(_ >>> 0));
        class FixedBlock {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(FixedBlock.prototype);
            return ((t.__wbg_ptr = _), X_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), X_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_fixedblock_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedblock_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.fixedblock_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          header() {
            const _ = n.fixedblock_header(this.__wbg_ptr);
            return Header.__wrap(_);
          }
          transaction_bodies() {
            const _ = n.fixedblock_transaction_bodies(this.__wbg_ptr);
            return FixedTransactionBodies.__wrap(_);
          }
          transaction_witness_sets() {
            const _ = n.fixedblock_transaction_witness_sets(this.__wbg_ptr);
            return TransactionWitnessSets.__wrap(_);
          }
          auxiliary_data_set() {
            const _ = n.fixedblock_auxiliary_data_set(this.__wbg_ptr);
            return AuxiliaryDataSet.__wrap(_);
          }
          invalid_transactions() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedblock_invalid_transactions(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = T(_, t).slice();
              return (n.__wbindgen_free(_, 4 * t, 4), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          block_hash() {
            const _ = n.fixedblock_block_hash(this.__wbg_ptr);
            return BlockHash.__wrap(_);
          }
        }
        t.FixedBlock = FixedBlock;
        const Z_ =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_fixedtransaction_free(_ >>> 0),
              );
        class FixedTransaction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(FixedTransaction.prototype);
            return ((t.__wbg_ptr = _), Z_.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Z_.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_fixedtransaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtransaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedtransaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransaction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtransaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.fixedtransaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransaction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t, e) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16),
                s = S(_, n.__wbindgen_malloc),
                d = h,
                c = S(t, n.__wbindgen_malloc),
                p = h;
              n.fixedtransaction_new(o, s, d, c, p, e);
              var r = j()[o / 4 + 0],
                i = j()[o / 4 + 1],
                a = j()[o / 4 + 2];
              if (a) throw w(i);
              return FixedTransaction.__wrap(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_with_auxiliary(_, t, e, r) {
            try {
              const s = n.__wbindgen_add_to_stack_pointer(-16),
                d = S(_, n.__wbindgen_malloc),
                c = h,
                p = S(t, n.__wbindgen_malloc),
                g = h,
                b = S(e, n.__wbindgen_malloc),
                l = h;
              n.fixedtransaction_new_with_auxiliary(s, d, c, p, g, b, l, r);
              var i = j()[s / 4 + 0],
                a = j()[s / 4 + 1],
                o = j()[s / 4 + 2];
              if (o) throw w(a);
              return FixedTransaction.__wrap(i);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_from_body_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedtransaction_new_from_body_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransaction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          body() {
            const _ = n.fixedtransaction_body(this.__wbg_ptr);
            return TransactionBody.__wrap(_);
          }
          raw_body() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtransaction_raw_body(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_body(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16),
                i = S(_, n.__wbindgen_malloc),
                a = h;
              n.fixedtransaction_set_body(r, this.__wbg_ptr, i, a);
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_witness_set(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16),
                i = S(_, n.__wbindgen_malloc),
                a = h;
              n.fixedtransaction_set_witness_set(r, this.__wbg_ptr, i, a);
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          witness_set() {
            const _ = n.fixedtransaction_witness_set(this.__wbg_ptr);
            return TransactionWitnessSet.__wrap(_);
          }
          raw_witness_set() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtransaction_raw_witness_set(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_is_valid(_) {
            n.fixedtransaction_set_is_valid(this.__wbg_ptr, _);
          }
          is_valid() {
            const _ = n.fixedtransaction_is_valid(this.__wbg_ptr);
            return 0 !== _;
          }
          set_auxiliary_data(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16),
                i = S(_, n.__wbindgen_malloc),
                a = h;
              n.fixedtransaction_set_auxiliary_data(r, this.__wbg_ptr, i, a);
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          auxiliary_data() {
            const _ = n.fixedtransaction_auxiliary_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : AuxiliaryData.__wrap(_);
          }
          raw_auxiliary_data() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtransaction_raw_auxiliary_data(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              let r;
              return (
                0 !== _ &&
                  ((r = A(_, t).slice()), n.__wbindgen_free(_, 1 * t, 1)),
                r
              );
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          transaction_hash() {
            const _ = n.fixedtransaction_transaction_hash(this.__wbg_ptr);
            return TransactionHash.__wrap(_);
          }
          add_vkey_witness(_) {
            (P(_, Vkeywitness),
              n.fixedtransaction_add_vkey_witness(this.__wbg_ptr, _.__wbg_ptr));
          }
          add_bootstrap_witness(_) {
            (P(_, BootstrapWitness),
              n.fixedtransaction_add_bootstrap_witness(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          sign_and_add_vkey_signature(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, PrivateKey),
                n.fixedtransaction_sign_and_add_vkey_signature(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          sign_and_add_icarus_bootstrap_signature(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, ByronAddress),
                P(t, Bip32PrivateKey),
                n.fixedtransaction_sign_and_add_icarus_bootstrap_signature(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          sign_and_add_daedalus_bootstrap_signature(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, ByronAddress),
                P(t, LegacyDaedalusPrivateKey),
                n.fixedtransaction_sign_and_add_daedalus_bootstrap_signature(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.FixedTransaction = FixedTransaction;
        const _t =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_fixedtransactionbodies_free(_ >>> 0),
              );
        class FixedTransactionBodies {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(FixedTransactionBodies.prototype);
            return ((t.__wbg_ptr = _), _t.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), _t.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_fixedtransactionbodies_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedtransactionbodies_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransactionBodies.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.fixedtransactionbodies_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransactionBodies.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.fixedtransactionbodies_new();
            return FixedTransactionBodies.__wrap(_);
          }
          len() {
            const _ = n.fixedtransactionbodies_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.fixedtransactionbodies_get(this.__wbg_ptr, _);
            return FixedTransactionBody.__wrap(t);
          }
          add(_) {
            (P(_, FixedTransactionBody),
              n.fixedtransactionbodies_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.FixedTransactionBodies = FixedTransactionBodies;
        const tt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_fixedtransactionbody_free(_ >>> 0),
              );
        class FixedTransactionBody {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(FixedTransactionBody.prototype);
            return ((t.__wbg_ptr = _), tt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), tt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_fixedtransactionbody_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedtransactionbody_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransactionBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.fixedtransactionbody_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTransactionBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          transaction_body() {
            const _ = n.fixedtransaction_body(this.__wbg_ptr);
            return TransactionBody.__wrap(_);
          }
          tx_hash() {
            const _ = n.fixedtransactionbody_tx_hash(this.__wbg_ptr);
            return TransactionHash.__wrap(_);
          }
          original_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtransactionbody_original_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.FixedTransactionBody = FixedTransactionBody;
        const et =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_fixedtxwitnessesset_free(_ >>> 0),
              );
        class FixedTxWitnessesSet {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(FixedTxWitnessesSet.prototype);
            return ((t.__wbg_ptr = _), et.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), et.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_fixedtxwitnessesset_free(_);
          }
          tx_witnesses_set() {
            const _ = n.fixedtxwitnessesset_tx_witnesses_set(this.__wbg_ptr);
            return TransactionWitnessSet.__wrap(_);
          }
          add_vkey_witness(_) {
            (P(_, Vkeywitness),
              n.fixedtxwitnessesset_add_vkey_witness(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          add_bootstrap_witness(_) {
            (P(_, BootstrapWitness),
              n.fixedtxwitnessesset_add_bootstrap_witness(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.fixedtxwitnessesset_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedtxwitnessesset_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedTxWitnessesSet.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.FixedTxWitnessesSet = FixedTxWitnessesSet;
        const rt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_fixedversionedblock_free(_ >>> 0),
              );
        class FixedVersionedBlock {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(FixedVersionedBlock.prototype);
            return ((t.__wbg_ptr = _), rt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), rt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_fixedversionedblock_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.fixedversionedblock_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedVersionedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.fixedversionedblock_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return FixedVersionedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          block() {
            const _ = n.fixedversionedblock_block(this.__wbg_ptr);
            return FixedBlock.__wrap(_);
          }
          era() {
            const _ = n.fixedversionedblock_era(this.__wbg_ptr);
            return _;
          }
        }
        t.FixedVersionedBlock = FixedVersionedBlock;
        const nt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_generaltransactionmetadata_free(_ >>> 0),
              );
        class GeneralTransactionMetadata {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GeneralTransactionMetadata.prototype);
            return ((t.__wbg_ptr = _), nt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), nt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_generaltransactionmetadata_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.generaltransactionmetadata_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.generaltransactionmetadata_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GeneralTransactionMetadata.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.generaltransactionmetadata_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.generaltransactionmetadata_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GeneralTransactionMetadata.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.generaltransactionmetadata_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.generaltransactionmetadata_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.generaltransactionmetadata_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GeneralTransactionMetadata.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.generaltransactionmetadata_new();
            return GeneralTransactionMetadata.__wrap(_);
          }
          len() {
            const _ = n.generaltransactionmetadata_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, BigNum), P(t, TransactionMetadatum));
            const e = n.generaltransactionmetadata_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : TransactionMetadatum.__wrap(e);
          }
          get(_) {
            P(_, BigNum);
            const t = n.generaltransactionmetadata_get(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return 0 === t ? void 0 : TransactionMetadatum.__wrap(t);
          }
          keys() {
            const _ = n.generaltransactionmetadata_keys(this.__wbg_ptr);
            return TransactionMetadatumLabels.__wrap(_);
          }
        }
        t.GeneralTransactionMetadata = GeneralTransactionMetadata;
        const it =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_genesisdelegatehash_free(_ >>> 0),
              );
        class GenesisDelegateHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GenesisDelegateHash.prototype);
            return ((t.__wbg_ptr = _), it.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), it.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_genesisdelegatehash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.genesisdelegatehash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisDelegateHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.ed25519keyhash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesisdelegatehash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisDelegateHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesisdelegatehash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisDelegateHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.GenesisDelegateHash = GenesisDelegateHash;
        const at =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_genesishash_free(_ >>> 0),
              );
        class GenesisHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GenesisHash.prototype);
            return ((t.__wbg_ptr = _), at.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), at.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_genesishash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.genesishash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.ed25519keyhash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesishash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesishash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.GenesisHash = GenesisHash;
        const ot =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_genesishashes_free(_ >>> 0),
              );
        class GenesisHashes {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GenesisHashes.prototype);
            return ((t.__wbg_ptr = _), ot.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ot.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_genesishashes_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesishashes_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.genesishashes_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesishashes_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesishashes_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesishashes_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesishashes_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesishashes_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.genesishashes_new();
            return GenesisHashes.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.genesishashes_get(this.__wbg_ptr, _);
            return GenesisHash.__wrap(t);
          }
          add(_) {
            (P(_, GenesisHash),
              n.genesishashes_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.GenesisHashes = GenesisHashes;
        const st =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_genesiskeydelegation_free(_ >>> 0),
              );
        class GenesisKeyDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GenesisKeyDelegation.prototype);
            return ((t.__wbg_ptr = _), st.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), st.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_genesiskeydelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesiskeydelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.genesiskeydelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisKeyDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesiskeydelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesiskeydelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisKeyDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesiskeydelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.genesiskeydelegation_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.genesiskeydelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GenesisKeyDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          genesishash() {
            const _ = n.genesiskeydelegation_genesishash(this.__wbg_ptr);
            return GenesisHash.__wrap(_);
          }
          genesis_delegate_hash() {
            const _ = n.genesiskeydelegation_genesis_delegate_hash(
              this.__wbg_ptr,
            );
            return GenesisDelegateHash.__wrap(_);
          }
          vrf_keyhash() {
            const _ = n.genesiskeydelegation_vrf_keyhash(this.__wbg_ptr);
            return VRFKeyHash.__wrap(_);
          }
          static new(_, t, e) {
            (P(_, GenesisHash), P(t, GenesisDelegateHash), P(e, VRFKeyHash));
            const r = n.genesiskeydelegation_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return GenesisKeyDelegation.__wrap(r);
          }
        }
        t.GenesisKeyDelegation = GenesisKeyDelegation;
        const dt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_governanceaction_free(_ >>> 0),
              );
        class GovernanceAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GovernanceAction.prototype);
            return ((t.__wbg_ptr = _), dt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), dt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_governanceaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.governanceaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.governanceaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.governanceaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_parameter_change_action(_) {
            P(_, ParameterChangeAction);
            const t = n.governanceaction_new_parameter_change_action(
              _.__wbg_ptr,
            );
            return GovernanceAction.__wrap(t);
          }
          static new_hard_fork_initiation_action(_) {
            P(_, HardForkInitiationAction);
            const t = n.governanceaction_new_hard_fork_initiation_action(
              _.__wbg_ptr,
            );
            return GovernanceAction.__wrap(t);
          }
          static new_treasury_withdrawals_action(_) {
            P(_, TreasuryWithdrawalsAction);
            const t = n.governanceaction_new_treasury_withdrawals_action(
              _.__wbg_ptr,
            );
            return GovernanceAction.__wrap(t);
          }
          static new_no_confidence_action(_) {
            P(_, NoConfidenceAction);
            const t = n.governanceaction_new_no_confidence_action(_.__wbg_ptr);
            return GovernanceAction.__wrap(t);
          }
          static new_new_committee_action(_) {
            P(_, UpdateCommitteeAction);
            const t = n.governanceaction_new_new_committee_action(_.__wbg_ptr);
            return GovernanceAction.__wrap(t);
          }
          static new_new_constitution_action(_) {
            P(_, NewConstitutionAction);
            const t = n.governanceaction_new_new_constitution_action(
              _.__wbg_ptr,
            );
            return GovernanceAction.__wrap(t);
          }
          static new_info_action(_) {
            P(_, InfoAction);
            const t = n.governanceaction_new_info_action(_.__wbg_ptr);
            return GovernanceAction.__wrap(t);
          }
          kind() {
            const _ = n.governanceaction_kind(this.__wbg_ptr);
            return _;
          }
          as_parameter_change_action() {
            const _ = n.governanceaction_as_parameter_change_action(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : ParameterChangeAction.__wrap(_);
          }
          as_hard_fork_initiation_action() {
            const _ = n.governanceaction_as_hard_fork_initiation_action(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : HardForkInitiationAction.__wrap(_);
          }
          as_treasury_withdrawals_action() {
            const _ = n.governanceaction_as_treasury_withdrawals_action(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : TreasuryWithdrawalsAction.__wrap(_);
          }
          as_no_confidence_action() {
            const _ = n.governanceaction_as_no_confidence_action(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : NoConfidenceAction.__wrap(_);
          }
          as_new_committee_action() {
            const _ = n.governanceaction_as_new_committee_action(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : UpdateCommitteeAction.__wrap(_);
          }
          as_new_constitution_action() {
            const _ = n.governanceaction_as_new_constitution_action(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : NewConstitutionAction.__wrap(_);
          }
          as_info_action() {
            const _ = n.governanceaction_as_info_action(this.__wbg_ptr);
            return 0 === _ ? void 0 : InfoAction.__wrap(_);
          }
        }
        t.GovernanceAction = GovernanceAction;
        const ct =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_governanceactionid_free(_ >>> 0),
              );
        class GovernanceActionId {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GovernanceActionId.prototype);
            return ((t.__wbg_ptr = _), ct.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ct.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_governanceactionid_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceactionid_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.governanceactionid_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceActionId.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceactionid_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.governanceactionid_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceActionId.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceactionid_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceactionid_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.governanceactionid_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceActionId.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          transaction_id() {
            const _ = n.governanceactionid_transaction_id(this.__wbg_ptr);
            return TransactionHash.__wrap(_);
          }
          index() {
            const _ = n.governanceactionid_index(this.__wbg_ptr);
            return _ >>> 0;
          }
          static new(_, t) {
            P(_, TransactionHash);
            const e = n.governanceactionid_new(_.__wbg_ptr, t);
            return GovernanceActionId.__wrap(e);
          }
        }
        t.GovernanceActionId = GovernanceActionId;
        const wt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_governanceactionids_free(_ >>> 0),
              );
        class GovernanceActionIds {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(GovernanceActionIds.prototype);
            return ((t.__wbg_ptr = _), wt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), wt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_governanceactionids_free(_);
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceactionids_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.governanceactionids_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.governanceactionids_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return GovernanceActionIds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.governanceactionids_new();
            return GovernanceActionIds.__wrap(_);
          }
          add(_) {
            (P(_, GovernanceActionId),
              n.governanceactionids_add(this.__wbg_ptr, _.__wbg_ptr));
          }
          get(_) {
            const t = n.governanceactionids_get(this.__wbg_ptr, _);
            return 0 === t ? void 0 : GovernanceActionId.__wrap(t);
          }
          len() {
            const _ = n.governanceactionids_len(this.__wbg_ptr);
            return _ >>> 0;
          }
        }
        t.GovernanceActionIds = GovernanceActionIds;
        const pt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_hardforkinitiationaction_free(_ >>> 0),
              );
        class HardForkInitiationAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(HardForkInitiationAction.prototype);
            return ((t.__wbg_ptr = _), pt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), pt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_hardforkinitiationaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.hardforkinitiationaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.hardforkinitiationaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return HardForkInitiationAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.hardforkinitiationaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.hardforkinitiationaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return HardForkInitiationAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.hardforkinitiationaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.hardforkinitiationaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.hardforkinitiationaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return HardForkInitiationAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          gov_action_id() {
            const _ = n.hardforkinitiationaction_gov_action_id(this.__wbg_ptr);
            return 0 === _ ? void 0 : GovernanceActionId.__wrap(_);
          }
          protocol_version() {
            const _ = n.hardforkinitiationaction_protocol_version(
              this.__wbg_ptr,
            );
            return ProtocolVersion.__wrap(_);
          }
          static new(_) {
            P(_, ProtocolVersion);
            const t = n.hardforkinitiationaction_new(_.__wbg_ptr);
            return HardForkInitiationAction.__wrap(t);
          }
          static new_with_action_id(_, t) {
            (P(_, GovernanceActionId), P(t, ProtocolVersion));
            const e = n.hardforkinitiationaction_new_with_action_id(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return HardForkInitiationAction.__wrap(e);
          }
        }
        t.HardForkInitiationAction = HardForkInitiationAction;
        const gt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_header_free(_ >>> 0));
        class Header {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Header.prototype);
            return ((t.__wbg_ptr = _), gt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), gt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_header_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.header_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.header_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Header.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.header_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.header_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Header.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.header_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.header_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.header_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Header.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          header_body() {
            const _ = n.header_header_body(this.__wbg_ptr);
            return HeaderBody.__wrap(_);
          }
          body_signature() {
            const _ = n.header_body_signature(this.__wbg_ptr);
            return KESSignature.__wrap(_);
          }
          static new(_, t) {
            (P(_, HeaderBody), P(t, KESSignature));
            const e = n.header_new(_.__wbg_ptr, t.__wbg_ptr);
            return Header.__wrap(e);
          }
        }
        t.Header = Header;
        const bt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_headerbody_free(_ >>> 0));
        class HeaderBody {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(HeaderBody.prototype);
            return ((t.__wbg_ptr = _), bt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), bt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_headerbody_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.headerbody_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.headerbody_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return HeaderBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.headerbody_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.headerbody_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return HeaderBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.headerbody_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.headerbody_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.headerbody_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return HeaderBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          block_number() {
            const _ = n.headerbody_block_number(this.__wbg_ptr);
            return _ >>> 0;
          }
          slot() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.headerbody_slot(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          slot_bignum() {
            const _ = n.headerbody_slot_bignum(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          prev_hash() {
            const _ = n.headerbody_prev_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : BlockHash.__wrap(_);
          }
          issuer_vkey() {
            const _ = n.headerbody_issuer_vkey(this.__wbg_ptr);
            return Vkey.__wrap(_);
          }
          vrf_vkey() {
            const _ = n.headerbody_vrf_vkey(this.__wbg_ptr);
            return VRFVKey.__wrap(_);
          }
          has_nonce_and_leader_vrf() {
            const _ = n.headerbody_has_nonce_and_leader_vrf(this.__wbg_ptr);
            return 0 !== _;
          }
          nonce_vrf_or_nothing() {
            const _ = n.headerbody_nonce_vrf_or_nothing(this.__wbg_ptr);
            return 0 === _ ? void 0 : VRFCert.__wrap(_);
          }
          leader_vrf_or_nothing() {
            const _ = n.headerbody_leader_vrf_or_nothing(this.__wbg_ptr);
            return 0 === _ ? void 0 : VRFCert.__wrap(_);
          }
          has_vrf_result() {
            const _ = n.headerbody_has_vrf_result(this.__wbg_ptr);
            return 0 !== _;
          }
          vrf_result_or_nothing() {
            const _ = n.headerbody_vrf_result_or_nothing(this.__wbg_ptr);
            return 0 === _ ? void 0 : VRFCert.__wrap(_);
          }
          block_body_size() {
            const _ = n.headerbody_block_body_size(this.__wbg_ptr);
            return _ >>> 0;
          }
          block_body_hash() {
            const _ = n.headerbody_block_body_hash(this.__wbg_ptr);
            return BlockHash.__wrap(_);
          }
          operational_cert() {
            const _ = n.headerbody_operational_cert(this.__wbg_ptr);
            return OperationalCert.__wrap(_);
          }
          protocol_version() {
            const _ = n.headerbody_protocol_version(this.__wbg_ptr);
            return ProtocolVersion.__wrap(_);
          }
          static new(_, t, e, r, i, a, o, s, d, c) {
            let w = 0;
            (v(e) || (P(e, BlockHash), (w = e.__destroy_into_raw())),
              P(r, Vkey),
              P(i, VRFVKey),
              P(a, VRFCert),
              P(s, BlockHash),
              P(d, OperationalCert),
              P(c, ProtocolVersion));
            const p = n.headerbody_new(
              _,
              t,
              w,
              r.__wbg_ptr,
              i.__wbg_ptr,
              a.__wbg_ptr,
              o,
              s.__wbg_ptr,
              d.__wbg_ptr,
              c.__wbg_ptr,
            );
            return HeaderBody.__wrap(p);
          }
          static new_headerbody(_, t, e, r, i, a, o, s, d, c) {
            P(t, BigNum);
            let w = 0;
            (v(e) || (P(e, BlockHash), (w = e.__destroy_into_raw())),
              P(r, Vkey),
              P(i, VRFVKey),
              P(a, VRFCert),
              P(s, BlockHash),
              P(d, OperationalCert),
              P(c, ProtocolVersion));
            const p = n.headerbody_new_headerbody(
              _,
              t.__wbg_ptr,
              w,
              r.__wbg_ptr,
              i.__wbg_ptr,
              a.__wbg_ptr,
              o,
              s.__wbg_ptr,
              d.__wbg_ptr,
              c.__wbg_ptr,
            );
            return HeaderBody.__wrap(p);
          }
        }
        t.HeaderBody = HeaderBody;
        const lt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_infoaction_free(_ >>> 0));
        class InfoAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(InfoAction.prototype);
            return ((t.__wbg_ptr = _), lt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), lt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_infoaction_free(_);
          }
          static new() {
            const _ = n.infoaction_new();
            return InfoAction.__wrap(_);
          }
        }
        t.InfoAction = InfoAction;
        const ut =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_int_free(_ >>> 0));
        class Int {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Int.prototype);
            return ((t.__wbg_ptr = _), ut.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ut.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_int_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.int_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Int.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.int_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Int.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.int_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Int.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            P(_, BigNum);
            const t = n.int_new(_.__wbg_ptr);
            return Int.__wrap(t);
          }
          static new_negative(_) {
            P(_, BigNum);
            const t = n.int_new_negative(_.__wbg_ptr);
            return Int.__wrap(t);
          }
          static new_i32(_) {
            const t = n.int_new_i32(_);
            return Int.__wrap(t);
          }
          is_positive() {
            const _ = n.int_is_positive(this.__wbg_ptr);
            return 0 !== _;
          }
          as_positive() {
            const _ = n.int_as_positive(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          as_negative() {
            const _ = n.int_as_negative(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          as_i32() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_as_i32(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_i32_or_nothing() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_as_i32_or_nothing(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_i32_or_fail() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_as_i32_or_fail(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_str() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.int_to_str(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_str(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.int_from_str(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Int.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Int = Int;
        const ht =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_ipv4_free(_ >>> 0));
        class Ipv4 {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Ipv4.prototype);
            return ((t.__wbg_ptr = _), ht.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ht.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_ipv4_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv4_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ipv4_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv4.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv4_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ipv4_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv4.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv4_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv4_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ipv4_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv4.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ipv4_new(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv4.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          ip() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv4_ip(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Ipv4 = Ipv4;
        const yt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_ipv6_free(_ >>> 0));
        class Ipv6 {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Ipv6.prototype);
            return ((t.__wbg_ptr = _), yt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), yt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_ipv6_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv6_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ipv6_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv6.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv6_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ipv6_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv6.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv6_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv6_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.ipv6_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv6.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.ipv6_new(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Ipv6.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          ip() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ipv6_ip(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Ipv6 = Ipv6;
        const ft =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_kessignature_free(_ >>> 0),
              );
        class KESSignature {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(KESSignature.prototype);
            return ((t.__wbg_ptr = _), ft.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ft.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_kessignature_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.kessignature_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.kessignature_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return KESSignature.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.KESSignature = KESSignature;
        const kt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_kesvkey_free(_ >>> 0));
        class KESVKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(KESVKey.prototype);
            return ((t.__wbg_ptr = _), kt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), kt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_kesvkey_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.kesvkey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return KESVKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.kesvkey_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return KESVKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.kesvkey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return KESVKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.KESVKey = KESVKey;
        const mt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_language_free(_ >>> 0));
        class Language {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Language.prototype);
            return ((t.__wbg_ptr = _), mt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), mt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_language_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.language_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.language_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Language.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.language_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.language_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Language.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.language_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.language_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.language_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Language.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_plutus_v1() {
            const _ = n.language_new_plutus_v1();
            return Language.__wrap(_);
          }
          static new_plutus_v2() {
            const _ = n.language_new_plutus_v2();
            return Language.__wrap(_);
          }
          static new_plutus_v3() {
            const _ = n.language_new_plutus_v3();
            return Language.__wrap(_);
          }
          kind() {
            const _ = n.language_kind(this.__wbg_ptr);
            return _;
          }
        }
        t.Language = Language;
        const vt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_languages_free(_ >>> 0));
        class Languages {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Languages.prototype);
            return ((t.__wbg_ptr = _), vt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), vt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_languages_free(_);
          }
          static new() {
            const _ = n.languages_new();
            return Languages.__wrap(_);
          }
          len() {
            const _ = n.languages_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.languages_get(this.__wbg_ptr, _);
            return Language.__wrap(t);
          }
          add(_) {
            P(_, Language);
            var t = _.__destroy_into_raw();
            n.languages_add(this.__wbg_ptr, t);
          }
          static list() {
            const _ = n.languages_list();
            return Languages.__wrap(_);
          }
        }
        t.Languages = Languages;
        const xt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_legacydaedalusprivatekey_free(_ >>> 0),
              );
        class LegacyDaedalusPrivateKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(LegacyDaedalusPrivateKey.prototype);
            return ((t.__wbg_ptr = _), xt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), xt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_legacydaedalusprivatekey_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.legacydaedalusprivatekey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return LegacyDaedalusPrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.legacydaedalusprivatekey_as_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          chaincode() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.legacydaedalusprivatekey_chaincode(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.LegacyDaedalusPrivateKey = LegacyDaedalusPrivateKey;
        const jt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_linearfee_free(_ >>> 0));
        class LinearFee {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(LinearFee.prototype);
            return ((t.__wbg_ptr = _), jt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), jt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_linearfee_free(_);
          }
          constant() {
            const _ = n.linearfee_constant(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          coefficient() {
            const _ = n.linearfee_coefficient(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t) {
            (P(_, BigNum), P(t, BigNum));
            const e = n.linearfee_new(_.__wbg_ptr, t.__wbg_ptr);
            return LinearFee.__wrap(e);
          }
        }
        t.LinearFee = LinearFee;
        const Rt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_mirtostakecredentials_free(_ >>> 0),
              );
        class MIRToStakeCredentials {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MIRToStakeCredentials.prototype);
            return ((t.__wbg_ptr = _), Rt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Rt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_mirtostakecredentials_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mirtostakecredentials_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.mirtostakecredentials_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MIRToStakeCredentials.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.mirtostakecredentials_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.mirtostakecredentials_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MIRToStakeCredentials.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.mirtostakecredentials_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mirtostakecredentials_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.mirtostakecredentials_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MIRToStakeCredentials.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.mirtostakecredentials_new();
            return MIRToStakeCredentials.__wrap(_);
          }
          len() {
            const _ = n.mirtostakecredentials_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, Credential), P(t, Int));
            const e = n.mirtostakecredentials_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : Int.__wrap(e);
          }
          get(_) {
            P(_, Credential);
            const t = n.mirtostakecredentials_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : Int.__wrap(t);
          }
          keys() {
            const _ = n.mirtostakecredentials_keys(this.__wbg_ptr);
            return Credentials.__wrap(_);
          }
        }
        t.MIRToStakeCredentials = MIRToStakeCredentials;
        const At =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_malformedaddress_free(_ >>> 0),
              );
        class MalformedAddress {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MalformedAddress.prototype);
            return ((t.__wbg_ptr = _), At.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), At.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_malformedaddress_free(_);
          }
          original_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.malformedaddress_original_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_address() {
            const _ = n.malformedaddress_to_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          static from_address(_) {
            P(_, Address);
            const t = n.malformedaddress_from_address(_.__wbg_ptr);
            return 0 === t ? void 0 : MalformedAddress.__wrap(t);
          }
        }
        t.MalformedAddress = MalformedAddress;
        const St =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_metadatalist_free(_ >>> 0),
              );
        class MetadataList {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MetadataList.prototype);
            return ((t.__wbg_ptr = _), St.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), St.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_metadatalist_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.metadatalist_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.metadatalist_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MetadataList.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.metadatalist_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.metadatalist_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MetadataList.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.metadatalist_new();
            return MetadataList.__wrap(_);
          }
          len() {
            const _ = n.languages_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.metadatalist_get(this.__wbg_ptr, _);
            return TransactionMetadatum.__wrap(t);
          }
          add(_) {
            (P(_, TransactionMetadatum),
              n.metadatalist_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.MetadataList = MetadataList;
        const Pt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_metadatamap_free(_ >>> 0),
              );
        class MetadataMap {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MetadataMap.prototype);
            return ((t.__wbg_ptr = _), Pt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Pt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_metadatamap_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.metadatamap_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.metadatamap_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MetadataMap.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.metadatamap_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.metadatamap_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MetadataMap.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.generaltransactionmetadata_new();
            return MetadataMap.__wrap(_);
          }
          len() {
            const _ = n.generaltransactionmetadata_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, TransactionMetadatum), P(t, TransactionMetadatum));
            const e = n.metadatamap_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : TransactionMetadatum.__wrap(e);
          }
          insert_str(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16),
                o = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                s = h;
              (P(t, TransactionMetadatum),
                n.metadatamap_insert_str(a, this.__wbg_ptr, o, s, t.__wbg_ptr));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return 0 === e ? void 0 : TransactionMetadatum.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          insert_i32(_, t) {
            P(t, TransactionMetadatum);
            const e = n.metadatamap_insert_i32(this.__wbg_ptr, _, t.__wbg_ptr);
            return 0 === e ? void 0 : TransactionMetadatum.__wrap(e);
          }
          get(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionMetadatum),
                n.metadatamap_get(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_str(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.metadatamap_get_str(i, this.__wbg_ptr, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_i32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.metadatamap_get_i32(i, this.__wbg_ptr, _);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          has(_) {
            P(_, TransactionMetadatum);
            const t = n.metadatamap_has(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          keys() {
            const _ = n.metadatamap_keys(this.__wbg_ptr);
            return MetadataList.__wrap(_);
          }
        }
        t.MetadataMap = MetadataMap;
        const Bt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_mint_free(_ >>> 0));
        class Mint {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Mint.prototype);
            return ((t.__wbg_ptr = _), Bt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Bt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_mint_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mint_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.mint_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Mint.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.mint_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.mint_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Mint.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.mint_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mint_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.mint_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Mint.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.assetnames_new();
            return Mint.__wrap(_);
          }
          static new_from_entry(_, t) {
            (P(_, ScriptHash), P(t, MintAssets));
            const e = n.mint_new_from_entry(_.__wbg_ptr, t.__wbg_ptr);
            return Mint.__wrap(e);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, ScriptHash), P(t, MintAssets));
            const e = n.mint_insert(this.__wbg_ptr, _.__wbg_ptr, t.__wbg_ptr);
            return 0 === e ? void 0 : MintAssets.__wrap(e);
          }
          get(_) {
            P(_, ScriptHash);
            const t = n.mint_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : MintsAssets.__wrap(t);
          }
          keys() {
            const _ = n.mint_keys(this.__wbg_ptr);
            return ScriptHashes.__wrap(_);
          }
          as_positive_multiasset() {
            const _ = n.mint_as_positive_multiasset(this.__wbg_ptr);
            return MultiAsset.__wrap(_);
          }
          as_negative_multiasset() {
            const _ = n.mint_as_negative_multiasset(this.__wbg_ptr);
            return MultiAsset.__wrap(_);
          }
        }
        t.Mint = Mint;
        const Ft =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_mintassets_free(_ >>> 0));
        class MintAssets {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MintAssets.prototype);
            return ((t.__wbg_ptr = _), Ft.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ft.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_mintassets_free(_);
          }
          static new() {
            const _ = n.assets_new();
            return MintAssets.__wrap(_);
          }
          static new_from_entry(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, AssetName),
                P(t, Int),
                n.mintassets_new_from_entry(a, _.__wbg_ptr, t.__wbg_ptr));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return MintAssets.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, AssetName),
                P(t, Int),
                n.mintassets_insert(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return 0 === e ? void 0 : Int.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get(_) {
            P(_, AssetName);
            const t = n.mintassets_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : Int.__wrap(t);
          }
          keys() {
            const _ = n.mintassets_keys(this.__wbg_ptr);
            return AssetNames.__wrap(_);
          }
        }
        t.MintAssets = MintAssets;
        const Tt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_mintbuilder_free(_ >>> 0),
              );
        class MintBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MintBuilder.prototype);
            return ((t.__wbg_ptr = _), Tt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Tt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_mintbuilder_free(_);
          }
          static new() {
            const _ = n.mintbuilder_new();
            return MintBuilder.__wrap(_);
          }
          add_asset(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, MintWitness),
                P(t, AssetName),
                P(e, Int),
                n.mintbuilder_add_asset(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_asset(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, MintWitness),
                P(t, AssetName),
                P(e, Int),
                n.mintbuilder_set_asset(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          build() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mintbuilder_build(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Mint.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_native_scripts() {
            const _ = n.mintbuilder_get_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          get_plutus_witnesses() {
            const _ = n.mintbuilder_get_plutus_witnesses(this.__wbg_ptr);
            return PlutusWitnesses.__wrap(_);
          }
          get_ref_inputs() {
            const _ = n.mintbuilder_get_ref_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          get_redeemers() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mintbuilder_get_redeemers(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Redeemers.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          has_plutus_scripts() {
            const _ = n.mintbuilder_has_plutus_scripts(this.__wbg_ptr);
            return 0 !== _;
          }
          has_native_scripts() {
            const _ = n.mintbuilder_has_native_scripts(this.__wbg_ptr);
            return 0 !== _;
          }
        }
        t.MintBuilder = MintBuilder;
        const zt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_mintwitness_free(_ >>> 0),
              );
        class MintWitness {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MintWitness.prototype);
            return ((t.__wbg_ptr = _), zt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), zt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_mintwitness_free(_);
          }
          static new_native_script(_) {
            P(_, NativeScriptSource);
            const t = n.mintwitness_new_native_script(_.__wbg_ptr);
            return MintWitness.__wrap(t);
          }
          static new_plutus_script(_, t) {
            (P(_, PlutusScriptSource), P(t, Redeemer));
            const e = n.mintwitness_new_plutus_script(_.__wbg_ptr, t.__wbg_ptr);
            return MintWitness.__wrap(e);
          }
        }
        t.MintWitness = MintWitness;
        const Ct =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_mintsassets_free(_ >>> 0),
              );
        class MintsAssets {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MintsAssets.prototype);
            return ((t.__wbg_ptr = _), Ct.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ct.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_mintsassets_free(_);
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.mintsassets_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.mintsassets_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.mintsassets_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MintsAssets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.assetnames_new();
            return MintsAssets.__wrap(_);
          }
          add(_) {
            (P(_, MintAssets), n.mintsassets_add(this.__wbg_ptr, _.__wbg_ptr));
          }
          get(_) {
            const t = n.mintsassets_get(this.__wbg_ptr, _);
            return 0 === t ? void 0 : MintAssets.__wrap(t);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
        }
        t.MintsAssets = MintsAssets;
        const Nt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_moveinstantaneousreward_free(_ >>> 0),
              );
        class MoveInstantaneousReward {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MoveInstantaneousReward.prototype);
            return ((t.__wbg_ptr = _), Nt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Nt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_moveinstantaneousreward_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousreward_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.moveinstantaneousreward_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MoveInstantaneousReward.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousreward_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.moveinstantaneousreward_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MoveInstantaneousReward.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousreward_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousreward_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.moveinstantaneousreward_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MoveInstantaneousReward.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_to_other_pot(_, t) {
            P(t, BigNum);
            const e = n.moveinstantaneousreward_new_to_other_pot(
              _,
              t.__wbg_ptr,
            );
            return MoveInstantaneousReward.__wrap(e);
          }
          static new_to_stake_creds(_, t) {
            P(t, MIRToStakeCredentials);
            const e = n.moveinstantaneousreward_new_to_stake_creds(
              _,
              t.__wbg_ptr,
            );
            return MoveInstantaneousReward.__wrap(e);
          }
          pot() {
            const _ = n.moveinstantaneousreward_pot(this.__wbg_ptr);
            return _;
          }
          kind() {
            const _ = n.moveinstantaneousreward_kind(this.__wbg_ptr);
            return _;
          }
          as_to_other_pot() {
            const _ = n.moveinstantaneousreward_as_to_other_pot(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          as_to_stake_creds() {
            const _ = n.moveinstantaneousreward_as_to_stake_creds(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : MIRToStakeCredentials.__wrap(_);
          }
        }
        t.MoveInstantaneousReward = MoveInstantaneousReward;
        const Dt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_moveinstantaneousrewardscert_free(_ >>> 0),
              );
        class MoveInstantaneousRewardsCert {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MoveInstantaneousRewardsCert.prototype);
            return ((t.__wbg_ptr = _), Dt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Dt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_moveinstantaneousrewardscert_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousrewardscert_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.moveinstantaneousrewardscert_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MoveInstantaneousRewardsCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousrewardscert_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.moveinstantaneousrewardscert_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MoveInstantaneousRewardsCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousrewardscert_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.moveinstantaneousrewardscert_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.moveinstantaneousrewardscert_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MoveInstantaneousRewardsCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          move_instantaneous_reward() {
            const _ = n.moveinstantaneousrewardscert_move_instantaneous_reward(
              this.__wbg_ptr,
            );
            return MoveInstantaneousReward.__wrap(_);
          }
          static new(_) {
            P(_, MoveInstantaneousReward);
            const t = n.moveinstantaneousrewardscert_new(_.__wbg_ptr);
            return MoveInstantaneousRewardsCert.__wrap(t);
          }
        }
        t.MoveInstantaneousRewardsCert = MoveInstantaneousRewardsCert;
        const Vt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_multiasset_free(_ >>> 0));
        class MultiAsset {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MultiAsset.prototype);
            return ((t.__wbg_ptr = _), Vt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Vt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_multiasset_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.multiasset_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.multiasset_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MultiAsset.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.multiasset_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.multiasset_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MultiAsset.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.multiasset_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.multiasset_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.multiasset_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MultiAsset.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.assets_new();
            return MultiAsset.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, ScriptHash), P(t, Assets));
            const e = n.multiasset_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : Assets.__wrap(e);
          }
          get(_) {
            P(_, ScriptHash);
            const t = n.multiasset_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : Assets.__wrap(t);
          }
          set_asset(_, t, e) {
            (P(_, ScriptHash), P(t, AssetName), P(e, BigNum));
            const r = n.multiasset_set_asset(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return 0 === r ? void 0 : BigNum.__wrap(r);
          }
          get_asset(_, t) {
            (P(_, ScriptHash), P(t, AssetName));
            const e = n.multiasset_get_asset(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return BigNum.__wrap(e);
          }
          keys() {
            const _ = n.multiasset_keys(this.__wbg_ptr);
            return ScriptHashes.__wrap(_);
          }
          sub(_) {
            P(_, MultiAsset);
            const t = n.multiasset_sub(this.__wbg_ptr, _.__wbg_ptr);
            return MultiAsset.__wrap(t);
          }
        }
        t.MultiAsset = MultiAsset;
        const Ot =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_multihostname_free(_ >>> 0),
              );
        class MultiHostName {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(MultiHostName.prototype);
            return ((t.__wbg_ptr = _), Ot.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ot.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_multihostname_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.multihostname_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.multihostname_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MultiHostName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.multihostname_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.multihostname_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MultiHostName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.multihostname_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.multihostname_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.multihostname_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return MultiHostName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          dns_name() {
            const _ = n.multihostname_dns_name(this.__wbg_ptr);
            return DNSRecordSRV.__wrap(_);
          }
          static new(_) {
            P(_, DNSRecordSRV);
            const t = n.multihostname_dns_name(_.__wbg_ptr);
            return MultiHostName.__wrap(t);
          }
        }
        t.MultiHostName = MultiHostName;
        const Ht =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_nativescript_free(_ >>> 0),
              );
        class NativeScript {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NativeScript.prototype);
            return ((t.__wbg_ptr = _), Ht.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ht.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_nativescript_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescript_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.nativescript_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NativeScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescript_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.nativescript_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NativeScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescript_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescript_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.nativescript_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NativeScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          hash() {
            const _ = n.nativescript_hash(this.__wbg_ptr);
            return ScriptHash.__wrap(_);
          }
          static new_script_pubkey(_) {
            P(_, ScriptPubkey);
            const t = n.nativescript_new_script_pubkey(_.__wbg_ptr);
            return NativeScript.__wrap(t);
          }
          static new_script_all(_) {
            P(_, ScriptAll);
            const t = n.nativescript_new_script_all(_.__wbg_ptr);
            return NativeScript.__wrap(t);
          }
          static new_script_any(_) {
            P(_, ScriptAny);
            const t = n.nativescript_new_script_any(_.__wbg_ptr);
            return NativeScript.__wrap(t);
          }
          static new_script_n_of_k(_) {
            P(_, ScriptNOfK);
            const t = n.nativescript_new_script_n_of_k(_.__wbg_ptr);
            return NativeScript.__wrap(t);
          }
          static new_timelock_start(_) {
            P(_, TimelockStart);
            const t = n.nativescript_new_timelock_start(_.__wbg_ptr);
            return NativeScript.__wrap(t);
          }
          static new_timelock_expiry(_) {
            P(_, TimelockExpiry);
            const t = n.nativescript_new_timelock_expiry(_.__wbg_ptr);
            return NativeScript.__wrap(t);
          }
          kind() {
            const _ = n.nativescript_kind(this.__wbg_ptr);
            return _;
          }
          as_script_pubkey() {
            const _ = n.nativescript_as_script_pubkey(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptPubkey.__wrap(_);
          }
          as_script_all() {
            const _ = n.nativescript_as_script_all(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptAll.__wrap(_);
          }
          as_script_any() {
            const _ = n.nativescript_as_script_any(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptAny.__wrap(_);
          }
          as_script_n_of_k() {
            const _ = n.nativescript_as_script_n_of_k(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptNOfK.__wrap(_);
          }
          as_timelock_start() {
            const _ = n.nativescript_as_timelock_start(this.__wbg_ptr);
            return 0 === _ ? void 0 : TimelockStart.__wrap(_);
          }
          as_timelock_expiry() {
            const _ = n.nativescript_as_timelock_expiry(this.__wbg_ptr);
            return 0 === _ ? void 0 : TimelockExpiry.__wrap(_);
          }
          get_required_signers() {
            const _ = n.nativescript_get_required_signers(this.__wbg_ptr);
            return Ed25519KeyHashes.__wrap(_);
          }
        }
        t.NativeScript = NativeScript;
        const It =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_nativescriptsource_free(_ >>> 0),
              );
        class NativeScriptSource {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NativeScriptSource.prototype);
            return ((t.__wbg_ptr = _), It.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), It.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_nativescriptsource_free(_);
          }
          static new(_) {
            P(_, NativeScript);
            const t = n.nativescriptsource_new(_.__wbg_ptr);
            return NativeScriptSource.__wrap(t);
          }
          static new_ref_input(_, t, e) {
            (P(_, ScriptHash), P(t, TransactionInput));
            const r = n.nativescriptsource_new_ref_input(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e,
            );
            return NativeScriptSource.__wrap(r);
          }
          set_required_signers(_) {
            (P(_, Ed25519KeyHashes),
              n.nativescriptsource_set_required_signers(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          get_ref_script_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescriptsource_get_ref_script_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.NativeScriptSource = NativeScriptSource;
        const Mt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_nativescripts_free(_ >>> 0),
              );
        class NativeScripts {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NativeScripts.prototype);
            return ((t.__wbg_ptr = _), Mt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Mt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_nativescripts_free(_);
          }
          static new() {
            const _ = n.nativescripts_new();
            return NativeScripts.__wrap(_);
          }
          len() {
            const _ = n.costmodel_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.nativescripts_get(this.__wbg_ptr, _);
            return NativeScript.__wrap(t);
          }
          add(_) {
            (P(_, NativeScript),
              n.nativescripts_add(this.__wbg_ptr, _.__wbg_ptr));
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescripts_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.nativescripts_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NativeScripts.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescripts_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.nativescripts_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NativeScripts.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescripts_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.nativescripts_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.nativescripts_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NativeScripts.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.NativeScripts = NativeScripts;
        const Kt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_networkid_free(_ >>> 0));
        class NetworkId {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NetworkId.prototype);
            return ((t.__wbg_ptr = _), Kt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Kt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_networkid_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.networkid_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.networkid_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NetworkId.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.networkid_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.networkid_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NetworkId.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.networkid_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.networkid_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.networkid_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NetworkId.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static testnet() {
            const _ = n.networkid_testnet();
            return NetworkId.__wrap(_);
          }
          static mainnet() {
            const _ = n.networkid_mainnet();
            return NetworkId.__wrap(_);
          }
          kind() {
            const _ = n.networkid_kind(this.__wbg_ptr);
            return _;
          }
        }
        t.NetworkId = NetworkId;
        const Ut =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_networkinfo_free(_ >>> 0),
              );
        class NetworkInfo {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NetworkInfo.prototype);
            return ((t.__wbg_ptr = _), Ut.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ut.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_networkinfo_free(_);
          }
          static new(_, t) {
            const e = n.networkinfo_new(_, t);
            return NetworkInfo.__wrap(e);
          }
          network_id() {
            const _ = n.networkinfo_network_id(this.__wbg_ptr);
            return _;
          }
          protocol_magic() {
            const _ = n.networkinfo_protocol_magic(this.__wbg_ptr);
            return _ >>> 0;
          }
          static testnet_preview() {
            const _ = n.networkinfo_testnet_preview();
            return NetworkInfo.__wrap(_);
          }
          static testnet_preprod() {
            const _ = n.networkinfo_testnet_preprod();
            return NetworkInfo.__wrap(_);
          }
          static mainnet() {
            const _ = n.networkinfo_mainnet();
            return NetworkInfo.__wrap(_);
          }
        }
        t.NetworkInfo = NetworkInfo;
        const Et =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_newconstitutionaction_free(_ >>> 0),
              );
        class NewConstitutionAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NewConstitutionAction.prototype);
            return ((t.__wbg_ptr = _), Et.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Et.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_newconstitutionaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.newconstitutionaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.newconstitutionaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NewConstitutionAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.newconstitutionaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.newconstitutionaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NewConstitutionAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.newconstitutionaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.newconstitutionaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.newconstitutionaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NewConstitutionAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          gov_action_id() {
            const _ = n.hardforkinitiationaction_gov_action_id(this.__wbg_ptr);
            return 0 === _ ? void 0 : GovernanceActionId.__wrap(_);
          }
          constitution() {
            const _ = n.newconstitutionaction_constitution(this.__wbg_ptr);
            return Constitution.__wrap(_);
          }
          static new(_) {
            P(_, Constitution);
            const t = n.newconstitutionaction_new(_.__wbg_ptr);
            return NewConstitutionAction.__wrap(t);
          }
          static new_with_action_id(_, t) {
            (P(_, GovernanceActionId), P(t, Constitution));
            const e = n.newconstitutionaction_new_with_action_id(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return NewConstitutionAction.__wrap(e);
          }
          has_script_hash() {
            const _ = n.newconstitutionaction_has_script_hash(this.__wbg_ptr);
            return 0 !== _;
          }
        }
        t.NewConstitutionAction = NewConstitutionAction;
        const Wt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_noconfidenceaction_free(_ >>> 0),
              );
        class NoConfidenceAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(NoConfidenceAction.prototype);
            return ((t.__wbg_ptr = _), Wt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Wt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_noconfidenceaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.noconfidenceaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.noconfidenceaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NoConfidenceAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.noconfidenceaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.noconfidenceaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NoConfidenceAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.noconfidenceaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.noconfidenceaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.noconfidenceaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return NoConfidenceAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          gov_action_id() {
            const _ = n.hardforkinitiationaction_gov_action_id(this.__wbg_ptr);
            return 0 === _ ? void 0 : GovernanceActionId.__wrap(_);
          }
          static new() {
            const _ = n.noconfidenceaction_new();
            return NoConfidenceAction.__wrap(_);
          }
          static new_with_action_id(_) {
            P(_, GovernanceActionId);
            const t = n.noconfidenceaction_new_with_action_id(_.__wbg_ptr);
            return NoConfidenceAction.__wrap(t);
          }
        }
        t.NoConfidenceAction = NoConfidenceAction;
        const Lt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_nonce_free(_ >>> 0));
        class Nonce {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Nonce.prototype);
            return ((t.__wbg_ptr = _), Lt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Lt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_nonce_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.nonce_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.nonce_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Nonce.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.nonce_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.nonce_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Nonce.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.nonce_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.nonce_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.nonce_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Nonce.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_identity() {
            const _ = n.nonce_new_identity();
            return Nonce.__wrap(_);
          }
          static new_from_hash(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.nonce_new_from_hash(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Nonce.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_hash() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.nonce_get_hash(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              let r;
              return (
                0 !== _ &&
                  ((r = A(_, t).slice()), n.__wbindgen_free(_, 1 * t, 1)),
                r
              );
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Nonce = Nonce;
        const Gt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_operationalcert_free(_ >>> 0),
              );
        class OperationalCert {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(OperationalCert.prototype);
            return ((t.__wbg_ptr = _), Gt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Gt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_operationalcert_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.operationalcert_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.operationalcert_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return OperationalCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.operationalcert_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.operationalcert_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return OperationalCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.operationalcert_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.operationalcert_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.operationalcert_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return OperationalCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          hot_vkey() {
            const _ = n.operationalcert_hot_vkey(this.__wbg_ptr);
            return KESVKey.__wrap(_);
          }
          sequence_number() {
            const _ = n.operationalcert_sequence_number(this.__wbg_ptr);
            return _ >>> 0;
          }
          kes_period() {
            const _ = n.operationalcert_kes_period(this.__wbg_ptr);
            return _ >>> 0;
          }
          sigma() {
            const _ = n.operationalcert_sigma(this.__wbg_ptr);
            return Ed25519Signature.__wrap(_);
          }
          static new(_, t, e, r) {
            (P(_, KESVKey), P(r, Ed25519Signature));
            const i = n.operationalcert_new(_.__wbg_ptr, t, e, r.__wbg_ptr);
            return OperationalCert.__wrap(i);
          }
        }
        t.OperationalCert = OperationalCert;
        const qt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_outputdatum_free(_ >>> 0),
              );
        class OutputDatum {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(OutputDatum.prototype);
            return ((t.__wbg_ptr = _), qt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), qt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_outputdatum_free(_);
          }
          static new_data_hash(_) {
            P(_, DataHash);
            const t = n.outputdatum_new_data_hash(_.__wbg_ptr);
            return OutputDatum.__wrap(t);
          }
          static new_data(_) {
            P(_, PlutusData);
            const t = n.outputdatum_new_data(_.__wbg_ptr);
            return OutputDatum.__wrap(t);
          }
          data_hash() {
            const _ = n.outputdatum_data_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : DataHash.__wrap(_);
          }
          data() {
            const _ = n.outputdatum_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusData.__wrap(_);
          }
        }
        t.OutputDatum = OutputDatum;
        const $t =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_parameterchangeaction_free(_ >>> 0),
              );
        class ParameterChangeAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ParameterChangeAction.prototype);
            return ((t.__wbg_ptr = _), $t.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), $t.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_parameterchangeaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.parameterchangeaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.parameterchangeaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ParameterChangeAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.parameterchangeaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.parameterchangeaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ParameterChangeAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.parameterchangeaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.parameterchangeaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.parameterchangeaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ParameterChangeAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          gov_action_id() {
            const _ = n.parameterchangeaction_gov_action_id(this.__wbg_ptr);
            return 0 === _ ? void 0 : GovernanceActionId.__wrap(_);
          }
          protocol_param_updates() {
            const _ = n.parameterchangeaction_protocol_param_updates(
              this.__wbg_ptr,
            );
            return ProtocolParamUpdate.__wrap(_);
          }
          policy_hash() {
            const _ = n.parameterchangeaction_policy_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptHash.__wrap(_);
          }
          static new(_) {
            P(_, ProtocolParamUpdate);
            const t = n.parameterchangeaction_new(_.__wbg_ptr);
            return ParameterChangeAction.__wrap(t);
          }
          static new_with_action_id(_, t) {
            (P(_, GovernanceActionId), P(t, ProtocolParamUpdate));
            const e = n.parameterchangeaction_new_with_action_id(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return ParameterChangeAction.__wrap(e);
          }
          static new_with_policy_hash(_, t) {
            (P(_, ProtocolParamUpdate), P(t, ScriptHash));
            const e = n.parameterchangeaction_new_with_policy_hash(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return ParameterChangeAction.__wrap(e);
          }
          static new_with_policy_hash_and_action_id(_, t, e) {
            (P(_, GovernanceActionId),
              P(t, ProtocolParamUpdate),
              P(e, ScriptHash));
            const r =
              n.parameterchangeaction_new_with_policy_hash_and_action_id(
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              );
            return ParameterChangeAction.__wrap(r);
          }
        }
        t.ParameterChangeAction = ParameterChangeAction;
        const Jt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_plutusdata_free(_ >>> 0));
        class PlutusData {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusData.prototype);
            return ((t.__wbg_ptr = _), Jt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Jt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutusdata_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusdata_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutusdata_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusdata_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.plutusdata_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_constr_plutus_data(_) {
            P(_, ConstrPlutusData);
            const t = n.plutusdata_new_constr_plutus_data(_.__wbg_ptr);
            return PlutusData.__wrap(t);
          }
          static new_empty_constr_plutus_data(_) {
            P(_, BigNum);
            const t = n.plutusdata_new_empty_constr_plutus_data(_.__wbg_ptr);
            return PlutusData.__wrap(t);
          }
          static new_single_value_constr_plutus_data(_, t) {
            (P(_, BigNum), P(t, PlutusData));
            const e = n.plutusdata_new_single_value_constr_plutus_data(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return PlutusData.__wrap(e);
          }
          static new_map(_) {
            P(_, PlutusMap);
            const t = n.plutusdata_new_map(_.__wbg_ptr);
            return PlutusData.__wrap(t);
          }
          static new_list(_) {
            P(_, PlutusList);
            const t = n.plutusdata_new_list(_.__wbg_ptr);
            return PlutusData.__wrap(t);
          }
          static new_integer(_) {
            P(_, BigInt);
            const t = n.plutusdata_new_integer(_.__wbg_ptr);
            return PlutusData.__wrap(t);
          }
          static new_bytes(_) {
            const t = S(_, n.__wbindgen_malloc),
              e = h,
              r = n.plutusdata_new_bytes(t, e);
            return PlutusData.__wrap(r);
          }
          kind() {
            const _ = n.plutusdata_kind(this.__wbg_ptr);
            return _;
          }
          as_constr_plutus_data() {
            const _ = n.plutusdata_as_constr_plutus_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : ConstrPlutusData.__wrap(_);
          }
          as_map() {
            const _ = n.plutusdata_as_map(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusMap.__wrap(_);
          }
          as_list() {
            const _ = n.plutusdata_as_list(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusList.__wrap(_);
          }
          as_integer() {
            const _ = n.plutusdata_as_integer(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigInt.__wrap(_);
          }
          as_bytes() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusdata_as_bytes(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              let r;
              return (
                0 !== _ &&
                  ((r = A(_, t).slice()), n.__wbindgen_free(_, 1 * t, 1)),
                r
              );
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16);
              n.decode_plutus_datum_to_json_str(c, this.__wbg_ptr, _);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_json(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16),
                o = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                s = h;
              n.encode_json_str_to_plutus_datum(a, o, s, t);
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return PlutusData.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_address(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Address), n.plutusdata_from_address(i, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusData.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_address(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, NetworkInfo),
                n.plutusdata_as_address(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Address.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.PlutusData = PlutusData;
        const Yt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_plutuslist_free(_ >>> 0));
        class PlutusList {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusList.prototype);
            return ((t.__wbg_ptr = _), Yt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Yt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutuslist_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutuslist_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutuslist_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusList.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutuslist_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.plutuslist_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusList.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.plutuslist_new();
            return PlutusList.__wrap(_);
          }
          len() {
            const _ = n.languages_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.plutuslist_get(this.__wbg_ptr, _);
            return PlutusData.__wrap(t);
          }
          add(_) {
            (P(_, PlutusData), n.plutuslist_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.PlutusList = PlutusList;
        const Qt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_plutusmap_free(_ >>> 0));
        class PlutusMap {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusMap.prototype);
            return ((t.__wbg_ptr = _), Qt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Qt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutusmap_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusmap_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutusmap_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusMap.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusmap_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.plutusmap_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusMap.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.generaltransactionmetadata_new();
            return PlutusMap.__wrap(_);
          }
          len() {
            const _ = n.generaltransactionmetadata_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, PlutusData), P(t, PlutusMapValues));
            const e = n.plutusmap_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : PlutusMapValues.__wrap(e);
          }
          get(_) {
            P(_, PlutusData);
            const t = n.plutusmap_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : PlutusMapValues.__wrap(t);
          }
          keys() {
            const _ = n.plutusmap_keys(this.__wbg_ptr);
            return PlutusList.__wrap(_);
          }
        }
        t.PlutusMap = PlutusMap;
        const Xt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_plutusmapvalues_free(_ >>> 0),
              );
        class PlutusMapValues {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusMapValues.prototype);
            return ((t.__wbg_ptr = _), Xt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Xt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutusmapvalues_free(_);
          }
          static new() {
            const _ = n.metadatalist_new();
            return PlutusMapValues.__wrap(_);
          }
          len() {
            const _ = n.languages_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.plutusmapvalues_get(this.__wbg_ptr, _);
            return 0 === t ? void 0 : PlutusData.__wrap(t);
          }
          add(_) {
            (P(_, PlutusData),
              n.plutusmapvalues_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.PlutusMapValues = PlutusMapValues;
        const Zt =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_plutusscript_free(_ >>> 0),
              );
        class PlutusScript {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusScript.prototype);
            return ((t.__wbg_ptr = _), Zt.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Zt.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutusscript_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscript_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutusscript_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscript_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.plutusscript_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            const t = S(_, n.__wbindgen_malloc),
              e = h,
              r = n.plutusscript_new(t, e);
            return PlutusScript.__wrap(r);
          }
          static new_v2(_) {
            const t = S(_, n.__wbindgen_malloc),
              e = h,
              r = n.plutusscript_new_v2(t, e);
            return PlutusScript.__wrap(r);
          }
          static new_v3(_) {
            const t = S(_, n.__wbindgen_malloc),
              e = h,
              r = n.plutusscript_new_v3(t, e);
            return PlutusScript.__wrap(r);
          }
          static new_with_version(_, t) {
            const e = S(_, n.__wbindgen_malloc),
              r = h;
            P(t, Language);
            const i = n.plutusscript_new_with_version(e, r, t.__wbg_ptr);
            return PlutusScript.__wrap(i);
          }
          bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscript_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes_v2(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutusscript_from_bytes_v2(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes_v3(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutusscript_from_bytes_v3(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScript.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes_with_version(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16),
                o = S(_, n.__wbindgen_malloc),
                s = h;
              (P(t, Language),
                n.plutusscript_from_bytes_with_version(a, o, s, t.__wbg_ptr));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return PlutusScript.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_hex_with_version(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16),
                o = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                s = h;
              (P(t, Language),
                n.plutusscript_from_hex_with_version(a, o, s, t.__wbg_ptr));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return PlutusScript.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          hash() {
            const _ = n.plutusscript_hash(this.__wbg_ptr);
            return ScriptHash.__wrap(_);
          }
          language_version() {
            const _ = n.plutusscript_language_version(this.__wbg_ptr);
            return Language.__wrap(_);
          }
        }
        t.PlutusScript = PlutusScript;
        const _e =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_plutusscriptsource_free(_ >>> 0),
              );
        class PlutusScriptSource {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusScriptSource.prototype);
            return ((t.__wbg_ptr = _), _e.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), _e.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutusscriptsource_free(_);
          }
          static new(_) {
            P(_, PlutusScript);
            const t = n.plutusscriptsource_new(_.__wbg_ptr);
            return PlutusScriptSource.__wrap(t);
          }
          static new_ref_input(_, t, e, r) {
            (P(_, ScriptHash), P(t, TransactionInput), P(e, Language));
            const i = n.plutusscriptsource_new_ref_input(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r,
            );
            return PlutusScriptSource.__wrap(i);
          }
          set_required_signers(_) {
            (P(_, Ed25519KeyHashes),
              n.plutusscriptsource_set_required_signers(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          get_ref_script_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscriptsource_get_ref_script_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.PlutusScriptSource = PlutusScriptSource;
        const te =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_plutusscripts_free(_ >>> 0),
              );
        class PlutusScripts {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusScripts.prototype);
            return ((t.__wbg_ptr = _), te.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), te.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutusscripts_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscripts_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.plutusscripts_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScripts.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscripts_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.plutusscripts_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScripts.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscripts_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.plutusscripts_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.plutusscripts_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PlutusScripts.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.plutusscripts_new();
            return PlutusScripts.__wrap(_);
          }
          len() {
            const _ = n.credentials_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.plutusscripts_get(this.__wbg_ptr, _);
            return PlutusScript.__wrap(t);
          }
          add(_) {
            (P(_, PlutusScript),
              n.plutusscripts_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.PlutusScripts = PlutusScripts;
        const ee =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_plutuswitness_free(_ >>> 0),
              );
        class PlutusWitness {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusWitness.prototype);
            return ((t.__wbg_ptr = _), ee.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ee.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutuswitness_free(_);
          }
          static new(_, t, e) {
            (P(_, PlutusScript), P(t, PlutusData), P(e, Redeemer));
            const r = n.plutuswitness_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return PlutusWitness.__wrap(r);
          }
          static new_with_ref(_, t, e) {
            (P(_, PlutusScriptSource), P(t, DatumSource), P(e, Redeemer));
            const r = n.plutuswitness_new_with_ref(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return PlutusWitness.__wrap(r);
          }
          static new_without_datum(_, t) {
            (P(_, PlutusScript), P(t, Redeemer));
            const e = n.plutuswitness_new_without_datum(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return PlutusWitness.__wrap(e);
          }
          static new_with_ref_without_datum(_, t) {
            (P(_, PlutusScriptSource), P(t, Redeemer));
            const e = n.plutuswitness_new_with_ref_without_datum(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return PlutusWitness.__wrap(e);
          }
          script() {
            const _ = n.plutuswitness_script(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusScript.__wrap(_);
          }
          datum() {
            const _ = n.plutuswitness_datum(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusData.__wrap(_);
          }
          redeemer() {
            const _ = n.plutuswitness_redeemer(this.__wbg_ptr);
            return Redeemer.__wrap(_);
          }
        }
        t.PlutusWitness = PlutusWitness;
        const re =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_plutuswitnesses_free(_ >>> 0),
              );
        class PlutusWitnesses {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PlutusWitnesses.prototype);
            return ((t.__wbg_ptr = _), re.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), re.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_plutuswitnesses_free(_);
          }
          static new() {
            const _ = n.costmodel_new();
            return PlutusWitnesses.__wrap(_);
          }
          len() {
            const _ = n.costmodel_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.plutuswitnesses_get(this.__wbg_ptr, _);
            return PlutusWitness.__wrap(t);
          }
          add(_) {
            (P(_, PlutusWitness),
              n.plutuswitnesses_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.PlutusWitnesses = PlutusWitnesses;
        const ne =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_pointer_free(_ >>> 0));
        class Pointer {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Pointer.prototype);
            return ((t.__wbg_ptr = _), ne.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ne.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_pointer_free(_);
          }
          static new(_, t, e) {
            const r = n.pointer_new(_, t, e);
            return Pointer.__wrap(r);
          }
          static new_pointer(_, t, e) {
            (P(_, BigNum), P(t, BigNum), P(e, BigNum));
            const r = n.pointer_new_pointer(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return Pointer.__wrap(r);
          }
          slot() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.pointer_slot(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          tx_index() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.pointer_tx_index(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          cert_index() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.pointer_cert_index(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          slot_bignum() {
            const _ = n.pointer_slot_bignum(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          tx_index_bignum() {
            const _ = n.pointer_tx_index_bignum(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          cert_index_bignum() {
            const _ = n.pointer_cert_index_bignum(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
        }
        t.Pointer = Pointer;
        const ie =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_pointeraddress_free(_ >>> 0),
              );
        class PointerAddress {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PointerAddress.prototype);
            return ((t.__wbg_ptr = _), ie.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ie.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_pointeraddress_free(_);
          }
          static new(_, t, e) {
            (P(t, Credential), P(e, Pointer));
            const r = n.pointeraddress_new(_, t.__wbg_ptr, e.__wbg_ptr);
            return PointerAddress.__wrap(r);
          }
          payment_cred() {
            const _ = n.pointeraddress_payment_cred(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          stake_pointer() {
            const _ = n.pointeraddress_stake_pointer(this.__wbg_ptr);
            return Pointer.__wrap(_);
          }
          to_address() {
            const _ = n.pointeraddress_to_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          static from_address(_) {
            P(_, Address);
            const t = n.pointeraddress_from_address(_.__wbg_ptr);
            return 0 === t ? void 0 : PointerAddress.__wrap(t);
          }
          network_id() {
            const _ = n.pointeraddress_network_id(this.__wbg_ptr);
            return _;
          }
        }
        t.PointerAddress = PointerAddress;
        const ae =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_poolmetadata_free(_ >>> 0),
              );
        class PoolMetadata {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PoolMetadata.prototype);
            return ((t.__wbg_ptr = _), ae.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ae.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_poolmetadata_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolmetadata_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.poolmetadata_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolMetadata.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolmetadata_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolmetadata_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolMetadata.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolmetadata_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolmetadata_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolmetadata_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolMetadata.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          url() {
            const _ = n.multihostname_dns_name(this.__wbg_ptr);
            return URL.__wrap(_);
          }
          pool_metadata_hash() {
            const _ = n.poolmetadata_pool_metadata_hash(this.__wbg_ptr);
            return PoolMetadataHash.__wrap(_);
          }
          static new(_, t) {
            (P(_, URL), P(t, PoolMetadataHash));
            const e = n.poolmetadata_new(_.__wbg_ptr, t.__wbg_ptr);
            return PoolMetadata.__wrap(e);
          }
        }
        t.PoolMetadata = PoolMetadata;
        const oe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_poolmetadatahash_free(_ >>> 0),
              );
        class PoolMetadataHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PoolMetadataHash.prototype);
            return ((t.__wbg_ptr = _), oe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), oe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_poolmetadatahash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.poolmetadatahash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolMetadataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolmetadatahash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolMetadataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolmetadatahash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolMetadataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.PoolMetadataHash = PoolMetadataHash;
        const se =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_poolparams_free(_ >>> 0));
        class PoolParams {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PoolParams.prototype);
            return ((t.__wbg_ptr = _), se.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), se.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_poolparams_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolparams_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.poolparams_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolParams.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolparams_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolparams_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolParams.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolparams_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolparams_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolparams_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolParams.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          operator() {
            const _ = n.poolparams_operator(this.__wbg_ptr);
            return Ed25519KeyHash.__wrap(_);
          }
          vrf_keyhash() {
            const _ = n.poolparams_vrf_keyhash(this.__wbg_ptr);
            return VRFKeyHash.__wrap(_);
          }
          pledge() {
            const _ = n.poolparams_pledge(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          cost() {
            const _ = n.poolparams_cost(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          margin() {
            const _ = n.poolparams_margin(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          reward_account() {
            const _ = n.poolparams_reward_account(this.__wbg_ptr);
            return RewardAddress.__wrap(_);
          }
          pool_owners() {
            const _ = n.poolparams_pool_owners(this.__wbg_ptr);
            return Ed25519KeyHashes.__wrap(_);
          }
          relays() {
            const _ = n.poolparams_relays(this.__wbg_ptr);
            return Relays.__wrap(_);
          }
          pool_metadata() {
            const _ = n.poolparams_pool_metadata(this.__wbg_ptr);
            return 0 === _ ? void 0 : PoolMetadata.__wrap(_);
          }
          static new(_, t, e, r, i, a, o, s, d) {
            (P(_, Ed25519KeyHash),
              P(t, VRFKeyHash),
              P(e, BigNum),
              P(r, BigNum),
              P(i, UnitInterval),
              P(a, RewardAddress),
              P(o, Ed25519KeyHashes),
              P(s, Relays));
            let c = 0;
            v(d) || (P(d, PoolMetadata), (c = d.__destroy_into_raw()));
            const w = n.poolparams_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r.__wbg_ptr,
              i.__wbg_ptr,
              a.__wbg_ptr,
              o.__wbg_ptr,
              s.__wbg_ptr,
              c,
            );
            return PoolParams.__wrap(w);
          }
        }
        t.PoolParams = PoolParams;
        const de =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_poolregistration_free(_ >>> 0),
              );
        class PoolRegistration {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PoolRegistration.prototype);
            return ((t.__wbg_ptr = _), de.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), de.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_poolregistration_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolregistration_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.poolregistration_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolregistration_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolregistration_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolregistration_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolregistration_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolregistration_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          pool_params() {
            const _ = n.poolregistration_pool_params(this.__wbg_ptr);
            return PoolParams.__wrap(_);
          }
          static new(_) {
            P(_, PoolParams);
            const t = n.poolregistration_new(_.__wbg_ptr);
            return PoolRegistration.__wrap(t);
          }
        }
        t.PoolRegistration = PoolRegistration;
        const ce =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_poolretirement_free(_ >>> 0),
              );
        class PoolRetirement {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PoolRetirement.prototype);
            return ((t.__wbg_ptr = _), ce.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ce.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_poolretirement_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolretirement_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.poolretirement_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolRetirement.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolretirement_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolretirement_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolRetirement.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolretirement_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolretirement_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolretirement_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolRetirement.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          pool_keyhash() {
            const _ = n.poolretirement_pool_keyhash(this.__wbg_ptr);
            return Ed25519KeyHash.__wrap(_);
          }
          epoch() {
            const _ = n.poolretirement_epoch(this.__wbg_ptr);
            return _ >>> 0;
          }
          static new(_, t) {
            P(_, Ed25519KeyHash);
            const e = n.poolretirement_new(_.__wbg_ptr, t);
            return PoolRetirement.__wrap(e);
          }
        }
        t.PoolRetirement = PoolRetirement;
        const we =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_poolvotingthresholds_free(_ >>> 0),
              );
        class PoolVotingThresholds {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PoolVotingThresholds.prototype);
            return ((t.__wbg_ptr = _), we.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), we.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_poolvotingthresholds_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolvotingthresholds_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.poolvotingthresholds_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolVotingThresholds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolvotingthresholds_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolvotingthresholds_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolVotingThresholds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolvotingthresholds_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.poolvotingthresholds_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.poolvotingthresholds_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PoolVotingThresholds.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t, e, r, i) {
            (P(_, UnitInterval),
              P(t, UnitInterval),
              P(e, UnitInterval),
              P(r, UnitInterval),
              P(i, UnitInterval));
            const a = n.poolvotingthresholds_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r.__wbg_ptr,
              i.__wbg_ptr,
            );
            return PoolVotingThresholds.__wrap(a);
          }
          motion_no_confidence() {
            const _ = n.drepvotingthresholds_motion_no_confidence(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          committee_normal() {
            const _ = n.drepvotingthresholds_committee_normal(this.__wbg_ptr);
            return UnitInterval.__wrap(_);
          }
          committee_no_confidence() {
            const _ = n.drepvotingthresholds_committee_no_confidence(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          hard_fork_initiation() {
            const _ = n.drepvotingthresholds_update_constitution(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
          security_relevant_threshold() {
            const _ = n.drepvotingthresholds_hard_fork_initiation(
              this.__wbg_ptr,
            );
            return UnitInterval.__wrap(_);
          }
        }
        t.PoolVotingThresholds = PoolVotingThresholds;
        const pe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_privatekey_free(_ >>> 0));
        class PrivateKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PrivateKey.prototype);
            return ((t.__wbg_ptr = _), pe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), pe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_privatekey_free(_);
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.privatekey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.privatekey_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          sign(_) {
            const t = S(_, n.__wbindgen_malloc),
              e = h,
              r = n.privatekey_sign(this.__wbg_ptr, t, e);
            return Ed25519Signature.__wrap(r);
          }
          static from_normal_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.privatekey_from_normal_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_extended_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.privatekey_from_extended_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.privatekey_as_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.privatekey_to_bech32(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.privatekey_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PrivateKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static generate_ed25519extended() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.privatekey_generate_ed25519extended(r);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return PrivateKey.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static generate_ed25519() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.privatekey_generate_ed25519(r);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return PrivateKey.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_public() {
            const _ = n.privatekey_to_public(this.__wbg_ptr);
            return PublicKey.__wrap(_);
          }
        }
        t.PrivateKey = PrivateKey;
        const ge =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_proposedprotocolparameterupdates_free(_ >>> 0),
              );
        class ProposedProtocolParameterUpdates {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ProposedProtocolParameterUpdates.prototype);
            return ((t.__wbg_ptr = _), ge.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ge.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_proposedprotocolparameterupdates_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.proposedprotocolparameterupdates_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.proposedprotocolparameterupdates_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProposedProtocolParameterUpdates.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.proposedprotocolparameterupdates_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.proposedprotocolparameterupdates_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProposedProtocolParameterUpdates.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.proposedprotocolparameterupdates_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.proposedprotocolparameterupdates_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.proposedprotocolparameterupdates_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProposedProtocolParameterUpdates.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.auxiliarydataset_new();
            return ProposedProtocolParameterUpdates.__wrap(_);
          }
          len() {
            const _ = n.auxiliarydataset_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, GenesisHash), P(t, ProtocolParamUpdate));
            const e = n.proposedprotocolparameterupdates_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : ProtocolParamUpdate.__wrap(e);
          }
          get(_) {
            P(_, GenesisHash);
            const t = n.proposedprotocolparameterupdates_get(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return 0 === t ? void 0 : ProtocolParamUpdate.__wrap(t);
          }
          keys() {
            const _ = n.proposedprotocolparameterupdates_keys(this.__wbg_ptr);
            return GenesisHashes.__wrap(_);
          }
        }
        t.ProposedProtocolParameterUpdates = ProposedProtocolParameterUpdates;
        const be =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_protocolparamupdate_free(_ >>> 0),
              );
        class ProtocolParamUpdate {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ProtocolParamUpdate.prototype);
            return ((t.__wbg_ptr = _), be.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), be.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_protocolparamupdate_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.protocolparamupdate_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProtocolParamUpdate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.protocolparamupdate_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProtocolParamUpdate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.protocolparamupdate_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProtocolParamUpdate.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_minfee_a(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_minfee_a(this.__wbg_ptr, _.__wbg_ptr));
          }
          minfee_a() {
            const _ = n.protocolparamupdate_minfee_a(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_minfee_b(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_minfee_b(this.__wbg_ptr, _.__wbg_ptr));
          }
          minfee_b() {
            const _ = n.protocolparamupdate_minfee_b(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_max_block_body_size(_) {
            n.protocolparamupdate_set_max_block_body_size(this.__wbg_ptr, _);
          }
          max_block_body_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_max_block_body_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_max_tx_size(_) {
            n.protocolparamupdate_set_max_tx_size(this.__wbg_ptr, _);
          }
          max_tx_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_max_tx_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_max_block_header_size(_) {
            n.protocolparamupdate_set_max_block_header_size(this.__wbg_ptr, _);
          }
          max_block_header_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_max_block_header_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_key_deposit(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_key_deposit(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          key_deposit() {
            const _ = n.protocolparamupdate_key_deposit(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_pool_deposit(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_pool_deposit(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          pool_deposit() {
            const _ = n.protocolparamupdate_pool_deposit(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_max_epoch(_) {
            n.protocolparamupdate_set_max_epoch(this.__wbg_ptr, _);
          }
          max_epoch() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_max_epoch(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_n_opt(_) {
            n.protocolparamupdate_set_n_opt(this.__wbg_ptr, _);
          }
          n_opt() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_n_opt(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_pool_pledge_influence(_) {
            (P(_, UnitInterval),
              n.protocolparamupdate_set_pool_pledge_influence(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          pool_pledge_influence() {
            const _ = n.protocolparamupdate_pool_pledge_influence(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : UnitInterval.__wrap(_);
          }
          set_expansion_rate(_) {
            (P(_, UnitInterval),
              n.protocolparamupdate_set_expansion_rate(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          expansion_rate() {
            const _ = n.protocolparamupdate_expansion_rate(this.__wbg_ptr);
            return 0 === _ ? void 0 : UnitInterval.__wrap(_);
          }
          set_treasury_growth_rate(_) {
            (P(_, UnitInterval),
              n.protocolparamupdate_set_treasury_growth_rate(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          treasury_growth_rate() {
            const _ = n.protocolparamupdate_treasury_growth_rate(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : UnitInterval.__wrap(_);
          }
          d() {
            const _ = n.protocolparamupdate_d(this.__wbg_ptr);
            return 0 === _ ? void 0 : UnitInterval.__wrap(_);
          }
          extra_entropy() {
            const _ = n.protocolparamupdate_extra_entropy(this.__wbg_ptr);
            return 0 === _ ? void 0 : Nonce.__wrap(_);
          }
          set_protocol_version(_) {
            (P(_, ProtocolVersion),
              n.protocolparamupdate_set_protocol_version(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          protocol_version() {
            const _ = n.protocolparamupdate_protocol_version(this.__wbg_ptr);
            return 0 === _ ? void 0 : ProtocolVersion.__wrap(_);
          }
          set_min_pool_cost(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_min_pool_cost(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          min_pool_cost() {
            const _ = n.protocolparamupdate_min_pool_cost(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_ada_per_utxo_byte(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_ada_per_utxo_byte(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          ada_per_utxo_byte() {
            const _ = n.protocolparamupdate_ada_per_utxo_byte(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_cost_models(_) {
            (P(_, Costmdls),
              n.protocolparamupdate_set_cost_models(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          cost_models() {
            const _ = n.protocolparamupdate_cost_models(this.__wbg_ptr);
            return 0 === _ ? void 0 : Costmdls.__wrap(_);
          }
          set_execution_costs(_) {
            (P(_, ExUnitPrices),
              n.protocolparamupdate_set_execution_costs(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          execution_costs() {
            const _ = n.protocolparamupdate_execution_costs(this.__wbg_ptr);
            return 0 === _ ? void 0 : ExUnitPrices.__wrap(_);
          }
          set_max_tx_ex_units(_) {
            (P(_, ExUnits),
              n.protocolparamupdate_set_max_tx_ex_units(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          max_tx_ex_units() {
            const _ = n.protocolparamupdate_max_tx_ex_units(this.__wbg_ptr);
            return 0 === _ ? void 0 : ExUnits.__wrap(_);
          }
          set_max_block_ex_units(_) {
            (P(_, ExUnits),
              n.protocolparamupdate_set_max_block_ex_units(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          max_block_ex_units() {
            const _ = n.protocolparamupdate_max_block_ex_units(this.__wbg_ptr);
            return 0 === _ ? void 0 : ExUnits.__wrap(_);
          }
          set_max_value_size(_) {
            n.protocolparamupdate_set_max_value_size(this.__wbg_ptr, _);
          }
          max_value_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_max_value_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_collateral_percentage(_) {
            n.protocolparamupdate_set_collateral_percentage(this.__wbg_ptr, _);
          }
          collateral_percentage() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_collateral_percentage(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_max_collateral_inputs(_) {
            n.protocolparamupdate_set_max_collateral_inputs(this.__wbg_ptr, _);
          }
          max_collateral_inputs() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_max_collateral_inputs(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_pool_voting_thresholds(_) {
            (P(_, PoolVotingThresholds),
              n.protocolparamupdate_set_pool_voting_thresholds(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          pool_voting_thresholds() {
            const _ = n.protocolparamupdate_pool_voting_thresholds(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : PoolVotingThresholds.__wrap(_);
          }
          set_drep_voting_thresholds(_) {
            (P(_, DRepVotingThresholds),
              n.protocolparamupdate_set_drep_voting_thresholds(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          drep_voting_thresholds() {
            const _ = n.protocolparamupdate_drep_voting_thresholds(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : DRepVotingThresholds.__wrap(_);
          }
          set_min_committee_size(_) {
            n.protocolparamupdate_set_min_committee_size(this.__wbg_ptr, _);
          }
          min_committee_size() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_min_committee_size(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_committee_term_limit(_) {
            n.protocolparamupdate_set_committee_term_limit(this.__wbg_ptr, _);
          }
          committee_term_limit() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_committee_term_limit(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_governance_action_validity_period(_) {
            n.protocolparamupdate_set_governance_action_validity_period(
              this.__wbg_ptr,
              _,
            );
          }
          governance_action_validity_period() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_governance_action_validity_period(
                e,
                this.__wbg_ptr,
              );
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_governance_action_deposit(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_governance_action_deposit(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          governance_action_deposit() {
            const _ = n.protocolparamupdate_governance_action_deposit(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_drep_deposit(_) {
            (P(_, BigNum),
              n.protocolparamupdate_set_drep_deposit(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          drep_deposit() {
            const _ = n.protocolparamupdate_drep_deposit(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_drep_inactivity_period(_) {
            n.protocolparamupdate_set_drep_inactivity_period(this.__wbg_ptr, _);
          }
          drep_inactivity_period() {
            try {
              const e = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolparamupdate_drep_inactivity_period(e, this.__wbg_ptr);
              var _ = j()[e / 4 + 0],
                t = j()[e / 4 + 1];
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_ref_script_coins_per_byte(_) {
            (P(_, UnitInterval),
              n.protocolparamupdate_set_ref_script_coins_per_byte(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          ref_script_coins_per_byte() {
            const _ = n.protocolparamupdate_ref_script_coins_per_byte(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : UnitInterval.__wrap(_);
          }
          static new() {
            const _ = n.protocolparamupdate_new();
            return ProtocolParamUpdate.__wrap(_);
          }
        }
        t.ProtocolParamUpdate = ProtocolParamUpdate;
        const le =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_protocolversion_free(_ >>> 0),
              );
        class ProtocolVersion {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ProtocolVersion.prototype);
            return ((t.__wbg_ptr = _), le.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), le.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_protocolversion_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolversion_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.protocolversion_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProtocolVersion.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolversion_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.protocolversion_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProtocolVersion.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolversion_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.protocolversion_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.protocolversion_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ProtocolVersion.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          major() {
            const _ = n.protocolversion_major(this.__wbg_ptr);
            return _ >>> 0;
          }
          minor() {
            const _ = n.protocolversion_minor(this.__wbg_ptr);
            return _ >>> 0;
          }
          static new(_, t) {
            const e = n.protocolversion_new(_, t);
            return ProtocolVersion.__wrap(e);
          }
        }
        t.ProtocolVersion = ProtocolVersion;
        const ue =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_publickey_free(_ >>> 0));
        class PublicKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(PublicKey.prototype);
            return ((t.__wbg_ptr = _), ue.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ue.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_publickey_free(_);
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.publickey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.publickey_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          hash() {
            const _ = n.publickey_hash(this.__wbg_ptr);
            return Ed25519KeyHash.__wrap(_);
          }
          verify(_, t) {
            const e = S(_, n.__wbindgen_malloc),
              r = h;
            P(t, Ed25519Signature);
            const i = n.publickey_verify(this.__wbg_ptr, e, r, t.__wbg_ptr);
            return 0 !== i;
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.publickey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.publickey_as_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.publickey_to_bech32(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.publickey_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return PublicKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.PublicKey = PublicKey;
        const he =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_publickeys_free(_ >>> 0));
        class PublicKeys {
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), he.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_publickeys_free(_);
          }
          constructor() {
            const _ = n.publickeys_new();
            return ((this.__wbg_ptr = _ >>> 0), this);
          }
          size() {
            const _ = n.governanceactionids_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.publickeys_get(this.__wbg_ptr, _);
            return PublicKey.__wrap(t);
          }
          add(_) {
            (P(_, PublicKey), n.publickeys_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.PublicKeys = PublicKeys;
        const ye =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_redeemer_free(_ >>> 0));
        class Redeemer {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Redeemer.prototype);
            return ((t.__wbg_ptr = _), ye.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ye.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_redeemer_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemer_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.redeemer_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Redeemer.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemer_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.redeemer_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Redeemer.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemer_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemer_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.redeemer_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Redeemer.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          tag() {
            const _ = n.redeemer_tag(this.__wbg_ptr);
            return RedeemerTag.__wrap(_);
          }
          index() {
            const _ = n.redeemer_index(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          data() {
            const _ = n.redeemer_data(this.__wbg_ptr);
            return PlutusData.__wrap(_);
          }
          ex_units() {
            const _ = n.redeemer_ex_units(this.__wbg_ptr);
            return ExUnits.__wrap(_);
          }
          static new(_, t, e, r) {
            (P(_, RedeemerTag), P(t, BigNum), P(e, PlutusData), P(r, ExUnits));
            const i = n.redeemer_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r.__wbg_ptr,
            );
            return Redeemer.__wrap(i);
          }
        }
        t.Redeemer = Redeemer;
        const fe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_redeemertag_free(_ >>> 0),
              );
        class RedeemerTag {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(RedeemerTag.prototype);
            return ((t.__wbg_ptr = _), fe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), fe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_redeemertag_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemertag_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.redeemertag_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return RedeemerTag.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemertag_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.redeemertag_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return RedeemerTag.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemertag_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemertag_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.redeemertag_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return RedeemerTag.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_spend() {
            const _ = n.redeemertag_new_spend();
            return RedeemerTag.__wrap(_);
          }
          static new_mint() {
            const _ = n.redeemertag_new_mint();
            return RedeemerTag.__wrap(_);
          }
          static new_cert() {
            const _ = n.redeemertag_new_cert();
            return RedeemerTag.__wrap(_);
          }
          static new_reward() {
            const _ = n.redeemertag_new_reward();
            return RedeemerTag.__wrap(_);
          }
          static new_vote() {
            const _ = n.redeemertag_new_vote();
            return RedeemerTag.__wrap(_);
          }
          static new_voting_proposal() {
            const _ = n.redeemertag_new_voting_proposal();
            return RedeemerTag.__wrap(_);
          }
          kind() {
            const _ = n.redeemertag_kind(this.__wbg_ptr);
            return _;
          }
        }
        t.RedeemerTag = RedeemerTag;
        const ke =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_redeemers_free(_ >>> 0));
        class Redeemers {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Redeemers.prototype);
            return ((t.__wbg_ptr = _), ke.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ke.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_redeemers_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemers_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.redeemers_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Redeemers.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemers_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.redeemers_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Redeemers.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemers_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemers_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.redeemers_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Redeemers.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.redeemers_new();
            return Redeemers.__wrap(_);
          }
          len() {
            const _ = n.fixedtransactionbodies_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.redeemers_get(this.__wbg_ptr, _);
            return Redeemer.__wrap(t);
          }
          add(_) {
            (P(_, Redeemer), n.redeemers_add(this.__wbg_ptr, _.__wbg_ptr));
          }
          get_container_type() {
            const _ = n.redeemers_get_container_type(this.__wbg_ptr);
            return _;
          }
          total_ex_units() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.redeemers_total_ex_units(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return ExUnits.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.Redeemers = Redeemers;
        const me =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_relay_free(_ >>> 0));
        class Relay {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Relay.prototype);
            return ((t.__wbg_ptr = _), me.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), me.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_relay_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.relay_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.relay_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Relay.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.relay_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.relay_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Relay.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.relay_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.relay_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.relay_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Relay.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_single_host_addr(_) {
            P(_, SingleHostAddr);
            const t = n.relay_new_single_host_addr(_.__wbg_ptr);
            return Relay.__wrap(t);
          }
          static new_single_host_name(_) {
            P(_, SingleHostName);
            const t = n.relay_new_single_host_name(_.__wbg_ptr);
            return Relay.__wrap(t);
          }
          static new_multi_host_name(_) {
            P(_, MultiHostName);
            const t = n.relay_new_multi_host_name(_.__wbg_ptr);
            return Relay.__wrap(t);
          }
          kind() {
            const _ = n.relay_kind(this.__wbg_ptr);
            return _;
          }
          as_single_host_addr() {
            const _ = n.relay_as_single_host_addr(this.__wbg_ptr);
            return 0 === _ ? void 0 : SingleHostAddr.__wrap(_);
          }
          as_single_host_name() {
            const _ = n.relay_as_single_host_name(this.__wbg_ptr);
            return 0 === _ ? void 0 : SingleHostName.__wrap(_);
          }
          as_multi_host_name() {
            const _ = n.relay_as_multi_host_name(this.__wbg_ptr);
            return 0 === _ ? void 0 : MultiHostName.__wrap(_);
          }
        }
        t.Relay = Relay;
        const ve =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_relays_free(_ >>> 0));
        class Relays {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Relays.prototype);
            return ((t.__wbg_ptr = _), ve.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ve.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_relays_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.relays_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.relays_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Relays.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.relays_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.relays_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Relays.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.relays_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.relays_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.relays_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Relays.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.relays_new();
            return Relays.__wrap(_);
          }
          len() {
            const _ = n.relays_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.relays_get(this.__wbg_ptr, _);
            return Relay.__wrap(t);
          }
          add(_) {
            (P(_, Relay), n.relays_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.Relays = Relays;
        const xe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_rewardaddress_free(_ >>> 0),
              );
        class RewardAddress {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(RewardAddress.prototype);
            return ((t.__wbg_ptr = _), xe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), xe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_rewardaddress_free(_);
          }
          static new(_, t) {
            P(t, Credential);
            const e = n.enterpriseaddress_new(_, t.__wbg_ptr);
            return RewardAddress.__wrap(e);
          }
          payment_cred() {
            const _ = n.baseaddress_payment_cred(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          to_address() {
            const _ = n.rewardaddress_to_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          static from_address(_) {
            P(_, Address);
            const t = n.rewardaddress_from_address(_.__wbg_ptr);
            return 0 === t ? void 0 : RewardAddress.__wrap(t);
          }
          network_id() {
            const _ = n.enterpriseaddress_network_id(this.__wbg_ptr);
            return _;
          }
        }
        t.RewardAddress = RewardAddress;
        const je =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_rewardaddresses_free(_ >>> 0),
              );
        class RewardAddresses {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(RewardAddresses.prototype);
            return ((t.__wbg_ptr = _), je.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), je.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_rewardaddresses_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.rewardaddresses_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.rewardaddresses_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return RewardAddresses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.rewardaddresses_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.rewardaddresses_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return RewardAddresses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.rewardaddresses_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.rewardaddresses_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.rewardaddresses_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return RewardAddresses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.genesishashes_new();
            return RewardAddresses.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.rewardaddresses_get(this.__wbg_ptr, _);
            return RewardAddress.__wrap(t);
          }
          add(_) {
            (P(_, RewardAddress),
              n.rewardaddresses_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.RewardAddresses = RewardAddresses;
        const Re =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_scriptall_free(_ >>> 0));
        class ScriptAll {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptAll.prototype);
            return ((t.__wbg_ptr = _), Re.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Re.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scriptall_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptall_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scriptall_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptAll.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptall_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptall_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptAll.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptall_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptall_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptall_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptAll.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          native_scripts() {
            const _ = n.scriptall_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          static new(_) {
            P(_, NativeScripts);
            const t = n.scriptall_new(_.__wbg_ptr);
            return ScriptAll.__wrap(t);
          }
        }
        t.ScriptAll = ScriptAll;
        const Ae =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_scriptany_free(_ >>> 0));
        class ScriptAny {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptAny.prototype);
            return ((t.__wbg_ptr = _), Ae.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ae.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scriptany_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptany_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scriptany_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptAny.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptany_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptany_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptAny.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptany_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptany_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptany_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptAny.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          native_scripts() {
            const _ = n.scriptall_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          static new(_) {
            P(_, NativeScripts);
            const t = n.scriptall_new(_.__wbg_ptr);
            return ScriptAny.__wrap(t);
          }
        }
        t.ScriptAny = ScriptAny;
        const Se =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_scriptdatahash_free(_ >>> 0),
              );
        class ScriptDataHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptDataHash.prototype);
            return ((t.__wbg_ptr = _), Se.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Se.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scriptdatahash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scriptdatahash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptdatahash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptdatahash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptDataHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.ScriptDataHash = ScriptDataHash;
        const Pe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_scripthash_free(_ >>> 0));
        class ScriptHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptHash.prototype);
            return ((t.__wbg_ptr = _), Pe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Pe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scripthash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scripthash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.ed25519keyhash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scripthash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.ed25519keyhash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scripthash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.ScriptHash = ScriptHash;
        const Be =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_scripthashes_free(_ >>> 0),
              );
        class ScriptHashes {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptHashes.prototype);
            return ((t.__wbg_ptr = _), Be.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Be.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scripthashes_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scripthashes_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scripthashes_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.scripthashes_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scripthashes_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.scripthashes_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scripthashes_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scripthashes_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptHashes.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.genesishashes_new();
            return ScriptHashes.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.scripthashes_get(this.__wbg_ptr, _);
            return ScriptHash.__wrap(t);
          }
          add(_) {
            (P(_, ScriptHash), n.scripthashes_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.ScriptHashes = ScriptHashes;
        const Fe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_scriptnofk_free(_ >>> 0));
        class ScriptNOfK {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptNOfK.prototype);
            return ((t.__wbg_ptr = _), Fe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Fe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scriptnofk_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptnofk_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scriptnofk_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptNOfK.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptnofk_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptnofk_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptNOfK.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptnofk_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptnofk_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptnofk_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptNOfK.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          n() {
            const _ = n.scriptnofk_n(this.__wbg_ptr);
            return _ >>> 0;
          }
          native_scripts() {
            const _ = n.scriptall_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          static new(_, t) {
            P(t, NativeScripts);
            const e = n.scriptnofk_new(_, t.__wbg_ptr);
            return ScriptNOfK.__wrap(e);
          }
        }
        t.ScriptNOfK = ScriptNOfK;
        const Te =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_scriptpubkey_free(_ >>> 0),
              );
        class ScriptPubkey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptPubkey.prototype);
            return ((t.__wbg_ptr = _), Te.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Te.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scriptpubkey_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptpubkey_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scriptpubkey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptPubkey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptpubkey_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptpubkey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptPubkey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptpubkey_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptpubkey_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptpubkey_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptPubkey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          addr_keyhash() {
            const _ = n.scriptpubkey_addr_keyhash(this.__wbg_ptr);
            return Ed25519KeyHash.__wrap(_);
          }
          static new(_) {
            P(_, Ed25519KeyHash);
            const t = n.scriptpubkey_new(_.__wbg_ptr);
            return ScriptPubkey.__wrap(t);
          }
        }
        t.ScriptPubkey = ScriptPubkey;
        const ze =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_scriptref_free(_ >>> 0));
        class ScriptRef {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(ScriptRef.prototype);
            return ((t.__wbg_ptr = _), ze.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ze.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_scriptref_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptref_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.scriptref_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptRef.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptref_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptref_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptRef.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptref_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptref_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.scriptref_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return ScriptRef.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_native_script(_) {
            P(_, NativeScript);
            const t = n.scriptref_new_native_script(_.__wbg_ptr);
            return ScriptRef.__wrap(t);
          }
          static new_plutus_script(_) {
            P(_, PlutusScript);
            const t = n.scriptref_new_plutus_script(_.__wbg_ptr);
            return ScriptRef.__wrap(t);
          }
          is_native_script() {
            const _ = n.scriptref_is_native_script(this.__wbg_ptr);
            return 0 !== _;
          }
          is_plutus_script() {
            const _ = n.scriptref_is_plutus_script(this.__wbg_ptr);
            return 0 !== _;
          }
          native_script() {
            const _ = n.scriptref_native_script(this.__wbg_ptr);
            return 0 === _ ? void 0 : NativeScript.__wrap(_);
          }
          plutus_script() {
            const _ = n.scriptref_plutus_script(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusScript.__wrap(_);
          }
          to_unwrapped_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.scriptref_to_unwrapped_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.ScriptRef = ScriptRef;
        const Ce =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_singlehostaddr_free(_ >>> 0),
              );
        class SingleHostAddr {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(SingleHostAddr.prototype);
            return ((t.__wbg_ptr = _), Ce.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ce.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_singlehostaddr_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostaddr_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.singlehostaddr_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return SingleHostAddr.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostaddr_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.singlehostaddr_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return SingleHostAddr.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostaddr_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostaddr_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.singlehostaddr_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return SingleHostAddr.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          port() {
            const _ = n.singlehostaddr_port(this.__wbg_ptr);
            return 16777215 === _ ? void 0 : _;
          }
          ipv4() {
            const _ = n.singlehostaddr_ipv4(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ipv4.__wrap(_);
          }
          ipv6() {
            const _ = n.singlehostaddr_ipv6(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ipv6.__wrap(_);
          }
          static new(_, t, e) {
            let r = 0;
            v(t) || (P(t, Ipv4), (r = t.__destroy_into_raw()));
            let i = 0;
            v(e) || (P(e, Ipv6), (i = e.__destroy_into_raw()));
            const a = n.singlehostaddr_new(v(_) ? 16777215 : _, r, i);
            return SingleHostAddr.__wrap(a);
          }
        }
        t.SingleHostAddr = SingleHostAddr;
        const Ne =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_singlehostname_free(_ >>> 0),
              );
        class SingleHostName {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(SingleHostName.prototype);
            return ((t.__wbg_ptr = _), Ne.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ne.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_singlehostname_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostname_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.singlehostname_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return SingleHostName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostname_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.singlehostname_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return SingleHostName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostname_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.singlehostname_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.singlehostname_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return SingleHostName.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          port() {
            const _ = n.singlehostname_port(this.__wbg_ptr);
            return 16777215 === _ ? void 0 : _;
          }
          dns_name() {
            const _ = n.multihostname_dns_name(this.__wbg_ptr);
            return DNSRecordAorAAAA.__wrap(_);
          }
          static new(_, t) {
            P(t, DNSRecordAorAAAA);
            const e = n.singlehostname_new(v(_) ? 16777215 : _, t.__wbg_ptr);
            return SingleHostName.__wrap(e);
          }
        }
        t.SingleHostName = SingleHostName;
        const De =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_stakeandvotedelegation_free(_ >>> 0),
              );
        class StakeAndVoteDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(StakeAndVoteDelegation.prototype);
            return ((t.__wbg_ptr = _), De.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), De.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_stakeandvotedelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeandvotedelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.stakeandvotedelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeAndVoteDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeandvotedelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakeandvotedelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeAndVoteDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeandvotedelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeandvotedelegation_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakeandvotedelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeAndVoteDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakeandvotedelegation_stake_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          pool_keyhash() {
            const _ = n.stakeandvotedelegation_pool_keyhash(this.__wbg_ptr);
            return Ed25519KeyHash.__wrap(_);
          }
          drep() {
            const _ = n.stakeandvotedelegation_drep(this.__wbg_ptr);
            return DRep.__wrap(_);
          }
          static new(_, t, e) {
            (P(_, Credential), P(t, Ed25519KeyHash), P(e, DRep));
            const r = n.stakeandvotedelegation_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return StakeAndVoteDelegation.__wrap(r);
          }
          has_script_credentials() {
            const _ = n.stakeandvotedelegation_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.StakeAndVoteDelegation = StakeAndVoteDelegation;
        const Ve =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_stakedelegation_free(_ >>> 0),
              );
        class StakeDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(StakeDelegation.prototype);
            return ((t.__wbg_ptr = _), Ve.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ve.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_stakedelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakedelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.stakedelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakedelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakedelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakedelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakedelegation_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakedelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakeandvotedelegation_stake_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          pool_keyhash() {
            const _ = n.stakedelegation_pool_keyhash(this.__wbg_ptr);
            return Ed25519KeyHash.__wrap(_);
          }
          static new(_, t) {
            (P(_, Credential), P(t, Ed25519KeyHash));
            const e = n.stakedelegation_new(_.__wbg_ptr, t.__wbg_ptr);
            return StakeDelegation.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.stakeandvotedelegation_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.StakeDelegation = StakeDelegation;
        const Oe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_stakederegistration_free(_ >>> 0),
              );
        class StakeDeregistration {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(StakeDeregistration.prototype);
            return ((t.__wbg_ptr = _), Oe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Oe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_stakederegistration_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakederegistration_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.stakederegistration_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeDeregistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakederegistration_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakederegistration_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeDeregistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakederegistration_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakederegistration_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakederegistration_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeDeregistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakederegistration_stake_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          coin() {
            const _ = n.stakederegistration_coin(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          static new(_) {
            P(_, Credential);
            const t = n.stakederegistration_new(_.__wbg_ptr);
            return StakeDeregistration.__wrap(t);
          }
          static new_with_explicit_refund(_, t) {
            (P(_, Credential), P(t, BigNum));
            const e = n.stakederegistration_new_with_explicit_refund(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return StakeDeregistration.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.stakederegistration_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.StakeDeregistration = StakeDeregistration;
        const He =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_stakeregistration_free(_ >>> 0),
              );
        class StakeRegistration {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(StakeRegistration.prototype);
            return ((t.__wbg_ptr = _), He.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), He.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_stakeregistration_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistration_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.stakeregistration_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistration_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakeregistration_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistration_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistration_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakeregistration_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeRegistration.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakeregistration_stake_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          coin() {
            const _ = n.stakeregistration_coin(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          static new(_) {
            P(_, Credential);
            const t = n.stakeregistration_new(_.__wbg_ptr);
            return StakeRegistration.__wrap(t);
          }
          static new_with_explicit_deposit(_, t) {
            (P(_, Credential), P(t, BigNum));
            const e = n.stakeregistration_new_with_explicit_deposit(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return StakeRegistration.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.stakeregistration_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.StakeRegistration = StakeRegistration;
        const Ie =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_stakeregistrationanddelegation_free(_ >>> 0),
              );
        class StakeRegistrationAndDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(StakeRegistrationAndDelegation.prototype);
            return ((t.__wbg_ptr = _), Ie.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ie.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_stakeregistrationanddelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistrationanddelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.stakeregistrationanddelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistrationanddelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakeregistrationanddelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistrationanddelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakeregistrationanddelegation_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakeregistrationanddelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakeregistrationanddelegation_stake_credential(
              this.__wbg_ptr,
            );
            return Credential.__wrap(_);
          }
          pool_keyhash() {
            const _ = n.stakeregistrationanddelegation_pool_keyhash(
              this.__wbg_ptr,
            );
            return Ed25519KeyHash.__wrap(_);
          }
          coin() {
            const _ = n.drepderegistration_coin(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t, e) {
            (P(_, Credential), P(t, Ed25519KeyHash), P(e, BigNum));
            const r = n.stakeregistrationanddelegation_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return StakeRegistrationAndDelegation.__wrap(r);
          }
          has_script_credentials() {
            const _ = n.stakeregistrationanddelegation_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.StakeRegistrationAndDelegation = StakeRegistrationAndDelegation;
        const Me =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_stakevoteregistrationanddelegation_free(_ >>> 0),
              );
        class StakeVoteRegistrationAndDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(
              StakeVoteRegistrationAndDelegation.prototype,
            );
            return ((t.__wbg_ptr = _), Me.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Me.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_stakevoteregistrationanddelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakevoteregistrationanddelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.stakevoteregistrationanddelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeVoteRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakevoteregistrationanddelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakevoteregistrationanddelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeVoteRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakevoteregistrationanddelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.stakevoteregistrationanddelegation_to_js_value(
                r,
                this.__wbg_ptr,
              );
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.stakevoteregistrationanddelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return StakeVoteRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakevoteregistrationanddelegation_stake_credential(
              this.__wbg_ptr,
            );
            return Credential.__wrap(_);
          }
          pool_keyhash() {
            const _ = n.stakeregistrationanddelegation_pool_keyhash(
              this.__wbg_ptr,
            );
            return Ed25519KeyHash.__wrap(_);
          }
          drep() {
            const _ = n.stakevoteregistrationanddelegation_drep(this.__wbg_ptr);
            return DRep.__wrap(_);
          }
          coin() {
            const _ = n.drepderegistration_coin(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t, e, r) {
            (P(_, Credential), P(t, Ed25519KeyHash), P(e, DRep), P(r, BigNum));
            const i = n.stakevoteregistrationanddelegation_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r.__wbg_ptr,
            );
            return StakeVoteRegistrationAndDelegation.__wrap(i);
          }
          has_script_credentials() {
            const _ =
              n.stakevoteregistrationanddelegation_has_script_credentials(
                this.__wbg_ptr,
              );
            return 0 !== _;
          }
        }
        t.StakeVoteRegistrationAndDelegation =
          StakeVoteRegistrationAndDelegation;
        const Ke =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_strings_free(_ >>> 0));
        class Strings {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Strings.prototype);
            return ((t.__wbg_ptr = _), Ke.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ke.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_strings_free(_);
          }
          static new() {
            const _ = n.strings_new();
            return Strings.__wrap(_);
          }
          len() {
            const _ = n.costmdls_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            let t, e;
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              n.strings_get(a, this.__wbg_ptr, _);
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              return ((t = r), (e = i), u(r, i));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          add(_) {
            const t = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
              e = h;
            n.strings_add(this.__wbg_ptr, t, e);
          }
        }
        t.Strings = Strings;
        const Ue =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_timelockexpiry_free(_ >>> 0),
              );
        class TimelockExpiry {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TimelockExpiry.prototype);
            return ((t.__wbg_ptr = _), Ue.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ue.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_timelockexpiry_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockexpiry_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.timelockexpiry_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TimelockExpiry.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockexpiry_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.timelockexpiry_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TimelockExpiry.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockexpiry_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockexpiry_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.timelockexpiry_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TimelockExpiry.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          slot() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockexpiry_slot(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          slot_bignum() {
            const _ = n.timelockexpiry_slot_bignum(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_) {
            const t = n.timelockexpiry_new(_);
            return TimelockExpiry.__wrap(t);
          }
          static new_timelockexpiry(_) {
            P(_, BigNum);
            const t = n.timelockexpiry_new_timelockexpiry(_.__wbg_ptr);
            return TimelockExpiry.__wrap(t);
          }
        }
        t.TimelockExpiry = TimelockExpiry;
        const Ee =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_timelockstart_free(_ >>> 0),
              );
        class TimelockStart {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TimelockStart.prototype);
            return ((t.__wbg_ptr = _), Ee.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ee.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_timelockstart_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockstart_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.timelockstart_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TimelockStart.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockstart_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.timelockstart_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TimelockStart.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockstart_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockstart_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.timelockstart_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TimelockStart.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          slot() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.timelockexpiry_slot(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          slot_bignum() {
            const _ = n.timelockexpiry_slot_bignum(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_) {
            const t = n.timelockexpiry_new(_);
            return TimelockStart.__wrap(t);
          }
          static new_timelockstart(_) {
            P(_, BigNum);
            const t = n.timelockexpiry_new_timelockexpiry(_.__wbg_ptr);
            return TimelockStart.__wrap(t);
          }
        }
        t.TimelockStart = TimelockStart;
        const We =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transaction_free(_ >>> 0),
              );
        class Transaction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Transaction.prototype);
            return ((t.__wbg_ptr = _), We.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), We.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Transaction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Transaction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Transaction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          body() {
            const _ = n.transaction_body(this.__wbg_ptr);
            return TransactionBody.__wrap(_);
          }
          witness_set() {
            const _ = n.transaction_witness_set(this.__wbg_ptr);
            return TransactionWitnessSet.__wrap(_);
          }
          is_valid() {
            const _ = n.transaction_is_valid(this.__wbg_ptr);
            return 0 !== _;
          }
          auxiliary_data() {
            const _ = n.transaction_auxiliary_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : AuxiliaryData.__wrap(_);
          }
          set_is_valid(_) {
            n.transaction_set_is_valid(this.__wbg_ptr, _);
          }
          static new(_, t, e) {
            (P(_, TransactionBody), P(t, TransactionWitnessSet));
            let r = 0;
            v(e) || (P(e, AuxiliaryData), (r = e.__destroy_into_raw()));
            const i = n.transaction_new(_.__wbg_ptr, t.__wbg_ptr, r);
            return Transaction.__wrap(i);
          }
        }
        t.Transaction = Transaction;
        const Le =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbatch_free(_ >>> 0),
              );
        class TransactionBatch {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBatch.prototype);
            return ((t.__wbg_ptr = _), Le.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Le.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbatch_free(_);
          }
          len() {
            const _ = n.governanceactionids_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionbatch_get(this.__wbg_ptr, _);
            return Transaction.__wrap(t);
          }
        }
        t.TransactionBatch = TransactionBatch;
        const Ge =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbatchlist_free(_ >>> 0),
              );
        class TransactionBatchList {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBatchList.prototype);
            return ((t.__wbg_ptr = _), Ge.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ge.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbatchlist_free(_);
          }
          len() {
            const _ = n.governanceactionids_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionbatchlist_get(this.__wbg_ptr, _);
            return TransactionBatch.__wrap(t);
          }
        }
        t.TransactionBatchList = TransactionBatchList;
        const qe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbodies_free(_ >>> 0),
              );
        class TransactionBodies {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBodies.prototype);
            return ((t.__wbg_ptr = _), qe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), qe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbodies_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbodies_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionbodies_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionBodies.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbodies_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionbodies_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionBodies.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbodies_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbodies_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionbodies_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionBodies.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.fixedtransactionbodies_new();
            return TransactionBodies.__wrap(_);
          }
          len() {
            const _ = n.fixedtransactionbodies_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionbodies_get(this.__wbg_ptr, _);
            return TransactionBody.__wrap(t);
          }
          add(_) {
            (P(_, TransactionBody),
              n.transactionbodies_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.TransactionBodies = TransactionBodies;
        const $e =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbody_free(_ >>> 0),
              );
        class TransactionBody {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBody.prototype);
            return ((t.__wbg_ptr = _), $e.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), $e.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbody_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbody_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionbody_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbody_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionbody_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbody_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbody_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionbody_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionBody.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          inputs() {
            const _ = n.transactionbody_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          outputs() {
            const _ = n.transactionbody_outputs(this.__wbg_ptr);
            return TransactionOutputs.__wrap(_);
          }
          fee() {
            const _ = n.transactionbody_fee(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          ttl() {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbody_ttl(i, this.__wbg_ptr);
              var _ = j()[i / 4 + 0],
                t = j()[i / 4 + 1],
                e = j()[i / 4 + 2],
                r = j()[i / 4 + 3];
              if (r) throw w(e);
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          ttl_bignum() {
            const _ = n.transactionbody_ttl_bignum(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_ttl(_) {
            (P(_, BigNum),
              n.transactionbody_set_ttl(this.__wbg_ptr, _.__wbg_ptr));
          }
          remove_ttl() {
            n.transactionbody_remove_ttl(this.__wbg_ptr);
          }
          set_certs(_) {
            (P(_, Certificates),
              n.transactionbody_set_certs(this.__wbg_ptr, _.__wbg_ptr));
          }
          certs() {
            const _ = n.transactionbody_certs(this.__wbg_ptr);
            return 0 === _ ? void 0 : Certificates.__wrap(_);
          }
          set_withdrawals(_) {
            (P(_, Withdrawals),
              n.transactionbody_set_withdrawals(this.__wbg_ptr, _.__wbg_ptr));
          }
          withdrawals() {
            const _ = n.transactionbody_withdrawals(this.__wbg_ptr);
            return 0 === _ ? void 0 : Withdrawals.__wrap(_);
          }
          set_update(_) {
            (P(_, Update),
              n.transactionbody_set_update(this.__wbg_ptr, _.__wbg_ptr));
          }
          update() {
            const _ = n.transactionbody_update(this.__wbg_ptr);
            return 0 === _ ? void 0 : Update.__wrap(_);
          }
          set_auxiliary_data_hash(_) {
            (P(_, AuxiliaryDataHash),
              n.transactionbody_set_auxiliary_data_hash(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          auxiliary_data_hash() {
            const _ = n.transactionbody_auxiliary_data_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : AuxiliaryDataHash.__wrap(_);
          }
          set_validity_start_interval(_) {
            n.transactionbody_set_validity_start_interval(this.__wbg_ptr, _);
          }
          set_validity_start_interval_bignum(_) {
            (P(_, BigNum),
              n.transactionbody_set_validity_start_interval_bignum(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          validity_start_interval_bignum() {
            const _ = n.transactionbody_validity_start_interval_bignum(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          validity_start_interval() {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbody_validity_start_interval(i, this.__wbg_ptr);
              var _ = j()[i / 4 + 0],
                t = j()[i / 4 + 1],
                e = j()[i / 4 + 2],
                r = j()[i / 4 + 3];
              if (r) throw w(e);
              return 0 === _ ? void 0 : t >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_mint(_) {
            (P(_, Mint),
              n.transactionbody_set_mint(this.__wbg_ptr, _.__wbg_ptr));
          }
          mint() {
            const _ = n.transactionbody_mint(this.__wbg_ptr);
            return 0 === _ ? void 0 : Mint.__wrap(_);
          }
          set_reference_inputs(_) {
            (P(_, TransactionInputs),
              n.transactionbody_set_reference_inputs(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          reference_inputs() {
            const _ = n.transactionbody_reference_inputs(this.__wbg_ptr);
            return 0 === _ ? void 0 : TransactionInputs.__wrap(_);
          }
          set_script_data_hash(_) {
            (P(_, ScriptDataHash),
              n.transactionbody_set_script_data_hash(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          script_data_hash() {
            const _ = n.transactionbody_script_data_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptDataHash.__wrap(_);
          }
          set_collateral(_) {
            (P(_, TransactionInputs),
              n.transactionbody_set_collateral(this.__wbg_ptr, _.__wbg_ptr));
          }
          collateral() {
            const _ = n.transactionbody_collateral(this.__wbg_ptr);
            return 0 === _ ? void 0 : TransactionInputs.__wrap(_);
          }
          set_required_signers(_) {
            (P(_, Ed25519KeyHashes),
              n.transactionbody_set_required_signers(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          required_signers() {
            const _ = n.transactionbody_required_signers(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ed25519KeyHashes.__wrap(_);
          }
          set_network_id(_) {
            (P(_, NetworkId),
              n.transactionbody_set_network_id(this.__wbg_ptr, _.__wbg_ptr));
          }
          network_id() {
            const _ = n.transactionbody_network_id(this.__wbg_ptr);
            return 0 === _ ? void 0 : NetworkId.__wrap(_);
          }
          set_collateral_return(_) {
            (P(_, TransactionOutput),
              n.transactionbody_set_collateral_return(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          collateral_return() {
            const _ = n.transactionbody_collateral_return(this.__wbg_ptr);
            return 0 === _ ? void 0 : TransactionOutput.__wrap(_);
          }
          set_total_collateral(_) {
            (P(_, BigNum),
              n.transactionbody_set_total_collateral(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          total_collateral() {
            const _ = n.transactionbody_total_collateral(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_voting_procedures(_) {
            (P(_, VotingProcedures),
              n.transactionbody_set_voting_procedures(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          voting_procedures() {
            const _ = n.transactionbody_voting_procedures(this.__wbg_ptr);
            return 0 === _ ? void 0 : VotingProcedures.__wrap(_);
          }
          set_voting_proposals(_) {
            (P(_, VotingProposals),
              n.transactionbody_set_voting_proposals(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          voting_proposals() {
            const _ = n.transactionbody_voting_proposals(this.__wbg_ptr);
            return 0 === _ ? void 0 : VotingProposals.__wrap(_);
          }
          set_donation(_) {
            (P(_, BigNum),
              n.transactionbody_set_donation(this.__wbg_ptr, _.__wbg_ptr));
          }
          donation() {
            const _ = n.transactionbody_donation(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_current_treasury_value(_) {
            (P(_, BigNum),
              n.transactionbody_set_current_treasury_value(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          current_treasury_value() {
            const _ = n.transactionbody_current_treasury_value(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          static new(_, t, e, r) {
            (P(_, TransactionInputs), P(t, TransactionOutputs), P(e, BigNum));
            const i = n.transactionbody_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              !v(r),
              v(r) ? 0 : r,
            );
            return TransactionBody.__wrap(i);
          }
          static new_tx_body(_, t, e) {
            (P(_, TransactionInputs), P(t, TransactionOutputs), P(e, BigNum));
            const r = n.transactionbody_new_tx_body(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return TransactionBody.__wrap(r);
          }
        }
        t.TransactionBody = TransactionBody;
        const Je =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbuilder_free(_ >>> 0),
              );
        class TransactionBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBuilder.prototype);
            return ((t.__wbg_ptr = _), Je.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Je.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbuilder_free(_);
          }
          add_inputs_from(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionUnspentOutputs),
                n.transactionbuilder_add_inputs_from(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_inputs(_) {
            (P(_, TxInputsBuilder),
              n.transactionbuilder_set_inputs(this.__wbg_ptr, _.__wbg_ptr));
          }
          set_collateral(_) {
            (P(_, TxInputsBuilder),
              n.transactionbuilder_set_collateral(this.__wbg_ptr, _.__wbg_ptr));
          }
          set_collateral_return(_) {
            (P(_, TransactionOutput),
              n.transactionbuilder_set_collateral_return(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          remove_collateral_return() {
            n.transactionbuilder_remove_collateral_return(this.__wbg_ptr);
          }
          set_collateral_return_and_total(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionOutput),
                n.transactionbuilder_set_collateral_return_and_total(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_total_collateral(_) {
            (P(_, BigNum),
              n.transactionbuilder_set_total_collateral(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          remove_total_collateral() {
            n.transactionbuilder_remove_total_collateral(this.__wbg_ptr);
          }
          set_total_collateral_and_return(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                P(t, Address),
                n.transactionbuilder_set_total_collateral_and_return(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_reference_input(_) {
            (P(_, TransactionInput),
              n.transactionbuilder_add_reference_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          add_script_reference_input(_, t) {
            (P(_, TransactionInput),
              n.transactionbuilder_add_script_reference_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t,
              ));
          }
          add_key_input(_, t, e) {
            (P(_, Ed25519KeyHash),
              P(t, TransactionInput),
              P(e, Value),
              n.transactionbuilder_add_key_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_native_script_input(_, t, e) {
            (P(_, NativeScript),
              P(t, TransactionInput),
              P(e, Value),
              n.transactionbuilder_add_native_script_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_plutus_script_input(_, t, e) {
            (P(_, PlutusWitness),
              P(t, TransactionInput),
              P(e, Value),
              n.transactionbuilder_add_plutus_script_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_bootstrap_input(_, t, e) {
            (P(_, ByronAddress),
              P(t, TransactionInput),
              P(e, Value),
              n.transactionbuilder_add_bootstrap_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_regular_input(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Address),
                P(t, TransactionInput),
                P(e, Value),
                n.transactionbuilder_add_regular_input(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_inputs_from_and_change(_, t, e) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionUnspentOutputs),
                P(e, ChangeConfig),
                n.transactionbuilder_add_inputs_from_and_change(
                  o,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t,
                  e.__wbg_ptr,
                ));
              var r = j()[o / 4 + 0],
                i = j()[o / 4 + 1],
                a = j()[o / 4 + 2];
              if (a) throw w(i);
              return 0 !== r;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_inputs_from_and_change_with_collateral_return(_, t, e, r) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionUnspentOutputs),
                P(e, ChangeConfig),
                P(r, BigNum),
                n.transactionbuilder_add_inputs_from_and_change_with_collateral_return(
                  o,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t,
                  e.__wbg_ptr,
                  r.__wbg_ptr,
                ));
              var i = j()[o / 4 + 0],
                a = j()[o / 4 + 1];
              if (a) throw w(i);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_native_input_scripts() {
            const _ = n.transactionbuilder_get_native_input_scripts(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : NativeScripts.__wrap(_);
          }
          get_plutus_input_scripts() {
            const _ = n.transactionbuilder_get_plutus_input_scripts(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : PlutusWitnesses.__wrap(_);
          }
          fee_for_input(_, t, e) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Address),
                P(t, TransactionInput),
                P(e, Value),
                n.transactionbuilder_fee_for_input(
                  o,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[o / 4 + 0],
                i = j()[o / 4 + 1],
                a = j()[o / 4 + 2];
              if (a) throw w(i);
              return BigNum.__wrap(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_output(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionOutput),
                n.transactionbuilder_add_output(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          fee_for_output(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionOutput),
                n.transactionbuilder_fee_for_output(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return BigNum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_fee(_) {
            (P(_, BigNum),
              n.transactionbuilder_set_fee(this.__wbg_ptr, _.__wbg_ptr));
          }
          set_min_fee(_) {
            (P(_, BigNum),
              n.transactionbuilder_set_min_fee(this.__wbg_ptr, _.__wbg_ptr));
          }
          set_ttl(_) {
            n.transactionbuilder_set_ttl(this.__wbg_ptr, _);
          }
          set_ttl_bignum(_) {
            (P(_, BigNum),
              n.transactionbuilder_set_ttl_bignum(this.__wbg_ptr, _.__wbg_ptr));
          }
          remove_ttl() {
            n.transactionbuilder_remove_ttl(this.__wbg_ptr);
          }
          set_validity_start_interval(_) {
            n.transactionbuilder_set_validity_start_interval(this.__wbg_ptr, _);
          }
          set_validity_start_interval_bignum(_) {
            P(_, BigNum);
            var t = _.__destroy_into_raw();
            n.transactionbuilder_set_validity_start_interval_bignum(
              this.__wbg_ptr,
              t,
            );
          }
          remove_validity_start_interval() {
            n.transactionbuilder_remove_validity_start_interval(this.__wbg_ptr);
          }
          set_certs(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Certificates),
                n.transactionbuilder_set_certs(r, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          remove_certs() {
            n.transactionbuilder_remove_certs(this.__wbg_ptr);
          }
          set_certs_builder(_) {
            (P(_, CertificatesBuilder),
              n.transactionbuilder_set_certs_builder(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_withdrawals(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Withdrawals),
                n.transactionbuilder_set_withdrawals(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_withdrawals_builder(_) {
            (P(_, WithdrawalsBuilder),
              n.transactionbuilder_set_withdrawals_builder(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_voting_builder(_) {
            (P(_, VotingBuilder),
              n.transactionbuilder_set_voting_builder(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          set_voting_proposal_builder(_) {
            (P(_, VotingProposalBuilder),
              n.transactionbuilder_set_voting_proposal_builder(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          remove_withdrawals() {
            n.transactionbuilder_remove_withdrawals(this.__wbg_ptr);
          }
          get_auxiliary_data() {
            const _ = n.transactionbuilder_get_auxiliary_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : AuxiliaryData.__wrap(_);
          }
          set_auxiliary_data(_) {
            (P(_, AuxiliaryData),
              n.transactionbuilder_set_auxiliary_data(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          remove_auxiliary_data() {
            n.transactionbuilder_remove_auxiliary_data(this.__wbg_ptr);
          }
          set_metadata(_) {
            (P(_, GeneralTransactionMetadata),
              n.transactionbuilder_set_metadata(this.__wbg_ptr, _.__wbg_ptr));
          }
          add_metadatum(_, t) {
            (P(_, BigNum),
              P(t, TransactionMetadatum),
              n.transactionbuilder_add_metadatum(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
              ));
          }
          add_json_metadatum(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              P(_, BigNum);
              const a = m(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionbuilder_add_json_metadatum(
                i,
                this.__wbg_ptr,
                _.__wbg_ptr,
                a,
                o,
              );
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_json_metadatum_with_schema(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              P(_, BigNum);
              const o = m(t, n.__wbindgen_malloc, n.__wbindgen_realloc),
                s = h;
              n.transactionbuilder_add_json_metadatum_with_schema(
                a,
                this.__wbg_ptr,
                _.__wbg_ptr,
                o,
                s,
                e,
              );
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_mint_builder(_) {
            (P(_, MintBuilder),
              n.transactionbuilder_set_mint_builder(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          remove_mint_builder() {
            n.transactionbuilder_remove_mint_builder(this.__wbg_ptr);
          }
          get_mint_builder() {
            const _ = n.transactionbuilder_get_mint_builder(this.__wbg_ptr);
            return 0 === _ ? void 0 : MintBuilder.__wrap(_);
          }
          set_mint(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Mint),
                P(t, NativeScripts),
                n.transactionbuilder_set_mint(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_mint() {
            const _ = n.transactionbuilder_get_mint(this.__wbg_ptr);
            return 0 === _ ? void 0 : Mint.__wrap(_);
          }
          get_mint_scripts() {
            const _ = n.transactionbuilder_get_mint_scripts(this.__wbg_ptr);
            return 0 === _ ? void 0 : NativeScripts.__wrap(_);
          }
          set_mint_asset(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, NativeScript),
                P(t, MintAssets),
                n.transactionbuilder_set_mint_asset(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_mint_asset(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, NativeScript),
                P(t, AssetName),
                P(e, Int),
                n.transactionbuilder_add_mint_asset(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_mint_asset_and_output(_, t, e, r, i) {
            try {
              const s = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, NativeScript),
                P(t, AssetName),
                P(e, Int),
                P(r, TransactionOutputAmountBuilder),
                P(i, BigNum),
                n.transactionbuilder_add_mint_asset_and_output(
                  s,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                  r.__wbg_ptr,
                  i.__wbg_ptr,
                ));
              var a = j()[s / 4 + 0],
                o = j()[s / 4 + 1];
              if (o) throw w(a);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_mint_asset_and_output_min_required_coin(_, t, e, r) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, NativeScript),
                P(t, AssetName),
                P(e, Int),
                P(r, TransactionOutputAmountBuilder),
                n.transactionbuilder_add_mint_asset_and_output_min_required_coin(
                  o,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                  r.__wbg_ptr,
                ));
              var i = j()[o / 4 + 0],
                a = j()[o / 4 + 1];
              if (a) throw w(i);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_extra_witness_datum(_) {
            (P(_, PlutusData),
              n.transactionbuilder_add_extra_witness_datum(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          get_extra_witness_datums() {
            const _ = n.transactionbuilder_get_extra_witness_datums(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : PlutusList.__wrap(_);
          }
          set_donation(_) {
            (P(_, BigNum),
              n.transactionbuilder_set_donation(this.__wbg_ptr, _.__wbg_ptr));
          }
          get_donation() {
            const _ = n.transactionbuilder_get_donation(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          set_current_treasury_value(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, BigNum),
                n.transactionbuilder_set_current_treasury_value(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_current_treasury_value() {
            const _ = n.transactionbuilder_get_current_treasury_value(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          static new(_) {
            P(_, TransactionBuilderConfig);
            const t = n.transactionbuilder_new(_.__wbg_ptr);
            return TransactionBuilder.__wrap(t);
          }
          get_reference_inputs() {
            const _ = n.transactionbuilder_get_reference_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          get_explicit_input() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_get_explicit_input(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_implicit_input() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_get_implicit_input(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_total_input() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_get_total_input(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_total_output() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_get_total_output(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_explicit_output() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_get_explicit_output(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_deposit() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_get_deposit(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return BigNum.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_fee_if_set() {
            const _ = n.transactionbuilder_get_fee_if_set(this.__wbg_ptr);
            return 0 === _ ? void 0 : BigNum.__wrap(_);
          }
          add_change_if_needed(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Address),
                n.transactionbuilder_add_change_if_needed(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return 0 !== t;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_change_if_needed_with_datum(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Address),
                P(t, OutputDatum),
                n.transactionbuilder_add_change_if_needed_with_datum(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return 0 !== e;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          calc_script_data_hash(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Costmdls),
                n.transactionbuilder_calc_script_data_hash(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_script_data_hash(_) {
            (P(_, ScriptDataHash),
              n.transactionbuilder_set_script_data_hash(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          remove_script_data_hash() {
            n.transactionbuilder_remove_script_data_hash(this.__wbg_ptr);
          }
          add_required_signer(_) {
            (P(_, Ed25519KeyHash),
              n.transactionbuilder_add_required_signer(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          full_size() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_full_size(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return _ >>> 0;
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          output_sizes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_output_sizes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = T(_, t).slice();
              return (n.__wbindgen_free(_, 4 * t, 4), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          build() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_build(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return TransactionBody.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          build_tx() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_build_tx(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Transaction.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          build_tx_unsafe() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_build_tx_unsafe(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Transaction.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          min_fee() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilder_min_fee(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return BigNum.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.TransactionBuilder = TransactionBuilder;
        const Ye =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbuilderconfig_free(_ >>> 0),
              );
        class TransactionBuilderConfig {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBuilderConfig.prototype);
            return ((t.__wbg_ptr = _), Ye.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ye.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbuilderconfig_free(_);
          }
        }
        t.TransactionBuilderConfig = TransactionBuilderConfig;
        const Qe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionbuilderconfigbuilder_free(_ >>> 0),
              );
        class TransactionBuilderConfigBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionBuilderConfigBuilder.prototype);
            return ((t.__wbg_ptr = _), Qe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Qe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionbuilderconfigbuilder_free(_);
          }
          static new() {
            const _ = n.transactionbuilderconfigbuilder_new();
            return TransactionBuilderConfigBuilder.__wrap(_);
          }
          fee_algo(_) {
            P(_, LinearFee);
            const t = n.transactionbuilderconfigbuilder_fee_algo(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          coins_per_utxo_byte(_) {
            P(_, BigNum);
            const t = n.transactionbuilderconfigbuilder_coins_per_utxo_byte(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          ex_unit_prices(_) {
            P(_, ExUnitPrices);
            const t = n.transactionbuilderconfigbuilder_ex_unit_prices(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          pool_deposit(_) {
            P(_, BigNum);
            const t = n.transactionbuilderconfigbuilder_pool_deposit(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          key_deposit(_) {
            P(_, BigNum);
            const t = n.transactionbuilderconfigbuilder_key_deposit(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          max_value_size(_) {
            const t = n.transactionbuilderconfigbuilder_max_value_size(
              this.__wbg_ptr,
              _,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          max_tx_size(_) {
            const t = n.transactionbuilderconfigbuilder_max_tx_size(
              this.__wbg_ptr,
              _,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          ref_script_coins_per_byte(_) {
            P(_, UnitInterval);
            const t =
              n.transactionbuilderconfigbuilder_ref_script_coins_per_byte(
                this.__wbg_ptr,
                _.__wbg_ptr,
              );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          prefer_pure_change(_) {
            const t = n.transactionbuilderconfigbuilder_prefer_pure_change(
              this.__wbg_ptr,
              _,
            );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          deduplicate_explicit_ref_inputs_with_regular_inputs(_) {
            const t =
              n.transactionbuilderconfigbuilder_deduplicate_explicit_ref_inputs_with_regular_inputs(
                this.__wbg_ptr,
                _,
              );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          do_not_burn_extra_change(_) {
            const t =
              n.transactionbuilderconfigbuilder_do_not_burn_extra_change(
                this.__wbg_ptr,
                _,
              );
            return TransactionBuilderConfigBuilder.__wrap(t);
          }
          build() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionbuilderconfigbuilder_build(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return TransactionBuilderConfig.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.TransactionBuilderConfigBuilder = TransactionBuilderConfigBuilder;
        const Xe =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionhash_free(_ >>> 0),
              );
        class TransactionHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionHash.prototype);
            return ((t.__wbg_ptr = _), Xe.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Xe.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionhash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionhash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionhash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionhash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.TransactionHash = TransactionHash;
        const Ze =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactioninput_free(_ >>> 0),
              );
        class TransactionInput {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionInput.prototype);
            return ((t.__wbg_ptr = _), Ze.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ze.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactioninput_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninput_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactioninput_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionInput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninput_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactioninput_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionInput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninput_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninput_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactioninput_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionInput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          transaction_id() {
            const _ = n.governanceactionid_transaction_id(this.__wbg_ptr);
            return TransactionHash.__wrap(_);
          }
          index() {
            const _ = n.governanceactionid_index(this.__wbg_ptr);
            return _ >>> 0;
          }
          static new(_, t) {
            P(_, TransactionHash);
            const e = n.governanceactionid_new(_.__wbg_ptr, t);
            return TransactionInput.__wrap(e);
          }
        }
        t.TransactionInput = TransactionInput;
        const _r =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactioninputs_free(_ >>> 0),
              );
        class TransactionInputs {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionInputs.prototype);
            return ((t.__wbg_ptr = _), _r.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), _r.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactioninputs_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninputs_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactioninputs_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionInputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninputs_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactioninputs_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionInputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninputs_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactioninputs_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactioninputs_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionInputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.transactioninputs_new();
            return TransactionInputs.__wrap(_);
          }
          len() {
            const _ = n.governanceactionids_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactioninputs_get(this.__wbg_ptr, _);
            return TransactionInput.__wrap(t);
          }
          add(_) {
            P(_, TransactionInput);
            const t = n.transactioninputs_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          to_option() {
            const _ = n.transactioninputs_to_option(this.__wbg_ptr);
            return 0 === _ ? void 0 : TransactionInputs.__wrap(_);
          }
        }
        t.TransactionInputs = TransactionInputs;
        const tr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionmetadatum_free(_ >>> 0),
              );
        class TransactionMetadatum {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionMetadatum.prototype);
            return ((t.__wbg_ptr = _), tr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), tr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionmetadatum_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionmetadatum_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionmetadatum_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_map(_) {
            P(_, MetadataMap);
            const t = n.transactionmetadatum_new_map(_.__wbg_ptr);
            return TransactionMetadatum.__wrap(t);
          }
          static new_list(_) {
            P(_, MetadataList);
            const t = n.transactionmetadatum_new_list(_.__wbg_ptr);
            return TransactionMetadatum.__wrap(t);
          }
          static new_int(_) {
            P(_, Int);
            const t = n.transactionmetadatum_new_int(_.__wbg_ptr);
            return TransactionMetadatum.__wrap(t);
          }
          static new_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionmetadatum_new_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_text(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionmetadatum_new_text(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatum.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          kind() {
            const _ = n.plutusdata_kind(this.__wbg_ptr);
            return _;
          }
          as_map() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_as_map(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return MetadataMap.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_list() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_as_list(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return MetadataList.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_int() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_as_int(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Int.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_bytes() {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_as_bytes(a, this.__wbg_ptr);
              var _ = j()[a / 4 + 0],
                t = j()[a / 4 + 1],
                e = j()[a / 4 + 2],
                r = j()[a / 4 + 3];
              if (r) throw w(e);
              var i = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), i);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          as_text() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatum_as_text(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
        }
        t.TransactionMetadatum = TransactionMetadatum;
        const er =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionmetadatumlabels_free(_ >>> 0),
              );
        class TransactionMetadatumLabels {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionMetadatumLabels.prototype);
            return ((t.__wbg_ptr = _), er.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), er.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionmetadatumlabels_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatumlabels_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionmetadatumlabels_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatumLabels.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionmetadatumlabels_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionmetadatumlabels_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionMetadatumLabels.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.metadatalist_new();
            return TransactionMetadatumLabels.__wrap(_);
          }
          len() {
            const _ = n.languages_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionmetadatumlabels_get(this.__wbg_ptr, _);
            return BigNum.__wrap(t);
          }
          add(_) {
            (P(_, BigNum),
              n.transactionmetadatumlabels_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.TransactionMetadatumLabels = TransactionMetadatumLabels;
        const rr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionoutput_free(_ >>> 0),
              );
        class TransactionOutput {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionOutput.prototype);
            return ((t.__wbg_ptr = _), rr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), rr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionoutput_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutput_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionoutput_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionOutput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutput_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionoutput_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionOutput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutput_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutput_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionoutput_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionOutput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          address() {
            const _ = n.transactionoutput_address(this.__wbg_ptr);
            return Address.__wrap(_);
          }
          amount() {
            const _ = n.transactionoutput_amount(this.__wbg_ptr);
            return Value.__wrap(_);
          }
          data_hash() {
            const _ = n.transactionoutput_data_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : DataHash.__wrap(_);
          }
          plutus_data() {
            const _ = n.transactionoutput_plutus_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusData.__wrap(_);
          }
          script_ref() {
            const _ = n.transactionoutput_script_ref(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptRef.__wrap(_);
          }
          set_script_ref(_) {
            (P(_, ScriptRef),
              n.transactionoutput_set_script_ref(this.__wbg_ptr, _.__wbg_ptr));
          }
          set_plutus_data(_) {
            (P(_, PlutusData),
              n.transactionoutput_set_plutus_data(this.__wbg_ptr, _.__wbg_ptr));
          }
          set_data_hash(_) {
            (P(_, DataHash),
              n.transactionoutput_set_data_hash(this.__wbg_ptr, _.__wbg_ptr));
          }
          has_plutus_data() {
            const _ = n.transactionoutput_has_plutus_data(this.__wbg_ptr);
            return 0 !== _;
          }
          has_data_hash() {
            const _ = n.transactionoutput_has_data_hash(this.__wbg_ptr);
            return 0 !== _;
          }
          has_script_ref() {
            const _ = n.transactionoutput_has_script_ref(this.__wbg_ptr);
            return 0 !== _;
          }
          static new(_, t) {
            (P(_, Address), P(t, Value));
            const e = n.transactionoutput_new(_.__wbg_ptr, t.__wbg_ptr);
            return TransactionOutput.__wrap(e);
          }
          serialization_format() {
            const _ = n.transactionoutput_serialization_format(this.__wbg_ptr);
            return 2 === _ ? void 0 : _;
          }
        }
        t.TransactionOutput = TransactionOutput;
        const nr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionoutputamountbuilder_free(_ >>> 0),
              );
        class TransactionOutputAmountBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionOutputAmountBuilder.prototype);
            return ((t.__wbg_ptr = _), nr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), nr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionoutputamountbuilder_free(_);
          }
          with_value(_) {
            P(_, Value);
            const t = n.transactionoutputamountbuilder_with_value(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionOutputAmountBuilder.__wrap(t);
          }
          with_coin(_) {
            P(_, BigNum);
            const t = n.transactionoutputamountbuilder_with_coin(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionOutputAmountBuilder.__wrap(t);
          }
          with_coin_and_asset(_, t) {
            (P(_, BigNum), P(t, MultiAsset));
            const e = n.transactionoutputamountbuilder_with_coin_and_asset(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return TransactionOutputAmountBuilder.__wrap(e);
          }
          with_asset_and_min_required_coin_by_utxo_cost(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, MultiAsset),
                P(t, DataCost),
                n.transactionoutputamountbuilder_with_asset_and_min_required_coin_by_utxo_cost(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return TransactionOutputAmountBuilder.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          build() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutputamountbuilder_build(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return TransactionOutput.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.TransactionOutputAmountBuilder = TransactionOutputAmountBuilder;
        const ir =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionoutputbuilder_free(_ >>> 0),
              );
        class TransactionOutputBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionOutputBuilder.prototype);
            return ((t.__wbg_ptr = _), ir.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ir.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionoutputbuilder_free(_);
          }
          static new() {
            const _ = n.transactionoutputbuilder_new();
            return TransactionOutputBuilder.__wrap(_);
          }
          with_address(_) {
            P(_, Address);
            const t = n.transactionoutputbuilder_with_address(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionOutputBuilder.__wrap(t);
          }
          with_data_hash(_) {
            P(_, DataHash);
            const t = n.transactionoutputbuilder_with_data_hash(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionOutputBuilder.__wrap(t);
          }
          with_plutus_data(_) {
            P(_, PlutusData);
            const t = n.transactionoutputbuilder_with_plutus_data(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionOutputBuilder.__wrap(t);
          }
          with_script_ref(_) {
            P(_, ScriptRef);
            const t = n.transactionoutputbuilder_with_script_ref(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return TransactionOutputBuilder.__wrap(t);
          }
          next() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutputbuilder_next(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return TransactionOutputAmountBuilder.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.TransactionOutputBuilder = TransactionOutputBuilder;
        const ar =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionoutputs_free(_ >>> 0),
              );
        class TransactionOutputs {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionOutputs.prototype);
            return ((t.__wbg_ptr = _), ar.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ar.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionoutputs_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutputs_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionoutputs_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionOutputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutputs_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionoutputs_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionOutputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutputs_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionoutputs_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionoutputs_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionOutputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.transactionoutputs_new();
            return TransactionOutputs.__wrap(_);
          }
          len() {
            const _ = n.assetnames_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionoutputs_get(this.__wbg_ptr, _);
            return TransactionOutput.__wrap(t);
          }
          add(_) {
            (P(_, TransactionOutput),
              n.transactionoutputs_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.TransactionOutputs = TransactionOutputs;
        const or =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionunspentoutput_free(_ >>> 0),
              );
        class TransactionUnspentOutput {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionUnspentOutput.prototype);
            return ((t.__wbg_ptr = _), or.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), or.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionunspentoutput_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionunspentoutput_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionunspentoutput_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionUnspentOutput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionunspentoutput_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionunspentoutput_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionUnspentOutput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionunspentoutput_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionunspentoutput_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionunspentoutput_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionUnspentOutput.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t) {
            (P(_, TransactionInput), P(t, TransactionOutput));
            const e = n.transactionunspentoutput_new(_.__wbg_ptr, t.__wbg_ptr);
            return TransactionUnspentOutput.__wrap(e);
          }
          input() {
            const _ = n.transactionunspentoutput_input(this.__wbg_ptr);
            return TransactionInput.__wrap(_);
          }
          output() {
            const _ = n.transactionunspentoutput_output(this.__wbg_ptr);
            return TransactionOutput.__wrap(_);
          }
        }
        t.TransactionUnspentOutput = TransactionUnspentOutput;
        const sr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionunspentoutputs_free(_ >>> 0),
              );
        class TransactionUnspentOutputs {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionUnspentOutputs.prototype);
            return ((t.__wbg_ptr = _), sr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), sr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionunspentoutputs_free(_);
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionunspentoutputs_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionunspentoutputs_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionunspentoutputs_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionUnspentOutputs.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.transactionunspentoutputs_new();
            return TransactionUnspentOutputs.__wrap(_);
          }
          len() {
            const _ = n.transactionunspentoutputs_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionunspentoutputs_get(this.__wbg_ptr, _);
            return TransactionUnspentOutput.__wrap(t);
          }
          add(_) {
            (P(_, TransactionUnspentOutput),
              n.transactionunspentoutputs_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.TransactionUnspentOutputs = TransactionUnspentOutputs;
        const dr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionwitnessset_free(_ >>> 0),
              );
        class TransactionWitnessSet {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionWitnessSet.prototype);
            return ((t.__wbg_ptr = _), dr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), dr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionwitnessset_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnessset_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionwitnessset_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionWitnessSet.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnessset_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionwitnessset_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionWitnessSet.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnessset_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnessset_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionwitnessset_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionWitnessSet.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          set_vkeys(_) {
            (P(_, Vkeywitnesses),
              n.transactionwitnessset_set_vkeys(this.__wbg_ptr, _.__wbg_ptr));
          }
          vkeys() {
            const _ = n.transactionwitnessset_vkeys(this.__wbg_ptr);
            return 0 === _ ? void 0 : Vkeywitnesses.__wrap(_);
          }
          set_native_scripts(_) {
            (P(_, NativeScripts),
              n.transactionwitnessset_set_native_scripts(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          native_scripts() {
            const _ = n.auxiliarydata_native_scripts(this.__wbg_ptr);
            return 0 === _ ? void 0 : NativeScripts.__wrap(_);
          }
          set_bootstraps(_) {
            (P(_, BootstrapWitnesses),
              n.transactionwitnessset_set_bootstraps(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          bootstraps() {
            const _ = n.transactionwitnessset_bootstraps(this.__wbg_ptr);
            return 0 === _ ? void 0 : BootstrapWitnesses.__wrap(_);
          }
          set_plutus_scripts(_) {
            (P(_, PlutusScripts),
              n.transactionwitnessset_set_plutus_scripts(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          plutus_scripts() {
            const _ = n.transactionwitnessset_plutus_scripts(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusScripts.__wrap(_);
          }
          set_plutus_data(_) {
            (P(_, PlutusList),
              n.transactionwitnessset_set_plutus_data(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          plutus_data() {
            const _ = n.transactionwitnessset_plutus_data(this.__wbg_ptr);
            return 0 === _ ? void 0 : PlutusList.__wrap(_);
          }
          set_redeemers(_) {
            (P(_, Redeemers),
              n.transactionwitnessset_set_redeemers(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          redeemers() {
            const _ = n.transactionwitnessset_redeemers(this.__wbg_ptr);
            return 0 === _ ? void 0 : Redeemers.__wrap(_);
          }
          static new() {
            const _ = n.transactionwitnessset_new();
            return TransactionWitnessSet.__wrap(_);
          }
        }
        t.TransactionWitnessSet = TransactionWitnessSet;
        const cr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_transactionwitnesssets_free(_ >>> 0),
              );
        class TransactionWitnessSets {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TransactionWitnessSets.prototype);
            return ((t.__wbg_ptr = _), cr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), cr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_transactionwitnesssets_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnesssets_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.transactionwitnesssets_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionWitnessSets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnesssets_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionwitnesssets_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionWitnessSets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnesssets_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.transactionwitnesssets_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.transactionwitnesssets_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TransactionWitnessSets.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.transactionwitnesssets_new();
            return TransactionWitnessSets.__wrap(_);
          }
          len() {
            const _ = n.governanceactionids_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.transactionwitnesssets_get(this.__wbg_ptr, _);
            return TransactionWitnessSet.__wrap(t);
          }
          add(_) {
            (P(_, TransactionWitnessSet),
              n.transactionwitnesssets_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.TransactionWitnessSets = TransactionWitnessSets;
        const wr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_treasurywithdrawals_free(_ >>> 0),
              );
        class TreasuryWithdrawals {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TreasuryWithdrawals.prototype);
            return ((t.__wbg_ptr = _), wr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), wr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_treasurywithdrawals_free(_);
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.treasurywithdrawals_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.treasurywithdrawals_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.treasurywithdrawals_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TreasuryWithdrawals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.treasurywithdrawals_new();
            return TreasuryWithdrawals.__wrap(_);
          }
          get(_) {
            P(_, RewardAddress);
            const t = n.treasurywithdrawals_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : BigNum.__wrap(t);
          }
          insert(_, t) {
            (P(_, RewardAddress),
              P(t, BigNum),
              n.treasurywithdrawals_insert(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
              ));
          }
          keys() {
            const _ = n.treasurywithdrawals_keys(this.__wbg_ptr);
            return RewardAddresses.__wrap(_);
          }
          len() {
            const _ = n.costmodel_len(this.__wbg_ptr);
            return _ >>> 0;
          }
        }
        t.TreasuryWithdrawals = TreasuryWithdrawals;
        const pr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_treasurywithdrawalsaction_free(_ >>> 0),
              );
        class TreasuryWithdrawalsAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TreasuryWithdrawalsAction.prototype);
            return ((t.__wbg_ptr = _), pr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), pr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_treasurywithdrawalsaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.treasurywithdrawalsaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.treasurywithdrawalsaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TreasuryWithdrawalsAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.treasurywithdrawalsaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.treasurywithdrawalsaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TreasuryWithdrawalsAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.treasurywithdrawalsaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.treasurywithdrawalsaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.treasurywithdrawalsaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return TreasuryWithdrawalsAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          withdrawals() {
            const _ = n.treasurywithdrawalsaction_withdrawals(this.__wbg_ptr);
            return TreasuryWithdrawals.__wrap(_);
          }
          policy_hash() {
            const _ = n.treasurywithdrawalsaction_policy_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : ScriptHash.__wrap(_);
          }
          static new(_) {
            P(_, TreasuryWithdrawals);
            const t = n.treasurywithdrawalsaction_new(_.__wbg_ptr);
            return TreasuryWithdrawalsAction.__wrap(t);
          }
          static new_with_policy_hash(_, t) {
            (P(_, TreasuryWithdrawals), P(t, ScriptHash));
            const e = n.treasurywithdrawalsaction_new_with_policy_hash(
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return TreasuryWithdrawalsAction.__wrap(e);
          }
        }
        t.TreasuryWithdrawalsAction = TreasuryWithdrawalsAction;
        const gr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_txinputsbuilder_free(_ >>> 0),
              );
        class TxInputsBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(TxInputsBuilder.prototype);
            return ((t.__wbg_ptr = _), gr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), gr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_txinputsbuilder_free(_);
          }
          static new() {
            const _ = n.txinputsbuilder_new();
            return TxInputsBuilder.__wrap(_);
          }
          add_regular_utxo(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionUnspentOutput),
                n.txinputsbuilder_add_regular_utxo(
                  r,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                ));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_plutus_script_utxo(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionUnspentOutput),
                P(t, PlutusWitness),
                n.txinputsbuilder_add_plutus_script_utxo(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_native_script_utxo(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, TransactionUnspentOutput),
                P(t, NativeScriptSource),
                n.txinputsbuilder_add_native_script_utxo(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_key_input(_, t, e) {
            (P(_, Ed25519KeyHash),
              P(t, TransactionInput),
              P(e, Value),
              n.txinputsbuilder_add_key_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_native_script_input(_, t, e) {
            (P(_, NativeScriptSource),
              P(t, TransactionInput),
              P(e, Value),
              n.txinputsbuilder_add_native_script_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_plutus_script_input(_, t, e) {
            (P(_, PlutusWitness),
              P(t, TransactionInput),
              P(e, Value),
              n.txinputsbuilder_add_plutus_script_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_bootstrap_input(_, t, e) {
            (P(_, ByronAddress),
              P(t, TransactionInput),
              P(e, Value),
              n.txinputsbuilder_add_bootstrap_input(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          add_regular_input(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Address),
                P(t, TransactionInput),
                P(e, Value),
                n.txinputsbuilder_add_regular_input(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_ref_inputs() {
            const _ = n.txinputsbuilder_get_ref_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          get_native_input_scripts() {
            const _ = n.txinputsbuilder_get_native_input_scripts(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : NativeScripts.__wrap(_);
          }
          get_plutus_input_scripts() {
            const _ = n.txinputsbuilder_get_plutus_input_scripts(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : PlutusWitnesses.__wrap(_);
          }
          len() {
            const _ = n.txinputsbuilder_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          add_required_signer(_) {
            (P(_, Ed25519KeyHash),
              n.txinputsbuilder_add_required_signer(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          add_required_signers(_) {
            (P(_, Ed25519KeyHashes),
              n.txinputsbuilder_add_required_signers(
                this.__wbg_ptr,
                _.__wbg_ptr,
              ));
          }
          total_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.txinputsbuilder_total_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          inputs() {
            const _ = n.txinputsbuilder_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          inputs_option() {
            const _ = n.txinputsbuilder_inputs_option(this.__wbg_ptr);
            return 0 === _ ? void 0 : TransactionInputs.__wrap(_);
          }
        }
        t.TxInputsBuilder = TxInputsBuilder;
        const br =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_url_free(_ >>> 0));
        class URL {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(URL.prototype);
            return ((t.__wbg_ptr = _), br.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), br.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_url_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.url_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.url_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return URL.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.url_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.url_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return URL.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.url_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return URL.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.url_new(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return URL.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          url() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.dnsrecordaoraaaa_record(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
        }
        t.URL = URL;
        const lr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_unitinterval_free(_ >>> 0),
              );
        class UnitInterval {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(UnitInterval.prototype);
            return ((t.__wbg_ptr = _), lr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), lr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_unitinterval_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.unitinterval_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.unitinterval_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return UnitInterval.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.unitinterval_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.unitinterval_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return UnitInterval.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.unitinterval_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.unitinterval_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.unitinterval_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return UnitInterval.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          numerator() {
            const _ = n.datacost_coins_per_byte(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          denominator() {
            const _ = n.unitinterval_denominator(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t) {
            (P(_, BigNum), P(t, BigNum));
            const e = n.unitinterval_new(_.__wbg_ptr, t.__wbg_ptr);
            return UnitInterval.__wrap(e);
          }
        }
        t.UnitInterval = UnitInterval;
        const ur =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_update_free(_ >>> 0));
        class Update {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Update.prototype);
            return ((t.__wbg_ptr = _), ur.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), ur.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_update_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.update_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.update_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Update.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.update_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.update_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Update.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.update_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.update_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.update_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Update.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          proposed_protocol_parameter_updates() {
            const _ = n.update_proposed_protocol_parameter_updates(
              this.__wbg_ptr,
            );
            return ProposedProtocolParameterUpdates.__wrap(_);
          }
          epoch() {
            const _ = n.update_epoch(this.__wbg_ptr);
            return _ >>> 0;
          }
          static new(_, t) {
            P(_, ProposedProtocolParameterUpdates);
            const e = n.update_new(_.__wbg_ptr, t);
            return Update.__wrap(e);
          }
        }
        t.Update = Update;
        const hr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_updatecommitteeaction_free(_ >>> 0),
              );
        class UpdateCommitteeAction {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(UpdateCommitteeAction.prototype);
            return ((t.__wbg_ptr = _), hr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), hr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_updatecommitteeaction_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.updatecommitteeaction_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.updatecommitteeaction_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return UpdateCommitteeAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.updatecommitteeaction_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.updatecommitteeaction_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return UpdateCommitteeAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.updatecommitteeaction_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.updatecommitteeaction_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.updatecommitteeaction_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return UpdateCommitteeAction.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          gov_action_id() {
            const _ = n.updatecommitteeaction_gov_action_id(this.__wbg_ptr);
            return 0 === _ ? void 0 : GovernanceActionId.__wrap(_);
          }
          committee() {
            const _ = n.updatecommitteeaction_committee(this.__wbg_ptr);
            return Committee.__wrap(_);
          }
          members_to_remove() {
            const _ = n.updatecommitteeaction_members_to_remove(this.__wbg_ptr);
            return Credentials.__wrap(_);
          }
          static new(_, t) {
            (P(_, Committee), P(t, Credentials));
            const e = n.updatecommitteeaction_new(_.__wbg_ptr, t.__wbg_ptr);
            return UpdateCommitteeAction.__wrap(e);
          }
          static new_with_action_id(_, t, e) {
            (P(_, GovernanceActionId), P(t, Committee), P(e, Credentials));
            const r = n.updatecommitteeaction_new_with_action_id(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return UpdateCommitteeAction.__wrap(r);
          }
        }
        t.UpdateCommitteeAction = UpdateCommitteeAction;
        const yr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_vrfcert_free(_ >>> 0));
        class VRFCert {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VRFCert.prototype);
            return ((t.__wbg_ptr = _), yr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), yr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vrfcert_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vrfcert_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.vrfcert_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.vrfcert_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vrfcert_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.vrfcert_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vrfcert_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vrfcert_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFCert.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          output() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vrfcert_output(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          proof() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vrfcert_proof(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16),
                o = S(_, n.__wbindgen_malloc),
                s = h,
                d = S(t, n.__wbindgen_malloc),
                c = h;
              n.vrfcert_new(a, o, s, d, c);
              var e = j()[a / 4 + 0],
                r = j()[a / 4 + 1],
                i = j()[a / 4 + 2];
              if (i) throw w(r);
              return VRFCert.__wrap(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.VRFCert = VRFCert;
        const fr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_vrfkeyhash_free(_ >>> 0));
        class VRFKeyHash {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VRFKeyHash.prototype);
            return ((t.__wbg_ptr = _), fr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), fr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vrfkeyhash_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.vrfkeyhash_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFKeyHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vrfkeyhash_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFKeyHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vrfkeyhash_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFKeyHash.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.VRFKeyHash = VRFKeyHash;
        const kr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_vrfvkey_free(_ >>> 0));
        class VRFVKey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VRFVKey.prototype);
            return ((t.__wbg_ptr = _), kr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), kr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vrfvkey_free(_);
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.vrfvkey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFVKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_bech32(_) {
            let t, e;
            try {
              const c = n.__wbindgen_add_to_stack_pointer(-16),
                p = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                g = h;
              n.anchordatahash_to_bech32(c, this.__wbg_ptr, p, g);
              var r = j()[c / 4 + 0],
                i = j()[c / 4 + 1],
                a = j()[c / 4 + 2],
                o = j()[c / 4 + 3],
                s = r,
                d = i;
              if (o) throw ((s = 0), (d = 0), w(a));
              return ((t = s), (e = d), u(s, d));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(t, e, 1));
            }
          }
          static from_bech32(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vrfvkey_from_bech32(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFVKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.anchordatahash_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vrfvkey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VRFVKey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
        }
        t.VRFVKey = VRFVKey;
        const mr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_value_free(_ >>> 0));
        class Value {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Value.prototype);
            return ((t.__wbg_ptr = _), mr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), mr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_value_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.value_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.value_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Value.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.value_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.value_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Value.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.value_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.value_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.value_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Value.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            P(_, BigNum);
            const t = n.value_new(_.__wbg_ptr);
            return Value.__wrap(t);
          }
          static new_from_assets(_) {
            P(_, MultiAsset);
            const t = n.value_new_from_assets(_.__wbg_ptr);
            return Value.__wrap(t);
          }
          static new_with_assets(_, t) {
            (P(_, BigNum), P(t, MultiAsset));
            const e = n.value_new_with_assets(_.__wbg_ptr, t.__wbg_ptr);
            return Value.__wrap(e);
          }
          static zero() {
            const _ = n.value_zero();
            return Value.__wrap(_);
          }
          is_zero() {
            const _ = n.value_is_zero(this.__wbg_ptr);
            return 0 !== _;
          }
          coin() {
            const _ = n.value_coin(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          set_coin(_) {
            (P(_, BigNum), n.value_set_coin(this.__wbg_ptr, _.__wbg_ptr));
          }
          multiasset() {
            const _ = n.value_multiasset(this.__wbg_ptr);
            return 0 === _ ? void 0 : MultiAsset.__wrap(_);
          }
          set_multiasset(_) {
            (P(_, MultiAsset),
              n.value_set_multiasset(this.__wbg_ptr, _.__wbg_ptr));
          }
          checked_add(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Value),
                n.value_checked_add(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Value.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          checked_sub(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Value),
                n.value_checked_sub(i, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Value.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          clamped_sub(_) {
            P(_, Value);
            const t = n.value_clamped_sub(this.__wbg_ptr, _.__wbg_ptr);
            return Value.__wrap(t);
          }
          compare(_) {
            P(_, Value);
            const t = n.value_compare(this.__wbg_ptr, _.__wbg_ptr);
            return 16777215 === t ? void 0 : t;
          }
        }
        t.Value = Value;
        const vr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_versionedblock_free(_ >>> 0),
              );
        class VersionedBlock {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VersionedBlock.prototype);
            return ((t.__wbg_ptr = _), vr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), vr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_versionedblock_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.versionedblock_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.versionedblock_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VersionedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.versionedblock_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.versionedblock_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VersionedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.versionedblock_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.versionedblock_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.versionedblock_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VersionedBlock.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t) {
            P(_, Block);
            var e = _.__destroy_into_raw();
            const r = n.versionedblock_new(e, t);
            return VersionedBlock.__wrap(r);
          }
          block() {
            const _ = n.versionedblock_block(this.__wbg_ptr);
            return Block.__wrap(_);
          }
          era() {
            const _ = n.versionedblock_era(this.__wbg_ptr);
            return _;
          }
        }
        t.VersionedBlock = VersionedBlock;
        const xr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_vkey_free(_ >>> 0));
        class Vkey {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Vkey.prototype);
            return ((t.__wbg_ptr = _), xr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), xr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vkey_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkey_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.vkey_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkey_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vkey_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkey_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkey_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vkey_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkey.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            P(_, PublicKey);
            const t = n.vkey_new(_.__wbg_ptr);
            return Vkey.__wrap(t);
          }
          public_key() {
            const _ = n.vkey_public_key(this.__wbg_ptr);
            return PublicKey.__wrap(_);
          }
        }
        t.Vkey = Vkey;
        const jr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_vkeys_free(_ >>> 0));
        class Vkeys {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Vkeys.prototype);
            return ((t.__wbg_ptr = _), jr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), jr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vkeys_free(_);
          }
          static new() {
            const _ = n.vkeys_new();
            return Vkeys.__wrap(_);
          }
          len() {
            const _ = n.costmdls_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.vkeys_get(this.__wbg_ptr, _);
            return Vkey.__wrap(t);
          }
          add(_) {
            (P(_, Vkey), n.vkeys_add(this.__wbg_ptr, _.__wbg_ptr));
          }
        }
        t.Vkeys = Vkeys;
        const Rr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_vkeywitness_free(_ >>> 0),
              );
        class Vkeywitness {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Vkeywitness.prototype);
            return ((t.__wbg_ptr = _), Rr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Rr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vkeywitness_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitness_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.vkeywitness_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkeywitness.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitness_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vkeywitness_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkeywitness.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitness_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitness_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vkeywitness_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkeywitness.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_, t) {
            (P(_, Vkey), P(t, Ed25519Signature));
            const e = n.vkeywitness_new(_.__wbg_ptr, t.__wbg_ptr);
            return Vkeywitness.__wrap(e);
          }
          vkey() {
            const _ = n.vkeywitness_vkey(this.__wbg_ptr);
            return Vkey.__wrap(_);
          }
          signature() {
            const _ = n.operationalcert_sigma(this.__wbg_ptr);
            return Ed25519Signature.__wrap(_);
          }
        }
        t.Vkeywitness = Vkeywitness;
        const Ar =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_vkeywitnesses_free(_ >>> 0),
              );
        class Vkeywitnesses {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Vkeywitnesses.prototype);
            return ((t.__wbg_ptr = _), Ar.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Ar.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_vkeywitnesses_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitnesses_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.vkeywitnesses_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkeywitnesses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitnesses_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vkeywitnesses_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkeywitnesses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitnesses_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.vkeywitnesses_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.vkeywitnesses_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Vkeywitnesses.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.bootstrapwitnesses_new();
            return Vkeywitnesses.__wrap(_);
          }
          len() {
            const _ = n.bootstrapwitnesses_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.vkeywitnesses_get(this.__wbg_ptr, _);
            return Vkeywitness.__wrap(t);
          }
          add(_) {
            P(_, Vkeywitness);
            const t = n.vkeywitnesses_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
        }
        t.Vkeywitnesses = Vkeywitnesses;
        const Sr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votedelegation_free(_ >>> 0),
              );
        class VoteDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VoteDelegation.prototype);
            return ((t.__wbg_ptr = _), Sr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Sr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votedelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votedelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.votedelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VoteDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.votedelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votedelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VoteDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.votedelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votedelegation_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votedelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VoteDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.stakeandvotedelegation_stake_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          drep() {
            const _ = n.stakeandvotedelegation_drep(this.__wbg_ptr);
            return DRep.__wrap(_);
          }
          static new(_, t) {
            (P(_, Credential), P(t, DRep));
            const e = n.votedelegation_new(_.__wbg_ptr, t.__wbg_ptr);
            return VoteDelegation.__wrap(e);
          }
          has_script_credentials() {
            const _ = n.stakeandvotedelegation_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.VoteDelegation = VoteDelegation;
        const Pr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_voteregistrationanddelegation_free(_ >>> 0),
              );
        class VoteRegistrationAndDelegation {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VoteRegistrationAndDelegation.prototype);
            return ((t.__wbg_ptr = _), Pr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Pr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_voteregistrationanddelegation_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.voteregistrationanddelegation_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.voteregistrationanddelegation_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VoteRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.voteregistrationanddelegation_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.voteregistrationanddelegation_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VoteRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.voteregistrationanddelegation_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.voteregistrationanddelegation_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.voteregistrationanddelegation_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VoteRegistrationAndDelegation.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          stake_credential() {
            const _ = n.drepderegistration_voting_credential(this.__wbg_ptr);
            return Credential.__wrap(_);
          }
          drep() {
            const _ = n.voteregistrationanddelegation_drep(this.__wbg_ptr);
            return DRep.__wrap(_);
          }
          coin() {
            const _ = n.drepderegistration_coin(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t, e) {
            (P(_, Credential), P(t, DRep), P(e, BigNum));
            const r = n.voteregistrationanddelegation_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
            );
            return VoteRegistrationAndDelegation.__wrap(r);
          }
          has_script_credentials() {
            const _ = n.drepderegistration_has_script_credentials(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
        }
        t.VoteRegistrationAndDelegation = VoteRegistrationAndDelegation;
        const Br =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_voter_free(_ >>> 0));
        class Voter {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Voter.prototype);
            return ((t.__wbg_ptr = _), Br.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Br.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_voter_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.voter_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.voter_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Voter.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.voter_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.voter_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Voter.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.voter_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.voter_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.voter_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Voter.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new_constitutional_committee_hot_credential(_) {
            P(_, Credential);
            const t = n.voter_new_constitutional_committee_hot_credential(
              _.__wbg_ptr,
            );
            return Voter.__wrap(t);
          }
          static new_drep_credential(_) {
            P(_, Credential);
            const t = n.voter_new_drep_credential(_.__wbg_ptr);
            return Voter.__wrap(t);
          }
          static new_stake_pool_key_hash(_) {
            P(_, Ed25519KeyHash);
            const t = n.voter_new_stake_pool_key_hash(_.__wbg_ptr);
            return Voter.__wrap(t);
          }
          kind() {
            const _ = n.voter_kind(this.__wbg_ptr);
            return _;
          }
          to_constitutional_committee_hot_credential() {
            const _ = n.voter_to_constitutional_committee_hot_credential(
              this.__wbg_ptr,
            );
            return 0 === _ ? void 0 : Credential.__wrap(_);
          }
          to_drep_credential() {
            const _ = n.voter_to_drep_credential(this.__wbg_ptr);
            return 0 === _ ? void 0 : Credential.__wrap(_);
          }
          to_stake_pool_key_hash() {
            const _ = n.voter_to_stake_pool_key_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ed25519KeyHash.__wrap(_);
          }
          has_script_credentials() {
            const _ = n.voter_has_script_credentials(this.__wbg_ptr);
            return 0 !== _;
          }
          to_key_hash() {
            const _ = n.voter_to_key_hash(this.__wbg_ptr);
            return 0 === _ ? void 0 : Ed25519KeyHash.__wrap(_);
          }
        }
        t.Voter = Voter;
        const Fr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) => n.__wbg_voters_free(_ >>> 0));
        class Voters {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Voters.prototype);
            return ((t.__wbg_ptr = _), Fr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Fr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_voters_free(_);
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.voters_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.voters_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.voters_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Voters.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.voters_new();
            return Voters.__wrap(_);
          }
          add(_) {
            (P(_, Voter), n.voters_add(this.__wbg_ptr, _.__wbg_ptr));
          }
          get(_) {
            const t = n.voters_get(this.__wbg_ptr, _);
            return 0 === t ? void 0 : Voter.__wrap(t);
          }
          len() {
            const _ = n.relays_len(this.__wbg_ptr);
            return _ >>> 0;
          }
        }
        t.Voters = Voters;
        const Tr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votingbuilder_free(_ >>> 0),
              );
        class VotingBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VotingBuilder.prototype);
            return ((t.__wbg_ptr = _), Tr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Tr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votingbuilder_free(_);
          }
          static new() {
            const _ = n.votingbuilder_new();
            return VotingBuilder.__wrap(_);
          }
          add(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Voter),
                P(t, GovernanceActionId),
                P(e, VotingProcedure),
                n.votingbuilder_add(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_plutus_witness(_, t, e, r) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Voter),
                P(t, GovernanceActionId),
                P(e, VotingProcedure),
                P(r, PlutusWitness),
                n.votingbuilder_add_with_plutus_witness(
                  o,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                  r.__wbg_ptr,
                ));
              var i = j()[o / 4 + 0],
                a = j()[o / 4 + 1];
              if (a) throw w(i);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_native_script(_, t, e, r) {
            try {
              const o = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, Voter),
                P(t, GovernanceActionId),
                P(e, VotingProcedure),
                P(r, NativeScriptSource),
                n.votingbuilder_add_with_native_script(
                  o,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                  r.__wbg_ptr,
                ));
              var i = j()[o / 4 + 0],
                a = j()[o / 4 + 1];
              if (a) throw w(i);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_plutus_witnesses() {
            const _ = n.votingbuilder_get_plutus_witnesses(this.__wbg_ptr);
            return PlutusWitnesses.__wrap(_);
          }
          get_ref_inputs() {
            const _ = n.votingbuilder_get_ref_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          get_native_scripts() {
            const _ = n.votingbuilder_get_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          has_plutus_scripts() {
            const _ = n.votingbuilder_has_plutus_scripts(this.__wbg_ptr);
            return 0 !== _;
          }
          build() {
            const _ = n.votingbuilder_build(this.__wbg_ptr);
            return VotingProcedures.__wrap(_);
          }
        }
        t.VotingBuilder = VotingBuilder;
        const zr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votingprocedure_free(_ >>> 0),
              );
        class VotingProcedure {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VotingProcedure.prototype);
            return ((t.__wbg_ptr = _), zr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), zr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votingprocedure_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedure_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.votingprocedure_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProcedure.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedure_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingprocedure_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProcedure.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedure_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedure_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingprocedure_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProcedure.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new(_) {
            const t = n.votingprocedure_new(_);
            return VotingProcedure.__wrap(t);
          }
          static new_with_anchor(_, t) {
            P(t, Anchor);
            const e = n.votingprocedure_new_with_anchor(_, t.__wbg_ptr);
            return VotingProcedure.__wrap(e);
          }
          vote_kind() {
            const _ = n.votingprocedure_vote_kind(this.__wbg_ptr);
            return _;
          }
          anchor() {
            const _ = n.committeecoldresign_anchor(this.__wbg_ptr);
            return 0 === _ ? void 0 : Anchor.__wrap(_);
          }
        }
        t.VotingProcedure = VotingProcedure;
        const Cr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votingprocedures_free(_ >>> 0),
              );
        class VotingProcedures {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VotingProcedures.prototype);
            return ((t.__wbg_ptr = _), Cr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Cr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votingprocedures_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedures_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.votingprocedures_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProcedures.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedures_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingprocedures_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProcedures.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedures_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingprocedures_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingprocedures_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProcedures.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.costmdls_new();
            return VotingProcedures.__wrap(_);
          }
          insert(_, t, e) {
            (P(_, Voter),
              P(t, GovernanceActionId),
              P(e, VotingProcedure),
              n.votingprocedures_insert(
                this.__wbg_ptr,
                _.__wbg_ptr,
                t.__wbg_ptr,
                e.__wbg_ptr,
              ));
          }
          get(_, t) {
            (P(_, Voter), P(t, GovernanceActionId));
            const e = n.votingprocedures_get(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : VotingProcedure.__wrap(e);
          }
          get_voters() {
            const _ = n.votingprocedures_get_voters(this.__wbg_ptr);
            return Voters.__wrap(_);
          }
          get_governance_action_ids_by_voter(_) {
            P(_, Voter);
            const t = n.votingprocedures_get_governance_action_ids_by_voter(
              this.__wbg_ptr,
              _.__wbg_ptr,
            );
            return GovernanceActionIds.__wrap(t);
          }
        }
        t.VotingProcedures = VotingProcedures;
        const Nr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votingproposal_free(_ >>> 0),
              );
        class VotingProposal {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VotingProposal.prototype);
            return ((t.__wbg_ptr = _), Nr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Nr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votingproposal_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposal_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.votingproposal_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProposal.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposal_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingproposal_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProposal.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposal_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposal_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingproposal_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProposal.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          governance_action() {
            const _ = n.votingproposal_governance_action(this.__wbg_ptr);
            return GovernanceAction.__wrap(_);
          }
          anchor() {
            const _ = n.votingproposal_anchor(this.__wbg_ptr);
            return Anchor.__wrap(_);
          }
          reward_account() {
            const _ = n.votingproposal_reward_account(this.__wbg_ptr);
            return RewardAddress.__wrap(_);
          }
          deposit() {
            const _ = n.votingproposal_deposit(this.__wbg_ptr);
            return BigNum.__wrap(_);
          }
          static new(_, t, e, r) {
            (P(_, GovernanceAction),
              P(t, Anchor),
              P(e, RewardAddress),
              P(r, BigNum));
            const i = n.votingproposal_new(
              _.__wbg_ptr,
              t.__wbg_ptr,
              e.__wbg_ptr,
              r.__wbg_ptr,
            );
            return VotingProposal.__wrap(i);
          }
        }
        t.VotingProposal = VotingProposal;
        const Dr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votingproposalbuilder_free(_ >>> 0),
              );
        class VotingProposalBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VotingProposalBuilder.prototype);
            return ((t.__wbg_ptr = _), Dr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Dr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votingproposalbuilder_free(_);
          }
          static new() {
            const _ = n.mintbuilder_new();
            return VotingProposalBuilder.__wrap(_);
          }
          add(_) {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, VotingProposal),
                n.votingproposalbuilder_add(r, this.__wbg_ptr, _.__wbg_ptr));
              var t = j()[r / 4 + 0],
                e = j()[r / 4 + 1];
              if (e) throw w(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_plutus_witness(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, VotingProposal),
                P(t, PlutusWitness),
                n.votingproposalbuilder_add_with_plutus_witness(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_plutus_witnesses() {
            const _ = n.votingproposalbuilder_get_plutus_witnesses(
              this.__wbg_ptr,
            );
            return PlutusWitnesses.__wrap(_);
          }
          get_ref_inputs() {
            const _ = n.votingproposalbuilder_get_ref_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          has_plutus_scripts() {
            const _ = n.votingproposalbuilder_has_plutus_scripts(
              this.__wbg_ptr,
            );
            return 0 !== _;
          }
          build() {
            const _ = n.votingproposalbuilder_build(this.__wbg_ptr);
            return VotingProposals.__wrap(_);
          }
        }
        t.VotingProposalBuilder = VotingProposalBuilder;
        const Vr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_votingproposals_free(_ >>> 0),
              );
        class VotingProposals {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(VotingProposals.prototype);
            return ((t.__wbg_ptr = _), Vr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Vr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_votingproposals_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposals_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.votingproposals_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProposals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposals_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingproposals_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProposals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposals_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.votingproposals_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.votingproposals_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return VotingProposals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.credentials_new();
            return VotingProposals.__wrap(_);
          }
          len() {
            const _ = n.credentials_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          get(_) {
            const t = n.votingproposals_get(this.__wbg_ptr, _);
            return VotingProposal.__wrap(t);
          }
          add(_) {
            P(_, VotingProposal);
            const t = n.votingproposals_add(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          contains(_) {
            P(_, VotingProposal);
            const t = n.votingproposals_contains(this.__wbg_ptr, _.__wbg_ptr);
            return 0 !== t;
          }
          to_option() {
            const _ = n.votingproposals_to_option(this.__wbg_ptr);
            return 0 === _ ? void 0 : VotingProposals.__wrap(_);
          }
        }
        t.VotingProposals = VotingProposals;
        const Or =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_withdrawals_free(_ >>> 0),
              );
        class Withdrawals {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(Withdrawals.prototype);
            return ((t.__wbg_ptr = _), Or.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Or.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_withdrawals_free(_);
          }
          to_bytes() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.withdrawals_to_bytes(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = A(_, t).slice();
              return (n.__wbindgen_free(_, 1 * t, 1), e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_bytes(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = S(_, n.__wbindgen_malloc),
                o = h;
              n.withdrawals_from_bytes(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Withdrawals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_hex() {
            let _, t;
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              n.withdrawals_to_hex(i, this.__wbg_ptr);
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              return ((_ = e), (t = r), u(e, r));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          static from_hex(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.withdrawals_from_hex(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Withdrawals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          to_json() {
            let _, t;
            try {
              const d = n.__wbindgen_add_to_stack_pointer(-16);
              n.withdrawals_to_json(d, this.__wbg_ptr);
              var e = j()[d / 4 + 0],
                r = j()[d / 4 + 1],
                i = j()[d / 4 + 2],
                a = j()[d / 4 + 3],
                o = e,
                s = r;
              if (a) throw ((o = 0), (s = 0), w(i));
              return ((_ = o), (t = s), u(o, s));
            } finally {
              (n.__wbindgen_add_to_stack_pointer(16),
                n.__wbindgen_free(_, t, 1));
            }
          }
          to_js_value() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.withdrawals_to_js_value(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return w(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static from_json(_) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16),
                a = m(_, n.__wbindgen_malloc, n.__wbindgen_realloc),
                o = h;
              n.withdrawals_from_json(i, a, o);
              var t = j()[i / 4 + 0],
                e = j()[i / 4 + 1],
                r = j()[i / 4 + 2];
              if (r) throw w(e);
              return Withdrawals.__wrap(t);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          static new() {
            const _ = n.auxiliarydataset_new();
            return Withdrawals.__wrap(_);
          }
          len() {
            const _ = n.auxiliarydataset_len(this.__wbg_ptr);
            return _ >>> 0;
          }
          insert(_, t) {
            (P(_, RewardAddress), P(t, BigNum));
            const e = n.withdrawals_insert(
              this.__wbg_ptr,
              _.__wbg_ptr,
              t.__wbg_ptr,
            );
            return 0 === e ? void 0 : BigNum.__wrap(e);
          }
          get(_) {
            P(_, RewardAddress);
            const t = n.withdrawals_get(this.__wbg_ptr, _.__wbg_ptr);
            return 0 === t ? void 0 : BigNum.__wrap(t);
          }
          keys() {
            const _ = n.withdrawals_keys(this.__wbg_ptr);
            return RewardAddresses.__wrap(_);
          }
        }
        t.Withdrawals = Withdrawals;
        const Hr =
          "undefined" === typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((_) =>
                n.__wbg_withdrawalsbuilder_free(_ >>> 0),
              );
        class WithdrawalsBuilder {
          static __wrap(_) {
            _ >>>= 0;
            const t = Object.create(WithdrawalsBuilder.prototype);
            return ((t.__wbg_ptr = _), Hr.register(t, t.__wbg_ptr, t), t);
          }
          __destroy_into_raw() {
            const _ = this.__wbg_ptr;
            return ((this.__wbg_ptr = 0), Hr.unregister(this), _);
          }
          free() {
            const _ = this.__destroy_into_raw();
            n.__wbg_withdrawalsbuilder_free(_);
          }
          static new() {
            const _ = n.withdrawalsbuilder_new();
            return WithdrawalsBuilder.__wrap(_);
          }
          add(_, t) {
            try {
              const i = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, RewardAddress),
                P(t, BigNum),
                n.withdrawalsbuilder_add(
                  i,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                ));
              var e = j()[i / 4 + 0],
                r = j()[i / 4 + 1];
              if (r) throw w(e);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_plutus_witness(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, RewardAddress),
                P(t, BigNum),
                P(e, PlutusWitness),
                n.withdrawalsbuilder_add_with_plutus_witness(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          add_with_native_script(_, t, e) {
            try {
              const a = n.__wbindgen_add_to_stack_pointer(-16);
              (P(_, RewardAddress),
                P(t, BigNum),
                P(e, NativeScriptSource),
                n.withdrawalsbuilder_add_with_native_script(
                  a,
                  this.__wbg_ptr,
                  _.__wbg_ptr,
                  t.__wbg_ptr,
                  e.__wbg_ptr,
                ));
              var r = j()[a / 4 + 0],
                i = j()[a / 4 + 1];
              if (i) throw w(r);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          get_plutus_witnesses() {
            const _ = n.withdrawalsbuilder_get_plutus_witnesses(this.__wbg_ptr);
            return PlutusWitnesses.__wrap(_);
          }
          get_ref_inputs() {
            const _ = n.withdrawalsbuilder_get_ref_inputs(this.__wbg_ptr);
            return TransactionInputs.__wrap(_);
          }
          get_native_scripts() {
            const _ = n.withdrawalsbuilder_get_native_scripts(this.__wbg_ptr);
            return NativeScripts.__wrap(_);
          }
          get_total_withdrawals() {
            try {
              const r = n.__wbindgen_add_to_stack_pointer(-16);
              n.withdrawalsbuilder_get_total_withdrawals(r, this.__wbg_ptr);
              var _ = j()[r / 4 + 0],
                t = j()[r / 4 + 1],
                e = j()[r / 4 + 2];
              if (e) throw w(t);
              return Value.__wrap(_);
            } finally {
              n.__wbindgen_add_to_stack_pointer(16);
            }
          }
          has_plutus_scripts() {
            const _ = n.withdrawalsbuilder_has_plutus_scripts(this.__wbg_ptr);
            return 0 !== _;
          }
          build() {
            const _ = n.withdrawalsbuilder_build(this.__wbg_ptr);
            return Withdrawals.__wrap(_);
          }
        }
        function Ir(_) {
          const t = _;
          return s(t);
        }
        function Mr(_) {
          w(_);
        }
        function Kr(_, t) {
          const e = u(_, t);
          return s(e);
        }
        function Ur(_, t) {
          const e = new Error(u(_, t));
          return s(e);
        }
        function Er(_, t) {
          const e = d(t),
            r = "string" === typeof e ? e : void 0;
          var i = v(r) ? 0 : m(r, n.__wbindgen_malloc, n.__wbindgen_realloc),
            a = h;
          ((j()[_ / 4 + 1] = a), (j()[_ / 4 + 0] = i));
        }
        function Wr(_) {
          const t = d(_);
          return s(t);
        }
        function Lr(_) {
          const t = d(_),
            e = "object" === typeof t && null !== t;
          return e;
        }
        function Gr(_, t) {
          const e = String(d(t)),
            r = m(e, n.__wbindgen_malloc, n.__wbindgen_realloc),
            i = h;
          ((j()[_ / 4 + 1] = i), (j()[_ / 4 + 0] = r));
        }
        function qr(_, t, e) {
          d(_)[w(t)] = w(e);
        }
        function $r(_) {
          const t = d(_).crypto;
          return s(t);
        }
        function Jr(_) {
          const t = d(_).process;
          return s(t);
        }
        function Yr(_) {
          const t = d(_).versions;
          return s(t);
        }
        function Qr(_) {
          const t = d(_).node;
          return s(t);
        }
        function Xr(_) {
          const t = "string" === typeof d(_);
          return t;
        }
        function Zr() {
          return r_(function () {
            const t = _.require;
            return s(t);
          }, arguments);
        }
        function _n(_) {
          const t = d(_).msCrypto;
          return s(t);
        }
        function tn() {
          return r_(function (_, t) {
            d(_).getRandomValues(d(t));
          }, arguments);
        }
        function en() {
          return r_(function (_, t) {
            d(_).randomFillSync(w(t));
          }, arguments);
        }
        function rn() {
          const _ = new Array();
          return s(_);
        }
        function nn(_) {
          const t = "function" === typeof d(_);
          return t;
        }
        function an(_, t) {
          const e = new Function(u(_, t));
          return s(e);
        }
        function on() {
          const _ = new Map();
          return s(_);
        }
        function sn() {
          return r_(function (_, t) {
            const e = d(_).call(d(t));
            return s(e);
          }, arguments);
        }
        function dn() {
          const _ = new Object();
          return s(_);
        }
        function cn() {
          return r_(function () {
            const _ = self.self;
            return s(_);
          }, arguments);
        }
        function wn() {
          return r_(function () {
            const _ = window.window;
            return s(_);
          }, arguments);
        }
        function pn() {
          return r_(function () {
            const _ = globalThis.globalThis;
            return s(_);
          }, arguments);
        }
        function gn() {
          return r_(function () {
            const _ = r.global;
            return s(_);
          }, arguments);
        }
        function bn(_) {
          const t = void 0 === d(_);
          return t;
        }
        function ln(_, t, e) {
          d(_)[t >>> 0] = w(e);
        }
        function un() {
          return r_(function (_, t, e) {
            const r = d(_).call(d(t), d(e));
            return s(r);
          }, arguments);
        }
        function hn(_, t, e) {
          const r = d(_).set(d(t), d(e));
          return s(r);
        }
        function yn(_) {
          const t = d(_).buffer;
          return s(t);
        }
        function fn(_, t, e) {
          const r = new Uint8Array(d(_), t >>> 0, e >>> 0);
          return s(r);
        }
        function kn(_) {
          const t = new Uint8Array(d(_));
          return s(t);
        }
        function mn(_, t, e) {
          d(_).set(d(t), e >>> 0);
        }
        function vn(_) {
          const t = new Uint8Array(_ >>> 0);
          return s(t);
        }
        function xn(_, t, e) {
          const r = d(_).subarray(t >>> 0, e >>> 0);
          return s(r);
        }
        function jn(_, t) {
          const e = new Function(u(_, t));
          return s(e);
        }
        function Rn(_, t) {
          const e = d(_).call(d(t));
          return s(e);
        }
        function An(_, t) {
          const e = d(_) === d(t);
          return e;
        }
        function Sn(_) {
          const t = d(_).self;
          return s(t);
        }
        function Pn(_, t) {
          const r = e(9216)(u(_, t));
          return s(r);
        }
        function Bn(_) {
          const t = d(_).crypto;
          return s(t);
        }
        function Fn(_) {
          const t = d(_).getRandomValues;
          return s(t);
        }
        function Tn(_, t, e) {
          d(_).randomFillSync(A(t, e));
        }
        function zn(_, t, e) {
          d(_).getRandomValues(A(t, e));
        }
        function Cn(_, t) {
          const e = R(d(t)),
            r = m(e, n.__wbindgen_malloc, n.__wbindgen_realloc),
            i = h;
          ((j()[_ / 4 + 1] = i), (j()[_ / 4 + 0] = r));
        }
        function Nn(_, t) {
          throw new Error(u(_, t));
        }
        function Dn() {
          const _ = n.memory;
          return s(_);
        }
        t.WithdrawalsBuilder = WithdrawalsBuilder;
      }).call(this, e(20)(_), e(13));
    },
    9214: function (_, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = i(e(9215)),
        n = e(2804);
      function i(_, t) {
        if ("function" == typeof WeakMap)
          var e = new WeakMap(),
            r = new WeakMap();
        return (i = function (_, t) {
          if (!t && _ && _.__esModule) return _;
          var n,
            i,
            a = { __proto__: null, default: _ };
          if (null === _ || ("object" != typeof _ && "function" != typeof _))
            return a;
          if ((n = t ? r : e)) {
            if (n.has(_)) return n.get(_);
            n.set(_, a);
          }
          for (const e in _)
            "default" !== e &&
              {}.hasOwnProperty.call(_, e) &&
              ((i =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(_, e)) &&
              (i.get || i.set)
                ? n(a, e, i)
                : (a[e] = _[e]));
          return a;
        })(_, t);
      }
      (Object.keys(n).forEach(function (_) {
        "default" !== _ &&
          "__esModule" !== _ &&
          ((_ in t && t[_] === n[_]) ||
            Object.defineProperty(t, _, {
              enumerable: !0,
              get: function () {
                return n[_];
              },
            }));
      }),
        (0, n.__wbg_set_wasm)(r));
    },
    9216: function (_, t) {
      function e(_) {
        var t = new Error("Cannot find module '" + _ + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      ((e.keys = function () {
        return [];
      }),
        (e.resolve = e),
        (_.exports = e),
        (e.id = 9216));
    },
  },
]);
