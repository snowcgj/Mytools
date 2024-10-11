function A(e) {
            if (e.data)
                for (var n in e.data)
                    if (Object.hasOwnProperty.call(e.data, n)) {
                        var a = e.data[n];
                        e.data[n] = U(a)
                    }
            var t = Object.assign({}, {
                path: "",
                type: "GET",
                data: null,
                dataType: "common",
                headers: null,
                responseType: null,
                async: !0,
                success: function() {},
                error: function() {},
                progress: null
            }, e)
              , o = Date.parse(new Date);
            "GET" == t.type && (t.data = t.data ? t.data : {},
            t.data.nocache = o,
            d["a"].internationalization && (t.data.lan = "en" == localStorage.getItem("cgLangType") ? "2" : "1"));
            var c = Object.assign({}, t.data);
            try {
                delete c.gmtCreate,
                delete c.gmtModified,
                delete c.creator,
                delete c.modifier,
                delete c.id,
                delete c._index,
                delete c._rowKey
            } catch (le) {
                console.error(le)
            }
            var r = F(L.split("").reverse().join(""))
              , i = R(o, t.path, c)
              , l = {
                "app-key": r,
                timestamp: o,
                sign: i
            }
              , s = D("dataSix", !1, "");
            s && (l.cgAuthorization = s),
            l = Object.assign({}, l, t.headers),
            f({
                url: v + t.path,
                type: t.type.toLocaleUpperCase(),
                headers: l,
                async: t.async,
                data: c,
                dataType: t.dataType,
                responseType: t.responseType ? t.responseType : null,
                progress: t.progress || null,
                success: function(e, n) {
                    if ("/api/front/config" != t.path)
                        if (localStorage.getItem("labLearnSysConfig")) {
                            var a = D("forntHash", !0, "") && JSON.parse(D("forntHash", !0, ""))
                              , o = n.getResponseHeader("config-hash");
                            o && a != o && (P({
                                forntHash: _(o)
                            }),
                            I())
                        } else
                            I();
                    var c = e.code || 0;
                    "blob" === Y(e) ? t.success(e, n) : c == w.OK ? t.success(e.data) : c == w.LOGIN_EXPIRE ? M(e, (function() {
                        p("all"),
                        window.location.href = d["a"].platformPath + "/login"
                    }
                    )) : c == w.UNAUTHORIZED ? M(e, (function() {
                        t.error(e),
                        p("all"),
                        window.history.back()
                    }
                    )) : t.errorTipExecuteCallback ? t.error && t.error(e) : M(e, t.error, t.beforeError)
                },
                error: function(e) {
                    M(e, t.error)
                }
            })
        }