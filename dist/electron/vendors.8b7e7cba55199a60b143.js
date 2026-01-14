(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [245],
  {
    2745: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5378),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8874),
        s = a(5);
      function d(t) {
        a(8856);
      }
      var l = !1,
        c = d,
        p = null,
        b = null,
        v = Object(s["a"])(i.a, o["a"], o["b"], l, c, p, b);
      e["default"] = v.exports;
    },
    5378: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(8858)),
        r = n(a(8860)),
        o = a(60);
      e.default = {
        name: "InviteFriends",
        components: { InviteDashboard: r.default, InviteLanding: i.default },
        data: () => ({ isLoading: !0 }),
        computed: {
          ...(0, o.mapGetters)(["isAffiliate", "affiliateStat", "isReferral"]),
          isLanding() {
            return !this.isAffiliate && !this.isLoading;
          },
        },
        async mounted() {
          (this.isAffiliate ||
            ((this.isLoading = !0), await this.setAffiliate()),
            (this.isLoading = !1),
            this.isReferral ||
              ((this.isLoading = !0),
              await this.setReferral(),
              (this.isLoading = !1)));
        },
        methods: { ...(0, o.mapActions)(["setAffiliate", "setReferral"]) },
      };
    },
    5379: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(929)),
        r = a(60);
      e.default = {
        name: "InviteLanding",
        components: { AtomicLinkedCard: i.default },
        data() {
          return {
            cardsOptions: [
              {
                icon: "user_add_badge_outline",
                headerText: this.$t("invitePage.cardsOptions.joinProgram"),
                bodyText: this.$t(
                  "invitePage.cardsOptions.getReferralLinkAndPromoCode",
                ),
              },
              {
                icon: "users_outline",
                headerText: this.$t("invitePage.cardsOptions.inviteFriends"),
                bodyText: this.$t(
                  "invitePage.cardsOptions.askFriendJoinViaLink",
                ),
              },
              {
                icon: "coins_stacks_2_outline",
                headerText: this.$t("invitePage.cardsOptions.earnRewards"),
                bodyText: this.$t("invitePage.cardsOptions.bothGetRewards"),
              },
            ],
          };
        },
        computed: {},
        mounted() {
          this.setAffiliateInfo();
        },
        methods: {
          ...(0, r.mapActions)(["setAffiliate", "setAffiliateInfo"]),
          async makeEarning() {
            (await this.$inviteFriends.registerAsAffiliate(),
              await this.setAffiliate());
          },
        },
      };
    },
    5380: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(8861)),
        r = n(a(8871)),
        o = a(60);
      e.default = {
        name: "InviteDashboard",
        components: { BonusTab: r.default, DashboardTab: i.default },
        data() {
          return { activeTabIndex: 0 };
        },
        computed: { ...(0, o.mapGetters)(["isReferral"]) },
      };
    },
    5381: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(8862)),
        r = a(60),
        o = n(a(6362));
      const s = (t, e, a) => {
          let n = "";
          switch (t) {
            case "telegram":
              n = `Install Atomic Wallet app! Swap, buy, stake, hold crypto in one place. Download the app, use your promo code - ${a} to get rewards.`;
              break;
            default:
              n = `Install Atomic Wallet app! Swap, buy, stake, hold crypto in one place. Download the app: ${e}, use your promo code - ${a} to get rewards.`;
              break;
          }
          return n;
        },
        d = {
          baidu: "http://cang.baidu.com/do/add?iu=@u&it=@t",
          buffer: "https://bufferapp.com/add?text=@t&url=@u",
          email: "mailto:?subject=@t&body=@u%0D%0A@d",
          evernote: "https://www.evernote.com/clip.action?url=@u&title=@t",
          facebook:
            "https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",
          flipboard:
            "https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",
          hackernews: "https://news.ycombinator.com/submitlink?u=@u&t=@t",
          instapaper:
            "http://www.instapaper.com/edit?url=@u&title=@t&description=@d",
          line: "http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",
          linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=@u",
          messenger: "fb-messenger://share/?link=@u",
          odnoklassniki:
            "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",
          pinterest:
            "https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",
          pocket: "https://getpocket.com/save?url=@u&title=@t",
          quora: "https://www.quora.com/share?url=@u&title=@t",
          reddit: "https://www.reddit.com/submit?url=@u&title=@t",
          skype: "https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",
          sms: "sms:?body=@t%0D%0A@u%0D%0A@d",
          stumbleupon: "https://www.stumbleupon.com/submit?url=@u&title=@t",
          telegram: "https://t.me/share/url?url=@u&text=@t%0D%0A@d",
          tumblr:
            "https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",
          twitter: "https://twitter.com/intent/tweet?text=@t&hashtags=@h@tu",
          viber: "viber://forward?text=@t%0D%0A@u%0D%0A@d",
          vk: "https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",
          weibo:
            "http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",
          whatsapp: "https://api.whatsapp.com/send?text=@t%0D%0A%0D%0A@d",
          wordpress: "https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",
          xing: "https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",
          yammer:
            "https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d",
        },
        l = (t, e, a) => {
          let n = d[t];
          return n
            .replace(/@tu/g, "&via=" + encodeURIComponent(""))
            .replace(/@u/g, encodeURIComponent(e))
            .replace(/@t/g, encodeURIComponent(a))
            .replace(/@d/g, encodeURIComponent(""))
            .replace(/@q/g, encodeURIComponent(""))
            .replace(/@h/g, "")
            .replace(/@m/g, encodeURIComponent(""));
        };
      e.default = {
        name: "DashboardTab",
        components: { ClipboardWrap: i.default },
        data() {
          return {
            socialNetworks: [
              { icon: "socials", network: "facebook" },
              { icon: "socials-1", network: "twitter" },
              { icon: "socials-2", network: "telegram" },
              { icon: "socials-3", network: "reddit" },
              { icon: "socials-4", network: "whatsapp" },
            ],
            socialLinksModal: !1,
          };
        },
        computed: {
          ...(0, r.mapGetters)(["affiliateStat", "affiliateInfo"]),
          promoCode() {
            return this.affiliateInfo.promoCode;
          },
          infoGroup() {
            const {
                activeReferralCount: t,
                pendingRewards: e,
                receivedRewards: a,
                referralCount: n,
              } = this.affiliateStat,
              i = (t) => (0, o.default)(t, { style: "decimal" }) + " USD";
            let r = [
              {
                label: "Invited friends",
                value: n,
                icon: "user_added_outline_28",
                hintText: "All invited friends who have started using Atomic",
              },
              {
                label: "Active friends",
                value: t,
                icon: "users_outline_28",
                hintText: "Invited friends with at least one completed swap",
              },
              {
                label: "Received rewards",
                value: i(a),
                icon: "money_received rewards_outline_28",
                hintText:
                  "Rewards received for the swap volume of active friends",
              },
              {
                label: "Pending rewards",
                value: i(e),
                icon: "money_pending rewards_outline_28",
                hintText:
                  "Rewards for all completed swaps that will be received next month",
              },
            ];
            return r;
          },
          link() {
            return this.affiliateInfo.referralLink;
          },
        },
        created() {
          this.setAffiliate();
        },
        methods: {
          ...(0, r.mapActions)(["setAffiliate"]),
          getIcon(t) {
            return a(858)(`./${t}.svg`);
          },
          openModal() {
            this.socialLinksModal = !0;
          },
          closeModal() {
            this.socialLinksModal = !1;
          },
          openShare(t) {
            const e = l(t, this.link, s(t, this.link, this.promoCode));
            this.$electron.openExternal(e);
          },
          openLinkHowWorks() {
            this.$electron.openExternal(
              "https://atomicwallet.io/invite-friends/rules",
            );
          },
        },
      };
    },
    5382: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = n(a(8865));
      e.default = {
        name: "ClipboardWrap",
        components: { IconClipboard: i.default },
        props: {
          isButton: { type: Boolean, default: !0 },
          clipboardMessage: {
            type: String,
            default() {
              return this.$t("message.successAddedToClipboard");
            },
          },
          textToClipboard: { type: String, default: "" },
          isBigIcon: { type: Boolean, default: !0 },
        },
        computed: {
          clipboardText() {
            return (
              this.textToClipboard ||
              this.$scopedSlots.default()[0].context.$refs.clipboard_value
                .textContent
            );
          },
        },
      };
    },
    5383: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = {
        name: "IconClipboard",
        props: { isBig: { type: Boolean, default: !1 } },
      };
    },
    5384: function (t, e, a) {
      "use strict";
      var n = a(9);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      var i = a(60),
        r = n(a(6362));
      const o = /[^0-9\.]/gm;
      e.default = {
        name: "BonusTab",
        computed: {
          ...(0, i.mapGetters)(["exchangeBonus", "isReferral"]),
          getSteps() {
            let t = (t) => t.replace(o, "");
            return this.exchangeBonus.stages.map((e) => ({
              value: +t(e.volume),
              reward: +t(e.reward),
            }));
          },
          getScaleLimits() {
            var t;
            const e = this.getSteps.length - 1;
            return {
              from: 0,
              to:
                null === (t = this.getSteps[e]) || void 0 === t
                  ? void 0
                  : t.value,
            };
          },
          valueNum() {
            return +this.exchangeBonus.currentProgress.replace(o, "");
          },
          getCurrentRewardValuePercent() {
            const t = 100;
            let e = +this.exchangeBonus.currentProgress.replace(o, "");
            return (e / this.getScaleLimits.to) * t;
          },
        },
        mounted() {
          this.setExchangeBonus();
        },
        methods: {
          toCurrency: r.default,
          ...(0, i.mapActions)(["setExchangeBonus"]),
          goToExchange() {
            this.$router.push("/exchange");
          },
        },
      };
    },
    6362: function (t, e, a) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0));
      e.default = function (t, e) {
        void 0 === e && (e = {});
        const a = {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
            currencyDisplay: "symbol",
            trailingZeroDisplay: "stripIfInteger",
          },
          n = Object.assign(a, e),
          i = new Intl.NumberFormat("en-US", n);
        return i.format(t);
      };
    },
    8856: function (t, e, a) {
      var n = a(8857);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("09c2335d", n, !0, {});
    },
    8857: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          '\n@keyframes spinner{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green{color:#6b963b\n}\n.text-red{color:#c03647\n}\n.text-gray{color:#8290ad\n}\n.text-blue{color:#00c2ff\n}\n.text-danger{color:#8c4545\n}\n.text-title{font-size:32px;line-height:60px\n}\n.text-small-title{font-size:24px;line-height:28px\n}\n.text-yellow{color:#f1b70b\n}\n.text-white{color:#fff\n}\n.text-bigger{font-size:18px;font-weight:500\n}\n.text-big{font-size:16px;font-weight:500\n}\n.text-middle{font-size:14px\n}\n.text-middle-height{line-height:24px\n}\n.text-small{font-size:12px\n}\n.text-word-break{word-break:break-all\n}\n.text-right{text-align:right\n}\n.text-left{text-align:left\n}\n.text-line-middle{line-height:24px\n}\n.text-link,.text-link-underline{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link:hover,.text-link-underline:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline{text-decoration:underline\n}\n.text-center{text-align:center\n}\n.text-pointer{cursor:pointer\n}\n.gap-10{gap:10px\n}\n.m-t-auto{margin-top:auto\n}\n.m-t-4{margin-top:4px\n}\n.m-t-5{margin-top:5px\n}\n.m-t-8{margin-top:10px\n}\n.m-t-10{margin-top:10px\n}\n.m-t-13{margin-top:10px\n}\n.m-t-15{margin-top:15px\n}\n.m-t-16{margin-top:16px\n}\n.m-t-20{margin-top:20px\n}\n.m-t-24{margin-top:24px\n}\n.m-t-25{margin-top:25px\n}\n.m-t-26{margin-top:26px\n}\n.m-t-30{margin-top:30px\n}\n.m-t-35{margin-top:35px\n}\n.m-t-40{margin-top:40px\n}\n.m-t-45{margin-top:45px\n}\n.m-t-50{margin-top:50px\n}\n.m-t-60{margin-top:60px\n}\n.m-t-65{margin-top:65px\n}\n.m-t-80{margin-top:80px\n}\n.m-l-5{margin-left:5px\n}\n.m-l-10{margin-left:10px\n}\n.m-l-15{margin-left:15px\n}\n.m-l-20{margin-left:20px\n}\n.m-l-25{margin-left:25px\n}\n.m-l-30{margin-left:30px\n}\n.m-l-35{margin-left:35px\n}\n.m-r-5{margin-right:5px\n}\n.m-r-10{margin-right:10px\n}\n.m-r-15{margin-right:15px\n}\n.m-r-30{margin-right:30px\n}\n.m-b-5{margin-bottom:5px !important\n}\n.m-b-15{margin-bottom:15px !important\n}\n.m-b-20{margin-bottom:20px !important\n}\n.m-b-30{margin-bottom:30px !important\n}\n.m-b-25{margin-bottom:25px !important\n}\n.m-b-50{margin-bottom:50px !important\n}\n.p-t-40{padding-top:40px\n}\n.p-t-85{padding-top:85px !important\n}\n.hidden{opacity:0 !important\n}\n.relative{position:relative\n}\n.space-nowrap{white-space:nowrap\n}\n.uppercase{text-transform:uppercase\n}\n.lowercase{text-transform:lowercase\n}\n.fade-enter-active{transition:all .1s ease-out\n}\n.fade-leave-active{transition:all .1s ease-out\n}\n.fade-enter,.fade-leave-to{opacity:0\n}\n.fade-down-enter-active,.fade-down-leave-active,.fade-down-move{transition:all .15s\n}\n.fade-down-leave-active,.fade-down-enter-active{position:absolute !important\n}\n.fade-down-enter,.fade-down-leave-to{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active,.scale-leave-active,.scale-move{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter,.scale-leave-to{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active,.slide-leave-active{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active{transition:all .2s ease\n}\n.slide-leave-active{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter,.slide-leave-to{margin-bottom:-200px\n}\n.slide-enter-to,.slide-leave{margin-bottom:0px\n}\n.slide-enter,.slide-leave-to{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active,.slide-in-leave-active{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active,.page-fade-enter-active{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade,.page-fade-leave-to,.page-fade-enter{opacity:0\n}\n.page-fade-enter-to{opacity:1\n}\n.fade-out-leave-active,.fade-out-enter-active{transition:opacity .25s ease-out\n}\n.fade-out,.fade-out-leave-to,.fade-out-enter{opacity:0\n}\n.fade-out-enter-to{opacity:1\n}\n.slide-down-enter-active,.slide-down-leave-active{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to,.slide-down-enter{top:100%\n}\n.slide-down-leave,.slide-down-enter-to{top:0%\n}\n.slide-out-enter-active,.slide-out-leave-active{transition:all .15s ease\n}\n.slide-out-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to,.exchange-result.slide-out-enter{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to,.exchange-pending.slide-out-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active,.slide-left-leave-active{transition:all .15s ease\n}\n.slide-left-leave-to{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active,.slide-right-leave-active{transition:all .15s ease\n}\n.slide-right-leave-to{transform:translateX(85%);opacity:0\n}\n.slide-right-enter{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active,.spin-down-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to{transform:translateY(85%);opacity:0\n}\n.spin-down-enter{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active,.spin-up-leave-active{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active,.puff-out-leave-active{transition:all .5s ease\n}\n.puff-out-leave-to{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave,.puff-out-enter-to{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active,.collapse-fade-enter-active{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade,.collapse-fade-leave-to,.collapse-fade-enter{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to{opacity:1\n}\n.lazy-fade-leave-active,.lazy-fade-enter-active{transition:opacity .35s ease-out\n}\n.lazy-fade,.lazy-fade-leave-to,.lazy-fade-enter{opacity:0;position:absolute\n}\n.lazy-fade-enter-to{opacity:1\n}\n.invite-friends{height:100%;background:#1f2843;overflow:hidden;display:grid;justify-content:center;grid-template-columns:minmax(auto, 1180px)\n}\n.invite-friends__landing{height:100%;padding:40px;display:flex;flex-direction:column;gap:72px\n}\n.invite-friends__landing__body__header{margin-top:75px;width:100%;display:flex;flex-direction:column;align-items:center\n}\n.invite-friends__landing__body__content{width:100%;margin-top:44px\n}\n.invite-friends__landing__control{align-self:center\n}\n.invite-friends__landing__control button{min-width:230px;min-height:60px\n}\n.invite-friends__dashboard{height:100%;width:100%\n}\n.invite-friends__dashboard__tabs{margin-top:38px\n}\n.invite-friends__dashboard__header{padding:32px;padding-bottom:0px\n}\n.invite-friends__dashboard__header h1{font-size:24px;line-height:32px;letter-spacing:0px\n}\n.invite-friends__dashboard__bonus-tab{padding:32px\n}\n.invite-friends__dashboard__bonus-tab h2.explain{font-size:16px;font-weight:400;line-height:24px;letter-spacing:.15px\n}\n.invite-friends__dashboard__bonus-tab .progress-bar{margin-top:32px\n}\n.invite-friends__dashboard__bonus-tab .go-to-exchange{margin-top:25px;display:flex;align-items:center;justify-content:space-between;background:#28314c;border-radius:12px;padding:16px;font-size:16px;font-weight:400;line-height:24px;letter-spacing:.15px\n}\n.invite-friends__dashboard-tab{padding:32px\n}\n.invite-friends__dashboard-tab__stats__header h2{font-size:18px;line-height:24px;letter-spacing:0px\n}\n.invite-friends__dashboard-tab__stats__body{margin-top:16px;display:grid;gap:16px;grid-template-columns:repeat(2, 1fr)\n}\n.invite-friends__dashboard-tab__code{margin-top:44px\n}\n.invite-friends__dashboard-tab__code__header h2{font-size:18px;line-height:24px;letter-spacing:0px\n}\n.invite-friends__dashboard-tab__code__body{margin-top:11px\n}\n.invite-friends__dashboard-tab__code__body h3{font-size:14px;font-weight:400;line-height:22px;letter-spacing:.15px;color:#858fad\n}\n.invite-friends__dashboard-tab__code__body .block__copy-wrap{margin-top:15px;display:flex;position:relative\n}\n.invite-friends__dashboard-tab__code__body .block__copy-wrap .message{transform:translate(-50%, 35px)\n}\n.invite-friends__dashboard-tab__code__body .block__copy-wrap .message-2{top:50%;left:0%;transform:translate(120%, 35px)\n}\n.invite-friends__dashboard-tab__code__body .block__copy{font-family:"Roboto",sans-serif;font-style:normal;font-weight:400;font-size:28px;line-height:28px;letter-spacing:.25px\n}\n.invite-friends__dashboard-tab__code__body .block__copy-buttons{margin-left:28px;width:100%;display:grid;gap:24px;grid-template-columns:repeat(auto-fill, minmax(128px, 1fr));grid-template-rows:auto\n}\n.invite-friends__dashboard-tab__how-it-works{margin-top:40px\n}\n.social-links .title{font-size:16px;font-weight:400;line-height:24px;letter-spacing:.15px;padding-top:20px\n}\n.social-links .links{padding-top:24px;display:flex;gap:24px\n}\n.social-links .links>img{cursor:pointer\n}',
          "",
        ]));
    },
    8858: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5379),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8859),
        s = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        b = Object(s["a"])(i.a, o["a"], o["b"], d, l, c, p);
      e["default"] = b.exports;
    },
    8859: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "invite-friends__landing" }, [
            a("div", { staticClass: "invite-friends__landing__body" }, [
              t._m(0),
              t._v(" "),
              a(
                "section",
                { staticClass: "invite-friends__landing__body__content" },
                [
                  a("AtomicLinkedCard", {
                    attrs: { linkedCardData: t.cardsOptions },
                  }),
                ],
                1,
              ),
            ]),
            t._v(" "),
            a("div", { staticClass: "invite-friends__landing__control" }, [
              a(
                "button",
                {
                  staticClass:
                    "new-button new-button-large new-button-yellow new-button-max300 new-button-bold",
                  on: { click: t.makeEarning },
                },
                [
                  t._v(
                    "\n      " +
                      t._s(t.$t("invitePage.inviteFriendsEarnRewards")) +
                      "\n    ",
                  ),
                ],
              ),
            ]),
          ]);
        },
        i = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "section",
              { staticClass: "invite-friends__landing__body__header" },
              [
                n("img", {
                  attrs: {
                    src: a(922),
                    height: "66",
                    width: "283",
                    alt: "Invite friends",
                  },
                }),
                t._v(" "),
                n("img", {
                  attrs: {
                    src: a(923),
                    height: "66",
                    width: "440",
                    alt: "Earn crypto together",
                  },
                }),
              ],
            );
          },
        ];
    },
    8860: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5380),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8873),
        s = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        b = Object(s["a"])(i.a, o["a"], o["b"], d, l, c, p);
      e["default"] = b.exports;
    },
    8861: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5381),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8870),
        s = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        b = Object(s["a"])(i.a, o["a"], o["b"], d, l, c, p);
      e["default"] = b.exports;
    },
    8862: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5382),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8869),
        s = a(5);
      function d(t) {
        a(8863);
      }
      var l = !1,
        c = d,
        p = "data-v-2b2715db",
        b = null,
        v = Object(s["a"])(i.a, o["a"], o["b"], l, c, p, b);
      e["default"] = v.exports;
    },
    8863: function (t, e, a) {
      var n = a(8864);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("4875e25c", n, !0, {});
    },
    8864: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-2b2715db{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-2b2715db{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-2b2715db{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-2b2715db{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-2b2715db{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-2b2715db{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-2b2715db{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-2b2715db{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-2b2715db{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-2b2715db{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-2b2715db{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-2b2715db]{color:#6b963b\n}\n.text-red[data-v-2b2715db]{color:#c03647\n}\n.text-gray[data-v-2b2715db]{color:#8290ad\n}\n.text-blue[data-v-2b2715db]{color:#00c2ff\n}\n.text-danger[data-v-2b2715db]{color:#8c4545\n}\n.text-title[data-v-2b2715db]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-2b2715db]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-2b2715db]{color:#f1b70b\n}\n.text-white[data-v-2b2715db]{color:#fff\n}\n.text-bigger[data-v-2b2715db]{font-size:18px;font-weight:500\n}\n.text-big[data-v-2b2715db]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-2b2715db]{font-size:14px\n}\n.text-middle-height[data-v-2b2715db]{line-height:24px\n}\n.text-small[data-v-2b2715db]{font-size:12px\n}\n.text-word-break[data-v-2b2715db]{word-break:break-all\n}\n.text-right[data-v-2b2715db]{text-align:right\n}\n.text-left[data-v-2b2715db]{text-align:left\n}\n.text-line-middle[data-v-2b2715db]{line-height:24px\n}\n.text-link[data-v-2b2715db],.text-link-underline[data-v-2b2715db]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-2b2715db]:hover,.text-link-underline[data-v-2b2715db]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-2b2715db]{text-decoration:underline\n}\n.text-center[data-v-2b2715db]{text-align:center\n}\n.text-pointer[data-v-2b2715db]{cursor:pointer\n}\n.gap-10[data-v-2b2715db]{gap:10px\n}\n.m-t-auto[data-v-2b2715db]{margin-top:auto\n}\n.m-t-4[data-v-2b2715db]{margin-top:4px\n}\n.m-t-5[data-v-2b2715db]{margin-top:5px\n}\n.m-t-8[data-v-2b2715db]{margin-top:10px\n}\n.m-t-10[data-v-2b2715db]{margin-top:10px\n}\n.m-t-13[data-v-2b2715db]{margin-top:10px\n}\n.m-t-15[data-v-2b2715db]{margin-top:15px\n}\n.m-t-16[data-v-2b2715db]{margin-top:16px\n}\n.m-t-20[data-v-2b2715db]{margin-top:20px\n}\n.m-t-24[data-v-2b2715db]{margin-top:24px\n}\n.m-t-25[data-v-2b2715db]{margin-top:25px\n}\n.m-t-26[data-v-2b2715db]{margin-top:26px\n}\n.m-t-30[data-v-2b2715db]{margin-top:30px\n}\n.m-t-35[data-v-2b2715db]{margin-top:35px\n}\n.m-t-40[data-v-2b2715db]{margin-top:40px\n}\n.m-t-45[data-v-2b2715db]{margin-top:45px\n}\n.m-t-50[data-v-2b2715db]{margin-top:50px\n}\n.m-t-60[data-v-2b2715db]{margin-top:60px\n}\n.m-t-65[data-v-2b2715db]{margin-top:65px\n}\n.m-t-80[data-v-2b2715db]{margin-top:80px\n}\n.m-l-5[data-v-2b2715db]{margin-left:5px\n}\n.m-l-10[data-v-2b2715db]{margin-left:10px\n}\n.m-l-15[data-v-2b2715db]{margin-left:15px\n}\n.m-l-20[data-v-2b2715db]{margin-left:20px\n}\n.m-l-25[data-v-2b2715db]{margin-left:25px\n}\n.m-l-30[data-v-2b2715db]{margin-left:30px\n}\n.m-l-35[data-v-2b2715db]{margin-left:35px\n}\n.m-r-5[data-v-2b2715db]{margin-right:5px\n}\n.m-r-10[data-v-2b2715db]{margin-right:10px\n}\n.m-r-15[data-v-2b2715db]{margin-right:15px\n}\n.m-r-30[data-v-2b2715db]{margin-right:30px\n}\n.m-b-5[data-v-2b2715db]{margin-bottom:5px !important\n}\n.m-b-15[data-v-2b2715db]{margin-bottom:15px !important\n}\n.m-b-20[data-v-2b2715db]{margin-bottom:20px !important\n}\n.m-b-30[data-v-2b2715db]{margin-bottom:30px !important\n}\n.m-b-25[data-v-2b2715db]{margin-bottom:25px !important\n}\n.m-b-50[data-v-2b2715db]{margin-bottom:50px !important\n}\n.p-t-40[data-v-2b2715db]{padding-top:40px\n}\n.p-t-85[data-v-2b2715db]{padding-top:85px !important\n}\n.hidden[data-v-2b2715db]{opacity:0 !important\n}\n.relative[data-v-2b2715db]{position:relative\n}\n.space-nowrap[data-v-2b2715db]{white-space:nowrap\n}\n.uppercase[data-v-2b2715db]{text-transform:uppercase\n}\n.lowercase[data-v-2b2715db]{text-transform:lowercase\n}\n.fade-enter-active[data-v-2b2715db]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-2b2715db]{transition:all .1s ease-out\n}\n.fade-enter[data-v-2b2715db],.fade-leave-to[data-v-2b2715db]{opacity:0\n}\n.fade-down-enter-active[data-v-2b2715db],.fade-down-leave-active[data-v-2b2715db],.fade-down-move[data-v-2b2715db]{transition:all .15s\n}\n.fade-down-leave-active[data-v-2b2715db],.fade-down-enter-active[data-v-2b2715db]{position:absolute !important\n}\n.fade-down-enter[data-v-2b2715db],.fade-down-leave-to[data-v-2b2715db]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-2b2715db],.scale-leave-active[data-v-2b2715db],.scale-move[data-v-2b2715db]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-2b2715db],.scale-leave-to[data-v-2b2715db]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-2b2715db],.slide-leave-active[data-v-2b2715db]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-2b2715db]{transition:all .2s ease\n}\n.slide-leave-active[data-v-2b2715db]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-2b2715db],.slide-leave-to[data-v-2b2715db]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-2b2715db],.slide-leave[data-v-2b2715db]{margin-bottom:0px\n}\n.slide-enter[data-v-2b2715db],.slide-leave-to[data-v-2b2715db]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-2b2715db],.slide-in-leave-active[data-v-2b2715db]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-2b2715db]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-2b2715db]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-2b2715db]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-2b2715db]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-2b2715db],.page-fade-enter-active[data-v-2b2715db]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-2b2715db],.page-fade-leave-to[data-v-2b2715db],.page-fade-enter[data-v-2b2715db]{opacity:0\n}\n.page-fade-enter-to[data-v-2b2715db]{opacity:1\n}\n.fade-out-leave-active[data-v-2b2715db],.fade-out-enter-active[data-v-2b2715db]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-2b2715db],.fade-out-leave-to[data-v-2b2715db],.fade-out-enter[data-v-2b2715db]{opacity:0\n}\n.fade-out-enter-to[data-v-2b2715db]{opacity:1\n}\n.slide-down-enter-active[data-v-2b2715db],.slide-down-leave-active[data-v-2b2715db]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-2b2715db],.slide-down-enter[data-v-2b2715db]{top:100%\n}\n.slide-down-leave[data-v-2b2715db],.slide-down-enter-to[data-v-2b2715db]{top:0%\n}\n.slide-out-enter-active[data-v-2b2715db],.slide-out-leave-active[data-v-2b2715db]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-2b2715db]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-2b2715db]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-2b2715db]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-2b2715db],.exchange-result.slide-out-enter[data-v-2b2715db]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-2b2715db],.exchange-pending.slide-out-enter[data-v-2b2715db]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-2b2715db],.slide-left-leave-active[data-v-2b2715db]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-2b2715db]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-2b2715db]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-2b2715db]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-2b2715db],.slide-right-leave-active[data-v-2b2715db]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-2b2715db]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-2b2715db]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-2b2715db]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-2b2715db],.spin-down-leave-active[data-v-2b2715db]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-2b2715db]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-2b2715db]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-2b2715db]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-2b2715db],.spin-up-leave-active[data-v-2b2715db]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-2b2715db]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-2b2715db]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-2b2715db]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-2b2715db],.puff-out-leave-active[data-v-2b2715db]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-2b2715db]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-2b2715db]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-2b2715db],.puff-out-enter-to[data-v-2b2715db]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-2b2715db],.collapse-fade-enter-active[data-v-2b2715db]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-2b2715db],.collapse-fade-leave-to[data-v-2b2715db],.collapse-fade-enter[data-v-2b2715db]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-2b2715db]{opacity:1\n}\n.lazy-fade-leave-active[data-v-2b2715db],.lazy-fade-enter-active[data-v-2b2715db]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-2b2715db],.lazy-fade-leave-to[data-v-2b2715db],.lazy-fade-enter[data-v-2b2715db]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-2b2715db]{opacity:1\n}\n.clipboard-wrap[data-v-2b2715db]{display:inline-flex;position:relative;align-items:center;cursor:pointer\n}\n.message[data-v-2b2715db]{min-width:200px;padding:2px 15px;top:50%;left:50%;transform:translate(-50%, -50%);font-size:11px;line-height:18px;position:absolute;background:#2fa6fa;border-radius:12px;text-align:center\n}\n.round__button[data-v-2b2715db]{flex-shrink:0;align-self:center;margin-left:20px;width:30px;height:30px;left:50%;top:-50% !important;border-radius:100%;transition:opacity .3s;display:flex;align-items:center;justify-content:center\n}\n.round__button>svg[data-v-2b2715db]{fill:#404a65\n}\n.round__button[data-v-2b2715db]:hover{cursor:pointer\n}\n.round__button:hover>svg[data-v-2b2715db]{fill:#7a859f\n}",
          "",
        ]));
    },
    8865: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5383),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8868),
        s = a(5);
      function d(t) {
        a(8866);
      }
      var l = !1,
        c = d,
        p = "data-v-88bed35c",
        b = null,
        v = Object(s["a"])(i.a, o["a"], o["b"], l, c, p, b);
      e["default"] = v.exports;
    },
    8866: function (t, e, a) {
      var n = a(8867);
      (n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals));
      var i = a(23).default;
      i("60d052a2", n, !0, {});
    },
    8867: function (t, e, a) {
      ((e = t.exports = a(22)(!1)),
        e.push([
          t.i,
          "\n@keyframes spinner-data-v-88bed35c{\n100%{transform:rotate(360deg)\n}\n}\n@keyframes spinner2-data-v-88bed35c{\n0%{transform:rotate(0deg) scale(1, 1)\n}\n50%{transform:rotate(180deg) scale(1.5, 1.5)\n}\n100%{transform:rotate(360deg) scale(1, 1)\n}\n}\n@keyframes changeup-data-v-88bed35c{\n0%{color:#8290ad\n}\n50%{color:#6a8c45\n}\n100%{color:#8290ad\n}\n}\n@keyframes changedown-data-v-88bed35c{\n0%{color:#8290ad\n}\n50%{color:#8a313e\n}\n100%{color:#8290ad\n}\n}\n@keyframes shake-data-v-88bed35c{\n10%,90%{transform:translate3d(-10px, 0, 0)\n}\n20%,80%{transform:translate3d(10px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-10px, 0, 0)\n}\n40%,60%{transform:translate3d(10px, 0, 0)\n}\n100%{transform:translate3d(0, 0, 0)\n}\n}\n@keyframes lds-ellipsis3-data-v-88bed35c{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@-webkit-keyframes lds-ellipsis3-data-v-88bed35c{\n0%,25%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n50%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n75%{left:100px\n}\n100%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n}\n@keyframes lds-ellipsis2-data-v-88bed35c{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis2-data-v-88bed35c{\n0%{-webkit-transform:scale(1);transform:scale(1)\n}\n25%,100%{-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@keyframes lds-ellipsis-data-v-88bed35c{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n@-webkit-keyframes lds-ellipsis-data-v-88bed35c{\n0%{left:32px;-webkit-transform:scale(0);transform:scale(0)\n}\n25%{left:32px;-webkit-transform:scale(1);transform:scale(1)\n}\n50%{left:100px\n}\n75%{left:168px;-webkit-transform:scale(1);transform:scale(1)\n}\n100%{left:168px;-webkit-transform:scale(0);transform:scale(0)\n}\n}\n.text-green[data-v-88bed35c]{color:#6b963b\n}\n.text-red[data-v-88bed35c]{color:#c03647\n}\n.text-gray[data-v-88bed35c]{color:#8290ad\n}\n.text-blue[data-v-88bed35c]{color:#00c2ff\n}\n.text-danger[data-v-88bed35c]{color:#8c4545\n}\n.text-title[data-v-88bed35c]{font-size:32px;line-height:60px\n}\n.text-small-title[data-v-88bed35c]{font-size:24px;line-height:28px\n}\n.text-yellow[data-v-88bed35c]{color:#f1b70b\n}\n.text-white[data-v-88bed35c]{color:#fff\n}\n.text-bigger[data-v-88bed35c]{font-size:18px;font-weight:500\n}\n.text-big[data-v-88bed35c]{font-size:16px;font-weight:500\n}\n.text-middle[data-v-88bed35c]{font-size:14px\n}\n.text-middle-height[data-v-88bed35c]{line-height:24px\n}\n.text-small[data-v-88bed35c]{font-size:12px\n}\n.text-word-break[data-v-88bed35c]{word-break:break-all\n}\n.text-right[data-v-88bed35c]{text-align:right\n}\n.text-left[data-v-88bed35c]{text-align:left\n}\n.text-line-middle[data-v-88bed35c]{line-height:24px\n}\n.text-link[data-v-88bed35c],.text-link-underline[data-v-88bed35c]{cursor:pointer;transition:all .3s ease-out;line-height:24px\n}\n.text-link[data-v-88bed35c]:hover,.text-link-underline[data-v-88bed35c]:hover{color:#1f8efa;text-decoration:none\n}\n.text-link-underline[data-v-88bed35c]{text-decoration:underline\n}\n.text-center[data-v-88bed35c]{text-align:center\n}\n.text-pointer[data-v-88bed35c]{cursor:pointer\n}\n.gap-10[data-v-88bed35c]{gap:10px\n}\n.m-t-auto[data-v-88bed35c]{margin-top:auto\n}\n.m-t-4[data-v-88bed35c]{margin-top:4px\n}\n.m-t-5[data-v-88bed35c]{margin-top:5px\n}\n.m-t-8[data-v-88bed35c]{margin-top:10px\n}\n.m-t-10[data-v-88bed35c]{margin-top:10px\n}\n.m-t-13[data-v-88bed35c]{margin-top:10px\n}\n.m-t-15[data-v-88bed35c]{margin-top:15px\n}\n.m-t-16[data-v-88bed35c]{margin-top:16px\n}\n.m-t-20[data-v-88bed35c]{margin-top:20px\n}\n.m-t-24[data-v-88bed35c]{margin-top:24px\n}\n.m-t-25[data-v-88bed35c]{margin-top:25px\n}\n.m-t-26[data-v-88bed35c]{margin-top:26px\n}\n.m-t-30[data-v-88bed35c]{margin-top:30px\n}\n.m-t-35[data-v-88bed35c]{margin-top:35px\n}\n.m-t-40[data-v-88bed35c]{margin-top:40px\n}\n.m-t-45[data-v-88bed35c]{margin-top:45px\n}\n.m-t-50[data-v-88bed35c]{margin-top:50px\n}\n.m-t-60[data-v-88bed35c]{margin-top:60px\n}\n.m-t-65[data-v-88bed35c]{margin-top:65px\n}\n.m-t-80[data-v-88bed35c]{margin-top:80px\n}\n.m-l-5[data-v-88bed35c]{margin-left:5px\n}\n.m-l-10[data-v-88bed35c]{margin-left:10px\n}\n.m-l-15[data-v-88bed35c]{margin-left:15px\n}\n.m-l-20[data-v-88bed35c]{margin-left:20px\n}\n.m-l-25[data-v-88bed35c]{margin-left:25px\n}\n.m-l-30[data-v-88bed35c]{margin-left:30px\n}\n.m-l-35[data-v-88bed35c]{margin-left:35px\n}\n.m-r-5[data-v-88bed35c]{margin-right:5px\n}\n.m-r-10[data-v-88bed35c]{margin-right:10px\n}\n.m-r-15[data-v-88bed35c]{margin-right:15px\n}\n.m-r-30[data-v-88bed35c]{margin-right:30px\n}\n.m-b-5[data-v-88bed35c]{margin-bottom:5px !important\n}\n.m-b-15[data-v-88bed35c]{margin-bottom:15px !important\n}\n.m-b-20[data-v-88bed35c]{margin-bottom:20px !important\n}\n.m-b-30[data-v-88bed35c]{margin-bottom:30px !important\n}\n.m-b-25[data-v-88bed35c]{margin-bottom:25px !important\n}\n.m-b-50[data-v-88bed35c]{margin-bottom:50px !important\n}\n.p-t-40[data-v-88bed35c]{padding-top:40px\n}\n.p-t-85[data-v-88bed35c]{padding-top:85px !important\n}\n.hidden[data-v-88bed35c]{opacity:0 !important\n}\n.relative[data-v-88bed35c]{position:relative\n}\n.space-nowrap[data-v-88bed35c]{white-space:nowrap\n}\n.uppercase[data-v-88bed35c]{text-transform:uppercase\n}\n.lowercase[data-v-88bed35c]{text-transform:lowercase\n}\n.fade-enter-active[data-v-88bed35c]{transition:all .1s ease-out\n}\n.fade-leave-active[data-v-88bed35c]{transition:all .1s ease-out\n}\n.fade-enter[data-v-88bed35c],.fade-leave-to[data-v-88bed35c]{opacity:0\n}\n.fade-down-enter-active[data-v-88bed35c],.fade-down-leave-active[data-v-88bed35c],.fade-down-move[data-v-88bed35c]{transition:all .15s\n}\n.fade-down-leave-active[data-v-88bed35c],.fade-down-enter-active[data-v-88bed35c]{position:absolute !important\n}\n.fade-down-enter[data-v-88bed35c],.fade-down-leave-to[data-v-88bed35c]{opacity:0;transform:translateY(40px)\n}\n.scale-enter-active[data-v-88bed35c],.scale-leave-active[data-v-88bed35c],.scale-move[data-v-88bed35c]{transition:all .3s;transform:scale(1);opacity:1\n}\n.scale-enter[data-v-88bed35c],.scale-leave-to[data-v-88bed35c]{transition:all .3s;opacity:0;transform:scale(0)\n}\n.slide-enter-active[data-v-88bed35c],.slide-leave-active[data-v-88bed35c]{transition:margin-bottom .2s ease-out\n}\n.slide-enter-active[data-v-88bed35c]{transition:all .2s ease\n}\n.slide-leave-active[data-v-88bed35c]{transition:all .1s cubic-bezier(1, 0.5, 0.8, 1)\n}\n.slide-enter[data-v-88bed35c],.slide-leave-to[data-v-88bed35c]{margin-bottom:-200px\n}\n.slide-enter-to[data-v-88bed35c],.slide-leave[data-v-88bed35c]{margin-bottom:0px\n}\n.slide-enter[data-v-88bed35c],.slide-leave-to[data-v-88bed35c]{opacity:0;height:0;overflow:hidden\n}\n.slide-in-enter-active[data-v-88bed35c],.slide-in-leave-active[data-v-88bed35c]{transition:transform .3s ease,opacity .3s ease\n}\n.slide-in-enter[data-v-88bed35c]{transform:translate(30%, 0) !important;opacity:0\n}\n.slide-in-enter-to[data-v-88bed35c]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave[data-v-88bed35c]{transform:translate(0, 0) !important;opacity:1\n}\n.slide-in-leave-to[data-v-88bed35c]{transform:translate(-30%, 0) !important;opacity:0\n}\n.page-fade-leave-active[data-v-88bed35c],.page-fade-enter-active[data-v-88bed35c]{transition:opacity .05s linear;pointer-events:none\n}\n.page-fade[data-v-88bed35c],.page-fade-leave-to[data-v-88bed35c],.page-fade-enter[data-v-88bed35c]{opacity:0\n}\n.page-fade-enter-to[data-v-88bed35c]{opacity:1\n}\n.fade-out-leave-active[data-v-88bed35c],.fade-out-enter-active[data-v-88bed35c]{transition:opacity .25s ease-out\n}\n.fade-out[data-v-88bed35c],.fade-out-leave-to[data-v-88bed35c],.fade-out-enter[data-v-88bed35c]{opacity:0\n}\n.fade-out-enter-to[data-v-88bed35c]{opacity:1\n}\n.slide-down-enter-active[data-v-88bed35c],.slide-down-leave-active[data-v-88bed35c]{transition:all .7s cubic-bezier(1, -0.19, 0.27, 1.31)\n}\n.slide-down-leave-to[data-v-88bed35c],.slide-down-enter[data-v-88bed35c]{top:100%\n}\n.slide-down-leave[data-v-88bed35c],.slide-down-enter-to[data-v-88bed35c]{top:0%\n}\n.slide-out-enter-active[data-v-88bed35c],.slide-out-leave-active[data-v-88bed35c]{transition:all .15s ease\n}\n.slide-out-leave-to[data-v-88bed35c]{transform:translateX(-85%);opacity:0\n}\n.slide-out-enter[data-v-88bed35c]{transform:translateX(85%);opacity:0\n}\n.slide-out-enter-to[data-v-88bed35c]{opacity:1;transform:translateX(0%)\n}\n.exchange-result.slide-out-leave-to[data-v-88bed35c],.exchange-result.slide-out-enter[data-v-88bed35c]{transform:translateX(-85%);opacity:0\n}\n.exchange-pending.slide-out-leave-to[data-v-88bed35c],.exchange-pending.slide-out-enter[data-v-88bed35c]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-active[data-v-88bed35c],.slide-left-leave-active[data-v-88bed35c]{transition:all .15s ease\n}\n.slide-left-leave-to[data-v-88bed35c]{transform:translateX(-85%);opacity:0\n}\n.slide-left-enter[data-v-88bed35c]{transform:translateX(85%);opacity:0\n}\n.slide-left-enter-to[data-v-88bed35c]{opacity:1;transform:translateX(0%)\n}\n.slide-right-enter-active[data-v-88bed35c],.slide-right-leave-active[data-v-88bed35c]{transition:all .15s ease\n}\n.slide-right-leave-to[data-v-88bed35c]{transform:translateX(85%);opacity:0\n}\n.slide-right-enter[data-v-88bed35c]{transform:translateX(-85%);opacity:0\n}\n.slide-right-enter-to[data-v-88bed35c]{opacity:1;transform:translateX(0%)\n}\n.spin-down-enter-active[data-v-88bed35c],.spin-down-leave-active[data-v-88bed35c]{transition:all .3s ease;position:absolute\n}\n.spin-down-leave-to[data-v-88bed35c]{transform:translateY(85%);opacity:0\n}\n.spin-down-enter[data-v-88bed35c]{transform:translateY(-85%);opacity:0\n}\n.spin-down-enter-to[data-v-88bed35c]{opacity:1;transform:translateY(0%)\n}\n.spin-up-enter-active[data-v-88bed35c],.spin-up-leave-active[data-v-88bed35c]{transition:all .3s ease;position:absolute\n}\n.spin-up-leave-to[data-v-88bed35c]{transform:translateY(-85%);opacity:0\n}\n.spin-up-enter[data-v-88bed35c]{transform:translateY(85%);opacity:0\n}\n.spin-up-enter-to[data-v-88bed35c]{opacity:1;transform:translateY(0%)\n}\n.puff-out-enter-active[data-v-88bed35c],.puff-out-leave-active[data-v-88bed35c]{transition:all .5s ease\n}\n.puff-out-leave-to[data-v-88bed35c]{transform:scale(2) !important;filter:blur(2px);opacity:0\n}\n.puff-out-enter[data-v-88bed35c]{transform:scale(0) !important;filter:blur(0px);opacity:0\n}\n.puff-out-leave[data-v-88bed35c],.puff-out-enter-to[data-v-88bed35c]{transform:scale(1) !important;filter:blur(0px);opacity:1\n}\n.collapse-fade-leave-active[data-v-88bed35c],.collapse-fade-enter-active[data-v-88bed35c]{transition:all .25s ease-out;pointer-events:none\n}\n.collapse-fade[data-v-88bed35c],.collapse-fade-leave-to[data-v-88bed35c],.collapse-fade-enter[data-v-88bed35c]{opacity:0;height:0px !important\n}\n.collapse-fade-enter-to[data-v-88bed35c]{opacity:1\n}\n.lazy-fade-leave-active[data-v-88bed35c],.lazy-fade-enter-active[data-v-88bed35c]{transition:opacity .35s ease-out\n}\n.lazy-fade[data-v-88bed35c],.lazy-fade-leave-to[data-v-88bed35c],.lazy-fade-enter[data-v-88bed35c]{opacity:0;position:absolute\n}\n.lazy-fade-enter-to[data-v-88bed35c]{opacity:1\n}\nsvg[data-v-88bed35c]{cursor:pointer;fill:#7a859f\n}\nsvg[data-v-88bed35c]:hover{fill:#fff\n}",
          "",
        ]));
    },
    8868: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            t.isBig
              ? a(
                  "svg",
                  {
                    staticClass: "icon__big",
                    attrs: {
                      width: "28",
                      height: "28",
                      viewBox: "0 0 28 28",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    a("path", {
                      attrs: {
                        d: "M17 2C18.3063 2 19.4175 2.83485 19.8293 4.00009L10.1278 4C8.34473 4 7.69816 4.18565 7.04631 4.53427C6.39446 4.88288 5.88288 5.39446 5.53427 6.04631C5.18565 6.69816 5 7.34473 5 9.12777L5.00009 19.8293C3.83485 19.4175 3 18.3063 3 17V8C3 4.68629 5.68629 2 9 2H17ZM21 6C22.6569 6 24 7.34315 24 9V22C24 23.6569 22.6569 25 21 25H10C8.34315 25 7 23.6569 7 22V9C7 7.34315 8.34315 6 10 6H21ZM21 8H10C9.44772 8 9 8.44772 9 9V22C9 22.5523 9.44772 23 10 23H21C21.5523 23 22 22.5523 22 22V9C22 8.44772 21.5523 8 21 8Z",
                      },
                    }),
                  ],
                )
              : a(
                  "svg",
                  {
                    staticClass: "icon__medium",
                    attrs: {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    a("path", {
                      attrs: {
                        d: "M9.2 3C7.91513 3 7.04169 3.00117 6.36656 3.05633C5.70893 3.11006 5.37263 3.20745 5.13803 3.32698C4.57354 3.6146 4.1146 4.07354 3.82698 4.63803C3.70745 4.87263 3.61006 5.20893 3.55633 5.86656C3.50117 6.54169 3.5 7.41513 3.5 8.7V11.3C3.5 11.8848 3.50117 12.2332 3.52227 12.4914C3.53128 12.6017 3.5423 12.6673 3.55 12.7028V12.8C3.55 13.5611 3.55 14.0636 3.61838 14.4418C3.41332 14.4096 3.24429 14.3596 3.09202 14.282C2.71569 14.0903 2.40973 13.7843 2.21799 13.408C2 12.9802 2 12.4201 2 11.3V8.7C2 6.17976 2 4.91965 2.49047 3.95704C2.9219 3.11031 3.61031 2.4219 4.45704 1.99047C5.41965 1.5 6.67976 1.5 9.2 1.5H11.2C12.3201 1.5 12.8802 1.5 13.308 1.71799C13.6843 1.90973 13.9903 2.21569 14.182 2.59202C14.2519 2.72915 14.2994 2.87986 14.3316 3.05824C13.9605 3 13.4714 3 12.75 3H9.2Z",
                      },
                    }),
                    t._v(" "),
                    a("path", {
                      attrs: {
                        d: "M9.2 3C7.91513 3 7.04169 3.00117 6.36656 3.05633C5.70893 3.11006 5.37263 3.20745 5.13803 3.32698C4.57354 3.6146 4.1146 4.07354 3.82698 4.63803C3.70745 4.87263 3.61006 5.20893 3.55633 5.86656C3.50117 6.54169 3.5 7.41513 3.5 8.7V11.3C3.5 11.8848 3.50117 12.2332 3.52227 12.4914C3.53128 12.6017 3.5423 12.6673 3.55 12.7028V12.8C3.55 13.5611 3.55 14.0636 3.61838 14.4418C3.41332 14.4096 3.24429 14.3596 3.09202 14.282C2.71569 14.0903 2.40973 13.7843 2.21799 13.408C2 12.9802 2 12.4201 2 11.3V8.7C2 6.17976 2 4.91965 2.49047 3.95704C2.9219 3.11031 3.61031 2.4219 4.45704 1.99047C5.41965 1.5 6.67976 1.5 9.2 1.5H11.2C12.3201 1.5 12.8802 1.5 13.308 1.71799C13.6843 1.90973 13.9903 2.21569 14.182 2.59202C14.2519 2.72915 14.2994 2.87986 14.3316 3.05824C13.9605 3 13.4714 3 12.75 3H9.2Z",
                      },
                    }),
                    t._v(" "),
                    a("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M5.1 7.7C5.1 6.5799 5.1 6.01984 5.31799 5.59202C5.50973 5.21569 5.81569 4.90973 6.19202 4.71799C6.61984 4.5 7.17989 4.5 8.3 4.5H14.3C15.4201 4.5 15.9802 4.5 16.408 4.71799C16.7843 4.90973 17.0903 5.21569 17.282 5.59202C17.5 6.01984 17.5 6.5799 17.5 7.7V15.3C17.5 16.4201 17.5 16.9802 17.282 17.408C17.0903 17.7843 16.7843 18.0903 16.408 18.282C15.9802 18.5 15.4201 18.5 14.3 18.5H8.3C7.1799 18.5 6.61984 18.5 6.19202 18.282C5.81569 18.0903 5.50973 17.7843 5.31799 17.408C5.1 16.9802 5.1 16.4201 5.1 15.3V7.7ZM8.3 6H14.3C14.8848 6 15.2332 6.00117 15.4914 6.02227C15.6491 6.03514 15.7153 6.05214 15.7331 6.05765C15.8224 6.10469 15.8953 6.17765 15.9424 6.26693C15.9479 6.28468 15.9649 6.35094 15.9777 6.50855C15.9988 6.76681 16 7.1152 16 7.7V15.3C16 15.8848 15.9988 16.2332 15.9777 16.4914C15.9649 16.6491 15.9479 16.7153 15.9424 16.7331C15.8953 16.8224 15.8224 16.8953 15.7331 16.9424C15.7153 16.9479 15.6491 16.9649 15.4914 16.9777C15.2332 16.9988 14.8848 17 14.3 17H8.3C7.7152 17 7.36681 16.9988 7.10855 16.9777C6.95094 16.9649 6.88469 16.9479 6.86693 16.9424C6.77765 16.8953 6.70469 16.8224 6.65765 16.7331C6.65214 16.7153 6.63514 16.6491 6.62227 16.4914C6.60117 16.2332 6.6 15.8848 6.6 15.3V7.7C6.6 7.1152 6.60117 6.76681 6.62227 6.50855C6.63514 6.35093 6.65214 6.28468 6.65765 6.26693C6.70469 6.17765 6.77765 6.10469 6.86693 6.05765C6.88468 6.05214 6.95094 6.03514 7.10855 6.02227C7.36681 6.00117 7.7152 6 8.3 6ZM15.7383 6.05945L15.7352 6.05833C15.7374 6.05904 15.7383 6.05943 15.7383 6.05945ZM15.9405 6.26175C15.9406 6.26169 15.941 6.26264 15.9417 6.26478L15.9405 6.26175ZM15.9405 16.7383L15.9417 16.7352C15.941 16.7373 15.9406 16.7383 15.9405 16.7383ZM15.7382 16.9405C15.7383 16.9406 15.7374 16.9409 15.7353 16.9417L15.7382 16.9405ZM6.86175 16.9405L6.86478 16.9417C6.86265 16.941 6.86169 16.9406 6.86175 16.9405ZM6.65945 16.7383C6.65943 16.7383 6.65904 16.7374 6.65833 16.7352L6.65945 16.7383ZM6.65945 6.26175L6.65833 6.26478C6.65904 6.26264 6.65943 6.26169 6.65945 6.26175ZM6.86214 6.05927C6.86212 6.05926 6.86185 6.05938 6.86214 6.05927L6.86478 6.05833C6.86347 6.05877 6.8626 6.05908 6.86214 6.05927Z",
                      },
                    }),
                    t._v(" "),
                    a("path", {
                      attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M5.1 7.7C5.1 6.5799 5.1 6.01984 5.31799 5.59202C5.50973 5.21569 5.81569 4.90973 6.19202 4.71799C6.61984 4.5 7.17989 4.5 8.3 4.5H14.3C15.4201 4.5 15.9802 4.5 16.408 4.71799C16.7843 4.90973 17.0903 5.21569 17.282 5.59202C17.5 6.01984 17.5 6.5799 17.5 7.7V15.3C17.5 16.4201 17.5 16.9802 17.282 17.408C17.0903 17.7843 16.7843 18.0903 16.408 18.282C15.9802 18.5 15.4201 18.5 14.3 18.5H8.3C7.1799 18.5 6.61984 18.5 6.19202 18.282C5.81569 18.0903 5.50973 17.7843 5.31799 17.408C5.1 16.9802 5.1 16.4201 5.1 15.3V7.7ZM8.3 6H14.3C14.8848 6 15.2332 6.00117 15.4914 6.02227C15.6491 6.03514 15.7153 6.05214 15.7331 6.05765C15.8224 6.10469 15.8953 6.17765 15.9424 6.26693C15.9479 6.28468 15.9649 6.35094 15.9777 6.50855C15.9988 6.76681 16 7.1152 16 7.7V15.3C16 15.8848 15.9988 16.2332 15.9777 16.4914C15.9649 16.6491 15.9479 16.7153 15.9424 16.7331C15.8953 16.8224 15.8224 16.8953 15.7331 16.9424C15.7153 16.9479 15.6491 16.9649 15.4914 16.9777C15.2332 16.9988 14.8848 17 14.3 17H8.3C7.7152 17 7.36681 16.9988 7.10855 16.9777C6.95094 16.9649 6.88469 16.9479 6.86693 16.9424C6.77765 16.8953 6.70469 16.8224 6.65765 16.7331C6.65214 16.7153 6.63514 16.6491 6.62227 16.4914C6.60117 16.2332 6.6 15.8848 6.6 15.3V7.7C6.6 7.1152 6.60117 6.76681 6.62227 6.50855C6.63514 6.35093 6.65214 6.28468 6.65765 6.26693C6.70469 6.17765 6.77765 6.10469 6.86693 6.05765C6.88468 6.05214 6.95094 6.03514 7.10855 6.02227C7.36681 6.00117 7.7152 6 8.3 6ZM15.7383 6.05945L15.7352 6.05833C15.7374 6.05904 15.7383 6.05943 15.7383 6.05945ZM15.9405 6.26175C15.9406 6.26169 15.941 6.26264 15.9417 6.26478L15.9405 6.26175ZM15.9405 16.7383L15.9417 16.7352C15.941 16.7373 15.9406 16.7383 15.9405 16.7383ZM15.7382 16.9405C15.7383 16.9406 15.7374 16.9409 15.7353 16.9417L15.7382 16.9405ZM6.86175 16.9405L6.86478 16.9417C6.86265 16.941 6.86169 16.9406 6.86175 16.9405ZM6.65945 16.7383C6.65943 16.7383 6.65904 16.7374 6.65833 16.7352L6.65945 16.7383ZM6.65945 6.26175L6.65833 6.26478C6.65904 6.26264 6.65943 6.26169 6.65945 6.26175ZM6.86214 6.05927C6.86212 6.05926 6.86185 6.05938 6.86214 6.05927L6.86478 6.05833C6.86347 6.05877 6.8626 6.05908 6.86214 6.05927Z",
                      },
                    }),
                  ],
                ),
          ]);
        },
        i = [];
    },
    8869: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "clipboard-wrap" },
            [
              t._t("default"),
              t._v(" "),
              t.isButton
                ? a(
                    "div",
                    {
                      staticClass: "round__button",
                      on: {
                        click: function (e) {
                          return (
                            e.stopPropagation(),
                            t.$copyToClipboard(t.clipboardText)
                          );
                        },
                      },
                    },
                    [a("IconClipboard", { attrs: { isBig: t.isBigIcon } })],
                    1,
                  )
                : t._e(),
              t._v(" "),
              a("transition", { attrs: { name: "fade-down" } }, [
                t.isCopiedToClipboard
                  ? a("div", { staticClass: "message" }, [
                      t._v("\n      " + t._s(t.clipboardMessage) + "\n    "),
                    ])
                  : t._e(),
              ]),
            ],
            2,
          );
        },
        i = [];
    },
    8870: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "invite-friends__dashboard-tab" },
            [
              a(
                "div",
                { staticClass: "invite-friends__dashboard-tab__stats" },
                [
                  a(
                    "div",
                    {
                      staticClass:
                        "invite-friends__dashboard-tab__stats__header",
                    },
                    [a("h2", [t._v(t._s(t.$t("invitePage.yourStats")))])],
                  ),
                  t._v(" "),
                  a(
                    "div",
                    {
                      staticClass: "invite-friends__dashboard-tab__stats__body",
                    },
                    t._l(t.infoGroup, function (e) {
                      return a(
                        "AtomicInfoGroup",
                        t._b({ key: e.label }, "AtomicInfoGroup", e, !1),
                      );
                    }),
                    1,
                  ),
                ],
              ),
              t._v(" "),
              a("div", { staticClass: "invite-friends__dashboard-tab__code" }, [
                a(
                  "div",
                  {
                    staticClass: "invite-friends__dashboard-tab__code__header",
                  },
                  [a("h2", [t._v(t._s(t.$t("invitePage.inviteFriends")))])],
                ),
                t._v(" "),
                a(
                  "div",
                  { staticClass: "invite-friends__dashboard-tab__code__body" },
                  [
                    a("h3", [t._v(t._s(t.$t("invitePage.promoCode")))]),
                    t._v(" "),
                    a(
                      "div",
                      {
                        staticClass:
                          "invite-friends__dashboard-tab__code__body__content",
                      },
                      [
                        a(
                          "div",
                          { staticClass: "block__copy-wrap" },
                          [
                            a(
                              "ClipboardWrap",
                              {
                                attrs: {
                                  textToClipboard: t.promoCode,
                                  clipboardMessage: t.$t(
                                    "title.promoCodeCopied",
                                  ),
                                },
                              },
                              [
                                a(
                                  "div",
                                  {
                                    ref: "clipboard_value",
                                    staticClass: "block__copy",
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.promoCode) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            t._v(" "),
                            a(
                              "div",
                              { staticClass: "block__copy-buttons" },
                              [
                                a(
                                  "AtomicButton",
                                  {
                                    on: {
                                      click: function (e) {
                                        return t.$copyToClipboard(t.link);
                                      },
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.$t("button.copyLink")) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                a(
                                  "AtomicButton",
                                  {
                                    attrs: {
                                      type: "fucking_gray_button_which_is_using_in_one_place",
                                    },
                                    on: { click: t.openModal },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.$t("button.share")) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                a("transition", { attrs: { name: "fade" } }, [
                                  t.isCopiedToClipboard
                                    ? a(
                                        "div",
                                        { staticClass: "message message-2" },
                                        [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("message.linkCopied")) +
                                              "\n              ",
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ]),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ],
                    ),
                  ],
                ),
              ]),
              t._v(" "),
              a(
                "div",
                { staticClass: "invite-friends__dashboard-tab__how-it-works" },
                [
                  a(
                    "AtomicLink",
                    {
                      attrs: { type: "secondary" },
                      on: { click: t.openLinkHowWorks },
                    },
                    [
                      t._v(
                        "\n      " +
                          t._s(t.$t("invitePage.howItWorks")) +
                          "\n    ",
                      ),
                    ],
                  ),
                ],
                1,
              ),
              t._v(" "),
              t.socialLinksModal
                ? a(
                    "AtomicModal",
                    {
                      attrs: { title: "Share link" },
                      on: { close: t.closeModal },
                    },
                    [
                      a("div", { staticClass: "social-links" }, [
                        a("div", { staticClass: "title" }, [
                          t._v(t._s(t.$t("invitePage.shareLinkOneClick"))),
                        ]),
                        t._v(" "),
                        a(
                          "div",
                          { staticClass: "links" },
                          t._l(t.socialNetworks, function (e) {
                            return a("img", {
                              key: e.network,
                              attrs: { src: t.getIcon(e.icon) },
                              on: {
                                click: function (a) {
                                  return t.openShare(e.network);
                                },
                              },
                            });
                          }),
                          0,
                        ),
                      ]),
                    ],
                  )
                : t._e(),
            ],
            1,
          );
        },
        i = [];
    },
    8871: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a(5384),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      var o = a(8872),
        s = a(5),
        d = !1,
        l = null,
        c = null,
        p = null,
        b = Object(s["a"])(i.a, o["a"], o["b"], d, l, c, p);
      e["default"] = b.exports;
    },
    8872: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "invite-friends__dashboard__bonus-tab" },
            [
              a("h2", { staticClass: "explain" }, [
                t._v(
                  "\n    " +
                    t._s(
                      t.$t("invitePage.swapToReceiveAWC", {
                        bonus: t.toCurrency(t.exchangeBonus.stages[0].volume),
                        bonus2: t.toCurrency(t.exchangeBonus.stages[1].volume),
                        bonus3: t.toCurrency(t.exchangeBonus.stages[2].volume),
                      }),
                    ) +
                    "\n  ",
                ),
              ]),
              t._v(" "),
              a(
                "div",
                { staticClass: "progress-bar" },
                [
                  a("AtomicRewardsBar", {
                    attrs: {
                      scaleLimits: t.getScaleLimits,
                      steps: t.getSteps,
                      value: t.getCurrentRewardValuePercent,
                      absValue: t.valueNum,
                    },
                  }),
                ],
                1,
              ),
              t._v(" "),
              a("div", { staticClass: "go-to-exchange" }, [
                a("span", [
                  t._v(
                    "\n      " +
                      t._s(
                        t.$t("invitePage.untilNextReward", {
                          untilNextReward: t.toCurrency(
                            t.exchangeBonus.untilNextReward,
                          ),
                        }),
                      ) +
                      "\n    ",
                  ),
                ]),
                t._v(" "),
                a(
                  "button",
                  {
                    staticClass:
                      "new-button new-button-yellow new-button-medium new-button-bold",
                    on: { click: t.goToExchange },
                  },
                  [t._v("\n      " + t._s(t.$t("button.swapNow")) + "\n    ")],
                ),
              ]),
            ],
          );
        },
        i = [];
    },
    8873: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "invite-friends__dashboard" },
            [
              a("div", { staticClass: "invite-friends__dashboard__header" }, [
                a("h1", [
                  t._v(t._s(t.$t("invitePage.inviteFriendsEarnRewards"))),
                ]),
              ]),
              t._v(" "),
              t.isReferral
                ? a(
                    "div",
                    { staticClass: "invite-friends__dashboard__tabs" },
                    [
                      a("AtomicTabs", {
                        attrs: {
                          modelValue: t.activeTabIndex,
                          tabs: ["INVITE FRIENDS", "MY SWAP BONUS"],
                          align: "left",
                        },
                        on: {
                          "update:modelValue": function (e) {
                            t.activeTabIndex = e;
                          },
                        },
                      }),
                    ],
                    1,
                  )
                : t._e(),
              t._v(" "),
              0 === t.activeTabIndex ? a("DashboardTab") : t._e(),
              t._v(" "),
              1 === t.activeTabIndex ? a("BonusTab") : t._e(),
            ],
            1,
          );
        },
        i = [];
    },
    8874: function (t, e, a) {
      "use strict";
      (a.d(e, "a", function () {
        return n;
      }),
        a.d(e, "b", function () {
          return i;
        }));
      var n = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "invite-friends" },
            [
              t.isLoading
                ? a(
                    "div",
                    { staticClass: "flex align-center justify-center" },
                    [a("AtomicLoader")],
                    1,
                  )
                : [t.isLanding ? a("InviteLanding") : a("InviteDashboard")],
            ],
            2,
          );
        },
        i = [];
    },
  },
]);
