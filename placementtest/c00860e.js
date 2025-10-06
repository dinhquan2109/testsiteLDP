(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    12: function(t, e, n) {
        "use strict";
        n.d(e, "k", (function() {
            return w
        }
        )),
        n.d(e, "m", (function() {
            return _
        }
        )),
        n.d(e, "l", (function() {
            return k
        }
        )),
        n.d(e, "e", (function() {
            return T
        }
        )),
        n.d(e, "b", (function() {
            return O
        }
        )),
        n.d(e, "s", (function() {
            return S
        }
        )),
        n.d(e, "g", (function() {
            return P
        }
        )),
        n.d(e, "h", (function() {
            return E
        }
        )),
        n.d(e, "d", (function() {
            return $
        }
        )),
        n.d(e, "r", (function() {
            return I
        }
        )),
        n.d(e, "j", (function() {
            return j
        }
        )),
        n.d(e, "t", (function() {
            return R
        }
        )),
        n.d(e, "o", (function() {
            return N
        }
        )),
        n.d(e, "q", (function() {
            return D
        }
        )),
        n.d(e, "f", (function() {
            return L
        }
        )),
        n.d(e, "c", (function() {
            return M
        }
        )),
        n.d(e, "i", (function() {
            return U
        }
        )),
        n.d(e, "p", (function() {
            return F
        }
        )),
        n.d(e, "a", (function() {
            return W
        }
        )),
        n.d(e, "v", (function() {
            return K
        }
        )),
        n.d(e, "n", (function() {
            return X
        }
        )),
        n.d(e, "u", (function() {
            return z
        }
        ));
        n(59),
        n(5),
        n(57),
        n(65),
        n(7),
        n(4),
        n(8);
        var r = n(30)
          , o = n(24)
          , c = n(0)
          , l = n(36)
          , f = (n(67),
        n(1),
        n(2),
        n(232),
        n(27),
        n(14),
        n(16),
        n(6),
        n(38),
        n(42),
        n(19),
        n(10),
        n(22),
        n(174),
        n(117),
        n(77),
        n(33),
        n(20),
        n(303),
        n(68),
        n(118),
        n(9))
          , d = n.n(f)
          , h = n(60);
        function m(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(n), !0).forEach((function(e) {
                    Object(c.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function y(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return x(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return x(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    l = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        function w(t) {
            d.a.config.errorHandler && d.a.config.errorHandler(t)
        }
        function _(t) {
            return t.then((function(t) {
                return t.default || t
            }
            ))
        }
        function k(t) {
            return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
        }
        function T(t) {
            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = y(t.$children || []);
            try {
                for (r.s(); !(e = r.n()).done; ) {
                    var o = e.value;
                    o.$fetch && n.push(o),
                    o.$children && T(o, n)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
            return n
        }
        function O(t, e) {
            if (e || !t.options.__hasNuxtData) {
                var n = t.options._originDataFn || t.options.data || function() {
                    return {}
                }
                ;
                t.options._originDataFn = n,
                t.options.data = function() {
                    var data = n.call(this, this);
                    return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]),
                    v(v({}, data), e)
                }
                ,
                t.options.__hasNuxtData = !0,
                t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
            }
        }
        function S(t) {
            return t.options && t._Ctor === t || (t.options ? (t._Ctor = t,
            t.extendOptions = t.options) : (t = d.a.extend(t))._Ctor = t,
            !t.options.name && t.options.__file && (t.options.name = t.options.__file)),
            t
        }
        function P(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                return Object.keys(t[n]).map((function(o) {
                    return e && e.push(r),
                    t[n][o]
                }
                ))
            }
            )))
        }
        function E(t) {
            return P(t, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
        }
        function $(t, e) {
            return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                return Object.keys(t.components).reduce((function(r, o) {
                    return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o],
                    r
                }
                ), [])
            }
            )))
        }
        function I(t, e) {
            return Promise.all($(t, function() {
                var t = Object(o.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                    var l, f;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if ("function" != typeof n || n.options) {
                                    t.next = 11;
                                    break
                                }
                                return t.prev = 1,
                                t.next = 4,
                                n();
                            case 4:
                                n = t.sent,
                                t.next = 11;
                                break;
                            case 7:
                                throw t.prev = 7,
                                t.t0 = t.catch(1),
                                t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (l = Date.now(),
                                (!(f = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || f + 6e4 < l) && (window.sessionStorage.setItem("nuxt-reload", l),
                                window.location.reload(!0))),
                                t.t0;
                            case 11:
                                return o.components[c] = n = S(n),
                                t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                            case 13:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, null, [[1, 7]])
                }
                )));
                return function(e, n, r, o) {
                    return t.apply(this, arguments)
                }
            }()))
        }
        function j(t) {
            return C.apply(this, arguments)
        }
        function C() {
            return (C = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (e) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return t.next = 4,
                            I(e);
                        case 4:
                            return t.abrupt("return", v(v({}, e), {}, {
                                meta: P(e).map((function(t, n) {
                                    return v(v({}, t.options.meta), (e.matched[n] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function R(t, e) {
            return A.apply(this, arguments)
        }
        function A() {
            return (A = Object(o.a)(regeneratorRuntime.mark((function t(e, n) {
                var o, c, f, d;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return e.context || (e.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: e,
                                store: e.store,
                                payload: n.payload,
                                error: n.error,
                                base: e.router.options.base,
                                env: {}
                            },
                            n.req && (e.context.req = n.req),
                            n.res && (e.context.res = n.res),
                            n.ssrContext && (e.context.ssrContext = n.ssrContext),
                            e.context.redirect = function(t, path, n) {
                                if (t) {
                                    e.context._redirected = !0;
                                    var o = Object(r.a)(path);
                                    if ("number" == typeof t || "undefined" !== o && "object" !== o || (n = path || {},
                                    path = t,
                                    o = Object(r.a)(path),
                                    t = 302),
                                    "object" === o && (path = e.router.resolve(path).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))
                                        throw path = Object(h.d)(path, n),
                                        window.location.assign(path),
                                        new Error("ERR_REDIRECT");
                                    e.context.next({
                                        path: path,
                                        query: n,
                                        status: t
                                    })
                                }
                            }
                            ,
                            e.context.nuxtState = window.__NUXT__),
                            t.next = 3,
                            Promise.all([j(n.route), j(n.from)]);
                        case 3:
                            o = t.sent,
                            c = Object(l.a)(o, 2),
                            f = c[0],
                            d = c[1],
                            n.route && (e.context.route = f),
                            n.from && (e.context.from = d),
                            n.error && (e.context.error = n.error),
                            e.context.next = n.next,
                            e.context._redirected = !1,
                            e.context._errored = !1,
                            e.context.isHMR = !1,
                            e.context.params = e.context.route.params || {},
                            e.context.query = e.context.route.query || {};
                        case 16:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))).apply(this, arguments)
        }
        function N(t, e, n) {
            return !t.length || e._redirected || e._errored || n && n.aborted ? Promise.resolve() : D(t[0], e).then((function() {
                return N(t.slice(1), e, n)
            }
            ))
        }
        function D(t, e) {
            var n;
            return (n = 2 === t.length ? new Promise((function(n) {
                t(e, (function(t, data) {
                    t && e.error(t),
                    n(data = data || {})
                }
                ))
            }
            )) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
        }
        function L(base, t) {
            if ("hash" === t)
                return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var e = (path || "/") + window.location.search + window.location.hash;
            return Object(h.c)(e)
        }
        function M(t, e) {
            return function(t, e) {
                for (var n = new Array(t.length), i = 0; i < t.length; i++)
                    "object" === Object(r.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$",V(e)));
                return function(e, r) {
                    for (var path = "", data = e || {}, o = (r || {}).pretty ? H : encodeURIComponent, c = 0; c < t.length; c++) {
                        var l = t[c];
                        if ("string" != typeof l) {
                            var f = data[l.name || "pathMatch"]
                              , d = void 0;
                            if (null == f) {
                                if (l.optional) {
                                    l.partial && (path += l.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + l.name + '" to be defined')
                            }
                            if (Array.isArray(f)) {
                                if (!l.repeat)
                                    throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(f) + "`");
                                if (0 === f.length) {
                                    if (l.optional)
                                        continue;
                                    throw new TypeError('Expected "' + l.name + '" to not be empty')
                                }
                                for (var h = 0; h < f.length; h++) {
                                    if (d = o(f[h]),
                                    !n[c].test(d))
                                        throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(d) + "`");
                                    path += (0 === h ? l.prefix : l.delimiter) + d
                                }
                            } else {
                                if (d = l.asterisk ? J(f) : o(f),
                                !n[c].test(d))
                                    throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + d + '"');
                                path += l.prefix + d
                            }
                        } else
                            path += l
                    }
                    return path
                }
            }(function(t, e) {
                var n, r = [], o = 0, c = 0, path = "", l = e && e.delimiter || "/";
                for (; null != (n = B.exec(t)); ) {
                    var f = n[0]
                      , d = n[1]
                      , h = n.index;
                    if (path += t.slice(c, h),
                    c = h + f.length,
                    d)
                        path += d[1];
                    else {
                        var m = t[c]
                          , v = n[2]
                          , y = n[3]
                          , x = n[4]
                          , w = n[5]
                          , _ = n[6]
                          , k = n[7];
                        path && (r.push(path),
                        path = "");
                        var T = null != v && null != m && m !== v
                          , O = "+" === _ || "*" === _
                          , S = "?" === _ || "*" === _
                          , P = n[2] || l
                          , pattern = x || w;
                        r.push({
                            name: y || o++,
                            prefix: v || "",
                            delimiter: P,
                            optional: S,
                            repeat: O,
                            partial: T,
                            asterisk: Boolean(k),
                            pattern: pattern ? G(pattern) : k ? ".*" : "[^" + Q(P) + "]+?"
                        })
                    }
                }
                c < t.length && (path += t.substr(c));
                path && r.push(path);
                return r
            }(t, e), e)
        }
        function U(t, e) {
            var n = {}
              , r = v(v({}, t), e);
            for (var o in r)
                String(t[o]) !== String(e[o]) && (n[o] = !0);
            return n
        }
        function F(t) {
            var e;
            if (t.message || "string" == typeof t)
                e = t.message || t;
            else
                try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
            return v(v({}, t), {}, {
                message: e,
                statusCode: t.statusCode || t.status || t.response && t.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(t) {
            window.onNuxtReadyCbs.push(t)
        }
        ;
        var B = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function H(t, e) {
            var n = e ? /[?#]/g : /[/?#]/g;
            return encodeURI(t).replace(n, (function(t) {
                return "%" + t.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function J(t) {
            return H(t, !0)
        }
        function Q(t) {
            return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function G(t) {
            return t.replace(/([=!:$/()])/g, "\\$1")
        }
        function V(t) {
            return t && t.sensitive ? "" : "i"
        }
        function W(t, e, n) {
            t.$options[e] || (t.$options[e] = []),
            t.$options[e].includes(n) || t.$options[e].push(n)
        }
        var K = h.b
          , X = (h.e,
        h.a);
        function z(t) {
            try {
                window.history.scrollRestoration = t
            } catch (t) {}
        }
    },
    152: function(t, e, n) {
        "use strict";
        n(39),
        n(1),
        n(4),
        n(68),
        n(118),
        n(16),
        n(2),
        n(19),
        n(33),
        n(27),
        n(59),
        n(38),
        n(10),
        n(5),
        n(57),
        n(65),
        n(42);
        var r = n(9)
          , o = n.n(r);
        function c(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return l(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, f = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    f = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (f)
                            throw o
                    }
                }
            }
        }
        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var f = window.requestIdleCallback || function(t) {
            var e = Date.now();
            return setTimeout((function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }
            ), 1)
        }
          , d = window.cancelIdleCallback || function(t) {
            clearTimeout(t)
        }
          , h = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
            t.forEach((function(t) {
                var e = t.intersectionRatio
                  , link = t.target;
                e <= 0 || !link.__prefetch || link.__prefetch()
            }
            ))
        }
        ));
        e.a = {
            name: "NuxtLink",
            extends: o.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = f(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                d(this.handleId),
                this.__observed && (h.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    h && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                    h.observe(this.$el),
                    this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var t = navigator.connection;
                    return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                        return t.components.default
                    }
                    )).filter((function(t) {
                        return "function" == typeof t && !t.options && !t.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        h.unobserve(this.$el);
                        var t, e = c(this.getPrefetchComponents());
                        try {
                            for (e.s(); !(t = e.n()).done; ) {
                                var n = t.value
                                  , r = n();
                                r instanceof Promise && r.catch((function() {}
                                )),
                                n.__prefetched = !0
                            }
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }
            }
        }
    },
    182: function(t, e, n) {
        "use strict";
        e.a = {}
    },
    185: function(t, e, n) {
        n(10),
        n(1),
        n(38),
        n(42),
        n(153),
        n(120),
        n(39),
        n(19),
        function(t) {
            if (!/MSIE 10/i.test(navigator.userAgent))
                try {
                    var e = new Blob(["                var fakeIdToId = {};                onmessage = function (event) {                    var data = event.data,                        name = data.name,                        fakeId = data.fakeId,                        time;                    if(data.hasOwnProperty('time')) {                        time = data.time;                    }                    switch (name) {                        case 'setInterval':                            fakeIdToId[fakeId] = setInterval(function () {                                postMessage({fakeId: fakeId});                            }, time);                            break;                        case 'clearInterval':                            if (fakeIdToId.hasOwnProperty (fakeId)) {                                clearInterval(fakeIdToId[fakeId]);                                delete fakeIdToId[fakeId];                            }                            break;                        case 'setTimeout':                            fakeIdToId[fakeId] = setTimeout(function () {                                postMessage({fakeId: fakeId});                                if (fakeIdToId.hasOwnProperty (fakeId)) {                                    delete fakeIdToId[fakeId];                                }                            }, time);                            break;                        case 'clearTimeout':                            if (fakeIdToId.hasOwnProperty (fakeId)) {                                clearTimeout(fakeIdToId[fakeId]);                                delete fakeIdToId[fakeId];                            }                            break;                    }                }                "]);
                    t = window.URL.createObjectURL(e)
                } catch (t) {}
            var n, r = {}, o = 0, c = "HackTimer.js by turuslan: ";
            function l() {
                do {
                    2147483647 == o ? o = 0 : o++
                } while (Object.prototype.hasOwnProperty.call(r, o));
                return o
            }
            if ("undefined" != typeof Worker)
                try {
                    n = new Worker(t),
                    window.setInterval = function(t, time) {
                        var e = l();
                        return r[e] = {
                            callback: t,
                            parameters: Array.prototype.slice.call(arguments, 2)
                        },
                        n.postMessage({
                            name: "setInterval",
                            fakeId: e,
                            time: time
                        }),
                        e
                    }
                    ,
                    window.clearInterval = function(t) {
                        Object.prototype.hasOwnProperty.call(r, t) && (delete r[t],
                        n.postMessage({
                            name: "clearInterval",
                            fakeId: t
                        }))
                    }
                    ,
                    window.setTimeout = function(t, time) {
                        var e = l();
                        return r[e] = {
                            callback: t,
                            parameters: Array.prototype.slice.call(arguments, 2),
                            isTimeout: !0
                        },
                        n.postMessage({
                            name: "setTimeout",
                            fakeId: e,
                            time: time
                        }),
                        e
                    }
                    ,
                    window.clearTimeout = function(t) {
                        Object.prototype.hasOwnProperty.call(r, t) && (delete r[t],
                        n.postMessage({
                            name: "clearTimeout",
                            fakeId: t
                        }))
                    }
                    ,
                    n.onmessage = function(t) {
                        var e, n, o, l = t.data.fakeId;
                        if (Object.prototype.hasOwnProperty.call(r, l) && (o = (e = r[l]).callback,
                        n = e.parameters,
                        Object.prototype.hasOwnProperty.call(e, "isTimeout") && e.isTimeout && delete r[l]),
                        "string" == typeof o)
                            try {
                                o = new Function(o)
                            } catch (t) {
                                console.log(c + "Error parsing callback code string: ", t)
                            }
                        "function" == typeof o && o.apply(window, n)
                    }
                    ,
                    n.onerror = function(t) {
                        console.log(t)
                    }
                } catch (t) {
                    console.log(c + "Initialisation failed"),
                    console.error(t)
                }
            else
                console.log(c + "Initialisation failed - HTML5 Web Worker is not supported")
        }("HackTimerWorker.js")
    },
    242: function(t, e, n) {
        t.exports = {}
    },
    243: function(t, e, n) {
        t.exports = {}
    },
    244: function(t, e, n) {
        t.exports = {}
    },
    245: function(t, e, n) {
        t.exports = {}
    },
    246: function(t, e, n) {
        t.exports = {}
    },
    260: function(t, e, n) {
        "use strict";
        var r = n(24)
          , o = (n(67),
        n(1),
        n(39),
        n(9))
          , c = n.n(o)
          , l = n(12)
          , f = window.__NUXT__;
        function d() {
            if (!this._hydrated)
                return this.$fetch()
        }
        function h() {
            if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                var t;
                this._hydrated = !0,
                this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = f.fetch[this._fetchKey];
                if (data && data._error)
                    this.$fetchState.error = data._error;
                else
                    for (var e in data)
                        c.a.set(this.$data, e, data[e])
            }
        }
        function m() {
            var t = this;
            return this._fetchPromise || (this._fetchPromise = v.call(this).then((function() {
                delete t._fetchPromise
            }
            ))),
            this._fetchPromise
        }
        function v() {
            return y.apply(this, arguments)
        }
        function y() {
            return (y = Object(r.a)(regeneratorRuntime.mark((function t() {
                var e, n, r, o = this;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return this.$nuxt.nbFetching++,
                            this.$fetchState.pending = !0,
                            this.$fetchState.error = null,
                            this._hydrated = !1,
                            e = null,
                            n = Date.now(),
                            t.prev = 6,
                            t.next = 9,
                            this.$options.fetch.call(this);
                        case 9:
                            t.next = 15;
                            break;
                        case 11:
                            t.prev = 11,
                            t.t0 = t.catch(6),
                            e = Object(l.p)(t.t0);
                        case 15:
                            if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                t.next = 19;
                                break
                            }
                            return t.next = 19,
                            new Promise((function(t) {
                                return setTimeout(t, r)
                            }
                            ));
                        case 19:
                            this.$fetchState.error = e,
                            this.$fetchState.pending = !1,
                            this.$fetchState.timestamp = Date.now(),
                            this.$nextTick((function() {
                                return o.$nuxt.nbFetching--
                            }
                            ));
                        case 23:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this, [[6, 11]])
            }
            )))).apply(this, arguments)
        }
        e.a = {
            beforeCreate: function() {
                Object(l.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                c.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }),
                this.$fetch = m.bind(this),
                Object(l.a)(this, "created", h),
                Object(l.a)(this, "beforeMount", d))
            }
        }
    },
    263: function(t, e, n) {
        t.exports = n.p + "img/warning-icon.b5dc444.png"
    },
    265: function(t, e, n) {
        n(266),
        t.exports = n(267)
    },
    267: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            n(19),
            n(33),
            n(59),
            n(5),
            n(57),
            n(65);
            var e = n(30)
              , r = n(24)
              , o = (n(163),
            n(281),
            n(293),
            n(294),
            n(67),
            n(27),
            n(1),
            n(4),
            n(2),
            n(6),
            n(68),
            n(118),
            n(14),
            n(16),
            n(10),
            n(38),
            n(42),
            n(39),
            n(9))
              , c = n.n(o)
              , l = n(252)
              , f = n(182)
              , d = n(12)
              , h = n(61)
              , m = n(260)
              , v = n(152);
            function y(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = function(t, e) {
                        if (!t)
                            return;
                        if ("string" == typeof t)
                            return x(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return x(t, e)
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, c = !0, l = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return c = t.done,
                        t
                    },
                    e: function(t) {
                        l = !0,
                        o = t
                    },
                    f: function() {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                }
            }
            function x(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++)
                    n[i] = t[i];
                return n
            }
            c.a.__nuxt__fetch__mixin__ || (c.a.mixin(m.a),
            c.a.__nuxt__fetch__mixin__ = !0),
            c.a.component(v.a.name, v.a),
            c.a.component("NLink", v.a),
            t.fetch || (t.fetch = l.a);
            var w, _, k = [], T = window.__NUXT__ || {}, O = T.config || {};
            O._app && (n.p = Object(d.v)(O._app.cdnURL, O._app.assetsPath)),
            Object.assign(c.a.config, {
                silent: !0,
                performance: !1
            });
            var S = c.a.config.errorHandler || console.error;
            function P(t, e, n) {
                for (var r = function(component) {
                    var t = function(component, t) {
                        if (!component || !component.options || !component.options[t])
                            return {};
                        var option = component.options[t];
                        if ("function" == typeof option) {
                            for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
                                n[r - 2] = arguments[r];
                            return option.apply(void 0, n)
                        }
                        return option
                    }(component, "transition", e, n) || {};
                    return "string" == typeof t ? {
                        name: t
                    } : t
                }, o = n ? Object(d.g)(n) : [], c = Math.max(t.length, o.length), l = [], f = function() {
                    var e = Object.assign({}, r(t[i]))
                      , n = Object.assign({}, r(o[i]));
                    Object.keys(e).filter((function(t) {
                        return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                    }
                    )).forEach((function(t) {
                        n[t] = e[t]
                    }
                    )),
                    l.push(n)
                }, i = 0; i < c; i++)
                    f();
                return l
            }
            function E(t, e, n) {
                return $.apply(this, arguments)
            }
            function $() {
                return ($ = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                    var o, c, l, f, h = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (this._routeChanged = Boolean(w.nuxt.err) || n.name !== e.name,
                                this._paramChanged = !this._routeChanged && n.path !== e.path,
                                this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath,
                                this._diffQuery = this._queryChanged ? Object(d.i)(e.query, n.query) : [],
                                (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                t.prev = 5,
                                !this._queryChanged) {
                                    t.next = 12;
                                    break
                                }
                                return t.next = 9,
                                Object(d.r)(e, (function(t, e) {
                                    return {
                                        Component: t,
                                        instance: e
                                    }
                                }
                                ));
                            case 9:
                                o = t.sent,
                                o.some((function(t) {
                                    var r = t.Component
                                      , o = t.instance
                                      , c = r.options.watchQuery;
                                    return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                        return h._diffQuery[t]
                                    }
                                    )) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                }
                                )) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 12:
                                r(),
                                t.next = 26;
                                break;
                            case 15:
                                if (t.prev = 15,
                                t.t0 = t.catch(5),
                                c = t.t0 || {},
                                l = c.statusCode || c.status || c.response && c.response.status || 500,
                                f = c.message || "",
                                !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                    t.next = 23;
                                    break
                                }
                                return window.location.reload(!0),
                                t.abrupt("return");
                            case 23:
                                this.error({
                                    statusCode: l,
                                    message: f
                                }),
                                this.$nuxt.$emit("routeChanged", e, n, c),
                                r();
                            case 26:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[5, 15]])
                }
                )))).apply(this, arguments)
            }
            function I(t, e) {
                return T.serverRendered && e && Object(d.b)(t, e),
                t._Ctor = t,
                t
            }
            function j(t, e, n, r) {
                var o = this
                  , c = []
                  , l = !1;
                if (void 0 !== n && (c = [],
                (n = Object(d.s)(n)).options.middleware && (c = c.concat(n.options.middleware)),
                t.forEach((function(t) {
                    t.options.middleware && (c = c.concat(t.options.middleware))
                }
                ))),
                c = c.map((function(t) {
                    return "function" == typeof t ? t : ("function" != typeof f.a[t] && (l = !0,
                    o.error({
                        statusCode: 500,
                        message: "Unknown middleware " + t
                    })),
                    f.a[t])
                }
                )),
                !l)
                    return Object(d.o)(c, e, r)
            }
            function C(t, e, n, r) {
                return R.apply(this, arguments)
            }
            function R() {
                return R = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o, c) {
                    var l, f, m, v, x, _, T, O, S, E, $, I, C, R, A, N = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 2:
                                return !1,
                                e === n ? (k = [],
                                !0) : (l = [],
                                k = Object(d.g)(n, l).map((function(t, i) {
                                    return Object(d.c)(n.matched[l[i]].path)(n.params)
                                }
                                ))),
                                f = !1,
                                m = function(path) {
                                    n.path === path.path && N.$loading.finish && N.$loading.finish(),
                                    n.path !== path.path && N.$loading.pause && N.$loading.pause(),
                                    f || (f = !0,
                                    o(path))
                                }
                                ,
                                t.next = 8,
                                Object(d.t)(w, {
                                    route: e,
                                    from: n,
                                    error: function(t) {
                                        c.aborted || w.nuxt.error.call(N, t)
                                    },
                                    next: m.bind(this)
                                });
                            case 8:
                                if (this._dateLastError = w.nuxt.dateErr,
                                this._hadError = Boolean(w.nuxt.err),
                                v = [],
                                (x = Object(d.g)(e, v)).length) {
                                    t.next = 33;
                                    break
                                }
                                return t.next = 15,
                                j.call(this, x, w.context, void 0, c);
                            case 15:
                                if (!f) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return");
                            case 17:
                                if (!c.aborted) {
                                    t.next = 20;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 20:
                                return _ = (h.a.options || h.a).layout,
                                t.next = 23,
                                this.loadLayout("function" == typeof _ ? _.call(h.a, w.context) : _);
                            case 23:
                                return T = t.sent,
                                t.next = 26,
                                j.call(this, x, w.context, T, c);
                            case 26:
                                if (!f) {
                                    t.next = 28;
                                    break
                                }
                                return t.abrupt("return");
                            case 28:
                                if (!c.aborted) {
                                    t.next = 31;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 31:
                                return w.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", o());
                            case 33:
                                return x.forEach((function(t) {
                                    t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData,
                                    t.options.fetch = t._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions(P(x, e, n)),
                                t.prev = 35,
                                t.next = 38,
                                j.call(this, x, w.context, void 0, c);
                            case 38:
                                if (!f) {
                                    t.next = 40;
                                    break
                                }
                                return t.abrupt("return");
                            case 40:
                                if (!c.aborted) {
                                    t.next = 43;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 43:
                                if (!w.context._errored) {
                                    t.next = 45;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 45:
                                return "function" == typeof (O = x[0].options.layout) && (O = O(w.context)),
                                t.next = 49,
                                this.loadLayout(O);
                            case 49:
                                return O = t.sent,
                                t.next = 52,
                                j.call(this, x, w.context, O, c);
                            case 52:
                                if (!f) {
                                    t.next = 54;
                                    break
                                }
                                return t.abrupt("return");
                            case 54:
                                if (!c.aborted) {
                                    t.next = 57;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 57:
                                if (!w.context._errored) {
                                    t.next = 59;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 59:
                                S = !0,
                                t.prev = 60,
                                E = y(x),
                                t.prev = 62,
                                E.s();
                            case 64:
                                if (($ = E.n()).done) {
                                    t.next = 75;
                                    break
                                }
                                if ("function" == typeof (I = $.value).options.validate) {
                                    t.next = 68;
                                    break
                                }
                                return t.abrupt("continue", 73);
                            case 68:
                                return t.next = 70,
                                I.options.validate(w.context);
                            case 70:
                                if (S = t.sent) {
                                    t.next = 73;
                                    break
                                }
                                return t.abrupt("break", 75);
                            case 73:
                                t.next = 64;
                                break;
                            case 75:
                                t.next = 80;
                                break;
                            case 77:
                                t.prev = 77,
                                t.t0 = t.catch(62),
                                E.e(t.t0);
                            case 80:
                                return t.prev = 80,
                                E.f(),
                                t.finish(80);
                            case 83:
                                t.next = 89;
                                break;
                            case 85:
                                return t.prev = 85,
                                t.t1 = t.catch(60),
                                this.error({
                                    statusCode: t.t1.statusCode || "500",
                                    message: t.t1.message
                                }),
                                t.abrupt("return", o());
                            case 89:
                                if (S) {
                                    t.next = 92;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                t.abrupt("return", o());
                            case 92:
                                return t.next = 94,
                                Promise.all(x.map(function() {
                                    var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                        var o, c, l, f, h, m, y, x, p;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (r._path = Object(d.c)(e.matched[v[i]].path)(e.params),
                                                    r._dataRefresh = !1,
                                                    o = r._path !== k[i],
                                                    N._routeChanged && o ? r._dataRefresh = !0 : N._paramChanged && o ? (c = r.options.watchParam,
                                                    r._dataRefresh = !1 !== c) : N._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                        return N._diffQuery[t]
                                                    }
                                                    )) : "function" == typeof l && (C || (C = Object(d.h)(e)),
                                                    r._dataRefresh = l.apply(C[i], [e.query, n.query]))),
                                                    N._hadError || !N._isMounted || r._dataRefresh) {
                                                        t.next = 6;
                                                        break
                                                    }
                                                    return t.abrupt("return");
                                                case 6:
                                                    return f = [],
                                                    h = r.options.asyncData && "function" == typeof r.options.asyncData,
                                                    m = Boolean(r.options.fetch) && r.options.fetch.length,
                                                    y = h && m ? 30 : 45,
                                                    h && ((x = Object(d.q)(r.options.asyncData, w.context)).then((function(t) {
                                                        Object(d.b)(r, t),
                                                        N.$loading.increase && N.$loading.increase(y)
                                                    }
                                                    )),
                                                    f.push(x)),
                                                    N.$loading.manual = !1 === r.options.loading,
                                                    m && ((p = r.options.fetch(w.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)),
                                                    p.then((function(t) {
                                                        N.$loading.increase && N.$loading.increase(y)
                                                    }
                                                    )),
                                                    f.push(p)),
                                                    t.abrupt("return", Promise.all(f));
                                                case 14:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e, n) {
                                        return t.apply(this, arguments)
                                    }
                                }()));
                            case 94:
                                if (f) {
                                    t.next = 100;
                                    break
                                }
                                if (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                !c.aborted) {
                                    t.next = 99;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 99:
                                o();
                            case 100:
                                t.next = 119;
                                break;
                            case 102:
                                if (t.prev = 102,
                                t.t2 = t.catch(35),
                                !c.aborted) {
                                    t.next = 107;
                                    break
                                }
                                return o(!1),
                                t.abrupt("return");
                            case 107:
                                if ("ERR_REDIRECT" !== (R = t.t2 || {}).message) {
                                    t.next = 110;
                                    break
                                }
                                return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, R));
                            case 110:
                                return k = [],
                                Object(d.k)(R),
                                "function" == typeof (A = (h.a.options || h.a).layout) && (A = A(w.context)),
                                t.next = 116,
                                this.loadLayout(A);
                            case 116:
                                this.error(R),
                                this.$nuxt.$emit("routeChanged", e, n, R),
                                o();
                            case 119:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t, this, [[35, 102], [60, 85], [62, 77, 80, 83]])
                }
                ))),
                R.apply(this, arguments)
            }
            function A(t, n) {
                Object(d.d)(t, (function(t, n, r, o) {
                    return "object" !== Object(e.a)(t) || t.options || ((t = c.a.extend(t))._Ctor = t,
                    r.components[o] = t),
                    t
                }
                ))
            }
            function N(t) {
                var e = Boolean(this.$options.nuxt.err);
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                var n = e ? (h.a.options || h.a).layout : t.matched[0].components.default.options.layout;
                "function" == typeof n && (n = n(w.context)),
                this.setLayout(n)
            }
            function D(t) {
                t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
            }
            function L(t, e) {
                var n = this;
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                    var r = Object(d.h)(t)
                      , o = Object(d.g)(t)
                      , l = !1;
                    c.a.nextTick((function() {
                        r.forEach((function(t, i) {
                            if (t && !t._isDestroyed && t.constructor._dataRefresh && o[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                var e = t.constructor.options.data.call(t);
                                for (var n in e)
                                    c.a.set(t.$data, n, e[n]);
                                l = !0
                            }
                        }
                        )),
                        l && window.$nuxt.$nextTick((function() {
                            window.$nuxt.$emit("triggerScroll")
                        }
                        )),
                        D(n)
                    }
                    ))
                }
            }
            function M(t) {
                window.onNuxtReadyCbs.forEach((function(e) {
                    "function" == typeof e && e(t)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t),
                _.afterEach((function(e, n) {
                    c.a.nextTick((function() {
                        return t.$nuxt.$emit("routeChanged", e, n)
                    }
                    ))
                }
                ))
            }
            function U() {
                return U = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var n, o, l, f, h, m;
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return w = e.app,
                                _ = e.router,
                                e.store,
                                n = new c.a(w),
                                o = function() {
                                    n.$mount("#__nuxt"),
                                    _.afterEach(A),
                                    _.afterEach(N.bind(n)),
                                    _.afterEach(L.bind(n)),
                                    c.a.nextTick((function() {
                                        M(n)
                                    }
                                    ))
                                }
                                ,
                                t.next = 7,
                                Promise.all((v = w.context.route,
                                Object(d.d)(v, function() {
                                    var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                        var l;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if ("function" != typeof e || e.options) {
                                                        t.next = 4;
                                                        break
                                                    }
                                                    return t.next = 3,
                                                    e();
                                                case 3:
                                                    e = t.sent;
                                                case 4:
                                                    return l = I(Object(d.s)(e), T.data ? T.data[c] : null),
                                                    r.components[o] = l,
                                                    t.abrupt("return", l);
                                                case 7:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e, n, r, o, c) {
                                        return t.apply(this, arguments)
                                    }
                                }())));
                            case 7:
                                if (l = t.sent,
                                n.setTransitions = n.$options.nuxt.setTransitions.bind(n),
                                l.length && (n.setTransitions(P(l, _.currentRoute)),
                                k = _.currentRoute.matched.map((function(t) {
                                    return Object(d.c)(t.path)(_.currentRoute.params)
                                }
                                ))),
                                n.$loading = {},
                                T.error && n.error(T.error),
                                _.beforeEach(E.bind(n)),
                                f = null,
                                h = C.bind(n),
                                _.beforeEach((function(t, e, n) {
                                    f && (f.aborted = !0),
                                    h(t, e, n, f = {
                                        aborted: !1
                                    })
                                }
                                )),
                                !T.serverRendered || !Object(d.n)(T.routePath, n.context.route.path)) {
                                    t.next = 18;
                                    break
                                }
                                return t.abrupt("return", o());
                            case 18:
                                return m = function() {
                                    A(_.currentRoute, _.currentRoute),
                                    N.call(n, _.currentRoute),
                                    D(n),
                                    o()
                                }
                                ,
                                t.next = 21,
                                new Promise((function(t) {
                                    return setTimeout(t, 0)
                                }
                                ));
                            case 21:
                                C.call(n, _.currentRoute, _.currentRoute, (function(path) {
                                    if (path) {
                                        var t = _.afterEach((function(e, n) {
                                            t(),
                                            m()
                                        }
                                        ));
                                        _.push(path, void 0, (function(t) {
                                            t && S(t)
                                        }
                                        ))
                                    } else
                                        m()
                                }
                                ), {
                                    aborted: !1
                                });
                            case 22:
                            case "end":
                                return t.stop()
                            }
                        var v
                    }
                    ), t)
                }
                ))),
                U.apply(this, arguments)
            }
            Object(h.b)(null, T.config).then((function(t) {
                return U.apply(this, arguments)
            }
            )).catch(S)
        }
        .call(this, n(48))
    },
    309: function(t, e, n) {
        "use strict";
        n(242)
    },
    310: function(t, e, n) {
        "use strict";
        n(243)
    },
    318: function(t, e, n) {
        "use strict";
        n(244)
    },
    319: function(t, e, n) {
        "use strict";
        n(245)
    },
    320: function(t, e, n) {
        "use strict";
        n(246)
    },
    321: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = {
            getLoading: function(t) {
                return t.loading
            },
            fbTracking: function(t) {
                return t.fb_tracking
            }
        }
    },
    322: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = {
            PAGE_LOADING: function(t, e) {
                t.loading = e
            }
        }
    },
    323: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = function() {
            return {
                loading: !0
            }
        }
    },
    324: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = {
            AuthLogout: function() {},
            userClearInfo: function(t) {
                var e = t.commit;
                window.localStorage.removeItem("access_token"),
                e("SET_CONTACT_INFO", {
                    id: -1,
                    email: "",
                    name: "",
                    phone: ""
                })
            }
        }
    },
    325: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
            INIT_EXAM_ERROR: {
                code: "INIT_EXAM_ERROR",
                msg: "Khởi tạo đề thi thất bại, vui lòng liên hệ với quản trị viên!"
            }
        };
        e.default = {
            examID: function(t) {
                return t.exam ? t.exam.id : null
            },
            getThemeSetting: function(t) {
                return t.appSettings.theme
            },
            getStartType: function(t) {
                return t.appSettings.start_with.type || ""
            },
            getError: function(t) {
                return r[t.errorCode] || {}
            },
            getStartWith: function(t) {
                return t.appSettings.start_with.configs
            },
            getContactInfo: function(t) {
                return t.contactInfo
            },
            getTimeRemaining: function(t) {
                return t.time_remaining
            },
            getStartTiming: function(t) {
                return t.startTiming
            },
            getModalUpdatePhoneState: function(t) {
                return t.updatePhoneModalOpen
            },
            fbTracking: function(t) {
                return t.appSettings.fb_tracking
            }
        }
    },
    326: function(t, e, n) {
        "use strict";
        n.r(e);
        n(188),
        n(141);
        e.default = {
            SET_PAGE: function(t, e) {
                t.page = e
            },
            SET_PART: function(t, e) {
                t.part = e,
                t.exam.partIsUsed = e
            },
            SET_QUESTIONS: function(t, e) {
                t.exam = e
            },
            SET_CONTACT_INFO: function(t, e) {
                t.contactInfo = Object.assign(t.contactInfo, e),
                localStorage.setItem("_speakup_userInfo", JSON.stringify(t.contactInfo))
            },
            SET_TRACKING_ID: function(t, e) {
                t.tracking_id = e,
                localStorage.setItem("_speakup_track", e)
            },
            PAGE_LOADING: function(t, e) {
                t.loading = e
            },
            SET_SETTINGS: function(t, e) {
                t.appSettings = e
            },
            SET_HISTORY_ID: function(t, e) {
                t.testHistory.id = e,
                localStorage.setItem("_speakup_exam".concat(t.exam.id), e)
            },
            SET_ANSWER: function(t, e) {
                var n, r = null == t || null === (n = t.exam) || void 0 === n || null === (n = n.part) || void 0 === n ? void 0 : n.findIndex((function(t) {
                    return -1 != t.questions.findIndex((function(t) {
                        return t.id === e.id
                    }
                    ))
                }
                ));
                if (-1 == r)
                    throw Error("SET_ANSWER: khong tim thay partIndex");
                var o = t.exam.part[r].questions.findIndex((function(t) {
                    return t.id === e.id
                }
                ));
                if (2 == t.exam.part[r].part_type)
                    t.exam.part[r].questions[o].answers = e;
                else {
                    for (var c = 0; c < e.value.length; c++)
                        t.exam.part[r].questions[o].answers[c] = e.value[c];
                    var l = t.exam.part[r].questions[o].answers.length - e.value.length;
                    l > 0 && t.exam.part[r].questions[o].answers.splice(e.value.length, l)
                }
            },
            TIME_REMAINING_COUNTDOWN: function(t) {
                t.exam.part[t.part].time_remaining = t.exam.part[t.part].time_remaining - 1,
                t.time_remaining = t.exam.part[t.part].time_remaining,
                localStorage.setItem("speakupTestData", JSON.stringify(t.exam))
            },
            SET_TIME_REMAINING: function(t, e) {
                t.exam.part[t.part].time_remaining = e,
                t.time_remaining = e,
                localStorage.setItem("speakupTestData", JSON.stringify(t.exam))
            },
            SET_VIDEO_REPLAY_COUNT: function(t, e) {
                t.exam.part[t.part].video_replay = e,
                localStorage.setItem("speakupTestData", JSON.stringify(t.exam))
            },
            SET_WRITING: function(t, e) {
                t.exam.part[t.part].writing = e,
                localStorage.setItem("speakupTestData", JSON.stringify(t.exam))
            },
            SET_QUESTION_INDEX: function(t, e) {
                t.exam.part[t.part].question_index = e,
                localStorage.setItem("speakupTestData", JSON.stringify(t.exam))
            },
            SET_PART_STEP: function(t, e) {
                t.exam.part[t.part].step = e,
                localStorage.setItem("speakupTestData", JSON.stringify(t.exam))
            },
            SET_ERROR: function(t, e) {
                t.errorCode = e
            },
            SET_START_TIMING: function(t, e) {
                t.startTiming = e || !1
            },
            OPEN_MODAL_UPDATE_PHONE: function(t, e) {
                t.updatePhoneModalOpen = e
            }
        }
    },
    327: function(t, e, n) {
        "use strict";
        n.r(e),
        e.default = function() {
            return {
                appSettings: {
                    start_with: {
                        type: "form_input",
                        configs: {
                            form_input: [],
                            ican_connect: {}
                        }
                    },
                    fb_tracking: "",
                    theme: "",
                    seo: {
                        title: "",
                        desc: "",
                        thumbnail: "",
                        img_content: ""
                    }
                },
                errorCode: "",
                page: 1,
                tracking_id: "",
                exam: {
                    partIsUsed: 0
                },
                part: 0,
                contactInfo: {
                    id: -1,
                    email: "",
                    name: "",
                    phone: ""
                },
                loading: !1,
                testHistory: {
                    id: -1,
                    time: {},
                    part: 0,
                    data: {}
                },
                startTiming: !1,
                time_remaining: 10,
                updatePhoneModalOpen: !1
            }
        }
    },
    61: function(t, e, n) {
        "use strict";
        n.d(e, "b", (function() {
            return qe
        }
        )),
        n.d(e, "a", (function() {
            return A
        }
        ));
        var r = {};
        n.r(r),
        n.d(r, "PrepareHeader", (function() {
            return tt
        }
        )),
        n.d(r, "Prepare", (function() {
            return et
        }
        )),
        n.d(r, "PreparePage1", (function() {
            return nt
        }
        )),
        n.d(r, "PreparePage2", (function() {
            return ot
        }
        )),
        n.d(r, "PreparePage3", (function() {
            return at
        }
        )),
        n.d(r, "PreparePage4", (function() {
            return it
        }
        )),
        n.d(r, "PreparePage5", (function() {
            return st
        }
        )),
        n.d(r, "PlacementTestV2Footer", (function() {
            return ut
        }
        )),
        n.d(r, "PlacementTestV2Header", (function() {
            return ct
        }
        )),
        n.d(r, "PlacementTestV2", (function() {
            return lt
        }
        )),
        n.d(r, "PlacementTestV2Page1", (function() {
            return ft
        }
        )),
        n.d(r, "PlacementTestV2Page2", (function() {
            return pt
        }
        )),
        n.d(r, "PlacementTestV2Page3", (function() {
            return ht
        }
        )),
        n.d(r, "PlacementTestV2Page4", (function() {
            return mt
        }
        )),
        n.d(r, "PlacementTestV2Page5", (function() {
            return gt
        }
        )),
        n.d(r, "PlacementTestFooter", (function() {
            return vt
        }
        )),
        n.d(r, "PlacementTestHeader", (function() {
            return bt
        }
        )),
        n.d(r, "PlacementTest", (function() {
            return yt
        }
        )),
        n.d(r, "PlacementTestPage1", (function() {
            return xt
        }
        )),
        n.d(r, "PlacementTestPage2", (function() {
            return wt
        }
        )),
        n.d(r, "PlacementTestPage3", (function() {
            return _t
        }
        )),
        n.d(r, "PlacementTestPage4", (function() {
            return kt
        }
        )),
        n.d(r, "PlacementTestPage5", (function() {
            return Tt
        }
        )),
        n.d(r, "PlacementTestSurveyFooter", (function() {
            return Ot
        }
        )),
        n.d(r, "PlacementTestSurveyHeader", (function() {
            return St
        }
        )),
        n.d(r, "PlacementTestSurvey", (function() {
            return Pt
        }
        )),
        n.d(r, "PlacementTestSurveyPage1", (function() {
            return Et
        }
        )),
        n.d(r, "PlacementTestSurveyPage2", (function() {
            return $t
        }
        )),
        n.d(r, "PlacementTestSurveyPage3", (function() {
            return It
        }
        )),
        n.d(r, "PlacementTestSurveyPage4", (function() {
            return jt
        }
        )),
        n.d(r, "PlacementTestSurveyPage5", (function() {
            return Ct
        }
        ));
        n(6),
        n(5),
        n(2),
        n(7),
        n(4),
        n(8);
        var o = n(24)
          , c = n(0)
          , l = (n(67),
        n(27),
        n(1),
        n(16),
        n(10),
        n(22),
        n(9))
          , f = n.n(l)
          , d = n(115)
          , h = n(253)
          , m = n(183)
          , v = n.n(m)
          , y = n(93)
          , x = n.n(y)
          , w = (n(38),
        n(42),
        n(184))
          , _ = n(60)
          , k = n(12);
        n(187);
        "scrollRestoration"in window.history && (Object(k.u)("manual"),
        window.addEventListener("beforeunload", (function() {
            Object(k.u)("auto")
        }
        )),
        window.addEventListener("load", (function() {
            Object(k.u)("manual")
        }
        )));
        function T(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function O(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? T(Object(n), !0).forEach((function(e) {
                    Object(c.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        var S = function() {};
        f.a.use(w.a);
        var P = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(t, e, n) {
                var r = !1
                  , o = t !== e;
                n ? r = n : o && function(t) {
                    var e = Object(k.g)(t);
                    if (1 === e.length) {
                        var n = e[0].options;
                        return !1 !== (void 0 === n ? {} : n).scrollToTop
                    }
                    return e.some((function(t) {
                        var e = t.options;
                        return e && e.scrollToTop
                    }
                    ))
                }(t) && (r = {
                    x: 0,
                    y: 0
                });
                var c = window.$nuxt;
                return (!o || t.path === e.path && t.hash !== e.hash) && c.$nextTick((function() {
                    return c.$emit("triggerScroll")
                }
                )),
                new Promise((function(e) {
                    c.$once("triggerScroll", (function() {
                        if (t.hash) {
                            var n = t.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                            try {
                                var o = document.querySelector(n);
                                if (o) {
                                    var c;
                                    r = {
                                        selector: n
                                    };
                                    var l = Number(null === (c = getComputedStyle(o)["scroll-margin-top"]) || void 0 === c ? void 0 : c.replace("px", ""));
                                    l && (r.offset = {
                                        y: l
                                    })
                                }
                            } catch (t) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        e(r)
                    }
                    ))
                }
                ))
            },
            routes: [{
                path: "/",
                component: function() {
                    return Object(k.m)(n.e(37).then(n.bind(null, 396)))
                },
                name: "index"
            }, {
                path: "/:site",
                component: function() {
                    return Object(k.m)(n.e(36).then(n.bind(null, 661)))
                },
                name: "site"
            }, {
                path: "/:site/:exam_slug",
                component: function() {
                    return Object(k.m)(n.e(35).then(n.bind(null, 662)))
                },
                name: "site-exam_slug"
            }],
            fallback: !1
        };
        function E(t, e) {
            var base = e._app && e._app.basePath || P.base
              , n = new w.a(O(O({}, P), {}, {
                base: base
            }))
              , r = n.push;
            n.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S
                  , n = arguments.length > 2 ? arguments[2] : void 0;
                return r.call(this, t, e, n)
            }
            ;
            var o = n.resolve.bind(n);
            return n.resolve = function(t, e, n) {
                return "string" == typeof t && (t = Object(_.c)(t)),
                o(t, e, n)
            }
            ,
            n
        }
        var $ = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(t, e) {
                var n = e.parent
                  , data = e.data
                  , r = e.props
                  , o = n.$createElement;
                data.nuxtChild = !0;
                for (var c = n, l = n.$nuxt.nuxt.transitions, f = n.$nuxt.nuxt.defaultTransition, d = 0; n; )
                    n.$vnode && n.$vnode.data.nuxtChild && d++,
                    n = n.$parent;
                data.nuxtChildDepth = d;
                var h = l[d] || f
                  , m = {};
                I.forEach((function(t) {
                    void 0 !== h[t] && (m[t] = h[t])
                }
                ));
                var v = {};
                j.forEach((function(t) {
                    "function" == typeof h[t] && (v[t] = h[t].bind(c))
                }
                ));
                var y = v.beforeEnter;
                if (v.beforeEnter = function(t) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    y)
                        return y.call(c, t)
                }
                ,
                !1 === h.css) {
                    var x = v.leave;
                    (!x || x.length < 2) && (v.leave = function(t, e) {
                        x && x.call(c, t),
                        c.$nextTick(e)
                    }
                    )
                }
                var w = o("routerView", data);
                return r.keepAlive && (w = o("keep-alive", {
                    props: r.keepAliveProps
                }, [w])),
                o("transition", {
                    props: m,
                    on: v
                }, [w])
            }
        }
          , I = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , j = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , C = {
            name: "NuxtError",
            props: {
                error: {
                    type: Object,
                    default: null
                }
            },
            computed: {
                statusCode: function() {
                    return this.error && this.error.statusCode || 500
                },
                message: function() {
                    return this.error.message || "Error"
                }
            },
            head: function() {
                return {
                    title: this.message,
                    meta: [{
                        name: "viewport",
                        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                    }]
                }
            }
        }
          , R = (n(309),
        n(62))
          , A = Object(R.a)(C, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "__nuxt-error-page"
            }, [e("div", {
                staticClass: "error"
            }, [e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                }
            }, [e("path", {
                attrs: {
                    d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                }
            })]), t._v(" "), e("div", {
                staticClass: "title"
            }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? e("p", {
                staticClass: "description"
            }, [void 0 === t.$route ? e("a", {
                staticClass: "error-link",
                attrs: {
                    href: "/"
                }
            }) : e("NuxtLink", {
                staticClass: "error-link",
                attrs: {
                    to: "/"
                }
            }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
        }
        ), [function() {
            var t = this._self._c;
            return t("div", {
                staticClass: "logo"
            }, [t("a", {
                attrs: {
                    href: "https://nuxtjs.org",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [this._v("Nuxt")])])
        }
        ], !1, null, null, null).exports
          , N = n(36)
          , D = (n(33),
        {
            name: "Nuxt",
            components: {
                NuxtChild: $,
                NuxtError: A
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(t) {
                this.displayingNuxtError && (this.errorFromNuxtError = t,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(k.c)(this.$route.matched[0].path)(this.$route.params);
                    var t = Object(N.a)(this.$route.matched, 1)[0];
                    if (!t)
                        return this.$route.path;
                    var e = t.components.default;
                    if (e && e.options) {
                        var n = e.options;
                        if (n.key)
                            return "function" == typeof n.key ? n.key(this.$route) : n.key
                    }
                    return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                f.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(t) {
                var e = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return e.errorFromNuxtError = !1
                }
                )),
                t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return e.displayingNuxtError = !1
                }
                )),
                t(A, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : t("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        })
          , L = (n(19),
        n(59),
        n(57),
        n(65),
        n(39),
        {
            name: "NuxtLoading",
            data: function() {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            },
            computed: {
                left: function() {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            },
            beforeDestroy: function() {
                this.clear()
            },
            methods: {
                clear: function() {
                    clearInterval(this._timer),
                    clearTimeout(this._throttle),
                    clearTimeout(this._hide),
                    this._timer = null
                },
                start: function() {
                    var t = this;
                    return this.clear(),
                    this.percent = 0,
                    this.reversed = !1,
                    this.skipTimerCount = 0,
                    this.canSucceed = !0,
                    this.throttle ? this._throttle = setTimeout((function() {
                        return t.startTimer()
                    }
                    ), this.throttle) : this.startTimer(),
                    this
                },
                set: function(t) {
                    return this.show = !0,
                    this.canSucceed = !0,
                    this.percent = Math.min(100, Math.max(0, Math.floor(t))),
                    this
                },
                get: function() {
                    return this.percent
                },
                increase: function(t) {
                    return this.percent = Math.min(100, Math.floor(this.percent + t)),
                    this
                },
                decrease: function(t) {
                    return this.percent = Math.max(0, Math.floor(this.percent - t)),
                    this
                },
                pause: function() {
                    return clearInterval(this._timer),
                    this
                },
                resume: function() {
                    return this.startTimer(),
                    this
                },
                finish: function() {
                    return this.percent = this.reversed ? 0 : 100,
                    this.hide(),
                    this
                },
                hide: function() {
                    var t = this;
                    return this.clear(),
                    this._hide = setTimeout((function() {
                        t.show = !1,
                        t.$nextTick((function() {
                            t.percent = 0,
                            t.reversed = !1
                        }
                        ))
                    }
                    ), 500),
                    this
                },
                fail: function(t) {
                    return this.canSucceed = !1,
                    this
                },
                startTimer: function() {
                    var t = this;
                    this.show || (this.show = !0),
                    void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                    this._timer = setInterval((function() {
                        t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut),
                        t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1,
                        t.reversed = !t.reversed))
                    }
                    ), 100)
                }
            },
            render: function(t) {
                var e = t(!1);
                return this.show && (e = t("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {
                        width: this.percent + "%",
                        left: this.left
                    }
                })),
                e
            }
        })
          , M = (n(310),
        Object(R.a)(L, undefined, undefined, !1, null, null, null).exports)
          , U = (n(311),
        n(312),
        n(313),
        n(314),
        n(315),
        n(14),
        n(119),
        n(153),
        n(120),
        n(46),
        {
            props: {
                loading: {
                    default: !1,
                    type: Boolean
                }
            }
        })
          , F = (n(318),
        {
            data: function() {
                return {
                    preloadError: !1,
                    uploadDone: !1,
                    uploadError: !1,
                    uploadProcess: {},
                    testEnd: !1
                }
            },
            components: {
                Loading: Object(R.a)(U, (function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "loading-screen",
                        class: {
                            show: this.loading
                        }
                    }, [t("svg", {
                        staticClass: "spinner"
                    }, [t("circle", {
                        attrs: {
                            cx: "20",
                            cy: "20",
                            r: "18"
                        }
                    })])])
                }
                ), [], !1, null, "4bf296c6", null).exports
            },
            computed: {
                appLoading: function() {
                    return this.$store.getters.getLoading
                },
                fbTracking: function() {
                    return this.$TestApp.getFbTracking()
                }
            },
            created: function() {
                var t = this;
                this.$bus.$on("preload_error", (function(e) {
                    t.preloadError = e
                }
                )),
                this.$bus.$on("updateProgress", (function(progress) {
                    t.uploadProcess = progress
                }
                )),
                this.$bus.$on("uploadProcess", (function() {
                    t.uploadDone = !0
                }
                )),
                this.$bus.$on("uploadError", (function() {
                    t.uploadError = !0
                }
                )),
                this.$bus.$on("testEnd", (function(e) {
                    e && t.$bvModal.show("uploadProcess")
                }
                ))
            },
            mounted: function() {
                this.fbTracking && this.fbTrackingInit(this.fbTracking)
            },
            methods: {
                reUpload: function(t) {
                    this.$TestApp.reUploadFile(t)
                },
                dowloadFile: function(t) {
                    var e = t.file
                      , n = t.question
                      , r = JSON.parse((null == n ? void 0 : n.content) || "{}")
                      , o = "".concat(null != r && r.title ? null == r ? void 0 : r.title : "file", "-").concat((new Date).getTime(), ".mp3")
                      , a = document.createElement("a");
                    document.body.appendChild(a),
                    a.style = "display: none";
                    var c = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
                      , l = navigator.userAgent.toLowerCase().indexOf("CriOS") > -1 || navigator.vendor.toLowerCase().indexOf("google") > -1
                      , f = [];
                    c && (f = navigator.userAgent.match(/OS [\d_]+/i)[0].substr(3).split("_").map((function(t) {
                        return parseInt(t)
                    }
                    )));
                    try {
                        var d = document.createElement("a")
                          , h = window.URL.createObjectURL(e);
                        d.setAttribute("href", h),
                        d.setAttribute("target", "_blank");
                        var m = o + ".mp3";
                        (c && (f[0] > 12 || l) || !c) && d.setAttribute("download", m);
                        var v = new MouseEvent("click",{
                            view: window,
                            bubbles: !0,
                            cancelable: !1
                        });
                        d.dispatchEvent(v)
                    } catch (t) {}
                },
                jsonParse: function(t) {
                    try {
                        return JSON.parse(t)
                    } catch (t) {}
                    return {}
                },
                resolveUploadProgressState: function(t) {
                    return null != t && t.error ? "error" : null != t && t.loaded || null != t && t.error ? "success" : "primary"
                },
                fbTrackingInit: function(t) {
                    var e = this;
                    t && t.split(/\n/).forEach((function(t) {
                        t && e.$fb.setPixelId(t)
                    }
                    ))
                }
            },
            watch: {
                preloadError: function(t) {
                    t && (this.$bvModal.hide("confirm-info"),
                    this.$bvModal.show("preloadError"))
                },
                fbTracking: function(t) {
                    t && this.fbTrackingInit(t)
                }
            }
        })
          , B = (n(319),
        n(320),
        Object(R.a)(F, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {}, [e("b-modal", {
                attrs: {
                    "hide-header-close": "",
                    "no-close-on-esc": "",
                    "no-close-on-backdrop": "",
                    id: "preloadError",
                    "modal-class": "custom-modal",
                    "hide-footer": "",
                    centered: "",
                    size: "lg"
                }
            }, [e("div", {
                staticClass: "d-block p-4"
            }, [e("b-row", [e("b-col", [e("div", {
                staticClass: "block-modal-content fw-600 bg-white"
            }, [e("div", {
                staticClass: "modal-content_text ml-3"
            }, [e("p", {
                staticClass: "m-0"
            }, [t._v("Opps! Đã có lỗi trong quá trình thiết lập đề, hãy kiểm tra kết nối mạng hoặc sử dụng thiết bị khác")])]), t._v(" "), e("b-img", {
                staticClass: "modal-character",
                staticStyle: {
                    right: "-70px",
                    height: "80px"
                },
                attrs: {
                    src: n(263)
                }
            })], 1)])], 1)], 1)]), t._v(" "), e("b-modal", {
                attrs: {
                    "hide-header-close": "",
                    "no-close-on-esc": "",
                    "no-close-on-backdrop": "",
                    id: "uploadProcess",
                    "modal-class": "custom-modal",
                    "hide-footer": "",
                    centered: "",
                    size: "lg"
                }
            }, [e("div", {
                staticClass: "d-block p-4"
            }, [e("b-row", [e("b-col", [e("div", {
                staticClass: "block-modal-content p-4 mr-0 fw-600 bg-white"
            }, [e("div", {
                staticClass: "modal-content_text w-100 text-center"
            }, [e("p", {
                staticClass: "m-0 mb-4 text-center"
            }, [t._v("Phần thi speaking của bạn đã hoàn thành, các nội dung đang được tải lên."), e("br"), t._v("Hãy cùng xem lại một lần nữa nhé!")]), t._v(" "), e("div", t._l(t.uploadProcess, (function(n) {
                var r, o, c;
                return e("div", {
                    staticClass: "mb-4"
                }, [e("div", {
                    staticClass: "d-flex align-items-center justify-content-between"
                }, [e("div", {
                    staticClass: "d-flex align-items-center"
                }, [e("p", {
                    staticClass: "fw-light mb-0 mr-2"
                }, [t._v("\n                                                " + t._s(t.jsonParse(null == n || null === (r = n.question) || void 0 === r ? void 0 : r.content).title) + " - \n                                                "), !n.error && n.loaded ? e("span", {
                    staticClass: "text-success"
                }, [t._v("XONG")]) : t._e(), t._v(" "), n.error || n.loaded ? t._e() : e("span", {
                    staticClass: "text-primary"
                }, [t._v("ĐANG TẢI")]), t._v(" "), n.error ? e("span", {
                    staticClass: "text-danger"
                }, [t._v("LỖI")]) : t._e()])]), t._v(" "), e("button", {
                    staticClass: "border-0",
                    staticStyle: {
                        height: "42px",
                        "background-color": "transparent",
                        padding: "0",
                        color: "#0700e7"
                    },
                    on: {
                        click: function(e) {
                            return t.dowloadFile(n)
                        }
                    }
                }, [t._v("Tải xuống")])]), t._v(" "), n.loaded || n.error ? t._e() : e("b-progress", {
                    staticClass: "border",
                    attrs: {
                        height: "1rem"
                    }
                }, [e("b-progress-bar", {
                    attrs: {
                        value: n.progress,
                        variant: t.resolveUploadProgressState(n),
                        animated: !n.loaded,
                        striped: "",
                        label: "".concat(n.progress, "%")
                    }
                })], 1), t._v(" "), n.error ? e("button", {
                    staticClass: "border-0",
                    staticStyle: {
                        height: "42px",
                        "background-color": "transparent",
                        padding: "0",
                        color: "#0700e7"
                    },
                    on: {
                        click: function(e) {
                            return t.reUpload(n)
                        }
                    }
                }, [t._v("Tải lại")]) : t._e(), t._v(" "), n.loaded && !n.error && null != n && null !== (o = n.question) && void 0 !== o && null !== (o = o.answers) && void 0 !== o && o.value ? e("audio", {
                    attrs: {
                        controls: ""
                    }
                }, [e("source", {
                    attrs: {
                        src: null == n || null === (c = n.question) || void 0 === c || null === (c = c.answers) || void 0 === c ? void 0 : c.value
                    }
                })]) : t._e()], 1)
            }
            )), 0), t._v(" "), t.uploadDone ? e("b-button", {
                staticClass: "custom",
                staticStyle: {
                    "min-width": "200px"
                },
                attrs: {
                    variant: "success"
                },
                on: {
                    click: function(e) {
                        return t.$bvModal.hide("uploadProcess")
                    }
                }
            }, [t._v("XONG")]) : t._e(), t._v(" "), t.uploadError ? e("b-button", {
                staticClass: "custom",
                staticStyle: {
                    "min-width": "200px"
                },
                attrs: {
                    variant: "warning"
                },
                on: {
                    click: function(e) {
                        return t.$bvModal.hide("uploadProcess")
                    }
                }
            }, [t._v("VẪN NỘP BÀI")]) : t._e()], 1)])])], 1)], 1)]), t._v(" "), e("Loading", {
                attrs: {
                    loading: t.appLoading
                }
            }), t._v(" "), e("Nuxt")], 1)
        }
        ), [], !1, null, "2b05db1a", null).exports);
        function H(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return J(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return J(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    l = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function J(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var Q = {
            _default: Object(k.s)(B)
        }
          , G = {
            render: function(t, e) {
                var n = t("NuxtLoading", {
                    ref: "loading"
                })
                  , r = t(this.layout || "nuxt")
                  , o = t("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [r])
                  , c = t("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(t) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [o]);
                return t("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [n, c])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }
            },
            beforeCreate: function() {
                f.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                this.$root.$options.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            mounted: function() {
                var t = this;
                return Object(o.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.$loading = t.$refs.loading;
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                },
                isFetching: function() {
                    return this.nbFetching > 0
                },
                isPreview: function() {
                    return Boolean(this.$options.previewData)
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var n, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ((n = Object(k.h)(t.$route)).length) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return t.$loading.start(),
                                    r = n.map(function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                            var p, r, o, component;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return p = [],
                                                        n.$options.fetch && n.$options.fetch.length && p.push(Object(k.q)(n.$options.fetch, t.context)),
                                                        n.$options.asyncData && p.push(Object(k.q)(n.$options.asyncData, t.context).then((function(t) {
                                                            for (var e in t)
                                                                f.a.set(n.$data, e, t[e])
                                                        }
                                                        ))),
                                                        e.next = 5,
                                                        Promise.all(p);
                                                    case 5:
                                                        p = [],
                                                        n.$fetch && p.push(n.$fetch()),
                                                        r = H(Object(k.e)(n.$vnode.componentInstance));
                                                        try {
                                                            for (r.s(); !(o = r.n()).done; )
                                                                component = o.value,
                                                                p.push(component.$fetch())
                                                        } catch (t) {
                                                            r.e(t)
                                                        } finally {
                                                            r.f()
                                                        }
                                                        return e.abrupt("return", Promise.all(p));
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    e.prev = 5,
                                    e.next = 8,
                                    Promise.all(r);
                                case 8:
                                    e.next = 15;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e.catch(5),
                                    t.$loading.fail(e.t0),
                                    Object(k.k)(e.t0),
                                    t.error(e.t0);
                                case 15:
                                    t.$loading.finish();
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[5, 10]])
                    }
                    )))()
                },
                errorChanged: function() {
                    if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                        this.$loading.finish && this.$loading.finish());
                        var t = (A.options || A).layout;
                        "function" == typeof t && (t = t(this.context)),
                        this.setLayout(t)
                    }
                },
                setLayout: function(t) {
                    return t && Q["_" + t] || (t = "default"),
                    this.layoutName = t,
                    this.layout = Q["_" + t],
                    this.layout
                },
                loadLayout: function(t) {
                    return t && Q["_" + t] || (t = "default"),
                    Promise.resolve(Q["_" + t])
                }
            },
            components: {
                NuxtLoading: M
            }
        };
        n(68);
        f.a.use(d.a);
        var V = ["state", "getters", "actions", "mutations"]
          , W = {};
        W.modules = W.modules || {},
        z(n(321), "getters.js"),
        z(n(322), "mutations.js"),
        z(n(323), "state.js"),
        z(n(324), "TestApp/actions.js"),
        z(n(325), "TestApp/getters.js"),
        z(n(326), "TestApp/mutations.js"),
        z(n(327), "TestApp/state.js");
        var K = W instanceof Function ? W : function() {
            return new d.a.Store(Object.assign({
                strict: !1
            }, W))
        }
        ;
        function X(t, e) {
            if (t.state && "function" != typeof t.state) {
                console.warn("'state' should be a method that returns an object in ".concat(e));
                var n = Object.assign({}, t.state);
                t = Object.assign({}, t, {
                    state: function() {
                        return n
                    }
                })
            }
            return t
        }
        function z(t, e) {
            t = t.default || t;
            var n = e.replace(/\.(js|mjs)$/, "").split("/")
              , r = n[n.length - 1]
              , o = "store/".concat(e);
            if (t = "state" === r ? function(t, e) {
                if ("function" != typeof t) {
                    console.warn("".concat(e, " should export a method that returns an object"));
                    var n = Object.assign({}, t);
                    return function() {
                        return n
                    }
                }
                return X(t, e)
            }(t, o) : X(t, o),
            V.includes(r)) {
                var c = r;
                Z(Y(W, n, {
                    isProperty: !0
                }), t, c)
            } else {
                "index" === r && (n.pop(),
                r = n[n.length - 1]);
                for (var l = Y(W, n), f = 0, d = V; f < d.length; f++) {
                    var h = d[f];
                    Z(l, t[h], h)
                }
                !1 === t.namespaced && delete l.namespaced
            }
        }
        function Y(t, e) {
            var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty
              , r = void 0 !== n && n;
            if (!e.length || r && 1 === e.length)
                return t;
            var o = e.shift();
            return t.modules[o] = t.modules[o] || {},
            t.modules[o].namespaced = !0,
            t.modules[o].modules = t.modules[o].modules || {},
            Y(t.modules[o], e, {
                isProperty: r
            })
        }
        function Z(t, e, n) {
            e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
        }
        n(118);
        var tt = function() {
            return n.e(29).then(n.bind(null, 591)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , et = function() {
            return n.e(28).then(n.bind(null, 663)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , nt = function() {
            return n.e(30).then(n.bind(null, 664)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , ot = function() {
            return n.e(31).then(n.bind(null, 665)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , at = function() {
            return Promise.all([n.e(1), n.e(0), n.e(32)]).then(n.bind(null, 657)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , it = function() {
            return n.e(33).then(n.bind(null, 666)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , st = function() {
            return n.e(34).then(n.bind(null, 667)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , ut = function() {
            return n.e(21).then(n.bind(null, 386)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , ct = function() {
            return n.e(22).then(n.bind(null, 387)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , lt = function() {
            return n.e(20).then(n.bind(null, 668)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , ft = function() {
            return n.e(23).then(n.bind(null, 669)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , pt = function() {
            return n.e(24).then(n.bind(null, 670)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , ht = function() {
            return n.e(25).then(n.bind(null, 671)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , mt = function() {
            return Promise.all([n.e(1), n.e(0), n.e(26)]).then(n.bind(null, 658)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , gt = function() {
            return n.e(27).then(n.bind(null, 672)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , vt = function() {
            return n.e(5).then(n.bind(null, 683)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , bt = function() {
            return n.e(6).then(n.bind(null, 684)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , yt = function() {
            return n.e(4).then(n.bind(null, 673)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , xt = function() {
            return n.e(7).then(n.bind(null, 674)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , wt = function() {
            return n.e(8).then(n.bind(null, 675)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , _t = function() {
            return n.e(9).then(n.bind(null, 676)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , kt = function() {
            return Promise.all([n.e(1), n.e(0), n.e(10)]).then(n.bind(null, 659)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , Tt = function() {
            return n.e(11).then(n.bind(null, 677)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , Ot = function() {
            return n.e(13).then(n.bind(null, 685)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , St = function() {
            return n.e(14).then(n.bind(null, 686)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , Pt = function() {
            return n.e(12).then(n.bind(null, 678)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , Et = function() {
            return n.e(15).then(n.bind(null, 679)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , $t = function() {
            return n.e(16).then(n.bind(null, 680)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , It = function() {
            return n.e(17).then(n.bind(null, 681)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , jt = function() {
            return Promise.all([n.e(1), n.e(0), n.e(18)]).then(n.bind(null, 660)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        }
          , Ct = function() {
            return n.e(19).then(n.bind(null, 682)).then((function(t) {
                return Rt(t.default || t)
            }
            ))
        };
        function Rt(t) {
            if (!t || !t.functional)
                return t;
            var e = Array.isArray(t.props) ? t.props : Object.keys(t.props || {});
            return {
                render: function(n) {
                    var r = {}
                      , o = {};
                    for (var c in this.$attrs)
                        e.includes(c) ? o[c] = this.$attrs[c] : r[c] = this.$attrs[c];
                    return n(t, {
                        on: this.$listeners,
                        attrs: r,
                        props: o,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        for (var At in r)
            f.a.component(At, r[At]),
            f.a.component("Lazy" + At, r[At]);
        var Nt = n(261);
        f.a.use(Nt.a, {});
        var Dt = n(25)
          , qt = n(26)
          , Lt = (n(112),
        n(188),
        n(256))
          , Mt = function() {
            function t(e) {
                Object(Dt.a)(this, t),
                this.eventsQueue = [],
                this.fqbLoaded = !1,
                this.options = e,
                this.fbq = null,
                this.isEnabled = !e.disabled
            }
            return Object(qt.a)(t, [{
                key: "setFbq",
                value: function(t) {
                    this.fbq = t,
                    this.fqbLoaded = !0,
                    this.send()
                }
            }, {
                key: "setPixelId",
                value: function(t) {
                    this.options.pixelId = t,
                    this.init()
                }
            }, {
                key: "setUserData",
                value: function(t) {
                    this.userData = t
                }
            }, {
                key: "enable",
                value: function() {
                    this.isEnabled = !0,
                    this.init(),
                    this.track()
                }
            }, {
                key: "disable",
                value: function() {
                    this.isEnabled = !1
                }
            }, {
                key: "init",
                value: function() {
                    this.query("init", this.options.pixelId, this.userData || void 0)
                }
            }, {
                key: "track",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    t || (t = this.options.track),
                    n ? this.query("track", t, e, n) : this.query("track", t, e)
                }
            }, {
                key: "query",
                value: function(t, option) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.options.debug && Ft("Command:", t, "Option:", option, "Additional parameters:", e, "EventID:", n),
                    this.isEnabled && (this.eventsQueue.push({
                        cmd: t,
                        option: option,
                        parameters: e,
                        eventID: n
                    }),
                    this.send())
                }
            }, {
                key: "send",
                value: function() {
                    if (this.fqbLoaded)
                        for (; this.eventsQueue.length; ) {
                            var t = this.eventsQueue.shift();
                            this.options.debug && Ft("Send event: ", t),
                            t.eventID ? this.fbq(t.cmd, t.option, t.parameters, t.eventID) : t.parameters ? this.fbq(t.cmd, t.option, t.parameters) : this.fbq(t.cmd, t.option)
                        }
                }
            }]),
            t
        }();
        function Ut(t, path) {
            return t.pixels.find((function(t) {
                return -1 !== t.routes.findIndex((function(t) {
                    return new Lt.Minimatch(t).match(path)
                }
                ))
            }
            ))
        }
        function Ft() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            console.info.apply(this, ["[nuxt-facebook-pixel-module]"].concat(e))
        }
        var Bt = function(t, e) {
            var n = {
                pixelId: "245564050537290",
                track: "PageView",
                autoPageView: !0,
                version: "2.0",
                pixels: [],
                manualMode: !1,
                disabled: !1,
                debug: !1,
                disable: !0,
                dev: !1
            }
              , r = n.dev && !n.debug;
            r && Ft('You are running in development mode. Set "debug: true" in your nuxt.config.js if you would like to trigger tracking events in local.');
            var path = t.route.path
              , o = Ut(n, path)
              , c = Object.assign({}, o || n)
              , l = new Mt(c);
            ("undefined" != typeof window && function(t, b, e, n, o, f, s) {
                if (!t.fbq) {
                    o = t.fbq = function() {
                        o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
                    }
                    ,
                    t._fbq || (t._fbq = o),
                    o.push = o,
                    o.loaded = !0,
                    o.version = c.version,
                    o.queue = [],
                    (f = b.createElement("script")).async = !0,
                    f.defer = !0,
                    f.src = "https://connect.facebook.net/en_US/fbevents.js",
                    (s = b.getElementsByTagName("body")[0]).parentNode.appendChild(f, s);
                    var d = function() {
                        l.setFbq(fbq),
                        r || c.disabled || (c.manualMode && fbq("set", "autoConfig", !1, c.pixelId),
                        fbq("init", c.pixelId),
                        fbq("track", c.track))
                    };
                    f.readyState ? f.onreadystatechange = function() {
                        "loaded" !== f.readyState && "complete" !== f.readyState || (f.onreadystatechange = null,
                        d())
                    }
                    : f.onload = d
                }
            }(window, document),
            t.app && t.app.router) && t.app.router.afterEach((function(t) {
                var path = t.path
                  , e = Ut(n, path)
                  , r = Object.assign({}, e || n);
                r.pixelId !== l.options.pixelId && l.setPixelId(r.pixelId),
                n.autoPageView && l.track("PageView")
            }
            ));
            t.$fb = l,
            e("fb", l)
        }
          , Ht = n(355)
          , Jt = n(257);
        function Qt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Gt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Qt(Object(n), !0).forEach((function(e) {
                    Object(c.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function Vt(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return Wt(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Wt(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    l = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function Wt(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        for (var Kt = {
            setBaseURL: function(t) {
                this.defaults.baseURL = t
            },
            setHeader: function(t, e) {
                var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common", o = Vt(Array.isArray(r) ? r : [r]);
                try {
                    for (o.s(); !(n = o.n()).done; ) {
                        var c = n.value;
                        e ? this.defaults.headers[c][t] = e : delete this.defaults.headers[c][t]
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            },
            setToken: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common"
                  , r = t ? (e ? e + " " : "") + t : null;
                this.setHeader("Authorization", r, n)
            },
            onRequest: function(t) {
                this.interceptors.request.use((function(e) {
                    return t(e) || e
                }
                ))
            },
            onResponse: function(t) {
                this.interceptors.response.use((function(e) {
                    return t(e) || e
                }
                ))
            },
            onRequestError: function(t) {
                this.interceptors.request.use(void 0, (function(e) {
                    return t(e) || Promise.reject(e)
                }
                ))
            },
            onResponseError: function(t) {
                this.interceptors.response.use(void 0, (function(e) {
                    return t(e) || Promise.reject(e)
                }
                ))
            },
            onError: function(t) {
                this.onRequestError(t),
                this.onResponseError(t)
            },
            create: function(t) {
                return Zt(Object(Jt.a)(t, this.defaults))
            }
        }, Xt = function() {
            var t = Yt[zt];
            Kt["$" + t] = function() {
                return this[t].apply(this, arguments).then((function(t) {
                    return t && t.data
                }
                ))
            }
        }, zt = 0, Yt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; zt < Yt.length; zt++)
            Xt();
        var Zt = function(t) {
            var e = Ht.a.create(t);
            return e.CancelToken = Ht.a.CancelToken,
            e.isCancel = Ht.a.isCancel,
            function(t) {
                for (var e in Kt)
                    t[e] = Kt[e].bind(t)
            }(e),
            e.onRequest((function(t) {
                t.headers = Gt(Gt({}, e.defaults.headers.common), t.headers)
            }
            )),
            te(e),
            e
        }
          , te = function(t) {
            var e = {
                finish: function() {},
                start: function() {},
                fail: function() {},
                set: function() {}
            }
              , n = function() {
                var t = "undefined" != typeof window && window.$nuxt;
                return t && t.$loading && t.$loading.set ? t.$loading : e
            }
              , r = 0;
            t.onRequest((function(t) {
                t && !1 === t.progress || r++
            }
            )),
            t.onResponse((function(t) {
                t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0,
                n().finish())
            }
            )),
            t.onError((function(t) {
                t && t.config && !1 === t.config.progress || (r--,
                Ht.a.isCancel(t) ? r <= 0 && (r = 0,
                n().finish()) : (n().fail(),
                n().finish()))
            }
            ));
            var o = function(t) {
                if (r && t.total) {
                    var progress = 100 * t.loaded / (t.total * r);
                    n().set(Math.min(100, progress))
                }
            };
            t.defaults.onUploadProgress = o,
            t.defaults.onDownloadProgress = o
        }
          , ee = function(t, e) {
            var n = t.$config && t.$config.axios || {}
              , r = n.browserBaseURL || n.browserBaseUrl || n.baseURL || n.baseUrl || "/api";
            var o = Zt({
                baseURL: r,
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    delete: {},
                    get: {},
                    head: {},
                    post: {},
                    put: {},
                    patch: {}
                }
            });
            t.$axios = o,
            e("axios", o)
        }
          , ne = n(258)
          , re = n.n(ne);
        f.a.use(re.a);
        var oe = n(259)
          , ae = n.n(oe)
          , ie = function(t, e) {
            t.app;
            e("recordRTC", ae.a)
        }
          , se = n(185)
          , ue = n.n(se)
          , ce = n(91);
        n(77),
        n(20),
        n(117),
        n(141),
        n(94),
        n(232);
        function le(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return fe(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return fe(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    l = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function fe(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var de = function() {
            function t() {
                Object(Dt.a)(this, t),
                this.assets = [],
                this.total = this.assets.length,
                this.loaded = 0,
                this.percent = 0,
                this.onloaded = null
            }
            return Object(qt.a)(t, [{
                key: "getBlob",
                value: function(t) {
                    var e = this.assets.find((function(e) {
                        return e.src == t
                    }
                    ));
                    return e && e.blob || t
                }
            }, {
                key: "setAssets",
                value: function(t) {
                    var e, n = this, r = le(t);
                    try {
                        var o = function() {
                            var t = e.value;
                            n.assets.find((function(e) {
                                return e.src == t
                            }
                            )) || n.assets.push({
                                src: t,
                                loaded: !1,
                                load_time: 0,
                                error: !1,
                                entity: null,
                                blob: null,
                                start_time: 0,
                                end_time: 0,
                                loading: !1
                            })
                        };
                        for (r.s(); !(e = r.n()).done; )
                            o()
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    return this
                }
            }, {
                key: "run",
                value: function() {
                    return this._preload(),
                    this
                }
            }, {
                key: "getProgress",
                value: function() {
                    return {
                        total: this.total,
                        loaded: this.loaded,
                        percent: this.percent
                    }
                }
            }, {
                key: "hasError",
                value: function() {
                    return !!this.assets.find((function(t) {
                        return 1 == t.error
                    }
                    ))
                }
            }, {
                key: "_loadProgress",
                value: function() {
                    this.loaded = this.assets.filter((function(t) {
                        return 1 == t.loaded
                    }
                    )).length,
                    this.total = this.assets.length,
                    this.percent = (this.loaded / this.total * 100).toFixed(2),
                    window.EventBus.$emit("preload_change", {
                        total: this.total,
                        loaded: this.loaded,
                        percent: this.percent
                    }),
                    100 == this.percent && this.onloaded
                }
            }, {
                key: "_preloadBlob",
                value: function(t) {
                    var e = this;
                    return new Promise(function() {
                        var n = Object(o.a)(regeneratorRuntime.mark((function n(r, o) {
                            return regeneratorRuntime.wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        t.loading = !0,
                                        t.start_time = (new Date).getTime(),
                                        Ht.a.get(t.src, {
                                            responseType: "blob"
                                        }).then((function(e) {
                                            var n = URL.createObjectURL(e.data);
                                            t.blob = n,
                                            r(n)
                                        }
                                        )).catch((function(n) {
                                            t.error = !0,
                                            console.log(n.message),
                                            window.EventBus.$emit("preload_error", e.hasError()),
                                            o(n)
                                        }
                                        )).finally((function() {
                                            t.loading = !1,
                                            t.loaded = !0,
                                            t.end_time = (new Date).getTime(),
                                            t.load_time = t.end_time = t.start_time,
                                            e._loadProgress()
                                        }
                                        ));
                                    case 3:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        )));
                        return function(t, e) {
                            return n.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "_preload",
                value: function() {
                    var t, e = le(this.assets);
                    try {
                        for (e.s(); !(t = e.n()).done; ) {
                            var n = t.value;
                            n.loading || n.blob || this._preloadBlob(n)
                        }
                    } catch (t) {
                        e.e(t)
                    } finally {
                        e.f()
                    }
                }
            }]),
            t
        }()
          , pe = de
          , he = ["app", "store"];
        function me(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return ge(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ge(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return c = t.done,
                    t
                },
                e: function(t) {
                    l = !0,
                    o = t
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function ge(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++)
                n[i] = t[i];
            return n
        }
        var ve = "TestApp"
          , be = "/get-questions"
          , ye = "/get-test-history"
          , xe = "/track/init"
          , we = "/test-create"
          , _e = "/track/push-contact-v2"
          , ke = "/test-save-v2"
          , Te = "/track/push-survey"
          , Oe = "/test-submit"
          , Se = "/site/config"
          , Pe = "/get-result"
          , Ee = "/contact-update-info"
          , $e = "/uploads";
        window.preload = new pe;
        var Ie = function(t, e) {
            var n = t.app
              , r = t.store;
            Object(ce.a)(t, he);
            e("TestApp", {
                uploads: {},
                convertAudioHtml: function(html) {
                    for (; ; ) {
                        var t = html.indexOf("<audio src");
                        if (-1 == t)
                            break;
                        var e = html.substring(t).indexOf("</audio>") + t
                          , n = html.substring(t, e)
                          , r = n.substring(n.indexOf("src=") + 6);
                        r = r.substring(0, r.indexOf('"') - 1);
                        var o = '\n                <div class=\\"audio no-replay\\">\n                    \x3c!--<div class=\\"d-flex border card flex-row p-2 shadow mt-2 align-items-center\\">\n                        <button>\n                            <svg class=\\"play-icon\\" viewBox=\\"0 0 24 24\\" width=\\"24\\" height=\\"24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"none\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"></circle><polygon points=\\"10 8 16 12 10 16 10 8\\"></polygon></svg>\n                            <svg class=\\"pause-icon\\" viewBox=\\"0 0 24 24\\" width=\\"24\\" height=\\"24\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" fill=\\"none\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"></circle><line x1=\\"10\\" y1=\\"15\\" x2=\\"10\\" y2=\\"9\\"></line><line x1=\\"14\\" y1=\\"15\\" x2=\\"14\\" y2=\\"9\\"></line></svg>\n                        </button>\n                        <div class=\\"ms-2 w-100\\">\n                            <div class=\\"d-flex justify-content-between\\">\n                                <p><strong>Bài nghe</strong></p>\n                                <p class=\\"audio-time\\">00:00 / 00:00</p>\n                            </div>\n                            <p class=\\"alert small text-mute\\">Bạn chỉ được nghe 01 lần, khi đã sẵn sàng bấm play để nghe</p>\n                        </div>\n                    </div>--\x3e\n                    <audio controls controlsList=\\"nodownload\\">\n                        <source src=\\"'.concat(r, '\\" type=\\"audio/mpeg\\">\n                        Your browser does not support the audio element.\n                    </audio>\n                </div>');
                        html = "".concat(html.substring(0, t)).concat(o.replace(/\n/g, "").replace(/\s\s+/g, "")).concat(html.substring(e + 8, html.length))
                    }
                    return html
                },
                _getAssetsFromExamData: function(t) {
                    for (var e = []; new RegExp(["http://", "https://"].join("|")).test(t); ) {
                        var n = -1;
                        if (-1 == (n = t.indexOf("http://")) && (n = t.indexOf("https://")),
                        -1 != n) {
                            var r = (t = t.substr(n)).substr(0, t.indexOf('"'));
                            t = t.substr(t.indexOf('"')),
                            "\\" == r.substr(r.length - 1) && (r = r.substr(0, r.length - 1)),
                            e.push(r)
                        }
                    }
                    return e
                },
                getStartWith: function() {
                    return r.getters["".concat(ve, "/getStartWith")]
                },
                getTestResult: function() {
                    var t = this;
                    return new Promise((function(e) {
                        var r = t._getHistoryId();
                        n.$axios.$get(Pe, {
                            params: {
                                test_id: r
                            }
                        }).then((function(t) {
                            e(t.data)
                        }
                        ))
                    }
                    ))
                },
                _autoSave: function() {
                    var t = this;
                    setTimeout((function() {
                        t.getStartTiming() && (t.testSave(),
                        t._autoSave())
                    }
                    ), 3e4)
                },
                qAnswer: function(t, e) {
                    r.commit("".concat(ve, "/SET_ANSWER"), {
                        id: t,
                        value: e
                    })
                },
                getTimeCouter: function() {
                    return r.getters["".concat(ve, "/getTimeRemaining")]
                },
                getStartTiming: function() {
                    return r.getters["".concat(ve, "/getStartTiming")]
                },
                setTimeCountDown: function() {
                    var t = this.getQuestionOfPart();
                    t && (t.time_remaining || r.commit("".concat(ve, "/SET_TIME_REMAINING"), t.time),
                    r.commit("".concat(ve, "/SET_START_TIMING"), !0))
                },
                countDownTimer: function() {
                    var t = this;
                    setTimeout((function() {
                        if (t.getStartTiming()) {
                            var e = t.getTimeCouter();
                            e -= 1,
                            r.commit("".concat(ve, "/TIME_REMAINING_COUNTDOWN")),
                            e <= 0 && (2 == t.getQuestionOfPart().part_type ? n.$bus.$emit("TIME_UP") : t.nextPart(),
                            r.commit("".concat(ve, "/SET_START_TIMING"), !1))
                        }
                        t.countDownTimer()
                    }
                    ), 1e3)
                },
                goToPage: function(t) {
                    t && r.commit("".concat(ve, "/SET_PAGE"), t),
                    setTimeout((function() {
                        window.scrollTo(0, 0)
                    }
                    ), 500)
                },
                nextPage: function() {
                    var t = this.getPageCurrent();
                    this.goToPage(++t)
                },
                getPageCurrent: function() {
                    return r.state[ve].page
                },
                goToPart: function(t) {
                    null != t && (console.log(t),
                    r.commit("".concat(ve, "/SET_PART"), t))
                },
                nextPart: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var o, c;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return o = t.getPartCurrent(),
                                    c = t._getExam().part.length - 1,
                                    e.next = 4,
                                    t.testSave(!0);
                                case 4:
                                    if (!(c > o)) {
                                        e.next = 9;
                                        break
                                    }
                                    t.goToPart(++o),
                                    t.setTimeCountDown(),
                                    e.next = 18;
                                    break;
                                case 9:
                                    return r.commit("".concat(ve, "/SET_START_TIMING"), !1),
                                    n.$bus.$emit("testEnd", Object.keys(t.uploads).length),
                                    e.next = 13,
                                    t.uploadCheck();
                                case 13:
                                    if (!e.sent) {
                                        e.next = 17;
                                        break
                                    }
                                    t.testSubmit().then((function() {
                                        n.$bus.$emit("uploadProcess"),
                                        "prepare" == t.getThemeName() ? t.goToPage(4) : (t.goToPage(5),
                                        t.testNewSession())
                                    }
                                    )),
                                    e.next = 18;
                                    break;
                                case 17:
                                    n.$bus.$emit("uploadError");
                                case 18:
                                    setTimeout((function() {
                                        window.scrollTo(0, 0)
                                    }
                                    ), 500);
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                reUploadFile: function(t) {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark((function n() {
                        var r, o, c;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return null == t || null === (r = t.question) || void 0 === r ? void 0 : r.id,
                                    o = t.question,
                                    c = t.file,
                                    e.saveRecord(o, c),
                                    n.next = 5,
                                    e.uploadCheck();
                                case 5:
                                    if (!n.sent) {
                                        n.next = 7;
                                        break
                                    }
                                    e.testEndSubmit();
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                },
                testEndSubmit: function() {
                    var t = this;
                    this.testSubmit().then((function() {
                        n.$bus.$emit("uploadProcess"),
                        "prepare" == t.getThemeName() ? t.goToPage(4) : (t.goToPage(5),
                        t.testNewSession())
                    }
                    ))
                },
                uploadCheck: function() {
                    var t = this;
                    return new Promise((function(e, r) {
                        !function r() {
                            setTimeout((function() {
                                var o = t.getUploadProgress();
                                console.log("uploadProgress: ", o),
                                o.processed == o.total ? 0 == o.error ? e(!0) : (console.log("resolve(false)"),
                                e(!1)) : r(),
                                n.$bus.$emit("updateProgress", t.uploads)
                            }
                            ), 500)
                        }()
                    }
                    ))
                },
                testSubmit: function() {
                    var t = this;
                    return new Promise(function() {
                        var e = Object(o.a)(regeneratorRuntime.mark((function e(r, o) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        t.testSave();
                                    case 2:
                                        n.$axios.$post(Oe, {
                                            trackid: t._getTracking(),
                                            test_data: t._getExam(),
                                            update_resutl: !1
                                        }).then((function(t) {
                                            return console.log(t),
                                            1 === t.code ? r(t.message) : o(t.message)
                                        }
                                        )).catch((function(t) {
                                            return console.log(t),
                                            o(t.message)
                                        }
                                        ));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }())
                },
                testSave: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return new Promise((function(r, o) {
                        if (!t._getHistoryId() || t._getHistoryId() < 0)
                            return r(!1);
                        n.$axios.$post(ke, {
                            trackid: t._getTracking(),
                            test_data: t._getExam(),
                            test_id: t._getHistoryId()
                        }, {
                            page_overlay: e
                        }).then((function(t) {
                            return 1 === t.code ? r(!0) : o(t.msg)
                        }
                        )).catch((function(t) {
                            return o(t.message)
                        }
                        ))
                    }
                    ))
                },
                getPartCurrent: function() {
                    return r.state[ve].part
                },
                testContinue: function(t) {
                    t && (this._setQuestion(t),
                    this.goToPage(2),
                    this.goToPart(t.partIsUsed))
                },
                testNewSession: function() {
                    this.goToPart(0);
                    var t = r.getters["".concat(ve, "/examID")];
                    localStorage.removeItem("_speakup_exam".concat(t))
                },
                loadTestInLocal: function() {
                    return Object(o.a)(regeneratorRuntime.mark((function t() {
                        var e, n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    e = r.state[ve].exam.id,
                                    t.next = 3;
                                    break;
                                case 3:
                                    if (e) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    (n = localStorage.getItem("_speakup_exam".concat(e))) && r.commit("".concat(ve, "/SET_HISTORY_ID"), n);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )))()
                },
                _getTracking: function() {
                    var t = r.state[ve].tracking_id;
                    return t || ((t = localStorage.getItem("_speakup_track")) ? (this._setTracking(t),
                    t) : void 0)
                },
                _setTracking: function(t) {
                    r.commit("".concat(ve, "/SET_TRACKING_ID"), t)
                },
                _setQuestion: function(t) {
                    r.commit("".concat(ve, "/SET_QUESTIONS"), t)
                },
                _preloadExamAsset: function(t) {
                    var e = this._getAssetsFromExamData(JSON.stringify(t));
                    window.preload.setAssets(e).run(),
                    window.preload.onloaded = function() {}
                },
                _preloadChangeBlob: function() {
                    var t, e, n = JSON.stringify(this._getExam()), r = me(null === (t = window) || void 0 === t || null === (t = t.preload) || void 0 === t ? void 0 : t.assets);
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var o = e.value;
                            n = n.split(o.src).join(o.blob)
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    this._setQuestion(JSON.parse(n))
                },
                getAssetBlob: function(t) {
                    return window.preload ? window.preload.getBlob(t) : t
                },
                convertAssetsToBlob: function(html) {
                    var t, e, n = me(null === (t = window) || void 0 === t || null === (t = t.preload) || void 0 === t ? void 0 : t.assets);
                    try {
                        for (n.s(); !(e = n.n()).done; ) {
                            var r = e.value;
                            html = html.split(r.src).join(r.blob)
                        }
                    } catch (t) {
                        n.e(t)
                    } finally {
                        n.f()
                    }
                    return html
                },
                assetLoadPercent: function() {
                    return preload.getProgress()
                },
                _fetchExam: function() {
                    var t = this
                      , e = n.context.query.exam
                      , o = n.context.params.exam_slug
                      , c = {
                        tracking_id: this._getTracking()
                    };
                    return (e || o) && (c.target = null != e ? e : o,
                    e && (c.type = "exam_id"),
                    o && (c.type = "exam_slug")),
                    new Promise((function(e, o) {
                        n.$axios.$get(be, {
                            params: c
                        }).then((function(n) {
                            if (1 != n.code)
                                return r.commit("".concat(ve, "/SET_ERROR"), "INIT_EXAM_ERROR"),
                                o(n.msg);
                            var c = n.data
                              , l = JSON.parse(t.convertAudioHtml(JSON.stringify(c)));
                            t._setQuestion(l),
                            t._preloadExamAsset(l),
                            e(l)
                        }
                        )).catch((function(t) {
                            return o(t)
                        }
                        ))
                    }
                    ))
                },
                changeAudioControl: function() {
                    var t = this._getExam()
                      , e = JSON.parse(this.convertAudioHtml(JSON.stringify(t)));
                    this._setQuestion(e)
                },
                _getExamId: function() {
                    return r.state[ve].exam.id
                },
                _getExam: function() {
                    return r.state[ve].exam
                },
                _getHistoryId: function() {
                    return r.state[ve].testHistory.id
                },
                trackingInit: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var r, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t._getTracking()) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 3,
                                    n.$axios.$get(xe);
                                case 3:
                                    if (1 !== (r = e.sent).code) {
                                        e.next = 8;
                                        break
                                    }
                                    return o = r.data,
                                    t._setTracking(o),
                                    e.abrupt("return", o);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                userInit: function() {
                    var t = localStorage.getItem("_speakup_userInfo")
                      , e = {};
                    t && (e = JSON.parse(t || "{}")),
                    e.source = document.location.href,
                    r.commit("".concat(ve, "/SET_CONTACT_INFO"), e)
                },
                checkTestingHistory: function() {
                    var t = this;
                    return new Promise((function(e, o) {
                        if (t._getHistoryId() < 0 || !t._getHistoryId())
                            return e(!1);
                        n.$axios.$get(ye, {
                            params: {
                                trackid: t._getTracking(),
                                id: t._getHistoryId(),
                                cid: r.state[ve].contactInfo.id
                            }
                        }).then((function(t) {
                            if (1 === t.code) {
                                var n = t.data;
                                return 0 == n.status ? e(n.test_result) : e(!1)
                            }
                            return e(!1)
                        }
                        )).catch((function(t) {
                            return o("checkExamPending", t)
                        }
                        ))
                    }
                    ))
                },
                pageSetting: function() {
                    return new Promise((function(t, e) {
                        n.$axios.$get(Se).then((function(e) {
                            return r.commit("".concat(ve, "/SET_SETTINGS"), e),
                            t(!0)
                        }
                        )).catch((function(t) {
                            e(t)
                        }
                        ))
                    }
                    ))
                },
                siteSettings: function() {
                    return r.state[ve].appSettings
                },
                getThemeName: function() {
                    return this.siteSettings().theme || this.THEME_DEFAULT
                },
                getFbTracking: function() {
                    return this.siteSettings().fb_tracking || ""
                },
                checkLogin: function() {
                    var t = n.context.query.access_token;
                    if (t) {
                        localStorage.setItem("access_token", t);
                        var e = window.location.search;
                        e = (e = e.replace("?", "")).split("&");
                        for (var r = 0; r < e.length; r++)
                            if (-1 != e[r].indexOf("access_token")) {
                                e.splice(r, 1);
                                break
                            }
                        window.history.pushState("", "", "".concat(window.location.pathname, "?").concat(e.join("&")))
                    }
                    this.AuthCheck()
                },
                AuthCheck: function() {
                    var t = this
                      , e = localStorage.getItem("access_token");
                    e ? n.$axios.$get("/GEauth/userinfo/", {
                        headers: {
                            authorization: "Bearer " + e
                        }
                    }).then((function(e) {
                        1 == e.code ? (localStorage.setItem("ctid", e.data.id),
                        t.setContactInfo({
                            id: e.data.id,
                            email: e.data.email,
                            name: e.data.displayName,
                            phone: e.data.phone
                        })) : r.dispatch("".concat(ve, "/AuthLogout"))
                    }
                    )) : r.dispatch("".concat(ve, "/AuthLogout"))
                },
                modalUpdatePhoneState: function() {
                    return r.getters["".concat(ve, "/getModalUpdatePhoneState")]
                },
                userClearInfo: function() {
                    r.dispatch("".concat(ve, "/userClearInfo"))
                },
                getExamRule: function() {
                    return r.state[ve].exam.rules || ""
                },
                getQuestionOfPart: function(t) {
                    return t ? r.state[ve].exam.part[t] : r.state[ve].exam.part[this.getPartCurrent()]
                },
                setContactInfo: function(data) {
                    r.commit("".concat(ve, "/SET_CONTACT_INFO"), data)
                },
                getContactInfo: function() {
                    return r.getters["".concat(ve, "/getContactInfo")]
                },
                pushContact: function(data) {
                    var t = this;
                    return new Promise((function(e, o) {
                        var c = r.state[ve].contactInfo
                          , l = Object.assign(JSON.parse(JSON.stringify(c)), data);
                        n.$axios.$post(_e, {
                            trackid: t._getTracking(),
                            data: l
                        }).then((function(n) {
                            if (1 == n.code) {
                                var r = n.data
                                  , o = Object.assign(l, {
                                    id: r
                                });
                                return t.setContactInfo(o),
                                e(o)
                            }
                            e(!1)
                        }
                        )).catch((function(t) {
                            o("pushContact", t)
                        }
                        ))
                    }
                    ))
                },
                pushSurveyForm: function(data) {
                    var t = this;
                    return new Promise((function(e, o) {
                        var c = r.state[ve].contactInfo
                          , l = Object.assign(JSON.parse(JSON.stringify(c)), data);
                        n.$axios.$post(Te, {
                            trackid: t._getTracking(),
                            data: l
                        }).then((function(t) {
                            1 == t.data.code ? e(!0) : e(!1)
                        }
                        )).catch((function(t) {
                            o("pushSurveyForm", t)
                        }
                        ))
                    }
                    ))
                },
                createTest: function(t) {
                    var e = this;
                    return new Promise((function(o, c) {
                        n.$axios.$post(we, {
                            tracking_id: e._getTracking(),
                            exam_id: e._getExamId(),
                            meta: t
                        }).then((function(t) {
                            return 1 === t.code ? (r.commit("".concat(ve, "/SET_HISTORY_ID"), t.data),
                            o(t.data)) : c("createTest", !1)
                        }
                        )).catch((function(t) {
                            return c("createTest", t)
                        }
                        ))
                    }
                    ))
                },
                pushContactAndCreateTest: function(data) {
                    var t = this;
                    return new Promise((function(e, r) {
                        t.pushContact(data).then((function() {
                            return t.createTest(data)
                        }
                        )).then((function(o) {
                            return o ? (n.$fb.track("CompleteRegistration", {
                                value: 20,
                                currency: "VND",
                                content_name: "Signup",
                                status: "complete"
                            }),
                            t.nextPage(),
                            e(o)) : r(!1)
                        }
                        )).catch((function(t) {
                            return r(t)
                        }
                        ))
                    }
                    ))
                },
                writing: function(content) {
                    r.commit("".concat(ve, "/SET_WRITING"), content)
                },
                writingOfPart: function(t) {
                    return this.getQuestionOfPart(t).writing || ""
                },
                Start: function(t) {
                    this.countDownTimer(),
                    t ? this.goToPage(t) : this.nextPage(),
                    this.setTimeCountDown(),
                    this.autoSave || this._autoSave()
                },
                setVideoReplayCount: function(t) {
                    r.commit("".concat(ve, "/SET_VIDEO_REPLAY_COUNT"), t)
                },
                speakingVideo: function(t) {
                    r.commit("".concat(ve, "/SET_QUESTION_INDEX"), t)
                },
                speakingStep: function(t) {
                    r.commit("".concat(ve, "/SET_PART_STEP"), t)
                },
                getStartType: function() {
                    return r.getters["".concat(ve, "/getStartType")]
                },
                getError: function() {
                    return r.getters["".concat(ve, "/getError")]
                },
                getPartAnalytic: function() {
                    var t = {
                        resolve: 0,
                        dontResolve: 0,
                        reReview: 0
                    }
                      , e = this.getQuestionOfPart();
                    if (!e)
                        return t;
                    if (0 != e.part_type)
                        return t;
                    if (0 === e.questions.length)
                        return t;
                    for (var n = e.questions, r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (3 == o.content_type) {
                            var c = o.option_data.length
                              , l = o.answers.filter((function(t) {
                                return "" !== t
                            }
                            )).length
                              , f = c - l;
                            t.resolve += l,
                            t.dontResolve += f,
                            t.reReview += f
                        }
                        1 == o.content_type && (0 !== o.answers.length ? t.resolve += 1 : (t.dontResolve += 1,
                        t.reReview += 1))
                    }
                    return t
                },
                questionStatus: function() {
                    var t = this.getQuestionOfPart();
                    if (t && 0 == t.part_type && 0 !== t.questions.length) {
                        for (var e = t.questions, n = [], r = 0; r < e.length; r++) {
                            var o = e[r];
                            if (3 == o.content_type)
                                if (o.answers.length)
                                    o.answers.forEach((function(t) {
                                        "" !== t ? n.push(!0) : n.push(!1)
                                    }
                                    ));
                                else
                                    for (var i = 0; i < o.option_data.length; i++)
                                        n.push(!1);
                            1 == o.content_type && (0 !== o.answers.length ? n.push(!0) : n.push(!1))
                        }
                        return n
                    }
                },
                setVideoPlayCouter: function(t) {
                    r.commit("".concat(ve, "/SET_VIDEO_REPLAY_COUNT"), t)
                },
                setQuestionIndex: function(t) {
                    r.commit("".concat(ve, "/SET_QUESTION_INDEX"), t)
                },
                setPartStep: function(t) {
                    r.commit("".concat(ve, "/SET_PART_STEP"), t)
                },
                ccidPhoneUpdate: function(t) {
                    var e = this;
                    return new Promise((function(r, o) {
                        var c = e.getContactInfo();
                        c.id && n.$axios.$post(Ee, {
                            ctid: c.id,
                            data: t
                        }).then((function(t) {
                            1 === t.code && r(!0)
                        }
                        )).catch((function(t) {
                            console.log(t),
                            o(t)
                        }
                        ))
                    }
                    ))
                },
                saveRecord: function(t, e) {
                    var r = this
                      , o = null == t ? void 0 : t.id
                      , c = new FormData;
                    c.append("audio", e, "audioRecord-".concat((new Date).getTime(), ".mp3"));
                    var l = new Promise((function(t, e) {
                        var l;
                        l = (new Date).getTime(),
                        n.$axios.post($e, c, {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            },
                            onUploadProgress: function(t) {
                                var e = (100 * t.progress).toFixed(1);
                                if (r.uploads[o].progress = e > 97 ? 97 : e,
                                1 == t.progress) {
                                    var n = ((new Date).getTime() - l) / 1e3;
                                    (((8 * t.bytes / n).toFixed(2) / 1024).toFixed(2) / 1024).toFixed(2)
                                }
                            }
                        }).then((function(e) {
                            1 == e.data.code ? (r.uploads[o].loaded = !0,
                            r.uploads[o].progress = 100,
                            r.qAnswer(o, e.data.data.src),
                            t(e)) : r.uploads[o].error = !0,
                            r.uploads[o].processed = !0
                        }
                        )).catch((function(t) {
                            r.uploads[o].error = !0,
                            e(t),
                            r.uploads[o].processed = !0
                        }
                        ))
                    }
                    ));
                    f.a.set(this.uploads, o, {
                        process: l,
                        question: t,
                        file: e,
                        loaded: !1,
                        error: !1,
                        progress: 0,
                        processed: !1
                    })
                },
                getUpload: function() {
                    return this.uploads
                },
                getUploadProgress: function() {
                    for (var t = Object.keys(this.uploads).length, e = 0, n = 0, r = 0, o = Object.entries(this.uploads); r < o.length; r++) {
                        var c = Object(N.a)(o[r], 2)
                          , l = (c[0],
                        c[1]);
                        l.processed && (e += 1),
                        l.error && (n += 1)
                    }
                    return {
                        total: t,
                        processed: e,
                        error: n
                    }
                }
            })
        }
          , je = ["$axios"]
          , Ce = function(t) {
            var e = t.$axios
              , n = Object(ce.a)(t, je);
            e.onRequest((function(t) {
                n.app;
                var e = {
                    origin: "",
                    pathname: ""
                };
                e.origin = window.location.origin,
                e.pathname = window.location.pathname,
                t.headers["x-pathname"] = e.pathname,
                t.headers["x-origin"] = e.origin
            }
            ))
        };
        window.EventBus = new f.a;
        var Re = function(t, e) {
            e("bus", window.EventBus)
        };
        function Ae(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Ne(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ae(Object(n), !0).forEach((function(e) {
                    Object(c.a)(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        f.a.component(v.a.name, v.a),
        f.a.component(x.a.name, Ne(Ne({}, x.a), {}, {
            render: function(t, e) {
                return x.a._warned || (x.a._warned = !0,
                console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),
                x.a.render(t, e)
            }
        })),
        f.a.component($.name, $),
        f.a.component("NChild", $),
        f.a.component(D.name, D),
        Object.defineProperty(f.a.prototype, "$nuxt", {
            get: function() {
                var t = this.$root ? this.$root.$options.$nuxt : null;
                return t || "undefined" == typeof window ? t : window.$nuxt
            },
            configurable: !0
        }),
        f.a.use(h.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var De = {
            name: "page",
            mode: "out-in",
            appear: !0,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        };
        d.a.Store.prototype.registerModule;
        function qe(t) {
            return Le.apply(this, arguments)
        }
        function Le() {
            return Le = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                var n, r, c, l, d, h, path, m, v = arguments;
                return regeneratorRuntime.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return m = function(t, e) {
                                if (!t)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === e)
                                    throw new Error("inject('".concat(t, "', value) has no value provided"));
                                l[t = "$" + t] = e,
                                l.context[t] || (l.context[t] = e),
                                r[t] = l[t];
                                var n = "__nuxt_" + t + "_installed__";
                                f.a[n] || (f.a[n] = !0,
                                f.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(f.a.prototype, t) || Object.defineProperty(f.a.prototype, t, {
                                        get: function() {
                                            return this.$root.$options[t]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            n = v.length > 1 && void 0 !== v[1] ? v[1] : {},
                            r = K(e),
                            t.next = 5,
                            E(0, n);
                        case 5:
                            return c = t.sent,
                            r.$router = c,
                            l = Ne({
                                head: {
                                    title: "ICAN IELTS",
                                    htmlAttrs: {
                                        lang: "vi"
                                    },
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: ""
                                    }, {
                                        name: "format-detection",
                                        content: "telephone=no"
                                    }, {
                                        name: "description",
                                        content: "Make your IELTS journey joyful!"
                                    }, {
                                        name: "og:description",
                                        content: "Make your IELTS journey joyful!"
                                    }, {
                                        name: "og:type",
                                        content: "website"
                                    }, {
                                        name: "og:title",
                                        content: "ICAN IELTS"
                                    }, {
                                        name: "og:image",
                                        content: "thumbnail.jpg"
                                    }],
                                    link: [{
                                        rel: "preconnect",
                                        href: "https://fonts.gstatic.com"
                                    }, {
                                        rel: "stylesheet",
                                        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
                                    }, {
                                        rel: "stylesheet",
                                        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap"
                                    }],
                                    style: [],
                                    script: []
                                },
                                store: r,
                                router: c,
                                nuxt: {
                                    defaultTransition: De,
                                    transitions: [De],
                                    setTransitions: function(t) {
                                        return Array.isArray(t) || (t = [t]),
                                        t = t.map((function(t) {
                                            return t = t ? "string" == typeof t ? Object.assign({}, De, {
                                                name: t
                                            }) : Object.assign({}, De, t) : De
                                        }
                                        )),
                                        this.$options.nuxt.transitions = t,
                                        t
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(t) {
                                        t = t || null,
                                        l.context._errored = Boolean(t),
                                        t = t ? Object(k.p)(t) : null;
                                        var n = l.nuxt;
                                        return this && (n = this.nuxt || this.$options.nuxt),
                                        n.dateErr = Date.now(),
                                        n.err = t,
                                        e && (e.nuxt.error = t),
                                        t
                                    }
                                }
                            }, G),
                            r.app = l,
                            d = e ? e.next : function(t) {
                                return l.router.push(t)
                            }
                            ,
                            e ? h = c.resolve(e.url).route : (path = Object(k.f)(c.options.base, c.options.mode),
                            h = c.resolve(path).route),
                            t.next = 13,
                            Object(k.t)(l, {
                                store: r,
                                route: h,
                                next: d,
                                error: l.nuxt.error.bind(l),
                                payload: e ? e.payload : void 0,
                                req: e ? e.req : void 0,
                                res: e ? e.res : void 0,
                                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                beforeSerializeFns: e ? e.beforeSerializeFns : void 0,
                                ssrContext: e
                            });
                        case 13:
                            m("config", n),
                            window.__NUXT__ && window.__NUXT__.state && r.replaceState(window.__NUXT__.state),
                            l.context.enablePreview = function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                l.previewData = Object.assign({}, t),
                                m("preview", t)
                            }
                            ,
                            t.next = 19;
                            break;
                        case 19:
                            t.next = 22;
                            break;
                        case 22:
                            if ("function" != typeof Bt) {
                                t.next = 25;
                                break
                            }
                            return t.next = 25,
                            Bt(l.context, m);
                        case 25:
                            if ("function" != typeof ee) {
                                t.next = 28;
                                break
                            }
                            return t.next = 28,
                            ee(l.context, m);
                        case 28:
                            t.next = 31;
                            break;
                        case 31:
                            if ("function" != typeof ie) {
                                t.next = 34;
                                break
                            }
                            return t.next = 34,
                            ie(l.context, m);
                        case 34:
                            if ("function" != typeof ue.a) {
                                t.next = 37;
                                break
                            }
                            return t.next = 37,
                            ue()(l.context, m);
                        case 37:
                            if ("function" != typeof Ie) {
                                t.next = 40;
                                break
                            }
                            return t.next = 40,
                            Ie(l.context, m);
                        case 40:
                            if ("function" != typeof Ce) {
                                t.next = 43;
                                break
                            }
                            return t.next = 43,
                            Ce(l.context, m);
                        case 43:
                            if ("function" != typeof Re) {
                                t.next = 46;
                                break
                            }
                            return t.next = 46,
                            Re(l.context, m);
                        case 46:
                            return l.context.enablePreview = function() {
                                console.warn("You cannot call enablePreview() outside a plugin.")
                            }
                            ,
                            t.next = 49,
                            new Promise((function(t, e) {
                                if (!c.resolve(l.context.route.fullPath).route.matched.length)
                                    return t();
                                c.replace(l.context.route.fullPath, t, (function(n) {
                                    if (!n._isRouter)
                                        return e(n);
                                    if (2 !== n.type)
                                        return t();
                                    var r = c.afterEach(function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e(n, o) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 3,
                                                        Object(k.j)(n);
                                                    case 3:
                                                        l.context.route = e.sent,
                                                        l.context.params = n.params || {},
                                                        l.context.query = n.query || {},
                                                        r(),
                                                        t();
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                                ))
                            }
                            ));
                        case 49:
                            return t.abrupt("return", {
                                store: r,
                                app: l,
                                router: c
                            });
                        case 50:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            Le.apply(this, arguments)
        }
    }
}, [[265, 38, 3, 39]]]);
