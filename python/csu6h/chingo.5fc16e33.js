(function (e) {
  function n(n) {
    for (
      var t, o, i = n[0], l = n[1], s = n[2], d = 0, u = [];
      d < i.length;
      d++
    )
      (o = i[d]),
        Object.prototype.hasOwnProperty.call(c, o) && c[o] && u.push(c[o][0]),
        (c[o] = 0);
    for (t in l) Object.prototype.hasOwnProperty.call(l, t) && (e[t] = l[t]);
    m && m(n);
    while (u.length) u.shift()();
    return r.push.apply(r, s || []), a();
  }
  function a() {
    for (var e, n = 0; n < r.length; n++) {
      for (var a = r[n], t = !0, o = 1; o < a.length; o++) {
        var i = a[o];
        0 !== c[i] && (t = !1);
      }
      t && (r.splice(n--, 1), (e = l((l.s = a[0]))));
    }
    return e;
  }
  var t = {},
    o = { chingo: 0 },
    c = { chingo: 0 },
    r = [];
  function i(e) {
    return (
      l.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-039b0063": "5a263c6c",
        "chunk-11a1305b": "71c3b53c",
        "chunk-134de5cb": "78e5a38e",
        "chunk-15c6fe46": "0e8c90e3",
        "chunk-15cc7ecc": "ec4a15f8",
        "chunk-1a974964": "33949008",
        "chunk-1dc7f317": "27478760",
        "chunk-20daec4c": "202f863d",
        "chunk-21ec998b": "e6fafa3e",
        "chunk-2957efad": "23c01433",
        "chunk-2a473b6e": "8df5b15e",
        "chunk-2eac6511": "373d5f44",
        "chunk-34964e56": "6516c721",
        "chunk-36e654a8": "735a7dff",
        "chunk-39c1dd5d": "5f45b67b",
        "chunk-3ec4e944": "68919d7c",
        "chunk-42bf97ee": "4a5c6358",
        "chunk-48ef7512": "06831881",
        "chunk-4c724f4f": "5a98175d",
        "chunk-57dfbfe6": "a2a1789c",
        "chunk-58e32a69": "2dd29d14",
        "chunk-5b07c6f5": "3d684b9f",
        "chunk-5ca576f4": "2f97bd13",
        "chunk-5ecbb614": "b2997ca7",
        "chunk-a01e1e9c": "19968719",
        "chunk-b5d6a758": "60ae4cff",
        "chunk-ee37f15a": "38243e6f",
        "chunk-389ccab7": "5b9950d7",
        "chunk-60d3018d": "d5122d5b",
        "chunk-305ff38c": "e1d23c70",
        "chunk-3224dae9": "9d55c34e",
        "chunk-3cb6d28a": "74a5e674",
        "chunk-63084044": "c7af3349",
        "chunk-855d079c": "b637486a",
        "chunk-7062d2d9": "76dadd16",
        "chunk-7436de25": "b997d8eb",
        "chunk-8cbf2aae": "2d808beb",
        "chunk-966538f2": "ba71bf09",
        "chunk-a43ccd80": "47930e2a",
        "chunk-069a043b": "b2ad9ff6",
        "chunk-2d20958c": "77cb5bbc",
        "chunk-aa0a111e": "44c4e4e2",
        "chunk-c754f348": "1154e0f3",
        "chunk-cab092e4": "7a4a41ad",
        "chunk-d0781d74": "ae6b79e3",
        "chunk-e285dc6c": "60d361a1",
        "chunk-e5f0e170": "36c5ce00",
        "chunk-fc2fb330": "18a48e06",
        "chunk-575889f2": "dcd0e69d",
        "chunk-2d0aad84": "d0bd5d3c",
        "chunk-2d0b1abd": "545d3b2c",
        "chunk-4d9d4d12": "bf883486",
        "chunk-6f0eeed5": "17f4fadf",
        "chunk-9a4af154": "4b07b706",
        "chunk-c646b166": "72255312",
        "chunk-2fe8b51e": "eb5c4f40",
        "chunk-fc579a90": "0bddb5fe",
        "chunk-08fada67": "a3bce7c0",
        "chunk-2ac8041a": "b1ec4c8f",
        "chunk-72210a87": "ba682464",
        "chunk-8686aa36": "cae4064e",
        "chunk-bab45b9a": "5c9236d6",
        "chunk-6c610dc0": "4172bdc8",
        "chunk-c7b36764": "e0364a92",
      }[e] +
      ".js"
    );
  }
  function l(n) {
    if (t[n]) return t[n].exports;
    var a = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
  }
  (l.e = function (e) {
    var n = [],
      a = {
        "chunk-039b0063": 1,
        "chunk-11a1305b": 1,
        "chunk-134de5cb": 1,
        "chunk-15c6fe46": 1,
        "chunk-15cc7ecc": 1,
        "chunk-1a974964": 1,
        "chunk-1dc7f317": 1,
        "chunk-20daec4c": 1,
        "chunk-21ec998b": 1,
        "chunk-2957efad": 1,
        "chunk-2a473b6e": 1,
        "chunk-2eac6511": 1,
        "chunk-34964e56": 1,
        "chunk-36e654a8": 1,
        "chunk-39c1dd5d": 1,
        "chunk-3ec4e944": 1,
        "chunk-42bf97ee": 1,
        "chunk-48ef7512": 1,
        "chunk-4c724f4f": 1,
        "chunk-57dfbfe6": 1,
        "chunk-58e32a69": 1,
        "chunk-5b07c6f5": 1,
        "chunk-5ca576f4": 1,
        "chunk-a01e1e9c": 1,
        "chunk-b5d6a758": 1,
        "chunk-ee37f15a": 1,
        "chunk-389ccab7": 1,
        "chunk-60d3018d": 1,
        "chunk-305ff38c": 1,
        "chunk-3224dae9": 1,
        "chunk-3cb6d28a": 1,
        "chunk-63084044": 1,
        "chunk-855d079c": 1,
        "chunk-7062d2d9": 1,
        "chunk-7436de25": 1,
        "chunk-8cbf2aae": 1,
        "chunk-966538f2": 1,
        "chunk-a43ccd80": 1,
        "chunk-069a043b": 1,
        "chunk-aa0a111e": 1,
        "chunk-c754f348": 1,
        "chunk-cab092e4": 1,
        "chunk-d0781d74": 1,
        "chunk-e285dc6c": 1,
        "chunk-e5f0e170": 1,
        "chunk-fc2fb330": 1,
        "chunk-575889f2": 1,
        "chunk-4d9d4d12": 1,
        "chunk-6f0eeed5": 1,
        "chunk-9a4af154": 1,
        "chunk-2fe8b51e": 1,
        "chunk-fc579a90": 1,
        "chunk-08fada67": 1,
        "chunk-2ac8041a": 1,
        "chunk-72210a87": 1,
        "chunk-8686aa36": 1,
        "chunk-bab45b9a": 1,
        "chunk-6c610dc0": 1,
        "chunk-c7b36764": 1,
      };
    o[e]
      ? n.push(o[e])
      : 0 !== o[e] &&
        a[e] &&
        n.push(
          (o[e] = new Promise(function (n, a) {
            for (
              var t =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-039b0063": "ea436126",
                    "chunk-11a1305b": "5c1942b1",
                    "chunk-134de5cb": "7ead5d7d",
                    "chunk-15c6fe46": "4a8cd8fa",
                    "chunk-15cc7ecc": "b188c7dd",
                    "chunk-1a974964": "b2fbdf53",
                    "chunk-1dc7f317": "57aa0e66",
                    "chunk-20daec4c": "63ad3dab",
                    "chunk-21ec998b": "29ba0b67",
                    "chunk-2957efad": "be650e00",
                    "chunk-2a473b6e": "1de88c3e",
                    "chunk-2eac6511": "7b3ea93c",
                    "chunk-34964e56": "fefa52a5",
                    "chunk-36e654a8": "84b8944f",
                    "chunk-39c1dd5d": "ba5422bc",
                    "chunk-3ec4e944": "b6baf006",
                    "chunk-42bf97ee": "7fdcc2f0",
                    "chunk-48ef7512": "713c643f",
                    "chunk-4c724f4f": "986d2371",
                    "chunk-57dfbfe6": "3f2baeab",
                    "chunk-58e32a69": "ccce0bb5",
                    "chunk-5b07c6f5": "7390f691",
                    "chunk-5ca576f4": "77ca8284",
                    "chunk-5ecbb614": "31d6cfe0",
                    "chunk-a01e1e9c": "a1ba9161",
                    "chunk-b5d6a758": "62d6ffcd",
                    "chunk-ee37f15a": "b8a42a43",
                    "chunk-389ccab7": "e986223c",
                    "chunk-60d3018d": "e935173d",
                    "chunk-305ff38c": "34fef047",
                    "chunk-3224dae9": "14d245cf",
                    "chunk-3cb6d28a": "17ef5b89",
                    "chunk-63084044": "0f987898",
                    "chunk-855d079c": "e2787bc3",
                    "chunk-7062d2d9": "1b111fa0",
                    "chunk-7436de25": "2b87299e",
                    "chunk-8cbf2aae": "a01ffd71",
                    "chunk-966538f2": "0dc26425",
                    "chunk-a43ccd80": "763dcded",
                    "chunk-069a043b": "ff8d65cc",
                    "chunk-2d20958c": "31d6cfe0",
                    "chunk-aa0a111e": "a6235ac6",
                    "chunk-c754f348": "d47451ec",
                    "chunk-cab092e4": "3495f61f",
                    "chunk-d0781d74": "ebc909e8",
                    "chunk-e285dc6c": "d4d76ce3",
                    "chunk-e5f0e170": "632ffd56",
                    "chunk-fc2fb330": "05488dff",
                    "chunk-575889f2": "a675d2a3",
                    "chunk-2d0aad84": "31d6cfe0",
                    "chunk-2d0b1abd": "31d6cfe0",
                    "chunk-4d9d4d12": "a96c2bcb",
                    "chunk-6f0eeed5": "a74a6921",
                    "chunk-9a4af154": "cb06499d",
                    "chunk-c646b166": "31d6cfe0",
                    "chunk-2fe8b51e": "deabc185",
                    "chunk-fc579a90": "cfe68bb2",
                    "chunk-08fada67": "776e22ea",
                    "chunk-2ac8041a": "4c1bb20f",
                    "chunk-72210a87": "de69f13b",
                    "chunk-8686aa36": "33203163",
                    "chunk-bab45b9a": "f85b2f57",
                    "chunk-6c610dc0": "515f5e85",
                    "chunk-c7b36764": "688d18a9",
                  }[e] +
                  ".css",
                c = l.p + t,
                r = document.getElementsByTagName("link"),
                i = 0;
              i < r.length;
              i++
            ) {
              var s = r[i],
                d = s.getAttribute("data-href") || s.getAttribute("href");
              if ("stylesheet" === s.rel && (d === t || d === c)) return n();
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
              (s = u[i]), (d = s.getAttribute("data-href"));
              if (d === t || d === c) return n();
            }
            var m = document.createElement("link");
            (m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = n),
              (m.onerror = function (n) {
                var t = (n && n.target && n.target.src) || c,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + t + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = t),
                  delete o[e],
                  m.parentNode.removeChild(m),
                  a(r);
              }),
              (m.href = c);
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(m);
          }).then(function () {
            o[e] = 0;
          }))
        );
    var t = c[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var r = new Promise(function (n, a) {
          t = c[e] = [n, a];
        });
        n.push((t[2] = r));
        var s,
          d = document.createElement("script");
        (d.charset = "utf-8"),
          (d.timeout = 120),
          l.nc && d.setAttribute("nonce", l.nc),
          (d.src = i(e));
        var u = new Error();
        s = function (n) {
          (d.onerror = d.onload = null), clearTimeout(m);
          var a = c[e];
          if (0 !== a) {
            if (a) {
              var t = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src;
              (u.message =
                "Loading chunk " + e + " failed.\n(" + t + ": " + o + ")"),
                (u.name = "ChunkLoadError"),
                (u.type = t),
                (u.request = o),
                a[1](u);
            }
            c[e] = void 0;
          }
        };
        var m = setTimeout(function () {
          s({ type: "timeout", target: d });
        }, 12e4);
        (d.onerror = d.onload = s), document.head.appendChild(d);
      }
    return Promise.all(n);
  }),
    (l.m = e),
    (l.c = t),
    (l.d = function (e, n, a) {
      l.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: a });
    }),
    (l.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, n) {
      if ((1 & n && (e = l(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (l.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var t in e)
          l.d(
            a,
            t,
            function (n) {
              return e[n];
            }.bind(null, t)
          );
      return a;
    }),
    (l.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return l.d(n, "a", n), n;
    }),
    (l.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (l.p = "/lab-study-front/"),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    d = s.push.bind(s);
  (s.push = n), (s = s.slice());
  for (var u = 0; u < s.length; u++) n(s[u]);
  var m = d;
  r.push([0, "chunk-vendors"]), a();
})({
  0: function (e, n, a) {
    e.exports = a("56d7");
  },
  1185: function (e, n, a) {},
  "27e3": function (e, n, a) {
    "use strict";
    var t = a("c952"),
      o = a.n(t);
    o.a;
  },
  "40c8": function (e, n, a) {
    "use strict";
    var t = a("7d4d"),
      o = a.n(t);
    o.a;
  },
  4678: function (e, n, a) {
    var t = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "69091",
      "./mk.js": "69091",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function o(e) {
      var n = c(e);
      return a(n);
    }
    function c(e) {
      if (!a.o(t, e)) {
        var n = new Error("Cannot find module '" + e + "'");
        throw ((n.code = "MODULE_NOT_FOUND"), n);
      }
      return t[e];
    }
    (o.keys = function () {
      return Object.keys(t);
    }),
      (o.resolve = c),
      (e.exports = o),
      (o.id = "4678");
  },
  "4dcb": function (e, n, a) {},
  5366: function (e, n, a) {},
  "56d7": function (e, n, a) {
    "use strict";
    a.r(n);
    a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("b0c0");
    var t = a("2b0e"),
      o = function () {
        var e = this,
          n = e.$createElement,
          a = e._self._c || n;
        return a(
          "div",
          { staticClass: "fullHeight" },
          [
            a(
              "div",
              {
                ref: "cardSpace",
                staticClass: "scroll fullHeight",
                staticStyle: { "overflow-y": "visible" },
              },
              [a("router-view")],
              1
            ),
            e.loading
              ? a("Spin", {
                  staticClass: "loading",
                  attrs: { size: "large", fix: "" },
                })
              : e._e(),
            a(
              "Modal",
              {
                attrs: {
                  title: e.modal.title,
                  closable: !1,
                  "mask-closable": !1,
                },
                on: { "on-ok": e.modal.onOk },
                model: {
                  value: e.modal.show,
                  callback: function (n) {
                    e.$set(e.modal, "show", n);
                  },
                  expression: "modal.show",
                },
              },
              [e._v(" " + e._s(e.modal.content) + " ")]
            ),
            a(
              "Modal",
              {
                attrs: { title: "选择角色", "footer-hide": "" },
                model: {
                  value: e.roleModal,
                  callback: function (n) {
                    e.roleModal = n;
                  },
                  expression: "roleModal",
                },
              },
              [
                a(
                  "div",
                  {
                    staticClass: "scroll",
                    staticStyle: { "max-height": "400px" },
                  },
                  [
                    a("div", { staticClass: "ivu-table-wrapper" }, [
                      a("div", { staticClass: "ivu-table ivu-table-border" }, [
                        a("div", { staticClass: "ivu-table-body" }, [
                          a(
                            "table",
                            {
                              attrs: {
                                border: "0",
                                cellpadding: "0",
                                cellspacing: "0",
                              },
                            },
                            [
                              a("thead", [
                                a("tr", [
                                  a("th", [
                                    a(
                                      "div",
                                      { staticClass: "ivu-table-cell" },
                                      [e._v("角色名称")]
                                    ),
                                  ]),
                                  a("th", { staticStyle: { width: "60px" } }, [
                                    a(
                                      "div",
                                      {
                                        staticClass:
                                          "ivu-table-cell text-center",
                                      },
                                      [e._v("操作")]
                                    ),
                                  ]),
                                ]),
                              ]),
                              a(
                                "tbody",
                                { staticClass: "ivu-table-tbody" },
                                e._l(e.roleList, function (n, t) {
                                  return a(
                                    "tr",
                                    {
                                      key: t,
                                      class: {
                                        "ivu-table-row-hover":
                                          e.userInfo.role == n.id,
                                      },
                                    },
                                    [
                                      a("td", [
                                        a(
                                          "div",
                                          { staticClass: "ivu-table-cell" },
                                          [e._v(e._s(n.name))]
                                        ),
                                      ]),
                                      a("td", [
                                        a(
                                          "div",
                                          {
                                            staticClass:
                                              "ivu-table-cell text-center",
                                          },
                                          [
                                            a(
                                              "list-button",
                                              {
                                                on: {
                                                  "on-click": function (a) {
                                                    return e.selectRoleFn(n);
                                                  },
                                                },
                                              },
                                              [e._v("选择")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            a("MyBackTop"),
          ],
          1
        );
      },
      c = [],
      r = function () {
        var e = this,
          n = e.$createElement,
          a = e._self._c || n;
        return a(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: e.backTop,
                expression: "backTop",
              },
            ],
            staticClass: "backup",
            on: { click: e.back },
          },
          [e._t("default", [e._m(0)])],
          2
        );
      },
      i = [
        function () {
          var e = this,
            n = e.$createElement,
            a = e._self._c || n;
          return a(
            "div",
            { staticStyle: { padding: "2px  10px", cursor: "pointer" } },
            [a("i", { staticClass: "ivu-icon ivu-icon-ios-arrow-up" })]
          );
        },
      ],
      l =
        (a("a9e3"),
        {
          props: {
            height: { type: Number, default: 400 },
            bottom: { type: Number, default: 30 },
            right: { type: Number, default: 30 },
            duration: { type: Number, default: 1e3 },
          },
          data: function () {
            var e = this,
              n = this.commonMethods.antiShake(function () {
                e.backTop = e.scrollElement.scrollTop >= e.height;
              }, 200);
            return { backTop: !1, scrollElement: window, handleScroll: n };
          },
          mounted: function () {
            (this.scrollElement =
              document.querySelector(".scroll.fullHeight") || window),
              this.scrollElement.addEventListener(
                "scroll",
                this.handleScroll,
                !1
              ),
              this.scrollElement.addEventListener(
                "resize",
                this.handleScroll,
                !1
              );
          },
          beforeDestroy: function () {
            this.scrollElement.removeEventListener(
              "scroll",
              this.handleScroll,
              !1
            ),
              this.scrollElement.removeEventListener(
                "resize",
                this.handleScroll,
                !1
              );
          },
          methods: {
            back: function () {
              var e = this.scrollElement.scrollTop || document.body.scrollTop;
              this.scrollTop(this.scrollElement, e, 0, this.duration),
                this.$emit("on-click");
            },
            scrollTop: function (e) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                a = arguments.length > 2 ? arguments[2] : void 0,
                t =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 500,
                o = arguments.length > 4 ? arguments[4] : void 0;
              window.requestAnimationFrame ||
                (window.requestAnimationFrame =
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (e) {
                    return window.setTimeout(e, 1e3 / 60);
                  });
              var c = Math.abs(n - a),
                r = Math.ceil((c / t) * 50);
              function i(n, a, t) {
                if (n !== a) {
                  var c = n + t > a ? a : n + t;
                  n > a && (c = n - t < a ? a : n - t),
                    e === window ? window.scrollTo(c, c) : (e.scrollTop = c),
                    window.requestAnimationFrame(function () {
                      return i(c, a, t);
                    });
                } else o && o();
              }
              i(n, a, r);
            },
          },
        }),
      s = l,
      d = (a("e7c2"), a("2877")),
      u = Object(d["a"])(s, r, i, !1, null, "1cef657d", null),
      m = u.exports,
      f = {
        name: "Main",
        components: { MyBackTop: m },
        data: function () {
          return { roleModal: !1, roleList: [] };
        },
        computed: {
          loading: function () {
            return this.$store.state.loading;
          },
          modal: function () {
            return this.$store.state.modal;
          },
        },
        watch: {
          $route: {
            handler: function () {
              this.$refs.cardSpace.scrollTop = 0;
            },
            deep: !0,
          },
        },
        methods: {
          toggleMenu: function () {
            this.$refs.leftMenu.$refs.leftMenu.toggleCollapse();
          },
          closeRoleModal: function () {
            this.roleModal = !1;
          },
          selectRoleFn: function (e) {
            var n = this;
            this.closeRoleModal(),
              e.id !== this.userInfo.role &&
                (this.$store.commit("setLoading", !0),
                this.commonMethods.emitAjax({
                  path: "/roleLogin",
                  type: "POST",
                  data: { roleid: e.id },
                  success: function (e) {
                    n.$store.commit("setLoading", !1),
                      n.commonMethods.loginSuccess(e);
                  },
                  error: function (e) {
                    n.$store.commit("setLoading", !1),
                      !e.message && n.$Message.error({ content: "登录失败" });
                  },
                }));
          },
        },
        mounted: function () {
          var e = this;
          (this.roleList = JSON.parse(
            this.commonMethods.getLocalData("dataOne", !0, "[]")
          )),
            this.$store.commit(
              "setLangType",
              localStorage.getItem("cgLangType")
            ),
            this.$store.commit("setAllModule", this.config.allModule),
            setTimeout(function () {
              var n = JSON.parse(
                  e.commonMethods.getLocalData("labLearnSysConfig", !0, "{}")
                ),
                a = n.system_modules;
              a && a.allModule && e.$store.commit("setAllModule", a.allModule),
                a &&
                  Array.isArray(a.moduleList) &&
                  e.$set(e.config, "moduleList", a.moduleList),
                localStorage.getItem("dataSix") &&
                  0 === e.$store.state.totalStudyLength &&
                  e.config.isNeedTotalStudyLength &&
                  e.commonMethods.emitAjax({
                    path: "/api/user_info",
                    data: { isNeedTotalStudyLength: 1 },
                    success: function (n) {
                      e.$store.commit(
                        "setTotalStudyLength",
                        n.totalStudyLength
                      );
                    },
                  });
            }, 3e3);
        },
      },
      g = f,
      h = (a("27e3"), Object(d["a"])(g, o, c, !1, null, "74dba23a", null)),
      p = h.exports,
      b = a("2909"),
      N =
        (a("d3b7"),
        a("3ca3"),
        a("ddb0"),
        a("99af"),
        a("ac1f"),
        a("466d"),
        a("5319"),
        a("e069")),
      y = a.n(N),
      k = a("8c4f"),
      v = a("f121"),
      S = a("6909"),
      E = [];
    try {
      E = a(
        !(function () {
          var e = new Error("Cannot find module './csu'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        })()
      ).default;
    } catch (pn) {}
    var T = [
      {
        path: "/",
        name: "Index",
        component: function () {
          return a.e("chunk-42bf97ee").then(a.bind(null, "6e78"));
        },
        redirect: { name: "Home" },
        children: [
          {
            path: "home",
            name: "Home",
            component: function () {
              return a.e("chunk-57dfbfe6").then(a.bind(null, "85bd"));
            },
            meta: {
              title: "首页",
              noCheckRule: !0,
              noLogin: !0,
              keepAlive: !0,
            },
          },
          {
            path: "notice-board/:type",
            name: "noticeBoard",
            component: function () {
              return a.e("chunk-58e32a69").then(a.bind(null, "eabc"));
            },
            meta: { title: "公告栏", noCheckRule: !0, noLogin: !0 },
          },
          {
            path: "article-details/:type/:id",
            name: "ArticleDetails",
            component: function () {
              return Promise.all([
                a.e("chunk-60d3018d"),
                a.e("chunk-305ff38c"),
              ]).then(a.bind(null, "3552"));
            },
            meta: { title: "详情", noCheckRule: !0, noLogin: !0, learn: !0 },
          },
          {
            path: "course",
            name: "course",
            component: function () {
              return a.e("chunk-36e654a8").then(a.bind(null, "7067a"));
            },
            meta: {
              title: "微课堂",
              keepAlive: !0,
              noCheckRule: !0,
              courseType: 1,
            },
          },
          {
            path: "course2",
            name: "course2",
            component: function () {
              return a.e("chunk-36e654a8").then(a.bind(null, "7067a"));
            },
            meta: {
              title: "实安课堂",
              keepAlive: !0,
              noCheckRule: !0,
              courseType: 2,
            },
          },
          {
            path: "course/list/:id",
            name: "courseList",
            component: function () {
              return a.e("chunk-11a1305b").then(a.bind(null, "0b7a"));
            },
            meta: { title: "课程目录", noCheckRule: !0 },
          },
          {
            path: "coursePlayer",
            name: "coursePlayer",
            component: function () {
              return Promise.all([
                a.e("chunk-60d3018d"),
                a.e("chunk-63084044"),
              ]).then(a.bind(null, "0997"));
            },
            meta: {
              title: "视频播放",
              noCheckRule: !0,
              fullScreen: !0,
              learn: !0,
            },
          },
          {
            path: "downFile",
            name: "DownFile",
            component: function () {
              return a.e("chunk-d0781d74").then(a.bind(null, "0728"));
            },
            meta: { title: "文件下载", noCheckRule: !0 },
          },
          {
            path: "security",
            name: "security",
            redirect: { name: "safetyknowledge", params: { type: 4 } },
            component: function () {
              return a.e("chunk-7436de25").then(a.bind(null, "787e"));
            },
            meta: { title: "安全知识库", noCheckRule: !0, noLogin: !0 },
            children: [
              {
                path: "safetyknowledge/:type",
                name: "safetyknowledge",
                component: function () {
                  return a.e("chunk-aa0a111e").then(a.bind(null, "9f269"));
                },
                meta: { title: "安全知识", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetyknowledgeList/:id/:type/:index",
                name: "safetyknowledgeList",
                component: function () {
                  return a.e("chunk-c754f348").then(a.bind(null, "8bda"));
                },
                meta: { title: "安全知识列表", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetyknowledgeDetial/:id/:type/:index",
                name: "safetyknowledgeDetial",
                component: function () {
                  return Promise.all([
                    a.e("chunk-60d3018d"),
                    a.e("chunk-305ff38c"),
                  ]).then(a.bind(null, "3552"));
                },
                meta: {
                  title: "安全知识详情",
                  noCheckRule: !0,
                  noLogin: !0,
                  learn: !0,
                },
              },
              {
                path: "safetyManualCard/:type",
                name: "safetyManualCard",
                component: function () {
                  return a.e("chunk-2a473b6e").then(a.bind(null, "4e9c"));
                },
                meta: { title: "安全手册列表", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetyPoster/:type",
                name: "safetyPoster",
                component: function () {
                  return a.e("chunk-134de5cb").then(a.bind(null, "6243"));
                },
                meta: { title: "安全海报", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetySigns/:type",
                name: "safetySigns",
                component: function () {
                  return a.e("chunk-1a974964").then(a.bind(null, "f6c4"));
                },
                meta: { title: "安全标识", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetySignsList/:id/:type/:index/:SignsTitle",
                name: "safetySignsList",
                component: function () {
                  return a.e("chunk-4c724f4f").then(a.bind(null, "d0ea"));
                },
                meta: { title: "安全标识列表", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetyVideoList/:type",
                name: "safetyVideoList",
                component: function () {
                  return a.e("chunk-1dc7f317").then(a.bind(null, "b410"));
                },
                meta: {
                  title: "安全视频",
                  noCheckRule: !0,
                  noLogin: !0,
                  keepAlive: !0,
                  videoType: 1,
                },
              },
              {
                path: "safetyVideoList2/:type",
                name: "safetyVideoList2",
                component: function () {
                  return a.e("chunk-1dc7f317").then(a.bind(null, "b410"));
                },
                meta: {
                  title: "学生作品",
                  noCheckRule: !0,
                  noLogin: !0,
                  keepAlive: !0,
                  videoType: 2,
                },
              },
              {
                path: "safetyVideo/:type/:id",
                name: "safetyVideo",
                component: function () {
                  return Promise.all([
                    a.e("chunk-60d3018d"),
                    a.e("chunk-3cb6d28a"),
                  ]).then(a.bind(null, "3537"));
                },
                meta: {
                  title: "安全视频",
                  noCheckRule: !0,
                  noLogin: !0,
                  learn: !0,
                },
              },
              {
                path: "safetyMsdsCard/:type",
                name: "safetyMsdsCard",
                component: function () {
                  return a.e("chunk-15cc7ecc").then(a.bind(null, "eff9"));
                },
                meta: { title: "SDS", noCheckRule: !0, noLogin: !0 },
              },
              {
                path: "safetyMsdsDetial/:type/:id",
                name: "safetyMsdsDetial",
                component: function () {
                  return a.e("chunk-2957efad").then(a.bind(null, "c03f"));
                },
                meta: {
                  title: "SDS查看",
                  noCheckRule: !0,
                  noLogin: !0,
                  learn: !0,
                },
              },
              {
                path: "safetyAccidentcase/:type",
                name: "safetyAccidentcase",
                component: function () {
                  return a.e("chunk-966538f2").then(a.bind(null, "2d3d"));
                },
                meta: { title: "事故案例列表", noCheckRule: !0, noLogin: !0 },
              },
            ],
          },
          {
            path: "KeyWordInfo",
            name: "KeyWordInfo",
            component: function () {
              return a.e("chunk-20daec4c").then(a.bind(null, "2ab0"));
            },
            meta: { title: "关联文章", noCheckRule: !0, noLogin: !0 },
          },
          {
            path: "questionBank",
            name: "QuestionBank",
            component: function () {
              return a.e("chunk-8cbf2aae").then(a.bind(null, "dd13"));
            },
            meta: { title: "题库练习", noCheckRule: !0 },
          },
          {
            path: "/questionBank/exercises/:id",
            name: "QuestionBankExercises",
            component: function () {
              return a.e("chunk-34964e56").then(a.bind(null, "e063"));
            },
            meta: { title: "在线练习", noCheckRule: !0, fullScreen: !0 },
          },
          {
            path: "person",
            name: "person",
            component: function () {
              return Promise.all([
                a.e("chunk-a43ccd80"),
                a.e("chunk-069a043b"),
              ]).then(a.bind(null, "c4fe"));
            },
            meta: { title: "个人中心", noCheckRule: !0, keepAlive: !0 },
          },
          {
            path: "/wrong/exercises",
            name: "wrongExercises",
            component: function () {
              return a.e("chunk-7062d2d9").then(a.bind(null, "4863"));
            },
            meta: { title: "错题练习", noCheckRule: !0, fullScreen: !0 },
          },
          {
            path: "examTask",
            component: function () {
              return Promise.all([
                a.e("chunk-5ecbb614"),
                a.e("chunk-a01e1e9c"),
                a.e("chunk-b5d6a758"),
              ]).then(a.bind(null, "cfac"));
            },
            redirect: { name: "examTask" },
            children: [
              {
                path: ":examId",
                name: "examTask",
                component: function () {
                  return a.e("chunk-48ef7512").then(a.bind(null, "4f5a"));
                },
                meta: { title: "考核内容", noCheckRule: !0, learn: !0 },
              },
              {
                path: ":examId/:tableCode/:type/:contentId",
                name: "examTaskDetail",
                component: function () {
                  return Promise.all([
                    a.e("chunk-60d3018d"),
                    a.e("chunk-855d079c"),
                  ]).then(a.bind(null, "26392"));
                },
                meta: { title: "学习详情", noCheckRule: !0, learn: !0 },
              },
            ],
          },
          {
            path: "routine-exam/:id",
            name: "RoutineExam",
            component: function () {
              return a.e("chunk-fc2fb330").then(a.bind(null, "2b73"));
            },
            meta: { title: "常规考试", noCheckRule: !0, fullScreen: !0 },
          },
          {
            path: "lab-examTask",
            component: function () {
              return Promise.all([
                a.e("chunk-5ecbb614"),
                a.e("chunk-ee37f15a"),
                a.e("chunk-389ccab7"),
              ]).then(a.bind(null, "a938"));
            },
            redirect: { name: "LabExamTask" },
            children: [
              {
                path: ":labId",
                name: "LabExamTask",
                component: function () {
                  return a.e("chunk-21ec998b").then(a.bind(null, "6533"));
                },
                meta: { title: "考核内容", noCheckRule: !0, learn: !0 },
              },
              {
                path: ":labId/:riskKey/:type/:id",
                name: "LabExamTaskDetail",
                component: function () {
                  return Promise.all([
                    a.e("chunk-60d3018d"),
                    a.e("chunk-3224dae9"),
                  ]).then(a.bind(null, "5f1f"));
                },
                meta: { title: "学习详情", noCheckRule: !0, learn: !0 },
              },
            ],
          },
          {
            path: "lab-exam/:labId",
            name: "GradingExam",
            component: function () {
              return a.e("chunk-5b07c6f5").then(a.bind(null, "2852"));
            },
            meta: { title: "分级分类考试", noCheckRule: !0, fullScreen: !0 },
          },
          {
            path: "trainTask",
            component: function () {
              return a.e("chunk-39c1dd5d").then(a.bind(null, "a4f8"));
            },
            redirect: { name: "TrainTask" },
            children: [
              {
                path: ":trainId",
                name: "TrainTask",
                component: function () {
                  return a.e("chunk-cab092e4").then(a.bind(null, "ba99"));
                },
                meta: { title: "学习内容", noCheckRule: !0, learn: !0 },
              },
              {
                path: ":trainId/:tableCode/:type/:contentId",
                name: "trainTaskDetail",
                component: function () {
                  return Promise.all([
                    a.e("chunk-60d3018d"),
                    a.e("chunk-855d079c"),
                  ]).then(a.bind(null, "26392"));
                },
                meta: { title: "学习详情", noCheckRule: !0, learn: !0 },
              },
            ],
          },
          {
            path: "offline-train-exam/:id/:examType",
            component: function () {
              return a.e("chunk-15c6fe46").then(a.bind(null, "5dba"));
            },
            name: "OfflineTrainExamEdit",
            meta: { title: "线下培训考试", fullScreen: !0 },
          },
          {
            path: "my-profile",
            component: function () {
              return a.e("chunk-5ca576f4").then(a.bind(null, "c072"));
            },
            name: "MyProfile",
            meta: { title: "我的档案", fullScreen: !0 },
          },
        ].concat(Object(b["a"])(E)),
      },
      {
        path: "*",
        name: "Error",
        component: function () {
          return a.e("chunk-039b0063").then(a.bind(null, "3a1b"));
        },
        meta: { title: "没有找到页面", noCheckRule: !0, noLogin: !0 },
      },
      {
        path: "/myInfo",
        name: "MyInfo",
        component: function () {
          return Promise.all([
            a.e("chunk-a43ccd80"),
            a.e("chunk-2d20958c"),
          ]).then(a.bind(null, "a953"));
        },
        meta: { title: "我的信息", noCheckRule: !0 },
      },
      {
        path: "/407",
        name: "noRule",
        component: function () {
          return a.e("chunk-3ec4e944").then(a.bind(null, "4e99"));
        },
        meta: { title: "权限限制", noCheckRule: !0, noLogin: !0 },
      },
      {
        path: "/hand-signature",
        name: "HandSignature",
        component: function () {
          return a.e("chunk-2eac6511").then(a.bind(null, "834b"));
        },
        meta: {
          title: "签名承诺",
          noCheckRule: !0,
          noLogin: !0,
          fullScreen: !0,
        },
      },
      {
        path: "/hand-signature-lae",
        name: "HandSignatureLae",
        component: function () {
          return a.e("chunk-e285dc6c").then(a.bind(null, "84a2"));
        },
        meta: {
          title: "签名承诺",
          noCheckRule: !0,
          noLogin: !0,
          fullScreen: !0,
        },
      },
      {
        path: "/hand-signature-train",
        name: "HandSignatureTrain",
        component: function () {
          return a.e("chunk-e5f0e170").then(a.bind(null, "04faf"));
        },
        meta: {
          title: "签名承诺",
          noCheckRule: !0,
          noLogin: !0,
          fullScreen: !0,
        },
      },
    ];
    t["default"].use(k["a"]);
    var L = [];
    var j = new k["a"]({
        mode: "history",
        base: v["a"].pathName,
        routes: [].concat(Object(b["a"])(T), L),
      }),
      O = JSON.parse(S["a"].getLocalData("labLearnSysConfig", !0, "{}")),
      w = O.system_name || v["a"].sysName;
    j.beforeEach(function (e, n, a) {
      if (
        ((document.title = e.meta.title + "-" + w),
        localStorage.getItem("dataSix") || e.meta.noLogin)
      )
        if (e.meta.noCheckRule || S["a"].hasHanderRule(e.name)) {
          if (1 == O.system_shutdown) {
            var t = new Date(O.shutdown_start_time).getTime(),
              o = new Date(O.shutdown_end_time).getTime(),
              c = new Date().getTime();
            if (c > t && c < o && e.meta.learn)
              return void y.a.Modal.warning({
                title: "系统提示",
                content:
                  "升级维护期间，关闭进入学习考试的通道，不会影响正在考试中的用户。由此给您带来的不便，敬请谅解!",
              });
          }
          y.a.LoadingBar.start(), a();
        } else j.push({ name: "noRule" });
      else window.location.href = v["a"].platformPath + "/login";
    }),
      j.afterEach(function () {
        y.a.LoadingBar.finish();
      }),
      j.onError(function (e) {
        var n = /Loading chunk (\d)+ failed/g,
          a = e.message.match(n),
          t = j.history.pending.fullPath;
        a && j.replace(t);
      });
    var C = j,
      _ = a("2f62"),
      x = a("d71a"),
      A = {
        loading: !1,
        menu_list: [],
        user_list: [],
        sysSetting: {},
        user_info: {},
        tags: [],
        modal: {
          show: !1,
          title: Object(x["a"])("系统提示", "code32"),
          content: "",
          onOk: function () {
            return !1;
          },
        },
        roleList: [],
        TabknonwId: null,
        isadmin: null,
        tabsign: [],
        tabknonw: [],
        showNotice: !1,
        safeKonw: [],
        isComplate: 0,
        isContinue: 1,
        practicePage: 0,
        pageConfig: {},
        statusList: [],
        activeId: 1,
        studentExam: {},
        studentExamConfig: {},
        currentLaeExam: {},
        subjectList: [],
        noAnserwer: 0,
        collegeList: [],
        collegeBaseOrgList: [],
        schoolList: [],
        laeRiskList: [],
        labLevelList: [],
        labClassList: [],
        buildingList: [],
        labDetail: { lab: { riskList: [] }, riskList: [] },
        examDetail: {},
        trainDetail: { train: {}, student: {} },
        langType: "cn",
        exam_requlation_classification: [],
        totalStudyLength: 0,
        allModule: {},
      };
    function I(e, n, a, t) {
      return new Promise(function (o, c) {
        var r = n || { page: -1, size: -1 };
        S["a"].emitAjax({
          path: a,
          data: r,
          success: function (n) {
            var a = [];
            (a = "number" === typeof n.totalElements ? n.content || [] : n),
              e.commit(t, a),
              o(n);
          },
          error: function (e) {
            c(e);
          },
        });
      });
    }
    var M = {
        getMenuList: function (e, n) {
          return I(e, n, "/api/right", "setMenuList");
        },
        getUserList: function (e, n) {
          return I(e, n, "/api/users", "setUserList");
        },
        getUserInfo: function (e, n) {
          return I(e, n, "/api/user_info", "setUserInfo");
        },
        getCodeTypeList: function (e, n) {
          var a = (n && n.data) || { page: -1, size: -1 };
          S["a"].emitAjax({
            path: "/api/codes/key/" + a.parentKey + "/codes",
            data: a,
            success: function (t) {
              e.commit("setCodeTypeList", { parentKey: a.parentKey, data: t }),
                n && n.success && n.success();
            },
            error: function () {
              n && n.error && n.error();
            },
          });
        },
        getSysSetting: function (e, n) {
          return I(e, n, "/api/syssets", "setSysSetting");
        },
        getSysRoleList: function (e, n) {
          return I(e, n, "/api/roles", "setSysRoleList");
        },
        getStudentExam: function (e, n) {
          var a = n.id,
            t = n.labId,
            o = n.examRequestId,
            c = "",
            r = { examRequestId: o };
          return (
            a && ((c = "/api/exam_center/do_exam"), (r.examId = a)),
            t && ((c = "/api/lae_exam_center/do_exam"), (r.labId = t)),
            I(e, r, c, "setStudentExam")
          );
        },
        getStudentExamConfig: function (e, n) {
          var a = n.id,
            t = n.labExam,
            o = "",
            c = {};
          return (
            a && ((o = "/api/exam_center/exam"), (c.examId = a)),
            t && (o = "/api/lae_exam/detail"),
            I(e, c, o, "setStudentExamConfig")
          );
        },
        getCurrentLaeExam: function (e) {
          return new Promise(function (n, a) {
            S["a"].emitAjax({
              path: "/api/lae_exam_center/current_exam",
              success: function (a) {
                a && e.commit("setCurrentLaeExam", a), n(a);
              },
              error: function (e) {
                a(e);
              },
            });
          });
        },
        getCollegeList: function (e, n) {
          return I(e, n, "/api/college", "setCollegeList");
        },
        getCollegeBaseOrgList: function (e) {
          return I(e, { isOrg: 1 }, "/api/college", "setCollegeBaseOrgList");
        },
        getSchoolList: function (e, n) {
          return I(e, n, "/api/codes/key/campus/codes", "setSchoolList");
        },
        getLaeRiskList: function (e, n) {
          return I(e, n, "/api/lae_risk", "setLaeRiskList");
        },
        getLabLevelList: function (e, n) {
          return I(e, n, "/api/codes/key/lab_level/codes", "setLabLevelList");
        },
        getLabClassList: function (e, n) {
          return I(e, n, "/api/codes/key/lab_class/codes", "setLabClassList");
        },
        getBuildingList: function (e, n) {
          return I(e, n, "/api/building", "setBuildingList");
        },
      },
      R = {
        setLoading: function (e, n) {
          e.loading = n;
        },
        setMenuList: function (e, n) {
          e.menu_list = n;
        },
        setUserList: function (e, n) {
          e.user_list = n;
        },
        setCodeTypeList: function (e, n) {
          -1 !== n.parentKey && (e[n.parentKey] = n.data);
        },
        setSysSetting: function (e, n) {
          e.sysSetting = n;
        },
        setModal: function (e, n) {
          e.modal = Object.assign({}, e.modal, n);
        },
        setTags: function (e, n) {
          e.tags = n;
        },
        setSysRoleList: function (e, n) {
          e.roleList = n;
        },
        setUserInfo: function (e, n) {
          e.user_info = n;
        },
        setIsAdmin: function (e, n) {
          e.isadmin = n;
        },
        setTabsign: function (e, n) {
          e.tabsign = n || [];
        },
        setTabknonw: function (e, n) {
          e.tabknonw = n || [];
        },
        setshowNotice: function (e, n) {
          e.showNotice = n || !1;
        },
        setsafeKonw: function (e, n) {
          e.safeKonw = n || [];
        },
        setisComplate: function (e, n) {
          e.isComplate = n || 0;
        },
        setTabknonwId: function (e, n) {
          e.TabknonwId = n || 0;
        },
        setisContinue: function (e, n) {
          e.isContinue = n || {};
        },
        setPracticePage: function (e, n) {
          e.practicePage = n || 0;
        },
        setPageConfig: function (e, n) {
          e.pageConfig = n || {};
        },
        setStatusList: function (e, n) {
          e.statusList = n || [];
        },
        setActiveId: function (e, n) {
          e.activeId = n || {};
        },
        setStudentExam: function (e, n) {
          e.studentExam = n;
        },
        setStudentExamConfig: function (e, n) {
          e.studentExamConfig = n;
        },
        setCurrentLaeExam: function (e, n) {
          e.currentLaeExam = n;
        },
        setSubjectList: function (e, n) {
          e.subjectList = n || [];
        },
        setnoAnserwer: function (e, n) {
          e.noAnserwer = n || 0;
        },
        setCollegeList: function (e, n) {
          e.collegeList = n || [];
        },
        setCollegeBaseOrgList: function (e, n) {
          e.collegeBaseOrgList = n || [];
        },
        setSchoolList: function (e, n) {
          e.schoolList = n || [];
        },
        setLaeRiskList: function (e, n) {
          e.laeRiskList = n || [];
        },
        setLabLevelList: function (e, n) {
          e.labLevelList = n || [];
        },
        setLabClassList: function (e, n) {
          e.labClassList = n || [];
        },
        setLabDetail: function (e, n) {
          e.labDetail = n || {};
        },
        setExamDetail: function (e, n) {
          e.examDetail = n || {};
        },
        setTrainDetail: function (e, n) {
          e.trainDetail = n || {};
        },
        setBuildingList: function (e, n) {
          e.buildingList = n || {};
        },
        setLangType: function (e, n) {
          e.langType = n || "cn";
        },
        setTotalStudyLength: function (e, n) {
          e.totalStudyLength = n || 0;
        },
        setAllModule: function (e, n) {
          e.allModule = n || {};
        },
      };
    t["default"].use(_["a"]);
    var P = new _["a"].Store({ state: A, mutations: R, actions: M }),
      D = P;
    a("c975"), a("7039"), a("fb6a"), a("caad"), a("7db0"), a("c740");
    function U() {
      var e = function () {
        return window.navigator.userAgent.indexOf("MSIE") >= 1;
      };
      e() &&
        window.HTMLElement &&
        -1 ===
          Object.getOwnPropertyNames(HTMLElement.prototype).indexOf(
            "dataset"
          ) &&
        Object.defineProperty(HTMLElement.prototype, "dataset", {
          get: function () {
            for (
              var e = this.attributes, n = [], a = [], t = {}, o = 0;
              o < e.length;
              o++
            )
              "data-" == e[o].nodeName.slice(0, 5) &&
                (n.push(e[o].nodeName.slice(5)), a.push(e[o].nodeValue));
            for (var c = 0; c < n.length; c++) t[n[c]] = a[c];
            return t;
          },
        }),
        Array.prototype.includes ||
          (Array.prototype.includes = function (e, n) {
            var a = this;
            if ("[object Array]" !== Object.prototype.toString.call(a))
              throw new Error("对象不是一个数组");
            var t = a.length,
              o = 0;
            if (void 0 !== n)
              if (n < 0) o = t + n;
              else if (n >= t) return !1;
            for (var c = o; c < a.length; c++) {
              var r = a[c];
              if (r === e) return !0;
            }
            return !1;
          });
      var n = function (e, n, a) {
        if ("[object Array]" !== Object.prototype.toString.call(e))
          throw new Error("对象不是一个数组");
        for (var t = 0; t < e.length; t++) {
          var o = e[t],
            c = !1;
          if (((c = a ? n.call(a, o, t, e) : n(o, t, e)), c))
            return { value: o, index: t };
        }
        return { value: void 0, index: -1 };
      };
      Array.prototype.find ||
        (Array.prototype.find = function (e, a) {
          return n(this, e, a).value;
        }),
        Array.prototype.findIndex ||
          (Array.prototype.findIndex = function (e, a) {
            return n(this, e, a).index;
          });
    }
    var B = { install: U },
      F =
        (a("4de4"),
        a("4d63"),
        a("25f0"),
        a("4160"),
        a("159b"),
        a("1276"),
        {
          name: "MyI18n",
          functional: !0,
          props: { tag: { type: String, default: "span" }, path: {} },
          render: function (e, n) {
            var a = n.data,
              t = n.children,
              o = n.parent,
              c = n.props,
              r = o.$c("", c.path);
            if (r) {
              var i = t.filter(H);
              if (0 == i.length) return e(c.tag, a, t);
              var l = new RegExp(/\{[a-z]\}/g),
                s = r.match(l) || [],
                d = [];
              s.forEach(function (e, n) {
                r.split(e)[0] && d.push(r.split(e)[0]),
                  d.push(e),
                  r.split(e)[1] &&
                    ((r = r.split(e)[1]), n == s.length - 1 && d.push(r));
              });
              for (
                var u = function (e) {
                    var n = i[e],
                      a = d.findIndex(function (e) {
                        return e == "{".concat(n.data.attrs.place, "}");
                      });
                    d[a] = n;
                  },
                  m = 0;
                m < i.length;
                m++
              )
                u(m);
              return e(c.tag, a, d);
            }
            return e(c.tag, a, t);
          },
        });
    function H(e) {
      return Boolean(e.data && e.data.attrs && e.data.attrs.place);
    }
    var z = a("c1df"),
      Y = a.n(z),
      q = a("5530"),
      $ = { YES: 1, NO: 0 },
      G = {};
    (G[$.YES] = "是"), (G[$.NO] = "否");
    var K = { COMMON_IS: $, COMMON_IS_TITLE: G },
      X = { NOTICE: 1, POLICY: 2, SCHOOL: 3 },
      V = {};
    (V[X.NOTICE] = Object(x["a"])("通知公告", "code6")),
      (V[X.POLICY] = Object(x["a"])("政策法规", "code7")),
      (V[X.SCHOOL] = "学校制度");
    var J = {
        KNOWLEDEG: 4,
        MANUAL: 5,
        SIGN: 6,
        VIDEO: 7,
        MSDS: 9,
        CASE: 8,
        POSTER: 13,
      },
      W = {};
    (W[J.KNOWLEDEG] = Object(x["a"])("安全知识", "code9")),
      (W[J.MANUAL] = Object(x["a"])("安全手册", "code10")),
      (W[J.SIGN] = Object(x["a"])("安全标识", "code11")),
      (W[J.VIDEO] = Object(x["a"])("安全视频", "code13")),
      (W[J.MSDS] = "SDS"),
      (W[J.CASE] = Object(x["a"])("事故案例", "code12")),
      (W[J.POSTER] = "安全海报");
    var Q = {
        NOTICE_BOARD_TYPE: X,
        NOTICE_BOARD_TYPE_TITLE: V,
        SAFE_KNOWLEDEG_TYPE: J,
        SAFE_KNOWLEDEG_TYPE_TITLE: W,
      },
      Z = {
        STUDY: 1,
        PROMISE: 2,
        RANKING: 3,
        SETPAPER: 4,
        EXAMING: 5,
        SUBMIT: 6,
      },
      ee = {};
    (ee[Z.STUDY] = "去学习"),
      (ee[Z.PROMISE] = "承诺"),
      (ee[Z.RANKING] = "排队中"),
      (ee[Z.SETPAPER] = "去组卷"),
      (ee[Z.EXAMING] = "考试中"),
      (ee[Z.SUBMIT] = "交卷");
    var ne = { STUDENT_EXAMING_STATUS: Z, STUDENT_EXAMING_STATUS_TITLE: ee },
      ae = { YES: 1, NO: 0 },
      te = {
        CLOSE: 0,
        BEFORE_START: 1,
        EXAMING: 2,
        WITHRELEASE: -1,
        EXAMING_END: 3,
      },
      oe = {};
    (oe[te.WITHRELEASE] = "待发布"),
      (oe[te.CLOSE] = "关闭"),
      (oe[te.BEFORE_START] = "未开始"),
      (oe[te.EXAMING] = "进行中"),
      (oe[te.EXAMING_END] = "已结束");
    var ce = {};
    (ce[te.CLOSE] = "default"),
      (ce[te.WITHRELEASE] = "success"),
      (ce[te.BEFORE_START] = "warning"),
      (ce[te.EXAMING] = "primary"),
      (ce[te.EXAMING_END] = "default");
    var re = { NORMAL: 1, MAJOR: 2 },
      ie = {};
    (ie[re.NORMAL] = "通用考试"), (ie[re.MAJOR] = "专业考试");
    var le = { NONE: 0, ONCE: 1, TERM: 2, YEAR: 3, ADD: 4, TIME: 7 },
      se = {};
    (se[le.NONE] = Object(x["a"])("无要求", "code120")),
      (se[le.ONCE] = Object(x["a"])("本次", "code121")),
      (se[le.TERM] = Object(x["a"])("本学期", "code122")),
      (se[le.YEAR] = Object(x["a"])("本学年", "code123")),
      (se[le.ADD] = Object(x["a"])("累计", "code124"));
    var de = {};
    (de[ae.YES] = "显示"), (de[ae.NO] = "不显示");
    var ue = {};
    (ue[ae.YES] = "是"), (ue[ae.NO] = "否");
    var me = {};
    (me[ae.YES] = "允许考生返回修改答案"), (me[ae.NO] = "答题后即不允许修改");
    var fe = {};
    (fe[ae.YES] = "开启"), (fe[ae.NO] = "关闭");
    var ge = -1,
      he = "所有学院",
      pe = { ORDER: 1, RANDOM: 2 },
      be = {};
    (be[pe.ORDER] = "顺序"), (be[pe.RANDOM] = "随机");
    var Ne = {};
    (Ne[ae.YES] = "审核"), (Ne[ae.NO] = "未审核");
    var ye = {
        shu_chemicals_exam: "涉及化学考核",
        shu_biological_safety_exam: "涉及生物考核",
        shu_general_exam: "通用考核",
      },
      ke = { PASS: 1, FAIL: -1, NOT: 0 },
      ve = {};
    (ve[ke.PASS] = Object(x["a"])("合格", "code257")),
      (ve[ke.FAIL] = Object(x["a"])("不合格", "code258")),
      (ve[ke.NOT] = "暂无");
    var Se = { NO_NEED_PROMISE: 0, END_PROMISE: 1, NOT_PROMISE: 2 },
      Ee = {};
    (Ee[Se.NO_NEED_PROMISE] = ""),
      (Ee[Se.END_PROMISE] = "已承诺"),
      (Ee[Se.NOT_PROMISE] = "未承诺");
    var Te = { school: 1, college: 2, laboratory: 3, others: 4 },
      Le = {};
    (Le[Te.school] = Object(x["a"])("校级", "code267")),
      (Le[Te.college] = Object(x["a"])("院级", "code268")),
      (Le[Te.laboratory] = Object(x["a"])("实验室级", "code269")),
      (Le[Te.others] = Object(x["a"])("其他", "code270"));
    var je = { no_exams: 0, pass: 1, fail: 2 },
      Oe = {};
    (Oe[je.no_exams] = Object(x["a"])("未考核", "code164")),
      (Oe[je.pass] = Object(x["a"])("已通过", "code162")),
      (Oe[je.fail] = Object(x["a"])("未通过", "code163"));
    var we = Object(q["a"])(
        Object(q["a"])({}, ne),
        {},
        {
          IS: ae,
          EXAM_LIST_STATUS: te,
          EXAM_LIST_STATUS_TITLE: oe,
          EXAM_LIST_STATUS_COLOR: ce,
          EXAM_SCOPE: re,
          EXAM_SCOPE_TITLE: ie,
          EXAM_NEED_LEARN_TYPE: le,
          EXAM_NEED_LEARN_TYPE_TITLE: se,
          EXAM_SHOW_RANKING: de,
          EXAM_ALLOW_MULTI_MISS_GET_SCORE: ue,
          EXAM_CAN_EDIT_RESULT: me,
          EXAM_ENABLE_MOCK: fe,
          TEXT_PAPER_SORT: pe,
          TEXT_PAPER_SORT_TITLE: be,
          TEST_PAPER_STATUS_TITLE: Ne,
          ALL_COLLEGE: ge,
          RELATION_KEY: ye,
          ALL_COLLEGE_TITLE: he,
          RESULT_STATUS: ke,
          RESULT_STATUS_TITLE: ve,
          PROMISE_STATUS: Se,
          PROMISE_STATUS_TITLE: Ee,
          LEVEL_TYPE: Te,
          LEVEL_TYPE_NAME: Le,
          EXAM_STATUS: je,
          EXAM_STATUS_NAME: Oe,
        }
      ),
      Ce = {},
      _e = {},
      xe = 1,
      Ae = 2,
      Ie = 3;
    (Ce.JUDGE = xe),
      (Ce.SINGLE = Ae),
      (Ce.MULTIPLE = Ie),
      (_e[xe] = Object(x["a"])("判断题", "code38")),
      (_e[Ae] = Object(x["a"])("单选题", "code36")),
      (_e[Ie] = Object(x["a"])("多选题", "code37"));
    var Me = { UNCHECK: 0, CHECKED: 1 },
      Re = { EASY: 1, MIDDLE: 2, HARD: 3 },
      Pe = {};
    (Pe[Re.EASY] = "易"), (Pe[Re.MIDDLE] = "中"), (Pe[Re.HARD] = "难");
    var De = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H" },
      Ue = {
        SUBJECT_TYPE: Ce,
        SUBJECT_TYPE_NAME: _e,
        CHECK_STATUS: Me,
        SUBJECT_LEVEL: Re,
        SUBJECT_LEVEL_TITLE: Pe,
        LETTER: De,
      },
      Be = Object(q["a"])(
        Object(q["a"])(Object(q["a"])(Object(q["a"])({}, K), Q), we),
        Ue
      ),
      Fe = function () {
        var e = this,
          n = e.$createElement,
          a = e._self._c || n;
        return !e.rule || e.commonMethods.hasHanderRule(e.rule)
          ? a(
              "div",
              {
                class: [
                  { "text-primary": e.usable },
                  { "text-default": !e.usable },
                  "inlineBlock btnMaring pointer",
                ],
                on: {
                  click: function (n) {
                    return n.stopPropagation(), e.handleClick(n);
                  },
                },
              },
              [e._t("default")],
              2
            )
          : e._e();
      },
      He = [],
      ze = {
        name: "listButton",
        props: {
          rule: { type: String, default: "" },
          usable: { type: Boolean, default: !0 },
          to: { type: [String, Object], default: "" },
        },
        data: function () {
          return {};
        },
        methods: {
          handleClick: function () {
            this.usable &&
              (this.to ? this.$router.push(this.to) : this.$emit("on-click"));
          },
        },
      },
      Ye = ze,
      qe = Object(d["a"])(Ye, Fe, He, !1, null, null, null),
      $e = qe.exports,
      Ge = function () {
        var e = this,
          n = e.$createElement,
          a = e._self._c || n;
        return a(
          "div",
          { staticClass: "ivu-upload" },
          [
            a("div", { staticClass: "ivu-upload ivu-upload-select" }, [
              a("label", [
                a("input", {
                  staticClass: "ivu-upload-input",
                  attrs: { type: "file", multiple: "" },
                  on: { change: e.uploadFile },
                }),
                a("div", { staticClass: "ivu-btn ivu-btn-default" }, [
                  a("i", {
                    staticClass: "ivu-icon ivu-icon-ios-cloud-upload-outline",
                  }),
                  a("span", [e._v(e._s(e.$c("文件上传", "code333")))]),
                ]),
              ]),
              a("span", { staticClass: "text-primary" }, [
                e._v(
                  e._s(e.$c("支持文件格式", "code334")) +
                    "：" +
                    e._s(e.fileFormat.join(","))
                ),
              ]),
            ]),
            "active" == e.status
              ? a("Progress", {
                  attrs: {
                    percent: e.percent,
                    "stroke-width": 2,
                    status: e.status,
                  },
                })
              : e._e(),
            "object" === e.commonMethods.getTypeOf(e.files)
              ? [
                  e.files.uid && e.preview
                    ? a("ul", { staticClass: "file-preview-box" }, [
                        a(
                          "li",
                          { staticClass: "file-preview" },
                          [
                            e.config.legalImgType.indexOf(e.files.ext) > -1
                              ? a("img", {
                                  attrs: { src: e.getFileUrl(e.files.uid) },
                                })
                              : a(
                                  "a",
                                  {
                                    attrs: {
                                      href: e.getFileUrl(e.files.uid),
                                      target: "_black",
                                    },
                                  },
                                  [
                                    a("Icon", {
                                      attrs: {
                                        type: "md-document",
                                        size: "50",
                                      },
                                    }),
                                    a("br"),
                                    e._v(" " + e._s(e.files.srcFileName) + " "),
                                  ],
                                  1
                                ),
                            a("Icon", {
                              staticClass: "close-btn",
                              attrs: { type: "ios-close" },
                              nativeOn: {
                                click: function (n) {
                                  return e.delFile(e.files);
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ])
                    : e._e(),
                ]
              : [
                  e.files.length > 0 && e.preview
                    ? a(
                        "ul",
                        { staticClass: "ivu-upload-list" },
                        e._l(e.files, function (n, t) {
                          return a(
                            "li",
                            {
                              key: t,
                              staticClass:
                                "ivu-upload-list-file ivu-upload-list-file-finish",
                            },
                            [
                              e.config.legalImgType.indexOf(e.files.ext) > -1
                                ? a("img", {
                                    attrs: { src: e.getFileUrl(n.uid) },
                                  })
                                : a(
                                    "a",
                                    { attrs: { href: e.getFileUrl(n.uid) } },
                                    [
                                      a("Icon", {
                                        attrs: {
                                          type: "md-document",
                                          size: "50",
                                        },
                                      }),
                                      a("br"),
                                      e._v(
                                        " " + e._s(n.id + "." + n.ext) + " "
                                      ),
                                    ],
                                    1
                                  ),
                              a("Icon", {
                                staticClass:
                                  "ivu-upload-list-remove text-error",
                                attrs: { type: "ios-close" },
                                nativeOn: {
                                  click: function (a) {
                                    return e.delFile(n, t);
                                  },
                                },
                              }),
                            ],
                            1
                          );
                        }),
                        0
                      )
                    : e._e(),
                ],
          ],
          2
        );
      },
      Ke = [],
      Xe =
        (a("a15b"),
        a("a434"),
        {
          name: "upload",
          props: {
            files: {
              type: [Array, Object],
              default: function () {
                return [];
              },
            },
            preview: { type: Boolean, default: !0 },
            delUrl: { type: String, default: "/api/file/_/" },
            fileType: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          data: function () {
            return { percent: 0, status: "normal", fileFormat: [] };
          },
          created: function () {
            this.fileFormat = this.fileType.length
              ? this.fileType
              : this.config.legalFile;
          },
          methods: {
            getFileUrl: function (e) {
              return this.config.serverUrl + "/api/sys/attachment/view/" + e;
            },
            getApiPath: function (e) {
              var n = "/api/sys/attachment/image";
              return (
                -1 != e.type.indexOf("application") &&
                  (n = "/api/sys/attachment/document"),
                n
              );
            },
            uploadFile: function (e) {
              for (
                var n = this, a = [], t = 0;
                t < e.target.files.length;
                t++
              ) {
                var o = e.target.files[t];
                if (!this.commonMethods.checkFileType(o.name, this.fileFormat))
                  return void this.$Modal.error({
                    title: this.$c("系统提示", "code32"),
                    content: "文件类型不合法，请上传类型为".concat(
                      this.fileFormat.join(","),
                      "的文件"
                    ),
                  });
                a.push(o);
              }
              if (a.length > 0) {
                var c = this.getApiPath(a[0]);
                (this.status = "active"),
                  (this.percent = 0),
                  this.commonMethods.emitAjax({
                    path: c,
                    type: "POST",
                    data: { file: a },
                    dataType: "file",
                    success: function (a) {
                      n.status = "success";
                      var t = a || [];
                      n.$emit(
                        "on-success",
                        "object" === n.commonMethods.getTypeOf(n.files)
                          ? t
                          : t[0]
                      ),
                        (e.target.value = ""),
                        n.fileType && n.$Message.success("文件导入成功");
                    },
                    error: function (a) {
                      (e.target.value = ""),
                        (n.status = "wrong"),
                        a.message || n.$Message.error("上传失败");
                    },
                    progress: function (e) {
                      e.lengthComputable &&
                        (n.percent = Math.round((100 * e.loaded) / e.total));
                    },
                  });
              }
            },
            delFile: function (e, n) {
              "number" == typeof n
                ? this.files.splice(n, 1)
                : this.$emit("on-success", {});
            },
          },
        }),
      Ve = Xe,
      Je = (a("40c8"), Object(d["a"])(Ve, Ge, Ke, !1, null, "e47f2728", null)),
      We = Je.exports,
      Qe = function () {
        var e = this,
          n = e.$createElement,
          a = e._self._c || n;
        return a(
          "div",
          { staticClass: "search clearfix" },
          [
            e._t("left"),
            a(
              "Dropdown",
              {
                attrs: {
                  trigger: "custom",
                  visible: e.searchShow,
                  placement: "bottom-start",
                },
              },
              [
                a(
                  "Button",
                  {
                    attrs: { icon: "md-search", type: "primary" },
                    nativeOn: {
                      click: function (n) {
                        return n.stopPropagation(), e.toggle(n);
                      },
                    },
                  },
                  [e._v(" 检索 ")]
                ),
                a(
                  "DropdownMenu",
                  {
                    staticClass: "searchBox",
                    attrs: { slot: "list" },
                    nativeOn: {
                      click: function (e) {
                        e.stopPropagation();
                      },
                    },
                    slot: "list",
                  },
                  [e._t("default")],
                  2
                ),
              ],
              1
            ),
            e._t("right"),
          ],
          2
        );
      },
      Ze = [],
      en = {
        name: "search",
        data: function () {
          return { searchShow: !1 };
        },
        methods: {
          openDrop: function () {
            this.searchShow = !0;
          },
          close: function () {
            this.searchShow = !1;
          },
          toggle: function () {
            this.searchShow = !this.searchShow;
          },
        },
        created: function () {
          document.addEventListener("click", this.close);
        },
        destroyed: function () {
          document.removeEventListener("click", this.close);
        },
      },
      nn = en,
      an = Object(d["a"])(nn, Qe, Ze, !1, null, null, null),
      tn = an.exports,
      on = { ListButton: $e, "up-load": We, Search: tn };
    function cn(e) {
      for (var n in on)
        Object.hasOwnProperty.call(on, n) && e.component(n, on[n]);
    }
    var rn = { install: cn };
    a("1185"), a("4dcb"), a("dfa4");
    if (!document.getElementById("aliplayer_js")) {
      var ln = "https://g.alicdn.com/de/prismplayer/2.8.2/aliplayer-min.js";
      v["a"].localAliplayerJs &&
        (ln = "/lab-study-front/static/aliplayer/aliplayer-min.js"),
        sn(
          { src: ln, charset: "utf-8", type: "text/javascript" },
          "script",
          "aliplayer_js"
        );
    }
    function sn(e, n, a) {
      if (e && "{}" != JSON.stringify(e) && n && a) {
        var t = document.createElement(n);
        for (var o in (t.setAttribute("id", a), e)) t[o] = e[o];
        document.head.appendChild(t);
      }
    }
    var dn = null,
      un = function (e, n) {
        if (!e) return {};
        var a = "".concat(e, "?timestamp=").concat(new Date().getTime()),
          t = null;
        window.XMLHttpRequest
          ? (t = new XMLHttpRequest())
          : window.ActiveXObject &&
            (t = new window.ActiveXObject("Microsoft.XMLHTTP")),
          (t.onreadystatechange = function () {
            if (4 === t.readyState && 200 === t.status) {
              var e = t.responseText || "";
              n && "function" == typeof n && n(e);
            }
          }),
          t.open("get", a),
          t.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
          ),
          t.setRequestHeader(
            "Cache-Control",
            "no-cache, no-store, must-revalidate"
          ),
          t.setRequestHeader("Pragma", "no-cache"),
          t.setRequestHeader("Expires", "0"),
          t.send();
      };
    function mn() {
      un(v["a"].pathName + "/static/v_e_r.json", function (e) {
        var n = localStorage.getItem("learn_v_e_r");
        n
          ? n &&
            e &&
            n != e &&
            (clearInterval(dn),
            setTimeout(function () {
              y.a.Notice.open({
                duration: 0,
                title: "系统提示",
                render: function (n) {
                  return [
                    n("b", { style: { color: "red", lineHeight: 1.5 } }, [
                      "已检测到新版本更新，建议您立即刷新页面获取最新内容！",
                    ]),
                    n("div", { style: { textAlign: "right" } }, [
                      n(
                        "Button",
                        {
                          on: {
                            click: function () {
                              localStorage.setItem("learn_v_e_r", e),
                                location.reload(!0);
                            },
                          },
                        },
                        ["立即刷新"]
                      ),
                    ]),
                  ];
                },
                onClose: function () {
                  clearInterval(dn);
                },
              });
            }, 300))
          : localStorage.setItem("learn_v_e_r", e);
      });
    }
    mn(),
      (dn = setInterval(function () {
        mn();
      }, 1e5));
    var fn = a("b2d8"),
      gn = a.n(fn);
    a("64e1");
    if (
      ((t["default"].config.productionTip = !1),
      v["a"].internationalization &&
        "en" === localStorage.getItem("cgLangType"))
    ) {
      var hn = a("69c5").default;
      y.a.locale(hn);
    }
    t["default"].use(B),
      t["default"].use(y.a),
      t["default"].use(rn),
      t["default"].use(gn.a),
      t["default"].component(F.name, F),
      (t["default"].prototype.$c = x["b"].convert),
      (t["default"].prototype.config = v["a"]),
      (t["default"].prototype.commonMethods = S["a"]),
      (t["default"].prototype.userInfo = JSON.parse(
        S["a"].getLocalData("dataSeven", !0, "{}")
      )),
      (t["default"].prototype.constObject = Be),
      (t["default"].prototype.moment = Y.a),
      y.a.LoadingBar.config({
        color: "#f90",
        failedColor: "#ed3f14",
        height: 4,
      }),
      y.a.Message.config({ top: window.innerHeight / 2 - 20 }),
      (t["default"].prototype.$eventBus = new t["default"]({
        el: "#chingo",
        router: C,
        render: function (e) {
          return e(p);
        },
        store: D,
      }));
  },
  6909: function (e, n, a) {
    "use strict";
    var t = a("1da1"),
      o = a("53ca"),
      c =
        (a("96cf"),
        a("a15b"),
        a("c975"),
        a("d3b7"),
        a("25f0"),
        a("26e9"),
        a("ac1f"),
        a("1276"),
        a("4e82"),
        a("b64b"),
        a("5319"),
        a("3ca3"),
        a("ddb0"),
        a("2b3d"),
        a("9861"),
        a("466d"),
        a("b0c0"),
        a("4160"),
        a("159b"),
        a("4d63"),
        a("acd8"),
        a("e25e"),
        a("99af"),
        a("fb6a"),
        a("2ca0"),
        a("4d90"),
        a("ace4"),
        a("5cc6"),
        a("9a8c"),
        a("a975"),
        a("735e"),
        a("c1ac"),
        a("d139"),
        a("3a7b"),
        a("d5d6"),
        a("82f8"),
        a("e91f"),
        a("60bd"),
        a("5f96"),
        a("3280"),
        a("3fcc"),
        a("ca91"),
        a("25a1"),
        a("cd26"),
        a("3c5d"),
        a("2954"),
        a("649e"),
        a("219c"),
        a("170b"),
        a("b39a"),
        a("72f7"),
        a("13d5"),
        a("2b0e")),
      r = a("e069"),
      i = a.n(r),
      l = a("3452"),
      s = a.n(l),
      d = a("f121"),
      u = a("d71a"),
      m = a("7d3a"),
      f = m.$http,
      g = a("7e3c");
    try {
      var h = g(d["a"], D),
        p = h.delLocalData,
        b = h.logoutSys;
    } catch (le) {
      throw new Error(
        "Error occurred while trying to load the API: ".concat(le)
      );
    }
    c["default"].use(i.a);
    var N = d["a"].a,
      y = d["a"].s,
      k = d["a"].t,
      v = d["a"].serverUrl,
      S = d["a"].pathName,
      E = d["a"].closeCheck,
      T = F(y.join("")),
      L = N.join(""),
      j = d["a"].AES_KEY_PHP.join(""),
      O = d["a"].AES_IV_PHP.join("");
    (j = d["a"].AES_KEY_JAVA.join("")), (O = d["a"].AES_IV_JAVA.join(""));
    var w = {
        OK: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        REQUEST_TIMEOUT: 408,
        INTERNAL_SERVER_ERROR: 500,
        LOGIN_EXPIRE: 101,
      },
      C = JSON.parse(D("copy_dataTwo", !0, "[]"));
    function _(e) {
      if (["undefined", "null"].indexOf(Y(e)) >= 0) return !1;
      try {
        var n = s.a.enc.Utf8.parse(j),
          a = s.a.enc.Utf8.parse(O),
          t = "object" === Object(o["a"])(e) ? JSON.stringify(e) : e.toString(),
          c = s.a.enc.Utf8.parse(t),
          r = s.a.AES.encrypt(c, n, {
            iv: a,
            mode: s.a.mode.ECB,
            padding: s.a.pad.Pkcs7,
          }).ciphertext.toString();
        return s.a.enc.Base64.stringify(s.a.enc.Hex.parse(r));
      } catch (le) {
        return (
          console.log(le),
          i.a.Modal.error({
            title: "系统提示",
            content: "数据加密失败请重新登录",
            onOk: function () {
              p("all"), (window.location.href = d["a"].pathName + "/login");
            },
          }),
          ""
        );
      }
    }
    function x(e) {
      if (["undefined", "null"].indexOf(Y(e)) >= 0) return !1;
      try {
        var n = s.a.enc.Utf8.parse(j),
          a = s.a.enc.Utf8.parse(O);
        return s.a.AES.decrypt(e, n, {
          iv: a,
          mode: s.a.mode.ECB,
          padding: s.a.pad.Pkcs7,
        }).toString(s.a.enc.Utf8);
      } catch (le) {
        return (
          i.a.Modal.error({
            title: "系统提示",
            content: "数据解密失败请重新登录",
            onOk: function () {
              p("all"), (window.location.href = S + "/login");
            },
          }),
          ""
        );
      }
    }
    function A(e) {
      if (e.data)
        for (var n in e.data)
          if (Object.hasOwnProperty.call(e.data, n)) {
            var a = e.data[n];
            e.data[n] = U(a);
          }
      var t = Object.assign(
          {},
          {
            path: "",
            type: "GET",
            data: null,
            dataType: "common",
            headers: null,
            responseType: null,
            async: !0,
            success: function () {},
            error: function () {},
            progress: null,
          },
          e
        ),
        o = Date.parse(new Date());
      "GET" == t.type &&
        ((t.data = t.data ? t.data : {}),
        (t.data.nocache = o),
        d["a"].internationalization &&
          (t.data.lan =
            "en" == localStorage.getItem("cgLangType") ? "2" : "1"));
      var c = Object.assign({}, t.data);
      try {
        delete c.gmtCreate,
          delete c.gmtModified,
          delete c.creator,
          delete c.modifier,
          delete c.id,
          delete c._index,
          delete c._rowKey;
      } catch (le) {
        console.error(le);
      }
      var r = F(L.split("").reverse().join("")),
        i = R(o, t.path, c),
        l = { "app-key": r, timestamp: o, sign: i },
        s = D("dataSix", !1, "");
      s && (l.cgAuthorization = s),
        (l = Object.assign({}, l, t.headers)),
        f({
          url: v + t.path,
          type: t.type.toLocaleUpperCase(),
          headers: l,
          async: t.async,
          data: c,
          dataType: t.dataType,
          responseType: t.responseType ? t.responseType : null,
          progress: t.progress || null,
          success: function (e, n) {
            if ("/api/front/config" != t.path)
              if (localStorage.getItem("labLearnSysConfig")) {
                var a =
                    D("forntHash", !0, "") &&
                    JSON.parse(D("forntHash", !0, "")),
                  o = n.getResponseHeader("config-hash");
                o && a != o && (P({ forntHash: _(o) }), I());
              } else I();
            var c = e.code || 0;
            "blob" === Y(e)
              ? t.success(e, n)
              : c == w.OK
              ? t.success(e.data)
              : c == w.LOGIN_EXPIRE
              ? M(e, function () {
                  p("all"),
                    (window.location.href = d["a"].platformPath + "/login");
                })
              : c == w.UNAUTHORIZED
              ? M(e, function () {
                  t.error(e), p("all"), window.history.back();
                })
              : t.errorTipExecuteCallback
              ? t.error && t.error(e)
              : M(e, t.error, t.beforeError);
          },
          error: function (e) {
            M(e, t.error);
          },
        });
    }
    function I() {
      A({
        path: "/api/front/config",
        errorTipExecuteCallback: !0,
        success: function (e) {
          console.log("更新"),
            P({ labLearnSysConfig: _(e.config) }),
            location.reload();
        },
        error: function (e) {
          alert(e.message || "系统错误");
        },
      });
    }
    function M(e, n, a) {
      a
        ? (n && n(e),
          i.a.Modal.error({
            title: Object(u["a"])("系统提示", "code32"),
            content: e.message,
            onOk: function () {
              n && n(e);
            },
          }))
        : e.message
        ? i.a.Modal.error({
            title: Object(u["a"])("系统提示", "code32"),
            content: e.message,
            onOk: function () {
              n && n(e);
            },
          })
        : n && n(e);
    }
    function R(e, n, a) {
      var t = T + n;
      if ("object" == Object(o["a"])(a))
        for (var c = Object.keys(a).sort(), r = 0, i = c.length; r < i; r++) {
          var l = c[r],
            d = a[l];
          "object" != Object(o["a"])(d) &&
            "" !== d &&
            null !== d &&
            void 0 !== d &&
            (t += l + d);
        }
      return (t += e + " " + T), s.a.MD5(t).toString();
    }
    function P(e) {
      for (var n in e)
        if (Object.hasOwnProperty.call(e, n)) {
          var a = e[n];
          localStorage.setItem(n, a);
        }
    }
    function D(e, n, a) {
      var t = localStorage.getItem(e);
      return t ? (n ? x(t) || a : t) : a;
    }
    function U(e) {
      return "string" == typeof e ? e.replace(/(^\s*)|(\s*$)/g, "") : e;
    }
    function B(e) {
      return s.a.enc.Base64.stringify(s.a.enc.Utf8.parse(e));
    }
    function F(e) {
      return s.a.enc.Base64.parse(e).toString(s.a.enc.Utf8);
    }
    function H(e, n) {
      if (window.navigator.msSaveBlob) window.navigator.msSaveBlob(e, n);
      else {
        var a = window.URL.createObjectURL(e),
          t = document.getElementsByTagName("body")[0],
          o = document.createElement("a");
        (o.href = a),
          (o.download = n),
          t.appendChild(o),
          o.click(),
          t.removeChild(o),
          window.URL.revokeObjectURL(a);
      }
    }
    function z(e, n, a) {
      for (var t = 0; t < e.length; t++) {
        var o = e[t];
        if (a && o[a] == n) return t;
        if (!a && o == n) return t;
      }
      return -1;
    }
    function Y(e) {
      var n = Object.prototype.toString.call(e).match(/\[object (.+)\]/);
      return n[1].toLocaleLowerCase();
    }
    function q(e, n) {
      P({
        copy_dataTwo: _(e.routeNameList),
        copy_dataFive: _(e.menus),
        copy_dataSix: e.token.access_token,
      }),
        localStorage.removeItem("tags"),
        n ? n(e) : (window.location.href = S + "/");
    }
    function $(e, n) {
      var a = Date.parse(new Date());
      P({
        dataTwo: _(e.routeNameList),
        copy_dataTwo: _(e.routeNameList),
        dataThree: _(
          e.userInfo || {
            name: e.name,
            role: e.role,
            gender: e.gender,
            username: e.username,
          }
        ),
        dataFour: _(e.ruleList),
        dataFive: _(e.menus),
        dataSix: e.token.access_token,
        dataNine: a + k,
      }),
        localStorage.removeItem("tags"),
        n ? n(e) : (window.location.href = S + "/");
    }
    function G() {
      var e = D("dataSix", !1, null),
        n = "{}" != D("dataSeven", !0, "{}");
      return e && n;
    }
    function K(e, n) {
      return (
        n && (C = JSON.parse(D("copy_dataTwo", !0, "[]"))),
        E || C.indexOf(e) >= 0
      );
    }
    function X(e) {
      return /^1[345789]\d{9}$/.test(e);
    }
    function V(e) {
      return /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(e);
    }
    function J(e, n) {
      var a = this,
        t = null;
      return function () {
        var o = arguments;
        clearTimeout(t),
          (t = setTimeout(function () {
            e.apply(a, o);
          }, n || 400));
      };
    }
    function W(e, n) {
      return (
        Object.keys(n).forEach(function (a) {
          var t = n[a];
          Array.isArray(t)
            ? t.length && (e[a] = t)
            : (t || 0 === t) && (e[a] = t);
        }),
        e
      );
    }
    function Q() {
      var e = navigator.userAgent,
        n = e.indexOf("compatible") > -1 && e.indexOf("MSIE") > -1,
        a = e.indexOf("Edge") > -1 && !n,
        t = e.indexOf("Trident") > -1 && e.indexOf("rv:11.0") > -1;
      if (n) {
        var o = new RegExp("MSIE (\\d+\\.\\d+);");
        o.test(e);
        var c = parseFloat(RegExp["$1"]);
        return 7 == c ? 7 : 8 == c ? 8 : 9 == c ? 9 : 10 == c ? 10 : 6;
      }
      return a ? "edge" : t ? 11 : -1;
    }
    function Z() {
      var e = window.navigator.userAgent,
        n = function (n) {
          return e.indexOf(n) >= 0;
        },
        a = (function () {
          return "ActiveXObject" in window;
        })();
      return n("MSIE") || a
        ? "ie"
        : n("Firefox") && !a
        ? "Firefox"
        : n("Chrome") && !a
        ? e.indexOf("Edge") > -1
          ? "Edge"
          : "Chrome"
        : n("Opera") && !a
        ? "Opera"
        : n("Safari") && !a
        ? "Safari"
        : void 0;
    }
    function ee(e) {
      return d["a"].serverUrl + "/api/sys/attachment/view/" + e;
    }
    function ne(e) {
      var n = s.a.enc.Utf8.parse(e),
        a = s.a.enc.Base64.stringify(n);
      return a;
    }
    function ae(e, n) {
      var a = n || d["a"].legalFile;
      if (e) {
        var t = e.toLocaleLowerCase(),
          o = t.split(".");
        return -1 !== a.indexOf(o[o.length - 1]);
      }
      return !1;
    }
    function te(e) {
      if (!e) return "0" + Object(u["a"])("秒", "code374");
      var n = parseInt(e % 60),
        a = parseInt((e / 60) % 60),
        t = parseInt(e / 60 / 60),
        o = "";
      return (
        t && (o += "".concat(t, " ").concat(Object(u["a"])("时", "code375"))),
        a && (o += " ".concat(a, " ").concat(Object(u["a"])("分", "code254"))),
        n && (o += " ".concat(n, " ").concat(Object(u["a"])("秒", "code374"))),
        o || "-"
      );
    }
    function oe(e) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = Object(t["a"])(
          regeneratorRuntime.mark(function e(n) {
            return regeneratorRuntime.wrap(function (e) {
              while (1)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e) {
                        var a = new FileReader(),
                          t = n.slice(0, 4);
                        a.readAsArrayBuffer(t),
                          (a.onload = function () {
                            var n = new Uint8Array(a.result),
                              t = n.reduce(function (e, n) {
                                return e + n.toString(16).padStart(2, "0");
                              }, "");
                            t.startsWith("ffd8") ||
                            t.startsWith("89504e47") ||
                            t.startsWith("474946")
                              ? (console.log("It is an image file"), e(!0))
                              : (console.log("It is not an image file"), e(!1));
                          });
                      })
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        ce.apply(this, arguments)
      );
    }
    function re(e) {
      var n = new FileReader(),
        a = e.slice(0, 4);
      n.readAsText(a),
        (n.onload = function () {
          n.result.startsWith("%PDF")
            ? console.log("It is a PDF file")
            : console.log("It is not a PDF file");
        });
    }
    function ie(e) {
      if (!e) return "00:00";
      var n = Math.floor(e / 3600)
          .toString()
          .padStart(2, "0"),
        a = Math.floor((e % 3600) / 60)
          .toString()
          .padStart(2, "0"),
        t = (e % 60).toString().padStart(2, "0");
      return "00" == n ? a + ":" + t : n + ":" + a + ":" + t;
    }
    n["a"] = {
      emitAjax: A,
      setLocalData: P,
      getLocalData: D,
      delLocalData: p,
      formatData: U,
      setSign: R,
      BACKloginSuccess: q,
      keySetPassword: _,
      keyGetPassword: x,
      downFile: H,
      arrayIndexOf: z,
      getTypeOf: Y,
      loginSuccess: $,
      getSysConfig: I,
      setBase64: B,
      getBase64: F,
      hasLogin: G,
      hasHanderRule: K,
      MD5: s.a.MD5,
      isPhone: X,
      isMail: V,
      antiShake: J,
      connectObject: W,
      concatObject: W,
      IEVersion: Q,
      getExplorer: Z,
      getFileSrc: ee,
      text2Base64: ne,
      checkFileType: ae,
      secondsFormatToMinutes: te,
      logoutSys: b,
      isImage: oe,
      isPDF: re,
      secondsToTime: ie,
    };
  },
  "7d3a": function (e, n, a) {
    var t = a("7037");
    a("ac1f"),
      a("5319"),
      (function (e, n) {
        e.$http = n();
      })(this, function () {
        function e(n, a) {
          var o = {};
          for (var c in n)
            if (Object.hasOwnProperty.call(n, c)) {
              var r = n[c];
              "object" == t(r)
                ? (o[c] = JSON.parse(JSON.stringify(r)))
                : (o[c] = r);
            }
          for (var i in a)
            if (Object.hasOwnProperty.call(a, i)) {
              var l = a[i];
              "object" == t(l)
                ? o[i]
                  ? (o[i] = e(o[i], l))
                  : (o[i] = JSON.parse(JSON.stringify(l)))
                : (o[i] = l);
            }
          return o;
        }
        function n(e) {
          return "string" == typeof e ? e.replace(/(^\s*)|(\s*$)/g, "") : e;
        }
        function a(e) {
          var a = "";
          for (var o in e)
            if (Object.hasOwnProperty.call(e, o)) {
              var c = e[o];
              null !== c &&
                void 0 !== c &&
                ("object" == t(c)
                  ? (a += o + "=" + encodeURIComponent(JSON.stringify(c)) + "&")
                  : (a += o + "=" + encodeURIComponent(n(c)) + "&"));
            }
          return (a = a.substring(0, a.length - 1)), a;
        }
        function o(e) {
          var n = new FormData();
          for (var a in e)
            if (Object.hasOwnProperty.call(e, a)) {
              var t = e[a];
              if (null !== t && void 0 !== t)
                if (Array.isArray(t))
                  for (var o = 0; o < t.length; o++) n.append(a, t[o]);
                else n.append(a, e[a]);
            }
          return n;
        }
        function c(e, n, a) {
          try {
            e = e && "string" == typeof e ? JSON.parse(e) : e;
          } catch (t) {
            e = { message: "返回数据格式不正确！" };
          }
          (n.status >= 200 && n.status < 300) || 304 == n.status
            ? a.success(e, n)
            : a.error(e);
        }
        function r(n) {
          var t = {
              url: "",
              type: "GET",
              data: {},
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json, text/plain, */*",
              },
              async: !0,
              success: function (e) {
                console.log(e);
              },
              error: function (e) {
                console.error(e);
              },
            },
            r = {},
            i = e(t, n);
          "file" == i.dataType
            ? (delete i.headers["Content-Type"],
              delete i.headers["Accept"],
              (r = o(n.data)))
            : "json" == i.dataType
            ? ((i.headers["Content-Type"] = "application/json"),
              (r = JSON.stringify(i.data)))
            : (r = a(i.data));
          var l = new XMLHttpRequest(),
            s = null,
            d = i.type.toUpperCase();
          for (var u in ("POST" != d && "PUT" != d
            ? r && (i.url = i.url + "?" + r)
            : (s = r),
          l.open(i.type, i.url, i.async),
          i.headers))
            if (Object.hasOwnProperty.call(i.headers, u)) {
              var m = i.headers[u];
              l.setRequestHeader(u, m);
            }
          i.responseType && (l.responseType = i.responseType),
            l.send(s),
            (l.onload = function () {
              var e = {
                  arraybuffer: "response",
                  blob: "response",
                  document: "response",
                  json: "response",
                },
                n = (i.responseType && e[i.responseType]) || "responseText";
              c(l[n], l, i);
            }),
            (l.onerror = function () {
              i.error({ message: "您的网络不佳，请检查网络连接设置！" });
            }),
            l.upload &&
              (l.upload.onprogress = function (e) {
                i.progress && i.progress(e);
              });
        }
        return r;
      });
  },
  "7d4d": function (e, n, a) {},
  "7e3c": function (e, n) {
    function a(e, n) {
      var a = e || {},
        t = {
          delLocalData: function (e) {
            if ("all" == e) {
              var n = localStorage.getItem("rememberMe"),
                a = localStorage.getItem("cgLangType"),
                t = localStorage.getItem("learn_v_e_r"),
                o = localStorage.getItem("labLearnSysConfig");
              localStorage.clear(),
                localStorage.setItem("labLearnSysConfig", o),
                n && localStorage.setItem("rememberMe", n),
                a && localStorage.setItem("cgLangType", a),
                t && localStorage.setItem("learn_v_e_r", t);
            } else
              for (var c = 0; c < e.length; c++) {
                var r = e[c];
                localStorage.removeItem(r);
              }
          },
          casLogout: function (e) {
            var o = document.createElement("form");
            document.body.appendChild(o), (o.method = "POST");
            var c = document.createElement("input");
            c.setAttribute("name", "cgAuthorization"),
              c.setAttribute("type", "hidden");
            var r = n("dataSix", !1, "");
            (c.value = r),
              o.appendChild(c),
              t.delLocalData("all"),
              (o.action =
                a.productionDomain +
                "/lab4j-server/auth" +
                (e || "/api/logout")),
              o.submit();
          },
          logoutSys: function () {
            t.casLogout();
          },
        };
      return t;
    }
    e.exports = function (e, n) {
      return a(e, n);
    };
  },
  "8ae0": function (e, n) {
    e.exports = {
      schoolCode: "csu",
      sysName: "实验室安全学习中心",
      productionDomain: "https://aqks.csu.edu.cn",
      isSimplifyVersion: !0,
      isHideCourse: !0,
      internationalization: !0,
      isNeedTotalStudyLength: 1,
    };
  },
  c952: function (e, n, a) {},
  d71a: function (e, n, a) {
    "use strict";
    a.d(n, "a", function () {
      return i;
    });
    var t = a("53ca"),
      o =
        (a("4160"),
        a("d3b7"),
        a("159b"),
        a("ac1f"),
        a("5319"),
        a("ad9d"),
        a("4d63"),
        a("25f0"),
        {});
    try {
      var c = a("8ae0");
      if (c.internationalization) {
        var r = a("f811");
        r.forEach(function (e) {
          o[e.lang + e.code] = e.translation;
        });
      }
    } catch (l) {
      console.log("【csu】未配置语言JSON");
    }
    function i(e, n) {
      var a =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        t = localStorage.getItem("cgLangType");
      if ("en" == t) {
        var c = o[t + n];
        return c ? c.format(a) : e.format(a);
      }
      return e.format(a);
    }
    (String.prototype.replaceAll = function (e, n) {
      return this.replace(new RegExp(e, "gm"), n);
    }),
      (String.prototype.format = function (e) {
        var n = this;
        if (arguments.length < 1) return n;
        var a = arguments;
        for (var o in (1 == arguments.length &&
          "object" == Object(t["a"])(e) &&
          (a = e),
        a)) {
          var c = a[o];
          void 0 != c && (n = n.replaceAll("\\{" + o + "\\}", c));
        }
        return n;
      }),
      (n["b"] = { convert: i });
  },
  e7c2: function (e, n, a) {
    "use strict";
    var t = a("5366"),
      o = a.n(t);
    o.a;
  },
  f121: function (e, n, a) {
    "use strict";
    var t = a("5530"),
      o = (a("a15b"), a("d71a")),
      c = "",
      r = { productionDomain: "", testDomain: "" };
    try {
      r = a("8ae0");
    } catch (f) {
      console.error(
        "没有找到/src/config/school-config/".concat("csu", ".js文件！")
      );
    }
    var i = {
        default: "/lab-platform-server",
        hebeidaxue: "/lab-platform-server/public/index.php",
        baisexueyuan: "/lab-platform-server/public/index.php",
      },
      l = "/cg-exam-server",
      s = r.pathName || "/lab-study-front",
      d = r.productionDomain,
      u = r.testDomain,
      m = "";
    switch ("production") {
      case "production":
        (c = d + l), (m = d + s);
        break;
      case "testing":
        (c = u + l), (m = u + s);
        break;
      default:
        (c = "" + l), (m = "" + s);
        break;
    }
    n["a"] = Object(t["a"])(
      {
        pathName: "/lab-study-front",
        platformPath: "/lab-platform",
        BackPathName: "/cg-exam",
        sysName: "实验室安全教育平台",
        serverUrl: c,
        uploadTime: 15,
        NoOperationTime: 5,
        devDefault: i["csu"] || i.default,
        closeCheck: !1,
        changeHeight: !0,
        pageSizeOpts: [10, 20, 50, 100, 200],
        legalImgType: ["gif", "png", "jpg", "jpeg"],
        legalFile: [
          "gif",
          "png",
          "jpg",
          "jpeg",
          "xls",
          "xlsx",
          "doc",
          "docx",
          "pdf",
          "txt",
        ],
        s: [
          "YzY",
          "0MG",
          "Nh",
          "Mz",
          "k",
          "yY2",
          "Q0N",
          "WZ",
          "iM2E1",
          "NWIw",
          "MGE2M2",
          "E4",
          "NmM2M",
          "Tg=",
        ],
        a: [
          "=IGM",
          "4cTYlhT",
          "NiBDN",
          "wITMz",
          "kjM1",
          "EWNiJD",
          "Ow",
          "UzM3IW",
          "ZjZGO",
        ],
        l: [
          "53",
          "120",
          "991",
          "6a1",
          "a11e",
          "999",
          "280",
          "05",
          "056",
          "a53",
          "c1c",
        ].join(""),
        t: 1200,
        AES_KEY_PHP: ["c1h", "2i", "5n6g", "2o", "2k", "4a7"],
        AES_IV_PHP: ["C2", "H3", "I4N", "5G2O", "3K", "1E4"],
        AES_KEY_JAVA: [
          "h",
          "X",
          "u",
          "z",
          "M",
          "V",
          "Q",
          "p",
          "M",
          "q",
          "j",
          "P",
          "n",
          "3",
          "u",
          "Z",
        ],
        AES_IV_JAVA: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
        frontUrl: m,
        allModule: {
          1: "通知公告",
          2: Object(o["a"])("法律法规", "code94"),
          3: "微课堂",
          4: Object(o["a"])("安全知识", "code9"),
          5: Object(o["a"])("安全手册", "code10"),
          6: "安全标识",
          7: Object(o["a"])("安全视频", "code13"),
          8: Object(o["a"])("事故案例", "code12"),
          9: "SDS",
          10: Object(o["a"])("微课堂", "code14"),
          11: "安全知识分类",
          12: Object(o["a"])("安全标识", "code11"),
          13: "安全海报",
          14: "实安课堂",
          15: "学生作品",
          16: Object(o["a"])("题库练习", "code16"),
          17: Object(o["a"])("错题集", "code207"),
        },
        moduleList: [
          { label: "政策法规", value: 2 },
          { label: "安全知识", value: 4 },
          { label: "安全手册", value: 5 },
          { label: "安全视频", value: 7 },
          { label: "事故案例", value: 8 },
          { label: "微课堂", value: 10 },
          { label: "安全标识", value: 12 },
          { label: "题库练习", value: 16 },
          { label: "错题集", value: 17 },
        ],
      },
      r
    );
  },
  f811: function (e) {
    e.exports = JSON.parse(
      '[{"cnName":"进入后台","translation":"Dashboard","code":"code1","lang":"en"},{"cnName":"登录","translation":"Sign in","code":"code2","lang":"en"},{"cnName":"个人中心","translation":"Personal Center","code":"code3","lang":"en"},{"cnName":"退出","translation":"Sign out","code":"code4","lang":"en"},{"cnName":"首页","translation":"Home","code":"code5","lang":"en"},{"cnName":"通知公告","translation":"Notice","code":"code6","lang":"en"},{"cnName":"政策法规","translation":"National Laws & Regulations","code":"code7","lang":"en"},{"cnName":"安全知识库","translation":"Safety Knowledge Base","code":"code8","lang":"en"},{"cnName":"安全知识","translation":"Safety Knowledge","code":"code9","lang":"en"},{"cnName":"安全手册","translation":"Safety Manuals","code":"code10","lang":"en"},{"cnName":"安全标识","translation":"Safety Signs","code":"code11","lang":"en"},{"cnName":"事故案例","translation":"Accident Cases","code":"code12","lang":"en"},{"cnName":"安全视频","translation":"Safety Videos","code":"code13","lang":"en"},{"cnName":"微课堂","translation":"Micro Classes","code":"code14","lang":"en"},{"cnName":"文件下载","translation":"Download","code":"code15","lang":"en"},{"cnName":"题库练习","translation":"Practice in Question Bank","code":"code16","lang":"en"},{"cnName":"是否退出本系统？","translation":"Are you sure to sign out the system?","code":"code17","lang":"en"},{"cnName":"开始学习","translation":"Start Learning","code":"code18","lang":"en"},{"cnName":"详情","translation":"Details","code":"code19","lang":"en"},{"cnName":"更多","translation":"More","code":"code20","lang":"en"},{"cnName":"别名","translation":"Other names","code":"code21","lang":"en"},{"cnName":"CAS号","translation":"CAS No.","code":"code22","lang":"en"},{"cnName":"类型","translation":"Type","code":"code23","lang":"en"},{"cnName":"无","translation":"Null","code":"code24","lang":"en"},{"cnName":"化学试剂","translation":"Chemical","code":"code25","lang":"en"},{"cnName":"地址:杭州市西湖区申花798号紫金创意大厦3层","translation":"Address: 3F, Zijin Creative Mansion, 798 Shenhua Rd, Xihu District, Hangzhou City","code":"code26","lang":"en"},{"cnName":"版权所有浙江创高软件有限公司保留所有权利","translation":"All Rights Reserved©Zhejiang Chingo Software Technology Co., Ltd","code":"code27","lang":"en"},{"cnName":"共 {a} 题","translation":"Total Questions:{a}","code":"code28","lang":"en"},{"cnName":"返回","translation":"Return","code":"code29","lang":"en"},{"cnName":"已用时","translation":"Time Used","code":"code30","lang":"en"},{"cnName":"累计时间","translation":"Aggregating Time","code":"code31","lang":"en"},{"cnName":"系统提示","translation":"Notice","code":"code32","lang":"en"},{"cnName":"你已经在此页面 {a} 分钟了 {b} 秒后自动退出，是否继续!","translation":"Your system is idle for {a} minutes, and your connection will be terminated within {b} seconds. Would you like to reset?","code":"code33","lang":"en"},{"cnName":"取消","translation":"Cancel","code":"code34","lang":"en"},{"cnName":"确定","translation":"Confirm","code":"code35","lang":"en"},{"cnName":"单选题","translation":"Single Choice","code":"code36","lang":"en"},{"cnName":"多选题","translation":"Multiple Choice","code":"code37","lang":"en"},{"cnName":"判断题","translation":"True-or-False","code":"code38","lang":"en"},{"cnName":"{a} 分","translation":"Score: {a}","code":"code39","lang":"en"},{"cnName":"你的答案","translation":"Your Answer","code":"code40","lang":"en"},{"cnName":"对","translation":"True","code":"code41","lang":"en"},{"cnName":"错","translation":"False","code":"code42","lang":"en"},{"cnName":"得分","translation":"Score","code":"code43","lang":"en"},{"cnName":"正确答案","translation":"Correct Answer","code":"code44","lang":"en"},{"cnName":"图片编辑","translation":"Edit","code":"code45","lang":"en"},{"cnName":"注：请上传个人免冠照，照片用于实验室准入证书。","translation":"Notice: Please upload your photo without head coverings for use on the Lab Pass","code":"code46","lang":"en"},{"cnName":"保存","translation":"Save","code":"code47","lang":"en"},{"cnName":"请签名","translation":"Please sign your name","code":"code48","lang":"en"},{"cnName":"签名不能为空","translation":"No Signature Identified","code":"code49","lang":"en"},{"cnName":"重写","translation":"Sign Again","code":"code50","lang":"en"},{"cnName":"提交签名","translation":"Submit","code":"code51","lang":"en"},{"cnName":"签名保存成功","translation":"Signature saved succesfully.","code":"code52","lang":"en"},{"cnName":"温馨提示,请先签名后提交！","translation":"Notice: Please sign your name before submission.","code":"code53","lang":"en"},{"cnName":"课时","translation":"Lessons","code":"code54","lang":"en"},{"cnName":"继续学习","translation":"Resume Learning","code":"code55","lang":"en"},{"cnName":"主讲人·","translation":"Speaker","code":"code56","lang":"en"},{"cnName":"{a} 人学过","translation":"{a} people also learnt","code":"code57","lang":"en"},{"cnName":"{a} 人收藏","translation":"{a} people also saved","code":"code58","lang":"en"},{"cnName":"目录","translation":"Catalogue","code":"code59","lang":"en"},{"cnName":"还未添加章节目录和课时","translation":"You haven\'t added any chapter or lesson yet.","code":"code60","lang":"en"},{"cnName":"章节","translation":"Chapter","code":"code61","lang":"en"},{"cnName":"再次学习","translation":"Learn Again","code":"code62","lang":"en"},{"cnName":"已学完","translation":"Completed","code":"code63","lang":"en"},{"cnName":"已收藏","translation":"Saved","code":"code64","lang":"en"},{"cnName":"取消收藏","translation":"Unsave","code":"code65","lang":"en"},{"cnName":"返回课程主页","translation":"Course Page","code":"code66","lang":"en"},{"cnName":"课时介绍","translation":"Lesson Introduction","code":"code67","lang":"en"},{"cnName":"参考资料","translation":"Reference","code":"code68","lang":"en"},{"cnName":"上一次播放","translation":"Latest Viewed","code":"code69","lang":"en"},{"cnName":"上一页","translation":"Previous Page","code":"code70","lang":"en"},{"cnName":"下一页","translation":"Next Page","code":"code71","lang":"en"},{"cnName":"选学","translation":"Elective","code":"code72","lang":"en"},{"cnName":"必学","translation":"Compulsory","code":"code73","lang":"en"},{"cnName":"已学习","translation":"Learning duration ","code":"code74","lang":"en"},{"cnName":"去学习","translation":"Learn This Course","code":"code75","lang":"en"},{"cnName":"名称","translation":"Name","code":"code76","lang":"en"},{"cnName":"学习模块","translation":"Learning Module","code":"code77","lang":"en"},{"cnName":"学习进度","translation":"Progress","code":"code78","lang":"en"},{"cnName":"操作","translation":"Operation","code":"code79","lang":"en"},{"cnName":"发布时间","translation":"Publish Time","code":"code80","lang":"en"},{"cnName":"访问次数","translation":"Views","code":"code81","lang":"en"},{"cnName":"要求学习","translation":"Required Learning Hours","code":"code82","lang":"en"},{"cnName":"必学时长","translation":"Compulsory Courses Hours","code":"code83","lang":"en"},{"cnName":"选学时长","translation":"Elective Courses Hours","code":"code84","lang":"en"},{"cnName":"去练习","translation":"Go Practice","code":"code85","lang":"en"},{"cnName":"去考试","translation":"Go to Exam","code":"code86","lang":"en"},{"cnName":"试卷生成中","translation":"The exam paper is being prepared...","code":"code87","lang":"en"},{"cnName":"温馨提示：以下学习内容存在学习进度数据更新延迟的问题。","translation":"Notice: There is a delay in updating the learning process data for the following contents.","code":"code88","lang":"en"},{"cnName":"未学","translation":"Not Started","code":"code89","lang":"en"},{"cnName":"已学","translation":"Completed","code":"code90","lang":"en"},{"cnName":"查询","translation":"Search","code":"code91","lang":"en"},{"cnName":"本场考核未指定任何学习内容，您可以直接去考试啦","translation":"This exam does not specify any required content, you may go directly to the exam!","code":"code92","lang":"en"},{"cnName":"学校管理制度","translation":"University\'s Regulation","code":"code93","lang":"en"},{"cnName":"法律法规","translation":"Laws & Regulations","code":"code94","lang":"en"},{"cnName":"暂无内容","translation":"No content yet","code":"code95","lang":"en"},{"cnName":"未检索到学习内容","translation":"No content matched","code":"code96","lang":"en"},{"cnName":"还没有收藏任何学习内容","translation":"No courses saved","code":"code97","lang":"en"},{"cnName":"关联词条文章","translation":"Articles Related to This Topic","code":"code98","lang":"en"},{"cnName":"国家法律法规","translation":"National Laws & Regulations","code":"code99","lang":"en"},{"cnName":"地方法律法规","translation":"Regional Laws & Regulations","code":"code100","lang":"en"},{"cnName":"学校制度","translation":"School system","code":"code101","lang":"en"},{"cnName":"当前进度","translation":"Current Progress","code":"code102","lang":"en"},{"cnName":"合计 {a} 分","translation":"Total score: {a}","code":"code103","lang":"en"},{"cnName":"提交答案","translation":"Submit","code":"code104","lang":"en"},{"cnName":"您有一场考试正在排队，","translation":"You are in the queue of 1 exam.","code":"code105","lang":"en"},{"cnName":"您当前排在第 {a} 位，请耐心等候！","translation":"You are currently at position {a} in the queue. Please wait for a moment.","code":"code106","lang":"en"},{"cnName":"您已经完成排队， 请进入考试。","translation":"The waiting process is over. Please start the exam.","code":"code107","lang":"en"},{"cnName":"您正在进行考试，请进入！","translation":"You are now in the exam, please start.","code":"code108","lang":"en"},{"cnName":"取消等待","translation":"Cancel Waiting","code":"code109","lang":"en"},{"cnName":"暂不考试","translation":"Take the Exam Later","code":"code110","lang":"en"},{"cnName":"进入考试","translation":"Start the Exam","code":"code111","lang":"en"},{"cnName":"考前承诺","translation":"Pre-Exam Undertaking","code":"code112","lang":"en"},{"cnName":"已认真阅读并将遵守实验室安全承诺书内容","translation":"I have carefully read and will abide by the contents of the Laboratory Safety Undertaking","code":"code113","lang":"en"},{"cnName":"二维码过期，请重新扫描","translation":"QR code expired. Please scan again.","code":"code114","lang":"en"},{"cnName":"开始考试","translation":"Start Exam","code":"code115","lang":"en"},{"cnName":"请使用手机扫码签字","translation":"Please use your mobile device to scan the QR code to sign your name","code":"code116","lang":"en"},{"cnName":"获取手签文件成功,请开始考试！","translation":"Signature file received. Please start the exam!","code":"code117","lang":"en"},{"cnName":"当前考试人数已达系统上限，需要排队等待，","translation":"Maximum capacity reached, please wait in the queue.","code":"code118","lang":"en"},{"cnName":"考试准入","translation":"Exam Requirements","code":"code119","lang":"en"},{"cnName":"无要求","translation":"No Requirements","code":"code120","lang":"en"},{"cnName":"本次","translation":"This Session","code":"code121","lang":"en"},{"cnName":"本学期","translation":"This Semester","code":"code122","lang":"en"},{"cnName":"本学年","translation":"This Academic Year","code":"code123","lang":"en"},{"cnName":"累计","translation":"Total","code":"code124","lang":"en"},{"cnName":"答卷次数为每人每天 {a} 次","translation":"Each user can take the exam for {a} times each day.","code":"code125","lang":"en"},{"cnName":"合格要求：{a} 分","translation":"Score Required for Passing: {a}","code":"code126","lang":"en"},{"cnName":"答卷次数为无限制","translation":"There is no maximum number of attempts for the exam.","code":"code127","lang":"en"},{"cnName":"答卷次数：{a} 次","translation":"Number of Attempts for the Exam: {a}","code":"code128","lang":"en"},{"cnName":"{a} 分钟之后方可交卷","translation":"You can submit the exam after {a} minutes.","code":"code129","lang":"en"},{"cnName":"考试总时长为 {a} 分钟","translation":"Exam Duration: {a} Minutes","code":"code130","lang":"en"},{"cnName":"注意事项：","translation":"Notice:","code":"code131","lang":"en"},{"cnName":"答案一旦确定不能修改。","translation":"Once you confirm you answer, you cannot do any correction upon it.","code":"code132","lang":"en"},{"cnName":"点击提交答案后自动换到下一题","translation":"Click on the submit button for next question.","code":"code133","lang":"en"},{"cnName":"单题作答时间不能超过 {a} 秒钟，点击提交答案后不能返回再次答题。","translation":"Maximum time for every question: {a} Seconds. You will not be able to return to this question after clicking on the submit button.","code":"code134","lang":"en"},{"cnName":"本题剩余时间: {a}/{b}秒","translation":"Time left for this question: {a}/{b} seconds","code":"code135","lang":"en"},{"cnName":"答题卡","translation":"Answer Sheet","code":"code136","lang":"en"},{"cnName":"剩余时间","translation":"Time Left","code":"code137","lang":"en"},{"cnName":"交卷","translation":"Submit","code":"code138","lang":"en"},{"cnName":"继续考试","translation":"Resume the Exam","code":"code139","lang":"en"},{"cnName":"答题时间不足，无法交卷","translation":"No enough time left for this question. Submission failed.","code":"code140","lang":"en"},{"cnName":"还有 {a} 题未作答","translation":"{a} Questions Unanswered,","code":"code141","lang":"en"},{"cnName":"我的考试","translation":"My Exams","code":"code142","lang":"en"},{"cnName":"我的成绩","translation":"My Scores","code":"code143","lang":"en"},{"cnName":"我的证书","translation":"My Certificates","code":"code144","lang":"en"},{"cnName":"请输入考试名称","translation":"Please type in the title of the exam","code":"code145","lang":"en"},{"cnName":"请选择状态","translation":"Select Status","code":"code146","lang":"en"},{"cnName":"打印","translation":"Print","code":"code147","lang":"en"},{"cnName":"打印证书","translation":"Print Certificate","code":"code148","lang":"en"},{"cnName":"加载中","translation":"Loading","code":"code149","lang":"en"},{"cnName":"有效","translation":"Valid","code":"code150","lang":"en"},{"cnName":"失效","translation":"Invalid","code":"code151","lang":"en"},{"cnName":"序号","translation":"No.","code":"code152","lang":"en"},{"cnName":"考试名称","translation":"Exam","code":"code153","lang":"en"},{"cnName":"证书编号","translation":"Certificate Number","code":"code154","lang":"en"},{"cnName":"有效期","translation":"Validity Period","code":"code155","lang":"en"},{"cnName":"状态","translation":"Status","code":"code156","lang":"en"},{"cnName":"是否打印证书","translation":"Do You Want to Print the Certificate?","code":"code157","lang":"en"},{"cnName":"已结束","translation":"Ended","code":"code158","lang":"en"},{"cnName":"未开始","translation":"Not Started","code":"code159","lang":"en"},{"cnName":"学习中","translation":"In Progress","code":"code160","lang":"en"},{"cnName":"已完成","translation":"Completed","code":"code161","lang":"en"},{"cnName":"已通过","translation":"Passed","code":"code162","lang":"en"},{"cnName":"未通过","translation":"Failed","code":"code163","lang":"en"},{"cnName":"未考核","translation":"Untested","code":"code164","lang":"en"},{"cnName":"完成时间","translation":"Duration of Validity","code":"code165","lang":"en"},{"cnName":"考核状态","translation":"Exam Status","code":"code166","lang":"en"},{"cnName":"选择学期","translation":"Select Semester","code":"code167","lang":"en"},{"cnName":"查看成绩","translation":"View Score","code":"code168","lang":"en"},{"cnName":"查看答案","translation":"View Answer","code":"code169","lang":"en"},{"cnName":"打印承诺书","translation":"Print the Undertaking","code":"code170","lang":"en"},{"cnName":"考试时间","translation":"Exam Time","code":"code171","lang":"en"},{"cnName":"考试类型","translation":"Exam Type","code":"code172","lang":"en"},{"cnName":"模拟考试","translation":"Mock Exam","code":"code173","lang":"en"},{"cnName":"正式考试","translation":"Formal Exam","code":"code174","lang":"en"},{"cnName":"分数","translation":"Score","code":"code175","lang":"en"},{"cnName":"承诺书","translation":"Undertaking","code":"code176","lang":"en"},{"cnName":"错题练习","translation":"Error Log Practice","code":"code177","lang":"en"},{"cnName":"注意事项：答案一旦确定不能修改！","translation":"Notice: Once you confirm you answer, you cannot do any correction upon it.","code":"code178","lang":"en"},{"cnName":"练习时间","translation":"Practice Time","code":"code179","lang":"en"},{"cnName":"当前已经是第一页了","translation":"This is already the first page.","code":"code180","lang":"en"},{"cnName":"已经是最后一页了","translation":"This is already the last page.","code":"code181","lang":"en"},{"cnName":"请选择题库","translation":"Select the question bank","code":"code182","lang":"en"},{"cnName":"请选择题型","translation":"Select the question type","code":"code183","lang":"en"},{"cnName":"国家标准","translation":"National standard","code":"code184","lang":"en"},{"cnName":"上级文件","translation":"Parent file","code":"code185","lang":"en"},{"cnName":"请输入题干","translation":"Please enter the question stem","code":"code186","lang":"en"},{"cnName":"共 {a} 道错题","translation":"Total Errors: {a}","code":"code187","lang":"en"},{"cnName":"收拢答案","translation":"Hide the answer","code":"code188","lang":"en"},{"cnName":"已掌握","translation":"Resolved","code":"code189","lang":"en"},{"cnName":"正确答案是","translation":"Correct Answer","code":"code190","lang":"en"},{"cnName":"我的答案是","translation":"My Answer","code":"code191","lang":"en"},{"cnName":"解析","translation":"Solution","code":"code192","lang":"en"},{"cnName":"包含考试错题和练习错题","translation":"Include all  the errors you have made in the exams and practice","code":"code193","lang":"en"},{"cnName":"共含有 {a} 道错题","translation":"Total Errors: {a}","code":"code194","lang":"en"},{"cnName":"重新开始","translation":"Start Again","code":"code195","lang":"en"},{"cnName":"未答题","translation":"Unanswered question","code":"code196","lang":"en"},{"cnName":"是否标记为已掌握？","translation":"Mark it as \\"Resolved\\"?","code":"code197","lang":"en"},{"cnName":"操作成功","translation":"Success","code":"code198","lang":"en"},{"cnName":"此题已掌握","translation":"This question is resolved.","code":"code199","lang":"en"},{"cnName":"我的答案","translation":"My Answer","code":"code200","lang":"en"},{"cnName":"题目解析","translation":"Solution","code":"code201","lang":"en"},{"cnName":"更换照片","translation":"Change Photo","code":"code202","lang":"en"},{"cnName":"上传照片","translation":"Upload Photo","code":"code203","lang":"en"},{"cnName":"所在单位","translation":"Department","code":"code204","lang":"en"},{"cnName":"所在专业","translation":"Major","code":"code205","lang":"en"},{"cnName":"常规考试","translation":"Regular Exams","code":"code206","lang":"en"},{"cnName":"我的错题集","translation":"My Error Log","code":"code207","lang":"en"},{"cnName":"收藏夹","translation":"Saved","code":"code208","lang":"en"},{"cnName":"请输入发布单位","translation":"Please enter publishing unit","code":"code209","lang":"en"},{"cnName":"重置","translation":"Reset","code":"code210","lang":"en"},{"cnName":"练习题库","translation":"Practice Question Bank","code":"code211","lang":"en"},{"cnName":"练习日期","translation":"Practice Date","code":"code212","lang":"en"},{"cnName":"练习时长","translation":"Practice Hours","code":"code213","lang":"en"},{"cnName":"练习题目数","translation":"Practice Count","code":"code214","lang":"en"},{"cnName":"正确题数","translation":"Correct","code":"code215","lang":"en"},{"cnName":"错误题数","translation":"Incorrect","code":"code216","lang":"en"},{"cnName":"错误率","translation":"Error Rate","code":"code217","lang":"en"},{"cnName":"在线练习","translation":"Online Practice","code":"code218","lang":"en"},{"cnName":"请输入关键字","translation":"Please enter the keywords","code":"code219","lang":"en"},{"cnName":"练习记录","translation":"Practice Record","code":"code220","lang":"en"},{"cnName":"已练习题数","translation":"Questions Practiced","code":"code221","lang":"en"},{"cnName":"知识标签","translation":"Tag","code":"code222","lang":"en"},{"cnName":"继续练习","translation":"Resume Practising","code":"code223","lang":"en"},{"cnName":"题库名称","translation":"Question Bank\'s Name","code":"code224","lang":"en"},{"cnName":"创建单位","translation":"Add Department","code":"code225","lang":"en"},{"cnName":"题目总数","translation":"Total number","code":"code226","lang":"en"},{"cnName":"输入试剂名称或CAS","translation":"Enter chemical name or CAS","code":"code227","lang":"en"},{"cnName":"输入别名","translation":"Enter other names","code":"code228","lang":"en"},{"cnName":"百科词条","translation":"Encyclopedia","code":"code229","lang":"en"},{"cnName":"关键词","translation":"Keyword(s)","code":"code230","lang":"en"},{"cnName":"培训承诺","translation":"Training Undertaking","code":"code231","lang":"en"},{"cnName":"获取手签文件成功,请开始学习！","translation":"Signature file received. Please start learning!","code":"code232","lang":"en"},{"cnName":"签名提交成功","translation":"Signature submitted succesfully.","code":"code233","lang":"en"},{"cnName":"我的培训","translation":"My Training","code":"code234","lang":"en"},{"cnName":"请输入培训名称","translation":"Please enter the training name","code":"code235","lang":"en"},{"cnName":"承诺书","translation":"Undertaking","code":"code236","lang":"en"},{"cnName":"证书","translation":"Certificate","code":"code237","lang":"en"},{"cnName":"关闭","translation":"Close","code":"code238","lang":"en"},{"cnName":"培训名称","translation":"Training","code":"code239","lang":"en"},{"cnName":"进行中","translation":"In Progress","code":"code240","lang":"en"},{"cnName":"未学习","translation":"Not Started","code":"code241","lang":"en"},{"cnName":"学习状态","translation":"Learning Status","code":"code242","lang":"en"},{"cnName":"考试分类","translation":"Exam Type","code":"code243","lang":"en"},{"cnName":"培训分类","translation":"Training Type","code":"code244","lang":"en"},{"cnName":"培训单位","translation":"Training Organiser","code":"code245","lang":"en"},{"cnName":"主讲人","translation":"Speaker","code":"code246","lang":"en"},{"cnName":"考试日期","translation":"Exam Date","code":"code247","lang":"en"},{"cnName":"培训日期","translation":"Training Date","code":"code248","lang":"en"},{"cnName":"请选择{a}日期","translation":"Select {a} Date","code":"code249","lang":"en"},{"cnName":"请输入","translation":"Please enter ","code":"code250","lang":"en"},{"cnName":"{a}地点","translation":"{a} Location","code":"code251","lang":"en"},{"cnName":"{a}时长","translation":"{a} Duration","code":"code252","lang":"en"},{"cnName":"请选择","translation":"Please select ","code":"code253","lang":"en"},{"cnName":"分钟","translation":" minute","code":"code254","lang":"en"},{"cnName":"考试成绩","translation":"Exam Score","code":"code255","lang":"en"},{"cnName":"成绩状态","translation":"Score Status","code":"code256","lang":"en"},{"cnName":"合格","translation":"Pass","code":"code257","lang":"en"},{"cnName":"不合格","translation":"Fail","code":"code258","lang":"en"},{"cnName":"是否属于从业人员","translation":"Are you a professional personnel?","code":"code259","lang":"en"},{"cnName":"是否有证书","translation":"Are you certified","code":"code260","lang":"en"},{"cnName":"发证日期","translation":"Certificate Issuance Date","code":"code261","lang":"en"},{"cnName":"证书类型","translation":"Certificate Type","code":"code262","lang":"en"},{"cnName":"证书等级","translation":"Certificate Level","code":"code263","lang":"en"},{"cnName":"发证部门","translation":"Certificate Issuing Authority","code":"code264","lang":"en"},{"cnName":"证书有效期","translation":"Certificate Validity Period","code":"code265","lang":"en"},{"cnName":"请上传证书文件","translation":"Please upload your certificate","code":"code266","lang":"en"},{"cnName":"校级","translation":"school level","code":"code267","lang":"en"},{"cnName":"院级","translation":"college level","code":"code268","lang":"en"},{"cnName":"实验室级","translation":"laboratory level","code":"code269","lang":"en"},{"cnName":"其他","translation":"others","code":"code270","lang":"en"},{"cnName":"请选择开始日期","translation":"Select Start Date","code":"code271","lang":"en"},{"cnName":"请选择结束日期","translation":"Select End Date","code":"code272","lang":"en"},{"cnName":"开始日期不能大于结束日期","translation":"The start date cannot be greater than the end date","code":"code273","lang":"en"},{"cnName":"考试","translation":"Exam","code":"code274","lang":"en"},{"cnName":"培训","translation":"Training","code":"code275","lang":"en"},{"cnName":"安全培训","translation":"Safety Training","code":"code276","lang":"en"},{"cnName":"安全考试","translation":"Safety Exam","code":"code277","lang":"en"},{"cnName":"请输入考试时长","translation":"Please enter the exam duration","code":"code278","lang":"en"},{"cnName":"请选择{a}分类","translation":"Select {a} type","code":"code279","lang":"en"},{"cnName":"请选择成绩状态","translation":"Result status","code":"code280","lang":"en"},{"cnName":"请选择是否有证书","translation":"With or without certificate","code":"code281","lang":"en"},{"cnName":"学习记录","translation":"Learning Record","code":"code282","lang":"en"},{"cnName":"有证书","translation":"With Certificate","code":"code283","lang":"en"},{"cnName":"无证书","translation":"Withou Certificate","code":"code284","lang":"en"},{"cnName":"证书附件","translation":"Certificate Attachments","code":"code285","lang":"en"},{"cnName":"证书状态","translation":"Certificate Status","code":"code286","lang":"en"},{"cnName":"您确定要删除吗?","translation":"Are you sure you want to delete this?","code":"code287","lang":"en"},{"cnName":"姓名","translation":"Name","code":"code288","lang":"en"},{"cnName":"学工号","translation":"University ID No.","code":"code289","lang":"en"},{"cnName":"学院","translation":"College","code":"code290","lang":"en"},{"cnName":"专业","translation":"Major","code":"code291","lang":"en"},{"cnName":"年级","translation":"Grade","code":"code292","lang":"en"},{"cnName":"是否属于从业人员培训","translation":"Is it a training for professional personnel?","code":"code293","lang":"en"},{"cnName":"是否属于从业人员考试","translation":"Is it an exam for professional personnel?","code":"code294","lang":"en"},{"cnName":"证书明细","translation":"Details of the Certificate","code":"code295","lang":"en"},{"cnName":"错误","translation":"Wrong","code":"code296","lang":"en"},{"cnName":"正确","translation":"Right","code":"code297","lang":"en"},{"cnName":"是否重新开始练习","translation":"Start practice again?","code":"code298","lang":"en"},{"cnName":"简介","translation":"Information","code":"code299","lang":"en"},{"cnName":"课程介绍","translation":"Course Introduction","code":"code300","lang":"en"},{"cnName":"主讲人介绍","translation":"Speaker Introduction","code":"code301","lang":"en"},{"cnName":"时长","translation":"Duration","code":"code302","lang":"en"},{"cnName":"没有更多数据了","translation":"No more data","code":"code303","lang":"en"},{"cnName":"暂无信息","translation":"No content yet","code":"code304","lang":"en"},{"cnName":"常规考试成绩与资质","translation":"Exam scores","code":"code305","lang":"en"},{"cnName":"我同意考试承诺","translation":"I agree to the undertaking fot the exam.","code":"code306","lang":"en"},{"cnName":"在线考试","translation":"Online Exam","code":"code307","lang":"en"},{"cnName":"未开始学习","translation":"Not Started","code":"code308","lang":"en"},{"cnName":"正在学习中","translation":"In Progress","code":"code309","lang":"en"},{"cnName":"已完成学习","translation":"Completed","code":"code310","lang":"en"},{"cnName":"我的收藏","translation":"Saved","code":"code311","lang":"en"},{"cnName":"已答题","translation":"Answered Questions","code":"code312","lang":"en"},{"cnName":"总答题次","translation":"Total Questions Answered","code":"code313","lang":"en"},{"cnName":"错题","translation":"My Errors","code":"code314","lang":"en"},{"cnName":"已答题数","translation":"Question Answered","code":"code315","lang":"en"},{"cnName":"已学习时长","translation":"My Learning Hours","code":"code316","lang":"en"},{"cnName":"要求学习时长","translation":"Required Learning Hours","code":"code317","lang":"en"},{"cnName":"累计学习时长","translation":"Total Learning Hours","code":"code318","lang":"en"},{"cnName":"访问量","translation":"Visits","code":"code319","lang":"en"},{"cnName":"不再提醒","translation":"Do Not Ask Again","code":"code320","lang":"en"},{"cnName":"培训学习资质","translation":"Training Qualification","code":"code321","lang":"en"},{"cnName":"您已完成排队，请进入考试。","translation":"You have completed queuing, please enter the exam.","code":"code322","lang":"en"},{"cnName":"学习时长达到 {a} 分钟","translation":"Learning for up to {a} minutes","code":"code323","lang":"en"},{"cnName":"是否确定交卷?","translation":"Are you sure you want to submit?","code":"code324","lang":"en"},{"cnName":"线下培训考试","translation":"Offline Training & Exams","code":"code325","lang":"en"},{"cnName":"培训学习","translation":"Training & learning","code":"code326","lang":"en"},{"cnName":"{a}名称","translation":"{a} Name","code":"code327","lang":"en"},{"cnName":"{a}分类","translation":"{a} Type","code":"code328","lang":"en"},{"cnName":"{a}日期","translation":"{a} Date","code":"code329","lang":"en"},{"cnName":"是","translation":"Yes","code":"code330","lang":"en"},{"cnName":"否","translation":"No","code":"code331","lang":"en"},{"cnName":"提交","translation":"Submit","code":"code332","lang":"en"},{"cnName":"文件上传","translation":"File upload","code":"code333","lang":"en"},{"cnName":"支持文件格式","translation":"Supported file formats","code":"code334","lang":"en"},{"cnName":"开始时间","translation":"Start time","code":"code335","lang":"en"},{"cnName":"结束时间","translation":"End time","code":"code336","lang":"en"},{"cnName":"至","translation":" to ","code":"code337","lang":"en"},{"cnName":"编辑","translation":"Edit","code":"code338","lang":"en"},{"cnName":"删除","translation":"Delete","code":"code339","lang":"en"},{"cnName":"培训地点","translation":"Training location","code":"code340","lang":"en"},{"cnName":"培训时长","translation":"Training duration","code":"code341","lang":"en"},{"cnName":"培训地点","translation":"Training location","code":"code340","lang":"en"},{"cnName":"考试时长","translation":"Exam duration","code":"code342","lang":"en"},{"cnName":"新增","translation":"Add","code":"code343","lang":"en"},{"cnName":"安全百科","translation":"Security Encyclopedia","code":"code344","lang":"en"},{"cnName":"暂无通知","translation":"No notification","code":"code345","lang":"en"},{"cnName":"系统错误","translation":"System Error","code":"code346","lang":"en"},{"cnName":"没有数据","translation":"no data","code":"code347","lang":"en"},{"cnName":"考试中","translation":"Exam in progress","code":"code348","lang":"en"},{"cnName":"离考试结束还剩","translation":"There is still time left until the end of the exam ","code":"code349","lang":"en"},{"cnName":"不允许修改答案","translation":"Not allowed to modify answers","code":"code350","lang":"en"},{"cnName":"我的","translation":"My","code":"code351","lang":"en"},{"cnName":"我同意培训承诺","translation":"I agree to the training commitment","code":"code352","lang":"en"},{"cnName":"开始签名","translation":"Start signing","code":"code353","lang":"en"},{"cnName":"修改签名","translation":"Modify signature","code":"code354","lang":"en"},{"cnName":"未出结果","translation":"Not yet released","code":"code355","lang":"en"},{"cnName":"已经学习完成!","translation":"Learning has been completed!","code":"code356","lang":"en"},{"cnName":"请先同意考试承诺","translation":"Please agree to the exam commitment","code":"code357","lang":"en"},{"cnName":"您还未进行签名，无法进入考试!","translation":"You have not signed yet and cannot enter the exam!","code":"code358","lang":"en"},{"cnName":"考前学习","translation":"Pre exam learning","code":"code359","lang":"en"},{"cnName":"温馨提示","translation":"Kind reminder","code":"code360","lang":"en"},{"cnName":"不再提醒","translation":"No more reminders","code":"code361","lang":"en"},{"cnName":"全部","translation":"All","code":"code362","lang":"en"},{"cnName":"正在播放","translation":"Playing","code":"code363","lang":"en"},{"cnName":"记录时长","translation":"Record duration","code":"code364","lang":"en"},{"cnName":"选择学习模块","translation":"Please select the learning module","code":"code365","lang":"en"},{"cnName":"您在5分钟内未进行答题，{a}秒后将退出考试页面!","translation":"You have not answered the question within 5 minutes, and will exit the exam page in {a} second!","code":"code366","lang":"en"},{"cnName":"总学习时长约为","translation":"Learning record time","code":"code367","lang":"en"},{"cnName":"学习内容","translation":"Learning content","code":"code368","lang":"en"},{"cnName":"开始时间","translation":"Start time","code":"code369","lang":"en"},{"cnName":"结束时间","translation":"End time","code":"code370","lang":"en"},{"cnName":"总练习时长","translation":"Practice record time","code":"code371","lang":"en"},{"cnName":"平台学习时长","translation":"Total learning time","code":"code372","lang":"en"},{"cnName":"学习时长","translation":"learning time","code":"code373","lang":"en"},{"cnName":"秒","translation":"seconds","code":"code374","lang":"en"},{"cnName":"时","translation":"hour","code":"code375","lang":"en"}]'
    );
  },
});
