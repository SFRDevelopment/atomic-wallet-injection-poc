(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [311],
  {
    2741: function (a, t, e) {
      "use strict";
      e.r(t);
      var n = e(5371),
        i = e.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(r);
      var o = e(8847),
        s = e(5);
      function l(a) {
        e(8845);
      }
      var p = !1,
        d = l,
        c = null,
        m = null,
        f = Object(s["a"])(i.a, o["a"], o["b"], p, d, c, m);
      t["default"] = f.exports;
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
      function s(a, t, e) {
        const o = (0, i.useStore)(),
          s = { threshold: 1 },
          l = function (t) {
            t.forEach((t) => {
              if (1 === t.intersectionRatio) {
                const t = e.map((a) => a.reasons).includes(a),
                  n = o.getters.getCompletedNotifyReasons;
                p(n).length > 0 &&
                  t &&
                  setTimeout(() => {
                    n.includes(a) ||
                      (o.commit("ADD_COMPLETED_REASON", a),
                      o.dispatch("setCompletedReason"));
                  }, r);
              }
            });
          };
        function p(a) {
          const t = a;
          return Array.isArray(t)
            ? e.reduce(
                (a, e) => (!1 === t.includes(e.reasons) ? [...a, e] : a),
                [],
              )
            : [];
        }
        const d = (0, n.ref)(new IntersectionObserver(l, s));
        ((0, n.onMounted)(() => {
          try {
            var a;
            null === d ||
              void 0 === d ||
              null === (a = d.value) ||
              void 0 === a ||
              a.observe(t.value);
          } catch (e) {}
        }),
          (0, n.onUnmounted)(() => {
            try {
              var a;
              null === d ||
                void 0 === d ||
                null === (a = d.value) ||
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
              return (s(a.UID, t, n), { notify: t, amount: e });
            }
            throw new Error("haven`t element");
          } catch (l) {
            return { notify: t, amount: 0 };
          }
        },
      };
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
        s = e(5);
      function l(a) {
        e(3630);
      }
      var p = !1,
        d = l,
        c = "data-v-1e45aa1b",
        m = null,
        f = Object(s["a"])(i.a, o["a"], o["b"], p, d, c, m);
      t["default"] = f.exports;
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
    5371: function (a, t, e) {
      "use strict";
      var n = e(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var i = n(e(3364));
      t.default = {
        name: "SettingsPage",
        components: { AtomicNotifyPoint: i.default },
        data() {
          return {
            tabs: [
              {
                title: this.$t("settingsPage.tabs.membership"),
                name: "membership-tab",
              },
              {
                title: this.$t("settingsPage.tabs.security"),
                name: "change-password-tab",
              },
              {
                title: this.$t("settingsPage.tabs.privateKeys"),
                name: "private-keys-tab",
              },
            ],
          };
        },
      };
    },
    8845: function (a, t, e) {
      var n = e(8846);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[a.i, n, ""]]),
        n.locals && (a.exports = n.locals));
      var i = e(23).default;
      i("062567a6", n, !0, {});
    },
    8846: function (a, t, e) {
      ((t = a.exports = e(22)(!1)),
        t.push([
          a.i,
          '\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.settings .tab-wrap{margin-top:60px;padding:0 100px;text-align:center\n}\n.settings .tab-wrap .title{font-size:24px;margin:20px 0 10px\n}\n.settings .tab-wrap .inputs{width:260px;margin:20px auto 0\n}\n.settings .tab-wrap .text{font-size:16px\n}\n.settings .tab-wrap .text-small{font-size:12px;color:#8290ad\n}\n.settings .tab-wrap .controls{padding:60px 0 15px\n}\n.settings .tab-wrap .button{display:block;margin:90px auto 15px\n}\n.settings .tab-wrap .button.link{margin-top:0\n}\n.settings .tab-wrap .form-field .error{text-align:left;padding-top:0\n}\n.settings .tab-wrap .result p{margin:0 -20px;font-size:24px\n}\n.settings .security .inputs{position:relative\n}\n.settings .security .button{margin-top:60px;text-transform:uppercase\n}\n.settings .security .message{bottom:55px;background-color:#6b963b;top:auto\n}\n.settings .security .text{max-width:470px;margin:0 auto 90px\n}\n.settings .private-keys{padding:0;margin-top:0\n}\n.settings .private-keys [class^=icon-],.settings .private-keys [class*=" icon-"]{font-size:42px\n}\n.settings .private-keys .alert_wrap{max-width:600px;margin:60px auto\n}\n.settings .private-keys .enter-form{max-width:400px;margin:0 auto\n}\n.settings .private-keys .enter-form .text{margin:60px -30px\n}\n.settings .private-keys .enter-form .button{text-transform:uppercase\n}\n.settings .private-keys .coins .filter{height:45px;border-bottom:1px #303e58 solid\n}\n.settings .private-keys .coins .filter input{height:45px;width:100%;outline:none;border:0;padding:0 20px;background:rgba(0,0,0,0)\n}\n.settings .private-keys .coins .list{overflow:hidden;overflow-y:scroll;height:calc(100vh - 105px)\n}\n.settings .private-keys .coins .list .list-item{background:#1f2843;display:flex;align-items:center;padding:10px 0 10px 20px;text-align:left;position:relative\n}\n.settings .private-keys .coins .list .list-item:first-child{padding-top:30px;padding-bottom:30px\n}\n.settings .private-keys .coins .list .list-item:nth-child(even){background:#262e48\n}\n.settings .private-keys .coins .list .list-item .name{display:flex;align-items:center;width:25%\n}\n.settings .private-keys .coins .list .list-item .name span{margin-left:10px;font-size:18px\n}\n.settings .private-keys .coins .list .list-item .info{width:70%\n}\n.settings .private-keys .coins .list .list-item .info span{font-size:10px;color:#8290ad;display:block\n}\n.settings .private-keys .coins .list .list-item .info .item{position:relative\n}\n.settings .private-keys .coins .list .list-item .info .item .value{font-size:14px;color:#fff;cursor:pointer;transition:all .15s\n}\n.settings .private-keys .coins .list .list-item .info .item .value:hover{color:#1f8efa\n}\n.settings .private-keys .coins .list .list-item .info .item .message{top:auto;bottom:-5px\n}\n.settings .private-keys .coins .list .list-item .claim{position:absolute;right:25px\n}\n.settings .private-keys .coins .list .list-item .claim .container{position:relative;min-width:85px;min-height:45px\n}\n.settings .private-keys .coins .list .list-item .claim .loader,.settings .private-keys .coins .list .list-item .claim .mark{position:absolute;height:45px;width:45px;top:-1px;left:20px\n}\n.settings .private-keys .coins .list .list-item .claim .mark.icon-fail{background:#c03647\n}\n.settings .private-keys .coins .list .list-item .claim .mark.icon-success{background:#6a8c45\n}\n.settings .private-keys .coins .list .list-item .claim button{margin:0\n}\n@media(min-width: 1152px){\n.settings .tab-wrap .inputs{width:512px\n}\n}',
          "",
        ]));
    },
    8847: function (a, t, e) {
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
          return e("main", { staticClass: "settings" }, [
            e(
              "div",
              { staticClass: "header-tabs" },
              a._l(a.tabs, function (t) {
                return e(
                  "router-link",
                  {
                    key: t.name,
                    staticClass: "choice",
                    attrs: {
                      to: { name: t.name },
                      exactActiveClass: "active",
                      tag: "div",
                    },
                    nativeOn: {
                      click: function (t) {
                        return a.clickHandler.apply(null, arguments);
                      },
                    },
                  },
                  [
                    e(
                      "AtomicNotifyPoint",
                      { attrs: { UID: "settings-header-tabs-" + t.name } },
                      [
                        e("span", [
                          a._v("\n          " + a._s(t.title) + "\n        "),
                        ]),
                      ],
                    ),
                  ],
                  1,
                );
              }),
              1,
            ),
            a._v(" "),
            e("div", { staticClass: "content" }, [e("router-view")], 1),
          ]);
        },
        i = [];
    },
  },
]);
