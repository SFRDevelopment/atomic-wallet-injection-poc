(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [437, 436, 438],
  {
    2656: function (e, t, r) {
      (function (t) {
        e.exports = (function (e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var a = (t[n] = { i: n, l: !1, exports: {} });
            return (
              e[n].call(a.exports, a, a.exports, r),
              (a.l = !0),
              a.exports
            );
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, {
                  configurable: !1,
                  enumerable: !0,
                  get: n,
                });
            }),
            (r.r = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return (r.d(t, "a", t), t);
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 40))
          );
        })([
          function (e, t) {
            e.exports = r(3976);
          },
          function (e, t) {
            e.exports = r(3979);
          },
          function (e, t) {
            e.exports = r(3980);
          },
          function (e, t) {
            e.exports = r(3982);
          },
          function (e, t) {
            e.exports = r(3985);
          },
          function (e, t) {
            e.exports = r(3995);
          },
          function (e, t) {
            e.exports = r(4012);
          },
          function (e, t) {
            e.exports = r(816);
          },
          function (e, t) {
            e.exports = r(4020);
          },
          function (e, t) {
            e.exports = r(3495);
          },
          function (e, t) {
            e.exports = r(4023);
          },
          function (e, t) {
            e.exports = r(4040);
          },
          function (e, t) {
            e.exports = r(4041);
          },
          function (e, t) {
            e.exports = r(795);
          },
          function (e, t) {
            e.exports = r(4056);
          },
          function (e, t) {
            e.exports = r(4057);
          },
          function (e, t) {
            e.exports = r(4058);
          },
          function (e, t) {
            e.exports = r(2764);
          },
          function (e, t) {
            e.exports = r(4063);
          },
          function (e, t) {
            e.exports = r(4067);
          },
          function (e, t) {
            e.exports = r(2754);
          },
          function (e, t) {
            e.exports = r(4068);
          },
          function (e, t) {
            e.exports = r(3486);
          },
          function (e, t) {
            e.exports = r(4072);
          },
          function (e, t) {
            e.exports = r(3501);
          },
          function (e, t) {
            e.exports = r(4073);
          },
          function (e, t) {
            e.exports = r(3634);
          },
          function (e, t) {
            e.exports = r(4076);
          },
          function (e, t) {
            e.exports = r(3258);
          },
          function (e, t) {
            e.exports = r(4077);
          },
          function (e, t) {
            e.exports = r(4082);
          },
          function (e, t) {
            e.exports = r(2838);
          },
          function (e, t) {
            e.exports = r(3264);
          },
          function (e, t) {
            e.exports = r(4083);
          },
          function (e, t) {
            e.exports = r(4084);
          },
          function (e, t) {
            e.exports = r(4085);
          },
          function (e, t) {
            e.exports = r(4086);
          },
          function (e, t) {
            e.exports = r(4088);
          },
          function (e, t) {
            e.exports = r(4089);
          },
          function (e, t) {
            e.exports = r(4093);
          },
          function (e, r, n) {
            "use strict";
            n.r(r);
            var a = {};
            (n.d(a, "ADDR_VERSION", function () {
              return I;
            }),
              n.d(a, "DEFAULT_SCRYPT", function () {
                return N;
              }),
              n.d(a, "OEP_HEADER", function () {
                return C;
              }),
              n.d(a, "OEP_FLAG", function () {
                return B;
              }),
              n.d(a, "WEBVIEW_SCHEME", function () {
                return D;
              }),
              n.d(a, "DEFAULT_ALGORITHM", function () {
                return O;
              }),
              n.d(a, "DEFAULT_SM2_ID", function () {
                return H;
              }),
              n.d(a, "TEST_NODE", function () {
                return _;
              }),
              n.d(a, "MAIN_NODE", function () {
                return z;
              }),
              n.d(a, "HTTPS_REST_PORT", function () {
                return U;
              }),
              n.d(a, "HTTPS_WS_PORT", function () {
                return L;
              }),
              n.d(a, "HTTPS_JSON_PORT", function () {
                return M;
              }),
              n.d(a, "REST_API", function () {
                return K;
              }),
              n.d(a, "ONT_NETWORK", function () {
                return V;
              }),
              n.d(a, "TEST_ONT_URL", function () {
                return G;
              }),
              n.d(a, "MAIN_ONT_URL", function () {
                return W;
              }),
              n.d(a, "TOKEN_TYPE", function () {
                return J;
              }),
              n.d(a, "DEFAULT_GAS_LIMIT", function () {
                return F;
              }),
              n.d(a, "NATIVE_INVOKE_NAME", function () {
                return q;
              }),
              n.d(a, "TX_MAX_SIG_SIZE", function () {
                return j;
              }),
              n.d(a, "ONT_BIP44_PATH", function () {
                return Y;
              }),
              n.d(a, "UNBOUND_GENERATION_AMOUNT", function () {
                return Q;
              }),
              n.d(a, "UNBOUND_TIME_INTERVAL", function () {
                return X;
              }),
              n.d(a, "ONT_TOTAL_SUPPLY", function () {
                return Z;
              }),
              n.d(a, "GENESIS_BLOCK_TIMESTAMP", function () {
                return $;
              }));
            var i = {};
            (n.d(i, "hexstring2ab", function () {
              return pe;
            }),
              n.d(i, "ab2hexstring", function () {
                return ge;
              }),
              n.d(i, "ab2str", function () {
                return me;
              }),
              n.d(i, "str2ab", function () {
                return we;
              }),
              n.d(i, "str2hexstr", function () {
                return Se;
              }),
              n.d(i, "hexstr2str", function () {
                return Ae;
              }),
              n.d(i, "hex2VarBytes", function () {
                return ke;
              }),
              n.d(i, "str2VarBytes", function () {
                return xe;
              }),
              n.d(i, "bool2VarByte", function () {
                return be;
              }),
              n.d(i, "hexXor", function () {
                return Ee;
              }),
              n.d(i, "num2hexstring", function () {
                return Re;
              }),
              n.d(i, "num2VarInt", function () {
                return Pe;
              }),
              n.d(i, "reverseHex", function () {
                return Te;
              }),
              n.d(i, "bigIntFromBytes", function () {
                return Ie;
              }),
              n.d(i, "bigIntToBytes", function () {
                return Ne;
              }),
              n.d(i, "StringReader", function () {
                return Ce;
              }),
              n.d(i, "EventEmitter", function () {
                return Be;
              }),
              n.d(i, "sendBackResult2Native", function () {
                return De;
              }),
              n.d(i, "axiosPost", function () {
                return Oe;
              }),
              n.d(i, "now", function () {
                return He;
              }),
              n.d(i, "sha256", function () {
                return _e;
              }),
              n.d(i, "ripemd160", function () {
                return ze;
              }),
              n.d(i, "hash160", function () {
                return Ue;
              }),
              n.d(i, "generateRandomArray", function () {
                return Le;
              }),
              n.d(i, "randomBytes", function () {
                return Me;
              }),
              n.d(i, "generateMnemonic", function () {
                return Ke;
              }),
              n.d(i, "parseMnemonic", function () {
                return Ve;
              }),
              n.d(i, "varifyPositiveInt", function () {
                return Ge;
              }),
              n.d(i, "isBase64", function () {
                return We;
              }),
              n.d(i, "isHexString", function () {
                return Je;
              }),
              n.d(i, "unboundDeadline", function () {
                return Fe;
              }),
              n.d(i, "calcUnboundOng", function () {
                return qe;
              }));
            var u = {};
            (n.d(u, "pushBool", function () {
              return It;
            }),
              n.d(u, "pushInt", function () {
                return Nt;
              }),
              n.d(u, "pushBigNum", function () {
                return Ct;
              }),
              n.d(u, "pushHexString", function () {
                return Bt;
              }),
              n.d(u, "getStructBytes", function () {
                return Dt;
              }),
              n.d(u, "getMapBytes", function () {
                return Ot;
              }),
              n.d(u, "pushMap", function () {
                return Ht;
              }),
              n.d(u, "pushParam", function () {
                return _t;
              }),
              n.d(u, "serializeAbiFunction", function () {
                return zt;
              }),
              n.d(u, "convertArray", function () {
                return Ut;
              }),
              n.d(u, "convertMap", function () {
                return Lt;
              }),
              n.d(u, "deserializeItem", function () {
                return Mt;
              }),
              n.d(u, "createCodeParamsScript", function () {
                return Kt;
              }),
              n.d(u, "buildSmartContractParam", function () {
                return Vt;
              }),
              n.d(u, "buildWasmContractParam", function () {
                return Gt;
              }));
            var s = {};
            (n.d(s, "encryptWithCtr", function () {
              return tr;
            }),
              n.d(s, "decryptWithCtr", function () {
                return rr;
              }),
              n.d(s, "checkCtrDecrypted", function () {
                return nr;
              }),
              n.d(s, "encryptWithEcb", function () {
                return ar;
              }),
              n.d(s, "decryptWithEcb", function () {
                return ir;
              }),
              n.d(s, "checkEcbDecrypted", function () {
                return ur;
              }),
              n.d(s, "encryptWithGcm", function () {
                return sr;
              }),
              n.d(s, "decryptWithGcm", function () {
                return or;
              }));
            var o = {};
            (n.d(o, "Address", function () {
              return Wt;
            }),
              n.d(o, "KeyType", function () {
                return Qe;
              }),
              n.d(o, "CurveLabel", function () {
                return nt;
              }),
              n.d(o, "SignatureScheme", function () {
                return Ye;
              }),
              n.d(o, "KeyParameters", function () {
                return it;
              }),
              n.d(o, "PrivateKey", function () {
                return fr;
              }),
              n.d(o, "registerKeyDeserializer", function () {
                return yr;
              }),
              n.d(o, "PublicKey", function () {
                return st;
              }),
              n.d(o, "PublicKeyStatus", function () {
                return ot;
              }),
              n.d(o, "Signature", function () {
                return lr;
              }),
              n.d(o, "Issuer", function () {
                return wr;
              }),
              n.d(o, "User", function () {
                return Sr;
              }),
              n.d(o, "Ecies", function () {
                return Pr;
              }));
            var c = {};
            (n.d(c, "ONT_CONTRACT", function () {
              return Jr;
            }),
              n.d(c, "ONG_CONTRACT", function () {
                return Fr;
              }),
              n.d(c, "getTokenContract", function () {
                return qr;
              }),
              n.d(c, "verifyAmount", function () {
                return jr;
              }),
              n.d(c, "makeTransferTx", function () {
                return Yr;
              }),
              n.d(c, "makeTransferStateTx", function () {
                return Qr;
              }),
              n.d(c, "makeTransferToMany", function () {
                return Xr;
              }),
              n.d(c, "makeWithdrawOngTx", function () {
                return Zr;
              }),
              n.d(c, "makeQueryAllowanceTx", function () {
                return $r;
              }),
              n.d(c, "makeQueryBalanceTx", function () {
                return en;
              }),
              n.d(c, "deserializeTransferTx", function () {
                return tn;
              }));
            var l = {};
            (n.d(l, "ONTID_CONTRACT", function () {
              return rn;
            }),
              n.d(l, "buildRegisterOntidTx", function () {
                return an;
              }),
              n.d(l, "buildRegIdWithAttributes", function () {
                return un;
              }),
              n.d(l, "buildAddAttributeTx", function () {
                return sn;
              }),
              n.d(l, "buildRemoveAttributeTx", function () {
                return on;
              }),
              n.d(l, "buildGetAttributesTx", function () {
                return cn;
              }),
              n.d(l, "buildGetDDOTx", function () {
                return ln;
              }),
              n.d(l, "buildAddControlKeyTx", function () {
                return hn;
              }),
              n.d(l, "buildRemoveControlKeyTx", function () {
                return fn;
              }),
              n.d(l, "buildGetPublicKeysTx", function () {
                return dn;
              }),
              n.d(l, "buildAddRecoveryTx", function () {
                return vn;
              }),
              n.d(l, "buildChangeRecoveryTx", function () {
                return yn;
              }),
              n.d(l, "buildGetPublicKeyStateTx", function () {
                return pn;
              }));
            var h = {};
            (n.d(h, "Default_params", function () {
              return mn;
            }),
              n.d(h, "signTransaction", function () {
                return wn;
              }),
              n.d(h, "signTransactionAsync", function () {
                return Sn;
              }),
              n.d(h, "addSign", function () {
                return An;
              }),
              n.d(h, "signTx", function () {
                return xn;
              }),
              n.d(h, "makeInvokeTransaction", function () {
                return bn;
              }),
              n.d(h, "makeDeployCodeTransaction", function () {
                return En;
              }),
              n.d(h, "buildTxParam", function () {
                return Rn;
              }),
              n.d(h, "buildRpcParam", function () {
                return Pn;
              }),
              n.d(h, "buildRestfulParam", function () {
                return Tn;
              }),
              n.d(h, "sendRawTxRestfulUrl", function () {
                return In;
              }),
              n.d(h, "transferStringParameter", function () {
                return Nn;
              }),
              n.d(h, "transformMapParameter", function () {
                return Cn;
              }),
              n.d(h, "transformArrayParameter", function () {
                return Bn;
              }),
              n.d(h, "transformParameter", function () {
                return Dn;
              }),
              n.d(h, "buildParamsByJson", function () {
                return On;
              }),
              n.d(h, "makeTransactionsByJson", function () {
                return Hn;
              }),
              n.d(h, "buildNativeTxFromJson", function () {
                return _n;
              }));
            var f = {};
            (n.d(f, "InvocationTransaction", function () {
              return li;
            }),
              n.d(f, "NeoRpc", function () {
                return hi;
              }),
              n.d(f, "Program", function () {
                return fi;
              }),
              n.d(f, "SmartContract", function () {
                return di;
              }),
              n.d(f, "TransactionInput", function () {
                return vi;
              }),
              n.d(f, "TransactionOutput", function () {
                return yi;
              }),
              n.d(f, "TransactionNeo", function () {
                return ci;
              }));
            var d = {};
            (n.d(d, "Oep8State", function () {
              return gi;
            }),
              n.d(d, "TransferFrom", function () {
                return mi;
              }),
              n.d(d, "Oep8TxBuilder", function () {
                return Oi;
              }));
            var v = {};
            (n.d(v, "formatBigNumParameter", function () {
              return qi;
            }),
              n.d(v, "Oep4State", function () {
                return ji;
              }),
              n.d(v, "Oep4TxBuilder", function () {
                return Yi;
              }));
            var y = {};
            (n.d(y, "makeRegisterCandidateTx", function () {
              return tu;
            }),
              n.d(y, "makeUnregisterCandidateTx", function () {
                return ru;
              }),
              n.d(y, "makeApproveCandidateTx", function () {
                return nu;
              }),
              n.d(y, "makeRejectCandidateTx", function () {
                return au;
              }),
              n.d(y, "makeVoteForPeerTx", function () {
                return iu;
              }),
              n.d(y, "makeUnvoteForPeerTx", function () {
                return uu;
              }),
              n.d(y, "makeWithdrawTx", function () {
                return su;
              }),
              n.d(y, "makeQuitNodeTx", function () {
                return ou;
              }),
              n.d(y, "makeChangeAuthorizationTx", function () {
                return cu;
              }),
              n.d(y, "makeSetPeerCostTx", function () {
                return lu;
              }),
              n.d(y, "makeWithdrawFeeTx", function () {
                return hu;
              }),
              n.d(y, "makeAuthorizeForPeerTx", function () {
                return fu;
              }),
              n.d(y, "makeUnauthorizeForPeerTx", function () {
                return du;
              }),
              n.d(y, "makeAddInitPosTx", function () {
                return vu;
              }),
              n.d(y, "makeReduceInitPosTx", function () {
                return yu;
              }),
              n.d(y, "makeWithdrawPeerUnboundOngTx", function () {
                return pu;
              }),
              n.d(y, "getAttributes", function () {
                return ku;
              }),
              n.d(y, "getSplitFeeAddress", function () {
                return xu;
              }),
              n.d(y, "getAuthorizeInfo", function () {
                return bu;
              }),
              n.d(y, "getGovernanceView", function () {
                return Eu;
              }),
              n.d(y, "getPeerPoolMap", function () {
                return Ru;
              }),
              n.d(y, "getGlobalParam", function () {
                return Pu;
              }),
              n.d(y, "getTotalStake", function () {
                return Tu;
              }),
              n.d(y, "getPeerUnboundOng", function () {
                return Iu;
              }),
              n.d(y, "GovernanceView", function () {
                return Nu;
              }),
              n.d(y, "PeerPoolItem", function () {
                return Cu;
              }),
              n.d(y, "PeerAttributes", function () {
                return Bu;
              }),
              n.d(y, "SplitFeeAddress", function () {
                return Du;
              }),
              n.d(y, "AuthorizeInfo", function () {
                return Ou;
              }),
              n.d(y, "GlobalParam", function () {
                return Hu;
              }),
              n.d(y, "TotalStake", function () {
                return _u;
              }));
            var p = {};
            (n.d(p, "Transfers", function () {
              return zu;
            }),
              n.d(p, "TokenTransfer", function () {
                return Uu;
              }),
              n.d(p, "State", function () {
                return Lu;
              }),
              n.d(p, "Contract", function () {
                return Mu;
              }),
              n.d(p, "TransferFrom", function () {
                return Ku;
              }));
            var g = {};
            (n.d(g, "Oep5Param", function () {
              return Vu;
            }),
              n.d(g, "Oep5TxBuilder", function () {
                return rs;
              }));
            var m,
              w,
              S = n(1),
              A = n.n(S),
              k = n(0),
              x = n.n(k),
              b = n(18),
              E = n.n(b),
              R = n(2),
              P = n.n(R),
              T = n(14),
              I = "17",
              N = { cost: 4096, blockSize: 8, parallel: 8, size: 64 },
              C = "0142",
              B = "e0",
              D = "Ont",
              O = { algorithm: "ECDSA", parameters: { curve: "P-256" } },
              H = "1234567812345678",
              _ = "polaris1.ont.io",
              z = "dappnode1.ont.io",
              U = "10334",
              L = "10335",
              M = "10336",
              K = {
                getBalance: "/api/v1/balance",
                sendRawTx: "/api/v1/transaction",
                getMerkleProof: "/api/v1/merkleproof",
              },
              V = { MAIN: "MainNet", TEST: "TestNet" },
              G = {
                SOCKET_URL: "wss://" + _ + ":" + L,
                RPC_URL: "https://" + _ + ":" + M,
                REST_URL: "https://" + _ + ":" + U,
                sendRawTxByRestful: "https://" + _ + ":" + U + K.sendRawTx,
              },
              W = {
                SOCKET_URL: "wss://" + z + ":" + L,
                RPC_URL: "https://" + z + ":" + M + "/",
                REST_URL: "https://" + z + ":" + U + "/",
                sendRawTxByRestful: "https://" + _ + ":" + U + K.sendRawTx,
              },
              J = { ONT: "ONT", ONG: "ONG" },
              F = 3e4,
              q = "Ontology.Native.Invoke",
              j = 16,
              Y = "m/44'/1024'/0'/0/0",
              Q = [5, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
              X = 31536e3,
              Z = 1e9,
              $ = 1530316800,
              ee = n(4),
              te = n.n(ee),
              re = n(19),
              ne = n(7);
            (!(function (e) {
              ((e[(e.SUCCESS = 0)] = "SUCCESS"),
                (e[(e.SESSION_EXPIRED = 41001)] = "SESSION_EXPIRED"),
                (e[(e.SERVICE_CEILING = 41002)] = "SERVICE_CEILING"),
                (e[(e.ILLEGAL_DATAFORMAT = 41003)] = "ILLEGAL_DATAFORMAT"),
                (e[(e.INVALID_VERSION = 41004)] = "INVALID_VERSION"),
                (e[(e.INVALID_METHOD = 42001)] = "INVALID_METHOD"),
                (e[(e.INVALID_PARAMS = 42002)] = "INVALID_PARAMS"),
                (e[(e.INVALID_TRANSACTION = 43001)] = "INVALID_TRANSACTION"),
                (e[(e.INVALID_ASSET = 43002)] = "INVALID_ASSET"),
                (e[(e.INVALID_BLOCK = 43003)] = "INVALID_BLOCK"),
                (e[(e.UNKNOWN_TRANSACTION = 44001)] = "UNKNOWN_TRANSACTION"),
                (e[(e.UNKNOWN_ASSET = 44002)] = "UNKNOWN_ASSET"),
                (e[(e.UNKNOWN_BLOCK = 44003)] = "UNKNOWN_BLOCK"),
                (e[(e.UNKNWN_CONTRACT = 44004)] = "UNKNWN_CONTRACT"),
                (e[(e.INTERNAL_ERROR = 45001)] = "INTERNAL_ERROR"),
                (e[(e.SMARTCODE_ERROR = 47001)] = "SMARTCODE_ERROR"),
                (e[(e.UNKNOWN_ONTID = 51e3)] = "UNKNOWN_ONTID"),
                (e[(e.NETWORK_ERROR = 52e3)] = "NETWORK_ERROR"),
                (e[(e.Decrypto_ERROR = 53e3)] = "Decrypto_ERROR"),
                (e[(e.INVALID_ADDR = 53001)] = "INVALID_ADDR"),
                (e[(e.PreExec_ERROR = 54e3)] = "PreExec_ERROR"));
            })(m || (m = {})),
              (function (e) {
                ((e[(e.PUSH0 = 0)] = "PUSH0"),
                  (e[(e.PUSHF = 0)] = "PUSHF"),
                  (e[(e.PUSHBYTES1 = 1)] = "PUSHBYTES1"),
                  (e[(e.PUSHBYTES75 = 75)] = "PUSHBYTES75"),
                  (e[(e.PUSHDATA1 = 76)] = "PUSHDATA1"),
                  (e[(e.PUSHDATA2 = 77)] = "PUSHDATA2"),
                  (e[(e.PUSHDATA4 = 78)] = "PUSHDATA4"),
                  (e[(e.PUSHM1 = 79)] = "PUSHM1"),
                  (e[(e.PUSH1 = 81)] = "PUSH1"),
                  (e[(e.PUSHT = 81)] = "PUSHT"),
                  (e[(e.PUSH2 = 82)] = "PUSH2"),
                  (e[(e.PUSH3 = 83)] = "PUSH3"),
                  (e[(e.PUSH4 = 84)] = "PUSH4"),
                  (e[(e.PUSH5 = 85)] = "PUSH5"),
                  (e[(e.PUSH6 = 86)] = "PUSH6"),
                  (e[(e.PUSH7 = 87)] = "PUSH7"),
                  (e[(e.PUSH8 = 88)] = "PUSH8"),
                  (e[(e.PUSH9 = 89)] = "PUSH9"),
                  (e[(e.PUSH10 = 90)] = "PUSH10"),
                  (e[(e.PUSH11 = 91)] = "PUSH11"),
                  (e[(e.PUSH12 = 92)] = "PUSH12"),
                  (e[(e.PUSH13 = 93)] = "PUSH13"),
                  (e[(e.PUSH14 = 94)] = "PUSH14"),
                  (e[(e.PUSH15 = 95)] = "PUSH15"),
                  (e[(e.PUSH16 = 96)] = "PUSH16"),
                  (e[(e.NOP = 97)] = "NOP"),
                  (e[(e.JMP = 98)] = "JMP"),
                  (e[(e.JMPIF = 99)] = "JMPIF"),
                  (e[(e.JMPIFNOT = 100)] = "JMPIFNOT"),
                  (e[(e.CALL = 101)] = "CALL"),
                  (e[(e.RET = 102)] = "RET"),
                  (e[(e.APPCALL = 103)] = "APPCALL"),
                  (e[(e.SYSCALL = 104)] = "SYSCALL"),
                  (e[(e.TAILCALL = 105)] = "TAILCALL"),
                  (e[(e.DUPFROMALTSTACK = 106)] = "DUPFROMALTSTACK"),
                  (e[(e.TOALTSTACK = 107)] = "TOALTSTACK"),
                  (e[(e.FROMALTSTACK = 108)] = "FROMALTSTACK"),
                  (e[(e.XDROP = 109)] = "XDROP"),
                  (e[(e.XSWAP = 114)] = "XSWAP"),
                  (e[(e.XTUCK = 115)] = "XTUCK"),
                  (e[(e.DEPTH = 116)] = "DEPTH"),
                  (e[(e.DROP = 117)] = "DROP"),
                  (e[(e.DUP = 118)] = "DUP"),
                  (e[(e.NIP = 119)] = "NIP"),
                  (e[(e.OVER = 120)] = "OVER"),
                  (e[(e.PICK = 121)] = "PICK"),
                  (e[(e.ROLL = 122)] = "ROLL"),
                  (e[(e.ROT = 123)] = "ROT"),
                  (e[(e.SWAP = 124)] = "SWAP"),
                  (e[(e.TUCK = 125)] = "TUCK"),
                  (e[(e.CAT = 126)] = "CAT"),
                  (e[(e.SUBSTR = 127)] = "SUBSTR"),
                  (e[(e.LEFT = 128)] = "LEFT"),
                  (e[(e.RIGHT = 129)] = "RIGHT"),
                  (e[(e.SIZE = 130)] = "SIZE"),
                  (e[(e.INVERT = 131)] = "INVERT"),
                  (e[(e.AND = 132)] = "AND"),
                  (e[(e.OR = 133)] = "OR"),
                  (e[(e.XOR = 134)] = "XOR"),
                  (e[(e.EQUAL = 135)] = "EQUAL"),
                  (e[(e.INC = 139)] = "INC"),
                  (e[(e.DEC = 140)] = "DEC"),
                  (e[(e.NEGATE = 143)] = "NEGATE"),
                  (e[(e.ABS = 144)] = "ABS"),
                  (e[(e.NOT = 145)] = "NOT"),
                  (e[(e.NZ = 146)] = "NZ"),
                  (e[(e.ADD = 147)] = "ADD"),
                  (e[(e.SUB = 148)] = "SUB"),
                  (e[(e.MUL = 149)] = "MUL"),
                  (e[(e.DIV = 150)] = "DIV"),
                  (e[(e.MOD = 151)] = "MOD"),
                  (e[(e.SHL = 152)] = "SHL"),
                  (e[(e.SHR = 153)] = "SHR"),
                  (e[(e.BOOLAND = 154)] = "BOOLAND"),
                  (e[(e.BOOLOR = 155)] = "BOOLOR"),
                  (e[(e.NUMEQUAL = 156)] = "NUMEQUAL"),
                  (e[(e.NUMNOTEQUAL = 158)] = "NUMNOTEQUAL"),
                  (e[(e.LT = 159)] = "LT"),
                  (e[(e.GT = 160)] = "GT"),
                  (e[(e.LTE = 161)] = "LTE"),
                  (e[(e.GTE = 162)] = "GTE"),
                  (e[(e.MIN = 163)] = "MIN"),
                  (e[(e.MAX = 164)] = "MAX"),
                  (e[(e.WITHIN = 165)] = "WITHIN"),
                  (e[(e.SHA1 = 167)] = "SHA1"),
                  (e[(e.SHA256 = 168)] = "SHA256"),
                  (e[(e.HASH160 = 169)] = "HASH160"),
                  (e[(e.HASH256 = 170)] = "HASH256"),
                  (e[(e.CHECKSIG = 172)] = "CHECKSIG"),
                  (e[(e.CHECKMULTISIG = 174)] = "CHECKMULTISIG"),
                  (e[(e.ARRAYSIZE = 192)] = "ARRAYSIZE"),
                  (e[(e.PACK = 193)] = "PACK"),
                  (e[(e.UNPACK = 194)] = "UNPACK"),
                  (e[(e.PICKITEM = 195)] = "PICKITEM"),
                  (e[(e.SETITEM = 196)] = "SETITEM"),
                  (e[(e.NEWARRAY = 197)] = "NEWARRAY"),
                  (e[(e.NEWSTRUCT = 198)] = "NEWSTRUCT"),
                  (e[(e.NEWMAP = 199)] = "NEWMAP"),
                  (e[(e.APPEND = 200)] = "APPEND"),
                  (e[(e.REVERSE = 201)] = "REVERSE"),
                  (e[(e.REMOVE = 202)] = "REMOVE"),
                  (e[(e.HASKEY = 203)] = "HASKEY"),
                  (e[(e.KEYS = 204)] = "KEYS"),
                  (e[(e.VALUES = 205)] = "VALUES"),
                  (e[(e.THROW = 240)] = "THROW"),
                  (e[(e.THROWIFNOT = 241)] = "THROWIFNOT"));
              })(w || (w = {})));
            var ae = w,
              ie = n(13),
              ue = n(16),
              se = n(8),
              oe = n(20),
              ce = n(39),
              le = n.n(ce),
              he = n(38),
              fe = n.n(he),
              de = n(5),
              ve = n.n(de),
              ye = n(26);
            function pe(e) {
              for (var t = []; e.length >= 2; )
                (t.push(parseInt(e.substring(0, 2), 16)),
                  (e = e.substring(2, e.length)));
              return t;
            }
            function ge(e) {
              for (
                var t = "", r = new Uint8Array(e), n = 0;
                n < r.byteLength;
                n++
              ) {
                var a = r[n].toString(16);
                t += a = 0 === a.length ? "00" : 1 === a.length ? "0" + a : a;
              }
              return t;
            }
            function me(e) {
              return String.fromCharCode.apply(null, new Uint8Array(e));
            }
            function we(e) {
              for (
                var t = new ArrayBuffer(e.length),
                  r = new Uint8Array(t),
                  n = 0,
                  a = e.length;
                n < a;
                n++
              )
                r[n] = e.charCodeAt(n);
              return t;
            }
            function Se(e) {
              return ge(we(e));
            }
            function Ae(e) {
              return me(pe(e));
            }
            function ke(e) {
              var t = "";
              return ((t += Pe(e.length / 2)), t + e);
            }
            function xe(e) {
              var t = "",
                r = Se(e);
              return ((t += Pe(r.length / 2)), t + r);
            }
            function be(e) {
              return e ? "01" : "00";
            }
            function Ee(e, t) {
              if (e.length !== t.length)
                throw new Error("strings are disparate lengths");
              if (e.length % 2 != 0) throw new Error("strings must be hex");
              for (
                var r = new ArrayBuffer(e.length / 2),
                  n = new Uint8Array(r),
                  a = 0;
                a < e.length;
                a += 2
              )
                n[a / 2] =
                  parseInt(e.substr(a, 2), 16) ^ parseInt(t.substr(a, 2), 16);
              return ge(r);
            }
            var Re = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (e < 0) throw new RangeError("num must be >=0");
                if (t % 1 != 0) throw new Error("size must be a whole integer");
                if (!fe()(e))
                  throw new RangeError(
                    "num (" + e + ") must be a safe integer",
                  );
                t *= 2;
                var n = e.toString(16);
                return (
                  (n =
                    n.length % t == 0
                      ? n
                      : ("0".repeat(t) + n).substring(n.length)),
                  r && (n = Te(n)),
                  n
                );
              },
              Pe = function (e) {
                return e < 253
                  ? Re(e)
                  : e <= 65535
                    ? "fd" + Re(e, 2, !0)
                    : e <= 4294967295
                      ? "fe" + Re(e, 4, !0)
                      : "ff" + Re(e, 8, !0);
              },
              Te = function (e) {
                if (e.length % 2 != 0)
                  throw new Error("Incorrect Length: " + e);
                for (var t = "", r = e.length - 2; r >= 0; r -= 2)
                  t += e.substr(r, 2);
                return t;
              };
            function Ie(e) {
              var r = t.from(e, "hex"),
                n = le()(r.subarray(0));
              return (
                n[n.length - 1] >> 7 == 1 &&
                  (n = n.concat(Array(8 - n.length).fill(255))),
                oe.fromBytesLE(n)
              );
            }
            function Ne(e) {
              for (
                var r = e.toBytesLE(),
                  n = e.neg().toBytesLE(),
                  a = void 0,
                  i = (a = e.isNegative() ? 255 : 0),
                  u = 0,
                  s = r.length - 1;
                s >= 0;
                s--
              )
                if (r[s] !== a) {
                  ((i = e.isNegative() ? n[s] : r[s]), (u = s + 1));
                  break;
                }
              return (
                (r = r.slice(0, u)),
                i >> 7 == 1 && r.push(e.isNegative() ? 255 : 0),
                new t(r).toString("hex")
              );
            }
            var Ce = (function () {
                function e() {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  if ((A()(this, e), t.length % 2 != 0))
                    throw new Error("Param's length is not even.");
                  ((this.str = t),
                    (this.pos = 0),
                    (this.size = this.str.length / 2));
                }
                return (
                  x()(e, [
                    {
                      key: "isEmpty",
                      value: function () {
                        return this.pos >= this.str.length;
                      },
                    },
                    {
                      key: "read",
                      value: function (e) {
                        if (this.isEmpty())
                          throw new Error("StringReader reached the end.");
                        var t = this.str.substr(this.pos, 2 * e);
                        return ((this.pos += 2 * e), t);
                      },
                    },
                    {
                      key: "unreadBytes",
                      value: function (e) {
                        if (this.pos - 2 * e < 0)
                          throw new Error("Can not unread too many bytes.");
                        this.pos -= 2 * e;
                      },
                    },
                    {
                      key: "readNullTerminated",
                      value: function () {
                        var e = this.str.indexOf("00", this.pos);
                        if (-1 === e) throw new Error("No ending NULL found");
                        var t = this.str.substring(this.pos, e);
                        return ((this.pos = e + 2), t);
                      },
                    },
                    {
                      key: "readNextBytes",
                      value: function () {
                        var e = this.readNextLen();
                        return 0 === e ? "" : this.read(e);
                      },
                    },
                    {
                      key: "readNextLen",
                      value: function () {
                        var e = parseInt(this.read(1), 16);
                        return (
                          253 === e
                            ? (e = parseInt(Te(this.read(2)), 16))
                            : 254 === e
                              ? (e = parseInt(Te(this.read(4)), 16))
                              : 255 === e &&
                                (e = parseInt(Te(this.read(8)), 16)),
                          e
                        );
                      },
                    },
                    {
                      key: "readUint8",
                      value: function () {
                        return parseInt(Te(this.read(1)), 16);
                      },
                    },
                    {
                      key: "readUint16",
                      value: function () {
                        return parseInt(Te(this.read(2)), 16);
                      },
                    },
                    {
                      key: "readUint32",
                      value: function () {
                        return parseInt(Te(this.read(4)), 16);
                      },
                    },
                    {
                      key: "readInt",
                      value: function () {
                        return parseInt(Te(this.read(4)), 16);
                      },
                    },
                    {
                      key: "readLong",
                      value: function () {
                        return parseInt(Te(this.read(8)), 16);
                      },
                    },
                    {
                      key: "readBoolean",
                      value: function () {
                        return 0 !== parseInt(this.read(1), 16);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Be = (function () {
                function e() {
                  (A()(this, e), (this.handlers = {}));
                }
                return (
                  x()(e, [
                    {
                      key: "on",
                      value: function (e, t) {
                        (void 0 === this.handlers[e] && (this.handlers[e] = []),
                          this.handlers[e].push(t));
                      },
                    },
                    {
                      key: "trigger",
                      value: function (e, t) {
                        if (this.handlers[e] instanceof Array)
                          for (
                            var r = this.handlers[e], n = 0, a = r.length;
                            n < a;
                            n++
                          )
                            r[n](t);
                      },
                    },
                    {
                      key: "off",
                      value: function (e) {
                        delete this.handlers[e];
                      },
                    },
                  ]),
                  e
                );
              })(),
              De = function (e, t) {
                window &&
                  window.prompt &&
                  window.prompt(D + "://" + t + "?params=" + e);
              },
              Oe = function (e, t) {
                return ve.a
                  .post(e, t)
                  .then(function (e) {
                    return (console.log("axios res:" + e), e);
                  })
                  .catch(function (e) {
                    return (console.log("axios res:" + P()(e)), e);
                  });
              };
            function He() {
              return Math.floor(Date.now() / 1e3);
            }
            function _e(e) {
              var t = ne.enc.Hex.parse(e);
              return ne.SHA256(t).toString();
            }
            function ze(e) {
              var t = ne.enc.Hex.parse(e);
              return ne.RIPEMD160(t).toString();
            }
            function Ue(e) {
              return ze(_e(e));
            }
            function Le(e) {
              return ye(e);
            }
            function Me(e) {
              return ge(Le(e));
            }
            function Ke() {
              var e = ge(
                Le(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 16,
                ),
              );
              return T.entropyToMnemonic(e);
            }
            function Ve(e) {
              return T.mnemonicToEntropy(e);
            }
            function Ge(e) {
              if (!/^[1-9]\d*$/.test(e.toString())) throw m.INVALID_PARAMS;
            }
            function We(e) {
              return t.from(e, "base64").toString("base64") === e;
            }
            function Je(e) {
              return /^[0-9a-fA-F]+$/.test(e) && e.length % 2 == 0;
            }
            function Fe() {
              var e = 0,
                t = !0,
                r = !1,
                n = void 0;
              try {
                for (var a, i = te()(Q); !(t = (a = i.next()).done); t = !0)
                  e += a.value;
              } catch (e) {
                ((r = !0), (n = e));
              } finally {
                try {
                  !t && i.return && i.return();
                } finally {
                  if (r) throw n;
                }
              }
              e *= X;
              var u = Q.length;
              if (1 !== Q[u - 1] || !(e - X < Z && Z <= e))
                throw new Error("incompatible constants setting");
              return X * u - (e - Z);
            }
            function qe(e, t, r) {
              var n = 0;
              if (t >= r) return 0;
              var a = Fe();
              if (t < a) {
                var i = Math.floor(t / X),
                  u = t % X;
                r >= a && (r = a);
                for (var s = Math.floor(r / X), o = r % X; i < s; )
                  ((n += (X - u) * Q[i]), i++, (u = 0));
                n += (o - u) * Q[i];
              }
              return n * e;
            }
            var je = (function () {
                function e(t) {
                  var r =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  A()(this, e);
                  var n = new se.BigNumber(t);
                  if (!n.isInteger() || n.isNegative()) throw m.INVALID_PARAMS;
                  ((this.value = t), (this.ledgerCompatible = r));
                }
                return (
                  x()(e, null, [
                    {
                      key: "fromHexstr",
                      value: function (t) {
                        return (
                          (t = Te(t)),
                          new e(new se.BigNumber(t, 16).toString())
                        );
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "toHexstr",
                      value: function () {
                        var e = Ne(oe.fromValue(this.value));
                        return (
                          this.ledgerCompatible &&
                            (e.length % 2 != 0 || e.length < 16) &&
                            (e += "0".repeat(16 - e.length)),
                          e
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ye = (function () {
                function e(t, r, n) {
                  (A()(this, e),
                    (this.label = t),
                    (this.hex = r),
                    (this.labelJWS = n),
                    e.values.push(this));
                }
                return (
                  x()(e, null, [
                    {
                      key: "fromHex",
                      value: function (t) {
                        var r = e.values.find(function (e) {
                          return e.hex === t;
                        });
                        if (void 0 === r)
                          throw new Error("Enum value not found");
                        return r;
                      },
                    },
                    {
                      key: "fromLabel",
                      value: function (t) {
                        var r = e.values.find(function (e) {
                          return e.label === t;
                        });
                        if (void 0 === r)
                          throw new Error("Enum value not found");
                        return r;
                      },
                    },
                    {
                      key: "fromLabelJWS",
                      value: function (t) {
                        var r = e.values.find(function (e) {
                          return e.labelJWS === t;
                        });
                        if (void 0 === r)
                          throw new Error("Enum value not found");
                        return r;
                      },
                    },
                  ]),
                  e
                );
              })();
            ((Ye.values = []),
              (Ye.ECDSAwithSHA224 = new Ye("SHA224withECDSA", 0, "ES224")),
              (Ye.ECDSAwithSHA256 = new Ye("SHA256withECDSA", 1, "ES256")),
              (Ye.ECDSAwithSHA384 = new Ye("SHA384withECDSA", 2, "ES384")),
              (Ye.ECDSAwithSHA512 = new Ye("SHA512withECDSA", 3, "ES512")),
              (Ye.ECDSAwithSHA3_224 = new Ye(
                "SHA3-224withECDSA",
                4,
                "ES3-224",
              )),
              (Ye.ECDSAwithSHA3_256 = new Ye(
                "SHA3-256withECDSA",
                5,
                "ES3-256",
              )),
              (Ye.ECDSAwithSHA3_384 = new Ye(
                "SHA3-384withECDSA",
                6,
                "ES3-384",
              )),
              (Ye.ECDSAwithSHA3_512 = new Ye(
                "SHA3-512withECDSA",
                7,
                "ES3-512",
              )),
              (Ye.ECDSAwithRIPEMD160 = new Ye(
                "RIPEMD160withECDSA",
                8,
                "ER160",
              )),
              (Ye.SM2withSM3 = new Ye("SM3withSM2", 9, "SM")),
              (Ye.EDDSAwithSHA512 = new Ye("SHA512withEdDSA", 10, "EDS512")));
            var Qe = (function () {
              function e(t, r, n) {
                (A()(this, e),
                  (this.label = t),
                  (this.hex = r),
                  (this.defaultSchema = n),
                  e.values.push(this));
              }
              return (
                x()(e, null, [
                  {
                    key: "fromHex",
                    value: function (t) {
                      var r = e.values.find(function (e) {
                        return e.hex === t;
                      });
                      if (void 0 === r) throw new Error("Enum value not found");
                      return r;
                    },
                  },
                  {
                    key: "fromLabel",
                    value: function (t) {
                      var r = e.values.find(function (e) {
                        return e.label === t;
                      });
                      if (void 0 === r) throw new Error("Enum value not found");
                      return r;
                    },
                  },
                ]),
                e
              );
            })();
            ((Qe.values = []),
              (Qe.ECDSA = new Qe("ECDSA", 18, Ye.ECDSAwithSHA256)),
              (Qe.SM2 = new Qe("SM2", 19, Ye.SM2withSM3)),
              (Qe.EDDSA = new Qe("EDDSA", 20, Ye.EDDSAwithSHA512)));
            var Xe = n(9),
              Ze = n.n(Xe),
              $e = n(11),
              et = n.n($e),
              tt = n(10),
              rt = n.n(tt),
              nt = (function () {
                function e(t, r, n) {
                  (A()(this, e),
                    (this.label = t),
                    (this.hex = r),
                    (this.preset = n),
                    e.values.push(this));
                }
                return (
                  x()(e, null, [
                    {
                      key: "fromHex",
                      value: function (t) {
                        var r = e.values.find(function (e) {
                          return e.hex === t;
                        });
                        if (void 0 === r)
                          throw new Error("Enum value not found");
                        return r;
                      },
                    },
                    {
                      key: "fromLabel",
                      value: function (t) {
                        var r = e.values.find(function (e) {
                          return e.label === t;
                        });
                        if (void 0 === r)
                          throw new Error("Enum value not found");
                        return r;
                      },
                    },
                  ]),
                  e
                );
              })();
            ((nt.values = []),
              (nt.SECP224R1 = new nt("P-224", 1, "p224")),
              (nt.SECP256R1 = new nt("P-256", 2, "p256")),
              (nt.SECP384R1 = new nt("P-384", 3, "p384")),
              (nt.SECP521R1 = new nt("P-521", 4, "p521")),
              (nt.SM2P256V1 = new nt("sm2p256v1", 20, "sm2p256v1")),
              (nt.ED25519 = new nt("ed25519", 25, "ed25519")));
            var at = n(23),
              it = (function () {
                function e(t) {
                  (A()(this, e), (this.curve = t));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserializeJson",
                      value: function (t) {
                        return new e(nt.fromLabel(t.curve));
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "serializeJson",
                      value: function () {
                        return { curve: this.curve.label };
                      },
                    },
                  ]),
                  e
                );
              })(),
              ut = (function () {
                function e(t, r, n) {
                  (A()(this, e),
                    (this.key = t),
                    void 0 === r && (r = Qe.fromLabel(O.algorithm)),
                    void 0 === n && (n = it.deserializeJson(O.parameters)),
                    (this.algorithm = r),
                    (this.parameters = n));
                }
                return (
                  x()(e, [
                    {
                      key: "computeHash",
                      value: function (e, t) {
                        switch (t) {
                          case Ye.ECDSAwithSHA224:
                            return ne.SHA224(ne.enc.Hex.parse(e)).toString();
                          case Ye.ECDSAwithSHA256:
                            return ne.SHA256(ne.enc.Hex.parse(e)).toString();
                          case Ye.ECDSAwithSHA384:
                            return ne.SHA384(ne.enc.Hex.parse(e)).toString();
                          case Ye.ECDSAwithSHA512:
                          case Ye.EDDSAwithSHA512:
                            return ne.SHA512(ne.enc.Hex.parse(e)).toString();
                          case Ye.ECDSAwithSHA3_224:
                            return Object(at.sha3_224)(pe(e));
                          case Ye.ECDSAwithSHA3_256:
                            return Object(at.sha3_256)(pe(e));
                          case Ye.ECDSAwithSHA3_384:
                            return Object(at.sha3_384)(pe(e));
                          case Ye.ECDSAwithSHA3_512:
                            return Object(at.sha3_512)(pe(e));
                          case Ye.ECDSAwithRIPEMD160:
                            return ne.RIPEMD160(ne.enc.Hex.parse(e)).toString();
                          case Ye.SM2withSM3:
                            return new ue.sm3().sum(pe(e), "hex");
                          default:
                            throw new Error("Unsupported hash algorithm.");
                        }
                      },
                    },
                    {
                      key: "isSchemaSupported",
                      value: function (e) {
                        switch (e) {
                          case Ye.ECDSAwithSHA224:
                          case Ye.ECDSAwithSHA256:
                          case Ye.ECDSAwithSHA384:
                          case Ye.ECDSAwithSHA512:
                          case Ye.ECDSAwithSHA3_224:
                          case Ye.ECDSAwithSHA3_256:
                          case Ye.ECDSAwithSHA3_384:
                          case Ye.ECDSAwithSHA3_512:
                          case Ye.ECDSAwithRIPEMD160:
                            return this.algorithm === Qe.ECDSA;
                          case Ye.EDDSAwithSHA512:
                            return this.algorithm === Qe.EDDSA;
                          case Ye.SM2withSM3:
                            return this.algorithm === Qe.SM2;
                          default:
                            throw new Error("Unsupported signature schema.");
                        }
                      },
                    },
                    {
                      key: "serializeJson",
                      value: function () {
                        return {
                          algorithm: this.algorithm.label,
                          parameters: this.parameters.serializeJson(),
                          key: this.key,
                        };
                      },
                    },
                  ]),
                  e
                );
              })(),
              st = (function (e) {
                function t() {
                  return (
                    A()(this, t),
                    et()(this, (t.__proto__ || Ze()(t)).apply(this, arguments))
                  );
                }
                return (
                  rt()(t, e),
                  x()(
                    t,
                    [
                      {
                        key: "verify",
                        value: function (e, t) {
                          if (!this.isSchemaSupported(t.algorithm))
                            throw new Error(
                              "Signature schema does not match key type.",
                            );
                          "string" != typeof e && (e = e.getSignContent());
                          var r = void 0;
                          return (
                            (r =
                              t.algorithm === Ye.SM2withSM3
                                ? e
                                : this.computeHash(e, t.algorithm)),
                            this.verifySignature(r, t.value, t.algorithm)
                          );
                        },
                      },
                      {
                        key: "serializeHex",
                        value: function () {
                          var e = "";
                          switch (this.algorithm) {
                            case Qe.ECDSA:
                              e += this.key;
                              break;
                            case Qe.EDDSA:
                            case Qe.SM2:
                              ((e += Re(this.algorithm.hex)),
                                (e += Re(this.parameters.curve.hex)),
                                (e += this.key));
                          }
                          return e;
                        },
                      },
                      {
                        key: "verifySignature",
                        value: function (e, t, r) {
                          switch (r) {
                            case Ye.ECDSAwithSHA224:
                            case Ye.ECDSAwithSHA256:
                            case Ye.ECDSAwithSHA384:
                            case Ye.ECDSAwithSHA512:
                            case Ye.ECDSAwithSHA3_224:
                            case Ye.ECDSAwithSHA3_256:
                            case Ye.ECDSAwithSHA3_384:
                            case Ye.ECDSAwithSHA3_512:
                            case Ye.ECDSAwithRIPEMD160:
                              return this.verifyEcDSASignature(e, t);
                            case Ye.EDDSAwithSHA512:
                              return this.verifyEdDSASignature(e, t);
                            case Ye.SM2withSM3:
                              return this.verifySM2Signature(e, t);
                            default:
                              throw new Error("Unsupported signature schema.");
                          }
                        },
                      },
                      {
                        key: "verifyEcDSASignature",
                        value: function (e, t) {
                          var r = t.substr(0, 64),
                            n = t.substr(64, 64);
                          return new ie.ec(this.parameters.curve.preset).verify(
                            e,
                            { r: r, s: n },
                            this.key,
                            "hex",
                          );
                        },
                      },
                      {
                        key: "verifyEdDSASignature",
                        value: function (e, t) {
                          var r = t.substr(0, 64),
                            n = t.substr(64, 64);
                          return new ie.eddsa(
                            this.parameters.curve.preset,
                          ).verify(e, { r: r, s: n }, this.key, "hex");
                        },
                      },
                      {
                        key: "verifySM2Signature",
                        value: function (e, t) {
                          var r = new Ce(t),
                            n = Ae(r.readNullTerminated());
                          if (n !== H && "" !== n)
                            throw new Error("Unsupported SM2 id used.");
                          var a = r.read(32),
                            i = r.read(32);
                          return ue.sm2
                            .SM2KeyPair(this.key)
                            .verify(pe(e), a, i);
                        },
                      },
                    ],
                    [
                      {
                        key: "deserializeHex",
                        value: function (e) {
                          var r =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 33;
                          if (33 === r) {
                            var n = Qe.ECDSA,
                              a = nt.SECP256R1;
                            return new t(e.read(33), n, new it(a));
                          }
                          var i = parseInt(e.read(1), 16),
                            u = parseInt(e.read(1), 16);
                          return new t(
                            e.read(r - 2),
                            Qe.fromHex(i),
                            new it(nt.fromHex(u)),
                          );
                        },
                      },
                    ],
                  ),
                  t
                );
              })(ut),
              ot = (function () {
                function e(t) {
                  (A()(this, e), (this.label = t), e.values.push(this));
                }
                return (
                  x()(e, null, [
                    {
                      key: "fromHexLabel",
                      value: function (t) {
                        var r = Ae(t),
                          n = e.values.find(function (e) {
                            return e.label === r;
                          });
                        if (void 0 === n)
                          throw new Error("Enum value not found");
                        return n;
                      },
                    },
                  ]),
                  e
                );
              })();
            function ct(e, t) {
              if (e.algorithm !== t.algorithm)
                return e.algorithm.hex - t.algorithm.hex;
              switch (e.algorithm) {
                case Qe.ECDSA:
                  var r = new ie.ec(e.parameters.curve.preset),
                    n = r.keyFromPublic(e.key, "hex", !0),
                    a = r.keyFromPublic(t.key, "hex", !0),
                    i = n.getPublic(),
                    u = a.getPublic();
                  return i.getX() !== u.getX()
                    ? i.getX() - u.getX()
                    : i.getY() - u.getY();
                case Qe.SM2:
                  var s = new ue.sm2.SM2KeyPair(),
                    o = new ue.sm2.SM2KeyPair();
                  return (
                    s._pubFromString(e.key),
                    o._pubFromString(t.key),
                    s.getX().toString() !== o.getX().toString()
                      ? Number(s.getX().toString()) -
                        Number(o.getX().toString())
                      : Number(s.getY().toString()) -
                        Number(o.getY().toString())
                  );
                case Qe.EDDSA:
                  return Number(e.key) - Number(t.key);
                default:
                  return 0;
              }
            }
            function lt(e) {
              return Re(e);
            }
            function ht(e) {
              return -1 === e
                ? Re(ae.PUSHM1)
                : 0 === e
                  ? Re(ae.PUSH0)
                  : e > 0 && e <= 16
                    ? Re(ae.PUSH1 - 1 + e)
                    : Re(e, 8, !0);
            }
            function ft(e) {
              return 0 === e
                ? lt(ae.PUSH0)
                : e <= 16
                  ? Re(e - 1 + ae.PUSH1)
                  : dt(new je(e.toString()).toHexstr());
            }
            function dt(e) {
              var t = "";
              if (0 === e.length)
                throw new Error("pushBytes error, hexstr is empty.");
              var r = e.length / 2;
              if (r <= ae.PUSHBYTES75 + 1 - ae.PUSHBYTES1)
                t += Re(r + ae.PUSHBYTES1 - 1);
              else if (r < 256) ((t += Re(ae.PUSHDATA1)), (t += Re(r)));
              else if (r < 65536)
                ((t += Re(ae.PUSHDATA2)), (t += Re(r, 2, !0)));
              else {
                if (!(r < 4294967296)) throw m.INVALID_PARAMS;
                ((t += Re(ae.PUSHDATA4)), (t += Re(r, 4, !0)));
              }
              return t + e;
            }
            function vt(e) {
              var t = "";
              return (
                (t += (function (e) {
                  return dt(e.serializeHex());
                })(e)),
                t + lt(ae.CHECKSIG)
              );
            }
            function yt(e, t) {
              var r = e.length;
              if (!(1 <= t && t <= r && r <= 1024))
                throw new Error("Wrong multi-sig param");
              e.sort(ct);
              var n = "";
              n += ft(t);
              var a = !0,
                i = !1,
                u = void 0;
              try {
                for (var s, o = te()(e); !(a = (s = o.next()).done); a = !0)
                  n += dt(s.value.serializeHex());
              } catch (e) {
                ((i = !0), (u = e));
              } finally {
                try {
                  !a && o.return && o.return();
                } finally {
                  if (i) throw u;
                }
              }
              return ((n += ft(r)), n + lt(ae.CHECKMULTISIG));
            }
            function pt(e) {
              var t = "";
              e.sort();
              var r = !0,
                n = !1,
                a = void 0;
              try {
                for (var i, u = te()(e); !(r = (i = u.next()).done); r = !0)
                  t += dt(i.value);
              } catch (e) {
                ((n = !0), (a = e));
              } finally {
                try {
                  !r && u.return && u.return();
                } finally {
                  if (n) throw a;
                }
              }
              return t;
            }
            function gt(e) {
              return parseInt(e.read(1), 16);
            }
            function mt(e) {
              var t = gt(e),
                r = void 0;
              if (t === ae.PUSHDATA4) r = e.readUint32();
              else if (t === ae.PUSHDATA2) r = e.readUint16();
              else if (t === ae.PUSHDATA1) r = e.readUint8();
              else {
                if (!(t <= ae.PUSHBYTES75 && t >= ae.PUSHBYTES1))
                  throw new Error("unexpected opcode: " + t);
                r = t - ae.PUSHBYTES1 + 1;
              }
              return e.read(r);
            }
            function wt(e) {
              var t = e.readNextBytes();
              return st.deserializeHex(new Ce(t));
            }
            ((ot.values = []),
              (ot.IN_USE = new ot("in use")),
              (ot.REVOKED = new ot("revoked")));
            var St,
              At,
              kt = function e() {
                A()(this, e);
              },
              xt = n(25),
              bt = n.n(xt),
              Et = n(12),
              Rt = n.n(Et);
            (!(function (e) {
              ((e.Boolean = "Boolean"),
                (e.Integer = "Integer"),
                (e.ByteArray = "ByteArray"),
                (e.Interface = "Interface"),
                (e.Array = "Array"),
                (e.Struct = "Struct"),
                (e.Map = "Map"),
                (e.String = "String"),
                (e.Int = "Integer"),
                (e.Long = "Long"),
                (e.IntArray = "IntArray"),
                (e.LongArray = "LongArray"),
                (e.Address = "Address"));
            })(St || (St = {})),
              (function (e) {
                ((e[(e.ByteArray = 0)] = "ByteArray"),
                  (e[(e.Boolean = 1)] = "Boolean"),
                  (e[(e.Integer = 2)] = "Integer"),
                  (e[(e.Interface = 64)] = "Interface"),
                  (e[(e.Array = 128)] = "Array"),
                  (e[(e.Struct = 129)] = "Struct"),
                  (e[(e.Map = 130)] = "Map"));
              })(At || (At = {})));
            var Pt = (function () {
                function e(t, r, n) {
                  (A()(this, e),
                    (this.name = t),
                    (this.type = r),
                    (this.value = n));
                }
                return (
                  x()(e, [
                    {
                      key: "getName",
                      value: function () {
                        return this.name;
                      },
                    },
                    {
                      key: "getType",
                      value: function () {
                        return this.type;
                      },
                    },
                    {
                      key: "getValue",
                      value: function () {
                        return this.value;
                      },
                    },
                    {
                      key: "setValue",
                      value: function (e) {
                        return (
                          e.type === this.type &&
                          e.name === this.name &&
                          null != e.value &&
                          ((this.value = e.value), !0)
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Tt = (function () {
                function e() {
                  (A()(this, e), (this.list = []));
                }
                return (
                  x()(e, [
                    {
                      key: "add",
                      value: function () {
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        var n = !0,
                          a = !1,
                          i = void 0;
                        try {
                          for (
                            var u, s = te()(t);
                            !(n = (u = s.next()).done);
                            n = !0
                          ) {
                            var o = u.value;
                            this.list.push(o);
                          }
                        } catch (e) {
                          ((a = !0), (i = e));
                        } finally {
                          try {
                            !n && s.return && s.return();
                          } finally {
                            if (a) throw i;
                          }
                        }
                      },
                    },
                  ]),
                  e
                );
              })(),
              It = function (e) {
                var t = "";
                return t + Re(e ? ae.PUSHT : ae.PUSHF);
              },
              Nt = function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = "";
                if (-1 === e) r = Re(ae.PUSHM1);
                else if (0 === e) r = Re(ae.PUSH0);
                else if (e > 0 && e < 16) {
                  var n = ae.PUSH1 - 1 + e;
                  r = Re(n);
                } else {
                  var a = new je(e.toString(), t).toHexstr();
                  r = Bt(a);
                }
                return r;
              },
              Ct = function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = "";
                if (e.isEqualTo(-1)) r = Re(ae.PUSHM1);
                else if (e.isEqualTo(0)) r = Re(ae.PUSH0);
                else if (e.isGreaterThan(0) && e.isLessThan(16)) {
                  var n = ae.PUSH1 - 1 + e.toNumber();
                  r = Re(n);
                } else {
                  var a = new je(e.toString(), t).toHexstr();
                  r = Bt(a);
                }
                return r;
              },
              Bt = function (e) {
                var t = "",
                  r = e.length / 2;
                return (
                  r <= ae.PUSHBYTES75
                    ? (t += Re(r))
                    : r < 256
                      ? ((t += Re(ae.PUSHDATA1)), (t += Re(r)))
                      : r < 65536
                        ? ((t += Re(ae.PUSHDATA2)), (t += Re(r, 2, !0)))
                        : ((t += Re(ae.PUSHDATA4)), (t += Re(r, 4, !0))),
                  t + e
                );
              },
              Dt = function (e) {
                var t = "";
                ((t += Re(At.Struct)), (t += Re(e.list.length)));
                var r = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var i, u = te()(e.list);
                    !(r = (i = u.next()).done);
                    r = !0
                  ) {
                    var s = i.value;
                    if ("string" == typeof s)
                      ((t += Re(At.ByteArray)), (t += Bt(s)));
                    else {
                      if ("number" != typeof s) throw m.INVALID_PARAMS;
                      ((t += Re(At.ByteArray)), (t += Bt(Pe(s))));
                    }
                  }
                } catch (e) {
                  ((n = !0), (a = e));
                } finally {
                  try {
                    !r && u.return && u.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                return t;
              },
              Ot = function (e) {
                var t = "";
                ((t += Re(At.Map)), (t += Re(e.size)));
                var r = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var i, u = te()(e.keys());
                    !(r = (i = u.next()).done);
                    r = !0
                  ) {
                    var s = i.value;
                    ((t += Re(At.ByteArray)), (t += Bt(Se(s))));
                    var o = e.get(s);
                    if (o && o.getType() === St.ByteArray)
                      ((t += Re(At.ByteArray)), (t += Bt(o.getValue())));
                    else if (o && o.getType() === St.String)
                      ((t += Re(At.ByteArray)), (t += Bt(Se(o.getValue()))));
                    else if (o && o.getType() === St.Integer)
                      ((t += Re(At.Integer)), (t += Bt(Pe(o.getValue()))));
                    else {
                      if (!o || o.getType() !== St.Long) throw m.INVALID_PARAMS;
                      ((t += Re(At.Integer)), (t += Bt(Pe(o.getValue()))));
                    }
                  }
                } catch (e) {
                  ((n = !0), (a = e));
                } finally {
                  try {
                    !r && u.return && u.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                return t;
              },
              Ht = function (e, t) {
                var r = "";
                ((r += Re(ae.NEWMAP)), (r += Re(ae.TOALTSTACK)));
                var n = !0,
                  a = !1,
                  i = void 0;
                try {
                  for (
                    var u, s = te()(e.keys());
                    !(n = (u = s.next()).done);
                    n = !0
                  ) {
                    var o = u.value;
                    ((r += Re(ae.DUPFROMALTSTACK)),
                      (r += Bt(Se(o))),
                      (r += _t(e.get(o), t)),
                      (r += Re(ae.SETITEM)));
                  }
                } catch (e) {
                  ((a = !0), (i = e));
                } finally {
                  try {
                    !n && s.return && s.return();
                  } finally {
                    if (a) throw i;
                  }
                }
                return r + Re(ae.FROMALTSTACK);
              },
              _t = function e(t, r) {
                if (!t) throw Error("Parameter can not be undefined");
                var n = "";
                if (t.type === St.ByteArray) n += Bt(t.value);
                else if (t.type === St.String) n += Bt(Se(t.value));
                else if (t.type === St.Boolean)
                  ((n += It(Boolean(t.value))),
                    (n += Re(ae.PUSH0)),
                    (n += Re(ae.BOOLOR)));
                else if (t.type === St.Map) n += Ht(Lt(t), r);
                else if (t instanceof Rt.a) n += Ht(t, r);
                else if (t.type === St.Array) {
                  for (var a = t.value.length - 1; a > -1; a--)
                    n += e(t.value[a], r);
                  ((n += Nt(t.value.length, r)), (n += Re(ae.PACK)));
                } else if (t.type === St.Integer)
                  ((n += Nt(t.value, r)),
                    (n += Re(ae.PUSH0)),
                    (n += Re(ae.ADD)));
                else {
                  if (t.type !== St.Long)
                    throw Error("Invalid parameter type: " + P()(t));
                  ((n += Ct(new se.BigNumber(t.value), r)),
                    (n += Re(ae.PUSH0)),
                    (n += Re(ae.ADD)));
                }
                return n;
              },
              zt = function (e) {
                var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  r = [];
                r.push(Se(e.name));
                var n = [],
                  a = !0,
                  i = !1,
                  u = void 0;
                try {
                  for (
                    var s, o = te()(e.parameters);
                    !(a = (s = o.next()).done);
                    a = !0
                  ) {
                    var c = s.value;
                    c.getType() === St.String
                      ? n.push(Se(c.getValue()))
                      : c.getType() === St.Long
                        ? n.push(new se.BigNumber(c.getValue()))
                        : c.getType() === St.Map
                          ? n.push(Lt(c))
                          : n.push(c.getValue());
                  }
                } catch (e) {
                  ((i = !0), (u = e));
                } finally {
                  try {
                    !a && o.return && o.return();
                  } finally {
                    if (i) throw u;
                  }
                }
                return (r.length > 0 && r.push(n), Kt(r, t));
              };
            function Ut(e) {
              var t = [],
                r = !0,
                n = !1,
                a = void 0;
              try {
                for (var i, u = te()(e); !(r = (i = u.next()).done); r = !0) {
                  var s = i.value;
                  s.getType && s.getType() === St.String
                    ? t.push(Se(s.getValue()))
                    : s.getType && s.getType() === St.Long
                      ? t.push(new se.BigNumber(s.getValue()))
                      : s.getType && s.getType() === St.Array
                        ? t.push(Ut(s.value))
                        : s.getType && s.getType() === St.Map
                          ? t.push(Lt(s))
                          : t.push(s.getValue ? s.getValue() : s);
                }
              } catch (e) {
                ((n = !0), (a = e));
              } finally {
                try {
                  !r && u.return && u.return();
                } finally {
                  if (n) throw a;
                }
              }
              return t;
            }
            function Lt(e) {
              var t = new Rt.a(),
                r = !0,
                n = !1,
                a = void 0;
              try {
                for (
                  var i, u = te()(bt()(e.value));
                  !(r = (i = u.next()).done);
                  r = !0
                ) {
                  var s = i.value,
                    o = e.value[s];
                  o.type && o.type === St.Map ? t.set(s, Lt(o)) : t.set(s, o);
                }
              } catch (e) {
                ((n = !0), (a = e));
              } finally {
                try {
                  !r && u.return && u.return();
                } finally {
                  if (n) throw a;
                }
              }
              return t;
            }
            function Mt(e) {
              var t = parseInt(e.read(1), 16);
              if (t === At.ByteArray) return e.readNextBytes();
              if (t === At.Boolean) return e.readBoolean();
              if (t === At.Integer) return Ie(e.readNextBytes()).toNumber();
              if (t === At.Array || t === At.Struct) {
                for (var r = [], n = e.readNextLen(); n > 0; n--) {
                  var a = Mt(e);
                  r.push(a);
                }
                return r;
              }
              if (t === At.Map) {
                for (
                  var i = e.readNextLen(), u = new Rt.a(), s = i;
                  s > 0;
                  s--
                ) {
                  var o = Ae(Mt(e)),
                    c = Mt(e);
                  u.set(o, c);
                }
                return u;
              }
              throw Error("Invalid parameter type: " + t);
            }
            var Kt = function e(t) {
                for (
                  var r =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = "",
                    a = t.length - 1;
                  a >= 0;
                  a--
                ) {
                  var i = t[a];
                  if ("string" == typeof i) n += Bt(i);
                  else if ("number" == typeof i) n += Nt(i, r);
                  else if ("boolean" == typeof i) n += It(i);
                  else if (i instanceof se.BigNumber) n += Ct(i, r);
                  else if (i instanceof Rt.a) n += Ht(i, r);
                  else if (i instanceof Tt) {
                    var u = Dt(i);
                    n += Bt(u);
                  } else
                    i instanceof Array &&
                      ((n += e(Ut(i), r)),
                      (n += Nt(i.length, r)),
                      (n += Re(ae.PACK)));
                }
                return n;
              },
              Vt = function (e, t) {
                for (var r = "", n = t.length - 1; n > -1; n--)
                  switch (t[n].getType()) {
                    case St.Boolean:
                      r += It(t[n].getValue());
                      break;
                    case St.Integer:
                      r += Nt(t[n].getValue());
                      break;
                    case St.String:
                      var a = Se(t[n].getValue());
                      r += Bt(a);
                      break;
                    case St.ByteArray:
                      r += Bt(t[n].getValue());
                      break;
                    case St.Map:
                      var i = Ot(t[n].getValue());
                      r += Bt(i);
                      break;
                    case St.Struct:
                      var u = Dt(t[n].getValue());
                      r += Bt(u);
                      break;
                    default:
                      throw new Error("Unsupported param type: " + P()(t[n]));
                  }
                return ((r += Nt(t.length)), (r += Re(ae.PACK)), r + Bt(Se(e)));
              },
              Gt = function (e) {
                var t = [],
                  r = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (var i, u = te()(e); !(r = (i = u.next()).done); r = !0) {
                    var s = i.value,
                      o = void 0;
                    switch (s.getType()) {
                      case St.String:
                        o = { type: "string", value: s.getValue() };
                        break;
                      case St.Int:
                        o = { type: "int", value: s.getValue().toString() };
                        break;
                      case St.Long:
                        o = { type: "int64", value: s.getValue() };
                        break;
                      case St.IntArray:
                      case St.LongArray:
                        o = { type: "int_array", value: s.getValue() };
                    }
                    t.push(o);
                  }
                } catch (e) {
                  ((n = !0), (a = e));
                } finally {
                  try {
                    !r && u.return && u.return();
                  } finally {
                    if (n) throw a;
                  }
                }
                var c = { Params: t };
                return Se(P()(c));
              },
              Wt = (function () {
                function e(t) {
                  if ((A()(this, e), 40 !== t.length && 34 !== t.length))
                    throw m.INVALID_PARAMS;
                  this.value = t;
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        return new e(t.read(20));
                      },
                    },
                    {
                      key: "fromPubKey",
                      value: function (t) {
                        return new e(Ue(vt(t)));
                      },
                    },
                    {
                      key: "fromOntid",
                      value: function (t) {
                        return new e(t.substr(8));
                      },
                    },
                    {
                      key: "fromVmCode",
                      value: function (t) {
                        return new e(Ue(t));
                      },
                    },
                    {
                      key: "fromMultiPubKeys",
                      value: function (t, r) {
                        var n = r.length;
                        if (t <= 0 || t > n || n > 24) throw m.INVALID_PARAMS;
                        r.sort(ct);
                        var a = "";
                        a += ht(t);
                        var i = !0,
                          u = !1,
                          s = void 0;
                        try {
                          for (
                            var o, c = te()(r);
                            !(i = (o = c.next()).done);
                            i = !0
                          ) {
                            var l = o.value;
                            a += Bt(l.serializeHex());
                          }
                        } catch (e) {
                          ((u = !0), (s = e));
                        } finally {
                          try {
                            !i && c.return && c.return();
                          } finally {
                            if (u) throw s;
                          }
                        }
                        return (
                          (a += ht(n)),
                          new e(Ue((a += Re(ae.CHECKMULTISIG))))
                        );
                      },
                    },
                    {
                      key: "generateOntid",
                      value: function (t) {
                        return "did:ont:" + e.fromPubKey(t).toBase58();
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "toBase58",
                      value: function () {
                        return 34 === this.value.length
                          ? this.value
                          : Jt(this.value);
                      },
                    },
                    {
                      key: "toHexString",
                      value: function () {
                        var e = void 0;
                        return (
                          (e =
                            40 === this.value.length
                              ? this.value
                              : Ft(this.value)),
                          Te(e)
                        );
                      },
                    },
                    {
                      key: "serialize",
                      value: function () {
                        return 40 === this.value.length
                          ? this.value
                          : Ft(this.value);
                      },
                    },
                    {
                      key: "getB58Checksum",
                      value: function () {
                        var e = this.toBase58();
                        return _e(ne.SHA256(e).toString()).slice(0, 8);
                      },
                    },
                  ]),
                  e
                );
              })();
            function Jt(e) {
              var r = I + e,
                n = r + _e(_e(r)).slice(0, 8);
              return re.encode(new t(n, "hex"));
            }
            function Ft(e) {
              var t = ge(re.decode(e)).substr(2, 40);
              if (e !== Jt(t))
                throw new Error("[addressToU160] decode encoded verify failed");
              return t;
            }
            var qt = n(3),
              jt = n.n(qt),
              Yt = n(6),
              Qt = n.n(Yt),
              Xt = n(31),
              Zt = n(17),
              $t = n(37);
            function er(e, r, n) {
              var a = [];
              return (
                $t(
                  e.normalize("NFC"),
                  pe(r),
                  { N: n.cost, r: n.blockSize, p: n.parallel, dkLen: n.size },
                  function (e) {
                    a = e;
                  },
                ),
                new t(a)
              );
            }
            function tr(e, r, n) {
              var a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : N,
                i = st.deserializeHex(new Ce(r)),
                u = er(n, Wt.fromPubKey(i).getB58Checksum(), a).toString("hex"),
                s = u.slice(0, 32),
                o = u.slice(64),
                c = ne.enc.Hex.parse(s),
                l = ne.AES.encrypt(ne.enc.Hex.parse(e), ne.enc.Hex.parse(o), {
                  mode: ne.mode.CTR,
                  padding: ne.pad.NoPadding,
                  iv: c,
                }).ciphertext.toString();
              return new t(l, "hex").toString("base64");
            }
            function rr(e, r, n) {
              var a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : N,
                i = t.from(e, "base64").toString("hex"),
                u = "";
              if ("string" == typeof n && 8 === n.length) u = n;
              else {
                if (!(n instanceof Wt)) throw m.INVALID_PARAMS;
                u = n.getB58Checksum();
              }
              var s = er(r, u, a).toString("hex"),
                o = s.slice(0, 32),
                c = s.slice(64),
                l = ne.enc.Hex.parse(o),
                h = { ciphertext: ne.enc.Hex.parse(i), salt: "", iv: "" };
              return ne.AES.decrypt(h, ne.enc.Hex.parse(c), {
                mode: ne.mode.CTR,
                padding: ne.pad.NoPadding,
                iv: l,
              }).toString();
            }
            function nr(e, t) {
              var r = "";
              if ("string" == typeof e && 8 === e.length) r = e;
              else {
                if (!(e instanceof Wt)) throw m.INVALID_PARAMS;
                r = e.getB58Checksum();
              }
              var n = st.deserializeHex(new Ce(t));
              if (Wt.fromPubKey(n).getB58Checksum() !== r)
                throw (console.log("keyphrase error."), m.Decrypto_ERROR);
            }
            function ar(e, r, n) {
              var a =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : N,
                i = st.deserializeHex(new Ce(r)),
                u = Wt.fromPubKey(i).getB58Checksum(),
                s = er(n, u, a).toString("hex"),
                o = s.slice(0, 64),
                c = s.slice(64),
                l = Ee(e, o),
                h = ne.AES.encrypt(ne.enc.Hex.parse(l), ne.enc.Hex.parse(c), {
                  mode: ne.mode.ECB,
                  padding: ne.pad.NoPadding,
                }),
                f = C + B + u + h.ciphertext.toString();
              return re.encode(t.from(f, "hex"));
            }
            function ir(e, t) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : N,
                n = ge(re.decode(e)),
                a = n.substr(6, 8),
                i = n.substr(-64),
                u = er(t, a, r).toString("hex"),
                s = u.slice(0, 64),
                o = u.slice(64),
                c = { ciphertext: ne.enc.Hex.parse(i), salt: "", iv: "" };
              return Ee(
                ne.AES.decrypt(c, ne.enc.Hex.parse(o), {
                  mode: ne.mode.ECB,
                  padding: ne.pad.NoPadding,
                }).toString(),
                s,
              );
            }
            function ur(e, t, r) {
              var n = ge(re.decode(e)).substr(6, 8),
                a = st.deserializeHex(new Ce(r));
              if (Wt.fromPubKey(a).getB58Checksum() !== n)
                throw (console.log("keyphrase error."), m.Decrypto_ERROR);
            }
            function sr(e, r, n, a) {
              var i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : N;
              if (!Je(e))
                throw new Error(m.INVALID_PARAMS + ", Invalid private key");
              var u = er(a, n, i),
                s = u.slice(0, 12),
                o = u.slice(32),
                c = s,
                l = new t(r.toBase58()),
                h = Object(Zt.createCipheriv)("aes-256-gcm", o, c);
              h.setAAD(l);
              var f = t.from(e, "hex"),
                d = h.update(f),
                v = h.final(),
                y = h.getAuthTag();
              return (
                (d = t.concat([d, v])),
                t.concat([d, y]).toString("base64")
              );
            }
            function or(e, r, n, a) {
              var i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : N;
              if (32 !== n.length) throw m.INVALID_PARAMS;
              var u = t.from(e, "base64"),
                s = u.slice(0, u.length - 16),
                o = u.slice(u.length - 16),
                c = er(a, n, i),
                l = c.slice(0, 12),
                h = c.slice(32),
                f = l,
                d = new t(r.toBase58()),
                v = Object(Zt.createDecipheriv)("aes-256-gcm", h, f);
              (v.setAAD(d), v.setAuthTag(o));
              var y = v.update(s).toString("hex");
              try {
                y += v.final().toString("hex");
              } catch (e) {
                throw m.Decrypto_ERROR;
              }
              return y;
            }
            var cr = n(15),
              lr = (function () {
                function e(t, r, n) {
                  (A()(this, e),
                    (this.algorithm = t),
                    (this.value = r),
                    (this.publicKeyId = n));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserializeJWT",
                      value: function (t, r, n) {
                        return new e(r, cr.decode(t, "hex"), n);
                      },
                    },
                    {
                      key: "deserializePgp",
                      value: function (r) {
                        var n = new t(r.Value, "base64").toString("hex"),
                          a = e.deserializeHex(n).value;
                        return new e(Ye.fromLabel(r.Algorithm), a);
                      },
                    },
                    {
                      key: "deserializeHex",
                      value: function (t) {
                        if (t.length < 4) throw new Error("Invalid params.");
                        var r = new Ce(t),
                          n = parseInt(r.read(1), 16);
                        return new e(Ye.fromHex(n), t.substr(2));
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "serializeHex",
                      value: function () {
                        var e = "";
                        return ((e += Re(this.algorithm.hex)), e + this.value);
                      },
                    },
                    {
                      key: "serializePgp",
                      value: function (e) {
                        return {
                          PublicKeyId: e,
                          Format: "pgp",
                          Value: new t(this.serializeHex(), "hex").toString(
                            "base64",
                          ),
                          Algorithm: this.algorithm.label,
                        };
                      },
                    },
                    {
                      key: "serializeJWT",
                      value: function () {
                        return cr.encode(this.value, "hex");
                      },
                    },
                  ]),
                  e
                );
              })(),
              hr = n(29),
              fr = (function (e) {
                function r() {
                  return (
                    A()(this, r),
                    et()(this, (r.__proto__ || Ze()(r)).apply(this, arguments))
                  );
                }
                return (
                  rt()(r, e),
                  x()(
                    r,
                    [
                      {
                        key: "sign",
                        value: function (e, t, r) {
                          if (
                            (void 0 === t && (t = this.algorithm.defaultSchema),
                            !this.isSchemaSupported(t))
                          )
                            throw new Error(
                              "Signature schema does not match key type.",
                            );
                          "string" != typeof e && (e = e.getSignContent());
                          var n = void 0;
                          n = t === Ye.SM2withSM3 ? e : this.computeHash(e, t);
                          var a = this.computeSignature(n, t);
                          return new lr(t, a, r);
                        },
                      },
                      {
                        key: "signAsync",
                        value: (function () {
                          var e = Qt()(
                            jt.a.mark(function e(t, r, n) {
                              return jt.a.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return e.abrupt(
                                          "return",
                                          this.sign(t, r, n),
                                        );
                                      case 1:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                              );
                            }),
                          );
                          return function (t, r, n) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getPublicKey",
                        value: function () {
                          switch (this.algorithm) {
                            case Qe.ECDSA:
                              return this.getEcDSAPublicKey();
                            case Qe.EDDSA:
                              return this.getEdDSAPublicKey();
                            case Qe.SM2:
                              return this.getSM2PublicKey();
                            default:
                              throw new Error("Unsupported signature schema.");
                          }
                        },
                      },
                      {
                        key: "decrypt",
                        value: function (e, n, a, i) {
                          24 === a.length &&
                            We(a) &&
                            (a = t.from(a, "base64").toString("hex"));
                          var u = new r(
                              or(this.key, n, a, e, i),
                              this.algorithm,
                              this.parameters,
                            ),
                            s = u.getPublicKey();
                          if (Wt.fromPubKey(s).toBase58() !== n.toBase58())
                            throw m.Decrypto_ERROR;
                          return u;
                        },
                      },
                      {
                        key: "encrypt",
                        value: function (e, t, n, a) {
                          var i = this.getPublicKey();
                          if (Wt.fromPubKey(i).toBase58() !== t.toBase58())
                            throw m.INVALID_ADDR;
                          return new r(
                            sr(this.key, t, n, e, a),
                            this.algorithm,
                            this.parameters,
                          );
                        },
                      },
                      {
                        key: "getEcDSAPublicKey",
                        value: function () {
                          var e = new ie.ec(this.parameters.curve.preset)
                            .keyFromPrivate(this.key, "hex")
                            .getPublic(!0, "hex");
                          return new st(e, this.algorithm, this.parameters);
                        },
                      },
                      {
                        key: "getEdDSAPublicKey",
                        value: function () {
                          var e = new ie.eddsa(this.parameters.curve.preset)
                            .keyFromSecret(this.key, "hex")
                            .getPublic(!0, "hex");
                          return new st(e, this.algorithm, this.parameters);
                        },
                      },
                      {
                        key: "getSM2PublicKey",
                        value: function () {
                          var e = ue.sm2
                            .SM2KeyPair(null, this.key)
                            .pubToString("compress");
                          return new st(e, this.algorithm, this.parameters);
                        },
                      },
                      {
                        key: "computeSignature",
                        value: function (e, t) {
                          switch (t) {
                            case Ye.ECDSAwithSHA224:
                            case Ye.ECDSAwithSHA256:
                            case Ye.ECDSAwithSHA384:
                            case Ye.ECDSAwithSHA512:
                            case Ye.ECDSAwithSHA3_224:
                            case Ye.ECDSAwithSHA3_256:
                            case Ye.ECDSAwithSHA3_384:
                            case Ye.ECDSAwithSHA3_512:
                            case Ye.ECDSAwithRIPEMD160:
                              return this.computeEcDSASignature(e);
                            case Ye.EDDSAwithSHA512:
                              return this.computeEdDSASignature(e);
                            case Ye.SM2withSM3:
                              return this.computeSM2Signature(e);
                            default:
                              throw new Error("Unsupported signature schema.");
                          }
                        },
                      },
                      {
                        key: "computeEcDSASignature",
                        value: function (e) {
                          var r = new ie.ec(this.parameters.curve.preset).sign(
                            e,
                            this.key,
                            { canonical: !0 },
                          );
                          return t
                            .concat([
                              r.r.toArrayLike(t, "be", 32),
                              r.s.toArrayLike(t, "be", 32),
                            ])
                            .toString("hex");
                        },
                      },
                      {
                        key: "computeEdDSASignature",
                        value: function (e) {
                          return new ie.eddsa(this.parameters.curve.preset)
                            .sign(e, this.key)
                            .toHex()
                            .toLowerCase();
                        },
                      },
                      {
                        key: "computeSM2Signature",
                        value: function (e) {
                          var t = ue.sm2.SM2KeyPair(null, this.key).sign(pe(e));
                          return Se(H + "\0") + t.r + t.s;
                        },
                      },
                      {
                        key: "serializeWIF",
                        value: function () {
                          return Xt.encode(128, t.from(this.key, "hex"), !0);
                        },
                      },
                    ],
                    [
                      {
                        key: "random",
                        value: function (e, t) {
                          return (
                            void 0 === e && (e = Qe.fromLabel(O.algorithm)),
                            void 0 === t &&
                              (t = it.deserializeJson(O.parameters)),
                            new r(ge(ye(32)), e, t)
                          );
                        },
                      },
                      {
                        key: "deserializeWIF",
                        value: function (e) {
                          return new r(ge(Xt.decode(e, 128).privateKey));
                        },
                      },
                      {
                        key: "generateFromMnemonic",
                        value: function (e) {
                          var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : Y;
                          if (e.split(" ").length < 12) throw m.INVALID_PARAMS;
                          var a = T.mnemonicToSeedHex(e),
                            i = hr.fromMasterSeed(t.from(a, "hex")).derive(n);
                          return new r(t.from(i.privateKey).toString("hex"));
                        },
                      },
                    ],
                  ),
                  r
                );
              })(ut),
              dr = [],
              vr = new ((function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, [
                    {
                      key: "getType",
                      value: function () {
                        return "";
                      },
                    },
                    {
                      key: "deserialize",
                      value: function (e) {
                        if (null != e.key)
                          return new fr(
                            e.key,
                            Qe.fromLabel(e.algorithm),
                            it.deserializeJson(e.parameters),
                          );
                        throw new Error("Unsupported Key type.");
                      },
                    },
                  ]),
                  e
                );
              })())();
            function yr(e) {
              dr.push(e);
            }
            function pr(e) {
              if (null == e.external) return vr.deserialize(e);
              var t = !0,
                r = !1,
                n = void 0;
              try {
                for (var a, i = te()(dr); !(t = (a = i.next()).done); t = !0) {
                  var u = a.value;
                  if (u.getType() === e.external.type) return u.deserialize(e);
                }
              } catch (e) {
                ((r = !0), (n = e));
              } finally {
                try {
                  !t && i.return && i.return();
                } finally {
                  if (r) throw n;
                }
              }
              throw new Error("Unsupported Key type.");
            }
            var gr,
              mr = n(36),
              wr = (function () {
                function e(t) {
                  (A()(this, e),
                    (this.param = new Ar(t)),
                    (this.sk = new xr(this.param)));
                }
                return (
                  x()(e, [
                    {
                      key: "GenerateSk",
                      value: function () {
                        return (this.sk.Rand(), this.sk);
                      },
                    },
                    {
                      key: "GenerateKeyPair",
                      value: function () {
                        ((this.sk = xr.GenerateSk(this.param)),
                          (this.pk = this.sk.GenerateIssuerPublicKey()));
                      },
                    },
                    {
                      key: "SetAttributeSet",
                      value: function (e) {
                        ((this.AttributeName = e), this.pk.GenerateAttr(e));
                      },
                    },
                    {
                      key: "Sign",
                      value: function (e, t) {
                        var r = this.param.getRandBN(),
                          n = this.param.getRandBN(),
                          a = new this.param.ECP();
                        (a.copy(this.param.g1),
                          a.add(this.param.PAIR.G1mul(this.pk.h0, n)),
                          a.add(e));
                        for (var i = 0; i < this.pk.attr.length; i++)
                          a.add(this.param.PAIR.G1mul(this.pk.h[i], t[i]));
                        var u = new this.param.ECP(),
                          s = new this.param.BIG();
                        (s.copy(r),
                          s.add(this.sk.value),
                          s.invmodp(this.param.order),
                          (u = this.param.PAIR.G1mul(a, s)));
                        var o = new Er(this.param);
                        return (o.Set(u, a, r, n, t), o);
                      },
                    },
                    {
                      key: "GetPk",
                      value: function () {
                        return br.COPY(this.pk);
                      },
                    },
                    {
                      key: "GenerateNonce",
                      value: function () {
                        return this.param.getRandBN();
                      },
                    },
                    {
                      key: "VerifyCredentialRequest",
                      value: function (e) {
                        return this.pk.VerifyCredentialRequest(e);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Sr = (function () {
                function e(t) {
                  (A()(this, e), (this.param = new Ar(t)));
                }
                return (
                  x()(e, [
                    {
                      key: "GenerateSk",
                      value: function () {
                        return ((this.sk = xr.GenerateSk(this.param)), this.sk);
                      },
                    },
                    {
                      key: "SetIpk",
                      value: function (e) {
                        this.ipk = br.COPY(e);
                      },
                    },
                    {
                      key: "GenerateCrendentialRequest",
                      value: function (e) {
                        if (void 0 !== this.ipk) {
                          var t = this.ipk,
                            r = this.param.PAIR.G1mul(t.h_sk, this.sk.value),
                            n = this.param.getRandBN(),
                            a = this.param.PAIR.G1mul(t.h_sk, n),
                            i = this.param.hashToBN(a, t.h_sk, r, e),
                            u = this.param.BIG.modmul(
                              i,
                              this.sk.value,
                              this.param.order,
                            );
                          (u.add(n), u.mod(this.param.order));
                          var s = { C: i, S: u },
                            o = this.param.genAttrBN(t.attr);
                          return (
                            (this.Nym = r),
                            (this.attrs = o),
                            { Nym: r, pi: s, nonce: e, attrs: o }
                          );
                        }
                        console.log("Please set ipk first.");
                      },
                    },
                    {
                      key: "VerifyBBSplus",
                      value: function (e) {
                        var t = new this.param.ECP2();
                        (t.copy(this.ipk.w),
                          t.add(this.param.PAIR.G2mul(this.param.g2, e.sig.e)),
                          t.affine());
                        var r = new this.param.ECP();
                        (r.copy(e.sig.A), r.affine());
                        var n = this.param.PAIR.ate(t, r);
                        n = this.param.PAIR.fexp(n);
                        var a = new this.param.ECP();
                        (a.copy(this.param.g1),
                          a.add(this.param.PAIR.G1mul(this.ipk.h0, e.sig.s)),
                          a.add(this.Nym));
                        for (var i = 0; i < e.attrs.length; i++)
                          a.add(
                            this.param.PAIR.G1mul(this.ipk.h[i], e.attrs[i]),
                          );
                        a.affine();
                        var u = this.param.PAIR.ate(this.param.g2, a);
                        return ((u = this.param.PAIR.fexp(u)), n.equals(u));
                      },
                    },
                    {
                      key: "SetCredential",
                      value: function (e) {
                        return (
                          (this.Cred = new Er(this.param)),
                          this.Cred.Copy(e),
                          !0
                        );
                      },
                    },
                    {
                      key: "Prove",
                      value: function (e) {
                        var t = this.ipk,
                          r = this.Cred,
                          n = this.param.getRandBN(),
                          a = this.param.PAIR.G1mul(r.sig.A, n),
                          i = new this.param.BIG(0);
                        (i.copy(n), i.invmodp(this.param.order));
                        var u = new this.param.BIG(0);
                        (u.copy(r.sig.e),
                          (u = this.param.BIG.modneg(u, this.param.order)));
                        var s = this.param.PAIR.G1mul(a, u);
                        s.add(this.param.PAIR.G1mul(r.sig.B, n));
                        var o = this.param.getRandBN(),
                          c = new this.param.BIG(0);
                        (c.copy(o),
                          (c = this.param.BIG.modneg(c, this.param.order)));
                        var l = this.param.PAIR.G1mul(r.sig.B, n);
                        l.add(this.param.PAIR.G1mul(t.h0, c));
                        var h = this.param.BIG.modmul(o, i, this.param.order);
                        ((h = this.param.BIG.modneg(h, this.param.order)).add(
                          r.sig.s,
                        ),
                          h.mod(this.param.order));
                        for (var f = [], d = 0; d < e.length; d++)
                          0 === e[d]
                            ? (f[d] = this.param.getRandBN())
                            : (f[d] = !1);
                        var v = this.param.getRandBN(),
                          y = this.param.getRandBN(),
                          p = this.param.getRandBN(),
                          g = this.param.getRandBN(),
                          m = this.param.getRandBN(),
                          w = this.param.PAIR.G1mul(t.h_sk, m),
                          S = this.param.PAIR.G1mul(a, v);
                        S.add(this.param.PAIR.G1mul(t.h0, y));
                        var A = this.param.PAIR.G1mul(l, p);
                        (A.add(this.param.PAIR.G1mul(t.h0, g)),
                          A.add(
                            this.param.PAIR.G1mul(w, new this.param.BIG(-1)),
                          ));
                        for (var k = 0; k < f.length; k++)
                          !1 !== f[k] &&
                            A.add(this.param.PAIR.G1mul(t.h[k], f[k]));
                        var x = this.param.hashToBN(
                            a,
                            s,
                            l,
                            this.Nym,
                            S,
                            A,
                            this.param.g1,
                            t.h0,
                            t.h,
                            t.w,
                          ),
                          b = this.param.getRandBN(),
                          E = this.param.hashToBN(b, x, e, this.attrs),
                          R = new this.param.BIG(0);
                        (R.copy(m),
                          R.add(
                            this.param.BIG.modmul(
                              E,
                              this.sk.value,
                              this.param.order,
                            ),
                          ),
                          R.mod(this.param.order));
                        for (var P = [], T = 0; T < e.length; T++)
                          0 === e[T]
                            ? ((P[T] = new this.param.BIG(0)),
                              P[T].copy(f[T]),
                              P[T].sub(
                                this.param.BIG.modmul(
                                  E,
                                  this.attrs[T],
                                  this.param.order,
                                ),
                              ),
                              P[T].mod(this.param.order))
                            : (P[T] = !1);
                        var I = new this.param.BIG(0);
                        (I.copy(v),
                          I.sub(
                            this.param.BIG.modmul(E, r.sig.e, this.param.order),
                          ),
                          I.mod(this.param.order));
                        var N = new this.param.BIG(0);
                        (N.copy(y),
                          N.add(this.param.BIG.modmul(E, o, this.param.order)),
                          N.mod(this.param.order));
                        var C = new this.param.BIG(0);
                        (C.copy(p),
                          C.add(this.param.BIG.modmul(E, i, this.param.order)),
                          C.mod(this.param.order));
                        var B = new this.param.BIG(0);
                        (B.copy(g),
                          B.sub(this.param.BIG.modmul(E, h, this.param.order)),
                          B.mod(this.param.order));
                        var D = {
                          c: E,
                          s_sk: R,
                          s_a: P,
                          s_e: I,
                          s_r2: N,
                          s_r3: C,
                          s_s_: B,
                          nonce: b,
                        };
                        return { A_: a, _A: s, B_: l, Nym: this.Nym, pi: D };
                      },
                    },
                    {
                      key: "Verify",
                      value: function (e, t, r) {
                        var n = this.ipk,
                          a = new this.param.ECP(0);
                        if (e.A_.equals(a))
                          return (
                            console.log("A' == O return true, verify failed."),
                            !1
                          );
                        var i = new this.param.ECP();
                        i.copy(e.A_);
                        var u = new this.param.ECP2();
                        u.copy(n.w);
                        var s = new this.param.ECP();
                        s.copy(e._A);
                        var o = new this.param.ECP2();
                        (o.copy(this.param.g2),
                          i.affine(),
                          u.affine(),
                          s.affine(),
                          o.affine());
                        var c = this.param.PAIR.ate(u, i),
                          l = this.param.PAIR.ate(o, s);
                        if (
                          ((c = this.param.PAIR.fexp(c)),
                          (l = this.param.PAIR.fexp(l)),
                          !c.equals(l))
                        )
                          return (
                            console.log(
                              "e(A', w) == e(_A, g2) return false, verify failed.",
                            ),
                            !1
                          );
                        s.copy(e._A);
                        var h = this.param.PAIR.G1mul(i, e.pi.s_e);
                        (h.add(this.param.PAIR.G1mul(n.h0, e.pi.s_r2)),
                          s.sub(e.B_),
                          h.add(
                            this.param.PAIR.G1mul(
                              s,
                              this.param.BIG.modneg(e.pi.c, this.param.order),
                            ),
                          ));
                        var f = this.param.PAIR.G1mul(e.B_, e.pi.s_r3);
                        (f.add(this.param.PAIR.G1mul(n.h0, e.pi.s_s_)),
                          f.add(
                            this.param.PAIR.G1mul(
                              n.h_sk,
                              this.param.BIG.modneg(
                                e.pi.s_sk,
                                this.param.order,
                              ),
                            ),
                          ));
                        var d = new this.param.ECP();
                        d.copy(this.param.g1);
                        for (var v = 0; v < t.length; v++)
                          0 === t[v]
                            ? f.add(this.param.PAIR.G1mul(n.h[v], e.pi.s_a[v]))
                            : d.add(this.param.PAIR.G1mul(n.h[v], r[v]));
                        f.add(
                          this.param.PAIR.G1mul(
                            d,
                            this.param.BIG.modneg(e.pi.c, this.param.order),
                          ),
                        );
                        var y = this.param.hashToBN(
                            e.A_,
                            e._A,
                            e.B_,
                            e.Nym,
                            h,
                            f,
                            this.param.g1,
                            n.h0,
                            n.h,
                            n.w,
                          ),
                          p = this.param.hashToBN(e.pi.nonce, y, t, r);
                        return (
                          0 === this.param.BIG.comp(p, e.pi.c) ||
                          (console.log(
                            "c == H(nonce, H(A', _A, B', Nym, ~t1, ~t2, g1, HRand, h1, ... , hL, w), (D, I)) return false, verify failed.",
                          ),
                          !1)
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ar = (function () {
                function e(t) {
                  (A()(this, e),
                    (this.curve = t),
                    (this.ctx = new mr(t)),
                    (this.PAIR = this.ctx.PAIR),
                    (this.ECP = this.ctx.ECP),
                    (this.ECP2 = this.ctx.ECP2),
                    (this.BIG = this.ctx.BIG),
                    (this.rng = new this.ctx.RAND()),
                    (this.g1 = this.getG1Generator()),
                    (this.g2 = this.getG2Generator()),
                    (this.order = this.getOrder()));
                }
                return (
                  x()(e, [
                    {
                      key: "getG1Generator",
                      value: function () {
                        var e = new this.ctx.ECP(0),
                          t = new this.ctx.BIG(0),
                          r = new this.ctx.BIG(0);
                        return (
                          t.rcopy(this.ctx.ROM_CURVE.CURVE_Gx),
                          r.rcopy(this.ctx.ROM_CURVE.CURVE_Gy),
                          e.setxy(t, r),
                          e
                        );
                      },
                    },
                    {
                      key: "getG2Generator",
                      value: function () {
                        var e = new this.ctx.ECP2(0),
                          t = new this.ctx.BIG(0),
                          r = new this.ctx.BIG(0),
                          n = new this.ctx.FP2(0),
                          a = new this.ctx.FP2(0);
                        return (
                          t.rcopy(this.ctx.ROM_CURVE.CURVE_Pxa),
                          r.rcopy(this.ctx.ROM_CURVE.CURVE_Pxb),
                          n.bset(t, r),
                          t.rcopy(this.ctx.ROM_CURVE.CURVE_Pya),
                          r.rcopy(this.ctx.ROM_CURVE.CURVE_Pyb),
                          a.bset(t, r),
                          e.setxy(n, a),
                          e
                        );
                      },
                    },
                    {
                      key: "getOrder",
                      value: function () {
                        var e = new this.ctx.BIG(0);
                        return (e.rcopy(this.ctx.ROM_CURVE.CURVE_Order), e);
                      },
                    },
                    {
                      key: "getRandBN",
                      value: function () {
                        var e = Le(256);
                        return (
                          this.rng.clean(),
                          this.rng.seed(256, e),
                          this.BIG.randomnum(this.order, this.rng)
                        );
                      },
                    },
                    {
                      key: "getRandG1",
                      value: function () {
                        var e = this.getRandBN();
                        return this.PAIR.G1mul(this.g1, e);
                      },
                    },
                    {
                      key: "getRandG2",
                      value: function () {
                        var e = this.getRandBN();
                        return this.PAIR.G2mul(this.g2, e);
                      },
                    },
                    {
                      key: "hashToBN",
                      value: function () {
                        for (
                          var e = [],
                            t = [],
                            r = arguments.length,
                            n = Array(r),
                            a = 0;
                          a < r;
                          a++
                        )
                          n[a] = arguments[a];
                        n.forEach(function (r) {
                          Array.isArray(r)
                            ? "number" == typeof r[0]
                              ? ((e = e.concat(r)), (t = []))
                              : r.forEach(function (r) {
                                  (r.toBytes(t), (e = e.concat(t)), (t = []));
                                })
                            : (r.toBytes(t), (e = e.concat(t)), (t = []));
                        });
                        var i = new this.ctx.HASH256();
                        i.process_array(e);
                        var u = i.hash(),
                          s = this.BIG.fromBytes(u);
                        return (s.mod(this.order), s);
                      },
                    },
                    {
                      key: "genAttrBN",
                      value: function (e) {
                        for (var t = [], r = 0; r < e.length; r++) {
                          var n = this.getRandBN();
                          t[r] = n;
                        }
                        return t;
                      },
                    },
                    {
                      key: "genAttrElement",
                      value: function (e) {
                        for (var t = [], r = 0; r < e.length; r++) {
                          var n = this.getRandG1();
                          t[r] = n;
                        }
                        return t;
                      },
                    },
                  ]),
                  e
                );
              })(),
              kr = function e(t) {
                (A()(this, e), (this.param = t));
              },
              xr = (function (e) {
                function t(e) {
                  A()(this, t);
                  var r = et()(this, (t.__proto__ || Ze()(t)).call(this, e));
                  return ((r.value = new r.param.BIG(0)), r);
                }
                return (
                  rt()(t, e),
                  x()(t, null, [
                    {
                      key: "GenerateSk",
                      value: function (e) {
                        var r = e.getRandBN(),
                          n = new t(e);
                        return (n.setValue(r), n);
                      },
                    },
                  ]),
                  x()(t, [
                    {
                      key: "setValue",
                      value: function (e) {
                        this.value.copy(e);
                      },
                    },
                    {
                      key: "GenerateIssuerPublicKey",
                      value: function () {
                        var e = this.value,
                          t = this.param.PAIR.G2mul(this.param.g2, e),
                          r = this.param.getRandBN(),
                          n = this.param.PAIR.G1mul(this.param.g1, r),
                          a = this.param.PAIR.G1mul(n, e);
                        r = this.param.getRandBN();
                        var i = this.param.PAIR.G2mul(this.param.g2, r),
                          u = this.param.PAIR.G1mul(n, r),
                          s = this.param.hashToBN(i, u, this.param.g2, n, t, a),
                          o = this.param.BIG.modmul(s, e, this.param.order);
                        (o.add(r), o.mod(this.param.order));
                        var c = { C: s, S: o },
                          l = new br(this.param);
                        return (l.SetBasicValue(t, n, a, c), l);
                      },
                    },
                    {
                      key: "ToBytes",
                      value: function () {
                        return void 0 === this.value
                          ? ""
                          : this.value.toBytes();
                      },
                    },
                    {
                      key: "FromBytes",
                      value: function (e) {
                        return (
                          (this.value = this.param.BIG.fromBytes(e)),
                          this.value.toString()
                        );
                      },
                    },
                    {
                      key: "Rand",
                      value: function () {
                        var e = this.param.getRandBN();
                        this.setValue(e);
                      },
                    },
                  ]),
                  t
                );
              })(kr),
              br = (function (e) {
                function t(e) {
                  A()(this, t);
                  var r = et()(this, (t.__proto__ || Ze()(t)).call(this, e));
                  ((r.w = new r.param.ECP2()),
                    (r._g1 = new r.param.ECP()),
                    (r._g2 = new r.param.ECP()));
                  var n = new r.param.BIG(),
                    a = new r.param.BIG();
                  return (
                    (r.pi = { C: n, S: a }),
                    (r.h0 = new r.param.ECP()),
                    (r.h_sk = new r.param.ECP()),
                    (r.attr = []),
                    r
                  );
                }
                return (
                  rt()(t, e),
                  x()(t, null, [
                    {
                      key: "COPY",
                      value: function (e) {
                        var r = new t(e.param);
                        return (
                          r.SetBasicValue(e.w, e._g1, e._g2, e.pi),
                          r.SetAttrValue(e.h0, e.h_sk, e.h, e.attr),
                          r
                        );
                      },
                    },
                  ]),
                  x()(t, [
                    {
                      key: "SetBasicValue",
                      value: function (e, t, r, n) {
                        (this.w.copy(e),
                          this._g1.copy(t),
                          this._g2.copy(r),
                          this.pi.C.copy(n.C),
                          this.pi.S.copy(n.S));
                      },
                    },
                    {
                      key: "SetAttrValue",
                      value: function (e, t, r, n) {
                        (this.h0.copy(e),
                          this.h_sk.copy(t),
                          (this.h = []),
                          (this.attr = []));
                        for (var a = 0; a < r.length; a++)
                          ((this.h[a] = new this.param.ECP()),
                            this.h[a].copy(r[a]));
                        for (var i = 0; i < n.length; i++) this.attr[i] = n[i];
                      },
                    },
                    {
                      key: "GenerateAttr",
                      value: function (e) {
                        var t = this.param.genAttrElement(e),
                          r = this.param.getRandG1(),
                          n = this.param.getRandG1(),
                          a = [];
                        (t.forEach(function (e) {
                          a.push(e);
                        }),
                          (this.h0 = r),
                          (this.h_sk = n),
                          (this.h = a),
                          (this.attr = e));
                      },
                    },
                    {
                      key: "VerifyCredentialRequest",
                      value: function (e) {
                        var t = new this.param.BIG(0);
                        t.copy(e.pi.C);
                        var r = this.param.PAIR.G1mul(this.h_sk, e.pi.S);
                        r.add(
                          this.param.PAIR.G1mul(
                            e.Nym,
                            this.param.BIG.modneg(t, this.param.order),
                          ),
                        );
                        var n = this.param.hashToBN(
                          r,
                          this.h_sk,
                          e.Nym,
                          e.nonce,
                        );
                        return 0 === this.param.BIG.comp(e.pi.C, n);
                      },
                    },
                  ]),
                  t
                );
              })(kr),
              Er = (function (e) {
                function t(e) {
                  A()(this, t);
                  var r = et()(this, (t.__proto__ || Ze()(t)).call(this, e)),
                    n = new r.param.ECP(),
                    a = new r.param.ECP(),
                    i = new r.param.BIG(),
                    u = new r.param.BIG();
                  return (
                    (r.sig = { A: n, B: a, e: i, s: u }),
                    (r.attrs = []),
                    r
                  );
                }
                return (
                  rt()(t, e),
                  x()(t, [
                    {
                      key: "Set",
                      value: function (e, t, r, n, a) {
                        (this.sig.A.copy(e),
                          this.sig.B.copy(t),
                          this.sig.e.copy(r),
                          this.sig.s.copy(n));
                        for (var i = 0; i < a.length; i++)
                          ((this.attrs[i] = new this.param.BIG()),
                            this.attrs[i].copy(a[i]));
                      },
                    },
                    {
                      key: "Copy",
                      value: function (e) {
                        this.Set(e.sig.A, e.sig.B, e.sig.e, e.sig.s, e.attrs);
                      },
                    },
                  ]),
                  t
                );
              })(kr),
              Rr = n(30),
              Pr = (function () {
                function e(r) {
                  (A()(this, e),
                    (this.encAlg = "aes-256-cbc"),
                    (this.hashAlg = "sha256"),
                    (this.digestSize = 32),
                    (this.keyFormat = "hex"),
                    (this.compact = !0));
                  var n = r || "p256";
                  ((this.ec = new ie.ec(n)),
                    (this.keyPair = this.ec.genKeyPair()),
                    (this.iv = t.alloc(0)));
                }
                return (
                  x()(e, [
                    {
                      key: "generateKeyPair",
                      value: function () {
                        return (
                          (this.keyPair = this.ec.genKeyPair()),
                          {
                            priv: this.keyPair.getPrivate("hex"),
                            pub: this.keyPair.getPublic(this.compact, "hex"),
                          }
                        );
                      },
                    },
                    {
                      key: "setKeyPair",
                      value: function (e) {
                        this.keyPair = this.ec.keyFromPrivate(e, "hex");
                      },
                    },
                    {
                      key: "getKeyPair",
                      value: function () {
                        return {
                          priv: this.keyPair.getPrivate("hex"),
                          pub: this.keyPair.getPublic(this.compact, "hex"),
                        };
                      },
                    },
                    {
                      key: "enc",
                      value: function (e, r, n, a) {
                        var i = this.ec.keyFromPublic(e, "hex").getPublic(),
                          u = this.ec.genKeyPair(),
                          s = u.getPrivate(),
                          o = u.getPublic(),
                          c = i.mul(s),
                          l = o.encode("hex"),
                          h = c.getX().toString("hex"),
                          f = t.from(l + h, "hex"),
                          d = this.kdf2(
                            f,
                            8 * n,
                            this.digestSize,
                            this.hashAlg,
                          );
                        if (d) {
                          var v = t.concat(d),
                            y = t.alloc(16);
                          a ? (y = t.from(a, "hex")) : Zt.randomFillSync(y);
                          var p = this.encAlg,
                            g = Zt.createCipheriv(p, v, y);
                          g.setAutoPadding(!1);
                          var m =
                            g.update(Rr.pad(r), "binary", "hex") +
                            g.final("hex");
                          return {
                            iv: y.toString("hex"),
                            out: l,
                            msgCipher: m,
                          };
                        }
                      },
                    },
                    {
                      key: "dec",
                      value: function (e, r, n, a) {
                        var i = this.ec
                            .keyFromPublic(r, "hex")
                            .getPublic()
                            .mul(this.keyPair.getPrivate())
                            .getX()
                            .toString("hex"),
                          u = t.from(r + i, "hex"),
                          s = this.kdf2(
                            u,
                            8 * a,
                            this.digestSize,
                            this.hashAlg,
                          );
                        if (!s) return t.alloc(0);
                        var o = t.concat(s),
                          c = t.from(n, "hex"),
                          l = this.encAlg,
                          h = Zt.createDecipheriv(l, o, c);
                        h.setAutoPadding(!1);
                        var f =
                            h.update(e, "hex", "binary") + h.final("binary"),
                          d = Rr.unpad(t.from(f, "binary"));
                        return t.from(d);
                      },
                    },
                    {
                      key: "kdf2",
                      value: function (e, r, n, a) {
                        if (r < 0) return [];
                        for (
                          var i = Math.ceil(r / 8),
                            u = Math.ceil(i / n),
                            s = [],
                            o = i - (u - 1) * n,
                            c = 1;
                          c < u;
                        ) {
                          var l = Zt.createHash(a)
                            .update(t.concat([e, this.I2OSP(c, 4)]))
                            .digest();
                          ((s[c - 1] = t.alloc(o)), (s[c - 1] = l), c++);
                        }
                        var h = Zt.createHash(a)
                          .update(t.concat([e, this.I2OSP(c, 4)]))
                          .digest();
                        return ((s[c - 1] = t.alloc(o)), (s[c - 1] = h), s);
                      },
                    },
                    {
                      key: "I2OSP",
                      value: function (e, r) {
                        var n = t.allocUnsafe(r);
                        return (n.writeUIntBE(e, 0, r), n);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Tr = n(28),
              Ir = n.n(Tr),
              Nr = n(24),
              Cr = n.n(Nr),
              Br = (function () {
                function e(t) {
                  if (
                    (A()(this, e),
                    (t && t.length > 16) || (t && !/^[0-9]\d*$/.test(t)))
                  )
                    throw new Error("Invalid value." + t);
                  this.value = t || "0000000000000000";
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e(),
                          n = t.read(8);
                        for (n = Te(n); "00" === n.substr(0, 2); )
                          n = n.substring(2);
                        return (
                          (r.value = new se.BigNumber(n, 16).toString()),
                          r
                        );
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = new se.BigNumber(this.value).toString(16);
                        return (
                          (e =
                            e.length % 16 == 0
                              ? e
                              : ("0".repeat(16) + e).substring(e.length)),
                          Te(e)
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Dr = (function () {
                function e(t, r, n) {
                  (A()(this, e),
                    (this.name = t),
                    (this.returntype = r),
                    (this.parameters = n));
                }
                return (
                  x()(e, [
                    {
                      key: "getParameter",
                      value: function (e) {
                        var t = !0,
                          r = !1,
                          n = void 0;
                        try {
                          for (
                            var a, i = te()(this.parameters);
                            !(t = (a = i.next()).done);
                            t = !0
                          ) {
                            var u = a.value;
                            if (u.getName() === e) return u;
                          }
                        } catch (e) {
                          ((r = !0), (n = e));
                        } finally {
                          try {
                            !t && i.return && i.return();
                          } finally {
                            if (r) throw n;
                          }
                        }
                        return null;
                      },
                    },
                    {
                      key: "setParamsValue",
                      value: function () {
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        for (var n = 0, a = t.length; n < a; n++)
                          for (var i = 0; i < this.parameters.length; i++)
                            t[n].name === this.parameters[i].getName() &&
                              this.parameters[i].setValue(t[n]);
                      },
                    },
                    {
                      key: "toString",
                      value: function () {
                        var e = {
                          name: this.name,
                          returntype: this.returntype,
                          parameters: this.parameters,
                        };
                        return P()(e);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Or = function e() {
                A()(this, e);
              },
              Hr = (function (e) {
                function t() {
                  return (
                    A()(this, t),
                    et()(this, (t.__proto__ || Ze()(t)).apply(this, arguments))
                  );
                }
                return (
                  rt()(t, e),
                  x()(t, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        return (
                          (e += ke(this.code)),
                          (e += be(this.needStorage)),
                          (e += xe(this.name)),
                          (e += xe(this.version)),
                          (e += xe(this.author)),
                          (e += xe(this.email)),
                          e + xe(this.description)
                        );
                      },
                    },
                    {
                      key: "deserialize",
                      value: function (e) {
                        var t = e.readNextBytes();
                        this.code = t;
                        var r = e.read(1);
                        this.needStorage = "00" !== r;
                        var n = e.readNextBytes();
                        this.name = Ae(n);
                        var a = e.readNextBytes();
                        this.version = Ae(a);
                        var i = e.readNextBytes();
                        this.author = Ae(i);
                        var u = e.readNextBytes();
                        this.email = Ae(u);
                        var s = e.readNextBytes();
                        this.description = Ae(s);
                      },
                    },
                  ]),
                  t
                );
              })(Or),
              _r = (function (e) {
                function t() {
                  return (
                    A()(this, t),
                    et()(this, (t.__proto__ || Ze()(t)).call(this))
                  );
                }
                return (
                  rt()(t, e),
                  x()(t, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        return e + ke(this.code);
                      },
                    },
                    {
                      key: "deserialize",
                      value: function (e) {
                        var t = e.readNextBytes();
                        return ((this.code = t), this);
                      },
                    },
                  ]),
                  t
                );
              })(Or);
            !(function (e) {
              ((e[(e.Nonce = 0)] = "Nonce"),
                (e[(e.Script = 32)] = "Script"),
                (e[(e.DescriptionUrl = 129)] = "DescriptionUrl"),
                (e[(e.Description = 144)] = "Description"));
            })(gr || (gr = {}));
            var zr,
              Ur = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        if (((e += Re(this.usage)), this.usage === gr.Script))
                          e += this.data;
                        else {
                          if (
                            this.usage !== gr.DescriptionUrl &&
                            this.usage !== gr.Description &&
                            this.usage !== gr.Nonce
                          )
                            throw m.INVALID_PARAMS;
                          e += ke(this.data);
                        }
                        return e;
                      },
                    },
                    {
                      key: "deserialize",
                      value: function (e) {
                        var t = parseInt(e.read(1), 16),
                          r = e.readNextLen(),
                          n = e.read(r);
                        ((this.usage = t), (this.data = n));
                      },
                    },
                  ]),
                  e
                );
              })(),
              Lr = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "",
                            t = pt(this.sigData),
                            r = "";
                          if (0 === this.pubKeys.length)
                            throw new Error("No pubkeys in sig");
                          return (
                            (r =
                              1 === this.pubKeys.length
                                ? vt(this.pubKeys[0])
                                : yt(this.pubKeys, this.M)),
                            (e += ke(t)),
                            e + ke(r)
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new e(),
                            n = t.readNextBytes(),
                            a = t.readNextBytes(),
                            i = (function (e) {
                              for (var t = [], r = new Ce(e); !r.isEmpty(); )
                                t.push(mt(r));
                              return t;
                            })(n),
                            u = (function (e) {
                              var t = new kt(),
                                r = parseInt(e.substr(-2, 2), 16);
                              if (r === ae.CHECKSIG) {
                                var n = wt(new Ce(e));
                                return ((t.M = 1), (t.pubKeys = [n]), t);
                              }
                              if (r === ae.CHECKMULTISIG) {
                                var a = new Ce(e),
                                  i = parseInt(a.read(1), 16) - ae.PUSH1 + 1,
                                  u =
                                    parseInt(e.substr(-4, 2), 16) -
                                    ae.PUSH1 +
                                    1;
                                ((t.M = i), (t.pubKeys = []));
                                for (var s = 0; s < u; s++) {
                                  var o = wt(a);
                                  t.pubKeys.push(o);
                                }
                                return t;
                              }
                              throw new Error("Unsupported program.");
                            })(a);
                          return (
                            (r.M = u.M),
                            (r.pubKeys = u.pubKeys),
                            (r.sigData = i),
                            r
                          );
                        },
                      },
                      {
                        key: "create",
                        value: function (t, r, n) {
                          var a = new e();
                          return (
                            (a.M = 1),
                            (a.pubKeys = [r.getPublicKey()]),
                            (a.sigData = [r.sign(t, n).serializeHex()]),
                            a
                          );
                        },
                      },
                      {
                        key: "createAsync",
                        value: (function () {
                          var t = Qt()(
                            jt.a.mark(function t(r, n, a) {
                              var i;
                              return jt.a.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          ((i = new e()).M = 1),
                                          (i.pubKeys = [n.getPublicKey()]),
                                          (t.next = 5),
                                          n.signAsync(r, a)
                                        );
                                      case 5:
                                        return (
                                          (t.t0 = t.sent.serializeHex()),
                                          (i.sigData = [t.t0]),
                                          t.abrupt("return", i)
                                        );
                                      case 8:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this,
                              );
                            }),
                          );
                          return function (e, r, n) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                    ],
                  ),
                  e
                );
              })();
            (!(function (e) {
              ((e[(e.BookKeeper = 2)] = "BookKeeper"),
                (e[(e.Claim = 3)] = "Claim"),
                (e[(e.Deploy = 208)] = "Deploy"),
                (e[(e.Invoke = 209)] = "Invoke"),
                (e[(e.Enrollment = 4)] = "Enrollment"),
                (e[(e.Vote = 5)] = "Vote"));
            })(zr || (zr = {})),
              (function () {
                function e() {
                  A()(this, e);
                }
                x()(
                  e,
                  [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        return (
                          (e += this.amount.serialize()),
                          e + this.payer.serialize()
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e(),
                          n = Br.deserialize(t),
                          a = t.read(20);
                        return ((r.amount = n), (r.payer = new Wt(a)), r);
                      },
                    },
                  ],
                );
              })());
            var Mr = (function () {
                function e() {
                  (A()(this, e),
                    (this.type = 209),
                    (this.version = 0),
                    (this.txAttributes = []),
                    (this.sigs = []),
                    (this.nonce = ge(Le(4))),
                    (this.gasPrice = new Br()),
                    (this.gasLimit = new Br()),
                    (this.payer = new Wt(
                      "0000000000000000000000000000000000000000",
                    )));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          return (
                            this.serializeUnsignedData() +
                            this.serializeSignedData()
                          );
                        },
                      },
                      {
                        key: "serializeUnsignedData",
                        value: function () {
                          var e = "";
                          ((e += Re(this.version)),
                            (e += Re(this.type)),
                            (e += this.nonce),
                            (e += this.gasPrice.serialize()),
                            (e += this.gasLimit.serialize()),
                            (e += this.payer.serialize()),
                            (e += this.payload.serialize()),
                            (e += Re(this.txAttributes.length)));
                          for (var t = 0; t < this.txAttributes.length; t++)
                            e += this.txAttributes[t].serialize();
                          return e;
                        },
                      },
                      {
                        key: "serializeSignedData",
                        value: function () {
                          var e = "";
                          e += Re(this.sigs.length);
                          for (var t = 0; t < this.sigs.length; t++)
                            e += this.sigs[t].serialize();
                          return e;
                        },
                      },
                      {
                        key: "getSignContent",
                        value: function () {
                          var e = this.serializeUnsignedData(),
                            t = ne.enc.Hex.parse(e),
                            r = ne.SHA256(t).toString();
                          return ne.SHA256(ne.enc.Hex.parse(r)).toString();
                        },
                      },
                      {
                        key: "getHash",
                        value: function () {
                          return this.getSignContent();
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new e(),
                            n = new Ce(t);
                          ((r.version = parseInt(n.read(1), 16)),
                            (r.type = parseInt(n.read(1), 16)),
                            (r.nonce = n.read(4)),
                            (r.gasPrice = Br.deserialize(n)),
                            (r.gasLimit = Br.deserialize(n)),
                            (r.payer = new Wt(n.read(20))));
                          var a = void 0;
                          switch (r.type) {
                            case zr.Invoke:
                              a = new _r();
                              break;
                            case zr.Deploy:
                              a = new Hr();
                              break;
                            default:
                              a = new _r();
                          }
                          (a.deserialize(n),
                            (r.payload = a),
                            (r.txAttributes = []),
                            (r.sigs = []));
                          for (var i = n.readNextLen(), u = 0; u < i; u++) {
                            var s = new Ur();
                            (s.deserialize(n), r.txAttributes.push(s));
                          }
                          for (var o = n.readNextLen(), c = 0; c < o; c++)
                            r.sigs.push(Lr.deserialize(n));
                          return r;
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Kr = (function (e) {
                function t() {
                  return (
                    A()(this, t),
                    et()(this, (t.__proto__ || Ze()(t)).apply(this, arguments))
                  );
                }
                return (rt()(t, e), t);
              })(Mr);
            function Vr(e, t, r, n, a, i) {
              var u = "";
              ((u += t),
                (u += Bt(Se(e))),
                (u += Bt(r.serialize())),
                (u += Nt(0)),
                (u += Re(ae.SYSCALL)),
                (u += Bt(Se(q))));
              var s = new _r();
              s.code = u;
              var o = void 0;
              return (
                ((o =
                  "transfer" === e || "transferFrom" === e
                    ? new Kr()
                    : new Mr()).type = zr.Invoke),
                (o.payload = s),
                a && (o.gasLimit = new Br(a)),
                n && (o.gasPrice = new Br(n)),
                i && (o.payer = i),
                o
              );
            }
            function Gr(e) {
              var t = "";
              if ("string" == typeof e) t += Bt(e);
              else if ("boolean" == typeof e) t += It(e);
              else if ("number" == typeof e) t += Nt(e);
              else if (e instanceof se.BigNumber) t += Ct(e);
              else if (e instanceof Wt) t += Bt(e.serialize());
              else if (e instanceof Tt) {
                var r = !0,
                  n = !1,
                  a = void 0;
                try {
                  for (
                    var i, u = te()(e.list);
                    !(r = (i = u.next()).done);
                    r = !0
                  )
                    ((t += Gr(i.value)),
                      (t += Re(ae.DUPFROMALTSTACK)),
                      (t += Re(ae.SWAP)),
                      (t += Re(ae.APPEND)));
                } catch (e) {
                  ((n = !0), (a = e));
                } finally {
                  try {
                    !r && u.return && u.return();
                  } finally {
                    if (n) throw a;
                  }
                }
              }
              return t;
            }
            function Wr(e) {
              for (var t = "", r = e.length - 1; r >= 0; r--) {
                var n = e[r];
                if ("string" == typeof n) t += Bt(n);
                else if ("boolean" == typeof n) t += It(n);
                else if ("number" == typeof n) t += Nt(n);
                else if (n instanceof se.BigNumber) t += Ct(n);
                else if (n instanceof Wt) t += Bt(n.serialize());
                else if (n instanceof Tt) {
                  ((t += Nt(0)),
                    (t += Re(ae.NEWSTRUCT)),
                    (t += Re(ae.TOALTSTACK)));
                  var a = !0,
                    i = !1,
                    u = void 0;
                  try {
                    for (
                      var s, o = te()(n.list);
                      !(a = (s = o.next()).done);
                      a = !0
                    )
                      ((t += Gr(s.value)),
                        (t += Re(ae.DUPFROMALTSTACK)),
                        (t += Re(ae.SWAP)),
                        (t += Re(ae.APPEND)));
                  } catch (e) {
                    ((i = !0), (u = e));
                  } finally {
                    try {
                      !a && o.return && o.return();
                    } finally {
                      if (i) throw u;
                    }
                  }
                  t += Re(ae.FROMALTSTACK);
                } else
                  Array.isArray(n) &&
                    ((t += Wr(n)), (t += Nt(n.length)), (t += Re(ae.PACK)));
              }
              return t;
            }
            var Jr = "0000000000000000000000000000000000000001",
              Fr = "0000000000000000000000000000000000000002";
            function qr(e) {
              if (e === J.ONT) return new Wt(Jr);
              if (e === J.ONG) return new Wt(Fr);
              throw new Error("Error token type.");
            }
            function jr(e) {
              var t = new se.BigNumber(e);
              if (!t.isInteger() || t.lte(new se.BigNumber(0)))
                throw new Error("Amount is invalid.");
            }
            function Yr(e, t, r, n, a, i, u) {
              jr(n);
              var s = new se.BigNumber(n),
                o = new Tt();
              o.add(t, r, s);
              var c = [];
              c.push([o]);
              var l = qr(e),
                h = Vr("transfer", Wr(c), l, a, i);
              return (
                (h.tokenType = e),
                (h.from = t),
                (h.to = r),
                (h.amount = n),
                (h.method = "transfer"),
                (h.payer = u || t),
                h
              );
            }
            function Qr(e, t, r, n, a) {
              var i = [],
                u = !0,
                s = !1,
                o = void 0;
              try {
                for (var c, l = te()(t); !(u = (c = l.next()).done); u = !0) {
                  var h = c.value;
                  jr(h.value);
                  var f = new Tt();
                  (f.add(h.from, h.to, new se.BigNumber(h.value)), i.push(f));
                }
              } catch (e) {
                ((s = !0), (o = e));
              } finally {
                try {
                  !u && l.return && l.return();
                } finally {
                  if (s) throw o;
                }
              }
              var d = [];
              d.push(i);
              var v = Vr("transfer", Wr(d), qr(e), r, n);
              return (a && (v.payer = a), v);
            }
            function Xr(e, t, r, n, a, i) {
              if (r.length !== n.length) throw new Error("Params error.");
              for (var u = [], s = 0; s < r.length; s++) {
                jr(n[s]);
                var o = new Tt();
                (o.add(t, r[s], new se.BigNumber(n[s])), u.push(o));
              }
              var c = [];
              c.push(u);
              var l = qr(e),
                h = Vr("transfer", Wr(c), l, a, i);
              return ((h.payer = t), h);
            }
            function Zr(e, t, r, n, a, i) {
              jr(r);
              var u = new se.BigNumber(r),
                s = [],
                o = new Tt();
              (o.add(e, new Wt(Jr), t, u), s.push(o));
              var c = Vr("transferFrom", Wr(s), new Wt(Fr), a, i);
              return (
                (c.payer = n),
                (c.tokenType = "ONG"),
                (c.from = e),
                (c.to = t),
                (c.amount = r),
                (c.method = "transferFrom"),
                c
              );
            }
            function $r(e, t, r) {
              if ("ont" !== (e = e.toLowerCase()) && "ong" !== e)
                throw m.INVALID_PARAMS;
              var n = "";
              n = "ong" === e ? Fr : Jr;
              var a = [],
                i = new Tt();
              return (
                i.add(t, r),
                a.push(i),
                Vr("allowance", Wr(a), new Wt(n), "0", "0")
              );
            }
            function en(e, t) {
              if ("ont" !== (e = e.toLowerCase()) && "ong" !== e)
                throw m.INVALID_PARAMS;
              var r = "";
              return (
                (r = "ong" === e ? Fr : Jr),
                Vr("balanceOf", ke(t.serialize()), new Wt(r), "0", "0")
              );
            }
            function tn(e) {
              var t = Mr.deserialize(e),
                r = t.payload.serialize(),
                n = r.lastIndexOf("14000000000000000000000000000000000000000"),
                a = r.lastIndexOf("140000000000000000000000000000000000000002");
              if (n > 0 && "1" === r.substr(n + 41, 1)) t.tokenType = "ONT";
              else {
                if (!(n > 0 && "2" === r.substr(n + 41, 1)))
                  throw new Error("Not a transfer tx");
                t.tokenType = "ONG";
              }
              var i = Math.max(n, a),
                u = r.substring(0, i),
                s = u.indexOf("6a7cc86c") + 8;
              if ("51c1" === u.substr(s, 4)) {
                var o = u.substring(s + 6);
                t.method = Ae(o);
              } else {
                var c = u.substring(s + 2);
                t.method = Ae(c);
              }
              if ("transfer" === t.method) {
                var l = new Ce(u);
                l.pos += 10;
                var h = new Wt(l.read(20));
                ((t.from = h), (l.pos += 8));
                var f = new Wt(l.read(20));
                ((t.to = f), (l.pos += 6));
                var d = parseInt(l.read(1), 16);
                if ("6a7cc8" === l.str.substr(l.pos, 6)) t.amount = d - 80;
                else {
                  var v = je.fromHexstr(l.read(d)).value;
                  t.amount = new se.BigNumber(v).toString();
                }
              } else {
                if ("transferFrom" !== t.method)
                  throw new Error("Not a transfer tx");
                var y = new Ce(u);
                y.pos += 10;
                var p = new Wt(y.read(20));
                ((t.from = p), (y.pos += 56));
                var g = new Wt(y.read(20));
                ((t.to = g), (y.pos += 6));
                var m = parseInt(y.read(1), 16);
                if ("6a7cc8" === y.str.substr(y.pos, 6)) t.amount = m - 80;
                else {
                  var w = je.fromHexstr(y.read(m)).value;
                  t.amount = new se.BigNumber(w).toString();
                }
              }
              return t;
            }
            var rn = "0000000000000000000000000000000000000003",
              nn = {
                regIDWithPublicKey: "regIDWithPublicKey",
                regIDWithAttributes: "regIDWithAttributes",
                addAttributes: "addAttributes",
                removeAttribute: "removeAttribute",
                getAttributes: "getAttributes",
                getDDO: "getDDO",
                addKey: "addKey",
                removeKey: "removeKey",
                getPublicKeys: "getPublicKeys",
                addRecovery: "addRecovery",
                changeRecovery: "changeRecovery",
                getKeyState: "getKeyState",
              };
            function an(e, t, r, n, a) {
              var i = nn.regIDWithPublicKey;
              "did" === e.substr(0, 3) && (e = Se(e));
              var u = new Tt();
              return (
                u.add(e, t.serializeHex()),
                Vr(i, Wr([u]), new Wt(rn), r, n, a)
              );
            }
            function un(e, t, r, n, a, i) {
              var u = nn.regIDWithAttributes;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = t.length,
                o = new Tt();
              o.add(e, r.serializeHex(), s);
              var c = !0,
                l = !1,
                h = void 0;
              try {
                for (var f, d = te()(t); !(c = (f = d.next()).done); c = !0) {
                  var v = f.value,
                    y = Se(v.key),
                    p = Se(v.type),
                    g = Se(v.value);
                  o.add(y, p, g);
                }
              } catch (e) {
                ((l = !0), (h = e));
              } finally {
                try {
                  !c && d.return && d.return();
                } finally {
                  if (l) throw h;
                }
              }
              return Vr(u, Wr([o]), new Wt(rn), n, a, i);
            }
            function sn(e, t, r, n, a, i) {
              var u = nn.addAttributes;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = new Tt();
              s.add(e, t.length);
              var o = !0,
                c = !1,
                l = void 0;
              try {
                for (var h, f = te()(t); !(o = (h = f.next()).done); o = !0) {
                  var d = h.value,
                    v = Se(d.key),
                    y = Se(d.type),
                    p = Se(d.value);
                  s.add(v, y, p);
                }
              } catch (e) {
                ((c = !0), (l = e));
              } finally {
                try {
                  !o && f.return && f.return();
                } finally {
                  if (c) throw l;
                }
              }
              return (
                s.list.push(r.serializeHex()),
                Vr(u, Wr([s]), new Wt(rn), n, a, i)
              );
            }
            function on(e, t, r, n, a, i) {
              var u = nn.removeAttribute;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = new Tt();
              return (
                s.add(e, Se(t), r.serializeHex()),
                Vr(u, Wr([s]), new Wt(rn), n, a, i)
              );
            }
            function cn(e) {
              var t = nn.getAttributes;
              "did" === e.substr(0, 3) && (e = Se(e));
              var r = new Tt();
              return (r.add(e), Vr(t, Wr([r]), new Wt(rn)));
            }
            function ln(e) {
              var t = nn.getDDO;
              "did" === e.substr(0, 3) && (e = Se(e));
              var r = new Tt();
              return (r.add(e), Vr(t, Wr([r]), new Wt(rn)));
            }
            function hn(e, t, r, n, a, i) {
              var u = nn.addKey;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = e,
                o = t.serializeHex(),
                c = void 0;
              r instanceof st
                ? (c = r.serializeHex())
                : r instanceof Wt && (c = r.serialize());
              var l = new Tt();
              return (l.add(s, o, c), Vr(u, Wr([l]), new Wt(rn), n, a, i));
            }
            function fn(e, t, r, n, a, i) {
              var u = nn.removeKey;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = e,
                o = t.serializeHex(),
                c = void 0;
              r instanceof st
                ? (c = r.serializeHex())
                : r instanceof Wt && (c = r.serialize());
              var l = new Tt();
              return (l.add(s, o, c), Vr(u, Wr([l]), new Wt(rn), n, a, i));
            }
            function dn(e) {
              var t = nn.getPublicKeys;
              "did" === e.substr(0, 3) && (e = Se(e));
              var r = new Tt();
              return (r.add(e), Vr(t, Wr([r]), new Wt(rn)));
            }
            function vn(e, t, r, n, a, i) {
              var u = nn.addRecovery;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = e,
                o = t,
                c = r.serializeHex(),
                l = new Tt();
              return (l.add(s, o, c), Vr(u, Wr([l]), new Wt(rn), n, a, i));
            }
            function yn(e, t, r, n, a, i) {
              var u = nn.changeRecovery;
              "did" === e.substr(0, 3) && (e = Se(e));
              var s = e,
                o = t,
                c = r,
                l = new Tt();
              l.add(s, o, c);
              var h = Vr(u, Wr([l]), new Wt(rn), n, a);
              return ((h.payer = i || r), h);
            }
            function pn(e, t) {
              var r = nn.getKeyState;
              ("did" === e.substr(0, 3) && (e = Se(e)),
                console.log("did: " + e));
              var n = Re(t, 4, !0);
              console.log("index: " + n);
              var a = new Tt();
              return (a.add(e, t), Vr(r, Wr([a]), new Wt(rn)));
            }
            var gn,
              mn = {
                Action: "sendrawtransaction",
                Version: "1.0.0",
                Type: "",
                Op: "test",
              },
              wn = function (e, t, r) {
                var n = Lr.create(e, t, r);
                e.sigs = [n];
              },
              Sn =
                ((gn = Qt()(
                  jt.a.mark(function e(t, r, n) {
                    var a;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 2), Lr.createAsync(t, r, n));
                            case 2:
                              ((a = e.sent), (t.sigs = [a]));
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      void 0,
                    );
                  }),
                )),
                function (e, t, r) {
                  return gn.apply(this, arguments);
                }),
              An = function (e, t, r) {
                var n = Lr.create(e, t, r);
                e.sigs.push(n);
              },
              kn = function (e, t) {
                if (e === t) return !0;
                if ((e.sort(ct), t.sort(ct), e.length !== t.length)) return !1;
                for (var r = 0; r < e.length; r++)
                  if (e[r].key !== t[r].key) return !1;
                return !0;
              },
              xn = function (e, t, r, n, a) {
                if (0 === e.sigs.length) e.sigs = [];
                else {
                  if (
                    e.sigs.length > j ||
                    t > r.length ||
                    t <= 0 ||
                    0 === r.length
                  )
                    throw m.INVALID_PARAMS;
                  for (var i = 0; i < e.sigs.length; i++)
                    if (kn(e.sigs[i].pubKeys, r)) {
                      if (e.sigs[i].sigData.length + 1 > r.length)
                        throw new Error("Too many sigData");
                      var u = n.sign(e, a).serializeHex();
                      return void e.sigs[i].sigData.push(u);
                    }
                }
                var s = new Lr();
                ((s.M = t),
                  (s.pubKeys = r),
                  (s.sigData = [n.sign(e, a).serializeHex()]),
                  e.sigs.push(s));
              },
              bn = function (e, t, r, n, a, i) {
                var u =
                    !(arguments.length > 6 && void 0 !== arguments[6]) ||
                    arguments[6],
                  s = new Mr();
                s.type = zr.Invoke;
                var o = "";
                if ("string" == typeof t) o = t;
                else {
                  var c = new Dr(e, "", t);
                  o = zt(c, u);
                }
                var l = o + Re(ae.APPCALL);
                l += r.serialize();
                var h = new _r();
                return (
                  (h.code = l),
                  (s.payload = h),
                  a && (s.gasLimit = new Br(a)),
                  n && (s.gasPrice = new Br(n)),
                  i && (s.payer = i),
                  s
                );
              };
            function En(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "",
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "1.0",
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : "",
                a =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : "",
                i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : "",
                u =
                  !(arguments.length > 6 && void 0 !== arguments[6]) ||
                  arguments[6],
                s = arguments[7],
                o = arguments[8],
                c = arguments[9],
                l = new Hr();
              ((l.author = n),
                (l.code = e),
                (l.version = r),
                (l.description = i),
                (l.email = a),
                (l.name = t),
                (l.needStorage = u));
              var h = new Mr();
              return (
                (h.version = 0),
                (h.payload = l),
                (h.type = zr.Deploy),
                (h.gasLimit = new Br(o)),
                (h.gasPrice = new Br(s)),
                c && (h.payer = c),
                h
              );
            }
            function Rn(e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1]
                    ? { PreExec: "1" }
                    : {},
                r = e.serialize();
              return P()(Cr()({}, mn, { Data: r }, t));
            }
            function Pn(e, t) {
              var r = e.serialize();
              return {
                jsonrpc: "2.0",
                method: t || "sendrawtransaction",
                params: [r],
                id: 10,
              };
            }
            function Tn(e) {
              return {
                Action: "sendrawtransaction",
                Version: "1.0.0",
                Data: e.serialize(),
              };
            }
            function In(e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              "/" === e.charAt(e.length - 1) &&
                (e = e.substring(0, e.length - 1));
              var r = e + K.sendRawTx;
              return (t && (r += "?preExec=1"), r);
            }
            function Nn(e) {
              if (e.split(":").length < 2)
                throw new Error("Invalid parameter. " + e);
              var t = e.substring(0, e.indexOf(":")),
                r = e.substring(e.indexOf(":") + 1),
                n = new Pt("", t, r);
              return (
                n.type === St.Address &&
                  ((n.type = St.ByteArray),
                  (n.value = new Wt(n.value).serialize())),
                n
              );
            }
            function Cn(e) {
              var t = {},
                r = !0,
                n = !1,
                a = void 0;
              try {
                for (
                  var i, u = te()(bt()(e));
                  !(r = (i = u.next()).done);
                  r = !0
                ) {
                  var s = i.value,
                    o = e[s];
                  "number" == typeof o
                    ? (t[s] = new Pt("", St.Integer, o))
                    : "boolean" == typeof o
                      ? (t[s] = new Pt("", St.Boolean, o))
                      : Array.isArray(o)
                        ? (t[s] = new Pt("", St.Array, Bn(o)))
                        : "object" === (void 0 === o ? "undefined" : Ir()(o))
                          ? (t[s] = new Pt("", St.Map, Cn(o)))
                          : "string" == typeof o && (t[s] = Nn(o));
                }
              } catch (e) {
                ((n = !0), (a = e));
              } finally {
                try {
                  !r && u.return && u.return();
                } finally {
                  if (n) throw a;
                }
              }
              return t;
            }
            function Bn(e) {
              var t = [],
                r = !0,
                n = !1,
                a = void 0;
              try {
                for (var i, u = te()(e); !(r = (i = u.next()).done); r = !0) {
                  var s = i.value,
                    o = new Pt("", St.ByteArray, s);
                  ("number" == typeof s
                    ? (o.type = St.Integer)
                    : "boolean" == typeof s
                      ? (o.type = St.Boolean)
                      : Array.isArray(s)
                        ? ((o.type = St.Array), (o.value = Bn(s)))
                        : "object" === (void 0 === s ? "undefined" : Ir()(s))
                          ? ((o.type = St.Map), (o.value = Cn(s)))
                          : "string" == typeof s && (o = Nn(s)),
                    t.push(o));
                }
              } catch (e) {
                ((n = !0), (a = e));
              } finally {
                try {
                  !r && u.return && u.return();
                } finally {
                  if (n) throw a;
                }
              }
              return t;
            }
            function Dn(e) {
              var t = e.name,
                r = e.value,
                n = new Pt(t, St.ByteArray, r);
              return (
                "number" == typeof r
                  ? ((n.type = St.Integer), (n.value = Number(r)))
                  : "boolean" == typeof r
                    ? ((n.type = St.Boolean), (n.value = Boolean(r)))
                    : Array.isArray(r)
                      ? ((n.type = St.Array), (n.value = Bn(r)))
                      : "object" === (void 0 === r ? "undefined" : Ir()(r))
                        ? ((n.type = St.Map), (n.value = Cn(r)))
                        : "string" == typeof r && (n = Nn(r)),
                n
              );
            }
            function On(e) {
              var t = [],
                r = e.functions,
                n = !0,
                a = !1,
                i = void 0;
              try {
                for (var u, s = te()(r); !(n = (u = s.next()).done); n = !0) {
                  var o = u.value,
                    c = o.operation,
                    l = o.args,
                    h = [];
                  h.push(Se(c));
                  var f = [],
                    d = !0,
                    v = !1,
                    y = void 0;
                  try {
                    for (
                      var p, g = te()(l);
                      !(d = (p = g.next()).done);
                      d = !0
                    ) {
                      var m = p.value;
                      f.push(Dn(m));
                    }
                  } catch (e) {
                    ((v = !0), (y = e));
                  } finally {
                    try {
                      !d && g.return && g.return();
                    } finally {
                      if (v) throw y;
                    }
                  }
                  (h.push(f), t.push(h));
                }
              } catch (e) {
                ((a = !0), (i = e));
              } finally {
                try {
                  !n && s.return && s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return t;
            }
            function Hn(e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              if (!e) throw new Error("Invalid parameter. Expect JSON object");
              if (
                !e.action ||
                ("invoke" !== e.action &&
                  "invokeRead" !== e.action &&
                  "invokePasswordFree" !== e.action)
              )
                throw new Error(
                  'Invalid parameter. The action type must be "invoke or invokeRead"',
                );
              if (!e.params || !e.params.invokeConfig)
                throw new Error(
                  "Invalid parameter. The params can not be empty.",
                );
              var r = e.params.invokeConfig,
                n = r.payer,
                a = r.gasPrice,
                i = r.gasLimit,
                u = r.contractHash;
              if (!u)
                throw new Error(
                  "Invalid parameter. The contractHash can not be empty.",
                );
              var s = new Wt(Te(u));
              ((n = n ? new Wt(n) : null),
                (a = a + "" || "500"),
                (i = i + "" || "200000"));
              var o = [];
              if (u.indexOf("00000000000000000000000000000000000000") > -1) {
                var c = _n(r);
                o.push(c);
              } else {
                var l = On(r),
                  h = !0,
                  f = !1,
                  d = void 0;
                try {
                  for (var v, y = te()(l); !(h = (v = y.next()).done); h = !0) {
                    var p = v.value,
                      g = Kt(p, t),
                      m = bn("", g, s, a, i, n, t);
                    o.push(m);
                  }
                } catch (e) {
                  ((f = !0), (d = e));
                } finally {
                  try {
                    !h && y.return && y.return();
                  } finally {
                    if (f) throw d;
                  }
                }
              }
              return o;
            }
            function _n(e) {
              var t = e.functions[0],
                r = t.args;
              if (
                e.contractHash.indexOf("02") > -1 ||
                e.contractHash.indexOf("01") > -1
              ) {
                var n = e.contractHash.indexOf("02") > -1 ? "ONG" : "ONT";
                if ("transfer" === t.operation) {
                  var a = new Wt(r[0].value.split(":")[1]),
                    i = new Wt(r[1].value.split(":")[1]),
                    u = r[2].value.split(":")[1] + "",
                    s = new Wt(e.payer);
                  return Yr(n, a, i, u, e.gasPrice, e.gasLimit, s);
                }
              } else if (e.contractHash.indexOf("03") > -1) {
                if ("regIDWithPublicKey" === t.operation) {
                  var o = r[0].value.substr(r[0].value.indexOf(":") + 1),
                    c = new st(r[1].value.split(":")[1]),
                    l = new Wt(e.payer);
                  return an(o, c, e.gasPrice, e.gasLimit, l);
                }
                if ("getDDO" === t.operation)
                  return ln(r[0].value.substr(r[0].value.indexOf(":") + 1));
              }
            }
            var zn = n(29),
              Un = (function () {
                function e() {
                  (A()(this, e),
                    (this["enc-alg"] = "aes-256-gcm"),
                    (this.hash = "sha256"));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "toJson",
                        value: function () {
                          return P()(this.toJsonObj());
                        },
                      },
                      {
                        key: "toJsonObj",
                        value: function () {
                          return E()(
                            {
                              address: this.address.toBase58(),
                              label: this.label,
                              lock: this.lock,
                            },
                            this.encryptedKey.serializeJson(),
                            {
                              "enc-alg": this["enc-alg"],
                              hash: this.hash,
                              salt: this.salt,
                              isDefault: this.isDefault,
                              publicKey: this.publicKey,
                              signatureScheme:
                                this.encryptedKey.algorithm.defaultSchema.label,
                            },
                          );
                        },
                      },
                      {
                        key: "exportPrivateKey",
                        value: function (e, t) {
                          return this.encryptedKey.decrypt(
                            e,
                            this.address,
                            this.salt,
                            t,
                          );
                        },
                      },
                      {
                        key: "signTransaction",
                        value: function (e, t, r) {
                          var n = this.exportPrivateKey(e, r);
                          return (wn(t, n, n.algorithm.defaultSchema), t);
                        },
                      },
                    ],
                    [
                      {
                        key: "importAccount",
                        value: function (r, n, a, i, u, s) {
                          var o = new e(),
                            c = t.from(u, "base64").toString("hex"),
                            l = n.decrypt(a, i, c, s);
                          (r || (r = ge(Le(4))),
                            (o.label = r),
                            (o.lock = !1),
                            (o.isDefault = !1),
                            (o.salt = u),
                            (o.encryptedKey = n));
                          var h = l.getPublicKey();
                          return (
                            (o.publicKey = h.key),
                            (o.address = Wt.fromPubKey(h)),
                            o
                          );
                        },
                      },
                      {
                        key: "importWithMnemonic",
                        value: function (r, n, a, i) {
                          if (((n = n.trim()), !T.validateMnemonic(n)))
                            throw m.INVALID_PARAMS;
                          var u = T.mnemonicToSeedHex(n),
                            s = zn.fromMasterSeed(t.from(u, "hex")).derive(Y),
                            o = t.from(s.privateKey).toString("hex"),
                            c = new fr(o);
                          return e.create(c, a, r, i);
                        },
                      },
                      {
                        key: "create",
                        value: function (r, n, a, i) {
                          var u = new e();
                          (a || (a = ge(Le(4))),
                            (u.label = a),
                            (u.lock = !1),
                            (u.isDefault = !1));
                          var s = Me(16),
                            o = r.getPublicKey(),
                            c = Wt.fromPubKey(o);
                          return (
                            (u.publicKey = o.serializeHex()),
                            (u.address = c),
                            (u.encryptedKey = r.encrypt(n, c, s, i)),
                            (u.salt = t.from(s, "hex").toString("base64")),
                            u
                          );
                        },
                      },
                      {
                        key: "parseJson",
                        value: function (t) {
                          return e.parseJsonObj(JSON.parse(t));
                        },
                      },
                      {
                        key: "parseJsonObj",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.address = new Wt(t.address)),
                            (r.label = t.label),
                            (r.lock = t.lock),
                            (r.isDefault = t.isDefault),
                            (r.publicKey = t.publicKey),
                            (r.hash = t.hash),
                            (r.salt = t.salt),
                            (r.encryptedKey = pr({
                              algorithm: t.algorithm,
                              parameters: t.parameters,
                              key: t.key,
                              external: t.external,
                            })),
                            (r.extra = t.extra),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Ln = n(21),
              Mn = n.n(Ln),
              Kn = "/api/v1/transaction",
              Vn = "/api/v1/transaction/",
              Gn = "/api/v1/node/connectioncount",
              Wn = "/api/v1/block/height",
              Jn = "/api/v1/block/details/height/",
              Fn = "/api/v1/block/details/hash/",
              qn = "/api/v1/balance/",
              jn = "/api/v1/contract/",
              Yn = "/api/v1/smartcode/event/transactions/",
              Qn = "/api/v1/smartcode/event/txhash/",
              Xn = "/api/v1/block/height/txhash/",
              Zn = "/api/v1/storage/",
              $n = "/api/v1/merkleproof/",
              ea = "/api/v1/allowance/",
              ta = "/api/v1/block/transactions/height/",
              ra = "/api/v1/unboundong/",
              na = "/api/v1/grantong/",
              aa = "/api/v1/mempool/txcount",
              ia = "/api/v1/mempool/txstate/",
              ua = "/api/v1/version",
              sa = "/api/v1/gasprice",
              oa = (function () {
                function e(t) {
                  (A()(this, e),
                    (this.version = "v1.0.0"),
                    (this.action = "sendrawtransaction"),
                    (this.url = t || G.REST_URL),
                    "/" === this.url[this.url.length - 1] &&
                      (this.url = this.url.substring(0, this.url.length - 1)));
                }
                return (
                  x()(e, [
                    {
                      key: "concatParams",
                      value: function (e) {
                        var t = "";
                        if (0 === e.size) return "";
                        var r = !0,
                          n = !1,
                          a = void 0;
                        try {
                          for (
                            var i, u = te()(e.keys());
                            !(r = (i = u.next()).done);
                            r = !0
                          ) {
                            var s = i.value,
                              o = e.get(s);
                            (o && (o = encodeURIComponent(o)),
                              (t += "&" + s + "=" + o));
                          }
                        } catch (e) {
                          ((n = !0), (a = e));
                        } finally {
                          try {
                            !r && u.return && u.return();
                          } finally {
                            if (n) throw a;
                          }
                        }
                        return "?" + t.substr(1);
                      },
                    },
                    {
                      key: "getUrl",
                      value: function () {
                        return this.url;
                      },
                    },
                    {
                      key: "sendRawTransaction",
                      value: function (e) {
                        var t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          r = arguments[2],
                          n = new Rt.a();
                        (r && n.set("userid", r), t && n.set("preExec", "1"));
                        var a = this.url + Kn;
                        a += this.concatParams(n);
                        var i = {
                          Action: this.action,
                          Version: this.version,
                          Data: e,
                        };
                        return ve.a.post(a, i).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getRawTransaction",
                      value: function (e) {
                        var t = new Rt.a();
                        t.set("raw", "1");
                        var r = this.url + Vn + e;
                        return (
                          (r += this.concatParams(t)),
                          ve.a.get(r).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getRawTransactionJson",
                      value: function (e) {
                        var t = new Rt.a();
                        t.set("raw", "0");
                        var r = this.url + Vn + e;
                        return (
                          (r += this.concatParams(t)),
                          ve.a.get(r).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getNodeCount",
                      value: function () {
                        var e = this.url + Gn;
                        return ve.a.get(e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockHeight",
                      value: function () {
                        var e = this.url + Wn;
                        return ve.a.get(e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlock",
                      value: function (e) {
                        var t = new Rt.a();
                        t.set("raw", "1");
                        var r = "";
                        return (
                          "number" == typeof e
                            ? (r = this.url + Jn + e)
                            : "string" == typeof e && (r = this.url + Fn + e),
                          (r += this.concatParams(t)),
                          ve.a.get(r).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getContract",
                      value: function (e) {
                        var t = new Rt.a();
                        t.set("raw", "1");
                        var r = this.url + jn + e;
                        return (
                          (r += this.concatParams(t)),
                          ve.a.get(r).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getContractJson",
                      value: function (e) {
                        var t = new Rt.a();
                        t.set("raw", "0");
                        var r = this.url + jn + e;
                        return (
                          (r += this.concatParams(t)),
                          ve.a.get(r).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getSmartCodeEvent",
                      value: function (e) {
                        var t = "";
                        return (
                          "string" == typeof e
                            ? (t = this.url + Qn + e)
                            : "number" == typeof e && (t = this.url + Yn + e),
                          ve.a.get(t).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getBlockHeightByTxHash",
                      value: function (e) {
                        var t = this.url + Xn + e;
                        return ve.a.get(t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getStorage",
                      value: function (e, t) {
                        var r = this.url + Zn + e + "/" + t;
                        return ve.a.get(r).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getMerkleProof",
                      value: function (e) {
                        var t = this.url + $n + e;
                        return (
                          console.log("url: " + t),
                          ve.a.get(t).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getBalance",
                      value: function (e) {
                        var t = this.url + qn + e.toBase58();
                        return ve.a.get(t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockJson",
                      value: function (e) {
                        var t = "";
                        return (
                          "number" == typeof e
                            ? (t = this.url + Jn + e)
                            : "string" == typeof e && (t = this.url + Fn + e),
                          ve.a.get(t).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getAllowance",
                      value: function (e, t, r) {
                        if ("ont" !== (e = e.toLowerCase()) && "ong" !== e)
                          throw m.INVALID_PARAMS;
                        var n =
                          this.url +
                          ea +
                          e.toLowerCase() +
                          "/" +
                          t.toBase58() +
                          "/" +
                          r.toBase58();
                        return ve.a.get(n).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getUnboundOng",
                      value: function (e) {
                        var t = this.url + ra + e.toBase58();
                        return ve.a.get(t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockTxsByHeight",
                      value: function (e) {
                        var t = this.url + ta + e;
                        return ve.a.get(t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getGasPrice",
                      value: function () {
                        var e = this.url + sa;
                        return ve.a.get(e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getGrangOng",
                      value: function (e) {
                        var t = this.url + na + e.toBase58();
                        return ve.a.get(t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getMempoolTxCount",
                      value: function () {
                        var e = this.url + aa;
                        return ve.a.get(e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getMempoolTxState",
                      value: function (e) {
                        var t = this.url + ia + e;
                        return ve.a.get(t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getVersion",
                      value: function () {
                        var e = this.url + ua;
                        return ve.a.get(e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                  ]),
                  e
                );
              })(),
              ca = n(22),
              la = n.n(ca),
              ha = (function () {
                function e() {
                  var t = this;
                  (A()(this, e),
                    (this.resolve = function (e) {
                      t._resolve(e);
                    }),
                    (this.reject = function (e) {
                      t._reject(e);
                    }),
                    (this._promise = new la.a(function (e, r) {
                      ((t._resolve = e), (t._reject = r));
                    })));
                }
                return (
                  x()(e, [
                    {
                      key: "promise",
                      get: function () {
                        return this._promise;
                      },
                    },
                  ]),
                  e
                );
              })();
            function fa() {
              return {
                Action: "subscribe",
                Version: "1.0.0",
                SubscribeEvent:
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                SubscribeJsonBlock:
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                SubscribeRawBlock:
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                SubscribeBlockTxHashs:
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
              };
            }
            function da(e) {
              var t = {
                Action: "sendrawtransaction",
                Version: "1.0.0",
                Data: e,
              };
              return (
                arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1] &&
                  (t = Cr()(t, { PreExec: "1" })),
                t
              );
            }
            function va(e) {
              return {
                Action: "gettransaction",
                Version: "1.0.0",
                Hash: e,
                Raw: "1",
              };
            }
            function ya(e) {
              return {
                Action: "gettransaction",
                Version: "1.0.0",
                Hash: e,
                Raw: "0",
              };
            }
            function pa(e) {
              var t = {};
              return (
                "number" == typeof e
                  ? (t = {
                      Action: "getblockbyheight",
                      Version: "1.0.0",
                      Height: e,
                      Raw: "1",
                    })
                  : "string" == typeof e &&
                    (t = {
                      Action: "getblockbyhash",
                      Version: "1.0.0",
                      Hash: e,
                      Raw: "1",
                    }),
                t
              );
            }
            function ga(e) {
              var t = {};
              return (
                "number" == typeof e
                  ? (t = {
                      Action: "getblockbyheight",
                      Version: "1.0.0",
                      Height: e,
                    })
                  : "string" == typeof e &&
                    (t = {
                      Action: "getblockbyhash",
                      Version: "1.0.0",
                      Hash: e,
                    }),
                t
              );
            }
            function ma(e) {
              return {
                Action: "getbalance",
                Version: "1.0.0",
                Addr: e.toBase58(),
              };
            }
            function wa(e) {
              return {
                Action: "getunboundong",
                Version: "1.0.0",
                Addr: e.toBase58(),
              };
            }
            function Sa(e) {
              return {
                Action: "getcontract",
                Version: "1.0.0",
                Hash: e,
                Raw: "1",
              };
            }
            function Aa(e) {
              return {
                Action: "getcontract",
                Version: "1.0.0",
                Hash: e,
                Raw: "0",
              };
            }
            function ka(e) {
              var t = {};
              return (
                "number" == typeof e
                  ? (t = {
                      Action: "getsmartcodeeventbyheight",
                      Version: "1.0.0",
                      Height: e,
                    })
                  : "string" == typeof e &&
                    (t = {
                      Action: "getsmartcodeeventbyhash",
                      Version: "1.0.0",
                      Hash: e,
                    }),
                t
              );
            }
            function xa(e) {
              return {
                Action: "getblockheightbytxhash",
                Version: "1.0.0",
                Hash: e,
              };
            }
            function ba(e, t) {
              return {
                Action: "getstorage",
                Version: "1.0.0",
                Hash: e,
                Key: t,
              };
            }
            function Ea(e) {
              return { Action: "getmerkleproof", Version: "1.0.0", Hash: e };
            }
            function Ra(e, t, r) {
              return {
                Action: "getallowance",
                Version: "1.0.0",
                Asset: e,
                From: t.toBase58(),
                To: r.toBase58(),
              };
            }
            function Pa(e) {
              return {
                Action: "getgrantong",
                Version: "1.0.0",
                Addr: e.toBase58(),
              };
            }
            function Ta(e) {
              return { Action: "getmempooltxstate", Version: "1.0.0", Hash: e };
            }
            var Ia = n(35),
              Na = n(34),
              Ca = (function () {
                function e() {
                  var t = this,
                    r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : G.SOCKET_URL,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  (A()(this, e),
                    (this.debug = n),
                    (this.wsp = new Na(r, {
                      createWebSocket: function (e) {
                        return new Ia(e);
                      },
                      attachRequestId: function (e, t) {
                        return E()({ Id: t }, e);
                      },
                      extractRequestId: function (e) {
                        return e && e.Id;
                      },
                      packMessage: function (e) {
                        return P()(e);
                      },
                      unpackMessage: function (e) {
                        return JSON.parse(e);
                      },
                    })),
                    this.wsp.onOpen.addListener(function () {
                      t.debug && console.log("connected");
                    }),
                    this.wsp.onClose.addListener(function () {
                      t.debug && console.log("disconnected");
                    }),
                    this.wsp.onSend.addListener(function (e) {
                      t.debug && console.log("sent: ", e);
                    }),
                    this.wsp.onMessage.addListener(function (e) {
                      t.debug && console.log("received: ", e);
                    }),
                    this.wsp.onError.addListener(function (e) {
                      t.debug && console.log("error: ", e);
                    }));
                }
                return (
                  x()(e, null, [
                    {
                      key: "generateReqId",
                      value: function () {
                        return Math.floor(1e9 * Math.random());
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "send",
                      value: (function () {
                        var t = Qt()(
                          jt.a.mark(function t(r) {
                            var n,
                              a =
                                !(
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                ) || arguments[1];
                            return jt.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      if (((t.prev = 0), r)) {
                                        t.next = 3;
                                        break;
                                      }
                                      return t.abrupt("return");
                                    case 3:
                                      return ((t.next = 5), this.wsp.open());
                                    case 5:
                                      return (
                                        (t.next = 7),
                                        this.wsp.sendRequest(r, {
                                          requestId: e.generateReqId(),
                                        })
                                      );
                                    case 7:
                                      return (
                                        (n = t.sent),
                                        t.abrupt("return", n)
                                      );
                                    case 9:
                                      if (((t.prev = 9), !a)) {
                                        t.next = 13;
                                        break;
                                      }
                                      return ((t.next = 13), this.wsp.close());
                                    case 13:
                                      return t.finish(9);
                                    case 14:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              t,
                              this,
                              [[0, , 9, 14]],
                            );
                          }),
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "addListener",
                      value: function (e) {
                        this.wsp.onUnpackedMessage.addListener(e);
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.wsp.close();
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ba = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : G.SOCKET_URL,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                  (A()(this, e),
                    (this.autoClose = n),
                    (this.promises = new Rt.a()),
                    (this.sender = new Ca(t, r)),
                    this.sender.addListener(this.notifyListener.bind(this)));
                }
                return (
                  x()(e, [
                    {
                      key: "sendHeartBeat",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "heartbeat",
                                          Version: "V1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "sendSubscribe",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t,
                              r =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0],
                              n =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1],
                              a =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                              i =
                                arguments.length > 3 &&
                                void 0 !== arguments[3] &&
                                arguments[3];
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = fa(r, n, a, i)),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "sendRawTransaction",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r,
                              n,
                              a,
                              i,
                              u =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1],
                              s =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = da(t, u)),
                                        (e.next = 3),
                                        this.send(r, this.autoClose && !s)
                                      );
                                    case 3:
                                      if (0 === (n = e.sent).Error) {
                                        e.next = 7;
                                        break;
                                      }
                                      throw (console.log(n), new Error(P()(n)));
                                    case 7:
                                      if (!s) {
                                        e.next = 14;
                                        break;
                                      }
                                      return (
                                        (a = n.Result),
                                        (i = new ha()),
                                        this.promises.set(a, i),
                                        e.abrupt("return", i.promise)
                                      );
                                    case 14:
                                      return e.abrupt("return", n);
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getRawTransaction",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = va(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getRawTransactionJson",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = ya(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getNodeCount",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "getconnectioncount",
                                          Version: "1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBlockHeight",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "getblockheight",
                                          Version: "1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBlock",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = pa(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBlockJson",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = ga(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBalance",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = ma(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getUnboundong",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = wa(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getContract",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = Sa(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getContractJson",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = Aa(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getSmartCodeEvent",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = ka(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBlockHeightByTxHash",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = xa(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getStorage",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t, r) {
                            var n;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (n = ba(t, r)),
                                        e.abrupt("return", this.send(n))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t, r) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getMerkleProof",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = Ea(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getAllowance",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t, r, n) {
                            var a;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (a = Ra(t, r, n)),
                                        e.abrupt("return", this.send(a))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t, r, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBlockHash",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = {
                                          Action: "getblockhash",
                                          Version: "1.0.0",
                                          Height: t,
                                        }),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getBlockTxsByHeight",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = {
                                          Action: "getblocktxsbyheight",
                                          Version: "1.0.0",
                                          Height: t,
                                        }),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getGasPrice",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "getgasprice",
                                          Version: "1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getGrantOng",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = Pa(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getMempoolTxCount",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "getmempooltxcount",
                                          Version: "1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getMempoolTxState",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (r = Ta(t)),
                                        e.abrupt("return", this.send(r))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getVersion",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "getversion",
                                          Version: "1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getNetworkId",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e() {
                            var t;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (t = {
                                          Action: "getnetworkid",
                                          Version: "1.0.0",
                                        }),
                                        e.abrupt("return", this.send(t))
                                      );
                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "addNotifyListener",
                      value: function (e) {
                        this.sender.addListener(function (t) {
                          "Notify" === t.Action && e(t);
                        });
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.sender.close();
                      },
                    },
                    {
                      key: "send",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : this.autoClose;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        this.sender.send(t, r),
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "notifyListener",
                      value: function (e) {
                        if ("Notify" === e.Action || "Log" === e.Action) {
                          var t = e.Result.TxHash;
                          if (void 0 !== t) {
                            var r = this.promises.get(t);
                            (void 0 !== r
                              ? (this.promises.delete(t), r.resolve(e))
                              : console.warn(
                                  "Received Notify event for unknown transaction",
                                ),
                              this.autoClose && this.sender.close());
                          }
                        }
                      },
                    },
                  ]),
                  e
                );
              })(),
              Da = (function () {
                function e() {
                  (A()(this, e), (this.functions = []));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "getHash",
                        value: function () {
                          return this.hash;
                        },
                      },
                      {
                        key: "getEntryPoint",
                        value: function () {
                          return this.entrypoint;
                        },
                      },
                      {
                        key: "getFunction",
                        value: function (e) {
                          var t = !0,
                            r = !1,
                            n = void 0;
                          try {
                            for (
                              var a, i = te()(this.functions);
                              !(t = (a = i.next()).done);
                              t = !0
                            ) {
                              var u = a.value;
                              if (u.name === e) {
                                var s = u.parameters.map(function (e) {
                                  return new Pt(e.name, e.type, "");
                                });
                                return new Dr(u.name, u.returntype, s);
                              }
                            }
                          } catch (e) {
                            ((r = !0), (n = e));
                          } finally {
                            try {
                              !t && i.return && i.return();
                            } finally {
                              if (r) throw n;
                            }
                          }
                          throw Error("not found");
                        },
                      },
                    ],
                    [
                      {
                        key: "parseJson",
                        value: function (t) {
                          var r = new e(),
                            n = JSON.parse(t);
                          return (
                            (r.hash = n.hash),
                            (r.entrypoint = n.entrypoint),
                            (r.functions = n.functions),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Oa = Da.parseJson(
                P()({
                  hash: "36bb5c053b6b839c8f6b923fe852f91239b9fccc",
                  entrypoint: "Main",
                  functions: [
                    {
                      name: "Main",
                      parameters: [
                        { name: "operation", type: "String" },
                        { name: "args", type: "Array" },
                      ],
                      returntype: "Any",
                    },
                    {
                      name: "Commit",
                      parameters: [
                        { name: "claimId", type: "ByteArray" },
                        { name: "commiterId", type: "ByteArray" },
                        { name: "ownerId", type: "ByteArray" },
                      ],
                      returntype: "Boolean",
                    },
                    {
                      name: "Revoke",
                      parameters: [
                        { name: "claimId", type: "ByteArray" },
                        { name: "ontId", type: "ByteArray" },
                      ],
                      returntype: "Boolean",
                    },
                    {
                      name: "GetStatus",
                      parameters: [{ name: "claimId", type: "ByteArray" }],
                      returntype: "ByteArray",
                    },
                  ],
                  events: [
                    {
                      name: "ErrorMsg",
                      parameters: [
                        { name: "arg1", type: "ByteArray" },
                        { name: "arg2", type: "String" },
                      ],
                      returntype: "Void",
                    },
                    {
                      name: "Push",
                      parameters: [
                        { name: "arg1", type: "ByteArray" },
                        { name: "arg2", type: "String" },
                        { name: "arg3", type: "ByteArray" },
                      ],
                      returntype: "Void",
                    },
                  ],
                }),
              ),
              Ha = Oa.getHash().replace("0x", ""),
              _a = new Wt(Te(Ha));
            function za(e, t, r, n, a, i) {
              var u = Oa.getFunction("Commit");
              ("did" === t.substr(0, 3) && (t = Se(t)),
                "did" === r.substr(0, 3) && (r = Se(t)));
              var s = new Pt(u.parameters[0].getName(), St.ByteArray, Se(e)),
                o = new Pt(u.parameters[1].getName(), St.ByteArray, t),
                c = new Pt(u.parameters[2].getName(), St.ByteArray, r);
              return (new Mr(), bn(u.name, [s, o, c], _a, n, a, i));
            }
            function Ua(e, t, r, n, a) {
              var i = Oa.getFunction("Revoke"),
                u = i.parameters[0].getName(),
                s = St.ByteArray;
              "did" === t.substr(0, 3) && (t = Se(t));
              var o = new Pt(u, s, Se(e)),
                c = new Pt(i.parameters[1].getName(), St.ByteArray, t);
              return bn(i.name, [o, c], _a, r, n, a);
            }
            function La(e) {
              var t = Oa.getFunction("GetStatus"),
                r = new Pt(t.parameters[0].getName(), St.ByteArray, Se(e));
              return bn(t.name, [r], _a);
            }
            var Ma,
              Ka,
              Va,
              Ga = (function () {
                function e() {
                  (A()(this, e), (this.Action = "Notify"));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e();
                        return (
                          (r.Action = t.Action),
                          (r.Error = t.Error),
                          (r.Desc = t.Desc),
                          (r.Result = Wa.deserialize(t.Result)),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Wa = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e();
                        return (
                          (r.TxHash = t.TxHash),
                          (r.State = t.State),
                          (r.GasConsumed = t.GasConsumed),
                          (r.Notify = t.Notify.map(function (e) {
                            return {
                              ContractAddress: e.ContractAddress,
                              States: e.States.map(function (e) {
                                return "string" == typeof e ? Ae(e) : e;
                              }),
                            };
                          })),
                          (r.Version = t.Version),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ja = n(33),
              Fa = n.n(Ja),
              qa = n(32),
              ja = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        for (var r = new Ce(t), n = []; !r.isEmpty(); ) {
                          var a = r.readUint32(),
                            i = r.readNextBytes(),
                            u = new e();
                          ((u.id = a),
                            (u.pk = st.deserializeHex(new Ce(i))),
                            n.push(u));
                        }
                        return n;
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ya = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          return (
                            (e += xe(this.key)),
                            (e += xe(this.type)),
                            e + xe(this.value)
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          for (var r = new Ce(t), n = []; !r.isEmpty(); ) {
                            var a = Ae(r.readNextBytes()),
                              i = Ae(r.readNextBytes()),
                              u = Ae(r.readNextBytes()),
                              s = new e();
                            ((s.key = a),
                              (s.type = i),
                              (s.value = u),
                              n.push(s));
                          }
                          return n;
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Qa = (function () {
                function e() {
                  (A()(this, e),
                    (this.publicKeys = []),
                    (this.attributes = []),
                    (this.recovery = ""));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new Ce(t),
                          n = new e(),
                          a = r.readNextLen();
                        a > 0 && (n.publicKeys = ja.deserialize(r.read(a)));
                        var i = r.readNextLen();
                        i > 0 && (n.attributes = Ya.deserialize(r.read(i)));
                        var u = r.readNextLen();
                        return (u > 0 && (n.recovery = r.read(u)), n);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Xa = (function () {
                function e(t, r) {
                  (A()(this, e),
                    (this.metadata = t),
                    (this.signature = r),
                    void 0 === this.metadata.messageId &&
                      (this.metadata.messageId = qa()));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserializeInternal",
                      value: function (t, r) {
                        var n = t.split(".", 3);
                        if (n.length < 2) throw new Error("Invalid message.");
                        var a = e.deserializeHeader(n[0]),
                          i = e.deserializePayload(n[1]),
                          u = void 0;
                        if (n.length > 2) {
                          if (
                            void 0 === a.algorithm ||
                            void 0 === a.publicKeyId
                          )
                            throw new Error(
                              "Signature scheme was not specified.",
                            );
                          u = lr.deserializeJWT(
                            n[2],
                            a.algorithm,
                            a.publicKeyId,
                          );
                        }
                        var s = r(i.metadata, u);
                        return (s.payloadFromJSON(i.rest), s);
                      },
                    },
                    {
                      key: "deserializePayload",
                      value: function (e) {
                        var t = cr.decode(e),
                          r = JSON.parse(t);
                        return {
                          metadata: {
                            messageId: r.jti,
                            issuer: r.iss,
                            subject: r.sub,
                            issuedAt: r.iat,
                            expireAt: r.exp,
                          },
                          rest: Fa()(r, ["jti", "iss", "sub", "iat", "exp"]),
                        };
                      },
                    },
                    {
                      key: "deserializeHeader",
                      value: function (e) {
                        var t = cr.decode(e),
                          r = JSON.parse(t);
                        return {
                          algorithm:
                            void 0 !== r.alg ? Ye.fromLabelJWS(r.alg) : void 0,
                          publicKeyId: r.kid,
                        };
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "sign",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t, r, n, a) {
                            var i;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return ((e.next = 2), Za(r, t));
                                    case 2:
                                      return (
                                        void 0 === a &&
                                          (a = n.algorithm.defaultSchema),
                                        (i = this.serializeUnsigned(a, r)),
                                        (e.next = 6),
                                        n.signAsync(i, a, r)
                                      );
                                    case 6:
                                      this.signature = e.sent;
                                    case 7:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t, r, n, a) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "verify",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r, n, a;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        void 0 === (r = this.signature) ||
                                        void 0 === r.publicKeyId
                                      ) {
                                        e.next = 24;
                                        break;
                                      }
                                      if (
                                        ((e.prev = 2),
                                        this.verifyKeyOwnership())
                                      ) {
                                        e.next = 5;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 5:
                                      if (this.verifyExpiration()) {
                                        e.next = 7;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 7:
                                      return (
                                        (e.next = 9),
                                        $a(r.publicKeyId, t)
                                      );
                                    case 9:
                                      if (e.sent !== ot.REVOKED) {
                                        e.next = 12;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 12:
                                      return (
                                        (e.next = 14),
                                        Za(r.publicKeyId, t)
                                      );
                                    case 14:
                                      return (
                                        (n = e.sent),
                                        (a = this.serializeUnsigned(
                                          r.algorithm,
                                          r.publicKeyId,
                                        )),
                                        e.abrupt("return", n.verify(a, r))
                                      );
                                    case 19:
                                      return (
                                        (e.prev = 19),
                                        (e.t0 = e.catch(2)),
                                        e.abrupt("return", !1)
                                      );
                                    case 22:
                                      e.next = 25;
                                      break;
                                    case 24:
                                      return e.abrupt("return", !1);
                                    case 25:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                              [[2, 19]],
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "serializeUnsigned",
                      value: function (e, t) {
                        return (
                          this.serializeHeader(e, t) +
                          "." +
                          this.serializePayload()
                        );
                      },
                    },
                    {
                      key: "serialize",
                      value: function () {
                        var e = this.signature;
                        if (void 0 !== e) {
                          var t = e.serializeJWT();
                          return (
                            this.serializeUnsigned(e.algorithm, e.publicKeyId) +
                            "." +
                            t
                          );
                        }
                        return this.serializeUnsigned();
                      },
                    },
                    {
                      key: "serializeHeader",
                      value: function (e, t) {
                        var r = void 0;
                        r =
                          void 0 !== e
                            ? { alg: e.labelJWS, typ: "JWT", kid: t }
                            : { typ: "JWT" };
                        var n = P()(r);
                        return cr.encode(n, "utf-8");
                      },
                    },
                    {
                      key: "verifyExpiration",
                      value: function () {
                        return (
                          void 0 === this.metadata.expireAt ||
                          He() < this.metadata.expireAt
                        );
                      },
                    },
                    {
                      key: "verifyKeyOwnership",
                      value: function () {
                        var e = this.signature;
                        return (
                          void 0 !== e &&
                          void 0 !== e.publicKeyId &&
                          ei(e.publicKeyId) === this.metadata.issuer
                        );
                      },
                    },
                    {
                      key: "serializePayload",
                      value: function () {
                        var e = {
                            jti: this.metadata.messageId,
                            iss: this.metadata.issuer,
                            sub: this.metadata.subject,
                            iat: this.metadata.issuedAt,
                            exp: this.metadata.expireAt,
                          },
                          t = this.payloadToJSON(),
                          r = P()(E()({}, e, t));
                        return cr.encode(r, "utf-8");
                      },
                    },
                  ]),
                  e
                );
              })(),
              Za =
                ((Ma = Qt()(
                  jt.a.mark(function e(t, r) {
                    var n, a, i, u, s, o, c;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = ei(t)),
                                (a = ti(t)),
                                (i = new oa(r)),
                                (u = ln(n)),
                                (e.next = 6),
                                i.sendRawTransaction(u.serialize(), !0)
                              );
                            case 6:
                              if (!(s = e.sent).Result || !s.Result.Result) {
                                e.next = 15;
                                break;
                              }
                              if (
                                ((o = Qa.deserialize(s.Result.Result)),
                                void 0 !==
                                  (c = o.publicKeys.find(function (e) {
                                    return e.id === a;
                                  })))
                              ) {
                                e.next = 12;
                                break;
                              }
                              throw new Error("Not found");
                            case 12:
                              return e.abrupt("return", c.pk);
                            case 15:
                              throw new Error("Not found");
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, t) {
                  return Ma.apply(this, arguments);
                }),
              $a =
                ((Ka = Qt()(
                  jt.a.mark(function e(t, r) {
                    var n, a, i, u, s;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = ei(t)),
                                (a = ti(t)),
                                (i = new oa(r)),
                                (u = pn(n, a)),
                                (e.next = 6),
                                i.sendRawTransaction(u.serialize(), !0)
                              );
                            case 6:
                              if (!(s = e.sent).Result || !s.Result.Result) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                ot.fromHexLabel(s.Result.Result),
                              );
                            case 11:
                              throw new Error("Not found");
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, t) {
                  return Ka.apply(this, arguments);
                });
            function ei(e) {
              var t = e.indexOf("#keys-");
              if (-1 === t) throw new Error("Is not a publicKeId.");
              return e.substr(0, t);
            }
            function ti(e) {
              var t = e.indexOf("#keys-");
              if (-1 === t) throw new Error("Is not a publicKeId.");
              return Number(e.substr(t + "#keys-".length));
            }
            !(function (e) {
              ((e.AttestContract = "AttestContract"),
                (e.RevocationList = "RevocationList"));
            })(Va || (Va = {}));
            var ri,
              ni = (function (e) {
                function t(e, r, n) {
                  A()(this, t);
                  var a = et()(this, (t.__proto__ || Ze()(t)).call(this, e, r));
                  return ((a.useProof = !0 === n), a);
                }
                return (
                  rt()(t, e),
                  x()(t, null, [
                    {
                      key: "deserialize",
                      value: function (e) {
                        return Mn()(
                          t.__proto__ || Ze()(t),
                          "deserializeInternal",
                          this,
                        ).call(this, e, function (e, r) {
                          return new t(e, r);
                        });
                      },
                    },
                  ]),
                  x()(t, [
                    {
                      key: "verify",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(r) {
                            var n,
                              a =
                                !(
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                ) || arguments[1];
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        Mn()(
                                          t.prototype.__proto__ ||
                                            Ze()(t.prototype),
                                          "verify",
                                          this,
                                        ).call(this, r)
                                      );
                                    case 2:
                                      if (!(n = e.sent) || !a) {
                                        e.next = 7;
                                        break;
                                      }
                                      return e.abrupt(
                                        "return",
                                        this.getStatus(r),
                                      );
                                    case 7:
                                      return e.abrupt("return", n);
                                    case 8:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "serialize",
                      value: function () {
                        return this.useProof
                          ? Mn()(
                              t.prototype.__proto__ || Ze()(t.prototype),
                              "serialize",
                              this,
                            ).call(this) +
                              "." +
                              this.serializeProof()
                          : Mn()(
                              t.prototype.__proto__ || Ze()(t.prototype),
                              "serialize",
                              this,
                            ).call(this);
                      },
                    },
                    {
                      key: "attest",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t, r, n, a, i) {
                            var u, s, o, c, l, h, f;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((u = this.metadata.issuer),
                                        (s = this.metadata.subject),
                                        void 0 !==
                                          (o = this.metadata.messageId))
                                      ) {
                                        e.next = 5;
                                        break;
                                      }
                                      throw new Error(
                                        "Claim id not specified.",
                                      );
                                    case 5:
                                      return (
                                        (c = new Ba(t)),
                                        (l = za(o, u, s, r, n, a)),
                                        (e.next = 9),
                                        Sn(l, i)
                                      );
                                    case 9:
                                      return (
                                        (e.next = 11),
                                        c.sendRawTransaction(
                                          l.serialize(),
                                          !1,
                                          !0,
                                        )
                                      );
                                    case 11:
                                      return (
                                        (h = e.sent),
                                        (f = Ga.deserialize(h)),
                                        console.log(P()(f)),
                                        e.abrupt(
                                          "return",
                                          "Push" ===
                                            f.Result.Notify[0].States[0],
                                        )
                                      );
                                    case 15:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t, r, n, a, i) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "revoke",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t, r, n, a, i) {
                            var u, s, o, c, l, h;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((u = this.metadata.issuer),
                                        void 0 !==
                                          (s = this.metadata.messageId))
                                      ) {
                                        e.next = 4;
                                        break;
                                      }
                                      throw new Error(
                                        "Claim id not specified.",
                                      );
                                    case 4:
                                      return (
                                        (o = new Ba(t)),
                                        (c = Ua(s, u, r, n, a)),
                                        (e.next = 8),
                                        Sn(c, i)
                                      );
                                    case 8:
                                      return (
                                        (e.next = 10),
                                        o.sendRawTransaction(
                                          c.serialize(),
                                          !1,
                                          !0,
                                        )
                                      );
                                    case 10:
                                      return (
                                        (l = e.sent),
                                        (h = Ga.deserialize(l)),
                                        e.abrupt(
                                          "return",
                                          "Push" ===
                                            h.Result.Notify[0].States[0],
                                        )
                                      );
                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t, r, n, a, i) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "getStatus",
                      value: (function () {
                        var e = Qt()(
                          jt.a.mark(function e(t) {
                            var r, n, a, i, u, s;
                            return jt.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((r = this.metadata.issuer),
                                        void 0 !==
                                          (n = this.metadata.messageId))
                                      ) {
                                        e.next = 4;
                                        break;
                                      }
                                      throw new Error(
                                        "Claim id not specified.",
                                      );
                                    case 4:
                                      return (
                                        (a = new oa(t)),
                                        (i = La(n)),
                                        (e.next = 8),
                                        a.sendRawTransaction(i.serialize(), !0)
                                      );
                                    case 8:
                                      return (
                                        (u = e.sent),
                                        (s = ai.deserialize(u)),
                                        console.log(s),
                                        e.abrupt(
                                          "return",
                                          s.status === ri.ATTESTED &&
                                            s.issuerId === r,
                                        )
                                      );
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              this,
                            );
                          }),
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    },
                    {
                      key: "payloadToJSON",
                      value: function () {
                        return {
                          ver: this.version,
                          "@context": this.context,
                          clm: this.content,
                          "clm-rev": this.revocation,
                        };
                      },
                    },
                    {
                      key: "payloadFromJSON",
                      value: function (e) {
                        ((this.version = e.ver),
                          (this.context = e["@context"]),
                          (this.content = e.clm),
                          (this.revocation = e["clm-rev"]));
                      },
                    },
                    {
                      key: "serializeHeader",
                      value: function (e, r) {
                        if (this.useProof) {
                          if (void 0 === e || void 0 === r)
                            throw new Error("Signature is needed fow JWT-X.");
                          var n = { alg: e.labelJWS, typ: "JWT-X", kid: r },
                            a = P()(n);
                          return cr.encode(a, "utf-8");
                        }
                        return Mn()(
                          t.prototype.__proto__ || Ze()(t.prototype),
                          "serializeHeader",
                          this,
                        ).call(this, e, r);
                      },
                    },
                    {
                      key: "serializeProof",
                      value: function () {
                        var e = P()(this.proof);
                        return cr.encode(e, "utf-8");
                      },
                    },
                  ]),
                  t
                );
              })(Xa),
              ai = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e();
                        if (void 0 !== t.Result && "" === t.Result.Result)
                          return ((r.status = ri.NOTFOUND), r);
                        var n = new Ce(t.Result.Result);
                        (n.read(1), n.readNextLen(), n.read(1));
                        var a = Ae(n.readNextBytes());
                        n.read(1);
                        var i = Ae(n.readNextBytes());
                        n.read(1);
                        var u = Ae(n.readNextBytes());
                        n.read(1);
                        var s = n.readNextBytes();
                        return (
                          (r.claimId = a),
                          (r.issuerId = i),
                          (r.subjectId = u),
                          s || (s = "00"),
                          (r.status = s),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })();
            !(function (e) {
              ((e.REVOKED = "00"), (e.ATTESTED = "01"), (e.NOTFOUND = "-1"));
            })(ri || (ri = {}));
            var ii = n(27),
              ui = n.n(ii),
              si = (function () {
                function e(t, r, n, a) {
                  (A()(this, e),
                    (this.hash = "sha256"),
                    (this.id = t),
                    (this.encryptedKey = r),
                    (this.address = n),
                    (this.salt = a));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "toJson",
                        value: function () {
                          var e;
                          return E()(
                            { id: this.id },
                            this.encryptedKey.serializeJson(),
                            ((e = {
                              address: this.address.toBase58(),
                              salt: this.salt,
                            }),
                            ui()(e, "enc-alg", "aes-256-gcm"),
                            ui()(e, "hash", this.hash),
                            ui()(e, "publicKey", this.publicKey),
                            e),
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "fromJson",
                        value: function (t) {
                          var r = pr(t),
                            n = new e(t.id, r, new Wt(t.address), t.salt);
                          return (
                            (n.publicKey = t.publicKey),
                            (n.hash = t.hash),
                            n
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              oi = (function () {
                function e() {
                  (A()(this, e), (this.controls = []));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "addControl",
                        value: function (e) {
                          var t = !0,
                            r = !1,
                            n = void 0;
                          try {
                            for (
                              var a, i = te()(this.controls);
                              !(t = (a = i.next()).done);
                              t = !0
                            )
                              if (
                                a.value.address.toBase58() ===
                                e.address.toBase58()
                              )
                                return;
                          } catch (e) {
                            ((r = !0), (n = e));
                          } finally {
                            try {
                              !t && i.return && i.return();
                            } finally {
                              if (r) throw n;
                            }
                          }
                          ((e.id = (this.controls.length + 1).toString()),
                            this.controls.push(e));
                        },
                      },
                      {
                        key: "toJson",
                        value: function () {
                          return P()(this.toJsonObj());
                        },
                      },
                      {
                        key: "toJsonObj",
                        value: function () {
                          return {
                            ontid: this.ontid,
                            label: this.label,
                            lock: this.lock,
                            isDefault: this.isDefault,
                            controls: this.controls.map(function (e) {
                              return e.toJson();
                            }),
                            extra: this.extra,
                          };
                        },
                      },
                      {
                        key: "exportPrivateKey",
                        value: function (e, t) {
                          var r = this.controls[0].encryptedKey,
                            n = this.controls[0].address,
                            a = this.controls[0].salt;
                          return r.decrypt(e, n, a, t);
                        },
                      },
                      {
                        key: "signTransaction",
                        value: function (e, t, r) {
                          var n = this.exportPrivateKey(e, r);
                          return (wn(t, n, n.algorithm.defaultSchema), t);
                        },
                      },
                    ],
                    [
                      {
                        key: "importIdentity",
                        value: function (r, n, a, i, u, s) {
                          var o = new e(),
                            c = t.from(u, "base64").toString("hex"),
                            l = n.decrypt(a, i, c, s);
                          r || (r = ge(Le(4)));
                          var h = l.getPublicKey();
                          ((o.ontid = Wt.generateOntid(h)),
                            (o.label = r),
                            (o.lock = !1),
                            (o.isDefault = !1));
                          var f = new si("1", n, Wt.fromOntid(o.ontid), u);
                          return (
                            (f.publicKey = h.serializeHex()),
                            o.controls.push(f),
                            o
                          );
                        },
                      },
                      {
                        key: "create",
                        value: function (r, n, a, i) {
                          var u = new e();
                          ((u.ontid = ""),
                            (u.label = a),
                            (u.lock = !1),
                            (u.isDefault = !1));
                          var s = r.getPublicKey();
                          u.ontid = Wt.generateOntid(s);
                          var o = Wt.fromOntid(u.ontid),
                            c = Me(16),
                            l = r.encrypt(n, o, c, i),
                            h = t.from(c, "hex").toString("base64"),
                            f = new si("1", l, o, h);
                          return (
                            (f.publicKey = s.serializeHex()),
                            u.controls.push(f),
                            u
                          );
                        },
                      },
                      {
                        key: "parseJson",
                        value: function (t) {
                          return e.parseJsonObj(JSON.parse(t));
                        },
                      },
                      {
                        key: "parseJsonObj",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.ontid = t.ontid),
                            (r.label = t.label),
                            (r.lock = t.lock),
                            (r.isDefault = t.isDefault),
                            (r.controls = t.controls.map(function (e) {
                              return si.fromJson(e);
                            })),
                            (r.extra = t.extra),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              ci = (function () {
                function e() {
                  (A()(this, e), (this.version = 0));
                }
                return (
                  x()(e, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = this.serializeUnsigned();
                        e += Pe(this.scripts.length);
                        var t = !0,
                          r = !1,
                          n = void 0;
                        try {
                          for (
                            var a, i = te()(this.scripts);
                            !(t = (a = i.next()).done);
                            t = !0
                          )
                            e += a.value.serialize();
                        } catch (e) {
                          ((r = !0), (n = e));
                        } finally {
                          try {
                            !t && i.return && i.return();
                          } finally {
                            if (r) throw n;
                          }
                        }
                        return e;
                      },
                    },
                    {
                      key: "serializeUnsigned",
                      value: function () {
                        var e = "";
                        ((e += Re(this.type)),
                          (e += Re(this.version)),
                          (e += this.serializeExclusiveData()),
                          (e += Pe(this.attributes.length)));
                        var t = !0,
                          r = !1,
                          n = void 0;
                        try {
                          for (
                            var a, i = te()(this.attributes);
                            !(t = (a = i.next()).done);
                            t = !0
                          )
                            e += a.value.serialize();
                        } catch (e) {
                          ((r = !0), (n = e));
                        } finally {
                          try {
                            !t && i.return && i.return();
                          } finally {
                            if (r) throw n;
                          }
                        }
                        e += Pe(this.inputs.length);
                        var u = !0,
                          s = !1,
                          o = void 0;
                        try {
                          for (
                            var c, l = te()(this.inputs);
                            !(u = (c = l.next()).done);
                            u = !0
                          )
                            e += c.value.serialize();
                        } catch (e) {
                          ((s = !0), (o = e));
                        } finally {
                          try {
                            !u && l.return && l.return();
                          } finally {
                            if (s) throw o;
                          }
                        }
                        e += Pe(this.outputs.length);
                        var h = !0,
                          f = !1,
                          d = void 0;
                        try {
                          for (
                            var v, y = te()(this.outputs);
                            !(h = (v = y.next()).done);
                            h = !0
                          )
                            e += v.value.serialize();
                        } catch (e) {
                          ((f = !0), (d = e));
                        } finally {
                          try {
                            !h && y.return && y.return();
                          } finally {
                            if (f) throw d;
                          }
                        }
                        return e;
                      },
                    },
                    {
                      key: "getHash",
                      value: function () {
                        var e = this.serializeUnsigned(),
                          t = ne.enc.Hex.parse(e),
                          r = ne.SHA256(t).toString();
                        return ne.SHA256(ne.enc.Hex.parse(r)).toString();
                      },
                    },
                    {
                      key: "getSignContent",
                      value: function () {
                        return this.getHashData();
                      },
                    },
                    {
                      key: "serializeUnsignedData",
                      value: function () {
                        return this.getHashData();
                      },
                    },
                    {
                      key: "getHashData",
                      value: function () {
                        return this.serializeUnsigned();
                      },
                    },
                    {
                      key: "sign",
                      value: function (e) {
                        var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : Ye.ECDSAwithSHA256;
                        return e
                          .sign(this.getHashData(), t)
                          .serializeHex()
                          .substring(2);
                      },
                    },
                    {
                      key: "serializeExclusiveData",
                      value: function () {
                        return "";
                      },
                    },
                  ]),
                  e
                );
              })(),
              li = (function (e) {
                function t() {
                  A()(this, t);
                  var e = et()(this, (t.__proto__ || Ze()(t)).call(this));
                  return ((e.type = zr.Invoke), e);
                }
                return (
                  rt()(t, e),
                  x()(t, [
                    {
                      key: "serializeExclusiveData",
                      value: function () {
                        var e = "";
                        return (
                          (e += ke(this.script)),
                          e + Re(this.gas, 8, !0)
                        );
                      },
                    },
                  ]),
                  t
                );
              })(ci),
              hi = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "sendRawTransaction",
                      value: function (e, t) {
                        var r = this.makeRequest("sendrawtransaction", t);
                        return ve.a.post(e, r).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "makeRequest",
                      value: function (e) {
                        for (
                          var t = arguments.length,
                            r = Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          r[n - 1] = arguments[n];
                        return { jsonrpc: "2.0", method: e, params: r, id: 1 };
                      },
                    },
                    {
                      key: "getBalance",
                      value: function (e, t, r) {
                        var n = this.makeRequest(
                          "getstorage",
                          t.toHexString(),
                          r.serialize(),
                        );
                        return ve.a.post(e, n).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                  ]),
                  e
                );
              })(),
              fi = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          return ((e += ke(this.parameter)), e + ke(this.code));
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new Ce(),
                            n = new e();
                          return (
                            (n.parameter = r.readNextBytes()),
                            (n.code = r.readNextBytes()),
                            n
                          );
                        },
                      },
                      {
                        key: "programFromParams",
                        value: function (e) {
                          return pt(e);
                        },
                      },
                      {
                        key: "programFromPubKey",
                        value: function (e) {
                          return vt(e);
                        },
                      },
                      {
                        key: "programFromMultiPubKey",
                        value: function (e, t) {
                          return yt(t, e);
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              di = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "makeInvokeTransaction",
                      value: function (e, t, r) {
                        var n = zt(r);
                        return (
                          (n += Re(103)),
                          (n += e.serialize()),
                          this.makeInvocationTransaction(n, t)
                        );
                      },
                    },
                    {
                      key: "makeInvocationTransaction",
                      value: function (e, t) {
                        var r = new li();
                        ((r.version = 1), (r.attributes = []));
                        var n = new Ur();
                        ((n.usage = gr.Script),
                          (n.data = t.serialize()),
                          (r.attributes[0] = n));
                        var a = new Ur();
                        return (
                          (a.usage = gr.DescriptionUrl),
                          (a.data = Me(16)),
                          (r.attributes[1] = a),
                          (r.inputs = []),
                          (r.outputs = []),
                          (r.script = e),
                          (r.gas = 0),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              vi = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "equals",
                        value: function (t) {
                          return (
                            t === this ||
                            (null !== t &&
                              t instanceof e &&
                              this.prevHash === t.prevHash &&
                              this.prevIndex === t.prevIndex)
                          );
                        },
                      },
                      {
                        key: "hashCode",
                        value: function () {
                          return (
                            parseInt(Te(this.prevHash), 16) + this.prevIndex
                          );
                        },
                      },
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          return (
                            (e += this.prevHash),
                            e + Re(this.prevIndex, 2, !0)
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new Ce(t),
                            n = new e();
                          return (
                            (n.prevHash = r.read(20)),
                            (n.prevIndex = parseInt(Te(r.read(2)), 16)),
                            n
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              yi = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          return (
                            (e += this.assetId),
                            (e += Re(this.value, 8, !0)),
                            e + this.scriptHash.serialize()
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new Ce(t),
                            n = new e();
                          return (
                            (n.assetId = r.read(32)),
                            (n.value = r.readLong()),
                            (n.scriptHash = new Wt(r.read(20))),
                            n
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              pi = (function () {
                function e(t) {
                  (A()(this, e), (this.url = t || G.RPC_URL));
                }
                return (
                  x()(e, [
                    {
                      key: "getUrl",
                      value: function () {
                        return this.url;
                      },
                    },
                    {
                      key: "makeRequest",
                      value: function (e) {
                        for (
                          var t = arguments.length,
                            r = Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          r[n - 1] = arguments[n];
                        return { jsonrpc: "2.0", method: e, params: r, id: 1 };
                      },
                    },
                    {
                      key: "getBalance",
                      value: function (e) {
                        var t = this.makeRequest("getbalance", e.toBase58());
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "sendRawTransaction",
                      value: function (e) {
                        var t = void 0;
                        return (
                          (t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1]
                              ? this.makeRequest("sendrawtransaction", e, 1)
                              : this.makeRequest("sendrawtransaction", e)),
                          ve.a.post(this.url, t).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getRawTransaction",
                      value: function (e) {
                        var t = this.makeRequest("getrawtransaction", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getRawTransactionJson",
                      value: function (e) {
                        var t = this.makeRequest("getrawtransaction", e, 1);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getNodeCount",
                      value: function () {
                        var e = this.makeRequest("getconnectioncount");
                        return ve.a.post(this.url, e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockHeight",
                      value: function () {
                        var e = this.makeRequest("getblockcount");
                        return ve.a.post(this.url, e).then(function (e) {
                          return e.data && e.data.result
                            ? e.data.result - 1
                            : 0;
                        });
                      },
                    },
                    {
                      key: "getBlockCount",
                      value: function () {
                        var e = this.makeRequest("getblockcount");
                        return ve.a.post(this.url, e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockJson",
                      value: function (e) {
                        var t = this.makeRequest("getblock", e, 1);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getContract",
                      value: function (e) {
                        var t = this.makeRequest("getcontractstate", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getContractJson",
                      value: function (e) {
                        var t = this.makeRequest("getcontractstate", e, 1);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlock",
                      value: function (e) {
                        var t = this.makeRequest("getblock", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getSmartCodeEvent",
                      value: function (e) {
                        var t = this.makeRequest("getsmartcodeevent", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockHeightByTxHash",
                      value: function (e) {
                        var t = this.makeRequest("getblockheightbytxhash", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getStorage",
                      value: function (e, t) {
                        var r = this.makeRequest("getstorage", e, t);
                        return (
                          console.log(r),
                          ve.a.post(this.url, r).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getMerkleProof",
                      value: function (e) {
                        var t = this.makeRequest("getmerkleproof", e);
                        return (
                          console.log(this.url),
                          console.log(t),
                          ve.a.post(this.url, t).then(function (e) {
                            return e.data;
                          })
                        );
                      },
                    },
                    {
                      key: "getAllowance",
                      value: function (e, t, r) {
                        if ("ont" !== e && "ong" !== e) throw m.INVALID_PARAMS;
                        var n = this.makeRequest(
                          "getallowance",
                          e,
                          t.toBase58(),
                          r.toBase58(),
                        );
                        return ve.a.post(this.url, n).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getUnboundOng",
                      value: function (e) {
                        var t = this.makeRequest(
                          "getunboundong",
                          "ong",
                          e.toBase58(),
                          e.toBase58(),
                        );
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getBlockTxsByHeight",
                      value: function (e) {
                        var t = this.makeRequest("getblocktxsbyheight", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getGasPrice",
                      value: function () {
                        var e = this.makeRequest("getgasprice");
                        return ve.a.post(this.url, e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getGrantOng",
                      value: function (e) {
                        var t = this.makeRequest("getgrantong", e.toBase58());
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getMempoolTxCount",
                      value: function () {
                        var e = this.makeRequest("getmempooltxcount");
                        return ve.a.post(this.url, e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getMempoolTxState",
                      value: function (e) {
                        var t = this.makeRequest("getmempooltxstate", e);
                        return ve.a.post(this.url, t).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                    {
                      key: "getVersion",
                      value: function () {
                        var e = this.makeRequest("getversion");
                        return ve.a.post(this.url, e).then(function (e) {
                          return e.data;
                        });
                      },
                    },
                  ]),
                  e
                );
              })(),
              gi = function e(t, r, n, a) {
                (A()(this, e),
                  (this.from = t.serialize()),
                  (this.to = r.serialize()),
                  (this.tokenId = Re(n)),
                  (this.value = new se.BigNumber(a)));
              },
              mi = function e(t, r, n, a, i) {
                (A()(this, e),
                  (this.spender = t.serialize()),
                  (this.from = r.serialize()),
                  (this.to = n.serialize()),
                  (this.tokenId = Re(a)),
                  (this.value = new se.BigNumber(i)));
              },
              wi = "name",
              Si = "symbol",
              Ai = "totalSupply",
              ki = "balanceOf",
              xi = "transfer",
              bi = "transferMulti",
              Ei = "approve",
              Ri = "approveMulti",
              Pi = "allowance",
              Ti = "transferFrom",
              Ii = "transferFromMulti",
              Ni = "compound",
              Ci = "init",
              Bi = "balancesOf",
              Di = "totalBalanceOf",
              Oi = (function () {
                function e(t) {
                  (A()(this, e), (this.contractAddr = t));
                }
                return (
                  x()(e, [
                    {
                      key: "makeInitTx",
                      value: function (e, t, r) {
                        return bn(Ci, [], this.contractAddr, e, t, r);
                      },
                    },
                    {
                      key: "makeTransferTx",
                      value: function (e, t, r, n, a, i, u) {
                        var s = xi,
                          o = [
                            new Pt("sender", St.ByteArray, e.serialize()),
                            new Pt("recv", St.ByteArray, t.serialize()),
                            new Pt("tokenId", St.ByteArray, r),
                            new Pt("amount", St.Long, n),
                          ];
                        return bn(s, o, this.contractAddr, a, i, u);
                      },
                    },
                    {
                      key: "makeTransferMultiTx",
                      value: function (e, t, r, n) {
                        var a = [];
                        a.push(Se(bi));
                        var i = [],
                          u = !0,
                          s = !1,
                          o = void 0;
                        try {
                          for (
                            var c, l = te()(e);
                            !(u = (c = l.next()).done);
                            u = !0
                          ) {
                            var h = c.value;
                            i.push([h.from, h.to, h.tokenId, h.value]);
                          }
                        } catch (e) {
                          ((s = !0), (o = e));
                        } finally {
                          try {
                            !u && l.return && l.return();
                          } finally {
                            if (s) throw o;
                          }
                        }
                        a.push(i);
                        var f = Kt(a);
                        return bn("", f, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeApproveTx",
                      value: function (e, t, r, n, a, i, u) {
                        var s = Ei,
                          o = [
                            new Pt("owner", St.ByteArray, e.serialize()),
                            new Pt("spender", St.ByteArray, t.serialize()),
                            new Pt("tokenId", St.ByteArray, Re(r)),
                            new Pt("amount", St.Long, n),
                          ];
                        return bn(s, o, this.contractAddr, a, i, u);
                      },
                    },
                    {
                      key: "makeApproveMulti",
                      value: function (e, t, r, n) {
                        var a = Ri,
                          i = [];
                        i.push(Se(a));
                        var u = [],
                          s = !0,
                          o = !1,
                          c = void 0;
                        try {
                          for (
                            var l, h = te()(e);
                            !(s = (l = h.next()).done);
                            s = !0
                          ) {
                            var f = l.value;
                            u.push([f.from, f.to, f.tokenId, f.value]);
                          }
                        } catch (e) {
                          ((o = !0), (c = e));
                        } finally {
                          try {
                            !s && h.return && h.return();
                          } finally {
                            if (o) throw c;
                          }
                        }
                        i.push(u);
                        var d = Kt(i);
                        return bn("", d, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeTransferFromMulti",
                      value: function (e, t, r, n) {
                        var a = Ii,
                          i = [];
                        i.push(Se(a));
                        var u = [],
                          s = !0,
                          o = !1,
                          c = void 0;
                        try {
                          for (
                            var l, h = te()(e);
                            !(s = (l = h.next()).done);
                            s = !0
                          ) {
                            var f = l.value;
                            u.push([
                              f.spender,
                              f.from,
                              f.to,
                              f.tokenId,
                              f.value,
                            ]);
                          }
                        } catch (e) {
                          ((o = !0), (c = e));
                        } finally {
                          try {
                            !s && h.return && h.return();
                          } finally {
                            if (o) throw c;
                          }
                        }
                        i.push(u);
                        var d = Kt(i);
                        return bn("", d, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeTransferFromTx",
                      value: function (e, t, r, n, a, i, u, s) {
                        var o = Ti,
                          c = [
                            new Pt("sender", St.ByteArray, e.serialize()),
                            new Pt("from", St.ByteArray, t.serialize()),
                            new Pt("to", St.ByteArray, r.serialize()),
                            new Pt("tokenId", St.ByteArray, Re(n)),
                            new Pt("amount", St.Long, a),
                          ];
                        return bn(o, c, this.contractAddr, i, u, s);
                      },
                    },
                    {
                      key: "makeCompoundTx",
                      value: function (e, t, r, n, a) {
                        var i = Ni,
                          u = [
                            new Pt("account", St.ByteArray, e.serialize()),
                            new Pt("compoundNum", St.Integer, t),
                          ];
                        return bn(i, u, this.contractAddr, r, n, a);
                      },
                    },
                    {
                      key: "makeQueryAllowanceTx",
                      value: function (e, t, r) {
                        var n = Pi,
                          a = [
                            new Pt("owner", St.ByteArray, e.serialize()),
                            new Pt("spender", St.ByteArray, t.serialize()),
                            new Pt("tokenId", St.ByteArray, Re(r)),
                          ];
                        return bn(n, a, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryBalanceOfTx",
                      value: function (e, t) {
                        var r = ki,
                          n = [
                            new Pt("addr", St.ByteArray, e.serialize()),
                            new Pt("tokenId", St.ByteArray, Re(t)),
                          ];
                        return bn(r, n, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryTotalSupplyTx",
                      value: function (e) {
                        var t = Ai,
                          r = [new Pt("tokenId", St.ByteArray, Re(e))];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryNameTx",
                      value: function (e) {
                        var t = wi,
                          r = [new Pt("tokenId", St.ByteArray, Re(e))];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryDecimalsTx",
                      value: function () {
                        return bn(Si, [], this.contractAddr);
                      },
                    },
                    {
                      key: "makeQuerySymbolTx",
                      value: function (e) {
                        var t = Si,
                          r = [new Pt("tokenId", St.ByteArray, Re(e))];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryBalancesTx",
                      value: function (e) {
                        var t = Bi,
                          r = [new Pt("account", St.ByteArray, e.serialize())];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryTotalBalanceTx",
                      value: function (e) {
                        var t = Di,
                          r = [new Pt("account", St.ByteArray, e.serialize())];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Hi = (function () {
                function e() {
                  (A()(this, e),
                    (this.defaultOntid = ""),
                    (this.defaultAccountAddress = ""),
                    (this.identities = []),
                    (this.accounts = []));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "addAccount",
                        value: function (e) {
                          var t = !0,
                            r = !1,
                            n = void 0;
                          try {
                            for (
                              var a, i = te()(this.accounts);
                              !(t = (a = i.next()).done);
                              t = !0
                            )
                              if (
                                a.value.address.toBase58() ===
                                e.address.toBase58()
                              )
                                return;
                          } catch (e) {
                            ((r = !0), (n = e));
                          } finally {
                            try {
                              !t && i.return && i.return();
                            } finally {
                              if (r) throw n;
                            }
                          }
                          this.accounts.push(e);
                        },
                      },
                      {
                        key: "addIdentity",
                        value: function (e) {
                          var t = !0,
                            r = !1,
                            n = void 0;
                          try {
                            for (
                              var a, i = te()(this.identities);
                              !(t = (a = i.next()).done);
                              t = !0
                            )
                              if (a.value.ontid === e.ontid) return;
                          } catch (e) {
                            ((r = !0), (n = e));
                          } finally {
                            try {
                              !t && i.return && i.return();
                            } finally {
                              if (r) throw n;
                            }
                          }
                          this.identities.push(e);
                        },
                      },
                      {
                        key: "setDefaultAccount",
                        value: function (e) {
                          this.defaultAccountAddress = e;
                        },
                      },
                      {
                        key: "setDefaultIdentity",
                        value: function (e) {
                          this.defaultOntid = e;
                        },
                      },
                      {
                        key: "toJson",
                        value: function () {
                          return P()(this.toJsonObj());
                        },
                      },
                      {
                        key: "toJsonObj",
                        value: function () {
                          return {
                            name: this.name,
                            defaultOntid: this.defaultOntid,
                            defaultAccountAddress: this.defaultAccountAddress,
                            createTime: this.createTime,
                            version: this.version,
                            scrypt: this.scrypt,
                            identities: this.identities.map(function (e) {
                              return e.toJsonObj();
                            }),
                            accounts: this.accounts.map(function (e) {
                              return e.toJsonObj();
                            }),
                            extra: null,
                          };
                        },
                      },
                      {
                        key: "signatureData",
                        value: function () {
                          return "";
                        },
                      },
                      {
                        key: "toWalletFile",
                        value: function () {
                          return this.toJsonObj();
                        },
                      },
                    ],
                    [
                      {
                        key: "parseJson",
                        value: function (t) {
                          return e.parseJsonObj(JSON.parse(t));
                        },
                      },
                      {
                        key: "parseJsonObj",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.name = t.name),
                            (r.defaultOntid = t.defaultOntid),
                            (r.defaultAccountAddress = t.defaultAccountAddress),
                            (r.createTime = t.createTime),
                            (r.version = t.version),
                            (r.scrypt = t.scrypt),
                            (r.identities =
                              t.identities &&
                              t.identities.map(function (e) {
                                return oi.parseJsonObj(e);
                              })),
                            (r.accounts =
                              t.accounts &&
                              t.accounts.map(function (e) {
                                return Un.parseJsonObj(e);
                              })),
                            (r.extra = t.extra),
                            r
                          );
                        },
                      },
                      {
                        key: "fromWalletFile",
                        value: function (t) {
                          return e.parseJsonObj(t);
                        },
                      },
                      {
                        key: "create",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.name = t),
                            (r.createTime = new Date().toISOString()),
                            (r.version = "1.0"),
                            (r.scrypt = {
                              n: N.cost,
                              r: N.blockSize,
                              p: N.parallel,
                              dkLen: N.size,
                            }),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              _i = "init",
              zi = "transfer",
              Ui = "transferMulti",
              Li = "approve",
              Mi = "transferFrom",
              Ki = "allowance",
              Vi = "balanceOf",
              Gi = "totalSupply",
              Wi = "symbol",
              Ji = "decimals",
              Fi = "name",
              qi = function (e) {
                var t = Ne(oe.fromString(e));
                return new Pt("value", St.ByteArray, t);
              },
              ji = function e(t, r, n) {
                (A()(this, e),
                  (this.from = t.serialize()),
                  (this.to = r.serialize()),
                  (this.amount = qi(n).value));
              },
              Yi = (function () {
                function e(t) {
                  (A()(this, e), (this.contractAddr = t));
                }
                return (
                  x()(e, [
                    {
                      key: "init",
                      value: function (e, t, r) {
                        return bn(_i, [], this.contractAddr, e, t, r);
                      },
                    },
                    {
                      key: "makeTransferTx",
                      value: function (e, t, r, n, a, i) {
                        var u = zi,
                          s = new Pt("from", St.ByteArray, e.serialize()),
                          o = new Pt("to", St.ByteArray, t.serialize()),
                          c = qi(r);
                        return bn(u, [s, o, c], this.contractAddr, n, a, i);
                      },
                    },
                    {
                      key: "makeTransferMultiTx",
                      value: function (e, t, r, n) {
                        var a = [];
                        a.push(Se(Ui));
                        var i = [],
                          u = !0,
                          s = !1,
                          o = void 0;
                        try {
                          for (
                            var c, l = te()(e);
                            !(u = (c = l.next()).done);
                            u = !0
                          ) {
                            var h = c.value;
                            i.push([h.from, h.to, h.amount]);
                          }
                        } catch (e) {
                          ((s = !0), (o = e));
                        } finally {
                          try {
                            !u && l.return && l.return();
                          } finally {
                            if (s) throw o;
                          }
                        }
                        a.push(i);
                        var f = Kt(a);
                        return bn("", f, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeApproveTx",
                      value: function (e, t, r, n, a, i) {
                        var u = Li,
                          s = [
                            new Pt("owner", St.ByteArray, e.serialize()),
                            new Pt("spender", St.ByteArray, t.serialize()),
                            qi(r),
                          ];
                        return bn(u, s, this.contractAddr, n, a, i);
                      },
                    },
                    {
                      key: "makeTransferFromTx",
                      value: function (e, t, r, n, a, i, u) {
                        var s = Mi,
                          o = [
                            new Pt("owner", St.ByteArray, e.serialize()),
                            new Pt("from", St.ByteArray, t.serialize()),
                            new Pt("to", St.ByteArray, r.serialize()),
                            qi(n),
                          ];
                        return bn(s, o, this.contractAddr, a, i, u);
                      },
                    },
                    {
                      key: "makeQueryAllowanceTx",
                      value: function (e, t) {
                        var r = Ki,
                          n = [
                            new Pt("owner", St.ByteArray, e.serialize()),
                            new Pt("spender", St.ByteArray, t.serialize()),
                          ];
                        return bn(r, n, this.contractAddr);
                      },
                    },
                    {
                      key: "queryBalanceOf",
                      value: function (e) {
                        var t = Vi,
                          r = new Pt("from", St.ByteArray, e.serialize());
                        return bn(t, [r], this.contractAddr);
                      },
                    },
                    {
                      key: "queryTotalSupply",
                      value: function () {
                        return bn(Gi, [], this.contractAddr);
                      },
                    },
                    {
                      key: "queryDecimals",
                      value: function () {
                        return bn(Ji, [], this.contractAddr);
                      },
                    },
                    {
                      key: "querySymbol",
                      value: function () {
                        return bn(Wi, [], this.contractAddr);
                      },
                    },
                    {
                      key: "queryName",
                      value: function () {
                        return bn(Fi, [], this.contractAddr);
                      },
                    },
                  ]),
                  e
                );
              })(),
              Qi = n(29),
              Xi = "ceab719b8baa2310f232ee0d277c061704541cfb",
              Zi = "http://neonode1.ont.network:10332",
              $i = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "setServerNode",
                      value: function (t) {
                        if (t) {
                          var r = "";
                          return (
                            (r =
                              t.indexOf("http") > -1
                                ? t.substr("http://".length)
                                : t),
                            void (e.SERVER_NODE = r)
                          );
                        }
                        throw new Error("Can not set " + t + "as server node");
                      },
                    },
                    {
                      key: "setRestPort",
                      value: function (t) {
                        if (t)
                          return (
                            (e.REST_PORT = t),
                            void (e.restClient = new oa(
                              "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                            ))
                          );
                        throw new Error(
                          "Can not set " + t + " as restful port",
                        );
                      },
                    },
                    {
                      key: "setSocketPort",
                      value: function (t) {
                        if (t)
                          return (
                            (e.SOCKET_PORT = t),
                            void (e.socketClient = new Ba(
                              "ws://" + e.SERVER_NODE + ":" + e.SOCKET_PORT,
                            ))
                          );
                        throw new Error("Can not set " + t + "as socket port");
                      },
                    },
                    {
                      key: "getDecryptError",
                      value: function (e) {
                        return { error: m.Decrypto_ERROR, result: "" };
                      },
                    },
                    {
                      key: "transformPassword",
                      value: function (e) {
                        return We(e) ? t.from(e, "base64").toString() : e;
                      },
                    },
                    {
                      key: "createWallet",
                      value: function (t, r, n, a, i, u) {
                        var s = Hi.create(t);
                        r = this.transformPassword(r);
                        var o = fr.random(),
                          c = oi.create(o, r, t);
                        ((s.defaultOntid = c.ontid), s.addIdentity(c));
                        var l = { error: 0, result: s.toJson(), tx: "" },
                          h = o.getPublicKey(),
                          f = an(c.ontid, h, a, i);
                        return (
                          (f.payer = new Wt(n)),
                          wn(f, o),
                          (o.key = ""),
                          (r = ""),
                          new oa("http://" + e.SERVER_NODE + ":" + e.REST_PORT)
                            .sendRawTransaction(f.serialize(), !0)
                            .then(function (e) {
                              if ("01" === e.Result.Result)
                                return (
                                  (l.tx = f.serialize()),
                                  u && De(P()(l), u),
                                  l
                                );
                              var t = { error: m.PreExec_ERROR, result: "" };
                              return (u && De(P()(t), u), t);
                            })
                            .catch(function (e) {
                              ((l = { error: m.NETWORK_ERROR, result: "" }),
                                u && De(P()(l), u));
                            })
                        );
                      },
                    },
                    {
                      key: "importIdentityWithPrivateKey",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          r = arguments[1],
                          n = arguments[2],
                          a = arguments[3];
                        if (
                          ((r = r.trim()),
                          (n = this.transformPassword(n)),
                          !r || 64 !== r.length || !Je(r))
                        ) {
                          var i = { error: m.INVALID_PARAMS, result: "" };
                          return (a && De(P()(i), a), i);
                        }
                        var u = void 0,
                          s = new fr(r),
                          o = oi.create(s, n, t);
                        u = { error: m.SUCCESS, result: o.toJson() };
                        var c = ln(o.ontid);
                        return new oa(
                          "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                        )
                          .sendRawTransaction(c.serialize(), !0)
                          .then(function (e) {
                            return (
                              e.Result.Result ||
                                ((u.error = m.UNKNOWN_ONTID), (u.result = "")),
                              a && De(P()(u), a),
                              u
                            );
                          })
                          .catch(function (e) {
                            ((u = { error: m.NETWORK_ERROR, result: "" }),
                              a && De(P()(u), a));
                          });
                      },
                    },
                    {
                      key: "importIdentityWithWif",
                      value: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          r = arguments[1],
                          n = arguments[2],
                          a = arguments[3];
                        ((r = r.trim()), (n = this.transformPassword(n)));
                        var i = void 0,
                          u = void 0;
                        try {
                          u = fr.deserializeWIF(r);
                        } catch (e) {
                          var s = { error: m.INVALID_PARAMS, result: "" };
                          return (a && De(P()(s), a), s);
                        }
                        var o = oi.create(u, n, t);
                        i = { error: m.SUCCESS, result: o.toJson() };
                        var c = ln(o.ontid);
                        return new oa(
                          "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                        )
                          .sendRawTransaction(c.serialize(), !0)
                          .then(function (e) {
                            return (
                              e.Result.Result ||
                                ((i.error = m.UNKNOWN_ONTID), (i.result = "")),
                              a && De(P()(i), a),
                              i
                            );
                          })
                          .catch(function (e) {
                            ((i = { error: m.NETWORK_ERROR, result: "" }),
                              a && De(P()(i), a));
                          });
                      },
                    },
                    {
                      key: "importIdentityWithWifOffChain",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "",
                          t = arguments[1],
                          r = arguments[2],
                          n = arguments[3];
                        ((t = t.trim()), (r = this.transformPassword(r)));
                        var a,
                          i = void 0;
                        try {
                          i = fr.deserializeWIF(t);
                        } catch (e) {
                          var u = { error: m.INVALID_PARAMS, result: "" };
                          return (n && De(P()(u), n), u);
                        }
                        var s = oi.create(i, r, e);
                        return (
                          (a = { error: m.SUCCESS, result: s.toJson() }),
                          n && De(P()(a), n),
                          a
                        );
                      },
                    },
                    {
                      key: "importIdentityWithWallet",
                      value: function (t, r, n, a, i, u) {
                        var s = void 0,
                          o = new oi();
                        try {
                          var c = new fr(r),
                            l = new Wt(a);
                          ((n = this.transformPassword(n)),
                            (o = oi.importIdentity(t, c, n, l, i)));
                        } catch (e) {
                          return (
                            (s = this.getDecryptError(e)),
                            u && De(P()(s), u),
                            s
                          );
                        }
                        s = { error: m.SUCCESS, result: o.toJson() };
                        var h = Tn(ln(o.ontid)),
                          f = In(
                            "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                            !0,
                          );
                        return (
                          (n = ""),
                          ve.a
                            .post(f, h)
                            .then(function (e) {
                              return (
                                e.data.Result.Result ||
                                  ((s.error = m.UNKNOWN_ONTID),
                                  (s.result = "")),
                                u && De(P()(s), u),
                                s
                              );
                            })
                            .catch(function (e) {
                              ((s = { error: m.NETWORK_ERROR, result: "" }),
                                u && De(P()(s), u));
                            })
                        );
                      },
                    },
                    {
                      key: "importIdentityAndCreateWallet",
                      value: function (t, r, n, a, i, u) {
                        var s = new oi(),
                          o = {},
                          c = void 0;
                        try {
                          n = this.transformPassword(n);
                          var l = new fr(r),
                            h = new Wt(a);
                          s = oi.importIdentity(t, l, n, h, i);
                          var f = Hi.create(s.label);
                          ((f.defaultOntid = s.ontid), f.addIdentity(s));
                          var d = f.toJson();
                          c = { error: m.SUCCESS, result: d };
                          var v = Tn(ln(s.ontid)),
                            y = In(
                              "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                              !0,
                            );
                          return ve.a
                            .post(y, v)
                            .then(function (e) {
                              return (
                                e.data.Result.Result ||
                                  ((c.error = m.UNKNOWN_ONTID),
                                  (c.result = "")),
                                (n = ""),
                                u && De(P()(c), u),
                                c
                              );
                            })
                            .catch(function (e) {
                              ((c = { error: m.NETWORK_ERROR, result: "" }),
                                u && De(P()(c), u));
                            });
                        } catch (e) {
                          return (
                            (o = this.getDecryptError(e)),
                            u && De(P()(o), u),
                            la.a.reject(o)
                          );
                        }
                      },
                    },
                    {
                      key: "createIdentity",
                      value: function (t, r, n, a, i, u) {
                        var s = fr.random();
                        r = this.transformPassword(r);
                        var o = oi.create(s, r, t),
                          c = o.toJson(),
                          l = { error: m.SUCCESS, result: c, tx: "" },
                          h = s.getPublicKey(),
                          f = an(o.ontid, h, a, i);
                        return (
                          (f.payer = new Wt(n)),
                          wn(f, s),
                          (r = ""),
                          (s.key = ""),
                          new oa("http://" + e.SERVER_NODE + ":" + e.REST_PORT)
                            .sendRawTransaction(f.serialize(), !0)
                            .then(function (e) {
                              if ("01" === e.Result.Result)
                                return (
                                  (l.tx = f.serialize()),
                                  u && De(P()(l), u),
                                  (s.key = ""),
                                  (r = ""),
                                  l
                                );
                              var t = { error: m.PreExec_ERROR, result: "" };
                              return (u && De(P()(t), u), t);
                            })
                            .catch(function (e) {
                              ((l = { error: m.NETWORK_ERROR, result: "" }),
                                u && De(P()(l), u));
                            })
                        );
                      },
                    },
                    {
                      key: "createAccount",
                      value: function (e, r, n) {
                        var a = Ke();
                        r = this.transformPassword(r);
                        var i = Se(a),
                          u = fr.generateFromMnemonic(a),
                          s = Un.create(u, r, e),
                          o = sr(
                            i,
                            s.address,
                            t.from(s.salt, "base64").toString("hex"),
                            r,
                          ),
                          c = s.toJson(),
                          l = { error: m.SUCCESS, result: c, mnemonicEnc: o };
                        return (
                          n && De(P()(l), n),
                          (u.key = ""),
                          (r = ""),
                          (a = ""),
                          l
                        );
                      },
                    },
                    {
                      key: "decryptMnemonicEnc",
                      value: function (e, r, n, a, i) {
                        var u;
                        a = this.transformPassword(a);
                        var s = Ae(
                          or(
                            e,
                            new Wt(r),
                            t.from(n, "base64").toString("hex"),
                            a,
                          ),
                        );
                        return (
                          (u = { error: m.SUCCESS, result: s }),
                          i && De(P()(u), i),
                          u
                        );
                      },
                    },
                    {
                      key: "importAccountWithWallet",
                      value: function (e, t, r, n, a, i) {
                        var u = new Un();
                        a = this.transformPassword(a);
                        var s = new fr(t);
                        try {
                          var o = new Wt(r);
                          u = Un.importAccount(e, s, a, o, n);
                        } catch (e) {
                          var c = this.getDecryptError(e);
                          return (i && De(P()(c), i), c);
                        }
                        var l = { error: m.SUCCESS, result: u.toJson() };
                        return (
                          r !== u.address.toBase58() &&
                            ((l.error = m.INVALID_ADDR), (l.result = "")),
                          i && De(P()(l), i),
                          (a = ""),
                          l
                        );
                      },
                    },
                    {
                      key: "signSelfClaim",
                      value: function (r, n, a, i, u, s, o, c) {
                        var l = void 0;
                        u = this.transformPassword(u);
                        var h = new fr(i),
                          f =
                            "http://" +
                            e.SERVER_NODE +
                            ":" +
                            e.REST_PORT +
                            K.sendRawTx;
                        try {
                          var d = new Wt(s),
                            v = t.from(o, "base64").toString("hex");
                          l = h.decrypt(u, d, v);
                        } catch (e) {
                          var y = this.getDecryptError(e);
                          return (c && De(P()(y), c), y);
                        }
                        var p = { issuer: a, subject: a, issuedAt: He() },
                          g = a + "#keys-1",
                          m = new ni(p, void 0, void 0);
                        m.sign(f, g, l);
                        var w = { error: 0, result: m };
                        return (c && De(P()(w), c), (l.key = ""), (u = ""), w);
                      },
                    },
                    {
                      key: "decryptEncryptedPrivateKey",
                      value: function (e, r, n, a, i) {
                        r = this.transformPassword(r);
                        var u = new fr(e),
                          s = void 0;
                        try {
                          var o = new Wt(n),
                            c = t.from(a, "base64").toString("hex");
                          s = u.decrypt(r, o, c);
                        } catch (e) {
                          var l = this.getDecryptError(e);
                          return (i && De(P()(l), i), l);
                        }
                        var h = { error: 0, result: s.key };
                        return (i && De(P()(h), i), (r = ""), h);
                      },
                    },
                    {
                      key: "getClaim",
                      value: function (r, n, a, i, u, s, o, c, l, h, f, d) {
                        var v = void 0;
                        s = this.transformPassword(s);
                        var y = new fr(u);
                        try {
                          var p = new Wt(o),
                            g = t.from(c, "base64").toString("hex");
                          v = y.decrypt(s, p, g);
                        } catch (e) {
                          var w = this.getDecryptError(e);
                          return (d && De(P()(w), d), w);
                        }
                        var S = "claim" + r,
                          A = {
                            Type: "JSON",
                            Value: { Context: n, Issuer: a },
                          },
                          k = P()(A),
                          x = new Ya();
                        ((x.key = S), (x.type = "JSON"), (x.value = k));
                        var b = sn(i, [x], v.getPublicKey(), h, f);
                        return (
                          (b.payer = new Wt(l)),
                          wn(b, v),
                          new oa("http://" + e.SERVER_NODE + ":" + e.REST_PORT)
                            .sendRawTransaction(b.serialize(), !0)
                            .then(function (e) {
                              if ("01" === e.Result.Result) {
                                var t = {
                                  error: m.SUCCESS,
                                  result: "",
                                  tx: b.serialize(),
                                };
                                return (
                                  d && De(P()(t), d),
                                  (v.key = ""),
                                  (s = ""),
                                  t
                                );
                              }
                              var r = { error: m.PreExec_ERROR, result: "" };
                              return (d && De(P()(r), d), r);
                            })
                            .catch(function (e) {
                              var t = { error: m.NETWORK_ERROR, result: "" };
                              d && De(P()(t), d);
                            })
                        );
                      },
                    },
                    {
                      key: "signData",
                      value: function (e, r, n, a, i, u) {
                        var s = void 0;
                        n = this.transformPassword(n);
                        var o = new fr(r),
                          c = void 0;
                        try {
                          var l = new Wt(a),
                            h = t.from(i, "base64").toString("hex");
                          s = o.decrypt(n, l, h);
                        } catch (e) {
                          return (
                            (c = this.getDecryptError(e)),
                            u && De(P()(c), u),
                            c
                          );
                        }
                        return (
                          (c = s.sign(e).serializePgp()),
                          u && De(P()(c), u),
                          (s.key = ""),
                          (n = ""),
                          c
                        );
                      },
                    },
                    {
                      key: "getBalance",
                      value: function (t, r) {
                        var n = new Wt(t),
                          a =
                            "http://" +
                            e.SERVER_NODE +
                            ":" +
                            e.REST_PORT +
                            K.getBalance +
                            "/" +
                            n.toBase58();
                        return ve.a
                          .get(a)
                          .then(function (e) {
                            if (0 === e.data.Error) {
                              var t = { error: 0, result: e.data.Result };
                              return (r && De(P()(t), r), t);
                            }
                            var n = { error: e.data.Error, result: "" };
                            return (r && De(P()(n), r), n);
                          })
                          .catch(function (e) {
                            var t = { error: m.NETWORK_ERROR, result: "" };
                            return (r && De(P()(t), r), la.a.reject(t));
                          });
                      },
                    },
                    {
                      key: "transferAssets",
                      value: function (e, r, n, a, i, u, s, o, c, l, h) {
                        var f = void 0,
                          d = void 0;
                        u = this.transformPassword(u);
                        try {
                          ((f = new Wt(r)), (d = new Wt(n)));
                        } catch (e) {
                          var v = { error: m.INVALID_PARAMS, result: "" };
                          return (h && De(P()(v), h), v);
                        }
                        var y = void 0,
                          p = new fr(i);
                        try {
                          var g = new Wt(r),
                            w = t.from(s, "base64").toString("hex");
                          y = p.decrypt(u, g, w);
                        } catch (e) {
                          var S = this.getDecryptError(e);
                          return (h && De(P()(S), h), S);
                        }
                        var A = Yr(e, f, d, a, o, c);
                        ((A.payer = new Wt(l)), wn(A, y));
                        var k = {
                          error: m.SUCCESS,
                          result: "",
                          tx: A.serialize(),
                          txHash: Te(A.getSignContent()),
                        };
                        return (h && De(P()(k), h), (y.key = ""), (u = ""), k);
                      },
                    },
                    {
                      key: "claimOng",
                      value: function (e, r, n, a, i, u, s, o, c) {
                        var l = void 0;
                        a = this.transformPassword(a);
                        try {
                          l = new Wt(e);
                        } catch (e) {
                          var h = { error: m.INVALID_PARAMS, result: "" };
                          return (c && De(P()(h), c), h);
                        }
                        var f = void 0,
                          d = new fr(n);
                        try {
                          var v = t.from(i, "base64").toString("hex");
                          f = d.decrypt(a, l, v);
                        } catch (e) {
                          var y = this.getDecryptError(e);
                          return (c && De(P()(y), c), y);
                        }
                        var p = Zr(l, l, r, new Wt(o), u, s);
                        wn(p, f);
                        var g = {
                          error: m.SUCCESS,
                          result: "",
                          tx: p.serialize(),
                          txHash: Te(p.getSignContent()),
                        };
                        return (c && De(P()(g), c), (f.key = ""), (a = ""), g);
                      },
                    },
                    {
                      key: "exportIdentityToQrcode",
                      value: function (e, r) {
                        var n = oi.parseJson(e),
                          a = n.controls[0].salt;
                        We(a) || (a = t.from(a, "hex").toString("base64"));
                        var i = {
                          type: "I",
                          label: n.label,
                          algorithm: "ECDSA",
                          scrypt: { n: 4096, p: 8, r: 8, dkLen: 64 },
                          key: n.controls[0].encryptedKey.key,
                          salt: a,
                          address: n.controls[0].address.toBase58(),
                          parameters: { curve: "secp256r1" },
                        };
                        return (r && De(P()(i), r), i);
                      },
                    },
                    {
                      key: "exportIdentityToKeystring",
                      value: function (e, t) {
                        var r = oi.parseJson(e),
                          n = r.controls[0].address.toBase58(),
                          a =
                            r.controls[0].salt +
                            n +
                            r.controls[0].encryptedKey.key;
                        return (t && De(P()(a), t), a);
                      },
                    },
                    {
                      key: "exportAccountToQrcode",
                      value: function (e, t) {
                        var r = Un.parseJson(e),
                          n = {
                            type: "A",
                            label: r.label,
                            algorithm: "ECDSA",
                            scrypt: { n: 4096, p: 8, r: 8, dkLen: 64 },
                            key: r.encryptedKey.key,
                            salt: r.salt,
                            address: r.address.toBase58(),
                            parameters: { curve: "secp256r1" },
                          };
                        return (t && De(P()(n), t), n);
                      },
                    },
                    {
                      key: "exportAccountToKeystring",
                      value: function (e, t) {
                        var r = Un.parseJson(e),
                          n =
                            r.salt + r.address.toBase58() + r.encryptedKey.key;
                        return (t && De(P()(n), t), n);
                      },
                    },
                    {
                      key: "importAccountMnemonic",
                      value: function (e, r, n, a) {
                        if (
                          ((r = r.trim()),
                          (n = this.transformPassword(n)),
                          !T.validateMnemonic(r))
                        ) {
                          var i = { error: m.INVALID_PARAMS, result: "" };
                          return (a && De(P()(i), a), i);
                        }
                        var u = T.mnemonicToSeedHex(r),
                          s = Qi.fromMasterSeed(t.from(u, "hex")).derive(Y),
                          o = t.from(s.privateKey).toString("hex"),
                          c = new fr(o),
                          l = Un.create(c, n, e).toJson(),
                          h = { error: m.SUCCESS, result: l };
                        return (
                          a && De(P()(h), a),
                          (c.key = ""),
                          (n = ""),
                          (r = ""),
                          h
                        );
                      },
                    },
                    {
                      key: "exportWifPrivakeKey",
                      value: function (e, r, n, a, i) {
                        if (34 !== n.length && 40 !== n.length) {
                          var u = { error: m.INVALID_PARAMS, result: "" };
                          return (i && De(P()(u), i), u);
                        }
                        r = this.transformPassword(r);
                        var s = new fr(e),
                          o = new Wt(n),
                          c = t.from(a, "base64").toString("hex"),
                          l = s.decrypt(r, o, c),
                          h = l.serializeWIF(),
                          f = {
                            error: m.SUCCESS,
                            result: { wif: h, privateKey: l.key },
                          };
                        return (
                          i && De(P()(f), i),
                          (l.key = ""),
                          (h = ""),
                          (r = ""),
                          f
                        );
                      },
                    },
                    {
                      key: "importAccountWithWif",
                      value: function (e, t, r, n) {
                        var a = void 0;
                        r = this.transformPassword(r);
                        try {
                          a = fr.deserializeWIF(t);
                        } catch (e) {
                          var i = { error: m.INVALID_PARAMS, result: "" };
                          return (n && De(P()(i), n), i);
                        }
                        var u = Un.create(a, r, e),
                          s = { error: m.SUCCESS, result: u.toJson() };
                        return (n && De(P()(s), n), (a.key = ""), (r = ""), s);
                      },
                    },
                    {
                      key: "importAccountWithPrivateKey",
                      value: function (e, t, r, n) {
                        if (
                          ((t = t.trim()),
                          (r = this.transformPassword(r)),
                          !t || 64 !== t.length || !Je(t))
                        ) {
                          var a = { error: m.INVALID_PARAMS, result: "" };
                          return (n && De(P()(a), n), a);
                        }
                        var i = new fr(t),
                          u = Un.create(i, r, e),
                          s = { error: m.SUCCESS, result: u.toJson() };
                        return (n && De(P()(s), n), (t = ""), (r = ""), s);
                      },
                    },
                    {
                      key: "importAccountWithKeystore",
                      value: function (e, t, r) {
                        var n = void 0;
                        t = this.transformPassword(t);
                        try {
                          n = JSON.parse(e);
                        } catch (e) {
                          var a = { error: m.INVALID_PARAMS, result: "" };
                          return (r && De(P()(a), r), a);
                        }
                        if ("A" !== n.type) {
                          var i = { error: m.INVALID_PARAMS, result: "" };
                          return (r && De(P()(i), r), i);
                        }
                        var u = new Un(),
                          s = new fr(n.key);
                        try {
                          var o = {
                              cost: n.scrypt.n || 4096,
                              blockSize: n.scrypt.p || 8,
                              parallel: n.scrypt.r || 8,
                              size: n.scrypt.dkLen || 64,
                            },
                            c = new Wt(n.address);
                          u = Un.importAccount(n.label, s, t, c, n.salt, o);
                          var l = { error: m.SUCCESS, result: u.toJson() };
                          return (r && De(P()(l), r), (t = ""), l);
                        } catch (e) {
                          var h = this.getDecryptError(e);
                          return (r && De(P()(h), r), h);
                        }
                      },
                    },
                    {
                      key: "getUnclaimedOng",
                      value: function (t, r) {
                        return new oa(
                          "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                        )
                          .getAllowance("ong", new Wt(Jr), new Wt(t))
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: e.Result };
                            return (r && De(P()(t), r), t);
                          })
                          .catch(function (e) {
                            var t = { error: e.Error, result: "" };
                            return (r && De(P()(t), r), t);
                          });
                      },
                    },
                    {
                      key: "querySmartCodeEventByTxhash",
                      value: function (t, r) {
                        return new oa(
                          "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                        )
                          .getSmartCodeEvent(t)
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: e };
                            return (r && De(P()(t), r), t);
                          })
                          .catch(function (e) {
                            var t = { error: e.Error, result: "" };
                            return (r && De(P()(t), r), t);
                          });
                      },
                    },
                    {
                      key: "createSharedWallet",
                      value: function (e, t, r) {
                        var n = parseInt(e, 10),
                          a = [],
                          i = [],
                          u = m.SUCCESS;
                        try {
                          i = (a = JSON.parse(t)).map(function (e) {
                            return st.deserializeHex(new Ce(e));
                          });
                        } catch (e) {
                          u = m.INVALID_PARAMS;
                        }
                        (n < 2 || a.length < n || a.length > 12) &&
                          (u = m.INVALID_PARAMS);
                        var s = "";
                        try {
                          s = Wt.fromMultiPubKeys(n, i).toBase58();
                        } catch (e) {
                          u = m.INVALID_PARAMS;
                        }
                        if (r) {
                          var o = { error: u, result: s };
                          De(P()(o), r);
                        }
                        return s;
                      },
                    },
                    {
                      key: "adderssFromPublicKey",
                      value: function (e, t) {
                        var r = st.deserializeHex(new Ce(e)),
                          n = Wt.fromPubKey(r).toBase58(),
                          a = { error: m.SUCCESS, result: n };
                        return (t && De(P()(a), t), n);
                      },
                    },
                    {
                      key: "makeMultiSignTransaction",
                      value: function (e, t, r, n, a, i, u) {
                        var s = void 0,
                          o = void 0;
                        try {
                          ((s = new Wt(t)), (o = new Wt(r)));
                        } catch (e) {
                          var c = { error: m.INVALID_PARAMS, result: "" };
                          return (u && De(P()(c), u), c);
                        }
                        var l = Yr(e, s, o, n, a, i);
                        l.payer = s;
                        var h = {
                          error: m.SUCCESS,
                          txHash: Te(l.getSignContent()),
                          txData: l.serialize(),
                        };
                        return (u && De(P()(h), u), h);
                      },
                    },
                    {
                      key: "signMultiAddrTransaction",
                      value: function (e, r, n, a, i, u, s, o) {
                        a = this.transformPassword(a);
                        var c = void 0,
                          l = new fr(e);
                        try {
                          var h = new Wt(r),
                            f = t.from(n, "base64").toString("hex");
                          c = l.decrypt(a, h, f);
                        } catch (e) {
                          var d = this.getDecryptError(e);
                          return (o && De(P()(d), o), d);
                        }
                        var v = parseInt(u, 10),
                          y = Mr.deserialize(s),
                          p = JSON.parse(i).map(function (e) {
                            return new st(e);
                          });
                        xn(y, v, p, c);
                        var g = { error: m.SUCCESS, signedHash: y.serialize() };
                        return (o && De(P()(g), o), y);
                      },
                    },
                    {
                      key: "neoTransfer",
                      value: function (e, r, n, a, i, u, s, o) {
                        i = this.transformPassword(i);
                        var c = new Wt(r),
                          l = new Wt(e),
                          h = Da.parseJson(
                            '{"hash":"0x5bb169f915c916a5e30a3c13a5e0cd228ea26826","entrypoint":"Main","functions":[{"name":"Name","parameters":[],"returntype":"String"},{"name":"Symbol","parameters":[],"returntype":"String"},{"name":"Decimals","parameters":[],"returntype":"Integer"},{"name":"Main","parameters":[{"name":"operation","type":"String"},{"name":"args","type":"Array"}],"returntype":"Any"},{"name":"Init","parameters":[],"returntype":"Boolean"},{"name":"TotalSupply","parameters":[],"returntype":"Integer"},{"name":"Transfer","parameters":[{"name":"from","type":"ByteArray"},{"name":"to","type":"ByteArray"},{"name":"value","type":"Integer"}],"returntype":"Boolean"},{"name":"BalanceOf","parameters":[{"name":"address","type":"ByteArray"}],"returntype":"Integer"}],"events":[{"name":"transfer","parameters":[{"name":"arg1","type":"ByteArray"},{"name":"arg2","type":"ByteArray"},{"name":"arg3","type":"Integer"}],"returntype":"Void"}]}',
                          ),
                          f = new Wt(Te(Xi)),
                          d = parseInt(n, 10),
                          v = h.getFunction("Transfer");
                        v.name = v.name.toLowerCase();
                        var y = void 0,
                          p = new fr(a);
                        try {
                          var g = t.from(u, "base64").toString("hex");
                          y = p.decrypt(i, l, g, o);
                        } catch (e) {
                          var w = this.getDecryptError(e);
                          return (s && De(P()(w), s), w);
                        }
                        var S = new Pt("from", St.ByteArray, l.serialize()),
                          A = new Pt("to", St.ByteArray, c.serialize()),
                          k = new Pt("value", St.Integer, 1e8 * d);
                        v.setParamsValue(S, A, k);
                        var x = di.makeInvokeTransaction(f, l, v),
                          b = new fi();
                        return (
                          (b.parameter = fi.programFromParams([x.sign(y)])),
                          (b.code = fi.programFromPubKey(y.getPublicKey())),
                          (x.scripts = [b]),
                          hi
                            .sendRawTransaction(Zi, x.serialize())
                            .then(function (e) {
                              var t = { error: m.SUCCESS, result: "" };
                              return (
                                e.result
                                  ? ((t.result = Te(x.getHash())),
                                    s && De(P()(t), s))
                                  : ((t.error = m.NETWORK_ERROR),
                                    s && De(P()(t), s)),
                                t
                              );
                            })
                        );
                      },
                    },
                    {
                      key: "getNeoBalance",
                      value: function (e, t) {
                        var r = new Wt(Te(Xi)),
                          n = new Wt(e);
                        return hi.getBalance(Zi, r, n).then(function (e) {
                          var r = { error: m.SUCCESS, result: 0 };
                          if (e.result) {
                            var n = parseInt(Te(e.result), 16);
                            r.result = n;
                          }
                          return (t && De(P()(r), t), r);
                        });
                      },
                    },
                    {
                      key: "sendTransaction",
                      value: function (t, r) {
                        return new oa(
                          "http://" + e.SERVER_NODE + ":" + e.REST_PORT,
                        )
                          .sendRawTransaction(t)
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: e };
                            return (r && De(P()(t), r), t);
                          })
                          .catch(function (e) {
                            var t = { error: e.Error, result: "" };
                            return (r && De(P()(t), r), t);
                          });
                      },
                    },
                    {
                      key: "sendTransactionWithWebsocket",
                      value: function (t, r) {
                        return new Ba(
                          "ws://" + e.SERVER_NODE + ":" + e.SOCKET_PORT,
                        )
                          .sendRawTransaction(t, !1, !0)
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: e };
                            return (r && De(P()(t), r), t);
                          })
                          .catch(function (e) {
                            var t = { error: e.Error, result: "" };
                            return (r && De(P()(t), r), t);
                          });
                      },
                    },
                    {
                      key: "queryOep8Balance",
                      value: function (t, r, n, a) {
                        var i = new Wt(Te(t)),
                          u = new Oi(i),
                          s = new Wt(r),
                          o = u.makeQueryBalanceOfTx(s, n);
                        return e.restClient
                          .sendRawTransaction(o.serialize(), !0)
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: 0 };
                            return (
                              e.Result.Result &&
                                (t.result = parseInt(Te(e.Result.Result), 16)),
                              a && De(P()(t), a),
                              t
                            );
                          });
                      },
                    },
                    {
                      key: "queryOep8Balances",
                      value: function (t, r, n) {
                        var a = new Wt(Te(t)),
                          i = new Oi(a),
                          u = new Wt(r),
                          s = i.makeQueryBalancesTx(u);
                        return e.restClient
                          .sendRawTransaction(s.serialize(), !0)
                          .then(function (e) {
                            var t = {
                              error: m.SUCCESS,
                              result: [0, 0, 0, 0, 0, 0, 0, 0],
                            };
                            if (e.Result.Result) {
                              var r = e.Result.Result.map(function (e) {
                                return e ? parseInt(Te(e), 16) : 0;
                              });
                              t.result = r;
                            }
                            return (n && De(P()(t), n), t);
                          });
                      },
                    },
                    {
                      key: "queryOep8TotalBalance",
                      value: function (t, r, n) {
                        var a = new Wt(Te(t)),
                          i = new Oi(a),
                          u = new Wt(r),
                          s = i.makeQueryTotalBalanceTx(u);
                        return e.restClient
                          .sendRawTransaction(s.serialize(), !0)
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: 0 };
                            return (
                              e.Result.Result &&
                                (t.result = parseInt(Te(e.Result.Result), 16)),
                              n && De(P()(t), n),
                              t
                            );
                          });
                      },
                    },
                    {
                      key: "transferOep8",
                      value: function (e, r, n, a, i, u, s, o, c, l, h, f) {
                        var d = void 0,
                          v = void 0,
                          y = void 0;
                        s = this.transformPassword(s);
                        try {
                          ((d = new Wt(r)), (v = new Wt(n)), (y = new Wt(h)));
                        } catch (e) {
                          return { error: m.INVALID_PARAMS, result: "" };
                        }
                        var p = void 0,
                          g = new fr(u);
                        try {
                          var w = new Wt(r),
                            S = t.from(o, "base64").toString("hex");
                          p = g.decrypt(s, w, S);
                        } catch (e) {
                          return this.getDecryptError(e);
                        }
                        var A = new Wt(Te(e)),
                          k = new Oi(A).makeTransferTx(d, v, i, a, c, l, y);
                        wn(k, p);
                        var x = {
                          error: m.SUCCESS,
                          result: "",
                          tx: k.serialize(),
                          txHash: Te(k.getSignContent()),
                        };
                        return (f && De(P()(x), f), (p.key = ""), (s = ""), x);
                      },
                    },
                    {
                      key: "compoundOep8",
                      value: function (e, r, n, a, i, u, s, o, c, l) {
                        var h = void 0;
                        i = this.transformPassword(i);
                        try {
                          h = new Wt(r);
                        } catch (e) {
                          return { error: m.INVALID_PARAMS, result: "" };
                        }
                        var f = void 0,
                          d = new fr(a);
                        try {
                          var v = t.from(u, "base64").toString("hex");
                          f = d.decrypt(i, h, v);
                        } catch (e) {
                          return this.getDecryptError(e);
                        }
                        var y = new Wt(Te(e)),
                          p = new Oi(y).makeCompoundTx(h, n, s, o, h);
                        wn(p, f);
                        var g = {
                          error: m.SUCCESS,
                          result: "",
                          tx: p.serialize(),
                          txHash: Te(p.getSignContent()),
                        };
                        return (l && De(P()(g), l), (f.key = ""), (i = ""), g);
                      },
                    },
                    {
                      key: "queryOep4Balance",
                      value: function (t, r, n) {
                        var a = new Wt(Te(t)),
                          i = new Yi(a),
                          u = new Wt(r),
                          s = i.queryBalanceOf(u);
                        return e.restClient
                          .sendRawTransaction(s.serialize(), !0)
                          .then(function (e) {
                            var t = { error: m.SUCCESS, result: 0 };
                            return (
                              e.Result.Result &&
                                (t.result = parseInt(Te(e.Result.Result), 16)),
                              n && De(P()(t), n),
                              t
                            );
                          });
                      },
                    },
                    {
                      key: "transferOep4",
                      value: function (e, r, n, a, i, u, s, o, c, l) {
                        var h = void 0,
                          f = void 0;
                        u = this.transformPassword(u);
                        try {
                          ((h = new Wt(r)), (f = new Wt(n)));
                        } catch (e) {
                          return { error: m.INVALID_PARAMS, result: "" };
                        }
                        var d = void 0,
                          v = new fr(i);
                        try {
                          var y = new Wt(r),
                            p = t.from(s, "base64").toString("hex");
                          d = v.decrypt(u, y, p);
                        } catch (e) {
                          return this.getDecryptError(e);
                        }
                        var g = new Wt(Te(e)),
                          w = new Yi(g).makeTransferTx(h, f, a, o, c, h);
                        wn(w, d);
                        var S = {
                          error: m.SUCCESS,
                          result: "",
                          tx: w.serialize(),
                          txHash: Te(w.getSignContent()),
                        };
                        return (l && De(P()(S), l), (d.key = ""), (u = ""), S);
                      },
                    },
                    {
                      key: "eciesDecrypt",
                      value: function (e, r, n, a, i, u) {
                        r = this.transformPassword(r);
                        var s = new fr(e),
                          o = void 0;
                        try {
                          var c = new Wt(n),
                            l = t.from(a, "base64").toString("hex");
                          o = s.decrypt(r, c, l);
                        } catch (e) {
                          var h = this.getDecryptError(e);
                          return (u && De(P()(h), u), h);
                        }
                        var f = new Pr(),
                          d = i.split(".");
                        f.setKeyPair(o.key);
                        var v = {
                          error: 0,
                          result: f.dec(d[0], d[1], d[2], 32).toString("utf8"),
                        };
                        return (u && De(P()(v), u), v);
                      },
                    },
                  ]),
                  e
                );
              })();
            (($i.SERVER_NODE = _),
              ($i.REST_PORT = U),
              ($i.SOCKET_PORT = L),
              ($i.restClient = new oa()),
              ($i.socketClient = new Ba()));
            var eu = new Wt("0000000000000000000000000000000000000007");
            function tu(e, t, r, n, a, i, u, s) {
              (Ge(a), "did" === e.substr(0, 3) && (e = Se(e)));
              var o = new Tt();
              return (
                o.add(Se(t), n.serialize(), a, e, r),
                Vr("registerCandidate", Wr([o]), eu, u, s, i)
              );
            }
            function ru(e, t, r, n, a) {
              var i = new Tt();
              return (
                i.add(Se(t), e.serialize()),
                Vr("unRegisterCandidate", Wr([i]), eu, n, a, r)
              );
            }
            function nu(e, t, r, n) {
              var a = new Tt();
              return (
                a.add(Se(e)),
                Vr("approveCandidate", Wr([a]), eu, r, n, t)
              );
            }
            function au(e, t, r, n) {
              var a = new Tt();
              return (
                a.add(Se(e)),
                Vr("rejectCandidate", Wr([a]), eu, r, n, t)
              );
            }
            function iu(e, t, r, n, a, i) {
              if (t.length !== r.length) throw m.INVALID_PARAMS;
              var u = new Tt();
              (u.add(e.serialize()), u.add(t.length));
              var s = !0,
                o = !1,
                c = void 0;
              try {
                for (var l, h = te()(t); !(s = (l = h.next()).done); s = !0) {
                  var f = l.value;
                  u.add(Se(f));
                }
              } catch (e) {
                ((o = !0), (c = e));
              } finally {
                try {
                  !s && h.return && h.return();
                } finally {
                  if (o) throw c;
                }
              }
              u.add(r.length);
              var d = !0,
                v = !1,
                y = void 0;
              try {
                for (var p, g = te()(r); !(d = (p = g.next()).done); d = !0) {
                  var w = p.value;
                  u.add(w);
                }
              } catch (e) {
                ((v = !0), (y = e));
              } finally {
                try {
                  !d && g.return && g.return();
                } finally {
                  if (v) throw y;
                }
              }
              return Vr("voteForPeer", Wr([u]), eu, a, i, n);
            }
            function uu(e, t, r, n, a, i) {
              if (t.length !== r.length) throw m.INVALID_PARAMS;
              var u = new Tt();
              (u.add(e.serialize()), u.add(t.length));
              var s = !0,
                o = !1,
                c = void 0;
              try {
                for (var l, h = te()(t); !(s = (l = h.next()).done); s = !0) {
                  var f = l.value;
                  u.add(Se(f));
                }
              } catch (e) {
                ((o = !0), (c = e));
              } finally {
                try {
                  !s && h.return && h.return();
                } finally {
                  if (o) throw c;
                }
              }
              u.add(r.length);
              var d = !0,
                v = !1,
                y = void 0;
              try {
                for (var p, g = te()(r); !(d = (p = g.next()).done); d = !0) {
                  var w = p.value;
                  u.add(w);
                }
              } catch (e) {
                ((v = !0), (y = e));
              } finally {
                try {
                  !d && g.return && g.return();
                } finally {
                  if (v) throw y;
                }
              }
              return Vr("unVoteForPeer", Wr([u]), eu, a, i, n);
            }
            function su(e, t, r, n, a, i) {
              if (t.length !== r.length) throw m.INVALID_PARAMS;
              var u = new Tt();
              (u.add(e.serialize()), u.add(t.length));
              var s = !0,
                o = !1,
                c = void 0;
              try {
                for (var l, h = te()(t); !(s = (l = h.next()).done); s = !0) {
                  var f = l.value;
                  u.add(Se(f));
                }
              } catch (e) {
                ((o = !0), (c = e));
              } finally {
                try {
                  !s && h.return && h.return();
                } finally {
                  if (o) throw c;
                }
              }
              u.add(r.length);
              var d = !0,
                v = !1,
                y = void 0;
              try {
                for (var p, g = te()(r); !(d = (p = g.next()).done); d = !0) {
                  var w = p.value;
                  u.add(w);
                }
              } catch (e) {
                ((v = !0), (y = e));
              } finally {
                try {
                  !d && g.return && g.return();
                } finally {
                  if (v) throw y;
                }
              }
              return Vr("withdraw", Wr([u]), eu, a, i, n);
            }
            function ou(e, t, r, n, a) {
              var i = new Tt();
              return (
                i.add(Se(t), e.serialize()),
                Vr("quitNode", Wr([i]), eu, n, a, r)
              );
            }
            function cu(e, t, r, n, a, i) {
              var u = new Tt();
              return (
                u.add(Se(e), t.serialize(), r),
                Vr("changeMaxAuthorization", Wr([u]), eu, a, i, n)
              );
            }
            function lu(e, t, r, n, a, i) {
              var u = new Tt();
              return (
                u.add(Se(e), t.serialize(), r),
                Vr("setPeerCost", Wr([u]), eu, a, i, n)
              );
            }
            function hu(e, t, r, n) {
              var a = new Tt();
              return (
                a.add(e.serialize()),
                Vr("withdrawFee", Wr([a]), eu, r, n, t)
              );
            }
            function fu(e, t, r, n, a, i) {
              var u = new Tt();
              (u.add(e.serialize()), u.add(t.length));
              var s = !0,
                o = !1,
                c = void 0;
              try {
                for (var l, h = te()(t); !(s = (l = h.next()).done); s = !0) {
                  var f = l.value;
                  u.add(Se(f));
                }
              } catch (e) {
                ((o = !0), (c = e));
              } finally {
                try {
                  !s && h.return && h.return();
                } finally {
                  if (o) throw c;
                }
              }
              u.add(r.length);
              var d = !0,
                v = !1,
                y = void 0;
              try {
                for (var p, g = te()(r); !(d = (p = g.next()).done); d = !0) {
                  var m = p.value;
                  u.add(m);
                }
              } catch (e) {
                ((v = !0), (y = e));
              } finally {
                try {
                  !d && g.return && g.return();
                } finally {
                  if (v) throw y;
                }
              }
              return Vr("authorizeForPeer", Wr([u]), eu, a, i, n);
            }
            function du(e, t, r, n, a, i) {
              var u = new Tt();
              (u.add(e.serialize()), u.add(t.length));
              var s = !0,
                o = !1,
                c = void 0;
              try {
                for (var l, h = te()(t); !(s = (l = h.next()).done); s = !0) {
                  var f = l.value;
                  u.add(Se(f));
                }
              } catch (e) {
                ((o = !0), (c = e));
              } finally {
                try {
                  !s && h.return && h.return();
                } finally {
                  if (o) throw c;
                }
              }
              u.add(r.length);
              var d = !0,
                v = !1,
                y = void 0;
              try {
                for (var p, g = te()(r); !(d = (p = g.next()).done); d = !0) {
                  var m = p.value;
                  u.add(m);
                }
              } catch (e) {
                ((v = !0), (y = e));
              } finally {
                try {
                  !d && g.return && g.return();
                } finally {
                  if (v) throw y;
                }
              }
              return Vr("unAuthorizeForPeer", Wr([u]), eu, a, i, n);
            }
            function vu(e, t, r, n, a, i) {
              var u = new Tt();
              return (
                u.add(Se(e), t.serialize(), r),
                Vr("addInitPos", Wr([u]), eu, a, i, n)
              );
            }
            function yu(e, t, r, n, a, i) {
              var u = new Tt();
              return (
                u.add(Se(e), t.serialize(), r),
                Vr("reduceInitPos", Wr([u]), eu, a, i, n)
              );
            }
            function pu(e, t, r, n) {
              var a = new Tt();
              return (
                a.add(e.serialize()),
                Vr("withdrawOng", Wr([a]), eu, r, n, t)
              );
            }
            var gu,
              mu,
              wu,
              Su,
              Au,
              ku = (function () {
                var e = Qt()(
                  jt.a.mark(function e(t, r) {
                    var n, a, i, u, s;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = new oa(r)),
                                (a = eu.toHexString()),
                                (i = Se("peerAttributes") + t),
                                (e.next = 5),
                                n.getStorage(a, i)
                              );
                            case 5:
                              if (((u = e.sent), !(s = u.Result))) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                Bu.deserialize(new Ce(s)),
                              );
                            case 11:
                              return e.abrupt("return", new Bu());
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
              xu =
                ((gu = Qt()(
                  jt.a.mark(function e(t, r) {
                    var n, a, i, u, s;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = new oa(r)),
                                (a = eu.toHexString()),
                                (i = Se("splitFeeAddress") + t.serialize()),
                                (e.next = 5),
                                n.getStorage(a, i)
                              );
                            case 5:
                              if (((u = e.sent), !(s = u.Result))) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                Du.deserialize(new Ce(s)),
                              );
                            case 11:
                              return e.abrupt("return", new Du());
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, t) {
                  return gu.apply(this, arguments);
                }),
              bu = (function () {
                var e = Qt()(
                  jt.a.mark(function e(t, r, n) {
                    var a, i, u, s, o;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = new oa(n)),
                                (i = eu.toHexString()),
                                (u = Se("voteInfoPool") + t + r.serialize()),
                                (e.next = 5),
                                a.getStorage(i, u)
                              );
                            case 5:
                              if (((s = e.sent), !(o = s.Result))) {
                                e.next = 11;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                Ou.deserialize(new Ce(o)),
                              );
                            case 11:
                              return e.abrupt("return", new Ou());
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })(),
              Eu = (function () {
                var e = Qt()(
                  jt.a.mark(function e(t) {
                    var r, n, a, i, u, s;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = new oa(t)),
                                (n = eu.toHexString()),
                                (a = Se("governanceView")),
                                (e.next = 5),
                                r.getStorage(n, a)
                              );
                            case 5:
                              return (
                                (i = e.sent),
                                (u = i.Result),
                                (s = Nu.deserialize(new Ce(u))),
                                e.abrupt("return", s)
                              );
                            case 9:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              Ru =
                ((mu = Qt()(
                  jt.a.mark(function e(t) {
                    var r, n, a, i, u, s, o, c, l, h, f, d;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = new oa(t)),
                                (n = eu.toHexString()),
                                (e.next = 4),
                                Eu(t)
                              );
                            case 4:
                              return (
                                (a = e.sent),
                                (i = Se("peerPool")),
                                (u = Re(a.view, 4, !0)),
                                (s = i + u),
                                (e.next = 10),
                                r.getStorage(n, s)
                              );
                            case 10:
                              for (
                                o = e.sent,
                                  c = new Ce(o.Result),
                                  l = c.readInt(),
                                  h = {},
                                  f = 0;
                                f < l;
                                f++
                              )
                                ((d = Cu.deserialize(c)),
                                  (h[d.peerPubkey] = d));
                              return e.abrupt("return", h);
                            case 16:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e) {
                  return mu.apply(this, arguments);
                }),
              Pu =
                ((wu = Qt()(
                  jt.a.mark(function e(t) {
                    var r, n, a, i;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = new oa(t)),
                                (n = eu.toHexString()),
                                (a = Se("globalParam")),
                                (e.next = 5),
                                r.getStorage(n, a)
                              );
                            case 5:
                              if (!(i = e.sent).Result) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                Hu.deserialize(new Ce(i.Result)),
                              );
                            case 10:
                              return e.abrupt("return", new Hu());
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e) {
                  return wu.apply(this, arguments);
                }),
              Tu =
                ((Su = Qt()(
                  jt.a.mark(function e(t, r) {
                    var n, a, i, u;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = new oa(r)),
                                (a = eu.toHexString()),
                                (i = Se("totalStake") + t.serialize()),
                                (e.next = 5),
                                n.getStorage(a, i)
                              );
                            case 5:
                              if (!(u = e.sent).Result) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                _u.deserialize(new Ce(u.Result)),
                              );
                            case 10:
                              return e.abrupt("return", new _u());
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, t) {
                  return Su.apply(this, arguments);
                }),
              Iu =
                ((Au = Qt()(
                  jt.a.mark(function e(t, r) {
                    var n, a, i, u, s;
                    return jt.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return ((e.next = 2), Tu(t, r));
                            case 2:
                              if ((n = e.sent).address) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", 0);
                            case 5:
                              return (
                                (a = new oa(r)),
                                (e.next = 8),
                                a.getBlockHeight()
                              );
                            case 8:
                              return (
                                (i = e.sent.Result),
                                (e.next = 11),
                                a.getBlockJson(i)
                              );
                            case 11:
                              return (
                                (u = e.sent.Result),
                                (s = u.Header.Timestamp - $),
                                e.abrupt("return", qe(n.stake, n.timeOffset, s))
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                )),
                function (e, t) {
                  return Au.apply(this, arguments);
                }),
              Nu = (function () {
                function e() {
                  (A()(this, e),
                    (this.view = 0),
                    (this.height = 0),
                    (this.txhash = ""));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          return (
                            (e += Re(this.view, 4, !0)),
                            (e += Re(this.height, 4, !0)),
                            e + ke(this.txhash)
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.view = t.readUint32()),
                            (r.height = t.readUint32()),
                            (r.txhash = t.read(64)),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Cu = (function () {
                function e() {
                  (A()(this, e),
                    (this.index = 0),
                    (this.peerPubkey = ""),
                    (this.status = 0),
                    (this.initPos = 0),
                    (this.totalPos = 0));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          return (
                            (e += Re(this.index, 4, !0)),
                            (e += xe(this.peerPubkey)),
                            (e += this.address.serialize()),
                            (e += Re(this.status)),
                            (e += Re(this.initPos, 8, !0)),
                            e + Re(this.totalPos, 8, !0)
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.index = t.readInt()),
                            (r.peerPubkey = Ae(t.readNextBytes())),
                            (r.address = Wt.deserialize(t)),
                            (r.status = parseInt(t.read(1), 16)),
                            (r.initPos = t.readLong()),
                            (r.totalPos = t.readLong()),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Bu = (function () {
                function e() {
                  (A()(this, e),
                    (this.peerPubkey = ""),
                    (this.maxAuthorize = 0),
                    (this.t2PeerCost = 100),
                    (this.t1PeerCost = 100),
                    (this.tPeerCost = 0),
                    (this.field1 = ""),
                    (this.field2 = ""),
                    (this.field3 = ""),
                    (this.field4 = ""));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          return "";
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new e();
                          return (
                            (r.peerPubkey = Ae(t.readNextBytes())),
                            (r.maxAuthorize = t.readLong()),
                            (r.t2PeerCost = t.readLong()),
                            (r.t1PeerCost = t.readLong()),
                            (r.tPeerCost = t.readLong()),
                            t.isEmpty ||
                              ((r.field1 = t.readNextBytes()),
                              (r.field2 = t.readNextBytes()),
                              (r.field3 = t.readNextBytes()),
                              (r.field4 = t.readNextBytes())),
                            r
                          );
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Du = (function () {
                function e() {
                  (A()(this, e), (this.amount = 0));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e();
                        return (
                          (r.address = Wt.deserialize(t)),
                          (r.amount = t.readLong()),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ou = (function () {
                function e() {
                  (A()(this, e),
                    (this.peerPubkey = ""),
                    (this.consensusPos = 0),
                    (this.freezePos = 0),
                    (this.newPos = 0),
                    (this.withdrawPos = 0),
                    (this.withdrawFreezePos = 0),
                    (this.withdrawUnfreezePos = 0));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e();
                        return (
                          (r.peerPubkey = Ae(t.readNextBytes())),
                          (r.address = Wt.deserialize(t)),
                          (r.consensusPos = t.readLong()),
                          (r.freezePos = t.readLong()),
                          (r.newPos = t.readLong()),
                          (r.withdrawPos = t.readLong()),
                          (r.withdrawFreezePos = t.readLong()),
                          (r.withdrawUnfreezePos = t.readLong()),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Hu = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e(),
                          n = t.readNextBytes(),
                          a = je.fromHexstr(n).value;
                        r.candidateFee = Number(a);
                        var i = je.fromHexstr(t.readNextBytes()).value;
                        r.minInitState = Number(i);
                        var u = je.fromHexstr(t.readNextBytes()).value,
                          s = Number(u);
                        r.candidateNum = s;
                        var o = je.fromHexstr(t.readNextBytes()).value;
                        r.posLimit = Number(o);
                        var c = je.fromHexstr(t.readNextBytes()).value,
                          l = Number(c),
                          h = je.fromHexstr(t.readNextBytes()).value,
                          f = Number(h),
                          d = je.fromHexstr(t.readNextBytes()).value,
                          v = Number(d),
                          y = je.fromHexstr(t.readNextBytes()).value,
                          p = Number(y);
                        return (
                          (r.A = l),
                          (r.B = f),
                          (r.yita = v),
                          (r.penalty = p),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              _u = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e();
                        return (
                          (r.address = Wt.deserialize(t)),
                          (r.stake = t.readLong()),
                          (r.timeOffset = t.readUint32()),
                          r
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              zu = (function () {
                function e() {
                  (A()(this, e), (this.states = []));
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          e += Re(this.states.length);
                          for (var t = 0; t < this.states.length; t++)
                            e += this.states[t].serialize();
                          return e;
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          for (
                            var r = new e(), n = [], a = t.readNextLen(), i = 0;
                            i < a;
                            i++
                          ) {
                            var u = Lu.deserialize(t);
                            n.push(u);
                          }
                          return ((r.states = n), r);
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Uu = (function () {
                function e() {
                  A()(this, e);
                }
                return (
                  x()(
                    e,
                    [
                      {
                        key: "serialize",
                        value: function () {
                          var e = "";
                          ((e += this.contract), (e += Re(this.states.length)));
                          for (var t = 0; t < this.states.length; t++)
                            e += this.states[t].serialize();
                          return e;
                        },
                      },
                    ],
                    [
                      {
                        key: "deserialize",
                        value: function (t) {
                          var r = new e();
                          r.states = [];
                          var n = t.read(20);
                          r.contract = n;
                          for (var a = t.readNextLen(), i = 0; i < a; i++) {
                            var u = Lu.deserialize(t);
                            r.states.push(u);
                          }
                          return r;
                        },
                      },
                    ],
                  ),
                  e
                );
              })(),
              Lu = (function () {
                function e(t, r, n) {
                  A()(this, e);
                  var a = new se.BigNumber(n);
                  if (!a.isInteger() || a.isNegative()) throw m.INVALID_PARAMS;
                  ((this.from = t), (this.to = r), (this.value = n));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        return new e(
                          new Wt(t.readNextBytes()),
                          new Wt(t.readNextBytes()),
                          je.fromHexstr(t.readNextBytes()).value.toString(),
                        );
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        return (
                          (e += ke(this.from.serialize())),
                          (e += ke(this.to.serialize())),
                          e + ke(new je(this.value).toHexstr())
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Mu = (function () {
                function e() {
                  (A()(this, e), (this.version = "00"));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        var r = new e(),
                          n = t.read(1),
                          a = Wt.deserialize(t),
                          i = t.readNextBytes(),
                          u = t.readNextBytes();
                        return (
                          (r.version = n),
                          (r.address = a),
                          (r.method = Ae(i)),
                          (r.args = u),
                          r
                        );
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        return (
                          (e += this.version),
                          (e += this.address.serialize()),
                          (e += xe(this.method)),
                          e + ke(this.args)
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Ku = (function () {
                function e(t, r, n, a) {
                  A()(this, e);
                  var i = new se.BigNumber(a);
                  if (!i.isInteger() || !i.isNegative()) throw m.INVALID_PARAMS;
                  ((this.sender = t),
                    (this.from = r),
                    (this.to = n),
                    (this.value = a));
                }
                return (
                  x()(e, null, [
                    {
                      key: "deserialize",
                      value: function (t) {
                        return new e(
                          new Wt(t.readNextBytes()),
                          new Wt(t.readNextBytes()),
                          new Wt(t.readNextBytes()),
                          je.fromHexstr(t.readNextBytes()).value.toString(),
                        );
                      },
                    },
                  ]),
                  x()(e, [
                    {
                      key: "serialize",
                      value: function () {
                        var e = "";
                        return (
                          (e += ke(this.sender.serialize())),
                          (e += ke(this.from.serialize())),
                          (e += ke(this.to.serialize())),
                          e + ke(new je(this.value).toHexstr())
                        );
                      },
                    },
                  ]),
                  e
                );
              })(),
              Vu = function e(t, r) {
                (A()(this, e),
                  (this.toAcct = t.serialize()),
                  (this.tokenId = r));
              },
              Gu = "init",
              Wu = "name",
              Ju = "symbol",
              Fu = "totalSupply",
              qu = "balanceOf",
              ju = "ownerOf",
              Yu = "transfer",
              Qu = "transferMulti",
              Xu = "approve",
              Zu = "takeOwnership",
              $u = "queryTokenIDByIndex",
              es = "queryTokenByID",
              ts = "getApproved",
              rs = (function () {
                function e(t) {
                  (A()(this, e), (this.contractAddr = t));
                }
                return (
                  x()(e, [
                    {
                      key: "makeInitTx",
                      value: function (e, t, r) {
                        return bn(Gu, [], this.contractAddr, e, t, r);
                      },
                    },
                    {
                      key: "makeOwnerOfTx",
                      value: function (e) {
                        var t = ju,
                          r = [new Pt("tokenId", St.ByteArray, e)];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeTransferTx",
                      value: function (e, t, r, n) {
                        var a = Yu,
                          i = [
                            new Pt("toAcct", St.ByteArray, e.toAcct),
                            new Pt("tokenId", St.ByteArray, e.tokenId),
                          ];
                        return bn(a, i, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeTransferMultiTx",
                      value: function (e, t, r, n) {
                        var a = [];
                        a.push(Se(Qu));
                        var i = [],
                          u = !0,
                          s = !1,
                          o = void 0;
                        try {
                          for (
                            var c, l = te()(e);
                            !(u = (c = l.next()).done);
                            u = !0
                          ) {
                            var h = c.value;
                            i.push([h.toAcct, h.tokenId]);
                          }
                        } catch (e) {
                          ((s = !0), (o = e));
                        } finally {
                          try {
                            !u && l.return && l.return();
                          } finally {
                            if (s) throw o;
                          }
                        }
                        a.push(i);
                        var f = Kt(a);
                        return bn("", f, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeApproveTx",
                      value: function (e, t, r, n) {
                        var a = Xu,
                          i = [
                            new Pt("toAcct", St.ByteArray, e.toAcct),
                            new Pt("tokenId", St.ByteArray, e.tokenId),
                          ];
                        return bn(a, i, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeTakeOwnershipTx",
                      value: function (e, t, r, n) {
                        var a = Zu,
                          i = [
                            new Pt("toAcct", St.ByteArray, e.toAcct),
                            new Pt("tokenId", St.ByteArray, e.tokenId),
                          ];
                        return bn(a, i, this.contractAddr, t, r, n);
                      },
                    },
                    {
                      key: "makeQueryBalanceOfTx",
                      value: function (e) {
                        var t = qu,
                          r = [new Pt("addr", St.ByteArray, e.serialize())];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryTotalSupplyTx",
                      value: function () {
                        return bn(Fu, [], this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryTokenIDByIndexTx",
                      value: function (e) {
                        var t = $u,
                          r = [new Pt("index", St.Long, e)];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryTokenByIDTx",
                      value: function (e) {
                        var t = es,
                          r = [new Pt("tokenId", St.ByteArray, e)];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeGetApprovedTx",
                      value: function (e) {
                        var t = ts,
                          r = [new Pt("tokenId", St.ByteArray, e)];
                        return bn(t, r, this.contractAddr);
                      },
                    },
                    {
                      key: "makeQueryNameTx",
                      value: function () {
                        return bn(Wu, [], this.contractAddr);
                      },
                    },
                    {
                      key: "makeQuerySymbolTx",
                      value: function () {
                        return bn(Ju, [], this.contractAddr);
                      },
                    },
                  ]),
                  e
                );
              })();
            (n.d(r, "Account", function () {
              return Un;
            }),
              n.d(r, "Identity", function () {
                return oi;
              }),
              n.d(r, "Claim", function () {
                return ni;
              }),
              n.d(r, "DDO", function () {
                return Qa;
              }),
              n.d(r, "DDOAttribute", function () {
                return Ya;
              }),
              n.d(r, "Transaction", function () {
                return Mr;
              }),
              n.d(r, "Transfer", function () {
                return Kr;
              }),
              n.d(r, "TxSignature", function () {
                return Lr;
              }),
              n.d(r, "Parameter", function () {
                return Pt;
              }),
              n.d(r, "ParameterType", function () {
                return St;
              }),
              n.d(r, "AbiFunction", function () {
                return Dr;
              }),
              n.d(r, "AbiInfo", function () {
                return Da;
              }),
              n.d(r, "TransactionBuilder", function () {
                return h;
              }),
              n.d(r, "OntAssetTxBuilder", function () {
                return c;
              }),
              n.d(r, "GovernanceTxBuilder", function () {
                return y;
              }),
              n.d(r, "utils", function () {
                return i;
              }),
              n.d(r, "scrypt", function () {
                return s;
              }),
              n.d(r, "CONST", function () {
                return a;
              }),
              n.d(r, "Wallet", function () {
                return Hi;
              }),
              n.d(r, "SDK", function () {
                return $i;
              }),
              n.d(r, "Token", function () {
                return p;
              }),
              n.d(r, "OntidContract", function () {
                return l;
              }),
              n.d(r, "RestClient", function () {
                return oa;
              }),
              n.d(r, "RpcClient", function () {
                return pi;
              }),
              n.d(r, "WebsocketClient", function () {
                return Ba;
              }),
              n.d(r, "Crypto", function () {
                return o;
              }),
              n.d(r, "Struct", function () {
                return Tt;
              }),
              n.d(r, "ScriptBuilder", function () {
                return u;
              }),
              n.d(r, "NeoCore", function () {
                return f;
              }),
              n.d(r, "Oep4", function () {
                return v;
              }),
              n.d(r, "Oep8", function () {
                return d;
              }),
              n.d(r, "Oep5", function () {
                return g;
              }));
            var ns = (function () {
              function e() {
                (A()(this, e),
                  (this.Account = Un),
                  (this.Identity = oi),
                  (this.Claim = ni),
                  (this.DDO = Qa),
                  (this.DDOAttribute = Ya),
                  (this.Transaction = Mr),
                  (this.Transfer = Kr),
                  (this.TxSignature = Lr),
                  (this.TransactionBuilder = h),
                  (this.OntAssetTxBuilder = c),
                  (this.GovernanceTxBuilder = y),
                  (this.Parameter = Pt),
                  (this.ParameterType = St),
                  (this.AbiFunction = Dr),
                  (this.AbiInfo = Da),
                  (this.utils = i),
                  (this.scrypt = s),
                  (this.CONST = a),
                  (this.Wallet = Hi),
                  (this.SDK = $i),
                  (this.Token = p),
                  (this.OntidContract = l),
                  (this.RestClient = oa),
                  (this.RpcClient = pi),
                  (this.WebsocketClient = Ba),
                  (this.Crypto = o),
                  (this.Struct = Tt),
                  (this.ScriptBuilder = u),
                  (this.NeoCore = f),
                  (this.Oep4 = v),
                  (this.Oep8 = d),
                  (this.Oep5 = g));
              }
              return (
                x()(e, [
                  {
                    key: "setNode",
                    value: function (e) {
                      this.CONST.TEST_NODE = e;
                    },
                  },
                  {
                    key: "setRpcPort",
                    value: function (e) {
                      this.CONST.HTTPS_JSON_PORT = e;
                    },
                  },
                  {
                    key: "setRestPort",
                    value: function (e) {
                      this.CONST.HTTPS_REST_PORT = e;
                    },
                  },
                  {
                    key: "setSocketPort",
                    value: function (e) {
                      this.CONST.HTTPS_WS_PORT = e;
                    },
                  },
                ]),
                e
              );
            })();
            r.default = ns;
          },
        ]);
      }).call(this, r(2).Buffer);
    },
  },
]);
