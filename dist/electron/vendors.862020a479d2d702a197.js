(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [53],
  {
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
    3e3: function (a, t, e) {
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
            set(a) {
              this.$debounce(() => {
                this.$emit("update:modelValue", a);
              }, 250);
            },
          },
        },
      };
    },
    3088: function (a, t, e) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var n = e(84),
        i = e(392);
      const r = 1500;
      function o(a) {
        const t = (0, n.ref)(0),
          e = (0, i.useStore)(),
          r = null === a || void 0 === a ? void 0 : a.map((a) => a.reasons),
          o = () => {
            var a;
            t.value =
              (null === r ||
              void 0 === r ||
              null ===
                (a = r.filter(
                  (a) => !e.getters.getCompletedNotifyReasons.includes(a),
                )) ||
              void 0 === a
                ? void 0
                : a.length) || 0;
          };
        return (
          o(),
          (0, n.watch)(() => e.getters.getCompletedNotifyReasons.length, o),
          t
        );
      }
      function l(a, t, e) {
        const o = (0, i.useStore)(),
          l = { threshold: 1 },
          s = function (t) {
            t.forEach((t) => {
              if (1 === t.intersectionRatio) {
                const t = e.map((a) => a.reasons).includes(a),
                  n = o.getters.getCompletedNotifyReasons;
                d(n).length > 0 &&
                  t &&
                  setTimeout(() => {
                    n.includes(a) ||
                      (o.commit("ADD_COMPLETED_REASON", a),
                      o.dispatch("setCompletedReason"));
                  }, r);
              }
            });
          };
        function d(a) {
          const t = a;
          return Array.isArray(t)
            ? e.reduce(
                (a, e) => (!1 === t.includes(e.reasons) ? [...a, e] : a),
                [],
              )
            : [];
        }
        const c = (0, n.ref)(new IntersectionObserver(s, l));
        ((0, n.onMounted)(() => {
          try {
            var a;
            null === c ||
              void 0 === c ||
              null === (a = c.value) ||
              void 0 === a ||
              a.observe(t.value);
          } catch (e) {}
        }),
          (0, n.onUnmounted)(() => {
            try {
              var a;
              null === c ||
                void 0 === c ||
                null === (a = c.value) ||
                void 0 === a ||
                a.unobserve(t.value);
            } catch (e) {}
          }));
      }
      t.default = {
        name: "AtomicNotifyPoint",
        props: {
          UID: { type: String, required: !0 },
          type: { type: String, default: "new" },
        },
        setup(a) {
          const t = (0, n.ref)(null),
            e = (0, i.useStore)();
          try {
            var r;
            const n =
              null === (r = e.getters.notifyTree) || void 0 === r
                ? void 0
                : r[a.UID];
            if (n) {
              const e = o(n);
              return (l(a.UID, t, n), { notify: t, amount: e });
            }
            throw new Error("haven`t element");
          } catch (s) {
            return { notify: t, amount: 0 };
          }
        },
      };
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
      var o = e(3347),
        l = e(5),
        s = !1,
        d = null,
        c = null,
        p = null,
        f = Object(l["a"])(i.a, o["a"], o["b"], s, d, c, p);
      t["default"] = f.exports;
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
    3348: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(3e3),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var o = e(3443),
        l = e(5),
        s = !1,
        d = null,
        c = null,
        p = null,
        f = Object(l["a"])(i.a, o["a"], o["b"], s, d, c, p);
      t["default"] = f.exports;
    },
    3364: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(3088),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var o = e(3632),
        l = e(5);
      function s(a) {
        e(3630);
      }
      var d = !1,
        c = s,
        p = "data-v-1e45aa1b",
        f = null,
        v = Object(l["a"])(i.a, o["a"], o["b"], d, c, p, f);
      t["default"] = v.exports;
    },
    3381: function (a, t, e) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      t.default = function (a, t) {
        void 0 === t && (t = null);
        let e = 2;
        const n = Number(a),
          i = n - Math.trunc(n),
          r = 0.01;
        return 0 === n || i < r
          ? Math.trunc(n) + ".00"
          : "BTC" === t
            ? ((e = 8), n.toFixed(e))
            : n.toFixed(e);
      };
    },
    3443: function (a, t, e) {
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
          return e("div", { staticClass: "search" }, [
            e("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: a.searchInput,
                  expression: "searchInput",
                },
              ],
              attrs: {
                placeholder: a.placeholder,
                type: "text",
                "data-test-id": "wallet_search_coin",
              },
              domProps: { value: a.searchInput },
              on: {
                input: function (t) {
                  t.target.composing || (a.searchInput = t.target.value);
                },
              },
            }),
            a._v(" "),
            a.searchInput
              ? e(
                  "span",
                  {
                    class: ["clear", a.noTopClear && "clear_noTop"],
                    attrs: { id: "search_clear" },
                    on: {
                      click: function (t) {
                        return a.$emit("update:modelValue", "");
                      },
                    },
                  },
                  [a._v("\n    ✕\n  ")],
                )
              : a._e(),
          ]);
        },
        i = [];
    },
    3630: function (a, t, e) {
      var n = e(3631);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var i = e(23).default;
      i("f4bac77a", n, !0, {});
    },
    3631: function (a, t, e) {
      ((t = a.exports = e(22)(!1)),
        t.push([
          a.i,
          "\n@keyframes spinner-data-v-1e45aa1b{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1e45aa1b{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1e45aa1b{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1e45aa1b{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1e45aa1b{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1e45aa1b{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1e45aa1b{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1e45aa1b{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1e45aa1b{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1e45aa1b{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1e45aa1b{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1e45aa1b]{color:#6b963b\n}\n.text-red[data-v-1e45aa1b]{color:#c03647\n}\n.text-gray[data-v-1e45aa1b]{color:#8290ad\n}\n.text-blue[data-v-1e45aa1b]{color:#00c2ff\n}\n.text-danger[data-v-1e45aa1b]{color:#8c4545\n}\n.text-title[data-v-1e45aa1b]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1e45aa1b]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1e45aa1b]{color:#f1b70b\n}\n.text-white[data-v-1e45aa1b]{color:#fff\n}\n.text-bigger[data-v-1e45aa1b]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1e45aa1b]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1e45aa1b]{font-size:14px\n}\n.text-middle-height[data-v-1e45aa1b]{line-height:24px\n}\n.text-small[data-v-1e45aa1b]{font-size:12px\n}\n.text-word-break[data-v-1e45aa1b]{word-break:break-all\n}\n.text-right[data-v-1e45aa1b]{text-align:right\n}\n.text-left[data-v-1e45aa1b]{text-align:left\n}\n.text-line-middle[data-v-1e45aa1b]{line-height:24px\n}\n.text-link[data-v-1e45aa1b],.text-link-underline[data-v-1e45aa1b]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1e45aa1b]:hover,.text-link-underline[data-v-1e45aa1b]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1e45aa1b]{text-decoration:underline\n}\n.text-center[data-v-1e45aa1b]{text-align:center\n}\n.text-pointer[data-v-1e45aa1b]{cursor:pointer\n}\n.gap-10[data-v-1e45aa1b]{gap:10px\n}\n.m-t-auto[data-v-1e45aa1b]{margin-top:auto\n}\n.m-t-4[data-v-1e45aa1b]{margin-top:4px\n}\n.m-t-5[data-v-1e45aa1b]{margin-top:5px\n}\n.m-t-8[data-v-1e45aa1b]{margin-top:10px\n}\n.m-t-10[data-v-1e45aa1b]{margin-top:10px\n}\n.m-t-13[data-v-1e45aa1b]{margin-top:10px\n}\n.m-t-15[data-v-1e45aa1b]{margin-top:15px\n}\n.m-t-16[data-v-1e45aa1b]{margin-top:16px\n}\n.m-t-20[data-v-1e45aa1b]{margin-top:20px\n}\n.m-t-24[data-v-1e45aa1b]{margin-top:24px\n}\n.m-t-25[data-v-1e45aa1b]{margin-top:25px\n}\n.m-t-26[data-v-1e45aa1b]{margin-top:26px\n}\n.m-t-30[data-v-1e45aa1b]{margin-top:30px\n}\n.m-t-35[data-v-1e45aa1b]{margin-top:35px\n}\n.m-t-40[data-v-1e45aa1b]{margin-top:40px\n}\n.m-t-45[data-v-1e45aa1b]{margin-top:45px\n}\n.m-t-50[data-v-1e45aa1b]{margin-top:50px\n}\n.m-t-60[data-v-1e45aa1b]{margin-top:60px\n}\n.m-t-65[data-v-1e45aa1b]{margin-top:65px\n}\n.m-t-80[data-v-1e45aa1b]{margin-top:80px\n}\n.m-l-5[data-v-1e45aa1b]{margin-left:5px\n}\n.m-l-10[data-v-1e45aa1b]{margin-left:10px\n}\n.m-l-15[data-v-1e45aa1b]{margin-left:15px\n}\n.m-l-20[data-v-1e45aa1b]{margin-left:20px\n}\n.m-l-25[data-v-1e45aa1b]{margin-left:25px\n}\n.m-l-30[data-v-1e45aa1b]{margin-left:30px\n}\n.m-l-35[data-v-1e45aa1b]{margin-left:35px\n}\n.m-r-5[data-v-1e45aa1b]{margin-right:5px\n}\n.m-r-10[data-v-1e45aa1b]{margin-right:10px\n}\n.m-r-15[data-v-1e45aa1b]{margin-right:15px\n}\n.m-r-30[data-v-1e45aa1b]{margin-right:30px\n}\n.m-b-5[data-v-1e45aa1b]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1e45aa1b]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1e45aa1b]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1e45aa1b]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1e45aa1b]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1e45aa1b]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1e45aa1b]{padding-top:40px\n}\n.p-t-85[data-v-1e45aa1b]{padding-top:85px !important\n}\n.hidden[data-v-1e45aa1b]{opacity:0 !important\n}\n.relative[data-v-1e45aa1b]{position:relative\n}\n.space-nowrap[data-v-1e45aa1b]{white-space:nowrap\n}\n.uppercase[data-v-1e45aa1b]{text-transform:uppercase\n}\n.lowercase[data-v-1e45aa1b]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1e45aa1b]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1e45aa1b]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1e45aa1b],.fade-leave-to[data-v-1e45aa1b]{opacity:0\n}\n.fade-down-enter-active[data-v-1e45aa1b],.fade-down-leave-active[data-v-1e45aa1b],.fade-down-move[data-v-1e45aa1b]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1e45aa1b],.fade-down-enter-active[data-v-1e45aa1b]{position:absolute !important\n}\n.fade-down-enter[data-v-1e45aa1b],.fade-down-leave-to[data-v-1e45aa1b]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1e45aa1b],.scale-leave-active[data-v-1e45aa1b],.scale-move[data-v-1e45aa1b]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1e45aa1b],.scale-leave-to[data-v-1e45aa1b]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1e45aa1b],.slide-leave-active[data-v-1e45aa1b]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1e45aa1b]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1e45aa1b]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1e45aa1b],.slide-leave-to[data-v-1e45aa1b]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1e45aa1b],.slide-leave[data-v-1e45aa1b]{margin-bottom:0px\n}\n.slide-enter[data-v-1e45aa1b],.slide-leave-to[data-v-1e45aa1b]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1e45aa1b],.slide-in-leave-active[data-v-1e45aa1b]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1e45aa1b]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1e45aa1b]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1e45aa1b]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1e45aa1b]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1e45aa1b],.page-fade-enter-active[data-v-1e45aa1b]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1e45aa1b],.page-fade-leave-to[data-v-1e45aa1b],.page-fade-enter[data-v-1e45aa1b]{opacity:0\n}\n.page-fade-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.fade-out-leave-active[data-v-1e45aa1b],.fade-out-enter-active[data-v-1e45aa1b]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1e45aa1b],.fade-out-leave-to[data-v-1e45aa1b],.fade-out-enter[data-v-1e45aa1b]{opacity:0\n}\n.fade-out-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.slide-down-enter-active[data-v-1e45aa1b],.slide-down-leave-active[data-v-1e45aa1b]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1e45aa1b],.slide-down-enter[data-v-1e45aa1b]{top:100%\n}\n.slide-down-leave[data-v-1e45aa1b],.slide-down-enter-to[data-v-1e45aa1b]{top:0%\n}\n.slide-out-enter-active[data-v-1e45aa1b],.slide-out-leave-active[data-v-1e45aa1b]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1e45aa1b],.exchange-result.slide-out-enter[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1e45aa1b],.exchange-pending.slide-out-enter[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1e45aa1b],.slide-left-leave-active[data-v-1e45aa1b]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1e45aa1b],.slide-right-leave-active[data-v-1e45aa1b]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1e45aa1b],.spin-down-leave-active[data-v-1e45aa1b]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1e45aa1b]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1e45aa1b]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1e45aa1b],.spin-up-leave-active[data-v-1e45aa1b]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1e45aa1b]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1e45aa1b]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1e45aa1b],.puff-out-leave-active[data-v-1e45aa1b]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1e45aa1b]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1e45aa1b]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1e45aa1b],.puff-out-enter-to[data-v-1e45aa1b]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1e45aa1b],.collapse-fade-enter-active[data-v-1e45aa1b]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1e45aa1b],.collapse-fade-leave-to[data-v-1e45aa1b],.collapse-fade-enter[data-v-1e45aa1b]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1e45aa1b],.lazy-fade-enter-active[data-v-1e45aa1b]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1e45aa1b],.lazy-fade-leave-to[data-v-1e45aa1b],.lazy-fade-enter[data-v-1e45aa1b]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.dropdown-wrap .atomic-notify-point__label-wrap[data-v-1e45aa1b]{position:absolute;right:-38px;top:0\n}\n.atomic-notify-point__wrap[data-v-1e45aa1b]{display:flex\n}\n.atomic-notify-point__slot[data-v-1e45aa1b]{display:flex\n}\n.atomic-notify-point--center[data-v-1e45aa1b]{align-items:center\n}\n.atomic-notify-point__label[data-v-1e45aa1b]{display:flex;justify-content:center;align-items:center;text-align:center;border-radius:100px;margin-top:-2px\n}\n.atomic-notify-point__label-wrap[data-v-1e45aa1b]{transition:transform linear .3s;transform:scale(0)\n}\n.atomic-notify-point__label-wrap--visible[data-v-1e45aa1b]{margin:2px 0 0 6px;transition:transform linear .3s;transform:scale(1)\n}\n.atomic-notify-point__label--new[data-v-1e45aa1b]{background:linear-gradient(76.77deg, #f6d365 0%, #fab975 100%)\n}\n.atomic-notify-point__label--hot[data-v-1e45aa1b]{background:#be3849;border-color:hsla(0,0%,100%,.12)\n}\n.atomic-notify-point__label--secondary[data-v-1e45aa1b]{background:#f5922f;border-color:hsla(0,0%,100%,.12);width:8px;height:8px;margin-top:1.25rem\n}\n.atomic-notify-point__label--secondary>span[data-v-1e45aa1b]{display:none\n}\n.atomic-notify-point__label>span[data-v-1e45aa1b]{font-size:10px;font-weight:400;color:#1f2843;text-transform:uppercase;padding:2px 8px 0px 8px;line-height:14px\n}",
          "",
        ]));
    },
    3632: function (a, t, e) {
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
            { staticClass: "atomic-notify-point", attrs: { uid: a.UID } },
            [
              e(
                "div",
                {
                  class: [
                    "atomic-notify-point__wrap",
                    { "atomic-notify-point--center": "new" === a.type },
                  ],
                },
                [
                  e(
                    "div",
                    { staticClass: "atomic-notify-point__slot" },
                    [
                      a._t("default"),
                      a._v(" "),
                      a.$scopedSlots["tag"] && !a.amount ? a._t("tag") : a._e(),
                    ],
                    2,
                  ),
                  a._v(" "),
                  a.amount
                    ? e(
                        "div",
                        {
                          ref: "notify",
                          class: [
                            "atomic-notify-point__label-wrap",
                            {
                              "atomic-notify-point__label-wrap--visible":
                                a.amount && "hidden" !== a.type,
                            },
                          ],
                          attrs: { id: a.UID },
                        },
                        [
                          e(
                            "div",
                            {
                              class: [
                                "atomic-notify-point__label atomic-notify-point__label--" +
                                  a.type,
                              ],
                            },
                            [
                              e("span", [
                                a._v(
                                  "\n          " + a._s(a.type) + "\n        ",
                                ),
                              ]),
                            ],
                          ),
                        ],
                      )
                    : a._e(),
                ],
              ),
            ],
          );
        },
        i = [];
    },
    5404: function (a, t, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(e(831)),
        r = n(e(232)),
        o = e(60),
        l = n(e(3189)),
        s = n(e(3348)),
        d = n(e(802)),
        c = n(e(3364)),
        p = n(e(798)),
        f = n(e(3381));
      const v = { ONT: "ONG", NEO: "GAS", VET: "VTHO", WINK: "WIN" },
        m = ["VET", "ALGO", "KMD", "NEO", "XTZ", "AWC-986"],
        u = { WIN: "WINK" },
        b = "new",
        g = 6e4,
        x = 6e4;
      t.default = {
        name: "StakingPage",
        components: {
          TableItems: l.default,
          Search: s.default,
          CoinIcon: d.default,
          StakingEmpty: () => e.e(218).then(e.bind(null, 11591)),
          StakingPopupTabs: () =>
            Promise.all([e.e(150), e.e(232), e.e(205)]).then(
              e.bind(null, 11593),
            ),
          AtomicNotifyPoint: c.default,
        },
        data: () => ({
          isStakingExchangePopup: !1,
          activeSortField: "",
          isSortASC: !1,
          updatedTable: Date.now(),
          updateTableIntervalID: null,
          updateNearBalancesIntervalID: null,
          activeStaking: null,
          searchInput: "",
        }),
        computed: {
          ...(0, o.mapGetters)([
            "fiatRate",
            "coinRate",
            "fiatCharacter",
            "stakingSettings",
            "isUpdatingFiat",
          ]),
          header() {
            return [
              { key: "name", slot: "header-row-1" },
              { title: this.$t("title.available"), key: "fiatBalance" },
              { title: this.$t("title.stacked"), key: "fiatStaked" },
              { title: this.$t("stakingPage.yearlyYield"), key: "reward" },
            ];
          },
          isEmptyScreen() {
            const a = this.stakingWallets.filter((a) => {
              let { balance: t } = a;
              return !!Number(t);
            });
            return !a.length;
          },
          stakingWallets() {
            return this.stakingSettings.map((a) => {
              let {
                id: t,
                ticker: e,
                name: n,
                reward: i,
                displayTicker: o,
                tags: l = [],
                isTRX2: s = !1,
                emptyTag: d = null,
                isDefaultBuyCrypto: c = !1,
                isCosmosLike: p = !1,
                contract: f,
              } = a;
              const v = this.$wallets.getWallet(t);
              let g = "0",
                x = "0",
                h = "0",
                y = "0";
              if (v) {
                try {
                  var w, k, _, S, C, I, B, z, N;
                  if (m.includes(e))
                    g = String(
                      null !==
                        (w =
                          null !==
                            (k =
                              null === (_ = v.balances) || void 0 === _
                                ? void 0
                                : _.available) && void 0 !== k
                            ? k
                            : null === v || void 0 === v
                              ? void 0
                              : v.divisibleBalance) && void 0 !== w
                        ? w
                        : 0,
                    );
                  else
                    g =
                      null !==
                        (S =
                          null !==
                            (C =
                              null !==
                                (I =
                                  null === (B = v.getAvailableBalance) ||
                                  void 0 === B
                                    ? void 0
                                    : B.call(v).toCurrency()) && void 0 !== I
                                ? I
                                : null === (z = v.balances) || void 0 === z
                                  ? void 0
                                  : z.available) && void 0 !== C
                            ? C
                            : null === (N = v.balances) || void 0 === N
                              ? void 0
                              : N.availableForStake) && void 0 !== S
                        ? S
                        : "0";
                } catch (V) {
                  (console.log(V), (g = "0"));
                }
                try {
                  var T, E, A, $, D, F, O, P, X, R, M, Y, W, j;
                  if ("SOL" === e)
                    h = v.toCurrencyUnit(
                      null === (T = v.balances) ||
                        void 0 === T ||
                        null === (E = T.staking) ||
                        void 0 === E
                        ? void 0
                        : E.reduce(
                            (a, t) =>
                              t.isAvailableForWithdraw || t.isDeactivated
                                ? a
                                : a.add(new v.BN(t.staked)),
                            new v.BN("0"),
                          ),
                    );
                  else if (m.includes(e)) h = g;
                  else if (
                    ((h =
                      null === (A = v.getStakedBalance) ||
                      void 0 === A ||
                      null === ($ = A.call(v)) ||
                      void 0 === $
                        ? void 0
                        : $.toCurrency()),
                    !h)
                  )
                    h =
                      null === v ||
                      void 0 === v ||
                      null === (D = v.toCurrencyUnit) ||
                      void 0 === D
                        ? void 0
                        : D.call(
                            v,
                            null !==
                              (F =
                                null !==
                                  (O =
                                    null !==
                                      (P =
                                        null !==
                                          (X =
                                            null === (R = v.balances) ||
                                            void 0 === R
                                              ? void 0
                                              : R.staked) && void 0 !== X
                                          ? X
                                          : null === (M = v.balances) ||
                                              void 0 === M ||
                                              null === (Y = M.staking) ||
                                              void 0 === Y
                                            ? void 0
                                            : Y.total) && void 0 !== P
                                      ? P
                                      : null === (W = v.balances) ||
                                          void 0 === W
                                        ? void 0
                                        : W.frozen) && void 0 !== O
                                  ? O
                                  : null === (j = v.balances) || void 0 === j
                                    ? void 0
                                    : j.total) && void 0 !== F
                              ? F
                              : "0",
                          );
                } catch (V) {
                  (console.log(V), (h = "0"));
                }
                const a = new r.default(this.coinRate(this.fiatRate, v).rate);
                ((x = a.multipliedBy(g)), (y = a.multipliedBy(h)));
              }
              const U = l.filter((a) => a !== b);
              return {
                tags: U,
                ticker: u[e] || e,
                updatedTable: this.updatedTable,
                walletInstance: v,
                id: t,
                name: n,
                reward: i,
                staked: h,
                isTRX2: s,
                balance: g,
                contract: f,
                emptyTag: d,
                fiatStaked: y,
                fiatBalance: x,
                isCosmosLike: p,
                displayTicker: o,
                isDefaultBuyCrypto: c,
              };
            });
          },
          tableItems() {
            const a = this.stakingWallets.filter((a) => {
              let { ticker: t, name: e } = a;
              return (
                !this.searchInput ||
                [t, e].some((a) =>
                  a.toLowerCase().startsWith(this.searchInput.toLowerCase()),
                )
              );
            });
            return this.activeSortField
              ? this.isSortASC
                ? (0, i.default)(a).asc((a) => +a[this.activeSortField])
                : (0, i.default)(a).desc((a) => +a[this.activeSortField])
              : a;
          },
        },
        async created() {
          ((this.updateTableIntervalID = setInterval(() => {
            this.updatedTable = Date.now();
          }, g)),
            this.stakingSettings.find((a) => {
              let { ticker: t } = a;
              return "NEAR" === t;
            }) &&
              (await this.getNearBalances(),
              (this.updateNearBalancesIntervalID = setInterval(async () => {
                await this.getNearBalances();
              }, x)),
              this.$bus.$on("get-near-balances", this.getNearBalances)));
        },
        beforeDestroy() {
          (clearInterval(this.updateTableIntervalID),
            clearInterval(this.updateNearBalancesIntervalID),
            this.$bus.$off("get-near-balances", this.getNearBalances));
        },
        beforeRouteEnter(a, t, e) {
          e((a) => {
            if (a.$route.params.ticker) {
              const t = a.tableItems.find(
                (t) =>
                  [a.$route.params.ticker.toUpperCase(), v[t.ticker]].some(
                    (a) => t.ticker === a,
                  ) || t.id === a.$route.params.ticker,
              );
              a.openExchangePopup(t);
            }
          });
        },
        methods: {
          formatFinance: p.default,
          formatFiatV2: f.default,
          async getNearBalances() {
            const a = this.$wallets.getWallet("NEAR");
            if (a)
              try {
                var t;
                await (null === (t = a.getStakingInfo) || void 0 === t
                  ? void 0
                  : t.call(a));
              } catch (e) {
                console.error(e);
              }
          },
          handleClick(a) {
            (this.$store.commit("ADD_COMPLETED_REASON", "staking-" + a.ticker),
              this.openExchangePopup(a));
          },
          openExchangePopup(a) {
            this.activeStaking = a;
          },
          closeExchangePopup() {
            this.activeStaking = null;
          },
          sortByField(a) {
            this.activeSortField === a
              ? (this.isSortASC = !this.isSortASC)
              : ((this.activeSortField = a), (this.isSortASC = !0));
          },
        },
      };
    },
    8894: function (a, t, e) {
      var n = e(8895);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var i = e(23).default;
      i("0e5f6472", n, !0, {});
    },
    8895: function (a, t, e) {
      ((t = a.exports = e(22)(!1)),
        t.push([
          a.i,
          '\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.staking{height:100%;background:#1f2843\n}\n.staking .title{font-size:24px;line-height:28px;text-align:center;color:#fff;padding:10px 30px 0 30px\n}\n.staking .table{height:max-content\n}\n.staking .table .header .table-row{padding:13px\n}\n.staking .table .table-row{justify-content:space-between;min-height:64px;background:#28314c\n}\n.staking .table .item:nth-child(1){min-width:240px;display:flex;align-items:center\n}\n.staking .table .item:nth-child(2){min-width:180px;text-align:right\n}\n.staking .table .item:nth-child(3){min-width:180px;text-align:right\n}\n.staking .table .item:nth-child(4){min-width:110px;text-align:right;padding-right:10px\n}\n.staking .table .no-result{text-align:center;position:absolute;left:50%;top:calc(50% + 45px);transform:translate(-50%, calc(-50% - 45px))\n}\n.staking .table .no-result>div{position:relative;display:block\n}\n.staking .table .no-result>div svg{fill:#1f9eff\n}\n.staking .table .no-result>div::before,.staking .table .no-result>div::after{content:"";background-color:#1f9eff;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);opacity:.16;border-radius:50%;z-index:3\n}\n.staking .table .no-result>div::before{width:80px;height:80px\n}\n.staking .table .no-result>div::after{width:50px;height:50px\n}\n.staking .table .no-result>h3{margin-bottom:6px;margin-top:40px\n}',
          "",
        ]));
    },
    8896: function (a, t, e) {
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
          return n(
            "main",
            {
              staticClass: "staking scroll-list2",
              attrs: { "data-test-id": "coin_staking_info" },
            },
            [
              a.activeStaking
                ? n("staking-popup-tabs", {
                    attrs: { staking: a.activeStaking },
                    on: { closePopup: a.closeExchangePopup },
                  })
                : a.isEmptyScreen
                  ? n("staking-empty", {
                      attrs: { items: a.tableItems },
                      on: { openStakingPopup: a.openExchangePopup },
                    })
                  : [
                      n("search", {
                        staticClass: "table-search-fix",
                        attrs: { "model-value": a.searchInput },
                        on: {
                          "update:modelValue": function (t) {
                            a.searchInput = t;
                          },
                        },
                      }),
                      a._v(" "),
                      n(
                        "table-items",
                        {
                          attrs: {
                            "active-sort-field": a.activeSortField,
                            header: a.header,
                            "is-sort-a-s-c": a.isSortASC,
                            "is-empty": !1,
                            items: a.tableItems,
                            "is-sortable": "",
                          },
                          on: { sortByField: a.sortByField },
                        },
                        [
                          !a.tableItems.length && a.searchInput
                            ? n(
                                "div",
                                {
                                  staticClass: "no-result",
                                  attrs: { slot: "empty" },
                                  slot: "empty",
                                },
                                [
                                  n("div", [
                                    n("img", {
                                      staticClass: "icon-search",
                                      attrs: {
                                        src: e(401),
                                        width: "24",
                                        height: "24",
                                      },
                                    }),
                                  ]),
                                  a._v(" "),
                                  n("h3", { staticClass: "new-text-large" }, [
                                    a._v(
                                      a._s(a.$t("stakingPage.noItemsFound")),
                                    ),
                                  ]),
                                  a._v(" "),
                                  n(
                                    "p",
                                    {
                                      staticClass:
                                        "new-text-medium2 new-text-gray",
                                    },
                                    [
                                      a._v(
                                        a._s(
                                          a.$t(
                                            "stakingPage.tryDifferentKeyword",
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ],
                              )
                            : a._e(),
                          a._v(" "),
                          a._l(a.tableItems, function (t, e) {
                            return n(
                              "div",
                              {
                                key: t.ticker + "-" + e,
                                staticClass:
                                  "table-row with-hover flex-wrap center",
                                attrs: { slot: "table-rows" },
                                on: {
                                  click: function (e) {
                                    return a.handleClick(t);
                                  },
                                },
                                slot: "table-rows",
                              },
                              [
                                n("div", { staticClass: "item" }, [
                                  n(
                                    "div",
                                    { staticClass: "flex-wrap center" },
                                    [
                                      n("coin-icon", {
                                        attrs: { wallet: t.walletInstance },
                                      }),
                                      a._v(" "),
                                      n("div", { staticClass: "m-l-10 info" }, [
                                        n(
                                          "div",
                                          [
                                            n(
                                              "atomic-notify-point",
                                              {
                                                attrs: {
                                                  UID:
                                                    "staking-table-ticker-" +
                                                    t.ticker,
                                                },
                                              },
                                              [
                                                n(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "new-title-medium",
                                                  },
                                                  [
                                                    a._v(
                                                      "\n                    " +
                                                        a._s(t.name) +
                                                        "\n                  ",
                                                    ),
                                                  ],
                                                ),
                                                a._v(" "),
                                                a._l(t.tags, function (t) {
                                                  return n(
                                                    "div",
                                                    {
                                                      key: t,
                                                      staticClass:
                                                        "tag tag--staking",
                                                    },
                                                    [
                                                      n(
                                                        "div",
                                                        {
                                                          class:
                                                            "--" +
                                                            t +
                                                            " new-text-medium2",
                                                        },
                                                        [
                                                          a._v(
                                                            "\n                      " +
                                                              a._s(t) +
                                                              "\n                    ",
                                                          ),
                                                        ],
                                                      ),
                                                    ],
                                                  );
                                                }),
                                              ],
                                              2,
                                            ),
                                          ],
                                          1,
                                        ),
                                        a._v(" "),
                                        n(
                                          "div",
                                          {
                                            staticClass:
                                              "new-text-gray2 new-text-small",
                                          },
                                          [
                                            a._v(
                                              "\n                " +
                                                a._s(t.displayTicker) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                      ]),
                                    ],
                                    1,
                                  ),
                                ]),
                                a._v(" "),
                                n(
                                  "div",
                                  { staticClass: "item new-text-medium2" },
                                  [
                                    n("span", {
                                      directives: [
                                        {
                                          name: "text-html",
                                          rawName: "v-text-html",
                                          value: a.fiatCharacter,
                                          expression: "fiatCharacter",
                                        },
                                      ],
                                      staticClass: "new-text-medium2",
                                    }),
                                    a._v(
                                      a._s(
                                        a.formatFiatV2(
                                          t.fiatBalance,
                                          a.fiatRate,
                                        ),
                                      ) + "\n        ",
                                    ),
                                  ],
                                ),
                                a._v(" "),
                                n(
                                  "div",
                                  { staticClass: "item new-text-medium2" },
                                  [
                                    n("span", {
                                      directives: [
                                        {
                                          name: "text-html",
                                          rawName: "v-text-html",
                                          value: a.fiatCharacter,
                                          expression: "fiatCharacter",
                                        },
                                      ],
                                      staticClass: "new-text-medium2",
                                    }),
                                    a._v(
                                      a._s(a.formatFinance(t.fiatStaked, 2)) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                                a._v(" "),
                                n(
                                  "div",
                                  { staticClass: "item new-text-medium2" },
                                  [
                                    a._v(
                                      "\n          " +
                                        a._s(t.reward ? t.reward + "%" : "") +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                              ],
                            );
                          }),
                        ],
                        2,
                      ),
                    ],
            ],
            2,
          );
        },
        i = [];
    },
    932: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(5404),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var o = e(8896),
        l = e(5);
      function s(a) {
        e(8894);
      }
      var d = !1,
        c = s,
        p = null,
        f = null,
        v = Object(l["a"])(i.a, o["a"], o["b"], d, c, p, f);
      t["default"] = v.exports;
    },
  },
]);
