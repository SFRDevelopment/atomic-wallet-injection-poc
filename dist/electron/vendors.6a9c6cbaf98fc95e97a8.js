(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [394],
  {
    2752: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = s(5402),
        r = s.n(i);
      for (var n in i)
        ["default"].indexOf(n) < 0 &&
          (function (e) {
            s.d(t, e, function () {
              return i[e];
            });
          })(n);
      var a = s(8892),
        o = s(5),
        l = !1,
        c = null,
        u = null,
        p = null,
        h = Object(o["a"])(r.a, a["a"], a["b"], l, c, u, p);
      t["default"] = h.exports;
    },
    3077: function (e, t, s) {
      (function (e) {
        function s(e, t) {
          for (var s = 0, i = e.length - 1; i >= 0; i--) {
            var r = e[i];
            "." === r
              ? e.splice(i, 1)
              : ".." === r
                ? (e.splice(i, 1), s++)
                : s && (e.splice(i, 1), s--);
          }
          if (t) for (; s--; s) e.unshift("..");
          return e;
        }
        function i(e) {
          "string" !== typeof e && (e += "");
          var t,
            s = 0,
            i = -1,
            r = !0;
          for (t = e.length - 1; t >= 0; --t)
            if (47 === e.charCodeAt(t)) {
              if (!r) {
                s = t + 1;
                break;
              }
            } else -1 === i && ((r = !1), (i = t + 1));
          return -1 === i ? "" : e.slice(s, i);
        }
        function r(e, t) {
          if (e.filter) return e.filter(t);
          for (var s = [], i = 0; i < e.length; i++)
            t(e[i], i, e) && s.push(e[i]);
          return s;
        }
        ((t.resolve = function () {
          for (
            var t = "", i = !1, n = arguments.length - 1;
            n >= -1 && !i;
            n--
          ) {
            var a = n >= 0 ? arguments[n] : e.cwd();
            if ("string" !== typeof a)
              throw new TypeError("Arguments to path.resolve must be strings");
            a && ((t = a + "/" + t), (i = "/" === a.charAt(0)));
          }
          return (
            (t = s(
              r(t.split("/"), function (e) {
                return !!e;
              }),
              !i,
            ).join("/")),
            (i ? "/" : "") + t || "."
          );
        }),
          (t.normalize = function (e) {
            var i = t.isAbsolute(e),
              a = "/" === n(e, -1);
            return (
              (e = s(
                r(e.split("/"), function (e) {
                  return !!e;
                }),
                !i,
              ).join("/")),
              e || i || (e = "."),
              e && a && (e += "/"),
              (i ? "/" : "") + e
            );
          }),
          (t.isAbsolute = function (e) {
            return "/" === e.charAt(0);
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              r(e, function (e, t) {
                if ("string" !== typeof e)
                  throw new TypeError("Arguments to path.join must be strings");
                return e;
              }).join("/"),
            );
          }),
          (t.relative = function (e, s) {
            function i(e) {
              for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
              for (var s = e.length - 1; s >= 0; s--) if ("" !== e[s]) break;
              return t > s ? [] : e.slice(t, s - t + 1);
            }
            ((e = t.resolve(e).substr(1)), (s = t.resolve(s).substr(1)));
            for (
              var r = i(e.split("/")),
                n = i(s.split("/")),
                a = Math.min(r.length, n.length),
                o = a,
                l = 0;
              l < a;
              l++
            )
              if (r[l] !== n[l]) {
                o = l;
                break;
              }
            var c = [];
            for (l = o; l < r.length; l++) c.push("..");
            return ((c = c.concat(n.slice(o))), c.join("/"));
          }),
          (t.sep = "/"),
          (t.delimiter = ":"),
          (t.dirname = function (e) {
            if (("string" !== typeof e && (e += ""), 0 === e.length))
              return ".";
            for (
              var t = e.charCodeAt(0),
                s = 47 === t,
                i = -1,
                r = !0,
                n = e.length - 1;
              n >= 1;
              --n
            )
              if (((t = e.charCodeAt(n)), 47 === t)) {
                if (!r) {
                  i = n;
                  break;
                }
              } else r = !1;
            return -1 === i
              ? s
                ? "/"
                : "."
              : s && 1 === i
                ? "/"
                : e.slice(0, i);
          }),
          (t.basename = function (e, t) {
            var s = i(e);
            return (
              t &&
                s.substr(-1 * t.length) === t &&
                (s = s.substr(0, s.length - t.length)),
              s
            );
          }),
          (t.extname = function (e) {
            "string" !== typeof e && (e += "");
            for (
              var t = -1, s = 0, i = -1, r = !0, n = 0, a = e.length - 1;
              a >= 0;
              --a
            ) {
              var o = e.charCodeAt(a);
              if (47 !== o)
                (-1 === i && ((r = !1), (i = a + 1)),
                  46 === o
                    ? -1 === t
                      ? (t = a)
                      : 1 !== n && (n = 1)
                    : -1 !== t && (n = -1));
              else if (!r) {
                s = a + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === i ||
              0 === n ||
              (1 === n && t === i - 1 && t === s + 1)
              ? ""
              : e.slice(t, i);
          }));
        var n =
          "b" === "ab".substr(-1)
            ? function (e, t, s) {
                return e.substr(t, s);
              }
            : function (e, t, s) {
                return (t < 0 && (t = e.length + t), e.substr(t, s));
              };
      }).call(this, s(18));
    },
    5402: function (e, t, s) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var i = s(60);
        const r = "https://checkout.simplexcc.com";
        t.default = {
          name: "SimplexWebview",
          data: () => ({
            simplexWebView: null,
            showReady: !1,
            preload: "file:" + s(3077).resolve(e, "./simplexInject.js"),
          }),
          computed: {
            ...(0, i.mapGetters)(["simplexSession", "simplexNewTransaction"]),
            sessionUrl() {
              return `${r}${this.simplexSession.headers.location}`;
            },
          },
          mounted() {
            ((this.simplexWebView = this.$refs.simplex_webview),
              this.simplexWebView.addEventListener("new-window", (e) => {
                ipcRenderer.send("openExternal", e.url);
              }),
              this.startSimplexSession(this.simplexSession));
          },
          methods: {
            ...(0, i.mapActions)(["updateSimplexTransactionsFromDB"]),
            async saveTxToLocalDb(e) {
              let { buyParams: t, cashbackParams: s } = e;
              const i = {
                id: t.paymentId,
                userId: t.atomicId,
                status: t.status,
                txHash: null,
                payoutHash: null,
                payoutAddress: t.payoutAddress,
                fromCurrency: t.fromCurrency,
                toCurrency: t.toCurrency,
                amountToSend: t.amountSend,
                amountToReceive: t.amountReceive,
                expectedCashbackAmount: s.estimatedAwcCashback,
                timestamp: new Date().toISOString(),
              };
              (this.$simplexDb.addSimplexTransactionToDb(i),
                await this.updateSimplexTransactionsFromDB());
            },
            goToFirstTab() {
              this.$router.push("/simplex");
            },
            async startSimplexSession() {
              (this.$simplexDb.postCashbackBuyTx(this.simplexNewTransaction),
                this.saveTxToLocalDb(this.simplexNewTransaction),
                this.simplexWebView.addEventListener("dom-ready", () => {
                  const e = 100;
                  (setTimeout(() => {
                    this.showReady = !0;
                  }, e),
                    this.simplexWebView.send("check-success"));
                }),
                this.simplexWebView.addEventListener(
                  "ipc-message",
                  (e) => {
                    "success" === e.channel && this.goToFirstTab();
                  },
                  { once: !0 },
                ),
                this.simplexWebView.addEventListener("will-navigate", (e) => {
                  "https://atomicwallet.io/" === e.url && this.goToFirstTab();
                }),
                this.simplexWebView.addEventListener("close", (e) =>
                  this.goToFirstTab(),
                ));
            },
          },
        };
      }).call(this, "/");
    },
    8892: function (e, t, s) {
      "use strict";
      (s.d(t, "a", function () {
        return i;
      }),
        s.d(t, "b", function () {
          return r;
        }));
      var i = function () {
          var e = this,
            t = e.$createElement,
            s = e._self._c || t;
          return s(
            "div",
            { staticClass: "webview-wrapper" },
            [
              s("webview", {
                ref: "simplex_webview",
                class: { hidden: !e.showReady },
                attrs: {
                  id: "simplexWebview",
                  preload: e.preload,
                  src: e.$sanitizeUrl(e.sessionUrl),
                  httpreferrer: "https://backend-wallet-api.simplexcc.com",
                  name: "simplex_payment",
                  partition: "simplex",
                },
              }),
              e._v(" "),
              e.showReady ? e._e() : s("div", { staticClass: "loader" }),
            ],
            1,
          );
        },
        r = [];
    },
  },
]);
