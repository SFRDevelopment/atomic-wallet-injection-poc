(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [365],
  {
    2742: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(5372),
        s = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(a);
      var r = n(8850),
        o = n(5);
      function m(e) {
        n(8848);
      }
      var p = !1,
        l = m,
        d = null,
        c = null,
        b = Object(o["a"])(s.a, r["a"], r["b"], p, l, d, c);
      t["default"] = b.exports;
    },
    5372: function (e, t, n) {
      "use strict";
      var i = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var s = n(60),
        a = i(n(798));
      t.default = {
        name: "MembershipTab",
        data() {
          return {
            amount: Number(
              localStorage.getItem("membership-page:amount") || "0",
            ),
          };
        },
        computed: {
          ...(0, s.mapGetters)(["hasTransaction"]),
          settings() {
            return this.$cashback.currentLevel(this.amount);
          },
          statusText() {
            var e;
            return null !== (e = this.settings) &&
              void 0 !== e &&
              e.text &&
              "basic" !== this.settings.class
              ? this.$t(
                  "settingsPage.membershipTab.status." +
                    this.settings.text.toLowerCase(),
                )
              : this.$t("settingsPage.membershipTab.status.notMember");
          },
        },
        async mounted() {
          this.$ga.event("User Movement", "membership-page", {
            clientID: this.$ga.customParams.uid,
          });
          const e = localStorage.getItem("membership-page:amount");
          null !== e && (this.amount = Number(e));
          const t = await this.$membership.getBalance();
          ((this.amount = t),
            localStorage.setItem("membership-page:amount", t.toString()));
        },
        methods: {
          formatFinance: a.default,
          neededAmount(e) {
            const t = e - this.amount;
            return t < 0 ? "0" : String(Math.ceil(t));
          },
          isNeededAmount(e) {
            return 0 !== e && 0 !== Number(this.neededAmount(e));
          },
          openCashbackExchange() {
            const e = Object.values(this.$wallets.getWallet("BSC").tokens).find(
                (e) => {
                  let { ticker: t } = e;
                  return "AWC" === t;
                },
              ),
              t = this.$wallets.getWallet("ETH");
            (this.$ga.event("User Actions", "Buy AWC Popup", {
              clientID: this.$ga.customParams.uid,
            }),
              this.$router.push({
                path: "/exchange",
                query: { coinToReceive: e.id, coinToSend: t.id },
              }));
          },
        },
      };
    },
    8848: function (e, t, n) {
      var i = n(8849);
      (i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[e.i, i, ""]]),
        i.locals && (e.exports = i.locals));
      var s = n(23).default;
      s("4425536c", i, !0, {});
    },
    8849: function (e, t, n) {
      ((t = e.exports = n(22)(!1)),
        t.push([
          e.i,
          '\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.membership{height:calc(100vh - 60px)\n}\n.membership .header-wrap{display:flex;justify-content:flex-end;align-items:center;gap:30px;padding:30px\n}\n.membership .header-wrap .status{display:flex;align-items:center;gap:5px\n}\n.membership .header-wrap .status span,.membership .header-wrap .balance,.membership .header-wrap .balance span{font-size:14px;color:#fff\n}\n.membership .header-wrap .balance{color:#778697;display:flex;align-items:center\n}\n.membership .header-wrap .text-white{color:#fff\n}\n.membership .header-wrap .svg-icon{fill:rgba(0,0,0,0);width:24px;height:24px;margin-right:12px;position:relative;top:-2px\n}\n.membership .body{padding-top:20px;overflow-y:overlay;position:relative;height:100%;padding-bottom:100px\n}\n.membership .body .text-info,.membership .body .readmore{font-size:12px;line-height:20px;text-align:center;color:#f7f7f7\n}\n.membership .body .text-info{max-width:480px;margin:auto\n}\n.membership .body .readmore{color:#1f8efa;text-decoration:underline;cursor:pointer\n}\n.membership .body .readmore:hover{text-decoration:none\n}\n.membership .body .settings{display:flex;text-align:center;align-items:flex-start;margin:50px 0 0\n}\n.membership .body .settings .item{border:1px solid rgba(119,134,151,.4784313725);border-right:0;padding:20px 0;flex:1\n}\n.membership .body .settings .item .svg-success{fill:rgba(0,0,0,0);width:12px\n}\n.membership .body .settings .item.silver{background:#2f3951;border-radius:4px;border:0;top:-12px;position:relative;padding:32px 0;overflow:hidden\n}\n.membership .body .settings .item.silver .button:before{background:rgba(0,0,0,0)\n}\n.membership .body .settings .item.silver.selected{padding:20px 0;background:rgba(0,0,0,0);top:0;border-radius:0;border:1px solid rgba(119,134,151,.4784313725)\n}\n.membership .body .settings .item.gold{border-left:0\n}\n.membership .body .settings .item:last-child{border-right:1px solid rgba(119,134,151,.4784313725)\n}\n.membership .body .settings .item .choice{text-align:center;letter-spacing:.05em;text-transform:uppercase;font-size:10px;line-height:14px;color:#f7f7f7;transform:rotate(45deg);position:absolute;right:4px;top:8px\n}\n.membership .body .settings .item .choice:before{content:"";width:0;height:0;border-right:50px solid rgba(0,0,0,0);border-left:50px solid rgba(0,0,0,0);border-bottom:50px solid #2fa6fa;position:absolute;z-index:-1;top:-22px;right:-34px\n}\n.membership .body .settings .item .atomic{position:relative\n}\n.membership .body .settings .item .atomic .background{position:absolute;width:50px;height:calc(100% - 10px);z-index:0;top:5px;left:calc(50% - 25px);border-radius:100%\n}\n.membership .body .settings .item .atomic .icon-awc{font-size:56px;position:relative;z-index:1\n}\n.membership .body .settings .item .atomic.basic .icon-awc{background:#404a65\n}\n.membership .body .settings .item .atomic.basic .background{background:#dadada\n}\n.membership .body .settings .item .atomic.blue .icon-awc{background:#00c2ff\n}\n.membership .body .settings .item .atomic.blue .background{background:#fff\n}\n.membership .body .settings .item .atomic.silver .icon-awc{background:linear-gradient(180deg, #FAFAFA 0%, #B7B5B5 100%)\n}\n.membership .body .settings .item .atomic.silver .background{background:#fff\n}\n.membership .body .settings .item .atomic.gold .icon-awc{background:linear-gradient(180deg, #FFE957 0%, #FFA420 100%)\n}\n.membership .body .settings .item .atomic.gold .background{background:#fff\n}\n.membership .body .settings .item .atomic.platinum .icon-awc{background:linear-gradient(180deg, #9098E9 0%, #3B45A4 100%)\n}\n.membership .body .settings .item .atomic.platinum .background{background:#fff\n}\n.membership .body .settings .item .status{font-size:14px;line-height:24px;margin-bottom:24px\n}\n.membership .body .settings .item .percent{font-size:30px;line-height:48px;margin:20px 0 8px;font-weight:300\n}\n.membership .body .settings .item .title{font-size:14px;line-height:24px\n}\n.membership .body .settings .item .limit{font-size:10px;line-height:20px;color:#778697;margin-bottom:16px\n}\n.membership .body .settings .item .step-completed{position:relative;height:39px;display:flex;justify-content:center;align-items:center\n}\n.membership .body .settings .item .step-completed .background{background:#fff;opacity:.2;border-radius:48px;width:40px;height:40px;position:absolute;top:0;left:50%;transform:translateX(-50%)\n}\n.membership .body .settings .item .step-completed svg{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)\n}\n.membership .body .settings .item .button{background:linear-gradient(90deg, #169DCA 0%, #36C290 100%);border-radius:48px;border:0;box-shadow:none;padding:8px 17px;position:relative;overflow:hidden\n}\n.membership .body .settings .item .button:hover:before{background:rgba(0,0,0,0)\n}\n.membership .body .settings .item .button:before{content:" ";background:#1f2843;position:absolute;width:calc(100% - 4px);height:calc(100% - 4px);left:0;top:0;border-radius:48px;z-index:0;transition:all .3s ease-out;margin:2px\n}\n.membership .body .settings .item .button.no-transactions{width:39.5px;height:39.5px\n}\n.membership .body .settings .item .button.no-transactions span{left:-3px;top:-3px\n}\n.membership .body .settings .item .button span{letter-spacing:.05em;font-size:12px;line-height:20px;color:#fafafa;position:relative;z-index:1\n}\n@media(min-width: 1200px){\n.membership .header-wrap .status span,.membership .header-wrap .balance,.membership .header-wrap .balance span{font-size:16px;line-height:26px\n}\n.membership .header-wrap .balance{margin-left:48px\n}\n.membership .header-wrap .svg-icon{margin-right:17px\n}\n.membership .body .text-info,.membership .body .readmore{font-size:16px;line-height:26px\n}\n.membership .body .settings{padding:0 25px\n}\n.membership .body .settings .item:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px\n}\n.membership .body .settings .item:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px\n}\n.membership .body .settings .item .choice{font-size:12px;line-height:16px;right:6px;top:12px\n}\n.membership .body .settings .item .choice:before{border-right:60px solid rgba(0,0,0,0);border-left:60px solid rgba(0,0,0,0);border-bottom:60px solid #2fa6fa;top:-27px;right:-40px\n}\n.membership .body .settings .item .atomic .background{width:56px;left:calc(50% - 28px)\n}\n.membership .body .settings .item .atomic .icon-awc{font-size:64px\n}\n.membership .body .settings .item .status{font-size:16px;line-height:26px;margin-bottom:16px\n}\n.membership .body .settings .item .percent{font-size:42px;line-height:60px;margin:16px 0\n}\n.membership .body .settings .item .title{font-size:16px;line-height:26px;margin-bottom:4px\n}\n.membership .body .settings .item .limit{font-size:14px;line-height:24px;margin-bottom:24px\n}\n.membership .body .settings .item .step-completed{height:47px\n}\n.membership .body .settings .item .step-completed .background{width:48px;height:48px\n}\n.membership .body .settings .item .button{padding:12px 20px\n}\n.membership .body .settings .item .button span{font-size:14px;line-height:20px\n}\n.membership .body .settings .item .button.no-transactions{width:45.5px;height:45.5px\n}\n}\n@media(min-width: 1440px){\n.membership .header-wrap .status span,.membership .header-wrap .balance,.membership .header-wrap .balance span{font-size:20px;line-height:32px\n}\n.membership .header-wrap .svg-icon{width:32px;height:32px;top:-4px\n}\n.membership .body{padding-top:30px\n}\n.membership .body .text-info,.membership .body .readmore{font-size:20px;line-height:32px\n}\n.membership .body .settings{padding:0 5%;margin-top:80px\n}\n.membership .body .settings .item{padding:40px 0 60px\n}\n.membership .body .settings .item.silver{padding:52px 0 72px\n}\n.membership .body .settings .item.silver.selected{padding:40px 0 60px\n}\n.membership .body .settings .item .choice{font-size:16px;line-height:24px\n}\n.membership .body .settings .item .choice:before{border-right:75px solid rgba(0,0,0,0);border-left:75px solid rgba(0,0,0,0);border-bottom:75px solid #2fa6fa;top:-28px;right:-46px\n}\n.membership .body .settings .item .atomic .background{width:80px;left:calc(50% - 40px)\n}\n.membership .body .settings .item .atomic .icon-awc{font-size:94px\n}\n.membership .body .settings .item .status{font-size:20px;line-height:32px;margin-bottom:28px\n}\n.membership .body .settings .item .percent{font-size:50px;line-height:60px;margin:40px 0 24px\n}\n.membership .body .settings .item .title{font-size:20px;line-height:32px\n}\n.membership .body .settings .item .limit{font-size:16px;line-height:26px;margin-bottom:36px\n}\n.membership .body .settings .item .step-completed{height:52px\n}\n.membership .body .settings .item .step-completed .background{width:56px;height:56px\n}\n.membership .body .settings .item .button{padding:14px 25px\n}\n.membership .body .settings .item .button span{font-size:16px;line-height:24px\n}\n.membership .body .settings .item .button.no-transactions{width:52.5px;height:52.5px\n}\n.membership .body .settings .item .button.no-transactions span{left:-3px\n}\n}',
          "",
        ]));
    },
    8850: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        }));
      var i = function () {
          var e = this,
            t = e.$createElement,
            i = e._self._c || t;
          return i("main", { staticClass: "membership" }, [
            i("div", { staticClass: "header-wrap" }, [
              i("div", { staticClass: "status" }, [
                i("img", {
                  staticClass: "svg-icon svg-fill",
                  attrs: {
                    src: n(8851)(
                      "./membership-" +
                        (void 0 === e.settings ? "" : e.settings.class) +
                        ".svg",
                    ),
                  },
                }),
                e._v(" "),
                i(
                  "span",
                  { attrs: { "data-test-id": "settings-membership-status" } },
                  [e._v("\n        " + e._s(e.statusText) + "\n      ")],
                ),
              ]),
              e._v(" "),
              i("div", { staticClass: "balance" }, [
                i("img", {
                  staticClass: "svg-icon svg-fill",
                  attrs: { src: n(888) },
                }),
                e._v(
                  "\n      " +
                    e._s(e.$t("settingsPage.membershipTab.youHave")) +
                    " \n      ",
                ),
                i(
                  "span",
                  {
                    staticClass: "text-white",
                    attrs: { "data-test-id": "settings_awc_balance" },
                  },
                  [e._v("\n        " + e._s(e.formatFinance(e.amount)) + " ")],
                ),
                e._v("\n         AWC\n    "),
              ]),
            ]),
            e._v(" "),
            i("div", { staticClass: "body" }, [
              i("div", { staticClass: "text-info" }, [
                i("span", {
                  directives: [
                    {
                      name: "text-html",
                      rawName: "v-text-html",
                      value: e.$t("settingsPage.membershipTab.awcCashbackInfo"),
                      expression:
                        "$t('settingsPage.membershipTab.awcCashbackInfo')",
                    },
                  ],
                }),
                e._v("\n       \n      "),
                i(
                  "a",
                  {
                    staticClass: "readmore",
                    on: {
                      click: function (t) {
                        return e.$electron.openExternal(
                          "https://atomicwallet.io/membership",
                        );
                      },
                    },
                  },
                  [
                    e._v(
                      "\n        " + e._s(e.$t("button.readMore")) + "\n      ",
                    ),
                  ],
                ),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "settings" },
                e._l(e.$cashback.settings, function (t, s) {
                  return i(
                    "div",
                    {
                      key: s,
                      staticClass: "item",
                      class: [
                        t.class,
                        {
                          selected:
                            "silver" === t.class && !e.isNeededAmount(t.minAWC),
                        },
                      ],
                    },
                    [
                      "silver" === t.class && e.isNeededAmount(t.minAWC)
                        ? i("div", {
                            directives: [
                              {
                                name: "text-html",
                                rawName: "v-text-html",
                                value: e.$t(
                                  "settingsPage.membershipTab.usersChoice",
                                ),
                                expression:
                                  "$t('settingsPage.membershipTab.usersChoice')",
                              },
                            ],
                            staticClass: "choice",
                          })
                        : e._e(),
                      e._v(" "),
                      i("div", { staticClass: "status" }, [
                        e._v("\n          " + e._s(t.text) + "\n        "),
                      ]),
                      e._v(" "),
                      i("div", { staticClass: "atomic", class: t.class }, [
                        i("div", { staticClass: "background" }),
                        e._v(" "),
                        i("div", { staticClass: "icon-awc" }),
                      ]),
                      e._v(" "),
                      "basic" === t.class
                        ? i("div", { staticClass: "percent" }, [
                            e._v("\n          5 AWC\n        "),
                          ])
                        : i("div", { staticClass: "percent" }, [
                            e._v(
                              "\n          " +
                                e._s(100 * t.percent) +
                                "%\n        ",
                            ),
                          ]),
                      e._v(" "),
                      i("div", { staticClass: "title" }, [
                        e._v(
                          "\n          " +
                            e._s(e.$t("settingsPage.membershipTab.cashback")) +
                            "\n        ",
                        ),
                      ]),
                      e._v(" "),
                      "basic" === t.class
                        ? i("div", { staticClass: "limit" }, [
                            e._v(
                              "\n          " +
                                e._s(
                                  e.$t(
                                    "settingsPage.membershipTab.oneTimeBonus",
                                  ),
                                ) +
                                "\n        ",
                            ),
                          ])
                        : i("div", { staticClass: "limit" }, [
                            e._v(
                              "\n          " +
                                e._s(
                                  e.$t(
                                    "settingsPage.membershipTab.maxItemLimit",
                                    { limit: t.limit },
                                  ),
                                ) +
                                "\n        ",
                            ),
                          ]),
                      e._v(" "),
                      e.isNeededAmount(t.minAWC)
                        ? i(
                            "button",
                            {
                              staticClass: "button",
                              attrs: { "data-test-id": "buy-membership" },
                              on: { click: e.openCashbackExchange },
                            },
                            [
                              i("span", [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.$t("settingsPage.membershipTab.buy"),
                                    ) +
                                    "\n            " +
                                    e._s(
                                      e.formatFinance(e.neededAmount(t.minAWC)),
                                    ) +
                                    " AWC\n          ",
                                ),
                              ]),
                            ],
                          )
                        : "basic" !== t.class || e.hasTransaction
                          ? i("div", { staticClass: "step-completed" }, [
                              i("div", { staticClass: "background" }),
                              e._v(" "),
                              i("img", {
                                staticClass: "svg-success",
                                attrs: { src: n(865) },
                              }),
                            ])
                          : i(
                              "button",
                              { staticClass: "button no-transactions" },
                              [e._m(0, !0)],
                            ),
                    ],
                  );
                }),
                0,
              ),
            ]),
          ]);
        },
        s = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("span", [
              i("img", { staticClass: "svg-success", attrs: { src: n(865) } }),
            ]);
          },
        ];
    },
    8851: function (e, t, n) {
      var i = {
        "./membership-basic.svg": 903,
        "./membership-blue.svg": 904,
        "./membership-gold.svg": 905,
        "./membership-platinum.svg": 906,
        "./membership-silver.svg": 907,
      };
      function s(e) {
        var t = a(e);
        return n(t);
      }
      function a(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[e];
      }
      ((s.keys = function () {
        return Object.keys(i);
      }),
        (s.resolve = a),
        (e.exports = s),
        (s.id = 8851));
    },
  },
]);
