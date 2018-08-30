<!doctype html>
<html dir="rtl" itemscope="" itemtype="http://schema.org/WebPage" lang="ar">

<head>
    <meta content="/images/branding/googleg/1x/googleg_standard_color_128dp.png" itemprop="image">
    <link href="/images/branding/product/ico/googleg_lodp.ico" rel="shortcut icon">
    <meta content="origin" name="referrer">
    <title>Google</title>
    <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
        (function() {
            window.google = {
                kEI: 'RcKFW621FY_5kwX_sZCYAw',
                kEXPI: '31',
                authuser: 0,
                kscs: 'c9c918f0_RcKFW621FY_5kwX_sZCYAw',
                kGL: 'EG'
            };
            google.kHL = 'ar';
        })();
        google.time = function() {
            return (new Date).getTime()
        };
        google.timers = {};
        google.startTick = function(c, b) {
            var a = b && google.timers[b].t ? google.timers[b].t.start : google.time();
            google.timers[c] = {
                t: {
                    start: a
                },
                e: {},
                m: {}
            };
            (a = window.performance) && a.now && (google.timers[c].wsrt = Math.floor(a.now()))
        };
        google.startTick("webaft");
        google.startTick("load");
    </script>
    <!--srt-->
    <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
        (function() {
            google.lc = [];
            google.li = 0;
            google.getEI = function(a) {
                for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));) a = a.parentNode;
                return b || google.kEI
            };
            google.getLEI = function(a) {
                for (var b = null; a && (!a.getAttribute || !(b = a.getAttribute("leid")));) a = a.parentNode;
                return b
            };
            google.https = function() {
                return "https:" == window.location.protocol
            };
            google.ml = function() {
                return null
            };
            google.wl = function(a, b) {
                try {
                    google.ml(Error(a), !1, b)
                } catch (d) {}
            };
            google.log = function(a, b, d, c, g) {
                if (a = google.logUrl(a, b, d, c, g)) {
                    b = new Image;
                    var e = google.lc,
                        f = google.li;
                    e[f] = b;
                    b.onerror = b.onload = b.onabort = function() {
                        delete e[f]
                    };
                    google.vel && google.vel.lu && google.vel.lu(a);
                    b.src = a;
                    google.li = f + 1
                }
            };
            google.logUrl = function(a, b, d, c, g) {
                var e = "",
                    f = google.ls || "";
                d || -1 != b.search("&ei=") || (e = "&ei=" + google.getEI(c), -1 == b.search("&lei=") && (c = google.getLEI(c)) && (e += "&lei=" + c));
                c = "";
                !d && google.cshid && -1 == b.search("&cshid=") && "slh" != a && (c = "&cshid=" + google.cshid);
                a = d || "/" + (g || "gen_204") + "?atyp=i&ct=" + a + "&cad=" + b + e + f + "&zx=" + google.time() + c;
                /^http:/i.test(a) && google.https() && (google.ml(Error("a"), !1, {
                    src: a,
                    glmm: 1
                }), a = "");
                return a
            };
        }).call(this);
        (function() {
            google.y = {};
            google.x = function(a, b) {
                if (a) var c = a.id;
                else {
                    do c = Math.random(); while (google.y[c])
                }
                google.y[c] = [a, b];
                return !1
            };
            google.lm = [];
            google.plm = function(a) {
                google.lm.push.apply(google.lm, a)
            };
            google.lq = [];
            google.load = function(a, b, c) {
                google.lq.push([
                    [a], b, c
                ])
            };
            google.loadAll = function(a, b) {
                google.lq.push([a, b])
            };
        }).call(this);
        google.f = {};
        (function() {
            google.hs = {
                h: true
            };
        })();
        (function() {
            google.c = {
                c: {
                    a: true,
                    d: true,
                    n: false,
                    p: false,
                    s: true
                }
            };
            google.sn = 'webhp';
            (function() {
                var e = function(a, b, c) {
                        a.addEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && a.detachEvent("on" + b, c)
                    },
                    g = function(a, b, c) {
                        f.push({
                            g: a,
                            h: b,
                            i: c
                        });
                        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
                    },
                    f = [];
                google.tick = function(a, b, c) {
                    google.timers[a] || google.startTick(a);
                    c = void 0 !== c ? c : google.time();
                    b instanceof Array || (b = [b]);
                    for (var d = 0; d < b.length; ++d) google.timers[a].t[b[d].clearcut] = {
                        key: b[d],
                        ts: c
                    }
                };
                google.c.e = function(a, b, c) {
                    google.timers[a].e[b] = c
                };
                google.c.b = function(a) {
                    var b = google.timers.load.m;
                    b[a] && google.wl("ch_mab", {
                        m: a
                    });
                    b[a] = !0
                };
                google.c.u = function(a) {
                    var b = google.timers.load.m;
                    if (b[a]) {
                        b[a] = !1;
                        for (a in b)
                            if (b[a]) return;
                        google.csiReport()
                    } else google.wl("ch_mnb", {
                        m: a
                    })
                };
                google.rll = function(a, b, c) {
                    var d = function(b) {
                        c(b);
                        e(a, "load", d);
                        e(a, "error", d)
                    };
                    g(a, "load", d);
                    b && g(a, "error", d)
                };
                google.ull = function() {
                    for (var a; a = f.shift();) e(a.g, a.h, a.i)
                };
                google.afte = !0;
                google.aft = function(a) {
                    google.c.c.a && google.afte && (google.timers.aft || google.startTick("aft"), google.timers.aft.t[a.id || a.src || a.name] = google.time())
                };
                google.c.b("pr");
                google.c.b("xe");
            }).call(this);
        })();
    </script>
    <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
        var a = window.location,
            b = a.href.indexOf("#");
        if (0 <= b) {
            var c = a.href.substring(b + 1);
            /(^|&)q=/.test(c) && -1 == c.indexOf("#") && a.replace("/search?" + c.replace(/(^|&)fp=[^&]*/g, "") + "&cad=h")
        };
    </script>
    <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
        (function() {
            var k = this,
                l = function() {},
                t = Date.now || function() {
                    return +new Date
                };
            var v = Array.prototype.filter ? function(a, d) {
                return Array.prototype.filter.call(a, d, void 0)
            } : function(a, d) {
                for (var b = a.length, c = [], e = 0, f = "string" == typeof a ? a.split("") : a, n = 0; n < b; n++)
                    if (n in f) {
                        var g = f[n];
                        d.call(void 0, g, n, a) && (c[e++] = g)
                    }
                return c
            };
            var w = {};
            var B = function(a, d) {
                if (null === d) return !1;
                if ("contains" in a && 1 == d.nodeType) return a.contains(d);
                if ("compareDocumentPosition" in a) return a == d || !!(a.compareDocumentPosition(d) & 16);
                for (; d && a != d;) d = d.parentNode;
                return d == a
            };
            var C = function(a, d) {
                    return function(b) {
                        b || (b = window.event);
                        return d.call(a, b)
                    }
                },
                D = function(a) {
                    a = a.target || a.srcElement;
                    !a.getAttribute && a.parentNode && (a = a.parentNode);
                    return a
                },
                E = "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
                aa = "undefined" != typeof navigator && !/Opera/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent),
                ba = {
                    A: 1,
                    INPUT: 1,
                    TEXTAREA: 1,
                    SELECT: 1,
                    BUTTON: 1
                },
                ca = function() {
                    this._mouseEventsPrevented = !0
                },
                F = {
                    A: 13,
                    BUTTON: 0,
                    CHECKBOX: 32,
                    COMBOBOX: 13,
                    GRIDCELL: 13,
                    LINK: 13,
                    LISTBOX: 13,
                    MENU: 0,
                    MENUBAR: 0,
                    MENUITEM: 0,
                    MENUITEMCHECKBOX: 0,
                    MENUITEMRADIO: 0,
                    OPTION: 0,
                    RADIO: 32,
                    RADIOGROUP: 32,
                    RESET: 0,
                    SUBMIT: 0,
                    TAB: 0,
                    TREE: 13,
                    TREEITEM: 13
                },
                G = function(a) {
                    return (a.getAttribute("type") || a.tagName).toUpperCase() in da
                },
                H = function(a) {
                    return (a.getAttribute("type") || a.tagName).toUpperCase() in ea
                },
                da = {
                    CHECKBOX: !0,
                    OPTION: !0,
                    RADIO: !0
                },
                ea = {
                    COLOR: !0,
                    DATE: !0,
                    DATETIME: !0,
                    "DATETIME-LOCAL": !0,
                    EMAIL: !0,
                    MONTH: !0,
                    NUMBER: !0,
                    PASSWORD: !0,
                    RANGE: !0,
                    SEARCH: !0,
                    TEL: !0,
                    TEXT: !0,
                    TEXTAREA: !0,
                    TIME: !0,
                    URL: !0,
                    WEEK: !0
                },
                fa = {
                    A: !0,
                    AREA: !0,
                    BUTTON: !0,
                    DIALOG: !0,
                    IMG: !0,
                    INPUT: !0,
                    LINK: !0,
                    MENU: !0,
                    OPTGROUP: !0,
                    OPTION: !0,
                    PROGRESS: !0,
                    SELECT: !0,
                    TEXTAREA: !0
                };
            var I = function() {
                    this.i = this.g = null
                },
                K = function(a, d) {
                    var b = J;
                    b.g = a;
                    b.i = d;
                    return b
                };
            I.prototype.h = function() {
                var a = this.g;
                this.g && this.g != this.i ? this.g = this.g.__owner || this.g.parentNode : this.g = null;
                return a
            };
            var L = function() {
                this.j = [];
                this.g = 0;
                this.i = null;
                this.l = !1
            };
            L.prototype.h = function() {
                if (this.l) return J.h();
                if (this.g != this.j.length) {
                    var a = this.j[this.g];
                    this.g++;
                    a != this.i && a && a.__owner && (this.l = !0, K(a.__owner, this.i));
                    return a
                }
                return null
            };
            var J = new I,
                M = new L;
            var P = function() {
                    this.v = [];
                    this.g = [];
                    this.h = [];
                    this.l = {};
                    this.j = null;
                    this.i = [];
                    this.B = l;
                    O(this, "_custom")
                },
                ha = "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent),
                Q = String.prototype.trim ? function(a) {
                    return a.trim()
                } : function(a) {
                    return a.replace(/^\s+/, "").replace(/\s+$/, "")
                },
                ia = /\s*;\s*/,
                ma = function(a, d) {
                    return function(b) {
                        var c = d;
                        if ("_custom" == c) {
                            c = b.detail;
                            if (!c || !c._type) return;
                            c = c._type
                        }
                        if ("click" == c && (E && b.metaKey || !E && b.ctrlKey || 2 == b.which || null == b.which && 4 == b.button ||
                                b.shiftKey)) c = "clickmod";
                        else {
                            var e = b.which || b.keyCode || b.key;
                            aa && 3 == e && (e = 13);
                            if (13 != e && 32 != e) e = !1;
                            else {
                                var f = D(b),
                                    n = (f.getAttribute("role") || f.type || f.tagName).toUpperCase(),
                                    g;
                                (g = "keydown" != b.type) || ("getAttribute" in f ? (g = (f.getAttribute("role") || f.tagName).toUpperCase(), g = !H(f) && ("COMBOBOX" != g || "INPUT" != g) && !f.isContentEditable) : g = !1, g = !g);
                                (g = g || b.ctrlKey || b.shiftKey || b.altKey || b.metaKey || G(f) && 32 == e) || ((g = f.tagName in ba) || (g = f.getAttributeNode("tabindex"), g = null != g && g.specified), g = !(g && !f.disabled));
                                g ? e = !1 : (f = "INPUT" != f.tagName.toUpperCase() || f.type, g = !(n in F) && 13 == e, e = (0 == F[n] % e || g) && !!f)
                            }
                            e && (c = "clickkey")
                        }
                        n = b.srcElement || b.target;
                        e = R(c, b, n, "", null);
                        b.path ? (M.j = b.path, M.g = 0, M.i = this, M.l = !1, f = M) : f = K(n, this);
                        for (; g = f.h();) {
                            var m = g;
                            var h = m;
                            g = c;
                            var q = h.__jsaction;
                            if (!q) {
                                var u = null;
                                "getAttribute" in h && (u = h.getAttribute("jsaction"));
                                if (u) {
                                    q = w[u];
                                    if (!q) {
                                        q = {};
                                        for (var x = u.split(ia), y = 0, ja = x ? x.length : 0; y < ja; y++) {
                                            var r = x[y];
                                            if (r) {
                                                var z = r.indexOf(":"),
                                                    N = -1 != z,
                                                    ka = N ? Q(r.substr(0, z)) : "click";
                                                r = N ? Q(r.substr(z +
                                                    1)) : r;
                                                q[ka] = r
                                            }
                                        }
                                        w[u] = q
                                    }
                                    h.__jsaction = q
                                } else q = la, h.__jsaction = q
                            }
                            "clickkey" == g ? g = "click" : "click" != g || q.click || (g = "clickonly");
                            h = {
                                o: g,
                                action: q[g] || "",
                                event: null,
                                w: !1
                            };
                            e = R(h.o, h.event || b, n, h.action || "", m, e.timeStamp);
                            if (h.w || h.action) break
                        }
                        e && "touchend" == e.eventType && (e.event._preventMouseEvents = ca);
                        if (h && h.action) {
                            if (h = "clickkey" == c) h = D(b), h = (h.type || h.tagName).toUpperCase(), (h = 32 == (b.which || b.keyCode || b.key) && "CHECKBOX" != h) || (h = D(b), n = (h.getAttribute("role") || h.tagName).toUpperCase(), h = h.tagName.toUpperCase() in
                                fa && "A" != n && !G(h) && !H(h) || "BUTTON" == n);
                            h && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                            if ("mouseenter" == c || "mouseleave" == c)
                                if (h = b.relatedTarget, !("mouseover" == b.type && "mouseenter" == c || "mouseout" == b.type && "mouseleave" == c) || h && (h === m || B(m, h))) e.action = "", e.actionElement = null;
                                else {
                                    c = {};
                                    for (var p in b) "function" !== typeof b[p] && "srcElement" !== p && "target" !== p && (c[p] = b[p]);
                                    c.type = "mouseover" == b.type ? "mouseenter" : "mouseleave";
                                    c.target = c.srcElement = m;
                                    c.bubbles = !1;
                                    e.event = c;
                                    e.targetElement = m
                                }
                        } else e.action =
                            "", e.actionElement = null;
                        m = e;
                        a.j && (p = R(m.eventType, m.event, m.targetElement, m.action, m.actionElement, m.timeStamp), "clickonly" == p.eventType && (p.eventType = "click"), a.j(p, !0));
                        if (m.actionElement) {
                            "A" != m.actionElement.tagName || "click" != m.eventType && "clickmod" != m.eventType || null == a.j || (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                            if (a.j) a.j(m);
                            else {
                                a.B(m);
                                if ((p = k.document) && !p.createEvent && p.createEventObject) try {
                                    var A = p.createEventObject(b)
                                } catch (qa) {
                                    A = b
                                } else A = b;
                                m.event = A;
                                a.i.push(m)
                            }
                            if ("touchend" ==
                                m.event.type && m.event._mouseEventsPrevented) {
                                b = m.event;
                                for (var ra in b);
                                t()
                            }
                        }
                    }
                },
                R = function(a, d, b, c, e, f) {
                    return {
                        eventType: a,
                        event: d,
                        targetElement: b,
                        action: c,
                        actionElement: e,
                        timeStamp: f || t()
                    }
                },
                la = {},
                na = function(a, d) {
                    return function(b) {
                        var c = a,
                            e = d,
                            f = !1;
                        "mouseenter" == c ? c = "mouseover" : "mouseleave" == c && (c = "mouseout");
                        if (b.addEventListener) {
                            if ("focus" == c || "blur" == c || "error" == c || "load" == c) f = !0;
                            b.addEventListener(c, e, f)
                        } else b.attachEvent && ("focus" == c ? c = "focusin" : "blur" == c && (c = "focusout"), e = C(b, e), b.attachEvent("on" +
                            c, e));
                        return {
                            o: c,
                            m: e,
                            capture: f
                        }
                    }
                },
                oa = function(a, d) {
                    a.i && (a.i = v(a.i, function(a) {
                        return a.event !== d
                    }))
                },
                O = function(a, d) {
                    if (!a.l.hasOwnProperty(d)) {
                        var b = ma(a, d),
                            c = na(d, b);
                        a.l[d] = b;
                        a.v.push(c);
                        for (b = 0; b < a.g.length; ++b) {
                            var e = a.g[b];
                            e.h.push(c.call(null, e.g))
                        }
                        "click" == d && O(a, "keydown")
                    }
                };
            P.prototype.m = function(a) {
                return this.l[a]
            };
            var V = function(a, d) {
                    var b = new pa(d),
                        c;
                    a: {
                        for (c = 0; c < a.g.length; c++)
                            if (S(a.g[c], d)) {
                                c = !0;
                                break a
                            }
                        c = !1
                    }
                    if (c) return a.h.push(b), b;
                    T(a, b);
                    a.g.push(b);
                    U(a);
                    return b
                },
                U = function(a) {
                    for (var d = a.h.concat(a.g), b = [], c = [], e = 0; e < a.g.length; ++e) {
                        var f = a.g[e];
                        W(f, d) ? (b.push(f), X(f)) : c.push(f)
                    }
                    for (e = 0; e < a.h.length; ++e) f = a.h[e], W(f, d) ? b.push(f) : (c.push(f), T(a, f));
                    a.g = c;
                    a.h = b
                },
                T = function(a, d) {
                    var b = d.g;
                    ha && (b.style.cursor = "pointer");
                    for (b = 0; b < a.v.length; ++b) d.h.push(a.v[b].call(null, d.g))
                },
                Y = function(a, d) {
                    a.j = d;
                    a.i &&
                        (0 < a.i.length && d(a.i), a.i = null)
                },
                pa = function(a) {
                    this.g = a;
                    this.h = []
                },
                S = function(a, d) {
                    for (var b = a.g, c = d; b != c && c.parentNode;) c = c.parentNode;
                    return b == c
                },
                W = function(a, d) {
                    for (var b = 0; b < d.length; ++b)
                        if (d[b].g != a.g && S(d[b], a.g)) return !0;
                    return !1
                },
                X = function(a) {
                    for (var d = 0; d < a.h.length; ++d) {
                        var b = a.g,
                            c = a.h[d];
                        b.removeEventListener ? b.removeEventListener(c.o, c.m, c.capture) : b.detachEvent && b.detachEvent("on" + c.o, c.m)
                    }
                    a.h = []
                };
            var Z = new P;
            V(Z, window.document.documentElement);
            O(Z, "click");
            O(Z, "focus");
            O(Z, "focusin");
            O(Z, "blur");
            O(Z, "focusout");
            O(Z, "error");
            O(Z, "load");
            O(Z, "change");
            O(Z, "dblclick");
            O(Z, "input");
            O(Z, "keyup");
            O(Z, "keydown");
            O(Z, "keypress");
            O(Z, "mousedown");
            O(Z, "mouseenter");
            O(Z, "mouseleave");
            O(Z, "mouseout");
            O(Z, "mouseover");
            O(Z, "mouseup");
            O(Z, "paste");
            O(Z, "touchstart");
            O(Z, "touchend");
            O(Z, "touchcancel");
            O(Z, "speech");
            (function(a) {
                google.jsad = function(d) {
                    Y(a, d)
                };
                google.jsaac = function(d) {
                    return V(a, d)
                };
                google.jsarc = function(d) {
                    X(d);
                    for (var b = !1, c = 0; c < a.g.length; ++c)
                        if (a.g[c] === d) {
                            a.g.splice(c, 1);
                            b = !0;
                            break
                        }
                    if (!b)
                        for (c = 0; c < a.h.length; ++c)
                            if (a.h[c] === d) {
                                a.h.splice(c, 1);
                                break
                            }
                    U(a)
                };
                google.jsace = function(d) {
                    oa(a, d)
                }
            })(Z);
            window.gws_wizbind = function(a) {
                return {
                    trigger: function(d) {
                        var b = a.m(d.type);
                        b || (O(a, d.type), b = a.m(d.type));
                        var c = d.target || d.srcElement;
                        b && b.call(c.ownerDocument.documentElement, d)
                    },
                    bind: function(d) {
                        Y(a, d)
                    }
                }
            }(Z);
        }).call(this);
        (function() {
            var b = [];
            google.jsc = {
                xx: b,
                x: function(a) {
                    b.push(a)
                },
                mm: [],
                m: function(a) {
                    google.jsc.mm = a
                }
            };
        }).call(this);
        google.arwt = function(a) {
            a.href = document.getElementById(a.id.substring(1)).href;
            return !0
        };
    </script>
    <style>
        [dir='ltr'],
        [dir='rtl'] {
            unicode-bidi: isolate;
            unicode-bidi: isolate
        }
        
        bdo[dir='ltr'],
        bdo[dir='rtl'] {
            unicode-bidi: bidi-override;
            unicode-bidi: isolate-override;
            unicode-bidi: isolate-override
        }
        
        #logo {
            display: block;
            overflow: hidden;
            position: relative
        }
        
        #logo img {
            border: 0;
        }
        
        #logo span {
            background: url(/images/nav_logo242.png) no-repeat;
            cursor: pointer;
            overflow: hidden
        }
        
        #logocont {
            z-index: 1;
            padding-right: 13px;
            padding-left: 10px;
            margin-top: -2px;
            padding-top: 7px
        }
        
        #logocont.ddl {
            padding-top: 3px
        }
        
        .big #logocont {
            padding-right: 13px;
            padding-left: 12px
        }
        
        .sbibod {
            background-color: #fff;
            height: 44px;
            vertical-align: top;
            border: none;
            border-radius: 2px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
            transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
        }
        
        .lst {
            border: 0;
            margin-top: 5px;
            margin-bottom: 0
        }
        
        .lst:focus {
            outline: none
        }
        
        #lst-ib {
            color: #000
        }
        
        .gsfi,
        .lst {
            font: 16px arial, sans-serif;
            line-height: 34px;
            height: 34px !important;
        }
        
        .lst-c {
            overflow: hidden
        }
        
        #gs_st0 {
            line-height: 44px;
            padding: 0 8px;
            margin-top: -1px;
            position: static
        }
        
        .srp #gs_st0 {
            padding: 0 8px 0 2px
        }
        
        .gsfs {
            font: 16px arial, sans-serif
        }
        
        .lsb {
            background: transparent;
            border: 0;
            font-size: 0;
            height: 30px;
            outline: 0;
            text-align: right;
            width: 100%
        }
        
        .sbico {
            display: inline-block;
            height: 24px;
            width: 24px;
            cursor: pointer;
            vertical-align: middle;
            color: #4285f4
        }
        
        .sbico-c {
            background: transparent;
            border: 0;
            float: left;
            height: 44px;
            line-height: 44px;
            margin-top: -1px;
            outline: 0;
            padding-left: 16px;
            position: relative;
            top: -1px
        }
        
        .hp .sbico-c {
            display: none
        }
        
        #sblsbb {
            text-align: center;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
            height: 44px;
            margin: 0;
            padding: 0;
        }
        
        #sbds {
            border: 0;
            margin-right: 0
        }
        
        .hp .nojsb,
        .srp .jsb {
            display: none
        }
        
        .kpbb,
        .kprb,
        .kpgb,
        .kpgrb {
            border-radius: 2px;
            border-radius: 2px;
            color: #fff
        }
        
        .kpbb:hover,
        .kprb:hover,
        .kpgb:hover,
        .kpgrb:hover {
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            color: #fff
        }
        
        .kpbb:active,
        .kprb:active,
        .kpgb:active,
        .kpgrb:active {
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3)
        }
        
        .kpbb {
            background-color: #4d90fe;
            background-image: linear-gradient(top, #4d90fe, #4787ed);
            background-image: linear-gradient(top, #4d90fe, #4787ed);
            border: 1px solid #3079ed
        }
        
        .kpbb:hover {
            background-color: #357ae8;
            background-image: linear-gradient(top, #4d90fe, #357ae8);
            background-image: linear-gradient(top, #4d90fe, #357ae8);
            border: 1px solid #2f5bb7
        }
        
        a.kpbb:link,
        a.kpbb:visited {
            color: #fff
        }
        
        .kprb {
            background-color: #dd4b39;
            background-image: linear-gradient(top, #dd4b39, #d14836);
            background-image: linear-gradient(top, #dd4b39, #d14836);
            border: 1px solid #dd4b39
        }
        
        .kprb:hover {
            background-color: #c53727;
            background-image: linear-gradient(top, #dd4b39, #c53727);
            background-image: linear-gradient(top, #dd4b39, #c53727);
            border: 1px solid #b0281a;
            border-bottom-color: #af301f
        }
        
        .kprb:active {
            background-color: #b0281a;
            background-image: linear-gradient(top, #dd4b39, #b0281a);
            background-image: linear-gradient(top, #dd4b39, #b0281a)
        }
        
        .kpgb {
            background-color: #3d9400;
            background-image: linear-gradient(top, #3d9400, #398a00);
            background-image: linear-gradient(top, #3d9400, #398a00);
            border: 1px solid #29691d
        }
        
        .kpgb:hover {
            background-color: #368200;
            background-image: linear-gradient(top, #3d9400, #368200);
            background-image: linear-gradient(top, #3d9400, #368200);
            border: 1px solid #2d6200
        }
        
        .kpgrb {
            background-color: #f5f5f5;
            background-image: linear-gradient(top, #f5f5f5, #f1f1f1);
            background-image: linear-gradient(top, #f5f5f5, #f1f1f1);
            border: 1px solid #dcdcdc;
            color: #555
        }
        
        .kpgrb:hover {
            background-color: #f8f8f8;
            background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
            background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
            border: 1px solid #dcdcdc;
            color: #333
        }
        
        a.kpgrb:link,
        a.kpgrb:visited {
            color: #555
        }
        
        #sfopt {
            display: inline-block;
            float: left;
            line-height: normal
        }
        
        .lsd {
            font-size: 11px;
            position: absolute;
            top: 3px;
            right: 16px
        }
        
        .sbsb_g {
            margin: 3px 0 4px
        }
        
        .jhp input[type="submit"],
        .sbdd_a input,
        .gbqfba {
            background-image: -moz-linear-gradient(top, #f5f5f5, #f1f1f1);
            -moz-border-radius: 2px;
            -moz-user-select: none;
            background-color: #f2f2f2;
            border: 1px solid #f2f2f2;
            border-radius: 2px;
            color: #757575;
            cursor: default;
            font-family: HelveticaNeue, 'Noto Naskh Arabic UI', Arial, sans-serif;
            font-size: 13px;
            font-weight: bold;
            margin: 11px 4px;
            min-width: 54px;
            padding: 0 16px;
            text-align: center
        }
        
        .gbqfba.gbqfba-hvr {
            font-size: 13px
        }
        
        .jhp input[type="submit"],
        .gbqfba {
            height: 36px;
            line-height: 27px
        }
        
        .sbdd_a input {
            height: 100%
        }
        
        .jhp input[type="submit"]:hover,
        .sbdd_a input:hover,
        .gbqfba:hover {
            background-image: -moz-linear-gradient(top, #f8f8f8, #f1f1f1);
            -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            background-color: #f8f8f8;
            background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
            background-image: -o-linear-gradient(top, #f8f8f8, #f1f1f1);
            border: 1px solid #c6c6c6;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            color: #222
        }
        
        .jhp input[type="submit"]:focus,
        .sbdd_a input:focus {
            border: 1px solid #4d90fe;
            outline: none
        }
        
        .sbdd_a input {
            margin: 6px;
            height: 27px
        }
        
        span.lsbb,
        .lsb input {
            -moz-transition: all 0.18s
        }
        
        @media only screen and (max-height:650px) {
            span.lsbb {
                height: 17px
            }
        }
        
        .tsf {
            background: none
        }
        
        .tsf-p {
            position: relative;
        }
        
        .logocont {
            right: 0;
            position: absolute;
        }
        
        .sfibbbc {
            padding-bottom: 2px;
            padding-top: 3px;
            margin-top: -3px;
            width: 632px
        }
        
        .sbtc {
            position: relative
        }
        
        .sbibtd {
            line-height: 0;
            overflow: visible;
            white-space: nowrap
        }
        
        .sbibps {
            padding: 0 16px 0 9px;
            width: 466px;
        }
        
        .big .sbibps {
            width: 550px
        }
        
        .sfopt {
            height: 28px;
            position: relative
        }
        
        #sform {
            height: 65px
        }
        
        .hp .sfsbc {
            display: none
        }
        
        #searchform {
            width: 100%
        }
        
        .hp #searchform {
            position: absolute;
            top: 311px
        }
        
        .srp #searchform {
            position: absolute;
            top: 20px
        }
        
        #sfdiv {
            max-width: 484px
        }
        
        .hp .big #sfdiv {
            max-width: 584px;
            margin: -1px 0px 1px
        }
        
        .srp #sfdiv {
            max-width: none;
            overflow: hidden
        }
        
        .srp #tsf {
            position: relative;
        }
        
        .hp .tsf-p {
            padding-top: 8px
        }
        
        .sfsbc {
            display: inline-block;
            float: left;
            margin-left: 1px;
            vertical-align: top;
            width: 42px;
            margin-left: 0
        }
        
        .sfbg {
            background: #fafafa;
            height: 69px;
            left: 0;
            position: absolute;
            width: 100%
        }
        
        .sfbgg {
            background-color: #fafafa;
            height: 65px
        }
        
        #pocs {
            background: #fff1a8;
            color: #000;
            font-size: 10pt;
            margin: 0;
            padding: 5px 7px
        }
        
        #pocs.sft {
            background: transparent;
            color: #777
        }
        
        #pocs a {
            color: #11c
        }
        
        #pocs.sft a {
            color: #36c
        }
        
        #pocs>div {
            margin: 0;
            padding: 0
        }
        
        #cnt {
            padding-top: 20px;
        }
        
        #subform_ctrl {
            min-height: 0px
        }
        
        @-moz-keyframes gb__a {
            0% {
                opacity: 0
            }
            50% {
                opacity: 1
            }
        }
        
        @keyframes gb__a {
            0% {
                opacity: 0
            }
            50% {
                opacity: 1
            }
        }
        
        .gb_8 .gb_b {
            background-position: -132px -38px;
            opacity: .55
        }
        
        .gb_9 .gb_8 .gb_b {
            background-position: -132px -38px
        }
        
        .gb_S .gb_8 .gb_b {
            background-position: -463px -35px;
            opacity: 1
        }
        
        .gb_aa.gb_ba {
            min-height: 196px;
            overflow-y: auto;
            width: 320px
        }
        
        .gb_ca {
            -moz-transition: height .2s ease-in-out;
            transition: height .2s ease-in-out
        }
        
        .gb_da {
            background: #fff;
            margin: 0;
            min-height: 100px;
            padding: 28px;
            padding-left: 27px;
            text-align: right;
            white-space: normal;
            width: 265px
        }
        
        .gb_ea {
            background: #f5f5f5;
            cursor: pointer;
            height: 40px;
            overflow: hidden
        }
        
        .gb_fa {
            position: relative
        }
        
        .gb_ea {
            display: block;
            line-height: 40px;
            text-align: center;
            width: 320px
        }
        
        .gb_fa {
            display: block;
            line-height: 40px;
            text-align: center
        }
        
        .gb_fa.gb_ga {
            line-height: 0
        }
        
        .gb_ea,
        .gb_ea:visited,
        .gb_ea:active,
        .gb_fa,
        .gb_fa:visited {
            color: rgba(0, 0, 0, 0.87);
            text-decoration: none
        }
        
        .gb_fa:active {
            color: rgba(0, 0, 0, 0.87)
        }
        
        #gb a.gb_ea,
        #gb a.gb_ea:visited,
        #gb a.gb_ea:active,
        #gb a.gb_fa,
        #gb a.gb_fa:visited {
            color: rgba(0, 0, 0, 0.87);
            text-decoration: none
        }
        
        #gb a.gb_fa:active {
            color: rgba(0, 0, 0, 0.87)
        }
        
        .gb_fa,
        .gb_da {
            display: none
        }
        
        .gb_6,
        .gb_6+.gb_fa,
        .gb_ha .gb_fa,
        .gb_ha .gb_da {
            display: block
        }
        
        .gb_fa:hover,
        .gb_fa:active,
        #gb a.gb_fa:hover,
        #gb a.gb_fa:active {
            text-decoration: underline
        }
        
        .gb_fa {
            border-bottom: 1px solid #ebebeb;
            right: 28px;
            width: 264px
        }
        
        .gb_ha .gb_ea {
            display: none
        }
        
        .gb_fa:last-child {
            border-bottom-width: 0
        }
        
        .gb_ia .gb_O {
            display: initial
        }
        
        .gb_ia.gb_ja {
            height: 100px;
            text-align: center
        }
        
        .gb_ia.gb_ja img {
            padding: 34px 0;
            height: 32px;
            width: 32px
        }
        
        .gb_ia .gb_W+img {
            border: 0;
            margin: 8px;
            height: 48px;
            width: 48px
        }
        
        .gb_ia div.gb_ka {
            background: #ffa;
            -moz-border-radius: 5px;
            border-radius: 5px;
            padding: 5px;
            text-align: center
        }
        
        .gb_ia.gb_la,
        .gb_ia.gb_ma {
            padding-bottom: 0
        }
        
        .gb_ia.gb_na,
        .gb_ia.gb_ma {
            padding-top: 0
        }
        
        .gb_ia.gb_ma a,
        .gb_ia.gb_na a {
            top: 0
        }
        
        .gb_oa .gb_ea {
            margin-top: 0;
            position: static
        }
        
        .gb_pa {
            display: inline-block
        }
        
        .gb_qa {
            margin: -12px 28px 28px;
            position: relative;
            width: 264px;
            -moz-border-radius: 2px;
            border-radius: 2px;
            -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1);
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1)
        }
        
        .gb_Z {
            background-image: url('https://ssl.gstatic.com/gb/images/p1_f965e10d.png');
            background-size: 64px 2341px;
            display: inline-block;
            margin: 8px;
            vertical-align: middle;
            height: 64px;
            width: 64px
        }
        
        .gb_ra {
            color: #262626;
            display: inline-block;
            font: 13px/18px Arial, sans-serif;
            margin-left: 80px;
            padding: 10px 0 10px 10px;
            vertical-align: middle;
            white-space: normal
        }
        
        .gb_sa {
            font: 16px/24px Arial, sans-serif
        }
        
        .gb_ta,
        #gb#gb .gb_ta {
            color: #427fed;
            text-decoration: none
        }
        
        .gb_ta:hover,
        #gb#gb .gb_ta:hover {
            text-decoration: underline
        }
        
        .gb_ua .gb_da {
            position: relative
        }
        
        .gb_ua .gb_O {
            position: absolute;
            top: 28px;
            right: 28px
        }
        
        .gb_ea.gb_va {
            display: none;
            height: 0
        }
        
        .gb_9a {
            background-size: 32px 32px;
            -moz-border-radius: 50%;
            border-radius: 50%;
            display: block;
            margin: -1px;
            overflow: hidden;
            position: relative;
            height: 32px;
            width: 32px;
            z-index: 0
        }
        
        @media (min-resolution:1.25dppx),
        (-o-min-device-pixel-ratio:5/4),
        (-webkit-min-device-pixel-ratio:1.25),
        (min-device-pixel-ratio:1.25) {
            .gb_9a::before {
                display: inline-block;
                -moz-transform: scale(.5);
                transform: scale(.5);
                -moz-transform-origin: right 0;
                transform-origin: right 0
            }
            .gb_Bb::before {
                display: inline-block;
                -moz-transform: scale(.5);
                transform: scale(.5);
                -moz-transform-origin: right 0;
                transform-origin: right 0
            }
        }
        
        .gb_9a:hover,
        .gb_9a:focus {
            -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, .15);
            box-shadow: 0 1px 0 rgba(0, 0, 0, .15)
        }
        
        .gb_9a:active {
            -moz-box-shadow: inset 0 2px 0 rgba(0, 0, 0, .15);
            box-shadow: inset 0 2px 0 rgba(0, 0, 0, .15)
        }
        
        .gb_9a:active::after {
            background: rgba(0, 0, 0, .1);
            -moz-border-radius: 50%;
            border-radius: 50%;
            content: '';
            display: block;
            height: 100%
        }
        
        .gb_ab {
            cursor: pointer;
            line-height: 30px;
            min-width: 30px;
            opacity: .75;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis
        }
        
        .gb_b.gb_ab {
            width: auto
        }
        
        .gb_ab:hover,
        .gb_ab:focus {
            opacity: .85
        }
        
        .gb_bb .gb_ab,
        .gb_bb .gb_cb {
            line-height: 26px
        }
        
        #gb#gb.gb_bb a.gb_ab,
        .gb_bb .gb_cb {
            font-size: 11px;
            height: auto
        }
        
        .gb_db {
            border-top: 4px solid #000;
            border-right: 4px dashed transparent;
            border-left: 4px dashed transparent;
            display: inline-block;
            margin-right: 6px;
            opacity: .75;
            vertical-align: middle
        }
        
        .gb_eb:hover .gb_db {
            opacity: .85
        }
        
        .gb_Ra>.gb_fb {
            padding: 3px 4px 3px 3px
        }
        
        .gb_S .gb_ab,
        .gb_S .gb_db {
            opacity: 1
        }
        
        #gb#gb.gb_S.gb_S a.gb_ab,
        #gb#gb .gb_S.gb_S a.gb_ab {
            color: #fff
        }
        
        .gb_S.gb_S .gb_db {
            border-top-color: #fff;
            opacity: 1
        }
        
        .gb_9 .gb_9a:hover,
        .gb_S .gb_9a:hover,
        .gb_9 .gb_9a:focus,
        .gb_S .gb_9a:focus {
            -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, .15), 0 1px 2px rgba(0, 0, 0, .2);
            box-shadow: 0 1px 0 rgba(0, 0, 0, .15), 0 1px 2px rgba(0, 0, 0, .2)
        }
        
        .gb_gb .gb_fb,
        .gb_hb .gb_fb {
            position: absolute;
            left: 1px
        }
        
        .gb_fb.gb_R,
        .gb_ib.gb_R,
        .gb_eb.gb_R {
            flex: 0 1 auto;
            flex: 0 1 main-size
        }
        
        .gb_jb.gb_kb .gb_ab {
            width: 30px!important
        }
        
        .gb_lb.gb_8a {
            display: none
        }
        
        @-moz-keyframes progressmove {
            0% {
                margin-right: -100%
            }
            to {
                margin-right: 100%
            }
        }
        
        @keyframes progressmove {
            0% {
                margin-right: -100%
            }
            to {
                margin-right: 100%
            }
        }
        
        .gb_mb.gb_7a {
            display: none
        }
        
        .gb_mb {
            background-color: #ccc;
            height: 3px;
            overflow: hidden
        }
        
        .gb_nb {
            background-color: #f4b400;
            height: 100%;
            width: 50%;
            -moz-animation: progressmove 1.5s linear 0s infinite;
            animation: progressmove 1.5s linear 0s infinite
        }
        
        .gb_pb {
            height: 40px;
            position: absolute;
            left: -5px;
            top: -5px;
            width: 40px
        }
        
        .gb_qb .gb_pb,
        .gb_rb .gb_pb {
            left: 0;
            top: 0
        }
        
        .gb_ab~.gb_sb,
        .gb_ab~.gb_tb {
            right: auto;
            left: 6.5px
        }
        
        .gb_ub {
            outline: none;
            transform: translateZ(0)
        }
        
        .gb_ub.gb_Ua {
            width: 320px
        }
        
        .gb_vb,
        #gb a.gb_vb.gb_vb,
        .gb_wb a,
        #gb .gb_wb.gb_wb a {
            color: #36c;
            text-decoration: none
        }
        
        .gb_vb:active,
        #gb a.gb_vb:active,
        .gb_vb:hover,
        #gb a.gb_vb:hover,
        .gb_wb a:active,
        #gb .gb_wb a:active,
        .gb_wb a:hover,
        #gb .gb_wb a:hover {
            text-decoration: underline
        }
        
        .gb_xb {
            margin: 20px;
            white-space: nowrap
        }
        
        .gb_yb,
        .gb_zb {
            display: inline-block;
            vertical-align: top
        }
        
        .gb_ub.gb_Ua .gb_zb {
            max-width: 164px
        }
        
        .gb_yb {
            margin-left: 20px;
            position: relative
        }
        
        .gb_Ab {
            -moz-border-radius: 50%;
            border-radius: 50%;
            overflow: hidden
        }
        
        .gb_Bb {
            background-size: 96px 96px;
            border: none;
            vertical-align: top;
            height: 96px;
            width: 96px
        }
        
        .gb_lb {
            background: rgba(78, 144, 254, .7);
            bottom: 0;
            color: #fff;
            font-size: 9px;
            font-weight: bold;
            right: 0;
            line-height: 9px;
            position: absolute;
            padding: 7px 0;
            text-align: center;
            width: 96px
        }
        
        .gb_Ab .gb_lb {
            background: rgba(0, 0, 0, .54)
        }
        
        .gb_Cb {
            font-weight: bold;
            margin: -4px 0 1px 0;
            text-overflow: ellipsis;
            overflow: hidden
        }
        
        .gb_Eb {
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden
        }
        
        .gb_wb {
            color: #ccc;
            margin: 6px 0
        }
        
        .gb_ub.gb_Ua .gb_wb a {
            display: block;
            line-height: 24px;
            margin: 0
        }
        
        .gb_ub.gb_Ua .gb_wb a:first-child:last-child {
            line-height: normal
        }
        
        .gb_ub:not(.gb_Ua) .gb_wb a {
            margin: 0 10px
        }
        
        .gb_ub:not(.gb_Ua) .gb_wb a:first-child {
            margin-right: 0
        }
        
        .gb_ub:not(.gb_Ua) .gb_wb a:last-child {
            margin-left: 0
        }
        
        .gb_zb .gb_Fb {
            background: #4d90fe;
            border-color: #3079ed;
            font-weight: bold;
            margin: 10px 0 0 0;
            color: #fff
        }
        
        #gb .gb_zb a.gb_Fb.gb_Fb {
            color: #fff
        }
        
        .gb_zb .gb_Fb:hover {
            background: #357ae8;
            border-color: #2f5bb7
        }
        
        .gb_Hb.gb_ja {
            border-top: none
        }
        
        .gb_Hb {
            background: #f5f5f5;
            border-top: 1px solid #ccc;
            border-color: rgba(0, 0, 0, .2);
            padding: 10px 0;
            width: 100%;
            display: table
        }
        
        .gb_Hb .gb_Fb {
            margin: 0 20px;
            white-space: nowrap
        }
        
        .gb_Hb>div {
            display: table-cell;
            text-align: left
        }
        
        .gb_Hb>div:first-child {
            text-align: right
        }
        
        .gb_Hb .gb_Ib {
            display: block;
            text-align: center
        }
        
        .gb_Jb .gb_sb {
            border-bottom-color: #fef9db
        }
        
        .gb_Kb {
            background: #fef9db;
            font-size: 11px;
            padding: 10px 20px;
            white-space: normal
        }
        
        .gb_Kb b,
        .gb_vb {
            white-space: nowrap
        }
        
        .gb_Nb {
            background: #f5f5f5;
            border-top: 1px solid #ccc;
            border-top-color: rgba(0, 0, 0, .2);
            max-height: 230px;
            overflow: auto
        }
        
        .gb_Nb.gb_Ua {
            max-height: 170px
        }
        
        .gb_Nb.gb_Ua.gb_Ob {
            max-height: 124px
        }
        
        .gb_Pb {
            border-top: 1px solid #ccc;
            border-top-color: rgba(0, 0, 0, .2);
            display: block;
            outline-offset: -2px;
            padding: 10px 20px;
            position: relative;
            white-space: nowrap
        }
        
        .gb_Qb .gb_Pb:focus .gb_Rb {
            outline: 1px dotted #fff
        }
        
        .gb_Pb:hover {
            background: #eee
        }
        
        .gb_Pb[selected="true"] {
            overflow: hidden
        }
        
        .gb_Pb[selected="true"]>.gb_Sb {
            background-color: rgba(117, 117, 117, .9)
        }
        
        .gb_Pb[selected="true"]>.gb_Tb {
            display: block;
            position: absolute;
            z-index: 2
        }
        
        .gb_Tb::-moz-focus-inner {
            border: 0
        }
        
        .gb_Tb {
            background-color: transparent;
            border: none;
            color: #fff;
            display: none;
            font-family: Roboto, Arial, sans-serif;
            font-weight: 400;
            font-size: 14px;
            height: 36px;
            min-width: 86px;
            text-align: center;
            top: 16px;
            width: auto
        }
        
        .gb_Pb[selected="true"]>.gb_Tb:focus {
            background-color: rgba(0, 0, 0, .24);
            -moz-border-radius: 2px;
            border-radius: 2px;
            outline: 0
        }
        
        .gb_Pb[selected="true"]>.gb_Tb:hover,
        .gb_Pb[selected="true"]>.gb_Tb:focus:hover {
            background-color: #565656;
            -moz-border-radius: 2px;
            border-radius: 2px
        }
        
        .gb_Pb[selected="true"]>.gb_Tb:active {
            -moz-border-radius: 2px;
            border-radius: 2px;
            background-color: #212121
        }
        
        .gb_Ub {
            right: 0;
            margin-right: 5%
        }
        
        .gb_Vb {
            margin-left: 5%;
            left: 0
        }
        
        .gb_Pb:first-child,
        .gb_Wb:first-child+.gb_Pb {
            border-top: 0
        }
        
        .gb_Wb {
            display: none
        }
        
        .gb_Xb {
            cursor: default
        }
        
        .gb_Xb:hover {
            background: transparent
        }
        
        .gb_Zb {
            border: none;
            vertical-align: top;
            height: 48px;
            width: 48px
        }
        
        .gb_Rb {
            display: inline-block;
            margin: 6px 10px 0 0
        }
        
        .gb_ub.gb_Ua .gb_Rb {
            max-width: 222px
        }
        
        .gb_Xb .gb_Zb,
        .gb_Xb .gb_Rb {
            opacity: .4
        }
        
        .gb_0b {
            color: #000;
            text-overflow: ellipsis;
            overflow: hidden
        }
        
        .gb_Xb .gb_0b {
            color: #666
        }
        
        .gb_1b {
            color: #666;
            text-overflow: ellipsis;
            overflow: hidden
        }
        
        .gb_2b {
            color: #666;
            font-style: italic
        }
        
        .gb_Sb {
            background-color: transparent;
            height: 100%;
            right: 0;
            position: absolute;
            text-align: center;
            top: 0;
            width: 100%;
            z-index: 1
        }
        
        .gb_Tb:hover {
            background-color: rgba(100, 100, 100, 0.4)
        }
        
        .gb_3b {
            background: #f5f5f5;
            border-top: 1px solid #ccc;
            border-top-color: rgba(0, 0, 0, .2);
            display: block;
            padding: 10px 20px
        }
        
        .gb_4b {
            background-position: -244px 0;
            display: inline-block;
            margin: 1px 0;
            vertical-align: middle;
            height: 25px;
            width: 25px
        }
        
        .gb_N .gb_4b::before {
            right: -244px;
            top: 0
        }
        
        .gb_5b {
            color: #427fed;
            display: inline-block;
            padding: 0 10px 0 25px;
            vertical-align: middle;
            white-space: normal
        }
        
        .gb_3b:hover .gb_5b {
            text-decoration: underline
        }
        
        .gb_Hb .gb_Fb:hover {
            -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            border-color: #c6c6c6;
            color: #222;
            background-color: #fff;
            background-image: -moz-linear-gradient(top, #fff, #f8f8f8);
            background-image: -moz-linear-gradient(top, #fff, #f8f8f8);
            background-image: linear-gradient(top, #fff, #f8f8f8);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorStr='#ffffff', EndColorStr='#f8f8f8')
        }
        
        .gb_8c {
            display: inline-block;
            padding: 0 15px 0 0;
            vertical-align: middle
        }
        
        .gb_8c:first-child,
        #gbsfw:first-child+.gb_8c {
            padding-right: 0
        }
        
        .gb_Pc {
            position: relative
        }
        
        .gb_b {
            display: inline-block;
            outline: none;
            vertical-align: middle;
            -moz-border-radius: 2px;
            border-radius: 2px;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            height: 30px;
            width: 30px;
            color: #000;
            cursor: pointer;
            text-decoration: none
        }
        
        #gb#gb a.gb_b {
            color: #000;
            cursor: pointer;
            text-decoration: none
        }
        
        .gb_sb {
            border-color: transparent;
            border-bottom-color: #fff;
            border-style: dashed dashed solid;
            border-width: 0 8.5px 8.5px;
            display: none;
            position: absolute;
            right: 6.5px;
            top: 37px;
            z-index: 1;
            height: 0;
            width: 0;
            -moz-animation: gb__a .2s;
            animation: gb__a .2s
        }
        
        .gb_tb {
            border-color: transparent;
            border-style: dashed dashed solid;
            border-width: 0 8.5px 8.5px;
            display: none;
            position: absolute;
            right: 6.5px;
            z-index: 1;
            height: 0;
            width: 0;
            -moz-animation: gb__a .2s;
            animation: gb__a .2s;
            border-bottom-color: #ccc;
            border-bottom-color: rgba(0, 0, 0, .2);
            top: 36px
        }
        
        x:-o-prefocus,
        div.gb_tb {
            border-bottom-color: #ccc
        }
        
        .gb_aa {
            background: #fff;
            border: 1px solid #ccc;
            border-color: rgba(0, 0, 0, .2);
            color: #000;
            -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
            box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
            display: none;
            outline: none;
            overflow: hidden;
            position: absolute;
            left: 0;
            top: 44px;
            -moz-animation: gb__a .2s;
            animation: gb__a .2s;
            -moz-border-radius: 2px;
            border-radius: 2px;
            -moz-user-select: text
        }
        
        .gb_8c.gb_g .gb_sb,
        .gb_8c.gb_g .gb_tb,
        .gb_8c.gb_g .gb_aa,
        .gb_g.gb_aa {
            display: block
        }
        
        .gb_8c.gb_g.gb_Ff .gb_sb,
        .gb_8c.gb_g.gb_Ff .gb_tb {
            display: none
        }
        
        .gb_Hf {
            position: absolute;
            left: 0;
            top: 44px;
            z-index: -1
        }
        
        .gb_bb .gb_sb,
        .gb_bb .gb_tb,
        .gb_bb .gb_aa {
            margin-top: -10px
        }
        
        #gbsfw {
            min-width: 400px;
            overflow: visible
        }
        
        .gb_6b,
        #gbsfw.gb_g {
            display: block;
            outline: none
        }
        
        #gbsfw.gb_ka iframe {
            display: none
        }
        
        .gb_7b {
            padding: 118px 0;
            text-align: center
        }
        
        .gb_8b {
            background: no-repeat center 0;
            color: #aaa;
            font-size: 13px;
            line-height: 20px;
            padding-top: 76px;
            background-image: url('//ssl.gstatic.com/gb/images/a/f5cdd88b65.png')
        }
        
        .gb_8b a {
            color: #4285f4;
            text-decoration: none
        }
        
        @-moz-keyframes gb__nb {
            0% {
                -moz-transform: scale(0, 0);
                transform: scale(0, 0)
            }
            20% {
                -moz-transform: scale(1.4, 1.4);
                transform: scale(1.4, 1.4)
            }
            50% {
                -moz-transform: scale(.8, .8);
                transform: scale(.8, .8)
            }
            85% {
                -moz-transform: scale(1.1, 1.1);
                transform: scale(1.1, 1.1)
            }
            to {
                -moz-transform: scale(1.0, 1.0);
                transform: scale(1.0, 1.0)
            }
        }
        
        @keyframes gb__nb {
            0% {
                -moz-transform: scale(0, 0);
                transform: scale(0, 0)
            }
            20% {
                -moz-transform: scale(1.4, 1.4);
                transform: scale(1.4, 1.4)
            }
            50% {
                -moz-transform: scale(.8, .8);
                transform: scale(.8, .8)
            }
            85% {
                -moz-transform: scale(1.1, 1.1);
                transform: scale(1.1, 1.1)
            }
            to {
                -moz-transform: scale(1.0, 1.0);
                transform: scale(1.0, 1.0)
            }
        }
        
        .gb_Fc {
            background-position: -314px -38px;
            opacity: .55;
            height: 100%;
            width: 100%
        }
        
        .gb_b:hover .gb_Fc,
        .gb_b:focus .gb_Fc {
            opacity: .85
        }
        
        .gb_Hc .gb_Fc {
            background-position: -463px 0
        }
        
        .gb_Ic {
            background-color: #cb4437;
            -moz-border-radius: 8px;
            border-radius: 8px;
            font: bold 11px Arial;
            color: #fff;
            line-height: 16px;
            min-width: 14px;
            padding: 0 1px;
            position: absolute;
            left: 0;
            text-align: center;
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
            top: 0;
            visibility: hidden;
            z-index: 990
        }
        
        .gb_Jc .gb_Ic,
        .gb_Jc .gb_Kc,
        .gb_Jc .gb_Kc.gb_Lc {
            visibility: visible
        }
        
        .gb_Kc {
            padding: 0 2px;
            visibility: hidden
        }
        
        .gb_Mc:not(.gb_Nc) .gb_tb,
        .gb_Mc:not(.gb_Nc) .gb_sb {
            right: 10px
        }
        
        .gb_Ic.gb_Oc {
            -moz-animation: gb__nb .6s 1s both ease-in-out;
            animation: gb__nb .6s 1s both ease-in-out;
            -moz-perspective-origin: top left;
            perspective-origin: top left;
            -moz-transform: scale(1, 1);
            transform: scale(1, 1);
            -moz-transform-origin: top left;
            transform-origin: top left
        }
        
        .gb_Oc .gb_Kc {
            visibility: visible
        }
        
        .gb_9 .gb_b .gb_Fc {
            background-position: 0 0;
            opacity: .7
        }
        
        .gb_9 .gb_Hc .gb_Fc {
            background-position: -279px -38px
        }
        
        .gb_9 .gb_b:hover .gb_Fc,
        .gb_9 .gb_b:focus .gb_Fc {
            opacity: .85
        }
        
        .gb_S .gb_b .gb_Fc {
            background-position: -349px -38px;
            opacity: 1
        }
        
        .gb_S .gb_Hc .gb_Fc {
            background-position: -393px 0
        }
        
        .gb_9 .gb_Ic,
        .gb_S .gb_Ic {
            border: none
        }
        
        .gb_Mc .gb_Pc {
            font-size: 14px;
            font-weight: bold;
            top: 0;
            left: 0
        }
        
        .gb_Mc .gb_b {
            display: inline-block;
            vertical-align: middle;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            height: 30px;
            width: 30px
        }
        
        .gb_Mc .gb_sb {
            border-bottom-color: #e5e5e5
        }
        
        .gb_Qc {
            background-color: rgba(0, 0, 0, .55);
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            line-height: 20px;
            margin: 5px;
            padding: 0 2px;
            text-align: center;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            -moz-border-radius: 50%;
            border-radius: 50%;
            height: 20px;
            width: 20px
        }
        
        .gb_Qc.gb_Rc {
            background-position: -194px -21px
        }
        
        .gb_Qc.gb_Sc {
            background-position: -194px -46px
        }
        
        .gb_b:hover .gb_Qc,
        .gb_b:focus .gb_Qc {
            background-color: rgba(0, 0, 0, .85)
        }
        
        #gbsfw.gb_Tc {
            background: #e5e5e5;
            border-color: #ccc
        }
        
        .gb_9 .gb_Qc {
            background-color: rgba(0, 0, 0, .7)
        }
        
        .gb_S .gb_Qc.gb_Qc,
        .gb_S .gb_Jc .gb_Qc.gb_Qc,
        .gb_S .gb_Jc .gb_b:hover .gb_Qc,
        .gb_S .gb_Jc .gb_b:focus .gb_Qc {
            background-color: #fff;
            color: #404040
        }
        
        .gb_S .gb_Qc.gb_Rc {
            background-position: -70px 0
        }
        
        .gb_S .gb_Qc.gb_Sc {
            background-position: -219px 0
        }
        
        .gb_Jc .gb_Qc.gb_Qc {
            background-color: #db4437;
            color: #fff
        }
        
        .gb_Jc .gb_b:hover .gb_Qc,
        .gb_Jc .gb_b:focus .gb_Qc {
            background-color: #a52714
        }
        
        .gb_7a {
            display: none!important
        }
        
        .gb_8a {
            visibility: hidden
        }
        
        #gb#gb a.gb_O,
        #gb#gb a.gb_P,
        #gb#gb span.gb_P {
            color: rgba(0, 0, 0, 0.87);
            text-decoration: none
        }
        
        #gb#gb a.gb_P:hover,
        #gb#gb a.gb_P:focus {
            opacity: .85;
            text-decoration: underline
        }
        
        .gb_Q.gb_R {
            display: none;
            padding-right: 15px;
            vertical-align: middle
        }
        
        .gb_Q.gb_R:first-child {
            padding-right: 0
        }
        
        .gb_Q .gb_P {
            display: inline-block;
            line-height: 24px;
            outline: none;
            vertical-align: middle
        }
        
        #gb#gb.gb_S a.gb_P,
        #gb#gb.gb_S span.gb_P,
        #gb#gb .gb_S a.gb_P,
        #gb#gb .gb_S span.gb_P {
            color: #fff
        }
        
        #gb#gb.gb_S span.gb_P,
        #gb#gb .gb_S span.gb_P {
            opacity: .7
        }
        
        a.gb_wa {
            border: none;
            color: #4285f4;
            cursor: default;
            font-weight: bold;
            outline: none;
            position: relative;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            white-space: nowrap;
            -moz-user-select: none
        }
        
        a.gb_wa:hover:after,
        a.gb_wa:focus:after {
            background-color: rgba(0, 0, 0, .12);
            content: '';
            height: 100%;
            right: 0;
            position: absolute;
            top: 0;
            width: 100%
        }
        
        a.gb_wa:hover,
        a.gb_wa:focus {
            text-decoration: none
        }
        
        a.gb_wa:active {
            background-color: rgba(153, 153, 153, .4);
            text-decoration: none
        }
        
        a.gb_xa {
            background-color: #4285f4;
            color: #fff
        }
        
        a.gb_xa:active {
            background-color: #0043b2
        }
        
        .gb_ya {
            -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, .16);
            box-shadow: 0 1px 1px rgba(0, 0, 0, .16)
        }
        
        .gb_wa,
        .gb_xa,
        .gb_za,
        .gb_Aa {
            display: inline-block;
            line-height: 28px;
            padding: 0 12px;
            -moz-border-radius: 2px;
            border-radius: 2px
        }
        
        .gb_za {
            background: #f8f8f8;
            border: 1px solid #c6c6c6
        }
        
        .gb_Aa {
            background: #f8f8f8
        }
        
        .gb_za,
        #gb a.gb_za.gb_za,
        .gb_Aa {
            color: #666;
            cursor: default;
            text-decoration: none
        }
        
        #gb a.gb_Aa.gb_Aa {
            cursor: default;
            text-decoration: none
        }
        
        .gb_Aa {
            border: 1px solid #4285f4;
            font-weight: bold;
            outline: none;
            background: #4285f4;
            background: -moz-linear-gradient(top, #4387fd, #4683ea);
            background: linear-gradient(top, #4387fd, #4683ea);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#4387fd, endColorstr=#4683ea, GradientType=0)
        }
        
        #gb a.gb_Aa.gb_Aa {
            color: #fff
        }
        
        .gb_Aa:hover {
            -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, .15);
            box-shadow: 0 1px 0 rgba(0, 0, 0, .15)
        }
        
        .gb_Aa:active {
            -moz-box-shadow: inset 0 2px 0 rgba(0, 0, 0, .15);
            box-shadow: inset 0 2px 0 rgba(0, 0, 0, .15);
            background: #3c78dc;
            background: -moz-linear-gradient(top, #3c7ae4, #3f76d3);
            background: linear-gradient(top, #3c7ae4, #3f76d3);
            filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#3c7ae4, endColorstr=#3f76d3, GradientType=0)
        }
        
        .gb_9b {
            min-width: 127px;
            overflow: hidden;
            position: relative;
            z-index: 987
        }
        
        .gb_ac {
            position: absolute;
            padding: 0 15px 0 20px
        }
        
        .gb_bc .gb_ac {
            left: 100%;
            margin-left: -127px
        }
        
        .gb_cc {
            display: inline-block;
            line-height: 0;
            outline: none;
            vertical-align: middle
        }
        
        .gb_dc .gb_cc {
            position: relative;
            top: 2px
        }
        
        .gb_cc .gb_ec,
        .gb_Va {
            display: block
        }
        
        .gb_fc {
            border: none;
            display: block;
            visibility: hidden
        }
        
        .gb_cc .gb_ec {
            background-position: 0 -35px;
            height: 33px;
            width: 92px
        }
        
        img.gb_Wa {
            border: 0;
            vertical-align: middle
        }
        
        .gb_S .gb_cc .gb_ec {
            background-position: -296px 0
        }
        
        .gb_9 .gb_cc .gb_ec {
            background-position: -97px 0;
            opacity: .54
        }
        
        .gb_If {
            display: inline-block;
            line-height: normal;
            position: relative;
            z-index: 987
        }
        
        .gb_Pf .gb_b {
            background-position: -498px -35px;
            opacity: .55;
            height: 30px;
            width: 30px
        }
        
        .gb_Pf .gb_b:hover,
        .gb_Pf .gb_b:focus {
            opacity: .85
        }
        
        .gb_Pf .gb_sb {
            border-bottom-color: #f5f5f5
        }
        
        #gbsfw.gb_Qf {
            background: #f5f5f5;
            border-color: #ccc
        }
        
        .gb_S .gb_Pf .gb_b {
            background-position: -428px -35px;
            opacity: 1
        }
        
        .gb_9 .gb_Pf .gb_b {
            background-position: -498px 0;
            opacity: .7
        }
        
        .gb_9 .gb_Pf .gb_b:hover,
        .gb_9 .gb_Pf .gb_b:focus {
            opacity: .85
        }
        
        .gb_Lg {
            color: #000;
            font: 13px/27px Arial, sans-serif;
            right: 0;
            min-width: 1092px;
            position: absolute;
            top: 0;
            -moz-user-select: -moz-none;
            width: 100%
        }
        
        .gb_Sf {
            font: 13px/27px Arial, sans-serif;
            position: relative;
            height: 60px;
            width: 100%
        }
        
        .gb_bb .gb_Sf {
            height: 28px
        }
        
        #gba {
            height: 60px
        }
        
        #gba.gb_bb {
            height: 28px
        }
        
        #gba.gb_Mg {
            height: 90px
        }
        
        #gba.gb_Ng {
            height: 132px
        }
        
        #gba.gb_Mg.gb_bb {
            height: 58px
        }
        
        .gb_Sf>.gb_R {
            height: 60px;
            line-height: 58px;
            vertical-align: middle
        }
        
        .gb_bb .gb_Sf>.gb_R {
            height: 28px;
            line-height: 26px
        }
        
        .gb_Sf::before {
            background: #e5e5e5;
            bottom: 0;
            content: '';
            display: none;
            height: 1px;
            right: 0;
            position: absolute;
            left: 0
        }
        
        .gb_Sf {
            background: #f1f1f1
        }
        
        .gb_Og .gb_Sf {
            background: #fff
        }
        
        .gb_Og .gb_Sf::before,
        .gb_bb .gb_Sf::before {
            display: none
        }
        
        .gb_9 .gb_Sf,
        .gb_S .gb_Sf,
        .gb_bb .gb_Sf {
            background: transparent
        }
        
        .gb_9 .gb_Sf::before {
            background: #e1e1e1;
            background: rgba(0, 0, 0, .12)
        }
        
        .gb_S .gb_Sf::before {
            background: #333;
            background: rgba(255, 255, 255, .2)
        }
        
        .gb_R {
            display: inline-block;
            flex: 0 0 auto;
            flex: 0 0 main-size
        }
        
        .gb_R.gb_Pg {
            float: left;
            order: 1
        }
        
        .gb_Qg {
            white-space: nowrap
        }
        
        .gb_Nf .gb_Qg {
            display: -webkit-flex;
            display: flex
        }
        
        .gb_Qg,
        .gb_R {
            margin-right: 0!important;
            margin-left: 0!important
        }
        
        .gb_ec {
            background-image: url('//ssl.gstatic.com/gb/images/i1_1967ca6a.png');
            background-size: 528px 68px
        }
        
        @media (min-resolution:1.25dppx),
        (-webkit-min-device-pixel-ratio:1.25),
        (min-device-pixel-ratio:1.25) {
            .gb_ec {
                background-image: url('//ssl.gstatic.com/gb/images/i2_2ec824b0.png')
            }
        }
        
        .gb_jb {
            min-width: 255px;
            padding-right: 30px;
            padding-left: 30px;
            position: relative;
            text-align: left;
            z-index: 986;
            align-items: center;
            justify-content: flex-end;
            -moz-user-select: -moz-none
        }
        
        .gb_bb .gb_jb {
            min-width: 0
        }
        
        .gb_jb.gb_R {
            flex: 1 1 auto;
            flex: 1 1 main-size
        }
        
        .gb_Dc {
            line-height: normal;
            position: relative;
            text-align: right
        }
        
        .gb_Dc.gb_R,
        .gb_pe.gb_R,
        .gb_cb.gb_R {
            flex: 0 1 auto;
            flex: 0 1 main-size
        }
        
        .gb_Ag,
        .gb_Bg {
            display: inline-block;
            padding: 0 15px 0 0;
            position: relative;
            vertical-align: middle
        }
        
        .gb_pe {
            line-height: normal;
            padding-left: 15px
        }
        
        .gb_jb .gb_pe {
            padding-left: 0
        }
        
        .gb_cb {
            color: #404040;
            line-height: 30px;
            min-width: 30px;
            overflow: hidden;
            vertical-align: middle;
            text-overflow: ellipsis
        }
        
        #gb.gb_bb.gb_bb .gb_ve,
        #gb.gb_bb.gb_bb .gb_Dc>.gb_Bg .gb_9f {
            background: none;
            border: none;
            color: #36c;
            cursor: pointer;
            filter: none;
            font-size: 11px;
            line-height: 26px;
            padding: 0;
            -moz-box-shadow: none;
            box-shadow: none
        }
        
        #gb.gb_bb.gb_S .gb_ve,
        #gb.gb_bb.gb_S .gb_Dc>.gb_Bg .gb_9f {
            color: #fff
        }
        
        .gb_bb .gb_ve {
            text-transform: uppercase
        }
        
        .gb_jb.gb_Of {
            padding-right: 0;
            padding-left: 29px
        }
        
        .gb_jb.gb_Cg {
            max-width: 400px
        }
        
        .gb_Dg {
            background-clip: content-box;
            background-origin: content-box;
            opacity: .27;
            padding: 22px;
            height: 16px;
            width: 16px
        }
        
        .gb_Dg.gb_R {
            display: none
        }
        
        .gb_Dg:hover,
        .gb_Dg:focus {
            opacity: .55
        }
        
        .gb_Eg {
            background-position: -219px -25px
        }
        
        .gb_Fg {
            background-position: -194px 0;
            padding-right: 30px;
            padding-left: 14px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 990
        }
        
        .gb_gb:not(.gb_hb) .gb_Fg,
        .gb_Of .gb_Eg {
            display: inline-block
        }
        
        .gb_gb .gb_Eg {
            padding-right: 30px;
            padding-left: 0;
            width: 0
        }
        
        .gb_gb:not(.gb_hb) .gb_Hg {
            display: none
        }
        
        .gb_jb.gb_R.gb_Of,
        .gb_Of:not(.gb_hb) .gb_Dc {
            flex: 0 0 auto;
            flex: 0 0 main-size
        }
        
        .gb_Dg,
        .gb_Of .gb_pe,
        .gb_hb .gb_Dc {
            overflow: hidden
        }
        
        .gb_gb .gb_pe {
            padding-left: 0
        }
        
        .gb_Of .gb_Dc {
            padding: 1px 0 1px 1px
        }
        
        .gb_gb .gb_Dc {
            width: 75px
        }
        
        .gb_jb.gb_Ig,
        .gb_jb.gb_Ig .gb_Eg,
        .gb_jb.gb_Ig .gb_Eg::before,
        .gb_jb.gb_Ig .gb_pe,
        .gb_jb.gb_Ig .gb_Dc {
            -moz-transition: width .5s ease-in-out, min-width .5s ease-in-out, max-width .5s ease-in-out, padding .5s ease-in-out, left .5s ease-in-out;
            transition: width .5s ease-in-out, min-width .5s ease-in-out, max-width .5s ease-in-out, padding .5s ease-in-out, left .5s ease-in-out
        }
        
        .gb_Nf .gb_jb {
            min-width: 0
        }
        
        .gb_jb.gb_kb,
        .gb_jb.gb_kb .gb_Dc,
        .gb_jb.gb_Jg,
        .gb_jb.gb_Jg .gb_Dc {
            min-width: 0!important
        }
        
        .gb_jb.gb_kb,
        .gb_jb.gb_kb .gb_R {
            -moz-box-flex: 0 0 auto!important;
            flex: 0 0 auto!important
        }
        
        .gb_jb.gb_kb .gb_cb {
            width: 30px!important
        }
        
        .gb_Kg {
            margin-left: 32px
        }
        
        .gb_8a {
            display: none
        }
        
        .gb_Sf::-webkit-scrollbar {
            height: 15px;
            width: 15px
        }
        
        .gb_Sf::-webkit-scrollbar-button {
            height: 0;
            width: 0
        }
        
        .gb_Sf::-webkit-scrollbar-thumb {
            background-clip: padding-box;
            background-color: rgba(0, 0, 0, .3);
            border: 5px solid transparent;
            -moz-border-radius: 10px;
            border-radius: 10px;
            min-height: 20px;
            min-width: 20px;
            height: 5px;
            width: 5px
        }
        
        .gb_Sf::-webkit-scrollbar-thumb:hover,
        .gb_Sf::-webkit-scrollbar-thumb:active {
            background-color: rgba(0, 0, 0, .4)
        }
        
        #gb.gb_Tg {
            min-width: 980px
        }
        
        #gb.gb_Tg .gb_Mf {
            min-width: 0;
            position: static;
            width: 0
        }
        
        .gb_Wc {
            display: none
        }
        
        .gb_Tg .gb_Sf {
            background: transparent;
            border-bottom-color: transparent
        }
        
        .gb_Tg .gb_Sf::before {
            display: none
        }
        
        .gb_Tg.gb_Tg .gb_Q {
            display: inline-block
        }
        
        .gb_Tg.gb_jb .gb_pe {
            padding-left: 15px
        }
        
        .gb_Tg.gb_Nf #gbqf {
            display: block
        }
        
        .gb_Tg #gbq {
            height: 0;
            position: absolute
        }
        
        .gb_Tg.gb_jb {
            z-index: 987
        }
        
        sentinel {}
        
        #gbq .gbgt-hvr,
        #gbq .gbgt:focus {
            background-color: transparent;
            background-image: none
        }
        
        .gbqfh#gbq1 {
            display: none
        }
        
        .gbxx {
            display: none !important
        }
        
        #gbq {
            line-height: normal;
            position: relative;
            top: 0px;
            white-space: nowrap
        }
        
        #gbq {
            right: 0;
            width: 100%
        }
        
        #gbq2 {
            top: 0px;
            z-index: 986
        }
        
        #gbq4 {
            display: inline-block;
            max-height: 29px;
            overflow: hidden;
            position: relative
        }
        
        .gbqfh#gbq2 {
            z-index: 985
        }
        
        .gbqfh#gbq2 {
            margin: 0;
            margin-right: 0 !important;
            padding-top: 0;
            position: relative;
            top: 310px
        }
        
        .gbqfh #gbqf {
            margin: auto;
            min-width: 534px;
            padding: 0 !important
        }
        
        .gbqfh #gbqfbw {
            display: none
        }
        
        .gbqfh #gbqfbwa {
            display: block
        }
        
        .gbqfh #gbqf {
            max-width: 572px;
            min-width: 572px
        }
        
        .gbqfh .gbqfqw {
            border-right-width: 1px
        }
        
        .gbii::before {
            content: url(https://ssl.gstatic.com/gb/images/silhouette_27.png)
        }
        
        .gbip::before {
            content: url(https://ssl.gstatic.com/gb/images/silhouette_96.png)
        }
        
        @media (min-resolution:1.25dppx),
        (-o-min-device-pixel-ratio:5/4),
        (-webkit-min-device-pixel-ratio:1.25),
        (min-device-pixel-ratio:1.25) {
            .gbii::before {
                content: url(https://ssl.gstatic.com/gb/images/silhouette_27.png)
            }
            .gbip::before {
                content: url(https://ssl.gstatic.com/gb/images/silhouette_96.png)
            }
        }
        
        .gbii {
            background-image: url(https://ssl.gstatic.com/gb/images/silhouette_27.png)
        }
        
        .gbip {
            background-image: url(https://ssl.gstatic.com/gb/images/silhouette_96.png)
        }
        
        @media (min-resolution:1.25dppx),
        (-o-min-device-pixel-ratio:5/4),
        (-webkit-min-device-pixel-ratio:1.25),
        (min-device-pixel-ratio:1.25) {
            .gbii {
                background-image: url(https://ssl.gstatic.com/gb/images/silhouette_27.png)
            }
            .gbip {
                background-image: url(https://ssl.gstatic.com/gb/images/silhouette_96.png)
            }
        }
    </style>
    <style data-jiis="cc" id="gstyle">
        html,
        body {
            height: 100%;
            margin: 0
        }
        
        #viewport {
            min-height: 100%;
            position: relative;
            width: 100%
        }
        
        .content {
            padding-bottom: 35px
        }
        
        #footer {
            bottom: 0;
            font-size: 10pt;
            height: 35px;
            position: absolute;
            width: 100%
        }
        
        #gog {
            padding: 3px 8px 0
        }
        
        td {
            line-height: .8em
        }
        
        .gac_m td {
            line-height: 17px
        }
        
        body,
        td,
        a,
        p,
        .h {
            font-family: HelveticaNeue, 'Noto Naskh Arabic UI', Arial, sans-serif
        }
        
        .h {
            color: #1a0dab;
            font-size: 20px
        }
        
        .q {
            color: #00c
        }
        
        .ts td {
            padding: 0
        }
        
        .ts {
            border-collapse: collapse
        }
        
        em {
            font-weight: bold;
            font-style: normal
        }
        
        #lst-ib:hover {
            border-color: #a0a0a0 #b9b9b9 #b9b9b9 #b9b9b9 !important
        }
        
        #lst-ib.lst-d-f,
        #lst-ib:hover.lst-d-f {
            border-color: #4d90fe !important
        }
        
        .ds {
            display: inline-block;
            margin-right: 4px
        }
        
        .ctr-p {
            margin: 0 auto;
            min-width: 980px
        }
        
        a.gb1,
        a.gb2,
        a.gb3,
        a.gb4 {
            color: #11c !important
        }
        
        body {
            background: #fff;
            color: #222
        }
        
        a {
            color: #1a0dab;
            text-decoration: none
        }
        
        a:hover,
        a:active {
            text-decoration: underline
        }
        
        .fl a {
            color: #1a0dab
        }
        
        a:visited {
            color: #609
        }
        
        a.gb1,
        a.gb4 {
            text-decoration: underline
        }
        
        a.gb3:hover {
            text-decoration: none
        }
        
        #ghead a.gb2:hover {
            color: #fff !important
        }
        
        .sblc {
            padding-top: 5px
        }
        
        .sblc a {
            display: block;
            margin: 2px 0;
            margin-right: 13px;
            font-size: 11px
        }
        
        .lsbb {
            height: 30px;
            display: block
        }
        
        .ftl,
        #footer a {
            color: #666;
            margin: 2px 10px 0
        }
        
        #footer a:active {
            color: #dd4b39
        }
        
        .lsb {
            border: none;
            color: #000;
            cursor: pointer;
            height: 30px;
            margin: 0;
            outline: 0;
            vertical-align: top
        }
        
        .lst:focus {
            outline: none
        }
        
        body,
        html {
            font-size: small
        }
        
        h1,
        ol,
        ul,
        li {
            margin: 0;
            padding: 0
        }
        
        .nojsv {
            visibility: hidden
        }
        
        .hp #logocont.nojsv {
            display: none
        }
        
        #body,
        #footer {
            display: block
        }
        
        .gl {
            white-space: nowrap
        }
        
        .big .tsf-p {
            padding-right: 150px;
            padding-left: 352px
        }
        
        .hp .tsf-p {
            padding-right: 173px;
            padding-left: 173px
        }
        
        .hp #tsf {
            margin: 0 auto;
            width: 833px
        }
        
        #tsf {
            width: 833px
        }
        
        .big #tsf,
        .hp .big #tsf {
            width: 1139px
        }
        
        .tsf-p {
            padding-right: 150px;
            padding-left: 46px
        }
        
        .hp .big .tsf-p {
            padding-right: 284px;
            padding-left: 284px
        }
        
        #fll {
            float: left;
            text-align: left;
            width: 100%
        }
        
        #ftby {
            padding-right: 0
        }
        
        #ftby>div,
        #fll>div,
        #footer a {
            display: inline-block
        }
        
        @media only screen and (min-width:1222px) {
            #ftby {
                margin: 0 44px
            }
        }
        
        .logo-subtext {
            color: #4285f4;
            font: 16px/16px roboto-regular, arial, sans-serif;
            left: 215px;
            position: relative;
            top: 76px;
            white-space: nowrap
        }
    </style>
    <style>
        .gl {
            white-space: nowrap
        }
        
        .big .tsf-p {
            padding-right: 150px;
            padding-left: 352px
        }
        
        .hp .tsf-p {
            padding-right: 173px;
            padding-left: 173px
        }
        
        .hp #tsf {
            margin: 0 auto;
            width: 833px
        }
        
        #tsf {
            width: 833px
        }
        
        .big #tsf,
        .hp .big #tsf {
            width: 1139px
        }
        
        .tsf-p {
            padding-right: 150px;
            padding-left: 46px
        }
        
        .hp .big .tsf-p {
            padding-right: 284px;
            padding-left: 284px
        }
    </style>
    <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
        (function() {
            var b = {
                gen204: "dcl",
                clearcut: 4
            };
            var c = [function() {
                google.c && google.tick("load", b)
            }];
            google.dclc = function(a) {
                c.length ? c.push(a) : a()
            };

            function d() {
                for (var a; a = c.shift();) a()
            }
            window.addEventListener ? (document.addEventListener("DOMContentLoaded", d, !1), window.addEventListener("load", d, !1)) : window.attachEvent && window.attachEvent("onload", d);
        }).call(this);
        (function() {
            window.rwt = function() {
                return !0
            };
        }).call(this);
        (window['gbar'] = window['gbar'] || {})._CONFIG = [
            [
                [0, "www.gstatic.com", "og.og2.en_US.hG3jQr2q0ic.O", "com.eg", "ar", "1", 0, [3, 2, ".40.", "", "1300102,3700256,3700489,3700521", "209869425", "0"], "40400", "RcKFW5LBFoTZwALHj73IDQ", 0, 1, "og.og2.2d1n41egkxv1.R.F4.O", "AA2YrTsr79Tq84_7tTFeZGKux6WfOleDAw", "AA2YrTs2ApMir91cz7FcpM9w60jXHnaJPw", "", 2, 0, 200, "EGY", null, null, "1", "1", 0], null, 0, ["m;/_/scs/abc-static/_/js/k=gapi.gapi.en.bSfaJ330ulQ.O/rt=j/d=1/rs=AHpOoo9ETX0ujNe7X7enovCK61wuo61HKQ/m=__features__", "https://apis.google.com", "", "", "", "", null, 1, "es_plusone_gc_20180809.0_p0", "ar"],
                ["1", "gci_91f30755d6a6b787dcc2a4062e6e9824.js", "googleapis.client:plusone:gapi.iframes", "", "ar"], null, null, null, [0.009999999776482582, "com.eg", "1", [null, "", "w", null, 1, 5184000, 1, 0, "", 0, 1, "", 0, 0, null, 0, 0], null, [
                    ["", "", "0", 0, 0, -1]
                ], null, 0, null, null, ["5061451", "google\\.(com|ru|ca|by|kz|com\\.mx|com\\.tr)$", 1]], null, [0, 0, 0, null, "", "", "", ""],
                [1, 0.001000000047497451, 1],
                [1, 0.1000000014901161, 2, 1],
                [0, "", null, "", 0, "حدث خطأ أثناء تحميل تطبيقاتك في Marketplace.", "ليس لديك تطبيقات في Marketplace.", 0, [1, "https://www.google.com.eg/webhp?tab=ww", "بحث", "", "0 -2139px", null, 0], null, null, null, 0, null, null, 0],
                [1],
                [0, 1, ["lg"], 1, ["lat"]],
                [
                    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "def", "", "", "", "", "", "", "", "", ""],
                    [""]
                ], null, null, null, [30, 127, 1, 0, 60], null, null, null, null, null, [1, 1], null, [1, 1, 0, 40400, 1, "EGY", "ar", "209869425.0", 1, 0.001000000047497451, 0, 0, 0, 0, 0, 0], null, [""]
            ]
        ];
        (window['gbar'] = window['gbar'] || {})._LDD = ["in", "fot"];
        this.gbar_ = this.gbar_ || {};
        (function(_) {
            var window = this;
            try {
                var ba, ha, ia, ja, xa, ya;
                _.aa = "function" == typeof Object.create ? Object.create : function(a) {
                    var c = function() {};
                    c.prototype = a;
                    return new c
                };
                if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
                else {
                    var ca;
                    a: {
                        var da = {
                                Mf: !0
                            },
                            ea = {};
                        try {
                            ea.__proto__ = da;
                            ca = ea.Mf;
                            break a
                        } catch (a) {}
                        ca = !1
                    }
                    ba = ca ? function(a, c) {
                        a.__proto__ = c;
                        if (a.__proto__ !== c) throw new TypeError("a`" + a);
                        return a
                    } : null
                }
                _.fa = ba;
                ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, d) {
                    a != Array.prototype && a != Object.prototype && (a[c] = d.value)
                };
                ia = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this;
                ja = function(a, c) {
                    if (c) {
                        var d = ia;
                        a = a.split(".");
                        for (var e = 0; e < a.length - 1; e++) {
                            var f = a[e];
                            f in d || (d[f] = {});
                            d = d[f]
                        }
                        a = a[a.length - 1];
                        e = d[a];
                        c = c(e);
                        c != e && null != c && ha(d, a, {
                            configurable: !0,
                            writable: !0,
                            value: c
                        })
                    }
                };
                ja("String.prototype.startsWith", function(a) {
                    return a ? a : function(a, d) {
                        if (null == this) throw new TypeError("b`startsWith");
                        if (a instanceof RegExp) throw new TypeError("c`startsWith");
                        var c = this.length,
                            f = a.length;
                        d = Math.max(0, Math.min(d | 0, this.length));
                        for (var g = 0; g < f && d < c;)
                            if (this[d++] != a[g++]) return !1;
                        return g >= f
                    }
                });
                var ka = function() {
                        ka = function() {};
                        ia.Symbol || (ia.Symbol = la)
                    },
                    la = function() {
                        var a = 0;
                        return function(c) {
                            return "jscomp_symbol_" + (c || "") + a++
                        }
                    }(),
                    na = function() {
                        ka();
                        var a = ia.Symbol.iterator;
                        a || (a = ia.Symbol.iterator = ia.Symbol("iterator"));
                        "function" != typeof Array.prototype[a] && ha(Array.prototype, a, {
                            configurable: !0,
                            writable: !0,
                            value: function() {
                                return ma(this)
                            }
                        });
                        na = function() {}
                    },
                    ma = function(a) {
                        var c = 0;
                        return oa(function() {
                            return c < a.length ? {
                                done: !1,
                                value: a[c++]
                            } : {
                                done: !0
                            }
                        })
                    },
                    oa = function(a) {
                        na();
                        a = {
                            next: a
                        };
                        a[ia.Symbol.iterator] = function() {
                            return this
                        };
                        return a
                    },
                    pa = function(a) {
                        na();
                        var c = a[window.Symbol.iterator];
                        return c ? c.call(a) : ma(a)
                    },
                    qa = function(a, c) {
                        return Object.prototype.hasOwnProperty.call(a, c)
                    };
                ja("WeakMap", function(a) {
                    function c(a) {
                        qa(a, e) || ha(a, e, {
                            value: {}
                        })
                    }

                    function d(a) {
                        var d = Object[a];
                        d && (Object[a] = function(a) {
                            c(a);
                            return d(a)
                        })
                    }
                    if (function() {
                            if (!a || !Object.seal) return !1;
                            try {
                                var c = Object.seal({}),
                                    d = Object.seal({}),
                                    e = new a([
                                        [c, 2],
                                        [d, 3]
                                    ]);
                                if (2 != e.get(c) || 3 != e.get(d)) return !1;
                                e["delete"](c);
                                e.set(d, 4);
                                return !e.has(c) && 4 == e.get(d)
                            } catch (r) {
                                return !1
                            }
                        }()) return a;
                    var e = "$jscomp_hidden_" + Math.random();
                    d("freeze");
                    d("preventExtensions");
                    d("seal");
                    var f = 0,
                        g = function(a) {
                            this.ca = (f += Math.random() +
                                1).toString();
                            if (a) {
                                ka();
                                na();
                                a = pa(a);
                                for (var c; !(c = a.next()).done;) c = c.value, this.set(c[0], c[1])
                            }
                        };
                    g.prototype.set = function(a, d) {
                        c(a);
                        if (!qa(a, e)) throw Error("d`" + a);
                        a[e][this.ca] = d;
                        return this
                    };
                    g.prototype.get = function(a) {
                        return qa(a, e) ? a[e][this.ca] : void 0
                    };
                    g.prototype.has = function(a) {
                        return qa(a, e) && qa(a[e], this.ca)
                    };
                    g.prototype["delete"] = function(a) {
                        return qa(a, e) && qa(a[e], this.ca) ? delete a[e][this.ca] : !1
                    };
                    return g
                });
                ja("Map", function(a) {
                    if (function() {
                            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                            try {
                                var c = Object.seal({
                                        x: 4
                                    }),
                                    d = new a(pa([
                                        [c, "s"]
                                    ]));
                                if ("s" != d.get(c) || 1 != d.size || d.get({
                                        x: 4
                                    }) || d.set({
                                        x: 4
                                    }, "t") != d || 2 != d.size) return !1;
                                var e = d.entries(),
                                    f = e.next();
                                if (f.done || f.value[0] != c || "s" != f.value[1]) return !1;
                                f = e.next();
                                return f.done || 4 != f.value[0].x || "t" != f.value[1] || !e.next().done ? !1 : !0
                            } catch (N) {
                                return !1
                            }
                        }()) return a;
                    ka();
                    na();
                    var c = new window.WeakMap,
                        d = function(a) {
                            this.o = {};
                            this.b = g();
                            this.size = 0;
                            if (a) {
                                a = pa(a);
                                for (var c; !(c = a.next()).done;) c = c.value, this.set(c[0], c[1])
                            }
                        };
                    d.prototype.set = function(a, c) {
                        a = 0 === a ? 0 : a;
                        var d = e(this, a);
                        d.list || (d.list = this.o[d.id] = []);
                        d.Ca ? d.Ca.value = c : (d.Ca = {
                            next: this.b,
                            mb: this.b.mb,
                            head: this.b,
                            key: a,
                            value: c
                        }, d.list.push(d.Ca), this.b.mb.next = d.Ca, this.b.mb = d.Ca, this.size++);
                        return this
                    };
                    d.prototype["delete"] = function(a) {
                        a = e(this, a);
                        return a.Ca && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.o[a.id], a.Ca.mb.next = a.Ca.next, a.Ca.next.mb =
                            a.Ca.mb, a.Ca.head = null, this.size--, !0) : !1
                    };
                    d.prototype.clear = function() {
                        this.o = {};
                        this.b = this.b.mb = g();
                        this.size = 0
                    };
                    d.prototype.has = function(a) {
                        return !!e(this, a).Ca
                    };
                    d.prototype.get = function(a) {
                        return (a = e(this, a).Ca) && a.value
                    };
                    d.prototype.entries = function() {
                        return f(this, function(a) {
                            return [a.key, a.value]
                        })
                    };
                    d.prototype.keys = function() {
                        return f(this, function(a) {
                            return a.key
                        })
                    };
                    d.prototype.values = function() {
                        return f(this, function(a) {
                            return a.value
                        })
                    };
                    d.prototype.forEach = function(a, c) {
                        for (var d = this.entries(),
                                e; !(e = d.next()).done;) e = e.value, a.call(c, e[1], e[0], this)
                    };
                    d.prototype[window.Symbol.iterator] = d.prototype.entries;
                    var e = function(a, d) {
                            var e = d && typeof d;
                            "object" == e || "function" == e ? c.has(d) ? e = c.get(d) : (e = "" + ++h, c.set(d, e)) : e = "p_" + d;
                            var f = a.o[e];
                            if (f && qa(a.o, e))
                                for (a = 0; a < f.length; a++) {
                                    var g = f[a];
                                    if (d !== d && g.key !== g.key || d === g.key) return {
                                        id: e,
                                        list: f,
                                        index: a,
                                        Ca: g
                                    }
                                }
                            return {
                                id: e,
                                list: f,
                                index: -1,
                                Ca: void 0
                            }
                        },
                        f = function(a, c) {
                            var d = a.b;
                            return oa(function() {
                                if (d) {
                                    for (; d.head != a.b;) d = d.mb;
                                    for (; d.next != d.head;) return d =
                                        d.next, {
                                            done: !1,
                                            value: c(d)
                                        };
                                    d = null
                                }
                                return {
                                    done: !0,
                                    value: void 0
                                }
                            })
                        },
                        g = function() {
                            var a = {};
                            return a.mb = a.next = a.head = a
                        },
                        h = 0;
                    return d
                });
                _.ra = _.ra || {};
                _.m = this;
                _.n = function(a) {
                    return void 0 !== a
                };
                _.p = function(a) {
                    return "string" == typeof a
                };
                _.sa = function(a) {
                    return "number" == typeof a
                };
                _.t = function(a, c, d) {
                    a = a.split(".");
                    d = d || _.m;
                    a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
                    for (var e; a.length && (e = a.shift());) !a.length && _.n(c) ? d[e] = c : d[e] && d[e] !== Object.prototype[e] ? d = d[e] : d = d[e] = {}
                };
                _.u = function(a, c) {
                    a = a.split(".");
                    c = c || _.m;
                    for (var d = 0; d < a.length; d++)
                        if (c = c[a[d]], null == c) return null;
                    return c
                };
                _.ta = function() {};
                _.ua = function(a) {
                    a.Nd = void 0;
                    a.U = function() {
                        return a.Nd ? a.Nd : a.Nd = new a
                    }
                };
                _.va = function(a) {
                    var c = typeof a;
                    if ("object" == c)
                        if (a) {
                            if (a instanceof Array) return "array";
                            if (a instanceof Object) return c;
                            var d = Object.prototype.toString.call(a);
                            if ("[object Window]" == d) return "object";
                            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                            if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                        } else return "null";
                    else if ("function" == c && "undefined" == typeof a.call) return "object";
                    return c
                };
                _.v = function(a) {
                    return "array" == _.va(a)
                };
                _.wa = "closure_uid_" + (1E9 * Math.random() >>> 0);
                xa = function(a, c, d) {
                    return a.call.apply(a.bind, arguments)
                };
                ya = function(a, c, d) {
                    if (!a) throw Error();
                    if (2 < arguments.length) {
                        var e = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var d = Array.prototype.slice.call(arguments);
                            Array.prototype.unshift.apply(d, e);
                            return a.apply(c, d)
                        }
                    }
                    return function() {
                        return a.apply(c, arguments)
                    }
                };
                _.w = function(a, c, d) {
                    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.w = xa : _.w = ya;
                    return _.w.apply(null, arguments)
                };
                _.x = Date.now || function() {
                    return +new Date
                };
                _.z = function(a, c) {
                    function d() {}
                    d.prototype = c.prototype;
                    a.J = c.prototype;
                    a.prototype = new d;
                    a.prototype.constructor = a;
                    a.zj = function(a, d, g) {
                        for (var e = Array(arguments.length - 2), f = 2; f < arguments.length; f++) e[f - 2] = arguments[f];
                        return c.prototype[d].apply(a, e)
                    }
                };
                var za = function(a, c, d) {
                    this.A = a;
                    this.o = !1;
                    this.b = c;
                    this.w = d
                };
                za.prototype.Ra = function(a) {
                    if (this.o) throw Error("e`" + this.b);
                    try {
                        a.apply(this.A, this.w), this.o = !0
                    } catch (c) {}
                };
                _.A = function() {
                    this.fa = this.fa;
                    this.La = this.La
                };
                _.A.prototype.fa = !1;
                _.A.prototype.ga = function() {
                    this.fa || (this.fa = !0, this.P())
                };
                _.A.prototype.P = function() {
                    if (this.La)
                        for (; this.La.length;) this.La.shift()()
                };
                var Aa = function(a) {
                    _.A.call(this);
                    this.w = a;
                    this.b = [];
                    this.o = {}
                };
                _.z(Aa, _.A);
                Aa.prototype.A = function(a) {
                    var c = (0, _.w)(function() {
                        this.b.push(new za(this.w, a, Array.prototype.slice.call(arguments)))
                    }, this);
                    return this.o[a] = c
                };
                Aa.prototype.Ra = function() {
                    for (var a = this.b.length, c = this.b, d = [], e = 0; e < a; ++e) {
                        var f = c[e].b;
                        a: {
                            var g = this.w;
                            for (var h = f.split("."), l = h.length, q = 0; q < l; ++q)
                                if (g[h[q]]) g = g[h[q]];
                                else {
                                    g = null;
                                    break a
                                }
                            g = g instanceof Function ? g : null
                        }
                        if (g && g != this.o[f]) try {
                            c[e].Ra(g)
                        } catch (r) {} else d.push(c[e])
                    }
                    this.b = d.concat(c.slice(a))
                };
                _.Ba = function(a) {
                    if (Error.captureStackTrace) Error.captureStackTrace(this, _.Ba);
                    else {
                        var c = Error().stack;
                        c && (this.stack = c)
                    }
                    a && (this.message = String(a))
                };
                _.z(_.Ba, Error);
                _.Ba.prototype.name = "CustomError";
                _.Ca = Array.prototype.indexOf ? function(a, c) {
                    return Array.prototype.indexOf.call(a, c, void 0)
                } : function(a, c) {
                    if (_.p(a)) return _.p(c) && 1 == c.length ? a.indexOf(c, 0) : -1;
                    for (var d = 0; d < a.length; d++)
                        if (d in a && a[d] === c) return d;
                    return -1
                };
                _.Da = Array.prototype.forEach ? function(a, c, d) {
                    Array.prototype.forEach.call(a, c, d)
                } : function(a, c, d) {
                    for (var e = a.length, f = _.p(a) ? a.split("") : a, g = 0; g < e; g++) g in f && c.call(d, f[g], g, a)
                };
                _.Ea = Array.prototype.filter ? function(a, c, d) {
                    return Array.prototype.filter.call(a, c, d)
                } : function(a, c, d) {
                    for (var e = a.length, f = [], g = 0, h = _.p(a) ? a.split("") : a, l = 0; l < e; l++)
                        if (l in h) {
                            var q = h[l];
                            c.call(d, q, l, a) && (f[g++] = q)
                        }
                    return f
                };
                _.Fa = Array.prototype.map ? function(a, c, d) {
                    return Array.prototype.map.call(a, c, d)
                } : function(a, c, d) {
                    for (var e = a.length, f = Array(e), g = _.p(a) ? a.split("") : a, h = 0; h < e; h++) h in g && (f[h] = c.call(d, g[h], h, a));
                    return f
                };
                _.Ga = Array.prototype.reduce ? function(a, c, d) {
                    return Array.prototype.reduce.call(a, c, d)
                } : function(a, c, d) {
                    var e = d;
                    (0, _.Da)(a, function(d, g) {
                        e = c.call(void 0, e, d, g, a)
                    });
                    return e
                };
                _.Ha = Array.prototype.some ? function(a, c) {
                    return Array.prototype.some.call(a, c, void 0)
                } : function(a, c) {
                    for (var d = a.length, e = _.p(a) ? a.split("") : a, f = 0; f < d; f++)
                        if (f in e && c.call(void 0, e[f], f, a)) return !0;
                    return !1
                };
                var Oa;
                _.Ia = function() {
                    this.b = {};
                    this.o = {}
                };
                _.ua(_.Ia);
                _.Ka = function(a, c) {
                    a.U = function() {
                        return _.Ja(_.Ia.U(), c)
                    };
                    a.xi = function() {
                        return _.Ia.U().b[c] || null
                    }
                };
                _.Ma = function(a, c) {
                    var d = _.Ia.U();
                    if (a in d.b) {
                        if (d.b[a] != c) throw new La(a);
                    } else {
                        d.b[a] = c;
                        if (c = d.o[a])
                            for (var e = 0, f = c.length; e < f; e++) c[e].b(d.b, a);
                        delete d.o[a]
                    }
                };
                _.Ja = function(a, c) {
                    if (c in a.b) return a.b[c];
                    throw new Na(c);
                };
                Oa = function(a) {
                    _.Ba.call(this);
                    this.ca = a
                };
                _.z(Oa, _.Ba);
                var La = function(a) {
                    Oa.call(this, a)
                };
                _.z(La, Oa);
                var Na = function(a) {
                    Oa.call(this, a)
                };
                _.z(Na, Oa);
                var Qa;
                _.Pa = "bbh bbr bbs has prm sngw so".split(" ");
                Qa = new Aa(_.m);
                _.Ma("api", Qa);
                for (var Ra = "addExtraLink addLink aomc asmc close cp.c cp.l cp.me cp.ml cp.rc cp.rel ela elc elh gpca gpcr lGC lPWF ldb mls noam paa pc pca pcm pw.clk pw.hvr qfaae qfaas qfaau qfae qfas qfau qfhi qm qs qsi rtl sa setContinueCb snaw sncw som sp spd spn spp sps tsl tst up.aeh up.aop up.dpc up.iic up.nap up.r up.sl up.spd up.tp upel upes upet".split(" ").concat(_.Pa), Sa = (0, _.w)(Qa.A, Qa), Ta = 0; Ta < Ra.length; Ta++) {
                    var Ua = "gbar." + Ra[Ta];
                    if (null == _.u(Ua, window)) {
                        var Va = Sa(Ua);
                        _.t(Ua, Va, void 0)
                    }
                }
                _.t("gbar.up.gpd", function() {
                    return ""
                }, void 0);
                var Xa;
                _.Wa = String.prototype.trim ? function(a) {
                    return a.trim()
                } : function(a) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
                };
                _.Ya = function(a, c) {
                    var d = 0;
                    a = (0, _.Wa)(String(a)).split(".");
                    c = (0, _.Wa)(String(c)).split(".");
                    for (var e = Math.max(a.length, c.length), f = 0; 0 == d && f < e; f++) {
                        var g = a[f] || "",
                            h = c[f] || "";
                        do {
                            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                            if (0 == g[0].length && 0 == h[0].length) break;
                            d = Xa(0 == g[1].length ? 0 : (0, window.parseInt)(g[1], 10), 0 == h[1].length ? 0 : (0, window.parseInt)(h[1], 10)) || Xa(0 == g[2].length, 0 == h[2].length) || Xa(g[2], h[2]);
                            g = g[3];
                            h = h[3]
                        } while (0 == d)
                    }
                    return d
                };
                Xa = function(a, c) {
                    return a < c ? -1 : a > c ? 1 : 0
                };
                a: {
                    var $a = _.m.navigator;
                    if ($a) {
                        var ab = $a.userAgent;
                        if (ab) {
                            _.Za = ab;
                            break a
                        }
                    }
                    _.Za = ""
                }
                _.B = function(a) {
                    return -1 != _.Za.indexOf(a)
                };
                var bb = function() {
                    return (_.B("Chrome") || _.B("CriOS")) && !_.B("Edge")
                };
                _.cb = function() {
                    return _.B("iPhone") && !_.B("iPod") && !_.B("iPad")
                };
                _.db = function() {
                    return _.cb() || _.B("iPad") || _.B("iPod")
                };
                _.eb = function(a) {
                    _.eb[" "](a);
                    return a
                };
                _.eb[" "] = _.ta;
                var gb = function(a, c) {
                    var d = fb;
                    return Object.prototype.hasOwnProperty.call(d, a) ? d[a] : d[a] = c(a)
                };
                var nb, wb, xb, fb, Fb;
                _.hb = _.B("Opera");
                _.C = _.B("Trident") || _.B("MSIE");
                _.ib = _.B("Edge");
                _.jb = _.ib || _.C;
                _.kb = _.B("Gecko") && !(-1 != _.Za.toLowerCase().indexOf("webkit") && !_.B("Edge")) && !(_.B("Trident") || _.B("MSIE")) && !_.B("Edge");
                _.lb = -1 != _.Za.toLowerCase().indexOf("webkit") && !_.B("Edge");
                nb = _.m.navigator || null;
                _.mb = nb && nb.platform || "";
                _.ob = _.B("Macintosh");
                _.pb = _.B("Windows");
                _.qb = _.B("Linux") || _.B("CrOS");
                _.rb = _.B("Android");
                _.sb = _.cb();
                _.tb = _.B("iPad");
                _.ub = _.B("iPod");
                _.vb = _.db();
                wb = function() {
                    var a = _.m.document;
                    return a ? a.documentMode : void 0
                };
                a: {
                    var yb = "",
                        zb = function() {
                            var a = _.Za;
                            if (_.kb) return /rv:([^\);]+)(\)|;)/.exec(a);
                            if (_.ib) return /Edge\/([\d\.]+)/.exec(a);
                            if (_.C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                            if (_.lb) return /WebKit\/(\S+)/.exec(a);
                            if (_.hb) return /(?:Version)[ \/]?(\S+)/.exec(a)
                        }();
                    zb && (yb = zb ? zb[1] : "");
                    if (_.C) {
                        var Ab = wb();
                        if (null != Ab && Ab > (0, window.parseFloat)(yb)) {
                            xb = String(Ab);
                            break a
                        }
                    }
                    xb = yb
                }
                _.Bb = xb;
                fb = {};
                _.Cb = function(a) {
                    return gb(a, function() {
                        return 0 <= _.Ya(_.Bb, a)
                    })
                };
                _.Eb = function(a) {
                    return Number(Db) >= a
                };
                var Gb = _.m.document;
                Fb = Gb && _.C ? wb() || ("CSS1Compat" == Gb.compatMode ? (0, window.parseInt)(_.Bb, 10) : 5) : void 0;
                var Db = Fb;
                _.Hb = _.B("Firefox");
                _.Ib = _.cb() || _.B("iPod");
                _.Jb = _.B("iPad");
                _.Kb = _.B("Android") && !(bb() || _.B("Firefox") || _.B("Opera") || _.B("Silk"));
                _.Lb = bb();
                _.Mb = _.B("Safari") && !(bb() || _.B("Coast") || _.B("Opera") || _.B("Edge") || _.B("Silk") || _.B("Android")) && !_.db();
                var Nb = null;
                var Ob, Rb, Ub;
                _.D = function() {};
                Ob = "function" == typeof window.Uint8Array;
                _.E = function(a, c, d, e, f) {
                    a.b = null;
                    c || (c = d ? [d] : []);
                    a.fa = d ? String(d) : void 0;
                    a.B = 0 === d ? -1 : 0;
                    a.w = c;
                    a: {
                        d = a.w.length;
                        c = -1;
                        if (d && (c = d - 1, (d = a.w[c]) && "object" == typeof d && !_.v(d) && !(Ob && d instanceof window.Uint8Array))) {
                            a.C = c - a.B;
                            a.A = d;
                            break a
                        } - 1 < e ? (a.C = Math.max(e, c + 1 - a.B), a.A = null) : a.C = Number.MAX_VALUE
                    }
                    a.G = {};
                    if (f)
                        for (e = 0; e < f.length; e++) c = f[e], c < a.C ? (c += a.B, a.w[c] = a.w[c] || _.Pb) : (_.Qb(a), a.A[c] = a.A[c] || _.Pb)
                };
                _.Pb = [];
                _.Qb = function(a) {
                    var c = a.C + a.B;
                    a.w[c] || (a.A = a.w[c] = {})
                };
                _.F = function(a, c) {
                    if (c < a.C) {
                        c += a.B;
                        var d = a.w[c];
                        return d === _.Pb ? a.w[c] = [] : d
                    }
                    if (a.A) return d = a.A[c], d === _.Pb ? a.A[c] = [] : d
                };
                _.G = function(a, c, d) {
                    a = _.F(a, c);
                    return null == a ? d : a
                };
                _.H = function(a, c, d) {
                    a.b || (a.b = {});
                    if (!a.b[d]) {
                        var e = _.F(a, d);
                        e && (a.b[d] = new c(e))
                    }
                    return a.b[d]
                };
                Rb = function(a) {
                    if (a.b)
                        for (var c in a.b) {
                            var d = a.b[c];
                            if (_.v(d))
                                for (var e = 0; e < d.length; e++) d[e] && d[e].ab();
                            else d && d.ab()
                        }
                };
                _.D.prototype.ab = function() {
                    Rb(this);
                    return this.w
                };
                _.D.prototype.o = Ob ? function() {
                    var a = window.Uint8Array.prototype.toJSON;
                    window.Uint8Array.prototype.toJSON = function() {
                        if (!Nb) {
                            Nb = {};
                            for (var a = 0; 65 > a; a++) Nb[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)
                        }
                        a = Nb;
                        for (var d = [], e = 0; e < this.length; e += 3) {
                            var f = this[e],
                                g = e + 1 < this.length,
                                h = g ? this[e + 1] : 0,
                                l = e + 2 < this.length,
                                q = l ? this[e + 2] : 0,
                                r = f >> 2;
                            f = (f & 3) << 4 | h >> 4;
                            h = (h & 15) << 2 | q >> 6;
                            q &= 63;
                            l || (q = 64, g || (h = 64));
                            d.push(a[r], a[f], a[h], a[q])
                        }
                        return d.join("")
                    };
                    try {
                        return JSON.stringify(this.w &&
                            this.ab(), Sb)
                    } finally {
                        window.Uint8Array.prototype.toJSON = a
                    }
                } : function() {
                    return JSON.stringify(this.w && this.ab(), Sb)
                };
                var Sb = function(a, c) {
                    return _.sa(c) && ((0, window.isNaN)(c) || window.Infinity === c || -window.Infinity === c) ? String(c) : c
                };
                _.D.prototype.toString = function() {
                    Rb(this);
                    return this.w.toString()
                };
                _.D.prototype.clone = function() {
                    return _.Tb(this)
                };
                _.Tb = function(a) {
                    return new a.constructor(Ub(a.ab()))
                };
                Ub = function(a) {
                    if (_.v(a)) {
                        for (var c = Array(a.length), d = 0; d < a.length; d++) {
                            var e = a[d];
                            null != e && (c[d] = "object" == typeof e ? Ub(e) : e)
                        }
                        return c
                    }
                    if (Ob && a instanceof window.Uint8Array) return new window.Uint8Array(a);
                    c = {};
                    for (d in a) e = a[d], null != e && (c[d] = "object" == typeof e ? Ub(e) : e);
                    return c
                };
                _.Wb = function(a, c) {
                    _.Vb[a] = c;
                    c.Cj = a
                };
                _.Vb = {};
                _.Xb = function(a) {
                    _.E(this, a, 0, -1, null)
                };
                _.z(_.Xb, _.D);
                _.I = function(a, c) {
                    return null != a ? !!a : !!c
                };
                _.J = function(a, c) {
                    void 0 == c && (c = "");
                    return null != a ? a : c
                };
                _.K = function(a, c) {
                    void 0 == c && (c = 0);
                    return null != a ? a : c
                };
                var Yb = function(a) {
                    _.E(this, a, 0, -1, null)
                };
                _.z(Yb, _.D);
                _.Zb = function(a) {
                    _.E(this, a, 0, -1, null)
                };
                _.z(_.Zb, _.D);
                var $b = function(a) {
                    _.E(this, a, 0, -1, null)
                };
                _.z($b, _.D);
                $b.prototype.zd = function() {
                    return _.H(this, _.Zb, 14)
                };
                var ac = new $b(window.gbar && window.gbar._CONFIG ? window.gbar._CONFIG[0] : [
                        [, , , , , , , []],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ]),
                    bc;
                bc = _.F(ac, 3);
                _.cc = _.I(bc);
                _.fc = function() {};
                _.t("gbar_._DumpException", function(a) {
                    if (_.cc) throw a;
                    _.fc(a)
                }, void 0);
                var gc = function() {
                    _.A.call(this);
                    this.Hh = ac
                };
                _.z(gc, _.A);
                _.Ka(gc, "cs");
                _.L = function() {
                    return gc.U().Hh
                };
                _.hc = function() {
                    return _.H(_.L(), Yb, 1) || new Yb
                };
                _.Ma("cs", new gc);
                var ic = new function() {
                        this.b = _.H(_.hc(), _.Xb, 8) || new _.Xb
                    },
                    jc = {
                        n: _.K(_.F(ic.b, 2)),
                        r: _.J(_.F(ic.b, 4)),
                        f: _.J(_.F(ic.b, 3)),
                        e: _.J(_.F(ic.b, 5)),
                        m: _.K(_.G(ic.b, 1, 1), 1)
                    };
                _.t("gbar.bv", jc, void 0);
                _.t("gbar.kn", function() {
                    return !0
                }, void 0);
                _.t("gbar.sb", function() {
                    return !1
                }, void 0);
                _.kc = !_.C || _.Eb(9);
                _.lc = !_.kb && !_.C || _.C && _.Eb(9) || _.kb && _.Cb("1.9.1");
                _.mc = _.C && !_.Cb("9");
                _.nc = _.C || _.hb || _.lb;
                _.pc = function() {
                    this.o = "";
                    this.w = _.oc
                };
                _.pc.prototype.jb = !0;
                _.pc.prototype.Xa = function() {
                    return this.o
                };
                _.pc.prototype.Ld = !0;
                _.pc.prototype.b = function() {
                    return 1
                };
                _.oc = {};
                _.qc = function(a) {
                    var c = new _.pc;
                    c.o = a;
                    return c
                };
                _.qc("about:blank");
                _.tc = function() {
                    this.b = "";
                    this.o = _.rc
                };
                _.tc.prototype.jb = !0;
                _.rc = {};
                _.tc.prototype.Xa = function() {
                    return this.b
                };
                _.uc = function(a) {
                    var c = new _.tc;
                    c.b = a;
                    return c
                };
                _.vc = _.uc("");
                _.xc = function() {
                    this.o = "";
                    this.A = _.wc;
                    this.w = null
                };
                _.xc.prototype.Ld = !0;
                _.xc.prototype.b = function() {
                    return this.w
                };
                _.xc.prototype.jb = !0;
                _.xc.prototype.Xa = function() {
                    return this.o
                };
                _.wc = {};
                _.yc = function(a, c) {
                    var d = new _.xc;
                    d.o = a;
                    d.w = c;
                    return d
                };
                _.yc("<!DOCTYPE html>", 0);
                _.zc = _.yc("", 0);
                _.Ac = _.yc("<br>", 0);
                _.Bc = function(a) {
                    var c = !1,
                        d;
                    return function() {
                        c || (d = a(), c = !0);
                        return d
                    }
                }(function() {
                    var a = window.document.createElement("div");
                    a.innerHTML = "<div><div></div></div>";
                    var c = a.firstChild.firstChild;
                    a.innerHTML = "";
                    return !c.parentElement
                });
                var Cc = function(a) {
                    _.E(this, a, "og.botreq", -1, null)
                };
                _.z(Cc, _.D);
                _.Wb("og.botreq", Cc);
                var Ec = function(a) {
                    _.E(this, a, "og.botresp", -1, Dc)
                };
                _.z(Ec, _.D);
                var Dc = [1];
                _.Wb("og.botresp", Ec);
            } catch (e) {
                _._DumpException(e)
            }
            try {
                _.t("gbar.elr", function() {
                    return {
                        es: {
                            f: 152,
                            h: 60,
                            m: 30
                        },
                        mo: "md",
                        vh: window.innerHeight || 0,
                        vw: window.innerWidth || 0
                    }
                }, void 0);
            } catch (e) {
                _._DumpException(e)
            }
        })(this.gbar_);
        // Google Inc.
    </script>
</head>

<body class="hp vasq" onload="document.f&amp;&amp;document.f.q.focus();document.gbqf&amp;&amp;document.gbqf.q.focus();if(document.images)new Image().src='/images/nav_logo242.png'" id="gsr">
    <div class="ctr-p" id="viewport">
        <style>
            @font-face {
                font-family: 'Noto Naskh Arabic UI';
                font-style: normal;
                font-weight: 400;
                src: local('Noto Naskh Arabic UI'), local('NotoNaskhArabicUI'), url(//fonts.gstatic.com/s/notonaskharabicui/v4/9XU6lIJqkU_PWDHIY3lkVjo6pdPHBQyThgcg.woff2)format('woff2');
            }
            
            .TSPr2b {
                color: #fff;
                height: 1px;
                overflow: hidden;
                position: absolute;
                width: 1px
            }
            
            .qosSob {
                font-family: Noto Naskh Arabic UI
            }
        </style>
        <div class="TSPr2b qosSob" aria-hidden="true">.<b>.</b></div>
        <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
            (function() {
                var l = '400';
                var font = 'Noto Naskh Arabic UI';

                function a() {
                    var b = c,
                        e = document.fonts.load(b + " 10pt " + font);
                    google.wf && e.then(function() {
                        google.wf["e" + b] = Math.round(window.performance.now())
                    })
                };
                if (document.fonts && document.fonts.load)
                    for (var d = l.split(","), f = 0, c = void 0; c = d[f]; ++f) a();
            })();
        </script>
        <div id="doc-info"></div>
        <div id="cst">
            <style>
                .y,
                .yp,
                .yf,
                .yi,
                .yl,
                .ye {}
                
                .z1asCe,
                .qa__svg-icon {
                    display: inline-block;
                    fill: currentColor;
                    height: 24px;
                    line-height: 24px;
                    position: relative;
                    width: 24px
                }
                
                .z1asCe svg,
                .qa__svg-icon svg {
                    display: block;
                    height: 100%;
                    width: 100%
                }
            </style>
        </div>
        <style>
            @media only screen and (max-width:580px) {
                #gb div {
                    display: none
                }
            }
        </style>
        <div class="jhp" id="searchform">
            <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
                (function() {
                    var _j = 1280;
                    try {
                        var s = document.getElementById('searchform');
                        var w = document['body'] && document.body['offsetWidth'];
                        if (s && w && w >= _j) {
                            s.className += ' big';
                        }
                    } catch (e) {}
                })();
            </script>
            <style>
                #gb {
                    font-size: 13px
                }
                
                #gb {
                    position: relative;
                    top: 8px
                }
                
                div#searchform {
                    min-width: 980px;
                    z-index: 103
                }
                
                div.sfbg,
                div.sfbgg {
                    min-width: 980px;
                    height: 64px
                }
                
                .sfbgx {
                    background-color: #fafafa;
                    border-bottom: 1px solid #ebebeb;
                    height: 85px;
                    position: absolute;
                    width: 100%;
                    min-width: 980px
                }
                
                .hp .sfbgx {
                    display: none
                }
                
                .big form#tsf,
                form#tsf {
                    width: auto;
                    max-width: 784px;
                    overflow: hidden
                }
                
                #searchform.big>#tsf {
                    max-width: 784px
                }
                
                .big div.tsf-p,
                form>div.tsf-p {
                    margin: -1px 0 0;
                    padding-left: 0
                }
                
                div#viewport {
                    position: absolute;
                    top: 0;
                    width: 100%
                }
                
                div#searchform.jhp {
                    margin-top: 0
                }
                
                #searchform.big.jhp>#tsf {
                    max-width: none
                }
                
                .jhp>#gb {
                    position: absolute;
                    top: -295px;
                    left: 0;
                    width: 100%
                }
                
                .jhp>#tsf {
                    max-width: none
                }
            </style>
            <div id="gb">
                <div id="gbw">
                    <div style="top:0;left:0;right:0;width:100%">
                        <div class="gb_jb gb_Qg gb_R gb_Pg gb_Tg" data-ogsr-up="">
                            <div class="gb_pe gb_R gb_Qg gb_Hg">
                                <div class="gb_Q gb_R"><a dir="ltr" class="gb_P" data-pid="23" href="https://mail.google.com/mail/?tab=wm">Gmail</a></div>
                                <div class="gb_Q gb_R"><a class="gb_P" data-pid="2" href="https://www.google.com.eg/imghp?hl=ar&amp;tab=wi">صور</a></div>
                            </div>
                            <div class="gb_Dc gb_Qg gb_R">
                                <div class="gb_aa" id="gbsfw" style="background-color:#eee;min-width:376px"></div>
                                <div class="gb_8 gb_8c gb_R" id="gbwa">
                                    <div class="gb_Pc">
                                        <a class="gb_b gb_ec" href="https://www.google.com.eg/intl/ar/options/" title="تطبيقات Google" aria-expanded="false" data-ogsr-alt="" role="button" tabindex="0"></a>
                                        <div class="gb_tb"></div>
                                        <div class="gb_sb"></div>
                                    </div>
                                </div>
                                <div class="gb_Ag gb_R">
                                    <div class="gb_Pc"><a class="gb_ve gb_Aa gb_Fb" id="gb_70" href="https://accounts.google.com/ServiceLogin?hl=ar&amp;passive=true&amp;continue=https://www.google.com/" target="_top">تسجيل الدخول</a>
                                        <div class="gb_tb"></div>
                                        <div class="gb_sb"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sfbg nojsv" style="margin-top:-20px">
                <div class="sfbgg"></div>
            </div>
            <form class="tsf nj" action="/search" style="overflow:visible" id="tsf" method="GET" name="f" onsubmit="return q.value!=''" role="search">
                <div id="tophf">
                    <input name="source" type="hidden" value="hp">
                    <input value="RcKFW621FY_5kwX_sZCYAw" name="ei" type="hidden">
                </div>
                <div class="tsf-p">
                    <div class="nojsv logocont" id="logocont">
                        <h1><a href="https://www.google.com/webhp?hl=ar&amp;sa=X&amp;ved=0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQPAgD" title="إذهب إلى صفحة Google الرئيسية" id="logo" data-hveid="3"><img src="/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png" alt="Google" height="44" width="120" onload="typeof google==='object'&&google.aft&&google.aft(this)"></a></h1></div>
                    <div class="sfibbbc">
                        <div class="sbtc" id="sbtc">
                            <div class="sbibtd">
                                <div class="sfsbc">
                                    <div class="nojsb"> </div>
                                </div>
                                <div class="sbibod" id="sfdiv">
                                    <button class="sbico-c" value="بحث" aria-label="بحث Google‏" id="mKlEF" name="btnG" type="submit"><span class="sbico z1asCe MZy1Rb"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span></button>
                                    <div class="lst-c">
                                        <input class="lst lst-tbb sbibps" id="lst-ib" maxlength="2048" name="q" autocomplete="off" title="بحث" type="text" value="" aria-label="بحث">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="pocs" style="display:none;right:0px;white-space:nowrap;position:absolute">
                                <div id="pocs0"><span>بحث <span>Google</span> الفوري غير متوفر. يُرجى الضغط على Enter للبحث.</span>&nbsp;<a href="//support.google.com/websearch/answer/186645?hl=ar">مزيد من المعلومات</a></div>
                                <div id="pocs1"><span>Google</span> Instant متوقف بسبب سرعة الاتصال. اضغط Enter للبحث.</div>
                                <div id="pocs2">اضغط Enter للبحث</div>
                            </div>
                        </div>
                    </div>
                    <div class="jsb" style="padding-top:18px">
                        <center>
                            <input value="بحث Google‏" aria-label="بحث Google‏" name="btnK" type="submit" jsaction="sf.chk">
                            <input value="ضربة حظ" aria-label="ضربة حظ" name="btnI" type="submit" jsaction="sf.lck">
                        </center>
                    </div>
                </div>
                <div id="sbfbl" style="display:none" data-async-context="async_id:duf3-46;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;open:0;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:46">
                    <style>
                        a.duf3 {
                            color: #777;
                            float: left;
                            font-style: italic;
                            tap-highlight-color: rgba(0, 0, 0, 0);
                            tap-highlight-color: rgba(0, 0, 0, 0)
                        }
                        
                        a.IKDlBc {
                            color: rgba(0, 0, 0, .54);
                            float: none;
                            font-style: normal
                        }
                        
                        a.aciXEb {
                            padding: 0 5px;
                            background: rgba(255, 255, 255, .9);
                        }
                        
                        .RTZ84b {
                            color: #9e9e9e;
                            cursor: pointer;
                            padding-left: 8px
                        }
                        
                        .XEKxtf {
                            color: #9e9e9e;
                            float: left;
                            font-size: 12px;
                            padding-bottom: 4px
                        }
                    </style>
                    <div jscontroller="xz7cCd" style="display:none" jsaction="rcuQ6b:npT2md"></div>
                    <div id="duf3-46" data-jiis="up" data-async-type="duffy3" data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes" class="y yp" data-ved="0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQ-0EIBA"></div><a class="duf3 aciXEb" href="#" id="sbfblt" data-async-trigger="duf3-46" jsaction="async.u" data-ved="0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQtw8IBQ">الإبلاغ عن توقعات غير ملائمة</a></div>
            </form>
        </div>
        <div class="sfbgx"></div>
        <div id="gac_scont"></div>
        <div jscontroller="WgDvvc" jsdata="hE2vdf;;B/quwk" jsaction="rcuQ6b:npT2md"></div>
        <div class="content" id="main"><span class="ctr-p" id="body"><center><div style="height:233px;margin-top:89px" id="lga"><img alt="Google" height="92" id="hplogo" src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x" style="padding-top:109px" width="272" onload="window.lol&&lol()"></div><div style="height:118px"></div><div id="prm-pt" style="margin-top:12px"><script nonce="8U4UtVRo0abbvUMJ2pP0EA==">window.gbar&&gbar.up&&gbar.up.tp&&gbar.up.tp();</script><div id="gws-output-pages-elements-homepage_additional_languages__als"><style>#gws-output-pages-elements-homepage_additional_languages__als{font-size:small;margin-bottom:24px}#SIvCob{display:inline-block;line-height:28px;}#SIvCob a{padding:0 3px;}.H6sW5{display:inline-block;margin:0 2px;white-space:nowrap}.z4hgWe{display:inline-block;margin:0 2px}</style><div id="SIvCob">محرّك بحث Google متوفّر باللغة:  <a dir="ltr" href="https://www.google.com/setprefs?sig=0_u5gjcGLkd7na6S6fmEeV5trU-t4%3D&amp;hl=en&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQ2ZgBCAg">English</a>  </div></div><div id="swml"></div></div></center></span>
            <div class="ctr-p" id="footer">
                <div id="fbarcnt">
                    <div id="footcnt">
                        <style>
                            .fmulti {}
                            
                            .loc {}
                            
                            .swml-src {}
                            
                            .swml-upd {}
                            
                            .swml-loc {}
                            
                            .GNlFYb {
                                color: #777
                            }
                            
                            .p2Kmnc {
                                color: #222;
                                font-size: 14px;
                                font-weight: normal;
                                tap-highlight-color: rgba(0, 0, 0, 0)
                            }
                            
                            .Seo5Sb {
                                display: inline-block;
                                opacity: 0.55;
                                vertical-align: top
                            }
                            
                            a.p2Kmnc:hover .Seo5Sb,
                            a.p2Kmnc:active .Seo5Sb {
                                opacity: 1.0
                            }
                            
                            .GNlFYb {
                                margin: 40px 0
                            }
                            
                            .TfEe9d {
                                margin-left: 10px
                            }
                            
                            .EvHmz {
                                bottom: 0;
                                right: 0;
                                position: absolute;
                                left: 0
                            }
                            
                            .M6hT6 {
                                background: #f2f2f2;
                                right: 0;
                                left: 0;
                                -webkit-text-size-adjust: none
                            }
                            
                            .hRvfYe #fsettl:hover {
                                text-decoration: underline
                            }
                            
                            .hRvfYe #fsett a:hover {
                                text-decoration: underline
                            }
                            
                            .hRvfYe a:hover {
                                text-decoration: underline
                            }
                            
                            .fbar p {
                                display: inline
                            }
                            
                            .fbar a,
                            #fsettl {
                                text-decoration: none;
                                white-space: nowrap
                            }
                            
                            .fbar {
                                margin-right: -27px
                            }
                            
                            .Fx4vi {
                                padding-right: 27px;
                                margin: 0 !important
                            }
                            
                            .In26Ec {
                                padding: 0 !important;
                                margin: 0 !important
                            }
                            
                            #fbarcnt {
                                display: block
                            }
                            
                            .smiUbb img {
                                margin-left: 4px
                            }
                            
                            .smiUbb a,
                            .M6hT6 #swml a {
                                text-decoration: none
                            }
                            
                            .fmulti {
                                text-align: center
                            }
                            
                            .fmulti #fsr {
                                display: block;
                                float: none
                            }
                            
                            .fmulti #fuser {
                                display: block;
                                float: none
                            }
                            
                            #fuserm {
                                line-height: 25px
                            }
                            
                            #fsr {
                                float: left;
                                white-space: nowrap
                            }
                            
                            #fsl {
                                white-space: nowrap
                            }
                            
                            #fsett {
                                background: #fff;
                                border: 1px solid #999;
                                bottom: 30px;
                                padding: 10px 0;
                                position: absolute;
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                                text-align: right;
                                z-index: 104
                            }
                            
                            #fsett a {
                                display: block;
                                line-height: 44px;
                                padding: 0 20px;
                                text-decoration: none;
                                white-space: nowrap
                            }
                            
                            .p2Kmnc {
                                padding: 8px 16px;
                                margin-left: 10px
                            }
                            
                            .B4GxFc {
                                margin-right: 166px
                            }
                            
                            #fbar {
                                background: #f2f2f2;
                                border-top: 1px solid #e4e4e4;
                                line-height: 40px;
                                min-width: 980px
                            }
                            
                            .yBWvle {
                                margin-right: 166px
                            }
                            
                            .fbar p,
                            .fbar a,
                            #fsettl,
                            #fsett a {
                                color: #777
                            }
                            
                            .fbar a:hover,
                            #fsett a:hover {
                                color: #333
                            }
                            
                            .fbar {
                                font-size: small
                            }
                            
                            #fuser {
                                float: left
                            }
                            
                            .smiUbb {
                                margin-right: 166px;
                                line-height: 15px;
                            }
                        </style>
                        <style>
                            #fsl {
                                margin-right: 30px
                            }
                            
                            #fsr {
                                margin-left: 30px
                            }
                            
                            .fmulti #fsl {
                                margin-right: 0
                            }
                            
                            .fmulti #fsr {
                                margin-left: 0
                            }
                        </style>
                        <div class="EvHmz hRvfYe" id="fbar">
                            <div class="fbar">
                                <div class="b2hzT">
                                    <style>
                                        .b0KoTc {
                                            color: rgba(0, 0, 0, .54);
                                            padding-right: 27px
                                        }
                                        
                                        .b0KoTc .UnWzvd {
                                            margin-right: 13px
                                        }
                                        
                                        .Q8LRLc {
                                            font-size: 15px
                                        }
                                        
                                        .b0KoTc {
                                            margin-right: 30px;
                                            text-align: right
                                        }
                                        
                                        .b2hzT {
                                            border-bottom: 1px solid #e4e4e4
                                        }
                                    </style>
                                    <div class="b0KoTc"> <span class="Q8LRLc">مصر</span> </div>
                                </div><span id="fsr"><a class="Fx4vi" href="//www.google.com/intl/ar_eg/policies/privacy/?fg=1">الخصوصية</a><a class="Fx4vi" href="//www.google.com/intl/ar_eg/policies/terms/?fg=1">البنود</a><span style="display:inline-block;position:relative"><a class="Fx4vi" href="https://www.google.com/preferences?hl=ar" id="fsettl" aria-controls="fsett" aria-expanded="false" role="button" jsaction="foot.cst">الإعدادات</a><span id="fsett" style="display:none"><a href="https://www.google.com/preferences?hl=ar&amp;fg=1">إعدادات البحث</a><span id="advsl"><a href="/advanced_search?hl=ar&amp;fg=1">بحث متقدم</a></span><a href="/history/optout?hl=ar&amp;fg=1">السجلّ</a><a href="//support.google.com/websearch/?p=ws_results_help&amp;hl=ar&amp;fg=1">مساعدة البحث</a><a href="#" data-bucket="websearch" id="dk2qOd" target="_blank" jsaction="gf.sf" data-ved="0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQLggL">إرسال تعليقات</a></span>
                                </span>
                                </span><span id="fsl"><a class="Fx4vi" href="https://www.google.com/intl/ar_eg/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpafooter&amp;fg=1" onmousedown="return rwt(this,'','','','','AOvVaw2UHxnInBdQ7YVDMUWbfivj','','0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQkdQCCAw','','',event)">الإعلانات</a><a class="Fx4vi" href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&amp;utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=google_hpbfooter&amp;fg=1" onmousedown="return rwt(this,'','','','','AOvVaw2SJ4zwRVXKyZr53qG9dm4K','','0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQktQCCA0','','',event)">الأعمال</a><a class="Fx4vi" href="https://www.google.com/intl/ar_eg/about/?utm_source=google.com&amp;utm_medium=referral&amp;utm_campaign=hp-footer&amp;fg=1" onmousedown="return rwt(this,'','','','','AOvVaw1ZsZEuy1ZzO5jbzCCaM-q4','','0ahUKEwjt69r825DdAhWP_KQKHf8YBDMQkNQCCA4','','',event)">حول</a></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footc">
                <div id="xfoot">
                    <div id="xjsd"></div>
                    <div id="xjsi">
                        <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
                            (function() {
                                function c(b) {
                                    window.setTimeout(function() {
                                        var a = document.createElement("script");
                                        a.src = b;
                                        google.timers && google.timers.load.t && google.tick && google.tick("load", {
                                            gen204: "xjsls",
                                            clearcut: 31
                                        });
                                        document.getElementById("xjsd").appendChild(a)
                                    }, 0)
                                }
                                google.dljp = function(b, a) {
                                    google.xjsu = b;
                                    c(a)
                                };
                                google.dlj = c;
                            }).call(this);
                            if (!google.xjs) {
                                window._ = window._ || {};
                                window._DumpException = window._._DumpException = function(e) {
                                    throw e
                                };
                                window._F_installCss = window._._F_installCss = function(c) {};
                                google.dljp('/xjs/_/js/k\x3dxjs.s.ar.gwRcLGU_4CI.O/m\x3dsx,sb,cdos,cr,elog,hsm,jsa,r,d,csi/am\x3dYBZhNoYAIv-nZCChQCsYYYEJFAwi/rt\x3dj/d\x3d1/dg\x3d0/rs\x3dACT90oHcMYAx78POqpGsHkivc4K8F-VQeA', '/xjs/_/js/k\x3dxjs.s.ar.JSU9d8rvSsA.O/m\x3dsx,sb,cdos,cr,elog,hsm,jsa,r,d,csi/am\x3dYBZhNoYAIv-nZCChQCsYYYEJFAwi/rt\x3dj/d\x3d1/dg\x3d0/rs\x3dACT90oG7t9p5Q-M03aSHZpWPEXIMbx-NOw');
                                google.xjs = 1;
                            }
                            google.pmc = {
                                "sx": {},
                                "sb": {
                                    "agen": false,
                                    "cgen": true,
                                    "client": "psy-ab",
                                    "dh": true,
                                    "dhqt": true,
                                    "ds": "",
                                    "ffql": "en",
                                    "fl": true,
                                    "host": "google.com",
                                    "isbh": 44,
                                    "kbl": "ar",
                                    "kbv": 11,
                                    "mara": true,
                                    "msgs": {
                                        "cibl": "محو البحث",
                                        "dym": "هل تقصد :",
                                        "flf": "الإبلاغ عن توقعات غير ملائمة",
                                        "lcky": "ضربة حظ",
                                        "lml": "مزيد من المعلومات",
                                        "oskt": "أدوات الإدخال",
                                        "psrc": "تمت إزالة هذا البحث من \u003Ca href=\"/history\"\u003Eسِجل البحث\u003C/a\u003E.",
                                        "psrl": "إزالة",
                                        "sbit": "البحث بحسب الصور",
                                        "srch": "بحث Google‏"
                                    },
                                    "nds": true,
                                    "ovr": {},
                                    "pq": "",
                                    "refpd": true,
                                    "rfs": [],
                                    "sbas": "0 3px 8px 0 rgba(0,0,0,0.2),0 0 0 1px rgba(0,0,0,0.08)",
                                    "sbpl": 16,
                                    "sbpr": 16,
                                    "scd": 10,
                                    "sce": 4,
                                    "stok": "KEOPyDGG2U76uHPW0AJTcTcBdiE",
                                    "uhde": false
                                },
                                "aa": {},
                                "abd": {
                                    "abd": false,
                                    "deb": false,
                                    "det": false
                                },
                                "async": {},
                                "cdos": {
                                    "bih": 693,
                                    "biw": 1366,
                                    "cdobsel": false,
                                    "dpr": "1"
                                },
                                "cr": {
                                    "eup": false,
                                    "qir": false,
                                    "rctj": true,
                                    "ref": false,
                                    "uff": false
                                },
                                "ddls": {},
                                "dvl": {
                                    "cookie_secure": true,
                                    "cookie_timeout": 86400,
                                    "jsc": "[null,null,null,30000,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[\"86400000\",\"604800000\",2.0]\n,null,1]\n",
                                    "msg_err": "الموقع غير متوفر",
                                    "msg_gps": "استخدام GPS",
                                    "msg_unk": "غير معروف",
                                    "msg_upd": "تحديث الموقع الجغرافي",
                                    "msg_use": "استخدام الموقع الدقيق"
                                },
                                "elog": {},
                                "foot": {
                                    "pf": true,
                                    "po": false,
                                    "qe": false
                                },
                                "gf": {
                                    "pid": 196
                                },
                                "hsm": {},
                                "ipv6": {},
                                "jsa": {
                                    "csi": true,
                                    "csir": 100
                                },
                                "jsaleg": {},
                                "llc": {},
                                "lu": {},
                                "m": {
                                    "ab": {
                                        "on": true
                                    },
                                    "msgs": {
                                        "hPers": "إخفاء النتائج الخاصّة",
                                        "hPersD": "يتم حاليًا إخفاء النتائج الخاصّة",
                                        "sPers": "عرض جميع النتائج",
                                        "sPersD": "يتم حاليًا عرض النتائج الخاصّة"
                                    }
                                },
                                "mu": {
                                    "murl": "https://adservice.google.com/adsid/google/ui"
                                },
                                "r": {},
                                "sf": {},
                                "d": {},
                                "csi": {
                                    "cni": true
                                },
                                "TG8rFw": {
                                    "sd": "1"
                                },
                                "Iz7bbg": {},
                                "TI0G6A": {},
                                "jsG33w": {},
                                "71W8GA": {},
                                "7Fjppg": {},
                                "I7Pl5g": {},
                                "JC6ZFg": {},
                                "pfgvMg": {},
                                "bnhGTQ": {},
                                "ZI/YVQ": {},
                                "4RZUyg": {},
                                "flRZRg": {},
                                "/nNC3A": {},
                                "v52Mdg": {},
                                "dKapAA": {},
                                "x5vR5A": {},
                                "DDSUHw": {},
                                "WZXAwQ": {},
                                "10Kacw": {},
                                "puoTkg": {},
                                "ITl3wQ": {},
                                "v0BWCA": {},
                                "PUB9yA": {},
                                "2kDaKA": {},
                                "k9pyPA": {},
                                "U5B21g": {},
                                "c+PT4g": {},
                                "/1S6iw": {},
                                "DPBNMg": {},
                                "NpA8BQ": {},
                                "C+zmgA": {},
                                "/K7T0g": {},
                                "A/Ucpg": {},
                                "zobSAA": {},
                                "novU4w": {},
                                "cm4D8w": {}
                            };
                            google.plm(['aa', 'abd', 'async', 'dvl', 'foot', 'ipv6', 'lu', 'm', 'mu', 'sf']);
                            google.x(null, function() {});
                            (function() {
                                var r = [];
                                google.plm(r);
                            })();
                            (function() {
                                var m = [];
                                google.jsc && google.jsc.m(m);
                            })();
                            (function() {
                                var m = ['B/quwk', '[\x22https://www.google.com.eg/domainless/read?igu\\u003d1\x22,\x22ALAmJdGpxxeE3wpVeoGEIghPbcSs0JotKQ:1535492677384\x22,3]\n'];
                                for (var a = window, b = m, c = window.W_jd || {}, d = 0; d < b.length; d += 2) c[b[d]] = JSON.parse(b[d + 1]);
                                a.W_jd = c;
                            })();
                        </script>
                    </div>
                </div>
            </div>
            <div id="lb"></div>
        </div>
        <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
            this.gbar_ = this.gbar_ || {};
            (function(_) {
                var window = this;
                try {
                    var Pc, Uc, Xc, bd, cd, dd, ed, fd, gd, hd, md, nd, sd, td;
                    _.Ic = function(a, c) {
                        var d = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var c = d.slice();
                            c.push.apply(c, arguments);
                            return a.apply(this, c)
                        }
                    };
                    _.Jc = function(a) {
                        a && "function" == typeof a.ga && a.ga()
                    };
                    _.Kc = function(a, c) {
                        c = _.Ic(_.Jc, c);
                        a.fa ? _.n(void 0) ? c.call(void 0) : c() : (a.La || (a.La = []), a.La.push(_.n(void 0) ? (0, _.w)(c, void 0) : c))
                    };
                    _.Lc = function(a) {
                        var c = _.va(a);
                        return "array" == c || "object" == c && "number" == typeof a.length
                    };
                    _.Mc = function(a) {
                        return "function" == _.va(a)
                    };
                    _.Nc = function(a) {
                        var c = typeof a;
                        return "object" == c && null != a || "function" == c
                    };
                    Pc = function(a) {
                        a: {
                            var c = Oc;
                            for (var d = a.length, e = _.p(a) ? a.split("") : a, f = 0; f < d; f++)
                                if (f in e && c.call(void 0, e[f], f, a)) {
                                    c = f;
                                    break a
                                }
                            c = -1
                        }
                        return 0 > c ? null : _.p(a) ? a.charAt(c) : a[c]
                    };
                    _.Qc = function(a, c) {
                        return 0 <= (0, _.Ca)(a, c)
                    };
                    _.Rc = function(a, c) {
                        c = (0, _.Ca)(a, c);
                        var d;
                        (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
                        return d
                    };
                    _.Sc = function(a) {
                        var c = a.length;
                        if (0 < c) {
                            for (var d = Array(c), e = 0; e < c; e++) d[e] = a[e];
                            return d
                        }
                        return []
                    };
                    _.Tc = function(a, c, d) {
                        for (var e in a) c.call(d, a[e], e, a)
                    };
                    Uc = function(a, c) {
                        for (var d in a)
                            if (c.call(void 0, a[d], d, a)) return !0;
                        return !1
                    };
                    _.Vc = function(a) {
                        var c = [],
                            d = 0,
                            e;
                        for (e in a) c[d++] = a[e];
                        return c
                    };
                    _.Wc = function(a) {
                        var c = [],
                            d = 0,
                            e;
                        for (e in a) c[d++] = e;
                        return c
                    };
                    Xc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                    _.Yc = function(a, c) {
                        for (var d, e, f = 1; f < arguments.length; f++) {
                            e = arguments[f];
                            for (d in e) a[d] = e[d];
                            for (var g = 0; g < Xc.length; g++) d = Xc[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
                        }
                    };
                    _.Zc = function(a, c) {
                        return 0 == a.lastIndexOf(c, 0)
                    };
                    _.$c = function(a) {
                        return /^[\s\xa0]*$/.test(a)
                    };
                    _.ad = function(a) {
                        return (0, window.encodeURIComponent)(String(a))
                    };
                    bd = /&/g;
                    cd = /</g;
                    dd = />/g;
                    ed = /"/g;
                    fd = /'/g;
                    gd = /\x00/g;
                    hd = /[\x00&<>"']/;
                    _.id = function(a) {
                        if (!hd.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(bd, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(cd, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(dd, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ed, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(fd, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(gd, "&#0;"));
                        return a
                    };
                    _.jd = function(a) {
                        var c = Number(a);
                        return 0 == c && _.$c(a) ? window.NaN : c
                    };
                    _.kd = function(a, c) {
                        try {
                            return _.eb(a[c]), !0
                        } catch (d) {}
                        return !1
                    };
                    md = function() {
                        this.b = ld
                    };
                    md.prototype.o = function() {
                        return !!this.b
                    };
                    nd = {
                        cellpadding: "cellPadding",
                        cellspacing: "cellSpacing",
                        colspan: "colSpan",
                        frameborder: "frameBorder",
                        height: "height",
                        maxlength: "maxLength",
                        nonce: "nonce",
                        role: "role",
                        rowspan: "rowSpan",
                        type: "type",
                        usemap: "useMap",
                        valign: "vAlign",
                        width: "width"
                    };
                    _.qd = function(a, c) {
                        _.Tc(c, function(c, e) {
                            c && "object" == typeof c && c.jb && (c = c.Xa());
                            "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : nd.hasOwnProperty(e) ? a.setAttribute(nd[e], c) : _.Zc(e, "aria-") || _.Zc(e, "data-") ? a.setAttribute(e, c) : a[e] = c
                        })
                    };
                    _.rd = function(a) {
                        return a.parentWindow || a.defaultView
                    };
                    sd = function(a) {
                        if (a && "number" == typeof a.length) {
                            if (_.Nc(a)) return "function" == typeof a.item || "string" == typeof a.item;
                            if (_.Mc(a)) return "function" == typeof a.item
                        }
                        return !1
                    };
                    td = function(a, c, d) {
                        function e(d) {
                            d && c.appendChild(_.p(d) ? a.createTextNode(d) : d)
                        }
                        for (var f = 2; f < d.length; f++) {
                            var g = d[f];
                            !_.Lc(g) || _.Nc(g) && 0 < g.nodeType ? e(g) : (0, _.Da)(sd(g) ? _.Sc(g) : g, e)
                        }
                    };
                    _.ud = function(a, c) {
                        var d = String(c[0]),
                            e = c[1];
                        if (!_.kc && e && (e.name || e.type)) {
                            d = ["<", d];
                            e.name && d.push(' name="', _.id(e.name), '"');
                            if (e.type) {
                                d.push(' type="', _.id(e.type), '"');
                                var f = {};
                                _.Yc(f, e);
                                delete f.type;
                                e = f
                            }
                            d.push(">");
                            d = d.join("")
                        }
                        d = a.createElement(d);
                        e && (_.p(e) ? d.className = e : _.v(e) ? d.className = e.join(" ") : _.qd(d, e));
                        2 < c.length && td(a, d, c);
                        return d
                    };
                    var wd;
                    _.vd = function(a) {
                        this.b = a || {
                            cookie: ""
                        }
                    };
                    _.k = _.vd.prototype;
                    _.k.set = function(a, c, d, e, f, g) {
                        if (/[;=\s]/.test(a)) throw Error("t`" + a);
                        if (/[;\r\n]/.test(c)) throw Error("u`" + c);
                        _.n(d) || (d = -1);
                        f = f ? ";domain=" + f : "";
                        e = e ? ";path=" + e : "";
                        g = g ? ";secure" : "";
                        d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.x)() + 1E3 * d)).toUTCString();
                        this.b.cookie = a + "=" + c + f + e + d + g
                    };
                    _.k.get = function(a, c) {
                        for (var d = a + "=", e = (this.b.cookie || "").split(";"), f = 0, g; f < e.length; f++) {
                            g = (0, _.Wa)(e[f]);
                            if (0 == g.lastIndexOf(d, 0)) return g.substr(d.length);
                            if (g == a) return ""
                        }
                        return c
                    };
                    _.k.remove = function(a, c, d) {
                        var e = _.n(this.get(a));
                        this.set(a, "", 0, c, d);
                        return e
                    };
                    _.k.Sa = function() {
                        return wd(this).keys
                    };
                    _.k.Va = function() {
                        return wd(this).values
                    };
                    _.k.xc = function() {
                        return !this.b.cookie
                    };
                    _.k.clear = function() {
                        for (var a = wd(this).keys, c = a.length - 1; 0 <= c; c--) this.remove(a[c])
                    };
                    wd = function(a) {
                        a = (a.b.cookie || "").split(";");
                        for (var c = [], d = [], e, f, g = 0; g < a.length; g++) f = (0, _.Wa)(a[g]), e = f.indexOf("="), -1 == e ? (c.push(""), d.push(f)) : (c.push(f.substring(0, e)), d.push(f.substring(e + 1)));
                        return {
                            keys: c,
                            values: d
                        }
                    };
                    _.xd = new _.vd("undefined" == typeof window.document ? null : window.document);
                    _.xd.o = 3950;
                    var yd = function(a, c) {
                        this.w = a;
                        this.A = c;
                        this.o = 0;
                        this.b = null
                    };
                    yd.prototype.get = function() {
                        if (0 < this.o) {
                            this.o--;
                            var a = this.b;
                            this.b = a.next;
                            a.next = null
                        } else a = this.w();
                        return a
                    };
                    var zd = function(a, c) {
                        a.A(c);
                        100 > a.o && (a.o++, c.next = a.b, a.b = c)
                    };
                    var Ad = function(a) {
                            _.m.setTimeout(function() {
                                throw a;
                            }, 0)
                        },
                        Bd, Cd = function() {
                            var a = _.m.MessageChannel;
                            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.B("Presto") && (a = function() {
                                var a = window.document.createElement("IFRAME");
                                a.style.display = "none";
                                a.src = "";
                                window.document.documentElement.appendChild(a);
                                var c = a.contentWindow;
                                a = c.document;
                                a.open();
                                a.write("");
                                a.close();
                                var d = "callImmediate" + Math.random(),
                                    e = "file:" == c.location.protocol ? "*" : c.location.protocol +
                                    "//" + c.location.host;
                                a = (0, _.w)(function(a) {
                                    if (("*" == e || a.origin == e) && a.data == d) this.port1.onmessage()
                                }, this);
                                c.addEventListener("message", a, !1);
                                this.port1 = {};
                                this.port2 = {
                                    postMessage: function() {
                                        c.postMessage(d, e)
                                    }
                                }
                            });
                            if ("undefined" !== typeof a && !_.B("Trident") && !_.B("MSIE")) {
                                var c = new a,
                                    d = {},
                                    e = d;
                                c.port1.onmessage = function() {
                                    if (_.n(d.next)) {
                                        d = d.next;
                                        var a = d.se;
                                        d.se = null;
                                        a()
                                    }
                                };
                                return function(a) {
                                    e.next = {
                                        se: a
                                    };
                                    e = e.next;
                                    c.port2.postMessage(0)
                                }
                            }
                            return "undefined" !== typeof window.document && "onreadystatechange" in
                                window.document.createElement("SCRIPT") ? function(a) {
                                    var c = window.document.createElement("SCRIPT");
                                    c.onreadystatechange = function() {
                                        c.onreadystatechange = null;
                                        c.parentNode.removeChild(c);
                                        c = null;
                                        a();
                                        a = null
                                    };
                                    window.document.documentElement.appendChild(c)
                                } : function(a) {
                                    _.m.setTimeout(a, 0)
                                }
                        };
                    var Dd = function() {
                            this.o = this.b = null
                        },
                        Fd = new yd(function() {
                            return new Ed
                        }, function(a) {
                            a.reset()
                        });
                    Dd.prototype.add = function(a, c) {
                        var d = Fd.get();
                        d.set(a, c);
                        this.o ? this.o.next = d : this.b = d;
                        this.o = d
                    };
                    Dd.prototype.remove = function() {
                        var a = null;
                        this.b && (a = this.b, this.b = this.b.next, this.b || (this.o = null), a.next = null);
                        return a
                    };
                    var Ed = function() {
                        this.next = this.scope = this.b = null
                    };
                    Ed.prototype.set = function(a, c) {
                        this.b = a;
                        this.scope = c;
                        this.next = null
                    };
                    Ed.prototype.reset = function() {
                        this.next = this.scope = this.b = null
                    };
                    var Kd = function(a, c) {
                            Gd || Hd();
                            Id || (Gd(), Id = !0);
                            Jd.add(a, c)
                        },
                        Gd, Hd = function() {
                            if (_.m.Promise && _.m.Promise.resolve) {
                                var a = _.m.Promise.resolve(void 0);
                                Gd = function() {
                                    a.then(Ld)
                                }
                            } else Gd = function() {
                                var a = Ld;
                                !_.Mc(_.m.setImmediate) || _.m.Window && _.m.Window.prototype && !_.B("Edge") && _.m.Window.prototype.setImmediate == _.m.setImmediate ? (Bd || (Bd = Cd()), Bd(a)) : _.m.setImmediate(a)
                            }
                        },
                        Id = !1,
                        Jd = new Dd,
                        Ld = function() {
                            for (var a; a = Jd.remove();) {
                                try {
                                    a.b.call(a.scope)
                                } catch (c) {
                                    Ad(c)
                                }
                                zd(Fd, a)
                            }
                            Id = !1
                        };
                    var Nd, Od, Pd;
                    _.Md = !_.C || _.Eb(9);
                    Nd = !_.C || _.Eb(9);
                    Od = _.C && !_.Cb("9");
                    Pd = function() {
                        if (!_.m.addEventListener || !Object.defineProperty) return !1;
                        var a = !1,
                            c = Object.defineProperty({}, "passive", {
                                get: function() {
                                    a = !0
                                }
                            });
                        try {
                            _.m.addEventListener("test", _.ta, c), _.m.removeEventListener("test", _.ta, c)
                        } catch (d) {}
                        return a
                    }();
                    _.Qd = function(a, c) {
                        this.type = a;
                        this.o = this.target = c;
                        this.A = !1;
                        this.tf = !0
                    };
                    _.Qd.prototype.stopPropagation = function() {
                        this.A = !0
                    };
                    _.Qd.prototype.preventDefault = function() {
                        this.tf = !1
                    };
                    _.Rd = _.lb ? "webkitTransitionEnd" : _.hb ? "otransitionend" : "transitionend";
                    _.Sd = function(a, c) {
                        _.Qd.call(this, a ? a.type : "");
                        this.relatedTarget = this.o = this.target = null;
                        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
                        this.key = "";
                        this.w = this.keyCode = 0;
                        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
                        this.state = null;
                        this.pointerId = 0;
                        this.pointerType = "";
                        this.b = null;
                        a && this.init(a, c)
                    };
                    _.z(_.Sd, _.Qd);
                    var Td = {
                        2: "touch",
                        3: "pen",
                        4: "mouse"
                    };
                    _.Sd.prototype.init = function(a, c) {
                        var d = this.type = a.type,
                            e = a.changedTouches ? a.changedTouches[0] : null;
                        this.target = a.target || a.srcElement;
                        this.o = c;
                        (c = a.relatedTarget) ? _.kb && (_.kd(c, "nodeName") || (c = null)): "mouseover" == d ? c = a.fromElement : "mouseout" == d && (c = a.toElement);
                        this.relatedTarget = c;
                        null === e ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX, this.clientY =
                            void 0 !== e.clientY ? e.clientY : e.pageY, this.screenX = e.screenX || 0, this.screenY = e.screenY || 0);
                        this.button = a.button;
                        this.keyCode = a.keyCode || 0;
                        this.key = a.key || "";
                        this.w = a.charCode || ("keypress" == d ? a.keyCode : 0);
                        this.ctrlKey = a.ctrlKey;
                        this.altKey = a.altKey;
                        this.shiftKey = a.shiftKey;
                        this.metaKey = a.metaKey;
                        this.pointerId = a.pointerId || 0;
                        this.pointerType = _.p(a.pointerType) ? a.pointerType : Td[a.pointerType] || "";
                        this.state = a.state;
                        this.b = a;
                        a.defaultPrevented && this.preventDefault()
                    };
                    _.Sd.prototype.stopPropagation = function() {
                        _.Sd.J.stopPropagation.call(this);
                        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
                    };
                    _.Sd.prototype.preventDefault = function() {
                        _.Sd.J.preventDefault.call(this);
                        var a = this.b;
                        if (a.preventDefault) a.preventDefault();
                        else if (a.returnValue = !1, Od) try {
                            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
                        } catch (c) {}
                    };
                    var Wd;
                    _.Ud = "closure_listenable_" + (1E6 * Math.random() | 0);
                    _.Vd = function(a) {
                        return !(!a || !a[_.Ud])
                    };
                    Wd = 0;
                    var Xd = function(a, c, d, e, f) {
                            this.listener = a;
                            this.b = null;
                            this.src = c;
                            this.type = d;
                            this.capture = !!e;
                            this.Vc = f;
                            this.key = ++Wd;
                            this.dc = this.Hc = !1
                        },
                        Yd = function(a) {
                            a.dc = !0;
                            a.listener = null;
                            a.b = null;
                            a.src = null;
                            a.Vc = null
                        };
                    var Zd = function(a) {
                        this.src = a;
                        this.b = {};
                        this.o = 0
                    };
                    Zd.prototype.add = function(a, c, d, e, f) {
                        var g = a.toString();
                        a = this.b[g];
                        a || (a = this.b[g] = [], this.o++);
                        var h = $d(a, c, e, f); - 1 < h ? (c = a[h], d || (c.Hc = !1)) : (c = new Xd(c, this.src, g, !!e, f), c.Hc = d, a.push(c));
                        return c
                    };
                    Zd.prototype.remove = function(a, c, d, e) {
                        a = a.toString();
                        if (!(a in this.b)) return !1;
                        var f = this.b[a];
                        c = $d(f, c, d, e);
                        return -1 < c ? (Yd(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete this.b[a], this.o--), !0) : !1
                    };
                    var ae = function(a, c) {
                        var d = c.type;
                        if (!(d in a.b)) return !1;
                        var e = _.Rc(a.b[d], c);
                        e && (Yd(c), 0 == a.b[d].length && (delete a.b[d], a.o--));
                        return e
                    };
                    Zd.prototype.Zb = function(a, c) {
                        a = this.b[a.toString()];
                        var d = [];
                        if (a)
                            for (var e = 0; e < a.length; ++e) {
                                var f = a[e];
                                f.capture == c && d.push(f)
                            }
                        return d
                    };
                    Zd.prototype.Db = function(a, c, d, e) {
                        a = this.b[a.toString()];
                        var f = -1;
                        a && (f = $d(a, c, d, e));
                        return -1 < f ? a[f] : null
                    };
                    Zd.prototype.hasListener = function(a, c) {
                        var d = _.n(a),
                            e = d ? a.toString() : "",
                            f = _.n(c);
                        return Uc(this.b, function(a) {
                            for (var g = 0; g < a.length; ++g)
                                if (!(d && a[g].type != e || f && a[g].capture != c)) return !0;
                            return !1
                        })
                    };
                    var $d = function(a, c, d, e) {
                        for (var f = 0; f < a.length; ++f) {
                            var g = a[f];
                            if (!g.dc && g.listener == c && g.capture == !!d && g.Vc == e) return f
                        }
                        return -1
                    };
                    var be, ce, de, ge, ie, je, oe, ne, ke, pe;
                    be = "closure_lm_" + (1E6 * Math.random() | 0);
                    ce = {};
                    de = 0;
                    _.M = function(a, c, d, e, f) {
                        if (e && e.once) return _.ee(a, c, d, e, f);
                        if (_.v(c)) {
                            for (var g = 0; g < c.length; g++) _.M(a, c[g], d, e, f);
                            return null
                        }
                        d = _.fe(d);
                        return _.Vd(a) ? a.L(c, d, _.Nc(e) ? !!e.capture : !!e, f) : ge(a, c, d, !1, e, f)
                    };
                    ge = function(a, c, d, e, f, g) {
                        if (!c) throw Error("v");
                        var h = _.Nc(f) ? !!f.capture : !!f,
                            l = _.he(a);
                        l || (a[be] = l = new Zd(a));
                        d = l.add(c, d, e, h, g);
                        if (d.b) return d;
                        e = ie();
                        d.b = e;
                        e.src = a;
                        e.listener = d;
                        if (a.addEventListener) Pd || (f = h), void 0 === f && (f = !1), a.addEventListener(c.toString(), e, f);
                        else if (a.attachEvent) a.attachEvent(je(c.toString()), e);
                        else if (a.addListener && a.removeListener) a.addListener(e);
                        else throw Error("w");
                        de++;
                        return d
                    };
                    ie = function() {
                        var a = ke,
                            c = Nd ? function(d) {
                                return a.call(c.src, c.listener, d)
                            } : function(d) {
                                d = a.call(c.src, c.listener, d);
                                if (!d) return d
                            };
                        return c
                    };
                    _.ee = function(a, c, d, e, f) {
                        if (_.v(c)) {
                            for (var g = 0; g < c.length; g++) _.ee(a, c[g], d, e, f);
                            return null
                        }
                        d = _.fe(d);
                        return _.Vd(a) ? a.Oa(c, d, _.Nc(e) ? !!e.capture : !!e, f) : ge(a, c, d, !0, e, f)
                    };
                    _.le = function(a, c, d, e, f) {
                        if (_.v(c))
                            for (var g = 0; g < c.length; g++) _.le(a, c[g], d, e, f);
                        else e = _.Nc(e) ? !!e.capture : !!e, d = _.fe(d), _.Vd(a) ? a.ua(c, d, e, f) : a && (a = _.he(a)) && (c = a.Db(c, d, e, f)) && _.me(c)
                    };
                    _.me = function(a) {
                        if (_.sa(a) || !a || a.dc) return !1;
                        var c = a.src;
                        if (_.Vd(c)) return c.Bc(a);
                        var d = a.type,
                            e = a.b;
                        c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent ? c.detachEvent(je(d), e) : c.addListener && c.removeListener && c.removeListener(e);
                        de--;
                        (d = _.he(c)) ? (ae(d, a), 0 == d.o && (d.src = null, c[be] = null)) : Yd(a);
                        return !0
                    };
                    je = function(a) {
                        return a in ce ? ce[a] : ce[a] = "on" + a
                    };
                    oe = function(a, c, d, e) {
                        var f = !0;
                        if (a = _.he(a))
                            if (c = a.b[c.toString()])
                                for (c = c.concat(), a = 0; a < c.length; a++) {
                                    var g = c[a];
                                    g && g.capture == d && !g.dc && (g = ne(g, e), f = f && !1 !== g)
                                }
                            return f
                    };
                    ne = function(a, c) {
                        var d = a.listener,
                            e = a.Vc || a.src;
                        a.Hc && _.me(a);
                        return d.call(e, c)
                    };
                    ke = function(a, c) {
                        if (a.dc) return !0;
                        if (!Nd) {
                            var d = c || _.u("window.event");
                            c = new _.Sd(d, this);
                            var e = !0;
                            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                                a: {
                                    var f = !1;
                                    if (0 == d.keyCode) try {
                                        d.keyCode = -1;
                                        break a
                                    } catch (h) {
                                        f = !0
                                    }
                                    if (f || void 0 == d.returnValue) d.returnValue = !0
                                }
                                d = [];
                                for (f = c.o; f; f = f.parentNode) d.push(f);a = a.type;
                                for (f = d.length - 1; !c.A && 0 <= f; f--) {
                                    c.o = d[f];
                                    var g = oe(d[f], a, !0, c);
                                    e = e && g
                                }
                                for (f = 0; !c.A && f < d.length; f++) c.o = d[f],
                                g = oe(d[f], a, !1, c),
                                e = e && g
                            }
                            return e
                        }
                        return ne(a, new _.Sd(c, this))
                    };
                    _.he = function(a) {
                        a = a[be];
                        return a instanceof Zd ? a : null
                    };
                    pe = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
                    _.fe = function(a) {
                        if (_.Mc(a)) return a;
                        a[pe] || (a[pe] = function(c) {
                            return a.handleEvent(c)
                        });
                        return a[pe]
                    };
                    _.qe = function(a) {
                        _.A.call(this);
                        this.Y = a;
                        this.T = {}
                    };
                    _.z(_.qe, _.A);
                    var re = [];
                    _.qe.prototype.L = function(a, c, d, e) {
                        return se(this, a, c, d, e)
                    };
                    _.qe.prototype.A = function(a, c, d, e, f) {
                        return se(this, a, c, d, e, f)
                    };
                    var se = function(a, c, d, e, f, g) {
                        _.v(d) || (d && (re[0] = d.toString()), d = re);
                        for (var h = 0; h < d.length; h++) {
                            var l = _.M(c, d[h], e || a.handleEvent, f || !1, g || a.Y || a);
                            if (!l) break;
                            a.T[l.key] = l
                        }
                        return a
                    };
                    _.qe.prototype.Oa = function(a, c, d, e) {
                        return te(this, a, c, d, e)
                    };
                    var te = function(a, c, d, e, f, g) {
                        if (_.v(d))
                            for (var h = 0; h < d.length; h++) te(a, c, d[h], e, f, g);
                        else {
                            c = _.ee(c, d, e || a.handleEvent, f, g || a.Y || a);
                            if (!c) return a;
                            a.T[c.key] = c
                        }
                        return a
                    };
                    _.qe.prototype.ua = function(a, c, d, e, f) {
                        if (_.v(c))
                            for (var g = 0; g < c.length; g++) this.ua(a, c[g], d, e, f);
                        else d = d || this.handleEvent, e = _.Nc(e) ? !!e.capture : !!e, f = f || this.Y || this, d = _.fe(d), e = !!e, c = _.Vd(a) ? a.Db(c, d, e, f) : a ? (a = _.he(a)) ? a.Db(c, d, e, f) : null : null, c && (_.me(c), delete this.T[c.key]);
                        return this
                    };
                    _.ue = function(a) {
                        _.Tc(a.T, function(a, d) {
                            this.T.hasOwnProperty(d) && _.me(a)
                        }, a);
                        a.T = {}
                    };
                    _.qe.prototype.P = function() {
                        _.qe.J.P.call(this);
                        _.ue(this)
                    };
                    _.qe.prototype.handleEvent = function() {
                        throw Error("x");
                    };
                    _.O = function() {
                        _.A.call(this);
                        this.cb = new Zd(this);
                        this.Nf = this;
                        this.Yd = null
                    };
                    _.z(_.O, _.A);
                    _.O.prototype[_.Ud] = !0;
                    _.k = _.O.prototype;
                    _.k.Qc = function() {
                        return this.Yd
                    };
                    _.k.ge = function(a) {
                        this.Yd = a
                    };
                    _.k.addEventListener = function(a, c, d, e) {
                        _.M(this, a, c, d, e)
                    };
                    _.k.removeEventListener = function(a, c, d, e) {
                        _.le(this, a, c, d, e)
                    };
                    _.k.dispatchEvent = function(a) {
                        var c, d = this.Qc();
                        if (d)
                            for (c = []; d; d = d.Qc()) c.push(d);
                        d = this.Nf;
                        var e = a.type || a;
                        if (_.p(a)) a = new _.Qd(a, d);
                        else if (a instanceof _.Qd) a.target = a.target || d;
                        else {
                            var f = a;
                            a = new _.Qd(e, d);
                            _.Yc(a, f)
                        }
                        f = !0;
                        if (c)
                            for (var g = c.length - 1; !a.A && 0 <= g; g--) {
                                var h = a.o = c[g];
                                f = h.Wb(e, !0, a) && f
                            }
                        a.A || (h = a.o = d, f = h.Wb(e, !0, a) && f, a.A || (f = h.Wb(e, !1, a) && f));
                        if (c)
                            for (g = 0; !a.A && g < c.length; g++) h = a.o = c[g], f = h.Wb(e, !1, a) && f;
                        return f
                    };
                    _.k.P = function() {
                        _.O.J.P.call(this);
                        this.fd();
                        this.Yd = null
                    };
                    _.k.L = function(a, c, d, e) {
                        return this.cb.add(String(a), c, !1, d, e)
                    };
                    _.k.Oa = function(a, c, d, e) {
                        return this.cb.add(String(a), c, !0, d, e)
                    };
                    _.k.ua = function(a, c, d, e) {
                        return this.cb.remove(String(a), c, d, e)
                    };
                    _.k.Bc = function(a) {
                        return ae(this.cb, a)
                    };
                    _.k.fd = function(a) {
                        if (this.cb) {
                            var c = this.cb;
                            a = a && a.toString();
                            var d = 0,
                                e;
                            for (e in c.b)
                                if (!a || e == a) {
                                    for (var f = c.b[e], g = 0; g < f.length; g++) ++d, Yd(f[g]);
                                    delete c.b[e];
                                    c.o--
                                }
                            c = d
                        } else c = 0;
                        return c
                    };
                    _.k.Wb = function(a, c, d) {
                        a = this.cb.b[String(a)];
                        if (!a) return !0;
                        a = a.concat();
                        for (var e = !0, f = 0; f < a.length; ++f) {
                            var g = a[f];
                            if (g && !g.dc && g.capture == c) {
                                var h = g.listener,
                                    l = g.Vc || g.src;
                                g.Hc && this.Bc(g);
                                e = !1 !== h.call(l, d) && e
                            }
                        }
                        return e && 0 != d.tf
                    };
                    _.k.Zb = function(a, c) {
                        return this.cb.Zb(String(a), c)
                    };
                    _.k.Db = function(a, c, d, e) {
                        return this.cb.Db(String(a), c, d, e)
                    };
                    _.k.hasListener = function(a, c) {
                        return this.cb.hasListener(_.n(a) ? String(a) : void 0, c)
                    };
                    _.ve = "StopIteration" in _.m ? _.m.StopIteration : {
                        message: "StopIteration",
                        stack: ""
                    };
                    _.we = function() {};
                    _.we.prototype.next = function() {
                        throw _.ve;
                    };
                    _.we.prototype.jc = function() {
                        return this
                    };
                    var xe;
                    xe = function(a) {
                        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
                    };
                    _.ye = function(a) {
                        a = String(a);
                        if (xe(a)) try {
                            return eval("(" + a + ")")
                        } catch (c) {}
                        throw Error("z`" + a);
                    };
                    _.ze = function() {};
                    _.ze.prototype.o = function(a) {
                        var c = [];
                        Ae(this, a, c);
                        return c.join("")
                    };
                    var Ae = function(a, c, d) {
                            if (null == c) d.push("null");
                            else {
                                if ("object" == typeof c) {
                                    if (_.v(c)) {
                                        var e = c;
                                        c = e.length;
                                        d.push("[");
                                        for (var f = "", g = 0; g < c; g++) d.push(f), Ae(a, e[g], d), f = ",";
                                        d.push("]");
                                        return
                                    }
                                    if (c instanceof String || c instanceof Number || c instanceof Boolean) c = c.valueOf();
                                    else {
                                        d.push("{");
                                        f = "";
                                        for (e in c) Object.prototype.hasOwnProperty.call(c, e) && (g = c[e], "function" != typeof g && (d.push(f), Be(e, d), d.push(":"), Ae(a, g, d), f = ","));
                                        d.push("}");
                                        return
                                    }
                                }
                                switch (typeof c) {
                                    case "string":
                                        Be(c, d);
                                        break;
                                    case "number":
                                        d.push((0, window.isFinite)(c) &&
                                            !(0, window.isNaN)(c) ? String(c) : "null");
                                        break;
                                    case "boolean":
                                        d.push(String(c));
                                        break;
                                    case "function":
                                        d.push("null");
                                        break;
                                    default:
                                        throw Error("A`" + typeof c);
                                }
                            }
                        },
                        Ce = {
                            '"': '\\"',
                            "\\": "\\\\",
                            "/": "\\/",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t",
                            "\x0B": "\\u000b"
                        },
                        De = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
                        Be = function(a, c) {
                            c.push('"', a.replace(De, function(a) {
                                var c = Ce[a];
                                c || (c = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Ce[a] = c);
                                return c
                            }), '"')
                        };
                    _.Ee = function(a) {
                        switch (a) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                return !0;
                            default:
                                return !1
                        }
                    };
                    _.Fe = function() {};
                    _.Fe.prototype.o = null;
                    var Ge = function(a) {
                        return a.o || (a.o = a.A())
                    };
                    var Ie;
                    Ie = function() {};
                    _.z(Ie, _.Fe);
                    Ie.prototype.b = function() {
                        var a = Je(this);
                        return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest
                    };
                    Ie.prototype.A = function() {
                        var a = {};
                        Je(this) && (a[0] = !0, a[1] = !0);
                        return a
                    };
                    var Je = function(a) {
                        if (!a.w && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
                            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                                var e = c[d];
                                try {
                                    return new window.ActiveXObject(e), a.w = e
                                } catch (f) {}
                            }
                            throw Error("B");
                        }
                        return a.w
                    };
                    _.He = new Ie;
                    _.Ke = function(a) {
                        if (a.Va && "function" == typeof a.Va) return a.Va();
                        if (_.p(a)) return a.split("");
                        if (_.Lc(a)) {
                            for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
                            return c
                        }
                        return _.Vc(a)
                    };
                    _.Le = function(a) {
                        if (a.Sa && "function" == typeof a.Sa) return a.Sa();
                        if (!a.Va || "function" != typeof a.Va) {
                            if (_.Lc(a) || _.p(a)) {
                                var c = [];
                                a = a.length;
                                for (var d = 0; d < a; d++) c.push(d);
                                return c
                            }
                            return _.Wc(a)
                        }
                    };
                    _.Me = function(a, c) {
                        if (a.forEach && "function" == typeof a.forEach) a.forEach(c, void 0);
                        else if (_.Lc(a) || _.p(a))(0, _.Da)(a, c, void 0);
                        else
                            for (var d = _.Le(a), e = _.Ke(a), f = e.length, g = 0; g < f; g++) c.call(void 0, e[g], d && d[g], a)
                    };
                    _.Ne = function(a) {
                        a.prototype.then = a.prototype.then;
                        a.prototype.$goog_Thenable = !0
                    };
                    _.Oe = function(a) {
                        if (!a) return !1;
                        try {
                            return !!a.$goog_Thenable
                        } catch (c) {
                            return !1
                        }
                    };
                    var Re, We, $e, Ye, cf, bf, df;
                    _.Qe = function(a, c) {
                        this.b = 0;
                        this.D = void 0;
                        this.A = this.o = this.w = null;
                        this.B = this.C = !1;
                        if (a != _.ta) try {
                            var d = this;
                            a.call(c, function(a) {
                                Pe(d, 2, a)
                            }, function(a) {
                                Pe(d, 3, a)
                            })
                        } catch (e) {
                            Pe(this, 3, e)
                        }
                    };
                    Re = function() {
                        this.next = this.context = this.o = this.w = this.b = null;
                        this.A = !1
                    };
                    Re.prototype.reset = function() {
                        this.context = this.o = this.w = this.b = null;
                        this.A = !1
                    };
                    var Se = new yd(function() {
                            return new Re
                        }, function(a) {
                            a.reset()
                        }),
                        Te = function(a, c, d) {
                            var e = Se.get();
                            e.w = a;
                            e.o = c;
                            e.context = d;
                            return e
                        };
                    _.Qe.prototype.then = function(a, c, d) {
                        return _.Ue(this, _.Mc(a) ? a : null, _.Mc(c) ? c : null, d)
                    };
                    _.Ne(_.Qe);
                    _.Qe.prototype.cancel = function(a) {
                        0 == this.b && Kd(function() {
                            var c = new _.Ve(a);
                            We(this, c)
                        }, this)
                    };
                    We = function(a, c) {
                        if (0 == a.b)
                            if (a.w) {
                                var d = a.w;
                                if (d.o) {
                                    for (var e = 0, f = null, g = null, h = d.o; h && (h.A || (e++, h.b == a && (f = h), !(f && 1 < e))); h = h.next) f || (g = h);
                                    f && (0 == d.b && 1 == e ? We(d, c) : (g ? (e = g, e.next == d.A && (d.A = e), e.next = e.next.next) : Xe(d), Ye(d, f, 3, c)))
                                }
                                a.w = null
                            } else Pe(a, 3, c)
                    };
                    $e = function(a, c) {
                        a.o || 2 != a.b && 3 != a.b || Ze(a);
                        a.A ? a.A.next = c : a.o = c;
                        a.A = c
                    };
                    _.Ue = function(a, c, d, e) {
                        var f = Te(null, null, null);
                        f.b = new _.Qe(function(a, h) {
                            f.w = c ? function(d) {
                                try {
                                    var f = c.call(e, d);
                                    a(f)
                                } catch (r) {
                                    h(r)
                                }
                            } : a;
                            f.o = d ? function(c) {
                                try {
                                    var f = d.call(e, c);
                                    !_.n(f) && c instanceof _.Ve ? h(c) : a(f)
                                } catch (r) {
                                    h(r)
                                }
                            } : h
                        });
                        f.b.w = a;
                        $e(a, f);
                        return f.b
                    };
                    _.Qe.prototype.G = function(a) {
                        this.b = 0;
                        Pe(this, 2, a)
                    };
                    _.Qe.prototype.fa = function(a) {
                        this.b = 0;
                        Pe(this, 3, a)
                    };
                    var Pe = function(a, c, d) {
                            if (0 == a.b) {
                                a === d && (c = 3, d = new TypeError("C"));
                                a.b = 1;
                                a: {
                                    var e = d,
                                        f = a.G,
                                        g = a.fa;
                                    if (e instanceof _.Qe) {
                                        $e(e, Te(f || _.ta, g || null, a));
                                        var h = !0
                                    } else if (_.Oe(e)) e.then(f, g, a), h = !0;
                                    else {
                                        if (_.Nc(e)) try {
                                            var l = e.then;
                                            if (_.Mc(l)) {
                                                af(e, l, f, g, a);
                                                h = !0;
                                                break a
                                            }
                                        } catch (q) {
                                            g.call(a, q);
                                            h = !0;
                                            break a
                                        }
                                        h = !1
                                    }
                                }
                                h || (a.D = d, a.b = c, a.w = null, Ze(a), 3 != c || d instanceof _.Ve || bf(a, d))
                            }
                        },
                        af = function(a, c, d, e, f) {
                            var g = !1,
                                h = function(a) {
                                    g || (g = !0, d.call(f, a))
                                },
                                l = function(a) {
                                    g || (g = !0, e.call(f, a))
                                };
                            try {
                                c.call(a, h, l)
                            } catch (q) {
                                l(q)
                            }
                        },
                        Ze = function(a) {
                            a.C || (a.C = !0, Kd(a.F, a))
                        },
                        Xe = function(a) {
                            var c = null;
                            a.o && (c = a.o, a.o = c.next, c.next = null);
                            a.o || (a.A = null);
                            return c
                        };
                    _.Qe.prototype.F = function() {
                        for (var a; a = Xe(this);) Ye(this, a, this.b, this.D);
                        this.C = !1
                    };
                    Ye = function(a, c, d, e) {
                        if (3 == d && c.o && !c.A)
                            for (; a && a.B; a = a.w) a.B = !1;
                        if (c.b) c.b.w = null, cf(c, d, e);
                        else try {
                            c.A ? c.w.call(c.context) : cf(c, d, e)
                        } catch (f) {
                            df.call(null, f)
                        }
                        zd(Se, c)
                    };
                    cf = function(a, c, d) {
                        2 == c ? a.w.call(a.context, d) : a.o && a.o.call(a.context, d)
                    };
                    bf = function(a, c) {
                        a.B = !0;
                        Kd(function() {
                            a.B && df.call(null, c)
                        })
                    };
                    df = Ad;
                    _.Ve = function(a) {
                        _.Ba.call(this, a)
                    };
                    _.z(_.Ve, _.Ba);
                    _.Ve.prototype.name = "cancel";
                    _.ef = function(a, c) {
                        _.O.call(this);
                        this.A = a || 1;
                        this.w = c || _.m;
                        this.B = (0, _.w)(this.D, this);
                        this.C = (0, _.x)()
                    };
                    _.z(_.ef, _.O);
                    _.ef.prototype.o = !1;
                    _.ef.prototype.b = null;
                    _.ff = function(a, c) {
                        a.A = c;
                        a.b && a.o ? (a.stop(), a.start()) : a.b && a.stop()
                    };
                    _.ef.prototype.D = function() {
                        if (this.o) {
                            var a = (0, _.x)() - this.C;
                            0 < a && a < .8 * this.A ? this.b = this.w.setTimeout(this.B, this.A - a) : (this.b && (this.w.clearTimeout(this.b), this.b = null), this.dispatchEvent("tick"), this.o && (this.stop(), this.start()))
                        }
                    };
                    _.ef.prototype.start = function() {
                        this.o = !0;
                        this.b || (this.b = this.w.setTimeout(this.B, this.A), this.C = (0, _.x)())
                    };
                    _.ef.prototype.stop = function() {
                        this.o = !1;
                        this.b && (this.w.clearTimeout(this.b), this.b = null)
                    };
                    _.ef.prototype.P = function() {
                        _.ef.J.P.call(this);
                        this.stop();
                        delete this.w
                    };
                    _.gf = function(a, c, d) {
                        if (_.Mc(a)) d && (a = (0, _.w)(a, d));
                        else if (a && "function" == typeof a.handleEvent) a = (0, _.w)(a.handleEvent, a);
                        else throw Error("D");
                        return 2147483647 < Number(c) ? -1 : _.m.setTimeout(a, c || 0)
                    };
                    _.hf = function(a, c) {
                        this.o = {};
                        this.b = [];
                        this.A = this.w = 0;
                        var d = arguments.length;
                        if (1 < d) {
                            if (d % 2) throw Error("g");
                            for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1])
                        } else if (a)
                            if (a instanceof _.hf)
                                for (d = a.Sa(), e = 0; e < d.length; e++) this.set(d[e], a.get(d[e]));
                            else
                                for (e in a) this.set(e, a[e])
                    };
                    _.k = _.hf.prototype;
                    _.k.Va = function() {
                        jf(this);
                        for (var a = [], c = 0; c < this.b.length; c++) a.push(this.o[this.b[c]]);
                        return a
                    };
                    _.k.Sa = function() {
                        jf(this);
                        return this.b.concat()
                    };
                    _.k.xc = function() {
                        return 0 == this.w
                    };
                    _.k.clear = function() {
                        this.o = {};
                        this.A = this.w = this.b.length = 0
                    };
                    _.k.remove = function(a) {
                        return _.kf(this.o, a) ? (delete this.o[a], this.w--, this.A++, this.b.length > 2 * this.w && jf(this), !0) : !1
                    };
                    var jf = function(a) {
                        if (a.w != a.b.length) {
                            for (var c = 0, d = 0; c < a.b.length;) {
                                var e = a.b[c];
                                _.kf(a.o, e) && (a.b[d++] = e);
                                c++
                            }
                            a.b.length = d
                        }
                        if (a.w != a.b.length) {
                            var f = {};
                            for (d = c = 0; c < a.b.length;) e = a.b[c], _.kf(f, e) || (a.b[d++] = e, f[e] = 1), c++;
                            a.b.length = d
                        }
                    };
                    _.k = _.hf.prototype;
                    _.k.get = function(a, c) {
                        return _.kf(this.o, a) ? this.o[a] : c
                    };
                    _.k.set = function(a, c) {
                        _.kf(this.o, a) || (this.w++, this.b.push(a), this.A++);
                        this.o[a] = c
                    };
                    _.k.forEach = function(a, c) {
                        for (var d = this.Sa(), e = 0; e < d.length; e++) {
                            var f = d[e],
                                g = this.get(f);
                            a.call(c, g, f, this)
                        }
                    };
                    _.k.clone = function() {
                        return new _.hf(this)
                    };
                    _.k.jc = function(a) {
                        jf(this);
                        var c = 0,
                            d = this.A,
                            e = this,
                            f = new _.we;
                        f.next = function() {
                            if (d != e.A) throw Error("E");
                            if (c >= e.b.length) throw _.ve;
                            var f = e.b[c++];
                            return a ? f : e.o[f]
                        };
                        return f
                    };
                    _.kf = function(a, c) {
                        return Object.prototype.hasOwnProperty.call(a, c)
                    };
                    var pf, qf, rf;
                    _.lf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                    _.mf = function(a) {
                        a = a.match(_.lf)[1] || null;
                        !a && _.m.self && _.m.self.location && (a = _.m.self.location.protocol, a = a.substr(0, a.length - 1));
                        return a ? a.toLowerCase() : ""
                    };
                    _.nf = function(a, c) {
                        if (!c) return a;
                        var d = a.indexOf("#");
                        0 > d && (d = a.length);
                        var e = a.indexOf("?");
                        if (0 > e || e > d) {
                            e = d;
                            var f = ""
                        } else f = a.substring(e + 1, d);
                        a = [a.substr(0, e), f, a.substr(d)];
                        d = a[1];
                        a[1] = c ? d ? d + "&" + c : c : d;
                        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
                    };
                    _.of = function(a, c, d) {
                        d = null != d ? "=" + _.ad(d) : "";
                        return _.nf(a, c + d)
                    };
                    pf = function(a, c, d, e) {
                        for (var f = d.length; 0 <= (c = a.indexOf(d, c)) && c < e;) {
                            var g = a.charCodeAt(c - 1);
                            if (38 == g || 63 == g)
                                if (g = a.charCodeAt(c + f), !g || 61 == g || 38 == g || 35 == g) return c;
                            c += f + 1
                        }
                        return -1
                    };
                    qf = /#|$/;
                    rf = /[?&]($|#)/;
                    _.sf = function(a, c) {
                        for (var d = a.search(qf), e = 0, f, g = []; 0 <= (f = pf(a, e, c, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
                        g.push(a.substr(e));
                        return g.join("").replace(rf, "$1")
                    };
                    var uf, vf;
                    _.tf = function(a) {
                        _.O.call(this);
                        this.headers = new _.hf;
                        this.F = a || null;
                        this.o = !1;
                        this.D = this.b = null;
                        this.H = "";
                        this.w = this.M = this.B = this.G = !1;
                        this.C = 0;
                        this.A = null;
                        this.O = "";
                        this.N = this.K = !1
                    };
                    _.z(_.tf, _.O);
                    uf = /^https?$/i;
                    vf = ["POST", "PUT"];
                    _.wf = [];
                    _.tf.prototype.S = function() {
                        this.ga();
                        _.Rc(_.wf, this)
                    };
                    _.tf.prototype.send = function(a, c, d, e) {
                        if (this.b) throw Error("F`" + this.H + "`" + a);
                        c = c ? c.toUpperCase() : "GET";
                        this.H = a;
                        this.G = !1;
                        this.o = !0;
                        this.b = this.F ? this.F.b() : _.He.b();
                        this.D = this.F ? Ge(this.F) : Ge(_.He);
                        this.b.onreadystatechange = (0, _.w)(this.T, this);
                        try {
                            this.M = !0, this.b.open(c, String(a), !0), this.M = !1
                        } catch (g) {
                            xf(this);
                            return
                        }
                        a = d || "";
                        var f = this.headers.clone();
                        e && _.Me(e, function(a, c) {
                            f.set(c, a)
                        });
                        e = Pc(f.Sa());
                        d = _.m.FormData && a instanceof _.m.FormData;
                        !_.Qc(vf, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
                        f.forEach(function(a, c) {
                            this.b.setRequestHeader(c, a)
                        }, this);
                        this.O && (this.b.responseType = this.O);
                        "withCredentials" in this.b && this.b.withCredentials !== this.K && (this.b.withCredentials = this.K);
                        try {
                            yf(this), 0 < this.C && ((this.N = zf(this.b)) ? (this.b.timeout = this.C, this.b.ontimeout = (0, _.w)(this.Y, this)) : this.A = _.gf(this.Y, this.C, this)), this.B = !0, this.b.send(a), this.B = !1
                        } catch (g) {
                            xf(this)
                        }
                    };
                    var zf = function(a) {
                            return _.C && _.Cb(9) && _.sa(a.timeout) && _.n(a.ontimeout)
                        },
                        Oc = function(a) {
                            return "content-type" == a.toLowerCase()
                        };
                    _.tf.prototype.Y = function() {
                        "undefined" != typeof _.ra && this.b && (this.dispatchEvent("timeout"), this.abort(8))
                    };
                    var xf = function(a) {
                            a.o = !1;
                            a.b && (a.w = !0, a.b.abort(), a.w = !1);
                            Af(a);
                            Bf(a)
                        },
                        Af = function(a) {
                            a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
                        };
                    _.tf.prototype.abort = function() {
                        this.b && this.o && (this.o = !1, this.w = !0, this.b.abort(), this.w = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Bf(this))
                    };
                    _.tf.prototype.P = function() {
                        this.b && (this.o && (this.o = !1, this.w = !0, this.b.abort(), this.w = !1), Bf(this, !0));
                        _.tf.J.P.call(this)
                    };
                    _.tf.prototype.T = function() {
                        this.fa || (this.M || this.B || this.w ? Cf(this) : this.W())
                    };
                    _.tf.prototype.W = function() {
                        Cf(this)
                    };
                    var Cf = function(a) {
                            if (a.o && "undefined" != typeof _.ra && (!a.D[1] || 4 != (a.b ? a.b.readyState : 0) || 2 != a.Ua()))
                                if (a.B && 4 == (a.b ? a.b.readyState : 0)) _.gf(a.T, 0, a);
                                else if (a.dispatchEvent("readystatechange"), 4 == (a.b ? a.b.readyState : 0)) {
                                a.o = !1;
                                try {
                                    a.yc() ? (a.dispatchEvent("complete"), a.dispatchEvent("success")) : (a.Ua(), Af(a))
                                } finally {
                                    Bf(a)
                                }
                            }
                        },
                        Bf = function(a, c) {
                            if (a.b) {
                                yf(a);
                                var d = a.b,
                                    e = a.D[0] ? _.ta : null;
                                a.b = null;
                                a.D = null;
                                c || a.dispatchEvent("ready");
                                try {
                                    d.onreadystatechange = e
                                } catch (f) {}
                            }
                        },
                        yf = function(a) {
                            a.b && a.N && (a.b.ontimeout =
                                null);
                            a.A && (_.m.clearTimeout(a.A), a.A = null)
                        };
                    _.tf.prototype.yc = function() {
                        var a = this.Ua(),
                            c;
                        if (!(c = _.Ee(a))) {
                            if (a = 0 === a) a = _.mf(String(this.H)), a = !uf.test(a);
                            c = a
                        }
                        return c
                    };
                    _.tf.prototype.Ua = function() {
                        try {
                            return 2 < (this.b ? this.b.readyState : 0) ? this.b.status : -1
                        } catch (a) {
                            return -1
                        }
                    };
                    _.tf.prototype.Ge = function() {
                        try {
                            return this.b ? this.b.responseText : ""
                        } catch (a) {
                            return ""
                        }
                    };
                    _.tf.prototype.Rc = function() {
                        if (this.b) {
                            a: {
                                var a = this.b.responseText;
                                if (_.m.JSON) try {
                                    var c = _.m.JSON.parse(a);
                                    break a
                                } catch (d) {}
                                c = _.ye(a)
                            }
                            return c
                        }
                    };
                    var Df = !1,
                        Ef = "",
                        Ff = function(a) {
                            a = a.match(/[\d]+/g);
                            if (!a) return "";
                            a.length = 3;
                            return a.join(".")
                        };
                    (function() {
                        if (window.navigator.plugins && window.navigator.plugins.length) {
                            var a = window.navigator.plugins["Shockwave Flash"];
                            if (a && (Df = !0, a.description)) {
                                Ef = Ff(a.description);
                                return
                            }
                            if (window.navigator.plugins["Shockwave Flash 2.0"]) {
                                Df = !0;
                                Ef = "2.0.0.11";
                                return
                            }
                        }
                        if (window.navigator.mimeTypes && window.navigator.mimeTypes.length && (a = window.navigator.mimeTypes["application/x-shockwave-flash"], Df = !(!a || !a.enabledPlugin))) {
                            Ef = Ff(a.enabledPlugin.description);
                            return
                        }
                        try {
                            var c = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                            Df = !0;
                            Ef = Ff(c.GetVariable("$version"));
                            return
                        } catch (d) {}
                        try {
                            c = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                            Df = !0;
                            Ef = "6.0.21";
                            return
                        } catch (d) {}
                        try {
                            c = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Df = !0, Ef = Ff(c.GetVariable("$version"))
                        } catch (d) {}
                    })();
                    _.Gf = Df;
                    _.Hf = Ef;
                    var If;
                    If = function(a) {
                        return (a = a.exec(_.Za)) ? a[1] : ""
                    };
                    _.Jf = function() {
                        if (_.Hb) return If(/Firefox\/([0-9.]+)/);
                        if (_.C || _.ib || _.hb) return _.Bb;
                        if (_.Lb) return _.db() ? If(/CriOS\/([0-9.]+)/) : If(/Chrome\/([0-9.]+)/);
                        if (_.Mb && !_.db()) return If(/Version\/([0-9.]+)/);
                        if (_.Ib || _.Jb) {
                            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Za);
                            if (a) return a[1] + "." + a[2]
                        } else if (_.Kb) return (a = If(/Android\s+([0-9.]+)/)) ? a : If(/Version\/([0-9.]+)/);
                        return ""
                    }();
                    /*

                    Math.uuid.js (v1.4)
                    http://www.broofa.com
                    mailto:robert@broofa.com
                    Copyright (c) 2010 Robert Kieffer
                    Dual licensed under the MIT and GPL licenses.
                    */
                    var ld = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(ld, _.D);
                    _.Kf = new md;
                    _.Lf = _.hb ? "opera" : _.ib ? "edge" : _.C ? "ie" : _.Hb ? "firefox" : _.Ib ? "iphone" : _.Jb ? "ipad" : _.Kb ? "android" : _.Lb ? "chrome" : _.Mb ? "safari" : "unknown";
                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Mf, Of, Pf, Qf, Sf, Vf;
                    _.Nf = function(a, c, d) {
                        return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d)
                    };
                    Of = function(a, c, d, e) {
                        Array.prototype.splice.apply(a, _.Nf(arguments, 1))
                    };
                    Pf = function(a, c) {
                        return null !== a && c in a ? a[c] : void 0
                    };
                    Qf = function(a) {
                        var c = arguments.length;
                        if (1 == c && _.v(arguments[0])) return Qf.apply(null, arguments[0]);
                        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
                        return d
                    };
                    _.Rf = {};
                    Sf = {};
                    _.Tf = function(a, c) {
                        this.b = a === _.Rf && c || "";
                        this.o = Sf
                    };
                    _.Tf.prototype.jb = !0;
                    _.Tf.prototype.Xa = function() {
                        return this.b
                    };
                    _.Tf.prototype.toString = function() {
                        return "Const{" + this.b + "}"
                    };
                    _.Uf = function(a) {
                        return a instanceof _.Tf && a.constructor === _.Tf && a.o === Sf ? a.b : "type_error:Const"
                    };
                    Vf = {};
                    _.Wf = function() {
                        this.o = "";
                        this.w = Vf
                    };
                    _.Wf.prototype.jb = !0;
                    _.Wf.prototype.Xa = function() {
                        return this.o
                    };
                    _.Wf.prototype.Ld = !0;
                    _.Wf.prototype.b = function() {
                        return 1
                    };
                    _.Xf = function(a) {
                        if (a instanceof _.Wf && a.constructor === _.Wf && a.w === Vf) return a.o;
                        _.va(a);
                        return "type_error:TrustedResourceUrl"
                    };
                    _.Yf = function(a) {
                        return 9 == a.nodeType ? a : a.ownerDocument || a.document
                    };
                    _.Zf = function(a) {
                        for (var c; c = a.firstChild;) a.removeChild(c)
                    };
                    _.$f = function(a) {
                        return a && a.parentNode ? a.parentNode.removeChild(a) : null
                    };
                    _.ag = function(a) {
                        this.b = a || _.m.document || window.document
                    };
                    _.k = _.ag.prototype;
                    _.k.R = function(a) {
                        return _.p(a) ? this.b.getElementById(a) : a
                    };
                    _.k.Ia = function(a, c, d) {
                        return _.ud(this.b, arguments)
                    };
                    _.k.createElement = function(a) {
                        return this.b.createElement(String(a))
                    };
                    _.k.sc = function(a, c) {
                        a.appendChild(c)
                    };
                    _.k.He = _.Zf;
                    _.k.Ed = _.$f;
                    _.bg = function(a) {
                        return a ? new _.ag(_.Yf(a)) : Mf || (Mf = new _.ag)
                    };
                    _.cg = function(a) {
                        return _.Nc(a) && 1 == a.nodeType
                    };
                    Qf("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
                    _.dg = _.kb ? "MozUserSelect" : _.lb || _.ib ? "WebkitUserSelect" : null;
                    _.eg = function() {};
                    _.ua(_.eg);
                    _.eg.prototype.b = 0;
                    _.fg = function(a) {
                        return ":" + (a.b++).toString(36)
                    };
                    _.P = function(a) {
                        _.O.call(this);
                        this.w = a || _.bg();
                        this.ha = gg;
                        this.ca = null;
                        this.pa = !1;
                        this.b = null;
                        this.K = void 0;
                        this.G = this.B = this.o = this.C = null;
                        this.Aa = !1
                    };
                    _.z(_.P, _.O);
                    _.P.prototype.Fa = _.eg.U();
                    var gg = null;
                    _.P.prototype.getId = function() {
                        return this.ca || (this.ca = _.fg(this.Fa))
                    };
                    _.P.prototype.R = function() {
                        return this.b
                    };
                    var hg = function(a, c) {
                        if (a == c) throw Error("H");
                        var d;
                        if (d = c && a.o && a.ca) {
                            d = a.o;
                            var e = a.ca;
                            d = d.G && e ? Pf(d.G, e) || null : null
                        }
                        if (d && a.o != c) throw Error("H");
                        a.o = c;
                        _.P.J.ge.call(a, c)
                    };
                    _.P.prototype.ge = function(a) {
                        if (this.o && this.o != a) throw Error("I");
                        _.P.J.ge.call(this, a)
                    };
                    _.P.prototype.Fb = function() {
                        this.b = this.w.createElement("DIV")
                    };
                    _.P.prototype.Mb = function(a) {
                        ig(this, a)
                    };
                    var ig = function(a, c, d) {
                        if (a.pa) throw Error("J");
                        a.b || a.Fb();
                        c ? c.insertBefore(a.b, d || null) : a.w.b.body.appendChild(a.b);
                        a.o && !a.o.pa || a.sa()
                    };
                    _.k = _.P.prototype;
                    _.k.nb = function(a) {
                        this.b = a
                    };
                    _.k.sa = function() {
                        this.pa = !0;
                        _.jg(this, function(a) {
                            !a.pa && a.R() && a.sa()
                        })
                    };
                    _.k.za = function() {
                        _.jg(this, function(a) {
                            a.pa && a.za()
                        });
                        this.K && _.ue(this.K);
                        this.pa = !1
                    };
                    _.k.P = function() {
                        this.pa && this.za();
                        this.K && (this.K.ga(), delete this.K);
                        _.jg(this, function(a) {
                            a.ga()
                        });
                        !this.Aa && this.b && _.$f(this.b);
                        this.o = this.C = this.b = this.G = this.B = null;
                        _.P.J.P.call(this)
                    };
                    _.k.yb = function(a, c, d) {
                        if (a.pa && (d || !this.pa)) throw Error("J");
                        if (0 > c || c > _.kg(this)) throw Error("L");
                        this.G && this.B || (this.G = {}, this.B = []);
                        if (a.o == this) {
                            var e = a.getId();
                            this.G[e] = a;
                            _.Rc(this.B, a)
                        } else {
                            e = this.G;
                            var f = a.getId();
                            if (null !== e && f in e) throw Error("f`" + f);
                            e[f] = a
                        }
                        hg(a, this);
                        Of(this.B, c, 0, a);
                        a.pa && this.pa && a.o == this ? (d = this.b, c = d.childNodes[c] || null, c != a.R() && d.insertBefore(a.R(), c)) : d ? (this.b || this.Fb(), c = _.lg(this, c + 1), ig(a, this.b, c ? c.b : null)) : this.pa && !a.pa && a.b && a.b.parentNode && 1 == a.b.parentNode.nodeType &&
                            a.sa()
                    };
                    _.kg = function(a) {
                        return a.B ? a.B.length : 0
                    };
                    _.lg = function(a, c) {
                        return a.B ? a.B[c] || null : null
                    };
                    _.jg = function(a, c, d) {
                        a.B && (0, _.Da)(a.B, c, d)
                    };
                    _.P.prototype.removeChild = function(a, c) {
                        if (a) {
                            var d = _.p(a) ? a : a.getId();
                            a = this.G && d ? Pf(this.G, d) || null : null;
                            if (d && a) {
                                var e = this.G;
                                d in e && delete e[d];
                                _.Rc(this.B, a);
                                c && (a.za(), a.b && _.$f(a.b));
                                hg(a, null)
                            }
                        }
                        if (!a) throw Error("M");
                        return a
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var sg;
                    sg = [1, 4, 2];
                    _.tg = function(a) {
                        return (_.Md ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & sg[0])) && !(_.lb && _.ob && a.ctrlKey)
                    };
                    var ug, wg;
                    ug = function() {};
                    _.vg = new ug;
                    wg = ["click", "keydown", "keyup"];
                    ug.prototype.L = function(a, c, d, e, f) {
                        var g = function(a) {
                            var d = _.fe(c),
                                f = _.cg(a.target) ? a.target.getAttribute("role") || null : null;
                            "click" == a.type && _.tg(a) ? d.call(e, a) : 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != f && "tab" != f || (d.call(e, a), a.preventDefault()) : (a.type = "keypress", d.call(e, a))
                        };
                        g.zc = c;
                        g.ki = e;
                        f ? f.L(a, wg, g, d) : _.M(a, wg, g, d)
                    };
                    ug.prototype.ua = function(a, c, d, e, f) {
                        for (var g, h = 0; g = wg[h]; h++) {
                            var l = a;
                            var q = g;
                            var r = !!d;
                            q = _.Vd(l) ? l.Zb(q, r) : l ? (l = _.he(l)) ? l.Zb(q, r) : [] : [];
                            for (l = 0; r = q[l]; l++) {
                                var y = r.listener;
                                if (y.zc == c && y.ki == e) {
                                    f ? f.ua(a, g, r.listener, d, e) : _.le(a, g, r.listener, d, e);
                                    break
                                }
                            }
                        }
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var yg, Fg, Hg, Qg, Ig, Kg, Jg, Ng, Lg, Gg, Rg;
                    _.xg = function(a) {
                        return Array.prototype.concat.apply([], arguments)
                    };
                    _.Q = function(a, c, d) {
                        return _.ud(window.document, arguments)
                    };
                    yg = function(a, c) {
                        if (a) {
                            a = a.split("&");
                            for (var d = 0; d < a.length; d++) {
                                var e = a[d].indexOf("="),
                                    f = null;
                                if (0 <= e) {
                                    var g = a[d].substring(0, e);
                                    f = a[d].substring(e + 1)
                                } else g = a[d];
                                c(g, f ? (0, window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
                            }
                        }
                    };
                    _.zg = function(a, c) {
                        this.eb = this.A = this.b = "";
                        this.B = null;
                        this.o = this.C = "";
                        this.w = !1;
                        var d;
                        a instanceof _.zg ? (this.w = _.n(c) ? c : a.w, _.Ag(this, a.b), this.A = a.A, _.Bg(this, a.eb), _.Cg(this, a.B), _.Dg(this, a.Ta()), _.Eg(this, a.Qa.clone()), this.o = a.o) : a && (d = String(a).match(_.lf)) ? (this.w = !!c, _.Ag(this, d[1] || "", !0), this.A = Fg(d[2] || ""), _.Bg(this, d[3] || "", !0), _.Cg(this, d[4]), _.Dg(this, d[5] || "", !0), _.Eg(this, d[6] || "", !0), this.o = Fg(d[7] || "")) : (this.w = !!c, this.Qa = new Gg(null, this.w))
                    };
                    _.zg.prototype.toString = function() {
                        var a = [],
                            c = this.b;
                        c && a.push(Hg(c, Ig, !0), ":");
                        var d = this.eb;
                        if (d || "file" == c) a.push("//"), (c = this.A) && a.push(Hg(c, Ig, !0), "@"), a.push(_.ad(d).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), d = this.B, null != d && a.push(":", String(d));
                        if (d = this.Ta()) this.eb && "/" != d.charAt(0) && a.push("/"), a.push(Hg(d, "/" == d.charAt(0) ? Jg : Kg, !0));
                        (d = this.Qa.toString()) && a.push("?", d);
                        (d = this.o) && a.push("#", Hg(d, Lg));
                        return a.join("")
                    };
                    _.zg.prototype.clone = function() {
                        return new _.zg(this)
                    };
                    _.Ag = function(a, c, d) {
                        a.b = d ? Fg(c, !0) : c;
                        a.b && (a.b = a.b.replace(/:$/, ""));
                        return a
                    };
                    _.Bg = function(a, c, d) {
                        a.eb = d ? Fg(c, !0) : c;
                        return a
                    };
                    _.Cg = function(a, c) {
                        if (c) {
                            c = Number(c);
                            if ((0, window.isNaN)(c) || 0 > c) throw Error("N`" + c);
                            a.B = c
                        } else a.B = null;
                        return a
                    };
                    _.zg.prototype.Ta = function() {
                        return this.C
                    };
                    _.Dg = function(a, c, d) {
                        a.C = d ? Fg(c, !0) : c;
                        return a
                    };
                    _.Eg = function(a, c, d) {
                        c instanceof Gg ? (a.Qa = c, Mg(a.Qa, a.w)) : (d || (c = Hg(c, Ng)), a.Qa = new Gg(c, a.w));
                        return a
                    };
                    _.Og = function(a, c, d) {
                        a.Qa.set(c, d);
                        return a
                    };
                    _.Pg = function(a) {
                        return a instanceof _.zg ? a.clone() : new _.zg(a, void 0)
                    };
                    Fg = function(a, c) {
                        return a ? c ? (0, window.decodeURI)(a.replace(/%25/g, "%2525")) : (0, window.decodeURIComponent)(a) : ""
                    };
                    Hg = function(a, c, d) {
                        return _.p(a) ? (a = (0, window.encodeURI)(a).replace(c, Qg), d && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
                    };
                    Qg = function(a) {
                        a = a.charCodeAt(0);
                        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
                    };
                    Ig = /[#\/\?@]/g;
                    Kg = /[#\?:]/g;
                    Jg = /[#\?]/g;
                    Ng = /[#\?@]/g;
                    Lg = /#/g;
                    Gg = function(a, c) {
                        this.o = this.b = null;
                        this.w = a || null;
                        this.A = !!c
                    };
                    Rg = function(a) {
                        a.b || (a.b = new _.hf, a.o = 0, a.w && yg(a.w, function(c, d) {
                            a.add((0, window.decodeURIComponent)(c.replace(/\+/g, " ")), d)
                        }))
                    };
                    Gg.prototype.add = function(a, c) {
                        Rg(this);
                        this.w = null;
                        a = Sg(this, a);
                        var d = this.b.get(a);
                        d || this.b.set(a, d = []);
                        d.push(c);
                        this.o += 1;
                        return this
                    };
                    Gg.prototype.remove = function(a) {
                        Rg(this);
                        a = Sg(this, a);
                        return _.kf(this.b.o, a) ? (this.w = null, this.o -= this.b.get(a).length, this.b.remove(a)) : !1
                    };
                    Gg.prototype.clear = function() {
                        this.b = this.w = null;
                        this.o = 0
                    };
                    Gg.prototype.xc = function() {
                        Rg(this);
                        return 0 == this.o
                    };
                    var Tg = function(a, c) {
                        Rg(a);
                        c = Sg(a, c);
                        return _.kf(a.b.o, c)
                    };
                    _.k = Gg.prototype;
                    _.k.forEach = function(a, c) {
                        Rg(this);
                        this.b.forEach(function(d, e) {
                            (0, _.Da)(d, function(d) {
                                a.call(c, d, e, this)
                            }, this)
                        }, this)
                    };
                    _.k.Sa = function() {
                        Rg(this);
                        for (var a = this.b.Va(), c = this.b.Sa(), d = [], e = 0; e < c.length; e++)
                            for (var f = a[e], g = 0; g < f.length; g++) d.push(c[e]);
                        return d
                    };
                    _.k.Va = function(a) {
                        Rg(this);
                        var c = [];
                        if (_.p(a)) Tg(this, a) && (c = _.xg(c, this.b.get(Sg(this, a))));
                        else {
                            a = this.b.Va();
                            for (var d = 0; d < a.length; d++) c = _.xg(c, a[d])
                        }
                        return c
                    };
                    _.k.set = function(a, c) {
                        Rg(this);
                        this.w = null;
                        a = Sg(this, a);
                        Tg(this, a) && (this.o -= this.b.get(a).length);
                        this.b.set(a, [c]);
                        this.o += 1;
                        return this
                    };
                    _.k.get = function(a, c) {
                        if (!a) return c;
                        a = this.Va(a);
                        return 0 < a.length ? String(a[0]) : c
                    };
                    _.k.toString = function() {
                        if (this.w) return this.w;
                        if (!this.b) return "";
                        for (var a = [], c = this.b.Sa(), d = 0; d < c.length; d++) {
                            var e = c[d],
                                f = _.ad(e);
                            e = this.Va(e);
                            for (var g = 0; g < e.length; g++) {
                                var h = f;
                                "" !== e[g] && (h += "=" + _.ad(e[g]));
                                a.push(h)
                            }
                        }
                        return this.w = a.join("&")
                    };
                    _.k.clone = function() {
                        var a = new Gg;
                        a.w = this.w;
                        this.b && (a.b = this.b.clone(), a.o = this.o);
                        return a
                    };
                    var Sg = function(a, c) {
                            c = String(c);
                            a.A && (c = c.toLowerCase());
                            return c
                        },
                        Mg = function(a, c) {
                            c && !a.A && (Rg(a), a.w = null, a.b.forEach(function(a, c) {
                                var d = c.toLowerCase();
                                c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.w = null, this.b.set(Sg(this, d), _.Sc(a)), this.o += a.length))
                            }, a));
                            a.A = c
                        };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var qh, uh, xh, Eh, Lh, Nh;
                    _.ch = function(a) {
                        if (a instanceof _.xc && a.constructor === _.xc && a.A === _.wc) return a.o;
                        _.va(a);
                        return "type_error:SafeHtml"
                    };
                    _.dh = function(a) {
                        if (a instanceof _.xc) return a;
                        var c = "object" == typeof a,
                            d = null;
                        c && a.Ld && (d = a.b());
                        a = _.id(c && a.jb ? a.Xa() : String(a));
                        return _.yc(a, d)
                    };
                    _.eh = function(a, c) {
                        c = _.ch(c);
                        if ((0, _.Bc)())
                            for (; a.lastChild;) a.removeChild(a.lastChild);
                        a.innerHTML = c
                    };
                    _.fh = function(a, c) {
                        this.x = _.n(a) ? a : 0;
                        this.b = _.n(c) ? c : 0
                    };
                    _.fh.prototype.clone = function() {
                        return new _.fh(this.x, this.b)
                    };
                    _.fh.prototype.ceil = function() {
                        this.x = Math.ceil(this.x);
                        this.b = Math.ceil(this.b);
                        return this
                    };
                    _.fh.prototype.floor = function() {
                        this.x = Math.floor(this.x);
                        this.b = Math.floor(this.b);
                        return this
                    };
                    _.fh.prototype.round = function() {
                        this.x = Math.round(this.x);
                        this.b = Math.round(this.b);
                        return this
                    };
                    _.gh = function(a, c) {
                        this.width = a;
                        this.height = c
                    };
                    _.k = _.gh.prototype;
                    _.k.clone = function() {
                        return new _.gh(this.width, this.height)
                    };
                    _.k.Rf = function() {
                        return this.width * this.height
                    };
                    _.k.aspectRatio = function() {
                        return this.width / this.height
                    };
                    _.k.xc = function() {
                        return !this.Rf()
                    };
                    _.k.ceil = function() {
                        this.width = Math.ceil(this.width);
                        this.height = Math.ceil(this.height);
                        return this
                    };
                    _.k.floor = function() {
                        this.width = Math.floor(this.width);
                        this.height = Math.floor(this.height);
                        return this
                    };
                    _.k.round = function() {
                        this.width = Math.round(this.width);
                        this.height = Math.round(this.height);
                        return this
                    };
                    _.hh = function(a) {
                        return "CSS1Compat" == a.compatMode
                    };
                    _.ih = function(a) {
                        a = (a || window).document;
                        a = _.hh(a) ? a.documentElement : a.body;
                        return new _.gh(a.clientWidth, a.clientHeight)
                    };
                    _.jh = function(a) {
                        return a.scrollingElement ? a.scrollingElement : !_.lb && _.hh(a) ? a.documentElement : a.body || a.documentElement
                    };
                    _.kh = function(a) {
                        var c = _.jh(a);
                        a = _.rd(a);
                        return _.C && _.Cb("10") && a.pageYOffset != c.scrollTop ? new _.fh(c.scrollLeft, c.scrollTop) : new _.fh(a.pageXOffset || c.scrollLeft, a.pageYOffset || c.scrollTop)
                    };
                    _.lh = function(a, c) {
                        var d = _.Yf(a);
                        return d.defaultView && d.defaultView.getComputedStyle && (a = d.defaultView.getComputedStyle(a, null)) ? a[c] || a.getPropertyValue(c) || "" : ""
                    };
                    _.mh = function(a, c) {
                        return _.lh(a, c) || (a.currentStyle ? a.currentStyle[c] : null) || a.style && a.style[c]
                    };
                    _.nh = function(a) {
                        return "rtl" == _.mh(a, "direction")
                    };
                    _.oh = function(a) {
                        a.K || (a.K = new _.qe(a));
                        return a.K
                    };
                    _.ph = function(a, c) {
                        if (a.pa) throw Error("J");
                        if (c) {
                            a.Aa = !0;
                            var d = _.Yf(c);
                            a.w && a.w.b == d || (a.w = _.bg(c));
                            a.nb(c);
                            a.sa()
                        } else throw Error("K");
                    };
                    qh = 0;
                    _.rh = function(a) {
                        return a[_.wa] || (a[_.wa] = ++qh)
                    };
                    _.sh = function(a) {
                        for (var c in a) return !1;
                        return !0
                    };
                    _.th = function(a, c) {
                        if ("textContent" in a) a.textContent = c;
                        else if (3 == a.nodeType) a.data = String(c);
                        else if (a.firstChild && 3 == a.firstChild.nodeType) {
                            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                            a.firstChild.data = String(c)
                        } else _.Zf(a), a.appendChild(_.Yf(a).createTextNode(String(c)))
                    };
                    _.vh = function(a, c, d) {
                        _.v(d) && (d = d.join(" "));
                        var e = "aria-" + c;
                        "" === d || void 0 == d ? (uh || (uh = {
                            atomic: !1,
                            autocomplete: "none",
                            dropeffect: "none",
                            haspopup: !1,
                            live: "off",
                            multiline: !1,
                            multiselectable: !1,
                            orientation: "vertical",
                            readonly: !1,
                            relevant: "additions text",
                            required: !1,
                            sort: "none",
                            busy: !1,
                            disabled: !1,
                            hidden: !1,
                            invalid: "false"
                        }), d = uh, c in d ? a.setAttribute(e, d[c]) : a.removeAttribute(e)) : a.setAttribute(e, d)
                    };
                    _.wh = function(a) {
                        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.lb || _.ib) && 0 == a) return !0;
                        switch (a) {
                            case 32:
                            case 43:
                            case 63:
                            case 64:
                            case 107:
                            case 109:
                            case 110:
                            case 111:
                            case 186:
                            case 59:
                            case 189:
                            case 187:
                            case 61:
                            case 188:
                            case 190:
                            case 191:
                            case 192:
                            case 222:
                            case 219:
                            case 220:
                            case 221:
                                return !0;
                            default:
                                return !1
                        }
                    };
                    xh = function(a) {
                        switch (a) {
                            case 61:
                                return 187;
                            case 59:
                                return 186;
                            case 173:
                                return 189;
                            case 224:
                                return 91;
                            case 0:
                                return 224;
                            default:
                                return a
                        }
                    };
                    _.yh = function(a) {
                        if (_.kb) a = xh(a);
                        else if (_.ob && _.lb) switch (a) {
                            case 93:
                                a = 91
                        }
                        return a
                    };
                    _.zh = function(a, c, d, e, f, g) {
                        if (_.lb && !_.Cb("525")) return !0;
                        if (_.ob && f) return _.wh(a);
                        if (f && !e) return !1;
                        if (!_.kb) {
                            _.sa(c) && (c = _.yh(c));
                            var h = 17 == c || 18 == c || _.ob && 91 == c;
                            if ((!d || _.ob) && h || _.ob && 16 == c && (e || g)) return !1
                        }
                        if ((_.lb || _.ib) && e && d) switch (a) {
                            case 220:
                            case 219:
                            case 221:
                            case 192:
                            case 186:
                            case 189:
                            case 187:
                            case 188:
                            case 190:
                            case 191:
                            case 192:
                            case 222:
                                return !1
                        }
                        if (_.C && e && c == a) return !1;
                        switch (a) {
                            case 13:
                                return _.kb ? g || f ? !1 : !(d && e) : !0;
                            case 27:
                                return !(_.lb || _.ib || _.kb)
                        }
                        return _.kb && (e || f || g) ? !1 : _.wh(a)
                    };
                    _.Ah = function(a, c, d, e) {
                        this.top = a;
                        this.right = c;
                        this.bottom = d;
                        this.left = e
                    };
                    _.k = _.Ah.prototype;
                    _.k.getHeight = function() {
                        return this.bottom - this.top
                    };
                    _.k.clone = function() {
                        return new _.Ah(this.top, this.right, this.bottom, this.left)
                    };
                    _.k.expand = function(a, c, d, e) {
                        _.Nc(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(c), this.bottom += Number(d), this.left -= Number(e));
                        return this
                    };
                    _.k.ceil = function() {
                        this.top = Math.ceil(this.top);
                        this.right = Math.ceil(this.right);
                        this.bottom = Math.ceil(this.bottom);
                        this.left = Math.ceil(this.left);
                        return this
                    };
                    _.k.floor = function() {
                        this.top = Math.floor(this.top);
                        this.right = Math.floor(this.right);
                        this.bottom = Math.floor(this.bottom);
                        this.left = Math.floor(this.left);
                        return this
                    };
                    _.k.round = function() {
                        this.top = Math.round(this.top);
                        this.right = Math.round(this.right);
                        this.bottom = Math.round(this.bottom);
                        this.left = Math.round(this.left);
                        return this
                    };
                    _.Bh = function(a, c, d, e) {
                        this.left = a;
                        this.top = c;
                        this.width = d;
                        this.height = e
                    };
                    _.Bh.prototype.clone = function() {
                        return new _.Bh(this.left, this.top, this.width, this.height)
                    };
                    _.Bh.prototype.ceil = function() {
                        this.left = Math.ceil(this.left);
                        this.top = Math.ceil(this.top);
                        this.width = Math.ceil(this.width);
                        this.height = Math.ceil(this.height);
                        return this
                    };
                    _.Bh.prototype.floor = function() {
                        this.left = Math.floor(this.left);
                        this.top = Math.floor(this.top);
                        this.width = Math.floor(this.width);
                        this.height = Math.floor(this.height);
                        return this
                    };
                    _.Bh.prototype.round = function() {
                        this.left = Math.round(this.left);
                        this.top = Math.round(this.top);
                        this.width = Math.round(this.width);
                        this.height = Math.round(this.height);
                        return this
                    };
                    _.Ch = function(a, c) {
                        "number" == typeof a && (a = (c ? Math.round(a) : a) + "px");
                        return a
                    };
                    _.Dh = function(a, c, d) {
                        if (c instanceof _.fh) {
                            var e = c.x;
                            c = c.b
                        } else e = c, c = d;
                        a.style.left = _.Ch(e, !1);
                        a.style.top = _.Ch(c, !1)
                    };
                    Eh = function(a) {
                        try {
                            var c = a.getBoundingClientRect()
                        } catch (d) {
                            return {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            }
                        }
                        _.C && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);
                        return c
                    };
                    _.Fh = function(a) {
                        var c = _.Yf(a),
                            d = new _.fh(0, 0);
                        var e = c ? _.Yf(c) : window.document;
                        e = !_.C || _.Eb(9) || _.hh(_.bg(e).b) ? e.documentElement : e.body;
                        if (a == e) return d;
                        a = Eh(a);
                        c = _.kh(_.bg(c).b);
                        d.x = a.left + c.x;
                        d.b = a.top + c.b;
                        return d
                    };
                    _.Gh = function(a) {
                        var c = a.offsetWidth,
                            d = a.offsetHeight,
                            e = _.lb && !c && !d;
                        return _.n(c) && !e || !a.getBoundingClientRect ? new _.gh(c, d) : (a = Eh(a), new _.gh(a.right - a.left, a.bottom - a.top))
                    };
                    _.Hh = function(a) {
                        a = Eh(a);
                        return new _.fh(a.left, a.top)
                    };
                    _.Ih = function(a) {
                        if ("none" != _.mh(a, "display")) return _.Gh(a);
                        var c = a.style,
                            d = c.display,
                            e = c.visibility,
                            f = c.position;
                        c.visibility = "hidden";
                        c.position = "absolute";
                        c.display = "inline";
                        a = _.Gh(a);
                        c.display = d;
                        c.position = f;
                        c.visibility = e;
                        return a
                    };
                    _.Jh = function(a, c) {
                        a.style.display = c ? "" : "none"
                    };
                    _.Kh = function(a, c) {
                        if (/^\d+px?$/.test(c)) return (0, window.parseInt)(c, 10);
                        var d = a.style.left,
                            e = a.runtimeStyle.left;
                        a.runtimeStyle.left = a.currentStyle.left;
                        a.style.left = c;
                        c = a.style.pixelLeft;
                        a.style.left = d;
                        a.runtimeStyle.left = e;
                        return +c
                    };
                    Lh = function(a, c) {
                        return (c = a.currentStyle ? a.currentStyle[c] : null) ? _.Kh(a, c) : 0
                    };
                    _.Mh = function(a, c) {
                        if (_.C) {
                            var d = Lh(a, c + "Left"),
                                e = Lh(a, c + "Right"),
                                f = Lh(a, c + "Top");
                            a = Lh(a, c + "Bottom");
                            return new _.Ah(f, e, a, d)
                        }
                        d = _.lh(a, c + "Left");
                        e = _.lh(a, c + "Right");
                        f = _.lh(a, c + "Top");
                        a = _.lh(a, c + "Bottom");
                        return new _.Ah((0, window.parseFloat)(f), (0, window.parseFloat)(e), (0, window.parseFloat)(a), (0, window.parseFloat)(d))
                    };
                    Nh = function(a) {
                        if (a.classList) return a.classList;
                        a = a.className;
                        return _.p(a) && a.match(/\S+/g) || []
                    };
                    _.Oh = function(a, c) {
                        return a.classList ? a.classList.contains(c) : _.Qc(Nh(a), c)
                    };
                    _.R = function(a, c) {
                        a.classList ? a.classList.add(c) : _.Oh(a, c) || (a.className += 0 < a.className.length ? " " + c : c)
                    };
                    _.Ph = function(a, c) {
                        if (a.classList)(0, _.Da)(c, function(c) {
                            _.R(a, c)
                        });
                        else {
                            var d = {};
                            (0, _.Da)(Nh(a), function(a) {
                                d[a] = !0
                            });
                            (0, _.Da)(c, function(a) {
                                d[a] = !0
                            });
                            a.className = "";
                            for (var e in d) a.className += 0 < a.className.length ? " " + e : e
                        }
                    };
                    _.S = function(a, c) {
                        a.classList ? a.classList.remove(c) : _.Oh(a, c) && (a.className = (0, _.Ea)(Nh(a), function(a) {
                            return a != c
                        }).join(" "))
                    };
                    _.Qh = function(a, c) {
                        a.classList ? (0, _.Da)(c, function(c) {
                            _.S(a, c)
                        }) : a.className = (0, _.Ea)(Nh(a), function(a) {
                            return !_.Qc(c, a)
                        }).join(" ")
                    };
                    _.Rh = function(a) {
                        _.O.call(this);
                        this.b = a;
                        a = _.C ? "focusout" : "blur";
                        this.o = _.M(this.b, _.C ? "focusin" : "focus", this, !_.C);
                        this.w = _.M(this.b, a, this, !_.C)
                    };
                    _.z(_.Rh, _.O);
                    _.Rh.prototype.handleEvent = function(a) {
                        var c = new _.Sd(a.b);
                        c.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
                        this.dispatchEvent(c)
                    };
                    _.Rh.prototype.P = function() {
                        _.Rh.J.P.call(this);
                        _.me(this.o);
                        _.me(this.w);
                        delete this.b
                    };
                    _.Sh = function() {
                        if (_.pb) {
                            var a = /Windows NT ([0-9.]+)/;
                            return (a = a.exec(_.Za)) ? a[1] : "0"
                        }
                        return _.ob ? (a = /10[_.][0-9_.]+/, (a = a.exec(_.Za)) ? a[0].replace(/_/g, ".") : "10") : _.rb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.Za)) ? a[1] : "") : _.sb || _.tb || _.ub ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.Za)) ? a[1].replace(/_/g, ".") : "") : ""
                    }();

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Hi, Pi, Qi, bj, cj, ej, fj, gj, uj, vj;
                    _.Fi = function(a, c) {
                        if (c < a.C) {
                            c += a.B;
                            var d = a.w[c];
                            return d === _.Pb ? a.w[c] = [] : d
                        }
                        d = a.A[c];
                        return d === _.Pb ? a.A[c] = [] : d
                    };
                    _.T = function(a, c, d) {
                        c < a.C ? a.w[c + a.B] = d : (_.Qb(a), a.A[c] = d)
                    };
                    _.Gi = function(a, c, d) {
                        a.b || (a.b = {});
                        if (!a.b[d]) {
                            for (var e = _.Fi(a, d), f = [], g = 0; g < e.length; g++) f[g] = new c(e[g]);
                            a.b[d] = f
                        }
                        c = a.b[d];
                        c == _.Pb && (c = a.b[d] = []);
                        return c
                    };
                    Hi = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(Hi, _.D);
                    var Ii = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(Ii, _.D);
                    _.Ji = function(a, c, d) {
                        a.b || (a.b = {});
                        var e = d ? d.ab() : d;
                        a.b[c] = d;
                        _.T(a, c, e)
                    };
                    _.Ki = function(a, c, d) {
                        a.b || (a.b = {});
                        d = d || [];
                        for (var e = [], f = 0; f < d.length; f++) e[f] = d[f].ab();
                        a.b[c] = d;
                        _.T(a, c, e)
                    };
                    _.Li = function(a) {
                        return a ? _.rd(a) : window
                    };
                    _.Mi = function(a) {
                        return _.Ja(_.Ia.U(), a)
                    };
                    _.Ni = function(a) {
                        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
                    };
                    _.Oi = function() {
                        return _.H(_.L(), Hi, 11) || new Hi
                    };
                    Pi = function(a) {
                        var c = c || 0;
                        return function() {
                            return a.apply(this, Array.prototype.slice.call(arguments, 0, c))
                        }
                    };
                    Qi = function(a, c) {
                        return a + Math.random() * (c - a)
                    };
                    _.Ri = function(a, c) {
                        return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1
                    };
                    _.Si = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(_.Si, _.D);
                    var Ti = function(a) {
                            if (!a) return "";
                            a = a.split("#")[0].split("?")[0];
                            a = a.toLowerCase();
                            0 == a.indexOf("//") && (a = window.location.protocol + a);
                            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
                            var c = a.substring(a.indexOf("://") + 3),
                                d = c.indexOf("/"); - 1 != d && (c = c.substring(0, d));
                            a = a.substring(0, a.indexOf("://"));
                            if ("http" !== a && "https" !== a && "chrome-extension" !== a && "file" !== a && "android-app" !== a && "chrome-search" !== a && "app" !== a) throw Error("s`" + a);
                            d = "";
                            var e = c.indexOf(":");
                            if (-1 != e) {
                                var f = c.substring(e + 1);
                                c = c.substring(0,
                                    e);
                                if ("http" === a && "80" !== f || "https" === a && "443" !== f) d = ":" + f
                            }
                            return a + "://" + c + d
                        },
                        Ui = function() {
                            function a() {
                                f[0] = 1732584193;
                                f[1] = 4023233417;
                                f[2] = 2562383102;
                                f[3] = 271733878;
                                f[4] = 3285377520;
                                y = r = 0
                            }

                            function c(a) {
                                for (var c = h, d = 0; 64 > d; d += 4) c[d / 4] = a[d] << 24 | a[d + 1] << 16 | a[d + 2] << 8 | a[d + 3];
                                for (d = 16; 80 > d; d++) a = c[d - 3] ^ c[d - 8] ^ c[d - 14] ^ c[d - 16], c[d] = (a << 1 | a >>> 31) & 4294967295;
                                a = f[0];
                                var e = f[1],
                                    g = f[2],
                                    l = f[3],
                                    q = f[4];
                                for (d = 0; 80 > d; d++) {
                                    if (40 > d)
                                        if (20 > d) {
                                            var r = l ^ e & (g ^ l);
                                            var y = 1518500249
                                        } else r = e ^ g ^ l, y = 1859775393;
                                    else 60 > d ? (r =
                                        e & g | l & (e | g), y = 2400959708) : (r = e ^ g ^ l, y = 3395469782);
                                    r = ((a << 5 | a >>> 27) & 4294967295) + r + q + y + c[d] & 4294967295;
                                    q = l;
                                    l = g;
                                    g = (e << 30 | e >>> 2) & 4294967295;
                                    e = a;
                                    a = r
                                }
                                f[0] = f[0] + a & 4294967295;
                                f[1] = f[1] + e & 4294967295;
                                f[2] = f[2] + g & 4294967295;
                                f[3] = f[3] + l & 4294967295;
                                f[4] = f[4] + q & 4294967295
                            }

                            function d(a, d) {
                                if ("string" === typeof a) {
                                    a = (0, window.unescape)((0, window.encodeURIComponent)(a));
                                    for (var e = [], f = 0, h = a.length; f < h; ++f) e.push(a.charCodeAt(f));
                                    a = e
                                }
                                d || (d = a.length);
                                e = 0;
                                if (0 == r)
                                    for (; e + 64 < d;) c(a.slice(e, e + 64)), e += 64, y += 64;
                                for (; e < d;)
                                    if (g[r++] =
                                        a[e++], y++, 64 == r)
                                        for (r = 0, c(g); e + 64 < d;) c(a.slice(e, e + 64)), e += 64, y += 64
                            }

                            function e() {
                                var a = [],
                                    e = 8 * y;
                                56 > r ? d(l, 56 - r) : d(l, 64 - (r - 56));
                                for (var h = 63; 56 <= h; h--) g[h] = e & 255, e >>>= 8;
                                c(g);
                                for (h = e = 0; 5 > h; h++)
                                    for (var q = 24; 0 <= q; q -= 8) a[e++] = f[h] >> q & 255;
                                return a
                            }
                            for (var f = [], g = [], h = [], l = [128], q = 1; 64 > q; ++q) l[q] = 0;
                            var r, y;
                            a();
                            return {
                                reset: a,
                                update: d,
                                digest: e,
                                jg: function() {
                                    for (var a = e(), c = "", d = 0; d < a.length; d++) c += "0123456789ABCDEF".charAt(Math.floor(a[d] / 16)) + "0123456789ABCDEF".charAt(a[d] % 16);
                                    return c
                                }
                            }
                        },
                        Vi = function(a) {
                            var c =
                                Ui();
                            c.update(a);
                            return c.jg().toLowerCase()
                        },
                        Wi = function(a, c, d) {
                            var e = [],
                                f = [];
                            if (1 == (_.v(d) ? 2 : 1)) return f = [c, a], (0, _.Da)(e, function(a) {
                                f.push(a)
                            }), Vi(f.join(" "));
                            var g = [],
                                h = [];
                            (0, _.Da)(d, function(a) {
                                h.push(a.key);
                                g.push(a.value)
                            });
                            d = Math.floor((new Date).getTime() / 1E3);
                            f = 0 == g.length ? [d, c, a] : [g.join(":"), d, c, a];
                            (0, _.Da)(e, function(a) {
                                f.push(a)
                            });
                            a = Vi(f.join(" "));
                            a = [d, a];
                            0 == h.length || a.push(h.join(""));
                            return a.join("_")
                        },
                        Xi = function(a) {
                            var c = Ti(String(_.m.location.href)),
                                d = _.m.__OVERRIDE_SID;
                            null ==
                                d && (d = (new _.vd(window.document)).get("SID"));
                            if (d && (c = (d = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:")) ? _.m.__SAPISID : _.m.__APISID, null == c && (c = (new _.vd(window.document)).get(d ? "SAPISID" : "APISID")), c)) {
                                d = d ? "SAPISIDHASH" : "APISIDHASH";
                                var e = String(_.m.location.href);
                                return e && c && d ? [d, Wi(Ti(e), c, a || null)].join(" ") : null
                            }
                            return null
                        },
                        Yi = function() {
                            return _.B("iPad") || _.B("Android") && !_.B("Mobile") || _.B("Silk")
                        },
                        Zi = function() {
                            return !Yi() && (_.B("iPod") || _.B("iPhone") || _.B("Android") || _.B("IEMobile"))
                        },
                        $i = function(a) {
                            this.b = this.o = this.w = a
                        };
                    $i.prototype.reset = function() {
                        this.b = this.o = this.w
                    };
                    $i.prototype.ka = function() {
                        return this.o
                    };
                    _.aj = function(a, c, d) {
                        if (_.v(c))
                            for (var e = 0; e < c.length; e++) _.aj(a, String(c[e]), d);
                        else null != c && d.push(a + ("" === c ? "" : "=" + _.ad(c)))
                    };
                    bj = function(a, c) {
                        var d = [];
                        for (c = c || 0; c < a.length; c += 2) _.aj(a[c], a[c + 1], d);
                        return d.join("&")
                    };
                    cj = function(a, c) {
                        var d = 2 == arguments.length ? bj(arguments[1], 0) : bj(arguments, 1);
                        return _.nf(a, d)
                    };
                    _.dj = function(a, c, d, e, f, g, h) {
                        var l = new _.tf;
                        _.wf.push(l);
                        c && l.L("complete", c);
                        l.Oa("ready", l.S);
                        g && (l.C = Math.max(0, g));
                        h && (l.K = h);
                        l.send(a, d, e, f)
                    };
                    ej = function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                            var c = 16 * Math.random() | 0;
                            return ("x" == a ? c : c & 3 | 8).toString(16)
                        })
                    };
                    fj = function(a, c, d) {
                        _.dj(a.url, function(a) {
                            a = a.target;
                            a.yc() ? c(a.Ge()) : d(a.Ua())
                        }, a.o, a.body, a.b, a.w, a.withCredentials)
                    };
                    gj = [3, 20];
                    _.hj = function(a) {
                        _.E(this, a, 0, 27, gj)
                    };
                    _.z(_.hj, _.D);
                    var ij = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(ij, _.D);
                    var jj = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(jj, _.D);
                    var kj = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(kj, _.D);
                    var lj = [3, 5],
                        mj = function(a) {
                            _.E(this, a, 0, 15, lj)
                        };
                    _.z(mj, _.D);
                    var nj = function(a) {
                            var c = (0, _.x)().toString();
                            _.T(a, 4, c)
                        },
                        oj = [5],
                        pj = function(a) {
                            _.E(this, a, 0, 6, oj)
                        };
                    _.z(pj, _.D);
                    var qj = function() {
                        this.type = "event-logged"
                    };
                    _.z(qj, _.Qd);
                    var rj = function(a, c, d, e, f, g, h, l, q) {
                        _.O.call(this);
                        this.da = a;
                        this.Y = c || _.ta;
                        this.A = new mj;
                        this.ha = e;
                        this.b = [];
                        this.W = "";
                        this.X = _.Ic(Qi, 0, 1);
                        this.F = f || null;
                        this.C = d || null;
                        this.H = h || !1;
                        this.M = q || null;
                        this.Z = this.G = !1;
                        this.V = this.N = -1;
                        this.T = !1;
                        this.aa = !l;
                        this.K = 0;
                        this.ba = 1;
                        this.S = g || !1;
                        a = new kj;
                        _.T(a, 1, 1);
                        this.O = a;
                        _.Ji(this.A, 1, a);
                        _.T(this.A, 2, this.da);
                        this.w = new $i(1E4);
                        this.o = new _.ef(this.w.ka());
                        _.Kc(this, this.o);
                        _.M(this.o, "tick", Pi(this.flush), !1, this);
                        this.D = new _.ef(6E5);
                        _.Kc(this, this.D);
                        _.M(this.D,
                            "tick", Pi(this.flush), !1, this);
                        this.H || this.D.start();
                        this.S || (_.M(_.Li(), "beforeunload", this.B, !1, this), _.M(_.Li(), "unload", this.B, !1, this), _.M(window.document, "pagehide", this.B, !1, this))
                    };
                    _.z(rj, _.O);
                    rj.prototype.P = function() {
                        this.B();
                        rj.J.P.call(this)
                    };
                    var sj = function(a) {
                        if (!a.F) {
                            var c = .01 > a.X(),
                                d = .8 > a.X() ? "&hasfast=true" : "";
                            a.F = c ? "https://www.google.com/log?format=json" + d : "https://play.google.com/log?format=json" + d
                        }
                        return a.F
                    };
                    rj.prototype.Ra = function(a) {
                        if (a instanceof _.hj) this.log(a);
                        else {
                            var c = new _.hj;
                            a = a.o();
                            _.T(c, 8, a);
                            this.log(c)
                        }
                    };
                    var tj = function(a, c) {
                        a.w = new $i(1 > c ? 1 : c);
                        _.ff(a.o, a.w.ka())
                    };
                    rj.prototype.log = function(a) {
                        a = _.Tb(a);
                        var c = this.ba++;
                        _.T(a, 21, c);
                        if (!_.F(a, 1)) {
                            c = a;
                            var d = (0, _.x)().toString();
                            _.T(c, 1, d)
                        }
                        for (; 1E3 <= this.b.length;) this.b.shift(), ++this.K;
                        this.b.push(a);
                        this.dispatchEvent(new qj(a));
                        this.H || this.o.o || this.o.start()
                    };
                    rj.prototype.flush = function(a, c) {
                        if (0 == this.b.length) a && a();
                        else {
                            var d = (0, _.x)();
                            if (this.V > d && this.N < d) c && c("throttled");
                            else {
                                var e = _.Tb(this.A);
                                nj(e);
                                _.Ki(e, 3, this.b);
                                _.T(e, 14, this.K);
                                d = {};
                                var f = this.Y();
                                f && (d.Authorization = f);
                                var g = sj(this);
                                this.C && (d["X-Goog-AuthUser"] = this.C, g = _.of(g, "authuser", this.C));
                                this.M && (d["X-Goog-PageId"] = this.M, g = _.of(g, "pageId", this.M));
                                if (f && this.W == f) c && c("stale-auth-token");
                                else if (this.b = [], this.o.o && this.o.stop(), this.K = 0, this.G) a && a();
                                else {
                                    var h = e.o();
                                    d = {
                                        url: g,
                                        body: h,
                                        A: 1,
                                        b: d,
                                        o: "POST",
                                        withCredentials: this.aa,
                                        w: 0
                                    };
                                    g = (0, _.w)(function(c) {
                                        this.w.reset();
                                        _.ff(this.o, this.w.ka());
                                        if (c) {
                                            try {
                                                var d = JSON.parse(c.replace(")]}'\n", ""));
                                                var e = new pj(d)
                                            } catch (y) {}
                                            e && (c = _.G(e, 1, "-1"), c = Number(c), 0 < c && (this.N = (0, _.x)(), this.V = this.N + c), e.A ? (e.b || (e.b = {}), _.Kf.o() ? (!e.b[175237375] && e.A[175237375] && (e.b[175237375] = new _.Kf.b(e.A[175237375])), e = e.b[175237375]) : e = e.A[175237375]) : e = void 0, e && (e = _.G(e, 1, -1), -1 != e && (this.T || tj(this, e))))
                                        }
                                        a && a()
                                    }, this);
                                    h = (0, _.w)(function(a) {
                                        var d =
                                            _.Gi(e, _.hj, 3),
                                            g = this.w;
                                        g.b = Math.min(3E5, 2 * g.b);
                                        g.o = Math.min(3E5, g.b + Math.round(.2 * (Math.random() - .5) * g.b));
                                        _.ff(this.o, this.w.ka());
                                        401 == a && f && (this.W = f);
                                        if (500 <= a && 600 > a || 401 == a || 0 == a) this.b = d.concat(this.b), this.H || this.o.o || this.o.start();
                                        c && c("net-send-failed", a)
                                    }, this);
                                    this.ha(d, g, h)
                                }
                            }
                        }
                    };
                    rj.prototype.B = function() {
                        this.G || (this.Z && uj(this), this.flush())
                    };
                    uj = function(a) {
                        vj(a, function(a, d) {
                            a = _.of(a, "format", "json");
                            return _.Li().navigator.sendBeacon(a, d.o())
                        })
                    };
                    vj = function(a, c) {
                        if (0 != a.b.length) {
                            var d = _.sf(sj(a), "format");
                            d = cj(d, "auth", a.Y(), "authuser", a.C || "0");
                            for (var e = 0; 10 > e && a.b.length; ++e) {
                                var f = a.b.slice(0, 32),
                                    g = _.Tb(a.A);
                                nj(g);
                                _.Ki(g, 3, f);
                                if (!c(d, g)) break;
                                a.b = a.b.slice(f.length)
                            }
                        }
                    };
                    _.wj = function(a, c, d, e, f, g) {
                        rj.call(this, a, Xi, c, fj, d, e, f, void 0, g);
                        a = this.O;
                        e = this.S;
                        c = new jj;
                        d = new ij;
                        f = Zi() || Yi() ? Yi() ? 2 : Zi() ? 1 : 0 : 3;
                        _.T(c, 6, _.B("Android") ? 3 : _.B("CrOS") ? 5 : _.B("CrKey") ? 9 : _.B("Windows") ? 2 : _.B("iPad") ? 6 : _.cb() ? 7 : _.B("iPod") ? 8 : _.B("Linux") ? 4 : _.B("Macintosh") ? 1 : 0);
                        g = _.Za;
                        var h = "";
                        _.B("Windows") ? (h = /Windows (?:NT|Phone) ([0-9.]+)/, h = (g = h.exec(g)) ? g[1] : "0.0") : _.db() ? (h = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, h = (g = h.exec(g)) && g[1].replace(/_/g, ".")) : _.B("Macintosh") ? (h = /Mac OS X ([0-9_.]+)/,
                            h = (g = h.exec(g)) ? g[1].replace(/_/g, ".") : "10") : _.B("Android") ? (h = /Android\s+([^\);]+)(\)|;)/, h = (g = h.exec(g)) && g[1]) : _.B("CrOS") && (h = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, h = (g = h.exec(g)) && g[1]);
                        _.T(c, 2, h || "");
                        _.T(c, 3, f);
                        e || (e = _.Li(), f = window.document.documentElement.getAttribute("lang"), _.T(c, 5, f), _.T(d, 1, e.navigator.language || e.navigator.browserLanguage));
                        _.T(d, 2, _.Lf);
                        _.T(d, 3, _.Jf);
                        _.Gf && _.T(d, 4, _.Hf);
                        _.Ji(a, 11, c);
                        _.Ji(a, 9, d);
                        _.Ji(this.A, 1, this.O)
                    };
                    _.z(_.wj, rj);
                    var xj = [1],
                        yj = function(a, c, d) {
                            _.A.call(this);
                            this.T = d;
                            this.w = _.K(+_.G(a, 2, 1E-4), .001);
                            this.Y = _.K(+_.G(a, 10, 0), 0);
                            this.V = _.K(_.F(a, 4), 0);
                            this.S = _.K(_.F(a, 5), -1);
                            this.O = _.J(_.F(a, 7), "");
                            this.M = _.J(_.F(a, 6), "");
                            this.K = _.J(_.F(a, 8), "");
                            this.G = _.F(a, 9);
                            this.W = !!_.F(a, 11);
                            this.N = !!_.F(a, 12);
                            this.C = !!_.F(a, 13);
                            this.B = !!_.F(a, 14);
                            this.F = !!_.F(a, 15);
                            this.D = !!_.F(a, 16);
                            d = Math.random();
                            this.A = _.I(_.F(a, 1)) && d < this.w;
                            this.o = _.I(_.F(a, 1)) && d < this.Y;
                            this.H = "og-" + ej();
                            if (this.A || this.o) a = _.F(a, 3) ? "https://jmt17.google.com/log" :
                                void 0, c = this.b = new _.wj(373, _.J(_.F(c, 5)), a), c.T = !0, tj(c, 1E3), this.b.Z = !!_.Li().navigator.sendBeacon && (_.Lb || _.Hb && _.Cb(45)), _.Kc(this, this.b)
                        };
                    _.z(yj, _.A);
                    yj.prototype.log = function(a, c) {
                        var d = this.A && !_.Qc(xj, a) || this.o && !!_.Qc(xj, a);
                        if (d) {
                            var e = c || new _.Si;
                            _.T(e, 1, a);
                            _.T(e, 2, this.V);
                            _.T(e, 4, this.w);
                            _.T(e, 3, this.S);
                            _.T(e, 11, this.M);
                            _.T(e, 10, this.O);
                            _.T(e, 5, this.K);
                            window.performance && window.performance.timing && _.T(e, 14, (new Date).getTime() - window.performance.timing.navigationStart);
                            _.T(e, 13, this.G);
                            _.T(e, 16, this.W);
                            _.T(e, 17, this.N);
                            _.T(e, 19, this.H);
                            _.T(e, 21, this.C);
                            _.T(e, 23, this.B);
                            _.T(e, 25, this.F);
                            _.T(e, 26, this.D);
                            c = new _.hj;
                            e = e.o();
                            _.T(c, 8, e);
                            this.b.log(c)
                        }
                        this.T && window.console.log("Clearcut log called with event = ", a, "(" + (d ? "" : "NOT ") + "sent to server)")
                    };
                    var zj;
                    zj = null;
                    _.Aj = function() {
                        var a = _.H(_.L(), Ii, 29) || new Ii,
                            c = _.Oi();
                        return zj ? zj : zj = new yj(a, c, _.cc)
                    };
                    var Bj;
                    Bj = function() {
                        this.o = !1;
                        this.b = []
                    };
                    _.U = function(a) {
                        var c = _.Cj;
                        c.o ? a() : c.b.push(a)
                    };
                    Bj.prototype.w = function(a) {
                        if (!this.o) {
                            this.o = !0;
                            _.Aj().log(1);
                            for (var c = 0; c < this.b.length; c++) try {
                                this.b[c]()
                            } catch (d) {
                                a(d)
                            }
                            this.b = null;
                            try {
                                _.Mi("api").Ra()
                            } catch (d) {}
                        }
                    };
                    _.Cj = new Bj;

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Gj, Ij;
                    _.Dj = function(a) {
                        return new _.Tf(_.Rf, a)
                    };
                    _.Ej = function(a) {
                        var c = new _.Wf;
                        c.o = a;
                        return c
                    };
                    _.Fj = function(a) {
                        return _.Ej(_.Uf(a))
                    };
                    Gj = function() {
                        _.A.call(this);
                        this.b = new _.qe
                    };
                    _.z(Gj, _.A);
                    _.Hj = new Gj;
                    Ij = ["click", "keydown", "mousedown", "touchstart"];
                    Gj.prototype.L = function(a, c, d, e, f) {
                        (f || this.b).A(a, Ij, c, d, e)
                    };
                    Gj.prototype.ua = function(a, c, d, e, f) {
                        (f || this.b).ua(a, Ij, c, d, e)
                    };
                    Gj.prototype.P = function() {
                        this.b.ga();
                        Gj.J.P.call(this)
                    };
                    var Jj, Lj;
                    Jj = _.C ? _.Fj(_.Dj('javascript:""')) : _.Fj(_.Dj("about:blank"));
                    _.Kj = _.Xf(Jj);
                    Lj = _.C ? _.Fj(_.Dj('javascript:""')) : _.Fj(_.Dj("javascript:undefined"));
                    _.Xf(Lj);
                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Mj, Sj, Tj, Uj;
                    Mj = function(a, c) {
                        return a && c ? c instanceof _.Ah ? c.left >= a.left && c.right <= a.right && c.top >= a.top && c.bottom <= a.bottom : c.x >= a.left && c.x <= a.right && c.b >= a.top && c.b <= a.bottom : !1
                    };
                    _.Nj = function(a) {
                        return _.lc && void 0 != a.children ? a.children : (0, _.Ea)(a.childNodes, function(a) {
                            return 1 == a.nodeType
                        })
                    };
                    _.Oj = function(a, c) {
                        for (; a && 1 != a.nodeType;) a = c ? a.nextSibling : a.previousSibling;
                        return a
                    };
                    _.Pj = function(a) {
                        return _.n(a.nextElementSibling) ? a.nextElementSibling : _.Oj(a.nextSibling, !0)
                    };
                    _.Qj = function(a) {
                        var c;
                        if (_.nc && !(_.C && _.Cb("9") && !_.Cb("10") && _.m.SVGElement && a instanceof _.m.SVGElement) && (c = a.parentElement)) return c;
                        c = a.parentNode;
                        return _.cg(c) ? c : null
                    };
                    _.Rj = function(a, c, d, e) {
                        if (null != a)
                            for (a = a.firstChild; a;) {
                                if (c(a) && (d.push(a), e) || _.Rj(a, c, d, e)) return !0;
                                a = a.nextSibling
                            }
                        return !1
                    };
                    Sj = function(a, c) {
                        var d = [];
                        return _.Rj(a, c, d, !0) ? d[0] : void 0
                    };
                    Tj = function(a) {
                        return _.C && !_.Cb("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
                    };
                    Uj = function(a) {
                        a = a.tabIndex;
                        return _.sa(a) && 0 <= a && 32768 > a
                    };
                    _.Vj = function(a) {
                        var c;
                        if ((c = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Tj(a) || Uj(a)) : Tj(a) && Uj(a)) && _.C) {
                            var d;
                            !_.Mc(a.getBoundingClientRect) || _.C && null == a.parentElement ? d = {
                                height: a.offsetHeight,
                                width: a.offsetWidth
                            } : d = a.getBoundingClientRect();
                            a = null != d && 0 < d.height && 0 < d.width
                        } else a = c;
                        return a
                    };
                    /*
                     Portions of this code are from MochiKit, received by
                     The Closure Authors under the MIT license. All other code is Copyright
                     2005-2009 The Closure Authors. All Rights Reserved.
                    */
                    _.Wj = function(a, c) {
                        this.B = [];
                        this.K = a;
                        this.H = c || null;
                        this.A = this.b = !1;
                        this.w = void 0;
                        this.G = this.M = this.D = !1;
                        this.C = 0;
                        this.o = null;
                        this.F = 0
                    };
                    _.Wj.prototype.cancel = function(a) {
                        if (this.b) this.w instanceof _.Wj && this.w.cancel();
                        else {
                            if (this.o) {
                                var c = this.o;
                                delete this.o;
                                a ? c.cancel(a) : (c.F--, 0 >= c.F && c.cancel())
                            }
                            this.K ? this.K.call(this.H, this) : this.G = !0;
                            this.b || (a = new Xj(this), Yj(this), Zj(this, !1, a))
                        }
                    };
                    _.Wj.prototype.fa = function(a, c) {
                        this.D = !1;
                        Zj(this, a, c)
                    };
                    var Zj = function(a, c, d) {
                            a.b = !0;
                            a.w = d;
                            a.A = !c;
                            ak(a)
                        },
                        Yj = function(a) {
                            if (a.b) {
                                if (!a.G) throw new bk(a);
                                a.G = !1
                            }
                        };
                    _.Wj.prototype.zb = function(a) {
                        Yj(this);
                        Zj(this, !0, a)
                    };
                    _.Wj.prototype.addCallback = function(a, c) {
                        return ck(this, a, null, c)
                    };
                    var ck = function(a, c, d, e) {
                        a.B.push([c, d, e]);
                        a.b && ak(a);
                        return a
                    };
                    _.Wj.prototype.then = function(a, c, d) {
                        var e, f, g = new _.Qe(function(a, c) {
                            e = a;
                            f = c
                        });
                        ck(this, e, function(a) {
                            a instanceof Xj ? g.cancel() : f(a)
                        });
                        return g.then(a, c, d)
                    };
                    _.Ne(_.Wj);
                    var dk = function(a) {
                            return (0, _.Ha)(a.B, function(a) {
                                return _.Mc(a[1])
                            })
                        },
                        ak = function(a) {
                            if (a.C && a.b && dk(a)) {
                                var c = a.C,
                                    d = ek[c];
                                d && (_.m.clearTimeout(d.ca), delete ek[c]);
                                a.C = 0
                            }
                            a.o && (a.o.F--, delete a.o);
                            c = a.w;
                            for (var e = d = !1; a.B.length && !a.D;) {
                                var f = a.B.shift(),
                                    g = f[0],
                                    h = f[1];
                                f = f[2];
                                if (g = a.A ? h : g) try {
                                    var l = g.call(f || a.H, c);
                                    _.n(l) && (a.A = a.A && (l == c || l instanceof Error), a.w = c = l);
                                    if (_.Oe(c) || "function" === typeof _.m.Promise && c instanceof _.m.Promise) e = !0, a.D = !0
                                } catch (q) {
                                    c = q, a.A = !0, dk(a) || (d = !0)
                                }
                            }
                            a.w = c;
                            e && (l = (0, _.w)(a.fa,
                                a, !0), e = (0, _.w)(a.fa, a, !1), c instanceof _.Wj ? (ck(c, l, e), c.M = !0) : c.then(l, e));
                            d && (c = new fk(c), ek[c.ca] = c, a.C = c.ca)
                        },
                        bk = function() {
                            _.Ba.call(this)
                        };
                    _.z(bk, _.Ba);
                    bk.prototype.message = "Deferred has already fired";
                    bk.prototype.name = "AlreadyCalledError";
                    var Xj = function() {
                        _.Ba.call(this)
                    };
                    _.z(Xj, _.Ba);
                    Xj.prototype.message = "Deferred was canceled";
                    Xj.prototype.name = "CanceledError";
                    var fk = function(a) {
                        this.ca = _.m.setTimeout((0, _.w)(this.o, this), 0);
                        this.b = a
                    };
                    fk.prototype.o = function() {
                        delete ek[this.ca];
                        throw this.b;
                    };
                    var ek = {};
                    var gk = function(a) {
                            return Sj(a, function(a) {
                                return _.cg(a) && _.Vj(a)
                            })
                        },
                        hk = function(a) {
                            (a = gk(a)) && a.focus()
                        };
                    var ik = function(a) {
                        _.A.call(this);
                        this.b = a || _.bg();
                        this.o = {}
                    };
                    _.z(ik, _.A);
                    ik.prototype.P = function() {
                        _.Tc(this.o, this.b.Ed, this.b);
                        this.b = this.o = null;
                        ik.J.P.call(this)
                    };
                    var kk = function(a, c) {
                            var d = jk(a);
                            _.th(d, "");
                            _.gf(function() {
                                _.th(d, c)
                            }, 1)
                        },
                        jk = function(a) {
                            var c = a.o.polite;
                            if (c) return c.removeAttribute("aria-hidden"), c;
                            c = a.b.createElement("DIV");
                            c.style.position = "absolute";
                            c.style.top = "-1000px";
                            c.style.height = "1px";
                            c.style.overflow = "hidden";
                            _.vh(c, "live", "polite");
                            _.vh(c, "atomic", "true");
                            a.b.b.body.appendChild(c);
                            return a.o.polite = c
                        };
                    _.lk = _.m.document && _.m.document.documentElement && !!_.m.document.documentElement.setCapture && !!_.m.document.releaseCapture;
                    _.mk = function() {
                        _.O.call(this);
                        this.B = [];
                        this.ma = [];
                        this.N = [];
                        this.Y = this.V = this.W = !1
                    };
                    _.z(_.mk, _.O);
                    _.k = _.mk.prototype;
                    _.k.sd = function(a) {
                        this.ma.push(a);
                        this.W = a.V = !0
                    };
                    _.k.init = function() {
                        if (!this.Y) {
                            for (var a, c = 0; a = this.B[c]; c++) this.Xc(a);
                            this.Y = !0
                        }
                    };
                    _.k.Xc = function(a) {
                        this.W && (_.M(a.b, "mousedown", a.ff, !1, a), this.da && _.R(a.b, this.da));
                        this.V && this.ha && _.R(a.b, this.ha)
                    };
                    _.k.xd = function(a) {
                        this.W && (_.le(a.b, "mousedown", a.ff, !1, a), this.da && _.S(a.b, this.da));
                        this.V && this.ha && _.S(a.b, this.ha);
                        a.ga()
                    };
                    _.k.Ie = function(a) {
                        var c = a.w ? null : this.F;
                        if (c && c.o) {
                            var d = a.clientX,
                                e = a.clientY,
                                f = _.kh(_.bg(this.K).b),
                                g = d + f.x;
                            f = e + f.b;
                            var h;
                            this.D && (h = this.D(c.w, c.b, g, f));
                            this.dispatchEvent(new _.nk("drag", this, this.b, c.o, c.w, c.A, d, e, g, f));
                            c.o.dispatchEvent(new _.nk("drop", this, this.b, c.o, c.w, c.A, d, e, g, f, h, a.B))
                        }
                        this.dispatchEvent(new _.nk("dragend", this, this.b, c ? c.o : void 0, c ? c.w : void 0, c ? c.A : void 0));
                        _.le(this.A, "drag", this.hf, !1, this);
                        _.le(this.A, "end", this.Ie, !1, this);
                        _.le(_.Yf(this.b.o).body, "selectstart",
                            this.xf);
                        for (a = 0; c = this.N[a]; a++) _.le(c.b, "scroll", this.te, !1, this), c.o = [];
                        this.A.ga();
                        _.$f(this.K);
                        delete this.b;
                        delete this.K;
                        delete this.A;
                        delete this.T;
                        delete this.F
                    };
                    _.k.hf = function(a) {
                        var c = _.kh(_.bg(this.K).b);
                        var d = new _.fh(a.clientX + c.x, a.clientY + c.b);
                        c = d.x;
                        var e = d.b,
                            f = this.F;
                        this.dispatchEvent(new _.nk("drag", this, this.b, f ? f.o : void 0, f ? f.w : void 0, f ? f.A : void 0, a.clientX, a.clientY, c, e));
                        var g;
                        if (f) {
                            this.D && f.o && (g = this.D(f.w, f.b, c, e));
                            if (Mj(f.b, d) && g == this.aa) return;
                            f.o && (this.dispatchEvent(new _.nk("dragout", this, this.b, f.o, f.w, f.A)), f.o.dispatchEvent(new _.nk("dragout", this, this.b, f.o, f.w, f.A, void 0, void 0, void 0, void 0, this.aa)));
                            this.aa = g;
                            this.F = null
                        }
                        if (Mj(this.C,
                                d)) {
                            a: {
                                for (var h = 0; f = this.T[h]; h++)
                                    if (Mj(f.b, d))
                                        if (f.B) {
                                            if (Mj(f.B.w, d)) {
                                                d = f;
                                                break a
                                            }
                                        } else {
                                            d = f;
                                            break a
                                        }
                                d = null
                            }
                            if ((f = this.F = d) && f.o) this.D && (g = this.D(f.w, f.b, c, e)),
                            c = new _.nk("dragover", this, this.b, f.o, f.w, f.A),
                            c.w = g,
                            this.dispatchEvent(c),
                            f.o.dispatchEvent(new _.nk("dragover", this, this.b, f.o, f.w, f.A, a.clientX, a.clientY, void 0, void 0, g));
                            else if (!f) {
                                this.o || (this.o = new _.ok(this.C.clone()));
                                a = this.o.b;
                                a.top = this.C.top;
                                a.right = this.C.right;
                                a.bottom = this.C.bottom;
                                a.left = this.C.left;
                                for (g = 0; f = this.T[g]; g++) d =
                                    f.b, f.B && (f = f.B.w, d = new _.Ah(Math.max(d.top, f.top), Math.min(d.right, f.right), Math.min(d.bottom, f.bottom), Math.max(d.left, f.left))), f = null, c >= d.right ? f = d.right > a.left ? d.right : a.left : c < d.left && (f = d.left < a.right ? d.left : a.right), h = null, e >= d.bottom ? h = d.bottom > a.top ? d.bottom : a.top : e < d.top && (h = d.top < a.bottom ? d.top : a.bottom), null === f || null === h || (Math.abs(f - c) > Math.abs(h - e) ? h = null : f = null), null !== f ? f <= c ? a.left = f : a.right = f : null !== h && (h <= e ? a.top = h : a.bottom = h);
                                this.F = 10 <= (a.right - a.left) * (a.bottom - a.top) ? this.o :
                                    null
                            }
                        }
                    };
                    _.k.xf = function() {
                        return !1
                    };
                    _.k.te = function(a) {
                        for (var c = 0, d; d = this.N[c]; c++)
                            if (a.target == d.b) {
                                var e = d.B - d.b.scrollTop,
                                    f = d.A - d.b.scrollLeft;
                                d.B = d.b.scrollTop;
                                d.A = d.b.scrollLeft;
                                this.o && this.F == this.o && (0 < e ? this.o.b.top += e : this.o.b.bottom += e, 0 < f ? this.o.b.left += f : this.o.b.right += f);
                                for (var g = 0, h; h = d.o[g]; g++) h = h.b, h.top += e, h.left += f, h.bottom += e, h.right += f, _.pk(this, h)
                            }
                        this.A.Ke(a)
                    };
                    _.pk = function(a, c) {
                        1 == a.T.length ? a.C = new _.Ah(c.top, c.right, c.bottom, c.left) : (a = a.C, a.left = Math.min(c.left, a.left), a.right = Math.max(c.right, a.right), a.top = Math.min(c.top, a.top), a.bottom = Math.max(c.bottom, a.bottom))
                    };
                    _.mk.prototype.P = function() {
                        _.mk.J.P.call(this);
                        for (var a, c = 0; a = this.B[c]; c++) this.xd(a);
                        this.B.length = 0
                    };
                    _.nk = function(a, c, d, e, f, g, h, l, q, r, y) {
                        _.Qd.call(this, a);
                        this.B = d;
                        this.C = f;
                        this.clientX = h;
                        this.clientY = l;
                        this.w = y
                    };
                    _.z(_.nk, _.Qd);
                    _.ok = function(a, c, d, e) {
                        this.b = a;
                        this.o = c;
                        this.w = d;
                        this.A = e || null;
                        this.B = null
                    };
                    var rk = function() {
                        _.mk.call(this)
                    };
                    _.z(rk, _.mk);
                    _.sk = function(a, c) {
                        _.mk.call(this);
                        this.S = !1;
                        this.w = [];
                        this.X = _.G(c, 1, !1);
                        this.ba = _.F(c, 2) || "";
                        this.Ha = _.F(c, 3) || "";
                        this.ia = this.X && this.ba ? new ik : null;
                        this.H = null;
                        this.G = a;
                        this.M = {};
                        this.Z = null
                    };
                    _.z(_.sk, rk);
                    _.k = _.sk.prototype;
                    _.k.Gh = _.eg.U();
                    _.k.sd = function(a) {
                        _.sk.J.sd.call(this, a);
                        this.w.push(a);
                        this.S = !0
                    };
                    _.k.init = function() {
                        _.sk.J.init.call(this);
                        this.X && this.S && _.M(this.G, "keydown", this.jf, !1, this)
                    };
                    _.k.P = function() {
                        this.X && this.S && _.le(this.G, "keydown", this.jf, !1, this);
                        _.sk.J.P.call(this)
                    };
                    _.k.Xc = function(a) {
                        _.sk.J.Xc.call(this, a);
                        var c = a.b;
                        c = c.id || (c.id = "ogbkddg" + _.fg(this.Gh));
                        this.M[c] = a
                    };
                    _.k.xd = function(a) {
                        delete this.M[a.b.id];
                        _.sk.J.xd.call(this, a)
                    };
                    _.k.jf = function(a) {
                        a: {
                            var c = a.target;
                            if (this.M)
                                for (var d = this.G; c && c !== d;) {
                                    var e = c.id;
                                    if (e in this.M) {
                                        c = this.M[e];
                                        break a
                                    }
                                    c = c.parentNode
                                }
                            c = null
                        }
                        c && (32 == a.keyCode ? (this.H ? this.O(a, c) : (this.H = c, _.R(this.G, "gb_cg"), _.R(c.b, "gb_1"), this.Z = _.M(window.document, "mousedown", (0, _.w)(this.O, this, a, c, !1)), _.M(this.G, "focusin", this.Re, !1, this), this.dispatchEvent(new tk(c)), hk(c.b)), a.preventDefault(), a.stopPropagation()) : this.H && uk(this, a, c))
                    };
                    _.k.Re = function(a) {
                        var c = gk(this.H.b);
                        a.target != c && this.O(a, this.H)
                    };
                    var uk = function(a, c, d) {
                        var e = null;
                        _.Nj(_.Qj(d.b));
                        switch (c.keyCode) {
                            case 37:
                                e = vk(a, d, -1);
                                break;
                            case 38:
                                e = vk(a, d, -3);
                                break;
                            case 39:
                                e = vk(a, d, 1);
                                break;
                            case 40:
                                e = vk(a, d, 3);
                                break;
                            case 9:
                                a.O(c, d);
                                break;
                            case 27:
                                a.O(c, d, !0)
                        }
                        if (e) {
                            a.dispatchEvent(new _.nk("dragout", null, d));
                            var f = e.target.B[0],
                                g = new _.nk("dragover", null, null);
                            g.C = f;
                            g.w = e.b;
                            a.dispatchEvent(g);
                            hk(d.b);
                            if (a.ia) {
                                d = 1 == a.w.indexOf(e.target) ? a.Ha : a.ba;
                                var h = [e.b + 1, f ? f.b.children.length : 0];
                                d = d.replace(/%([0-9]+)\$s/g, function(a, c) {
                                    c = (0, window.parseInt)(c,
                                        10) - 1;
                                    return c < h.length ? h[c] : ""
                                });
                                kk(a.ia, d)
                            }
                            c.preventDefault()
                        }
                    };
                    _.sk.prototype.O = function(a, c, d) {
                        _.S(this.G, "gb_cg");
                        d ? this.dispatchEvent(new _.nk("dragout", null, c)) : (a = wk(this, _.Qj(c.b)), (a = -1 != a ? this.w[a] : null) && a.dispatchEvent(new _.nk("drop", null, null)));
                        this.dispatchEvent(new _.nk("dragend", null, c));
                        _.me(this.Z);
                        delete this.Z;
                        _.le(this.G, "focusin", this.Re, !1, this);
                        this.H = null;
                        _.S(c.b, "gb_1")
                    };
                    var vk = function(a, c, d) {
                            var e = c.b;
                            c = _.Qj(c.b);
                            var f = wk(a, c);
                            _.Nj(_.Qj(c));
                            for (var g = _.Nj(c), h = (0, _.Ca)(g, e), l = 0 < d ? 1 : -1; e && 0 != d;) {
                                do e = 0 < l ? _.Pj(e) : _.n(e.previousElementSibling) ? e.previousElementSibling : _.Oj(e.previousSibling, !1); while (e && !(e.id in a.M));
                                d -= l;
                                h += l;
                                if (!e && f < a.w.length && (f += l, a.w[f]))
                                    if (c = a.w[f].B[0].b, g = _.Nj(c), 0 < l) e = (3 - h % 3) % 3, d = d < e ? 0 : d - e, h = 0, e = c.children[0];
                                    else {
                                        h = g.length;
                                        e = 3 - h % 3 - 1;
                                        if (d = e > -d ? 0 : d + e) h--, d++;
                                        e = c.children[h]
                                    }
                            }
                            return 0 == d && a.w[f] ? new xk(a.w[f], h) : null
                        },
                        wk = function(a, c) {
                            for (var d = -1, e = 0; e < a.w.length; e++)
                                if (a.w[e].B[0].b == c) {
                                    d = e;
                                    break
                                }
                            return d
                        },
                        xk = function(a, c) {
                            this.target = a;
                            this.b = c
                        },
                        tk = function(a) {
                            _.nk.call(this, "dragstart", null, a)
                        };
                    _.z(tk, _.nk);
                    _.yk = new _.gh(88, 100);
                    var zk = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(zk, _.D);
                    var Bk = function(a) {
                        _.E(this, a, "ireq", -1, Ak)
                    };
                    _.z(Bk, _.D);
                    var Ak = [2];
                    _.Wb("ireq", Bk);
                    var Ck = function(a) {
                        _.E(this, a, "ires", -1, null)
                    };
                    _.z(Ck, _.D);
                    _.Wb("ires", Ck);
                    Ck.prototype.Ua = function() {
                        return _.H(this, zk, 3)
                    };
                    var Dk = function(a) {
                        _.E(this, a, "qreq", -1, null)
                    };
                    _.z(Dk, _.D);
                    _.Wb("qreq", Dk);
                    var Fk = function(a) {
                        _.E(this, a, "qres", -1, Ek)
                    };
                    _.z(Fk, _.D);
                    var Ek = [1];
                    _.Wb("qres", Fk);
                    Fk.prototype.Ua = function() {
                        return _.H(this, zk, 3)
                    };
                    var Gk = function(a) {
                        _.E(this, a, "ivdres", -1, null)
                    };
                    _.z(Gk, _.D);
                    _.Wb("ivdres", Gk);
                    _.Hk = function(a) {
                        _.E(this, a, "gaia.l.a", -1, null)
                    };
                    _.z(_.Hk, _.D);
                    _.Wb("gaia.l.a", _.Hk);
                    _.Jk = function(a) {
                        _.E(this, a, "gaia.l.a.r", -1, Ik)
                    };
                    _.z(_.Jk, _.D);
                    var Ik = [1];
                    _.Wb("gaia.l.a.r", _.Jk);
                    _.Fj(_.Dj("https://apis.google.com/js/api.js"));
                    (function() {
                        for (var a = ["ms", "moz", "webkit", "o"], c = 0, d; d = a[c] && !_.m.requestAnimationFrame; ++c) _.m.requestAnimationFrame = _.m[d + "RequestAnimationFrame"], _.m.cancelAnimationFrame = _.m[d + "CancelAnimationFrame"] || _.m[d + "CancelRequestAnimationFrame"];
                        if (!_.m.requestAnimationFrame) {
                            var e = 0;
                            _.m.requestAnimationFrame = function(a) {
                                var c = (new Date).getTime(),
                                    d = Math.max(0, 16 - (c - e));
                                e = c + d;
                                return _.m.setTimeout(function() {
                                    a(c + d)
                                }, d)
                            };
                            _.m.cancelAnimationFrame || (_.m.cancelAnimationFrame = function(a) {
                                (0, window.clearTimeout)(a)
                            })
                        }
                    })();
                    var Kk = function(a) {
                        a || _.bg();
                        _.hf.call(this)
                    };
                    _.z(Kk, _.hf);
                    Kk.prototype.clear = function() {
                        _.hf.prototype.clear.call(this)
                    };
                    Kk.prototype.set = function(a, c) {
                        _.hf.prototype.set.call(this, a, c);
                        return this
                    };
                    var Lk = function(a, c, d, e) {
                        return a.set(c.key, c.caption, d, e)
                    };
                    Kk.prototype.Mb = function() {};
                    Kk.prototype.R = function() {
                        return null
                    };
                    var Mk = {
                            key: "ok",
                            caption: "OK"
                        },
                        Nk = {
                            key: "cancel",
                            caption: "Cancel"
                        },
                        Ok = {
                            key: "yes",
                            caption: "Yes"
                        },
                        Pk = {
                            key: "no",
                            caption: "No"
                        },
                        Qk = {
                            key: "save",
                            caption: "Save"
                        },
                        Rk = {
                            key: "continue",
                            caption: "Continue"
                        };
                    "undefined" != typeof window.document && (Lk(new Kk, Mk, !0, !0), Lk(Lk(new Kk, Mk, !0), Nk, !1, !0), Lk(Lk(new Kk, Ok, !0), Pk, !1, !0), Lk(Lk(Lk(new Kk, Ok), Pk, !0), Nk, !1, !0), Lk(Lk(Lk(new Kk, Rk), Qk), Nk, !0, !0));
                    _.Fj(_.Dj("//www-onepick-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1&container=onepick"));
                    _.Fj(_.Dj("//apis.google.com/js/rpc.js"));
                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Tk, bl, cl, dl, el, gl, hl, il, pl, ql, ul, vl, wl, xl, Cl, El;
                    _.Sk = function(a, c, d) {
                        _.t(a, c, d)
                    };
                    Tk = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(Tk, _.D);
                    var Uk = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(Uk, _.D);
                    _.Vk = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(_.Vk, _.D);
                    _.Xk = function() {
                        var a = _.Wk();
                        return _.F(a, 9)
                    };
                    _.Yk = function(a, c, d) {
                        var e;
                        a = d || a;
                        if (a.querySelectorAll && a.querySelector && c) return a.querySelectorAll(c ? "." + c : "");
                        if (c && a.getElementsByClassName) {
                            var f = a.getElementsByClassName(c);
                            return f
                        }
                        f = a.getElementsByTagName("*");
                        if (c) {
                            var g = {};
                            for (d = e = 0; a = f[d]; d++) {
                                var h = a.className;
                                "function" == typeof h.split && _.Qc(h.split(/\s+/), c) && (g[e++] = a)
                            }
                            g.length = e;
                            return g
                        }
                        return f
                    };
                    _.V = function(a, c) {
                        var d = c || window.document;
                        if (d.getElementsByClassName) a = d.getElementsByClassName(a)[0];
                        else {
                            d = window.document;
                            var e = c || d;
                            a = e.querySelectorAll && e.querySelector && a ? e.querySelector(a ? "." + a : "") : _.Yk(d, a, c)[0] || null
                        }
                        return a || null
                    };
                    _.Zk = function(a, c, d) {
                        _.A.call(this);
                        this.zc = a;
                        this.w = c || 0;
                        this.b = d;
                        this.o = (0, _.w)(this.og, this)
                    };
                    _.z(_.Zk, _.A);
                    _.k = _.Zk.prototype;
                    _.k.ca = 0;
                    _.k.P = function() {
                        _.Zk.J.P.call(this);
                        this.stop();
                        delete this.zc;
                        delete this.b
                    };
                    _.k.start = function(a) {
                        this.stop();
                        this.ca = _.gf(this.o, _.n(a) ? a : this.w)
                    };
                    _.k.stop = function() {
                        0 != this.ca && _.m.clearTimeout(this.ca);
                        this.ca = 0
                    };
                    _.k.og = function() {
                        this.ca = 0;
                        this.zc && this.zc.call(this.b)
                    };
                    _.$k = function(a, c) {
                        return (c || window.document).getElementsByTagName(String(a))
                    };
                    _.al = function(a, c) {
                        if (!a || !c) return !1;
                        if (a.contains && 1 == c.nodeType) return a == c || a.contains(c);
                        if ("undefined" != typeof a.compareDocumentPosition) return a == c || !!(a.compareDocumentPosition(c) & 16);
                        for (; c && a != c;) c = c.parentNode;
                        return c == a
                    };
                    bl = null;
                    cl = /^[\w+/_-]+[=]{0,2}$/;
                    dl = function(a) {
                        return String(a).replace(/\-([a-z])/g, function(a, d) {
                            return d.toUpperCase()
                        })
                    };
                    el = function(a) {
                        var c = _.p(void 0) ? _.Ni(void 0) : "\\s";
                        return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, c, f) {
                            return c + f.toUpperCase()
                        })
                    };
                    _.Wk = function() {
                        return _.H(_.L(), Tk, 4) || new Tk
                    };
                    _.fl = function(a, c) {
                        a.src = _.Xf(c);
                        if (null === bl) {
                            a: {
                                c = _.m.document;
                                if ((c = c.querySelector && c.querySelector("script[nonce]")) && (c = c.nonce || c.getAttribute("nonce")) && cl.test(c)) break a;
                                c = null
                            }
                            bl = c || ""
                        }(c = bl) && a.setAttribute("nonce", c)
                    };
                    gl = 0;
                    hl = [];
                    il = function(a) {
                        var c = new window.Image,
                            d = gl;
                        c.onerror = c.onload = c.onabort = function() {
                            d in hl && delete hl[d]
                        };
                        hl[gl++] = c;
                        c.src = a
                    };
                    _.jl = function(a) {
                        var c = window.google && window.google.logUrl ? "" : "https://www.google.com";
                        c += "/gen_204?";
                        c += a.o(2040 - c.length);
                        il(c)
                    };
                    _.kl = function() {
                        this.data = {}
                    };
                    _.kl.prototype.b = function() {
                        window.console && window.console.log && window.console.log("Log data: ", this.data)
                    };
                    _.kl.prototype.o = function(a) {
                        var c = [],
                            d;
                        for (d in this.data) c.push((0, window.encodeURIComponent)(d) + "=" + (0, window.encodeURIComponent)(String(this.data[d])));
                        return ("atyp=i&zx=" + (new Date).getTime() + "&" + c.join("&")).substr(0, a)
                    };
                    var ll = function(a) {
                        this.b = a
                    };
                    ll.prototype.log = function(a, c) {
                        try {
                            if (this.C(a)) {
                                var d = this.w(a, c);
                                this.o(d)
                            }
                        } catch (e) {}
                    };
                    ll.prototype.o = function(a) {
                        this.b ? a.b() : _.jl(a)
                    };
                    var ml = function(a, c) {
                        this.data = {};
                        var d = _.H(a, _.Xb, 8) || new _.Xb;
                        this.data.ei = window.google && window.google.kEI ? window.google.kEI : _.J(_.F(a, 10));
                        this.data.ogf = _.J(_.F(d, 3));
                        var e = window.google && window.google.sn ? /.*hp$/.test(window.google.sn) ? !1 : !0 : _.I(_.F(a, 7));
                        this.data.ogrp = e ? "1" : "";
                        this.data.ogv = _.J(_.F(d, 6)) + "." + _.J(_.F(d, 7));
                        this.data.ogd = _.J(_.F(a, 21));
                        this.data.ogc = _.J(_.F(a, 20));
                        this.data.ogl = _.J(_.F(a, 5));
                        c && (this.data.oggv = c)
                    };
                    _.z(ml, _.kl);
                    _.nl = function(a, c, d, e, f) {
                        ml.call(this, a, c);
                        _.Yc(this.data, {
                            jexpid: _.J(_.F(a, 9)),
                            srcpg: "prop=" + _.J(_.F(a, 6)),
                            jsr: Math.round(1 / e),
                            emsg: d.name + ":" + d.message
                        });
                        if (f) {
                            f._sn && (f._sn = "og." + f._sn);
                            for (var g in f) this.data[(0, window.encodeURIComponent)(g)] = f[g]
                        }
                    };
                    _.z(_.nl, ml);
                    var ol = function(a, c, d, e) {
                        this.b = e;
                        this.fa = c;
                        this.H = d;
                        this.B = _.K(+_.G(a, 2, .001), .001);
                        this.G = _.I(_.F(a, 1)) && Math.random() < this.B;
                        this.D = _.K(_.G(a, 3, 1), 1);
                        this.A = 0;
                        this.F = _.I(_.G(a, 4, !0), !0)
                    };
                    _.z(ol, ll);
                    ol.prototype.log = function(a, c) {
                        ol.J.log.call(this, a, c);
                        if (this.b && this.F) throw a;
                    };
                    ol.prototype.C = function() {
                        return this.b || this.G && this.A < this.D
                    };
                    ol.prototype.w = function(a, c) {
                        try {
                            return _.Ja(_.Ia.U(), "lm").b(a, c)
                        } catch (d) {
                            return new _.nl(this.fa, this.H, a, this.B, c)
                        }
                    };
                    ol.prototype.o = function(a) {
                        ol.J.o.call(this, a);
                        this.A++
                    };
                    pl = {};
                    ql = function(a, c) {
                        var d = pl[c];
                        if (!d) {
                            var e = dl(c);
                            d = e;
                            void 0 === a.style[e] && (e = (_.lb ? "Webkit" : _.kb ? "Moz" : _.C ? "ms" : _.hb ? "O" : null) + el(e), void 0 !== a.style[e] && (d = e));
                            pl[c] = d
                        }
                        return d
                    };
                    _.rl = function(a, c, d) {
                        if (_.p(c))(c = ql(a, c)) && (a.style[c] = d);
                        else
                            for (var e in c) {
                                d = a;
                                var f = c[e],
                                    g = ql(d, e);
                                g && (d.style[g] = f)
                            }
                    };
                    _.sl = function(a, c, d) {
                        d ? _.R(a, c) : _.S(a, c)
                    };
                    _.tl = function(a, c) {
                        if (a instanceof window.Element && (c = _.Mi("eq").A(a, c || [])))
                            if (_.C && c instanceof window.MouseEvent && a.dispatchEvent) {
                                var d = window.document.createEvent("MouseEvent");
                                d.initMouseEvent(c.type, !0, !0, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget);
                                a.dispatchEvent(d)
                            } else a.dispatchEvent && a.dispatchEvent(c)
                    };
                    ul = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 41, 42, 43, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 62, 500];
                    vl = null;
                    wl = function(a) {
                        if (!vl) {
                            vl = {};
                            for (var c = 0; c < ul.length; c++) vl[ul[c]] = !0
                        }
                        return !!vl[a]
                    };
                    xl = function(a, c, d, e, f, g) {
                        ml.call(this, a, c);
                        _.Yc(this.data, {
                            oge: e,
                            ogex: _.J(_.F(a, 9)),
                            ogp: _.J(_.F(a, 6)),
                            ogsr: Math.round(1 / (wl(e) ? _.K(+_.G(d, 3, 1)) : _.K(+_.G(d, 2, 1E-4)))),
                            ogus: f
                        });
                        if (g) {
                            "ogw" in g && (this.data.ogw = g.ogw, delete g.ogw);
                            "ved" in g && (this.data.ved = g.ved, delete g.ved);
                            a = [];
                            for (var h in g) 0 != a.length && a.push(","), a.push(h.replace(".", "%2E").replace(",", "%2C")), a.push("."), a.push(g[h].replace(".", "%2E").replace(",", "%2C"));
                            g = a.join("");
                            "" != g && (this.data.ogad = g)
                        }
                    };
                    _.z(xl, ml);
                    var yl = function(a, c, d, e, f) {
                        this.b = f;
                        this.fa = a;
                        this.G = c;
                        this.H = e;
                        this.F = _.K(+_.G(a, 2, 1E-4), 1E-4);
                        this.B = _.K(+_.G(a, 3, 1), 1);
                        c = Math.random();
                        this.D = _.I(_.F(a, 1)) && c < this.F;
                        this.A = _.I(_.F(a, 1)) && c < this.B;
                        a = 0;
                        _.I(_.F(d, 1)) && (a |= 1);
                        _.I(_.F(d, 2)) && (a |= 2);
                        _.I(_.F(d, 3)) && (a |= 4);
                        this.K = a
                    };
                    _.z(yl, ll);
                    yl.prototype.C = function(a) {
                        return this.b || (wl(a) ? this.A : this.D)
                    };
                    yl.prototype.w = function(a, c) {
                        return new xl(this.G, this.H, this.fa, a, this.K, c)
                    };
                    _.Al = function(a, c) {
                        _.O.call(this);
                        this.b = a;
                        this.w = zl(this.b);
                        this.D = c || 100;
                        this.A = _.M(a, "resize", this.B, !1, this)
                    };
                    _.z(_.Al, _.O);
                    _.Al.prototype.P = function() {
                        _.me(this.A);
                        _.Al.J.P.call(this)
                    };
                    _.Al.prototype.B = function() {
                        this.o || (this.o = new _.Zk(this.C, this.D, this), _.Kc(this, this.o));
                        this.o.start()
                    };
                    _.Al.prototype.C = function() {
                        if (!this.b.fa) {
                            var a = this.w,
                                c = zl(this.b);
                            this.w = c;
                            if (a) {
                                var d = !1;
                                a.width != c.width && (this.dispatchEvent("b"), d = !0);
                                a.height != c.height && (this.dispatchEvent("a"), d = !0);
                                d && this.dispatchEvent("resize")
                            } else this.dispatchEvent("a"), this.dispatchEvent("b"), this.dispatchEvent("resize")
                        }
                    };
                    var Bl = function(a) {
                        _.O.call(this);
                        this.o = a || window;
                        this.w = _.M(this.o, "resize", this.A, !1, this);
                        this.b = _.ih(this.o)
                    };
                    _.z(Bl, _.O);
                    var zl = function(a) {
                        return a.b ? a.b.clone() : null
                    };
                    Bl.prototype.P = function() {
                        Bl.J.P.call(this);
                        this.w && (_.me(this.w), this.w = null);
                        this.b = this.o = null
                    };
                    Bl.prototype.A = function() {
                        var a = _.ih(this.o);
                        _.Ri(a, this.b) || (this.b = a, this.dispatchEvent("resize"))
                    };
                    Cl = {};
                    _.Dl = function() {
                        var a = window,
                            c = _.rh(a);
                        return Cl[c] = Cl[c] || new Bl(a)
                    };
                    El = null;
                    _.W = function() {
                        if (!El) {
                            var a = _.H(_.L(), _.Vk, 13) || new _.Vk,
                                c = _.hc(),
                                d = _.Xk();
                            El = new ol(a, c, d, _.cc)
                        }
                        return El
                    };
                    _.fc = function(a, c) {
                        _.W().log(a, c)
                    };
                    var Fl;
                    Fl = null;
                    _.Gl = function() {
                        if (!Fl) {
                            var a = _.H(_.L(), Uk, 12) || new Uk,
                                c = _.hc(),
                                d = _.Oi(),
                                e = _.Xk();
                            Fl = new yl(a, c, d, e, _.cc)
                        }
                        return Fl
                    };
                    _.Hl = function(a, c) {
                        _.Gl().log(a, c)
                    };
                    _.Hl(8, {
                        m: "BackCompat" == window.document.compatMode ? "q" : "s"
                    });
                    var Jl, Il;
                    _.Kl = function(a, c) {
                        var d = a;
                        0 === a.indexOf("gbar.") && (d = a.substring(5));
                        0 <= Il.indexOf(d) && _.Mc(c) ? _.Sk(a, function() {
                            Jl(d);
                            return c.apply(void 0, arguments)
                        }, void 0) : _.t(a, c, void 0)
                    };
                    Jl = function(a) {
                        var c = window.document.body,
                            d = window.document.createElement("img");
                        d.style.display = "block";
                        d.style.visibility = "hidden";
                        d.onload = function() {
                            c.removeChild(d)
                        };
                        d.src = ["https://www.google.com/gen_204?atyp=i", "zx=" + Date.now(), "ogefn=" + a].join("&");
                        c.appendChild(d)
                    };
                    Il = "si so sos sa sp paa prm pcm pca pti rtl addextralink addlink has gpca gpcr setcontinuecb qs spd spn spp sps mls op".split(" ");

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Eo;
                    _.Co = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(_.Co, _.D);
                    _.Co.prototype.Ta = function() {
                        return _.F(this, 6)
                    };
                    var Do = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(Do, _.D);
                    Eo = [3, 5];
                    _.Fo = function(a) {
                        _.E(this, a, 0, -1, Eo)
                    };
                    _.z(_.Fo, _.D);
                    var Go = function(a, c) {
                            return null !== a && c in a
                        },
                        Ho = function(a) {
                            var c = arguments,
                                d = c.length;
                            return function() {
                                for (var a = 0; a < d; a++)
                                    if (c[a].apply(this, arguments)) return !0;
                                return !1
                            }
                        },
                        Io = function(a) {
                            return function() {
                                return !a.apply(this, arguments)
                            }
                        };
                    var Jo = function() {};
                    var Ko = function(a, c, d) {
                        this.o = a;
                        this.w = c;
                        this.b = d || _.m
                    };
                    var Lo = function() {
                        this.b = []
                    };
                    Lo.prototype.o = function(a, c, d) {
                        this.B(a, c, d);
                        this.b.push(new Ko(a, c, d))
                    };
                    Lo.prototype.B = function(a, c, d) {
                        d = d || _.m;
                        for (var e = 0, f = this.b.length; e < f; e++) {
                            var g = this.b[e];
                            if (g.o == a && g.w == c && g.b == d) {
                                this.b.splice(e, 1);
                                break
                            }
                        }
                    };
                    Lo.prototype.w = function(a) {
                        for (var c = 0, d = this.b.length; c < d; c++) {
                            var e = this.b[c];
                            "catc" == e.o && e.w.call(e.b, a)
                        }
                    };
                    _.Mo = function(a, c, d, e, f) {
                        _.A.call(this);
                        this.A = c;
                        this.W = e;
                        this.D = f;
                        this.K = !1;
                        this.w = {};
                        this.o = {};
                        this.S = [];
                        this.B = [];
                        this.H = _.F(a, 1) ? "http" : "https";
                        this.T = [this.H + "://" + _.J(_.F(a, 2)), "og/_/js", "k=" + _.J(_.F(a, 3)), "rt=j"];
                        this.G = "" == _.J(_.F(a, 14)) ? null : _.F(a, 14);
                        this.M = [this.H + "://" + _.J(_.F(a, 2)), "og/_/ss", "k=" + _.J(_.F(a, 13))];
                        this.F = "" == _.J(_.F(a, 15)) ? null : _.F(a, 15);
                        this.O = _.I(_.F(a, 1)) ? "?host=www.gstatic.com&bust=" + _.J(_.F(a, 16)) : "";
                        this.N = _.I(_.F(a, 1)) ? "?host=www.gstatic.com&bust=" + 1E11 * Math.random() :
                            "";
                        this.b = _.K(_.G(a, 17, 1), 1);
                        a = 0;
                        for (c = d[a]; a < d.length; a++, c = d[a]) this.w[c] = !0, this.o[c] = !0
                    };
                    _.z(_.Mo, _.A);
                    _.Ka(_.Mo, "m");
                    _.Oo = function(a, c, d) {
                        c = (0, _.Ea)(c, Io(Ho(_.$c, _.Ic(Go, a.w))));
                        if (0 < c.length) {
                            var e = a.T.join("/") + "/" + ("m=" + c.join(",")) + "/exm=" + _.Wc(a.w).join(",") + "/d=1/ed=1";
                            a.G && (e += "/rs=" + a.G);
                            e += a.O;
                            No(a, e, (0, _.w)(a.Y, a, d));
                            a.S.push(e);
                            for (d = 0; d < c.length; d++) a.w[c[d]] = !0
                        }
                    };
                    _.Mo.prototype.Y = function(a) {
                        for (var c = 0; c < this.B.length; c++) this.B[c].call(null);
                        a && a.call(null)
                    };
                    var No = function(a, c, d, e) {
                        var f = window.document.createElement("SCRIPT");
                        f.async = !0;
                        f.type = "text/javascript";
                        f.charset = "UTF-8";
                        _.fl(f, _.Ej(c));
                        var g = !0,
                            h = e || 1;
                        e = (0, _.w)(function() {
                            g = !1;
                            this.D.log(47, {
                                att: h,
                                max: this.b,
                                url: c
                            });
                            h < this.b ? No(this, c, d, h + 1) : this.W.log(Error("oa`" + h + "`" + this.b), {
                                url: c
                            })
                        }, a);
                        var l = (0, _.w)(function() {
                                g && (this.D.log(46, {
                                    att: h,
                                    max: this.b,
                                    url: c
                                }), g = !1, d && d.call(null))
                            }, a),
                            q = function(a) {
                                "loaded" == a.readyState || "complete" == a.readyState ? l() : g && window.setTimeout(function() {
                                    q(a)
                                }, 100)
                            };
                        "undefined" !== typeof f.addEventListener ? f.onload = function() {
                            l()
                        } : f.onreadystatechange = function() {
                            f.onreadystatechange = null;
                            q(f)
                        };
                        f.onerror = e;
                        a.D.log(45, {
                            att: h,
                            max: a.b,
                            url: c
                        });
                        _.$k("HEAD")[0].appendChild(f)
                    };
                    _.Mo.prototype.ad = function(a, c) {
                        a = (0, _.Ea)(a, Io(Ho(_.$c, _.Ic(Go, this.o))));
                        if (0 < a.length) {
                            var d = this.M.join("/") + "/" + ("m=" + a.join(",")) + "/excm=" + _.Wc(this.o).join(",") + "/d=1/ed=1";
                            this.F && (d += "/rs=" + this.F);
                            Po(d + this.N, c);
                            for (c = 0; c < a.length; c++) this.o[a[c]] = !0
                        }
                    };
                    var Po = function(a, c) {
                        var d = window.document.createElement("LINK");
                        d.setAttribute("rel", "stylesheet");
                        d.setAttribute("type", "text/css");
                        d.setAttribute("href", a);
                        d.onload = d.onreadystatechange = function() {
                            d.readyState && "loaded" != d.readyState && "complete" != d.readyState || c && c.call(null)
                        };
                        _.$k("HEAD")[0].appendChild(d)
                    };
                    _.Mo.prototype.C = function(a, c) {
                        if (!this.K)
                            if (void 0 != c) window.setTimeout((0, _.w)(this.C, this, a, void 0), c);
                            else {
                                _.Oo(this, _.Fi(this.A, 1), a);
                                a = _.Fi(this.A, 2);
                                if (_.F(this.A, 3)) {
                                    var d = (0, _.w)(this.ad, this, a);
                                    a = function() {
                                        d()
                                    };
                                    "undefined" !== typeof window.addEventListener ? window.addEventListener("load", a) : window.attachEvent("onload", a)
                                } else this.ad(a);
                                this.K = !0
                            }
                    };
                    var Qo = function(a, c) {
                        var d = {};
                        d._sn = ["v.gas", c].join(".");
                        _.fc(a, d)
                    };
                    var Ro = ["gbq1", "gbq2", "gbqfbwa"],
                        So = function(a) {
                            var c = window.document.getElementById("gbqld");
                            c && (c.style.display = a ? "none" : "block", c = window.document.getElementById("gbql")) && (c.style.display = a ? "block" : "none")
                        };
                    var Uo = function(a) {
                            this.A = new Lo;
                            this.F = a;
                            this.D = [{
                                id: "t",
                                max: 900
                            }, {
                                id: "f"
                            }];
                            this.b = To(a.offsetWidth, this.D);
                            this.G = new _.Al(_.Dl(), 10);
                            _.M(this.G, "b", function() {
                                window.requestAnimationFrame ? window.requestAnimationFrame((0, _.w)(this.C, this)) : this.C()
                            }, !1, this)
                        },
                        To = function(a, c) {
                            for (var d = 0, e = c.length - 1, f = c[0]; d < e;) {
                                if (a <= f.max) return f.id;
                                f = c[++d]
                            }
                            return c[e].id
                        };
                    Uo.prototype.C = function() {
                        var a = To(this.F.offsetWidth, this.D);
                        a != this.b && (this.b = a, this.w(new Jo))
                    };
                    Uo.prototype.o = function(a, c, d) {
                        this.A.o(a, c, d)
                    };
                    Uo.prototype.B = function(a, c) {
                        this.A.B(a, c)
                    };
                    Uo.prototype.w = function(a) {
                        this.A.w(a)
                    };
                    var Vo, Xo, Yo, Zo, $o;
                    Vo = null;
                    _.Wo = function() {
                        if (null != Vo) return Vo;
                        var a = window.document.body.style;
                        if (!(a = "flexGrow" in a || "webkitFlexGrow" in a)) a: {
                            if (a = window.navigator.userAgent) {
                                var c = /Trident\/(\d+)/.exec(a);
                                if (c && 7 <= Number(c[1])) {
                                    a = /\bMSIE (\d+)/.exec(a);
                                    a = !a || "10" == a[1];
                                    break a
                                }
                            }
                            a = !1
                        }
                        return Vo = a
                    };
                    Xo = function(a, c, d) {
                        var e = window.NaN;
                        window.getComputedStyle && (a = window.getComputedStyle(a, null).getPropertyValue(c)) && "px" == a.substr(a.length - 2) && (e = d ? (0, window.parseFloat)(a.substr(0, a.length - 2)) : (0, window.parseInt)(a.substr(0, a.length - 2), 10));
                        return e
                    };
                    Yo = function(a) {
                        var c = a.offsetWidth,
                            d = Xo(a, "width");
                        if (!(0, window.isNaN)(d)) return c - d;
                        var e = a.style.padding,
                            f = a.style.paddingLeft,
                            g = a.style.paddingRight;
                        a.style.padding = a.style.paddingLeft = a.style.paddingRight = 0;
                        d = a.clientWidth;
                        a.style.padding = e;
                        a.style.paddingLeft = f;
                        a.style.paddingRight = g;
                        return c - d
                    };
                    Zo = function(a) {
                        var c = Xo(a, "min-width");
                        if (!(0, window.isNaN)(c)) return c;
                        var d = a.style.width,
                            e = a.style.padding,
                            f = a.style.paddingLeft,
                            g = a.style.paddingRight;
                        a.style.width = a.style.padding = a.style.paddingLeft = a.style.paddingRight = 0;
                        c = a.clientWidth;
                        a.style.width = d;
                        a.style.padding = e;
                        a.style.paddingLeft = f;
                        a.style.paddingRight = g;
                        return c
                    };
                    $o = function(a, c) {
                        c || -.5 != a - Math.round(a) || (a -= .5);
                        return Math.round(a)
                    };
                    _.ap = function(a) {
                        if (a) {
                            var c = a.style.opacity;
                            a.style.opacity = ".99";
                            _.eb(a.offsetWidth);
                            a.style.opacity = c
                        }
                    };
                    var bp = function(a) {
                        _.A.call(this);
                        this.b = a;
                        this.o = [];
                        this.w = []
                    };
                    _.z(bp, _.A);
                    bp.prototype.P = function() {
                        bp.J.P.call(this);
                        this.b = null;
                        for (var a = 0; a < this.o.length; a++) this.o[a].ga();
                        for (a = 0; a < this.w.length; a++) this.w[a].ga();
                        this.o = this.w = null
                    };
                    bp.prototype.Za = function(a) {
                        void 0 == a && (a = this.b.offsetWidth);
                        for (var c = Yo(this.b), d = [], e = 0, f = 0, g = 0, h = 0, l = 0; l < this.o.length; l++) {
                            var q = this.o[l],
                                r = cp(q),
                                y = Yo(q.b);
                            d.push({
                                item: q,
                                Cb: r,
                                di: y,
                                Ic: 0
                            });
                            e += r.Tc;
                            f += r.hd;
                            g += r.nc;
                            h += y
                        }
                        a = a - h - c - g;
                        e = 0 < a ? e : f;
                        f = a;
                        c = d;
                        do {
                            g = !0;
                            h = [];
                            for (l = q = 0; l < c.length; l++) {
                                r = c[l];
                                y = 0 < f ? r.Cb.Tc : r.Cb.hd;
                                var N = 0 == e ? 0 : y / e * f + r.Ic;
                                N = $o(N, g);
                                g = !g;
                                r.Ic = dp(r.item, N, r.di, r.Cb.nc);
                                0 < y && N == r.Ic && (h.push(r), q += y)
                            }
                            c = h;
                            f = a - (0, _.Ga)(d, function(a, c) {
                                return a + c.Ic
                            }, 0);
                            e = q
                        } while (0 != f && 0 != c.length);
                        for (l = 0; l < this.w.length; l++) this.w[l].Za()
                    };
                    var fp = function(a) {
                            var c = {};
                            c.items = (0, _.Fa)(a.o, function(a) {
                                return ep(a)
                            });
                            c.children = (0, _.Fa)(a.w, function(a) {
                                return fp(a)
                            });
                            return c
                        },
                        gp = function(a, c) {
                            for (var d = 0; d < a.o.length; d++) a.o[d].b.style.width = c.items[d];
                            for (d = 0; d < a.w.length; d++) gp(a.w[d], c.children[d])
                        };
                    bp.prototype.R = function() {
                        return this.b
                    };
                    var hp = function(a, c, d, e) {
                        bp.call(this, a);
                        this.B = c;
                        this.C = d;
                        this.A = e
                    };
                    _.z(hp, bp);
                    var cp = function(a, c) {
                            var d = a.B,
                                e = a.C;
                            if (-1 == a.A) {
                                var f = c;
                                void 0 == f && (f = Yo(a.b));
                                c = ep(a);
                                var g = fp(a),
                                    h = Xo(a.b, "width", !0);
                                (0, window.isNaN)(h) && (h = a.b.offsetWidth - f);
                                f = Math.ceil(h);
                                a.b.style.width = c;
                                gp(a, g);
                                a = f
                            } else a = a.A;
                            return {
                                Tc: d,
                                hd: e,
                                nc: a
                            }
                        },
                        dp = function(a, c, d, e) {
                            void 0 == d && (d = Yo(a.b));
                            void 0 == e && (e = cp(a, d).nc);
                            c = e + c;
                            0 > c && (c = 0);
                            a.b.style.width = c + "px";
                            d = a.b.offsetWidth - d;
                            a.b.style.width = d + "px";
                            return d - e
                        },
                        ep = function(a) {
                            var c = a.b.style.width;
                            a.b.style.width = "";
                            return c
                        };
                    var ip = function(a, c, d) {
                            var e;
                            void 0 == e && (e = -1);
                            return {
                                className: a,
                                Cb: {
                                    Tc: c || 0,
                                    hd: d || 0,
                                    nc: e
                                }
                            }
                        },
                        jp = {
                            className: "gb_Sf",
                            items: [ip("gb_9b"), ip("gb_ag"), ip("gb_Mf", 0, 2), ip("gb_bg"), ip("gb_jb", 1, 1)],
                            Ab: [{
                                className: "gb_jb",
                                items: [ip("gb_pe", 0, 1), ip("gb_Dc", 0, 1)],
                                Ab: [function(a) {
                                    a = a.gb_pe;
                                    if (a) var c = a.R();
                                    else {
                                        c = window.document.querySelector(".gb_pe");
                                        if (!c) return null;
                                        a = new bp(c)
                                    }
                                    c = c.querySelectorAll(".gb_Q");
                                    for (var d = 0; d < c.length; d++) {
                                        var e = new hp(c[d], 0, 0, -1);
                                        a.o.push(e)
                                    }
                                    return a
                                }, {
                                    className: "gb_Dc",
                                    items: [ip("gb_8"),
                                        ip("gb_Mc"), ip("gb_Pf"), ip("gb_fb", 0, 1), ip("gb_Ag"), ip("gb_cb", 0, 1), ip("gb_Bg"), ip("gb_dg")
                                    ],
                                    Ab: [{
                                        className: "gb_fb",
                                        items: [ip("gb_ib", 0, 1)],
                                        Ab: [{
                                            className: "gb_ib",
                                            items: [ip("gb_eb", 0, 1)],
                                            Ab: []
                                        }]
                                    }]
                                }]
                            }, {
                                className: "gb_8f",
                                items: [ip("gbqff", 1, 1), ip("gb_7f")],
                                Ab: []
                            }]
                        },
                        kp = function(a, c) {
                            if (!c) {
                                c = window.document.querySelector("." + a.className);
                                if (!c) return null;
                                c = new bp(c)
                            }
                            for (var d = {}, e = 0; e < a.items.length; e++) {
                                var f = a.items[e],
                                    g;
                                if (g = (g = window.document.querySelector("." + f.className)) ? new hp(g, f.Cb.Tc, f.Cb.hd, f.Cb.nc) : null) c.o.push(g), d[f.className] = g
                            }
                            for (e = 0; e < a.Ab.length; e++) {
                                f = a.Ab[e];
                                var h;
                                "function" == typeof f ? h = f(d) : h = kp(f, d[f.className]);
                                h && c.w.push(h)
                            }
                            return c
                        };
                    _.mp = function(a, c) {
                        _.A.call(this);
                        this.H = c;
                        this.o = window.document.getElementById("gb");
                        this.B = (this.b = window.document.querySelector(".gb_jb")) ? this.b.querySelector(".gb_Dc") : null;
                        this.A = [];
                        this.re = _.K(_.F(a, 5), 60);
                        this.C = _.F(a, 4);
                        this.li = _.K(_.F(a, 2), 152);
                        this.kg = _.K(_.F(a, 1), 30);
                        this.w = null;
                        this.cf = _.I(_.F(a, 3), !0);
                        this.o && this.C && (this.o.style.minWidth = this.C + "px");
                        this.Hb = null;
                        this.o && (this.Hb = new Uo(this.o));
                        this.cf && (this.o && (lp(this), _.R(this.o, "gb_Nf"), this.b && _.R(this.b, "gb_Nf"), _.Wo() || (this.w =
                            kp(jp))), this.Za(), window.setTimeout((0, _.w)(this.Za, this), 0));
                        a = (0, _.w)(this.K, this);
                        _.t("gbar.elc", a, void 0);
                        _.t("gbar.ela", _.ta, void 0);
                        a = (0, _.w)(this.D, this);
                        _.t("gbar.elh", a, void 0)
                    };
                    _.z(_.mp, _.A);
                    _.Ka(_.mp, "el");
                    var np = function() {
                        var a = _.mp.xi();
                        return {
                            es: a ? {
                                f: a.li,
                                h: a.re,
                                m: a.kg
                            } : {
                                f: 152,
                                h: 60,
                                m: 30
                            },
                            mo: "md",
                            vh: window.innerHeight || 0,
                            vw: window.innerWidth || 0
                        }
                    };
                    _.mp.prototype.P = function() {
                        _.mp.J.P.call(this)
                    };
                    _.mp.prototype.Za = function(a) {
                        a && lp(this);
                        this.w && this.w.Za(Math.max(window.document.documentElement.clientWidth, Zo(this.o)));
                        _.ap(this.b)
                    };
                    _.mp.prototype.F = function() {
                        try {
                            var a = window.document.getElementById("gb"),
                                c = a.querySelector(".gb_jb");
                            _.S(a, "gb_Tg");
                            c && _.S(c, "gb_Tg");
                            a = 0;
                            for (var d; d = Ro[a]; a++) {
                                var e = window.document.getElementById(d);
                                e && _.S(e, "gbqfh")
                            }
                            So(!1)
                        } catch (f) {
                            Qo(f, "rhcc")
                        }
                        this.G && this.G();
                        this.Za(!0)
                    };
                    _.mp.prototype.M = function() {
                        try {
                            var a = window.document.getElementById("gb"),
                                c = a.querySelector(".gb_jb");
                            _.R(a, "gb_Tg");
                            c && _.R(c, "gb_Tg");
                            a = 0;
                            for (var d; d = Ro[a]; a++) {
                                var e = window.document.getElementById(d);
                                e && _.R(e, "gbqfh")
                            }
                            So(!0)
                        } catch (f) {
                            Qo(f, "ahcc")
                        }
                        this.Za(!0)
                    };
                    _.op = function(a) {
                        return a.Hb ? a.Hb.b : "f"
                    };
                    _.mp.prototype.K = function(a) {
                        this.A.push(a)
                    };
                    _.mp.prototype.D = function(a) {
                        this.re = np().es.h + a;
                        for (a = 0; a < this.A.length; a++) try {
                            this.A[a](np())
                        } catch (c) {
                            this.H.log(c)
                        }
                    };
                    var lp = function(a) {
                        if (a.b) {
                            var c;
                            a.w && (c = fp(a.w));
                            _.R(a.b, "gb_kb");
                            a.b.style.minWidth = a.b.offsetWidth - Yo(a.b) + "px";
                            a.B.style.minWidth = a.B.offsetWidth - Yo(a.B) + "px";
                            _.S(a.b, "gb_kb");
                            c && gp(a.w, c)
                        }
                    };
                    _.U(function() {
                        var a = _.H(_.L(), Do, 21) || new Do,
                            c = _.W();
                        a = new _.mp(a, c);
                        _.Ma("el", a);
                        _.Kl("gbar.gpca", (0, _.w)(a.M, a));
                        _.Kl("gbar.gpcr", (0, _.w)(a.F, a))
                    });
                    _.t("gbar.elr", np, void 0);
                    _.pp = function(a) {
                        this.w = _.mp.U();
                        this.o = a
                    };
                    _.pp.prototype.b = function(a, c) {
                        "t" == _.op(this.w) ? (_.R(a, "gb_Of"), c ? (_.S(a, "gb_gb"), _.R(a, "gb_Cg")) : (_.S(a, "gb_Cg"), _.R(a, "gb_gb"))) : _.Qh(a, ["gb_Of", "gb_gb", "gb_Cg"])
                    };
                    var qp = function() {
                        var a = window.document.getElementsByClassName("gb_Kg");
                        return 0 < a.length ? a[0] : null
                    };
                    _.Kl("gbar.sos", function() {
                        return window.document.querySelectorAll(".gb_9f")
                    });
                    _.Kl("gbar.si", function() {
                        return window.document.querySelector(".gb_ve")
                    });
                    _.t("gbar.cph", qp, void 0);
                    _.t("gbar.tcph", function(a) {
                        var c = qp();
                        c && _.sl(c, "gb_8a", !a)
                    }, void 0);
                    _.U(function() {
                        if (_.H(_.L(), _.Fo, 16)) {
                            var a = window.document.querySelector(".gb_jb"),
                                c = _.H(_.L(), _.Fo, 16) || new _.Fo;
                            c = _.I(_.F(c, 1), !1);
                            c = new _.pp(c);
                            a && c.o && c.b(a, !1)
                        }
                    });
                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    _.rp = function(a) {
                        _.E(this, a, 0, -1, null)
                    };
                    _.z(_.rp, _.D);
                    _.sp = function(a, c, d) {
                        return function() {
                            try {
                                return c.apply(d, arguments)
                            } catch (e) {
                                a.log(e)
                            }
                        }
                    };
                    _.tp = function() {
                        _.A.call(this);
                        this.o = new _.O
                    };
                    _.z(_.tp, _.A);
                    _.tp.prototype[_.Ud] = !0;
                    _.k = _.tp.prototype;
                    _.k.L = function(a, c, d, e) {
                        return this.o.L(a, c, d, e)
                    };
                    _.k.Oa = function(a, c, d, e) {
                        return this.o.Oa(a, c, d, e)
                    };
                    _.k.ua = function(a, c, d, e) {
                        return this.o.ua(a, c, d, e)
                    };
                    _.k.Bc = function(a) {
                        return this.o.Bc(a)
                    };
                    _.k.dispatchEvent = function(a) {
                        return this.o.dispatchEvent(a)
                    };
                    _.k.fd = function(a) {
                        return this.o.fd(a)
                    };
                    _.k.Qc = function() {
                        return this.o.Qc()
                    };
                    _.k.Wb = function(a, c, d) {
                        return this.o.Wb(a, c, d)
                    };
                    _.k.Zb = function(a, c) {
                        return this.o.Zb(a, c)
                    };
                    _.k.Db = function(a, c, d, e) {
                        return this.o.Db(a, c, d, e)
                    };
                    _.k.hasListener = function(a, c) {
                        return this.o.hasListener(a, c)
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var up = function() {
                            _.Cj.w(_.fc)
                        },
                        vp = function(a, c) {
                            var d = _.W();
                            d = _.sp(d, up);
                            a.addEventListener ? a.addEventListener(c, d) : a.attachEvent && a.attachEvent("on" + c, d)
                        },
                        wp = [1, 2],
                        xp = function(a) {
                            _.E(this, a, 0, -1, wp)
                        };
                    _.z(xp, _.D);
                    var yp = function(a, c) {
                            a.B.push(c)
                        },
                        zp = function(a, c) {
                            a.__PVT = c
                        },
                        Ap = function(a) {
                            _.A.call(this);
                            this.C = a;
                            this.A = this.w = null;
                            this.b = {};
                            this.B = {};
                            this.o = {}
                        };
                    _.z(Ap, _.A);
                    var Bp = function(a) {
                        if (a.w) return a.w;
                        for (var c in a.o)
                            if (a.o[c].Ye() && a.o[c].hb()) return a.o[c];
                        return null
                    };
                    _.k = Ap.prototype;
                    _.k.fe = function(a) {
                        a && Bp(this) && a != Bp(this) && Bp(this).bd(!1);
                        this.w = a
                    };
                    _.k.ef = function(a) {
                        a = this.o[a] || a;
                        return Bp(this) == a
                    };
                    _.k.pi = function(a) {
                        this.A = a
                    };
                    _.k.df = function(a) {
                        return this.A == a
                    };
                    _.k.wd = function() {
                        Bp(this) && Bp(this).bd(!1);
                        this.fe(null)
                    };
                    _.k.Uf = function(a) {
                        Bp(this) && Bp(this).getId() == a && this.wd()
                    };
                    _.k.lc = function(a, c, d) {
                        this.b[a] = this.b[a] || {};
                        this.b[a][c] = this.b[a][c] || [];
                        this.b[a][c].push(d)
                    };
                    _.k.ud = function(a, c) {
                        c = c.getId();
                        if (this.b[a] && this.b[a][c])
                            for (var d = 0; d < this.b[a][c].length; d++) try {
                                this.b[a][c][d]()
                            } catch (e) {
                                this.C.log(e)
                            }
                    };
                    _.k.si = function(a, c) {
                        this.B[a] = c
                    };
                    _.k.Sf = function(a) {
                        return !this.B[a.getId()]
                    };
                    _.k.wh = function() {
                        return !!Bp(this) && Bp(this).Ze()
                    };
                    _.k.Qf = function() {
                        return !!Bp(this)
                    };
                    _.k.kf = function() {
                        Bp(this) && Bp(this).Ud()
                    };
                    _.k.ui = function(a) {
                        this.o[a] && (Bp(this) && Bp(this).getId() == a || this.o[a].bd(!0))
                    };
                    _.k.Vd = function(a) {
                        this.o[a.getId()] = a
                    };
                    var Cp = function() {
                        _.A.call(this);
                        this.o = [];
                        this.b = []
                    };
                    _.z(Cp, _.A);
                    Cp.prototype.w = function(a, c) {
                        this.o.push({
                            Jc: a,
                            options: c
                        })
                    };
                    Cp.prototype.init = function(a, c, d) {
                        window.gapi = {};
                        var e = window.___jsl = {};
                        e.h = _.J(_.F(a, 1));
                        e.ms = _.J(_.F(a, 2));
                        e.m = _.J(_.F(a, 3));
                        e.l = [];
                        _.F(c, 1) && (a = _.F(c, 3)) && this.b.push(a);
                        _.F(d, 1) && (d = _.F(d, 2)) && this.b.push(d);
                        d = (0, _.w)(this.w, this);
                        _.t("gapi.load", d, void 0);
                        return this
                    };
                    var Dp = function(a) {
                        _.A.call(this);
                        this.C = a;
                        this.w = this.b = null;
                        this.D = 0;
                        this.B = {};
                        this.o = !1;
                        a = window.navigator.userAgent;
                        0 <= a.indexOf("MSIE") && 0 <= a.indexOf("Trident") && (a = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)) && a[1] && 9 > (0, window.parseFloat)(a[1]) && (this.o = !0)
                    };
                    _.z(Dp, _.A);
                    var Ep = function(a, c, d) {
                        if (!a.o)
                            if (d instanceof Array)
                                for (var e in d) Ep(a, c, d[e]);
                            else {
                                e = (0, _.w)(a.F, a, c);
                                var f = a.D + d;
                                a.D++;
                                c.setAttribute("data-eqid", f);
                                a.B[f] = e;
                                c && c.addEventListener ? c.addEventListener(d, e, !1) : c && c.attachEvent ? c.attachEvent("on" + d, e) : a.C.log(Error("ma`" + c))
                            }
                    };
                    Dp.prototype.A = function(a, c) {
                        if (this.o) return null;
                        if (c instanceof Array) {
                            var d = null,
                                e;
                            for (e in c) {
                                var f = this.A(a, c[e]);
                                f && (d = f)
                            }
                            return d
                        }
                        d = null;
                        this.b && this.b.type == c && this.w == a && (d = this.b, this.b = null);
                        if (e = a.getAttribute("data-eqid")) a.removeAttribute("data-eqid"), (e = this.B[e]) ? a.removeEventListener ? a.removeEventListener(c, e, !1) : a.detachEvent && a.detachEvent("on" + c, e) : this.C.log(Error("na`" + a));
                        return d
                    };
                    Dp.prototype.F = function(a, c) {
                        this.b = c;
                        this.w = a;
                        c.preventDefault ? c.preventDefault() : c.returnValue = !1
                    };
                    (function() {
                        var a;
                        window.gbar && window.gbar._LDD ? a = window.gbar._LDD : a = [];
                        var c = _.Oi();
                        zp(window, _.J(_.F(c, 8)));
                        c = _.hc();
                        var d = _.W();
                        a = new _.Mo(c, _.H(_.L(), xp, 17) || new xp, a, d, _.Gl());
                        _.Ma("m", a);
                        var e = function() {
                            _.Sk("gbar.qm", (0, _.w)(function(a) {
                                try {
                                    a()
                                } catch (g) {
                                    d.log(g)
                                }
                            }, this));
                            _.Mi("api").Ra()
                        };
                        _.I(_.F(c, 18), !0) ? a.C(e) : (c = _.K(_.F(c, 19), 200), c = (0, _.w)(a.C, a, e, c), _.U(c))
                    })();
                    vp(window.document, "DOMContentLoaded");
                    vp(window, "load");
                    var Fp = _.w(_.Cj.w, _.Cj, _.fc);
                    _.t("gbar.ldb", Fp, void 0);
                    _.t("gbar.mls", function() {}, void 0);
                    _.Ma("eq", new Dp(_.W()));
                    _.Ma("gs", (new Cp).init(_.Wk(), _.H(_.L(), _.rp, 5) || new _.rp, _.H(_.L(), _.Co, 6) || new _.Co));
                    (function() {
                        for (var a = function(a) {
                                return function() {
                                    _.Hl(44, {
                                        n: a
                                    })
                                }
                            }, c = 0; c < _.Pa.length; c++) {
                            var d = "gbar." + _.Pa[c];
                            _.t(d, a(d), void 0)
                        }
                        var e = _.Ia.U();
                        _.Ja(e, "api").Ra();
                        yp(_.Ja(e, "m"), function() {
                            _.Ja(e, "api").Ra()
                        })
                    })();
                    var Gp = function(a) {
                        _.U(function() {
                            var c = window.document.querySelector("." + a);
                            c && (c = c.querySelector(".gb_b")) && Ep(_.Mi("eq"), c, "click")
                        })
                    };
                    var Hp = window.document.querySelector(".gb_8"),
                        Ip = /(\s+|^)gb_6f(\s+|$)/;
                    Hp && !Ip.test(Hp.className) && Gp("gb_8");
                    var Jp = new Ap(_.W());
                    _.Ma("dd", Jp);
                    var Kp = (0, _.w)(Jp.wd, Jp);
                    _.t("gbar.close", Kp, void 0);
                    var Lp = (0, _.w)(Jp.Uf, Jp);
                    _.t("gbar.cls", Lp, void 0);
                    var Mp = (0, _.w)(Jp.lc, Jp, 0);
                    _.t("gbar.abh", Mp, void 0);
                    var Np = (0, _.w)(Jp.lc, Jp, 1);
                    _.t("gbar.adh", Np, void 0);
                    var Op = (0, _.w)(Jp.lc, Jp, 2);
                    _.t("gbar.ach", Op, void 0);
                    var Pp = (0, _.w)(Jp.si, Jp);
                    _.t("gbar.aeh", Pp, void 0);
                    var Qp = (0, _.w)(Jp.wh, Jp);
                    _.t("gbar.bsy", Qp, void 0);
                    _.Kl("gbar.op", (0, _.w)(Jp.Qf, Jp));
                    Gp("gb_fb");
                    _.U(function() {
                        var a = window.document.querySelector(".gb_cc");
                        a && Ep(_.Mi("eq"), a, "click")
                    });
                    Gp("gb_Mc");
                    var Rp = (0, _.w)(window.document.getElementById, window.document, "gbqfqw");
                    _.t("gbar.qfgw", Rp, void 0);
                    var Sp = (0, _.w)(window.document.getElementById, window.document, "gbqfq");
                    _.t("gbar.qfgq", Sp, void 0);
                    var Tp = (0, _.w)(window.document.getElementById, window.document, "gbqf");
                    _.t("gbar.qfgf", Tp, void 0);
                    var Up = (0, _.w)(window.document.getElementById, window.document, "gbqfb");
                    _.t("gbar.qfsb", Up, void 0);
                    Gp("gb_Pf");
                    Gp("gb_dg");
                } catch (e) {
                    _._DumpException(e)
                }
            })(this.gbar_);
            // Google Inc.
        </script>
        <div class="gb_7a">
            <div class="gb_ba gb_aa gb_oa" aria-label="تطبيقات Google" aria-hidden="true" role="region">
                <ul class="gb_da gb_6" aria-dropeffect="move">
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="192" href="https://myaccount.google.com/?utm_source=OGB&amp;utm_medium=app" id="gb192">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -345px"></span><span dir="rtl" class="gb_X">حساب Google</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="1" href="https://www.google.com.eg/webhp?tab=ww" id="gb1">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -2139px"></span><span class="gb_X">بحث</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="8" href="https://maps.google.com.eg/maps?hl=ar&amp;tab=wl" id="gb8">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -759px"></span><span class="gb_X">خرائط</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="36" href="https://www.youtube.com/?gl=EG" id="gb36">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -828px"></span><span dir="ltr" class="gb_X">YouTube</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="5" href="https://news.google.com.eg/nwshp?hl=ar&amp;ned=ar_me&amp;tab=wn" id="gb5">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -414px"></span><span class="gb_X">الأخبار</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="23" href="https://mail.google.com/mail/?tab=wm" id="gb23">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -138px"></span><span dir="ltr" class="gb_X">Gmail</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="53" href="https://contacts.google.com/?hl=ar&amp;tab=wC" id="gb53">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -2001px"></span><span class="gb_X">جهات الاتصال</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="49" href="https://drive.google.com/?tab=wo" id="gb49">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -966px"></span><span dir="ltr" class="gb_X">Drive</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="24" href="https://www.google.com/calendar?tab=wc" id="gb24">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -1380px"></span><span class="gb_X">تقويم</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="119" href="https://plus.google.com/?gpsrc=ogpy0&amp;tab=wX" id="gb119">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -1311px"></span><span dir="ltr" class="gb_X">Google+‎</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="51" href="https://translate.google.com.eg/?hl=ar&amp;tab=wT" id="gb51">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -483px"></span><span class="gb_X">ترجمة</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="31" href="https://photos.google.com/?tab=wq&amp;pageId=none" id="gb31">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -2277px"></span><span class="gb_X">الصور</span></a>
                    </li>
                </ul><a class="gb_ea gb_5f" aria-label="المزيد من تطبيقات Google" href="https://www.google.com.eg/intl/ar/options/">المزيد</a><span class="gb_fa"></span>
                <ul class="gb_da gb_7" aria-dropeffect="move">
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="25" href="https://docs.google.com/document/?usp=docs_alc" id="gb25">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -1863px"></span><span class="gb_X">المستندات</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="30" href="https://www.blogger.com/?tab=wj" id="gb30">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 -690px"></span><span dir="ltr" class="gb_X">Blogger</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="300" href="https://hangouts.google.com/" id="gb300">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_W" style="background-position:0 0"></span><span dir="ltr" class="gb_X">Hangouts</span></a>
                    </li>
                    <li class="gb_T" aria-grabbed="false">
                        <a class="gb_O" data-pid="136" href="https://keep.google.com/" id="gb136">
                            <div class="gb_2"></div>
                            <div class="gb_3"></div>
                            <div class="gb_4"></div>
                            <div class="gb_5"></div><span class="gb_M"></span><span dir="ltr" class="gb_X">Keep</span></a>
                    </li>
                </ul><a dir="rtl" class="gb_fa gb_0f" href="https://www.google.com.eg/intl/ar/options/">تلقّي المزيد من Google</a></div>
        </div>
        <style>
            @-moz-keyframes gb__a {
                0% {
                    opacity: 0
                }
                50% {
                    opacity: 1
                }
            }
            
            @keyframes gb__a {
                0% {
                    opacity: 0
                }
                50% {
                    opacity: 1
                }
            }
            
            @-moz-keyframes gb__nb {
                0% {
                    -moz-transform: scale(0, 0);
                    transform: scale(0, 0)
                }
                20% {
                    -moz-transform: scale(1.4, 1.4);
                    transform: scale(1.4, 1.4)
                }
                50% {
                    -moz-transform: scale(.8, .8);
                    transform: scale(.8, .8)
                }
                85% {
                    -moz-transform: scale(1.1, 1.1);
                    transform: scale(1.1, 1.1)
                }
                to {
                    -moz-transform: scale(1.0, 1.0);
                    transform: scale(1.0, 1.0)
                }
            }
            
            @keyframes gb__nb {
                0% {
                    -moz-transform: scale(0, 0);
                    transform: scale(0, 0)
                }
                20% {
                    -moz-transform: scale(1.4, 1.4);
                    transform: scale(1.4, 1.4)
                }
                50% {
                    -moz-transform: scale(.8, .8);
                    transform: scale(.8, .8)
                }
                85% {
                    -moz-transform: scale(1.1, 1.1);
                    transform: scale(1.1, 1.1)
                }
                to {
                    -moz-transform: scale(1.0, 1.0);
                    transform: scale(1.0, 1.0)
                }
            }
            
            .gb_Fc {
                background-position: -314px -38px;
                opacity: .55;
                height: 100%;
                width: 100%
            }
            
            .gb_b:hover .gb_Fc,
            .gb_b:focus .gb_Fc {
                opacity: .85
            }
            
            .gb_Hc .gb_Fc {
                background-position: -463px 0
            }
            
            .gb_Ic {
                background-color: #cb4437;
                -moz-border-radius: 8px;
                border-radius: 8px;
                font: bold 11px Arial;
                color: #fff;
                line-height: 16px;
                min-width: 14px;
                padding: 0 1px;
                position: absolute;
                left: 0;
                text-align: center;
                text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
                top: 0;
                visibility: hidden;
                z-index: 990
            }
            
            .gb_Jc .gb_Ic,
            .gb_Jc .gb_Kc,
            .gb_Jc .gb_Kc.gb_Lc {
                visibility: visible
            }
            
            .gb_Kc {
                padding: 0 2px;
                visibility: hidden
            }
            
            .gb_Mc:not(.gb_Nc) .gb_tb,
            .gb_Mc:not(.gb_Nc) .gb_sb {
                right: 10px
            }
            
            .gb_Ic.gb_Oc {
                -moz-animation: gb__nb .6s 1s both ease-in-out;
                animation: gb__nb .6s 1s both ease-in-out;
                -moz-perspective-origin: top left;
                perspective-origin: top left;
                -moz-transform: scale(1, 1);
                transform: scale(1, 1);
                -moz-transform-origin: top left;
                transform-origin: top left
            }
            
            .gb_Oc .gb_Kc {
                visibility: visible
            }
            
            .gb_9 .gb_b .gb_Fc {
                background-position: 0 0;
                opacity: .7
            }
            
            .gb_9 .gb_Hc .gb_Fc {
                background-position: -279px -38px
            }
            
            .gb_9 .gb_b:hover .gb_Fc,
            .gb_9 .gb_b:focus .gb_Fc {
                opacity: .85
            }
            
            .gb_S .gb_b .gb_Fc {
                background-position: -349px -38px;
                opacity: 1
            }
            
            .gb_S .gb_Hc .gb_Fc {
                background-position: -393px 0
            }
            
            .gb_9 .gb_Ic,
            .gb_S .gb_Ic {
                border: none
            }
            
            .gb_Mc .gb_Pc {
                font-size: 14px;
                font-weight: bold;
                top: 0;
                left: 0
            }
            
            .gb_Mc .gb_b {
                display: inline-block;
                vertical-align: middle;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                height: 30px;
                width: 30px
            }
            
            .gb_Mc .gb_sb {
                border-bottom-color: #e5e5e5
            }
            
            .gb_Qc {
                background-color: rgba(0, 0, 0, .55);
                color: #fff;
                font-size: 12px;
                font-weight: bold;
                line-height: 20px;
                margin: 5px;
                padding: 0 2px;
                text-align: center;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                -moz-border-radius: 50%;
                border-radius: 50%;
                height: 20px;
                width: 20px
            }
            
            .gb_Qc.gb_Rc {
                background-position: -194px -21px
            }
            
            .gb_Qc.gb_Sc {
                background-position: -194px -46px
            }
            
            .gb_b:hover .gb_Qc,
            .gb_b:focus .gb_Qc {
                background-color: rgba(0, 0, 0, .85)
            }
            
            #gbsfw.gb_Tc {
                background: #e5e5e5;
                border-color: #ccc
            }
            
            .gb_9 .gb_Qc {
                background-color: rgba(0, 0, 0, .7)
            }
            
            .gb_S .gb_Qc.gb_Qc,
            .gb_S .gb_Jc .gb_Qc.gb_Qc,
            .gb_S .gb_Jc .gb_b:hover .gb_Qc,
            .gb_S .gb_Jc .gb_b:focus .gb_Qc {
                background-color: #fff;
                color: #404040
            }
            
            .gb_S .gb_Qc.gb_Rc {
                background-position: -70px 0
            }
            
            .gb_S .gb_Qc.gb_Sc {
                background-position: -219px 0
            }
            
            .gb_Jc .gb_Qc.gb_Qc {
                background-color: #db4437;
                color: #fff
            }
            
            .gb_Jc .gb_b:hover .gb_Qc,
            .gb_Jc .gb_b:focus .gb_Qc {
                background-color: #a52714
            }
            
            .gb_7a {
                display: none!important
            }
            
            .gb_8a {
                visibility: hidden
            }
            
            .gb_N .gbqfi::before {
                right: -428px;
                top: 0
            }
            
            .gb_Qb .gbqfb:focus .gbqfi {
                outline: 1px dotted #fff
            }
            
            .gb_N .gb_8 .gb_b::before,
            .gb_N.gb_9 .gb_8 .gb_b::before {
                right: -132px;
                top: -38px
            }
            
            .gb_N.gb_S .gb_8 .gb_b::before {
                right: -463px;
                top: -35px
            }
            
            .gb_Qb .gb_ea {
                position: relative
            }
            
            .gb_8 .gb_b:hover,
            .gb_8 .gb_b:focus {
                opacity: .85
            }
            
            .gb_S .gb_8 .gb_b:hover,
            .gb_S .gb_8 .gb_b:focus {
                opacity: 1
            }
            
            @media (min-resolution:1.25dppx),
            (-webkit-min-device-pixel-ratio:1.25),
            (min-device-pixel-ratio:1.25) {
                .gb_ia .gb_W {
                    background-image: url('https://ssl.gstatic.com/gb/images/p2_381245b0.png')
                }
            }
            
            .gb_N .gb_cc .gb_ec::before {
                right: 0;
                top: -35px
            }
            
            .gb_N.gb_S .gb_cc .gb_ec::before {
                right: -296px;
                top: 0
            }
            
            .gb_N.gb_9 .gb_cc .gb_ec::before {
                right: -97px;
                top: 0
            }
            
            .gb_N .gb_Va {
                background-image: none!important
            }
            
            .gb_N .gb_fc {
                visibility: visible
            }
            
            .gb_Qb .gb_le span {
                background: transparent
            }
            
            .gb_N .gb_Fc::before {
                right: -314px;
                top: -38px
            }
            
            .gb_N .gb_Hc .gb_Fc::before {
                right: -463px;
                top: 0
            }
            
            .gb_N.gb_9 .gb_b .gb_Fc::before {
                right: 0;
                top: 0
            }
            
            .gb_N.gb_9 .gb_Hc .gb_Fc::before {
                right: -279px;
                top: -38px
            }
            
            .gb_N.gb_S .gb_b .gb_Fc::before {
                right: -349px;
                top: -38px
            }
            
            .gb_N.gb_S .gb_Hc .gb_Fc::before {
                right: -393px;
                top: 0
            }
            
            .gb_Qb .gb_Qc {
                border: 1px solid #fff;
                color: #fff
            }
            
            .gb_Qb.gb_9 .gb_Qc {
                border-color: #000;
                color: #000
            }
            
            .gb_N .gb_Qc.gb_Rc::before,
            .gb_Qb.gb_N.gb_S .gb_Qc.gb_Rc::before {
                right: -194px;
                top: -21px
            }
            
            .gb_N .gb_Qc.gb_Sc::before,
            .gb_Qb.gb_N.gb_S .gb_Qc.gb_Sc::before {
                right: -194px;
                top: -46px
            }
            
            .gb_N.gb_S .gb_Qc.gb_Rc::before,
            .gb_Qb.gb_N.gb_9 .gb_Qc.gb_Rc::before {
                right: -70px;
                top: 0
            }
            
            .gb_N.gb_S .gb_Qc.gb_Sc::before,
            .gb_Qb.gb_N.gb_9 .gb_Qc.gb_Sc::before {
                right: -219px;
                top: 0
            }
            
            .gb_xd {
                color: #ffffff;
                font-size: 13px;
                font-weight: bold;
                height: 25px;
                line-height: 19px;
                padding-top: 5px;
                padding-right: 12px;
                position: relative;
                background-color: #4d90fe
            }
            
            .gb_xd .gb_yd {
                color: #ffffff;
                cursor: default;
                font-size: 22px;
                font-weight: normal;
                position: absolute;
                left: 12px;
                top: 5px
            }
            
            .gb_xd .gb_hd,
            .gb_xd .gb_zd {
                color: #ffffff;
                display: inline-block;
                font-size: 11px;
                margin-right: 16px;
                padding: 0 8px;
                white-space: nowrap
            }
            
            .gb_Ad {
                background: none;
                background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.2));
                background-image: linear-gradient(top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.2));
                background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.2));
                -moz-border-radius: 2px;
                border-radius: 2px;
                border: 1px solid #dcdcdc;
                border: 1px solid rgba(0, 0, 0, 0.1);
                cursor: default!important;
                filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#160000ff, endColorstr=#220000ff);
                text-decoration: none!important
            }
            
            .gb_Ad:hover {
                background: none;
                background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.2));
                background-image: linear-gradient(top, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.2));
                background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.2));
                border: 1px solid rgba(0, 0, 0, 0.2);
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#14000000, endColorstr=#22000000)
            }
            
            .gb_Ad:active {
                box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3);
                -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3)
            }
            
            .gb_8c.gb_9c {
                padding: 0
            }
            
            .gb_9c .gb_aa {
                padding: 26px 13px 22px 26px;
                background: #ffffff
            }
            
            .gb_ad.gb_9c .gb_aa {
                background: #4d90fe
            }
            
            a.gb_bd {
                color: #666666!important;
                font-size: 22px;
                height: 9px;
                opacity: .8;
                position: absolute;
                left: 14px;
                top: 4px;
                text-decoration: none!important;
                width: 9px
            }
            
            .gb_ad a.gb_bd {
                color: #c1d1f4!important
            }
            
            a.gb_bd:hover,
            a.gb_bd:active {
                opacity: 1
            }
            
            .gb_cd {
                padding: 0;
                width: 258px;
                white-space: normal;
                display: table
            }
            
            .gb_dd .gb_aa {
                top: 36px;
                border: 0;
                padding: 16px;
                -moz-box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
                box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4)
            }
            
            .gb_dd .gb_cd {
                width: 328px
            }
            
            .gb_dd .gb_Aa,
            .gb_dd .gb_ed,
            .gb_dd .gb_7c,
            .gb_dd .gb_wa,
            .gb_fd {
                line-height: normal;
                font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif
            }
            
            .gb_dd .gb_Aa,
            .gb_dd .gb_ed,
            .gb_dd .gb_wa {
                font-weight: 500
            }
            
            .gb_dd .gb_Aa,
            .gb_dd .gb_wa {
                border: 0;
                padding: 10px 8px
            }
            
            .gb_9c .gb_Aa:active {
                outline: none;
                -moz-box-shadow: 0 4px 5px rgba(0, 0, 0, .16);
                box-shadow: 0 4px 5px rgba(0, 0, 0, .16)
            }
            
            .gb_dd .gb_ed {
                color: #222;
                margin-bottom: 8px
            }
            
            .gb_dd .gb_7c {
                color: #808080;
                font-size: 14px
            }
            
            .gb_gd {
                text-align: left;
                font-size: 14px;
                padding-bottom: 0;
                white-space: nowrap
            }
            
            .gb_gd .gb_hd {
                margin-right: 8px
            }
            
            .gb_gd .gb_id.gb_hd img {
                background-color: inherit;
                -moz-border-radius: initial;
                border-radius: initial;
                height: 1.5em;
                margin: -0.25em 2px -0.25em 10px;
                vertical-align: text-top;
                width: 1.5em
            }
            
            .gb_dd .gb_cd .gb_jd .gb_id {
                border: 2px solid transparent
            }
            
            .gb_dd .gb_cd .gb_jd .gb_id:focus {
                border-color: #bbccff
            }
            
            .gb_dd .gb_cd .gb_jd .gb_id:focus:after,
            .gb_dd .gb_cd .gb_jd .gb_id:hover:after {
                background-color: transparent
            }
            
            .gb_fd {
                background-color: #404040;
                color: #fff;
                padding: 16px;
                position: absolute;
                top: 36px;
                min-width: 328px;
                max-width: 650px;
                left: 0;
                -moz-border-radius: 2px;
                border-radius: 2px;
                -moz-box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
                box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4)
            }
            
            .gb_fd a,
            .gb_fd a:visited {
                color: #5e97f6;
                text-decoration: none
            }
            
            .gb_kd {
                text-transform: uppercase
            }
            
            .gb_ld {
                padding-right: 50px
            }
            
            .gb_ad .gb_cd {
                width: 200px
            }
            
            .gb_ed {
                color: #333333;
                font-size: 16px;
                line-height: 20px;
                margin: 0;
                margin-bottom: 16px
            }
            
            .gb_ad .gb_ed {
                color: #ffffff
            }
            
            .gb_7c {
                color: #666666;
                line-height: 17px;
                margin: 0;
                margin-bottom: 5px
            }
            
            .gb_ad .gb_7c {
                color: #ffffff
            }
            
            .gb_7c a.gb_nd {
                text-decoration: none;
                color: #5e97f6
            }
            
            .gb_7c a.gb_nd:visited {
                color: #5e97f6
            }
            
            .gb_7c a.gb_nd:hover,
            .gb_7c a.gb_nd:active {
                text-decoration: underline
            }
            
            .gb_od {
                position: absolute;
                background: transparent;
                top: -999px;
                z-index: -1;
                visibility: hidden;
                margin-top: 1px;
                margin-right: 1px
            }
            
            #gb .gb_9c {
                margin: 0
            }
            
            .gb_9c .gb_Fb {
                background: #4d90fe;
                border-color: #3079ed;
                margin-top: 15px
            }
            
            .gb_dd .gb_Aa {
                background: #4285f4
            }
            
            .gb_9c a.gb_Aa,
            #gb .gb_9c a.gb_Fb.gb_Fb {
                color: #ffffff
            }
            
            .gb_9c .gb_Fb:hover {
                background: #357ae8;
                border-color: #2f5bb7
            }
            
            .gb_pd .gb_Pc .gb_sb {
                border-bottom-color: #ffffff;
                display: block
            }
            
            .gb_qd .gb_Pc .gb_sb {
                border-bottom-color: #4d90fe;
                display: block
            }
            
            .gb_pd .gb_Pc .gb_tb,
            .gb_qd .gb_Pc .gb_tb {
                display: block
            }
            
            .gb_rd,
            .gb_jd {
                display: table-cell
            }
            
            .gb_rd {
                vertical-align: middle
            }
            
            .gb_dd .gb_rd {
                vertical-align: top
            }
            
            .gb_jd {
                padding-right: 13px;
                width: 100%
            }
            
            .gb_dd .gb_jd {
                padding-right: 20px
            }
            
            .gb_sd {
                display: block;
                display: inline-block;
                padding: 1em 0 0 0;
                position: relative;
                width: 100%
            }
            
            .gb_td {
                color: #ff0000;
                font-style: italic;
                margin: 0;
                padding-right: 46px
            }
            
            .gb_sd .gb_ud {
                float: left;
                margin: -20px 0;
                width: -moz-calc(100% - 46px);
                width: calc(100% - 46px)
            }
            
            .gb_vd svg {
                fill: grey
            }
            
            .gb_vd.gb_wd svg {
                fill: #4285f4
            }
            
            .gb_sd .gb_ud label:after {
                background-color: #4285f4
            }
            
            .gb_vd {
                display: inline;
                float: left;
                margin-left: 22px;
                position: relative;
                top: -4px
            }
            
            .gb_Jf {
                margin-bottom: 32px;
                font-size: small
            }
            
            .gb_Jf .gb_Kf {
                margin-left: 5px
            }
            
            .gb_Jf .gb_Lf {
                color: red
            }
            
            .gb_Wc {
                display: none
            }
            
            .gb_Wc.gb_g {
                display: block
            }
            
            .gb_Xc {
                background-color: #fff;
                -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
                color: #000;
                position: relative;
                z-index: 986
            }
            
            .gb_Zc {
                height: 40px;
                padding: 16px 24px;
                white-space: nowrap
            }
            
            .gb_0c {
                position: fixed;
                bottom: 16px;
                padding: 16px;
                left: 16px;
                white-space: normal;
                width: 328px;
                transition: width .2s, bottom .2s, right .2s;
                -moz-border-radius: 2px;
                border-radius: 2px;
                -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
                box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)
            }
            
            @media (max-width:400px) {
                .gb_Xc.gb_0c {
                    max-width: 368px;
                    width: auto;
                    bottom: 0;
                    left: 0
                }
            }
            
            .gb_Xc .gb_Fb {
                border: 0;
                font-weight: 500;
                font-size: 14px;
                line-height: 36px;
                min-width: 32px;
                padding: 0 16px;
                vertical-align: middle
            }
            
            .gb_Xc .gb_Fb:before {
                content: '';
                height: 6px;
                right: 0;
                position: absolute;
                top: -6px;
                width: 100%
            }
            
            .gb_Xc .gb_Fb:after {
                bottom: -6px;
                content: '';
                height: 6px;
                right: 0;
                position: absolute;
                width: 100%
            }
            
            .gb_Xc .gb_Fb+.gb_Fb {
                margin-right: 8px
            }
            
            .gb_1c {
                height: 48px;
                padding: 4px;
                margin: -8px -8px 0 0
            }
            
            .gb_0c .gb_1c {
                float: right;
                margin: -4px
            }
            
            .gb_2c {
                font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
                overflow: hidden;
                vertical-align: top
            }
            
            .gb_Zc .gb_2c {
                display: inline-block;
                padding-right: 8px;
                width: 640px
            }
            
            .gb_0c .gb_2c {
                display: block;
                margin-right: 56px;
                padding-bottom: 16px
            }
            
            .gb_3c {
                background-color: inherit
            }
            
            .gb_Zc .gb_3c {
                display: inline-block;
                position: absolute;
                top: 18px;
                left: 24px
            }
            
            .gb_0c .gb_3c {
                text-align: left;
                padding-left: 24px;
                padding-top: 6px
            }
            
            .gb_3c .gb_4c {
                height: 1.5em;
                margin: -.25em 0 -.25em 10px;
                vertical-align: text-top;
                width: 1.5em
            }
            
            .gb_5c {
                line-height: 20px;
                font-size: 16px;
                font-weight: 700;
                color: rgba(0, 0, 0, .87)
            }
            
            .gb_0c .gb_5c {
                color: rgba(0, 0, 0, .87);
                font-size: 16px;
                line-height: 20px;
                padding-top: 8px
            }
            
            .gb_Zc .gb_5c,
            .gb_Zc .gb_6c {
                width: 640px
            }
            
            .gb_6c .gb_7c,
            .gb_6c {
                line-height: 20px;
                font-size: 13px;
                font-weight: 400;
                color: rgba(0, 0, 0, .54)
            }
            
            .gb_0c .gb_6c .gb_7c {
                font-size: 14px
            }
            
            .gb_0c .gb_6c {
                padding-top: 12px
            }
            
            .gb_0c .gb_6c a {
                color: rgba(66, 133, 244, 1)
            }
            
            .gb_N .gb_Pf .gb_b::before {
                right: -498px;
                top: -35px
            }
            
            .gb_N.gb_9 .gb_Pf .gb_b::before {
                right: -498px;
                top: 0
            }
            
            .gb_N.gb_S .gb_Pf .gb_b::before {
                right: -428px;
                top: -35px
            }
            
            .gb_Qb .gb_tb {
                border: 0;
                border-right: 1px solid rgba(0, 0, 0, .2);
                border-top: 1px solid rgba(0, 0, 0, .2);
                height: 14px;
                width: 14px;
                -moz-transform: rotate(45deg);
                transform: rotate(45deg)
            }
            
            .gb_Qb .gb_sb {
                border: 0;
                border-right: 1px solid rgba(0, 0, 0, .2);
                border-top: 1px solid rgba(0, 0, 0, .2);
                height: 14px;
                width: 14px;
                -moz-transform: rotate(45deg);
                transform: rotate(45deg);
                border-color: #fff;
                background: #fff
            }
            
            .gb_N .gb_Eg::before {
                clip: rect(25px 235px 41px 219px);
                right: -197px;
                top: -3px
            }
            
            .gb_N .gb_ec.gb_Fg {
                position: absolute
            }
            
            .gb_N .gb_Fg::before {
                clip: rect(0 210px 16px 194px);
                right: -164px;
                top: 22px
            }
            
            .gb_N .gb_gb .gb_Eg::before {
                right: -189px
            }
            
            @media (min-resolution:1.25dppx),
            (-webkit-min-device-pixel-ratio:1.25),
            (min-device-pixel-ratio:1.25) {
                .gb_N .gb_Eg::before {
                    clip: rect(50px 470px 82px 438px)
                }
                .gb_N .gb_Fg::before {
                    clip: rect(0 420px 32px 388px)
                }
            }
            
            .gb_N .gb_ec,
            .gb_N .gbii,
            .gb_N .gbip {
                background-image: none;
                overflow: hidden;
                position: relative
            }
            
            .gb_N .gb_ec::before {
                content: url('//ssl.gstatic.com/gb/images/i1_1967ca6a.png');
                position: absolute
            }
            
            @media (min-resolution:1.25dppx),
            (-webkit-min-device-pixel-ratio:1.25),
            (min-device-pixel-ratio:1.25) {
                .gb_N .gb_ec::before {
                    content: url('//ssl.gstatic.com/gb/images/i2_2ec824b0.png');
                    -moz-transform: scale(.5);
                    transform: scale(.5);
                    -moz-transform-origin: 0 0;
                    transform-origin: 0 0
                }
            }
            
            .gb_Qb a:focus {
                outline: 1px dotted #fff!important
            }
            
            sentinel {}
        </style>
        <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
            (function() {
                var m = [];
                google.jsc && google.jsc.m(m);
            })();
        </script>
        <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
            (function() {
                var m = ['B/quwk', '[\x22https://www.google.com.eg/domainless/read?igu\\u003d1\x22,\x22ALAmJdGpxxeE3wpVeoGEIghPbcSs0JotKQ:1535492677384\x22,3]\n'];
                for (var a = window, b = m, c = window.W_jd || {}, d = 0; d < b.length; d += 2) c[b[d]] = JSON.parse(b[d + 1]);
                a.W_jd = c;
            })();
        </script>
        <script nonce="8U4UtVRo0abbvUMJ2pP0EA==">
            (function() {
                var h = {
                        gen204: "aft",
                        clearcut: 1
                    },
                    k = {
                        gen204: "iml",
                        clearcut: 8
                    },
                    l = {
                        gen204: "ol",
                        clearcut: 14
                    },
                    m = {
                        gen204: "prt",
                        clearcut: 16
                    };
                var n = function(a, c) {
                    if (!a) return 0;
                    if (!c) {
                        if ("none" == a.style.display) return 0;
                        if (document.defaultView && document.defaultView.getComputedStyle) {
                            var b = document.defaultView.getComputedStyle(a);
                            if (b && ("hidden" == b.visibility || "0px" == b.height || "0px" == b.width)) return 0
                        }
                    }
                    if (!a.getBoundingClientRect) return 3;
                    b = a.getBoundingClientRect();
                    var d = b.left + window.pageXOffset,
                        g = b.top + window.pageYOffset;
                    return !c && (0 >= b.height || 0 >= b.width) ? 0 : 0 > g + b.height || g > (window.innerHeight || document.documentElement.clientHeight) ? 1 : 0 > d + b.width || d > (window.innerWidth || document.documentElement.clientWidth) ? 2 : 3
                };
                var p, q, r, t, u = 0,
                    w = 0,
                    x = location;

                function y(a) {
                    p.removeEventListener("click", y);
                    a.stopPropagation && a.stopPropagation()
                }

                function z(a) {
                    ++r;
                    a = a || window.event;
                    google.timers.iml || google.startTick("iml");
                    var c = google.time();
                    google.tick("load", k, c);
                 s   a = a.target || a.srcElement;
                    a = a.id || a.src || a.name;
                    google.timers.iml.t[a] = c;
                    google.c.c.a && (google.timers.aft.t[a] = c)
                }
                debugger;
                var A = function() {
                        var a = google.timers.webaft,
                            c = a.t,
                            b = c.start;
                        a = {
                            wsrt: a.wsrt
                        };
                        var d = x.search,
                            g = d.indexOf("qsubts=");
                        var e = parseInt(d.substring(g + 7), 10);
                        d = d[g - 1];
                        (e = "?" != d && "&" != d || isNaN(e) ? 0 : e) && (a.gsasrt = Math.abs(b - e));
                        for (var v in c) e = c[v], "start" != v && e && b && (a[e.key.gen204] = e.ts - b);
                        var f;
                        c = "/gen_204?s=" + (google.c.c.s ? google.sn : "webaft") + "&t=aft&atyp=csi&ei=" + google.kEI + "&rt=";
                        b = "";
                        for (f in a) c += b + f + "." + a[f], b = ",";
                        google.cshid && (c += "&cshid=" + google.cshid);
                        (f = window.performance && window.performance.navigation) &&
                        2 == f.type && (c += "&bb=1");
                        f = c;
                        p ? (p.setAttribute("ping", f), p.click()) : navigator.sendBeacon ? navigator.sendBeacon(f, "") : google.log("", "", f)
                    },
                    B = function(a) {
                        u++;
                        google.rll(a, !1, function() {
                            ++w;
                            if (w == u) {
                                var a = google.time();
                                google.tick("webaft", h, a);
                                google.tick("load", h, a);
                                A()
                            }
                        })
                    };

                function C() {
                    var a = google.time();
                    google.tick("load", [m, k], a);
                    google.tick("webaft", m, a);
                    google.timers.load.t[h.clearcut] || (google.tick("load", h, a), google.tick("webaft", h, a))
                };
                (function() {
                    if (google.timers && google.timers.load.t) {
                        C();
                        (p = document.getElementById("csi-ping")) && p.addEventListener("click", y);
                        google.c.c.a && (google.startTick("aft"), google.afte = !1);
                        var a = document.getElementsByTagName("img");
                        q = a.length;
                        for (var c = r = 0, b = void 0; b = a[c]; ++c) {
                            var d = "string" != typeof b.src || !b.src,
                                g = !!b.getAttribute("data-bsrc"),
                                e = d || b.complete;
                            b.hasAttribute("data-noaft") ? e = !0 : google.c.c.d ? b.getAttribute("data-deferred") ? e = !1 : (d || "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ==
                                b.src) && b.setAttribute("lazy-loaded", "") : d && g && (e = !1);
                            d = n(b, g);
                            b.setAttribute("data-atf", d);
                            e ? ++r : (google.rll(b, !0, z), 3 == d && B(b))
                        }
                        t = q - r;
                        google.rll(window, !1, function() {
                            google.tick("load", l);
                            google.c.e("load", "imc", String(r));
                            google.c.e("load", "imn", String(q));
                            google.c.e("load", "imp", String(t));
                            google.c.u("pr")
                        });
                        u || A()
                    }
                    google.c.c.n && document.getElementsByClassName("native_iml_flag").length && google.c.b("ncr")
                })();
            }).call(this);
        </script>
        <div id="lfootercc"></div>
    </div>
</body>

</html>