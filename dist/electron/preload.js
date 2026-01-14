module.exports = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return (e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports);
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (n.d(t, "a", t), t);
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 266))
  );
})({
  266: function (e, t, n) {
    const { contextBridge: r, ipcRenderer: o } = n(4),
      i = (e) =>
        [
          "txNotification",
          "txNotificationOpen",
          "activate-window",
          "openExternal",
          "checking-for-update",
          "update-available",
          "download-initiated",
          "download-progress",
          "update-downloaded",
          "restart-initiated",
          "check-success",
          "exportTransactions",
          "getFileFromCache",
          "writeText",
          "readText",
          "success",
          "saveToCache",
          "saveToDesktop",
        ].includes(e);
    r.exposeInMainWorld("electron", {
      ipcRenderer: {
        async invoke(e, t) {
          if (i(e)) return await o.invoke(e, t);
        },
        send(e, t) {
          i(e) && o.send(e, t);
        },
        on(e, t) {
          i(e) &&
            o.on(e, function (e) {
              for (
                var n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return t(...r);
            });
        },
      },
      clipboard: {
        writeText(e) {
          o.send("writeText", e);
        },
        readText: async () => await o.invoke("readText"),
      },
      openExternal(e) {
        o.send("openExternal", e);
      },
      platform: { os: process.platform },
    });
  },
  4: function (e, t) {
    e.exports = require("electron");
  },
});
