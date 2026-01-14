(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [403],
  {
    11366: function (e, t, r) {
      (function (t) {
        const i = r(5870),
          { derivePath: n } = r(11367),
          o = r(234),
          a = r(2925),
          s = "m/44'/397'/0'",
          c = (e) =>
            l(void 0 !== e ? i.entropyToMnemonic(e) : i.generateMnemonic()),
          d = (e) =>
            e
              .trim()
              .split(/\s+/)
              .map((e) => e.toLowerCase())
              .join(" "),
          l = (e, r) => {
            const c = i.mnemonicToSeed(d(e)),
              { key: l } = n(r || s, c.toString("hex")),
              p = a.sign.keyPair.fromSeed(l),
              u = "ed25519:" + o.encode(t.from(p.publicKey)),
              h = "ed25519:" + o.encode(t.from(p.secretKey));
            return { seedPhrase: e, secretKey: h, publicKey: u };
          },
          p = (e, t) => {
            const r = l(e);
            return t.indexOf(r.publicKey) < 0 ? {} : r;
          };
        e.exports = {
          KEY_DERIVATION_PATH: s,
          generateSeedPhrase: c,
          normalizeSeedPhrase: d,
          parseSeedPhrase: l,
          findSeedPhraseKey: p,
        };
      }).call(this, r(2).Buffer);
    },
    11367: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.derivePath =
            t.isValidPath =
            t.getPublicKey =
            t.getMasterKeyFromSeed =
              void 0));
        const i = r(2828),
          n = r(2925),
          o = r(11368),
          a = "ed25519 seed",
          s = 2147483648;
        t.getMasterKeyFromSeed = (t) => {
          const r = i("sha512", a),
            n = r.update(e.from(t, "hex")).digest(),
            o = n.slice(0, 32),
            s = n.slice(32);
          return { key: o, chainCode: s };
        };
        const c = (t, r) => {
          let { key: n, chainCode: o } = t;
          const a = e.allocUnsafe(4);
          a.writeUInt32BE(r, 0);
          const s = e.concat([e.alloc(1, 0), n, a]),
            c = i("sha512", o).update(s).digest(),
            d = c.slice(0, 32),
            l = c.slice(32);
          return { key: d, chainCode: l };
        };
        ((t.getPublicKey = function (t, r) {
          void 0 === r && (r = !0);
          const i = n.sign.keyPair.fromSeed(t),
            o = i.secretKey.subarray(32),
            a = e.alloc(1, 0);
          return r ? e.concat([a, e.from(o)]) : e.from(o);
        }),
          (t.isValidPath = (e) =>
            !!o.pathRegex.test(e) &&
            !e.split("/").slice(1).map(o.replaceDerive).some(isNaN)),
          (t.derivePath = function (e, r, i) {
            if ((void 0 === i && (i = s), !t.isValidPath(e)))
              throw new Error("Invalid derivation path");
            const { key: n, chainCode: a } = t.getMasterKeyFromSeed(r),
              d = e
                .split("/")
                .slice(1)
                .map(o.replaceDerive)
                .map((e) => parseInt(e, 10));
            return d.reduce((e, t) => c(e, t + i), { key: n, chainCode: a });
          }));
      }).call(this, r(2).Buffer);
    },
    11368: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.replaceDerive = t.pathRegex = void 0),
        (t.pathRegex = new RegExp("^m(\\/[0-9]+')+$")),
        (t.replaceDerive = (e) => e.replace("'", "")));
    },
  },
]);
