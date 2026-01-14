(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [385],
  {
    2732: function (n, t, e) {
      "use strict";
      e.r(t);
      var a = e(5290),
        r = e.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (n) {
            e.d(t, n, function () {
              return a[n];
            });
          })(o);
      var s = e(8441),
        i = e(5);
      function l(n) {
        e(8439);
      }
      var p = !1,
        c = l,
        d = null,
        m = null,
        f = Object(i["a"])(r.a, s["a"], s["b"], p, c, d, m);
      t["default"] = f.exports;
    },
    5290: function (n, t, e) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var a = e(60),
        r = e(833),
        o = e(233);
      t.default = {
        name: "LoginPage",
        props: { mnemonic: { type: Boolean, default: !1 } },
        data: () => ({
          loading: !0,
          password: "",
          passwordType: "password",
          passwordError: "",
        }),
        mounted() {
          ((this.loading = !1), this.$refs.password.focus());
        },
        methods: {
          ...(0, a.mapActions)([
            "initSimplexTransactions",
            "setNotifyTree",
            "setCompletedReason",
            "clearNotifyStorage",
            "initChartData",
            "initExchangeTransactions",
          ]),
          toggleTypePassword() {
            this.passwordType =
              "password" === this.passwordType ? "text" : "password";
          },
          async login() {
            let n;
            if ("" !== this.password) {
              try {
                if (
                  ((n = await this.$wallets.load(this.password)),
                  0 === n.length)
                )
                  throw new Error("empty addresses");
              } catch (t) {
                return (
                  console.error(t),
                  void (this.passwordError = this.$t("error.wrongPassword"))
                );
              }
              try {
                if (((this.loading = !0), Array.isArray(n))) {
                  (await this.$wallets
                    .loadWallets(n, this.password)
                    .catch(console.error)
                    .finally(() => {
                      ((this.password = ""),
                        this.initSimplexTransactions(),
                        this.setCompletedReason(),
                        this.initChartData(),
                        this.initExchangeTransactions());
                    }),
                    await this.setNotifyTree());
                  const t = localStorage.getItem(r.NOTIFY_FIRST_LOGIN),
                    e = this.$wallets
                      .list()
                      .filter(
                        (n) => !o.DISABLED_COINS.includes(n.deprecatedParent),
                      )
                      .filter(
                        (n) =>
                          (null === n || void 0 === n ? void 0 : n.notify) ||
                          !1,
                      )
                      .map((n) => n.id);
                  if (null === t)
                    (localStorage.setItem(
                      r.NOTIFY_FIRST_LOGIN,
                      JSON.stringify(!0),
                    ),
                      localStorage.setItem(
                        r.NOTIFY_NEW_POINT_WALLETS,
                        JSON.stringify(e),
                      ),
                      localStorage.setItem(
                        r.NOTIFY_OLD_POINT_WALLETS,
                        JSON.stringify([]),
                      ),
                      this.clearNotifyStorage());
                  else {
                    const n = [
                        ...(JSON.parse(
                          localStorage.getItem(r.NOTIFY_NEW_POINT_WALLETS),
                        ) || []),
                        ...(JSON.parse(
                          localStorage.getItem(r.NOTIFY_OLD_POINT_WALLETS),
                        ) || []),
                      ],
                      t = e.filter((t) => !n.includes(t)) || [];
                    (localStorage.setItem(
                      r.NOTIFY_FIRST_LOGIN,
                      JSON.stringify(!1),
                    ),
                      localStorage.setItem(
                        r.NOTIFY_OLD_POINT_WALLETS,
                        JSON.stringify(n),
                      ),
                      localStorage.setItem(
                        r.NOTIFY_NEW_POINT_WALLETS,
                        JSON.stringify(t),
                      ));
                  }
                  await this.$router.push({ path: "/main" });
                }
              } catch (t) {
                console.error(t);
              } finally {
                this.loading = !1;
              }
            } else this.passwordError = this.$t("error.passwordRequired");
          },
        },
      };
    },
    8439: function (n, t, e) {
      var a = e(8440);
      (a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals));
      var r = e(23).default;
      r("f009870e", a, !0, {});
    },
    8440: function (n, t, e) {
      ((t = n.exports = e(22)(!1)),
        t.push([
          n.i,
          "\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.login{height:100vh;width:100vw;display:flex;flex-direction:column;flex:1;text-align:center;padding-top:60px;position:relative\n}\n.login__title{margin-bottom:22px\n}\n.login .modal .content .buttons .button{padding:10px 30px\n}\n.login .modal .content .buttons .button:first-child{margin-right:80px\n}\n.login .logo{max-width:122px;transition:.3s all ease;margin:0 auto 9vh\n}\n.login .wrap{width:400px;margin:0 auto\n}\n.login .wrap.little{width:270px\n}\n.login .wrap.big{width:100%\n}\n.login .button{text-transform:uppercase;letter-spacing:.3px;display:block;margin:0 auto 15px\n}\n.login .button:not(.link):not(.success):not(.danger):not(.m-t-0){font-weight:600;margin-top:80px\n}\n.login .title{text-align:center;font-size:20px;margin:0 0 1rem\n}\n.login .newseed .title{font-size:24px;margin-bottom:5px\n}\n.login .newseed p{font-size:18px;opacity:.5;margin-bottom:10px\n}\n.login .newseed .seed{background-color:rgba(0,0,0,.15);padding:30px;font-size:18px;cursor:pointer;transition:all .3s;opacity:1;margin:40px 0 20px\n}\n.login .newseed .seed:hover{background-color:rgba(31,152,255,.25)\n}\n.login .newseed .atomic__checkbox{margin-top:40px\n}\n.login .newseed .button:not(.link):not(.success):not(.danger):not(.m-t-0){margin-top:40px\n}\n.login .newseed .checkbox .state .tooltip{top:-100px\n}",
          "",
        ]));
    },
    8441: function (n, t, e) {
      "use strict";
      (e.d(t, "a", function () {
        return a;
      }),
        e.d(t, "b", function () {
          return r;
        }));
      var a = function () {
          var n = this,
            t = n.$createElement,
            a = n._self._c || t;
          return a("div", [
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !n.loading,
                    expression: "!loading",
                  },
                ],
                staticClass: "wrap little",
              },
              [
                a("p", { staticClass: "new-text-extra-large login__title" }, [
                  n._v(" "),
                ]),
                n._v(" "),
                a(
                  "div",
                  { staticClass: "form-field m-b-25" },
                  [
                    a("div", { staticClass: "input-wrap" }, [
                      "checkbox" === n.passwordType
                        ? a("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: n.password,
                                expression: "password",
                              },
                            ],
                            ref: "password",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(n.password)
                                ? n._i(n.password, null) > -1
                                : n.password,
                            },
                            on: {
                              keyup: function (t) {
                                return !t.type.indexOf("key") &&
                                  n._k(t.keyCode, "enter", 13, t.key, "Enter")
                                  ? null
                                  : (t.preventDefault(),
                                    t.stopPropagation(),
                                    n.login.apply(null, arguments));
                              },
                              change: function (t) {
                                var e = n.password,
                                  a = t.target,
                                  r = !!a.checked;
                                if (Array.isArray(e)) {
                                  var o = null,
                                    s = n._i(e, o);
                                  a.checked
                                    ? s < 0 && (n.password = e.concat([o]))
                                    : s > -1 &&
                                      (n.password = e
                                        .slice(0, s)
                                        .concat(e.slice(s + 1)));
                                } else n.password = r;
                              },
                            },
                          })
                        : "radio" === n.passwordType
                          ? a("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: n.password,
                                  expression: "password",
                                },
                              ],
                              ref: "password",
                              attrs: { type: "radio" },
                              domProps: { checked: n._q(n.password, null) },
                              on: {
                                keyup: function (t) {
                                  return !t.type.indexOf("key") &&
                                    n._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : (t.preventDefault(),
                                      t.stopPropagation(),
                                      n.login.apply(null, arguments));
                                },
                                change: function (t) {
                                  n.password = null;
                                },
                              },
                            })
                          : a("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: n.password,
                                  expression: "password",
                                },
                              ],
                              ref: "password",
                              attrs: { type: n.passwordType },
                              domProps: { value: n.password },
                              on: {
                                keyup: function (t) {
                                  return !t.type.indexOf("key") &&
                                    n._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : (t.preventDefault(),
                                      t.stopPropagation(),
                                      n.login.apply(null, arguments));
                                },
                                input: function (t) {
                                  t.target.composing ||
                                    (n.password = t.target.value);
                                },
                              },
                            }),
                      n._v(" "),
                      a("div", {
                        staticClass: "line",
                        class: {
                          "line-error": n.passwordError,
                          "line-true": !n.passwordError && n.password,
                        },
                      }),
                      n._v(" "),
                      a(
                        "div",
                        {
                          staticClass: "placeholder",
                          class: { "is-up": n.password },
                        },
                        [
                          n._v(
                            "\n          " +
                              n._s(n.$t("input.password")) +
                              "\n        ",
                          ),
                        ],
                      ),
                      n._v(" "),
                      a(
                        "div",
                        {
                          staticClass: "password-icon",
                          class: { "close-eye": "text" === n.passwordType },
                          on: { click: n.toggleTypePassword },
                        },
                        [a("img", { attrs: { src: e(811) } })],
                      ),
                    ]),
                    n._v(" "),
                    a("transition", { attrs: { name: "slide-in" } }, [
                      n.passwordError
                        ? a("div", {
                            directives: [
                              {
                                name: "text-html",
                                rawName: "v-text-html",
                                value: n.passwordError,
                                expression: "passwordError",
                              },
                            ],
                            staticClass: "error",
                          })
                        : n._e(),
                    ]),
                  ],
                  1,
                ),
                n._v(" "),
                a(
                  "button",
                  {
                    staticClass: "button",
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(),
                          n.login.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    n._v(
                      "\n      " + n._s(n.$t("button.openWallet")) + "\n    ",
                    ),
                  ],
                ),
                n._v(" "),
                a(
                  "button",
                  {
                    staticClass: "button link",
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(),
                          n.$emit("show-mnemonic-warning", "/entry/restore")
                        );
                      },
                    },
                  },
                  [
                    n._v(
                      "\n      " +
                        n._s(n.$t("button.restoreWallet")) +
                        "\n    ",
                    ),
                  ],
                ),
                n._v(" "),
                a(
                  "button",
                  {
                    staticClass: "button link",
                    on: {
                      click: function (t) {
                        return (
                          t.stopPropagation(),
                          n.$emit("show-mnemonic-warning", "/entry/create")
                        );
                      },
                    },
                  },
                  [
                    n._v(
                      "\n      " + n._s(n.$t("button.createWallet")) + "\n    ",
                    ),
                  ],
                ),
              ],
            ),
            n._v(" "),
            a(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: n.loading,
                    expression: "loading",
                  },
                ],
                staticClass: "loading-wrap",
              },
              [a("div", { staticClass: "loading" })],
            ),
          ]);
        },
        r = [];
    },
  },
]);
