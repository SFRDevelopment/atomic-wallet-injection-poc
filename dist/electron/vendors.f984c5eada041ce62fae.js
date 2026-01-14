(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [176, 410],
  {
    11673: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(5820),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(11684),
        o = e(5);
      function l(t) {
        e(11674);
      }
      var d = !1,
        c = l,
        f = null,
        p = null,
        v = Object(o["a"])(r.a, i["a"], i["b"], d, c, f, p);
      a["default"] = v.exports;
    },
    11674: function (t, a, e) {
      var n = e(11675);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = e(23).default;
      r("8e66fd14", n, !0, {});
    },
    11675: function (t, a, e) {
      a = t.exports = e(22)(!1);
      var n = e(385),
        r = n(e(393));
      a.push([
        t.i,
        "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.nft__send-token-result{padding:20px 5% 0 !important\n}\n.error{color:#c03647;margin-bottom:1.5rem\n}\n.stage1__wrap{display:flex;flex-direction:column\n}\n.stage1.send-token__header{margin-bottom:5rem;display:flex\n}\n.stage1.send-token__header .empty__nft img{width:45px;height:45px\n}\n.stage1.send-token__header .empty__nft.with-img{width:60px;height:60px\n}\n.stage1.send-token__header>:first-child{margin-right:2rem\n}\n.stage1.send-token__wallet-info{margin-top:2.4rem\n}\n.stage1.send-token__wallet-info>:first-child{margin-bottom:.5rem\n}\n.stage1.send-token__control{margin-top:3rem;display:flex;justify-content:center;flex-flow:column;align-items:center\n}\n.stage2.send-token__header .empty__nft img{width:75px;height:75px\n}\n.stage2.send-token__header .empty__nft.with-img{width:100px;height:100px\n}\n.stage2.send-token__body{display:flex;flex-direction:column;align-items:center;margin-top:2rem\n}\n.stage2.send-token__body>:first-child{margin-bottom:1rem\n}\n.stage2.send-token__body .title{margin-bottom:1.2rem\n}\n.stage2.send-token__body .atomic__label-group{margin-bottom:10px;width:400px;justify-content:space-between;border-bottom:1px solid #404a65;padding-bottom:10px\n}\n.stage2.send-token__password{margin-top:44px\n}\n.stage2.send-token__password .password_wrap{max-width:40rem;margin:0 auto\n}\n.stage2.send-token__control{margin-top:3rem;display:flex;justify-content:center\n}\n.stage2__wrap{display:flex;flex-direction:column\n}\n.stage2__wrap .send-token__password{width:400px;align-self:center\n}\n.stage3.send-token__sending{display:flex;justify-content:center;margin-top:10rem;flex-direction:column;align-items:center\n}\n.stage3.send-token__sending .text{margin-top:30px\n}\n.stage3.send-token__sending .sending-process-text{margin-top:1.5rem\n}\n.stage4__wrap{height:100%\n}\n.empty__nft{background-color:#404a65;border-radius:50%;display:flex\n}\n.empty__nft.with-img{background-repeat:no-repeat;background-position:center center;background-image:url(" +
          r +
          ")\n}",
        "",
      ]);
    },
    11676: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(5821),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(11683),
        o = e(5);
      function l(t) {
        e(11677);
      }
      var d = !1,
        c = l,
        f = "data-v-8486aaa4",
        p = null,
        v = Object(o["a"])(r.a, i["a"], i["b"], d, c, f, p);
      a["default"] = v.exports;
    },
    11677: function (t, a, e) {
      var n = e(11678);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = e(23).default;
      r("c3cf39ce", n, !0, {});
    },
    11678: function (t, a, e) {
      ((a = t.exports = e(22)(!1)),
        a.push([
          t.i,
          "\n@keyframes spinner-data-v-8486aaa4{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-8486aaa4{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-8486aaa4{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-8486aaa4{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-8486aaa4{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-8486aaa4{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-8486aaa4{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-8486aaa4{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-8486aaa4{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-8486aaa4{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-8486aaa4{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-8486aaa4]{color:#6b963b\n}\n.text-red[data-v-8486aaa4]{color:#c03647\n}\n.text-gray[data-v-8486aaa4]{color:#8290ad\n}\n.text-blue[data-v-8486aaa4]{color:#00c2ff\n}\n.text-danger[data-v-8486aaa4]{color:#8c4545\n}\n.text-title[data-v-8486aaa4]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-8486aaa4]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-8486aaa4]{color:#f1b70b\n}\n.text-white[data-v-8486aaa4]{color:#fff\n}\n.text-bigger[data-v-8486aaa4]{font-size:18px;font-weight:500\n}\n.text-big[data-v-8486aaa4]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-8486aaa4]{font-size:14px\n}\n.text-middle-height[data-v-8486aaa4]{line-height:24px\n}\n.text-small[data-v-8486aaa4]{font-size:12px\n}\n.text-word-break[data-v-8486aaa4]{word-break:break-all\n}\n.text-right[data-v-8486aaa4]{text-align:right\n}\n.text-left[data-v-8486aaa4]{text-align:left\n}\n.text-line-middle[data-v-8486aaa4]{line-height:24px\n}\n.text-link[data-v-8486aaa4],.text-link-underline[data-v-8486aaa4]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-8486aaa4]:hover,.text-link-underline[data-v-8486aaa4]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-8486aaa4]{text-decoration:underline\n}\n.text-center[data-v-8486aaa4]{text-align:center\n}\n.text-pointer[data-v-8486aaa4]{cursor:pointer\n}\n.gap-10[data-v-8486aaa4]{gap:10px\n}\n.m-t-auto[data-v-8486aaa4]{margin-top:auto\n}\n.m-t-4[data-v-8486aaa4]{margin-top:4px\n}\n.m-t-5[data-v-8486aaa4]{margin-top:5px\n}\n.m-t-8[data-v-8486aaa4]{margin-top:10px\n}\n.m-t-10[data-v-8486aaa4]{margin-top:10px\n}\n.m-t-13[data-v-8486aaa4]{margin-top:10px\n}\n.m-t-15[data-v-8486aaa4]{margin-top:15px\n}\n.m-t-16[data-v-8486aaa4]{margin-top:16px\n}\n.m-t-20[data-v-8486aaa4]{margin-top:20px\n}\n.m-t-24[data-v-8486aaa4]{margin-top:24px\n}\n.m-t-25[data-v-8486aaa4]{margin-top:25px\n}\n.m-t-26[data-v-8486aaa4]{margin-top:26px\n}\n.m-t-30[data-v-8486aaa4]{margin-top:30px\n}\n.m-t-35[data-v-8486aaa4]{margin-top:35px\n}\n.m-t-40[data-v-8486aaa4]{margin-top:40px\n}\n.m-t-45[data-v-8486aaa4]{margin-top:45px\n}\n.m-t-50[data-v-8486aaa4]{margin-top:50px\n}\n.m-t-60[data-v-8486aaa4]{margin-top:60px\n}\n.m-t-65[data-v-8486aaa4]{margin-top:65px\n}\n.m-t-80[data-v-8486aaa4]{margin-top:80px\n}\n.m-l-5[data-v-8486aaa4]{margin-left:5px\n}\n.m-l-10[data-v-8486aaa4]{margin-left:10px\n}\n.m-l-15[data-v-8486aaa4]{margin-left:15px\n}\n.m-l-20[data-v-8486aaa4]{margin-left:20px\n}\n.m-l-25[data-v-8486aaa4]{margin-left:25px\n}\n.m-l-30[data-v-8486aaa4]{margin-left:30px\n}\n.m-l-35[data-v-8486aaa4]{margin-left:35px\n}\n.m-r-5[data-v-8486aaa4]{margin-right:5px\n}\n.m-r-10[data-v-8486aaa4]{margin-right:10px\n}\n.m-r-15[data-v-8486aaa4]{margin-right:15px\n}\n.m-r-30[data-v-8486aaa4]{margin-right:30px\n}\n.m-b-5[data-v-8486aaa4]{margin-bottom:5px !important\n}\n.m-b-15[data-v-8486aaa4]{margin-bottom:15px !important\n}\n.m-b-20[data-v-8486aaa4]{margin-bottom:20px !important\n}\n.m-b-30[data-v-8486aaa4]{margin-bottom:30px !important\n}\n.m-b-25[data-v-8486aaa4]{margin-bottom:25px !important\n}\n.m-b-50[data-v-8486aaa4]{margin-bottom:50px !important\n}\n.p-t-40[data-v-8486aaa4]{padding-top:40px\n}\n.p-t-85[data-v-8486aaa4]{padding-top:85px !important\n}\n.hidden[data-v-8486aaa4]{opacity:0 !important\n}\n.relative[data-v-8486aaa4]{position:relative\n}\n.space-nowrap[data-v-8486aaa4]{white-space:nowrap\n}\n.uppercase[data-v-8486aaa4]{text-transform:uppercase\n}\n.lowercase[data-v-8486aaa4]{text-transform:lowercase\n}\n.fade-enter-active[data-v-8486aaa4]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-8486aaa4]{transition:all .1s ease-out\n}\n.fade-enter[data-v-8486aaa4],.fade-leave-to[data-v-8486aaa4]{opacity:0\n}\n.fade-down-enter-active[data-v-8486aaa4],.fade-down-leave-active[data-v-8486aaa4],.fade-down-move[data-v-8486aaa4]{transition:all .15s\n}\n.fade-down-leave-active[data-v-8486aaa4],.fade-down-enter-active[data-v-8486aaa4]{position:absolute !important\n}\n.fade-down-enter[data-v-8486aaa4],.fade-down-leave-to[data-v-8486aaa4]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-8486aaa4],.scale-leave-active[data-v-8486aaa4],.scale-move[data-v-8486aaa4]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-8486aaa4],.scale-leave-to[data-v-8486aaa4]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-8486aaa4],.slide-leave-active[data-v-8486aaa4]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-8486aaa4]{transition:all .2s ease\n}\n.slide-leave-active[data-v-8486aaa4]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-8486aaa4],.slide-leave-to[data-v-8486aaa4]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-8486aaa4],.slide-leave[data-v-8486aaa4]{margin-bottom:0px\n}\n.slide-enter[data-v-8486aaa4],.slide-leave-to[data-v-8486aaa4]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-8486aaa4],.slide-in-leave-active[data-v-8486aaa4]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-8486aaa4]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-8486aaa4]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-8486aaa4]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-8486aaa4]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-8486aaa4],.page-fade-enter-active[data-v-8486aaa4]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-8486aaa4],.page-fade-leave-to[data-v-8486aaa4],.page-fade-enter[data-v-8486aaa4]{opacity:0\n}\n.page-fade-enter-to[data-v-8486aaa4]{opacity:1\n}\n.fade-out-leave-active[data-v-8486aaa4],.fade-out-enter-active[data-v-8486aaa4]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-8486aaa4],.fade-out-leave-to[data-v-8486aaa4],.fade-out-enter[data-v-8486aaa4]{opacity:0\n}\n.fade-out-enter-to[data-v-8486aaa4]{opacity:1\n}\n.slide-down-enter-active[data-v-8486aaa4],.slide-down-leave-active[data-v-8486aaa4]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-8486aaa4],.slide-down-enter[data-v-8486aaa4]{top:100%\n}\n.slide-down-leave[data-v-8486aaa4],.slide-down-enter-to[data-v-8486aaa4]{top:0%\n}\n.slide-out-enter-active[data-v-8486aaa4],.slide-out-leave-active[data-v-8486aaa4]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-8486aaa4]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-8486aaa4]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-8486aaa4]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-8486aaa4],.exchange-result.slide-out-enter[data-v-8486aaa4]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-8486aaa4],.exchange-pending.slide-out-enter[data-v-8486aaa4]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-8486aaa4],.slide-left-leave-active[data-v-8486aaa4]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-8486aaa4]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-8486aaa4]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-8486aaa4]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-8486aaa4],.slide-right-leave-active[data-v-8486aaa4]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-8486aaa4]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-8486aaa4]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-8486aaa4]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-8486aaa4],.spin-down-leave-active[data-v-8486aaa4]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-8486aaa4]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-8486aaa4]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-8486aaa4]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-8486aaa4],.spin-up-leave-active[data-v-8486aaa4]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-8486aaa4]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-8486aaa4]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-8486aaa4]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-8486aaa4],.puff-out-leave-active[data-v-8486aaa4]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-8486aaa4]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-8486aaa4]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-8486aaa4],.puff-out-enter-to[data-v-8486aaa4]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-8486aaa4],.collapse-fade-enter-active[data-v-8486aaa4]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-8486aaa4],.collapse-fade-leave-to[data-v-8486aaa4],.collapse-fade-enter[data-v-8486aaa4]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-8486aaa4]{opacity:1\n}\n.lazy-fade-leave-active[data-v-8486aaa4],.lazy-fade-enter-active[data-v-8486aaa4]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-8486aaa4],.lazy-fade-leave-to[data-v-8486aaa4],.lazy-fade-enter[data-v-8486aaa4]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-8486aaa4]{opacity:1\n}\n.send-token-result[data-v-8486aaa4]{height:100%\n}\n.send-token-result__success[data-v-8486aaa4]{display:flex;justify-content:space-evenly;flex-direction:column;align-items:center;height:100%;max-height:700px;padding-bottom:30px\n}\n.send-token-result__success .token__animation[data-v-8486aaa4]{display:flex;justify-content:center\n}\n.send-token-result__success .transaction_info[data-v-8486aaa4]{max-width:455px;display:flex;justify-content:center;align-items:center;overflow:hidden;word-break:break-all;flex-direction:column;position:relative\n}\n.send-token-result__success .transaction_info__body[data-v-8486aaa4]{display:flex;align-items:center;margin-top:10px\n}\n.send-token-result__success .transaction_info__body[data-v-8486aaa4]>:first-child{margin-right:20px;text-align:center\n}\n.send-token-result__success .transaction_info__body[data-v-8486aaa4]>:nth-child(2){display:inline-flex\n}\n.send-token-result__success .transaction_info__body__message[data-v-8486aaa4]{min-width:200px;padding:2px 15px;transform:translateX(50%);right:50%;font-size:11px;line-height:18px;position:absolute;background:#2fa6fa;border-radius:12px;text-align:center\n}\n.send-token-result__success .transaction_info__body__icon-button[data-v-8486aaa4]{height:30px;width:30px;background:#404a65;border-radius:100%;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.7\n}\n.send-token-result__success .transaction_info__body__icon-button[data-v-8486aaa4]:hover{opacity:1\n}\n.send-token-result__success .info__group[data-v-8486aaa4]>:first-child{margin-bottom:.5rem\n}\n.send-token-result__success .info__group *[data-v-8486aaa4]{text-align:center\n}\n.send-token-result__error[data-v-8486aaa4]{display:flex;justify-content:space-evenly;flex-direction:column;align-items:center;height:100%;max-height:700px\n}\n.send-token-result__error a[data-v-8486aaa4]{cursor:pointer\n}\n.send-token-result .control[data-v-8486aaa4]{display:flex;width:100%;justify-content:center;max-width:600px\n}\n.send-token-result .control .space[data-v-8486aaa4]{width:3rem\n}\n.send-token-result .info__group[data-v-8486aaa4]>:first-child{margin-bottom:1rem\n}\n.send-token-result .info__group .text[data-v-8486aaa4]{max-width:427px\n}\n.send-token-result .info__group *[data-v-8486aaa4]{text-align:center\n}",
          "",
        ]));
    },
    11679: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(5822),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(11682),
        o = e(5);
      function l(t) {
        e(11680);
      }
      var d = !1,
        c = l,
        f = "data-v-28af7b0e",
        p = null,
        v = Object(o["a"])(r.a, i["a"], i["b"], d, c, f, p);
      a["default"] = v.exports;
    },
    11680: function (t, a, e) {
      var n = e(11681);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = e(23).default;
      r("0c164dc6", n, !0, {});
    },
    11681: function (t, a, e) {
      ((a = t.exports = e(22)(!1)),
        a.push([
          t.i,
          "\n@keyframes spinner-data-v-28af7b0e{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-28af7b0e{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-28af7b0e{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-28af7b0e{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-28af7b0e{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-28af7b0e{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-28af7b0e{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-28af7b0e{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-28af7b0e{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-28af7b0e{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-28af7b0e{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-28af7b0e]{color:#6b963b\n}\n.text-red[data-v-28af7b0e]{color:#c03647\n}\n.text-gray[data-v-28af7b0e]{color:#8290ad\n}\n.text-blue[data-v-28af7b0e]{color:#00c2ff\n}\n.text-danger[data-v-28af7b0e]{color:#8c4545\n}\n.text-title[data-v-28af7b0e]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-28af7b0e]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-28af7b0e]{color:#f1b70b\n}\n.text-white[data-v-28af7b0e]{color:#fff\n}\n.text-bigger[data-v-28af7b0e]{font-size:18px;font-weight:500\n}\n.text-big[data-v-28af7b0e]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-28af7b0e]{font-size:14px\n}\n.text-middle-height[data-v-28af7b0e]{line-height:24px\n}\n.text-small[data-v-28af7b0e]{font-size:12px\n}\n.text-word-break[data-v-28af7b0e]{word-break:break-all\n}\n.text-right[data-v-28af7b0e]{text-align:right\n}\n.text-left[data-v-28af7b0e]{text-align:left\n}\n.text-line-middle[data-v-28af7b0e]{line-height:24px\n}\n.text-link[data-v-28af7b0e],.text-link-underline[data-v-28af7b0e]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-28af7b0e]:hover,.text-link-underline[data-v-28af7b0e]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-28af7b0e]{text-decoration:underline\n}\n.text-center[data-v-28af7b0e]{text-align:center\n}\n.text-pointer[data-v-28af7b0e]{cursor:pointer\n}\n.gap-10[data-v-28af7b0e]{gap:10px\n}\n.m-t-auto[data-v-28af7b0e]{margin-top:auto\n}\n.m-t-4[data-v-28af7b0e]{margin-top:4px\n}\n.m-t-5[data-v-28af7b0e]{margin-top:5px\n}\n.m-t-8[data-v-28af7b0e]{margin-top:10px\n}\n.m-t-10[data-v-28af7b0e]{margin-top:10px\n}\n.m-t-13[data-v-28af7b0e]{margin-top:10px\n}\n.m-t-15[data-v-28af7b0e]{margin-top:15px\n}\n.m-t-16[data-v-28af7b0e]{margin-top:16px\n}\n.m-t-20[data-v-28af7b0e]{margin-top:20px\n}\n.m-t-24[data-v-28af7b0e]{margin-top:24px\n}\n.m-t-25[data-v-28af7b0e]{margin-top:25px\n}\n.m-t-26[data-v-28af7b0e]{margin-top:26px\n}\n.m-t-30[data-v-28af7b0e]{margin-top:30px\n}\n.m-t-35[data-v-28af7b0e]{margin-top:35px\n}\n.m-t-40[data-v-28af7b0e]{margin-top:40px\n}\n.m-t-45[data-v-28af7b0e]{margin-top:45px\n}\n.m-t-50[data-v-28af7b0e]{margin-top:50px\n}\n.m-t-60[data-v-28af7b0e]{margin-top:60px\n}\n.m-t-65[data-v-28af7b0e]{margin-top:65px\n}\n.m-t-80[data-v-28af7b0e]{margin-top:80px\n}\n.m-l-5[data-v-28af7b0e]{margin-left:5px\n}\n.m-l-10[data-v-28af7b0e]{margin-left:10px\n}\n.m-l-15[data-v-28af7b0e]{margin-left:15px\n}\n.m-l-20[data-v-28af7b0e]{margin-left:20px\n}\n.m-l-25[data-v-28af7b0e]{margin-left:25px\n}\n.m-l-30[data-v-28af7b0e]{margin-left:30px\n}\n.m-l-35[data-v-28af7b0e]{margin-left:35px\n}\n.m-r-5[data-v-28af7b0e]{margin-right:5px\n}\n.m-r-10[data-v-28af7b0e]{margin-right:10px\n}\n.m-r-15[data-v-28af7b0e]{margin-right:15px\n}\n.m-r-30[data-v-28af7b0e]{margin-right:30px\n}\n.m-b-5[data-v-28af7b0e]{margin-bottom:5px !important\n}\n.m-b-15[data-v-28af7b0e]{margin-bottom:15px !important\n}\n.m-b-20[data-v-28af7b0e]{margin-bottom:20px !important\n}\n.m-b-30[data-v-28af7b0e]{margin-bottom:30px !important\n}\n.m-b-25[data-v-28af7b0e]{margin-bottom:25px !important\n}\n.m-b-50[data-v-28af7b0e]{margin-bottom:50px !important\n}\n.p-t-40[data-v-28af7b0e]{padding-top:40px\n}\n.p-t-85[data-v-28af7b0e]{padding-top:85px !important\n}\n.hidden[data-v-28af7b0e]{opacity:0 !important\n}\n.relative[data-v-28af7b0e]{position:relative\n}\n.space-nowrap[data-v-28af7b0e]{white-space:nowrap\n}\n.uppercase[data-v-28af7b0e]{text-transform:uppercase\n}\n.lowercase[data-v-28af7b0e]{text-transform:lowercase\n}\n.fade-enter-active[data-v-28af7b0e]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-28af7b0e]{transition:all .1s ease-out\n}\n.fade-enter[data-v-28af7b0e],.fade-leave-to[data-v-28af7b0e]{opacity:0\n}\n.fade-down-enter-active[data-v-28af7b0e],.fade-down-leave-active[data-v-28af7b0e],.fade-down-move[data-v-28af7b0e]{transition:all .15s\n}\n.fade-down-leave-active[data-v-28af7b0e],.fade-down-enter-active[data-v-28af7b0e]{position:absolute !important\n}\n.fade-down-enter[data-v-28af7b0e],.fade-down-leave-to[data-v-28af7b0e]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-28af7b0e],.scale-leave-active[data-v-28af7b0e],.scale-move[data-v-28af7b0e]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-28af7b0e],.scale-leave-to[data-v-28af7b0e]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-28af7b0e],.slide-leave-active[data-v-28af7b0e]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-28af7b0e]{transition:all .2s ease\n}\n.slide-leave-active[data-v-28af7b0e]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-28af7b0e],.slide-leave-to[data-v-28af7b0e]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-28af7b0e],.slide-leave[data-v-28af7b0e]{margin-bottom:0px\n}\n.slide-enter[data-v-28af7b0e],.slide-leave-to[data-v-28af7b0e]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-28af7b0e],.slide-in-leave-active[data-v-28af7b0e]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-28af7b0e]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-28af7b0e]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-28af7b0e]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-28af7b0e]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-28af7b0e],.page-fade-enter-active[data-v-28af7b0e]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-28af7b0e],.page-fade-leave-to[data-v-28af7b0e],.page-fade-enter[data-v-28af7b0e]{opacity:0\n}\n.page-fade-enter-to[data-v-28af7b0e]{opacity:1\n}\n.fade-out-leave-active[data-v-28af7b0e],.fade-out-enter-active[data-v-28af7b0e]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-28af7b0e],.fade-out-leave-to[data-v-28af7b0e],.fade-out-enter[data-v-28af7b0e]{opacity:0\n}\n.fade-out-enter-to[data-v-28af7b0e]{opacity:1\n}\n.slide-down-enter-active[data-v-28af7b0e],.slide-down-leave-active[data-v-28af7b0e]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-28af7b0e],.slide-down-enter[data-v-28af7b0e]{top:100%\n}\n.slide-down-leave[data-v-28af7b0e],.slide-down-enter-to[data-v-28af7b0e]{top:0%\n}\n.slide-out-enter-active[data-v-28af7b0e],.slide-out-leave-active[data-v-28af7b0e]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-28af7b0e]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-28af7b0e]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-28af7b0e]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-28af7b0e],.exchange-result.slide-out-enter[data-v-28af7b0e]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-28af7b0e],.exchange-pending.slide-out-enter[data-v-28af7b0e]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-28af7b0e],.slide-left-leave-active[data-v-28af7b0e]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-28af7b0e]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-28af7b0e]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-28af7b0e]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-28af7b0e],.slide-right-leave-active[data-v-28af7b0e]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-28af7b0e]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-28af7b0e]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-28af7b0e]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-28af7b0e],.spin-down-leave-active[data-v-28af7b0e]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-28af7b0e]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-28af7b0e]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-28af7b0e]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-28af7b0e],.spin-up-leave-active[data-v-28af7b0e]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-28af7b0e]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-28af7b0e]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-28af7b0e]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-28af7b0e],.puff-out-leave-active[data-v-28af7b0e]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-28af7b0e]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-28af7b0e]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-28af7b0e],.puff-out-enter-to[data-v-28af7b0e]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-28af7b0e],.collapse-fade-enter-active[data-v-28af7b0e]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-28af7b0e],.collapse-fade-leave-to[data-v-28af7b0e],.collapse-fade-enter[data-v-28af7b0e]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-28af7b0e]{opacity:1\n}\n.lazy-fade-leave-active[data-v-28af7b0e],.lazy-fade-enter-active[data-v-28af7b0e]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-28af7b0e],.lazy-fade-leave-to[data-v-28af7b0e],.lazy-fade-enter[data-v-28af7b0e]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-28af7b0e]{opacity:1\n}\n.send-result-animation[data-v-28af7b0e]{position:relative;width:fit-content\n}\n.send-result-animation .token__animation svg[data-v-28af7b0e]{fill:#ff2528;animation:spinner2-data-v-28af7b0e 3s 2 linear\n}\n.send-result-animation .token__animation svg.success[data-v-28af7b0e]{fill:#00e05a\n}\n.send-result-animation .avatar__wrap[data-v-28af7b0e]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)\n}\n.send-result-animation .empty__nft[data-v-28af7b0e]{background-color:#404a65;border-radius:50%;background-repeat:no-repeat;background-position:center center;width:60px;height:60px\n}\n.send-result-animation .empty__nft.result-success[data-v-28af7b0e]{border:4px solid #00e05a\n}\n.send-result-animation .empty__nft.result-error[data-v-28af7b0e]{border:4px solid #ff474b\n}",
          "",
        ]));
    },
    11682: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n("div", { staticClass: "send-result-animation" }, [
            n("div", { staticClass: "token__animation" }, [
              n(
                "svg",
                {
                  class: { success: t.isSuccess },
                  attrs: {
                    width: "160",
                    height: "160",
                    viewBox: "0 0 160 160",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                },
                [
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "90.7697",
                      cy: "4.61538",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "76.9229",
                      cy: "15.3846",
                      r: "2.30769",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "147.693",
                      cy: "40.7692",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "130.77",
                      cy: "36.9231",
                      r: "2.30769",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "155.385",
                      cy: "107.692",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "107.693",
                      cy: "155.385",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "40.7697",
                      cy: "147.692",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "147.692",
                      cy: "91.5385",
                      r: "2.30769",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "115.385",
                      cy: "139.231",
                      r: "2.30769",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "58.462",
                      cy: "143.846",
                      r: "2.30769",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "4.61538",
                      cy: "90.7692",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "18.462",
                      cy: "102.308",
                      r: "2.30769",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.8",
                      cx: "26.923",
                      cy: "26.9231",
                      r: "4.61538",
                    },
                  }),
                  t._v(" "),
                  n("circle", {
                    attrs: {
                      opacity: "0.4",
                      cx: "26.9229",
                      cy: "45.3846",
                      r: "2.30769",
                    },
                  }),
                ],
              ),
            ]),
            t._v(" "),
            n(
              "div",
              { staticClass: "avatar__wrap" },
              [
                t.isAvailable && t.src
                  ? n("AtomicCircleAvatar", {
                      class: t.isSuccess ? "result-success" : "result-error",
                      attrs: { src: t.src, fallbackSrc: e(393) },
                    })
                  : n("div", {
                      staticClass: "empty__nft with-img",
                      class: t.isSuccess ? "result-success" : "result-error",
                    }),
              ],
              1,
            ),
          ]);
        },
        r = [];
    },
    11683: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n(
            "div",
            {
              staticClass: "send-token-result",
              attrs: { "data-test-id": "send_result" },
            },
            [
              t.isSuccess
                ? n(
                    "section",
                    { staticClass: "send-token-result__success" },
                    [
                      n("SendResultAnimation", {
                        attrs: {
                          src: t.token.getImageUrl(),
                          isAvailable: t.token.isFormatSupported,
                          isSuccess: t.isSuccess,
                          "data-test-id": "send_animation",
                        },
                      }),
                      t._v(" "),
                      n("div", { staticClass: "info__group" }, [
                        n(
                          "div",
                          {
                            staticClass:
                              "title new-text-headline new-text-extra-large",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("nftPage.tokenSent")) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "text new-title-medium new-text-white",
                          },
                          [t._v("\n        " + t._s(t.sendText) + "\n      ")],
                        ),
                      ]),
                      t._v(" "),
                      t.hash.length
                        ? n("div", { staticClass: "transaction_info" }, [
                            n(
                              "a",
                              {
                                staticClass:
                                  "new-title-small new-title-bold new-text-gray no-hover",
                                attrs: { "data-test-id": "transaction_hash" },
                                on: {
                                  click: function (a) {
                                    return (
                                      a.stopPropagation(),
                                      t.openTransactionHash.apply(
                                        null,
                                        arguments,
                                      )
                                    );
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n        " +
                                    t._s(t.$t("nftPage.transactionHash")) +
                                    ":\n      ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "transaction_info__body" },
                              [
                                n(
                                  "a",
                                  {
                                    staticClass: "text-link-underline",
                                    attrs: { "data-test-id": "hash_address" },
                                    on: {
                                      click: function (a) {
                                        return (
                                          a.stopPropagation(),
                                          t.openTransactionHash.apply(
                                            null,
                                            arguments,
                                          )
                                        );
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n          " +
                                        t._s(t.hash) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                n("div", [
                                  n(
                                    "a",
                                    {
                                      staticClass:
                                        "transaction_info__body__icon-button",
                                      on: {
                                        click: function (a) {
                                          return (
                                            a.stopPropagation(),
                                            t.$copyToClipboard(
                                              "" + t.explorerUrl + t.hash,
                                            )
                                          );
                                        },
                                      },
                                    },
                                    [
                                      n("img", {
                                        attrs: { src: e(893), alt: "copy" },
                                      }),
                                    ],
                                  ),
                                ]),
                                t._v(" "),
                                n("transition", { attrs: { name: "fade" } }, [
                                  t.isCopiedToClipboard
                                    ? n(
                                        "div",
                                        {
                                          staticClass:
                                            "transaction_info__body__message",
                                        },
                                        [
                                          t._v(
                                            "\n            " +
                                              t._s(t.$t("message.copied")) +
                                              "\n          ",
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ]),
                              ],
                              1,
                            ),
                          ])
                        : t._e(),
                      t._v(" "),
                      n("RateStars"),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "control" },
                        [
                          n(
                            "BaseButton",
                            {
                              attrs: {
                                size: "medium",
                                typeWidth: "w320",
                                block: "",
                                "data-test-id": "send_another",
                              },
                              on: {
                                click: function (a) {
                                  return t.$emit("backToForm");
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.sendAnother")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : n(
                    "section",
                    { staticClass: "send-token-result__error" },
                    [
                      n("SendResultAnimation", {
                        attrs: {
                          src: t.token.getImageUrl(),
                          isAvailable:
                            t.token.isFormatSupported && !t.isImgError,
                          isSuccess: t.isSuccess,
                        },
                      }),
                      t._v(" "),
                      n("div", { staticClass: "info__group" }, [
                        n(
                          "div",
                          {
                            staticClass:
                              "title new-text-headline new-text-extra-large",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("error.sendNFTError")) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass: "text new-title-medium new-text-white",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("message.tryLaterVPNRestart")) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ]),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "control" },
                        [
                          n(
                            "BaseButton",
                            {
                              attrs: {
                                type: "primary-desktop",
                                size: "medium",
                                typeWidth: "w320",
                                block: "",
                                "data-test-id": "try_again",
                              },
                              on: {
                                click: function (a) {
                                  return t.$emit("tryAgain");
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.tryAgain")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          n("div", { staticClass: "space" }),
                          t._v(" "),
                          n(
                            "BaseButton",
                            {
                              attrs: {
                                "data-test-id": "copy_address",
                                type: "secondary-desktop",
                                size: "medium",
                                typeWidth: "w320",
                                block: "",
                              },
                              on: {
                                click: function (a) {
                                  return t.$bus.$emit(
                                    "openSupportPopup",
                                    t.contactSupport,
                                  );
                                },
                              },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.contactUs")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                      t._v(" "),
                      n(
                        "a",
                        {
                          staticClass:
                            "new-title-medium new-title-bold new-text-blue",
                          on: {
                            click: function (a) {
                              return t.$electron.openExternal(
                                "https://support.atomicwallet.io/article/279-i-am-getting-couldnt-send-your-token-error",
                              );
                            },
                          },
                        },
                        [
                          t._v(
                            "\n      " +
                              t._s(t.$t("nftPage.troubleshooting")) +
                              "\n    ",
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
            ],
          );
        },
        r = [];
    },
    11684: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            n = t._self._c || a;
          return n(
            "AtomicPopup",
            {
              staticClass: "nft__send-token",
              attrs: { "data-test-id": "send_nft" },
              on: { close: t.closeSendToken },
            },
            [
              1 == t.stage
                ? n(
                    "div",
                    {
                      class: "stage" + t.stage + "__wrap",
                      attrs: { name: "stage1" },
                    },
                    [
                      n(
                        "section",
                        { staticClass: "send-token__header stage1" },
                        [
                          t.token.isFormatSupported && !t.isImgError
                            ? n("AtomicCircleAvatar", {
                                attrs: {
                                  src: t.token.getImageUrl(),
                                  size: 100,
                                  fallbackSrc: e(393),
                                },
                                on: {
                                  imgSrcError: function (a) {
                                    t.isImgError = !0;
                                  },
                                },
                              })
                            : n("div", { staticClass: "empty__nft with-img" }),
                          t._v(" "),
                          n("div", [
                            n(
                              "div",
                              {
                                staticClass:
                                  "title new-text-headline new-text-extra-large",
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.$t("nftPage.sendNFT")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            t._v(" "),
                            n(
                              "div",
                              {
                                staticClass:
                                  "text new-text-medium new-text-gray",
                              },
                              [
                                t._v(
                                  "\n          " +
                                    t._s(t.transferText) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ]),
                        ],
                        1,
                      ),
                      t._v(" "),
                      n(
                        "section",
                        { staticClass: "send-token__body stage1" },
                        [
                          n("AtomicEdit", {
                            attrs: {
                              modelValue: t.address,
                              error: t.addressError,
                              isPasteByClick: "",
                              placeholder: t.$t("input.pasteAddress"),
                              "data-test-id": "coin_address",
                            },
                            on: {
                              "enter-pressed": t.goToPassword,
                              "update:modelValue": t.onChangeAddress,
                            },
                          }),
                        ],
                        1,
                      ),
                      t._v(" "),
                      n(
                        "section",
                        { staticClass: "send-token__wallet-info stage1" },
                        [
                          n(
                            "div",
                            {
                              staticClass: "text new-text-small new-text-gray",
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("title.available")) +
                                  ": " +
                                  t._s(t.formatFinanceTrim(t.available, 6)) +
                                  " " +
                                  t._s(t.coin.id) +
                                  " /\n        ",
                              ),
                              n("span", {
                                directives: [
                                  {
                                    name: "text-html",
                                    rawName: "v-text-html",
                                    value:
                                      "" +
                                      t.fiatCharacter +
                                      t.getValueFiat({
                                        value: t.available,
                                        wallet: t.coin,
                                      }),
                                    expression:
                                      "`${fiatCharacter}${getValueFiat({ value: available, wallet: coin })}`",
                                  },
                                ],
                                staticClass:
                                  "text new-text-small new-text-gray",
                              }),
                            ],
                          ),
                          t._v(" "),
                          n(
                            "div",
                            {
                              staticClass: "text new-text-small new-text-gray",
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("title.networkFee")) +
                                  ":\n        ",
                              ),
                              t.fee
                                ? n(
                                    "span",
                                    {
                                      staticClass:
                                        "text new-text-small new-text-gray",
                                    },
                                    [
                                      t._v(
                                        "\n          " +
                                          t._s(t.fee) +
                                          " " +
                                          t._s(t.coin.ticker) +
                                          " /\n          ",
                                      ),
                                      n("span", {
                                        directives: [
                                          {
                                            name: "text-html",
                                            rawName: "v-text-html",
                                            value:
                                              "" +
                                              t.fiatCharacter +
                                              t.getValueFiat({
                                                value: t.fee,
                                                wallet: t.coin,
                                              }),
                                            expression:
                                              "`${fiatCharacter}${getValueFiat({ value: fee, wallet: coin })}`",
                                          },
                                        ],
                                        staticClass:
                                          "text new-text-small new-text-gray",
                                      }),
                                    ],
                                  )
                                : n("LoadingEllipsis"),
                            ],
                            1,
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "section",
                        { staticClass: "send-token__control stage1" },
                        [
                          t.isFeeEnough
                            ? t._e()
                            : n("div", { staticClass: "error" }, [
                                t._v(
                                  "\n        " +
                                    t._s(
                                      t.$t("error.insufficientFundsToPayFee", {
                                        fee: Number(Number(t.fee).toFixed(6)),
                                        coin: t.coin.ticker,
                                      }),
                                    ) +
                                    "\n      ",
                                ),
                              ]),
                          t._v(" "),
                          n(
                            "BaseButton",
                            {
                              attrs: {
                                size: "medium",
                                typeWidth: "w320",
                                block: "",
                                "data-test-id": "send_nft",
                              },
                              on: { click: t.goToPassword },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.send")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                  )
                : t._e(),
              t._v(" "),
              2 === t.stage
                ? n(
                    "div",
                    {
                      class: "stage" + t.stage + "__wrap",
                      attrs: { name: "stage2" },
                    },
                    [
                      n(
                        "section",
                        { staticClass: "send-token__body stage2" },
                        [
                          n(
                            "div",
                            { staticClass: "text new-title-extra-large" },
                            [t._v(t._s(t.$t("nftPage.confirmSending")))],
                          ),
                          t._v(" "),
                          n(
                            "section",
                            { staticClass: "send-token__header stage2" },
                            [
                              n(
                                "div",
                                {
                                  staticClass: "flex justify-center width-big",
                                },
                                [
                                  t.token.getImageUrl() && !t.isImgError
                                    ? n("AtomicCircleAvatar", {
                                        attrs: {
                                          src: t.token.getImageUrl(),
                                          size: 100,
                                          fallbackSrc: e(393),
                                        },
                                        on: {
                                          imgSrcError: function (a) {
                                            t.isImgError = !0;
                                          },
                                        },
                                      })
                                    : n("div", {
                                        staticClass: "empty__nft with-img",
                                      }),
                                ],
                                1,
                              ),
                            ],
                          ),
                          t._v(" "),
                          n(
                            "div",
                            { staticClass: "title new-text-headline m-t-20" },
                            [
                              t._v(
                                "\n        " + t._s(t.token.name) + "\n      ",
                              ),
                            ],
                          ),
                          t._v(" "),
                          n("AtomicLabelGroup", {
                            attrs: {
                              value: t.formatTextTrimMiddle(t.address, 14),
                              label: t.$t("nftPage.toAddress"),
                              "data-test-id": "token_address",
                            },
                          }),
                          t._v(" "),
                          n("AtomicLabelGroup", {
                            attrs: {
                              value: t.formatTextTrimMiddle(
                                t.token.tokenId,
                                14,
                              ),
                              label: t.$t("nftPage.tokenID"),
                              "data-test-id": "token_id",
                            },
                          }),
                          t._v(" "),
                          t._e(),
                        ],
                        1,
                      ),
                      t._v(" "),
                      n(
                        "section",
                        { staticClass: "send-token__password stage2" },
                        [
                          n(
                            "div",
                            { staticClass: "password_wrap" },
                            [
                              n("AtomicEdit", {
                                ref: "confirmPassword",
                                attrs: {
                                  modelValue: t.password,
                                  focus: "",
                                  error: t.passwordError,
                                  isShowPassword: "",
                                  type: "password",
                                  placeholder: t.$t("input.password"),
                                  "data-test-id": "password",
                                },
                                on: {
                                  "enter-pressed": t.sendToken,
                                  "update:modelValue": function (a) {
                                    t.password = a;
                                  },
                                },
                              }),
                            ],
                            1,
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "section",
                        { staticClass: "send-token__control stage2" },
                        [
                          n(
                            "BaseButton",
                            {
                              attrs: {
                                size: "medium",
                                typeWidth: "w320",
                                "data-test-id": "confirm",
                              },
                              on: { click: t.sendToken },
                            },
                            [
                              t._v(
                                "\n        " +
                                  t._s(t.$t("button.confirm")) +
                                  "\n      ",
                              ),
                            ],
                          ),
                        ],
                        1,
                      ),
                    ],
                  )
                : t._e(),
              t._v(" "),
              3 === t.stage
                ? n("div", { attrs: { name: "stage3" } }, [
                    n(
                      "section",
                      { staticClass: "send-token__sending stage3" },
                      [
                        n("AtomicLoader"),
                        t._v(" "),
                        n(
                          "div",
                          { staticClass: "new-title-extra-large text" },
                          [t._v(t._s(t.$t("nftPage.sending")) + "...")],
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass:
                              "sending-process-text new-text-medium new-text-gray",
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.$t("nftPage.sendingProcessText")) +
                                "\n      ",
                            ),
                          ],
                        ),
                      ],
                      1,
                    ),
                  ])
                : t._e(),
              t._v(" "),
              4 === t.stage
                ? n(
                    "div",
                    {
                      class: "stage" + t.stage + "__wrap",
                      attrs: { name: "stage4 result" },
                    },
                    [
                      n("SendTokenResult", {
                        attrs: {
                          hash: t.txHash,
                          token: t.token,
                          isSuccess: t.success,
                          isImgError: t.isImgError,
                          "data-test-id": t.success
                            ? "send_success"
                            : "send_failed",
                        },
                        on: {
                          tryAgain: t.tryAgain,
                          backToForm: function (a) {
                            return t.$emit("close");
                          },
                        },
                      }),
                    ],
                    1,
                  )
                : t._e(),
            ],
          );
        },
        r = [];
    },
    2780: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "SuccessMark",
        props: { color: { type: String, default: "white" } },
      };
    },
    2782: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "Diamond" };
    },
    2783: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "RateStart" };
    },
    2784: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ClockIcon" };
    },
    2785: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "AlertIcon",
        props: { type: { type: String, default: "Success" } },
        computed: {
          imgPath() {
            return e(2874)(`./alert-${this.type.toLowerCase()}.svg`);
          },
          iconClass() {
            return "alert_icon_" + this.type.toLowerCase();
          },
        },
      };
    },
    2786: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "SelectArrow" };
    },
    2787: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "SuccessIcon" };
    },
    2788: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ExchangeArrow" };
    },
    2789: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "PortfolioChart" };
    },
    2790: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "ExchangeArrow" };
    },
    2821: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var n = e(2837);
      const r = "appRate::disabled",
        s = 4,
        i = 1e3;
      a.default = {
        name: "RateStars",
        components: { RateStart: n.RateStart },
        props: {
          userRate: { type: Number, default: 0 },
          isRate: { type: Boolean, default: !0 },
        },
        data: () => ({
          fetchRatingDisabledTimeout: null,
          isRateStars: !1,
          hoverStars: [],
        }),
        mounted() {
          this.fetchRatingDisabled();
        },
        destroyed() {
          clearTimeout(this.fetchRatingDisabledTimeout);
        },
        methods: {
          fetchRatingDisabled() {
            ((this.isRateStars = !localStorage.getItem(r)),
              clearTimeout(this.fetchRatingDisabledTimeout),
              (this.fetchRatingDisabledTimeout = setTimeout(
                () => this.fetchRatingDisabled(),
                i,
              )));
          },
          hoverStart(t) {
            if (!this.userRate) {
              this.disableHoverStart();
              for (let a = 0; a <= t; a += 1) this.hoverStars.push(a);
            }
          },
          disableHoverStart() {
            this.userRate || (this.hoverStars = []);
          },
          rateApp(t) {
            t >= s
              ? (localStorage.setItem(r, "1"),
                this.$bus.$emit("openRateSuccess"),
                this.$electron.openExternal(
                  "https://www.trustpilot.com/evaluate/atomicwallet.io",
                ))
              : this.$bus.$emit("openRatePopup", t);
          },
        },
      };
    },
    2837: function (t, a, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "AlertIcon", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(a, "ClockIcon", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(a, "Diamond", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(a, "ExchangeArrow", {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(a, "ExchangeWhiteArrow", {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(a, "PortfolioChart", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(a, "RateStart", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(a, "SelectArrow", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(a, "SuccessIcon", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(a, "SuccessMark", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }));
      var r = n(e(2867)),
        s = n(e(2869)),
        i = n(e(2871)),
        o = n(e(2873)),
        l = n(e(2876)),
        d = n(e(2878)),
        c = n(e(2843)),
        f = n(e(2880)),
        p = n(e(2882)),
        v = n(e(2884));
    },
    2843: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2780),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2857),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2851: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = { name: "LoadingEllipsis" };
    },
    2857: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { height: "7", viewBox: "0 0 10 7", width: "10" } },
            [
              e("path", {
                class: "fill-" + t.color,
                attrs: {
                  d: "M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L4.2 4.4L1.7 1.9C1.3 1.5 0.7 1.5 0.3 1.9C-0.1 2.3 -0.1 2.9 0.3 3.3L3.5 6.4C3.6 6.5 3.6 6.5 3.7 6.5L3.8 6.6C3.9 6.6 4 6.7 4.2 6.7C4.4 6.7 4.5 6.7 4.6 6.6C4.6 6.6 4.7 6.6 4.7 6.5C4.8 6.5 4.9 6.4 4.9 6.3L9.7 1.5C10.1 1.3 10.1 0.7 9.7 0.3Z",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2867: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2782),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2868),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2868: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "23",
                viewBox: "0 0 26 23",
                width: "26",
              },
            },
            [
              e("path", {
                attrs: {
                  "clip-rule": "evenodd",
                  d: "M7.97124 0.0823455C8.07955 0.0281928 8.19898 0 8.32007 0H17.6799C17.801 0 17.9204 0.0281928 18.0287 0.0823455L21.6558 1.89589C21.7763 1.95326 21.8837 2.04234 21.9643 2.16056L25.855 7.86691C25.8924 7.91923 25.9226 7.9753 25.9456 8.03369C25.9659 8.08494 25.9803 8.13759 25.9892 8.19075C26.0034 8.27463 26.0034 8.35902 25.9905 8.4408C25.9854 8.47314 25.9782 8.50507 25.9692 8.53641C25.9377 8.64541 25.8825 8.74801 25.8051 8.83569C25.8007 8.84071 25.7962 8.84567 25.7917 8.85057L13.5875 22.6127C13.5628 22.6411 13.5361 22.6674 13.5078 22.6917C13.4509 22.7405 13.3876 22.7806 13.3199 22.811C13.2426 22.8458 13.1596 22.868 13.074 22.8761C13.0495 22.8785 13.0248 22.8797 13 22.8797C12.9861 22.8797 12.9722 22.8793 12.9583 22.8785C12.8624 22.8734 12.7691 22.8507 12.6828 22.8122C12.632 22.7896 12.5837 22.7616 12.5387 22.7286C12.4927 22.6949 12.4503 22.6561 12.4125 22.6127L0.208288 8.85056C0.20355 8.84545 0.198886 8.84028 0.194297 8.83505C0.116572 8.74679 0.0612785 8.64345 0.0300574 8.5337C-0.00107025 8.42473 -0.00868813 8.3086 0.0103344 8.19336C0.0193362 8.13836 0.0343341 8.08388 0.0555126 8.03092C0.0783245 7.97357 0.108147 7.9185 0.144899 7.86703L4.03462 2.16212C4.0381 2.15698 4.04164 2.15189 4.04525 2.14684C4.12466 2.03548 4.22827 1.95109 4.344 1.89597L7.97124 0.0823455ZM4.94073 3.60232L1.9533 7.98389L6.66374 10.0565L7.46269 4.8633L4.94073 3.60232ZM8.98923 5.19992L8.18925 10.3998H17.8107L17.0108 5.19992H8.98923ZM18.5373 4.8633L19.3363 10.0565L24.0467 7.98389L21.0593 3.60232L18.5373 4.8633ZM8.5042 1.55998L6.42423 2.59996L8.5042 3.63995H17.4958L19.5758 2.59996L17.4958 1.55998H8.5042ZM3.72894 10.4695L9.34444 16.8018L6.71591 11.7837L3.72894 10.4695ZM8.56917 11.9598L13 20.4187L17.4308 11.9598H8.56917ZM19.2841 11.7837L16.6556 16.8018L22.2711 10.4695L19.2841 11.7837Z",
                  fill: "#00C2FF",
                  "fill-rule": "evenodd",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2869: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2783),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2870),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2870: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { height: "38", viewBox: "0 0 38 38", width: "38" } },
            [
              e("path", {
                attrs: {
                  d: "M25.8069 11.4453L34.8195 12.3099C37.9555 12.6108 38.9173 15.6741 36.4957 17.6867L29.4398 23.5509L32.0592 33.1041C32.9194 36.2415 30.2506 38.1407 27.5775 36.2525L19.0041 30.1967L10.4307 36.2525C7.76847 38.1331 5.08875 36.2419 5.94907 33.1041L8.56846 23.5509L1.51257 17.6867C-0.919172 15.6657 0.0388109 12.6122 3.18825 12.3099L12.1992 11.4453L16.1693 2.29209C17.4125 -0.574326 20.5965 -0.57289 21.8387 2.29238L25.8069 11.4453Z",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2871: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2784),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2872),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2872: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "18",
                viewBox: "0 0 18 18",
                width: "18",
              },
            },
            [
              e("path", {
                attrs: {
                  d: "M9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5ZM9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM8.25 5C8.66421 5 9 5.33579 9 5.75V8.9849L11.7692 10.05C12.1558 10.1987 12.3487 10.6326 12.2 11.0192C12.0513 11.4058 11.6174 11.5987 11.2308 11.45L7.98077 10.2C7.69112 10.0886 7.5 9.81033 7.5 9.5V5.75C7.5 5.33579 7.83579 5 8.25 5Z",
                  fill: "white",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2873: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2785),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2875),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2874: function (t, a, e) {
      var n = {
        "./alert-error.svg": 807,
        "./alert-report.svg": 808,
        "./alert-success.svg": 809,
        "./alert-warning.svg": 810,
      };
      function r(t) {
        var a = s(t);
        return e(a);
      }
      function s(t) {
        if (!e.o(n, t)) {
          var a = new Error("Cannot find module '" + t + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        return n[t];
      }
      ((r.keys = function () {
        return Object.keys(n);
      }),
        (r.resolve = s),
        (t.exports = r),
        (r.id = 2874));
    },
    2875: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", [
            e("div", { staticClass: "alert_icon", class: t.iconClass }, [
              e("div", [e("img", { attrs: { src: t.imgPath } })]),
            ]),
          ]);
        },
        r = [];
    },
    2876: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2786),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2877),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2877: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { height: "6", viewBox: "0 0 10 6", width: "10" } },
            [
              e("path", {
                attrs: {
                  d: "M1.45442 0.691051C1.06285 0.384877 0.497225 0.454099 0.19105 0.845663C-0.115124 1.23723 -0.0459015 1.80286 0.345663 2.10903L4.4423 5.3123C4.76791 5.5669 5.22507 5.56699 5.55078 5.31252L9.65074 2.10925C10.0424 1.80323 10.1119 1.23763 9.80585 0.845942C9.49983 0.454257 8.93423 0.384813 8.54255 0.690833L4.99691 3.46101L1.45442 0.691051Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2878: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2787),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2879),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2879: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "18",
                viewBox: "0 0 18 18",
                width: "18",
              },
            },
            [
              e("path", {
                attrs: {
                  "clip-rule": "evenodd",
                  d: "M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9ZM17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9ZM12.2803 7.78033C12.5732 7.48744 12.5732 7.01256 12.2803 6.71967C11.9874 6.42678 11.5126 6.42678 11.2197 6.71967L8 9.93934L6.78033 8.71967C6.48744 8.42678 6.01256 8.42678 5.71967 8.71967C5.42678 9.01256 5.42678 9.48744 5.71967 9.78033L7.46967 11.5303C7.76256 11.8232 8.23744 11.8232 8.53033 11.5303L12.2803 7.78033Z",
                  fill: "#00E05A",
                  "fill-rule": "evenodd",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2880: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2788),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2881),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2881: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            {
              attrs: {
                "data-test-id": "exchange_arrow",
                fill: "none",
                height: "16",
                viewBox: "0 0 18 16",
                width: "18",
              },
            },
            [
              e("path", {
                attrs: {
                  d: "M17.7071 7.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L14.586 7H1C0.487164 7 0.0644928 7.38604 0.0067277 7.88338L0 8C0 8.51284 0.38604 8.93551 0.883379 8.99327L1 9H14.586L9.29289 14.2929C8.93241 14.6534 8.90468 15.2206 9.2097 15.6129L9.29289 15.7071C9.65338 16.0676 10.2206 16.0953 10.6129 15.7903L10.7071 15.7071L17.7071 8.70711L17.8037 8.59531L17.8753 8.48406L17.9288 8.37134L17.9642 8.26599L17.989 8.14847L17.996 8.08925L17.9998 7.98082L17.996 7.91075L17.9798 7.79927L17.9503 7.68786L17.9063 7.57678L17.854 7.47929L17.7872 7.38325C17.7623 7.35153 17.7356 7.32136 17.7071 7.29289L10.7071 0.292893L17.7071 7.29289Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2882: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2789),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2883),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2883: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            { attrs: { width: "24", height: "24", viewBox: "0 0 24 24" } },
            [
              e("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M18.9193 14C18.0526 17.0034 15.2832 19.2 12.0007 19.2C9.33593 19.2 7.00928 17.7524 5.76428 15.6006L1.6084 18C2.0905 18.835 2.66825 19.6035 3.32628 20.2919C3.43835 20.4091 3.55277 20.524 3.66947 20.6366C4.74436 21.6735 6.01052 22.5075 7.4085 23.0866C8.85424 23.6854 10.3931 23.9917 11.9379 23.9998L12.0007 24L12.0745 23.9998C13.0921 23.9935 14.111 23.8579 15.1065 23.5911C17.0564 23.0686 18.8329 22.0657 20.28 20.6864L20.3319 20.6366C20.4194 20.5522 20.5055 20.4666 20.5903 20.3796C20.6228 20.3464 20.6551 20.3129 20.6871 20.2793C20.9811 19.9708 21.2596 19.6458 21.5209 19.3051C22.719 17.7439 23.5082 15.9206 23.8329 14H18.9193Z",
                  fill: "#979EB0",
                },
              }),
              t._v(" "),
              e("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M12 4.8V0C13.5759 0 15.1363 0.310389 16.5922 0.913446C18.0327 1.51011 19.3429 2.38172 20.4498 3.47939C20.4735 3.50289 20.4971 3.5265 20.5206 3.5502C21.6183 4.65706 22.4899 5.96731 23.0866 7.4078C23.6896 8.86371 24 10.4241 24 12H19.2C19.2 8.02355 15.9764 4.8 12 4.8Z",
                  fill: "#B8BDCC",
                },
              }),
              t._v(" "),
              e("path", {
                attrs: {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M10 0.167725C8.59684 0.404905 7.24167 0.890715 6 1.60758C5.54395 1.87088 5.10723 2.16304 4.69219 2.48167C3.82363 3.14849 3.05039 3.93126 2.39385 4.80816C2.10928 5.1883 1.84658 5.58614 1.60771 5.99989C0.686133 7.59609 0.146387 9.37994 0.0258789 11.2121C0.00869141 11.4739 0 11.7366 0 11.9999C0 12.3547 0.0157227 12.7085 0.0469727 13.0603C0.141835 14.1298 0.379722 15.1804 0.753126 16.1841L4.76391 13.8684L5.00854 13.7272C4.87228 13.1738 4.8 12.5953 4.8 11.9999C4.8 8.71741 6.99657 5.94797 10 5.0813V0.167725Z",
                  fill: "#7A859F",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2884: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2790),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2885),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2885: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "svg",
            {
              attrs: {
                "data-test-id": "exchange_white_arrow",
                fill: "none",
                height: "16",
                viewBox: "0 0 18 16",
                width: "18",
              },
            },
            [
              e("path", {
                attrs: {
                  d: "M17.7071 7.29289L10.7071 0.292893C10.3166 -0.0976311 9.68342 -0.0976311 9.29289 0.292893C8.93241 0.653377 8.90468 1.22061 9.2097 1.6129L9.29289 1.70711L14.586 7H1C0.487164 7 0.0644928 7.38604 0.0067277 7.88338L0 8C0 8.51284 0.38604 8.93551 0.883379 8.99327L1 9H14.586L9.29289 14.2929C8.93241 14.6534 8.90468 15.2206 9.2097 15.6129L9.29289 15.7071C9.65338 16.0676 10.2206 16.0953 10.6129 15.7903L10.7071 15.7071L17.7071 8.70711L17.8037 8.59531L17.8753 8.48406L17.9288 8.37134L17.9642 8.26599L17.989 8.14847L17.996 8.08925L17.9998 7.98082L17.996 7.91075L17.9798 7.79927L17.9503 7.68786L17.9063 7.57678L17.854 7.47929L17.7872 7.38325C17.7623 7.35153 17.7356 7.32136 17.7071 7.29289L10.7071 0.292893L17.7071 7.29289Z",
                  fill: "#ffffff",
                },
              }),
            ],
          );
        },
        r = [];
    },
    2973: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2821),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(2974),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    2974: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return t.isRateStars
            ? e("div", { staticClass: "rate-stars" }, [
                t._e(),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "rate-stars__wrap" },
                  t._l(5, function (a) {
                    return e(
                      "div",
                      {
                        key: a,
                        staticClass: "rate-stars__item",
                        class: {
                          "rate-stars__item--hover":
                            t.hoverStars.length > 0 && t.hoverStars.includes(a),
                          "rate-stars__item--active": a <= t.userRate,
                          "rate-stars__item--good": 5 === t.userRate,
                        },
                        on: {
                          click: function (e) {
                            t.isRate && t.rateApp(a);
                          },
                          mouseleave: function (a) {
                            t.isRate && t.disableHoverStart();
                          },
                          mouseover: function (e) {
                            t.isRate && t.hoverStart(a);
                          },
                        },
                      },
                      [e("RateStart")],
                      1,
                    );
                  }),
                  0,
                ),
              ])
            : t._e();
        },
        r = [];
    },
    2980: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e(2851),
        r = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(s);
      var i = e(3067),
        o = e(5),
        l = !1,
        d = null,
        c = null,
        f = null,
        p = Object(o["a"])(r.a, i["a"], i["b"], l, d, c, f);
      a["default"] = p.exports;
    },
    3067: function (t, a, e) {
      "use strict";
      (e.d(a, "a", function () {
        return n;
      }),
        e.d(a, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "div",
            { staticClass: "loading-ellipsis" },
            t._l(4, function (t) {
              return e("div", { key: t });
            }),
            0,
          );
        },
        r = [];
    },
    5342: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var n = e(830);
      a.default = function (t, a) {
        void 0 === a && (a = n.MAX_LENGTH_FINANCE_TRIM_DEFAULT);
        const [e, r] = String(t).split("."),
          s = e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
          i = r ? `${s}.${r}` : "" + s,
          o = "...";
        return s.length > a
          ? `${s.substr(0, a - o.length)}${o}`
          : i.length > a
            ? i.substr(0, a)
            : i;
      };
    },
    5820: function (t, a, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var r = e(60),
        s = e(375),
        i = n(e(11676)),
        o = n(e(2980)),
        l = e(804),
        d = n(e(820)),
        c = n(e(5342));
      a.default = {
        name: "NFTSendToken",
        components: { SendTokenResult: i.default, LoadingEllipsis: o.default },
        mixins: [s.NFTMixin],
        props: { token: { type: Object, default: () => ({}) } },
        data: () => ({
          fee: "",
          password: "",
          passwordError: "",
          address: "",
          addressError: "",
          isFeeEnough: !0,
          success: !0,
          txHash: "",
          stage: 1,
          isImgError: !1,
        }),
        computed: {
          transferText() {
            return this.$t("nftPage.transferText", {
              tokenName: this.token.name || "",
              coinId: this.coin.id,
            });
          },
          available() {
            return this.coin.toCurrencyUnit(
              new this.coin.BN(this.coin.balance || 0),
            );
          },
        },
        mounted() {
          this.setFee();
        },
        methods: {
          ...(0, r.mapActions)(["setNFT"]),
          formatFinanceTrim: c.default,
          formatTextTrimMiddle: d.default,
          getValueFiat: l.getValueFiat,
          closeSendToken() {
            this.$emit("close");
          },
          onChangeAddress(t) {
            ((this.address = t), this.validateAddress());
          },
          tryAgain() {
            ((this.stage = 1), (this.address = ""), (this.password = ""));
          },
          async setFee() {
            const t =
                this.address ||
                this.$getAddressWallet(this.coin.deprecatedParent),
              a = {
                contractAddress: this.token.contractAddress,
                tokenId: this.token.tokenId,
                tokenStandard: this.token.tokenStandard,
                toAddress: t,
              },
              e = (await this.coin.getNftFee(a)) || 0;
            ((this.fee = this.coin.toCurrencyUnit(new this.coin.BN(e))),
              (this.isFeeEnough = Number(this.available) > Number(this.fee)));
          },
          async validateAddress() {
            if (((this.addressError = ""), this.address.length))
              try {
                const t = await this.coin.validateAddress(this.address);
                this.addressError = t ? "" : this.$t("error.checkAddress");
              } catch (t) {
                this.addressError = this.$t("error.checkAddress");
              }
            else this.addressError = this.$t("error.addressCantBeBlank");
            return "" === this.addressError;
          },
          async goToPassword() {
            (await this.validateAddress()) &&
              this.isFeeEnough &&
              ((this.stage = 2),
              this.$nextTick(() => this.$refs.confirmPassword.setFocus()));
          },
          async validatePassword() {
            return (
              (this.passwordError = ""),
              "" === this.password
                ? (this.passwordError = this.$t("error.passwordCantBeBlank"))
                : (await this.$wallets.checkPassword(this.password)) ||
                  (this.passwordError = this.$t("error.wrongPassword")),
              "" === this.passwordError
            );
          },
          async sendToken() {
            if (await this.validatePassword()) {
              ((this.stage = 3), (this.success = !1));
              try {
                const { contractAddress: t, tokenId: a } = this.token,
                  e = await this.coin.transferNft(t, a, this.address);
                e.tx &&
                  ((this.txHash = e.tx),
                  (this.stage = 4),
                  (this.success = !0),
                  this.setNFT());
              } catch (t) {
                ((this.stage = 4),
                  console.error("ACT-1712: transfer error", t));
              }
            }
          },
        },
      };
    },
    5821: function (t, a, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      var r = e(375),
        s = n(e(2973)),
        i = n(e(11679));
      a.default = {
        name: "SendTokenResult",
        components: { SendResultAnimation: i.default, RateStars: s.default },
        mixins: [r.NFTMixin],
        props: {
          token: { type: Object, default: () => ({}) },
          hash: { type: String, default: "" },
          isError: { type: Boolean, default: !1 },
          isSuccess: { type: Boolean, default: !1 },
          message: { type: String, default: "" },
          mailTitle: { type: String, default: "" },
          mailText: { type: String, default: "" },
          errorMessage: { type: String, default: "" },
          buttonName: { type: Object, default: null },
          isImgError: { type: Boolean, default: !1 },
        },
        computed: {
          explorerUrl() {
            const { explorer: t } = this.$wallets.getWallet(
              this.coin.deprecatedParent,
            );
            return (null === t || void 0 === t ? void 0 : t.webUrl) || "";
          },
          contactSupport() {
            return { tags: ["send_tag"] };
          },
        },
        methods: {
          backActions(t) {
            this.$emit(t);
          },
          openTransactionHash() {
            this.$electron.openExternal(`${this.explorerUrl}${this.hash}`);
          },
        },
      };
    },
    5822: function (t, a, e) {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0));
      a.default = {
        name: "SendResultAnimation",
        props: {
          isSuccess: { type: Boolean, default: !1 },
          isAvailable: { type: Boolean, default: !0 },
          src: { type: String, default: "" },
          size: { type: Number, default: 60 },
        },
      };
    },
  },
]);
