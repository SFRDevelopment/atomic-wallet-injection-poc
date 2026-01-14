(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [84],
  {
    1286: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "logger/5.8.0";
    },
    1289: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "properties/5.8.0";
    },
    1291: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "rlp/5.8.0";
    },
    1298: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AddressZero = void 0));
      e.AddressZero = "0x0000000000000000000000000000000000000000";
    },
    1299: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Zero =
          e.WeiPerEther =
          e.Two =
          e.One =
          e.NegativeOne =
          e.MinInt256 =
          e.MaxUint256 =
          e.MaxInt256 =
            void 0));
      var n = r(62);
      ((e.NegativeOne = n.BigNumber.from(-1)),
        (e.Zero = n.BigNumber.from(0)),
        (e.One = n.BigNumber.from(1)),
        (e.Two = n.BigNumber.from(2)),
        (e.WeiPerEther = n.BigNumber.from("1000000000000000000")),
        (e.MaxUint256 = n.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )),
        (e.MinInt256 = n.BigNumber.from(
          "-0x8000000000000000000000000000000000000000000000000000000000000000",
        )),
        (e.MaxInt256 = n.BigNumber.from(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        )));
    },
    1300: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HashZero = void 0));
      e.HashZero =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    1301: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EtherSymbol = void 0));
      e.EtherSymbol = "Ξ";
    },
    1303: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.formatBytes32String = f),
        (e.parseBytes32String = s));
      var n = r(264),
        i = r(32),
        o = r(265);
      function f(t) {
        const e = (0, o.toUtf8Bytes)(t);
        if (e.length > 31)
          throw new Error("bytes32 string must be less than 32 bytes");
        return (0, i.hexlify)((0, i.concat)([e, n.HashZero]).slice(0, 32));
      }
      function s(t) {
        const e = (0, i.arrayify)(t);
        if (32 !== e.length)
          throw new Error("invalid bytes32 - not 32 bytes long");
        if (0 !== e[31])
          throw new Error("invalid bytes32 string - no null terminator");
        let r = 31;
        while (0 === e[r - 1]) r--;
        return (0, o.toUtf8String)(e.slice(0, r));
      }
    },
    1304: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "strings/5.8.0";
    },
    1305: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e._nameprepTableA1 = g),
        (e._nameprepTableB2 = A),
        (e._nameprepTableC = y),
        (e.nameprep = v));
      var n = r(265);
      function i(t) {
        if (t.length % 4 !== 0) throw new Error("bad data");
        let e = [];
        for (let r = 0; r < t.length; r += 4)
          e.push(parseInt(t.substring(r, r + 4), 16));
        return e;
      }
      function o(t, e) {
        e ||
          (e = function (t) {
            return [parseInt(t, 16)];
          });
        let r = 0,
          n = {};
        return (
          t.split(",").forEach((t) => {
            let i = t.split(":");
            ((r += parseInt(i[0], 16)), (n[r] = e(i[1])));
          }),
          n
        );
      }
      function f(t) {
        let e = 0;
        return t.split(",").map((t) => {
          let r = t.split("-");
          1 === r.length ? (r[1] = "0") : "" === r[1] && (r[1] = "1");
          let n = e + parseInt(r[0], 16);
          return ((e = parseInt(r[1], 16)), { l: n, h: e });
        });
      }
      function s(t, e) {
        let r = 0;
        for (let n = 0; n < e.length; n++) {
          let i = e[n];
          if (
            ((r += i.l), t >= r && t <= r + i.h && (t - r) % (i.d || 1) === 0)
          ) {
            if (i.e && -1 !== i.e.indexOf(t - r)) continue;
            return i;
          }
        }
        return null;
      }
      const u = f(
          "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d",
        ),
        a = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
          .split(",")
          .map((t) => parseInt(t, 16)),
        h = [
          { h: 25, s: 32, l: 65 },
          { h: 30, s: 32, e: [23], l: 127 },
          { h: 54, s: 1, e: [48], l: 64, d: 2 },
          { h: 14, s: 1, l: 57, d: 2 },
          { h: 44, s: 1, l: 17, d: 2 },
          { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
          { h: 16, s: 1, l: 68, d: 2 },
          { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
          { h: 26, s: 32, e: [17], l: 435 },
          { h: 22, s: 1, l: 71, d: 2 },
          { h: 15, s: 80, l: 40 },
          { h: 31, s: 32, l: 16 },
          { h: 32, s: 1, l: 80, d: 2 },
          { h: 52, s: 1, l: 42, d: 2 },
          { h: 12, s: 1, l: 55, d: 2 },
          { h: 40, s: 1, e: [38], l: 15, d: 2 },
          { h: 14, s: 1, l: 48, d: 2 },
          { h: 37, s: 48, l: 49 },
          { h: 148, s: 1, l: 6351, d: 2 },
          { h: 88, s: 1, l: 160, d: 2 },
          { h: 15, s: 16, l: 704 },
          { h: 25, s: 26, l: 854 },
          { h: 25, s: 32, l: 55915 },
          { h: 37, s: 40, l: 1247 },
          { h: 25, s: -119711, l: 53248 },
          { h: 25, s: -119763, l: 52 },
          { h: 25, s: -119815, l: 52 },
          { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
          { h: 25, s: -119919, l: 52 },
          { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
          { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
          { h: 25, s: -120075, l: 52 },
          { h: 25, s: -120127, l: 52 },
          { h: 25, s: -120179, l: 52 },
          { h: 25, s: -120231, l: 52 },
          { h: 25, s: -120283, l: 52 },
          { h: 25, s: -120335, l: 52 },
          { h: 24, s: -119543, e: [17], l: 56 },
          { h: 24, s: -119601, e: [17], l: 58 },
          { h: 24, s: -119659, e: [17], l: 58 },
          { h: 24, s: -119717, e: [17], l: 58 },
          { h: 24, s: -119775, e: [17], l: 58 },
        ],
        l = o(
          "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3",
        ),
        d = o(
          "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7",
        ),
        c = o(
          "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
          i,
        ),
        p = f(
          "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001",
        );
      function m(t) {
        return t.reduce(
          (t, e) => (
            e.forEach((e) => {
              t.push(e);
            }),
            t
          ),
          [],
        );
      }
      function g(t) {
        return !!s(t, u);
      }
      function A(t) {
        let e = s(t, h);
        if (e) return [t + e.s];
        let r = l[t];
        if (r) return r;
        let n = d[t];
        if (n) return [t + n[0]];
        let i = c[t];
        return i || null;
      }
      function y(t) {
        return !!s(t, p);
      }
      function v(t) {
        if (t.match(/^[a-z0-9-]*$/i) && t.length <= 59) return t.toLowerCase();
        let e = (0, n.toUtf8CodePoints)(t);
        ((e = m(
          e.map((t) => {
            if (a.indexOf(t) >= 0) return [];
            if (t >= 65024 && t <= 65039) return [];
            let e = A(t);
            return e || [t];
          }),
        )),
          (e = (0, n.toUtf8CodePoints)(
            (0, n._toUtf8String)(e),
            n.UnicodeNormalizationForm.NFKC,
          )),
          e.forEach((t) => {
            if (y(t)) throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
          }),
          e.forEach((t) => {
            if (g(t)) throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
          }));
        let r = (0, n._toUtf8String)(e);
        if (
          "-" === r.substring(0, 1) ||
          "--" === r.substring(2, 4) ||
          "-" === r.substring(r.length - 1)
        )
          throw new Error("invalid hyphen");
        return r;
      }
    },
    1308: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "_TypedDataEncoder", {
          enumerable: !0,
          get: function () {
            return f.TypedDataEncoder;
          },
        }),
        Object.defineProperty(e, "dnsEncode", {
          enumerable: !0,
          get: function () {
            return i.dnsEncode;
          },
        }),
        Object.defineProperty(e, "ensNormalize", {
          enumerable: !0,
          get: function () {
            return i.ensNormalize;
          },
        }),
        Object.defineProperty(e, "hashMessage", {
          enumerable: !0,
          get: function () {
            return o.hashMessage;
          },
        }),
        Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function () {
            return n.id;
          },
        }),
        Object.defineProperty(e, "isValidName", {
          enumerable: !0,
          get: function () {
            return i.isValidName;
          },
        }),
        Object.defineProperty(e, "messagePrefix", {
          enumerable: !0,
          get: function () {
            return o.messagePrefix;
          },
        }),
        Object.defineProperty(e, "namehash", {
          enumerable: !0,
          get: function () {
            return i.namehash;
          },
        }));
      var n = r(483),
        i = r(1309),
        o = r(1314),
        f = r(1315);
    },
    1309: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.dnsEncode = g),
        (e.ensNormalize = c),
        (e.isValidName = p),
        (e.namehash = m));
      var n = r(32),
        i = r(137),
        o = r(88),
        f = r(36),
        s = r(484),
        u = r(1310);
      const a = new f.Logger(s.version),
        h = new Uint8Array(32);
      function l(t) {
        if (0 === t.length)
          throw new Error("invalid ENS name; empty component");
        return t;
      }
      function d(t) {
        const e = (0, i.toUtf8Bytes)((0, u.ens_normalize)(t)),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let i = 0; i < e.length; i++) {
          const t = e[i];
          46 === t && (r.push(l(e.slice(n, i))), (n = i + 1));
        }
        if (n >= e.length) throw new Error("invalid ENS name; empty component");
        return (r.push(l(e.slice(n))), r);
      }
      function c(t) {
        return d(t)
          .map((t) => (0, i.toUtf8String)(t))
          .join(".");
      }
      function p(t) {
        try {
          return 0 !== d(t).length;
        } catch (e) {}
        return !1;
      }
      function m(t) {
        "string" !== typeof t &&
          a.throwArgumentError("invalid ENS name; not a string", "name", t);
        let e = h;
        const r = d(t);
        while (r.length)
          e = (0, o.keccak256)((0, n.concat)([e, (0, o.keccak256)(r.pop())]));
        return (0, n.hexlify)(e);
      }
      function g(t) {
        return (
          (0, n.hexlify)(
            (0, n.concat)(
              d(t).map((t) => {
                if (t.length > 63)
                  throw new Error(
                    "invalid DNS encoded entry; length exceeds 63 bytes",
                  );
                const e = new Uint8Array(t.length + 1);
                return (e.set(t, 1), (e[0] = e.length - 1), e);
              }),
            ),
          ) + "00"
        );
      }
      h.fill(0);
    },
    1310: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ens_normalize = g),
        (e.ens_normalize_post_check = m));
      var n = r(137),
        i = r(1311),
        o = r(485);
      const f = (0, i.getData)(),
        s = new Set((0, o.read_member_array)(f)),
        u = new Set((0, o.read_member_array)(f)),
        a = (0, o.read_mapped_map)(f),
        h = (0, o.read_emoji_trie)(f),
        l = 45,
        d = 95;
      function c(t) {
        return (0, n.toUtf8CodePoints)(t);
      }
      function p(t) {
        return t.filter((t) => 65039 != t);
      }
      function m(t) {
        for (let r of t.split(".")) {
          let t = c(r);
          try {
            for (let e = t.lastIndexOf(d) - 1; e >= 0; e--)
              if (t[e] !== d)
                throw new Error("underscore only allowed at start");
            if (
              t.length >= 4 &&
              t.every((t) => t < 128) &&
              t[2] === l &&
              t[3] === l
            )
              throw new Error("invalid label extension");
          } catch (e) {
            throw new Error(`Invalid label "${r}": ${e.message}`);
          }
        }
        return t;
      }
      function g(t) {
        return m(A(t, p));
      }
      function A(t, e) {
        let r = c(t).reverse(),
          n = [];
        while (r.length) {
          let t = v(r);
          if (t) {
            n.push(...e(t));
            continue;
          }
          let i = r.pop();
          if (s.has(i)) {
            n.push(i);
            continue;
          }
          if (u.has(i)) continue;
          let o = a[i];
          if (!o)
            throw new Error(
              "Disallowed codepoint: 0x" + i.toString(16).toUpperCase(),
            );
          n.push(...o);
        }
        return m(y(String.fromCodePoint(...n)));
      }
      function y(t) {
        return t.normalize("NFC");
      }
      function v(t, e) {
        var r;
        let n,
          i,
          o = h,
          f = [],
          s = t.length;
        e && (e.length = 0);
        while (s) {
          let u = t[--s];
          if (
            ((o =
              null === (r = o.branches.find((t) => t.set.has(u))) ||
              void 0 === r
                ? void 0
                : r.node),
            !o)
          )
            break;
          if (o.save) i = u;
          else if (o.check && u === i) break;
          (f.push(u),
            o.fe0f && (f.push(65039), s > 0 && 65039 == t[s - 1] && s--),
            o.valid &&
              ((n = f.slice()),
              2 == o.valid && n.splice(1, 1),
              e && e.push(...t.slice(s).reverse()),
              (t.length = s)));
        }
        return n;
      }
    },
    1311: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.getData = o));
      var n = r(1312),
        i = r(485);
      function o() {
        return (0, i.read_compressed_payload)(
          (0, n.decode)(
            "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",
          ),
        );
      }
    },
    1314: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hashMessage = s),
        (e.messagePrefix = void 0));
      var n = r(32),
        i = r(88),
        o = r(137);
      const f = (e.messagePrefix = "Ethereum Signed Message:\n");
      function s(t) {
        return (
          "string" === typeof t && (t = (0, o.toUtf8Bytes)(t)),
          (0, i.keccak256)(
            (0, n.concat)([
              (0, o.toUtf8Bytes)(f),
              (0, o.toUtf8Bytes)(String(t.length)),
              t,
            ]),
          )
        );
      }
    },
    1315: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TypedDataEncoder = void 0));
      var n = r(136),
        i = r(62),
        o = r(32),
        f = r(88),
        s = r(63),
        u = r(36),
        a = r(484),
        h = r(483),
        l = function (t, e, r, n) {
          function i(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function f(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function s(t) {
              try {
                u(n["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              t.done ? r(t.value) : i(t.value).then(f, s);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      const d = new u.Logger(a.version),
        c = new Uint8Array(32);
      c.fill(0);
      const p = i.BigNumber.from(-1),
        m = i.BigNumber.from(0),
        g = i.BigNumber.from(1),
        A = i.BigNumber.from(
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        );
      function y(t) {
        const e = (0, o.arrayify)(t),
          r = e.length % 32;
        return r ? (0, o.hexConcat)([e, c.slice(r)]) : (0, o.hexlify)(e);
      }
      const v = (0, o.hexZeroPad)(g.toHexString(), 32),
        b = (0, o.hexZeroPad)(m.toHexString(), 32),
        w = {
          name: "string",
          version: "string",
          chainId: "uint256",
          verifyingContract: "address",
          salt: "bytes32",
        },
        M = ["name", "version", "chainId", "verifyingContract", "salt"];
      function E(t) {
        return function (e) {
          return (
            "string" !== typeof e &&
              d.throwArgumentError(
                "invalid domain value for " + JSON.stringify(t),
                "domain." + t,
                e,
              ),
            e
          );
        };
      }
      const I = {
        name: E("name"),
        version: E("version"),
        chainId: function (t) {
          try {
            return i.BigNumber.from(t).toString();
          } catch (e) {}
          return d.throwArgumentError(
            'invalid domain value for "chainId"',
            "domain.chainId",
            t,
          );
        },
        verifyingContract: function (t) {
          try {
            return (0, n.getAddress)(t).toLowerCase();
          } catch (e) {}
          return d.throwArgumentError(
            'invalid domain value "verifyingContract"',
            "domain.verifyingContract",
            t,
          );
        },
        salt: function (t) {
          try {
            const e = (0, o.arrayify)(t);
            if (32 !== e.length) throw new Error("bad length");
            return (0, o.hexlify)(e);
          } catch (e) {}
          return d.throwArgumentError(
            'invalid domain value "salt"',
            "domain.salt",
            t,
          );
        },
      };
      function B(t) {
        {
          const e = t.match(/^(u?)int(\d*)$/);
          if (e) {
            const r = "" === e[1],
              n = parseInt(e[2] || "256");
            (n % 8 !== 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
              d.throwArgumentError("invalid numeric width", "type", t);
            const f = A.mask(r ? n - 1 : n),
              s = r ? f.add(g).mul(p) : m;
            return function (e) {
              const r = i.BigNumber.from(e);
              return (
                (r.lt(s) || r.gt(f)) &&
                  d.throwArgumentError(
                    "value out-of-bounds for " + t,
                    "value",
                    e,
                  ),
                (0, o.hexZeroPad)(r.toTwos(256).toHexString(), 32)
              );
            };
          }
        }
        {
          const e = t.match(/^bytes(\d+)$/);
          if (e) {
            const r = parseInt(e[1]);
            return (
              (0 === r || r > 32 || e[1] !== String(r)) &&
                d.throwArgumentError("invalid bytes width", "type", t),
              function (e) {
                const n = (0, o.arrayify)(e);
                return (
                  n.length !== r &&
                    d.throwArgumentError("invalid length for " + t, "value", e),
                  y(e)
                );
              }
            );
          }
        }
        switch (t) {
          case "address":
            return function (t) {
              return (0, o.hexZeroPad)((0, n.getAddress)(t), 32);
            };
          case "bool":
            return function (t) {
              return t ? v : b;
            };
          case "bytes":
            return function (t) {
              return (0, f.keccak256)(t);
            };
          case "string":
            return function (t) {
              return (0, h.id)(t);
            };
        }
        return null;
      }
      function S(t, e) {
        return `${t}(${e
          .map((t) => {
            let { name: e, type: r } = t;
            return r + " " + e;
          })
          .join(",")})`;
      }
      class TypedDataEncoder {
        constructor(t) {
          ((0, s.defineReadOnly)(
            this,
            "types",
            Object.freeze((0, s.deepCopy)(t)),
          ),
            (0, s.defineReadOnly)(this, "_encoderCache", {}),
            (0, s.defineReadOnly)(this, "_types", {}));
          const e = {},
            r = {},
            n = {};
          Object.keys(t).forEach((t) => {
            ((e[t] = {}), (r[t] = []), (n[t] = {}));
          });
          for (const f in t) {
            const n = {};
            t[f].forEach((i) => {
              (n[i.name] &&
                d.throwArgumentError(
                  `duplicate variable name ${JSON.stringify(i.name)} in ${JSON.stringify(f)}`,
                  "types",
                  t,
                ),
                (n[i.name] = !0));
              const o = i.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
              o === f &&
                d.throwArgumentError(
                  "circular type reference to " + JSON.stringify(o),
                  "types",
                  t,
                );
              const s = B(o);
              s ||
                (r[o] ||
                  d.throwArgumentError(
                    "unknown type " + JSON.stringify(o),
                    "types",
                    t,
                  ),
                r[o].push(f),
                (e[f][o] = !0));
            });
          }
          const i = Object.keys(r).filter((t) => 0 === r[t].length);
          function o(i, f) {
            (f[i] &&
              d.throwArgumentError(
                "circular type reference to " + JSON.stringify(i),
                "types",
                t,
              ),
              (f[i] = !0),
              Object.keys(e[i]).forEach((t) => {
                r[t] &&
                  (o(t, f),
                  Object.keys(f).forEach((e) => {
                    n[e][t] = !0;
                  }));
              }),
              delete f[i]);
          }
          (0 === i.length
            ? d.throwArgumentError("missing primary type", "types", t)
            : i.length > 1 &&
              d.throwArgumentError(
                "ambiguous primary types or unused types: " +
                  i.map((t) => JSON.stringify(t)).join(", "),
                "types",
                t,
              ),
            (0, s.defineReadOnly)(this, "primaryType", i[0]),
            o(this.primaryType, {}));
          for (const f in n) {
            const e = Object.keys(n[f]);
            (e.sort(),
              (this._types[f] =
                S(f, t[f]) + e.map((e) => S(e, t[e])).join("")));
          }
        }
        getEncoder(t) {
          let e = this._encoderCache[t];
          return (e || (e = this._encoderCache[t] = this._getEncoder(t)), e);
        }
        _getEncoder(t) {
          {
            const e = B(t);
            if (e) return e;
          }
          const e = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (e) {
            const t = e[1],
              r = this.getEncoder(t),
              n = parseInt(e[3]);
            return (e) => {
              n >= 0 &&
                e.length !== n &&
                d.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e,
                );
              let i = e.map(r);
              return (
                this._types[t] && (i = i.map(f.keccak256)),
                (0, f.keccak256)((0, o.hexConcat)(i))
              );
            };
          }
          const r = this.types[t];
          if (r) {
            const e = (0, h.id)(this._types[t]);
            return (t) => {
              const n = r.map((e) => {
                let { name: r, type: n } = e;
                const i = this.getEncoder(n)(t[r]);
                return this._types[n] ? (0, f.keccak256)(i) : i;
              });
              return (n.unshift(e), (0, o.hexConcat)(n));
            };
          }
          return d.throwArgumentError("unknown type: " + t, "type", t);
        }
        encodeType(t) {
          const e = this._types[t];
          return (
            e ||
              d.throwArgumentError(
                "unknown type: " + JSON.stringify(t),
                "name",
                t,
              ),
            e
          );
        }
        encodeData(t, e) {
          return this.getEncoder(t)(e);
        }
        hashStruct(t, e) {
          return (0, f.keccak256)(this.encodeData(t, e));
        }
        encode(t) {
          return this.encodeData(this.primaryType, t);
        }
        hash(t) {
          return this.hashStruct(this.primaryType, t);
        }
        _visit(t, e, r) {
          {
            const n = B(t);
            if (n) return r(t, e);
          }
          const n = t.match(/^(.*)(\x5b(\d*)\x5d)$/);
          if (n) {
            const t = n[1],
              i = parseInt(n[3]);
            return (
              i >= 0 &&
                e.length !== i &&
                d.throwArgumentError(
                  "array length mismatch; expected length ${ arrayLength }",
                  "value",
                  e,
                ),
              e.map((e) => this._visit(t, e, r))
            );
          }
          const i = this.types[t];
          return i
            ? i.reduce((t, n) => {
                let { name: i, type: o } = n;
                return ((t[i] = this._visit(o, e[i], r)), t);
              }, {})
            : d.throwArgumentError("unknown type: " + t, "type", t);
        }
        visit(t, e) {
          return this._visit(this.primaryType, t, e);
        }
        static from(t) {
          return new TypedDataEncoder(t);
        }
        static getPrimaryType(t) {
          return TypedDataEncoder.from(t).primaryType;
        }
        static hashStruct(t, e, r) {
          return TypedDataEncoder.from(e).hashStruct(t, r);
        }
        static hashDomain(t) {
          const e = [];
          for (const r in t) {
            const n = w[r];
            (n ||
              d.throwArgumentError(
                "invalid typed-data domain key: " + JSON.stringify(r),
                "domain",
                t,
              ),
              e.push({ name: r, type: n }));
          }
          return (
            e.sort((t, e) => M.indexOf(t.name) - M.indexOf(e.name)),
            TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
          );
        }
        static encode(t, e, r) {
          return (0, o.hexConcat)([
            "0x1901",
            TypedDataEncoder.hashDomain(t),
            TypedDataEncoder.from(e).hash(r),
          ]);
        }
        static hash(t, e, r) {
          return (0, f.keccak256)(TypedDataEncoder.encode(t, e, r));
        }
        static resolveNames(t, e, r, n) {
          return l(this, void 0, void 0, function* () {
            t = (0, s.shallowCopy)(t);
            const i = {};
            t.verifyingContract &&
              !(0, o.isHexString)(t.verifyingContract, 20) &&
              (i[t.verifyingContract] = "0x");
            const f = TypedDataEncoder.from(e);
            f.visit(
              r,
              (t, e) => (
                "address" !== t || (0, o.isHexString)(e, 20) || (i[e] = "0x"),
                e
              ),
            );
            for (const t in i) i[t] = yield n(t);
            return (
              t.verifyingContract &&
                i[t.verifyingContract] &&
                (t.verifyingContract = i[t.verifyingContract]),
              (r = f.visit(r, (t, e) => ("address" === t && i[e] ? i[e] : e))),
              { domain: t, value: r }
            );
          });
        }
        static getPayload(t, e, r) {
          TypedDataEncoder.hashDomain(t);
          const n = {},
            f = [];
          M.forEach((e) => {
            const r = t[e];
            null != r && ((n[e] = I[e](r)), f.push({ name: e, type: w[e] }));
          });
          const u = TypedDataEncoder.from(e),
            a = (0, s.shallowCopy)(e);
          return (
            a.EIP712Domain
              ? d.throwArgumentError(
                  "types must not contain EIP712Domain type",
                  "types.EIP712Domain",
                  e,
                )
              : (a.EIP712Domain = f),
            u.encode(r),
            {
              types: a,
              domain: n,
              primaryType: u.primaryType,
              message: u.visit(r, (t, e) => {
                if (t.match(/^bytes(\d*)/))
                  return (0, o.hexlify)((0, o.arrayify)(e));
                if (t.match(/^u?int/)) return i.BigNumber.from(e).toString();
                switch (t) {
                  case "address":
                    return e.toLowerCase();
                  case "bool":
                    return !!e;
                  case "string":
                    return (
                      "string" !== typeof e &&
                        d.throwArgumentError("invalid string", "value", e),
                      e
                    );
                }
                return d.throwArgumentError("unsupported type", "type", t);
              }),
            }
          );
        }
      }
      e.TypedDataEncoder = TypedDataEncoder;
    },
    1320: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TransactionTypes = void 0),
        (e.accessListify = I),
        (e.computeAddress = b),
        (e.parse = D),
        (e.recoverAddress = w),
        (e.serialize = P));
      var n = r(136),
        i = r(62),
        o = r(32),
        f = r(264),
        s = r(88),
        u = r(63),
        a = c(r(480)),
        h = r(1321),
        l = r(36),
        d = r(1329);
      function c(t, e) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            n = new WeakMap();
        return (c = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            o,
            f = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return f;
          if ((i = e ? n : r)) {
            if (i.has(t)) return i.get(t);
            i.set(t, f);
          }
          for (const r in t)
            "default" !== r &&
              {}.hasOwnProperty.call(t, r) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, r)) &&
              (o.get || o.set)
                ? i(f, r, o)
                : (f[r] = t[r]));
          return f;
        })(t, e);
      }
      const p = new l.Logger(d.version);
      var m;
      function g(t) {
        return "0x" === t ? null : (0, n.getAddress)(t);
      }
      function A(t) {
        return "0x" === t ? f.Zero : i.BigNumber.from(t);
      }
      (function (t) {
        ((t[(t["legacy"] = 0)] = "legacy"),
          (t[(t["eip2930"] = 1)] = "eip2930"),
          (t[(t["eip1559"] = 2)] = "eip1559"));
      })(m || (e.TransactionTypes = m = {}));
      const y = [
          { name: "nonce", maxLength: 32, numeric: !0 },
          { name: "gasPrice", maxLength: 32, numeric: !0 },
          { name: "gasLimit", maxLength: 32, numeric: !0 },
          { name: "to", length: 20 },
          { name: "value", maxLength: 32, numeric: !0 },
          { name: "data" },
        ],
        v = {
          chainId: !0,
          data: !0,
          gasLimit: !0,
          gasPrice: !0,
          nonce: !0,
          to: !0,
          type: !0,
          value: !0,
        };
      function b(t) {
        const e = (0, h.computePublicKey)(t);
        return (0, n.getAddress)(
          (0, o.hexDataSlice)((0, s.keccak256)((0, o.hexDataSlice)(e, 1)), 12),
        );
      }
      function w(t, e) {
        return b((0, h.recoverPublicKey)((0, o.arrayify)(t), e));
      }
      function M(t, e) {
        const r = (0, o.stripZeros)(i.BigNumber.from(t).toHexString());
        return (
          r.length > 32 &&
            p.throwArgumentError(
              "invalid length for " + e,
              "transaction:" + e,
              t,
            ),
          r
        );
      }
      function E(t, e) {
        return {
          address: (0, n.getAddress)(t),
          storageKeys: (e || []).map(
            (e, r) => (
              32 !== (0, o.hexDataLength)(e) &&
                p.throwArgumentError(
                  "invalid access list storageKey",
                  `accessList[${t}:${r}]`,
                  e,
                ),
              e.toLowerCase()
            ),
          ),
        };
      }
      function I(t) {
        if (Array.isArray(t))
          return t.map((t, e) =>
            Array.isArray(t)
              ? (t.length > 2 &&
                  p.throwArgumentError(
                    "access list expected to be [ address, storageKeys[] ]",
                    `value[${e}]`,
                    t,
                  ),
                E(t[0], t[1]))
              : E(t.address, t.storageKeys),
          );
        const e = Object.keys(t).map((e) => {
          const r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return E(e, Object.keys(r).sort());
        });
        return (e.sort((t, e) => t.address.localeCompare(e.address)), e);
      }
      function B(t) {
        return I(t).map((t) => [t.address, t.storageKeys]);
      }
      function S(t, e) {
        if (null != t.gasPrice) {
          const e = i.BigNumber.from(t.gasPrice),
            r = i.BigNumber.from(t.maxFeePerGas || 0);
          e.eq(r) ||
            p.throwArgumentError(
              "mismatch EIP-1559 gasPrice != maxFeePerGas",
              "tx",
              { gasPrice: e, maxFeePerGas: r },
            );
        }
        const r = [
          M(t.chainId || 0, "chainId"),
          M(t.nonce || 0, "nonce"),
          M(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
          M(t.maxFeePerGas || 0, "maxFeePerGas"),
          M(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, n.getAddress)(t.to) : "0x",
          M(t.value || 0, "value"),
          t.data || "0x",
          B(t.accessList || []),
        ];
        if (e) {
          const t = (0, o.splitSignature)(e);
          (r.push(M(t.recoveryParam, "recoveryParam")),
            r.push((0, o.stripZeros)(t.r)),
            r.push((0, o.stripZeros)(t.s)));
        }
        return (0, o.hexConcat)(["0x02", a.encode(r)]);
      }
      function N(t, e) {
        const r = [
          M(t.chainId || 0, "chainId"),
          M(t.nonce || 0, "nonce"),
          M(t.gasPrice || 0, "gasPrice"),
          M(t.gasLimit || 0, "gasLimit"),
          null != t.to ? (0, n.getAddress)(t.to) : "0x",
          M(t.value || 0, "value"),
          t.data || "0x",
          B(t.accessList || []),
        ];
        if (e) {
          const t = (0, o.splitSignature)(e);
          (r.push(M(t.recoveryParam, "recoveryParam")),
            r.push((0, o.stripZeros)(t.r)),
            r.push((0, o.stripZeros)(t.s)));
        }
        return (0, o.hexConcat)(["0x01", a.encode(r)]);
      }
      function C(t, e) {
        (0, u.checkProperties)(t, v);
        const r = [];
        y.forEach(function (e) {
          let n = t[e.name] || [];
          const i = {};
          (e.numeric && (i.hexPad = "left"),
            (n = (0, o.arrayify)((0, o.hexlify)(n, i))),
            e.length &&
              n.length !== e.length &&
              n.length > 0 &&
              p.throwArgumentError(
                "invalid length for " + e.name,
                "transaction:" + e.name,
                n,
              ),
            e.maxLength &&
              ((n = (0, o.stripZeros)(n)),
              n.length > e.maxLength &&
                p.throwArgumentError(
                  "invalid length for " + e.name,
                  "transaction:" + e.name,
                  n,
                )),
            r.push((0, o.hexlify)(n)));
        });
        let n = 0;
        if (
          (null != t.chainId
            ? ((n = t.chainId),
              "number" !== typeof n &&
                p.throwArgumentError(
                  "invalid transaction.chainId",
                  "transaction",
                  t,
                ))
            : e &&
              !(0, o.isBytesLike)(e) &&
              e.v > 28 &&
              (n = Math.floor((e.v - 35) / 2)),
          0 !== n && (r.push((0, o.hexlify)(n)), r.push("0x"), r.push("0x")),
          !e)
        )
          return a.encode(r);
        const i = (0, o.splitSignature)(e);
        let f = 27 + i.recoveryParam;
        return (
          0 !== n
            ? (r.pop(),
              r.pop(),
              r.pop(),
              (f += 2 * n + 8),
              i.v > 28 &&
                i.v !== f &&
                p.throwArgumentError(
                  "transaction.chainId/signature.v mismatch",
                  "signature",
                  e,
                ))
            : i.v !== f &&
              p.throwArgumentError(
                "transaction.chainId/signature.v mismatch",
                "signature",
                e,
              ),
          r.push((0, o.hexlify)(f)),
          r.push((0, o.stripZeros)((0, o.arrayify)(i.r))),
          r.push((0, o.stripZeros)((0, o.arrayify)(i.s))),
          a.encode(r)
        );
      }
      function P(t, e) {
        if (null == t.type || 0 === t.type)
          return (
            null != t.accessList &&
              p.throwArgumentError(
                "untyped transactions do not support accessList; include type: 1",
                "transaction",
                t,
              ),
            C(t, e)
          );
        switch (t.type) {
          case 1:
            return N(t, e);
          case 2:
            return S(t, e);
          default:
            break;
        }
        return p.throwError(
          "unsupported transaction type: " + t.type,
          l.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "serializeTransaction", transactionType: t.type },
        );
      }
      function x(t, e, r) {
        try {
          const r = A(e[0]).toNumber();
          if (0 !== r && 1 !== r) throw new Error("bad recid");
          t.v = r;
        } catch (n) {
          p.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
        }
        ((t.r = (0, o.hexZeroPad)(e[1], 32)),
          (t.s = (0, o.hexZeroPad)(e[2], 32)));
        try {
          const e = (0, s.keccak256)(r(t));
          t.from = w(e, { r: t.r, s: t.s, recoveryParam: t.v });
        } catch (n) {}
      }
      function O(t) {
        const e = a.decode(t.slice(1));
        9 !== e.length &&
          12 !== e.length &&
          p.throwArgumentError(
            "invalid component count for transaction type: 2",
            "payload",
            (0, o.hexlify)(t),
          );
        const r = A(e[2]),
          n = A(e[3]),
          i = {
            type: 2,
            chainId: A(e[0]).toNumber(),
            nonce: A(e[1]).toNumber(),
            maxPriorityFeePerGas: r,
            maxFeePerGas: n,
            gasPrice: null,
            gasLimit: A(e[4]),
            to: g(e[5]),
            value: A(e[6]),
            data: e[7],
            accessList: I(e[8]),
          };
        return (
          9 === e.length ||
            ((i.hash = (0, s.keccak256)(t)), x(i, e.slice(9), S)),
          i
        );
      }
      function R(t) {
        const e = a.decode(t.slice(1));
        8 !== e.length &&
          11 !== e.length &&
          p.throwArgumentError(
            "invalid component count for transaction type: 1",
            "payload",
            (0, o.hexlify)(t),
          );
        const r = {
          type: 1,
          chainId: A(e[0]).toNumber(),
          nonce: A(e[1]).toNumber(),
          gasPrice: A(e[2]),
          gasLimit: A(e[3]),
          to: g(e[4]),
          value: A(e[5]),
          data: e[6],
          accessList: I(e[7]),
        };
        return (
          8 === e.length ||
            ((r.hash = (0, s.keccak256)(t)), x(r, e.slice(8), N)),
          r
        );
      }
      function _(t) {
        const e = a.decode(t);
        9 !== e.length &&
          6 !== e.length &&
          p.throwArgumentError("invalid raw transaction", "rawTransaction", t);
        const r = {
          nonce: A(e[0]).toNumber(),
          gasPrice: A(e[1]),
          gasLimit: A(e[2]),
          to: g(e[3]),
          value: A(e[4]),
          data: e[5],
          chainId: 0,
        };
        if (6 === e.length) return r;
        try {
          r.v = i.BigNumber.from(e[6]).toNumber();
        } catch (n) {
          return r;
        }
        if (
          ((r.r = (0, o.hexZeroPad)(e[7], 32)),
          (r.s = (0, o.hexZeroPad)(e[8], 32)),
          i.BigNumber.from(r.r).isZero() && i.BigNumber.from(r.s).isZero())
        )
          ((r.chainId = r.v), (r.v = 0));
        else {
          ((r.chainId = Math.floor((r.v - 35) / 2)),
            r.chainId < 0 && (r.chainId = 0));
          let i = r.v - 27;
          const f = e.slice(0, 6);
          0 !== r.chainId &&
            (f.push((0, o.hexlify)(r.chainId)),
            f.push("0x"),
            f.push("0x"),
            (i -= 2 * r.chainId + 8));
          const u = (0, s.keccak256)(a.encode(f));
          try {
            r.from = w(u, {
              r: (0, o.hexlify)(r.r),
              s: (0, o.hexlify)(r.s),
              recoveryParam: i,
            });
          } catch (n) {}
          r.hash = (0, s.keccak256)(t);
        }
        return ((r.type = null), r);
      }
      function D(t) {
        const e = (0, o.arrayify)(t);
        if (e[0] > 127) return _(e);
        switch (e[0]) {
          case 1:
            return R(e);
          case 2:
            return O(e);
          default:
            break;
        }
        return p.throwError(
          "unsupported transaction type: " + e[0],
          l.Logger.errors.UNSUPPORTED_OPERATION,
          { operation: "parseTransaction", transactionType: e[0] },
        );
      }
    },
    1321: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SigningKey = void 0),
        (e.computePublicKey = d),
        (e.recoverPublicKey = l));
      var n = r(1322),
        i = r(32),
        o = r(63),
        f = r(36),
        s = r(1328);
      const u = new f.Logger(s.version);
      let a = null;
      function h() {
        return (a || (a = new n.EC("secp256k1")), a);
      }
      class SigningKey {
        constructor(t) {
          ((0, o.defineReadOnly)(this, "curve", "secp256k1"),
            (0, o.defineReadOnly)(this, "privateKey", (0, i.hexlify)(t)),
            32 !== (0, i.hexDataLength)(this.privateKey) &&
              u.throwArgumentError(
                "invalid private key",
                "privateKey",
                "[[ REDACTED ]]",
              ));
          const e = h().keyFromPrivate((0, i.arrayify)(this.privateKey));
          ((0, o.defineReadOnly)(
            this,
            "publicKey",
            "0x" + e.getPublic(!1, "hex"),
          ),
            (0, o.defineReadOnly)(
              this,
              "compressedPublicKey",
              "0x" + e.getPublic(!0, "hex"),
            ),
            (0, o.defineReadOnly)(this, "_isSigningKey", !0));
        }
        _addPoint(t) {
          const e = h().keyFromPublic((0, i.arrayify)(this.publicKey)),
            r = h().keyFromPublic((0, i.arrayify)(t));
          return "0x" + e.pub.add(r.pub).encodeCompressed("hex");
        }
        signDigest(t) {
          const e = h().keyFromPrivate((0, i.arrayify)(this.privateKey)),
            r = (0, i.arrayify)(t);
          32 !== r.length &&
            u.throwArgumentError("bad digest length", "digest", t);
          const n = e.sign(r, { canonical: !0 });
          return (0, i.splitSignature)({
            recoveryParam: n.recoveryParam,
            r: (0, i.hexZeroPad)("0x" + n.r.toString(16), 32),
            s: (0, i.hexZeroPad)("0x" + n.s.toString(16), 32),
          });
        }
        computeSharedSecret(t) {
          const e = h().keyFromPrivate((0, i.arrayify)(this.privateKey)),
            r = h().keyFromPublic((0, i.arrayify)(d(t)));
          return (0, i.hexZeroPad)(
            "0x" + e.derive(r.getPublic()).toString(16),
            32,
          );
        }
        static isSigningKey(t) {
          return !(!t || !t._isSigningKey);
        }
      }
      function l(t, e) {
        const r = (0, i.splitSignature)(e),
          n = { r: (0, i.arrayify)(r.r), s: (0, i.arrayify)(r.s) };
        return (
          "0x" +
          h()
            .recoverPubKey((0, i.arrayify)(t), n, r.recoveryParam)
            .encode("hex", !1)
        );
      }
      function d(t, e) {
        const r = (0, i.arrayify)(t);
        if (32 === r.length) {
          const t = new SigningKey(r);
          return e
            ? "0x" + h().keyFromPrivate(r).getPublic(!0, "hex")
            : t.publicKey;
        }
        return 33 === r.length
          ? e
            ? (0, i.hexlify)(r)
            : "0x" + h().keyFromPublic(r).getPublic(!1, "hex")
          : 65 === r.length
            ? e
              ? "0x" + h().keyFromPublic(r).getPublic(!0, "hex")
              : (0, i.hexlify)(r)
            : u.throwArgumentError(
                "invalid public or private key",
                "key",
                "[REDACTED]",
              );
      }
      e.SigningKey = SigningKey;
    },
    1322: function (t, e, r) {
      "use strict";
      (function (t) {
        var n = r(0);
        (Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EC = void 0));
        var i = n(r(477)),
          o = n(r(43));
        "undefined" !== typeof globalThis
          ? globalThis
          : "undefined" !== typeof window
            ? window
            : "undefined" !== typeof t || ("undefined" !== typeof self && self);
        function f(t, e, r) {
          return (
            (r = {
              path: e,
              exports: {},
              require: function (t, e) {
                return s(t, void 0 === e || null === e ? r.path : e);
              },
            }),
            t(r, r.exports),
            r.exports
          );
        }
        function s() {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
          );
        }
        var u = a;
        function a(t, e) {
          if (!t) throw new Error(e || "Assertion failed");
        }
        a.equal = function (t, e, r) {
          if (t != e)
            throw new Error(r || "Assertion failed: " + t + " != " + e);
        };
        var h = f(function (t, e) {
            var r = e;
            function n(t, e) {
              if (Array.isArray(t)) return t.slice();
              if (!t) return [];
              var r = [];
              if ("string" !== typeof t) {
                for (var n = 0; n < t.length; n++) r[n] = 0 | t[n];
                return r;
              }
              if ("hex" === e) {
                ((t = t.replace(/[^a-z0-9]+/gi, "")),
                  t.length % 2 !== 0 && (t = "0" + t));
                for (n = 0; n < t.length; n += 2)
                  r.push(parseInt(t[n] + t[n + 1], 16));
              } else
                for (n = 0; n < t.length; n++) {
                  var i = t.charCodeAt(n),
                    o = i >> 8,
                    f = 255 & i;
                  o ? r.push(o, f) : r.push(f);
                }
              return r;
            }
            function i(t) {
              return 1 === t.length ? "0" + t : t;
            }
            function o(t) {
              for (var e = "", r = 0; r < t.length; r++)
                e += i(t[r].toString(16));
              return e;
            }
            ((r.toArray = n),
              (r.zero2 = i),
              (r.toHex = o),
              (r.encode = function (t, e) {
                return "hex" === e ? o(t) : t;
              }));
          }),
          l = f(function (t, e) {
            var r = e;
            function n(t, e, r) {
              var n,
                i = new Array(Math.max(t.bitLength(), r) + 1);
              for (n = 0; n < i.length; n += 1) i[n] = 0;
              var o = 1 << (e + 1),
                f = t.clone();
              for (n = 0; n < i.length; n++) {
                var s,
                  u = f.andln(o - 1);
                (f.isOdd()
                  ? ((s = u > (o >> 1) - 1 ? (o >> 1) - u : u), f.isubn(s))
                  : (s = 0),
                  (i[n] = s),
                  f.iushrn(1));
              }
              return i;
            }
            function o(t, e) {
              var r = [[], []];
              ((t = t.clone()), (e = e.clone()));
              var n,
                i = 0,
                o = 0;
              while (t.cmpn(-i) > 0 || e.cmpn(-o) > 0) {
                var f,
                  s,
                  u = (t.andln(3) + i) & 3,
                  a = (e.andln(3) + o) & 3;
                (3 === u && (u = -1),
                  3 === a && (a = -1),
                  0 === (1 & u)
                    ? (f = 0)
                    : ((n = (t.andln(7) + i) & 7),
                      (f = (3 !== n && 5 !== n) || 2 !== a ? u : -u)),
                  r[0].push(f),
                  0 === (1 & a)
                    ? (s = 0)
                    : ((n = (e.andln(7) + o) & 7),
                      (s = (3 !== n && 5 !== n) || 2 !== u ? a : -a)),
                  r[1].push(s),
                  2 * i === f + 1 && (i = 1 - i),
                  2 * o === s + 1 && (o = 1 - o),
                  t.iushrn(1),
                  e.iushrn(1));
              }
              return r;
            }
            function f(t, e, r) {
              var n = "_" + e;
              t.prototype[e] = function () {
                return void 0 !== this[n] ? this[n] : (this[n] = r.call(this));
              };
            }
            function s(t) {
              return "string" === typeof t ? r.toArray(t, "hex") : t;
            }
            function a(t) {
              return new i.default(t, "hex", "le");
            }
            ((r.assert = u),
              (r.toArray = h.toArray),
              (r.zero2 = h.zero2),
              (r.toHex = h.toHex),
              (r.encode = h.encode),
              (r.getNAF = n),
              (r.getJSF = o),
              (r.cachedProperty = f),
              (r.parseBytes = s),
              (r.intFromLE = a));
          }),
          d = l.getNAF,
          c = l.getJSF,
          p = l.assert;
        function m(t, e) {
          ((this.type = t),
            (this.p = new i.default(e.p, 16)),
            (this.red = e.prime
              ? i.default.red(e.prime)
              : i.default.mont(this.p)),
            (this.zero = new i.default(0).toRed(this.red)),
            (this.one = new i.default(1).toRed(this.red)),
            (this.two = new i.default(2).toRed(this.red)),
            (this.n = e.n && new i.default(e.n, 16)),
            (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
            (this._wnafT1 = new Array(4)),
            (this._wnafT2 = new Array(4)),
            (this._wnafT3 = new Array(4)),
            (this._wnafT4 = new Array(4)),
            (this._bitLength = this.n ? this.n.bitLength() : 0));
          var r = this.n && this.p.div(this.n);
          !r || r.cmpn(100) > 0
            ? (this.redN = null)
            : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
        }
        var g = m;
        function A(t, e) {
          ((this.curve = t), (this.type = e), (this.precomputed = null));
        }
        ((m.prototype.point = function () {
          throw new Error("Not implemented");
        }),
          (m.prototype.validate = function () {
            throw new Error("Not implemented");
          }),
          (m.prototype._fixedNafMul = function (t, e) {
            p(t.precomputed);
            var r = t._getDoubles(),
              n = d(e, 1, this._bitLength),
              i = (1 << (r.step + 1)) - (r.step % 2 === 0 ? 2 : 1);
            i /= 3;
            var o,
              f,
              s = [];
            for (o = 0; o < n.length; o += r.step) {
              f = 0;
              for (var u = o + r.step - 1; u >= o; u--) f = (f << 1) + n[u];
              s.push(f);
            }
            for (
              var a = this.jpoint(null, null, null),
                h = this.jpoint(null, null, null),
                l = i;
              l > 0;
              l--
            ) {
              for (o = 0; o < s.length; o++)
                ((f = s[o]),
                  f === l
                    ? (h = h.mixedAdd(r.points[o]))
                    : f === -l && (h = h.mixedAdd(r.points[o].neg())));
              a = a.add(h);
            }
            return a.toP();
          }),
          (m.prototype._wnafMul = function (t, e) {
            var r = 4,
              n = t._getNAFPoints(r);
            r = n.wnd;
            for (
              var i = n.points,
                o = d(e, r, this._bitLength),
                f = this.jpoint(null, null, null),
                s = o.length - 1;
              s >= 0;
              s--
            ) {
              for (var u = 0; s >= 0 && 0 === o[s]; s--) u++;
              if ((s >= 0 && u++, (f = f.dblp(u)), s < 0)) break;
              var a = o[s];
              (p(0 !== a),
                (f =
                  "affine" === t.type
                    ? a > 0
                      ? f.mixedAdd(i[(a - 1) >> 1])
                      : f.mixedAdd(i[(-a - 1) >> 1].neg())
                    : a > 0
                      ? f.add(i[(a - 1) >> 1])
                      : f.add(i[(-a - 1) >> 1].neg())));
            }
            return "affine" === t.type ? f.toP() : f;
          }),
          (m.prototype._wnafMulAdd = function (t, e, r, n, i) {
            var o,
              f,
              s,
              u = this._wnafT1,
              a = this._wnafT2,
              h = this._wnafT3,
              l = 0;
            for (o = 0; o < n; o++) {
              s = e[o];
              var p = s._getNAFPoints(t);
              ((u[o] = p.wnd), (a[o] = p.points));
            }
            for (o = n - 1; o >= 1; o -= 2) {
              var m = o - 1,
                g = o;
              if (1 === u[m] && 1 === u[g]) {
                var A = [e[m], null, null, e[g]];
                0 === e[m].y.cmp(e[g].y)
                  ? ((A[1] = e[m].add(e[g])),
                    (A[2] = e[m].toJ().mixedAdd(e[g].neg())))
                  : 0 === e[m].y.cmp(e[g].y.redNeg())
                    ? ((A[1] = e[m].toJ().mixedAdd(e[g])),
                      (A[2] = e[m].add(e[g].neg())))
                    : ((A[1] = e[m].toJ().mixedAdd(e[g])),
                      (A[2] = e[m].toJ().mixedAdd(e[g].neg())));
                var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                  v = c(r[m], r[g]);
                for (
                  l = Math.max(v[0].length, l),
                    h[m] = new Array(l),
                    h[g] = new Array(l),
                    f = 0;
                  f < l;
                  f++
                ) {
                  var b = 0 | v[0][f],
                    w = 0 | v[1][f];
                  ((h[m][f] = y[3 * (b + 1) + (w + 1)]),
                    (h[g][f] = 0),
                    (a[m] = A));
                }
              } else
                ((h[m] = d(r[m], u[m], this._bitLength)),
                  (h[g] = d(r[g], u[g], this._bitLength)),
                  (l = Math.max(h[m].length, l)),
                  (l = Math.max(h[g].length, l)));
            }
            var M = this.jpoint(null, null, null),
              E = this._wnafT4;
            for (o = l; o >= 0; o--) {
              var I = 0;
              while (o >= 0) {
                var B = !0;
                for (f = 0; f < n; f++)
                  ((E[f] = 0 | h[f][o]), 0 !== E[f] && (B = !1));
                if (!B) break;
                (I++, o--);
              }
              if ((o >= 0 && I++, (M = M.dblp(I)), o < 0)) break;
              for (f = 0; f < n; f++) {
                var S = E[f];
                0 !== S &&
                  (S > 0
                    ? (s = a[f][(S - 1) >> 1])
                    : S < 0 && (s = a[f][(-S - 1) >> 1].neg()),
                  (M = "affine" === s.type ? M.mixedAdd(s) : M.add(s)));
              }
            }
            for (o = 0; o < n; o++) a[o] = null;
            return i ? M : M.toP();
          }),
          (m.BasePoint = A),
          (A.prototype.eq = function () {
            throw new Error("Not implemented");
          }),
          (A.prototype.validate = function () {
            return this.curve.validate(this);
          }),
          (m.prototype.decodePoint = function (t, e) {
            t = l.toArray(t, e);
            var r = this.p.byteLength();
            if (
              (4 === t[0] || 6 === t[0] || 7 === t[0]) &&
              t.length - 1 === 2 * r
            ) {
              6 === t[0]
                ? p(t[t.length - 1] % 2 === 0)
                : 7 === t[0] && p(t[t.length - 1] % 2 === 1);
              var n = this.point(t.slice(1, 1 + r), t.slice(1 + r, 1 + 2 * r));
              return n;
            }
            if ((2 === t[0] || 3 === t[0]) && t.length - 1 === r)
              return this.pointFromX(t.slice(1, 1 + r), 3 === t[0]);
            throw new Error("Unknown point format");
          }),
          (A.prototype.encodeCompressed = function (t) {
            return this.encode(t, !0);
          }),
          (A.prototype._encode = function (t) {
            var e = this.curve.p.byteLength(),
              r = this.getX().toArray("be", e);
            return t
              ? [this.getY().isEven() ? 2 : 3].concat(r)
              : [4].concat(r, this.getY().toArray("be", e));
          }),
          (A.prototype.encode = function (t, e) {
            return l.encode(this._encode(e), t);
          }),
          (A.prototype.precompute = function (t) {
            if (this.precomputed) return this;
            var e = { doubles: null, naf: null, beta: null };
            return (
              (e.naf = this._getNAFPoints(8)),
              (e.doubles = this._getDoubles(4, t)),
              (e.beta = this._getBeta()),
              (this.precomputed = e),
              this
            );
          }),
          (A.prototype._hasDoubles = function (t) {
            if (!this.precomputed) return !1;
            var e = this.precomputed.doubles;
            return (
              !!e && e.points.length >= Math.ceil((t.bitLength() + 1) / e.step)
            );
          }),
          (A.prototype._getDoubles = function (t, e) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles;
            for (var r = [this], n = this, i = 0; i < e; i += t) {
              for (var o = 0; o < t; o++) n = n.dbl();
              r.push(n);
            }
            return { step: t, points: r };
          }),
          (A.prototype._getNAFPoints = function (t) {
            if (this.precomputed && this.precomputed.naf)
              return this.precomputed.naf;
            for (
              var e = [this],
                r = (1 << t) - 1,
                n = 1 === r ? null : this.dbl(),
                i = 1;
              i < r;
              i++
            )
              e[i] = e[i - 1].add(n);
            return { wnd: t, points: e };
          }),
          (A.prototype._getBeta = function () {
            return null;
          }),
          (A.prototype.dblp = function (t) {
            for (var e = this, r = 0; r < t; r++) e = e.dbl();
            return e;
          }));
        var y = f(function (t) {
            "function" === typeof Object.create
              ? (t.exports = function (t, e) {
                  e &&
                    ((t.super_ = e),
                    (t.prototype = Object.create(e.prototype, {
                      constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })));
                })
              : (t.exports = function (t, e) {
                  if (e) {
                    t.super_ = e;
                    var r = function () {};
                    ((r.prototype = e.prototype),
                      (t.prototype = new r()),
                      (t.prototype.constructor = t));
                  }
                });
          }),
          v = l.assert;
        function b(t) {
          (g.call(this, "short", t),
            (this.a = new i.default(t.a, 16).toRed(this.red)),
            (this.b = new i.default(t.b, 16).toRed(this.red)),
            (this.tinv = this.two.redInvm()),
            (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
            (this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3)),
            (this.endo = this._getEndomorphism(t)),
            (this._endoWnafT1 = new Array(4)),
            (this._endoWnafT2 = new Array(4)));
        }
        y(b, g);
        var w = b;
        function Point(t, e, r, n) {
          (g.BasePoint.call(this, t, "affine"),
            null === e && null === r
              ? ((this.x = null), (this.y = null), (this.inf = !0))
              : ((this.x = new i.default(e, 16)),
                (this.y = new i.default(r, 16)),
                n &&
                  (this.x.forceRed(this.curve.red),
                  this.y.forceRed(this.curve.red)),
                this.x.red || (this.x = this.x.toRed(this.curve.red)),
                this.y.red || (this.y = this.y.toRed(this.curve.red)),
                (this.inf = !1)));
        }
        function M(t, e, r, n) {
          (g.BasePoint.call(this, t, "jacobian"),
            null === e && null === r && null === n
              ? ((this.x = this.curve.one),
                (this.y = this.curve.one),
                (this.z = new i.default(0)))
              : ((this.x = new i.default(e, 16)),
                (this.y = new i.default(r, 16)),
                (this.z = new i.default(n, 16))),
            this.x.red || (this.x = this.x.toRed(this.curve.red)),
            this.y.red || (this.y = this.y.toRed(this.curve.red)),
            this.z.red || (this.z = this.z.toRed(this.curve.red)),
            (this.zOne = this.z === this.curve.one));
        }
        ((b.prototype._getEndomorphism = function (t) {
          if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
            var e, r, n;
            if (t.beta) e = new i.default(t.beta, 16).toRed(this.red);
            else {
              var o = this._getEndoRoots(this.p);
              ((e = o[0].cmp(o[1]) < 0 ? o[0] : o[1]), (e = e.toRed(this.red)));
            }
            if (t.lambda) r = new i.default(t.lambda, 16);
            else {
              var f = this._getEndoRoots(this.n);
              0 === this.g.mul(f[0]).x.cmp(this.g.x.redMul(e))
                ? (r = f[0])
                : ((r = f[1]),
                  v(0 === this.g.mul(r).x.cmp(this.g.x.redMul(e))));
            }
            return (
              (n = t.basis
                ? t.basis.map(function (t) {
                    return {
                      a: new i.default(t.a, 16),
                      b: new i.default(t.b, 16),
                    };
                  })
                : this._getEndoBasis(r)),
              { beta: e, lambda: r, basis: n }
            );
          }
        }),
          (b.prototype._getEndoRoots = function (t) {
            var e = t === this.p ? this.red : i.default.mont(t),
              r = new i.default(2).toRed(e).redInvm(),
              n = r.redNeg(),
              o = new i.default(3).toRed(e).redNeg().redSqrt().redMul(r),
              f = n.redAdd(o).fromRed(),
              s = n.redSub(o).fromRed();
            return [f, s];
          }),
          (b.prototype._getEndoBasis = function (t) {
            var e,
              r,
              n,
              o,
              f,
              s,
              u,
              a,
              h,
              l = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
              d = t,
              c = this.n.clone(),
              p = new i.default(1),
              m = new i.default(0),
              g = new i.default(0),
              A = new i.default(1),
              y = 0;
            while (0 !== d.cmpn(0)) {
              var v = c.div(d);
              ((a = c.sub(v.mul(d))), (h = g.sub(v.mul(p))));
              var b = A.sub(v.mul(m));
              if (!n && a.cmp(l) < 0)
                ((e = u.neg()), (r = p), (n = a.neg()), (o = h));
              else if (n && 2 === ++y) break;
              ((u = a), (c = d), (d = a), (g = p), (p = h), (A = m), (m = b));
            }
            ((f = a.neg()), (s = h));
            var w = n.sqr().add(o.sqr()),
              M = f.sqr().add(s.sqr());
            return (
              M.cmp(w) >= 0 && ((f = e), (s = r)),
              n.negative && ((n = n.neg()), (o = o.neg())),
              f.negative && ((f = f.neg()), (s = s.neg())),
              [
                { a: n, b: o },
                { a: f, b: s },
              ]
            );
          }),
          (b.prototype._endoSplit = function (t) {
            var e = this.endo.basis,
              r = e[0],
              n = e[1],
              i = n.b.mul(t).divRound(this.n),
              o = r.b.neg().mul(t).divRound(this.n),
              f = i.mul(r.a),
              s = o.mul(n.a),
              u = i.mul(r.b),
              a = o.mul(n.b),
              h = t.sub(f).sub(s),
              l = u.add(a).neg();
            return { k1: h, k2: l };
          }),
          (b.prototype.pointFromX = function (t, e) {
            ((t = new i.default(t, 16)), t.red || (t = t.toRed(this.red)));
            var r = t
                .redSqr()
                .redMul(t)
                .redIAdd(t.redMul(this.a))
                .redIAdd(this.b),
              n = r.redSqrt();
            if (0 !== n.redSqr().redSub(r).cmp(this.zero))
              throw new Error("invalid point");
            var o = n.fromRed().isOdd();
            return (
              ((e && !o) || (!e && o)) && (n = n.redNeg()),
              this.point(t, n)
            );
          }),
          (b.prototype.validate = function (t) {
            if (t.inf) return !0;
            var e = t.x,
              r = t.y,
              n = this.a.redMul(e),
              i = e.redSqr().redMul(e).redIAdd(n).redIAdd(this.b);
            return 0 === r.redSqr().redISub(i).cmpn(0);
          }),
          (b.prototype._endoWnafMulAdd = function (t, e, r) {
            for (
              var n = this._endoWnafT1, i = this._endoWnafT2, o = 0;
              o < t.length;
              o++
            ) {
              var f = this._endoSplit(e[o]),
                s = t[o],
                u = s._getBeta();
              (f.k1.negative && (f.k1.ineg(), (s = s.neg(!0))),
                f.k2.negative && (f.k2.ineg(), (u = u.neg(!0))),
                (n[2 * o] = s),
                (n[2 * o + 1] = u),
                (i[2 * o] = f.k1),
                (i[2 * o + 1] = f.k2));
            }
            for (
              var a = this._wnafMulAdd(1, n, i, 2 * o, r), h = 0;
              h < 2 * o;
              h++
            )
              ((n[h] = null), (i[h] = null));
            return a;
          }),
          y(Point, g.BasePoint),
          (b.prototype.point = function (t, e, r) {
            return new Point(this, t, e, r);
          }),
          (b.prototype.pointFromJSON = function (t, e) {
            return Point.fromJSON(this, t, e);
          }),
          (Point.prototype._getBeta = function () {
            if (this.curve.endo) {
              var t = this.precomputed;
              if (t && t.beta) return t.beta;
              var e = this.curve.point(
                this.x.redMul(this.curve.endo.beta),
                this.y,
              );
              if (t) {
                var r = this.curve,
                  n = function (t) {
                    return r.point(t.x.redMul(r.endo.beta), t.y);
                  };
                ((t.beta = e),
                  (e.precomputed = {
                    beta: null,
                    naf: t.naf && {
                      wnd: t.naf.wnd,
                      points: t.naf.points.map(n),
                    },
                    doubles: t.doubles && {
                      step: t.doubles.step,
                      points: t.doubles.points.map(n),
                    },
                  }));
              }
              return e;
            }
          }),
          (Point.prototype.toJSON = function () {
            return this.precomputed
              ? [
                  this.x,
                  this.y,
                  this.precomputed && {
                    doubles: this.precomputed.doubles && {
                      step: this.precomputed.doubles.step,
                      points: this.precomputed.doubles.points.slice(1),
                    },
                    naf: this.precomputed.naf && {
                      wnd: this.precomputed.naf.wnd,
                      points: this.precomputed.naf.points.slice(1),
                    },
                  },
                ]
              : [this.x, this.y];
          }),
          (Point.fromJSON = function (t, e, r) {
            "string" === typeof e && (e = JSON.parse(e));
            var n = t.point(e[0], e[1], r);
            if (!e[2]) return n;
            function i(e) {
              return t.point(e[0], e[1], r);
            }
            var o = e[2];
            return (
              (n.precomputed = {
                beta: null,
                doubles: o.doubles && {
                  step: o.doubles.step,
                  points: [n].concat(o.doubles.points.map(i)),
                },
                naf: o.naf && {
                  wnd: o.naf.wnd,
                  points: [n].concat(o.naf.points.map(i)),
                },
              }),
              n
            );
          }),
          (Point.prototype.inspect = function () {
            return this.isInfinity()
              ? "<EC Point Infinity>"
              : "<EC Point x: " +
                  this.x.fromRed().toString(16, 2) +
                  " y: " +
                  this.y.fromRed().toString(16, 2) +
                  ">";
          }),
          (Point.prototype.isInfinity = function () {
            return this.inf;
          }),
          (Point.prototype.add = function (t) {
            if (this.inf) return t;
            if (t.inf) return this;
            if (this.eq(t)) return this.dbl();
            if (this.neg().eq(t)) return this.curve.point(null, null);
            if (0 === this.x.cmp(t.x)) return this.curve.point(null, null);
            var e = this.y.redSub(t.y);
            0 !== e.cmpn(0) && (e = e.redMul(this.x.redSub(t.x).redInvm()));
            var r = e.redSqr().redISub(this.x).redISub(t.x),
              n = e.redMul(this.x.redSub(r)).redISub(this.y);
            return this.curve.point(r, n);
          }),
          (Point.prototype.dbl = function () {
            if (this.inf) return this;
            var t = this.y.redAdd(this.y);
            if (0 === t.cmpn(0)) return this.curve.point(null, null);
            var e = this.curve.a,
              r = this.x.redSqr(),
              n = t.redInvm(),
              i = r.redAdd(r).redIAdd(r).redIAdd(e).redMul(n),
              o = i.redSqr().redISub(this.x.redAdd(this.x)),
              f = i.redMul(this.x.redSub(o)).redISub(this.y);
            return this.curve.point(o, f);
          }),
          (Point.prototype.getX = function () {
            return this.x.fromRed();
          }),
          (Point.prototype.getY = function () {
            return this.y.fromRed();
          }),
          (Point.prototype.mul = function (t) {
            return (
              (t = new i.default(t, 16)),
              this.isInfinity()
                ? this
                : this._hasDoubles(t)
                  ? this.curve._fixedNafMul(this, t)
                  : this.curve.endo
                    ? this.curve._endoWnafMulAdd([this], [t])
                    : this.curve._wnafMul(this, t)
            );
          }),
          (Point.prototype.mulAdd = function (t, e, r) {
            var n = [this, e],
              i = [t, r];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(n, i)
              : this.curve._wnafMulAdd(1, n, i, 2);
          }),
          (Point.prototype.jmulAdd = function (t, e, r) {
            var n = [this, e],
              i = [t, r];
            return this.curve.endo
              ? this.curve._endoWnafMulAdd(n, i, !0)
              : this.curve._wnafMulAdd(1, n, i, 2, !0);
          }),
          (Point.prototype.eq = function (t) {
            return (
              this === t ||
              (this.inf === t.inf &&
                (this.inf || (0 === this.x.cmp(t.x) && 0 === this.y.cmp(t.y))))
            );
          }),
          (Point.prototype.neg = function (t) {
            if (this.inf) return this;
            var e = this.curve.point(this.x, this.y.redNeg());
            if (t && this.precomputed) {
              var r = this.precomputed,
                n = function (t) {
                  return t.neg();
                };
              e.precomputed = {
                naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(n) },
                doubles: r.doubles && {
                  step: r.doubles.step,
                  points: r.doubles.points.map(n),
                },
              };
            }
            return e;
          }),
          (Point.prototype.toJ = function () {
            if (this.inf) return this.curve.jpoint(null, null, null);
            var t = this.curve.jpoint(this.x, this.y, this.curve.one);
            return t;
          }),
          y(M, g.BasePoint),
          (b.prototype.jpoint = function (t, e, r) {
            return new M(this, t, e, r);
          }),
          (M.prototype.toP = function () {
            if (this.isInfinity()) return this.curve.point(null, null);
            var t = this.z.redInvm(),
              e = t.redSqr(),
              r = this.x.redMul(e),
              n = this.y.redMul(e).redMul(t);
            return this.curve.point(r, n);
          }),
          (M.prototype.neg = function () {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }),
          (M.prototype.add = function (t) {
            if (this.isInfinity()) return t;
            if (t.isInfinity()) return this;
            var e = t.z.redSqr(),
              r = this.z.redSqr(),
              n = this.x.redMul(e),
              i = t.x.redMul(r),
              o = this.y.redMul(e.redMul(t.z)),
              f = t.y.redMul(r.redMul(this.z)),
              s = n.redSub(i),
              u = o.redSub(f);
            if (0 === s.cmpn(0))
              return 0 !== u.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var a = s.redSqr(),
              h = a.redMul(s),
              l = n.redMul(a),
              d = u.redSqr().redIAdd(h).redISub(l).redISub(l),
              c = u.redMul(l.redISub(d)).redISub(o.redMul(h)),
              p = this.z.redMul(t.z).redMul(s);
            return this.curve.jpoint(d, c, p);
          }),
          (M.prototype.mixedAdd = function (t) {
            if (this.isInfinity()) return t.toJ();
            if (t.isInfinity()) return this;
            var e = this.z.redSqr(),
              r = this.x,
              n = t.x.redMul(e),
              i = this.y,
              o = t.y.redMul(e).redMul(this.z),
              f = r.redSub(n),
              s = i.redSub(o);
            if (0 === f.cmpn(0))
              return 0 !== s.cmpn(0)
                ? this.curve.jpoint(null, null, null)
                : this.dbl();
            var u = f.redSqr(),
              a = u.redMul(f),
              h = r.redMul(u),
              l = s.redSqr().redIAdd(a).redISub(h).redISub(h),
              d = s.redMul(h.redISub(l)).redISub(i.redMul(a)),
              c = this.z.redMul(f);
            return this.curve.jpoint(l, d, c);
          }),
          (M.prototype.dblp = function (t) {
            if (0 === t) return this;
            if (this.isInfinity()) return this;
            if (!t) return this.dbl();
            var e;
            if (this.curve.zeroA || this.curve.threeA) {
              var r = this;
              for (e = 0; e < t; e++) r = r.dbl();
              return r;
            }
            var n = this.curve.a,
              i = this.curve.tinv,
              o = this.x,
              f = this.y,
              s = this.z,
              u = s.redSqr().redSqr(),
              a = f.redAdd(f);
            for (e = 0; e < t; e++) {
              var h = o.redSqr(),
                l = a.redSqr(),
                d = l.redSqr(),
                c = h.redAdd(h).redIAdd(h).redIAdd(n.redMul(u)),
                p = o.redMul(l),
                m = c.redSqr().redISub(p.redAdd(p)),
                g = p.redISub(m),
                A = c.redMul(g);
              A = A.redIAdd(A).redISub(d);
              var y = a.redMul(s);
              (e + 1 < t && (u = u.redMul(d)), (o = m), (s = y), (a = A));
            }
            return this.curve.jpoint(o, a.redMul(i), s);
          }),
          (M.prototype.dbl = function () {
            return this.isInfinity()
              ? this
              : this.curve.zeroA
                ? this._zeroDbl()
                : this.curve.threeA
                  ? this._threeDbl()
                  : this._dbl();
          }),
          (M.prototype._zeroDbl = function () {
            var t, e, r;
            if (this.zOne) {
              var n = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                f = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
              f = f.redIAdd(f);
              var s = n.redAdd(n).redIAdd(n),
                u = s.redSqr().redISub(f).redISub(f),
                a = o.redIAdd(o);
              ((a = a.redIAdd(a)),
                (a = a.redIAdd(a)),
                (t = u),
                (e = s.redMul(f.redISub(u)).redISub(a)),
                (r = this.y.redAdd(this.y)));
            } else {
              var h = this.x.redSqr(),
                l = this.y.redSqr(),
                d = l.redSqr(),
                c = this.x.redAdd(l).redSqr().redISub(h).redISub(d);
              c = c.redIAdd(c);
              var p = h.redAdd(h).redIAdd(h),
                m = p.redSqr(),
                g = d.redIAdd(d);
              ((g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (t = m.redISub(c).redISub(c)),
                (e = p.redMul(c.redISub(t)).redISub(g)),
                (r = this.y.redMul(this.z)),
                (r = r.redIAdd(r)));
            }
            return this.curve.jpoint(t, e, r);
          }),
          (M.prototype._threeDbl = function () {
            var t, e, r;
            if (this.zOne) {
              var n = this.x.redSqr(),
                i = this.y.redSqr(),
                o = i.redSqr(),
                f = this.x.redAdd(i).redSqr().redISub(n).redISub(o);
              f = f.redIAdd(f);
              var s = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a),
                u = s.redSqr().redISub(f).redISub(f);
              t = u;
              var a = o.redIAdd(o);
              ((a = a.redIAdd(a)),
                (a = a.redIAdd(a)),
                (e = s.redMul(f.redISub(u)).redISub(a)),
                (r = this.y.redAdd(this.y)));
            } else {
              var h = this.z.redSqr(),
                l = this.y.redSqr(),
                d = this.x.redMul(l),
                c = this.x.redSub(h).redMul(this.x.redAdd(h));
              c = c.redAdd(c).redIAdd(c);
              var p = d.redIAdd(d);
              p = p.redIAdd(p);
              var m = p.redAdd(p);
              ((t = c.redSqr().redISub(m)),
                (r = this.y.redAdd(this.z).redSqr().redISub(l).redISub(h)));
              var g = l.redSqr();
              ((g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (g = g.redIAdd(g)),
                (e = c.redMul(p.redISub(t)).redISub(g)));
            }
            return this.curve.jpoint(t, e, r);
          }),
          (M.prototype._dbl = function () {
            var t = this.curve.a,
              e = this.x,
              r = this.y,
              n = this.z,
              i = n.redSqr().redSqr(),
              o = e.redSqr(),
              f = r.redSqr(),
              s = o.redAdd(o).redIAdd(o).redIAdd(t.redMul(i)),
              u = e.redAdd(e);
            u = u.redIAdd(u);
            var a = u.redMul(f),
              h = s.redSqr().redISub(a.redAdd(a)),
              l = a.redISub(h),
              d = f.redSqr();
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var c = s.redMul(l).redISub(d),
              p = r.redAdd(r).redMul(n);
            return this.curve.jpoint(h, c, p);
          }),
          (M.prototype.trpl = function () {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var t = this.x.redSqr(),
              e = this.y.redSqr(),
              r = this.z.redSqr(),
              n = e.redSqr(),
              i = t.redAdd(t).redIAdd(t),
              o = i.redSqr(),
              f = this.x.redAdd(e).redSqr().redISub(t).redISub(n);
            ((f = f.redIAdd(f)),
              (f = f.redAdd(f).redIAdd(f)),
              (f = f.redISub(o)));
            var s = f.redSqr(),
              u = n.redIAdd(n);
            ((u = u.redIAdd(u)), (u = u.redIAdd(u)), (u = u.redIAdd(u)));
            var a = i.redIAdd(f).redSqr().redISub(o).redISub(s).redISub(u),
              h = e.redMul(a);
            ((h = h.redIAdd(h)), (h = h.redIAdd(h)));
            var l = this.x.redMul(s).redISub(h);
            ((l = l.redIAdd(l)), (l = l.redIAdd(l)));
            var d = this.y.redMul(a.redMul(u.redISub(a)).redISub(f.redMul(s)));
            ((d = d.redIAdd(d)), (d = d.redIAdd(d)), (d = d.redIAdd(d)));
            var c = this.z.redAdd(f).redSqr().redISub(r).redISub(s);
            return this.curve.jpoint(l, d, c);
          }),
          (M.prototype.mul = function (t, e) {
            return ((t = new i.default(t, e)), this.curve._wnafMul(this, t));
          }),
          (M.prototype.eq = function (t) {
            if ("affine" === t.type) return this.eq(t.toJ());
            if (this === t) return !0;
            var e = this.z.redSqr(),
              r = t.z.redSqr();
            if (0 !== this.x.redMul(r).redISub(t.x.redMul(e)).cmpn(0))
              return !1;
            var n = e.redMul(this.z),
              i = r.redMul(t.z);
            return 0 === this.y.redMul(i).redISub(t.y.redMul(n)).cmpn(0);
          }),
          (M.prototype.eqXToP = function (t) {
            var e = this.z.redSqr(),
              r = t.toRed(this.curve.red).redMul(e);
            if (0 === this.x.cmp(r)) return !0;
            for (var n = t.clone(), i = this.curve.redN.redMul(e); ; ) {
              if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
              if ((r.redIAdd(i), 0 === this.x.cmp(r))) return !0;
            }
          }),
          (M.prototype.inspect = function () {
            return this.isInfinity()
              ? "<EC JPoint Infinity>"
              : "<EC JPoint x: " +
                  this.x.toString(16, 2) +
                  " y: " +
                  this.y.toString(16, 2) +
                  " z: " +
                  this.z.toString(16, 2) +
                  ">";
          }),
          (M.prototype.isInfinity = function () {
            return 0 === this.z.cmpn(0);
          }));
        var E = f(function (t, e) {
            var r = e;
            ((r.base = g), (r.short = w), (r.mont = null), (r.edwards = null));
          }),
          I = f(function (t, e) {
            var r,
              n = e,
              i = l.assert;
            function f(t) {
              ("short" === t.type
                ? (this.curve = new E.short(t))
                : "edwards" === t.type
                  ? (this.curve = new E.edwards(t))
                  : (this.curve = new E.mont(t)),
                (this.g = this.curve.g),
                (this.n = this.curve.n),
                (this.hash = t.hash),
                i(this.g.validate(), "Invalid curve"),
                i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O"));
            }
            function s(t, e) {
              Object.defineProperty(n, t, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  var r = new f(e);
                  return (
                    Object.defineProperty(n, t, {
                      configurable: !0,
                      enumerable: !0,
                      value: r,
                    }),
                    r
                  );
                },
              });
            }
            ((n.PresetCurve = f),
              s("p192", {
                type: "short",
                prime: "p192",
                p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                  "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
                ],
              }),
              s("p224", {
                type: "short",
                prime: "p224",
                p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                  "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
                ],
              }),
              s("p256", {
                type: "short",
                prime: null,
                p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                  "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
                ],
              }),
              s("p384", {
                type: "short",
                prime: null,
                p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                hash: o.default.sha384,
                gRed: !1,
                g: [
                  "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                  "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
                ],
              }),
              s("p521", {
                type: "short",
                prime: null,
                p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                hash: o.default.sha512,
                gRed: !1,
                g: [
                  "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                  "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
                ],
              }),
              s("curve25519", {
                type: "mont",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "76d06",
                b: "1",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.default.sha256,
                gRed: !1,
                g: ["9"],
              }),
              s("ed25519", {
                type: "edwards",
                prime: "p25519",
                p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                a: "-1",
                c: "1",
                d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                hash: o.default.sha256,
                gRed: !1,
                g: [
                  "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                  "6666666666666666666666666666666666666666666666666666666666666658",
                ],
              }));
            try {
              r = null.crash();
            } catch (u) {
              r = void 0;
            }
            s("secp256k1", {
              type: "short",
              prime: "k256",
              p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
              a: "0",
              b: "7",
              n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
              h: "1",
              hash: o.default.sha256,
              beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
              lambda:
                "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
              basis: [
                {
                  a: "3086d221a7d46bcde86c90e49284eb15",
                  b: "-e4437ed6010e88286f547fa90abfe4c3",
                },
                {
                  a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                  b: "3086d221a7d46bcde86c90e49284eb15",
                },
              ],
              gRed: !1,
              g: [
                "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
                r,
              ],
            });
          });
        function B(t) {
          if (!(this instanceof B)) return new B(t);
          ((this.hash = t.hash),
            (this.predResist = !!t.predResist),
            (this.outLen = this.hash.outSize),
            (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
            (this._reseed = null),
            (this.reseedInterval = null),
            (this.K = null),
            (this.V = null));
          var e = h.toArray(t.entropy, t.entropyEnc || "hex"),
            r = h.toArray(t.nonce, t.nonceEnc || "hex"),
            n = h.toArray(t.pers, t.persEnc || "hex");
          (u(
            e.length >= this.minEntropy / 8,
            "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
          ),
            this._init(e, r, n));
        }
        var S = B;
        ((B.prototype._init = function (t, e, r) {
          var n = t.concat(e).concat(r);
          ((this.K = new Array(this.outLen / 8)),
            (this.V = new Array(this.outLen / 8)));
          for (var i = 0; i < this.V.length; i++)
            ((this.K[i] = 0), (this.V[i] = 1));
          (this._update(n),
            (this._reseed = 1),
            (this.reseedInterval = 281474976710656));
        }),
          (B.prototype._hmac = function () {
            return new o.default.hmac(this.hash, this.K);
          }),
          (B.prototype._update = function (t) {
            var e = this._hmac().update(this.V).update([0]);
            (t && (e = e.update(t)),
              (this.K = e.digest()),
              (this.V = this._hmac().update(this.V).digest()),
              t &&
                ((this.K = this._hmac()
                  .update(this.V)
                  .update([1])
                  .update(t)
                  .digest()),
                (this.V = this._hmac().update(this.V).digest())));
          }),
          (B.prototype.reseed = function (t, e, r, n) {
            ("string" !== typeof e && ((n = r), (r = e), (e = null)),
              (t = h.toArray(t, e)),
              (r = h.toArray(r, n)),
              u(
                t.length >= this.minEntropy / 8,
                "Not enough entropy. Minimum is: " + this.minEntropy + " bits",
              ),
              this._update(t.concat(r || [])),
              (this._reseed = 1));
          }),
          (B.prototype.generate = function (t, e, r, n) {
            if (this._reseed > this.reseedInterval)
              throw new Error("Reseed is required");
            ("string" !== typeof e && ((n = r), (r = e), (e = null)),
              r && ((r = h.toArray(r, n || "hex")), this._update(r)));
            var i = [];
            while (i.length < t)
              ((this.V = this._hmac().update(this.V).digest()),
                (i = i.concat(this.V)));
            var o = i.slice(0, t);
            return (this._update(r), this._reseed++, h.encode(o, e));
          }));
        var N = l.assert;
        function C(t, e) {
          ((this.ec = t),
            (this.priv = null),
            (this.pub = null),
            e.priv && this._importPrivate(e.priv, e.privEnc),
            e.pub && this._importPublic(e.pub, e.pubEnc));
        }
        var P = C;
        ((C.fromPublic = function (t, e, r) {
          return e instanceof C ? e : new C(t, { pub: e, pubEnc: r });
        }),
          (C.fromPrivate = function (t, e, r) {
            return e instanceof C ? e : new C(t, { priv: e, privEnc: r });
          }),
          (C.prototype.validate = function () {
            var t = this.getPublic();
            return t.isInfinity()
              ? { result: !1, reason: "Invalid public key" }
              : t.validate()
                ? t.mul(this.ec.curve.n).isInfinity()
                  ? { result: !0, reason: null }
                  : { result: !1, reason: "Public key * N != O" }
                : { result: !1, reason: "Public key is not a point" };
          }),
          (C.prototype.getPublic = function (t, e) {
            return (
              "string" === typeof t && ((e = t), (t = null)),
              this.pub || (this.pub = this.ec.g.mul(this.priv)),
              e ? this.pub.encode(e, t) : this.pub
            );
          }),
          (C.prototype.getPrivate = function (t) {
            return "hex" === t ? this.priv.toString(16, 2) : this.priv;
          }),
          (C.prototype._importPrivate = function (t, e) {
            ((this.priv = new i.default(t, e || 16)),
              (this.priv = this.priv.umod(this.ec.curve.n)));
          }),
          (C.prototype._importPublic = function (t, e) {
            if (t.x || t.y)
              return (
                "mont" === this.ec.curve.type
                  ? N(t.x, "Need x coordinate")
                  : ("short" !== this.ec.curve.type &&
                      "edwards" !== this.ec.curve.type) ||
                    N(t.x && t.y, "Need both x and y coordinate"),
                void (this.pub = this.ec.curve.point(t.x, t.y))
              );
            this.pub = this.ec.curve.decodePoint(t, e);
          }),
          (C.prototype.derive = function (t) {
            return (
              t.validate() || N(t.validate(), "public point not validated"),
              t.mul(this.priv).getX()
            );
          }),
          (C.prototype.sign = function (t, e, r) {
            return this.ec.sign(t, this, e, r);
          }),
          (C.prototype.verify = function (t, e, r) {
            return this.ec.verify(t, e, this, void 0, r);
          }),
          (C.prototype.inspect = function () {
            return (
              "<Key priv: " +
              (this.priv && this.priv.toString(16, 2)) +
              " pub: " +
              (this.pub && this.pub.inspect()) +
              " >"
            );
          }));
        var x = l.assert;
        function O(t, e) {
          if (t instanceof O) return t;
          this._importDER(t, e) ||
            (x(t.r && t.s, "Signature without r or s"),
            (this.r = new i.default(t.r, 16)),
            (this.s = new i.default(t.s, 16)),
            void 0 === t.recoveryParam
              ? (this.recoveryParam = null)
              : (this.recoveryParam = t.recoveryParam));
        }
        var R = O;
        function _() {
          this.place = 0;
        }
        function D(t, e) {
          var r = t[e.place++];
          if (!(128 & r)) return r;
          var n = 15 & r;
          if (0 === n || n > 4) return !1;
          if (0 === t[e.place]) return !1;
          for (var i = 0, o = 0, f = e.place; o < n; o++, f++)
            ((i <<= 8), (i |= t[f]), (i >>>= 0));
          return !(i <= 127) && ((e.place = f), i);
        }
        function k(t) {
          var e = 0,
            r = t.length - 1;
          while (!t[e] && !(128 & t[e + 1]) && e < r) e++;
          return 0 === e ? t : t.slice(e);
        }
        function F(t, e) {
          if (e < 128) t.push(e);
          else {
            var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
            t.push(128 | r);
            while (--r) t.push((e >>> (r << 3)) & 255);
            t.push(e);
          }
        }
        ((O.prototype._importDER = function (t, e) {
          t = l.toArray(t, e);
          var r = new _();
          if (48 !== t[r.place++]) return !1;
          var n = D(t, r);
          if (!1 === n) return !1;
          if (n + r.place !== t.length) return !1;
          if (2 !== t[r.place++]) return !1;
          var o = D(t, r);
          if (!1 === o) return !1;
          if (0 !== (128 & t[r.place])) return !1;
          var f = t.slice(r.place, o + r.place);
          if (((r.place += o), 2 !== t[r.place++])) return !1;
          var s = D(t, r);
          if (!1 === s) return !1;
          if (t.length !== s + r.place) return !1;
          if (0 !== (128 & t[r.place])) return !1;
          var u = t.slice(r.place, s + r.place);
          if (0 === f[0]) {
            if (!(128 & f[1])) return !1;
            f = f.slice(1);
          }
          if (0 === u[0]) {
            if (!(128 & u[1])) return !1;
            u = u.slice(1);
          }
          return (
            (this.r = new i.default(f)),
            (this.s = new i.default(u)),
            (this.recoveryParam = null),
            !0
          );
        }),
          (O.prototype.toDER = function (t) {
            var e = this.r.toArray(),
              r = this.s.toArray();
            (128 & e[0] && (e = [0].concat(e)),
              128 & r[0] && (r = [0].concat(r)),
              (e = k(e)),
              (r = k(r)));
            while (!r[0] && !(128 & r[1])) r = r.slice(1);
            var n = [2];
            (F(n, e.length), (n = n.concat(e)), n.push(2), F(n, r.length));
            var i = n.concat(r),
              o = [48];
            return (F(o, i.length), (o = o.concat(i)), l.encode(o, t));
          }));
        var T = function () {
            throw new Error("unsupported");
          },
          U = l.assert;
        function L(t) {
          if (!(this instanceof L)) return new L(t);
          ("string" === typeof t &&
            (U(
              Object.prototype.hasOwnProperty.call(I, t),
              "Unknown curve " + t,
            ),
            (t = I[t])),
            t instanceof I.PresetCurve && (t = { curve: t }),
            (this.curve = t.curve.curve),
            (this.n = this.curve.n),
            (this.nh = this.n.ushrn(1)),
            (this.g = this.curve.g),
            (this.g = t.curve.g),
            this.g.precompute(t.curve.n.bitLength() + 1),
            (this.hash = t.hash || t.curve.hash));
        }
        var q = L;
        ((L.prototype.keyPair = function (t) {
          return new P(this, t);
        }),
          (L.prototype.keyFromPrivate = function (t, e) {
            return P.fromPrivate(this, t, e);
          }),
          (L.prototype.keyFromPublic = function (t, e) {
            return P.fromPublic(this, t, e);
          }),
          (L.prototype.genKeyPair = function (t) {
            t || (t = {});
            for (
              var e = new S({
                  hash: this.hash,
                  pers: t.pers,
                  persEnc: t.persEnc || "utf8",
                  entropy: t.entropy || T(this.hash.hmacStrength),
                  entropyEnc: (t.entropy && t.entropyEnc) || "utf8",
                  nonce: this.n.toArray(),
                }),
                r = this.n.byteLength(),
                n = this.n.sub(new i.default(2));
              ;
            ) {
              var o = new i.default(e.generate(r));
              if (!(o.cmp(n) > 0)) return (o.iaddn(1), this.keyFromPrivate(o));
            }
          }),
          (L.prototype._truncateToN = function (t, e, r) {
            var n;
            if (i.default.isBN(t) || "number" === typeof t)
              ((t = new i.default(t, 16)), (n = t.byteLength()));
            else if ("object" === typeof t)
              ((n = t.length), (t = new i.default(t, 16)));
            else {
              var o = t.toString();
              ((n = (o.length + 1) >>> 1), (t = new i.default(o, 16)));
            }
            "number" !== typeof r && (r = 8 * n);
            var f = r - this.n.bitLength();
            return (
              f > 0 && (t = t.ushrn(f)),
              !e && t.cmp(this.n) >= 0 ? t.sub(this.n) : t
            );
          }),
          (L.prototype.sign = function (t, e, r, n) {
            if (
              ("object" === typeof r && ((n = r), (r = null)),
              n || (n = {}),
              "string" !== typeof t &&
                "number" !== typeof t &&
                !i.default.isBN(t))
            ) {
              (U(
                "object" === typeof t && t && "number" === typeof t.length,
                "Expected message to be an array-like, a hex string, or a BN instance",
              ),
                U(t.length >>> 0 === t.length));
              for (var o = 0; o < t.length; o++) U((255 & t[o]) === t[o]);
            }
            ((e = this.keyFromPrivate(e, r)),
              (t = this._truncateToN(t, !1, n.msgBitLength)),
              U(!t.isNeg(), "Can not sign a negative message"));
            var f = this.n.byteLength(),
              s = e.getPrivate().toArray("be", f),
              u = t.toArray("be", f);
            U(new i.default(u).eq(t), "Can not sign message");
            for (
              var a = new S({
                  hash: this.hash,
                  entropy: s,
                  nonce: u,
                  pers: n.pers,
                  persEnc: n.persEnc || "utf8",
                }),
                h = this.n.sub(new i.default(1)),
                l = 0;
              ;
              l++
            ) {
              var d = n.k
                ? n.k(l)
                : new i.default(a.generate(this.n.byteLength()));
              if (
                ((d = this._truncateToN(d, !0)),
                !(d.cmpn(1) <= 0 || d.cmp(h) >= 0))
              ) {
                var c = this.g.mul(d);
                if (!c.isInfinity()) {
                  var p = c.getX(),
                    m = p.umod(this.n);
                  if (0 !== m.cmpn(0)) {
                    var g = d.invm(this.n).mul(m.mul(e.getPrivate()).iadd(t));
                    if (((g = g.umod(this.n)), 0 !== g.cmpn(0))) {
                      var A =
                        (c.getY().isOdd() ? 1 : 0) | (0 !== p.cmp(m) ? 2 : 0);
                      return (
                        n.canonical &&
                          g.cmp(this.nh) > 0 &&
                          ((g = this.n.sub(g)), (A ^= 1)),
                        new R({ r: m, s: g, recoveryParam: A })
                      );
                    }
                  }
                }
              }
            }
          }),
          (L.prototype.verify = function (t, e, r, n, i) {
            (i || (i = {}),
              (t = this._truncateToN(t, !1, i.msgBitLength)),
              (r = this.keyFromPublic(r, n)),
              (e = new R(e, "hex")));
            var o = e.r,
              f = e.s;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
            var s,
              u = f.invm(this.n),
              a = u.mul(t).umod(this.n),
              h = u.mul(o).umod(this.n);
            return this.curve._maxwellTrick
              ? ((s = this.g.jmulAdd(a, r.getPublic(), h)),
                !s.isInfinity() && s.eqXToP(o))
              : ((s = this.g.mulAdd(a, r.getPublic(), h)),
                !s.isInfinity() && 0 === s.getX().umod(this.n).cmp(o));
          }),
          (L.prototype.recoverPubKey = function (t, e, r, n) {
            (U((3 & r) === r, "The recovery param is more than two bits"),
              (e = new R(e, n)));
            var o = this.n,
              f = new i.default(t),
              s = e.r,
              u = e.s,
              a = 1 & r,
              h = r >> 1;
            if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && h)
              throw new Error("Unable to find sencond key candinate");
            s = h
              ? this.curve.pointFromX(s.add(this.curve.n), a)
              : this.curve.pointFromX(s, a);
            var l = e.r.invm(o),
              d = o.sub(f).mul(l).umod(o),
              c = u.mul(l).umod(o);
            return this.g.mulAdd(d, s, c);
          }),
          (L.prototype.getKeyRecoveryParam = function (t, e, r, n) {
            if (((e = new R(e, n)), null !== e.recoveryParam))
              return e.recoveryParam;
            for (var i = 0; i < 4; i++) {
              var o;
              try {
                o = this.recoverPubKey(t, e, i);
              } catch (t) {
                continue;
              }
              if (o.eq(r)) return i;
            }
            throw new Error("Unable to find valid recovery factor");
          }));
        var j = f(function (t, e) {
          var r = e;
          ((r.version = { version: "6.6.1" }.version),
            (r.utils = l),
            (r.rand = function () {
              throw new Error("unsupported");
            }),
            (r.curve = E),
            (r.curves = I),
            (r.ec = q),
            (r.eddsa = null));
        });
        e.EC = j.ec;
      }).call(this, r(13));
    },
    1328: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "signing-key/5.8.0";
    },
    1329: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "transactions/5.8.0";
    },
    137: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "UnicodeNormalizationForm", {
          enumerable: !0,
          get: function () {
            return o.UnicodeNormalizationForm;
          },
        }),
        Object.defineProperty(e, "Utf8ErrorFuncs", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorFuncs;
          },
        }),
        Object.defineProperty(e, "Utf8ErrorReason", {
          enumerable: !0,
          get: function () {
            return o.Utf8ErrorReason;
          },
        }),
        Object.defineProperty(e, "_toEscapedUtf8String", {
          enumerable: !0,
          get: function () {
            return o._toEscapedUtf8String;
          },
        }),
        Object.defineProperty(e, "formatBytes32String", {
          enumerable: !0,
          get: function () {
            return n.formatBytes32String;
          },
        }),
        Object.defineProperty(e, "nameprep", {
          enumerable: !0,
          get: function () {
            return i.nameprep;
          },
        }),
        Object.defineProperty(e, "parseBytes32String", {
          enumerable: !0,
          get: function () {
            return n.parseBytes32String;
          },
        }),
        Object.defineProperty(e, "toUtf8Bytes", {
          enumerable: !0,
          get: function () {
            return o.toUtf8Bytes;
          },
        }),
        Object.defineProperty(e, "toUtf8CodePoints", {
          enumerable: !0,
          get: function () {
            return o.toUtf8CodePoints;
          },
        }),
        Object.defineProperty(e, "toUtf8String", {
          enumerable: !0,
          get: function () {
            return o.toUtf8String;
          },
        }));
      var n = r(1303),
        i = r(1305),
        o = r(265);
    },
    264: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AddressZero", {
          enumerable: !0,
          get: function () {
            return n.AddressZero;
          },
        }),
        Object.defineProperty(e, "EtherSymbol", {
          enumerable: !0,
          get: function () {
            return f.EtherSymbol;
          },
        }),
        Object.defineProperty(e, "HashZero", {
          enumerable: !0,
          get: function () {
            return o.HashZero;
          },
        }),
        Object.defineProperty(e, "MaxInt256", {
          enumerable: !0,
          get: function () {
            return i.MaxInt256;
          },
        }),
        Object.defineProperty(e, "MaxUint256", {
          enumerable: !0,
          get: function () {
            return i.MaxUint256;
          },
        }),
        Object.defineProperty(e, "MinInt256", {
          enumerable: !0,
          get: function () {
            return i.MinInt256;
          },
        }),
        Object.defineProperty(e, "NegativeOne", {
          enumerable: !0,
          get: function () {
            return i.NegativeOne;
          },
        }),
        Object.defineProperty(e, "One", {
          enumerable: !0,
          get: function () {
            return i.One;
          },
        }),
        Object.defineProperty(e, "Two", {
          enumerable: !0,
          get: function () {
            return i.Two;
          },
        }),
        Object.defineProperty(e, "WeiPerEther", {
          enumerable: !0,
          get: function () {
            return i.WeiPerEther;
          },
        }),
        Object.defineProperty(e, "Zero", {
          enumerable: !0,
          get: function () {
            return i.Zero;
          },
        }));
      var n = r(1298),
        i = r(1299),
        o = r(1300),
        f = r(1301);
    },
    265: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Utf8ErrorReason =
          e.Utf8ErrorFuncs =
          e.UnicodeNormalizationForm =
            void 0),
        (e._toEscapedUtf8String = g),
        (e._toUtf8String = A),
        (e.toUtf8Bytes = p),
        (e.toUtf8CodePoints = v),
        (e.toUtf8String = y));
      var n = r(32),
        i = r(36),
        o = r(1304);
      const f = new i.Logger(o.version);
      var s, u;
      function a(t, e, r, n, i) {
        return f.throwArgumentError(
          `invalid codepoint at offset ${e}; ${t}`,
          "bytes",
          r,
        );
      }
      function h(t, e, r, n, i) {
        if (t === u.BAD_PREFIX || t === u.UNEXPECTED_CONTINUE) {
          let t = 0;
          for (let n = e + 1; n < r.length; n++) {
            if (r[n] >> 6 !== 2) break;
            t++;
          }
          return t;
        }
        return t === u.OVERRUN ? r.length - e - 1 : 0;
      }
      function l(t, e, r, n, i) {
        return t === u.OVERLONG
          ? (n.push(i), 0)
          : (n.push(65533), h(t, e, r, n, i));
      }
      ((function (t) {
        ((t["current"] = ""),
          (t["NFC"] = "NFC"),
          (t["NFD"] = "NFD"),
          (t["NFKC"] = "NFKC"),
          (t["NFKD"] = "NFKD"));
      })(s || (e.UnicodeNormalizationForm = s = {})),
        (function (t) {
          ((t["UNEXPECTED_CONTINUE"] = "unexpected continuation byte"),
            (t["BAD_PREFIX"] = "bad codepoint prefix"),
            (t["OVERRUN"] = "string overrun"),
            (t["MISSING_CONTINUE"] = "missing continuation byte"),
            (t["OUT_OF_RANGE"] = "out of UTF-8 range"),
            (t["UTF16_SURROGATE"] = "UTF-16 surrogate"),
            (t["OVERLONG"] = "overlong representation"));
        })(u || (e.Utf8ErrorReason = u = {})));
      const d = (e.Utf8ErrorFuncs = Object.freeze({
        error: a,
        ignore: h,
        replace: l,
      }));
      function c(t, e) {
        (null == e && (e = d.error), (t = (0, n.arrayify)(t)));
        const r = [];
        let i = 0;
        while (i < t.length) {
          const n = t[i++];
          if (n >> 7 === 0) {
            r.push(n);
            continue;
          }
          let o = null,
            f = null;
          if (192 === (224 & n)) ((o = 1), (f = 127));
          else if (224 === (240 & n)) ((o = 2), (f = 2047));
          else {
            if (240 !== (248 & n)) {
              i += e(
                128 === (192 & n) ? u.UNEXPECTED_CONTINUE : u.BAD_PREFIX,
                i - 1,
                t,
                r,
              );
              continue;
            }
            ((o = 3), (f = 65535));
          }
          if (i - 1 + o >= t.length) {
            i += e(u.OVERRUN, i - 1, t, r);
            continue;
          }
          let s = n & ((1 << (8 - o - 1)) - 1);
          for (let a = 0; a < o; a++) {
            let n = t[i];
            if (128 != (192 & n)) {
              ((i += e(u.MISSING_CONTINUE, i, t, r)), (s = null));
              break;
            }
            ((s = (s << 6) | (63 & n)), i++);
          }
          null !== s &&
            (s > 1114111
              ? (i += e(u.OUT_OF_RANGE, i - 1 - o, t, r, s))
              : s >= 55296 && s <= 57343
                ? (i += e(u.UTF16_SURROGATE, i - 1 - o, t, r, s))
                : s <= f
                  ? (i += e(u.OVERLONG, i - 1 - o, t, r, s))
                  : r.push(s));
        }
        return r;
      }
      function p(t, e) {
        (void 0 === e && (e = s.current),
          e != s.current && (f.checkNormalize(), (t = t.normalize(e))));
        let r = [];
        for (let n = 0; n < t.length; n++) {
          const e = t.charCodeAt(n);
          if (e < 128) r.push(e);
          else if (e < 2048) (r.push((e >> 6) | 192), r.push((63 & e) | 128));
          else if (55296 == (64512 & e)) {
            n++;
            const i = t.charCodeAt(n);
            if (n >= t.length || 56320 !== (64512 & i))
              throw new Error("invalid utf-8 string");
            const o = 65536 + ((1023 & e) << 10) + (1023 & i);
            (r.push((o >> 18) | 240),
              r.push(((o >> 12) & 63) | 128),
              r.push(((o >> 6) & 63) | 128),
              r.push((63 & o) | 128));
          } else
            (r.push((e >> 12) | 224),
              r.push(((e >> 6) & 63) | 128),
              r.push((63 & e) | 128));
        }
        return (0, n.arrayify)(r);
      }
      function m(t) {
        const e = "0000" + t.toString(16);
        return "\\u" + e.substring(e.length - 4);
      }
      function g(t, e) {
        return (
          '"' +
          c(t, e)
            .map((t) => {
              if (t < 256) {
                switch (t) {
                  case 8:
                    return "\\b";
                  case 9:
                    return "\\t";
                  case 10:
                    return "\\n";
                  case 13:
                    return "\\r";
                  case 34:
                    return '\\"';
                  case 92:
                    return "\\\\";
                }
                if (t >= 32 && t < 127) return String.fromCharCode(t);
              }
              return t <= 65535
                ? m(t)
                : ((t -= 65536),
                  m(55296 + ((t >> 10) & 1023)) + m(56320 + (1023 & t)));
            })
            .join("") +
          '"'
        );
      }
      function A(t) {
        return t
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : ((t -= 65536),
                String.fromCharCode(
                  55296 + ((t >> 10) & 1023),
                  56320 + (1023 & t),
                )),
          )
          .join("");
      }
      function y(t, e) {
        return A(c(t, e));
      }
      function v(t, e) {
        return (void 0 === e && (e = s.current), c(p(t, e)));
      }
    },
    36: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Logger = e.LogLevel = e.ErrorCode = void 0));
      var n = r(1286);
      let i = !1,
        o = !1;
      const f = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
      let s = f["default"],
        u = null;
      function a() {
        try {
          const t = [];
          if (
            (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
              try {
                if ("test" !== "test".normalize(e))
                  throw new Error("bad normalize");
              } catch (r) {
                t.push(e);
              }
            }),
            t.length)
          )
            throw new Error("missing " + t.join(", "));
          if (
            String.fromCharCode(233).normalize("NFD") !==
            String.fromCharCode(101, 769)
          )
            throw new Error("broken implementation");
        } catch (t) {
          return t.message;
        }
        return null;
      }
      const h = a();
      var l, d;
      ((function (t) {
        ((t["DEBUG"] = "DEBUG"),
          (t["INFO"] = "INFO"),
          (t["WARNING"] = "WARNING"),
          (t["ERROR"] = "ERROR"),
          (t["OFF"] = "OFF"));
      })(l || (e.LogLevel = l = {})),
        (function (t) {
          ((t["UNKNOWN_ERROR"] = "UNKNOWN_ERROR"),
            (t["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED"),
            (t["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION"),
            (t["NETWORK_ERROR"] = "NETWORK_ERROR"),
            (t["SERVER_ERROR"] = "SERVER_ERROR"),
            (t["TIMEOUT"] = "TIMEOUT"),
            (t["BUFFER_OVERRUN"] = "BUFFER_OVERRUN"),
            (t["NUMERIC_FAULT"] = "NUMERIC_FAULT"),
            (t["MISSING_NEW"] = "MISSING_NEW"),
            (t["INVALID_ARGUMENT"] = "INVALID_ARGUMENT"),
            (t["MISSING_ARGUMENT"] = "MISSING_ARGUMENT"),
            (t["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT"),
            (t["CALL_EXCEPTION"] = "CALL_EXCEPTION"),
            (t["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS"),
            (t["NONCE_EXPIRED"] = "NONCE_EXPIRED"),
            (t["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED"),
            (t["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT"),
            (t["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED"),
            (t["ACTION_REJECTED"] = "ACTION_REJECTED"));
        })(d || (e.ErrorCode = d = {})));
      const c = "0123456789abcdef";
      class Logger {
        constructor(t) {
          Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1,
          });
        }
        _log(t, e) {
          const r = t.toLowerCase();
          (null == f[r] &&
            this.throwArgumentError("invalid log level name", "logLevel", t),
            s > f[r] || console.log.apply(console, e));
        }
        debug() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.DEBUG, e);
        }
        info() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.INFO, e);
        }
        warn() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this._log(Logger.levels.WARNING, e);
        }
        makeError(t, e, r) {
          if (o) return this.makeError("censored error", e, {});
          (e || (e = Logger.errors.UNKNOWN_ERROR), r || (r = {}));
          const n = [];
          (Object.keys(r).forEach((t) => {
            const e = r[t];
            try {
              if (e instanceof Uint8Array) {
                let r = "";
                for (let t = 0; t < e.length; t++)
                  ((r += c[e[t] >> 4]), (r += c[15 & e[t]]));
                n.push(t + "=Uint8Array(0x" + r + ")");
              } else n.push(t + "=" + JSON.stringify(e));
            } catch (s) {
              n.push(t + "=" + JSON.stringify(r[t].toString()));
            }
          }),
            n.push("code=" + e),
            n.push("version=" + this.version));
          const i = t;
          let f = "";
          switch (e) {
            case d.NUMERIC_FAULT: {
              f = "NUMERIC_FAULT";
              const e = t;
              switch (e) {
                case "overflow":
                case "underflow":
                case "division-by-zero":
                  f += "-" + e;
                  break;
                case "negative-power":
                case "negative-width":
                  f += "-unsupported";
                  break;
                case "unbound-bitwise-result":
                  f += "-unbound-result";
                  break;
              }
              break;
            }
            case d.CALL_EXCEPTION:
            case d.INSUFFICIENT_FUNDS:
            case d.MISSING_NEW:
            case d.NONCE_EXPIRED:
            case d.REPLACEMENT_UNDERPRICED:
            case d.TRANSACTION_REPLACED:
            case d.UNPREDICTABLE_GAS_LIMIT:
              f = e;
              break;
          }
          (f && (t += " [ See: https://links.ethers.org/v5-errors-" + f + " ]"),
            n.length && (t += " (" + n.join(", ") + ")"));
          const s = new Error(t);
          return (
            (s.reason = i),
            (s.code = e),
            Object.keys(r).forEach(function (t) {
              s[t] = r[t];
            }),
            s
          );
        }
        throwError(t, e, r) {
          throw this.makeError(t, e, r);
        }
        throwArgumentError(t, e, r) {
          return this.throwError(t, Logger.errors.INVALID_ARGUMENT, {
            argument: e,
            value: r,
          });
        }
        assert(t, e, r, n) {
          t || this.throwError(e, r, n);
        }
        assertArgument(t, e, r, n) {
          t || this.throwArgumentError(e, r, n);
        }
        checkNormalize(t) {
          (null == t && (t = "platform missing String.prototype.normalize"),
            h &&
              this.throwError(
                "platform missing String.prototype.normalize",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "String.prototype.normalize", form: h },
              ));
        }
        checkSafeUint53(t, e) {
          "number" === typeof t &&
            (null == e && (e = "value not safe"),
            (t < 0 || t >= 9007199254740991) &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: t,
              }),
            t % 1 &&
              this.throwError(e, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: t,
              }));
        }
        checkArgumentCount(t, e, r) {
          ((r = r ? ": " + r : ""),
            t < e &&
              this.throwError(
                "missing argument" + r,
                Logger.errors.MISSING_ARGUMENT,
                { count: t, expectedCount: e },
              ),
            t > e &&
              this.throwError(
                "too many arguments" + r,
                Logger.errors.UNEXPECTED_ARGUMENT,
                { count: t, expectedCount: e },
              ));
        }
        checkNew(t, e) {
          (t !== Object && null != t) ||
            this.throwError("missing new", Logger.errors.MISSING_NEW, {
              name: e.name,
            });
        }
        checkAbstract(t, e) {
          t === e
            ? this.throwError(
                "cannot instantiate abstract class " +
                  JSON.stringify(e.name) +
                  " directly; use a sub-class",
                Logger.errors.UNSUPPORTED_OPERATION,
                { name: t.name, operation: "new" },
              )
            : (t !== Object && null != t) ||
              this.throwError("missing new", Logger.errors.MISSING_NEW, {
                name: e.name,
              });
        }
        static globalLogger() {
          return (u || (u = new Logger(n.version)), u);
        }
        static setCensorship(t, e) {
          if (
            (!t &&
              e &&
              this.globalLogger().throwError(
                "cannot permanently disable censorship",
                Logger.errors.UNSUPPORTED_OPERATION,
                { operation: "setCensorship" },
              ),
            i)
          ) {
            if (!t) return;
            this.globalLogger().throwError(
              "error censorship permanent",
              Logger.errors.UNSUPPORTED_OPERATION,
              { operation: "setCensorship" },
            );
          }
          ((o = !!t), (i = !!e));
        }
        static setLogLevel(t) {
          const e = f[t.toLowerCase()];
          null != e
            ? (s = e)
            : Logger.globalLogger().warn("invalid log level - " + t);
        }
        static from(t) {
          return new Logger(t);
        }
      }
      ((e.Logger = Logger), (Logger.errors = d), (Logger.levels = l));
    },
    477: function (t, e, r) {
      (function (t) {
        (function (t, e) {
          "use strict";
          function n(t, e) {
            if (!t) throw new Error(e || "Assertion failed");
          }
          function i(t, e) {
            t.super_ = e;
            var r = function () {};
            ((r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t));
          }
          function o(t, e, r) {
            if (o.isBN(t)) return t;
            ((this.negative = 0),
              (this.words = null),
              (this.length = 0),
              (this.red = null),
              null !== t &&
                (("le" !== e && "be" !== e) || ((r = e), (e = 10)),
                this._init(t || 0, e || 10, r || "be")));
          }
          var f;
          ("object" === typeof t ? (t.exports = o) : (e.BN = o),
            (o.BN = o),
            (o.wordSize = 26));
          try {
            f =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.Buffer
                ? window.Buffer
                : r(1285).Buffer;
          } catch (x) {}
          function s(t, e) {
            var r = t.charCodeAt(e);
            return r >= 48 && r <= 57
              ? r - 48
              : r >= 65 && r <= 70
                ? r - 55
                : r >= 97 && r <= 102
                  ? r - 87
                  : void n(!1, "Invalid character in " + t);
          }
          function u(t, e, r) {
            var n = s(t, r);
            return (r - 1 >= e && (n |= s(t, r - 1) << 4), n);
          }
          function a(t, e, r, i) {
            for (
              var o = 0, f = 0, s = Math.min(t.length, r), u = e;
              u < s;
              u++
            ) {
              var a = t.charCodeAt(u) - 48;
              ((o *= i),
                (f = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
                n(a >= 0 && f < i, "Invalid character"),
                (o += f));
            }
            return o;
          }
          function h(t, e) {
            ((t.words = e.words),
              (t.length = e.length),
              (t.negative = e.negative),
              (t.red = e.red));
          }
          if (
            ((o.isBN = function (t) {
              return (
                t instanceof o ||
                (null !== t &&
                  "object" === typeof t &&
                  t.constructor.wordSize === o.wordSize &&
                  Array.isArray(t.words))
              );
            }),
            (o.max = function (t, e) {
              return t.cmp(e) > 0 ? t : e;
            }),
            (o.min = function (t, e) {
              return t.cmp(e) < 0 ? t : e;
            }),
            (o.prototype._init = function (t, e, r) {
              if ("number" === typeof t) return this._initNumber(t, e, r);
              if ("object" === typeof t) return this._initArray(t, e, r);
              ("hex" === e && (e = 16),
                n(e === (0 | e) && e >= 2 && e <= 36),
                (t = t.toString().replace(/\s+/g, "")));
              var i = 0;
              ("-" === t[0] && (i++, (this.negative = 1)),
                i < t.length &&
                  (16 === e
                    ? this._parseHex(t, i, r)
                    : (this._parseBase(t, e, i),
                      "le" === r && this._initArray(this.toArray(), e, r))));
            }),
            (o.prototype._initNumber = function (t, e, r) {
              (t < 0 && ((this.negative = 1), (t = -t)),
                t < 67108864
                  ? ((this.words = [67108863 & t]), (this.length = 1))
                  : t < 4503599627370496
                    ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                      (this.length = 2))
                    : (n(t < 9007199254740992),
                      (this.words = [
                        67108863 & t,
                        (t / 67108864) & 67108863,
                        1,
                      ]),
                      (this.length = 3)),
                "le" === r && this._initArray(this.toArray(), e, r));
            }),
            (o.prototype._initArray = function (t, e, r) {
              if ((n("number" === typeof t.length), t.length <= 0))
                return ((this.words = [0]), (this.length = 1), this);
              ((this.length = Math.ceil(t.length / 3)),
                (this.words = new Array(this.length)));
              for (var i = 0; i < this.length; i++) this.words[i] = 0;
              var o,
                f,
                s = 0;
              if ("be" === r)
                for (i = t.length - 1, o = 0; i >= 0; i -= 3)
                  ((f = t[i] | (t[i - 1] << 8) | (t[i - 2] << 16)),
                    (this.words[o] |= (f << s) & 67108863),
                    (this.words[o + 1] = (f >>> (26 - s)) & 67108863),
                    (s += 24),
                    s >= 26 && ((s -= 26), o++));
              else if ("le" === r)
                for (i = 0, o = 0; i < t.length; i += 3)
                  ((f = t[i] | (t[i + 1] << 8) | (t[i + 2] << 16)),
                    (this.words[o] |= (f << s) & 67108863),
                    (this.words[o + 1] = (f >>> (26 - s)) & 67108863),
                    (s += 24),
                    s >= 26 && ((s -= 26), o++));
              return this._strip();
            }),
            (o.prototype._parseHex = function (t, e, r) {
              ((this.length = Math.ceil((t.length - e) / 6)),
                (this.words = new Array(this.length)));
              for (var n = 0; n < this.length; n++) this.words[n] = 0;
              var i,
                o = 0,
                f = 0;
              if ("be" === r)
                for (n = t.length - 1; n >= e; n -= 2)
                  ((i = u(t, e, n) << o),
                    (this.words[f] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (f += 1), (this.words[f] |= i >>> 26))
                      : (o += 8));
              else {
                var s = t.length - e;
                for (n = s % 2 === 0 ? e + 1 : e; n < t.length; n += 2)
                  ((i = u(t, e, n) << o),
                    (this.words[f] |= 67108863 & i),
                    o >= 18
                      ? ((o -= 18), (f += 1), (this.words[f] |= i >>> 26))
                      : (o += 8));
              }
              this._strip();
            }),
            (o.prototype._parseBase = function (t, e, r) {
              ((this.words = [0]), (this.length = 1));
              for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
              (n--, (i = (i / e) | 0));
              for (
                var o = t.length - r,
                  f = o % n,
                  s = Math.min(o, o - f) + r,
                  u = 0,
                  h = r;
                h < s;
                h += n
              )
                ((u = a(t, h, h + n, e)),
                  this.imuln(i),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              if (0 !== f) {
                var l = 1;
                for (u = a(t, h, t.length, e), h = 0; h < f; h++) l *= e;
                (this.imuln(l),
                  this.words[0] + u < 67108864
                    ? (this.words[0] += u)
                    : this._iaddn(u));
              }
              this._strip();
            }),
            (o.prototype.copy = function (t) {
              t.words = new Array(this.length);
              for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
              ((t.length = this.length),
                (t.negative = this.negative),
                (t.red = this.red));
            }),
            (o.prototype._move = function (t) {
              h(t, this);
            }),
            (o.prototype.clone = function () {
              var t = new o(null);
              return (this.copy(t), t);
            }),
            (o.prototype._expand = function (t) {
              while (this.length < t) this.words[this.length++] = 0;
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
              o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
            } catch (x) {
              o.prototype.inspect = l;
            }
          else o.prototype.inspect = l;
          function l() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          }
          var d = [
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
            c = [
              0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6,
              6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            ],
            p = [
              0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
              16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
              11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
              5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
              20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
              60466176,
            ];
          ((o.prototype.toString = function (t, e) {
            var r;
            if (((t = t || 10), (e = 0 | e || 1), 16 === t || "hex" === t)) {
              r = "";
              for (var i = 0, o = 0, f = 0; f < this.length; f++) {
                var s = this.words[f],
                  u = (16777215 & ((s << i) | o)).toString(16);
                ((o = (s >>> (24 - i)) & 16777215),
                  (i += 2),
                  i >= 26 && ((i -= 26), f--),
                  (r =
                    0 !== o || f !== this.length - 1
                      ? d[6 - u.length] + u + r
                      : u + r));
              }
              0 !== o && (r = o.toString(16) + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            if (t === (0 | t) && t >= 2 && t <= 36) {
              var a = c[t],
                h = p[t];
              r = "";
              var l = this.clone();
              l.negative = 0;
              while (!l.isZero()) {
                var m = l.modrn(h).toString(t);
                ((l = l.idivn(h)),
                  (r = l.isZero() ? m + r : d[a - m.length] + m + r));
              }
              this.isZero() && (r = "0" + r);
              while (r.length % e !== 0) r = "0" + r;
              return (0 !== this.negative && (r = "-" + r), r);
            }
            n(!1, "Base should be between 2 and 36");
          }),
            (o.prototype.toNumber = function () {
              var t = this.words[0];
              return (
                2 === this.length
                  ? (t += 67108864 * this.words[1])
                  : 3 === this.length && 1 === this.words[2]
                    ? (t += 4503599627370496 + 67108864 * this.words[1])
                    : this.length > 2 &&
                      n(!1, "Number can only safely store up to 53 bits"),
                0 !== this.negative ? -t : t
              );
            }),
            (o.prototype.toJSON = function () {
              return this.toString(16, 2);
            }),
            f &&
              (o.prototype.toBuffer = function (t, e) {
                return this.toArrayLike(f, t, e);
              }),
            (o.prototype.toArray = function (t, e) {
              return this.toArrayLike(Array, t, e);
            }));
          var m = function (t, e) {
            return t.allocUnsafe ? t.allocUnsafe(e) : new t(e);
          };
          function g(t) {
            for (var e = new Array(t.bitLength()), r = 0; r < e.length; r++) {
              var n = (r / 26) | 0,
                i = r % 26;
              e[r] = (t.words[n] >>> i) & 1;
            }
            return e;
          }
          function A(t, e, r) {
            r.negative = e.negative ^ t.negative;
            var n = (t.length + e.length) | 0;
            ((r.length = n), (n = (n - 1) | 0));
            var i = 0 | t.words[0],
              o = 0 | e.words[0],
              f = i * o,
              s = 67108863 & f,
              u = (f / 67108864) | 0;
            r.words[0] = s;
            for (var a = 1; a < n; a++) {
              for (
                var h = u >>> 26,
                  l = 67108863 & u,
                  d = Math.min(a, e.length - 1),
                  c = Math.max(0, a - t.length + 1);
                c <= d;
                c++
              ) {
                var p = (a - c) | 0;
                ((i = 0 | t.words[p]),
                  (o = 0 | e.words[c]),
                  (f = i * o + l),
                  (h += (f / 67108864) | 0),
                  (l = 67108863 & f));
              }
              ((r.words[a] = 0 | l), (u = 0 | h));
            }
            return (0 !== u ? (r.words[a] = 0 | u) : r.length--, r._strip());
          }
          ((o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            (n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0"));
            var f = m(t, o),
              s = "le" === e ? "LE" : "BE";
            return (this["_toArrayLike" + s](f, i), f);
          }),
            (o.prototype._toArrayLikeLE = function (t, e) {
              for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
                var f = (this.words[i] << o) | n;
                ((t[r++] = 255 & f),
                  r < t.length && (t[r++] = (f >> 8) & 255),
                  r < t.length && (t[r++] = (f >> 16) & 255),
                  6 === o
                    ? (r < t.length && (t[r++] = (f >> 24) & 255),
                      (n = 0),
                      (o = 0))
                    : ((n = f >>> 24), (o += 2)));
              }
              if (r < t.length) {
                t[r++] = n;
                while (r < t.length) t[r++] = 0;
              }
            }),
            (o.prototype._toArrayLikeBE = function (t, e) {
              for (
                var r = t.length - 1, n = 0, i = 0, o = 0;
                i < this.length;
                i++
              ) {
                var f = (this.words[i] << o) | n;
                ((t[r--] = 255 & f),
                  r >= 0 && (t[r--] = (f >> 8) & 255),
                  r >= 0 && (t[r--] = (f >> 16) & 255),
                  6 === o
                    ? (r >= 0 && (t[r--] = (f >> 24) & 255), (n = 0), (o = 0))
                    : ((n = f >>> 24), (o += 2)));
              }
              if (r >= 0) {
                t[r--] = n;
                while (r >= 0) t[r--] = 0;
              }
            }),
            Math.clz32
              ? (o.prototype._countBits = function (t) {
                  return 32 - Math.clz32(t);
                })
              : (o.prototype._countBits = function (t) {
                  var e = t,
                    r = 0;
                  return (
                    e >= 4096 && ((r += 13), (e >>>= 13)),
                    e >= 64 && ((r += 7), (e >>>= 7)),
                    e >= 8 && ((r += 4), (e >>>= 4)),
                    e >= 2 && ((r += 2), (e >>>= 2)),
                    r + e
                  );
                }),
            (o.prototype._zeroBits = function (t) {
              if (0 === t) return 26;
              var e = t,
                r = 0;
              return (
                0 === (8191 & e) && ((r += 13), (e >>>= 13)),
                0 === (127 & e) && ((r += 7), (e >>>= 7)),
                0 === (15 & e) && ((r += 4), (e >>>= 4)),
                0 === (3 & e) && ((r += 2), (e >>>= 2)),
                0 === (1 & e) && r++,
                r
              );
            }),
            (o.prototype.bitLength = function () {
              var t = this.words[this.length - 1],
                e = this._countBits(t);
              return 26 * (this.length - 1) + e;
            }),
            (o.prototype.zeroBits = function () {
              if (this.isZero()) return 0;
              for (var t = 0, e = 0; e < this.length; e++) {
                var r = this._zeroBits(this.words[e]);
                if (((t += r), 26 !== r)) break;
              }
              return t;
            }),
            (o.prototype.byteLength = function () {
              return Math.ceil(this.bitLength() / 8);
            }),
            (o.prototype.toTwos = function (t) {
              return 0 !== this.negative
                ? this.abs().inotn(t).iaddn(1)
                : this.clone();
            }),
            (o.prototype.fromTwos = function (t) {
              return this.testn(t - 1)
                ? this.notn(t).iaddn(1).ineg()
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
            (o.prototype.iuor = function (t) {
              while (this.length < t.length) this.words[this.length++] = 0;
              for (var e = 0; e < t.length; e++)
                this.words[e] = this.words[e] | t.words[e];
              return this._strip();
            }),
            (o.prototype.ior = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuor(t));
            }),
            (o.prototype.or = function (t) {
              return this.length > t.length
                ? this.clone().ior(t)
                : t.clone().ior(this);
            }),
            (o.prototype.uor = function (t) {
              return this.length > t.length
                ? this.clone().iuor(t)
                : t.clone().iuor(this);
            }),
            (o.prototype.iuand = function (t) {
              var e;
              e = this.length > t.length ? t : this;
              for (var r = 0; r < e.length; r++)
                this.words[r] = this.words[r] & t.words[r];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.iand = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuand(t));
            }),
            (o.prototype.and = function (t) {
              return this.length > t.length
                ? this.clone().iand(t)
                : t.clone().iand(this);
            }),
            (o.prototype.uand = function (t) {
              return this.length > t.length
                ? this.clone().iuand(t)
                : t.clone().iuand(this);
            }),
            (o.prototype.iuxor = function (t) {
              var e, r;
              this.length > t.length
                ? ((e = this), (r = t))
                : ((e = t), (r = this));
              for (var n = 0; n < r.length; n++)
                this.words[n] = e.words[n] ^ r.words[n];
              if (this !== e)
                for (; n < e.length; n++) this.words[n] = e.words[n];
              return ((this.length = e.length), this._strip());
            }),
            (o.prototype.ixor = function (t) {
              return (n(0 === (this.negative | t.negative)), this.iuxor(t));
            }),
            (o.prototype.xor = function (t) {
              return this.length > t.length
                ? this.clone().ixor(t)
                : t.clone().ixor(this);
            }),
            (o.prototype.uxor = function (t) {
              return this.length > t.length
                ? this.clone().iuxor(t)
                : t.clone().iuxor(this);
            }),
            (o.prototype.inotn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = 0 | Math.ceil(t / 26),
                r = t % 26;
              (this._expand(e), r > 0 && e--);
              for (var i = 0; i < e; i++)
                this.words[i] = 67108863 & ~this.words[i];
              return (
                r > 0 &&
                  (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
                this._strip()
              );
            }),
            (o.prototype.notn = function (t) {
              return this.clone().inotn(t);
            }),
            (o.prototype.setn = function (t, e) {
              n("number" === typeof t && t >= 0);
              var r = (t / 26) | 0,
                i = t % 26;
              return (
                this._expand(r + 1),
                (this.words[r] = e
                  ? this.words[r] | (1 << i)
                  : this.words[r] & ~(1 << i)),
                this._strip()
              );
            }),
            (o.prototype.iadd = function (t) {
              var e, r, n;
              if (0 !== this.negative && 0 === t.negative)
                return (
                  (this.negative = 0),
                  (e = this.isub(t)),
                  (this.negative ^= 1),
                  this._normSign()
                );
              if (0 === this.negative && 0 !== t.negative)
                return (
                  (t.negative = 0),
                  (e = this.isub(t)),
                  (t.negative = 1),
                  e._normSign()
                );
              this.length > t.length
                ? ((r = this), (n = t))
                : ((r = t), (n = this));
              for (var i = 0, o = 0; o < n.length; o++)
                ((e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26));
              for (; 0 !== i && o < r.length; o++)
                ((e = (0 | r.words[o]) + i),
                  (this.words[o] = 67108863 & e),
                  (i = e >>> 26));
              if (((this.length = r.length), 0 !== i))
                ((this.words[this.length] = i), this.length++);
              else if (r !== this)
                for (; o < r.length; o++) this.words[o] = r.words[o];
              return this;
            }),
            (o.prototype.add = function (t) {
              var e;
              return 0 !== t.negative && 0 === this.negative
                ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
                : 0 === t.negative && 0 !== this.negative
                  ? ((this.negative = 0),
                    (e = t.sub(this)),
                    (this.negative = 1),
                    e)
                  : this.length > t.length
                    ? this.clone().iadd(t)
                    : t.clone().iadd(this);
            }),
            (o.prototype.isub = function (t) {
              if (0 !== t.negative) {
                t.negative = 0;
                var e = this.iadd(t);
                return ((t.negative = 1), e._normSign());
              }
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iadd(t),
                  (this.negative = 1),
                  this._normSign()
                );
              var r,
                n,
                i = this.cmp(t);
              if (0 === i)
                return (
                  (this.negative = 0),
                  (this.length = 1),
                  (this.words[0] = 0),
                  this
                );
              i > 0 ? ((r = this), (n = t)) : ((r = t), (n = this));
              for (var o = 0, f = 0; f < n.length; f++)
                ((e = (0 | r.words[f]) - (0 | n.words[f]) + o),
                  (o = e >> 26),
                  (this.words[f] = 67108863 & e));
              for (; 0 !== o && f < r.length; f++)
                ((e = (0 | r.words[f]) + o),
                  (o = e >> 26),
                  (this.words[f] = 67108863 & e));
              if (0 === o && f < r.length && r !== this)
                for (; f < r.length; f++) this.words[f] = r.words[f];
              return (
                (this.length = Math.max(this.length, f)),
                r !== this && (this.negative = 1),
                this._strip()
              );
            }),
            (o.prototype.sub = function (t) {
              return this.clone().isub(t);
            }));
          var y = function (t, e, r) {
            var n,
              i,
              o,
              f = t.words,
              s = e.words,
              u = r.words,
              a = 0,
              h = 0 | f[0],
              l = 8191 & h,
              d = h >>> 13,
              c = 0 | f[1],
              p = 8191 & c,
              m = c >>> 13,
              g = 0 | f[2],
              A = 8191 & g,
              y = g >>> 13,
              v = 0 | f[3],
              b = 8191 & v,
              w = v >>> 13,
              M = 0 | f[4],
              E = 8191 & M,
              I = M >>> 13,
              B = 0 | f[5],
              S = 8191 & B,
              N = B >>> 13,
              C = 0 | f[6],
              P = 8191 & C,
              x = C >>> 13,
              O = 0 | f[7],
              R = 8191 & O,
              _ = O >>> 13,
              D = 0 | f[8],
              k = 8191 & D,
              F = D >>> 13,
              T = 0 | f[9],
              U = 8191 & T,
              L = T >>> 13,
              q = 0 | s[0],
              j = 8191 & q,
              Q = q >>> 13,
              z = 0 | s[1],
              K = 8191 & z,
              G = z >>> 13,
              J = 0 | s[2],
              Y = 8191 & J,
              H = J >>> 13,
              Z = 0 | s[3],
              X = 8191 & Z,
              V = Z >>> 13,
              W = 0 | s[4],
              $ = 8191 & W,
              tt = W >>> 13,
              et = 0 | s[5],
              rt = 8191 & et,
              nt = et >>> 13,
              it = 0 | s[6],
              ot = 8191 & it,
              ft = it >>> 13,
              st = 0 | s[7],
              ut = 8191 & st,
              at = st >>> 13,
              ht = 0 | s[8],
              lt = 8191 & ht,
              dt = ht >>> 13,
              ct = 0 | s[9],
              pt = 8191 & ct,
              mt = ct >>> 13;
            ((r.negative = t.negative ^ e.negative),
              (r.length = 19),
              (n = Math.imul(l, j)),
              (i = Math.imul(l, Q)),
              (i = (i + Math.imul(d, j)) | 0),
              (o = Math.imul(d, Q)));
            var gt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (gt >>> 26)) | 0),
              (gt &= 67108863),
              (n = Math.imul(p, j)),
              (i = Math.imul(p, Q)),
              (i = (i + Math.imul(m, j)) | 0),
              (o = Math.imul(m, Q)),
              (n = (n + Math.imul(l, K)) | 0),
              (i = (i + Math.imul(l, G)) | 0),
              (i = (i + Math.imul(d, K)) | 0),
              (o = (o + Math.imul(d, G)) | 0));
            var At = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (At >>> 26)) | 0),
              (At &= 67108863),
              (n = Math.imul(A, j)),
              (i = Math.imul(A, Q)),
              (i = (i + Math.imul(y, j)) | 0),
              (o = Math.imul(y, Q)),
              (n = (n + Math.imul(p, K)) | 0),
              (i = (i + Math.imul(p, G)) | 0),
              (i = (i + Math.imul(m, K)) | 0),
              (o = (o + Math.imul(m, G)) | 0),
              (n = (n + Math.imul(l, Y)) | 0),
              (i = (i + Math.imul(l, H)) | 0),
              (i = (i + Math.imul(d, Y)) | 0),
              (o = (o + Math.imul(d, H)) | 0));
            var yt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (yt >>> 26)) | 0),
              (yt &= 67108863),
              (n = Math.imul(b, j)),
              (i = Math.imul(b, Q)),
              (i = (i + Math.imul(w, j)) | 0),
              (o = Math.imul(w, Q)),
              (n = (n + Math.imul(A, K)) | 0),
              (i = (i + Math.imul(A, G)) | 0),
              (i = (i + Math.imul(y, K)) | 0),
              (o = (o + Math.imul(y, G)) | 0),
              (n = (n + Math.imul(p, Y)) | 0),
              (i = (i + Math.imul(p, H)) | 0),
              (i = (i + Math.imul(m, Y)) | 0),
              (o = (o + Math.imul(m, H)) | 0),
              (n = (n + Math.imul(l, X)) | 0),
              (i = (i + Math.imul(l, V)) | 0),
              (i = (i + Math.imul(d, X)) | 0),
              (o = (o + Math.imul(d, V)) | 0));
            var vt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (vt >>> 26)) | 0),
              (vt &= 67108863),
              (n = Math.imul(E, j)),
              (i = Math.imul(E, Q)),
              (i = (i + Math.imul(I, j)) | 0),
              (o = Math.imul(I, Q)),
              (n = (n + Math.imul(b, K)) | 0),
              (i = (i + Math.imul(b, G)) | 0),
              (i = (i + Math.imul(w, K)) | 0),
              (o = (o + Math.imul(w, G)) | 0),
              (n = (n + Math.imul(A, Y)) | 0),
              (i = (i + Math.imul(A, H)) | 0),
              (i = (i + Math.imul(y, Y)) | 0),
              (o = (o + Math.imul(y, H)) | 0),
              (n = (n + Math.imul(p, X)) | 0),
              (i = (i + Math.imul(p, V)) | 0),
              (i = (i + Math.imul(m, X)) | 0),
              (o = (o + Math.imul(m, V)) | 0),
              (n = (n + Math.imul(l, $)) | 0),
              (i = (i + Math.imul(l, tt)) | 0),
              (i = (i + Math.imul(d, $)) | 0),
              (o = (o + Math.imul(d, tt)) | 0));
            var bt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (bt >>> 26)) | 0),
              (bt &= 67108863),
              (n = Math.imul(S, j)),
              (i = Math.imul(S, Q)),
              (i = (i + Math.imul(N, j)) | 0),
              (o = Math.imul(N, Q)),
              (n = (n + Math.imul(E, K)) | 0),
              (i = (i + Math.imul(E, G)) | 0),
              (i = (i + Math.imul(I, K)) | 0),
              (o = (o + Math.imul(I, G)) | 0),
              (n = (n + Math.imul(b, Y)) | 0),
              (i = (i + Math.imul(b, H)) | 0),
              (i = (i + Math.imul(w, Y)) | 0),
              (o = (o + Math.imul(w, H)) | 0),
              (n = (n + Math.imul(A, X)) | 0),
              (i = (i + Math.imul(A, V)) | 0),
              (i = (i + Math.imul(y, X)) | 0),
              (o = (o + Math.imul(y, V)) | 0),
              (n = (n + Math.imul(p, $)) | 0),
              (i = (i + Math.imul(p, tt)) | 0),
              (i = (i + Math.imul(m, $)) | 0),
              (o = (o + Math.imul(m, tt)) | 0),
              (n = (n + Math.imul(l, rt)) | 0),
              (i = (i + Math.imul(l, nt)) | 0),
              (i = (i + Math.imul(d, rt)) | 0),
              (o = (o + Math.imul(d, nt)) | 0));
            var wt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (wt >>> 26)) | 0),
              (wt &= 67108863),
              (n = Math.imul(P, j)),
              (i = Math.imul(P, Q)),
              (i = (i + Math.imul(x, j)) | 0),
              (o = Math.imul(x, Q)),
              (n = (n + Math.imul(S, K)) | 0),
              (i = (i + Math.imul(S, G)) | 0),
              (i = (i + Math.imul(N, K)) | 0),
              (o = (o + Math.imul(N, G)) | 0),
              (n = (n + Math.imul(E, Y)) | 0),
              (i = (i + Math.imul(E, H)) | 0),
              (i = (i + Math.imul(I, Y)) | 0),
              (o = (o + Math.imul(I, H)) | 0),
              (n = (n + Math.imul(b, X)) | 0),
              (i = (i + Math.imul(b, V)) | 0),
              (i = (i + Math.imul(w, X)) | 0),
              (o = (o + Math.imul(w, V)) | 0),
              (n = (n + Math.imul(A, $)) | 0),
              (i = (i + Math.imul(A, tt)) | 0),
              (i = (i + Math.imul(y, $)) | 0),
              (o = (o + Math.imul(y, tt)) | 0),
              (n = (n + Math.imul(p, rt)) | 0),
              (i = (i + Math.imul(p, nt)) | 0),
              (i = (i + Math.imul(m, rt)) | 0),
              (o = (o + Math.imul(m, nt)) | 0),
              (n = (n + Math.imul(l, ot)) | 0),
              (i = (i + Math.imul(l, ft)) | 0),
              (i = (i + Math.imul(d, ot)) | 0),
              (o = (o + Math.imul(d, ft)) | 0));
            var Mt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Mt >>> 26)) | 0),
              (Mt &= 67108863),
              (n = Math.imul(R, j)),
              (i = Math.imul(R, Q)),
              (i = (i + Math.imul(_, j)) | 0),
              (o = Math.imul(_, Q)),
              (n = (n + Math.imul(P, K)) | 0),
              (i = (i + Math.imul(P, G)) | 0),
              (i = (i + Math.imul(x, K)) | 0),
              (o = (o + Math.imul(x, G)) | 0),
              (n = (n + Math.imul(S, Y)) | 0),
              (i = (i + Math.imul(S, H)) | 0),
              (i = (i + Math.imul(N, Y)) | 0),
              (o = (o + Math.imul(N, H)) | 0),
              (n = (n + Math.imul(E, X)) | 0),
              (i = (i + Math.imul(E, V)) | 0),
              (i = (i + Math.imul(I, X)) | 0),
              (o = (o + Math.imul(I, V)) | 0),
              (n = (n + Math.imul(b, $)) | 0),
              (i = (i + Math.imul(b, tt)) | 0),
              (i = (i + Math.imul(w, $)) | 0),
              (o = (o + Math.imul(w, tt)) | 0),
              (n = (n + Math.imul(A, rt)) | 0),
              (i = (i + Math.imul(A, nt)) | 0),
              (i = (i + Math.imul(y, rt)) | 0),
              (o = (o + Math.imul(y, nt)) | 0),
              (n = (n + Math.imul(p, ot)) | 0),
              (i = (i + Math.imul(p, ft)) | 0),
              (i = (i + Math.imul(m, ot)) | 0),
              (o = (o + Math.imul(m, ft)) | 0),
              (n = (n + Math.imul(l, ut)) | 0),
              (i = (i + Math.imul(l, at)) | 0),
              (i = (i + Math.imul(d, ut)) | 0),
              (o = (o + Math.imul(d, at)) | 0));
            var Et = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Et >>> 26)) | 0),
              (Et &= 67108863),
              (n = Math.imul(k, j)),
              (i = Math.imul(k, Q)),
              (i = (i + Math.imul(F, j)) | 0),
              (o = Math.imul(F, Q)),
              (n = (n + Math.imul(R, K)) | 0),
              (i = (i + Math.imul(R, G)) | 0),
              (i = (i + Math.imul(_, K)) | 0),
              (o = (o + Math.imul(_, G)) | 0),
              (n = (n + Math.imul(P, Y)) | 0),
              (i = (i + Math.imul(P, H)) | 0),
              (i = (i + Math.imul(x, Y)) | 0),
              (o = (o + Math.imul(x, H)) | 0),
              (n = (n + Math.imul(S, X)) | 0),
              (i = (i + Math.imul(S, V)) | 0),
              (i = (i + Math.imul(N, X)) | 0),
              (o = (o + Math.imul(N, V)) | 0),
              (n = (n + Math.imul(E, $)) | 0),
              (i = (i + Math.imul(E, tt)) | 0),
              (i = (i + Math.imul(I, $)) | 0),
              (o = (o + Math.imul(I, tt)) | 0),
              (n = (n + Math.imul(b, rt)) | 0),
              (i = (i + Math.imul(b, nt)) | 0),
              (i = (i + Math.imul(w, rt)) | 0),
              (o = (o + Math.imul(w, nt)) | 0),
              (n = (n + Math.imul(A, ot)) | 0),
              (i = (i + Math.imul(A, ft)) | 0),
              (i = (i + Math.imul(y, ot)) | 0),
              (o = (o + Math.imul(y, ft)) | 0),
              (n = (n + Math.imul(p, ut)) | 0),
              (i = (i + Math.imul(p, at)) | 0),
              (i = (i + Math.imul(m, ut)) | 0),
              (o = (o + Math.imul(m, at)) | 0),
              (n = (n + Math.imul(l, lt)) | 0),
              (i = (i + Math.imul(l, dt)) | 0),
              (i = (i + Math.imul(d, lt)) | 0),
              (o = (o + Math.imul(d, dt)) | 0));
            var It = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (It >>> 26)) | 0),
              (It &= 67108863),
              (n = Math.imul(U, j)),
              (i = Math.imul(U, Q)),
              (i = (i + Math.imul(L, j)) | 0),
              (o = Math.imul(L, Q)),
              (n = (n + Math.imul(k, K)) | 0),
              (i = (i + Math.imul(k, G)) | 0),
              (i = (i + Math.imul(F, K)) | 0),
              (o = (o + Math.imul(F, G)) | 0),
              (n = (n + Math.imul(R, Y)) | 0),
              (i = (i + Math.imul(R, H)) | 0),
              (i = (i + Math.imul(_, Y)) | 0),
              (o = (o + Math.imul(_, H)) | 0),
              (n = (n + Math.imul(P, X)) | 0),
              (i = (i + Math.imul(P, V)) | 0),
              (i = (i + Math.imul(x, X)) | 0),
              (o = (o + Math.imul(x, V)) | 0),
              (n = (n + Math.imul(S, $)) | 0),
              (i = (i + Math.imul(S, tt)) | 0),
              (i = (i + Math.imul(N, $)) | 0),
              (o = (o + Math.imul(N, tt)) | 0),
              (n = (n + Math.imul(E, rt)) | 0),
              (i = (i + Math.imul(E, nt)) | 0),
              (i = (i + Math.imul(I, rt)) | 0),
              (o = (o + Math.imul(I, nt)) | 0),
              (n = (n + Math.imul(b, ot)) | 0),
              (i = (i + Math.imul(b, ft)) | 0),
              (i = (i + Math.imul(w, ot)) | 0),
              (o = (o + Math.imul(w, ft)) | 0),
              (n = (n + Math.imul(A, ut)) | 0),
              (i = (i + Math.imul(A, at)) | 0),
              (i = (i + Math.imul(y, ut)) | 0),
              (o = (o + Math.imul(y, at)) | 0),
              (n = (n + Math.imul(p, lt)) | 0),
              (i = (i + Math.imul(p, dt)) | 0),
              (i = (i + Math.imul(m, lt)) | 0),
              (o = (o + Math.imul(m, dt)) | 0),
              (n = (n + Math.imul(l, pt)) | 0),
              (i = (i + Math.imul(l, mt)) | 0),
              (i = (i + Math.imul(d, pt)) | 0),
              (o = (o + Math.imul(d, mt)) | 0));
            var Bt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Bt >>> 26)) | 0),
              (Bt &= 67108863),
              (n = Math.imul(U, K)),
              (i = Math.imul(U, G)),
              (i = (i + Math.imul(L, K)) | 0),
              (o = Math.imul(L, G)),
              (n = (n + Math.imul(k, Y)) | 0),
              (i = (i + Math.imul(k, H)) | 0),
              (i = (i + Math.imul(F, Y)) | 0),
              (o = (o + Math.imul(F, H)) | 0),
              (n = (n + Math.imul(R, X)) | 0),
              (i = (i + Math.imul(R, V)) | 0),
              (i = (i + Math.imul(_, X)) | 0),
              (o = (o + Math.imul(_, V)) | 0),
              (n = (n + Math.imul(P, $)) | 0),
              (i = (i + Math.imul(P, tt)) | 0),
              (i = (i + Math.imul(x, $)) | 0),
              (o = (o + Math.imul(x, tt)) | 0),
              (n = (n + Math.imul(S, rt)) | 0),
              (i = (i + Math.imul(S, nt)) | 0),
              (i = (i + Math.imul(N, rt)) | 0),
              (o = (o + Math.imul(N, nt)) | 0),
              (n = (n + Math.imul(E, ot)) | 0),
              (i = (i + Math.imul(E, ft)) | 0),
              (i = (i + Math.imul(I, ot)) | 0),
              (o = (o + Math.imul(I, ft)) | 0),
              (n = (n + Math.imul(b, ut)) | 0),
              (i = (i + Math.imul(b, at)) | 0),
              (i = (i + Math.imul(w, ut)) | 0),
              (o = (o + Math.imul(w, at)) | 0),
              (n = (n + Math.imul(A, lt)) | 0),
              (i = (i + Math.imul(A, dt)) | 0),
              (i = (i + Math.imul(y, lt)) | 0),
              (o = (o + Math.imul(y, dt)) | 0),
              (n = (n + Math.imul(p, pt)) | 0),
              (i = (i + Math.imul(p, mt)) | 0),
              (i = (i + Math.imul(m, pt)) | 0),
              (o = (o + Math.imul(m, mt)) | 0));
            var St = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (St >>> 26)) | 0),
              (St &= 67108863),
              (n = Math.imul(U, Y)),
              (i = Math.imul(U, H)),
              (i = (i + Math.imul(L, Y)) | 0),
              (o = Math.imul(L, H)),
              (n = (n + Math.imul(k, X)) | 0),
              (i = (i + Math.imul(k, V)) | 0),
              (i = (i + Math.imul(F, X)) | 0),
              (o = (o + Math.imul(F, V)) | 0),
              (n = (n + Math.imul(R, $)) | 0),
              (i = (i + Math.imul(R, tt)) | 0),
              (i = (i + Math.imul(_, $)) | 0),
              (o = (o + Math.imul(_, tt)) | 0),
              (n = (n + Math.imul(P, rt)) | 0),
              (i = (i + Math.imul(P, nt)) | 0),
              (i = (i + Math.imul(x, rt)) | 0),
              (o = (o + Math.imul(x, nt)) | 0),
              (n = (n + Math.imul(S, ot)) | 0),
              (i = (i + Math.imul(S, ft)) | 0),
              (i = (i + Math.imul(N, ot)) | 0),
              (o = (o + Math.imul(N, ft)) | 0),
              (n = (n + Math.imul(E, ut)) | 0),
              (i = (i + Math.imul(E, at)) | 0),
              (i = (i + Math.imul(I, ut)) | 0),
              (o = (o + Math.imul(I, at)) | 0),
              (n = (n + Math.imul(b, lt)) | 0),
              (i = (i + Math.imul(b, dt)) | 0),
              (i = (i + Math.imul(w, lt)) | 0),
              (o = (o + Math.imul(w, dt)) | 0),
              (n = (n + Math.imul(A, pt)) | 0),
              (i = (i + Math.imul(A, mt)) | 0),
              (i = (i + Math.imul(y, pt)) | 0),
              (o = (o + Math.imul(y, mt)) | 0));
            var Nt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Nt >>> 26)) | 0),
              (Nt &= 67108863),
              (n = Math.imul(U, X)),
              (i = Math.imul(U, V)),
              (i = (i + Math.imul(L, X)) | 0),
              (o = Math.imul(L, V)),
              (n = (n + Math.imul(k, $)) | 0),
              (i = (i + Math.imul(k, tt)) | 0),
              (i = (i + Math.imul(F, $)) | 0),
              (o = (o + Math.imul(F, tt)) | 0),
              (n = (n + Math.imul(R, rt)) | 0),
              (i = (i + Math.imul(R, nt)) | 0),
              (i = (i + Math.imul(_, rt)) | 0),
              (o = (o + Math.imul(_, nt)) | 0),
              (n = (n + Math.imul(P, ot)) | 0),
              (i = (i + Math.imul(P, ft)) | 0),
              (i = (i + Math.imul(x, ot)) | 0),
              (o = (o + Math.imul(x, ft)) | 0),
              (n = (n + Math.imul(S, ut)) | 0),
              (i = (i + Math.imul(S, at)) | 0),
              (i = (i + Math.imul(N, ut)) | 0),
              (o = (o + Math.imul(N, at)) | 0),
              (n = (n + Math.imul(E, lt)) | 0),
              (i = (i + Math.imul(E, dt)) | 0),
              (i = (i + Math.imul(I, lt)) | 0),
              (o = (o + Math.imul(I, dt)) | 0),
              (n = (n + Math.imul(b, pt)) | 0),
              (i = (i + Math.imul(b, mt)) | 0),
              (i = (i + Math.imul(w, pt)) | 0),
              (o = (o + Math.imul(w, mt)) | 0));
            var Ct = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Ct >>> 26)) | 0),
              (Ct &= 67108863),
              (n = Math.imul(U, $)),
              (i = Math.imul(U, tt)),
              (i = (i + Math.imul(L, $)) | 0),
              (o = Math.imul(L, tt)),
              (n = (n + Math.imul(k, rt)) | 0),
              (i = (i + Math.imul(k, nt)) | 0),
              (i = (i + Math.imul(F, rt)) | 0),
              (o = (o + Math.imul(F, nt)) | 0),
              (n = (n + Math.imul(R, ot)) | 0),
              (i = (i + Math.imul(R, ft)) | 0),
              (i = (i + Math.imul(_, ot)) | 0),
              (o = (o + Math.imul(_, ft)) | 0),
              (n = (n + Math.imul(P, ut)) | 0),
              (i = (i + Math.imul(P, at)) | 0),
              (i = (i + Math.imul(x, ut)) | 0),
              (o = (o + Math.imul(x, at)) | 0),
              (n = (n + Math.imul(S, lt)) | 0),
              (i = (i + Math.imul(S, dt)) | 0),
              (i = (i + Math.imul(N, lt)) | 0),
              (o = (o + Math.imul(N, dt)) | 0),
              (n = (n + Math.imul(E, pt)) | 0),
              (i = (i + Math.imul(E, mt)) | 0),
              (i = (i + Math.imul(I, pt)) | 0),
              (o = (o + Math.imul(I, mt)) | 0));
            var Pt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Pt >>> 26)) | 0),
              (Pt &= 67108863),
              (n = Math.imul(U, rt)),
              (i = Math.imul(U, nt)),
              (i = (i + Math.imul(L, rt)) | 0),
              (o = Math.imul(L, nt)),
              (n = (n + Math.imul(k, ot)) | 0),
              (i = (i + Math.imul(k, ft)) | 0),
              (i = (i + Math.imul(F, ot)) | 0),
              (o = (o + Math.imul(F, ft)) | 0),
              (n = (n + Math.imul(R, ut)) | 0),
              (i = (i + Math.imul(R, at)) | 0),
              (i = (i + Math.imul(_, ut)) | 0),
              (o = (o + Math.imul(_, at)) | 0),
              (n = (n + Math.imul(P, lt)) | 0),
              (i = (i + Math.imul(P, dt)) | 0),
              (i = (i + Math.imul(x, lt)) | 0),
              (o = (o + Math.imul(x, dt)) | 0),
              (n = (n + Math.imul(S, pt)) | 0),
              (i = (i + Math.imul(S, mt)) | 0),
              (i = (i + Math.imul(N, pt)) | 0),
              (o = (o + Math.imul(N, mt)) | 0));
            var xt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (xt >>> 26)) | 0),
              (xt &= 67108863),
              (n = Math.imul(U, ot)),
              (i = Math.imul(U, ft)),
              (i = (i + Math.imul(L, ot)) | 0),
              (o = Math.imul(L, ft)),
              (n = (n + Math.imul(k, ut)) | 0),
              (i = (i + Math.imul(k, at)) | 0),
              (i = (i + Math.imul(F, ut)) | 0),
              (o = (o + Math.imul(F, at)) | 0),
              (n = (n + Math.imul(R, lt)) | 0),
              (i = (i + Math.imul(R, dt)) | 0),
              (i = (i + Math.imul(_, lt)) | 0),
              (o = (o + Math.imul(_, dt)) | 0),
              (n = (n + Math.imul(P, pt)) | 0),
              (i = (i + Math.imul(P, mt)) | 0),
              (i = (i + Math.imul(x, pt)) | 0),
              (o = (o + Math.imul(x, mt)) | 0));
            var Ot = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Ot >>> 26)) | 0),
              (Ot &= 67108863),
              (n = Math.imul(U, ut)),
              (i = Math.imul(U, at)),
              (i = (i + Math.imul(L, ut)) | 0),
              (o = Math.imul(L, at)),
              (n = (n + Math.imul(k, lt)) | 0),
              (i = (i + Math.imul(k, dt)) | 0),
              (i = (i + Math.imul(F, lt)) | 0),
              (o = (o + Math.imul(F, dt)) | 0),
              (n = (n + Math.imul(R, pt)) | 0),
              (i = (i + Math.imul(R, mt)) | 0),
              (i = (i + Math.imul(_, pt)) | 0),
              (o = (o + Math.imul(_, mt)) | 0));
            var Rt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (Rt >>> 26)) | 0),
              (Rt &= 67108863),
              (n = Math.imul(U, lt)),
              (i = Math.imul(U, dt)),
              (i = (i + Math.imul(L, lt)) | 0),
              (o = Math.imul(L, dt)),
              (n = (n + Math.imul(k, pt)) | 0),
              (i = (i + Math.imul(k, mt)) | 0),
              (i = (i + Math.imul(F, pt)) | 0),
              (o = (o + Math.imul(F, mt)) | 0));
            var _t = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            ((a = (((o + (i >>> 13)) | 0) + (_t >>> 26)) | 0),
              (_t &= 67108863),
              (n = Math.imul(U, pt)),
              (i = Math.imul(U, mt)),
              (i = (i + Math.imul(L, pt)) | 0),
              (o = Math.imul(L, mt)));
            var Dt = (((a + n) | 0) + ((8191 & i) << 13)) | 0;
            return (
              (a = (((o + (i >>> 13)) | 0) + (Dt >>> 26)) | 0),
              (Dt &= 67108863),
              (u[0] = gt),
              (u[1] = At),
              (u[2] = yt),
              (u[3] = vt),
              (u[4] = bt),
              (u[5] = wt),
              (u[6] = Mt),
              (u[7] = Et),
              (u[8] = It),
              (u[9] = Bt),
              (u[10] = St),
              (u[11] = Nt),
              (u[12] = Ct),
              (u[13] = Pt),
              (u[14] = xt),
              (u[15] = Ot),
              (u[16] = Rt),
              (u[17] = _t),
              (u[18] = Dt),
              0 !== a && ((u[19] = a), r.length++),
              r
            );
          };
          function v(t, e, r) {
            ((r.negative = e.negative ^ t.negative),
              (r.length = t.length + e.length));
            for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
              var f = i;
              i = 0;
              for (
                var s = 67108863 & n,
                  u = Math.min(o, e.length - 1),
                  a = Math.max(0, o - t.length + 1);
                a <= u;
                a++
              ) {
                var h = o - a,
                  l = 0 | t.words[h],
                  d = 0 | e.words[a],
                  c = l * d,
                  p = 67108863 & c;
                ((f = (f + ((c / 67108864) | 0)) | 0),
                  (p = (p + s) | 0),
                  (s = 67108863 & p),
                  (f = (f + (p >>> 26)) | 0),
                  (i += f >>> 26),
                  (f &= 67108863));
              }
              ((r.words[o] = s), (n = f), (f = i));
            }
            return (0 !== n ? (r.words[o] = n) : r.length--, r._strip());
          }
          function b(t, e, r) {
            return v(t, e, r);
          }
          function w(t, e) {
            ((this.x = t), (this.y = e));
          }
          (Math.imul || (y = A),
            (o.prototype.mulTo = function (t, e) {
              var r,
                n = this.length + t.length;
              return (
                (r =
                  10 === this.length && 10 === t.length
                    ? y(this, t, e)
                    : n < 63
                      ? A(this, t, e)
                      : n < 1024
                        ? v(this, t, e)
                        : b(this, t, e)),
                r
              );
            }),
            (w.prototype.makeRBT = function (t) {
              for (
                var e = new Array(t), r = o.prototype._countBits(t) - 1, n = 0;
                n < t;
                n++
              )
                e[n] = this.revBin(n, r, t);
              return e;
            }),
            (w.prototype.revBin = function (t, e, r) {
              if (0 === t || t === r - 1) return t;
              for (var n = 0, i = 0; i < e; i++)
                ((n |= (1 & t) << (e - i - 1)), (t >>= 1));
              return n;
            }),
            (w.prototype.permute = function (t, e, r, n, i, o) {
              for (var f = 0; f < o; f++) ((n[f] = e[t[f]]), (i[f] = r[t[f]]));
            }),
            (w.prototype.transform = function (t, e, r, n, i, o) {
              this.permute(o, t, e, r, n, i);
              for (var f = 1; f < i; f <<= 1)
                for (
                  var s = f << 1,
                    u = Math.cos((2 * Math.PI) / s),
                    a = Math.sin((2 * Math.PI) / s),
                    h = 0;
                  h < i;
                  h += s
                )
                  for (var l = u, d = a, c = 0; c < f; c++) {
                    var p = r[h + c],
                      m = n[h + c],
                      g = r[h + c + f],
                      A = n[h + c + f],
                      y = l * g - d * A;
                    ((A = l * A + d * g),
                      (g = y),
                      (r[h + c] = p + g),
                      (n[h + c] = m + A),
                      (r[h + c + f] = p - g),
                      (n[h + c + f] = m - A),
                      c !== s &&
                        ((y = u * l - a * d), (d = u * d + a * l), (l = y)));
                  }
            }),
            (w.prototype.guessLen13b = function (t, e) {
              var r = 1 | Math.max(e, t),
                n = 1 & r,
                i = 0;
              for (r = (r / 2) | 0; r; r >>>= 1) i++;
              return 1 << (i + 1 + n);
            }),
            (w.prototype.conjugate = function (t, e, r) {
              if (!(r <= 1))
                for (var n = 0; n < r / 2; n++) {
                  var i = t[n];
                  ((t[n] = t[r - n - 1]),
                    (t[r - n - 1] = i),
                    (i = e[n]),
                    (e[n] = -e[r - n - 1]),
                    (e[r - n - 1] = -i));
                }
            }),
            (w.prototype.normalize13b = function (t, e) {
              for (var r = 0, n = 0; n < e / 2; n++) {
                var i =
                  8192 * Math.round(t[2 * n + 1] / e) +
                  Math.round(t[2 * n] / e) +
                  r;
                ((t[n] = 67108863 & i),
                  (r = i < 67108864 ? 0 : (i / 67108864) | 0));
              }
              return t;
            }),
            (w.prototype.convert13b = function (t, e, r, i) {
              for (var o = 0, f = 0; f < e; f++)
                ((o += 0 | t[f]),
                  (r[2 * f] = 8191 & o),
                  (o >>>= 13),
                  (r[2 * f + 1] = 8191 & o),
                  (o >>>= 13));
              for (f = 2 * e; f < i; ++f) r[f] = 0;
              (n(0 === o), n(0 === (-8192 & o)));
            }),
            (w.prototype.stub = function (t) {
              for (var e = new Array(t), r = 0; r < t; r++) e[r] = 0;
              return e;
            }),
            (w.prototype.mulp = function (t, e, r) {
              var n = 2 * this.guessLen13b(t.length, e.length),
                i = this.makeRBT(n),
                o = this.stub(n),
                f = new Array(n),
                s = new Array(n),
                u = new Array(n),
                a = new Array(n),
                h = new Array(n),
                l = new Array(n),
                d = r.words;
              ((d.length = n),
                this.convert13b(t.words, t.length, f, n),
                this.convert13b(e.words, e.length, a, n),
                this.transform(f, o, s, u, n, i),
                this.transform(a, o, h, l, n, i));
              for (var c = 0; c < n; c++) {
                var p = s[c] * h[c] - u[c] * l[c];
                ((u[c] = s[c] * l[c] + u[c] * h[c]), (s[c] = p));
              }
              return (
                this.conjugate(s, u, n),
                this.transform(s, u, d, o, n, i),
                this.conjugate(d, o, n),
                this.normalize13b(d, n),
                (r.negative = t.negative ^ e.negative),
                (r.length = t.length + e.length),
                r._strip()
              );
            }),
            (o.prototype.mul = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                this.mulTo(t, e)
              );
            }),
            (o.prototype.mulf = function (t) {
              var e = new o(null);
              return (
                (e.words = new Array(this.length + t.length)),
                b(this, t, e)
              );
            }),
            (o.prototype.imul = function (t) {
              return this.clone().mulTo(t, this);
            }),
            (o.prototype.imuln = function (t) {
              var e = t < 0;
              (e && (t = -t), n("number" === typeof t), n(t < 67108864));
              for (var r = 0, i = 0; i < this.length; i++) {
                var o = (0 | this.words[i]) * t,
                  f = (67108863 & o) + (67108863 & r);
                ((r >>= 26),
                  (r += (o / 67108864) | 0),
                  (r += f >>> 26),
                  (this.words[i] = 67108863 & f));
              }
              return (
                0 !== r && ((this.words[i] = r), this.length++),
                (this.length = 0 === t ? 1 : this.length),
                e ? this.ineg() : this
              );
            }),
            (o.prototype.muln = function (t) {
              return this.clone().imuln(t);
            }),
            (o.prototype.sqr = function () {
              return this.mul(this);
            }),
            (o.prototype.isqr = function () {
              return this.imul(this.clone());
            }),
            (o.prototype.pow = function (t) {
              var e = g(t);
              if (0 === e.length) return new o(1);
              for (var r = this, n = 0; n < e.length; n++, r = r.sqr())
                if (0 !== e[n]) break;
              if (++n < e.length)
                for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                  0 !== e[n] && (r = r.mul(i));
              return r;
            }),
            (o.prototype.iushln = function (t) {
              n("number" === typeof t && t >= 0);
              var e,
                r = t % 26,
                i = (t - r) / 26,
                o = (67108863 >>> (26 - r)) << (26 - r);
              if (0 !== r) {
                var f = 0;
                for (e = 0; e < this.length; e++) {
                  var s = this.words[e] & o,
                    u = ((0 | this.words[e]) - s) << r;
                  ((this.words[e] = u | f), (f = s >>> (26 - r)));
                }
                f && ((this.words[e] = f), this.length++);
              }
              if (0 !== i) {
                for (e = this.length - 1; e >= 0; e--)
                  this.words[e + i] = this.words[e];
                for (e = 0; e < i; e++) this.words[e] = 0;
                this.length += i;
              }
              return this._strip();
            }),
            (o.prototype.ishln = function (t) {
              return (n(0 === this.negative), this.iushln(t));
            }),
            (o.prototype.iushrn = function (t, e, r) {
              var i;
              (n("number" === typeof t && t >= 0),
                (i = e ? (e - (e % 26)) / 26 : 0));
              var o = t % 26,
                f = Math.min((t - o) / 26, this.length),
                s = 67108863 ^ ((67108863 >>> o) << o),
                u = r;
              if (((i -= f), (i = Math.max(0, i)), u)) {
                for (var a = 0; a < f; a++) u.words[a] = this.words[a];
                u.length = f;
              }
              if (0 === f);
              else if (this.length > f)
                for (this.length -= f, a = 0; a < this.length; a++)
                  this.words[a] = this.words[a + f];
              else ((this.words[0] = 0), (this.length = 1));
              var h = 0;
              for (a = this.length - 1; a >= 0 && (0 !== h || a >= i); a--) {
                var l = 0 | this.words[a];
                ((this.words[a] = (h << (26 - o)) | (l >>> o)), (h = l & s));
              }
              return (
                u && 0 !== h && (u.words[u.length++] = h),
                0 === this.length && ((this.words[0] = 0), (this.length = 1)),
                this._strip()
              );
            }),
            (o.prototype.ishrn = function (t, e, r) {
              return (n(0 === this.negative), this.iushrn(t, e, r));
            }),
            (o.prototype.shln = function (t) {
              return this.clone().ishln(t);
            }),
            (o.prototype.ushln = function (t) {
              return this.clone().iushln(t);
            }),
            (o.prototype.shrn = function (t) {
              return this.clone().ishrn(t);
            }),
            (o.prototype.ushrn = function (t) {
              return this.clone().iushrn(t);
            }),
            (o.prototype.testn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r) return !1;
              var o = this.words[r];
              return !!(o & i);
            }),
            (o.prototype.imaskn = function (t) {
              n("number" === typeof t && t >= 0);
              var e = t % 26,
                r = (t - e) / 26;
              if (
                (n(
                  0 === this.negative,
                  "imaskn works only with positive numbers",
                ),
                this.length <= r)
              )
                return this;
              if (
                (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e)
              ) {
                var i = 67108863 ^ ((67108863 >>> e) << e);
                this.words[this.length - 1] &= i;
              }
              return this._strip();
            }),
            (o.prototype.maskn = function (t) {
              return this.clone().imaskn(t);
            }),
            (o.prototype.iaddn = function (t) {
              return (
                n("number" === typeof t),
                n(t < 67108864),
                t < 0
                  ? this.isubn(-t)
                  : 0 !== this.negative
                    ? 1 === this.length && (0 | this.words[0]) <= t
                      ? ((this.words[0] = t - (0 | this.words[0])),
                        (this.negative = 0),
                        this)
                      : ((this.negative = 0),
                        this.isubn(t),
                        (this.negative = 1),
                        this)
                    : this._iaddn(t)
              );
            }),
            (o.prototype._iaddn = function (t) {
              this.words[0] += t;
              for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
                ((this.words[e] -= 67108864),
                  e === this.length - 1
                    ? (this.words[e + 1] = 1)
                    : this.words[e + 1]++);
              return ((this.length = Math.max(this.length, e + 1)), this);
            }),
            (o.prototype.isubn = function (t) {
              if ((n("number" === typeof t), n(t < 67108864), t < 0))
                return this.iaddn(-t);
              if (0 !== this.negative)
                return (
                  (this.negative = 0),
                  this.iaddn(t),
                  (this.negative = 1),
                  this
                );
              if (
                ((this.words[0] -= t), 1 === this.length && this.words[0] < 0)
              )
                ((this.words[0] = -this.words[0]), (this.negative = 1));
              else
                for (var e = 0; e < this.length && this.words[e] < 0; e++)
                  ((this.words[e] += 67108864), (this.words[e + 1] -= 1));
              return this._strip();
            }),
            (o.prototype.addn = function (t) {
              return this.clone().iaddn(t);
            }),
            (o.prototype.subn = function (t) {
              return this.clone().isubn(t);
            }),
            (o.prototype.iabs = function () {
              return ((this.negative = 0), this);
            }),
            (o.prototype.abs = function () {
              return this.clone().iabs();
            }),
            (o.prototype._ishlnsubmul = function (t, e, r) {
              var i,
                o,
                f = t.length + r;
              this._expand(f);
              var s = 0;
              for (i = 0; i < t.length; i++) {
                o = (0 | this.words[i + r]) + s;
                var u = (0 | t.words[i]) * e;
                ((o -= 67108863 & u),
                  (s = (o >> 26) - ((u / 67108864) | 0)),
                  (this.words[i + r] = 67108863 & o));
              }
              for (; i < this.length - r; i++)
                ((o = (0 | this.words[i + r]) + s),
                  (s = o >> 26),
                  (this.words[i + r] = 67108863 & o));
              if (0 === s) return this._strip();
              for (n(-1 === s), s = 0, i = 0; i < this.length; i++)
                ((o = -(0 | this.words[i]) + s),
                  (s = o >> 26),
                  (this.words[i] = 67108863 & o));
              return ((this.negative = 1), this._strip());
            }),
            (o.prototype._wordDiv = function (t, e) {
              var r = this.length - t.length,
                n = this.clone(),
                i = t,
                f = 0 | i.words[i.length - 1],
                s = this._countBits(f);
              ((r = 26 - s),
                0 !== r &&
                  ((i = i.ushln(r)),
                  n.iushln(r),
                  (f = 0 | i.words[i.length - 1])));
              var u,
                a = n.length - i.length;
              if ("mod" !== e) {
                ((u = new o(null)),
                  (u.length = a + 1),
                  (u.words = new Array(u.length)));
                for (var h = 0; h < u.length; h++) u.words[h] = 0;
              }
              var l = n.clone()._ishlnsubmul(i, 1, a);
              0 === l.negative && ((n = l), u && (u.words[a] = 1));
              for (var d = a - 1; d >= 0; d--) {
                var c =
                  67108864 * (0 | n.words[i.length + d]) +
                  (0 | n.words[i.length + d - 1]);
                ((c = Math.min((c / f) | 0, 67108863)),
                  n._ishlnsubmul(i, c, d));
                while (0 !== n.negative)
                  (c--,
                    (n.negative = 0),
                    n._ishlnsubmul(i, 1, d),
                    n.isZero() || (n.negative ^= 1));
                u && (u.words[d] = c);
              }
              return (
                u && u._strip(),
                n._strip(),
                "div" !== e && 0 !== r && n.iushrn(r),
                { div: u || null, mod: n }
              );
            }),
            (o.prototype.divmod = function (t, e, r) {
              return (
                n(!t.isZero()),
                this.isZero()
                  ? { div: new o(0), mod: new o(0) }
                  : 0 !== this.negative && 0 === t.negative
                    ? ((s = this.neg().divmod(t, e)),
                      "mod" !== e && (i = s.div.neg()),
                      "div" !== e &&
                        ((f = s.mod.neg()), r && 0 !== f.negative && f.iadd(t)),
                      { div: i, mod: f })
                    : 0 === this.negative && 0 !== t.negative
                      ? ((s = this.divmod(t.neg(), e)),
                        "mod" !== e && (i = s.div.neg()),
                        { div: i, mod: s.mod })
                      : 0 !== (this.negative & t.negative)
                        ? ((s = this.neg().divmod(t.neg(), e)),
                          "div" !== e &&
                            ((f = s.mod.neg()),
                            r && 0 !== f.negative && f.isub(t)),
                          { div: s.div, mod: f })
                        : t.length > this.length || this.cmp(t) < 0
                          ? { div: new o(0), mod: this }
                          : 1 === t.length
                            ? "div" === e
                              ? { div: this.divn(t.words[0]), mod: null }
                              : "mod" === e
                                ? {
                                    div: null,
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                                : {
                                    div: this.divn(t.words[0]),
                                    mod: new o(this.modrn(t.words[0])),
                                  }
                            : this._wordDiv(t, e)
              );
              var i, f, s;
            }),
            (o.prototype.div = function (t) {
              return this.divmod(t, "div", !1).div;
            }),
            (o.prototype.mod = function (t) {
              return this.divmod(t, "mod", !1).mod;
            }),
            (o.prototype.umod = function (t) {
              return this.divmod(t, "mod", !0).mod;
            }),
            (o.prototype.divRound = function (t) {
              var e = this.divmod(t);
              if (e.mod.isZero()) return e.div;
              var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
                n = t.ushrn(1),
                i = t.andln(1),
                o = r.cmp(n);
              return o < 0 || (1 === i && 0 === o)
                ? e.div
                : 0 !== e.div.negative
                  ? e.div.isubn(1)
                  : e.div.iaddn(1);
            }),
            (o.prototype.modrn = function (t) {
              var e = t < 0;
              (e && (t = -t), n(t <= 67108863));
              for (
                var r = (1 << 26) % t, i = 0, o = this.length - 1;
                o >= 0;
                o--
              )
                i = (r * i + (0 | this.words[o])) % t;
              return e ? -i : i;
            }),
            (o.prototype.modn = function (t) {
              return this.modrn(t);
            }),
            (o.prototype.idivn = function (t) {
              var e = t < 0;
              (e && (t = -t), n(t <= 67108863));
              for (var r = 0, i = this.length - 1; i >= 0; i--) {
                var o = (0 | this.words[i]) + 67108864 * r;
                ((this.words[i] = (o / t) | 0), (r = o % t));
              }
              return (this._strip(), e ? this.ineg() : this);
            }),
            (o.prototype.divn = function (t) {
              return this.clone().idivn(t);
            }),
            (o.prototype.egcd = function (t) {
              (n(0 === t.negative), n(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i = new o(1),
                f = new o(0),
                s = new o(0),
                u = new o(1),
                a = 0;
              while (e.isEven() && r.isEven()) (e.iushrn(1), r.iushrn(1), ++a);
              var h = r.clone(),
                l = e.clone();
              while (!e.isZero()) {
                for (
                  var d = 0, c = 1;
                  0 === (e.words[0] & c) && d < 26;
                  ++d, c <<= 1
                );
                if (d > 0) {
                  e.iushrn(d);
                  while (d-- > 0)
                    ((i.isOdd() || f.isOdd()) && (i.iadd(h), f.isub(l)),
                      i.iushrn(1),
                      f.iushrn(1));
                }
                for (
                  var p = 0, m = 1;
                  0 === (r.words[0] & m) && p < 26;
                  ++p, m <<= 1
                );
                if (p > 0) {
                  r.iushrn(p);
                  while (p-- > 0)
                    ((s.isOdd() || u.isOdd()) && (s.iadd(h), u.isub(l)),
                      s.iushrn(1),
                      u.iushrn(1));
                }
                e.cmp(r) >= 0
                  ? (e.isub(r), i.isub(s), f.isub(u))
                  : (r.isub(e), s.isub(i), u.isub(f));
              }
              return { a: s, b: u, gcd: r.iushln(a) };
            }),
            (o.prototype._invmp = function (t) {
              (n(0 === t.negative), n(!t.isZero()));
              var e = this,
                r = t.clone();
              e = 0 !== e.negative ? e.umod(t) : e.clone();
              var i,
                f = new o(1),
                s = new o(0),
                u = r.clone();
              while (e.cmpn(1) > 0 && r.cmpn(1) > 0) {
                for (
                  var a = 0, h = 1;
                  0 === (e.words[0] & h) && a < 26;
                  ++a, h <<= 1
                );
                if (a > 0) {
                  e.iushrn(a);
                  while (a-- > 0) (f.isOdd() && f.iadd(u), f.iushrn(1));
                }
                for (
                  var l = 0, d = 1;
                  0 === (r.words[0] & d) && l < 26;
                  ++l, d <<= 1
                );
                if (l > 0) {
                  r.iushrn(l);
                  while (l-- > 0) (s.isOdd() && s.iadd(u), s.iushrn(1));
                }
                e.cmp(r) >= 0 ? (e.isub(r), f.isub(s)) : (r.isub(e), s.isub(f));
              }
              return (
                (i = 0 === e.cmpn(1) ? f : s),
                i.cmpn(0) < 0 && i.iadd(t),
                i
              );
            }),
            (o.prototype.gcd = function (t) {
              if (this.isZero()) return t.abs();
              if (t.isZero()) return this.abs();
              var e = this.clone(),
                r = t.clone();
              ((e.negative = 0), (r.negative = 0));
              for (var n = 0; e.isEven() && r.isEven(); n++)
                (e.iushrn(1), r.iushrn(1));
              do {
                while (e.isEven()) e.iushrn(1);
                while (r.isEven()) r.iushrn(1);
                var i = e.cmp(r);
                if (i < 0) {
                  var o = e;
                  ((e = r), (r = o));
                } else if (0 === i || 0 === r.cmpn(1)) break;
                e.isub(r);
              } while (1);
              return r.iushln(n);
            }),
            (o.prototype.invm = function (t) {
              return this.egcd(t).a.umod(t);
            }),
            (o.prototype.isEven = function () {
              return 0 === (1 & this.words[0]);
            }),
            (o.prototype.isOdd = function () {
              return 1 === (1 & this.words[0]);
            }),
            (o.prototype.andln = function (t) {
              return this.words[0] & t;
            }),
            (o.prototype.bincn = function (t) {
              n("number" === typeof t);
              var e = t % 26,
                r = (t - e) / 26,
                i = 1 << e;
              if (this.length <= r)
                return (this._expand(r + 1), (this.words[r] |= i), this);
              for (var o = i, f = r; 0 !== o && f < this.length; f++) {
                var s = 0 | this.words[f];
                ((s += o),
                  (o = s >>> 26),
                  (s &= 67108863),
                  (this.words[f] = s));
              }
              return (0 !== o && ((this.words[f] = o), this.length++), this);
            }),
            (o.prototype.isZero = function () {
              return 1 === this.length && 0 === this.words[0];
            }),
            (o.prototype.cmpn = function (t) {
              var e,
                r = t < 0;
              if (0 !== this.negative && !r) return -1;
              if (0 === this.negative && r) return 1;
              if ((this._strip(), this.length > 1)) e = 1;
              else {
                (r && (t = -t), n(t <= 67108863, "Number is too big"));
                var i = 0 | this.words[0];
                e = i === t ? 0 : i < t ? -1 : 1;
              }
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.cmp = function (t) {
              if (0 !== this.negative && 0 === t.negative) return -1;
              if (0 === this.negative && 0 !== t.negative) return 1;
              var e = this.ucmp(t);
              return 0 !== this.negative ? 0 | -e : e;
            }),
            (o.prototype.ucmp = function (t) {
              if (this.length > t.length) return 1;
              if (this.length < t.length) return -1;
              for (var e = 0, r = this.length - 1; r >= 0; r--) {
                var n = 0 | this.words[r],
                  i = 0 | t.words[r];
                if (n !== i) {
                  n < i ? (e = -1) : n > i && (e = 1);
                  break;
                }
              }
              return e;
            }),
            (o.prototype.gtn = function (t) {
              return 1 === this.cmpn(t);
            }),
            (o.prototype.gt = function (t) {
              return 1 === this.cmp(t);
            }),
            (o.prototype.gten = function (t) {
              return this.cmpn(t) >= 0;
            }),
            (o.prototype.gte = function (t) {
              return this.cmp(t) >= 0;
            }),
            (o.prototype.ltn = function (t) {
              return -1 === this.cmpn(t);
            }),
            (o.prototype.lt = function (t) {
              return -1 === this.cmp(t);
            }),
            (o.prototype.lten = function (t) {
              return this.cmpn(t) <= 0;
            }),
            (o.prototype.lte = function (t) {
              return this.cmp(t) <= 0;
            }),
            (o.prototype.eqn = function (t) {
              return 0 === this.cmpn(t);
            }),
            (o.prototype.eq = function (t) {
              return 0 === this.cmp(t);
            }),
            (o.red = function (t) {
              return new C(t);
            }),
            (o.prototype.toRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                n(0 === this.negative, "red works only with positives"),
                t.convertTo(this)._forceRed(t)
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
            (o.prototype._forceRed = function (t) {
              return ((this.red = t), this);
            }),
            (o.prototype.forceRed = function (t) {
              return (
                n(!this.red, "Already a number in reduction context"),
                this._forceRed(t)
              );
            }),
            (o.prototype.redAdd = function (t) {
              return (
                n(this.red, "redAdd works only with red numbers"),
                this.red.add(this, t)
              );
            }),
            (o.prototype.redIAdd = function (t) {
              return (
                n(this.red, "redIAdd works only with red numbers"),
                this.red.iadd(this, t)
              );
            }),
            (o.prototype.redSub = function (t) {
              return (
                n(this.red, "redSub works only with red numbers"),
                this.red.sub(this, t)
              );
            }),
            (o.prototype.redISub = function (t) {
              return (
                n(this.red, "redISub works only with red numbers"),
                this.red.isub(this, t)
              );
            }),
            (o.prototype.redShl = function (t) {
              return (
                n(this.red, "redShl works only with red numbers"),
                this.red.shl(this, t)
              );
            }),
            (o.prototype.redMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.mul(this, t)
              );
            }),
            (o.prototype.redIMul = function (t) {
              return (
                n(this.red, "redMul works only with red numbers"),
                this.red._verify2(this, t),
                this.red.imul(this, t)
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
            (o.prototype.redPow = function (t) {
              return (
                n(this.red && !t.red, "redPow(normalNum)"),
                this.red._verify1(this),
                this.red.pow(this, t)
              );
            }));
          var M = { k256: null, p224: null, p192: null, p25519: null };
          function E(t, e) {
            ((this.name = t),
              (this.p = new o(e, 16)),
              (this.n = this.p.bitLength()),
              (this.k = new o(1).iushln(this.n).isub(this.p)),
              (this.tmp = this._tmp()));
          }
          function I() {
            E.call(
              this,
              "k256",
              "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            );
          }
          function B() {
            E.call(
              this,
              "p224",
              "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            );
          }
          function S() {
            E.call(
              this,
              "p192",
              "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            );
          }
          function N() {
            E.call(
              this,
              "25519",
              "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            );
          }
          function C(t) {
            if ("string" === typeof t) {
              var e = o._prime(t);
              ((this.m = e.p), (this.prime = e));
            } else
              (n(t.gtn(1), "modulus must be greater than 1"),
                (this.m = t),
                (this.prime = null));
          }
          function P(t) {
            (C.call(this, t),
              (this.shift = this.m.bitLength()),
              this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
              (this.r = new o(1).iushln(this.shift)),
              (this.r2 = this.imod(this.r.sqr())),
              (this.rinv = this.r._invmp(this.m)),
              (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
              (this.minv = this.minv.umod(this.r)),
              (this.minv = this.r.sub(this.minv)));
          }
          ((E.prototype._tmp = function () {
            var t = new o(null);
            return ((t.words = new Array(Math.ceil(this.n / 13))), t);
          }),
            (E.prototype.ireduce = function (t) {
              var e,
                r = t;
              do {
                (this.split(r, this.tmp),
                  (r = this.imulK(r)),
                  (r = r.iadd(this.tmp)),
                  (e = r.bitLength()));
              } while (e > this.n);
              var n = e < this.n ? -1 : r.ucmp(this.p);
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
            (E.prototype.split = function (t, e) {
              t.iushrn(this.n, 0, e);
            }),
            (E.prototype.imulK = function (t) {
              return t.imul(this.k);
            }),
            i(I, E),
            (I.prototype.split = function (t, e) {
              for (
                var r = 4194303, n = Math.min(t.length, 9), i = 0;
                i < n;
                i++
              )
                e.words[i] = t.words[i];
              if (((e.length = n), t.length <= 9))
                return ((t.words[0] = 0), void (t.length = 1));
              var o = t.words[9];
              for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
                var f = 0 | t.words[i];
                ((t.words[i - 10] = ((f & r) << 4) | (o >>> 22)), (o = f));
              }
              ((o >>>= 22),
                (t.words[i - 10] = o),
                0 === o && t.length > 10 ? (t.length -= 10) : (t.length -= 9));
            }),
            (I.prototype.imulK = function (t) {
              ((t.words[t.length] = 0),
                (t.words[t.length + 1] = 0),
                (t.length += 2));
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 0 | t.words[r];
                ((e += 977 * n),
                  (t.words[r] = 67108863 & e),
                  (e = 64 * n + ((e / 67108864) | 0)));
              }
              return (
                0 === t.words[t.length - 1] &&
                  (t.length--, 0 === t.words[t.length - 1] && t.length--),
                t
              );
            }),
            i(B, E),
            i(S, E),
            i(N, E),
            (N.prototype.imulK = function (t) {
              for (var e = 0, r = 0; r < t.length; r++) {
                var n = 19 * (0 | t.words[r]) + e,
                  i = 67108863 & n;
                ((n >>>= 26), (t.words[r] = i), (e = n));
              }
              return (0 !== e && (t.words[t.length++] = e), t);
            }),
            (o._prime = function (t) {
              if (M[t]) return M[t];
              var e;
              if ("k256" === t) e = new I();
              else if ("p224" === t) e = new B();
              else if ("p192" === t) e = new S();
              else {
                if ("p25519" !== t) throw new Error("Unknown prime " + t);
                e = new N();
              }
              return ((M[t] = e), e);
            }),
            (C.prototype._verify1 = function (t) {
              (n(0 === t.negative, "red works only with positives"),
                n(t.red, "red works only with red numbers"));
            }),
            (C.prototype._verify2 = function (t, e) {
              (n(
                0 === (t.negative | e.negative),
                "red works only with positives",
              ),
                n(t.red && t.red === e.red, "red works only with red numbers"));
            }),
            (C.prototype.imod = function (t) {
              return this.prime
                ? this.prime.ireduce(t)._forceRed(this)
                : (h(t, t.umod(this.m)._forceRed(this)), t);
            }),
            (C.prototype.neg = function (t) {
              return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
            }),
            (C.prototype.add = function (t, e) {
              this._verify2(t, e);
              var r = t.add(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this));
            }),
            (C.prototype.iadd = function (t, e) {
              this._verify2(t, e);
              var r = t.iadd(e);
              return (r.cmp(this.m) >= 0 && r.isub(this.m), r);
            }),
            (C.prototype.sub = function (t, e) {
              this._verify2(t, e);
              var r = t.sub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this));
            }),
            (C.prototype.isub = function (t, e) {
              this._verify2(t, e);
              var r = t.isub(e);
              return (r.cmpn(0) < 0 && r.iadd(this.m), r);
            }),
            (C.prototype.shl = function (t, e) {
              return (this._verify1(t), this.imod(t.ushln(e)));
            }),
            (C.prototype.imul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.imul(e)));
            }),
            (C.prototype.mul = function (t, e) {
              return (this._verify2(t, e), this.imod(t.mul(e)));
            }),
            (C.prototype.isqr = function (t) {
              return this.imul(t, t.clone());
            }),
            (C.prototype.sqr = function (t) {
              return this.mul(t, t);
            }),
            (C.prototype.sqrt = function (t) {
              if (t.isZero()) return t.clone();
              var e = this.m.andln(3);
              if ((n(e % 2 === 1), 3 === e)) {
                var r = this.m.add(new o(1)).iushrn(2);
                return this.pow(t, r);
              }
              var i = this.m.subn(1),
                f = 0;
              while (!i.isZero() && 0 === i.andln(1)) (f++, i.iushrn(1));
              n(!i.isZero());
              var s = new o(1).toRed(this),
                u = s.redNeg(),
                a = this.m.subn(1).iushrn(1),
                h = this.m.bitLength();
              h = new o(2 * h * h).toRed(this);
              while (0 !== this.pow(h, a).cmp(u)) h.redIAdd(u);
              var l = this.pow(h, i),
                d = this.pow(t, i.addn(1).iushrn(1)),
                c = this.pow(t, i),
                p = f;
              while (0 !== c.cmp(s)) {
                for (var m = c, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
                n(g < p);
                var A = this.pow(l, new o(1).iushln(p - g - 1));
                ((d = d.redMul(A)),
                  (l = A.redSqr()),
                  (c = c.redMul(l)),
                  (p = g));
              }
              return d;
            }),
            (C.prototype.invm = function (t) {
              var e = t._invmp(this.m);
              return 0 !== e.negative
                ? ((e.negative = 0), this.imod(e).redNeg())
                : this.imod(e);
            }),
            (C.prototype.pow = function (t, e) {
              if (e.isZero()) return new o(1).toRed(this);
              if (0 === e.cmpn(1)) return t.clone();
              var r = 4,
                n = new Array(1 << r);
              ((n[0] = new o(1).toRed(this)), (n[1] = t));
              for (var i = 2; i < n.length; i++) n[i] = this.mul(n[i - 1], t);
              var f = n[0],
                s = 0,
                u = 0,
                a = e.bitLength() % 26;
              for (0 === a && (a = 26), i = e.length - 1; i >= 0; i--) {
                for (var h = e.words[i], l = a - 1; l >= 0; l--) {
                  var d = (h >> l) & 1;
                  (f !== n[0] && (f = this.sqr(f)),
                    0 !== d || 0 !== s
                      ? ((s <<= 1),
                        (s |= d),
                        u++,
                        (u === r || (0 === i && 0 === l)) &&
                          ((f = this.mul(f, n[s])), (u = 0), (s = 0)))
                      : (u = 0));
                }
                a = 26;
              }
              return f;
            }),
            (C.prototype.convertTo = function (t) {
              var e = t.umod(this.m);
              return e === t ? e.clone() : e;
            }),
            (C.prototype.convertFrom = function (t) {
              var e = t.clone();
              return ((e.red = null), e);
            }),
            (o.mont = function (t) {
              return new P(t);
            }),
            i(P, C),
            (P.prototype.convertTo = function (t) {
              return this.imod(t.ushln(this.shift));
            }),
            (P.prototype.convertFrom = function (t) {
              var e = this.imod(t.mul(this.rinv));
              return ((e.red = null), e);
            }),
            (P.prototype.imul = function (t, e) {
              if (t.isZero() || e.isZero())
                return ((t.words[0] = 0), (t.length = 1), t);
              var r = t.imul(e),
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
            (P.prototype.mul = function (t, e) {
              if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
              var r = t.mul(e),
                n = r
                  .maskn(this.shift)
                  .mul(this.minv)
                  .imaskn(this.shift)
                  .mul(this.m),
                i = r.isub(n).iushrn(this.shift),
                f = i;
              return (
                i.cmp(this.m) >= 0
                  ? (f = i.isub(this.m))
                  : i.cmpn(0) < 0 && (f = i.iadd(this.m)),
                f._forceRed(this)
              );
            }),
            (P.prototype.invm = function (t) {
              var e = this.imod(t._invmp(this.m).mul(this.r2));
              return e._forceRed(this);
            }));
        })(t, this);
      }).call(this, r(20)(t));
    },
    480: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode = c),
        (e.encode = h));
      var n = r(32),
        i = r(36),
        o = r(1291);
      const f = new i.Logger(o.version);
      function s(t) {
        const e = [];
        while (t) (e.unshift(255 & t), (t >>= 8));
        return e;
      }
      function u(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function a(t) {
        if (Array.isArray(t)) {
          let e = [];
          if (
            (t.forEach(function (t) {
              e = e.concat(a(t));
            }),
            e.length <= 55)
          )
            return (e.unshift(192 + e.length), e);
          const r = s(e.length);
          return (r.unshift(247 + r.length), r.concat(e));
        }
        (0, n.isBytesLike)(t) ||
          f.throwArgumentError("RLP object must be BytesLike", "object", t);
        const e = Array.prototype.slice.call((0, n.arrayify)(t));
        if (1 === e.length && e[0] <= 127) return e;
        if (e.length <= 55) return (e.unshift(128 + e.length), e);
        const r = s(e.length);
        return (r.unshift(183 + r.length), r.concat(e));
      }
      function h(t) {
        return (0, n.hexlify)(a(t));
      }
      function l(t, e, r, n) {
        const o = [];
        while (r < e + 1 + n) {
          const s = d(t, r);
          (o.push(s.result),
            (r += s.consumed),
            r > e + 1 + n &&
              f.throwError(
                "child data too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ));
        }
        return { consumed: 1 + n, result: o };
      }
      function d(t, e) {
        if (
          (0 === t.length &&
            f.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {}),
          t[e] >= 248)
        ) {
          const r = t[e] - 247;
          e + 1 + r > t.length &&
            f.throwError(
              "data short segment too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const n = u(t, e + 1, r);
          return (
            e + 1 + r + n > t.length &&
              f.throwError(
                "data long segment too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            l(t, e, e + 1 + r, r + n)
          );
        }
        if (t[e] >= 192) {
          const r = t[e] - 192;
          return (
            e + 1 + r > t.length &&
              f.throwError(
                "data array too short",
                i.Logger.errors.BUFFER_OVERRUN,
                {},
              ),
            l(t, e, e + 1, r)
          );
        }
        if (t[e] >= 184) {
          const r = t[e] - 183;
          e + 1 + r > t.length &&
            f.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const o = u(t, e + 1, r);
          e + 1 + r + o > t.length &&
            f.throwError(
              "data array too short",
              i.Logger.errors.BUFFER_OVERRUN,
              {},
            );
          const s = (0, n.hexlify)(t.slice(e + 1 + r, e + 1 + r + o));
          return { consumed: 1 + r + o, result: s };
        }
        if (t[e] >= 128) {
          const r = t[e] - 128;
          e + 1 + r > t.length &&
            f.throwError("data too short", i.Logger.errors.BUFFER_OVERRUN, {});
          const o = (0, n.hexlify)(t.slice(e + 1, e + 1 + r));
          return { consumed: 1 + r, result: o };
        }
        return { consumed: 1, result: (0, n.hexlify)(t[e]) };
      }
      function c(t) {
        const e = (0, n.arrayify)(t),
          r = d(e, 0);
        return (
          r.consumed !== e.length &&
            f.throwArgumentError("invalid rlp data", "data", t),
          r.result
        );
      }
    },
    483: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }), (e.id = o));
      var n = r(88),
        i = r(137);
      function o(t) {
        return (0, n.keccak256)((0, i.toUtf8Bytes)(t));
      }
    },
    484: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.version = void 0));
      e.version = "hash/5.8.0";
    },
    485: function (t, e, r) {
      "use strict";
      function n(t, e) {
        null == e && (e = 1);
        const r = [],
          n = r.forEach,
          i = function (t, e) {
            n.call(t, function (t) {
              e > 0 && Array.isArray(t) ? i(t, e - 1) : r.push(t);
            });
          };
        return (i(t, e), r);
      }
      function i(t) {
        const e = {};
        for (let r = 0; r < t.length; r++) {
          const n = t[r];
          e[n[0]] = n[1];
        }
        return e;
      }
      function o(t) {
        let e = 0;
        function r() {
          return (t[e++] << 8) | t[e++];
        }
        let n = r(),
          i = 1,
          o = [0, 1];
        for (let w = 1; w < n; w++) o.push((i += r()));
        let f = r(),
          s = e;
        e += f;
        let u = 0,
          a = 0;
        function h() {
          return (0 == u && ((a = (a << 8) | t[e++]), (u = 8)), (a >> --u) & 1);
        }
        const l = 31,
          d = Math.pow(2, l),
          c = d >>> 1,
          p = c >> 1,
          m = d - 1;
        let g = 0;
        for (let w = 0; w < l; w++) g = (g << 1) | h();
        let A = [],
          y = 0,
          v = d;
        while (1) {
          let t = Math.floor(((g - y + 1) * i - 1) / v),
            e = 0,
            r = n;
          while (r - e > 1) {
            let n = (e + r) >>> 1;
            t < o[n] ? (r = n) : (e = n);
          }
          if (0 == e) break;
          A.push(e);
          let f = y + Math.floor((v * o[e]) / i),
            s = y + Math.floor((v * o[e + 1]) / i) - 1;
          while (0 == ((f ^ s) & c))
            ((g = ((g << 1) & m) | h()),
              (f = (f << 1) & m),
              (s = ((s << 1) & m) | 1));
          while (f & ~s & p)
            ((g = (g & c) | ((g << 1) & (m >>> 1)) | h()),
              (f = (f << 1) ^ c),
              (s = ((s ^ c) << 1) | c | 1));
          ((y = f), (v = 1 + s - f));
        }
        let b = n - 4;
        return A.map((e) => {
          switch (e - b) {
            case 3:
              return b + 65792 + ((t[s++] << 16) | (t[s++] << 8) | t[s++]);
            case 2:
              return b + 256 + ((t[s++] << 8) | t[s++]);
            case 1:
              return b + t[s++];
            default:
              return e - 1;
          }
        });
      }
      function f(t) {
        let e = 0;
        return () => t[e++];
      }
      function s(t) {
        return f(o(t));
      }
      function u(t) {
        return 1 & t ? ~t >> 1 : t >> 1;
      }
      function a(t, e) {
        let r = Array(t);
        for (let n = 0; n < t; n++) r[n] = 1 + e();
        return r;
      }
      function h(t, e) {
        let r = Array(t);
        for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
        return r;
      }
      function l(t, e) {
        let r = Array(t);
        for (let n = 0, i = 0; n < t; n++) r[n] = i += u(e());
        return r;
      }
      function d(t, e) {
        let r = h(t(), t),
          n = t(),
          i = h(n, t),
          o = a(n, t);
        for (let f = 0; f < n; f++)
          for (let t = 0; t < o[f]; t++) r.push(i[f] + t);
        return e ? r.map((t) => e[t]) : r;
      }
      function c(t) {
        let e = [];
        while (1) {
          let r = t();
          if (0 == r) break;
          e.push(g(r, t));
        }
        while (1) {
          let r = t() - 1;
          if (r < 0) break;
          e.push(A(r, t));
        }
        return i(n(e));
      }
      function p(t) {
        let e = [];
        while (1) {
          let r = t();
          if (0 == r) break;
          e.push(r);
        }
        return e;
      }
      function m(t, e, r) {
        let n = Array(t)
          .fill(void 0)
          .map(() => []);
        for (let i = 0; i < e; i++) l(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      function g(t, e) {
        let r = 1 + e(),
          i = e(),
          o = p(e),
          f = m(o.length, 1 + t, e);
        return n(
          f.map((t, e) => {
            const n = t[0],
              f = t.slice(1);
            return Array(o[e])
              .fill(void 0)
              .map((t, e) => {
                let o = e * i;
                return [n + e * r, f.map((t) => t + o)];
              });
          }),
        );
      }
      function A(t, e) {
        let r = 1 + e(),
          n = m(r, 1 + t, e);
        return n.map((t) => [t[0], t.slice(1)]);
      }
      function y(t) {
        let e = d(t).sort((t, e) => t - e);
        return r();
        function r() {
          let n = [];
          while (1) {
            let i = d(t, e);
            if (0 == i.length) break;
            n.push({ set: new Set(i), node: r() });
          }
          n.sort((t, e) => e.set.size - t.set.size);
          let i = t(),
            o = i % 3;
          i = (i / 3) | 0;
          let f = !!(1 & i);
          i >>= 1;
          let s = 1 == i,
            u = 2 == i;
          return { branches: n, valid: o, fe0f: f, save: s, check: u };
        }
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode_arithmetic = o),
        (e.read_compressed_payload = s),
        (e.read_emoji_trie = y),
        (e.read_mapped_map = c),
        (e.read_member_array = d),
        (e.read_payload = f),
        (e.read_zero_terminated_array = p),
        (e.signed = u));
    },
    63: function (t, e, r) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Description = void 0),
        (e.checkProperties = h),
        (e.deepCopy = m),
        (e.defineReadOnly = s),
        (e.getStatic = u),
        (e.resolveProperties = a),
        (e.shallowCopy = l));
      var n = r(36),
        i = r(1289),
        o = function (t, e, r, n) {
          function i(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function f(t) {
              try {
                u(n.next(t));
              } catch (e) {
                o(e);
              }
            }
            function s(t) {
              try {
                u(n["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              t.done ? r(t.value) : i(t.value).then(f, s);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
      const f = new n.Logger(i.version);
      function s(t, e, r) {
        Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
      }
      function u(t, e) {
        for (let r = 0; r < 32; r++) {
          if (t[e]) return t[e];
          if (!t.prototype || "object" !== typeof t.prototype) break;
          t = Object.getPrototypeOf(t.prototype).constructor;
        }
        return null;
      }
      function a(t) {
        return o(this, void 0, void 0, function* () {
          const e = Object.keys(t).map((e) => {
              const r = t[e];
              return Promise.resolve(r).then((t) => ({ key: e, value: t }));
            }),
            r = yield Promise.all(e);
          return r.reduce((t, e) => ((t[e.key] = e.value), t), {});
        });
      }
      function h(t, e) {
        ((t && "object" === typeof t) ||
          f.throwArgumentError("invalid object", "object", t),
          Object.keys(t).forEach((r) => {
            e[r] ||
              f.throwArgumentError(
                "invalid object key - " + r,
                "transaction:" + r,
                t,
              );
          }));
      }
      function l(t) {
        const e = {};
        for (const r in t) e[r] = t[r];
        return e;
      }
      const d = {
        bigint: !0,
        boolean: !0,
        function: !0,
        number: !0,
        string: !0,
      };
      function c(t) {
        if (void 0 === t || null === t || d[typeof t]) return !0;
        if (Array.isArray(t) || "object" === typeof t) {
          if (!Object.isFrozen(t)) return !1;
          const r = Object.keys(t);
          for (let n = 0; n < r.length; n++) {
            let i = null;
            try {
              i = t[r[n]];
            } catch (e) {
              continue;
            }
            if (!c(i)) return !1;
          }
          return !0;
        }
        return f.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function p(t) {
        if (c(t)) return t;
        if (Array.isArray(t)) return Object.freeze(t.map((t) => m(t)));
        if ("object" === typeof t) {
          const e = {};
          for (const r in t) {
            const n = t[r];
            void 0 !== n && s(e, r, m(n));
          }
          return e;
        }
        return f.throwArgumentError("Cannot deepCopy " + typeof t, "object", t);
      }
      function m(t) {
        return p(t);
      }
      class Description {
        constructor(t) {
          for (const e in t) this[e] = m(t[e]);
        }
      }
      e.Description = Description;
    },
    88: function (t, e, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.keccak256 = f));
      var i = n(r(53)),
        o = r(32);
      function f(t) {
        return "0x" + i.default.keccak_256((0, o.arrayify)(t));
      }
    },
  },
]);
