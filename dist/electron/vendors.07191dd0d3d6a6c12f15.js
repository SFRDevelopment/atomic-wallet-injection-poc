(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [397],
  {
    2689: function (e, t, i) {
      "use strict";
      var a = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var c = a(i(69)),
        r = a(i(230)),
        n = i(19),
        s = i(27),
        d = a(i(4919)),
        o = a(i(815)),
        l = a(i(794));
      function b(e, t, i) {
        (f(e, t), t.set(e, i));
      }
      function f(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function m(e, t, i) {
        return (e.set(y(e, t), i), i);
      }
      function u(e, t) {
        return e.get(y(e, t));
      }
      function y(e, t, i) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : i;
        throw new TypeError("Private element is not present on this object");
      }
      const k = new l.default(() =>
          Promise.all([
            i.e(0),
            i.e(7),
            i.e(8),
            i.e(10),
            i.e(14),
            i.e(13),
            i.e(12),
            i.e(11),
            i.e(32),
          ]).then(i.t.bind(null, 2654, 7)),
        ),
        x = new l.default(() =>
          Promise.all([i.e(0), i.e(26)]).then(i.t.bind(null, 2655, 7)),
        ),
        v = 18,
        h = "42000",
        C = "ETC",
        T = 61,
        A = "0",
        E = "Ethereum Classic",
        g = "m/44'/0'/0'/0/0";
      var D = new WeakMap();
      class ETCCoin extends r.default {
        constructor(e) {
          let {
            alias: t,
            notify: i,
            feeData: a,
            explorers: r,
            txWebUrl: n,
            socket: s,
            id: l,
          } = e;
          const f = {
            id: l,
            alias: t,
            notify: i,
            name: E,
            ticker: C,
            decimal: v,
            unspendableBalance: A,
            explorers: r,
            txWebUrl: n,
            socket: s,
          };
          (super(f),
            b(this, D, void 0),
            (0, c.default)(this, "web3BaseUrl", void 0),
            (0, c.default)(this, "web3", void 0),
            this.setExplorersModules([d.default, o.default]),
            this.loadExplorers(f),
            (this.derivation = g),
            (this.gasLimit = a.gasLimit),
            (this.coefficient = a.coefficient));
          const m = r.find((e) => {
            let { className: t } = e;
            return "Web3Explorer" === t;
          });
          this.web3BaseUrl = m.baseUrl;
          const u = r.find((e) => {
            let { className: t } = e;
            return "BlockscoutExplorer" === t;
          });
          this.blockscout = new d.default({ wallet: this.instance, config: u });
        }
        async setWeb3() {
          const { default: e } = await k.get();
          this.web3 = new e(this.web3BaseUrl);
        }
        async getWeb3() {
          return (this.web3 || (await this.setWeb3()), this.web3);
        }
        async getAddress() {
          return u(D, this)
            ? (await this.getWeb3()).eth.accounts.privateKeyToAccount(
                u(D, this),
              ).address
            : new Error("ETC: Coin could not get privateKey");
        }
        async loadWallet(e) {
          const [t, { hdkey: i }] = await Promise.all([
              this.getWeb3(),
              x.get(),
            ]),
            a = i.fromMasterSeed(e),
            c = a.getWallet(),
            r = await t.eth.accounts.privateKeyToAccount(
              c.getPrivateKeyString(),
            );
          if (!r) throw new Error("ETC: Coin could not load wallet");
          return (
            m(D, this, r.privateKey),
            (this.address = r.address),
            { id: this.id, privateKey: u(D, this), address: this.address }
          );
        }
        async validateAddress(e) {
          const t = await this.getWeb3();
          return t.utils.isAddress(e);
        }
        async getFee() {
          const e = await this.getGasPrice();
          return new this.BN(this.coefficient).mul(
            new this.BN(this.gasLimit).mul(new this.BN(e)),
          );
        }
        async createTransaction(e) {
          let { address: t, amount: i, paymentData: a, gas: c = h } = e;
          const r = await this.getGasPrice(),
            n = { to: t, value: i, gas: c, chainId: T, gasPrice: r };
          a && (n.data = a);
          const s = await this.getWeb3(),
            d = await s.eth.accounts.signTransaction(n, u(D, this));
          return d.rawTransaction;
        }
        async updateCoinParamsFromServer(e) {
          super.updateCoinParamsFromServer(e);
          const t = e.explorers.find((e) => {
              let { className: t } = e;
              return "Web3Explorer" === t;
            }),
            i = await this.getWeb3();
          i.currentProvider.host !== t.baseUrl &&
            ((this.web3BaseUrl = t.baseUrl), await this.setWeb3());
          const a = e.explorers.find((e) => {
            let { className: t } = e;
            return "BlockscoutExplorer" === t;
          });
          a &&
            this.blockscout.config.baseUrl !== a.baseUrl &&
            (this.blockscout = new d.default({
              wallet: this.instance,
              config: a,
            }));
        }
        async getInfo() {
          const e = await this.getWeb3(),
            t = await e.eth.getBalance(this.address);
          return ((this.balance = t), { balance: t });
        }
        async getTransactions() {
          return this.blockscout.getTransactions(...arguments);
        }
        async getGasPrice() {
          const e = await this.getWeb3(),
            t = await e.eth.getGasPrice();
          return new this.BN(t);
        }
        async sendTransaction(e) {
          return new Promise(async (t, i) => {
            const a = await this.getWeb3();
            a.eth
              .sendSignedTransaction(e)
              .on("transactionHash", (e) => {
                t({ txid: e });
              })
              .catch((e) => {
                const t = new n.ExplorerRequestError({
                  type: s.SEND_TRANSACTION_TYPE,
                  error: e,
                  instance: this,
                });
                i(t);
              });
          });
        }
        setPrivateKey(e) {
          m(D, this, e);
        }
      }
      t.default = ETCCoin;
    },
    4106: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Atomic Wallet Token","ticker":"AWC","contract":"0xad22f63404f7305e4713ccbd4f296f34770513f4","decimal":"8","visibility":true},{"name":"Tether USD","ticker":"USDT","contract":"0xdac17f958d2ee523a2206206994597c13d831ec7","decimal":"6","visibility":true},{"name":"GeminiDollar","ticker":"GUSD","contract":"0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd","decimal":"2","visibility":true},{"name":"TrueUSD","ticker":"TUSD","contract":"0x0000000000085d4780B73119b644AE5ecd22b376","decimal":"18","visibility":true},{"name":"Pax Dollar","ticker":"USDP","contract":"0x8e870d67f660d95d5be530380d0ec0bd388289e1","decimal":"18","visibility":true},{"name":"USDCoin","ticker":"USDC","contract":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","decimal":"6","visibility":true},{"name":"StableUSD","ticker":"USDS","contract":"0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe","decimal":"6","visibility":true},{"name":"Pundi X-old","ticker":"NPXS","contract":"0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3","decimal":"18","visibility":false},{"name":"Pundi X","ticker":"PUNDIX","contract":"0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38","decimal":"18","visibility":true},{"name":"Crypto.com Chain","ticker":"CRO","contract":"0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b","decimal":"8","visibility":true},{"name":"Basic Attention Token","ticker":"BAT","contract":"0x0D8775F648430679A709E98d2b0Cb6250d2887EF","decimal":"18","visibility":true},{"name":"district0x","ticker":"DNT","contract":"0x0AbdAce70D3790235af448C88547603b945604ea","decimal":"18","visibility":true},{"name":"0x","ticker":"ZRX","contract":"0xE41d2489571d322189246DaFA5ebDe1F4699F498","decimal":"18","visibility":true},{"name":"Salt","ticker":"SALT","contract":"0x4156D3342D5c385a87D264F90653733592000581","decimal":"8","visibility":true},{"name":"DigixDAO","ticker":"DGD","contract":"0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A","decimal":"9","visibility":true},{"name":"iExecRLC","ticker":"RLC","contract":"0x607F4C5BB672230e8672085532f7e901544a7375","decimal":"9","visibility":true},{"name":"Gnosis","ticker":"GNO","contract":"0x6810e776880C02933D47DB1b9fc05908e5386b96","decimal":"18","visibility":true},{"name":"Lunyr","ticker":"LUN","contract":"0xfa05A73FfE78ef8f1a739473e462c54bae6567D9","decimal":"18","visibility":true},{"name":"Augur 0ld","ticker":"REP","contract":"0x1985365e9f78359a9B6AD760e32412f4a445E862","decimal":"18","visibility":false},{"name":"Augur","ticker":"REP","contract":"0x221657776846890989a759ba2973e427dff5c9bb","decimal":"18","visibility":true},{"name":"Aragon","ticker":"ANT","contract":"0xa117000000f279D81A1D3cc75430fAA017FA5A2e","decimal":"18","visibility":true},{"name":"Bancor","ticker":"BNT","contract":"0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C","decimal":"18","visibility":true},{"name":"Civic","ticker":"CVC","contract":"0x41e5560054824eA6B0732E656E3Ad64E20e94E45","decimal":"8","visibility":true},{"name":"TenXPay","ticker":"PAY","contract":"0xB97048628DB6B661D4C2aA833e95Dbe1A905B280","decimal":"18","visibility":true},{"name":"OmiseGO","ticker":"OMG","contract":"0xd26114cd6EE289AccF82350c8d8487fedB8A0C07","decimal":"18","visibility":true},{"name":"Monaco","ticker":"MCO","contract":"0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d","decimal":"8","visibility":true},{"name":"SwarmCity","ticker":"SWT","contract":"0xB9e7F8568e08d5659f5D29C4997173d84CdF2607","decimal":"18","visibility":false},{"name":"Patientory","ticker":"PTOY","contract":"0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06","decimal":"8","visibility":false},{"name":"STORJ","ticker":"STORJ","contract":"0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC","decimal":"8","visibility":true},{"name":"FunFair","ticker":"FUN","contract":"0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b","decimal":"8","visibility":true},{"name":"Humaniq","ticker":"HMQ","contract":"0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908","decimal":"8","visibility":false},{"name":"Numeraire","ticker":"NMR","contract":"0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671","decimal":"18","visibility":true},{"name":"Golem","ticker":"GLM","contract":"0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429","decimal":"18","visibility":true},{"name":"Melon","ticker":"MLN","contract":"0xec67005c4e498ec7f55e092bd1d35cbc47c91892","decimal":"18","visibility":false},{"name":"Viberate","ticker":"VIB","contract":"0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724","decimal":"18","visibility":false},{"name":"RipioCreditNetwork","ticker":"RCN","contract":"0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6","decimal":"18","visibility":true},{"name":"PowerLedger","ticker":"POWR","contract":"0x595832f8fc6bf59c85c527fec3740a1b7a361269","decimal":"6","visibility":true},{"name":"Populous","ticker":"PPT","contract":"0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a","decimal":"8","visibility":true},{"name":"Bread","ticker":"BRD","contract":"0x558ec3152e2eb2174905cd19aea4e34a23de9ad6","decimal":"18","visibility":false},{"name":"Dentacoin","ticker":"DCN","contract":"0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6","decimal":"0","visibility":true},{"name":"SONM","ticker":"SNM","contract":"0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63","decimal":"18","visibility":true},{"name":"Aeron","ticker":"ARN","contract":"0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6","decimal":"8","visibility":true},{"name":"Polymath","ticker":"POLY","contract":"0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec","decimal":"18","visibility":true},{"name":"NEXO","ticker":"NEXO","contract":"0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206","decimal":"18","visibility":true},{"name":"EnjinCoin","ticker":"ENJ","contract":"0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c","decimal":"18","visibility":true},{"name":"KyberNetwork Legacy","ticker":"KNCL","contract":"0xdd974D5C2e2928deA5F71b9825b8b646686BD200","decimal":"18","visibility":false},{"name":"KyberNetwork v2","ticker":"KNC","contract":"0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202","decimal":"18","visibility":true},{"name":"DENT","ticker":"DENT","contract":"0x3597bfD533a99c9aa083587B074434E61Eb0A258","decimal":"8","visibility":true},{"name":"SAI","ticker":"SAI","contract":"0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359","decimal":"18","visibility":true},{"name":"ChainLinkToken","ticker":"LINK","contract":"0x514910771af9ca656af840dff83e8264ecf986ca","decimal":"18","visibility":true},{"name":"Maker","ticker":"MKR","contract":"0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2","decimal":"18","visibility":true},{"name":"Decentraland","ticker":"MANA","contract":"0x0F5D2fB29fb7d3CFeE444a200298f468908cC942","decimal":"18","visibility":true},{"name":"Kin ERC20","ticker":"KIN","contract":"0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5","decimal":"18","visibility":false},{"name":"Holo","ticker":"HOT","contract":"0x6c6ee5e31d828de241282b9606c8e98ea48526e2","decimal":"18","visibility":true},{"name":"Digitex Futures","ticker":"DGTX","contract":"0x1c83501478f1320977047008496dacbd60bb15ef","decimal":"18","visibility":true},{"name":"Sentinel","ticker":"SENT","contract":"0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037","decimal":"8","visibility":false},{"name":"UNUS SED LEO","ticker":"LEO","contract":"0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3","decimal":"18","visibility":true},{"name":"Credits","ticker":"CS","contract":"0x46b9ad944d1059450da1163511069c718f699d31","decimal":"6","visibility":true},{"name":"IQeon","ticker":"IQN","contract":"0x0db8d8b76bc361bacbb72e2c491e06085a97ab31","decimal":"18","visibility":false},{"name":"Matic ETH","ticker":"MATIC","contract":"0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0","decimal":"18","visibility":true},{"name":"Hydro","ticker":"HYDRO","contract":"0xebbdf302c940c6bfd49c6b165f457fdb324649bc","decimal":"18","visibility":true},{"name":"Metal","ticker":"MTL","contract":"0xF433089366899D83a9f26A773D59ec7eCF30355e","decimal":"8","visibility":true},{"name":"Constellation","ticker":"DAG","contract":"0xa8258abc8f2811dd48eccd209db68f25e3e34667","decimal":"8","visibility":false},{"name":"DAI","ticker":"DAI","contract":"0x6B175474E89094C44Da98b954EedeAC495271d0F","decimal":"18","visibility":true},{"name":"AmaCoin","ticker":"AMA","contract":"0x1dd0df760eb950083c1925da19fc7ac1356a190b","decimal":"18","visibility":true},{"name":"Celer","ticker":"CELR","contract":"0x4f9254c83eb525f9fcf346490bbb3ed28a81c667","decimal":"18","visibility":false},{"name":"Jobchain","ticker":"JOB","contract":"0xdfbc9050F5B01DF53512DCC39B4f2B2BBaCD517A","decimal":"8","visibility":false},{"name":"Origin Protocol","ticker":"OGN","contract":"0x8207c1ffc5b6804f6024322ccf34f29c3541ae26","decimal":"18","visibility":true},{"name":"HEX","ticker":"HEX","contract":"0x2b591e99afe9f32eaa6214f7b7629768c40eeb39","decimal":"8","visibility":true},{"name":"Binance USD","ticker":"BUSD","contract":"0x4Fabb145d64652a948d72533023f6E7A623C7C53","decimal":"18","visibility":true},{"name":"CryptoSoul","ticker":"SOUL","contract":"0xbb1f24c0c1554b9990222f036b0aad6ee4caec29","decimal":"18","visibility":false},{"name":"Reserve","ticker":"RSV","contract":"0x196f4727526eA7FB1e17b2071B3d8eAA38486988","decimal":"18","visibility":true},{"name":"Cartesi","ticker":"CTSI","contract":"0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d","decimal":"18","visibility":false},{"name":"Reserve Rights","ticker":"RSR","contract":"0x320623b8e4ff03373931769a31fc52a4e78b5d70","decimal":"18","visibility":true},{"name":"COTI","ticker":"COTI","contract":"0xddb3422497e61e13543bea06989c0789117555c5","decimal":"18","visibility":true},{"name":"Band Protocol","ticker":"BAND","contract":"0xba11d00c5f74255f56a5e366f4f77f5a186d7f55","decimal":"18","visibility":false},{"name":"Compound","ticker":"COMP","contract":"0xc00e94cb662c3520282e6f5717214004a7f26888","decimal":"18","visibility":true},{"name":"Aave","ticker":"LEND","contract":"0x80fB784B7eD66730e8b1DBd9820aFD29931aab03","decimal":"18","visibility":true},{"name":"Ren","ticker":"REN","contract":"0x408e41876cccdc0f92210600ef50372656052a38","decimal":"18","visibility":true},{"name":"Synthetix Network","ticker":"SNX","contract":"0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f","decimal":"18","visibility":true},{"name":"FTX Token","ticker":"FTT","contract":"0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9","decimal":"18","visibility":true},{"name":"ShareToken","ticker":"SHR","contract":"0xd98f75b1a3261dab9eed4956c93f33749027a964","decimal":"2","visibility":false},{"name":"Uniswap","ticker":"UNI","contract":"0x1f9840a85d5af5bf1d1762f925bdaddc4201f984","decimal":"18","visibility":true},{"name":"Aave","ticker":"AAVE","contract":"0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9","decimal":"18","visibility":true},{"name":"SHIBA INU","ticker":"SHIB","contract":"0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce","decimal":"18","visibility":true},{"name":"Aelf","ticker":"ELF","contract":"0xbf2179859fc6d5bee9bf9158632dc51678a4100e","decimal":"18","visibility":true},{"name":"Axie Infinity","ticker":"AXS","contract":"0xbb0e17ef65f82ab018d8edd776e8dd940327b28b","decimal":"18","visibility":true},{"name":"SushiSwap","ticker":"SUSHI","contract":"0x6b3595068778dd592e39a122f4f5a5cf09c90fe2","decimal":"18","visibility":true},{"name":"Chiliz","ticker":"CHZ","contract":"0x3506424f91fd33084466f402d5d97f05f8e3b4af","decimal":"18","visibility":true},{"name":"Chromia","ticker":"CHR","contract":"0x8a2279d4a90b6fe1c4b30fa660cc9f926797baa2","decimal":"6","visibility":true},{"name":"Graph","ticker":"GRT","contract":"0xc944e90c64b2c07662a292be6244bdf05cda44a7","decimal":"18","visibility":true},{"name":"Quant","ticker":"QNT","contract":"0x4a220e6096b25eadb88358cb44068a3248254675","decimal":"18","visibility":true},{"name":"StatusNetwork","ticker":"SNT","contract":"0x744d70fdbe2ba4cf95131626614a1763df805b9e","decimal":"18","visibility":true},{"name":"1inch","ticker":"1INCH","contract":"0x111111111117dc0aa78b770fa6a738034120c302","decimal":"18","visibility":true},{"name":"The Sandbox","ticker":"SAND","contract":"0x3845badAde8e6dFF049820680d1F14bD3903a5d0","decimal":"18","visibility":true},{"name":"Fantom","ticker":"FTM","contract":"0x4e15361fd6b4bb609fa63c81a2be19d873717870","decimal":"18","visibility":true},{"name":"Gala","ticker":"GALA","contract":"0x15d4c048f83bd7e37d49ea4c83a07267ec4203da","decimal":"8","visibility":true},{"name":"Amp","ticker":"AMP","contract":"0xff20817765cb7f73d4bde2e66e067e58d11095c2","decimal":"18","visibility":true},{"name":"ApeCoin","ticker":"APE","contract":"0x4d224452801aced8b2f0aebe155379bb5d594381","decimal":"18","visibility":true},{"name":"Lido DAO","ticker":"LDO","contract":"0x5a98fcbea516cf06857215779fd812ca3bef1b32","decimal":"18","visibility":true},{"name":"Yearn.finance","ticker":"YFI","contract":"0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e","decimal":"18","visibility":true},{"name":"Balancer","ticker":"BAL","contract":"0xba100000625a3754423978a60c9317c58a424e3D","decimal":"18","visibility":true},{"name":"Ethereum Name Service","ticker":"ENS","contract":"0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72","decimal":"18","visibility":true},{"name":"APENFT","ticker":"NFT","contract":"0x198d14f2ad9ce69e76ea330b374de4957c3f850a","decimal":"6","visibility":true},{"name":"Loopring","ticker":"LRC","contract":"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd","decimal":"18","visibility":true},{"name":"Verasity","ticker":"VRA","contract":"0xf411903cbc70a74d22900a5de66a2dda66507255","decimal":"18","visibility":true},{"name":"Wrapped Bitcoin","ticker":"WBTC","contract":"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599","decimal":"8","visibility":true},{"name":"Huobi Token","ticker":"HT","contract":"0x6f259637dcd74c767781e37bc6133cd6a68aa161","decimal":"18","visibility":true},{"name":"PAX Gold","ticker":"PAXG","contract":"0x45804880de22913dafe09f4980848ece6ecbaf78","decimal":"18","visibility":true},{"name":"Convex Finance","ticker":"CVX","contract":"0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b","decimal":"18","visibility":true},{"name":"Audius","ticker":"AUDIO","contract":"0x18aaa7115705e8be94bffebde57af9bfc265b998","decimal":"18","visibility":true},{"name":"Livepeer","ticker":"LPT","contract":"0x58b6a8a3302369daec383334672404ee733ab239","decimal":"18","visibility":true},{"name":"Celsius","ticker":"CEL","contract":"0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d","decimal":"4","visibility":true},{"name":"SwissBorg","ticker":"CHSB","contract":"0xba9d4199fab4f26efe3551d490e3821486f135ba","decimal":"8","visibility":true},{"name":"Swipe","ticker":"SXP","contract":"0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9","decimal":"18","visibility":true},{"name":"Dogelon Mars","ticker":"ELON","contract":"0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3","decimal":"18","visibility":true},{"name":"Ocean Protocol","ticker":"OCEAN","contract":"0x967da4048cd07ab37855c090aaf366e4ce1b9f48","decimal":"18","visibility":true},{"name":"Curve DAO","ticker":"CRV","contract":"0xd533a949740bb3306d119cc777fa900ba034cd52","decimal":"18","visibility":true},{"name":"Oasis Network","ticker":"ROSE","contract":"0x26b80fbfc01b71495f477d5237071242e0d959d7","decimal":"18","visibility":true},{"name":"Reef","ticker":"REEF","contract":"0xfe3e6a25e6b192a42a44ecddcd13796471735acf","decimal":"18","visibility":true},{"name":"Wrapped TON Coin","ticker":"TONCOIN","contract":"0x582d872a1b094fc48f5de31d3b73f2d9be47def1","decimal":"9","visibility":true},{"name":"Liquid staked Ether 2.0","ticker":"stETH","contract":"0xae7ab96520de3a18e5e111b5eaab095312d7fe84","decimal":"18","visibility":true},{"name":"BitDAO","ticker":"BIT","contract":"0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5","decimal":"18","visibility":true},{"name":"Chain","ticker":"XCN","contract":"0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18","decimal":"18","visibility":true}]',
      );
    },
    4919: function (e, t, i) {
      "use strict";
      var a = i(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var c = a(i(8)),
        r = a(i(129)),
        n = i(27),
        s = i(19),
        d = a(i(80)),
        o = a(i(4106)),
        l = a(i(28)),
        b = i(4);
      const f = "GetUserTokens";
      class BlockscoutExplorer extends r.default {
        getAllowedTickers() {
          return ["ETH", "ETC", "FLR"];
        }
        async request(e, t, i, a) {
          (void 0 === t && (t = "get"),
            void 0 === i && (i = {}),
            void 0 === a && (a = n.UNDEFINED_OPERATION_ERROR));
          const c = await super.request(e, t, i, a);
          if ("0" === c.status) {
            if ([f, n.GET_TRANSACTIONS_TYPE].includes(a)) return [];
            throw new s.ExplorerRequestError({
              type: a,
              error: c.message,
              url: `${this.config.baseUrl}${e}`,
              instance: this,
            });
          }
          return c.result ? c.result : c;
        }
        getInfoUrl(e) {
          return this.getApiPrefix();
        }
        getTokenInfoParams(e) {
          return { module: "account", action: "tokenlist", address: e };
        }
        getInfoParams(e) {
          return { module: "account", action: "balance", address: e };
        }
        async getInfo(e) {
          const t = await this.request(
            this.getInfoUrl(e),
            this.getInfoMethod(),
            this.getInfoParams(e),
            n.GET_BALANCE_TYPE,
          );
          return this.modifyInfoResponse({ balance: t });
        }
        async getTokensInfo(e, t) {
          const i = await this.request(
            this.getInfoUrl(t),
            this.getInfoMethod(),
            this.getTokenInfoParams(t),
            n.GET_BALANCE_TYPE,
          );
          return this.modifyInfoResponse({ tokens: i });
        }
        modifyInfoResponse(e) {
          return {
            balance: e.balance,
            tokensBalances: e.tokens || [],
            transactions: [],
          };
        }
        getTransactionsUrl(e) {
          return this.getApiPrefix();
        }
        getTransactionsParams(e, t, i) {
          return { module: "account", action: "txlist", address: e };
        }
        getTransferParams(e, t, i) {
          return { module: "account", action: "tokentx", address: e };
        }
        async getTransactions(e) {
          let { address: t, offset: i = 0, limit: a = this.defaultTxLimit } = e;
          try {
            var c;
            const e = await this.request(
                this.getTransactionsUrl(t),
                this.getTransactionsMethod(),
                this.getTransactionsParams(t, i, a),
                n.GET_TRANSACTIONS_TYPE,
              ).catch(() => []),
              r = ["ETH", "FLR"].includes(this.wallet.ticker)
                ? await this.request(
                    this.getTransactionsUrl(t),
                    this.getTransactionsMethod(),
                    this.getTransferParams(t, i, a),
                    n.GET_TRANSACTIONS_TYPE,
                  ).catch(() => [])
                : [],
              s = this.modifyTokenTransactionsResponse(
                null !==
                  (c = null === r || void 0 === r ? void 0 : r.reverse()) &&
                  void 0 !== c
                  ? c
                  : [],
                t,
              ),
              d = this.modifyTransactionsResponse(
                e
                  .filter((e) => {
                    let { input: t } = e;
                    return "0x" === t;
                  })
                  .reverse(),
                t,
              );
            return d.concat(s);
          } catch (r) {
            return (console.error(r), []);
          }
        }
        modifyTokenTransactionsResponse(e, t) {
          return e.map(
            (e) =>
              new d.default({
                walletid: (0, b.getTokenId)({
                  ticker: e.tokenSymbol,
                  parent: this.wallet.ticker,
                  contract: e.contractAddress,
                }),
                ticker: e.tokenSymbol,
                name: e.tokenName,
                txid: this.getTxHash(e),
                fee: this.getTxFee(e),
                feeTicker: this.wallet.parent,
                direction: this.getTxDirection(t, e),
                otherSideAddress: this.getTxOtherSideAddress(t, e),
                amount: this.getTxValue(t, e),
                datetime: this.getTxDateTime(e),
                memo: this.getTxMemo(e),
                nonce: this.getTxNonce(e),
                confirmations: this.getTxConfirmations(e),
                alias: this.wallet.alias,
              }),
          );
        }
        getTxNonce(e) {
          return e.nonce;
        }
        getTxHash(e) {
          return e.hash;
        }
        getTxDateTime(e) {
          return new Date(Number(e.timeStamp + "000"));
        }
        getTxDirection(e, t) {
          return e.toLowerCase() !== t.from.toLowerCase();
        }
        getTxOtherSideAddress(e, t) {
          return e.toLowerCase() === t.from.toLowerCase() ? t.to : t.from;
        }
        getTxValue(e, t) {
          return (t.contractAddress, this.wallet.toCurrencyUnit(t.value));
        }
        getTxConfirmations(e) {
          return Number(e.confirmations);
        }
        getUserTokenListUrl(e) {
          return this.getApiPrefix();
        }
        modifyTokenListResponse(e) {
          return e.data;
        }
        async getTokenList() {
          let e;
          try {
            e = await c.default.get("ethereum-tokens");
          } catch (t) {
            l.default.error({ instance: this, error: t });
          }
          return e || o.default;
        }
        async getBannedTokensList() {
          let e;
          try {
            e = await c.default.get("ethereum-tokens-banned");
          } catch (t) {
            l.default.error({ instance: this, error: t });
          }
          return JSON.stringify(e) || [];
        }
        async getUserTokenList(e) {
          if (!e) return [];
          try {
            const t = await this.request(
              this.getUserTokenListUrl(),
              this.getInfoMethod(),
              this.getTokenInfoParams(e),
              f,
            );
            return t || [];
          } catch (t) {
            return [];
          }
        }
        getTxFee(e) {
          const t = new this.wallet.BN(e.gasUsed),
            i = new this.wallet.BN(e.gasPrice),
            a = new this.wallet.BN(this.wallet.feeCoefficient || 1),
            c = a.mul(t.mul(i)).toString();
          return this.wallet.toCurrencyUnit(c);
        }
      }
      t.default = BlockscoutExplorer;
    },
  },
]);
