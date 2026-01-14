(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [136],
  {
    2949: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = (r(n(3289)), r(n(4652)));
      let i = function (e, t) {
          if (e.transaction.signer === t.account.publicKey) return !1;
          if (e.transaction.otherTrans.signer === t.account.publicKey)
            return !1;
          for (let n = 0; n < e.transaction.signatures.length; n++)
            if (e.transaction.signatures[n].signer === t.account.publicKey)
              return !1;
          if (!t.meta.cosignatoryOf.length) return !1;
          for (let n = 0; n < t.meta.cosignatoryOf.length; n++) {
            if (
              t.meta.cosignatoryOf[n].publicKey ===
              e.transaction.otherTrans.signer
            )
              return !0;
            if (n === t.meta.cosignatoryOf.length - 1) return !1;
          }
          return !0;
        },
        a = function (e, t) {
          let n = null;
          for (n = 0; t.length > n; n++)
            if (t[n].meta.hash.data === e) return !0;
          return !1;
        },
        s = function (e, t) {
          let n = null;
          for (n = 0; t.length > n; n++)
            if (t[n].meta.hash.data === e) return n;
          return 0;
        },
        u = function (e, t) {
          let n = null;
          for (n = 0; t.length > n; n++)
            if (t[n].cosignatoryAccount === e) return !0;
          return !1;
        },
        c = Date.UTC(2015, 2, 29, 0, 6, 25, 0),
        l = function () {
          return Math.floor(Date.now() / 1e3 - c / 1e3);
        },
        d = function (e) {
          return (
            "0000000000000000000000000000000000000000000000000000000000000000" +
            e.replace(/^00/, "")
          ).slice(-64);
        },
        p = function (e) {
          return 64 !== e.length && 66 !== e.length
            ? (console.error(
                "Private key length must be 64 or 66 characters !",
              ),
              !1)
            : !!b(e) ||
                (console.error("Private key must be hexadecimal only !"), !1);
        },
        h = function (e) {
          return 64 !== e.length
            ? (console.error("Public key length must be 64 or 66 characters !"),
              !1)
            : !!b(e) ||
                (console.error("Public key must be hexadecimal only !"), !1);
        },
        m = function () {
          return new Date();
        },
        g = function (e) {
          let t = e.getDate(),
            n = e.getMonth() + 1,
            r = e.getFullYear();
          return (
            t < 10 && (t = "0" + t),
            n < 10 && (n = "0" + n),
            r + "-" + n + "-" + t
          );
        },
        v = function (e) {
          return e.toDateString();
        },
        y = function () {
          for (var e = 1; e < arguments.length; e++)
            for (var t in arguments[e])
              arguments[e].hasOwnProperty(t) &&
                (arguments[0][t] = arguments[e][t]);
          return arguments[0];
        },
        b = function (e) {
          return null !== e.match("^(0x|0X)?[a-fA-F0-9]+$");
        },
        w = function (e, t) {
          let n = {};
          for (let r = 0; r < t.length; r++)
            for (let i = 0; i < e.length; i++)
              e[i].mosaic.id.name === t[r] &&
                (n[o.default.mosaicIdToName(e[i].mosaic.id)] = e[i].mosaic);
          return n;
        },
        _ = function (e, t) {
          var n = [],
            r = e.length,
            o = 0;
          for (o; o < r; o++) {
            var i = e[o],
              a = t(i);
            a && n.push(i);
          }
          return n;
        },
        x = function (e) {
          var t = Number(e.toString().replace(/,/g, "."));
          return !Number.isNaN(t) && Number.isFinite(t) && t >= 0;
        },
        S = function (e) {
          return Number(e.toString().replace(/,/g, "."));
        },
        E = function (e) {
          return e.host + ":" + e.port;
        },
        T = function (e) {
          try {
            return (JSON.parse(e), !0);
          } catch (t) {
            return !1;
          }
        };
      e.exports = {
        needsSignature: i,
        haveTx: a,
        getTransactionIndex: s,
        haveCosig: u,
        createNEMTimeStamp: l,
        fixPrivateKey: d,
        isPrivateKeyValid: p,
        isPublicKeyValid: h,
        createTimeStamp: m,
        getTimestampShort: g,
        convertDateToString: v,
        extendObj: y,
        isHexadecimal: b,
        searchMosaicDefinitionArray: w,
        grep: _,
        isTextAmountValid: x,
        cleanTextAmount: S,
        formatEndpoint: E,
        isJSON: T,
      };
    },
    3092: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(6050);
      function i() {
        o.call(this);
      }
      (r(i, o),
        (i.prototype.removeAllListeners = function (e) {
          e ? delete this._listeners[e] : (this._listeners = {});
        }),
        (i.prototype.once = function (e, t) {
          var n = this,
            r = !1;
          function o() {
            (n.removeListener(e, o), r || ((r = !0), t.apply(this, arguments)));
          }
          this.on(e, o);
        }),
        (i.prototype.emit = function () {
          var e = arguments[0],
            t = this._listeners[e];
          if (t) {
            for (
              var n = arguments.length, r = new Array(n - 1), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            for (var i = 0; i < t.length; i++) t[i].apply(this, r);
          }
        }),
        (i.prototype.on = i.prototype.addListener =
          o.prototype.addEventListener),
        (i.prototype.removeListener = o.prototype.removeEventListener),
        (e.exports.EventEmitter = i));
    },
    3139: function (e, t) {},
    3213: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(4651)),
        i = r(n(3289)),
        a = r(n(2949)),
        s = r(n(816));
      let u = function (e) {
          ((this.data = e),
            (this.toString = function () {
              return i.default.ua2hex(this.data);
            }));
        },
        c = function (e, t, n) {
          let r = i.default.ua2words(t, n),
            o = s.default.SHA3(r, { outputLength: 512 });
          i.default.words2ua(e, o);
        },
        l = function () {
          ((this.sha3 = s.default.algo.SHA3.create({ outputLength: 512 })),
            (this.reset = function () {
              this.sha3 = s.default.algo.SHA3.create({ outputLength: 512 });
            }),
            (this.update = function (e) {
              if (e instanceof u) {
                let t = i.default.ua2words(e.data, e.data.length);
                s.default.enc.Hex.stringify(t);
                this.sha3.update(t);
              } else if (e instanceof Uint8Array) {
                let t = i.default.ua2words(e, e.length);
                this.sha3.update(t);
              } else {
                if ("string" !== typeof e)
                  throw new Error("unhandled argument");
                {
                  let t = s.default.enc.Hex.parse(e);
                  this.sha3.update(t);
                }
              }
            }),
            (this.finalize = function (e) {
              let t = this.sha3.finalize();
              i.default.words2ua(e, t);
            }));
        },
        d = function (e) {
          ((this.publicKey = new u(
            new Uint8Array(o.default.lowlevel.crypto_sign_PUBLICKEYBYTES),
          )),
            (this.secretKey = i.default.hex2ua_reversed(e)),
            o.default.lowlevel.crypto_sign_keypair_hash(
              this.publicKey.data,
              this.secretKey,
              c,
            ),
            (this.sign = (e) => {
              let t = new Uint8Array(64),
                n = new l(),
                r = o.default.lowlevel.crypto_sign_hash(t, this, e, n);
              if (!r)
                throw (
                  alert("Couldn't sign the tx, generated invalid signature"),
                  new Error("Couldn't sign the tx, generated invalid signature")
                );
              return new u(t);
            }));
        },
        p = function (e) {
          if (!e) throw new Error("Missing argument !");
          if (!a.default.isPrivateKeyValid(e))
            throw new Error("Private key is not valid !");
          let t = new d(e);
          return t;
        },
        h = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing argument !");
          if (!a.default.isPublicKeyValid(e))
            throw new Error("Public key is not valid !");
          if (!a.default.isHexadecimal(n)) return !1;
          if (128 !== n.length) return !1;
          let r = new l(),
            s = i.default.hex2ua(e),
            u = i.default.hex2ua(n);
          const c = o.default,
            d = [c.gf(), c.gf(), c.gf(), c.gf()],
            p = [c.gf(), c.gf(), c.gf(), c.gf()];
          if (c.unpackneg(p, s)) return !1;
          const h = new Uint8Array(64);
          (r.reset(),
            r.update(u.subarray(0, 32)),
            r.update(s),
            r.update(t),
            r.finalize(h),
            c.reduce(h),
            c.scalarmult(d, p, h));
          const m = new Uint8Array(64);
          return (
            c.scalarbase(p, u.subarray(32)),
            c.add(d, p),
            c.pack(m, d),
            0 === o.default.lowlevel.crypto_verify_32(u, 0, m, 0)
          );
        };
      e.exports = { create: p, verifySignature: h };
    },
    3214: function (e, t, n) {
      "use strict";
      var r = n(6049),
        o = function () {};
      e.exports = {
        getOrigin: function (e) {
          if (!e) return null;
          var t = new r(e);
          if ("file:" === t.protocol) return null;
          var n = t.port;
          return (
            n || (n = "https:" === t.protocol ? "443" : "80"),
            t.protocol + "//" + t.hostname + ":" + n
          );
        },
        isOriginEqual: function (e, t) {
          var n = this.getOrigin(e) === this.getOrigin(t);
          return (o("same", e, t, n), n);
        },
        isSchemeEqual: function (e, t) {
          return e.split(":")[0] === t.split(":")[0];
        },
        addPath: function (e, t) {
          var n = e.split("?");
          return n[0] + t + (n[1] ? "?" + n[1] : "");
        },
        addQuery: function (e, t) {
          return e + (-1 === e.indexOf("?") ? "?" + t : "&" + t);
        },
        isLoopbackAddr: function (e) {
          return (
            /^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(e) ||
            /^\[::1\]$/.test(e)
          );
        },
      };
    },
    3289: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(816));
      const i = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
      ];
      let a = function (e) {
          let t = e.toString(),
            n = new Uint8Array(t.length / 2);
          for (let r = 0; r < t.length; r += 2)
            n[n.length - 1 - r / 2] = parseInt(t.substr(r, 2), 16);
          return n;
        },
        s = function (e) {
          let t = e.toString(),
            n = new Uint8Array(t.length / 2);
          for (let r = 0; r < t.length; r += 2)
            n[r / 2] = parseInt(t.substr(r, 2), 16);
          return n;
        },
        u = function (e) {
          let t = "";
          for (let n = 0; n < e.length; n++) {
            let r = e[n];
            ((t += i[r >>> 4]), (t += i[15 & r]));
          }
          return t;
        },
        c = function (e) {
          let t = e.toString(),
            n = "";
          for (let r = 0; r < t.length; r += 2)
            n += String.fromCharCode(parseInt(t.substr(r, 2), 16));
          return n;
        },
        l = function (e) {
          let t = m(e),
            n = "";
          for (var r = 0; r < t.length; r++)
            n += d(t.charCodeAt(r).toString(16), "0", 2);
          return n;
        },
        d = function (e, t, n) {
          while (e.length < n) e = t + e;
          return e;
        },
        p = function (e, t) {
          let n = [];
          for (let r = 0; r < t; r += 4) {
            let t =
              16777216 * e[r] +
              65536 * (e[r + 1] || 0) +
              256 * (e[r + 2] || 0) +
              (e[r + 3] || 0);
            n.push(t > 2147483647 ? t - 4294967296 : t);
          }
          return o.default.lib.WordArray.create(n, t);
        },
        h = function (e, t) {
          for (let n = 0; n < e.length; n += 4) {
            let r = t.words[n / 4];
            (r < 0 && (r += 4294967296),
              (e[n] = r >>> 24),
              (e[n + 1] = (r >>> 16) & 255),
              (e[n + 2] = (r >>> 8) & 255),
              (e[n + 3] = 255 & r));
          }
          return e;
        },
        m = function (e) {
          let t = "";
          for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            r < 128
              ? (t += String.fromCharCode(r))
              : r > 127 && r < 2048
                ? ((t += String.fromCharCode((r >> 6) | 192)),
                  (t += String.fromCharCode((63 & r) | 128)))
                : ((t += String.fromCharCode((r >> 12) | 224)),
                  (t += String.fromCharCode(((r >> 6) & 63) | 128)),
                  (t += String.fromCharCode((63 & r) | 128)));
          }
          return t;
        },
        g = function (e) {
          let t = "",
            n = 0,
            r = 0,
            o = 0,
            i = 0;
          while (n < e.length)
            ((r = e.charCodeAt(n)),
              r < 128
                ? ((t += String.fromCharCode(r)), n++)
                : r > 191 && r < 224
                  ? ((o = e.charCodeAt(n + 1)),
                    (t += String.fromCharCode(((31 & r) << 6) | (63 & o))),
                    (n += 2))
                  : ((o = e.charCodeAt(n + 1)),
                    (i = e.charCodeAt(n + 2)),
                    (t += String.fromCharCode(
                      ((15 & r) << 12) | ((63 & o) << 6) | (63 & i),
                    )),
                    (n += 3)));
          return t;
        };
      e.exports = {
        hex2ua_reversed: a,
        hex2ua: s,
        ua2hex: u,
        hex2a: c,
        utf8ToHex: l,
        ua2words: p,
        words2ua: h,
        rstr2utf8: m,
        utf82rstr: g,
      };
    },
    3290: function (e, t) {
      const n = {
        mainnet: { id: 104, prefix: "68", char: "N" },
        testnet: { id: -104, prefix: "98", char: "T" },
        mijin: { id: 96, prefix: "60", char: "M" },
      };
      let r = function (e) {
          return 104 === e ? "68" : -104 === e ? "98" : "60";
        },
        o = function (e) {
          return 104 === e ? "N" : -104 === e ? "T" : "M";
        },
        i = function (e) {
          return "N" === e ? 104 : "T" === e ? -104 : 96;
        },
        a = function (e, t) {
          return t === n.mainnet.id
            ? 1744830464 | e
            : t === n.testnet.id
              ? 2550136832 | e
              : 1610612736 | e;
        };
      e.exports = {
        data: n,
        id2Prefix: r,
        id2Char: o,
        char2Id: i,
        getVersion: a,
      };
    },
    3291: function (e, t) {
      let n = 257,
        r = 2049,
        o = 4097,
        i = 4098,
        a = 4100,
        s = 8193,
        u = 16385,
        c = 16386;
      e.exports = {
        transfer: n,
        importanceTransfer: r,
        multisigModification: o,
        multisigSignature: i,
        multisigTransaction: a,
        provisionNamespace: s,
        mosaicDefinition: u,
        mosaicSupply: c,
      };
    },
    3292: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(7659)),
        i = r(n(7660)),
        a = r(n(7661)),
        s = r(n(7662)),
        u = r(n(7663)),
        c = r(n(7664));
      let l = function (e) {
          return p(0, e);
        },
        d = function (e) {
          return p(1, e);
        },
        p = function (e, t) {
          switch (t) {
            case "account":
              return e ? o.default : (0, o.default)();
            case "accountInfoQR":
              return e ? u.default.accountInfo : u.default.accountInfo();
            case "common":
              return e ? i.default.common : i.default.common();
            case "commonTransactionPart":
              return e ? s.default.commonPart : s.default.commonPart();
            case "endpoint":
              return e ? i.default.endpoint : i.default.endpoint();
            case "mosaicAttachment":
              return e ? a.default.attachment : a.default.attachment();
            case "mosaicDefinitionMetaDataPair":
              return a.default.definitionMetaDataPair();
            case "mosaicDefinitionTransaction":
              return e
                ? s.default.mosaicDefinition
                : s.default.mosaicDefinition();
            case "invoice":
              return e ? u.default.invoice : u.default.invoice();
            case "transferTransaction":
              return e ? s.default.transfer : s.default.transfer();
            case "signatureTransaction":
              return e ? s.default.signature : s.default.signature();
            case "messageTypes":
              return i.default.messageTypes();
            case "mosaicSupplyChangeTransaction":
              return e
                ? s.default.mosaicSupplyChange
                : s.default.mosaicSupplyChange();
            case "multisigAggregateModification":
              return e
                ? s.default.multisigAggregateModification
                : s.default.multisigAggregateModification();
            case "multisigCosignatoryModification":
              return e
                ? i.default.multisigCosignatoryModification
                : i.default.multisigCosignatoryModification();
            case "namespaceProvisionTransaction":
              return e
                ? s.default.namespaceProvision
                : s.default.namespaceProvision();
            case "importanceTransferTransaction":
              return e
                ? s.default.importanceTransfer
                : s.default.importanceTransfer();
            case "wallet":
              return e ? c.default : (0, c.default)();
            case "walletQR":
              return e ? u.default.wallet : u.default.wallet();
            default:
              return {};
          }
        };
      e.exports = { get: l, create: d };
    },
    3416: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(2949)),
        i = r(n(4652));
      const a = 3,
        s = 0.05,
        u = Math.floor(a * s * 1e6),
        c = 1e8,
        l = 1e7,
        d = 1e7,
        p = Math.floor(a * s * 1e6),
        h = Math.floor(a * s * 1e6),
        m = Math.floor(a * s * 1e6),
        g = Math.floor(10 * s * 1e6);
      let v = function (e, t) {
          if (!e.payload || !e.payload.length) return 0;
          let n = e.payload.length / 2;
          return (
            t && 2 == e.type && (n = 48 + 16 * Math.ceil(n / 16)),
            s * (Math.floor(n / 32) + 1)
          );
        },
        y = function (e, t, n) {
          let r = 0,
            a = 0,
            u = 0;
          for (let c = 0; c < n.length; c++) {
            let l = n[c],
              d = i.default.mosaicIdToName(l.mosaicId);
            if (!(d in t)) return ["unknown mosaic divisibility"];
            let p = t[d],
              h = o.default.grep(p.mosaicDefinition.properties, function (e) {
                return "divisibility" === e.name;
              }),
              m = 1 === h.length ? ~~h[0].value : 0,
              g = p.supply,
              v = l.quantity;
            if (g <= 1e4 && 0 === m) a = s;
            else {
              let t = 9e15,
                n = g * Math.pow(10, m);
              u = Math.floor(0.8 * Math.log(Math.floor(t / n)));
              let r = w(e, v, g, m);
              a = b(Math.ceil(r));
            }
            r += s * Math.max(1, a - u);
          }
          return r;
        },
        b = function (e) {
          let t = Math.floor(Math.max(1, e / 1e4));
          return t > 25 ? 25 : t;
        },
        w = function (e, t, n, r) {
          return 0 === n ? 0 : (8999999999 * t * e) / n / Math.pow(10, r + 6);
        };
      e.exports = {
        multisigTransaction: u,
        rootProvisionNamespaceTransaction: c,
        subProvisionNamespaceTransaction: l,
        mosaicDefinitionTransaction: d,
        namespaceAndMosaicCommon: p,
        signatureTransaction: h,
        calculateMosaics: y,
        calculateMinimum: b,
        calculateMessage: v,
        calculateXemEquivalent: w,
        currentFeeFactor: s,
        importanceTransferTransaction: m,
        multisigAggregateModificationTransaction: g,
      };
    },
    3417: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(n(2949)),
        i = r(n(7674));
      let a = function (e) {
        return new Promise((t, n) => {
          (0, i.default)(e, function (e, r, i) {
            let a;
            ((a = o.default.isJSON(i) ? JSON.parse(i) : i),
              e || 200 != r.statusCode
                ? n(e ? { code: -1, data: e } : { code: 0, data: a })
                : t(a));
          });
        });
      };
      t.default = a;
    },
    3552: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(3895),
          o = {},
          i = !1,
          a = t.chrome && t.chrome.app && t.chrome.app.runtime;
        e.exports = {
          attachEvent: function (e, n) {
            "undefined" !== typeof t.addEventListener
              ? t.addEventListener(e, n, !1)
              : t.document &&
                t.attachEvent &&
                (t.document.attachEvent("on" + e, n),
                t.attachEvent("on" + e, n));
          },
          detachEvent: function (e, n) {
            "undefined" !== typeof t.addEventListener
              ? t.removeEventListener(e, n, !1)
              : t.document &&
                t.detachEvent &&
                (t.document.detachEvent("on" + e, n),
                t.detachEvent("on" + e, n));
          },
          unloadAdd: function (e) {
            if (a) return null;
            var t = r.string(8);
            return (
              (o[t] = e),
              i && setTimeout(this.triggerUnloadCallbacks, 0),
              t
            );
          },
          unloadDel: function (e) {
            e in o && delete o[e];
          },
          triggerUnloadCallbacks: function () {
            for (var e in o) (o[e](), delete o[e]);
          },
        };
        var s = function () {
          i || ((i = !0), e.exports.triggerUnloadCallbacks());
        };
        a || e.exports.attachEvent("unload", s);
      }).call(this, n(13));
    },
    3891: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3289)),
        i = r(n(3290)),
        a = r(n(816));
      const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
      let u = function (e) {
          let t = [],
            n = Math.floor(e.length / 5),
            r = e.length % 5;
          if (0 != r) {
            for (let t = 0; t < 5 - r; t++) e += "\0";
            n += 1;
          }
          for (let i = 0; i < n; i++)
            (t.push(s.charAt(e.charCodeAt(5 * i) >> 3)),
              t.push(
                s.charAt(
                  ((7 & e.charCodeAt(5 * i)) << 2) |
                    (e.charCodeAt(5 * i + 1) >> 6),
                ),
              ),
              t.push(s.charAt((63 & e.charCodeAt(5 * i + 1)) >> 1)),
              t.push(
                s.charAt(
                  ((1 & e.charCodeAt(5 * i + 1)) << 4) |
                    (e.charCodeAt(5 * i + 2) >> 4),
                ),
              ),
              t.push(
                s.charAt(
                  ((15 & e.charCodeAt(5 * i + 2)) << 1) |
                    (e.charCodeAt(5 * i + 3) >> 7),
                ),
              ),
              t.push(s.charAt((127 & e.charCodeAt(5 * i + 3)) >> 2)),
              t.push(
                s.charAt(
                  ((3 & e.charCodeAt(5 * i + 3)) << 3) |
                    (e.charCodeAt(5 * i + 4) >> 5),
                ),
              ),
              t.push(s.charAt(31 & e.charCodeAt(5 * i + 4))));
          let o = 0;
          1 == r
            ? (o = 6)
            : 2 == r
              ? (o = 4)
              : 3 == r
                ? (o = 3)
                : 4 == r && (o = 1);
          for (let i = 0; i < o; i++) t.pop();
          for (let i = 0; i < o; i++) t.push("=");
          return t.join("");
        },
        c = function (e) {
          let t = new ArrayBuffer((5 * e.length) / 8),
            n = new Uint8Array(t);
          for (let r = 0; r < e.length / 8; r++) {
            let t = [0, 0, 0, 0, 0, 0, 0, 0];
            for (let n = 0; n < 8; ++n) t[n] = s.indexOf(e[8 * r + n]);
            let o = 0;
            ((n[5 * r + 0] = (t[o + 0] << 3) | (t[o + 1] >> 2)),
              (n[5 * r + 1] =
                ((3 & t[o + 1]) << 6) | (t[o + 2] << 1) | (t[o + 3] >> 4)),
              (n[5 * r + 2] = ((15 & t[o + 3]) << 4) | (t[o + 4] >> 1)),
              (n[5 * r + 3] =
                ((1 & t[o + 4]) << 7) | (t[o + 5] << 2) | (t[o + 6] >> 3)),
              (n[5 * r + 4] = ((7 & t[o + 6]) << 5) | t[o + 7]));
          }
          return n;
        },
        l = function (e, t) {
          let n = a.default.enc.Hex.parse(e),
            r = a.default.SHA3(n, { outputLength: 256 }),
            s = a.default.RIPEMD160(r),
            c = i.default.id2Prefix(t),
            l = c + a.default.enc.Hex.stringify(s),
            d = a.default.SHA3(a.default.enc.Hex.parse(l), {
              outputLength: 256,
            }),
            p = a.default.enc.Hex.stringify(d).substr(0, 8),
            h = o.default.hex2a(l + p),
            m = u(h);
          return m;
        },
        d = function (e, t) {
          let n = e.toString().toUpperCase().replace(/-/g, ""),
            r = n[0];
          return i.default.id2Char(t) === r;
        },
        p = function (e) {
          let t = e.toString().toUpperCase().replace(/-/g, "");
          if (!t || 40 !== t.length) return !1;
          let n = o.default.ua2hex(c(t)),
            r = a.default.enc.Hex.parse(n.slice(0, 42)),
            i = a.default.SHA3(r, { outputLength: 256 }),
            s = a.default.enc.Hex.stringify(i).substr(0, 8);
          return s === n.slice(42);
        },
        h = function (e) {
          return e.toUpperCase().replace(/-|\s/g, "");
        };
      e.exports = {
        b32encode: u,
        b32decode: c,
        toAddress: l,
        isFromNetwork: d,
        isValid: p,
        clean: h,
      };
    },
    3892: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3292));
      let c = function (e, t, n, r) {
        let c = i.default.createNEMTimeStamp(),
          l = o.default.getVersion(1, r),
          d = u.default.create("commonTransactionPart")(
            a.default.multisigTransaction,
            e,
            c,
            n,
            l,
            r,
          ),
          p = { fee: s.default.multisigTransaction, otherTrans: t },
          h = i.default.extendObj(d, p);
        return h;
      };
      t.default = c;
    },
    3893: function (e, t, n) {
      (function (t) {
        const n = { "Content-Type": "application/x-www-form-urlencoded" };
        let r = function (e) {
          return {
            "Content-Type": "application/json",
            "Content-Length": t.from(e).byteLength,
          };
        };
        e.exports = { urlEncoded: n, json: r };
      }).call(this, n(2).Buffer);
    },
    3895: function (e, t, n) {
      "use strict";
      var r = n(7806),
        o = "abcdefghijklmnopqrstuvwxyz012345";
      e.exports = {
        string: function (e) {
          for (
            var t = o.length, n = r.randomBytes(e), i = [], a = 0;
            a < e;
            a++
          )
            i.push(o.substr(n[a] % t, 1));
          return i.join("");
        },
        number: function (e) {
          return Math.floor(Math.random() * e);
        },
        numberString: function (e) {
          var t = ("" + (e - 1)).length,
            n = new Array(t + 1).join("0");
          return (n + this.number(e)).slice(-t);
        },
      };
    },
    3896: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3214),
        i = n(6051),
        a = function () {};
      function s(e) {
        return function (t, n, r) {
          a("create ajax sender", t, n);
          var i = {};
          "string" === typeof n &&
            (i.headers = { "Content-type": "text/plain" });
          var s = o.addPath(t, "/xhr_send"),
            u = new e("POST", s, n, i);
          return (
            u.once("finish", function (e) {
              if ((a("finish", e), (u = null), 200 !== e && 204 !== e))
                return r(new Error("http status " + e));
              r();
            }),
            function () {
              (a("abort"), u.close(), (u = null));
              var e = new Error("Aborted");
              ((e.code = 1e3), r(e));
            }
          );
        };
      }
      function u(e, t, n, r) {
        i.call(this, e, t, s(r), n, r);
      }
      (r(u, i), (e.exports = u));
    },
    4287: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(6052);
      function i(e, t, n) {
        o.call(this, e, t, n, { noCredentials: !0 });
      }
      (r(i, o), (i.enabled = o.enabled), (e.exports = i));
    },
    4288: function (e, t, n) {
      "use strict";
      (function (t) {
        e.exports = {
          isOpera: function () {
            return t.navigator && /opera/i.test(t.navigator.userAgent);
          },
          isKonqueror: function () {
            return t.navigator && /konqueror/i.test(t.navigator.userAgent);
          },
          hasDomain: function () {
            if (!t.document) return !0;
            try {
              return !!t.document.domain;
            } catch (e) {
              return !1;
            }
          },
        };
      }).call(this, n(13));
    },
    4289: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(3552),
          o = n(4288),
          i = function () {};
        ((e.exports = {
          WPrefix: "_jp",
          currentWindowId: null,
          polluteGlobalNamespace: function () {
            e.exports.WPrefix in t || (t[e.exports.WPrefix] = {});
          },
          postMessage: function (n, r) {
            t.parent !== t
              ? t.parent.postMessage(
                  JSON.stringify({
                    windowId: e.exports.currentWindowId,
                    type: n,
                    data: r || "",
                  }),
                  "*",
                )
              : i("Cannot postMessage, no parent window.", n, r);
          },
          createIframe: function (e, n) {
            var o,
              a,
              s = t.document.createElement("iframe"),
              u = function () {
                (i("unattach"), clearTimeout(o));
                try {
                  s.onload = null;
                } catch (e) {}
                s.onerror = null;
              },
              c = function () {
                (i("cleanup"),
                  s &&
                    (u(),
                    setTimeout(function () {
                      (s && s.parentNode.removeChild(s), (s = null));
                    }, 0),
                    r.unloadDel(a)));
              },
              l = function (e) {
                (i("onerror", e), s && (c(), n(e)));
              },
              d = function (e, t) {
                (i("post", e, t),
                  setTimeout(function () {
                    try {
                      s && s.contentWindow && s.contentWindow.postMessage(e, t);
                    } catch (n) {}
                  }, 0));
              };
            return (
              (s.src = e),
              (s.style.display = "none"),
              (s.style.position = "absolute"),
              (s.onerror = function () {
                l("onerror");
              }),
              (s.onload = function () {
                (i("onload"),
                  clearTimeout(o),
                  (o = setTimeout(function () {
                    l("onload timeout");
                  }, 2e3)));
              }),
              t.document.body.appendChild(s),
              (o = setTimeout(function () {
                l("timeout");
              }, 15e3)),
              (a = r.unloadAdd(c)),
              { post: d, cleanup: c, loaded: u }
            );
          },
          createHtmlfile: function (n, o) {
            var a,
              s,
              u,
              c = ["Active"].concat("Object").join("X"),
              l = new t[c]("htmlfile"),
              d = function () {
                (clearTimeout(a), (u.onerror = null));
              },
              p = function () {
                l &&
                  (d(),
                  r.unloadDel(s),
                  u.parentNode.removeChild(u),
                  (u = l = null),
                  CollectGarbage());
              },
              h = function (e) {
                (i("onerror", e), l && (p(), o(e)));
              },
              m = function (e, t) {
                try {
                  setTimeout(function () {
                    u && u.contentWindow && u.contentWindow.postMessage(e, t);
                  }, 0);
                } catch (n) {}
              };
            (l.open(),
              l.write(
                '<html><script>document.domain="' +
                  t.document.domain +
                  '";<\/script></html>',
              ),
              l.close(),
              (l.parentWindow[e.exports.WPrefix] = t[e.exports.WPrefix]));
            var g = l.createElement("div");
            return (
              l.body.appendChild(g),
              (u = l.createElement("iframe")),
              g.appendChild(u),
              (u.src = n),
              (u.onerror = function () {
                h("onerror");
              }),
              (a = setTimeout(function () {
                h("timeout");
              }, 15e3)),
              (s = r.unloadAdd(p)),
              { post: m, cleanup: p, loaded: d }
            );
          },
        }),
          (e.exports.iframeEnabled = !1),
          t.document &&
            (e.exports.iframeEnabled =
              ("function" === typeof t.postMessage ||
                "object" === typeof t.postMessage) &&
              !o.isKonqueror()));
      }).call(this, n(13));
    },
    4651: function (e, t, n) {
      (function (e) {
        "use strict";
        var t = function (e) {
            var t,
              n = new Float64Array(16);
            if (e) for (t = 0; t < e.length; t++) n[t] = e[t];
            return n;
          },
          r = function () {
            throw new Error("no PRNG");
          },
          o = (new Uint8Array(16), new Uint8Array(32));
        o[0] = 9;
        var i = t(),
          a = t([1]),
          s = t([56129, 1]),
          u = t([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          c = t([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ]),
          l = t([
            54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412,
            64982, 57905, 49316, 21502, 52590, 14035, 8553,
          ]),
          d = t([
            26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
            26214, 26214, 26214, 26214, 26214, 26214, 26214,
          ]),
          p = t([
            41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
            153, 11085, 57099, 20417, 9344, 11139,
          ]);
        function h(e, t, n, r, o) {
          var i,
            a = 0;
          for (i = 0; i < o; i++) a |= e[t + i] ^ n[r + i];
          return (1 & ((a - 1) >>> 8)) - 1;
        }
        function m(e, t, n, r) {
          return h(e, t, n, r, 32);
        }
        function g(e, t) {
          var n;
          for (n = 0; n < 16; n++) e[n] = 0 | t[n];
        }
        function v(e) {
          var t,
            n,
            r = 1;
          for (t = 0; t < 16; t++)
            ((n = e[t] + r + 65535),
              (r = Math.floor(n / 65536)),
              (e[t] = n - 65536 * r));
          e[0] += r - 1 + 37 * (r - 1);
        }
        function y(e, t, n) {
          for (var r, o = ~(n - 1), i = 0; i < 16; i++)
            ((r = o & (e[i] ^ t[i])), (e[i] ^= r), (t[i] ^= r));
        }
        function b(e, n) {
          var r,
            o,
            i,
            a = t(),
            s = t();
          for (r = 0; r < 16; r++) s[r] = n[r];
          for (v(s), v(s), v(s), o = 0; o < 2; o++) {
            for (a[0] = s[0] - 65517, r = 1; r < 15; r++)
              ((a[r] = s[r] - 65535 - ((a[r - 1] >> 16) & 1)),
                (a[r - 1] &= 65535));
            ((a[15] = s[15] - 32767 - ((a[14] >> 16) & 1)),
              (i = (a[15] >> 16) & 1),
              (a[14] &= 65535),
              y(s, a, 1 - i));
          }
          for (r = 0; r < 16; r++)
            ((e[2 * r] = 255 & s[r]), (e[2 * r + 1] = s[r] >> 8));
        }
        function w(e, t) {
          var n = new Uint8Array(32),
            r = new Uint8Array(32);
          return (b(n, e), b(r, t), m(n, 0, r, 0));
        }
        function _(e) {
          var t = new Uint8Array(32);
          return (b(t, e), 1 & t[0]);
        }
        function x(e, t) {
          var n;
          for (n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
          e[15] &= 32767;
        }
        function S(e, t, n) {
          for (var r = 0; r < 16; r++) e[r] = t[r] + n[r];
        }
        function E(e, t, n) {
          for (var r = 0; r < 16; r++) e[r] = t[r] - n[r];
        }
        function T(e, t, n) {
          var r,
            o,
            i = 0,
            a = 0,
            s = 0,
            u = 0,
            c = 0,
            l = 0,
            d = 0,
            p = 0,
            h = 0,
            m = 0,
            g = 0,
            v = 0,
            y = 0,
            b = 0,
            w = 0,
            _ = 0,
            x = 0,
            S = 0,
            E = 0,
            T = 0,
            A = 0,
            C = 0,
            O = 0,
            M = 0,
            N = 0,
            k = 0,
            P = 0,
            I = 0,
            U = 0,
            H = 0,
            L = 0,
            K = n[0],
            R = n[1],
            D = n[2],
            J = n[3],
            F = n[4],
            B = n[5],
            G = n[6],
            q = n[7],
            W = n[8],
            V = n[9],
            X = n[10],
            z = n[11],
            Y = n[12],
            $ = n[13],
            Q = n[14],
            Z = n[15];
          ((r = t[0]),
            (i += r * K),
            (a += r * R),
            (s += r * D),
            (u += r * J),
            (c += r * F),
            (l += r * B),
            (d += r * G),
            (p += r * q),
            (h += r * W),
            (m += r * V),
            (g += r * X),
            (v += r * z),
            (y += r * Y),
            (b += r * $),
            (w += r * Q),
            (_ += r * Z),
            (r = t[1]),
            (a += r * K),
            (s += r * R),
            (u += r * D),
            (c += r * J),
            (l += r * F),
            (d += r * B),
            (p += r * G),
            (h += r * q),
            (m += r * W),
            (g += r * V),
            (v += r * X),
            (y += r * z),
            (b += r * Y),
            (w += r * $),
            (_ += r * Q),
            (x += r * Z),
            (r = t[2]),
            (s += r * K),
            (u += r * R),
            (c += r * D),
            (l += r * J),
            (d += r * F),
            (p += r * B),
            (h += r * G),
            (m += r * q),
            (g += r * W),
            (v += r * V),
            (y += r * X),
            (b += r * z),
            (w += r * Y),
            (_ += r * $),
            (x += r * Q),
            (S += r * Z),
            (r = t[3]),
            (u += r * K),
            (c += r * R),
            (l += r * D),
            (d += r * J),
            (p += r * F),
            (h += r * B),
            (m += r * G),
            (g += r * q),
            (v += r * W),
            (y += r * V),
            (b += r * X),
            (w += r * z),
            (_ += r * Y),
            (x += r * $),
            (S += r * Q),
            (E += r * Z),
            (r = t[4]),
            (c += r * K),
            (l += r * R),
            (d += r * D),
            (p += r * J),
            (h += r * F),
            (m += r * B),
            (g += r * G),
            (v += r * q),
            (y += r * W),
            (b += r * V),
            (w += r * X),
            (_ += r * z),
            (x += r * Y),
            (S += r * $),
            (E += r * Q),
            (T += r * Z),
            (r = t[5]),
            (l += r * K),
            (d += r * R),
            (p += r * D),
            (h += r * J),
            (m += r * F),
            (g += r * B),
            (v += r * G),
            (y += r * q),
            (b += r * W),
            (w += r * V),
            (_ += r * X),
            (x += r * z),
            (S += r * Y),
            (E += r * $),
            (T += r * Q),
            (A += r * Z),
            (r = t[6]),
            (d += r * K),
            (p += r * R),
            (h += r * D),
            (m += r * J),
            (g += r * F),
            (v += r * B),
            (y += r * G),
            (b += r * q),
            (w += r * W),
            (_ += r * V),
            (x += r * X),
            (S += r * z),
            (E += r * Y),
            (T += r * $),
            (A += r * Q),
            (C += r * Z),
            (r = t[7]),
            (p += r * K),
            (h += r * R),
            (m += r * D),
            (g += r * J),
            (v += r * F),
            (y += r * B),
            (b += r * G),
            (w += r * q),
            (_ += r * W),
            (x += r * V),
            (S += r * X),
            (E += r * z),
            (T += r * Y),
            (A += r * $),
            (C += r * Q),
            (O += r * Z),
            (r = t[8]),
            (h += r * K),
            (m += r * R),
            (g += r * D),
            (v += r * J),
            (y += r * F),
            (b += r * B),
            (w += r * G),
            (_ += r * q),
            (x += r * W),
            (S += r * V),
            (E += r * X),
            (T += r * z),
            (A += r * Y),
            (C += r * $),
            (O += r * Q),
            (M += r * Z),
            (r = t[9]),
            (m += r * K),
            (g += r * R),
            (v += r * D),
            (y += r * J),
            (b += r * F),
            (w += r * B),
            (_ += r * G),
            (x += r * q),
            (S += r * W),
            (E += r * V),
            (T += r * X),
            (A += r * z),
            (C += r * Y),
            (O += r * $),
            (M += r * Q),
            (N += r * Z),
            (r = t[10]),
            (g += r * K),
            (v += r * R),
            (y += r * D),
            (b += r * J),
            (w += r * F),
            (_ += r * B),
            (x += r * G),
            (S += r * q),
            (E += r * W),
            (T += r * V),
            (A += r * X),
            (C += r * z),
            (O += r * Y),
            (M += r * $),
            (N += r * Q),
            (k += r * Z),
            (r = t[11]),
            (v += r * K),
            (y += r * R),
            (b += r * D),
            (w += r * J),
            (_ += r * F),
            (x += r * B),
            (S += r * G),
            (E += r * q),
            (T += r * W),
            (A += r * V),
            (C += r * X),
            (O += r * z),
            (M += r * Y),
            (N += r * $),
            (k += r * Q),
            (P += r * Z),
            (r = t[12]),
            (y += r * K),
            (b += r * R),
            (w += r * D),
            (_ += r * J),
            (x += r * F),
            (S += r * B),
            (E += r * G),
            (T += r * q),
            (A += r * W),
            (C += r * V),
            (O += r * X),
            (M += r * z),
            (N += r * Y),
            (k += r * $),
            (P += r * Q),
            (I += r * Z),
            (r = t[13]),
            (b += r * K),
            (w += r * R),
            (_ += r * D),
            (x += r * J),
            (S += r * F),
            (E += r * B),
            (T += r * G),
            (A += r * q),
            (C += r * W),
            (O += r * V),
            (M += r * X),
            (N += r * z),
            (k += r * Y),
            (P += r * $),
            (I += r * Q),
            (U += r * Z),
            (r = t[14]),
            (w += r * K),
            (_ += r * R),
            (x += r * D),
            (S += r * J),
            (E += r * F),
            (T += r * B),
            (A += r * G),
            (C += r * q),
            (O += r * W),
            (M += r * V),
            (N += r * X),
            (k += r * z),
            (P += r * Y),
            (I += r * $),
            (U += r * Q),
            (H += r * Z),
            (r = t[15]),
            (_ += r * K),
            (x += r * R),
            (S += r * D),
            (E += r * J),
            (T += r * F),
            (A += r * B),
            (C += r * G),
            (O += r * q),
            (M += r * W),
            (N += r * V),
            (k += r * X),
            (P += r * z),
            (I += r * Y),
            (U += r * $),
            (H += r * Q),
            (L += r * Z),
            (i += 38 * x),
            (a += 38 * S),
            (s += 38 * E),
            (u += 38 * T),
            (c += 38 * A),
            (l += 38 * C),
            (d += 38 * O),
            (p += 38 * M),
            (h += 38 * N),
            (m += 38 * k),
            (g += 38 * P),
            (v += 38 * I),
            (y += 38 * U),
            (b += 38 * H),
            (w += 38 * L),
            (o = 1),
            (r = i + o + 65535),
            (o = Math.floor(r / 65536)),
            (i = r - 65536 * o),
            (r = a + o + 65535),
            (o = Math.floor(r / 65536)),
            (a = r - 65536 * o),
            (r = s + o + 65535),
            (o = Math.floor(r / 65536)),
            (s = r - 65536 * o),
            (r = u + o + 65535),
            (o = Math.floor(r / 65536)),
            (u = r - 65536 * o),
            (r = c + o + 65535),
            (o = Math.floor(r / 65536)),
            (c = r - 65536 * o),
            (r = l + o + 65535),
            (o = Math.floor(r / 65536)),
            (l = r - 65536 * o),
            (r = d + o + 65535),
            (o = Math.floor(r / 65536)),
            (d = r - 65536 * o),
            (r = p + o + 65535),
            (o = Math.floor(r / 65536)),
            (p = r - 65536 * o),
            (r = h + o + 65535),
            (o = Math.floor(r / 65536)),
            (h = r - 65536 * o),
            (r = m + o + 65535),
            (o = Math.floor(r / 65536)),
            (m = r - 65536 * o),
            (r = g + o + 65535),
            (o = Math.floor(r / 65536)),
            (g = r - 65536 * o),
            (r = v + o + 65535),
            (o = Math.floor(r / 65536)),
            (v = r - 65536 * o),
            (r = y + o + 65535),
            (o = Math.floor(r / 65536)),
            (y = r - 65536 * o),
            (r = b + o + 65535),
            (o = Math.floor(r / 65536)),
            (b = r - 65536 * o),
            (r = w + o + 65535),
            (o = Math.floor(r / 65536)),
            (w = r - 65536 * o),
            (r = _ + o + 65535),
            (o = Math.floor(r / 65536)),
            (_ = r - 65536 * o),
            (i += o - 1 + 37 * (o - 1)),
            (o = 1),
            (r = i + o + 65535),
            (o = Math.floor(r / 65536)),
            (i = r - 65536 * o),
            (r = a + o + 65535),
            (o = Math.floor(r / 65536)),
            (a = r - 65536 * o),
            (r = s + o + 65535),
            (o = Math.floor(r / 65536)),
            (s = r - 65536 * o),
            (r = u + o + 65535),
            (o = Math.floor(r / 65536)),
            (u = r - 65536 * o),
            (r = c + o + 65535),
            (o = Math.floor(r / 65536)),
            (c = r - 65536 * o),
            (r = l + o + 65535),
            (o = Math.floor(r / 65536)),
            (l = r - 65536 * o),
            (r = d + o + 65535),
            (o = Math.floor(r / 65536)),
            (d = r - 65536 * o),
            (r = p + o + 65535),
            (o = Math.floor(r / 65536)),
            (p = r - 65536 * o),
            (r = h + o + 65535),
            (o = Math.floor(r / 65536)),
            (h = r - 65536 * o),
            (r = m + o + 65535),
            (o = Math.floor(r / 65536)),
            (m = r - 65536 * o),
            (r = g + o + 65535),
            (o = Math.floor(r / 65536)),
            (g = r - 65536 * o),
            (r = v + o + 65535),
            (o = Math.floor(r / 65536)),
            (v = r - 65536 * o),
            (r = y + o + 65535),
            (o = Math.floor(r / 65536)),
            (y = r - 65536 * o),
            (r = b + o + 65535),
            (o = Math.floor(r / 65536)),
            (b = r - 65536 * o),
            (r = w + o + 65535),
            (o = Math.floor(r / 65536)),
            (w = r - 65536 * o),
            (r = _ + o + 65535),
            (o = Math.floor(r / 65536)),
            (_ = r - 65536 * o),
            (i += o - 1 + 37 * (o - 1)),
            (e[0] = i),
            (e[1] = a),
            (e[2] = s),
            (e[3] = u),
            (e[4] = c),
            (e[5] = l),
            (e[6] = d),
            (e[7] = p),
            (e[8] = h),
            (e[9] = m),
            (e[10] = g),
            (e[11] = v),
            (e[12] = y),
            (e[13] = b),
            (e[14] = w),
            (e[15] = _));
        }
        function A(e, t) {
          T(e, t, t);
        }
        function C(e, n) {
          var r,
            o = t();
          for (r = 0; r < 16; r++) o[r] = n[r];
          for (r = 253; r >= 0; r--)
            (A(o, o), 2 !== r && 4 !== r && T(o, o, n));
          for (r = 0; r < 16; r++) e[r] = o[r];
        }
        function O(e, n) {
          var r,
            o = t();
          for (r = 0; r < 16; r++) o[r] = n[r];
          for (r = 250; r >= 0; r--) (A(o, o), 1 !== r && T(o, o, n));
          for (r = 0; r < 16; r++) e[r] = o[r];
        }
        function M(e, n, r) {
          var o,
            i,
            a = new Uint8Array(32),
            u = new Float64Array(80),
            c = t(),
            l = t(),
            d = t(),
            p = t(),
            h = t(),
            m = t();
          for (i = 0; i < 31; i++) a[i] = n[i];
          for (
            a[31] = (127 & n[31]) | 64, a[0] &= 248, x(u, r), i = 0;
            i < 16;
            i++
          )
            ((l[i] = u[i]), (p[i] = c[i] = d[i] = 0));
          for (c[0] = p[0] = 1, i = 254; i >= 0; --i)
            ((o = (a[i >>> 3] >>> (7 & i)) & 1),
              y(c, l, o),
              y(d, p, o),
              S(h, c, d),
              E(c, c, d),
              S(d, l, p),
              E(l, l, p),
              A(p, h),
              A(m, c),
              T(c, d, c),
              T(d, l, h),
              S(h, c, d),
              E(c, c, d),
              A(l, c),
              E(d, p, m),
              T(c, d, s),
              S(c, c, p),
              T(d, d, c),
              T(c, p, m),
              T(p, l, u),
              A(l, h),
              y(c, l, o),
              y(d, p, o));
          for (i = 0; i < 16; i++)
            ((u[i + 16] = c[i]),
              (u[i + 32] = d[i]),
              (u[i + 48] = l[i]),
              (u[i + 64] = p[i]));
          var g = u.subarray(32),
            v = u.subarray(16);
          return (C(g, g), T(v, v, g), b(e, v), 0);
        }
        function N(e, t) {
          return M(e, t, o);
        }
        function k(e, n) {
          var r = t(),
            o = t(),
            i = t(),
            a = t(),
            s = t(),
            u = t(),
            l = t(),
            d = t(),
            p = t();
          (E(r, e[1], e[0]),
            E(p, n[1], n[0]),
            T(r, r, p),
            S(o, e[0], e[1]),
            S(p, n[0], n[1]),
            T(o, o, p),
            T(i, e[3], n[3]),
            T(i, i, c),
            T(a, e[2], n[2]),
            S(a, a, a),
            E(s, o, r),
            E(u, a, i),
            S(l, a, i),
            S(d, o, r),
            T(e[0], s, u),
            T(e[1], d, l),
            T(e[2], l, u),
            T(e[3], s, d));
        }
        function P(e, t, n) {
          var r;
          for (r = 0; r < 4; r++) y(e[r], t[r], n);
        }
        function I(e, n) {
          var r = t(),
            o = t(),
            i = t();
          (C(i, n[2]),
            T(r, n[0], i),
            T(o, n[1], i),
            b(e, o),
            (e[31] ^= _(r) << 7));
        }
        function U(e, t, n) {
          var r, o;
          for (
            g(e[0], i), g(e[1], a), g(e[2], a), g(e[3], i), o = 255;
            o >= 0;
            --o
          )
            ((r = (n[(o / 8) | 0] >> (7 & o)) & 1),
              P(e, t, r),
              k(t, e),
              k(e, e),
              P(e, t, r));
        }
        function H(e, n) {
          var r = [t(), t(), t(), t()];
          (g(r[0], l), g(r[1], d), g(r[2], a), T(r[3], l, d), U(e, r, n));
        }
        function L(e, n, r) {
          var o,
            i = new Uint8Array(64),
            a = [t(), t(), t(), t()];
          for (
            r(i, n, 32),
              i[0] &= 248,
              i[31] &= 127,
              i[31] |= 64,
              H(a, i),
              I(e, a),
              o = 0;
            o < 32;
            o++
          )
            n[o + 32] = e[o];
          return 0;
        }
        function K(e, n, r, o) {
          var i = new Uint8Array(64),
            a = [t(), t(), t(), t()];
          (o(i, r, 32), (i[0] &= 248), (i[31] &= 127), (i[31] |= 64));
          var s = [t(), t(), t(), t()];
          (G(s, n), U(a, s, i), I(e, a));
        }
        function R(e, n, r, o) {
          var i = new Uint8Array(64),
            a = new Uint8Array(64),
            s = new Uint8Array(64),
            u = [t(), t(), t(), t()];
          (o.update(n.secretKey),
            o.finalize(i),
            (i[0] &= 248),
            (i[31] &= 127),
            (i[31] |= 64),
            o.reset(),
            o.update(i.slice(32)),
            o.update(r),
            o.finalize(a),
            F(a),
            H(u, a),
            I(e, u),
            o.reset(),
            o.update(e.slice(0, 32)),
            o.update(n.publicKey),
            o.update(r),
            o.finalize(s),
            F(s));
          for (var c = new Float64Array(64), l = 0; l < 64; l++) c[l] = 0;
          for (l = 0; l < 32; l++) c[l] = a[l];
          for (l = 0; l < 32; l++)
            for (var d = 0; d < 32; d++) c[l + d] += s[l] * i[d];
          J(e.subarray(32), c);
          var p = 0;
          for (l = 0; l < 32; l++) ((p |= 0 ^ e[32 + l]), (s[l] = e[32 + l]));
          if (0 == p) return !1;
          (F(s), (p = 0));
          for (l = 0; l < 32; l++) p |= e[32 + l] ^ s[l];
          return 0 == p;
        }
        var D = new Float64Array([
          237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
          20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
        ]);
        function J(e, t) {
          var n, r, o, i;
          for (r = 63; r >= 32; --r) {
            for (n = 0, o = r - 32, i = r - 12; o < i; ++o)
              ((t[o] += n - 16 * t[r] * D[o - (r - 32)]),
                (n = (t[o] + 128) >> 8),
                (t[o] -= 256 * n));
            ((t[o] += n), (t[r] = 0));
          }
          for (n = 0, o = 0; o < 32; o++)
            ((t[o] += n - (t[31] >> 4) * D[o]), (n = t[o] >> 8), (t[o] &= 255));
          for (o = 0; o < 32; o++) t[o] -= n * D[o];
          for (r = 0; r < 32; r++)
            ((t[r + 1] += t[r] >> 8), (e[r] = 255 & t[r]));
        }
        function F(e) {
          var t,
            n = new Float64Array(64);
          for (t = 0; t < 64; t++) n[t] = e[t];
          for (t = 0; t < 64; t++) e[t] = 0;
          J(e, n);
        }
        function B(e, n) {
          var r = t(),
            o = t(),
            s = t(),
            c = t(),
            l = t(),
            d = t(),
            h = t();
          return (
            g(e[2], a),
            x(e[1], n),
            A(s, e[1]),
            T(c, s, u),
            E(s, s, e[2]),
            S(c, e[2], c),
            A(l, c),
            A(d, l),
            T(h, d, l),
            T(r, h, s),
            T(r, r, c),
            O(r, r),
            T(r, r, s),
            T(r, r, c),
            T(r, r, c),
            T(e[0], r, c),
            A(o, e[0]),
            T(o, o, c),
            w(o, s) && T(e[0], e[0], p),
            A(o, e[0]),
            T(o, o, c),
            w(o, s)
              ? -1
              : (_(e[0]) === n[31] >> 7 && E(e[0], i, e[0]),
                T(e[3], e[0], e[1]),
                0)
          );
        }
        function G(e, n) {
          var r = t(),
            o = t(),
            s = t(),
            c = t(),
            l = t(),
            d = t(),
            h = t();
          return (
            g(e[2], a),
            x(e[1], n),
            A(s, e[1]),
            T(c, s, u),
            E(s, s, e[2]),
            S(c, e[2], c),
            A(l, c),
            A(d, l),
            T(h, d, l),
            T(r, h, s),
            T(r, r, c),
            O(r, r),
            T(r, r, s),
            T(r, r, c),
            T(r, r, c),
            T(e[0], r, c),
            A(o, e[0]),
            T(o, o, c),
            w(o, s) && T(e[0], e[0], p),
            A(o, e[0]),
            T(o, o, c),
            w(o, s)
              ? (console.log("not a valid Ed25519EncodedGroupElement."), -1)
              : (_(e[0]) !== n[31] >> 7 && E(e[0], i, e[0]),
                T(e[3], e[0], e[1]),
                0)
          );
        }
        var q = 32,
          W = 32,
          V = 64,
          X = 32,
          z = 64,
          Y = 32,
          $ = 64;
        function Q() {
          var e, t;
          for (t = 0; t < arguments.length; t++)
            if (
              "[object Uint8Array]" !==
              (e = Object.prototype.toString.call(arguments[t]))
            )
              throw new TypeError("unexpected type " + e + ", use Uint8Array");
        }
        function Z(e) {
          for (var t = 0; t < e.length; t++) e[t] = 0;
        }
        ((e.lowlevel = {
          crypto_verify_32: m,
          crypto_scalarmult: M,
          crypto_scalarmult_base: N,
          crypto_sign_keypair_hash: L,
          crypto_shared_key_hash: K,
          crypto_sign_hash: R,
          crypto_scalarmult_BYTES: q,
          crypto_scalarmult_SCALARBYTES: W,
          crypto_sign_BYTES: V,
          crypto_sign_PUBLICKEYBYTES: X,
          crypto_sign_SECRETKEYBYTES: z,
          crypto_sign_SEEDBYTES: Y,
          crypto_hash_BYTES: $,
        }),
          (e.randomBytes = function (e) {
            var t = new Uint8Array(e);
            return (r(t, e), t);
          }),
          (e.scalarMult = function (e, t) {
            if ((Q(e, t), e.length !== W)) throw new Error("bad n size");
            if (t.length !== q) throw new Error("bad p size");
            var n = new Uint8Array(q);
            return (M(n, e, t), n);
          }),
          (e.scalarMult.base = function (e) {
            if ((Q(e), e.length !== W)) throw new Error("bad n size");
            var t = new Uint8Array(q);
            return (N(t, e), t);
          }),
          (e.scalarMult.scalarLength = W),
          (e.scalarMult.groupElementLength = q),
          (e.verify = function (e, t) {
            return (
              Q(e, t),
              0 !== e.length &&
                0 !== t.length &&
                e.length === t.length &&
                0 === h(e, 0, t, 0, e.length)
            );
          }),
          (e.setPRNG = function (e) {
            r = e;
          }),
          (e.gf = t),
          (e.unpackneg = B),
          (e.reduce = F),
          (e.scalarmult = U),
          (e.scalarbase = H),
          (e.add = k),
          (e.pack = I),
          (function () {
            var t;
            "undefined" !== typeof window
              ? (window.crypto && window.crypto.getRandomValues
                  ? (t = window.crypto)
                  : window.msCrypto &&
                    window.msCrypto.getRandomValues &&
                    (t = window.msCrypto),
                t &&
                  e.setPRNG(function (e, n) {
                    var r,
                      o = new Uint8Array(n);
                    for (t.getRandomValues(o), r = 0; r < n; r++) e[r] = o[r];
                    Z(o);
                  }))
              : ((t = n(2764)),
                t &&
                  e.setPRNG(function (e, n) {
                    var r,
                      o = t.randomBytes(n);
                    for (r = 0; r < n; r++) e[r] = o[r];
                    Z(o);
                  }));
          })());
      })(e.exports ? e.exports : (window.nacl = window.nacl || {}));
    },
    4652: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3289)),
        i = r(n(3891)),
        a = r(n(3291));
      let s = function (e, t) {
          return e && i.default.toAddress(e, t);
        },
        u = function (e) {
          return (
            e &&
            e
              .toUpperCase()
              .replace(/-/g, "")
              .match(/.{1,6}/g)
              .join("-")
          );
        },
        c = function (e) {
          let t = Date.UTC(2015, 2, 29, 0, 6, 25);
          if (void 0 === e) return e;
          let n = e,
            r = new Date(t + 1e3 * n);
          return r.toUTCString();
        },
        l = function (e, t, n) {
          if (void 0 === e) return e;
          let r = w(t);
          if (!(r in n)) return ["unknown mosaic divisibility", e];
          let o = n[r],
            i = $.grep(o.mosaicDefinition.properties, function (e) {
              return "divisibility" === e.name;
            }),
            a = 1 === i.length ? ~~i[0].value : 0,
            s = parseInt(e, 10);
          if (!s)
            return 0 === a ? ["0", ""] : ["0", s.toFixed(a).split(".")[1]];
          s /= Math.pow(10, a);
          let u = s.toFixed(a).split("."),
            c = u[0].split(/(?=(?:...)*$)/).join(" ");
          return [c, u[1] || ""];
        },
        d = function (e, t) {
          let n = ~~t,
            r = parseInt(e, 10);
          if (!r)
            return 0 === n ? ["0", ""] : ["0", r.toFixed(n).split(".")[1]];
          r /= Math.pow(10, n);
          let o = r.toFixed(n).split("."),
            i = o[0].split(/(?=(?:...)*$)/).join(" ");
          return [i, o[1] || ""];
        },
        p = function (e, t, n, r) {
          if (void 0 === e || void 0 === r) return e;
          if (void 0 === n || void 0 === n.type) return;
          let o;
          o = 1 === n.type ? n.fee : ((t / 1e6) * e.quantity * n.fee) / 1e4;
          let i = l(o, n.mosaicId, r);
          return i[0] + "." + i[1];
        },
        h = function (e) {
          if (void 0 === e) return e;
          let t = e;
          return t
            ? ((t *= 1e4), (t = t.toFixed(4).split(".")), [t[0], t[1]])
            : [t, 0];
        },
        m = function (e) {
          if (void 0 === e) return e;
          let t = e;
          if (t) {
            t /= 1e6;
            let e = t.toFixed(6).split("."),
              n = e[0].split(/(?=(?:...)*$)/).join(" ");
            return [n, e[1]];
          }
          return ["0", "000000"];
        },
        g = function (e) {
          if (void 0 === e) return e;
          let t = e;
          return 1 === t ? "Activation" : 2 === t ? "Deactivation" : "Unknown";
        },
        v = function (e) {
          if (void 0 === e) return e;
          let t,
            n = e;
          if (n && n.length > 2 && "f" === n[0] && "e" === n[1])
            return "HEX: " + n.slice(2);
          try {
            t = decodeURIComponent(escape(o.default.hex2a(n)));
          } catch (r) {
            ((t = o.default.hex2a(n)), console.log("invalid text input: " + e));
          }
          return t;
        },
        y = function (e) {
          return void 0 === e ? e : 1 === e.type ? v(e.payload) : "";
        },
        b = function (e) {
          if (void 0 === e) return e;
          let t = e.match(/[\s\S]{1,64}/g) || [],
            n = t.join("\n");
          return n;
        },
        w = function (e) {
          return e ? e.namespaceId + ":" + e.name : e;
        },
        _ = function (e) {
          switch (e) {
            case a.default.transfer:
              return "Transfer";
            case a.default.importanceTransfer:
              return "ImportanceTransfer";
            case a.default.multisigModification:
              return "MultisigModification";
            case a.default.provisionNamespace:
              return "ProvisionNamespace";
            case a.default.mosaicDefinition:
              return "MosaicDefinition";
            case a.default.mosaicSupply:
              return "MosaicSupply";
            default:
              return "Unknown_" + e;
          }
        };
      e.exports = {
        splitHex: b,
        hexMessage: y,
        hexToUtf8: v,
        importanceTransferMode: g,
        nemValue: m,
        nemImportanceScore: h,
        levyFee: p,
        supplyRaw: d,
        supply: l,
        nemDate: c,
        pubToAddress: s,
        address: u,
        mosaicIdToName: w,
        txTypeToName: _,
      };
    },
    4653: function (e, t) {
      let n = "http://23.228.67.85",
        r = "http://hugealice3.nem.ninja",
        o = "",
        i = "http://chain.nem.ninja/#/transfer/",
        a = "http://bob.nem.ninja:8765/#/transfer/",
        s = "",
        u = [
          { uri: "http://bigalice2.nem.ninja", location: "America / New_York" },
          { uri: "http://192.3.61.243", location: "America / Los_Angeles" },
          { uri: "http://23.228.67.85", location: "America / Los_Angeles" },
        ],
        c = [
          { uri: "http://62.75.171.41", location: "Germany" },
          { uri: "http://104.251.212.131", location: "USA" },
          { uri: "http://45.124.65.125", location: "Hong Kong" },
          { uri: "http://185.53.131.101", location: "Netherlands" },
          { uri: "http://sz.nemchina.com", location: "China" },
        ],
        l = [{ uri: "", location: "" }],
        d = [
          { uri: "http://104.128.226.60" },
          { uri: "http://23.228.67.85" },
          { uri: "http://192.3.61.243" },
          { uri: "http://50.3.87.123" },
          { uri: "http://localhost" },
        ],
        p = [
          { uri: "http://hugealice.nem.ninja" },
          { uri: "http://hugealice2.nem.ninja" },
          { uri: "http://hugealice3.nem.ninja" },
          { uri: "http://hugealice4.nem.ninja" },
          { uri: "http://62.75.171.41" },
          { uri: "http://san.nem.ninja" },
          { uri: "http://go.nem.ninja" },
          { uri: "http://hachi.nem.ninja" },
          { uri: "http://jusan.nem.ninja" },
          { uri: "http://nijuichi.nem.ninja" },
          { uri: "http://alice2.nem.ninja" },
          { uri: "http://alice3.nem.ninja" },
          { uri: "http://alice4.nem.ninja" },
          { uri: "http://alice5.nem.ninja" },
          { uri: "http://alice6.nem.ninja" },
          { uri: "http://alice7.nem.ninja" },
          { uri: "http://localhost" },
        ],
        h = [{ uri: "" }],
        m = "http://185.117.22.58:4567/verify",
        g = "https://supernodes.nem.io/nodes",
        v = "https://poloniex.com/public",
        y = "https://blockchain.info/ticker",
        b = 7890,
        w = 7895,
        _ = 7778;
      e.exports = {
        defaultTestnet: n,
        defaultMainnet: r,
        defaultMijin: o,
        mainnetExplorer: i,
        testnetExplorer: a,
        mijinExplorer: s,
        searchOnTestnet: u,
        searchOnMainnet: c,
        searchOnMijin: l,
        testnet: d,
        mainnet: p,
        mijin: h,
        apostilleAuditServer: m,
        supernodes: g,
        defaultPort: b,
        mijinPort: w,
        websocketPort: _,
        marketInfo: v,
        btcPrice: y,
      };
    },
    4654: function (e, t) {
      e.exports = {
        namespace: {
          "-104": "TAMESP-ACEWH4-MKFMBC-VFERDP-OOP4FK-7MTDJE-YP35",
          104: "NAMESP-ACEWH4-MKFMBC-VFERDP-OOP4FK-7MTBXD-PZZA",
          96: "MAMESP-ACEWH4-MKFMBC-VFERDP-OOP4FK-7MTCZT-G5E7",
        },
        mosaic: {
          "-104": "TBMOSA-ICOD4F-54EE5C-DMR23C-CBGOAM-2XSJBR-5OLC",
          104: "NBMOSA-ICOD4F-54EE5C-DMR23C-CBGOAM-2XSIUX-6TRS",
          96: "MBMOSA-ICOD4F-54EE5C-DMR23C-CBGOAM-2XSKYH-TOJD",
        },
        apostille: {
          "-104": "TC7MCY-5AGJQX-ZQ4BN3-BOPNXU-VIGDJC-OHBPGU-M2GE",
          104: "NCZSJH-LTIMES-ERVBVK-OW6US6-4YDZG2-PFGQCS-V23J",
          96: "MCGDK2-J46BOD-GGKMPI-KCBGTB-BIWL6A-L5ZKLK-Q56A",
        },
      };
    },
    4661: function (module, exports, __webpack_require__) {
      var JSON;
      (JSON || (JSON = {}),
        (function () {
          function str(e, t) {
            var n,
              r,
              o,
              i,
              a,
              s = gap,
              u = t[e];
            switch (
              (u &&
                "object" == typeof u &&
                "function" == typeof u.toJSON &&
                (u = u.toJSON(e)),
              "function" == typeof rep && (u = rep.call(t, e, u)),
              typeof u)
            ) {
              case "string":
                return quote(u);
              case "number":
                return isFinite(u) ? String(u) : "null";
              case "boolean":
              case "null":
                return String(u);
              case "object":
                if (!u) return "null";
                if (
                  ((gap += indent),
                  (a = []),
                  "[object Array]" === Object.prototype.toString.apply(u))
                ) {
                  for (i = u.length, n = 0; n < i; n += 1)
                    a[n] = str(n, u) || "null";
                  return (
                    (o =
                      0 === a.length
                        ? "[]"
                        : gap
                          ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]"
                          : "[" + a.join(",") + "]"),
                    (gap = s),
                    o
                  );
                }
                if (rep && "object" == typeof rep)
                  for (i = rep.length, n = 0; n < i; n += 1)
                    "string" == typeof rep[n] &&
                      ((r = rep[n]),
                      (o = str(r, u)),
                      o && a.push(quote(r) + (gap ? ": " : ":") + o));
                else
                  for (r in u)
                    Object.prototype.hasOwnProperty.call(u, r) &&
                      ((o = str(r, u)),
                      o && a.push(quote(r) + (gap ? ": " : ":") + o));
                return (
                  (o =
                    0 === a.length
                      ? "{}"
                      : gap
                        ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}"
                        : "{" + a.join(",") + "}"),
                  (gap = s),
                  o
                );
            }
          }
          function quote(e) {
            return (
              (escapable.lastIndex = 0),
              escapable.test(e)
                ? '"' +
                  e.replace(escapable, function (e) {
                    var t = meta[e];
                    return "string" == typeof t
                      ? t
                      : "\\u" +
                          ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + e + '"'
            );
          }
          function f(e) {
            return e < 10 ? "0" + e : e;
          }
          "function" != typeof Date.prototype.toJSON &&
            ((Date.prototype.toJSON = function (e) {
              return isFinite(this.valueOf())
                ? this.getUTCFullYear() +
                    "-" +
                    f(this.getUTCMonth() + 1) +
                    "-" +
                    f(this.getUTCDate()) +
                    "T" +
                    f(this.getUTCHours()) +
                    ":" +
                    f(this.getUTCMinutes()) +
                    ":" +
                    f(this.getUTCSeconds()) +
                    "Z"
                : null;
            }),
            (String.prototype.toJSON =
              Number.prototype.toJSON =
              Boolean.prototype.toJSON =
                function (e) {
                  return this.valueOf();
                }));
          var cx =
              /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable =
              /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap,
            indent,
            meta = {
              "\b": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\",
            },
            rep;
          ("function" != typeof JSON.stringify &&
            (JSON.stringify = function (e, t, n) {
              var r;
              if (((gap = ""), (indent = ""), "number" == typeof n))
                for (r = 0; r < n; r += 1) indent += " ";
              else "string" == typeof n && (indent = n);
              if (
                ((rep = t),
                !t ||
                  "function" == typeof t ||
                  ("object" == typeof t && "number" == typeof t.length))
              )
                return str("", { "": e });
              throw new Error("JSON.stringify");
            }),
            "function" != typeof JSON.parse &&
              (JSON.parse = function (text, reviver) {
                function walk(e, t) {
                  var n,
                    r,
                    o = e[t];
                  if (o && "object" == typeof o)
                    for (n in o)
                      Object.prototype.hasOwnProperty.call(o, n) &&
                        ((r = walk(o, n)),
                        void 0 !== r ? (o[n] = r) : delete o[n]);
                  return reviver.call(e, t, o);
                }
                var j;
                if (
                  ((text = String(text)),
                  (cx.lastIndex = 0),
                  cx.test(text) &&
                    (text = text.replace(cx, function (e) {
                      return (
                        "\\u" +
                        ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                      );
                    })),
                  /^[\],:{}\s]*$/.test(
                    text
                      .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                      .replace(
                        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        "]",
                      )
                      .replace(/(?:^|:|,)(?:\s*\[)+/g, ""),
                  ))
                )
                  return (
                    (j = eval("(" + text + ")")),
                    "function" == typeof reviver ? walk({ "": j }, "") : j
                  );
                throw new SyntaxError("JSON.parse");
              }));
        })());
      var SockJS = (function () {
        if ("undefined" === typeof document || "undefined" === typeof window)
          return null;
        var e = document,
          t = window,
          n = {},
          r = function () {};
        ((r.prototype.addEventListener = function (e, t) {
          (this._listeners || (this._listeners = {}),
            e in this._listeners || (this._listeners[e] = []));
          var r = this._listeners[e];
          -1 === n.arrIndexOf(r, t) && r.push(t);
        }),
          (r.prototype.removeEventListener = function (e, t) {
            if (this._listeners && e in this._listeners) {
              var r = this._listeners[e],
                o = n.arrIndexOf(r, t);
              -1 === o ||
                (r.length > 1
                  ? (this._listeners[e] = r.slice(0, o).concat(r.slice(o + 1)))
                  : delete this._listeners[e]);
            }
          }),
          (r.prototype.dispatchEvent = function (e) {
            var t = e.type,
              n = Array.prototype.slice.call(arguments, 0);
            if (
              (this["on" + t] && this["on" + t].apply(this, n),
              this._listeners && t in this._listeners)
            )
              for (var r = 0; r < this._listeners[t].length; r++)
                this._listeners[t][r].apply(this, n);
          }));
        var o = function (e, t) {
          if (((this.type = e), "undefined" !== typeof t))
            for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n]);
        };
        o.prototype.toString = function () {
          var e = [];
          for (var t in this)
            if (this.hasOwnProperty(t)) {
              var n = this[t];
              ("function" === typeof n && (n = "[function]"),
                e.push(t + "=" + n));
            }
          return "SimpleEvent(" + e.join(", ") + ")";
        };
        var i = function (e) {
          var t = this;
          ((t._events = e || []), (t._listeners = {}));
        };
        ((i.prototype.emit = function (e) {
          var t = this;
          if ((t._verifyType(e), !t._nuked)) {
            var n = Array.prototype.slice.call(arguments, 1);
            if ((t["on" + e] && t["on" + e].apply(t, n), e in t._listeners))
              for (var r = 0; r < t._listeners[e].length; r++)
                t._listeners[e][r].apply(t, n);
          }
        }),
          (i.prototype.on = function (e, t) {
            var n = this;
            (n._verifyType(e),
              n._nuked ||
                (e in n._listeners || (n._listeners[e] = []),
                n._listeners[e].push(t)));
          }),
          (i.prototype._verifyType = function (e) {
            var t = this;
            -1 === n.arrIndexOf(t._events, e) &&
              n.log(
                "Event " +
                  JSON.stringify(e) +
                  " not listed " +
                  JSON.stringify(t._events) +
                  " in " +
                  t,
              );
          }),
          (i.prototype.nuke = function () {
            var e = this;
            e._nuked = !0;
            for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
            e._listeners = {};
          }));
        var a = "abcdefghijklmnopqrstuvwxyz0123456789_";
        ((n.random_string = function (e, t) {
          t = t || a.length;
          var n,
            r = [];
          for (n = 0; n < e; n++)
            r.push(a.substr(Math.floor(Math.random() * t), 1));
          return r.join("");
        }),
          (n.random_number = function (e) {
            return Math.floor(Math.random() * e);
          }),
          (n.random_number_string = function (e) {
            var t = ("" + (e - 1)).length,
              r = Array(t + 1).join("0");
            return (r + n.random_number(e)).slice(-t);
          }),
          (n.getOrigin = function (e) {
            e += "/";
            var t = e.split("/").slice(0, 3);
            return t.join("/");
          }),
          (n.isSameOriginUrl = function (e, n) {
            return (
              n || (n = t.location.href),
              e.split("/").slice(0, 3).join("/") ===
                n.split("/").slice(0, 3).join("/")
            );
          }),
          (n.getParentDomain = function (e) {
            if (/^[0-9.]*$/.test(e)) return e;
            if (/^\[/.test(e)) return e;
            if (!/[.]/.test(e)) return e;
            var t = e.split(".").slice(1);
            return t.join(".");
          }),
          (n.objectExtend = function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e;
          }));
        var s = "_jp";
        ((n.polluteGlobalNamespace = function () {
          s in t || (t[s] = {});
        }),
          (n.closeFrame = function (e, t) {
            return "c" + JSON.stringify([e, t]);
          }),
          (n.userSetCode = function (e) {
            return 1e3 === e || (e >= 3e3 && e <= 4999);
          }),
          (n.countRTO = function (e) {
            var t;
            return ((t = e > 100 ? 3 * e : e + 200), t);
          }),
          (n.log = function () {
            t.console &&
              console.log &&
              console.log.apply &&
              console.log.apply(console, arguments);
          }),
          (n.bind = function (e, t) {
            return e.bind
              ? e.bind(t)
              : function () {
                  return e.apply(t, arguments);
                };
          }),
          (n.flatUrl = function (e) {
            return -1 === e.indexOf("?") && -1 === e.indexOf("#");
          }),
          (n.amendUrl = function (t) {
            var r = e.location;
            if (!t) throw new Error("Wrong url for SockJS");
            if (!n.flatUrl(t))
              throw new Error("Only basic urls are supported in SockJS");
            return (
              0 === t.indexOf("//") && (t = r.protocol + t),
              0 === t.indexOf("/") && (t = r.protocol + "//" + r.host + t),
              (t = t.replace(/[/]+$/, "")),
              t
            );
          }),
          (n.arrIndexOf = function (e, t) {
            for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
            return -1;
          }),
          (n.arrSkip = function (e, t) {
            var r = n.arrIndexOf(e, t);
            if (-1 === r) return e.slice();
            var o = e.slice(0, r);
            return o.concat(e.slice(r + 1));
          }),
          (n.isArray =
            Array.isArray ||
            function (e) {
              return {}.toString.call(e).indexOf("Array") >= 0;
            }),
          (n.delay = function (e, t) {
            return (
              "function" === typeof e && ((t = e), (e = 0)),
              setTimeout(t, e)
            );
          }));
        var u,
          c =
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
          l = {
            "\0": "\\u0000",
            "": "\\u0001",
            "": "\\u0002",
            "": "\\u0003",
            "": "\\u0004",
            "": "\\u0005",
            "": "\\u0006",
            "": "\\u0007",
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\u000b",
            "\f": "\\f",
            "\r": "\\r",
            "": "\\u000e",
            "": "\\u000f",
            "": "\\u0010",
            "": "\\u0011",
            "": "\\u0012",
            "": "\\u0013",
            "": "\\u0014",
            "": "\\u0015",
            "": "\\u0016",
            "": "\\u0017",
            "": "\\u0018",
            "": "\\u0019",
            "": "\\u001a",
            "": "\\u001b",
            "": "\\u001c",
            "": "\\u001d",
            "": "\\u001e",
            "": "\\u001f",
            '"': '\\"',
            "\\": "\\\\",
            "": "\\u007f",
            "": "\\u0080",
            "": "\\u0081",
            "": "\\u0082",
            "": "\\u0083",
            "": "\\u0084",
            "": "\\u0085",
            "": "\\u0086",
            "": "\\u0087",
            "": "\\u0088",
            "": "\\u0089",
            "": "\\u008a",
            "": "\\u008b",
            "": "\\u008c",
            "": "\\u008d",
            "": "\\u008e",
            "": "\\u008f",
            "": "\\u0090",
            "": "\\u0091",
            "": "\\u0092",
            "": "\\u0093",
            "": "\\u0094",
            "": "\\u0095",
            "": "\\u0096",
            "": "\\u0097",
            "": "\\u0098",
            "": "\\u0099",
            "": "\\u009a",
            "": "\\u009b",
            "": "\\u009c",
            "": "\\u009d",
            "": "\\u009e",
            "": "\\u009f",
            "­": "\\u00ad",
            "؀": "\\u0600",
            "؁": "\\u0601",
            "؂": "\\u0602",
            "؃": "\\u0603",
            "؄": "\\u0604",
            "܏": "\\u070f",
            "឴": "\\u17b4",
            "឵": "\\u17b5",
            "‌": "\\u200c",
            "‍": "\\u200d",
            "‎": "\\u200e",
            "‏": "\\u200f",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            "‪": "\\u202a",
            "‫": "\\u202b",
            "‬": "\\u202c",
            "‭": "\\u202d",
            "‮": "\\u202e",
            " ": "\\u202f",
            "⁠": "\\u2060",
            "⁡": "\\u2061",
            "⁢": "\\u2062",
            "⁣": "\\u2063",
            "⁤": "\\u2064",
            "⁥": "\\u2065",
            "⁦": "\\u2066",
            "⁧": "\\u2067",
            "⁨": "\\u2068",
            "⁩": "\\u2069",
            "⁪": "\\u206a",
            "⁫": "\\u206b",
            "⁬": "\\u206c",
            "⁭": "\\u206d",
            "⁮": "\\u206e",
            "⁯": "\\u206f",
            "\ufeff": "\\ufeff",
            "￰": "\\ufff0",
            "￱": "\\ufff1",
            "￲": "\\ufff2",
            "￳": "\\ufff3",
            "￴": "\\ufff4",
            "￵": "\\ufff5",
            "￶": "\\ufff6",
            "￷": "\\ufff7",
            "￸": "\\ufff8",
            "￹": "\\ufff9",
            "￺": "\\ufffa",
            "￻": "\\ufffb",
            "￼": "\\ufffc",
            "�": "\\ufffd",
            "￾": "\\ufffe",
            "￿": "\\uffff",
          },
          d =
            /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
          p =
            (JSON && JSON.stringify) ||
            function (e) {
              return (
                (c.lastIndex = 0),
                c.test(e) &&
                  (e = e.replace(c, function (e) {
                    return l[e];
                  })),
                '"' + e + '"'
              );
            },
          h = function (e) {
            var t,
              n = {},
              r = [];
            for (t = 0; t < 65536; t++) r.push(String.fromCharCode(t));
            return (
              (e.lastIndex = 0),
              r.join("").replace(e, function (e) {
                return (
                  (n[e] =
                    "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)),
                  ""
                );
              }),
              (e.lastIndex = 0),
              n
            );
          };
        n.quote = function (e) {
          var t = p(e);
          return (
            (d.lastIndex = 0),
            d.test(t)
              ? (u || (u = h(d)),
                t.replace(d, function (e) {
                  return u[e];
                }))
              : t
          );
        };
        var m = [
          "websocket",
          "xdr-streaming",
          "xhr-streaming",
          "iframe-eventsource",
          "iframe-htmlfile",
          "xdr-polling",
          "xhr-polling",
          "iframe-xhr-polling",
          "jsonp-polling",
        ];
        ((n.probeProtocols = function () {
          for (var e = {}, t = 0; t < m.length; t++) {
            var n = m[t];
            e[n] = T[n] && T[n].enabled();
          }
          return e;
        }),
          (n.detectProtocols = function (e, t, n) {
            var r = {},
              o = [];
            t || (t = m);
            for (var i = 0; i < t.length; i++) {
              var a = t[i];
              r[a] = e[a];
            }
            var s = function (e) {
              var t = e.shift();
              r[t] ? o.push(t) : e.length > 0 && s(e);
            };
            return (
              !1 !== n.websocket && s(["websocket"]),
              r["xhr-streaming"] && !n.null_origin
                ? o.push("xhr-streaming")
                : !r["xdr-streaming"] || n.cookie_needed || n.null_origin
                  ? s(["iframe-eventsource", "iframe-htmlfile"])
                  : o.push("xdr-streaming"),
              r["xhr-polling"] && !n.null_origin
                ? o.push("xhr-polling")
                : !r["xdr-polling"] || n.cookie_needed || n.null_origin
                  ? s(["iframe-xhr-polling", "jsonp-polling"])
                  : o.push("xdr-polling"),
              o
            );
          }));
        var g = "_sockjs_global";
        ((n.createHook = function () {
          var e = "a" + n.random_string(8);
          if (!(g in t)) {
            var r = {};
            t[g] = function (e) {
              return (
                e in r ||
                  (r[e] = {
                    id: e,
                    del: function () {
                      delete r[e];
                    },
                  }),
                r[e]
              );
            };
          }
          return t[g](e);
        }),
          (n.attachMessage = function (e) {
            n.attachEvent("message", e);
          }),
          (n.attachEvent = function (n, r) {
            "undefined" !== typeof t.addEventListener
              ? t.addEventListener(n, r, !1)
              : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r));
          }),
          (n.detachMessage = function (e) {
            n.detachEvent("message", e);
          }),
          (n.detachEvent = function (n, r) {
            "undefined" !== typeof t.addEventListener
              ? t.removeEventListener(n, r, !1)
              : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r));
          }));
        var v = {},
          y = !1,
          b = function () {
            for (var e in v) (v[e](), delete v[e]);
          },
          w = function () {
            y || ((y = !0), b());
          };
        (n.attachEvent("unload", w),
          (n.unload_add = function (e) {
            var t = n.random_string(8);
            return ((v[t] = e), y && n.delay(b), t);
          }),
          (n.unload_del = function (e) {
            e in v && delete v[e];
          }),
          (n.createIframe = function (t, r) {
            var o,
              i,
              a = e.createElement("iframe"),
              s = function () {
                clearTimeout(o);
                try {
                  a.onload = null;
                } catch (e) {}
                a.onerror = null;
              },
              u = function () {
                a &&
                  (s(),
                  setTimeout(function () {
                    (a && a.parentNode.removeChild(a), (a = null));
                  }, 0),
                  n.unload_del(i));
              },
              c = function (e) {
                a && (u(), r(e));
              },
              l = function (e, t) {
                try {
                  a && a.contentWindow && a.contentWindow.postMessage(e, t);
                } catch (n) {}
              };
            return (
              (a.src = t),
              (a.style.display = "none"),
              (a.style.position = "absolute"),
              (a.onerror = function () {
                c("onerror");
              }),
              (a.onload = function () {
                (clearTimeout(o),
                  (o = setTimeout(function () {
                    c("onload timeout");
                  }, 2e3)));
              }),
              e.body.appendChild(a),
              (o = setTimeout(function () {
                c("timeout");
              }, 15e3)),
              (i = n.unload_add(u)),
              { post: l, cleanup: u, loaded: s }
            );
          }),
          (n.createHtmlfile = function (e, r) {
            var o,
              i,
              a,
              u = new ActiveXObject("htmlfile"),
              c = function () {
                clearTimeout(o);
              },
              l = function () {
                u &&
                  (c(),
                  n.unload_del(i),
                  a.parentNode.removeChild(a),
                  (a = u = null),
                  CollectGarbage());
              },
              d = function (e) {
                u && (l(), r(e));
              },
              p = function (e, t) {
                try {
                  a && a.contentWindow && a.contentWindow.postMessage(e, t);
                } catch (n) {}
              };
            (u.open(),
              u.write(
                '<html><script>document.domain="' +
                  document.domain +
                  '";<\/script></html>',
              ),
              u.close(),
              (u.parentWindow[s] = t[s]));
            var h = u.createElement("div");
            return (
              u.body.appendChild(h),
              (a = u.createElement("iframe")),
              h.appendChild(a),
              (a.src = e),
              (o = setTimeout(function () {
                d("timeout");
              }, 15e3)),
              (i = n.unload_add(l)),
              { post: p, cleanup: l, loaded: c }
            );
          }));
        var _ = function () {};
        ((_.prototype = new i(["chunk", "finish"])),
          (_.prototype._start = function (e, r, o, i) {
            var a = this;
            try {
              a.xhr = new XMLHttpRequest();
            } catch (u) {}
            if (!a.xhr)
              try {
                a.xhr = new t.ActiveXObject("Microsoft.XMLHTTP");
              } catch (u) {}
            ((t.ActiveXObject || t.XDomainRequest) &&
              (r += (-1 === r.indexOf("?") ? "?" : "&") + "t=" + +new Date()),
              (a.unload_ref = n.unload_add(function () {
                a._cleanup(!0);
              })));
            try {
              a.xhr.open(e, r, !0);
            } catch (c) {
              return (a.emit("finish", 0, ""), void a._cleanup());
            }
            if (
              ((i && i.no_credentials) || (a.xhr.withCredentials = "true"),
              i && i.headers)
            )
              for (var s in i.headers) a.xhr.setRequestHeader(s, i.headers[s]);
            ((a.xhr.onreadystatechange = function () {
              if (a.xhr) {
                var e = a.xhr;
                switch (e.readyState) {
                  case 3:
                    try {
                      var t = e.status,
                        n = e.responseText;
                    } catch (e) {}
                    (1223 === t && (t = 204),
                      n && n.length > 0 && a.emit("chunk", t, n));
                    break;
                  case 4:
                    t = e.status;
                    (1223 === t && (t = 204),
                      a.emit("finish", t, e.responseText),
                      a._cleanup(!1));
                    break;
                }
              }
            }),
              a.xhr.send(o));
          }),
          (_.prototype._cleanup = function (e) {
            var t = this;
            if (t.xhr) {
              if (
                (n.unload_del(t.unload_ref),
                (t.xhr.onreadystatechange = function () {}),
                e)
              )
                try {
                  t.xhr.abort();
                } catch (r) {}
              t.unload_ref = t.xhr = null;
            }
          }),
          (_.prototype.close = function () {
            var e = this;
            (e.nuke(), e._cleanup(!0));
          }));
        var x = (n.XHRCorsObject = function () {
          var e = this,
            t = arguments;
          n.delay(function () {
            e._start.apply(e, t);
          });
        });
        x.prototype = new _();
        var S = (n.XHRLocalObject = function (e, t, r) {
          var o = this;
          n.delay(function () {
            o._start(e, t, r, { no_credentials: !0 });
          });
        });
        S.prototype = new _();
        var E = (n.XDRObject = function (e, t, r) {
          var o = this;
          n.delay(function () {
            o._start(e, t, r);
          });
        });
        ((E.prototype = new i(["chunk", "finish"])),
          (E.prototype._start = function (e, t, r) {
            var o = this,
              i = new XDomainRequest();
            t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date();
            var a =
              (i.ontimeout =
              i.onerror =
                function () {
                  (o.emit("finish", 0, ""), o._cleanup(!1));
                });
            ((i.onprogress = function () {
              o.emit("chunk", 200, i.responseText);
            }),
              (i.onload = function () {
                (o.emit("finish", 200, i.responseText), o._cleanup(!1));
              }),
              (o.xdr = i),
              (o.unload_ref = n.unload_add(function () {
                o._cleanup(!0);
              })));
            try {
              (o.xdr.open(e, t), o.xdr.send(r));
            } catch (s) {
              a();
            }
          }),
          (E.prototype._cleanup = function (e) {
            var t = this;
            if (t.xdr) {
              if (
                (n.unload_del(t.unload_ref),
                (t.xdr.ontimeout =
                  t.xdr.onerror =
                  t.xdr.onprogress =
                  t.xdr.onload =
                    null),
                e)
              )
                try {
                  t.xdr.abort();
                } catch (r) {}
              t.unload_ref = t.xdr = null;
            }
          }),
          (E.prototype.close = function () {
            var e = this;
            (e.nuke(), e._cleanup(!0));
          }),
          (n.isXHRCorsCapable = function () {
            return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()
              ? 1
              : t.XDomainRequest && e.domain
                ? 2
                : D.enabled()
                  ? 3
                  : 4;
          }));
        var T = function (e, r, o) {
          if (this === t) return new T(e, r, o);
          var i,
            a = this;
          ((a._options = {
            devel: !1,
            debug: !1,
            protocols_whitelist: [],
            info: void 0,
            rtt: void 0,
          }),
            o && n.objectExtend(a._options, o),
            (a._base_url = n.amendUrl(e)),
            (a._server = a._options.server || n.random_number_string(1e3)),
            a._options.protocols_whitelist &&
            a._options.protocols_whitelist.length
              ? (i = a._options.protocols_whitelist)
              : ((i =
                  "string" === typeof r && r.length > 0
                    ? [r]
                    : n.isArray(r)
                      ? r
                      : null),
                i &&
                  a._debug(
                    'Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.',
                  )),
            (a._protocols = []),
            (a.protocol = null),
            (a.readyState = T.CONNECTING),
            (a._ir = W(a._base_url)),
            (a._ir.onfinish = function (e, t) {
              ((a._ir = null),
                e
                  ? (a._options.info &&
                      (e = n.objectExtend(e, a._options.info)),
                    a._options.rtt && (t = a._options.rtt),
                    a._applyInfo(e, t, i),
                    a._didClose())
                  : a._didClose(1002, "Can't connect to server", !0));
            }));
        };
        ((T.prototype = new r()),
          (T.version = "0.3.4"),
          (T.CONNECTING = 0),
          (T.OPEN = 1),
          (T.CLOSING = 2),
          (T.CLOSED = 3),
          (T.prototype._debug = function () {
            this._options.debug && n.log.apply(n, arguments);
          }),
          (T.prototype._dispatchOpen = function () {
            var e = this;
            e.readyState === T.CONNECTING
              ? (e._transport_tref &&
                  (clearTimeout(e._transport_tref), (e._transport_tref = null)),
                (e.readyState = T.OPEN),
                e.dispatchEvent(new o("open")))
              : e._didClose(1006, "Server lost session");
          }),
          (T.prototype._dispatchMessage = function (e) {
            var t = this;
            t.readyState === T.OPEN &&
              t.dispatchEvent(new o("message", { data: e }));
          }),
          (T.prototype._dispatchHeartbeat = function (e) {
            var t = this;
            t.readyState === T.OPEN && t.dispatchEvent(new o("heartbeat", {}));
          }),
          (T.prototype._didClose = function (e, t, r) {
            var i = this;
            if (
              i.readyState !== T.CONNECTING &&
              i.readyState !== T.OPEN &&
              i.readyState !== T.CLOSING
            )
              throw new Error("INVALID_STATE_ERR");
            (i._ir && (i._ir.nuke(), (i._ir = null)),
              i._transport &&
                (i._transport.doCleanup(), (i._transport = null)));
            var a = new o("close", {
              code: e,
              reason: t,
              wasClean: n.userSetCode(e),
            });
            if (!n.userSetCode(e) && i.readyState === T.CONNECTING && !r) {
              if (i._try_next_protocol(a)) return;
              a = new o("close", {
                code: 2e3,
                reason: "All transports failed",
                wasClean: !1,
                last_event: a,
              });
            }
            ((i.readyState = T.CLOSED),
              n.delay(function () {
                i.dispatchEvent(a);
              }));
          }),
          (T.prototype._didMessage = function (e) {
            var t = this,
              n = e.slice(0, 1);
            switch (n) {
              case "o":
                t._dispatchOpen();
                break;
              case "a":
                for (
                  var r = JSON.parse(e.slice(1) || "[]"), o = 0;
                  o < r.length;
                  o++
                )
                  t._dispatchMessage(r[o]);
                break;
              case "m":
                r = JSON.parse(e.slice(1) || "null");
                t._dispatchMessage(r);
                break;
              case "c":
                r = JSON.parse(e.slice(1) || "[]");
                t._didClose(r[0], r[1]);
                break;
              case "h":
                t._dispatchHeartbeat();
                break;
            }
          }),
          (T.prototype._try_next_protocol = function (t) {
            var r = this;
            (r.protocol &&
              (r._debug("Closed transport:", r.protocol, "" + t),
              (r.protocol = null)),
              r._transport_tref &&
                (clearTimeout(r._transport_tref), (r._transport_tref = null)));
            while (1) {
              var o = (r.protocol = r._protocols.shift());
              if (!o) return !1;
              if (
                T[o] &&
                !0 === T[o].need_body &&
                (!e.body ||
                  ("undefined" !== typeof e.readyState &&
                    "complete" !== e.readyState))
              )
                return (
                  r._protocols.unshift(o),
                  (r.protocol = "waiting-for-load"),
                  n.attachEvent("load", function () {
                    r._try_next_protocol();
                  }),
                  !0
                );
              if (T[o] && T[o].enabled(r._options)) {
                var i = T[o].roundTrips || 1,
                  a = (r._options.rto || 0) * i || 5e3;
                r._transport_tref = n.delay(a, function () {
                  r.readyState === T.CONNECTING &&
                    r._didClose(2007, "Transport timeouted");
                });
                var s = n.random_string(8),
                  u = r._base_url + "/" + r._server + "/" + s;
                return (
                  r._debug(
                    "Opening transport:",
                    o,
                    " url:" + u,
                    " RTO:" + r._options.rto,
                  ),
                  (r._transport = new T[o](r, u, r._base_url)),
                  !0
                );
              }
              r._debug("Skipping transport:", o);
            }
          }),
          (T.prototype.close = function (e, t) {
            var r = this;
            if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
            return (
              (r.readyState === T.CONNECTING || r.readyState === T.OPEN) &&
              ((r.readyState = T.CLOSING),
              r._didClose(e || 1e3, t || "Normal closure"),
              !0)
            );
          }),
          (T.prototype.send = function (e) {
            var t = this;
            if (t.readyState === T.CONNECTING)
              throw new Error("INVALID_STATE_ERR");
            return (
              t.readyState === T.OPEN && t._transport.doSend(n.quote("" + e)),
              !0
            );
          }),
          (T.prototype._applyInfo = function (t, r, o) {
            var i = this;
            ((i._options.info = t),
              (i._options.rtt = r),
              (i._options.rto = n.countRTO(r)),
              (i._options.info.null_origin = !e.domain));
            var a = n.probeProtocols();
            i._protocols = n.detectProtocols(a, o, t);
          }));
        var A = (T.websocket = function (e, r) {
          var o = this,
            i = r + "/websocket";
          ((i =
            "https" === i.slice(0, 5) ? "wss" + i.slice(5) : "ws" + i.slice(4)),
            (o.ri = e),
            (o.url = i));
          var a = t.WebSocket || t.MozWebSocket;
          ((o.ws = new a(o.url)),
            (o.ws.onmessage = function (e) {
              o.ri._didMessage(e.data);
            }),
            (o.unload_ref = n.unload_add(function () {
              o.ws.close();
            })),
            (o.ws.onclose = function () {
              o.ri._didMessage(
                n.closeFrame(1006, "WebSocket connection broken"),
              );
            }));
        });
        ((A.prototype.doSend = function (e) {
          this.ws.send("[" + e + "]");
        }),
          (A.prototype.doCleanup = function () {
            var e = this,
              t = e.ws;
            t &&
              ((t.onmessage = t.onclose = null),
              t.close(),
              n.unload_del(e.unload_ref),
              (e.unload_ref = e.ri = e.ws = null));
          }),
          (A.enabled = function () {
            return !(!t.WebSocket && !t.MozWebSocket);
          }),
          (A.roundTrips = 2));
        var C = function () {};
        ((C.prototype.send_constructor = function (e) {
          var t = this;
          ((t.send_buffer = []), (t.sender = e));
        }),
          (C.prototype.doSend = function (e) {
            var t = this;
            (t.send_buffer.push(e), t.send_stop || t.send_schedule());
          }),
          (C.prototype.send_schedule_wait = function () {
            var e,
              t = this;
            ((t.send_stop = function () {
              ((t.send_stop = null), clearTimeout(e));
            }),
              (e = n.delay(25, function () {
                ((t.send_stop = null), t.send_schedule());
              })));
          }),
          (C.prototype.send_schedule = function () {
            var e = this;
            if (e.send_buffer.length > 0) {
              var t = "[" + e.send_buffer.join(",") + "]";
              ((e.send_stop = e.sender(e.trans_url, t, function (t, n) {
                ((e.send_stop = null),
                  !1 === t
                    ? e.ri._didClose(1006, "Sending error " + n)
                    : e.send_schedule_wait());
              })),
                (e.send_buffer = []));
            }
          }),
          (C.prototype.send_destructor = function () {
            var e = this;
            (e._send_stop && e._send_stop(), (e._send_stop = null));
          }));
        var O = function (t, r, o) {
            var i = this;
            if (!("_send_form" in i)) {
              var a = (i._send_form = e.createElement("form")),
                s = (i._send_area = e.createElement("textarea"));
              ((s.name = "d"),
                (a.style.display = "none"),
                (a.style.position = "absolute"),
                (a.method = "POST"),
                (a.enctype = "application/x-www-form-urlencoded"),
                (a.acceptCharset = "UTF-8"),
                a.appendChild(s),
                e.body.appendChild(a));
            }
            ((a = i._send_form), (s = i._send_area));
            var u,
              c = "a" + n.random_string(8);
            ((a.target = c), (a.action = t + "/jsonp_send?i=" + c));
            try {
              u = e.createElement('<iframe name="' + c + '">');
            } catch (d) {
              ((u = e.createElement("iframe")), (u.name = c));
            }
            ((u.id = c), a.appendChild(u), (u.style.display = "none"));
            try {
              s.value = r;
            } catch (p) {
              n.log("Your browser is seriously broken. Go home! " + p.message);
            }
            a.submit();
            var l = function (e) {
              u.onerror &&
                ((u.onreadystatechange = u.onerror = u.onload = null),
                n.delay(500, function () {
                  (u.parentNode.removeChild(u), (u = null));
                }),
                (s.value = ""),
                o(!0));
            };
            return (
              (u.onerror = u.onload = l),
              (u.onreadystatechange = function (e) {
                "complete" == u.readyState && l();
              }),
              l
            );
          },
          M = function (e) {
            return function (t, n, r) {
              var o = new e("POST", t + "/xhr_send", n);
              return (
                (o.onfinish = function (e, t) {
                  r(200 === e || 204 === e, "http status " + e);
                }),
                function (e) {
                  r(!1, e);
                }
              );
            };
          },
          N = function (t, r) {
            var o,
              i,
              a = e.createElement("script"),
              s = function (e) {
                (i && (i.parentNode.removeChild(i), (i = null)),
                  a &&
                    (clearTimeout(o),
                    a.parentNode.removeChild(a),
                    (a.onreadystatechange =
                      a.onerror =
                      a.onload =
                      a.onclick =
                        null),
                    (a = null),
                    r(e),
                    (r = null)));
              },
              u = !1,
              c = null;
            if (
              ((a.id = "a" + n.random_string(8)),
              (a.src = t),
              (a.type = "text/javascript"),
              (a.charset = "UTF-8"),
              (a.onerror = function (e) {
                c ||
                  (c = setTimeout(function () {
                    u ||
                      s(
                        n.closeFrame(
                          1006,
                          "JSONP script loaded abnormally (onerror)",
                        ),
                      );
                  }, 1e3));
              }),
              (a.onload = function (e) {
                s(
                  n.closeFrame(1006, "JSONP script loaded abnormally (onload)"),
                );
              }),
              (a.onreadystatechange = function (e) {
                if (/loaded|closed/.test(a.readyState)) {
                  if (a && a.htmlFor && a.onclick) {
                    u = !0;
                    try {
                      a.onclick();
                    } catch (t) {}
                  }
                  a &&
                    s(
                      n.closeFrame(
                        1006,
                        "JSONP script loaded abnormally (onreadystatechange)",
                      ),
                    );
                }
              }),
              "undefined" === typeof a.async && e.attachEvent)
            )
              if (/opera/i.test(navigator.userAgent))
                ((i = e.createElement("script")),
                  (i.text =
                    "try{var a = document.getElementById('" +
                    a.id +
                    "'); if(a)a.onerror();}catch(x){};"),
                  (a.async = i.async = !1));
              else {
                try {
                  ((a.htmlFor = a.id), (a.event = "onclick"));
                } catch (d) {}
                a.async = !0;
              }
            ("undefined" !== typeof a.async && (a.async = !0),
              (o = setTimeout(function () {
                s(
                  n.closeFrame(
                    1006,
                    "JSONP script loaded abnormally (timeout)",
                  ),
                );
              }, 35e3)));
            var l = e.getElementsByTagName("head")[0];
            return (
              l.insertBefore(a, l.firstChild),
              i && l.insertBefore(i, l.firstChild),
              s
            );
          },
          k = (T["jsonp-polling"] = function (e, t) {
            n.polluteGlobalNamespace();
            var r = this;
            ((r.ri = e),
              (r.trans_url = t),
              r.send_constructor(O),
              r._schedule_recv());
          });
        ((k.prototype = new C()),
          (k.prototype._schedule_recv = function () {
            var e = this,
              t = function (t) {
                ((e._recv_stop = null),
                  t && (e._is_closing || e.ri._didMessage(t)),
                  e._is_closing || e._schedule_recv());
              };
            e._recv_stop = P(e.trans_url + "/jsonp", N, t);
          }),
          (k.enabled = function () {
            return !0;
          }),
          (k.need_body = !0),
          (k.prototype.doCleanup = function () {
            var e = this;
            ((e._is_closing = !0),
              e._recv_stop && e._recv_stop(),
              (e.ri = e._recv_stop = null),
              e.send_destructor());
          }));
        var P = function (e, r, o) {
            var i = "a" + n.random_string(6),
              a = e + "?c=" + escape(s + "." + i),
              u = 0,
              c = function (e) {
                switch (u) {
                  case 0:
                    (delete t[s][i], o(e));
                    break;
                  case 1:
                    (o(e), (u = 2));
                    break;
                  case 2:
                    delete t[s][i];
                    break;
                }
              },
              l = r(a, c);
            t[s][i] = l;
            var d = function () {
              t[s][i] &&
                ((u = 1),
                t[s][i](n.closeFrame(1e3, "JSONP user aborted read")));
            };
            return d;
          },
          I = function () {};
        ((I.prototype = new C()),
          (I.prototype.run = function (e, t, n, r, o) {
            var i = this;
            ((i.ri = e),
              (i.trans_url = t),
              i.send_constructor(M(o)),
              (i.poll = new ee(e, r, t + n, o)));
          }),
          (I.prototype.doCleanup = function () {
            var e = this;
            e.poll && (e.poll.abort(), (e.poll = null));
          }));
        var U = (T["xhr-streaming"] = function (e, t) {
          this.run(e, t, "/xhr_streaming", ie, n.XHRCorsObject);
        });
        ((U.prototype = new I()),
          (U.enabled = function () {
            return (
              t.XMLHttpRequest &&
              "withCredentials" in new XMLHttpRequest() &&
              !/opera/i.test(navigator.userAgent)
            );
          }),
          (U.roundTrips = 2),
          (U.need_body = !0));
        var H = (T["xdr-streaming"] = function (e, t) {
          this.run(e, t, "/xhr_streaming", ie, n.XDRObject);
        });
        ((H.prototype = new I()),
          (H.enabled = function () {
            return !!t.XDomainRequest;
          }),
          (H.roundTrips = 2));
        var L = (T["xhr-polling"] = function (e, t) {
          this.run(e, t, "/xhr", ie, n.XHRCorsObject);
        });
        ((L.prototype = new I()), (L.enabled = U.enabled), (L.roundTrips = 2));
        var K = (T["xdr-polling"] = function (e, t) {
          this.run(e, t, "/xhr", ie, n.XDRObject);
        });
        ((K.prototype = new I()), (K.enabled = H.enabled), (K.roundTrips = 2));
        var R,
          D = function () {};
        ((D.prototype.i_constructor = function (e, t, r) {
          var o = this;
          ((o.ri = e),
            (o.origin = n.getOrigin(r)),
            (o.base_url = r),
            (o.trans_url = t));
          var i = r + "/iframe.html";
          (o.ri._options.devel && (i += "?t=" + +new Date()),
            (o.window_id = n.random_string(8)),
            (i += "#" + o.window_id),
            (o.iframeObj = n.createIframe(i, function (e) {
              o.ri._didClose(1006, "Unable to load an iframe (" + e + ")");
            })),
            (o.onmessage_cb = n.bind(o.onmessage, o)),
            n.attachMessage(o.onmessage_cb));
        }),
          (D.prototype.doCleanup = function () {
            var e = this;
            if (e.iframeObj) {
              n.detachMessage(e.onmessage_cb);
              try {
                e.iframeObj.iframe.contentWindow && e.postMessage("c");
              } catch (t) {}
              (e.iframeObj.cleanup(),
                (e.iframeObj = null),
                (e.onmessage_cb = e.iframeObj = null));
            }
          }),
          (D.prototype.onmessage = function (e) {
            var t = this;
            if (e.origin === t.origin) {
              var n = e.data.slice(0, 8),
                r = e.data.slice(8, 9),
                o = e.data.slice(9);
              if (n === t.window_id)
                switch (r) {
                  case "s":
                    (t.iframeObj.loaded(),
                      t.postMessage(
                        "s",
                        JSON.stringify([
                          T.version,
                          t.protocol,
                          t.trans_url,
                          t.base_url,
                        ]),
                      ));
                    break;
                  case "t":
                    t.ri._didMessage(o);
                    break;
                }
            }
          }),
          (D.prototype.postMessage = function (e, t) {
            var n = this;
            n.iframeObj.post(n.window_id + e + (t || ""), n.origin);
          }),
          (D.prototype.doSend = function (e) {
            this.postMessage("m", e);
          }),
          (D.enabled = function () {
            var e =
              navigator &&
              navigator.userAgent &&
              -1 !== navigator.userAgent.indexOf("Konqueror");
            return (
              ("function" === typeof t.postMessage ||
                "object" === typeof t.postMessage) &&
              !e
            );
          }));
        var J = function (e, r) {
            parent !== t
              ? parent.postMessage(R + e + (r || ""), "*")
              : n.log("Can't postMessage, no parent window.", e, r);
          },
          F = function () {};
        ((F.prototype._didClose = function (e, t) {
          J("t", n.closeFrame(e, t));
        }),
          (F.prototype._didMessage = function (e) {
            J("t", e);
          }),
          (F.prototype._doSend = function (e) {
            this._transport.doSend(e);
          }),
          (F.prototype._doCleanup = function () {
            this._transport.doCleanup();
          }),
          (n.parent_origin = void 0),
          (T.bootstrap_iframe = function () {
            var r;
            R = e.location.hash.slice(1);
            var o = function (e) {
              if (
                e.source === parent &&
                ("undefined" === typeof n.parent_origin &&
                  (n.parent_origin = e.origin),
                e.origin === n.parent_origin)
              ) {
                var o = e.data.slice(0, 8),
                  i = e.data.slice(8, 9),
                  a = e.data.slice(9);
                if (o === R)
                  switch (i) {
                    case "s":
                      var s = JSON.parse(a),
                        u = s[0],
                        c = s[1],
                        l = s[2],
                        d = s[3];
                      if (
                        (u !== T.version &&
                          n.log(
                            'Incompatibile SockJS! Main site uses: "' +
                              u +
                              '", the iframe: "' +
                              T.version +
                              '".',
                          ),
                        !n.flatUrl(l) || !n.flatUrl(d))
                      )
                        return void n.log(
                          "Only basic urls are supported in SockJS",
                        );
                      if (!n.isSameOriginUrl(l) || !n.isSameOriginUrl(d))
                        return void n.log(
                          "Can't connect to different domain from within an iframe. (" +
                            JSON.stringify([t.location.href, l, d]) +
                            ")",
                        );
                      ((r = new F()), (r._transport = new F[c](r, l, d)));
                      break;
                    case "m":
                      r._doSend(a);
                      break;
                    case "c":
                      (r && r._doCleanup(), (r = null));
                      break;
                  }
              }
            };
            (n.attachMessage(o), J("s"));
          }));
        var B = function (e, t) {
          var r = this;
          n.delay(function () {
            r.doXhr(e, t);
          });
        };
        ((B.prototype = new i(["finish"])),
          (B.prototype.doXhr = function (e, t) {
            var r = this,
              o = new Date().getTime(),
              i = new t("GET", e + "/info"),
              a = n.delay(8e3, function () {
                i.ontimeout();
              });
            ((i.onfinish = function (e, t) {
              if ((clearTimeout(a), (a = null), 200 === e)) {
                var n = new Date().getTime() - o,
                  i = JSON.parse(t);
                ("object" !== typeof i && (i = {}), r.emit("finish", i, n));
              } else r.emit("finish");
            }),
              (i.ontimeout = function () {
                (i.close(), r.emit("finish"));
              }));
          }));
        var G = function (t) {
          var r = this,
            o = function () {
              var e = new D();
              e.protocol = "w-iframe-info-receiver";
              var n = function (t) {
                  if ("string" === typeof t && "m" === t.substr(0, 1)) {
                    var n = JSON.parse(t.substr(1)),
                      o = n[0],
                      i = n[1];
                    r.emit("finish", o, i);
                  } else r.emit("finish");
                  (e.doCleanup(), (e = null));
                },
                o = { _options: {}, _didClose: n, _didMessage: n };
              e.i_constructor(o, t, t);
            };
          e.body ? o() : n.attachEvent("load", o);
        };
        G.prototype = new i(["finish"]);
        var q = function () {
          var e = this;
          n.delay(function () {
            e.emit("finish", {}, 2e3);
          });
        };
        q.prototype = new i(["finish"]);
        var W = function (e) {
            if (n.isSameOriginUrl(e)) return new B(e, n.XHRLocalObject);
            switch (n.isXHRCorsCapable()) {
              case 1:
                return new B(e, n.XHRLocalObject);
              case 2:
                return new B(e, n.XDRObject);
              case 3:
                return new G(e);
              default:
                return new q();
            }
          },
          V = (F["w-iframe-info-receiver"] = function (e, t, r) {
            var o = new B(r, n.XHRLocalObject);
            o.onfinish = function (t, n) {
              (e._didMessage("m" + JSON.stringify([t, n])), e._didClose());
            };
          });
        V.prototype.doCleanup = function () {};
        var X = (T["iframe-eventsource"] = function () {
          var e = this;
          ((e.protocol = "w-iframe-eventsource"),
            e.i_constructor.apply(e, arguments));
        });
        ((X.prototype = new D()),
          (X.enabled = function () {
            return "EventSource" in t && D.enabled();
          }),
          (X.need_body = !0),
          (X.roundTrips = 3));
        var z = (F["w-iframe-eventsource"] = function (e, t) {
          this.run(e, t, "/eventsource", ne, n.XHRLocalObject);
        });
        z.prototype = new I();
        var Y = (T["iframe-xhr-polling"] = function () {
          var e = this;
          ((e.protocol = "w-iframe-xhr-polling"),
            e.i_constructor.apply(e, arguments));
        });
        ((Y.prototype = new D()),
          (Y.enabled = function () {
            return t.XMLHttpRequest && D.enabled();
          }),
          (Y.need_body = !0),
          (Y.roundTrips = 3));
        var $ = (F["w-iframe-xhr-polling"] = function (e, t) {
          this.run(e, t, "/xhr", ie, n.XHRLocalObject);
        });
        $.prototype = new I();
        var Q = (T["iframe-htmlfile"] = function () {
          var e = this;
          ((e.protocol = "w-iframe-htmlfile"),
            e.i_constructor.apply(e, arguments));
        });
        ((Q.prototype = new D()),
          (Q.enabled = function () {
            return D.enabled();
          }),
          (Q.need_body = !0),
          (Q.roundTrips = 3));
        var Z = (F["w-iframe-htmlfile"] = function (e, t) {
          this.run(e, t, "/htmlfile", oe, n.XHRLocalObject);
        });
        Z.prototype = new I();
        var ee = function (e, t, n, r) {
          var o = this;
          ((o.ri = e),
            (o.Receiver = t),
            (o.recv_url = n),
            (o.AjaxObject = r),
            o._scheduleRecv());
        };
        ((ee.prototype._scheduleRecv = function () {
          var e = this,
            t = (e.poll = new e.Receiver(e.recv_url, e.AjaxObject));
          ((t.onmessage = function (t) {
            (1, e.ri._didMessage(t.data));
          }),
            (t.onclose = function (n) {
              ((e.poll = t = t.onmessage = t.onclose = null),
                e.poll_is_closing ||
                  ("permanent" === n.reason
                    ? e.ri._didClose(1006, "Polling error (" + n.reason + ")")
                    : e._scheduleRecv()));
            }));
        }),
          (ee.prototype.abort = function () {
            var e = this;
            ((e.poll_is_closing = !0), e.poll && e.poll.abort());
          }));
        var te,
          ne = function (e) {
            var t = this,
              r = new EventSource(e);
            ((r.onmessage = function (e) {
              t.dispatchEvent(new o("message", { data: unescape(e.data) }));
            }),
              (t.es_close = r.onerror =
                function (e, i) {
                  var a = i
                    ? "user"
                    : 2 !== r.readyState
                      ? "network"
                      : "permanent";
                  ((t.es_close = r.onmessage = r.onerror = null),
                    r.close(),
                    (r = null),
                    n.delay(200, function () {
                      t.dispatchEvent(new o("close", { reason: a }));
                    }));
                }));
          };
        ((ne.prototype = new r()),
          (ne.prototype.abort = function () {
            var e = this;
            e.es_close && e.es_close({}, !0);
          }));
        var re = function () {
            if (void 0 === te)
              if ("ActiveXObject" in t)
                try {
                  te = !!new ActiveXObject("htmlfile");
                } catch (e) {}
              else te = !1;
            return te;
          },
          oe = function (e) {
            var r = this;
            (n.polluteGlobalNamespace(),
              (r.id = "a" + n.random_string(6, 26)),
              (e +=
                (-1 === e.indexOf("?") ? "?" : "&") +
                "c=" +
                escape(s + "." + r.id)));
            var i,
              a = re() ? n.createHtmlfile : n.createIframe;
            ((t[s][r.id] = {
              start: function () {
                i.loaded();
              },
              message: function (e) {
                r.dispatchEvent(new o("message", { data: e }));
              },
              stop: function () {
                r.iframe_close({}, "network");
              },
            }),
              (r.iframe_close = function (e, n) {
                (i.cleanup(),
                  (r.iframe_close = i = null),
                  delete t[s][r.id],
                  r.dispatchEvent(new o("close", { reason: n })));
              }),
              (i = a(e, function (e) {
                r.iframe_close({}, "permanent");
              })));
          };
        ((oe.prototype = new r()),
          (oe.prototype.abort = function () {
            var e = this;
            e.iframe_close && e.iframe_close({}, "user");
          }));
        var ie = function (e, t) {
          var n = this,
            r = 0;
          ((n.xo = new t("POST", e, null)),
            (n.xo.onchunk = function (e, t) {
              if (200 === e)
                while (1) {
                  var i = t.slice(r),
                    a = i.indexOf("\n");
                  if (-1 === a) break;
                  r += a + 1;
                  var s = i.slice(0, a);
                  n.dispatchEvent(new o("message", { data: s }));
                }
            }),
            (n.xo.onfinish = function (e, t) {
              (n.xo.onchunk(e, t), (n.xo = null));
              var r = 200 === e ? "network" : "permanent";
              n.dispatchEvent(new o("close", { reason: r }));
            }));
        };
        return (
          (ie.prototype = new r()),
          (ie.prototype.abort = function () {
            var e = this;
            e.xo &&
              (e.xo.close(),
              e.dispatchEvent(new o("close", { reason: "user" })),
              (e.xo = null));
          }),
          (T.getUtils = function () {
            return n;
          }),
          (T.getIframeTransport = function () {
            return D;
          }),
          T
        );
      })();
      ("undefined" !== typeof window &&
        "_sockjs_onload" in window &&
        setTimeout(_sockjs_onload, 1),
        null !== exports && (exports.SockJS = SockJS));
    },
    4662: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(7804);
        ((e.exports = n(7819)(r)),
          "_sockjs_onload" in t && setTimeout(t._sockjs_onload, 1));
      }).call(this, n(13));
    },
    4663: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3092).EventEmitter,
        i = function () {};
      function a(e, t) {
        (i(e), o.call(this));
        var n = this;
        ((this.bufferPosition = 0),
          (this.xo = new t("POST", e, null)),
          this.xo.on("chunk", this._chunkHandler.bind(this)),
          this.xo.once("finish", function (e, t) {
            (i("finish", e, t), n._chunkHandler(e, t), (n.xo = null));
            var r = 200 === e ? "network" : "permanent";
            (i("close", r), n.emit("close", null, r), n._cleanup());
          }));
      }
      (r(a, o),
        (a.prototype._chunkHandler = function (e, t) {
          if ((i("_chunkHandler", e), 200 === e && t))
            for (var n = -1; ; this.bufferPosition += n + 1) {
              var r = t.slice(this.bufferPosition);
              if (((n = r.indexOf("\n")), -1 === n)) break;
              var o = r.slice(0, n);
              o && (i("message", o), this.emit("message", o));
            }
        }),
        (a.prototype._cleanup = function () {
          (i("_cleanup"), this.removeAllListeners());
        }),
        (a.prototype.abort = function () {
          (i("abort"),
            this.xo &&
              (this.xo.close(),
              i("close"),
              this.emit("close", null, "user"),
              (this.xo = null)),
            this._cleanup());
        }),
        (e.exports = a));
    },
    4664: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(6052);
      function i(e, t, n, r) {
        o.call(this, e, t, n, r);
      }
      (r(i, o), (i.enabled = o.enabled && o.supportsCORS), (e.exports = i));
    },
    4976: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3213)),
        i = r(n(3289)),
        a = r(n(3891)),
        s = r(n(4651)),
        u = (r(n(3290)), r(n(816))),
        c = r(n(2949));
      let l = function (e, t) {
          if (!e || !t) throw new Error("Missing argument !");
          if (!c.default.isPrivateKeyValid(t))
            throw new Error("Private key is not valid !");
          let n = u.default.lib.WordArray.random(32),
            r = u.default.PBKDF2(e, n, { keySize: 8, iterations: 2e3 }),
            o = s.default.randomBytes(16),
            a = { iv: i.default.ua2words(o, 16) },
            l = u.default.AES.encrypt(u.default.enc.Hex.parse(t), r, a);
          return {
            encrypted: i.default.ua2hex(o) + l.ciphertext,
            salt: n.toString(),
          };
        },
        d = function (e, t) {
          if (!e) throw new Error("Missing argument !");
          if (!t || t <= 0)
            throw new Error("Please provide a count number above 0");
          let n = e;
          console.time("sha3^n generation time");
          for (let r = 0; r < t; ++r)
            n = u.default.SHA3(n, { outputLength: 256 });
          return (
            console.timeEnd("sha3^n generation time"),
            { priv: u.default.enc.Hex.stringify(n) }
          );
        },
        p = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing argument !");
          let r = void 0;
          if ("trezor" === n) ((r = { priv: "" }), (e.isHW = !0));
          else if (!e.password) throw new Error("Missing argument !");
          if ("pass:6k" === n)
            if (t.encrypted || t.iv) {
              if (!t.encrypted || !t.iv) return !1;
              {
                let n = d(e.password, 20),
                  o = {
                    ciphertext: u.default.enc.Hex.parse(t.encrypted),
                    iv: i.default.hex2ua(t.iv),
                    key: i.default.hex2ua(n.priv),
                  },
                  a = b(o);
                r = { priv: a };
              }
            } else r = d(e.password, 6e3);
          else if ("pass:bip32" === n) {
            let n = d(e.password, 20),
              o = {
                ciphertext: u.default.enc.Hex.parse(t.encrypted),
                iv: i.default.hex2ua(t.iv),
                key: i.default.hex2ua(n.priv),
              },
              a = b(o);
            r = { priv: a };
          } else if ("pass:enc" === n) {
            let n = d(e.password, 20),
              o = {
                ciphertext: u.default.enc.Hex.parse(t.encrypted),
                iv: i.default.hex2ua(t.iv),
                key: i.default.hex2ua(n.priv),
              },
              a = b(o);
            r = { priv: a };
          } else if (!r) return !1;
          return ((e.privateKey = r.priv), !0);
        },
        h = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing argument !");
          if (!c.default.isPrivateKeyValid(e))
            throw new Error("Private key is not valid !");
          let r = n.toUpperCase().replace(/-/g, ""),
            i = o.default.create(e),
            s = a.default.toAddress(i.publicKey.toString(), t);
          return s === r;
        };
      function m(e, t, n) {
        let r = i.default.ua2words(t, n),
          o = u.default.SHA3(r, { outputLength: 512 });
        i.default.words2ua(e, o);
      }
      function g(e, t, n, r) {
        s.default.lowlevel.crypto_shared_key_hash(e, r, n, m);
        for (let i = 0; i < t.length; i++) e[i] ^= t[i];
        let o = u.default.SHA3(i.default.ua2words(e, 32), {
          outputLength: 256,
        });
        return o;
      }
      let v = function () {
          let e = s.default.randomBytes(32);
          return e;
        },
        y = function (e, t) {
          if (!e || !t) throw new Error("Missing argument !");
          let n = s.default.randomBytes(16),
            r = i.default.ua2words(t, 32),
            o = { iv: i.default.ua2words(n, 16) },
            a = u.default.AES.encrypt(u.default.enc.Hex.parse(e), r, o);
          return { ciphertext: a.ciphertext, iv: n, key: t };
        },
        b = function (e) {
          if (!e) throw new Error("Missing argument !");
          let t = i.default.ua2words(e.key, 32),
            n = { iv: i.default.ua2words(e.iv, 16) };
          return u.default.enc.Hex.stringify(u.default.AES.decrypt(e, t, n));
        },
        w = function (e, t) {
          if (!e || !t) throw new Error("Missing argument !");
          if (!c.default.isPrivateKeyValid(e))
            throw new Error("Private key is not valid !");
          let n = d(t, 20),
            r = y(e, i.default.hex2ua(n.priv));
          return {
            ciphertext: u.default.enc.Hex.stringify(r.ciphertext),
            iv: i.default.ua2hex(r.iv),
          };
        },
        _ = function (e, t, n, r, o) {
          if (!e || !t || !n || !r || !o) throw new Error("Missing argument !");
          if (!c.default.isPrivateKeyValid(e))
            throw new Error("Private key is not valid !");
          if (!c.default.isPublicKeyValid(t))
            throw new Error("Public key is not valid !");
          let a = i.default.hex2ua_reversed(e),
            s = i.default.hex2ua(t),
            l = new Uint8Array(32),
            d = g(l, o, a, s),
            p = d,
            h = { iv: i.default.ua2words(r, 16) },
            m = u.default.AES.encrypt(
              u.default.enc.Hex.parse(i.default.utf8ToHex(n)),
              p,
              h,
            ),
            v =
              i.default.ua2hex(o) +
              i.default.ua2hex(r) +
              u.default.enc.Hex.stringify(m.ciphertext);
          return v;
        },
        x = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing argument !");
          if (!c.default.isPrivateKeyValid(e))
            throw new Error("Private key is not valid !");
          if (!c.default.isPublicKeyValid(t))
            throw new Error("Public key is not valid !");
          let r = s.default.randomBytes(16),
            o = s.default.randomBytes(32),
            i = _(e, t, n, r, o);
          return i;
        },
        S = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing argument !");
          if (!c.default.isPrivateKeyValid(e))
            throw new Error("Private key is not valid !");
          if (!c.default.isPublicKeyValid(t))
            throw new Error("Public key is not valid !");
          let r = i.default.hex2ua(n),
            o = new Uint8Array(r.buffer, 0, 32),
            a = new Uint8Array(r.buffer, 32, 16),
            s = new Uint8Array(r.buffer, 48),
            l = i.default.hex2ua_reversed(e),
            d = i.default.hex2ua(t),
            p = new Uint8Array(32),
            h = g(p, o, l, d),
            m = h,
            v = { iv: i.default.ua2words(a, 16) },
            y = { ciphertext: i.default.ua2words(s, s.length) },
            b = u.default.AES.decrypt(y, m, v),
            w = u.default.enc.Hex.stringify(b);
          return w;
        };
      e.exports = {
        toMobileKey: l,
        derivePassSha: d,
        passwordToPrivatekey: p,
        checkAddress: h,
        randomKey: v,
        decrypt: b,
        encrypt: y,
        encodePrivKey: w,
        _encode: _,
        encode: x,
        decode: S,
      };
    },
    4989: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(3092).EventEmitter,
          o = n(16),
          i = n(3552),
          a = n(4288),
          s = n(3214),
          u = function () {};
        function c(e, t, n) {
          u(e, t);
          var o = this;
          (r.call(this),
            setTimeout(function () {
              o._start(e, t, n);
            }, 0));
        }
        (o(c, r),
          (c.prototype._start = function (e, n, r) {
            u("_start");
            var o = this,
              a = new t.XDomainRequest();
            ((n = s.addQuery(n, "t=" + +new Date())),
              (a.onerror = function () {
                (u("onerror"), o._error());
              }),
              (a.ontimeout = function () {
                (u("ontimeout"), o._error());
              }),
              (a.onprogress = function () {
                (u("progress", a.responseText),
                  o.emit("chunk", 200, a.responseText));
              }),
              (a.onload = function () {
                (u("load"),
                  o.emit("finish", 200, a.responseText),
                  o._cleanup(!1));
              }),
              (this.xdr = a),
              (this.unloadRef = i.unloadAdd(function () {
                o._cleanup(!0);
              })));
            try {
              (this.xdr.open(e, n),
                this.timeout && (this.xdr.timeout = this.timeout),
                this.xdr.send(r));
            } catch (c) {
              this._error();
            }
          }),
          (c.prototype._error = function () {
            (this.emit("finish", 0, ""), this._cleanup(!1));
          }),
          (c.prototype._cleanup = function (e) {
            if ((u("cleanup", e), this.xdr)) {
              if (
                (this.removeAllListeners(),
                i.unloadDel(this.unloadRef),
                (this.xdr.ontimeout =
                  this.xdr.onerror =
                  this.xdr.onprogress =
                  this.xdr.onload =
                    null),
                e)
              )
                try {
                  this.xdr.abort();
                } catch (t) {}
              this.unloadRef = this.xdr = null;
            }
          }),
          (c.prototype.close = function () {
            (u("close"), this._cleanup(!0));
          }),
          (c.enabled = !(!t.XDomainRequest || !a.hasDomain())),
          (e.exports = c));
      }).call(this, n(13));
    },
    4990: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(16),
          o = n(6056),
          i = n(4991);
        e.exports = function (e) {
          function n(t, n) {
            o.call(this, e.transportName, t, n);
          }
          return (
            r(n, o),
            (n.enabled = function (n, r) {
              if (!t.document) return !1;
              var a = i.extend({}, r);
              return ((a.sameOrigin = !0), e.enabled(a) && o.enabled());
            }),
            (n.transportName = "iframe-" + e.transportName),
            (n.needBody = !0),
            (n.roundTrips = o.roundTrips + e.roundTrips - 1),
            (n.facadeTransport = e),
            n
          );
        };
      }).call(this, n(13));
    },
    4991: function (e, t, n) {
      "use strict";
      e.exports = {
        isObject: function (e) {
          var t = typeof e;
          return "function" === t || ("object" === t && !!e);
        },
        extend: function (e) {
          if (!this.isObject(e)) return e;
          for (var t, n, r = 1, o = arguments.length; r < o; r++)
            for (n in ((t = arguments[r]), t))
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e;
        },
      };
    },
    4992: function (e, t, n) {
      "use strict";
      function r(e) {
        this.type = e;
      }
      ((r.prototype.initEvent = function (e, t, n) {
        return (
          (this.type = e),
          (this.bubbles = t),
          (this.cancelable = n),
          (this.timeStamp = +new Date()),
          this
        );
      }),
        (r.prototype.stopPropagation = function () {}),
        (r.prototype.preventDefault = function () {}),
        (r.CAPTURING_PHASE = 1),
        (r.AT_TARGET = 2),
        (r.BUBBLING_PHASE = 3),
        (e.exports = r));
    },
    6016: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = n(3213),
        i = r(n(3891)),
        a = r(n(3289)),
        s = r(n(4652)),
        u = r(n(4651)),
        c = r(n(3290)),
        l = r(n(4976)),
        d = r(n(2949)),
        p = r(n(7657)),
        h = r(n(6017)),
        m = r(n(3291)),
        g = r(n(4653)),
        v = r(n(4654)),
        y = r(n(7658)),
        b = r(n(6018)),
        w = r(n(3292)),
        _ = r(n(6020)),
        x = r(n(3416)),
        S = r(n(816)),
        E = r(n(7802)),
        T = r(n(7835));
      t.default = {
        crypto: {
          keyPair: { create: o.create },
          helpers: l.default,
          nacl: u.default,
          js: S.default,
          verifySignature: o.verifySignature,
        },
        model: {
          address: i.default,
          network: c.default,
          nodes: g.default,
          transactionTypes: m.default,
          sinks: v.default,
          wallet: y.default,
          transactions: b.default,
          objects: w.default,
          fees: x.default,
          apostille: T.default,
        },
        utils: {
          convert: a.default,
          helpers: d.default,
          nty: p.default,
          serialization: h.default,
          format: s.default,
        },
        com: { requests: _.default, websockets: E.default },
      };
    },
    6017: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3289)),
        i = r(n(4652)),
        a = r(n(3291));
      let s = function (e) {
          var t = new ArrayBuffer(132),
            n = new Uint32Array(t),
            r = new Uint8Array(t),
            o = 4;
          if (null === e) n[0] = 4294967295;
          else {
            n[0] = e.length;
            for (var i = 0; i < e.length; ++i) r[o++] = e.charCodeAt(i);
          }
          return new Uint8Array(t, 0, o);
        },
        u = function (e) {
          var t = new ArrayBuffer(516),
            n = new Uint32Array(t),
            r = new Uint8Array(t),
            o = 4;
          if (null === e) n[0] = 4294967295;
          else {
            n[0] = e.length;
            for (var i = 0; i < e.length; ++i) r[o++] = e[i];
          }
          return new Uint8Array(t, 0, o);
        },
        c = function (e) {
          var t = new ArrayBuffer(8),
            n = new Uint32Array(t);
          return (
            (n[0] = e),
            (n[1] = Math.floor(e / 4294967296)),
            new Uint8Array(t, 0, 8)
          );
        },
        l = function (e) {
          var t = new ArrayBuffer(264),
            n = s(e.namespaceId),
            r = s(e.name),
            o = new Uint8Array(t),
            i = new Uint32Array(t);
          i[0] = n.length + r.length;
          for (var a = 4, u = 0; u < n.length; ++u) o[a++] = n[u];
          for (u = 0; u < r.length; ++u) o[a++] = r[u];
          return new Uint8Array(t, 0, a);
        },
        d = function (e) {
          var t = new ArrayBuffer(276),
            n = l(e.mosaicId),
            r = c(e.quantity),
            o = new Uint8Array(t),
            i = new Uint32Array(t);
          i[0] = n.length + r.length;
          for (var a = 4, s = 0; s < n.length; ++s) o[a++] = n[s];
          for (s = 0; s < r.length; ++s) o[a++] = r[s];
          return new Uint8Array(t, 0, a);
        },
        p = function (e) {
          var t = new ArrayBuffer(2764),
            n = new Uint32Array(t),
            r = new Uint8Array(t),
            o = 0,
            a = 0;
          ((n[o++] = e.length), (a += 4));
          for (var s = [], u = 0; u < e.length; ++u)
            s.push({
              entity: e[u],
              value:
                i.default.mosaicIdToName(e[u].mosaicId) + " : " + e[u].quantity,
            });
          s.sort(function (e, t) {
            return e.value < t.value ? -1 : e.value > t.value;
          });
          for (u = 0; u < s.length; ++u) {
            e = s[u].entity;
            for (var c = d(e), l = 0; l < c.length; ++l) r[a++] = c[l];
          }
          return new Uint8Array(t, 0, a);
        },
        h = function (e) {
          var t = new ArrayBuffer(1024),
            n = new Uint32Array(t),
            r = new Uint8Array(t),
            o = s(e["name"]),
            i = s(e["value"]);
          n[0] = o.length + i.length;
          for (var a = 4, u = 0; u < o.length; ++u) r[a++] = o[u];
          for (u = 0; u < i.length; ++u) r[a++] = i[u];
          return new Uint8Array(t, 0, a);
        },
        m = function (e) {
          var t = new ArrayBuffer(1024),
            n = new Uint32Array(t),
            r = new Uint8Array(t),
            o = 0,
            i = 0;
          ((n[o++] = e.length), (i += 4));
          for (var a = e, s = ((a = []), 0); s < e.length; ++s) a.push(e[s]);
          var u = {
            divisibility: 1,
            initialSupply: 2,
            supplyMutable: 3,
            transferable: 4,
          };
          a.sort(function (e, t) {
            return u[e.name] < u[t.name] ? -1 : u[e.name] > u[t.name];
          });
          for (s = 0; s < a.length; ++s) {
            e = a[s];
            for (var c = h(e), l = 0; l < c.length; ++l) r[i++] = c[l];
          }
          return new Uint8Array(t, 0, i);
        },
        g = function (e) {
          var t = new ArrayBuffer(1024),
            n = new Uint32Array(t);
          if (null === e) return ((n[0] = 0), new Uint8Array(t, 0, 4));
          var r = new Uint8Array(t);
          n[1] = e["type"];
          for (var o = 8, i = s(e["recipient"]), a = 0; a < i.length; ++a)
            r[o++] = i[a];
          var u = l(e["mosaicId"]);
          for (a = 0; a < u.length; ++a) r[o++] = u[a];
          var d = c(e["fee"]);
          for (a = 0; a < d.length; ++a) r[o++] = d[a];
          return (
            (n[0] = 4 + i.length + u.length + 8),
            new Uint8Array(t, 0, o)
          );
        },
        v = function (e) {
          var t = new ArrayBuffer(2868),
            n = new Uint32Array(t),
            r = new Uint8Array(t),
            i = o.default.hex2ua(e["creator"]);
          n[0] = i.length;
          for (var a = 4, s = 0; s < i.length; ++s) r[a++] = i[s];
          var c = l(e.id);
          for (s = 0; s < c.length; ++s) r[a++] = c[s];
          var d = o.default.hex2ua(o.default.utf8ToHex(e["description"]));
          for (i = u(d), s = 0; s < i.length; ++s) r[a++] = i[s];
          for (i = m(e["properties"]), s = 0; s < i.length; ++s) r[a++] = i[s];
          var p = g(e["levy"]);
          for (s = 0; s < p.length; ++s) r[a++] = p[s];
          return new Uint8Array(t, 0, a);
        },
        y = function (e) {
          var t = new ArrayBuffer(3276),
            n = new Uint32Array(t),
            r = new Uint8Array(t);
          ((n[0] = e["type"]), (n[1] = e["version"]), (n[2] = e["timeStamp"]));
          var i = o.default.hex2ua(e["signer"]);
          n[3] = i.length;
          for (var u = 16, d = 0; d < i.length; ++d) r[u++] = i[d];
          var h = u / 4;
          if (
            ((n[h++] = e["fee"]),
            (n[h++] = Math.floor(e["fee"] / 4294967296)),
            (n[h++] = e["deadline"]),
            (u += 12),
            n[0] === a.default.transfer)
          ) {
            ((n[h++] = e["recipient"].length), (u += 4));
            for (d = 0; d < e["recipient"].length; ++d)
              r[u++] = e["recipient"].charCodeAt(d);
            if (
              ((h = u / 4),
              (n[h++] = e["amount"]),
              (n[h++] = Math.floor(e["amount"] / 4294967296)),
              (u += 8),
              1 === e["message"]["type"] || 2 === e["message"]["type"])
            ) {
              i = o.default.hex2ua(e["message"]["payload"]);
              if (0 === i.length) ((n[h++] = 0), (u += 4));
              else {
                ((n[h++] = 8 + i.length),
                  (n[h++] = e["message"]["type"]),
                  (n[h++] = i.length),
                  (u += 12));
                for (d = 0; d < i.length; ++d) r[u++] = i[d];
              }
            }
            var m = 16777215 & n[1];
            if (m >= 2)
              for (i = p(e["mosaics"]), d = 0; d < i.length; ++d) r[u++] = i[d];
          } else if (n[0] === a.default.provisionNamespace) {
            ((n[h++] = e["rentalFeeSink"].length), (u += 4));
            for (d = 0; d < e["rentalFeeSink"].length; ++d)
              r[u++] = e["rentalFeeSink"].charCodeAt(d);
            ((h = u / 4),
              (n[h++] = e["rentalFee"]),
              (n[h++] = Math.floor(e["rentalFee"] / 4294967296)),
              (u += 8));
            for (i = s(e["newPart"]), d = 0; d < i.length; ++d) r[u++] = i[d];
            for (i = s(e["parent"]), d = 0; d < i.length; ++d) r[u++] = i[d];
          } else if (n[0] === a.default.mosaicDefinition) {
            i = v(e["mosaicDefinition"]);
            ((n[h++] = i.length), (u += 4));
            for (d = 0; d < i.length; ++d) r[u++] = i[d];
            i = s(e["creationFeeSink"]);
            for (d = 0; d < i.length; ++d) r[u++] = i[d];
            i = c(e["creationFee"]);
            for (d = 0; d < i.length; ++d) r[u++] = i[d];
          } else if (n[0] === a.default.mosaicSupply) {
            var g = l(e["mosaicId"]);
            for (d = 0; d < g.length; ++d) r[u++] = g[d];
            i = new ArrayBuffer(4);
            ((n = new Uint32Array(i)), (n[0] = e["supplyType"]));
            var b = new Uint8Array(i);
            for (d = 0; d < b.length; ++d) r[u++] = b[d];
            var w = c(e["delta"]);
            for (d = 0; d < w.length; ++d) r[u++] = w[d];
          } else if (n[0] === a.default.multisigSignature) {
            i = o.default.hex2ua(e["otherHash"]["data"]);
            ((n[h++] = 4 + i.length), (n[h++] = i.length), (u += 8));
            for (d = 0; d < i.length; ++d) r[u++] = i[d];
            ((h = u / 4),
              (i = e["otherAccount"]),
              (n[h++] = i.length),
              (u += 4));
            for (d = 0; d < i.length; ++d) r[u++] = i.charCodeAt(d);
          } else if (n[0] === a.default.multisigTransaction) {
            i = y(e["otherTrans"]);
            ((n[h++] = i.length), (u += 4));
            for (d = 0; d < i.length; ++d) r[u++] = i[d];
          } else if (n[0] === a.default.multisigModification) {
            i = e["modifications"];
            ((n[h++] = i.length), (u += 4));
            for (d = 0; d < i.length; ++d) {
              ((n[h++] = 40),
                (u += 4),
                1 == i[d]["modificationType"] ? (n[h++] = 1) : (n[h++] = 2),
                (u += 4),
                (n[h++] = 32),
                (u += 4));
              for (
                var _ = o.default.hex2ua(
                    e["modifications"][d]["cosignatoryAccount"],
                  ),
                  x = 0;
                x < _.length;
                ++x
              )
                r[u++] = _[x];
              h = u / 4;
            }
            m = 16777215 & n[1];
            m >= 2 &&
              ((n[h++] = 4),
              (u += 4),
              (n[h++] = e["minCosignatories"]["relativeChange"].toString(16)),
              (u += 4));
          } else if (n[0] === a.default.importanceTransfer) {
            ((n[h++] = e["mode"]), (u += 4), (n[h++] = 32), (u += 4));
            for (
              _ = o.default.hex2ua(e["remoteAccount"]), x = 0;
              x < _.length;
              ++x
            )
              r[u++] = _[x];
          }
          return new Uint8Array(t, 0, u);
        };
      e.exports = {
        _serializeSafeString: s,
        _serializeUaString: u,
        _serializeLong: c,
        _serializeMosaicId: l,
        _serializeMosaicAndQuantity: d,
        _serializeMosaics: p,
        _serializeProperty: h,
        _serializeProperties: m,
        _serializeLevy: g,
        _serializeMosaicDefinition: v,
        serializeTransaction: y,
      };
    },
    6018: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(7665)),
        i = r(n(7666)),
        a = r(n(7667)),
        s = r(n(7668)),
        u = r(n(7669)),
        c = r(n(7670)),
        l = r(n(7671)),
        d = r(n(7672)),
        p = r(n(6019));
      let h = function (e) {
        switch (e) {
          case "transferTransaction":
            return o.default.prepare;
          case "mosaicTransferTransaction":
            return o.default.prepareMosaic;
          case "mosaicDefinitionTransaction":
            return a.default.prepare;
          case "multisigAggregateModificationTransaction":
            return u.default.prepare;
          case "namespaceProvisionTransaction":
            return c.default.prepare;
          case "signatureTransaction":
            return i.default.prepare;
          case "mosaicSupplyChangeTransaction":
            return s.default.prepare;
          case "importanceTransferTransaction":
            return l.default.prepare;
          default:
            return {};
        }
      };
      e.exports = {
        prepare: h,
        send: d.default,
        prepareMessage: p.default.prepare,
      };
    },
    6019: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(4976)),
        i = r(n(3289)),
        a = r(n(2949));
      let s = function (e, t) {
        return 2 === t.messageType && e.privateKey
          ? {
              type: 2,
              payload: o.default.encode(
                e.privateKey,
                t.recipientPublicKey,
                t.message.toString(),
              ),
            }
          : 2 === t.messageType && e.isHW
            ? {
                type: 2,
                payload: i.default.utf8ToHex(t.message.toString()),
                publicKey: t.recipientPublicKey,
              }
            : 0 === t.messageType &&
                a.default.isHexadecimal(t.message.toString())
              ? { type: 1, payload: "fe" + t.message.toString() }
              : { type: 1, payload: i.default.utf8ToHex(t.message.toString()) };
      };
      e.exports = { prepare: s };
    },
    6020: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(n(7673)),
        i = r(n(7794)),
        a = r(n(7795)),
        s = r(n(7796)),
        u = r(n(7797)),
        c = r(n(7798)),
        l = r(n(7799)),
        d = r(n(7800)),
        p = r(n(7801));
      t.default = {
        account: o.default,
        apostille: i.default,
        chain: a.default,
        endpoint: s.default,
        market: u.default,
        mosaic: c.default,
        namespace: l.default,
        supernodes: d.default,
        transaction: p.default,
      };
    },
    6050: function (e, t, n) {
      "use strict";
      function r() {
        this._listeners = {};
      }
      ((r.prototype.addEventListener = function (e, t) {
        e in this._listeners || (this._listeners[e] = []);
        var n = this._listeners[e];
        (-1 === n.indexOf(t) && (n = n.concat([t])), (this._listeners[e] = n));
      }),
        (r.prototype.removeEventListener = function (e, t) {
          var n = this._listeners[e];
          if (n) {
            var r = n.indexOf(t);
            -1 === r ||
              (n.length > 1
                ? (this._listeners[e] = n.slice(0, r).concat(n.slice(r + 1)))
                : delete this._listeners[e]);
          }
        }),
        (r.prototype.dispatchEvent = function () {
          var e = arguments[0],
            t = e.type,
            n = 1 === arguments.length ? [e] : Array.apply(null, arguments);
          if (
            (this["on" + t] && this["on" + t].apply(this, n),
            t in this._listeners)
          )
            for (var r = this._listeners[t], o = 0; o < r.length; o++)
              r[o].apply(this, n);
        }),
        (e.exports = r));
    },
    6051: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3214),
        i = n(7811),
        a = n(7812),
        s = function () {};
      function u(e, t, n, r, u) {
        var c = o.addPath(e, t);
        s(c);
        var l = this;
        (i.call(this, e, n),
          (this.poll = new a(r, c, u)),
          this.poll.on("message", function (e) {
            (s("poll message", e), l.emit("message", e));
          }),
          this.poll.once("close", function (e, t) {
            (s("poll close", e, t),
              (l.poll = null),
              l.emit("close", e, t),
              l.close());
          }));
      }
      (r(u, i),
        (u.prototype.close = function () {
          (i.prototype.close.call(this),
            s("close"),
            this.removeAllListeners(),
            this.poll && (this.poll.abort(), (this.poll = null)));
        }),
        (e.exports = u));
    },
    6052: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(3092).EventEmitter,
          o = n(16),
          i = n(3552),
          a = n(3214),
          s = t.XMLHttpRequest,
          u = function () {};
        function c(e, t, n, o) {
          u(e, t);
          var i = this;
          (r.call(this),
            setTimeout(function () {
              i._start(e, t, n, o);
            }, 0));
        }
        (o(c, r),
          (c.prototype._start = function (e, t, n, r) {
            var o = this;
            try {
              this.xhr = new s();
            } catch (d) {}
            if (!this.xhr)
              return (
                u("no xhr"),
                this.emit("finish", 0, "no xhr support"),
                void this._cleanup()
              );
            ((t = a.addQuery(t, "t=" + +new Date())),
              (this.unloadRef = i.unloadAdd(function () {
                (u("unload cleanup"), o._cleanup(!0));
              })));
            try {
              (this.xhr.open(e, t, !0),
                this.timeout &&
                  "timeout" in this.xhr &&
                  ((this.xhr.timeout = this.timeout),
                  (this.xhr.ontimeout = function () {
                    (u("xhr timeout"), o.emit("finish", 0, ""), o._cleanup(!1));
                  })));
            } catch (p) {
              return (
                u("exception", p),
                this.emit("finish", 0, ""),
                void this._cleanup(!1)
              );
            }
            if (
              ((r && r.noCredentials) ||
                !c.supportsCORS ||
                (u("withCredentials"), (this.xhr.withCredentials = !0)),
              r && r.headers)
            )
              for (var l in r.headers)
                this.xhr.setRequestHeader(l, r.headers[l]);
            this.xhr.onreadystatechange = function () {
              if (o.xhr) {
                var e,
                  t,
                  n = o.xhr;
                switch ((u("readyState", n.readyState), n.readyState)) {
                  case 3:
                    try {
                      ((t = n.status), (e = n.responseText));
                    } catch (p) {}
                    (u("status", t),
                      1223 === t && (t = 204),
                      200 === t &&
                        e &&
                        e.length > 0 &&
                        (u("chunk"), o.emit("chunk", t, e)));
                    break;
                  case 4:
                    ((t = n.status),
                      u("status", t),
                      1223 === t && (t = 204),
                      (12005 !== t && 12029 !== t) || (t = 0),
                      u("finish", t, n.responseText),
                      o.emit("finish", t, n.responseText),
                      o._cleanup(!1));
                    break;
                }
              }
            };
            try {
              o.xhr.send(n);
            } catch (p) {
              (o.emit("finish", 0, ""), o._cleanup(!1));
            }
          }),
          (c.prototype._cleanup = function (e) {
            if ((u("cleanup"), this.xhr)) {
              if (
                (this.removeAllListeners(),
                i.unloadDel(this.unloadRef),
                (this.xhr.onreadystatechange = function () {}),
                this.xhr.ontimeout && (this.xhr.ontimeout = null),
                e)
              )
                try {
                  this.xhr.abort();
                } catch (t) {}
              this.unloadRef = this.xhr = null;
            }
          }),
          (c.prototype.close = function () {
            (u("close"), this._cleanup(!0));
          }),
          (c.enabled = !!s));
        var l = ["Active"].concat("Object").join("X");
        !c.enabled &&
          l in t &&
          (u("overriding xmlhttprequest"),
          (s = function () {
            try {
              return new t[l]("Microsoft.XMLHTTP");
            } catch (e) {
              return null;
            }
          }),
          (c.enabled = !!new s()));
        var d = !1;
        try {
          d = "withCredentials" in new s();
        } catch (p) {}
        ((c.supportsCORS = d), (e.exports = c));
      }).call(this, n(13));
    },
    6053: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3896),
        i = n(4663),
        a = n(4989);
      function s(e) {
        if (!a.enabled) throw new Error("Transport created when disabled");
        o.call(this, e, "/xhr_streaming", i, a);
      }
      (r(s, o),
        (s.enabled = function (e) {
          return !e.cookie_needed && !e.nullOrigin && a.enabled && e.sameScheme;
        }),
        (s.transportName = "xdr-streaming"),
        (s.roundTrips = 2),
        (e.exports = s));
    },
    6054: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3896),
        i = n(7813),
        a = n(4664),
        s = n(6055);
      function u(e) {
        if (!u.enabled()) throw new Error("Transport created when disabled");
        o.call(this, e, "/eventsource", i, a);
      }
      (r(u, o),
        (u.enabled = function () {
          return !!s;
        }),
        (u.transportName = "eventsource"),
        (u.roundTrips = 2),
        (e.exports = u));
    },
    6055: function (e, t, n) {
      (function (t) {
        e.exports = t.EventSource;
      }).call(this, n(13));
    },
    6056: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3092).EventEmitter,
        i = n(6057),
        a = n(3214),
        s = n(4289),
        u = n(3552),
        c = n(3895),
        l = function () {};
      function d(e, t, n) {
        if (!d.enabled()) throw new Error("Transport created when disabled");
        o.call(this);
        var r = this;
        ((this.origin = a.getOrigin(n)),
          (this.baseUrl = n),
          (this.transUrl = t),
          (this.transport = e),
          (this.windowId = c.string(8)));
        var i = a.addPath(n, "/iframe.html") + "#" + this.windowId;
        (l(e, t, i),
          (this.iframeObj = s.createIframe(i, function (e) {
            (l("err callback"),
              r.emit("close", 1006, "Unable to load an iframe (" + e + ")"),
              r.close());
          })),
          (this.onmessageCallback = this._message.bind(this)),
          u.attachEvent("message", this.onmessageCallback));
      }
      (r(d, o),
        (d.prototype.close = function () {
          if ((l("close"), this.removeAllListeners(), this.iframeObj)) {
            u.detachEvent("message", this.onmessageCallback);
            try {
              this.postMessage("c");
            } catch (e) {}
            (this.iframeObj.cleanup(),
              (this.iframeObj = null),
              (this.onmessageCallback = this.iframeObj = null));
          }
        }),
        (d.prototype._message = function (e) {
          if ((l("message", e.data), a.isOriginEqual(e.origin, this.origin))) {
            var t;
            try {
              t = JSON.parse(e.data);
            } catch (r) {
              return void l("bad json", e.data);
            }
            if (t.windowId === this.windowId)
              switch (t.type) {
                case "s":
                  (this.iframeObj.loaded(),
                    this.postMessage(
                      "s",
                      JSON.stringify([
                        i,
                        this.transport,
                        this.transUrl,
                        this.baseUrl,
                      ]),
                    ));
                  break;
                case "t":
                  this.emit("message", t.data);
                  break;
                case "c":
                  var n;
                  try {
                    n = JSON.parse(t.data);
                  } catch (r) {
                    return void l("bad json", t.data);
                  }
                  (this.emit("close", n[0], n[1]), this.close());
                  break;
              }
            else l("mismatched window id", t.windowId, this.windowId);
          } else l("not same origin", e.origin, this.origin);
        }),
        (d.prototype.postMessage = function (e, t) {
          (l("postMessage", e, t),
            this.iframeObj.post(
              JSON.stringify({
                windowId: this.windowId,
                type: e,
                data: t || "",
              }),
              this.origin,
            ));
        }),
        (d.prototype.send = function (e) {
          (l("send", e), this.postMessage("m", e));
        }),
        (d.enabled = function () {
          return s.iframeEnabled;
        }),
        (d.transportName = "iframe"),
        (d.roundTrips = 2),
        (e.exports = d));
    },
    6057: function (e, t) {
      e.exports = "1.6.1";
    },
    6058: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(7814),
        i = n(4287),
        a = n(3896);
      function s(e) {
        if (!o.enabled) throw new Error("Transport created when disabled");
        a.call(this, e, "/htmlfile", o, i);
      }
      (r(s, a),
        (s.enabled = function (e) {
          return o.enabled && e.sameOrigin;
        }),
        (s.transportName = "htmlfile"),
        (s.roundTrips = 2),
        (e.exports = s));
    },
    6059: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3896),
        i = n(4663),
        a = n(4664),
        s = n(4287);
      function u(e) {
        if (!s.enabled && !a.enabled)
          throw new Error("Transport created when disabled");
        o.call(this, e, "/xhr", i, a);
      }
      (r(u, o),
        (u.enabled = function (e) {
          return !e.nullOrigin && (!(!s.enabled || !e.sameOrigin) || a.enabled);
        }),
        (u.transportName = "xhr-polling"),
        (u.roundTrips = 2),
        (e.exports = u));
    },
    6060: function (e, t, n) {
      "use strict";
      (function (t) {
        e.exports = t.location || {
          origin: "http://localhost:80",
          protocol: "http:",
          host: "localhost",
          port: 80,
          href: "http://localhost/",
          hash: "",
        };
      }).call(this, n(13));
    },
    6061: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3092).EventEmitter,
        i = n(4287),
        a = n(6062);
      function s(e) {
        var t = this;
        (o.call(this),
          (this.ir = new a(e, i)),
          this.ir.once("finish", function (e, n) {
            ((t.ir = null), t.emit("message", JSON.stringify([e, n])));
          }));
      }
      (r(s, o),
        (s.transportName = "iframe-info-receiver"),
        (s.prototype.close = function () {
          (this.ir && (this.ir.close(), (this.ir = null)),
            this.removeAllListeners());
        }),
        (e.exports = s));
    },
    6062: function (e, t, n) {
      "use strict";
      var r = n(3092).EventEmitter,
        o = n(16),
        i = n(4991),
        a = function () {};
      function s(e, t) {
        r.call(this);
        var n = this,
          o = +new Date();
        ((this.xo = new t("GET", e)),
          this.xo.once("finish", function (e, t) {
            var r, s;
            if (200 === e) {
              if (((s = +new Date() - o), t))
                try {
                  r = JSON.parse(t);
                } catch (u) {
                  a("bad json", t);
                }
              i.isObject(r) || (r = {});
            }
            (n.emit("finish", r, s), n.removeAllListeners());
          }));
      }
      (o(s, r),
        (s.prototype.close = function () {
          (this.removeAllListeners(), this.xo.close());
        }),
        (e.exports = s));
    },
    7657: function (e, t) {
      let n = function (e, t, n, r, o, i, a, s, u) {
          let c = new Date();
          return {
            data: [
              {
                filename: e,
                tags: t,
                fileHash: n,
                owner: i,
                fromMultisig: a,
                dedicatedAccount: s,
                dedicatedPrivateKey: u,
                txHash: r,
                txMultisigHash: o,
                timeStamp: c.toUTCString(),
              },
            ],
          };
        },
        r = function (e, t) {
          return (e.data.push(t.data[0]), e);
        };
      e.exports = { createNotaryData: n, updateNotaryData: r };
    },
    7658: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(4651)),
        i = r(n(3289)),
        a = r(n(2949)),
        s = r(n(3213)),
        u = r(n(4976)),
        c = r(n(3891)),
        l = r(n(3292));
      let d = function (e, t, n) {
          if (!e.length || !t.length || !n)
            throw new Error("A parameter is missing !");
          var r = i.default.ua2hex(o.default.randomBytes(32)),
            a = s.default.create(r);
          let d = c.default.toAddress(a.publicKey.toString(), n),
            p = u.default.encodePrivKey(r, t);
          return l.default.create("wallet")(e, d, !0, "pass:bip32", p, n);
        },
        p = function (e, t, n) {
          if (!e.length || !t.length || !n)
            throw new Error("A parameter is missing !");
          var r = u.default.derivePassSha(t, 6e3).priv,
            o = s.default.create(r);
          let i = c.default.toAddress(o.publicKey.toString(), n);
          return l.default.create("wallet")(e, i, !0, "pass:6k", "", n);
        },
        h = function (e, t, n, r) {
          if (!e.length || !t.length || !r || !n)
            throw new Error("A parameter is missing !");
          if (!a.default.isPrivateKeyValid(n))
            throw new Error("Private key is not valid !");
          let o = s.default.create(n),
            i = c.default.toAddress(o.publicKey.toString(), r),
            d = u.default.encodePrivKey(n, t);
          return l.default.create("wallet")(e, i, !1, "pass:enc", d, r);
        };
      e.exports = { createPRNG: d, createBrain: p, importPrivateKey: h };
    },
    7659: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, o) {
        return {
          address: e || "",
          label: t || "",
          child: n || "",
          encrypted: r || "",
          iv: o || "",
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    7660: function (e, t) {
      let n = function (e, t) {
          return { host: e || "", port: t || "" };
        },
        r = function (e, t, n) {
          return { password: e || "", privateKey: t || "", isHW: n || !1 };
        },
        o = function () {
          return [
            { value: 0, name: "Hexadecimal" },
            { value: 1, name: "Unencrypted" },
            { value: 2, name: "Encrypted" },
          ];
        },
        i = function (e, t) {
          return { modificationType: e || 1, cosignatoryAccount: t };
        };
      e.exports = {
        endpoint: n,
        common: r,
        messageTypes: o,
        multisigCosignatoryModification: i,
      };
    },
    7661: function (e, t) {
      let n = function (e, t, n) {
          return {
            mosaicId: { namespaceId: e || "", name: t || "" },
            quantity: n || 0,
          };
        },
        r = function () {
          return {
            "nem:xem": {
              mosaicDefinition: {
                creator:
                  "3e82e1c1e4a75adaa3cba8c101c3cd31d9817a2eb966eb3b511fb2ed45b8e262",
                description: "reserved xem mosaic",
                id: { namespaceId: "nem", name: "xem" },
                properties: [
                  { name: "divisibility", value: "6" },
                  { name: "initialSupply", value: "8999999999" },
                  { name: "supplyMutable", value: "false" },
                  { name: "transferable", value: "true" },
                ],
                levy: {},
              },
            },
          };
        };
      e.exports = { attachment: n, definitionMetaDataPair: r };
    },
    7662: function (e, t) {
      let n = function (e, t, n) {
          return {
            amount: t || 0,
            recipient: e || "",
            recipientPublicKey: "",
            isMultisig: !1,
            multisigAccount: "",
            message: n || "",
            messageType: 1,
            mosaics: [],
          };
        },
        r = function (e, t) {
          let n = "";
          return (
            "undefined" != typeof e &&
              e.length &&
              (n = e.toUpperCase().replace(/-/g, "")),
            { otherHash: { data: t || "" }, otherAccount: n }
          );
        },
        o = function () {
          return {
            mosaicName: "",
            namespaceParent: "",
            mosaicDescription: "",
            properties: {
              initialSupply: 0,
              divisibility: 0,
              transferable: !0,
              supplyMutable: !0,
            },
            levy: { mosaic: null, address: "", feeType: 1, fee: 5 },
            isMultisig: !1,
            multisigAccount: "",
          };
        },
        i = function () {
          return {
            mosaic: "",
            supplyType: 1,
            delta: 0,
            isMultisig: !1,
            multisigAccount: "",
          };
        },
        a = function () {
          return {
            modifications: [],
            relativeChange: null,
            isMultisig: !1,
            multisigAccount: "",
          };
        },
        s = function (e, t) {
          return {
            namespaceName: e || "",
            namespaceParent: t || null,
            isMultisig: !1,
            multisigAccount: "",
          };
        },
        u = function (e, t) {
          return {
            remoteAccount: e || "",
            mode: t || "",
            isMultisig: !1,
            multisigAccount: "",
          };
        },
        c = function (e, t, n, r, o, i) {
          return {
            type: e || "",
            version: o || "",
            signer: t || "",
            timeStamp: n || "",
            deadline: n + 60 * r || "",
          };
        };
      e.exports = {
        multisigAggregateModification: a,
        transfer: n,
        signature: r,
        mosaicDefinition: o,
        mosaicSupplyChange: i,
        namespaceProvision: s,
        importanceTransfer: u,
        commonPart: c,
      };
    },
    7663: function (e, t, n) {
      let r = function (e, t, n, r) {
          return {
            v: e || "",
            type: 1,
            data: { addr: n || "", name: r || "" },
          };
        },
        o = function (e, t, n, r, o) {
          return {
            v: e || "",
            type: t || "",
            data: { name: n || "", priv_key: r || "", salt: o || "" },
          };
        },
        i = function () {
          return {
            v: "v = 1 for testnet, v = 2 for mainnet",
            type: 2,
            data: { addr: "", amount: 0, msg: "", name: "" },
          };
        };
      e.exports = { accountInfo: r, wallet: o, invoice: i };
    },
    7664: function (e, t, n) {
      "use strict";
      function r(e, t, n, r, o, i) {
        return {
          name: e,
          accounts: {
            0: {
              brain: n,
              algo: r,
              encrypted: o.ciphertext || "",
              iv: o.iv || "",
              address: t.toUpperCase().replace(/-/g, ""),
              label: "Primary",
              network: i,
            },
          },
        };
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = r));
    },
    7665: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3213)),
        c = r(n(3292)),
        l = r(n(3892)),
        d = r(n(6019));
      let p = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing parameter !");
          let r = u.default.create(i.default.fixPrivateKey(e.privateKey)),
            a = t.isMultisig
              ? t.multisigAccount.publicKey
              : r.publicKey.toString(),
            c = t.recipient.toString(),
            p = Math.round(1e6 * t.amount),
            h = d.default.prepare(e, t),
            g = s.default.calculateMessage(h, e.isHW),
            v = n === o.default.data.testnet.id ? 60 : 1440,
            y = null,
            b = null,
            w = m(a, c, p, h, g, v, y, b, n);
          return (
            t.isMultisig &&
              (w = (0, l.default)(r.publicKey.toString(), w, v, n)),
            w
          );
        },
        h = function (e, t, n, r) {
          if (!e || !t || !n || null === t.mosaics || !r)
            throw new Error("Missing parameter !");
          let a = u.default.create(i.default.fixPrivateKey(e.privateKey)),
            c = t.isMultisig
              ? t.multisigAccount.publicKey
              : a.publicKey.toString(),
            p = t.recipient.toString(),
            h = Math.round(1e6 * t.amount),
            g = d.default.prepare(e, t),
            v = s.default.calculateMessage(g, e.isHW),
            y = r === o.default.data.testnet.id ? 60 : 1440,
            b = t.mosaics,
            w = s.default.calculateMosaics(h, n, b),
            _ = m(c, p, h, g, v, y, b, w, r);
          return (
            t.isMultisig &&
              (_ = (0, l.default)(a.publicKey.toString(), _, y, r)),
            _
          );
        },
        m = function (e, t, n, r, u, l, d, p, h) {
          let m = i.default.createNEMTimeStamp(),
            g = d ? o.default.getVersion(2, h) : o.default.getVersion(1, h),
            v = c.default.create("commonTransactionPart")(
              a.default.transfer,
              e,
              m,
              l,
              g,
            ),
            y = d
              ? p
              : s.default.currentFeeFactor *
                s.default.calculateMinimum(n / 1e6),
            b = Math.floor(1e6 * (u + y)),
            w = {
              recipient: t.toUpperCase().replace(/-/g, ""),
              amount: n,
              fee: b,
              message: r,
              mosaics: d,
            },
            _ = i.default.extendObj(v, w);
          return _;
        };
      e.exports = { prepare: p, prepareMosaic: h };
    },
    7666: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3213)),
        c = r(n(3292));
      let l = function (e, t, n) {
        if (!e || !t || !n) throw new Error("Missing parameter !");
        let r = u.default.create(i.default.fixPrivateKey(e.privateKey)),
          l = n === o.default.data.testnet.id ? 60 : 1440,
          d = r.publicKey.toString(),
          p = i.default.createNEMTimeStamp(),
          h = o.default.getVersion(1, n),
          m = c.default.create("commonTransactionPart")(
            a.default.multisigSignature,
            d,
            p,
            l,
            h,
          ),
          g = s.default.signatureTransaction,
          v = { fee: g },
          y = i.default.extendObj(t, m, v);
        return y;
      };
      e.exports = { prepare: l };
    },
    7667: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3213)),
        c = r(n(3292)),
        l = r(n(4654)),
        d = r(n(3892));
      let p = function (e, t, n) {
          let r = u.default.create(i.default.fixPrivateKey(e.privateKey)),
            a = t.isMultisig
              ? t.multisigAccount.publicKey
              : r.publicKey.toString(),
            c = l.default.mosaic[n].toUpperCase().replace(/-/g, ""),
            p = s.default.mosaicDefinitionTransaction,
            m = t.namespaceParent.fqn,
            g = t.mosaicName.toString(),
            v = t.mosaicDescription.toString(),
            y = t.properties,
            b = t.levy.mosaic ? t.levy : null,
            w = n === o.default.data.testnet.id ? 60 : 1440,
            _ = h(a, c, p, m, g, v, y, b, w, n);
          return (
            t.isMultisig &&
              (_ = (0, d.default)(r.publicKey.toString(), _, w, n)),
            _
          );
        },
        h = function (e, t, n, r, u, l, d, p, h, m) {
          let g = i.default.createNEMTimeStamp(),
            v = o.default.getVersion(1, m),
            y = c.default.create("commonTransactionPart")(
              a.default.mosaicDefinition,
              e,
              g,
              h,
              v,
            ),
            b = s.default.namespaceAndMosaicCommon,
            w = p
              ? {
                  type: p.feeType,
                  recipient: p.address.toUpperCase().replace(/-/g, ""),
                  mosaicId: p.mosaic,
                  fee: p.fee,
                }
              : null,
            _ = {
              creationFeeSink: t.replace(/-/g, ""),
              creationFee: n,
              mosaicDefinition: {
                creator: e,
                id: { namespaceId: r, name: u },
                description: l,
                properties: Object.keys(d).map((e, t) => ({
                  name: e,
                  value: d[e].toString(),
                })),
                levy: w,
              },
              fee: b,
            };
          var x = i.default.extendObj(y, _);
          return x;
        };
      e.exports = { prepare: p };
    },
    7668: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3213)),
        c = r(n(3292)),
        l = r(n(3892));
      let d = function (e, t, n) {
          let r = u.default.create(i.default.fixPrivateKey(e.privateKey)),
            a = t.isMultisig
              ? t.multisigAccount.publicKey
              : r.publicKey.toString(),
            s = n === o.default.data.testnet.id ? 60 : 1440,
            c = p(a, t.mosaic, t.supplyType, t.delta, s, n);
          return (
            t.isMultisig &&
              (c = (0, l.default)(r.publicKey.toString(), c, s, n)),
            c
          );
        },
        p = function (e, t, n, r, u, l) {
          let d = i.default.createNEMTimeStamp(),
            p = o.default.getVersion(1, l),
            h = c.default.create("commonTransactionPart")(
              a.default.mosaicSupply,
              e,
              d,
              u,
              p,
            ),
            m = s.default.namespaceAndMosaicCommon,
            g = { mosaicId: t, supplyType: n, delta: r, fee: m },
            v = i.default.extendObj(h, g);
          return v;
        };
      e.exports = { prepare: d };
    },
    7669: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3213)),
        u = r(n(3416)),
        c = r(n(3292)),
        l = r(n(3891)),
        d = r(n(3892));
      let p = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing parameter !");
          let r = s.default.create(i.default.fixPrivateKey(e.privateKey)),
            a = t.isMultisig
              ? t.multisigAccount.publicKey
              : r.publicKey.toString(),
            u = n === o.default.data.testnet.id ? 60 : 1440,
            c = h(a, t.modifications, t.relativeChange, t.isMultisig, u, n);
          return (
            t.isMultisig &&
              (c = (0, d.default)(r.publicKey.toString(), c, u, n)),
            c
          );
        },
        h = function (e, t, n, r, s, d) {
          let p = i.default.createNEMTimeStamp(),
            h = null === n || 0 === n,
            m = h ? o.default.getVersion(1, d) : o.default.getVersion(2, d),
            g = c.default.create("commonTransactionPart")(
              a.default.multisigModification,
              e,
              p,
              s,
              m,
            ),
            v = u.default.multisigAggregateModificationTransaction,
            y = {
              fee: v,
              modifications: t,
              minCosignatories: { relativeChange: 0 },
            };
          r
            ? (h
                ? delete y.minCosignatories
                : (y.minCosignatories.relativeChange = n),
              y.modifications.length > 1 &&
                y.modifications.sort(
                  (e, t) =>
                    e.modificationType - t.modificationType ||
                    l.default
                      .toAddress(e.cosignatoryAccount, d)
                      .localeCompare(
                        l.default.toAddress(t.cosignatoryAccount, d),
                      ),
                ))
            : ((y.minCosignatories.relativeChange = n),
              y.modifications.length > 1 &&
                y.modifications.sort((e, t) =>
                  l.default.toAddress(e.cosignatoryAccount, d) <
                  l.default.toAddress(t.cosignatoryAccount, d)
                    ? -1
                    : l.default.toAddress(e.cosignatoryAccount, d) >
                        l.default.toAddress(t.cosignatoryAccount, d)
                      ? 1
                      : 0,
                ));
          let b = i.default.extendObj(g, y);
          return b;
        };
      e.exports = { prepare: p };
    },
    7670: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3213)),
        c = r(n(3292)),
        l = r(n(4654)),
        d = r(n(3892));
      let p = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing parameter !");
          let r,
            a = u.default.create(i.default.fixPrivateKey(e.privateKey)),
            c = t.isMultisig
              ? t.multisigAccount.publicKey
              : a.publicKey.toString(),
            p = l.default.namespace[n].toUpperCase().replace(/-/g, "");
          r = t.namespaceParent
            ? s.default.subProvisionNamespaceTransaction
            : s.default.rootProvisionNamespaceTransaction;
          let m = t.namespaceParent ? t.namespaceParent.fqn : null,
            g = t.namespaceName.toString(),
            v = n === o.default.data.testnet.id ? 60 : 1440,
            y = h(c, p, r, m, g, v, n);
          return (
            t.isMultisig &&
              (y = (0, d.default)(a.publicKey.toString(), y, v, n)),
            y
          );
        },
        h = function (e, t, n, r, u, l, d) {
          let p = i.default.createNEMTimeStamp(),
            h = o.default.getVersion(1, d),
            m = c.default.create("commonTransactionPart")(
              a.default.provisionNamespace,
              e,
              p,
              l,
              h,
            ),
            g = s.default.namespaceAndMosaicCommon,
            v = {
              rentalFeeSink: t.toUpperCase().replace(/-/g, ""),
              rentalFee: n,
              parent: r,
              newPart: u,
              fee: g,
            },
            y = i.default.extendObj(m, v);
          return y;
        };
      e.exports = { prepare: p };
    },
    7671: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3290)),
        i = r(n(2949)),
        a = r(n(3291)),
        s = r(n(3416)),
        u = r(n(3213)),
        c = r(n(3292)),
        l = r(n(3892));
      let d = function (e, t, n) {
          if (!e || !t || !n) throw new Error("Missing parameter !");
          let r = u.default.create(i.default.fixPrivateKey(e.privateKey)),
            a = t.isMultisig
              ? t.multisigAccount.publicKey
              : r.publicKey.toString(),
            s = n === o.default.data.testnet.id ? 60 : 1440,
            c = p(a, t.remoteAccount, t.mode, s, n);
          return (
            t.isMultisig &&
              (c = (0, l.default)(r.publicKey.toString(), c, s, n)),
            c
          );
        },
        p = function (e, t, n, r, u) {
          let l = i.default.createNEMTimeStamp(),
            d = o.default.getVersion(1, u),
            p = c.default.create("commonTransactionPart")(
              a.default.importanceTransfer,
              e,
              l,
              r,
              d,
            ),
            h = s.default.importanceTransferTransaction,
            m = { remoteAccount: t, mode: n, fee: h },
            g = i.default.extendObj(p, m);
          return g;
        };
      e.exports = { prepare: d };
    },
    7672: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(n(2949)),
        i = r(n(3289)),
        a = r(n(6017)),
        s = r(n(3213)),
        u = r(n(6020));
      let c = function (e, t, n) {
        if (!n || !t || !e) throw new Error("Missing parameter !");
        if (64 !== e.privateKey.length && 66 !== e.privateKey.length)
          throw new Error(
            "Invalid private key, length must be 64 or 66 characters !",
          );
        if (!o.default.isHexadecimal(e.privateKey))
          throw new Error("Private key must be hexadecimal only !");
        let r = s.default.create(o.default.fixPrivateKey(e.privateKey)),
          c = a.default.serializeTransaction(t),
          l = r.sign(c),
          d = { data: i.default.ua2hex(c), signature: l.toString() };
        return u.default.transaction.announce(n, JSON.stringify(d));
      };
      t.default = c;
    },
    7673: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(2949)),
        i = r(n(3893)),
        a = r(n(3417));
      let s = function (e, t) {
          var n = {
            url: o.default.formatEndpoint(e) + "/account/get",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t },
          };
          return (0, a.default)(n);
        },
        u = function (e, t) {
          const n = {
            url: o.default.formatEndpoint(e) + "/account/get/from-public-key",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { publicKey: t },
          };
          return (0, a.default)(n);
        },
        c = function (e, t) {
          var n = {
            url: o.default.formatEndpoint(e) + "/account/harvests",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t },
          };
          return (0, a.default)(n);
        },
        l = function (e, t, n, r) {
          let s = { address: t };
          (n && (s["hash"] = n), r && (s["id"] = r));
          var u = {
            url: o.default.formatEndpoint(e) + "/account/transfers/incoming",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: s,
          };
          return (0, a.default)(u);
        },
        d = function (e, t, n, r) {
          let s = { address: t };
          (n && (s["hash"] = n), r && (s["id"] = r));
          var u = {
            url: o.default.formatEndpoint(e) + "/account/transfers/outgoing",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: s,
          };
          return (0, a.default)(u);
        },
        p = function (e, t) {
          var n = {
            url:
              o.default.formatEndpoint(e) + "/account/unconfirmedTransactions",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t },
          };
          return (0, a.default)(n);
        },
        h = function (e) {
          var t = {
            url: o.default.formatEndpoint(e) + "/account/unlocked/info",
            method: "POST",
            headers: i.default.urlEncoded,
          };
          return (0, a.default)(t);
        },
        m = function (e, t) {
          var n = {
            url: o.default.formatEndpoint(e) + "/account/unlock",
            method: "POST",
            json: !0,
            body: { value: t },
          };
          return (0, a.default)(n);
        },
        g = function (e, t) {
          var n = {
            url: o.default.formatEndpoint(e) + "/account/lock",
            method: "POST",
            json: !0,
            body: { value: t },
          };
          return (0, a.default)(n);
        },
        v = function (e, t) {
          var n = {
            url: o.default.formatEndpoint(e) + "/account/get/forwarded",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t },
          };
          return (0, a.default)(n);
        },
        y = function (e, t, n) {
          var r = {
            url: o.default.formatEndpoint(e) + "/account/namespace/page",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t, parent: n || "" },
          };
          return (0, a.default)(r);
        },
        b = function (e, t, n) {
          var r = {
            url:
              o.default.formatEndpoint(e) + "/account/mosaic/definition/page",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t, parent: n || "" },
          };
          return (0, a.default)(r);
        },
        w = function (e, t) {
          var n = {
            url:
              o.default.formatEndpoint(e) + "/account/mosaic/owned/definition",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t },
          };
          return (0, a.default)(n);
        },
        _ = function (e, t) {
          var n = {
            url: o.default.formatEndpoint(e) + "/account/mosaic/owned",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { address: t },
          };
          return (0, a.default)(n);
        },
        x = function (e, t, n, r) {
          let s = { address: t };
          (n && (s["hash"] = n), r && (s["id"] = r));
          var u = {
            url: o.default.formatEndpoint(e) + "/account/transfers/all",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: s,
          };
          return (0, a.default)(u);
        },
        S = function (e, t) {
          let n = { data: [] };
          for (var r = 0; r < t.length; r++) n.data.push({ account: t[r] });
          var i = {
            url: o.default.formatEndpoint(e) + "/account/get/batch",
            method: "POST",
            json: !0,
            body: n,
          };
          return (0, a.default)(i);
        },
        E = function (e, t, n) {
          let r = {
            accounts: [],
            startHeight: n,
            endHeight: n,
            incrementBy: 1,
          };
          for (var i = 0; i < t.length; i++) r.accounts.push({ account: t[i] });
          var s = {
            url: o.default.formatEndpoint(e) + "/account/historical/get/batch",
            method: "POST",
            json: !0,
            body: r,
          };
          return (0, a.default)(s);
        },
        T = function (e, t, n) {
          let r = {
            params: { address: t, startHeight: n, endHeight: n, increment: 1 },
          };
          var s = {
            url: o.default.formatEndpoint(e) + "/account/historical/get",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: r,
          };
          return (0, a.default)(s);
        };
      e.exports = {
        data: s,
        dataFromPublicKey: u,
        batchData: S,
        historical: { data: T, batchData: E },
        unlockInfo: h,
        forwarded: v,
        mosaics: { owned: _, definitions: b, allDefinitions: w },
        namespaces: { owned: y },
        harvesting: { blocks: c, start: m, stop: g },
        transactions: { incoming: l, outgoing: d, unconfirmed: p, all: x },
      };
    },
    7794: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(3893)),
        a = r(n(4653));
      let s = function (e, t, n) {
        var r = {
          url: a.default.apostilleAuditServer,
          method: "POST",
          headers: i.default.urlEncoded,
          qs: { publicKey: e, data: t, signedData: n },
        };
        return (0, o.default)(r);
      };
      e.exports = { audit: s };
    },
    7795: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(2949));
      let a = function (e) {
          var t = {
            url: i.default.formatEndpoint(e) + "/chain/height",
            method: "GET",
          };
          return (0, o.default)(t);
        },
        s = function (e) {
          var t = {
            url: i.default.formatEndpoint(e) + "/chain/last-block",
            method: "GET",
          };
          return (0, o.default)(t);
        },
        u = function (e) {
          var t = {
            url: i.default.formatEndpoint(e) + "/time-sync/network-time",
            method: "GET",
          };
          return (0, o.default)(t);
        },
        c = function (e, t) {
          var n = {
            url: i.default.formatEndpoint(e) + "/block/at/public",
            method: "POST",
            json: !0,
            body: { height: t },
          };
          return (0, o.default)(n);
        };
      e.exports = { height: a, lastBlock: s, time: u, blockByHeight: c };
    },
    7796: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(2949));
      let a = function (e) {
        var t = {
          url: i.default.formatEndpoint(e) + "/heartbeat",
          method: "GET",
        };
        return (0, o.default)(t);
      };
      e.exports = { heartbeat: a };
    },
    7797: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(3893)),
        a = r(n(4653));
      let s = function () {
          var e = {
            url: a.default.marketInfo,
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { command: "returnTicker" },
          };
          return (0, o.default)(e);
        },
        u = function () {
          var e = {
            url: a.default.btcPrice,
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { cors: !0 },
          };
          return (0, o.default)(e);
        };
      e.exports = { xem: s, btc: u };
    },
    7798: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(3893)),
        a = r(n(2949));
      let s = function (e, t) {
        var n = {
          url: a.default.formatEndpoint(e) + "/mosaic/supply",
          method: "GET",
          headers: i.default.urlEncoded,
          qs: { mosaicId: t },
        };
        return (0, o.default)(n);
      };
      e.exports = { supply: s };
    },
    7799: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(3893)),
        a = r(n(2949));
      let s = function (e, t) {
          var n = {
            url: a.default.formatEndpoint(e) + "/namespace/root/page",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: void 0 === t ? { pageSize: 100 } : { id: t, pageSize: 100 },
          };
          return (0, o.default)(n);
        },
        u = function (e, t) {
          var n = {
            url:
              a.default.formatEndpoint(e) + "/namespace/mosaic/definition/page",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { namespace: t },
          };
          return (0, o.default)(n);
        },
        c = function (e, t) {
          var n = {
            url: a.default.formatEndpoint(e) + "/namespace",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { namespace: t },
          };
          return (0, o.default)(n);
        };
      e.exports = { roots: s, mosaicDefinitions: u, info: c };
    },
    7800: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(4653));
      let a = function () {
          var e = { url: i.default.supernodes, method: "GET" };
          return (0, o.default)(e);
        },
        s = function (e) {
          let t = { latitude: e.latitude, longitude: e.longitude, numNodes: 5 };
          var n = {
            url: "http://199.217.113.179:7782/nodes/nearest",
            method: "POST",
            json: !0,
            body: t,
          };
          return (0, o.default)(n);
        },
        u = function (e) {
          let t = { status: void 0 === e ? 1 : e };
          var n = {
            url: "http://199.217.113.179:7782/nodes",
            method: "POST",
            json: !0,
            body: t,
          };
          return (0, o.default)(n);
        };
      e.exports = { all: a, nearest: s, get: u };
    },
    7801: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(3417)),
        i = r(n(3893)),
        a = r(n(2949));
      let s = function (e, t) {
          var n = {
            url: a.default.formatEndpoint(e) + "/transaction/announce",
            method: "POST",
            headers: i.default.json(t),
            json: JSON.parse(t),
          };
          return (0, o.default)(n);
        },
        u = function (e, t) {
          var n = {
            url: a.default.formatEndpoint(e) + "/transaction/get",
            method: "GET",
            headers: i.default.urlEncoded,
            qs: { hash: t },
          };
          return (0, o.default)(n);
        };
      e.exports = { announce: s, byHash: u };
    },
    7802: function (e, t, n) {
      "use strict";
      var r = n(9);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = r(n(7803)),
        i = r(n(7832)),
        a = r(n(7833)),
        s = r(n(7834));
      t.default = {
        connector: o.default,
        requests: { account: i.default.requests, chain: a.default.requests },
        subscribe: {
          account: i.default.subscribe,
          chain: a.default.subscribe,
          errors: s.default.subscribe,
        },
      };
    },
    7803: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = n(4661),
        i = r(n(4662)),
        a = n(7831);
      let s = function (e, t) {
          return {
            endpoint: e,
            address: t.replace(/-/g, "").toUpperCase(),
            socket: void 0,
            stompClient: void 0,
            connect: u,
            close: c,
          };
        },
        u = function () {
          return new Promise((e, t) => {
            var n = this;
            (o.SockJS
              ? (n.socket = new o.SockJS(
                  n.endpoint.host + ":" + n.endpoint.port + "/w/messages",
                ))
              : (n.socket = new i.default(
                  n.endpoint.host + ":" + n.endpoint.port + "/w/messages",
                )),
              (n.stompClient = a.Stomp.over(n.socket)),
              (n.stompClient.debug = !1),
              n.stompClient.connect(
                {},
                function (t) {
                  e(!0);
                },
                (e) => {
                  t("Connection failed!");
                },
              ));
          });
        },
        c = function () {
          var e = this;
          (console.log(
            "Connection to " + e.endpoint.host + " must be closed now.",
          ),
            e.socket.close(),
            (e.socket.onclose = function (e) {
              console.log(e);
            }));
        };
      e.exports = { create: s };
    },
    7804: function (e, t, n) {
      "use strict";
      e.exports = [
        n(7805),
        n(7810),
        n(6053),
        n(6054),
        n(4990)(n(6054)),
        n(6058),
        n(4990)(n(6058)),
        n(6059),
        n(7815),
        n(4990)(n(6059)),
        n(7816),
      ];
    },
    7805: function (e, t, n) {
      "use strict";
      var r = n(3552),
        o = n(3214),
        i = n(16),
        a = n(3092).EventEmitter,
        s = n(7809),
        u = function () {};
      function c(e, t, n) {
        if (!c.enabled()) throw new Error("Transport created when disabled");
        (a.call(this), u("constructor", e));
        var i = this,
          l = o.addPath(e, "/websocket");
        ((l =
          "https" === l.slice(0, 5) ? "wss" + l.slice(5) : "ws" + l.slice(4)),
          (this.url = l),
          (this.ws = new s(this.url, [], n)),
          (this.ws.onmessage = function (e) {
            (u("message event", e.data), i.emit("message", e.data));
          }),
          (this.unloadRef = r.unloadAdd(function () {
            (u("unload"), i.ws.close());
          })),
          (this.ws.onclose = function (e) {
            (u("close event", e.code, e.reason),
              i.emit("close", e.code, e.reason),
              i._cleanup());
          }),
          (this.ws.onerror = function (e) {
            (u("error event", e),
              i.emit("close", 1006, "WebSocket connection broken"),
              i._cleanup());
          }));
      }
      (i(c, a),
        (c.prototype.send = function (e) {
          var t = "[" + e + "]";
          (u("send", t), this.ws.send(t));
        }),
        (c.prototype.close = function () {
          u("close");
          var e = this.ws;
          (this._cleanup(), e && e.close());
        }),
        (c.prototype._cleanup = function () {
          u("_cleanup");
          var e = this.ws;
          (e && (e.onmessage = e.onclose = e.onerror = null),
            r.unloadDel(this.unloadRef),
            (this.unloadRef = this.ws = null),
            this.removeAllListeners());
        }),
        (c.enabled = function () {
          return (u("enabled"), !!s);
        }),
        (c.transportName = "websocket"),
        (c.roundTrips = 2),
        (e.exports = c));
    },
    7806: function (e, t, n) {
      "use strict";
      (function (t) {
        t.crypto && t.crypto.getRandomValues
          ? (e.exports.randomBytes = function (e) {
              var n = new Uint8Array(e);
              return (t.crypto.getRandomValues(n), n);
            })
          : (e.exports.randomBytes = function (e) {
              for (var t = new Array(e), n = 0; n < e; n++)
                t[n] = Math.floor(256 * Math.random());
              return t;
            });
      }).call(this, n(13));
    },
    7809: function (e, t, n) {
      "use strict";
      (function (t) {
        var n = t.WebSocket || t.MozWebSocket;
        e.exports = n
          ? function (e) {
              return new n(e);
            }
          : void 0;
      }).call(this, n(13));
    },
    7810: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(16),
          o = n(3896),
          i = n(4663),
          a = n(4664),
          s = n(4287),
          u = n(4288);
        function c(e) {
          if (!s.enabled && !a.enabled)
            throw new Error("Transport created when disabled");
          o.call(this, e, "/xhr_streaming", i, a);
        }
        (r(c, o),
          (c.enabled = function (e) {
            return !e.nullOrigin && !u.isOpera() && a.enabled;
          }),
          (c.transportName = "xhr-streaming"),
          (c.roundTrips = 2),
          (c.needBody = !!t.document),
          (e.exports = c));
      }).call(this, n(13));
    },
    7811: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3092).EventEmitter,
        i = function () {};
      function a(e, t) {
        (i(e),
          o.call(this),
          (this.sendBuffer = []),
          (this.sender = t),
          (this.url = e));
      }
      (r(a, o),
        (a.prototype.send = function (e) {
          (i("send", e),
            this.sendBuffer.push(e),
            this.sendStop || this.sendSchedule());
        }),
        (a.prototype.sendScheduleWait = function () {
          i("sendScheduleWait");
          var e,
            t = this;
          ((this.sendStop = function () {
            (i("sendStop"), (t.sendStop = null), clearTimeout(e));
          }),
            (e = setTimeout(function () {
              (i("timeout"), (t.sendStop = null), t.sendSchedule());
            }, 25)));
        }),
        (a.prototype.sendSchedule = function () {
          i("sendSchedule", this.sendBuffer.length);
          var e = this;
          if (this.sendBuffer.length > 0) {
            var t = "[" + this.sendBuffer.join(",") + "]";
            ((this.sendStop = this.sender(this.url, t, function (t) {
              ((e.sendStop = null),
                t
                  ? (i("error", t),
                    e.emit("close", t.code || 1006, "Sending error: " + t),
                    e.close())
                  : e.sendScheduleWait());
            })),
              (this.sendBuffer = []));
          }
        }),
        (a.prototype._cleanup = function () {
          (i("_cleanup"), this.removeAllListeners());
        }),
        (a.prototype.close = function () {
          (i("close"),
            this._cleanup(),
            this.sendStop && (this.sendStop(), (this.sendStop = null)));
        }),
        (e.exports = a));
    },
    7812: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3092).EventEmitter,
        i = function () {};
      function a(e, t, n) {
        (i(t),
          o.call(this),
          (this.Receiver = e),
          (this.receiveUrl = t),
          (this.AjaxObject = n),
          this._scheduleReceiver());
      }
      (r(a, o),
        (a.prototype._scheduleReceiver = function () {
          i("_scheduleReceiver");
          var e = this,
            t = (this.poll = new this.Receiver(
              this.receiveUrl,
              this.AjaxObject,
            ));
          (t.on("message", function (t) {
            (i("message", t), e.emit("message", t));
          }),
            t.once("close", function (n, r) {
              (i("close", n, r, e.pollIsClosing),
                (e.poll = t = null),
                e.pollIsClosing ||
                  ("network" === r
                    ? e._scheduleReceiver()
                    : (e.emit("close", n || 1006, r), e.removeAllListeners())));
            }));
        }),
        (a.prototype.abort = function () {
          (i("abort"),
            this.removeAllListeners(),
            (this.pollIsClosing = !0),
            this.poll && this.poll.abort());
        }),
        (e.exports = a));
    },
    7813: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3092).EventEmitter,
        i = n(6055),
        a = function () {};
      function s(e) {
        (a(e), o.call(this));
        var t = this,
          n = (this.es = new i(e));
        ((n.onmessage = function (e) {
          (a("message", e.data), t.emit("message", decodeURI(e.data)));
        }),
          (n.onerror = function (e) {
            a("error", n.readyState, e);
            var r = 2 !== n.readyState ? "network" : "permanent";
            (t._cleanup(), t._close(r));
          }));
      }
      (r(s, o),
        (s.prototype.abort = function () {
          (a("abort"), this._cleanup(), this._close("user"));
        }),
        (s.prototype._cleanup = function () {
          a("cleanup");
          var e = this.es;
          e && ((e.onmessage = e.onerror = null), e.close(), (this.es = null));
        }),
        (s.prototype._close = function (e) {
          a("close", e);
          var t = this;
          setTimeout(function () {
            (t.emit("close", null, e), t.removeAllListeners());
          }, 200);
        }),
        (e.exports = s));
    },
    7814: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(16),
          o = n(4289),
          i = n(3214),
          a = n(3092).EventEmitter,
          s = n(3895),
          u = function () {};
        function c(e) {
          (u(e), a.call(this));
          var n = this;
          (o.polluteGlobalNamespace(),
            (this.id = "a" + s.string(6)),
            (e = i.addQuery(
              e,
              "c=" + decodeURIComponent(o.WPrefix + "." + this.id),
            )),
            u("using htmlfile", c.htmlfileEnabled));
          var r = c.htmlfileEnabled ? o.createHtmlfile : o.createIframe;
          ((t[o.WPrefix][this.id] = {
            start: function () {
              (u("start"), n.iframeObj.loaded());
            },
            message: function (e) {
              (u("message", e), n.emit("message", e));
            },
            stop: function () {
              (u("stop"), n._cleanup(), n._close("network"));
            },
          }),
            (this.iframeObj = r(e, function () {
              (u("callback"), n._cleanup(), n._close("permanent"));
            })));
        }
        (r(c, a),
          (c.prototype.abort = function () {
            (u("abort"), this._cleanup(), this._close("user"));
          }),
          (c.prototype._cleanup = function () {
            (u("_cleanup"),
              this.iframeObj &&
                (this.iframeObj.cleanup(), (this.iframeObj = null)),
              delete t[o.WPrefix][this.id]);
          }),
          (c.prototype._close = function (e) {
            (u("_close", e),
              this.emit("close", null, e),
              this.removeAllListeners());
          }),
          (c.htmlfileEnabled = !1));
        var l = ["Active"].concat("Object").join("X");
        if (l in t)
          try {
            c.htmlfileEnabled = !!new t[l]("htmlfile");
          } catch (d) {}
        ((c.enabled = c.htmlfileEnabled || o.iframeEnabled), (e.exports = c));
      }).call(this, n(13));
    },
    7815: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(3896),
        i = n(6053),
        a = n(4663),
        s = n(4989);
      function u(e) {
        if (!s.enabled) throw new Error("Transport created when disabled");
        o.call(this, e, "/xhr", a, s);
      }
      (r(u, o),
        (u.enabled = i.enabled),
        (u.transportName = "xdr-polling"),
        (u.roundTrips = 2),
        (e.exports = u));
    },
    7816: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(16),
          o = n(6051),
          i = n(7817),
          a = n(7818);
        function s(e) {
          if (!s.enabled()) throw new Error("Transport created when disabled");
          o.call(this, e, "/jsonp", a, i);
        }
        (r(s, o),
          (s.enabled = function () {
            return !!t.document;
          }),
          (s.transportName = "jsonp-polling"),
          (s.roundTrips = 1),
          (s.needBody = !0),
          (e.exports = s));
      }).call(this, n(13));
    },
    7817: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(4289),
          o = n(3895),
          i = n(4288),
          a = n(3214),
          s = n(16),
          u = n(3092).EventEmitter,
          c = function () {};
        function l(e) {
          c(e);
          var n = this;
          (u.call(this),
            r.polluteGlobalNamespace(),
            (this.id = "a" + o.string(6)));
          var i = a.addQuery(
            e,
            "c=" + encodeURIComponent(r.WPrefix + "." + this.id),
          );
          ((t[r.WPrefix][this.id] = this._callback.bind(this)),
            this._createScript(i),
            (this.timeoutId = setTimeout(function () {
              (c("timeout"),
                n._abort(
                  new Error("JSONP script loaded abnormally (timeout)"),
                ));
            }, l.timeout)));
        }
        (s(l, u),
          (l.prototype.abort = function () {
            if ((c("abort"), t[r.WPrefix][this.id])) {
              var e = new Error("JSONP user aborted read");
              ((e.code = 1e3), this._abort(e));
            }
          }),
          (l.timeout = 35e3),
          (l.scriptErrorTimeout = 1e3),
          (l.prototype._callback = function (e) {
            (c("_callback", e),
              this._cleanup(),
              this.aborting ||
                (e && (c("message", e), this.emit("message", e)),
                this.emit("close", null, "network"),
                this.removeAllListeners()));
          }),
          (l.prototype._abort = function (e) {
            (c("_abort", e),
              this._cleanup(),
              (this.aborting = !0),
              this.emit("close", e.code, e.message),
              this.removeAllListeners());
          }),
          (l.prototype._cleanup = function () {
            if (
              (c("_cleanup"),
              clearTimeout(this.timeoutId),
              this.script2 &&
                (this.script2.parentNode.removeChild(this.script2),
                (this.script2 = null)),
              this.script)
            ) {
              var e = this.script;
              (e.parentNode.removeChild(e),
                (e.onreadystatechange =
                  e.onerror =
                  e.onload =
                  e.onclick =
                    null),
                (this.script = null));
            }
            delete t[r.WPrefix][this.id];
          }),
          (l.prototype._scriptError = function () {
            c("_scriptError");
            var e = this;
            this.errorTimer ||
              (this.errorTimer = setTimeout(function () {
                e.loadedOkay ||
                  e._abort(
                    new Error("JSONP script loaded abnormally (onerror)"),
                  );
              }, l.scriptErrorTimeout));
          }),
          (l.prototype._createScript = function (e) {
            c("_createScript", e);
            var n,
              r = this,
              a = (this.script = t.document.createElement("script"));
            if (
              ((a.id = "a" + o.string(8)),
              (a.src = e),
              (a.type = "text/javascript"),
              (a.charset = "UTF-8"),
              (a.onerror = this._scriptError.bind(this)),
              (a.onload = function () {
                (c("onload"),
                  r._abort(
                    new Error("JSONP script loaded abnormally (onload)"),
                  ));
              }),
              (a.onreadystatechange = function () {
                if (
                  (c("onreadystatechange", a.readyState),
                  /loaded|closed/.test(a.readyState))
                ) {
                  if (a && a.htmlFor && a.onclick) {
                    r.loadedOkay = !0;
                    try {
                      a.onclick();
                    } catch (e) {}
                  }
                  a &&
                    r._abort(
                      new Error(
                        "JSONP script loaded abnormally (onreadystatechange)",
                      ),
                    );
                }
              }),
              "undefined" === typeof a.async && t.document.attachEvent)
            )
              if (i.isOpera())
                ((n = this.script2 = t.document.createElement("script")),
                  (n.text =
                    "try{var a = document.getElementById('" +
                    a.id +
                    "'); if(a)a.onerror();}catch(x){};"),
                  (a.async = n.async = !1));
              else {
                try {
                  ((a.htmlFor = a.id), (a.event = "onclick"));
                } catch (u) {}
                a.async = !0;
              }
            "undefined" !== typeof a.async && (a.async = !0);
            var s = t.document.getElementsByTagName("head")[0];
            (s.insertBefore(a, s.firstChild),
              n && s.insertBefore(n, s.firstChild));
          }),
          (e.exports = l));
      }).call(this, n(13));
    },
    7818: function (e, t, n) {
      "use strict";
      (function (t) {
        var r,
          o,
          i = n(3895),
          a = n(3214),
          s = function () {};
        function u(e) {
          s("createIframe", e);
          try {
            return t.document.createElement('<iframe name="' + e + '">');
          } catch (r) {
            var n = t.document.createElement("iframe");
            return ((n.name = e), n);
          }
        }
        function c() {
          (s("createForm"),
            (r = t.document.createElement("form")),
            (r.style.display = "none"),
            (r.style.position = "absolute"),
            (r.method = "POST"),
            (r.enctype = "application/x-www-form-urlencoded"),
            (r.acceptCharset = "UTF-8"),
            (o = t.document.createElement("textarea")),
            (o.name = "d"),
            r.appendChild(o),
            t.document.body.appendChild(r));
        }
        e.exports = function (e, t, n) {
          (s(e, t), r || c());
          var l = "a" + i.string(8);
          ((r.target = l),
            (r.action = a.addQuery(a.addPath(e, "/jsonp_send"), "i=" + l)));
          var d = u(l);
          ((d.id = l), (d.style.display = "none"), r.appendChild(d));
          try {
            o.value = t;
          } catch (h) {}
          r.submit();
          var p = function (e) {
            (s("completed", l, e),
              d.onerror &&
                ((d.onreadystatechange = d.onerror = d.onload = null),
                setTimeout(function () {
                  (s("cleaning up", l),
                    d.parentNode.removeChild(d),
                    (d = null));
                }, 500),
                (o.value = ""),
                n(e)));
          };
          return (
            (d.onerror = function () {
              (s("onerror", l), p());
            }),
            (d.onload = function () {
              (s("onload", l), p());
            }),
            (d.onreadystatechange = function (e) {
              (s("onreadystatechange", l, d.readyState, e),
                "complete" === d.readyState && p());
            }),
            function () {
              (s("aborted", l), p(new Error("Aborted")));
            }
          );
        };
      }).call(this, n(13));
    },
    7819: function (e, t, n) {
      "use strict";
      (function (t) {
        n(7820);
        var r,
          o = n(6049),
          i = n(16),
          a = n(3895),
          s = n(7821),
          u = n(3214),
          c = n(3552),
          l = n(7822),
          d = n(4991),
          p = n(4288),
          h = n(7823),
          m = n(4992),
          g = n(6050),
          v = n(6060),
          y = n(7824),
          b = n(7825),
          w = n(7826),
          _ = function () {};
        function x(e, t, n) {
          if (!(this instanceof x)) return new x(e, t, n);
          if (arguments.length < 1)
            throw new TypeError(
              "Failed to construct 'SockJS: 1 argument required, but only 0 present",
            );
          (g.call(this),
            (this.readyState = x.CONNECTING),
            (this.extensions = ""),
            (this.protocol = ""),
            (n = n || {}),
            n.protocols_whitelist &&
              h.warn(
                "'protocols_whitelist' is DEPRECATED. Use 'transports' instead.",
              ),
            (this._transportsWhitelist = n.transports),
            (this._transportOptions = n.transportOptions || {}),
            (this._timeout = n.timeout || 0));
          var r = n.sessionId || 8;
          if ("function" === typeof r) this._generateSessionId = r;
          else {
            if ("number" !== typeof r)
              throw new TypeError(
                "If sessionId is used in the options, it needs to be a number or a function.",
              );
            this._generateSessionId = function () {
              return a.string(r);
            };
          }
          this._server = n.server || a.numberString(1e3);
          var i = new o(e);
          if (!i.host || !i.protocol)
            throw new SyntaxError("The URL '" + e + "' is invalid");
          if (i.hash)
            throw new SyntaxError("The URL must not contain a fragment");
          if ("http:" !== i.protocol && "https:" !== i.protocol)
            throw new SyntaxError(
              "The URL's scheme must be either 'http:' or 'https:'. '" +
                i.protocol +
                "' is not allowed.",
            );
          var s = "https:" === i.protocol;
          if ("https:" === v.protocol && !s && !u.isLoopbackAddr(i.hostname))
            throw new Error(
              "SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS",
            );
          t ? Array.isArray(t) || (t = [t]) : (t = []);
          var c = t.sort();
          c.forEach(function (e, t) {
            if (!e)
              throw new SyntaxError(
                "The protocols entry '" + e + "' is invalid.",
              );
            if (t < c.length - 1 && e === c[t + 1])
              throw new SyntaxError(
                "The protocols entry '" + e + "' is duplicated.",
              );
          });
          var l = u.getOrigin(v.href);
          ((this._origin = l ? l.toLowerCase() : null),
            i.set("pathname", i.pathname.replace(/\/+$/, "")),
            (this.url = i.href),
            _("using url", this.url),
            (this._urlInfo = {
              nullOrigin: !p.hasDomain(),
              sameOrigin: u.isOriginEqual(this.url, v.href),
              sameScheme: u.isSchemeEqual(this.url, v.href),
            }),
            (this._ir = new w(this.url, this._urlInfo)),
            this._ir.once("finish", this._receiveInfo.bind(this)));
        }
        function S(e) {
          return 1e3 === e || (e >= 3e3 && e <= 4999);
        }
        (i(x, g),
          (x.prototype.close = function (e, t) {
            if (e && !S(e)) throw new Error("InvalidAccessError: Invalid code");
            if (t && t.length > 123)
              throw new SyntaxError("reason argument has an invalid length");
            if (this.readyState !== x.CLOSING && this.readyState !== x.CLOSED) {
              var n = !0;
              this._close(e || 1e3, t || "Normal closure", n);
            }
          }),
          (x.prototype.send = function (e) {
            if (
              ("string" !== typeof e && (e = "" + e),
              this.readyState === x.CONNECTING)
            )
              throw new Error(
                "InvalidStateError: The connection has not been established yet",
              );
            this.readyState === x.OPEN && this._transport.send(s.quote(e));
          }),
          (x.version = n(6057)),
          (x.CONNECTING = 0),
          (x.OPEN = 1),
          (x.CLOSING = 2),
          (x.CLOSED = 3),
          (x.prototype._receiveInfo = function (e, t) {
            if ((_("_receiveInfo", t), (this._ir = null), e)) {
              ((this._rto = this.countRTO(t)),
                (this._transUrl = e.base_url ? e.base_url : this.url),
                (e = d.extend(e, this._urlInfo)),
                _("info", e));
              var n = r.filterToEnabled(this._transportsWhitelist, e);
              ((this._transports = n.main),
                _(this._transports.length + " enabled transports"),
                this._connect());
            } else this._close(1002, "Cannot connect to server");
          }),
          (x.prototype._connect = function () {
            for (
              var e = this._transports.shift();
              e;
              e = this._transports.shift()
            ) {
              if (
                (_("attempt", e.transportName),
                e.needBody &&
                  (!t.document.body ||
                    ("undefined" !== typeof t.document.readyState &&
                      "complete" !== t.document.readyState &&
                      "interactive" !== t.document.readyState)))
              )
                return (
                  _("waiting for body"),
                  this._transports.unshift(e),
                  void c.attachEvent("load", this._connect.bind(this))
                );
              var n = Math.max(this._timeout, this._rto * e.roundTrips || 5e3);
              ((this._transportTimeoutId = setTimeout(
                this._transportTimeout.bind(this),
                n,
              )),
                _("using timeout", n));
              var r = u.addPath(
                  this._transUrl,
                  "/" + this._server + "/" + this._generateSessionId(),
                ),
                o = this._transportOptions[e.transportName];
              _("transport url", r);
              var i = new e(r, this._transUrl, o);
              return (
                i.on("message", this._transportMessage.bind(this)),
                i.once("close", this._transportClose.bind(this)),
                (i.transportName = e.transportName),
                void (this._transport = i)
              );
            }
            this._close(2e3, "All transports failed", !1);
          }),
          (x.prototype._transportTimeout = function () {
            (_("_transportTimeout"),
              this.readyState === x.CONNECTING &&
                (this._transport && this._transport.close(),
                this._transportClose(2007, "Transport timed out")));
          }),
          (x.prototype._transportMessage = function (e) {
            _("_transportMessage", e);
            var t,
              n = this,
              r = e.slice(0, 1),
              o = e.slice(1);
            switch (r) {
              case "o":
                return void this._open();
              case "h":
                return (
                  this.dispatchEvent(new m("heartbeat")),
                  void _("heartbeat", this.transport)
                );
            }
            if (o)
              try {
                t = JSON.parse(o);
              } catch (i) {
                _("bad json", o);
              }
            if ("undefined" !== typeof t)
              switch (r) {
                case "a":
                  Array.isArray(t) &&
                    t.forEach(function (e) {
                      (_("message", n.transport, e), n.dispatchEvent(new b(e)));
                    });
                  break;
                case "m":
                  (_("message", this.transport, t),
                    this.dispatchEvent(new b(t)));
                  break;
                case "c":
                  Array.isArray(t) &&
                    2 === t.length &&
                    this._close(t[0], t[1], !0);
                  break;
              }
            else _("empty payload", o);
          }),
          (x.prototype._transportClose = function (e, t) {
            (_("_transportClose", this.transport, e, t),
              this._transport &&
                (this._transport.removeAllListeners(),
                (this._transport = null),
                (this.transport = null)),
              S(e) || 2e3 === e || this.readyState !== x.CONNECTING
                ? this._close(e, t)
                : this._connect());
          }),
          (x.prototype._open = function () {
            (_(
              "_open",
              this._transport && this._transport.transportName,
              this.readyState,
            ),
              this.readyState === x.CONNECTING
                ? (this._transportTimeoutId &&
                    (clearTimeout(this._transportTimeoutId),
                    (this._transportTimeoutId = null)),
                  (this.readyState = x.OPEN),
                  (this.transport = this._transport.transportName),
                  this.dispatchEvent(new m("open")),
                  _("connected", this.transport))
                : this._close(1006, "Server lost session"));
          }),
          (x.prototype._close = function (e, t, n) {
            _("_close", this.transport, e, t, n, this.readyState);
            var r = !1;
            if (
              (this._ir && ((r = !0), this._ir.close(), (this._ir = null)),
              this._transport &&
                (this._transport.close(),
                (this._transport = null),
                (this.transport = null)),
              this.readyState === x.CLOSED)
            )
              throw new Error(
                "InvalidStateError: SockJS has already been closed",
              );
            ((this.readyState = x.CLOSING),
              setTimeout(
                function () {
                  ((this.readyState = x.CLOSED),
                    r && this.dispatchEvent(new m("error")));
                  var o = new y("close");
                  ((o.wasClean = n || !1),
                    (o.code = e || 1e3),
                    (o.reason = t),
                    this.dispatchEvent(o),
                    (this.onmessage = this.onclose = this.onerror = null),
                    _("disconnected"));
                }.bind(this),
                0,
              ));
          }),
          (x.prototype.countRTO = function (e) {
            return e > 100 ? 4 * e : 300 + e;
          }),
          (e.exports = function (e) {
            return ((r = l(e)), n(7829)(x, e), x);
          }));
      }).call(this, n(13));
    },
    7820: function (e, t, n) {
      "use strict";
      var r,
        o = Array.prototype,
        i = Object.prototype,
        a = Function.prototype,
        s = String.prototype,
        u = o.slice,
        c = i.toString,
        l = function (e) {
          return "[object Function]" === i.toString.call(e);
        },
        d = function (e) {
          return "[object Array]" === c.call(e);
        },
        p = function (e) {
          return "[object String]" === c.call(e);
        },
        h =
          Object.defineProperty &&
          (function () {
            try {
              return (Object.defineProperty({}, "x", {}), !0);
            } catch (e) {
              return !1;
            }
          })();
      r = h
        ? function (e, t, n, r) {
            (!r && t in e) ||
              Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: n,
              });
          }
        : function (e, t, n, r) {
            (!r && t in e) || (e[t] = n);
          };
      var m = function (e, t, n) {
          for (var o in t) i.hasOwnProperty.call(t, o) && r(e, o, t[o], n);
        },
        g = function (e) {
          if (null == e)
            throw new TypeError("can't convert " + e + " to object");
          return Object(e);
        };
      function v(e) {
        var t = +e;
        return (
          t !== t
            ? (t = 0)
            : 0 !== t &&
              t !== 1 / 0 &&
              t !== -1 / 0 &&
              (t = (t > 0 || -1) * Math.floor(Math.abs(t))),
          t
        );
      }
      function y(e) {
        return e >>> 0;
      }
      function b() {}
      (m(a, {
        bind: function (e) {
          var t = this;
          if (!l(t))
            throw new TypeError(
              "Function.prototype.bind called on incompatible " + t,
            );
          for (
            var n = u.call(arguments, 1),
              r = function () {
                if (this instanceof s) {
                  var r = t.apply(this, n.concat(u.call(arguments)));
                  return Object(r) === r ? r : this;
                }
                return t.apply(e, n.concat(u.call(arguments)));
              },
              o = Math.max(0, t.length - n.length),
              i = [],
              a = 0;
            a < o;
            a++
          )
            i.push("$" + a);
          var s = Function(
            "binder",
            "return function (" +
              i.join(",") +
              "){ return binder.apply(this, arguments); }",
          )(r);
          return (
            t.prototype &&
              ((b.prototype = t.prototype),
              (s.prototype = new b()),
              (b.prototype = null)),
            s
          );
        },
      }),
        m(Array, { isArray: d }));
      var w = Object("a"),
        _ = "a" !== w[0] || !(0 in w),
        x = function (e) {
          var t = !0,
            n = !0;
          return (
            e &&
              (e.call("foo", function (e, n, r) {
                "object" !== typeof r && (t = !1);
              }),
              e.call(
                [1],
                function () {
                  n = "string" === typeof this;
                },
                "x",
              )),
            !!e && t && n
          );
        };
      m(
        o,
        {
          forEach: function (e) {
            var t = g(this),
              n = _ && p(this) ? this.split("") : t,
              r = arguments[1],
              o = -1,
              i = n.length >>> 0;
            if (!l(e)) throw new TypeError();
            while (++o < i) o in n && e.call(r, n[o], o, t);
          },
        },
        !x(o.forEach),
      );
      var S = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
      m(
        o,
        {
          indexOf: function (e) {
            var t = _ && p(this) ? this.split("") : g(this),
              n = t.length >>> 0;
            if (!n) return -1;
            var r = 0;
            for (
              arguments.length > 1 && (r = v(arguments[1])),
                r = r >= 0 ? r : Math.max(0, n + r);
              r < n;
              r++
            )
              if (r in t && t[r] === e) return r;
            return -1;
          },
        },
        S,
      );
      var E = s.split;
      2 !== "ab".split(/(?:ab)*/).length ||
      4 !== ".".split(/(.?)(.?)/).length ||
      "t" === "tesst".split(/(s)*/)[1] ||
      4 !== "test".split(/(?:)/, -1).length ||
      "".split(/.?/).length ||
      ".".split(/()()/).length > 1
        ? (function () {
            var e = void 0 === /()??/.exec("")[1];
            s.split = function (t, n) {
              var r = this;
              if (void 0 === t && 0 === n) return [];
              if ("[object RegExp]" !== c.call(t)) return E.call(this, t, n);
              var i,
                a,
                s,
                u,
                l = [],
                d =
                  (t.ignoreCase ? "i" : "") +
                  (t.multiline ? "m" : "") +
                  (t.extended ? "x" : "") +
                  (t.sticky ? "y" : ""),
                p = 0;
              ((t = new RegExp(t.source, d + "g")),
                (r += ""),
                e || (i = new RegExp("^" + t.source + "$(?!\\s)", d)),
                (n = void 0 === n ? -1 >>> 0 : y(n)));
              while ((a = t.exec(r))) {
                if (
                  ((s = a.index + a[0].length),
                  s > p &&
                    (l.push(r.slice(p, a.index)),
                    !e &&
                      a.length > 1 &&
                      a[0].replace(i, function () {
                        for (var e = 1; e < arguments.length - 2; e++)
                          void 0 === arguments[e] && (a[e] = void 0);
                      }),
                    a.length > 1 &&
                      a.index < r.length &&
                      o.push.apply(l, a.slice(1)),
                    (u = a[0].length),
                    (p = s),
                    l.length >= n))
                )
                  break;
                t.lastIndex === a.index && t.lastIndex++;
              }
              return (
                p === r.length
                  ? (!u && t.test("")) || l.push("")
                  : l.push(r.slice(p)),
                l.length > n ? l.slice(0, n) : l
              );
            };
          })()
        : "0".split(void 0, 0).length &&
          (s.split = function (e, t) {
            return void 0 === e && 0 === t ? [] : E.call(this, e, t);
          });
      var T = s.substr,
        A = "".substr && "b" !== "0b".substr(-1);
      m(
        s,
        {
          substr: function (e, t) {
            return T.call(this, e < 0 && (e = this.length + e) < 0 ? 0 : e, t);
          },
        },
        A,
      );
    },
    7821: function (e, t, n) {
      "use strict";
      var r,
        o =
          /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        i = function (e) {
          var t,
            n = {},
            r = [];
          for (t = 0; t < 65536; t++) r.push(String.fromCharCode(t));
          return (
            (e.lastIndex = 0),
            r.join("").replace(e, function (e) {
              return (
                (n[e] =
                  "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)),
                ""
              );
            }),
            (e.lastIndex = 0),
            n
          );
        };
      e.exports = {
        quote: function (e) {
          var t = JSON.stringify(e);
          return (
            (o.lastIndex = 0),
            o.test(t)
              ? (r || (r = i(o)),
                t.replace(o, function (e) {
                  return r[e];
                }))
              : t
          );
        },
      };
    },
    7822: function (e, t, n) {
      "use strict";
      var r = function () {};
      e.exports = function (e) {
        return {
          filterToEnabled: function (t, n) {
            var o = { main: [], facade: [] };
            return (
              t ? "string" === typeof t && (t = [t]) : (t = []),
              e.forEach(function (e) {
                e &&
                  ("websocket" !== e.transportName || !1 !== n.websocket
                    ? t.length && -1 === t.indexOf(e.transportName)
                      ? r("not in whitelist", e.transportName)
                      : e.enabled(n)
                        ? (r("enabled", e.transportName),
                          o.main.push(e),
                          e.facadeTransport && o.facade.push(e.facadeTransport))
                        : r("disabled", e.transportName)
                    : r("disabled from server", "websocket"));
              }),
              o
            );
          },
        };
      };
    },
    7823: function (e, t, n) {
      "use strict";
      (function (t) {
        var n = {};
        (["log", "debug", "warn"].forEach(function (e) {
          var r;
          try {
            r = t.console && t.console[e] && t.console[e].apply;
          } catch (o) {}
          n[e] = r
            ? function () {
                return t.console[e].apply(t.console, arguments);
              }
            : "log" === e
              ? function () {}
              : n.log;
        }),
          (e.exports = n));
      }).call(this, n(13));
    },
    7824: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(4992);
      function i() {
        (o.call(this),
          this.initEvent("close", !1, !1),
          (this.wasClean = !1),
          (this.code = 0),
          (this.reason = ""));
      }
      (r(i, o), (e.exports = i));
    },
    7825: function (e, t, n) {
      "use strict";
      var r = n(16),
        o = n(4992);
      function i(e) {
        (o.call(this), this.initEvent("message", !1, !1), (this.data = e));
      }
      (r(i, o), (e.exports = i));
    },
    7826: function (e, t, n) {
      "use strict";
      var r = n(3092).EventEmitter,
        o = n(16),
        i = n(3214),
        a = n(4989),
        s = n(4664),
        u = n(4287),
        c = n(7827),
        l = n(7828),
        d = n(6062),
        p = function () {};
      function h(e, t) {
        p(e);
        var n = this;
        (r.call(this),
          setTimeout(function () {
            n.doXhr(e, t);
          }, 0));
      }
      (o(h, r),
        (h._getReceiver = function (e, t, n) {
          return n.sameOrigin
            ? new d(t, u)
            : s.enabled
              ? new d(t, s)
              : a.enabled && n.sameScheme
                ? new d(t, a)
                : l.enabled()
                  ? new l(e, t)
                  : new d(t, c);
        }),
        (h.prototype.doXhr = function (e, t) {
          var n = this,
            r = i.addPath(e, "/info");
          (p("doXhr", r),
            (this.xo = h._getReceiver(e, r, t)),
            (this.timeoutRef = setTimeout(function () {
              (p("timeout"), n._cleanup(!1), n.emit("finish"));
            }, h.timeout)),
            this.xo.once("finish", function (e, t) {
              (p("finish", e, t), n._cleanup(!0), n.emit("finish", e, t));
            }));
        }),
        (h.prototype._cleanup = function (e) {
          (p("_cleanup"),
            clearTimeout(this.timeoutRef),
            (this.timeoutRef = null),
            !e && this.xo && this.xo.close(),
            (this.xo = null));
        }),
        (h.prototype.close = function () {
          (p("close"), this.removeAllListeners(), this._cleanup(!1));
        }),
        (h.timeout = 8e3),
        (e.exports = h));
    },
    7827: function (e, t, n) {
      "use strict";
      var r = n(3092).EventEmitter,
        o = n(16);
      function i() {
        var e = this;
        (r.call(this),
          (this.to = setTimeout(function () {
            e.emit("finish", 200, "{}");
          }, i.timeout)));
      }
      (o(i, r),
        (i.prototype.close = function () {
          clearTimeout(this.to);
        }),
        (i.timeout = 2e3),
        (e.exports = i));
    },
    7828: function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(3092).EventEmitter,
          o = n(16),
          i = n(3552),
          a = n(6056),
          s = n(6061),
          u = function () {};
        function c(e, n) {
          var o = this;
          r.call(this);
          var c = function () {
            var t = (o.ifr = new a(s.transportName, n, e));
            (t.once("message", function (e) {
              if (e) {
                var t;
                try {
                  t = JSON.parse(e);
                } catch (i) {
                  return (u("bad json", e), o.emit("finish"), void o.close());
                }
                var n = t[0],
                  r = t[1];
                o.emit("finish", n, r);
              }
              o.close();
            }),
              t.once("close", function () {
                (o.emit("finish"), o.close());
              }));
          };
          t.document.body ? c() : i.attachEvent("load", c);
        }
        (o(c, r),
          (c.enabled = function () {
            return a.enabled();
          }),
          (c.prototype.close = function () {
            (this.ifr && this.ifr.close(),
              this.removeAllListeners(),
              (this.ifr = null));
          }),
          (e.exports = c));
      }).call(this, n(13));
    },
    7829: function (e, t, n) {
      "use strict";
      var r = n(3214),
        o = n(3552),
        i = n(7830),
        a = n(6061),
        s = n(4289),
        u = n(6060),
        c = function () {};
      e.exports = function (e, t) {
        var n,
          l = {};
        (t.forEach(function (e) {
          e.facadeTransport &&
            (l[e.facadeTransport.transportName] = e.facadeTransport);
        }),
          (l[a.transportName] = a),
          (e.bootstrap_iframe = function () {
            var t;
            s.currentWindowId = u.hash.slice(1);
            var a = function (o) {
              if (
                o.source === parent &&
                ("undefined" === typeof n && (n = o.origin), o.origin === n)
              ) {
                var a;
                try {
                  a = JSON.parse(o.data);
                } catch (v) {
                  return void c("bad json", o.data);
                }
                if (a.windowId === s.currentWindowId)
                  switch (a.type) {
                    case "s":
                      var d;
                      try {
                        d = JSON.parse(a.data);
                      } catch (v) {
                        c("bad json", a.data);
                        break;
                      }
                      var p = d[0],
                        h = d[1],
                        m = d[2],
                        g = d[3];
                      if ((c(p, h, m, g), p !== e.version))
                        throw new Error(
                          'Incompatible SockJS! Main site uses: "' +
                            p +
                            '", the iframe: "' +
                            e.version +
                            '".',
                        );
                      if (
                        !r.isOriginEqual(m, u.href) ||
                        !r.isOriginEqual(g, u.href)
                      )
                        throw new Error(
                          "Can't connect to different domain from within an iframe. (" +
                            u.href +
                            ", " +
                            m +
                            ", " +
                            g +
                            ")",
                        );
                      t = new i(new l[h](m, g));
                      break;
                    case "m":
                      t._send(a.data);
                      break;
                    case "c":
                      (t && t._close(), (t = null));
                      break;
                  }
              }
            };
            (o.attachEvent("message", a), s.postMessage("s"));
          }));
      };
    },
    7830: function (e, t, n) {
      "use strict";
      var r = n(4289);
      function o(e) {
        ((this._transport = e),
          e.on("message", this._transportMessage.bind(this)),
          e.on("close", this._transportClose.bind(this)));
      }
      ((o.prototype._transportClose = function (e, t) {
        r.postMessage("c", JSON.stringify([e, t]));
      }),
        (o.prototype._transportMessage = function (e) {
          r.postMessage("t", e);
        }),
        (o.prototype._send = function (e) {
          this._transport.send(e);
        }),
        (o.prototype._close = function () {
          (this._transport.close(), this._transport.removeAllListeners());
        }),
        (e.exports = o));
    },
    7831: function (e, t, n) {
      (function () {
        var e,
          n,
          r,
          o,
          i = {}.hasOwnProperty,
          a = [].slice;
        ((e = { LF: "\n", NULL: "\0" }),
          (r = (function () {
            var t;
            function n(e, t, n) {
              ((this.command = e),
                (this.headers = null != t ? t : {}),
                (this.body = null != n ? n : ""));
            }
            return (
              (n.prototype.toString = function () {
                var t, r, o, a, s;
                for (r in ((t = [this.command]),
                (o = !1 === this.headers["content-length"]),
                o && delete this.headers["content-length"],
                (s = this.headers),
                s))
                  i.call(s, r) && ((a = s[r]), t.push(r + ":" + a));
                return (
                  this.body &&
                    !o &&
                    t.push("content-length:" + n.sizeOfUTF8(this.body)),
                  t.push(e.LF + this.body),
                  t.join(e.LF)
                );
              }),
              (n.sizeOfUTF8 = function (e) {
                return e ? encodeURI(e).match(/%..|./g).length : 0;
              }),
              (t = function (t) {
                var r, o, i, a, s, u, c, l, d, p, h, m, g, v, y, b, w;
                for (
                  a = t.search(RegExp("" + e.LF + e.LF)),
                    s = t.substring(0, a).split(e.LF),
                    i = s.shift(),
                    u = {},
                    m = function (e) {
                      return e.replace(/^\s+|\s+$/g, "");
                    },
                    b = s.reverse(),
                    g = 0,
                    y = b.length;
                  g < y;
                  g++
                )
                  ((p = b[g]),
                    (l = p.indexOf(":")),
                    (u[m(p.substring(0, l))] = m(p.substring(l + 1))));
                if (((r = ""), (h = a + 2), u["content-length"]))
                  ((d = parseInt(u["content-length"])),
                    (r = ("" + t).substring(h, h + d)));
                else
                  for (
                    o = null, c = v = h, w = t.length;
                    h <= w ? v < w : v > w;
                    c = h <= w ? ++v : --v
                  ) {
                    if (((o = t.charAt(c)), o === e.NULL)) break;
                    r += o;
                  }
                return new n(i, u, r);
              }),
              (n.unmarshall = function (n) {
                var r, o, i, a;
                return (
                  (o = n.split(RegExp("" + e.NULL + e.LF + "*"))),
                  (a = { frames: [], partial: "" }),
                  (a.frames = (function () {
                    var e, n, i, a;
                    for (
                      i = o.slice(0, -1), a = [], e = 0, n = i.length;
                      e < n;
                      e++
                    )
                      ((r = i[e]), a.push(t(r)));
                    return a;
                  })()),
                  (i = o.slice(-1)[0]),
                  i === e.LF ||
                  -1 !== i.search(RegExp("" + e.NULL + e.LF + "*$"))
                    ? a.frames.push(t(i))
                    : (a.partial = i),
                  a
                );
              }),
              (n.marshall = function (t, r, o) {
                var i;
                return ((i = new n(t, r, o)), i.toString() + e.NULL);
              }),
              n
            );
          })()),
          (n = (function () {
            var t;
            function n(e) {
              ((this.ws = e),
                (this.ws.binaryType = "arraybuffer"),
                (this.counter = 0),
                (this.connected = !1),
                (this.heartbeat = { outgoing: 1e4, incoming: 1e4 }),
                (this.maxWebSocketFrameSize = 16384),
                (this.subscriptions = {}),
                (this.partialData = ""));
            }
            return (
              (n.prototype.debug = function (e) {
                var t;
                return "undefined" !== typeof window &&
                  null !== window &&
                  null != (t = window.console)
                  ? t.log(e)
                  : void 0;
              }),
              (t = function () {
                return Date.now ? Date.now() : new Date().valueOf;
              }),
              (n.prototype._transmit = function (e, t, n) {
                var o;
                ((o = r.marshall(e, t, n)),
                  "function" === typeof this.debug && this.debug(">>> " + o));
                while (1) {
                  if (!(o.length > this.maxWebSocketFrameSize))
                    return this.ws.send(o);
                  (this.ws.send(o.substring(0, this.maxWebSocketFrameSize)),
                    (o = o.substring(this.maxWebSocketFrameSize)),
                    "function" === typeof this.debug &&
                      this.debug("remaining = " + o.length));
                }
              }),
              (n.prototype._setupHeartbeat = function (n) {
                var r, i, a, s, u, c;
                if (
                  (u = n.version) === o.VERSIONS.V1_1 ||
                  u === o.VERSIONS.V1_2
                )
                  return (
                    (c = (function () {
                      var e, t, r, o;
                      for (
                        r = n["heart-beat"].split(","),
                          o = [],
                          e = 0,
                          t = r.length;
                        e < t;
                        e++
                      )
                        ((s = r[e]), o.push(parseInt(s)));
                      return o;
                    })()),
                    (i = c[0]),
                    (r = c[1]),
                    0 !== this.heartbeat.outgoing &&
                      0 !== r &&
                      ((a = Math.max(this.heartbeat.outgoing, r)),
                      "function" === typeof this.debug &&
                        this.debug("send PING every " + a + "ms"),
                      (this.pinger = o.setInterval(
                        a,
                        (function (t) {
                          return function () {
                            return (
                              t.ws.send(e.LF),
                              "function" === typeof t.debug
                                ? t.debug(">>> PING")
                                : void 0
                            );
                          };
                        })(this),
                      ))),
                    0 !== this.heartbeat.incoming && 0 !== i
                      ? ((a = Math.max(this.heartbeat.incoming, i)),
                        "function" === typeof this.debug &&
                          this.debug("check PONG every " + a + "ms"),
                        (this.ponger = o.setInterval(
                          a,
                          (function (e) {
                            return function () {
                              var n;
                              if (((n = t() - e.serverActivity), n > 2 * a))
                                return (
                                  "function" === typeof e.debug &&
                                    e.debug(
                                      "did not receive server activity for the last " +
                                        n +
                                        "ms",
                                    ),
                                  e.ws.close()
                                );
                            };
                          })(this),
                        )))
                      : void 0
                  );
              }),
              (n.prototype._parseConnect = function () {
                var e, t, n, r;
                switch (
                  ((e = 1 <= arguments.length ? a.call(arguments, 0) : []),
                  (r = {}),
                  e.length)
                ) {
                  case 2:
                    ((r = e[0]), (t = e[1]));
                    break;
                  case 3:
                    e[1] instanceof Function
                      ? ((r = e[0]), (t = e[1]), (n = e[2]))
                      : ((r.login = e[0]), (r.passcode = e[1]), (t = e[2]));
                    break;
                  case 4:
                    ((r.login = e[0]),
                      (r.passcode = e[1]),
                      (t = e[2]),
                      (n = e[3]));
                    break;
                  default:
                    ((r.login = e[0]),
                      (r.passcode = e[1]),
                      (t = e[2]),
                      (n = e[3]),
                      (r.host = e[4]));
                }
                return [r, t, n];
              }),
              (n.prototype.connect = function () {
                var n, i, s, u;
                return (
                  (n = 1 <= arguments.length ? a.call(arguments, 0) : []),
                  (u = this._parseConnect.apply(this, n)),
                  (s = u[0]),
                  (this.connectCallback = u[1]),
                  (i = u[2]),
                  "function" === typeof this.debug &&
                    this.debug("Opening Web Socket..."),
                  (this.ws.onmessage = (function (n) {
                    return function (o) {
                      var a, s, u, c, l, d, p, h, m, g, v, y, b;
                      if (
                        ((c =
                          "undefined" !== typeof ArrayBuffer &&
                          o.data instanceof ArrayBuffer
                            ? ((a = new Uint8Array(o.data)),
                              "function" === typeof n.debug &&
                                n.debug("--- got data length: " + a.length),
                              (function () {
                                var e, t, n;
                                for (n = [], e = 0, t = a.length; e < t; e++)
                                  ((s = a[e]), n.push(String.fromCharCode(s)));
                                return n;
                              })().join(""))
                            : o.data),
                        (n.serverActivity = t()),
                        c !== e.LF)
                      ) {
                        for (
                          "function" === typeof n.debug && n.debug("<<< " + c),
                            m = r.unmarshall(n.partialData + c),
                            n.partialData = m.partial,
                            y = m.frames,
                            b = [],
                            g = 0,
                            v = y.length;
                          g < v;
                          g++
                        )
                          switch (((l = y[g]), l.command)) {
                            case "CONNECTED":
                              ("function" === typeof n.debug &&
                                n.debug(
                                  "connected to server " + l.headers.server,
                                ),
                                (n.connected = !0),
                                n._setupHeartbeat(l.headers),
                                b.push(
                                  "function" === typeof n.connectCallback
                                    ? n.connectCallback(l)
                                    : void 0,
                                ));
                              break;
                            case "MESSAGE":
                              ((h = l.headers.subscription),
                                (p = n.subscriptions[h] || n.onreceive),
                                p
                                  ? ((u = n),
                                    (d = l.headers["message-id"]),
                                    (l.ack = function (e) {
                                      return (
                                        null == e && (e = {}),
                                        u.ack(d, h, e)
                                      );
                                    }),
                                    (l.nack = function (e) {
                                      return (
                                        null == e && (e = {}),
                                        u.nack(d, h, e)
                                      );
                                    }),
                                    b.push(p(l)))
                                  : b.push(
                                      "function" === typeof n.debug
                                        ? n.debug(
                                            "Unhandled received MESSAGE: " + l,
                                          )
                                        : void 0,
                                    ));
                              break;
                            case "RECEIPT":
                              b.push(
                                "function" === typeof n.onreceipt
                                  ? n.onreceipt(l)
                                  : void 0,
                              );
                              break;
                            case "ERROR":
                              b.push("function" === typeof i ? i(l) : void 0);
                              break;
                            default:
                              b.push(
                                "function" === typeof n.debug
                                  ? n.debug("Unhandled frame: " + l)
                                  : void 0,
                              );
                          }
                        return b;
                      }
                      "function" === typeof n.debug && n.debug("<<< PONG");
                    };
                  })(this)),
                  (this.ws.onclose = (function (e) {
                    return function () {
                      var t;
                      return (
                        (t = "Whoops! Lost connection to " + e.ws.url),
                        "function" === typeof e.debug && e.debug(t),
                        e._cleanUp(),
                        "function" === typeof i ? i(t) : void 0
                      );
                    };
                  })(this)),
                  (this.ws.onopen = (function (e) {
                    return function () {
                      return (
                        "function" === typeof e.debug &&
                          e.debug("Web Socket Opened..."),
                        (s["accept-version"] = o.VERSIONS.supportedVersions()),
                        (s["heart-beat"] = [
                          e.heartbeat.outgoing,
                          e.heartbeat.incoming,
                        ].join(",")),
                        e._transmit("CONNECT", s)
                      );
                    };
                  })(this))
                );
              }),
              (n.prototype.disconnect = function (e, t) {
                return (
                  null == t && (t = {}),
                  this._transmit("DISCONNECT", t),
                  (this.ws.onclose = null),
                  this.ws.close(),
                  this._cleanUp(),
                  "function" === typeof e ? e() : void 0
                );
              }),
              (n.prototype._cleanUp = function () {
                if (
                  ((this.connected = !1),
                  this.pinger && o.clearInterval(this.pinger),
                  this.ponger)
                )
                  return o.clearInterval(this.ponger);
              }),
              (n.prototype.send = function (e, t, n) {
                return (
                  null == t && (t = {}),
                  null == n && (n = ""),
                  (t.destination = e),
                  this._transmit("SEND", t, n)
                );
              }),
              (n.prototype.subscribe = function (e, t, n) {
                var r;
                return (
                  null == n && (n = {}),
                  n.id || (n.id = "sub-" + this.counter++),
                  (n.destination = e),
                  (this.subscriptions[n.id] = t),
                  this._transmit("SUBSCRIBE", n),
                  (r = this),
                  {
                    id: n.id,
                    unsubscribe: function () {
                      return r.unsubscribe(n.id);
                    },
                  }
                );
              }),
              (n.prototype.unsubscribe = function (e) {
                return (
                  delete this.subscriptions[e],
                  this._transmit("UNSUBSCRIBE", { id: e })
                );
              }),
              (n.prototype.begin = function (e) {
                var t, n;
                return (
                  (n = e || "tx-" + this.counter++),
                  this._transmit("BEGIN", { transaction: n }),
                  (t = this),
                  {
                    id: n,
                    commit: function () {
                      return t.commit(n);
                    },
                    abort: function () {
                      return t.abort(n);
                    },
                  }
                );
              }),
              (n.prototype.commit = function (e) {
                return this._transmit("COMMIT", { transaction: e });
              }),
              (n.prototype.abort = function (e) {
                return this._transmit("ABORT", { transaction: e });
              }),
              (n.prototype.ack = function (e, t, n) {
                return (
                  null == n && (n = {}),
                  (n["message-id"] = e),
                  (n.subscription = t),
                  this._transmit("ACK", n)
                );
              }),
              (n.prototype.nack = function (e, t, n) {
                return (
                  null == n && (n = {}),
                  (n["message-id"] = e),
                  (n.subscription = t),
                  this._transmit("NACK", n)
                );
              }),
              n
            );
          })()),
          (o = {
            VERSIONS: {
              V1_0: "1.0",
              V1_1: "1.1",
              V1_2: "1.2",
              supportedVersions: function () {
                return "1.1,1.0";
              },
            },
            client: function (e, t) {
              var r, i;
              return (
                null == t && (t = ["v10.stomp", "v11.stomp"]),
                (r = o.WebSocketClass || WebSocket),
                (i = new r(e, t)),
                new n(i)
              );
            },
            over: function (e) {
              return new n(e);
            },
            Frame: r,
          }),
          null !== t && (t.Stomp = o),
          "undefined" !== typeof window && null !== window
            ? ((o.setInterval = function (e, t) {
                return window.setInterval(t, e);
              }),
              (o.clearInterval = function (e) {
                return window.clearInterval(e);
              }),
              (window.Stomp = o))
            : t || (self.Stomp = o));
      }).call(this);
    },
    7832: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = n(4661),
        i = r(n(4662));
      let a = function (e) {
          var t = e;
          return o.SockJS
            ? t.socket.readyState === o.SockJS.OPEN
            : t.socket.readyState === i.default.OPEN;
        },
        s = function (e, t) {
          var n = e;
          if (a(e)) {
            let e =
              void 0 !== t ? t.replace(/-/g, "").toUpperCase() : n.address;
            n.stompClient.send(
              "/w/api/account/get",
              {},
              "{'account':'" + e + "'}",
            );
          } else
            n.timeoutHandle = setTimeout(function () {
              s(e, t);
            }, 100);
        },
        u = function (e, t) {
          var n = e;
          if (a(e)) {
            let e =
              void 0 !== t ? t.replace(/-/g, "").toUpperCase() : n.address;
            n.stompClient.send(
              "/w/api/account/transfers/all",
              {},
              "{'account':'" + e + "'}",
            );
          } else
            n.timeoutHandle = setTimeout(function () {
              u(e, t);
            }, 100);
        },
        c = function (e, t) {
          var n = e;
          if (a(e)) {
            let e =
              void 0 !== t ? t.replace(/-/g, "").toUpperCase() : n.address;
            n.stompClient.send(
              "/w/api/account/mosaic/owned/definition",
              {},
              "{'account':'" + e + "'}",
            );
          } else
            n.timeoutHandle = setTimeout(function () {
              c(e, t);
            }, 100);
        },
        l = function (e, t) {
          var n = e;
          if (a(e)) {
            let e =
              void 0 !== t ? t.replace(/-/g, "").toUpperCase() : n.address;
            n.stompClient.send(
              "/w/api/account/mosaic/owned",
              {},
              "{'account':'" + e + "'}",
            );
          } else
            n.timeoutHandle = setTimeout(function () {
              l(e, t);
            }, 100);
        },
        d = function (e, t) {
          var n = e;
          if (a(e)) {
            let e =
              void 0 !== t ? t.replace(/-/g, "").toUpperCase() : n.address;
            n.stompClient.send(
              "/w/api/account/namespace/owned",
              {},
              "{'account':'" + e + "'}",
            );
          } else
            n.timeoutHandle = setTimeout(function () {
              d(e, t);
            }, 100);
        },
        p = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe("/account/" + o, function (e) {
            t(JSON.parse(e.body));
          });
        },
        h = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe("/recenttransactions/" + o, function (e) {
            t(JSON.parse(e.body));
          });
        },
        m = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe("/unconfirmed/" + o, function (e) {
            t(JSON.parse(e.body));
          });
        },
        g = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe("/transactions/" + o, function (e) {
            t(JSON.parse(e.body));
          });
        },
        v = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe(
            "/account/mosaic/owned/definition/" + o,
            function (e) {
              t(JSON.parse(e.body));
            },
          );
        },
        y = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe("/account/mosaic/owned/" + o, function (e) {
            t(JSON.parse(e.body), o);
          });
        },
        b = function (e, t, n) {
          var r = e;
          if (!a(e)) return !1;
          let o = void 0 !== n ? n.replace(/-/g, "").toUpperCase() : r.address;
          r.stompClient.subscribe(
            "/account/namespace/owned/" + o,
            function (e) {
              t(JSON.parse(e.body), o);
            },
          );
        };
      e.exports = {
        requests: {
          data: s,
          transactions: { recent: u },
          mosaics: { owned: l, definitions: c },
          namespaces: { owned: d },
        },
        subscribe: {
          data: p,
          transactions: { recent: h, confirmed: g, unconfirmed: m },
          mosaics: { owned: y, definitions: v },
          namespaces: { owned: b },
        },
      };
    },
    7833: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = n(4661),
        i = r(n(4662));
      let a = function (e) {
          var t = e;
          return o.SockJS
            ? t.socket.readyState === o.SockJS.OPEN
            : t.socket.readyState === i.default.OPEN;
        },
        s = function (e, t) {
          var n = e;
          if (!a(e)) return !1;
          n.stompClient.subscribe("/blocks", function (e) {
            t(JSON.parse(e.body));
          });
        },
        u = function (e, t) {
          var n = e;
          if (!a(e)) return !1;
          n.stompClient.subscribe("/blocks/new", function (e) {
            t(JSON.parse(e.body));
          });
        };
      e.exports = { requests: {}, subscribe: { height: u, blocks: s } };
    },
    7834: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = n(4661),
        i = r(n(4662));
      let a = function (e) {
          var t = e;
          return o.SockJS
            ? t.socket.readyState === o.SockJS.OPEN
            : t.socket.readyState === i.default.OPEN;
        },
        s = function (e, t) {
          var n = e;
          if (!a(e)) return !1;
          n.stompClient.subscribe("/errors", function (e) {
            t(JSON.parse(e.body));
          });
        };
      e.exports = { subscribe: s };
    },
    7835: function (e, t, n) {
      "use strict";
      var r = n(9),
        o = r(n(816)),
        i = r(n(2949)),
        a = (r(n(3289)), r(n(3213))),
        s = r(n(3891)),
        u = r(n(4654)),
        c = r(n(3292)),
        l = r(n(6018));
      const d = {
        MD5: { name: "MD5", signedVersion: "81", version: "01" },
        SHA1: { name: "SHA1", signedVersion: "82", version: "02" },
        SHA256: { name: "SHA256", signedVersion: "83", version: "03" },
        "SHA3-256": { name: "SHA3-256", signedVersion: "88", version: "08" },
        "SHA3-512": { name: "SHA3-512", signedVersion: "89", version: "09" },
      };
      let p = function (e, t, n) {
          let r;
          return (
            (r = n ? "4e5459" + t.signedVersion : "4e5459" + t.version),
            "MD5" === t.name
              ? r + o.default.MD5(e)
              : "SHA1" === t.name
                ? r + o.default.SHA1(e)
                : "SHA256" === t.name
                  ? r + o.default.SHA256(e)
                  : "SHA3-256" === t.name
                    ? r + o.default.SHA3(e, { outputLength: 256 })
                    : r + o.default.SHA3(e, { outputLength: 512 })
          );
        },
        h = function (e, t, n, r, o, s, d, h, m) {
          let g,
            v = {};
          if (h) {
            let r = a.default.create(i.default.fixPrivateKey(e.privateKey));
            v = y(e, t, m);
            let s = p(n, o, h),
              u = s.substring(0, 8),
              c = s.substring(8);
            g = u + r.sign(c).toString();
          } else
            ((v.address = u.default.apostille[m]
              .toUpperCase()
              .replace(/-/g, "")),
              (v.privateKey = "None (public sink)"),
              (g = p(n, o, h)));
          let b = c.default.create("transferTransaction")(v.address, 0, g);
          ((b.isMultisig = s), (b.multisigAccount = d), (b.messageType = 0));
          let w = l.default.prepare("transferTransaction")(e, b, m);
          return {
            data: {
              file: { name: t, hash: g.substring(8), content: n },
              hash: "fe" + g,
              checksum: "fe" + g.substring(0, 8),
              dedicatedAccount: {
                address: v.address,
                privateKey: v.privateKey,
              },
              tags: r,
            },
            transaction: w,
          };
        },
        m = function (e, t) {
          let n;
          n =
            4100 === t.type ? t.otherTrans.message.payload : t.message.payload;
          let r = n.substring(0, 10),
            o = r.substring(8),
            i = g(n, e);
          return v(o)
            ? a.default.verifySignature(t.signer, i, n.substring(10))
            : i === n.substring(10);
        },
        g = function (e, t) {
          let n = e.substring(0, 10),
            r = n.substring(8);
          return "01" === r || "81" === r
            ? o.default.MD5(t).toString(o.default.enc.Hex)
            : "02" === r || "82" === r
              ? o.default.SHA1(t).toString(o.default.enc.Hex)
              : "03" === r || "83" === r
                ? o.default.SHA256(t).toString(o.default.enc.Hex)
                : "08" === r || "88" === r
                  ? o.default
                      .SHA3(t, { outputLength: 256 })
                      .toString(o.default.enc.Hex)
                  : o.default
                      .SHA3(t, { outputLength: 512 })
                      .toString(o.default.enc.Hex);
        },
        v = function (e) {
          let t = Object.keys(d);
          for (let n = 0; t.length > n; n++)
            if (d[t[n]].signedVersion === e) return !0;
          return !1;
        },
        y = function (e, t, n) {
          let r = a.default.create(i.default.fixPrivateKey(e.privateKey)),
            u = r
              .sign(o.default.SHA256(t).toString(o.default.enc.Hex))
              .toString(),
            c = i.default.fixPrivateKey(u),
            l = a.default.create(c);
          return {
            address: s.default.toAddress(l.publicKey.toString(), n),
            privateKey: c,
          };
        };
      e.exports = {
        create: h,
        generateAccount: y,
        hashing: d,
        verify: m,
        isSigned: v,
      };
    },
  },
]);
