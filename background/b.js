"use strict";
  function getLocalAuthUser(appData) {
    let name = (appData && (appData.userName || appData.username)) || "METAWKA";
    let id = (appData && (appData.userId || appData.id)) || 1;
    return {
      id: id,
      displayName: name,
      email: `${String(name).toLowerCase()}@local`,
      funpayBinding: {
        funpayUserId: id,
        funpayUsername: name
      },
      linkedProviders: ["telegram"],
      subscriptions: [
        {
          planKey: "premium",
          status: "active",
          grantedAt: "2024-01-01T00:00:00.000Z",
          expiresAt: null
        },
        {
          planKey: "community",
          status: "active",
          grantedAt: "2024-01-01T00:00:00.000Z",
          expiresAt: null
        }
      ],
      features: [
        "welcome_message",
        "review_reply",
        "ai_review_reply",
        "auto_reply",
        "order_confirm_reply",
        "real_lot_prices",
        "lot_translate_en",
        "custom_notify_sounds",
        "custom_theme_background",
        "hide_locked_features",
        "nickname_color",
        "custom_notify_sound_upload",
        "custom_order_sound",
        "privacy_mode",
        "export_orders",
        "support_confirm_tickets",
        "unconfirmed_orders_copy",
        "order_charts",
        "purchases_stats",
        "finance_stats",
        "lot_transfer",
        "quick_copy_order_id",
        "fast_messages",
        "lot_clone",
        "lot_cost_price",
        "section_commission",
        "lot_ai_generate",
        "bulk_lot_edit"
      ],
      nicknameColor: null,
      nicknameSelection: { color: null, font: null, effect: null },
      trialEndsAt: null,
      trialTest: false
    };
  }

  async function callCustomAi(prompt, systemPrompt) {
    try {
      let cfg = await new Promise(res => { try { chrome.storage.local.get("customAiConfig", items => res(items?.customAiConfig || null)); } catch { res(null); } });
      if (!cfg || (!cfg.apiKey && !cfg.endpoint)) {
        return null;
      }
      let endpoint = (cfg.endpoint || "https://api.openai.com/v1").replace(/\/+$/, "");
      let url = endpoint.endsWith("/chat/completions") ? endpoint : `${endpoint}/chat/completions`;
      let model = cfg.model || "gpt-4o-mini";
      let headers = { "Content-Type": "application/json" };
      if (cfg.apiKey) headers["Authorization"] = `Bearer ${cfg.apiKey}`;

      let resp = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({
          model,
          messages: [
            ...(systemPrompt ? [{ role: "system", content: systemPrompt }] : []),
            { role: "user", content: prompt }
          ],
          temperature: 0.7
        }),
        signal: AbortSignal.timeout(15000)
      });
      if (!resp.ok) {
        d(`customAi HTTP error ${resp.status}`);
        return null;
      }
      let data = await resp.json();
      return data?.choices?.[0]?.message?.content?.trim() || null;
    } catch (err) {
      d(`customAi fetch error: ${err.message}`);
      return null;
    }
  }

