"use strict";
(() => {
  function v(t) {
    (M(t), document.querySelectorAll("style.theme").forEach((a) => a.remove()));
    let e = document.createElement("style");
    (e.classList.add("theme"), (e.textContent = t));
    let n = () => {
      let a = document.head;
      if (!a) {
        let c = document.documentElement;
        c && e.parentNode !== c && c.appendChild(e);
        return;
      }
      a.lastElementChild !== e && a.appendChild(e);
    };
    n();
    let r = new MutationObserver(n);
    r.observe(document, { childList: !0, subtree: !0 });
    let o = () => r.disconnect();
    document.readyState === "complete" || document.readyState === "interactive"
      ? queueMicrotask(o)
      : document.addEventListener("DOMContentLoaded", o, { once: !0 });
  }
  function M(t) {
    let e = /url\(\s*["']?((?:chrome|moz)-extension:\/\/[^)"']+)["']?\s*\)/g,
      n = new Set(),
      r;
    for (; (r = e.exec(t)) !== null;) {
      let o = r[1];
      if (n.has(o)) continue;
      n.add(o);
      let a = new Image();
      a.src = o;
    }
  }
  var s = v;
  async function k(t) {
    let e = chrome.runtime.getURL(t);
    return await (await fetch(e)).text();
  }
  var E = k;
  var A = ["solid", "firewatch", "red_moon"],
    I = {
      solid: "palette",
      firewatch: "palette_firewatch",
      red_moon: "palette_red_moon",
    };
  function B(t) {
    for (let e of A) if (I[e] === t) return e;
    return null;
  }
  function S(t) {
    return B(t) !== null;
  }
  function _(t) {
    if (!t || typeof t != "object") return null;
    let e = t,
      n = {};
    for (let r of ["bg", "text", "accent"]) {
      let o = e[r];
      if (typeof o != "string" || !/^#[0-9a-f]{6}$/i.test(o.trim()))
        return null;
      n[r] = o.trim().toLowerCase();
    }
    return n;
  }
  var R = "LBThemeCSS",
    l = "LBThemeCSSVersion",
    U = "LBThemeName";
  var N = "LBThemePalette",
    O = {
      dark: "content/static/themes/dark.css",
      firewatch: "content/static/themes/firewatch.css",
      red_moon: "content/static/themes/red_moon.css",
      palette: "content/static/themes/dark.css",
      palette_firewatch: "content/static/themes/firewatch.css",
      palette_red_moon: "content/static/themes/red_moon.css",
    };
  function F(t) {
    return t ? (O[t] ?? null) : null;
  }
  function L() {
    try {
      return chrome.runtime.getManifest().version;
    } catch {
      return "";
    }
  }
  function u(t) {
    try {
      return localStorage.getItem(t);
    } catch {
      return null;
    }
  }
  function b(t, e) {
    try {
      localStorage.setItem(t, e);
    } catch {}
  }
  function D(t) {
    let e = L();
    return e ? u(t) !== e : !1;
  }
  function y(t) {
    let e = L();
    e && b(t, e);
  }
  async function H(t) {
    return (await E(t)).replace(
      /chrome-extension:\/\/<extension-id>\//g,
      chrome.runtime.getURL(""),
    );
  }
  function Y() {
    let t = u(N);
    if (!t) return null;
    try {
      return _(JSON.parse(t));
    } catch {
      return null;
    }
  }
  async function w(t, e) {
    if (!D(l)) return !1;
    let n = u(U),
      r = F(n);
    if (!n || !r) return (y(l), !1);
    if (S(n) && !e) return !1;
    try {
      let o = e ? await e(n, Y()) : await H(r);
      return o ? (b(R, o), y(l), t(o), !0) : !1;
    } catch {
      return !1;
    }
  }
  var G = "LBCustomBackground";
  var $ = "LBCustomBackgroundDim";
  var i = "LB-custom-bg-rules",
    d = "LB-custom-bg-dim",
    g = "data-lb-picture",
    x = "data-lb-full",
    q = [
      "background-image",
      "background-size",
      "background-position",
      "background-attachment",
      "background-repeat",
    ];
  var T = "LBCustomBackgroundFull",
    C = "LBCustomBackgroundFullId";
  var h,
    m = !1;
  function p() {
    document.querySelectorAll("style.LB-custom-bg").forEach((c) => c.remove());
    let t = localStorage.getItem(G);
    if (!t) {
      Q();
      return;
    }
    let e = K(t),
      n = h?.id === e ? h : void 0,
      r = n?.url ?? null;
    X(W());
    let o = document.querySelector(`style.${i}`);
    if (o?.getAttribute(g) === e && (o.hasAttribute(x) || !r)) return;
    document.querySelectorAll(`style.${i}`).forEach((c) => c.remove());
    let a = document.createElement("style");
    (a.classList.add(i),
      a.setAttribute(g, e),
      r && a.setAttribute(x, ""),
      (a.textContent = J(r ?? t)),
      (document.head ?? document.documentElement).appendChild(a),
      n || z(e));
  }
  function K(t) {
    return `${t.length}:${t.slice(-24)}`;
  }
  async function z(t) {
    if (m) return;
    m = !0;
    let e = null;
    try {
      let n = await chrome.storage.local.get([T, C]),
        r = n[T],
        o = n[C];
      typeof r == "string" && (o === void 0 || o === t) && (e = r);
    } catch {
    } finally {
      m = !1;
    }
    ((h = { id: t, url: e }),
      e &&
        (await new Promise((n) =>
          requestAnimationFrame(() => setTimeout(n, 0)),
        ),
        document.querySelector(`style.${i}`)?.getAttribute(g) === t && p()));
  }
  function W() {
    let t = localStorage.getItem($);
    if (t === null) return 25;
    let e = Number(t);
    return Number.isFinite(e) ? Math.min(100, Math.max(0, Math.round(e))) : 25;
  }
  function J(t) {
    return `html::before {
    content: "" !important;
    position: fixed !important;
    inset: 0 !important;
    z-index: -1 !important;
    pointer-events: none !important;
    background-image: ${`url("${t}")`} !important;
    background-size: cover !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    background-color: transparent !important;
}
html,
body {
    background-color: transparent !important;
    background-image: none !important;
}
.wrapper,
.wrapper-content,
.wrapper-footer,
.content-orders {
    background-color: transparent !important;
    background-image: none !important;
}
#header,
.bg-light-color,
.bg-light-color #header,
.navbar-default {
    background-color: transparent !important;
    background-image: none !important;
}`;
  }
  function V(t) {
    return `body {
    isolation: isolate !important;
}
body::before {
    content: "" !important;
    position: fixed !important;
    inset: 0 !important;
    background-color: rgba(0, 0, 0, ${(Math.min(100, Math.max(0, t)) / 100).toFixed(2)}) !important;
    pointer-events: none !important;
    z-index: -1 !important;
}`;
  }
  function X(t) {
    let e = V(t),
      n = document.querySelector(`style.${d}`);
    if (n) {
      n.textContent !== e && (n.textContent = e);
      return;
    }
    let r = document.createElement("style");
    (r.classList.add(d),
      (r.textContent = e),
      (document.head ?? document.documentElement).appendChild(r));
  }
  var j = new Set([
    "firewatch",
    "red_moon",
    "palette_firewatch",
    "palette_red_moon",
  ]);
  function P(t) { return true; }
  function Q() {
    document
      .querySelectorAll(`style.LB-custom-bg, style.${i}, style.${d}`)
      .forEach((e) => e.remove());
    let t = document.documentElement;
    if (t) for (let e of q) t.style.removeProperty(e);
  }
  function Z(t) {
    let e;
    try {
      e = chrome.runtime.getURL("");
    } catch {
      return t;
    }
    if (!e) return t;
    let n = t.replace(/(?:chrome|moz)-extension:\/\/[^/"')\s]+\//g, e);
    if (n !== t)
      try {
        localStorage.setItem("LBThemeCSS", n);
      } catch {}
    return n;
  }
  function tt() {
    let t = localStorage.getItem("LBThemeCSS");
    (t && s(Z(t)), w(s));
    let e = localStorage.getItem("LBThemeName");
    p();
  }
  var f = tt;
  document.location.host !== "support.funpay.com" && et();
  function et() {
    try {
      f();
    } catch {
      document.addEventListener(
        "DOMContentLoaded",
        () => {
          try {
            f();
          } catch {}
        },
        { once: !0 },
      );
    }
  }
})();
