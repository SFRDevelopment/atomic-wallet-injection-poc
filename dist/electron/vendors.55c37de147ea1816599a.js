(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [51],
  {
    2958: function (a, t, e) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      const n = "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png";
      t.default = {
        props: { uri: { type: String, required: !0 } },
        data() {
          return { isLoaded: !1, isError: !1 };
        },
        computed: {
          formattedSrc() {
            return this.isError ? n : this.uri;
          },
        },
      };
    },
    2959: function (a, t, e) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = {
        name: "TableItems",
        props: {
          excludedFields: { type: Array, default: () => [] },
          items: { type: Array, default: () => [] },
          noResultText: {
            type: String,
            default() {
              return this.$t("message.noResults");
            },
          },
          filter: { type: String, default: "" },
          header: { type: Array, default: () => [] },
          isMain: { type: Boolean, default: !1 },
          isEmpty: { type: Boolean, default: !1 },
          isHeaderBorder: { type: Boolean, default: !1 },
          isSortable: { type: Boolean, default: !1 },
          activeSortField: { type: String, default: "" },
          isSortASC: { type: Boolean, default: !1 },
          spaceBetween: { type: Boolean, default: !1 },
        },
      };
    },
    2999: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(2958),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var s = e(3346),
        o = e(5);
      function l(a) {
        e(3343);
      }
      var c = !1,
        d = l,
        p = "data-v-1dc165ba",
        m = null,
        v = Object(o["a"])(i.a, s["a"], s["b"], c, d, p, m);
      t["default"] = v.exports;
    },
    3189: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(2959),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var s = e(3347),
        o = e(5),
        l = !1,
        c = null,
        d = null,
        p = null,
        m = Object(o["a"])(i.a, s["a"], s["b"], l, c, d, p);
      t["default"] = m.exports;
    },
    3343: function (a, t, e) {
      var n = e(3344);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var i = e(23).default;
      i("c4d8a054", n, !0, {});
    },
    3344: function (a, t, e) {
      t = a.exports = e(22)(!1);
      var n = e(385),
        i = n(e(3345));
      t.push([
        a.i,
        "\n@keyframes spinner-data-v-1dc165ba{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1dc165ba{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1dc165ba{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1dc165ba]{color:#6b963b\n}\n.text-red[data-v-1dc165ba]{color:#c03647\n}\n.text-gray[data-v-1dc165ba]{color:#8290ad\n}\n.text-blue[data-v-1dc165ba]{color:#00c2ff\n}\n.text-danger[data-v-1dc165ba]{color:#8c4545\n}\n.text-title[data-v-1dc165ba]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1dc165ba]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1dc165ba]{color:#f1b70b\n}\n.text-white[data-v-1dc165ba]{color:#fff\n}\n.text-bigger[data-v-1dc165ba]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1dc165ba]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1dc165ba]{font-size:14px\n}\n.text-middle-height[data-v-1dc165ba]{line-height:24px\n}\n.text-small[data-v-1dc165ba]{font-size:12px\n}\n.text-word-break[data-v-1dc165ba]{word-break:break-all\n}\n.text-right[data-v-1dc165ba]{text-align:right\n}\n.text-left[data-v-1dc165ba]{text-align:left\n}\n.text-line-middle[data-v-1dc165ba]{line-height:24px\n}\n.text-link[data-v-1dc165ba],.text-link-underline[data-v-1dc165ba]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1dc165ba]:hover,.text-link-underline[data-v-1dc165ba]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1dc165ba]{text-decoration:underline\n}\n.text-center[data-v-1dc165ba]{text-align:center\n}\n.text-pointer[data-v-1dc165ba]{cursor:pointer\n}\n.gap-10[data-v-1dc165ba]{gap:10px\n}\n.m-t-auto[data-v-1dc165ba]{margin-top:auto\n}\n.m-t-4[data-v-1dc165ba]{margin-top:4px\n}\n.m-t-5[data-v-1dc165ba]{margin-top:5px\n}\n.m-t-8[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-10[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-13[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-15[data-v-1dc165ba]{margin-top:15px\n}\n.m-t-16[data-v-1dc165ba]{margin-top:16px\n}\n.m-t-20[data-v-1dc165ba]{margin-top:20px\n}\n.m-t-24[data-v-1dc165ba]{margin-top:24px\n}\n.m-t-25[data-v-1dc165ba]{margin-top:25px\n}\n.m-t-26[data-v-1dc165ba]{margin-top:26px\n}\n.m-t-30[data-v-1dc165ba]{margin-top:30px\n}\n.m-t-35[data-v-1dc165ba]{margin-top:35px\n}\n.m-t-40[data-v-1dc165ba]{margin-top:40px\n}\n.m-t-45[data-v-1dc165ba]{margin-top:45px\n}\n.m-t-50[data-v-1dc165ba]{margin-top:50px\n}\n.m-t-60[data-v-1dc165ba]{margin-top:60px\n}\n.m-t-65[data-v-1dc165ba]{margin-top:65px\n}\n.m-t-80[data-v-1dc165ba]{margin-top:80px\n}\n.m-l-5[data-v-1dc165ba]{margin-left:5px\n}\n.m-l-10[data-v-1dc165ba]{margin-left:10px\n}\n.m-l-15[data-v-1dc165ba]{margin-left:15px\n}\n.m-l-20[data-v-1dc165ba]{margin-left:20px\n}\n.m-l-25[data-v-1dc165ba]{margin-left:25px\n}\n.m-l-30[data-v-1dc165ba]{margin-left:30px\n}\n.m-l-35[data-v-1dc165ba]{margin-left:35px\n}\n.m-r-5[data-v-1dc165ba]{margin-right:5px\n}\n.m-r-10[data-v-1dc165ba]{margin-right:10px\n}\n.m-r-15[data-v-1dc165ba]{margin-right:15px\n}\n.m-r-30[data-v-1dc165ba]{margin-right:30px\n}\n.m-b-5[data-v-1dc165ba]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1dc165ba]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1dc165ba]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1dc165ba]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1dc165ba]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1dc165ba]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1dc165ba]{padding-top:40px\n}\n.p-t-85[data-v-1dc165ba]{padding-top:85px !important\n}\n.hidden[data-v-1dc165ba]{opacity:0 !important\n}\n.relative[data-v-1dc165ba]{position:relative\n}\n.space-nowrap[data-v-1dc165ba]{white-space:nowrap\n}\n.uppercase[data-v-1dc165ba]{text-transform:uppercase\n}\n.lowercase[data-v-1dc165ba]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1dc165ba],.fade-leave-to[data-v-1dc165ba]{opacity:0\n}\n.fade-down-enter-active[data-v-1dc165ba],.fade-down-leave-active[data-v-1dc165ba],.fade-down-move[data-v-1dc165ba]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1dc165ba],.fade-down-enter-active[data-v-1dc165ba]{position:absolute !important\n}\n.fade-down-enter[data-v-1dc165ba],.fade-down-leave-to[data-v-1dc165ba]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1dc165ba],.scale-leave-active[data-v-1dc165ba],.scale-move[data-v-1dc165ba]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1dc165ba],.scale-leave-to[data-v-1dc165ba]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1dc165ba],.slide-leave-active[data-v-1dc165ba]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1dc165ba]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1dc165ba]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1dc165ba],.slide-leave[data-v-1dc165ba]{margin-bottom:0px\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1dc165ba],.slide-in-leave-active[data-v-1dc165ba]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1dc165ba]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1dc165ba]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1dc165ba],.page-fade-enter-active[data-v-1dc165ba]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1dc165ba],.page-fade-leave-to[data-v-1dc165ba],.page-fade-enter[data-v-1dc165ba]{opacity:0\n}\n.page-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.fade-out-leave-active[data-v-1dc165ba],.fade-out-enter-active[data-v-1dc165ba]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1dc165ba],.fade-out-leave-to[data-v-1dc165ba],.fade-out-enter[data-v-1dc165ba]{opacity:0\n}\n.fade-out-enter-to[data-v-1dc165ba]{opacity:1\n}\n.slide-down-enter-active[data-v-1dc165ba],.slide-down-leave-active[data-v-1dc165ba]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1dc165ba],.slide-down-enter[data-v-1dc165ba]{top:100%\n}\n.slide-down-leave[data-v-1dc165ba],.slide-down-enter-to[data-v-1dc165ba]{top:0%\n}\n.slide-out-enter-active[data-v-1dc165ba],.slide-out-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1dc165ba],.exchange-result.slide-out-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1dc165ba],.exchange-pending.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1dc165ba],.slide-left-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1dc165ba],.slide-right-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1dc165ba],.spin-down-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1dc165ba],.spin-up-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1dc165ba],.puff-out-leave-active[data-v-1dc165ba]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1dc165ba]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1dc165ba]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1dc165ba],.puff-out-enter-to[data-v-1dc165ba]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1dc165ba],.collapse-fade-enter-active[data-v-1dc165ba]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1dc165ba],.collapse-fade-leave-to[data-v-1dc165ba],.collapse-fade-enter[data-v-1dc165ba]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1dc165ba],.lazy-fade-enter-active[data-v-1dc165ba]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1dc165ba],.lazy-fade-leave-to[data-v-1dc165ba],.lazy-fade-enter[data-v-1dc165ba]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.image-with-placeholder[data-v-1dc165ba]{position:relative;width:100%;height:100%;background-size:cover;border-radius:999px;background-position:center;background-image:url(" +
          i +
          ")\n}\n.image-with-placeholder img[data-v-1dc165ba]{opacity:0;width:100%;height:100%;object-fit:cover;border-radius:999px;transition:opacity .1s ease\n}\n.image-with-placeholder img.loaded[data-v-1dc165ba]{opacity:1\n}",
        "",
      ]);
    },
    3345: function (a, t, e) {
      a.exports = e.p + "imgs/skeleton--static.png";
    },
    3346: function (a, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return n;
      }),
        e.d(t, "b", function () {
          return i;
        }));
      var n = function () {
          var a = this,
            t = a.$createElement,
            e = a._self._c || t;
          return e(
            "div",
            { staticClass: "image-with-placeholder" },
            [
              e("sanitized-img", {
                class: { loaded: a.isLoaded },
                attrs: { src: a.formattedSrc },
                on: {
                  load: function (t) {
                    a.isLoaded = !0;
                  },
                  error: function (t) {
                    a.isError = !0;
                  },
                },
              }),
            ],
            1,
          );
        },
        i = [];
    },
    3347: function (a, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return n;
      }),
        e.d(t, "b", function () {
          return i;
        }));
      var n = function () {
          var a = this,
            t = a.$createElement,
            e = a._self._c || t;
          return e("div", { staticClass: "table table-new" }, [
            !a.isEmpty && a.header && a.header.length > 0
              ? e(
                  "div",
                  {
                    staticClass: "header header-new",
                    class: { border: a.isHeaderBorder },
                    attrs: { "data-test-id": "wallet_" },
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass: "table-row table-heading flex-wrap center",
                        class: { "space-between": a.spaceBetween },
                      },
                      [
                        a._l(a.header, function (t, n) {
                          return e(
                            "div",
                            {
                              key: "header-" + n + "-" + Math.random(),
                              staticClass: "item",
                            },
                            [
                              t.slot
                                ? a._t(t.slot)
                                : e(
                                    "div",
                                    {
                                      class: {
                                        "sort-active":
                                          a.activeSortField === t.key,
                                        "sort-enable":
                                          a.isSortable &&
                                          !a.excludedFields.includes(t.key),
                                      },
                                      on: {
                                        click: function (e) {
                                          a.isSortable &&
                                            a.$emit("sortByField", t.key);
                                        },
                                      },
                                    },
                                    [
                                      a.isSortable
                                        ? e(
                                            "svg",
                                            {
                                              staticClass: "sort-arrow",
                                              class: { asc: a.isSortASC },
                                              attrs: { viewBox: "0 0 24 24" },
                                            },
                                            [
                                              e("path", {
                                                attrs: {
                                                  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                                  fill: "#fff",
                                                  stroke: "#fff",
                                                },
                                              }),
                                            ],
                                          )
                                        : a._e(),
                                      a._v(" "),
                                      t.title
                                        ? e(
                                            "span",
                                            {
                                              class: [
                                                "text-middle",
                                                t.key,
                                                {
                                                  "text-gray":
                                                    a.activeSortField !== t.key,
                                                },
                                              ],
                                              attrs: {
                                                "data-test-id":
                                                  "wallet_sort_" + t.key,
                                              },
                                            },
                                            [a._v(a._s(t.title))],
                                          )
                                        : a._e(),
                                    ],
                                  ),
                            ],
                            2,
                          );
                        }),
                        a._v(" "),
                        a.isMain ? e("div", { staticClass: "item" }) : a._e(),
                      ],
                      2,
                    ),
                  ],
                )
              : a._e(),
            a._v(" "),
            e(
              "div",
              { staticClass: "main" },
              [
                a._t("empty", function () {
                  return [
                    !a.items.length && a.filter.length
                      ? e("div", { staticClass: "empty" }, [
                          a._v(
                            "\n        " + a._s(a.noResultText) + "\n      ",
                          ),
                        ])
                      : a._e(),
                  ];
                }),
                a._v(" "),
                a.$scopedSlots["table-rows"] ? a._t("table-rows") : a._e(),
              ],
              2,
            ),
          ]);
        },
        i = [];
    },
    5369: function (a, t, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = e(60),
        r = e(375),
        s = e(824),
        o = n(e(3189)),
        l = n(e(8840));
      const c = 1e4,
        d = 50;
      t.default = {
        name: "MemesExchangeHistory",
        components: { MemesHistoryItem: l.default, TableItems: o.default },
        mixins: [r.ExchangeMixin, r.ScrollMixin],
        data() {
          return {
            header: [{ title: "You sent" }, { title: "You got" }],
            page: 0,
            fetchUpdateTransactionsStatus: null,
            isExchangeTrasactionContinueLoading: !1,
            activeExchangeTransactionID: null,
            activeExchangeTransactionContinueID: null,
            isExchangeTransactionsLoading: !1,
            transactions: [],
          };
        },
        computed: {
          ...(0, i.mapState)({}),
          showTitle() {
            return this.$route.meta.showTitle;
          },
          isListEnded() {
            return this.transactions.length <= d * this.page;
          },
          activeExchangeTransaction() {
            return this.transactions.find((a) => {
              let { id: t } = a;
              return t === this.activeExchangeTransactionID;
            });
          },
          activeExchangeTransactionContinue() {
            return this.transactions.find((a) => {
              let { id: t } = a;
              return t === this.activeExchangeTransactionContinueID;
            });
          },
          sortedTxs() {
            return [...this.transactions].sort((a, t) =>
              a.timestamp - t.timestamp > 0 ? -1 : 1,
            );
          },
        },
        beforeDestroy() {
          clearInterval(this.fetchUpdateTransactionsStatus);
        },
        async beforeMount() {
          ((this.fetchUpdateTransactionsStatus = setInterval(async () => {
            await this.getTransactions();
          }, c)),
            (this.isExchangeTransactionsLoading = !0));
          try {
            await this.getTransactions();
          } catch (a) {
            console.error(a);
          } finally {
            this.isExchangeTransactionsLoading = !1;
          }
        },
        mounted() {
          this.$ga.event("User Movement", "exchange-history-page", {
            clientID: this.$ga.customParams.uid,
          });
        },
        methods: {
          formatWallet: s.formatWallet,
          toggleOrderDetails(a) {
            (void 0 === a && (a = null),
              (this.activeExchangeTransactionContinueID = null),
              (this.activeExchangeTransactionID = a));
          },
          async getTransactions() {
            try {
              if (this.$route.params.id) {
                const a = this.$wallets.getWallet(this.$route.params.id);
                this.transactions = await this.$memesHistory.getByJetton(
                  a.mint,
                );
              } else this.transactions = await this.$memesHistory.getAll();
            } catch (a) {
              console.error(a);
            }
          },
          toggleExchangeContinue(a) {
            (void 0 === a && (a = null),
              (this.activeExchangeTransactionID = null),
              (this.activeExchangeTransactionContinueID = a));
          },
        },
      };
    },
    5370: function (a, t, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(e(798)),
        r = n(e(2999)),
        s = e(824);
      t.default = {
        name: "ExchangeHistoryItem",
        components: {
          MemesImage: r.default,
          CoinIcon: () => Promise.resolve().then(e.bind(null, 802)),
          SuccessMark: () => e.e(410).then(e.bind(null, 2843)),
          AtomicFlagIcon: () => Promise.resolve().then(e.bind(null, 849)),
        },
        props: { tx: { type: Object, required: !0 } },
        computed: {
          targetWallet() {
            return this.$wallets.getWallet(this.tx.to.id);
          },
          targetWalletAmount() {
            return this.targetWallet.toCurrencyUnit(this.tx.to.amount);
          },
          sourceWalletAmount() {
            return this.sourceWallet.toCurrencyUnit(this.tx.from.amount);
          },
          sourceWallet() {
            return this.$wallets.getWallet(this.tx.from.id);
          },
          approxSign() {
            return this.isSuccess || this.isFailed ? "" : "≈ ";
          },
          statusFormatted() {
            return (0, s.getStatusFormatted)(this.tx.status, "simplex");
          },
          isSuccess() {
            return s.SUCCESS_STATUSES.includes(this.statusFormatted);
          },
          isFailed() {
            return s.FAILED_STATUSES.includes(this.statusFormatted);
          },
          isPending() {
            return s.WAITING_STATUSES.includes(this.statusFormatted);
          },
          isSimplex() {
            return "simplex" === this.typeOfExchange;
          },
          isExchange() {
            return "exchange" === this.typeOfExchange;
          },
        },
        methods: {
          formatFinance: i.default,
          handleSwap(a, t) {
            if ((void 0 === t && (t = !1), "SOL" === a.id)) return;
            const e = t ? { sellToken: t } : {};
            this.$router.push({ path: "/memes/sol/" + a.id, query: e });
          },
        },
      };
    },
    8838: function (a, t, e) {
      var n = e(8839);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var i = e(23).default;
      i("f78db596", n, !0, {});
    },
    8839: function (a, t, e) {
      ((t = a.exports = e(22)(!1)),
        t.push([
          a.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.exchange-history .table.table-new .item:nth-child(1){width:39%\n}\n.exchange-history .table.table-new .item:nth-child(2){width:39%\n}\n.exchange-history .table.table-new .item:nth-child(3){width:13%;text-align:right\n}\n.exchange-history .table.table-new .item:nth-child(4){width:calc(9% - 15px);padding-right:15px\n}\n.exchange-history .table.table-new .main{overflow-y:inherit\n}\n.exchange-history .change-icon{margin:0;padding:0\n}\n.exchange-history .table.table-new .table-row{padding-top:12px\n}\n.result-popup{display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:25px\n}\n.result-popup .title{font-size:24px;line-height:28px;margin-bottom:10px\n}\n.result-popup .result-wrapper{display:flex;width:430px;align-items:center;flex-direction:column;margin-top:60px\n}\n.result-popup .coins{display:flex;width:400px;justify-content:space-between;align-items:center\n}\n.result-popup .coins.second-block{margin-bottom:30px\n}\n.result-popup .coins img{max-width:30px;margin-top:-75px\n}\n.result-popup .coins .coin{text-align:center;width:40%\n}\n.result-popup .coins .coin .icon{font-size:65px\n}\n.result-popup .coins .coin p{margin:15px 0 10px\n}\n.result-popup .coins .coin h3,.result-popup .coins .coin h3 *{white-space:nowrap;font-weight:bold;font-size:18px;line-height:21px\n}\n.result-popup .coins .coin .address-info{margin:15px 0 0\n}\n.result-popup .disclaimer{font-size:14px;color:#8290ad;margin:20px 10px 0;text-align:center\n}\n.result-popup .estimated{font-size:20px;line-height:28px;opacity:.8;margin-top:20px\n}\n.result-popup .cashback{text-align:center\n}\n.result-popup .cashback .text-big{line-height:24px\n}\n.result-popup .order-id{margin-top:10vh;position:relative\n}\n.result-popup .order-id.margin{margin-top:45px\n}\n.result-popup .text-link-underline{position:relative\n}\n.result-popup .message{width:230px\n}\n.result-popup .button{margin-top:25px\n}\n.exchange-continue-result__wrapper{padding:30px\n}\n.exchange-continue-result__content{margin-top:24px\n}\n.exchange-continue-result__body{background-color:#070c1d;border-radius:12px;width:100%;box-shadow:0px 20px 30px rgba(0,0,0,.2);padding:25px 28px 30px 28px\n}\n.exchange-continue-result__body .card{background:rgba(122,133,159,.0588235294);border-radius:18px;padding:20px 15px 15px 15px;flex-shrink:0;flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:center\n}\n.exchange-continue-result__body .card>*{margin-top:20px\n}\n.exchange-continue-result__body .card>*:first-child{margin-top:0px\n}\n.exchange-continue-result__body .card .icon{height:75px;width:75px;display:flex;align-items:center;justify-content:center;border-radius:100%\n}\n.exchange-continue-result__body .card .background--gray{background-color:#404a65\n}\n.exchange-continue-result__body .card .background--green{background-color:#00e05a\n}\n.exchange-continue-result__body .spacer{width:40px\n}\n.inner-exchange-basic{height:calc(100% - 80px);padding-top:80px;position:relative;display:flex;flex-direction:column\n}\n.inner-exchange-basic .exchange-third-api{display:flex;justify-content:center;align-items:center;margin-top:auto\n}\n.inner-exchange-basic .exchange-third-api p{color:#8290ad\n}\n.inner-exchange-basic .error-wrapper{margin-top:45px\n}\n.inner-exchange-basic .send-coin .result{margin-top:50px\n}\n.inner-exchange-basic .service-wrappepr{display:flex;flex-direction:column;align-items:center;position:absolute;left:50%;transform:translateX(-50%);bottom:5%\n}\n.inner-exchange-basic .service-wrappepr .service-label{font-size:16px;color:#8290ad;align-self:center;padding-bottom:20px\n}\n.inner-exchange-basic .service-wrappepr .service-choice{display:flex;justify-content:space-around;pointer-events:none;width:65%;opacity:.5\n}\n.inner-exchange-basic .service-wrappepr .service-choice div{display:flex;justify-content:space-around;align-items:center;filter:grayscale(100%)\n}\n.inner-exchange-basic .service-wrappepr .service-choice div span{font-size:16px\n}\n.inner-exchange-basic .service-wrappepr .service-choice div img{width:50px;max-height:30px\n}\n.inner-exchange-basic .submit-wrapper{text-align:center;position:relative\n}\n.inner-exchange-basic .submit-wrapper .button{opacity:.4;pointer-events:none;text-transform:uppercase\n}\n.inner-exchange-basic .submit-wrapper .button.normal,.inner-exchange-basic .submit-wrapper .button.active{opacity:1;pointer-events:all\n}\n.inner-exchange-basic .exchange-rate{display:flex;flex-direction:column;align-items:center;margin-top:20px\n}\n.inner-exchange-basic .exchange-rate__network-fee{position:relative;display:flex;align-items:center;gap:4px\n}\n.inner-exchange-basic .exchange-rate.m-b{margin-bottom:10px\n}\n.inner-exchange-basic .exchange-rate span{color:#8290ad;font-size:14px\n}\n.inner-exchange-basic .exchange-rate .rate{padding-top:5px;color:#fff\n}\n.inner-exchange-basic .hbar-activate{text-align:center\n}\n.inner-exchange-basic .hbar-activate .button.button-buy{display:inline-block;margin-left:0;margin-top:20px\n}\n.inner-exchange-basic .button.claim,.inner-exchange-basic .button.button-buy{display:block;border-color:#8290ad;background-image:none\n}\n.inner-exchange-basic .button.claim:hover,.inner-exchange-basic .button.button-buy:hover{background-color:#8290ad;box-shadow:none\n}\n.inner-exchange-basic .button.button-buy{padding:3px 15px;font-size:12px;margin-left:15px;display:inline-block\n}\n.inner-exchange-basic .button.claim{font-size:14px;margin:15px auto;padding:5px 28px\n}\n.inner-exchange-basic .error-plain{height:auto\n}\n@media(min-width: 1360px){\n.inner-exchange-basic .error-wrapper{margin-top:50px\n}\n.inner-exchange-basic .submit-wrapper .button{font-size:24px\n}\n}\n.history__header{display:flex;justify-content:center;padding:10px 0\n}\n.history__header .history__title{line-height:32px;font-size:20px\n}\n.history__header .close__icon{cursor:pointer;position:absolute;right:10px;width:20px;z-index:100\n}\n.adapted-loader{padding-top:3ex;text-align:center\n}",
          "",
        ]));
    },
    8840: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(5370),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var s = e(8843),
        o = e(5);
      function l(a) {
        e(8841);
      }
      var c = !1,
        d = l,
        p = "data-v-0b806aec",
        m = null,
        v = Object(o["a"])(i.a, s["a"], s["b"], c, d, p, m);
      t["default"] = v.exports;
    },
    8841: function (a, t, e) {
      var n = e(8842);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var i = e(23).default;
      i("124225f4", n, !0, {});
    },
    8842: function (a, t, e) {
      ((t = a.exports = e(22)(!1)),
        t.push([
          a.i,
          "\n@keyframes spinner-data-v-0b806aec{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-0b806aec{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-0b806aec{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-0b806aec{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-0b806aec{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-0b806aec{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-0b806aec{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-0b806aec{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-0b806aec{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-0b806aec{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-0b806aec{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-0b806aec]{color:#6b963b\n}\n.text-red[data-v-0b806aec]{color:#c03647\n}\n.text-gray[data-v-0b806aec]{color:#8290ad\n}\n.text-blue[data-v-0b806aec]{color:#00c2ff\n}\n.text-danger[data-v-0b806aec]{color:#8c4545\n}\n.text-title[data-v-0b806aec]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-0b806aec]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-0b806aec]{color:#f1b70b\n}\n.text-white[data-v-0b806aec]{color:#fff\n}\n.text-bigger[data-v-0b806aec]{font-size:18px;font-weight:500\n}\n.text-big[data-v-0b806aec]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-0b806aec]{font-size:14px\n}\n.text-middle-height[data-v-0b806aec]{line-height:24px\n}\n.text-small[data-v-0b806aec]{font-size:12px\n}\n.text-word-break[data-v-0b806aec]{word-break:break-all\n}\n.text-right[data-v-0b806aec]{text-align:right\n}\n.text-left[data-v-0b806aec]{text-align:left\n}\n.text-line-middle[data-v-0b806aec]{line-height:24px\n}\n.text-link[data-v-0b806aec],.text-link-underline[data-v-0b806aec]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-0b806aec]:hover,.text-link-underline[data-v-0b806aec]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-0b806aec]{text-decoration:underline\n}\n.text-center[data-v-0b806aec]{text-align:center\n}\n.text-pointer[data-v-0b806aec]{cursor:pointer\n}\n.gap-10[data-v-0b806aec]{gap:10px\n}\n.m-t-auto[data-v-0b806aec]{margin-top:auto\n}\n.m-t-4[data-v-0b806aec]{margin-top:4px\n}\n.m-t-5[data-v-0b806aec]{margin-top:5px\n}\n.m-t-8[data-v-0b806aec]{margin-top:10px\n}\n.m-t-10[data-v-0b806aec]{margin-top:10px\n}\n.m-t-13[data-v-0b806aec]{margin-top:10px\n}\n.m-t-15[data-v-0b806aec]{margin-top:15px\n}\n.m-t-16[data-v-0b806aec]{margin-top:16px\n}\n.m-t-20[data-v-0b806aec]{margin-top:20px\n}\n.m-t-24[data-v-0b806aec]{margin-top:24px\n}\n.m-t-25[data-v-0b806aec]{margin-top:25px\n}\n.m-t-26[data-v-0b806aec]{margin-top:26px\n}\n.m-t-30[data-v-0b806aec]{margin-top:30px\n}\n.m-t-35[data-v-0b806aec]{margin-top:35px\n}\n.m-t-40[data-v-0b806aec]{margin-top:40px\n}\n.m-t-45[data-v-0b806aec]{margin-top:45px\n}\n.m-t-50[data-v-0b806aec]{margin-top:50px\n}\n.m-t-60[data-v-0b806aec]{margin-top:60px\n}\n.m-t-65[data-v-0b806aec]{margin-top:65px\n}\n.m-t-80[data-v-0b806aec]{margin-top:80px\n}\n.m-l-5[data-v-0b806aec]{margin-left:5px\n}\n.m-l-10[data-v-0b806aec]{margin-left:10px\n}\n.m-l-15[data-v-0b806aec]{margin-left:15px\n}\n.m-l-20[data-v-0b806aec]{margin-left:20px\n}\n.m-l-25[data-v-0b806aec]{margin-left:25px\n}\n.m-l-30[data-v-0b806aec]{margin-left:30px\n}\n.m-l-35[data-v-0b806aec]{margin-left:35px\n}\n.m-r-5[data-v-0b806aec]{margin-right:5px\n}\n.m-r-10[data-v-0b806aec]{margin-right:10px\n}\n.m-r-15[data-v-0b806aec]{margin-right:15px\n}\n.m-r-30[data-v-0b806aec]{margin-right:30px\n}\n.m-b-5[data-v-0b806aec]{margin-bottom:5px !important\n}\n.m-b-15[data-v-0b806aec]{margin-bottom:15px !important\n}\n.m-b-20[data-v-0b806aec]{margin-bottom:20px !important\n}\n.m-b-30[data-v-0b806aec]{margin-bottom:30px !important\n}\n.m-b-25[data-v-0b806aec]{margin-bottom:25px !important\n}\n.m-b-50[data-v-0b806aec]{margin-bottom:50px !important\n}\n.p-t-40[data-v-0b806aec]{padding-top:40px\n}\n.p-t-85[data-v-0b806aec]{padding-top:85px !important\n}\n.hidden[data-v-0b806aec]{opacity:0 !important\n}\n.relative[data-v-0b806aec]{position:relative\n}\n.space-nowrap[data-v-0b806aec]{white-space:nowrap\n}\n.uppercase[data-v-0b806aec]{text-transform:uppercase\n}\n.lowercase[data-v-0b806aec]{text-transform:lowercase\n}\n.fade-enter-active[data-v-0b806aec]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-0b806aec]{transition:all .1s ease-out\n}\n.fade-enter[data-v-0b806aec],.fade-leave-to[data-v-0b806aec]{opacity:0\n}\n.fade-down-enter-active[data-v-0b806aec],.fade-down-leave-active[data-v-0b806aec],.fade-down-move[data-v-0b806aec]{transition:all .15s\n}\n.fade-down-leave-active[data-v-0b806aec],.fade-down-enter-active[data-v-0b806aec]{position:absolute !important\n}\n.fade-down-enter[data-v-0b806aec],.fade-down-leave-to[data-v-0b806aec]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-0b806aec],.scale-leave-active[data-v-0b806aec],.scale-move[data-v-0b806aec]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-0b806aec],.scale-leave-to[data-v-0b806aec]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-0b806aec],.slide-leave-active[data-v-0b806aec]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-0b806aec]{transition:all .2s ease\n}\n.slide-leave-active[data-v-0b806aec]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-0b806aec],.slide-leave-to[data-v-0b806aec]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-0b806aec],.slide-leave[data-v-0b806aec]{margin-bottom:0px\n}\n.slide-enter[data-v-0b806aec],.slide-leave-to[data-v-0b806aec]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-0b806aec],.slide-in-leave-active[data-v-0b806aec]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-0b806aec]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-0b806aec]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-0b806aec]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-0b806aec]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-0b806aec],.page-fade-enter-active[data-v-0b806aec]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-0b806aec],.page-fade-leave-to[data-v-0b806aec],.page-fade-enter[data-v-0b806aec]{opacity:0\n}\n.page-fade-enter-to[data-v-0b806aec]{opacity:1\n}\n.fade-out-leave-active[data-v-0b806aec],.fade-out-enter-active[data-v-0b806aec]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-0b806aec],.fade-out-leave-to[data-v-0b806aec],.fade-out-enter[data-v-0b806aec]{opacity:0\n}\n.fade-out-enter-to[data-v-0b806aec]{opacity:1\n}\n.slide-down-enter-active[data-v-0b806aec],.slide-down-leave-active[data-v-0b806aec]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-0b806aec],.slide-down-enter[data-v-0b806aec]{top:100%\n}\n.slide-down-leave[data-v-0b806aec],.slide-down-enter-to[data-v-0b806aec]{top:0%\n}\n.slide-out-enter-active[data-v-0b806aec],.slide-out-leave-active[data-v-0b806aec]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-0b806aec]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-0b806aec]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-0b806aec]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-0b806aec],.exchange-result.slide-out-enter[data-v-0b806aec]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-0b806aec],.exchange-pending.slide-out-enter[data-v-0b806aec]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-0b806aec],.slide-left-leave-active[data-v-0b806aec]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-0b806aec]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-0b806aec]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-0b806aec]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-0b806aec],.slide-right-leave-active[data-v-0b806aec]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-0b806aec]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-0b806aec]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-0b806aec]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-0b806aec],.spin-down-leave-active[data-v-0b806aec]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-0b806aec]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-0b806aec]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-0b806aec]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-0b806aec],.spin-up-leave-active[data-v-0b806aec]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-0b806aec]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-0b806aec]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-0b806aec]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-0b806aec],.puff-out-leave-active[data-v-0b806aec]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-0b806aec]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-0b806aec]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-0b806aec],.puff-out-enter-to[data-v-0b806aec]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-0b806aec],.collapse-fade-enter-active[data-v-0b806aec]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-0b806aec],.collapse-fade-leave-to[data-v-0b806aec],.collapse-fade-enter[data-v-0b806aec]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-0b806aec]{opacity:1\n}\n.lazy-fade-leave-active[data-v-0b806aec],.lazy-fade-enter-active[data-v-0b806aec]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-0b806aec],.lazy-fade-leave-to[data-v-0b806aec],.lazy-fade-enter[data-v-0b806aec]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-0b806aec]{opacity:1\n}\n.simplex-flag[data-v-0b806aec]{width:34px;height:34px\n}\n.icon[data-v-0b806aec]{width:34px;height:34px;border-radius:50px\n}\n.link[data-v-0b806aec]{cursor:pointer;text-decoration:underline\n}",
          "",
        ]));
    },
    8843: function (a, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return n;
      }),
        e.d(t, "b", function () {
          return i;
        }));
      var n = function () {
          var a = this,
            t = a.$createElement,
            e = a._self._c || t;
          return e(
            "div",
            {
              staticClass: "table-row",
              attrs: { "data-test-id": "exch_history" },
            },
            [
              e("div", { staticClass: "flex-wrap center" }, [
                e("div", { staticClass: "item" }, [
                  e(
                    "div",
                    { staticClass: "flex-wrap center" },
                    [
                      a.isSimplex
                        ? e("atomic-flag-icon", {
                            staticClass: "simplex-flag",
                            attrs: { "flag-code": a.sourceWallet.ticker },
                          })
                        : a._e(),
                      a._v(" "),
                      "SOL" === a.sourceWallet.ticker
                        ? [
                            e("coin-icon", {
                              attrs: { wallet: a.sourceWallet },
                            }),
                          ]
                        : [
                            e("memes-image", {
                              staticClass: "icon",
                              attrs: { uri: a.sourceWallet.imgUri },
                            }),
                          ],
                      a._v(" "),
                      e("div", { staticClass: "m-l-10" }, [
                        e("span", { staticClass: "text-bigger" }, [
                          a._v(
                            " " +
                              a._s(a.formatFinance(a.sourceWalletAmount)) +
                              "  ",
                          ),
                        ]),
                        a._v(" "),
                        e(
                          "span",
                          {
                            class: [
                              "text-middle text-gray",
                              { link: "SOL" !== a.sourceWallet.id },
                            ],
                            on: {
                              click: function (t) {
                                return a.handleSwap(a.sourceWallet);
                              },
                            },
                          },
                          [
                            a._v(
                              "\n            " +
                                a._s(a.sourceWallet.ticker.toUpperCase()) +
                                "\n          ",
                            ),
                          ],
                        ),
                      ]),
                    ],
                    2,
                  ),
                ]),
                a._v(" "),
                e("div", { staticClass: "item" }, [
                  e(
                    "div",
                    { staticClass: "flex-wrap center" },
                    [
                      "SOL" === a.targetWallet.ticker
                        ? [
                            e("coin-icon", {
                              attrs: { wallet: a.targetWallet },
                            }),
                          ]
                        : [
                            e("memes-image", {
                              staticClass: "icon",
                              attrs: { uri: a.targetWallet.imgUri },
                            }),
                          ],
                      a._v(" "),
                      e("div", { staticClass: "m-l-10" }, [
                        e("span", { staticClass: "text-bigger" }, [
                          a._v(
                            "\n            " +
                              a._s(a.approxSign) +
                              a._s(a.formatFinance(a.targetWalletAmount)) +
                              " \n          ",
                          ),
                        ]),
                        a._v(" "),
                        e(
                          "span",
                          {
                            class: [
                              "text-middle text-gray",
                              { link: "SOL" !== a.targetWallet.id },
                            ],
                            on: {
                              click: function (t) {
                                return a.handleSwap(a.targetWallet, !0);
                              },
                            },
                          },
                          [
                            a._v(
                              "\n            " +
                                a._s(a.targetWallet.ticker.toUpperCase()) +
                                "\n          ",
                            ),
                          ],
                        ),
                      ]),
                    ],
                    2,
                  ),
                ]),
                a._v(" "),
                e("div", { staticClass: "item" }, [
                  e("span", { staticClass: "text-middle text-gray" }, [
                    a._v(
                      "\n        " +
                        a._s(a.$formatDate(a.tx.timestamp)) +
                        "\n      ",
                    ),
                  ]),
                ]),
                a._v(" "),
                e(
                  "div",
                  { staticClass: "item text-right" },
                  [
                    a.isPending
                      ? e("div", {
                          staticClass: "history-status history-status--pending",
                          attrs: { "data-test-id": "exchange_pending" },
                        })
                      : a.isSuccess
                        ? e("success-mark", {
                            attrs: {
                              color: "green",
                              "data-test-id": "exchange_success",
                            },
                          })
                        : a.isFailed
                          ? e("div", {
                              staticClass:
                                "history-status history-status--failed",
                              attrs: { "data-test-id": "exchange_failed" },
                            })
                          : a._e(),
                  ],
                  1,
                ),
              ]),
            ],
          );
        },
        i = [];
    },
    8844: function (a, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return n;
      }),
        e.d(t, "b", function () {
          return i;
        }));
      var n = function () {
          var a = this,
            t = a.$createElement,
            n = a._self._c || t;
          return n("div", { staticStyle: { height: "100%" } }, [
            n("div", { staticClass: "history__header" }, [
              a.showTitle
                ? n("div", { staticClass: "history__title" }, [
                    a._v(
                      "\n      " +
                        a._s(a.$t("exchangePage.tabs.orderHistory")) +
                        "\n    ",
                    ),
                  ])
                : a._e(),
              a._v(" "),
              n(
                "div",
                { staticClass: "close" },
                [
                  n(
                    "router-link",
                    { staticClass: "close__icon", attrs: { to: "/memes" } },
                    [n("img", { attrs: { src: e(237) } })],
                  ),
                ],
                1,
              ),
            ]),
            a._v(" "),
            n(
              "div",
              {
                staticClass: "exchange-history order-details scroll-list2",
                on: { scroll: a.handleScrollEnd },
              },
              [
                a.isExchangeTransactionsLoading
                  ? n("div", { staticClass: "loader" })
                  : n(
                      "table-items",
                      {
                        staticClass: "table",
                        attrs: {
                          header: a.header,
                          "is-empty": 0 === a.sortedTxs.length,
                          items: a.sortedTxs,
                        },
                      },
                      [
                        0 === a.sortedTxs.length
                          ? n(
                              "div",
                              { attrs: { slot: "empty" }, slot: "empty" },
                              [
                                n("div", { staticClass: "empty" }, [
                                  a._v("Your swaps will appear here"),
                                ]),
                                a._v(" "),
                                n(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: a.isExchangeTransactionsLoading,
                                        expression:
                                          "isExchangeTransactionsLoading",
                                      },
                                    ],
                                    staticClass: "adapted-loader loading-wrap",
                                  },
                                  [n("div", { staticClass: "loading" })],
                                ),
                              ],
                            )
                          : a._e(),
                        a._v(" "),
                        n(
                          "div",
                          { attrs: { slot: "table-rows" }, slot: "table-rows" },
                          a._l(a.sortedTxs, function (t) {
                            return n("memes-history-item", {
                              key: "exchange-history-" + t.txid,
                              attrs: { tx: t },
                              nativeOn: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(),
                                    a.toggleOrderDetails(t.txid)
                                  );
                                },
                              },
                            });
                          }),
                          1,
                        ),
                      ],
                    ),
              ],
              1,
            ),
          ]);
        },
        i = [];
    },
    931: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(5369),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var s = e(8844),
        o = e(5);
      function l(a) {
        e(8838);
      }
      var c = !1,
        d = l,
        p = null,
        m = null,
        v = Object(o["a"])(i.a, s["a"], s["b"], c, d, p, m);
      t["default"] = v.exports;
    },
  },
]);
