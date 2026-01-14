(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [387],
  {
    2750: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(5399),
        r = t.n(a);
      for (var i in a)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return a[e];
            });
          })(i);
      var o = t(8889),
        s = t(5);
      function l(e) {
        t(8887);
      }
      var p = !1,
        c = l,
        m = null,
        f = null,
        x = Object(s["a"])(r.a, o["a"], o["b"], p, c, m, f);
      n["default"] = x.exports;
    },
    5399: function (e, n, t) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0));
      n.default = {
        name: "Simplex",
        computed: {
          tabs() {
            return [
              {
                title: this.$t("simplexPage.tabs.buyCrypto"),
                path: "/simplex",
              },
              {
                title: this.$t("simplexPage.tabs.orderHistory"),
                path: "/simplex/history",
              },
            ];
          },
        },
        methods: {
          isActive(e) {
            return (
              ("simplex-with-tickers" === this.$route.name ||
                "simplex-with-tickers-value" === this.$route.name) &&
              "/simplex" === e
            );
          },
        },
      };
    },
    8887: function (e, n, t) {
      var a = t(8888);
      (a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals));
      var r = t(23).default;
      r("279040b0", a, !0, {});
    },
    8888: function (e, n, t) {
      ((n = e.exports = t(22)(!1)),
        n.push([
          e.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.inner-exchange .header-text{font-size:22px;text-align:center;display:block;margin-top:30px;width:400px;margin-left:180px\n}\n.inner-exchange .exchange-block{margin-top:80px\n}\n.inner-exchange .scroll-area{height:100%;width:100%\n}\n.inner-exchange .error-wrapper{margin-top:45px;height:17px\n}\n.inner-exchange .exchange-rate{display:flex;flex-direction:column;align-items:center;margin-top:13px;gap:16px;margin-bottom:20px\n}\n.inner-exchange .exchange-rate>div{display:flex;flex-direction:column;gap:4px\n}\n.inner-exchange .exchange-rate>div>p{color:#8290ad;font-size:14px\n}\n.inner-exchange .exchange-rate .service-name{padding-left:5px\n}\n.inner-exchange .exchange-rate .rate{color:#fff\n}\n.inner-exchange .submit-wrapper{text-align:center;position:relative;margin:45px 0 58px\n}\n.inner-exchange .submit-wrapper .button{opacity:.4;text-transform:uppercase;pointer-events:none\n}\n.inner-exchange .submit-wrapper .button.disabled{opacity:.3;pointer-events:none\n}\n.inner-exchange .submit-wrapper .accepted{opacity:1;pointer-events:all\n}\n.inner-exchange .submit-wrapper .result-wrapper,.inner-exchange .submit-wrapper .waiting-wrapper{display:flex;justify-content:center;position:absolute;bottom:10px\n}\n.inner-exchange .submit-wrapper .result-wrapper .send-result,.inner-exchange .submit-wrapper .result-wrapper .send-result-pending,.inner-exchange .submit-wrapper .result-wrapper .error,.inner-exchange .submit-wrapper .waiting-wrapper .send-result,.inner-exchange .submit-wrapper .waiting-wrapper .send-result-pending,.inner-exchange .submit-wrapper .waiting-wrapper .error{padding:0 10px;text-align:center;width:503px;border-radius:12.5px;background-color:#6b963b;line-height:18px;font-size:11px;font-weight:300;color:#fff\n}\n.inner-exchange .submit-wrapper .result-wrapper .send-result a,.inner-exchange .submit-wrapper .result-wrapper .send-result-pending a,.inner-exchange .submit-wrapper .result-wrapper .error a,.inner-exchange .submit-wrapper .waiting-wrapper .send-result a,.inner-exchange .submit-wrapper .waiting-wrapper .send-result-pending a,.inner-exchange .submit-wrapper .waiting-wrapper .error a{padding-left:3px;text-decoration:underline;cursor:pointer\n}\n.inner-exchange .submit-wrapper .result-wrapper .error,.inner-exchange .submit-wrapper .waiting-wrapper .error{background-color:#c03647\n}\n.inner-exchange .submit-wrapper .result-wrapper .send-result-pending,.inner-exchange .submit-wrapper .waiting-wrapper .send-result-pending{background-color:#1f8efa\n}\n.inner-exchange .submit-wrapper .waiting-wrapper{bottom:-15px\n}\n.inner-exchange .exchange-purchase{display:flex;justify-content:center;align-items:center;gap:32px\n}\n.inner-exchange .exchange-purchase>img:first-child{width:60px;height:20px;filter:opacity(0.5)\n}\n.inner-exchange .exchange-purchase>img:last-child{width:52px;height:32px\n}\n.inner-exchange .cashback-promotion{position:relative;width:100%;bottom:0;left:0;transform:none;margin-top:15px\n}\n.inner-exchange .dropdown.small .search-select{min-height:290px\n}\n@media(min-width: 1360px){\n.inner-exchange .error-wrapper{margin-top:50px\n}\n.inner-exchange .submit-wrapper .button{font-size:24px\n}\n}\n.webview-wrapper{height:calc(100vh - 60px);z-index:1\n}\n.webview-wrapper>webview{width:100%;height:100%\n}\n#simplexWebview{height:100%;transition:all .5s;opacity:1\n}\n.exchange-history .table.table-new .item:nth-child(1){width:39%\n}\n.exchange-history .table.table-new .item:nth-child(2){width:39%\n}\n.exchange-history .table.table-new .item:nth-child(3){width:13%;text-align:right\n}\n.exchange-history .table.table-new .item:nth-child(4){width:calc(9% - 15px);padding-right:15px\n}\n.exchange-history .table.table-new .main{overflow-y:inherit\n}\n.exchange-history .change-icon{margin:0;padding:0\n}\n.exchange-history .table.table-new .table-row{padding-top:12px\n}",
          "",
        ]));
    },
    8889: function (e, n, t) {
      "use strict";
      (t.d(n, "a", function () {
        return a;
      }),
        t.d(n, "b", function () {
          return r;
        }));
      var a = function () {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t(
            "main",
            [
              t(
                "div",
                { staticClass: "header-tabs" },
                e._l(e.tabs, function (n, a) {
                  return t(
                    "router-link",
                    {
                      key: a,
                      staticClass: "choice",
                      class: { active: e.isActive(n.path) },
                      attrs: {
                        to: n.path,
                        exactActiveClass: "active",
                        tag: "div",
                      },
                    },
                    [
                      t("span", [
                        e._v("\n        " + e._s(n.title) + "\n      "),
                      ]),
                    ],
                  );
                }),
                1,
              ),
              e._v(" "),
              t("router-view"),
            ],
            1,
          );
        },
        r = [];
    },
  },
]);
