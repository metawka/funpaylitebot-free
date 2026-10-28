"use strict";
(() => {
  function J(t, e = !1) {
    let r = new Date(),
      n = r.getDate().toString(),
      o = (r.getMonth() + 1).toString(),
      a = r.getFullYear().toString(),
      s = r.getHours().toString(),
      l = r.getMinutes().toString(),
      u = r.getSeconds().toString();
    (n.toString().length == 1 && (n = `0${n}`),
      o.toString().length == 1 && (o = `0${o}`),
      s.toString().length == 1 && (s = `0${s}`),
      l.toString().length == 1 && (l = `0${l}`),
      u.toString().length == 1 && (u = `0${u}`));
    let c = `>[${n}.${o}.${a}] [${s}:${l}:${u}] >LB: ${t}`;
    (e ? console.error(c) : console.log(c),
      typeof t == "object" && console.log(t));
  }
  var M = J;
  function X(t) {
    let e = /\d+/,
      r = Number(t.match(e));
    return isNaN(r) || r == 0 ? null : r;
  }
  var N = X;
  var R = {
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
  function L(t) {
    return R[t].join(", ");
  }
  function i(t, e = document) {
    for (let r of R[t]) {
      let n = e.querySelector(r);
      if (n) return n;
    }
    return null;
  }
  function k(t, e = document) {
    for (let r of R[t]) {
      let n = e.querySelectorAll(r);
      if (n.length) return Array.from(n);
    }
    return [];
  }
  var Z = /<(audio|video)\b[\s\S]*?<\/\1\s*>/gi,
    Q = /<(audio|video|source|track)\b[^>]*\/?>/gi;
  function ee(t) {
    return t ? t.replace(Z, "").replace(Q, "") : "";
  }
  function d(t) {
    return new DOMParser().parseFromString(ee(t), "text/html");
  }
  function te(t) {
    try {
      let e = d(t),
        r = k("promoGameCard", e),
        n = [];
      for (let o = 0; o < r.length; o++)
        try {
          let a = r[o],
            s = i("gameTitleLink", a),
            l = k("gameSectionList", a),
            u = s.innerHTML;
          for (let c = 0; c < l.length; c++) {
            let p = l[c],
              w = Number(p.dataset.id),
              b = p.querySelectorAll("li a");
            for (let g = 0; g < b.length; g++) {
              let m = b[g],
                f = "Unknown";
              (m.href.includes("lots") && (f = "lots"),
                m.href.includes("chips") && (f = "chips"));
              let y = N(m.href),
                h = m.innerHTML;
              n.push({
                game_name: u,
                node_name: h,
                node_id: y,
                game_id: w,
                type: f,
              });
            }
          }
        } catch (a) {
          M(`Error while getting category: ${a}`);
        }
      return n;
    } catch (e) {
      return (M("Error in parseAllFunPayCategories:"), M(e), null);
    }
  }
  var W = te;
  function re(t) {
    try {
      let e = [],
        r = d(t),
        n = k("profileSectionTitleLink", r);
      for (let o = 0; o < n.length; o++) {
        let s = n[o].href;
        if (s.includes("chips")) continue;
        let l = N(s);
        l && e.push(l);
      }
      return e;
    } catch (e) {
      return (
        console.log("Error in parseAllUserCategories:"),
        console.log(e),
        null
      );
    }
  }
  var Y = re;
  var ne = {
    ru: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
    uk: [
      "січня",
      "лютого",
      "березня",
      "квітня",
      "травня",
      "червня",
      "липня",
      "серпня",
      "вересня",
      "жовтня",
      "листопада",
      "грудня",
    ],
    en: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
  };
  function P(t) {
    return ne[t];
  }
  var oe = { ru: "сегодня", uk: "сьогодні", en: "today" },
    ae = { ru: "вчера", uk: "вчора", en: "yesterday" },
    se = { ru: /[а-яё]+/i, uk: /[а-яїієґ']+/i, en: /[a-z]+/i },
    ie = ["ru", "uk", "en"];
  function S(t, e = "ru") {
    let r = [e, ...ie.filter((o) => o !== e)],
      n;
    for (let o of r)
      try {
        return le(t, o);
      } catch (a) {
        n = a;
      }
    throw n ?? new Error("Invalid date format: " + t);
  }
  function le(t, e) {
    let r = P(e),
      n = t.trim().toLowerCase();
    function o() {
      let m = Math.floor(Date.now() / 1e3),
        f = 3 * 3600;
      return m + f;
    }
    let a = o(),
      s = new Date(a * 1e3),
      l = s.getUTCFullYear(),
      u = s.getUTCMonth(),
      c = s.getUTCDate();
    if (n.startsWith(oe[e])) {
      let [, m] = t.split(", "),
        [f, y] = m.split(":").map(Number);
      return Date.UTC(l, u, c, f, y) - 3 * 36e5;
    }
    if (n.startsWith(ae[e])) {
      let [, m] = t.split(", "),
        [f, y] = m.split(":").map(Number);
      return Date.UTC(l, u, c - 1, f, y) - 3 * 36e5;
    }
    let p = se[e].source,
      w = new RegExp(`^(\\d{1,2}) (${p}) (\\d{4}),? (\\d{1,2}):(\\d{2})$`, "i"),
      b = new RegExp(`^(\\d{1,2}) (${p}),? (\\d{1,2}):(\\d{2})$`, "i"),
      g = t.match(w);
    if (g) {
      let [, m, f, y, h, C] = g,
        T = r.indexOf(f.toLowerCase());
      if (T === -1) throw new Error("Invalid month name: " + f);
      return Date.UTC(Number(y), T, Number(m), Number(h), Number(C)) - 3 * 36e5;
    }
    if (((g = t.match(b)), g)) {
      let [, m, f, y, h] = g,
        C = r.indexOf(f.toLowerCase());
      if (C === -1) throw new Error("Invalid month name: " + f);
      return Date.UTC(l, C, Number(m), Number(y), Number(h)) - 3 * 36e5;
    }
    throw new Error("Invalid date format: " + t);
  }
  function O(t) {
    if (!t) return null;
    let e = t.toLowerCase().split("-")[0];
    return e === "ru" || e === "uk" || e === "en" ? e : null;
  }
  function ce() {
    if (typeof location > "u") return null;
    let t = location.pathname.match(/^\/(ru|uk|en)(?:\/|$)/i);
    return t ? O(t[1]) : null;
  }
  function F(t) {
    let r = O(
      (
        t ?? (typeof document < "u" ? document : void 0)
      )?.documentElement?.getAttribute("lang"),
    );
    if (r) return r;
    let n = ce();
    return n || (O(chrome.i18n.getUILanguage()) ?? "en");
  }
  function H(t, e) {
    try {
      let r = d(t),
        n = e ?? F(r),
        o = i("paginationCursorInput", r),
        a = o ? o.value : null,
        s = k("tableRow", r);
      if (!s || s.length === 0) return { nextOrderId: null, orders: [] };
      let l = [];
      for (let u = 0; u < s.length; u++)
        try {
          let c = s[u],
            p = c.classList,
            w;
          p.contains("warning")
            ? (w = "refunded")
            : p.contains("info")
              ? (w = "paid")
              : (w = "closed");
          let b = i("orderIdCell", c)?.textContent?.substring(1);
          if (!b) continue;
          let g = i("orderRowDescription", c)?.textContent,
            m = i("offerPriceCell", c)?.textContent,
            f = m.replace(/\s/g, ""),
            y = parseFloat(f),
            h;
          m.includes("₽")
            ? (h = "RUB")
            : m.includes("$")
              ? (h = "USD")
              : m.includes("€")
                ? (h = "EUR")
                : (h = "UNKNOWN");
          let C = i("buyerProfileHref", c),
            T = C?.textContent || "",
            x = C?.getAttribute("data-href")?.split("/"),
            v = 0;
          x && (v = parseInt(x[x.length - 2] || "0", 10));
          let I = i("orderSubcategoryLabel", c)?.textContent,
            E = i("dateCell", c)?.textContent,
            A = S(E, n);
          l.push({
            orderId: b,
            description: g || "",
            subcategoryName: I || "",
            price: y,
            currency: h,
            buyerUsername: T,
            buyerId: v,
            orderStatus: w,
            orderDate: A,
            orderDateText: E,
          });
        } catch (c) {
          (console.log("Error in parseSales loop:"),
            console.log(c),
            console.log(s[u]));
        }
      return { nextOrderId: a, orders: l };
    } catch (r) {
      return (console.log("Error in parseSales:"), console.log(r), null);
    }
  }
  var ue = "⁡",
    me = "⁤";
  function D(t) {
    try {
      let e = d(t),
        r = k("chatListItem", e),
        n = [];
      return (
        r.forEach((o) => {
          let a = o,
            s = a.dataset.id;
          if (!s) return;
          let l = i("chatLastMessagePreview", a)?.textContent || "",
            u = parseInt(a.dataset.nodeMsg || "", 10),
            c = parseInt(a.dataset.userMsg || "", 10);
          n.push({
            chatId: s,
            chatName: i("userNameLink", a)?.textContent?.trim() || "",
            nodeMsg: Number.isNaN(u) ? null : u,
            userMsg: Number.isNaN(c) ? null : c,
            messageText: l.replace(/[⁡⁤]/g, "").trim(),
            lastByBot: l.startsWith(ue) || l.startsWith(me),
            isUnread: a.classList.contains("unread"),
          });
        }),
        n
      );
    } catch {
      return [];
    }
  }
  function U(t) {
    return t.map((e) => {
      try {
        let r = d(e),
          n = i("chatMessageBody", r) ?? r.body;
        return {
          labeled: !!i("chatStaffBadge", r),
          text: (n?.textContent ?? "").replace(/\s+/g, " ").trim(),
        };
      } catch {
        return { labeled: !1, text: "" };
      }
    });
  }
  var de = [
      L("reviewHeader"),
      L("userNameLink"),
      L("profileOnlineStatusPill"),
      L("userAvatar"),
      ".rating",
      L("reviewChromeBlocks"),
      "script",
      "style",
    ].join(", "),
    G = 1500,
    fe = 8,
    pe = /[​‌‍﻿⁠⁡⁤]/g;
  function ge(t) {
    let e = i("orderReviewBlock", t);
    if (!e) return "";
    let r = e.cloneNode(!0);
    r.querySelectorAll(de).forEach((o) => o.remove());
    let n = (r.textContent || "").replace(pe, "").replace(/\s+/g, " ").trim();
    return n.length < fe || !/\p{L}{3,}/u.test(n)
      ? ""
      : n.length > G
        ? n.slice(0, G)
        : n;
  }
  function V(t) {
    let e = i("bodyAppData", t)?.getAttribute("data-app-data");
    if (e)
      try {
        let o = JSON.parse(e.replace(/&quot;/g, '"')),
          a = Array.isArray(o) ? o[0] : o,
          s = String(a?.userId ?? a?.id ?? "");
        if (s) return s;
      } catch {}
    let n = i("navbarOwnProfileLink", t)
      ?.getAttribute("href")
      ?.match(/\/users\/(\d+)/);
    return n ? n[1] : null;
  }
  function K(t) {
    let e = V(t),
      r = null,
      n = null;
    return (
      t.querySelectorAll(L("paramItemRow")).forEach((o) => {
        let a = o.querySelector("h5")?.textContent?.trim().toLowerCase() || "",
          l = o
            .querySelector('a[href*="/users/"]')
            ?.getAttribute("href")
            ?.match(/\/users\/(\d+)/),
          u = l ? l[1] : null;
        u &&
          (/продавец|seller/.test(a)
            ? (r = u)
            : /покупатель|buyer/.test(a) && (n = u));
      }),
      e && r ? e === r : e && n ? e !== n : null
    );
  }
  function z(t) {
    try {
      return { iAmSeller: K(d(t)) };
    } catch {
      return null;
    }
  }
  function _(t) {
    try {
      let e = d(t),
        r = i("reviewRating", e);
      if (!r) return null;
      let n = Array.from(r.classList).find((b) => /^rating\d+$/.test(b));
      if (!n) return null;
      let o = parseInt(n.replace("rating", ""), 10);
      if (!(o >= 1 && o <= 5)) return null;
      let a = "",
        s = Array.from(e.querySelectorAll(".param-item h5")).find((b) => {
          let g = b.textContent?.trim();
          return g === "Краткое описание" || g === "Short description";
        });
      (s && (a = s.nextElementSibling?.textContent?.trim() || ""),
        a || (a = i("orderLotTitleFallback", e)?.textContent?.trim() || ""));
      let l = V(e),
        u = K(e),
        p =
          e
            .querySelector(
              ".review-item-head .media-user-name a, .order-review .media-user-name a",
            )
            ?.getAttribute("href")
            ?.match(/\/users\/(\d+)/)?.[1] ?? null;
      return {
        stars: o,
        lotName: a,
        iAmSeller: u,
        reviewIsMine: !!(l && p && l === p),
        reviewText: ge(e),
      };
    } catch {
      return null;
    }
  }
  function he(t) {
    let e = t.getAttribute("data-offer");
    if (e && /^\d+$/.test(e)) return e;
    let r = t.getAttribute("href") || "",
      n =
        r.match(/[?&]id=(\d+)/) ||
        r.match(/offer[=/](\d+)/i) ||
        r.match(/-(\d+)\/?(?:[?#]|$)/);
    return n ? n[1] : "";
  }
  function B(t) {
    try {
      let r = d(t).querySelectorAll(L("tableRow")),
        n = [];
      return (
        r.forEach((o) => {
          let a = o,
            s = he(a);
          if (!s) return;
          let l = (
            a.querySelector(".tc-desc-text")?.textContent ||
            a.querySelector(".order-desc")?.textContent ||
            a.querySelector(".tc-desc")?.textContent ||
            ""
          ).trim();
          l && n.push({ offerId: s, name: l });
        }),
        n
      );
    } catch {
      return [];
    }
  }
  function be(t) {
    let e = t.trim(),
      r = e.toLowerCase(),
      n = e.match(/#([A-Z0-9]{4,12})/i),
      o = n ? n[1].toUpperCase() : null;
    return /(пополнение|поповнення|deposit|top ?up|refill)/i.test(r)
      ? { type: "payment", refOrderId: null }
      : /(отмена вывода|скасування виведення|withdrawal cancel|cancel(?:led)? withdraw)/i.test(
            r,
          )
        ? { type: "withdraw_cancel", refOrderId: null }
        : /(вывод|виведення|withdraw)/i.test(r)
          ? { type: "withdraw", refOrderId: null }
          : /(возврат|повернення|refund|chargeback)/i.test(r)
            ? { type: "refund", refOrderId: o }
            : /(^|\s)(заказ|замовлення|order)\b/i.test(r) ||
                (o && /(заказ|замовлення|order)/i.test(r))
              ? { type: "order", refOrderId: o }
              : { type: "other", refOrderId: o };
  }
  function ye(t) {
    return t.includes("₽")
      ? "RUB"
      : t.includes("$")
        ? "USD"
        : t.includes("€")
          ? "EUR"
          : "UNKNOWN";
  }
  function $(t, e) {
    try {
      let r = d(t),
        n = e ?? F(r),
        o = k("transactionRow", r);
      if (!o || o.length === 0) return { nextCursor: null, transactions: [] };
      let a = [];
      for (let c = 0; c < o.length; c++)
        try {
          let p = o[c],
            w = p.getAttribute("data-transaction") || "";
          if (!w) continue;
          let b = p.classList,
            g = b.contains("transaction-status-cancel")
              ? "cancel"
              : b.contains("transaction-status-waiting")
                ? "waiting"
                : "complete",
            m = i("rowTitleCell", p)?.textContent?.trim() || "",
            { type: f, refOrderId: y } = be(m),
            h = (i("offerPriceCell", p)?.textContent || "").replace(/ /g, " "),
            C = /^\s*[−-]/.test(h.trim()),
            T =
              parseFloat(
                h
                  .replace(/[^\d.,]/g, "")
                  .replace(/\s/g, "")
                  .replace(",", "."),
              ) || 0,
            x = C ? -T : T,
            v = ye(h),
            I = i("dateCell", p)?.textContent?.trim() || "",
            E = S(I, n),
            A = i("payoutRequisiteCell", p)?.textContent?.trim() || "";
          a.push({
            orderId: w,
            orderDate: E,
            txType: f,
            status: g,
            title: m,
            signed: x,
            currency: v,
            wallet: A,
            refOrderId: y,
            dateText: I,
          });
        } catch {}
      let s = i("paginationCursorInput", r),
        l = o[o.length - 1].getAttribute("data-transaction") || null;
      return { nextCursor: s ? s.value || null : l, transactions: a };
    } catch {
      return { nextCursor: null, transactions: [] };
    }
  }
  var we = /продав|seller/i,
    ke = /подтверд|підтверд|confirm/i;
  function Ce(t, e) {
    if (e.id && /^[\w-]+$/.test(e.id)) {
      let r = t.querySelector(`label[for="${e.id}"]`);
      if (r) return r.textContent || "";
    }
    return e.closest("label")?.textContent || "";
  }
  function j(t) {
    try {
      let e = d(t),
        r = i("supportTicketForm", e);
      if (!r) return { ok: !1, reason: "no_form" };
      let n = r.getAttribute("action") || "";
      if (!/^\/tickets\/create\/\d+$/.test(n))
        return { ok: !1, reason: "action" };
      let o = i("supportTicketCsrfToken", r)?.value || "";
      if (!o) return { ok: !1, reason: "token" };
      if (!i("supportTicketOrderNumbers", r))
        return { ok: !1, reason: "order_field" };
      if (!i("supportTicketBody", r)) return { ok: !1, reason: "body_field" };
      let a = i("supportTicketSellerRole", r);
      if (!a || !we.test(Ce(e, a))) return { ok: !1, reason: "role" };
      let s = i("supportTicketConfirmTopic", r);
      if (!s || !ke.test(s.textContent || ""))
        return { ok: !1, reason: "topic" };
      let l = (i("supportTicketNickname", r)?.value || "").trim(),
        u = "";
      try {
        let c = JSON.parse(
          i("appConfigAttribute", e)?.getAttribute("data-app-config") || "{}",
        );
        typeof c?.csrfToken == "string" && (u = c.csrfToken);
      } catch {}
      return { ok: !0, action: n, token: o, nickname: l, csrfToken: u };
    } catch {
      return { ok: !1, reason: "parse" };
    }
  }
  function q(t, e) {
    switch (t) {
      case "parseAllFunPayCategories":
        return W(e.html);
      case "parseAllUserCategories":
        return Y(e.html);
      case "parseSales":
        return H(e.html, e.locale);
      case "parseChatList":
        return D(e.html);
      case "parseChatHistory":
        return U(e.fragments ?? []);
      case "parseOrderReview":
        return _(e.html);
      case "parseOrderRole":
        return z(e.html);
      case "parseUserOffers":
        return B(e.html);
      case "parseTransactions":
        return $(e.html, e.locale);
      case "parseSupportTicketForm":
        return j(e.html);
      default:
        return;
    }
  }
  chrome.runtime.onMessage.addListener((t, e, r) => {
    if (!(!t || t.target !== "offscreen")) return (Le(t, r), !0);
  });
  function Le(t, e) {
    e(q(t.method, t.payload));
  }
})();
