(self.webpackChunkrestaurant_apps =
  self.webpackChunkrestaurant_apps || []).push([
  [883],
  {
    645: (t) => {
      "use strict";
      t.exports = function (t) {
        var e = [];
        return (
          (e.toString = function () {
            return this.map(function (e) {
              var n = "",
                r = void 0 !== e[5];
              return (
                e[4] && (n += "@supports (".concat(e[4], ") {")),
                e[2] && (n += "@media ".concat(e[2], " {")),
                r &&
                  (n += "@layer".concat(
                    e[5].length > 0 ? " ".concat(e[5]) : "",
                    " {"
                  )),
                (n += t(e)),
                r && (n += "}"),
                e[2] && (n += "}"),
                e[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (e.i = function (t, n, r, o, i) {
            "string" == typeof t && (t = [[null, t, void 0]]);
            var a = {};
            if (r)
              for (var c = 0; c < this.length; c++) {
                var s = this[c][0];
                null != s && (a[s] = !0);
              }
            for (var u = 0; u < t.length; u++) {
              var f = [].concat(t[u]);
              (r && a[f[0]]) ||
                (void 0 !== i &&
                  (void 0 === f[5] ||
                    (f[1] = "@layer"
                      .concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {")
                      .concat(f[1], "}")),
                  (f[5] = i)),
                n &&
                  (f[2]
                    ? ((f[1] = "@media ".concat(f[2], " {").concat(f[1], "}")),
                      (f[2] = n))
                    : (f[2] = n)),
                o &&
                  (f[4]
                    ? ((f[1] = "@supports ("
                        .concat(f[4], ") {")
                        .concat(f[1], "}")),
                      (f[4] = o))
                    : (f[4] = "".concat(o))),
                e.push(f));
            }
          }),
          e
        );
      };
    },
    537: (t) => {
      "use strict";
      t.exports = function (t) {
        var e = t[1],
          n = t[3];
        if (!n) return e;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            o =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                r
              ),
            i = "/*# ".concat(o, " */");
          return [e].concat([i]).join("\n");
        }
        return [e].join("\n");
      };
    },
    666: (t) => {
      var e = (function (t) {
        "use strict";
        var e,
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          c = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, n) {
            return (t[e] = n);
          };
        }
        function f(t, e, n, r) {
          var i = e && e.prototype instanceof g ? e : g,
            a = Object.create(i.prototype),
            c = new O(r || []);
          return o(a, "_invoke", { value: I(t, n, c) }), a;
        }
        function l(t, e, n) {
          try {
            return { type: "normal", arg: t.call(e, n) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = f;
        var h = "suspendedStart",
          p = "suspendedYield",
          v = "executing",
          d = "completed",
          y = {};
        function g() {}
        function m() {}
        function w() {}
        var b = {};
        u(b, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          L = E && E(E(_([])));
        L && L !== n && r.call(L, a) && (b = L);
        var x = (w.prototype = g.prototype = Object.create(b));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function j(t, e) {
          function n(o, i, a, c) {
            var s = l(t[o], t, i);
            if ("throw" !== s.type) {
              var u = s.arg,
                f = u.value;
              return f && "object" == typeof f && r.call(f, "__await")
                ? e.resolve(f.__await).then(
                    function (t) {
                      n("next", t, a, c);
                    },
                    function (t) {
                      n("throw", t, a, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (u.value = t), a(u);
                    },
                    function (t) {
                      return n("throw", t, a, c);
                    }
                  );
            }
            c(s.arg);
          }
          var i;
          o(this, "_invoke", {
            value: function (t, r) {
              function o() {
                return new e(function (e, o) {
                  n(t, r, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function I(t, e, n) {
          var r = h;
          return function (o, i) {
            if (r === v) throw new Error("Generator is already running");
            if (r === d) {
              if ("throw" === o) throw i;
              return T();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var c = k(a, n);
                if (c) {
                  if (c === y) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (r === h) throw ((r = d), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = v;
              var s = l(t, e, n);
              if ("normal" === s.type) {
                if (((r = n.done ? d : p), s.arg === y)) continue;
                return { value: s.arg, done: n.done };
              }
              "throw" === s.type &&
                ((r = d), (n.method = "throw"), (n.arg = s.arg));
            }
          };
        }
        function k(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                k(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              y
            );
          var i = l(o, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), y
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                y)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              y);
        }
        function P(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function D(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function O(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(P, this),
            this.reset(!0);
        }
        function _(t) {
          if (t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          return { next: T };
        }
        function T() {
          return { value: e, done: !0 };
        }
        return (
          (m.prototype = w),
          o(x, "constructor", { value: w, configurable: !0 }),
          o(w, "constructor", { value: m, configurable: !0 }),
          (m.displayName = u(w, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return (
              !!e &&
              (e === m || "GeneratorFunction" === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(x)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          S(j.prototype),
          u(j.prototype, c, function () {
            return this;
          }),
          (t.AsyncIterator = j),
          (t.async = function (e, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new j(f(e, n, r, o), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(x),
          u(x, s, "Generator"),
          u(x, a, function () {
            return this;
          }),
          u(x, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = Object(t),
              n = [];
            for (var r in e) n.push(r);
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in e) return (t.value = r), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (t.values = _),
          (O.prototype = {
            constructor: O,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(D),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (c.type = "throw"),
                  (c.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ("root" === a.tryLoc) return o("end");
                if (a.tryLoc <= this.prev) {
                  var s = r.call(a, "catchLoc"),
                    u = r.call(a, "finallyLoc");
                  if (s && u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), y)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                y
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), D(n), y;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e];
                if (n.tryLoc === t) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    D(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: _(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                y
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = e;
      } catch (t) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = e)
          : Function("r", "regeneratorRuntime = r")(e);
      }
    },
    379: (t) => {
      "use strict";
      var e = [];
      function n(t) {
        for (var n = -1, r = 0; r < e.length; r++)
          if (e[r].identifier === t) {
            n = r;
            break;
          }
        return n;
      }
      function r(t, r) {
        for (var i = {}, a = [], c = 0; c < t.length; c++) {
          var s = t[c],
            u = r.base ? s[0] + r.base : s[0],
            f = i[u] || 0,
            l = "".concat(u, " ").concat(f);
          i[u] = f + 1;
          var h = n(l),
            p = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5],
            };
          if (-1 !== h) e[h].references++, e[h].updater(p);
          else {
            var v = o(p, r);
            (r.byIndex = c),
              e.splice(c, 0, { identifier: l, updater: v, references: 1 });
          }
          a.push(l);
        }
        return a;
      }
      function o(t, e) {
        var n = e.domAPI(e);
        return (
          n.update(t),
          function (e) {
            if (e) {
              if (
                e.css === t.css &&
                e.media === t.media &&
                e.sourceMap === t.sourceMap &&
                e.supports === t.supports &&
                e.layer === t.layer
              )
                return;
              n.update((t = e));
            } else n.remove();
          }
        );
      }
      t.exports = function (t, o) {
        var i = r((t = t || []), (o = o || {}));
        return function (t) {
          t = t || [];
          for (var a = 0; a < i.length; a++) {
            var c = n(i[a]);
            e[c].references--;
          }
          for (var s = r(t, o), u = 0; u < i.length; u++) {
            var f = n(i[u]);
            0 === e[f].references && (e[f].updater(), e.splice(f, 1));
          }
          i = s;
        };
      };
    },
    569: (t) => {
      "use strict";
      var e = {};
      t.exports = function (t, n) {
        var r = (function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        })(t);
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        r.appendChild(n);
      };
    },
    216: (t) => {
      "use strict";
      t.exports = function (t) {
        var e = document.createElement("style");
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    565: (t, e, n) => {
      "use strict";
      t.exports = function (t) {
        var e = n.nc;
        e && t.setAttribute("nonce", e);
      };
    },
    795: (t) => {
      "use strict";
      t.exports = function (t) {
        if ("undefined" == typeof document)
          return { update: function () {}, remove: function () {} };
        var e = t.insertStyleElement(t);
        return {
          update: function (n) {
            !(function (t, e, n) {
              var r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")),
                n.media && (r += "@media ".concat(n.media, " {"));
              var o = void 0 !== n.layer;
              o &&
                (r += "@layer".concat(
                  n.layer.length > 0 ? " ".concat(n.layer) : "",
                  " {"
                )),
                (r += n.css),
                o && (r += "}"),
                n.media && (r += "}"),
                n.supports && (r += "}");
              var i = n.sourceMap;
              i &&
                "undefined" != typeof btoa &&
                (r +=
                  "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    " */"
                  )),
                e.styleTagTransform(r, t, e.options);
            })(e, t, n);
          },
          remove: function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(e);
          },
        };
      };
    },
    589: (t) => {
      "use strict";
      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t));
        }
      };
    },
    424: (t, e, n) => {
      "use strict";
      n.d(e, { X3: () => d });
      const r = (t, e) => e.some((e) => t instanceof e);
      let o, i;
      const a = new WeakMap(),
        c = new WeakMap(),
        s = new WeakMap(),
        u = new WeakMap(),
        f = new WeakMap();
      let l = {
        get(t, e, n) {
          if (t instanceof IDBTransaction) {
            if ("done" === e) return c.get(t);
            if ("objectStoreNames" === e) return t.objectStoreNames || s.get(t);
            if ("store" === e)
              return n.objectStoreNames[1]
                ? void 0
                : n.objectStore(n.objectStoreNames[0]);
          }
          return p(t[e]);
        },
        set: (t, e, n) => ((t[e] = n), !0),
        has: (t, e) =>
          (t instanceof IDBTransaction && ("done" === e || "store" === e)) ||
          e in t,
      };
      function h(t) {
        return "function" == typeof t
          ? (e = t) !== IDBDatabase.prototype.transaction ||
            "objectStoreNames" in IDBTransaction.prototype
            ? (
                i ||
                (i = [
                  IDBCursor.prototype.advance,
                  IDBCursor.prototype.continue,
                  IDBCursor.prototype.continuePrimaryKey,
                ])
              ).includes(e)
              ? function (...t) {
                  return e.apply(v(this), t), p(a.get(this));
                }
              : function (...t) {
                  return p(e.apply(v(this), t));
                }
            : function (t, ...n) {
                const r = e.call(v(this), t, ...n);
                return s.set(r, t.sort ? t.sort() : [t]), p(r);
              }
          : (t instanceof IDBTransaction &&
              (function (t) {
                if (c.has(t)) return;
                const e = new Promise((e, n) => {
                  const r = () => {
                      t.removeEventListener("complete", o),
                        t.removeEventListener("error", i),
                        t.removeEventListener("abort", i);
                    },
                    o = () => {
                      e(), r();
                    },
                    i = () => {
                      n(
                        t.error || new DOMException("AbortError", "AbortError")
                      ),
                        r();
                    };
                  t.addEventListener("complete", o),
                    t.addEventListener("error", i),
                    t.addEventListener("abort", i);
                });
                c.set(t, e);
              })(t),
            r(
              t,
              o ||
                (o = [
                  IDBDatabase,
                  IDBObjectStore,
                  IDBIndex,
                  IDBCursor,
                  IDBTransaction,
                ])
            )
              ? new Proxy(t, l)
              : t);
        var e;
      }
      function p(t) {
        if (t instanceof IDBRequest)
          return (function (t) {
            const e = new Promise((e, n) => {
              const r = () => {
                  t.removeEventListener("success", o),
                    t.removeEventListener("error", i);
                },
                o = () => {
                  e(p(t.result)), r();
                },
                i = () => {
                  n(t.error), r();
                };
              t.addEventListener("success", o), t.addEventListener("error", i);
            });
            return (
              e
                .then((e) => {
                  e instanceof IDBCursor && a.set(e, t);
                })
                .catch(() => {}),
              f.set(e, t),
              e
            );
          })(t);
        if (u.has(t)) return u.get(t);
        const e = h(t);
        return e !== t && (u.set(t, e), f.set(e, t)), e;
      }
      const v = (t) => f.get(t);
      function d(
        t,
        e,
        { blocked: n, upgrade: r, blocking: o, terminated: i } = {}
      ) {
        const a = indexedDB.open(t, e),
          c = p(a);
        return (
          r &&
            a.addEventListener("upgradeneeded", (t) => {
              r(p(a.result), t.oldVersion, t.newVersion, p(a.transaction), t);
            }),
          n &&
            a.addEventListener("blocked", (t) =>
              n(t.oldVersion, t.newVersion, t)
            ),
          c
            .then((t) => {
              i && t.addEventListener("close", () => i()),
                o &&
                  t.addEventListener("versionchange", (t) =>
                    o(t.oldVersion, t.newVersion, t)
                  );
            })
            .catch(() => {}),
          c
        );
      }
      const y = ["get", "getKey", "getAll", "getAllKeys", "count"],
        g = ["put", "add", "delete", "clear"],
        m = new Map();
      function w(t, e) {
        if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e)
          return;
        if (m.get(e)) return m.get(e);
        const n = e.replace(/FromIndex$/, ""),
          r = e !== n,
          o = g.includes(n);
        if (
          !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
          (!o && !y.includes(n))
        )
          return;
        const i = async function (t, ...e) {
          const i = this.transaction(t, o ? "readwrite" : "readonly");
          let a = i.store;
          return (
            r && (a = a.index(e.shift())),
            (await Promise.all([a[n](...e), o && i.done]))[0]
          );
        };
        return m.set(e, i), i;
      }
      var b;
      (b = l),
        (l = {
          ...b,
          get: (t, e, n) => w(t, e) || b.get(t, e, n),
          has: (t, e) => !!w(t, e) || b.has(t, e),
        });
    },
    131: (t, e, n) => {
      "use strict";
      n.d(e, { ZW: () => p });
      try {
        self["workbox:window:6.5.3"] && _();
      } catch (r) {}
      function r(t, e) {
        return new Promise(function (n) {
          var r = new MessageChannel();
          (r.port1.onmessage = function (t) {
            n(t.data);
          }),
            t.postMessage(e, [r.port2]);
        });
      }
      function o(t, e) {
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
                if ("string" == typeof t) return o(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? o(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0;
            return function () {
              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        return (n = t[Symbol.iterator]()).next.bind(n);
      }
      try {
        self["workbox:core:6.5.3"] && _();
      } catch (r) {}
      var a = function () {
        var t = this;
        this.promise = new Promise(function (e, n) {
          (t.resolve = e), (t.reject = n);
        });
      };
      function c(t, e) {
        var n = location.href;
        return new URL(t, n).href === new URL(e, n).href;
      }
      var s = function (t, e) {
        (this.type = t), Object.assign(this, e);
      };
      function u(t, e, n) {
        return n
          ? e
            ? e(t)
            : t
          : ((t && t.then) || (t = Promise.resolve(t)), e ? t.then(e) : t);
      }
      function f() {}
      var l = { type: "SKIP_WAITING" };
      function h(t, e) {
        if (!e) return t && t.then ? t.then(f) : Promise.resolve();
      }
      var p = (function (t) {
        var e, n;
        function o(e, n) {
          var r, o;
          return (
            void 0 === n && (n = {}),
            ((r = t.call(this) || this).nn = {}),
            (r.tn = 0),
            (r.rn = new a()),
            (r.en = new a()),
            (r.on = new a()),
            (r.un = 0),
            (r.an = new Set()),
            (r.cn = function () {
              var t = r.fn,
                e = t.installing;
              r.tn > 0 ||
              !c(e.scriptURL, r.sn.toString()) ||
              performance.now() > r.un + 6e4
                ? ((r.vn = e), t.removeEventListener("updatefound", r.cn))
                : ((r.hn = e), r.an.add(e), r.rn.resolve(e)),
                ++r.tn,
                e.addEventListener("statechange", r.ln);
            }),
            (r.ln = function (t) {
              var e = r.fn,
                n = t.target,
                o = n.state,
                i = n === r.vn,
                a = { sw: n, isExternal: i, originalEvent: t };
              !i && r.mn && (a.isUpdate = !0),
                r.dispatchEvent(new s(o, a)),
                "installed" === o
                  ? (r.wn = self.setTimeout(function () {
                      "installed" === o &&
                        e.waiting === n &&
                        r.dispatchEvent(new s("waiting", a));
                    }, 200))
                  : "activating" === o &&
                    (clearTimeout(r.wn), i || r.en.resolve(n));
            }),
            (r.dn = function (t) {
              var e = r.hn,
                n = e !== navigator.serviceWorker.controller;
              r.dispatchEvent(
                new s("controlling", {
                  isExternal: n,
                  originalEvent: t,
                  sw: e,
                  isUpdate: r.mn,
                })
              ),
                n || r.on.resolve(e);
            }),
            (r.gn =
              ((o = function (t) {
                var e = t.data,
                  n = t.ports,
                  o = t.source;
                return u(r.getSW(), function () {
                  r.an.has(o) &&
                    r.dispatchEvent(
                      new s("message", {
                        data: e,
                        originalEvent: t,
                        ports: n,
                        sw: o,
                      })
                    );
                });
              }),
              function () {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e];
                try {
                  return Promise.resolve(o.apply(this, t));
                } catch (t) {
                  return Promise.reject(t);
                }
              })),
            (r.sn = e),
            (r.nn = n),
            navigator.serviceWorker.addEventListener("message", r.gn),
            r
          );
        }
        (n = t),
          ((e = o).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var i,
          f = o.prototype;
        return (
          (f.register = function (t) {
            var e = (void 0 === t ? {} : t).immediate,
              n = void 0 !== e && e;
            try {
              var r = this;
              return (function (t, e) {
                var n = t();
                return n && n.then ? n.then(e) : e();
              })(
                function () {
                  if (!n && "complete" !== document.readyState)
                    return h(
                      new Promise(function (t) {
                        return window.addEventListener("load", t);
                      })
                    );
                },
                function () {
                  return (
                    (r.mn = Boolean(navigator.serviceWorker.controller)),
                    (r.yn = r.pn()),
                    u(r.bn(), function (t) {
                      (r.fn = t),
                        r.yn &&
                          ((r.hn = r.yn),
                          r.en.resolve(r.yn),
                          r.on.resolve(r.yn),
                          r.yn.addEventListener("statechange", r.ln, {
                            once: !0,
                          }));
                      var e = r.fn.waiting;
                      return (
                        e &&
                          c(e.scriptURL, r.sn.toString()) &&
                          ((r.hn = e),
                          Promise.resolve()
                            .then(function () {
                              r.dispatchEvent(
                                new s("waiting", {
                                  sw: e,
                                  wasWaitingBeforeRegister: !0,
                                })
                              );
                            })
                            .then(function () {})),
                        r.hn && (r.rn.resolve(r.hn), r.an.add(r.hn)),
                        r.fn.addEventListener("updatefound", r.cn),
                        navigator.serviceWorker.addEventListener(
                          "controllerchange",
                          r.dn
                        ),
                        r.fn
                      );
                    })
                  );
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f.update = function () {
            try {
              return this.fn ? h(this.fn.update()) : void 0;
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f.getSW = function () {
            return void 0 !== this.hn
              ? Promise.resolve(this.hn)
              : this.rn.promise;
          }),
          (f.messageSW = function (t) {
            try {
              return u(this.getSW(), function (e) {
                return r(e, t);
              });
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (f.messageSkipWaiting = function () {
            this.fn && this.fn.waiting && r(this.fn.waiting, l);
          }),
          (f.pn = function () {
            var t = navigator.serviceWorker.controller;
            return t && c(t.scriptURL, this.sn.toString()) ? t : void 0;
          }),
          (f.bn = function () {
            try {
              var t = this;
              return (function (t, e) {
                try {
                  var n = t();
                } catch (t) {
                  return e(t);
                }
                return n && n.then ? n.then(void 0, e) : n;
              })(
                function () {
                  return u(
                    navigator.serviceWorker.register(t.sn, t.nn),
                    function (e) {
                      return (t.un = performance.now()), e;
                    }
                  );
                },
                function (t) {
                  throw t;
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (i = [
            {
              key: "active",
              get: function () {
                return this.en.promise;
              },
            },
            {
              key: "controlling",
              get: function () {
                return this.on.promise;
              },
            },
          ]) &&
            (function (t, e) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            })(o.prototype, i),
          o
        );
      })(
        (function () {
          function t() {
            this.Pn = new Map();
          }
          var e = t.prototype;
          return (
            (e.addEventListener = function (t, e) {
              this.Sn(t).add(e);
            }),
            (e.removeEventListener = function (t, e) {
              this.Sn(t).delete(e);
            }),
            (e.dispatchEvent = function (t) {
              t.target = this;
              for (var e, n = i(this.Sn(t.type)); !(e = n()).done; )
                (0, e.value)(t);
            }),
            (e.Sn = function (t) {
              return (
                this.Pn.has(t) || this.Pn.set(t, new Set()), this.Pn.get(t)
              );
            }),
            t
          );
        })()
      );
    },
  },
]);
//# sourceMappingURL=883.bundle.js.map
