(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [61],
  {
    5405: function (e, n, t) {
      "use strict";
      (Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0));
      var P = t(60);
      n.default = {
        name: "NFT",
        components: {
          NFTInfo: () => t.e(291).then(t.bind(null, 11649)),
          NFTEmpty: () => t.e(411).then(t.bind(null, 11658)),
          NFTFilter: () => t.e(57).then(t.bind(null, 6976)),
          NFTGallery: () => t.e(335).then(t.bind(null, 11665)),
          NFTReceive: () => t.e(362).then(t.bind(null, 11669)),
          NFTSendToken: () => t.e(176).then(t.bind(null, 11673)),
          NFTFilter: () => t.e(57).then(t.bind(null, 6976)),
        },
        data() {
          return { popupNFT: null, selectedNFT: null };
        },
        computed: {
          ...(0, P.mapState)({ nfts: (e) => e.Nft.nfts }),
          POPUPS_TYPES() {
            return {
              GALLERY: "gallery",
              INFO: "info",
              RECEIVE: "receive",
              SEND: "send",
              FILTERS: "filters",
            };
          },
        },
        async beforeMount() {
          (this.initNFTFilters(),
            this.$emitter.on("update::nft::list::wallet", this.setNFT),
            await this.setNFT(),
            "nft-id-receive" === this.$route.name
              ? this.handleChangePopup(this.POPUPS_TYPES.RECEIVE)
              : this.handleChangePopup(this.POPUPS_TYPES.GALLERY));
        },
        beforeDestroy() {
          this.$emitter.off("update::nft::list::wallet", this.setNFT);
        },
        methods: {
          ...(0, P.mapActions)(["initNFTFilters", "setNFT"]),
          handleChangePopup(e) {
            this.popupNFT = e;
          },
        },
      };
    },
    8897: function (e, n, t) {
      "use strict";
      (t.d(n, "a", function () {
        return P;
      }),
        t.d(n, "b", function () {
          return o;
        }));
      var P = function () {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n;
          return t(
            "main",
            [
              e.popupNFT === e.POPUPS_TYPES.GALLERY
                ? [
                    e.nfts.length > 0
                      ? t("NFTGallery", {
                          attrs: { "data-test-id": "nft_gallery" },
                          on: {
                            openInfo: function (n) {
                              ((e.selectedNFT = n),
                                e.handleChangePopup(e.POPUPS_TYPES.INFO));
                            },
                            openFilters: function (n) {
                              return e.handleChangePopup(
                                e.POPUPS_TYPES.FILTERS,
                              );
                            },
                            openReceive: function (n) {
                              return e.handleChangePopup(
                                e.POPUPS_TYPES.RECEIVE,
                              );
                            },
                          },
                        })
                      : t("NFTEmpty", {
                          attrs: { "data-test-id": "nft_empty" },
                          on: {
                            openReceive: function (n) {
                              return e.handleChangePopup(
                                e.POPUPS_TYPES.RECEIVE,
                              );
                            },
                          },
                        }),
                  ]
                : e._e(),
              e._v(" "),
              e.popupNFT === e.POPUPS_TYPES.FILTERS
                ? t("NFTFilter", {
                    on: {
                      close: function (n) {
                        return e.handleChangePopup(e.POPUPS_TYPES.GALLERY);
                      },
                    },
                  })
                : e.popupNFT === e.POPUPS_TYPES.INFO
                  ? t("NFTInfo", {
                      attrs: { nft: e.selectedNFT, "data-test-id": "nft_info" },
                      on: {
                        openSend: function (n) {
                          return e.handleChangePopup(e.POPUPS_TYPES.SEND);
                        },
                        close: function (n) {
                          return e.handleChangePopup(e.POPUPS_TYPES.GALLERY);
                        },
                      },
                    })
                  : e.popupNFT === e.POPUPS_TYPES.RECEIVE
                    ? t("NFTReceive", {
                        on: {
                          close: function (n) {
                            return e.handleChangePopup(e.POPUPS_TYPES.GALLERY);
                          },
                        },
                      })
                    : e.popupNFT === e.POPUPS_TYPES.SEND
                      ? t("NFTSendToken", {
                          attrs: { token: e.selectedNFT },
                          on: {
                            close: function (n) {
                              return e.handleChangePopup(
                                e.POPUPS_TYPES.GALLERY,
                              );
                            },
                          },
                        })
                      : e._e(),
            ],
            2,
          );
        },
        o = [];
    },
    933: function (e, n, t) {
      "use strict";
      t.r(n);
      var P = t(5405),
        o = t.n(P);
      for (var u in P)
        ["default"].indexOf(u) < 0 &&
          (function (e) {
            t.d(n, e, function () {
              return P[e];
            });
          })(u);
      var i = t(8897),
        l = t(5),
        a = !1,
        p = null,
        r = null,
        s = null,
        T = Object(l["a"])(o.a, i["a"], i["b"], a, p, r, s);
      n["default"] = T.exports;
    },
  },
]);
