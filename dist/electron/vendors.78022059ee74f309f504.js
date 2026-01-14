(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [208],
  {
    11371: function (e, t, r) {
      ((t.unsigned = r(11372)), (t.signed = r(11374)));
    },
    11372: function (e, t, r) {
      const n = r(6908),
        i = r(6909);
      function o(e) {
        return s(e).toString();
      }
      function s(e) {
        const t = new n(0);
        let r,
          i = 0;
        while (1) {
          if (((r = e.read(1)[0]), t.ior(new n(127 & r).shln(i)), r >> 7 === 0))
            break;
          i += 7;
        }
        return t;
      }
      function u(e, t) {
        const r = new n(e);
        while (1) {
          const e = r.maskn(7).toNumber();
          if ((r.ishrn(7), r.isZero())) {
            t.write([e]);
            break;
          }
          t.write([128 | e]);
        }
      }
      function a(e) {
        const t = new i();
        return (u(e, t), t.buffer);
      }
      function h(e) {
        const t = new i(e);
        return o(t);
      }
      e.exports = { encode: a, decode: h, read: o, readBn: s, write: u };
    },
    11374: function (e, t, r) {
      const n = r(6908),
        i = r(6909);
      function o(e) {
        return s(e).toString();
      }
      function s(e) {
        const t = new n(0);
        let r,
          i = 0;
        while (1)
          if (
            ((r = e.read(1)[0]),
            t.ior(new n(127 & r).shln(i)),
            (i += 7),
            r >> 7 === 0)
          )
            break;
        return (64 & r && t.setn(i), t.fromTwos(i));
      }
      function u(e, t) {
        let r = new n(e);
        const i = r.isNeg();
        i && (r = r.toTwos(r.bitLength() + 8));
        while (1) {
          const e = r.maskn(7).toNumber();
          if (
            (r.ishrn(7),
            (o(r) && 0 !== (64 & e)) || (r.isZero() && 0 === (64 & e)))
          ) {
            t.write([e]);
            break;
          }
          t.write([128 | e]);
        }
        function o(e) {
          return i && e.toString(2).indexOf("0") < 0;
        }
      }
      function a(e) {
        const t = new i();
        return (u(e, t), t.buffer);
      }
      function h(e) {
        const t = new i(e);
        return o(t);
      }
      e.exports = { encode: a, decode: h, write: u, read: o, readBn: s };
    },
    11378: function (e, t, r) {
      "use strict";
      function n(e, t) {
        for (let r = 0; r < e.byteLength; r++) {
          if (e[r] < t[r]) return -1;
          if (e[r] > t[r]) return 1;
        }
        return e.byteLength > t.byteLength
          ? 1
          : e.byteLength < t.byteLength
            ? -1
            : 0;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.compare = n));
    },
    11379: function (e, t, r) {
      "use strict";
      function n(e, t) {
        t || (t = e.reduce((e, t) => e + t.length, 0));
        const r = new Uint8Array(t);
        let n = 0;
        for (const i of e) (r.set(i, n), (n += i.length));
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.concat = n));
    },
    11380: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e === t) return !0;
        if (e.byteLength !== t.byteLength) return !1;
        for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.equals = n));
    },
    11381: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6912);
      function i(e, t) {
        void 0 === t && (t = "utf8");
        const r = n[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return r.decoder.decode(`${r.prefix}${e}`);
      }
      t.fromString = i;
    },
    11382: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(11383),
        i = r(11385),
        o = r(11386),
        s = r(11387),
        u = r(11388),
        a = r(6913),
        h = r(11389),
        l = r(6914),
        c = r(11390),
        f = r(11391),
        d = r(11392),
        m = r(11394),
        p = r(11395),
        g = r(11396);
      r(11397);
      var b = r(6915),
        y = r(5711),
        v = r(4589),
        w = r(4873),
        M = r(3622);
      const P = { ...n, ...i, ...o, ...s, ...u, ...a, ...h, ...l, ...c, ...f },
        _ = { ...d, ...m },
        O = { raw: p, json: g };
      ((t.CID = b.CID),
        (t.hasher = y),
        (t.digest = v),
        (t.varint = w),
        (t.bytes = M),
        (t.bases = P),
        (t.codecs = O),
        (t.hashes = _));
    },
    11383: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405),
        i = r(3622);
      const o = n.from({
        prefix: "\0",
        name: "identity",
        encode: (e) => i.toString(e),
        decode: (e) => i.fromString(e),
      });
      t.identity = o;
    },
    11384: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e.length >= 255) throw new TypeError("Alphabet too long");
        for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
        for (var i = 0; i < e.length; i++) {
          var o = e.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== r[s]) throw new TypeError(o + " is ambiguous");
          r[s] = i;
        }
        var u = e.length,
          a = e.charAt(0),
          h = Math.log(u) / Math.log(256),
          l = Math.log(256) / Math.log(u);
        function c(t) {
          if (
            (t instanceof Uint8Array ||
              (ArrayBuffer.isView(t)
                ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                : Array.isArray(t) && (t = Uint8Array.from(t))),
            !(t instanceof Uint8Array))
          )
            throw new TypeError("Expected Uint8Array");
          if (0 === t.length) return "";
          var r = 0,
            n = 0,
            i = 0,
            o = t.length;
          while (i !== o && 0 === t[i]) (i++, r++);
          var s = ((o - i) * l + 1) >>> 0,
            h = new Uint8Array(s);
          while (i !== o) {
            for (
              var c = t[i], f = 0, d = s - 1;
              (0 !== c || f < n) && -1 !== d;
              d--, f++
            )
              ((c += (256 * h[d]) >>> 0),
                (h[d] = (c % u) >>> 0),
                (c = (c / u) >>> 0));
            if (0 !== c) throw new Error("Non-zero carry");
            ((n = f), i++);
          }
          var m = s - n;
          while (m !== s && 0 === h[m]) m++;
          for (var p = a.repeat(r); m < s; ++m) p += e.charAt(h[m]);
          return p;
        }
        function f(e) {
          if ("string" !== typeof e) throw new TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          var t = 0;
          if (" " !== e[t]) {
            var n = 0,
              i = 0;
            while (e[t] === a) (n++, t++);
            var o = ((e.length - t) * h + 1) >>> 0,
              s = new Uint8Array(o);
            while (e[t]) {
              var l = r[e.charCodeAt(t)];
              if (255 === l) return;
              for (
                var c = 0, f = o - 1;
                (0 !== l || c < i) && -1 !== f;
                f--, c++
              )
                ((l += (u * s[f]) >>> 0),
                  (s[f] = (l % 256) >>> 0),
                  (l = (l / 256) >>> 0));
              if (0 !== l) throw new Error("Non-zero carry");
              ((i = c), t++);
            }
            if (" " !== e[t]) {
              var d = o - i;
              while (d !== o && 0 === s[d]) d++;
              var m = new Uint8Array(n + (o - d)),
                p = n;
              while (d !== o) m[p++] = s[d++];
              return m;
            }
          }
        }
        function d(e) {
          var r = f(e);
          if (r) return r;
          throw new Error(`Non-${t} character`);
        }
        return { encode: c, decodeUnsafe: f, decode: d };
      }
      var i = n,
        o = i;
      e.exports = o;
    },
    11385: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.rfc4648({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      t.base2 = i;
    },
    11386: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.rfc4648({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      t.base8 = i;
    },
    11387: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.baseX({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789",
      });
      t.base10 = i;
    },
    11388: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.rfc4648({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        o = n.rfc4648({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      ((t.base16 = i), (t.base16upper = o));
    },
    11389: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.baseX({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        o = n.baseX({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      ((t.base36 = i), (t.base36upper = o));
    },
    11390: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.rfc4648({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        o = n.rfc4648({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        s = n.rfc4648({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        u = n.rfc4648({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      ((t.base64 = i),
        (t.base64pad = o),
        (t.base64url = s),
        (t.base64urlpad = u));
    },
    11391: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = Array.from(
          "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂",
        ),
        o = i.reduce((e, t, r) => ((e[r] = t), e), []),
        s = i.reduce((e, t, r) => ((e[t.codePointAt(0)] = r), e), []);
      function u(e) {
        return e.reduce((e, t) => ((e += o[t]), e), "");
      }
      function a(e) {
        const t = [];
        for (const r of e) {
          const e = s[r.codePointAt(0)];
          if (void 0 === e) throw new Error("Non-base256emoji character: " + r);
          t.push(e);
        }
        return new Uint8Array(t);
      }
      const h = n.from({
        prefix: "🚀",
        name: "base256emoji",
        encode: u,
        decode: a,
      });
      t.base256emoji = h;
    },
    11392: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(5711);
      const i = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        o = n.from({ name: "sha2-256", code: 18, encode: i("SHA-256") }),
        s = n.from({ name: "sha2-512", code: 19, encode: i("SHA-512") });
      ((t.sha256 = o), (t.sha512 = s));
    },
    11393: function (e, t, r) {
      "use strict";
      var n = a,
        i = 128,
        o = 127,
        s = ~o,
        u = Math.pow(2, 31);
      function a(e, t, r) {
        ((t = t || []), (r = r || 0));
        var n = r;
        while (e >= u) ((t[r++] = (255 & e) | i), (e /= 128));
        while (e & s) ((t[r++] = (255 & e) | i), (e >>>= 7));
        return ((t[r] = 0 | e), (a.bytes = r - n + 1), t);
      }
      var h = f,
        l = 128,
        c = 127;
      function f(e, t) {
        var r,
          n = 0,
          i = ((t = t || 0), 0),
          o = t,
          s = e.length;
        do {
          if (o >= s)
            throw ((f.bytes = 0), new RangeError("Could not decode varint"));
          ((r = e[o++]),
            (n += i < 28 ? (r & c) << i : (r & c) * Math.pow(2, i)),
            (i += 7));
        } while (r >= l);
        return ((f.bytes = o - t), n);
      }
      var d = Math.pow(2, 7),
        m = Math.pow(2, 14),
        p = Math.pow(2, 21),
        g = Math.pow(2, 28),
        b = Math.pow(2, 35),
        y = Math.pow(2, 42),
        v = Math.pow(2, 49),
        w = Math.pow(2, 56),
        M = Math.pow(2, 63),
        P = function (e) {
          return e < d
            ? 1
            : e < m
              ? 2
              : e < p
                ? 3
                : e < g
                  ? 4
                  : e < b
                    ? 5
                    : e < y
                      ? 6
                      : e < v
                        ? 7
                        : e < w
                          ? 8
                          : e < M
                            ? 9
                            : 10;
        },
        _ = { encode: n, decode: h, encodingLength: P },
        O = _,
        j = O;
      e.exports = j;
    },
    11394: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3622),
        i = r(4589);
      const o = 0,
        s = "identity",
        u = n.coerce,
        a = (e) => i.create(o, u(e)),
        h = { code: o, name: s, encode: u, digest: a };
      t.identity = h;
    },
    11395: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3622);
      const i = "raw",
        o = 85,
        s = (e) => n.coerce(e),
        u = (e) => n.coerce(e);
      ((t.code = o), (t.decode = u), (t.encode = s), (t.name = i));
    },
    11396: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = new TextEncoder(),
        i = new TextDecoder(),
        o = "json",
        s = 512,
        u = (e) => n.encode(JSON.stringify(e)),
        a = (e) => JSON.parse(i.decode(e));
      ((t.code = s), (t.decode = a), (t.encode = u), (t.name = o));
    },
    11397: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6915),
        i = r(4873),
        o = r(3622),
        s = r(5711),
        u = r(4589);
      ((t.CID = n.CID),
        (t.varint = i),
        (t.bytes = o),
        (t.hasher = s),
        (t.digest = u));
    },
    11398: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6912);
      function i(e, t) {
        void 0 === t && (t = "utf8");
        const r = n[t];
        if (!r) throw new Error(`Unsupported encoding "${t}"`);
        return r.encoder.encode(e).substring(1);
      }
      t.toString = i;
    },
    11399: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e.length !== t.length)
          throw new Error("Inputs should have the same length");
        const r = new Uint8Array(e.length);
        for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
        return r;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }), (t.xor = n));
    },
    11400: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BaseContract", {
          enumerable: !0,
          get: function () {
            return n.BaseContract;
          },
        }),
        Object.defineProperty(t, "BigNumber", {
          enumerable: !0,
          get: function () {
            return n.BigNumber;
          },
        }),
        Object.defineProperty(t, "Contract", {
          enumerable: !0,
          get: function () {
            return n.Contract;
          },
        }),
        Object.defineProperty(t, "ContractFactory", {
          enumerable: !0,
          get: function () {
            return n.ContractFactory;
          },
        }),
        Object.defineProperty(t, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return n.FixedNumber;
          },
        }),
        Object.defineProperty(t, "Signer", {
          enumerable: !0,
          get: function () {
            return n.Signer;
          },
        }),
        Object.defineProperty(t, "VoidSigner", {
          enumerable: !0,
          get: function () {
            return n.VoidSigner;
          },
        }),
        Object.defineProperty(t, "Wallet", {
          enumerable: !0,
          get: function () {
            return n.Wallet;
          },
        }),
        Object.defineProperty(t, "Wordlist", {
          enumerable: !0,
          get: function () {
            return n.Wordlist;
          },
        }),
        Object.defineProperty(t, "constants", {
          enumerable: !0,
          get: function () {
            return n.constants;
          },
        }),
        Object.defineProperty(t, "errors", {
          enumerable: !0,
          get: function () {
            return n.errors;
          },
        }),
        (t.ethers = void 0),
        Object.defineProperty(t, "getDefaultProvider", {
          enumerable: !0,
          get: function () {
            return n.getDefaultProvider;
          },
        }),
        Object.defineProperty(t, "logger", {
          enumerable: !0,
          get: function () {
            return n.logger;
          },
        }),
        Object.defineProperty(t, "providers", {
          enumerable: !0,
          get: function () {
            return n.providers;
          },
        }),
        Object.defineProperty(t, "utils", {
          enumerable: !0,
          get: function () {
            return n.utils;
          },
        }),
        Object.defineProperty(t, "version", {
          enumerable: !0,
          get: function () {
            return n.version;
          },
        }),
        Object.defineProperty(t, "wordlists", {
          enumerable: !0,
          get: function () {
            return n.wordlists;
          },
        }));
      var n = i(r(11401));
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (o.get || o.set)
                ? i(s, r, o)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      t.ethers = n;
      try {
        const e = window;
        null == e._ethers && (e._ethers = n);
      } catch (o) {}
    },
    11401: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BaseContract", {
          enumerable: !0,
          get: function () {
            return n.BaseContract;
          },
        }),
        Object.defineProperty(t, "BigNumber", {
          enumerable: !0,
          get: function () {
            return i.BigNumber;
          },
        }),
        Object.defineProperty(t, "Contract", {
          enumerable: !0,
          get: function () {
            return n.Contract;
          },
        }),
        Object.defineProperty(t, "ContractFactory", {
          enumerable: !0,
          get: function () {
            return n.ContractFactory;
          },
        }),
        Object.defineProperty(t, "FixedNumber", {
          enumerable: !0,
          get: function () {
            return i.FixedNumber;
          },
        }),
        Object.defineProperty(t, "Signer", {
          enumerable: !0,
          get: function () {
            return o.Signer;
          },
        }),
        Object.defineProperty(t, "VoidSigner", {
          enumerable: !0,
          get: function () {
            return o.VoidSigner;
          },
        }),
        Object.defineProperty(t, "Wallet", {
          enumerable: !0,
          get: function () {
            return s.Wallet;
          },
        }),
        Object.defineProperty(t, "Wordlist", {
          enumerable: !0,
          get: function () {
            return h.Wordlist;
          },
        }),
        (t.constants = void 0),
        Object.defineProperty(t, "errors", {
          enumerable: !0,
          get: function () {
            return c.ErrorCode;
          },
        }),
        Object.defineProperty(t, "getDefaultProvider", {
          enumerable: !0,
          get: function () {
            return a.getDefaultProvider;
          },
        }),
        (t.utils = t.providers = t.logger = void 0),
        Object.defineProperty(t, "version", {
          enumerable: !0,
          get: function () {
            return f.version;
          },
        }),
        Object.defineProperty(t, "wordlists", {
          enumerable: !0,
          get: function () {
            return h.wordlists;
          },
        }));
      var n = r(11402),
        i = r(2829),
        o = r(4874),
        s = r(6916),
        u = d(r(3272));
      t.constants = u;
      var a = d(r(11420));
      t.providers = a;
      var h = r(6918),
        l = d(r(11437));
      t.utils = l;
      var c = r(2773),
        f = r(11442);
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (o.get || o.set)
                ? i(s, r, o)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
      t.logger = new c.Logger(f.version);
    },
    11437: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AbiCoder", {
          enumerable: !0,
          get: function () {
            return n.AbiCoder;
          },
        }),
        Object.defineProperty(t, "ConstructorFragment", {
          enumerable: !0,
          get: function () {
            return n.ConstructorFragment;
          },
        }),
        Object.defineProperty(t, "ErrorFragment", {
          enumerable: !0,
          get: function () {
            return n.ErrorFragment;
          },
        }),
        Object.defineProperty(t, "EventFragment", {
          enumerable: !0,
          get: function () {
            return n.EventFragment;
          },
        }),
        Object.defineProperty(t, "FormatTypes", {
          enumerable: !0,
          get: function () {
            return n.FormatTypes;
          },
        }),
        Object.defineProperty(t, "Fragment", {
          enumerable: !0,
          get: function () {
            return n.Fragment;
          },
        }),
        Object.defineProperty(t, "FunctionFragment", {
          enumerable: !0,
          get: function () {
            return n.FunctionFragment;
          },
        }),
        Object.defineProperty(t, "HDNode", {
          enumerable: !0,
          get: function () {
            return h.HDNode;
          },
        }),
        Object.defineProperty(t, "Indexed", {
          enumerable: !0,
          get: function () {
            return n.Indexed;
          },
        }),
        Object.defineProperty(t, "Interface", {
          enumerable: !0,
          get: function () {
            return n.Interface;
          },
        }),
        Object.defineProperty(t, "LogDescription", {
          enumerable: !0,
          get: function () {
            return n.LogDescription;
          },
        }),
        Object.defineProperty(t, "Logger", {
          enumerable: !0,
          get: function () {
            return f.Logger;
          },
        }),
        Object.defineProperty(t, "ParamType", {
          enumerable: !0,
          get: function () {
            return n.ParamType;
          },
        }),
        (t.RLP = void 0),
        Object.defineProperty(t, "SigningKey", {
          enumerable: !0,
          get: function () {
            return y.SigningKey;
          },
        }),
        Object.defineProperty(t, "SupportedAlgorithm", {
          enumerable: !0,
          get: function () {
            return d.SupportedAlgorithm;
          },
        }),
        Object.defineProperty(t, "TransactionDescription", {
          enumerable: !0,
          get: function () {
            return n.TransactionDescription;
          },
        }),
        Object.defineProperty(t, "TransactionTypes", {
          enumerable: !0,
          get: function () {
            return w.TransactionTypes;
          },
        }),
        Object.defineProperty(t, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return v.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(t, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return v.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(t, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return v.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(t, "_TypedDataEncoder", {
          enumerable: !0,
          get: function () {
            return a._TypedDataEncoder;
          },
        }),
        Object.defineProperty(t, "_fetchData", {
          enumerable: !0,
          get: function () {
            return _._fetchData;
          },
        }),
        Object.defineProperty(t, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return v._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(t, "accessListify", {
          enumerable: !0,
          get: function () {
            return w.accessListify;
          },
        }),
        Object.defineProperty(t, "arrayify", {
          enumerable: !0,
          get: function () {
            return u.arrayify;
          },
        }),
        Object.defineProperty(t, "base58", {
          enumerable: !0,
          get: function () {
            return s.Base58;
          },
        }),
        (t.base64 = void 0),
        Object.defineProperty(t, "checkProperties", {
          enumerable: !0,
          get: function () {
            return g.checkProperties;
          },
        }),
        Object.defineProperty(t, "checkResultErrors", {
          enumerable: !0,
          get: function () {
            return n.checkResultErrors;
          },
        }),
        Object.defineProperty(t, "commify", {
          enumerable: !0,
          get: function () {
            return M.commify;
          },
        }),
        Object.defineProperty(t, "computeAddress", {
          enumerable: !0,
          get: function () {
            return w.computeAddress;
          },
        }),
        Object.defineProperty(t, "computeHmac", {
          enumerable: !0,
          get: function () {
            return d.computeHmac;
          },
        }),
        Object.defineProperty(t, "computePublicKey", {
          enumerable: !0,
          get: function () {
            return y.computePublicKey;
          },
        }),
        Object.defineProperty(t, "concat", {
          enumerable: !0,
          get: function () {
            return u.concat;
          },
        }),
        Object.defineProperty(t, "deepCopy", {
          enumerable: !0,
          get: function () {
            return g.deepCopy;
          },
        }),
        Object.defineProperty(t, "defaultAbiCoder", {
          enumerable: !0,
          get: function () {
            return n.defaultAbiCoder;
          },
        }),
        Object.defineProperty(t, "defaultPath", {
          enumerable: !0,
          get: function () {
            return h.defaultPath;
          },
        }),
        Object.defineProperty(t, "defineReadOnly", {
          enumerable: !0,
          get: function () {
            return g.defineReadOnly;
          },
        }),
        Object.defineProperty(t, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return a.dnsEncode;
          },
        }),
        Object.defineProperty(t, "entropyToMnemonic", {
          enumerable: !0,
          get: function () {
            return h.entropyToMnemonic;
          },
        }),
        Object.defineProperty(t, "fetchJson", {
          enumerable: !0,
          get: function () {
            return _.fetchJson;
          },
        }),
        Object.defineProperty(t, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return v.formatBytes32String;
          },
        }),
        Object.defineProperty(t, "formatEther", {
          enumerable: !0,
          get: function () {
            return M.formatEther;
          },
        }),
        Object.defineProperty(t, "formatUnits", {
          enumerable: !0,
          get: function () {
            return M.formatUnits;
          },
        }),
        Object.defineProperty(t, "getAccountPath", {
          enumerable: !0,
          get: function () {
            return h.getAccountPath;
          },
        }),
        Object.defineProperty(t, "getAddress", {
          enumerable: !0,
          get: function () {
            return i.getAddress;
          },
        }),
        Object.defineProperty(t, "getContractAddress", {
          enumerable: !0,
          get: function () {
            return i.getContractAddress;
          },
        }),
        Object.defineProperty(t, "getCreate2Address", {
          enumerable: !0,
          get: function () {
            return i.getCreate2Address;
          },
        }),
        Object.defineProperty(t, "getIcapAddress", {
          enumerable: !0,
          get: function () {
            return i.getIcapAddress;
          },
        }),
        Object.defineProperty(t, "getJsonWalletAddress", {
          enumerable: !0,
          get: function () {
            return l.getJsonWalletAddress;
          },
        }),
        Object.defineProperty(t, "getStatic", {
          enumerable: !0,
          get: function () {
            return g.getStatic;
          },
        }),
        Object.defineProperty(t, "hashMessage", {
          enumerable: !0,
          get: function () {
            return a.hashMessage;
          },
        }),
        Object.defineProperty(t, "hexConcat", {
          enumerable: !0,
          get: function () {
            return u.hexConcat;
          },
        }),
        Object.defineProperty(t, "hexDataLength", {
          enumerable: !0,
          get: function () {
            return u.hexDataLength;
          },
        }),
        Object.defineProperty(t, "hexDataSlice", {
          enumerable: !0,
          get: function () {
            return u.hexDataSlice;
          },
        }),
        Object.defineProperty(t, "hexStripZeros", {
          enumerable: !0,
          get: function () {
            return u.hexStripZeros;
          },
        }),
        Object.defineProperty(t, "hexValue", {
          enumerable: !0,
          get: function () {
            return u.hexValue;
          },
        }),
        Object.defineProperty(t, "hexZeroPad", {
          enumerable: !0,
          get: function () {
            return u.hexZeroPad;
          },
        }),
        Object.defineProperty(t, "hexlify", {
          enumerable: !0,
          get: function () {
            return u.hexlify;
          },
        }),
        Object.defineProperty(t, "id", {
          enumerable: !0,
          get: function () {
            return a.id;
          },
        }),
        Object.defineProperty(t, "isAddress", {
          enumerable: !0,
          get: function () {
            return i.isAddress;
          },
        }),
        Object.defineProperty(t, "isBytes", {
          enumerable: !0,
          get: function () {
            return u.isBytes;
          },
        }),
        Object.defineProperty(t, "isBytesLike", {
          enumerable: !0,
          get: function () {
            return u.isBytesLike;
          },
        }),
        Object.defineProperty(t, "isHexString", {
          enumerable: !0,
          get: function () {
            return u.isHexString;
          },
        }),
        Object.defineProperty(t, "isValidMnemonic", {
          enumerable: !0,
          get: function () {
            return h.isValidMnemonic;
          },
        }),
        Object.defineProperty(t, "isValidName", {
          enumerable: !0,
          get: function () {
            return a.isValidName;
          },
        }),
        Object.defineProperty(t, "joinSignature", {
          enumerable: !0,
          get: function () {
            return u.joinSignature;
          },
        }),
        Object.defineProperty(t, "keccak256", {
          enumerable: !0,
          get: function () {
            return c.keccak256;
          },
        }),
        Object.defineProperty(t, "mnemonicToEntropy", {
          enumerable: !0,
          get: function () {
            return h.mnemonicToEntropy;
          },
        }),
        Object.defineProperty(t, "mnemonicToSeed", {
          enumerable: !0,
          get: function () {
            return h.mnemonicToSeed;
          },
        }),
        Object.defineProperty(t, "namehash", {
          enumerable: !0,
          get: function () {
            return a.namehash;
          },
        }),
        Object.defineProperty(t, "nameprep", {
          enumerable: !0,
          get: function () {
            return v.nameprep;
          },
        }),
        Object.defineProperty(t, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return v.parseBytes32String;
          },
        }),
        Object.defineProperty(t, "parseEther", {
          enumerable: !0,
          get: function () {
            return M.parseEther;
          },
        }),
        Object.defineProperty(t, "parseTransaction", {
          enumerable: !0,
          get: function () {
            return w.parse;
          },
        }),
        Object.defineProperty(t, "parseUnits", {
          enumerable: !0,
          get: function () {
            return M.parseUnits;
          },
        }),
        Object.defineProperty(t, "poll", {
          enumerable: !0,
          get: function () {
            return _.poll;
          },
        }),
        Object.defineProperty(t, "randomBytes", {
          enumerable: !0,
          get: function () {
            return p.randomBytes;
          },
        }),
        Object.defineProperty(t, "recoverAddress", {
          enumerable: !0,
          get: function () {
            return w.recoverAddress;
          },
        }),
        Object.defineProperty(t, "recoverPublicKey", {
          enumerable: !0,
          get: function () {
            return y.recoverPublicKey;
          },
        }),
        Object.defineProperty(t, "resolveProperties", {
          enumerable: !0,
          get: function () {
            return g.resolveProperties;
          },
        }),
        Object.defineProperty(t, "ripemd160", {
          enumerable: !0,
          get: function () {
            return d.ripemd160;
          },
        }),
        Object.defineProperty(t, "serializeTransaction", {
          enumerable: !0,
          get: function () {
            return w.serialize;
          },
        }),
        Object.defineProperty(t, "sha256", {
          enumerable: !0,
          get: function () {
            return d.sha256;
          },
        }),
        Object.defineProperty(t, "sha512", {
          enumerable: !0,
          get: function () {
            return d.sha512;
          },
        }),
        Object.defineProperty(t, "shallowCopy", {
          enumerable: !0,
          get: function () {
            return g.shallowCopy;
          },
        }),
        Object.defineProperty(t, "shuffled", {
          enumerable: !0,
          get: function () {
            return p.shuffled;
          },
        }),
        Object.defineProperty(t, "solidityKeccak256", {
          enumerable: !0,
          get: function () {
            return m.keccak256;
          },
        }),
        Object.defineProperty(t, "solidityPack", {
          enumerable: !0,
          get: function () {
            return m.pack;
          },
        }),
        Object.defineProperty(t, "soliditySha256", {
          enumerable: !0,
          get: function () {
            return m.sha256;
          },
        }),
        Object.defineProperty(t, "splitSignature", {
          enumerable: !0,
          get: function () {
            return u.splitSignature;
          },
        }),
        Object.defineProperty(t, "stripZeros", {
          enumerable: !0,
          get: function () {
            return u.stripZeros;
          },
        }),
        Object.defineProperty(t, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return v.toUtf8Bytes;
          },
        }),
        Object.defineProperty(t, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return v.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(t, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return v.toUtf8String;
          },
        }),
        Object.defineProperty(t, "verifyMessage", {
          enumerable: !0,
          get: function () {
            return P.verifyMessage;
          },
        }),
        Object.defineProperty(t, "verifyTypedData", {
          enumerable: !0,
          get: function () {
            return P.verifyTypedData;
          },
        }),
        Object.defineProperty(t, "zeroPad", {
          enumerable: !0,
          get: function () {
            return u.zeroPad;
          },
        }));
      var n = r(3645),
        i = r(2976),
        o = O(r(4624));
      t.base64 = o;
      var s = r(5713),
        u = r(2776),
        a = r(3274),
        h = r(5712),
        l = r(6920),
        c = r(3049),
        f = r(2773),
        d = r(4591),
        m = r(11438),
        p = r(4875),
        g = r(2808),
        b = O(r(3876));
      t.RLP = b;
      var y = r(4623),
        v = r(3016),
        w = r(3271),
        M = r(11440),
        P = r(6916),
        _ = r(3971);
      function O(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (O = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            o,
            s = { __proto__: null, default: e };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return s;
          if ((i = t ? n : r)) {
            if (i.has(e)) return i.get(e);
            i.set(e, s);
          }
          for (const r in e)
            "default" !== r &&
              {}.hasOwnProperty.call(e, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, r)) &&
              (o.get || o.set)
                ? i(s, r, o)
                : (s[r] = e[r]));
          return s;
        })(e, t);
      }
    },
    11442: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.version = void 0));
      t.version = "ethers/5.8.0";
    },
    3405: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(11384),
        i = r(3622);
      class Encoder {
        constructor(e, t, r) {
          ((this.name = e), (this.prefix = t), (this.baseEncode = r));
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class Decoder {
        constructor(e, t, r) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          ((this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = r));
        }
        decode(e) {
          if ("string" === typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`,
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return o(this, e);
        }
      }
      class ComposedDecoder {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return o(this, e);
        }
        decode(e) {
          const t = e[0],
            r = this.decoders[t];
          if (r) return r.decode(e);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`,
          );
        }
      }
      const o = (e, t) =>
        new ComposedDecoder({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class Codec {
        constructor(e, t, r, n) {
          ((this.name = e),
            (this.prefix = t),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new Encoder(e, t, r)),
            (this.decoder = new Decoder(e, t, n)));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const s = (e) => {
          let { name: t, prefix: r, encode: n, decode: i } = e;
          return new Codec(t, r, n, i);
        },
        u = (e) => {
          let { prefix: t, name: r, alphabet: o } = e;
          const { encode: u, decode: a } = n(o, r);
          return s({
            prefix: t,
            name: r,
            encode: u,
            decode: (e) => i.coerce(a(e)),
          });
        },
        a = (e, t, r, n) => {
          const i = {};
          for (let l = 0; l < t.length; ++l) i[t[l]] = l;
          let o = e.length;
          while ("=" === e[o - 1]) --o;
          const s = new Uint8Array(((o * r) / 8) | 0);
          let u = 0,
            a = 0,
            h = 0;
          for (let l = 0; l < o; ++l) {
            const t = i[e[l]];
            if (void 0 === t) throw new SyntaxError(`Non-${n} character`);
            ((a = (a << r) | t),
              (u += r),
              u >= 8 && ((u -= 8), (s[h++] = 255 & (a >> u))));
          }
          if (u >= r || 255 & (a << (8 - u)))
            throw new SyntaxError("Unexpected end of data");
          return s;
        },
        h = (e, t, r) => {
          const n = "=" === t[t.length - 1],
            i = (1 << r) - 1;
          let o = "",
            s = 0,
            u = 0;
          for (let a = 0; a < e.length; ++a) {
            ((u = (u << 8) | e[a]), (s += 8));
            while (s > r) ((s -= r), (o += t[i & (u >> s)]));
          }
          if ((s && (o += t[i & (u << (r - s))]), n))
            while ((o.length * r) & 7) o += "=";
          return o;
        },
        l = (e) => {
          let { name: t, prefix: r, bitsPerChar: n, alphabet: i } = e;
          return s({
            prefix: r,
            name: t,
            encode(e) {
              return h(e, i, n);
            },
            decode(e) {
              return a(e, i, n, t);
            },
          });
        };
      ((t.Codec = Codec),
        (t.baseX = u),
        (t.from = s),
        (t.or = o),
        (t.rfc4648 = l));
    },
    3622: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = new Uint8Array(0),
        i = (e) => e.reduce((e, t) => e + t.toString(16).padStart(2, "0"), ""),
        o = (e) => {
          const t = e.match(/../g);
          return t ? new Uint8Array(t.map((e) => parseInt(e, 16))) : n;
        },
        s = (e, t) => {
          if (e === t) return !0;
          if (e.byteLength !== t.byteLength) return !1;
          for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
          return !0;
        },
        u = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw new Error("Unknown type, must be binary type");
        },
        a = (e) => e instanceof ArrayBuffer || ArrayBuffer.isView(e),
        h = (e) => new TextEncoder().encode(e),
        l = (e) => new TextDecoder().decode(e);
      ((t.coerce = u),
        (t.empty = n),
        (t.equals = s),
        (t.fromHex = o),
        (t.fromString = h),
        (t.isBinary = a),
        (t.toHex = i),
        (t.toString = l));
    },
    4589: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3622),
        i = r(4873);
      const o = (e, t) => {
          const r = t.byteLength,
            n = i.encodingLength(e),
            o = n + i.encodingLength(r),
            s = new Uint8Array(o + r);
          return (
            i.encodeTo(e, s, 0),
            i.encodeTo(r, s, n),
            s.set(t, o),
            new Digest(e, r, t, s)
          );
        },
        s = (e) => {
          const t = n.coerce(e),
            [r, o] = i.decode(t),
            [s, u] = i.decode(t.subarray(o)),
            a = t.subarray(o + u);
          if (a.byteLength !== s) throw new Error("Incorrect length");
          return new Digest(r, s, a, t);
        },
        u = (e, t) =>
          e === t ||
          (e.code === t.code &&
            e.size === t.size &&
            n.equals(e.bytes, t.bytes));
      class Digest {
        constructor(e, t, r, n) {
          ((this.code = e),
            (this.size = t),
            (this.digest = r),
            (this.bytes = n));
        }
      }
      ((t.Digest = Digest), (t.create = o), (t.decode = s), (t.equals = u));
    },
    4873: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(11393);
      const i = function (e, t) {
          void 0 === t && (t = 0);
          const r = n.decode(e, t);
          return [r, n.decode.bytes];
        },
        o = function (e, t, r) {
          return (void 0 === r && (r = 0), n.encode(e, t, r), t);
        },
        s = (e) => n.encodingLength(e);
      ((t.decode = i), (t.encodeTo = o), (t.encodingLength = s));
    },
    5711: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(4589);
      const i = (e) => {
        let { name: t, code: r, encode: n } = e;
        return new Hasher(t, r, n);
      };
      class Hasher {
        constructor(e, t, r) {
          ((this.name = e), (this.code = t), (this.encode = r));
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? n.create(this.code, t)
              : t.then((e) => n.create(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      ((t.Hasher = Hasher), (t.from = i));
    },
    6908: function (e, t, r) {
      (function (e) {
        (function (e, t) {
          "use strict";
          function n(e, t) {
            if (!e) throw new Error(t || "Assertion failed");
          }
          function i(e, t) {
            e.super_ = t;
            var r = function () {};
            ((r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e));
          }
          function o(e, t, r) {
            if (o.isBN(e)) return e;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== e &&
                (("le" !== t && "be" !== t) || ((r = t), (t = 10)),
                this._init(e || 0, t || 10, r || "be")));
          }
          var s;
          ("object" === typeof e ? (e.exports = o) : (t.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            s =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(11373).Buffer;
          } catch (D) {}
          function u(e, t) {
            var r = e.charCodeAt(t);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void n(!1, "Invalid character in " + e);
          }
          function a(e, t, r) {
            var n = u(e, r);
            return (r - 1 >= t && (n |= u(e, r - 1) << 4), n);
          }
          function h(e, t, r, i) {
            for (
              var o = 0, s = 0, u = Math.min(e.length, r), a = t;
              a < u;
              a++
            ) {
              var h = e.charCodeAt(a) - 48;
              ((o *= i),
                (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
                n(h >= 0 && s < i, "Invalid character"),
                (o += s));
            }
            return o;
          }
          function l(e, t) {
            ((e.words = t.words),
              (e.length = t.length),
              (e.negative = t.negative),
              (e.red = t.red));
          }
          if (
            ((o.isBN = function (e) {
              return (
                e instanceof o ||
                (null !== e &&
                  "object" === typeof e &&
                  e.constructor.wordSize === o.wordSize &&
                  Array.isArray(e.words))
              );
            }),
            (o.max = function (e, t) {
              return e.cmp(t) > 0 ? e : t;
            }),
            (o.min = function (e, t) {
              return e.cmp(t) < 0 ? e : t;
            }),
            (o.prototype._init = function (e, t, r) {
              if ("number" === typeof e) return this._initNumber(e, t, r);
              if ("object" === typeof e) return this._initArray(e, t, r);
              ("hex" === t && (t = 16),
                n(t === (0 | t) && t >= 2 && t <= 36),
                (e = e.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === e[0] && (i++, (this.negative = 1)),
                i < e.length &&
                  (16 === t
                    ? this._parseHex(e, i, r)
                    : (this._parseBase(e, t, i),
                      "le" === r && this._initArray(this.toArray(), t, r))));
            }),
            (o.prototype._initNumber = function (e, t, r) {
              (e < 0 && ((this.negative = 1), (e = -e)),
                e < 67108864
                  ? ((this.words = [67108863 & e]), (this.length = 1))
                  : e < 4503599627370496
                    ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                      (this.length = 2))
                    : (n(e < 9007199254740992),
                      (this.words = [
                        67108863 & e,
                        (e / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), t, r));
            }),
            (o.prototype._initArray = function (e, t, r) {
              if ((n("number" === typeof e.length), e.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(e.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                s,
                u = 0;
              if ("be" === r)
                for (i = e.length - 1, o = 0; i >= 0; i -= 3)
                  ((s = e[i] | (e[i - 1] << 8) | (e[i - 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              else if ("le" === r)
                for (i = 0, o = 0; i < e.length; i += 3)
                  ((s = e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)),
                    (this.words[o] |= (s << u) & 67108863),
                    (this.words[o + 1] = (s >>> (26 - u)) & 67108863),
                    (u += 24),
                    u >= 26 && ((u -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (e, t, r) {
              ((this.length = Math.ceil((e.length - t) / 6)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var i,
                o = 0,
                s = 0;
              if ("be" === r)
                for (n = e.length - 1; n >= t; n -= 2)
                  ((i = a(e, t, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              else {
                var u = e.length - t;
                for (n = u % 2 === 0 ? t + 1 : t; n < e.length; n += 2)
                  ((i = a(e, t, n) << o),
                    (this.words[s] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (s += 1), (this.words[s] |= i >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (e, t, r) {
              ((this.words = [0]), (this.length = 1));
              for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
              (n--, (i = (i / t) | 0));
              for (
                var o = e.length - r,
                  s = o % n,
                  u = Math.min(o, o - s) + r,
                  a = 0,
                  l = r;
                l < u;
                l += n
              )
                ((a = h(e, l, l + n, t)),
                  this.imuln(i),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              if (0 !== s) {
                var c = 1;
                for (a = h(e, l, e.length, t), l = 0; l < s; l++) c *= t;
                (this.imuln(c),
                  this.words[0] + a < 67108864
                    ? (this.words[0] += a)
                    : this._iaddn(a));
              }
              this._strip();
            }),
            (o.prototype.copy = function (e) {
              e.words = new Array(this.length);
              for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
              ((e.length = this.length),
                (e.negative = this.negative),
                (e.red = this.red));
            }),
            (o.prototype._move = function (e) {
              l(e, this);
            }),
            (o.prototype.clone = function () {
              var e = new o(null);
              return (this.copy(e), e);
            }),
            (o.prototype._expand = function (e) {
              while (this.length < e) this.words[this.length++] = 0;
              return this;
            }),
            (o.prototype._strip = function () {
              while (this.length > 1 && 0 === this.words[this.length - 1])
                this.length--;
              return this._normSign();
            }),
            (o.prototype._normSign = function () {
              return (
                1 === this.length && 0 === this.words[0] && (this.negative = 0),
                this
              );
            }),
            "undefined" !== typeof Symbol && "function" === typeof Symbol.for)
          )
            try {
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = c;
            } catch (D) {
              o.prototype.inspect = c;
            }
          else o.prototype.inspect = c;
          function c() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var f = [
              "",
              "0",
              "00",
              "000",
              "0000",
              "00000",
              "000000",
              "0000000",
              "00000000",
              "000000000",
              "0000000000",
              "00000000000",
              "000000000000",
              "0000000000000",
              "00000000000000",
              "000000000000000",
              "0000000000000000",
              "00000000000000000",
              "000000000000000000",
              "0000000000000000000",
              "00000000000000000000",
              "000000000000000000000",
              "0000000000000000000000",
              "00000000000000000000000",
              "000000000000000000000000",
              "0000000000000000000000000",
            ],
            d = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            m = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (e, t) {
            var r;
            if (((e = e || 10), (t = 0 | t || 1), 16 === e || "hex" === e)) {
              r = "";
              for (var i = 0, o = 0, s = 0; s < this.length; s++) {
                var u = this.words[s],
                  a = (16777215 & ((u << i) | o)).toString(16);
                ((o = (u >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), s--),
                  (r =
                    0 !== o || s !== this.length - 1
                      ? f[6 - a.length] + a + r
                      : a + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % t !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (e === (0 | e) && e >= 2 && e <= 36) {
              var h = d[e],
                l = m[e];
              r = "";
              var c = this.clone();
              c.negative = 0;
              while (!c.isZero()) {
                var p = c.modrn(l).toString(e);
                ((c = c.idivn(l)),
                  (r = c.isZero() ? p + r : f[h - p.length] + p + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % t !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var e = this.words[0];
              return (
                2 === this.length
                  ? (e += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (e += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -e : e
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            s &&
              (o.prototype.toBuffer = function (e, t) {
                return this.toArrayLike(s, e, t);
              }),
            (o.prototype.toArray = function (e, t) {
              return this.toArrayLike(Array, e, t);
            }));
          var p = function (e, t) {
            return e.allocUnsafe ? e.allocUnsafe(t) : new e(t);
          };
          function g(e) {
            for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
              var n = (r / 26) | 0,
                i = r % 26;
              t[r] = (e.words[n] >>> i) & 1;
            }
            return t;
          }
          function b(e, t, r) {
            r.negative = t.negative ^ e.negative;
            var n = (e.length + t.length) | 0;
            ((r.length = n), (n = (n - 1) | 0));
            var i = 0 | e.words[0],
              o = 0 | t.words[0],
              s = i * o,
              u = 67108863 & s,
              a = (s / 67108864) | 0;
            r.words[0] = u;
            for (var h = 1; h < n; h++) {
              for (
                var l = a >>> 26,
                  c = 67108863 & a,
                  f = Math.min(h, t.length - 1),
                  d = Math.max(0, h - e.length + 1);
                d <= f;
                d++
              ) {
                var m = (h - d) | 0;
                ((i = 0 | e.words[m]),
                  (o = 0 | t.words[d]),
                  (s = i * o + c),
                  (l += (s / 67108864) | 0),
                  (c = 67108863 & s));
              }
              ((r.words[h] = 0 | c), (a = 0 | l));
            }
            return (0 !== a ? (r.words[h] = 0 | a) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (e, t, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            (n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"));
            var s = p(e, o),
              u = "le" === t ? "LE" : "BE";
            return (this["_toArrayLike" + u](s, i), s);
          }),
            (o.prototype._toArrayLikeLE = function (e, t) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var s = (this.words[i] << o) | n;
                ((e[r++] = 255 & s),
                  r < e.length && (e[r++] = (s >> 8) & 255),
                  r < e.length && (e[r++] = (s >> 16) & 255),
                  6 === o
                    ? (r < e.length && (e[r++] = (s >> 24) & 255),
                      (n = 0),
                      (o = 0))
                    : ((n = s >>> 24), (o += 2)));
              }
              if (r < e.length) {
                e[r++] = n;
                while (r < e.length) e[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (e, t) {
              for (
                var r = e.length - 1, n = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var s = (this.words[i] << o) | n;
                ((e[r--] = 255 & s),
                  r >= 0 && (e[r--] = (s >> 8) & 255),
                  r >= 0 && (e[r--] = (s >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (e[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                    : ((n = s >>> 24), (o += 2)));
              }
              if (r >= 0) {
                e[r--] = n;
                while (r >= 0) e[r--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (e) {
                  return 32 - Math.clz32(e);
                })
              : (o.prototype._countBits = function (e) {
                  var t = e,
                    r = 0;
                  return (
                    t >= 4096 && ((r += 13), (t >>>= 13)),
                    t >= 64 && ((r += 7), (t >>>= 7)),
                    t >= 8 && ((r += 4), (t >>>= 4)),
                    t >= 2 && ((r += 2), (t >>>= 2)),
                    r + t
                  );
                }),
            (o.prototype._zeroBits = function (e) {
              if (0 === e) return 26;
              var t = e,
                r = 0;
              return (
                0 === (8191 & t) && ((r += 13), (t >>>= 13)),
                0 === (127 & t) && ((r += 7), (t >>>= 7)),
                0 === (15 & t) && ((r += 4), (t >>>= 4)),
                0 === (3 & t) && ((r += 2), (t >>>= 2)),
                0 === (1 & t) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var e = this.words[this.length - 1],
                t = this._countBits(e);
              return 26 * (this.length - 1) + t;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var e = 0, t = 0; t < this.length; t++) {
                var r = this._zeroBits(this.words[t]);
                if (((e += r), 26 !== r)) break;
              }
              return e;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (e) {
              return 0 !== this.negative
                ? this.abs().inotn(e).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (e) {
              return this.testn(e - 1)
                ? this.notn(e).iaddn(1).ineg()
                : this.clone();
            }),
            (o.prototype.isNeg = function () {
              return 0 !== this.negative;
            }),
            (o.prototype.neg = function () {
              return this.clone().ineg();
            }),
            (o.prototype.ineg = function () {
              return (this.isZero() || (this.negative ^= 1), this);
            }),
            (o.prototype.iuor = function (e) {
              while (this.length < e.length) this.words[this.length++] = 0;
              for (var t = 0; t < e.length; t++)
                this.words[t] = this.words[t] | e.words[t];
              return this._strip();
            }),
            (o.prototype.ior = function (e) {
              return (n(0 === (this.negative | e.negative)), this.iuor(e));
            }),
            (o.prototype.or = function (e) {
              return this.length > e.length
                ? this.clone().ior(e)
                : e.clone().ior(this);
            }),
            (o.prototype.uor = function (e) {
              return this.length > e.length
                ? this.clone().iuor(e)
                : e.clone().iuor(this);
            }),
            (o.prototype.iuand = function (e) {
              var t;
              t = this.length > e.length ? e : this;
              for (var r = 0; r < t.length; r++)
                this.words[r] = this.words[r] & e.words[r];
              return ((this.length = t.length), this._strip());
            }),
            (o.prototype.iand = function (e) {
              return (n(0 === (this.negative | e.negative)), this.iuand(e));
            }),
            (o.prototype.and = function (e) {
              return this.length > e.length
                ? this.clone().iand(e)
                : e.clone().iand(this);
            }),
            (o.prototype.uand = function (e) {
              return this.length > e.length
                ? this.clone().iuand(e)
                : e.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (e) {
              var t, r;
              this.length > e.length
                ? ((t = this), (r = e))
                : ((t = e), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = t.words[n] ^ r.words[n];
              if (this !== t)
                for (; n < t.length; n++) this.words[n] = t.words[n];
              return ((this.length = t.length), this._strip());
            }),
            (o.prototype.ixor = function (e) {
              return (n(0 === (this.negative | e.negative)), this.iuxor(e));
            }),
            (o.prototype.xor = function (e) {
              return this.length > e.length
                ? this.clone().ixor(e)
                : e.clone().ixor(this);
            }),
            (o.prototype.uxor = function (e) {
              return this.length > e.length
                ? this.clone().iuxor(e)
                : e.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = 0 | Math.ceil(e / 26),
                r = e % 26;
              (this._expand(t), r > 0 && t--);
              for (var i = 0; i < t; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (e) {
              return this.clone().inotn(e);
            }),
            (o.prototype.setn = function (e, t) {
              n("number" === typeof e && e >= 0);
              var r = (e / 26) | 0,
                i = e % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = t
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (e) {
              var t, r, n;
              if (0 !== this.negative && 0 === e.negative)
                return (
                  (this.negative = 0),
                  (t = this.isub(e)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== e.negative)
                return (
                  (e.negative = 0),
                  (t = this.isub(e)),
                  (e.negative = 1),
                  t._normSign()
                );
              this.length > e.length
                ? ((r = this), (n = e))
                : ((r = e), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                ((t = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26));
              for (; 0 !== i && o < r.length; o++)
                ((t = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & t),
                  (i = t >>> 26));
              if (((this.length = r.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (e) {
              var t;
              return 0 !== e.negative && 0 === this.negative
                ? ((e.negative = 0), (t = this.sub(e)), (e.negative ^= 1), t)
                : 0 === e.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (t = e.sub(this)),
                    (this.negative = 1),
                    t)
                  : this.length > e.length
                    ? this.clone().iadd(e)
                    : e.clone().iadd(this);
            }),
            (o.prototype.isub = function (e) {
              if (0 !== e.negative) {
                e.negative = 0;
                var t = this.iadd(e);
                return ((e.negative = 1), t._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(e),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(e);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = e)) : ((r = e), (n = this));
              for (var o = 0, s = 0; s < n.length; s++)
                ((t = (0 | r.words[s]) - (0 | n.words[s]) + o),
                  (o = t >> 26),
                  (this.words[s] = 67108863 & t));
              for (; 0 !== o && s < r.length; s++)
                ((t = (0 | r.words[s]) + o),
                  (o = t >> 26),
                  (this.words[s] = 67108863 & t));
              if (0 === o && s < r.length && r !== this)
                for (; s < r.length; s++) this.words[s] = r.words[s];
              return (
                (this.length = Math.max(this.length, s)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (e) {
              return this.clone().isub(e);
            }));
          var y = function (e, t, r) {
            var n,
              i,
              o,
              s = e.words,
              u = t.words,
              a = r.words,
              h = 0,
              l = 0 | s[0],
              c = 8191 & l,
              f = l >>> 13,
              d = 0 | s[1],
              m = 8191 & d,
              p = d >>> 13,
              g = 0 | s[2],
              b = 8191 & g,
              y = g >>> 13,
              v = 0 | s[3],
              w = 8191 & v,
              M = v >>> 13,
              P = 0 | s[4],
              _ = 8191 & P,
              O = P >>> 13,
              j = 0 | s[5],
              x = 8191 & j,
              C = j >>> 13,
              A = 0 | s[6],
              S = 8191 & A,
              D = A >>> 13,
              k = 0 | s[7],
              E = 8191 & k,
              I = k >>> 13,
              B = 0 | s[8],
              L = 8191 & B,
              U = B >>> 13,
              T = 0 | s[9],
              N = 8191 & T,
              R = T >>> 13,
              z = 0 | u[0],
              F = 8191 & z,
              q = z >>> 13,
              Z = 0 | u[1],
              V = 8191 & Z,
              W = Z >>> 13,
              H = 0 | u[2],
              J = 8191 & H,
              K = H >>> 13,
              $ = 0 | u[3],
              X = 8191 & $,
              Q = $ >>> 13,
              G = 0 | u[4],
              Y = 8191 & G,
              ee = G >>> 13,
              te = 0 | u[5],
              re = 8191 & te,
              ne = te >>> 13,
              ie = 0 | u[6],
              oe = 8191 & ie,
              se = ie >>> 13,
              ue = 0 | u[7],
              ae = 8191 & ue,
              he = ue >>> 13,
              le = 0 | u[8],
              ce = 8191 & le,
              fe = le >>> 13,
              de = 0 | u[9],
              me = 8191 & de,
              pe = de >>> 13;
            ((r.negative = e.negative ^ t.negative),
              (r.length = 19),
              (n = Math.imul(c, F)),
              (i = Math.imul(c, q)),
              (i = (i + Math.imul(f, F)) | 0),
              (o = Math.imul(f, q)));
            var ge = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (ge >>> 26)) | 0),
              (ge &= 67108863),
              (n = Math.imul(m, F)),
              (i = Math.imul(m, q)),
              (i = (i + Math.imul(p, F)) | 0),
              (o = Math.imul(p, q)),
              (n = (n + Math.imul(c, V)) | 0),
              (i = (i + Math.imul(c, W)) | 0),
              (i = (i + Math.imul(f, V)) | 0),
              (o = (o + Math.imul(f, W)) | 0));
            var be = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (be >>> 26)) | 0),
              (be &= 67108863),
              (n = Math.imul(b, F)),
              (i = Math.imul(b, q)),
              (i = (i + Math.imul(y, F)) | 0),
              (o = Math.imul(y, q)),
              (n = (n + Math.imul(m, V)) | 0),
              (i = (i + Math.imul(m, W)) | 0),
              (i = (i + Math.imul(p, V)) | 0),
              (o = (o + Math.imul(p, W)) | 0),
              (n = (n + Math.imul(c, J)) | 0),
              (i = (i + Math.imul(c, K)) | 0),
              (i = (i + Math.imul(f, J)) | 0),
              (o = (o + Math.imul(f, K)) | 0));
            var ye = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (ye >>> 26)) | 0),
              (ye &= 67108863),
              (n = Math.imul(w, F)),
              (i = Math.imul(w, q)),
              (i = (i + Math.imul(M, F)) | 0),
              (o = Math.imul(M, q)),
              (n = (n + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(b, W)) | 0),
              (i = (i + Math.imul(y, V)) | 0),
              (o = (o + Math.imul(y, W)) | 0),
              (n = (n + Math.imul(m, J)) | 0),
              (i = (i + Math.imul(m, K)) | 0),
              (i = (i + Math.imul(p, J)) | 0),
              (o = (o + Math.imul(p, K)) | 0),
              (n = (n + Math.imul(c, X)) | 0),
              (i = (i + Math.imul(c, Q)) | 0),
              (i = (i + Math.imul(f, X)) | 0),
              (o = (o + Math.imul(f, Q)) | 0));
            var ve = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (ve >>> 26)) | 0),
              (ve &= 67108863),
              (n = Math.imul(_, F)),
              (i = Math.imul(_, q)),
              (i = (i + Math.imul(O, F)) | 0),
              (o = Math.imul(O, q)),
              (n = (n + Math.imul(w, V)) | 0),
              (i = (i + Math.imul(w, W)) | 0),
              (i = (i + Math.imul(M, V)) | 0),
              (o = (o + Math.imul(M, W)) | 0),
              (n = (n + Math.imul(b, J)) | 0),
              (i = (i + Math.imul(b, K)) | 0),
              (i = (i + Math.imul(y, J)) | 0),
              (o = (o + Math.imul(y, K)) | 0),
              (n = (n + Math.imul(m, X)) | 0),
              (i = (i + Math.imul(m, Q)) | 0),
              (i = (i + Math.imul(p, X)) | 0),
              (o = (o + Math.imul(p, Q)) | 0),
              (n = (n + Math.imul(c, Y)) | 0),
              (i = (i + Math.imul(c, ee)) | 0),
              (i = (i + Math.imul(f, Y)) | 0),
              (o = (o + Math.imul(f, ee)) | 0));
            var we = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (we >>> 26)) | 0),
              (we &= 67108863),
              (n = Math.imul(x, F)),
              (i = Math.imul(x, q)),
              (i = (i + Math.imul(C, F)) | 0),
              (o = Math.imul(C, q)),
              (n = (n + Math.imul(_, V)) | 0),
              (i = (i + Math.imul(_, W)) | 0),
              (i = (i + Math.imul(O, V)) | 0),
              (o = (o + Math.imul(O, W)) | 0),
              (n = (n + Math.imul(w, J)) | 0),
              (i = (i + Math.imul(w, K)) | 0),
              (i = (i + Math.imul(M, J)) | 0),
              (o = (o + Math.imul(M, K)) | 0),
              (n = (n + Math.imul(b, X)) | 0),
              (i = (i + Math.imul(b, Q)) | 0),
              (i = (i + Math.imul(y, X)) | 0),
              (o = (o + Math.imul(y, Q)) | 0),
              (n = (n + Math.imul(m, Y)) | 0),
              (i = (i + Math.imul(m, ee)) | 0),
              (i = (i + Math.imul(p, Y)) | 0),
              (o = (o + Math.imul(p, ee)) | 0),
              (n = (n + Math.imul(c, re)) | 0),
              (i = (i + Math.imul(c, ne)) | 0),
              (i = (i + Math.imul(f, re)) | 0),
              (o = (o + Math.imul(f, ne)) | 0));
            var Me = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Me >>> 26)) | 0),
              (Me &= 67108863),
              (n = Math.imul(S, F)),
              (i = Math.imul(S, q)),
              (i = (i + Math.imul(D, F)) | 0),
              (o = Math.imul(D, q)),
              (n = (n + Math.imul(x, V)) | 0),
              (i = (i + Math.imul(x, W)) | 0),
              (i = (i + Math.imul(C, V)) | 0),
              (o = (o + Math.imul(C, W)) | 0),
              (n = (n + Math.imul(_, J)) | 0),
              (i = (i + Math.imul(_, K)) | 0),
              (i = (i + Math.imul(O, J)) | 0),
              (o = (o + Math.imul(O, K)) | 0),
              (n = (n + Math.imul(w, X)) | 0),
              (i = (i + Math.imul(w, Q)) | 0),
              (i = (i + Math.imul(M, X)) | 0),
              (o = (o + Math.imul(M, Q)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (i = (i + Math.imul(b, ee)) | 0),
              (i = (i + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, ee)) | 0),
              (n = (n + Math.imul(m, re)) | 0),
              (i = (i + Math.imul(m, ne)) | 0),
              (i = (i + Math.imul(p, re)) | 0),
              (o = (o + Math.imul(p, ne)) | 0),
              (n = (n + Math.imul(c, oe)) | 0),
              (i = (i + Math.imul(c, se)) | 0),
              (i = (i + Math.imul(f, oe)) | 0),
              (o = (o + Math.imul(f, se)) | 0));
            var Pe = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Pe >>> 26)) | 0),
              (Pe &= 67108863),
              (n = Math.imul(E, F)),
              (i = Math.imul(E, q)),
              (i = (i + Math.imul(I, F)) | 0),
              (o = Math.imul(I, q)),
              (n = (n + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(S, W)) | 0),
              (i = (i + Math.imul(D, V)) | 0),
              (o = (o + Math.imul(D, W)) | 0),
              (n = (n + Math.imul(x, J)) | 0),
              (i = (i + Math.imul(x, K)) | 0),
              (i = (i + Math.imul(C, J)) | 0),
              (o = (o + Math.imul(C, K)) | 0),
              (n = (n + Math.imul(_, X)) | 0),
              (i = (i + Math.imul(_, Q)) | 0),
              (i = (i + Math.imul(O, X)) | 0),
              (o = (o + Math.imul(O, Q)) | 0),
              (n = (n + Math.imul(w, Y)) | 0),
              (i = (i + Math.imul(w, ee)) | 0),
              (i = (i + Math.imul(M, Y)) | 0),
              (o = (o + Math.imul(M, ee)) | 0),
              (n = (n + Math.imul(b, re)) | 0),
              (i = (i + Math.imul(b, ne)) | 0),
              (i = (i + Math.imul(y, re)) | 0),
              (o = (o + Math.imul(y, ne)) | 0),
              (n = (n + Math.imul(m, oe)) | 0),
              (i = (i + Math.imul(m, se)) | 0),
              (i = (i + Math.imul(p, oe)) | 0),
              (o = (o + Math.imul(p, se)) | 0),
              (n = (n + Math.imul(c, ae)) | 0),
              (i = (i + Math.imul(c, he)) | 0),
              (i = (i + Math.imul(f, ae)) | 0),
              (o = (o + Math.imul(f, he)) | 0));
            var _e = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (_e >>> 26)) | 0),
              (_e &= 67108863),
              (n = Math.imul(L, F)),
              (i = Math.imul(L, q)),
              (i = (i + Math.imul(U, F)) | 0),
              (o = Math.imul(U, q)),
              (n = (n + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(E, W)) | 0),
              (i = (i + Math.imul(I, V)) | 0),
              (o = (o + Math.imul(I, W)) | 0),
              (n = (n + Math.imul(S, J)) | 0),
              (i = (i + Math.imul(S, K)) | 0),
              (i = (i + Math.imul(D, J)) | 0),
              (o = (o + Math.imul(D, K)) | 0),
              (n = (n + Math.imul(x, X)) | 0),
              (i = (i + Math.imul(x, Q)) | 0),
              (i = (i + Math.imul(C, X)) | 0),
              (o = (o + Math.imul(C, Q)) | 0),
              (n = (n + Math.imul(_, Y)) | 0),
              (i = (i + Math.imul(_, ee)) | 0),
              (i = (i + Math.imul(O, Y)) | 0),
              (o = (o + Math.imul(O, ee)) | 0),
              (n = (n + Math.imul(w, re)) | 0),
              (i = (i + Math.imul(w, ne)) | 0),
              (i = (i + Math.imul(M, re)) | 0),
              (o = (o + Math.imul(M, ne)) | 0),
              (n = (n + Math.imul(b, oe)) | 0),
              (i = (i + Math.imul(b, se)) | 0),
              (i = (i + Math.imul(y, oe)) | 0),
              (o = (o + Math.imul(y, se)) | 0),
              (n = (n + Math.imul(m, ae)) | 0),
              (i = (i + Math.imul(m, he)) | 0),
              (i = (i + Math.imul(p, ae)) | 0),
              (o = (o + Math.imul(p, he)) | 0),
              (n = (n + Math.imul(c, ce)) | 0),
              (i = (i + Math.imul(c, fe)) | 0),
              (i = (i + Math.imul(f, ce)) | 0),
              (o = (o + Math.imul(f, fe)) | 0));
            var Oe = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Oe >>> 26)) | 0),
              (Oe &= 67108863),
              (n = Math.imul(N, F)),
              (i = Math.imul(N, q)),
              (i = (i + Math.imul(R, F)) | 0),
              (o = Math.imul(R, q)),
              (n = (n + Math.imul(L, V)) | 0),
              (i = (i + Math.imul(L, W)) | 0),
              (i = (i + Math.imul(U, V)) | 0),
              (o = (o + Math.imul(U, W)) | 0),
              (n = (n + Math.imul(E, J)) | 0),
              (i = (i + Math.imul(E, K)) | 0),
              (i = (i + Math.imul(I, J)) | 0),
              (o = (o + Math.imul(I, K)) | 0),
              (n = (n + Math.imul(S, X)) | 0),
              (i = (i + Math.imul(S, Q)) | 0),
              (i = (i + Math.imul(D, X)) | 0),
              (o = (o + Math.imul(D, Q)) | 0),
              (n = (n + Math.imul(x, Y)) | 0),
              (i = (i + Math.imul(x, ee)) | 0),
              (i = (i + Math.imul(C, Y)) | 0),
              (o = (o + Math.imul(C, ee)) | 0),
              (n = (n + Math.imul(_, re)) | 0),
              (i = (i + Math.imul(_, ne)) | 0),
              (i = (i + Math.imul(O, re)) | 0),
              (o = (o + Math.imul(O, ne)) | 0),
              (n = (n + Math.imul(w, oe)) | 0),
              (i = (i + Math.imul(w, se)) | 0),
              (i = (i + Math.imul(M, oe)) | 0),
              (o = (o + Math.imul(M, se)) | 0),
              (n = (n + Math.imul(b, ae)) | 0),
              (i = (i + Math.imul(b, he)) | 0),
              (i = (i + Math.imul(y, ae)) | 0),
              (o = (o + Math.imul(y, he)) | 0),
              (n = (n + Math.imul(m, ce)) | 0),
              (i = (i + Math.imul(m, fe)) | 0),
              (i = (i + Math.imul(p, ce)) | 0),
              (o = (o + Math.imul(p, fe)) | 0),
              (n = (n + Math.imul(c, me)) | 0),
              (i = (i + Math.imul(c, pe)) | 0),
              (i = (i + Math.imul(f, me)) | 0),
              (o = (o + Math.imul(f, pe)) | 0));
            var je = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (je >>> 26)) | 0),
              (je &= 67108863),
              (n = Math.imul(N, V)),
              (i = Math.imul(N, W)),
              (i = (i + Math.imul(R, V)) | 0),
              (o = Math.imul(R, W)),
              (n = (n + Math.imul(L, J)) | 0),
              (i = (i + Math.imul(L, K)) | 0),
              (i = (i + Math.imul(U, J)) | 0),
              (o = (o + Math.imul(U, K)) | 0),
              (n = (n + Math.imul(E, X)) | 0),
              (i = (i + Math.imul(E, Q)) | 0),
              (i = (i + Math.imul(I, X)) | 0),
              (o = (o + Math.imul(I, Q)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (i = (i + Math.imul(S, ee)) | 0),
              (i = (i + Math.imul(D, Y)) | 0),
              (o = (o + Math.imul(D, ee)) | 0),
              (n = (n + Math.imul(x, re)) | 0),
              (i = (i + Math.imul(x, ne)) | 0),
              (i = (i + Math.imul(C, re)) | 0),
              (o = (o + Math.imul(C, ne)) | 0),
              (n = (n + Math.imul(_, oe)) | 0),
              (i = (i + Math.imul(_, se)) | 0),
              (i = (i + Math.imul(O, oe)) | 0),
              (o = (o + Math.imul(O, se)) | 0),
              (n = (n + Math.imul(w, ae)) | 0),
              (i = (i + Math.imul(w, he)) | 0),
              (i = (i + Math.imul(M, ae)) | 0),
              (o = (o + Math.imul(M, he)) | 0),
              (n = (n + Math.imul(b, ce)) | 0),
              (i = (i + Math.imul(b, fe)) | 0),
              (i = (i + Math.imul(y, ce)) | 0),
              (o = (o + Math.imul(y, fe)) | 0),
              (n = (n + Math.imul(m, me)) | 0),
              (i = (i + Math.imul(m, pe)) | 0),
              (i = (i + Math.imul(p, me)) | 0),
              (o = (o + Math.imul(p, pe)) | 0));
            var xe = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (xe >>> 26)) | 0),
              (xe &= 67108863),
              (n = Math.imul(N, J)),
              (i = Math.imul(N, K)),
              (i = (i + Math.imul(R, J)) | 0),
              (o = Math.imul(R, K)),
              (n = (n + Math.imul(L, X)) | 0),
              (i = (i + Math.imul(L, Q)) | 0),
              (i = (i + Math.imul(U, X)) | 0),
              (o = (o + Math.imul(U, Q)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(E, ee)) | 0),
              (i = (i + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, ee)) | 0),
              (n = (n + Math.imul(S, re)) | 0),
              (i = (i + Math.imul(S, ne)) | 0),
              (i = (i + Math.imul(D, re)) | 0),
              (o = (o + Math.imul(D, ne)) | 0),
              (n = (n + Math.imul(x, oe)) | 0),
              (i = (i + Math.imul(x, se)) | 0),
              (i = (i + Math.imul(C, oe)) | 0),
              (o = (o + Math.imul(C, se)) | 0),
              (n = (n + Math.imul(_, ae)) | 0),
              (i = (i + Math.imul(_, he)) | 0),
              (i = (i + Math.imul(O, ae)) | 0),
              (o = (o + Math.imul(O, he)) | 0),
              (n = (n + Math.imul(w, ce)) | 0),
              (i = (i + Math.imul(w, fe)) | 0),
              (i = (i + Math.imul(M, ce)) | 0),
              (o = (o + Math.imul(M, fe)) | 0),
              (n = (n + Math.imul(b, me)) | 0),
              (i = (i + Math.imul(b, pe)) | 0),
              (i = (i + Math.imul(y, me)) | 0),
              (o = (o + Math.imul(y, pe)) | 0));
            var Ce = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Ce >>> 26)) | 0),
              (Ce &= 67108863),
              (n = Math.imul(N, X)),
              (i = Math.imul(N, Q)),
              (i = (i + Math.imul(R, X)) | 0),
              (o = Math.imul(R, Q)),
              (n = (n + Math.imul(L, Y)) | 0),
              (i = (i + Math.imul(L, ee)) | 0),
              (i = (i + Math.imul(U, Y)) | 0),
              (o = (o + Math.imul(U, ee)) | 0),
              (n = (n + Math.imul(E, re)) | 0),
              (i = (i + Math.imul(E, ne)) | 0),
              (i = (i + Math.imul(I, re)) | 0),
              (o = (o + Math.imul(I, ne)) | 0),
              (n = (n + Math.imul(S, oe)) | 0),
              (i = (i + Math.imul(S, se)) | 0),
              (i = (i + Math.imul(D, oe)) | 0),
              (o = (o + Math.imul(D, se)) | 0),
              (n = (n + Math.imul(x, ae)) | 0),
              (i = (i + Math.imul(x, he)) | 0),
              (i = (i + Math.imul(C, ae)) | 0),
              (o = (o + Math.imul(C, he)) | 0),
              (n = (n + Math.imul(_, ce)) | 0),
              (i = (i + Math.imul(_, fe)) | 0),
              (i = (i + Math.imul(O, ce)) | 0),
              (o = (o + Math.imul(O, fe)) | 0),
              (n = (n + Math.imul(w, me)) | 0),
              (i = (i + Math.imul(w, pe)) | 0),
              (i = (i + Math.imul(M, me)) | 0),
              (o = (o + Math.imul(M, pe)) | 0));
            var Ae = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Ae >>> 26)) | 0),
              (Ae &= 67108863),
              (n = Math.imul(N, Y)),
              (i = Math.imul(N, ee)),
              (i = (i + Math.imul(R, Y)) | 0),
              (o = Math.imul(R, ee)),
              (n = (n + Math.imul(L, re)) | 0),
              (i = (i + Math.imul(L, ne)) | 0),
              (i = (i + Math.imul(U, re)) | 0),
              (o = (o + Math.imul(U, ne)) | 0),
              (n = (n + Math.imul(E, oe)) | 0),
              (i = (i + Math.imul(E, se)) | 0),
              (i = (i + Math.imul(I, oe)) | 0),
              (o = (o + Math.imul(I, se)) | 0),
              (n = (n + Math.imul(S, ae)) | 0),
              (i = (i + Math.imul(S, he)) | 0),
              (i = (i + Math.imul(D, ae)) | 0),
              (o = (o + Math.imul(D, he)) | 0),
              (n = (n + Math.imul(x, ce)) | 0),
              (i = (i + Math.imul(x, fe)) | 0),
              (i = (i + Math.imul(C, ce)) | 0),
              (o = (o + Math.imul(C, fe)) | 0),
              (n = (n + Math.imul(_, me)) | 0),
              (i = (i + Math.imul(_, pe)) | 0),
              (i = (i + Math.imul(O, me)) | 0),
              (o = (o + Math.imul(O, pe)) | 0));
            var Se = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Se >>> 26)) | 0),
              (Se &= 67108863),
              (n = Math.imul(N, re)),
              (i = Math.imul(N, ne)),
              (i = (i + Math.imul(R, re)) | 0),
              (o = Math.imul(R, ne)),
              (n = (n + Math.imul(L, oe)) | 0),
              (i = (i + Math.imul(L, se)) | 0),
              (i = (i + Math.imul(U, oe)) | 0),
              (o = (o + Math.imul(U, se)) | 0),
              (n = (n + Math.imul(E, ae)) | 0),
              (i = (i + Math.imul(E, he)) | 0),
              (i = (i + Math.imul(I, ae)) | 0),
              (o = (o + Math.imul(I, he)) | 0),
              (n = (n + Math.imul(S, ce)) | 0),
              (i = (i + Math.imul(S, fe)) | 0),
              (i = (i + Math.imul(D, ce)) | 0),
              (o = (o + Math.imul(D, fe)) | 0),
              (n = (n + Math.imul(x, me)) | 0),
              (i = (i + Math.imul(x, pe)) | 0),
              (i = (i + Math.imul(C, me)) | 0),
              (o = (o + Math.imul(C, pe)) | 0));
            var De = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (De >>> 26)) | 0),
              (De &= 67108863),
              (n = Math.imul(N, oe)),
              (i = Math.imul(N, se)),
              (i = (i + Math.imul(R, oe)) | 0),
              (o = Math.imul(R, se)),
              (n = (n + Math.imul(L, ae)) | 0),
              (i = (i + Math.imul(L, he)) | 0),
              (i = (i + Math.imul(U, ae)) | 0),
              (o = (o + Math.imul(U, he)) | 0),
              (n = (n + Math.imul(E, ce)) | 0),
              (i = (i + Math.imul(E, fe)) | 0),
              (i = (i + Math.imul(I, ce)) | 0),
              (o = (o + Math.imul(I, fe)) | 0),
              (n = (n + Math.imul(S, me)) | 0),
              (i = (i + Math.imul(S, pe)) | 0),
              (i = (i + Math.imul(D, me)) | 0),
              (o = (o + Math.imul(D, pe)) | 0));
            var ke = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (ke >>> 26)) | 0),
              (ke &= 67108863),
              (n = Math.imul(N, ae)),
              (i = Math.imul(N, he)),
              (i = (i + Math.imul(R, ae)) | 0),
              (o = Math.imul(R, he)),
              (n = (n + Math.imul(L, ce)) | 0),
              (i = (i + Math.imul(L, fe)) | 0),
              (i = (i + Math.imul(U, ce)) | 0),
              (o = (o + Math.imul(U, fe)) | 0),
              (n = (n + Math.imul(E, me)) | 0),
              (i = (i + Math.imul(E, pe)) | 0),
              (i = (i + Math.imul(I, me)) | 0),
              (o = (o + Math.imul(I, pe)) | 0));
            var Ee = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Ee >>> 26)) | 0),
              (Ee &= 67108863),
              (n = Math.imul(N, ce)),
              (i = Math.imul(N, fe)),
              (i = (i + Math.imul(R, ce)) | 0),
              (o = Math.imul(R, fe)),
              (n = (n + Math.imul(L, me)) | 0),
              (i = (i + Math.imul(L, pe)) | 0),
              (i = (i + Math.imul(U, me)) | 0),
              (o = (o + Math.imul(U, pe)) | 0));
            var Ie = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            ((h = (((o + (i >>> 13)) | 0) + (Ie >>> 26)) | 0),
              (Ie &= 67108863),
              (n = Math.imul(N, me)),
              (i = Math.imul(N, pe)),
              (i = (i + Math.imul(R, me)) | 0),
              (o = Math.imul(R, pe)));
            var Be = (((h + n) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (h = (((o + (i >>> 13)) | 0) + (Be >>> 26)) | 0),
              (Be &= 67108863),
              (a[0] = ge),
              (a[1] = be),
              (a[2] = ye),
              (a[3] = ve),
              (a[4] = we),
              (a[5] = Me),
              (a[6] = Pe),
              (a[7] = _e),
              (a[8] = Oe),
              (a[9] = je),
              (a[10] = xe),
              (a[11] = Ce),
              (a[12] = Ae),
              (a[13] = Se),
              (a[14] = De),
              (a[15] = ke),
              (a[16] = Ee),
              (a[17] = Ie),
              (a[18] = Be),
              0 !== h && ((a[19] = h), r.length++),
              r
            );
          };
          function v(e, t, r) {
            ((r.negative = t.negative ^ e.negative),
              (r.length = e.length + t.length));
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var s = i;
              i = 0;
              for (
                var u = 67108863 & n,
                  a = Math.min(o, t.length - 1),
                  h = Math.max(0, o - e.length + 1);
                h <= a;
                h++
              ) {
                var l = o - h,
                  c = 0 | e.words[l],
                  f = 0 | t.words[h],
                  d = c * f,
                  m = 67108863 & d;
                ((s = (s + ((d / 67108864) | 0)) | 0),
                  (m = (m + u) | 0),
                  (u = 67108863 & m),
                  (s = (s + (m >>> 26)) | 0),
                  (i += s >>> 26),
                  (s &= 67108863));
              }
              ((r.words[o] = u), (n = s), (s = i));
            }
            return (0 !== n ? (r.words[o] = n) : r.length--, r._strip());
          }
          function w(e, t, r) {
            return v(e, t, r);
          }
          function M(e, t) {
            ((this.x = e), (this.y = t));
          }
          (Math.imul || (y = b),
            (o.prototype.mulTo = function (e, t) {
              var r,
                n = this.length + e.length;
              return (
                (r =
                  10 === this.length && 10 === e.length
                    ? y(this, e, t)
                    : n < 63
                      ? b(this, e, t)
                      : n < 1024
                        ? v(this, e, t)
                        : w(this, e, t)),
                r
              );
            }),
            (M.prototype.makeRBT = function (e) {
              for (
                var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0;
                n < e;
                n++
              )
                t[n] = this.revBin(n, r, e);
              return t;
            }),
            (M.prototype.revBin = function (e, t, r) {
              if (0 === e || e === r - 1) return e;
              for (var n = 0, i = 0; i < t; i++)
                ((n |= (1 & e) << (t - i - 1)), (e >>= 1));
              return n;
            }),
            (M.prototype.permute = function (e, t, r, n, i, o) {
              for (var s = 0; s < o; s++) ((n[s] = t[e[s]]), (i[s] = r[e[s]]));
            }),
            (M.prototype.transform = function (e, t, r, n, i, o) {
              this.permute(o, e, t, r, n, i);
              for (var s = 1; s < i; s <<= 1)
                for (
                  var u = s << 1,
                    a = Math.cos((2 * Math.PI) / u),
                    h = Math.sin((2 * Math.PI) / u),
                    l = 0;
                  l < i;
                  l += u
                )
                  for (var c = a, f = h, d = 0; d < s; d++) {
                    var m = r[l + d],
                      p = n[l + d],
                      g = r[l + d + s],
                      b = n[l + d + s],
                      y = c * g - f * b;
                    ((b = c * b + f * g),
                      (g = y),
                      (r[l + d] = m + g),
                      (n[l + d] = p + b),
                      (r[l + d + s] = m - g),
                      (n[l + d + s] = p - b),
                      d !== u &&
                        ((y = a * c - h * f), (f = a * f + h * c), (c = y)));
                  }
            }),
            (M.prototype.guessLen13b = function (e, t) {
              var r = 1 | Math.max(t, e),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (M.prototype.conjugate = function (e, t, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = e[n];
                  ((e[n] = e[r - n - 1]),
                    (e[r - n - 1] = i),
                    (i = t[n]),
                    (t[n] = -t[r - n - 1]),
                    (t[r - n - 1] = -i));
                }
            }),
            (M.prototype.normalize13b = function (e, t) {
              for (var r = 0, n = 0; n < t / 2; n++) {
                var i =
                  8192 * Math.round(e[2 * n + 1] / t) +
                  Math.round(e[2 * n] / t) +
                  r;
                ((e[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return e;
            }),
            (M.prototype.convert13b = function (e, t, r, i) {
              for (var o = 0, s = 0; s < t; s++)
                ((o += 0 | e[s]),
                  (r[2 * s] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * s + 1] = 8191 & o),
                  (o >>>= 13));
              for (s = 2 * t; s < i; ++s) r[s] = 0;
              (n(0 === o), n(0 === (-8192 & o)));
            }),
            (M.prototype.stub = function (e) {
              for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
              return t;
            }),
            (M.prototype.mulp = function (e, t, r) {
              var n = 2 * this.guessLen13b(e.length, t.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                s = new Array(n),
                u = new Array(n),
                a = new Array(n),
                h = new Array(n),
                l = new Array(n),
                c = new Array(n),
                f = r.words;
              ((f.length = n),
                this.convert13b(e.words, e.length, s, n),
                this.convert13b(t.words, t.length, h, n),
                this.transform(s, o, u, a, n, i),
                this.transform(h, o, l, c, n, i));
              for (var d = 0; d < n; d++) {
                var m = u[d] * l[d] - a[d] * c[d];
                ((a[d] = u[d] * c[d] + a[d] * l[d]), (u[d] = m));
              }
              return (
                this.conjugate(u, a, n),
                this.transform(u, a, f, o, n, i),
                this.conjugate(f, o, n),
                this.normalize13b(f, n),
                (r.negative = e.negative ^ t.negative),
                (r.length = e.length + t.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)),
                this.mulTo(e, t)
              );
            }),
            (o.prototype.mulf = function (e) {
              var t = new o(null);
              return (
                (t.words = new Array(this.length + e.length)),
                w(this, e, t)
              );
            }),
            (o.prototype.imul = function (e) {
              return this.clone().mulTo(e, this);
            }),
            (o.prototype.imuln = function (e) {
              var t = e < 0;
              (t && (e = -e), n("number" === typeof e), n(e < 67108864));
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * e,
                  s = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += s >>> 26),
                  (this.words[i] = 67108863 & s));
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                (this.length = 0 === e ? 1 : this.length),
                t ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (e) {
              return this.clone().imuln(e);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (e) {
              var t = g(e);
              if (0 === t.length) return new o(1);
              for (var r = this, n = 0; n < t.length; n++, r = r.sqr())
                if (0 !== t[n]) break;
              if (++n < t.length)
                for (var i = r.sqr(); n < t.length; n++, i = i.sqr())
                  0 !== t[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (e) {
              n("number" === typeof e && e >= 0);
              var t,
                r = e % 26,
                i = (e - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var s = 0;
                for (t = 0; t < this.length; t++) {
                  var u = this.words[t] & o,
                    a = ((0 | this.words[t]) - u) << r;
                  ((this.words[t] = a | s), (s = u >>> (26 - r)));
                }
                s && ((this.words[t] = s), this.length++);
              }
              if (0 !== i) {
                for (t = this.length - 1; t >= 0; t--)
                  this.words[t + i] = this.words[t];
                for (t = 0; t < i; t++) this.words[t] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (e) {
              return (n(0 === this.negative), this.iushln(e));
            }),
            (o.prototype.iushrn = function (e, t, r) {
              var i;
              (n("number" === typeof e && e >= 0),
                (i = t ? (t - (t % 26)) / 26 : 0));
              var o = e % 26,
                s = Math.min((e - o) / 26, this.length),
                u = 67108863 ^ ((67108863 >>> o) << o),
                a = r;
              if (((i -= s), (i = Math.max(0, i)), a)) {
                for (var h = 0; h < s; h++) a.words[h] = this.words[h];
                a.length = s;
              }
              if (0 === s);
              else if (this.length > s)
                for (this.length -= s, h = 0; h < this.length; h++)
                  this.words[h] = this.words[h + s];
              else ((this.words[0] = 0), (this.length = 1));
              var l = 0;
              for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
                var c = 0 | this.words[h];
                ((this.words[h] = (l << (26 - o)) | (c >>> o)), (l = c & u));
              }
              return (
                a && 0 !== l && (a.words[a.length++] = l),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (e, t, r) {
              return (n(0 === this.negative), this.iushrn(e, t, r));
            }),
            (o.prototype.shln = function (e) {
              return this.clone().ishln(e);
            }),
            (o.prototype.ushln = function (e) {
              return this.clone().iushln(e);
            }),
            (o.prototype.shrn = function (e) {
              return this.clone().ishrn(e);
            }),
            (o.prototype.ushrn = function (e) {
              return this.clone().iushrn(e);
            }),
            (o.prototype.testn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & i);
            }),
            (o.prototype.imaskn = function (e) {
              n("number" === typeof e && e >= 0);
              var t = e % 26,
                r = (e - t) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== t && r++,
                (this.length = Math.min(r, this.length)),
                0 !== t)
              ) {
                var i = 67108863 ^ ((67108863 >>> t) << t);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (e) {
              return this.clone().imaskn(e);
            }),
            (o.prototype.iaddn = function (e) {
              return (
                n("number" === typeof e),
                n(e < 67108864),
                e < 0
                  ? this.isubn(-e)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= e
                      ? ((this.words[0] = e - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(e),
                        (this.negative = 1),
                        this)
                    : this._iaddn(e)
              );
            }),
            (o.prototype._iaddn = function (e) {
              this.words[0] += e;
              for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
                ((this.words[t] -= 67108864),
                  t === this.length - 1
                    ? (this.words[t + 1] = 1)
                    : this.words[t + 1]++);
              return ((this.length = Math.max(this.length, t + 1)), this);
            }),
            (o.prototype.isubn = function (e) {
              if ((n("number" === typeof e), n(e < 67108864), e < 0))
                return this.iaddn(-e);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(e),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= e), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var t = 0; t < this.length && this.words[t] < 0; t++)
                  ((this.words[t] += 67108864), (this.words[t + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (e) {
              return this.clone().iaddn(e);
            }),
            (o.prototype.subn = function (e) {
              return this.clone().isubn(e);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (e, t, r) {
              var i,
                o,
                s = e.length + r;
              this._expand(s);
              var u = 0;
              for (i = 0; i < e.length; i++) {
                o = (0 | this.words[i + r]) + u;
                var a = (0 | e.words[i]) * t;
                ((o -= 67108863 & a),
                  (u = (o >> 26) - ((a / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o));
              }
              for (; i < this.length - r; i++)
                ((o = (0 | this.words[i + r]) + u),
                  (u = o >> 26),
                  (this.words[i + r] = 67108863 & o));
              if (0 === u) return this._strip();
              for (n(-1 === u), u = 0, i = 0; i < this.length; i++)
                ((o = -(0 | this.words[i]) + u),
                  (u = o >> 26),
                  (this.words[i] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (e, t) {
              var r = this.length - e.length,
                n = this.clone(),
                i = e,
                s = 0 | i.words[i.length - 1],
                u = this._countBits(s);
              ((r = 26 - u),
                0 !== r &&
                  ((i = i.ushln(r)),
                  n.iushln(r),
                  (s = 0 | i.words[i.length - 1])));
              var a,
                h = n.length - i.length;
              if ("mod" !== t) {
                ((a = new o(null)),
                  (a.length = h + 1),
                  (a.words = new Array(a.length)));
                for (var l = 0; l < a.length; l++) a.words[l] = 0;
              }
              var c = n.clone()._ishlnsubmul(i, 1, h);
              0 === c.negative && ((n = c), a && (a.words[h] = 1));
              for (var f = h - 1; f >= 0; f--) {
                var d =
                  67108864 * (0 | n.words[i.length + f]) +
                  (0 | n.words[i.length + f - 1]);
                ((d = Math.min((d / s) | 0, 67108863)),
                  n._ishlnsubmul(i, d, f));
                while (0 !== n.negative)
                  (d--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, f),
                    n.isZero() || (n.negative ^= 1));
                a && (a.words[f] = d);
              }
              return (
                a && a._strip(),
                n._strip(),
                "div" !== t && 0 !== r && n.iushrn(r),
                { div: a || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (e, t, r) {
              return (
                n(!e.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === e.negative
                    ? ((u = this.neg().divmod(e, t)),
                      "mod" !== t && (i = u.div.neg()),
                      "div" !== t &&
                        ((s = u.mod.neg()), r && 0 !== s.negative && s.iadd(e)),
                      { div: i, mod: s })
                    : 0 === this.negative && 0 !== e.negative
                      ? ((u = this.divmod(e.neg(), t)),
                        "mod" !== t && (i = u.div.neg()),
                        { div: i, mod: u.mod })
                      : 0 !== (this.negative & e.negative)
                        ? ((u = this.neg().divmod(e.neg(), t)),
                          "div" !== t &&
                            ((s = u.mod.neg()),
                            r && 0 !== s.negative && s.isub(e)),
                          { div: u.div, mod: s })
                        : e.length > this.length || this.cmp(e) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === e.length
                            ? "div" === t
                              ? { div: this.divn(e.words[0]), mod: null }
                              : "mod" === t
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(e.words[0])),
                                  }
                                : {
                                    div: this.divn(e.words[0]),
                                    mod: new o(this.modrn(e.words[0])),
                                  }
                            : this._wordDiv(e, t)
              );
              var i, s, u;
            }),
            (o.prototype.div = function (e) {
              return this.divmod(e, "div", !1).div;
            }),
            (o.prototype.mod = function (e) {
              return this.divmod(e, "mod", !1).mod;
            }),
            (o.prototype.umod = function (e) {
              return this.divmod(e, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (e) {
              var t = this.divmod(e);
              if (t.mod.isZero()) return t.div;
              var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                n = e.ushrn(1),
                i = e.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? t.div
                : 0 !== t.div.negative
                  ? t.div.isubn(1)
                  : t.div.iaddn(1);
            }),
            (o.prototype.modrn = function (e) {
              var t = e < 0;
              (t && (e = -e), n(e <= 67108863));
              for (
                var r = (1 << 26) % e, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (r * i + (0 | this.words[o])) % e;
              return t ? -i : i;
            }),
            (o.prototype.modn = function (e) {
              return this.modrn(e);
            }),
            (o.prototype.idivn = function (e) {
              var t = e < 0;
              (t && (e = -e), n(e <= 67108863));
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r;
                ((this.words[i] = (o / e) | 0), (r = o % e));
              }
              return (this._strip(), t ? this.ineg() : this);
            }),
            (o.prototype.divn = function (e) {
              return this.clone().idivn(e);
            }),
            (o.prototype.egcd = function (e) {
              (n(0 === e.negative), n(!e.isZero()));
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var i = new o(1),
                s = new o(0),
                u = new o(0),
                a = new o(1),
                h = 0;
              while (t.isEven() && r.isEven()) (t.iushrn(1), r.iushrn(1), ++h);
              var l = r.clone(),
                c = t.clone();
              while (!t.isZero()) {
                for (
                  var f = 0, d = 1;
                  0 === (t.words[0] & d) && f < 26;
                  ++f, d <<= 1
                );
                if (f > 0) {
                  t.iushrn(f);
                  while (f-- > 0)
                    ((i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(c)),
                      i.iushrn(1),
                      s.iushrn(1));
                }
                for (
                  var m = 0, p = 1;
                  0 === (r.words[0] & p) && m < 26;
                  ++m, p <<= 1
                );
                if (m > 0) {
                  r.iushrn(m);
                  while (m-- > 0)
                    ((u.isOdd() || a.isOdd()) && (u.iadd(l), a.isub(c)),
                      u.iushrn(1),
                      a.iushrn(1));
                }
                t.cmp(r) >= 0
                  ? (t.isub(r), i.isub(u), s.isub(a))
                  : (r.isub(t), u.isub(i), a.isub(s));
              }
              return { a: u, b: a, gcd: r.iushln(h) };
            }),
            (o.prototype._invmp = function (e) {
              (n(0 === e.negative), n(!e.isZero()));
              var t = this,
                r = e.clone();
              t = 0 !== t.negative ? t.umod(e) : t.clone();
              var i,
                s = new o(1),
                u = new o(0),
                a = r.clone();
              while (t.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var h = 0, l = 1;
                  0 === (t.words[0] & l) && h < 26;
                  ++h, l <<= 1
                );
                if (h > 0) {
                  t.iushrn(h);
                  while (h-- > 0) (s.isOdd() && s.iadd(a), s.iushrn(1));
                }
                for (
                  var c = 0, f = 1;
                  0 === (r.words[0] & f) && c < 26;
                  ++c, f <<= 1
                );
                if (c > 0) {
                  r.iushrn(c);
                  while (c-- > 0) (u.isOdd() && u.iadd(a), u.iushrn(1));
                }
                t.cmp(r) >= 0 ? (t.isub(r), s.isub(u)) : (r.isub(t), u.isub(s));
              }
              return (
                (i = 0 === t.cmpn(1) ? s : u),
                i.cmpn(0) < 0 && i.iadd(e),
                i
              );
            }),
            (o.prototype.gcd = function (e) {
              if (this.isZero()) return e.abs();
              if (e.isZero()) return this.abs();
              var t = this.clone(),
                r = e.clone();
              ((t.negative = 0), (r.negative = 0));
              for (var n = 0; t.isEven() && r.isEven(); n++)
                (t.iushrn(1), r.iushrn(1));
              do {
                while (t.isEven()) t.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var i = t.cmp(r);
                if (i < 0) {
                  var o = t;
                  ((t = r), (r = o));
                } else if (0 === i || 0 === r.cmpn(1)) break;
                t.isub(r);
              } while (1);
              return r.iushln(n);
            }),
            (o.prototype.invm = function (e) {
              return this.egcd(e).a.umod(e);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (e) {
              return this.words[0] & e;
            }),
            (o.prototype.bincn = function (e) {
              n("number" === typeof e);
              var t = e % 26,
                r = (e - t) / 26,
                i = 1 << t;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= i), this);
              for (var o = i, s = r; 0 !== o && s < this.length; s++) {
                var u = 0 | this.words[s];
                ((u += o),
                  (o = u >>> 26),
                  (u &= 67108863),
                  (this.words[s] = u));
              }
              return (0 !== o && ((this.words[s] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (e) {
              var t,
                r = e < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) t = 1;
              else {
                (r && (e = -e), n(e <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                t = i === e ? 0 : i < e ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.cmp = function (e) {
              if (0 !== this.negative && 0 === e.negative) return -1;
              if (0 === this.negative && 0 !== e.negative) return 1;
              var t = this.ucmp(e);
              return 0 !== this.negative ? 0 | -t : t;
            }),
            (o.prototype.ucmp = function (e) {
              if (this.length > e.length) return 1;
              if (this.length < e.length) return -1;
              for (var t = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | e.words[r];
                if (n !== i) {
                  n < i ? (t = -1) : n > i && (t = 1);
                  break;
                }
              }
              return t;
            }),
            (o.prototype.gtn = function (e) {
              return 1 === this.cmpn(e);
            }),
            (o.prototype.gt = function (e) {
              return 1 === this.cmp(e);
            }),
            (o.prototype.gten = function (e) {
              return this.cmpn(e) >= 0;
            }),
            (o.prototype.gte = function (e) {
              return this.cmp(e) >= 0;
            }),
            (o.prototype.ltn = function (e) {
              return -1 === this.cmpn(e);
            }),
            (o.prototype.lt = function (e) {
              return -1 === this.cmp(e);
            }),
            (o.prototype.lten = function (e) {
              return this.cmpn(e) <= 0;
            }),
            (o.prototype.lte = function (e) {
              return this.cmp(e) <= 0;
            }),
            (o.prototype.eqn = function (e) {
              return 0 === this.cmpn(e);
            }),
            (o.prototype.eq = function (e) {
              return 0 === this.cmp(e);
            }),
            (o.red = function (e) {
              return new A(e);
            }),
            (o.prototype.toRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                e.convertTo(this)._forceRed(e)
              );
            }),
            (o.prototype.fromRed = function () {
              return (
                n(
                  this.red,
                  "fromRed works only with numbers in reduction context",
                ),
                this.red.convertFrom(this)
              );
            }),
            (o.prototype._forceRed = function (e) {
              return ((this.red = e), this);
            }),
            (o.prototype.forceRed = function (e) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(e)
              );
            }),
            (o.prototype.redAdd = function (e) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, e)
              );
            }),
            (o.prototype.redIAdd = function (e) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, e)
              );
            }),
            (o.prototype.redSub = function (e) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, e)
              );
            }),
            (o.prototype.redISub = function (e) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, e)
              );
            }),
            (o.prototype.redShl = function (e) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, e)
              );
            }),
            (o.prototype.redMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.mul(this, e)
              );
            }),
            (o.prototype.redIMul = function (e) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, e),
                this.red.imul(this, e)
              );
            }),
            (o.prototype.redSqr = function () {
              return (
                n(this.red, "redSqr works only with red numbers"),
                this.red._verify1(this),
                this.red.sqr(this)
              );
            }),
            (o.prototype.redISqr = function () {
              return (
                n(this.red, "redISqr works only with red numbers"),
                this.red._verify1(this),
                this.red.isqr(this)
              );
            }),
            (o.prototype.redSqrt = function () {
              return (
                n(this.red, "redSqrt works only with red numbers"),
                this.red._verify1(this),
                this.red.sqrt(this)
              );
            }),
            (o.prototype.redInvm = function () {
              return (
                n(this.red, "redInvm works only with red numbers"),
                this.red._verify1(this),
                this.red.invm(this)
              );
            }),
            (o.prototype.redNeg = function () {
              return (
                n(this.red, "redNeg works only with red numbers"),
                this.red._verify1(this),
                this.red.neg(this)
              );
            }),
            (o.prototype.redPow = function (e) {
              return (
                n(this.red && !e.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, e)
              );
            }));
          var P = { k256: null, p224: null, p192: null, p25519: null };
          function _(e, t) {
            ((this.name = e),
              (this.p = new o(t, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function O() {
            _.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function j() {
            _.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function x() {
            _.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function C() {
            _.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function A(e) {
            if ("string" === typeof e) {
              var t = o._prime(e);
              ((this.m = t.p), (this.prime = t));
            } else
              (n(e.gtn(1), "modulus must be greater than 1"),
                (this.m = e),
                (this.prime = null));
          }
          function S(e) {
            (A.call(this, e),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((_.prototype._tmp = function () {
            var e = new o(null);
            return ((e.words = new Array(Math.ceil(this.n / 13))), e);
          }),
            (_.prototype.ireduce = function (e) {
              var t,
                r = e;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (t = r.bitLength()));
              } while (t > this.n);
              var n = t < this.n ? -1 : r.ucmp(this.p);
              return (
                0 === n
                  ? ((r.words[0] = 0), (r.length = 1))
                  : n > 0
                    ? r.isub(this.p)
                    : void 0 !== r.strip
                      ? r.strip()
                      : r._strip(),
                r
              );
            }),
            (_.prototype.split = function (e, t) {
              e.iushrn(this.n, 0, t);
            }),
            (_.prototype.imulK = function (e) {
              return e.imul(this.k);
            }),
            i(O, _),
            (O.prototype.split = function (e, t) {
              for (
                var r = 4194303, n = Math.min(e.length, 9), i = 0;
                i < n;
                i++
              )
                t.words[i] = e.words[i];
              if (((t.length = n), e.length <= 9))
                return ((e.words[0] = 0), void (e.length = 1));
              var o = e.words[9];
              for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
                var s = 0 | e.words[i];
                ((e.words[i - 10] = ((s & r) << 4) | (o >>> 22)), (o = s));
              }
              ((o >>>= 22),
                (e.words[i - 10] = o),
                0 === o && e.length > 10 ? (e.length -= 10) : (e.length -= 9));
            }),
            (O.prototype.imulK = function (e) {
              ((e.words[e.length] = 0),
                (e.words[e.length + 1] = 0),
                (e.length += 2));
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 0 | e.words[r];
                ((t += 977 * n),
                  (e.words[r] = 67108863 & t),
                  (t = 64 * n + ((t / 67108864) | 0)));
              }
              return (
                0 === e.words[e.length - 1] &&
                  (e.length--, 0 === e.words[e.length - 1] && e.length--),
                e
              );
            }),
            i(j, _),
            i(x, _),
            i(C, _),
            (C.prototype.imulK = function (e) {
              for (var t = 0, r = 0; r < e.length; r++) {
                var n = 19 * (0 | e.words[r]) + t,
                  i = 67108863 & n;
                ((n >>>= 26), (e.words[r] = i), (t = n));
              }
              return (0 !== t && (e.words[e.length++] = t), e);
            }),
            (o._prime = function (e) {
              if (P[e]) return P[e];
              var t;
              if ("k256" === e) t = new O();
              else if ("p224" === e) t = new j();
              else if ("p192" === e) t = new x();
              else {
                if ("p25519" !== e) throw new Error("Unknown prime " + e);
                t = new C();
              }
              return ((P[e] = t), t);
            }),
            (A.prototype._verify1 = function (e) {
              (n(0 === e.negative, "red works only with positives"),
                n(e.red, "red works only with red numbers"));
            }),
            (A.prototype._verify2 = function (e, t) {
              (n(
                0 === (e.negative | t.negative),
                "red works only with positives",
              ),
                n(e.red && e.red === t.red, "red works only with red numbers"));
            }),
            (A.prototype.imod = function (e) {
              return this.prime
                ? this.prime.ireduce(e)._forceRed(this)
                : (l(e, e.umod(this.m)._forceRed(this)), e);
            }),
            (A.prototype.neg = function (e) {
              return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
            }),
            (A.prototype.add = function (e, t) {
              this._verify2(e, t);
              var r = e.add(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (A.prototype.iadd = function (e, t) {
              this._verify2(e, t);
              var r = e.iadd(t);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (A.prototype.sub = function (e, t) {
              this._verify2(e, t);
              var r = e.sub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (A.prototype.isub = function (e, t) {
              this._verify2(e, t);
              var r = e.isub(t);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (A.prototype.shl = function (e, t) {
              return (this._verify1(e), this.imod(e.ushln(t)));
            }),
            (A.prototype.imul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.imul(t)));
            }),
            (A.prototype.mul = function (e, t) {
              return (this._verify2(e, t), this.imod(e.mul(t)));
            }),
            (A.prototype.isqr = function (e) {
              return this.imul(e, e.clone());
            }),
            (A.prototype.sqr = function (e) {
              return this.mul(e, e);
            }),
            (A.prototype.sqrt = function (e) {
              if (e.isZero()) return e.clone();
              var t = this.m.andln(3);
              if ((n(t % 2 === 1), 3 === t)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(e, r);
              }
              var i = this.m.subn(1),
                s = 0;
              while (!i.isZero() && 0 === i.andln(1)) (s++, i.iushrn(1));
              n(!i.isZero());
              var u = new o(1).toRed(this),
                a = u.redNeg(),
                h = this.m.subn(1).iushrn(1),
                l = this.m.bitLength();
              l = new o(2 * l * l).toRed(this);
              while (0 !== this.pow(l, h).cmp(a)) l.redIAdd(a);
              var c = this.pow(l, i),
                f = this.pow(e, i.addn(1).iushrn(1)),
                d = this.pow(e, i),
                m = s;
              while (0 !== d.cmp(u)) {
                for (var p = d, g = 0; 0 !== p.cmp(u); g++) p = p.redSqr();
                n(g < m);
                var b = this.pow(c, new o(1).iushln(m - g - 1));
                ((f = f.redMul(b)),
                  (c = b.redSqr()),
                  (d = d.redMul(c)),
                  (m = g));
              }
              return f;
            }),
            (A.prototype.invm = function (e) {
              var t = e._invmp(this.m);
              return 0 !== t.negative
                ? ((t.negative = 0), this.imod(t).redNeg())
                : this.imod(t);
            }),
            (A.prototype.pow = function (e, t) {
              if (t.isZero()) return new o(1).toRed(this);
              if (0 === t.cmpn(1)) return e.clone();
              var r = 4,
                n = new Array(1 << r);
              ((n[0] = new o(1).toRed(this)), (n[1] = e));
              for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], e);
              var s = n[0],
                u = 0,
                a = 0,
                h = t.bitLength() % 26;
              for (0 === h && (h = 26), i = t.length - 1; i >= 0; i--) {
                for (var l = t.words[i], c = h - 1; c >= 0; c--) {
                  var f = (l >> c) & 1;
                  (s !== n[0] && (s = this.sqr(s)),
                    0 !== f || 0 !== u
                      ? ((u <<= 1),
                        (u |= f),
                        a++,
                        (a === r || (0 === i && 0 === c)) &&
                          ((s = this.mul(s, n[u])), (a = 0), (u = 0)))
                      : (a = 0));
                }
                h = 26;
              }
              return s;
            }),
            (A.prototype.convertTo = function (e) {
              var t = e.umod(this.m);
              return t === e ? t.clone() : t;
            }),
            (A.prototype.convertFrom = function (e) {
              var t = e.clone();
              return ((t.red = null), t);
            }),
            (o.mont = function (e) {
              return new S(e);
            }),
            i(S, A),
            (S.prototype.convertTo = function (e) {
              return this.imod(e.ushln(this.shift));
            }),
            (S.prototype.convertFrom = function (e) {
              var t = this.imod(e.mul(this.rinv));
              return ((t.red = null), t);
            }),
            (S.prototype.imul = function (e, t) {
              if (e.isZero() || t.isZero())
                return ((e.words[0] = 0), (e.length = 1), e);
              var r = e.imul(t),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                o = i;
              return (
                i.cmp(this.m) >= 0
                  ? (o = i.isub(this.m))
                  : i.cmpn(0) < 0 && (o = i.iadd(this.m)),
                o._forceRed(this)
              );
            }),
            (S.prototype.mul = function (e, t) {
              if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
              var r = e.mul(t),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                s = i;
              return (
                i.cmp(this.m) >= 0
                  ? (s = i.isub(this.m))
                  : i.cmpn(0) < 0 && (s = i.iadd(this.m)),
                s._forceRed(this)
              );
            }),
            (S.prototype.invm = function (e) {
              var t = this.imod(e._invmp(this.m).mul(this.r2));
              return t._forceRed(this);
            }));
        })(e, this);
      }).call(this, r(20)(e));
    },
    6909: function (e, t, r) {
      const n = r(46).Buffer;
      e.exports = class BufferPipe {
        constructor(e) {
          (void 0 === e && (e = n.from([])),
            (this.buffer = e),
            (this._bytesRead = 0),
            (this._bytesWrote = 0));
        }
        read(e) {
          this._bytesRead += e;
          const t = this.buffer.slice(0, e);
          return ((this.buffer = this.buffer.slice(e)), t);
        }
        write(e) {
          ((e = n.from(e)),
            (this._bytesWrote += e.length),
            (this.buffer = n.concat([this.buffer, e])));
        }
        get end() {
          return !this.buffer.length;
        }
        get bytesRead() {
          return this._bytesRead;
        }
        get bytesWrote() {
          return this._bytesWrote;
        }
      };
    },
    6911: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(11378),
        i = r(11379),
        o = r(11380),
        s = r(11381),
        u = r(11398),
        a = r(11399);
      ((t.compare = n.compare),
        (t.concat = i.concat),
        (t.equals = o.equals),
        (t.fromString = s.fromString),
        (t.toString = u.toString),
        (t.xor = a.xor));
    },
    6912: function (e, t, r) {
      "use strict";
      var n = r(11382);
      function i(e, t, r, n) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: r },
          decoder: { decode: n },
        };
      }
      const o = i(
          "utf8",
          "u",
          (e) => {
            const t = new TextDecoder("utf8");
            return "u" + t.decode(e);
          },
          (e) => {
            const t = new TextEncoder();
            return t.encode(e.substring(1));
          },
        ),
        s = i(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
            return t;
          },
          (e) => {
            e = e.substring(1);
            const t = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          },
        ),
        u = {
          utf8: o,
          "utf-8": o,
          hex: n.bases.base16,
          latin1: s,
          ascii: s,
          binary: s,
          ...n.bases,
        };
      e.exports = u;
    },
    6913: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.rfc4648({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        o = n.rfc4648({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        s = n.rfc4648({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        u = n.rfc4648({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        a = n.rfc4648({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        h = n.rfc4648({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        l = n.rfc4648({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        c = n.rfc4648({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        f = n.rfc4648({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      ((t.base32 = i),
        (t.base32hex = a),
        (t.base32hexpad = l),
        (t.base32hexpadupper = c),
        (t.base32hexupper = h),
        (t.base32pad = s),
        (t.base32padupper = u),
        (t.base32upper = o),
        (t.base32z = f));
    },
    6914: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(3405);
      const i = n.baseX({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        o = n.baseX({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      ((t.base58btc = i), (t.base58flickr = o));
    },
    6915: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(4873),
        i = r(4589),
        o = r(6914),
        s = r(6913),
        u = r(3622);
      class CID {
        constructor(e, t, r, n) {
          ((this.code = t),
            (this.version = e),
            (this.multihash = r),
            (this.bytes = n),
            (this.byteOffset = n.byteOffset),
            (this.byteLength = n.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: g,
              byteLength: g,
              code: p,
              version: p,
              multihash: p,
              bytes: p,
              _baseCache: g,
              asCID: g,
            }));
        }
        toV0() {
          switch (this.version) {
            case 0:
              return this;
            default: {
              const { code: e, multihash: t } = this;
              if (e !== c)
                throw new Error("Cannot convert a non dag-pb CID to CIDv0");
              if (t.code !== f)
                throw new Error(
                  "Cannot convert non sha2-256 multihash CID to CIDv0",
                );
              return CID.createV0(t);
            }
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              const { code: e, digest: t } = this.multihash,
                r = i.create(e, t);
              return CID.createV1(this.code, r);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`,
              );
          }
        }
        equals(e) {
          return (
            e &&
            this.code === e.code &&
            this.version === e.version &&
            i.equals(this.multihash, e.multihash)
          );
        }
        toString(e) {
          const { bytes: t, version: r, _baseCache: n } = this;
          switch (r) {
            case 0:
              return h(t, n, e || o.base58btc.encoder);
            default:
              return l(t, n, e || s.base32.encoder);
          }
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(e) {
          return (y(/^0\.0/, v), !(!e || (!e[m] && e.asCID !== e)));
        }
        get toBaseEncodedString() {
          throw new Error("Deprecated, use .toString()");
        }
        get codec() {
          throw new Error(
            '"codec" property is deprecated, use integer "code" property instead',
          );
        }
        get buffer() {
          throw new Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead",
          );
        }
        get multibaseName() {
          throw new Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw new Error('"prefix" property is deprecated');
        }
        static asCID(e) {
          if (e instanceof CID) return e;
          if (null != e && e.asCID === e) {
            const { version: t, code: r, multihash: n, bytes: i } = e;
            return new CID(t, r, n, i || d(t, r, n.bytes));
          }
          if (null != e && !0 === e[m]) {
            const { version: t, multihash: r, code: n } = e,
              o = i.decode(r);
            return CID.create(t, n, o);
          }
          return null;
        }
        static create(e, t, r) {
          if ("number" !== typeof t)
            throw new Error("String codecs are no longer supported");
          switch (e) {
            case 0:
              if (t !== c)
                throw new Error(
                  `Version 0 CID must use dag-pb (code: ${c}) block encoding`,
                );
              return new CID(e, t, r, r.bytes);
            case 1: {
              const n = d(e, t, r.bytes);
              return new CID(e, t, r, n);
            }
            default:
              throw new Error("Invalid version");
          }
        }
        static createV0(e) {
          return CID.create(0, c, e);
        }
        static createV1(e, t) {
          return CID.create(1, e, t);
        }
        static decode(e) {
          const [t, r] = CID.decodeFirst(e);
          if (r.length) throw new Error("Incorrect length");
          return t;
        }
        static decodeFirst(e) {
          const t = CID.inspectBytes(e),
            r = t.size - t.multihashSize,
            n = u.coerce(e.subarray(r, r + t.multihashSize));
          if (n.byteLength !== t.multihashSize)
            throw new Error("Incorrect length");
          const o = n.subarray(t.multihashSize - t.digestSize),
            s = new i.Digest(t.multihashCode, t.digestSize, o, n),
            a = 0 === t.version ? CID.createV0(s) : CID.createV1(t.codec, s);
          return [a, e.subarray(t.size)];
        }
        static inspectBytes(e) {
          let t = 0;
          const r = () => {
            const [r, i] = n.decode(e.subarray(t));
            return ((t += i), r);
          };
          let i = r(),
            o = c;
          if (
            (18 === i ? ((i = 0), (t = 0)) : 1 === i && (o = r()),
            0 !== i && 1 !== i)
          )
            throw new RangeError("Invalid CID version " + i);
          const s = t,
            u = r(),
            a = r(),
            h = t + a,
            l = h - s;
          return {
            version: i,
            codec: o,
            multihashCode: u,
            digestSize: a,
            multihashSize: l,
            size: h,
          };
        }
        static parse(e, t) {
          const [r, n] = a(e, t),
            i = CID.decode(n);
          return (i._baseCache.set(r, e), i);
        }
      }
      const a = (e, t) => {
          switch (e[0]) {
            case "Q": {
              const r = t || o.base58btc;
              return [
                o.base58btc.prefix,
                r.decode(`${o.base58btc.prefix}${e}`),
              ];
            }
            case o.base58btc.prefix: {
              const r = t || o.base58btc;
              return [o.base58btc.prefix, r.decode(e)];
            }
            case s.base32.prefix: {
              const r = t || s.base32;
              return [s.base32.prefix, r.decode(e)];
            }
            default:
              if (null == t)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided",
                );
              return [e[0], t.decode(e)];
          }
        },
        h = (e, t, r) => {
          const { prefix: n } = r;
          if (n !== o.base58btc.prefix)
            throw Error(`Cannot string encode V0 in ${r.name} encoding`);
          const i = t.get(n);
          if (null == i) {
            const i = r.encode(e).slice(1);
            return (t.set(n, i), i);
          }
          return i;
        },
        l = (e, t, r) => {
          const { prefix: n } = r,
            i = t.get(n);
          if (null == i) {
            const i = r.encode(e);
            return (t.set(n, i), i);
          }
          return i;
        },
        c = 112,
        f = 18,
        d = (e, t, r) => {
          const i = n.encodingLength(e),
            o = i + n.encodingLength(t),
            s = new Uint8Array(o + r.byteLength);
          return (n.encodeTo(e, s, 0), n.encodeTo(t, s, i), s.set(r, o), s);
        },
        m = Symbol.for("@ipld/js-cid/CID"),
        p = { writable: !1, configurable: !1, enumerable: !0 },
        g = { writable: !1, enumerable: !1, configurable: !1 },
        b = "0.0.0-dev",
        y = (e, t) => {
          if (!e.test(b)) throw new Error(t);
          console.warn(t);
        },
        v =
          "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n";
      t.CID = CID;
    },
  },
]);
