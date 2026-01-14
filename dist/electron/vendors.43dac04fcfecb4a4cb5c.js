(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [42],
  {
    2958: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      const n = "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png";
      e.default = {
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
    2959: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
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
    2999: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2958),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var o = a(3346),
        s = a(5);
      function l(t) {
        a(3343);
      }
      var c = !1,
        d = l,
        u = "data-v-1dc165ba",
        f = null,
        p = Object(s["a"])(r.a, o["a"], o["b"], c, d, u, f);
      e["default"] = p.exports;
    },
    3088: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(84),
        r = a(392);
      const i = 1500;
      function o(t) {
        const e = (0, n.ref)(0),
          a = (0, r.useStore)(),
          i = null === t || void 0 === t ? void 0 : t.map((t) => t.reasons),
          o = () => {
            var t;
            e.value =
              (null === i ||
              void 0 === i ||
              null ===
                (t = i.filter(
                  (t) => !a.getters.getCompletedNotifyReasons.includes(t),
                )) ||
              void 0 === t
                ? void 0
                : t.length) || 0;
          };
        return (
          o(),
          (0, n.watch)(() => a.getters.getCompletedNotifyReasons.length, o),
          e
        );
      }
      function s(t, e, a) {
        const o = (0, r.useStore)(),
          s = { threshold: 1 },
          l = function (e) {
            e.forEach((e) => {
              if (1 === e.intersectionRatio) {
                const e = a.map((t) => t.reasons).includes(t),
                  n = o.getters.getCompletedNotifyReasons;
                c(n).length > 0 &&
                  e &&
                  setTimeout(() => {
                    n.includes(t) ||
                      (o.commit("ADD_COMPLETED_REASON", t),
                      o.dispatch("setCompletedReason"));
                  }, i);
              }
            });
          };
        function c(t) {
          const e = t;
          return Array.isArray(e)
            ? a.reduce(
                (t, a) => (!1 === e.includes(a.reasons) ? [...t, a] : t),
                [],
              )
            : [];
        }
        const d = (0, n.ref)(new IntersectionObserver(l, s));
        ((0, n.onMounted)(() => {
          try {
            var t;
            null === d ||
              void 0 === d ||
              null === (t = d.value) ||
              void 0 === t ||
              t.observe(e.value);
          } catch (a) {}
        }),
          (0, n.onUnmounted)(() => {
            try {
              var t;
              null === d ||
                void 0 === d ||
                null === (t = d.value) ||
                void 0 === t ||
                t.unobserve(e.value);
            } catch (a) {}
          }));
      }
      e.default = {
        name: "AtomicNotifyPoint",
        props: {
          UID: { type: String, required: !0 },
          type: { type: String, default: "new" },
        },
        setup(t) {
          const e = (0, n.ref)(null),
            a = (0, r.useStore)();
          try {
            var i;
            const n =
              null === (i = a.getters.notifyTree) || void 0 === i
                ? void 0
                : i[t.UID];
            if (n) {
              const a = o(n);
              return (s(t.UID, e, n), { notify: e, amount: a });
            }
            throw new Error("haven`t element");
          } catch (l) {
            return { notify: e, amount: 0 };
          }
        },
      };
    },
    3188: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.STARTING =
          e.STARTED =
          e.SCHEDULED =
          e.RUNNING =
          e.ENDING =
          e.ENDED =
          e.CREATED =
            void 0),
        (e.default = h),
        (e.get = b),
        (e.init = v),
        (e.set = m));
      var n = a(3918),
        r = a(4725),
        i = (0, n.dispatch)("start", "end", "cancel", "interrupt"),
        o = [],
        s = (e.CREATED = 0),
        l = (e.SCHEDULED = 1),
        c = (e.STARTING = 2),
        d = (e.STARTED = 3),
        u = (e.RUNNING = 4),
        f = (e.ENDING = 5),
        p = (e.ENDED = 6);
      function h(t, e, a, n, r, l) {
        var c = t.__transition;
        if (c) {
          if (a in c) return;
        } else t.__transition = {};
        y(t, a, {
          name: e,
          index: n,
          group: r,
          on: i,
          tween: o,
          time: l.time,
          delay: l.delay,
          duration: l.duration,
          ease: l.ease,
          timer: null,
          state: s,
        });
      }
      function v(t, e) {
        var a = b(t, e);
        if (a.state > s) throw new Error("too late; already scheduled");
        return a;
      }
      function m(t, e) {
        var a = b(t, e);
        if (a.state > d) throw new Error("too late; already running");
        return a;
      }
      function b(t, e) {
        var a = t.__transition;
        if (!a || !(a = a[e])) throw new Error("transition not found");
        return a;
      }
      function y(t, e, a) {
        var n,
          i = t.__transition;
        function o(t) {
          ((a.state = l),
            a.timer.restart(s, a.delay, a.time),
            a.delay <= t && s(t - a.delay));
        }
        function s(o) {
          var f, m, b, y;
          if (a.state !== l) return v();
          for (f in i)
            if (((y = i[f]), y.name === a.name)) {
              if (y.state === d) return (0, r.timeout)(s);
              y.state === u
                ? ((y.state = p),
                  y.timer.stop(),
                  y.on.call("interrupt", t, t.__data__, y.index, y.group),
                  delete i[f])
                : +f < e &&
                  ((y.state = p),
                  y.timer.stop(),
                  y.on.call("cancel", t, t.__data__, y.index, y.group),
                  delete i[f]);
            }
          if (
            ((0, r.timeout)(function () {
              a.state === d &&
                ((a.state = u), a.timer.restart(h, a.delay, a.time), h(o));
            }),
            (a.state = c),
            a.on.call("start", t, t.__data__, a.index, a.group),
            a.state === c)
          ) {
            for (
              a.state = d, n = new Array((b = a.tween.length)), f = 0, m = -1;
              f < b;
              ++f
            )
              (y = a.tween[f].value.call(t, t.__data__, a.index, a.group)) &&
                (n[++m] = y);
            n.length = m + 1;
          }
        }
        function h(e) {
          var r =
              e < a.duration
                ? a.ease.call(null, e / a.duration)
                : (a.timer.restart(v), (a.state = f), 1),
            i = -1,
            o = n.length;
          while (++i < o) n[i].call(t, r);
          a.state === f &&
            (a.on.call("end", t, t.__data__, a.index, a.group), v());
        }
        function v() {
          for (var n in ((a.state = p), a.timer.stop(), delete i[e], i)) return;
          delete t.__transition;
        }
        ((i[e] = a), (a.timer = (0, r.timer)(o, 0, a.time)));
      }
    },
    3189: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(2959),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var o = a(3347),
        s = a(5),
        l = !1,
        c = null,
        d = null,
        u = null,
        f = Object(s["a"])(r.a, o["a"], o["b"], l, c, d, u);
      e["default"] = f.exports;
    },
    3343: function (t, e, a) {
      var n = a(3344);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = a(23).default;
      r("c4d8a054", n, !0, {});
    },
    3344: function (t, e, a) {
      e = t.exports = a(22)(!1);
      var n = a(385),
        r = n(a(3345));
      e.push([
        t.i,
        "\n@keyframes spinner-data-v-1dc165ba{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1dc165ba{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1dc165ba{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1dc165ba{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1dc165ba{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1dc165ba{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1dc165ba{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1dc165ba]{color:#6b963b\n}\n.text-red[data-v-1dc165ba]{color:#c03647\n}\n.text-gray[data-v-1dc165ba]{color:#8290ad\n}\n.text-blue[data-v-1dc165ba]{color:#00c2ff\n}\n.text-danger[data-v-1dc165ba]{color:#8c4545\n}\n.text-title[data-v-1dc165ba]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1dc165ba]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1dc165ba]{color:#f1b70b\n}\n.text-white[data-v-1dc165ba]{color:#fff\n}\n.text-bigger[data-v-1dc165ba]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1dc165ba]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1dc165ba]{font-size:14px\n}\n.text-middle-height[data-v-1dc165ba]{line-height:24px\n}\n.text-small[data-v-1dc165ba]{font-size:12px\n}\n.text-word-break[data-v-1dc165ba]{word-break:break-all\n}\n.text-right[data-v-1dc165ba]{text-align:right\n}\n.text-left[data-v-1dc165ba]{text-align:left\n}\n.text-line-middle[data-v-1dc165ba]{line-height:24px\n}\n.text-link[data-v-1dc165ba],.text-link-underline[data-v-1dc165ba]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1dc165ba]:hover,.text-link-underline[data-v-1dc165ba]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1dc165ba]{text-decoration:underline\n}\n.text-center[data-v-1dc165ba]{text-align:center\n}\n.text-pointer[data-v-1dc165ba]{cursor:pointer\n}\n.gap-10[data-v-1dc165ba]{gap:10px\n}\n.m-t-auto[data-v-1dc165ba]{margin-top:auto\n}\n.m-t-4[data-v-1dc165ba]{margin-top:4px\n}\n.m-t-5[data-v-1dc165ba]{margin-top:5px\n}\n.m-t-8[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-10[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-13[data-v-1dc165ba]{margin-top:10px\n}\n.m-t-15[data-v-1dc165ba]{margin-top:15px\n}\n.m-t-16[data-v-1dc165ba]{margin-top:16px\n}\n.m-t-20[data-v-1dc165ba]{margin-top:20px\n}\n.m-t-24[data-v-1dc165ba]{margin-top:24px\n}\n.m-t-25[data-v-1dc165ba]{margin-top:25px\n}\n.m-t-26[data-v-1dc165ba]{margin-top:26px\n}\n.m-t-30[data-v-1dc165ba]{margin-top:30px\n}\n.m-t-35[data-v-1dc165ba]{margin-top:35px\n}\n.m-t-40[data-v-1dc165ba]{margin-top:40px\n}\n.m-t-45[data-v-1dc165ba]{margin-top:45px\n}\n.m-t-50[data-v-1dc165ba]{margin-top:50px\n}\n.m-t-60[data-v-1dc165ba]{margin-top:60px\n}\n.m-t-65[data-v-1dc165ba]{margin-top:65px\n}\n.m-t-80[data-v-1dc165ba]{margin-top:80px\n}\n.m-l-5[data-v-1dc165ba]{margin-left:5px\n}\n.m-l-10[data-v-1dc165ba]{margin-left:10px\n}\n.m-l-15[data-v-1dc165ba]{margin-left:15px\n}\n.m-l-20[data-v-1dc165ba]{margin-left:20px\n}\n.m-l-25[data-v-1dc165ba]{margin-left:25px\n}\n.m-l-30[data-v-1dc165ba]{margin-left:30px\n}\n.m-l-35[data-v-1dc165ba]{margin-left:35px\n}\n.m-r-5[data-v-1dc165ba]{margin-right:5px\n}\n.m-r-10[data-v-1dc165ba]{margin-right:10px\n}\n.m-r-15[data-v-1dc165ba]{margin-right:15px\n}\n.m-r-30[data-v-1dc165ba]{margin-right:30px\n}\n.m-b-5[data-v-1dc165ba]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1dc165ba]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1dc165ba]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1dc165ba]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1dc165ba]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1dc165ba]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1dc165ba]{padding-top:40px\n}\n.p-t-85[data-v-1dc165ba]{padding-top:85px !important\n}\n.hidden[data-v-1dc165ba]{opacity:0 !important\n}\n.relative[data-v-1dc165ba]{position:relative\n}\n.space-nowrap[data-v-1dc165ba]{white-space:nowrap\n}\n.uppercase[data-v-1dc165ba]{text-transform:uppercase\n}\n.lowercase[data-v-1dc165ba]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1dc165ba]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1dc165ba],.fade-leave-to[data-v-1dc165ba]{opacity:0\n}\n.fade-down-enter-active[data-v-1dc165ba],.fade-down-leave-active[data-v-1dc165ba],.fade-down-move[data-v-1dc165ba]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1dc165ba],.fade-down-enter-active[data-v-1dc165ba]{position:absolute !important\n}\n.fade-down-enter[data-v-1dc165ba],.fade-down-leave-to[data-v-1dc165ba]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1dc165ba],.scale-leave-active[data-v-1dc165ba],.scale-move[data-v-1dc165ba]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1dc165ba],.scale-leave-to[data-v-1dc165ba]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1dc165ba],.slide-leave-active[data-v-1dc165ba]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1dc165ba]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1dc165ba]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1dc165ba],.slide-leave[data-v-1dc165ba]{margin-bottom:0px\n}\n.slide-enter[data-v-1dc165ba],.slide-leave-to[data-v-1dc165ba]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1dc165ba],.slide-in-leave-active[data-v-1dc165ba]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1dc165ba]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1dc165ba]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1dc165ba]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1dc165ba],.page-fade-enter-active[data-v-1dc165ba]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1dc165ba],.page-fade-leave-to[data-v-1dc165ba],.page-fade-enter[data-v-1dc165ba]{opacity:0\n}\n.page-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.fade-out-leave-active[data-v-1dc165ba],.fade-out-enter-active[data-v-1dc165ba]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1dc165ba],.fade-out-leave-to[data-v-1dc165ba],.fade-out-enter[data-v-1dc165ba]{opacity:0\n}\n.fade-out-enter-to[data-v-1dc165ba]{opacity:1\n}\n.slide-down-enter-active[data-v-1dc165ba],.slide-down-leave-active[data-v-1dc165ba]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1dc165ba],.slide-down-enter[data-v-1dc165ba]{top:100%\n}\n.slide-down-leave[data-v-1dc165ba],.slide-down-enter-to[data-v-1dc165ba]{top:0%\n}\n.slide-out-enter-active[data-v-1dc165ba],.slide-out-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1dc165ba],.exchange-result.slide-out-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1dc165ba],.exchange-pending.slide-out-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1dc165ba],.slide-left-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1dc165ba],.slide-right-leave-active[data-v-1dc165ba]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1dc165ba]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1dc165ba]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1dc165ba]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1dc165ba],.spin-down-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1dc165ba],.spin-up-leave-active[data-v-1dc165ba]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1dc165ba]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1dc165ba]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1dc165ba]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1dc165ba],.puff-out-leave-active[data-v-1dc165ba]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1dc165ba]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1dc165ba]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1dc165ba],.puff-out-enter-to[data-v-1dc165ba]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1dc165ba],.collapse-fade-enter-active[data-v-1dc165ba]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1dc165ba],.collapse-fade-leave-to[data-v-1dc165ba],.collapse-fade-enter[data-v-1dc165ba]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1dc165ba],.lazy-fade-enter-active[data-v-1dc165ba]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1dc165ba],.lazy-fade-leave-to[data-v-1dc165ba],.lazy-fade-enter[data-v-1dc165ba]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1dc165ba]{opacity:1\n}\n.image-with-placeholder[data-v-1dc165ba]{position:relative;width:100%;height:100%;background-size:cover;border-radius:999px;background-position:center;background-image:url(" +
          r +
          ")\n}\n.image-with-placeholder img[data-v-1dc165ba]{opacity:0;width:100%;height:100%;object-fit:cover;border-radius:999px;transition:opacity .1s ease\n}\n.image-with-placeholder img.loaded[data-v-1dc165ba]{opacity:1\n}",
        "",
      ]);
    },
    3345: function (t, e, a) {
      t.exports = a.p + "imgs/skeleton--static.png";
    },
    3346: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "image-with-placeholder" },
            [
              a("sanitized-img", {
                class: { loaded: t.isLoaded },
                attrs: { src: t.formattedSrc },
                on: {
                  load: function (e) {
                    t.isLoaded = !0;
                  },
                  error: function (e) {
                    t.isError = !0;
                  },
                },
              }),
            ],
            1,
          );
        },
        r = [];
    },
    3347: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "table table-new" }, [
            !t.isEmpty && t.header && t.header.length > 0
              ? a(
                  "div",
                  {
                    staticClass: "header header-new",
                    class: { border: t.isHeaderBorder },
                    attrs: { "data-test-id": "wallet_" },
                  },
                  [
                    a(
                      "div",
                      {
                        staticClass: "table-row table-heading flex-wrap center",
                        class: { "space-between": t.spaceBetween },
                      },
                      [
                        t._l(t.header, function (e, n) {
                          return a(
                            "div",
                            {
                              key: "header-" + n + "-" + Math.random(),
                              staticClass: "item",
                            },
                            [
                              e.slot
                                ? t._t(e.slot)
                                : a(
                                    "div",
                                    {
                                      class: {
                                        "sort-active":
                                          t.activeSortField === e.key,
                                        "sort-enable":
                                          t.isSortable &&
                                          !t.excludedFields.includes(e.key),
                                      },
                                      on: {
                                        click: function (a) {
                                          t.isSortable &&
                                            t.$emit("sortByField", e.key);
                                        },
                                      },
                                    },
                                    [
                                      t.isSortable
                                        ? a(
                                            "svg",
                                            {
                                              staticClass: "sort-arrow",
                                              class: { asc: t.isSortASC },
                                              attrs: { viewBox: "0 0 24 24" },
                                            },
                                            [
                                              a("path", {
                                                attrs: {
                                                  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
                                                  fill: "#fff",
                                                  stroke: "#fff",
                                                },
                                              }),
                                            ],
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      e.title
                                        ? a(
                                            "span",
                                            {
                                              class: [
                                                "text-middle",
                                                e.key,
                                                {
                                                  "text-gray":
                                                    t.activeSortField !== e.key,
                                                },
                                              ],
                                              attrs: {
                                                "data-test-id":
                                                  "wallet_sort_" + e.key,
                                              },
                                            },
                                            [t._v(t._s(e.title))],
                                          )
                                        : t._e(),
                                    ],
                                  ),
                            ],
                            2,
                          );
                        }),
                        t._v(" "),
                        t.isMain ? a("div", { staticClass: "item" }) : t._e(),
                      ],
                      2,
                    ),
                  ],
                )
              : t._e(),
            t._v(" "),
            a(
              "div",
              { staticClass: "main" },
              [
                t._t("empty", function () {
                  return [
                    !t.items.length && t.filter.length
                      ? a("div", { staticClass: "empty" }, [
                          t._v(
                            "\n        " + t._s(t.noResultText) + "\n      ",
                          ),
                        ])
                      : t._e(),
                  ];
                }),
                t._v(" "),
                t.$scopedSlots["table-rows"] ? t._t("table-rows") : t._e(),
              ],
              2,
            ),
          ]);
        },
        r = [];
    },
    3364: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(3088),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var o = a(3632),
        s = a(5);
      function l(t) {
        a(3630);
      }
      var c = !1,
        d = l,
        u = "data-v-1e45aa1b",
        f = null,
        p = Object(s["a"])(r.a, o["a"], o["b"], c, d, u, f);
      e["default"] = p.exports;
    },
    3592: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Transition = C),
        (e.default = P),
        (e.newId = j));
      var r = a(3066),
        i = n(a(8531)),
        o = n(a(8532)),
        s = n(a(8533)),
        l = n(a(8534)),
        c = n(a(8535)),
        d = n(a(8536)),
        u = n(a(8537)),
        f = n(a(8538)),
        p = n(a(8539)),
        h = n(a(8540)),
        v = n(a(8541)),
        m = n(a(8542)),
        b = n(a(8543)),
        y = n(a(8544)),
        g = n(a(8545)),
        _ = n(a(8546)),
        x = n(a(8547)),
        w = n(a(4726)),
        k = n(a(8548)),
        O = 0;
      function C(t, e, a, n) {
        ((this._groups = t),
          (this._parents = e),
          (this._name = a),
          (this._id = n));
      }
      function P(t) {
        return (0, r.selection)().transition(t);
      }
      function j() {
        return ++O;
      }
      var M = r.selection.prototype;
      C.prototype = P.prototype = {
        constructor: C,
        select: h.default,
        selectAll: v.default,
        filter: d.default,
        merge: u.default,
        selection: m.default,
        transition: x.default,
        call: M.call,
        nodes: M.nodes,
        node: M.node,
        size: M.size,
        empty: M.empty,
        each: M.each,
        on: f.default,
        attr: i.default,
        attrTween: o.default,
        style: b.default,
        styleTween: y.default,
        text: g.default,
        textTween: _.default,
        remove: p.default,
        tween: w.default,
        delay: s.default,
        duration: l.default,
        ease: c.default,
        end: k.default,
      };
    },
    3630: function (t, e, a) {
      var n = a(3631);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var r = a(23).default;
      r("f4bac77a", n, !0, {});
    },
    3631: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-1e45aa1b{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-1e45aa1b{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-1e45aa1b{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-1e45aa1b{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-1e45aa1b{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-1e45aa1b{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-1e45aa1b{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-1e45aa1b{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-1e45aa1b{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-1e45aa1b{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-1e45aa1b{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-1e45aa1b]{color:#6b963b\n}\n.text-red[data-v-1e45aa1b]{color:#c03647\n}\n.text-gray[data-v-1e45aa1b]{color:#8290ad\n}\n.text-blue[data-v-1e45aa1b]{color:#00c2ff\n}\n.text-danger[data-v-1e45aa1b]{color:#8c4545\n}\n.text-title[data-v-1e45aa1b]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-1e45aa1b]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-1e45aa1b]{color:#f1b70b\n}\n.text-white[data-v-1e45aa1b]{color:#fff\n}\n.text-bigger[data-v-1e45aa1b]{font-size:18px;font-weight:500\n}\n.text-big[data-v-1e45aa1b]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-1e45aa1b]{font-size:14px\n}\n.text-middle-height[data-v-1e45aa1b]{line-height:24px\n}\n.text-small[data-v-1e45aa1b]{font-size:12px\n}\n.text-word-break[data-v-1e45aa1b]{word-break:break-all\n}\n.text-right[data-v-1e45aa1b]{text-align:right\n}\n.text-left[data-v-1e45aa1b]{text-align:left\n}\n.text-line-middle[data-v-1e45aa1b]{line-height:24px\n}\n.text-link[data-v-1e45aa1b],.text-link-underline[data-v-1e45aa1b]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-1e45aa1b]:hover,.text-link-underline[data-v-1e45aa1b]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-1e45aa1b]{text-decoration:underline\n}\n.text-center[data-v-1e45aa1b]{text-align:center\n}\n.text-pointer[data-v-1e45aa1b]{cursor:pointer\n}\n.gap-10[data-v-1e45aa1b]{gap:10px\n}\n.m-t-auto[data-v-1e45aa1b]{margin-top:auto\n}\n.m-t-4[data-v-1e45aa1b]{margin-top:4px\n}\n.m-t-5[data-v-1e45aa1b]{margin-top:5px\n}\n.m-t-8[data-v-1e45aa1b]{margin-top:10px\n}\n.m-t-10[data-v-1e45aa1b]{margin-top:10px\n}\n.m-t-13[data-v-1e45aa1b]{margin-top:10px\n}\n.m-t-15[data-v-1e45aa1b]{margin-top:15px\n}\n.m-t-16[data-v-1e45aa1b]{margin-top:16px\n}\n.m-t-20[data-v-1e45aa1b]{margin-top:20px\n}\n.m-t-24[data-v-1e45aa1b]{margin-top:24px\n}\n.m-t-25[data-v-1e45aa1b]{margin-top:25px\n}\n.m-t-26[data-v-1e45aa1b]{margin-top:26px\n}\n.m-t-30[data-v-1e45aa1b]{margin-top:30px\n}\n.m-t-35[data-v-1e45aa1b]{margin-top:35px\n}\n.m-t-40[data-v-1e45aa1b]{margin-top:40px\n}\n.m-t-45[data-v-1e45aa1b]{margin-top:45px\n}\n.m-t-50[data-v-1e45aa1b]{margin-top:50px\n}\n.m-t-60[data-v-1e45aa1b]{margin-top:60px\n}\n.m-t-65[data-v-1e45aa1b]{margin-top:65px\n}\n.m-t-80[data-v-1e45aa1b]{margin-top:80px\n}\n.m-l-5[data-v-1e45aa1b]{margin-left:5px\n}\n.m-l-10[data-v-1e45aa1b]{margin-left:10px\n}\n.m-l-15[data-v-1e45aa1b]{margin-left:15px\n}\n.m-l-20[data-v-1e45aa1b]{margin-left:20px\n}\n.m-l-25[data-v-1e45aa1b]{margin-left:25px\n}\n.m-l-30[data-v-1e45aa1b]{margin-left:30px\n}\n.m-l-35[data-v-1e45aa1b]{margin-left:35px\n}\n.m-r-5[data-v-1e45aa1b]{margin-right:5px\n}\n.m-r-10[data-v-1e45aa1b]{margin-right:10px\n}\n.m-r-15[data-v-1e45aa1b]{margin-right:15px\n}\n.m-r-30[data-v-1e45aa1b]{margin-right:30px\n}\n.m-b-5[data-v-1e45aa1b]{margin-bottom:5px !important\n}\n.m-b-15[data-v-1e45aa1b]{margin-bottom:15px !important\n}\n.m-b-20[data-v-1e45aa1b]{margin-bottom:20px !important\n}\n.m-b-30[data-v-1e45aa1b]{margin-bottom:30px !important\n}\n.m-b-25[data-v-1e45aa1b]{margin-bottom:25px !important\n}\n.m-b-50[data-v-1e45aa1b]{margin-bottom:50px !important\n}\n.p-t-40[data-v-1e45aa1b]{padding-top:40px\n}\n.p-t-85[data-v-1e45aa1b]{padding-top:85px !important\n}\n.hidden[data-v-1e45aa1b]{opacity:0 !important\n}\n.relative[data-v-1e45aa1b]{position:relative\n}\n.space-nowrap[data-v-1e45aa1b]{white-space:nowrap\n}\n.uppercase[data-v-1e45aa1b]{text-transform:uppercase\n}\n.lowercase[data-v-1e45aa1b]{text-transform:lowercase\n}\n.fade-enter-active[data-v-1e45aa1b]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-1e45aa1b]{transition:all .1s ease-out\n}\n.fade-enter[data-v-1e45aa1b],.fade-leave-to[data-v-1e45aa1b]{opacity:0\n}\n.fade-down-enter-active[data-v-1e45aa1b],.fade-down-leave-active[data-v-1e45aa1b],.fade-down-move[data-v-1e45aa1b]{transition:all .15s\n}\n.fade-down-leave-active[data-v-1e45aa1b],.fade-down-enter-active[data-v-1e45aa1b]{position:absolute !important\n}\n.fade-down-enter[data-v-1e45aa1b],.fade-down-leave-to[data-v-1e45aa1b]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-1e45aa1b],.scale-leave-active[data-v-1e45aa1b],.scale-move[data-v-1e45aa1b]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-1e45aa1b],.scale-leave-to[data-v-1e45aa1b]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-1e45aa1b],.slide-leave-active[data-v-1e45aa1b]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-1e45aa1b]{transition:all .2s ease\n}\n.slide-leave-active[data-v-1e45aa1b]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-1e45aa1b],.slide-leave-to[data-v-1e45aa1b]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-1e45aa1b],.slide-leave[data-v-1e45aa1b]{margin-bottom:0px\n}\n.slide-enter[data-v-1e45aa1b],.slide-leave-to[data-v-1e45aa1b]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-1e45aa1b],.slide-in-leave-active[data-v-1e45aa1b]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-1e45aa1b]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-1e45aa1b]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-1e45aa1b]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-1e45aa1b]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-1e45aa1b],.page-fade-enter-active[data-v-1e45aa1b]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-1e45aa1b],.page-fade-leave-to[data-v-1e45aa1b],.page-fade-enter[data-v-1e45aa1b]{opacity:0\n}\n.page-fade-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.fade-out-leave-active[data-v-1e45aa1b],.fade-out-enter-active[data-v-1e45aa1b]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-1e45aa1b],.fade-out-leave-to[data-v-1e45aa1b],.fade-out-enter[data-v-1e45aa1b]{opacity:0\n}\n.fade-out-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.slide-down-enter-active[data-v-1e45aa1b],.slide-down-leave-active[data-v-1e45aa1b]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-1e45aa1b],.slide-down-enter[data-v-1e45aa1b]{top:100%\n}\n.slide-down-leave[data-v-1e45aa1b],.slide-down-enter-to[data-v-1e45aa1b]{top:0%\n}\n.slide-out-enter-active[data-v-1e45aa1b],.slide-out-leave-active[data-v-1e45aa1b]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-1e45aa1b],.exchange-result.slide-out-enter[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-1e45aa1b],.exchange-pending.slide-out-enter[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-1e45aa1b],.slide-left-leave-active[data-v-1e45aa1b]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-1e45aa1b],.slide-right-leave-active[data-v-1e45aa1b]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-1e45aa1b]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-1e45aa1b]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-1e45aa1b],.spin-down-leave-active[data-v-1e45aa1b]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-1e45aa1b]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-1e45aa1b]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-1e45aa1b],.spin-up-leave-active[data-v-1e45aa1b]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-1e45aa1b]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-1e45aa1b]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-1e45aa1b]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-1e45aa1b],.puff-out-leave-active[data-v-1e45aa1b]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-1e45aa1b]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-1e45aa1b]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-1e45aa1b],.puff-out-enter-to[data-v-1e45aa1b]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-1e45aa1b],.collapse-fade-enter-active[data-v-1e45aa1b]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-1e45aa1b],.collapse-fade-leave-to[data-v-1e45aa1b],.collapse-fade-enter[data-v-1e45aa1b]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.lazy-fade-leave-active[data-v-1e45aa1b],.lazy-fade-enter-active[data-v-1e45aa1b]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-1e45aa1b],.lazy-fade-leave-to[data-v-1e45aa1b],.lazy-fade-enter[data-v-1e45aa1b]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-1e45aa1b]{opacity:1\n}\n.dropdown-wrap .atomic-notify-point__label-wrap[data-v-1e45aa1b]{position:absolute;right:-38px;top:0\n}\n.atomic-notify-point__wrap[data-v-1e45aa1b]{display:flex\n}\n.atomic-notify-point__slot[data-v-1e45aa1b]{display:flex\n}\n.atomic-notify-point--center[data-v-1e45aa1b]{align-items:center\n}\n.atomic-notify-point__label[data-v-1e45aa1b]{display:flex;justify-content:center;align-items:center;text-align:center;border-radius:100px;margin-top:-2px\n}\n.atomic-notify-point__label-wrap[data-v-1e45aa1b]{transition:transform linear .3s;transform:scale(0)\n}\n.atomic-notify-point__label-wrap--visible[data-v-1e45aa1b]{margin:2px 0 0 6px;transition:transform linear .3s;transform:scale(1)\n}\n.atomic-notify-point__label--new[data-v-1e45aa1b]{background:linear-gradient(76.77deg, #f6d365 0%, #fab975 100%)\n}\n.atomic-notify-point__label--hot[data-v-1e45aa1b]{background:#be3849;border-color:hsla(0,0%,100%,.12)\n}\n.atomic-notify-point__label--secondary[data-v-1e45aa1b]{background:#f5922f;border-color:hsla(0,0%,100%,.12);width:8px;height:8px;margin-top:1.25rem\n}\n.atomic-notify-point__label--secondary>span[data-v-1e45aa1b]{display:none\n}\n.atomic-notify-point__label>span[data-v-1e45aa1b]{font-size:10px;font-weight:400;color:#1f2843;text-transform:uppercase;padding:2px 8px 0px 8px;line-height:14px\n}",
          "",
        ]));
    },
    3632: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "atomic-notify-point", attrs: { uid: t.UID } },
            [
              a(
                "div",
                {
                  class: [
                    "atomic-notify-point__wrap",
                    { "atomic-notify-point--center": "new" === t.type },
                  ],
                },
                [
                  a(
                    "div",
                    { staticClass: "atomic-notify-point__slot" },
                    [
                      t._t("default"),
                      t._v(" "),
                      t.$scopedSlots["tag"] && !t.amount ? t._t("tag") : t._e(),
                    ],
                    2,
                  ),
                  t._v(" "),
                  t.amount
                    ? a(
                        "div",
                        {
                          ref: "notify",
                          class: [
                            "atomic-notify-point__label-wrap",
                            {
                              "atomic-notify-point__label-wrap--visible":
                                t.amount && "hidden" !== t.type,
                            },
                          ],
                          attrs: { id: t.UID },
                        },
                        [
                          a(
                            "div",
                            {
                              class: [
                                "atomic-notify-point__label atomic-notify-point__label--" +
                                  t.type,
                              ],
                            },
                            [
                              a("span", [
                                t._v(
                                  "\n          " + t._s(t.type) + "\n        ",
                                ),
                              ]),
                            ],
                          ),
                        ],
                      )
                    : t._e(),
                ],
              ),
            ],
          );
        },
        r = [];
    },
    4507: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.circles = e.cells = e.beaches = void 0),
        (e.default = p),
        (e.epsilon2 = e.epsilon = e.edges = void 0));
      var r,
        i,
        o = a(8783),
        s = a(6357),
        l = a(6358),
        c = a(5341),
        d = n(a(5340));
      ((e.epsilon = 1e-6), (e.epsilon2 = 1e-12));
      function u(t, e, a) {
        return (t[0] - a[0]) * (e[1] - t[1]) - (t[0] - e[0]) * (a[1] - t[1]);
      }
      function f(t, e) {
        return e[1] - t[1] || e[0] - t[0];
      }
      function p(t, a) {
        var n,
          u,
          p,
          h = t.sort(f).pop();
        ((e.edges = i = []),
          (e.cells = r = new Array(t.length)),
          (e.beaches = new d.default()),
          (e.circles = new d.default()));
        while (1)
          if (
            ((p = l.firstCircle),
            h && (!p || h[1] < p.y || (h[1] === p.y && h[0] < p.x)))
          )
            ((h[0] === n && h[1] === u) ||
              ((0, o.addBeach)(h), (n = h[0]), (u = h[1])),
              (h = t.pop()));
          else {
            if (!p) break;
            (0, o.removeBeach)(p.arc);
          }
        if (((0, s.sortCellHalfedges)(), a)) {
          var v = +a[0][0],
            m = +a[0][1],
            b = +a[1][0],
            y = +a[1][1];
          ((0, c.clipEdges)(v, m, b, y), (0, s.clipCells)(v, m, b, y));
        }
        ((this.edges = i),
          (this.cells = r),
          (e.beaches = e.circles = e.edges = i = e.cells = r = null));
      }
      p.prototype = {
        constructor: p,
        polygons: function () {
          var t = this.edges;
          return this.cells.map(function (e) {
            var a = e.halfedges.map(function (a) {
              return (0, s.cellHalfedgeStart)(e, t[a]);
            });
            return ((a.data = e.site.data), a);
          });
        },
        triangles: function () {
          var t = [],
            e = this.edges;
          return (
            this.cells.forEach(function (a, n) {
              if ((i = (r = a.halfedges).length)) {
                var r,
                  i,
                  o,
                  s = a.site,
                  l = -1,
                  c = e[r[i - 1]],
                  d = c.left === s ? c.right : c.left;
                while (++l < i)
                  ((o = d),
                    (c = e[r[l]]),
                    (d = c.left === s ? c.right : c.left),
                    o &&
                      d &&
                      n < o.index &&
                      n < d.index &&
                      u(s, o, d) < 0 &&
                      t.push([s.data, o.data, d.data]));
              }
            }),
            t
          );
        },
        links: function () {
          return this.edges
            .filter(function (t) {
              return t.right;
            })
            .map(function (t) {
              return { source: t.left.data, target: t.right.data };
            });
        },
        find: function (t, e, a) {
          var n,
            r,
            i = this,
            o = i._found || 0,
            s = i.cells.length;
          while (!(r = i.cells[o])) if (++o >= s) return null;
          var l = t - r.site[0],
            c = e - r.site[1],
            d = l * l + c * c;
          do {
            ((r = i.cells[(n = o)]),
              (o = null),
              r.halfedges.forEach(function (a) {
                var n = i.edges[a],
                  s = n.left;
                if ((s !== r.site && s) || (s = n.right)) {
                  var l = t - s[0],
                    c = e - s[1],
                    u = l * l + c * c;
                  u < d && ((d = u), (o = s.index));
                }
              }));
          } while (null !== o);
          return ((i._found = n), null == a || d <= a * a ? r.site : null);
        },
      };
    },
    4726: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = o),
        (e.tweenValue = s));
      var n = a(3188);
      function r(t, e) {
        var a, r;
        return function () {
          var i = (0, n.set)(this, t),
            o = i.tween;
          if (o !== a) {
            r = a = o;
            for (var s = 0, l = r.length; s < l; ++s)
              if (r[s].name === e) {
                ((r = r.slice()), r.splice(s, 1));
                break;
              }
          }
          i.tween = r;
        };
      }
      function i(t, e, a) {
        var r, i;
        if ("function" !== typeof a) throw new Error();
        return function () {
          var o = (0, n.set)(this, t),
            s = o.tween;
          if (s !== r) {
            i = (r = s).slice();
            for (var l = { name: e, value: a }, c = 0, d = i.length; c < d; ++c)
              if (i[c].name === e) {
                i[c] = l;
                break;
              }
            c === d && i.push(l);
          }
          o.tween = i;
        };
      }
      function o(t, e) {
        var a = this._id;
        if (((t += ""), arguments.length < 2)) {
          for (
            var o, s = (0, n.get)(this.node(), a).tween, l = 0, c = s.length;
            l < c;
            ++l
          )
            if ((o = s[l]).name === t) return o.value;
          return null;
        }
        return this.each((null == e ? r : i)(a, t, e));
      }
      function s(t, e, a) {
        var r = t._id;
        return (
          t.each(function () {
            var t = (0, n.set)(this, r);
            (t.value || (t.value = {}))[e] = a.apply(this, arguments);
          }),
          function (t) {
            return (0, n.get)(t, r).value[e];
          }
        );
      }
    },
    5299: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = a(60),
        i = a(68),
        o = a(233),
        s = n(a(6270)),
        l = n(a(802)),
        c = n(a(3364)),
        d = n(a(821)),
        u = a(804),
        f = n(a(798)),
        p = n(a(5342)),
        h = n(a(5343)),
        v = n(a(829)),
        m = n(a(8790)),
        b = n(a(2999));
      const y = 17,
        g = 11;
      e.default = {
        name: "Coin",
        components: {
          Chart: s.default,
          CoinIcon: l.default,
          TokenTag: d.default,
          AtomicNotifyPoint: c.default,
          MemesImage: b.default,
        },
        props: {
          coin: { type: Object, default: Object },
          isPortfolio: { type: Boolean, default: !1 },
        },
        data: () => ({ chartReady: !1 }),
        computed: {
          ...(0, r.mapGetters)([
            "fiatRate",
            "fiatCharacter",
            "walletsNotify",
            "isUpdatingFiat",
            "isChartDataLoading",
            "chartDataMainEndpoint",
            "chartDataTickerByZoom",
          ]),
          nameLength() {
            var t, e, a;
            const n =
              (null === (t = this.coin) || void 0 === t
                ? void 0
                : t.deprecatedParent) ||
              (null === (e = this.coin) || void 0 === e ? void 0 : e.parent);
            if (n === this.coin.id) return y;
            const r = n
              ? null === (a = n.toUpperCase) || void 0 === a
                ? void 0
                : a.call(n)
              : "";
            return this.isNotify ||
              ((this.coin instanceof i.Token || this.coin.isToken) &&
                o.COINS_WITH_TAG.has(r))
              ? g
              : y;
          },
          isPlaceholder() {
            return (
              this.isUpdatingFiat ||
              !this.coin.confirmed ||
              !Number(this.coin.rate)
            );
          },
          getData() {
            return this.chartDataTickerByZoom({
              ticker: this.coin.ticker,
            }).points.filter((t, e) => e % 4 === 0);
          },
          notifyUID() {
            return `walletTableTicker-${this.coin.ticker.split("-").join("")}-${this.coin.parent && this.coin.parent !== this.coin.ticker ? this.coin.parent : ""}`;
          },
          isNotify() {
            const t = `${this.coin.ticker.split("-").join("")}-${this.coin.parent && this.coin.parent !== this.coin.ticker ? this.coin.parent : ""}`,
              e = "walletTableTickerInfo-" + t,
              a = "article-" + t;
            return (
              this.walletsNotify.includes(e) || this.walletsNotify.includes(a)
            );
          },
          coinPrice() {
            return this.coin.rate
              ? (0, v.default)(this.coin.rate, this.fiatRate)
              : 0;
          },
        },
        watch: {
          coin() {
            this.cacheBalance();
          },
        },
        mounted() {
          this.cacheBalance();
        },
        created() {
          const t = this.$wallets.getWallet(this.coin.id),
            e = localStorage.getItem(this.coin.id + "-staking-infos");
          t &&
            !t.isStakingSupported() &&
            0 === Object.keys(t.balances || {}).length &&
            e &&
            (t.balances = JSON.parse(e));
        },
        methods: {
          formatNumber: u.formatNumber,
          formatFinance: f.default,
          formatFinanceTrim: p.default,
          formatTextTrim: h.default,
          balanceFormat: m.default,
          ...(0, r.mapActions)(["updateWalletState"]),
          clickHandler() {
            this.$emit("toggleCoinInfoPopup", this.coin);
          },
          cacheBalance() {
            const t = this.$wallets.getWallet(this.coin.id);
            t &&
              t.balances &&
              !t.isStakingSupported() &&
              localStorage.setItem(
                this.coin.id + "-staking-infos",
                JSON.stringify(t.balances),
              );
          },
        },
      };
    },
    5300: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var r = c(a(6271)),
        i = a(60),
        o = n(a(802)),
        s = n(a(798)),
        l = n(a(6360));
      function c(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (c = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
      const d = 15,
        u = 4,
        f = 5,
        p = 210,
        h = 30,
        v = 2;
      e.default = {
        name: "Chart",
        components: { CoinIcon: o.default },
        props: {
          data: { type: Array, default: () => [] },
          dates: { type: Array, default: () => [] },
          color: { type: String, default: "#ffffff" },
          lineWidth: { type: String, default: "2" },
          step: { type: Number, default: 10 },
          width: { type: Number, default: 0 },
          height: { type: Number, default: 40 },
          coin: { type: Object, default: () => ({}) },
          isPriceChart: { type: Boolean, default: !1 },
          isArea: { type: Boolean, default: !1 },
          isMaxWidth: { type: Boolean, default: !1 },
          isMaxHeight: { type: Boolean, default: !1 },
          isTooltip: { type: Boolean, default: !1 },
          isAxis: { type: Boolean, default: !1 },
          isYAxis: { type: Boolean, default: !1 },
          isMinMaxPoints: { type: Boolean, default: !1 },
          isLoading: { type: Boolean, default: !1 },
          activeZoom: { type: String, default: "" },
          zoomSettings: { type: Array, default: () => [] },
        },
        data: () => ({
          widthChart: 0,
          heightChart: 0,
          svg: null,
          coinColor: {},
        }),
        computed: {
          ...(0, i.mapGetters)(["coinRate", "fiatRate", "fiatCharacter"]),
          chartWrapId() {
            return "chartWrap" + this.refName;
          },
          refName() {
            const t = this.coin.deprecatedParent || this.coin.parent,
              e = `-${this.coin.id}-${this.coin.ticker}-${t}`;
            return this.isPriceChart ? "-priceChart-" + e : e;
          },
          currentCoinColor() {
            var t, e;
            return (
              (null === (t = this.coinColor) || void 0 === t
                ? void 0
                : t.gradientDown) ||
              (null === (e = this.coinColor) || void 0 === e
                ? void 0
                : e.gradientUp) ||
              "#ffffff"
            );
          },
          createXYPos() {
            const t = r.extent(this.data, (t) => t.x),
              e = r.extent(this.data, (t) => t.y),
              a = r.scaleLinear().domain(t).range([0, this.widthChart]),
              n = r.scaleLinear().domain(e).range([this.heightChart, 0]);
            return { xPos: a, yPos: n };
          },
          writeLine() {
            return r
              .line()
              .x((t) => this.createXYPos.xPos(t.x))
              .y((t) => this.createXYPos.yPos(t.y))
              .curve(r.curveCatmullRom);
          },
          fixedFiatCharacter() {
            return "BTC" === this.fiatRate ? "&#36;" : this.fiatCharacter;
          },
        },
        watch: {
          data: {
            handler() {
              this.$nextTick(() => {
                (this.setCoinColor(), this.updateChart());
              });
            },
            deep: !0,
          },
          isLoading(t, e) {
            t !== e &&
              (t
                ? this.$nextTick(() => this.removeChart())
                : this.$nextTick(() => this.updateChart()));
          },
        },
        created() {
          this.isMaxWidth &&
            window.addEventListener("resize", this.updateChart);
        },
        mounted() {
          this.$nextTick(() => {
            (this.setCoinColor(), this.createChart());
          });
        },
        destroyed() {
          (this.isMaxWidth &&
            window.removeEventListener("resize", this.updateChart),
            r.select(this.$refs[this.chartWrapId]).remove());
        },
        methods: {
          setCoinColor() {
            var t, e, a;
            const n =
              (null === (t = this.$refs[this.chartWrapId]) || void 0 === t
                ? void 0
                : t.querySelector(".coin-hidden")) ||
              document.querySelector(`.${this.chartWrapId} .coin-hidden`) ||
              document.querySelector(".coin-info .coin-hidden");
            if (!n) return;
            const r = getComputedStyle(n)
                .getPropertyValue("background")
                .split("rgb"),
              i =
                "rgb" +
                (null === (e = r[2]) || void 0 === e
                  ? void 0
                  : e.split(")")[0]) +
                ")",
              o =
                "rgb" +
                (null === (a = r[3]) || void 0 === a
                  ? void 0
                  : a.split(")")[0]) +
                ")";
            this.coinColor = { gradientUp: i, gradientDown: o };
          },
          removeChart() {
            (this.removeTooltip(),
              this.removeOverlay(),
              this.svg && this.svg.remove(),
              r.select(this.$refs[this.chartWrapId]).select("svg").remove());
          },
          updateChart() {
            (this.removeChart(), this.createChart());
          },
          setMaxWidthChart() {
            const t = this.$refs[this.chartWrapId];
            if (t) {
              const e = this.$parent.$el.offsetWidth;
              this.widthChart = e || t.parentNode.parentNode.offsetWidth;
            }
          },
          setMaxHeightChart() {
            const t = this.$refs[this.chartWrapId];
            if (t) {
              const e = t.parentNode.parentNode,
                a = e.offsetHeight,
                n = (t) => {
                  const a = e.querySelector(t);
                  if (!a) return 0;
                  const n = window.getComputedStyle(a);
                  return [
                    "height",
                    "padding-top",
                    "padding-bottom",
                    "margin-top",
                    "margin-bottom",
                  ]
                    .map((t) => parseInt(n.getPropertyValue(t)))
                    .reduce((t, e) => t + e);
                },
                r = [
                  ".coin-wrap",
                  ".about-coin",
                  ".info",
                  ".tabs",
                  ".chart-zoom",
                ]
                  .map((t) => n(t))
                  .reduce((t, e) => t + e);
              this.heightChart = a - r - h;
            }
          },
          createChart() {
            this.isLoading ||
              ((this.widthChart = this.width),
              (this.heightChart = this.height),
              this.isMaxWidth && this.setMaxWidthChart(),
              this.isMaxHeight && this.setMaxHeightChart(),
              Number(this.widthChart) < 1 && (this.widthChart = p),
              this.data && this.data.length && this.createLineGraph());
          },
          getDataGraph() {
            const t = this.data.length;
            let e = [];
            for (let a = 0; a < t; a += 1) {
              const t = Number(this.data[a]),
                n = a,
                r = { x: isNaN(n) ? 0 : n, y: isNaN(t) ? 0 : t };
              e.push(r);
            }
            return e;
          },
          addArea() {
            const t = r
                .area()
                .x((t) => this.createXYPos.xPos(t.x))
                .y0(this.heightChart + h)
                .y1((t) => this.createXYPos.yPos(t.y)),
              e = "area" + this.refName,
              a = this.svg
                .append("defs")
                .append("linearGradient")
                .attr("id", e)
                .attr("x1", "0")
                .attr("x2", "0")
                .attr("y1", "0")
                .attr("y2", "1");
            (a
              .append("stop")
              .attr("offset", "40%")
              .attr("stop-color", this.currentCoinColor)
              .attr("stop-opacity", "0.2"),
              a
                .append("stop")
                .attr("offset", "70%")
                .attr("stop-color", this.currentCoinColor)
                .attr("stop-opacity", "0.05"),
              a
                .append("stop")
                .attr("offset", "90%")
                .attr("stop-color", this.currentCoinColor)
                .attr("stop-opacity", "0.01"),
              this.svg
                .append("path")
                .attr("class", "area")
                .attr("d", t(this.data))
                .attr("fill", `url(#${e})`));
          },
          createChartPoint(t, e, a, n, r, i) {
            void 0 === i && (i = !1);
            const { arrowYFix: o, arrowXFix: c, textYFix: d, textXFix: u } = n;
            (this.svg
              .append("svg:foreignObject")
              .attr("width", "80")
              .attr("height", "30")
              .attr("x", "0")
              .attr("fill", "currentColor")
              .attr("transform", `translate(${t - u},${e - d})`)
              .append("xhtml:div")
              .attr("class", "min-max-text" + (r ? " right-position" : ""))
              .html(() => {
                const t = (0, s.default)((0, l.default)(a));
                return `${this.fixedFiatCharacter}${t}`;
              }),
              this.svg
                .append("path")
                .attr(
                  "d",
                  i
                    ? "M3.5 10L3.5 1M3.5 1L6 6M3.5 1L1 6"
                    : "M3.5 1L3.5 10M3.5 10L1 5M3.5 10L6 5",
                )
                .attr("stroke", "#FAFCFF")
                .attr("stroke-width", "1.5")
                .attr("stroke-linecap", "round")
                .attr("stroke-linejoin", "round")
                .attr("x1", "0")
                .attr("x2", "0")
                .attr("y1", "0")
                .attr("y2", "30")
                .attr("transform", `translate(${t - c},${e - o})`),
              this.svg
                .append("circle")
                .attr("class", "min-max-point")
                .attr("fill", this.currentCoinColor)
                .attr("transform", `translate(${t},${e})`));
          },
          addMinMaxPoints() {
            const t = 80,
              e = this.data.map((t) => t.y),
              a = e.indexOf(Math.max(...e)),
              n = this.createXYPos.xPos(this.data[a].x),
              r = this.createXYPos.yPos(this.data[a].y),
              i = this.data[a].y;
            let o = n + t > this.widthChart;
            const s = {
              arrowYFix: 18,
              arrowXFix: 3.5,
              textYFix: 19,
              textXFix: -5,
            };
            (o && (s.textXFix = 85), this.createChartPoint(n, r, i, s, o));
            const l = e.indexOf(Math.min(...e)),
              c = this.createXYPos.xPos(this.data[l].x),
              d = this.createXYPos.yPos(this.data[l].y),
              u = this.data[l].y,
              f = {
                arrowYFix: -7,
                arrowXFix: 3.5,
                textYFix: -6.5,
                textXFix: -5,
              };
            ((o = c + t > this.widthChart),
              o && (f.textXFix = 85),
              this.createChartPoint(c, d, u, f, o, !0));
          },
          addLine() {
            (this.svg
              .append("path")
              .attr("d", this.writeLine(this.data))
              .attr("class", "line")
              .attr("stroke-width", v)
              .attr("stroke", this.currentCoinColor)
              .attr("fill", "none"),
              this.isMinMaxPoints && this.addMinMaxPoints());
          },
          getDateFormat(t) {
            let e = "24H" === this.activeZoom ? "HH:mm" : "DD MMMM";
            return (
              "ALL" === this.activeZoom
                ? (e = "DD MMM YYYY")
                : t &&
                  (e =
                    "1Y" === this.activeZoom ? "DD MMM YYYY" : "DD MMM HH:mm"),
              e
            );
          },
          dateFormat(t, e) {
            void 0 === e && (e = !1);
            const a = this.getDateFormat(e);
            if (this.dates && this.dates.length > t) {
              const e = this.dates[t];
              return this.$formatDate(e, a);
            }
            const n = this.data.length - 1 - t,
              r = new Date();
            let i;
            return (
              (i =
                "24H" === this.activeZoom
                  ? r.setHours(r.getHours() - n)
                  : r.setDate(r.getDate() - n)),
              this.$formatDate(i, a)
            );
          },
          removeTooltip() {
            const t = this.$refs[this.chartWrapId];
            if (t) {
              const e = r.select(t).select(".tooltip-chart");
              e && e.remove();
            }
          },
          removeOverlay() {
            const t = this.$refs[this.chartWrapId];
            if (t) {
              const e = r.select(t).select(".overlay");
              e && e.remove();
            }
          },
          updateOverlay() {
            if (
              (this.removeOverlay(),
              !this.svg || !this.svg.node() || !this.svg.node().closest("main"))
            )
              return;
            const t = this.svg.node().parentNode;
            let e = r.select(t).select(".overlay");
            const a = r.select(t).select(".tooltip-chart"),
              n = r.select(t).select(".circle"),
              { xPos: i, yPos: o } = this.createXYPos,
              {
                data: c,
                fixedFiatCharacter: u,
                heightChart: f,
                currentCoinColor: p,
              } = this,
              v = (t) => this.dateFormat(t, !0),
              m = r.bisector((t) => t.x),
              b = this.svg.node().closest("main").getBoundingClientRect(),
              y = (t) => {
                (a.style("display", t), n.style("display", t));
              },
              g = function () {
                if (!n.node()) return;
                const e = i.invert(r.mouse(this)[0]),
                  y = m.right(c, e),
                  g = v(y),
                  _ = (0, s.default)((0, l.default)(c[y].y));
                (a.select(".date").text(g),
                  a.select(".tooltip-price").html(`${u}${_}`),
                  n
                    .attr("transform", `translate(${i(c[y].x)},${o(c[y].y)})`)
                    .attr("fill", p));
                const x = n.node().getBoundingClientRect(),
                  w = t.querySelector(".tooltip-chart").getBoundingClientRect(),
                  k = 26,
                  O = 25,
                  C = w.width / 2;
                let P = x.left - b.left - k - C,
                  j = C - d,
                  M = "+";
                P < 0
                  ? ((P += j), (M = "-"))
                  : b.right < x.right + C + O
                    ? (P -= j)
                    : (j = 1);
                const E = 33;
                (a
                  .select(".triangle")
                  .attr(
                    "style",
                    `border-top-color:${p};left: calc(50% ${M} ${j}px);`,
                  ),
                  a
                    .select(".line")
                    .attr(
                      "style",
                      `background-color:${p};left: calc(50% ${M} ${j}px);height: ${f + h + E}px;`,
                    ),
                  a.attr(
                    "style",
                    `background:${p};left:${P}px;display:block;`,
                  ));
              };
            ((e = r
              .select(t)
              .append("svg")
              .attr("class", "overlay")
              .attr("width", this.widthChart)
              .attr("height", this.heightChart + h)),
              e
                .append("rect")
                .attr("width", this.widthChart)
                .attr("height", this.heightChart + h)
                .on("mouseover", () => y(null))
                .on("mouseout", () => y("none"))
                .on("mousemove", g));
          },
          addTooltip() {
            this.removeTooltip();
            const t = r
              .select("#" + ("graph" + this.refName))
              .append("div")
              .attr("class", "tooltip-chart")
              .style("display", "none");
            (t.append("p").attr("class", "date"),
              t.append("p").attr("class", "tooltip-price"),
              t.append("p").attr("class", "triangle"),
              t.append("p").attr("class", "line"),
              this.svg
                .append("circle")
                .attr("class", "circle")
                .style("display", "none"),
              this.updateOverlay());
          },
          getTickDataValues() {
            const t = [],
              e = "1W" === this.activeZoom ? u : f,
              a = Math.ceil((this.data.length - 1) / e);
            for (let n = 0; n < e; n += 1)
              this.data[a * n] && t.push(this.data[a * n].x);
            return t;
          },
          addAxis() {
            const t = 15,
              e = this.getTickDataValues(),
              a = r
                .axisBottom(this.createXYPos.xPos)
                .tickValues(e)
                .tickFormat(() => "")
                .tickSize(0);
            if (
              (this.svg
                .append("g")
                .attr("class", "xaxis")
                .call(a)
                .selectAll("g")
                .append("svg:foreignObject")
                .attr("width", "140")
                .attr("height", "30")
                .attr("x", "-1")
                .attr("y", "0")
                .append("xhtml:div")
                .attr("class", "xaxis-tick")
                .html((t) => this.dateFormat(t)),
              this.isYAxis)
            ) {
              const e = 4,
                a = 85,
                n = r
                  .axisRight(this.createXYPos.yPos)
                  .ticks(e)
                  .tickSize(this.widthChart)
                  .tickPadding(t);
              this.svg
                .append("g")
                .attr("class", "yaxis")
                .call(n)
                .selectAll("g")
                .append("svg:foreignObject")
                .attr("width", "80")
                .attr("height", "30")
                .attr("x", this.widthChart - a)
                .attr("y", "-10")
                .append("xhtml:div")
                .html((t) => {
                  const e = (0, s.default)((0, l.default)(t));
                  return `${this.fixedFiatCharacter}${e}`;
                });
            }
          },
          createLineGraph() {
            const t = this.isAxis ? "main-chart" : "";
            ((this.svg = r
              .select("#" + ("graph" + this.refName))
              .append("svg")
              .attr("class", t)
              .attr("width", this.widthChart)
              .attr("height", this.heightChart)),
              this.addLine(),
              this.isAxis && this.addAxis(),
              this.isArea && this.addArea(),
              this.isTooltip && this.addTooltip());
          },
          zoomChart(t) {
            this.isLoading || this.$emit("changeActiveData", t);
          },
        },
      };
    },
    5314: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "active", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(e, "interrupt", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(e, "transition", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        a(8526));
      var r = n(a(3592)),
        i = n(a(8559)),
        o = n(a(6300));
    },
    5340: function (t, e, a) {
      "use strict";
      function n() {
        this._ = null;
      }
      function r(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null;
      }
      function i(t, e) {
        var a = e,
          n = e.R,
          r = a.U;
        (r ? (r.L === a ? (r.L = n) : (r.R = n)) : (t._ = n),
          (n.U = r),
          (a.U = n),
          (a.R = n.L),
          a.R && (a.R.U = a),
          (n.L = a));
      }
      function o(t, e) {
        var a = e,
          n = e.L,
          r = a.U;
        (r ? (r.L === a ? (r.L = n) : (r.R = n)) : (t._ = n),
          (n.U = r),
          (a.U = n),
          (a.L = n.R),
          a.L && (a.L.U = a),
          (n.R = a));
      }
      function s(t) {
        while (t.L) t = t.L;
        return t;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RedBlackNode = r),
        (e.default = void 0),
        (n.prototype = {
          constructor: n,
          insert: function (t, e) {
            var a, n, r;
            if (t) {
              if (
                ((e.P = t), (e.N = t.N), t.N && (t.N.P = e), (t.N = e), t.R)
              ) {
                t = t.R;
                while (t.L) t = t.L;
                t.L = e;
              } else t.R = e;
              a = t;
            } else
              this._
                ? ((t = s(this._)),
                  (e.P = null),
                  (e.N = t),
                  (t.P = t.L = e),
                  (a = t))
                : ((e.P = e.N = null), (this._ = e), (a = null));
            ((e.L = e.R = null), (e.U = a), (e.C = !0), (t = e));
            while (a && a.C)
              ((n = a.U),
                a === n.L
                  ? ((r = n.R),
                    r && r.C
                      ? ((a.C = r.C = !1), (n.C = !0), (t = n))
                      : (t === a.R && (i(this, a), (t = a), (a = t.U)),
                        (a.C = !1),
                        (n.C = !0),
                        o(this, n)))
                  : ((r = n.L),
                    r && r.C
                      ? ((a.C = r.C = !1), (n.C = !0), (t = n))
                      : (t === a.L && (o(this, a), (t = a), (a = t.U)),
                        (a.C = !1),
                        (n.C = !0),
                        i(this, n))),
                (a = t.U));
            this._.C = !1;
          },
          remove: function (t) {
            (t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null));
            var e,
              a,
              n,
              r = t.U,
              l = t.L,
              c = t.R;
            if (
              ((a = l ? (c ? s(c) : l) : c),
              r ? (r.L === t ? (r.L = a) : (r.R = a)) : (this._ = a),
              l && c
                ? ((n = a.C),
                  (a.C = t.C),
                  (a.L = l),
                  (l.U = a),
                  a !== c
                    ? ((r = a.U),
                      (a.U = t.U),
                      (t = a.R),
                      (r.L = t),
                      (a.R = c),
                      (c.U = a))
                    : ((a.U = r), (r = a), (t = a.R)))
                : ((n = t.C), (t = a)),
              t && (t.U = r),
              !n)
            )
              if (t && t.C) t.C = !1;
              else {
                do {
                  if (t === this._) break;
                  if (t === r.L) {
                    if (
                      ((e = r.R),
                      e.C && ((e.C = !1), (r.C = !0), i(this, r), (e = r.R)),
                      (e.L && e.L.C) || (e.R && e.R.C))
                    ) {
                      ((e.R && e.R.C) ||
                        ((e.L.C = !1), (e.C = !0), o(this, e), (e = r.R)),
                        (e.C = r.C),
                        (r.C = e.R.C = !1),
                        i(this, r),
                        (t = this._));
                      break;
                    }
                  } else if (
                    ((e = r.L),
                    e.C && ((e.C = !1), (r.C = !0), o(this, r), (e = r.L)),
                    (e.L && e.L.C) || (e.R && e.R.C))
                  ) {
                    ((e.L && e.L.C) ||
                      ((e.R.C = !1), (e.C = !0), i(this, e), (e = r.L)),
                      (e.C = r.C),
                      (r.C = e.L.C = !1),
                      o(this, r),
                      (t = this._));
                    break;
                  }
                  ((e.C = !0), (t = r), (r = r.U));
                } while (!t.C);
                t && (t.C = !1);
              }
          },
        }));
      e.default = n;
    },
    5341: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clipEdges = c),
        (e.createBorderEdge = i),
        (e.createEdge = r),
        (e.setEdgeEnd = o));
      var n = a(4507);
      function r(t, e, a, r) {
        var i = [null, null],
          s = n.edges.push(i) - 1;
        return (
          (i.left = t),
          (i.right = e),
          a && o(i, t, e, a),
          r && o(i, e, t, r),
          n.cells[t.index].halfedges.push(s),
          n.cells[e.index].halfedges.push(s),
          i
        );
      }
      function i(t, e, a) {
        var n = [e, a];
        return ((n.left = t), n);
      }
      function o(t, e, a, n) {
        t[0] || t[1]
          ? t.left === a
            ? (t[1] = n)
            : (t[0] = n)
          : ((t[0] = n), (t.left = e), (t.right = a));
      }
      function s(t, e, a, n, r) {
        var i,
          o = t[0],
          s = t[1],
          l = o[0],
          c = o[1],
          d = s[0],
          u = s[1],
          f = 0,
          p = 1,
          h = d - l,
          v = u - c;
        if (((i = e - l), h || !(i > 0))) {
          if (((i /= h), h < 0)) {
            if (i < f) return;
            i < p && (p = i);
          } else if (h > 0) {
            if (i > p) return;
            i > f && (f = i);
          }
          if (((i = n - l), h || !(i < 0))) {
            if (((i /= h), h < 0)) {
              if (i > p) return;
              i > f && (f = i);
            } else if (h > 0) {
              if (i < f) return;
              i < p && (p = i);
            }
            if (((i = a - c), v || !(i > 0))) {
              if (((i /= v), v < 0)) {
                if (i < f) return;
                i < p && (p = i);
              } else if (v > 0) {
                if (i > p) return;
                i > f && (f = i);
              }
              if (((i = r - c), v || !(i < 0))) {
                if (((i /= v), v < 0)) {
                  if (i > p) return;
                  i > f && (f = i);
                } else if (v > 0) {
                  if (i < f) return;
                  i < p && (p = i);
                }
                return (
                  !(f > 0 || p < 1) ||
                  (f > 0 && (t[0] = [l + f * h, c + f * v]),
                  p < 1 && (t[1] = [l + p * h, c + p * v]),
                  !0)
                );
              }
            }
          }
        }
      }
      function l(t, e, a, n, r) {
        var i = t[1];
        if (i) return !0;
        var o,
          s,
          l = t[0],
          c = t.left,
          d = t.right,
          u = c[0],
          f = c[1],
          p = d[0],
          h = d[1],
          v = (u + p) / 2,
          m = (f + h) / 2;
        if (h === f) {
          if (v < e || v >= n) return;
          if (u > p) {
            if (l) {
              if (l[1] >= r) return;
            } else l = [v, a];
            i = [v, r];
          } else {
            if (l) {
              if (l[1] < a) return;
            } else l = [v, r];
            i = [v, a];
          }
        } else if (((o = (u - p) / (h - f)), (s = m - o * v), o < -1 || o > 1))
          if (u > p) {
            if (l) {
              if (l[1] >= r) return;
            } else l = [(a - s) / o, a];
            i = [(r - s) / o, r];
          } else {
            if (l) {
              if (l[1] < a) return;
            } else l = [(r - s) / o, r];
            i = [(a - s) / o, a];
          }
        else if (f < h) {
          if (l) {
            if (l[0] >= n) return;
          } else l = [e, o * e + s];
          i = [n, o * n + s];
        } else {
          if (l) {
            if (l[0] < e) return;
          } else l = [n, o * n + s];
          i = [e, o * e + s];
        }
        return ((t[0] = l), (t[1] = i), !0);
      }
      function c(t, e, a, r) {
        var i,
          o = n.edges.length;
        while (o--)
          (l((i = n.edges[o]), t, e, a, r) &&
            s(i, t, e, a, r) &&
            (Math.abs(i[0][0] - i[1][0]) > n.epsilon ||
              Math.abs(i[0][1] - i[1][1]) > n.epsilon)) ||
            delete n.edges[o];
      }
    },
    5342: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(830);
      e.default = function (t, e) {
        void 0 === e && (e = n.MAX_LENGTH_FINANCE_TRIM_DEFAULT);
        const [a, r] = String(t).split("."),
          i = a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
          o = r ? `${i}.${r}` : "" + i,
          s = "...";
        return i.length > e
          ? `${i.substr(0, e - s.length)}${s}`
          : o.length > e
            ? o.substr(0, e)
            : o;
      };
    },
    5343: function (t, e, a) {
      "use strict";
      function n(t, e) {
        const a = "" + (null !== t && void 0 !== t ? t : "");
        return a.length > e ? a.slice(0, e) + "..." : a;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n));
    },
    6269: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5299),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var o = a(8791),
        s = a(5),
        l = !1,
        c = null,
        d = null,
        u = null,
        f = Object(s["a"])(r.a, o["a"], o["b"], l, c, d, u);
      e["default"] = f.exports;
    },
    6270: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5300),
        r = a.n(n);
      for (var i in n)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(i);
      var o = a(8789),
        s = a(5),
        l = !1,
        c = null,
        d = null,
        u = null,
        f = Object(s["a"])(r.a, o["a"], o["b"], l, c, d, u);
      e["default"] = f.exports;
    },
    6271: function (t, e, a) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = { version: !0 };
      Object.defineProperty(e, "version", {
        enumerable: !0,
        get: function () {
          return r.version;
        },
      });
      var r = a(8449),
        i = a(3065);
      Object.keys(i).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === i[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return i[t];
              },
            }));
      });
      var o = a(8466);
      Object.keys(o).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === o[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return o[t];
              },
            }));
      });
      var s = a(8470);
      Object.keys(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === s[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return s[t];
              },
            }));
      });
      var l = a(8563);
      Object.keys(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === l[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return l[t];
              },
            }));
      });
      var c = a(4727);
      Object.keys(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === c[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return c[t];
              },
            }));
      });
      var d = a(3341);
      Object.keys(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === d[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return d[t];
              },
            }));
      });
      var u = a(8574);
      Object.keys(u).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === u[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return u[t];
              },
            }));
      });
      var f = a(3918);
      Object.keys(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === f[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return f[t];
              },
            }));
      });
      var p = a(5302);
      Object.keys(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === p[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return p[t];
              },
            }));
      });
      var h = a(6308);
      Object.keys(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === h[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return h[t];
              },
            }));
      });
      var v = a(6302);
      Object.keys(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === v[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return v[t];
              },
            }));
      });
      var m = a(8584);
      Object.keys(m).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === m[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return m[t];
              },
            }));
      });
      var b = a(8591);
      Object.keys(b).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === b[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return b[t];
              },
            }));
      });
      var y = a(5322);
      Object.keys(y).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === y[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return y[t];
              },
            }));
      });
      var g = a(8622);
      Object.keys(g).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === g[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return g[t];
              },
            }));
      });
      var _ = a(8651);
      Object.keys(_).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === _[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return _[t];
              },
            }));
      });
      var x = a(3380);
      Object.keys(x).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === x[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return x[t];
              },
            }));
      });
      var w = a(3794);
      Object.keys(w).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === w[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return w[t];
              },
            }));
      });
      var k = a(8673);
      Object.keys(k).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === k[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return k[t];
              },
            }));
      });
      var O = a(5320);
      Object.keys(O).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === O[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return O[t];
              },
            }));
      });
      var C = a(8680);
      Object.keys(C).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === C[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return C[t];
              },
            }));
      });
      var P = a(8685);
      Object.keys(P).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === P[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return P[t];
              },
            }));
      });
      var j = a(8710);
      Object.keys(j).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === j[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return j[t];
              },
            }));
      });
      var M = a(3066);
      Object.keys(M).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === M[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return M[t];
              },
            }));
      });
      var E = a(8754);
      Object.keys(E).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === E[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return E[t];
              },
            }));
      });
      var N = a(4734);
      Object.keys(N).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === N[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return N[t];
              },
            }));
      });
      var z = a(5334);
      Object.keys(z).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === z[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return z[t];
              },
            }));
      });
      var T = a(4725);
      Object.keys(T).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === T[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return T[t];
              },
            }));
      });
      var L = a(5314);
      Object.keys(L).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === L[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return L[t];
              },
            }));
      });
      var D = a(8779);
      Object.keys(D).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === D[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return D[t];
              },
            }));
      });
      var S = a(8784);
      Object.keys(S).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (Object.prototype.hasOwnProperty.call(n, t) ||
            (t in e && e[t] === S[t]) ||
            Object.defineProperty(e, t, {
              enumerable: !0,
              get: function () {
                return S[t];
              },
            }));
      });
    },
    6300: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r));
      var n = a(3188);
      function r(t, e) {
        var a,
          r,
          i,
          o = t.__transition,
          s = !0;
        if (o) {
          for (i in ((e = null == e ? null : e + ""), o))
            (a = o[i]).name === e
              ? ((r = a.state > n.STARTING && a.state < n.ENDING),
                (a.state = n.ENDED),
                a.timer.stop(),
                a.on.call(
                  r ? "interrupt" : "cancel",
                  t,
                  t.__data__,
                  a.index,
                  a.group,
                ),
                delete o[i])
              : (s = !1);
          s && delete t.__transition;
        }
      }
    },
    6301: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
      var n = a(3341),
        r = a(3380);
      function i(t, e) {
        var a;
        return (
          "number" === typeof e
            ? r.interpolateNumber
            : e instanceof n.color
              ? r.interpolateRgb
              : (a = (0, n.color)(e))
                ? ((e = a), r.interpolateRgb)
                : r.interpolateString
        )(t, e);
      }
    },
    6357: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.cellHalfedgeEnd = l),
        (e.cellHalfedgeStart = s),
        (e.clipCells = d),
        (e.createCell = i),
        (e.sortCellHalfedges = c));
      var n = a(5341),
        r = a(4507);
      function i(t) {
        return (r.cells[t.index] = { site: t, halfedges: [] });
      }
      function o(t, e) {
        var a = t.site,
          n = e.left,
          r = e.right;
        return (
          a === r && ((r = n), (n = a)),
          r
            ? Math.atan2(r[1] - n[1], r[0] - n[0])
            : (a === n ? ((n = e[1]), (r = e[0])) : ((n = e[0]), (r = e[1])),
              Math.atan2(n[0] - r[0], r[1] - n[1]))
        );
      }
      function s(t, e) {
        return e[+(e.left !== t.site)];
      }
      function l(t, e) {
        return e[+(e.left === t.site)];
      }
      function c() {
        for (var t, e, a, n, i = 0, s = r.cells.length; i < s; ++i)
          if ((t = r.cells[i]) && (n = (e = t.halfedges).length)) {
            var l = new Array(n),
              c = new Array(n);
            for (a = 0; a < n; ++a) ((l[a] = a), (c[a] = o(t, r.edges[e[a]])));
            for (
              l.sort(function (t, e) {
                return c[e] - c[t];
              }),
                a = 0;
              a < n;
              ++a
            )
              c[a] = e[l[a]];
            for (a = 0; a < n; ++a) e[a] = c[a];
          }
      }
      function d(t, e, a, i) {
        var o,
          c,
          d,
          u,
          f,
          p,
          h,
          v,
          m,
          b,
          y,
          g,
          _ = r.cells.length,
          x = !0;
        for (o = 0; o < _; ++o)
          if ((c = r.cells[o])) {
            ((d = c.site), (f = c.halfedges), (u = f.length));
            while (u--) r.edges[f[u]] || f.splice(u, 1);
            ((u = 0), (p = f.length));
            while (u < p)
              ((b = l(c, r.edges[f[u]])),
                (y = b[0]),
                (g = b[1]),
                (h = s(c, r.edges[f[++u % p]])),
                (v = h[0]),
                (m = h[1]),
                (Math.abs(y - v) > r.epsilon || Math.abs(g - m) > r.epsilon) &&
                  (f.splice(
                    u,
                    0,
                    r.edges.push(
                      (0, n.createBorderEdge)(
                        d,
                        b,
                        Math.abs(y - t) < r.epsilon && i - g > r.epsilon
                          ? [t, Math.abs(v - t) < r.epsilon ? m : i]
                          : Math.abs(g - i) < r.epsilon && a - y > r.epsilon
                            ? [Math.abs(m - i) < r.epsilon ? v : a, i]
                            : Math.abs(y - a) < r.epsilon && g - e > r.epsilon
                              ? [a, Math.abs(v - a) < r.epsilon ? m : e]
                              : Math.abs(g - e) < r.epsilon && y - t > r.epsilon
                                ? [Math.abs(m - e) < r.epsilon ? v : t, e]
                                : null,
                      ),
                    ) - 1,
                  ),
                  ++p));
            p && (x = !1);
          }
        if (x) {
          var w,
            k,
            O,
            C = 1 / 0;
          for (o = 0, x = null; o < _; ++o)
            (c = r.cells[o]) &&
              ((d = c.site),
              (w = d[0] - t),
              (k = d[1] - e),
              (O = w * w + k * k),
              O < C && ((C = O), (x = c)));
          if (x) {
            var P = [t, e],
              j = [t, i],
              M = [a, i],
              E = [a, e];
            x.halfedges.push(
              r.edges.push((0, n.createBorderEdge)((d = x.site), P, j)) - 1,
              r.edges.push((0, n.createBorderEdge)(d, j, M)) - 1,
              r.edges.push((0, n.createBorderEdge)(d, M, E)) - 1,
              r.edges.push((0, n.createBorderEdge)(d, E, P)) - 1,
            );
          }
        }
        for (o = 0; o < _; ++o)
          (c = r.cells[o]) && (c.halfedges.length || delete r.cells[o]);
      }
    },
    6358: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.attachCircle = s),
        (e.detachCircle = l),
        (e.firstCircle = void 0));
      var n = a(5340),
        r = a(4507),
        i = [];
      function o() {
        ((0, n.RedBlackNode)(this),
          (this.x = this.y = this.arc = this.site = this.cy = null));
      }
      function s(t) {
        var a = t.P,
          n = t.N;
        if (a && n) {
          var s = a.site,
            l = t.site,
            c = n.site;
          if (s !== c) {
            var d = l[0],
              u = l[1],
              f = s[0] - d,
              p = s[1] - u,
              h = c[0] - d,
              v = c[1] - u,
              m = 2 * (f * v - p * h);
            if (!(m >= -r.epsilon2)) {
              var b = f * f + p * p,
                y = h * h + v * v,
                g = (v * b - p * y) / m,
                _ = (f * y - h * b) / m,
                x = i.pop() || new o();
              ((x.arc = t),
                (x.site = l),
                (x.x = g + d),
                (x.y = (x.cy = _ + u) + Math.sqrt(g * g + _ * _)),
                (t.circle = x));
              var w = null,
                k = r.circles._;
              while (k)
                if (x.y < k.y || (x.y === k.y && x.x <= k.x)) {
                  if (!k.L) {
                    w = k.P;
                    break;
                  }
                  k = k.L;
                } else {
                  if (!k.R) {
                    w = k;
                    break;
                  }
                  k = k.R;
                }
              (r.circles.insert(w, x), w || (e.firstCircle = x));
            }
          }
        }
      }
      function l(t) {
        var a = t.circle;
        a &&
          (a.P || (e.firstCircle = a.N),
          r.circles.remove(a),
          i.push(a),
          (0, n.RedBlackNode)(a),
          (t.circle = null));
      }
    },
    6359: function (t, e, a) {
      "use strict";
      function n(t, e, a) {
        ((this.k = t), (this.x = e), (this.y = a));
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Transform = n),
        (e.default = i),
        (e.identity = void 0),
        (n.prototype = {
          constructor: n,
          scale: function (t) {
            return 1 === t ? this : new n(this.k * t, this.x, this.y);
          },
          translate: function (t, e) {
            return (0 === t) & (0 === e)
              ? this
              : new n(this.k, this.x + this.k * t, this.y + this.k * e);
          },
          apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y];
          },
          applyX: function (t) {
            return t * this.k + this.x;
          },
          applyY: function (t) {
            return t * this.k + this.y;
          },
          invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
          },
          invertX: function (t) {
            return (t - this.x) / this.k;
          },
          invertY: function (t) {
            return (t - this.y) / this.k;
          },
          rescaleX: function (t) {
            return t
              .copy()
              .domain(t.range().map(this.invertX, this).map(t.invert, t));
          },
          rescaleY: function (t) {
            return t
              .copy()
              .domain(t.range().map(this.invertY, this).map(t.invert, t));
          },
          toString: function () {
            return (
              "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            );
          },
        }));
      var r = (e.identity = new n(1, 0, 0));
      function i(t) {
        while (!t.__zoom) if (!(t = t.parentNode)) return r;
        return t.__zoom;
      }
      i.prototype = n.prototype;
    },
    6360: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(830);
      e.default = function (t, e, a) {
        void 0 === a && (a = n.MIN_BALANCE);
        const r = Number(t),
          i = 8,
          o = 8,
          s = 2;
        return "BTC" === e
          ? r.toFixed(i)
          : 0 === r
            ? "0"
            : r < a
              ? r.toFixed(o)
              : r.toFixed(s);
      };
    },
    8449: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version =
          e.unpkg =
          e.scripts =
          e.repository =
          e.name =
          e.module =
          e.main =
          e.license =
          e.keywords =
          e.jsdelivr =
          e.homepage =
          e.files =
          e.devDependencies =
          e.description =
          e.dependencies =
          e.author =
            void 0));
      ((e.name = "d3"),
        (e.version = "5.16.0"),
        (e.description = "Data-Driven Documents"),
        (e.keywords = ["dom", "visualization", "svg", "animation", "canvas"]),
        (e.homepage = "https://d3js.org"),
        (e.license = "BSD-3-Clause"),
        (e.author = {
          name: "Mike Bostock",
          url: "https://bost.ocks.org/mike",
        }),
        (e.main = "dist/d3.node.js"),
        (e.unpkg = "dist/d3.min.js"),
        (e.jsdelivr = "dist/d3.min.js"),
        (e.module = "index.js"),
        (e.repository = { type: "git", url: "https://github.com/d3/d3.git" }),
        (e.files = ["dist/**/*.js", "index.js"]),
        (e.scripts = {
          pretest:
            "rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c",
          test: "tape 'test/**/*-test.js'",
          prepublishOnly: "yarn test",
          postpublish:
            'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m "${npm_package_version}" && git tag -am "${npm_package_version}" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js',
        }),
        (e.devDependencies = {
          json2module: "0.0",
          rimraf: "2",
          rollup: "1",
          "rollup-plugin-ascii": "0.0",
          "rollup-plugin-node-resolve": "3",
          "rollup-plugin-terser": "5",
          tape: "4",
        }),
        (e.dependencies = {
          "d3-array": "1",
          "d3-axis": "1",
          "d3-brush": "1",
          "d3-chord": "1",
          "d3-collection": "1",
          "d3-color": "1",
          "d3-contour": "1",
          "d3-dispatch": "1",
          "d3-drag": "1",
          "d3-dsv": "1",
          "d3-ease": "1",
          "d3-fetch": "1",
          "d3-force": "1",
          "d3-format": "1",
          "d3-geo": "1",
          "d3-hierarchy": "1",
          "d3-interpolate": "1",
          "d3-path": "1",
          "d3-polygon": "1",
          "d3-quadtree": "1",
          "d3-random": "1",
          "d3-scale": "2",
          "d3-scale-chromatic": "1",
          "d3-selection": "1",
          "d3-shape": "1",
          "d3-time": "1",
          "d3-time-format": "2",
          "d3-timer": "1",
          "d3-transition": "1",
          "d3-voronoi": "1",
          "d3-zoom": "1",
        }));
    },
    8526: function (t, e, a) {
      "use strict";
      var n = a(9),
        r = a(3066),
        i = n(a(8527)),
        o = n(a(8530));
      ((r.selection.prototype.interrupt = i.default),
        (r.selection.prototype.transition = o.default));
    },
    8527: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
      var r = n(a(6300));
      function i(t) {
        return this.each(function () {
          (0, r.default)(this, t);
        });
      }
    },
    8530: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = d));
      var r = a(3592),
        i = n(a(3188)),
        o = a(6302),
        s = a(4725),
        l = { time: null, delay: 0, duration: 250, ease: o.easeCubicInOut };
      function c(t, e) {
        var a;
        while (!(a = t.__transition) || !(a = a[e]))
          if (!(t = t.parentNode)) return ((l.time = (0, s.now)()), l);
        return a;
      }
      function d(t) {
        var e, a;
        t instanceof r.Transition
          ? ((e = t._id), (t = t._name))
          : ((e = (0, r.newId)()),
            ((a = l).time = (0, s.now)()),
            (t = null == t ? null : t + ""));
        for (var n = this._groups, o = n.length, d = 0; d < o; ++d)
          for (var u, f = n[d], p = f.length, h = 0; h < p; ++h)
            (u = f[h]) && (0, i.default)(u, t, e, h, f, a || c(u, e));
        return new r.Transition(n, this._parents, t, e);
      }
    },
    8531: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = h));
      var r = a(3380),
        i = a(3066),
        o = a(4726),
        s = n(a(6301));
      function l(t) {
        return function () {
          this.removeAttribute(t);
        };
      }
      function c(t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function d(t, e, a) {
        var n,
          r,
          i = a + "";
        return function () {
          var o = this.getAttribute(t);
          return o === i ? null : o === n ? r : (r = e((n = o), a));
        };
      }
      function u(t, e, a) {
        var n,
          r,
          i = a + "";
        return function () {
          var o = this.getAttributeNS(t.space, t.local);
          return o === i ? null : o === n ? r : (r = e((n = o), a));
        };
      }
      function f(t, e, a) {
        var n, r, i;
        return function () {
          var o,
            s,
            l = a(this);
          if (null != l)
            return (
              (o = this.getAttribute(t)),
              (s = l + ""),
              o === s
                ? null
                : o === n && s === r
                  ? i
                  : ((r = s), (i = e((n = o), l)))
            );
          this.removeAttribute(t);
        };
      }
      function p(t, e, a) {
        var n, r, i;
        return function () {
          var o,
            s,
            l = a(this);
          if (null != l)
            return (
              (o = this.getAttributeNS(t.space, t.local)),
              (s = l + ""),
              o === s
                ? null
                : o === n && s === r
                  ? i
                  : ((r = s), (i = e((n = o), l)))
            );
          this.removeAttributeNS(t.space, t.local);
        };
      }
      function h(t, e) {
        var a = (0, i.namespace)(t),
          n = "transform" === a ? r.interpolateTransformSvg : s.default;
        return this.attrTween(
          t,
          "function" === typeof e
            ? (a.local ? p : f)(a, n, (0, o.tweenValue)(this, "attr." + t, e))
            : null == e
              ? (a.local ? c : l)(a)
              : (a.local ? u : d)(a, n, e),
        );
      }
    },
    8532: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = l));
      var n = a(3066);
      function r(t, e) {
        return function (a) {
          this.setAttribute(t, e.call(this, a));
        };
      }
      function i(t, e) {
        return function (a) {
          this.setAttributeNS(t.space, t.local, e.call(this, a));
        };
      }
      function o(t, e) {
        var a, n;
        function r() {
          var r = e.apply(this, arguments);
          return (r !== n && (a = (n = r) && i(t, r)), a);
        }
        return ((r._value = e), r);
      }
      function s(t, e) {
        var a, n;
        function i() {
          var i = e.apply(this, arguments);
          return (i !== n && (a = (n = i) && r(t, i)), a);
        }
        return ((i._value = e), i);
      }
      function l(t, e) {
        var a = "attr." + t;
        if (arguments.length < 2) return (a = this.tween(a)) && a._value;
        if (null == e) return this.tween(a, null);
        if ("function" !== typeof e) throw new Error();
        var r = (0, n.namespace)(t);
        return this.tween(a, (r.local ? o : s)(r, e));
      }
    },
    8533: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = a(3188);
      function r(t, e) {
        return function () {
          (0, n.init)(this, t).delay = +e.apply(this, arguments);
        };
      }
      function i(t, e) {
        return (
          (e = +e),
          function () {
            (0, n.init)(this, t).delay = e;
          }
        );
      }
      function o(t) {
        var e = this._id;
        return arguments.length
          ? this.each(("function" === typeof t ? r : i)(e, t))
          : (0, n.get)(this.node(), e).delay;
      }
    },
    8534: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = a(3188);
      function r(t, e) {
        return function () {
          (0, n.set)(this, t).duration = +e.apply(this, arguments);
        };
      }
      function i(t, e) {
        return (
          (e = +e),
          function () {
            (0, n.set)(this, t).duration = e;
          }
        );
      }
      function o(t) {
        var e = this._id;
        return arguments.length
          ? this.each(("function" === typeof t ? r : i)(e, t))
          : (0, n.get)(this.node(), e).duration;
      }
    },
    8535: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
      var n = a(3188);
      function r(t, e) {
        if ("function" !== typeof e) throw new Error();
        return function () {
          (0, n.set)(this, t).ease = e;
        };
      }
      function i(t) {
        var e = this._id;
        return arguments.length
          ? this.each(r(e, t))
          : (0, n.get)(this.node(), e).ease;
      }
    },
    8536: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
      var n = a(3066),
        r = a(3592);
      function i(t) {
        "function" !== typeof t && (t = (0, n.matcher)(t));
        for (
          var e = this._groups, a = e.length, i = new Array(a), o = 0;
          o < a;
          ++o
        )
          for (
            var s, l = e[o], c = l.length, d = (i[o] = []), u = 0;
            u < c;
            ++u
          )
            (s = l[u]) && t.call(s, s.__data__, u, l) && d.push(s);
        return new r.Transition(i, this._parents, this._name, this._id);
      }
    },
    8537: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r));
      var n = a(3592);
      function r(t) {
        if (t._id !== this._id) throw new Error();
        for (
          var e = this._groups,
            a = t._groups,
            r = e.length,
            i = a.length,
            o = Math.min(r, i),
            s = new Array(r),
            l = 0;
          l < o;
          ++l
        )
          for (
            var c,
              d = e[l],
              u = a[l],
              f = d.length,
              p = (s[l] = new Array(f)),
              h = 0;
            h < f;
            ++h
          )
            (c = d[h] || u[h]) && (p[h] = c);
        for (; l < r; ++l) s[l] = e[l];
        return new n.Transition(s, this._parents, this._name, this._id);
      }
    },
    8538: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = a(3188);
      function r(t) {
        return (t + "")
          .trim()
          .split(/^|\s+/)
          .every(function (t) {
            var e = t.indexOf(".");
            return (e >= 0 && (t = t.slice(0, e)), !t || "start" === t);
          });
      }
      function i(t, e, a) {
        var i,
          o,
          s = r(e) ? n.init : n.set;
        return function () {
          var n = s(this, t),
            r = n.on;
          (r !== i && (o = (i = r).copy()).on(e, a), (n.on = o));
        };
      }
      function o(t, e) {
        var a = this._id;
        return arguments.length < 2
          ? (0, n.get)(this.node(), a).on.on(t)
          : this.each(i(a, t, e));
      }
    },
    8539: function (t, e, a) {
      "use strict";
      function n(t) {
        return function () {
          var e = this.parentNode;
          for (var a in this.__transition) if (+a !== t) return;
          e && e.removeChild(this);
        };
      }
      function r() {
        return this.on("end.remove", n(this._id));
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r));
    },
    8540: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = s));
      var n = a(3066),
        r = a(3592),
        i = o(a(3188));
      function o(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
      function s(t) {
        var e = this._name,
          a = this._id;
        "function" !== typeof t && (t = (0, n.selector)(t));
        for (
          var o = this._groups, s = o.length, l = new Array(s), c = 0;
          c < s;
          ++c
        )
          for (
            var d, u, f = o[c], p = f.length, h = (l[c] = new Array(p)), v = 0;
            v < p;
            ++v
          )
            (d = f[v]) &&
              (u = t.call(d, d.__data__, v, f)) &&
              ("__data__" in d && (u.__data__ = d.__data__),
              (h[v] = u),
              (0, i.default)(h[v], e, a, v, h, (0, i.get)(d, a)));
        return new r.Transition(l, this._parents, e, a);
      }
    },
    8541: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = s));
      var n = a(3066),
        r = a(3592),
        i = o(a(3188));
      function o(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
      function s(t) {
        var e = this._name,
          a = this._id;
        "function" !== typeof t && (t = (0, n.selectorAll)(t));
        for (
          var o = this._groups, s = o.length, l = [], c = [], d = 0;
          d < s;
          ++d
        )
          for (var u, f = o[d], p = f.length, h = 0; h < p; ++h)
            if ((u = f[h])) {
              for (
                var v,
                  m = t.call(u, u.__data__, h, f),
                  b = (0, i.get)(u, a),
                  y = 0,
                  g = m.length;
                y < g;
                ++y
              )
                (v = m[y]) && (0, i.default)(v, e, a, y, m, b);
              (l.push(m), c.push(u));
            }
        return new r.Transition(l, c, e, a);
      }
    },
    8542: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
      var n = a(3066),
        r = n.selection.prototype.constructor;
      function i() {
        return new r(this._groups, this._parents);
      }
    },
    8543: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = h));
      var r = a(3380),
        i = a(3066),
        o = a(3188),
        s = a(4726),
        l = n(a(6301));
      function c(t, e) {
        var a, n, r;
        return function () {
          var o = (0, i.style)(this, t),
            s = (this.style.removeProperty(t), (0, i.style)(this, t));
          return o === s
            ? null
            : o === a && s === n
              ? r
              : (r = e((a = o), (n = s)));
        };
      }
      function d(t) {
        return function () {
          this.style.removeProperty(t);
        };
      }
      function u(t, e, a) {
        var n,
          r,
          o = a + "";
        return function () {
          var s = (0, i.style)(this, t);
          return s === o ? null : s === n ? r : (r = e((n = s), a));
        };
      }
      function f(t, e, a) {
        var n, r, o;
        return function () {
          var s = (0, i.style)(this, t),
            l = a(this),
            c = l + "";
          return (
            null == l &&
              (this.style.removeProperty(t), (c = l = (0, i.style)(this, t))),
            s === c
              ? null
              : s === n && c === r
                ? o
                : ((r = c), (o = e((n = s), l)))
          );
        };
      }
      function p(t, e) {
        var a,
          n,
          r,
          i,
          s = "style." + e,
          l = "end." + s;
        return function () {
          var c = (0, o.set)(this, t),
            u = c.on,
            f = null == c.value[s] ? i || (i = d(e)) : void 0;
          ((u === a && r === f) || (n = (a = u).copy()).on(l, (r = f)),
            (c.on = n));
        };
      }
      function h(t, e, a) {
        var n =
          "transform" === (t += "") ? r.interpolateTransformCss : l.default;
        return null == e
          ? this.styleTween(t, c(t, n)).on("end.style." + t, d(t))
          : "function" === typeof e
            ? this.styleTween(
                t,
                f(t, n, (0, s.tweenValue)(this, "style." + t, e)),
              ).each(p(this._id, t))
            : this.styleTween(t, u(t, n, e), a).on("end.style." + t, null);
      }
    },
    8544: function (t, e, a) {
      "use strict";
      function n(t, e, a) {
        return function (n) {
          this.style.setProperty(t, e.call(this, n), a);
        };
      }
      function r(t, e, a) {
        var r, i;
        function o() {
          var o = e.apply(this, arguments);
          return (o !== i && (r = (i = o) && n(t, o, a)), r);
        }
        return ((o._value = e), o);
      }
      function i(t, e, a) {
        var n = "style." + (t += "");
        if (arguments.length < 2) return (n = this.tween(n)) && n._value;
        if (null == e) return this.tween(n, null);
        if ("function" !== typeof e) throw new Error();
        return this.tween(n, r(t, e, null == a ? "" : a));
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
    },
    8545: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = a(4726);
      function r(t) {
        return function () {
          this.textContent = t;
        };
      }
      function i(t) {
        return function () {
          var e = t(this);
          this.textContent = null == e ? "" : e;
        };
      }
      function o(t) {
        return this.tween(
          "text",
          "function" === typeof t
            ? i((0, n.tweenValue)(this, "text", t))
            : r(null == t ? "" : t + ""),
        );
      }
    },
    8546: function (t, e, a) {
      "use strict";
      function n(t) {
        return function (e) {
          this.textContent = t.call(this, e);
        };
      }
      function r(t) {
        var e, a;
        function r() {
          var r = t.apply(this, arguments);
          return (r !== a && (e = (a = r) && n(r)), e);
        }
        return ((r._value = t), r);
      }
      function i(t) {
        var e = "text";
        if (arguments.length < 1) return (e = this.tween(e)) && e._value;
        if (null == t) return this.tween(e, null);
        if ("function" !== typeof t) throw new Error();
        return this.tween(e, r(t));
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = i));
    },
    8547: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = a(3592),
        r = i(a(3188));
      function i(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (i = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
      function o() {
        for (
          var t = this._name,
            e = this._id,
            a = (0, n.newId)(),
            i = this._groups,
            o = i.length,
            s = 0;
          s < o;
          ++s
        )
          for (var l, c = i[s], d = c.length, u = 0; u < d; ++u)
            if ((l = c[u])) {
              var f = (0, r.get)(l, e);
              (0, r.default)(l, t, a, u, c, {
                time: f.time + f.delay + f.duration,
                delay: 0,
                duration: f.duration,
                ease: f.ease,
              });
            }
        return new n.Transition(i, this._parents, t, a);
      }
    },
    8548: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = r));
      var n = a(3188);
      function r() {
        var t,
          e,
          a = this,
          r = a._id,
          i = a.size();
        return new Promise(function (o, s) {
          var l = { value: s },
            c = {
              value: function () {
                0 === --i && o();
              },
            };
          a.each(function () {
            var a = (0, n.set)(this, r),
              i = a.on;
            (i !== t &&
              ((e = (t = i).copy()),
              e._.cancel.push(l),
              e._.interrupt.push(l),
              e._.end.push(c)),
              (a.on = e));
          });
        });
      }
    },
    8559: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = o));
      var n = a(3592),
        r = a(3188),
        i = [null];
      function o(t, e) {
        var a,
          o,
          s = t.__transition;
        if (s)
          for (o in ((e = null == e ? null : e + ""), s))
            if ((a = s[o]).state > r.SCHEDULED && a.name === e)
              return new n.Transition([[t]], i, e, +o);
        return null;
      }
    },
    8779: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "voronoi", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }));
      var r = n(a(8780));
    },
    8780: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = l));
      var r = n(a(8781)),
        i = a(8782),
        o = s(a(4507));
      function s(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (s = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
      function l() {
        var t = i.x,
          e = i.y,
          a = null;
        function n(n) {
          return new o.default(
            n.map(function (a, r) {
              var i = [
                Math.round(t(a, r, n) / o.epsilon) * o.epsilon,
                Math.round(e(a, r, n) / o.epsilon) * o.epsilon,
              ];
              return ((i.index = r), (i.data = a), i);
            }),
            a,
          );
        }
        return (
          (n.polygons = function (t) {
            return n(t).polygons();
          }),
          (n.links = function (t) {
            return n(t).links();
          }),
          (n.triangles = function (t) {
            return n(t).triangles();
          }),
          (n.x = function (e) {
            return arguments.length
              ? ((t = "function" === typeof e ? e : (0, r.default)(+e)), n)
              : t;
          }),
          (n.y = function (t) {
            return arguments.length
              ? ((e = "function" === typeof t ? t : (0, r.default)(+t)), n)
              : e;
          }),
          (n.extent = function (t) {
            return arguments.length
              ? ((a =
                  null == t
                    ? null
                    : [
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ]),
                n)
              : a && [
                  [a[0][0], a[0][1]],
                  [a[1][0], a[1][1]],
                ];
          }),
          (n.size = function (t) {
            return arguments.length
              ? ((a =
                  null == t
                    ? null
                    : [
                        [0, 0],
                        [+t[0], +t[1]],
                      ]),
                n)
              : a && [a[1][0] - a[0][0], a[1][1] - a[0][1]];
          }),
          n
        );
      }
    },
    8781: function (t, e, a) {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n));
    },
    8782: function (t, e, a) {
      "use strict";
      function n(t) {
        return t[0];
      }
      function r(t) {
        return t[1];
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.x = n),
        (e.y = r));
    },
    8783: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.addBeach = p),
        (e.removeBeach = f));
      var n = a(5340),
        r = a(6357),
        i = a(6358),
        o = a(5341),
        s = a(4507),
        l = [];
      function c() {
        ((0, n.RedBlackNode)(this),
          (this.edge = this.site = this.circle = null));
      }
      function d(t) {
        var e = l.pop() || new c();
        return ((e.site = t), e);
      }
      function u(t) {
        ((0, i.detachCircle)(t),
          s.beaches.remove(t),
          l.push(t),
          (0, n.RedBlackNode)(t));
      }
      function f(t) {
        var e = t.circle,
          a = e.x,
          n = e.cy,
          r = [a, n],
          l = t.P,
          c = t.N,
          d = [t];
        u(t);
        var f = l;
        while (
          f.circle &&
          Math.abs(a - f.circle.x) < s.epsilon &&
          Math.abs(n - f.circle.cy) < s.epsilon
        )
          ((l = f.P), d.unshift(f), u(f), (f = l));
        (d.unshift(f), (0, i.detachCircle)(f));
        var p = c;
        while (
          p.circle &&
          Math.abs(a - p.circle.x) < s.epsilon &&
          Math.abs(n - p.circle.cy) < s.epsilon
        )
          ((c = p.N), d.push(p), u(p), (p = c));
        (d.push(p), (0, i.detachCircle)(p));
        var h,
          v = d.length;
        for (h = 1; h < v; ++h)
          ((p = d[h]),
            (f = d[h - 1]),
            (0, o.setEdgeEnd)(p.edge, f.site, p.site, r));
        ((f = d[0]),
          (p = d[v - 1]),
          (p.edge = (0, o.createEdge)(f.site, p.site, null, r)),
          (0, i.attachCircle)(f),
          (0, i.attachCircle)(p));
      }
      function p(t) {
        var e,
          a,
          n,
          l,
          c = t[0],
          u = t[1],
          f = s.beaches._;
        while (f)
          if (((n = h(f, u) - c), n > s.epsilon)) f = f.L;
          else {
            if (((l = c - v(f, u)), !(l > s.epsilon))) {
              n > -s.epsilon
                ? ((e = f.P), (a = f))
                : l > -s.epsilon
                  ? ((e = f), (a = f.N))
                  : (e = a = f);
              break;
            }
            if (!f.R) {
              e = f;
              break;
            }
            f = f.R;
          }
        (0, r.createCell)(t);
        var p = d(t);
        if ((s.beaches.insert(e, p), e || a)) {
          if (e === a)
            return (
              (0, i.detachCircle)(e),
              (a = d(e.site)),
              s.beaches.insert(p, a),
              (p.edge = a.edge = (0, o.createEdge)(e.site, p.site)),
              (0, i.attachCircle)(e),
              void (0, i.attachCircle)(a)
            );
          if (a) {
            ((0, i.detachCircle)(e), (0, i.detachCircle)(a));
            var m = e.site,
              b = m[0],
              y = m[1],
              g = t[0] - b,
              _ = t[1] - y,
              x = a.site,
              w = x[0] - b,
              k = x[1] - y,
              O = 2 * (g * k - _ * w),
              C = g * g + _ * _,
              P = w * w + k * k,
              j = [(k * C - _ * P) / O + b, (g * P - w * C) / O + y];
            ((0, o.setEdgeEnd)(a.edge, m, x, j),
              (p.edge = (0, o.createEdge)(m, t, null, j)),
              (a.edge = (0, o.createEdge)(t, x, null, j)),
              (0, i.attachCircle)(e),
              (0, i.attachCircle)(a));
          } else p.edge = (0, o.createEdge)(e.site, p.site);
        }
      }
      function h(t, e) {
        var a = t.site,
          n = a[0],
          r = a[1],
          i = r - e;
        if (!i) return n;
        var o = t.P;
        if (!o) return -1 / 0;
        a = o.site;
        var s = a[0],
          l = a[1],
          c = l - e;
        if (!c) return s;
        var d = s - n,
          u = 1 / i - 1 / c,
          f = d / c;
        return u
          ? (-f +
              Math.sqrt(
                f * f - 2 * u * ((d * d) / (-2 * c) - l + c / 2 + r - i / 2),
              )) /
              u +
              n
          : (n + s) / 2;
      }
      function v(t, e) {
        var a = t.N;
        if (a) return h(a, e);
        var n = t.site;
        return n[1] === e ? n[0] : 1 / 0;
      }
    },
    8784: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "zoom", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(e, "zoomIdentity", {
          enumerable: !0,
          get: function () {
            return i.identity;
          },
        }),
        Object.defineProperty(e, "zoomTransform", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }));
      var r = n(a(8785)),
        i = o(a(6359));
      function o(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (o = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
    },
    8785: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = _));
      var r = a(3918),
        i = a(5302),
        o = a(3380),
        s = a(3066),
        l = a(5314),
        c = n(a(8786)),
        d = n(a(8787)),
        u = a(6359),
        f = p(a(8788));
      function p(t, e) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (p = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var r,
            i,
            o = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return o;
          if ((r = e ? n : a)) {
            if (r.has(t)) return r.get(t);
            r.set(t, o);
          }
          for (const a in t)
            "default" !== a &&
              {}.hasOwnProperty.call(t, a) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, a)) &&
              (i.get || i.set)
                ? r(o, a, i)
                : (o[a] = t[a]));
          return o;
        })(t, e);
      }
      function h() {
        return !s.event.ctrlKey && !s.event.button;
      }
      function v() {
        var t = this;
        return t instanceof SVGElement
          ? ((t = t.ownerSVGElement || t),
            t.hasAttribute("viewBox")
              ? ((t = t.viewBox.baseVal),
                [
                  [t.x, t.y],
                  [t.x + t.width, t.y + t.height],
                ])
              : [
                  [0, 0],
                  [t.width.baseVal.value, t.height.baseVal.value],
                ])
          : [
              [0, 0],
              [t.clientWidth, t.clientHeight],
            ];
      }
      function m() {
        return this.__zoom || u.identity;
      }
      function b() {
        return (
          -s.event.deltaY *
          (1 === s.event.deltaMode ? 0.05 : s.event.deltaMode ? 1 : 0.002)
        );
      }
      function y() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function g(t, e, a) {
        var n = t.invertX(e[0][0]) - a[0][0],
          r = t.invertX(e[1][0]) - a[1][0],
          i = t.invertY(e[0][1]) - a[0][1],
          o = t.invertY(e[1][1]) - a[1][1];
        return t.translate(
          r > n ? (n + r) / 2 : Math.min(0, n) || Math.max(0, r),
          o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o),
        );
      }
      function _() {
        var t,
          e,
          a = h,
          n = v,
          p = g,
          _ = b,
          x = y,
          w = [0, 1 / 0],
          k = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          O = 250,
          C = o.interpolateZoom,
          P = (0, r.dispatch)("start", "zoom", "end"),
          j = 500,
          M = 150,
          E = 0;
        function N(t) {
          t.property("__zoom", m)
            .on("wheel.zoom", A)
            .on("mousedown.zoom", $)
            .on("dblclick.zoom", I)
            .filter(x)
            .on("touchstart.zoom", B)
            .on("touchmove.zoom", F)
            .on("touchend.zoom touchcancel.zoom", Y)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function z(t, e) {
          return (
            (e = Math.max(w[0], Math.min(w[1], e))),
            e === t.k ? t : new u.Transform(e, t.x, t.y)
          );
        }
        function T(t, e, a) {
          var n = e[0] - a[0] * t.k,
            r = e[1] - a[1] * t.k;
          return n === t.x && r === t.y ? t : new u.Transform(t.k, n, r);
        }
        function L(t) {
          return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
        }
        function D(t, e, a) {
          t.on("start.zoom", function () {
            S(this, arguments).start();
          })
            .on("interrupt.zoom end.zoom", function () {
              S(this, arguments).end();
            })
            .tween("zoom", function () {
              var t = this,
                r = arguments,
                i = S(t, r),
                o = n.apply(t, r),
                s =
                  null == a
                    ? L(o)
                    : "function" === typeof a
                      ? a.apply(t, r)
                      : a,
                l = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
                c = t.__zoom,
                d = "function" === typeof e ? e.apply(t, r) : e,
                f = C(c.invert(s).concat(l / c.k), d.invert(s).concat(l / d.k));
              return function (t) {
                if (1 === t) t = d;
                else {
                  var e = f(t),
                    a = l / e[2];
                  t = new u.Transform(a, s[0] - e[0] * a, s[1] - e[1] * a);
                }
                i.zoom(null, t);
              };
            });
        }
        function S(t, e, a) {
          return (!a && t.__zooming) || new R(t, e);
        }
        function R(t, e) {
          ((this.that = t),
            (this.args = e),
            (this.active = 0),
            (this.extent = n.apply(t, e)),
            (this.taps = 0));
        }
        function A() {
          if (a.apply(this, arguments)) {
            var t = S(this, arguments),
              e = this.__zoom,
              n = Math.max(
                w[0],
                Math.min(w[1], e.k * Math.pow(2, _.apply(this, arguments))),
              ),
              r = (0, s.mouse)(this);
            if (t.wheel)
              ((t.mouse[0][0] === r[0] && t.mouse[0][1] === r[1]) ||
                (t.mouse[1] = e.invert((t.mouse[0] = r))),
                clearTimeout(t.wheel));
            else {
              if (e.k === n) return;
              ((t.mouse = [r, e.invert(r)]), (0, l.interrupt)(this), t.start());
            }
            ((0, f.default)(),
              (t.wheel = setTimeout(i, M)),
              t.zoom(
                "mouse",
                p(T(z(e, n), t.mouse[0], t.mouse[1]), t.extent, k),
              ));
          }
          function i() {
            ((t.wheel = null), t.end());
          }
        }
        function $() {
          if (!e && a.apply(this, arguments)) {
            var t = S(this, arguments, !0),
              n = (0, s.select)(s.event.view)
                .on("mousemove.zoom", d, !0)
                .on("mouseup.zoom", u, !0),
              r = (0, s.mouse)(this),
              o = s.event.clientX,
              c = s.event.clientY;
            ((0, i.dragDisable)(s.event.view),
              (0, f.nopropagation)(),
              (t.mouse = [r, this.__zoom.invert(r)]),
              (0, l.interrupt)(this),
              t.start());
          }
          function d() {
            if (((0, f.default)(), !t.moved)) {
              var e = s.event.clientX - o,
                a = s.event.clientY - c;
              t.moved = e * e + a * a > E;
            }
            t.zoom(
              "mouse",
              p(
                T(
                  t.that.__zoom,
                  (t.mouse[0] = (0, s.mouse)(t.that)),
                  t.mouse[1],
                ),
                t.extent,
                k,
              ),
            );
          }
          function u() {
            (n.on("mousemove.zoom mouseup.zoom", null),
              (0, i.dragEnable)(s.event.view, t.moved),
              (0, f.default)(),
              t.end());
          }
        }
        function I() {
          if (a.apply(this, arguments)) {
            var t = this.__zoom,
              e = (0, s.mouse)(this),
              r = t.invert(e),
              i = t.k * (s.event.shiftKey ? 0.5 : 2),
              o = p(T(z(t, i), e, r), n.apply(this, arguments), k);
            ((0, f.default)(),
              O > 0
                ? (0, s.select)(this).transition().duration(O).call(D, o, e)
                : (0, s.select)(this).call(N.transform, o));
          }
        }
        function B() {
          if (a.apply(this, arguments)) {
            var e,
              n,
              r,
              i,
              o = s.event.touches,
              c = o.length,
              d = S(this, arguments, s.event.changedTouches.length === c);
            for ((0, f.nopropagation)(), n = 0; n < c; ++n)
              ((r = o[n]),
                (i = (0, s.touch)(this, o, r.identifier)),
                (i = [i, this.__zoom.invert(i), r.identifier]),
                d.touch0
                  ? d.touch1 ||
                    d.touch0[2] === i[2] ||
                    ((d.touch1 = i), (d.taps = 0))
                  : ((d.touch0 = i), (e = !0), (d.taps = 1 + !!t)));
            (t && (t = clearTimeout(t)),
              e &&
                (d.taps < 2 &&
                  (t = setTimeout(function () {
                    t = null;
                  }, j)),
                (0, l.interrupt)(this),
                d.start()));
          }
        }
        function F() {
          if (this.__zooming) {
            var e,
              a,
              n,
              r,
              i = S(this, arguments),
              o = s.event.changedTouches,
              l = o.length;
            for (
              (0, f.default)(), t && (t = clearTimeout(t)), i.taps = 0, e = 0;
              e < l;
              ++e
            )
              ((a = o[e]),
                (n = (0, s.touch)(this, o, a.identifier)),
                i.touch0 && i.touch0[2] === a.identifier
                  ? (i.touch0[0] = n)
                  : i.touch1 &&
                    i.touch1[2] === a.identifier &&
                    (i.touch1[0] = n));
            if (((a = i.that.__zoom), i.touch1)) {
              var c = i.touch0[0],
                d = i.touch0[1],
                u = i.touch1[0],
                h = i.touch1[1],
                v = (v = u[0] - c[0]) * v + (v = u[1] - c[1]) * v,
                m = (m = h[0] - d[0]) * m + (m = h[1] - d[1]) * m;
              ((a = z(a, Math.sqrt(v / m))),
                (n = [(c[0] + u[0]) / 2, (c[1] + u[1]) / 2]),
                (r = [(d[0] + h[0]) / 2, (d[1] + h[1]) / 2]));
            } else {
              if (!i.touch0) return;
              ((n = i.touch0[0]), (r = i.touch0[1]));
            }
            i.zoom("touch", p(T(a, n, r), i.extent, k));
          }
        }
        function Y() {
          if (this.__zooming) {
            var t,
              a,
              n = S(this, arguments),
              r = s.event.changedTouches,
              i = r.length;
            for (
              (0, f.nopropagation)(),
                e && clearTimeout(e),
                e = setTimeout(function () {
                  e = null;
                }, j),
                t = 0;
              t < i;
              ++t
            )
              ((a = r[t]),
                n.touch0 && n.touch0[2] === a.identifier
                  ? delete n.touch0
                  : n.touch1 &&
                    n.touch1[2] === a.identifier &&
                    delete n.touch1);
            if (
              (n.touch1 &&
                !n.touch0 &&
                ((n.touch0 = n.touch1), delete n.touch1),
              n.touch0)
            )
              n.touch0[1] = this.__zoom.invert(n.touch0[0]);
            else if ((n.end(), 2 === n.taps)) {
              var o = (0, s.select)(this).on("dblclick.zoom");
              o && o.apply(this, arguments);
            }
          }
        }
        return (
          (N.transform = function (t, e, a) {
            var n = t.selection ? t.selection() : t;
            (n.property("__zoom", m),
              t !== n
                ? D(t, e, a)
                : n.interrupt().each(function () {
                    S(this, arguments)
                      .start()
                      .zoom(
                        null,
                        "function" === typeof e ? e.apply(this, arguments) : e,
                      )
                      .end();
                  }));
          }),
          (N.scaleBy = function (t, e, a) {
            N.scaleTo(
              t,
              function () {
                var t = this.__zoom.k,
                  a = "function" === typeof e ? e.apply(this, arguments) : e;
                return t * a;
              },
              a,
            );
          }),
          (N.scaleTo = function (t, e, a) {
            N.transform(
              t,
              function () {
                var t = n.apply(this, arguments),
                  r = this.__zoom,
                  i =
                    null == a
                      ? L(t)
                      : "function" === typeof a
                        ? a.apply(this, arguments)
                        : a,
                  o = r.invert(i),
                  s = "function" === typeof e ? e.apply(this, arguments) : e;
                return p(T(z(r, s), i, o), t, k);
              },
              a,
            );
          }),
          (N.translateBy = function (t, e, a) {
            N.transform(t, function () {
              return p(
                this.__zoom.translate(
                  "function" === typeof e ? e.apply(this, arguments) : e,
                  "function" === typeof a ? a.apply(this, arguments) : a,
                ),
                n.apply(this, arguments),
                k,
              );
            });
          }),
          (N.translateTo = function (t, e, a, r) {
            N.transform(
              t,
              function () {
                var t = n.apply(this, arguments),
                  i = this.__zoom,
                  o =
                    null == r
                      ? L(t)
                      : "function" === typeof r
                        ? r.apply(this, arguments)
                        : r;
                return p(
                  u.identity
                    .translate(o[0], o[1])
                    .scale(i.k)
                    .translate(
                      "function" === typeof e ? -e.apply(this, arguments) : -e,
                      "function" === typeof a ? -a.apply(this, arguments) : -a,
                    ),
                  t,
                  k,
                );
              },
              r,
            );
          }),
          (R.prototype = {
            start: function () {
              return (
                1 === ++this.active &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (t, e) {
              return (
                this.mouse &&
                  "mouse" !== t &&
                  (this.mouse[1] = e.invert(this.mouse[0])),
                this.touch0 &&
                  "touch" !== t &&
                  (this.touch0[1] = e.invert(this.touch0[0])),
                this.touch1 &&
                  "touch" !== t &&
                  (this.touch1[1] = e.invert(this.touch1[0])),
                (this.that.__zoom = e),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                0 === --this.active &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (t) {
              (0, s.customEvent)(
                new d.default(N, t, this.that.__zoom),
                P.apply,
                P,
                [t, this.that, this.args],
              );
            },
          }),
          (N.wheelDelta = function (t) {
            return arguments.length
              ? ((_ = "function" === typeof t ? t : (0, c.default)(+t)), N)
              : _;
          }),
          (N.filter = function (t) {
            return arguments.length
              ? ((a = "function" === typeof t ? t : (0, c.default)(!!t)), N)
              : a;
          }),
          (N.touchable = function (t) {
            return arguments.length
              ? ((x = "function" === typeof t ? t : (0, c.default)(!!t)), N)
              : x;
          }),
          (N.extent = function (t) {
            return arguments.length
              ? ((n =
                  "function" === typeof t
                    ? t
                    : (0, c.default)([
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]],
                      ])),
                N)
              : n;
          }),
          (N.scaleExtent = function (t) {
            return arguments.length
              ? ((w[0] = +t[0]), (w[1] = +t[1]), N)
              : [w[0], w[1]];
          }),
          (N.translateExtent = function (t) {
            return arguments.length
              ? ((k[0][0] = +t[0][0]),
                (k[1][0] = +t[1][0]),
                (k[0][1] = +t[0][1]),
                (k[1][1] = +t[1][1]),
                N)
              : [
                  [k[0][0], k[0][1]],
                  [k[1][0], k[1][1]],
                ];
          }),
          (N.constrain = function (t) {
            return arguments.length ? ((p = t), N) : p;
          }),
          (N.duration = function (t) {
            return arguments.length ? ((O = +t), N) : O;
          }),
          (N.interpolate = function (t) {
            return arguments.length ? ((C = t), N) : C;
          }),
          (N.on = function () {
            var t = P.on.apply(P, arguments);
            return t === P ? N : t;
          }),
          (N.clickDistance = function (t) {
            return arguments.length ? ((E = (t = +t) * t), N) : Math.sqrt(E);
          }),
          N
        );
      }
    },
    8786: function (t, e, a) {
      "use strict";
      function n(t) {
        return function () {
          return t;
        };
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n));
    },
    8787: function (t, e, a) {
      "use strict";
      function n(t, e, a) {
        ((this.target = t), (this.type = e), (this.transform = a));
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = n));
    },
    8788: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = i),
        (e.nopropagation = r));
      var n = a(3066);
      function r() {
        n.event.stopImmediatePropagation();
      }
      function i() {
        (n.event.preventDefault(), n.event.stopImmediatePropagation());
      }
    },
    8789: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              ref: t.chartWrapId,
              class: "chart-wrap " + t.chartWrapId,
              attrs: { "data-test-id": "coin_chart" },
            },
            [
              a("CoinIcon", {
                staticClass: "coin-hidden",
                attrs: { wallet: t.coin },
              }),
              t._v(" "),
              t.zoomSettings.length > 0 && t.activeZoom
                ? a(
                    "div",
                    { staticClass: "chart-zoom" },
                    t._l(t.zoomSettings, function (e, n) {
                      return a(
                        "div",
                        {
                          key: n,
                          staticClass: "zoom-button",
                          class: { active: t.activeZoom === e },
                          on: {
                            click: function (a) {
                              return t.zoomChart(e);
                            },
                          },
                        },
                        [t._v("\n      " + t._s(e) + "\n    ")],
                      );
                    }),
                    0,
                  )
                : t._e(),
              t._v(" "),
              t.isLoading
                ? a("div", { staticClass: "loading-wrap" }, [
                    a("div", { staticClass: "loading" }),
                  ])
                : a("div", {
                    staticClass: "graph",
                    attrs: { id: "graph" + t.refName },
                  }),
            ],
            1,
          );
        },
        r = [];
    },
    8790: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = a(830),
        r = (t) => {
          const e = Number(Math.abs(Number(t))),
            a = 2,
            r = 6;
          return e >= n.BILLION
            ? (e / n.BILLION).toFixed(a) + "B"
            : e >= n.MILLION
              ? (e / n.MILLION).toFixed(a) + "M"
              : e >= n.THOUSAND
                ? (e / n.THOUSAND).toFixed(a) + "K"
                : Number(e < n.MIN_BALANCE ? e.toFixed(r) : e.toFixed(a));
        };
      e.default = r;
    },
    8791: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return r;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass:
                "table-row with-hover coin-row flex-wrap center space-between",
              on: { click: t.clickHandler },
            },
            [
              a("div", { staticClass: "item" }, [
                a(
                  "div",
                  { staticClass: "flex-wrap center" },
                  [
                    t.coin.imgUri
                      ? a("memes-image", {
                          staticClass: "coin-img",
                          attrs: { uri: t.coin.imgUri },
                        })
                      : a("coin-icon", {
                          attrs: {
                            wallet: t.coin,
                            "data-test-id": "icon_" + t.coin.name,
                          },
                        }),
                    t._v(" "),
                    a(
                      "atomic-notify-point",
                      { staticClass: "m-l-10", attrs: { UID: t.notifyUID } },
                      [
                        a(
                          "p",
                          {
                            staticClass: "text-big coin-row__fullname",
                            attrs: {
                              tooltip: t.coin.name,
                              "data-test-id": "wallet_coin_fullname",
                            },
                          },
                          [
                            t._v(
                              "\n          " +
                                t._s(
                                  t.formatTextTrim(t.coin.name, t.nameLength),
                                ) +
                                "\n        ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        a("token-tag", {
                          attrs: { slot: "tag", wallet: t.coin },
                          slot: "tag",
                        }),
                      ],
                      1,
                    ),
                  ],
                  1,
                ),
              ]),
              t._v(" "),
              a(
                "div",
                {
                  staticClass: "item item_currency",
                  attrs: { tooltip: t.coin.fixedBalance },
                },
                [
                  a("p", { staticClass: "text-big flex fullwidth center" }, [
                    a(
                      "span",
                      {
                        staticClass: "coin-balance text-big",
                        attrs: { "data-test-id": "wallet_coin_balance" },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.formatFinanceTrim(t.coin.fixedBalance)) +
                            " \n      ",
                        ),
                      ],
                    ),
                    t._v(" "),
                    a(
                      "span",
                      {
                        staticClass: "text-middle text-gray",
                        attrs: { "data-test-id": "wallet_coin_name" },
                      },
                      [t._v("\n        " + t._s(t.coin.ticker) + "\n      ")],
                    ),
                  ]),
                ],
              ),
              t._v(" "),
              a(
                "div",
                {
                  staticClass: "item item_currency",
                  attrs: {
                    tooltip: t.formatNumber({
                      value: t.coin.value,
                      currency: t.fiatRate,
                    }),
                  },
                },
                [
                  t.isPlaceholder
                    ? a("p", { staticClass: "text-big text-gray" }, [
                        t._v("\n      --.--\n    "),
                      ])
                    : a(
                        "p",
                        { staticClass: "text-big flex flex-end fullwidth" },
                        [
                          a("span", {
                            directives: [
                              {
                                name: "text-html",
                                rawName: "v-text-html",
                                value: t.fiatCharacter,
                                expression: "fiatCharacter",
                              },
                            ],
                            staticClass: "text-big",
                          }),
                          a(
                            "span",
                            {
                              staticClass: "coin-value text-big",
                              attrs: { "data-test-id": "wallet_coin_value" },
                            },
                            [t._v(t._s(t.formatFinanceTrim(t.coin.value)))],
                          ),
                        ],
                      ),
                ],
              ),
              t._v(" "),
              a(
                "div",
                {
                  staticClass: "item item_currency text-right",
                  attrs: {
                    tooltip: t.formatNumber({
                      value: t.coinPrice,
                      currency: t.fiatRate,
                    }),
                  },
                },
                [
                  t.isPlaceholder
                    ? a("p", { staticClass: "text-big text-gray" }, [
                        t._v("\n      --.--\n    "),
                      ])
                    : a("p", [
                        a("span", {
                          directives: [
                            {
                              name: "text-html",
                              rawName: "v-text-html",
                              value:
                                "" +
                                t.fiatCharacter +
                                t.formatFinance(t.coinPrice),
                              expression:
                                "`${fiatCharacter}${formatFinance(coinPrice)}`",
                            },
                          ],
                          staticClass: "coin-price text-big text-gray",
                          attrs: { "data-test-id": "wallet_coin_price" },
                        }),
                      ]),
                ],
              ),
              t._v(" "),
              a("div", { staticClass: "item" }, [
                t.isPlaceholder
                  ? a("p", { staticClass: "text-big text-gray" }, [
                      t._v("\n      --.--\n    "),
                    ])
                  : a(
                      "p",
                      {
                        staticClass: "text-middle",
                        class: [
                          { "text-green": t.coin.change > 0 },
                          { "text-danger": t.coin.change < 0 },
                          { "text-gray": 0 === t.coin.change },
                        ],
                        attrs: { "data-test-id": "wallet_coin_change" },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(t.coin.change > 0 ? "+" : "") +
                            t._s(t.coin.change.toFixed(2)) +
                            "%\n    ",
                        ),
                      ],
                    ),
              ]),
              t._v(" "),
              a("div", { staticClass: "item" }, [
                t.isPlaceholder
                  ? a("p", { staticClass: "text-big text-gray" }, [
                      t._v("\n      --.--\n    "),
                    ])
                  : a(
                      "p",
                      {
                        staticClass: "text-middle text-gray",
                        attrs: { "data-test-id": "wallet_coin_portfolio" },
                      },
                      [
                        t._v(
                          "\n      " +
                            t._s(Number(t.coin.portfolio || 0).toFixed(2)) +
                            "%\n    ",
                        ),
                      ],
                    ),
              ]),
              t._v(" "),
              a("div", { staticClass: "item" }, [
                t.isPlaceholder
                  ? a("p", { staticClass: "text-big text-gray" }, [
                      t._v("\n      --.--\n    "),
                    ])
                  : a("p", [
                      a("span", {
                        directives: [
                          {
                            name: "text-html",
                            rawName: "v-text-html",
                            value:
                              "" +
                              t.fiatCharacter +
                              t.balanceFormat(t.coin.marketCap),
                            expression:
                              "`${fiatCharacter}${balanceFormat(coin.marketCap)}`",
                          },
                        ],
                        staticClass: "text-middle text-gray",
                        attrs: { "data-test-id": "wallet_coin_market" },
                      }),
                    ]),
              ]),
              t._v(" "),
              a(
                "div",
                { staticClass: "item chart-item" },
                [
                  t.getData.length < 1 &&
                  t.isChartDataLoading[t.chartDataMainEndpoint]
                    ? a("div", { staticClass: "loading" })
                    : t.isPlaceholder
                      ? t._e()
                      : a("chart", {
                          key: t.coin.ticker + "+" + t.coin.name + "-chart",
                          attrs: {
                            coin: t.coin,
                            data: t.getData,
                            width: t.isPortfolio ? 190 : 170,
                          },
                        }),
                ],
                1,
              ),
              t._v(" "),
              t.isPortfolio ? t._e() : a("div", { staticClass: "item" }),
            ],
          );
        },
        r = [];
    },
  },
]);
