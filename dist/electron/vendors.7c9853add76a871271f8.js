(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [96],
  {
    196: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "ProgressBar",
        props: {
          text: { type: String, default: "" },
          max: { type: Number, default: 1 },
          value: { type: Number, default: 0 },
        },
        computed: {
          loadingPercentage() {
            return ((this.value / this.max) * 100).toFixed();
          },
        },
      };
    },
    197: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "AlertHint",
        data() {
          return { hint: !1 };
        },
        created() {
          this.$bus.$on("alert-hint-catch", this.updateAlertHint);
        },
        beforeDestroy() {
          this.$bus.$off("alert-hint-catch", this.updateAlertHint);
        },
        methods: {
          updateAlertHint(a) {
            ((this.hint = { message: a.message, type: a.type }),
              this.hideAlertHint());
          },
          hideAlertHint() {
            setTimeout(() => {
              this.hint = !1;
            }, 2e3);
          },
        },
      };
    },
    200: function (a, e, t) {
      "use strict";
      var n = t(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(t(919));
      e.default = {
        name: "CachedImage",
        components: { ImagePreview: o.default },
        props: {
          url: { type: [String, null], default: null },
          alt: { type: String, default: "" },
          name: { type: String, default: "" },
          type: { type: String, default: "jpeg" },
          previewType: { type: String, default: "nft" },
        },
        data() {
          return { isError: !1, base64ImgSrc: null };
        },
        async mounted() {
          this.url || this.onError();
        },
        methods: {
          onError() {
            ((this.isError = !0), this.$emit("loaded"));
          },
        },
      };
    },
    201: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "ImagePreview",
        props: {
          isVideo: { type: Boolean, default: !1 },
          type: { type: String, default: "article" },
        },
      };
    },
    2077: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(196),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(342),
        s = t(5);
      function d(a) {
        t(2078);
      }
      var l = !1,
        c = d,
        f = "data-v-fda6f070",
        u = null,
        p = Object(s["a"])(o.a, r["a"], r["b"], l, c, f, u);
      e["default"] = p.exports;
    },
    2078: function (a, e, t) {
      var n = t(2079);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var o = t(23).default;
      o("d056b3de", n, !0, {});
    },
    2079: function (a, e, t) {
      ((e = a.exports = t(22)(!1)),
        e.push([
          a.i,
          '\n@keyframes spinner-data-v-fda6f070{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-fda6f070{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-fda6f070{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-fda6f070{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-fda6f070{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-fda6f070{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-fda6f070{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-fda6f070{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-fda6f070{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-fda6f070{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-fda6f070{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-fda6f070]{color:#6b963b\n}\n.text-red[data-v-fda6f070]{color:#c03647\n}\n.text-gray[data-v-fda6f070]{color:#8290ad\n}\n.text-blue[data-v-fda6f070]{color:#00c2ff\n}\n.text-danger[data-v-fda6f070]{color:#8c4545\n}\n.text-title[data-v-fda6f070]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-fda6f070]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-fda6f070]{color:#f1b70b\n}\n.text-white[data-v-fda6f070]{color:#fff\n}\n.text-bigger[data-v-fda6f070]{font-size:18px;font-weight:500\n}\n.text-big[data-v-fda6f070]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-fda6f070]{font-size:14px\n}\n.text-middle-height[data-v-fda6f070]{line-height:24px\n}\n.text-small[data-v-fda6f070]{font-size:12px\n}\n.text-word-break[data-v-fda6f070]{word-break:break-all\n}\n.text-right[data-v-fda6f070]{text-align:right\n}\n.text-left[data-v-fda6f070]{text-align:left\n}\n.text-line-middle[data-v-fda6f070]{line-height:24px\n}\n.text-link[data-v-fda6f070],.text-link-underline[data-v-fda6f070]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-fda6f070]:hover,.text-link-underline[data-v-fda6f070]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-fda6f070]{text-decoration:underline\n}\n.text-center[data-v-fda6f070]{text-align:center\n}\n.text-pointer[data-v-fda6f070]{cursor:pointer\n}\n.gap-10[data-v-fda6f070]{gap:10px\n}\n.m-t-auto[data-v-fda6f070]{margin-top:auto\n}\n.m-t-4[data-v-fda6f070]{margin-top:4px\n}\n.m-t-5[data-v-fda6f070]{margin-top:5px\n}\n.m-t-8[data-v-fda6f070]{margin-top:10px\n}\n.m-t-10[data-v-fda6f070]{margin-top:10px\n}\n.m-t-13[data-v-fda6f070]{margin-top:10px\n}\n.m-t-15[data-v-fda6f070]{margin-top:15px\n}\n.m-t-16[data-v-fda6f070]{margin-top:16px\n}\n.m-t-20[data-v-fda6f070]{margin-top:20px\n}\n.m-t-24[data-v-fda6f070]{margin-top:24px\n}\n.m-t-25[data-v-fda6f070]{margin-top:25px\n}\n.m-t-26[data-v-fda6f070]{margin-top:26px\n}\n.m-t-30[data-v-fda6f070]{margin-top:30px\n}\n.m-t-35[data-v-fda6f070]{margin-top:35px\n}\n.m-t-40[data-v-fda6f070]{margin-top:40px\n}\n.m-t-45[data-v-fda6f070]{margin-top:45px\n}\n.m-t-50[data-v-fda6f070]{margin-top:50px\n}\n.m-t-60[data-v-fda6f070]{margin-top:60px\n}\n.m-t-65[data-v-fda6f070]{margin-top:65px\n}\n.m-t-80[data-v-fda6f070]{margin-top:80px\n}\n.m-l-5[data-v-fda6f070]{margin-left:5px\n}\n.m-l-10[data-v-fda6f070]{margin-left:10px\n}\n.m-l-15[data-v-fda6f070]{margin-left:15px\n}\n.m-l-20[data-v-fda6f070]{margin-left:20px\n}\n.m-l-25[data-v-fda6f070]{margin-left:25px\n}\n.m-l-30[data-v-fda6f070]{margin-left:30px\n}\n.m-l-35[data-v-fda6f070]{margin-left:35px\n}\n.m-r-5[data-v-fda6f070]{margin-right:5px\n}\n.m-r-10[data-v-fda6f070]{margin-right:10px\n}\n.m-r-15[data-v-fda6f070]{margin-right:15px\n}\n.m-r-30[data-v-fda6f070]{margin-right:30px\n}\n.m-b-5[data-v-fda6f070]{margin-bottom:5px !important\n}\n.m-b-15[data-v-fda6f070]{margin-bottom:15px !important\n}\n.m-b-20[data-v-fda6f070]{margin-bottom:20px !important\n}\n.m-b-30[data-v-fda6f070]{margin-bottom:30px !important\n}\n.m-b-25[data-v-fda6f070]{margin-bottom:25px !important\n}\n.m-b-50[data-v-fda6f070]{margin-bottom:50px !important\n}\n.p-t-40[data-v-fda6f070]{padding-top:40px\n}\n.p-t-85[data-v-fda6f070]{padding-top:85px !important\n}\n.hidden[data-v-fda6f070]{opacity:0 !important\n}\n.relative[data-v-fda6f070]{position:relative\n}\n.space-nowrap[data-v-fda6f070]{white-space:nowrap\n}\n.uppercase[data-v-fda6f070]{text-transform:uppercase\n}\n.lowercase[data-v-fda6f070]{text-transform:lowercase\n}\n.fade-enter-active[data-v-fda6f070]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-fda6f070]{transition:all .1s ease-out\n}\n.fade-enter[data-v-fda6f070],.fade-leave-to[data-v-fda6f070]{opacity:0\n}\n.fade-down-enter-active[data-v-fda6f070],.fade-down-leave-active[data-v-fda6f070],.fade-down-move[data-v-fda6f070]{transition:all .15s\n}\n.fade-down-leave-active[data-v-fda6f070],.fade-down-enter-active[data-v-fda6f070]{position:absolute !important\n}\n.fade-down-enter[data-v-fda6f070],.fade-down-leave-to[data-v-fda6f070]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-fda6f070],.scale-leave-active[data-v-fda6f070],.scale-move[data-v-fda6f070]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-fda6f070],.scale-leave-to[data-v-fda6f070]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-fda6f070],.slide-leave-active[data-v-fda6f070]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-fda6f070]{transition:all .2s ease\n}\n.slide-leave-active[data-v-fda6f070]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-fda6f070],.slide-leave-to[data-v-fda6f070]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-fda6f070],.slide-leave[data-v-fda6f070]{margin-bottom:0px\n}\n.slide-enter[data-v-fda6f070],.slide-leave-to[data-v-fda6f070]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-fda6f070],.slide-in-leave-active[data-v-fda6f070]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-fda6f070]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-fda6f070]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-fda6f070]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-fda6f070]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-fda6f070],.page-fade-enter-active[data-v-fda6f070]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-fda6f070],.page-fade-leave-to[data-v-fda6f070],.page-fade-enter[data-v-fda6f070]{opacity:0\n}\n.page-fade-enter-to[data-v-fda6f070]{opacity:1\n}\n.fade-out-leave-active[data-v-fda6f070],.fade-out-enter-active[data-v-fda6f070]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-fda6f070],.fade-out-leave-to[data-v-fda6f070],.fade-out-enter[data-v-fda6f070]{opacity:0\n}\n.fade-out-enter-to[data-v-fda6f070]{opacity:1\n}\n.slide-down-enter-active[data-v-fda6f070],.slide-down-leave-active[data-v-fda6f070]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-fda6f070],.slide-down-enter[data-v-fda6f070]{top:100%\n}\n.slide-down-leave[data-v-fda6f070],.slide-down-enter-to[data-v-fda6f070]{top:0%\n}\n.slide-out-enter-active[data-v-fda6f070],.slide-out-leave-active[data-v-fda6f070]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-fda6f070]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-fda6f070]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-fda6f070]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-fda6f070],.exchange-result.slide-out-enter[data-v-fda6f070]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-fda6f070],.exchange-pending.slide-out-enter[data-v-fda6f070]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-fda6f070],.slide-left-leave-active[data-v-fda6f070]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-fda6f070]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-fda6f070]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-fda6f070]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-fda6f070],.slide-right-leave-active[data-v-fda6f070]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-fda6f070]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-fda6f070]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-fda6f070]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-fda6f070],.spin-down-leave-active[data-v-fda6f070]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-fda6f070]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-fda6f070]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-fda6f070]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-fda6f070],.spin-up-leave-active[data-v-fda6f070]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-fda6f070]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-fda6f070]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-fda6f070]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-fda6f070],.puff-out-leave-active[data-v-fda6f070]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-fda6f070]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-fda6f070]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-fda6f070],.puff-out-enter-to[data-v-fda6f070]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-fda6f070],.collapse-fade-enter-active[data-v-fda6f070]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-fda6f070],.collapse-fade-leave-to[data-v-fda6f070],.collapse-fade-enter[data-v-fda6f070]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-fda6f070]{opacity:1\n}\n.lazy-fade-leave-active[data-v-fda6f070],.lazy-fade-enter-active[data-v-fda6f070]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-fda6f070],.lazy-fade-leave-to[data-v-fda6f070],.lazy-fade-enter[data-v-fda6f070]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-fda6f070]{opacity:1\n}\n.wrapper-loader--full[data-v-fda6f070]{background-color:#1f2843;z-index:21;position:absolute;width:100%;height:100%;left:0;top:0\n}\n.loading[data-v-fda6f070]{position:relative;display:inline-block;height:44px;width:44px;border:3px solid #1f8efa;border-bottom:3px solid rgba(0,0,0,0);border-radius:50%;animation:spinner-data-v-fda6f070 1.2s linear infinite\n}\n.loader[data-v-fda6f070]{transition:all .5s;opacity:.7;position:absolute;width:150px;height:150px;top:43%;left:43%;border:5px solid #1f8efa;border-top:5px solid rgba(0,0,0,0);border-bottom:5px solid rgba(0,0,0,0);border-radius:50%;animation:spinner-data-v-fda6f070 1s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)\n}\n.loading-ellipsis[data-v-fda6f070]{display:inline-block;position:relative;width:44px;height:10px\n}\n.loading-ellipsis div[data-v-fda6f070]{position:absolute;top:2px;width:8px;height:8px;border-radius:50%;background:#fff;animation-timing-function:cubic-bezier(0, 1, 1, 0)\n}\n.loading-ellipsis div[data-v-fda6f070]:nth-child(1){left:6px;animation:loading-ellipsis1-data-v-fda6f070 .6s infinite\n}\n.loading-ellipsis div[data-v-fda6f070]:nth-child(2){left:6px;animation:loading-ellipsis2-data-v-fda6f070 .6s infinite\n}\n.loading-ellipsis div[data-v-fda6f070]:nth-child(3){left:26px;animation:loading-ellipsis2-data-v-fda6f070 .6s infinite\n}\n.loading-ellipsis div[data-v-fda6f070]:nth-child(4){left:45px;animation:loading-ellipsis3-data-v-fda6f070 .6s infinite\n}\n.loading-proggress[data-v-fda6f070]{display:flex;align-items:center;justify-content:center;padding:5px 0;position:relative;width:100%;transition:all .1s;background:none;z-index:1;margin-left:0 !important;background:rgba(0,0,0,.25);transition:all .15s\n}\n.loading-proggress[data-v-fda6f070]:before{content:"";z-index:-1;position:absolute;top:50%;left:0;height:85%;width:0%;transform:translateY(-50%);background:linear-gradient(to right, rgb(66, 193, 253) 0%, rgb(31, 142, 250) 95%, rgb(0, 129, 255) 100%);opacity:.5\n}\n.loading-proggress[loading="1"][data-v-fda6f070]:before{width:1% !important\n}\n.loading-proggress[loading="2"][data-v-fda6f070]:before{width:2% !important\n}\n.loading-proggress[loading="3"][data-v-fda6f070]:before{width:3% !important\n}\n.loading-proggress[loading="4"][data-v-fda6f070]:before{width:4% !important\n}\n.loading-proggress[loading="5"][data-v-fda6f070]:before{width:5% !important\n}\n.loading-proggress[loading="6"][data-v-fda6f070]:before{width:6% !important\n}\n.loading-proggress[loading="7"][data-v-fda6f070]:before{width:7% !important\n}\n.loading-proggress[loading="8"][data-v-fda6f070]:before{width:8% !important\n}\n.loading-proggress[loading="9"][data-v-fda6f070]:before{width:9% !important\n}\n.loading-proggress[loading="10"][data-v-fda6f070]:before{width:10% !important\n}\n.loading-proggress[loading="11"][data-v-fda6f070]:before{width:11% !important\n}\n.loading-proggress[loading="12"][data-v-fda6f070]:before{width:12% !important\n}\n.loading-proggress[loading="13"][data-v-fda6f070]:before{width:13% !important\n}\n.loading-proggress[loading="14"][data-v-fda6f070]:before{width:14% !important\n}\n.loading-proggress[loading="15"][data-v-fda6f070]:before{width:15% !important\n}\n.loading-proggress[loading="16"][data-v-fda6f070]:before{width:16% !important\n}\n.loading-proggress[loading="17"][data-v-fda6f070]:before{width:17% !important\n}\n.loading-proggress[loading="18"][data-v-fda6f070]:before{width:18% !important\n}\n.loading-proggress[loading="19"][data-v-fda6f070]:before{width:19% !important\n}\n.loading-proggress[loading="20"][data-v-fda6f070]:before{width:20% !important\n}\n.loading-proggress[loading="21"][data-v-fda6f070]:before{width:21% !important\n}\n.loading-proggress[loading="22"][data-v-fda6f070]:before{width:22% !important\n}\n.loading-proggress[loading="23"][data-v-fda6f070]:before{width:23% !important\n}\n.loading-proggress[loading="24"][data-v-fda6f070]:before{width:24% !important\n}\n.loading-proggress[loading="25"][data-v-fda6f070]:before{width:25% !important\n}\n.loading-proggress[loading="26"][data-v-fda6f070]:before{width:26% !important\n}\n.loading-proggress[loading="27"][data-v-fda6f070]:before{width:27% !important\n}\n.loading-proggress[loading="28"][data-v-fda6f070]:before{width:28% !important\n}\n.loading-proggress[loading="29"][data-v-fda6f070]:before{width:29% !important\n}\n.loading-proggress[loading="30"][data-v-fda6f070]:before{width:30% !important\n}\n.loading-proggress[loading="31"][data-v-fda6f070]:before{width:31% !important\n}\n.loading-proggress[loading="32"][data-v-fda6f070]:before{width:32% !important\n}\n.loading-proggress[loading="33"][data-v-fda6f070]:before{width:33% !important\n}\n.loading-proggress[loading="34"][data-v-fda6f070]:before{width:34% !important\n}\n.loading-proggress[loading="35"][data-v-fda6f070]:before{width:35% !important\n}\n.loading-proggress[loading="36"][data-v-fda6f070]:before{width:36% !important\n}\n.loading-proggress[loading="37"][data-v-fda6f070]:before{width:37% !important\n}\n.loading-proggress[loading="38"][data-v-fda6f070]:before{width:38% !important\n}\n.loading-proggress[loading="39"][data-v-fda6f070]:before{width:39% !important\n}\n.loading-proggress[loading="40"][data-v-fda6f070]:before{width:40% !important\n}\n.loading-proggress[loading="41"][data-v-fda6f070]:before{width:41% !important\n}\n.loading-proggress[loading="42"][data-v-fda6f070]:before{width:42% !important\n}\n.loading-proggress[loading="43"][data-v-fda6f070]:before{width:43% !important\n}\n.loading-proggress[loading="44"][data-v-fda6f070]:before{width:44% !important\n}\n.loading-proggress[loading="45"][data-v-fda6f070]:before{width:45% !important\n}\n.loading-proggress[loading="46"][data-v-fda6f070]:before{width:46% !important\n}\n.loading-proggress[loading="47"][data-v-fda6f070]:before{width:47% !important\n}\n.loading-proggress[loading="48"][data-v-fda6f070]:before{width:48% !important\n}\n.loading-proggress[loading="49"][data-v-fda6f070]:before{width:49% !important\n}\n.loading-proggress[loading="50"][data-v-fda6f070]:before{width:50% !important\n}\n.loading-proggress[loading="51"][data-v-fda6f070]:before{width:51% !important\n}\n.loading-proggress[loading="52"][data-v-fda6f070]:before{width:52% !important\n}\n.loading-proggress[loading="53"][data-v-fda6f070]:before{width:53% !important\n}\n.loading-proggress[loading="54"][data-v-fda6f070]:before{width:54% !important\n}\n.loading-proggress[loading="55"][data-v-fda6f070]:before{width:55% !important\n}\n.loading-proggress[loading="56"][data-v-fda6f070]:before{width:56% !important\n}\n.loading-proggress[loading="57"][data-v-fda6f070]:before{width:57% !important\n}\n.loading-proggress[loading="58"][data-v-fda6f070]:before{width:58% !important\n}\n.loading-proggress[loading="59"][data-v-fda6f070]:before{width:59% !important\n}\n.loading-proggress[loading="60"][data-v-fda6f070]:before{width:60% !important\n}\n.loading-proggress[loading="61"][data-v-fda6f070]:before{width:61% !important\n}\n.loading-proggress[loading="62"][data-v-fda6f070]:before{width:62% !important\n}\n.loading-proggress[loading="63"][data-v-fda6f070]:before{width:63% !important\n}\n.loading-proggress[loading="64"][data-v-fda6f070]:before{width:64% !important\n}\n.loading-proggress[loading="65"][data-v-fda6f070]:before{width:65% !important\n}\n.loading-proggress[loading="66"][data-v-fda6f070]:before{width:66% !important\n}\n.loading-proggress[loading="67"][data-v-fda6f070]:before{width:67% !important\n}\n.loading-proggress[loading="68"][data-v-fda6f070]:before{width:68% !important\n}\n.loading-proggress[loading="69"][data-v-fda6f070]:before{width:69% !important\n}\n.loading-proggress[loading="70"][data-v-fda6f070]:before{width:70% !important\n}\n.loading-proggress[loading="71"][data-v-fda6f070]:before{width:71% !important\n}\n.loading-proggress[loading="72"][data-v-fda6f070]:before{width:72% !important\n}\n.loading-proggress[loading="73"][data-v-fda6f070]:before{width:73% !important\n}\n.loading-proggress[loading="74"][data-v-fda6f070]:before{width:74% !important\n}\n.loading-proggress[loading="75"][data-v-fda6f070]:before{width:75% !important\n}\n.loading-proggress[loading="76"][data-v-fda6f070]:before{width:76% !important\n}\n.loading-proggress[loading="77"][data-v-fda6f070]:before{width:77% !important\n}\n.loading-proggress[loading="78"][data-v-fda6f070]:before{width:78% !important\n}\n.loading-proggress[loading="79"][data-v-fda6f070]:before{width:79% !important\n}\n.loading-proggress[loading="80"][data-v-fda6f070]:before{width:80% !important\n}\n.loading-proggress[loading="81"][data-v-fda6f070]:before{width:81% !important\n}\n.loading-proggress[loading="82"][data-v-fda6f070]:before{width:82% !important\n}\n.loading-proggress[loading="83"][data-v-fda6f070]:before{width:83% !important\n}\n.loading-proggress[loading="84"][data-v-fda6f070]:before{width:84% !important\n}\n.loading-proggress[loading="85"][data-v-fda6f070]:before{width:85% !important\n}\n.loading-proggress[loading="86"][data-v-fda6f070]:before{width:86% !important\n}\n.loading-proggress[loading="87"][data-v-fda6f070]:before{width:87% !important\n}\n.loading-proggress[loading="88"][data-v-fda6f070]:before{width:88% !important\n}\n.loading-proggress[loading="89"][data-v-fda6f070]:before{width:89% !important\n}\n.loading-proggress[loading="90"][data-v-fda6f070]:before{width:90% !important\n}\n.loading-proggress[loading="91"][data-v-fda6f070]:before{width:91% !important\n}\n.loading-proggress[loading="92"][data-v-fda6f070]:before{width:92% !important\n}\n.loading-proggress[loading="93"][data-v-fda6f070]:before{width:93% !important\n}\n.loading-proggress[loading="94"][data-v-fda6f070]:before{width:94% !important\n}\n.loading-proggress[loading="95"][data-v-fda6f070]:before{width:95% !important\n}\n.loading-proggress[loading="96"][data-v-fda6f070]:before{width:96% !important\n}\n.loading-proggress[loading="97"][data-v-fda6f070]:before{width:97% !important\n}\n.loading-proggress[loading="98"][data-v-fda6f070]:before{width:98% !important\n}\n.loading-proggress[loading="99"][data-v-fda6f070]:before{width:99% !important\n}\n.loading-proggress[loading="100"][data-v-fda6f070]:before{width:100% !important\n}\n@keyframes loading-ellipsis1-data-v-fda6f070{\n0%{transform:scale(0)\n}\n100%{transform:scale(1)\n}\n}\n@keyframes loading-ellipsis2-data-v-fda6f070{\n0%{transform:translate(0, 0)\n}\n100%{transform:translate(19px, 0)\n}\n}\n@keyframes loading-ellipsis3-data-v-fda6f070{\n0%{transform:scale(1)\n}\n100%{transform:scale(0)\n}\n}\n.atomic-progress-bar[data-v-fda6f070]{height:40px;left:0;margin-left:1%;margin-top:-20px;position:fixed;text-align:center;top:75%;width:100%;z-index:1000\n}',
          "",
        ]));
    },
    2080: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(197),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(343),
        s = t(5);
      function d(a) {
        t(2081);
      }
      var l = !1,
        c = d,
        f = "data-v-3915a0ec",
        u = null,
        p = Object(s["a"])(o.a, r["a"], r["b"], l, c, f, u);
      e["default"] = p.exports;
    },
    2081: function (a, e, t) {
      var n = t(2082);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var o = t(23).default;
      o("174986b2", n, !0, {});
    },
    2082: function (a, e, t) {
      ((e = a.exports = t(22)(!1)),
        e.push([
          a.i,
          "\n@keyframes spinner-data-v-3915a0ec{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-3915a0ec{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-3915a0ec{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-3915a0ec{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-3915a0ec{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-3915a0ec{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-3915a0ec{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-3915a0ec{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-3915a0ec{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-3915a0ec{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-3915a0ec{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-3915a0ec]{color:#6b963b\n}\n.text-red[data-v-3915a0ec]{color:#c03647\n}\n.text-gray[data-v-3915a0ec]{color:#8290ad\n}\n.text-blue[data-v-3915a0ec]{color:#00c2ff\n}\n.text-danger[data-v-3915a0ec]{color:#8c4545\n}\n.text-title[data-v-3915a0ec]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-3915a0ec]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-3915a0ec]{color:#f1b70b\n}\n.text-white[data-v-3915a0ec]{color:#fff\n}\n.text-bigger[data-v-3915a0ec]{font-size:18px;font-weight:500\n}\n.text-big[data-v-3915a0ec]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-3915a0ec]{font-size:14px\n}\n.text-middle-height[data-v-3915a0ec]{line-height:24px\n}\n.text-small[data-v-3915a0ec]{font-size:12px\n}\n.text-word-break[data-v-3915a0ec]{word-break:break-all\n}\n.text-right[data-v-3915a0ec]{text-align:right\n}\n.text-left[data-v-3915a0ec]{text-align:left\n}\n.text-line-middle[data-v-3915a0ec]{line-height:24px\n}\n.text-link[data-v-3915a0ec],.text-link-underline[data-v-3915a0ec]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-3915a0ec]:hover,.text-link-underline[data-v-3915a0ec]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-3915a0ec]{text-decoration:underline\n}\n.text-center[data-v-3915a0ec]{text-align:center\n}\n.text-pointer[data-v-3915a0ec]{cursor:pointer\n}\n.gap-10[data-v-3915a0ec]{gap:10px\n}\n.m-t-auto[data-v-3915a0ec]{margin-top:auto\n}\n.m-t-4[data-v-3915a0ec]{margin-top:4px\n}\n.m-t-5[data-v-3915a0ec]{margin-top:5px\n}\n.m-t-8[data-v-3915a0ec]{margin-top:10px\n}\n.m-t-10[data-v-3915a0ec]{margin-top:10px\n}\n.m-t-13[data-v-3915a0ec]{margin-top:10px\n}\n.m-t-15[data-v-3915a0ec]{margin-top:15px\n}\n.m-t-16[data-v-3915a0ec]{margin-top:16px\n}\n.m-t-20[data-v-3915a0ec]{margin-top:20px\n}\n.m-t-24[data-v-3915a0ec]{margin-top:24px\n}\n.m-t-25[data-v-3915a0ec]{margin-top:25px\n}\n.m-t-26[data-v-3915a0ec]{margin-top:26px\n}\n.m-t-30[data-v-3915a0ec]{margin-top:30px\n}\n.m-t-35[data-v-3915a0ec]{margin-top:35px\n}\n.m-t-40[data-v-3915a0ec]{margin-top:40px\n}\n.m-t-45[data-v-3915a0ec]{margin-top:45px\n}\n.m-t-50[data-v-3915a0ec]{margin-top:50px\n}\n.m-t-60[data-v-3915a0ec]{margin-top:60px\n}\n.m-t-65[data-v-3915a0ec]{margin-top:65px\n}\n.m-t-80[data-v-3915a0ec]{margin-top:80px\n}\n.m-l-5[data-v-3915a0ec]{margin-left:5px\n}\n.m-l-10[data-v-3915a0ec]{margin-left:10px\n}\n.m-l-15[data-v-3915a0ec]{margin-left:15px\n}\n.m-l-20[data-v-3915a0ec]{margin-left:20px\n}\n.m-l-25[data-v-3915a0ec]{margin-left:25px\n}\n.m-l-30[data-v-3915a0ec]{margin-left:30px\n}\n.m-l-35[data-v-3915a0ec]{margin-left:35px\n}\n.m-r-5[data-v-3915a0ec]{margin-right:5px\n}\n.m-r-10[data-v-3915a0ec]{margin-right:10px\n}\n.m-r-15[data-v-3915a0ec]{margin-right:15px\n}\n.m-r-30[data-v-3915a0ec]{margin-right:30px\n}\n.m-b-5[data-v-3915a0ec]{margin-bottom:5px !important\n}\n.m-b-15[data-v-3915a0ec]{margin-bottom:15px !important\n}\n.m-b-20[data-v-3915a0ec]{margin-bottom:20px !important\n}\n.m-b-30[data-v-3915a0ec]{margin-bottom:30px !important\n}\n.m-b-25[data-v-3915a0ec]{margin-bottom:25px !important\n}\n.m-b-50[data-v-3915a0ec]{margin-bottom:50px !important\n}\n.p-t-40[data-v-3915a0ec]{padding-top:40px\n}\n.p-t-85[data-v-3915a0ec]{padding-top:85px !important\n}\n.hidden[data-v-3915a0ec]{opacity:0 !important\n}\n.relative[data-v-3915a0ec]{position:relative\n}\n.space-nowrap[data-v-3915a0ec]{white-space:nowrap\n}\n.uppercase[data-v-3915a0ec]{text-transform:uppercase\n}\n.lowercase[data-v-3915a0ec]{text-transform:lowercase\n}\n.fade-enter-active[data-v-3915a0ec]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-3915a0ec]{transition:all .1s ease-out\n}\n.fade-enter[data-v-3915a0ec],.fade-leave-to[data-v-3915a0ec]{opacity:0\n}\n.fade-down-enter-active[data-v-3915a0ec],.fade-down-leave-active[data-v-3915a0ec],.fade-down-move[data-v-3915a0ec]{transition:all .15s\n}\n.fade-down-leave-active[data-v-3915a0ec],.fade-down-enter-active[data-v-3915a0ec]{position:absolute !important\n}\n.fade-down-enter[data-v-3915a0ec],.fade-down-leave-to[data-v-3915a0ec]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-3915a0ec],.scale-leave-active[data-v-3915a0ec],.scale-move[data-v-3915a0ec]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-3915a0ec],.scale-leave-to[data-v-3915a0ec]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-3915a0ec],.slide-leave-active[data-v-3915a0ec]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-3915a0ec]{transition:all .2s ease\n}\n.slide-leave-active[data-v-3915a0ec]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-3915a0ec],.slide-leave-to[data-v-3915a0ec]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-3915a0ec],.slide-leave[data-v-3915a0ec]{margin-bottom:0px\n}\n.slide-enter[data-v-3915a0ec],.slide-leave-to[data-v-3915a0ec]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-3915a0ec],.slide-in-leave-active[data-v-3915a0ec]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-3915a0ec]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-3915a0ec]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-3915a0ec]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-3915a0ec]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-3915a0ec],.page-fade-enter-active[data-v-3915a0ec]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-3915a0ec],.page-fade-leave-to[data-v-3915a0ec],.page-fade-enter[data-v-3915a0ec]{opacity:0\n}\n.page-fade-enter-to[data-v-3915a0ec]{opacity:1\n}\n.fade-out-leave-active[data-v-3915a0ec],.fade-out-enter-active[data-v-3915a0ec]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-3915a0ec],.fade-out-leave-to[data-v-3915a0ec],.fade-out-enter[data-v-3915a0ec]{opacity:0\n}\n.fade-out-enter-to[data-v-3915a0ec]{opacity:1\n}\n.slide-down-enter-active[data-v-3915a0ec],.slide-down-leave-active[data-v-3915a0ec]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-3915a0ec],.slide-down-enter[data-v-3915a0ec]{top:100%\n}\n.slide-down-leave[data-v-3915a0ec],.slide-down-enter-to[data-v-3915a0ec]{top:0%\n}\n.slide-out-enter-active[data-v-3915a0ec],.slide-out-leave-active[data-v-3915a0ec]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-3915a0ec]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-3915a0ec]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-3915a0ec]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-3915a0ec],.exchange-result.slide-out-enter[data-v-3915a0ec]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-3915a0ec],.exchange-pending.slide-out-enter[data-v-3915a0ec]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-3915a0ec],.slide-left-leave-active[data-v-3915a0ec]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-3915a0ec]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-3915a0ec]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-3915a0ec]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-3915a0ec],.slide-right-leave-active[data-v-3915a0ec]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-3915a0ec]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-3915a0ec]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-3915a0ec]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-3915a0ec],.spin-down-leave-active[data-v-3915a0ec]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-3915a0ec]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-3915a0ec]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-3915a0ec]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-3915a0ec],.spin-up-leave-active[data-v-3915a0ec]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-3915a0ec]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-3915a0ec]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-3915a0ec]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-3915a0ec],.puff-out-leave-active[data-v-3915a0ec]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-3915a0ec]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-3915a0ec]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-3915a0ec],.puff-out-enter-to[data-v-3915a0ec]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-3915a0ec],.collapse-fade-enter-active[data-v-3915a0ec]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-3915a0ec],.collapse-fade-leave-to[data-v-3915a0ec],.collapse-fade-enter[data-v-3915a0ec]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-3915a0ec]{opacity:1\n}\n.lazy-fade-leave-active[data-v-3915a0ec],.lazy-fade-enter-active[data-v-3915a0ec]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-3915a0ec],.lazy-fade-leave-to[data-v-3915a0ec],.lazy-fade-enter[data-v-3915a0ec]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-3915a0ec]{opacity:1\n}\n.alert-hint[data-v-3915a0ec]{z-index:15;position:absolute;bottom:24px;right:50%;transform:translateX(50%)\n}\n.alert-hint__wrapper[data-v-3915a0ec]{text-align:center;min-width:200px;padding:3px 10px;border-radius:100px\n}\n.alert-hint__wrapper p[data-v-3915a0ec]{font-size:14px;letter-spacing:.25px;font-weight:400\n}\n.alert-hint__wrapper--info[data-v-3915a0ec]{background-color:#1f9eff\n}\n.alert-hint__wrapper--info p[data-v-3915a0ec]{color:#fff\n}",
          "",
        ]));
    },
    2085: function (a, e, t) {
      "use strict";
      var n = t(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(t(2086));
      e.default = { en: o.default };
    },
    2086: function (a) {
      a.exports = JSON.parse(
        '{"memo":{"memo":"Memo","payment_id":"Payment ID","destination_tag":"Destination tag","message":"Message"},"contact_support":"Contact support","new":"NEW","unverified":"Unverified","notice":"Notice","skam_warning":"This token has not been officially verified. Its reliability and security are unconfirmed. Use at your own risk. Exercise caution and conduct due diligence before engaging with it","pair_is_unavailable":"Pair is temporarily unavailable","region_is_not_supported":"Region is not supported","button":{"copied":"Copied","sendAll":"Send all","openWallet":"Open wallet","newWallet":"New wallet","createWallet":"Create wallet","restoreWallet":"Restore wallet","setPassword":"Set password","changePassword":"Change password","apply":"Apply","confirm":"Confirm","continue":"Continue","cancel":"Cancel","close":"Close","back":"Back","yes":"Yes","no":"No","readMore":"Read more","send":"Send","resend":"Resend","sendAnother":"Send another one","tryAgain":"Try again","contactUs":"Contact us","copy":"Copy","receive":"Receive","reserveFio":"Reserve FIO","setFee":"Set fee","setDefault":"Set default","activate":"Activate","password":"Password","delete":"Delete","update":"Update","contactSupport":"Contact Atomic Support","backToCoinScreen":"Back to the coin screen","backToStaking":"Back to the staking","claimRepeat":"Claim again","sendRepeat":"Send another one","swapRepeat":"Swap another one","stakeRepeat":"Stake another one","unstakeRepeat":"Unstake another one","buy":"Buy","swap":"Swap","swapping":"Swapping","sell":"Sell","sellAll":"Sell all","swapNow":"Swap now","copyLink":"Copy link","share":"Share","addCoin":"Add Coin","addToken":"Add Token","backToWallet":"Back to Wallet","generateAccountAddress":"Generate account address","activateEOSAccountInstruction":"Instruction: How to activate EOS account","next":"Next","button":"Button","save":"Save","stake":"Stake","unstake":"Unstake","claim":"Claim","vote":"Vote","revote":"Revote","withdraw":"Withdraw","redelegate":"Redelegate","goBack":"Go back","choosePool":"Choose pool","claims":"claim","chooseBaker":"Choose baker","contactSupports":"CONTACT SUPPORT","restart":"Restart","updateNow":"Update now","remindLater":"Remind later","copyToClipboard":"Copy to clipboard","downloadFromWebsite":"Download from website"},"error":{"passwordRequired":"Password is required.","passwordMismatch":"Passwords do not match.","noSecretPhrase":"Please enter your secret phrase.","backupPhraseLength":"Backup phrase must contain 12 words.","invalidMnemonic":"Invalid mnemonic.","enterNewPassword":"Enter your new password","insufficientFundsToSend":"You should have at least {fee} {feeTicker} to send {ticker}","insufficientFundsToPayFee":"You should have at least {fee} {coin} to pay network fee","insufficientFundsWithSendType":"You should have at least {fee} {feeTicker} to {sendType} {coin}","insufficientFundsToClaim":"Not enough {ticker} to claim rewards","sendNFTError":"Couldn\'t send your token","wrongPassword":"Wrong password","nothingToClaim":"Nothing to claim","sendingError":"Sending error","passwordCantBeBlank":"Password can\'t be blank","addressCantBeBlank":"Address can\'t be blank","amountCantBeBlank":"Amount can\'t be blank","checkAddress":"Please check the address","cantSendToOwnAddress":"You can\'t send funds to your own address","destinationTagNumber":"Destination tag must be a number","memoNumber":"Memo must be a number","destinationTagHexadecimal":"Destination tag must be a 64 hexadecimal","incorrectAmount":"Enter correct amount","blockExplorerUnavailable":"Block explorer is currently unavailable","maxMemoLength":"Maximum Memo length is {maxLength} characters","needMoreFunds":"You\'ll need more {ticker} to make this transaction","minAmountForSend":"Minimum amount for send is {amount} {ticker}","minChangeAmount":"Minimal change is {amount} {ticker}. Try to send another amount","XLMMemoLength":"XLM memo must be {maxLength} characters long","notEnoughRAMToSendEOS":"Not enough RAM to send EOS","activateHBARWallet":"You need to activate your HBAR wallet to proceed","minAmountForReceivingXRP":"Minimal amount for receiving is 1 XRP","chooseDifferentCoins":"Choose different coins to swap","pairTemporarilyUnavailable":"Pair is temporarily unavailable","notEnoughFee":"Dear support, I don\'t have enough {ticker} to complete swap. Could you help me, please?","transactionFailed":"Transaction failed, try again later","swapServiceUnavailable":"Swap service currently unavailable, try again later","lockedCondition":"You should leave minimum {value} {ticker} on your account, this amount is locked by {name}.","minSwapAmount":"The minimum amount for swap is {minAmount} {ticker}","largeAmount":"Enter a larger amount","maxSwapAmountA":"The maximum amount for swap is {maxAmount} {ticker}","maxSwapAmountB":"We recommend you to split the swap into several transactions","moreDepositToSwap":"To make this swap, deposit more {ticker} to your wallet","notEnoughToSwap":"You don’t have enough {ticker} to swap {coinToSendTicker}","insufficientFundsToSwap":"You should have {fee} {ticker} to swap {coinToSendTicker}","accountNameLength":"Account name must contain exactly 12 characters","accountExists":"This account is already exists, please choose another name","invalidCharacter":"Account name contains invalid characters","serviceUnavailable":"Service temporary unavailable","insufficientFunds":"Insufficient funds","insufficientFundsForStaking":"Insufficient funds for staking","amountTooBig":"The amount is too big. Please enter a smaller amount","unstakeAll":"Please unstake all BNB or leave at least {amount} {ticker} staked","minimumUnstakingAmount":"Minimum amount for unstaking is {amount} {ticker}","exceedsUnstakingBalance":"Amount exceeds available unstaking balance","minStakeAmount":"Min amount for stake is 1 TRX","maximumMemoLength":"Maximum Memo length is 64 characters","minimumStakeAmount":"Minimum amount for staking is {amount} {ticker}","minimumRemainingStakedAmount":"Minimum remaining staked amount must be greater than 10 ZIL","networkFeeHigherThanReward":"The network fee is higher than the reward. Min amount to claim is {amount} {ticker}.","needToStake":"You need to stake some coins first","needToDeactivate":"You need to deactivate staked coins first","nothingToUnstake":"You have nothing to unstake yet","invalidPollAddress":"Invalid pool address","notEnoughForStake":"Not enough for stake","notEnoughForUnstake":"Not enough for unstake","invalidBakerAddress":"Invalid baker address","notBakerAddress":"Not a baker address","unstakeZILClaimRewards":"To unstake your ZIL, claim your rewards","MinClaimAmount":"Min amount to claim is {amount} {ticker}","nothingToUnstakeForMATIC":"Nothing to unstake. You should delegate MATIC first","notEnoughForVote":"Not enough for vote","cantActivateNow":"Can’t activate now","couldNotValidateRPCCheckHTTPS":"Could not validate RPC. Please check if HTTPS prefix is correct","couldNotValidateChainIDNumbersOnly":"Could not validate Chain ID. Please make sure to use numbers only","currencySymbolTaken":"This currency symbol is taken. Please use another one.","swapFailed":"Swap Failed","swapError":"Swap Error","enterValidEmail":"Enter a valid e-mail"},"input":{"password":"Password","newPassword":"New password","repeatPassword":"Repeat password","repeatNewPassword":"Repeat New password","oldPassword":"Old password","backupPhrase":"Your 12-word backup phrase","search":"Search","searchWithDots":"Search...","pasteAddress":"Click here to paste address","myShelleyAddress":"My Shelley address","amount":"Amount","myFlareAddress":"My Flare address","clickToPaste":"Click here to paste","typePlaceholderHere":"Type {placeholderPaymentId} here","networkName":"Network Name","newRPCURL":"New RPC URL","chainID":"Chain ID","currencySymbol":"Currency Symbol","blockExplorerURL":"Block Explorer URL (optional)","contractAddressStartsWith0x":"Contract address (starts with 0x)","tokenName":"Token Name","ticker":"Ticker","decimals":"Decimals","enterAccountAddress":"Enter account address","poolName":"Pool name","customPoolId":"Custom pool id","typeAddressOrDomainHere":"Type address or domain here"},"label":{"enableLog":"Enable error data collection","passwordChanged":"Your password has been changed","passwordStrength":"Strength","createPasswordHint":"Create a strong password combining letters (uppercase and lowercase), numbers, and special characters. Consider using a minimum of 8 characters for better security.","noResultsFound":"No results found for “{searchText}”","about":"About","tokenName":"Token Name","ticker":"Ticker","decimals":"Decimals","gasPrice":"Gas price","gasLimit":"Gas limit","feesPerByte":"Fees per byte","nonce":"Nonce","gas":"Gas","tryLessSpecificFilters":"Try to be less specific and use fewer filter parameters."},"title":{"setPassword":"Set Password","restoreFromBackup":"Restore from Backup","networkFee":"Network fee","available":"Available","total":"Total","claim":"Claim","claimSpark":"Claim Spark","claimingSpark":"Claiming Spark","transactionHash":"Transaction hash","reward":"Reward","rewards":"Rewards","swapRate":"Swap rate","swapServiceThirdParty":"Swap service is provided through third-party API providers","promoCode":"Promo code","zeroBalance":"Zero Balance","staking":"Staking","stacked":"Staked","comingSoon":"Coming Soon","fee":"Fee","stake":"Stake","staked":"Staked","totalVotes":"Total Votes","refund":"Refund","continueSwap":"Continue swap","closeWallet":"Close the wallet?","exit":"Exit","sendTransaction":"Send transaction"},"message":{"copied":"Copied to clipboard","rateQuestion":"How was your experience with Atomic Wallet?","nothingFound":"Nothing found","noResults":"No results","transactionsSavedToDesktop":"Transactions are saved to your Desktop folder.","addressCopiedToClipboard":"Your address copied to Clipboard","sendingCoinsRisk":"Sending any other coins may result in permanent loss","pasteAddressOrDomain":"Click here to paste address or domain","balanceNotAvailable":"Your total balance is not available to send until it is confirmed on the blockchain","atomicDeleteToken":"Atomic will delete the token record from the wallet’s interface. The token itself will remain on your address.","joinMembershipProgram":"Join the Membership Program to receive up to 1% rewards for every swap","accept":"I accept the","termsOfService":"Terms of Service","successAddedToClipboard":"Success added to clipboard","promoCodeCopied":"Promo code copied to clipboard","linkCopied":"Link copied to clipboard","tryLaterVPNRestart":"Try sending your token later. You can also try turning your VPN on or off or restarting Atomic Wallet.","addressCopied":"Your address copied to Clipboard","unclaimedKMDNotFound":"Unclaimed KMD not found","informationHasBeenUpdated":"Information has been updated","tokenHasBeenDeleted":"Token has been deleted","activationSuccessful":"Activation is successful","activatingAccount":"Activating account","refundOrContinueSwapWithNewRate":"You may either make a refund or continue swap with a new rate","youWillReceiveTheFundsBackMinusNetworkFees":"You will receive the funds back minus network fees.","yourSwapWillRestartWithAnUpdatedRate":"Your swap will restart with an updated rate","noteYourChoiceCannotBeUndone":"Note: your choice cannot be undone","walletIsLoaded":"{wallet} wallet is loaded...","tickerAlreadyStackedWarnA":"{staked} {ticker} is already staked and earns interest.","tickerAlreadyStackedWarnB":"If you restake {ticker}, you will have to wait for 24 hours to start earning interest again. Accumulated rewards will be transferred to your balance automatically."},"buyBitcoin":{"hint":"Your {name} will appear here","button":"Buy Bitcoin"},"passwordStrength":{"Weak":"Weak","Medium":"Medium","Strong":"Strong"},"mainMenu":{"uIPage":"UI page","wallet":"Wallet","swap":"Swap","buyCrypto":"Buy crypto","history":"History","staking":"Staking","nftGallery":"NFT gallery","inviteFriends":"Invite friends","settings":"Settings","support":"Support","memes":"Top memes"},"filterPopup":{"receivedTransaction":"Received","sentTransaction":"Sent","hideZeroBalance":"Hide zero balance","showZeroBalance":"Show zero balance","disableNotifications":"Disable notifications","coins":"Coins","tokens":"Tokens","hideAll":"Hide all","showAll":"Show all"},"popups":{"claimingTicker":"Claiming {ticker}","claimingTickerWithAmount":"Claiming {amount} {ticker}","notEnoughToPayFee":"Not enough {ticker} to pay the network fee","tickerStaking":"{ticker} staking","tickerAlreadyStaked":"{stakingBalance} {ticker} is already staked and earns interest.","ratePopup":{"leaveYourFeedback":"Leave your feedback","thankYou":"Thank you","forHelpingUs":"For helping us make Atomic Wallet better for you","neverRemindMe":"Never remind me"},"claimADA":{"title":"Claim ADA","fromOldAddress":"Claim ADA from the old address","claiming":"Claiming ADA"},"sendStakeADA":{"pool":"Pool","customPool":"Custom Pool"},"stakingPopupADA":{"changePoolWarning":"If you change the pool, you will have to wait for 20 days to receive first rewards."},"stakingPopupKMD":{"veryImportant":"Very important!","claimAllYourRewards":"Claim all your rewards before sending KMD out of the wallet. Otherwise, unclaimed rewards will be lost."},"sendStakeBNB":{"alreadyUnstaked":"You have already unstaked from this validator in the last 7 days.","binanceChainRule":"Please try again later. This is a Binance Chain rule"},"sendStakeICX":{"youShouldHaveAtLeast":"You should have at least","validator":"Validator","coinsFrozen":"Please note, coins will be frozen for ~8 days"},"sendStakeXTZ":{"selectTezosBaker":"Select Tezos Baker","stakeTickerToValidator":"Stake {amount} {ticker} to {stakingValidator}"},"SendStakeZIL":{"withdrawalPending":"Withdrawals from chosen validator is currently in pending state due to buffered deposit, try again later"},"SendVoteICX":{"youCanUnstakeAtAnyMoment":"You can unstake {{ coin.ticker }} at any moment.","afterTheUnstake":"after the unstake.","onceYouDecideToUnstakeThemLater":"once you decide to unstake them later.","blockchainRule":"It’s an {ticker} blockchain rule."},"SendStakeFLR":{"hours":"hours","minutes":"minutes"},"stakingPopupTRX":{"unstakingAvailableInHours":"Unstaking will be available in {expiration} hours"}},"emptyState":{"title":"You have hidden all the assets","description":"Try to be less specific and use fewer filter parameters.","buttonText":"Change filters"},"coinInfo":{"staked":"Staked","accountDetail":"Account Detail","editOrDeleteToken":"Edit or delete Token","shareViewKey":"Share View Key","flareDropsAutoclaim":"FlareDrops Autoclaim","exportTransactions":"Export Transactions","emptyHistoryText":"Your {ticker} transactions will appear here","transactionsTab":"Transactions","priceChart":"Price chart","editOrDeleteCustomToken":"Edit or delete custom token","eosAccount":"EOS account","cpu":"CPU","ram":"RAM","net":"NET","ramUsed":"used - {ramUsage}KB / {ramQuota}KB","netUsed":"used - {used}KB / {max}KB","balancesUsed":"used - {used}µs / {max}µs","confirmTokenDelete":"Delete {ticker} token from Atomic Wallet?","addCustomToken":"Add custom token","addEVMCoinForm":"You can add a new EVM-like coin to the wallet by completing the form below. Only add the ones you trust.","makeCsv":{"sendTransactionToYourself":"Send transaction to yourself","txType":"Tx type","incoming":"Incoming","outgoing":"Outgoing","coinAmount":"Coin Amount"}},"sendCoin":{"sendTypeAll":"{sendType} all","estimatedTime":"Estimated time","buttonBack":"Back to the wallet","buttonRepeat":"Send another one","stackedAmount":"Staked amount","send":"Send","sending":"Sending","toAddress":"To address","errorHeadline":"Can’t {type} {additionalMessage}{message} now","tickerWasClaimed":"{ticker} was successfully claimed","basicOptions":"Basic Options","advancedOptions":"Advanced Options","claimingSuccess":"{ticker} was successfully claimed","successfulMessage":"{amount} {ticker} was successfully {resultMessage}","DOGEsuccessfulMessagePostfix":"so excited","removeErrorSteps":{"title":"Please try these steps","hints":["Refresh the balance","Wait for 5-10 min and repeat the transaction","Turn on/off VPN","Restart the wallet"]}},"receiveCoin":{"sendOnlySelectedTokens":"Send only {tokenName} tokens to this address","tickerAddress":"Your {ticker} Address","unspendableBalancePrefix":"{balance} {ticker} is an unspendable balance","unspendableBalanceToAccount":"{prefix} required to activate your account.","unspendableBalanceForStorage":"{prefix} reserved for storage.","requiredBalancePostfix":"is required to activate your account."},"eosWizard":{"chooseEOSAccountAddress":"Choose your EOS account address","activateAccount":"Activate account","activationAddress":"Activation address","memoID":"Memo. ID","sendEOSSwapInstructions":"You may send EOS from any swap, like Bitfinex, Huobi, OkEx or any other existing wallet or service","reloadBalancesInstructions":"You should reload balances within 10-20 minutes after the transaction to get into your activated account","sendEOSActivation":"Send {sum} EOS to the activation Address and specify the Memo id in transaction.","accountAddressCharsLeft":"The account address must have exactly {charsLeft} more characters. a-z, 1-5","notificationCopiedToClipboard":"Your {notificationTag} copied to Clipboard","step":"Step"},"autoClaimDrops":{"dropsName":"{coinName}Drops","autoClaimIsActive":"{dropsName} Autoclaim is active!","activatingAutoClaim":"Activating {dropsName} Autoclaim","coinAutoClaimIsActive":"{coinName}Drops Autoclaim is active now!","nextDropPlace":"The next drop takes place on {nextDrop}.","dropsNameAutoClaim":"{dropsName} autoclaim","textInfoA":"You must hold WFLR for 23 days before each claim day to receive {ticker} tokens from FlareDrops. Tokens will be claimed automatically every month.","textInfoB":"The next drop takes place on {nextDrop}.","moreInfo":"More Info","nextDrop":"Next drop"},"sendProcess":{"Exchange":"Swap","Stake":"Staking","Unstake":"Unstaking","Withdraw":"Withdrawing","Withdrawal":"Withdrawing","Vote":"Voting","Revote":"Revoting","Claim":"Claiming rewards","ClaimADA":"ADA claiming","Redelegate":"Redelegate","prepare":"Preparing","unsuccess":"wasn\'t successful"},"sendType":{"Send":"send","Exchange":"Swap","Stake":"Stake","Unstake":"Unstake","Withdraw":"Withdraw","Withdrawal":"Withdraw","Vote":"Vote","Revote":"Revote","Claim":"Claim","ClaimADA":"ADA claim","Redelegate":"Redelegate","Activate":"Activate"},"sendResult":{"sent":"sent","staked":"staked","unstaked":"unstaked","claimed":"claimed","redelegated":"redelegated","buy":"buy","swap":"swap","swapped":"swapped"},"loginPage":{"onboarding":"That\'s the only way to restore your wallet if you forget your password","backupPhrase":"Please write down a 12-word Backup Phrase and keep the copy in a secure place","errorDataCollection":"Let Atomic automatically collect anonymous errors data to improve your experience.<br />This feature will highly increase support quality and will help us to resolve your issues quicker. <br />Atomic collects description of the error and coin name. This information is absolutely anonymous. <br />If you don\'t like to send your errors, you can avoid this option.","walletAvailabilityWarningTitle":"Warning! You already have a wallet.","walletAvailabilityWarning":"Make sure that  you have a backup of your 12-word seed phrase. Creating the new wallet will erase all your previous local data.","enterPassword":"Enter your password"},"simplexPage":{"tabs":{"buyCrypto":"Buy crypto","orderHistory":"Order History"},"header":{"youSent":"You sent","youGot":"You got"},"averageDeliveryTime":"The average delivery time is 10 to 30 minutes","ordersAppearHere":"Your orders will appear here","monthly":"Monthly","includedFee":"5% fees (min {fee} {fiatToSend}) are included in the price"},"exchangeResult":{"youSent":"You sent","youGet":"You get","date":"Date","cashback":"Cashback","getMembership":"Get membership","sentHash":"Sent hash","sentHashCopiedToClipboard":"Sent hash is copied to clipboard","receivedHash":"Received hash","receivedHashCopiedToClipboard":"Received hash is copied to clipboard","estimatedTime":"Estimated time","timeRange":"5-20 minutes","provider":"Provider","repeated":"Repeated","exchangeRateExplanation":"The exchange rate is determined by the current market supply and demand for both assets you\'re trading. Therefore, it\'s dynamic and can fluctuate while your transaction is processing. Our exchange partners will always look for the best rate available on the market. If you still believe something is wrong, please click Contact support.","buyMore":"Buy more","orderHistory":"Order history","newSwap":"New Swap","continue":"Continue","contactUs":"Contact us","buyCrypto":"Buy crypto","exchange":"Exchange","buyWith":"Buy {receiveTicker} with {sendTicker}","swapTo":"Swap {sendTicker} to {receiveTicker}","paymentID":"Payment ID","orderID":"Order ID","isCopied":"is copied to clipboard"},"addCustomToken":{"addTokenInstructions":"To add a token, choose its network from the drop-down list below. Then send it to the displayed address. If the token’s network is not on the list, add it in the ‘Coin’ tab first.","network":"Network","addNew":"Add New","tokenInfo":"Token Info","coinInfo":"Coin Info","added":"{name} was successfuly added","updated":"{name} was successfuly updated","deleted":"{name} was successfuly deleted","loading":"loading","tabs":{"tokenByAddress":"Token by address","tokenByContract":"Token by contract","coin":"Coin"},"tokenAddress":"Your {tokenName} address"},"tableHeaders":{"name":"Name","balance":"Balance","value":"Value","price":"Price","change":"24h","portfolio":"Portfolio","marketCap":"M. cap","chart":"7 days chart"},"exchangePage":{"tabs":{"instantSwap":"Instant Swap","orderHistory":"Order History"}},"memesPage":{"title":"Top memes","myMemes":"My Memes","balance":"Balance","quickBuy":"Quick Buy","solanaBadge":"Solana Badge","orderHistory":"Order History","buyToken":"Buy or swap {token} to get the tokens","buyTokenTitle":"You need more than \\n {value} {token} to get tokens","discoverModal":"Trade Top Memes on SOL!","discoverModalText1":"Trade hot Solana memecoins in just one tap!","discoverModalText2":"Be aware that those coins are very volatile, and you can lose your funds in a matter of seconds. Market doesn’t spare anyone","discoverModalButton":"Let’s go","minimumReceived":"Minimum Received","available":"Available","fee":"Network fee"},"stakingPage":{"noItemsFound":"No items found","tryDifferentKeyword":"Try with a different search keyword.","redelegateTo":"Redelegate to","noValidators":"No validators available","validator":"Validator","currentValidator":"Current Validator","yearlyYield":"Yearly yield","yearlyEarning":"Yearly earning","capacity":"Capacity","noResultFoundFor":"No result found for","customBaker":"Custom Baker","customBakerAddress":"Custom baker address","stakeAndEarn":"Stake and Earn","earnPassiveIncomeFromYourCryptoByStakingIt":"Earn passive income from your crypto by staking it. Your crypto will remain under your full control, while also helping support the blockchain and earning you regular rewards.","stakeCoinsToValidator":"Stake coins to validator","available1000":"Available $1000","staked0":"Staked $0","validatorCreatesBlocks":"Validator creates blocks","available0":"Available $0","staked1000":"Staked $1000","youReceiveRewards":"You receive rewards","rewards230":"Rewards $230","coinsAvailableForStakingAndSending":"Coins available for staking and sending.","availableForClaim":"Available for claim.","minAmountToStakeIs4ADA":"Min amount to stake is 4 ADA. Please top up your wallet to be able to stake.","perYear":"Per year","unclaimed":"Unclaimed","nothingToUnstakeDelegateTRXFirst":"Nothing to unstake. You should delegate TRX first","coinsAvailableForStakingSending":"Coins available for staking, sending","coinsDelegatedToValidators":"Coins delegated to validators"},"historyPage":{"hashCopied":"Hash copied to clipboard","addressCopied":"Address copied to clipboard","emptySearchResults":"No results found","emptySearchResultsWithFilter":"for “{filter}”","emptyTransactionHistory":"Your transaction history will appear here","updateTransactionHistoryHint":"To see your new transactions, please click","updateTransactionHistoryHintButton":"update.","savedTransactionsHint":"Transactions are saved to your Desktop folder.","operation":"Operation","from":"From","to":"To","nonce":"Nonce","hash":"Hash"},"nftPage":{"title":"NFT Gallery","sendNFT":"Send NFT","transferText":"Transfer {tokenName} to {coinId} address","available":"Available","confirmSending":"Confirm sending","sending":"Sending","sendingProcessText":"We are currently working on your NFT","tokenSent":"Token sent","sentText":"You sent your {tokenName} NFT out","transactionHash":"Transaction hash","troubleshooting":"Troubleshooting","userCoinAddress":"Your {activeCoinId} Address","copyAddress":"Copy address","addressCopied":"Your address copied to Clipboard","details":"Details","toAddress":"To address","contractAddress":"Contract address","contractAddressCopied":"Contract address copied to Clipboard","tokenID":"Token ID","tokenIDCopied":"Token ID copied to Clipboard","tokenStandard":"Token standard","blockchain":"Blockchain","downloadComplete":"Download complete","nftSaved":"NFT asset is saved to your Desktop folder","filters":"Filters","receive":"Receive","receiveNft":"Receive nft","whatIsNft":"What is NFT?"},"settingsPage":{"tabs":{"membership":"Membership","security":"Security","privateKeys":"Private Keys"},"membershipTab":{"status":{"notMember":"Not a member","blue":"Blue Status","silver":"Silver Status","gold":"Gold Status","platinum":"Platinum Status"},"youHave":"You have","awcCashbackInfo":"Hold AWC tokens and receive AWC Cashback for each completed swap. Rewards are distributed monthly.","usersChoice":"Users’<br>Choice","cashback":"Cashback","oneTimeBonus":"One time bonus","maxItemLimit":"max {limit} USD/mth","buy":"BUY"},"securityTab":{"changePasswordHint":"Before changing your password, click Private Keys in the top panel and write down your 12-word backup phrase. This will help you restore your wallet if you forget your new password."},"privateKeysTab":{"passwordHint":"Never share your 12-word backup phrase and private keys with anyone. Never enter your info on any web wallets, online forms, or other websites claiming to be Atomic Wallet. Otherwise, you may risk losing your money.","howToProtectWallet":"How do I protect my wallet?","showPrivateKeys":"Show private keys","atomic":"Atomic","customKey":{"backupPhrase":"12-word backup phrase","accountName":"Account name","address":"Address","viewPrivateKey":"View Private Key","spendPrivateKey":"Spend Private Key","spendPublicKey":"Spend Public Key","privateKey":"Private Key","publicKey":"Public Key","legacyPrivateKey":"Legacy Private Key","legacyAddress":"Legacy Address"}}},"supportPage":{"title":"Atomic Wallet Support","changedModeInfo":"Config has been changed to {currentChangedMode}. <br /> You need to update app","updateText":"Update your wallet to the latest version","knowledgeBase":"Knowledge<br />Base","contactSupport":"Contact<br />Support","videoTutorials":"Video<br />Tutorials","socialMedia":"Check out our social media","anonymousAtomicID":"Anonymous Atomic ID","atomicIDCopied":"Atomic ID copied to clipboard","enableLogCollection":"Enable log collection","logCollectionInfo":" Atomic Wallet will automatically collect error details to improve your experience.<br />We respect your privacy, so this data is fully anonymous and will help our support<br /> team resolve any issues you may encounter.<br /> If you still prefer not to share your data, disable this option."},"supportPopup":{"transactionIssue":"Transaction issue (deposit/withdrawal)","userTickerAddress":"My {ticker} address","userTickerViewKey":"My {ticker} View Key","unsuccessSending":"Sending wasn\'t successful","unsuccessActivation":"Activation wasn’t successful","otherIssues":"Other issues","claimText":"Claim {ticker} for {coinToSend}>{coinToReceive} swap","messageSent":"Message sent. Someone from the support team will reply soon","contactSupport":"Contact support","wereOnIt":"We\'re on it"},"updatesPopup":{"downloading":"Downloading","restartAtomicWalletToUpdate":"Restart Atomic Wallet to update","assetsUpdated":"Assets updated","newVersionAvailable":"New version {version} is available","newFeatures":"New features","bugFixes":"Bug fixes"},"invitePage":{"inviteFriends":"Invite friends to install Atomic","yourStats":"Your stats","inviteFriendsEarnRewards":"Invite Friends and Earn Rewards Together","howItWorks":"How it works?","shareLinkOneClick":"Share link with your friends in one click","swapToReceiveAWC":"Make swaps to receive AWC. When your swap volume reaches {bonus}, {bonus2}, and {bonus3} you will receive AWC rewards.","untilNextReward":"{untilNextReward} of swap volume left to the next reward","cardsOptions":{"joinProgram":"Join the program","getReferralLinkAndPromoCode":"Get your referral link and unique promo code","inviteFriends":"Invite friends","askFriendJoinViaLink":"Ask your friend to join Atomic Wallet via your link","earnRewards":"Earn rewards","bothGetRewards":"You both get rewards for your friend’s swaps"}},"uiPage":{"buttonsTitle":"UI buttons","mainActionOnPage":"Main action on the page","mainActionColoredBackground":"Main action on a colored background","mainDisruptiveAction":"The main disruptive action on the page","secondaryActionOnPage":"Secondary action on the page","secondaryButtonColoredBackground":"Secondary button on a color background","thirdOrderActionOnPage":"Third-order action on the page","thirdOrderActionColoredBackground":"Third-order action on a colored background","basicTextButton":"Basic text button","secondaryTextButton":"Secondary text button"},"coinTips":{"baby":{"calculator":"Once you stake your Babylon, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"When you stake BABYLON, your balance updates in the next epoch (~1 hour). Rewards are calculated based on the staked amount at the start of each epoch.","stake":"The balance change will apply in the next epoch. Full withdrawal takes 1 epochs (~1 hours).","successScreen":"Your staking request is queued! The new balance will reflect in the next epoch (~1 hour)."},"cro":{"successScreen":"Your first rewards will arrive instantly.","stake":"If you unstake your CRO deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Cronos blockchain rule.","unstake":"Once you unstake your CRO deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Cronos blockchain rule.","delegating":"Sending CRO to validator. Hang tight…","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Cronos blockchain rule.","calculator":"Once you stake your CRO, you\'ll start earning interest. Think of it as a savings account for your crypto."},"fet":{"stake":"If you unstake your FET deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Fetch AI blockchain rule.","unstake":"Once you unstake your FET deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Fetch AI blockchain rule.","delegating":"Sending FET to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Fetch AI blockchain rule.","calculator":"Once you stake your FET, you\'ll start earning interest. Think of it as a savings account for your crypto."},"matic":{"stake":"If you unstake your MATIC deposit later on, you’ll need to wait for 9 days to withdraw it. This is a MATIC blockchain rule.","unstake":"Once you unstake your MATIC deposit, you’ll need to wait for 9 days to withdraw it. This is a MATIC blockchain rule.","delegating":"Sending MATIC to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"You’ll be able to withdraw your deposit in 9 days. This is a MATIC blockchain rule.","calculator":"Once you stake your MATIC, you’ll start earning interest. Think of it as a savings account for your crypto."},"kava":{"stake":"If you unstake your KAVA deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Kava blockchain rule.","unstake":"Once you unstake your KAVA deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Kava blockchain rule.","delegating":"Sending KAVA to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Kava blockchain rule.","calculator":"Once you stake your KAVA, you\'ll start earning interest. Think of it as a savings account for your crypto."},"inj":{"stake":"If you unstake your INJ deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Injective blockchain rule.","unstake":"Once you unstake your INJ deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Injective blockchain rule.","delegating":"Sending INJ to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Injective blockchain rule.","calculator":"Once you stake your INJ, you\'ll start earning interest. Think of it as a savings account for your crypto."},"flr":{"stake":"Once you stake your FLR, you will receive an equivalent amount of WFLR that you can send or unstake any time.","unstake":"Once you unstake your WFLR, you will receive an equivalent amount of FLR.","delegating":"Sending FLR to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~3 days. You need to claim them at least once every 90 days, otherwise they will expire.","successScreenUnstaking":"FLR will appear on your Available balance instantly.","calculator":"Once you stake your FLR, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"After staking FLR, you will receive an equivalent amount of WFLR tokens, which you can send or unstake.<br>Rewards must be claimed at least once in 90 days, otherwise they will expire."},"eth":{"stake":"Once you stake your ETH, you will receive an equivalent amount of stETH that you can send or exchange any time.","delegating":"Staking your ETH. Hang tight…","successScreen":"Your rewards will arrive every 24 hours.","calculator":"Once you stake your ETH, you’ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"After staking ETH, you will receive the equivalent amount of stETH tokens. Rewards will also be paid in stETH.<br>It is not possible to unstake ETH at the moment. You can exchange stETH on the Exchange page or wait until unstaking feature is introduced on the blockchain."},"hbar":{"stake":"Once you stake your HBAR, it is not locked. You can still send or exchange it.","unstake":"Once you unstake your HBAR deposit, it will appear on your Available balance instantly.","delegating":"Sending HBAR to validator. Hang tight…","successScreen":"Your rewards will arrive every 24 hours.","successScreenUnstaking":"It will appear on your Available balance instantly.","calculator":"Once you stake your HBAR, you’ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"You can still send or exchange HBAR after staking. The Hedera blockchain doesn\'t lock your deposit.<br>Rewards are claimed when you receive, send, or claim HBAR."},"egld":{"stake":"If you unstake your EGLD deposit later on, you’ll need to wait for 10 days before it appears on your Available balance. This is an Elrond blockchain rule.","unstake":"Once you unstake your EGLD deposit, you’ll need to wait for 10 days before it appears on your Available balance. This is an Elrond blockchain rule.","delegating":"Sending EGLD to validator. Hang tight…","successScreen":"Your rewards will arrive every 24 hours.","successScreenUnstaking":"It will appear on your Available balance in 10 days. This is an Elrond blockchain rule.","calculator":"Once you stake your EGLD, you’ll start earning interest. Think of it as a savings account for your crypto."},"sol":{"stake":"If you unstake your SOL deposit later on, you`ll need to wait for several epochs to withdraw it. This is a Solana blockchain rule.","unstake":"Once you unstake your SOL deposit, you`ll need to wait for several epochs to withdraw it. This is a Solana blockchain rule.","delegating":"Sending SOL to validator. Hang tight…","successScreen":"Your first rewards will be automatically added to your staked balance in ~6 days. After that, they will be here every 3 days.","successScreenUnstaking":"You\'ll be able to withdraw your deposit in several epochs. This is a Solana blockchain rule.","calculator":"Once you stake your SOL, you\'ll start earning interest. Think of it as a savings account for your crypto."},"bnb":{"unstake":"3Once you unstake your BNB deposit, you’ll need to wait for 7 days before it appears on your Available balance. This is a Binance Chain rule.","stake":"3If you unstake your BNB deposit later on, you’ll need to wait for 7 days before it appears on your Available balance. This is a Binance Chain rule.","delegating":"Sending BNB to validator. Hang tight…","successScreen":"Your first rewards will be automatically added to your available balance in ~72 hours. After that, they will be here every 24 hours.","successScreenUnstaking":"It will appear on your Available balance in 7 days. This is a Binance Chain rule.","calculator":"Once you stake your BNB, you\'ll start earning interest. Think of it as a savings account for your crypto."},"near":{"stake":"If you unstake your NEAR deposit later on, you’ll need to wait for 3 days to withdraw it. This is a NEAR blockchain rule.","unstake":"Once you unstake your NEAR deposit, you’ll need to wait for 3 days to withdraw it. This is a NEAR blockchain rule.","delegating":"Sending NEAR to validator. Hang tight…","successScreen":"Rewards will be automatically added to your staked balance every ~12 hours.","successScreenUnstaking":"You’ll be able to withdraw your deposit in 3 days. This is a NEAR blockchain rule.","calculator":"Once you stake your NEAR, you\'ll start earning interest. Think of it as a savings account for your crypto."},"zil":{"stake":"If you unstake your ZIL deposit later on, you\'ll need to wait for ~24 days (30,800 blocks mined) to withdraw it. This is a Zilliqa blockchain rule.","unstake":"Once you unstake your ZIL deposit, you\'ll need to wait for ~24 days to withdraw it. This is a Zilliqa blockchain rule.","delegating":"Sending ZIL to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~48 hours. After that, they\'ll be here once every 24 hours.","successScreenUnstaking":"You\'ll be able to withdraw your deposit in ~24 days. This is a Zilliqa blockchain rule.","calculator":"Once you stake your ZIL, you\'ll start earning interest. Think of it as a savings account for your crypto."},"zilevm":{"stake":"If you unstake your ZIL deposit later on, you\'ll need to wait for ~24 days (30,800 blocks mined) to withdraw it. This is a Zilliqa blockchain rule.","unstake":"Once you unstake your ZIL deposit, you\'ll need to wait for ~24 days to withdraw it. This is a Zilliqa blockchain rule.","delegating":"Sending ZIL to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~48 hours. After that, they\'ll be here once every 24 hours.","successScreenUnstaking":"You\'ll be able to withdraw your deposit in ~24 days. This is a Zilliqa blockchain rule.","calculator":"Once you stake your ZIL, you\'ll start earning interest. Think of it as a savings account for your crypto."},"ada":{"delegating":"Sending ADA to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~20 days. After that, they\'ll be here once every 5 days.","calculator":"Once you stake your ADA, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"Once you stake your ADA, you can still send it. The Cardano blockchain doesn\'t lock your deposit. There\'s a one-time 2 ADA fee for creating a dedicated staking address for you."},"awc-986":{"detailsOnMainPage":"Stake 10 AWC or more to receive AWC rewards every week.","delegating":"Sending AWC to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~7 days. After that, they\'ll be here once per week.","successScreenUnstaking":"Your AWC is now unstaked.","calculator":"Once you stake your AWC, you\'ll start earning interest. Think of it as a savings account for your crypto."},"icx":{"total":"Your total balance, which includes both your staked and unstaked ICX","available":"The part of your ICX balance available for trading","staked":"The staked part of your ICX balance that\'s not available for trading","rewards":"The amount of ICX staking rewards you can claim","pendingWithdrawal":"The amount of ICX you have that\'s still being unstaked","availableVotes":"The amount of ICX votes you can assign","assignedVotes":"The amount of ICX votes you have assigned","stake":"If you unstake your ICX deposit later on, you’ll need to wait for ~8 days before it appears on your Available balance. This is an Icon blockchain rule.","unstake":"Once you unstake your ICX deposit, you’ll need to wait for ~8 days before it appears on your Available balance. This is an Icon blockchain rule.","delegating":"Sending ICX to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~48 hours. After that, they\'ll be here once every 24 hours.","successScreenUnstaking":"It will appear on your Available balance in ~8 days. This is an Icon blockchain rule.","calculator":"Once you stake your ICX, you\'ll start earning interest. Think of it as a savings account for your crypto."},"band":{"stake":"If you unstake your BAND deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Band Protocol rule.","unstake":"Once you unstake your BAND deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Band Protocol rule.","delegating":"Sending BAND to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Band Protocol rule.","calculator":"Once you stake your BAND, you\'ll start earning interest. Think of it as a savings account for your crypto."},"atom":{"stake":"If you unstake your ATOM deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Cosmos blockchain rule.","unstake":"Once you unstake your ATOM deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Cosmos blockchain rule.","delegating":"Sending ATOM to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Cosmos blockchain rule.","calculator":"Once you stake your ATOM, you\'ll start earning interest. Think of it as a savings account for your crypto."},"osmo":{"stake":"If you unstake your OSMO deposit later on, you’ll need to wait for 14 days before it appears on your Available balance. This is an Osmosis blockchain rule.","unstake":"Once you unstake your OSMO deposit, you’ll need to wait for 14 days before it appears on your Available balance. This is an Osmosis blockchain rule.","delegating":"Sending OSMO to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 14 days. This is an Osmosis blockchain rule.","calculator":"Once you stake your OSMO, you\'ll start earning interest. Think of it as a savings account for your crypto."},"lunc":{"stake":"If you unstake your LUNC deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Terra Classic blockchain rule.","unstake":"Once you unstake your LUNC deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Terra Classic blockchain rule.","delegating":"Sending LUNC to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Terra Classic blockchain rule.","calculator":"Once you stake your LUNC, you\'ll start earning interest. Think of it as a savings account for your crypto."},"luna":{"stake":"If you unstake your LUNA deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Terra blockchain rule.","unstake":"Once you unstake your LUNA deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Terra blockchain rule.","delegating":"Sending LUNA to validator. Hang tight…","successScreen":"Your first rewards will arrive instantly.","successScreenUnstaking":"It will appear on your Available balance in 21 days. This is a Terra blockchain rule.","calculator":"Once you stake your LUNA, you\'ll start earning interest. Think of it as a savings account for your crypto."},"xtz":{"delegating":"Sending XTZ to baker. Hang tight…","successScreen":"Your first rewards will arrive in ~5 weeks. After that, they\'ll be here once every 3 days.","calculator":"Once you stake your XTZ, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"Once you stake your XTZ, you can still send it. The Tezos blockchain doesn\'t lock your deposit."},"trx":{"delegating":"Sending TRX to validator. Hang tight…","successScreen":"Your first rewards will arrive in ~24 hours. After that, they\'ll be here once every 24 hours.","successScreenUnstaking":"It will appear on your Available balance instantly.","calculator":"Once you stake your TRX, you\'ll start earning interest. Think of it as a savings account for your crypto."},"kmd":{"calculator":"Once you stake your KMD, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"Hold KMD and make at least one transaction per month to receive KMD rewards.\\nHow to activate claiming:\\n1. Send at least 10 KMD to your address in one transaction\\n2. Wait for 80 minutes (60 blocks) to see your first reward"},"algo":{"calculator":"Once you stake your ALGO, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"Hold at least 1 ALGO to earn ALGO rewards.\\nYou earn rewards once a new block is added to the blockchain."},"vet":{"calculator":"Once you stake your VET, you\'ll start earning interest. Think of it as a savings account for your crypto.","detailsOnMainPage":"Hold VET to receive VTHO.\\nYou earn rewards once a new block is added to the blockchain."}},"staking":{"labels":{"title":"Stake","total":"Total","available":"Available","staked":"Staked","rewards":"Rewards","pendingWithdrawal":"Pending withdrawal","availableWithdrawal":"Available for withdrawal","availableVotes":"Available votes","assignedVotes":"Assigned votes","unclaimedRewards":"Unclaimed rewards","unstake":"Unstake","unbonding":"Unbonding"},"general":{"title":"Stake","total":"Total","available":"Available","staked":"Staked","rewards":"Rewards","pendingWithdrawal":"Pending withdrawal","availableWithdrawal":"Available for withdrawal","availableVotes":"Available votes","assignedVotes":"Assigned votes","unstake":"Unstake","unbonding":"Unbonding"},"CRO":{"tipsTitle":"CRO staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked CRO"},"available":{"title":"Available","text":"The part of your CRO balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your CRO balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of CRO staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of CRO you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your CRO will automatically be deposited to your wallet"}}},"FET":{"tipsTitle":"FET staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked FET"},"available":{"title":"Available","text":"The part of your FET balance that\'s available for staking."},"staked":{"title":"Staked","text":"The staked part of your FET balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of FET staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of FET you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your FET will automatically be deposited to your wallet"}}},"MATIC":{"tipsTitle":"MATIC staking hints","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked MATIC"},"available":{"title":"Available","text":"The part of your MATIC balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your MATIC balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of MATIC staking rewards you can claim"},"pendingWithdrawal":{"title":"Pending Withdrawal","text":"The amount of MATIC you have that\'s still being unstaked. Unstaking takes around 9 days. Once this period is over, you have to manually withdraw your coins"},"availableWithdrawal":{"title":"Available for withdrawal","text":"The amount of MATIC you have unstaked and ready to be withdrawn"}}},"KAVA":{"tipsTitle":"KAVA staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked KAVA"},"available":{"title":"Available","text":"The part of your KAVA balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your KAVA balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of KAVA staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of KAVA you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your KAVA will automatically be deposited to your wallet"}}},"INJ":{"tipsTitle":"INJ staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked INJ"},"available":{"title":"Available","text":"The part of your INJ balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your INJ balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of INJ staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of INJ you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your INJ will automatically be deposited to your wallet"}}},"FLR":{"tipsTitle":"FLR staking tips","hints":{"successStaking":"Your first rewards will arrive in ~3 days. You need to claim them at least once every 90 days, otherwise they will expire.","successUnStaking":"FLR will appear on your Available balance instantly."},"tips":{"total":{"title":"Total","text":"Your total balance, which includes both your FLR and WFLR"},"available":{"title":"Available","text":"The part of your FLR balance that\'s available for staking"},"staked":{"title":"Staked","text":"Your staked WFLR balance that\'s available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of WFLR staking rewards you can claim"},"availableVotes":{"title":"Available Votes","text":"The WFLR balance you can stake to start receiving rewards"}}},"ETH":{"tipsTitle":"ETH staking hints","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your ETH and stETH balances"},"available":{"title":"Available","text":"The part of your ETH balance that\'s available for staking"},"staked":{"title":"Staked","text":"Your stETH balance that\'s staked. It\'s available for trading and sending out"}}},"HBAR":{"tipsTitle":"HBAR staking hints","tips":{"available":{"title":"Available","text":"Your HBAR balance that\'s available for staking"},"staked":{"title":"Staked","text":"Your HBAR balance that\'s available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of HBAR staking rewards you can claim"}}},"EGLD":{"tipsTitle":"EGLD staking hints","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked EGLD"},"available":{"title":"Available","text":"The part of your EGLD balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your EGLD balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of EGLD staking rewards you can claim"},"pendingWithdrawal":{"title":"Pending Withdrawal","text":"The amount of EGLD you have that\'s still being unstaked. Unstaking takes 10 full days. Once this period is over, you have to manually withdraw your coins"},"availableWithdrawal":{"title":"Available for withdrawal","text":"The amount of EGLD you have unstaked and ready to be withdrawn"}},"hints":{"stake":"If you unstake your EGLD deposit later on, you’ll need to wait for few epochs to withdraw it. This is a EGLD blockchain rule.","unStake":"Once you unstake your EGLD deposit, you’ll need to wait for few epochs to withdraw it. This is a EGLD blockchain rule.","calculator":"Once you stake your EGLD, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending EGLD to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~12 hours","successUnStaking":"You’ll be able to withdraw your deposit few epochs. This is a EGLD blockchain rule."}},"NEAR":{"tipsTitle":"NEAR staking hints","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked NEAR"},"available":{"title":"Available","text":"The part of your NEAR balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your NEAR balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"Rewards are automatically added to your staked balance"},"pendingWithdrawal":{"title":"Pending Withdrawal","text":"The amount of NEAR you have that\'s still being unstaked. Unstaking takes 3 full days. Once this period is over, you have to manually withdraw your coins"},"availableWithdrawal":{"title":"Available for withdrawal","text":"The amount of NEAR you have unstaked and ready to be withdrawn"}},"hints":{"stake":"If you unstake your NEAR deposit later on, you’ll need to wait for 3 days to withdraw it. This is a NEAR blockchain rule.","unStake":"Once you unstake your NEAR deposit, you’ll need to wait for 3 days to withdraw it. This is a NEAR blockchain rule.","calculator":"Once you stake your NEAR, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending NEAR to validator. Hang tight…","successStaking":"Rewards will be automatically added to your staked balance every ~12 hours.","successUnStaking":"You’ll be able to withdraw your deposit in 3 days. This is a NEAR blockchain rule."}},"SOL":{"tipsTitle":"SOL staking hints","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked SOL"},"available":{"title":"Available","text":"The part of your SOL balance that\'s available for staking. 0.000038 SOL is reserved for claiming rewards and unstaking"},"staked":{"title":"Staked","text":"The staked part of your SOL balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"Rewards are automatically added to your staked balance"},"pendingWithdrawal":{"title":"Pending Withdrawal","text":"The amount of SOL you have that\'s still being unstaked. Unstaking takes several epochs. Once this period is over, you have to manually withdraw your coins"},"availableWithdrawal":{"title":"Available for withdrawal","text":"The amount of SOL you have unstaked and ready to be withdrawn"}},"hints":{"stake":"If you unstake your SOL deposit later on, you`ll need to wait for several epochs to withdraw it. This is a Solana blockchain rule.","unStake":"Once you unstake your SOL deposit, you`ll need to wait for several epochs to withdraw it. This is a Solana blockchain rule.","calculator":"Once you stake your SOL, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending SOL to validator. Hang tight…","successStaking":"Your first rewards will be automatically added to your staked balance in ~6 days. After that, they will be here every 3 days.","successUnStaking":"You\'ll be able to withdraw your deposit in several epochs. This is a Solana blockchain rule."}},"BNB":{"tipsTitle":"BNB staking hints","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked BNB"},"available":{"title":"Available","text":"The part of your BNB balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your BNB balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"Rewards are automatically added to your available balance"},"unbonding":{"title":"Unbonding","text":"The amount of BNB you have that\'s still being unbonded (unstaked). Unbonding takes 7 full days. Once this period is over, your BNB will automatically be deposited to your wallet"}},"hints":{"stake":"If you unstake your BNB deposit later on, you’ll need to wait for 7 days to withdraw it. This is a Binance Chain rule.","unStake":"Once you unstake your BNB deposit, you’ll need to wait for 7 days to withdraw it. This is a Binance Chain rule.","calculator":"Once you stake your BNB, you’ll start earning interest in 24 hours. Think of it as a savings account for your crypto.","delegating":"Sending BNB to validator. Hang tight…","successStaking":"Your first rewards will be automatically added to your available balance in ~72 hours. After that, they will be here every 24 hours.","successUnStaking":"You’ll be able to withdraw your deposit in 7 days. This is a Binance Chain rule."}},"TRX":{"tipsTitle":"TRX staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked TRX"},"available":{"title":"Available","text":"The part of your TRX balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your TRX balance that\'s not available for trading and sending out"},"rewards":{"title":"Unclaimed rewards","text":"The amount of TRX staking rewards you can claim"},"availableVotes":{"title":"Available Votes","text":"That\'s how many votes you have for super representative elections"}},"hints":{"calculator":"Once you stake your TRX, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending TRX to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~24 hours. After that, they’ll be here once every 24 hours.","successUnStaking":"You\'ll be able to withdraw your deposit in 14 days. This is a Tron blockchain rule."}},"ICX":{"tipsTitle":"ICX staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked ICX"},"available":{"title":"Available","text":"The part of your ICX balance that\'s available for trading and sending out. 0.9 ICX is reserved for claiming rewards and unstaking"},"staked":{"title":"Staked","text":"The staked part of your ICX balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of ICX staking rewards you can claim"},"pendingWithdrawal":{"title":"Pending Withdrawal","text":"The amount of ICX you have that\'s still being unstaked. Unstaking takes 8 full days. Once this period is over, your ICX will automatically be deposited to your wallet"},"availableVotes":{"title":"Available Votes","text":"The amount of ICX votes you can assign"},"assignedVotes":{"title":"Assigned Votes","text":"The amount of ICX votes you have assigned"}},"hints":{"stake":"If you unstake your ICX deposit later on, you’ll need to wait for ~8 days before it appears on your Available balance. This is an Icon blockchain rule.","unStake":"Once you unstake your ICX deposit, you’ll need to wait for ~8 days before it appears on your Available balance. This is an Icon blockchain rule.","calculator":"Once you stake your ICX, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending ICX to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~48 hours. After that, they’ll be here once every 24 hours.","successUnStaking":"Unstaked ICX will appear on your Available balance in ~8 days. This is an Icon blockchain rule."}},"ADA":{"tipsTitle":"ADA staking hints","tips":{"available":{"title":"Available","text":"Your ADA address isn\'t staked yet. You can only stake all of your ADA, 2 of which are a one-time staking fee. On the upside, you\'ll still be able to exchange or send your ADA after staking it."},"staked":{"title":"Staked","text":"Your ADA address is staked. You can still exchange or send your coins out."},"rewards":{"title":"Rewards","text":"You receive your ADA rewards every 5 days. To claim these, you\'ll need to pay a network fee charged by the Cardano blockchain. The minimum amount to claim is 0.5 ADA"}},"hints":{"mainPage":"Once you stake your ADA, you can still send or exchange it. The Cardano blockchain doesn’t lock your deposit. There’s a one-time 2 ADA fee for creating a dedicated staking address for you.","calculator":"Once you stake your ADA, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending ADA to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~20 days. After that, they’ll be here once every 5 days."},"minRewardInfo":"Rewards < 0.3","minAmountInfo":"The minimum amount to stake is 4 ADA (with a one-time staking fee of 2 ADA included). \\n\\r Add 4 or more ADA to your balance and stake away!","stakedInfo":"Your ADA is staked, but you can still exchange or send your coins out. Unlike most blockchains, Cardano doesn\'t freeze your staked coins","notStakedInfo":"Your ADA isn\'t staked yet. The minimum amount to stake is 4 ADA, 2 of which are a one-time staking fee. Once you stake your deposit, you\'ll still be able to exchange and send your ADA out while also earning rewards."},"ATOM":{"tipsTitle":"ATOM staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked ATOM"},"available":{"title":"Available","text":"The part of your ATOM balance that\'s available for staking. 0.0125 ATOM is reserved for claiming rewards and unstaking"},"staked":{"title":"Staked","text":"The staked part of your ATOM balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of ATOM staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of ATOM you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your ATOM will automatically be deposited to your wallet"}},"hints":{"stake":"If you unstake your ATOM deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Cosmos blockchain rule.","unStake":"Once you unstake your ATOM deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Cosmos blockchain rule.","calculator":"Once you stake your ATOM, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending ATOM to validator. Hang tight…","successStaking":"Your first rewards will arrive instantly.","successUnStaking":"Unstaked ATOM will appear on your Available balance in 21 days. This is a Cosmos blockchain rule.."}},"BAND":{"tipsTitle":"BAND staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked BAND"},"available":{"title":"Available","text":"The part of your BAND balance that\'s available for staking. 0.005 BAND is reserved for claiming rewards and unstaking"},"staked":{"title":"Staked","text":"The staked part of your BAND balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of BAND staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of BAND you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your BAND will automatically be deposited to your wallet"}},"hints":{"stake":"If you unstake your BAND deposit later on, you’ll need to wait for 21 days before it appears on your Available balance. This is a Band Protocol rule.","unStake":"Once you unstake your BAND deposit, you’ll need to wait for 21 days before it appears on your Available balance. This is a Band Protocol rule.","calculator":"Once you stake your BAND, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending BAND to validator. Hang tight…","successStaking":"Your first rewards will arrive instantly.","successUnStaking":"Unstaked BAND will appear on your Available balance in 21 days. This is a Band Protocol rule."}},"OSMO":{"tipsTitle":"OSMO staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked OSMO"},"available":{"title":"Available","text":"The part of your OSMO balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your OSMO balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of OSMO staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of OSMO you have that\'s still being unbonded (unstaked). Unbonding takes 14 full days. Once this period is over, your OSMO will automatically be deposited to your wallet"}}},"LUNC":{"tipsTitle":"LUNC staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked LUNC"},"available":{"title":"Available","text":"The part of your LUNC balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your LUNC balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of LUNC staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of LUNC you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your LUNC will automatically be deposited to your wallet"}}},"LUNA":{"tipsTitle":"LUNA staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked LUNA"},"available":{"title":"Available","text":"The part of your LUNA balance that\'s available for staking"},"staked":{"title":"Staked","text":"The staked part of your LUNA balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of LUNA staking rewards you can claim"},"unbonding":{"title":"Unbonding","text":"The amount of LUNA you have that\'s still being unbonded (unstaked). Unbonding takes 21 full days. Once this period is over, your LUNA will automatically be deposited to your wallet"}}},"ZIL":{"tipsTitle":"ZIL staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your staked and unstaked ZIL"},"available":{"title":"Available","text":"The part of your ZIL balance that\'s available for staking. 150 ZIL is reserved for claiming rewards and unstaking"},"staked":{"title":"Staked","text":"The staked part of your ZIL balance that\'s not available for trading and sending out"},"rewards":{"title":"Rewards","text":"The amount of ZIL staking rewards you can claim"},"pendingWithdrawal":{"title":"Pending withdrawal","text":"The amount of ZIL you have that\'s still being unstaked. Unstaking takes around 24 days. Once this period is over, you have to manually withdraw your coins"},"availableWithdrawal":{"title":"Available for withdrawal","text":"The amount of ZIL you have unstaked and ready to be withdrawn"}},"hints":{"stake":"If you unstake your ZIL deposit later on, you’ll need to wait for ~24 days (24,000 blocks mined) to withdraw it. This is a Zilliqa blockchain rule.","unStake":"Once you unstake your ZIL deposit, you’ll need to wait for ~24 days to withdraw it. This is a Zilliqa blockchain rule.","calculator":"Once you stake your ZIL, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending ZIL to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~48 hours. After that, they’ll be here once every 24 hours.","successUnStaking":"You’ll be able to withdraw your unstaked ZIL in ~24 days. This is a Zilliqa blockchain rule."}},"ZILEVM":{"tipsTitle":"ZILEVM staking tips","tips":{"total":{"title":"Total","text":"Your total balance, which includes both your ZIL and shZIL"},"available":{"title":"Available","text":"The part of your ZIL balance that\'s available for staking"},"staked":{"title":"Staked","text":"The balance of liquid shZIL token available for trading and sending out"},"pendingWithdrawal":{"title":"Pending withdrawal","text":"The amount of ZIL you have that\'s still being unstaked. Unstaking takes around 24 days. Once this period is over, you have to manually withdraw your coins"},"availableWithdrawal":{"title":"Available for withdrawal","text":"The amount of ZIL you have unstaked and ready to be withdrawn"}},"hints":{"stake":"If you unstake your ZIL deposit later on, you’ll need to wait for ~24 days (24,000 blocks mined) to withdraw it. This is a Zilliqa blockchain rule.","unStake":"Once you unstake your ZIL deposit, you’ll need to wait for ~24 days to withdraw it. This is a Zilliqa blockchain rule.","calculator":"Once you stake your ZIL, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending ZIL to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~48 hours. After that, they’ll be here once every 24 hours.","successUnStaking":"You’ll be able to withdraw your unstaked ZIL in ~24 days. This is a Zilliqa blockchain rule."}},"AWC":{"tipsTitle":"AWC staking tips","hints":{"mainPage":{"stakingInfo":"Stake 10 AWC or more to receive AWC rewards every week.","rewardsInfo":[]},"calculator":"Once you stake your AWC, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending AWC to validator. Hang tight…","successStaking":"Your first rewards will arrive in ~7 days. After that, they’ll be here once per week.","successUnStaking":"Unstaked AWC will appear on your Available balance instantly."}},"XTZ":{"hints":{"mainPage":"Once you stake your XTZ, you can still send or exchange it. The Tezos blockchain doesn’t lock your deposit. ","calculator":"Once you stake your XTZ, you’ll start earning interest. Think of it as a savings account for your crypto.","delegating":"Sending XTZ to baker. Hang tight…","successStaking":"Your first rewards will arrive in ~5 weeks. After that, they’ll be here once every 3 days"}},"NEO":{"hints":{"mainPage":{"stakingInfo":"Hold NEO to earn GAS.","rewardsInfo":"7 GAS tokens get minted with every new block. They are then equally distributed between all NEO holders."},"calculator":"Once you stake your NEO, you’ll start earning interest. Think of it as a savings account for your crypto."}},"KMD":{"hints":{"mainPage":{"stakingInfo":"Hold KMD and make at least one transaction per month to receive KMD rewards.","rewardsTitle":"How to activate claiming:","rewardsInfo":["1. Send at least 10 KMD to your address in one transaction","2. Wait for 80 minutes (60 blocks) to see your first reward"]},"calculator":"Once you stake your KMD, you’ll start earning interest. Think of it as a savings account for your crypto."}},"ALGO":{"hints":{"mainPage":"Hold at least 1 ALGO to earn ALGO rewards. You earn rewards once a new block is added to the blockchain.","calculator":"Once you stake your ALGO, you’ll start earning interest. Think of it as a savings account for your crypto."}},"VET":{"hints":{"mainPage":"Hold VET to receive VTHO. You earn rewards once a new block is added to the blockchain.","calculator":"Once you stake your VET, you’ll start earning interest. Think of it as a savings account for your crypto."}}}}',
      );
    },
    2136: function (a, e, t) {
      var n = t(2137);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var o = t(23).default;
      o("a716f5b8", n, !0, {});
    },
    2137: function (a, e, t) {
      ((e = a.exports = t(22)(!1)),
        e.push([
          a.i,
          "\n@keyframes spinner-data-v-f6960b26{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-f6960b26{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-f6960b26{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-f6960b26{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-f6960b26{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-f6960b26{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-f6960b26{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-f6960b26{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-f6960b26{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-f6960b26{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-f6960b26{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-f6960b26]{color:#6b963b\n}\n.text-red[data-v-f6960b26]{color:#c03647\n}\n.text-gray[data-v-f6960b26]{color:#8290ad\n}\n.text-blue[data-v-f6960b26]{color:#00c2ff\n}\n.text-danger[data-v-f6960b26]{color:#8c4545\n}\n.text-title[data-v-f6960b26]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-f6960b26]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-f6960b26]{color:#f1b70b\n}\n.text-white[data-v-f6960b26]{color:#fff\n}\n.text-bigger[data-v-f6960b26]{font-size:18px;font-weight:500\n}\n.text-big[data-v-f6960b26]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-f6960b26]{font-size:14px\n}\n.text-middle-height[data-v-f6960b26]{line-height:24px\n}\n.text-small[data-v-f6960b26]{font-size:12px\n}\n.text-word-break[data-v-f6960b26]{word-break:break-all\n}\n.text-right[data-v-f6960b26]{text-align:right\n}\n.text-left[data-v-f6960b26]{text-align:left\n}\n.text-line-middle[data-v-f6960b26]{line-height:24px\n}\n.text-link[data-v-f6960b26],.text-link-underline[data-v-f6960b26]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-f6960b26]:hover,.text-link-underline[data-v-f6960b26]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-f6960b26]{text-decoration:underline\n}\n.text-center[data-v-f6960b26]{text-align:center\n}\n.text-pointer[data-v-f6960b26]{cursor:pointer\n}\n.gap-10[data-v-f6960b26]{gap:10px\n}\n.m-t-auto[data-v-f6960b26]{margin-top:auto\n}\n.m-t-4[data-v-f6960b26]{margin-top:4px\n}\n.m-t-5[data-v-f6960b26]{margin-top:5px\n}\n.m-t-8[data-v-f6960b26]{margin-top:10px\n}\n.m-t-10[data-v-f6960b26]{margin-top:10px\n}\n.m-t-13[data-v-f6960b26]{margin-top:10px\n}\n.m-t-15[data-v-f6960b26]{margin-top:15px\n}\n.m-t-16[data-v-f6960b26]{margin-top:16px\n}\n.m-t-20[data-v-f6960b26]{margin-top:20px\n}\n.m-t-24[data-v-f6960b26]{margin-top:24px\n}\n.m-t-25[data-v-f6960b26]{margin-top:25px\n}\n.m-t-26[data-v-f6960b26]{margin-top:26px\n}\n.m-t-30[data-v-f6960b26]{margin-top:30px\n}\n.m-t-35[data-v-f6960b26]{margin-top:35px\n}\n.m-t-40[data-v-f6960b26]{margin-top:40px\n}\n.m-t-45[data-v-f6960b26]{margin-top:45px\n}\n.m-t-50[data-v-f6960b26]{margin-top:50px\n}\n.m-t-60[data-v-f6960b26]{margin-top:60px\n}\n.m-t-65[data-v-f6960b26]{margin-top:65px\n}\n.m-t-80[data-v-f6960b26]{margin-top:80px\n}\n.m-l-5[data-v-f6960b26]{margin-left:5px\n}\n.m-l-10[data-v-f6960b26]{margin-left:10px\n}\n.m-l-15[data-v-f6960b26]{margin-left:15px\n}\n.m-l-20[data-v-f6960b26]{margin-left:20px\n}\n.m-l-25[data-v-f6960b26]{margin-left:25px\n}\n.m-l-30[data-v-f6960b26]{margin-left:30px\n}\n.m-l-35[data-v-f6960b26]{margin-left:35px\n}\n.m-r-5[data-v-f6960b26]{margin-right:5px\n}\n.m-r-10[data-v-f6960b26]{margin-right:10px\n}\n.m-r-15[data-v-f6960b26]{margin-right:15px\n}\n.m-r-30[data-v-f6960b26]{margin-right:30px\n}\n.m-b-5[data-v-f6960b26]{margin-bottom:5px !important\n}\n.m-b-15[data-v-f6960b26]{margin-bottom:15px !important\n}\n.m-b-20[data-v-f6960b26]{margin-bottom:20px !important\n}\n.m-b-30[data-v-f6960b26]{margin-bottom:30px !important\n}\n.m-b-25[data-v-f6960b26]{margin-bottom:25px !important\n}\n.m-b-50[data-v-f6960b26]{margin-bottom:50px !important\n}\n.p-t-40[data-v-f6960b26]{padding-top:40px\n}\n.p-t-85[data-v-f6960b26]{padding-top:85px !important\n}\n.hidden[data-v-f6960b26]{opacity:0 !important\n}\n.relative[data-v-f6960b26]{position:relative\n}\n.space-nowrap[data-v-f6960b26]{white-space:nowrap\n}\n.uppercase[data-v-f6960b26]{text-transform:uppercase\n}\n.lowercase[data-v-f6960b26]{text-transform:lowercase\n}\n.fade-enter-active[data-v-f6960b26]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-f6960b26]{transition:all .1s ease-out\n}\n.fade-enter[data-v-f6960b26],.fade-leave-to[data-v-f6960b26]{opacity:0\n}\n.fade-down-enter-active[data-v-f6960b26],.fade-down-leave-active[data-v-f6960b26],.fade-down-move[data-v-f6960b26]{transition:all .15s\n}\n.fade-down-leave-active[data-v-f6960b26],.fade-down-enter-active[data-v-f6960b26]{position:absolute !important\n}\n.fade-down-enter[data-v-f6960b26],.fade-down-leave-to[data-v-f6960b26]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-f6960b26],.scale-leave-active[data-v-f6960b26],.scale-move[data-v-f6960b26]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-f6960b26],.scale-leave-to[data-v-f6960b26]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-f6960b26],.slide-leave-active[data-v-f6960b26]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-f6960b26]{transition:all .2s ease\n}\n.slide-leave-active[data-v-f6960b26]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-f6960b26],.slide-leave-to[data-v-f6960b26]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-f6960b26],.slide-leave[data-v-f6960b26]{margin-bottom:0px\n}\n.slide-enter[data-v-f6960b26],.slide-leave-to[data-v-f6960b26]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-f6960b26],.slide-in-leave-active[data-v-f6960b26]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-f6960b26]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-f6960b26]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-f6960b26]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-f6960b26]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-f6960b26],.page-fade-enter-active[data-v-f6960b26]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-f6960b26],.page-fade-leave-to[data-v-f6960b26],.page-fade-enter[data-v-f6960b26]{opacity:0\n}\n.page-fade-enter-to[data-v-f6960b26]{opacity:1\n}\n.fade-out-leave-active[data-v-f6960b26],.fade-out-enter-active[data-v-f6960b26]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-f6960b26],.fade-out-leave-to[data-v-f6960b26],.fade-out-enter[data-v-f6960b26]{opacity:0\n}\n.fade-out-enter-to[data-v-f6960b26]{opacity:1\n}\n.slide-down-enter-active[data-v-f6960b26],.slide-down-leave-active[data-v-f6960b26]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-f6960b26],.slide-down-enter[data-v-f6960b26]{top:100%\n}\n.slide-down-leave[data-v-f6960b26],.slide-down-enter-to[data-v-f6960b26]{top:0%\n}\n.slide-out-enter-active[data-v-f6960b26],.slide-out-leave-active[data-v-f6960b26]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-f6960b26]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-f6960b26]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-f6960b26]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-f6960b26],.exchange-result.slide-out-enter[data-v-f6960b26]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-f6960b26],.exchange-pending.slide-out-enter[data-v-f6960b26]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-f6960b26],.slide-left-leave-active[data-v-f6960b26]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-f6960b26]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-f6960b26]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-f6960b26]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-f6960b26],.slide-right-leave-active[data-v-f6960b26]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-f6960b26]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-f6960b26]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-f6960b26]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-f6960b26],.spin-down-leave-active[data-v-f6960b26]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-f6960b26]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-f6960b26]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-f6960b26]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-f6960b26],.spin-up-leave-active[data-v-f6960b26]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-f6960b26]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-f6960b26]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-f6960b26]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-f6960b26],.puff-out-leave-active[data-v-f6960b26]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-f6960b26]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-f6960b26]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-f6960b26],.puff-out-enter-to[data-v-f6960b26]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-f6960b26],.collapse-fade-enter-active[data-v-f6960b26]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-f6960b26],.collapse-fade-leave-to[data-v-f6960b26],.collapse-fade-enter[data-v-f6960b26]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-f6960b26]{opacity:1\n}\n.lazy-fade-leave-active[data-v-f6960b26],.lazy-fade-enter-active[data-v-f6960b26]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-f6960b26],.lazy-fade-leave-to[data-v-f6960b26],.lazy-fade-enter[data-v-f6960b26]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-f6960b26]{opacity:1\n}\n.image-preview[data-v-f6960b26]{background:#2a3552;position:relative;width:100%;height:100%;padding-top:56.25%;cursor:pointer\n}\n.image-preview>img[data-v-f6960b26]{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);cursor:inherit\n}",
          "",
        ]));
    },
    2159: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HACK_SORT_VALUE = void 0));
      e.HACK_SORT_VALUE = 1e16;
    },
    2160: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.WIDTH_BUTTONS = e.TYPE_BUTTONS = e.SIZE_BUTTONS = void 0));
      const n = "extra-small",
        o = "small",
        i = "medium",
        r = "large",
        s = "primary-desktop",
        d = "primary-color-desktop",
        l = "error-desktop",
        c = "secondary-desktop",
        f = "secondary-color-desktop",
        u = "outline-desktop",
        p = "outline-color-desktop";
      ((e.SIZE_BUTTONS = [n, o, i, r]),
        (e.TYPE_BUTTONS = [s, d, l, c, f, u, p]),
        (e.WIDTH_BUTTONS = ["", "w320", "w210"]));
    },
    218: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "RewardBox",
        props: {
          size: { type: Number, default: 1 },
          complete: { type: Boolean, default: !1 },
        },
      };
    },
    222: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "CoinIcon",
        props: { wallet: { type: [Object, String], default: () => ({}) } },
      };
    },
    223: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = t(233);
      e.default = {
        name: "TokenTag",
        props: {
          wallet: { type: Object, default: () => ({}) },
          isBig: { type: Boolean, default: !1 },
        },
        computed: {
          tag() {
            var a, e, t;
            const n =
              (null === (a = this.wallet) || void 0 === a
                ? void 0
                : a.deprecatedParent) ||
              (null === (e = this.wallet) || void 0 === e ? void 0 : e.parent);
            return n
              ? null === (t = n.toUpperCase) || void 0 === t
                ? void 0
                : t.call(n)
              : "";
          },
          isShowTag() {
            const a = this.$wallets.getWallet(this.wallet.id),
              e = a.deprecatedParent !== a.id,
              t = a.isL2;
            return (e || t) && n.COINS_WITH_TAG.has(a.deprecatedParent);
          },
        },
      };
    },
    227: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "EditSvg",
        props: { outline: { type: Boolean, default: !1 } },
      };
    },
    2625: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(218),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(364),
        s = t(5);
      function d(a) {
        t(2626);
      }
      var l = !1,
        c = d,
        f = "data-v-08468e59",
        u = null,
        p = Object(s["a"])(o.a, r["a"], r["b"], l, c, f, u);
      e["default"] = p.exports;
    },
    2626: function (a, e, t) {
      var n = t(2627);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var o = t(23).default;
      o("54019b12", n, !0, {});
    },
    2627: function (a, e, t) {
      ((e = a.exports = t(22)(!1)),
        e.push([
          a.i,
          "\n@keyframes spinner-data-v-08468e59{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-08468e59{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-08468e59{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-08468e59{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-08468e59{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-08468e59{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-08468e59{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-08468e59{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-08468e59{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-08468e59{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-08468e59{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-08468e59]{color:#6b963b\n}\n.text-red[data-v-08468e59]{color:#c03647\n}\n.text-gray[data-v-08468e59]{color:#8290ad\n}\n.text-blue[data-v-08468e59]{color:#00c2ff\n}\n.text-danger[data-v-08468e59]{color:#8c4545\n}\n.text-title[data-v-08468e59]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-08468e59]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-08468e59]{color:#f1b70b\n}\n.text-white[data-v-08468e59]{color:#fff\n}\n.text-bigger[data-v-08468e59]{font-size:18px;font-weight:500\n}\n.text-big[data-v-08468e59]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-08468e59]{font-size:14px\n}\n.text-middle-height[data-v-08468e59]{line-height:24px\n}\n.text-small[data-v-08468e59]{font-size:12px\n}\n.text-word-break[data-v-08468e59]{word-break:break-all\n}\n.text-right[data-v-08468e59]{text-align:right\n}\n.text-left[data-v-08468e59]{text-align:left\n}\n.text-line-middle[data-v-08468e59]{line-height:24px\n}\n.text-link[data-v-08468e59],.text-link-underline[data-v-08468e59]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-08468e59]:hover,.text-link-underline[data-v-08468e59]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-08468e59]{text-decoration:underline\n}\n.text-center[data-v-08468e59]{text-align:center\n}\n.text-pointer[data-v-08468e59]{cursor:pointer\n}\n.gap-10[data-v-08468e59]{gap:10px\n}\n.m-t-auto[data-v-08468e59]{margin-top:auto\n}\n.m-t-4[data-v-08468e59]{margin-top:4px\n}\n.m-t-5[data-v-08468e59]{margin-top:5px\n}\n.m-t-8[data-v-08468e59]{margin-top:10px\n}\n.m-t-10[data-v-08468e59]{margin-top:10px\n}\n.m-t-13[data-v-08468e59]{margin-top:10px\n}\n.m-t-15[data-v-08468e59]{margin-top:15px\n}\n.m-t-16[data-v-08468e59]{margin-top:16px\n}\n.m-t-20[data-v-08468e59]{margin-top:20px\n}\n.m-t-24[data-v-08468e59]{margin-top:24px\n}\n.m-t-25[data-v-08468e59]{margin-top:25px\n}\n.m-t-26[data-v-08468e59]{margin-top:26px\n}\n.m-t-30[data-v-08468e59]{margin-top:30px\n}\n.m-t-35[data-v-08468e59]{margin-top:35px\n}\n.m-t-40[data-v-08468e59]{margin-top:40px\n}\n.m-t-45[data-v-08468e59]{margin-top:45px\n}\n.m-t-50[data-v-08468e59]{margin-top:50px\n}\n.m-t-60[data-v-08468e59]{margin-top:60px\n}\n.m-t-65[data-v-08468e59]{margin-top:65px\n}\n.m-t-80[data-v-08468e59]{margin-top:80px\n}\n.m-l-5[data-v-08468e59]{margin-left:5px\n}\n.m-l-10[data-v-08468e59]{margin-left:10px\n}\n.m-l-15[data-v-08468e59]{margin-left:15px\n}\n.m-l-20[data-v-08468e59]{margin-left:20px\n}\n.m-l-25[data-v-08468e59]{margin-left:25px\n}\n.m-l-30[data-v-08468e59]{margin-left:30px\n}\n.m-l-35[data-v-08468e59]{margin-left:35px\n}\n.m-r-5[data-v-08468e59]{margin-right:5px\n}\n.m-r-10[data-v-08468e59]{margin-right:10px\n}\n.m-r-15[data-v-08468e59]{margin-right:15px\n}\n.m-r-30[data-v-08468e59]{margin-right:30px\n}\n.m-b-5[data-v-08468e59]{margin-bottom:5px !important\n}\n.m-b-15[data-v-08468e59]{margin-bottom:15px !important\n}\n.m-b-20[data-v-08468e59]{margin-bottom:20px !important\n}\n.m-b-30[data-v-08468e59]{margin-bottom:30px !important\n}\n.m-b-25[data-v-08468e59]{margin-bottom:25px !important\n}\n.m-b-50[data-v-08468e59]{margin-bottom:50px !important\n}\n.p-t-40[data-v-08468e59]{padding-top:40px\n}\n.p-t-85[data-v-08468e59]{padding-top:85px !important\n}\n.hidden[data-v-08468e59]{opacity:0 !important\n}\n.relative[data-v-08468e59]{position:relative\n}\n.space-nowrap[data-v-08468e59]{white-space:nowrap\n}\n.uppercase[data-v-08468e59]{text-transform:uppercase\n}\n.lowercase[data-v-08468e59]{text-transform:lowercase\n}\n.fade-enter-active[data-v-08468e59]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-08468e59]{transition:all .1s ease-out\n}\n.fade-enter[data-v-08468e59],.fade-leave-to[data-v-08468e59]{opacity:0\n}\n.fade-down-enter-active[data-v-08468e59],.fade-down-leave-active[data-v-08468e59],.fade-down-move[data-v-08468e59]{transition:all .15s\n}\n.fade-down-leave-active[data-v-08468e59],.fade-down-enter-active[data-v-08468e59]{position:absolute !important\n}\n.fade-down-enter[data-v-08468e59],.fade-down-leave-to[data-v-08468e59]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-08468e59],.scale-leave-active[data-v-08468e59],.scale-move[data-v-08468e59]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-08468e59],.scale-leave-to[data-v-08468e59]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-08468e59],.slide-leave-active[data-v-08468e59]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-08468e59]{transition:all .2s ease\n}\n.slide-leave-active[data-v-08468e59]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-08468e59],.slide-leave-to[data-v-08468e59]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-08468e59],.slide-leave[data-v-08468e59]{margin-bottom:0px\n}\n.slide-enter[data-v-08468e59],.slide-leave-to[data-v-08468e59]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-08468e59],.slide-in-leave-active[data-v-08468e59]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-08468e59]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-08468e59]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-08468e59]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-08468e59]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-08468e59],.page-fade-enter-active[data-v-08468e59]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-08468e59],.page-fade-leave-to[data-v-08468e59],.page-fade-enter[data-v-08468e59]{opacity:0\n}\n.page-fade-enter-to[data-v-08468e59]{opacity:1\n}\n.fade-out-leave-active[data-v-08468e59],.fade-out-enter-active[data-v-08468e59]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-08468e59],.fade-out-leave-to[data-v-08468e59],.fade-out-enter[data-v-08468e59]{opacity:0\n}\n.fade-out-enter-to[data-v-08468e59]{opacity:1\n}\n.slide-down-enter-active[data-v-08468e59],.slide-down-leave-active[data-v-08468e59]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-08468e59],.slide-down-enter[data-v-08468e59]{top:100%\n}\n.slide-down-leave[data-v-08468e59],.slide-down-enter-to[data-v-08468e59]{top:0%\n}\n.slide-out-enter-active[data-v-08468e59],.slide-out-leave-active[data-v-08468e59]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-08468e59]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-08468e59]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-08468e59]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-08468e59],.exchange-result.slide-out-enter[data-v-08468e59]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-08468e59],.exchange-pending.slide-out-enter[data-v-08468e59]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-08468e59],.slide-left-leave-active[data-v-08468e59]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-08468e59]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-08468e59]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-08468e59]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-08468e59],.slide-right-leave-active[data-v-08468e59]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-08468e59]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-08468e59]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-08468e59]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-08468e59],.spin-down-leave-active[data-v-08468e59]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-08468e59]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-08468e59]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-08468e59]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-08468e59],.spin-up-leave-active[data-v-08468e59]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-08468e59]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-08468e59]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-08468e59]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-08468e59],.puff-out-leave-active[data-v-08468e59]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-08468e59]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-08468e59]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-08468e59],.puff-out-enter-to[data-v-08468e59]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-08468e59],.collapse-fade-enter-active[data-v-08468e59]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-08468e59],.collapse-fade-leave-to[data-v-08468e59],.collapse-fade-enter[data-v-08468e59]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-08468e59]{opacity:1\n}\n.lazy-fade-leave-active[data-v-08468e59],.lazy-fade-enter-active[data-v-08468e59]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-08468e59],.lazy-fade-leave-to[data-v-08468e59],.lazy-fade-enter[data-v-08468e59]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-08468e59]{opacity:1\n}\nsvg[data-v-08468e59]{fill:#7a859f\n}\ndiv.complete>svg[data-v-08468e59]{fill:#00e05a\n}",
          "",
        ]));
    },
    2637: function (a, e, t) {
      var n = t(2638);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var o = t(23).default;
      o("327aba8b", n, !0, {});
    },
    2638: function (a, e, t) {
      ((e = a.exports = t(22)(!1)),
        e.push([
          a.i,
          '\n@keyframes spinner-data-v-453562be{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-453562be{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-453562be{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-453562be{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-453562be{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-453562be{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-453562be{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-453562be{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-453562be{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-453562be{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-453562be{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-453562be]{color:#6b963b\n}\n.text-red[data-v-453562be]{color:#c03647\n}\n.text-gray[data-v-453562be]{color:#8290ad\n}\n.text-blue[data-v-453562be]{color:#00c2ff\n}\n.text-danger[data-v-453562be]{color:#8c4545\n}\n.text-title[data-v-453562be]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-453562be]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-453562be]{color:#f1b70b\n}\n.text-white[data-v-453562be]{color:#fff\n}\n.text-bigger[data-v-453562be]{font-size:18px;font-weight:500\n}\n.text-big[data-v-453562be]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-453562be]{font-size:14px\n}\n.text-middle-height[data-v-453562be]{line-height:24px\n}\n.text-small[data-v-453562be]{font-size:12px\n}\n.text-word-break[data-v-453562be]{word-break:break-all\n}\n.text-right[data-v-453562be]{text-align:right\n}\n.text-left[data-v-453562be]{text-align:left\n}\n.text-line-middle[data-v-453562be]{line-height:24px\n}\n.text-link[data-v-453562be],.text-link-underline[data-v-453562be]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-453562be]:hover,.text-link-underline[data-v-453562be]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-453562be]{text-decoration:underline\n}\n.text-center[data-v-453562be]{text-align:center\n}\n.text-pointer[data-v-453562be]{cursor:pointer\n}\n.gap-10[data-v-453562be]{gap:10px\n}\n.m-t-auto[data-v-453562be]{margin-top:auto\n}\n.m-t-4[data-v-453562be]{margin-top:4px\n}\n.m-t-5[data-v-453562be]{margin-top:5px\n}\n.m-t-8[data-v-453562be]{margin-top:10px\n}\n.m-t-10[data-v-453562be]{margin-top:10px\n}\n.m-t-13[data-v-453562be]{margin-top:10px\n}\n.m-t-15[data-v-453562be]{margin-top:15px\n}\n.m-t-16[data-v-453562be]{margin-top:16px\n}\n.m-t-20[data-v-453562be]{margin-top:20px\n}\n.m-t-24[data-v-453562be]{margin-top:24px\n}\n.m-t-25[data-v-453562be]{margin-top:25px\n}\n.m-t-26[data-v-453562be]{margin-top:26px\n}\n.m-t-30[data-v-453562be]{margin-top:30px\n}\n.m-t-35[data-v-453562be]{margin-top:35px\n}\n.m-t-40[data-v-453562be]{margin-top:40px\n}\n.m-t-45[data-v-453562be]{margin-top:45px\n}\n.m-t-50[data-v-453562be]{margin-top:50px\n}\n.m-t-60[data-v-453562be]{margin-top:60px\n}\n.m-t-65[data-v-453562be]{margin-top:65px\n}\n.m-t-80[data-v-453562be]{margin-top:80px\n}\n.m-l-5[data-v-453562be]{margin-left:5px\n}\n.m-l-10[data-v-453562be]{margin-left:10px\n}\n.m-l-15[data-v-453562be]{margin-left:15px\n}\n.m-l-20[data-v-453562be]{margin-left:20px\n}\n.m-l-25[data-v-453562be]{margin-left:25px\n}\n.m-l-30[data-v-453562be]{margin-left:30px\n}\n.m-l-35[data-v-453562be]{margin-left:35px\n}\n.m-r-5[data-v-453562be]{margin-right:5px\n}\n.m-r-10[data-v-453562be]{margin-right:10px\n}\n.m-r-15[data-v-453562be]{margin-right:15px\n}\n.m-r-30[data-v-453562be]{margin-right:30px\n}\n.m-b-5[data-v-453562be]{margin-bottom:5px !important\n}\n.m-b-15[data-v-453562be]{margin-bottom:15px !important\n}\n.m-b-20[data-v-453562be]{margin-bottom:20px !important\n}\n.m-b-30[data-v-453562be]{margin-bottom:30px !important\n}\n.m-b-25[data-v-453562be]{margin-bottom:25px !important\n}\n.m-b-50[data-v-453562be]{margin-bottom:50px !important\n}\n.p-t-40[data-v-453562be]{padding-top:40px\n}\n.p-t-85[data-v-453562be]{padding-top:85px !important\n}\n.hidden[data-v-453562be]{opacity:0 !important\n}\n.relative[data-v-453562be]{position:relative\n}\n.space-nowrap[data-v-453562be]{white-space:nowrap\n}\n.uppercase[data-v-453562be]{text-transform:uppercase\n}\n.lowercase[data-v-453562be]{text-transform:lowercase\n}\n.fade-enter-active[data-v-453562be]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-453562be]{transition:all .1s ease-out\n}\n.fade-enter[data-v-453562be],.fade-leave-to[data-v-453562be]{opacity:0\n}\n.fade-down-enter-active[data-v-453562be],.fade-down-leave-active[data-v-453562be],.fade-down-move[data-v-453562be]{transition:all .15s\n}\n.fade-down-leave-active[data-v-453562be],.fade-down-enter-active[data-v-453562be]{position:absolute !important\n}\n.fade-down-enter[data-v-453562be],.fade-down-leave-to[data-v-453562be]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-453562be],.scale-leave-active[data-v-453562be],.scale-move[data-v-453562be]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-453562be],.scale-leave-to[data-v-453562be]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-453562be],.slide-leave-active[data-v-453562be]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-453562be]{transition:all .2s ease\n}\n.slide-leave-active[data-v-453562be]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-453562be],.slide-leave-to[data-v-453562be]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-453562be],.slide-leave[data-v-453562be]{margin-bottom:0px\n}\n.slide-enter[data-v-453562be],.slide-leave-to[data-v-453562be]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-453562be],.slide-in-leave-active[data-v-453562be]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-453562be]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-453562be]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-453562be]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-453562be]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-453562be],.page-fade-enter-active[data-v-453562be]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-453562be],.page-fade-leave-to[data-v-453562be],.page-fade-enter[data-v-453562be]{opacity:0\n}\n.page-fade-enter-to[data-v-453562be]{opacity:1\n}\n.fade-out-leave-active[data-v-453562be],.fade-out-enter-active[data-v-453562be]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-453562be],.fade-out-leave-to[data-v-453562be],.fade-out-enter[data-v-453562be]{opacity:0\n}\n.fade-out-enter-to[data-v-453562be]{opacity:1\n}\n.slide-down-enter-active[data-v-453562be],.slide-down-leave-active[data-v-453562be]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-453562be],.slide-down-enter[data-v-453562be]{top:100%\n}\n.slide-down-leave[data-v-453562be],.slide-down-enter-to[data-v-453562be]{top:0%\n}\n.slide-out-enter-active[data-v-453562be],.slide-out-leave-active[data-v-453562be]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-453562be]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-453562be]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-453562be]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-453562be],.exchange-result.slide-out-enter[data-v-453562be]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-453562be],.exchange-pending.slide-out-enter[data-v-453562be]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-453562be],.slide-left-leave-active[data-v-453562be]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-453562be]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-453562be]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-453562be]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-453562be],.slide-right-leave-active[data-v-453562be]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-453562be]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-453562be]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-453562be]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-453562be],.spin-down-leave-active[data-v-453562be]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-453562be]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-453562be]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-453562be]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-453562be],.spin-up-leave-active[data-v-453562be]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-453562be]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-453562be]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-453562be]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-453562be],.puff-out-leave-active[data-v-453562be]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-453562be]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-453562be]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-453562be],.puff-out-enter-to[data-v-453562be]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-453562be],.collapse-fade-enter-active[data-v-453562be]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-453562be],.collapse-fade-leave-to[data-v-453562be],.collapse-fade-enter[data-v-453562be]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-453562be]{opacity:1\n}\n.lazy-fade-leave-active[data-v-453562be],.lazy-fade-enter-active[data-v-453562be]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-453562be],.lazy-fade-leave-to[data-v-453562be],.lazy-fade-enter[data-v-453562be]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-453562be]{opacity:1\n}\n.token-tag[data-v-453562be]{margin:0 0 0 6px;display:flex;align-items:center\n}\n.token-tag .element[data-v-453562be]{font-size:10px;font-weight:400;padding:2px 8px 0px 8px;line-height:14px;border-radius:100px;align-items:center;justify-content:center;background-color:hsla(0,0%,100%,.06)\n}\n.token-tag .element.big[data-v-453562be]{font-size:14px;padding:2px 12px 2px 12px;font-weight:400;line-height:20px;margin-left:2px\n}\n.token-tag .element.color-ETH[data-v-453562be]{color:#7d97fa\n}\n.token-tag .element.color-ETH>span[data-v-453562be]{padding-right:.3px\n}\n.token-tag .element.color-BASE[data-v-453562be]{color:#7d97fa\n}\n.token-tag .element.color-BASE>span[data-v-453562be]{padding-right:.3px\n}\n.token-tag .element.color-BNB[data-v-453562be]{color:#f0ae2b\n}\n.token-tag .element.color-BNB>span[data-v-453562be]{color:#333131;padding-right:.3px\n}\n.token-tag .element.color-MATIC[data-v-453562be]{color:#a573fa\n}\n.token-tag .element.color-OP[data-v-453562be]{color:#f5364b\n}\n.token-tag .element.color-LUNC[data-v-453562be]{color:#f0802b\n}\n.token-tag .element.color-S[data-v-453562be]{color:#22b9f0\n}\n.token-tag .element.color-FTM[data-v-453562be]{color:#22b9f0\n}\n.token-tag .element.color-ARB[data-v-453562be]{color:#22a6f0\n}\n.token-tag .element.color-AVAX[data-v-453562be]{color:#f54e4f\n}\n.token-tag .element.color-LUNA[data-v-453562be]{color:#f0802b\n}\n.token-tag .element.color-TRX[data-v-453562be]{color:#f5454f\n}\n.token-tag .element.color-TRX>span[data-v-453562be]{padding-right:.3px\n}\n.token-tag .element.color-BSC[data-v-453562be]{color:#f0ae2b\n}\n.token-tag .element.color-BSC>span[data-v-453562be]{padding-right:.3px\n}\n.token-tag .element.color-THETA[data-v-453562be]{color:#22b9f0\n}\n.token-tag .element.color-FLR[data-v-453562be]{color:#f54073\n}\n.token-tag .element.color-LUNС[data-v-453562be]{color:#fd6e00\n}\n.token-tag .element.color-TON[data-v-453562be]{color:#1589cc\n}\n.token-tag .element.color-ONT[data-v-453562be]{color:#2b7be3\n}\n.token-tag .element.color-VET[data-v-453562be]{color:#15bdff\n}\n.token-tag .element.color-SOL[data-v-453562be]{color:#c44be5\n}\n.token-tag .element>span[data-v-453562be]{height:13px;display:block;line-height:normal;font-size:10px;font-style:normal;font-weight:700;color:#fff;font-family:"Roboto",sans-serif\n}',
          "",
        ]));
    },
    2645: function (a, e, t) {
      var n = t(2646);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var o = t(23).default;
      o("512bb2c7", n, !0, {});
    },
    2646: function (a, e, t) {
      ((e = a.exports = t(22)(!1)),
        e.push([
          a.i,
          "\n@keyframes spinner-data-v-3927d0d9{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-3927d0d9{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-3927d0d9{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-3927d0d9{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-3927d0d9{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-3927d0d9{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-3927d0d9{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-3927d0d9{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-3927d0d9{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-3927d0d9{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-3927d0d9{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-3927d0d9]{color:#6b963b\n}\n.text-red[data-v-3927d0d9]{color:#c03647\n}\n.text-gray[data-v-3927d0d9]{color:#8290ad\n}\n.text-blue[data-v-3927d0d9]{color:#00c2ff\n}\n.text-danger[data-v-3927d0d9]{color:#8c4545\n}\n.text-title[data-v-3927d0d9]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-3927d0d9]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-3927d0d9]{color:#f1b70b\n}\n.text-white[data-v-3927d0d9]{color:#fff\n}\n.text-bigger[data-v-3927d0d9]{font-size:18px;font-weight:500\n}\n.text-big[data-v-3927d0d9]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-3927d0d9]{font-size:14px\n}\n.text-middle-height[data-v-3927d0d9]{line-height:24px\n}\n.text-small[data-v-3927d0d9]{font-size:12px\n}\n.text-word-break[data-v-3927d0d9]{word-break:break-all\n}\n.text-right[data-v-3927d0d9]{text-align:right\n}\n.text-left[data-v-3927d0d9]{text-align:left\n}\n.text-line-middle[data-v-3927d0d9]{line-height:24px\n}\n.text-link[data-v-3927d0d9],.text-link-underline[data-v-3927d0d9]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-3927d0d9]:hover,.text-link-underline[data-v-3927d0d9]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-3927d0d9]{text-decoration:underline\n}\n.text-center[data-v-3927d0d9]{text-align:center\n}\n.text-pointer[data-v-3927d0d9]{cursor:pointer\n}\n.gap-10[data-v-3927d0d9]{gap:10px\n}\n.m-t-auto[data-v-3927d0d9]{margin-top:auto\n}\n.m-t-4[data-v-3927d0d9]{margin-top:4px\n}\n.m-t-5[data-v-3927d0d9]{margin-top:5px\n}\n.m-t-8[data-v-3927d0d9]{margin-top:10px\n}\n.m-t-10[data-v-3927d0d9]{margin-top:10px\n}\n.m-t-13[data-v-3927d0d9]{margin-top:10px\n}\n.m-t-15[data-v-3927d0d9]{margin-top:15px\n}\n.m-t-16[data-v-3927d0d9]{margin-top:16px\n}\n.m-t-20[data-v-3927d0d9]{margin-top:20px\n}\n.m-t-24[data-v-3927d0d9]{margin-top:24px\n}\n.m-t-25[data-v-3927d0d9]{margin-top:25px\n}\n.m-t-26[data-v-3927d0d9]{margin-top:26px\n}\n.m-t-30[data-v-3927d0d9]{margin-top:30px\n}\n.m-t-35[data-v-3927d0d9]{margin-top:35px\n}\n.m-t-40[data-v-3927d0d9]{margin-top:40px\n}\n.m-t-45[data-v-3927d0d9]{margin-top:45px\n}\n.m-t-50[data-v-3927d0d9]{margin-top:50px\n}\n.m-t-60[data-v-3927d0d9]{margin-top:60px\n}\n.m-t-65[data-v-3927d0d9]{margin-top:65px\n}\n.m-t-80[data-v-3927d0d9]{margin-top:80px\n}\n.m-l-5[data-v-3927d0d9]{margin-left:5px\n}\n.m-l-10[data-v-3927d0d9]{margin-left:10px\n}\n.m-l-15[data-v-3927d0d9]{margin-left:15px\n}\n.m-l-20[data-v-3927d0d9]{margin-left:20px\n}\n.m-l-25[data-v-3927d0d9]{margin-left:25px\n}\n.m-l-30[data-v-3927d0d9]{margin-left:30px\n}\n.m-l-35[data-v-3927d0d9]{margin-left:35px\n}\n.m-r-5[data-v-3927d0d9]{margin-right:5px\n}\n.m-r-10[data-v-3927d0d9]{margin-right:10px\n}\n.m-r-15[data-v-3927d0d9]{margin-right:15px\n}\n.m-r-30[data-v-3927d0d9]{margin-right:30px\n}\n.m-b-5[data-v-3927d0d9]{margin-bottom:5px !important\n}\n.m-b-15[data-v-3927d0d9]{margin-bottom:15px !important\n}\n.m-b-20[data-v-3927d0d9]{margin-bottom:20px !important\n}\n.m-b-30[data-v-3927d0d9]{margin-bottom:30px !important\n}\n.m-b-25[data-v-3927d0d9]{margin-bottom:25px !important\n}\n.m-b-50[data-v-3927d0d9]{margin-bottom:50px !important\n}\n.p-t-40[data-v-3927d0d9]{padding-top:40px\n}\n.p-t-85[data-v-3927d0d9]{padding-top:85px !important\n}\n.hidden[data-v-3927d0d9]{opacity:0 !important\n}\n.relative[data-v-3927d0d9]{position:relative\n}\n.space-nowrap[data-v-3927d0d9]{white-space:nowrap\n}\n.uppercase[data-v-3927d0d9]{text-transform:uppercase\n}\n.lowercase[data-v-3927d0d9]{text-transform:lowercase\n}\n.fade-enter-active[data-v-3927d0d9]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-3927d0d9]{transition:all .1s ease-out\n}\n.fade-enter[data-v-3927d0d9],.fade-leave-to[data-v-3927d0d9]{opacity:0\n}\n.fade-down-enter-active[data-v-3927d0d9],.fade-down-leave-active[data-v-3927d0d9],.fade-down-move[data-v-3927d0d9]{transition:all .15s\n}\n.fade-down-leave-active[data-v-3927d0d9],.fade-down-enter-active[data-v-3927d0d9]{position:absolute !important\n}\n.fade-down-enter[data-v-3927d0d9],.fade-down-leave-to[data-v-3927d0d9]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-3927d0d9],.scale-leave-active[data-v-3927d0d9],.scale-move[data-v-3927d0d9]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-3927d0d9],.scale-leave-to[data-v-3927d0d9]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-3927d0d9],.slide-leave-active[data-v-3927d0d9]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-3927d0d9]{transition:all .2s ease\n}\n.slide-leave-active[data-v-3927d0d9]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-3927d0d9],.slide-leave-to[data-v-3927d0d9]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-3927d0d9],.slide-leave[data-v-3927d0d9]{margin-bottom:0px\n}\n.slide-enter[data-v-3927d0d9],.slide-leave-to[data-v-3927d0d9]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-3927d0d9],.slide-in-leave-active[data-v-3927d0d9]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-3927d0d9]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-3927d0d9]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-3927d0d9]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-3927d0d9]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-3927d0d9],.page-fade-enter-active[data-v-3927d0d9]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-3927d0d9],.page-fade-leave-to[data-v-3927d0d9],.page-fade-enter[data-v-3927d0d9]{opacity:0\n}\n.page-fade-enter-to[data-v-3927d0d9]{opacity:1\n}\n.fade-out-leave-active[data-v-3927d0d9],.fade-out-enter-active[data-v-3927d0d9]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-3927d0d9],.fade-out-leave-to[data-v-3927d0d9],.fade-out-enter[data-v-3927d0d9]{opacity:0\n}\n.fade-out-enter-to[data-v-3927d0d9]{opacity:1\n}\n.slide-down-enter-active[data-v-3927d0d9],.slide-down-leave-active[data-v-3927d0d9]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-3927d0d9],.slide-down-enter[data-v-3927d0d9]{top:100%\n}\n.slide-down-leave[data-v-3927d0d9],.slide-down-enter-to[data-v-3927d0d9]{top:0%\n}\n.slide-out-enter-active[data-v-3927d0d9],.slide-out-leave-active[data-v-3927d0d9]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-3927d0d9]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-3927d0d9]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-3927d0d9]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-3927d0d9],.exchange-result.slide-out-enter[data-v-3927d0d9]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-3927d0d9],.exchange-pending.slide-out-enter[data-v-3927d0d9]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-3927d0d9],.slide-left-leave-active[data-v-3927d0d9]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-3927d0d9]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-3927d0d9]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-3927d0d9]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-3927d0d9],.slide-right-leave-active[data-v-3927d0d9]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-3927d0d9]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-3927d0d9]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-3927d0d9]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-3927d0d9],.spin-down-leave-active[data-v-3927d0d9]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-3927d0d9]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-3927d0d9]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-3927d0d9]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-3927d0d9],.spin-up-leave-active[data-v-3927d0d9]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-3927d0d9]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-3927d0d9]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-3927d0d9]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-3927d0d9],.puff-out-leave-active[data-v-3927d0d9]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-3927d0d9]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-3927d0d9]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-3927d0d9],.puff-out-enter-to[data-v-3927d0d9]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-3927d0d9],.collapse-fade-enter-active[data-v-3927d0d9]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-3927d0d9],.collapse-fade-leave-to[data-v-3927d0d9],.collapse-fade-enter[data-v-3927d0d9]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-3927d0d9]{opacity:1\n}\n.lazy-fade-leave-active[data-v-3927d0d9],.lazy-fade-enter-active[data-v-3927d0d9]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-3927d0d9],.lazy-fade-leave-to[data-v-3927d0d9],.lazy-fade-enter[data-v-3927d0d9]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-3927d0d9]{opacity:1\n}\nsvg .outline[data-v-3927d0d9]{fill:#7a859f\n}\nsvg:hover .outline[data-v-3927d0d9]{fill:#fff\n}",
          "",
        ]));
    },
    2647: function (a, e, t) {
      "use strict";
      var n = t(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(t(2648)),
        i = n(t(2649));
      e.default = { "click-outside": o.default, "text-html": i.default };
    },
    2648: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        bind(a, e) {
          if ("function" !== typeof e.value)
            throw new Error(
              `v-click-outside: Binding value should be a function, ${typeof e.value} given`,
            );
          ((a.clickOutsideEvent = function (t) {
            a === t.target || a.contains(t.target) || e.value(t);
          }),
            document.body.addEventListener("click", a.clickOutsideEvent));
        },
        unbind(a) {
          document.body.removeEventListener("click", a.clickOutsideEvent);
        },
      };
    },
    2649: function (a, e, t) {
      "use strict";
      var n = t(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(t(2650));
      const i = /\[br\]/g,
        r = "<br>";
      e.default = {
        bind(a, e) {
          var t;
          const n =
            (null === (t = e.value) || void 0 === t
              ? void 0
              : t.replace(i, r)) || "";
          a.innerHTML = o.default.sanitize(n, { ALLOWED_TAGS: ["br"] });
        },
        update(a, e) {
          var t;
          const n =
            (null === (t = e.value) || void 0 === t
              ? void 0
              : t.replace(i, r)) || "";
          a.innerHTML = o.default.sanitize(n, { ALLOWED_TAGS: ["br"] });
        },
        unbind(a) {
          a.innerHTML = "";
        },
      };
    },
    342: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return t(
            "div",
            {
              staticClass: "atomic-progress-bar loading-proggress",
              attrs: { loading: a.loadingPercentage },
            },
            [a._v("\n  " + a._s(a.text) + "\n")],
          );
        },
        o = [];
    },
    343: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return a.hint
            ? t("div", { staticClass: "alert-hint" }, [
                t(
                  "div",
                  {
                    class: [
                      "alert-hint__wrapper",
                      "alert-hint__wrapper--" + a.hint.type,
                    ],
                  },
                  [
                    t("p", [
                      a._v("\n      " + a._s(a.hint.message) + "\n    "),
                    ]),
                  ],
                ),
              ])
            : a._e();
        },
        o = [];
    },
    346: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            n = a._self._c || e;
          return n(
            "div",
            { staticClass: "image-preview" },
            [
              "article" === a.type
                ? [
                    a.isVideo
                      ? n("img", { attrs: { src: t(688) } })
                      : n("img", { attrs: { src: t(240) } }),
                  ]
                : a._e(),
              a._v(" "),
              "nft" === a.type
                ? [n("img", { attrs: { src: t(689) } })]
                : a._e(),
              a._v(" "),
              "nft-small" === a.type
                ? [n("img", { attrs: { src: t(393) } })]
                : a._e(),
            ],
            2,
          );
        },
        o = [];
    },
    347: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return !a.url || a.isError
            ? t("image-preview", { attrs: { type: a.previewType } })
            : t("sanitized-img", {
                attrs: { src: a.url, alt: a.alt },
                on: {
                  load: function (e) {
                    return a.$emit("loaded");
                  },
                  error: a.onError,
                },
              });
        },
        o = [];
    },
    364: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return t("div", { class: { complete: a.complete } }, [
            1 === a.size
              ? t(
                  "svg",
                  {
                    attrs: {
                      width: "20",
                      height: "21",
                      viewBox: "0 0 20 21",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    t("path", {
                      attrs: {
                        d: "M10.0021 2.60918C11.4122 0.0697539 14.0769 -0.240068 15.6 1.28301C16.8445 2.52747 16.8653 4.53673 15.4524 6.00115L16 6.00011C18.2091 6.00011 20 7.79097 20 10.0001V10.4296C20 11.4365 19.8608 11.9765 19.5993 12.4654C19.2596 13.1005 18.7249 13.5581 18.0016 13.8008L18 15.8723C18 17.6554 17.8143 18.3019 17.4657 18.9538C17.1171 19.6056 16.6055 20.1172 15.9537 20.4658C15.3018 20.8145 14.6553 21.0001 12.8722 21.0001H7.12777C5.34473 21.0001 4.69816 20.8145 4.04631 20.4658C3.39446 20.1172 2.88288 19.6056 2.53427 18.9538C2.18565 18.3019 2 17.6554 2 15.8723L1.99936 13.8011C1.27553 13.5585 0.740535 13.1008 0.400699 12.4654C0.161027 12.0172 0.0240553 11.5261 0.00289106 10.6718L0 10.0001C0 7.79097 1.79086 6.00011 4 6.00011L4.55091 6.00115C3.13799 4.53673 3.1588 2.52747 4.40326 1.28301C5.92752 -0.241248 8.59522 0.0702353 10.0021 2.60918ZM9.1 14.0001H3.799L3.801 16.1156C3.81406 16.7878 3.79625 17.4967 4.12153 18.1049C4.67024 19.1309 5.84622 19.1901 6.88446 19.1991H9.1V14.0001ZM16.2 14.0001H10.9V19.1991H13.1155C14.1526 19.179 15.329 19.1324 15.8785 18.1049C16.1013 17.6883 16.1889 17.2806 16.199 16.1156L16.2 14.0001ZM16 7.80011C14.3131 7.80034 10.9007 7.80154 10.9007 7.80154L10.9 12.1991H16.524C17.0693 12.1948 17.7236 12.1559 18.012 11.6165C18.1293 11.3972 18.1877 11.1525 18.1983 10.6186L18.2 10.0001C18.2 8.78508 17.215 7.80011 16 7.80011ZM4 7.80011C2.78497 7.80011 1.8 8.78508 1.8 10.0001L1.80174 10.6186C1.81225 11.1525 1.87066 11.3972 1.98796 11.6165C2.27616 12.1554 2.92847 12.1946 3.47271 12.1997L9.1 12.1991L9.10056 7.8014C9.10056 7.8014 5.68723 7.80034 4 7.80011ZM5.67606 2.5558C4.60685 3.62501 5.59914 5.63214 8.84881 5.97472C8.94202 5.98274 9.10303 5.99795 9.10303 5.99795C8.8434 2.53831 6.87416 1.3577 5.67606 2.5558ZM14.3272 2.5558C13.1291 1.3577 11.1599 2.53831 10.9002 5.99795C10.9002 5.99795 11.0703 5.98197 11.1545 5.97472C14.4041 5.63214 15.3964 3.62501 14.3272 2.5558Z",
                      },
                    }),
                    a._v(" "),
                    t("path", {
                      attrs: {
                        d: "M10.0021 2.60918C11.4122 0.0697539 14.0769 -0.240068 15.6 1.28301C16.8445 2.52747 16.8653 4.53673 15.4524 6.00115L16 6.00011C18.2091 6.00011 20 7.79097 20 10.0001V10.4296C20 11.4365 19.8608 11.9765 19.5993 12.4654C19.2596 13.1005 18.7249 13.5581 18.0016 13.8008L18 15.8723C18 17.6554 17.8143 18.3019 17.4657 18.9538C17.1171 19.6056 16.6055 20.1172 15.9537 20.4658C15.3018 20.8145 14.6553 21.0001 12.8722 21.0001H7.12777C5.34473 21.0001 4.69816 20.8145 4.04631 20.4658C3.39446 20.1172 2.88288 19.6056 2.53427 18.9538C2.18565 18.3019 2 17.6554 2 15.8723L1.99936 13.8011C1.27553 13.5585 0.740535 13.1008 0.400699 12.4654C0.161027 12.0172 0.0240553 11.5261 0.00289106 10.6718L0 10.0001C0 7.79097 1.79086 6.00011 4 6.00011L4.55091 6.00115C3.13799 4.53673 3.1588 2.52747 4.40326 1.28301C5.92752 -0.241248 8.59522 0.0702353 10.0021 2.60918ZM9.1 14.0001H3.799L3.801 16.1156C3.81406 16.7878 3.79625 17.4967 4.12153 18.1049C4.67024 19.1309 5.84622 19.1901 6.88446 19.1991H9.1V14.0001ZM16.2 14.0001H10.9V19.1991H13.1155C14.1526 19.179 15.329 19.1324 15.8785 18.1049C16.1013 17.6883 16.1889 17.2806 16.199 16.1156L16.2 14.0001ZM16 7.80011C14.3131 7.80034 10.9007 7.80154 10.9007 7.80154L10.9 12.1991H16.524C17.0693 12.1948 17.7236 12.1559 18.012 11.6165C18.1293 11.3972 18.1877 11.1525 18.1983 10.6186L18.2 10.0001C18.2 8.78508 17.215 7.80011 16 7.80011ZM4 7.80011C2.78497 7.80011 1.8 8.78508 1.8 10.0001L1.80174 10.6186C1.81225 11.1525 1.87066 11.3972 1.98796 11.6165C2.27616 12.1554 2.92847 12.1946 3.47271 12.1997L9.1 12.1991L9.10056 7.8014C9.10056 7.8014 5.68723 7.80034 4 7.80011ZM5.67606 2.5558C4.60685 3.62501 5.59914 5.63214 8.84881 5.97472C8.94202 5.98274 9.10303 5.99795 9.10303 5.99795C8.8434 2.53831 6.87416 1.3577 5.67606 2.5558ZM14.3272 2.5558C13.1291 1.3577 11.1599 2.53831 10.9002 5.99795C10.9002 5.99795 11.0703 5.98197 11.1545 5.97472C14.4041 5.63214 15.3964 3.62501 14.3272 2.5558Z",
                      },
                    }),
                  ],
                )
              : a._e(),
            a._v(" "),
            2 === a.size
              ? t(
                  "svg",
                  {
                    attrs: {
                      width: "30",
                      height: "31",
                      viewBox: "0 0 30 31",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    t("path", {
                      attrs: {
                        d: "M15.0032 3.41365C17.1183 -0.395491 21.1154 -0.860225 23.4 1.42439C25.2667 3.29109 25.2979 6.30497 23.1785 8.5016L24 8.50004C27.3137 8.50004 30 11.1863 30 14.5V15.1442C30 16.6546 29.7911 17.4646 29.399 18.1979C28.8894 19.1507 28.0873 19.837 27.0025 20.2011L27 23.3084C27 25.9829 26.7215 26.9528 26.1986 27.9306C25.6757 28.9084 24.9083 29.6757 23.9305 30.1986C22.9528 30.7216 21.9829 31 19.3083 31H10.6917C8.0171 31 7.04724 30.7216 6.06946 30.1986C5.09168 29.6757 4.32432 28.9084 3.8014 27.9306C3.27848 26.9528 3 25.9829 3 23.3084L2.99903 20.2016C1.9133 19.8377 1.1108 19.1511 0.601049 18.1979C0.24154 17.5257 0.0360829 16.7891 0.0043366 15.5076L0 14.5C0 11.1863 2.68629 8.50004 6 8.50004L6.82636 8.5016C4.70699 6.30497 4.7382 3.29109 6.6049 1.42439C8.89128 -0.861995 12.8928 -0.394769 15.0032 3.41365ZM13.65 20.5H5.6985L5.7015 23.6733C5.72109 24.6816 5.69437 25.7449 6.18229 26.6573C7.00536 28.1963 8.76932 28.2851 10.3267 28.2985H13.65V20.5ZM24.3 20.5H16.35V28.2985H19.6733C21.2289 28.2683 22.9934 28.1985 23.8177 26.6573C24.1519 26.0323 24.2834 25.4207 24.2985 23.6733L24.3 20.5ZM24 11.2C21.4697 11.2004 16.3511 11.2022 16.3511 11.2022L16.35 17.7985H24.786C25.604 17.7921 26.5853 17.7337 27.0181 16.9246C27.194 16.5956 27.2816 16.2287 27.2974 15.4278L27.3 14.5C27.3 12.6775 25.8225 11.2 24 11.2ZM6 11.2C4.17746 11.2 2.7 12.6775 2.7 14.5L2.70262 15.4278C2.71838 16.2287 2.806 16.5956 2.98194 16.9246C3.41424 17.733 4.3927 17.7918 5.20907 17.7994L13.65 17.7985L13.6508 11.202C13.6508 11.202 8.53085 11.2004 6 11.2ZM8.51408 3.33358C6.91027 4.9374 8.39871 7.94809 13.2732 8.46196C13.413 8.47399 13.6546 8.4968 13.6546 8.4968C13.2651 3.30734 10.3112 1.53643 8.51408 3.33358ZM21.4908 3.33358C19.6937 1.53643 16.7398 3.30734 16.3503 8.4968C16.3503 8.4968 16.6054 8.47283 16.7317 8.46196C21.6062 7.94809 23.0946 4.9374 21.4908 3.33358Z",
                      },
                    }),
                  ],
                )
              : a._e(),
            a._v(" "),
            3 === a.size
              ? t(
                  "svg",
                  {
                    attrs: {
                      width: "40",
                      height: "42",
                      viewBox: "0 0 40 42",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    t("path", {
                      attrs: {
                        d: "M20.0042 5.21812C22.8244 0.139264 28.1538 -0.480381 31.2 2.56577C33.6889 5.0547 33.7305 9.07321 30.9047 12.002L32 12C36.4183 12 40 15.5817 40 20V20.8589C40 22.8728 39.7215 23.9527 39.1986 24.9305C38.5192 26.2008 37.4497 27.116 36.0033 27.6013L36 31.7444C36 35.3105 35.6287 36.6036 34.9315 37.9074C34.2342 39.2111 33.2111 40.2342 31.9074 40.9314C30.6037 41.6287 29.3105 42 25.7445 42H14.2555C10.6895 42 9.39632 41.6287 8.09262 40.9314C6.78891 40.2342 5.76576 39.2111 5.06853 37.9074C4.3713 36.6036 4 35.3105 4 31.7444L3.99871 27.602C2.55106 27.1168 1.48107 26.2014 0.801398 24.9305C0.322054 24.0342 0.0481106 23.052 0.00578213 21.3434L0 20C0 15.5817 3.58172 12 8 12L9.10182 12.002C6.27598 9.07321 6.3176 5.0547 8.80653 2.56577C11.855 -0.482741 17.1904 0.140226 20.0042 5.21812ZM18.2 28H7.598L7.602 32.231C7.62813 33.5754 7.59249 34.9931 8.24306 36.2096C9.34048 38.2616 11.6924 38.38 13.7689 38.398H18.2V28ZM32.4 28H21.8V38.398H26.2311C28.3052 38.3577 30.6579 38.2646 31.7569 36.2096C32.2026 35.3764 32.3778 34.5609 32.398 32.231L32.4 28ZM32 15.6C28.6262 15.6004 21.8015 15.6028 21.8015 15.6028L21.8 24.398H33.048C34.1387 24.3894 35.4471 24.3116 36.0241 23.2328C36.2587 22.7941 36.3755 22.3048 36.3965 21.237L36.4 20C36.4 17.5699 34.4301 15.6 32 15.6ZM8 15.6C5.56995 15.6 3.6 17.5699 3.6 20L3.60349 21.237C3.62451 22.3048 3.74133 22.7941 3.97593 23.2328C4.55232 24.3105 5.85694 24.389 6.94542 24.3991L18.2 24.398L18.2011 15.6026C18.2011 15.6026 11.3745 15.6004 8 15.6ZM11.3521 5.11136C9.21369 7.24978 11.1983 11.264 17.6976 11.9492C17.884 11.9652 18.2061 11.9957 18.2061 11.9957C17.6868 5.07638 13.7483 2.71516 11.3521 5.11136ZM28.6544 5.11136C26.2582 2.71516 22.3197 5.07638 21.8005 11.9957C21.8005 11.9957 22.1405 11.9637 22.3089 11.9492C28.8082 11.264 30.7928 7.24978 28.6544 5.11136Z",
                      },
                    }),
                  ],
                )
              : a._e(),
          ]);
        },
        o = [];
    },
    368: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return t("div", {
            staticClass: "icon",
            class: a.$iconClass(a.wallet),
            attrs: { "data-test-id": "coin_icon" },
          });
        },
        o = [];
    },
    369: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return a.isShowTag
            ? t("div", { staticClass: "token-tag" }, [
                t(
                  "div",
                  {
                    class: ["element color-" + a.tag, { big: a.isBig }],
                    attrs: { "data-test-id": "wall_coin_tag" },
                  },
                  [a._v("\n    " + a._s(a.tag) + "\n  ")],
                ),
              ])
            : a._e();
        },
        o = [];
    },
    373: function (a, e, t) {
      "use strict";
      (t.d(e, "a", function () {
        return n;
      }),
        t.d(e, "b", function () {
          return o;
        }));
      var n = function () {
          var a = this,
            e = a.$createElement,
            t = a._self._c || e;
          return t(
            "svg",
            {
              attrs: {
                fill: "none",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24",
              },
            },
            [
              t("path", {
                attrs: {
                  d: "M3 17.2496V20.9996H6.75L17.81 9.93957L14.06 6.18957L3 17.2496ZM20.71 7.03957C21.1 6.64957 21.1 6.01957 20.71 5.62957L18.37 3.28957C17.98 2.89957 17.35 2.89957 16.96 3.28957L15.13 5.11957L18.88 8.86957L20.71 7.03957Z",
                  fill: "#B0BDD6",
                },
              }),
            ],
          );
        },
        o = [];
    },
    400: function (a, e, t) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = t(2159);
      Object.keys(n).forEach(function (a) {
        "default" !== a &&
          "__esModule" !== a &&
          ((a in e && e[a] === n[a]) ||
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return n[a];
              },
            }));
      });
      var o = t(2160);
      Object.keys(o).forEach(function (a) {
        "default" !== a &&
          "__esModule" !== a &&
          ((a in e && e[a] === o[a]) ||
            Object.defineProperty(e, a, {
              enumerable: !0,
              get: function () {
                return o[a];
              },
            }));
      });
    },
    411: function (a, e, t) {
      "use strict";
      var n = t(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o,
        i,
        r,
        s,
        d = n(t(37)),
        l = t(934),
        c = n(t(84)),
        f = n(t(935)),
        u = n(t(936)),
        p = n(t(684)),
        v = n(t(392)),
        m = n(t(2083)),
        g = n(t(2087)),
        b = n(t(857)),
        h = n(t(2647)),
        y = t(375);
      function k() {
        (c.default.use(f.default),
          c.default.mixin(y.UtilsMixin),
          Object.keys(g.default).forEach((a) => {
            c.default.use(g.default[a]);
          }),
          Object.keys(h.default).forEach((a) => {
            c.default.directive(a, h.default[a]);
          }),
          Object.keys(b.default).forEach((a) => {
            c.default.component(a, b.default[a]);
          }));
        new c.default({
          router: p.default,
          store: v.default,
          i18n: m.default,
          render: (a) => a(u.default),
        }).$mount("#app");
      }
      (d.default.setVersion(l.version),
        d.default.setPlatform("desktop"),
        d.default.setOS(
          null !==
            (o =
              null === (i = window) ||
              void 0 === i ||
              null === (r = i.electron) ||
              void 0 === r ||
              null === (s = r.platform) ||
              void 0 === s
                ? void 0
                : s.os) && void 0 !== o
            ? o
            : "",
        ),
        k());
      e.default = new c.default();
    },
    798: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = function (a, e) {
        void 0 === e && (e = 0);
        const [t, n] = String(a).split("."),
          o = t.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return n ? `${o}.${e ? n.slice(0, e) : n}` : o;
      };
    },
    802: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(222),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(368),
        s = t(5),
        d = !1,
        l = null,
        c = null,
        f = null,
        u = Object(s["a"])(o.a, r["a"], r["b"], d, l, c, f);
      e["default"] = u.exports;
    },
    817: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(227),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(373),
        s = t(5);
      function d(a) {
        t(2645);
      }
      var l = !1,
        c = d,
        f = "data-v-3927d0d9",
        u = null,
        p = Object(s["a"])(o.a, r["a"], r["b"], l, c, f, u);
      e["default"] = p.exports;
    },
    820: function (a, e, t) {
      "use strict";
      function n(a, e) {
        (void 0 === a && (a = ""), void 0 === e && (e = 12));
        const t = 7;
        return a.length > e && e > t ? `${a.slice(0, e)}...${a.slice(-e)}` : a;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n));
    },
    821: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(223),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(369),
        s = t(5);
      function d(a) {
        t(2637);
      }
      var l = !1,
        c = d,
        f = "data-v-453562be",
        u = null,
        p = Object(s["a"])(o.a, r["a"], r["b"], l, c, f, u);
      e["default"] = p.exports;
    },
    829: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = t(830);
      e.default = function (a, e, t) {
        void 0 === t && (t = n.MIN_BALANCE);
        const o = Number(a),
          i = 8,
          r = 6,
          s = 2;
        return "BTC" === e
          ? o.toFixed(i)
          : 0 === o
            ? "0"
            : o < t
              ? o.toFixed(r)
              : o.toFixed(s);
      };
    },
    830: function (a, e, t) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.THOUSAND =
          e.SHORTCUT_SIZE =
          e.MIN_BALANCE =
          e.MILLION =
          e.MAX_VALUE_SIZE =
          e.MAX_LENGTH_FINANCE_TRIM_DEFAULT =
          e.MAX_ADDRES_SIZE =
          e.BILLION =
          e.AMOUNT_TO_FIXED =
            void 0));
      ((e.MAX_LENGTH_FINANCE_TRIM_DEFAULT = 15),
        (e.BILLION = 1e9),
        (e.MILLION = 1e6),
        (e.THOUSAND = 1e3),
        (e.MIN_BALANCE = 0.01),
        (e.MAX_VALUE_SIZE = 9),
        (e.MAX_ADDRES_SIZE = 23),
        (e.SHORTCUT_SIZE = 10),
        (e.AMOUNT_TO_FIXED = 6));
    },
    834: function (a, e, t) {
      "use strict";
      var n = t(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var o = n(t(850)),
        i = (a) => {
          const e = 5,
            t = 4;
          return (0, o.default)(a || "0", e, t);
        };
      e.default = i;
    },
    850: function (a, e, t) {
      "use strict";
      function n(a, e, t) {
        const [n, o] = String(a).split(".");
        if (o) {
          const a = Number(n) > 0 ? t : e;
          return o.length >= a ? `${n}.${o.slice(0, a)}` : `${n}.${o}`;
        }
        return a;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n));
    },
    918: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(200),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(347),
        s = t(5),
        d = !1,
        l = null,
        c = null,
        f = null,
        u = Object(s["a"])(o.a, r["a"], r["b"], d, l, c, f);
      e["default"] = u.exports;
    },
    919: function (a, e, t) {
      "use strict";
      t.r(e);
      var n = t(201),
        o = t.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (a) {
            t.d(e, a, function () {
              return n[a];
            });
          })(i);
      var r = t(346),
        s = t(5);
      function d(a) {
        t(2136);
      }
      var l = !1,
        c = d,
        f = "data-v-f6960b26",
        u = null,
        p = Object(s["a"])(o.a, r["a"], r["b"], l, c, f, u);
      e["default"] = p.exports;
    },
  },
]);
