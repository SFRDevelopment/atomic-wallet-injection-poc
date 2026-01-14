(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [270, 32],
  {
    2727: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = n(r(230)),
        s = n(r(8407)),
        i = n(r(8415)),
        a = n(r(794)),
        c = r(2806);
      function u(e, t, r) {
        (l(e, t), t.set(e, r));
      }
      function l(e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object",
          );
      }
      function d(e, t) {
        return e.get(h(e, t));
      }
      function f(e, t, r) {
        return (e.set(h(e, t), r), r);
      }
      function h(e, t, r) {
        if ("function" == typeof e ? e === t : e.has(t))
          return arguments.length < 3 ? t : r;
        throw new TypeError("Private element is not present on this object");
      }
      const p = "Stacks",
        E = 6,
        y = "0";
      var g = new WeakMap();
      class STXCoin extends (0, c.HasProviders)(o.default) {
        constructor(e) {
          let {
            alias: t,
            notify: n,
            feeData: o,
            explorers: c,
            txWebUrl: l,
            socket: d,
            id: f,
          } = e;
          const h = {
            id: f,
            alias: t,
            notify: n,
            name: p,
            ticker: "STX",
            decimal: E,
            unspendableBalance: y,
            explorers: c,
            txWebUrl: l,
            socket: d,
            dependencies: {
              walletSdk: new a.default(() =>
                Promise.all([r.e(237), r.e(159), r.e(179), r.e(187)]).then(
                  r.t.bind(null, 5716, 7),
                ),
              ),
              transactionsSdk: new a.default(() =>
                r.e(172).then(r.t.bind(null, 11527, 7)),
              ),
              c32check: new a.default(() =>
                r.e(358).then(r.t.bind(null, 3208, 7)),
              ),
            },
          };
          (super(h),
            u(this, g, void 0),
            this.setExplorersModules([s.default, i.default]),
            this.loadExplorers(h),
            (this.feeData = o),
            (this.fee = o.fee),
            (this.transactions = []),
            (this.fields.paymentId = !0));
        }
        async loadWallet(e, t) {
          const {
              generateWallet: r,
              generateNewAccount: n,
              getStxAddress: o,
            } = await this.loadLib("walletSdk"),
            { TransactionVersion: s } = await this.loadLib("transactionsSdk"),
            i = await r({ secretKey: t, password: "" }),
            a = n(i),
            c = a.accounts[0];
          return (
            (this.address = o({ account: c, transactionVersion: s.Mainnet })),
            f(g, this, c.stxPrivateKey),
            { id: this.id, privateKey: d(g, this), address: this.address }
          );
        }
        async validateAddress(e) {
          try {
            const { c32addressDecode: t } = await this.loadLib("c32check"),
              r = e.substr(0, 2);
            return (
              ("SM" === r || "SP" === r) && Boolean(t(e)) && this.address !== e
            );
          } catch (t) {
            return !1;
          }
        }
        async getFee(e) {
          let { address: t, amount: r, memo: n } = void 0 === e ? {} : e;
          const o = await this.createTransaction({
            address: t || this.address,
            amount: r || 1,
            memo: n || "",
          });
          return o.auth.spendingCondition.fee;
        }
        async createTransaction(e) {
          var t;
          let { address: r, amount: n, memo: o } = e;
          const { AnchorMode: s, makeSTXTokenTransfer: i } =
              await this.loadLib("transactionsSdk"),
            a = {
              recipient: r,
              amount: BigInt(n),
              senderKey: d(g, this),
              network: this.getProvider("network").getNetwork(),
              memo: o,
              nonce: await this.getProvider("nonce").getPossibleNextNonce(
                this.address,
              ),
              anchorMode: s.Any,
            };
          return (
            null !== (t = this.feeData) &&
              void 0 !== t &&
              t.fee &&
              (a.fee = this.feeData.fee),
            i(a)
          );
        }
        async sendTransaction(e) {
          const { broadcastTransaction: t } =
              await this.loadLib("transactionsSdk"),
            r = await t(e);
          if (r.error) throw new Error(r.reason);
          return { txid: "0x" + r.txid };
        }
        async getInfo() {
          const { balance: e } = await this.getProvider("info").getInfo(
            this.address,
          );
          return ((this.balance = e), { balance: e });
        }
        setPrivateKey(e) {
          f(g, this, e);
        }
        async validatePaymentId(e) {
          return (
            "string" === typeof e && new TextEncoder().encode(e).length <= 34
          );
        }
        getPaymentIdName() {
          return "Memo";
        }
      }
      t.default = STXCoin;
    },
    2778: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6263);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var o = r(8410);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
      var s = r(6264);
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var i = r(5287);
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r(8411);
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var c = r(8412);
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var u = r(8413);
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var l = r(8414);
      Object.keys(l).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === l[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return l[e];
              },
            }));
      });
    },
    2798: function (e, t) {},
    2799: function (e, t) {},
    2807: function (e, t) {},
    5286: function (e, t, r) {
      (function (e) {
        (function (t) {
          (function (r) {
            var n =
                ("undefined" !== typeof globalThis && globalThis) ||
                ("undefined" !== typeof t && t) ||
                ("undefined" !== typeof e && e) ||
                {},
              o = {
                searchParams: "URLSearchParams" in n,
                iterable: "Symbol" in n && "iterator" in Symbol,
                blob:
                  "FileReader" in n &&
                  "Blob" in n &&
                  (function () {
                    try {
                      return (new Blob(), !0);
                    } catch (e) {
                      return !1;
                    }
                  })(),
                formData: "FormData" in n,
                arrayBuffer: "ArrayBuffer" in n,
              };
            function s(e) {
              return e && DataView.prototype.isPrototypeOf(e);
            }
            if (o.arrayBuffer)
              var i = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]",
                ],
                a =
                  ArrayBuffer.isView ||
                  function (e) {
                    return (
                      e && i.indexOf(Object.prototype.toString.call(e)) > -1
                    );
                  };
            function c(e) {
              if (
                ("string" !== typeof e && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
              )
                throw new TypeError(
                  'Invalid character in header field name: "' + e + '"',
                );
              return e.toLowerCase();
            }
            function u(e) {
              return ("string" !== typeof e && (e = String(e)), e);
            }
            function l(e) {
              var t = {
                next: function () {
                  var t = e.shift();
                  return { done: void 0 === t, value: t };
                },
              };
              return (
                o.iterable &&
                  (t[Symbol.iterator] = function () {
                    return t;
                  }),
                t
              );
            }
            function d(e) {
              ((this.map = {}),
                e instanceof d
                  ? e.forEach(function (e, t) {
                      this.append(t, e);
                    }, this)
                  : Array.isArray(e)
                    ? e.forEach(function (e) {
                        if (2 != e.length)
                          throw new TypeError(
                            "Headers constructor: expected name/value pair to be length 2, found" +
                              e.length,
                          );
                        this.append(e[0], e[1]);
                      }, this)
                    : e &&
                      Object.getOwnPropertyNames(e).forEach(function (t) {
                        this.append(t, e[t]);
                      }, this));
            }
            function f(e) {
              if (!e._noBody)
                return e.bodyUsed
                  ? Promise.reject(new TypeError("Already read"))
                  : void (e.bodyUsed = !0);
            }
            function h(e) {
              return new Promise(function (t, r) {
                ((e.onload = function () {
                  t(e.result);
                }),
                  (e.onerror = function () {
                    r(e.error);
                  }));
              });
            }
            function p(e) {
              var t = new FileReader(),
                r = h(t);
              return (t.readAsArrayBuffer(e), r);
            }
            function E(e) {
              var t = new FileReader(),
                r = h(t),
                n = /charset=([A-Za-z0-9_-]+)/.exec(e.type),
                o = n ? n[1] : "utf-8";
              return (t.readAsText(e, o), r);
            }
            function y(e) {
              for (
                var t = new Uint8Array(e), r = new Array(t.length), n = 0;
                n < t.length;
                n++
              )
                r[n] = String.fromCharCode(t[n]);
              return r.join("");
            }
            function g(e) {
              if (e.slice) return e.slice(0);
              var t = new Uint8Array(e.byteLength);
              return (t.set(new Uint8Array(e)), t.buffer);
            }
            function b() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                  ((this.bodyUsed = this.bodyUsed),
                    (this._bodyInit = e),
                    e
                      ? "string" === typeof e
                        ? (this._bodyText = e)
                        : o.blob && Blob.prototype.isPrototypeOf(e)
                          ? (this._bodyBlob = e)
                          : o.formData && FormData.prototype.isPrototypeOf(e)
                            ? (this._bodyFormData = e)
                            : o.searchParams &&
                                URLSearchParams.prototype.isPrototypeOf(e)
                              ? (this._bodyText = e.toString())
                              : o.arrayBuffer && o.blob && s(e)
                                ? ((this._bodyArrayBuffer = g(e.buffer)),
                                  (this._bodyInit = new Blob([
                                    this._bodyArrayBuffer,
                                  ])))
                                : o.arrayBuffer &&
                                    (ArrayBuffer.prototype.isPrototypeOf(e) ||
                                      a(e))
                                  ? (this._bodyArrayBuffer = g(e))
                                  : (this._bodyText = e =
                                      Object.prototype.toString.call(e))
                      : ((this._noBody = !0), (this._bodyText = "")),
                    this.headers.get("content-type") ||
                      ("string" === typeof e
                        ? this.headers.set(
                            "content-type",
                            "text/plain;charset=UTF-8",
                          )
                        : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set(
                              "content-type",
                              this._bodyBlob.type,
                            )
                          : o.searchParams &&
                            URLSearchParams.prototype.isPrototypeOf(e) &&
                            this.headers.set(
                              "content-type",
                              "application/x-www-form-urlencoded;charset=UTF-8",
                            )));
                }),
                o.blob &&
                  (this.blob = function () {
                    var e = f(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                      throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]));
                  }),
                (this.arrayBuffer = function () {
                  if (this._bodyArrayBuffer) {
                    var e = f(this);
                    return (
                      e ||
                      (ArrayBuffer.isView(this._bodyArrayBuffer)
                        ? Promise.resolve(
                            this._bodyArrayBuffer.buffer.slice(
                              this._bodyArrayBuffer.byteOffset,
                              this._bodyArrayBuffer.byteOffset +
                                this._bodyArrayBuffer.byteLength,
                            ),
                          )
                        : Promise.resolve(this._bodyArrayBuffer))
                    );
                  }
                  if (o.blob) return this.blob().then(p);
                  throw new Error("could not read as ArrayBuffer");
                }),
                (this.text = function () {
                  var e = f(this);
                  if (e) return e;
                  if (this._bodyBlob) return E(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(y(this._bodyArrayBuffer));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                  return Promise.resolve(this._bodyText);
                }),
                o.formData &&
                  (this.formData = function () {
                    return this.text().then(w);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            ((d.prototype.append = function (e, t) {
              ((e = c(e)), (t = u(t)));
              var r = this.map[e];
              this.map[e] = r ? r + ", " + t : t;
            }),
              (d.prototype["delete"] = function (e) {
                delete this.map[c(e)];
              }),
              (d.prototype.get = function (e) {
                return ((e = c(e)), this.has(e) ? this.map[e] : null);
              }),
              (d.prototype.has = function (e) {
                return this.map.hasOwnProperty(c(e));
              }),
              (d.prototype.set = function (e, t) {
                this.map[c(e)] = u(t);
              }),
              (d.prototype.forEach = function (e, t) {
                for (var r in this.map)
                  this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
              }),
              (d.prototype.keys = function () {
                var e = [];
                return (
                  this.forEach(function (t, r) {
                    e.push(r);
                  }),
                  l(e)
                );
              }),
              (d.prototype.values = function () {
                var e = [];
                return (
                  this.forEach(function (t) {
                    e.push(t);
                  }),
                  l(e)
                );
              }),
              (d.prototype.entries = function () {
                var e = [];
                return (
                  this.forEach(function (t, r) {
                    e.push([r, t]);
                  }),
                  l(e)
                );
              }),
              o.iterable &&
                (d.prototype[Symbol.iterator] = d.prototype.entries));
            var m = [
              "CONNECT",
              "DELETE",
              "GET",
              "HEAD",
              "OPTIONS",
              "PATCH",
              "POST",
              "PUT",
              "TRACE",
            ];
            function v(e) {
              var t = e.toUpperCase();
              return m.indexOf(t) > -1 ? t : e;
            }
            function _(e, t) {
              if (!(this instanceof _))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
                );
              t = t || {};
              var r = t.body;
              if (e instanceof _) {
                if (e.bodyUsed) throw new TypeError("Already read");
                ((this.url = e.url),
                  (this.credentials = e.credentials),
                  t.headers || (this.headers = new d(e.headers)),
                  (this.method = e.method),
                  (this.mode = e.mode),
                  (this.signal = e.signal),
                  r ||
                    null == e._bodyInit ||
                    ((r = e._bodyInit), (e.bodyUsed = !0)));
              } else this.url = String(e);
              if (
                ((this.credentials =
                  t.credentials || this.credentials || "same-origin"),
                (!t.headers && this.headers) ||
                  (this.headers = new d(t.headers)),
                (this.method = v(t.method || this.method || "GET")),
                (this.mode = t.mode || this.mode || null),
                (this.signal =
                  t.signal ||
                  this.signal ||
                  (function () {
                    if ("AbortController" in n) {
                      var e = new AbortController();
                      return e.signal;
                    }
                  })()),
                (this.referrer = null),
                ("GET" === this.method || "HEAD" === this.method) && r)
              )
                throw new TypeError(
                  "Body not allowed for GET or HEAD requests",
                );
              if (
                (this._initBody(r),
                ("GET" === this.method || "HEAD" === this.method) &&
                  ("no-store" === t.cache || "no-cache" === t.cache))
              ) {
                var o = /([?&])_=[^&]*/;
                if (o.test(this.url))
                  this.url = this.url.replace(o, "$1_=" + new Date().getTime());
                else {
                  var s = /\?/;
                  this.url +=
                    (s.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime();
                }
              }
            }
            function w(e) {
              var t = new FormData();
              return (
                e
                  .trim()
                  .split("&")
                  .forEach(function (e) {
                    if (e) {
                      var r = e.split("="),
                        n = r.shift().replace(/\+/g, " "),
                        o = r.join("=").replace(/\+/g, " ");
                      t.append(decodeURIComponent(n), decodeURIComponent(o));
                    }
                  }),
                t
              );
            }
            function T(e) {
              var t = new d(),
                r = e.replace(/\r?\n[\t ]+/g, " ");
              return (
                r
                  .split("\r")
                  .map(function (e) {
                    return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e;
                  })
                  .forEach(function (e) {
                    var r = e.split(":"),
                      n = r.shift().trim();
                    if (n) {
                      var o = r.join(":").trim();
                      try {
                        t.append(n, o);
                      } catch (s) {
                        console.warn("Response " + s.message);
                      }
                    }
                  }),
                t
              );
            }
            function I(e, t) {
              if (!(this instanceof I))
                throw new TypeError(
                  'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
                );
              if (
                (t || (t = {}),
                (this.type = "default"),
                (this.status = void 0 === t.status ? 200 : t.status),
                this.status < 200 || this.status > 599)
              )
                throw new RangeError(
                  "Failed to construct 'Response': The status provided (0) is outside the range [200, 599].",
                );
              ((this.ok = this.status >= 200 && this.status < 300),
                (this.statusText =
                  void 0 === t.statusText ? "" : "" + t.statusText),
                (this.headers = new d(t.headers)),
                (this.url = t.url || ""),
                this._initBody(e));
            }
            ((_.prototype.clone = function () {
              return new _(this, { body: this._bodyInit });
            }),
              b.call(_.prototype),
              b.call(I.prototype),
              (I.prototype.clone = function () {
                return new I(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new d(this.headers),
                  url: this.url,
                });
              }),
              (I.error = function () {
                var e = new I(null, { status: 200, statusText: "" });
                return ((e.ok = !1), (e.status = 0), (e.type = "error"), e);
              }));
            var A = [301, 302, 303, 307, 308];
            ((I.redirect = function (e, t) {
              if (-1 === A.indexOf(t))
                throw new RangeError("Invalid status code");
              return new I(null, { status: t, headers: { location: e } });
            }),
              (r.DOMException = n.DOMException));
            try {
              new r.DOMException();
            } catch (x) {
              ((r.DOMException = function (e, t) {
                ((this.message = e), (this.name = t));
                var r = Error(e);
                this.stack = r.stack;
              }),
                (r.DOMException.prototype = Object.create(Error.prototype)),
                (r.DOMException.prototype.constructor = r.DOMException));
            }
            function O(e, t) {
              return new Promise(function (s, i) {
                var a = new _(e, t);
                if (a.signal && a.signal.aborted)
                  return i(new r.DOMException("Aborted", "AbortError"));
                var l = new XMLHttpRequest();
                function f() {
                  l.abort();
                }
                function h(e) {
                  try {
                    return "" === e && n.location.href ? n.location.href : e;
                  } catch (t) {
                    return e;
                  }
                }
                if (
                  ((l.onload = function () {
                    var e = {
                      statusText: l.statusText,
                      headers: T(l.getAllResponseHeaders() || ""),
                    };
                    (0 === a.url.indexOf("file://") &&
                    (l.status < 200 || l.status > 599)
                      ? (e.status = 200)
                      : (e.status = l.status),
                      (e.url =
                        "responseURL" in l
                          ? l.responseURL
                          : e.headers.get("X-Request-URL")));
                    var t = "response" in l ? l.response : l.responseText;
                    setTimeout(function () {
                      s(new I(t, e));
                    }, 0);
                  }),
                  (l.onerror = function () {
                    setTimeout(function () {
                      i(new TypeError("Network request failed"));
                    }, 0);
                  }),
                  (l.ontimeout = function () {
                    setTimeout(function () {
                      i(new TypeError("Network request timed out"));
                    }, 0);
                  }),
                  (l.onabort = function () {
                    setTimeout(function () {
                      i(new r.DOMException("Aborted", "AbortError"));
                    }, 0);
                  }),
                  l.open(a.method, h(a.url), !0),
                  "include" === a.credentials
                    ? (l.withCredentials = !0)
                    : "omit" === a.credentials && (l.withCredentials = !1),
                  "responseType" in l &&
                    (o.blob
                      ? (l.responseType = "blob")
                      : o.arrayBuffer && (l.responseType = "arraybuffer")),
                  t &&
                    "object" === typeof t.headers &&
                    !(
                      t.headers instanceof d ||
                      (n.Headers && t.headers instanceof n.Headers)
                    ))
                ) {
                  var p = [];
                  (Object.getOwnPropertyNames(t.headers).forEach(function (e) {
                    (p.push(c(e)), l.setRequestHeader(e, u(t.headers[e])));
                  }),
                    a.headers.forEach(function (e, t) {
                      -1 === p.indexOf(t) && l.setRequestHeader(t, e);
                    }));
                } else
                  a.headers.forEach(function (e, t) {
                    l.setRequestHeader(t, e);
                  });
                (a.signal &&
                  (a.signal.addEventListener("abort", f),
                  (l.onreadystatechange = function () {
                    4 === l.readyState &&
                      a.signal.removeEventListener("abort", f);
                  })),
                  l.send(
                    "undefined" === typeof a._bodyInit ? null : a._bodyInit,
                  ));
              });
            }
            ((O.polyfill = !0),
              n.fetch ||
                ((n.fetch = O),
                (n.Headers = d),
                (n.Request = _),
                (n.Response = I)),
              (r.Headers = d),
              (r.Request = _),
              (r.Response = I),
              (r.fetch = O),
              Object.defineProperty(r, "__esModule", { value: !0 }));
          })({});
        })("undefined" !== typeof self ? self : this);
      }).call(this, r(13));
    },
    5287: function (e, t, r) {
      "use strict";
      (function (e) {
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BLOCKSTACK_HANDLER = void 0),
          (t.asciiToBytes = U),
          (t.bigIntToBytes = I),
          (t.bytesToAscii = P),
          (t.bytesToHex = k),
          (t.bytesToUtf8 = N),
          (t.concatArray = F),
          (t.concatBytes = L),
          (t.fromTwos = x),
          (t.getAesCbcOutputLength = c),
          (t.getBase64OutputLength = u),
          (t.getGlobalObject = y),
          (t.getGlobalObjects = g),
          (t.getGlobalScope = p),
          (t.hexToBigInt = _),
          (t.hexToBytes = S),
          (t.hexToInt = T),
          (t.intToBigInt = m),
          (t.intToBytes = b),
          (t.intToHex = w),
          (t.isInstance = j),
          (t.isLaterVersion = d),
          (t.isSameOriginAbsoluteUrl = h),
          (t.makeUUID4 = f),
          (t.megabytesToBytes = a),
          (t.nextHour = i),
          (t.nextMonth = s),
          (t.nextYear = o),
          (t.octetsToBytes = M),
          (t.toTwos = A),
          (t.updateQueryStringParameter = l),
          (t.utf8ToBytes = D),
          (t.with0x = v));
        var n = r(6264);
        t.BLOCKSTACK_HANDLER = "blockstack";
        function o() {
          return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
        function s() {
          return new Date(new Date().setMonth(new Date().getMonth() + 1));
        }
        function i() {
          return new Date(new Date().setHours(new Date().getHours() + 1));
        }
        function a(e) {
          return Number.isFinite(e) ? Math.floor(1024 * e * 1024) : 0;
        }
        function c(e) {
          const t = 16 * (Math.floor(e / 16) + 1);
          return t;
        }
        function u(e) {
          const t = 4 * Math.ceil(e / 3);
          return t;
        }
        function l(e, t, r) {
          const n = new RegExp(`([?&])${t}=.*?(&|$)`, "i"),
            o = -1 !== e.indexOf("?") ? "&" : "?";
          return e.match(n)
            ? e.replace(n, `$1${t}=${r}$2`)
            : `${e}${o}${t}=${r}`;
        }
        function d(e, t) {
          ((void 0 !== e && "" !== e) || (e = "0.0.0"),
            (void 0 !== t && "" !== e) || (t = "0.0.0"));
          const r = e.split(".").map((e) => parseInt(e, 10)),
            n = t.split(".").map((e) => parseInt(e, 10));
          for (let o = 0; o < t.length; o++)
            if ((o >= e.length && n.push(0), r[o] < n[o])) return !1;
          return !0;
        }
        function f() {
          let e = new Date().getTime();
          return (
            "undefined" !== typeof performance &&
              "function" === typeof performance.now &&
              (e += performance.now()),
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
              const r = ((e + 16 * Math.random()) % 16) | 0;
              return (
                (e = Math.floor(e / 16)),
                ("x" === t ? r : (3 & r) | 8).toString(16)
              );
            })
          );
        }
        function h(e, t) {
          try {
            const r = new URL(e),
              n = new URL(t),
              o =
                0 | parseInt(r.port || "0", 10) ||
                ("https:" === r.protocol ? 443 : 80),
              s =
                0 | parseInt(n.port || "0", 10) ||
                ("https:" === n.protocol ? 443 : 80),
              i = {
                scheme: r.protocol === n.protocol,
                hostname: r.hostname === n.hostname,
                port: o === s,
                absolute:
                  (e.includes("http://") || e.includes("https://")) &&
                  (t.includes("http://") || t.includes("https://")),
              };
            return i.scheme && i.hostname && i.port && i.absolute;
          } catch (r) {
            return (
              console.log(r),
              console.log("Parsing error in same URL origin check"),
              !1
            );
          }
        }
        function p() {
          if ("undefined" !== typeof self) return self;
          if ("undefined" !== typeof window) return window;
          if ("undefined" !== typeof e) return e;
          throw new Error(
            "Unexpected runtime environment - no supported global scope (`window`, `self`, `global`) available",
          );
        }
        function E(e, t, r) {
          return r
            ? `Use of '${r}' requires \`${t}\` which is unavailable on the '${e}' object within the currently executing environment.`
            : `\`${t}\` is unavailable on the '${e}' object within the currently executing environment.`;
        }
        function y(e, t) {
          let {
              throwIfUnavailable: r,
              usageDesc: o,
              returnEmptyObject: s,
            } = void 0 === t ? {} : t,
            i = void 0;
          try {
            if (((i = p()), i)) {
              const t = i[e];
              if (t) return t;
            }
          } catch (a) {
            n.Logger.error(
              `Error getting object '${e}' from global scope '${i}': ${a}`,
            );
          }
          if (r) {
            const t = E(i, e.toString(), o);
            throw (n.Logger.error(t), new Error(t));
          }
          if (s) return {};
        }
        function g(e, t) {
          let r,
            {
              throwIfUnavailable: o,
              usageDesc: s,
              returnEmptyObject: i,
            } = void 0 === t ? {} : t;
          try {
            r = p();
          } catch (c) {
            if ((n.Logger.error("Error getting global scope: " + c), o)) {
              const t = E(r, e[0].toString(), s);
              throw (n.Logger.error(t), t);
            }
            i && (r = {});
          }
          const a = {};
          for (let u = 0; u < e.length; u++) {
            const t = e[u];
            try {
              if (r) {
                const e = r[t];
                if (e) a[t] = e;
                else {
                  if (o) {
                    const e = E(r, t.toString(), s);
                    throw (n.Logger.error(e), new Error(e));
                  }
                  i && (a[t] = {});
                }
              }
            } catch (c) {
              if (o) {
                const e = E(r, t.toString(), s);
                throw (n.Logger.error(e), new Error(e));
              }
            }
          }
          return a;
        }
        function b(e, t, r) {
          return I(m(e, t), r);
        }
        function m(e, t) {
          let r = e;
          if ("number" === typeof r) {
            if (!Number.isInteger(r))
              throw new RangeError(
                "Invalid value. Values of type 'number' must be an integer.",
              );
            if (r > Number.MAX_SAFE_INTEGER)
              throw new RangeError(
                `Invalid value. Values of type 'number' must be less than or equal to ${Number.MAX_SAFE_INTEGER}. For larger values, try using a BigInt instead.`,
              );
            return BigInt(r);
          }
          if ("string" === typeof r)
            if (r.toLowerCase().startsWith("0x")) {
              let e = r.slice(2);
              ((e = e.padStart(e.length + (e.length % 2), "0")), (r = S(e)));
            } else
              try {
                return BigInt(r);
              } catch (n) {
                if (n instanceof SyntaxError)
                  throw new RangeError(
                    `Invalid value. String integer '${r}' is not finite.`,
                  );
              }
          if ("bigint" === typeof r) return r;
          if (r instanceof Uint8Array) {
            if (t) {
              const e = x(BigInt("0x" + k(r)), BigInt(8 * r.byteLength));
              return BigInt(e.toString());
            }
            return BigInt("0x" + k(r));
          }
          if (null != r && "object" === typeof r && "BN" === r.constructor.name)
            return BigInt(r.toString());
          throw new TypeError(
            "Invalid value type. Must be a number, bigint, integer-string, hex-string, or Uint8Array.",
          );
        }
        function v(e) {
          return e.startsWith("0x") ? e : "0x" + e;
        }
        function _(e) {
          if ("string" !== typeof e)
            throw new TypeError(
              "hexToBigInt: expected string, got " + typeof e,
            );
          return BigInt("0x" + e);
        }
        function w(e, t) {
          void 0 === t && (t = 8);
          const r = "bigint" === typeof e ? e : m(e, !1);
          return r.toString(16).padStart(2 * t, "0");
        }
        function T(e) {
          return parseInt(e, 16);
        }
        function I(e, t) {
          void 0 === t && (t = 16);
          const r = w(e, t);
          return S(r);
        }
        function A(e, t) {
          if (
            e < -(BigInt(1) << (t - BigInt(1))) ||
            (BigInt(1) << (t - BigInt(1))) - BigInt(1) < e
          )
            throw "Unable to represent integer in width: " + t;
          return e >= BigInt(0) ? BigInt(e) : e + (BigInt(1) << t);
        }
        function O(e, t) {
          return e & (BigInt(1) << t);
        }
        function x(e, t) {
          return O(e, t - BigInt(1)) ? e - (BigInt(1) << t) : e;
        }
        const R = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0"),
        );
        function k(e) {
          if (!(e instanceof Uint8Array))
            throw new Error("Uint8Array expected");
          let t = "";
          for (const r of e) t += R[r];
          return t;
        }
        function S(e) {
          if ("string" !== typeof e)
            throw new TypeError("hexToBytes: expected string, got " + typeof e);
          e = e.startsWith("0x") || e.startsWith("0X") ? e.slice(2) : e;
          const t = e.length % 2 ? "0" + e : e,
            r = new Uint8Array(t.length / 2);
          for (let n = 0; n < r.length; n++) {
            const e = 2 * n,
              o = t.slice(e, e + 2),
              s = Number.parseInt(o, 16);
            if (Number.isNaN(s) || s < 0)
              throw new Error("Invalid byte sequence");
            r[n] = s;
          }
          return r;
        }
        function D(e) {
          return new TextEncoder().encode(e);
        }
        function N(e) {
          return new TextDecoder().decode(e);
        }
        function U(e) {
          const t = [];
          for (let r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
          return new Uint8Array(t);
        }
        function P(e) {
          return String.fromCharCode.apply(null, e);
        }
        function B(e) {
          return !Number.isInteger(e) || e < 0 || e > 255;
        }
        function M(e) {
          if (e.some(B)) throw new Error("Some values are invalid bytes.");
          return new Uint8Array(e);
        }
        function L() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          if (!t.every((e) => e instanceof Uint8Array))
            throw new Error("Uint8Array list expected");
          if (1 === t.length) return t[0];
          const n = t.reduce((e, t) => e + t.length, 0),
            o = new Uint8Array(n);
          for (let s = 0, i = 0; s < t.length; s++) {
            const e = t[s];
            (o.set(e, i), (i += e.length));
          }
          return o;
        }
        function F(e) {
          return L(
            ...e.map((e) =>
              "number" === typeof e ? M([e]) : e instanceof Array ? M(e) : e,
            ),
          );
        }
        function j(e, t) {
          var r, n;
          return (
            e instanceof t ||
            (null === e ||
            void 0 === e ||
            null === (r = e.constructor) ||
            void 0 === r ||
            null === (n = r.name) ||
            void 0 === n
              ? void 0
              : n.toLowerCase()) === t.name
          );
        }
      }).call(this, r(13));
    },
    6262: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createApiKeyMiddleware = c),
        (t.createFetchFn = l),
        (t.fetchWrapper = i),
        (t.getFetchOptions = void 0),
        (t.hostMatches = a),
        (t.setFetchOptions = void 0),
        r(5286));
      const n = { referrerPolicy: "origin" },
        o = () => n;
      t.getFetchOptions = o;
      const s = (e) => Object.assign(n, e);
      async function i(e, t) {
        const r = {};
        Object.assign(r, t, n);
        const o = await fetch(e, r);
        return o;
      }
      function a(e, t) {
        return "string" === typeof t ? t === e : t.exec(e);
      }
      function c(e) {
        let {
          apiKey: t,
          host: r = /(.*)api(.*)\.stacks\.co$/i,
          httpHeader: n = "x-api-key",
        } = e;
        return {
          pre: (e) => {
            const o = new URL(e.url);
            if (!a(o.host, r)) return;
            const s = new Headers(e.init.headers);
            (s.set(n, t), (e.init.headers = s));
          },
        };
      }
      function u(e) {
        let t = i,
          r = [];
        return (
          e.length > 0 && "function" === typeof e[0] && (t = e.shift()),
          e.length > 0 && (r = e),
          { fetchLib: t, middlewares: r }
        );
      }
      function l() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        const { fetchLib: n, middlewares: o } = u(t),
          s = async (e, t) => {
            let r = { url: e, init: null !== t && void 0 !== t ? t : {} };
            for (const c of o)
              if ("function" === typeof c.pre) {
                const e = await Promise.resolve(c.pre({ fetch: n, ...r }));
                r = null !== e && void 0 !== e ? e : r;
              }
            let s = await n(r.url, r.init);
            for (const c of o)
              if ("function" === typeof c.post) {
                var i, a;
                const e = await Promise.resolve(
                  c.post({
                    fetch: n,
                    url: r.url,
                    init: r.init,
                    response:
                      null !==
                        (i =
                          null === (a = s) || void 0 === a
                            ? void 0
                            : a.clone()) && void 0 !== i
                        ? i
                        : s,
                  }),
                );
                s = null !== e && void 0 !== e ? e : s;
              }
            return s;
          };
        return s;
      }
      t.setFetchOptions = s;
    },
    6263: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.config = void 0));
      t.config = { network: { layer1: "placeholder" }, logLevel: "debug" };
    },
    6264: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Logger = void 0));
      var n = r(6263);
      const o = ["debug", "info", "warn", "error", "none"],
        s = {},
        i = {};
      for (let a = 0; a < o.length; a++) {
        const e = o[a];
        ((s[e] = a), (i[a] = e));
      }
      class Logger {
        static error(e) {
          this.shouldLog("error") && console.error(this.logMessage("error", e));
        }
        static warn(e) {
          this.shouldLog("warn") && console.warn(this.logMessage("warn", e));
        }
        static info(e) {
          this.shouldLog("info") && console.log(this.logMessage("info", e));
        }
        static debug(e) {
          this.shouldLog("debug") && console.log(this.logMessage("debug", e));
        }
        static logMessage(e, t) {
          return `[${e.toUpperCase()}] ${t}`;
        }
        static shouldLog(e) {
          const t = s[n.config.logLevel];
          return t <= s[e];
        }
      }
      t.Logger = Logger;
    },
    8407: function (e, t, r) {
      "use strict";
      (function (e) {
        var n = r(0);
        (Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0));
        var o = r(8408),
          s = n(r(129));
        class StacksExplorer extends s.default {
          constructor() {
            super(...arguments);
            const e = arguments.length <= 0 ? void 0 : arguments[0];
            this.network = new o.StacksMainnet({ url: e.baseUrl });
          }
          async getInfo(e) {
            const t = this.network.getAccountApiUrl(e),
              r = await fetch(t),
              n = await r.json();
            return { balance: Number(n.balance), nonce: n.nonce };
          }
          async getTransactions(e) {
            let { address: t } = e;
            const r = await fetch(
                `${this.config.baseUrl}/extended/v1/address/${t}/transactions`,
              ),
              n = await r.json();
            return this.modifyTransactionsResponse(
              n.results.filter((e) => "token_transfer" === e.tx_type),
              t,
            );
          }
          getNetwork() {
            return this.network;
          }
          getTxMemo(t) {
            const r = e
              .from(t.token_transfer.memo.substring(2), "hex")
              .toString();
            return "\0" === r[0] ? "" : r;
          }
          getTxHash(e) {
            return e.tx_id;
          }
          getTxDirection(e, t) {
            return t.token_transfer.recipient_address === e;
          }
          getTxOtherSideAddress(e, t) {
            return this.getTxDirection(e, t)
              ? t.sender_address
              : t.token_transfer.recipient_address;
          }
          getTxValue(e, t) {
            return this.wallet.toCurrencyUnit(t.token_transfer.amount);
          }
          getTxDateTime(e) {
            return new Date(e.burn_block_time_iso);
          }
          getTxConfirmations(e) {
            return e.is_unachored ? 0 : 1;
          }
          getTxFee(e) {
            return this.wallet.toCurrencyUnit(e.fee_rate);
          }
          getTxNonce(e) {
            return e.nonce;
          }
        }
        t.default = StacksExplorer;
      }).call(this, r(2).Buffer);
    },
    8408: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(6262);
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
      var o = r(8409);
      Object.keys(o).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === o[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return o[e];
              },
            }));
      });
    },
    8409: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.StacksTestnet =
          t.StacksNetworks =
          t.StacksNetwork =
          t.StacksMocknet =
          t.StacksMainnet =
          t.StacksDevnet =
          t.HIRO_TESTNET_DEFAULT =
          t.HIRO_MOCKNET_DEFAULT =
          t.HIRO_MAINNET_DEFAULT =
            void 0));
      var n = r(2778),
        o = r(6262);
      const s = (t.HIRO_MAINNET_DEFAULT =
          "https://stacks-node-api.mainnet.stacks.co"),
        i = (t.HIRO_TESTNET_DEFAULT =
          "https://stacks-node-api.testnet.stacks.co"),
        a = (t.HIRO_MOCKNET_DEFAULT = "http://localhost:3999"),
        c = (t.StacksNetworks = ["mainnet", "testnet", "devnet", "mocknet"]);
      class StacksNetwork {
        constructor(e) {
          var t;
          ((this.version = n.TransactionVersion.Mainnet),
            (this.chainId = n.ChainID.Mainnet),
            (this.bnsLookupUrl = "https://stacks-node-api.mainnet.stacks.co"),
            (this.broadcastEndpoint = "/v2/transactions"),
            (this.transferFeeEstimateEndpoint = "/v2/fees/transfer"),
            (this.transactionFeeEstimateEndpoint = "/v2/fees/transaction"),
            (this.accountEndpoint = "/v2/accounts"),
            (this.contractAbiEndpoint = "/v2/contracts/interface"),
            (this.readOnlyFunctionCallEndpoint = "/v2/contracts/call-read"),
            (this.isMainnet = () =>
              this.version === n.TransactionVersion.Mainnet),
            (this.getBroadcastApiUrl = () =>
              `${this.coreApiUrl}${this.broadcastEndpoint}`),
            (this.getTransferFeeEstimateApiUrl = () =>
              `${this.coreApiUrl}${this.transferFeeEstimateEndpoint}`),
            (this.getTransactionFeeEstimateApiUrl = () =>
              `${this.coreApiUrl}${this.transactionFeeEstimateEndpoint}`),
            (this.getAccountApiUrl = (e) =>
              `${this.coreApiUrl}${this.accountEndpoint}/${e}?proof=0`),
            (this.getAccountExtendedBalancesApiUrl = (e) =>
              `${this.coreApiUrl}/extended/v1/address/${e}/balances`),
            (this.getAbiApiUrl = (e, t) =>
              `${this.coreApiUrl}${this.contractAbiEndpoint}/${e}/${t}`),
            (this.getReadOnlyFunctionCallApiUrl = (e, t, r) =>
              `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}/${e}/${t}/${encodeURIComponent(r)}`),
            (this.getInfoUrl = () => this.coreApiUrl + "/v2/info"),
            (this.getBlockTimeInfoUrl = () =>
              this.coreApiUrl + "/extended/v1/info/network_block_times"),
            (this.getPoxInfoUrl = () => this.coreApiUrl + "/v2/pox"),
            (this.getRewardsUrl = (e, t) => {
              let r = `${this.coreApiUrl}/extended/v1/burnchain/rewards/${e}`;
              return (t && (r = `${r}?limit=${t.limit}&offset=${t.offset}`), r);
            }),
            (this.getRewardsTotalUrl = (e) =>
              `${this.coreApiUrl}/extended/v1/burnchain/rewards/${e}/total`),
            (this.getRewardHoldersUrl = (e, t) => {
              let r = `${this.coreApiUrl}/extended/v1/burnchain/reward_slot_holders/${e}`;
              return (t && (r = `${r}?limit=${t.limit}&offset=${t.offset}`), r);
            }),
            (this.getStackerInfoUrl = (e, t) =>
              `${this.coreApiUrl}${this.readOnlyFunctionCallEndpoint}\n    ${e}/${t}/get-stacker-info`),
            (this.getDataVarUrl = (e, t, r) =>
              `${this.coreApiUrl}/v2/data_var/${e}/${t}/${r}?proof=0`),
            (this.getMapEntryUrl = (e, t, r) =>
              `${this.coreApiUrl}/v2/map_entry/${e}/${t}/${r}?proof=0`),
            (this.coreApiUrl = e.url),
            (this.fetchFn =
              null !== (t = e.fetchFn) && void 0 !== t
                ? t
                : (0, o.createFetchFn)()));
        }
        getNameInfo(e) {
          const t = `${this.bnsLookupUrl}/v1/names/${e}`;
          return this.fetchFn(t)
            .then((e) => {
              if (404 === e.status) throw new Error("Name not found");
              if (200 !== e.status)
                throw new Error("Bad response status: " + e.status);
              return e.json();
            })
            .then((e) =>
              e.address ? Object.assign({}, e, { address: e.address }) : e,
            );
        }
      }
      ((t.StacksNetwork = StacksNetwork),
        (StacksNetwork.fromName = (e) => {
          switch (e) {
            case "mainnet":
              return new StacksMainnet();
            case "testnet":
              return new StacksTestnet();
            case "devnet":
              return new u();
            case "mocknet":
              return new StacksMocknet();
            default:
              throw new Error(
                "Invalid network name provided. Must be one of the following: " +
                  c.join(", "),
              );
          }
        }),
        (StacksNetwork.fromNameOrNetwork = (e) =>
          "string" !== typeof e && "version" in e
            ? e
            : StacksNetwork.fromName(e)));
      class StacksMainnet extends StacksNetwork {
        constructor(e) {
          var t;
          (super({
            url:
              null !== (t = null === e || void 0 === e ? void 0 : e.url) &&
              void 0 !== t
                ? t
                : s,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = n.TransactionVersion.Mainnet),
            (this.chainId = n.ChainID.Mainnet));
        }
      }
      t.StacksMainnet = StacksMainnet;
      class StacksTestnet extends StacksNetwork {
        constructor(e) {
          var t;
          (super({
            url:
              null !== (t = null === e || void 0 === e ? void 0 : e.url) &&
              void 0 !== t
                ? t
                : i,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = n.TransactionVersion.Testnet),
            (this.chainId = n.ChainID.Testnet));
        }
      }
      t.StacksTestnet = StacksTestnet;
      class StacksMocknet extends StacksNetwork {
        constructor(e) {
          var t;
          (super({
            url:
              null !== (t = null === e || void 0 === e ? void 0 : e.url) &&
              void 0 !== t
                ? t
                : a,
            fetchFn: null === e || void 0 === e ? void 0 : e.fetchFn,
          }),
            (this.version = n.TransactionVersion.Testnet),
            (this.chainId = n.ChainID.Testnet));
        }
      }
      t.StacksMocknet = StacksMocknet;
      const u = (t.StacksDevnet = StacksMocknet);
    },
    8410: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ValidationError =
          t.SignatureVerificationError =
          t.RemoteServiceError =
          t.PreconditionFailedError =
          t.PayloadTooLargeError =
          t.NotEnoughProofError =
          t.NotEnoughFundsError =
          t.NoSessionDataError =
          t.MissingParameterError =
          t.LoginFailedError =
          t.InvalidStateError =
          t.InvalidParameterError =
          t.InvalidDIDError =
          t.InvalidAmountError =
          t.GaiaHubError =
          t.FailedDecryptionError =
          t.ERROR_CODES =
          t.DoesNotExist =
          t.ConflictError =
          t.BlockstackError =
          t.BadPathError =
            void 0));
      const n = (t.ERROR_CODES = {
        MISSING_PARAMETER: "missing_parameter",
        REMOTE_SERVICE_ERROR: "remote_service_error",
        INVALID_STATE: "invalid_state",
        NO_SESSION_DATA: "no_session_data",
        DOES_NOT_EXIST: "does_not_exist",
        FAILED_DECRYPTION_ERROR: "failed_decryption_error",
        INVALID_DID_ERROR: "invalid_did_error",
        NOT_ENOUGH_FUNDS_ERROR: "not_enough_error",
        INVALID_AMOUNT_ERROR: "invalid_amount_error",
        LOGIN_FAILED_ERROR: "login_failed",
        SIGNATURE_VERIFICATION_ERROR: "signature_verification_failure",
        CONFLICT_ERROR: "conflict_error",
        NOT_ENOUGH_PROOF_ERROR: "not_enough_proof_error",
        BAD_PATH_ERROR: "bad_path_error",
        VALIDATION_ERROR: "validation_error",
        PAYLOAD_TOO_LARGE_ERROR: "payload_too_large_error",
        PRECONDITION_FAILED_ERROR: "precondition_failed_error",
        UNKNOWN: "unknown",
      });
      Object.freeze(n);
      class BlockstackError extends Error {
        constructor(e) {
          super();
          let t = e.message,
            r = "Error Code: " + e.code,
            n = this.stack;
          if (n) r += "Stack Trace:\n" + n;
          else
            try {
              throw new Error();
            } catch (o) {
              n = o.stack;
            }
          ((t +=
            "\nIf you believe this exception is caused by a bug in stacks.js,\n      please file a bug report: https://github.com/blockstack/stacks.js/issues\n\n" +
            r),
            (this.message = t),
            (this.code = e.code),
            (this.parameter = e.parameter ? e.parameter : void 0));
        }
        toString() {
          return `${super.toString()}\n    code: ${this.code} param: ${this.parameter ? this.parameter : "n/a"}`;
        }
      }
      t.BlockstackError = BlockstackError;
      class InvalidParameterError extends BlockstackError {
        constructor(e, t) {
          (void 0 === t && (t = ""),
            super({ code: n.MISSING_PARAMETER, message: t, parameter: e }),
            (this.name = "MissingParametersError"));
        }
      }
      t.InvalidParameterError = InvalidParameterError;
      class MissingParameterError extends BlockstackError {
        constructor(e, t) {
          (void 0 === t && (t = ""),
            super({ code: n.MISSING_PARAMETER, message: t, parameter: e }),
            (this.name = "MissingParametersError"));
        }
      }
      t.MissingParameterError = MissingParameterError;
      class RemoteServiceError extends BlockstackError {
        constructor(e, t) {
          (void 0 === t && (t = ""),
            super({ code: n.REMOTE_SERVICE_ERROR, message: t }),
            (this.response = e));
        }
      }
      t.RemoteServiceError = RemoteServiceError;
      class InvalidDIDError extends BlockstackError {
        constructor(e) {
          (void 0 === e && (e = ""),
            super({ code: n.INVALID_DID_ERROR, message: e }),
            (this.name = "InvalidDIDError"));
        }
      }
      t.InvalidDIDError = InvalidDIDError;
      class NotEnoughFundsError extends BlockstackError {
        constructor(e) {
          const t = "Not enough UTXOs to fund. Left to fund: " + e;
          (super({ code: n.NOT_ENOUGH_FUNDS_ERROR, message: t }),
            (this.leftToFund = e),
            (this.name = "NotEnoughFundsError"),
            (this.message = t));
        }
      }
      t.NotEnoughFundsError = NotEnoughFundsError;
      class InvalidAmountError extends BlockstackError {
        constructor(e, t) {
          const r =
            `Not enough coin to fund fees transaction fees. Fees would be ${e}, specified spend is  ` +
            t;
          (super({ code: n.INVALID_AMOUNT_ERROR, message: r }),
            (this.specifiedAmount = t),
            (this.fees = e),
            (this.name = "InvalidAmountError"),
            (this.message = r));
        }
      }
      t.InvalidAmountError = InvalidAmountError;
      class LoginFailedError extends BlockstackError {
        constructor(e) {
          const t = "Failed to login: " + e;
          (super({ code: n.LOGIN_FAILED_ERROR, message: t }),
            (this.message = t),
            (this.name = "LoginFailedError"));
        }
      }
      t.LoginFailedError = LoginFailedError;
      class SignatureVerificationError extends BlockstackError {
        constructor(e) {
          const t = "Failed to verify signature: " + e;
          (super({ code: n.SIGNATURE_VERIFICATION_ERROR, message: t }),
            (this.message = t),
            (this.name = "SignatureVerificationError"));
        }
      }
      t.SignatureVerificationError = SignatureVerificationError;
      class FailedDecryptionError extends BlockstackError {
        constructor(e) {
          (void 0 === e && (e = "Unable to decrypt cipher object."),
            super({ code: n.FAILED_DECRYPTION_ERROR, message: e }),
            (this.message = e),
            (this.name = "FailedDecryptionError"));
        }
      }
      t.FailedDecryptionError = FailedDecryptionError;
      class InvalidStateError extends BlockstackError {
        constructor(e) {
          (super({ code: n.INVALID_STATE, message: e }),
            (this.message = e),
            (this.name = "InvalidStateError"));
        }
      }
      t.InvalidStateError = InvalidStateError;
      class NoSessionDataError extends BlockstackError {
        constructor(e) {
          (super({ code: n.INVALID_STATE, message: e }),
            (this.message = e),
            (this.name = "NoSessionDataError"));
        }
      }
      t.NoSessionDataError = NoSessionDataError;
      class GaiaHubError extends BlockstackError {
        constructor(e, t) {
          (super(e),
            t &&
              ((this.hubError = {
                statusCode: t.status,
                statusText: t.statusText,
              }),
              "string" === typeof t.body
                ? (this.hubError.message = t.body)
                : "object" === typeof t.body &&
                  Object.assign(this.hubError, t.body)));
        }
      }
      t.GaiaHubError = GaiaHubError;
      class DoesNotExist extends GaiaHubError {
        constructor(e, t) {
          (super({ message: e, code: n.DOES_NOT_EXIST }, t),
            (this.name = "DoesNotExist"));
        }
      }
      t.DoesNotExist = DoesNotExist;
      class ConflictError extends GaiaHubError {
        constructor(e, t) {
          (super({ message: e, code: n.CONFLICT_ERROR }, t),
            (this.name = "ConflictError"));
        }
      }
      t.ConflictError = ConflictError;
      class NotEnoughProofError extends GaiaHubError {
        constructor(e, t) {
          (super({ message: e, code: n.NOT_ENOUGH_PROOF_ERROR }, t),
            (this.name = "NotEnoughProofError"));
        }
      }
      t.NotEnoughProofError = NotEnoughProofError;
      class BadPathError extends GaiaHubError {
        constructor(e, t) {
          (super({ message: e, code: n.BAD_PATH_ERROR }, t),
            (this.name = "BadPathError"));
        }
      }
      t.BadPathError = BadPathError;
      class ValidationError extends GaiaHubError {
        constructor(e, t) {
          (super({ message: e, code: n.VALIDATION_ERROR }, t),
            (this.name = "ValidationError"));
        }
      }
      t.ValidationError = ValidationError;
      class PayloadTooLargeError extends GaiaHubError {
        constructor(e, t, r) {
          (super({ message: e, code: n.PAYLOAD_TOO_LARGE_ERROR }, t),
            (this.name = "PayloadTooLargeError"),
            (this.maxUploadByteSize = r));
        }
      }
      t.PayloadTooLargeError = PayloadTooLargeError;
      class PreconditionFailedError extends GaiaHubError {
        constructor(e, t) {
          (super({ message: e, code: n.PRECONDITION_FAILED_ERROR }, t),
            (this.name = "PreconditionFailedError"));
        }
      }
      t.PreconditionFailedError = PreconditionFailedError;
    },
    8411: function (e, t, r) {
      "use strict";
      var n, o, s;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TransactionVersion =
          t.PeerNetworkID =
          t.PRIVATE_KEY_UNCOMPRESSED_LENGTH =
          t.PRIVATE_KEY_COMPRESSED_LENGTH =
          t.ChainID =
          t.BLOCKSTACK_DEFAULT_GAIA_HUB_URL =
            void 0),
        (function (e) {
          ((e[(e["Testnet"] = 2147483648)] = "Testnet"),
            (e[(e["Mainnet"] = 1)] = "Mainnet"));
        })(n || (t.ChainID = n = {})),
        (function (e) {
          ((e[(e["Mainnet"] = 0)] = "Mainnet"),
            (e[(e["Testnet"] = 128)] = "Testnet"));
        })(o || (t.TransactionVersion = o = {})),
        (function (e) {
          ((e[(e["Mainnet"] = 385875968)] = "Mainnet"),
            (e[(e["Testnet"] = 4278190080)] = "Testnet"));
        })(s || (t.PeerNetworkID = s = {})));
      ((t.PRIVATE_KEY_COMPRESSED_LENGTH = 33),
        (t.PRIVATE_KEY_UNCOMPRESSED_LENGTH = 32),
        (t.BLOCKSTACK_DEFAULT_GAIA_HUB_URL = "https://hub.blockstack.org"));
    },
    8412: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.parseRecoverableSignatureVrs = s),
        (t.signatureRsvToVrs = a),
        (t.signatureVrsToRsv = i));
      var n = r(5287);
      const o = 32;
      function s(e) {
        if (e.length < 2 * o * 2 + 1) throw new Error("Invalid signature");
        const t = e.slice(0, 2),
          r = e.slice(2, 2 + 2 * o),
          s = e.slice(2 + 2 * o);
        return { recoveryId: (0, n.hexToInt)(t), r: r, s: s };
      }
      function i(e) {
        return e.slice(2) + e.slice(0, 2);
      }
      function a(e) {
        return e.slice(-2) + e.slice(0, -2);
      }
    },
    8413: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.privateKeyToBytes = o));
      var n = r(5287);
      function o(e) {
        const t = "string" === typeof e ? (0, n.hexToBytes)(e) : e;
        if (32 != t.length && 33 != t.length)
          throw new Error(
            "Improperly formatted private-key. Private-key byte length should be 32 or 33. Length provided: " +
              t.length,
          );
        if (33 == t.length && 1 !== t[32])
          throw new Error(
            "Improperly formatted private-key. 33 bytes indicate compressed key, but the last byte must be == 01",
          );
        return t;
      }
    },
    8414: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (e.byteLength !== t.byteLength) return !1;
        for (let r = 0; r < e.byteLength; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function o(e, t) {
        const r = new Uint8Array(e);
        for (let n = 0; n < e; n++) r[n] = t;
        return r;
      }
      function s(e, t) {
        return ((e[t + 0] << 8) | e[t + 1]) >>> 0;
      }
      function i(e, t, r) {
        return (
          void 0 === r && (r = 0),
          (e[r + 0] = t >>> 8),
          (e[r + 1] = t >>> 0),
          e
        );
      }
      function a(e, t) {
        return e[t];
      }
      function c(e, t, r) {
        return (void 0 === r && (r = 0), (e[r] = t), e);
      }
      function u(e, t) {
        return ((e[t + 0] << 0) >>> 0) | ((e[t + 1] << 8) >>> 0);
      }
      function l(e, t, r) {
        return (
          void 0 === r && (r = 0),
          (e[r + 0] = 255 & t),
          (t >>>= 8),
          (e[r + 1] = 255 & t),
          e
        );
      }
      function d(e, t) {
        return e[t] * 2 ** 24 + 65536 * e[t + 1] + 256 * e[t + 2] + e[t + 3];
      }
      function f(e, t, r) {
        return (
          void 0 === r && (r = 0),
          (e[r + 3] = t),
          (t >>>= 8),
          (e[r + 2] = t),
          (t >>>= 8),
          (e[r + 1] = t),
          (t >>>= 8),
          (e[r] = t),
          e
        );
      }
      function h(e, t) {
        return (
          ((e[t + 0] << 0) >>> 0) |
          ((e[t + 1] << 8) >>> 0) |
          ((e[t + 2] << 16) >>> 0) |
          ((e[t + 3] << 24) >>> 0)
        );
      }
      function p(e, t, r) {
        return (
          void 0 === r && (r = 0),
          (e[r + 0] = 255 & t),
          (t >>>= 8),
          (e[r + 1] = 255 & t),
          (t >>>= 8),
          (e[r + 2] = 255 & t),
          (t >>>= 8),
          (e[r + 3] = 255 & t),
          e
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.alloc = o),
        (t.equals = n),
        (t.readUInt16BE = s),
        (t.readUInt16LE = u),
        (t.readUInt32BE = d),
        (t.readUInt32LE = h),
        (t.readUInt8 = a),
        (t.writeUInt16BE = i),
        (t.writeUInt16LE = l),
        (t.writeUInt32BE = f),
        (t.writeUInt32LE = p),
        (t.writeUInt8 = c));
    },
    8415: function (e, t, r) {
      "use strict";
      var n = r(0);
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0));
      var o = n(r(129));
      class StacksHiroExplorer extends o.default {
        async getInfo(e) {
          const t = await this.request(
            `${this.config.baseUrl}/extended/v1/address/${e}/stx`,
          );
          return { balance: Number(t.balance) };
        }
        async getPossibleNextNonce(e) {
          const t = await this.request(
            `${this.config.baseUrl}/extended/v1/address/${e}/nonces`,
          );
          return t.possible_next_nonce;
        }
      }
      t.default = StacksHiroExplorer;
    },
  },
]);