(() => {
  async function Ba(e) {
    let n = await chrome.storage.local.get(e);
    return chrome.runtime.lastError
      ? chrome.runtime.lastError
      : e == null
        ? n
        : n[e];
  }
  var u = Ba;
  async function Ha() {
    let e = await u("appData");
    if (!e) throw new Error("App data is not set.");
    return e;
  }
  var qe = Ha;
  async function ja() {
    return await u("tgUsername");
  }
  var zr = ja;
  var Qr = !1,
    Ka = "FunPayLiteBot",
    en = {
      debug: Qr,
      debugDefaultPort: 3e3,
      telegramBotUsername: Qr && null ? null : Ka,
    };
  function tn(e) {
    return "127.0.0.1";
  }
  function Ga(e = "") {
    return tn(e);
  }
  var rn = Ga;
  function Wa(e = "", n) {
    return "http://127.0.0.1";
  }
  var x = Wa;
  function Xa(e = {}) {
    return e;
  }
  function Ya(e, n = {}) {
    if (typeof e === "string" && (e.includes("funpaylitebot.com") || e.includes("127.0.0.1") || e.includes("localhost"))) {
      return Promise.resolve(new Response(JSON.stringify({ ok: true, data: {} }), { status: 200, headers: { "Content-Type": "application/json" } }));
    }
    return fetch(e, { ...n, headers: Xa(n.headers ?? {}) });
  }
  var P = Ya;
  async function Ja(e, n, r = !1) {
    let t = {};
    return (
      r ? (t = n) : (t[e] = n),
      await chrome.storage.local.set(t),
      chrome.runtime.lastError ? chrome.runtime.lastError : !0
    );
  }
  var y = Ja;
  function qa(e, n = !1) {
    let r = new Date(),
      t = r.getDate().toString(),
      o = (r.getMonth() + 1).toString(),
      a = r.getFullYear().toString(),
      s = r.getHours().toString(),
      i = r.getMinutes().toString(),
      c = r.getSeconds().toString();
    (t.toString().length == 1 && (t = `0${t}`),
      o.toString().length == 1 && (o = `0${o}`),
      s.toString().length == 1 && (s = `0${s}`),
      i.toString().length == 1 && (i = `0${i}`),
      c.toString().length == 1 && (c = `0${c}`));
    let l = `>[${t}.${o}.${a}] [${s}:${i}:${c}] >LB: ${e}`,
      m = globalThis.LB_Debug;
    (n ? console.error(l) : m && console.log(l),
      typeof e == "object" && m && console.log(e));
  }
  var d = qa;
  var za = 30,
    he = class extends Error {
      constructor(r, t) {
        super(t);
        this.status = r;
        this.name = "RefreshRejected";
      }
      status;
    },
    nn = "AUTH_UNAVAILABLE",
    K = {
      access: "accessToken",
      refresh: "refreshToken",
      refreshExp: "refreshTokenExpiresAt",
      user: "authUser",
    };
  async function fe(e) {
    await chrome.storage.local.set({
      [K.access]: e.accessToken,
      [K.refresh]: e.refreshToken,
      [K.refreshExp]: e.refreshTokenExpiresAt,
    });
  }
  async function W() {
    await chrome.storage.local.remove([
      K.access,
      K.refresh,
      K.refreshExp,
      K.user,
    ]);
  }
  async function _(e) {
    e === null ? await chrome.storage.local.remove(K.user) : await y(K.user, e);
  }
  async function V() {
    let uData = await u(K.user);
    if (uData && uData.subscriptions && uData.subscriptions.some(s => s.planKey === "premium")) {
      return uData;
    }
    let appData = await u("appData").catch(() => null);
    let localUser = getLocalAuthUser(appData);
    await y(K.user, localUser);
    return localUser;
  }
  function on(e) {
    try {
      let [, n] = e.split(".");
      if (!n) return null;
      let r = atob(n.replace(/-/g, "+").replace(/_/g, "/")),
        t = JSON.parse(r);
      return typeof t.exp == "number" ? t.exp : null;
    } catch {
      return null;
    }
  }
  function Za(e) {
    let n = on(e);
    if (n === null) return !0;
    let r = Math.floor(Date.now() / 1e3);
    return n <= r + za;
  }
  function Qa(e) {
    let n = on(e);
    return n !== null && n > Math.floor(Date.now() / 1e3);
  }
  var Ae = null;
  async function an(e, n) {
    return (
      Ae ||
      ((Ae = (async () => {
        try {
          let r = await e(n);
          return (await fe(r), r);
        } finally {
          Ae = null;
        }
      })()),
      Ae)
    );
  }
  async function oe(e) {
    let n = await u(K.access),
      r = await u(K.refresh);
    if (n && !Za(n)) return n;
    if (!r) return (await W(), null);
    try {
      return (await an(e, r)).accessToken;
    } catch (t) {
      if ((d(`Token refresh failed: ${t.message}`), t instanceof he))
        return (await W(), await _(null), null);
      if (n && Qa(n)) return n;
      throw new Error(nn);
    }
  }
  async function ye(e) {
    let n = await u(K.refresh);
    if (!n) return null;
    try {
      return await an(e, n);
    } catch (r) {
      if ((d(`Force refresh failed: ${r.message}`), r instanceof he))
        return null;
      throw new Error(nn);
    }
  }
  var es = new Set([400, 401, 403]);
  async function X(e) {
    return { accessToken: "local-token", refreshToken: "local-refresh" };
  }
  var ts = "e2a51f7f6ac34757847c8ab33bc7e885cf3957042ef4ff8bdcee2be087d75881",
    cn = en.debug && null ? null : ts;
  var Ze = null;
  async function rs() {
    if (Ze) return Ze;
    let e = ns(cn);
    if (e.length !== 32)
      throw new Error(
        `REPORT_AES_KEY_HEX must decode to 32 bytes (got ${e.length})`,
      );
    let n = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    return (
      (Ze = await crypto.subtle.importKey("raw", n, { name: "AES-GCM" }, !1, [
        "encrypt",
      ])),
      Ze
    );
  }
  async function Pe(e) {
    let n = await rs(),
      r = crypto.getRandomValues(new Uint8Array(12)),
      t = new TextEncoder().encode(e),
      o = r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength),
      a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength),
      s = await crypto.subtle.encrypt({ name: "AES-GCM", iv: o }, n, a);
    return `2:${ln(r)}.${ln(new Uint8Array(s))}`;
  }
  function ln(e) {
    let n = "";
    for (let r = 0; r < e.length; r++) n += String.fromCharCode(e[r]);
    return btoa(n);
  }
  function ns(e) {
    if (e.length % 2 !== 0)
      throw new Error(
        "REPORT_AES_KEY_HEX must have an even number of hex chars",
      );
    let n = new Uint8Array(e.length / 2);
    for (let r = 0; r < n.length; r++) {
      let t = parseInt(e.slice(r * 2, r * 2 + 2), 16);
      if (Number.isNaN(t))
        throw new Error(
          `REPORT_AES_KEY_HEX has a non-hex char near index ${r * 2}`,
        );
      n[r] = t;
    }
    return n;
  }
  async function os() {
    return null;
  }
  function as(e, n) { return !0; }
  async function ss(e) {}
  var un = os;
  function is(e) { return new Promise((n) => setTimeout(n, e)); }
  var M = is;
  async function cs() {}
  var dn = cs;
  async function ls() {
    setInterval(us, 2e4);
    let e = "keepAlive";
    (await chrome.alarms.get(e)) ||
      (await chrome.alarms.create(e, { periodInMinutes: 0.5 }),
      d("Keep alive alarm created"));
  }
  function fn() {
    (d("Keep alive alarm fired (startup)"), chrome.runtime.getPlatformInfo());
  }
  function us() {
    (d("Keep alive alarm fired (interval)"), chrome.runtime.getPlatformInfo());
  }
  function mn() {
    (d("Keep alive alarm fired (alarm)"), chrome.runtime.getPlatformInfo());
  }
  var pn = ls;
  function ds() {
    setInterval(chrome.runtime.reload, 288e5);
  }
  var gn = ds;
  function fs() {
    pn();
  }
  var hn = fs;
  async function ms() {
    let e = await chrome.storage.local.get("debug");
    !e || !e.debug ? (globalThis.LB_Debug = !1) : (globalThis.LB_Debug = !0);
  }
  var yn = ms;
  async function vt() {
    await chrome.storage.local.remove(["sales", "firstOrderId", "lastOrderId"]);
  }
  function ps(e, n = !1) {
    let r = new Date(),
      t = r.getDate().toString(),
      o = (r.getMonth() + 1).toString(),
      a = r.getFullYear().toString(),
      s = r.getHours().toString(),
      i = r.getMinutes().toString(),
      c = r.getSeconds().toString();
    (t.toString().length == 1 && (t = `0${t}`),
      o.toString().length == 1 && (o = `0${o}`),
      s.toString().length == 1 && (s = `0${s}`),
      i.toString().length == 1 && (i = `0${i}`),
      c.toString().length == 1 && (c = `0${c}`));
    let l = `>[${t}.${o}.${a}] [${s}:${i}:${c}] >LB: ${e}`;
    (n ? console.error(l) : console.log(l),
      typeof e == "object" && console.log(e));
  }
  var S = ps;
  async function Ot(e) {
      }
  var ve = "installId",
    Qe = null;
  function Oe() {
    return Qe || ((Qe = gs()), Qe);
  }
  async function gs() {
    try {
      let r = (await chrome.storage.local.get(ve))[ve];
      if (typeof r == "string" && r.length > 0) return r;
    } catch {}
    let e = crypto.randomUUID();
    try {
      await chrome.storage.local.set({ [ve]: e });
      let r = (await chrome.storage.local.get(ve))[ve];
      if (typeof r == "string" && r.length > 0) return r;
    } catch {}
    return e;
  }
  async function Ie() {
    try {
      let n = (await u("appData"))?.userId,
        r = typeof n == "number" ? n : Number(n);
      return Number.isFinite(r) && r > 0 ? r : void 0;
    } catch {
      return;
    }
  }
  function wn(e) {
    (e.reason !== "install" && e.reason !== "update") ||
      (async () => {
        try {
          let n = await Oe(),
            r = chrome.runtime.getManifest().version,
            t = await Ie();
          (await Ot({
            installId: n,
            reason: e.reason,
            version: r,
            previousVersion: e.previousVersion,
            funpayUserId: t,
          }),
            S(`Lifecycle: ${e.reason} event sent (v${r}).`));
        } catch (n) {
          S(`Lifecycle: install-event send failed: ${n.message}.`);
        }
      })();
  }
  async function et() {
      }
  async function hs() {
    (await yn(), vt().catch(() => {}), hn(), et().catch(() => {}));
  }
  var bn = hs;
  var kn = 4,
    we = 2e3,
    ys = 5e3,
    It = 3e4,
    ws = 7,
    be = kn,
    tt = Date.now(),
    Ue = 0,
    rt = 0,
    Sn = Promise.resolve();
  function En() {
    let e = Date.now();
    e > tt && ((be = Math.min(kn, be + (e - tt) / we)), (tt = e));
  }
  async function bs() {
    let e = Sn,
      n;
    Sn = new Promise((r) => (n = r));
    try {
      await e;
      let r = Ue - Date.now();
      for (; r > 0;) (await M(r), (r = Ue - Date.now()));
      (En(), be < 1 && (await M(Math.ceil((1 - be) * we)), En()), (be -= 1));
    } finally {
      n();
    }
  }
  function Ss() {
    rt += 1;
    let e = Math.min(It, ys * rt);
    ((Ue = Math.max(Ue, Date.now() + e)),
      (be = 0),
      (tt = Ue),
      S(`FunPay 429 - global cooldown ${e}ms (consecutive ${rt}).`));
  }
  async function Es(e, n = {}, r = ws) {
    let t = 0,
      o = 0;
    for (; t < r;) {
      (o > 0 && (await M(o), (o = 0)), await bs(), t++);
      let a;
      try {
        a = await fetch(e, n);
      } catch (s) {
        (S(`FunPay fetch network error (try ${t}): ${s?.message ?? s}`),
          (o = Math.min(It, Math.max(we, (o || we) * 2))));
        continue;
      }
      if (a.status === 429) {
        Ss();
        continue;
      }
      if (a.status === 401 || a.status === 403 || a.status === 404)
        throw new Error(`Request failed with status ${a.status}`);
      if (a.status >= 400) {
        (S(`FunPay unexpected status ${a.status} (try ${t}).`),
          (o = Math.min(It, Math.max(we, (o || we) * 2))));
        continue;
      }
      return ((rt = 0), a);
    }
    throw new Error("Max retries reached");
  }
  var I = Es;
  function ks() {
    return "funpay.com";
  }
  var nt = ks;
  function Rs() {
    return `https://${nt()}`;
  }
  var v = Rs;
  async function Ts(e, n) {
    try {
      let t = `${v()}/lots/raise`,
        o = new URLSearchParams();
      (o.append("game_id", e), o.append("node_id", n));
      let a = {
          accept: "*/*",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-requested-with": "XMLHttpRequest",
        },
        s = { method: "POST", body: o, headers: a },
        i = await I(t, s),
        c = await i.json();
      if (c.modal) {
        let l = new RegExp('value="(.*?)"', "g");
        ([...c.modal.matchAll(l)].forEach((p) => {
          o.append("node_ids[]", p[1]);
        }),
          (s = { method: "POST", body: o, headers: a }),
          (i = await I(t, s)),
          (c = await i.json()));
      }
      return { success: !0, msg: c.msg };
    } catch (r) {
      return (d(`Error while raising lot: ${r}`), { success: !1 });
    }
  }
  var _e = Ts;
  function xs(e) {
    let n = /\d+/,
      r = Number(e.match(n));
    return isNaN(r) || r == 0 ? null : r;
  }
  var ot = xs;
  function Cs(e) {
    let r = new Date().getTime();
    if (!e) return r + 6e4;
    if (typeof e == "number") return r + e;
    let t = {
        en: { hour: "hour", minute: "minute", second: "second" },
        ru: { hour: "час", minute: "минут", second: "секунд" },
        uk: { hour: "годин", minute: "хвилин", second: "секунд" },
      },
      o = [
        { unit: "hour", multiplier: 36e5, fallback: 18e5 },
        { unit: "minute", multiplier: 6e4, fallback: 6e4 },
        { unit: "second", multiplier: 1e3, fallback: 3e4 },
      ];
    for (let a in t)
      for (let { unit: s, multiplier: i, fallback: c } of o)
        if (e.includes(t[a][s])) {
          let l = ot(e);
          return l == null ? r + c : r + (l - (s === "hour" ? 1 : 0)) * i;
        }
    return r + 6e4;
  }
  var Se = Cs;
  async function As(e) {
    try {
      let n = await u("userCategories");
      if (!n || !n.length) throw new Error("No categories found");
      for (let r = 0; r < n.length; r++)
        try {
          if ((n[r].time || (n[r].time = 0), Date.now() < n[r].time)) continue;
          let o = await _e(n[r].game_id, n[r].node_id);
          if (!o.success) {
            (d(
              `Cannot raise lot '${n[r].node_name} ${n[r].game_name}': ${o.msg}`,
            ),
              (n[r].time = Se("")));
            continue;
          }
          (["Подождите", "Please wait", "Зачекайте"].some((i) =>
            o.msg.includes(i),
          ) &&
            ((n[r].time = Se(o.msg)),
            d(
              `Lots in categoty '${n[r].node_name} ${n[r].game_name}' is too early to up. Next try: ${o.msg} / ${n[r].time} / ${new Date(n[r].time).toString()}`,
            )),
            ["подняты", "raised", "підняті"].some((i) => o.msg.includes(i)) &&
              ((o = await _e(n[r].game_id, n[r].node_id)),
              (n[r].time = Se(o.msg)),
              d(
                `Lots in categoty '${n[r].node_name} ${n[r].game_name}' upped successfully. Next up: ${o.msg} / ${n[r].time} / ${new Date(n[r].time).toString()}`,
              ),
              e?.({ nodeName: n[r].node_name, gameName: n[r].game_name })));
        } catch (t) {
          d(`Error while raising lot: ${t}`);
        }
      await y("userCategories", n);
    } catch (n) {
      d(`Error while raising lots if time: ${n}`);
    }
  }
  var Rn = As;
  async function Ut(e) {
    try {
      let n = nt(),
        r = await chrome.tabs.query({ url: [`*://${n}/*`, `*://*.${n}/*`] });
      if (!r.length) return;
      let t = r.find((o) => o.active) ?? r[r.length - 1];
      if (t?.id == null) return;
      await chrome.tabs
        .sendMessage(t.id, {
          target: "content",
          method: "raiseNotify",
          payload: e,
        })
        .catch(() => {});
    } catch {}
  }
  async function Ps(e) {
    return "getContexts" in chrome.runtime
      ? !!(
          await chrome.runtime.getContexts({
            contextTypes: ["OFFSCREEN_DOCUMENT"],
            documentUrls: [e],
          })
        ).length
      : (await self.clients.matchAll()).some((t) =>
          t.url.includes(chrome.runtime.id),
        );
  }
  var at = Ps;
  var _t = "offscreen/offscreen.html",
    Ne = null,
    vs = 6e4,
    st = null;
  async function Os() {
    st = null;
    try {
      let e = chrome.runtime.getURL(_t);
      (await at(e)) && (await chrome.offscreen.closeDocument());
    } catch {}
  }
  function Is() {
    (st && clearTimeout(st),
      (st = setTimeout(() => {
        Os();
      }, vs)));
  }
  async function Us() {
    let e = chrome.runtime.getURL(_t),
      n = await at(e);
    if ((Is(), n)) return !1;
    if (Ne) await Ne;
    else {
      Ne = chrome.offscreen.createDocument({
        url: _t,
        reasons: ["DOM_PARSER"],
        justification: "Needs to parse DOM and extract information",
      });
      try {
        await Ne;
      } catch (r) {
        if (!(await at(e))) throw r;
      } finally {
        Ne = null;
      }
    }
    return !0;
  }
  var Tn = Us;
  var _s = {
    navbarOwnProfileLink: [
      'a.user-link-dropdown[href*="/users/"]',
      '.navbar-right a[href*="/users/"]',
    ],
    currencyMenuItem: [".menu-item-currencies"],
    modalDialog: [".modal-dialog"],
    modalHeader: [".modal-header"],
    modalTitle: [".modal-title"],
    modalBody: [".modal-body"],
    lotLocalisedTextFields: [
      'input[name*="fields[summary][ru]"]',
      'input[name*="fields[summary][en]"]',
      'textarea[name*="fields[desc][ru]"]',
      'textarea[name*="fields[desc][en]"]',
      'textarea[name*="fields[payment_msg][ru]"]',
      'textarea[name*="fields[payment_msg][en]"]',
      'input[name*="fields[summary_ru]"]',
      'input[name*="fields[summary_en]"]',
      'textarea[name*="fields[desc_ru]"]',
      'textarea[name*="fields[desc_en]"]',
      'textarea[name*="fields[payment_msg_ru]"]',
      'textarea[name*="fields[payment_msg_en]"]',
      ".lot-field[data-locale][data-id]",
    ],
    pageHeader: [
      "h1.page-header",
      ".page-header",
      ".page-header h1",
      ".page-content-full h1",
    ],
    offerEditFormFields: [
      "form input[name]",
      "form textarea[name]",
      "form select[name]",
      "option[selected]",
      "form select[name] option",
    ],
    offerPriceField: ['input[name="price"]'],
    offerIdField: ['input[name="offer_id"]'],
    csrfTokenField: ['input[name="csrf_token"]', '[name="csrf_token"]'],
    offerActiveField: ['input[name="active"]'],
    offerEditForm: ["form.form-offer-editor"],
    pageNotice: [".alert", ".page-content h1", "h1"],
    secretsField: ['textarea[name="secrets"]', '[name="secrets"]'],
    formCreatedAtField: ['[name="form_created_at"]'],
    offerAmountField: ['input[name="amount"]', '[name="amount"]'],
    lotFieldsMultilingual: [".lot-fields-multilingual"],
    formGroup: [".form-group"],
    autoDeliveryField: [
      'input[name="auto_delivery"]',
      '[name="auto_delivery"]',
    ],
    lotFieldWrapper: [".lot-field[data-locale][data-id]"],
    controlLabel: ["label.control-label", ".control-label"],
    localeTabsNav: [".lot-fields-multilingual ul.nav.nav-tabs"],
    localeSwitcherTab: [
      '.js-locale-switcher[data-locale="ru"]',
      "li.js-locale-switcher",
      ".js-locale-switcher a",
    ],
    priceCurrencyFeedback: [".form-control-feedback"],
    backLink: [".back-link .inside", "a.back-link", ".page-header .back-link"],
    lotFormSubmitControl: ['button[type="submit"]', 'input[type="submit"]'],
    lotParamSelect: ["form select"],
    supportTicketCsrfToken: ['input[name="ticket[_token]"]'],
    offerRow: ["a.tc-item[data-offer]", 'a.tc-item[href*="/lots/offer"]'],
    offerRowOnTradePage: [".showcase-table a.tc-item[data-offer]"],
    offerRowOnProfile: ['.showcase-table a.tc-item[href*="/lots/offer"]'],
    tableRow: ["a.tc-item", ".tc-item"],
    offerId: ["[data-offer]"],
    offerPriceCell: [".tc-price"],
    offerDescriptionCell: [".tc-desc-text", ".tc-desc"],
    offerTable: [".showcase-table"],
    offerTableHeaderRow: [".tc-header"],
    rowDeleted: ["a.tc-item.danger", "a.tc-item.deleted"],
    offerPriceRawValue: [".tc-price[data-s]"],
    offerIconsBar: [".sc-offer-icons"],
    showcaseRowSellerLink: [
      ".tc-user .avatar-photo[data-href]",
      ".tc-user [data-href]",
    ],
    showcaseRowSellerName: [".tc-user .media-user-name"],
    offerAmountCell: [".tc-amount"],
    autoDeliveryIcon: [".auto-dlv-icon"],
    chipsShowcaseRow: ['a.tc-item[href*="/chips/offer"]'],
    profileOfferCard: [".offer"],
    rowDeactivated: ["a.tc-item.warning", "a.tc-item.deactivated"],
    priceCurrencyUnit: [".unit"],
    offerPriceValueDiv: [".tc-price > div"],
    promotedOfferRow: ["a.tc-item.offer-promo", ".offer-promo"],
    orderPageHeader: ["h1.page-header-params"],
    ordersContent: [".content-orders"],
    ordersTable: [".orders-table"],
    refundButton: [".btn-refund"],
    orderFilterOrderId: ['input[name="id"]'],
    orderFilterBuyer: ['input[name="buyer"]'],
    orderFilterState: ['select[name="state"]'],
    orderFilterGame: ['select[name="game"]'],
    reviewChromeBlocks: [
      ".review-item-detail",
      ".review-item-date",
      ".review-item-answer",
      ".review-compiled-review",
    ],
    orderIdCell: [".tc-order"],
    chatLastMessagePreview: [".contact-item-message"],
    orderHeaderLineBreak: ["h1.page-header-params br"],
    orderStatusRowClass: ["a.tc-item.warning", "a.tc-item.info"],
    orderRowDescription: [
      "a.tc-item .order-desc div",
      "a.tc-item .order-desc",
      ".order-desc",
    ],
    orderSubcategoryLabel: ["a.tc-item .text-muted"],
    orderReviewBlock: [".order-review"],
    reviewRating: [".order-review .rating > div"],
    reviewHeader: [".review-item-head"],
    orderLotTitleFallback: [
      ".order-desc-title",
      ".tc-desc-text",
      ".order-title",
    ],
    supportTicketOrderNumbers: ['input[name="ticket[fields][2]"]'],
    profileSectionTitleLink: [".offer-list-title a", 'h3 a[href*="/lots/"]'],
    greyOffersBand: [".bg-light-color", ".bg-light-color .container"],
    profileHeaderCols: [".profile-header-cols"],
    profileHeaderHeading: ["h1.mb40"],
    profileHeaderNickname: ["h1.mb40 .mr4", "h1 .mr4"],
    userNameLink: [".media-user-name", ".media-user-name span"],
    navbarOwnUserName: [".user-link-name"],
    paramItemRow: [".param-list .param-item", ".param-item"],
    offerImagesList: ["ul.attachments-list", ".attachments-list"],
    offerImageLink: ["a.attachments-thumb[href]"],
    offerEditImagesField: ['input[name="fields[images]"]'],
    offerEditImagesAdd: [".attachments-new"],
    offerOrderForm: ['form[action*="/orders/new"]'],
    offerBuyButton: ['form[action*="/orders/new"] button[type="submit"]'],
    offerBackLink: ["a.js-back-link", ".back-link a"],
    offerPriceGuard: ['input[name="price_guard"]'],
    offerPaymentMethodOption: ['select[name="method"] option[data-factors]'],
    offerSellerChat: [".chat[data-seller]", "[data-seller]"],
    lotFieldsConfig: [".lot-fields[data-fields]"],
    lotField: [".lot-field[data-id]"],
    profileDataColumn: [".profile-data-container"],
    profileChatColumn: [".chat-profile-container"],
    profileOnlineStatusPill: [".media-user-status"],
    profileHeaderContainer: [".container.profile-header", ".profile-header"],
    profileRoot: [".profile"],
    buyerProfileHref: [
      ".media-user-name span[data-href]",
      ".media-user-name span",
    ],
    chatMessageAuthorLink: [".chat-msg-author-link"],
    chatHeaderUserName: [".chat-header .media-user-name"],
    chatComposerForm: [".chat-form"],
    chatComposerTextarea: [".chat-form textarea"],
    chatComposerSubmit: [".chat-form button[type=submit]"],
    chatComposerSendColumn: [".chat-form-btn"],
    chatMessageList: [".chat-message-list"],
    chatSidebar: [".chat-detail"],
    chatMessageText: [".chat-msg-text"],
    chatMessageBody: [".chat-msg-body"],
    chatListItem: ["a.contact-item"],
    chatId: ["a.contact-item[data-id]"],
    chatLastMessageIds: ["data-node-msg", "data-user-msg"],
    chatUnreadFlag: ["a.contact-item.unread"],
    chatStaffBadge: [
      ".chat-msg-author-label.label-success",
      ".chat-msg-author-label.label-primary",
      ".chat-msg-author-label.label-default",
    ],
    balancePageMountFallbacks: [
      ".content-account",
      ".content-with-menu .page-content",
      ".page-content",
    ],
    financeTable: [".tc-finance"],
    navbarBalanceBadge: [".badge-balance"],
    balancePageValue: [".balances-value"],
    balancesHeader: ["h1.balances-header"],
    transactionRow: [".tc-item[data-transaction]"],
    transactionDetailsCell: ["table.transaction-values td"],
    transactionDetailsAgo: [".text-muted"],
    transactionStatusClass: [
      ".transaction-status-cancel",
      ".transaction-status-waiting",
    ],
    chipsGridForm: ["form.form-ajax-simple"],
    notFoundLeadContent: [".lead", "p.lead"],
    pageWrapper: [".wrapper"],
    appDataKeys: ["userId", "userName"],
    pageContentFull: [".page-content-full"],
    bodyAppData: ["body[data-app-data]"],
    siteHeader: ["#header"],
    wrapperContent: [".wrapper-content"],
    tradePageHeading: ["h1.page-header.page-header-no-hr"],
    wrapperFooter: [".wrapper-footer"],
    lightThemeBodyClass: [".bg-light-color", ".bg-light-color #header"],
    navbarRightLogged: ["ul[class = 'nav navbar-nav navbar-right logged']"],
    navbarLoginLink: ["a.menu-item-login"],
    rowTitleCell: [".tc-title"],
    navbarDefault: [".navbar-default"],
    gameSectionList: ["ul.list-inline", "ul.list-inline[data-id]"],
    offerServerCell: [".tc-server"],
    sectionTypeAttr: [".showcase-table[data-section-type]"],
    pendingSalesBadge: [".badge-trade"],
    chatNotificationCounter: [
      "#chat-notification[data-message]",
      "#chat-notification",
    ],
    payoutRequisiteCell: [".tc-payment-number"],
    dateCell: [".tc-date-time"],
    paginationCursorInput: ["input[type='hidden'][name='continue']"],
    userAvatar: [".avatar-photo"],
    appConfigAttribute: ["body[data-app-config]"],
    promoGameCard: [".promo-game-item"],
    gameTitleLink: [".game-title a"],
    supportTicketForm: ['form[name="ticket"]'],
    supportTicketNickname: ['input[name="ticket[fields][1]"]'],
    supportTicketSellerRole: [
      'input[type="radio"][name="ticket[fields][3]"][value="2"]',
    ],
    supportTicketConfirmTopic: [
      'select[name="ticket[fields][5]"] option[value="201"]',
    ],
    supportTicketBody: ['textarea[name="ticket[comment][body_html]"]'],
    supportTicketAttachments: ['input[name="ticket[comment][attachments]"]'],
    fieldLabel: ["label[for]"],
    bootstrapModalParts: [
      ".modal-dialog",
      ".modal-header",
      ".modal-title",
      ".hidden",
    ],
    pageAnchorLink: ["a[href]"],
  };
  function me(e) {
    return _s[e].join(", ");
  }
  function Nt(e) {
    if (!e) return null;
    let n = e.toLowerCase().split("-")[0];
    return n === "ru" || n === "uk" || n === "en" ? n : null;
  }
  function Ns() {
    if (typeof location > "u") return null;
    let e = location.pathname.match(/^\/(ru|uk|en)(?:\/|$)/i);
    return e ? Nt(e[1]) : null;
  }
  function ke(e) {
    let n = e.match(/<html[^>]*\blang\s*=\s*["']([^"']+)["']/i),
      r = Nt(n?.[1]);
    if (r) return r;
    let t = Ns();
    return t || (Nt(chrome.i18n.getUILanguage()) ?? "en");
  }
  var Ed = [
    me("reviewHeader"),
    me("userNameLink"),
    me("profileOnlineStatusPill"),
    me("userAvatar"),
    ".rating",
    me("reviewChromeBlocks"),
    "script",
    "style",
  ].join(", ");
  async function Fs(e, n) {
    return (
      await Tn(),
      chrome.runtime.sendMessage({ target: "offscreen", method: e, payload: n })
    );
  }
  var L = Fs;
  async function Ms() {
    try {
      let e = { method: "GET" },
        n = v(),
        r = await qe(),
        o = await (await I(`${n}/users/${r.userId}/`, e)).text();
      return await L("parseAllUserCategories", { html: o });
    } catch (e) {
      console.log(`Error while getting categories: ${e}`);
    }
  }
  var xn = Ms;
  async function $s() {
    try {
      let e = v(),
        t = await (await I(e, { method: "GET" })).text();
      return await L("parseAllFunPayCategories", { html: t });
    } catch (e) {
      throw new Error(`Error while getting all categories: ${e}`);
    }
  }
  var Cn = $s;
  async function Bs() {
    try {
      d("Updating list of categories...");
      let e = await u("userCategories"),
        n = await xn();
      if (!n || n.length == 0) return;
      let r = await Cn();
      if (!r || r.length == 0) return;
      let o = Object.assign(
        r.filter((a) => n.includes(a.node_id) && a.type === "lots"),
      ).filter(
        (a, s, i) =>
          s ===
          i.findIndex(
            (c) =>
              c.node_id === a.node_id &&
              c.game_id === a.game_id &&
              c.type === a.type,
          ),
      );
      if (e)
        for (let a = 0; a < e.length; a++) {
          let s = e[a],
            i = o.findIndex(
              (c) => c.node_id === s.node_id && c.game_id === s.game_id,
            );
          i !== -1 && s.time && (o[i].time = Number(s.time));
        }
      ((e = o),
        await y("userCategories", e),
        await y("allFunPayCategoriesData", r),
        d("List of categories updated."),
        d(e));
    } catch (e) {
      throw (
        d(`Error while updateUserCategoriesData. ${e}`),
        new Error(`Error while updateUserCategoriesData. ${e}`)
      );
    }
    return !0;
  }
  var ct = Bs;
  async function Hs() {
    let n = 0;
    for (;;)
      try {
        if (!(await u("autoUp"))) {
          await M(5e3);
          continue;
        }
        (Date.now() - n > 12e4 &&
          (d("updateUserCategoriesData tick"), await ct(), (n = Date.now())),
          d("AutoUp tick"));
        let t = (await u("raiseNotifications")) !== !1;
        (await Rn(t ? (o) => Ut({ type: "raised", ...o }) : void 0),
          await M(5e3));
      } catch (r) {
        (d(`Error in autoUpThread loop: ${r}`), await M(5e3));
      }
  }
  var An = Hs;
  async function Le() {
    try {
      return (
        (
          await chrome.cookies.get({
            url: "https://funpay.com",
            name: "golden_key",
          })
        )?.value ?? null
      );
    } catch {
      return null;
    }
  }
  var js = 300 * 1e3,
    pe = null;
  async function B(e = !1) {
    if (!(await Le())) return ((pe = null), null);
    if (!e && pe && Date.now() - pe.at < js) return pe.auth;
    let r = await Ks();
    if (r) return ((pe = { auth: r, at: Date.now() }), await Vs(r), r);
    let t = await u("appData"),
      o = Number(t?.userId);
    if (t?.csrfToken && Number.isFinite(o) && o > 0) {
      let a = { csrfToken: t.csrfToken, userId: o };
      return ((pe = { auth: a, at: Date.now() }), a);
    }
    return null;
  }
  function se() {
    pe = null;
  }
  async function Ks() {
    try {
      let r = (
        (await (await I(`${v()}/`, { method: "GET" }))?.text()) ?? ""
      ).match(/data-app-data="([^"]+)"/);
      if (!r) return null;
      let t = JSON.parse(r[1].replace(/&quot;/g, '"')),
        o = Array.isArray(t) ? t[0] : t,
        a = o?.["csrf-token"],
        s = Number(o?.userId);
      return !a || !Number.isFinite(s) || s <= 0
        ? null
        : { csrfToken: a, userId: s };
    } catch (e) {
      return (d(`getRunnerAuth: page refresh failed: ${e}`), null);
    }
  }
  async function Vs(e) {
    try {
      let n = (await u("appData")) || {};
      await y("appData", { ...n, userId: e.userId, csrfToken: e.csrfToken });
    } catch {}
  }
  function Gs() {
    return Math.floor(Math.random() * 4294967295)
      .toString(16)
      .padStart(8, "0");
  }
  async function Lt(e) {
    let n = new URLSearchParams({
        objects: JSON.stringify([
          { type: "chat_bookmarks", id: e.userId, tag: Gs(), data: !1 },
        ]),
        request: "false",
        csrf_token: e.csrfToken,
      }),
      r = await I(`${v()}/runner/`, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "x-requested-with": "XMLHttpRequest",
        },
        body: n,
      });
    if (!r) return [];
    let o = (await r.json().catch(() => null))?.objects?.find(
      (s) => s.type === "chat_bookmarks",
    )?.data?.html;
    if (!o || typeof o != "string") return [];
    let a = await L("parseChatList", { html: o });
    return Array.isArray(a) ? a : [];
  }
  function lt(e) {
    let n = e == null ? "" : String(e);
    return !n || n.startsWith("⁡") || n.startsWith("⁤") ? n : "⁡" + n;
  }
  async function Dt(e, n, r) {
    let t = lt(n),
      o = new URLSearchParams({
        objects: JSON.stringify([
          {
            type: "chat_node",
            id: e,
            tag: "00000000",
            data: { node: e, last_message: -1, content: "" },
          },
        ]),
        request: JSON.stringify({
          action: "chat_message",
          data: { node: e, last_message: -1, content: t },
        }),
        csrf_token: r.csrfToken,
      }),
      a = await I(
        `${v()}/runner/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
          },
          body: o,
        },
        1,
      );
    if (!a) throw new Error("sendChatMessage: no response");
    let s = await a.json().catch(() => null);
    if (s?.error) {
      let i = new Error(`FunPay runner error: ${s.error}`);
      throw ((i.rejected = !0), i);
    }
  }
  async function Ft(e, n, r) {
    let t = await (await globalThis.fetch(n)).blob(),
      o = new FormData();
    (o.append(
      "file",
      new File([t], "image.png", { type: t.type || "image/png" }),
    ),
      o.append("file_id", "0"));
    let a = await I(
      `${v()}/file/addChatImage`,
      {
        method: "POST",
        headers: { "x-requested-with": "XMLHttpRequest" },
        body: o,
      },
      1,
    );
    if (!a) throw new Error("addChatImage: no response");
    let i = (await a.json().catch(() => null))?.fileId;
    if (!i) throw new Error("addChatImage: no fileId");
    let c = new URLSearchParams({
        objects: JSON.stringify([
          {
            type: "chat_node",
            id: e,
            tag: "00000000",
            data: { node: e, last_message: -1, content: "" },
          },
        ]),
        request: JSON.stringify({
          action: "chat_message",
          data: { node: e, last_message: -1, content: "", image_id: i },
        }),
        csrf_token: r.csrfToken,
      }),
      l = await I(
        `${v()}/runner/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
          },
          body: c,
        },
        1,
      );
    if (!l) throw new Error("sendChatImage: no response");
    let m = await l.json().catch(() => null);
    if (m?.error) throw new Error(`FunPay runner error: ${m.error}`);
  }
  async function q(e, n, r, t) {
    let o = r.trim().length > 0;
    o && (await Dt(n, r, e));
    for (let a = 0; a < t.length; a++)
      try {
        ((o || a > 0) && (await M(500)), await Ft(n, t[a], e));
      } catch (s) {
        d(`welcome: image send failed for ${n}: ${s?.message ?? s}`);
      }
  }
  var ut = (e) => String(e).padStart(2, "0");
  function ee(e, n) {
    let r = new Date(),
      t = r.getHours(),
      o =
        t >= 5 && t < 12
          ? "Доброе утро!"
          : t >= 12 && t < 18
            ? "Добрый день!"
            : "Добрый вечер!",
      a = `${ut(r.getDate())}.${ut(r.getMonth() + 1)}.${r.getFullYear()} ${ut(t)}:${ut(r.getMinutes())}`,
      s = {
        buyername: n.buyerName || "",
        welcome: o,
        date: a,
        lotname: n.lotName || "",
        orderid: n.orderId || "",
        stars: n.stars != null ? String(n.stars) : "",
      };
    return e.replace(
      /\{(buyername|welcome|date|lotname|orderid|stars)\}/gi,
      (i, c) => s[c.toLowerCase()] ?? "",
    );
  }
  var Ws = [
    /(оплатил заказ|has paid for order) #[A-Z0-9]{8}/i,
    /(подтвердил успешное выполнение заказа|has confirmed that order) #[A-Z0-9]{8}/i,
    /(написал отзыв к заказу|has given feedback to the order) #[A-Z0-9]{8}/i,
    /(изменил отзыв к заказу|has edited their feedback to the order) #[A-Z0-9]{8}/i,
    /(удалил отзыв к заказу|has deleted their feedback to the order)/i,
    /(заказ #[A-Z0-9]{8} открыт повторно|order #[A-Z0-9]{8} reopened)/i,
    /(вернул деньги покупателю|returned the money to the buyer)/i,
    /(уважаемые продавцы|dear vendors|dear sellers)/i,
    /(продавец \S+ ответил на отзыв к заказу|the seller \S+ has replied to their feedback to the order) #[A-Z0-9]{8}\./i,
    /(продавец \S+ изменил ответ на отзыв к заказу|the seller \S+ has edited a reply to their feedback to the order) #[A-Z0-9]{8}\./i,
    /(продавец \S+ удалил ответ на отзыв к заказу|the seller \S+ has deleted a reply to their feedback to the order) #[A-Z0-9]{8}\./i,
    /(часть средств по заказу #[A-Z0-9]{8} возвращена покупателю|a part of the funds pertaining to the order #[A-Z0-9]{8} has been refunded)/i,
    /(order #[A-Z0-9]{8} has been reopened\.|has refunded the buyer \S+ on order #[A-Z0-9]{8})/i,
    /(вы можете перейти в discord\. внимание|you can switch to discord\. however)/i,
  ];
  function De(e) {
    return e ? Ws.some((n) => n.test(e)) : !1;
  }
  var Mt = (e) => {
    let n =
      typeof e == "number"
        ? e
        : typeof e == "string" && e.trim() !== ""
          ? Number(e)
          : NaN;
    return Number.isFinite(n) ? n : null;
  };
  async function Fe(e) {
    try {
      let n = `${v()}/chat/history?node=${encodeURIComponent(e)}&last_message=999999999999999999`,
        o = (
          await (
            await I(
              n,
              {
                method: "GET",
                headers: { "x-requested-with": "XMLHttpRequest" },
              },
              2,
            )
          )
            ?.json()
            .catch(() => null)
        )?.chat?.messages;
      if (!Array.isArray(o)) return null;
      let a = o.filter((i) => Mt(i?.id) != null),
        s = await L("parseChatHistory", {
          html: "",
          fragments: a.map((i) => (typeof i.html == "string" ? i.html : "")),
        });
      return !Array.isArray(s) || s.length !== a.length
        ? null
        : a.map((i, c) => ({
            id: Mt(i.id),
            author: Mt(i.author),
            labeled: !!s[c]?.labeled,
            text: String(s[c]?.text ?? ""),
          }));
    } catch {
      return null;
    }
  }
  var Xs = /#[A-Z0-9]{8}\b/;
  function $t(e, n) {
    let r = new Set(e.filter((i) => i.labeled).map((i) => i.author)),
      t = (i) =>
        i.author != null &&
        i.author !== 0 &&
        i.author !== n &&
        !r.has(i.author),
      o = e
        .filter((i) => i.author !== 0 || Xs.test(i.text))
        .sort((i, c) => i.id - c.id),
      a = o[o.length - 1],
      s = o.filter((i) => !t(i));
    return {
      buyerWroteLast: !!a && t(a),
      hasPast: s.some((i) => i.author !== 0),
      lastOtherId: s.length ? s[s.length - 1].id : 0,
    };
  }
  var Ys = [
    /покупатель\s+(\S+)\s+(?:оплатил заказ|подтвердил успешное выполнение заказа|написал отзыв к заказу|изменил отзыв к заказу|удалил отзыв к заказу)/i,
    /the buyer\s+(\S+)\s+(?:has paid for order|has confirmed that order|has given feedback to the order|has edited their feedback to the order|has deleted their feedback to the order)/i,
    /вернул деньги покупателю\s+([^\s.,]+)/i,
    /(?:returned the money to the buyer|has refunded the buyer)\s+([^\s.,]+)/i,
  ];
  var Js = (e, n) => e.trim().toLowerCase() === n.trim().toLowerCase();
  function qs(e) {
    if (!e) return null;
    for (let n of Ys) {
      let r = n.exec(e);
      if (r?.[1]) return r[1];
    }
    return null;
  }
  function Me(e, n) {
    let r = qs(e);
    return !r || !n.trim() ? null : Js(r, n) ? "seller" : "buyer";
  }
  function dt(e, n, r) {
    let t = !1,
      o = !1;
    for (let i of e) {
      if (i.author !== 0) continue;
      let c = Me(i.text, n);
      c === "seller" ? (t = !0) : c === "buyer" && (o = !0);
    }
    if (t) return "seller";
    if (o) return "buyer";
    if (e.length >= 50) return null;
    let s = e
      .filter((i) => i.author != null && i.author !== 0)
      .sort((i, c) => i.id - c.id)[0];
    return s ? (s.author === r ? "buyer" : "seller") : null;
  }
  var vn = "welcomeState",
    Pn = 1e4;
  async function On() {
    let e = await u(vn);
    return {
      lastSeen: e?.lastSeen ?? {},
      greetedAt: e?.greetedAt ?? {},
      activeAt: e?.activeAt ?? {},
      pastAt: e?.pastAt ?? {},
    };
  }
  async function In(e) {
    (zs(e), await y(vn, e));
  }
  function zs(e) {
    let n = Object.keys(e.lastSeen);
    if (n.length <= Pn) return;
    let r = new Set(
      n
        .sort((t, o) => (e.lastSeen[o] ?? 0) - (e.lastSeen[t] ?? 0))
        .slice(0, Pn),
    );
    for (let t of n) r.has(t) || delete e.lastSeen[t];
    for (let t of [e.greetedAt, e.activeAt, e.pastAt])
      for (let o of Object.keys(t)) r.has(o) || delete t[o];
  }
  var Zs = 36e5,
    Qs = 864e5,
    ei = 20;
  async function Bt(e, n, r) {
    let t = String((await u("welcomeMessageText")) ?? "").trim(),
      o = r || !t,
      a = Number(await u("welcomeMessageCooldownValue")) || 0,
      s = (await u("welcomeMessageCooldownUnit")) === "days" ? Qs : Zs,
      i = a > 0 ? a * s : 0,
      c = await u("welcomeMessageImages"),
      l = Array.isArray(c) ? c.filter((f) => typeof f == "string" && !!f) : [],
      m = await On(),
      p = Date.now(),
      g = [];
    for (let f of e) {
      if (f.nodeMsg == null) continue;
      let h = m.lastSeen[f.chatId] || 0,
        b = f.nodeMsg > h;
      m.lastSeen[f.chatId] = Math.max(h, f.nodeMsg);
      let k = m.activeAt[f.chatId] || 0;
      if (
        (b && (m.activeAt[f.chatId] = p),
        o ||
          !b ||
          f.lastByBot ||
          !(
            f.isUnread ||
            (f.userMsg != null && f.nodeMsg != null && f.nodeMsg > f.userMsg)
          ) ||
          De(f.messageText))
      )
        continue;
      let T = m.greetedAt[f.chatId] || 0,
        O = !!m.pastAt[f.chatId];
      if (i > 0) {
        if (p - T < i || (O && p - k < i)) continue;
      } else if (T > 0 || O) continue;
      if (
        (g.push({
          chatId: f.chatId,
          buyerName: f.chatName,
          nodeMsg: f.nodeMsg,
          prev: h,
          lastActive: k,
        }),
        g.length >= ei)
      )
        break;
    }
    for (let f of g) {
      let h = await Fe(f.chatId);
      if (!h) {
        d(`welcome: could not read the history of ${f.chatId}; not greeting`);
        continue;
      }
      if (
        !h.some((E) => E.id >= f.nodeMsg) ||
        h.every((E) => E.author === null)
      ) {
        d(
          `welcome: history of ${f.chatId} is behind the chat list or has no authors; not greeting`,
          !0,
        );
        continue;
      }
      if (dt(h, f.buyerName, n.userId) === "buyer") {
        d(
          `welcome: ${f.chatId} is a chat with a shop the account buys from; not greeting`,
        );
        continue;
      }
      let b = $t(h, n.userId);
      if (
        (b.hasPast && (m.pastAt[f.chatId] = p),
        !b.buyerWroteLast ||
          (b.hasPast &&
            !(
              i > 0 &&
              f.lastActive > 0 &&
              p - f.lastActive >= i &&
              b.lastOtherId <= f.prev
            )))
      )
        continue;
      let k = ee(t, { buyerName: f.buyerName });
      try {
        (await q(n, f.chatId, k, l),
          (m.greetedAt[f.chatId] = Date.now()),
          d(`welcome: greeted ${f.chatId}`));
      } catch (E) {
        if (!E?.rejected) {
          d(`welcome: send failed for ${f.chatId}: ${E?.message ?? E}`);
          continue;
        }
        (d(`welcome: runner rejected ${f.chatId}; refreshing csrf`), se());
        let T = await B(!0);
        if (!T) break;
        n = T;
        try {
          (await q(n, f.chatId, k, l),
            (m.greetedAt[f.chatId] = Date.now()),
            d(`welcome: greeted ${f.chatId} (after csrf refresh)`));
        } catch (O) {
          d(`welcome: retry failed for ${f.chatId}: ${O?.message ?? O}`);
        }
      }
    }
    await In(m);
  }
  async function Ht(e, n, r, t) {
    let o = t >= 1 && t <= 5 ? String(t) : "",
      a = new URLSearchParams({
        authorId: String(r.userId),
        text: lt(n),
        rating: o,
        csrf_token: r.csrfToken,
        orderId: e,
      }),
      s = await I(
        `${v()}/orders/review`,
        {
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
          },
          body: a,
        },
        1,
      );
    if (!s) throw new Error("sendReviewReply: no response");
    let i = await s.json().catch(() => null);
    if (i?.error) throw new Error(`FunPay review error: ${i.error}`);
  }
  function ti(e) {
    let n = e
      .match(/<html[^>]*\blang\s*=\s*["']([^"']+)["']/i)?.[1]
      ?.toLowerCase()
      .split("-")[0];
    return n === "ru" || n === "uk" || n === "en" ? n : void 0;
  }
  async function jt(e) {
    if (!/^[A-Z0-9]{8}$/i.test(e)) return null;
    try {
      let r =
        (await (await I(`${v()}/orders/${e}/`, { method: "GET" }))?.text()) ??
        "";
      if (!r) return null;
      let t = await L("parseOrderReview", { html: r });
      return t ? { ...t, locale: ti(r) } : null;
    } catch (n) {
      return (
        d(`review: order page fetch failed for #${e}: ${n?.message ?? n}`),
        null
      );
    }
  }
  async function A(e, n = {}) {
    return new Response(JSON.stringify({ ok: true, data: {} }), { status: 200, headers: { "Content-Type": "application/json" } });
  }
  function ft(e, n) {
    if (typeof e != "string") return;
    let r = e.trim();
    if (r) return r.slice(0, n);
  }
  function ri(e) {
    let n = Number(e?.stars);
    if (!Number.isFinite(n) || n < 1 || n > 5) return null;
    let r =
        typeof e?.orderId == "string" && /^[A-Z0-9]{8}$/i.test(e.orderId)
          ? e.orderId.toUpperCase()
          : void 0,
      t =
        e?.language === "en" || e?.language === "uk" || e?.language === "ru"
          ? e.language
          : void 0;
    return {
      orderId: r,
      stars: Math.floor(n),
      reviewText: ft(e?.reviewText, 1500),
      lotName: ft(e?.lotName, 200),
      game: ft(e?.game, 120),
      sellerNote: ft(e?.sellerNote, 300),
      language: t,
    };
  }
  var Un = 2e4;
  function ni(e) {
    return new Promise((n, r) => {
      setTimeout(() => r(new Error("TIMEOUT")), e);
    });
  }
  async function Kt(e) {
    let stars = Number(e?.stars) || 5;
    let reviewText = typeof e?.reviewText === "string" ? e.reviewText.trim() : "";

    let customText = await callCustomAi(
      `Оценка: ${stars} звезд.\nТекст отзыва: "${reviewText || "Без текста"}"\nНомер заказа: #${e?.orderId || ""}`,
      `Ты — вежливый продавец на маркетплейсе FunPay. Напиши краткий дружелюбный ответ на отзыв клиента (1-3 предложения). Если оценка 4-5 звезд — поблагодари за покупку и доверие. Если 1-3 звезды — вежливо извинись за неудобства и предложи обратиться в чат заказа для решения вопроса.`
    );

    if (customText) {
      return { ok: !0, reply: customText, monthlyRemaining: 9999 };
    }

    let reply = stars >= 4
      ? "Спасибо за отзыв и доверие! Будем рады видеть вас снова!"
      : "Спасибо за обратную связь! Нам жаль, если возникли трудности. Напишите нам в чат заказа для решения вопроса.";
    return { ok: !0, reply, monthlyRemaining: 9999 };
  }
  var oi =
      /(?:написал отзыв к заказу|has given feedback to the order) #([A-Z0-9]{8})/i,
    ai =
      /(?:изменил отзыв к заказу|has edited their feedback to the order) #([A-Z0-9]{8})/i;
  function _n(e) {
    if (!e) return null;
    let n = e.match(ai);
    if (n) return { kind: "changed", orderId: n[1].toUpperCase() };
    let r = e.match(oi);
    return r ? { kind: "new", orderId: r[1].toUpperCase() } : null;
  }
  var Dn = "reviewState",
    Nn = 1e4,
    Ln = 2e3;
  async function Fn() {
    let e = await u(Dn);
    return {
      lastSeen: e?.lastSeen ?? {},
      repliedOrderIds: e?.repliedOrderIds ?? {},
    };
  }
  async function Mn(e) {
    (si(e), await y(Dn, e));
  }
  function si(e) {
    let n = Object.keys(e.lastSeen);
    if (n.length > Nn) {
      let t = new Set(
        n
          .sort((o, a) => (e.lastSeen[a] ?? 0) - (e.lastSeen[o] ?? 0))
          .slice(0, Nn),
      );
      for (let o of n) t.has(o) || delete e.lastSeen[o];
    }
    let r = Object.keys(e.repliedOrderIds);
    if (r.length > Ln) {
      let t = new Set(
        r
          .sort(
            (o, a) => (e.repliedOrderIds[a] ?? 0) - (e.repliedOrderIds[o] ?? 0),
          )
          .slice(0, Ln),
      );
      for (let o of r) t.has(o) || delete e.repliedOrderIds[o];
    }
  }
  var ii = 10,
    ci = 3,
    li = new Set([
      "AI_QUOTA_EXCEEDED",
      "AI_UNAVAILABLE",
      "AI_FAILED",
      "NETWORK_ERROR",
      "NO_SESSION",
      "SESSION_EXPIRED",
      "FEATURE_NOT_AVAILABLE",
    ]);
  function ui(e) {
    let n = {};
    if (e && typeof e == "object")
      for (let r = 1; r <= 5; r++) {
        let t = e[String(r)];
        typeof t == "string" && t.trim() && (n[String(r)] = t);
      }
    return n;
  }
  function di(e) {
    let n = new Set();
    if (e == null) {
      for (let t = 1; t <= 5; t++) n.add(t);
      return n;
    }
    if (typeof e != "object" || Array.isArray(e)) return n;
    let r = e;
    for (let t = 1; t <= 5; t++) r[String(t)] === !0 && n.add(t);
    return n;
  }
  async function $n(e, n) {
    try {
      return (await Mn(e), !0);
    } catch (r) {
      return (d(`review: could not save state (${n}): ${r?.message ?? r}`), !1);
    }
  }
  async function Vt(e, n, r) {
    let t = r.templates ? ui(await u("reviewReplyTemplates")) : {},
      o = r.ai ? di(await u("aiReviewReplyRatings")) : new Set(),
      a = r.ai ? await u("aiReviewReplyNote") : void 0,
      s = typeof a == "string" ? a.trim() : "",
      i = await B(),
      c = Object.keys(t).length === 0 && o.size === 0,
      l = n || c || !i,
      m = await Fn(),
      p = [];
    for (let h of e) {
      if (h.nodeMsg == null) continue;
      if (p.length >= ii) break;
      let b = m.lastSeen[h.chatId] || 0,
        k = h.nodeMsg > b;
      if (
        ((m.lastSeen[h.chatId] = Math.max(b, h.nodeMsg)),
        l || !k || h.lastByBot)
      )
        continue;
      let E = _n(h.messageText);
      if (!E) continue;
      let T = Me(h.messageText, h.chatName);
      if (T === "buyer") {
        d(
          `review: #${E.orderId} is a review the account left itself (chat ${h.chatId}), not answering`,
        );
        continue;
      }
      (E.kind === "new" && m.repliedOrderIds[E.orderId]) ||
        p.push({
          chatId: h.chatId,
          orderId: E.orderId,
          kind: E.kind,
          buyerName: h.chatName,
          eventLocale: /[Ѐ-ӿ]/.test(h.messageText) ? "ru" : "en",
          side: T,
        });
    }
    if (!(await $n(m, "pre-loop")) || l || p.length === 0) return;
    let g = ci,
      f = !1;
    for (let h of p)
      try {
        let b = await jt(h.orderId);
        if (!b || b.iAmSeller === !1 || b.reviewIsMine) continue;
        if (h.side === null && b.iAmSeller !== !0) {
          d(
            `review: could not tell whose sale #${h.orderId} is, not answering`,
          );
          continue;
        }
        let k = !f && g > 0 && o.has(b.stars),
          E = "";
        if (k) {
          g--;
          let T = await fi(h, b, s);
          T.text ? (E = T.text) : T.terminal && (f = !0);
        }
        if ((E || (E = mi(h, b, t)), !E)) continue;
        try {
          (await Ht(h.orderId, E, i, b.stars),
            (m.repliedOrderIds[h.orderId] = Date.now()),
            await $n(m, `replied #${h.orderId}`),
            d(`review: replied to #${h.orderId} (${b.stars}★)`));
        } catch (T) {
          (d(`review: send failed for #${h.orderId}: ${T?.message ?? T}`),
            se());
          let O = await B(!0);
          if (!O) break;
          i = O;
        }
      } catch (b) {
        d(`review: error handling #${h.orderId}: ${b?.message ?? b}`);
      }
  }
  async function fi(e, n, r) {
    try {
      let t = await Kt({
        orderId: e.orderId,
        stars: n.stars,
        reviewText: n.reviewText || void 0,
        lotName: n.lotName || void 0,
        sellerNote: r || void 0,
        language: n.locale ?? e.eventLocale,
      });
      if (t.ok)
        return (
          d(
            `review: AI wrote the reply for #${e.orderId} (${t.monthlyRemaining} left)`,
          ),
          { text: t.reply, terminal: !1 }
        );
      let o = li.has(t.code) || /^HTTP_5/.test(t.code);
      return (
        d(
          `review: AI declined #${e.orderId} (${t.code}), falling back to the template` +
            (o ? "; not asking again this pass" : ""),
        ),
        { text: "", terminal: o }
      );
    } catch (t) {
      return (
        d(`review: AI threw for #${e.orderId}: ${t?.message ?? t}`),
        { text: "", terminal: !1 }
      );
    }
  }
  function mi(e, n, r) {
    let t = r[String(n.stars)];
    return t
      ? ee(t, {
          buyerName: e.buyerName,
          lotName: n.lotName,
          orderId: e.orderId,
          stars: n.stars,
        })
      : "";
  }
  var pi = /[\u200B\u200C\u200D\uFEFF\u2060\u2061\u2064]/g;
  function Bn(e) {
    return (e ?? "").replace(pi, "").replace(/\s+/g, " ").trim().toLowerCase();
  }
  function gi(e, n) {
    let r = Bn(n.keyword);
    return r ? (n.matchMode === "contains" ? e.includes(r) : e === r) : !1;
  }
  function Hn(e, n) {
    let r = Bn(e);
    if (!r) return null;
    for (let t of n) if (gi(r, t)) return t;
    return null;
  }
  function jn(e) {
    if (!Array.isArray(e)) return [];
    let n = [];
    for (let r of e) {
      if (!r || typeof r != "object") continue;
      let t = r,
        o = typeof t.keyword == "string" ? t.keyword : "",
        a = typeof t.response == "string" ? t.response : "",
        s = t.matchMode === "contains" ? "contains" : "exact",
        i = t.enabled !== !1;
      i &&
        (!o.trim() ||
          !a.trim() ||
          n.push({ keyword: o, matchMode: s, response: a, enabled: i }));
    }
    return n;
  }
  var Vn = "autoReplyState",
    Kn = 1e4;
  async function Gn() {
    return { lastSeen: (await u(Vn))?.lastSeen ?? {} };
  }
  async function Wn(e) {
    let n = Object.keys(e.lastSeen);
    if (n.length > Kn) {
      let r = new Set(
        n
          .sort((t, o) => (e.lastSeen[o] ?? 0) - (e.lastSeen[t] ?? 0))
          .slice(0, Kn),
      );
      for (let t of n) r.has(t) || delete e.lastSeen[t];
    }
    await y(Vn, e);
  }
  var hi = 20;
  async function Gt(e, n) {
    let r = jn(await u("autoReplyRules")),
      t = await B(),
      o = n || r.length === 0 || !t,
      a = await Gn(),
      s = [];
    for (let i of e) {
      if (i.nodeMsg == null) continue;
      let c = a.lastSeen[i.chatId] || 0,
        l = i.nodeMsg > c;
      if (
        ((a.lastSeen[i.chatId] = Math.max(c, i.nodeMsg)),
        o ||
          !l ||
          i.lastByBot ||
          !(
            i.isUnread ||
            (i.userMsg != null && i.nodeMsg != null && i.nodeMsg > i.userMsg)
          ) ||
          De(i.messageText))
      )
        continue;
      let p = Hn(i.messageText, r);
      if (
        p &&
        (s.push({
          chatId: i.chatId,
          response: p.response,
          buyerName: i.chatName,
        }),
        s.length >= hi)
      )
        break;
    }
    for (let i of s) {
      let c = await Fe(i.chatId);
      if (!c) {
        d(`autoReply: could not read the history of ${i.chatId}; not replying`);
        continue;
      }
      if (dt(c, i.buyerName, t.userId) === "buyer") {
        d(
          `autoReply: ${i.chatId} is a chat with a shop the account buys from; not replying`,
        );
        continue;
      }
      let l = ee(i.response, { buyerName: i.buyerName });
      try {
        (await q(t, i.chatId, l, []), d(`autoReply: replied ${i.chatId}`));
      } catch (m) {
        if (!m?.rejected) {
          d(`autoReply: send failed for ${i.chatId}: ${m?.message ?? m}`);
          continue;
        }
        (d(`autoReply: runner rejected ${i.chatId}; refreshing csrf`), se());
        let p = await B(!0);
        if (!p) break;
        t = p;
        try {
          (await q(t, i.chatId, l, []),
            d(`autoReply: replied ${i.chatId} (after csrf refresh)`));
        } catch (g) {
          d(`autoReply: retry failed for ${i.chatId}: ${g?.message ?? g}`);
        }
      }
    }
    await Wn(a);
  }
  var yi =
    /(?:подтвердил успешное выполнение заказа|has confirmed that order) #([A-Z0-9]{8})/i;
  function Wt(e) {
    if (!e) return null;
    let n = yi.exec(e);
    return n ? n[1].toUpperCase() : null;
  }
  async function Xt(e) {
    if (!/^[A-Z0-9]{8}$/i.test(e)) return null;
    try {
      let r =
        (await (await I(`${v()}/orders/${e}/`, { method: "GET" }))?.text()) ??
        "";
      return r
        ? ((await L("parseOrderRole", { html: r }))?.iAmSeller ?? null)
        : null;
    } catch (n) {
      return (
        d(
          `orderConfirm: order page fetch failed for #${e}: ${n?.message ?? n}`,
        ),
        null
      );
    }
  }
  var Yn = "orderConfirmState",
    Xn = 1e4;
  async function Jn() {
    return { lastSeen: (await u(Yn))?.lastSeen ?? {} };
  }
  async function qn(e) {
    let n = Object.keys(e.lastSeen);
    if (n.length > Xn) {
      let r = new Set(
        n
          .sort((t, o) => (e.lastSeen[o] ?? 0) - (e.lastSeen[t] ?? 0))
          .slice(0, Xn),
      );
      for (let t of n) r.has(t) || delete e.lastSeen[t];
    }
    await y(Yn, e);
  }
  var wi = 20;
  async function Yt(e, n) {
    let r = String((await u("orderConfirmReplyText")) ?? "").trim(),
      t = await B(),
      o = n || !r || !t,
      a = await Jn(),
      s = [];
    for (let i of e) {
      if (i.nodeMsg == null) continue;
      let c = a.lastSeen[i.chatId] || 0,
        l = i.nodeMsg > c;
      if (
        ((a.lastSeen[i.chatId] = Math.max(c, i.nodeMsg)),
        o || !l || i.lastByBot)
      )
        continue;
      let m = Wt(i.messageText);
      if (
        m &&
        (s.push({
          chatId: i.chatId,
          buyerName: i.chatName,
          orderId: m,
          side: Me(i.messageText, i.chatName),
        }),
        s.length >= wi)
      )
        break;
    }
    for (let i of s) {
      if (
        !(i.side !== null ? i.side === "seller" : (await Xt(i.orderId)) === !0)
      ) {
        d(
          `orderConfirm: not the seller of order ${i.orderId} (chat ${i.chatId}), nothing sent`,
        );
        continue;
      }
      let l = ee(r, { buyerName: i.buyerName, orderId: i.orderId });
      try {
        (await q(t, i.chatId, l, []),
          d(`orderConfirm: thanked ${i.chatId} (order ${i.orderId})`));
      } catch (m) {
        if (!m?.rejected) {
          d(`orderConfirm: send failed for ${i.chatId}: ${m?.message ?? m}`);
          continue;
        }
        (d(`orderConfirm: runner rejected ${i.chatId}; refreshing csrf`), se());
        let p = await B(!0);
        if (!p) break;
        t = p;
        try {
          (await q(t, i.chatId, l, []),
            d(`orderConfirm: thanked ${i.chatId} (after csrf refresh)`));
        } catch (g) {
          d(`orderConfirm: retry failed for ${i.chatId}: ${g?.message ?? g}`);
        }
      }
    }
    await qn(a);
  }
  var zn = "welcome_message";
  var Zn = "review_reply";
  var Qn = "ai_review_reply";
  var eo = "auto_reply";
  var to = "order_confirm_reply";
  var $e = 7e3,
    bi = 9e4,
    ro = "chatLoopHeartbeat",
    Jt = !1,
    qt = !1,
    zt = !1,
    Zt = !1,
    Be = null;
  async function Qt() {
    for (;;)
      try {
        let e = (await u("welcomeMessageEnabled")) === !0,
          n = (await u("reviewReplyEnabled")) === !0,
          r = (await u("aiReviewReplyEnabled")) === !0,
          t = (await u("autoReplyEnabled")) === !0,
          o = (await u("orderConfirmReplyEnabled")) === !0;
        if (!e && !n && !r && !t && !o) {
          ((Jt = qt = zt = Zt = !1), await M($e));
          continue;
        }
        let a = (await V())?.features ?? [],
          s = e && a.includes(zn),
          i = n && a.includes(Zn),
          c = r && a.includes(Qn),
          l = i || c,
          m = { templates: i, ai: c },
          p = t && a.includes(eo),
          g = o && a.includes(to),
          f = Jt,
          h = qt,
          b = zt,
          k = Zt;
        if (((Jt = s), (qt = l), (zt = p), (Zt = g), !s && !l && !p && !g)) {
          await M($e);
          continue;
        }
        let E = await B();
        if (!E) {
          await M($e);
          continue;
        }
        let T = await Lt(E);
        if (T.length) {
          let O = Date.now();
          Be == null && (Be = Number(await u(ro)) || 0);
          let U = O - Be > bi;
          (s && (await Bt(T, E, U || !f)),
            l && (await Vt(T, U || !h, m)),
            p && (await Gt(T, U || !b)),
            g && (await Yt(T, U || !k)),
            (Be = Date.now()),
            await y(ro, Be));
        }
        await M($e);
      } catch (e) {
        (d(`Error in chatAutomationThread loop: ${e}`), await M($e));
      }
  }
  async function er() {
    ((await u("showSalesStats")) == null && (await y("showSalesStats", !0)),
      (await u("showSectionCommission")) == null &&
        (await y("showSectionCommission", !0)),
      (await u("emojiPanel")) == null && (await y("emojiPanel", !0)),
      (await u("systemNotifications")) == null &&
        (await y("systemNotifications", !1)),
      (await u("enableLotTranslate")) == null &&
        (await y("enableLotTranslate", !0)));
    let a = await u("autoTranslateOnSave");
    if (
      (a === !0
        ? await y("autoTranslateOnSave", "auto")
        : (a === !1 || a == null) && (await y("autoTranslateOnSave", "button")),
      (await u("unconfirmedOrdersLastThresholdHours")) == null &&
        (await y("unconfirmedOrdersLastThresholdHours", 24)),
      (await u("showUnconfirmedSales")) == null &&
        (await y("showUnconfirmedSales", !0)),
      (await u("supportConfirmTickets")) == null &&
        (await y("supportConfirmTickets", !0)),
      (await u("bulkLotEdit")) == null && (await y("bulkLotEdit", !0)),
      (await u("lotAiGenerate")) == null && (await y("lotAiGenerate", !0)),
      (await u("lotTransfer")) == null && (await y("lotTransfer", !0)),
      (await u("lotClone")) == null && (await y("lotClone", !0)),
      (await u("showRealLotPrices")) == null &&
        (await y("showRealLotPrices", !0)),
      (await u("raiseNotifications")) == null &&
        (await y("raiseNotifications", !0)),
      (await u("orderSound")) == null && (await y("orderSound", "off")),
      (await u("autoUp")) == null && (await y("autoUp", !0)),
      (await u("customPrices")) == null && (await y("customPrices", !0)),
      (await u("lotManagementPanel")) == null &&
        (await y("lotManagementPanel", !0)),
      (await u("hideNicknameColors")) == null &&
        (await y("hideNicknameColors", !1)),
      (await u("welcomeMessageEnabled")) == null &&
        (await y("welcomeMessageEnabled", !1)),
      (await u("welcomeMessageText")) == null &&
        (await y("welcomeMessageText", "")),
      (await u("welcomeMessageCooldownValue")) == null &&
        (await y("welcomeMessageCooldownValue", 0)),
      (await u("welcomeMessageCooldownUnit")) == null &&
        (await y("welcomeMessageCooldownUnit", "hours")),
      (await u("welcomeMessageImages")) == null &&
        (await y("welcomeMessageImages", [])),
      (await u("reviewReplyEnabled")) == null &&
        (await y("reviewReplyEnabled", !1)),
      (await u("reviewReplyTemplates")) == null &&
        (await y("reviewReplyTemplates", {
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        })),
      (await u("aiReviewReplyEnabled")) == null &&
        (await y("aiReviewReplyEnabled", !1)),
      (await u("aiReviewReplyRatings")) == null &&
        (await y("aiReviewReplyRatings", {
          1: !0,
          2: !0,
          3: !0,
          4: !0,
          5: !0,
        })),
      (await u("aiReviewReplyNote")) == null &&
        (await y("aiReviewReplyNote", "")),
      (await u("autoReplyEnabled")) == null &&
        (await y("autoReplyEnabled", !1)),
      (await u("autoReplyRules")) == null && (await y("autoReplyRules", [])),
      (await u("orderConfirmReplyEnabled")) == null &&
        (await y("orderConfirmReplyEnabled", !1)),
      (await u("orderConfirmReplyText")) == null)
    ) {
      let Ma = "Спасибо за покупку!",
        $a = chrome.i18n.getMessage("orderConfirmReplyDefault");
      await y("orderConfirmReplyText", $a || Ma);
    }
    ((await u("lotCostPrice")) == null && (await y("lotCostPrice", !1)),
      (await u("withdrawalCommission")) == null &&
        (await y("withdrawalCommission", 6)),
      (await u("showFinancesStats")) == null &&
        (await y("showFinancesStats", !1)),
      (await u("withdrawalAvailability")) == null &&
        (await y("withdrawalAvailability", !0)),
      (await u("exportSales")) == null && (await y("exportSales", !0)),
      (await u("exportPurchases")) == null && (await y("exportPurchases", !0)),
      (await u("exportFinances")) == null && (await y("exportFinances", !1)));
  }
  async function tr() {
    try {
      let e = v(),
        n = await chrome.cookies.get({ url: `${e}/`, name: "golden_key" });
      return n ? n.value : null;
    } catch (e) {
      return (console.log(`Error while getting key: ${e}`), null);
    }
  }
  async function H(e = null) {
    return await V();
  }
  async function rr() {
    try {
      let e = await oe(X);
      if (!e) {
        (d("No stored session, user will log in via the /lite page"),
          await _(null));
        return;
      }
      let n = await H(e);
      if (n) {
        (await _(n),
          d(`Authenticated as ${n.displayName} (${n.email ?? "no email"})`));
        return;
      }
      d("Stored token looked valid but /me probe failed, keeping cached user");
    } catch (e) {
      d(`Session probe error: ${e.message}, keeping cached user`);
    }
  }
  async function Si() {
    d("App started (local mode)");
    let localUser = await V();
    await _(localUser);
    await er();
    tr();
    An();
    Qt();
  }
  var no = Si;
  async function Ei(e, n) {
    (chrome.runtime.getPlatformInfo(), n({ farewell: !0 }));
  }
  var oo = Ei;
  async function ki(e, n) {
    n({ farewell: !0 });
  }
  var ao = ki;
  async function Ri(e, n) {
    (chrome.runtime.reload(), n({ farewell: !0 }));
  }
  var so = Ri;
  var io = "currencyRates",
    Ti = 1800 * 1e3;
  async function nr() {
    let e = await u(io);
    if (e && e.rates && typeof e.rates == "object")
      return { base: e.base || "USD", rates: e.rates, fetchedAt: e.fetchedAt || Date.now() };
    let defaultRates = {
      base: "USD",
      rates: { USD: 1, RUB: 90, EUR: 0.92, UAH: 41 },
      fetchedAt: Date.now()
    };
    await y(io, { ...defaultRates, cachedAt: Date.now() });
    return defaultRates;
  }
  function mt(e, n) {
    let r = e.split("."),
      t = n.split("."),
      o = Math.max(r.length, t.length);
    for (let a = 0; a < o; a++) {
      let s = a < r.length ? r[a] : "0",
        i = a < t.length ? t[a] : "0";
      if (s === "" || i === "") return 0;
      let c = Number(s),
        l = Number(i);
      if (!Number.isInteger(c) || !Number.isInteger(l) || c < 0 || l < 0)
        return 0;
      if (c !== l) return c < l ? -1 : 1;
    }
    return 0;
  }
  var co = "latestExtensionVersion",
    xi = 3600 * 1e3,
    pt = "chrome";
  async function or() {
    return chrome.runtime.getManifest().version;
  }
  var lo = "storeUpdateCheck",
    Ci = 360 * 60 * 1e3,
    Ai = 3600 * 1e3;
  function Pi() {
    return new Promise((e, n) => {
      try {
        chrome.runtime.requestUpdateCheck((r, t) => {
          let o = chrome.runtime.lastError;
          o ? n(new Error(o.message)) : e({ status: r, version: t?.version });
        });
      } catch (r) {
        n(r);
      }
    });
  }
  async function vi(e) {
    let n = await u(lo),
      r = n?.target === e ? n : void 0;
    if (r && Date.now() - r.checkedAt < (r.throttled ? Ai : Ci)) return r;
    let t;
    try {
      t = await Pi();
    } catch (a) {
      return (d(`requestUpdateCheck failed: ${a?.message ?? a}`), r ?? null);
    }
    let o =
      t.status === "throttled"
        ? {
            target: e,
            available: r?.available ?? null,
            version: r?.version,
            checkedAt: Date.now(),
            throttled: !0,
          }
        : {
            target: e,
            available: t.status === "update_available",
            version: t.version,
            checkedAt: Date.now(),
          };
    return (await y(lo, o), o);
  }
  async function ar() {
    let e = await or(),
      n = chrome.runtime.getManifest().version;
    if (!e || mt(n, e) >= 0) return null;
    {
      let r = await vi(e);
      if (!r?.available) return null;
      let t = r.version || e;
      return mt(n, t) < 0 ? t : null;
    }
  }
  var uo = "extensionChangelog",
    Oi = 360 * 60 * 1e3;
  function Ii(e) {
    let n = e?.entries;
    if (!Array.isArray(n)) return [];
    let r = [];
    for (let t of n) {
      let o = t;
      if (
        typeof o?.version != "string" ||
        !o.version ||
        !Array.isArray(o.items)
      )
        continue;
      let a = [];
      for (let s of o.items) {
        let i = s,
          c = i?.text;
        if (!c || typeof c != "object" || Array.isArray(c)) continue;
        let l = {};
        for (let [m, p] of Object.entries(c))
          typeof p == "string" && p.trim() && (l[m] = p);
        Object.keys(l).length !== 0 &&
          a.push({
            type: typeof i.type == "string" ? i.type : void 0,
            text: l,
          });
      }
      a.length !== 0 &&
        r.push({
          version: o.version,
          date: typeof o.date == "string" ? o.date : void 0,
          items: a,
        });
    }
    return r;
  }
  async function sr() {
    return [];
  }
  var j = "orders",
    ie = "meta",
    fo = "orderDate";
  function ir(e) {
    return new Promise((n, r) => {
      ((e.oncomplete = () => n()),
        (e.onabort = () => r(e.error ?? new Error("tx aborted"))),
        (e.onerror = () => r(e.error)));
    });
  }
  function He(e) {
    let n = null;
    function r() {
      return (
        n ||
        ((n = new Promise((t, o) => {
          let a = indexedDB.open(e, 1);
          ((a.onupgradeneeded = () => {
            let s = a.result;
            (s.objectStoreNames.contains(j) ||
              s
                .createObjectStore(j, { keyPath: "orderId" })
                .createIndex(fo, "orderDate", { unique: !1 }),
              s.objectStoreNames.contains(ie) ||
                s.createObjectStore(ie, { keyPath: "k" }));
          }),
            (a.onsuccess = () => {
              let s = a.result;
              ((s.onversionchange = () => {
                (s.close(), (n = null));
              }),
                (s.onclose = () => {
                  n = null;
                }),
                t(s));
            }),
            (a.onerror = () => {
              ((n = null), o(a.error));
            }),
            (a.onblocked = () => {
              ((n = null), o(new Error(`IDB open blocked: ${e}`)));
            }));
        })),
        n)
      );
    }
    return {
      async putOrders(t) {
        if (!t.length) return;
        let a = (await r()).transaction(j, "readwrite"),
          s = a.objectStore(j);
        for (let i of t) i && typeof i.orderId == "string" && s.put(i);
        await ir(a);
      },
      async countOrders() {
        let t = await r();
        return new Promise((o, a) => {
          let s = t.transaction(j, "readonly").objectStore(j).count();
          ((s.onsuccess = () => o(s.result)), (s.onerror = () => a(s.error)));
        });
      },
      async getOrder(t) {
        if (!t) return null;
        let o = await r();
        return new Promise((a, s) => {
          let i = o.transaction(j, "readonly"),
            c = i.objectStore(j).get(t);
          ((c.onsuccess = () => a(c.result ?? null)),
            (i.onabort = () => s(i.error)),
            (i.onerror = () => s(i.error)));
        });
      },
      async someOrdersExist(t) {
        if (!t.length) return !1;
        let o = await r();
        return new Promise((a, s) => {
          let i = o.transaction(j, "readonly"),
            c = i.objectStore(j),
            l = !1;
          for (let m of t) {
            let p = c.getKey(m);
            p.onsuccess = () => {
              p.result !== void 0 && (l = !0);
            };
          }
          ((i.oncomplete = () => a(l)),
            (i.onabort = () => s(i.error)),
            (i.onerror = () => s(i.error)));
        });
      },
      async clearAll() {
        let o = (await r()).transaction([j, ie], "readwrite");
        (o.objectStore(j).clear(), o.objectStore(ie).clear(), await ir(o));
      },
      async getMeta(t) {
        let o = await r();
        return new Promise((a, s) => {
          let i = o.transaction(ie, "readonly").objectStore(ie).get(t);
          ((i.onsuccess = () => a(i.result?.v ?? null)),
            (i.onerror = () => s(i.error)));
        });
      },
      async setMeta(t, o) {
        let s = (await r()).transaction(ie, "readwrite");
        (s.objectStore(ie).put({ k: t, v: o }), await ir(s));
      },
      async iterateByDate(t, o, a) {
        let s = await r(),
          i = null;
        t !== null && o !== null && t <= o
          ? (i = IDBKeyRange.bound(t, o))
          : t !== null
            ? (i = IDBKeyRange.lowerBound(t))
            : o !== null && (i = IDBKeyRange.upperBound(o));
        let c = await new Promise((l, m) => {
          let p = s.transaction(j, "readonly"),
            g = p.objectStore(j).index(fo).getAll(i);
          ((g.onsuccess = () => l(g.result ?? [])),
            (g.onerror = () => m(g.error)),
            (p.onabort = () => m(p.error)));
        });
        for (let l = 0; l < c.length; l++)
          try {
            a(c[l]);
          } catch {}
      },
    };
  }
  var Y = He("lb-finances-db");
  async function cr(e) {
    let r = (await u("appData"))?.userId;
    if (r == null || r === "") return { transactions: [], nextCursor: null };
    let t = new URLSearchParams();
    (t.append("user_id", String(r)),
      t.append("filter", ""),
      e && t.append("continue", e));
    let o = await I(`${v()}/users/transactions`, {
      method: "POST",
      body: t,
      headers: {
        accept: "*/*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
      },
    });
    if (!o || !o.ok)
      throw new Error(
        `Error while fetching transactions: ${o?.statusText ?? "no response"}`,
      );
    let a = await o.text(),
      s = await L("parseTransactions", { html: a, locale: ke(a) });
    return {
      transactions: Array.isArray(s?.transactions) ? s.transactions : [],
      nextCursor: s?.nextCursor ?? null,
    };
  }
  var je = new Map(),
    Ui = 0,
    lr = 0;
  function gt() {
    return ((lr = Math.max(lr + 1, Date.now())), lr);
  }
  function mo(e) {
    return je.has(e);
  }
  function po(e) {
    let n = je.get(e);
    n && (n.cancelledGen = n.gen);
  }
  async function Ke(e, n, r) {
    let t = je.get(e);
    if (t) {
      if (n === "dedupe") return;
      n === "preempt" && !t.isProtected && (t.cancelledGen = t.gen);
      try {
        await t.done;
      } catch {}
      return Ke(e, n, r);
    }
    let o = ++Ui,
      a,
      s = new Promise((c) => {
        a = c;
      }),
      i = { gen: o, done: s, cancelledGen: 0, isProtected: n === "coalesce" };
    je.set(e, i);
    try {
      await r(() => i.cancelledGen === o);
    } finally {
      (je.delete(e), a());
    }
  }
  var _i = 5e3,
    Ni = 600,
    Li = 3,
    go = "financesLastUpdate",
    ho = "financesUpdateProgress";
  async function ur(e, n, r) {
    await y(ho, { active: e, count: n, reset: r, seq: gt() });
  }
  async function Re(e = {}) {
    let n = e.force === !0,
      r = n ? "preempt" : e.coalesce ? "coalesce" : "dedupe";
    try {
      let t = Number(await u(go)) || 0;
      if (!n && !e.coalesce && Date.now() - t < _i) return;
      await Ke(ho, r, async (o) => {
        let a = 0;
        try {
          await ur(!0, 0, n);
          let s = new Set();
          if (!n)
            try {
              await Y.iterateByDate(null, null, (p) => {
                p.status === "waiting" && s.add(p.orderId);
              });
            } catch {}
          let i,
            c = new Set(),
            l = !1,
            m = Li;
          for (let p = 0; p < Ni && !o(); p++) {
            let { transactions: g, nextCursor: f } = await cr(i);
            if (!g.length) break;
            let h = g.map((k) => k.orderId),
              b = await Y.someOrdersExist(h);
            (b || (l = !0), await Y.putOrders(g), (a += g.length));
            for (let k of h) s.delete(k);
            if ((await ur(!0, a, n), !n && b)) {
              if (s.size === 0 || !l || m <= 0) break;
              m--;
            }
            if (!f || c.has(f)) break;
            (c.add(f), (i = f));
          }
        } finally {
          (await y(go, Date.now()), await ur(!1, a, n));
        }
      });
    } catch (t) {
      d(`Error in saveFinancesLoop: ${t}`);
    }
  }
  var Di = new Set(["RUB", "USD", "EUR"]),
    ht = () => ({ RUB: 0, USD: 0, EUR: 0 }),
    Te = (e) => Math.round((e + Number.EPSILON) * 100) / 100;
  async function dr(e, n, r, t) {
    try {
      let o = r,
        a = n,
        s = ht(),
        i = ht(),
        c = ht(),
        l = new Map(),
        m = 0;
      await e(o, a, (g) => {
        if ((m++, g.status !== "complete")) return;
        let f = g.currency;
        if (!Di.has(f)) return;
        let h = f,
          b = Number.isFinite(g.signed) ? g.signed : 0;
        (b >= 0 ? (s[h] += b) : (i[h] += -b), (c[h] += b));
        let k = l.get(g.txType) ?? { count: 0, net: ht() };
        (k.count++, (k.net[h] += b), l.set(g.txType, k));
      });
      for (let g of ["RUB", "USD", "EUR"])
        ((s[g] = Te(s[g])), (i[g] = Te(i[g])), (c[g] = Te(c[g])));
      let p = [...l.entries()]
        .map(([g, f]) => ({
          type: g,
          count: f.count,
          net: { RUB: Te(f.net.RUB), USD: Te(f.net.USD), EUR: Te(f.net.EUR) },
        }))
        .sort((g, f) => f.count - g.count);
      return { totalOps: m, income: s, expense: i, net: c, byType: p };
    } catch (o) {
      return (S(`Error in calculate${t}Stats: ${o}`), null);
    }
  }
  var Ve = { RUB: 0.011, USD: 1, EUR: 1.08 },
    Fi = new Set(["RUB", "USD", "EUR"]),
    bo = 864e5,
    yo = 10800 * 1e3,
    wo = 90,
    Mi = 12;
  function $i(e) {
    let n = e + yo;
    return n - (n % bo) - yo;
  }
  var te = () => ({ RUB: 0, USD: 0, EUR: 0 }),
    ce = (e) => Math.round((e + Number.EPSILON) * 100) / 100;
  async function fr(e, n, r, t) {
    try {
      let o = r,
        a = n,
        s = new Map(),
        i = new Map(),
        c = new Map(),
        l = new Map(),
        m = te(),
        p = te(),
        g = te(),
        f = { complete: 0, cancel: 0, waiting: 0 },
        h = 0,
        b = 1 / 0,
        k = -1 / 0;
      if (
        (await e(o, a, (R) => {
          if (
            (h++,
            R.status === "complete"
              ? f.complete++
              : R.status === "cancel"
                ? f.cancel++
                : R.status === "waiting" && f.waiting++,
            R.status !== "complete")
          )
            return;
          let N = R.currency;
          if (!Fi.has(N)) return;
          let w = Number.isFinite(R.signed) ? R.signed : 0,
            C = $i(R.orderDate);
          (C < b && (b = C), C > k && (k = C), (m[N] += w));
          let D = s.get(C) ?? te(),
            F = i.get(C) ?? te();
          (w >= 0 ? ((D[N] += w), (p[N] += w)) : ((F[N] += -w), (g[N] += -w)),
            s.set(C, D),
            i.set(C, F));
          let G = c.get(R.txType) ?? te();
          ((G[N] += w),
            c.set(R.txType, G),
            l.set(R.txType, (l.get(R.txType) || 0) + 1));
        }),
        f.complete === 0)
      )
        return {
          currency: "RUB",
          bucket: "day",
          series: [],
          byType: [...l.entries()].map(([R, N]) => ({
            type: R,
            count: N,
            net: 0,
          })),
          byStatus: f,
          byCurrency: [],
          totalOps: h,
          totalIncome: 0,
          totalExpense: 0,
        };
      let E = "RUB",
        T = -1;
      for (let R of ["RUB", "USD", "EUR"]) {
        let N = Math.abs(m[R]) * Ve[R];
        N > T && ((T = N), (E = R));
      }
      let O = (R) => {
          let N = 0;
          for (let w of ["RUB", "USD", "EUR"]) N += R[w] * Ve[w];
          return N / Ve[E];
        },
        U = [];
      for (let R = b; R <= k; R += bo)
        U.push({
          tsMs: R,
          income: ce(O(s.get(R) ?? te())),
          expense: ce(O(i.get(R) ?? te())),
        });
      let Z = U,
        Q = "day";
      if (U.length > wo) {
        let R = Math.ceil(U.length / wo),
          N = [];
        for (let w = 0; w < U.length; w += R) {
          let C = U.slice(w, w + R);
          N.push({
            tsMs: C[0].tsMs,
            income: ce(C.reduce((D, F) => D + F.income, 0)),
            expense: ce(C.reduce((D, F) => D + F.expense, 0)),
          });
        }
        ((Z = N), (Q = R >= 28 ? "month" : R >= 7 ? "week" : "day"));
      }
      let ge = [...l.keys()]
          .map((R) => ({
            type: R,
            count: l.get(R) || 0,
            net: ce(O(c.get(R) ?? te())),
          }))
          .sort((R, N) => N.count - R.count)
          .slice(0, Mi),
        Je = ["RUB", "USD", "EUR"]
          .filter((R) => m[R] !== 0)
          .map((R) => ({ currency: R, net: ce(m[R]) }))
          .sort(
            (R, N) =>
              Math.abs(N.net) * Ve[N.currency] -
              Math.abs(R.net) * Ve[R.currency],
          );
      return {
        currency: E,
        bucket: Q,
        series: Z,
        byType: ge,
        byStatus: f,
        byCurrency: Je,
        totalOps: h,
        totalIncome: ce(O(p)),
        totalExpense: ce(O(g)),
      };
    } catch (o) {
      return (S(`Error in calculate${t}Series: ${o}`), null);
    }
  }
  function Bi(e) {
    return {
      id: e.orderId,
      dateMs: e.orderDate,
      txType: e.txType,
      status: e.status,
      title: e.title || "",
      signed: Number.isFinite(e.signed) ? e.signed : 0,
      currency: e.currency,
      refOrderId: e.refOrderId || null,
    };
  }
  async function mr(e, n, r, t, o) {
    let txs = t.map(Bi);
    let isJson = (e === "json");
    let base64, mime, filename;
    if (isJson) {
      let jsonStr = JSON.stringify(txs, null, 2);
      let bytes = new TextEncoder().encode(jsonStr);
      let bin = "";
      for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
      base64 = btoa(bin);
      mime = "application/json";
      filename = `funpaylitebot-finances-export.json`;
    } else {
      let header = "ID;Date;Type;Status;Title;Amount;Currency;RefOrderId\n";
      let rows = txs.map(x => `${x.id};${x.dateMs};${x.txType};${x.status};"${(x.title||'').replace(/"/g, '""')}";${x.signed};${x.currency};${x.refOrderId || ''}`).join('\n');
      let bytes = new TextEncoder().encode(header + rows);
      let bin = "";
      for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
      base64 = btoa(bin);
      mime = "text/csv;charset=utf-8";
      filename = `funpaylitebot-finances-export.csv`;
    }
    return { ok: !0, file: { base64, filename, mime, count: txs.length } };
  }
  function Hi(e) {
    if (!e) return null;
    let n = e.match(/filename="([^"]+)"/i) ?? e.match(/filename=([^;]+)/i);
    return n ? n[1].trim() : null;
  }
  function ji(e) {
    let r = "";
    for (let t = 0; t < e.length; t += 32768)
      r += String.fromCharCode.apply(
        null,
        Array.from(e.subarray(t, t + 32768)),
      );
    return btoa(r);
  }
  async function pr(e, n, r, t) {
    await Re({ coalesce: !0 }).catch(() => {});
    let o = [];
    return (
      await Y.iterateByDate(n, r, (a) => {
        o.push(a);
      }),
      mr(e, n, r, o, t)
    );
  }
  var J = {
      db: He("lb-sales-db"),
      funpayPath: "/orders/trade",
      lastUpdateStorageKey: "salesLastUpdate",
      progressStorageKey: "salesUpdateProgress",
      apiKind: "sale",
      statsHeaderLabel: "Sales",
      label: "sales",
    },
    z = {
      db: He("lb-purchases-db"),
      funpayPath: "/orders/",
      lastUpdateStorageKey: "purchasesLastUpdate",
      progressStorageKey: "purchasesUpdateProgress",
      apiKind: "purchase",
      statsHeaderLabel: "Purchases",
      label: "purchases",
    };
  async function xe(e, n) {
    let r = `${v()}${e.funpayPath}`,
      t = new URLSearchParams();
    n && t.append("continue", n);
    let o = await I(r, {
      method: "POST",
      body: t,
      headers: {
        accept: "*/*",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "x-requested-with": "XMLHttpRequest",
      },
    });
    if (!o || !o.ok)
      throw new Error(
        `Error while fetching ${e.label}: ${o?.statusText ?? "no response"}`,
      );
    let a = await o.text();
    return L("parseSales", { html: a, locale: ke(a) });
  }
  async function le(e, n, r, t) {
    (n.length && (await e.db.putOrders(n)),
      r !== void 0 && (await e.db.setMeta("firstOrderId", r)),
      t !== void 0 && (await e.db.setMeta("lastOrderId", t)),
      await y(e.lastUpdateStorageKey, Date.now()));
  }
  async function gr(e) {
    let n = (await e.db.getMeta("firstOrderId")) ?? null,
      r = (await e.db.getMeta("lastOrderId")) ?? null;
    return { firstOrderId: n, lastOrderId: r };
  }
  async function hr(e, n, r, t, o = null) {
    let a = { active: n, count: r, reset: t, seq: gt(), total: o };
    await y(e.progressStorageKey, a);
  }
  var So = 5e3;
  async function Ce(e, n) {
    let r = n?.force === !0,
      t =
        typeof n?.limit == "number" && n.limit > 0 ? Math.floor(n.limit) : null,
      o = r ? "preempt" : n?.coalesce ? "coalesce" : "dedupe",
      a = await u(e.lastUpdateStorageKey);
    if (!r && !n?.coalesce && a && Date.now() - a < So) {
      S(`saveOrdersLoop(${e.label}): updated <${So / 1e3}s ago, skipping.`);
      return;
    }
    await Ke(e.progressStorageKey, o, async (s) => {
      let i = r,
        c = 0,
        l = () => hr(e, !0, c, i, t);
      try {
        await l();
        let { firstOrderId: m, lastOrderId: p } = await gr(e);
        if (t) {
          let g = m,
            f = null,
            h = null,
            b = !1,
            k = g === null;
          for (; c < t && !s();) {
            let { nextOrderId: E, orders: T } = await xe(e, h);
            if (!T.length) break;
            if (
              (f === null && (f = T[0].orderId),
              !k && T.some((O) => O.orderId === g) && (k = !0),
              await le(e, T),
              (c += T.length),
              await l(),
              S(
                `saveOrdersLoop(${e.label}): refreshed ${T.length} of the newest ${t}. Total: ${await e.db.countOrders()}. Next: ${E}`,
              ),
              (h = E),
              !E)
            ) {
              b = !0;
              break;
            }
          }
          (b && (k = !0),
            f && k && (await le(e, [], f)),
            g === null && (await le(e, [], void 0, b ? null : h)));
          return;
        }
        if (m)
          for (; !s();) {
            let { orders: g } = await xe(e);
            if (!g.length || g[0].orderId === m) break;
            let f = [];
            for (let h of g) {
              if (h.orderId === m) break;
              f.push(h);
            }
            if (!f.length) break;
            ((m = f[0].orderId),
              await le(e, f, m),
              (c += f.length),
              await l(),
              S(
                `saveOrdersLoop(${e.label}): top-scan added ${f.length}. Total: ${await e.db.countOrders()}. Newest: ${m}`,
              ));
          }
        else {
          let { nextOrderId: g, orders: f } = await xe(e);
          f.length &&
            ((m = f[0].orderId),
            (p = g),
            await le(e, f, m, p),
            (c += f.length),
            await l(),
            S(
              `saveOrdersLoop(${e.label}): initialised with ${f.length} orders. Total: ${await e.db.countOrders()}.`,
            ));
        }
        for (; !s();) {
          let { nextOrderId: g, orders: f } = await xe(e, p);
          if (!f.length) break;
          let h = f.map((k) => k.orderId),
            b = await e.db.someOrdersExist(h);
          if (
            (await le(e, f, void 0, g),
            (p = g),
            (c += f.length),
            await l(),
            S(
              `saveOrdersLoop(${e.label}): bottom-scan saved ${f.length}. Total: ${await e.db.countOrders()}. Next: ${g}`,
            ),
            b || !g)
          )
            break;
        }
      } catch (m) {
        S(`Error in saveOrdersLoop(${e.label}): ${m.message}`);
      } finally {
        await hr(e, !1, c, i, t);
      }
    });
  }
  async function yt(e) {
    await e.db.clearAll();
  }
  async function wt(e, n, r) {
    let o = (await L("parseSales", { html: n, locale: r }))?.orders ?? [];
    return o.length
      ? (await e.db.putOrders(o),
        await y(e.lastUpdateStorageKey, Date.now()),
        { saved: o.length })
      : { saved: 0 };
  }
  async function yr(e, n, r, t, o, a, s) {
    let orders = o.map((h) => Ki(h, s?.get(h.orderId) ?? null));
    let isJson = (n === "json");
    let base64, mime, filename;
    if (isJson) {
      let jsonStr = JSON.stringify(orders, null, 2);
      let bytes = new TextEncoder().encode(jsonStr);
      let bin = "";
      for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
      base64 = btoa(bin);
      mime = "application/json";
      filename = `funpaylitebot-${e}-export.json`;
    } else {
      let header = "ID;Date;Status;Title;Price;Currency;Buyer;Cost;CostCurrency\n";
      let rows = orders.map(x => `${x.orderId};${x.orderDateText || ''};${x.status};"${(x.description||'').replace(/"/g, '""')}";${x.price};${x.currency};${x.counterUsername || ''};${x.costPrice || ''};${x.costCurrency || ''}`).join('\n');
      let bytes = new TextEncoder().encode(header + rows);
      let bin = "";
      for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
      base64 = btoa(bin);
      mime = "text/csv;charset=utf-8";
      filename = `funpaylitebot-${e}-export.csv`;
    }
    return { ok: !0, file: { base64, filename, mime, count: orders.length } };
  }
  function Vi(e) {
    if (!e) return null;
    let n = e.match(/filename="([^"]+)"/i) ?? e.match(/filename=([^;]+)/i);
    return n ? n[1].trim() : null;
  }
  function Gi(e) {
    let r = "";
    for (let t = 0; t < e.length; t += 32768)
      r += String.fromCharCode.apply(
        null,
        Array.from(e.subarray(t, t + 32768)),
      );
    return btoa(r);
  }
  var Eo = "lbcost:";
  function Wi(e) {
    if (!e || typeof e != "object") return !1;
    let n = e;
    return (
      typeof n.amount == "number" &&
      Number.isFinite(n.amount) &&
      typeof n.currency == "string" &&
      !!n.currency
    );
  }
  async function ko() {
    let e = await chrome.storage.local.get(null),
      n = {};
    for (let [r, t] of Object.entries(e))
      r.startsWith(Eo) && Wi(t) && (n[r.slice(Eo.length)] = t);
    return n;
  }
  async function wr() {
    try {
      let n = (await u("appData"))?.userId;
      if (n == null || n === "") return [];
      let t =
        (await (await I(`${v()}/users/${n}/`, { method: "GET" }))?.text()) ??
        "";
      if (!t) return [];
      let o = await L("parseUserOffers", { html: t });
      return Array.isArray(o) ? o : [];
    } catch (e) {
      return (d(`fetchUserOffers failed: ${e?.message ?? e}`), []);
    }
  }
  var Xi = "lot_cost_price";
  function Ro(e) {
    return (e ?? "").replace(/\s+/g, " ").trim().toLowerCase();
  }
  async function br(e) {
    let n = new Map();
    try {
      if ((await u("lotCostPrice")) !== !0) return n;
      let r = await V();
      if (!r || !(r.features ?? []).includes(Xi)) return n;
      let t = await ko();
      if (Object.keys(t).length === 0) return n;
      let o = new Map(),
        a = new Set(),
        s = (c, l) => {
          let m = Ro(c);
          if (!m || a.has(m)) return;
          let p = o.get(m);
          if (!p) {
            o.set(m, l);
            return;
          }
          (p.amount !== l.amount || p.currency !== l.currency) &&
            (a.add(m), o.delete(m));
        },
        i = await wr();
      if (i.length > 0)
        for (let c of i) {
          let l = t[c.offerId];
          if (!l) continue;
          let m = { amount: l.amount, currency: l.currency };
          (s(c.name, m), s(l.name, m));
        }
      else
        for (let c of Object.values(t))
          s(c.name, { amount: c.amount, currency: c.currency });
      if (o.size === 0) return n;
      for (let c of e) {
        let l = o.get(Ro(c.description));
        l && n.set(c.orderId, l);
      }
    } catch {}
    return n;
  }
  async function Sr(e, n, r, t, o) {
    await Ce(e, { coalesce: !0 }).catch(() => {});
    let a = [];
    await e.db.iterateByDate(r, t, (i) => {
      a.push(i);
    });
    let s = await br(a);
    return yr(e.apiKind, n, r, t, a, o, s);
  }
  async function To(e, n) {
    let r = `HTTP_${e.status}`,
      t = e.statusText || "request failed";
    try {
      let o = await e.json();
      (o?.error?.code && (r = o.error.code),
        o?.error?.message && (t = o.error.message));
    } catch {}
    return (
      S(`${n}: server error ${e.status} (${r}): ${t}`),
      { code: r, message: t }
    );
  }
  async function xo(e) {
    let payload = {
      lots: e.lots || [],
      chips: e.chips || [],
      exportedAt: new Date().toISOString(),
      version: 1
    };
    let jsonStr = JSON.stringify(payload, null, 2);
    let bytes = new TextEncoder().encode(jsonStr);
    let bin = "";
    for (let i = 0; i < bytes.length; i += 32768) bin += String.fromCharCode(...bytes.subarray(i, i + 32768));
    let base64 = btoa(bin);
    return {
      ok: !0,
      file: {
        base64,
        filename: `funpay-lots-${Date.now()}.json`,
        mime: "application/json",
        count: (e.lots || []).length + (e.chips || []).length
      }
    };
  }
  async function Co(e, n) {
    try {
      let raw = atob(n);
      let data = JSON.parse(raw);
      return {
        ok: !0,
        file: {
          lots: Array.isArray(data.lots) ? data.lots : [],
          chips: Array.isArray(data.chips) ? data.chips : []
        }
      };
    } catch (err) {
      return {
        ok: !1,
        error: { code: "INVALID_FILE", message: err.message }
      };
    }
  }
  function Yi(e) {
    if (!e) return null;
    let n = /filename\*=UTF-8''([^;]+)/i.exec(e);
    if (n?.[1])
      try {
        return decodeURIComponent(n[1]);
      } catch {}
    return /filename="?([^";]+)"?/i.exec(e)?.[1] ?? null;
  }
  function Ji(e) {
    let r = "";
    for (let t = 0; t < e.length; t += 32768)
      r += String.fromCharCode(...e.subarray(t, t + 32768));
    return btoa(r);
  }
  var Ao = "https://sfunpay.com/*";
  function Po(e) {
    if (typeof e != "string") return !1;
    try {
      let n = new URL(e);
      return (
        n.protocol === "https:" &&
        n.hostname === "sfunpay.com" &&
        n.pathname.length > 1
      );
    } catch {
      return !1;
    }
  }
  var qi = 20 * 1024 * 1024;
  async function Er() {
    try {
      return await chrome.permissions.contains({ origins: [Ao] });
    } catch {
      return !1;
    }
  }
  function zi(e) {
    let n = "";
    for (let r = 0; r < e.length; r += 32768)
      n += String.fromCharCode(...e.subarray(r, r + 32768));
    return btoa(n);
  }
  async function vo(e) {
    if (!Po(e)) return { ok: !1, code: "BAD_URL" };
    if (!(await Er())) return { ok: !1, code: "NO_ACCESS" };
    let n;
    try {
      n = await fetch(e, { credentials: "omit" });
    } catch {
      return { ok: !1, code: "NETWORK" };
    }
    if (!n.ok) return { ok: !1, code: `HTTP_${n.status}` };
    let r = (n.headers.get("content-type") ?? "")
      .split(";")[0]
      .trim()
      .toLowerCase();
    if (!r.startsWith("image/")) return { ok: !1, code: "NOT_IMAGE" };
    let t = new Uint8Array(await n.arrayBuffer());
    return t.byteLength === 0 || t.byteLength > qi
      ? { ok: !1, code: "SIZE" }
      : { ok: !0, type: r, data: zi(t) };
  }
  async function kr(e) {
    if (!e) return null;
    try {
      let n = await J.db.getOrder(e);
      if (n) {
        let r = String(n.orderStatus ?? "");
        return {
          iAmSeller: !0,
          orderStatus: r,
          refunded: r === "refunded",
          buyerId: Number(n.buyerId) || 0,
          buyerUsername: n.buyerUsername ?? "",
        };
      }
    } catch {}
    try {
      let n = await z.db.getOrder(e);
      if (n) {
        let r = String(n.orderStatus ?? "");
        return {
          iAmSeller: !1,
          orderStatus: r,
          refunded: r === "refunded",
          buyerId: 0,
          buyerUsername: "",
        };
      }
    } catch {}
    return null;
  }
  var Oo = { RUB: 0.011, USD: 1, EUR: 1.08 },
    Ge = new Set(["RUB", "USD", "EUR"]);
  async function Rr(e, n, r, t) {
    try {
      let o = r,
        a = n,
        s = {
          totalOrders: 0,
          totalClosed: 0,
          totalPending: 0,
          totalRefunded: 0,
          totalRevenue: { RUB: 0, USD: 0, EUR: 0 },
          totalClosedRevenue: { RUB: 0, USD: 0, EUR: 0 },
          totalPendingRevenue: { RUB: 0, USD: 0, EUR: 0 },
          totalRefundedRevenue: { RUB: 0, USD: 0, EUR: 0 },
          averageCheck: { RUB: 0, USD: 0, EUR: 0 },
          uniqueBuyers: 0,
          mostPopularProduct: "",
          mostPopularCategory: "",
          mostActiveBuyer: { username: "", id: 0 },
          mostExpensiveSale: { price: 0, currency: "USD", orderId: "" },
        },
        i = new Map(),
        c = new Map(),
        l = new Map(),
        m = new Set(),
        p = { RUB: 0, USD: 0, EUR: 0 };
      await e(o, a, (h) => {
        let b = h.currency,
          k = h.orderStatus === "paid" || h.orderStatus === "closed";
        (s.totalOrders++,
          m.add(h.buyerId),
          Ge.has(b) && k && ((s.totalRevenue[b] += h.price), (p[b] += h.price)),
          i.set(h.description, (i.get(h.description) || 0) + 1),
          c.set(h.subcategoryName, (c.get(h.subcategoryName) || 0) + 1));
        let E = `${h.buyerUsername}|${h.buyerId}`;
        if (
          (l.set(E, (l.get(E) || 0) + 1),
          h.orderStatus === "paid"
            ? (s.totalPending++,
              Ge.has(b) && (s.totalPendingRevenue[b] += h.price))
            : h.orderStatus === "closed"
              ? (s.totalClosed++,
                Ge.has(b) && (s.totalClosedRevenue[b] += h.price))
              : h.orderStatus === "refunded" &&
                (s.totalRefunded++,
                Ge.has(b) && (s.totalRefundedRevenue[b] += h.price)),
          Ge.has(b) && k)
        ) {
          let T = h.price * Oo[b],
            O = s.mostExpensiveSale.price * Oo[s.mostExpensiveSale.currency];
          T > O &&
            (s.mostExpensiveSale = {
              price: h.price,
              currency: b,
              orderId: h.orderId,
            });
        }
      });
      let g = s.totalClosed + s.totalPending;
      for (let h of ["RUB", "USD", "EUR"])
        s.averageCheck[h] = g > 0 ? p[h] / g : 0;
      ((s.uniqueBuyers = m.size),
        (s.mostPopularProduct = Io(i)),
        (s.mostPopularCategory = Io(c)));
      let f = Zi(l);
      return (f && (s.mostActiveBuyer = f), s);
    } catch (o) {
      return (S(`Error in calculate${t}Stats: ${o}`), null);
    }
  }
  function Io(e) {
    let n = "",
      r = 0;
    for (let [t, o] of e) o > r && ((r = o), (n = t));
    return n;
  }
  function Zi(e) {
    let n = "",
      r = 0;
    for (let [a, s] of e) s > r && ((r = s), (n = a));
    if (r <= 1) return null;
    let [t, o] = n.split("|");
    return { username: t || "", id: Number(o) || 0 };
  }
  var We = { RUB: 0.011, USD: 1, EUR: 1.08 },
    Qi = new Set(["RUB", "USD", "EUR"]),
    No = 864e5,
    Uo = 10800 * 1e3,
    _o = 90,
    ec = 20,
    tc = 100,
    rc = 50;
  function nc(e) {
    let n = e + Uo;
    return n - (n % No) - Uo;
  }
  var bt = () => ({ RUB: 0, USD: 0, EUR: 0 });
  async function Tr(e, n, r, t) {
    try {
      let o = r,
        a = n,
        s = new Map(),
        i = new Map(),
        c = new Map(),
        l = new Map(),
        m = new Map(),
        p = new Map(),
        g = bt(),
        f = { closed: 0, paid: 0, refunded: 0 },
        h = 0,
        b = 1 / 0,
        k = -1 / 0;
      if (
        (await e(o, a, (w) => {
          let C = w.currency,
            D = w.orderStatus === "paid" || w.orderStatus === "closed",
            F = nc(w.orderDate),
            G = w.subcategoryName || "-";
          if (
            (h++,
            i.set(F, (i.get(F) || 0) + 1),
            l.set(G, (l.get(G) || 0) + 1),
            p.set(w.description, (p.get(w.description) || 0) + 1),
            m.set(
              `${w.buyerUsername}|${w.buyerId}`,
              (m.get(`${w.buyerUsername}|${w.buyerId}`) || 0) + 1,
            ),
            F < b && (b = F),
            F > k && (k = F),
            w.orderStatus === "closed"
              ? f.closed++
              : w.orderStatus === "paid"
                ? f.paid++
                : w.orderStatus === "refunded" && f.refunded++,
            Qi.has(C) && D)
          ) {
            g[C] += w.price;
            let de = s.get(F) ?? bt();
            ((de[C] += w.price), s.set(F, de));
            let Pt = c.get(G) ?? bt();
            ((Pt[C] += w.price), c.set(G, Pt));
          }
        }),
        h === 0)
      )
        return {
          currency: "RUB",
          bucket: "day",
          series: [],
          byCategory: [],
          byStatus: f,
          byCurrency: [],
          topBuyers: [],
          topProducts: [],
          totalCount: 0,
          totalRevenue: 0,
        };
      let E = "RUB",
        T = -1;
      for (let w of ["RUB", "USD", "EUR"]) {
        let C = g[w] * We[w];
        C > T && ((T = C), (E = w));
      }
      let O = (w) => {
          let C = 0;
          for (let D of ["RUB", "USD", "EUR"]) C += w[D] * We[D];
          return C / We[E];
        },
        U = [];
      for (let w = b; w <= k; w += No) {
        let C = s.get(w);
        U.push({ tsMs: w, count: i.get(w) || 0, revenue: C ? Xe(O(C)) : 0 });
      }
      let Z = U,
        Q = "day";
      if (U.length > _o) {
        let w = Math.ceil(U.length / _o),
          C = [];
        for (let D = 0; D < U.length; D += w) {
          let F = U.slice(D, D + w);
          C.push({
            tsMs: F[0].tsMs,
            count: F.reduce((G, de) => G + de.count, 0),
            revenue: Xe(F.reduce((G, de) => G + de.revenue, 0)),
          });
        }
        ((Z = C), (Q = w >= 28 ? "month" : w >= 7 ? "week" : "day"));
      }
      let ge = [...l.keys()]
          .map((w) => ({
            name: w,
            count: l.get(w) || 0,
            revenue: Xe(O(c.get(w) ?? bt())),
          }))
          .sort((w, C) => C.count - w.count || C.revenue - w.revenue)
          .slice(0, ec),
        Je = ["RUB", "USD", "EUR"]
          .filter((w) => g[w] > 0)
          .map((w) => ({ currency: w, revenue: Xe(g[w]) }))
          .sort(
            (w, C) => C.revenue * We[C.currency] - w.revenue * We[w.currency],
          ),
        R = [...m.entries()]
          .map(([w, C]) => {
            let D = w.lastIndexOf("|");
            return {
              username: D >= 0 ? w.slice(0, D) : w,
              id: Number(w.slice(D + 1)) || 0,
              count: C,
            };
          })
          .sort((w, C) => C.count - w.count)
          .slice(0, tc),
        N = [...p.entries()]
          .map(([w, C]) => ({ name: w, count: C }))
          .sort((w, C) => C.count - w.count)
          .slice(0, rc);
      return {
        currency: E,
        bucket: Q,
        series: Z,
        byCategory: ge,
        byStatus: f,
        byCurrency: Je,
        topBuyers: R,
        topProducts: N,
        totalCount: h,
        totalRevenue: Xe(O(g)),
      };
    } catch (o) {
      return (S(`Error in calculate${t}Series: ${o}`), null);
    }
  }
  function Xe(e) {
    return Math.round((e + Number.EPSILON) * 100) / 100;
  }
  async function Lo(e, n) {
    let r = [];
    try {
      await e.db.iterateByDate(null, null, (o) => {
        o.orderStatus === "paid" &&
          r.push({ orderId: o.orderId, orderDate: o.orderDate });
      });
    } catch (o) {
      return (
        S(`listUnconfirmedOrders: IDB iterate failed: ${o.message}`),
        { ok: !1, code: "IDB_ERROR", message: o.message }
      );
    }
    let now = Date.now();
    let thresholds = Array.isArray(n.thresholdsHours) ? n.thresholdsHours : [];
    let results = thresholds.map((th) => {
      let thNum = Number(th) || 0;
      let matched = r.filter((ord) => thNum === 0 || (now - (ord.orderDate || 0)) >= thNum * 3600 * 1000);
      return { thresholdHours: thNum, ids: matched.map((ord) => ord.orderId) };
    });
    return { ok: !0, results };
  }
  var oc = 10,
    ac = /<h1\b[^>]*class="[^"]*\bpage-header\b[^"]*"[^>]*>([\s\S]*?)<\/h1>/i,
    sc = ["мои продажи", "мої продажі", "my sales"],
    ic = /<a\b[^>]*class="[^"]*\btc-item\b/gi,
    cc = /name=["']continue["']/i;
  function lc(e) {
    let n = e.match(/data-app-data="([^"]+)"/);
    if (!n) return 0;
    try {
      let r = JSON.parse(n[1].replace(/&quot;/g, '"')),
        t = Array.isArray(r) ? r[0] : r,
        o = Number(t?.userId);
      return Number.isFinite(o) && o > 0 ? o : 0;
    } catch {
      return 0;
    }
  }
  function uc(e) {
    let n = e.match(ac);
    if (!n) return !1;
    let r = n[1]
      .replace(/<(button|a)\b[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
    return sc.some((t) => r === t || r.startsWith(`${t} `));
  }
  async function xr(e) {
    let n = `${v()}/orders/trade?state=paid`,
      r = new Map(),
      t = new Set(e),
      o = 0,
      a = null,
      s = !1,
      i = !0;
    for (let c = 0; c < oc; c++) {
      let l;
      try {
        l =
          (await (
            a === null
              ? await I(n, { method: "GET" })
              : await I(n, {
                  method: "POST",
                  body: new URLSearchParams({ state: "paid", continue: a }),
                  headers: {
                    accept: "*/*",
                    "content-type":
                      "application/x-www-form-urlencoded; charset=UTF-8",
                    "x-requested-with": "XMLHttpRequest",
                  },
                })
          )?.text()) ?? "";
      } catch {
        return { ok: !1, code: "FETCH_FAILED" };
      }
      if (c === 0) {
        if (((o = lc(l)), !o)) return { ok: !1, code: "NOT_LOGGED_IN" };
        if (!uc(l)) return { ok: !1, code: "FETCH_FAILED" };
      }
      let m = await L("parseSales", { html: l, locale: ke(l) });
      if (!m) return { ok: !1, code: "FETCH_FAILED" };
      let p = (l.match(ic) || []).length;
      m.orders.length < p && (i = !1);
      for (let g of m.orders)
        g.orderStatus === "paid" &&
          (r.set(g.orderId, { orderId: g.orderId, orderDate: g.orderDate }),
          t.delete(g.orderId));
      if (t.size === 0) {
        s = !0;
        break;
      }
      if (!m.nextOrderId) {
        s = !(p === 0 && cc.test(l));
        break;
      }
      a = m.nextOrderId;
    }
    return { ok: !0, userId: o, paid: r, complete: s && i };
  }
  var St = "https://support.funpay.com",
    dc = `${St}/tickets/new/1`,
    fc = "2",
    mc = "201",
    pc = 3e4,
    gc = 300,
    hc =
      /заявк\S* (?:успешно )?отправлен|заявк\S* надіслан|request (?:has been )?sent|ticket (?:has been )?(?:sent|created)/i,
    yc = /^\/tickets\/(?!new(?:\/|$)|create(?:\/|$))[^/?#]+\/?$/;
  async function Do(e, n) {
    let r = new AbortController(),
      t = setTimeout(() => r.abort(), pc);
    try {
      let o = await fetch(e, { ...n, signal: r.signal }),
        a = await o.text();
      return { ok: o.ok, status: o.status, url: o.url, text: a };
    } finally {
      clearTimeout(t);
    }
  }
  function Mo(e) {
    return /^https:\/\/(?:www\.)?funpay\.com\/(?:[a-z]{2}\/)?account\/login/.test(
      e || "",
    );
  }
  function Fo(e) {
    try {
      let n = new URL(e, St);
      return n.origin === St && yc.test(n.pathname) ? n.href : void 0;
    } catch {
      return;
    }
  }
  function Cr(e, n, r = 0) {
    if (!(r > 3 || n.length >= 5)) {
      if (typeof e == "string") e.trim() && n.push(e.trim());
      else if (Array.isArray(e)) for (let t of e) Cr(t, n, r + 1);
      else if (e && typeof e == "object")
        for (let t of Object.values(e)) Cr(t, n, r + 1);
    }
  }
  function wc(e) {
    let n = (r) =>
      r
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    return e
      .replace(
        /\r\n?/g,
        `
`,
      )
      .trim()
      .split(/\n{2,}/)
      .map((r) => `<p>${n(r.trim()).replace(/\n/g, "<br>")}</p>`)
      .join("");
  }
  function bc(e, n, r) {
    if (Mo(n)) return { ok: !1, code: "NOT_LOGGED_IN" };
    let t = null;
    try {
      t = JSON.parse(r);
    } catch {
      t = null;
    }
    if (t && typeof t == "object") {
      let a = t.action?.url,
        s = typeof a == "string" ? Fo(a) : void 0,
        i = [t.action?.message, t.message]
          .filter((c) => typeof c == "string")
          .join(" ");
      if (s || hc.test(i)) return s ? { ok: !0, url: s } : { ok: !0 };
    }
    let o = Fo(n);
    if (o) return { ok: !0, url: o };
    if (t && typeof t == "object") {
      let a = [];
      Cr(t.error ?? t.errors, a);
      let s = a
        .join(" ")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (s) return { ok: !1, code: "REJECTED", message: s.slice(0, gc) };
    }
    return e >= 400 && e < 500
      ? { ok: !1, code: "REJECTED", message: `HTTP ${e}` }
      : { ok: !1, code: "UNCERTAIN" };
  }
  async function Ar(e, n, r) {
    let t;
    try {
      t = await Do(dc, { method: "GET", credentials: "include" });
    } catch (p) {
      return (
        d(`support ticket: could not open the form: ${p?.message ?? p}`),
        { ok: !1, code: "NETWORK" }
      );
    }
    if (Mo(t.url)) return { ok: !1, code: "NOT_LOGGED_IN" };
    if (!t.ok) return { ok: !1, code: "NETWORK", message: `HTTP ${t.status}` };
    let o;
    try {
      o = await L("parseSupportTicketForm", { html: t.text });
    } catch (p) {
      return (
        d(`support ticket: could not parse the form: ${p?.message ?? p}`),
        { ok: !1, code: "NOT_SENT" }
      );
    }
    if (!o || !o.ok) {
      let p = o && !o.ok ? o.reason : "no answer";
      return (
        d(
          `support ticket: the form did not pass the check (${p}), nothing sent`,
        ),
        { ok: !1, code: "FORM_CHANGED", message: p }
      );
    }
    let a = r.trim();
    if (o.nickname && a && o.nickname.toLowerCase() !== a.toLowerCase())
      return (
        d(
          "support ticket: support is logged in as another FunPay account, nothing sent",
        ),
        { ok: !1, code: "ACCOUNT_MISMATCH", message: o.nickname }
      );
    let s = o.nickname || a;
    if (!s) return { ok: !1, code: "FORM_CHANGED", message: "nickname" };
    let i = new URLSearchParams();
    (i.set("ticket[fields][1]", s),
      i.set("ticket[fields][2]", e.join(", ")),
      i.set("ticket[fields][3]", fc),
      i.set("ticket[fields][5]", mc),
      i.set("ticket[comment][body_html]", wc(n)),
      i.set("ticket[comment][attachments]", ""),
      i.set("ticket[_token]", o.token));
    let c = {
      accept: "application/json, text/javascript, */*; q=0.01",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-requested-with": "XMLHttpRequest",
    };
    o.csrfToken && (c["x-csrf-token"] = o.csrfToken);
    let l;
    try {
      l = await Do(`${St}${o.action}`, {
        method: "POST",
        credentials: "include",
        headers: c,
        body: i,
      });
    } catch (p) {
      return (
        d(
          `support ticket: no answer to the create request: ${p?.message ?? p}`,
        ),
        { ok: !1, code: "UNCERTAIN" }
      );
    }
    let m = bc(l.status, l.url, l.text);
    return (
      m.ok ||
        d(`support ticket: ${m.code} ${m.message ?? ""} (HTTP ${l.status})`),
      m
    );
  }
  var Bo = "support_confirm_tickets";
  var Ho = /^[A-Z0-9]{8}$/,
    jo = 25,
    Sc = 1440 * 60 * 1e3,
    Ko = 3e3,
    Pr = "supportConfirmList",
    Vo = "supportTicketHistory",
    Ec = 10080 * 60 * 1e3;
  function vr(e) {
    return e && typeof e == "object" && !Array.isArray(e) ? e : {};
  }
  var $o = Promise.resolve();
  function Go(e) {
    let n = $o.then(e, e);
    return (($o = n.catch(() => {})), n);
  }
  function Or(e) {
    if (!Array.isArray(e)) return [];
    let n = [];
    for (let r of e) {
      let t = String(r ?? "")
        .trim()
        .replace(/^#/, "")
        .toUpperCase();
      Ho.test(t) && !n.includes(t) && n.push(t);
    }
    return n;
  }
  async function kc(e) {
    if (!e) return [];
    let n = vr(await u(Pr))[e];
    return Array.isArray(n)
      ? n.filter((r) => r && typeof r.id == "string" && Ho.test(r.id))
      : [];
  }
  async function Rc(e, n) {
    let r = vr(await u(Pr));
    (n.length ? (r[e] = n) : delete r[e], await y(Pr, r));
  }
  function Ir(e, n) {
    return Go(async () => {
      let r = await kc(e),
        t = r.filter((o) => !n.includes(o.id));
      return (e && t.length !== r.length && (await Rc(e, t)), t);
    });
  }
  async function Et() {
    return vr(await u(Vo));
  }
  function Ur(e, n, r = Date.now(), t = !1) {
    return Go(async () => {
      let o = await Et();
      for (let [a, s] of Object.entries(o))
        (!s || typeof s.at != "number" || r - s.at > Ec) && delete o[a];
      for (let a of e) {
        let s = { at: r };
        (n && (s.url = n), t && (s.uncertain = !0), (o[a] = s));
      }
      await y(Vo, o);
    });
  }
  function _r(e, n, r = Date.now()) {
    let t = e[n];
    return t && typeof t.at == "number" && r - t.at < Sc ? t : null;
  }
  async function Wo() {
    return true;
  }
  async function Xo(e) {
    let n = Or(e?.orderIds);
    if (!n.length) return { ok: !1, code: "NO_ORDERS" };
    if (!(await Wo())) return { ok: !1, code: "NO_FEATURE" };
    let r = await xr(n);
    if (!r.ok) return { ok: !1, code: r.code };
    let t = r.complete && r.paid.size > 0,
      o = await Et(),
      a = Date.now(),
      s = [],
      i = [],
      c = [],
      l = [];
    for (let p of n) {
      let g = r.paid.get(p);
      if (!g) {
        (t ? i : c).push(p);
        continue;
      }
      let f = _r(o, p, a);
      f
        ? l.push({ id: p, at: f.at, uncertain: f.uncertain === !0 })
        : s.push({ id: p, orderDate: g.orderDate });
    }
    let m = (p) => (Number.isFinite(p) ? p : Number.MAX_SAFE_INTEGER);
    return (
      s.sort((p, g) => m(p.orderDate) - m(g.orderDate)),
      i.length && (await Ir(String(r.userId), i)),
      { ok: !0, eligible: s, notPaid: i, unseen: c, recent: l }
    );
  }
  var Nr = !1;
  async function Yo(e) {
    let n = Or(e?.orderIds).slice(0, jo),
      r = String(e?.text ?? "").slice(0, Ko);
    if (!n.length) return { ok: !1, code: "NO_ORDERS" };
    if (!r.trim()) return { ok: !1, code: "NO_TEXT" };
    if (!(await Wo())) return { ok: !1, code: "NO_FEATURE" };
    if (Nr) return { ok: !1, code: "BUSY" };
    Nr = !0;
    try {
      let t = await Et(),
        o = n.filter((i) => !_r(t, i));
      if (!o.length) return { ok: !1, code: "NOTHING_TO_SEND" };
      if (o.length !== n.length) return { ok: !1, code: "CHANGED" };
      let a = await Ar(o, r, String(e?.username ?? ""));
      if (!a.ok)
        return (
          a.code === "UNCERTAIN" && (await Ur(o, void 0, Date.now(), !0)),
          a
        );
      await Ur(o, a.url);
      let s = String(e?.userId ?? "");
      return (
        s && (await Ir(s, o)),
        d(`support ticket: filed for ${o.length} order(s)`),
        { ok: !0, url: a.url, sent: o }
      );
    } finally {
      Nr = !1;
    }
  }
  async function Lr(e) {
    let testPrice = Number(e.testPrice);
    let methods = Array.isArray(e.methods) ? e.methods : [];
    let matching = methods.map((m) => {
      let u = (m.unit || "").trim();
      let p = Number(String(m.price || "").replace(/\s/g, "").replace(/,/g, "."));
      return { name: m.name, price: p, unit: u };
    }).filter((m) => Number.isFinite(m.price) && m.price > 0);
    let minBuyerPrice = matching.length > 0 ? Math.min(...matching.map((m) => m.price)) : 0;
    let percent = (minBuyerPrice > 0 && testPrice > 0 && minBuyerPrice >= testPrice)
      ? Math.round((1 - testPrice / minBuyerPrice) * 10000) / 100
      : 0;
    return { ok: !0, percent, currency: e.currency || "RUB" };
  }
  var kt = !1,
    Ye = !1;
  function Jo() {
    return kt ? ((Ye = !0), d("raiseAllNow: cancellation requested."), !0) : !1;
  }
  var Tc = ["подняты", "raised", "підняті"];
  function xc(e, n) {
    return e && Tc.some((r) => n.includes(r));
  }
  async function Dr(e) {
    if (kt) {
      d("raiseAllNow: already running, ignoring re-entry.");
      return;
    }
    ((kt = !0), (Ye = !1));
    try {
      await ct().catch((o) => {
        d(
          `raiseAllNow: category refresh failed (continuing with cached): ${o}`,
        );
      });
      let n = await u("userCategories");
      if (!n || n.length === 0) {
        e({ type: "summary", raisedCount: 0, total: 0 });
        return;
      }
      let r = 0,
        t = 0;
      for (let o = 0; o < n.length; o++) {
        if (Ye) {
          d(`raiseAllNow: stopped after ${t} of ${n.length} sections.`);
          break;
        }
        let a = n[o];
        t++;
        try {
          let s = await _e(a.game_id, a.node_id),
            i = s.msg ?? "";
          a.time = Se(i);
          let c = xc(s.success, i);
          (c && r++,
            e({
              type: "category",
              nodeName: a.node_name,
              gameName: a.game_name,
              raised: c,
              nextInMs: Math.max(0, (a.time ?? Date.now()) - Date.now()),
            }));
        } catch (s) {
          (d(
            `raiseAllNow: error raising '${a.node_name} ${a.game_name}': ${s}`,
          ),
            e({
              type: "category",
              nodeName: a.node_name,
              gameName: a.game_name,
              raised: !1,
            }));
        }
      }
      (await y("userCategories", n),
        e({ type: "summary", raisedCount: r, total: t, stopped: Ye }));
    } finally {
      ((kt = !1), (Ye = !1));
    }
  }
  async function Fr(e) {
    let requests = [];
    let src = e?.source || {};
    for (let field of ["title", "description", "paymentMsg"]) {
      let text = src[field];
      if (typeof text === "string" && text.trim()) {
        let enc = encodeURIComponent(text.trim());
        requests.push({
          field,
          url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${enc}`,
          fallbackUrls: [
            `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=auto&tl=en&dt=t&q=${enc}`
          ]
        });
      }
    }
    return { ok: !0, requests };
  }
  function re(e, n) {
    if (typeof e != "string") return;
    let r = e.trim();
    if (r) return r.slice(0, n);
  }
  function qo(e) {
    let n = Number(e?.nodeId),
      r = Array.isArray(e?.params)
        ? e.params
            .map((s) => ({ label: re(s?.label, 60), value: re(s?.value, 120) }))
            .filter((s) => !!s.label && !!s.value)
            .slice(0, 20)
        : void 0,
      t = Array.isArray(e?.styleExamples)
        ? e.styleExamples
            .map((s) => re(s, 120))
            .filter((s) => !!s)
            .slice(0, 15)
        : void 0,
      o = {
        title: re(e?.current?.title, 200),
        description: re(e?.current?.description, 2e3),
        paymentMsg: re(e?.current?.paymentMsg, 1e3),
      },
      a = !!(o.title || o.description || o.paymentMsg);
    return {
      nodeId: Number.isFinite(n) && n > 0 ? Math.floor(n) : void 0,
      game: re(e?.game, 120),
      section: re(e?.section, 120),
      params: r && r.length > 0 ? r : void 0,
      current: a ? o : void 0,
      hint: re(e?.hint, 300),
      styleExamples: t && t.length > 0 ? t : void 0,
    };
  }
  async function Mr(e) {
    let customText = await callCustomAi(
      `Игра: ${e.game || "Не указана"}\nРаздел: ${e.section || "Товар"}\nПожелания/Подсказка: ${e.hint || "Нет"}\nПараметры: ${JSON.stringify(e.params || [])}\nТекущие данные: ${JSON.stringify(e.current || {})}`,
      `Ты — профессиональный продавец на маркетплейсе FunPay. Сгенерируй привлекательный лот. Верни ответ СТРОГО в формате валидного JSON без markdown: {"title": "заголовок до 100 символов", "description": "красивое структурированное описание лота", "paymentMsg": "сообщение покупателю после оплаты"}`
    );

    if (customText) {
      try {
        let clean = customText.replace(/```json/g, "").replace(/```/g, "").trim();
        let parsed = JSON.parse(clean);
        if (parsed.title && parsed.description) {
          return {
            ok: !0,
            title: String(parsed.title).slice(0, 200),
            description: String(parsed.description).slice(0, 2000),
            paymentMsg: String(parsed.paymentMsg || "Спасибо за покупку! Пожалуйста, оставьте отзыв.").slice(0, 1000),
            monthlyRemaining: 9999
          };
        }
      } catch (err) {
        d(`customAi lot JSON parse fallback: ${err.message}`);
      }
    }

    let current = e?.current || {};
    let game = e?.game ? String(e.game).trim() : "";
    let section = e?.section ? String(e.section).trim() : "Товар";
    let hint = e?.hint ? String(e.hint).trim() : "";
    let title = current.title || (hint ? `${hint.slice(0, 60)} | ${section || game}` : (game ? `${game} | ${section}` : "Новый лот"));
    let descLines = [];
    if (hint) descLines.push(`⭐ ${hint}`);
    descLines.push(`🎮 ${game ? game + " — " : ""}${section}`);
    descLines.push(`⚡ Быстрая выдача сразу после оплаты`);
    descLines.push(`🛡️ 100% гарантия качества и безопасности`);
    if (Array.isArray(e?.params) && e.params.length > 0) {
      descLines.push("\nХарактеристики:");
      for (let p of e.params) {
        if (p.label && p.value) descLines.push(`• ${p.label}: ${p.value}`);
      }
    }
    descLines.push(`\nПо любым вопросам пишите в чат, ответим оперативно!`);
    let desc = current.description || descLines.join("\n");
    let paymentMsg = current.paymentMsg || "Спасибо за покупку! Напишите ваш ник / данные в чат заказа для получения.";

    return {
      ok: !0,
      title,
      description: desc,
      paymentMsg,
      monthlyRemaining: 9999
    };
  }
  async function Qo() {
    if (
      typeof chrome < "u" &&
      typeof chrome.identity?.getRedirectURL == "function"
    )
      return chrome.identity.getRedirectURL("oauth");
    let e = await crypto.subtle.digest(
      "SHA-1",
      new TextEncoder().encode(chrome.runtime.id),
    );
    return `https://${[...new Uint8Array(e)].map((r) => r.toString(16).padStart(2, "0")).join("")}.extensions.allizom.org/oauth`;
  }
  function ea() {
    try {
      if (
        typeof chrome > "u" ||
        !chrome.identity ||
        typeof chrome.identity.launchWebAuthFlow != "function"
      )
        return !1;
      let e =
        typeof navigator < "u" && navigator.userAgent
          ? navigator.userAgent
          : "";
      return !/Android|iPhone|iPad|iPod|Mobile/i.test(e);
    } catch {
      return !1;
    }
  }
  async function Cc(e) { return "local"; }
  async function Ac() {}
  async function Pc(e, n, r) { return null; }
  async function ta(e, n, r, t) { return "local"; }
  async function vc(e, n) { return null; }
  async function ra(e, n, r, t) { return "local"; }
  function ne(e, n, r) { return new Error(n ?? e); }
  async function na(e) { return { user: await V() }; }
  async function oa(e, n) { return { user: await V() }; }
  async function aa(e, n = "login", r = {}) { return { user: await V() }; }
  function sa(e) { return 0; }
  async function ia(e, n, r = {}) { return { user: await V() }; }
  async function $r(e) { return { remainingProviders: ["telegram"] }; }
  async function Br() {
    return { ok: !0 };
  }
  async function Hr() {
    return { ok: !0 };
  }
  async function jr() {
    return { ok: !0, planKey: "premium", expiresAt: null };
  }
  async function Oc(e) {
    return [
      {
        tier: "premium",
        name: "Premium",
        priceLabel: "0 ₽",
        priceOriginalLabel: null,
        description: "Максимальный тариф (активен локально)",
        features: ["Все возможности расширения разблокированы"]
      },
      {
        tier: "pro",
        name: "Pro",
        priceLabel: "0 ₽",
        priceOriginalLabel: null,
        description: "Продвинутый тариф",
        features: ["Pro-функции"]
      },
      {
        tier: "community",
        name: "Community",
        priceLabel: "Бесплатно",
        priceOriginalLabel: null,
        description: "Сообщество",
        features: ["Функции сообщества"]
      }
    ];
  }
  var ca = Oc;
  async function Kr(e) {
    return { ok: !0 };
  }
  async function _c(e) {
    let desc = (await u(`profileDescription_${e}`)) || (await u("profileDescription")) || null;
    return { ok: !0, planKey: "premium", description: desc };
  }
  var pa = _c;
  function Nc() {
    return "https://funpay.com";
  }
  var ga = Nc;
  async function Lc(e = "pro", n) {
    return { ok: !0, url: "https://funpay.com" };
  }
  var ha = Lc;
  async function Vr(e) {
    return "OK";
  }
  async function ya() {
    return { ok: !0, code: "LINKED", expiresAt: "2099-01-01T00:00:00.000Z" };
  }
  async function wa(e) {
    return { ok: !0, funpayUserId: e?.funpayUserId || 1, funpayUsername: e?.funpayUsername || "METAWKA" };
  }
  async function ba() {
    let appData = await u("appData");
    return { ok: !0, binding: { funpayUserId: appData?.userId || 1, funpayUsername: appData?.userName || "METAWKA" } };
  }
  async function Sa() {
    return { ok: !0 };
  }
  async function Dc(e) {
    let n = `HTTP_${e.status}`,
      r;
    try {
      let t = await e.json();
      (t?.error?.code && (n = t.error.code),
        t?.error?.message && (r = t.error.message));
    } catch {}
    return { code: n, message: r };
  }
  async function Gr(e) {
    let desc = String(e?.description ?? "");
    let appData = await u("appData");
    let userId = appData?.userId || "me";
    await y(`profileDescription_${userId}`, desc);
    await y("profileDescription", desc);
    return { ok: !0, description: desc };
  }
  var Ct = "nicknameColors",
    Fc = 300 * 1e3;
  async function ka() {
    let e = await u(Ct);
    return e &&
      typeof e == "object" &&
      typeof e.styles == "object" &&
      typeof e.users == "object"
      ? e
      : null;
  }
  function xt(e) {
    return { styles: e?.styles ?? {}, users: e?.users ?? {} };
  }
  function Ea(e) {
    let n = {};
    if (e && typeof e == "object")
      for (let [r, t] of Object.entries(e)) typeof t == "string" && (n[r] = t);
    return n;
  }
  async function Wr(e = !1) {
    let n = await ka();
    return {
      styles: n?.styles || {
        gold: "background: linear-gradient(90deg, #ffd700, #ffae19); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
        purple: "background: linear-gradient(90deg, #9b51e0, #e040fb); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
        orange: "background: linear-gradient(90deg, #ff8a00, #e52e71); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
      },
      users: n?.users || {}
    };
  }
  async function Ra(e, n, r) {
    let t = await ka(),
      o = { ...(t?.styles ?? {}) },
      a = { ...(t?.users ?? {}) };
    if (r) {
      let s = n ?? "__own__";
      ((o[s] = r), (a[e] = s));
    } else delete a[e];
    await y(Ct, {
      styles: o,
      users: a,
      etag: null,
      fetchedAt: Date.now(),
      version: chrome.runtime.getManifest().version,
    });
  }
  async function At(e) {
    let sel = e?.selection || { color: null, font: null, effect: null };
    await y("nicknameSelection", sel);
    let appData = await u("appData");
    let username = appData?.userName || "METAWKA";
    let css = sel.color === "gold" ? "background: linear-gradient(90deg, #ffd700, #ffae19); -webkit-background-clip: text; -webkit-text-fill-color: transparent;" : null;
    await Ra(username, sel.color, css);
    try {
      let o = await V();
      if (o) {
        await _({ ...o, nicknameColor: sel.color, nicknameSelection: sel });
      }
    } catch {}
    return { ok: !0, selection: sel };
  }
  async function Bc() {
    let e = await u(Xr);
    return e && typeof e == "object" && Array.isArray(e.styles) ? e : null;
  }
  function Hc(e) {
    return Array.isArray(e) ? e : [];
  }
  async function Yr(e = !1) {
    let n = await Bc();
    if (n && Array.isArray(n.styles) && n.styles.length > 0) return n.styles;
    let defaultStyles = [
      {
        key: "gold",
        css: "background: linear-gradient(90deg, #ffd700, #ffae19); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
        tier: "premium",
        group: "color",
        labels: { ru: "Золотой градиент", en: "Gold gradient" }
      },
      {
        key: "purple",
        css: "background: linear-gradient(90deg, #9b51e0, #e040fb); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
        tier: "community",
        group: "color",
        labels: { ru: "Фиолетовый градиент", en: "Purple gradient" }
      },
      {
        key: "orange",
        css: "background: linear-gradient(90deg, #ff8a00, #e52e71); -webkit-background-clip: text; -webkit-text-fill-color: transparent;",
        tier: "pro",
        group: "color",
        labels: { ru: "Оранжевый градиент", en: "Orange gradient" }
      }
    ];
    await y(Xr, { styles: defaultStyles, etag: null, fetchedAt: Date.now(), version: chrome.runtime.getManifest().version });
    return defaultStyles;
  }
  async function Jr() {
    let sel = await u("nicknameSelection");
    return sel && typeof sel === "object" ? sel : { color: null, font: null, effect: null };
  }
  async function jc(e) {
    let n = `HTTP_${e.status}`;
    try {
      let r = await e.json();
      r?.error?.code && (n = r.error.code);
    } catch {}
    return n;
  }
  async function qr() {
    return { ok: !0, code: "LOCAL-123", expiresAt: "2099-01-01T00:00:00.000Z" };
  }
  async function Ca() {
    return { ok: !0, code: "LOCAL-123", expiresAt: "2099-01-01T00:00:00.000Z" };
  }
  async function Aa(e) {
    let user = await V();
    return { ok: !0, status: "ready", user };
  }
  async function Vc(e) {
    return { ok: !0, nextIntervalMs: 86400000, status: "ok" };
  }
  var va = Vc;
  function $(e, n) {
    let r = n;
    e({ error: r.message, code: r.code, data: r.data });
  }
  function La(e) {
    return e === "json" ? "json" : "xlsx";
  }
  function ue(e) {
    return typeof e == "number" && Number.isFinite(e) ? e : null;
  }
  function Oa(e) {
    return typeof e == "number" && Number.isFinite(e) && e > 0
      ? Math.floor(e)
      : void 0;
  }
  function Ia(e, n, r) {
    Rr(
      e.db.iterateByDate,
      n?.startDate ?? null,
      n?.endDate ?? null,
      e.statsHeaderLabel,
    )
      .then((t) => r(t))
      .catch(() => r(null));
  }
  function Ua(e, n, r) {
    Tr(
      e.db.iterateByDate,
      n?.startDate ?? null,
      n?.endDate ?? null,
      e.statsHeaderLabel,
    )
      .then((t) => r(t))
      .catch(() => r(null));
  }
  function _a(e, n, r) {
    let t = 0;
    e.db
      .iterateByDate(ue(n?.fromMs), ue(n?.toMs), () => {
        t++;
      })
      .then(() => r({ count: t }))
      .catch(() => r({ count: null }));
  }
  function Na(e, n, r) {
    Sr(
      e,
      La(n?.format),
      ue(n?.startDate),
      ue(n?.endDate),
      typeof n?.locale == "string" ? n.locale : void 0,
    )
      .then((t) =>
        r(
          t.ok
            ? { ok: !0, ...t.file }
            : { ok: !1, error: t.error.message, code: t.error.code },
        ),
      )
      .catch((t) => r({ ok: !1, error: t.message }));
  }
  function Gc(e, n, r) {
    if (!(!e || e.target !== "background"))
      switch (e.method) {
        case "ping":
          return (oo(e, r), !0);
        case "saveSettings":
          return (ao(e, r), !0);
        case "onResetSettings":
          return (so(e, r), !0);
        case "cancelUpdate":
          return (
            typeof e.payload?.key == "string" && po(e.payload.key),
            r(),
            !0
          );
        case "isUpdateRunning":
          return (
            r({
              running: typeof e.payload?.key == "string" && mo(e.payload.key),
            }),
            !0
          );
        case "updateSales":
          return (
            Ce(J, {
              force: e.payload?.force === !0,
              limit: Oa(e.payload?.limit),
            }),
            r(),
            !0
          );
        case "resetSalesStorage":
          return (
            yt(J)
              .then(() => r())
              .catch(() => r()),
            !0
          );
        case "savePageSales":
          return (
            wt(J, e.payload.html, e.payload.locale)
              .then((t) => r(t))
              .catch(() => r({ saved: 0 })),
            !0
          );
        case "getSalesStats":
          return (Ia(J, e.payload, r), !0);
        case "getSalesSeries":
          return (Ua(J, e.payload, r), !0);
        case "countSalesOrders":
          return (_a(J, e.payload, r), !0);
        case "listUnconfirmedSales":
          return (
            Lo(J, {
              thresholdsHours: Array.isArray(e.payload?.thresholdsHours)
                ? e.payload.thresholdsHours.map((t) => Number(t) || 0)
                : [],
            })
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "EXCEPTION", message: t.message }),
              ),
            !0
          );
        case "lotsExport":
          return (
            xo(e.payload)
              .then((t) => r(t))
              .catch((t) =>
                r({
                  ok: !1,
                  error: { code: "NETWORK_ERROR", message: t.message },
                }),
              ),
            !0
          );
        case "lotsImport":
          return (
            Co(e?.payload?.filename ?? "", e?.payload?.base64 ?? "")
              .then((t) => r(t))
              .catch((t) =>
                r({
                  ok: !1,
                  error: { code: "NETWORK_ERROR", message: t.message },
                }),
              ),
            !0
          );
        case "hasOfferImageAccess":
          return (
            Er()
              .then((t) => r({ granted: t }))
              .catch(() => r({ granted: !1 })),
            !0
          );
        case "fetchOfferImage":
          return (
            vo(e?.payload?.url)
              .then((t) => r(t))
              .catch(() => r({ ok: !1, code: "EXCEPTION" })),
            !0
          );
        case "checkSupportConfirmOrders":
          return (
            Xo(e.payload)
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "FETCH_FAILED", message: t.message }),
              ),
            !0
          );
        case "sendSupportConfirmTicket":
          return (
            Yo(e.payload)
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "UNCERTAIN", message: t.message }),
              ),
            !0
          );
        case "updatePurchases":
          return (
            Ce(z, {
              force: e.payload?.force === !0,
              limit: Oa(e.payload?.limit),
            }),
            r(),
            !0
          );
        case "resetPurchasesStorage":
          return (
            yt(z)
              .then(() => r())
              .catch(() => r()),
            !0
          );
        case "savePagePurchases":
          return (
            wt(z, e.payload.html, e.payload.locale)
              .then((t) => r(t))
              .catch(() => r({ saved: 0 })),
            !0
          );
        case "getPurchasesStats":
          return (Ia(z, e.payload, r), !0);
        case "getPurchasesSeries":
          return (Ua(z, e.payload, r), !0);
        case "countPurchasesOrders":
          return (_a(z, e.payload, r), !0);
        case "exportSales":
          return (Na(J, e.payload, r), !0);
        case "exportPurchases":
          return (Na(z, e.payload, r), !0);
        case "getAvailableUpdate":
          return (
            ar()
              .then((t) => r({ version: t }))
              .catch(() => r({ version: null })),
            !0
          );
        case "getChangelog":
          return (
            sr()
              .then((t) => r({ entries: t }))
              .catch(() => r({ entries: [] })),
            !0
          );
        case "getRates":
          return (
            nr()
              .then((t) => r(t))
              .catch(() => r(null)),
            !0
          );
        case "updateFinances":
          return (Re({ force: e.payload?.force === !0 }), r(), !0);
        case "resetFinancesStorage":
          return (
            (async () => {
              try {
                await Y.clearAll();
              } catch {}
              Re({ force: !0 });
            })(),
            r(),
            !0
          );
        case "getFinancesStats":
          return (
            dr(
              Y.iterateByDate,
              e.payload?.startDate ?? null,
              e.payload?.endDate ?? null,
              "Finances",
            )
              .then((t) => r(t))
              .catch(() => r(null)),
            !0
          );
        case "getFinancesSeries":
          return (
            fr(
              Y.iterateByDate,
              e.payload?.startDate ?? null,
              e.payload?.endDate ?? null,
              "Finances",
            )
              .then((t) => r(t))
              .catch(() => r(null)),
            !0
          );
        case "countFinancesTx": {
          let t = 0;
          return (
            Y.iterateByDate(ue(e.payload?.fromMs), ue(e.payload?.toMs), () => {
              t++;
            })
              .then(() => r({ count: t }))
              .catch(() => r({ count: null })),
            !0
          );
        }
        case "exportFinances":
          return (
            pr(
              La(e.payload?.format),
              ue(e.payload?.startDate),
              ue(e.payload?.endDate),
              e.payload?.locale,
            )
              .then((t) =>
                r(
                  t.ok
                    ? { ok: !0, ...t.file }
                    : { ok: !1, error: t.error.message, code: t.error.code },
                ),
              )
              .catch((t) => r({ ok: !1, error: t.message })),
            !0
          );
        case "oauthLogin":
        case "oauthSwap":
        case "oauthLink":
          return (
            (async () => {
              let t = await V();
              return { ok: !0, user: t };
            })()
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "oauthUnlink":
          return (r({ ok: !0, remainingProviders: ["telegram"] }), !0);
        case "oauthLogout":
          return (r({ ok: !0 }), !0);
        case "deleteAccount":
          return (r({ ok: !0 }), !0);
        case "getAuthState":
        case "refreshMe":
          return (
            (async () => {
              let t = await V();
              return t;
            })()
              .then((t) => r({ ok: !0, user: t }))
              .catch((t) => $(r, t)),
            !0
          );
        case "startTrial":
          return (r({ ok: !0, planKey: "premium", expiresAt: null }), !0);
        case "getCustomAiConfig":
          return (
            (async () => {
              let cfg = (await u("customAiConfig")) || {};
              return { ok: !0, config: cfg };
            })()
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "testCustomAi":
          return (
            (async () => {
              try {
                let testCfg = e?.payload || {};
                let apiKey = typeof testCfg.apiKey === "string" ? testCfg.apiKey.trim() : "";
                let endpoint = (typeof testCfg.endpoint === "string" && testCfg.endpoint.trim() ? testCfg.endpoint.trim() : "https://api.openai.com/v1").replace(/\/+$/, "");
                let url = endpoint.endsWith("/chat/completions") ? endpoint : `${endpoint}/chat/completions`;
                let model = typeof testCfg.model === "string" && testCfg.model.trim() ? testCfg.model.trim() : "gpt-4o-mini";
                let headers = { "Content-Type": "application/json" };
                if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;
                let resp = await fetch(url, {
                  method: "POST",
                  headers,
                  body: JSON.stringify({
                    model,
                    messages: [{ role: "user", content: "Ответь одним словом: Работает" }],
                    max_tokens: 20
                  })
                });
                if (!resp.ok) {
                  let errText = await resp.text().catch(() => "");
                  return { ok: !1, error: `HTTP ${resp.status}: ${errText.slice(0, 150)}` };
                }
                let data = await resp.json();
                let reply = data?.choices?.[0]?.message?.content || "Работает";
                return { ok: !0, reply: reply.trim() };
              } catch (err) {
                return { ok: !1, error: err.message || String(err) };
              }
            })()
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "setCustomAiConfig":
          return (
            (async () => {
              let cfg = e?.payload || {};
              await y("customAiConfig", {
                apiKey: typeof cfg.apiKey === "string" ? cfg.apiKey.trim() : "",
                endpoint: typeof cfg.endpoint === "string" ? cfg.endpoint.trim() : "",
                model: typeof cfg.model === "string" ? cfg.model.trim() : ""
              });
              return { ok: !0 };
            })()
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "trackFunnelEvent":
          return (r({ ok: !0 }), !0);
        case "getTariffs":
          return (
            ca(
              typeof e?.payload?.locale == "string" ? e.payload.locale : void 0,
            )
              .then((t) => r({ ok: !0, plans: t }))
              .catch((t) => $(r, t)),
            !0
          );
        case "startProPurchase":
          return (
            ha(
              e.payload?.plan === "premium" ? "premium" : "pro",
              e.payload?.period === "year"
                ? "year"
                : e.payload?.period === "month"
                  ? "month"
                  : void 0,
            )
              .then((t) => r(t))
              .catch((t) => r({ ok: !1, code: t.code ?? t.message })),
            !0
          );
        case "getProfileInfo":
          return (
            (async () => {
              let t = Number(e?.payload?.funpayUserId);
              if (!Number.isFinite(t) || t <= 0)
                throw new Error("INVALID_FUNPAY_USER_ID");
              return pa(t);
            })()
              .then((t) =>
                r({ ok: !0, planKey: t.planKey, description: t.description }),
              )
              .catch((t) => $(r, t)),
            !0
          );
        case "saveProfileDescription":
          return (
            Gr({ description: String(e.payload?.description ?? "") })
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "EXCEPTION", message: t.message }),
              ),
            !0
          );
        case "lookupOrderRole":
          return (
            (async () => kr(String(e?.payload?.orderId ?? "")))()
              .then((t) => r(t ? { ok: !0, ...t } : { ok: !1 }))
              .catch(() => r({ ok: !1 })),
            !0
          );
        case "getNicknameColors":
          return (
            Wr(!!e.payload?.force)
              .then((t) => r({ ok: !0, ...t }))
              .catch(() => r({ ok: !0, styles: {}, users: {} })),
            !0
          );
        case "getNicknameStyles":
          return (
            Yr(!!e.payload?.force)
              .then((t) => r({ ok: !0, styles: t }))
              .catch(() => r({ ok: !0, styles: [] })),
            !0
          );
        case "getNicknameColor":
          return (
            (async () => {
              let t = await Jr();
              try {
                let o = await V();
                o &&
                  o.nicknameSelection === void 0 &&
                  (await _({ ...o, nicknameSelection: t }));
              } catch {}
              return t;
            })()
              .then((t) => r({ ok: !0, selection: t }))
              .catch(() =>
                r({
                  ok: !0,
                  selection: { color: null, font: null, effect: null },
                }),
              ),
            !0
          );
        case "setNicknameColor":
          return (
            (() => {
              let t = e.payload,
                o = (a) => (typeof a == "string" && a.length > 0 ? a : null);
              return t?.selection
                ? At({
                    selection: {
                      color: o(t.selection.color),
                      font: o(t.selection.font),
                      effect: o(t.selection.effect),
                    },
                  })
                : At({ styleKey: o(t?.styleKey) });
            })()
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "EXCEPTION", message: t.message }),
              ),
            !0
          );
        case "startFunpayLink":
          return (
            ya()
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "confirmFunpayLink":
          return (
            wa({
              funpayUserId: Number(e?.payload?.funpayUserId),
              funpayUsername: String(e?.payload?.funpayUsername ?? ""),
              offerId: Number(e?.payload?.offerId),
            })
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "getFunpayBinding":
          return (
            ba()
              .then((t) => r(t))
              .catch(() => r({ ok: !1, binding: null })),
            !0
          );
        case "unbindFunpay":
          return (
            Sa()
              .then((t) => r(t))
              .catch((t) => $(r, t)),
            !0
          );
        case "getTelegramLinkCode":
          return (
            qr()
              .then((t) => r(t))
              .catch((t) => r({ ok: !1, error: t.message })),
            !0
          );
        case "getTelegramLoginCode":
          return (
            Ca()
              .then((t) => r(t))
              .catch((t) => r({ ok: !1, error: t.message })),
            !0
          );
        case "telegramLoginPoll":
          return (
            Aa(String(e.payload?.code ?? ""))
              .then((t) => r(t))
              .catch((t) => r({ ok: !1, error: t.message })),
            !0
          );
        case "getFunPayGoldenKey":
          return (
            Le()
              .then((t) => r({ ok: !0, value: t }))
              .catch((t) => $(r, t)),
            !0
          );
        case "computeSectionCommission":
          return (
            Lr({
              nodeId: Number(e.payload?.nodeId),
              currency: String(e.payload?.currency ?? "RUB"),
              testPrice: Number(e.payload?.testPrice),
              methods: Array.isArray(e.payload?.methods)
                ? e.payload.methods
                : [],
            })
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "EXCEPTION", message: t.message }),
              ),
            !0
          );
        case "hasTranslateHostPermission":
          return (
            chrome.permissions
              .contains({ origins: ["https://translate.googleapis.com/*"] })
              .then((t) => r({ granted: !!t }))
              .catch(() => r({ granted: !1 })),
            !0
          );
        case "openExtensionsPage":
          return (
            chrome.tabs
              .create({ url: "chrome://extensions/", active: !0 })
              .then(() => r({ ok: !0 }))
              .catch((t) => r({ ok: !1, message: t.message })),
            !0
          );
        case "openTranslateConsentWindow":
          return (
            (async () => {
              try {
                let t = typeof e.payload?.url == "string" ? e.payload.url : "";
                if (!t.startsWith(chrome.runtime.getURL(""))) {
                  r({ ok: !1, code: "BAD_URL" });
                  return;
                }
                (typeof chrome.windows?.create == "function"
                  ? await chrome.windows.create({
                      url: t,
                      type: "popup",
                      width: 520,
                      height: 420,
                    })
                  : await chrome.tabs.create({
                      url: t,
                      active: !0,
                      ...(typeof n?.tab?.id == "number"
                        ? { openerTabId: n.tab.id }
                        : {}),
                    }),
                  r({ ok: !0 }));
              } catch (t) {
                r({ ok: !1, code: "EXCEPTION", message: t.message });
              }
            })(),
            !0
          );
        case "prepareLotTranslate":
          return (
            Fr({
              source: {
                title:
                  typeof e.payload?.source?.title == "string"
                    ? e.payload.source.title
                    : void 0,
                description:
                  typeof e.payload?.source?.description == "string"
                    ? e.payload.source.description
                    : void 0,
                paymentMsg:
                  typeof e.payload?.source?.paymentMsg == "string"
                    ? e.payload.source.paymentMsg
                    : void 0,
              },
            })
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "EXCEPTION", message: t.message }),
              ),
            !0
          );
        case "generateLotAi":
          return (
            Mr(qo(e.payload))
              .then((t) => r(t))
              .catch((t) =>
                r({ ok: !1, code: "EXCEPTION", message: t.message }),
              ),
            !0
          );
        case "sendSettingsSnapshot":
          return (
            (async () => {
              let t = e.payload ?? {};
              return await va({
                funpayUserId: t.funpayUserId,
                funpayUsername: String(t.funpayUsername ?? ""),
                extensionVersion: String(t.extensionVersion ?? ""),
                settings: t.settings ?? {},
              });
            })()
              .then((t) =>
                r({
                  ok: t.ok,
                  nextIntervalMs: t.nextIntervalMs,
                  status: t.status,
                }),
              )
              .catch((t) => $(r, t)),
            !0
          );
        case "raiseAllOffers":
          return (
            (async () => {
              let t = n?.tab?.id,
                o = (await u("raiseNotifications")) !== !1;
              await Dr((a) => {
                typeof t == "number" &&
                  ((a.type === "category" && !o) ||
                    chrome.tabs
                      .sendMessage(t, {
                        target: "content",
                        method: "raiseNotify",
                        payload: a,
                      })
                      .catch(() => {}));
              });
            })()
              .then(() => r({ ok: !0 }))
              .catch((t) => r({ ok: !1, error: t.message })),
            !0
          );
        case "cancelRaiseAllOffers":
          return (r({ ok: !0, stopping: Jo() }), !1);
      }
  }
  var Da = Gc;
  function Wc() {
    let e = v();
    chrome.tabs.create({ url: `${e}/lite` });
  }
  var Fa = Wc;
  chrome.runtime.onMessage.addListener(Da);
  chrome.runtime.onInstalled.addListener(wn);
  chrome.alarms.onAlarm.addListener(mn);
  chrome.runtime.onStartup.addListener(fn);
  chrome.action.onClicked.addListener(() => Fa());
  chrome.storage.onChanged.addListener((e, n) => {
    n === "local" && "appData" in e && et().catch(() => {});
  });
  Xc();
  async function Xc() {
    (await bn(), await no());
  }
})();
