(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [386],
  {
    2739: function (a, t, n) {
      "use strict";
      n.r(t);
      var e = n(5366),
        d = n.n(e);
      for (var i in e)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            n.d(t, a, function () {
              return e[a];
            });
          })(i);
      var r = n(8830),
        o = n(5);
      function s(a) {
        n(8828);
      }
      var l = !1,
        f = s,
        p = "data-v-44f883d4",
        c = null,
        v = Object(o["a"])(d.a, r["a"], r["b"], l, f, p, c);
      t["default"] = v.exports;
    },
    5366: function (a, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "MemesExchange",
        computed: {
          tabs() {
            return [
              {
                title: this.$t("exchangePage.tabs.instantSwap"),
                route: {
                  path: `/memes/${this.$route.params.tickerToSend}/${this.$route.params.id}`,
                  query: this.$route.query || {},
                },
              },
              {
                title: this.$t("exchangePage.tabs.orderHistory"),
                route: {
                  path: `/memes/${this.$route.params.tickerToSend}/${this.$route.params.id}/history`,
                  query: this.$route.query || {},
                },
              },
            ];
          },
        },
      };
    },
    8828: function (a, t, n) {
      var e = n(8829);
      (e.__esModule && (e = e.default),
        "string" === typeof e && (e = [[a.i, e, ""]]),
        e.locals && (a.exports = e.locals));
      var d = n(23).default;
      d("4a029594", e, !0, {});
    },
    8829: function (a, t, n) {
      ((t = a.exports = n(22)(!1)),
        t.push([
          a.i,
          "\n@keyframes spinner-data-v-44f883d4{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-44f883d4{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-44f883d4{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-44f883d4{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-44f883d4{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-44f883d4{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-44f883d4{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-44f883d4{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-44f883d4{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-44f883d4{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-44f883d4{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-44f883d4]{color:#6b963b\n}\n.text-red[data-v-44f883d4]{color:#c03647\n}\n.text-gray[data-v-44f883d4]{color:#8290ad\n}\n.text-blue[data-v-44f883d4]{color:#00c2ff\n}\n.text-danger[data-v-44f883d4]{color:#8c4545\n}\n.text-title[data-v-44f883d4]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-44f883d4]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-44f883d4]{color:#f1b70b\n}\n.text-white[data-v-44f883d4]{color:#fff\n}\n.text-bigger[data-v-44f883d4]{font-size:18px;font-weight:500\n}\n.text-big[data-v-44f883d4]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-44f883d4]{font-size:14px\n}\n.text-middle-height[data-v-44f883d4]{line-height:24px\n}\n.text-small[data-v-44f883d4]{font-size:12px\n}\n.text-word-break[data-v-44f883d4]{word-break:break-all\n}\n.text-right[data-v-44f883d4]{text-align:right\n}\n.text-left[data-v-44f883d4]{text-align:left\n}\n.text-line-middle[data-v-44f883d4]{line-height:24px\n}\n.text-link[data-v-44f883d4],.text-link-underline[data-v-44f883d4]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-44f883d4]:hover,.text-link-underline[data-v-44f883d4]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-44f883d4]{text-decoration:underline\n}\n.text-center[data-v-44f883d4]{text-align:center\n}\n.text-pointer[data-v-44f883d4]{cursor:pointer\n}\n.gap-10[data-v-44f883d4]{gap:10px\n}\n.m-t-auto[data-v-44f883d4]{margin-top:auto\n}\n.m-t-4[data-v-44f883d4]{margin-top:4px\n}\n.m-t-5[data-v-44f883d4]{margin-top:5px\n}\n.m-t-8[data-v-44f883d4]{margin-top:10px\n}\n.m-t-10[data-v-44f883d4]{margin-top:10px\n}\n.m-t-13[data-v-44f883d4]{margin-top:10px\n}\n.m-t-15[data-v-44f883d4]{margin-top:15px\n}\n.m-t-16[data-v-44f883d4]{margin-top:16px\n}\n.m-t-20[data-v-44f883d4]{margin-top:20px\n}\n.m-t-24[data-v-44f883d4]{margin-top:24px\n}\n.m-t-25[data-v-44f883d4]{margin-top:25px\n}\n.m-t-26[data-v-44f883d4]{margin-top:26px\n}\n.m-t-30[data-v-44f883d4]{margin-top:30px\n}\n.m-t-35[data-v-44f883d4]{margin-top:35px\n}\n.m-t-40[data-v-44f883d4]{margin-top:40px\n}\n.m-t-45[data-v-44f883d4]{margin-top:45px\n}\n.m-t-50[data-v-44f883d4]{margin-top:50px\n}\n.m-t-60[data-v-44f883d4]{margin-top:60px\n}\n.m-t-65[data-v-44f883d4]{margin-top:65px\n}\n.m-t-80[data-v-44f883d4]{margin-top:80px\n}\n.m-l-5[data-v-44f883d4]{margin-left:5px\n}\n.m-l-10[data-v-44f883d4]{margin-left:10px\n}\n.m-l-15[data-v-44f883d4]{margin-left:15px\n}\n.m-l-20[data-v-44f883d4]{margin-left:20px\n}\n.m-l-25[data-v-44f883d4]{margin-left:25px\n}\n.m-l-30[data-v-44f883d4]{margin-left:30px\n}\n.m-l-35[data-v-44f883d4]{margin-left:35px\n}\n.m-r-5[data-v-44f883d4]{margin-right:5px\n}\n.m-r-10[data-v-44f883d4]{margin-right:10px\n}\n.m-r-15[data-v-44f883d4]{margin-right:15px\n}\n.m-r-30[data-v-44f883d4]{margin-right:30px\n}\n.m-b-5[data-v-44f883d4]{margin-bottom:5px !important\n}\n.m-b-15[data-v-44f883d4]{margin-bottom:15px !important\n}\n.m-b-20[data-v-44f883d4]{margin-bottom:20px !important\n}\n.m-b-30[data-v-44f883d4]{margin-bottom:30px !important\n}\n.m-b-25[data-v-44f883d4]{margin-bottom:25px !important\n}\n.m-b-50[data-v-44f883d4]{margin-bottom:50px !important\n}\n.p-t-40[data-v-44f883d4]{padding-top:40px\n}\n.p-t-85[data-v-44f883d4]{padding-top:85px !important\n}\n.hidden[data-v-44f883d4]{opacity:0 !important\n}\n.relative[data-v-44f883d4]{position:relative\n}\n.space-nowrap[data-v-44f883d4]{white-space:nowrap\n}\n.uppercase[data-v-44f883d4]{text-transform:uppercase\n}\n.lowercase[data-v-44f883d4]{text-transform:lowercase\n}\n.fade-enter-active[data-v-44f883d4]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-44f883d4]{transition:all .1s ease-out\n}\n.fade-enter[data-v-44f883d4],.fade-leave-to[data-v-44f883d4]{opacity:0\n}\n.fade-down-enter-active[data-v-44f883d4],.fade-down-leave-active[data-v-44f883d4],.fade-down-move[data-v-44f883d4]{transition:all .15s\n}\n.fade-down-leave-active[data-v-44f883d4],.fade-down-enter-active[data-v-44f883d4]{position:absolute !important\n}\n.fade-down-enter[data-v-44f883d4],.fade-down-leave-to[data-v-44f883d4]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-44f883d4],.scale-leave-active[data-v-44f883d4],.scale-move[data-v-44f883d4]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-44f883d4],.scale-leave-to[data-v-44f883d4]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-44f883d4],.slide-leave-active[data-v-44f883d4]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-44f883d4]{transition:all .2s ease\n}\n.slide-leave-active[data-v-44f883d4]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-44f883d4],.slide-leave-to[data-v-44f883d4]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-44f883d4],.slide-leave[data-v-44f883d4]{margin-bottom:0px\n}\n.slide-enter[data-v-44f883d4],.slide-leave-to[data-v-44f883d4]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-44f883d4],.slide-in-leave-active[data-v-44f883d4]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-44f883d4]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-44f883d4]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-44f883d4]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-44f883d4]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-44f883d4],.page-fade-enter-active[data-v-44f883d4]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-44f883d4],.page-fade-leave-to[data-v-44f883d4],.page-fade-enter[data-v-44f883d4]{opacity:0\n}\n.page-fade-enter-to[data-v-44f883d4]{opacity:1\n}\n.fade-out-leave-active[data-v-44f883d4],.fade-out-enter-active[data-v-44f883d4]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-44f883d4],.fade-out-leave-to[data-v-44f883d4],.fade-out-enter[data-v-44f883d4]{opacity:0\n}\n.fade-out-enter-to[data-v-44f883d4]{opacity:1\n}\n.slide-down-enter-active[data-v-44f883d4],.slide-down-leave-active[data-v-44f883d4]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-44f883d4],.slide-down-enter[data-v-44f883d4]{top:100%\n}\n.slide-down-leave[data-v-44f883d4],.slide-down-enter-to[data-v-44f883d4]{top:0%\n}\n.slide-out-enter-active[data-v-44f883d4],.slide-out-leave-active[data-v-44f883d4]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-44f883d4]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-44f883d4]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-44f883d4]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-44f883d4],.exchange-result.slide-out-enter[data-v-44f883d4]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-44f883d4],.exchange-pending.slide-out-enter[data-v-44f883d4]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-44f883d4],.slide-left-leave-active[data-v-44f883d4]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-44f883d4]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-44f883d4]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-44f883d4]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-44f883d4],.slide-right-leave-active[data-v-44f883d4]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-44f883d4]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-44f883d4]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-44f883d4]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-44f883d4],.spin-down-leave-active[data-v-44f883d4]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-44f883d4]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-44f883d4]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-44f883d4]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-44f883d4],.spin-up-leave-active[data-v-44f883d4]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-44f883d4]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-44f883d4]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-44f883d4]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-44f883d4],.puff-out-leave-active[data-v-44f883d4]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-44f883d4]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-44f883d4]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-44f883d4],.puff-out-enter-to[data-v-44f883d4]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-44f883d4],.collapse-fade-enter-active[data-v-44f883d4]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-44f883d4],.collapse-fade-leave-to[data-v-44f883d4],.collapse-fade-enter[data-v-44f883d4]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-44f883d4]{opacity:1\n}\n.lazy-fade-leave-active[data-v-44f883d4],.lazy-fade-enter-active[data-v-44f883d4]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-44f883d4],.lazy-fade-leave-to[data-v-44f883d4],.lazy-fade-enter[data-v-44f883d4]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-44f883d4]{opacity:1\n}\n.exchange-history .table.table-new .item[data-v-44f883d4]:nth-child(1){width:39%\n}\n.exchange-history .table.table-new .item[data-v-44f883d4]:nth-child(2){width:39%\n}\n.exchange-history .table.table-new .item[data-v-44f883d4]:nth-child(3){width:13%;text-align:right\n}\n.exchange-history .table.table-new .item[data-v-44f883d4]:nth-child(4){width:calc(9% - 15px);padding-right:15px\n}\n.exchange-history .table.table-new .main[data-v-44f883d4]{overflow-y:inherit\n}\n.exchange-history .change-icon[data-v-44f883d4]{margin:0;padding:0\n}\n.exchange-history .table.table-new .table-row[data-v-44f883d4]{padding-top:12px\n}\n.result-popup[data-v-44f883d4]{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:25px\n}\n.result-popup .title[data-v-44f883d4]{font-size:24px;line-height:28px;margin-bottom:10px\n}\n.result-popup .result-wrapper[data-v-44f883d4]{display:flex;width:430px;align-items:center;flex-direction:column;margin-top:60px\n}\n.result-popup .coins[data-v-44f883d4]{display:flex;width:400px;justify-content:space-between;align-items:center\n}\n.result-popup .coins.second-block[data-v-44f883d4]{margin-bottom:30px\n}\n.result-popup .coins img[data-v-44f883d4]{max-width:30px;margin-top:-75px\n}\n.result-popup .coins .coin[data-v-44f883d4]{text-align:center;width:40%\n}\n.result-popup .coins .coin .icon[data-v-44f883d4]{font-size:65px\n}\n.result-popup .coins .coin p[data-v-44f883d4]{margin:15px 0 10px\n}\n.result-popup .coins .coin h3[data-v-44f883d4],.result-popup .coins .coin h3 *[data-v-44f883d4]{white-space:nowrap;font-weight:bold;font-size:18px;line-height:21px\n}\n.result-popup .coins .coin .address-info[data-v-44f883d4]{margin:15px 0 0\n}\n.result-popup .disclaimer[data-v-44f883d4]{font-size:14px;color:#8290ad;margin:20px 10px 0;text-align:center\n}\n.result-popup .estimated[data-v-44f883d4]{font-size:20px;line-height:28px;opacity:.8;margin-top:20px\n}\n.result-popup .cashback[data-v-44f883d4]{text-align:center\n}\n.result-popup .cashback .text-big[data-v-44f883d4]{line-height:24px\n}\n.result-popup .order-id[data-v-44f883d4]{margin-top:10vh;position:relative\n}\n.result-popup .order-id.margin[data-v-44f883d4]{margin-top:45px\n}\n.result-popup .text-link-underline[data-v-44f883d4]{position:relative\n}\n.result-popup .message[data-v-44f883d4]{width:230px\n}\n.result-popup .button[data-v-44f883d4]{margin-top:25px\n}\n.exchange-continue-result__wrapper[data-v-44f883d4]{padding:30px\n}\n.exchange-continue-result__content[data-v-44f883d4]{margin-top:24px\n}\n.exchange-continue-result__body[data-v-44f883d4]{background-color:#070c1d;border-radius:12px;width:100%;box-shadow:0px 20px 30px rgba(0,0,0,.2);padding:25px 28px 30px 28px\n}\n.exchange-continue-result__body .card[data-v-44f883d4]{background:rgba(122,133,159,.0588235294);border-radius:18px;padding:20px 15px 15px 15px;flex-shrink:0;flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:center\n}\n.exchange-continue-result__body .card>*[data-v-44f883d4]{margin-top:20px\n}\n.exchange-continue-result__body .card>*[data-v-44f883d4]:first-child{margin-top:0px\n}\n.exchange-continue-result__body .card .icon[data-v-44f883d4]{height:75px;width:75px;display:flex;align-items:center;justify-content:center;border-radius:100%\n}\n.exchange-continue-result__body .card .background--gray[data-v-44f883d4]{background-color:#404a65\n}\n.exchange-continue-result__body .card .background--green[data-v-44f883d4]{background-color:#00e05a\n}\n.exchange-continue-result__body .spacer[data-v-44f883d4]{width:40px\n}\n.inner-exchange-basic[data-v-44f883d4]{height:calc(100% - 80px);padding-top:80px;position:relative;display:flex;flex-direction:column\n}\n.inner-exchange-basic .exchange-third-api[data-v-44f883d4]{display:flex;justify-content:center;align-items:center;margin-top:auto\n}\n.inner-exchange-basic .exchange-third-api p[data-v-44f883d4]{color:#8290ad\n}\n.inner-exchange-basic .error-wrapper[data-v-44f883d4]{margin-top:45px\n}\n.inner-exchange-basic .send-coin .result[data-v-44f883d4]{margin-top:50px\n}\n.inner-exchange-basic .service-wrappepr[data-v-44f883d4]{display:flex;flex-direction:column;align-items:center;position:absolute;left:50%;transform:translateX(-50%);bottom:5%\n}\n.inner-exchange-basic .service-wrappepr .service-label[data-v-44f883d4]{font-size:16px;color:#8290ad;align-self:center;padding-bottom:20px\n}\n.inner-exchange-basic .service-wrappepr .service-choice[data-v-44f883d4]{display:flex;justify-content:space-around;pointer-events:none;width:65%;opacity:.5\n}\n.inner-exchange-basic .service-wrappepr .service-choice div[data-v-44f883d4]{display:flex;justify-content:space-around;align-items:center;filter:grayscale(100%)\n}\n.inner-exchange-basic .service-wrappepr .service-choice div span[data-v-44f883d4]{font-size:16px\n}\n.inner-exchange-basic .service-wrappepr .service-choice div img[data-v-44f883d4]{width:50px;max-height:30px\n}\n.inner-exchange-basic .submit-wrapper[data-v-44f883d4]{text-align:center;position:relative\n}\n.inner-exchange-basic .submit-wrapper .button[data-v-44f883d4]{opacity:.4;pointer-events:none;text-transform:uppercase\n}\n.inner-exchange-basic .submit-wrapper .button.normal[data-v-44f883d4],.inner-exchange-basic .submit-wrapper .button.active[data-v-44f883d4]{opacity:1;pointer-events:all\n}\n.inner-exchange-basic .exchange-rate[data-v-44f883d4]{display:flex;flex-direction:column;align-items:center;margin-top:20px\n}\n.inner-exchange-basic .exchange-rate__network-fee[data-v-44f883d4]{position:relative;display:flex;align-items:center;gap:4px\n}\n.inner-exchange-basic .exchange-rate.m-b[data-v-44f883d4]{margin-bottom:10px\n}\n.inner-exchange-basic .exchange-rate span[data-v-44f883d4]{color:#8290ad;font-size:14px\n}\n.inner-exchange-basic .exchange-rate .rate[data-v-44f883d4]{padding-top:5px;color:#fff\n}\n.inner-exchange-basic .hbar-activate[data-v-44f883d4]{text-align:center\n}\n.inner-exchange-basic .hbar-activate .button.button-buy[data-v-44f883d4]{display:inline-block;margin-left:0;margin-top:20px\n}\n.inner-exchange-basic .button.claim[data-v-44f883d4],.inner-exchange-basic .button.button-buy[data-v-44f883d4]{display:block;border-color:#8290ad;background-image:none\n}\n.inner-exchange-basic .button.claim[data-v-44f883d4]:hover,.inner-exchange-basic .button.button-buy[data-v-44f883d4]:hover{background-color:#8290ad;box-shadow:none\n}\n.inner-exchange-basic .button.button-buy[data-v-44f883d4]{padding:3px 15px;font-size:12px;margin-left:15px;display:inline-block\n}\n.inner-exchange-basic .button.claim[data-v-44f883d4]{font-size:14px;margin:15px auto;padding:5px 28px\n}\n.inner-exchange-basic .error-plain[data-v-44f883d4]{height:auto\n}\n@media(min-width: 1360px){\n.inner-exchange-basic .error-wrapper[data-v-44f883d4]{margin-top:50px\n}\n.inner-exchange-basic .submit-wrapper .button[data-v-44f883d4]{font-size:24px\n}\n}\n.tabs[data-v-44f883d4]{height:100vh;display:flex;flex-direction:column\n}\n.header-tabs[data-v-44f883d4]{min-height:60px\n}",
          "",
        ]));
    },
    8830: function (a, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return e;
      }),
        n.d(t, "b", function () {
          return d;
        }));
      var e = function () {
          var a = this,
            t = a.$createElement,
            n = a._self._c || t;
          return n(
            "main",
            { staticClass: "relative tabs" },
            [
              n(
                "div",
                { staticClass: "header-tabs" },
                a._l(a.tabs, function (t) {
                  return n(
                    "router-link",
                    {
                      key: t.route.path,
                      staticClass: "choice",
                      attrs: {
                        to: t.route,
                        tag: "div",
                        "active-class": "active",
                        "exact-path": "",
                      },
                    },
                    [
                      n("span", [
                        a._v("\n        " + a._s(t.title) + "\n      "),
                      ]),
                    ],
                  );
                }),
                1,
              ),
              a._v(" "),
              n("router-view"),
            ],
            1,
          );
        },
        d = [];
    },
  },
]);
