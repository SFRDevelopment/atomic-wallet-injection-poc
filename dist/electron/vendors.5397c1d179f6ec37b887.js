(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [300],
  {
    11685: function (t, e, r) {
      "use strict";
      r.r(e);
      var i = r(5823),
        n = r.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return i[t];
            });
          })(a);
      var c = r(11692),
        l = r(5),
        u = !1,
        s = null,
        o = null,
        d = null,
        f = Object(l["a"])(n.a, c["a"], c["b"], u, s, o, d);
      e["default"] = f.exports;
    },
    11686: function (t, e, r) {
      "use strict";
      r.r(e);
      var i = r(5824),
        n = r.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return i[t];
            });
          })(a);
      var c = r(11691),
        l = r(5),
        u = !1,
        s = null,
        o = null,
        d = null,
        f = Object(l["a"])(n.a, c["a"], c["b"], u, s, o, d);
      e["default"] = f.exports;
    },
    11687: function (t, e, r) {
      "use strict";
      r.r(e);
      var i = r(5825),
        n = r.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return i[t];
            });
          })(a);
      var c = r(11690),
        l = r(5),
        u = !1,
        s = null,
        o = null,
        d = null,
        f = Object(l["a"])(n.a, c["a"], c["b"], u, s, o, d);
      e["default"] = f.exports;
    },
    11688: function (t, e, r) {
      "use strict";
      r.r(e);
      var i = r(5826),
        n = r.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            r.d(e, t, function () {
              return i[t];
            });
          })(a);
      var c = r(11689),
        l = r(5),
        u = !1,
        s = null,
        o = null,
        d = null,
        f = Object(l["a"])(n.a, c["a"], c["b"], u, s, o, d);
      e["default"] = f.exports;
    },
    11689: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return i;
      }),
        r.d(e, "b", function () {
          return n;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "svg",
            {
              attrs: {
                width: "58",
                height: "40",
                viewBox: "0 0 58 40",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              r("g", { attrs: { opacity: "0.9" } }, [
                r("path", {
                  attrs: {
                    d: "M56.72 6.26374C56.3873 5.05303 55.7384 3.94926 54.8377 3.06237C53.9371 2.17548 52.8162 1.53641 51.5868 1.20879C47.0859 0 28.9707 0 28.9707 0C28.9707 0 10.8555 0.0366299 6.35455 1.24542C5.12508 1.57304 4.00422 2.21211 3.10359 3.099C2.20296 3.98589 1.55398 5.08965 1.22129 6.30037C-0.140139 14.1758 -0.668344 26.1758 1.25849 33.7363C1.59118 34.947 2.24015 36.0507 3.14079 36.9376C4.04142 37.8245 5.16228 38.4636 6.39175 38.7912C10.8927 40 29.0079 40 29.0079 40C29.0079 40 47.1231 40 51.624 38.7912C52.8534 38.4636 53.9743 37.8245 54.8749 36.9376C55.7756 36.0507 56.4245 34.947 56.7572 33.7363C58.1931 25.8498 58.6357 13.8571 56.72 6.26374Z",
                  },
                }),
                t._v(" "),
                r("path", {
                  attrs: {
                    d: "M23.2051 28.5716L38.2329 20.0001L23.2051 11.4287V28.5716Z",
                    fill: "white",
                  },
                }),
              ]),
            ],
          );
        },
        n = [];
    },
    11690: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return i;
      }),
        r.d(e, "b", function () {
          return n;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            { staticClass: "article__card" },
            [
              t.article.previewUrl.desktop
                ? t._e()
                : r("image-preview", { attrs: { "is-video": t.isYoutube } }),
              t._v(" "),
              r(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.article.previewUrl.desktop,
                      expression: "article.previewUrl.desktop",
                    },
                  ],
                },
                [
                  r("sanitized-img", {
                    staticClass: "image_cover",
                    attrs: {
                      src: t.article.previewUrl.desktop,
                      alt: t.article.title || "article image",
                    },
                  }),
                  t._v(" "),
                  t.isYoutube
                    ? r("youtube-play", { staticClass: "youtube_button" })
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        n = [];
    },
    11691: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return i;
      }),
        r.d(e, "b", function () {
          return n;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r(
            "div",
            { staticClass: "article", on: { click: t.clickHandler } },
            [
              r("ArticleCard", { attrs: { article: t.article } }),
              t._v(" "),
              r(
                "AtomicNotifyPoint",
                { attrs: { UID: t.articleUID, type: "secondary" } },
                [
                  r("div", { staticClass: "article__text" }, [
                    t._v("\n      " + t._s(t.article.title) + "\n    "),
                  ]),
                ],
              ),
            ],
            1,
          );
        },
        n = [];
    },
    11692: function (t, e, r) {
      "use strict";
      (r.d(e, "a", function () {
        return i;
      }),
        r.d(e, "b", function () {
          return n;
        }));
      var i = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r("div", { staticClass: "about-tab" }, [
            r(
              "div",
              { staticClass: "about-tab__gallery" },
              t._l(t.articles, function (e, i) {
                return r("CoinArticle", {
                  key: i,
                  attrs: { coin: t.coin, article: e },
                });
              }),
              1,
            ),
            t._v(" "),
            r("div", { staticClass: "m-t-40" }),
          ]);
        },
        n = [];
    },
    5823: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(11686));
      e.default = {
        name: "AboutTab",
        components: { CoinArticle: n.default },
        props: {
          coin: { type: Object, default: null },
          articles: { type: Array, default: () => [] },
        },
      };
    },
    5824: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(11687)),
        a = i(r(3364)),
        c = r(60);
      e.default = {
        name: "CoinArticle",
        components: { AtomicNotifyPoint: a.default, ArticleCard: n.default },
        props: {
          coin: { type: Object, default: null },
          article: { type: Object, default: () => ({}) },
        },
        computed: {
          articleUID() {
            return `article-${this.coin.ticker.split("-").join("")}-${this.coin.deprecatedParent && this.coin.deprecatedParent !== this.coin.ticker ? this.coin.deprecatedParent : ""}-${this.article.contentUrl}`;
          },
        },
        methods: {
          ...(0, c.mapActions)(["setCompletedReason"]),
          ...(0, c.mapMutations)(["ADD_COMPLETED_REASON"]),
          clickHandler() {
            (this.registerArticleReason(), this.openExternal());
          },
          registerArticleReason() {
            (this.ADD_COMPLETED_REASON(this.articleUID),
              this.setCompletedReason());
          },
          openExternal() {
            this.article.contentUrl &&
              this.$electron.openExternal(this.article.contentUrl);
          },
        },
      };
    },
    5825: function (t, e, r) {
      "use strict";
      var i = r(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var n = i(r(11688));
      e.default = {
        name: "ArticleCard",
        components: {
          YoutubePlay: n.default,
          ImagePreview: () => Promise.resolve().then(r.bind(null, 919)),
        },
        props: { article: { type: Object, default: () => ({}) } },
        data: () => ({ backupImage: !1, isLoadingImage: !1 }),
        computed: {
          isYoutube() {
            return this.article.contentUrl.toLowerCase().includes("youtu");
          },
        },
      };
    },
    5826: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = { name: "YoutubePlay" };
    },
  },
]);
