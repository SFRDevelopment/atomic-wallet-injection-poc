(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [57],
  {
    11660: function (t, e, n) {
      var a = n(11661);
      (a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals));
      var i = n(23).default;
      i("5645b818", a, !0, {});
    },
    11661: function (t, e, n) {
      ((e = t.exports = n(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.nft-filter-hide-all-btn{padding:0;border:0;justify-content:end\n}",
          "",
        ]));
    },
    11662: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5817),
        i = n.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      var l = n(11663),
        s = n(5),
        o = !1,
        p = null,
        c = null,
        f = null,
        d = Object(s["a"])(i.a, l["a"], l["b"], o, p, c, f);
      e["default"] = d.exports;
    },
    11663: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "label",
            {
              class: [
                "ui-toggle-label",
                t.isActive && "ui-toggle-label_checked",
              ],
            },
            [
              n("div", {
                staticClass: "ui-toggle-label__icon m-r-10",
                class: t.$iconClass(t.item.coin),
                attrs: { "data-test-id": "filter_" + t.item.name },
              }),
              t._v(" "),
              n("div", [t._v("\n    " + t._s(t.item.name) + "\n  ")]),
              t._v(" "),
              n("input", {
                attrs: { type: "checkbox" },
                domProps: { value: t.isActive },
                on: { input: t.onChange },
              }),
            ],
          );
        },
        i = [];
    },
    11664: function (t, e, n) {
      "use strict";
      (n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }));
      var a = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "section section_popup p-t-85",
              attrs: { "data-test-id": "filters" },
            },
            [
              n(
                "div",
                { staticClass: "section__header section__header_panel" },
                [
                  n("div", { staticClass: "title" }, [
                    t._v("\n      " + t._s(t.$t("nftPage.filters")) + "\n    "),
                  ]),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "flex" },
                    [
                      n(
                        "BaseButton",
                        {
                          staticClass: "m-r-10",
                          attrs: {
                            type: "secondary-desktop",
                            size: "extra-small",
                            "data-test-id": "filter_close",
                          },
                          on: {
                            click: function (e) {
                              return t.$emit("close");
                            },
                          },
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$t("button.cancel")) +
                              "\n      ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      n(
                        "BaseButton",
                        {
                          attrs: {
                            size: "extra-small",
                            "data-test-id": "filter_apply",
                          },
                          on: { click: t.handleApply },
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$t("button.apply")) +
                              "\n      ",
                          ),
                        ],
                      ),
                    ],
                    1,
                  ),
                ],
              ),
              t._v(" "),
              n("div", { staticClass: "section__body" }, [
                n(
                  "div",
                  { staticClass: "section__item m-b-30 align-center flex" },
                  [
                    n("div", { staticClass: "text text_medium" }, [
                      t._v(
                        "\n        " +
                          t._s(t.$t("nftPage.blockchain")) +
                          "\n      ",
                      ),
                    ]),
                    t._v(" "),
                    n(
                      "BaseButton",
                      {
                        staticClass: "nft-filter-hide-all-btn",
                        attrs: {
                          type: "outline-desktop",
                          size: "small",
                          "data-test-id": t.isFiltersHidden
                            ? "hide_all"
                            : "show_all",
                        },
                        on: { click: t.handleChangeAll },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(
                              t.isFiltersHidden
                                ? t.$t("filterPopup.hideAll")
                                : t.$t("filterPopup.showAll"),
                            ) +
                            "\n      ",
                        ),
                      ],
                    ),
                  ],
                  1,
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass:
                      "section__item section__item_start flex-wrap gap-10",
                  },
                  t._l(t.allFiltersNft, function (e) {
                    return n("ToggleLabel", {
                      key: e.id,
                      attrs: {
                        item: e,
                        isActive: t.selectedFilters.includes(e.id),
                      },
                      on: {
                        onEnabled: function (n) {
                          return t.handleChange(e.id, !0);
                        },
                        onDisabled: function (n) {
                          return t.handleChange(e.id, !1);
                        },
                      },
                    });
                  }),
                  1,
                ),
              ]),
            ],
          );
        },
        i = [];
    },
    5816: function (t, e, n) {
      "use strict";
      var a = n(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(n(11662)),
        r = n(60);
      e.default = {
        name: "NFTFilter",
        components: { ToggleLabel: i.default },
        data() {
          var t;
          return {
            selectedFilters: JSON.parse(
              null !== (t = localStorage.getItem("nft::filters")) &&
                void 0 !== t
                ? t
                : "[]",
            ),
          };
        },
        computed: {
          ...(0, r.mapState)({
            allFiltersNft: (t) => t.Nft.allFiltersNft,
            enabledFiltersNft: (t) => t.Nft.enabledFiltersNft,
          }),
          isFiltersHidden() {
            return this.allFiltersNft.length === this.selectedFilters.length;
          },
        },
        methods: {
          ...(0, r.mapActions)(["updateNftFilters"]),
          handleChange(t, e) {
            this.selectedFilters = e
              ? [...new Set([...this.selectedFilters, t])]
              : this.selectedFilters.filter((e) => e !== t);
          },
          handleChangeAll() {
            this.selectedFilters = this.isFiltersHidden
              ? []
              : this.allFiltersNft.map((t) => t.id);
          },
          handleApply() {
            (this.updateNftFilters(this.selectedFilters), this.$emit("close"));
          },
        },
      };
    },
    5817: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "ToggleLabel",
        props: {
          item: { type: Object, default: () => ({}) },
          isActive: { type: Boolean, default: !0 },
        },
        methods: {
          onChange() {
            this.$emit(this.isActive ? "onDisabled" : "onEnabled");
          },
        },
      };
    },
    6976: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n(5816),
        i = n.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(r);
      var l = n(11664),
        s = n(5);
      function o(t) {
        n(11660);
      }
      var p = !1,
        c = o,
        f = null,
        d = null,
        m = Object(s["a"])(i.a, l["a"], l["b"], p, c, f, d);
      e["default"] = m.exports;
    },
  },
]);
