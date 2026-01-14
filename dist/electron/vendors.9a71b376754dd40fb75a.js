(this["webpackJsonp"] = this["webpackJsonp"] || []).push([
  [187],
  {
    11466: function (t, e, n) {
      (function (t) {
        (function () {
          var r, i, o, s, u;
          for (i in ((s = n(6933)), s)) ((o = s[i]), (e[i] = o));
          for (i in ((u = n(11472)), u)) ((o = u[i]), (e[i] = o));
          ((e.prng = n(6937)),
            (e.Buffer = t),
            (e.WordArray = n(2989).WordArray),
            (e.util = n(3236)),
            (e.ciphers = {
              AES: n(5726).AES,
              TwoFish: n(5727).TwoFish,
              Salsa20: n(4594).Salsa20,
            }),
            (e.hash = {
              SHA1: n(11473).SHA1,
              SHA224: n(11474).SHA224,
              SHA256: n(5729).SHA256,
              SHA384: n(11475).SHA384,
              SHA512: n(3974).SHA512,
              KECCAK: n(4595).KECCAK,
              SHA3: n(11476).SHA3,
              SHA3STD: n(6935).SHA3STD,
              MD5: n(11477).MD5,
              RIPEMD160: n(11478).RIPEMD160,
            }),
            (e.modes = { CTR: n(4879) }),
            (e.scrypt = n(6936).scrypt),
            (e.pbkdf2 = n(5730).pbkdf2),
            (e.hmac = r = n(3973)),
            (e.HMAC_SHA256 = r.HMAC_SHA256),
            (e.HMAC = r.HMAC));
        }).call(this);
      }).call(this, n(2).Buffer);
    },
    11467: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u = [].slice;
        ((t = n(5725)),
          (e.iced = r = n(6934)),
          (s = function (t, e, n, i) {
            var o, s, c, a, f, l;
            ((f = r.findDeferral(arguments)),
              (s = new r.Rendezvous()),
              (i[0] = s.id(!0).defer({
                assign_fn: (function (t) {
                  return function () {
                    return function () {
                      return (o = u.call(arguments, 0));
                    };
                  };
                })()(),
                lineno: 20,
                context: l,
              })),
              (c = setTimeout(s.id(!1).defer({ lineno: 21, context: l }), e)),
              (function (t) {
                return function (t) {
                  ((l = new r.Deferrals(t, {
                    parent: f,
                    filename:
                      "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                  })),
                    s.wait(
                      l.defer({
                        assign_fn: (function () {
                          return function () {
                            return (a = arguments[0]);
                          };
                        })(),
                        lineno: 22,
                      }),
                    ),
                    l._fulfill());
                };
              })()(
                (function (e) {
                  return function () {
                    return (
                      n && (n[0] = a),
                      a && clearTimeout(c),
                      t.apply(null, o)
                    );
                  };
                })(),
              ));
          }),
          (e.timeout = function (t, e, n) {
            var r;
            return ((r = []), s(t, e, n, r), r[0]);
          }),
          (i = function (t, e, n) {
            var i, o, s;
            ((o = r.findDeferral(arguments)),
              (function (t) {
                return function (t) {
                  ((s = new r.Deferrals(t, {
                    parent: o,
                    filename:
                      "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                  })),
                    (n[0] = s.defer({
                      assign_fn: (function () {
                        return function () {
                          return (i = arguments[0]);
                        };
                      })(),
                      lineno: 40,
                    })),
                    s._fulfill());
                };
              })()(
                (function (n) {
                  return function () {
                    return (i || (e[0] = !1), t());
                  };
                })(),
              ));
          }),
          (e.iand = function (t, e) {
            var n;
            return ((n = []), i(t, e, n), n[0]);
          }),
          (o = function (t, e, n) {
            var i, o, s;
            ((o = r.findDeferral(arguments)),
              (function (t) {
                return function (t) {
                  ((s = new r.Deferrals(t, {
                    parent: o,
                    filename:
                      "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                  })),
                    (n[0] = s.defer({
                      assign_fn: (function () {
                        return function () {
                          return (i = arguments[0]);
                        };
                      })(),
                      lineno: 59,
                    })),
                    s._fulfill());
                };
              })()(
                (function (n) {
                  return function () {
                    return (i && (e[0] = !0), t());
                  };
                })(),
              ));
          }),
          (e.ior = function (t, e) {
            var n;
            return ((n = []), o(t, e, n), n[0]);
          }),
          (e.Pipeliner = (function () {
            function e(e, n) {
              ((this.window = e || 1),
                (this.delay = n || 0),
                (this.queue = []),
                (this.n_out = 0),
                (this.cb = null),
                (this[t.deferrals] = this),
                (this["defer"] = this._defer));
            }
            return (
              (e.prototype.waitInQueue = function (t) {
                var e, n;
                ((e = r.findDeferral(arguments)),
                  (function (t) {
                    return function (i) {
                      var o;
                      ((o = function (i) {
                        var s, u, c;
                        if (
                          ((s = i),
                          (u = function () {
                            return r.trampoline(function () {
                              return o(i);
                            });
                          }),
                          (c = u),
                          !(t.n_out >= t.window))
                        )
                          return s();
                        (function (i) {
                          ((n = new r.Deferrals(i, {
                            parent: e,
                            filename:
                              "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                            funcname: "Pipeliner.waitInQueue",
                          })),
                            (t.cb = n.defer({ lineno: 101 })),
                            n._fulfill());
                        })(c);
                      }),
                        o(i));
                    };
                  })(this)(
                    (function (i) {
                      return function () {
                        (i.n_out++,
                          (function (t) {
                            if (!i.delay) return t();
                            (function (t) {
                              ((n = new r.Deferrals(t, {
                                parent: e,
                                filename:
                                  "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                                funcname: "Pipeliner.waitInQueue",
                              })),
                                setTimeout(n.defer({ lineno: 109 }), i.delay),
                                n._fulfill());
                            })(t);
                          })(function () {
                            return t();
                          }));
                      };
                    })(this),
                  ));
              }),
              (e.prototype.__defer = function (t, e) {
                var n, i, o, s;
                ((o = r.findDeferral(arguments)),
                  (function (n) {
                    return function (n) {
                      ((s = new r.Deferrals(n, {
                        parent: o,
                        filename:
                          "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                        funcname: "Pipeliner.__defer",
                      })),
                        (i = s.defer({ lineno: 123 })),
                        (t[0] = function () {
                          var t, n;
                          return (
                            (t =
                              1 <= arguments.length
                                ? u.call(arguments, 0)
                                : []),
                            null != (n = e.assign_fn) && n.apply(null, t),
                            i()
                          );
                        }),
                        s._fulfill());
                    };
                  })()(
                    (function (t) {
                      return function () {
                        if ((t.n_out--, t.cb))
                          return ((n = t.cb), (t.cb = null), n());
                      };
                    })(this),
                  ));
              }),
              (e.prototype._defer = function (t) {
                var e;
                return ((e = []), this.__defer(e, t), e[0]);
              }),
              (e.prototype.flush = function (t) {
                var e, n, i;
                ((n = t),
                  (e = r.findDeferral(arguments)),
                  (i = (function (t) {
                    var n;
                    return function (o) {
                      var s, u, c;
                      if (
                        ((s = o),
                        (u = function () {
                          return r.trampoline(function () {
                            return i(o);
                          });
                        }),
                        (c = u),
                        !t.n_out)
                      )
                        return s();
                      (function (i) {
                        ((n = new r.Deferrals(i, {
                          parent: e,
                          filename:
                            "/Users/max/src/iced/iced-coffee-script/iced-runtime/src/library.iced",
                          funcname: "Pipeliner.flush",
                        })),
                          (t.cb = n.defer({ lineno: 152 })),
                          n._fulfill());
                      })(c);
                    };
                  })(this)),
                  i(n));
              }),
              e
            );
          })()));
      }).call(this);
    },
    11468: function (t, e, n) {
      (function () {
        e.Generator = n(11469).Generator;
      }).call(this);
    },
    11469: function (t, e, n) {
      (function () {
        var t, r, i;
        ((r = n(3207)),
          (i = function () {}),
          (t = t =
            (function () {
              function t(t) {
                ((t = t || {}),
                  (this.lazy_loop_delay = t.lazy_loop_delay || 30),
                  (this.loop_delay = t.loop_delay || 5),
                  (this.work_min = t.work_min || 1),
                  (this.auto_stop_bits = t.auto_stop_bits || 4096),
                  (this.max_bits_per_delta = t.max_bits_per_delta || 4),
                  (this.auto_stop = !t.auto_stop || t.auto_stop),
                  (this.entropies = []),
                  (this.running = !0),
                  (this.is_generating = !1),
                  this.timer_race_loop());
              }
              return (
                (t.prototype.generate = function (t, e) {
                  var n, i, o, s, u;
                  ((s = r.findDeferral(arguments)),
                    (this.is_generating = !0),
                    this.running || this.resume(),
                    (i = 0),
                    (o = []),
                    (function (e) {
                      return function (c) {
                        var a, f;
                        ((a = []),
                          (f = function (c) {
                            var l, h, p;
                            if (
                              ((l = function () {
                                return c(a);
                              }),
                              (h = function () {
                                return r.trampoline(function () {
                                  return f(c);
                                });
                              }),
                              (p = function (t) {
                                return (a.push(t), h());
                              }),
                              !(i < t))
                            )
                              return l();
                            (function (t) {
                              if (e.entropies.length)
                                return (
                                  (n = e.entropies.splice(0, 1)[0]),
                                  (i += n[1]),
                                  t(o.push(n[0]))
                                );
                              (function (t) {
                                ((u = new r.Deferrals(t, {
                                  parent: s,
                                  filename:
                                    "/Users/chris/git/more-entropy/src/generator.iced",
                                  funcname: "Generator.generate",
                                })),
                                  e.delay(u.defer({ lineno: 28 })),
                                  u._fulfill());
                              })(t);
                            })(p);
                          }),
                          f(c));
                      };
                    })(this)(
                      (function (t) {
                        return function () {
                          return (
                            t.auto_stop && t.stop(),
                            (t.is_generating = !1),
                            e(o)
                          );
                        };
                      })(this),
                    ));
                }),
                (t.prototype.stop = function () {
                  return (this.running = !1);
                }),
                (t.prototype.resume = function () {
                  return ((this.running = !0), this.timer_race_loop());
                }),
                (t.prototype.reset = function () {
                  return ((this.entropies = []), (this.total_bits = 0));
                }),
                (t.prototype.count_unused_bits = function () {
                  var t, e, n, r, i;
                  for (
                    t = 0, i = this.entropies, n = 0, r = i.length;
                    n < r;
                    n++
                  )
                    ((e = i[n]), (t += e[1]));
                  return t;
                }),
                (t.prototype.delay = function (t) {
                  var e, n, i;
                  ((n = r.findDeferral(arguments)),
                    (e = this.is_generating
                      ? this.loop_delay
                      : this.lazy_loop_delay),
                    (function (t) {
                      return function (t) {
                        ((i = new r.Deferrals(t, {
                          parent: n,
                          filename:
                            "/Users/chris/git/more-entropy/src/generator.iced",
                          funcname: "Generator.delay",
                        })),
                          setTimeout(i.defer({ lineno: 50 }), e),
                          i._fulfill());
                      };
                    })()(
                      (function (e) {
                        return function () {
                          return t();
                        };
                      })(),
                    ));
                }),
                (t.prototype.timer_race_loop = function () {
                  var t, e, n, o;
                  ((e = i),
                    (t = r.findDeferral(arguments)),
                    (this._last_count = null),
                    (n = []),
                    (o = (function (e) {
                      var i, s, u, c, a;
                      return function (f) {
                        var l, h, p;
                        if (
                          ((l = function () {
                            return f(n);
                          }),
                          (h = function () {
                            return r.trampoline(function () {
                              return o(f);
                            });
                          }),
                          (p = function (t) {
                            return (n.push(t), h());
                          }),
                          !e.running)
                        )
                          return l();
                        (e.count_unused_bits() < e.auto_stop_bits &&
                          ((i = e.millisecond_count()),
                          null != e._last_count &&
                            (s = i - e._last_count) &&
                            ((u = Math.floor(e.log_2(Math.abs(s)))),
                            (u = Math.min(e.max_bits_per_delta, u)),
                            (c = [s, u]),
                            e.entropies.push(c)),
                          (e._last_count = i)),
                          (function (n) {
                            ((a = new r.Deferrals(n, {
                              parent: t,
                              filename:
                                "/Users/chris/git/more-entropy/src/generator.iced",
                              funcname: "Generator.timer_race_loop",
                            })),
                              e.delay(a.defer({ lineno: 64 })),
                              a._fulfill());
                          })(p));
                      };
                    })(this)),
                    o(e));
                }),
                (t.prototype.log_2 = function (t) {
                  return Math.log(t) / Math.LN2;
                }),
                (t.prototype.millisecond_count = function () {
                  var t, e, n;
                  ((t = Date.now()), (e = n = 0));
                  while (Date.now() < t + this.work_min + 1)
                    (e++, (n = Math.sin(Math.sqrt(Math.log(e + n)))));
                  return e;
                }),
                t
              );
            })()),
          "undefined" !== typeof window &&
            null !== window &&
            (window.Generator = t),
          null !== e && (e.Generator = t));
      }).call(this);
    },
    11470: function (t, e, n) {
      (function (t) {
        (function () {
          var r, i, o, s, u, c;
          ((c = n(3207)),
            (u = n(3973)),
            (s = n(2989).WordArray),
            (o = n(11471).Lock),
            (i = (function () {
              function e(t, e, n) {
                ((this.hmac = n || u.sign),
                  (this.security_strength = 256),
                  (t = this.check_entropy(t)),
                  e || (e = new s([])),
                  this._instantiate(t, e));
              }
              return (
                (e.prototype.check_entropy = function (t, e) {
                  if (
                    (null == e && (e = !1),
                    8 * t.sigBytes * 2 < (e ? 2 : 3) * this.security_strength)
                  )
                    throw new Error(
                      "entropy must be at least " +
                        1.5 * this.security_strength +
                        " bits.",
                    );
                  return t;
                }),
                (e.prototype._hmac = function (t, e) {
                  return this.hmac({ key: t, input: e });
                }),
                (e.prototype._update = function (t) {
                  var e, n;
                  return (
                    (e = new s([0], 1)),
                    null != t && (e = e.concat(t)),
                    (n = this.V.clone().concat(e)),
                    (this.K = this._hmac(this.K, n)),
                    n.scrub(),
                    e.scrub(),
                    (this.V = this._hmac(this.K, this.V)),
                    null != t &&
                      ((n = this.V.clone()
                        .concat(new s([1 << 24], 1))
                        .concat(t)),
                      (this.K = this._hmac(this.K, n)),
                      n.scrub(),
                      (this.V = this._hmac(this.K, this.V))),
                    null != t ? t.scrub() : void 0
                  );
                }),
                (e.prototype._instantiate = function (e, n) {
                  var r, i;
                  return (
                    (i = e.concat(n)),
                    (r = 64),
                    (this.K = s.from_buffer(
                      t.from(
                        (function () {
                          var t, e;
                          for (
                            e = [], t = 0;
                            0 <= r ? t < r : t > r;
                            0 <= r ? ++t : --t
                          )
                            e.push(0);
                          return e;
                        })(),
                      ),
                    )),
                    (this.V = s.from_buffer(
                      t.from(
                        (function () {
                          var t, e;
                          for (
                            e = [], t = 0;
                            0 <= r ? t < r : t > r;
                            0 <= r ? ++t : --t
                          )
                            e.push(1);
                          return e;
                        })(),
                      ),
                    )),
                    this._update(i),
                    e.scrub(),
                    (this.reseed_counter = 1)
                  );
                }),
                (e.prototype.reseed = function (t) {
                  return (
                    this._update(this.check_entropy(t, !0)),
                    (this.reseed_counter = 1)
                  );
                }),
                (e.prototype.generate = function (t) {
                  var e, n;
                  if (8 * t > 7500)
                    throw new Error(
                      "generate cannot generate > 7500 bits in 1 call.",
                    );
                  if (this.reseed_counter >= 1e4)
                    throw new Error("Need a reseed!");
                  e = [];
                  while (0 === e.length || e.length * e[0].length * 4 < t)
                    ((this.V = this._hmac(this.K, this.V)),
                      e.push(this.V.words));
                  return (
                    this._update(),
                    (this.reseed_counter += 1),
                    new s((n = []).concat.apply(n, e)).truncate(t)
                  );
                }),
                e
              );
            })()),
            (r = (function () {
              function t(t, e) {
                ((this.gen_seed = t),
                  (this.hmac = e),
                  (this.drbg = null),
                  (this.lock = new o()));
              }
              return (
                (t.prototype.generate = function (t, e) {
                  var n, r, o, s;
                  ((o = c.findDeferral(arguments)),
                    (function (t) {
                      return function (e) {
                        ((s = new c.Deferrals(e, {
                          parent: o,
                          filename:
                            "/Users/max/src/keybase/triplesec/src/drbg.iced",
                          funcname: "ADRBG.generate",
                        })),
                          t.lock.acquire(s.defer({ lineno: 145 })),
                          s._fulfill());
                      };
                    })(this)(
                      (function (u) {
                        return function () {
                          (function (t) {
                            if (null != u.drbg) return t();
                            (function (t) {
                              ((s = new c.Deferrals(t, {
                                parent: o,
                                filename:
                                  "/Users/max/src/keybase/triplesec/src/drbg.iced",
                                funcname: "ADRBG.generate",
                              })),
                                u.gen_seed(
                                  256,
                                  s.defer({
                                    assign_fn: (function () {
                                      return function () {
                                        return (r = arguments[0]);
                                      };
                                    })(),
                                    lineno: 147,
                                  }),
                                ),
                                s._fulfill());
                            })(function () {
                              return t((u.drbg = new i(r, null, u.hmac)));
                            });
                          })(function () {
                            (function (t) {
                              if (!(u.drbg.reseed_counter > 100)) return t();
                              (function (t) {
                                ((s = new c.Deferrals(t, {
                                  parent: o,
                                  filename:
                                    "/Users/max/src/keybase/triplesec/src/drbg.iced",
                                  funcname: "ADRBG.generate",
                                })),
                                  u.gen_seed(
                                    256,
                                    s.defer({
                                      assign_fn: (function () {
                                        return function () {
                                          return (r = arguments[0]);
                                        };
                                      })(),
                                      lineno: 150,
                                    }),
                                  ),
                                  s._fulfill());
                              })(function () {
                                return t(u.drbg.reseed(r));
                              });
                            })(function () {
                              return (
                                (n = u.drbg.generate(t)),
                                u.lock.release(),
                                e(n)
                              );
                            });
                          });
                        };
                      })(this),
                    ));
                }),
                t
              );
            })()),
            (e.DRBG = i),
            (e.ADRBG = r));
        }).call(this);
      }).call(this, n(2).Buffer);
    },
    11471: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s = {}.hasOwnProperty,
          u = function (t, e) {
            for (var n in e) s.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((o = n(3207)),
          (e.Lock = t =
            (function () {
              function t() {
                ((this._open = !0), (this._waiters = []));
              }
              return (
                (t.prototype.acquire = function (t) {
                  return this._open
                    ? ((this._open = !1), t())
                    : this._waiters.push(t);
                }),
                (t.prototype.release = function () {
                  var t;
                  return this._waiters.length
                    ? ((t = this._waiters.shift()), t())
                    : (this._open = !0);
                }),
                (t.prototype.open = function () {
                  return this._open;
                }),
                t
              );
            })()),
          (r = (function (t) {
            function e(t, n) {
              ((this.tab = t),
                (this.name = n),
                e.__super__.constructor.call(this),
                (this.refs = 0));
            }
            return (
              u(e, t),
              (e.prototype.incref = function () {
                return ++this.refs;
              }),
              (e.prototype.decref = function () {
                return --this.refs;
              }),
              (e.prototype.release = function () {
                if ((e.__super__.release.call(this), 0 === this.decref()))
                  return delete this.tab.locks[this.name];
              }),
              e
            );
          })(t)),
          (e.Table = (function () {
            function t() {
              this.locks = {};
            }
            return (
              (t.prototype.create = function (t) {
                var e;
                return ((e = new r(this, t)), (this.locks[t] = e));
              }),
              (t.prototype.acquire = function (t, e, n) {
                var r, i, s, u;
                ((s = o.findDeferral(arguments)),
                  (r = this.locks[t] || this.create(t)),
                  (i = r._open),
                  r.incref(),
                  (function (t) {
                    return function (t) {
                      if (!n && !r._open) return t((r = null));
                      (function (t) {
                        ((u = new o.Deferrals(t, {
                          parent: s,
                          filename: "/Users/max/src/iced/iced-lock/index.iced",
                          funcname: "Table.acquire",
                        })),
                          r.acquire(u.defer({ lineno: 69 })),
                          u._fulfill());
                      })(t);
                    };
                  })()(
                    (function (t) {
                      return function () {
                        return e(r, i);
                      };
                    })(),
                  ));
              }),
              (t.prototype.lookup = function (t) {
                return this.locks[t];
              }),
              t
            );
          })()),
          (i = (function () {
            function t(t) {
              ((this.table = t.table),
                (this.key = t.key),
                (this.seqid = null),
                (this.waiter = null),
                (this.open = !0),
                (this.refs = 0));
            }
            return (
              (t.prototype._incref = function () {
                return ++this.refs;
              }),
              (t.prototype._decref = function () {
                if (0 === --this.refs)
                  return this.table._remove({ key: this.key });
              }),
              (t.prototype._enter = function (t, e) {
                var n, r;
                return (
                  (n = t.seqid),
                  this.open
                    ? ((this.open = !1), (this.seqid = n), e(null, this))
                    : null != this.waiter
                      ? (n > this.waiter.seqid
                          ? ((r = this.waiter),
                            (this.waiter = { cb: e, seqid: n }),
                            r.cb(
                              new Error(
                                "our seqid=" +
                                  r.seqid +
                                  " was preempted by " +
                                  n,
                              ),
                            ))
                          : e(
                              new Error(
                                "our seqid=" +
                                  n +
                                  " is too stale (since " +
                                  this.waiter.seqid +
                                  " is ahead of us)",
                              ),
                            ),
                        this._decref())
                      : n > this.seqid
                        ? (this.waiter = { seqid: n, cb: e })
                        : (e(
                            new Error(
                              "our seqid=" +
                                n +
                                " is too stale (since " +
                                this.seqid +
                                " is already in flight)",
                            ),
                          ),
                          this._decref())
                );
              }),
              (t.prototype.release = function () {
                var t, e;
                return (
                  null != this.waiter
                    ? ((e = this.waiter),
                      (this.seqid = e.seqid),
                      (t = e.cb),
                      (this.waiter = null),
                      t(null, this))
                    : ((this.open = !0), (this.seqid = null)),
                  this._decref()
                );
              }),
              t
            );
          })()),
          (e.SingleFlightTable = (function () {
            function t() {
              this._jobs = {};
            }
            return (
              (t.prototype._create = function (t) {
                var e;
                return (
                  (e = t.key),
                  (this._jobs[e] = new i({ table: this, key: e }))
                );
              }),
              (t.prototype._remove = function (t) {
                var e;
                return ((e = t.key), delete this._jobs[e]);
              }),
              (t.prototype.enter = function (t, e) {
                var n, r, i;
                return (
                  (i = t.seqid),
                  (n = t.key),
                  (r = this._jobs[n] || this._create({ key: n })),
                  r._incref(),
                  r._enter({ seqid: i }, e)
                );
              }),
              t
            );
          })()));
      }).call(this);
    },
    11472: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a,
          f,
          l,
          h,
          p,
          y = {}.hasOwnProperty,
          _ = function (t, e) {
            for (var n in e) y.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((l = n(3207)),
          (a = n(2989).WordArray),
          n(4594),
          (t = n(5726).AES),
          (u = n(5727).TwoFish),
          n(4879),
          (i = n(5728).Concat),
          n(3974).SHA512,
          (s = n(4594).Salsa20),
          (p = n(6933)),
          (r = p.Base),
          (c = p.V),
          (h = n(6938).make_esc),
          (o = (function (e) {
            function n(t) {
              var e, r;
              ((r = t.key),
                (e = t.enc),
                n.__super__.constructor.call(this, { key: r }),
                null != e &&
                  ((this.key = e.key), (this.derived_keys = e.derived_keys)));
            }
            return (
              _(n, e),
              (n.prototype.read_header = function (t) {
                var e, n;
                return (
                  (e =
                    null == (n = this.ct.unshift(2))
                      ? new Error("Ciphertext underrun in header")
                      : null == (this.version = c[n.words[1]])
                        ? new Error(
                            "bad header; couldn't find a good version (got " +
                              n.words[1] +
                              ")",
                          )
                        : n.words[0] !== this.version.header[0]
                          ? new Error("Bad header: unrecognized magic value")
                          : null),
                  t(e)
                );
              }),
              (n.prototype.verify_sig = function (t, e) {
                var n, r, o, s, u;
                ((s = l.findDeferral(arguments)),
                  (function (e) {
                    return function (c) {
                      if (null == (o = e.ct.unshift(i.get_output_size() / 4)))
                        return c(
                          (r = new Error("Ciphertext underrun in signature")),
                        );
                      (function (i) {
                        ((u = new l.Deferrals(i, {
                          parent: s,
                          filename:
                            "/Users/max/src/keybase/triplesec/src/dec.iced",
                          funcname: "Decryptor.verify_sig",
                        })),
                          e.sign(
                            { input: e.ct, key: t, salt: e.salt },
                            u.defer({
                              assign_fn: (function () {
                                return function () {
                                  return (
                                    (r = arguments[0]),
                                    (n = arguments[1])
                                  );
                                };
                              })(),
                              lineno: 63,
                            }),
                          ),
                          u._fulfill());
                      })(function () {
                        return c(
                          (r =
                            null != r
                              ? r
                              : o.equal(n)
                                ? null
                                : new Error(
                                    "Signature mismatch or bad decryption key",
                                  )),
                        );
                      });
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        return e(r);
                      };
                    })(),
                  ));
              }),
              (n.prototype.unshift_iv = function (t, e, n) {
                var r, i;
                return (
                  (r =
                    null != (i = this.ct.unshift(t / 4))
                      ? null
                      : new Error("Ciphertext underrun in " + e)),
                  n(r, i)
                );
              }),
              (n.prototype.read_salt = function (t) {
                var e;
                return (
                  (e =
                    null ==
                    (this.salt = this.ct.unshift(this.version.salt_size / 4))
                      ? new Error("Ciphertext underrrun in read_salt")
                      : null),
                  t(e)
                );
              }),
              (n.prototype.generate_keys = function (t, e) {
                var n, r, i, o, s;
                ((o = l.findDeferral(arguments)),
                  (i = t.progress_hook),
                  (function (t) {
                    return function (e) {
                      ((s = new l.Deferrals(e, {
                        parent: o,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/dec.iced",
                        funcname: "Decryptor.generate_keys",
                      })),
                        t.kdf(
                          { salt: t.salt, progress_hook: i },
                          s.defer({
                            assign_fn: (function () {
                              return function () {
                                return ((n = arguments[0]), (r = arguments[1]));
                              };
                            })(),
                            lineno: 114,
                          }),
                        ),
                        s._fulfill());
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        return e(n, r);
                      };
                    })(),
                  ));
              }),
              (n.prototype.run = function (e, n) {
                var r, i, o, c, f, p, y;
                ((p = l.findDeferral(arguments)),
                  (r = e.data),
                  (c = e.progress_hook),
                  (i = h(n, "Decryptor::run")),
                  (this.ct = a.from_buffer(r)),
                  (function (t) {
                    return function (e) {
                      ((y = new l.Deferrals(e, {
                        parent: p,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/dec.iced",
                        funcname: "Decryptor.run",
                      })),
                        t.read_header(i(y.defer({ lineno: 141 }))),
                        y._fulfill());
                    };
                  })(this)(
                    (function (e) {
                      return function () {
                        (function (t) {
                          ((y = new l.Deferrals(t, {
                            parent: p,
                            filename:
                              "/Users/max/src/keybase/triplesec/src/dec.iced",
                            funcname: "Decryptor.run",
                          })),
                            e.read_salt(i(y.defer({ lineno: 142 }))),
                            y._fulfill());
                        })(function () {
                          (function (t) {
                            ((y = new l.Deferrals(t, {
                              parent: p,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/dec.iced",
                              funcname: "Decryptor.run",
                            })),
                              e.generate_keys(
                                { progress_hook: c },
                                i(
                                  y.defer({
                                    assign_fn: (function (t) {
                                      return function () {
                                        return (t.keys = arguments[0]);
                                      };
                                    })(e),
                                    lineno: 143,
                                  }),
                                ),
                              ),
                              y._fulfill());
                          })(function () {
                            (function (t) {
                              ((y = new l.Deferrals(t, {
                                parent: p,
                                filename:
                                  "/Users/max/src/keybase/triplesec/src/dec.iced",
                                funcname: "Decryptor.run",
                              })),
                                e.verify_sig(
                                  e.keys.hmac,
                                  i(y.defer({ lineno: 144 })),
                                ),
                                y._fulfill());
                            })(function () {
                              (function (n) {
                                ((y = new l.Deferrals(n, {
                                  parent: p,
                                  filename:
                                    "/Users/max/src/keybase/triplesec/src/dec.iced",
                                  funcname: "Decryptor.run",
                                })),
                                  e.unshift_iv(
                                    t.ivSize,
                                    "AES",
                                    i(
                                      y.defer({
                                        assign_fn: (function () {
                                          return function () {
                                            return (o = arguments[0]);
                                          };
                                        })(),
                                        lineno: 145,
                                      }),
                                    ),
                                  ),
                                  y._fulfill());
                              })(function () {
                                (function (t) {
                                  ((y = new l.Deferrals(t, {
                                    parent: p,
                                    filename:
                                      "/Users/max/src/keybase/triplesec/src/dec.iced",
                                    funcname: "Decryptor.run",
                                  })),
                                    e.run_aes(
                                      {
                                        iv: o,
                                        input: e.ct,
                                        key: e.keys.aes,
                                        progress_hook: c,
                                      },
                                      i(
                                        y.defer({
                                          assign_fn: (function () {
                                            return function () {
                                              return (y.ret = arguments[0]);
                                            };
                                          })(),
                                          lineno: 146,
                                        }),
                                      ),
                                    ),
                                    y._fulfill());
                                })(function () {
                                  (function (t) {
                                    if (!e.version.use_twofish) return t();
                                    (function (t) {
                                      ((y = new l.Deferrals(t, {
                                        parent: p,
                                        filename:
                                          "/Users/max/src/keybase/triplesec/src/dec.iced",
                                        funcname: "Decryptor.run",
                                      })),
                                        e.unshift_iv(
                                          u.ivSize,
                                          "2fish",
                                          i(
                                            y.defer({
                                              assign_fn: (function () {
                                                return function () {
                                                  return (o = arguments[0]);
                                                };
                                              })(),
                                              lineno: 148,
                                            }),
                                          ),
                                        ),
                                        y._fulfill());
                                    })(function () {
                                      (function (t) {
                                        ((y = new l.Deferrals(t, {
                                          parent: p,
                                          filename:
                                            "/Users/max/src/keybase/triplesec/src/dec.iced",
                                          funcname: "Decryptor.run",
                                        })),
                                          e.run_twofish(
                                            {
                                              iv: o,
                                              input: e.ct,
                                              key: e.keys.twofish,
                                              progress_hook: c,
                                            },
                                            i(
                                              y.defer({
                                                assign_fn: (function () {
                                                  return function () {
                                                    return (y.ret =
                                                      arguments[0]);
                                                  };
                                                })(),
                                                lineno: 149,
                                              }),
                                            ),
                                          ),
                                          y._fulfill());
                                      })(t);
                                    });
                                  })(function () {
                                    (function (t) {
                                      ((y = new l.Deferrals(t, {
                                        parent: p,
                                        filename:
                                          "/Users/max/src/keybase/triplesec/src/dec.iced",
                                        funcname: "Decryptor.run",
                                      })),
                                        e.unshift_iv(
                                          s.ivSize,
                                          "Salsa",
                                          i(
                                            y.defer({
                                              assign_fn: (function () {
                                                return function () {
                                                  return (o = arguments[0]);
                                                };
                                              })(),
                                              lineno: 150,
                                            }),
                                          ),
                                        ),
                                        y._fulfill());
                                    })(function () {
                                      (function (t) {
                                        ((y = new l.Deferrals(t, {
                                          parent: p,
                                          filename:
                                            "/Users/max/src/keybase/triplesec/src/dec.iced",
                                          funcname: "Decryptor.run",
                                        })),
                                          e.run_salsa20(
                                            {
                                              iv: o,
                                              input: e.ct,
                                              key: e.keys.salsa20,
                                              output_iv: !1,
                                              progress_hook: c,
                                            },
                                            i(
                                              y.defer({
                                                assign_fn: (function () {
                                                  return function () {
                                                    return (f = arguments[0]);
                                                  };
                                                })(),
                                                lineno: 151,
                                              }),
                                            ),
                                          ),
                                          y._fulfill());
                                      })(function () {
                                        return n(null, f.to_buffer());
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      };
                    })(this),
                  ));
              }),
              (n.prototype.clone = function () {
                var t, e;
                return (
                  (t = new n({
                    key: null != (e = this.key) ? e.to_buffer() : void 0,
                    rng: this.rng,
                    version: this.version,
                  })),
                  (t.derived_keys = this.clone_derived_keys()),
                  t
                );
              }),
              n
            );
          })(r)),
          (f = function (t, e) {
            var n, r, i, s, u, c, a, f;
            ((a = l.findDeferral(arguments)),
              (s = t.key),
              (n = t.data),
              (u = t.progress_hook),
              (r = new o({ key: s })),
              (function (t) {
                return function (t) {
                  ((f = new l.Deferrals(t, {
                    parent: a,
                    filename: "/Users/max/src/keybase/triplesec/src/dec.iced",
                  })),
                    r.run(
                      { data: n, progress_hook: u },
                      f.defer({
                        assign_fn: (function () {
                          return function () {
                            return ((i = arguments[0]), (c = arguments[1]));
                          };
                        })(),
                        lineno: 181,
                      }),
                    ),
                    f._fulfill());
                };
              })()(
                (function (t) {
                  return function () {
                    return (r.scrub(), e(i, c));
                  };
                })(),
              ));
          }),
          (e.Decryptor = o),
          (e.decrypt = f));
      }).call(this);
    },
    11473: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u = {}.hasOwnProperty,
          c = function (t, e) {
            for (var n in e) u.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((o = n(2989).WordArray),
          (t = n(3361).Hasher),
          (i = []),
          (r = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              c(e, t),
              (e.blockSize = 16),
              (e.prototype.blockSize = e.blockSize),
              (e.output_size = 20),
              (e.prototype.output_size = e.output_size),
              (e.prototype._doReset = function () {
                return (this._hash = new o([
                  1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                ]));
              }),
              (e.prototype._doProcessBlock = function (t, e) {
                var n, r, o, s, u, c, a, f, l, h;
                for (
                  n = this._hash.words,
                    r = n[0],
                    o = n[1],
                    s = n[2],
                    u = n[3],
                    c = n[4],
                    a = h = 0;
                  h < 80;
                  a = ++h
                )
                  (a < 16
                    ? (i[a] = 0 | t[e + a])
                    : ((f = i[a - 3] ^ i[a - 8] ^ i[a - 14] ^ i[a - 16]),
                      (i[a] = (f << 1) | (f >>> 31))),
                    (l = ((r << 5) | (r >>> 27)) + c + i[a]),
                    (l +=
                      a < 20
                        ? 1518500249 + ((o & s) | (~o & u))
                        : a < 40
                          ? 1859775393 + (o ^ s ^ u)
                          : a < 60
                            ? ((o & s) | (o & u) | (s & u)) - 1894007588
                            : (o ^ s ^ u) - 899497514),
                    (c = u),
                    (u = s),
                    (s = (o << 30) | (o >>> 2)),
                    (o = r),
                    (r = l));
                return (
                  (n[0] = (n[0] + r) | 0),
                  (n[1] = (n[1] + o) | 0),
                  (n[2] = (n[2] + s) | 0),
                  (n[3] = (n[3] + u) | 0),
                  (n[4] = (n[4] + c) | 0)
                );
              }),
              (e.prototype._doFinalize = function () {
                var t, e, n, r;
                return (
                  (t = this._data),
                  (e = t.words),
                  (r = 8 * this._nDataBytes),
                  (n = 8 * t.sigBytes),
                  (e[n >>> 5] |= 128 << (24 - (n % 32))),
                  (e[14 + (((n + 64) >>> 9) << 4)] = Math.floor(
                    r / 4294967296,
                  )),
                  (e[15 + (((n + 64) >>> 9) << 4)] = r),
                  (t.sigBytes = 4 * e.length),
                  this._process(),
                  this._hash
                );
              }),
              (e.prototype.copy_to = function (t) {
                return (
                  e.__super__.copy_to.call(this, t),
                  (t._hash = this._hash.clone())
                );
              }),
              (e.prototype.clone = function () {
                var t;
                return ((t = new e()), this.copy_to(t), t);
              }),
              e
            );
          })(t)),
          (s = s =
            function (t) {
              var e;
              return ((e = new r().finalize(t)), t.scrub(), e);
            }),
          (e.SHA1 = r),
          (e.transform = s));
      }).call(this);
    },
    11474: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s = {}.hasOwnProperty,
          u = function (t, e) {
            for (var n in e) s.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((i = n(2989).WordArray),
          (r = n(5729).SHA256),
          (t = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              u(e, t),
              (e.output_size = 28),
              (e.prototype.output_size = e.output_size),
              (e.prototype._doReset = function () {
                return (this._hash = new i([
                  3238371032, 914150663, 812702999, 4144912697, 4290775857,
                  1750603025, 1694076839, 3204075428,
                ]));
              }),
              (e.prototype._doFinalize = function () {
                var t;
                return (
                  (t = e.__super__._doFinalize.call(this)),
                  (t.sigBytes -= 4),
                  t
                );
              }),
              (e.prototype.clone = function () {
                var t;
                return ((t = new e()), this.copy_to(t), t);
              }),
              e
            );
          })(r)),
          (o = function (e) {
            var n;
            return ((n = new t().finalize(e)), e.scrub(), n);
          }),
          (e.SHA224 = t),
          (e.transform = o));
      }).call(this);
    },
    11475: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a = {}.hasOwnProperty,
          f = function (t, e) {
            for (var n in e) a.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((u = n(2989)),
          (o = u.X64WordArray),
          u.WordArray,
          (c = n(3974)),
          (i = c.SHA512),
          (t = c.Global),
          (r = (function (e) {
            function n() {
              return n.__super__.constructor.apply(this, arguments);
            }
            return (
              f(n, e),
              (n.output_size = 48),
              (n.prototype.output_size = n.output_size),
              (n.prototype._doReset = function () {
                return (this._hash = new o(
                  t.convert([
                    3418070365, 3238371032, 1654270250, 914150663, 2438529370,
                    812702999, 355462360, 4144912697, 1731405415, 4290775857,
                    2394180231, 1750603025, 3675008525, 1694076839, 1203062813,
                    3204075428,
                  ]),
                ));
              }),
              (n.prototype._doFinalize = function () {
                var t;
                return (
                  (t = n.__super__._doFinalize.call(this)),
                  (t.sigBytes -= 16),
                  t
                );
              }),
              (n.prototype.clone = function () {
                var t;
                return ((t = new n()), this.copy_to(t), t);
              }),
              n
            );
          })(i)),
          (s = function (t) {
            var e;
            return ((e = new r().finalize(t)), t.scrub(), e);
          }),
          (e.SHA384 = r),
          (e.transform = s));
      }).call(this);
    },
    11476: function (t, e, n) {
      (function () {
        var t;
        ((t = n(4595)), (e.SHA3 = t.KECCAK), (e.transform = t.transform));
      }).call(this);
    },
    11477: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a,
          f,
          l = {}.hasOwnProperty,
          h = function (t, e) {
            for (var n in e) l.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((a = n(2989).WordArray),
          (s = n(3361).Hasher),
          (i = (function () {
            function t() {
              var t;
              this.T = (function () {
                var e, n;
                for (n = [], t = e = 0; e < 64; t = ++e)
                  n.push((4294967296 * Math.abs(Math.sin(t + 1))) | 0);
                return n;
              })();
            }
            return t;
          })()),
          (f = new i()),
          (e.MD5 = c =
            (function (e) {
              function n() {
                return n.__super__.constructor.apply(this, arguments);
              }
              return (
                h(n, e),
                (n.blockSize = 16),
                (n.prototype.blockSize = n.blockSize),
                (n.output_size = 16),
                (n.prototype.output_size = n.output_size),
                (n.prototype._doReset = function () {
                  return (this._hash = new a([
                    1732584193, 4023233417, 2562383102, 271733878,
                  ]));
                }),
                (n.prototype._doProcessBlock = function (e, n) {
                  var i,
                    s,
                    c,
                    a,
                    l,
                    h,
                    p,
                    y,
                    _,
                    d,
                    g,
                    v,
                    w,
                    m,
                    b,
                    k,
                    S,
                    x,
                    B,
                    P,
                    E,
                    A,
                    D,
                    z,
                    F;
                  for (D = F = 0; F < 16; D = ++F)
                    ((z = n + D),
                      (x = e[z]),
                      (e[z] =
                        (16711935 & ((x << 8) | (x >>> 24))) |
                        (4278255360 & ((x << 24) | (x >>> 8)))));
                  return (
                    (i = this._hash.words),
                    (s = e[n + 0]),
                    (c = e[n + 1]),
                    (d = e[n + 2]),
                    (g = e[n + 3]),
                    (v = e[n + 4]),
                    (w = e[n + 5]),
                    (m = e[n + 6]),
                    (b = e[n + 7]),
                    (k = e[n + 8]),
                    (S = e[n + 9]),
                    (a = e[n + 10]),
                    (l = e[n + 11]),
                    (h = e[n + 12]),
                    (p = e[n + 13]),
                    (y = e[n + 14]),
                    (_ = e[n + 15]),
                    (B = i[0]),
                    (P = i[1]),
                    (E = i[2]),
                    (A = i[3]),
                    (B = t(B, P, E, A, s, 7, f.T[0])),
                    (A = t(A, B, P, E, c, 12, f.T[1])),
                    (E = t(E, A, B, P, d, 17, f.T[2])),
                    (P = t(P, E, A, B, g, 22, f.T[3])),
                    (B = t(B, P, E, A, v, 7, f.T[4])),
                    (A = t(A, B, P, E, w, 12, f.T[5])),
                    (E = t(E, A, B, P, m, 17, f.T[6])),
                    (P = t(P, E, A, B, b, 22, f.T[7])),
                    (B = t(B, P, E, A, k, 7, f.T[8])),
                    (A = t(A, B, P, E, S, 12, f.T[9])),
                    (E = t(E, A, B, P, a, 17, f.T[10])),
                    (P = t(P, E, A, B, l, 22, f.T[11])),
                    (B = t(B, P, E, A, h, 7, f.T[12])),
                    (A = t(A, B, P, E, p, 12, f.T[13])),
                    (E = t(E, A, B, P, y, 17, f.T[14])),
                    (P = t(P, E, A, B, _, 22, f.T[15])),
                    (B = r(B, P, E, A, c, 5, f.T[16])),
                    (A = r(A, B, P, E, m, 9, f.T[17])),
                    (E = r(E, A, B, P, l, 14, f.T[18])),
                    (P = r(P, E, A, B, s, 20, f.T[19])),
                    (B = r(B, P, E, A, w, 5, f.T[20])),
                    (A = r(A, B, P, E, a, 9, f.T[21])),
                    (E = r(E, A, B, P, _, 14, f.T[22])),
                    (P = r(P, E, A, B, v, 20, f.T[23])),
                    (B = r(B, P, E, A, S, 5, f.T[24])),
                    (A = r(A, B, P, E, y, 9, f.T[25])),
                    (E = r(E, A, B, P, g, 14, f.T[26])),
                    (P = r(P, E, A, B, k, 20, f.T[27])),
                    (B = r(B, P, E, A, p, 5, f.T[28])),
                    (A = r(A, B, P, E, d, 9, f.T[29])),
                    (E = r(E, A, B, P, b, 14, f.T[30])),
                    (P = r(P, E, A, B, h, 20, f.T[31])),
                    (B = o(B, P, E, A, w, 4, f.T[32])),
                    (A = o(A, B, P, E, k, 11, f.T[33])),
                    (E = o(E, A, B, P, l, 16, f.T[34])),
                    (P = o(P, E, A, B, y, 23, f.T[35])),
                    (B = o(B, P, E, A, c, 4, f.T[36])),
                    (A = o(A, B, P, E, v, 11, f.T[37])),
                    (E = o(E, A, B, P, b, 16, f.T[38])),
                    (P = o(P, E, A, B, a, 23, f.T[39])),
                    (B = o(B, P, E, A, p, 4, f.T[40])),
                    (A = o(A, B, P, E, s, 11, f.T[41])),
                    (E = o(E, A, B, P, g, 16, f.T[42])),
                    (P = o(P, E, A, B, m, 23, f.T[43])),
                    (B = o(B, P, E, A, S, 4, f.T[44])),
                    (A = o(A, B, P, E, h, 11, f.T[45])),
                    (E = o(E, A, B, P, _, 16, f.T[46])),
                    (P = o(P, E, A, B, d, 23, f.T[47])),
                    (B = u(B, P, E, A, s, 6, f.T[48])),
                    (A = u(A, B, P, E, b, 10, f.T[49])),
                    (E = u(E, A, B, P, y, 15, f.T[50])),
                    (P = u(P, E, A, B, w, 21, f.T[51])),
                    (B = u(B, P, E, A, h, 6, f.T[52])),
                    (A = u(A, B, P, E, g, 10, f.T[53])),
                    (E = u(E, A, B, P, a, 15, f.T[54])),
                    (P = u(P, E, A, B, c, 21, f.T[55])),
                    (B = u(B, P, E, A, k, 6, f.T[56])),
                    (A = u(A, B, P, E, _, 10, f.T[57])),
                    (E = u(E, A, B, P, m, 15, f.T[58])),
                    (P = u(P, E, A, B, p, 21, f.T[59])),
                    (B = u(B, P, E, A, v, 6, f.T[60])),
                    (A = u(A, B, P, E, l, 10, f.T[61])),
                    (E = u(E, A, B, P, d, 15, f.T[62])),
                    (P = u(P, E, A, B, S, 21, f.T[63])),
                    (i[0] = (i[0] + B) | 0),
                    (i[1] = (i[1] + P) | 0),
                    (i[2] = (i[2] + E) | 0),
                    (i[3] = (i[3] + A) | 0)
                  );
                }),
                (n.prototype._doFinalize = function () {
                  var t, e, n, r, i, o, s, u, c, a, f;
                  for (
                    n = this._data,
                      r = n.words,
                      u = 8 * this._nDataBytes,
                      s = 8 * n.sigBytes,
                      r[s >>> 5] |= 128 << (24 - (s % 32)),
                      c = Math.floor(u / 4294967296),
                      a = u,
                      r[15 + (((s + 64) >>> 9) << 4)] =
                        (16711935 & ((c << 8) | (c >>> 24))) |
                        (4278255360 & ((c << 24) | (c >>> 8))),
                      r[14 + (((s + 64) >>> 9) << 4)] =
                        (16711935 & ((a << 8) | (a >>> 24))) |
                        (4278255360 & ((a << 24) | (a >>> 8))),
                      n.sigBytes = 4 * (r.length + 1),
                      this._process(),
                      i = this._hash,
                      t = i.words,
                      o = f = 0;
                    f < 4;
                    o = ++f
                  )
                    ((e = t[o]),
                      (t[o] =
                        (16711935 & ((e << 8) | (e >>> 24))) |
                        (4278255360 & ((e << 24) | (e >>> 8)))));
                  return i;
                }),
                (n.prototype.copy_to = function (t) {
                  return (
                    n.__super__.copy_to.call(this, t),
                    (t._hash = this._hash.clone())
                  );
                }),
                (n.prototype.clone = function () {
                  var t;
                  return ((t = new n()), this.copy_to(t), t);
                }),
                n
              );
            })(s)),
          (t = function (t, e, n, r, i, o, s) {
            var u;
            return (
              (u = t + ((e & n) | (~e & r)) + i + s),
              ((u << o) | (u >>> (32 - o))) + e
            );
          }),
          (r = function (t, e, n, r, i, o, s) {
            var u;
            return (
              (u = t + ((e & r) | (n & ~r)) + i + s),
              ((u << o) | (u >>> (32 - o))) + e
            );
          }),
          (o = function (t, e, n, r, i, o, s) {
            var u;
            return (
              (u = t + (e ^ n ^ r) + i + s),
              ((u << o) | (u >>> (32 - o))) + e
            );
          }),
          (u = function (t, e, n, r, i, o, s) {
            var u;
            return (
              (u = t + (n ^ (e | ~r)) + i + s),
              ((u << o) | (u >>> (32 - o))) + e
            );
          }),
          (e.transform = function (t) {
            var e;
            return ((e = new c().finalize(t)), t.scrub(), e);
          }));
      }).call(this);
    },
    11478: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a,
          f,
          l,
          h,
          p,
          y,
          _ = {}.hasOwnProperty,
          d = function (t, e) {
            for (var n in e) _.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((y = n(2989)),
          (s = y.WordArray),
          y.X64Word,
          y.X64WordArray,
          (i = n(3361).Hasher),
          (r = (function () {
            function t() {
              ((this._zl = new s([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13,
                1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15,
                8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13,
                3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8,
                11, 6, 15, 13,
              ])),
                (this._zr = new s([
                  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11,
                  3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7,
                  14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15,
                  0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6,
                  2, 13, 14, 0, 3, 9, 11,
                ])),
                (this._sl = new s([
                  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6,
                  8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6,
                  7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15,
                  14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8,
                  13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
                ])),
                (this._sr = new s([
                  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13,
                  15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11,
                  8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14,
                  14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14,
                  6, 8, 13, 6, 5, 15, 13, 11, 11,
                ])),
                (this._hl = new s([
                  0, 1518500249, 1859775393, 2400959708, 2840853838,
                ])),
                (this._hr = new s([
                  1352829926, 1548603684, 1836072691, 2053994217, 0,
                ])));
            }
            return t;
          })()),
          (t = new r()),
          (o = (function (e) {
            function n() {
              return n.__super__.constructor.apply(this, arguments);
            }
            return (
              d(n, e),
              (n.blockSize = 16),
              (n.prototype.blockSize = n.blockSize),
              (n.output_size = 20),
              (n.prototype.output_size = n.output_size),
              (n.prototype._doReset = function () {
                return (this._hash = new s([
                  1732584193, 4023233417, 2562383102, 271733878, 3285377520,
                ]));
              }),
              (n.prototype.get_output_size = function () {
                return this.output_size;
              }),
              (n.prototype._doProcessBlock = function (e, n) {
                var r,
                  i,
                  o,
                  s,
                  p,
                  y,
                  _,
                  d,
                  g,
                  v,
                  w,
                  m,
                  b,
                  k,
                  S,
                  x,
                  B,
                  P,
                  E,
                  A,
                  D,
                  z,
                  F;
                for (S = z = 0; z < 16; S = ++z)
                  ((x = n + S),
                    (i = e[x]),
                    (e[x] =
                      (16711935 & ((i << 8) | (i >>> 24))) |
                      (4278255360 & ((i << 24) | (i >>> 8)))));
                for (
                  r = this._hash.words,
                    b = t._hl.words,
                    k = t._hr.words,
                    A = t._zl.words,
                    D = t._zr.words,
                    B = t._sl.words,
                    P = t._sr.words,
                    s = o = r[0],
                    y = p = r[1],
                    d = _ = r[2],
                    v = g = r[3],
                    m = w = r[4],
                    S = F = 0;
                  F < 80;
                  S = ++F
                )
                  ((E = (o + e[n + A[S]]) | 0),
                    (E +=
                      S < 16
                        ? u(p, _, g) + b[0]
                        : S < 32
                          ? c(p, _, g) + b[1]
                          : S < 48
                            ? a(p, _, g) + b[2]
                            : S < 64
                              ? f(p, _, g) + b[3]
                              : l(p, _, g) + b[4]),
                    (E |= 0),
                    (E = h(E, B[S])),
                    (E = (E + w) | 0),
                    (o = w),
                    (w = g),
                    (g = h(_, 10)),
                    (_ = p),
                    (p = E),
                    (E = (s + e[n + D[S]]) | 0),
                    (E +=
                      S < 16
                        ? l(y, d, v) + k[0]
                        : S < 32
                          ? f(y, d, v) + k[1]
                          : S < 48
                            ? a(y, d, v) + k[2]
                            : S < 64
                              ? c(y, d, v) + k[3]
                              : u(y, d, v) + k[4]),
                    (E |= 0),
                    (E = h(E, P[S])),
                    (E = (E + m) | 0),
                    (s = m),
                    (m = v),
                    (v = h(d, 10)),
                    (d = y),
                    (y = E));
                return (
                  (E = (r[1] + _ + v) | 0),
                  (r[1] = (r[2] + g + m) | 0),
                  (r[2] = (r[3] + w + s) | 0),
                  (r[3] = (r[4] + o + y) | 0),
                  (r[4] = (r[0] + p + d) | 0),
                  (r[0] = E)
                );
              }),
              (n.prototype._doFinalize = function () {
                var t, e, n, r, i, o, s, u, c;
                for (
                  n = this._data,
                    r = n.words,
                    u = 8 * this._nDataBytes,
                    s = 8 * n.sigBytes,
                    r[s >>> 5] |= 128 << (24 - (s % 32)),
                    r[14 + (((s + 64) >>> 9) << 4)] =
                      (16711935 & ((u << 8) | (u >>> 24))) |
                      (4278255360 & ((u << 24) | (u >>> 8))),
                    n.sigBytes = 4 * (r.length + 1),
                    this._process(),
                    i = this._hash,
                    t = i.words,
                    o = c = 0;
                  c < 5;
                  o = ++c
                )
                  ((e = t[o]),
                    (t[o] =
                      (16711935 & ((e << 8) | (e >>> 24))) |
                      (4278255360 & ((e << 24) | (e >>> 8)))));
                return i;
              }),
              (n.prototype.scrub = function () {
                return this._hash.scrub();
              }),
              (n.prototype.copy_to = function (t) {
                return (
                  n.__super__.copy_to.call(this, t),
                  (t._hash = this._hash.clone())
                );
              }),
              (n.prototype.clone = function () {
                var t;
                return ((t = new n()), this.copy_to(t), t);
              }),
              n
            );
          })(i)),
          (u = function (t, e, n) {
            return t ^ e ^ n;
          }),
          (c = function (t, e, n) {
            return (t & e) | (~t & n);
          }),
          (a = function (t, e, n) {
            return (t | ~e) ^ n;
          }),
          (f = function (t, e, n) {
            return (t & n) | (e & ~n);
          }),
          (l = function (t, e, n) {
            return t ^ (e | ~n);
          }),
          (h = function (t, e) {
            return (t << e) | (t >>> (32 - e));
          }),
          (p = function (t) {
            var e;
            return ((e = new o().finalize(t)), t.scrub(), e);
          }),
          (e.RIPEMD160 = o),
          (e.transform = p));
      }).call(this);
    },
    11502: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          function i(t) {
            return t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function s(t) {
              try {
                c(r.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                c(r["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function c(t) {
              t.done ? n(t.value) : i(t.value).then(s, u);
            }
            c((r = r.apply(t, e || [])).next());
          });
        };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TokenSigner = e.createUnsecuredToken = void 0));
      const i = n(4885),
        o = n(5737),
        s = n(4886),
        u = n(6946);
      function c(t, e) {
        const n = [],
          r = i.encode(JSON.stringify(e));
        n.push(r);
        const o = i.encode(JSON.stringify(t));
        n.push(o);
        const s = n.join(".");
        return s;
      }
      function a(t) {
        const e = { typ: "JWT", alg: "none" };
        return c(t, e) + ".";
      }
      e.createUnsecuredToken = a;
      class TokenSigner {
        constructor(t, e) {
          if (!t || !e)
            throw new s.MissingParametersError(
              "a signing algorithm and private key are required",
            );
          if ("string" !== typeof t)
            throw new Error("signing algorithm parameter must be a string");
          if (((t = t.toUpperCase()), !o.cryptoClients.hasOwnProperty(t)))
            throw new Error("invalid signing algorithm");
          ((this.tokenType = "JWT"),
            (this.cryptoClient = o.cryptoClients[t]),
            (this.rawPrivateKey = e));
        }
        header(t) {
          void 0 === t && (t = {});
          const e = {
            typ: this.tokenType,
            alg: this.cryptoClient.algorithmName,
          };
          return Object.assign({}, e, t);
        }
        sign(t, e, n) {
          (void 0 === e && (e = !1), void 0 === n && (n = {}));
          const r = this.header(n),
            i = c(t, r),
            o = (0, u.hashSha256)(i);
          return this.createWithSignedHash(t, e, r, i, o);
        }
        signAsync(t, e, n) {
          return (
            void 0 === e && (e = !1),
            void 0 === n && (n = {}),
            r(this, void 0, void 0, function* () {
              const r = this.header(n),
                i = c(t, r),
                o = yield (0, u.hashSha256Async)(i);
              return this.createWithSignedHash(t, e, r, i, o);
            })
          );
        }
        createWithSignedHash(t, e, n, r, o) {
          const s = this.cryptoClient.signHash(o, this.rawPrivateKey);
          if (e) {
            const e = {
              header: [i.encode(JSON.stringify(n))],
              payload: JSON.stringify(t),
              signature: [s],
            };
            return e;
          }
          return [r, s].join(".");
        }
      }
      e.TokenSigner = TokenSigner;
    },
    11503: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SECP256K1Client = void 0));
      const r = n(379),
        i = n(378),
        o = n(11504),
        s = n(11506),
        u = n(4886),
        c = n(130);
      o.utils.hmacSha256Sync = function (t) {
        const e = r.hmac.create(i.sha256, t);
        for (
          var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), s = 1;
          s < n;
          s++
        )
          o[s - 1] = arguments[s];
        return (o.forEach((t) => e.update(t)), e.digest());
      };
      class SECP256K1Client {
        static derivePublicKey(t, e) {
          return (
            void 0 === e && (e = !0),
            66 === t.length && (t = t.slice(0, 64)),
            t.length < 64 && (t = t.padStart(64, "0")),
            (0, c.bytesToHex)(o.getPublicKey(t, e))
          );
        }
        static signHash(t, e, n) {
          if ((void 0 === n && (n = "jose"), !t || !e))
            throw new u.MissingParametersError(
              "a signing input hash and private key are all required",
            );
          const r = o.signSync(t, e.slice(0, 64), { der: !0, canonical: !1 });
          if ("der" === n) return (0, c.bytesToHex)(r);
          if ("jose" === n) return (0, s.derToJose)(r, "ES256");
          throw Error("Invalid signature format");
        }
        static loadSignature(t) {
          return (0, s.joseToDer)(t, "ES256");
        }
        static verifyHash(t, e, n) {
          if (!t || !e || !n)
            throw new u.MissingParametersError(
              "a signing input hash, der signature, and public key are all required",
            );
          return o.verify(e, t, n, { strict: !1 });
        }
      }
      ((e.SECP256K1Client = SECP256K1Client),
        (SECP256K1Client.algorithmName = "ES256K"));
    },
    11504: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.Signature = e.Point = e.CURVE = void 0),
        (e.bytesToHex = z),
        (e.getPublicKey = rt),
        (e.getSharedSecret = st),
        (e.hexToBytes = T),
        (e.recoverPublicKey = it),
        (e.schnorr = void 0),
        (e.sign = ht),
        (e.signSync = pt),
        (e.utils = void 0),
        (e.verify = _t));
      var r = i(n(11505));
      function i(t, e) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (i = function (t, e) {
          if (!e && t && t.__esModule) return t;
          var i,
            o,
            s = { __proto__: null, default: t };
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return s;
          if ((i = e ? r : n)) {
            if (i.has(t)) return i.get(t);
            i.set(t, s);
          }
          for (const n in t)
            "default" !== n &&
              {}.hasOwnProperty.call(t, n) &&
              ((o =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(t, n)) &&
              (o.get || o.set)
                ? i(s, n, o)
                : (s[n] = t[n]));
          return s;
        })(t, e);
      }
      const o = BigInt(0),
        s = BigInt(1),
        u = BigInt(2),
        c = BigInt(3),
        a = BigInt(8),
        f = (e.CURVE = Object.freeze({
          a: o,
          b: BigInt(7),
          P: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
          ),
          h: s,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240",
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424",
          ),
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
        })),
        l = (t, e) => (t + e / u) / e,
        h = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
          ),
          splitScalar(t) {
            const { n: e } = f,
              n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              r = -s * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              o = n,
              u = BigInt("0x100000000000000000000000000000000"),
              c = l(o * t, e),
              a = l(-r * t, e);
            let h = H(t - c * n - a * i, e),
              p = H(-c * r - a * o, e);
            const y = h > u,
              _ = p > u;
            if ((y && (h = e - h), _ && (p = e - p), h > u || p > u))
              throw new Error("splitScalarEndo: Endomorphism failed, k=" + t);
            return { k1neg: y, k1: h, k2neg: _, k2: p };
          },
        },
        p = 32,
        y = 32,
        _ = 32,
        d = p + 1,
        g = 2 * p + 1;
      function v(t) {
        const { a: e, b: n } = f,
          r = H(t * t),
          i = H(r * t);
        return H(i + e * t + n);
      }
      const w = f.a === o;
      class ShaError extends Error {
        constructor(t) {
          super(t);
        }
      }
      function m(t) {
        if (!(t instanceof JacobianPoint))
          throw new TypeError("JacobianPoint expected");
      }
      class JacobianPoint {
        constructor(t, e, n) {
          ((this.x = t), (this.y = e), (this.z = n));
        }
        static fromAffine(t) {
          if (!(t instanceof Point))
            throw new TypeError("JacobianPoint#fromAffine: expected Point");
          return t.equals(Point.ZERO)
            ? JacobianPoint.ZERO
            : new JacobianPoint(t.x, t.y, s);
        }
        static toAffineBatch(t) {
          const e = X(t.map((t) => t.z));
          return t.map((t, n) => t.toAffine(e[n]));
        }
        static normalizeZ(t) {
          return JacobianPoint.toAffineBatch(t).map(JacobianPoint.fromAffine);
        }
        equals(t) {
          m(t);
          const { x: e, y: n, z: r } = this,
            { x: i, y: o, z: s } = t,
            u = H(r * r),
            c = H(s * s),
            a = H(e * c),
            f = H(i * u),
            l = H(H(n * s) * c),
            h = H(H(o * r) * u);
          return a === f && l === h;
        }
        negate() {
          return new JacobianPoint(this.x, H(-this.y), this.z);
        }
        double() {
          const { x: t, y: e, z: n } = this,
            r = H(t * t),
            i = H(e * e),
            o = H(i * i),
            s = t + i,
            f = H(u * (H(s * s) - r - o)),
            l = H(c * r),
            h = H(l * l),
            p = H(h - u * f),
            y = H(l * (f - p) - a * o),
            _ = H(u * e * n);
          return new JacobianPoint(p, y, _);
        }
        add(t) {
          m(t);
          const { x: e, y: n, z: r } = this,
            { x: i, y: s, z: c } = t;
          if (i === o || s === o) return this;
          if (e === o || n === o) return t;
          const a = H(r * r),
            f = H(c * c),
            l = H(e * f),
            h = H(i * a),
            p = H(H(n * c) * f),
            y = H(H(s * r) * a),
            _ = H(h - l),
            d = H(y - p);
          if (_ === o) return d === o ? this.double() : JacobianPoint.ZERO;
          const g = H(_ * _),
            v = H(_ * g),
            w = H(l * g),
            b = H(d * d - v - u * w),
            k = H(d * (w - b) - p * v),
            S = H(r * c * _);
          return new JacobianPoint(b, k, S);
        }
        subtract(t) {
          return this.add(t.negate());
        }
        multiplyUnsafe(t) {
          const e = JacobianPoint.ZERO;
          if ("bigint" === typeof t && t === o) return e;
          let n = K(t);
          if (n === s) return this;
          if (!w) {
            let t = e,
              r = this;
            while (n > o)
              (n & s && (t = t.add(r)), (r = r.double()), (n >>= s));
            return t;
          }
          let { k1neg: r, k1: i, k2neg: u, k2: c } = h.splitScalar(n),
            a = e,
            f = e,
            l = this;
          while (i > o || c > o)
            (i & s && (a = a.add(l)),
              c & s && (f = f.add(l)),
              (l = l.double()),
              (i >>= s),
              (c >>= s));
          return (
            r && (a = a.negate()),
            u && (f = f.negate()),
            (f = new JacobianPoint(H(f.x * h.beta), f.y, f.z)),
            a.add(f)
          );
        }
        precomputeWindow(t) {
          const e = w ? 128 / t + 1 : 256 / t + 1,
            n = [];
          let r = this,
            i = r;
          for (let o = 0; o < e; o++) {
            ((i = r), n.push(i));
            for (let e = 1; e < 2 ** (t - 1); e++) ((i = i.add(r)), n.push(i));
            r = i.double();
          }
          return n;
        }
        wNAF(t, e) {
          !e && this.equals(JacobianPoint.BASE) && (e = Point.BASE);
          const n = (e && e._WINDOW_SIZE) || 1;
          if (256 % n)
            throw new Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2",
            );
          let r = e && k.get(e);
          r ||
            ((r = this.precomputeWindow(n)),
            e && 1 !== n && ((r = JacobianPoint.normalizeZ(r)), k.set(e, r)));
          let i = JacobianPoint.ZERO,
            o = JacobianPoint.BASE;
          const u = 1 + (w ? 128 / n : 256 / n),
            c = 2 ** (n - 1),
            a = BigInt(2 ** n - 1),
            f = 2 ** n,
            l = BigInt(n);
          for (let h = 0; h < u; h++) {
            const e = h * c;
            let n = Number(t & a);
            ((t >>= l), n > c && ((n -= f), (t += s)));
            const u = e,
              p = e + Math.abs(n) - 1,
              y = h % 2 !== 0,
              _ = n < 0;
            0 === n ? (o = o.add(b(y, r[u]))) : (i = i.add(b(_, r[p])));
          }
          return { p: i, f: o };
        }
        multiply(t, e) {
          let n,
            r,
            i = K(t);
          if (w) {
            const { k1neg: t, k1: o, k2neg: s, k2: u } = h.splitScalar(i);
            let { p: c, f: a } = this.wNAF(o, e),
              { p: f, f: l } = this.wNAF(u, e);
            ((c = b(t, c)),
              (f = b(s, f)),
              (f = new JacobianPoint(H(f.x * h.beta), f.y, f.z)),
              (n = c.add(f)),
              (r = a.add(l)));
          } else {
            const { p: t, f: o } = this.wNAF(i, e);
            ((n = t), (r = o));
          }
          return JacobianPoint.normalizeZ([n, r])[0];
        }
        toAffine(t) {
          const { x: e, y: n, z: r } = this,
            i = this.equals(JacobianPoint.ZERO);
          null == t && (t = i ? a : L(r));
          const o = t,
            u = H(o * o),
            c = H(u * o),
            f = H(e * u),
            l = H(n * c),
            h = H(r * o);
          if (i) return Point.ZERO;
          if (h !== s) throw new Error("invZ was invalid");
          return new Point(f, l);
        }
      }
      function b(t, e) {
        const n = e.negate();
        return t ? n : e;
      }
      ((JacobianPoint.BASE = new JacobianPoint(f.Gx, f.Gy, s)),
        (JacobianPoint.ZERO = new JacobianPoint(o, s, o)));
      const k = new WeakMap();
      class Point {
        constructor(t, e) {
          ((this.x = t), (this.y = e));
        }
        _setWindowSize(t) {
          ((this._WINDOW_SIZE = t), k.delete(this));
        }
        hasEvenY() {
          return this.y % u === o;
        }
        static fromCompressedHex(t) {
          const e = 32 === t.length,
            n = M(e ? t : t.subarray(1));
          if (!Y(n)) throw new Error("Point is not on curve");
          const r = v(n);
          let i = q(r);
          const o = (i & s) === s;
          if (e) o && (i = H(-i));
          else {
            const e = 1 === (1 & t[0]);
            e !== o && (i = H(-i));
          }
          const u = new Point(n, i);
          return (u.assertValidity(), u);
        }
        static fromUncompressedHex(t) {
          const e = M(t.subarray(1, p + 1)),
            n = M(t.subarray(p + 1, 2 * p + 1)),
            r = new Point(e, n);
          return (r.assertValidity(), r);
        }
        static fromHex(t) {
          const e = R(t),
            n = e.length,
            r = e[0];
          if (n === p) return this.fromCompressedHex(e);
          if (n === d && (2 === r || 3 === r)) return this.fromCompressedHex(e);
          if (n === g && 4 === r) return this.fromUncompressedHex(e);
          throw new Error(
            `Point.fromHex: received invalid point. Expected 32-${d} compressed bytes or ${g} uncompressed bytes, not ${n}`,
          );
        }
        static fromPrivateKey(t) {
          return Point.BASE.multiply(tt(t));
        }
        static fromSignature(t, e, n) {
          const { r: r, s: i } = nt(e);
          if (![0, 1, 2, 3].includes(n))
            throw new Error("Cannot recover: invalid recovery bit");
          const o = V(R(t)),
            { n: s } = f,
            u = 2 === n || 3 === n ? r + s : r,
            c = L(u, s),
            a = H(-o * c, s),
            l = H(i * c, s),
            h = 1 & n ? "03" : "02",
            p = Point.fromHex(h + N(u)),
            y = Point.BASE.multiplyAndAddUnsafe(p, a, l);
          if (!y)
            throw new Error("Cannot recover signature: point at infinify");
          return (y.assertValidity(), y);
        }
        toRawBytes(t) {
          return (void 0 === t && (t = !1), T(this.toHex(t)));
        }
        toHex(t) {
          void 0 === t && (t = !1);
          const e = N(this.x);
          if (t) {
            const t = this.hasEvenY() ? "02" : "03";
            return `${t}${e}`;
          }
          return `04${e}${N(this.y)}`;
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          const t = "Point is not on elliptic curve",
            { x: e, y: n } = this;
          if (!Y(e) || !Y(n)) throw new Error(t);
          const r = H(n * n),
            i = v(e);
          if (H(r - i) !== o) throw new Error(t);
        }
        equals(t) {
          return this.x === t.x && this.y === t.y;
        }
        negate() {
          return new Point(this.x, H(-this.y));
        }
        double() {
          return JacobianPoint.fromAffine(this).double().toAffine();
        }
        add(t) {
          return JacobianPoint.fromAffine(this)
            .add(JacobianPoint.fromAffine(t))
            .toAffine();
        }
        subtract(t) {
          return this.add(t.negate());
        }
        multiply(t) {
          return JacobianPoint.fromAffine(this).multiply(t, this).toAffine();
        }
        multiplyAndAddUnsafe(t, e, n) {
          const r = JacobianPoint.fromAffine(this),
            i =
              e === o || e === s || this !== Point.BASE
                ? r.multiplyUnsafe(e)
                : r.multiply(e),
            u = JacobianPoint.fromAffine(t).multiplyUnsafe(n),
            c = i.add(u);
          return c.equals(JacobianPoint.ZERO) ? void 0 : c.toAffine();
        }
      }
      function S(t) {
        return Number.parseInt(t[0], 16) >= 8 ? "00" + t : t;
      }
      function x(t) {
        if (t.length < 2 || 2 !== t[0])
          throw new Error("Invalid signature integer tag: " + z(t));
        const e = t[1],
          n = t.subarray(2, e + 2);
        if (!e || n.length !== e)
          throw new Error("Invalid signature integer: wrong length");
        if (0 === n[0] && n[1] <= 127)
          throw new Error("Invalid signature integer: trailing length");
        return { data: M(n), left: t.subarray(e + 2) };
      }
      function B(t) {
        if (t.length < 2 || 48 != t[0])
          throw new Error("Invalid signature tag: " + z(t));
        if (t[1] !== t.length - 2)
          throw new Error("Invalid signature: incorrect length");
        const { data: e, left: n } = x(t.subarray(2)),
          { data: r, left: i } = x(n);
        if (i.length)
          throw new Error(
            "Invalid signature: left bytes after parsing: " + z(i),
          );
        return { r: e, s: r };
      }
      ((e.Point = Point),
        (Point.BASE = new Point(f.Gx, f.Gy)),
        (Point.ZERO = new Point(o, o)));
      class Signature {
        constructor(t, e) {
          ((this.r = t), (this.s = e), this.assertValidity());
        }
        static fromCompact(t) {
          const e = P(t),
            n = "Signature.fromCompact";
          if ("string" !== typeof t && !e)
            throw new TypeError(n + ": Expected string or Uint8Array");
          const r = e ? z(t) : t;
          if (128 !== r.length) throw new Error(n + ": Expected 64-byte hex");
          return new Signature(U(r.slice(0, 64)), U(r.slice(64, 128)));
        }
        static fromDER(t) {
          const e = P(t);
          if ("string" !== typeof t && !e)
            throw new TypeError(
              "Signature.fromDER: Expected string or Uint8Array",
            );
          const { r: n, s: r } = B(e ? t : T(t));
          return new Signature(n, r);
        }
        static fromHex(t) {
          return this.fromDER(t);
        }
        assertValidity() {
          const { r: t, s: e } = this;
          if (!Z(t)) throw new Error("Invalid Signature: r must be 0 < r < n");
          if (!Z(e)) throw new Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          const t = f.n >> s;
          return this.s > t;
        }
        normalizeS() {
          return this.hasHighS()
            ? new Signature(this.r, H(-this.s, f.n))
            : this;
        }
        toDERRawBytes() {
          return T(this.toDERHex());
        }
        toDERHex() {
          const t = S(C(this.s)),
            e = S(C(this.r)),
            n = t.length / 2,
            r = e.length / 2,
            i = C(n),
            o = C(r),
            s = C(r + n + 4);
          return `30${s}02${o}${e}02${i}${t}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return T(this.toCompactHex());
        }
        toCompactHex() {
          return N(this.r) + N(this.s);
        }
      }
      function P(t) {
        return (
          t instanceof Uint8Array ||
          (ArrayBuffer.isView(t) && "Uint8Array" === t.constructor.name)
        );
      }
      function E(t) {
        if (!P(t)) throw new Error("Uint8Array expected");
      }
      function A() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        if ((e.every(E), 1 === e.length)) return e[0];
        const r = e.reduce((t, e) => t + e.length, 0),
          i = new Uint8Array(r);
        for (let o = 0, s = 0; o < e.length; o++) {
          const t = e[o];
          (i.set(t, s), (s += t.length));
        }
        return i;
      }
      e.Signature = Signature;
      const D = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0"),
      );
      function z(t) {
        E(t);
        let e = "";
        for (let n = 0; n < t.length; n++) e += D[t[n]];
        return e;
      }
      const F = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function O(t) {
        return t >= F._0 && t <= F._9
          ? t - F._0
          : t >= F.A && t <= F.F
            ? t - (F.A - 10)
            : t >= F.a && t <= F.f
              ? t - (F.a - 10)
              : void 0;
      }
      function T(t) {
        if ("string" !== typeof t)
          throw new Error("hex string expected, got " + typeof t);
        const e = t.length,
          n = e / 2;
        if (e % 2)
          throw new Error(
            "hex string expected, got unpadded hex of length " + e,
          );
        const r = new Uint8Array(n);
        for (let i = 0, o = 0; i < n; i++, o += 2) {
          const e = O(t.charCodeAt(o)),
            n = O(t.charCodeAt(o + 1));
          if (void 0 === e || void 0 === n) {
            const e = t[o] + t[o + 1];
            throw new Error(
              'hex string expected, got non-hex character "' +
                e +
                '" at index ' +
                o,
            );
          }
          r[i] = 16 * e + n;
        }
        return r;
      }
      const I = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000",
      );
      function N(t) {
        if ("bigint" !== typeof t) throw new Error("Expected bigint");
        if (!(o <= t && t < I))
          throw new Error("Expected number 0 <= n < 2^256");
        return t.toString(16).padStart(64, "0");
      }
      function j(t) {
        const e = T(N(t));
        if (32 !== e.length) throw new Error("Error: expected 32 bytes");
        return e;
      }
      function C(t) {
        const e = t.toString(16);
        return 1 & e.length ? "0" + e : e;
      }
      function U(t) {
        if ("string" !== typeof t)
          throw new TypeError("hexToNumber: expected string, got " + typeof t);
        return BigInt("0x" + t);
      }
      function M(t) {
        return U(z(t));
      }
      function R(t) {
        return P(t) ? Uint8Array.from(t) : T(t);
      }
      function K(t) {
        if ("number" === typeof t && Number.isSafeInteger(t) && t > 0)
          return BigInt(t);
        if ("bigint" === typeof t && Z(t)) return t;
        throw new TypeError(
          "Expected valid private scalar: 0 < scalar < curve.n",
        );
      }
      function H(t, e) {
        void 0 === e && (e = f.P);
        const n = t % e;
        return n >= o ? n : e + n;
      }
      function $(t, e) {
        const { P: n } = f;
        let r = t;
        while (e-- > o) ((r *= r), (r %= n));
        return r;
      }
      function q(t) {
        const { P: e } = f,
          n = BigInt(6),
          r = BigInt(11),
          i = BigInt(22),
          o = BigInt(23),
          s = BigInt(44),
          a = BigInt(88),
          l = (t * t * t) % e,
          h = (l * l * t) % e,
          p = ($(h, c) * h) % e,
          y = ($(p, c) * h) % e,
          _ = ($(y, u) * l) % e,
          d = ($(_, r) * _) % e,
          g = ($(d, i) * d) % e,
          v = ($(g, s) * g) % e,
          w = ($(v, a) * v) % e,
          m = ($(w, s) * g) % e,
          b = ($(m, c) * h) % e,
          k = ($(b, o) * d) % e,
          S = ($(k, n) * l) % e,
          x = $(S, u),
          B = (x * x) % e;
        if (B !== t) throw new Error("Cannot find square root");
        return x;
      }
      function L(t, e) {
        if ((void 0 === e && (e = f.P), t === o || e <= o))
          throw new Error(
            `invert: expected positive integers, got n=${t} mod=${e}`,
          );
        let n = H(t, e),
          r = e,
          i = o,
          u = s,
          c = s,
          a = o;
        while (n !== o) {
          const t = r / n,
            e = r % n,
            o = i - c * t,
            s = u - a * t;
          ((r = n), (n = e), (i = c), (u = a), (c = o), (a = s));
        }
        const l = r;
        if (l !== s) throw new Error("invert: does not exist");
        return H(i, e);
      }
      function X(t, e) {
        void 0 === e && (e = f.P);
        const n = new Array(t.length),
          r = t.reduce(
            (t, r, i) => (r === o ? t : ((n[i] = t), H(t * r, e))),
            s,
          ),
          i = L(r, e);
        return (
          t.reduceRight(
            (t, r, i) => (r === o ? t : ((n[i] = H(t * n[i], e)), H(t * r, e))),
            i,
          ),
          n
        );
      }
      function W(t) {
        const e = 8 * t.length - 8 * y,
          n = M(t);
        return e > 0 ? n >> BigInt(e) : n;
      }
      function V(t, e) {
        void 0 === e && (e = !1);
        const n = W(t);
        if (e) return n;
        const { n: r } = f;
        return n >= r ? n - r : n;
      }
      let J, G;
      class HmacDrbg {
        constructor(t, e) {
          if (
            ((this.hashLen = t),
            (this.qByteLen = e),
            "number" !== typeof t || t < 2)
          )
            throw new Error("hashLen must be a number");
          if ("number" !== typeof e || e < 2)
            throw new Error("qByteLen must be a number");
          ((this.v = new Uint8Array(t).fill(1)),
            (this.k = new Uint8Array(t).fill(0)),
            (this.counter = 0));
        }
        hmac() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return Et.hmacSha256(this.k, ...e);
        }
        hmacSync() {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return G(this.k, ...e);
        }
        checkSync() {
          if ("function" !== typeof G)
            throw new ShaError("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw new Error(
              "Tried 1,000 k values for sign(), all were invalid",
            );
          this.counter += 1;
        }
        async reseed(t) {
          (void 0 === t && (t = new Uint8Array()),
            (this.k = await this.hmac(this.v, Uint8Array.from([0]), t)),
            (this.v = await this.hmac(this.v)),
            0 !== t.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), t)),
              (this.v = await this.hmac(this.v))));
        }
        reseedSync(t) {
          (void 0 === t && (t = new Uint8Array()),
            this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), t)),
            (this.v = this.hmacSync(this.v)),
            0 !== t.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), t)),
              (this.v = this.hmacSync(this.v))));
        }
        async generate() {
          this.incr();
          let t = 0;
          const e = [];
          while (t < this.qByteLen) {
            this.v = await this.hmac(this.v);
            const n = this.v.slice();
            (e.push(n), (t += this.v.length));
          }
          return A(...e);
        }
        generateSync() {
          (this.checkSync(), this.incr());
          let t = 0;
          const e = [];
          while (t < this.qByteLen) {
            this.v = this.hmacSync(this.v);
            const n = this.v.slice();
            (e.push(n), (t += this.v.length));
          }
          return A(...e);
        }
      }
      function Z(t) {
        return o < t && t < f.n;
      }
      function Y(t) {
        return o < t && t < f.P;
      }
      function Q(t, e, n, r) {
        void 0 === r && (r = !0);
        const { n: i } = f,
          u = V(t, !0);
        if (!Z(u)) return;
        const c = L(u, i),
          a = Point.BASE.multiply(u),
          l = H(a.x, i);
        if (l === o) return;
        const h = H(c * H(e + n * l, i), i);
        if (h === o) return;
        let p = new Signature(l, h),
          y = (a.x === p.r ? 0 : 2) | Number(a.y & s);
        return (
          r && p.hasHighS() && ((p = p.normalizeS()), (y ^= 1)),
          { sig: p, recovery: y }
        );
      }
      function tt(t) {
        let e;
        if ("bigint" === typeof t) e = t;
        else if ("number" === typeof t && Number.isSafeInteger(t) && t > 0)
          e = BigInt(t);
        else if ("string" === typeof t) {
          if (t.length !== 2 * y)
            throw new Error("Expected 32 bytes of private key");
          e = U(t);
        } else {
          if (!P(t)) throw new TypeError("Expected valid private key");
          if (t.length !== y)
            throw new Error("Expected 32 bytes of private key");
          e = M(t);
        }
        if (!Z(e)) throw new Error("Expected private key: 0 < key < n");
        return e;
      }
      function et(t) {
        return t instanceof Point ? (t.assertValidity(), t) : Point.fromHex(t);
      }
      function nt(t) {
        if (t instanceof Signature) return (t.assertValidity(), t);
        try {
          return Signature.fromDER(t);
        } catch (e) {
          return Signature.fromCompact(t);
        }
      }
      function rt(t, e) {
        return (
          void 0 === e && (e = !1),
          Point.fromPrivateKey(t).toRawBytes(e)
        );
      }
      function it(t, e, n, r) {
        return (
          void 0 === r && (r = !1),
          Point.fromSignature(t, e, n).toRawBytes(r)
        );
      }
      function ot(t) {
        const e = P(t),
          n = "string" === typeof t,
          r = (e || n) && t.length;
        return e
          ? r === d || r === g
          : n
            ? r === 2 * d || r === 2 * g
            : t instanceof Point;
      }
      function st(t, e, n) {
        if ((void 0 === n && (n = !1), ot(t)))
          throw new TypeError("getSharedSecret: first arg must be private key");
        if (!ot(e))
          throw new TypeError("getSharedSecret: second arg must be public key");
        const r = et(e);
        return (r.assertValidity(), r.multiply(tt(t)).toRawBytes(n));
      }
      function ut(t) {
        const e = t.length > p ? t.slice(0, p) : t;
        return M(e);
      }
      function ct(t) {
        const e = ut(t),
          n = H(e, f.n);
        return at(n < o ? e : n);
      }
      function at(t) {
        return j(t);
      }
      function ft(t, e, n) {
        if (null == t)
          throw new Error(`sign: expected valid message hash, not "${t}"`);
        const r = R(t),
          i = tt(e),
          o = [at(i), ct(r)];
        if (null != n) {
          !0 === n && (n = Et.randomBytes(p));
          const t = R(n);
          if (t.length !== p)
            throw new Error(`sign: Expected ${p} bytes of extra data`);
          o.push(t);
        }
        const s = A(...o),
          u = ut(r);
        return { seed: s, m: u, d: i };
      }
      function lt(t, e) {
        const { sig: n, recovery: r } = t,
          { der: i, recovered: o } = Object.assign(
            { canonical: !0, der: !0 },
            e,
          ),
          s = i ? n.toDERRawBytes() : n.toCompactRawBytes();
        return o ? [s, r] : s;
      }
      async function ht(t, e, n) {
        void 0 === n && (n = {});
        const { seed: r, m: i, d: o } = ft(t, e, n.extraEntropy),
          s = new HmacDrbg(_, y);
        let u;
        await s.reseed(r);
        while (!(u = Q(await s.generate(), i, o, n.canonical)))
          await s.reseed();
        return lt(u, n);
      }
      function pt(t, e, n) {
        void 0 === n && (n = {});
        const { seed: r, m: i, d: o } = ft(t, e, n.extraEntropy),
          s = new HmacDrbg(_, y);
        let u;
        s.reseedSync(r);
        while (!(u = Q(s.generateSync(), i, o, n.canonical))) s.reseedSync();
        return lt(u, n);
      }
      const yt = { strict: !0 };
      function _t(t, e, n, r) {
        let i;
        void 0 === r && (r = yt);
        try {
          ((i = nt(t)), (e = R(e)));
        } catch (d) {
          return !1;
        }
        const { r: o, s: s } = i;
        if (r.strict && i.hasHighS()) return !1;
        const u = V(e);
        let c;
        try {
          c = et(n);
        } catch (d) {
          return !1;
        }
        const { n: a } = f,
          l = L(s, a),
          h = H(u * l, a),
          p = H(o * l, a),
          y = Point.BASE.multiplyAndAddUnsafe(c, h, p);
        if (!y) return !1;
        const _ = H(y.x, a);
        return _ === o;
      }
      function dt(t) {
        return H(M(t), f.n);
      }
      class SchnorrSignature {
        constructor(t, e) {
          ((this.r = t), (this.s = e), this.assertValidity());
        }
        static fromHex(t) {
          const e = R(t);
          if (64 !== e.length)
            throw new TypeError(
              "SchnorrSignature.fromHex: expected 64 bytes, not " + e.length,
            );
          const n = M(e.subarray(0, 32)),
            r = M(e.subarray(32, 64));
          return new SchnorrSignature(n, r);
        }
        assertValidity() {
          const { r: t, s: e } = this;
          if (!Y(t) || !Z(e)) throw new Error("Invalid signature");
        }
        toHex() {
          return N(this.r) + N(this.s);
        }
        toRawBytes() {
          return T(this.toHex());
        }
      }
      function gt(t) {
        return Point.fromPrivateKey(t).toRawX();
      }
      class InternalSchnorrSignature {
        constructor(t, e, n) {
          if ((void 0 === n && (n = Et.randomBytes()), null == t))
            throw new TypeError(`sign: Expected valid message, not "${t}"`);
          this.m = R(t);
          const { x: r, scalar: i } = this.getScalar(tt(e));
          if (
            ((this.px = r),
            (this.d = i),
            (this.rand = R(n)),
            32 !== this.rand.length)
          )
            throw new TypeError("sign: Expected 32 bytes of aux randomness");
        }
        getScalar(t) {
          const e = Point.fromPrivateKey(t),
            n = e.hasEvenY() ? t : f.n - t;
          return { point: e, scalar: n, x: e.toRawX() };
        }
        initNonce(t, e) {
          return j(t ^ M(e));
        }
        finalizeNonce(t) {
          const e = H(M(t), f.n);
          if (e === o)
            throw new Error("sign: Creation of signature failed. k is zero");
          const { point: n, x: r, scalar: i } = this.getScalar(e);
          return { R: n, rx: r, k: i };
        }
        finalizeSig(t, e, n, r) {
          return new SchnorrSignature(t.x, H(e + n * r, f.n)).toRawBytes();
        }
        error() {
          throw new Error("sign: Invalid signature produced");
        }
        async calc() {
          const { m: t, d: e, px: n, rand: r } = this,
            i = Et.taggedHash,
            o = this.initNonce(e, await i(Bt.aux, r)),
            {
              R: s,
              rx: u,
              k: c,
            } = this.finalizeNonce(await i(Bt.nonce, o, n, t)),
            a = dt(await i(Bt.challenge, u, n, t)),
            f = this.finalizeSig(s, c, a, e);
          return ((await kt(f, t, n)) || this.error(), f);
        }
        calcSync() {
          const { m: t, d: e, px: n, rand: r } = this,
            i = Et.taggedHashSync,
            o = this.initNonce(e, i(Bt.aux, r)),
            { R: s, rx: u, k: c } = this.finalizeNonce(i(Bt.nonce, o, n, t)),
            a = dt(i(Bt.challenge, u, n, t)),
            f = this.finalizeSig(s, c, a, e);
          return (St(f, t, n) || this.error(), f);
        }
      }
      async function vt(t, e, n) {
        return new InternalSchnorrSignature(t, e, n).calc();
      }
      function wt(t, e, n) {
        return new InternalSchnorrSignature(t, e, n).calcSync();
      }
      function mt(t, e, n) {
        const r = t instanceof SchnorrSignature,
          i = r ? t : SchnorrSignature.fromHex(t);
        return (r && i.assertValidity(), { ...i, m: R(e), P: et(n) });
      }
      function bt(t, e, n, r) {
        const i = Point.BASE.multiplyAndAddUnsafe(e, tt(n), H(-r, f.n));
        return !(!i || !i.hasEvenY() || i.x !== t);
      }
      async function kt(t, e, n) {
        try {
          const { r: r, s: i, m: o, P: s } = mt(t, e, n),
            u = dt(await Et.taggedHash(Bt.challenge, j(r), s.toRawX(), o));
          return bt(r, s, i, u);
        } catch (r) {
          return !1;
        }
      }
      function St(t, e, n) {
        try {
          const { r: r, s: i, m: o, P: s } = mt(t, e, n),
            u = dt(Et.taggedHashSync(Bt.challenge, j(r), s.toRawX(), o));
          return bt(r, s, i, u);
        } catch (r) {
          if (r instanceof ShaError) throw r;
          return !1;
        }
      }
      e.schnorr = {
        Signature: SchnorrSignature,
        getPublicKey: gt,
        sign: vt,
        verify: kt,
        signSync: wt,
        verifySync: St,
      };
      Point.BASE._setWindowSize(8);
      const xt = {
          node: r,
          web:
            "object" === typeof self && "crypto" in self ? self.crypto : void 0,
        },
        Bt = {
          challenge: "BIP0340/challenge",
          aux: "BIP0340/aux",
          nonce: "BIP0340/nonce",
        },
        Pt = {},
        Et = (e.utils = {
          bytesToHex: z,
          hexToBytes: T,
          concatBytes: A,
          mod: H,
          invert: L,
          isValidPrivateKey(t) {
            try {
              return (tt(t), !0);
            } catch (e) {
              return !1;
            }
          },
          _bigintTo32Bytes: j,
          _normalizePrivateKey: tt,
          hashToPrivateKey: (t) => {
            t = R(t);
            const e = y + 8;
            if (t.length < e || t.length > 1024)
              throw new Error(
                "Expected valid bytes of private key as per FIPS 186",
              );
            const n = H(M(t), f.n - s) + s;
            return j(n);
          },
          randomBytes: function (t) {
            if ((void 0 === t && (t = 32), xt.web))
              return xt.web.getRandomValues(new Uint8Array(t));
            if (xt.node) {
              const { randomBytes: e } = xt.node;
              return Uint8Array.from(e(t));
            }
            throw new Error(
              "The environment doesn't have randomBytes function",
            );
          },
          randomPrivateKey: () => Et.hashToPrivateKey(Et.randomBytes(y + 8)),
          precompute(t, e) {
            (void 0 === t && (t = 8), void 0 === e && (e = Point.BASE));
            const n = e === Point.BASE ? e : new Point(e.x, e.y);
            return (n._setWindowSize(t), n.multiply(c), n);
          },
          sha256: async function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            if (xt.web) {
              const t = await xt.web.subtle.digest("SHA-256", A(...e));
              return new Uint8Array(t);
            }
            if (xt.node) {
              const { createHash: t } = xt.node,
                n = t("sha256");
              return (
                e.forEach((t) => n.update(t)),
                Uint8Array.from(n.digest())
              );
            }
            throw new Error("The environment doesn't have sha256 function");
          },
          hmacSha256: async function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            if (xt.web) {
              const e = await xt.web.subtle.importKey(
                  "raw",
                  t,
                  { name: "HMAC", hash: { name: "SHA-256" } },
                  !1,
                  ["sign"],
                ),
                r = A(...n),
                i = await xt.web.subtle.sign("HMAC", e, r);
              return new Uint8Array(i);
            }
            if (xt.node) {
              const { createHmac: e } = xt.node,
                r = e("sha256", t);
              return (
                n.forEach((t) => r.update(t)),
                Uint8Array.from(r.digest())
              );
            }
            throw new Error(
              "The environment doesn't have hmac-sha256 function",
            );
          },
          sha256Sync: void 0,
          hmacSha256Sync: void 0,
          taggedHash: async function (t) {
            let e = Pt[t];
            if (void 0 === e) {
              const n = await Et.sha256(
                Uint8Array.from(t, (t) => t.charCodeAt(0)),
              );
              ((e = A(n, n)), (Pt[t] = e));
            }
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return Et.sha256(e, ...r);
          },
          taggedHashSync: function (t) {
            if ("function" !== typeof J)
              throw new ShaError("sha256Sync is undefined, you need to set it");
            let e = Pt[t];
            if (void 0 === e) {
              const n = J(Uint8Array.from(t, (t) => t.charCodeAt(0)));
              ((e = A(n, n)), (Pt[t] = e));
            }
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            return J(e, ...r);
          },
          _JacobianPoint: JacobianPoint,
        });
      Object.defineProperties(Et, {
        sha256Sync: {
          configurable: !1,
          get() {
            return J;
          },
          set(t) {
            J || (J = t);
          },
        },
        hmacSha256Sync: {
          configurable: !1,
          get() {
            return G;
          },
          set(t) {
            G || (G = t);
          },
        },
      });
    },
    11506: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.joseToDer = e.derToJose = void 0));
      const r = n(812),
        i = n(4885);
      function o(t) {
        return ((t / 8) | 0) + (t % 8 === 0 ? 0 : 1);
      }
      const s = { ES256: o(256), ES384: o(384), ES512: o(521) };
      function u(t) {
        const e = s[t];
        if (e) return e;
        throw new Error(`Unknown algorithm "${t}"`);
      }
      const c = 128,
        a = 0,
        f = 32,
        l = 16,
        h = 2,
        p = l | f | (a << 6),
        y = h | (a << 6);
      function _(t) {
        if (t instanceof Uint8Array) return t;
        if ("string" === typeof t) return (0, r.toByteArray)((0, i.pad)(t));
        throw new TypeError(
          "ECDSA signature must be a Base64 string or a Uint8Array",
        );
      }
      function d(t, e) {
        const n = _(t),
          o = u(e),
          s = o + 1,
          a = n.length;
        let f = 0;
        if (n[f++] !== p) throw new Error('Could not find expected "seq"');
        let l = n[f++];
        if ((l === (1 | c) && (l = n[f++]), a - f < l))
          throw new Error(
            `"seq" specified length of "${l}", only "${a - f}" remaining`,
          );
        if (n[f++] !== y)
          throw new Error('Could not find expected "int" for "r"');
        const h = n[f++];
        if (a - f - 2 < h)
          throw new Error(
            `"r" specified length of "${h}", only "${a - f - 2}" available`,
          );
        if (s < h)
          throw new Error(
            `"r" specified length of "${h}", max of "${s}" is acceptable`,
          );
        const d = f;
        if (((f += h), n[f++] !== y))
          throw new Error('Could not find expected "int" for "s"');
        const g = n[f++];
        if (a - f !== g)
          throw new Error(
            `"s" specified length of "${g}", expected "${a - f}"`,
          );
        if (s < g)
          throw new Error(
            `"s" specified length of "${g}", max of "${s}" is acceptable`,
          );
        const v = f;
        if (((f += g), f !== a))
          throw new Error(
            `Expected to consume entire array, but "${a - f}" bytes remain`,
          );
        const w = o - h,
          m = o - g,
          b = new Uint8Array(w + h + m + g);
        for (f = 0; f < w; ++f) b[f] = 0;
        (b.set(n.subarray(d + Math.max(-w, 0), d + h), f), (f = o));
        for (const r = f; f < r + m; ++f) b[f] = 0;
        return (
          b.set(n.subarray(v + Math.max(-m, 0), v + g), f),
          (0, i.escape)((0, r.fromByteArray)(b))
        );
      }
      function g(t, e, n) {
        let r = 0;
        while (e + r < n && 0 === t[e + r]) ++r;
        const i = t[e + r] >= c;
        return (i && --r, r);
      }
      function v(t, e) {
        t = _(t);
        const n = u(e),
          r = t.length;
        if (r !== 2 * n)
          throw new TypeError(
            `"${e}" signatures must be "${2 * n}" bytes, saw "${r}"`,
          );
        const i = g(t, 0, n),
          o = g(t, n, t.length),
          s = n - i,
          a = n - o,
          f = 2 + s + 1 + 1 + a,
          l = f < c,
          h = new Uint8Array((l ? 2 : 3) + f);
        let d = 0;
        return (
          (h[d++] = p),
          l ? (h[d++] = f) : ((h[d++] = 1 | c), (h[d++] = 255 & f)),
          (h[d++] = y),
          (h[d++] = s),
          i < 0
            ? ((h[d++] = 0), h.set(t.subarray(0, n), d), (d += n))
            : (h.set(t.subarray(i, n), d), (d += n - i)),
          (h[d++] = y),
          (h[d++] = a),
          o < 0
            ? ((h[d++] = 0), h.set(t.subarray(n), d))
            : h.set(t.subarray(n + o), d),
          h
        );
      }
      ((e.derToJose = d), (e.joseToDer = v));
    },
    11508: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TokenVerifier = void 0));
      const r = n(4885),
        i = n(5737),
        o = n(4886),
        s = n(6946);
      class TokenVerifier {
        constructor(t, e) {
          if (!t || !e)
            throw new o.MissingParametersError(
              "a signing algorithm and public key are required",
            );
          if ("string" !== typeof t)
            throw "signing algorithm parameter must be a string";
          if (((t = t.toUpperCase()), !i.cryptoClients.hasOwnProperty(t)))
            throw "invalid signing algorithm";
          ((this.tokenType = "JWT"),
            (this.cryptoClient = i.cryptoClients[t]),
            (this.rawPublicKey = e));
        }
        verify(t) {
          return "string" === typeof t
            ? this.verifyCompact(t, !1)
            : "object" === typeof t && this.verifyExpanded(t, !1);
        }
        verifyAsync(t) {
          return "string" === typeof t
            ? this.verifyCompact(t, !0)
            : "object" === typeof t
              ? this.verifyExpanded(t, !0)
              : Promise.resolve(!1);
        }
        verifyCompact(t, e) {
          const n = t.split("."),
            r = n[0] + "." + n[1],
            i = (t) => {
              const e = this.cryptoClient.loadSignature(n[2]);
              return this.cryptoClient.verifyHash(t, e, this.rawPublicKey);
            };
          if (e) return (0, s.hashSha256Async)(r).then((t) => i(t));
          {
            const t = (0, s.hashSha256)(r);
            return i(t);
          }
        }
        verifyExpanded(t, e) {
          const n = [t["header"].join("."), r.encode(t["payload"])].join(".");
          let i = !0;
          const o = (e) => (
            t["signature"].map((t) => {
              const n = this.cryptoClient.loadSignature(t),
                r = this.cryptoClient.verifyHash(e, n, this.rawPublicKey);
              r || (i = !1);
            }),
            i
          );
          if (e) return (0, s.hashSha256Async)(n).then((t) => o(t));
          {
            const t = (0, s.hashSha256)(n);
            return o(t);
          }
        }
      }
      e.TokenVerifier = TokenVerifier;
    },
    11509: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decodeToken = void 0));
      const r = n(4885);
      function i(t) {
        if ("string" === typeof t) {
          const e = t.split("."),
            n = JSON.parse(r.decode(e[0])),
            i = JSON.parse(r.decode(e[1])),
            o = e[2];
          return { header: n, payload: i, signature: o };
        }
        if ("object" === typeof t) {
          if ("string" !== typeof t.payload)
            throw new Error(
              "Expected token payload to be a base64 or json string",
            );
          let e = t.payload;
          "{" !== t.payload[0] && (e = r.decode(e));
          const n = [];
          return (
            t.header.map((t) => {
              const e = JSON.parse(r.decode(t));
              n.push(e);
            }),
            { header: n, payload: JSON.parse(e), signature: t.signature }
          );
        }
      }
      e.decodeToken = i;
    },
    11510: function (t, e, n) {
      "use strict";
      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function i(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return r(t, void 0);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? r(t, void 0)
                      : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var i = 0;
            return function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        return (n = t[Symbol.iterator]()).next.bind(n);
      }
      function o(t, e) {
        return (
          void 0 === e &&
            (e =
              "{$origin}\n{$ttl}\n\n; SOA Record\n{name} {ttl}    IN  SOA {mname}{rname}(\n{serial} ;serial\n{refresh} ;refresh\n{retry} ;retry\n{expire} ;expire\n{minimum} ;minimum ttl\n)\n\n; NS Records\n{ns}\n\n; MX Records\n{mx}\n\n; A Records\n{a}\n\n; AAAA Records\n{aaaa}\n\n; CNAME Records\n{cname}\n\n; PTR Records\n{ptr}\n\n; TXT Records\n{txt}\n\n; SRV Records\n{srv}\n\n; SPF Records\n{spf}\n\n; URI Records\n{uri}\n"),
          (e = (function (t, e) {
            var n = "";
            return (
              void 0 !== t && (n += "$ORIGIN " + t),
              e.replace("{$origin}", n)
            );
          })(t.$origin, e)),
          (e = (function (t, e) {
            var n = "";
            return (void 0 !== t && (n += "$TTL " + t), e.replace("{$ttl}", n));
          })(t.$ttl, e)),
          (e = (function (t, e) {
            var n = e;
            if (void 0 !== t)
              for (var r in ((t.name = t.name || "@"),
              (t.ttl = t.ttl || ""),
              t))
                n = n.replace("{" + r + "}", t[r] + "\t");
            return n;
          })(t.soa, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tNS\t" + s.host + "\n"));
              }
            return e.replace("{ns}", n);
          })(t.ns, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tA\t" + s.ip + "\n"));
              }
            return e.replace("{a}", n);
          })(t.a, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tAAAA\t" + s.ip + "\n"));
              }
            return e.replace("{aaaa}", n);
          })(t.aaaa, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tCNAME\t" + s.alias + "\n"));
              }
            return e.replace("{cname}", n);
          })(t.cname, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tMX\t" + s.preference + "\t" + s.host + "\n"));
              }
            return e.replace("{mx}", n);
          })(t.mx, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tPTR\t" + s.host + "\n"));
              }
            return e.replace("{ptr}", n);
          })(t.ptr, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tTXT\t"));
                var u = s.txt;
                ("string" == typeof u
                  ? (n += '"' + u + '"')
                  : u instanceof Array &&
                    (n += u
                      .map(function (t) {
                        return '"' + t + '"';
                      })
                      .join(" ")),
                  (n += "\n"));
              }
            return e.replace("{txt}", n);
          })(t.txt, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tSRV\t" + s.priority + "\t"),
                  (n += s.weight + "\t"),
                  (n += s.port + "\t"),
                  (n += s.target + "\n"));
              }
            return e.replace("{srv}", n);
          })(t.srv, e)),
          (e = (function (t, e) {
            var n = "";
            if (t)
              for (var r, o = i(t); !(r = o()).done; ) {
                var s = r.value;
                ((n += (s.name || "@") + "\t"),
                  s.ttl && (n += s.ttl + "\t"),
                  (n += "IN\tSPF\t" + s.data + "\n"));
              }
            return e.replace("{spf}", n);
          })(t.spf, e)),
          (e = (function (t, e) {
            e = (e = e.replace(
              "{zone}",
              t.$origin || (!!t.soa && t.soa.name) || "",
            )).replace("{datetime}", new Date().toISOString());
            var n = Math.round(Date.now() / 1e3);
            return e.replace("{time}", "" + n);
          })(
            t,
            (e = (function (t, e) {
              var n = "";
              if (t)
                for (var r, o = i(t); !(r = o()).done; ) {
                  var s = r.value;
                  ((n += (s.name || "@") + "\t"),
                    s.ttl && (n += s.ttl + "\t"),
                    (n += "IN\tURI\t" + s.priority + "\t"),
                    (n += s.weight + "\t"),
                    (n += '"' + s.target + '"\n'));
                }
              return e.replace("{uri}", n);
            })(t.uri, e)),
          )).replace(/\n{2,}/gim, "\n\n")
        );
      }
      function s(t) {
        return (function (t) {
          for (var e, n = {}, r = i(t.split("\n")); !(e = r()).done; ) {
            var o = e.value;
            if (o && o.trim()) {
              var s = o.toUpperCase();
              /\s+TXT\s+/.test(s)
                ? ((n.txt = n.txt || []), n.txt.push(p(o)))
                : 0 === s.indexOf("$ORIGIN")
                  ? (n.$origin = o.split(/\s+/g)[1])
                  : 0 === s.indexOf("$TTL")
                    ? (n.$ttl = parseInt(o.split(/\s+/g)[1], 10))
                    : /\s+SOA\s+/.test(s)
                      ? (n.soa = u(o))
                      : /\s+NS\s+/.test(s)
                        ? ((n.ns = n.ns || []), n.ns.push(c(o)))
                        : /\s+A\s+/.test(s)
                          ? ((n.a = n.a || []), n.a.push(a(o, n.a)))
                          : /\s+AAAA\s+/.test(s)
                            ? ((n.aaaa = n.aaaa || []), n.aaaa.push(f(o)))
                            : /\s+CNAME\s+/.test(s)
                              ? ((n.cname = n.cname || []), n.cname.push(l(o)))
                              : /\s+MX\s+/.test(s)
                                ? ((n.mx = n.mx || []), n.mx.push(h(o)))
                                : /\s+PTR\s+/.test(s)
                                  ? ((n.ptr = n.ptr || []),
                                    n.ptr.push(y(o, n.ptr, n.$origin)))
                                  : /\s+SRV\s+/.test(s)
                                    ? ((n.srv = n.srv || []), n.srv.push(_(o)))
                                    : /\s+SPF\s+/.test(s)
                                      ? ((n.spf = n.spf || []),
                                        n.spf.push(d(o)))
                                      : /\s+URI\s+/.test(s) &&
                                        ((n.uri = n.uri || []),
                                        n.uri.push(g(o)));
            }
          }
          return n;
        })(
          (t = (function (t) {
            for (
              var e = [], n = /\([\s\S]*?\)/gim, r = n.exec(t);
              null !== r;
            ) {
              var i = r[0].replace(/\s+/gm, " ");
              (e.push({ match: r, replacement: i }), (r = n.exec(t)));
            }
            for (var o = t.split(""), s = 0, u = e; s < u.length; s++) {
              var c = u[s],
                a = c.match;
              o.splice(a.index, a[0].length, c.replacement);
            }
            return o.join("").replace(/\(|\)/gim, " ");
          })(
            (t = (function (t) {
              return t.replace(/(^|[^\\]);.*/g, function (t, e) {
                return e || "";
              });
            })(t)),
          )),
        );
      }
      function u(t) {
        var e = {},
          n = t.trim().split(/\s+/g),
          r = n.length;
        return (
          (e.name = n[0]),
          (e.minimum = parseInt(n[r - 1], 10)),
          (e.expire = parseInt(n[r - 2], 10)),
          (e.retry = parseInt(n[r - 3], 10)),
          (e.refresh = parseInt(n[r - 4], 10)),
          (e.serial = parseInt(n[r - 5], 10)),
          (e.rname = n[r - 6]),
          (e.mname = n[r - 7]),
          isNaN(n[1]) || (e.ttl = parseInt(n[1], 10)),
          e
        );
      }
      function c(t) {
        var e = t.trim().split(/\s+/g),
          n = { name: e[0], host: e[e.length - 1] };
        return (isNaN(e[1]) || (n.ttl = parseInt(e[1], 10)), n);
      }
      function a(t, e) {
        var n = t.trim().split(/\s+/g),
          r = t.trim().toUpperCase().split(/\s+/g),
          i = { name: n[0], ip: n[n.length - 1] };
        return (
          0 === r.lastIndexOf("A") &&
            (i.name = e.length ? e[e.length - 1].name : "@"),
          isNaN(n[1]) || (i.ttl = parseInt(n[1], 10)),
          i
        );
      }
      function f(t) {
        var e = t.trim().split(/\s+/g),
          n = { name: e[0], ip: e[e.length - 1] };
        return (isNaN(e[1]) || (n.ttl = parseInt(e[1], 10)), n);
      }
      function l(t) {
        var e = t.trim().split(/\s+/g),
          n = { name: e[0], alias: e[e.length - 1] };
        return (isNaN(e[1]) || (n.ttl = parseInt(e[1], 10)), n);
      }
      function h(t) {
        var e = t.trim().split(/\s+/g),
          n = e.length,
          r = {
            name: e[0],
            preference: parseInt(e[n - 2], 10),
            host: e[n - 1],
          };
        return (isNaN(e[1]) || (r.ttl = parseInt(e[1], 10)), r);
      }
      function p(t) {
        var e = t.trim().match(/[^\s"']+|"[^"]*"|'[^']*'/g);
        if (!e) throw new Error("Failure to tokenize TXT record");
        var n,
          r = e.length,
          i = e.indexOf("TXT");
        function o(t) {
          return (t.indexOf('"') > -1 && (t = t.split('"')[1]), t);
        }
        n = r - i - 1 > 1 ? [].concat(e.slice(i + 1).map(o)) : o(e[r - 1]);
        var s = { name: e[0], txt: n };
        return (isNaN(e[1]) || (s.ttl = parseInt(e[1], 10)), s);
      }
      function y(t, e, n) {
        var r = t.trim().split(/\s+/g);
        0 === t.trim().toUpperCase().split(/\s+/g).lastIndexOf("PTR") &&
          e[e.length - 1] &&
          r.unshift(e[e.length - 1].name);
        var i = { name: r[0], fullname: r[0] + "." + n, host: r[r.length - 1] };
        return (isNaN(r[1]) || (i.ttl = parseInt(r[1], 10)), i);
      }
      function _(t) {
        var e = t.trim().split(/\s+/g),
          n = e.length,
          r = {
            name: e[0],
            target: e[n - 1],
            priority: parseInt(e[n - 4], 10),
            weight: parseInt(e[n - 3], 10),
            port: parseInt(e[n - 2], 10),
          };
        return (isNaN(e[1]) || (r.ttl = parseInt(e[1], 10)), r);
      }
      function d(t) {
        for (
          var e = t.trim().split(/\s+/g),
            n = { name: e[0], data: "" },
            r = e.length;
          r-- > 4;
        )
          n.data = e[r] + " " + n.data.trim();
        return (isNaN(e[1]) || (n.ttl = parseInt(e[1], 10)), n);
      }
      function g(t) {
        var e = t.trim().split(/\s+/g),
          n = e.length,
          r = {
            name: e[0],
            target: e[n - 1].replace(/"/g, ""),
            priority: parseInt(e[n - 3], 10),
            weight: parseInt(e[n - 2], 10),
          };
        return (isNaN(e[1]) || (r.ttl = parseInt(e[1], 10)), r);
      }
      ((e.ZoneFile = (function () {
        function t(t) {
          this.jsonZoneFile =
            "object" == typeof t
              ? JSON.parse(JSON.stringify(t))
              : "string" == typeof t
                ? s(t)
                : void 0;
        }
        var e = t.prototype;
        return (
          (e.toJSON = function () {
            return this.jsonZoneFile;
          }),
          (e.toString = function () {
            return o(this.toJSON());
          }),
          t
        );
      })()),
        (e.makeZoneFile = o),
        (e.parseZoneFile = s));
    },
    11519: function (t, e, n) {
      t.exports = n(11520);
    },
    11520: function (t, e, n) {
      (function () {
        var e = {};
        if (((e.async = n(11521)), "object" !== typeof e.async))
          throw new Error(
            "Module async is required (https://github.com/caolan/async)",
          );
        var r = e.async;
        function i(t, e) {
          if (!e || "object" !== typeof e) return t;
          var n = Object.keys(e),
            r = n.length;
          while (r--) t[n[r]] = e[n[r]];
          return t;
        }
        function o() {
          var t = {},
            e = Array.prototype.slice.call(arguments),
            n = null,
            r = null;
          return (
            e.forEach(function (e) {
              if (e && e.constructor === Object) {
                ((n = Object.keys(e)), (r = n.length));
                while (r--) t[n[r]] = e[n[r]];
              }
            }),
            t
          );
        }
        function s() {
          ((this.custom = {}),
            (this.extend = function (t) {
              return i(this.custom, t);
            }),
            (this.reset = function () {
              this.custom = {};
            }),
            (this.remove = function (t) {
              (c.array(t) || (t = [t]),
                t.forEach(function (t) {
                  delete this.custom[t];
                }, this));
            }));
        }
        function u(t, e) {
          var n = ["@"];
          if (((this._schema = t), (this._custom = {}), null != e))
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                (this._custom["$" + r] = e[r]);
          ((this._getDepth = function () {
            return n.length;
          }),
            (this._dumpStack = function () {
              return n
                .map(function (t) {
                  return t.replace(/^\[/g, "");
                })
                .join(".")
                .replace(/\.\u001b\u001c\u001d\u001e/g, "[");
            }),
            (this._deeperObject = function (t) {
              return (
                n.push(/^[a-z$_][a-z0-9$_]*$/i.test(t) ? t : '["' + t + '"]'),
                this
              );
            }),
            (this._deeperArray = function (t) {
              return (n.push("[" + t + "]"), this);
            }),
            (this._back = function () {
              return (n.pop(), this);
            }));
        }
        var c = {
          function: function (t) {
            return "function" === typeof t;
          },
          string: function (t) {
            return "string" === typeof t;
          },
          number: function (t) {
            return "number" === typeof t && !isNaN(t);
          },
          integer: function (t) {
            return "number" === typeof t && t % 1 === 0;
          },
          NaN: function (t) {
            return "number" === typeof t && isNaN(t);
          },
          boolean: function (t) {
            return "boolean" === typeof t;
          },
          null: function (t) {
            return null === t;
          },
          date: function (t) {
            return null != t && t instanceof Date;
          },
          object: function (t) {
            return (
              "object" === typeof t && null != t && t.constructor !== Array
            );
          },
          array: function (t) {
            return null != t && t.constructor === Array;
          },
          any: function () {
            return !0;
          },
        };
        function a(t, e) {
          return "function" === typeof t
            ? e instanceof t
            : ((t = t in c ? t : "any"), c[t](e));
        }
        function f(t) {
          for (var e in c)
            if (a(e, t))
              return "any" === e || ("object" === e && t.constructor !== Object)
                ? "an instance of " + t.constructor.name
                : e;
        }
        function l(t, e) {
          var n = [],
            r = t.indexOf(e);
          while (-1 !== r) (n.push(r), (r = t.indexOf(e, r + 1)));
          return n;
        }
        var h = {
            void: /^$/,
            url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)?(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
            "date-time":
              /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z?|(-|\+)\d{2}:\d{2})$/,
            date: /^\d{4}-\d{2}-\d{2}$/,
            coolDateTime:
              /^\d{4}(-|\/)\d{2}(-|\/)\d{2}(T| )\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/,
            time: /^\d{2}\:\d{2}\:\d{2}$/,
            color: /^#([0-9a-f])+$/i,
            email: /^[^@]+@[^.]+\.[a-zA-Z]+$/,
            numeric: /^[0-9]+$/,
            integer: /^\-?[0-9]+$/,
            decimal: /^\-?[0-9]*\.?[0-9]+$/,
            alpha: /^[a-z]+$/i,
            alphaNumeric: /^[a-z0-9]+$/i,
            alphaDash: /^[a-z0-9_-]+$/i,
            javascript: /^[a-z_\$][a-z0-9_\$]*$/i,
            upperString: /^[A-Z ]*$/,
            lowerString: /^[a-z ]*$/,
            v4uuid:
              /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
          },
          p = {
            optional: function (t, e) {
              var n =
                "boolean" === typeof t.optional
                  ? t.optional
                  : "true" === t.optional;
              !0 !== n &&
                "undefined" === typeof e &&
                this.report("is missing and not optional", null, "optional");
            },
            type: function (t, e) {
              if (
                "undefined" !== typeof e &&
                ("string" === typeof t.type ||
                  t.type instanceof Array ||
                  "function" === typeof t.type)
              ) {
                var n = c.array(t.type) ? t.type : [t.type],
                  r = n.some(function (t) {
                    return a(t, e);
                  });
                r ||
                  ((n = n.map(function (t) {
                    return "function" === typeof t
                      ? "an instance of " + t.name
                      : t;
                  })),
                  this.report(
                    "must be " + n.join(" or ") + ", but is " + f(e),
                    null,
                    "type",
                  ));
              }
            },
            uniqueness: function (t, e) {
              if (
                ("string" === typeof t.uniqueness &&
                  (t.uniqueness = "true" === t.uniqueness),
                "boolean" === typeof t.uniqueness &&
                  !1 !== t.uniqueness &&
                  (c.array(e) || "string" === typeof e))
              )
                for (var n = [], r = 0; r < e.length; r++)
                  if (!(n.indexOf(e[r]) >= 0)) {
                    var i = l(e, e[r]);
                    i.length > 1 &&
                      (n.push(e[r]),
                      this.report(
                        "has value [" +
                          e[r] +
                          "] more than once at indexes [" +
                          i.join(", ") +
                          "]",
                        null,
                        "uniqueness",
                      ));
                  }
            },
            pattern: function (t, e) {
              var n = this,
                r = t.pattern;
              if ("string" === typeof e) {
                var i = !1;
                (c.array(r) || (r = [r]),
                  r.forEach(function (t) {
                    ("string" === typeof t && t in h && (t = h[t]),
                      t instanceof RegExp && t.test(e) && (i = !0));
                  }),
                  i ||
                    n.report(
                      "must match [" +
                        r.join(" or ") +
                        '], but is equal to "' +
                        e +
                        '"',
                      null,
                      "pattern",
                    ));
              }
            },
            validDate: function (t, e) {
              "true" === String(t.validDate) &&
                e instanceof Date &&
                isNaN(e.getTime()) &&
                this.report("must be a valid date", null, "validDate");
            },
            minLength: function (t, e) {
              if ("string" === typeof e || c.array(e)) {
                var n = Number(t.minLength);
                isNaN(n) ||
                  (e.length < n &&
                    this.report(
                      "must be longer than " +
                        n +
                        " elements, but it has " +
                        e.length,
                      null,
                      "minLength",
                    ));
              }
            },
            maxLength: function (t, e) {
              if ("string" === typeof e || c.array(e)) {
                var n = Number(t.maxLength);
                isNaN(n) ||
                  (e.length > n &&
                    this.report(
                      "must be shorter than " +
                        n +
                        " elements, but it has " +
                        e.length,
                      null,
                      "maxLength",
                    ));
              }
            },
            exactLength: function (t, e) {
              if ("string" === typeof e || c.array(e)) {
                var n = Number(t.exactLength);
                isNaN(n) ||
                  (e.length !== n &&
                    this.report(
                      "must have exactly " +
                        n +
                        " elements, but it have " +
                        e.length,
                      null,
                      "exactLength",
                    ));
              }
            },
            lt: function (t, e) {
              var n = Number(t.lt);
              "number" !== typeof e ||
                isNaN(n) ||
                (e >= n &&
                  this.report(
                    "must be less than " + n + ', but is equal to "' + e + '"',
                    null,
                    "lt",
                  ));
            },
            lte: function (t, e) {
              var n = Number(t.lte);
              "number" !== typeof e ||
                isNaN(n) ||
                (e > n &&
                  this.report(
                    "must be less than or equal to " +
                      n +
                      ', but is equal to "' +
                      e +
                      '"',
                    null,
                    "lte",
                  ));
            },
            gt: function (t, e) {
              var n = Number(t.gt);
              "number" !== typeof e ||
                isNaN(n) ||
                (e <= n &&
                  this.report(
                    "must be greater than " +
                      n +
                      ', but is equal to "' +
                      e +
                      '"',
                    null,
                    "gt",
                  ));
            },
            gte: function (t, e) {
              var n = Number(t.gte);
              "number" !== typeof e ||
                isNaN(n) ||
                (e < n &&
                  this.report(
                    "must be greater than or equal to " +
                      n +
                      ', but is equal to "' +
                      e +
                      '"',
                    null,
                    "gte",
                  ));
            },
            eq: function (t, e) {
              if (
                "number" === typeof e ||
                "string" === typeof e ||
                "boolean" === typeof e
              ) {
                var n = t.eq;
                if (
                  "number" === typeof n ||
                  "string" === typeof n ||
                  "boolean" === typeof n ||
                  c.array(n)
                )
                  if (c.array(n)) {
                    for (var r = 0; r < n.length; r++) if (e === n[r]) return;
                    this.report(
                      "must be equal to [" +
                        n
                          .map(function (t) {
                            return '"' + t + '"';
                          })
                          .join(" or ") +
                        '], but is equal to "' +
                        e +
                        '"',
                      null,
                      "eq",
                    );
                  } else
                    e !== n &&
                      this.report(
                        'must be equal to "' +
                          n +
                          '", but is equal to "' +
                          e +
                          '"',
                        null,
                        "eq",
                      );
              }
            },
            ne: function (t, e) {
              if ("number" === typeof e || "string" === typeof e) {
                var n = t.ne;
                if (
                  "number" === typeof n ||
                  "string" === typeof n ||
                  c.array(n)
                )
                  if (c.array(n)) {
                    for (var r = 0; r < n.length; r++)
                      if (e === n[r])
                        return void this.report(
                          'must not be equal to "' + n[r] + '"',
                          null,
                          "ne",
                        );
                  } else
                    e === n &&
                      this.report(
                        'must not be equal to "' + n + '"',
                        null,
                        "ne",
                      );
              }
            },
            multipleOf: function (t, e) {
              const n = Number(t.multipleOf);
              "number" !== typeof e ||
                isNaN(n) ||
                (e % n !== 0 &&
                  this.report(
                    e + " is not divisible by " + n,
                    null,
                    "multipleOf",
                  ));
            },
            someKeys: function (t, e) {
              var n = t.someKeys;
              if (c.object(e)) {
                var r = n.some(function (t) {
                  return t in e;
                });
                r ||
                  this.report(
                    "must have at least key " +
                      n
                        .map(function (t) {
                          return '"' + t + '"';
                        })
                        .join(" or "),
                    null,
                    "someKeys",
                  );
              }
            },
            strict: function (t, e) {
              if (
                ("string" === typeof t.strict &&
                  (t.strict = "true" === t.strict),
                !0 === t.strict && c.object(e) && c.object(t.properties))
              ) {
                var n = this;
                if ("undefined" === typeof t.properties["*"]) {
                  var r = Object.keys(e).filter(function (e) {
                    return "undefined" === typeof t.properties[e];
                  });
                  if (r.length > 0) {
                    var i =
                      "should not contains " +
                      (r.length > 1 ? "properties" : "property") +
                      " [" +
                      r
                        .map(function (t) {
                          return '"' + t + '"';
                        })
                        .join(", ") +
                      "]";
                    n.report(i, null, "strict");
                  }
                }
              }
            },
            exec: function (t, e, n) {
              var r = this;
              if ("function" === typeof n) return this.asyncExec(t, e, n);
              (c.array(t.exec) ? t.exec : [t.exec]).forEach(function (n) {
                "function" === typeof n && n.call(r, t, e);
              });
            },
            properties: function (t, e, n) {
              if ("function" === typeof n) return this.asyncProperties(t, e, n);
              if (t.properties instanceof Object && e instanceof Object) {
                var r,
                  i = t.properties;
                if (null != i["*"])
                  for (r in e)
                    r in i ||
                      (this._deeperObject(r),
                      this._validate(i["*"], e[r]),
                      this._back());
                for (r in i)
                  "*" !== r &&
                    (this._deeperObject(r),
                    this._validate(i[r], e[r]),
                    this._back());
              }
            },
            items: function (t, e, n) {
              if ("function" === typeof n) return this.asyncItems(t, e, n);
              if (t.items instanceof Object && e instanceof Object) {
                var r,
                  i,
                  o = t.items;
                if (c.array(o) && c.array(e))
                  for (r = 0, i = o.length; r < i; r++)
                    (this._deeperArray(r),
                      this._validate(o[r], e[r]),
                      this._back());
                else
                  for (var s in e)
                    Object.prototype.hasOwnProperty.call(e, s) &&
                      (this._deeperArray(s),
                      this._validate(o, e[s]),
                      this._back());
              }
            },
          },
          y = {
            asyncExec: function (t, e, n) {
              var i = this;
              r.eachSeries(
                c.array(t.exec) ? t.exec : [t.exec],
                function (n, o) {
                  if ("function" === typeof n) {
                    if (n.length > 2) return n.call(i, t, e, o);
                    n.call(i, t, e);
                  }
                  r.nextTick(o);
                },
                n,
              );
            },
            asyncProperties: function (t, e, n) {
              if (!(t.properties instanceof Object) || !c.object(e)) return n();
              var i = this,
                o = t.properties;
              r.series(
                [
                  function (t) {
                    if (null == o["*"]) return t();
                    r.eachSeries(
                      Object.keys(e),
                      function (t, n) {
                        if (t in o) return r.nextTick(n);
                        (i._deeperObject(t),
                          i._asyncValidate(o["*"], e[t], function (t) {
                            (i._back(), n(t));
                          }));
                      },
                      t,
                    );
                  },
                  function (t) {
                    r.eachSeries(
                      Object.keys(o),
                      function (t, n) {
                        if ("*" === t) return r.nextTick(n);
                        (i._deeperObject(t),
                          i._asyncValidate(o[t], e[t], function (t) {
                            (i._back(), n(t));
                          }));
                      },
                      t,
                    );
                  },
                ],
                n,
              );
            },
            asyncItems: function (t, e, n) {
              if (!(t.items instanceof Object) || !(e instanceof Object))
                return n();
              var i = this,
                o = t.items;
              c.array(o) && c.array(e)
                ? r.timesSeries(
                    o.length,
                    function (t, n) {
                      (i._deeperArray(t),
                        i._asyncValidate(o[t], e[t], function (t, e) {
                          (i._back(), n(t, e));
                        }),
                        i._back());
                    },
                    n,
                  )
                : r.eachSeries(
                    Object.keys(e),
                    function (t, n) {
                      (i._deeperArray(t),
                        i._asyncValidate(o, e[t], function (t, e) {
                          (i._back(), n(t, e));
                        }));
                    },
                    n,
                  );
            },
          };
        function _(t, e) {
          u.prototype.constructor.call(this, t, o(_.custom, e));
          var n = [];
          ((this._basicFields = Object.keys(p)),
            (this._customFields = Object.keys(this._custom)),
            (this.origin = null),
            (this.report = function (t, e, r) {
              var i = {
                code: e || this.userCode || null,
                reason: r || "unknown",
                message: this.userError || t || "is invalid",
                property: this.userAlias
                  ? this.userAlias + " (" + this._dumpStack() + ")"
                  : this._dumpStack(),
              };
              return (n.push(i), this);
            }),
            (this.result = function () {
              return {
                error: n,
                valid: 0 === n.length,
                format: function () {
                  return !0 === this.valid
                    ? "Candidate is valid"
                    : this.error
                        .map(function (t) {
                          return "Property " + t.property + ": " + t.message;
                        })
                        .join("\n");
                },
              };
            }));
        }
        (i(_.prototype, p),
          i(_.prototype, y),
          i(_, new s()),
          (_.prototype.validate = function (t, e) {
            if (((this.origin = t), "function" === typeof e)) {
              var n = this;
              return r.nextTick(function () {
                n._asyncValidate(n._schema, t, function (t) {
                  ((n.origin = null), e(t, n.result()));
                });
              });
            }
            return this._validate(this._schema, t).result();
          }),
          (_.prototype._validate = function (t, e, n) {
            return (
              (this.userCode = t.code || null),
              (this.userError = t.error || null),
              (this.userAlias = t.alias || null),
              this._basicFields.forEach(function (n) {
                (!(n in t) && "optional" !== n) ||
                  "function" !== typeof this[n] ||
                  this[n](t, e);
              }, this),
              this._customFields.forEach(function (n) {
                n in t &&
                  "function" === typeof this._custom[n] &&
                  this._custom[n].call(this, t, e);
              }, this),
              this
            );
          }),
          (_.prototype._asyncValidate = function (t, e, n) {
            var i = this;
            ((this.userCode = t.code || null),
              (this.userError = t.error || null),
              (this.userAlias = t.alias || null),
              r.series(
                [
                  function (n) {
                    r.eachSeries(
                      Object.keys(p),
                      function (n, o) {
                        r.nextTick(function () {
                          if (
                            (n in t || "optional" === n) &&
                            "function" === typeof i[n]
                          ) {
                            if (i[n].length > 2) return i[n](t, e, o);
                            i[n](t, e);
                          }
                          o();
                        });
                      },
                      n,
                    );
                  },
                  function (n) {
                    r.eachSeries(
                      Object.keys(i._custom),
                      function (n, o) {
                        r.nextTick(function () {
                          if (n in t && "function" === typeof i._custom[n]) {
                            if (i._custom[n].length > 2)
                              return i._custom[n].call(i, t, e, o);
                            i._custom[n].call(i, t, e);
                          }
                          o();
                        });
                      },
                      n,
                    );
                  },
                ],
                n,
              ));
          }));
        var d = {
            number: function (t, e) {
              var n;
              if ("number" === typeof t) return t;
              if ("" === t) return "undefined" !== typeof e.def ? e.def : null;
              if ("string" === typeof t) {
                if (
                  ((n = parseFloat(t.replace(/,/g, ".").replace(/ /g, ""))),
                  "number" === typeof n)
                )
                  return n;
              } else if (t instanceof Date) return +t;
              return null;
            },
            integer: function (t, e) {
              var n;
              if ("number" === typeof t && t % 1 === 0) return t;
              if ("" === t) return "undefined" !== typeof e.def ? e.def : null;
              if ("string" === typeof t) {
                if (
                  ((n = parseInt(t.replace(/ /g, ""), 10)),
                  "number" === typeof n)
                )
                  return n;
              } else {
                if ("number" === typeof t) return parseInt(t, 10);
                if ("boolean" === typeof t) return t ? 1 : 0;
                if (t instanceof Date) return +t;
              }
              return null;
            },
            string: function (t, e) {
              return "boolean" === typeof t ||
                "number" === typeof t ||
                t instanceof Date
                ? t.toString()
                : c.array(t)
                  ? e.items || e.properties
                    ? t
                    : t.join(String(e.joinWith || ","))
                  : t instanceof Object
                    ? e.items || e.properties
                      ? t
                      : JSON.stringify(t)
                    : "string" === typeof t && t.length
                      ? t
                      : null;
            },
            date: function (t, e) {
              if (t instanceof Date) return t;
              var n = new Date(t);
              return isNaN(n.getTime()) ? null : n;
            },
            boolean: function (t, e) {
              return "undefined" === typeof t
                ? null
                : ("string" !== typeof t || "false" !== t.toLowerCase()) && !!t;
            },
            object: function (t, e) {
              if ("string" !== typeof t || c.object(t)) return t;
              try {
                return JSON.parse(t);
              } catch (n) {
                return null;
              }
            },
            array: function (t, e) {
              if (c.array(t)) return t;
              if ("undefined" === typeof t) return null;
              if ("string" === typeof t) {
                if ("[" === t.substring(0, 1) && "]" === t.slice(-1))
                  try {
                    return JSON.parse(t);
                  } catch (n) {
                    return null;
                  }
                return t.split(String(e.splitWith || ","));
              }
              return c.array(t) ? null : [t];
            },
          },
          g = {
            upper: function (t) {
              return t.toUpperCase();
            },
            lower: function (t) {
              return t.toLowerCase();
            },
            title: function (t) {
              return t.replace(/\S*/g, function (t) {
                return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
              });
            },
            capitalize: function (t) {
              return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            },
            ucfirst: function (t) {
              return t.charAt(0).toUpperCase() + t.substr(1);
            },
            trim: function (t) {
              return t.trim();
            },
          },
          v = {
            strict: function (t, e) {
              return (
                "string" === typeof t.strict &&
                  (t.strict = "true" === t.strict),
                !0 !== t.strict
                  ? e
                  : c.object(t.properties) && c.object(e)
                    ? (Object.keys(e).forEach(function (n) {
                        n in t.properties || delete e[n];
                      }),
                      e)
                    : e
              );
            },
            optional: function (t, e) {
              var n =
                "boolean" === typeof t.optional
                  ? t.optional
                  : "false" !== t.optional;
              return !0 === n || "undefined" !== typeof e
                ? e
                : (this.report(), t.def === Date ? new Date() : t.def);
            },
            type: function (t, e) {
              if ("string" !== typeof t.type || "function" !== typeof d[t.type])
                return e;
              var n,
                r = "boolean" !== typeof t.optional || t.optional;
              return (
                "function" === typeof d[t.type]
                  ? ((n = d[t.type](e, t)),
                    ((null === n && !r) ||
                      (!n && isNaN(n)) ||
                      (null === n && "string" === t.type)) &&
                      (n = t.def))
                  : r || (n = t.def),
                (null != n || ("undefined" !== typeof t.def && t.def === n)) &&
                n !== e
                  ? (this.report(), n)
                  : e
              );
            },
            rules: function (t, e) {
              var n = t.rules;
              if (
                "string" !== typeof e ||
                ("string" !== typeof n && !c.array(n))
              )
                return e;
              var r = !1;
              return (
                (c.array(n) ? n : [n]).forEach(function (t) {
                  "function" === typeof g[t] && ((e = g[t](e)), (r = !0));
                }),
                r && this.report(),
                e
              );
            },
            min: function (t, e) {
              var n = Number(e);
              if (isNaN(n)) return e;
              var r = Number(t.min);
              return isNaN(r) ? e : n < r ? (this.report(), r) : e;
            },
            max: function (t, e) {
              var n = Number(e);
              if (isNaN(n)) return e;
              var r = Number(t.max);
              return isNaN(r) ? e : n > r ? (this.report(), r) : e;
            },
            minLength: function (t, e) {
              var n = Number(t.minLength);
              if ("string" !== typeof e || isNaN(n) || n < 0) return e;
              var r = "",
                i = n - e.length;
              if (i > 0) {
                for (var o = 0; o < i; o++) r += "-";
                return (this.report(), e + r);
              }
              return e;
            },
            maxLength: function (t, e) {
              var n = Number(t.maxLength);
              return "string" !== typeof e || isNaN(n) || n < 0
                ? e
                : e.length > n
                  ? (this.report(), e.slice(0, n))
                  : e;
            },
            properties: function (t, e, n) {
              if ("function" === typeof n) return this.asyncProperties(t, e, n);
              if (!e || "object" !== typeof e) return e;
              var r,
                i,
                o = t.properties;
              if ("undefined" !== typeof o["*"])
                for (i in e)
                  i in o ||
                    (this._deeperObject(i),
                    (r = this._sanitize(o["*"], e[i])),
                    ("undefined" !== typeof r || "exec" in o["*"]) &&
                      (e[i] = r),
                    this._back());
              for (i in o)
                "*" !== i &&
                  (this._deeperObject(i),
                  (r = this._sanitize(o[i], e[i])),
                  ("undefined" !== typeof r || "exec" in o[i]) && (e[i] = r),
                  this._back());
              return e;
            },
            items: function (t, e, n) {
              if ("function" === typeof n) return this.asyncItems(t, e, n);
              if (!(t.items instanceof Object) || !(e instanceof Object))
                return e;
              var r;
              if (c.array(t.items) && c.array(e)) {
                var i = t.items.length < e.length ? t.items.length : e.length;
                for (r = 0; r < i; r++)
                  (this._deeperArray(r),
                    (e[r] = this._sanitize(t.items[r], e[r])),
                    this._back());
              } else
                for (r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    (this._deeperArray(r),
                    (e[r] = this._sanitize(t.items, e[r])),
                    this._back());
              return e;
            },
            exec: function (t, e, n) {
              if ("function" === typeof n) return this.asyncExec(t, e, n);
              var r = c.array(t.exec) ? t.exec : [t.exec];
              return (
                r.forEach(function (n) {
                  "function" === typeof n && (e = n.call(this, t, e));
                }, this),
                e
              );
            },
          },
          w = {
            asyncExec: function (t, e, n) {
              var i = this,
                o = c.array(t.exec) ? t.exec : [t.exec];
              r.eachSeries(
                o,
                function (n, r) {
                  if ("function" === typeof n) {
                    if (n.length > 2)
                      return n.call(i, t, e, function (t, n) {
                        if (t) return r(t);
                        ((e = n), r());
                      });
                    e = n.call(i, t, e);
                  }
                  r();
                },
                function (t) {
                  n(t, e);
                },
              );
            },
            asyncProperties: function (t, e, n) {
              if (!e || "object" !== typeof e) return n(null, e);
              var i = this,
                o = t.properties;
              r.series(
                [
                  function (t) {
                    if (null == o["*"]) return t();
                    var n = o["*"];
                    r.eachSeries(
                      Object.keys(e),
                      function (t, r) {
                        if (t in o) return r();
                        (i._deeperObject(t),
                          i._asyncSanitize(n, e[t], function (n, o) {
                            ("undefined" !== typeof o && (e[t] = o),
                              i._back(),
                              r());
                          }));
                      },
                      t,
                    );
                  },
                  function (t) {
                    r.eachSeries(
                      Object.keys(o),
                      function (t, n) {
                        if ("*" === t) return n();
                        (i._deeperObject(t),
                          i._asyncSanitize(o[t], e[t], function (r, o) {
                            if (r) return n(r);
                            ("undefined" !== typeof o && (e[t] = o),
                              i._back(),
                              n());
                          }));
                      },
                      t,
                    );
                  },
                ],
                function (t) {
                  return n(t, e);
                },
              );
            },
            asyncItems: function (t, e, n) {
              if (!(t.items instanceof Object) || !(e instanceof Object))
                return n(null, e);
              var i = this,
                o = t.items;
              if (c.array(o) && c.array(e)) {
                var s = o.length < e.length ? o.length : e.length;
                r.timesSeries(
                  s,
                  function (t, n) {
                    (i._deeperArray(t),
                      i._asyncSanitize(o[t], e[t], function (r, o) {
                        if (r) return n(r);
                        ((e[t] = o), i._back(), n());
                      }));
                  },
                  function (t) {
                    n(t, e);
                  },
                );
              } else
                r.eachSeries(
                  Object.keys(e),
                  function (t, n) {
                    (i._deeperArray(t),
                      i._asyncSanitize(o, e[t], function (r, o) {
                        if (r) return n();
                        ((e[t] = o), i._back(), n());
                      }));
                  },
                  function (t) {
                    n(t, e);
                  },
                );
              return e;
            },
          };
        function m(t, e) {
          u.prototype.constructor.call(this, t, o(m.custom, e));
          var n = [];
          ((this._basicFields = Object.keys(v)),
            (this._customFields = Object.keys(this._custom)),
            (this.origin = null),
            (this.report = function (t) {
              var e = {
                message: t || "was sanitized",
                property: this.userAlias
                  ? this.userAlias + " (" + this._dumpStack() + ")"
                  : this._dumpStack(),
              };
              n.some(function (t) {
                return t.property === e.property;
              }) || n.push(e);
            }),
            (this.result = function (t) {
              return {
                data: t,
                reporting: n,
                format: function () {
                  return this.reporting
                    .map(function (t) {
                      return "Property " + t.property + " " + t.message;
                    })
                    .join("\n");
                },
              };
            }));
        }
        (i(m.prototype, v),
          i(m.prototype, w),
          i(m, new s()),
          (m.prototype.sanitize = function (t, e) {
            if (((this.origin = t), "function" === typeof e)) {
              var n = this;
              return this._asyncSanitize(this._schema, t, function (t, r) {
                ((n.origin = null), e(t, n.result(r)));
              });
            }
            var r = this._sanitize(this._schema, t);
            return ((this.origin = null), this.result(r));
          }),
          (m.prototype._sanitize = function (t, e) {
            return (
              (this.userAlias = t.alias || null),
              this._basicFields.forEach(function (n) {
                (!(n in t) && "optional" !== n) ||
                  "function" !== typeof this[n] ||
                  (e = this[n](t, e));
              }, this),
              this._customFields.forEach(function (n) {
                n in t &&
                  "function" === typeof this._custom[n] &&
                  (e = this._custom[n].call(this, t, e));
              }, this),
              e
            );
          }),
          (m.prototype._asyncSanitize = function (t, e, n) {
            var i = this;
            ((this.userAlias = t.alias || null),
              r.waterfall(
                [
                  function (n) {
                    r.reduce(
                      i._basicFields,
                      e,
                      function (e, n, o) {
                        r.nextTick(function () {
                          if (
                            (n in t || "optional" === n) &&
                            "function" === typeof i[n]
                          ) {
                            if (i[n].length > 2) return i[n](t, e, o);
                            e = i[n](t, e);
                          }
                          o(null, e);
                        });
                      },
                      n,
                    );
                  },
                  function (e, n) {
                    r.reduce(
                      i._customFields,
                      e,
                      function (e, n, o) {
                        r.nextTick(function () {
                          if (n in t && "function" === typeof i._custom[n]) {
                            if (i._custom[n].length > 2)
                              return i._custom[n].call(i, t, e, o);
                            e = i._custom[n].call(i, t, e);
                          }
                          o(null, e);
                        });
                      },
                      n,
                    );
                  },
                ],
                n,
              ));
          }));
        var b = -2147483648,
          k = 2147483647,
          S = {
            int: function (t, e) {
              return t + (0 | (Math.random() * (e - t + 1)));
            },
            float: function (t, e) {
              return Math.random() * (e - t) + t;
            },
            bool: function () {
              return Math.random() > 0.5;
            },
            char: function (t, e) {
              return String.fromCharCode(this.int(t, e));
            },
            fromList: function (t) {
              return t[this.int(0, t.length - 1)];
            },
          },
          x = {
            "date-time": function () {
              return new Date().toISOString();
            },
            date: function () {
              return new Date().toISOString().replace(/T.*$/, "");
            },
            time: function () {
              return new Date().toLocaleTimeString({}, { hour12: !1 });
            },
            color: function (t, e) {
              var n = "#";
              t < 1 && (t = 1);
              for (var r = 0, i = S.int(t, e); r < i; r++)
                n += S.fromList("0123456789abcdefABCDEF");
              return n;
            },
            numeric: function () {
              return "" + S.int(0, k);
            },
            integer: function () {
              return !0 === S.bool() ? "-" + this.numeric() : this.numeric();
            },
            decimal: function () {
              return this.integer() + "." + this.numeric();
            },
            alpha: function (t, e) {
              var n = "";
              t < 1 && (t = 1);
              for (var r = 0, i = S.int(t, e); r < i; r++)
                n += S.fromList(
                  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                );
              return n;
            },
            alphaNumeric: function (t, e) {
              var n = "";
              t < 1 && (t = 1);
              for (var r = 0, i = S.int(t, e); r < i; r++)
                n += S.fromList(
                  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                );
              return n;
            },
            alphaDash: function (t, e) {
              var n = "";
              t < 1 && (t = 1);
              for (var r = 0, i = S.int(t, e); r < i; r++)
                n += S.fromList(
                  "_-abcdefghijklmnopqrstuvwxyz_-ABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789_-",
                );
              return n;
            },
            javascript: function (t, e) {
              for (
                var n = S.fromList(
                    "_$abcdefghijklmnopqrstuvwxyz_$ABCDEFGHIJKLMNOPQRSTUVWXYZ_$",
                  ),
                  r = 0,
                  i = S.int(t, e - 1);
                r < i;
                r++
              )
                n += S.fromList(
                  "_$abcdefghijklmnopqrstuvwxyz_$ABCDEFGHIJKLMNOPQRSTUVWXYZ_$0123456789_$",
                );
              return n;
            },
          };
        function B(t) {
          var e = b,
            n = k;
          return (
            null != t.gte ? (e = t.gte) : null != t.gt && (e = t.gt + 1),
            null != t.lte ? (n = t.lte) : null != t.lt && (n = t.lt - 1),
            { min: e, max: n }
          );
        }
        var P = {
          string: function (t) {
            if (null != t.eq) return t.eq;
            var e = "",
              n = null != t.minLength ? t.minLength : 0,
              r = null != t.maxLength ? t.maxLength : 32;
            if (
              "string" === typeof t.pattern &&
              "function" === typeof x[t.pattern]
            )
              return x[t.pattern](n, r);
            for (
              var i = null != t.exactLength ? t.exactLength : S.int(n, r),
                o = 0;
              o < i;
              o++
            )
              e += S.char(32, 126);
            return e;
          },
          number: function (t) {
            if (null != t.eq) return t.eq;
            var e = B(t),
              n = S.float(e.min, e.max);
            if (null != t.ne) {
              var r = c.array(t.ne) ? t.ne : [t.ne];
              while (-1 !== r.indexOf(n)) n = S.float(e.min, e.max);
            }
            return n;
          },
          integer: function (t) {
            if (null != t.eq) return t.eq;
            var e = B(t),
              n = S.int(e.min, e.max);
            if (null != t.ne) {
              var r = c.array(t.ne) ? t.ne : [t.ne];
              while (-1 !== r.indexOf(n)) n = S.int(e.min, e.max);
            }
            return n;
          },
          boolean: function (t) {
            return null != t.eq ? t.eq : S.bool();
          },
          null: function (t) {
            return null;
          },
          date: function (t) {
            return null != t.eq ? t.eq : new Date();
          },
          object: function (t) {
            var e = {},
              n = t.properties || {};
            for (var r in n)
              if (Object.prototype.hasOwnProperty.call(n, r)) {
                if (!0 === n[r].optional && !0 === S.bool()) continue;
                if ("*" !== r) e[r] = this.generate(n[r]);
                else
                  for (
                    var i = "__random_key_", o = i + 0, s = S.int(1, 9), u = 1;
                    u <= s;
                    u++
                  )
                    (o in n || (e[o] = this.generate(n[r])), (o = i + u));
              }
            return e;
          },
          array: function (t) {
            var e,
              n,
              r,
              i,
              o = this,
              s = t.items || {},
              u = null != t.minLength ? t.minLength : 0,
              a = null != t.maxLength ? t.maxLength : 16;
            if (c.array(s))
              for (
                r = s.length,
                  null != t.exactLength
                    ? (r = t.exactLength)
                    : r < u
                      ? (r = u)
                      : r > a && (r = a),
                  n = new Array(r),
                  e = null,
                  i = 0;
                i < r;
                i++
              )
                ((e = s[i].type || "any"),
                  c.array(e) && (e = e[S.int(0, e.length - 1)]),
                  (n[i] = o[e](s[i])));
            else
              for (
                r = null != t.exactLength ? t.exactLength : S.int(u, a),
                  n = new Array(r),
                  e = s.type || "any",
                  c.array(e) && (e = e[S.int(0, e.length - 1)]),
                  i = 0;
                i < r;
                i++
              )
                n[i] = o[e](s);
            return n;
          },
          any: function (t) {
            var e = Object.keys(P),
              n = e[S.int(0, e.length - 2)];
            return this[n](t);
          },
        };
        function E() {}
        i(E.prototype, P);
        var A = null;
        ((E.instance = function () {
          return (A instanceof E || (A = new E()), A);
        }),
          (E.prototype.generate = function (t) {
            var e = t.type || "any";
            return (c.array(e) && (e = e[S.int(0, e.length - 1)]), this[e](t));
          }));
        var D = {};
        (t.exports ? (t.exports = D) : (window.SchemaInspector = D),
          (D.newSanitization = function (t, e) {
            return new m(t, e);
          }),
          (D.newValidation = function (t, e) {
            return new _(t, e);
          }),
          (D.Validation = _),
          (D.Sanitization = m),
          (D.sanitize = function (t, e, n, r) {
            return (
              3 === arguments.length &&
                "function" === typeof n &&
                ((r = n), (n = null)),
              new m(t, n).sanitize(e, r)
            );
          }),
          (D.validate = function (t, e, n, r) {
            return (
              3 === arguments.length &&
                "function" === typeof n &&
                ((r = n), (n = null)),
              new _(t, n).validate(e, r)
            );
          }),
          (D.generate = function (t, e) {
            if ("number" === typeof e) {
              for (var n = new Array(e), r = 0; r < e; r++)
                n[r] = E.instance().generate(t);
              return n;
            }
            return E.instance().generate(t);
          }));
      })();
    },
    2989: function (t, e, n) {
      (function (t) {
        (function () {
          var r, i, o, s, u;
          ((u = n(3236)),
            (i = function (t) {
              var e, n, r, i;
              for (
                n = new Uint8Array(t.length), e = r = 0, i = t.length;
                0 <= i ? r < i : r > i;
                e = 0 <= i ? ++r : --r
              )
                n[e] = t.readUInt8(e);
              return n;
            }),
            (s = function (e) {
              var n, r, i, o;
              for (
                r = t.alloc(e.length), n = i = 0, o = e.length;
                0 <= o ? i < o : i > o;
                n = 0 <= o ? ++i : --i
              )
                r.writeUInt8(e[n], n);
              return r;
            }),
            (o = function (t) {
              return (
                ((t >>> 24) & 255) |
                (((t >>> 16) & 255) << 8) |
                (((t >>> 8) & 255) << 16) |
                ((255 & t) << 24)
              );
            }),
            (e.WordArray = r =
              (function () {
                function e(t, e) {
                  ((this.words = t || []),
                    (this.sigBytes = null != e ? e : 4 * this.words.length));
                }
                return (
                  (e.prototype.concat = function (t) {
                    var e, n, r, i, o;
                    if (
                      ((i = t.words),
                      (r = t.sigBytes),
                      this.clamp(),
                      this.sigBytes % 4)
                    )
                      for (
                        e = o = 0;
                        0 <= r ? o < r : o > r;
                        e = 0 <= r ? ++o : --o
                      )
                        ((n = (i[e >>> 2] >>> (24 - (e % 4) * 8)) & 255),
                          (this.words[(this.sigBytes + e) >>> 2] |=
                            n << (24 - ((this.sigBytes + e) % 4) * 8)));
                    else this.words = this.words.concat(i);
                    return ((this.sigBytes += r), this);
                  }),
                  (e.prototype.clamp = function () {
                    return (
                      (this.words[this.sigBytes >>> 2] &=
                        4294967295 << (32 - (this.sigBytes % 4) * 8)),
                      (this.words.length = Math.ceil(this.sigBytes / 4)),
                      this
                    );
                  }),
                  (e.prototype.clone = function () {
                    return new e(this.words.slice(0), this.sigBytes);
                  }),
                  (e.prototype.to_buffer = function () {
                    var e, n, r, i, o, s, c;
                    for (
                      n = t.alloc(this.sigBytes),
                        r = 0,
                        c = this.words,
                        o = 0,
                        s = c.length;
                      o < s;
                      o++
                    )
                      ((i = c[o]),
                        this.sigBytes - r >= 4 &&
                          ((i = u.fixup_uint32(i)),
                          n.writeUInt32BE(i, r),
                          (r += 4)));
                    while (r < this.sigBytes)
                      ((e = (this.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255),
                        n.writeUInt8(e, r),
                        r++);
                    return n;
                  }),
                  (e.prototype.endian_reverse = function () {
                    var t, e, n, r, i;
                    for (
                      i = this.words, t = n = 0, r = i.length;
                      n < r;
                      t = ++n
                    )
                      ((e = i[t]), (this.words[t] = o(e)));
                    return this;
                  }),
                  (e.prototype.split = function (t) {
                    var n, r, i;
                    if (this.sigBytes % 4 !== 0 || this.words.length % t !== 0)
                      throw new Error("bad key alignment");
                    return (
                      (i = this.words.length / t),
                      (r = function () {
                        var t, r, o;
                        for (
                          o = [], n = t = 0, r = this.words.length;
                          i > 0 ? t < r : t > r;
                          n = t += i
                        )
                          o.push(new e(this.words.slice(n, n + i)));
                        return o;
                      }.call(this)),
                      r
                    );
                  }),
                  (e.prototype.to_utf8 = function () {
                    return this.to_buffer().toString("utf8");
                  }),
                  (e.prototype.to_hex = function () {
                    return this.to_buffer().toString("hex");
                  }),
                  (e.prototype.to_ui8a = function () {
                    return i(this.to_buffer());
                  }),
                  (e.alloc = function (n) {
                    return t.isBuffer(n)
                      ? e.from_buffer(n)
                      : "object" === typeof n && n instanceof e
                        ? n
                        : "string" === typeof n
                          ? e.from_hex(n)
                          : null;
                  }),
                  (e.from_buffer = function (t) {
                    var n, r, i, o;
                    ((o = []), (i = 0));
                    while (t.length - i >= 4)
                      (o.push(t.readUInt32BE(i)), (i += 4));
                    if (i < t.length) {
                      r = 0;
                      while (i < t.length)
                        ((n = t.readUInt8(i)),
                          (r |= n << (24 - (i % 4) * 8)),
                          i++);
                      ((r = u.fixup_uint32(r)), o.push(r));
                    }
                    return new e(o, t.length);
                  }),
                  (e.from_buffer_le = function (t) {
                    var n, r, i, o;
                    ((o = []), (i = 0));
                    while (t.length - i >= 4)
                      (o.push(t.readUInt32LE(i)), (i += 4));
                    if (i < t.length) {
                      r = 0;
                      while (i < t.length)
                        ((n = t.readUInt8(i)), (r |= n << ((i % 4) * 8)), i++);
                      ((r = u.fixup_uint32(r)), o.push(r));
                    }
                    return new e(o, t.length);
                  }),
                  (e.from_utf8 = function (n) {
                    return e.from_buffer(t.from(n, "utf8"));
                  }),
                  (e.from_utf8_le = function (n) {
                    return e.from_buffer_le(t.from(n, "utf8"));
                  }),
                  (e.from_hex = function (n) {
                    return e.from_buffer(t.from(n, "hex"));
                  }),
                  (e.from_hex_le = function (n) {
                    return e.from_buffer_le(t.from(n, "hex"));
                  }),
                  (e.from_ui8a = function (t) {
                    return e.from_buffer(s(t));
                  }),
                  (e.from_i32a = function (t) {
                    return new e(Array.apply([], t));
                  }),
                  (e.prototype.equal = function (t) {
                    var e, n, r, i, o, s;
                    if (((n = !0), t.sigBytes !== this.sigBytes)) n = !1;
                    else
                      for (
                        s = this.words, e = i = 0, o = s.length;
                        i < o;
                        e = ++i
                      )
                        ((r = s[e]),
                          u.fixup_uint32(r) !== u.fixup_uint32(t.words[e]) &&
                            (n = !1));
                    return n;
                  }),
                  (e.prototype.xor = function (t, e) {
                    var n, r, i, o, s, c;
                    if (
                      ((n = e.dst_offset),
                      (o = e.src_offset),
                      (i = e.n_words),
                      n || (n = 0),
                      o || (o = 0),
                      null == i && (i = t.words.length - o),
                      this.words.length < n + i)
                    )
                      throw new Error(
                        "dest range exceeded (" +
                          this.words.length +
                          " < " +
                          (n + i) +
                          ")",
                      );
                    if (t.words.length < o + i)
                      throw new Error("source range exceeded");
                    for (
                      r = c = 0;
                      0 <= i ? c < i : c > i;
                      r = 0 <= i ? ++c : --c
                    )
                      ((s = this.words[n + r] ^ t.words[o + r]),
                        (this.words[n + r] = u.fixup_uint32(s)));
                    return this;
                  }),
                  (e.prototype.truncate = function (t) {
                    var n;
                    if (!(t <= this.sigBytes))
                      throw new Error(
                        "Cannot truncate: " + t + " > " + this.sigBytes,
                      );
                    return (
                      (n = Math.ceil(t / 4)),
                      new e(this.words.slice(0, n), t)
                    );
                  }),
                  (e.prototype.unshift = function (t) {
                    var n;
                    return this.words.length >= t
                      ? ((n = this.words.splice(0, t)),
                        (this.sigBytes -= 4 * t),
                        new e(n))
                      : null;
                  }),
                  (e.prototype.is_scrubbed = function () {
                    var t, e, n, r;
                    for (r = this.words, e = 0, n = r.length; e < n; e++)
                      if (((t = r[e]), 0 !== t)) return !1;
                    return !0;
                  }),
                  (e.prototype.scrub = function () {
                    return u.scrub_vec(this.words);
                  }),
                  (e.prototype.cmp_ule = function (t) {
                    return u.buffer_cmp_ule(this.to_buffer(), t.to_buffer());
                  }),
                  (e.prototype.slice = function (t, n) {
                    var r, i;
                    if (((r = this.words.length), !(t < n && n <= r)))
                      throw new Error(
                        "Bad WordArray slice [" +
                          t +
                          "," +
                          n +
                          ")] when only " +
                          r +
                          " avail",
                      );
                    return (
                      (i = 4 * (n - t)),
                      n === r && (i -= 4 * r - this.sigBytes),
                      new e(this.words.slice(t, n), i)
                    );
                  }),
                  e
                );
              })()),
            (e.X64Word = (function () {
              function t(t, e) {
                ((this.high = t), (this.low = e));
              }
              return (
                (t.prototype.clone = function () {
                  return new t(this.high, this.low);
                }),
                t
              );
            })()),
            (e.X64WordArray = (function () {
              function t(t, e) {
                ((this.sigBytes = e),
                  (this.words = t || []),
                  this.sigBytes || (this.sigBytes = 8 * this.words.length));
              }
              return (
                (t.prototype.toX32 = function () {
                  var t, e, n, i, o;
                  for (t = [], o = this.words, n = 0, i = o.length; n < i; n++)
                    ((e = o[n]), t.push(e.high), t.push(e.low));
                  return new r(t, this.sigBytes);
                }),
                (t.prototype.clone = function () {
                  var e;
                  return new t(
                    function () {
                      var t, n, r, i;
                      for (
                        r = this.words, i = [], t = 0, n = r.length;
                        t < n;
                        t++
                      )
                        ((e = r[t]), i.push(e.clone()));
                      return i;
                    }.call(this),
                    this.sigBytes,
                  );
                }),
                t
              );
            })()),
            (e.buffer_to_ui8a = i),
            (e.ui8a_to_buffer = s),
            (e.endian_reverse = o));
        }).call(this);
      }).call(this, n(2).Buffer);
    },
    3207: function (t, e, n) {
      (function () {
        var t, r, i, o, s, u;
        for (
          e["const"] = n(5725), i = [n(6934), n(11467)], s = 0, u = i.length;
          s < u;
          s++
        )
          for (t in ((r = i[s]), r)) ((o = r[t]), (e[t] = o));
      }).call(this);
    },
    3236: function (t, e, n) {
      (function (t) {
        (function () {
          var r, i, o;
          ((i = n(3207)),
            (o = Math.pow(2, 32)),
            (e.fixup_uint32 = function (t) {
              var e, n;
              return (
                (e =
                  t > o || t < 0
                    ? ((n = Math.abs(t) % o), t < 0 ? o - n : n)
                    : t),
                e
              );
            }),
            (e.scrub_buffer = function (t) {
              var e, n;
              ((n = t.length >> 2), (e = 0));
              while (e < n) (t.writeUInt32LE(0, e), (e += 4));
              while (e < t.length) (t.writeUInt8(0, e), e++);
              return !1;
            }),
            (e.copy_buffer = function (e) {
              var n, r, i, o;
              for (
                r = t.alloc(e.length), n = i = 0, o = e.length;
                0 <= o ? i < o : i > o;
                n = 0 <= o ? ++i : --i
              )
                r.writeUInt8(e.readUInt8(n), n);
              return r;
            }),
            (e.scrub_vec = function (t) {
              var e, n, r;
              for (
                e = n = 0, r = t.length;
                0 <= r ? n < r : n > r;
                e = 0 <= r ? ++n : --n
              )
                t[e] = 0;
              return !1;
            }),
            (e.default_delay = r =
              function (t, e, n) {
                var r, o;
                ((r = i.findDeferral(arguments)),
                  (function (t) {
                    return function (t) {
                      "undefined" !== typeof setImmediate &&
                      null !== setImmediate
                        ? (function (t) {
                            ((o = new i.Deferrals(t, {
                              parent: r,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/util.iced",
                            })),
                              setImmediate(o.defer({ lineno: 45 })),
                              o._fulfill());
                          })(t)
                        : (function (t) {
                            ((o = new i.Deferrals(t, {
                              parent: r,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/util.iced",
                            })),
                              setTimeout(o.defer({ lineno: 47 }), 1),
                              o._fulfill());
                          })(t);
                    };
                  })()(
                    (function (t) {
                      return function () {
                        return n();
                      };
                    })(),
                  ));
              }),
            (e.buffer_cmp_ule = function (t, e) {
              var n, r, i, o, s, u;
              ((i = o = 0), (n = t.length), (r = e.length));
              while (i < n && 0 === t.readUInt8(i)) i++;
              while (o < r && 0 === e.readUInt8(o)) o++;
              if (n - i > r - o) return 1;
              if (r - o > n - i) return -1;
              while (i < n) {
                if ((s = t.readUInt8(i)) < (u = e.readUInt8(o))) return -1;
                if (u < s) return 1;
                (i++, o++);
              }
              return 0;
            }),
            (e.bulk = function (t, e, n) {
              var o, s, u, c, a, f, l, h, p, y, _, d, g, v, w, m;
              ((w = i.findDeferral(arguments)),
                (g = e.update),
                (a = e.finalize),
                (u = e.default_n),
                (c = n.delay),
                (h = n.n),
                (s = n.cb),
                (v = n.what),
                (y = n.progress_hook),
                (f = 0),
                (l = 0),
                (d = Math.ceil(t / 4)),
                c || (c = r),
                h || (h = u),
                (o = function (t) {
                  return "function" === typeof y
                    ? y({ what: v, i: t, total: d })
                    : void 0;
                }),
                o(0),
                (function (t) {
                  return function (t) {
                    var e;
                    ((e = function (t) {
                      var n, r, s;
                      if (
                        ((n = t),
                        (r = function () {
                          return i.trampoline(function () {
                            return e(t);
                          });
                        }),
                        (s = r),
                        !((l = d - f) > 0))
                      )
                        return n();
                      ((p = Math.min(h, l)),
                        g(f, f + p),
                        o(f),
                        (function (t) {
                          ((m = new i.Deferrals(t, {
                            parent: w,
                            filename:
                              "/Users/max/src/keybase/triplesec/src/util.iced",
                            funcname: "bulk",
                          })),
                            c(f, d, m.defer({ lineno: 105 })),
                            m._fulfill());
                        })(function () {
                          return s((f += p));
                        }));
                    }),
                      e(t));
                  };
                })()(
                  (function (t) {
                    return function () {
                      return (o(d), (_ = a()), s(_));
                    };
                  })(),
                ));
            }));
        }).call(this);
      }).call(this, n(2).Buffer);
    },
    3361: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c = {}.hasOwnProperty,
          a = function (t, e) {
            for (var n in e) c.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((s = n(2989).WordArray),
          (u = n(3236)),
          (r = (function () {
            function t() {
              this.reset();
            }
            return (
              (t.prototype._minBufferSize = 0),
              (t.prototype.reset = function () {
                return ((this._data = new s()), (this._nDataBytes = 0));
              }),
              (t.prototype._append = function (t) {
                return (this._data.concat(t), (this._nDataBytes += t.sigBytes));
              }),
              (t.prototype._process = function (t) {
                var e, n, r, i, o, u, c, a, f, l, h;
                if (
                  ((n = this._data),
                  (i = n.words),
                  (r = n.sigBytes),
                  (e = 4 * this.blockSize),
                  (o = r / e),
                  (o = t
                    ? Math.ceil(o)
                    : Math.max((0 | o) - this._minBufferSize, 0)),
                  (c = o * this.blockSize),
                  (u = Math.min(4 * c, r)),
                  c)
                ) {
                  for (
                    a = l = 0, h = this.blockSize;
                    h > 0 ? l < c : l > c;
                    a = l += h
                  )
                    this._doProcessBlock(i, a);
                  ((f = i.splice(0, c)), (n.sigBytes -= u));
                }
                return new s(f, u);
              }),
              (t.prototype.copy_to = function (t) {
                return (
                  (t._data = this._data.clone()),
                  (t._nDataBytes = this._nDataBytes)
                );
              }),
              (t.prototype.clone = function () {
                var e;
                return ((e = new t()), this.copy_to(e), e);
              }),
              t
            );
          })()),
          (i = (function (t) {
            function e() {
              e.__super__.constructor.call(this);
            }
            return (
              a(e, t),
              (e.prototype.reset = function () {
                return (e.__super__.reset.call(this), this._doReset(), this);
              }),
              (e.prototype.update = function (t) {
                return (this._append(t), this._process(), this);
              }),
              (e.prototype.finalize = function (t) {
                return (t && this._append(t), this._doFinalize());
              }),
              (e.prototype.bufhash = function (t) {
                var e, n, r;
                return (
                  (n = s.from_buffer(t)),
                  (r = this.finalize(n)),
                  (e = r.to_buffer()),
                  n.scrub(),
                  r.scrub(),
                  e
                );
              }),
              e
            );
          })(r)),
          (e.BlockCipher = t =
            (function () {
              function t(t) {}
              return ((t.prototype.encryptBlock = function (t, e) {}), t);
            })()),
          (o = (function () {
            function t() {}
            return (
              (t.prototype.encryptBlock = function (t, e) {
                var n, r;
                return (
                  null == e && (e = 0),
                  (r = this.get_pad()),
                  (n = Math.min(t.words.length - e, this.bsiw)),
                  t.xor(r, { dst_offset: e, n_words: n }),
                  r.scrub(),
                  this.bsiw
                );
              }),
              (t.prototype.encrypt = function (t) {
                var e, n, r, i;
                for (
                  e = n = 0, r = t.words.length, i = this.bsiw;
                  i > 0 ? n < r : n > r;
                  e = n += i
                )
                  this.encryptBlock(t, e);
                return t;
              }),
              (t.prototype.bulk_encrypt = function (t, e) {
                var n, r, i, o, s;
                return (
                  (r = t.input),
                  (i = t.progress_hook),
                  (s = t.what),
                  (o = {
                    update: (function (t) {
                      return function (e, n) {
                        var i, o, s, u;
                        for (
                          u = [], i = o = e, s = t.bsiw;
                          s > 0 ? o < n : o > n;
                          i = o += s
                        )
                          u.push(t.encryptBlock(r, i));
                        return u;
                      };
                    })(this),
                    finalize: function () {
                      return r;
                    },
                    default_n: 1024 * this.bsiw,
                  }),
                  (n = { progress_hook: i, cb: e, what: s }),
                  u.bulk(r.sigBytes, o, n)
                );
              }),
              t
            );
          })()),
          (e.BlockCipher = t),
          (e.Hasher = i),
          (e.BufferedBlockAlgorithm = r),
          (e.StreamCipher = o));
      }).call(this);
    },
    3854: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(e, n);
                ((i &&
                  !("get" in i
                    ? !e.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  }),
                  Object.defineProperty(t, r, i));
              }
            : function (t, e, n, r) {
                (void 0 === r && (r = n), (t[r] = e[n]));
              }),
        i =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        i(n(11502), e),
        i(n(11508), e),
        i(n(11509), e),
        i(n(4886), e),
        i(n(5737), e));
    },
    3973: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a = {}.hasOwnProperty,
          f = function (t, e) {
            for (var n in e) a.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((s = n(3207)),
          (i = n(3974).SHA512),
          (r = n(5729).SHA256),
          (c = n(3236)),
          (t = (function () {
            function t(t, e) {
              var n, r, o;
              for (
                null == e && (e = i),
                  this.key = t.clone(),
                  this.hasher = new e(),
                  this.hasherBlockSize = this.hasher.blockSize,
                  this.hasherBlockSizeBytes = 4 * this.hasherBlockSize,
                  this.key.sigBytes > this.hasherBlockSizeBytes &&
                    (this.key = this.hasher.finalize(this.key)),
                  this.key.clamp(),
                  this._oKey = this.key.clone(),
                  this._iKey = this.key.clone(),
                  n = r = 0,
                  o = this.hasherBlockSize;
                0 <= o ? r < o : r > o;
                n = 0 <= o ? ++r : --r
              )
                ((this._oKey.words[n] ^= 1549556828),
                  (this._iKey.words[n] ^= 909522486));
              ((this._oKey.sigBytes = this._iKey.sigBytes =
                this.hasherBlockSizeBytes),
                this.reset());
            }
            return (
              (t.outputSize = 64),
              (t.prototype.outputSize = t.outputSize),
              (t.prototype.get_output_size = function () {
                return this.hasher.output_size;
              }),
              (t.prototype.reset = function () {
                return this.hasher.reset().update(this._iKey);
              }),
              (t.prototype.update = function (t) {
                return (this.hasher.update(t), this);
              }),
              (t.prototype.finalize = function (t) {
                var e, n, r;
                return (
                  (e = this.hasher.finalize(t)),
                  this.hasher.reset(),
                  (n = this._oKey.clone().concat(e)),
                  (r = this.hasher.finalize(n)),
                  e.scrub(),
                  n.scrub(),
                  r
                );
              }),
              (t.prototype.scrub = function () {
                return (
                  this.key.scrub(),
                  this._iKey.scrub(),
                  this._oKey.scrub()
                );
              }),
              t
            );
          })()),
          (u = function (e) {
            var n, r, i, o, s;
            return (
              (o = e.key),
              (i = e.input),
              (r = e.hash_class),
              (n = new t(o, r)),
              (s = n.finalize(i.clamp())),
              n.scrub(),
              s
            );
          }),
          (o = function (e, n) {
            var r, i, o, u, a, f, l, h, p, y, _;
            ((y = s.findDeferral(arguments)),
              (u = e.key),
              (o = e.input),
              (f = e.progress_hook),
              (a = e.klass),
              (p = e.what),
              (r = e.combine_klasses),
              a || (a = t),
              p || (p = "hmac_sha512"),
              (i = new a(u, r)),
              o.clamp(),
              (h = {
                update: function (t, e) {
                  return i.update(o.slice(t, e));
                },
                finalize: function () {
                  return i.finalize();
                },
                default_n: 1e3 * i.hasherBlockSize,
              }),
              (function (t) {
                return function (t) {
                  ((_ = new s.Deferrals(t, {
                    parent: y,
                    filename: "/Users/max/src/keybase/triplesec/src/hmac.iced",
                  })),
                    c.bulk(o.sigBytes, h, {
                      what: p,
                      progress_hook: f,
                      cb: _.defer({
                        assign_fn: (function () {
                          return function () {
                            return (l = arguments[0]);
                          };
                        })(),
                        lineno: 137,
                      }),
                    }),
                    _._fulfill());
                };
              })()(
                (function (t) {
                  return function () {
                    return (i.scrub(), n(l));
                  };
                })(),
              ));
          }),
          (e.HMAC_SHA256 = (function (t) {
            function e(t) {
              e.__super__.constructor.call(this, t, r);
            }
            return (f(e, t), e);
          })(t)),
          (e.HMAC = t),
          (e.sign = u),
          (e.bulk_sign = o));
      }).call(this);
    },
    3974: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a = {}.hasOwnProperty,
          f = function (t, e) {
            for (var n in e) a.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((c = n(2989)),
          (o = c.X64Word),
          (s = c.X64WordArray),
          (r = n(3361).Hasher),
          (t = (function () {
            function t() {
              ((this.K = this.convert([
                1116352408, 3609767458, 1899447441, 602891725, 3049323471,
                3964484399, 3921009573, 2173295548, 961987163, 4081628472,
                1508970993, 3053834265, 2453635748, 2937671579, 2870763221,
                3664609560, 3624381080, 2734883394, 310598401, 1164996542,
                607225278, 1323610764, 1426881987, 3590304994, 1925078388,
                4068182383, 2162078206, 991336113, 2614888103, 633803317,
                3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
                944711139, 264347078, 2341262773, 604807628, 2007800933,
                770255983, 1495990901, 1249150122, 1856431235, 1555081692,
                3175218132, 1996064986, 2198950837, 2554220882, 3999719339,
                2821834349, 766784016, 2952996808, 2566594879, 3210313671,
                3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
                113926993, 3758326383, 338241895, 168717936, 666307205,
                1188179964, 773529912, 1546045734, 1294757372, 1522805485,
                1396182291, 2643833823, 1695183700, 2343527390, 1986661051,
                1014477480, 2177026350, 1206759142, 2456956037, 344077627,
                2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
                3505952657, 3345764771, 106217008, 3516065817, 3606008344,
                3600352804, 1432725776, 4094571909, 1467031594, 275423344,
                851169720, 430227734, 3100823752, 506948616, 1363258195,
                659060556, 3750685593, 883997877, 3785050280, 958139571,
                3318307427, 1322822218, 3812723403, 1537002063, 2003034995,
                1747873779, 3602036899, 1955562222, 1575990012, 2024104815,
                1125592928, 2227730452, 2716904306, 2361852424, 442776044,
                2428436474, 593698344, 2756734187, 3733110249, 3204031479,
                2999351573, 3329325298, 3815920427, 3391569614, 3928383900,
                3515267271, 566280711, 3940187606, 3454069534, 4118630271,
                4000239992, 116418474, 1914138554, 174292421, 2731055270,
                289380356, 3203993006, 460393269, 320620315, 685471733,
                587496836, 852142971, 1086792851, 1017036298, 365543100,
                1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
                4234509866, 1607167915, 987167468, 1816402316, 1246189591,
              ])),
                (this.I = new s(
                  this.convert([
                    1779033703, 4089235720, 3144134277, 2227873595, 1013904242,
                    4271175723, 2773480762, 1595750129, 1359893119, 2917565137,
                    2600822924, 725511199, 528734635, 4215389547, 1541459225,
                    327033209,
                  ]),
                )),
                (this.W = (function () {
                  var t, e;
                  for (e = [], t = 0; t < 80; ++t) e.push(new o(0, 0));
                  return e;
                })()));
            }
            return (
              (t.convert = function (t) {
                var e, n, r, i;
                for (i = [], e = n = 0, r = t.length; n < r; e = n += 2)
                  i.push(new o(t[e], t[e + 1]));
                return i;
              }),
              (t.prototype.convert = function (e) {
                return t.convert(e);
              }),
              t
            );
          })()),
          (e.Global = t),
          (u = new t()),
          (e.SHA512 = i =
            (function (t) {
              function e() {
                return e.__super__.constructor.apply(this, arguments);
              }
              return (
                f(e, t),
                (e.blockSize = 32),
                (e.prototype.blockSize = e.blockSize),
                (e.output_size = 64),
                (e.prototype.output_size = e.output_size),
                (e.prototype._doReset = function () {
                  return (this._hash = u.I.clone());
                }),
                (e.prototype._doProcessBlock = function (t, e) {
                  var n,
                    r,
                    i,
                    o,
                    s,
                    c,
                    a,
                    f,
                    l,
                    h,
                    p,
                    y,
                    _,
                    d,
                    g,
                    v,
                    w,
                    m,
                    b,
                    k,
                    S,
                    x,
                    B,
                    P,
                    E,
                    A,
                    D,
                    z,
                    F,
                    O,
                    T,
                    I,
                    N,
                    j,
                    C,
                    U,
                    M,
                    R,
                    K,
                    H,
                    $,
                    q,
                    L,
                    X,
                    W,
                    V,
                    J,
                    G,
                    Z,
                    Y,
                    Q,
                    tt,
                    et,
                    nt,
                    rt,
                    it,
                    ot,
                    st,
                    ut,
                    ct,
                    at,
                    ft,
                    lt,
                    ht,
                    pt,
                    yt,
                    _t,
                    dt,
                    gt,
                    vt,
                    wt,
                    mt,
                    bt,
                    kt,
                    St,
                    xt,
                    Bt,
                    Pt;
                  for (
                    n = this._hash.words,
                      F = u.W,
                      r = n[0],
                      s = n[1],
                      f = n[2],
                      p = n[3],
                      d = n[4],
                      w = n[5],
                      k = n[6],
                      B = n[7],
                      i = r.high,
                      o = r.low,
                      c = s.high,
                      a = s.low,
                      l = f.high,
                      h = f.low,
                      y = p.high,
                      _ = p.low,
                      g = d.high,
                      v = d.low,
                      m = w.high,
                      b = w.low,
                      S = k.high,
                      x = k.low,
                      P = B.high,
                      E = B.low,
                      K = i,
                      H = o,
                      $ = c,
                      q = a,
                      L = l,
                      V = h,
                      J = y,
                      G = _,
                      Z = g,
                      Y = v,
                      Q = m,
                      tt = b,
                      lt = S,
                      ht = x,
                      pt = P,
                      yt = E,
                      _t = Pt = 0;
                    Pt < 80;
                    _t = ++Pt
                  )
                    ((O = F[_t]),
                      _t < 16
                        ? ((M = O.high = 0 | t[e + 2 * _t]),
                          (R = O.low = 0 | t[e + 2 * _t + 1]))
                        : ((rt = F[_t - 15]),
                          (it = rt.high),
                          (ot = rt.low),
                          (et =
                            ((it >>> 1) | (ot << 31)) ^
                            ((it >>> 8) | (ot << 24)) ^
                            (it >>> 7)),
                          (nt =
                            ((ot >>> 1) | (it << 31)) ^
                            ((ot >>> 8) | (it << 24)) ^
                            ((ot >>> 7) | (it << 25))),
                          (ct = F[_t - 2]),
                          (at = ct.high),
                          (ft = ct.low),
                          (st =
                            ((at >>> 19) | (ft << 13)) ^
                            ((at << 3) | (ft >>> 29)) ^
                            (at >>> 6)),
                          (ut =
                            ((ft >>> 19) | (at << 13)) ^
                            ((ft << 3) | (at >>> 29)) ^
                            ((ft >>> 6) | (at << 26))),
                          (j = F[_t - 7]),
                          (C = j.high),
                          (U = j.low),
                          (T = F[_t - 16]),
                          (I = T.high),
                          (N = T.low),
                          (R = nt + U),
                          (M = et + C + (R >>> 0 < nt >>> 0 ? 1 : 0)),
                          (R += ut),
                          (M = M + st + (R >>> 0 < ut >>> 0 ? 1 : 0)),
                          (R += N),
                          (M = M + I + (R >>> 0 < N >>> 0 ? 1 : 0)),
                          (O.high = M),
                          (O.low = R)),
                      (X = (Z & Q) ^ (~Z & lt)),
                      (W = (Y & tt) ^ (~Y & ht)),
                      (dt = (K & $) ^ (K & L) ^ ($ & L)),
                      (gt = (H & q) ^ (H & V) ^ (q & V)),
                      (vt =
                        ((K >>> 28) | (H << 4)) ^
                        ((K << 30) | (H >>> 2)) ^
                        ((K << 25) | (H >>> 7))),
                      (wt =
                        ((H >>> 28) | (K << 4)) ^
                        ((H << 30) | (K >>> 2)) ^
                        ((H << 25) | (K >>> 7))),
                      (mt =
                        ((Z >>> 14) | (Y << 18)) ^
                        ((Z >>> 18) | (Y << 14)) ^
                        ((Z << 23) | (Y >>> 9))),
                      (bt =
                        ((Y >>> 14) | (Z << 18)) ^
                        ((Y >>> 18) | (Z << 14)) ^
                        ((Y << 23) | (Z >>> 9))),
                      (A = u.K[_t]),
                      (D = A.high),
                      (z = A.low),
                      (St = yt + bt),
                      (kt = pt + mt + (St >>> 0 < yt >>> 0 ? 1 : 0)),
                      (St += W),
                      (kt = kt + X + (St >>> 0 < W >>> 0 ? 1 : 0)),
                      (St += z),
                      (kt = kt + D + (St >>> 0 < z >>> 0 ? 1 : 0)),
                      (St += R),
                      (kt = kt + M + (St >>> 0 < R >>> 0 ? 1 : 0)),
                      (Bt = wt + gt),
                      (xt = vt + dt + (Bt >>> 0 < wt >>> 0 ? 1 : 0)),
                      (pt = lt),
                      (yt = ht),
                      (lt = Q),
                      (ht = tt),
                      (Q = Z),
                      (tt = Y),
                      (Y = (G + St) | 0),
                      (Z = (J + kt + (Y >>> 0 < G >>> 0 ? 1 : 0)) | 0),
                      (J = L),
                      (G = V),
                      (L = $),
                      (V = q),
                      ($ = K),
                      (q = H),
                      (H = (St + Bt) | 0),
                      (K = (kt + xt + (H >>> 0 < St >>> 0 ? 1 : 0)) | 0));
                  return (
                    (o = r.low = o + H),
                    (r.high = i + K + (o >>> 0 < H >>> 0 ? 1 : 0)),
                    (a = s.low = a + q),
                    (s.high = c + $ + (a >>> 0 < q >>> 0 ? 1 : 0)),
                    (h = f.low = h + V),
                    (f.high = l + L + (h >>> 0 < V >>> 0 ? 1 : 0)),
                    (_ = p.low = _ + G),
                    (p.high = y + J + (_ >>> 0 < G >>> 0 ? 1 : 0)),
                    (v = d.low = v + Y),
                    (d.high = g + Z + (v >>> 0 < Y >>> 0 ? 1 : 0)),
                    (b = w.low = b + tt),
                    (w.high = m + Q + (b >>> 0 < tt >>> 0 ? 1 : 0)),
                    (x = k.low = x + ht),
                    (k.high = S + lt + (x >>> 0 < ht >>> 0 ? 1 : 0)),
                    (E = B.low = E + yt),
                    (B.high = P + pt + (E >>> 0 < yt >>> 0 ? 1 : 0))
                  );
                }),
                (e.prototype._doFinalize = function () {
                  var t, e, n;
                  return (
                    (t = this._data.words),
                    (n = 8 * this._nDataBytes),
                    (e = 8 * this._data.sigBytes),
                    (t[e >>> 5] |= 128 << (24 - (e % 32))),
                    (t[30 + (((e + 128) >>> 10) << 5)] = Math.floor(
                      n / 4294967296,
                    )),
                    (t[31 + (((e + 128) >>> 10) << 5)] = n),
                    (this._data.sigBytes = 4 * t.length),
                    this._process(),
                    this._hash.toX32()
                  );
                }),
                (e.prototype.copy_to = function (t) {
                  return (
                    e.__super__.copy_to.call(this, t),
                    (t._hash = this._hash.clone())
                  );
                }),
                (e.prototype.clone = function () {
                  var t;
                  return ((t = new e()), this.copy_to(t), t);
                }),
                e
              );
            })(r)),
          (e.transform = function (t) {
            var e;
            return ((e = new i().finalize(t)), t.scrub(), e);
          }));
      }).call(this);
    },
    4594: function (t, e, n) {
      (function (t) {
        (function () {
          var r,
            i,
            o,
            s,
            u,
            c,
            a,
            f,
            l,
            h,
            p,
            y,
            _,
            d = {}.hasOwnProperty,
            g = function (t, e) {
              for (var n in e) d.call(e, n) && (t[n] = e[n]);
              function r() {
                this.constructor = t;
              }
              return (
                (r.prototype = e.prototype),
                (t.prototype = new r()),
                (t.__super__ = e.prototype),
                t
              );
            };
          ((p = n(3207)),
            (_ = n(2989)),
            (l = _.endian_reverse),
            (a = _.WordArray),
            (i = n(4879).Counter),
            (h = n(3236).fixup_uint32),
            (c = n(3361).StreamCipher),
            (y = n(3236)),
            (f = function (t, e) {
              var n, r, i, o;
              for (r = i = 0, o = e.length; i < o; r = ++i)
                ((n = e[r]), (t[r] += n));
              return !1;
            }),
            (s = (function () {
              function t(t) {
                this.rounds = t;
              }
              return (
                (t.prototype._core = function (t) {
                  var e, n, r, i, o, s, u, c, a, f, l, h, p, y, _, d, g, v, w;
                  for (
                    n = t[0],
                      r = t[1],
                      f = t[2],
                      l = t[3],
                      h = t[4],
                      p = t[5],
                      y = t[6],
                      _ = t[7],
                      d = t[8],
                      g = t[9],
                      i = t[10],
                      o = t[11],
                      s = t[12],
                      u = t[13],
                      c = t[14],
                      a = t[15],
                      v = 0,
                      w = this.rounds;
                    v < w;
                    v += 2
                  )
                    ((e = (n + s) | 0),
                      (h ^= (e << 7) | (e >>> 25)),
                      (e = (h + n) | 0),
                      (d ^= (e << 9) | (e >>> 23)),
                      (e = (d + h) | 0),
                      (s ^= (e << 13) | (e >>> 19)),
                      (e = (s + d) | 0),
                      (n ^= (e << 18) | (e >>> 14)),
                      (e = (p + r) | 0),
                      (g ^= (e << 7) | (e >>> 25)),
                      (e = (g + p) | 0),
                      (u ^= (e << 9) | (e >>> 23)),
                      (e = (u + g) | 0),
                      (r ^= (e << 13) | (e >>> 19)),
                      (e = (r + u) | 0),
                      (p ^= (e << 18) | (e >>> 14)),
                      (e = (i + y) | 0),
                      (c ^= (e << 7) | (e >>> 25)),
                      (e = (c + i) | 0),
                      (f ^= (e << 9) | (e >>> 23)),
                      (e = (f + c) | 0),
                      (y ^= (e << 13) | (e >>> 19)),
                      (e = (y + f) | 0),
                      (i ^= (e << 18) | (e >>> 14)),
                      (e = (a + o) | 0),
                      (l ^= (e << 7) | (e >>> 25)),
                      (e = (l + a) | 0),
                      (_ ^= (e << 9) | (e >>> 23)),
                      (e = (_ + l) | 0),
                      (o ^= (e << 13) | (e >>> 19)),
                      (e = (o + _) | 0),
                      (a ^= (e << 18) | (e >>> 14)),
                      (e = (n + l) | 0),
                      (r ^= (e << 7) | (e >>> 25)),
                      (e = (r + n) | 0),
                      (f ^= (e << 9) | (e >>> 23)),
                      (e = (f + r) | 0),
                      (l ^= (e << 13) | (e >>> 19)),
                      (e = (l + f) | 0),
                      (n ^= (e << 18) | (e >>> 14)),
                      (e = (p + h) | 0),
                      (y ^= (e << 7) | (e >>> 25)),
                      (e = (y + p) | 0),
                      (_ ^= (e << 9) | (e >>> 23)),
                      (e = (_ + y) | 0),
                      (h ^= (e << 13) | (e >>> 19)),
                      (e = (h + _) | 0),
                      (p ^= (e << 18) | (e >>> 14)),
                      (e = (i + g) | 0),
                      (o ^= (e << 7) | (e >>> 25)),
                      (e = (o + i) | 0),
                      (d ^= (e << 9) | (e >>> 23)),
                      (e = (d + o) | 0),
                      (g ^= (e << 13) | (e >>> 19)),
                      (e = (g + d) | 0),
                      (i ^= (e << 18) | (e >>> 14)),
                      (e = (a + c) | 0),
                      (s ^= (e << 7) | (e >>> 25)),
                      (e = (s + a) | 0),
                      (u ^= (e << 9) | (e >>> 23)),
                      (e = (u + s) | 0),
                      (c ^= (e << 13) | (e >>> 19)),
                      (e = (c + u) | 0),
                      (a ^= (e << 18) | (e >>> 14)));
                  return [n, r, f, l, h, p, y, _, d, g, i, o, s, u, c, a];
                }),
                t
              );
            })()),
            (o = (function (e) {
              function n(t, e) {
                var r;
                if (
                  (n.__super__.constructor.call(this, 20),
                  (this.key = t.clone().endian_reverse()),
                  (this.nonce = e.clone().endian_reverse()),
                  (16 !== this.key.sigBytes || 8 !== this.nonce.sigBytes) &&
                    (32 !== this.key.sigBytes ||
                      (8 !== (r = this.nonce.sigBytes) && 24 !== r)))
                )
                  throw new Error("Bad key/nonce lengths");
                (24 === this.nonce.sigBytes && this.xsalsa_setup(),
                  (this.input = this.key_iv_setup(this.nonce, this.key)),
                  this._reset());
              }
              return (
                g(n, e),
                (n.prototype.sigma = a.from_buffer_le(
                  t.from("expand 32-byte k"),
                )),
                (n.prototype.tau = a.from_buffer_le(
                  t.from("expand 16-byte k"),
                )),
                (n.blockSize = 64),
                (n.prototype.blockSize = n.blockSize),
                (n.keySize = 32),
                (n.prototype.keySize = n.keySize),
                (n.ivSize = 24),
                (n.prototype.ivSize = n.ivSize),
                (n.prototype.scrub = function () {
                  return (
                    this.key.scrub(),
                    this.nonce.scrub(),
                    y.scrub_vec(this.input)
                  );
                }),
                (n.prototype.xsalsa_setup = function () {
                  var t;
                  return (
                    (t = new a(this.nonce.words.slice(0, 4))),
                    (this.nonce = new a(this.nonce.words.slice(4))),
                    (this.key = this.hsalsa20(t, this.key))
                  );
                }),
                (n.prototype.hsalsa20 = function (t, e) {
                  var n, r, i, o;
                  return (
                    (i = this.key_iv_setup(t, e)),
                    (i[8] = t.words[2]),
                    (i[9] = t.words[3]),
                    (o = this._core(i)),
                    (r = [0, 5, 10, 15, 6, 7, 8, 9]),
                    (o = (function () {
                      var t, e, i;
                      for (i = [], t = 0, e = r.length; t < e; t++)
                        ((n = r[t]), i.push(h(o[n])));
                      return i;
                    })()),
                    y.scrub_vec(i),
                    new a(o)
                  );
                }),
                (n.prototype.key_iv_setup = function (t, e) {
                  var n, r, i, o, s, u, c, a;
                  for (o = [], i = s = 0; s < 4; i = ++s) o[i + 1] = e.words[i];
                  for (
                    a =
                      32 === e.sigBytes
                        ? [this.sigma, e.words.slice(4)]
                        : [this.tau, e.words],
                      r = a[0],
                      n = a[1],
                      i = u = 0;
                    u < 4;
                    i = ++u
                  )
                    o[i + 11] = n[i];
                  for (i = c = 0; c < 4; i = ++c) o[5 * i] = r.words[i];
                  return ((o[6] = t.words[0]), (o[7] = t.words[1]), o);
                }),
                (n.prototype.counter_setup = function () {
                  return (
                    (this.input[8] = this.counter.get().words[0]),
                    (this.input[9] = this.counter.get().words[1])
                  );
                }),
                (n.prototype._reset = function () {
                  return (this.counter = new i({ len: 2 }));
                }),
                (n.prototype._generateBlock = function () {
                  var t;
                  return (
                    this.counter_setup(),
                    (t = this._core(this.input)),
                    f(t, this.input),
                    this.counter.inc_le(),
                    t
                  );
                }),
                n
              );
            })(s)),
            (e.Salsa20WordStream = u =
              (function (t) {
                function e() {
                  return e.__super__.constructor.apply(this, arguments);
                }
                return (
                  g(e, t),
                  (e.prototype._reset = function () {
                    return e.__super__._reset.call(this);
                  }),
                  (e.prototype.getWordArray = function (t) {
                    var e, n, r, i, o, s, u, c;
                    for (
                      null == t || t === this.blockSize
                        ? (o = this._generateBlock())
                        : ((r = Math.ceil(t / this.blockSize)),
                          (e = function () {
                            var t, e;
                            for (
                              e = [], n = t = 0;
                              0 <= r ? t < r : t > r;
                              n = 0 <= r ? ++t : --t
                            )
                              e.push(this._generateBlock());
                            return e;
                          }.call(this)),
                          (o = (c = []).concat.apply(c, e))),
                        n = s = 0,
                        u = o.length;
                      s < u;
                      n = ++s
                    )
                      ((i = o[n]), (o[n] = l(i)));
                    return new a(o, t);
                  }),
                  e
                );
              })(o)),
            (e.Salsa20 = (function (e) {
              function n() {
                return n.__super__.constructor.apply(this, arguments);
              }
              return (
                g(n, e),
                (n.prototype._reset = function () {
                  return (
                    n.__super__._reset.call(this),
                    (this._i = this.blockSize)
                  );
                }),
                (n.prototype.getBytes = function (e) {
                  var n, r, i;
                  if (
                    (null == e && (e = this.blockSize),
                    (i = []),
                    (n = this.blockSize),
                    this._i === n && e === n)
                  )
                    return this._generateBlockBuffer();
                  while (e > 0)
                    (this._i === n &&
                      (this._generateBlockBuffer(), (this._i = 0)),
                      (r = Math.min(e, n - this._i)),
                      i.push(
                        r === n
                          ? this._buf
                          : this._buf.slice(this._i, this._i + r),
                      ),
                      (this._i += r),
                      (e -= r));
                  return t.concat(i);
                }),
                (n.prototype._generateBlockBuffer = function () {
                  var e, n, r, i, o;
                  for (
                    this._buf = t.alloc(this.blockSize),
                      r = this._generateBlock(),
                      n = i = 0,
                      o = r.length;
                    i < o;
                    n = ++i
                  )
                    ((e = r[n]), this._buf.writeUInt32LE(h(e), 4 * n));
                  return this._buf;
                }),
                n
              );
            })(o)),
            (e.Cipher = r =
              (function (t) {
                function e(t) {
                  var n, r;
                  ((r = t.key),
                    (n = t.iv),
                    e.__super__.constructor.call(this),
                    (this.salsa = new u(r, n)),
                    (this.bsiw = this.salsa.blockSize / 4));
                }
                return (
                  g(e, t),
                  (e.prototype.scrub = function () {
                    return this.salsa.scrub();
                  }),
                  (e.prototype.get_pad = function () {
                    var t;
                    return ((t = this.salsa.getWordArray()), t);
                  }),
                  e
                );
              })(c)),
            (e.encrypt = function (t) {
              var e, n, i, o, s;
              return (
                (o = t.key),
                (i = t.iv),
                (n = t.input),
                (e = new r({ key: o, iv: i })),
                (s = e.encrypt(n)),
                e.scrub(),
                s
              );
            }),
            (e.bulk_encrypt = function (t, e) {
              var n, i, o, s, u, c, a, f;
              ((a = p.findDeferral(arguments)),
                (s = t.key),
                (o = t.iv),
                (i = t.input),
                (u = t.progress_hook),
                (n = new r({ key: s, iv: o })),
                (function (t) {
                  return function (t) {
                    ((f = new p.Deferrals(t, {
                      parent: a,
                      filename:
                        "/Users/max/src/keybase/triplesec/src/salsa20.iced",
                    })),
                      n.bulk_encrypt(
                        { input: i, progress_hook: u, what: "salsa20" },
                        f.defer({
                          assign_fn: (function () {
                            return function () {
                              return (c = arguments[0]);
                            };
                          })(),
                          lineno: 256,
                        }),
                      ),
                      f._fulfill());
                  };
                })()(
                  (function (t) {
                    return function () {
                      return (n.scrub(), e(c));
                    };
                  })(),
                ));
            }),
            (e.Salsa20InnerCore = s),
            (e.endian_reverse = l),
            (e.asum = f));
        }).call(this);
      }).call(this, n(2).Buffer);
    },
    4595: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a = {}.hasOwnProperty,
          f = function (t, e) {
            for (var n in e) a.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((c = n(2989)),
          (o = c.WordArray),
          (s = c.X64Word),
          c.X64WordArray,
          (r = n(3361).Hasher),
          (t = (function () {
            function t() {
              ((this.RHO_OFFSETS = []),
                (this.PI_INDEXES = []),
                (this.ROUND_CONSTANTS = []),
                (this.T = []),
                this.compute_rho_offsets(),
                this.compute_pi_indexes(),
                this.compute_round_constants(),
                this.make_reusables());
            }
            return (
              (t.prototype.compute_rho_offsets = function () {
                var t, e, n, r, i, o, s;
                for (r = 1, i = 0, s = [], n = o = 0; o < 24; n = ++o)
                  ((this.RHO_OFFSETS[r + 5 * i] =
                    (((n + 1) * (n + 2)) / 2) % 64),
                    (t = i % 5),
                    (e = (2 * r + 3 * i) % 5),
                    (r = t),
                    s.push((i = e)));
                return s;
              }),
              (t.prototype.compute_pi_indexes = function () {
                var t, e, n, r;
                for (r = [], t = n = 0; n < 5; t = ++n)
                  r.push(
                    function () {
                      var n, r;
                      for (r = [], e = n = 0; n < 5; e = ++n)
                        r.push(
                          (this.PI_INDEXES[t + 5 * e] =
                            e + ((2 * t + 3 * e) % 5) * 5),
                        );
                      return r;
                    }.call(this),
                  );
                return r;
              }),
              (t.prototype.compute_round_constants = function () {
                var t, e, n, r, i, o, u, c, a;
                for (t = 1, a = [], n = u = 0; u < 24; n = ++u) {
                  for (o = 0, i = 0, r = c = 0; c < 7; r = ++c)
                    (1 & t &&
                      ((e = (1 << r) - 1),
                      e < 32 ? (i ^= 1 << e) : (o ^= 1 << (e - 32))),
                      128 & t ? (t = (t << 1) ^ 113) : (t <<= 1));
                  a.push((this.ROUND_CONSTANTS[n] = new s(o, i)));
                }
                return a;
              }),
              (t.prototype.make_reusables = function () {
                return (this.T = (function () {
                  var t, e;
                  for (e = [], t = 0; t < 25; ++t) e.push(new s(0, 0));
                  return e;
                })());
              }),
              t
            );
          })()),
          (u = new t()),
          (e.KECCAK = i =
            (function (t) {
              function e() {
                return e.__super__.constructor.apply(this, arguments);
              }
              return (
                f(e, t),
                (e.outputLength = 512),
                (e.prototype.outputLength = e.outputLength),
                (e.blockSize = (1600 - 2 * e.outputLength) / 32),
                (e.prototype.blockSize = e.blockSize),
                (e.output_size = e.outputLength / 8),
                (e.prototype.output_size = e.output_size),
                (e.prototype.pad = 1),
                (e.prototype._doReset = function () {
                  return (this._state = (function () {
                    var t, e;
                    for (e = [], t = 0; t < 25; ++t) e.push(new s(0, 0));
                    return e;
                  })());
                }),
                (e.prototype._doProcessBlock = function (t, e) {
                  var n,
                    r,
                    i,
                    o,
                    s,
                    c,
                    a,
                    f,
                    l,
                    h,
                    p,
                    y,
                    _,
                    d,
                    g,
                    v,
                    w,
                    m,
                    b,
                    k,
                    S,
                    x,
                    B,
                    P,
                    E,
                    A,
                    D,
                    z,
                    F,
                    O,
                    T,
                    I,
                    N,
                    j,
                    C,
                    U,
                    M,
                    R;
                  for (
                    n = u, B = this._state, b = this.blockSize / 2, d = F = 0;
                    0 <= b ? F < b : F > b;
                    d = 0 <= b ? ++F : --F
                  )
                    ((r = t[e + 2 * d]),
                      (i = t[e + 2 * d + 1]),
                      (r =
                        (16711935 & ((r << 8) | (r >>> 24))) |
                        (4278255360 & ((r << 24) | (r >>> 8)))),
                      (i =
                        (16711935 & ((i << 8) | (i >>> 24))) |
                        (4278255360 & ((i << 24) | (i >>> 8)))),
                      (g = B[d]),
                      (g.high ^= i),
                      (g.low ^= r));
                  for (R = [], S = O = 0; O < 24; S = ++O) {
                    for (D = T = 0; T < 5; D = ++T) {
                      for (A = E = 0, z = I = 0; I < 5; z = ++I)
                        ((g = B[D + 5 * z]), (A ^= g.high), (E ^= g.low));
                      ((a = n.T[D]), (a.high = A), (a.low = E));
                    }
                    for (D = N = 0; N < 5; D = ++N)
                      for (
                        _ = n.T[(D + 4) % 5],
                          f = n.T[(D + 1) % 5],
                          p = f.high,
                          h = f.low,
                          A = _.high ^ ((p << 1) | (h >>> 31)),
                          E = _.low ^ ((h << 1) | (p >>> 31)),
                          z = j = 0;
                        j < 5;
                        z = ++j
                      )
                        ((g = B[D + 5 * z]), (g.high ^= A), (g.low ^= E));
                    for (v = C = 1; C < 25; v = ++C)
                      ((g = B[v]),
                        (m = g.high),
                        (w = g.low),
                        (k = n.RHO_OFFSETS[v]),
                        k < 32
                          ? ((A = (m << k) | (w >>> (32 - k))),
                            (E = (w << k) | (m >>> (32 - k))))
                          : ((A = (w << (k - 32)) | (m >>> (64 - k))),
                            (E = (m << (k - 32)) | (w >>> (64 - k)))),
                        (c = n.T[n.PI_INDEXES[v]]),
                        (c.high = A),
                        (c.low = E));
                    for (
                      o = n.T[0],
                        P = B[0],
                        o.high = P.high,
                        o.low = P.low,
                        D = U = 0;
                      U < 5;
                      D = ++U
                    )
                      for (z = M = 0; M < 5; z = ++M)
                        ((v = D + 5 * z),
                          (g = B[v]),
                          (s = n.T[v]),
                          (l = n.T[((D + 1) % 5) + 5 * z]),
                          (y = n.T[((D + 2) % 5) + 5 * z]),
                          (g.high = s.high ^ (~l.high & y.high)),
                          (g.low = s.low ^ (~l.low & y.low)));
                    ((g = B[0]),
                      (x = n.ROUND_CONSTANTS[S]),
                      (g.high ^= x.high),
                      R.push((g.low ^= x.low)));
                  }
                  return R;
                }),
                (e.prototype._doFinalize = function () {
                  var t, e, n, r, i, s, u, c, a, f, l, h, p;
                  for (
                    e = this._data,
                      n = e.words,
                      8 * this._nDataBytes,
                      a = 8 * e.sigBytes,
                      t = 32 * this.blockSize,
                      n[a >>> 5] |= this.pad << (24 - (a % 32)),
                      n[((Math.ceil((a + 1) / t) * t) >>> 5) - 1] |= 128,
                      e.sigBytes = 4 * n.length,
                      this._process(),
                      h = this._state,
                      f = this.outputLength / 8,
                      l = f / 8,
                      r = [],
                      i = p = 0;
                    0 <= l ? p < l : p > l;
                    i = 0 <= l ? ++p : --p
                  )
                    ((s = h[i]),
                      (c = s.high),
                      (u = s.low),
                      (c =
                        (16711935 & ((c << 8) | (c >>> 24))) |
                        (4278255360 & ((c << 24) | (c >>> 8)))),
                      (u =
                        (16711935 & ((u << 8) | (u >>> 24))) |
                        (4278255360 & ((u << 24) | (u >>> 8)))),
                      r.push(u),
                      r.push(c));
                  return new o(r, f);
                }),
                (e.prototype.copy_to = function (t) {
                  var n;
                  return (
                    e.__super__.copy_to.call(this, t),
                    (t._state = function () {
                      var t, e, r, i;
                      for (
                        r = this._state, i = [], t = 0, e = r.length;
                        t < e;
                        t++
                      )
                        ((n = r[t]), i.push(n.clone()));
                      return i;
                    }.call(this))
                  );
                }),
                (e.prototype.scrub = function () {}),
                (e.prototype.clone = function () {
                  var t;
                  return ((t = new e()), this.copy_to(t), t);
                }),
                e
              );
            })(r)),
          (e.transform = function (t) {
            var e;
            return ((e = new i().finalize(t)), t.scrub(), e);
          }));
      }).call(this);
    },
    4879: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a = {}.hasOwnProperty,
          f = function (t, e) {
            for (var n in e) a.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((c = n(3207)),
          (o = n(2989).WordArray),
          (i = n(3361).StreamCipher),
          (r = (function () {
            function t(t) {
              var e, n;
              ((n = t.value),
                (e = t.len),
                (this._value =
                  null != n
                    ? n.clone()
                    : (null == e && (e = 2),
                      new o(
                        (function () {
                          var t, n;
                          for (
                            n = [], t = 0;
                            0 <= e ? t < e : t > e;
                            0 <= e ? ++t : --t
                          )
                            n.push(0);
                          return n;
                        })(),
                      ))));
            }
            return (
              (t.prototype.WORD_MAX = 4294967295),
              (t.prototype.inc = function () {
                var e, n;
                ((e = !0), (n = this._value.words.length - 1));
                while (e && n >= 0)
                  (++this._value.words[n] > t.WORD_MAX
                    ? (this._value.words[n] = 0)
                    : (e = !1),
                    n--);
                return this;
              }),
              (t.prototype.inc_le = function () {
                var e, n;
                ((e = !0), (n = 0));
                while (e && n < this._value.words.length)
                  (++this._value.words[n] > t.WORD_MAX
                    ? (this._value.words[n] = 0)
                    : (e = !1),
                    n++);
                return this;
              }),
              (t.prototype.get = function () {
                return this._value;
              }),
              (t.prototype.copy = function () {
                return this._value.clone();
              }),
              t
            );
          })()),
          (t = (function (t) {
            function e(t) {
              if (
                ((this.block_cipher = t.block_cipher),
                (this.iv = t.iv),
                e.__super__.constructor.call(this),
                (this.bsiw = this.block_cipher.blockSize / 4),
                this.iv.sigBytes !== this.block_cipher.blockSize)
              )
                throw new Error(
                  "IV is wrong length (" + this.iv.sigBytes + ")",
                );
              this.ctr = new r({ value: this.iv });
            }
            return (
              f(e, t),
              (e.prototype.scrub = function () {
                return this.block_cipher.scrub();
              }),
              (e.prototype.get_pad = function () {
                var t;
                return (
                  (t = this.ctr.copy()),
                  this.ctr.inc(),
                  this.block_cipher.encryptBlock(t.words),
                  t
                );
              }),
              e
            );
          })(i)),
          (u = function (e) {
            var n, r, i, o, s;
            return (
              (n = e.block_cipher),
              (o = e.iv),
              (i = e.input),
              (r = new t({ block_cipher: n, iv: o })),
              (s = r.encrypt(i)),
              r.scrub(),
              s
            );
          }),
          (s = function (e, n) {
            var r, i, o, s, u, a, f, l, h;
            ((l = c.findDeferral(arguments)),
              (r = e.block_cipher),
              (s = e.iv),
              (o = e.input),
              (u = e.progress_hook),
              (f = e.what),
              (i = new t({ block_cipher: r, iv: s })),
              (function (t) {
                return function (t) {
                  ((h = new c.Deferrals(t, {
                    parent: l,
                    filename: "/Users/max/src/keybase/triplesec/src/ctr.iced",
                  })),
                    i.bulk_encrypt(
                      { input: o, progress_hook: u, what: f },
                      h.defer({
                        assign_fn: (function () {
                          return function () {
                            return (a = arguments[0]);
                          };
                        })(),
                        lineno: 121,
                      }),
                    ),
                    h._fulfill());
                };
              })()(
                (function (t) {
                  return function () {
                    return n(a);
                  };
                })(),
              ));
          }),
          (e.Counter = r),
          (e.Cipher = t),
          (e.encrypt = u),
          (e.bulk_encrypt = s));
      }).call(this);
    },
    4885: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.decode = e.encode = e.unescape = e.escape = e.pad = void 0));
      const r = n(812);
      function i(t) {
        return `${t}${"=".repeat(4 - (t.length % 4 || 4))}`;
      }
      function o(t) {
        return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function s(t) {
        return i(t).replace(/-/g, "+").replace(/_/g, "/");
      }
      function u(t) {
        return o((0, r.fromByteArray)(new TextEncoder().encode(t)));
      }
      function c(t) {
        return new TextDecoder().decode((0, r.toByteArray)(i(s(t))));
      }
      ((e.pad = i),
        (e.escape = o),
        (e.unescape = s),
        (e.encode = u),
        (e.decode = c));
    },
    4886: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.InvalidTokenError = e.MissingParametersError = void 0));
      class MissingParametersError extends Error {
        constructor(t) {
          (super(),
            (this.name = "MissingParametersError"),
            (this.message = t || ""));
        }
      }
      e.MissingParametersError = MissingParametersError;
      class InvalidTokenError extends Error {
        constructor(t) {
          (super(),
            (this.name = "InvalidTokenError"),
            (this.message = t || ""));
        }
      }
      e.InvalidTokenError = InvalidTokenError;
    },
    5725: function (t, e) {
      (function () {
        t.exports = {
          k: "__iced_k",
          k_noop: "__iced_k_noop",
          param: "__iced_p_",
          ns: "iced",
          runtime: "runtime",
          Deferrals: "Deferrals",
          deferrals: "__iced_deferrals",
          fulfill: "_fulfill",
          b_while: "_break",
          t_while: "_while",
          c_while: "_continue",
          n_while: "_next",
          n_arg: "__iced_next_arg",
          defer_method: "defer",
          slot: "__slot",
          assign_fn: "assign_fn",
          autocb: "autocb",
          retslot: "ret",
          trace: "__iced_trace",
          passed_deferral: "__iced_passed_deferral",
          findDeferral: "findDeferral",
          lineno: "lineno",
          parent: "parent",
          filename: "filename",
          funcname: "funcname",
          catchExceptions: "catchExceptions",
          runtime_modes: [
            "node",
            "inline",
            "window",
            "none",
            "browserify",
            "interp",
          ],
          trampoline: "trampoline",
          context: "context",
          defer_arg: "__iced_defer_",
        };
      }).call(this);
    },
    5726: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u = {}.hasOwnProperty,
          c = function (t, e) {
            for (var n in e) u.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((r = n(3361).BlockCipher),
          (s = n(3236).scrub_vec),
          (o = (function () {
            function t() {
              ((this.SBOX = []),
                (this.INV_SBOX = []),
                (this.SUB_MIX = (function () {
                  var t, e;
                  for (e = [], t = 0; t < 4; ++t) e.push([]);
                  return e;
                })()),
                (this.INV_SUB_MIX = (function () {
                  var t, e;
                  for (e = [], t = 0; t < 4; ++t) e.push([]);
                  return e;
                })()),
                this.init(),
                (this.RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]));
            }
            return (
              (t.prototype.init = function () {
                var t, e, n, r, i, o, s, u, c, a;
                for (
                  t = (function () {
                    var t, n;
                    for (n = [], e = t = 0; t < 256; e = ++t)
                      e < 128 ? n.push(e << 1) : n.push((e << 1) ^ 283);
                    return n;
                  })(),
                    i = 0,
                    c = 0,
                    e = a = 0;
                  a < 256;
                  e = ++a
                )
                  ((n = c ^ (c << 1) ^ (c << 2) ^ (c << 3) ^ (c << 4)),
                    (n = (n >>> 8) ^ (255 & n) ^ 99),
                    (this.SBOX[i] = n),
                    (this.INV_SBOX[n] = i),
                    (o = t[i]),
                    (s = t[o]),
                    (u = t[s]),
                    (r = (257 * t[n]) ^ (16843008 * n)),
                    (this.SUB_MIX[0][i] = (r << 24) | (r >>> 8)),
                    (this.SUB_MIX[1][i] = (r << 16) | (r >>> 16)),
                    (this.SUB_MIX[2][i] = (r << 8) | (r >>> 24)),
                    (this.SUB_MIX[3][i] = r),
                    (r =
                      (16843009 * u) ^
                      (65537 * s) ^
                      (257 * o) ^
                      (16843008 * i)),
                    (this.INV_SUB_MIX[0][n] = (r << 24) | (r >>> 8)),
                    (this.INV_SUB_MIX[1][n] = (r << 16) | (r >>> 16)),
                    (this.INV_SUB_MIX[2][n] = (r << 8) | (r >>> 24)),
                    (this.INV_SUB_MIX[3][n] = r),
                    0 === i
                      ? (i = c = 1)
                      : ((i = o ^ t[t[t[u ^ o]]]), (c ^= t[t[c]])));
                return !0;
              }),
              t
            );
          })()),
          (i = new o()),
          (t = (function (t) {
            function e(t) {
              ((this._key = t.clone()), this._doReset());
            }
            return (
              c(e, t),
              (e.blockSize = 16),
              (e.prototype.blockSize = e.blockSize),
              (e.keySize = 32),
              (e.prototype.keySize = e.keySize),
              (e.ivSize = e.blockSize),
              (e.prototype.ivSize = e.ivSize),
              (e.prototype._doReset = function () {
                var t, e, n, r, o, s, u, c;
                for (
                  n = this._key.words,
                    e = this._key.sigBytes / 4,
                    this._nRounds = e + 6,
                    o = 4 * (this._nRounds + 1),
                    this._keySchedule = [],
                    r = u = 0;
                  0 <= o ? u < o : u > o;
                  r = 0 <= o ? ++u : --u
                )
                  this._keySchedule[r] =
                    r < e
                      ? n[r]
                      : ((s = this._keySchedule[r - 1]),
                        r % e === 0
                          ? ((s = (s << 8) | (s >>> 24)),
                            (s =
                              (i.SBOX[s >>> 24] << 24) |
                              (i.SBOX[(s >>> 16) & 255] << 16) |
                              (i.SBOX[(s >>> 8) & 255] << 8) |
                              i.SBOX[255 & s]),
                            (s ^= i.RCON[(r / e) | 0] << 24))
                          : e > 6 &&
                            r % e === 4 &&
                            (s =
                              (i.SBOX[s >>> 24] << 24) |
                              (i.SBOX[(s >>> 16) & 255] << 16) |
                              (i.SBOX[(s >>> 8) & 255] << 8) |
                              i.SBOX[255 & s]),
                        this._keySchedule[r - e] ^ s);
                for (
                  this._invKeySchedule = [], t = c = 0;
                  0 <= o ? c < o : c > o;
                  t = 0 <= o ? ++c : --c
                )
                  ((r = o - t),
                    (s = this._keySchedule[r - (t % 4 ? 0 : 4)]),
                    (this._invKeySchedule[t] =
                      t < 4 || r <= 4
                        ? s
                        : i.INV_SUB_MIX[0][i.SBOX[s >>> 24]] ^
                          i.INV_SUB_MIX[1][i.SBOX[(s >>> 16) & 255]] ^
                          i.INV_SUB_MIX[2][i.SBOX[(s >>> 8) & 255]] ^
                          i.INV_SUB_MIX[3][i.SBOX[255 & s]]));
                return !0;
              }),
              (e.prototype.encryptBlock = function (t, e) {
                return (
                  null == e && (e = 0),
                  this._doCryptBlock(t, e, this._keySchedule, i.SUB_MIX, i.SBOX)
                );
              }),
              (e.prototype.decryptBlock = function (t, e) {
                var n, r;
                return (
                  null == e && (e = 0),
                  (n = [t[e + 3], t[e + 1]]),
                  (t[e + 1] = n[0]),
                  (t[e + 3] = n[1]),
                  this._doCryptBlock(
                    t,
                    e,
                    this._invKeySchedule,
                    i.INV_SUB_MIX,
                    i.INV_SBOX,
                  ),
                  (r = [t[e + 3], t[e + 1]]),
                  (t[e + 1] = r[0]),
                  (t[e + 3] = r[1]),
                  r
                );
              }),
              (e.prototype.scrub = function () {
                return (
                  s(this._keySchedule),
                  s(this._invKeySchedule),
                  this._key.scrub()
                );
              }),
              (e.prototype._doCryptBlock = function (t, e, n, r, i) {
                var o, s, u, c, a, f, l, h, p, y, _;
                for (
                  s = t[e] ^ n[0],
                    u = t[e + 1] ^ n[1],
                    c = t[e + 2] ^ n[2],
                    a = t[e + 3] ^ n[3],
                    o = 4,
                    y = 1,
                    _ = this._nRounds;
                  1 <= _ ? y < _ : y > _;
                  1 <= _ ? ++y : --y
                )
                  ((f =
                    r[0][s >>> 24] ^
                    r[1][(u >>> 16) & 255] ^
                    r[2][(c >>> 8) & 255] ^
                    r[3][255 & a] ^
                    n[o++]),
                    (l =
                      r[0][u >>> 24] ^
                      r[1][(c >>> 16) & 255] ^
                      r[2][(a >>> 8) & 255] ^
                      r[3][255 & s] ^
                      n[o++]),
                    (h =
                      r[0][c >>> 24] ^
                      r[1][(a >>> 16) & 255] ^
                      r[2][(s >>> 8) & 255] ^
                      r[3][255 & u] ^
                      n[o++]),
                    (p =
                      r[0][a >>> 24] ^
                      r[1][(s >>> 16) & 255] ^
                      r[2][(u >>> 8) & 255] ^
                      r[3][255 & c] ^
                      n[o++]),
                    (s = f),
                    (u = l),
                    (c = h),
                    (a = p));
                return (
                  (f =
                    ((i[s >>> 24] << 24) |
                      (i[(u >>> 16) & 255] << 16) |
                      (i[(c >>> 8) & 255] << 8) |
                      i[255 & a]) ^
                    n[o++]),
                  (l =
                    ((i[u >>> 24] << 24) |
                      (i[(c >>> 16) & 255] << 16) |
                      (i[(a >>> 8) & 255] << 8) |
                      i[255 & s]) ^
                    n[o++]),
                  (h =
                    ((i[c >>> 24] << 24) |
                      (i[(a >>> 16) & 255] << 16) |
                      (i[(s >>> 8) & 255] << 8) |
                      i[255 & u]) ^
                    n[o++]),
                  (p =
                    ((i[a >>> 24] << 24) |
                      (i[(s >>> 16) & 255] << 16) |
                      (i[(u >>> 8) & 255] << 8) |
                      i[255 & c]) ^
                    n[o++]),
                  (t[e] = f),
                  (t[e + 1] = l),
                  (t[e + 2] = h),
                  (t[e + 3] = p)
                );
              }),
              e
            );
          })(r)),
          (e.AES = t));
      }).call(this);
    },
    5727: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s = {}.hasOwnProperty,
          u = function (t, e) {
            for (var n in e) s.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((t = n(3361).BlockCipher),
          (o = n(3236).scrub_vec),
          (i = (function () {
            function t() {
              ((this.P = [
                [
                  169, 103, 179, 232, 4, 253, 163, 118, 154, 146, 128, 120, 228,
                  221, 209, 56, 13, 198, 53, 152, 24, 247, 236, 108, 67, 117,
                  55, 38, 250, 19, 148, 72, 242, 208, 139, 48, 132, 84, 223, 35,
                  25, 91, 61, 89, 243, 174, 162, 130, 99, 1, 131, 46, 217, 81,
                  155, 124, 166, 235, 165, 190, 22, 12, 227, 97, 192, 140, 58,
                  245, 115, 44, 37, 11, 187, 78, 137, 107, 83, 106, 180, 241,
                  225, 230, 189, 69, 226, 244, 182, 102, 204, 149, 3, 86, 212,
                  28, 30, 215, 251, 195, 142, 181, 233, 207, 191, 186, 234, 119,
                  57, 175, 51, 201, 98, 113, 129, 121, 9, 173, 36, 205, 249,
                  216, 229, 197, 185, 77, 68, 8, 134, 231, 161, 29, 170, 237, 6,
                  112, 178, 210, 65, 123, 160, 17, 49, 194, 39, 144, 32, 246,
                  96, 255, 150, 92, 177, 171, 158, 156, 82, 27, 95, 147, 10,
                  239, 145, 133, 73, 238, 45, 79, 143, 59, 71, 135, 109, 70,
                  214, 62, 105, 100, 42, 206, 203, 47, 252, 151, 5, 122, 172,
                  127, 213, 26, 75, 14, 167, 90, 40, 20, 63, 41, 136, 60, 76, 2,
                  184, 218, 176, 23, 85, 31, 138, 125, 87, 199, 141, 116, 183,
                  196, 159, 114, 126, 21, 34, 18, 88, 7, 153, 52, 110, 80, 222,
                  104, 101, 188, 219, 248, 200, 168, 43, 64, 220, 254, 50, 164,
                  202, 16, 33, 240, 211, 93, 15, 0, 111, 157, 54, 66, 74, 94,
                  193, 224,
                ],
                [
                  117, 243, 198, 244, 219, 123, 251, 200, 74, 211, 230, 107, 69,
                  125, 232, 75, 214, 50, 216, 253, 55, 113, 241, 225, 48, 15,
                  248, 27, 135, 250, 6, 63, 94, 186, 174, 91, 138, 0, 188, 157,
                  109, 193, 177, 14, 128, 93, 210, 213, 160, 132, 7, 20, 181,
                  144, 44, 163, 178, 115, 76, 84, 146, 116, 54, 81, 56, 176,
                  189, 90, 252, 96, 98, 150, 108, 66, 247, 16, 124, 40, 39, 140,
                  19, 149, 156, 199, 36, 70, 59, 112, 202, 227, 133, 203, 17,
                  208, 147, 184, 166, 131, 32, 255, 159, 119, 195, 204, 3, 111,
                  8, 191, 64, 231, 43, 226, 121, 12, 170, 130, 65, 58, 234, 185,
                  228, 154, 164, 151, 126, 218, 122, 23, 102, 148, 161, 29, 61,
                  240, 222, 179, 11, 114, 167, 28, 239, 209, 83, 62, 143, 51,
                  38, 95, 236, 118, 42, 73, 129, 136, 238, 33, 196, 26, 235,
                  217, 197, 57, 153, 205, 173, 49, 139, 1, 24, 35, 221, 31, 78,
                  45, 249, 72, 79, 242, 101, 142, 120, 92, 88, 25, 141, 229,
                  152, 87, 103, 127, 5, 100, 175, 99, 182, 254, 245, 183, 60,
                  165, 206, 233, 104, 68, 224, 77, 67, 105, 41, 46, 172, 21, 89,
                  168, 10, 158, 110, 71, 223, 52, 53, 106, 207, 220, 34, 201,
                  192, 155, 137, 212, 237, 171, 18, 162, 13, 82, 187, 2, 47,
                  169, 215, 97, 30, 180, 80, 4, 246, 194, 22, 37, 134, 86, 85,
                  9, 190, 145,
                ],
              ]),
                (this.P_00 = 1),
                (this.P_01 = 0),
                (this.P_02 = 0),
                (this.P_03 = 1),
                (this.P_04 = 1),
                (this.P_10 = 0),
                (this.P_11 = 0),
                (this.P_12 = 1),
                (this.P_13 = 1),
                (this.P_14 = 0),
                (this.P_20 = 1),
                (this.P_21 = 1),
                (this.P_22 = 0),
                (this.P_23 = 0),
                (this.P_24 = 0),
                (this.P_30 = 0),
                (this.P_31 = 1),
                (this.P_32 = 1),
                (this.P_33 = 0),
                (this.P_34 = 1),
                (this.GF256_FDBK = 361),
                (this.GF256_FDBK_2 = this.GF256_FDBK / 2),
                (this.GF256_FDBK_4 = this.GF256_FDBK / 4),
                (this.RS_GF_FDBK = 333),
                (this.SK_STEP = 33686018),
                (this.SK_BUMP = 16843009),
                (this.SK_ROTL = 9));
            }
            return t;
          })()),
          (r = new i()),
          (e.TwoFish = (function (t) {
            function e(t) {
              ((this._key = t.clone()),
                (this.gMDS0 = []),
                (this.gMDS1 = []),
                (this.gMDS2 = []),
                (this.gMDS3 = []),
                (this.gSubKeys = []),
                (this.gSBox = []),
                (this.k64Cnt = 0),
                this._doReset());
            }
            return (
              u(e, t),
              (e.blockSize = 16),
              (e.prototype.blockSize = e.blockSize),
              (e.keySize = 32),
              (e.prototype.keySize = e.keySize),
              (e.ivSize = e.blockSize),
              (e.prototype.ivSize = e.ivSize),
              (e.prototype.getByte = function (t, e) {
                return (t >>> (8 * e)) & 255;
              }),
              (e.prototype.switchEndianness = function (t) {
                return (
                  ((255 & t) << 24) |
                  (((t >> 8) & 255) << 16) |
                  (((t >> 16) & 255) << 8) |
                  ((t >> 24) & 255)
                );
              }),
              (e.prototype.LFSR1 = function (t) {
                return (t >> 1) ^ (0 !== (1 & t) ? r.GF256_FDBK_2 : 0);
              }),
              (e.prototype.LFSR2 = function (t) {
                return (
                  (t >> 2) ^
                  (0 !== (2 & t) ? r.GF256_FDBK_2 : 0) ^
                  (0 !== (1 & t) ? r.GF256_FDBK_4 : 0)
                );
              }),
              (e.prototype.Mx_X = function (t) {
                return t ^ this.LFSR2(t);
              }),
              (e.prototype.Mx_Y = function (t) {
                return t ^ this.LFSR1(t) ^ this.LFSR2(t);
              }),
              (e.prototype.RS_rem = function (t) {
                var e, n, i;
                return (
                  (e = (t >>> 24) & 255),
                  (n = 255 & ((e << 1) ^ (0 !== (128 & e) ? r.RS_GF_FDBK : 0))),
                  (i =
                    (e >>> 1) ^ (0 !== (1 & e) ? r.RS_GF_FDBK >>> 1 : 0) ^ n),
                  (t << 8) ^ (i << 24) ^ (n << 16) ^ (i << 8) ^ e
                );
              }),
              (e.prototype.RS_MDS_Encode = function (t, e) {
                var n, r, i;
                for (n = e, r = 0; r < 4; ++r) n = this.RS_rem(n);
                for (n ^= t, i = 0; i < 4; ++i) n = this.RS_rem(n);
                return n;
              }),
              (e.prototype.F32 = function (t, e) {
                var n, i, o, s, u, c, a, f, l, h;
                return (
                  (n = this.getByte(t, 0)),
                  (i = this.getByte(t, 1)),
                  (o = this.getByte(t, 2)),
                  (s = this.getByte(t, 3)),
                  (u = e[0]),
                  (c = e[1]),
                  (a = e[2]),
                  (f = e[3]),
                  (l = 3 & this.k64Cnt),
                  (h =
                    1 === l
                      ? this.gMDS0[
                          (255 & r.P[r.P_01][n]) ^ this.getByte(u, 0)
                        ] ^
                        this.gMDS1[
                          (255 & r.P[r.P_11][i]) ^ this.getByte(u, 1)
                        ] ^
                        this.gMDS2[
                          (255 & r.P[r.P_21][o]) ^ this.getByte(u, 2)
                        ] ^
                        this.gMDS3[(255 & r.P[r.P_31][s]) ^ this.getByte(u, 3)]
                      : (0 === l &&
                          ((n = (255 & r.P[r.P_04][n]) ^ this.getByte(f, 0)),
                          (i = (255 & r.P[r.P_14][i]) ^ this.getByte(f, 1)),
                          (o = (255 & r.P[r.P_24][o]) ^ this.getByte(f, 2)),
                          (s = (255 & r.P[r.P_34][s]) ^ this.getByte(f, 3))),
                        (0 === l || 3 === l) &&
                          ((n = (255 & r.P[r.P_03][n]) ^ this.getByte(a, 0)),
                          (i = (255 & r.P[r.P_13][i]) ^ this.getByte(a, 1)),
                          (o = (255 & r.P[r.P_23][o]) ^ this.getByte(a, 2)),
                          (s = (255 & r.P[r.P_33][s]) ^ this.getByte(a, 3))),
                        this.gMDS0[
                          (255 &
                            r.P[r.P_01][
                              (255 & r.P[r.P_02][n]) ^ this.getByte(c, 0)
                            ]) ^
                            this.getByte(u, 0)
                        ] ^
                          this.gMDS1[
                            (255 &
                              r.P[r.P_11][
                                (255 & r.P[r.P_12][i]) ^ this.getByte(c, 1)
                              ]) ^
                              this.getByte(u, 1)
                          ] ^
                          this.gMDS2[
                            (255 &
                              r.P[r.P_21][
                                (255 & r.P[r.P_22][o]) ^ this.getByte(c, 2)
                              ]) ^
                              this.getByte(u, 2)
                          ] ^
                          this.gMDS3[
                            (255 &
                              r.P[r.P_31][
                                (255 & r.P[r.P_32][s]) ^ this.getByte(c, 3)
                              ]) ^
                              this.getByte(u, 3)
                          ])),
                  h
                );
              }),
              (e.prototype.Fe32_0 = function (t) {
                return (
                  this.gSBox[0 + 2 * (255 & t)] ^
                  this.gSBox[1 + 2 * ((t >>> 8) & 255)] ^
                  this.gSBox[512 + 2 * ((t >>> 16) & 255)] ^
                  this.gSBox[513 + 2 * ((t >>> 24) & 255)]
                );
              }),
              (e.prototype.Fe32_3 = function (t) {
                return (
                  this.gSBox[0 + 2 * ((t >>> 24) & 255)] ^
                  this.gSBox[1 + 2 * (255 & t)] ^
                  this.gSBox[512 + 2 * ((t >>> 8) & 255)] ^
                  this.gSBox[513 + 2 * ((t >>> 16) & 255)]
                );
              }),
              (e.prototype._doReset = function () {
                var t,
                  e,
                  n,
                  i,
                  o,
                  s,
                  u,
                  c,
                  a,
                  f,
                  l,
                  h,
                  p,
                  y,
                  _,
                  d,
                  g,
                  v,
                  w,
                  m,
                  b,
                  k,
                  S,
                  x,
                  B,
                  P,
                  E,
                  A;
                if (
                  ((p = []),
                  (y = []),
                  (b = []),
                  (d = []),
                  (g = []),
                  (v = []),
                  (this.k64Cnt = this._key.words.length / 2),
                  this.k64Cnt < 1)
                )
                  throw "Key size less than 64 bits";
                if (this.k64Cnt > 4) throw "Key size larger than 256 bits";
                for (u = k = 0; k < 256; u = ++k)
                  ((c = 255 & r.P[0][u]),
                    (d[0] = c),
                    (g[0] = 255 & this.Mx_X(c)),
                    (v[0] = 255 & this.Mx_Y(c)),
                    (c = 255 & r.P[1][u]),
                    (d[1] = c),
                    (g[1] = 255 & this.Mx_X(c)),
                    (v[1] = 255 & this.Mx_Y(c)),
                    (this.gMDS0[u] =
                      d[r.P_00] |
                      (g[r.P_00] << 8) |
                      (v[r.P_00] << 16) |
                      (v[r.P_00] << 24)),
                    (this.gMDS1[u] =
                      v[r.P_10] |
                      (v[r.P_10] << 8) |
                      (g[r.P_10] << 16) |
                      (d[r.P_10] << 24)),
                    (this.gMDS2[u] =
                      g[r.P_20] |
                      (v[r.P_20] << 8) |
                      (d[r.P_20] << 16) |
                      (v[r.P_20] << 24)),
                    (this.gMDS3[u] =
                      g[r.P_30] |
                      (d[r.P_30] << 8) |
                      (v[r.P_30] << 16) |
                      (g[r.P_30] << 24)));
                for (
                  u = S = 0, P = this.k64Cnt;
                  0 <= P ? S < P : S > P;
                  u = 0 <= P ? ++S : --S
                )
                  ((w = 2 * u),
                    (p[u] = this.switchEndianness(this._key.words[w])),
                    (y[u] = this.switchEndianness(this._key.words[w + 1])),
                    (b[this.k64Cnt - 1 - u] = this.RS_MDS_Encode(p[u], y[u])));
                for (
                  u = x = 0, E = 20;
                  0 <= E ? x < E : x > E;
                  u = 0 <= E ? ++x : --x
                )
                  ((m = u * r.SK_STEP),
                    (t = this.F32(m, p)),
                    (e = this.F32(m + r.SK_BUMP, y)),
                    (e = (e << 8) | (e >>> 24)),
                    (t += e),
                    (this.gSubKeys[2 * u] = t),
                    (t += e),
                    (this.gSubKeys[2 * u + 1] =
                      (t << r.SK_ROTL) | (t >>> (32 - r.SK_ROTL))));
                for (
                  a = b[0],
                    f = b[1],
                    l = b[2],
                    h = b[3],
                    this.gSBox = [],
                    A = [],
                    u = B = 0;
                  B < 256;
                  u = ++B
                )
                  ((n = i = o = s = u),
                    (_ = 3 & this.k64Cnt),
                    1 === _
                      ? ((this.gSBox[2 * u] =
                          this.gMDS0[
                            (255 & r.P[r.P_01][n]) ^ this.getByte(a, 0)
                          ]),
                        (this.gSBox[2 * u + 1] =
                          this.gMDS1[
                            (255 & r.P[r.P_11][i]) ^ this.getByte(a, 1)
                          ]),
                        (this.gSBox[2 * u + 512] =
                          this.gMDS2[
                            (255 & r.P[r.P_21][o]) ^ this.getByte(a, 2)
                          ]),
                        A.push(
                          (this.gSBox[2 * u + 513] =
                            this.gMDS3[
                              (255 & r.P[r.P_31][s]) ^ this.getByte(a, 3)
                            ]),
                        ))
                      : (0 === _ &&
                          ((n = (255 & r.P[r.P_04][n]) ^ this.getByte(h, 0)),
                          (i = (255 & r.P[r.P_14][i]) ^ this.getByte(h, 1)),
                          (o = (255 & r.P[r.P_24][o]) ^ this.getByte(h, 2)),
                          (s = (255 & r.P[r.P_34][s]) ^ this.getByte(h, 3))),
                        (0 !== _ && 3 !== _) ||
                          ((n = (255 & r.P[r.P_03][n]) ^ this.getByte(l, 0)),
                          (i = (255 & r.P[r.P_13][i]) ^ this.getByte(l, 1)),
                          (o = (255 & r.P[r.P_23][o]) ^ this.getByte(l, 2)),
                          (s = (255 & r.P[r.P_33][s]) ^ this.getByte(l, 3))),
                        (this.gSBox[2 * u] =
                          this.gMDS0[
                            (255 &
                              r.P[r.P_01][
                                (255 & r.P[r.P_02][n]) ^ this.getByte(f, 0)
                              ]) ^
                              this.getByte(a, 0)
                          ]),
                        (this.gSBox[2 * u + 1] =
                          this.gMDS1[
                            (255 &
                              r.P[r.P_11][
                                (255 & r.P[r.P_12][i]) ^ this.getByte(f, 1)
                              ]) ^
                              this.getByte(a, 1)
                          ]),
                        (this.gSBox[2 * u + 512] =
                          this.gMDS2[
                            (255 &
                              r.P[r.P_21][
                                (255 & r.P[r.P_22][o]) ^ this.getByte(f, 2)
                              ]) ^
                              this.getByte(a, 2)
                          ]),
                        A.push(
                          (this.gSBox[2 * u + 513] =
                            this.gMDS3[
                              (255 &
                                r.P[r.P_31][
                                  (255 & r.P[r.P_32][s]) ^ this.getByte(f, 3)
                                ]) ^
                                this.getByte(a, 3)
                            ]),
                        )));
                return A;
              }),
              (e.prototype.scrub = function () {
                return (o(this.gSubKeys), o(this.gSBox), this._key.scrub());
              }),
              (e.prototype.decryptBlock = function (t, e) {
                var n, r, i, o, s, u, c, a;
                for (
                  null == e && (e = 0),
                    u = this.switchEndianness(t[e]) ^ this.gSubKeys[4],
                    c = this.switchEndianness(t[e + 1]) ^ this.gSubKeys[5],
                    o = this.switchEndianness(t[e + 2]) ^ this.gSubKeys[6],
                    s = this.switchEndianness(t[e + 3]) ^ this.gSubKeys[7],
                    n = 39,
                    a = 0;
                  a < 16;
                  a += 2
                )
                  ((r = this.Fe32_0(u)),
                    (i = this.Fe32_3(c)),
                    (s ^= r + 2 * i + this.gSubKeys[n--]),
                    (o =
                      ((o << 1) | (o >>> 31)) ^ (r + i + this.gSubKeys[n--])),
                    (s = (s >>> 1) | (s << 31)),
                    (r = this.Fe32_0(o)),
                    (i = this.Fe32_3(s)),
                    (c ^= r + 2 * i + this.gSubKeys[n--]),
                    (u =
                      ((u << 1) | (u >>> 31)) ^ (r + i + this.gSubKeys[n--])),
                    (c = (c >>> 1) | (c << 31)));
                return (
                  (t[e] = this.switchEndianness(o ^ this.gSubKeys[0])),
                  (t[e + 1] = this.switchEndianness(s ^ this.gSubKeys[1])),
                  (t[e + 2] = this.switchEndianness(u ^ this.gSubKeys[2])),
                  (t[e + 3] = this.switchEndianness(c ^ this.gSubKeys[3]))
                );
              }),
              (e.prototype.encryptBlock = function (t, e) {
                var n, r, i, o, s, u, c, a;
                for (
                  null == e && (e = 0),
                    o = this.switchEndianness(t[e]) ^ this.gSubKeys[0],
                    s = this.switchEndianness(t[e + 1]) ^ this.gSubKeys[1],
                    u = this.switchEndianness(t[e + 2]) ^ this.gSubKeys[2],
                    c = this.switchEndianness(t[e + 3]) ^ this.gSubKeys[3],
                    n = 8,
                    a = 0;
                  a < 16;
                  a += 2
                )
                  ((r = this.Fe32_0(o)),
                    (i = this.Fe32_3(s)),
                    (u ^= r + i + this.gSubKeys[n++]),
                    (u = (u >>> 1) | (u << 31)),
                    (c =
                      ((c << 1) | (c >>> 31)) ^
                      (r + 2 * i + this.gSubKeys[n++])),
                    (r = this.Fe32_0(u)),
                    (i = this.Fe32_3(c)),
                    (o ^= r + i + this.gSubKeys[n++]),
                    (o = (o >>> 1) | (o << 31)),
                    (s =
                      ((s << 1) | (s >>> 31)) ^
                      (r + 2 * i + this.gSubKeys[n++])));
                return (
                  (t[e] = this.switchEndianness(u ^ this.gSubKeys[4])),
                  (t[e + 1] = this.switchEndianness(c ^ this.gSubKeys[5])),
                  (t[e + 2] = this.switchEndianness(o ^ this.gSubKeys[6])),
                  (t[e + 3] = this.switchEndianness(s ^ this.gSubKeys[7]))
                );
              }),
              e
            );
          })(t)));
      }).call(this);
    },
    5728: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a,
          f,
          l = {}.hasOwnProperty,
          h = function (t, e) {
            for (var n in e) l.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((f = n(3973)),
          (i = f.HMAC),
          (a = f.bulk_sign),
          (s = n(3974).SHA512),
          (o = n(4595).KECCAK),
          (u = n(2989).WordArray),
          (t = (function () {
            function t() {
              ((this.hasherBlockSize = this.hashers[0].hasherBlockSize),
                (this.hasherBlockSizeBytes = 4 * this.hasherBlockSize),
                this.reset());
            }
            return (
              (t.prototype.reset = function () {
                var t, e, n, r;
                for (r = this.hashers, e = 0, n = r.length; e < n; e++)
                  ((t = r[e]), t.reset());
                return this;
              }),
              (t.prototype.update = function (t) {
                var e, n, r, i;
                for (i = this.hashers, n = 0, r = i.length; n < r; n++)
                  ((e = i[n]), e.update(t));
                return this;
              }),
              (t.prototype.scrub = function () {
                var t, e, n, r;
                for (r = this.hashers, e = 0, n = r.length; e < n; e++)
                  ((t = r[e]), t.scrub());
                return this;
              }),
              (t.prototype.finalize = function (t) {
                var e, n, r, i, o, s;
                for (
                  n = function () {
                    var n, r, i, o;
                    for (
                      i = this.hashers, o = [], n = 0, r = i.length;
                      n < r;
                      n++
                    )
                      ((e = i[n]), o.push(e.finalize(t)));
                    return o;
                  }.call(this),
                    r = n[0],
                    s = n.slice(1),
                    i = 0,
                    o = s.length;
                  i < o;
                  i++
                )
                  ((e = s[i]), this._coalesce(r, e), e.scrub());
                return r;
              }),
              t
            );
          })()),
          (r = (function (t) {
            function e(t, n) {
              var r, u, c, a, f;
              (null == n && (n = [s, o]),
                (f = t.split(n.length)),
                (this.hashers = (function () {
                  var t, e, o;
                  for (o = [], u = t = 0, e = n.length; t < e; u = ++t)
                    ((c = n[u]),
                      (a = f[u]),
                      (r = new i(a, c)),
                      a.scrub(),
                      o.push(r));
                  return o;
                })()),
                e.__super__.constructor.call(this));
            }
            return (
              h(e, t),
              (e.get_output_size = function () {
                return s.output_size + o.output_size;
              }),
              (e.prototype._coalesce = function (t, e) {
                return t.concat(e);
              }),
              (e.prototype.get_output_size = function () {
                var t, e, n, r, i;
                for (e = 0, i = this.hashers, n = 0, r = i.length; n < r; n++)
                  ((t = i[n]), (e += t.get_output_size()));
                return e;
              }),
              (e.sign = function (t) {
                var n, r;
                return ((r = t.key), (n = t.input), new e(r).finalize(n));
              }),
              (e.bulk_sign = function (t, n) {
                return ((t.klass = e), (t.what = "HMAC-SHA512-SHA3"), a(t, n));
              }),
              e
            );
          })(t)),
          (c = (function (t) {
            function e(t, n) {
              var r;
              (null == n && (n = [s, o]),
                (this.hashers = (function () {
                  var e, o, s;
                  for (s = [], e = 0, o = n.length; e < o; e++)
                    ((r = n[e]), s.push(new i(t, r)));
                  return s;
                })()),
                e.__super__.constructor.call(this));
            }
            return (
              h(e, t),
              (e.prototype.reset = function () {
                var t, n, r, i, o;
                for (
                  e.__super__.reset.call(this),
                    o = this.hashers,
                    n = r = 0,
                    i = o.length;
                  r < i;
                  n = ++r
                )
                  ((t = o[n]), t.update(new u([n])));
                return this;
              }),
              (e.get_output_size = function () {
                return Math.max(s.output_size, o.output_size);
              }),
              (e.prototype._coalesce = function (t, e) {
                return t.xor(e, {});
              }),
              (e.prototype.get_output_size = function () {
                var t;
                return Math.max.apply(
                  Math,
                  function () {
                    var e, n, r, i;
                    for (
                      r = this.hashers, i = [], e = 0, n = r.length;
                      e < n;
                      e++
                    )
                      ((t = r[e]), i.push(t.get_output_size()));
                    return i;
                  }.call(this),
                );
              }),
              (e.sign = function (t) {
                var n, r;
                return ((r = t.key), (n = t.input), new e(r).finalize(n));
              }),
              (e.bulk_sign = function (t, n) {
                return (
                  (t.klass = e),
                  (t.what = "HMAC-SHA512-XOR-SHA3"),
                  a(t, n)
                );
              }),
              e
            );
          })(t)),
          (e.Concat = r),
          (e.XOR = c));
      }).call(this);
    },
    5729: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c = {}.hasOwnProperty,
          a = function (t, e) {
            for (var n in e) c.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((o = n(2989).WordArray),
          (r = n(3361).Hasher),
          (t = (function () {
            function t() {
              ((this.H = []), (this.K = []), (this.W = []), this.init());
            }
            return (
              (t.prototype.isPrime = function (t) {
                var e, n, r;
                if (2 === t || 3 === t || 5 === t || 7 === t) return !0;
                if (1 === t || 4 === t || 6 === t || 8 === t || 9 === t)
                  return !1;
                for (
                  n = Math.ceil(Math.sqrt(t)), e = r = 2;
                  2 <= n ? r <= n : r >= n;
                  e = 2 <= n ? ++r : --r
                )
                  if (t % e === 0) return !1;
                return !0;
              }),
              (t.prototype.getFractionalBits = function (t) {
                return (4294967296 * (t - (0 | t))) | 0;
              }),
              (t.prototype.init = function () {
                var t, e, n;
                ((t = 2), (e = 0), (n = []));
                while (e < 64)
                  (this.isPrime(t) &&
                    (e < 8 &&
                      (this.H[e] = this.getFractionalBits(Math.pow(t, 0.5))),
                    (this.K[e] = this.getFractionalBits(Math.pow(t, 1 / 3))),
                    e++),
                    n.push(t++));
                return n;
              }),
              t
            );
          })()),
          (s = new t()),
          (i = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (
              a(e, t),
              (e.blockSize = 16),
              (e.prototype.blockSize = e.blockSize),
              (e.output_size = 32),
              (e.prototype.output_size = e.output_size),
              (e.prototype._doReset = function () {
                return (this._hash = new o(s.H.slice(0)));
              }),
              (e.prototype.get_output_size = function () {
                return this.output_size;
              }),
              (e.prototype._doProcessBlock = function (t, e) {
                var n,
                  r,
                  i,
                  o,
                  u,
                  c,
                  a,
                  f,
                  l,
                  h,
                  p,
                  y,
                  _,
                  d,
                  g,
                  v,
                  w,
                  m,
                  b,
                  k,
                  S,
                  x,
                  B;
                for (
                  n = this._hash.words,
                    i = s.W,
                    r = s.K,
                    o = n[0],
                    u = n[1],
                    c = n[2],
                    f = n[3],
                    l = n[4],
                    h = n[5],
                    p = n[6],
                    v = n[7],
                    w = B = 0;
                  B < 64;
                  w = ++B
                )
                  (w < 16
                    ? (i[w] = 0 | t[e + w])
                    : ((_ = i[w - 15]),
                      (y =
                        ((_ << 25) | (_ >>> 7)) ^
                        ((_ << 14) | (_ >>> 18)) ^
                        (_ >>> 3)),
                      (g = i[w - 2]),
                      (d =
                        ((g << 15) | (g >>> 17)) ^
                        ((g << 13) | (g >>> 19)) ^
                        (g >>> 10)),
                      (i[w] = y + i[w - 7] + d + i[w - 16])),
                    (a = (l & h) ^ (~l & p)),
                    (m = (o & u) ^ (o & c) ^ (u & c)),
                    (b =
                      ((o << 30) | (o >>> 2)) ^
                      ((o << 19) | (o >>> 13)) ^
                      ((o << 10) | (o >>> 22))),
                    (k =
                      ((l << 26) | (l >>> 6)) ^
                      ((l << 21) | (l >>> 11)) ^
                      ((l << 7) | (l >>> 25))),
                    (S = v + k + a + r[w] + i[w]),
                    (x = b + m),
                    (v = p),
                    (p = h),
                    (h = l),
                    (l = (f + S) | 0),
                    (f = c),
                    (c = u),
                    (u = o),
                    (o = (S + x) | 0));
                return (
                  (n[0] = (n[0] + o) | 0),
                  (n[1] = (n[1] + u) | 0),
                  (n[2] = (n[2] + c) | 0),
                  (n[3] = (n[3] + f) | 0),
                  (n[4] = (n[4] + l) | 0),
                  (n[5] = (n[5] + h) | 0),
                  (n[6] = (n[6] + p) | 0),
                  (n[7] = (n[7] + v) | 0)
                );
              }),
              (e.prototype._doFinalize = function () {
                var t, e, n, r;
                return (
                  (t = this._data),
                  (e = t.words),
                  (r = 8 * this._nDataBytes),
                  (n = 8 * t.sigBytes),
                  (e[n >>> 5] |= 128 << (24 - (n % 32))),
                  (e[14 + (((n + 64) >>> 9) << 4)] = Math.floor(
                    r / 4294967296,
                  )),
                  (e[15 + (((n + 64) >>> 9) << 4)] = r),
                  (t.sigBytes = 4 * e.length),
                  this._process(),
                  this._hash
                );
              }),
              (e.prototype.scrub = function () {
                return this._hash.scrub();
              }),
              (e.prototype.copy_to = function (t) {
                return (
                  e.__super__.copy_to.call(this, t),
                  (t._hash = this._hash.clone())
                );
              }),
              (e.prototype.clone = function () {
                var t;
                return ((t = new e()), this.copy_to(t), t);
              }),
              e
            );
          })(r)),
          (u = function (t) {
            var e;
            return ((e = new i().finalize(t)), t.scrub(), e);
          }),
          (e.SHA256 = i),
          (e.transform = u));
      }).call(this);
    },
    5730: function (t, e, n) {
      (function () {
        var t, r, i, o, s, u;
        ((o = n(3207)),
          (t = n(3973).HMAC),
          (i = n(2989).WordArray),
          (u = n(3236)),
          (r = (function () {
            function e(e) {
              ((this.klass = e.klass),
                (this.c = e.c),
                this.c || (this.c = 1024),
                this.klass || (this.klass = t));
            }
            return (
              (e.prototype._PRF = function (t) {
                return (this.prf.reset(), this.prf.finalize(t));
              }),
              (e.prototype._gen_T_i = function (t, e) {
                var n, r, s, c, a, f, l, h, p;
                ((h = o.findDeferral(arguments)),
                  (a = t.salt),
                  (r = t.i),
                  (s = t.progress_hook),
                  s(0),
                  (f = a.clone().concat(new i([r]))),
                  (n = this._PRF(f)),
                  (c = n.clone()),
                  (r = 1),
                  (function (t) {
                    return function (e) {
                      var i;
                      ((i = function (e) {
                        var a, f, y;
                        if (
                          ((a = e),
                          (f = function () {
                            return o.trampoline(function () {
                              return i(e);
                            });
                          }),
                          (y = f),
                          !(r < t.c))
                        )
                          return a();
                        l = Math.min(t.c, r + 128);
                        while (r < l) ((n = t._PRF(n)), c.xor(n, {}), r++);
                        (s(r),
                          (function (t) {
                            ((p = new o.Deferrals(t, {
                              parent: h,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/pbkdf2.iced",
                              funcname: "PBKDF2._gen_T_i",
                            })),
                              u.default_delay(0, 0, p.defer({ lineno: 57 })),
                              p._fulfill());
                          })(function () {
                            return y(null);
                          }));
                      }),
                        i(e));
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        return (s(r), e(c));
                      };
                    })(),
                  ));
              }),
              (e.prototype.run = function (t, e) {
                var n, r, s, u, c, a, f, l, h, p, y, _, d, g, v, w;
                ((_ = o.findDeferral(arguments)),
                  (c = t.key),
                  (h = t.salt),
                  (r = t.dkLen),
                  (l = t.progress_hook),
                  (this.prf = new this.klass(c)),
                  (n = this.prf.get_output_size()),
                  (a = Math.ceil(r / n)),
                  (y = []),
                  (f = (function (t) {
                    return function (e) {
                      return function (n) {
                        return "function" === typeof l
                          ? l({
                              what: "pbkdf2",
                              total: a * t.c,
                              i: e * t.c + n,
                            })
                          : void 0;
                      };
                    };
                  })(this)),
                  f(0)(0),
                  (function (t) {
                    return function (e) {
                      var n;
                      ((u = 1),
                        (g = 1),
                        (v = a),
                        (w = v > g),
                        (n = function (e) {
                          var r, i, s;
                          if (
                            ((r = e),
                            (i = function () {
                              return o.trampoline(function () {
                                return (w ? (u += 1) : (u -= 1), n(e));
                              });
                            }),
                            (s = i),
                            (!0 === w && u > a) || (!1 === w && u < a))
                          )
                            return r();
                          (function (e) {
                            ((d = new o.Deferrals(e, {
                              parent: _,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/pbkdf2.iced",
                              funcname: "PBKDF2.run",
                            })),
                              t._gen_T_i(
                                { salt: h, i: u, progress_hook: f(u - 1) },
                                d.defer({
                                  assign_fn: (function () {
                                    return function () {
                                      return (p = arguments[0]);
                                    };
                                  })(),
                                  lineno: 80,
                                }),
                              ),
                              d._fulfill());
                          })(function () {
                            return s(y.push(p.words));
                          });
                        }),
                        n(e));
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        var n;
                        return (
                          f(a)(0),
                          (s = (n = []).concat.apply(n, y)),
                          c.scrub(),
                          t.prf.scrub(),
                          (t.prf = null),
                          e(new i(s, r))
                        );
                      };
                    })(this),
                  ));
              }),
              e
            );
          })()),
          (s = function (t, e) {
            var n, i, s, u, c, a, f, l, h, p;
            ((h = o.findDeferral(arguments)),
              (u = t.key),
              (l = t.salt),
              (c = t.klass),
              (n = t.c),
              (i = t.dkLen),
              (f = t.progress_hook),
              (s = new r({ klass: c, c: n })),
              (function (t) {
                return function (t) {
                  ((p = new o.Deferrals(t, {
                    parent: h,
                    filename:
                      "/Users/max/src/keybase/triplesec/src/pbkdf2.iced",
                  })),
                    s.run(
                      { key: u, salt: l, dkLen: i, progress_hook: f },
                      p.defer({
                        assign_fn: (function () {
                          return function () {
                            return (a = arguments[0]);
                          };
                        })(),
                        lineno: 106,
                      }),
                    ),
                    p._fulfill());
                };
              })()(
                (function (t) {
                  return function () {
                    return e(a);
                  };
                })(),
              ));
          }),
          (e.pbkdf2 = s),
          (e.PBKDF2 = r));
      }).call(this);
    },
    5733: function (t, e, n) {
      (function (t, n) {
        var r = 200,
          i = "__lodash_hash_undefined__",
          o = 9007199254740991,
          s = "[object Arguments]",
          u = "[object Array]",
          c = "[object Boolean]",
          a = "[object Date]",
          f = "[object Error]",
          l = "[object Function]",
          h = "[object GeneratorFunction]",
          p = "[object Map]",
          y = "[object Number]",
          _ = "[object Object]",
          d = "[object Promise]",
          g = "[object RegExp]",
          v = "[object Set]",
          w = "[object String]",
          m = "[object Symbol]",
          b = "[object WeakMap]",
          k = "[object ArrayBuffer]",
          S = "[object DataView]",
          x = "[object Float32Array]",
          B = "[object Float64Array]",
          P = "[object Int8Array]",
          E = "[object Int16Array]",
          A = "[object Int32Array]",
          D = "[object Uint8Array]",
          z = "[object Uint8ClampedArray]",
          F = "[object Uint16Array]",
          O = "[object Uint32Array]",
          T = /[\\^$.*+?()[\]{}|]/g,
          I = /\w*$/,
          N = /^\[object .+?Constructor\]$/,
          j = /^(?:0|[1-9]\d*)$/,
          C = {};
        ((C[s] =
          C[u] =
          C[k] =
          C[S] =
          C[c] =
          C[a] =
          C[x] =
          C[B] =
          C[P] =
          C[E] =
          C[A] =
          C[p] =
          C[y] =
          C[_] =
          C[g] =
          C[v] =
          C[w] =
          C[m] =
          C[D] =
          C[z] =
          C[F] =
          C[O] =
            !0),
          (C[f] = C[l] = C[b] = !1));
        var U = "object" == typeof t && t && t.Object === Object && t,
          M = "object" == typeof self && self && self.Object === Object && self,
          R = U || M || Function("return this")(),
          K = e && !e.nodeType && e,
          H = K && "object" == typeof n && n && !n.nodeType && n,
          $ = H && H.exports === K;
        function q(t, e) {
          return (t.set(e[0], e[1]), t);
        }
        function L(t, e) {
          return (t.add(e), t);
        }
        function X(t, e) {
          var n = -1,
            r = t ? t.length : 0;
          while (++n < r) if (!1 === e(t[n], n, t)) break;
          return t;
        }
        function W(t, e) {
          var n = -1,
            r = e.length,
            i = t.length;
          while (++n < r) t[i + n] = e[n];
          return t;
        }
        function V(t, e, n, r) {
          var i = -1,
            o = t ? t.length : 0;
          r && o && (n = t[++i]);
          while (++i < o) n = e(n, t[i], i, t);
          return n;
        }
        function J(t, e) {
          var n = -1,
            r = Array(t);
          while (++n < t) r[n] = e(n);
          return r;
        }
        function G(t, e) {
          return null == t ? void 0 : t[e];
        }
        function Z(t) {
          var e = !1;
          if (null != t && "function" != typeof t.toString)
            try {
              e = !!(t + "");
            } catch (n) {}
          return e;
        }
        function Y(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t, r) {
              n[++e] = [r, t];
            }),
            n
          );
        }
        function Q(t, e) {
          return function (n) {
            return t(e(n));
          };
        }
        function tt(t) {
          var e = -1,
            n = Array(t.size);
          return (
            t.forEach(function (t) {
              n[++e] = t;
            }),
            n
          );
        }
        var et = Array.prototype,
          nt = Function.prototype,
          rt = Object.prototype,
          it = R["__core-js_shared__"],
          ot = (function () {
            var t = /[^.]+$/.exec((it && it.keys && it.keys.IE_PROTO) || "");
            return t ? "Symbol(src)_1." + t : "";
          })(),
          st = nt.toString,
          ut = rt.hasOwnProperty,
          ct = rt.toString,
          at = RegExp(
            "^" +
              st
                .call(ut)
                .replace(T, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          ft = $ ? R.Buffer : void 0,
          lt = R.Symbol,
          ht = R.Uint8Array,
          pt = Q(Object.getPrototypeOf, Object),
          yt = Object.create,
          _t = rt.propertyIsEnumerable,
          dt = et.splice,
          gt = Object.getOwnPropertySymbols,
          vt = ft ? ft.isBuffer : void 0,
          wt = Q(Object.keys, Object),
          mt = Pe(R, "DataView"),
          bt = Pe(R, "Map"),
          kt = Pe(R, "Promise"),
          St = Pe(R, "Set"),
          xt = Pe(R, "WeakMap"),
          Bt = Pe(Object, "create"),
          Pt = je(mt),
          Et = je(bt),
          At = je(kt),
          Dt = je(St),
          zt = je(xt),
          Ft = lt ? lt.prototype : void 0,
          Ot = Ft ? Ft.valueOf : void 0;
        function Tt(t) {
          var e = -1,
            n = t ? t.length : 0;
          this.clear();
          while (++e < n) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function It() {
          this.__data__ = Bt ? Bt(null) : {};
        }
        function Nt(t) {
          return this.has(t) && delete this.__data__[t];
        }
        function jt(t) {
          var e = this.__data__;
          if (Bt) {
            var n = e[t];
            return n === i ? void 0 : n;
          }
          return ut.call(e, t) ? e[t] : void 0;
        }
        function Ct(t) {
          var e = this.__data__;
          return Bt ? void 0 !== e[t] : ut.call(e, t);
        }
        function Ut(t, e) {
          var n = this.__data__;
          return ((n[t] = Bt && void 0 === e ? i : e), this);
        }
        function Mt(t) {
          var e = -1,
            n = t ? t.length : 0;
          this.clear();
          while (++e < n) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Rt() {
          this.__data__ = [];
        }
        function Kt(t) {
          var e = this.__data__,
            n = oe(e, t);
          if (n < 0) return !1;
          var r = e.length - 1;
          return (n == r ? e.pop() : dt.call(e, n, 1), !0);
        }
        function Ht(t) {
          var e = this.__data__,
            n = oe(e, t);
          return n < 0 ? void 0 : e[n][1];
        }
        function $t(t) {
          return oe(this.__data__, t) > -1;
        }
        function qt(t, e) {
          var n = this.__data__,
            r = oe(n, t);
          return (r < 0 ? n.push([t, e]) : (n[r][1] = e), this);
        }
        function Lt(t) {
          var e = -1,
            n = t ? t.length : 0;
          this.clear();
          while (++e < n) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Xt() {
          this.__data__ = {
            hash: new Tt(),
            map: new (bt || Mt)(),
            string: new Tt(),
          };
        }
        function Wt(t) {
          return Be(this, t)["delete"](t);
        }
        function Vt(t) {
          return Be(this, t).get(t);
        }
        function Jt(t) {
          return Be(this, t).has(t);
        }
        function Gt(t, e) {
          return (Be(this, t).set(t, e), this);
        }
        function Zt(t) {
          this.__data__ = new Mt(t);
        }
        function Yt() {
          this.__data__ = new Mt();
        }
        function Qt(t) {
          return this.__data__["delete"](t);
        }
        function te(t) {
          return this.__data__.get(t);
        }
        function ee(t) {
          return this.__data__.has(t);
        }
        function ne(t, e) {
          var n = this.__data__;
          if (n instanceof Mt) {
            var i = n.__data__;
            if (!bt || i.length < r - 1) return (i.push([t, e]), this);
            n = this.__data__ = new Lt(i);
          }
          return (n.set(t, e), this);
        }
        function re(t, e) {
          var n = Re(t) || Me(t) ? J(t.length, String) : [],
            r = n.length,
            i = !!r;
          for (var o in t)
            (!e && !ut.call(t, o)) ||
              (i && ("length" == o || Oe(o, r))) ||
              n.push(o);
          return n;
        }
        function ie(t, e, n) {
          var r = t[e];
          (ut.call(t, e) && Ue(r, n) && (void 0 !== n || e in t)) || (t[e] = n);
        }
        function oe(t, e) {
          var n = t.length;
          while (n--) if (Ue(t[n][0], e)) return n;
          return -1;
        }
        function se(t, e) {
          return t && ke(e, Ve(e), t);
        }
        function ue(t, e, n, r, i, o, u) {
          var c;
          if ((r && (c = o ? r(t, i, o, u) : r(t)), void 0 !== c)) return c;
          if (!Xe(t)) return t;
          var a = Re(t);
          if (a) {
            if (((c = De(t)), !e)) return be(t, c);
          } else {
            var f = Ae(t),
              p = f == l || f == h;
            if ($e(t)) return pe(t, e);
            if (f == _ || f == s || (p && !o)) {
              if (Z(t)) return o ? t : {};
              if (((c = ze(p ? {} : t)), !e)) return Se(t, se(c, t));
            } else {
              if (!C[f]) return o ? t : {};
              c = Fe(t, f, ue, e);
            }
          }
          u || (u = new Zt());
          var y = u.get(t);
          if (y) return y;
          if ((u.set(t, c), !a)) var d = n ? xe(t) : Ve(t);
          return (
            X(d || t, function (i, o) {
              (d && ((o = i), (i = t[o])), ie(c, o, ue(i, e, n, r, o, t, u)));
            }),
            c
          );
        }
        function ce(t) {
          return Xe(t) ? yt(t) : {};
        }
        function ae(t, e, n) {
          var r = e(t);
          return Re(t) ? r : W(r, n(t));
        }
        function fe(t) {
          return ct.call(t);
        }
        function le(t) {
          if (!Xe(t) || Ie(t)) return !1;
          var e = qe(t) || Z(t) ? at : N;
          return e.test(je(t));
        }
        function he(t) {
          if (!Ne(t)) return wt(t);
          var e = [];
          for (var n in Object(t))
            ut.call(t, n) && "constructor" != n && e.push(n);
          return e;
        }
        function pe(t, e) {
          if (e) return t.slice();
          var n = new t.constructor(t.length);
          return (t.copy(n), n);
        }
        function ye(t) {
          var e = new t.constructor(t.byteLength);
          return (new ht(e).set(new ht(t)), e);
        }
        function _e(t, e) {
          var n = e ? ye(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.byteLength);
        }
        function de(t, e, n) {
          var r = e ? n(Y(t), !0) : Y(t);
          return V(r, q, new t.constructor());
        }
        function ge(t) {
          var e = new t.constructor(t.source, I.exec(t));
          return ((e.lastIndex = t.lastIndex), e);
        }
        function ve(t, e, n) {
          var r = e ? n(tt(t), !0) : tt(t);
          return V(r, L, new t.constructor());
        }
        function we(t) {
          return Ot ? Object(Ot.call(t)) : {};
        }
        function me(t, e) {
          var n = e ? ye(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.length);
        }
        function be(t, e) {
          var n = -1,
            r = t.length;
          e || (e = Array(r));
          while (++n < r) e[n] = t[n];
          return e;
        }
        function ke(t, e, n, r) {
          n || (n = {});
          var i = -1,
            o = e.length;
          while (++i < o) {
            var s = e[i],
              u = r ? r(n[s], t[s], s, n, t) : void 0;
            ie(n, s, void 0 === u ? t[s] : u);
          }
          return n;
        }
        function Se(t, e) {
          return ke(t, Ee(t), e);
        }
        function xe(t) {
          return ae(t, Ve, Ee);
        }
        function Be(t, e) {
          var n = t.__data__;
          return Te(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        }
        function Pe(t, e) {
          var n = G(t, e);
          return le(n) ? n : void 0;
        }
        ((Tt.prototype.clear = It),
          (Tt.prototype["delete"] = Nt),
          (Tt.prototype.get = jt),
          (Tt.prototype.has = Ct),
          (Tt.prototype.set = Ut),
          (Mt.prototype.clear = Rt),
          (Mt.prototype["delete"] = Kt),
          (Mt.prototype.get = Ht),
          (Mt.prototype.has = $t),
          (Mt.prototype.set = qt),
          (Lt.prototype.clear = Xt),
          (Lt.prototype["delete"] = Wt),
          (Lt.prototype.get = Vt),
          (Lt.prototype.has = Jt),
          (Lt.prototype.set = Gt),
          (Zt.prototype.clear = Yt),
          (Zt.prototype["delete"] = Qt),
          (Zt.prototype.get = te),
          (Zt.prototype.has = ee),
          (Zt.prototype.set = ne));
        var Ee = gt ? Q(gt, Object) : Je,
          Ae = fe;
        function De(t) {
          var e = t.length,
            n = t.constructor(e);
          return (
            e &&
              "string" == typeof t[0] &&
              ut.call(t, "index") &&
              ((n.index = t.index), (n.input = t.input)),
            n
          );
        }
        function ze(t) {
          return "function" != typeof t.constructor || Ne(t) ? {} : ce(pt(t));
        }
        function Fe(t, e, n, r) {
          var i = t.constructor;
          switch (e) {
            case k:
              return ye(t);
            case c:
            case a:
              return new i(+t);
            case S:
              return _e(t, r);
            case x:
            case B:
            case P:
            case E:
            case A:
            case D:
            case z:
            case F:
            case O:
              return me(t, r);
            case p:
              return de(t, r, n);
            case y:
            case w:
              return new i(t);
            case g:
              return ge(t);
            case v:
              return ve(t, r, n);
            case m:
              return we(t);
          }
        }
        function Oe(t, e) {
          return (
            (e = null == e ? o : e),
            !!e &&
              ("number" == typeof t || j.test(t)) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
          );
        }
        function Te(t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        }
        function Ie(t) {
          return !!ot && ot in t;
        }
        function Ne(t) {
          var e = t && t.constructor,
            n = ("function" == typeof e && e.prototype) || rt;
          return t === n;
        }
        function je(t) {
          if (null != t) {
            try {
              return st.call(t);
            } catch (e) {}
            try {
              return t + "";
            } catch (e) {}
          }
          return "";
        }
        function Ce(t) {
          return ue(t, !0, !0);
        }
        function Ue(t, e) {
          return t === e || (t !== t && e !== e);
        }
        function Me(t) {
          return (
            He(t) &&
            ut.call(t, "callee") &&
            (!_t.call(t, "callee") || ct.call(t) == s)
          );
        }
        ((mt && Ae(new mt(new ArrayBuffer(1))) != S) ||
          (bt && Ae(new bt()) != p) ||
          (kt && Ae(kt.resolve()) != d) ||
          (St && Ae(new St()) != v) ||
          (xt && Ae(new xt()) != b)) &&
          (Ae = function (t) {
            var e = ct.call(t),
              n = e == _ ? t.constructor : void 0,
              r = n ? je(n) : void 0;
            if (r)
              switch (r) {
                case Pt:
                  return S;
                case Et:
                  return p;
                case At:
                  return d;
                case Dt:
                  return v;
                case zt:
                  return b;
              }
            return e;
          });
        var Re = Array.isArray;
        function Ke(t) {
          return null != t && Le(t.length) && !qe(t);
        }
        function He(t) {
          return We(t) && Ke(t);
        }
        var $e = vt || Ge;
        function qe(t) {
          var e = Xe(t) ? ct.call(t) : "";
          return e == l || e == h;
        }
        function Le(t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o;
        }
        function Xe(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function We(t) {
          return !!t && "object" == typeof t;
        }
        function Ve(t) {
          return Ke(t) ? re(t) : he(t);
        }
        function Je() {
          return [];
        }
        function Ge() {
          return !1;
        }
        n.exports = Ce;
      }).call(this, n(13), n(20)(t));
    },
    5737: function (t, e, n) {
      "use strict";
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.cryptoClients = e.SECP256K1Client = void 0));
      const r = n(11503);
      Object.defineProperty(e, "SECP256K1Client", {
        enumerable: !0,
        get: function () {
          return r.SECP256K1Client;
        },
      });
      const i = { ES256K: r.SECP256K1Client };
      e.cryptoClients = i;
    },
    5738: function (t, e, n) {
      "use strict";
      t.exports = n(11510);
    },
    6933: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a,
          f,
          l,
          h,
          p,
          y,
          _,
          d,
          g,
          v,
          w,
          m,
          b,
          k,
          S,
          x,
          B = {}.hasOwnProperty,
          P = function (t, e) {
            for (var n in e) B.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        ((w = n(3207)),
          (_ = n(2989).WordArray),
          (k = n(4594)),
          (t = n(5726).AES),
          (p = n(5727).TwoFish),
          (g = n(4879)),
          (x = n(5728)),
          (d = x.XOR),
          (o = x.Concat),
          (l = n(3974).SHA512),
          (f = n(6935).SHA3STD),
          (c = n(4595).KECCAK),
          (a = n(5730).PBKDF2),
          (h = n(6936).Scrypt),
          (S = n(3236)),
          (b = n(6937)),
          (m = n(6938).make_esc),
          (u = n(3973).HMAC_SHA256),
          (y = {
            1: {
              header: [479516638, 1],
              salt_size: 8,
              xsalsa20_rev: !0,
              kdf: { klass: a, opts: { c: 1024, klass: d } },
              use_twofish: !0,
              hmac_hashes: [l, c],
              hmac_key_size: 96,
              version: 1,
            },
            2: {
              header: [479516638, 2],
              salt_size: 16,
              xsalsa20_rev: !0,
              kdf: { klass: h, opts: { c: 64, klass: d, N: 12, r: 8, p: 1 } },
              use_twofish: !0,
              hmac_hashes: [l, c],
              hmac_key_size: 96,
              version: 2,
            },
            3: {
              header: [479516638, 3],
              salt_size: 16,
              xsalsa20_rev: !1,
              kdf: { klass: h, opts: { c: 1, klass: u, N: 15, r: 8, p: 1 } },
              use_twofish: !0,
              hmac_hashes: [l, c],
              hmac_key_size: 96,
              version: 3,
            },
            4: {
              header: [479516638, 4],
              salt_size: 16,
              xsalsa20_rev: !1,
              kdf: { klass: h, opts: { c: 1, klass: u, N: 15, r: 8, p: 1 } },
              hmac_key_size: 96,
              use_twofish: !1,
              hmac_hashes: [l, f],
              version: 4,
            },
          }),
          (e.CURRENT_VERSION = i = 4),
          (r = (function () {
            function e(t) {
              var e, n;
              if (
                ((e = t.key),
                (n = t.version),
                (this.version = y[null != n ? n : i]),
                null == this.version)
              )
                throw new Error("unknown version: " + n);
              (this.set_key(e), (this.derived_keys = {}));
            }
            return (
              (e.prototype.kdf = function (e, n) {
                var r, i, o, s, u, c, a, f, l, h, y, d, g, v, m, b, S, x;
                ((S = w.findDeferral(arguments)),
                  (v = e.salt),
                  (s = e.extra_keymaterial),
                  (d = e.progress_hook),
                  (function (t) {
                    return function (e) {
                      ((x = new w.Deferrals(e, {
                        parent: S,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/enc.iced",
                        funcname: "Base.kdf",
                      })),
                        t._check_scrubbed(
                          t.key,
                          "in KDF",
                          n,
                          x.defer({ lineno: 121 }),
                        ),
                        x._fulfill());
                    };
                  })(this)(
                    (function (e) {
                      return function () {
                        ((m = v.to_hex()),
                          (a = e.key.clone()),
                          (function (t) {
                            ((x = new w.Deferrals(t, {
                              parent: S,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/enc.iced",
                              funcname: "Base.kdf",
                            })),
                              e._check_scrubbed(
                                a,
                                "KDF",
                                n,
                                x.defer({ lineno: 129 }),
                              ),
                              x._fulfill());
                          })(function () {
                            (function (n) {
                              if (null != (f = e.derived_keys[m])) return n();
                              for (c in ((e._kdf = new e.version.kdf.klass(
                                e.version.kdf.opts,
                              )),
                              (h = {
                                hmac: e.version.hmac_key_size,
                                aes: t.keySize,
                                salsa20: k.Salsa20.keySize,
                              }),
                              e.version.use_twofish && (h.twofish = p.keySize),
                              (y = e.version.use_twofish
                                ? ["hmac", "aes", "twofish", "salsa20"]
                                : ["hmac", "aes", "salsa20"]),
                              (i = s || 0),
                              h))
                                ((b = h[c]), (i += b));
                              ((r = {
                                dkLen: i,
                                key: a,
                                progress_hook: d,
                                salt: v,
                              }),
                                (function (t) {
                                  ((x = new w.Deferrals(t, {
                                    parent: S,
                                    filename:
                                      "/Users/max/src/keybase/triplesec/src/enc.iced",
                                    funcname: "Base.kdf",
                                  })),
                                    e._kdf.run(
                                      r,
                                      x.defer({
                                        assign_fn: (function () {
                                          return function () {
                                            return (g = arguments[0]);
                                          };
                                        })(),
                                        lineno: 152,
                                      }),
                                    ),
                                    x._fulfill());
                                })(function () {
                                  var t, r;
                                  for (
                                    f = {}, u = 0, t = 0, r = y.length;
                                    t < r;
                                    t++
                                  )
                                    ((c = y[t]),
                                      (b = h[c]),
                                      (l = b / 4),
                                      (o = u + l),
                                      (f[c] = new _(g.words.slice(u, o))),
                                      (u = o));
                                  return (
                                    (f.extra = new _(
                                      g.words.slice(o),
                                    ).to_buffer()),
                                    n((e.derived_keys[m] = f))
                                  );
                                }));
                            })(function () {
                              return n(null, f);
                            });
                          }));
                      };
                    })(this),
                  ));
              }),
              (e.prototype.set_key = function (t) {
                var e;
                return null == t
                  ? this.scrub()
                  : ((e = _.from_buffer(t)),
                    this.key && this.key.equal(e)
                      ? void 0
                      : (this.scrub(), (this.key = e)));
              }),
              (e.prototype._check_scrubbed = function (t, e, n, r) {
                return null == t || t.is_scrubbed()
                  ? n(new Error(e + ": Failed due to scrubbed key!"), null)
                  : r();
              }),
              (e.prototype.sign = function (t, e) {
                var n, r, i, s, u, c, a, f;
                ((a = w.findDeferral(arguments)),
                  (r = t.input),
                  (i = t.key),
                  (c = t.salt),
                  (u = t.progress_hook),
                  (function (t) {
                    return function (n) {
                      ((f = new w.Deferrals(n, {
                        parent: a,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/enc.iced",
                        funcname: "Base.sign",
                      })),
                        t._check_scrubbed(
                          i,
                          "HMAC",
                          e,
                          f.defer({ lineno: 210 }),
                        ),
                        f._fulfill());
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        ((r = new _(t.version.header).concat(c).concat(r)),
                          (n = t.version.hmac_hashes),
                          (function (t) {
                            ((f = new w.Deferrals(t, {
                              parent: a,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/enc.iced",
                              funcname: "Base.sign",
                            })),
                              o.bulk_sign(
                                {
                                  key: i,
                                  input: r,
                                  progress_hook: u,
                                  combine_klasses: n,
                                },
                                f.defer({
                                  assign_fn: (function () {
                                    return function () {
                                      return (s = arguments[0]);
                                    };
                                  })(),
                                  lineno: 213,
                                }),
                              ),
                              f._fulfill());
                          })(function () {
                            return (r.scrub(), e(null, s));
                          }));
                      };
                    })(this),
                  ));
              }),
              (e.prototype.run_salsa20 = function (t, e) {
                var n, r, i, o, s, u, c, a, f;
                ((a = w.findDeferral(arguments)),
                  (i = t.input),
                  (s = t.key),
                  (o = t.iv),
                  (u = t.output_iv),
                  (c = t.progress_hook),
                  (function (t) {
                    return function (n) {
                      ((f = new w.Deferrals(n, {
                        parent: a,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/enc.iced",
                        funcname: "Base.run_salsa20",
                      })),
                        t._check_scrubbed(
                          s,
                          "Salsa20",
                          e,
                          f.defer({ lineno: 229 }),
                        ),
                        f._fulfill());
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        ((n = { input: i, progress_hook: c, key: s, iv: o }),
                          t.version.xsalsa20_rev &&
                            ((n.key = s.clone().endian_reverse()),
                            (n.iv = o.clone().endian_reverse())),
                          (function (t) {
                            ((f = new w.Deferrals(t, {
                              parent: a,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/enc.iced",
                              funcname: "Base.run_salsa20",
                            })),
                              k.bulk_encrypt(
                                n,
                                f.defer({
                                  assign_fn: (function () {
                                    return function () {
                                      return (r = arguments[0]);
                                    };
                                  })(),
                                  lineno: 241,
                                }),
                              ),
                              f._fulfill());
                          })(function () {
                            return (
                              u && (r = o.clone().concat(r)),
                              t.version.xsalsa20_rev &&
                                (n.key.scrub(), n.iv.scrub()),
                              e(null, r)
                            );
                          }));
                      };
                    })(this),
                  ));
              }),
              (e.prototype.run_twofish = function (t, e) {
                var n, r, i, o, s, u, c, a;
                ((c = w.findDeferral(arguments)),
                  (i = t.input),
                  (s = t.key),
                  (o = t.iv),
                  (u = t.progress_hook),
                  (function (t) {
                    return function (n) {
                      ((a = new w.Deferrals(n, {
                        parent: c,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/enc.iced",
                        funcname: "Base.run_twofish",
                      })),
                        t._check_scrubbed(
                          s,
                          "TwoFish",
                          e,
                          a.defer({ lineno: 264 }),
                        ),
                        a._fulfill());
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        ((n = new p(s)),
                          (function (t) {
                            ((a = new w.Deferrals(t, {
                              parent: c,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/enc.iced",
                              funcname: "Base.run_twofish",
                            })),
                              g.bulk_encrypt(
                                {
                                  block_cipher: n,
                                  iv: o,
                                  input: i,
                                  progress_hook: u,
                                  what: "twofish",
                                },
                                a.defer({
                                  assign_fn: (function () {
                                    return function () {
                                      return (r = arguments[0]);
                                    };
                                  })(),
                                  lineno: 266,
                                }),
                              ),
                              a._fulfill());
                          })(function () {
                            return (n.scrub(), e(null, o.clone().concat(r)));
                          }));
                      };
                    })(),
                  ));
              }),
              (e.prototype.run_aes = function (e, n) {
                var r, i, o, s, u, c, a, f;
                ((a = w.findDeferral(arguments)),
                  (o = e.input),
                  (u = e.key),
                  (s = e.iv),
                  (c = e.progress_hook),
                  (function (t) {
                    return function (e) {
                      ((f = new w.Deferrals(e, {
                        parent: a,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/enc.iced",
                        funcname: "Base.run_aes",
                      })),
                        t._check_scrubbed(
                          u,
                          "AES",
                          n,
                          f.defer({ lineno: 281 }),
                        ),
                        f._fulfill());
                    };
                  })(this)(
                    (function (e) {
                      return function () {
                        ((r = new t(u)),
                          (function (t) {
                            ((f = new w.Deferrals(t, {
                              parent: a,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/enc.iced",
                              funcname: "Base.run_aes",
                            })),
                              g.bulk_encrypt(
                                {
                                  block_cipher: r,
                                  iv: s,
                                  input: o,
                                  progress_hook: c,
                                  what: "aes",
                                },
                                f.defer({
                                  assign_fn: (function () {
                                    return function () {
                                      return (i = arguments[0]);
                                    };
                                  })(),
                                  lineno: 283,
                                }),
                              ),
                              f._fulfill());
                          })(function () {
                            return (r.scrub(), n(null, s.clone().concat(i)));
                          }));
                      };
                    })(),
                  ));
              }),
              (e.prototype.scrub = function () {
                var t, e, n, r, i;
                if (
                  (null != this.key && this.key.scrub(),
                  null != this.derived_keys)
                )
                  for (r in ((i = this.derived_keys), i))
                    for (t in ((n = i[r]), n))
                      ((e = n[t]), "extra" !== t && e.scrub());
                return (
                  (this.derived_keys = {}),
                  null != this.salt && this.salt.scrub(),
                  (this.salt = null),
                  (this.key = null)
                );
              }),
              (e.prototype.clone_derived_keys = function () {
                var t, e, n, r, i, o;
                if (((r = null), null != this.derived_keys))
                  for (i in ((r = {}), (o = this.derived_keys), o))
                    for (t in ((n = o[i]), (r[i] = {}), n))
                      ((e = n[t]), (r[i][t] = "extra" === t ? e : e.clone()));
                return r;
              }),
              e
            );
          })()),
          (s = (function (e) {
            function n(t) {
              var e, r, i;
              ((e = t.key),
                (r = t.rng),
                (i = t.version),
                n.__super__.constructor.call(this, { key: e, version: i }),
                (this.rng = r || b.generate));
            }
            return (
              P(n, e),
              (n.prototype.pick_random_ivs = function (e, n) {
                var r, i, o, s, u, c;
                ((u = w.findDeferral(arguments)),
                  e.progress_hook,
                  (r = []),
                  r.push(["aes", t.ivSize]),
                  this.version.use_twofish && r.push(["twofish", p.ivSize]),
                  r.push(["salsa20", k.Salsa20.ivSize]),
                  (i = {}),
                  (function (t) {
                    return function (e) {
                      var n, a, f, l;
                      ((f = r),
                        (a = f.length),
                        (n = 0),
                        (l = function (e) {
                          var r, h, p, y;
                          if (
                            ((r = e),
                            (h = function () {
                              return w.trampoline(function () {
                                return (++n, l(e));
                              });
                            }),
                            (p = h),
                            !(n < a))
                          )
                            return r();
                          ((y = f[n]),
                            (o = y[0]),
                            (s = y[1]),
                            (function (e) {
                              ((c = new w.Deferrals(e, {
                                parent: u,
                                filename:
                                  "/Users/max/src/keybase/triplesec/src/enc.iced",
                                funcname: "Encryptor.pick_random_ivs",
                              })),
                                t.rng(
                                  s,
                                  c.defer({
                                    assign_fn: (function (t, e) {
                                      return function () {
                                        return (t[e] = arguments[0]);
                                      };
                                    })(i, o),
                                    lineno: 407,
                                  }),
                                ),
                                c._fulfill());
                            })(p));
                        }),
                        l(e));
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        return n(i);
                      };
                    })(),
                  ));
              }),
              (n.prototype.resalt = function (t, e) {
                var n, r, i, o, s, u;
                ((s = w.findDeferral(arguments)),
                  (o = t.salt),
                  (r = t.extra_keymaterial),
                  (i = t.progress_hook),
                  (n = null),
                  (function (t) {
                    return function (e) {
                      if (null != o)
                        return e(
                          o.length !== t.version.salt_size
                            ? (n = new Error(
                                "Need a salt of exactly " +
                                  t.version.salt_size +
                                  " bytes (got " +
                                  o.length +
                                  ")",
                              ))
                            : (t.salt = _.alloc(o)),
                        );
                      (function (e) {
                        ((u = new w.Deferrals(e, {
                          parent: s,
                          filename:
                            "/Users/max/src/keybase/triplesec/src/enc.iced",
                          funcname: "Encryptor.resalt",
                        })),
                          t.rng(
                            t.version.salt_size,
                            u.defer({
                              assign_fn: (function (t) {
                                return function () {
                                  return (t.salt = arguments[0]);
                                };
                              })(t),
                              lineno: 423,
                            }),
                          ),
                          u._fulfill());
                      })(e);
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        (function (e) {
                          if (null != n) return e();
                          (function (e) {
                            ((u = new w.Deferrals(e, {
                              parent: s,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/enc.iced",
                              funcname: "Encryptor.resalt",
                            })),
                              t.kdf(
                                {
                                  extra_keymaterial: r,
                                  progress_hook: i,
                                  salt: t.salt,
                                },
                                u.defer({
                                  assign_fn: (function (t) {
                                    return function () {
                                      return (
                                        (n = arguments[0]),
                                        (t.keys = arguments[1])
                                      );
                                    };
                                  })(t),
                                  lineno: 429,
                                }),
                              ),
                              u._fulfill());
                          })(e);
                        })(function () {
                          return e(n, t.keys);
                        });
                      };
                    })(this),
                  ));
              }),
              (n.prototype.run = function (t, e) {
                var n, r, i, o, s, u, c, a, f, l, h, p, y;
                ((p = w.findDeferral(arguments)),
                  (r = t.data),
                  (l = t.salt),
                  (o = t.extra_keymaterial),
                  (c = t.progress_hook),
                  (i = m(e, "Encryptor::run")),
                  (function (t) {
                    return function (e) {
                      if (null == l && null != t.salt) return e();
                      (function (e) {
                        ((y = new w.Deferrals(e, {
                          parent: p,
                          filename:
                            "/Users/max/src/keybase/triplesec/src/enc.iced",
                          funcname: "Encryptor.run",
                        })),
                          t.resalt(
                            { salt: l, extra_keymaterial: o, progress_hook: c },
                            i(y.defer({ lineno: 460 })),
                          ),
                          y._fulfill());
                      })(e);
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        (function (e) {
                          ((y = new w.Deferrals(e, {
                            parent: p,
                            filename:
                              "/Users/max/src/keybase/triplesec/src/enc.iced",
                            funcname: "Encryptor.run",
                          })),
                            t.pick_random_ivs(
                              { progress_hook: c },
                              y.defer({
                                assign_fn: (function () {
                                  return function () {
                                    return (s = arguments[0]);
                                  };
                                })(),
                                lineno: 461,
                              }),
                            ),
                            y._fulfill());
                        })(function () {
                          ((a = _.from_buffer(r)),
                            (function (e) {
                              ((y = new w.Deferrals(e, {
                                parent: p,
                                filename:
                                  "/Users/max/src/keybase/triplesec/src/enc.iced",
                                funcname: "Encryptor.run",
                              })),
                                t.run_salsa20(
                                  {
                                    input: a,
                                    key: t.keys.salsa20,
                                    progress_hook: c,
                                    iv: s.salsa20,
                                    output_iv: !0,
                                  },
                                  i(
                                    y.defer({
                                      assign_fn: (function () {
                                        return function () {
                                          return (u = arguments[0]);
                                        };
                                      })(),
                                      lineno: 463,
                                    }),
                                  ),
                                ),
                                y._fulfill());
                            })(function () {
                              (function (e) {
                                if (!t.version.use_twofish) return e();
                                (function (e) {
                                  ((y = new w.Deferrals(e, {
                                    parent: p,
                                    filename:
                                      "/Users/max/src/keybase/triplesec/src/enc.iced",
                                    funcname: "Encryptor.run",
                                  })),
                                    t.run_twofish(
                                      {
                                        input: u,
                                        key: t.keys.twofish,
                                        progress_hook: c,
                                        iv: s.twofish,
                                      },
                                      i(
                                        y.defer({
                                          assign_fn: (function () {
                                            return function () {
                                              return (u = arguments[0]);
                                            };
                                          })(),
                                          lineno: 465,
                                        }),
                                      ),
                                    ),
                                    y._fulfill());
                                })(e);
                              })(function () {
                                (function (e) {
                                  ((y = new w.Deferrals(e, {
                                    parent: p,
                                    filename:
                                      "/Users/max/src/keybase/triplesec/src/enc.iced",
                                    funcname: "Encryptor.run",
                                  })),
                                    t.run_aes(
                                      {
                                        input: u,
                                        key: t.keys.aes,
                                        progress_hook: c,
                                        iv: s.aes,
                                      },
                                      i(
                                        y.defer({
                                          assign_fn: (function () {
                                            return function () {
                                              return (n = arguments[0]);
                                            };
                                          })(),
                                          lineno: 466,
                                        }),
                                      ),
                                    ),
                                    y._fulfill());
                                })(function () {
                                  (function (e) {
                                    ((y = new w.Deferrals(e, {
                                      parent: p,
                                      filename:
                                        "/Users/max/src/keybase/triplesec/src/enc.iced",
                                      funcname: "Encryptor.run",
                                    })),
                                      t.sign(
                                        {
                                          input: n,
                                          key: t.keys.hmac,
                                          progress_hook: c,
                                          salt: t.salt,
                                        },
                                        i(
                                          y.defer({
                                            assign_fn: (function () {
                                              return function () {
                                                return (h = arguments[0]);
                                              };
                                            })(),
                                            lineno: 467,
                                          }),
                                        ),
                                      ),
                                      y._fulfill());
                                  })(function () {
                                    return (
                                      (f = new _(t.version.header)
                                        .concat(t.salt)
                                        .concat(h)
                                        .concat(n)
                                        .to_buffer()),
                                      S.scrub_buffer(r),
                                      e(null, f)
                                    );
                                  });
                                });
                              });
                            }));
                        });
                      };
                    })(this),
                  ));
              }),
              (n.prototype.clone = function () {
                var t, e, r;
                return (
                  (t = new n({
                    key: null != (e = this.key) ? e.to_buffer() : void 0,
                    rng: this.rng,
                    version: null != (r = this.version) ? r.version : void 0,
                  })),
                  (t.derived_keys = this.clone_derived_keys()),
                  t
                );
              }),
              n
            );
          })(r)),
          (v = function (t, e) {
            var n, r, i, o, u, c, a, f, l, h;
            ((l = w.findDeferral(arguments)),
              (o = t.key),
              (n = t.data),
              (a = t.rng),
              (u = t.progress_hook),
              (f = t.version),
              (r = new s({ key: o, rng: a, version: f })),
              (function (t) {
                return function (t) {
                  ((h = new w.Deferrals(t, {
                    parent: l,
                    filename: "/Users/max/src/keybase/triplesec/src/enc.iced",
                  })),
                    r.run(
                      { data: n, progress_hook: u },
                      h.defer({
                        assign_fn: (function () {
                          return function () {
                            return ((i = arguments[0]), (c = arguments[1]));
                          };
                        })(),
                        lineno: 506,
                      }),
                    ),
                    h._fulfill());
                };
              })()(
                (function (t) {
                  return function () {
                    return (r.scrub(), e(i, c));
                  };
                })(),
              ));
          }),
          (e.V = y),
          (e.encrypt = v),
          (e.Base = r),
          (e.Encryptor = s));
      }).call(this);
    },
    6934: function (t, e, n) {
      (function (t) {
        (function () {
          var r,
            i,
            o,
            s,
            u,
            c,
            a,
            f,
            l,
            h,
            p = [].slice;
          ((r = n(5725)),
            (o = function (t, e, n, i, o) {
              var s, u, c, f;
              for (s in ((c = {}), i)) ((f = i[s]), (c[s] = f));
              return (
                (c[r.lineno] = null != e ? e[r.lineno] : void 0),
                (u = function () {
                  var r, i, s;
                  return (
                    (r = 1 <= arguments.length ? p.call(arguments, 0) : []),
                    null != e && null != (s = e.assign_fn) && s.apply(null, r),
                    t
                      ? ((i = t), o || (t = null), i._fulfill(n, c))
                      : a("overused deferral at " + h(c))
                  );
                }),
                (u[r.trace] = c),
                u
              );
            }),
            (l = 0),
            (u = function (t) {
              return (l++, l % t === 0 && ((l = 0), !0));
            }),
            (f = null),
            (h = function (t) {
              var e;
              return (
                (e = t[r.funcname] || "<anonymous>"),
                e + " (" + t[r.filename] + ":" + (t[r.lineno] + 1) + ")"
              );
            }),
            (a = function (t) {
              return "undefined" !== typeof console && null !== console
                ? console.error("ICED warning: " + t)
                : void 0;
            }),
            (e.trampoline = c =
              function (e) {
                return u(500)
                  ? null !=
                    ("undefined" !== typeof t && null !== t
                      ? t.nextTick
                      : void 0)
                    ? t.nextTick(e)
                    : setTimeout(e)
                  : e();
              }),
            (e.Deferrals = (function () {
              function t(t, e) {
                ((this.trace = e),
                  (this.continuation = t),
                  (this.count = 1),
                  (this.ret = null));
              }
              return (
                (t.prototype._call = function (t) {
                  var e;
                  return this.continuation
                    ? ((f = t),
                      (e = this.continuation),
                      (this.continuation = null),
                      e(this.ret))
                    : a("Entered dead await at " + h(t));
                }),
                (t.prototype._fulfill = function (t, e) {
                  if (!(--this.count > 0))
                    return c(
                      (function (t) {
                        return function () {
                          return t._call(e);
                        };
                      })(this),
                    );
                }),
                (t.prototype.defer = function (t) {
                  var e;
                  return (this.count++, (e = this), o(e, t, null, this.trace));
                }),
                t
              );
            })()),
            (e.findDeferral = function (t) {
              var e, n, i;
              for (n = 0, i = t.length; n < i; n++)
                if (((e = t[n]), null != e ? e[r.trace] : void 0)) return e;
              return null;
            }),
            (e.Rendezvous = (function () {
              var t;
              function e() {
                ((this.completed = []),
                  (this.waiters = []),
                  (this.defer_id = 0));
              }
              return (
                (t = (function () {
                  function t(t, e, n) {
                    ((this.rv = t), (this.id = e), (this.multi = n));
                  }
                  return (
                    (t.prototype.defer = function (t) {
                      return this.rv._defer_with_id(this.id, t, this.multi);
                    }),
                    t
                  );
                })()),
                (e.prototype.wait = function (t) {
                  var e;
                  return this.completed.length
                    ? ((e = this.completed.shift()), t(e))
                    : this.waiters.push(t);
                }),
                (e.prototype.defer = function (t) {
                  var e;
                  return ((e = this.defer_id++), this._defer_with_id(e, t));
                }),
                (e.prototype.id = function (e, n) {
                  return ((n = !!n), new t(this, e, n));
                }),
                (e.prototype._fulfill = function (t, e) {
                  var n;
                  return this.waiters.length
                    ? ((n = this.waiters.shift()), n(t))
                    : this.completed.push(t);
                }),
                (e.prototype._defer_with_id = function (t, e, n) {
                  return (this.count++, o(this, e, t, {}, n));
                }),
                e
              );
            })()),
            (e.stackWalk = s =
              function (t) {
                var e, n, i, o;
                ((n = []), (i = t ? t[r.trace] : f));
                while (i)
                  ((e = "   at " + h(i)),
                    n.push(e),
                    (i =
                      null != i && null != (o = i[r.parent])
                        ? o[r.trace]
                        : void 0));
                return n;
              }),
            (e.exceptionHandler = i =
              function (t, e) {
                var n;
                if ((e || (e = console.error), e(t.stack), (n = s()), n.length))
                  return (
                    e("Iced 'stack' trace (w/ real line numbers):"),
                    e(n.join("\n"))
                  );
              }),
            (e.catchExceptions = function (e) {
              return "undefined" !== typeof t && null !== t
                ? t.on("uncaughtException", function (n) {
                    return (i(n, e), t.exit(1));
                  })
                : void 0;
            }));
        }).call(this);
      }).call(this, n(18));
    },
    6935: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o = {}.hasOwnProperty,
          s = function (t, e) {
            for (var n in e) o.call(e, n) && (t[n] = e[n]);
            function r() {
              this.constructor = t;
            }
            return (
              (r.prototype = e.prototype),
              (t.prototype = new r()),
              (t.__super__ = e.prototype),
              t
            );
          };
        (n(2989).WordArray,
          n(3361).Hasher,
          (t = n(4595).KECCAK),
          (r = (function (t) {
            function e() {
              return e.__super__.constructor.apply(this, arguments);
            }
            return (s(e, t), (e.prototype.pad = 6), e);
          })(t)),
          (i = function (t) {
            var e;
            return ((e = new r().finalize(t)), t.scrub(), e);
          }),
          (e.SHA3STD = r),
          (e.transform = i));
      }).call(this);
    },
    6936: function (t, e, n) {
      (function () {
        var t, r, i, o, s, u, c, a, f, l, h, p, y, _, d, g, v, w;
        ((h = n(3207)),
          (t = n(3973).HMAC_SHA256),
          (p = n(5730).pbkdf2),
          (g = n(4594)),
          (f = g.endian_reverse),
          (r = g.Salsa20InnerCore),
          (v = n(2989)),
          v.ui8a_to_buffer,
          (s = v.WordArray),
          (w = n(3236)),
          (l = w.fixup_uint32),
          (a = w.default_delay),
          (y = w.scrub_vec),
          (o = (function () {
            function t() {
              this.tot = 0;
            }
            return (
              (t.prototype.start = function () {
                return (this._t = Date.now());
              }),
              (t.prototype.stop = function () {
                return (this.tot += Date.now() - this._t);
              }),
              t
            );
          })()),
          new o(),
          (u = function (t, e, n, r, i) {
            var o, s, u;
            ((u = (n << 4) | 0), (s = (r << 4) | 0), (o = (s + (i << 4)) | 0));
            while (s < o)
              ((t[u] = e[s]),
                (t[u + 1] = e[s + 1]),
                (t[u + 2] = e[s + 2]),
                (t[u + 3] = e[s + 3]),
                (t[u + 4] = e[s + 4]),
                (t[u + 5] = e[s + 5]),
                (t[u + 6] = e[s + 6]),
                (t[u + 7] = e[s + 7]),
                (t[u + 8] = e[s + 8]),
                (t[u + 9] = e[s + 9]),
                (t[u + 10] = e[s + 10]),
                (t[u + 11] = e[s + 11]),
                (t[u + 12] = e[s + 12]),
                (t[u + 13] = e[s + 13]),
                (t[u + 14] = e[s + 14]),
                (t[u + 15] = e[s + 15]),
                (s += 16),
                (u += 16));
            return !0;
          }),
          (c = function (t, e, n, r) {
            var i, o;
            ((r = (r << 4) | 0), (i = 0), (o = (n << 4) | 0));
            while (i < r)
              ((t[i] ^= e[o]),
                (t[i + 1] ^= e[o + 1]),
                (t[i + 2] ^= e[o + 2]),
                (t[i + 3] ^= e[o + 3]),
                (t[i + 4] ^= e[o + 4]),
                (t[i + 5] ^= e[o + 5]),
                (t[i + 6] ^= e[o + 6]),
                (t[i + 7] ^= e[o + 7]),
                (t[i + 8] ^= e[o + 8]),
                (t[i + 9] ^= e[o + 9]),
                (t[i + 10] ^= e[o + 10]),
                (t[i + 11] ^= e[o + 11]),
                (t[i + 12] ^= e[o + 12]),
                (t[i + 13] ^= e[o + 13]),
                (t[i + 14] ^= e[o + 14]),
                (t[i + 15] ^= e[o + 15]),
                (i += 16),
                (o += 16));
            return !0;
          }),
          (d = function (t) {
            var e, n, r, i;
            for (n = r = 0, i = t.length; r < i; n = ++r)
              ((e = t[n]), (t[n] = f(e)));
            return !0;
          }),
          (i = (function () {
            function e(e) {
              var n, i, o, s;
              ((n = e.N),
                (this.r = e.r),
                (this.p = e.p),
                (i = e.c),
                (o = e.c0),
                (s = e.c1),
                (this.klass = e.klass),
                this.N || (this.N = 1 << (n || 15)),
                this.r || (this.r = 8),
                this.p || (this.p = 1),
                (this.c0 = o || i || 1),
                (this.c1 = s || i || 1),
                this.klass || (this.klass = t),
                (this.X16_tmp = new Int32Array(16)),
                (this.s20ic = new r(8)));
            }
            return (
              (e.prototype.salsa20_8 = function (t) {
                var e, n, r, i, o;
                for (
                  e = this.s20ic._core(t), n = i = 0, o = e.length;
                  i < o;
                  n = ++i
                )
                  ((r = e[n]), (t[n] += r));
                return !0;
              }),
              (e.prototype.pbkdf2 = function (t, e) {
                var n, r, i, o, s, u, c, a;
                ((c = h.findDeferral(arguments)),
                  (i = t.key),
                  (s = t.salt),
                  (r = t.dkLen),
                  (o = t.progress_hook),
                  (n = t.c),
                  (function (t) {
                    return function (e) {
                      ((a = new h.Deferrals(e, {
                        parent: c,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                        funcname: "Scrypt.pbkdf2",
                      })),
                        p(
                          {
                            key: i,
                            salt: s,
                            c: n,
                            dkLen: r,
                            klass: t.klass,
                            progress_hook: o,
                          },
                          a.defer({
                            assign_fn: (function () {
                              return function () {
                                return (u = arguments[0]);
                              };
                            })(),
                            lineno: 109,
                          }),
                        ),
                        a._fulfill());
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        return e(u);
                      };
                    })(),
                  ));
              }),
              (e.prototype.blockmix_salsa8 = function (t, e) {
                var n, r, i, o;
                for (
                  n = this.X16_tmp,
                    u(n, t, 0, 2 * this.r - 1, 1),
                    r = i = 0,
                    o = 2 * this.r;
                  0 <= o ? i < o : i > o;
                  r = 0 <= o ? ++i : --i
                )
                  (c(n, t, r, 1), this.salsa20_8(n), u(e, n, r, 0, 1));
                r = 0;
                while (r < this.r) (u(t, e, r, 2 * r, 1), r++);
                r = 0;
                while (r < this.r) (u(t, e, r + this.r, 2 * r + 1, 1), r++);
                return !0;
              }),
              (e.prototype.smix = function (t, e) {
                var n, r, i, o, s, f, p, y, _, d, g, v;
                ((g = h.findDeferral(arguments)),
                  (n = t.B),
                  (r = t.V),
                  (o = t.XY),
                  (_ = t.progress_hook),
                  (i = o),
                  (y = 2 * this.r),
                  (s = o.subarray(16 * y)),
                  u(i, n, 0, 0, y),
                  (f = 0),
                  (function (t) {
                    return function (e) {
                      var n;
                      ((n = function (e) {
                        var o, c, l;
                        if (
                          ((o = e),
                          (c = function () {
                            return h.trampoline(function () {
                              return n(e);
                            });
                          }),
                          (l = c),
                          !(f < t.N))
                        )
                          return o();
                        d = Math.min(t.N, f + 2048);
                        while (f < d)
                          (u(r, i, y * f, 0, y), t.blockmix_salsa8(i, s), f++);
                        ("function" === typeof _ && _(f),
                          (function (t) {
                            ((v = new h.Deferrals(t, {
                              parent: g,
                              filename:
                                "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                              funcname: "Scrypt.smix",
                            })),
                              a(0, 0, v.defer({ lineno: 166 })),
                              v._fulfill());
                          })(l));
                      }),
                        n(e));
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        ((f = 0),
                          (function (e) {
                            var n;
                            ((n = function (e) {
                              var o, u, w;
                              if (
                                ((o = e),
                                (u = function () {
                                  return h.trampoline(function () {
                                    return n(e);
                                  });
                                }),
                                (w = u),
                                !(f < t.N))
                              )
                                return o();
                              d = Math.min(t.N, f + 256);
                              while (f < d)
                                ((p = l(i[16 * (y - 1)]) & (t.N - 1)),
                                  c(i, r, p * y, y),
                                  t.blockmix_salsa8(i, s),
                                  f++);
                              ("function" === typeof _ && _(f + t.N),
                                (function (t) {
                                  ((v = new h.Deferrals(t, {
                                    parent: g,
                                    filename:
                                      "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                                    funcname: "Scrypt.smix",
                                  })),
                                    a(0, 0, v.defer({ lineno: 183 })),
                                    v._fulfill());
                                })(w));
                            }),
                              n(e));
                          })(function () {
                            return (u(n, i, 0, 0, y), e());
                          }));
                      };
                    })(this),
                  ));
              }),
              (e.prototype.run = function (t, e) {
                var n, r, i, o, u, c, a, f, l, p, _, g, v, w, m, b;
                ((g = h.findDeferral(arguments)),
                  (a = t.key),
                  (_ = t.salt),
                  (u = t.dkLen),
                  (p = t.progress_hook),
                  (r = 4294967295),
                  u > r
                    ? new Error("asked for too much data")
                    : this.r * this.p >= 1 << 30
                      ? new Error("r & p are too big")
                      : (this.r > r / 128 / this.p ||
                          this.r > r / 256 ||
                          this.N > r / 128 / this.r) &&
                        new Error("N is too big"),
                  (o = new Int32Array(64 * this.r)),
                  (i = new Int32Array(32 * this.r * this.N)),
                  (f = function (t) {
                    return (
                      (t.what += " (pass 1)"),
                      "function" === typeof p ? p(t) : void 0
                    );
                  }),
                  (function (t) {
                    return function (e) {
                      ((v = new h.Deferrals(e, {
                        parent: g,
                        filename:
                          "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                        funcname: "Scrypt.run",
                      })),
                        t.pbkdf2(
                          {
                            key: a.clone(),
                            salt: _,
                            dkLen: 128 * t.r * t.p,
                            c: t.c0,
                            progress_hook: f,
                          },
                          v.defer({
                            assign_fn: (function () {
                              return function () {
                                return (n = arguments[0]);
                              };
                            })(),
                            lineno: 214,
                          }),
                        ),
                        v._fulfill());
                    };
                  })(this)(
                    (function (t) {
                      return function () {
                        ((n = new Int32Array(n.words)),
                          d(n),
                          (f = function (e) {
                            return function (n) {
                              return "function" === typeof p
                                ? p({
                                    i: n + e * t.N * 2,
                                    what: "scrypt",
                                    total: t.p * t.N * 2,
                                  })
                                : void 0;
                            };
                          }),
                          (function (e) {
                            var r;
                            ((c = 0),
                              (w = 0),
                              (m = t.p),
                              (b = m > w),
                              (r = function (e) {
                                var s, u, a;
                                if (
                                  ((s = e),
                                  (u = function () {
                                    return h.trampoline(function () {
                                      return (b ? (c += 1) : (c -= 1), r(e));
                                    });
                                  }),
                                  (a = u),
                                  (!0 === b && c >= t.p) ||
                                    (!1 === b && c <= t.p))
                                )
                                  return s();
                                (function (e) {
                                  ((v = new h.Deferrals(e, {
                                    parent: g,
                                    filename:
                                      "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                                    funcname: "Scrypt.run",
                                  })),
                                    t.smix(
                                      {
                                        B: n.subarray(32 * t.r * c),
                                        V: i,
                                        XY: o,
                                        progress_hook: f(c),
                                      },
                                      v.defer({ lineno: 221 }),
                                    ),
                                    v._fulfill());
                                })(a);
                              }),
                              r(e));
                          })(function () {
                            (d(n),
                              (f = function (t) {
                                return (
                                  (t.what += " (pass 2)"),
                                  "function" === typeof p ? p(t) : void 0
                                );
                              }),
                              (function (e) {
                                ((v = new h.Deferrals(e, {
                                  parent: g,
                                  filename:
                                    "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                                  funcname: "Scrypt.run",
                                })),
                                  t.pbkdf2(
                                    {
                                      key: a,
                                      salt: s.from_i32a(n),
                                      dkLen: u,
                                      c: t.c1,
                                      progress_hook: f,
                                    },
                                    v.defer({
                                      assign_fn: (function () {
                                        return function () {
                                          return (l = arguments[0]);
                                        };
                                      })(),
                                      lineno: 229,
                                    }),
                                  ),
                                  v._fulfill());
                              })(function () {
                                return (y(o), y(i), y(n), a.scrub(), e(l));
                              }));
                          }));
                      };
                    })(this),
                  ));
              }),
              e
            );
          })()),
          (_ = function (t, e) {
            var n, r, o, s, u, c, a, f, l, p, y, _, d, g, v;
            ((g = h.findDeferral(arguments)),
              (a = t.key),
              (_ = t.salt),
              (y = t.r),
              (n = t.N),
              (l = t.p),
              (o = t.c0),
              (s = t.c1),
              (r = t.c),
              (f = t.klass),
              (p = t.progress_hook),
              (u = t.dkLen),
              (c = new i({ r: y, N: n, p: l, c: r, c0: o, c1: s, klass: f })),
              (function (t) {
                return function (t) {
                  ((v = new h.Deferrals(t, {
                    parent: g,
                    filename:
                      "/Users/max/src/keybase/triplesec/src/scrypt.iced",
                  })),
                    c.run(
                      { key: a, salt: _, progress_hook: p, dkLen: u },
                      v.defer({
                        assign_fn: (function () {
                          return function () {
                            return (d = arguments[0]);
                          };
                        })(),
                        lineno: 259,
                      }),
                    ),
                    v._fulfill());
                };
              })()(
                (function (t) {
                  return function () {
                    return e(d);
                  };
                })(),
              ));
          }),
          (e.Scrypt = i),
          (e.scrypt = _),
          (e.v_endian_reverse = d));
      }).call(this);
    },
    6937: function (t, e, n) {
      (function (t) {
        (function () {
          var r, i, o, s, u, c, a, f, l, h, p, y, _, d, g, v, w;
          if (
            ((a = n(3207)),
            function () {},
            (l = n(11468)),
            (r = n(11470).ADRBG),
            (o = n(2989).WordArray),
            (s = n(5728).XOR),
            (y = n(3236)),
            (_ = null),
            (u = function (e) {
              var n;
              return ((n = new Uint8Array(e)), _(n), t.from(n));
            }),
            (_ =
              null !=
              (f =
                "undefined" !== typeof window &&
                null !== window &&
                null != (v = window.crypto)
                  ? v.getRandomValues
                  : void 0)
                ? f.bind(window.crypto)
                : null !=
                    (f =
                      "undefined" !== typeof window &&
                      null !== window &&
                      null != (w = window.msCrypto)
                        ? w.getRandomValues
                        : void 0)
                  ? f.bind(window.msCrypto)
                  : null),
            null != _)
          )
            d = u;
          else
            try {
              ((p = n(2764).rng), null != p && (d = p));
            } catch (m) {
              m;
            }
          ((h = function (t) {
            if (null == d)
              throw new Error(
                'No rng found; tried requiring "crypto" and window.crypto',
              );
            return d(t);
          }),
            (i = (function () {
              function e() {
                ((this.meg = new l.Generator()),
                  (this.adrbg = new r(
                    (function (t) {
                      return function (e, n) {
                        return t.gen_seed(e, n);
                      };
                    })(this),
                    s.sign,
                  )));
              }
              return (
                (e.prototype.now_to_buffer = function () {
                  var e, n, r, i;
                  return (
                    (n = Date.now()),
                    (r = n % 1e3),
                    (i = Math.floor(n / 1e3)),
                    (e = t.alloc(8)),
                    e.writeUInt32BE(i, 0),
                    e.writeUInt32BE(r, 4),
                    e
                  );
                }),
                (e.prototype.gen_seed = function (e, n) {
                  var r, i, s, u, c, f, l, p;
                  ((l = a.findDeferral(arguments)),
                    (u = e / 8),
                    (i = []),
                    i.push(this.now_to_buffer()),
                    (function (t) {
                      return function (n) {
                        ((p = new a.Deferrals(n, {
                          parent: l,
                          filename:
                            "/Users/max/src/keybase/triplesec/src/prng.iced",
                          funcname: "PRNG.gen_seed",
                        })),
                          t.meg.generate(
                            e,
                            p.defer({
                              assign_fn: (function () {
                                return function () {
                                  return (f = arguments[0]);
                                };
                              })(),
                              lineno: 83,
                            }),
                          ),
                          p._fulfill());
                      };
                    })(this)(
                      (function (e) {
                        return function () {
                          var a, l;
                          for (
                            i.push(e.now_to_buffer()),
                              i.push(t.from(f)),
                              i.push(h(u)),
                              i.push(e.now_to_buffer()),
                              s = t.concat(i),
                              c = o.from_buffer(s),
                              y.scrub_buffer(s),
                              a = 0,
                              l = i.length;
                            a < l;
                            a++
                          )
                            ((r = i[a]), y.scrub_buffer(r));
                          return n(c);
                        };
                      })(this),
                    ));
                }),
                (e.prototype.generate = function (t, e) {
                  return this.adrbg.generate(t, e);
                }),
                e
              );
            })()),
            (g = null),
            (c = function (t, e) {
              return (null == g && (g = new i()), g.generate(t, e));
            }),
            (e.PRNG = i),
            (e.generate = c),
            (e.native_rng = h));
        }).call(this);
      }).call(this, n(2).Buffer);
    },
    6938: function (t, e, n) {
      (function () {
        var t,
          r,
          i,
          o,
          s,
          u,
          c,
          a,
          f,
          l = [].slice;
        ((f = n(799)),
          (r = n(3207)["const"]),
          (e.BaseError = t =
            function (t, e) {
              return (
                "function" === typeof Error.captureStackTrace &&
                  Error.captureStackTrace(this, this.constructor),
                (this.message = t || "Error")
              );
            }),
          f.inherits(t, Error),
          (t.prototype.name = "BaseError"),
          (a = function (t) {
            return t[0].toUpperCase() + t.slice(1).toLowerCase();
          }),
          (i = function (t) {
            var e;
            return (function () {
              var n, r, i, o;
              for (i = t.split(/_/), o = [], n = 0, r = i.length; n < r; n++)
                ((e = i[n]), o.push(a(e)));
              return o;
            })().join("");
          }),
          (u = function (e, n, r) {
            var i;
            return (
              (i = function (e) {
                return (
                  t.call(this, e || r, this.constructor),
                  (this.istack = []),
                  (this.code = n),
                  this
                );
              }),
              f.inherits(i, t),
              (i.prototype.name = e),
              (i.prototype.inspect = function () {
                return (
                  "[" + e + ": " + this.message + " (code " + this.code + ")]"
                );
              }),
              i
            );
          }),
          (o = function (t, e) {
            return ((e[r.trace] = t[r.trace]), e);
          }),
          (e.make_errors = function (t) {
            var e, n, r, o, s, c;
            for (r in ((s = { msg: {}, name: {}, code: {} }),
            (t.OK = "Success"),
            (n = 100),
            t))
              ((o = t[r]),
                "OK" !== r
                  ? ((e = i(r) + "Error"), (c = n++), (s[e] = u(e, c, o)))
                  : (c = 0),
                (s[r] = c),
                (s.msg[r] = s.msg[c] = o),
                (s.name[r] = s.name[c] = r),
                (s.code[r] = c));
            return s;
          }),
          (s = function (t, e) {
            if (null != e)
              return (null == t.istack && (t.istack = []), t.istack.push(e));
          }),
          (e.make_esc = c =
            function (t, e) {
              var n;
              return (
                null == e && (e = null != (n = c.caller) ? n.name : void 0),
                function (n) {
                  return o(n, function () {
                    var r, i;
                    return (
                      (i = arguments[0]),
                      (r = 2 <= arguments.length ? l.call(arguments, 1) : []),
                      null == i
                        ? n.apply(null, r)
                        : t.__esc
                          ? void 0
                          : ((t.__esc = !0),
                            s(i, null != e ? e : "unnamed error"),
                            t(i))
                    );
                  });
                }
              );
            }),
          (e.EscOk = (function () {
            function t(t, e) {
              ((this.gcb = t), (this.where = e));
            }
            return (
              (t.prototype.bailout = function () {
                var t;
                if (this.gcb) return ((t = this.gcb), (this.gcb = null), t(!1));
              }),
              (t.prototype.check_ok = function (t) {
                return o(
                  t,
                  (function (e) {
                    return function () {
                      var n, r;
                      return (
                        (r = arguments[0]),
                        (n = 2 <= arguments.length ? l.call(arguments, 1) : []),
                        r ? t.apply(null, n) : e.bailout()
                      );
                    };
                  })(this),
                );
              }),
              (t.prototype.check_err = function (t) {
                return o(
                  t,
                  (function (e) {
                    return function () {
                      var n, r;
                      return (
                        (r = arguments[0]),
                        (n = 2 <= arguments.length ? l.call(arguments, 1) : []),
                        null != r
                          ? (s(r, e.where), e.bailout())
                          : t.apply(null, n)
                      );
                    };
                  })(this),
                );
              }),
              (t.prototype.check_non_null = function (t) {
                return o(
                  t,
                  (function (e) {
                    return function () {
                      var n;
                      return (
                        (n = 1 <= arguments.length ? l.call(arguments, 0) : []),
                        null == n[0] ? e.bailout() : t.apply(null, n)
                      );
                    };
                  })(this),
                );
              }),
              t
            );
          })()),
          (e.EscErr = (function () {
            function t(t, e) {
              ((this.gcb = t), (this.where = e));
            }
            return (
              (t.prototype.finish = function (t) {
                var e;
                if (this.gcb) return ((e = this.gcb), (this.gcb = null), e(t));
              }),
              (t.prototype.check_ok = function (t, e, n) {
                return (
                  null == e && (e = Error),
                  null == n && (n = null),
                  o(t, function () {
                    var r, i, o;
                    return (
                      (o = arguments[0]),
                      (r = 2 <= arguments.length ? l.call(arguments, 1) : []),
                      o
                        ? t.apply(null, r)
                        : ((i = new e(n)), s(i, this.where), this.finish(i))
                    );
                  })
                );
              }),
              (t.prototype.check_err = function (t) {
                return o(t, function () {
                  var e, n;
                  return (
                    (n = arguments[0]),
                    (e = 2 <= arguments.length ? l.call(arguments, 1) : []),
                    null != n
                      ? (s(n, this.where), this.finish(n))
                      : t.apply(null, e)
                  );
                });
              }),
              t
            );
          })()),
          (e.Canceler = (function () {
            function t(t) {
              ((this.klass = null != t ? t : Error), (this._canceled = !1));
            }
            return (
              (t.prototype.is_canceled = function () {
                return this._canceled;
              }),
              (t.prototype.is_ok = function () {
                return !this._canceled;
              }),
              (t.prototype.cancel = function () {
                return (this._canceled = !0);
              }),
              (t.prototype.err = function () {
                return this._canceled ? new this.klass("Aborted") : null;
              }),
              t
            );
          })()),
          (e.chain = function (t, e) {
            return function () {
              var n;
              return (
                (n = 1 <= arguments.length ? l.call(arguments, 0) : []),
                e(function () {
                  return t.apply(null, n);
                })
              );
            };
          }),
          (e.chain_err = function (t, e) {
            return function () {
              var n;
              return (
                (n = 1 <= arguments.length ? l.call(arguments, 0) : []),
                e(function () {
                  var e;
                  return (
                    (e = 1 <= arguments.length ? l.call(arguments, 0) : []),
                    t.apply(null, null != e[0] && null == n[0] ? e : n)
                  );
                })
              );
            };
          }));
      }).call(this);
    },
    6946: function (t, e, n) {
      "use strict";
      var r =
        (this && this.__awaiter) ||
        function (t, e, n, r) {
          function i(t) {
            return t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                });
          }
          return new (n || (n = Promise))(function (n, o) {
            function s(t) {
              try {
                c(r.next(t));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              try {
                c(r["throw"](t));
              } catch (e) {
                o(e);
              }
            }
            function c(t) {
              t.done ? n(t.value) : i(t.value).then(s, u);
            }
            c((r = r.apply(t, e || [])).next());
          });
        };
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.hashSha256Async = e.hashSha256 = void 0));
      const i = n(378);
      function o(t) {
        return (0, i.sha256)(t);
      }
      function s(t) {
        return r(this, void 0, void 0, function* () {
          try {
            const e =
              "undefined" !== typeof crypto &&
              "undefined" !== typeof crypto.subtle;
            if (e) {
              const e = "string" === typeof t ? new TextEncoder().encode(t) : t,
                n = yield crypto.subtle.digest("SHA-256", e);
              return new Uint8Array(n);
            }
            {
              const e = n(11507);
              if (!e.createHash)
                throw new Error(
                  "`crypto` module does not contain `createHash`",
                );
              return Promise.resolve(e.createHash("sha256").update(t).digest());
            }
          } catch (e) {
            return (
              console.log(e),
              console.log(
                'Crypto lib not found. Neither the global `crypto.subtle` Web Crypto API, nor the or the Node.js `require("crypto").createHash` module is available. Falling back to JS implementation.',
              ),
              Promise.resolve(o(t))
            );
          }
        });
      }
      ((e.hashSha256 = o), (e.hashSha256Async = s));
    },
  },
]);
