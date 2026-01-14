(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [140, 10, 23],
  {
    2711: function (e, t, r) {
      "use strict";
      (function (e) {
        var a = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = a(r(69)),
          n = a(r(11)),
          i = a(r(230)),
          s = a(r(28)),
          c = w(r(8)),
          d = r(3269),
          f = r(19),
          u = r(27),
          l = a(r(815)),
          h = a(r(3210)),
          x = a(r(3279)),
          p = a(r(8107)),
          m = a(r(794)),
          b = r(805),
          g = a(r(4105)),
          v = a(r(158)),
          k = a(r(386)),
          y = a(r(382));
        function w(e, t) {
          if ("function" == typeof WeakMap)
            var r = new WeakMap(),
              a = new WeakMap();
          return (w = function (e, t) {
            if (!t && e && e.__esModule) return e;
            var o,
              n,
              i = { __proto__: null, default: e };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((o = t ? a : r)) {
              if (o.has(e)) return o.get(e);
              o.set(e, i);
            }
            for (const r in e)
              "default" !== r &&
                {}.hasOwnProperty.call(e, r) &&
                ((n =
                  (o = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, r)) &&
                (n.get || n.set)
                  ? o(i, r, n)
                  : (i[r] = e[r]));
            return i;
          })(e, t);
        }
        function E(e, t, r) {
          (P(e, t), t.set(e, r));
        }
        function P(e, t) {
          if (t.has(e))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object",
            );
        }
        function T(e, t) {
          return e.get(B(e, t));
        }
        function S(e, t, r) {
          return (e.set(B(e, t), r), r);
        }
        function B(e, t, r) {
          if ("function" == typeof e ? e === t : e.has(t))
            return arguments.length < 3 ? t : r;
          throw new TypeError("Private element is not present on this object");
        }
        const I = "Avalanche C-Chain",
          C = "AVAX",
          O = "m/44'/9000'/0'/0/0",
          N = 18,
          _ = "0",
          A = 43114,
          D = 10 ** 9,
          L = "nAVAX",
          H = "150000",
          R = "0x0",
          F = "web3Sdk",
          M = "ethereumJsWalletSdk",
          G = "0xbdd5468D969e585E38B5a0EEADDb56D5B76814ff";
        var U = new WeakMap();
        class AVAXCoin extends (0, k.default)(
          (0, d.NftMixin)(
            (0, v.default)((0, g.default)((0, y.default)(i.default))),
          ),
        ) {
          constructor(e) {
            var t, a;
            (super({
              ...e,
              name: null !== (t = e.name) && void 0 !== t ? t : I,
              ticker: null !== (a = e.ticker) && void 0 !== a ? a : C,
              decimal: N,
              unspendableBalance: _,
              chainId: e.chainId || A,
              dependencies: {
                [F]: new m.default(() =>
                  Promise.resolve().then(r.t.bind(null, 2654, 7)),
                ),
                [M]: new m.default(() => r.e(16).then(r.t.bind(null, 2655, 7))),
              },
            }),
              E(this, U, void 0),
              (0, o.default)(this, "web3BaseUrl", void 0),
              (0, o.default)(this, "coreLibrary", null),
              (this.derivation = O),
              this.setExplorersModules([
                l.default,
                p.default,
                h.default,
                x.default,
              ]),
              this.loadExplorers(e));
            const { feeData: n, explorers: i } = e;
            this.setFeeData(n);
            const s = i.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            });
            ((this.web3BaseUrl = s.baseUrl),
              (this.fields.paymentId = !1),
              (this.nonce = new this.BN("0")));
          }
          async initCoreLibrary() {
            if (this.coreLibrary) return;
            const { default: e } = await this.loadLib(F);
            this.coreLibrary = new e(this.web3BaseUrl);
          }
          async getCoreLibrary() {
            return (
              this.coreLibrary || (await this.initCoreLibrary()),
              this.coreLibrary
            );
          }
          setFeeData(e) {
            (void 0 === e && (e = {}),
              super.setFeeData(e),
              (this.gasLimit = String(e.gasLimit)),
              (this.gasLimitCoefficient = e.gasLimitCoefficient),
              (this.gasPriceCoefficient = e.gasPriceCoefficient),
              (this.defaultGasPrice = new this.BN(e.defaultGasPrice)),
              (this.defaultMaxGasPrice = new this.BN(e.defaultMaxGasPrice).div(
                new this.BN(D),
              )),
              (this.resendTimeout = e.resendTimeout),
              (this.nftGasLimitCoefficient = e.nftGasLimitCoefficient),
              (this.nftGasPriceCoefficient = e.nftGasPriceCoefficient));
          }
          isFeeDynamic() {
            return !0;
          }
          async loadWallet(e) {
            const [t, { hdkey: r }] = await Promise.all([
                this.getCoreLibrary(),
                this.loadLib(M),
              ]),
              a = r.fromMasterSeed(e),
              o = a.getWallet(),
              n = t.eth.accounts.privateKeyToAccount(o.getPrivateKeyString());
            if (!n)
              throw new Error(this.wallet.ticker + " can't get the wallet");
            return (
              S(U, this, n.privateKey),
              (this.address = n.address),
              { id: this.id, privateKey: T(U, this), address: this.address }
            );
          }
          async getAddress() {
            const e = await this.getCoreLibrary();
            return T(U, this)
              ? e.eth.accounts.privateKeyToAccount(T(U, this)).address
              : new Error(this.wallet.ticker + " private key is empty");
          }
          async validateAddress(e) {
            const t = await this.getCoreLibrary();
            return t.utils.isAddress(e);
          }
          async createTransaction(e) {
            let {
              address: t,
              amount: r,
              paymentData: a = null,
              userGasPrice: o,
              gasLimit: n = this.gasLimit,
            } = e;
            const [i] = await Promise.all([
                this.getCoreLibrary(),
                this.getNonce(),
              ]),
              s = {
                to: t,
                value: r,
                gas: n || this.gasLimit,
                chainId: this.chainId,
                gasPrice: new this.BN(o || (await this.getGasPrice())),
                nonce: this.nonce.toString(),
              };
            a && (s.data = a);
            const c = await i.eth.accounts.signTransaction(s, T(U, this));
            return c.rawTransaction;
          }
          async getTransactions() {
            if (!this.address)
              throw new Error(this.wallet.ticker + " address not found");
            return this.getProvider("history").getTransactions({
              address: this.address,
            });
          }
          async getNonce() {
            const e = await this.getCoreLibrary();
            return (
              (this.nonce = new this.BN(
                await e.eth.getTransactionCount(this.address, "pending"),
              )),
              this.nonce
            );
          }
          async getFee(e) {
            let { userGasPrice: t = null, gasLimit: r = null } =
              void 0 === e ? {} : e;
            return new this.BN(
              new this.BN(t || (await this.getGasPrice())),
            ).mul(new this.BN(null !== r ? r : this.gasLimit));
          }
          async getGasPrice(e) {
            void 0 === e && (e = !1);
            try {
              if (e) {
                const e = await this.getCoreLibrary();
                return new this.BN(await e.eth.getGasPrice());
              }
              const { fastest: t } =
                (await c.default.get("avax-c-gas-price")) ||
                (await this.getProvider("gas_price").getGasPrice());
              return new this.BN(t).mul(new this.BN(D));
            } catch (t) {
              s.default.error({ instance: this, error: t });
              const r = new this.BN(new this.BN(this.defaultGasPrice));
              return e ? r : r.add(new this.BN(this.gasPriceCoefficient));
            }
          }
          async availableBalance(e) {
            if (!this.balance) return "0";
            const t = e ? new this.BN(e) : await this.getFee(),
              r = new this.BN(this.balance)
                .sub(t)
                .sub(new this.BN(this.unspendableBalance));
            return new this.BN(r).lt(new this.BN(0))
              ? "0"
              : this.toCurrencyUnit(r);
          }
          async updateBalance() {
            try {
              const { balance: e } = await this.getProvider("balance").getInfo(
                this.address,
              );
              if (!e) throw new Error(this.ticker + " can't get balance");
              this.balance = e;
            } catch (e) {
              console.error(e);
            }
          }
          async getInfo(e) {
            if (
              (await this.initCoreLibrary(),
              this.getNonce(),
              null !== e && void 0 !== e && e.isToken)
            ) {
              const t = await this.getProvider(
                  "node",
                ).getTokenBalanceByContractAddress({
                  address: this.address,
                  contractAddress: e.contract.toLowerCase(),
                }),
                r = [e.contract, e.contract.toLowerCase()];
              return (
                r.forEach((e) => {
                  this.tokens[e] && (this.tokens[e].balance = t.toString());
                }),
                { balance: this.balance, balances: this.balances }
              );
            }
            const t = await this.getProvider("balance")
              .getInfo(this.address)
              .catch((e) => console.warn(e));
            if (
              (null !== t &&
                void 0 !== t &&
                t.balance &&
                (this.balance = t.balance),
              null === e || void 0 === e || !e.onlyCoin)
            ) {
              const e = Object.values(this.tokens);
              this.getProvider("node").getTokensInfo(e, this.address);
            }
            return { balance: this.balance, balances: this.balances };
          }
          gasPrice() {
            return this.getGasPrice();
          }
          setPrivateKey(e) {
            S(U, this, e);
          }
          getGasRange(e) {
            return (void 0 === e && (e = "send"), this.feeData[e]);
          }
          async checkTransaction(e) {
            await super.checkTransaction({ feeTicker: this.ticker, ...e });
          }
          async getBalance() {
            return (await this.getInfo()).balance;
          }
          getGasPriceUnits() {
            return L;
          }
          async getNftFee(e) {
            let {
              contractAddress: t,
              tokenId: r,
              tokenStandard: a,
              toAddress: o,
              userOptions: i = {},
            } = e;
            try {
              const e = await this.getProvider("nft-send").getNftContractData(
                  this,
                  o,
                  t,
                  r,
                  a,
                ),
                { gasLimit: s, gasPrice: c } =
                  await this.getNftTransferGasParams(o, e, i);
              return new n.default(c).mul(new n.default(s));
            } catch (s) {
              throw new f.ExternalError({
                type: u.EXTERNAL_ERROR,
                error: s,
                instance: this,
              });
            }
          }
          async getNftTransferGasParams(e, t, r) {
            let { userGasPrice: a, userGasLimit: o } = r;
            const {
                address: i,
                nftGasPriceCoefficient: s,
                nftGasLimitCoefficient: c,
                gasPriceCoefficient: d,
                gasLimitCoefficient: f,
                defaultGasPrice: u,
                gasLimit: l = H,
              } = this,
              h = s || d,
              x = c || f,
              p = [
                new n.default(u).mul(new n.default(h)).toString(),
                Math.ceil(Number(l) * x).toString(),
              ],
              m = (await this.getNonce()).toNumber(),
              [b, g] = await Promise.allSettled([
                a || this.getNftGasPrice(h),
                o || this.estimateGasForSendNft(i, e, m, t, x),
              ]).then((e) =>
                e.map((e, t) => ("fulfilled" === e.status ? e.value : p[t])),
              );
            return { gasLimit: g, gasPrice: b, nonce: m };
          }
          async estimateGasForSendNft(e, t, r, a, o) {
            void 0 === o && (o = 1);
            try {
              const n = await this.getProvider("nft-send").estimateGas(
                e,
                t,
                r,
                a,
              );
              return Math.ceil(n * o).toString();
            } catch (n) {
              throw (
                console.warn(n),
                new f.ExternalError({
                  type: u.EXTERNAL_ERROR,
                  error: n,
                  instance: this,
                })
              );
            }
          }
          async getNftGasPrice(e) {
            void 0 === e && (e = 1);
            try {
              const t = await this.getProvider("nft-send").getGasPrice();
              return new n.default(t).mul(new n.default(e)).toString();
            } catch (t) {
              throw (
                console.warn(t),
                new f.ExternalError({
                  type: u.EXTERNAL_ERROR,
                  error: t,
                  instance: this,
                })
              );
            }
          }
          async createNftTransaction(e) {
            let {
              toAddress: t,
              contractAddress: r,
              data: a,
              userOptions: o = {},
            } = e;
            try {
              const {
                  gasLimit: e,
                  gasPrice: n,
                  nonce: i,
                } = await this.getNftTransferGasParams(t, a, o),
                s = { to: r, value: R, gas: e, data: a, nonce: i, gasPrice: n },
                c = await this.getCoreLibrary(),
                { rawTransaction: d } = await c.eth.accounts.signTransaction(
                  s,
                  T(U, this),
                );
              return d;
            } catch (n) {
              throw (
                console.warn(n),
                new f.ExternalError({
                  type: u.EXTERNAL_ERROR,
                  error: n,
                  instance: this,
                })
              );
            }
          }
          signData(e) {
            return this.coreLibrary.eth.accounts.sign(e, T(U, this));
          }
          signWithCustomSigner(t) {
            let { data: r, signer: a } = t;
            return a({ ...r, privateKey: e.from(T(U, this).slice(2), "hex") });
          }
          async getTokenList() {
            var e;
            let t;
            this.bannedTokens = await this.getBannedTokenList();
            try {
              t = await c.default.get(c.ConfigKey.AvaxTokens);
            } catch (r) {
              s.default.error({ instance: this, error: r });
            }
            return null !== (e = t) && void 0 !== e ? e : [];
          }
          createToken(e) {
            return new b.AVAXToken({ parent: this, ...e });
          }
          async estimateGas(e, t, r, a) {
            void 0 === a && (a = H);
            const o = this.getProvider("send").createSendTokenContract(
                r,
                this.address,
                G,
                e,
              ),
              n = await this.getCoreLibrary(),
              i = await n.eth
                .estimateGas({
                  from: this.address,
                  nonce: Number(this.nonce.add(new this.BN(1))),
                  to: r,
                  data: o,
                })
                .catch((e) => s.default.error({ instance: this, error: e }));
            return i ? Math.round(i * this.gasLimitCoefficient).toString() : a;
          }
          async getTokenInfo(e) {
            let { contract: t } = e;
            const r = await this.getCoreLibrary();
            return r.getTokenBalanceByContractAddress({
              address: this.address,
              contractAddress: t,
            });
          }
          async createTokenTransaction(e) {
            let {
              address: t,
              amount: r,
              custom: a,
              userGasPrice: o,
              gasLimit: n,
              contract: i,
              multiplier: s,
              nonce: c,
            } = e;
            const d = this.getProvider("send").createSendTokenContract(
              i,
              this.address,
              t,
              r,
              c,
            );
            return this.createTransaction({
              address: i,
              amount: "0x0",
              paymentData: d,
              userGasPrice: o,
              gasLimit: n || (await this.estimateGas(r, t)),
              multiplier: s,
              nonce: c,
            });
          }
        }
        t.default = AVAXCoin;
      }).call(this, r(2).Buffer);
    },
    2982: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.N_DIV_2 =
          t.isAccessList =
          t.isAccessListBuffer =
          t.Capability =
            void 0));
      var a = r(801);
      function o(e) {
        if (0 === e.length) return !0;
        var t = e[0];
        return !!Array.isArray(t);
      }
      function n(e) {
        return !o(e);
      }
      ((function (e) {
        ((e[(e["EIP155ReplayProtection"] = 155)] = "EIP155ReplayProtection"),
          (e[(e["EIP1559FeeMarket"] = 1559)] = "EIP1559FeeMarket"),
          (e[(e["EIP2718TypedTransaction"] = 2718)] =
            "EIP2718TypedTransaction"),
          (e[(e["EIP2930AccessLists"] = 2930)] = "EIP2930AccessLists"));
      })(t.Capability || (t.Capability = {})),
        (t.isAccessListBuffer = o),
        (t.isAccessList = n),
        (t.N_DIV_2 = new a.BN(
          "7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",
          16,
        )));
    },
    3051: function (e) {
      e.exports = JSON.parse(
        '{"identity":0,"ip4":4,"tcp":6,"sha1":17,"sha2-256":18,"sha2-512":19,"sha3-512":20,"sha3-384":21,"sha3-256":22,"sha3-224":23,"shake-128":24,"shake-256":25,"keccak-224":26,"keccak-256":27,"keccak-384":28,"keccak-512":29,"blake3":30,"dccp":33,"murmur3-128":34,"murmur3-32":35,"ip6":41,"ip6zone":42,"path":47,"multicodec":48,"multihash":49,"multiaddr":50,"multibase":51,"dns":53,"dns4":54,"dns6":55,"dnsaddr":56,"protobuf":80,"cbor":81,"raw":85,"dbl-sha2-256":86,"rlp":96,"bencode":99,"dag-pb":112,"dag-cbor":113,"libp2p-key":114,"git-raw":120,"torrent-info":123,"torrent-file":124,"leofcoin-block":129,"leofcoin-tx":130,"leofcoin-pr":131,"sctp":132,"dag-jose":133,"dag-cose":134,"eth-block":144,"eth-block-list":145,"eth-tx-trie":146,"eth-tx":147,"eth-tx-receipt-trie":148,"eth-tx-receipt":149,"eth-state-trie":150,"eth-account-snapshot":151,"eth-storage-trie":152,"bitcoin-block":176,"bitcoin-tx":177,"bitcoin-witness-commitment":178,"zcash-block":192,"zcash-tx":193,"stellar-block":208,"stellar-tx":209,"md4":212,"md5":213,"bmt":214,"decred-block":224,"decred-tx":225,"ipld-ns":226,"ipfs-ns":227,"swarm-ns":228,"ipns-ns":229,"zeronet":230,"secp256k1-pub":231,"bls12_381-g1-pub":234,"bls12_381-g2-pub":235,"x25519-pub":236,"ed25519-pub":237,"dash-block":240,"dash-tx":241,"swarm-manifest":250,"swarm-feed":251,"udp":273,"p2p-webrtc-star":275,"p2p-webrtc-direct":276,"p2p-stardust":277,"p2p-circuit":290,"dag-json":297,"udt":301,"utp":302,"unix":400,"p2p":421,"ipfs":421,"https":443,"onion":444,"onion3":445,"garlic64":446,"garlic32":447,"tls":448,"quic":460,"ws":477,"wss":478,"p2p-websocket-star":479,"http":480,"json":512,"messagepack":513,"libp2p-peer-record":769,"sha2-256-trunc254-padded":4114,"ripemd-128":4178,"ripemd-160":4179,"ripemd-256":4180,"ripemd-320":4181,"x11":4352,"sm3-256":21325,"blake2b-8":45569,"blake2b-16":45570,"blake2b-24":45571,"blake2b-32":45572,"blake2b-40":45573,"blake2b-48":45574,"blake2b-56":45575,"blake2b-64":45576,"blake2b-72":45577,"blake2b-80":45578,"blake2b-88":45579,"blake2b-96":45580,"blake2b-104":45581,"blake2b-112":45582,"blake2b-120":45583,"blake2b-128":45584,"blake2b-136":45585,"blake2b-144":45586,"blake2b-152":45587,"blake2b-160":45588,"blake2b-168":45589,"blake2b-176":45590,"blake2b-184":45591,"blake2b-192":45592,"blake2b-200":45593,"blake2b-208":45594,"blake2b-216":45595,"blake2b-224":45596,"blake2b-232":45597,"blake2b-240":45598,"blake2b-248":45599,"blake2b-256":45600,"blake2b-264":45601,"blake2b-272":45602,"blake2b-280":45603,"blake2b-288":45604,"blake2b-296":45605,"blake2b-304":45606,"blake2b-312":45607,"blake2b-320":45608,"blake2b-328":45609,"blake2b-336":45610,"blake2b-344":45611,"blake2b-352":45612,"blake2b-360":45613,"blake2b-368":45614,"blake2b-376":45615,"blake2b-384":45616,"blake2b-392":45617,"blake2b-400":45618,"blake2b-408":45619,"blake2b-416":45620,"blake2b-424":45621,"blake2b-432":45622,"blake2b-440":45623,"blake2b-448":45624,"blake2b-456":45625,"blake2b-464":45626,"blake2b-472":45627,"blake2b-480":45628,"blake2b-488":45629,"blake2b-496":45630,"blake2b-504":45631,"blake2b-512":45632,"blake2s-8":45633,"blake2s-16":45634,"blake2s-24":45635,"blake2s-32":45636,"blake2s-40":45637,"blake2s-48":45638,"blake2s-56":45639,"blake2s-64":45640,"blake2s-72":45641,"blake2s-80":45642,"blake2s-88":45643,"blake2s-96":45644,"blake2s-104":45645,"blake2s-112":45646,"blake2s-120":45647,"blake2s-128":45648,"blake2s-136":45649,"blake2s-144":45650,"blake2s-152":45651,"blake2s-160":45652,"blake2s-168":45653,"blake2s-176":45654,"blake2s-184":45655,"blake2s-192":45656,"blake2s-200":45657,"blake2s-208":45658,"blake2s-216":45659,"blake2s-224":45660,"blake2s-232":45661,"blake2s-240":45662,"blake2s-248":45663,"blake2s-256":45664,"skein256-8":45825,"skein256-16":45826,"skein256-24":45827,"skein256-32":45828,"skein256-40":45829,"skein256-48":45830,"skein256-56":45831,"skein256-64":45832,"skein256-72":45833,"skein256-80":45834,"skein256-88":45835,"skein256-96":45836,"skein256-104":45837,"skein256-112":45838,"skein256-120":45839,"skein256-128":45840,"skein256-136":45841,"skein256-144":45842,"skein256-152":45843,"skein256-160":45844,"skein256-168":45845,"skein256-176":45846,"skein256-184":45847,"skein256-192":45848,"skein256-200":45849,"skein256-208":45850,"skein256-216":45851,"skein256-224":45852,"skein256-232":45853,"skein256-240":45854,"skein256-248":45855,"skein256-256":45856,"skein512-8":45857,"skein512-16":45858,"skein512-24":45859,"skein512-32":45860,"skein512-40":45861,"skein512-48":45862,"skein512-56":45863,"skein512-64":45864,"skein512-72":45865,"skein512-80":45866,"skein512-88":45867,"skein512-96":45868,"skein512-104":45869,"skein512-112":45870,"skein512-120":45871,"skein512-128":45872,"skein512-136":45873,"skein512-144":45874,"skein512-152":45875,"skein512-160":45876,"skein512-168":45877,"skein512-176":45878,"skein512-184":45879,"skein512-192":45880,"skein512-200":45881,"skein512-208":45882,"skein512-216":45883,"skein512-224":45884,"skein512-232":45885,"skein512-240":45886,"skein512-248":45887,"skein512-256":45888,"skein512-264":45889,"skein512-272":45890,"skein512-280":45891,"skein512-288":45892,"skein512-296":45893,"skein512-304":45894,"skein512-312":45895,"skein512-320":45896,"skein512-328":45897,"skein512-336":45898,"skein512-344":45899,"skein512-352":45900,"skein512-360":45901,"skein512-368":45902,"skein512-376":45903,"skein512-384":45904,"skein512-392":45905,"skein512-400":45906,"skein512-408":45907,"skein512-416":45908,"skein512-424":45909,"skein512-432":45910,"skein512-440":45911,"skein512-448":45912,"skein512-456":45913,"skein512-464":45914,"skein512-472":45915,"skein512-480":45916,"skein512-488":45917,"skein512-496":45918,"skein512-504":45919,"skein512-512":45920,"skein1024-8":45921,"skein1024-16":45922,"skein1024-24":45923,"skein1024-32":45924,"skein1024-40":45925,"skein1024-48":45926,"skein1024-56":45927,"skein1024-64":45928,"skein1024-72":45929,"skein1024-80":45930,"skein1024-88":45931,"skein1024-96":45932,"skein1024-104":45933,"skein1024-112":45934,"skein1024-120":45935,"skein1024-128":45936,"skein1024-136":45937,"skein1024-144":45938,"skein1024-152":45939,"skein1024-160":45940,"skein1024-168":45941,"skein1024-176":45942,"skein1024-184":45943,"skein1024-192":45944,"skein1024-200":45945,"skein1024-208":45946,"skein1024-216":45947,"skein1024-224":45948,"skein1024-232":45949,"skein1024-240":45950,"skein1024-248":45951,"skein1024-256":45952,"skein1024-264":45953,"skein1024-272":45954,"skein1024-280":45955,"skein1024-288":45956,"skein1024-296":45957,"skein1024-304":45958,"skein1024-312":45959,"skein1024-320":45960,"skein1024-328":45961,"skein1024-336":45962,"skein1024-344":45963,"skein1024-352":45964,"skein1024-360":45965,"skein1024-368":45966,"skein1024-376":45967,"skein1024-384":45968,"skein1024-392":45969,"skein1024-400":45970,"skein1024-408":45971,"skein1024-416":45972,"skein1024-424":45973,"skein1024-432":45974,"skein1024-440":45975,"skein1024-448":45976,"skein1024-456":45977,"skein1024-464":45978,"skein1024-472":45979,"skein1024-480":45980,"skein1024-488":45981,"skein1024-496":45982,"skein1024-504":45983,"skein1024-512":45984,"skein1024-520":45985,"skein1024-528":45986,"skein1024-536":45987,"skein1024-544":45988,"skein1024-552":45989,"skein1024-560":45990,"skein1024-568":45991,"skein1024-576":45992,"skein1024-584":45993,"skein1024-592":45994,"skein1024-600":45995,"skein1024-608":45996,"skein1024-616":45997,"skein1024-624":45998,"skein1024-632":45999,"skein1024-640":46000,"skein1024-648":46001,"skein1024-656":46002,"skein1024-664":46003,"skein1024-672":46004,"skein1024-680":46005,"skein1024-688":46006,"skein1024-696":46007,"skein1024-704":46008,"skein1024-712":46009,"skein1024-720":46010,"skein1024-728":46011,"skein1024-736":46012,"skein1024-744":46013,"skein1024-752":46014,"skein1024-760":46015,"skein1024-768":46016,"skein1024-776":46017,"skein1024-784":46018,"skein1024-792":46019,"skein1024-800":46020,"skein1024-808":46021,"skein1024-816":46022,"skein1024-824":46023,"skein1024-832":46024,"skein1024-840":46025,"skein1024-848":46026,"skein1024-856":46027,"skein1024-864":46028,"skein1024-872":46029,"skein1024-880":46030,"skein1024-888":46031,"skein1024-896":46032,"skein1024-904":46033,"skein1024-912":46034,"skein1024-920":46035,"skein1024-928":46036,"skein1024-936":46037,"skein1024-944":46038,"skein1024-952":46039,"skein1024-960":46040,"skein1024-968":46041,"skein1024-976":46042,"skein1024-984":46043,"skein1024-992":46044,"skein1024-1000":46045,"skein1024-1008":46046,"skein1024-1016":46047,"skein1024-1024":46048,"poseidon-bls12_381-a2-fc1":46081,"poseidon-bls12_381-a2-fc1-sc":46082,"zeroxcert-imprint-256":52753,"fil-commitment-unsealed":61697,"fil-commitment-sealed":61698,"holochain-adr-v0":8417572,"holochain-adr-v1":8483108,"holochain-key-v0":9728292,"holochain-key-v1":9793828,"holochain-sig-v0":10645796,"holochain-sig-v1":10711332}',
      );
    },
    3210: function (e, t, r) {
      "use strict";
      var a = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.erc721Abi = t.erc1155Abi = t.default = void 0));
      var o = a(r(2654)),
        n = r(27),
        i = r(19),
        s = r(67),
        c = a(r(129)),
        d = r(813);
      const f = "transactionHash",
        u = "0x0",
        l = (t.erc1155Abi = [
          {
            inputs: [
              { internalType: "address", name: "_from", type: "address" },
              { internalType: "address", name: "_to", type: "address" },
              { internalType: "uint256", name: "_id", type: "uint256" },
              { internalType: "uint256", name: "_amount", type: "uint256" },
              { internalType: "bytes", name: "_data", type: "bytes" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ]),
        h = (t.erc721Abi = [
          {
            constant: !1,
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "tokenId", type: "uint256" },
            ],
            name: "safeTransferFrom",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function",
          },
        ]);
      class ETHNftExplorer extends c.default {
        constructor(e) {
          let { wallet: t, config: r } = e;
          (super({ wallet: t, config: r }),
            (this.baseUrl = (0, s.getStringWithEnsuredEndChar)(r.baseUrl, "/")),
            (this.web3 = new o.default(r.baseUrl)),
            (this.ticker = t.ticker));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        makeNftInfoUrl(e, t) {
          return `${this.baseUrl}${e}?a=${t}`;
        }
        async getGasPrice() {
          return this.web3.eth.getGasPrice();
        }
        estimateGas(e, t, r, a) {
          void 0 === r && (r = null);
          const o = { from: e, to: t, data: a };
          return (r && (o.nonce = r + 1), this.web3.eth.estimateGas(o));
        }
        sendTransaction(e) {
          return new Promise((t, r) => {
            this.wallet.coreLibrary.eth
              .sendSignedTransaction(e)
              .on(f, (e) => {
                t({ tx: e });
              })
              .catch((e) => r(e));
          });
        }
        async getNftContractData(e, t, r, a, o) {
          if (![d.ERC721_TOKEN_STANDARD, d.ERC1155_TOKEN_STANDARD].includes(o))
            throw new i.InternalError({
              type: n.INTERNAL_ERROR,
              error: "Unrecognized nft token standard",
              instance: this,
            });
          const { address: s } = e,
            c = {
              [d.ERC1155_TOKEN_STANDARD]: (e, t, r, a) => {
                const o = new this.web3.eth.Contract(l, r);
                return o.methods.safeTransferFrom(e, t, a, 1, u).encodeABI();
              },
              [d.ERC721_TOKEN_STANDARD]: (e, t, r, a) => {
                const o = new this.web3.eth.Contract(h, r);
                return o.methods.safeTransferFrom(e, t, a).encodeABI();
              },
            };
          return c[o](s, t, r, a);
        }
        async sendNft(e, t, r, a, o, s) {
          try {
            const n = await this.getNftContractData(e, t, r, a, o),
              i = await e.createNftTransaction({
                toAddress: t,
                contractAddress: r,
                data: n,
                userOptions: s,
              });
            return await this.sendTransaction(i);
          } catch (c) {
            throw (
              console.warn(c),
              new i.ExternalError({
                type: n.EXTERNAL_ERROR,
                error: c,
                instance: this,
              })
            );
          }
        }
      }
      t.default = ETHNftExplorer;
    },
    3269: function (e, t, r) {
      "use strict";
      var a = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "NftMixin", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }));
      var o = a(r(823));
    },
    3276: function (e, t, r) {
      "use strict";
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                ((o &&
                  !("get" in o
                    ? !t.__esModule
                    : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, a, o));
              }
            : function (e, t, r, a) {
                (void 0 === a && (a = r), (e[a] = t[r]));
              }),
        o =
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
        n =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  a(t, e, r);
            return (o(t, e), t);
          },
        i =
          (this && this.__values) ||
          function (e) {
            var t = "function" === typeof Symbol && Symbol.iterator,
              r = t && e[t],
              a = 0;
            if (r) return r.call(e);
            if (e && "number" === typeof e.length)
              return {
                next: function () {
                  return (
                    e && a >= e.length && (e = void 0),
                    { value: e && e[a++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        s =
          (this && this.__read) ||
          function (e, t) {
            var r = "function" === typeof Symbol && e[Symbol.iterator];
            if (!r) return e;
            var a,
              o,
              n = r.call(e),
              i = [];
            try {
              while ((void 0 === t || t-- > 0) && !(a = n.next()).done)
                i.push(a.value);
            } catch (s) {
              o = { error: s };
            } finally {
              try {
                a && !a.done && (r = n["return"]) && r.call(n);
              } finally {
                if (o) throw o.error;
              }
            }
            return i;
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.BaseTransaction = void 0));
      var c = n(r(3277)),
        d = r(801),
        f = r(2982),
        u = (function () {
          function e(e, t) {
            ((this.cache = { hash: void 0, dataFee: void 0 }),
              (this.activeCapabilities = []),
              (this.DEFAULT_CHAIN = c.Chain.Mainnet),
              (this.DEFAULT_HARDFORK = c.Hardfork.Istanbul));
            var r = e.nonce,
              a = e.gasLimit,
              o = e.to,
              n = e.value,
              i = e.data,
              s = e.v,
              f = e.r,
              u = e.s,
              l = e.type;
            ((this._type = new d.BN((0, d.toBuffer)(l)).toNumber()),
              (this.txOptions = t));
            var h = (0, d.toBuffer)("" === o ? "0x" : o),
              x = (0, d.toBuffer)("" === s ? "0x" : s),
              p = (0, d.toBuffer)("" === f ? "0x" : f),
              m = (0, d.toBuffer)("" === u ? "0x" : u);
            ((this.nonce = new d.BN((0, d.toBuffer)("" === r ? "0x" : r))),
              (this.gasLimit = new d.BN((0, d.toBuffer)("" === a ? "0x" : a))),
              (this.to = h.length > 0 ? new d.Address(h) : void 0),
              (this.value = new d.BN((0, d.toBuffer)("" === n ? "0x" : n))),
              (this.data = (0, d.toBuffer)("" === i ? "0x" : i)),
              (this.v = x.length > 0 ? new d.BN(x) : void 0),
              (this.r = p.length > 0 ? new d.BN(p) : void 0),
              (this.s = m.length > 0 ? new d.BN(m) : void 0),
              this._validateCannotExceedMaxInteger({
                value: this.value,
                r: this.r,
                s: this.s,
              }),
              this._validateCannotExceedMaxInteger(
                { gasLimit: this.gasLimit },
                64,
              ),
              this._validateCannotExceedMaxInteger(
                { nonce: this.nonce },
                64,
                !0,
              ));
          }
          return (
            Object.defineProperty(e.prototype, "transactionType", {
              get: function () {
                return this.type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.supports = function (e) {
              return this.activeCapabilities.includes(e);
            }),
            (e.prototype.validate = function (e) {
              void 0 === e && (e = !1);
              var t = [];
              return (
                this.getBaseFee().gt(this.gasLimit) &&
                  t.push(
                    "gasLimit is too low. given "
                      .concat(this.gasLimit, ", need at least ")
                      .concat(this.getBaseFee()),
                  ),
                this.isSigned() &&
                  !this.verifySignature() &&
                  t.push("Invalid Signature"),
                e ? t : 0 === t.length
              );
            }),
            (e.prototype.getBaseFee = function () {
              var e = this.getDataFee().addn(
                this.common.param("gasPrices", "tx"),
              );
              return (
                this.common.gteHardfork("homestead") &&
                  this.toCreationAddress() &&
                  e.iaddn(this.common.param("gasPrices", "txCreation")),
                e
              );
            }),
            (e.prototype.getDataFee = function () {
              for (
                var e = this.common.param("gasPrices", "txDataZero"),
                  t = this.common.param("gasPrices", "txDataNonZero"),
                  r = 0,
                  a = 0;
                a < this.data.length;
                a++
              )
                0 === this.data[a] ? (r += e) : (r += t);
              if (
                ((r = new d.BN(r)),
                (void 0 === this.to || null === this.to) &&
                  this.common.isActivatedEIP(3860))
              ) {
                var o = Math.ceil(this.data.length / 32),
                  n = new d.BN(
                    this.common.param("gasPrices", "initCodeWordCost"),
                  ).imuln(o);
                r.iadd(n);
              }
              return r;
            }),
            (e.prototype.toCreationAddress = function () {
              return void 0 === this.to || 0 === this.to.buf.length;
            }),
            (e.prototype.isSigned = function () {
              var e = this,
                t = e.v,
                r = e.r,
                a = e.s;
              return 0 === this.type
                ? !!(t && r && a)
                : !(void 0 === t || !r || !a);
            }),
            (e.prototype.verifySignature = function () {
              try {
                var e = this.getSenderPublicKey();
                return 0 !== (0, d.unpadBuffer)(e).length;
              } catch (t) {
                return !1;
              }
            }),
            (e.prototype.getSenderAddress = function () {
              return new d.Address(
                (0, d.publicToAddress)(this.getSenderPublicKey()),
              );
            }),
            (e.prototype.sign = function (e) {
              if (32 !== e.length) {
                var t = this._errorMsg(
                  "Private key must be 32 bytes in length.",
                );
                throw new Error(t);
              }
              var r = !1;
              0 === this.type &&
                this.common.gteHardfork("spuriousDragon") &&
                !this.supports(f.Capability.EIP155ReplayProtection) &&
                (this.activeCapabilities.push(
                  f.Capability.EIP155ReplayProtection,
                ),
                (r = !0));
              var a = this.getMessageToSign(!0),
                o = (0, d.ecsign)(a, e),
                n = o.v,
                i = o.r,
                s = o.s,
                c = this._processSignature(n, i, s);
              if (r) {
                var u = this.activeCapabilities.indexOf(
                  f.Capability.EIP155ReplayProtection,
                );
                u > -1 && this.activeCapabilities.splice(u, 1);
              }
              return c;
            }),
            (e.prototype._getCommon = function (e, t) {
              var r;
              if (t) {
                var a = new d.BN((0, d.toBuffer)(t));
                if (e) {
                  if (!e.chainIdBN().eq(a)) {
                    var o = this._errorMsg(
                      "The chain ID does not match the chain ID of Common",
                    );
                    throw new Error(o);
                  }
                  return e.copy();
                }
                return c.default.isSupportedChainId(a)
                  ? new c.default({ chain: a, hardfork: this.DEFAULT_HARDFORK })
                  : c.default.forCustomChain(
                      this.DEFAULT_CHAIN,
                      { name: "custom-chain", networkId: a, chainId: a },
                      this.DEFAULT_HARDFORK,
                    );
              }
              return null !==
                (r = null === e || void 0 === e ? void 0 : e.copy()) &&
                void 0 !== r
                ? r
                : new c.default({
                    chain: this.DEFAULT_CHAIN,
                    hardfork: this.DEFAULT_HARDFORK,
                  });
            }),
            (e.prototype._validateCannotExceedMaxInteger = function (e, t, r) {
              var a, o;
              (void 0 === t && (t = 256), void 0 === r && (r = !1));
              try {
                for (
                  var n = i(Object.entries(e)), c = n.next();
                  !c.done;
                  c = n.next()
                ) {
                  var f = s(c.value, 2),
                    u = f[0],
                    l = f[1];
                  switch (t) {
                    case 64:
                      if (r) {
                        if (
                          null === l || void 0 === l
                            ? void 0
                            : l.gte(d.MAX_UINT64)
                        ) {
                          var h = this._errorMsg(
                            ""
                              .concat(
                                u,
                                " cannot equal or exceed MAX_UINT64 (2^64-1), given ",
                              )
                              .concat(l),
                          );
                          throw new Error(h);
                        }
                      } else if (
                        null === l || void 0 === l ? void 0 : l.gt(d.MAX_UINT64)
                      ) {
                        h = this._errorMsg(
                          ""
                            .concat(
                              u,
                              " cannot exceed MAX_UINT64 (2^64-1), given ",
                            )
                            .concat(l),
                        );
                        throw new Error(h);
                      }
                      break;
                    case 256:
                      if (r) {
                        if (
                          null === l || void 0 === l
                            ? void 0
                            : l.gte(d.MAX_INTEGER)
                        ) {
                          h = this._errorMsg(
                            ""
                              .concat(
                                u,
                                " cannot equal or exceed MAX_INTEGER (2^256-1), given ",
                              )
                              .concat(l),
                          );
                          throw new Error(h);
                        }
                      } else if (
                        null === l || void 0 === l
                          ? void 0
                          : l.gt(d.MAX_INTEGER)
                      ) {
                        h = this._errorMsg(
                          ""
                            .concat(
                              u,
                              " cannot exceed MAX_INTEGER (2^256-1), given ",
                            )
                            .concat(l),
                        );
                        throw new Error(h);
                      }
                      break;
                    default:
                      h = this._errorMsg("unimplemented bits value");
                      throw new Error(h);
                  }
                }
              } catch (x) {
                a = { error: x };
              } finally {
                try {
                  c && !c.done && (o = n.return) && o.call(n);
                } finally {
                  if (a) throw a.error;
                }
              }
            }),
            (e.prototype._getSharedErrorPostfix = function () {
              var e = "";
              try {
                e = this.isSigned()
                  ? (0, d.bufferToHex)(this.hash())
                  : "not available (unsigned)";
              } catch (o) {
                e = "error";
              }
              var t = "";
              try {
                t = this.isSigned().toString();
              } catch (o) {
                e = "error";
              }
              var r = "";
              try {
                r = this.common.hardfork();
              } catch (o) {
                r = "error";
              }
              var a = "tx type="
                .concat(this.type, " hash=")
                .concat(e, " nonce=")
                .concat(this.nonce, " value=")
                .concat(this.value, " ");
              return ((a += "signed=".concat(t, " hf=").concat(r)), a);
            }),
            e
          );
        })();
      t.BaseTransaction = u;
    },
    3277: function (e, t, r) {
      "use strict";
      (function (e) {
        var a =
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
                      for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    }),
                  e(t, r)
                );
              };
              return function (t, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null",
                  );
                function a() {
                  this.constructor = t;
                }
                (e(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((a.prototype = r.prototype), new a())));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (
                (o =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, a = arguments.length; r < a; r++)
                      for (var o in ((t = arguments[r]), t))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                o.apply(this, arguments)
              );
            },
          n =
            (this && this.__values) ||
            function (e) {
              var t = "function" === typeof Symbol && Symbol.iterator,
                r = t && e[t],
                a = 0;
              if (r) return r.call(e);
              if (e && "number" === typeof e.length)
                return {
                  next: function () {
                    return (
                      e && a >= e.length && (e = void 0),
                      { value: e && e[a++], done: !e }
                    );
                  },
                };
              throw new TypeError(
                t
                  ? "Object is not iterable."
                  : "Symbol.iterator is not defined.",
              );
            };
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ConsensusAlgorithm =
            t.ConsensusType =
            t.Hardfork =
            t.Chain =
            t.CustomChain =
              void 0));
        var i,
          s,
          c = r(52),
          d = r(4180),
          f = r(801),
          u = r(4181),
          l = r(4188),
          h = r(4206);
        ((function (e) {
          ((e["PolygonMainnet"] = "polygon-mainnet"),
            (e["PolygonMumbai"] = "polygon-mumbai"),
            (e["ArbitrumRinkebyTestnet"] = "arbitrum-rinkeby-testnet"),
            (e["xDaiChain"] = "x-dai-chain"),
            (e["OptimisticKovan"] = "optimistic-kovan"),
            (e["OptimisticEthereum"] = "optimistic-ethereum"));
        })((i = t.CustomChain || (t.CustomChain = {}))),
          (function (e) {
            ((e[(e["Mainnet"] = 1)] = "Mainnet"),
              (e[(e["Ropsten"] = 3)] = "Ropsten"),
              (e[(e["Rinkeby"] = 4)] = "Rinkeby"),
              (e[(e["Kovan"] = 42)] = "Kovan"),
              (e[(e["Goerli"] = 5)] = "Goerli"),
              (e[(e["Sepolia"] = 11155111)] = "Sepolia"));
          })(t.Chain || (t.Chain = {})),
          (function (e) {
            ((e["Chainstart"] = "chainstart"),
              (e["Homestead"] = "homestead"),
              (e["Dao"] = "dao"),
              (e["TangerineWhistle"] = "tangerineWhistle"),
              (e["SpuriousDragon"] = "spuriousDragon"),
              (e["Byzantium"] = "byzantium"),
              (e["Constantinople"] = "constantinople"),
              (e["Petersburg"] = "petersburg"),
              (e["Istanbul"] = "istanbul"),
              (e["MuirGlacier"] = "muirGlacier"),
              (e["Berlin"] = "berlin"),
              (e["London"] = "london"),
              (e["ArrowGlacier"] = "arrowGlacier"),
              (e["GrayGlacier"] = "grayGlacier"),
              (e["MergeForkIdTransition"] = "mergeForkIdTransition"),
              (e["Merge"] = "merge"),
              (e["Shanghai"] = "shanghai"));
          })((s = t.Hardfork || (t.Hardfork = {}))),
          (function (e) {
            ((e["ProofOfStake"] = "pos"),
              (e["ProofOfWork"] = "pow"),
              (e["ProofOfAuthority"] = "poa"));
          })(t.ConsensusType || (t.ConsensusType = {})),
          (function (e) {
            ((e["Ethash"] = "ethash"),
              (e["Clique"] = "clique"),
              (e["Casper"] = "casper"));
          })(t.ConsensusAlgorithm || (t.ConsensusAlgorithm = {})));
        var x = (function (t) {
          function c(e) {
            var r,
              a,
              o,
              i,
              c = this;
            ((c = t.call(this) || this),
              (c._supportedHardforks = []),
              (c._eips = []),
              (c._customChains =
                null !== (o = e.customChains) && void 0 !== o ? o : []),
              (c._chainParams = c.setChain(e.chain)),
              (c.DEFAULT_HARDFORK =
                null !== (i = c._chainParams.defaultHardfork) && void 0 !== i
                  ? i
                  : s.Istanbul));
            try {
              for (
                var d = n(c._chainParams.hardforks), f = d.next();
                !f.done;
                f = d.next()
              ) {
                var u = f.value;
                u.forkHash || (u.forkHash = c._calcForkHash(u.name));
              }
            } catch (l) {
              r = { error: l };
            } finally {
              try {
                f && !f.done && (a = d.return) && a.call(d);
              } finally {
                if (r) throw r.error;
              }
            }
            return (
              (c._hardfork = c.DEFAULT_HARDFORK),
              e.supportedHardforks &&
                (c._supportedHardforks = e.supportedHardforks),
              e.hardfork && c.setHardfork(e.hardfork),
              e.eips && c.setEIPs(e.eips),
              c
            );
          }
          return (
            a(c, t),
            (c.custom = function (e, t) {
              var r;
              void 0 === t && (t = {});
              var a =
                  null !== (r = t.baseChain) && void 0 !== r ? r : "mainnet",
                n = o({}, c._getChainParams(a));
              if (((n["name"] = "custom-chain"), "string" !== typeof e))
                return new c(o({ chain: o(o({}, n), e) }, t));
              if (e === i.PolygonMainnet)
                return c.custom(
                  { name: i.PolygonMainnet, chainId: 137, networkId: 137 },
                  t,
                );
              if (e === i.PolygonMumbai)
                return c.custom(
                  { name: i.PolygonMumbai, chainId: 80001, networkId: 80001 },
                  t,
                );
              if (e === i.ArbitrumRinkebyTestnet)
                return c.custom(
                  {
                    name: i.ArbitrumRinkebyTestnet,
                    chainId: 421611,
                    networkId: 421611,
                  },
                  t,
                );
              if (e === i.xDaiChain)
                return c.custom(
                  { name: i.xDaiChain, chainId: 100, networkId: 100 },
                  t,
                );
              if (e === i.OptimisticKovan)
                return c.custom(
                  { name: i.OptimisticKovan, chainId: 69, networkId: 69 },
                  o({ hardfork: s.Berlin }, t),
                );
              if (e === i.OptimisticEthereum)
                return c.custom(
                  { name: i.OptimisticEthereum, chainId: 10, networkId: 10 },
                  o({ hardfork: s.Berlin }, t),
                );
              throw new Error("Custom chain ".concat(e, " not supported"));
            }),
            (c.forCustomChain = function (e, t, r, a) {
              var n = c._getChainParams(e);
              return new c({
                chain: o(o({}, n), t),
                hardfork: r,
                supportedHardforks: a,
              });
            }),
            (c.isSupportedChainId = function (e) {
              var t = (0, u._getInitializedChains)();
              return Boolean(t["names"][e.toString()]);
            }),
            (c._getChainParams = function (e, t) {
              var r = (0, u._getInitializedChains)(t);
              if ("number" === typeof e || f.BN.isBN(e)) {
                if (((e = e.toString()), r["names"][e])) {
                  var a = r["names"][e];
                  return r[a];
                }
                throw new Error("Chain with ID ".concat(e, " not supported"));
              }
              if (r[e]) return r[e];
              throw new Error("Chain with name ".concat(e, " not supported"));
            }),
            (c.prototype.setChain = function (e) {
              var t, r;
              if (
                "number" === typeof e ||
                "string" === typeof e ||
                f.BN.isBN(e)
              ) {
                var a = void 0;
                ((a =
                  this._customChains &&
                  this._customChains.length > 0 &&
                  Array.isArray(this._customChains[0])
                    ? this._customChains.map(function (e) {
                        return e[0];
                      })
                    : this._customChains),
                  (this._chainParams = c._getChainParams(e, a)));
              } else {
                if ("object" !== typeof e)
                  throw new Error("Wrong input format");
                if (this._customChains.length > 0)
                  throw new Error(
                    "Chain must be a string, number, or BN when initialized with customChains passed in",
                  );
                var o = ["networkId", "genesis", "hardforks", "bootstrapNodes"];
                try {
                  for (var i = n(o), s = i.next(); !s.done; s = i.next()) {
                    var d = s.value;
                    if (void 0 === e[d])
                      throw new Error(
                        "Missing required chain parameter: ".concat(d),
                      );
                  }
                } catch (u) {
                  t = { error: u };
                } finally {
                  try {
                    s && !s.done && (r = i.return) && r.call(i);
                  } finally {
                    if (t) throw t.error;
                  }
                }
                this._chainParams = e;
              }
              return this._chainParams;
            }),
            (c.prototype.setHardfork = function (e) {
              var t, r;
              if (!this._isSupportedHardfork(e))
                throw new Error(
                  "Hardfork ".concat(
                    e,
                    " not set as supported in supportedHardforks",
                  ),
                );
              var a = !1;
              try {
                for (
                  var o = n(l.hardforks), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var s = i.value;
                  s[0] === e &&
                    (this._hardfork !== e &&
                      ((this._hardfork = e), this.emit("hardforkChanged", e)),
                    (a = !0));
                }
              } catch (c) {
                t = { error: c };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              if (!a)
                throw new Error(
                  "Hardfork with name ".concat(e, " not supported"),
                );
            }),
            (c.prototype.getHardforkByBlockNumber = function (e, t) {
              var r, a;
              ((e = (0, f.toType)(e, f.TypeOutput.BN)),
                (t = (0, f.toType)(t, f.TypeOutput.BN)));
              var o,
                i,
                c,
                d = s.Chainstart;
              try {
                for (
                  var u = n(this.hardforks()), l = u.next();
                  !l.done;
                  l = u.next()
                ) {
                  var h = l.value;
                  if (null !== h.block)
                    (e.gte(new f.BN(h.block)) && (d = h.name),
                      t &&
                        h.td &&
                        (t.gte(new f.BN(h.td)) ? (o = h.name) : (i = c)),
                      (c = h.name));
                  else if (
                    void 0 !== t &&
                    null !== t &&
                    void 0 !== h.td &&
                    null !== h.td &&
                    t.gte(new f.BN(h.td))
                  )
                    return h.name;
                }
              } catch (m) {
                r = { error: m };
              } finally {
                try {
                  l && !l.done && (a = u.return) && a.call(u);
                } finally {
                  if (r) throw r.error;
                }
              }
              if (t) {
                var x = "block number: ".concat(e, " (-> ").concat(d, "), ");
                if (o && !this.hardforkGteHardfork(d, o)) {
                  var p =
                    "HF determined by block number is lower than the minimum total difficulty HF";
                  throw (
                    (x += "total difficulty: "
                      .concat(t, " (-> ")
                      .concat(o, ")")),
                    new Error("".concat(p, ": ").concat(x))
                  );
                }
                if (i && !this.hardforkGteHardfork(i, d)) {
                  p =
                    "Maximum HF determined by total difficulty is lower than the block number HF";
                  throw (
                    (x += "total difficulty: "
                      .concat(t, " (-> ")
                      .concat(i, ")")),
                    new Error("".concat(p, ": ").concat(x))
                  );
                }
              }
              return d;
            }),
            (c.prototype.setHardforkByBlockNumber = function (e, t) {
              var r = this.getHardforkByBlockNumber(e, t);
              return (this.setHardfork(r), r);
            }),
            (c.prototype._chooseHardfork = function (e, t) {
              if ((void 0 === t && (t = !0), e)) {
                if (t && !this._isSupportedHardfork(e))
                  throw new Error(
                    "Hardfork ".concat(
                      e,
                      " not set as supported in supportedHardforks",
                    ),
                  );
              } else e = this._hardfork;
              return e;
            }),
            (c.prototype._getHardfork = function (e) {
              var t,
                r,
                a = this.hardforks();
              try {
                for (var o = n(a), i = o.next(); !i.done; i = o.next()) {
                  var s = i.value;
                  if (s["name"] === e) return s;
                }
              } catch (c) {
                t = { error: c };
              } finally {
                try {
                  i && !i.done && (r = o.return) && r.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              throw new Error(
                "Hardfork "
                  .concat(e, " not defined for chain ")
                  .concat(this.chainName()),
              );
            }),
            (c.prototype._isSupportedHardfork = function (e) {
              var t, r;
              if (!(this._supportedHardforks.length > 0)) return !0;
              try {
                for (
                  var a = n(this._supportedHardforks), o = a.next();
                  !o.done;
                  o = a.next()
                ) {
                  var i = o.value;
                  if (e === i) return !0;
                }
              } catch (s) {
                t = { error: s };
              } finally {
                try {
                  o && !o.done && (r = a.return) && r.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
              return !1;
            }),
            (c.prototype.setEIPs = function (e) {
              var t,
                r,
                a = this;
              void 0 === e && (e = []);
              var o = function (t) {
                  if (!(t in h.EIPs))
                    throw new Error("".concat(t, " not supported"));
                  var r = i.gteHardfork(h.EIPs[t]["minimumHardfork"]);
                  if (!r)
                    throw new Error(
                      ""
                        .concat(t, " cannot be activated on hardfork ")
                        .concat(i.hardfork(), ", minimumHardfork: ")
                        .concat(r),
                    );
                  h.EIPs[t].requiredEIPs &&
                    h.EIPs[t].requiredEIPs.forEach(function (r) {
                      if (!e.includes(r) && !a.isActivatedEIP(r))
                        throw new Error(
                          ""
                            .concat(t, " requires EIP ")
                            .concat(r, ", but is not included in the EIP list"),
                        );
                    });
                },
                i = this;
              try {
                for (var s = n(e), c = s.next(); !c.done; c = s.next()) {
                  var d = c.value;
                  o(d);
                }
              } catch (f) {
                t = { error: f };
              } finally {
                try {
                  c && !c.done && (r = s.return) && r.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
              this._eips = e;
            }),
            (c.prototype.param = function (e, t) {
              var r,
                a,
                o = null;
              try {
                for (
                  var i = n(this._eips), s = i.next();
                  !s.done;
                  s = i.next()
                ) {
                  var c = s.value;
                  if (((o = this.paramByEIP(e, t, c)), null !== o)) return o;
                }
              } catch (d) {
                r = { error: d };
              } finally {
                try {
                  s && !s.done && (a = i.return) && a.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
              return this.paramByHardfork(e, t, this._hardfork);
            }),
            (c.prototype.paramByHardfork = function (e, t, r) {
              var a, o, i, s;
              r = this._chooseHardfork(r);
              var c = null;
              try {
                for (
                  var d = n(l.hardforks), f = d.next();
                  !f.done;
                  f = d.next()
                ) {
                  var u = f.value;
                  if ("eips" in u[1]) {
                    var h = u[1]["eips"];
                    try {
                      for (
                        var x = ((i = void 0), n(h)), p = x.next();
                        !p.done;
                        p = x.next()
                      ) {
                        var m = p.value,
                          b = this.paramByEIP(e, t, m);
                        c = null !== b ? b : c;
                      }
                    } catch (g) {
                      i = { error: g };
                    } finally {
                      try {
                        p && !p.done && (s = x.return) && s.call(x);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                  } else {
                    if (!u[1][e])
                      throw new Error("Topic ".concat(e, " not defined"));
                    void 0 !== u[1][e][t] && (c = u[1][e][t].v);
                  }
                  if (u[0] === r) break;
                }
              } catch (v) {
                a = { error: v };
              } finally {
                try {
                  f && !f.done && (o = d.return) && o.call(d);
                } finally {
                  if (a) throw a.error;
                }
              }
              return c;
            }),
            (c.prototype.paramByEIP = function (e, t, r) {
              if (!(r in h.EIPs))
                throw new Error("".concat(r, " not supported"));
              var a = h.EIPs[r];
              if (!(e in a))
                throw new Error("Topic ".concat(e, " not defined"));
              if (void 0 === a[e][t]) return null;
              var o = a[e][t].v;
              return o;
            }),
            (c.prototype.paramByBlock = function (e, t, r) {
              var a = this.activeHardforks(r),
                o = a[a.length - 1]["name"];
              return this.paramByHardfork(e, t, o);
            }),
            (c.prototype.isActivatedEIP = function (e) {
              var t, r;
              if (this.eips().includes(e)) return !0;
              try {
                for (
                  var a = n(l.hardforks), o = a.next();
                  !o.done;
                  o = a.next()
                ) {
                  var i = o.value,
                    s = i[1];
                  if (
                    this.gteHardfork(s["name"]) &&
                    "eips" in s &&
                    s["eips"].includes(e)
                  )
                    return !0;
                }
              } catch (c) {
                t = { error: c };
              } finally {
                try {
                  o && !o.done && (r = a.return) && r.call(a);
                } finally {
                  if (t) throw t.error;
                }
              }
              return !1;
            }),
            (c.prototype.hardforkIsActiveOnBlock = function (e, t, r) {
              var a;
              (void 0 === r && (r = {}),
                (t = (0, f.toType)(t, f.TypeOutput.BN)));
              var o = null !== (a = r.onlySupported) && void 0 !== a && a;
              e = this._chooseHardfork(e, o);
              var n = this.hardforkBlockBN(e);
              return !(!n || !t.gte(n));
            }),
            (c.prototype.activeOnBlock = function (e, t) {
              return this.hardforkIsActiveOnBlock(null, e, t);
            }),
            (c.prototype.hardforkGteHardfork = function (e, t, r) {
              var a, o;
              void 0 === r && (r = {});
              var i,
                s = void 0 !== r.onlyActive && r.onlyActive;
              ((e = this._chooseHardfork(e, r.onlySupported)),
                (i = s ? this.activeHardforks(null, r) : this.hardforks()));
              var c = -1,
                d = -1,
                f = 0;
              try {
                for (var u = n(i), l = u.next(); !l.done; l = u.next()) {
                  var h = l.value;
                  (h["name"] === e && (c = f),
                    h["name"] === t && (d = f),
                    (f += 1));
                }
              } catch (x) {
                a = { error: x };
              } finally {
                try {
                  l && !l.done && (o = u.return) && o.call(u);
                } finally {
                  if (a) throw a.error;
                }
              }
              return c >= d && -1 !== d;
            }),
            (c.prototype.gteHardfork = function (e, t) {
              return this.hardforkGteHardfork(null, e, t);
            }),
            (c.prototype.hardforkIsActiveOnChain = function (e, t) {
              var r, a, o;
              void 0 === t && (t = {});
              var i = null !== (o = t.onlySupported) && void 0 !== o && o;
              e = this._chooseHardfork(e, i);
              try {
                for (
                  var s = n(this.hardforks()), c = s.next();
                  !c.done;
                  c = s.next()
                ) {
                  var d = c.value;
                  if (d["name"] === e && null !== d["block"]) return !0;
                }
              } catch (f) {
                r = { error: f };
              } finally {
                try {
                  c && !c.done && (a = s.return) && a.call(s);
                } finally {
                  if (r) throw r.error;
                }
              }
              return !1;
            }),
            (c.prototype.activeHardforks = function (e, t) {
              var r, a;
              void 0 === t && (t = {});
              var o = [],
                i = this.hardforks();
              try {
                for (var s = n(i), c = s.next(); !c.done; c = s.next()) {
                  var d = c.value;
                  if (null !== d["block"]) {
                    if (void 0 !== e && null !== e && e < d["block"]) break;
                    (t.onlySupported &&
                      !this._isSupportedHardfork(d["name"])) ||
                      o.push(d);
                  }
                }
              } catch (f) {
                r = { error: f };
              } finally {
                try {
                  c && !c.done && (a = s.return) && a.call(s);
                } finally {
                  if (r) throw r.error;
                }
              }
              return o;
            }),
            (c.prototype.activeHardfork = function (e, t) {
              void 0 === t && (t = {});
              var r = this.activeHardforks(e, t);
              if (r.length > 0) return r[r.length - 1]["name"];
              throw new Error("No (supported) active hardfork found");
            }),
            (c.prototype.hardforkBlock = function (e) {
              var t = this.hardforkBlockBN(e);
              return (0, f.toType)(t, f.TypeOutput.Number);
            }),
            (c.prototype.hardforkBlockBN = function (e) {
              e = this._chooseHardfork(e, !1);
              var t = this._getHardfork(e)["block"];
              return void 0 === t || null === t ? null : new f.BN(t);
            }),
            (c.prototype.hardforkTD = function (e) {
              e = this._chooseHardfork(e, !1);
              var t = this._getHardfork(e)["td"];
              return void 0 === t || null === t ? null : new f.BN(t);
            }),
            (c.prototype.isHardforkBlock = function (e, t) {
              ((e = (0, f.toType)(e, f.TypeOutput.BN)),
                (t = this._chooseHardfork(t, !1)));
              var r = this.hardforkBlockBN(t);
              return !!r && r.eq(e);
            }),
            (c.prototype.nextHardforkBlock = function (e) {
              var t = this.nextHardforkBlockBN(e);
              return (0, f.toType)(t, f.TypeOutput.Number);
            }),
            (c.prototype.nextHardforkBlockBN = function (e) {
              e = this._chooseHardfork(e, !1);
              var t = this.hardforkBlockBN(e);
              if (null === t) return null;
              var r = this.hardforks().reduce(function (e, r) {
                var a = new f.BN(r.block);
                return a.gt(t) && null === e ? a : e;
              }, null);
              return r;
            }),
            (c.prototype.isNextHardforkBlock = function (e, t) {
              ((e = (0, f.toType)(e, f.TypeOutput.BN)),
                (t = this._chooseHardfork(t, !1)));
              var r = this.nextHardforkBlockBN(t);
              return null !== r && r.eq(e);
            }),
            (c.prototype._calcForkHash = function (t) {
              var r,
                a,
                o = e.from(this.genesis().hash.substr(2), "hex"),
                i = e.alloc(0),
                s = 0;
              try {
                for (
                  var c = n(this.hardforks()), u = c.next();
                  !u.done;
                  u = c.next()
                ) {
                  var l = u.value,
                    h = l.block;
                  if (0 !== h && null !== h && h !== s) {
                    var x = e.from(h.toString(16).padStart(16, "0"), "hex");
                    i = e.concat([i, x]);
                  }
                  if (l.name === t) break;
                  null !== h && (s = h);
                }
              } catch (b) {
                r = { error: b };
              } finally {
                try {
                  u && !u.done && (a = c.return) && a.call(c);
                } finally {
                  if (r) throw r.error;
                }
              }
              var p = e.concat([o, i]),
                m = (0, f.intToBuffer)((0, d.buf)(p) >>> 0).toString("hex");
              return "0x".concat(m);
            }),
            (c.prototype.forkHash = function (e) {
              e = this._chooseHardfork(e, !1);
              var t = this._getHardfork(e);
              if (null === t["block"] && void 0 === t["td"]) {
                var r = "No fork hash calculation possible for future hardfork";
                throw new Error(r);
              }
              return void 0 !== t["forkHash"]
                ? t["forkHash"]
                : this._calcForkHash(e);
            }),
            (c.prototype.hardforkForForkHash = function (e) {
              var t = this.hardforks().filter(function (t) {
                return t.forkHash === e;
              });
              return t.length >= 1 ? t[t.length - 1] : null;
            }),
            (c.prototype.genesis = function () {
              return this._chainParams["genesis"];
            }),
            (c.prototype.genesisState = function () {
              var e, t;
              switch (this.chainName()) {
                case "mainnet":
                  return r(4229);
                case "ropsten":
                  return r(4230);
                case "rinkeby":
                  return r(4231);
                case "kovan":
                  return r(4232);
                case "goerli":
                  return r(4233);
                case "sepolia":
                  return r(4234);
              }
              if (
                this._customChains &&
                this._customChains.length > 0 &&
                Array.isArray(this._customChains[0])
              )
                try {
                  for (
                    var a = n(this._customChains), o = a.next();
                    !o.done;
                    o = a.next()
                  ) {
                    var i = o.value;
                    if (i[0].name === this.chainName()) return i[1];
                  }
                } catch (s) {
                  e = { error: s };
                } finally {
                  try {
                    o && !o.done && (t = a.return) && t.call(a);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              return {};
            }),
            (c.prototype.hardforks = function () {
              return this._chainParams["hardforks"];
            }),
            (c.prototype.bootstrapNodes = function () {
              return this._chainParams["bootstrapNodes"];
            }),
            (c.prototype.dnsNetworks = function () {
              return this._chainParams["dnsNetworks"];
            }),
            (c.prototype.hardfork = function () {
              return this._hardfork;
            }),
            (c.prototype.chainId = function () {
              return (0, f.toType)(this.chainIdBN(), f.TypeOutput.Number);
            }),
            (c.prototype.chainIdBN = function () {
              return new f.BN(this._chainParams["chainId"]);
            }),
            (c.prototype.chainName = function () {
              return this._chainParams["name"];
            }),
            (c.prototype.networkId = function () {
              return (0, f.toType)(this.networkIdBN(), f.TypeOutput.Number);
            }),
            (c.prototype.networkIdBN = function () {
              return new f.BN(this._chainParams["networkId"]);
            }),
            (c.prototype.eips = function () {
              return this._eips;
            }),
            (c.prototype.consensusType = function () {
              var e,
                t,
                r,
                a = this.hardfork();
              try {
                for (
                  var o = n(l.hardforks), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var s = i.value;
                  if (
                    ("consensus" in s[1] && (r = s[1]["consensus"]["type"]),
                    s[0] === a)
                  )
                    break;
                }
              } catch (c) {
                e = { error: c };
              } finally {
                try {
                  i && !i.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return r || this._chainParams["consensus"]["type"];
            }),
            (c.prototype.consensusAlgorithm = function () {
              var e,
                t,
                r,
                a = this.hardfork();
              try {
                for (
                  var o = n(l.hardforks), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var s = i.value;
                  if (
                    ("consensus" in s[1] &&
                      (r = s[1]["consensus"]["algorithm"]),
                    s[0] === a)
                  )
                    break;
                }
              } catch (c) {
                e = { error: c };
              } finally {
                try {
                  i && !i.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              return r || this._chainParams["consensus"]["algorithm"];
            }),
            (c.prototype.consensusConfig = function () {
              var e,
                t,
                r,
                a = this.hardfork();
              try {
                for (
                  var o = n(l.hardforks), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var s = i.value;
                  if (
                    ("consensus" in s[1] &&
                      (r = s[1]["consensus"][s[1]["consensus"]["algorithm"]]),
                    s[0] === a)
                  )
                    break;
                }
              } catch (d) {
                e = { error: d };
              } finally {
                try {
                  i && !i.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              if (r) return r;
              var c = this.consensusAlgorithm();
              return this._chainParams["consensus"][c];
            }),
            (c.prototype.copy = function () {
              var e = Object.assign(
                Object.create(Object.getPrototypeOf(this)),
                this,
              );
              return (e.removeAllListeners(), e);
            }),
            c
          );
        })(c.EventEmitter);
        t.default = x;
      }).call(this, r(2).Buffer);
    },
    3278: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AccessLists = t.checkMaxInitCodeSize = void 0));
      var a = r(801),
        o = r(2982);
      function n(e, t) {
        if (t > e.param("vm", "maxInitCodeSize"))
          throw new Error(
            "the initcode size of this transaction is too large: it is "
              .concat(t, " while the max is ")
              .concat(e.param("vm", "maxInitCodeSize")),
          );
      }
      t.checkMaxInitCodeSize = n;
      var i = (function () {
        function e() {}
        return (
          (e.getAccessListData = function (e) {
            var t, r;
            if (e && (0, o.isAccessList)(e)) {
              t = e;
              for (var n = [], i = 0; i < e.length; i++) {
                for (
                  var s = e[i], c = (0, a.toBuffer)(s.address), d = [], f = 0;
                  f < s.storageKeys.length;
                  f++
                )
                  d.push((0, a.toBuffer)(s.storageKeys[f]));
                n.push([c, d]);
              }
              r = n;
            } else {
              r = null !== e && void 0 !== e ? e : [];
              var u = [];
              for (i = 0; i < r.length; i++) {
                var l = r[i],
                  h = (0, a.bufferToHex)(l[0]),
                  x = [];
                for (s = 0; s < l[1].length; s++)
                  x.push((0, a.bufferToHex)(l[1][s]));
                var p = { address: h, storageKeys: x };
                u.push(p);
              }
              t = u;
            }
            return { AccessListJSON: t, accessList: r };
          }),
          (e.verifyAccessList = function (e) {
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                a = r[0],
                o = r[1];
              if (void 0 !== r[2])
                throw new Error(
                  "Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.",
                );
              if (20 != a.length)
                throw new Error(
                  "Invalid EIP-2930 transaction: address length should be 20 bytes",
                );
              for (var n = 0; n < o.length; n++)
                if (32 != o[n].length)
                  throw new Error(
                    "Invalid EIP-2930 transaction: storage slot length should be 32 bytes",
                  );
            }
          }),
          (e.getAccessListJSON = function (e) {
            for (var t = [], r = 0; r < e.length; r++) {
              for (
                var o = e[r],
                  n = {
                    address:
                      "0x" + (0, a.setLengthLeft)(o[0], 20).toString("hex"),
                    storageKeys: [],
                  },
                  i = o[1],
                  s = 0;
                s < i.length;
                s++
              ) {
                var c = i[s];
                n.storageKeys.push(
                  "0x" + (0, a.setLengthLeft)(c, 32).toString("hex"),
                );
              }
              t.push(n);
            }
            return t;
          }),
          (e.getDataFeeEIP2930 = function (e, t) {
            for (
              var r = t.param("gasPrices", "accessListStorageKeyCost"),
                a = t.param("gasPrices", "accessListAddressCost"),
                o = 0,
                n = 0;
              n < e.length;
              n++
            ) {
              var i = e[n],
                s = i[1];
              o += s.length;
            }
            var c = e.length;
            return c * a + o * r;
          }),
          e
        );
      })();
      t.AccessLists = i;
    },
    3279: function (e, t, r) {
      "use strict";
      var a = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = a(r(14)),
        n = r(19),
        i = r(27),
        s = a(r(129)),
        c = r(3280),
        d = r(67),
        f = r(160),
        u = r(813),
        l = r(384);
      const h = "https://deep-index.moralis.io/api/v2/",
        x = "sA9pBlEiuyZFgcTuS0HqhMvR7r37Fsvkb7xAgJLXNz6KpDEE5yDCd9vEfZp3VPwb",
        p = [
          [u.erc721StandardTest, u.ERC721_TOKEN_STANDARD],
          [u.erc1155StandardTest, u.ERC1155_TOKEN_STANDARD],
        ],
        m = "get",
        b = 100,
        g = 100,
        v = "NFT";
      class MoralisExplorer extends s.default {
        constructor(e) {
          let { wallet: t, config: r } = e;
          (super({ wallet: t, config: r }), (this.chain = r.chain || "eth"));
        }
        getAllowedTickers() {
          return ["ETH", "BSC", "MATIC", "AVAX", "FTM"];
        }
        async getInfo(e, t) {
          try {
            const r = await this.request(
              this.getInfoUrl(e),
              this.getInfoMethod(),
              this.getInfoParams(e, this.chain, t),
            );
            return this.modifyInfoResponse(r);
          } catch (r) {
            throw new n.ExternalError({
              type: i.EXTERNAL_ERROR,
              error: r,
              instance: this,
            });
          }
        }
        getInfoUrl(e) {
          return `/${e}/nft`;
        }
        getIsApiKeyRequired(e) {
          return (0, d.getStringWithEnsuredEndChar)(e, "/") === h;
        }
        getInitParams() {
          const e = super.getInitParams(),
            t = { accept: "application/json" };
          return (
            this.getIsApiKeyRequired(
              null === e || void 0 === e ? void 0 : e.baseURL,
            ) && (t["X-API-Key"] = x),
            { ...e, headers: t }
          );
        }
        getInfoParams(e, t, r) {
          return { chain: t, format: "decimal", exclude_spam: !r };
        }
        async modifyInfoResponse(e) {
          const { result: t } = e,
            r = [],
            a = t.map((e, t) => {
              const {
                token_address: a,
                token_id: s,
                token_uri: d,
                contract_type: f,
                metadata: u,
              } = e;
              if (!u) {
                const e = (0, c.getTransformedTokenUri)({
                  tokenId: s,
                  tokenUri: d,
                });
                return (
                  r.push(
                    Promise.all([
                      t,
                      o.default.get(e).catch((e) => {
                        throw new Error(JSON.stringify({ index: t, error: e }));
                      }),
                    ]),
                  ),
                  { contractAddress: a, tokenId: s, tokenStandard: f }
                );
              }
              try {
                const { name: e, description: t, image: r } = JSON.parse(u);
                return {
                  contractAddress: a,
                  tokenId: s,
                  tokenStandard: f,
                  name: e,
                  description: t,
                  imageUrl: r,
                };
              } catch (l) {
                throw (
                  console.warn(l),
                  new n.InternalError({
                    type: i.INTERNAL_ERROR,
                    error: l,
                    instance: this,
                  })
                );
              }
            });
          try {
            const e = await Promise.allSettled(r);
            e.forEach((e) => {
              if ("fulfilled" === e.status) {
                const {
                    value: [t, { data: r }],
                  } = e,
                  { name: o, description: n, image: i } = r;
                a[t] = { ...a[t], name: o, description: n, imageUrl: i };
              } else {
                const {
                  reason: { message: r },
                } = e;
                try {
                  const { index: e, message: t } = JSON.parse(r);
                  console.warn(
                    "Failed to get NFT metadata for tokenUri=" + a[e],
                    t,
                  );
                } catch (t) {
                  console.warn(t);
                }
              }
            });
          } catch (s) {
            throw (
              console.warn(s),
              new n.ExternalError({
                type: i.EXTERNAL_ERROR,
                error: s,
                instance: this,
              })
            );
          }
          return a;
        }
        fixTokenStandard(e) {
          for (const [t, r] of p) if (t.test(e)) return r;
          return u.UNRECOGNIZED_TOKEN_STANDARD;
        }
        async fetchNftList(e, t) {
          const { address: r } = e,
            a = await this.getInfo(r, t);
          return a.map((t) => {
            let {
              contractAddress: r,
              tokenId: a,
              tokenStandard: o,
              name: n,
              description: i,
              imageUrl: s,
            } = t;
            return new f.ETHNftToken(
              r,
              a,
              e.id,
              this.fixTokenStandard(o),
              n,
              i,
              s,
            );
          });
        }
        async getRawTokenTransactions(e) {
          let {
            address: t,
            limit: r = this.defaultTxLimit,
            cursor: a = null,
          } = e;
          try {
            const e = await this.request(
              this.getTokenTransactionsUrl(t),
              m,
              this.getTokenTransactionsParams(r, a),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyRawTokenTransactionsResponse(e, t);
          } catch (o) {
            return (console.warn(o), []);
          }
        }
        getTokenTransactionsUrl(e) {
          return `/${e}/erc20/transfers`;
        }
        getTokenTransactionsParams(e, t) {
          const r = e > b ? b : e;
          return { chain: this.chain, limit: r, cursor: t };
        }
        modifyRawTokenTransactionsResponse(e, t) {
          const {
              total: r,
              page: a,
              page_size: o,
              cursor: n,
              result: i,
            } = null !== e && void 0 !== e ? e : { result: [] },
            s = i.reduce((e, r, a) => {
              try {
                const a = this.getTokenTxDirection(t, r);
                return (
                  e.push({
                    contract: r.address,
                    alias: this.wallet.alias,
                    explorer: this.constructor.name,
                    txid: r.transaction_hash,
                    direction: a,
                    otherSideAddress: a ? r.from_address : r.to_address,
                    value: r.value,
                    datetime: new Date(r.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    ticker: r.token_symbol,
                    name: r.token_name,
                  }),
                  e
                );
              } catch (o) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(o),
                  e
                );
              }
            }, []);
          return {
            total: r,
            page: a,
            pageSize: o,
            cursor: n,
            rawTokenTransactions: s,
          };
        }
        getTokenTxDirection(e, t) {
          return t.to_address.toLowerCase() === e.toLowerCase();
        }
        async getUserTokenList(e) {
          const t = await this.request(
            this.getUserTokenListUrl(e),
            m,
            this.getInfoParams(e, this.chain),
            "",
            this.getTransactionsOptions(),
          );
          return this.modifyUserTokenList(t);
        }
        modifyUserTokenList(e) {
          return (
            void 0 === e && (e = []),
            e.map((e) => ({
              contract: e.token_address,
              contractAddress: e.token_address,
              decimals: 0,
              ...e,
            }))
          );
        }
        getUserTokenListUrl(e) {
          return `/${e}/erc20`;
        }
        async getNftTransactions(e) {
          let {
            address: t,
            limit: r = this.defaultTxLimit,
            cursor: a = null,
          } = e;
          try {
            const e = await this.request(
              this.getNftTransactionsUrl(t),
              m,
              this.getNftTransactionsParams(r, a),
              i.GET_TRANSACTIONS_TYPE,
              this.getTransactionsOptions(),
            );
            return this.modifyNftTransactionsResponse(e, t);
          } catch (o) {
            return (console.warn(o), []);
          }
        }
        getNftTransactionsUrl(e) {
          return `/${e}/nft/transfers`;
        }
        getNftTransactionsParams(e, t) {
          const r = e > g ? g : e;
          return {
            chain: this.chain,
            limit: r,
            format: "decimal",
            direction: "both",
            cursor: t,
          };
        }
        modifyNftTransactionsResponse(e, t) {
          const {
              total: r,
              page: a,
              page_size: o,
              cursor: n,
              result: i,
            } = null !== e && void 0 !== e ? e : { result: [] },
            s = i.reduce((e, r, a) => {
              try {
                const a = this.getTokenTxDirection(t, r);
                return (
                  e.push({
                    ticker: this.wallet.ticker,
                    name: this.wallet.name,
                    alias: this.wallet.alias,
                    walletid: this.wallet.id,
                    explorer: this.constructor.name,
                    contract: r.token_address,
                    contractType: r.contract_type,
                    tokenId: r.token_id,
                    txid: r.transaction_hash,
                    direction: a,
                    otherSideAddress: a ? r.from_address : r.to_address,
                    datetime: new Date(r.block_timestamp),
                    memo: "",
                    confirmations: 1,
                    txType: l.TxTypes.TRANSFERNFT,
                    isNft: !0,
                    amount: v,
                  }),
                  e
                );
              } catch (o) {
                return (
                  console.warn("[FTM] tx parse failed"),
                  console.error(o),
                  e
                );
              }
            }, []);
          return {
            total: r,
            page: a,
            pageSize: o,
            cursor: n,
            nftTransactions: s,
          };
        }
      }
      t.default = MoralisExplorer;
    },
    3280: function (e, t, r) {
      "use strict";
      var a = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getTransformedTokenUri", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }));
      var o = a(r(3281));
    },
    3281: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const a = new Map([
          [
            /https:\/\/api\.opensea\.io\/api\/v1\/metadata\/.*\/0x{id}\/?$/,
            [
              "0x{id}",
              (e) => {
                let { tokenId: t } = e;
                return t;
              },
            ],
          ],
        ]),
        o = (e) => {
          const { tokenUri: t } = e;
          let r = t;
          return (
            a.forEach((t, a) => {
              let [o, n] = t;
              const i = n(e);
              r = a.test(r) ? r.replace(o, i) : r;
            }),
            r
          );
        };
      t.default = o;
    },
    3537: function (e, t, r) {
      "use strict";
      const { Buffer: a } = r(2),
        o = r(3275),
        n = r(4156),
        i = r(4162),
        s = r(3051),
        c = r(4167),
        d = r(4168);
      class CID {
        constructor(e, t, r, s) {
          if (f.isCID(e)) {
            const t = e;
            return (
              (this.version = t.version),
              (this.codec = t.codec),
              (this.multihash = a.from(t.multihash)),
              void (this.multibaseName =
                t.multibaseName || (0 === t.version ? "base58btc" : "base32"))
            );
          }
          if ("string" === typeof e) {
            const t = n.isEncoded(e);
            if (t) {
              const r = n.decode(e);
              ((this.version = parseInt(r.slice(0, 1).toString("hex"), 16)),
                (this.codec = i.getCodec(r.slice(1))),
                (this.multihash = i.rmPrefix(r.slice(1))),
                (this.multibaseName = t));
            } else
              ((this.version = 0),
                (this.codec = "dag-pb"),
                (this.multihash = o.fromB58String(e)),
                (this.multibaseName = "base58btc"));
            return (
              CID.validateCID(this),
              void Object.defineProperty(this, "string", { value: e })
            );
          }
          if (a.isBuffer(e)) {
            const t = e.slice(0, 1),
              r = parseInt(t.toString("hex"), 16);
            if (1 === r) {
              const t = e;
              ((this.version = r),
                (this.codec = i.getCodec(t.slice(1))),
                (this.multihash = i.rmPrefix(t.slice(1))),
                (this.multibaseName = "base32"));
            } else
              ((this.version = 0),
                (this.codec = "dag-pb"),
                (this.multihash = e),
                (this.multibaseName = "base58btc"));
            CID.validateCID(this);
          } else
            ((this.version = e),
              (this.codec = t),
              (this.multihash = r),
              (this.multibaseName = s || (0 === e ? "base58btc" : "base32")),
              CID.validateCID(this));
        }
        get buffer() {
          let e = this._buffer;
          if (!e) {
            if (0 === this.version) e = this.multihash;
            else {
              if (1 !== this.version) throw new Error("unsupported version");
              e = a.concat([
                a.from("01", "hex"),
                i.getCodeVarint(this.codec),
                this.multihash,
              ]);
            }
            Object.defineProperty(this, "_buffer", { value: e });
          }
          return e;
        }
        get prefix() {
          return a.concat([
            a.from("0" + this.version, "hex"),
            i.getCodeVarint(this.codec),
            o.prefix(this.multihash),
          ]);
        }
        toV0() {
          if ("dag-pb" !== this.codec)
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          const { name: e, length: t } = o.decode(this.multihash);
          if ("sha2-256" !== e)
            throw new Error(
              "Cannot convert non sha2-256 multihash CID to CIDv0",
            );
          if (32 !== t)
            throw new Error(
              "Cannot convert non 32 byte multihash CID to CIDv0",
            );
          return new f(0, this.codec, this.multihash);
        }
        toV1() {
          return new f(1, this.codec, this.multihash);
        }
        toBaseEncodedString(e) {
          if (
            (void 0 === e && (e = this.multibaseName),
            this.string && e === this.multibaseName)
          )
            return this.string;
          let t = null;
          if (0 === this.version) {
            if ("base58btc" !== e)
              throw new Error(
                "not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()",
              );
            t = o.toB58String(this.multihash);
          } else {
            if (1 !== this.version) throw new Error("unsupported version");
            t = n.encode(e, this.buffer).toString();
          }
          return (
            e === this.multibaseName &&
              Object.defineProperty(this, "string", { value: t }),
            t
          );
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        toString(e) {
          return this.toBaseEncodedString(e);
        }
        toJSON() {
          return {
            codec: this.codec,
            version: this.version,
            hash: this.multihash,
          };
        }
        equals(e) {
          return (
            this.codec === e.codec &&
            this.version === e.version &&
            this.multihash.equals(e.multihash)
          );
        }
        static validateCID(e) {
          const t = c.checkCIDComponents(e);
          if (t) throw new Error(t);
        }
      }
      const f = d(CID, { className: "CID", symbolName: "@ipld/js-cid/CID" });
      ((f.codecs = s), (e.exports = f));
    },
    3538: function (e, t, r) {
      "use strict";
      const a = r(2991),
        { Buffer: o } = r(2);
      function n(e) {
        return parseInt(e.toString("hex"), 16);
      }
      function i(e) {
        let t = e.toString(16);
        return (t.length % 2 === 1 && (t = "0" + t), o.from(t, "hex"));
      }
      function s(e) {
        return o.from(a.encode(n(e)));
      }
      function c(e) {
        return i(a.decode(e));
      }
      function d(e) {
        return o.from(a.encode(e));
      }
      e.exports = {
        numberToBuffer: i,
        bufferToNumber: n,
        varintBufferEncode: s,
        varintBufferDecode: c,
        varintEncode: d,
      };
    },
    3543: function (e, t, r) {
      "use strict";
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, a) {
                void 0 === a && (a = r);
                var o = Object.getOwnPropertyDescriptor(t, r);
                ((o &&
                  !("get" in o
                    ? !t.__esModule
                    : o.writable || o.configurable)) ||
                  (o = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, a, o));
              }
            : function (e, t, r, a) {
                (void 0 === a && (a = r), (e[a] = t[r]));
              }),
        o =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                a(t, e, r);
          },
        n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FeeMarketEIP1559Transaction =
          t.TransactionFactory =
          t.AccessListEIP2930Transaction =
          t.Transaction =
            void 0));
      var i = r(4179);
      Object.defineProperty(t, "Transaction", {
        enumerable: !0,
        get: function () {
          return n(i).default;
        },
      });
      var s = r(4235);
      Object.defineProperty(t, "AccessListEIP2930Transaction", {
        enumerable: !0,
        get: function () {
          return n(s).default;
        },
      });
      var c = r(4236);
      Object.defineProperty(t, "TransactionFactory", {
        enumerable: !0,
        get: function () {
          return n(c).default;
        },
      });
      var d = r(4237);
      (Object.defineProperty(t, "FeeMarketEIP1559Transaction", {
        enumerable: !0,
        get: function () {
          return n(d).default;
        },
      }),
        o(r(2982), t));
    },
    4105: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const a = (e) =>
        class extends e {
          onConfirmSocketTx(e) {
            (this.getInfo(),
              null !== e && void 0 !== e && e.direction
                ? this.eventEmitter.emit("socket::newtx", {
                    id: this.id,
                    ticker: this.ticker,
                    amount: e.amount,
                    txid: e.txid,
                  })
                : this.eventEmitter.emit("socket::newtx::outgoing", {
                    id: this.id,
                    ticker: this.ticker,
                  }));
          }
        };
      t.default = a;
    },
    4142: function (e, t, r) {
      const a = r(4143),
        { hexStringToBuffer: o, profiles: n } = r(4148),
        { cidV0ToV1Base32: i } = r(4169);
      e.exports = {
        helpers: { cidV0ToV1Base32: i },
        decode: function (e) {
          const t = o(e),
            r = a.getCodec(t),
            i = a.rmPrefix(t);
          let s = n[r];
          return (s || (s = n["default"]), s.decode(i));
        },
        fromIpfs: function (e) {
          return this.encode("ipfs-ns", e);
        },
        fromSwarm: function (e) {
          return this.encode("swarm-ns", e);
        },
        encode: function (e, t) {
          let r = n[e];
          r || (r = n["default"]);
          const o = r.encode(t);
          return a.addPrefix(e, o).toString("hex");
        },
        getCodec: function (e) {
          let t = o(e);
          return a.getCodec(t);
        },
      };
    },
    4148: function (e, t, r) {
      (function (e) {
        const a = r(3537),
          o = r(3275),
          n = (e) => {
            let t = e.slice(0, 2),
              r = e.slice(2),
              a = "";
            return ((a = "0x" === t ? r : e), o.fromHexString(a));
          },
          i = {
            swarm: (e) => {
              const t = o.encode(n(e), "keccak-256");
              return new a(1, "swarm-manifest", t).buffer;
            },
            ipfs: (e) => {
              const t = o.fromB58String(e);
              return new a(1, "dag-pb", t).buffer;
            },
            utf8: (t) => e.from(t, "utf8"),
          },
          s = {
            hexMultiHash: (e) => {
              const t = new a(e);
              return o.decode(t.multihash).digest.toString("hex");
            },
            b58MultiHash: (e) => {
              const t = new a(e);
              return o.toB58String(t.multihash);
            },
            utf8: (e) => e.toString("utf8"),
          },
          c = {
            "swarm-ns": { encode: i.swarm, decode: s.hexMultiHash },
            "ipfs-ns": { encode: i.ipfs, decode: s.b58MultiHash },
            "ipns-ns": { encode: i.ipfs, decode: s.b58MultiHash },
            default: { encode: i.utf8, decode: s.utf8 },
          };
        ((t.hexStringToBuffer = n), (t.profiles = c));
      }).call(this, r(2).Buffer);
    },
    4156: function (e, t, r) {
      "use strict";
      const { Buffer: a } = r(2),
        o = r(4157);
      ((t = e.exports = i),
        (t.encode = s),
        (t.decode = c),
        (t.isEncoded = d),
        (t.names = Object.freeze(Object.keys(o.names))),
        (t.codes = Object.freeze(Object.keys(o.codes))));
      const n = new Error("Unsupported encoding");
      function i(e, t) {
        if (!t) throw new Error("requires an encoded buffer");
        const r = u(e),
          o = a.from(r.code),
          n = r.name;
        return (f(n, t), a.concat([o, t]));
      }
      function s(e, t) {
        const r = u(e),
          o = r.name;
        return i(o, a.from(r.encode(t)));
      }
      function c(e) {
        a.isBuffer(e) && (e = e.toString());
        const t = e.substring(0, 1);
        ((e = e.substring(1, e.length)),
          "string" === typeof e && (e = a.from(e)));
        const r = u(t);
        return a.from(r.decode(e.toString()));
      }
      function d(e) {
        if (
          (a.isBuffer(e) && (e = e.toString()),
          "[object String]" !== Object.prototype.toString.call(e))
        )
          return !1;
        const t = e.substring(0, 1);
        try {
          const e = u(t);
          return e.name;
        } catch (r) {
          return !1;
        }
      }
      function f(e, t) {
        const r = u(e);
        r.decode(t.toString());
      }
      function u(e) {
        let t;
        if (o.names[e]) t = o.names[e];
        else {
          if (!o.codes[e]) throw n;
          t = o.codes[e];
        }
        if (!t.isImplemented())
          throw new Error("Base " + e + " is not implemented yet");
        return t;
      }
    },
    4157: function (e, t, r) {
      "use strict";
      const a = r(4158),
        o = r(822),
        n = r(4159),
        i = r(4160),
        s = r(4161),
        c = [
          ["base1", "1", "", "1"],
          ["base2", "0", o, "01"],
          ["base8", "7", o, "01234567"],
          ["base10", "9", o, "0123456789"],
          ["base16", "f", n, "0123456789abcdef"],
          ["base32", "b", i, "abcdefghijklmnopqrstuvwxyz234567"],
          ["base32pad", "c", i, "abcdefghijklmnopqrstuvwxyz234567="],
          ["base32hex", "v", i, "0123456789abcdefghijklmnopqrstuv"],
          ["base32hexpad", "t", i, "0123456789abcdefghijklmnopqrstuv="],
          ["base32z", "h", i, "ybndrfg8ejkmcpqxot1uwisza345h769"],
          [
            "base58flickr",
            "Z",
            o,
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          ],
          [
            "base58btc",
            "z",
            o,
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          ],
          [
            "base64",
            "m",
            s,
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          ],
          [
            "base64pad",
            "M",
            s,
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          ],
          [
            "base64url",
            "u",
            s,
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          ],
          [
            "base64urlpad",
            "U",
            s,
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          ],
        ],
        d = c.reduce(
          (e, t) => ((e[t[0]] = new a(t[0], t[1], t[2], t[3])), e),
          {},
        ),
        f = c.reduce((e, t) => ((e[t[1]] = d[t[0]]), e), {});
      e.exports = { names: d, codes: f };
    },
    4158: function (e, t, r) {
      "use strict";
      class Base {
        constructor(e, t, r, a) {
          ((this.name = e),
            (this.code = t),
            (this.alphabet = a),
            r && a && (this.engine = r(a)));
        }
        encode(e) {
          return this.engine.encode(e);
        }
        decode(e) {
          return this.engine.decode(e);
        }
        isImplemented() {
          return this.engine;
        }
      }
      e.exports = Base;
    },
    4159: function (e, t, r) {
      "use strict";
      const { Buffer: a } = r(2);
      e.exports = function (e) {
        return {
          encode(e) {
            return "string" === typeof e
              ? a.from(e).toString("hex")
              : e.toString("hex");
          },
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error("invalid base16 character");
            return a.from(t, "hex");
          },
        };
      };
    },
    4160: function (e, t, r) {
      "use strict";
      function a(e, t) {
        e = e.replace(new RegExp("=", "g"), "");
        const r = e.length;
        let a = 0,
          o = 0,
          n = 0;
        const i = new Uint8Array(((5 * r) / 8) | 0);
        for (let s = 0; s < r; s++)
          ((o = (o << 5) | t.indexOf(e[s])),
            (a += 5),
            a >= 8 && ((i[n++] = (o >>> (a - 8)) & 255), (a -= 8)));
        return i.buffer;
      }
      function o(e, t) {
        const r = e.byteLength,
          a = new Uint8Array(e),
          o = t.indexOf("=") === t.length - 1;
        o && (t = t.substring(0, t.length - 1));
        let n = 0,
          i = 0,
          s = "";
        for (let c = 0; c < r; c++) {
          ((i = (i << 8) | a[c]), (n += 8));
          while (n >= 5) ((s += t[(i >>> (n - 5)) & 31]), (n -= 5));
        }
        if ((n > 0 && (s += t[(i << (5 - n)) & 31]), o))
          while (s.length % 8 !== 0) s += "=";
        return s;
      }
      e.exports = function (e) {
        return {
          encode(t) {
            return o("string" === typeof t ? Uint8Array.from(t) : t, e);
          },
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error("invalid base32 character");
            return a(t, e);
          },
        };
      };
    },
    4161: function (e, t, r) {
      "use strict";
      const { Buffer: a } = r(2);
      e.exports = function (e) {
        const t = e.indexOf("=") > -1,
          r = e.indexOf("-") > -1 && e.indexOf("_") > -1;
        return {
          encode(e) {
            let o = "";
            ((o =
              "string" === typeof e
                ? a.from(e).toString("base64")
                : e.toString("base64")),
              r && (o = o.replace(/\+/g, "-").replace(/\//g, "_")));
            const n = o.indexOf("=");
            return (n > 0 && !t && (o = o.substring(0, n)), o);
          },
          decode(t) {
            for (const r of t)
              if (e.indexOf(r) < 0) throw new Error("invalid base64 character");
            return a.from(t, "base64");
          },
        };
      };
    },
    4162: function (e, t, r) {
      "use strict";
      const { Buffer: a } = r(2),
        o = r(2991),
        n = r(4163),
        i = r(4164),
        s = r(3538);
      ((t = e.exports),
        (t.addPrefix = (e, t) => {
          let r;
          if (a.isBuffer(e)) r = s.varintBufferEncode(e);
          else {
            if (!i[e]) throw new Error("multicodec not recognized");
            r = i[e];
          }
          return a.concat([r, t]);
        }),
        (t.rmPrefix = (e) => (o.decode(e), e.slice(o.decode.bytes))),
        (t.getCodec = (e) => {
          const t = o.decode(e),
            r = n.get(t);
          if (void 0 === r) throw new Error(`Code ${t} not found`);
          return r;
        }),
        (t.getName = (e) => n.get(e)),
        (t.getNumber = (e) => {
          const t = i[e];
          if (void 0 === t) throw new Error("Codec `" + e + "` not found");
          return s.varintBufferDecode(t)[0];
        }),
        (t.getCode = (e) => o.decode(e)),
        (t.getCodeVarint = (e) => {
          const t = i[e];
          if (void 0 === t) throw new Error("Codec `" + e + "` not found");
          return t;
        }),
        (t.getVarint = (e) => o.encode(e)));
      const c = r(4165);
      (Object.assign(t, c), (t.print = r(4166)));
    },
    4163: function (e, t, r) {
      "use strict";
      const a = r(3051),
        o = new Map();
      for (const n in a) {
        const e = a[n];
        o.set(e, n);
      }
      e.exports = Object.freeze(o);
    },
    4164: function (e, t, r) {
      "use strict";
      const a = r(3051),
        o = r(3538).varintEncode,
        n = {};
      for (const i in a) {
        const e = a[i];
        n[i] = o(e);
      }
      e.exports = Object.freeze(n);
    },
    4165: function (e, t, r) {
      "use strict";
      const a = r(3051),
        o = {};
      for (const [n, i] of Object.entries(a))
        o[n.toUpperCase().replace(/-/g, "_")] = i;
      e.exports = Object.freeze(o);
    },
    4166: function (e, t, r) {
      "use strict";
      const a = r(3051),
        o = {};
      for (const [n, i] of Object.entries(a)) void 0 === o[i] && (o[i] = n);
      e.exports = Object.freeze(o);
    },
    4167: function (e, t, r) {
      "use strict";
      const a = r(3275),
        { Buffer: o } = r(2);
      var n = {
        checkCIDComponents: function (e) {
          if (null == e) return "null values are not valid CIDs";
          if (0 !== e.version && 1 !== e.version)
            return "Invalid version, must be a number equal to 1 or 0";
          if ("string" !== typeof e.codec) return "codec must be string";
          if (0 === e.version) {
            if ("dag-pb" !== e.codec) return "codec must be 'dag-pb' for CIDv0";
            if ("base58btc" !== e.multibaseName)
              return "multibaseName must be 'base58btc' for CIDv0";
          }
          if (!o.isBuffer(e.multihash)) return "multihash must be a Buffer";
          try {
            a.validate(e.multihash);
          } catch (t) {
            let e = t.message;
            return (e || (e = "Multihash validation failed"), e);
          }
        },
      };
      e.exports = n;
    },
    4168: function (e, t, r) {
      "use strict";
      function a(e, t) {
        let { className: r, symbolName: a } = t;
        const o = Symbol.for(a),
          n = {
            [r]: class extends e {
              constructor() {
                (super(...arguments),
                  Object.defineProperty(this, o, { value: !0 }));
              }
              get [Symbol.toStringTag]() {
                return r;
              }
            },
          }[r];
        return ((n["is" + r] = (e) => !(!e || !e[o])), n);
      }
      function o(e, t) {
        let { className: r, symbolName: a, withoutNew: o } = t;
        const n = Symbol.for(a),
          i = {
            [r]: function () {
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              if (o && !(this instanceof i)) return new i(...r);
              const s = e.call(this, ...r) || this;
              return (
                s && !s[n] && Object.defineProperty(s, n, { value: !0 }),
                s
              );
            },
          }[r];
        return (
          (i.prototype = Object.create(e.prototype)),
          (i.prototype.constructor = i),
          Object.defineProperty(i.prototype, Symbol.toStringTag, {
            get() {
              return r;
            },
          }),
          (i["is" + r] = (e) => !(!e || !e[n])),
          i
        );
      }
      ((e.exports = a), (e.exports.proto = o));
    },
    4169: function (e, t, r) {
      const a = r(3537),
        o = (e) => {
          let t = new a(e);
          return (0 === t.version && (t = t.toV1()), t.toString("base32"));
        };
      t.cidV0ToV1Base32 = o;
    },
    4179: function (e, t, r) {
      "use strict";
      (function (e) {
        var a =
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
                      for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    }),
                  e(t, r)
                );
              };
              return function (t, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null",
                  );
                function a() {
                  this.constructor = t;
                }
                (e(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((a.prototype = r.prototype), new a())));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (
                (o =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, a = arguments.length; r < a; r++)
                      for (var o in ((t = arguments[r]), t))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                o.apply(this, arguments)
              );
            },
          n =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" === typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var a,
                o,
                n = r.call(e),
                i = [];
              try {
                while ((void 0 === t || t-- > 0) && !(a = n.next()).done)
                  i.push(a.value);
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  a && !a.done && (r = n["return"]) && r.call(n);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(801),
          s = r(2982),
          c = r(3276),
          d = r(3278),
          f = 0,
          u = (function (t) {
            function r(e, r) {
              void 0 === r && (r = {});
              var a,
                n = this;
              if (
                ((n = t.call(this, o(o({}, e), { type: f }), r) || this),
                (n.common = n._validateTxV(n.v, r.common)),
                (n.gasPrice = new i.BN(
                  (0, i.toBuffer)("" === e.gasPrice ? "0x" : e.gasPrice),
                )),
                n.gasPrice.mul(n.gasLimit).gt(i.MAX_INTEGER))
              ) {
                var c = n._errorMsg(
                  "gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)",
                );
                throw new Error(c);
              }
              if (
                (n._validateCannotExceedMaxInteger({ gasPrice: n.gasPrice }),
                n.common.gteHardfork("spuriousDragon"))
              )
                if (n.isSigned()) {
                  var u = n.v,
                    l = n.common.chainIdBN().muln(2);
                  (u.eq(l.addn(35)) || u.eq(l.addn(36))) &&
                    n.activeCapabilities.push(
                      s.Capability.EIP155ReplayProtection,
                    );
                } else
                  n.activeCapabilities.push(
                    s.Capability.EIP155ReplayProtection,
                  );
              n.common.isActivatedEIP(3860) &&
                (0, d.checkMaxInitCodeSize)(n.common, n.data.length);
              var h =
                null === (a = null === r || void 0 === r ? void 0 : r.freeze) ||
                void 0 === a ||
                a;
              return (h && Object.freeze(n), n);
            }
            return (
              a(r, t),
              (r.fromTxData = function (e, t) {
                return (void 0 === t && (t = {}), new r(e, t));
              }),
              (r.fromSerializedTx = function (e, t) {
                void 0 === t && (t = {});
                var r = i.rlp.decode(e);
                if (!Array.isArray(r))
                  throw new Error("Invalid serialized tx input. Must be array");
                return this.fromValuesArray(r, t);
              }),
              (r.fromRlpSerializedTx = function (e, t) {
                return (void 0 === t && (t = {}), r.fromSerializedTx(e, t));
              }),
              (r.fromValuesArray = function (e, t) {
                if (
                  (void 0 === t && (t = {}), 6 !== e.length && 9 !== e.length)
                )
                  throw new Error(
                    "Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).",
                  );
                var a = n(e, 9),
                  o = a[0],
                  s = a[1],
                  c = a[2],
                  d = a[3],
                  f = a[4],
                  u = a[5],
                  l = a[6],
                  h = a[7],
                  x = a[8];
                return (
                  (0, i.validateNoLeadingZeroes)({
                    nonce: o,
                    gasPrice: s,
                    gasLimit: c,
                    value: f,
                    v: l,
                    r: h,
                    s: x,
                  }),
                  new r(
                    {
                      nonce: o,
                      gasPrice: s,
                      gasLimit: c,
                      to: d,
                      value: f,
                      data: u,
                      v: l,
                      r: h,
                      s: x,
                    },
                    t,
                  )
                );
              }),
              (r.prototype.raw = function () {
                return [
                  (0, i.bnToUnpaddedBuffer)(this.nonce),
                  (0, i.bnToUnpaddedBuffer)(this.gasPrice),
                  (0, i.bnToUnpaddedBuffer)(this.gasLimit),
                  void 0 !== this.to ? this.to.buf : e.from([]),
                  (0, i.bnToUnpaddedBuffer)(this.value),
                  this.data,
                  void 0 !== this.v
                    ? (0, i.bnToUnpaddedBuffer)(this.v)
                    : e.from([]),
                  void 0 !== this.r
                    ? (0, i.bnToUnpaddedBuffer)(this.r)
                    : e.from([]),
                  void 0 !== this.s
                    ? (0, i.bnToUnpaddedBuffer)(this.s)
                    : e.from([]),
                ];
              }),
              (r.prototype.serialize = function () {
                return i.rlp.encode(this.raw());
              }),
              (r.prototype._getMessageToSign = function () {
                var t = [
                  (0, i.bnToUnpaddedBuffer)(this.nonce),
                  (0, i.bnToUnpaddedBuffer)(this.gasPrice),
                  (0, i.bnToUnpaddedBuffer)(this.gasLimit),
                  void 0 !== this.to ? this.to.buf : e.from([]),
                  (0, i.bnToUnpaddedBuffer)(this.value),
                  this.data,
                ];
                return (
                  this.supports(s.Capability.EIP155ReplayProtection) &&
                    (t.push((0, i.toBuffer)(this.common.chainIdBN())),
                    t.push((0, i.unpadBuffer)((0, i.toBuffer)(0))),
                    t.push((0, i.unpadBuffer)((0, i.toBuffer)(0)))),
                  t
                );
              }),
              (r.prototype.getMessageToSign = function (e) {
                void 0 === e && (e = !0);
                var t = this._getMessageToSign();
                return e ? (0, i.rlphash)(t) : t;
              }),
              (r.prototype.getDataFee = function () {
                return this.cache.dataFee &&
                  this.cache.dataFee.hardfork === this.common.hardfork()
                  ? this.cache.dataFee.value
                  : (Object.isFrozen(this) &&
                      (this.cache.dataFee = {
                        value: t.prototype.getDataFee.call(this),
                        hardfork: this.common.hardfork(),
                      }),
                    t.prototype.getDataFee.call(this));
              }),
              (r.prototype.getUpfrontCost = function () {
                return this.gasLimit.mul(this.gasPrice).add(this.value);
              }),
              (r.prototype.hash = function () {
                return Object.isFrozen(this)
                  ? (this.cache.hash ||
                      (this.cache.hash = (0, i.rlphash)(this.raw())),
                    this.cache.hash)
                  : (0, i.rlphash)(this.raw());
              }),
              (r.prototype.getMessageToVerifySignature = function () {
                if (!this.isSigned()) {
                  var e = this._errorMsg("This transaction is not signed");
                  throw new Error(e);
                }
                var t = this._getMessageToSign();
                return (0, i.rlphash)(t);
              }),
              (r.prototype.getSenderPublicKey = function () {
                var e,
                  t = this.getMessageToVerifySignature();
                if (
                  this.common.gteHardfork("homestead") &&
                  (null === (e = this.s) || void 0 === e
                    ? void 0
                    : e.gt(s.N_DIV_2))
                ) {
                  var r = this._errorMsg(
                    "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid",
                  );
                  throw new Error(r);
                }
                var a = this,
                  o = a.v,
                  n = a.r,
                  c = a.s;
                try {
                  return (0, i.ecrecover)(
                    t,
                    o,
                    (0, i.bnToUnpaddedBuffer)(n),
                    (0, i.bnToUnpaddedBuffer)(c),
                    this.supports(s.Capability.EIP155ReplayProtection)
                      ? this.common.chainIdBN()
                      : void 0,
                  );
                } catch (d) {
                  r = this._errorMsg("Invalid Signature");
                  throw new Error(r);
                }
              }),
              (r.prototype._processSignature = function (e, t, a) {
                var n = new i.BN(e);
                this.supports(s.Capability.EIP155ReplayProtection) &&
                  n.iadd(this.common.chainIdBN().muln(2).addn(8));
                var c = o(o({}, this.txOptions), { common: this.common });
                return r.fromTxData(
                  {
                    nonce: this.nonce,
                    gasPrice: this.gasPrice,
                    gasLimit: this.gasLimit,
                    to: this.to,
                    value: this.value,
                    data: this.data,
                    v: n,
                    r: new i.BN(t),
                    s: new i.BN(a),
                  },
                  c,
                );
              }),
              (r.prototype.toJSON = function () {
                return {
                  nonce: (0, i.bnToHex)(this.nonce),
                  gasPrice: (0, i.bnToHex)(this.gasPrice),
                  gasLimit: (0, i.bnToHex)(this.gasLimit),
                  to: void 0 !== this.to ? this.to.toString() : void 0,
                  value: (0, i.bnToHex)(this.value),
                  data: "0x" + this.data.toString("hex"),
                  v: void 0 !== this.v ? (0, i.bnToHex)(this.v) : void 0,
                  r: void 0 !== this.r ? (0, i.bnToHex)(this.r) : void 0,
                  s: void 0 !== this.s ? (0, i.bnToHex)(this.s) : void 0,
                };
              }),
              (r.prototype._validateTxV = function (e, t) {
                if (void 0 !== e && e.ltn(37) && !e.eqn(27) && !e.eqn(28))
                  throw new Error(
                    "Legacy txs need either v = 27/28 or v >= 37 (EIP-155 replay protection), got v = ".concat(
                      e,
                    ),
                  );
                var r;
                if (
                  void 0 !== e &&
                  (!t || t.gteHardfork("spuriousDragon")) &&
                  !e.eqn(27) &&
                  !e.eqn(28)
                )
                  if (t) {
                    var a = t.chainIdBN().muln(2),
                      o = e.eq(a.addn(35)) || e.eq(a.addn(36));
                    if (!o)
                      throw new Error(
                        "Incompatible EIP155-based V "
                          .concat(e, " and chain id ")
                          .concat(
                            t.chainIdBN(),
                            ". See the Common parameter of the Transaction constructor to set the chain id.",
                          ),
                      );
                  } else {
                    var n = void 0;
                    ((n = e.subn(35).isEven() ? 35 : 36),
                      (r = e.subn(n).divn(2)));
                  }
                return this._getCommon(t, r);
              }),
              (r.prototype._unsignedTxImplementsEIP155 = function () {
                return this.common.gteHardfork("spuriousDragon");
              }),
              (r.prototype._signedTxImplementsEIP155 = function () {
                if (!this.isSigned()) {
                  var e = this._errorMsg("This transaction is not signed");
                  throw new Error(e);
                }
                var t = this.common.gteHardfork("spuriousDragon"),
                  r = this.v,
                  a = this.common.chainIdBN().muln(2),
                  o = r.eq(a.addn(35)) || r.eq(a.addn(36));
                return o && t;
              }),
              (r.prototype.errorStr = function () {
                var e = this._getSharedErrorPostfix();
                return ((e += " gasPrice=".concat(this.gasPrice)), e);
              }),
              (r.prototype._errorMsg = function (e) {
                return "".concat(e, " (").concat(this.errorStr(), ")");
              }),
              r
            );
          })(c.BaseTransaction);
        t.default = u;
      }).call(this, r(2).Buffer);
    },
    4181: function (e, t, r) {
      "use strict";
      var a =
          (this && this.__values) ||
          function (e) {
            var t = "function" === typeof Symbol && Symbol.iterator,
              r = t && e[t],
              a = 0;
            if (r) return r.call(e);
            if (e && "number" === typeof e.length)
              return {
                next: function () {
                  return (
                    e && a >= e.length && (e = void 0),
                    { value: e && e[a++], done: !e }
                  );
                },
              };
            throw new TypeError(
              t ? "Object is not iterable." : "Symbol.iterator is not defined.",
            );
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.chains = t._getInitializedChains = void 0));
      var n = o(r(4182)),
        i = o(r(4183)),
        s = o(r(4184)),
        c = o(r(4185)),
        d = o(r(4186)),
        f = o(r(4187));
      function u(e) {
        var t,
          r,
          o = {
            1: "mainnet",
            3: "ropsten",
            4: "rinkeby",
            42: "kovan",
            5: "goerli",
            11155111: "sepolia",
          },
          u = {
            mainnet: n.default,
            ropsten: i.default,
            rinkeby: s.default,
            kovan: c.default,
            goerli: d.default,
            sepolia: f.default,
          };
        if (e)
          try {
            for (var l = a(e), h = l.next(); !h.done; h = l.next()) {
              var x = h.value,
                p = x.name;
              ((o[x.chainId.toString()] = p), (u[p] = x));
            }
          } catch (m) {
            t = { error: m };
          } finally {
            try {
              h && !h.done && (r = l.return) && r.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        return ((u["names"] = o), u);
      }
      ((t._getInitializedChains = u), (t.chains = u()));
    },
    4182: function (e) {
      e.exports = JSON.parse(
        '{"name":"mainnet","chainId":1,"networkId":1,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"The Ethereum main chain","url":"https://ethstats.net/","genesis":{"hash":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","timestamp":null,"gasLimit":5000,"difficulty":17179869184,"nonce":"0x0000000000000042","extraData":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","stateRoot":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfc64ec04"},{"name":"homestead","block":1150000,"forkHash":"0x97c2c34c"},{"name":"dao","block":1920000,"forkHash":"0x91d1f948"},{"name":"tangerineWhistle","block":2463000,"forkHash":"0x7a64da13"},{"name":"spuriousDragon","block":2675000,"forkHash":"0x3edd5b10"},{"name":"byzantium","block":4370000,"forkHash":"0xa00bc324"},{"name":"constantinople","block":7280000,"forkHash":"0x668db0af"},{"name":"petersburg","block":7280000,"forkHash":"0x668db0af"},{"name":"istanbul","block":9069000,"forkHash":"0x879d6e30"},{"name":"muirGlacier","block":9200000,"forkHash":"0xe029e991"},{"name":"berlin","block":12244000,"forkHash":"0x0eb440f6"},{"name":"london","block":12965000,"forkHash":"0xb715077d"},{"name":"arrowGlacier","block":13773000,"forkHash":"0x20c327fc"},{"name":"grayGlacier","block":15050000,"forkHash":"0xf0afd0e3"},{"name":"mergeForkIdTransition","block":null,"forkHash":null},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"18.138.108.67","port":30303,"id":"d860a01f9722d78051619d1e2351aba3f43f943f6f00718d1b9baa4101932a1f5011f16bb2b1bb35db20d6fe28fa0bf09636d26a87d31de9ec6203eeedb1f666","location":"ap-southeast-1-001","comment":"bootnode-aws-ap-southeast-1-001"},{"ip":"3.209.45.79","port":30303,"id":"22a8232c3abc76a16ae9d6c3b164f98775fe226f0917b0ca871128a74a8e9630b458460865bab457221f1d448dd9791d24c4e5d88786180ac185df813a68d4de","location":"us-east-1-001","comment":"bootnode-aws-us-east-1-001"},{"ip":"34.255.23.113","port":30303,"id":"ca6de62fce278f96aea6ec5a2daadb877e51651247cb96ee310a318def462913b653963c155a0ef6c7d50048bba6e6cea881130857413d9f50a621546b590758","location":"eu-west-1-001","comment":"bootnode-aws-eu-west-1-001"},{"ip":"35.158.244.151","port":30303,"id":"279944d8dcd428dffaa7436f25ca0ca43ae19e7bcf94a8fb7d1641651f92d121e972ac2e8f381414b80cc8e5555811c2ec6e1a99bb009b3f53c4c69923e11bd8","location":"eu-central-1-001","comment":"bootnode-aws-eu-central-1-001"},{"ip":"52.187.207.27","port":30303,"id":"8499da03c47d637b20eee24eec3c356c9a2e6148d6fe25ca195c7949ab8ec2c03e3556126b0d7ed644675e78c4318b08691b7b57de10e5f0d40d05b09238fa0a","location":"australiaeast-001","comment":"bootnode-azure-australiaeast-001"},{"ip":"191.234.162.198","port":30303,"id":"103858bdb88756c71f15e9b5e09b56dc1be52f0a5021d46301dbbfb7e130029cc9d0d6f73f693bc29b665770fff7da4d34f3c6379fe12721b5d7a0bcb5ca1fc1","location":"brazilsouth-001","comment":"bootnode-azure-brazilsouth-001"},{"ip":"52.231.165.108","port":30303,"id":"715171f50508aba88aecd1250af392a45a330af91d7b90701c436b618c86aaa1589c9184561907bebbb56439b8f8787bc01f49a7c77276c58c1b09822d75e8e8","location":"koreasouth-001","comment":"bootnode-azure-koreasouth-001"},{"ip":"104.42.217.25","port":30303,"id":"5d6d7cd20d6da4bb83a1d28cadb5d409b64edf314c0335df658c1a54e32c7c4a7ab7823d57c39b6a757556e68ff1df17c748b698544a55cb488b52479a92b60f","location":"westus-001","comment":"bootnode-azure-westus-001"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.mainnet.ethdisco.net"]}',
      );
    },
    4183: function (e) {
      e.exports = JSON.parse(
        '{"name":"ropsten","chainId":3,"networkId":3,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network","url":"https://github.com/ethereum/ropsten","genesis":{"hash":"0x41941023680923e0fe4d74a34bdac8141f2540e3ae90623718e47d66d1ca4a2d","timestamp":null,"gasLimit":16777216,"difficulty":1048576,"nonce":"0x0000000000000042","extraData":"0x3535353535353535353535353535353535353535353535353535353535353535","stateRoot":"0x217b0bbcfb72e2d57e28f33cb361b9983513177755dc3f33ce3e7022ed62b77b"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x30c7ddbc"},{"name":"homestead","block":0,"forkHash":"0x30c7ddbc"},{"name":"tangerineWhistle","block":0,"forkHash":"0x30c7ddbc"},{"name":"spuriousDragon","block":10,"forkHash":"0x63760190"},{"name":"byzantium","block":1700000,"forkHash":"0x3ea159c7"},{"name":"constantinople","block":4230000,"forkHash":"0x97b544f3"},{"name":"petersburg","block":4939394,"forkHash":"0xd6e2149b"},{"name":"istanbul","block":6485846,"forkHash":"0x4bc66396"},{"name":"muirGlacier","block":7117117,"forkHash":"0x6727ef90"},{"name":"berlin","block":9812189,"forkHash":"0xa157d377"},{"name":"london","block":10499401,"forkHash":"0x7119b6b3"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.176.7.10","port":30303,"id":"30b7ab30a01c124a6cceca36863ece12c4f5fa68e3ba9b0b51407ccc002eeed3b3102d20a88f1c1d3c3154e2449317b8ef95090e77b312d5cc39354f86d5d606","location":"","comment":"US-Azure geth"},{"ip":"52.176.100.77","port":30303,"id":"865a63255b3bb68023b6bffd5095118fcc13e79dcf014fe4e47e065c350c7cc72af2e53eff895f11ba1bbb6a2b33271c1116ee870f266618eadfc2e78aa7349c","location":"","comment":"US-Azure parity"},{"ip":"52.232.243.152","port":30303,"id":"6332792c4a00e3e4ee0926ed89e0d27ef985424d97b6a45bf0f23e51f0dcb5e66b875777506458aea7af6f9e4ffb69f43f3778ee73c81ed9d34c51c4b16b0b0f","location":"","comment":"Parity"},{"ip":"192.81.208.223","port":30303,"id":"94c15d1b9e2fe7ce56e458b9a3b672ef11894ddedd0c6f247e0f1d3487f52b66208fb4aeb8179fce6e3a749ea93ed147c37976d67af557508d199d9594c35f09","location":"","comment":"@gpip"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.ropsten.ethdisco.net"]}',
      );
    },
    4184: function (e) {
      e.exports = JSON.parse(
        '{"name":"rinkeby","chainId":4,"networkId":4,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"PoA test network","url":"https://www.rinkeby.io","genesis":{"hash":"0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177","timestamp":"0x58ee40ba","gasLimit":4700000,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x52657370656374206d7920617574686f7269746168207e452e436172746d616e42eb768f2244c8811c63729a21a3569731535f067ffc57839b00206d1ad20c69a1981b489f772031b279182d99e65703f0076e4812653aab85fca0f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x53580584816f617295ea26c0e17641e0120cab2f0a8ffb53a866fd53aa8e8c2d"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x3b8e0691"},{"name":"homestead","block":1,"forkHash":"0x60949295"},{"name":"tangerineWhistle","block":2,"forkHash":"0x8bde40dd"},{"name":"spuriousDragon","block":3,"forkHash":"0xcb3a64bb"},{"name":"byzantium","block":1035301,"forkHash":"0x8d748b57"},{"name":"constantinople","block":3660663,"forkHash":"0xe49cab14"},{"name":"petersburg","block":4321234,"forkHash":"0xafec6b27"},{"name":"istanbul","block":5435345,"forkHash":"0xcbdb8838"},{"name":"berlin","block":8290928,"forkHash":"0x6910c8bd"},{"name":"london","block":8897988,"forkHash":"0x8e29f2f3"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"52.169.42.101","port":30303,"id":"a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf","location":"","comment":"IE"},{"ip":"52.3.158.184","port":30303,"id":"343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8","location":"","comment":"INFURA"},{"ip":"159.89.28.211","port":30303,"id":"b6b28890b006743680c52e64e0d16db57f28124885595fa03a562be1d2bf0f3a1da297d56b13da25fb992888fd556d4c1a27b1f39d531bde7de1921c90061cc6","location":"","comment":"AKASHA"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.rinkeby.ethdisco.net"]}',
      );
    },
    4185: function (e) {
      e.exports = JSON.parse(
        '{"name":"kovan","chainId":42,"networkId":42,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"aura","aura":{}},"comment":"Parity PoA test network","url":"https://kovan-testnet.github.io/website/","genesis":{"hash":"0xa3c565fc15c7478862d50ccd6561e3c06b24cc509bf388941c25ea985ce32cb9","timestamp":null,"gasLimit":6000000,"difficulty":131072,"nonce":"0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","extraData":"0x","stateRoot":"0x2480155b48a1cea17d67dbfdfaafe821c1d19cdd478c5358e8ec56dec24502b2"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0x010ffe56"},{"name":"homestead","block":0,"forkHash":"0x010ffe56"},{"name":"tangerineWhistle","block":0,"forkHash":"0x010ffe56"},{"name":"spuriousDragon","block":0,"forkHash":"0x010ffe56"},{"name":"byzantium","block":5067000,"forkHash":"0x7f83c620"},{"name":"constantinople","block":9200000,"forkHash":"0xa94e3dc4"},{"name":"petersburg","block":10255201,"forkHash":"0x186874aa"},{"name":"istanbul","block":14111141,"forkHash":"0x7f6599a6"},{"name":"berlin","block":24770900,"forkHash":"0x1a0f10d9"},{"name":"london","block":26741100,"forkHash":"0x1ed20b71"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"116.203.116.241","port":30303,"id":"16898006ba2cd4fa8bf9a3dfe32684c178fa861df144bfc21fe800dc4838a03e342056951fa9fd533dcb0be1219e306106442ff2cf1f7e9f8faa5f2fc1a3aa45","location":"","comment":"1"},{"ip":"3.217.96.11","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"2"},{"ip":"108.61.170.124","port":30303,"id":"740e1c8ea64e71762c71a463a04e2046070a0c9394fcab5891d41301dc473c0cff00ebab5a9bc87fbcb610ab98ac18225ff897bc8b7b38def5975d5ceb0a7d7c","location":"","comment":"3"},{"ip":"157.230.31.163","port":30303,"id":"2909846f78c37510cc0e306f185323b83bb2209e5ff4fdd279d93c60e3f365e3c6e62ad1d2133ff11f9fd6d23ad9c3dad73bb974d53a22f7d1ac5b7dea79d0b0","location":"","comment":"4"}]}',
      );
    },
    4186: function (e) {
      e.exports = JSON.parse(
        '{"name":"goerli","chainId":5,"networkId":5,"defaultHardfork":"istanbul","consensus":{"type":"poa","algorithm":"clique","clique":{"period":15,"epoch":30000}},"comment":"Cross-client PoA test network","url":"https://github.com/goerli/testnet","genesis":{"hash":"0xbf7e331f7f7c1dd2e05159666b3bf8bc7a8a3a9eb1d518969eab529dd9b88c1a","timestamp":"0x5c51a607","gasLimit":10485760,"difficulty":1,"nonce":"0x0000000000000000","extraData":"0x22466c6578692069732061207468696e6722202d204166726900000000000000e0a2bd4258d2768837baa26a28fe71dc079f84c70000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","stateRoot":"0x5d6cded585e73c4e322c30c2f782a336316f17dd85a4863b9d838d2d4b8b3008"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xa3f5ab08"},{"name":"homestead","block":0,"forkHash":"0xa3f5ab08"},{"name":"tangerineWhistle","block":0,"forkHash":"0xa3f5ab08"},{"name":"spuriousDragon","block":0,"forkHash":"0xa3f5ab08"},{"name":"byzantium","block":0,"forkHash":"0xa3f5ab08"},{"name":"constantinople","block":0,"forkHash":"0xa3f5ab08"},{"name":"petersburg","block":0,"forkHash":"0xa3f5ab08"},{"name":"istanbul","block":1561651,"forkHash":"0xc25efa5c"},{"name":"berlin","block":4460644,"forkHash":"0x757a1c47"},{"name":"london","block":5062605,"forkHash":"0xb8c6299d"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"51.141.78.53","port":30303,"id":"011f758e6552d105183b1761c5e2dea0111bc20fd5f6422bc7f91e0fabbec9a6595caf6239b37feb773dddd3f87240d99d859431891e4a642cf2a0a9e6cbb98a","location":"","comment":"Upstream bootnode 1"},{"ip":"13.93.54.137","port":30303,"id":"176b9417f511d05b6b2cf3e34b756cf0a7096b3094572a8f6ef4cdcb9d1f9d00683bf0f83347eebdf3b81c3521c2332086d9592802230bf528eaf606a1d9677b","location":"","comment":"Upstream bootnode 2"},{"ip":"94.237.54.114","port":30313,"id":"46add44b9f13965f7b9875ac6b85f016f341012d84f975377573800a863526f4da19ae2c620ec73d11591fa9510e992ecc03ad0751f53cc02f7c7ed6d55c7291","location":"","comment":"Upstream bootnode 3"},{"ip":"18.218.250.66","port":30313,"id":"b5948a2d3e9d486c4d75bf32713221c2bd6cf86463302339299bd227dc2e276cd5a1c7ca4f43a0e9122fe9af884efed563bd2a1fd28661f3b5f5ad7bf1de5949","location":"","comment":"Upstream bootnode 4"},{"ip":"3.11.147.67","port":30303,"id":"a61215641fb8714a373c80edbfa0ea8878243193f57c96eeb44d0bc019ef295abd4e044fd619bfc4c59731a73fb79afe84e9ab6da0c743ceb479cbb6d263fa91","location":"","comment":"Ethereum Foundation bootnode"},{"ip":"51.15.116.226","port":30303,"id":"a869b02cec167211fb4815a82941db2e7ed2936fd90e78619c53eb17753fcf0207463e3419c264e2a1dd8786de0df7e68cf99571ab8aeb7c4e51367ef186b1dd","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":30303,"id":"807b37ee4816ecf407e9112224494b74dd5933625f655962d892f2f0f02d7fbbb3e2a94cf87a96609526f30c998fd71e93e2f53015c558ffc8b03eceaf30ee33","location":"","comment":"Goerli Initiative bootnode"},{"ip":"51.15.119.157","port":40303,"id":"a59e33ccd2b3e52d578f1fbd70c6f9babda2650f0760d6ff3b37742fdcdfdb3defba5d56d315b40c46b70198c7621e63ffa3f987389c7118634b0fefbbdfa7fd","location":"","comment":"Goerli Initiative bootnode"}],"dnsNetworks":["enrtree://AKA3AM6LPBYEUDMVNU3BSVQJ5AD45Y7YPOHJLEF6W26QOE4VTUDPE@all.goerli.ethdisco.net"]}',
      );
    },
    4187: function (e) {
      e.exports = JSON.parse(
        '{"name":"sepolia","chainId":11155111,"networkId":11155111,"defaultHardfork":"istanbul","consensus":{"type":"pow","algorithm":"ethash","ethash":{}},"comment":"PoW test network to replace Ropsten","url":"https://github.com/ethereum/go-ethereum/pull/23730","genesis":{"hash":"0x25a5cc106eea7138acab33231d7160d69cb777ee0c2c553fcddf5138993e6dd9","timestamp":"0x6159af19","gasLimit":30000000,"difficulty":131072,"nonce":"0x0000000000000000","extraData":"0x5365706f6c69612c20417468656e732c204174746963612c2047726565636521","stateRoot":"0x5eb6e371a698b8d68f665192350ffcecbbbf322916f4b51bd79bb6887da3f494"},"hardforks":[{"name":"chainstart","block":0,"forkHash":"0xfe3366e7"},{"name":"homestead","block":0,"forkHash":"0xfe3366e7"},{"name":"tangerineWhistle","block":0,"forkHash":"0xfe3366e7"},{"name":"spuriousDragon","block":0,"forkHash":"0xfe3366e7"},{"name":"byzantium","block":0,"forkHash":"0xfe3366e7"},{"name":"constantinople","block":0,"forkHash":"0xfe3366e7"},{"name":"petersburg","block":0,"forkHash":"0xfe3366e7"},{"name":"istanbul","block":0,"forkHash":"0xfe3366e7"},{"name":"muirGlacier","block":0,"forkHash":"0xfe3366e7"},{"name":"berlin","block":0,"forkHash":"0xfe3366e7"},{"name":"london","block":0,"forkHash":"0xfe3366e7"},{"name":"merge","block":null,"forkHash":null},{"name":"shanghai","block":null,"forkHash":null}],"bootstrapNodes":[{"ip":"18.168.182.86","port":30303,"id":"9246d00bc8fd1742e5ad2428b80fc4dc45d786283e05ef6edbd9002cbc335d40998444732fbe921cb88e1d2c73d1b1de53bae6a2237996e9bfe14f871baf7066","location":"","comment":"geth"},{"ip":"52.14.151.177","port":30303,"id":"ec66ddcf1a974950bd4c782789a7e04f8aa7110a72569b6e65fcd51e937e74eed303b1ea734e4d19cfaec9fbff9b6ee65bf31dcb50ba79acce9dd63a6aca61c7","location":"","comment":"besu"}],"dnsNetworks":[]}',
      );
    },
    4188: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hardforks = void 0),
        (t.hardforks = [
          ["chainstart", r(4189)],
          ["homestead", r(4190)],
          ["dao", r(4191)],
          ["tangerineWhistle", r(4192)],
          ["spuriousDragon", r(4193)],
          ["byzantium", r(4194)],
          ["constantinople", r(4195)],
          ["petersburg", r(4196)],
          ["istanbul", r(4197)],
          ["muirGlacier", r(4198)],
          ["berlin", r(4199)],
          ["london", r(4200)],
          ["shanghai", r(4201)],
          ["arrowGlacier", r(4202)],
          ["grayGlacier", r(4203)],
          ["mergeForkIdTransition", r(4204)],
          ["merge", r(4205)],
        ]));
    },
    4189: function (e) {
      e.exports = JSON.parse(
        '{"name":"chainstart","comment":"Start of the Ethereum main chain","url":"","status":"","gasConfig":{"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be"},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations"},"maxRefundQuotient":{"v":2,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"base":{"v":2,"d":"Gas base cost, used e.g. for ChainID opcode (Istanbul)"},"tierStep":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them"},"exp":{"v":10,"d":"Base fee of the EXP opcode"},"expByte":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction"},"sha3":{"v":30,"d":"Base fee of the SHA3 opcode"},"sha3Word":{"v":6,"d":"Once per word of the SHA3 operation\'s data"},"sload":{"v":50,"d":"Base fee of the SLOAD opcode"},"sstoreSet":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero"},"sstoreReset":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero"},"sstoreRefund":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero"},"jumpdest":{"v":1,"d":"Base fee of the JUMPDEST opcode"},"log":{"v":375,"d":"Base fee of the LOG opcode"},"logData":{"v":8,"d":"Per byte in a LOG* operation\'s data"},"logTopic":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas"},"create":{"v":32000,"d":"Base fee of the CREATE opcode"},"call":{"v":40,"d":"Base fee of the CALL opcode"},"callStipend":{"v":2300,"d":"Free gas given at beginning of call"},"callValueTransfer":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero"},"callNewAccount":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior"},"selfdestructRefund":{"v":24000,"d":"Refunded following a selfdestruct operation"},"memory":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL"},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation"},"createData":{"v":200,"d":""},"tx":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions"},"txCreation":{"v":32000,"d":"The cost of creating a contract via tx"},"txDataZero":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions"},"txDataNonZero":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"copy":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added"},"ecRecover":{"v":3000,"d":""},"sha256":{"v":60,"d":""},"sha256Word":{"v":12,"d":""},"ripemd160":{"v":600,"d":""},"ripemd160Word":{"v":120,"d":""},"identity":{"v":15,"d":""},"identityWord":{"v":3,"d":""},"stop":{"v":0,"d":"Base fee of the STOP opcode"},"add":{"v":3,"d":"Base fee of the ADD opcode"},"mul":{"v":5,"d":"Base fee of the MUL opcode"},"sub":{"v":3,"d":"Base fee of the SUB opcode"},"div":{"v":5,"d":"Base fee of the DIV opcode"},"sdiv":{"v":5,"d":"Base fee of the SDIV opcode"},"mod":{"v":5,"d":"Base fee of the MOD opcode"},"smod":{"v":5,"d":"Base fee of the SMOD opcode"},"addmod":{"v":8,"d":"Base fee of the ADDMOD opcode"},"mulmod":{"v":8,"d":"Base fee of the MULMOD opcode"},"signextend":{"v":5,"d":"Base fee of the SIGNEXTEND opcode"},"lt":{"v":3,"d":"Base fee of the LT opcode"},"gt":{"v":3,"d":"Base fee of the GT opcode"},"slt":{"v":3,"d":"Base fee of the SLT opcode"},"sgt":{"v":3,"d":"Base fee of the SGT opcode"},"eq":{"v":3,"d":"Base fee of the EQ opcode"},"iszero":{"v":3,"d":"Base fee of the ISZERO opcode"},"and":{"v":3,"d":"Base fee of the AND opcode"},"or":{"v":3,"d":"Base fee of the OR opcode"},"xor":{"v":3,"d":"Base fee of the XOR opcode"},"not":{"v":3,"d":"Base fee of the NOT opcode"},"byte":{"v":3,"d":"Base fee of the BYTE opcode"},"address":{"v":2,"d":"Base fee of the ADDRESS opcode"},"balance":{"v":20,"d":"Base fee of the BALANCE opcode"},"origin":{"v":2,"d":"Base fee of the ORIGIN opcode"},"caller":{"v":2,"d":"Base fee of the CALLER opcode"},"callvalue":{"v":2,"d":"Base fee of the CALLVALUE opcode"},"calldataload":{"v":3,"d":"Base fee of the CALLDATALOAD opcode"},"calldatasize":{"v":2,"d":"Base fee of the CALLDATASIZE opcode"},"calldatacopy":{"v":3,"d":"Base fee of the CALLDATACOPY opcode"},"codesize":{"v":2,"d":"Base fee of the CODESIZE opcode"},"codecopy":{"v":3,"d":"Base fee of the CODECOPY opcode"},"gasprice":{"v":2,"d":"Base fee of the GASPRICE opcode"},"extcodesize":{"v":20,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":20,"d":"Base fee of the EXTCODECOPY opcode"},"blockhash":{"v":20,"d":"Base fee of the BLOCKHASH opcode"},"coinbase":{"v":2,"d":"Base fee of the COINBASE opcode"},"timestamp":{"v":2,"d":"Base fee of the TIMESTAMP opcode"},"number":{"v":2,"d":"Base fee of the NUMBER opcode"},"difficulty":{"v":2,"d":"Base fee of the DIFFICULTY opcode"},"gaslimit":{"v":2,"d":"Base fee of the GASLIMIT opcode"},"pop":{"v":2,"d":"Base fee of the POP opcode"},"mload":{"v":3,"d":"Base fee of the MLOAD opcode"},"mstore":{"v":3,"d":"Base fee of the MSTORE opcode"},"mstore8":{"v":3,"d":"Base fee of the MSTORE8 opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"},"jump":{"v":8,"d":"Base fee of the JUMP opcode"},"jumpi":{"v":10,"d":"Base fee of the JUMPI opcode"},"pc":{"v":2,"d":"Base fee of the PC opcode"},"msize":{"v":2,"d":"Base fee of the MSIZE opcode"},"gas":{"v":2,"d":"Base fee of the GAS opcode"},"push":{"v":3,"d":"Base fee of the PUSH opcode"},"dup":{"v":3,"d":"Base fee of the DUP opcode"},"swap":{"v":3,"d":"Base fee of the SWAP opcode"},"callcode":{"v":40,"d":"Base fee of the CALLCODE opcode"},"return":{"v":0,"d":"Base fee of the RETURN opcode"},"invalid":{"v":0,"d":"Base fee of the INVALID opcode"},"selfdestruct":{"v":0,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed"},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack"},"maxExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis"}},"pow":{"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be"},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations"},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not"},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":0,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4190: function (e) {
      e.exports = JSON.parse(
        '{"name":"homestead","comment":"Homestead hardfork with protocol and network changes","url":"https://eips.ethereum.org/EIPS/eip-606","status":"Final","gasConfig":{},"gasPrices":{"delegatecall":{"v":40,"d":"Base fee of the DELEGATECALL opcode"}},"vm":{},"pow":{}}',
      );
    },
    4191: function (e) {
      e.exports = JSON.parse(
        '{"name":"dao","comment":"DAO rescue hardfork","url":"https://eips.ethereum.org/EIPS/eip-779","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4192: function (e) {
      e.exports = JSON.parse(
        '{"name":"tangerineWhistle","comment":"Hardfork with gas cost changes for IO-heavy operations","url":"https://eips.ethereum.org/EIPS/eip-608","status":"Final","gasConfig":{},"gasPrices":{"sload":{"v":200,"d":"Once per SLOAD operation"},"call":{"v":700,"d":"Once per CALL operation & message call transaction"},"extcodesize":{"v":700,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":700,"d":"Base fee of the EXTCODECOPY opcode"},"balance":{"v":400,"d":"Base fee of the BALANCE opcode"},"delegatecall":{"v":700,"d":"Base fee of the DELEGATECALL opcode"},"callcode":{"v":700,"d":"Base fee of the CALLCODE opcode"},"selfdestruct":{"v":5000,"d":"Base fee of the SELFDESTRUCT opcode"}},"vm":{},"pow":{}}',
      );
    },
    4193: function (e) {
      e.exports = JSON.parse(
        '{"name":"spuriousDragon","comment":"HF with EIPs for simple replay attack protection, EXP cost increase, state trie clearing, contract code size limit","url":"https://eips.ethereum.org/EIPS/eip-607","status":"Final","gasConfig":{},"gasPrices":{"expByte":{"v":50,"d":"Times ceil(log256(exponent)) for the EXP instruction"}},"vm":{"maxCodeSize":{"v":24576,"d":"Maximum length of contract code"}},"pow":{}}',
      );
    },
    4194: function (e) {
      e.exports = JSON.parse(
        '{"name":"byzantium","comment":"Hardfork with new precompiles, instructions and other protocol changes","url":"https://eips.ethereum.org/EIPS/eip-609","status":"Final","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":20,"d":"Gquaddivisor from modexp precompile for gas calculation"},"ecAdd":{"v":500,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":40000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":100000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":80000,"d":"Gas costs regarding curve pairing precompile input length"},"revert":{"v":0,"d":"Base fee of the REVERT opcode"},"staticcall":{"v":700,"d":"Base fee of the STATICCALL opcode"},"returndatasize":{"v":2,"d":"Base fee of the RETURNDATASIZE opcode"},"returndatacopy":{"v":3,"d":"Base fee of the RETURNDATACOPY opcode"}},"vm":{},"pow":{"minerReward":{"v":"3000000000000000000","d":"the amount a miner get rewarded for mining a block"},"difficultyBombDelay":{"v":3000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4195: function (e) {
      e.exports = JSON.parse(
        '{"name":"constantinople","comment":"Postponed hardfork including EIP-1283 (SSTORE gas metering changes)","url":"https://eips.ethereum.org/EIPS/eip-1013","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":200,"d":"Once per SSTORE operation if the value doesn\'t change"},"netSstoreInitGas":{"v":20000,"d":"Once per SSTORE operation from clean zero"},"netSstoreCleanGas":{"v":5000,"d":"Once per SSTORE operation from clean non-zero"},"netSstoreDirtyGas":{"v":200,"d":"Once per SSTORE operation from dirty"},"netSstoreClearRefund":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"netSstoreResetRefund":{"v":4800,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"netSstoreResetClearRefund":{"v":19800,"d":"Once per SSTORE operation for resetting to the original zero value"},"shl":{"v":3,"d":"Base fee of the SHL opcode"},"shr":{"v":3,"d":"Base fee of the SHR opcode"},"sar":{"v":3,"d":"Base fee of the SAR opcode"},"extcodehash":{"v":400,"d":"Base fee of the EXTCODEHASH opcode"},"create2":{"v":32000,"d":"Base fee of the CREATE2 opcode"}},"vm":{},"pow":{"minerReward":{"v":"2000000000000000000","d":"The amount a miner gets rewarded for mining a block"},"difficultyBombDelay":{"v":5000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4196: function (e) {
      e.exports = JSON.parse(
        '{"name":"petersburg","comment":"Aka constantinopleFix, removes EIP-1283, activate together with or after constantinople","url":"https://eips.ethereum.org/EIPS/eip-1716","status":"Final","gasConfig":{},"gasPrices":{"netSstoreNoopGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreInitGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreCleanGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreDirtyGas":{"v":null,"d":"Removed along EIP-1283"},"netSstoreClearRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetRefund":{"v":null,"d":"Removed along EIP-1283"},"netSstoreResetClearRefund":{"v":null,"d":"Removed along EIP-1283"}},"vm":{},"pow":{}}',
      );
    },
    4197: function (e) {
      e.exports = JSON.parse(
        '{"name":"istanbul","comment":"HF targeted for December 2019 following the Constantinople/Petersburg HF","url":"https://eips.ethereum.org/EIPS/eip-1679","status":"Final","gasConfig":{},"gasPrices":{"blake2Round":{"v":1,"d":"Gas cost per round for the Blake2 F precompile"},"ecAdd":{"v":150,"d":"Gas costs for curve addition precompile"},"ecMul":{"v":6000,"d":"Gas costs for curve multiplication precompile"},"ecPairing":{"v":45000,"d":"Base gas costs for curve pairing precompile"},"ecPairingWord":{"v":34000,"d":"Gas costs regarding curve pairing precompile input length"},"txDataNonZero":{"v":16,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions"},"sstoreSentryGasEIP2200":{"v":2300,"d":"Minimum gas required to be present for an SSTORE call, not consumed"},"sstoreNoopGasEIP2200":{"v":800,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":800,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitGasEIP2200":{"v":20000,"d":"Once per SSTORE operation from clean zero to non-zero"},"sstoreInitRefundEIP2200":{"v":19200,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanGasEIP2200":{"v":5000,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreCleanRefundEIP2200":{"v":4200,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"sstoreClearRefundEIP2200":{"v":15000,"d":"Once per SSTORE operation for clearing an originally existing storage slot"},"balance":{"v":700,"d":"Base fee of the BALANCE opcode"},"extcodehash":{"v":700,"d":"Base fee of the EXTCODEHASH opcode"},"chainid":{"v":2,"d":"Base fee of the CHAINID opcode"},"selfbalance":{"v":5,"d":"Base fee of the SELFBALANCE opcode"},"sload":{"v":800,"d":"Base fee of the SLOAD opcode"}},"vm":{},"pow":{}}',
      );
    },
    4198: function (e) {
      e.exports = JSON.parse(
        '{"name":"muirGlacier","comment":"HF to delay the difficulty bomb","url":"https://eips.ethereum.org/EIPS/eip-2384","status":"Final","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9000000,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4199: function (e) {
      e.exports = JSON.parse(
        '{"name":"berlin","comment":"HF targeted for July 2020 following the Muir Glacier HF","url":"https://eips.ethereum.org/EIPS/eip-2070","status":"Final","eips":[2565,2929,2718,2930]}',
      );
    },
    4200: function (e) {
      e.exports = JSON.parse(
        '{"name":"london","comment":"HF targeted for July 2021 following the Berlin fork","url":"https://github.com/ethereum/eth1.0-specs/blob/master/network-upgrades/mainnet-upgrades/london.md","status":"Final","eips":[1559,3198,3529,3541]}',
      );
    },
    4201: function (e) {
      e.exports = JSON.parse(
        '{"name":"shanghai","comment":"Next feature hardfork after the merge hardfork","url":"https://github.com/ethereum/pm/issues/356","status":"Pre-Draft","eips":[]}',
      );
    },
    4202: function (e) {
      e.exports = JSON.parse(
        '{"name":"arrowGlacier","comment":"HF to delay the difficulty bomb","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/arrow-glacier.md","status":"Final","eips":[4345],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4203: function (e) {
      e.exports = JSON.parse(
        '{"name":"grayGlacier","comment":"Delaying the difficulty bomb to Mid September 2022","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/gray-glacier.md","status":"Draft","eips":[5133],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4204: function (e) {
      e.exports = JSON.parse(
        '{"name":"mergeForkIdTransition","comment":"Pre-merge hardfork to fork off non-upgraded clients","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Draft","eips":[]}',
      );
    },
    4205: function (e) {
      e.exports = JSON.parse(
        '{"name":"merge","comment":"Hardfork to upgrade the consensus mechanism to Proof-of-Stake","url":"https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/merge.md","status":"Draft","consensus":{"type":"pos","algorithm":"casper","casper":{}},"eips":[3675,4399]}',
      );
    },
    4206: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.EIPs = void 0),
        (t.EIPs = {
          1153: r(4207),
          1559: r(4208),
          2315: r(4209),
          2537: r(4210),
          2565: r(4211),
          2718: r(4212),
          2929: r(4213),
          2930: r(4214),
          3198: r(4215),
          3529: r(4216),
          3540: r(4217),
          3541: r(4218),
          3554: r(4219),
          3607: r(4220),
          3651: r(4221),
          3670: r(4222),
          3675: r(4223),
          3855: r(4224),
          3860: r(4225),
          4345: r(4226),
          4399: r(4227),
          5133: r(4228),
        }));
    },
    4207: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-1153","number":1153,"comment":"Transient Storage","url":"https://eips.ethereum.org/EIPS/eip-1153","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"tstore":{"v":100,"d":"Base fee of the TSTORE opcode"},"tload":{"v":100,"d":"Base fee of the TLOAD opcode"}},"vm":{},"pow":{}}',
      );
    },
    4208: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-1559","number":1559,"comment":"Fee market change for ETH 1.0 chain","url":"https://eips.ethereum.org/EIPS/eip-1559","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2930],"gasConfig":{"baseFeeMaxChangeDenominator":{"v":8,"d":"Maximum base fee change denominator"},"elasticityMultiplier":{"v":2,"d":"Maximum block gas target elasticity"},"initialBaseFee":{"v":1000000000,"d":"Initial base fee on first EIP1559 block"}},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4209: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-2315","number":2315,"comment":"Simple subroutines for the EVM","url":"https://eips.ethereum.org/EIPS/eip-2315","status":"Draft","minimumHardfork":"istanbul","gasConfig":{},"gasPrices":{"beginsub":{"v":2,"d":"Base fee of the BEGINSUB opcode"},"returnsub":{"v":5,"d":"Base fee of the RETURNSUB opcode"},"jumpsub":{"v":10,"d":"Base fee of the JUMPSUB opcode"}},"vm":{},"pow":{}}',
      );
    },
    4210: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-2537","number":2537,"comment":"BLS12-381 precompiles","url":"https://eips.ethereum.org/EIPS/eip-2537","status":"Draft","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"Bls12381G1AddGas":{"v":600,"d":"Gas cost of a single BLS12-381 G1 addition precompile-call"},"Bls12381G1MulGas":{"v":12000,"d":"Gas cost of a single BLS12-381 G1 multiplication precompile-call"},"Bls12381G2AddGas":{"v":4500,"d":"Gas cost of a single BLS12-381 G2 addition precompile-call"},"Bls12381G2MulGas":{"v":55000,"d":"Gas cost of a single BLS12-381 G2 multiplication precompile-call"},"Bls12381PairingBaseGas":{"v":115000,"d":"Base gas cost of BLS12-381 pairing check"},"Bls12381PairingPerPairGas":{"v":23000,"d":"Per-pair gas cost of BLS12-381 pairing check"},"Bls12381MapG1Gas":{"v":5500,"d":"Gas cost of BLS12-381 map field element to G1"},"Bls12381MapG2Gas":{"v":110000,"d":"Gas cost of BLS12-381 map field element to G2"},"Bls12381MultiExpGasDiscount":{"v":[[1,1200],[2,888],[3,764],[4,641],[5,594],[6,547],[7,500],[8,453],[9,438],[10,423],[11,408],[12,394],[13,379],[14,364],[15,349],[16,334],[17,330],[18,326],[19,322],[20,318],[21,314],[22,310],[23,306],[24,302],[25,298],[26,294],[27,289],[28,285],[29,281],[30,277],[31,273],[32,269],[33,268],[34,266],[35,265],[36,263],[37,262],[38,260],[39,259],[40,257],[41,256],[42,254],[43,253],[44,251],[45,250],[46,248],[47,247],[48,245],[49,244],[50,242],[51,241],[52,239],[53,238],[54,236],[55,235],[56,233],[57,232],[58,231],[59,229],[60,228],[61,226],[62,225],[63,223],[64,222],[65,221],[66,220],[67,219],[68,219],[69,218],[70,217],[71,216],[72,216],[73,215],[74,214],[75,213],[76,213],[77,212],[78,211],[79,211],[80,210],[81,209],[82,208],[83,208],[84,207],[85,206],[86,205],[87,205],[88,204],[89,203],[90,202],[91,202],[92,201],[93,200],[94,199],[95,199],[96,198],[97,197],[98,196],[99,196],[100,195],[101,194],[102,193],[103,193],[104,192],[105,191],[106,191],[107,190],[108,189],[109,188],[110,188],[111,187],[112,186],[113,185],[114,185],[115,184],[116,183],[117,182],[118,182],[119,181],[120,180],[121,179],[122,179],[123,178],[124,177],[125,176],[126,176],[127,175],[128,174]],"d":"Discount gas costs of calls to the MultiExp precompiles with `k` (point, scalar) pair"}},"vm":{},"pow":{}}',
      );
    },
    4211: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-2565","number":2565,"comment":"ModExp gas cost","url":"https://eips.ethereum.org/EIPS/eip-2565","status":"Final","minimumHardfork":"byzantium","gasConfig":{},"gasPrices":{"modexpGquaddivisor":{"v":3,"d":"Gquaddivisor from modexp precompile for gas calculation"}},"vm":{},"pow":{}}',
      );
    },
    4212: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-2718","comment":"Typed Transaction Envelope","url":"https://eips.ethereum.org/EIPS/eip-2718","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4213: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-2929","comment":"Gas cost increases for state access opcodes","url":"https://eips.ethereum.org/EIPS/eip-2929","status":"Final","minimumHardfork":"chainstart","gasConfig":{},"gasPrices":{"coldsload":{"v":2100,"d":"Gas cost of the first read of storage from a given location (per transaction)"},"coldaccountaccess":{"v":2600,"d":"Gas cost of the first read of a given address (per transaction)"},"warmstorageread":{"v":100,"d":"Gas cost of reading storage locations which have already loaded \'cold\'"},"sstoreCleanGasEIP2200":{"v":2900,"d":"Once per SSTORE operation from clean non-zero to something else"},"sstoreNoopGasEIP2200":{"v":100,"d":"Once per SSTORE operation if the value doesn\'t change"},"sstoreDirtyGasEIP2200":{"v":100,"d":"Once per SSTORE operation if a dirty value is changed"},"sstoreInitRefundEIP2200":{"v":19900,"d":"Once per SSTORE operation for resetting to the original zero value"},"sstoreCleanRefundEIP2200":{"v":4900,"d":"Once per SSTORE operation for resetting to the original non-zero value"},"call":{"v":0,"d":"Base fee of the CALL opcode"},"callcode":{"v":0,"d":"Base fee of the CALLCODE opcode"},"delegatecall":{"v":0,"d":"Base fee of the DELEGATECALL opcode"},"staticcall":{"v":0,"d":"Base fee of the STATICCALL opcode"},"balance":{"v":0,"d":"Base fee of the BALANCE opcode"},"extcodesize":{"v":0,"d":"Base fee of the EXTCODESIZE opcode"},"extcodecopy":{"v":0,"d":"Base fee of the EXTCODECOPY opcode"},"extcodehash":{"v":0,"d":"Base fee of the EXTCODEHASH opcode"},"sload":{"v":0,"d":"Base fee of the SLOAD opcode"},"sstore":{"v":0,"d":"Base fee of the SSTORE opcode"}},"vm":{},"pow":{}}',
      );
    },
    4214: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-2930","comment":"Optional access lists","url":"https://eips.ethereum.org/EIPS/eip-2930","status":"Final","minimumHardfork":"istanbul","requiredEIPs":[2718,2929],"gasConfig":{},"gasPrices":{"accessListStorageKeyCost":{"v":1900,"d":"Gas cost per storage key in an Access List transaction"},"accessListAddressCost":{"v":2400,"d":"Gas cost per storage key in an Access List transaction"}},"vm":{},"pow":{}}',
      );
    },
    4215: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3198","number":3198,"comment":"BASEFEE opcode","url":"https://eips.ethereum.org/EIPS/eip-3198","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{"basefee":{"v":2,"d":"Gas cost of the BASEFEE opcode"}},"vm":{},"pow":{}}',
      );
    },
    4216: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3529","comment":"Reduction in refunds","url":"https://eips.ethereum.org/EIPS/eip-3529","status":"Final","minimumHardfork":"berlin","requiredEIPs":[2929],"gasConfig":{"maxRefundQuotient":{"v":5,"d":"Maximum refund quotient; max tx refund is min(tx.gasUsed/maxRefundQuotient, tx.gasRefund)"}},"gasPrices":{"selfdestructRefund":{"v":0,"d":"Refunded following a selfdestruct operation"},"sstoreClearRefundEIP2200":{"v":4800,"d":"Once per SSTORE operation for clearing an originally existing storage slot"}},"vm":{},"pow":{}}',
      );
    },
    4217: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3540","number":3540,"comment":"EVM Object Format (EOF) v1","url":"https://eips.ethereum.org/EIPS/eip-3540","status":"Review","minimumHardfork":"london","requiredEIPs":[3541],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4218: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3541","comment":"Reject new contracts starting with the 0xEF byte","url":"https://eips.ethereum.org/EIPS/eip-3541","status":"Final","minimumHardfork":"berlin","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4219: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3554","comment":"Reduction in refunds","url":"Difficulty Bomb Delay to December 1st 2021","status":"Final","minimumHardfork":"muirGlacier","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":9500000,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4220: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3607","number":3607,"comment":"Reject transactions from senders with deployed code","url":"https://eips.ethereum.org/EIPS/eip-3607","status":"Final","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4221: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3651","number":3198,"comment":"Warm COINBASE","url":"https://eips.ethereum.org/EIPS/eip-3651","status":"Review","minimumHardfork":"london","requiredEIPs":[2929],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4222: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3670","number":3670,"comment":"EOF - Code Validation","url":"https://eips.ethereum.org/EIPS/eip-3670","status":"Review","minimumHardfork":"london","requiredEIPs":[3540],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4223: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3675","number":3675,"comment":"Upgrade consensus to Proof-of-Stake","url":"https://eips.ethereum.org/EIPS/eip-3675","status":"Review","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4224: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3855","number":3855,"comment":"PUSH0 instruction","url":"https://eips.ethereum.org/EIPS/eip-3855","status":"Review","minimumHardfork":"chainstart","requiredEIPs":[],"gasConfig":{},"gasPrices":{"push0":{"v":2,"d":"Base fee of the PUSH0 opcode"}},"vm":{},"pow":{}}',
      );
    },
    4225: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-3860","number":3860,"comment":"Limit and meter initcode","url":"https://eips.ethereum.org/EIPS/eip-3860","status":"Review","minimumHardfork":"spuriousDragon","requiredEIPs":[],"gasConfig":{},"gasPrices":{"initCodeWordCost":{"v":2,"d":"Gas to pay for each word (32 bytes) of initcode when creating a contract"}},"vm":{"maxInitCodeSize":{"v":49152,"d":"Maximum length of initialization code when creating a contract"}},"pow":{}}',
      );
    },
    4226: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-4345","number":4345,"comment":"Difficulty Bomb Delay to June 2022","url":"https://eips.ethereum.org/EIPS/eip-4345","status":"Final","minimumHardfork":"london","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":10700000,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4227: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-4399","number":4399,"comment":"Supplant DIFFICULTY opcode with PREVRANDAO","url":"https://eips.ethereum.org/EIPS/eip-4399","status":"Review","minimumHardfork":"london","requiredEIPs":[],"gasConfig":{},"gasPrices":{},"vm":{},"pow":{}}',
      );
    },
    4228: function (e) {
      e.exports = JSON.parse(
        '{"name":"EIP-5133","number":5133,"comment":"Delaying Difficulty Bomb to mid-September 2022","url":"https://eips.ethereum.org/EIPS/eip-5133","status":"Draft","minimumHardfork":"grayGlacier","gasConfig":{},"gasPrices":{},"vm":{},"pow":{"difficultyBombDelay":{"v":11400000,"d":"the amount of blocks to delay the difficulty bomb with"}}}',
      );
    },
    4230: function (e) {
      e.exports = JSON.parse(
        '{"0x0000000000000000000000000000000000000000":"0x1","0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x0000000000000000000000000000000000000005":"0x1","0x0000000000000000000000000000000000000006":"0x1","0x0000000000000000000000000000000000000007":"0x1","0x0000000000000000000000000000000000000008":"0x1","0x0000000000000000000000000000000000000009":"0x1","0x000000000000000000000000000000000000000a":"0x0","0x000000000000000000000000000000000000000b":"0x0","0x000000000000000000000000000000000000000c":"0x0","0x000000000000000000000000000000000000000d":"0x0","0x000000000000000000000000000000000000000e":"0x0","0x000000000000000000000000000000000000000f":"0x0","0x0000000000000000000000000000000000000010":"0x0","0x0000000000000000000000000000000000000011":"0x0","0x0000000000000000000000000000000000000012":"0x0","0x0000000000000000000000000000000000000013":"0x0","0x0000000000000000000000000000000000000014":"0x0","0x0000000000000000000000000000000000000015":"0x0","0x0000000000000000000000000000000000000016":"0x0","0x0000000000000000000000000000000000000017":"0x0","0x0000000000000000000000000000000000000018":"0x0","0x0000000000000000000000000000000000000019":"0x0","0x000000000000000000000000000000000000001a":"0x0","0x000000000000000000000000000000000000001b":"0x0","0x000000000000000000000000000000000000001c":"0x0","0x000000000000000000000000000000000000001d":"0x0","0x000000000000000000000000000000000000001e":"0x0","0x000000000000000000000000000000000000001f":"0x0","0x0000000000000000000000000000000000000020":"0x0","0x0000000000000000000000000000000000000021":"0x0","0x0000000000000000000000000000000000000022":"0x0","0x0000000000000000000000000000000000000023":"0x0","0x0000000000000000000000000000000000000024":"0x0","0x0000000000000000000000000000000000000025":"0x0","0x0000000000000000000000000000000000000026":"0x0","0x0000000000000000000000000000000000000027":"0x0","0x0000000000000000000000000000000000000028":"0x0","0x0000000000000000000000000000000000000029":"0x0","0x000000000000000000000000000000000000002a":"0x0","0x000000000000000000000000000000000000002b":"0x0","0x000000000000000000000000000000000000002c":"0x0","0x000000000000000000000000000000000000002d":"0x0","0x000000000000000000000000000000000000002e":"0x0","0x000000000000000000000000000000000000002f":"0x0","0x0000000000000000000000000000000000000030":"0x0","0x0000000000000000000000000000000000000031":"0x0","0x0000000000000000000000000000000000000032":"0x0","0x0000000000000000000000000000000000000033":"0x0","0x0000000000000000000000000000000000000034":"0x0","0x0000000000000000000000000000000000000035":"0x0","0x0000000000000000000000000000000000000036":"0x0","0x0000000000000000000000000000000000000037":"0x0","0x0000000000000000000000000000000000000038":"0x0","0x0000000000000000000000000000000000000039":"0x0","0x000000000000000000000000000000000000003a":"0x0","0x000000000000000000000000000000000000003b":"0x0","0x000000000000000000000000000000000000003c":"0x0","0x000000000000000000000000000000000000003d":"0x0","0x000000000000000000000000000000000000003e":"0x0","0x000000000000000000000000000000000000003f":"0x0","0x0000000000000000000000000000000000000040":"0x0","0x0000000000000000000000000000000000000041":"0x0","0x0000000000000000000000000000000000000042":"0x0","0x0000000000000000000000000000000000000043":"0x0","0x0000000000000000000000000000000000000044":"0x0","0x0000000000000000000000000000000000000045":"0x0","0x0000000000000000000000000000000000000046":"0x0","0x0000000000000000000000000000000000000047":"0x0","0x0000000000000000000000000000000000000048":"0x0","0x0000000000000000000000000000000000000049":"0x0","0x000000000000000000000000000000000000004a":"0x0","0x000000000000000000000000000000000000004b":"0x0","0x000000000000000000000000000000000000004c":"0x0","0x000000000000000000000000000000000000004d":"0x0","0x000000000000000000000000000000000000004e":"0x0","0x000000000000000000000000000000000000004f":"0x0","0x0000000000000000000000000000000000000050":"0x0","0x0000000000000000000000000000000000000051":"0x0","0x0000000000000000000000000000000000000052":"0x0","0x0000000000000000000000000000000000000053":"0x0","0x0000000000000000000000000000000000000054":"0x0","0x0000000000000000000000000000000000000055":"0x0","0x0000000000000000000000000000000000000056":"0x0","0x0000000000000000000000000000000000000057":"0x0","0x0000000000000000000000000000000000000058":"0x0","0x0000000000000000000000000000000000000059":"0x0","0x000000000000000000000000000000000000005a":"0x0","0x000000000000000000000000000000000000005b":"0x0","0x000000000000000000000000000000000000005c":"0x0","0x000000000000000000000000000000000000005d":"0x0","0x000000000000000000000000000000000000005e":"0x0","0x000000000000000000000000000000000000005f":"0x0","0x0000000000000000000000000000000000000060":"0x0","0x0000000000000000000000000000000000000061":"0x0","0x0000000000000000000000000000000000000062":"0x0","0x0000000000000000000000000000000000000063":"0x0","0x0000000000000000000000000000000000000064":"0x0","0x0000000000000000000000000000000000000065":"0x0","0x0000000000000000000000000000000000000066":"0x0","0x0000000000000000000000000000000000000067":"0x0","0x0000000000000000000000000000000000000068":"0x0","0x0000000000000000000000000000000000000069":"0x0","0x000000000000000000000000000000000000006a":"0x0","0x000000000000000000000000000000000000006b":"0x0","0x000000000000000000000000000000000000006c":"0x0","0x000000000000000000000000000000000000006d":"0x0","0x000000000000000000000000000000000000006e":"0x0","0x000000000000000000000000000000000000006f":"0x0","0x0000000000000000000000000000000000000070":"0x0","0x0000000000000000000000000000000000000071":"0x0","0x0000000000000000000000000000000000000072":"0x0","0x0000000000000000000000000000000000000073":"0x0","0x0000000000000000000000000000000000000074":"0x0","0x0000000000000000000000000000000000000075":"0x0","0x0000000000000000000000000000000000000076":"0x0","0x0000000000000000000000000000000000000077":"0x0","0x0000000000000000000000000000000000000078":"0x0","0x0000000000000000000000000000000000000079":"0x0","0x000000000000000000000000000000000000007a":"0x0","0x000000000000000000000000000000000000007b":"0x0","0x000000000000000000000000000000000000007c":"0x0","0x000000000000000000000000000000000000007d":"0x0","0x000000000000000000000000000000000000007e":"0x0","0x000000000000000000000000000000000000007f":"0x0","0x0000000000000000000000000000000000000080":"0x0","0x0000000000000000000000000000000000000081":"0x0","0x0000000000000000000000000000000000000082":"0x0","0x0000000000000000000000000000000000000083":"0x0","0x0000000000000000000000000000000000000084":"0x0","0x0000000000000000000000000000000000000085":"0x0","0x0000000000000000000000000000000000000086":"0x0","0x0000000000000000000000000000000000000087":"0x0","0x0000000000000000000000000000000000000088":"0x0","0x0000000000000000000000000000000000000089":"0x0","0x000000000000000000000000000000000000008a":"0x0","0x000000000000000000000000000000000000008b":"0x0","0x000000000000000000000000000000000000008c":"0x0","0x000000000000000000000000000000000000008d":"0x0","0x000000000000000000000000000000000000008e":"0x0","0x000000000000000000000000000000000000008f":"0x0","0x0000000000000000000000000000000000000090":"0x0","0x0000000000000000000000000000000000000091":"0x0","0x0000000000000000000000000000000000000092":"0x0","0x0000000000000000000000000000000000000093":"0x0","0x0000000000000000000000000000000000000094":"0x0","0x0000000000000000000000000000000000000095":"0x0","0x0000000000000000000000000000000000000096":"0x0","0x0000000000000000000000000000000000000097":"0x0","0x0000000000000000000000000000000000000098":"0x0","0x0000000000000000000000000000000000000099":"0x0","0x000000000000000000000000000000000000009a":"0x0","0x000000000000000000000000000000000000009b":"0x0","0x000000000000000000000000000000000000009c":"0x0","0x000000000000000000000000000000000000009d":"0x0","0x000000000000000000000000000000000000009e":"0x0","0x000000000000000000000000000000000000009f":"0x0","0x00000000000000000000000000000000000000a0":"0x0","0x00000000000000000000000000000000000000a1":"0x0","0x00000000000000000000000000000000000000a2":"0x0","0x00000000000000000000000000000000000000a3":"0x0","0x00000000000000000000000000000000000000a4":"0x0","0x00000000000000000000000000000000000000a5":"0x0","0x00000000000000000000000000000000000000a6":"0x0","0x00000000000000000000000000000000000000a7":"0x0","0x00000000000000000000000000000000000000a8":"0x0","0x00000000000000000000000000000000000000a9":"0x0","0x00000000000000000000000000000000000000aa":"0x0","0x00000000000000000000000000000000000000ab":"0x0","0x00000000000000000000000000000000000000ac":"0x0","0x00000000000000000000000000000000000000ad":"0x0","0x00000000000000000000000000000000000000ae":"0x0","0x00000000000000000000000000000000000000af":"0x0","0x00000000000000000000000000000000000000b0":"0x0","0x00000000000000000000000000000000000000b1":"0x0","0x00000000000000000000000000000000000000b2":"0x0","0x00000000000000000000000000000000000000b3":"0x0","0x00000000000000000000000000000000000000b4":"0x0","0x00000000000000000000000000000000000000b5":"0x0","0x00000000000000000000000000000000000000b6":"0x0","0x00000000000000000000000000000000000000b7":"0x0","0x00000000000000000000000000000000000000b8":"0x0","0x00000000000000000000000000000000000000b9":"0x0","0x00000000000000000000000000000000000000ba":"0x0","0x00000000000000000000000000000000000000bb":"0x0","0x00000000000000000000000000000000000000bc":"0x0","0x00000000000000000000000000000000000000bd":"0x0","0x00000000000000000000000000000000000000be":"0x0","0x00000000000000000000000000000000000000bf":"0x0","0x00000000000000000000000000000000000000c0":"0x0","0x00000000000000000000000000000000000000c1":"0x0","0x00000000000000000000000000000000000000c2":"0x0","0x00000000000000000000000000000000000000c3":"0x0","0x00000000000000000000000000000000000000c4":"0x0","0x00000000000000000000000000000000000000c5":"0x0","0x00000000000000000000000000000000000000c6":"0x0","0x00000000000000000000000000000000000000c7":"0x0","0x00000000000000000000000000000000000000c8":"0x0","0x00000000000000000000000000000000000000c9":"0x0","0x00000000000000000000000000000000000000ca":"0x0","0x00000000000000000000000000000000000000cb":"0x0","0x00000000000000000000000000000000000000cc":"0x0","0x00000000000000000000000000000000000000cd":"0x0","0x00000000000000000000000000000000000000ce":"0x0","0x00000000000000000000000000000000000000cf":"0x0","0x00000000000000000000000000000000000000d0":"0x0","0x00000000000000000000000000000000000000d1":"0x0","0x00000000000000000000000000000000000000d2":"0x0","0x00000000000000000000000000000000000000d3":"0x0","0x00000000000000000000000000000000000000d4":"0x0","0x00000000000000000000000000000000000000d5":"0x0","0x00000000000000000000000000000000000000d6":"0x0","0x00000000000000000000000000000000000000d7":"0x0","0x00000000000000000000000000000000000000d8":"0x0","0x00000000000000000000000000000000000000d9":"0x0","0x00000000000000000000000000000000000000da":"0x0","0x00000000000000000000000000000000000000db":"0x0","0x00000000000000000000000000000000000000dc":"0x0","0x00000000000000000000000000000000000000dd":"0x0","0x00000000000000000000000000000000000000de":"0x0","0x00000000000000000000000000000000000000df":"0x0","0x00000000000000000000000000000000000000e0":"0x0","0x00000000000000000000000000000000000000e1":"0x0","0x00000000000000000000000000000000000000e2":"0x0","0x00000000000000000000000000000000000000e3":"0x0","0x00000000000000000000000000000000000000e4":"0x0","0x00000000000000000000000000000000000000e5":"0x0","0x00000000000000000000000000000000000000e6":"0x0","0x00000000000000000000000000000000000000e7":"0x0","0x00000000000000000000000000000000000000e8":"0x0","0x00000000000000000000000000000000000000e9":"0x0","0x00000000000000000000000000000000000000ea":"0x0","0x00000000000000000000000000000000000000eb":"0x0","0x00000000000000000000000000000000000000ec":"0x0","0x00000000000000000000000000000000000000ed":"0x0","0x00000000000000000000000000000000000000ee":"0x0","0x00000000000000000000000000000000000000ef":"0x0","0x00000000000000000000000000000000000000f0":"0x0","0x00000000000000000000000000000000000000f1":"0x0","0x00000000000000000000000000000000000000f2":"0x0","0x00000000000000000000000000000000000000f3":"0x0","0x00000000000000000000000000000000000000f4":"0x0","0x00000000000000000000000000000000000000f5":"0x0","0x00000000000000000000000000000000000000f6":"0x0","0x00000000000000000000000000000000000000f7":"0x0","0x00000000000000000000000000000000000000f8":"0x0","0x00000000000000000000000000000000000000f9":"0x0","0x00000000000000000000000000000000000000fa":"0x0","0x00000000000000000000000000000000000000fb":"0x0","0x00000000000000000000000000000000000000fc":"0x0","0x00000000000000000000000000000000000000fd":"0x0","0x00000000000000000000000000000000000000fe":"0x0","0x00000000000000000000000000000000000000ff":"0x0","0x874b54a8bd152966d63f706bae1ffeb0411921e5":"0xc9f2c9cd04674edea40000000"}',
      );
    },
    4231: function (e) {
      e.exports = JSON.parse(
        '{"0x0000000000000000000000000000000000000000":"0x1","0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x0000000000000000000000000000000000000005":"0x1","0x0000000000000000000000000000000000000006":"0x1","0x0000000000000000000000000000000000000007":"0x1","0x0000000000000000000000000000000000000008":"0x1","0x0000000000000000000000000000000000000009":"0x1","0x000000000000000000000000000000000000000a":"0x1","0x000000000000000000000000000000000000000b":"0x1","0x000000000000000000000000000000000000000c":"0x1","0x000000000000000000000000000000000000000d":"0x1","0x000000000000000000000000000000000000000e":"0x1","0x000000000000000000000000000000000000000f":"0x1","0x0000000000000000000000000000000000000010":"0x1","0x0000000000000000000000000000000000000011":"0x1","0x0000000000000000000000000000000000000012":"0x1","0x0000000000000000000000000000000000000013":"0x1","0x0000000000000000000000000000000000000014":"0x1","0x0000000000000000000000000000000000000015":"0x1","0x0000000000000000000000000000000000000016":"0x1","0x0000000000000000000000000000000000000017":"0x1","0x0000000000000000000000000000000000000018":"0x1","0x0000000000000000000000000000000000000019":"0x1","0x000000000000000000000000000000000000001a":"0x1","0x000000000000000000000000000000000000001b":"0x1","0x000000000000000000000000000000000000001c":"0x1","0x000000000000000000000000000000000000001d":"0x1","0x000000000000000000000000000000000000001e":"0x1","0x000000000000000000000000000000000000001f":"0x1","0x0000000000000000000000000000000000000020":"0x1","0x0000000000000000000000000000000000000021":"0x1","0x0000000000000000000000000000000000000022":"0x1","0x0000000000000000000000000000000000000023":"0x1","0x0000000000000000000000000000000000000024":"0x1","0x0000000000000000000000000000000000000025":"0x1","0x0000000000000000000000000000000000000026":"0x1","0x0000000000000000000000000000000000000027":"0x1","0x0000000000000000000000000000000000000028":"0x1","0x0000000000000000000000000000000000000029":"0x1","0x000000000000000000000000000000000000002a":"0x1","0x000000000000000000000000000000000000002b":"0x1","0x000000000000000000000000000000000000002c":"0x1","0x000000000000000000000000000000000000002d":"0x1","0x000000000000000000000000000000000000002e":"0x1","0x000000000000000000000000000000000000002f":"0x1","0x0000000000000000000000000000000000000030":"0x1","0x0000000000000000000000000000000000000031":"0x1","0x0000000000000000000000000000000000000032":"0x1","0x0000000000000000000000000000000000000033":"0x1","0x0000000000000000000000000000000000000034":"0x1","0x0000000000000000000000000000000000000035":"0x1","0x0000000000000000000000000000000000000036":"0x1","0x0000000000000000000000000000000000000037":"0x1","0x0000000000000000000000000000000000000038":"0x1","0x0000000000000000000000000000000000000039":"0x1","0x000000000000000000000000000000000000003a":"0x1","0x000000000000000000000000000000000000003b":"0x1","0x000000000000000000000000000000000000003c":"0x1","0x000000000000000000000000000000000000003d":"0x1","0x000000000000000000000000000000000000003e":"0x1","0x000000000000000000000000000000000000003f":"0x1","0x0000000000000000000000000000000000000040":"0x1","0x0000000000000000000000000000000000000041":"0x1","0x0000000000000000000000000000000000000042":"0x1","0x0000000000000000000000000000000000000043":"0x1","0x0000000000000000000000000000000000000044":"0x1","0x0000000000000000000000000000000000000045":"0x1","0x0000000000000000000000000000000000000046":"0x1","0x0000000000000000000000000000000000000047":"0x1","0x0000000000000000000000000000000000000048":"0x1","0x0000000000000000000000000000000000000049":"0x1","0x000000000000000000000000000000000000004a":"0x1","0x000000000000000000000000000000000000004b":"0x1","0x000000000000000000000000000000000000004c":"0x1","0x000000000000000000000000000000000000004d":"0x1","0x000000000000000000000000000000000000004e":"0x1","0x000000000000000000000000000000000000004f":"0x1","0x0000000000000000000000000000000000000050":"0x1","0x0000000000000000000000000000000000000051":"0x1","0x0000000000000000000000000000000000000052":"0x1","0x0000000000000000000000000000000000000053":"0x1","0x0000000000000000000000000000000000000054":"0x1","0x0000000000000000000000000000000000000055":"0x1","0x0000000000000000000000000000000000000056":"0x1","0x0000000000000000000000000000000000000057":"0x1","0x0000000000000000000000000000000000000058":"0x1","0x0000000000000000000000000000000000000059":"0x1","0x000000000000000000000000000000000000005a":"0x1","0x000000000000000000000000000000000000005b":"0x1","0x000000000000000000000000000000000000005c":"0x1","0x000000000000000000000000000000000000005d":"0x1","0x000000000000000000000000000000000000005e":"0x1","0x000000000000000000000000000000000000005f":"0x1","0x0000000000000000000000000000000000000060":"0x1","0x0000000000000000000000000000000000000061":"0x1","0x0000000000000000000000000000000000000062":"0x1","0x0000000000000000000000000000000000000063":"0x1","0x0000000000000000000000000000000000000064":"0x1","0x0000000000000000000000000000000000000065":"0x1","0x0000000000000000000000000000000000000066":"0x1","0x0000000000000000000000000000000000000067":"0x1","0x0000000000000000000000000000000000000068":"0x1","0x0000000000000000000000000000000000000069":"0x1","0x000000000000000000000000000000000000006a":"0x1","0x000000000000000000000000000000000000006b":"0x1","0x000000000000000000000000000000000000006c":"0x1","0x000000000000000000000000000000000000006d":"0x1","0x000000000000000000000000000000000000006e":"0x1","0x000000000000000000000000000000000000006f":"0x1","0x0000000000000000000000000000000000000070":"0x1","0x0000000000000000000000000000000000000071":"0x1","0x0000000000000000000000000000000000000072":"0x1","0x0000000000000000000000000000000000000073":"0x1","0x0000000000000000000000000000000000000074":"0x1","0x0000000000000000000000000000000000000075":"0x1","0x0000000000000000000000000000000000000076":"0x1","0x0000000000000000000000000000000000000077":"0x1","0x0000000000000000000000000000000000000078":"0x1","0x0000000000000000000000000000000000000079":"0x1","0x000000000000000000000000000000000000007a":"0x1","0x000000000000000000000000000000000000007b":"0x1","0x000000000000000000000000000000000000007c":"0x1","0x000000000000000000000000000000000000007d":"0x1","0x000000000000000000000000000000000000007e":"0x1","0x000000000000000000000000000000000000007f":"0x1","0x0000000000000000000000000000000000000080":"0x1","0x0000000000000000000000000000000000000081":"0x1","0x0000000000000000000000000000000000000082":"0x1","0x0000000000000000000000000000000000000083":"0x1","0x0000000000000000000000000000000000000084":"0x1","0x0000000000000000000000000000000000000085":"0x1","0x0000000000000000000000000000000000000086":"0x1","0x0000000000000000000000000000000000000087":"0x1","0x0000000000000000000000000000000000000088":"0x1","0x0000000000000000000000000000000000000089":"0x1","0x000000000000000000000000000000000000008a":"0x1","0x000000000000000000000000000000000000008b":"0x1","0x000000000000000000000000000000000000008c":"0x1","0x000000000000000000000000000000000000008d":"0x1","0x000000000000000000000000000000000000008e":"0x1","0x000000000000000000000000000000000000008f":"0x1","0x0000000000000000000000000000000000000090":"0x1","0x0000000000000000000000000000000000000091":"0x1","0x0000000000000000000000000000000000000092":"0x1","0x0000000000000000000000000000000000000093":"0x1","0x0000000000000000000000000000000000000094":"0x1","0x0000000000000000000000000000000000000095":"0x1","0x0000000000000000000000000000000000000096":"0x1","0x0000000000000000000000000000000000000097":"0x1","0x0000000000000000000000000000000000000098":"0x1","0x0000000000000000000000000000000000000099":"0x1","0x000000000000000000000000000000000000009a":"0x1","0x000000000000000000000000000000000000009b":"0x1","0x000000000000000000000000000000000000009c":"0x1","0x000000000000000000000000000000000000009d":"0x1","0x000000000000000000000000000000000000009e":"0x1","0x000000000000000000000000000000000000009f":"0x1","0x00000000000000000000000000000000000000a0":"0x1","0x00000000000000000000000000000000000000a1":"0x1","0x00000000000000000000000000000000000000a2":"0x1","0x00000000000000000000000000000000000000a3":"0x1","0x00000000000000000000000000000000000000a4":"0x1","0x00000000000000000000000000000000000000a5":"0x1","0x00000000000000000000000000000000000000a6":"0x1","0x00000000000000000000000000000000000000a7":"0x1","0x00000000000000000000000000000000000000a8":"0x1","0x00000000000000000000000000000000000000a9":"0x1","0x00000000000000000000000000000000000000aa":"0x1","0x00000000000000000000000000000000000000ab":"0x1","0x00000000000000000000000000000000000000ac":"0x1","0x00000000000000000000000000000000000000ad":"0x1","0x00000000000000000000000000000000000000ae":"0x1","0x00000000000000000000000000000000000000af":"0x1","0x00000000000000000000000000000000000000b0":"0x1","0x00000000000000000000000000000000000000b1":"0x1","0x00000000000000000000000000000000000000b2":"0x1","0x00000000000000000000000000000000000000b3":"0x1","0x00000000000000000000000000000000000000b4":"0x1","0x00000000000000000000000000000000000000b5":"0x1","0x00000000000000000000000000000000000000b6":"0x1","0x00000000000000000000000000000000000000b7":"0x1","0x00000000000000000000000000000000000000b8":"0x1","0x00000000000000000000000000000000000000b9":"0x1","0x00000000000000000000000000000000000000ba":"0x1","0x00000000000000000000000000000000000000bb":"0x1","0x00000000000000000000000000000000000000bc":"0x1","0x00000000000000000000000000000000000000bd":"0x1","0x00000000000000000000000000000000000000be":"0x1","0x00000000000000000000000000000000000000bf":"0x1","0x00000000000000000000000000000000000000c0":"0x1","0x00000000000000000000000000000000000000c1":"0x1","0x00000000000000000000000000000000000000c2":"0x1","0x00000000000000000000000000000000000000c3":"0x1","0x00000000000000000000000000000000000000c4":"0x1","0x00000000000000000000000000000000000000c5":"0x1","0x00000000000000000000000000000000000000c6":"0x1","0x00000000000000000000000000000000000000c7":"0x1","0x00000000000000000000000000000000000000c8":"0x1","0x00000000000000000000000000000000000000c9":"0x1","0x00000000000000000000000000000000000000ca":"0x1","0x00000000000000000000000000000000000000cb":"0x1","0x00000000000000000000000000000000000000cc":"0x1","0x00000000000000000000000000000000000000cd":"0x1","0x00000000000000000000000000000000000000ce":"0x1","0x00000000000000000000000000000000000000cf":"0x1","0x00000000000000000000000000000000000000d0":"0x1","0x00000000000000000000000000000000000000d1":"0x1","0x00000000000000000000000000000000000000d2":"0x1","0x00000000000000000000000000000000000000d3":"0x1","0x00000000000000000000000000000000000000d4":"0x1","0x00000000000000000000000000000000000000d5":"0x1","0x00000000000000000000000000000000000000d6":"0x1","0x00000000000000000000000000000000000000d7":"0x1","0x00000000000000000000000000000000000000d8":"0x1","0x00000000000000000000000000000000000000d9":"0x1","0x00000000000000000000000000000000000000da":"0x1","0x00000000000000000000000000000000000000db":"0x1","0x00000000000000000000000000000000000000dc":"0x1","0x00000000000000000000000000000000000000dd":"0x1","0x00000000000000000000000000000000000000de":"0x1","0x00000000000000000000000000000000000000df":"0x1","0x00000000000000000000000000000000000000e0":"0x1","0x00000000000000000000000000000000000000e1":"0x1","0x00000000000000000000000000000000000000e2":"0x1","0x00000000000000000000000000000000000000e3":"0x1","0x00000000000000000000000000000000000000e4":"0x1","0x00000000000000000000000000000000000000e5":"0x1","0x00000000000000000000000000000000000000e6":"0x1","0x00000000000000000000000000000000000000e7":"0x1","0x00000000000000000000000000000000000000e8":"0x1","0x00000000000000000000000000000000000000e9":"0x1","0x00000000000000000000000000000000000000ea":"0x1","0x00000000000000000000000000000000000000eb":"0x1","0x00000000000000000000000000000000000000ec":"0x1","0x00000000000000000000000000000000000000ed":"0x1","0x00000000000000000000000000000000000000ee":"0x1","0x00000000000000000000000000000000000000ef":"0x1","0x00000000000000000000000000000000000000f0":"0x1","0x00000000000000000000000000000000000000f1":"0x1","0x00000000000000000000000000000000000000f2":"0x1","0x00000000000000000000000000000000000000f3":"0x1","0x00000000000000000000000000000000000000f4":"0x1","0x00000000000000000000000000000000000000f5":"0x1","0x00000000000000000000000000000000000000f6":"0x1","0x00000000000000000000000000000000000000f7":"0x1","0x00000000000000000000000000000000000000f8":"0x1","0x00000000000000000000000000000000000000f9":"0x1","0x00000000000000000000000000000000000000fa":"0x1","0x00000000000000000000000000000000000000fb":"0x1","0x00000000000000000000000000000000000000fc":"0x1","0x00000000000000000000000000000000000000fd":"0x1","0x00000000000000000000000000000000000000fe":"0x1","0x00000000000000000000000000000000000000ff":"0x1","0x31b98d14007bdee637298086988a0bbd31184523":"0x200000000000000000000000000000000000000000000000000000000000000"}',
      );
    },
    4232: function (e) {
      e.exports = JSON.parse(
        '{"0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x00521965e7bd230323c423d96c657db5b79d099f":"0x100000000000000000000000000000000000000000000000000"}',
      );
    },
    4233: function (e) {
      e.exports = JSON.parse(
        '{"0x0000000000000000000000000000000000000000":"0x1","0x0000000000000000000000000000000000000001":"0x1","0x0000000000000000000000000000000000000002":"0x1","0x0000000000000000000000000000000000000003":"0x1","0x0000000000000000000000000000000000000004":"0x1","0x0000000000000000000000000000000000000005":"0x1","0x0000000000000000000000000000000000000006":"0x1","0x0000000000000000000000000000000000000007":"0x1","0x0000000000000000000000000000000000000008":"0x1","0x0000000000000000000000000000000000000009":"0x1","0x000000000000000000000000000000000000000a":"0x1","0x000000000000000000000000000000000000000b":"0x1","0x000000000000000000000000000000000000000c":"0x1","0x000000000000000000000000000000000000000d":"0x1","0x000000000000000000000000000000000000000e":"0x1","0x000000000000000000000000000000000000000f":"0x1","0x0000000000000000000000000000000000000010":"0x1","0x0000000000000000000000000000000000000011":"0x1","0x0000000000000000000000000000000000000012":"0x1","0x0000000000000000000000000000000000000013":"0x1","0x0000000000000000000000000000000000000014":"0x1","0x0000000000000000000000000000000000000015":"0x1","0x0000000000000000000000000000000000000016":"0x1","0x0000000000000000000000000000000000000017":"0x1","0x0000000000000000000000000000000000000018":"0x1","0x0000000000000000000000000000000000000019":"0x1","0x000000000000000000000000000000000000001a":"0x1","0x000000000000000000000000000000000000001b":"0x1","0x000000000000000000000000000000000000001c":"0x1","0x000000000000000000000000000000000000001d":"0x1","0x000000000000000000000000000000000000001e":"0x1","0x000000000000000000000000000000000000001f":"0x1","0x0000000000000000000000000000000000000020":"0x1","0x0000000000000000000000000000000000000021":"0x1","0x0000000000000000000000000000000000000022":"0x1","0x0000000000000000000000000000000000000023":"0x1","0x0000000000000000000000000000000000000024":"0x1","0x0000000000000000000000000000000000000025":"0x1","0x0000000000000000000000000000000000000026":"0x1","0x0000000000000000000000000000000000000027":"0x1","0x0000000000000000000000000000000000000028":"0x1","0x0000000000000000000000000000000000000029":"0x1","0x000000000000000000000000000000000000002a":"0x1","0x000000000000000000000000000000000000002b":"0x1","0x000000000000000000000000000000000000002c":"0x1","0x000000000000000000000000000000000000002d":"0x1","0x000000000000000000000000000000000000002e":"0x1","0x000000000000000000000000000000000000002f":"0x1","0x0000000000000000000000000000000000000030":"0x1","0x0000000000000000000000000000000000000031":"0x1","0x0000000000000000000000000000000000000032":"0x1","0x0000000000000000000000000000000000000033":"0x1","0x0000000000000000000000000000000000000034":"0x1","0x0000000000000000000000000000000000000035":"0x1","0x0000000000000000000000000000000000000036":"0x1","0x0000000000000000000000000000000000000037":"0x1","0x0000000000000000000000000000000000000038":"0x1","0x0000000000000000000000000000000000000039":"0x1","0x000000000000000000000000000000000000003a":"0x1","0x000000000000000000000000000000000000003b":"0x1","0x000000000000000000000000000000000000003c":"0x1","0x000000000000000000000000000000000000003d":"0x1","0x000000000000000000000000000000000000003e":"0x1","0x000000000000000000000000000000000000003f":"0x1","0x0000000000000000000000000000000000000040":"0x1","0x0000000000000000000000000000000000000041":"0x1","0x0000000000000000000000000000000000000042":"0x1","0x0000000000000000000000000000000000000043":"0x1","0x0000000000000000000000000000000000000044":"0x1","0x0000000000000000000000000000000000000045":"0x1","0x0000000000000000000000000000000000000046":"0x1","0x0000000000000000000000000000000000000047":"0x1","0x0000000000000000000000000000000000000048":"0x1","0x0000000000000000000000000000000000000049":"0x1","0x000000000000000000000000000000000000004a":"0x1","0x000000000000000000000000000000000000004b":"0x1","0x000000000000000000000000000000000000004c":"0x1","0x000000000000000000000000000000000000004d":"0x1","0x000000000000000000000000000000000000004e":"0x1","0x000000000000000000000000000000000000004f":"0x1","0x0000000000000000000000000000000000000050":"0x1","0x0000000000000000000000000000000000000051":"0x1","0x0000000000000000000000000000000000000052":"0x1","0x0000000000000000000000000000000000000053":"0x1","0x0000000000000000000000000000000000000054":"0x1","0x0000000000000000000000000000000000000055":"0x1","0x0000000000000000000000000000000000000056":"0x1","0x0000000000000000000000000000000000000057":"0x1","0x0000000000000000000000000000000000000058":"0x1","0x0000000000000000000000000000000000000059":"0x1","0x000000000000000000000000000000000000005a":"0x1","0x000000000000000000000000000000000000005b":"0x1","0x000000000000000000000000000000000000005c":"0x1","0x000000000000000000000000000000000000005d":"0x1","0x000000000000000000000000000000000000005e":"0x1","0x000000000000000000000000000000000000005f":"0x1","0x0000000000000000000000000000000000000060":"0x1","0x0000000000000000000000000000000000000061":"0x1","0x0000000000000000000000000000000000000062":"0x1","0x0000000000000000000000000000000000000063":"0x1","0x0000000000000000000000000000000000000064":"0x1","0x0000000000000000000000000000000000000065":"0x1","0x0000000000000000000000000000000000000066":"0x1","0x0000000000000000000000000000000000000067":"0x1","0x0000000000000000000000000000000000000068":"0x1","0x0000000000000000000000000000000000000069":"0x1","0x000000000000000000000000000000000000006a":"0x1","0x000000000000000000000000000000000000006b":"0x1","0x000000000000000000000000000000000000006c":"0x1","0x000000000000000000000000000000000000006d":"0x1","0x000000000000000000000000000000000000006e":"0x1","0x000000000000000000000000000000000000006f":"0x1","0x0000000000000000000000000000000000000070":"0x1","0x0000000000000000000000000000000000000071":"0x1","0x0000000000000000000000000000000000000072":"0x1","0x0000000000000000000000000000000000000073":"0x1","0x0000000000000000000000000000000000000074":"0x1","0x0000000000000000000000000000000000000075":"0x1","0x0000000000000000000000000000000000000076":"0x1","0x0000000000000000000000000000000000000077":"0x1","0x0000000000000000000000000000000000000078":"0x1","0x0000000000000000000000000000000000000079":"0x1","0x000000000000000000000000000000000000007a":"0x1","0x000000000000000000000000000000000000007b":"0x1","0x000000000000000000000000000000000000007c":"0x1","0x000000000000000000000000000000000000007d":"0x1","0x000000000000000000000000000000000000007e":"0x1","0x000000000000000000000000000000000000007f":"0x1","0x0000000000000000000000000000000000000080":"0x1","0x0000000000000000000000000000000000000081":"0x1","0x0000000000000000000000000000000000000082":"0x1","0x0000000000000000000000000000000000000083":"0x1","0x0000000000000000000000000000000000000084":"0x1","0x0000000000000000000000000000000000000085":"0x1","0x0000000000000000000000000000000000000086":"0x1","0x0000000000000000000000000000000000000087":"0x1","0x0000000000000000000000000000000000000088":"0x1","0x0000000000000000000000000000000000000089":"0x1","0x000000000000000000000000000000000000008a":"0x1","0x000000000000000000000000000000000000008b":"0x1","0x000000000000000000000000000000000000008c":"0x1","0x000000000000000000000000000000000000008d":"0x1","0x000000000000000000000000000000000000008e":"0x1","0x000000000000000000000000000000000000008f":"0x1","0x0000000000000000000000000000000000000090":"0x1","0x0000000000000000000000000000000000000091":"0x1","0x0000000000000000000000000000000000000092":"0x1","0x0000000000000000000000000000000000000093":"0x1","0x0000000000000000000000000000000000000094":"0x1","0x0000000000000000000000000000000000000095":"0x1","0x0000000000000000000000000000000000000096":"0x1","0x0000000000000000000000000000000000000097":"0x1","0x0000000000000000000000000000000000000098":"0x1","0x0000000000000000000000000000000000000099":"0x1","0x000000000000000000000000000000000000009a":"0x1","0x000000000000000000000000000000000000009b":"0x1","0x000000000000000000000000000000000000009c":"0x1","0x000000000000000000000000000000000000009d":"0x1","0x000000000000000000000000000000000000009e":"0x1","0x000000000000000000000000000000000000009f":"0x1","0x00000000000000000000000000000000000000a0":"0x1","0x00000000000000000000000000000000000000a1":"0x1","0x00000000000000000000000000000000000000a2":"0x1","0x00000000000000000000000000000000000000a3":"0x1","0x00000000000000000000000000000000000000a4":"0x1","0x00000000000000000000000000000000000000a5":"0x1","0x00000000000000000000000000000000000000a6":"0x1","0x00000000000000000000000000000000000000a7":"0x1","0x00000000000000000000000000000000000000a8":"0x1","0x00000000000000000000000000000000000000a9":"0x1","0x00000000000000000000000000000000000000aa":"0x1","0x00000000000000000000000000000000000000ab":"0x1","0x00000000000000000000000000000000000000ac":"0x1","0x00000000000000000000000000000000000000ad":"0x1","0x00000000000000000000000000000000000000ae":"0x1","0x00000000000000000000000000000000000000af":"0x1","0x00000000000000000000000000000000000000b0":"0x1","0x00000000000000000000000000000000000000b1":"0x1","0x00000000000000000000000000000000000000b2":"0x1","0x00000000000000000000000000000000000000b3":"0x1","0x00000000000000000000000000000000000000b4":"0x1","0x00000000000000000000000000000000000000b5":"0x1","0x00000000000000000000000000000000000000b6":"0x1","0x00000000000000000000000000000000000000b7":"0x1","0x00000000000000000000000000000000000000b8":"0x1","0x00000000000000000000000000000000000000b9":"0x1","0x00000000000000000000000000000000000000ba":"0x1","0x00000000000000000000000000000000000000bb":"0x1","0x00000000000000000000000000000000000000bc":"0x1","0x00000000000000000000000000000000000000bd":"0x1","0x00000000000000000000000000000000000000be":"0x1","0x00000000000000000000000000000000000000bf":"0x1","0x00000000000000000000000000000000000000c0":"0x1","0x00000000000000000000000000000000000000c1":"0x1","0x00000000000000000000000000000000000000c2":"0x1","0x00000000000000000000000000000000000000c3":"0x1","0x00000000000000000000000000000000000000c4":"0x1","0x00000000000000000000000000000000000000c5":"0x1","0x00000000000000000000000000000000000000c6":"0x1","0x00000000000000000000000000000000000000c7":"0x1","0x00000000000000000000000000000000000000c8":"0x1","0x00000000000000000000000000000000000000c9":"0x1","0x00000000000000000000000000000000000000ca":"0x1","0x00000000000000000000000000000000000000cb":"0x1","0x00000000000000000000000000000000000000cc":"0x1","0x00000000000000000000000000000000000000cd":"0x1","0x00000000000000000000000000000000000000ce":"0x1","0x00000000000000000000000000000000000000cf":"0x1","0x00000000000000000000000000000000000000d0":"0x1","0x00000000000000000000000000000000000000d1":"0x1","0x00000000000000000000000000000000000000d2":"0x1","0x00000000000000000000000000000000000000d3":"0x1","0x00000000000000000000000000000000000000d4":"0x1","0x00000000000000000000000000000000000000d5":"0x1","0x00000000000000000000000000000000000000d6":"0x1","0x00000000000000000000000000000000000000d7":"0x1","0x00000000000000000000000000000000000000d8":"0x1","0x00000000000000000000000000000000000000d9":"0x1","0x00000000000000000000000000000000000000da":"0x1","0x00000000000000000000000000000000000000db":"0x1","0x00000000000000000000000000000000000000dc":"0x1","0x00000000000000000000000000000000000000dd":"0x1","0x00000000000000000000000000000000000000de":"0x1","0x00000000000000000000000000000000000000df":"0x1","0x00000000000000000000000000000000000000e0":"0x1","0x00000000000000000000000000000000000000e1":"0x1","0x00000000000000000000000000000000000000e2":"0x1","0x00000000000000000000000000000000000000e3":"0x1","0x00000000000000000000000000000000000000e4":"0x1","0x00000000000000000000000000000000000000e5":"0x1","0x00000000000000000000000000000000000000e6":"0x1","0x00000000000000000000000000000000000000e7":"0x1","0x00000000000000000000000000000000000000e8":"0x1","0x00000000000000000000000000000000000000e9":"0x1","0x00000000000000000000000000000000000000ea":"0x1","0x00000000000000000000000000000000000000eb":"0x1","0x00000000000000000000000000000000000000ec":"0x1","0x00000000000000000000000000000000000000ed":"0x1","0x00000000000000000000000000000000000000ee":"0x1","0x00000000000000000000000000000000000000ef":"0x1","0x00000000000000000000000000000000000000f0":"0x1","0x00000000000000000000000000000000000000f1":"0x1","0x00000000000000000000000000000000000000f2":"0x1","0x00000000000000000000000000000000000000f3":"0x1","0x00000000000000000000000000000000000000f4":"0x1","0x00000000000000000000000000000000000000f5":"0x1","0x00000000000000000000000000000000000000f6":"0x1","0x00000000000000000000000000000000000000f7":"0x1","0x00000000000000000000000000000000000000f8":"0x1","0x00000000000000000000000000000000000000f9":"0x1","0x00000000000000000000000000000000000000fa":"0x1","0x00000000000000000000000000000000000000fb":"0x1","0x00000000000000000000000000000000000000fc":"0x1","0x00000000000000000000000000000000000000fd":"0x1","0x00000000000000000000000000000000000000fe":"0x1","0x00000000000000000000000000000000000000ff":"0x1","0x4c2ae482593505f0163cdefc073e81c63cda4107":"0x152d02c7e14af6800000","0xa8e8f14732658e4b51e8711931053a8a69baf2b1":"0x152d02c7e14af6800000","0xd9a5179f091d85051d3c982785efd1455cec8699":"0x84595161401484a000000","0xe0a2bd4258d2768837baa26a28fe71dc079f84c7":"0x4a47e3c12448f4ad000000"}',
      );
    },
    4234: function (e) {
      e.exports = JSON.parse(
        '{"0xa2A6d93439144FFE4D27c9E088dCD8b783946263":"0xD3C21BCECCEDA1000000","0xBc11295936Aa79d594139de1B2e12629414F3BDB":"0xD3C21BCECCEDA1000000","0x7cF5b79bfe291A67AB02b393E456cCc4c266F753":"0xD3C21BCECCEDA1000000","0xaaec86394441f915bce3e6ab399977e9906f3b69":"0xD3C21BCECCEDA1000000","0xF47CaE1CF79ca6758Bfc787dbD21E6bdBe7112B8":"0xD3C21BCECCEDA1000000","0xd7eDDB78ED295B3C9629240E8924fb8D8874ddD8":"0xD3C21BCECCEDA1000000","0x8b7F0977Bb4f0fBE7076FA22bC24acA043583F5e":"0xD3C21BCECCEDA1000000","0xe2e2659028143784d557bcec6ff3a0721048880a":"0xD3C21BCECCEDA1000000","0xd9a5179f091d85051d3c982785efd1455cec8699":"0xD3C21BCECCEDA1000000","0xbeef32ca5b9a198d27B4e02F4c70439fE60356Cf":"0xD3C21BCECCEDA1000000","0x0000006916a87b82333f4245046623b23794c65c":"0x84595161401484A000000","0xb21c33de1fab3fa15499c62b59fe0cc3250020d1":"0x52B7D2DCC80CD2E4000000","0x10F5d45854e038071485AC9e402308cF80D2d2fE":"0x52B7D2DCC80CD2E4000000","0xd7d76c58b3a519e9fA6Cc4D22dC017259BC49F1E":"0x52B7D2DCC80CD2E4000000","0x799D329e5f583419167cD722962485926E338F4a":"0xDE0B6B3A7640000"}',
      );
    },
    4235: function (e, t, r) {
      "use strict";
      (function (e) {
        var a =
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
                      for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    }),
                  e(t, r)
                );
              };
              return function (t, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null",
                  );
                function a() {
                  this.constructor = t;
                }
                (e(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((a.prototype = r.prototype), new a())));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (
                (o =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, a = arguments.length; r < a; r++)
                      for (var o in ((t = arguments[r]), t))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                o.apply(this, arguments)
              );
            },
          n =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" === typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var a,
                o,
                n = r.call(e),
                i = [];
              try {
                while ((void 0 === t || t-- > 0) && !(a = n.next()).done)
                  i.push(a.value);
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  a && !a.done && (r = n["return"]) && r.call(n);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(801),
          s = r(3276),
          c = r(2982),
          d = r(3278),
          f = 1,
          u = e.from(f.toString(16).padStart(2, "0"), "hex"),
          l = (function (t) {
            function r(e, r) {
              void 0 === r && (r = {});
              var a,
                n,
                s = this;
              ((s = t.call(this, o(o({}, e), { type: f }), r) || this),
                (s.DEFAULT_HARDFORK = "berlin"));
              var u = e.chainId,
                l = e.accessList,
                h = e.gasPrice;
              if (
                ((s.common = s._getCommon(r.common, u)),
                (s.chainId = s.common.chainIdBN()),
                !s.common.isActivatedEIP(2930))
              )
                throw new Error("EIP-2930 not enabled on Common");
              s.activeCapabilities = s.activeCapabilities.concat([2718, 2930]);
              var x = d.AccessLists.getAccessListData(
                null !== l && void 0 !== l ? l : [],
              );
              if (
                ((s.accessList = x.accessList),
                (s.AccessListJSON = x.AccessListJSON),
                d.AccessLists.verifyAccessList(s.accessList),
                (s.gasPrice = new i.BN((0, i.toBuffer)("" === h ? "0x" : h))),
                s._validateCannotExceedMaxInteger({ gasPrice: s.gasPrice }),
                s.gasPrice.mul(s.gasLimit).gt(i.MAX_INTEGER))
              ) {
                var p = s._errorMsg(
                  "gasLimit * gasPrice cannot exceed MAX_INTEGER",
                );
                throw new Error(p);
              }
              if (s.v && !s.v.eqn(0) && !s.v.eqn(1)) {
                p = s._errorMsg(
                  "The y-parity of the transaction should either be 0 or 1",
                );
                throw new Error(p);
              }
              if (
                s.common.gteHardfork("homestead") &&
                (null === (a = s.s) || void 0 === a ? void 0 : a.gt(c.N_DIV_2))
              ) {
                p = s._errorMsg(
                  "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid",
                );
                throw new Error(p);
              }
              s.common.isActivatedEIP(3860) &&
                (0, d.checkMaxInitCodeSize)(s.common, s.data.length);
              var m =
                null === (n = null === r || void 0 === r ? void 0 : r.freeze) ||
                void 0 === n ||
                n;
              return (m && Object.freeze(s), s);
            }
            return (
              a(r, t),
              Object.defineProperty(r.prototype, "senderR", {
                get: function () {
                  return this.r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(r.prototype, "senderS", {
                get: function () {
                  return this.s;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(r.prototype, "yParity", {
                get: function () {
                  return this.v;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (r.fromTxData = function (e, t) {
                return (void 0 === t && (t = {}), new r(e, t));
              }),
              (r.fromSerializedTx = function (e, t) {
                if ((void 0 === t && (t = {}), !e.slice(0, 1).equals(u)))
                  throw new Error(
                    "Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: "
                      .concat(f, ", received: ")
                      .concat(e.slice(0, 1).toString("hex")),
                  );
                var a = i.rlp.decode(e.slice(1));
                if (!Array.isArray(a))
                  throw new Error("Invalid serialized tx input: must be array");
                return r.fromValuesArray(a, t);
              }),
              (r.fromRlpSerializedTx = function (e, t) {
                return (void 0 === t && (t = {}), r.fromSerializedTx(e, t));
              }),
              (r.fromValuesArray = function (e, t) {
                if (
                  (void 0 === t && (t = {}), 8 !== e.length && 11 !== e.length)
                )
                  throw new Error(
                    "Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).",
                  );
                var a = n(e, 11),
                  o = a[0],
                  s = a[1],
                  c = a[2],
                  d = a[3],
                  f = a[4],
                  u = a[5],
                  l = a[6],
                  h = a[7],
                  x = a[8],
                  p = a[9],
                  m = a[10];
                (0, i.validateNoLeadingZeroes)({
                  nonce: s,
                  gasPrice: c,
                  gasLimit: d,
                  value: u,
                  v: x,
                  r: p,
                  s: m,
                });
                var b = [];
                return new r(
                  {
                    chainId: new i.BN(o),
                    nonce: s,
                    gasPrice: c,
                    gasLimit: d,
                    to: f,
                    value: u,
                    data: l,
                    accessList: null !== h && void 0 !== h ? h : b,
                    v: void 0 !== x ? new i.BN(x) : void 0,
                    r: p,
                    s: m,
                  },
                  t,
                );
              }),
              (r.prototype.getDataFee = function () {
                if (
                  this.cache.dataFee &&
                  this.cache.dataFee.hardfork === this.common.hardfork()
                )
                  return this.cache.dataFee.value;
                var e = t.prototype.getDataFee.call(this);
                return (
                  e.iaddn(
                    d.AccessLists.getDataFeeEIP2930(
                      this.accessList,
                      this.common,
                    ),
                  ),
                  Object.isFrozen(this) &&
                    (this.cache.dataFee = {
                      value: e,
                      hardfork: this.common.hardfork(),
                    }),
                  e
                );
              }),
              (r.prototype.getUpfrontCost = function () {
                return this.gasLimit.mul(this.gasPrice).add(this.value);
              }),
              (r.prototype.raw = function () {
                return [
                  (0, i.bnToUnpaddedBuffer)(this.chainId),
                  (0, i.bnToUnpaddedBuffer)(this.nonce),
                  (0, i.bnToUnpaddedBuffer)(this.gasPrice),
                  (0, i.bnToUnpaddedBuffer)(this.gasLimit),
                  void 0 !== this.to ? this.to.buf : e.from([]),
                  (0, i.bnToUnpaddedBuffer)(this.value),
                  this.data,
                  this.accessList,
                  void 0 !== this.v
                    ? (0, i.bnToUnpaddedBuffer)(this.v)
                    : e.from([]),
                  void 0 !== this.r
                    ? (0, i.bnToUnpaddedBuffer)(this.r)
                    : e.from([]),
                  void 0 !== this.s
                    ? (0, i.bnToUnpaddedBuffer)(this.s)
                    : e.from([]),
                ];
              }),
              (r.prototype.serialize = function () {
                var t = this.raw();
                return e.concat([u, i.rlp.encode(t)]);
              }),
              (r.prototype.getMessageToSign = function (t) {
                void 0 === t && (t = !0);
                var r = this.raw().slice(0, 8),
                  a = e.concat([u, i.rlp.encode(r)]);
                return t ? (0, i.keccak256)(a) : a;
              }),
              (r.prototype.hash = function () {
                if (!this.isSigned()) {
                  var e = this._errorMsg(
                    "Cannot call hash method if transaction is not signed",
                  );
                  throw new Error(e);
                }
                return Object.isFrozen(this)
                  ? (this.cache.hash ||
                      (this.cache.hash = (0, i.keccak256)(this.serialize())),
                    this.cache.hash)
                  : (0, i.keccak256)(this.serialize());
              }),
              (r.prototype.getMessageToVerifySignature = function () {
                return this.getMessageToSign();
              }),
              (r.prototype.getSenderPublicKey = function () {
                var e;
                if (!this.isSigned()) {
                  var t = this._errorMsg(
                    "Cannot call this method if transaction is not signed",
                  );
                  throw new Error(t);
                }
                var r = this.getMessageToVerifySignature();
                if (
                  this.common.gteHardfork("homestead") &&
                  (null === (e = this.s) || void 0 === e
                    ? void 0
                    : e.gt(c.N_DIV_2))
                ) {
                  t = this._errorMsg(
                    "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid",
                  );
                  throw new Error(t);
                }
                var a = this,
                  o = a.yParity,
                  n = a.r,
                  s = a.s;
                try {
                  return (0, i.ecrecover)(
                    r,
                    o.addn(27),
                    (0, i.bnToUnpaddedBuffer)(n),
                    (0, i.bnToUnpaddedBuffer)(s),
                  );
                } catch (d) {
                  t = this._errorMsg("Invalid Signature");
                  throw new Error(t);
                }
              }),
              (r.prototype._processSignature = function (e, t, a) {
                var n = o(o({}, this.txOptions), { common: this.common });
                return r.fromTxData(
                  {
                    chainId: this.chainId,
                    nonce: this.nonce,
                    gasPrice: this.gasPrice,
                    gasLimit: this.gasLimit,
                    to: this.to,
                    value: this.value,
                    data: this.data,
                    accessList: this.accessList,
                    v: new i.BN(e - 27),
                    r: new i.BN(t),
                    s: new i.BN(a),
                  },
                  n,
                );
              }),
              (r.prototype.toJSON = function () {
                var e = d.AccessLists.getAccessListJSON(this.accessList);
                return {
                  chainId: (0, i.bnToHex)(this.chainId),
                  nonce: (0, i.bnToHex)(this.nonce),
                  gasPrice: (0, i.bnToHex)(this.gasPrice),
                  gasLimit: (0, i.bnToHex)(this.gasLimit),
                  to: void 0 !== this.to ? this.to.toString() : void 0,
                  value: (0, i.bnToHex)(this.value),
                  data: "0x" + this.data.toString("hex"),
                  accessList: e,
                  v: void 0 !== this.v ? (0, i.bnToHex)(this.v) : void 0,
                  r: void 0 !== this.r ? (0, i.bnToHex)(this.r) : void 0,
                  s: void 0 !== this.s ? (0, i.bnToHex)(this.s) : void 0,
                };
              }),
              (r.prototype.errorStr = function () {
                var e,
                  t,
                  r = this._getSharedErrorPostfix();
                return (
                  (r += " gasPrice="
                    .concat(this.gasPrice, " accessListCount=")
                    .concat(
                      null !==
                        (t =
                          null === (e = this.accessList) || void 0 === e
                            ? void 0
                            : e.length) && void 0 !== t
                        ? t
                        : 0,
                    )),
                  r
                );
              }),
              (r.prototype._errorMsg = function (e) {
                return "".concat(e, " (").concat(this.errorStr(), ")");
              }),
              r
            );
          })(s.BaseTransaction);
        t.default = l;
      }).call(this, r(2).Buffer);
    },
    4236: function (e, t, r) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = r(801),
          o = r(3543),
          n = (function () {
            function t() {}
            return (
              (t.fromTxData = function (e, t) {
                if (
                  (void 0 === t && (t = {}), "type" in e && void 0 !== e.type)
                ) {
                  var r = new a.BN((0, a.toBuffer)(e.type)).toNumber();
                  if (0 === r) return o.Transaction.fromTxData(e, t);
                  if (1 === r)
                    return o.AccessListEIP2930Transaction.fromTxData(e, t);
                  if (2 === r)
                    return o.FeeMarketEIP1559Transaction.fromTxData(e, t);
                  throw new Error(
                    "Tx instantiation with type ".concat(r, " not supported"),
                  );
                }
                return o.Transaction.fromTxData(e, t);
              }),
              (t.fromSerializedData = function (e, t) {
                if ((void 0 === t && (t = {}), e[0] <= 127)) {
                  var r = void 0;
                  switch (e[0]) {
                    case 1:
                      r = 2930;
                      break;
                    case 2:
                      r = 1559;
                      break;
                    default:
                      throw new Error(
                        "TypedTransaction with ID ".concat(e[0], " unknown"),
                      );
                  }
                  return 1559 === r
                    ? o.FeeMarketEIP1559Transaction.fromSerializedTx(e, t)
                    : o.AccessListEIP2930Transaction.fromSerializedTx(e, t);
                }
                return o.Transaction.fromSerializedTx(e, t);
              }),
              (t.fromBlockBodyData = function (t, r) {
                if ((void 0 === r && (r = {}), e.isBuffer(t)))
                  return this.fromSerializedData(t, r);
                if (Array.isArray(t))
                  return o.Transaction.fromValuesArray(t, r);
                throw new Error(
                  "Cannot decode transaction: unknown type input",
                );
              }),
              (t.getTransactionClass = function (e, t) {
                void 0 === e && (e = 0);
                var r = 0 == e || (e >= 128 && e <= 255);
                if (r) return o.Transaction;
                switch (e) {
                  case 1:
                    return o.AccessListEIP2930Transaction;
                  case 2:
                    return o.FeeMarketEIP1559Transaction;
                  default:
                    throw new Error(
                      "TypedTransaction with ID ".concat(e, " unknown"),
                    );
                }
              }),
              t
            );
          })();
        t.default = n;
      }).call(this, r(2).Buffer);
    },
    4237: function (e, t, r) {
      "use strict";
      (function (e) {
        var a =
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
                      for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) &&
                          (e[r] = t[r]);
                    }),
                  e(t, r)
                );
              };
              return function (t, r) {
                if ("function" !== typeof r && null !== r)
                  throw new TypeError(
                    "Class extends value " +
                      String(r) +
                      " is not a constructor or null",
                  );
                function a() {
                  this.constructor = t;
                }
                (e(t, r),
                  (t.prototype =
                    null === r
                      ? Object.create(r)
                      : ((a.prototype = r.prototype), new a())));
              };
            })(),
          o =
            (this && this.__assign) ||
            function () {
              return (
                (o =
                  Object.assign ||
                  function (e) {
                    for (var t, r = 1, a = arguments.length; r < a; r++)
                      for (var o in ((t = arguments[r]), t))
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          (e[o] = t[o]);
                    return e;
                  }),
                o.apply(this, arguments)
              );
            },
          n =
            (this && this.__read) ||
            function (e, t) {
              var r = "function" === typeof Symbol && e[Symbol.iterator];
              if (!r) return e;
              var a,
                o,
                n = r.call(e),
                i = [];
              try {
                while ((void 0 === t || t-- > 0) && !(a = n.next()).done)
                  i.push(a.value);
              } catch (s) {
                o = { error: s };
              } finally {
                try {
                  a && !a.done && (r = n["return"]) && r.call(n);
                } finally {
                  if (o) throw o.error;
                }
              }
              return i;
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(801),
          s = r(3276),
          c = r(2982),
          d = r(3278),
          f = 2,
          u = e.from(f.toString(16).padStart(2, "0"), "hex"),
          l = (function (t) {
            function r(e, r) {
              void 0 === r && (r = {});
              var a,
                n,
                s = this;
              ((s = t.call(this, o(o({}, e), { type: f }), r) || this),
                (s.DEFAULT_HARDFORK = "london"));
              var u = e.chainId,
                l = e.accessList,
                h = e.maxFeePerGas,
                x = e.maxPriorityFeePerGas;
              if (
                ((s.common = s._getCommon(r.common, u)),
                (s.chainId = s.common.chainIdBN()),
                !s.common.isActivatedEIP(1559))
              )
                throw new Error("EIP-1559 not enabled on Common");
              s.activeCapabilities = s.activeCapabilities.concat([
                1559, 2718, 2930,
              ]);
              var p = d.AccessLists.getAccessListData(
                null !== l && void 0 !== l ? l : [],
              );
              if (
                ((s.accessList = p.accessList),
                (s.AccessListJSON = p.AccessListJSON),
                d.AccessLists.verifyAccessList(s.accessList),
                (s.maxFeePerGas = new i.BN(
                  (0, i.toBuffer)("" === h ? "0x" : h),
                )),
                (s.maxPriorityFeePerGas = new i.BN(
                  (0, i.toBuffer)("" === x ? "0x" : x),
                )),
                s._validateCannotExceedMaxInteger({
                  maxFeePerGas: s.maxFeePerGas,
                  maxPriorityFeePerGas: s.maxPriorityFeePerGas,
                }),
                s.gasLimit.mul(s.maxFeePerGas).gt(i.MAX_INTEGER))
              ) {
                var m = s._errorMsg(
                  "gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)",
                );
                throw new Error(m);
              }
              if (s.maxFeePerGas.lt(s.maxPriorityFeePerGas)) {
                m = s._errorMsg(
                  "maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)",
                );
                throw new Error(m);
              }
              if (s.v && !s.v.eqn(0) && !s.v.eqn(1)) {
                m = s._errorMsg(
                  "The y-parity of the transaction should either be 0 or 1",
                );
                throw new Error(m);
              }
              if (
                s.common.gteHardfork("homestead") &&
                (null === (a = s.s) || void 0 === a ? void 0 : a.gt(c.N_DIV_2))
              ) {
                m = s._errorMsg(
                  "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid",
                );
                throw new Error(m);
              }
              s.common.isActivatedEIP(3860) &&
                (0, d.checkMaxInitCodeSize)(s.common, s.data.length);
              var b =
                null === (n = null === r || void 0 === r ? void 0 : r.freeze) ||
                void 0 === n ||
                n;
              return (b && Object.freeze(s), s);
            }
            return (
              a(r, t),
              Object.defineProperty(r.prototype, "senderR", {
                get: function () {
                  return this.r;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(r.prototype, "senderS", {
                get: function () {
                  return this.s;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(r.prototype, "yParity", {
                get: function () {
                  return this.v;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (r.fromTxData = function (e, t) {
                return (void 0 === t && (t = {}), new r(e, t));
              }),
              (r.fromSerializedTx = function (e, t) {
                if ((void 0 === t && (t = {}), !e.slice(0, 1).equals(u)))
                  throw new Error(
                    "Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: "
                      .concat(f, ", received: ")
                      .concat(e.slice(0, 1).toString("hex")),
                  );
                var a = i.rlp.decode(e.slice(1));
                if (!Array.isArray(a))
                  throw new Error("Invalid serialized tx input: must be array");
                return r.fromValuesArray(a, t);
              }),
              (r.fromRlpSerializedTx = function (e, t) {
                return (void 0 === t && (t = {}), r.fromSerializedTx(e, t));
              }),
              (r.fromValuesArray = function (e, t) {
                if (
                  (void 0 === t && (t = {}), 9 !== e.length && 12 !== e.length)
                )
                  throw new Error(
                    "Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).",
                  );
                var a = n(e, 12),
                  o = a[0],
                  s = a[1],
                  c = a[2],
                  d = a[3],
                  f = a[4],
                  u = a[5],
                  l = a[6],
                  h = a[7],
                  x = a[8],
                  p = a[9],
                  m = a[10],
                  b = a[11];
                return (
                  (0, i.validateNoLeadingZeroes)({
                    nonce: s,
                    maxPriorityFeePerGas: c,
                    maxFeePerGas: d,
                    gasLimit: f,
                    value: l,
                    v: p,
                    r: m,
                    s: b,
                  }),
                  new r(
                    {
                      chainId: new i.BN(o),
                      nonce: s,
                      maxPriorityFeePerGas: c,
                      maxFeePerGas: d,
                      gasLimit: f,
                      to: u,
                      value: l,
                      data: h,
                      accessList: null !== x && void 0 !== x ? x : [],
                      v: void 0 !== p ? new i.BN(p) : void 0,
                      r: m,
                      s: b,
                    },
                    t,
                  )
                );
              }),
              (r.prototype.getDataFee = function () {
                if (
                  this.cache.dataFee &&
                  this.cache.dataFee.hardfork === this.common.hardfork()
                )
                  return this.cache.dataFee.value;
                var e = t.prototype.getDataFee.call(this);
                return (
                  e.iaddn(
                    d.AccessLists.getDataFeeEIP2930(
                      this.accessList,
                      this.common,
                    ),
                  ),
                  Object.isFrozen(this) &&
                    (this.cache.dataFee = {
                      value: e,
                      hardfork: this.common.hardfork(),
                    }),
                  e
                );
              }),
              (r.prototype.getUpfrontCost = function (e) {
                void 0 === e && (e = new i.BN(0));
                var t = i.BN.min(
                    this.maxPriorityFeePerGas,
                    this.maxFeePerGas.sub(e),
                  ),
                  r = t.add(e);
                return this.gasLimit.mul(r).add(this.value);
              }),
              (r.prototype.raw = function () {
                return [
                  (0, i.bnToUnpaddedBuffer)(this.chainId),
                  (0, i.bnToUnpaddedBuffer)(this.nonce),
                  (0, i.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas),
                  (0, i.bnToUnpaddedBuffer)(this.maxFeePerGas),
                  (0, i.bnToUnpaddedBuffer)(this.gasLimit),
                  void 0 !== this.to ? this.to.buf : e.from([]),
                  (0, i.bnToUnpaddedBuffer)(this.value),
                  this.data,
                  this.accessList,
                  void 0 !== this.v
                    ? (0, i.bnToUnpaddedBuffer)(this.v)
                    : e.from([]),
                  void 0 !== this.r
                    ? (0, i.bnToUnpaddedBuffer)(this.r)
                    : e.from([]),
                  void 0 !== this.s
                    ? (0, i.bnToUnpaddedBuffer)(this.s)
                    : e.from([]),
                ];
              }),
              (r.prototype.serialize = function () {
                var t = this.raw();
                return e.concat([u, i.rlp.encode(t)]);
              }),
              (r.prototype.getMessageToSign = function (t) {
                void 0 === t && (t = !0);
                var r = this.raw().slice(0, 9),
                  a = e.concat([u, i.rlp.encode(r)]);
                return t ? (0, i.keccak256)(a) : a;
              }),
              (r.prototype.hash = function () {
                if (!this.isSigned()) {
                  var e = this._errorMsg(
                    "Cannot call hash method if transaction is not signed",
                  );
                  throw new Error(e);
                }
                return Object.isFrozen(this)
                  ? (this.cache.hash ||
                      (this.cache.hash = (0, i.keccak256)(this.serialize())),
                    this.cache.hash)
                  : (0, i.keccak256)(this.serialize());
              }),
              (r.prototype.getMessageToVerifySignature = function () {
                return this.getMessageToSign();
              }),
              (r.prototype.getSenderPublicKey = function () {
                var e;
                if (!this.isSigned()) {
                  var t = this._errorMsg(
                    "Cannot call this method if transaction is not signed",
                  );
                  throw new Error(t);
                }
                var r = this.getMessageToVerifySignature();
                if (
                  this.common.gteHardfork("homestead") &&
                  (null === (e = this.s) || void 0 === e
                    ? void 0
                    : e.gt(c.N_DIV_2))
                ) {
                  t = this._errorMsg(
                    "Invalid Signature: s-values greater than secp256k1n/2 are considered invalid",
                  );
                  throw new Error(t);
                }
                var a = this,
                  o = a.v,
                  n = a.r,
                  s = a.s;
                try {
                  return (0, i.ecrecover)(
                    r,
                    o.addn(27),
                    (0, i.bnToUnpaddedBuffer)(n),
                    (0, i.bnToUnpaddedBuffer)(s),
                  );
                } catch (d) {
                  t = this._errorMsg("Invalid Signature");
                  throw new Error(t);
                }
              }),
              (r.prototype._processSignature = function (e, t, a) {
                var n = o(o({}, this.txOptions), { common: this.common });
                return r.fromTxData(
                  {
                    chainId: this.chainId,
                    nonce: this.nonce,
                    maxPriorityFeePerGas: this.maxPriorityFeePerGas,
                    maxFeePerGas: this.maxFeePerGas,
                    gasLimit: this.gasLimit,
                    to: this.to,
                    value: this.value,
                    data: this.data,
                    accessList: this.accessList,
                    v: new i.BN(e - 27),
                    r: new i.BN(t),
                    s: new i.BN(a),
                  },
                  n,
                );
              }),
              (r.prototype.toJSON = function () {
                var e = d.AccessLists.getAccessListJSON(this.accessList);
                return {
                  chainId: (0, i.bnToHex)(this.chainId),
                  nonce: (0, i.bnToHex)(this.nonce),
                  maxPriorityFeePerGas: (0, i.bnToHex)(
                    this.maxPriorityFeePerGas,
                  ),
                  maxFeePerGas: (0, i.bnToHex)(this.maxFeePerGas),
                  gasLimit: (0, i.bnToHex)(this.gasLimit),
                  to: void 0 !== this.to ? this.to.toString() : void 0,
                  value: (0, i.bnToHex)(this.value),
                  data: "0x" + this.data.toString("hex"),
                  accessList: e,
                  v: void 0 !== this.v ? (0, i.bnToHex)(this.v) : void 0,
                  r: void 0 !== this.r ? (0, i.bnToHex)(this.r) : void 0,
                  s: void 0 !== this.s ? (0, i.bnToHex)(this.s) : void 0,
                };
              }),
              (r.prototype.errorStr = function () {
                var e = this._getSharedErrorPostfix();
                return (
                  (e += " maxFeePerGas="
                    .concat(this.maxFeePerGas, " maxPriorityFeePerGas=")
                    .concat(this.maxPriorityFeePerGas)),
                  e
                );
              }),
              (r.prototype._errorMsg = function (e) {
                return "".concat(e, " (").concat(this.errorStr(), ")");
              }),
              r
            );
          })(s.BaseTransaction);
        t.default = l;
      }).call(this, r(2).Buffer);
    },
    8107: function (e, t, r) {
      "use strict";
      (function (e) {
        var a = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = a(r(69)),
          n = a(r(3090)),
          i = a(r(129)),
          s = a(r(28)),
          c = r(384),
          d = r(3210);
        const f = 1e3,
          u = "https://gavax.blockscan.com/gasapi.ashx",
          l = "safeTransferFrom",
          h = "NFT";
        class SnowTraceExplorer extends i.default {
          constructor() {
            (super(...arguments),
              (0, o.default)(
                this,
                "getGasPrice",
                n.default.throttle(this._getGasPrice, f),
              ));
          }
          getAllowedTickers() {
            return ["AVAX"];
          }
          async getTransactions() {
            try {
              return super.getTransactions(...arguments);
            } catch (e) {
              return (
                s.default.error({
                  instance: this,
                  error: this.wallet.ticker + ": failed to load transactions",
                }),
                []
              );
            }
          }
          getTransactionsUrl() {
            return "";
          }
          getTransactionsParams(e) {
            return {
              sort: "desc",
              module: "account",
              action: "txlist",
              address: e.toLowerCase(),
            };
          }
          getIsNftTx(e) {
            var t;
            return (
              null !== (t = e.functionName) && void 0 !== t ? t : ""
            ).includes(l);
          }
          modifyTransactionsResponse(e, t) {
            const r = e.result.filter((e) => "1" !== e.isError);
            return super.modifyTransactionsResponse(r, t);
          }
          getTxHash(e) {
            return e.hash;
          }
          getTxDirection(e, t) {
            return e.toLowerCase() === t.to;
          }
          getTxOtherSideAddress(e, t) {
            const r = !this.getTxDirection(e, t);
            if (this.getIsNftTx(t) && r) {
              var a;
              const {
                params: { to: e },
              } =
                null !== (a = this.decodeInput(t.input)) && void 0 !== a
                  ? a
                  : { params: {} };
              return e ? e.toLowerCase() : t.to;
            }
            return r ? t.to : t.from;
          }
          getTxValue(e, t) {
            return this.getIsNftTx(t) ? h : this.wallet.toCurrencyUnit(t.value);
          }
          getTxDateTime(e) {
            return new Date(1e3 * Number(e.timeStamp));
          }
          getTxMemo(e) {
            return e.memo;
          }
          getTxNonce(e) {
            return e.nonce;
          }
          getTxFee(e) {
            return this.wallet.toCurrencyUnit(
              new this.wallet.BN(e.gasUsed).mul(new this.wallet.BN(e.gasPrice)),
            );
          }
          getTxFeeTicker() {
            return this.wallet.ticker;
          }
          getTxType(e) {
            return this.getIsNftTx(e)
              ? c.TxTypes.TRANSFERNFT
              : c.TxTypes.TRANSFER;
          }
          getTransactionsModifiedResponse(e, t) {
            return {
              ticker: this.wallet.ticker,
              name: this.wallet.name,
              walletid: this.wallet.id,
              txid: this.getTxHash(e),
              direction: this.getTxDirection(t, e),
              otherSideAddress: this.getTxOtherSideAddress(t, e),
              amount: this.getTxValue(t, e),
              datetime: this.getTxDateTime(e),
              memo: this.getTxMemo(e),
              confirmations: this.getTxConfirmations(e),
              nonce: this.getTxNonce(e),
              alias: this.wallet.alias,
              fee: this.getTxFee(e),
              feeTicker: this.getTxFeeTicker(),
              txType: this.getTxType(e),
              isNft: this.getIsNftTx(e),
            };
          }
          async _getGasPrice() {
            try {
              const e = await this.request(u, "get", {
                method: "gasoracle",
                apikey: "key",
              });
              return {
                fastest: e.result.FastGasPrice,
                fast: e.result.ProposeGasPrice,
                safeLow: e.result.SafeGasPrice,
              };
            } catch (e) {
              return (
                s.default.error({
                  instance: this,
                  error: this.wallet.ticker + ": failed to get gas prices",
                }),
                {}
              );
            }
          }
          decodeInput(t) {
            try {
              if (this.wallet.coreLibrary.utils.isHex(t)) {
                try {
                  return this.wallet.coreLibrary.utils.hexToString(t);
                } catch (r) {}
                const a = 4,
                  o = e.from(t.replace(/^0x/, ""), "hex"),
                  n = "0x" + o.slice(0, a).toString("hex"),
                  i = o.slice(a),
                  s = { method: null, params: {} };
                return (
                  d.erc721Abi.forEach((e) => {
                    try {
                      const t =
                          this.wallet.coreLibrary.eth.abi.encodeFunctionSignature(
                            e,
                          ),
                        r = e.inputs ? e.inputs.map((e) => e.type) : [],
                        a = e.inputs ? e.inputs.map((e) => e.name) : [];
                      if (n === t) {
                        const t =
                          this.wallet.coreLibrary.eth.abi.decodeParameters(
                            r,
                            "0x" + i.toString("hex"),
                          );
                        s.method = e.name;
                        for (const e in t)
                          "undefined" !== typeof t[e] &&
                            (s.params[a[e]] = t[e]);
                      }
                    } catch (r) {
                      return null;
                    }
                    return null;
                  }),
                  s
                );
              }
            } catch (r) {}
            return null;
          }
        }
        t.default = SnowTraceExplorer;
      }).call(this, r(2).Buffer);
    },
  },
]);
