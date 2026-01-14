(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [335],
  {
    11665: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(5818),
        r = n.n(a);
      for (var i in a)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      var l = n(11668),
        o = n(5);
      function s(e) {
        n(11666);
      }
      var p = !1,
        c = s,
        f = null,
        d = null,
        m = Object(o["a"])(r.a, l["a"], l["b"], p, c, f, d);
      t["default"] = m.exports;
    },
    11666: function (e, t, n) {
      var a = n(11667);
      (a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals));
      var r = n(23).default;
      r("97f5d7d4", a, !0, {});
    },
    11667: function (e, t, n) {
      ((t = e.exports = n(22)(!1)),
        t.push([
          e.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.nft-gallery{height:100vh\n}\n.nft-gallery__scroll-area{height:calc(100% - 92px);overflow-y:overlay;overflow-x:hidden;padding:0 32px 24px\n}\n.nft-gallery__header{display:flex;align-items:center;justify-content:space-between;padding:24px 32px\n}\n.nft-gallery__filter{display:flex;align-items:center;gap:24px\n}\n.nft-gallery__filter .button{padding:10px 24px;text-transform:uppercase;font-size:18px;letter-spacing:1.25px;border-color:#1f9eff;height:44px\n}\n.nft-gallery__not-found{height:calc(100% - 92px);display:flex;justify-content:center;align-items:center\n}\n.nft-gallery__thumbnails{display:grid;grid-template-columns:repeat(auto-fill, 150px);grid-template-rows:auto;grid-column-gap:15px;grid-row-gap:30px;justify-content:space-between\n}",
          "",
        ]));
    },
    11668: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "nft-gallery" }, [
            n(
              "div",
              { staticClass: "nft-gallery__header" },
              [
                n("Search", {
                  staticClass: "search_modern",
                  attrs: {
                    modelValue: e.searchQuery,
                    "data-test-id": "search_nft",
                  },
                  on: {
                    "update:modelValue": function (t) {
                      e.searchQuery = t;
                    },
                  },
                }),
                e._v(" "),
                n(
                  "div",
                  { staticClass: "nft-gallery__filter" },
                  [
                    n("div", {
                      staticClass: "icon icon_filters",
                      attrs: { "data-test-id": "nft_filter" },
                      on: {
                        click: function (t) {
                          return e.$emit("openFilters");
                        },
                      },
                    }),
                    e._v(" "),
                    n(
                      "BaseButton",
                      {
                        staticClass: "w140",
                        attrs: {
                          type: "primary-desktop",
                          size: "medium",
                          "data-test-id": "receive_nft",
                        },
                        on: {
                          click: function (t) {
                            return e.$emit("openReceive");
                          },
                        },
                      },
                      [
                        e._v(
                          "\n        " +
                            e._s(e.$t("nftPage.receive")) +
                            "\n      ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            ),
            e._v(" "),
            e.filteredNFTs.length
              ? n(
                  "div",
                  {
                    ref: "scroll-area",
                    staticClass: "nft-gallery__scroll-area",
                    on: { scroll: e.handleScroll },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "nft-gallery__thumbnails" },
                      e._l(e.filteredNFTs, function (t) {
                        return n("Thumbnail", {
                          key:
                            "nft_image_" +
                            t.name +
                            t.contractAddress +
                            t.blockchain +
                            (t.getImageUrl() || t.imageUrl),
                          attrs: {
                            available: t.isFormatSupported,
                            url: t.getImageUrl() || t.imageUrl,
                            description: t.name,
                            label: t.coinId,
                            type: t.fileType,
                            name: t.fileName,
                            "data-test-id": "nft_image_" + t.coinId,
                          },
                          on: {
                            handleClick: function (n) {
                              return e.$emit("openInfo", t);
                            },
                          },
                        });
                      }),
                      1,
                    ),
                  ],
                )
              : n("div", { staticClass: "nft-gallery__not-found" }, [
                  n("div", { staticClass: "new-text-gray2 new-text-medium2" }, [
                    e._v(
                      "\n      " +
                        e._s(e.$t("message.nothingFound")) +
                        "\n    ",
                    ),
                  ]),
                ]),
          ]);
        },
        r = [];
    },
    3e3: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "AtomicSearch",
        props: {
          modelValue: { type: String, default: "" },
          placeholder: {
            type: String,
            default() {
              return this.$t("input.search");
            },
          },
          noTopClear: { type: Boolean, default: !1 },
        },
        computed: {
          searchInput: {
            get() {
              return this.modelValue;
            },
            set(e) {
              this.$debounce(() => {
                this.$emit("update:modelValue", e);
              }, 250);
            },
          },
        },
      };
    },
    3348: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(3e3),
        r = n.n(a);
      for (var i in a)
        ["default"].indexOf(i) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(i);
      var l = n(3443),
        o = n(5),
        s = !1,
        p = null,
        c = null,
        f = null,
        d = Object(o["a"])(r.a, l["a"], l["b"], s, p, c, f);
      t["default"] = d.exports;
    },
    3443: function (e, t, n) {
      "use strict";
      (n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }));
      var a = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "search" }, [
            n("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: e.searchInput,
                  expression: "searchInput",
                },
              ],
              attrs: {
                placeholder: e.placeholder,
                type: "text",
                "data-test-id": "wallet_search_coin",
              },
              domProps: { value: e.searchInput },
              on: {
                input: function (t) {
                  t.target.composing || (e.searchInput = t.target.value);
                },
              },
            }),
            e._v(" "),
            e.searchInput
              ? n(
                  "span",
                  {
                    class: ["clear", e.noTopClear && "clear_noTop"],
                    attrs: { id: "search_clear" },
                    on: {
                      click: function (t) {
                        return e.$emit("update:modelValue", "");
                      },
                    },
                  },
                  [e._v("\n    ✕\n  ")],
                )
              : e._e(),
          ]);
        },
        r = [];
    },
    5818: function (e, t, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var r = n(60),
        i = a(n(3348));
      const l = 20;
      t.default = {
        name: "NFTGallery",
        components: { Search: i.default },
        data() {
          return { searchQuery: "", page: 1 };
        },
        computed: {
          ...(0, r.mapState)({
            nfts: (e) => e.Nft.nfts,
            enabledFiltersNft: (e) => e.Nft.enabledFiltersNft,
          }),
          filteredNFTs() {
            return this.nfts
              .filter((e) => {
                var t;
                if (!e) return;
                let { name: n, coinId: a } = e;
                var r;
                this.searchQuery &&
                  n &&
                  (n = n
                    .toLowerCase()
                    .includes(
                      null === (r = this.searchQuery) || void 0 === r
                        ? void 0
                        : r.toLowerCase(),
                    ));
                return (
                  this.enabledFiltersNft.includes(
                    null !== a && void 0 !== a ? a : "",
                  ) &&
                  (null === (t = n) || void 0 === t || t)
                );
              })
              .slice(0, Math.max(l, l * this.page));
          },
        },
        mounted() {
          const e = this.$refs["scroll-area"];
          e.scrollHeight <= e.clientHeight && (this.page = 3);
        },
        methods: {
          handleScroll(e) {
            const { scrollHeight: t, offsetHeight: n, scrollTop: a } = e.target;
            t - n - a - 20 <= 0 && this.page++;
          },
        },
      };
    },
  },
]);
