"use strict";
(() => {
  function u(e) {
    if (!e) return null;
    let s = e.toLowerCase().split("-")[0];
    return s === "ru" || s === "uk" || s === "en" ? s : null;
  }
  function L() {
    if (typeof location > "u") return null;
    let e = location.pathname.match(/^\/(ru|uk|en)(?:\/|$)/i);
    return e ? u(e[1]) : null;
  }
  function p(e) {
    let t = u(
      (
        e ?? (typeof document < "u" ? document : void 0)
      )?.documentElement?.getAttribute("lang"),
    );
    if (t) return t;
    let a = L();
    return a || (u(chrome.i18n.getUILanguage()) ?? "en");
  }
  var C = {
    nicknameColorTitle: { message: "Public nickname styles" },
    nicknameColorDescription: {
      message:
        "Pick a style for your nickname - every extension user sees it across FunPay, on every page.",
    },
    nicknameColorPurple: { message: "Purple gradient" },
    nicknameColorOrange: { message: "Orange gradient" },
    nicknameColorOrangeLocked: { message: "The orange gradient requires Pro" },
    nicknameColorNone: { message: "Standard" },
    nicknameStyleGroupColor: { message: "Color" },
    nicknameStyleGroupFont: { message: "Font" },
    nicknameStyleGroupEffect: { message: "Effect" },
    nicknameStyleColorLocked: { message: "Colour set by the effect" },
    nicknameStyleUnsavedNote: { message: "Style not saved" },
    nicknameStyleSaveButton: { message: "Save" },
    nicknameStyleDiscardButton: { message: "Cancel" },
    nicknameStyleUnsavedTitle: { message: "Nickname style not saved" },
    nicknameStyleUnsavedBody: {
      message:
        "You tried on a nickname style but haven’t saved it. Save the changes?",
    },
    nicknameStyleRestored: { message: "Nickname style restored" },
    nicknameStyleRestorePartial: {
      message:
        "Part of the saved style is no longer available - only the available part was restored",
    },
    nicknameStyleRestoreUnavailable: {
      message: "The saved nickname style is no longer available",
    },
    nicknameStyleRestoreFailed: {
      message:
        "Couldn’t restore the nickname style - press “Save” to try again",
    },
    nicknameColorHiddenBlocked: {
      message:
        'Nickname styles are hidden - turn "Hide nickname styles" off to change your style.',
    },
    goldenKeyCopyFailed: {
      message: "Couldn’t copy - click anywhere on the page and try again.",
    },
    nicknameStyleTierFree: { message: "Available to all" },
    nicknameColorPreviewFallback: { message: "Your nickname" },
    nicknameColorSaved: { message: "Nickname style saved" },
    nicknameColorSaveFailed: { message: "Couldn't save the nickname style" },
    nicknameColorProRequired: {
      message: "The orange gradient requires a Pro status",
    },
    nicknameColorLinkFirst: {
      message: "Link your FunPay account first in the Account section",
    },
    nicknameColorNeedCommunity: {
      message: "Public nickname style is available with a Community status",
    },
    nicknameColorHideTitle: { message: "Hide nickname styles" },
    nicknameColorHideDesc: {
      message:
        "Don't show other users' public nickname styles anywhere except on their profile pages. Your own nickname style will be set to standard for all users.",
    },
    nicknameColorHideNeedCommunity: {
      message: "Hiding nickname styles is available with a Community status",
    },
    nicknameColorNeedPro: {
      message: "The orange nickname style is available with a Pro status",
    },
    nicknameColorNeedPremium: {
      message: "Premium nickname styles are available with a Premium status",
    },
    nicknameColorUpgrade: { message: "View plans" },
    nicknameColorLoading: { message: "Loading…" },
    nicknameColorPencilTitle: { message: "Change nickname style" },
    nicknameColorOpenCustomization: { message: "Open customization" },
    extName: { message: "FunPay Lite Bot" },
    extDescription: {
      message:
        "💲 FunPay extension and bot: auto-raise, auto-replies, sales statistics, dark theme - over 60,000 users",
    },
    extSmallName: { message: "Lite Bot" },
    socialLinkTelegram: { message: "https://t.me/fplite" },
    socialLinkDiscord: { message: "https://dsc.gg/funpaycom" },
    settingTheme: { message: "Theme" },
    settingsCategoryCustomization: { message: "Customization" },
    settingThemeLight: { message: "Light" },
    settingThemeDark: { message: "Dark" },
    settingThemeFirewatch: { message: "Firewatch" },
    settingThemeChoice: { message: "Theme picker" },
    settingThemeCustomBackground: { message: "Custom background image" },
    settingThemeCustomBackgroundDesc: {
      message:
        "Your own picture in place of the wallpaper for the Firewatch and Red Moon themes, and for your own themes with a wallpaper.",
    },
    settingThemeCustomBackgroundOn: { message: "Custom image is set." },
    settingThemeCustomBackgroundDim: { message: "Background dim" },
    settingThemeCustomBackgroundTooLarge: {
      message: "Image is too large even after resize. Try a smaller one.",
    },
    settingThemeCustomBackgroundNotImage: {
      message: "Pick an image file (PNG / JPEG).",
    },
    settingThemeCustomBackgroundTooSmall: {
      message: "This image is smaller than your screen. Pick a larger one.",
    },
    settingThemeChooseImage: { message: "Choose image…" },
    settingThemeRemoveImage: { message: "Remove" },
    featureGatedCustomBackgroundMessage: {
      message: "Custom background images require the Community plan.",
    },
    settingOffers: { message: "Offers" },
    settingOfferAutoRaise: { message: "Auto-raise offers" },
    lotManagementTitle: { message: "Lot management" },
    raiseAllButton: { message: "Raise all offers" },
    raiseAllBusy: { message: "Raising…" },
    raiseAllStarted: { message: "Raising started…" },
    raiseAllRaised: { message: "raised" },
    raiseAllWillRaise: { message: "will be raised" },
    raiseAllWait: { message: "not yet" },
    raiseAllDone: { message: "Done" },
    raiseAllNone: { message: "No offers to raise" },
    raiseAllCancel: { message: "Cancel" },
    raiseAllStopped: { message: "Stopped" },
    raiseAllError: { message: "error" },
    raiseAllSection: { message: "Section" },
    raiseAllSummary: {
      message: "Checked $CHECKED$, raised $RAISED$",
      placeholders: {
        checked: { content: "$1", example: "128" },
        raised: { content: "$2", example: "12" },
      },
    },
    raiseNotifications: { message: "Raise notifications" },
    raiseNotificationsDesc: {
      message:
        "Show a notification for every successful raise: both for the «Raise all offers» button and for auto-raise. Turn it off if you have a lot of sections.",
    },
    lotManagementPanel: { message: "Lot management panel on profile" },
    lotManagementPanelDesc: {
      message:
        "Show the «Lot management» panel on FunPay profiles: lot search on any profile, lot cloning on other sellers' ones, and on yours also «Raise all offers» and lot export and import.",
    },
    settingExactPrice: { message: "Exact price" },
    settingNotifications: { message: "Notifications" },
    systemNotifications: { message: "Device notifications" },
    systemNotificationsDesc: {
      message:
        "System notifications about new messages and orders while you are not looking at FunPay. In the Lite Client app they arrive straight on the phone, with no Telegram and no VPN. Needs the browser’s permission.",
    },
    systemNotificationsDenied: {
      message:
        "The browser refused notification permission. Allow it for funpay.com in the browser settings.",
    },
    systemNotifyMessageTitle: { message: "New message" },
    systemNotifyMessageBody: { message: "Unread chats" },
    systemNotifyOrderTitle: { message: "New order" },
    systemNotifyOrderBody: { message: "Awaiting confirmation" },
    settingCustomNotification: { message: "Custom notification sound" },
    customNotifyOptionDefault: { message: "Default" },
    customNotifyOptionCashRegister: { message: "Cash register" },
    customNotifyOptionCoin: { message: "Coin" },
    customNotifyOptionChime: { message: "Chime" },
    customNotifyOptionBell: { message: "Bell" },
    customNotifyOptionPop: { message: "Pop" },
    customNotifyPreviewTitle: { message: "Preview sound" },
    customNotifyOptionCustom: { message: "Custom sound" },
    settingCustomNotifyChooseFile: { message: "Choose MP3…" },
    settingCustomNotifyNotMp3: { message: "Pick an MP3 file." },
    settingCustomNotifyTooLarge: { message: "File is too large (max 1 MB)." },
    featureGatedCustomNotifySoundMessage: {
      message: "Uploading your own notification sound is a Pro feature.",
    },
    settingOrderSound: { message: "Custom sound for a new order" },
    settingOrderSoundDesc: {
      message:
        "Plays your chosen sound when you get a new order, even when no FunPay tab is open. Keep your browser running.",
    },
    orderSoundOptionOff: { message: "Off" },
    featureGatedCustomOrderSoundMessage: {
      message: "Playing your own sound on a new order is a Pro feature.",
    },
    settingsReset: { message: "Reset settings" },
    settingsPrivacyMode: { message: "Privacy mode" },
    settingsPrivacyModeDesc: {
      message:
        "Blurs your nickname, the other person’s nickname, your balance and order numbers, so you can screenshot a page without painting over anything. Hover a blurred spot to read it.",
    },
    settingsHideLockedFeatures: { message: "Hide unavailable features" },
    settingsHideLockedFeaturesDesc: {
      message:
        "Extension buttons and blocks your plan does not cover simply will not appear on FunPay pages.",
    },
    settingsHiddenPaywallsCount: {
      message: "Features hidden one by one: $COUNT$.",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    settingsHiddenPaywallsReset: { message: "Show them again" },
    settingsHiddenPaywallsCleared: {
      message: "Done, the hidden features are shown again.",
    },
    featureGatedHideLockedFeatures: {
      message: "Hiding unavailable features requires the Community plan.",
    },
    featureGatedPrivacyMode: {
      message: "Privacy mode requires the Community plan.",
    },
    privacyModeOn: { message: "Privacy mode on" },
    privacyModeOff: { message: "Privacy mode off" },
    settingsHideBalance: { message: "Hide balance display" },
    settingOther: { message: "Other" },
    settingOfferAutoRaiseDesc: {
      message:
        "Automatically raises all your lots. Do not close your browser to work.",
    },
    settingExactPriceDesc: {
      message:
        "Adds fields to the lot editing window for entering the price displayed for both the seller and the buyer.",
    },
    settingCustomNotificationDesc: {
      message: "Replaces the loud chat notification sound to the selected one.",
    },
    settingsHideBalanceDesc: {
      message:
        "It can be useful when you need to share the screen, but do not want to show the account balance.",
    },
    settingViewSellersPromo: { message: "Display promo-lot icons" },
    settingViewSellersPromoDesc: {
      message:
        "Displays icons of all promotional lots in the offer table, even hidden ones.",
    },
    settingsChatLinkTitle: { message: "Secret chat of sellers 🕵" },
    settingsDiscordLinkTitle: { message: "Secret Discord server 👾" },
    settingsChannelLinkTitle: { message: "Secret FunPay channel 👀" },
    settingsHelpLinkTitle: { message: "Report a bug / Order development ⚒️" },
    settingReset: { message: "♻️ Reset" },
    settingsReviewTitle: {
      message:
        "Support the project on GitHub",
    },
    settingsReviewButton: { message: "Support on GitHub" },
    priceLabelSeller: { message: "(for seller)" },
    priceLabelBuyer: { message: "(for buyer)" },
    settingsSaved: { message: "✔️ Saved" },
    settingsNotSaved: { message: "❌ Failed to save" },
    raiseResponseHours: { message: "hour" },
    raiseResponseMinutes: { message: "minute" },
    raiseResponseSeconds: { message: "second" },
    resetSettingsConfirm: {
      message: "Are you sure you want to reset settings?",
    },
    statsHeader: { message: "Statistics" },
    statsUpdateButton: { message: "Update Data" },
    statsUpdateButtonUpdating: { message: "Updating..." },
    statsUpdatingTitle: { message: "Updating data…" },
    statsUpdatingOrders: { message: "orders fetched" },
    statsUpdatingOf: { message: "of" },
    statsCancelButton: { message: "Cancel" },
    statsCancelling: { message: "Cancelling…" },
    statsToday: { message: "Today" },
    statsYesterday: { message: "Yesterday" },
    stats24Hours: { message: "24 Hours" },
    stats7Days: { message: "Week" },
    stats30Days: { message: "Month" },
    stats365Days: { message: "Year" },
    statsTotalTime: { message: "All Time" },
    statsCustomPeriod: { message: "Custom date" },
    statsCustomPeriodTitle: { message: "Choose a period" },
    statsCustomPeriodApply: { message: "Apply" },
    statsCustomPeriodInvalid: { message: "Enter both dates as DD.MM.YYYY" },
    statsCustomPeriodOrder: { message: "The start date is after the end date" },
    statsTotalOrders: { message: "Total Orders" },
    statsTotalrevenue: { message: "Total Revenue" },
    statsAverageSalePrice: { message: "Average Sale Price" },
    statsOrdersClosed: { message: "Closed" },
    statsPendingConfirmation: { message: "Pending" },
    statsReturns: { message: "Returns" },
    statsUniqueCustomers: { message: "Unique Customers" },
    statsTopCustomer: { message: "Top Customer" },
    statsHighestSale: { message: "Highest Sale" },
    statsPopularProduct: { message: "Most Popular Product" },
    statsPopularCategory: { message: "Most Popular Category" },
    salesMonthJanuary: { message: "January" },
    salesMonthFebruary: { message: "February" },
    salesMonthMarch: { message: "March" },
    salesMonthApril: { message: "April" },
    salesMonthMay: { message: "May" },
    salesMonthJune: { message: "June" },
    salesMonthJuly: { message: "July" },
    salesMonthAugust: { message: "August" },
    salesMonthSeptember: { message: "September" },
    salesMonthOctober: { message: "October" },
    salesMonthNovember: { message: "November" },
    salesMonthDecember: { message: "December" },
    sales: { message: "Sales" },
    purchases: { message: "Purchases" },
    showSalesStats: { message: "Display sales statistics" },
    showSalesStatsDesc: {
      message: "Adds detailed statistics to the Sales page.",
    },
    statsTabNumbers: { message: "Statistics" },
    statsTabCards: { message: "Cards" },
    statsTabCharts: { message: "Charts" },
    statsTabDiagrams: { message: "Diagrams" },
    statsTabDetailed: { message: "Top lists" },
    statsTabFull: { message: "All data" },
    statsInfoPeriod: { message: "Period:" },
    statsInfoOrders: { message: "Orders:" },
    statsInfoSold: { message: "Sold:" },
    statsInfoBought: { message: "Bought:" },
    chartProfitTitle: { message: "Revenue by day" },
    chartSpentTitle: { message: "Spending by day" },
    chartOrdersTitle: { message: "Orders by day" },
    chartCategoriesTitle: { message: "Orders by category" },
    chartStatusTitle: { message: "Orders by status" },
    chartCurrencyTitle: { message: "Revenue by currency" },
    chartCurrencySpentTitle: { message: "Spending by currency" },
    statsCategoryOther: { message: "Other" },
    statsDetailTopBuyers: { message: "Top buyers" },
    statsDetailTopSellers: { message: "Top sellers" },
    statsDetailTopProducts: { message: "Top products" },
    statsDetailTopCategories: { message: "Top categories" },
    statsDetailOrdersSuffix: { message: "ord." },
    statsDetailTimesSuffix: { message: "sold" },
    statsDetailShowMore: { message: "Show more" },
    statsLockedCharts: { message: "Charts are available with" },
    statsLockedDiagrams: { message: "Diagrams are available with" },
    statsLockedDetailed: { message: "Detailed stats are available with" },
    featureGatedOrderCharts: {
      message:
        "Revenue and order charts, category diagrams and your top buyers and products come with the Pro plan.",
    },
    chartsEmpty: { message: "No data for the selected period" },
    showPurchasesStats: { message: "Display purchases statistics" },
    showPurchasesStatsDesc: {
      message: "Adds detailed statistics to the Purchases page.",
    },
    showSectionCommission: { message: "Display section commission" },
    showSectionCommissionDesc: {
      message:
        "Shows the FunPay commission percentage for the section next to the heading on your offers page.",
    },
    sectionCommissionLabel: { message: "Commission:" },
    offerEditCommissionLabel: { message: "Section commission" },
    exportSalesEnable: { message: "Sales export" },
    exportSalesEnableDesc: {
      message: "Adds the Export button on the Sales page.",
    },
    exportPurchasesEnable: { message: "Purchases export" },
    exportPurchasesEnableDesc: {
      message: "Adds the Export button on the Purchases page.",
    },
    featureGatedExportMessage: {
      message:
        "Exporting the orders archive is a Pro-tier feature. Get Pro to enable it.",
    },
    featureGatedCustomNotifyMessage: {
      message:
        "This notification sound is only available to Community status holders.",
    },
    statsExportButton: { message: "Export" },
    statsExportButtonTitle: { message: "Export the archive…" },
    statsResetConfirmTitle: { message: "Refresh archive?" },
    statsResetConfirmMessage: {
      message:
        "The local cache will be wiped and rebuilt from FunPay. On a large archive this can take a couple of minutes.",
    },
    statsResetConfirmAction: { message: "Clear and refresh" },
    statsRefreshLastN: {
      message: "Last $COUNT$ orders",
      placeholders: { count: { content: "$1", example: "500" } },
    },
    statsRefreshCustom: { message: "Custom amount" },
    statsRefreshCustomHint: {
      message: "Enter how many of the newest orders to load.",
    },
    statsRefreshAll: { message: "All orders (full reload)" },
    statsRefreshPartialHint: {
      message:
        "The newest $COUNT$ orders will be downloaded again. Older ones stay in the archive untouched.",
      placeholders: { count: { content: "$1", example: "500" } },
    },
    statsRefreshAction: { message: "Refresh" },
    confirmCancel: { message: "Cancel" },
    confirmOk: { message: "OK" },
    exportSalesTitle: { message: "Export sales" },
    exportPurchasesTitle: { message: "Export purchases" },
    exportFormatLabel: { message: "Format" },
    exportFormatXlsx: { message: "Excel (.xlsx)" },
    exportFormatJson: { message: "JSON (.json)" },
    exportRangeLabel: { message: "Period" },
    exportRangeAllTime: { message: "All time" },
    exportRangeCustom: { message: "Custom" },
    exportRangeCustomHint: { message: "Or pick custom dates:" },
    commonClose: { message: "Close" },
    calendarPrevMonth: { message: "Previous month" },
    calendarNextMonth: { message: "Next month" },
    calendarMonthSelect: { message: "Month" },
    calendarYearSelect: { message: "Year" },
    exportDatePlaceholder: { message: "DD.MM.YYYY" },
    exportOpenCalendar: { message: "Open calendar" },
    exportCountLabel: { message: "Will export:" },
    exportRangeFrom: { message: "From" },
    exportRangeTo: { message: "To" },
    exportRangeInvalid: { message: "Choose a date range or tick «All time»." },
    exportSubmit: { message: "Export" },
    exportCancel: { message: "Cancel" },
    exportInProgress: { message: "Exporting…" },
    exportNoData: {
      message: "Nothing to export - the archive is empty for this range.",
    },
    exportSuccess: {
      message: "Exported $count$ $word$.",
      placeholders: {
        count: { content: "$1", example: "42" },
        word: { content: "$2", example: "orders" },
      },
    },
    exportFailed: {
      message: "Export failed: $REASON$",
      placeholders: { reason: { content: "$1" } },
    },
    statsPurchasesHeader: { message: "Purchases" },
    statsPurchasesTotalOrders: { message: "Total purchases" },
    statsPurchasesTotalSpent: { message: "Total spent" },
    statsPurchasesAveragePrice: { message: "Average price" },
    statsUniqueSellers: { message: "Unique sellers" },
    statsTopSeller: { message: "Top seller" },
    statsHighestPurchase: { message: "Highest purchase" },
    secretChats: { message: "👀 Secret chats" },
    messages: { message: "Messages" },
    settingsFastMessages: { message: "Fast Messages" },
    settingsFastMessagesDesc: {
      message: "Type / (slash) in chat to quickly send pre-written messages.",
    },
    fastMessagesSettingsButton: { message: "Settings" },
    fastMessagesTitle: { message: "Fast Messages" },
    emojiPanel: { message: "Emoji panel" },
    emojiPanelDesc: { message: "Adds an emoji panel to FunPay chats." },
    emojiButtonTitle: { message: "Emoji" },
    emojiSearchPlaceholder: { message: "Search emoji" },
    emojiNothingFound: { message: "Nothing found" },
    emojiLoadFailed: { message: "Couldn't load the emoji" },
    emojiGroupRecent: { message: "Recently used" },
    emojiGroupSmileys: { message: "Smileys & emotion" },
    emojiGroupPeople: { message: "People & gestures" },
    emojiGroupAnimals: { message: "Animals & nature" },
    emojiGroupFood: { message: "Food & drink" },
    emojiGroupTravel: { message: "Travel & places" },
    emojiGroupActivities: { message: "Activities" },
    emojiGroupObjects: { message: "Objects" },
    emojiGroupSymbols: { message: "Symbols & flags" },
    bindName: { message: "Name" },
    bindNamePlaceholder: { message: "Short name" },
    bindMessage: { message: "Message" },
    bindMessagePlaceholder: { message: "Message Text" },
    enabled: { message: "Enabled" },
    instantSend: { message: "Instant Send" },
    delete: { message: "Delete" },
    add: { message: "Add" },
    position: { message: "Position" },
    positionOptionSlash: { message: "Dropdown on /" },
    positionOptionAbove: { message: "Above input field" },
    positionOptionSidebar: { message: "Bottom right from chat column" },
    positionLimitWarning: {
      message:
        "You cannot create more than 10 elements with positions 'Above input field' and 'Bottom right from the chat column'.",
    },
    availableForSubscribers: {
      message: "This feature is available only with Community status",
    },
    checkSubscription: { message: "Check status" },
    funPayChat: { message: "FunPay Community chat" },
    funPayChannel: { message: "FunPay Community channel" },
    linkYourTelegram: { message: "Link your Telegram to check status" },
    falseSubscriptionCheck: { message: "Status not granted" },
    tariffsTitle: { message: "Status" },
    tariffsLoading: { message: "Loading…" },
    tariffsEmpty: { message: "No plans available." },
    tariffsLoadFailed: {
      message: "Failed to load plans ($REASON$)",
      placeholders: { reason: { content: "$1" } },
    },
    communityActiveBadge: { message: "Active" },
    tariffsCurrentPlanLabel: { message: "Current plan" },
    tariffsObtainedLabel: { message: "Obtained" },
    tariffsLoginRequired: { message: "Please sign in first" },
    tariffsBuyButton: { message: "Buy" },
    tariffsRenewButton: { message: "Renew" },
    tariffsBuyOpening: { message: "Opening checkout…" },
    tariffsBuyFailed: { message: "Couldn't start checkout. Please try again." },
    featureGatedCommunityTitle: { message: "Available with Community" },
    featureGatedProfileDescriptionMessage: {
      message:
        "A public profile description is available with the Community plan.",
    },
    featureGatedProTitle: { message: "Available with Pro" },
    featureGatedPremiumTitle: { message: "Available with Premium" },
    featureGatedFastMessagesMessage: {
      message:
        "Fast Messages is a Community-tier feature. Get Community to enable it.",
    },
    featureGatedPurchasesStatsMessage: {
      message:
        "Purchase statistics is a Community-tier feature. Get Community to enable it.",
    },
    featureGatedSectionCommissionMessage: {
      message:
        "Section commission display is a Pro-tier feature. Get Pro to enable it.",
    },
    featureGatedLotTranslateMessage: {
      message: "Lot translation is a Pro-tier feature. Get Pro to enable it.",
    },
    profileDescriptionHeading: { message: "Description" },
    profileDescriptionAdd: { message: "Add description" },
    profileDescriptionEditTitle: { message: "Edit description" },
    profileDescriptionPlaceholder: {
      message:
        "Tell others about yourself - this description is visible to all extension users.",
    },
    profileDescriptionSave: { message: "Save" },
    profileDescriptionCancel: { message: "Cancel" },
    profileDescriptionSaved: { message: "Description saved" },
    profileDescriptionError: { message: "Could not save the description" },
    profileDescriptionLinkFirst: {
      message: "Link your FunPay account on the Lite Bot page first",
    },
    profileDescriptionContactBlocked: {
      message:
        "Sharing contact info (Telegram, email, phone, social media, etc.) is against FunPay rules and can get your account banned. Remove contacts from the description.",
    },
    profileDescriptionProhibited: {
      message:
        "Prohibited content (drugs, pornography) is against FunPay rules and can get your account banned. Remove the prohibited content from the description.",
    },
    funpayLinkTitle: { message: "FunPay account" },
    funpayLinkBusyStart: { message: "Preparing…" },
    funpayLinkBusyCreating: { message: "Creating verification lot…" },
    funpayLinkBusyConfirming: { message: "Confirming…" },
    funpayLinkBusyUnlink: { message: "Unlinking…" },
    funpayLinkSuccess: { message: "FunPay account linked" },
    funpayUnlinkSuccess: { message: "FunPay account unlinked" },
    funpayLinkFailed: { message: "Couldn’t link the FunPay account" },
    funpayLinkErrCode: {
      message: "Verification lot not found, please try again",
    },
    funpayLinkErrMismatch: {
      message: "The lot was created under a different FunPay account",
    },
    funpayLinkErrExpired: { message: "The link request expired, start again" },
    funpayLinkErrFunpay: {
      message: "Could not read the lot from FunPay, please try again",
    },
    funpayLinkErrSession: { message: "Your session expired, sign in again" },
    funpayLinkErrCantSell: {
      message:
        "Sales aren't open on this FunPay account yet, so it couldn't be linked. To open them, take FunPay's short seller test and add a phone number, then try again.",
    },
    funpayLinkErrLotFailed: {
      message:
        "Couldn't link the FunPay account: the verification lot could not be created. Most often this means sales aren't open on the account yet - it has never created a lot. To open them, take FunPay's short seller test and add a phone number, then try again.",
    },
    enableLotTranslate: { message: "Translate lot to English" },
    enableLotTranslateDesc: {
      message:
        "Adds a 'Translate to English' button on the lot edit page that fills the English title and description from the Russian copy.",
    },
    autoTranslateModeButton: { message: "Translate on button press" },
    autoTranslateModeAuto: { message: "Translate automatically on save" },
    lotTranslateAutoFailed: {
      message:
        "Could not translate - the lot was saved without the English text",
    },
    lotTranslateAutoNoPermission: {
      message:
        "No access to the translator. Grant it in the add-on settings, or switch auto-translate on again",
    },
    updateBannerTitle: { message: "A new version of the extension is out" },
    updateBannerBody: {
      message: "You have $CURRENT$, the current one is $LATEST$.",
      placeholders: {
        current: { content: "$1", example: "2.1.2" },
        latest: { content: "$2", example: "2.2.0" },
      },
    },
    updateStep1: {
      message: "Open the browser's extensions page: chrome://extensions/",
    },
    updateStep2: { message: "Turn on Developer mode." },
    updateStep3: { message: 'Press the "Update" button.' },
    updateStepFirefox1: {
      message:
        'Open the add-ons page: about:addons (Firefox menu → "Add-ons and themes")',
    },
    updateStepFirefox2: {
      message: "Click the gear icon above the list of extensions.",
    },
    updateStepFirefox3: { message: 'Choose "Check for Updates".' },
    showRealLotPrices: { message: "Real lot prices" },
    showRealLotPricesDesc: {
      message:
        "Under each lot's price in the section table, shows the real price: the amount without FunPay commission and payment-system fees (what the seller actually receives).",
    },
    featureGatedRealLotPricesMessage: {
      message: "Real lot prices is a Pro-tier feature. Get Pro to enable it.",
    },
    lotTranslateButton: { message: "Translate from Russian" },
    lotTranslateSectionLabel: { message: "Automatic translation" },
    lotTranslateStatusLoading: { message: "Translating…" },
    lotTranslateStatusDone: { message: "Lot translated successfully" },
    lotTranslateStatusError: { message: "Could not translate" },
    lotTranslatePermissionDenied: { message: "Translation permission denied" },
    lotTranslateValidationMissingTitle: {
      message: "Fill in the Russian lot title first",
    },
    lotTranslateValidationMissingDesc: {
      message: "Fill in the Russian lot description first",
    },
    lotTranslateValidationMissingBoth: {
      message: "Fill in the Russian title and description first",
    },
    lotTranslateConsentTitle: { message: "Translation permission" },
    lotTranslateConsentBody: {
      message:
        "To translate lot titles and descriptions into English, the extension needs one-time access to translate.googleapis.com.",
    },
    lotTranslateConsentGrant: { message: "Allow" },
    lotTranslateConsentCancel: { message: "Cancel" },
    featureGatedOpenTariffs: { message: "Open statuses" },
    featureGatedHideThis: { message: "Don't show this feature" },
    featureGatedHiddenToast: {
      message:
        "We won't show it again. To bring it back, open the extension settings, Customisation.",
    },
    pendingUnlockReady: {
      message:
        "Your subscription changed - the feature is available. Reload the page if you still cannot see it.",
    },
    trialOfferTitle: { message: "3 days of Premium, free" },
    trialOfferBody: {
      message:
        "A gift from us: every feature of the extension is yours for 3 days - use anything you like. No card needed.",
    },
    trialOfferStart: { message: "Get Premium for 3 days" },
    trialOfferLater: { message: "Not now" },
    trialOfferNote: { message: "The gift is tied to your FunPay account." },
    trialEndingToast: {
      message:
        "Your Premium trial ends in $LEFT$. Get Premium to keep everything on - your settings stay.",
      placeholders: { left: { content: "$1" } },
    },
    trialEndsHours: {
      message: "$N$ h",
      placeholders: { n: { content: "$1" } },
    },
    trialEndsMinutes: {
      message: "$N$ min",
      placeholders: { n: { content: "$1" } },
    },
    trialEndedTitle: { message: "Your Premium trial has ended" },
    trialEndedBody: {
      message:
        "Premium features are off now. Your settings are kept: get Premium and everything works again, with nothing to set up anew.",
    },
    trialEndedOffLead: { message: "Switched off:" },
    trialEndedOffMore: {
      message: "and $N$ more",
      placeholders: { n: { content: "$1" } },
    },
    trialEndedBuy: { message: "Get Premium" },
    trialEndedOtherPlans: { message: "Other plans" },
    trialEndedLater: { message: "Not now" },
    trialOfferWorking: { message: "Turning on…" },
    trialStartedToast: {
      message: "Premium is on for 3 days. Everything is available already.",
    },
    trialAlreadyUsed: {
      message: "This FunPay account has already had its trial.",
    },
    trialHasPaidPlan: {
      message: "The trial is for accounts that have never had a paid plan.",
    },
    trialNeedsLogin: { message: "Sign in to start the trial." },
    trialClosed: {
      message: "The trial isn't available right now. Please try again later.",
    },
    trialFailed: {
      message: "Could not start the trial. Please try again later.",
    },
    trialNotEstablished: {
      message: "The trial is for sellers with at least one review on FunPay.",
    },
    trialFunpayUnreachable: {
      message: "Could not check the account on FunPay. Please try again.",
    },
    trialLinkFailed: {
      message: "Could not link the FunPay account. Please try again.",
    },
    trialNeedsFunpay: {
      message: "Sign in to FunPay in this browser to get the trial.",
    },
    settingsCategoryAccount: { message: "Account" },
    accountSubscriptionTitle: { message: "Status" },
    accountSubscriptionBasic: { message: "Basic" },
    accountSubscriptionExpires: { message: "Active until" },
    accountSubscriptionTrial: { message: "trial" },
    accountSubscriptionLifetime: { message: "Lifetime" },
    accountSignInPrompt: {
      message: "Sign in to manage your account and status.",
    },
    settingsCategoryInfo: { message: "Info" },
    settingsCategoryChangelog: { message: "Changelog" },
    changelogHeading: { message: "What changed" },
    changelogDesc: {
      message:
        "The list of changes by extension version - new features, improvements, and fixes.",
    },
    changelogLoading: { message: "Loading the changelog…" },
    changelogEmpty: {
      message:
        "The changelog isn't available right now. Every release is announced on our Telegram channel.",
    },
    changelogInstalled: { message: "you're on this one" },
    changelogTypeAdded: { message: "New" },
    changelogTypeImproved: { message: "Improved" },
    changelogTypeFixed: { message: "Fixed" },
    changelogTypeRemoved: { message: "Removed" },
    settingsCategoryReviews: { message: "Reviews" },
    reviewsRatingLimitsButton: { message: "View rating restrictions" },
    reviewsRatingLimitsDesc: {
      message: "Information about the account's rating restrictions",
    },
    settingsCategoryApi: { message: "API" },
    infoVersionLabel: { message: "🔖 Extension version" },
    deleteAccountLabel: { message: "🗑️ Account deletion" },
    deleteAccountBlocked: {
      message:
        "An account with an active subscription cannot be deleted. Wait until the subscription expires.",
    },
    deleteAccountButton: { message: "Delete FunPay Lite Bot account" },
    deleteAccountConfirmTitle: {
      message: "Delete your FunPay Lite Bot account?",
    },
    deleteAccountConfirmText: {
      message:
        "Your FunPay Lite Bot account will be deleted along with your order history. Linked accounts (FunPay, Telegram, Google, VK) will be unlinked. The extension keeps working, just signed out. This cannot be undone.",
    },
    deleteAccountConfirmCta: { message: "Yes, delete" },
    deleteAccountDone: { message: "Account deleted" },
    deleteAccountFailed: {
      message: "Could not delete the account. Please try again later.",
    },
    accountIdCopyHint: { message: "Click to copy the account ID" },
    accountIdCopied: { message: "Account ID copied" },
    accountIdCopyFailed: { message: "Could not copy the account ID" },
    accountIdLabel: { message: "🆔 Account ID" },
    goldenKeyTitle: { message: "Authorization - Golden Key" },
    goldenKeyDesc: {
      message:
        "This key is stored in your FunPay cookies and is often used by external automation tools. It grants full access to your account - never share it.",
    },
    goldenKeyMissing: {
      message: "Key not found. Sign in on funpay.com to populate it.",
    },
    goldenKeyShow: { message: "Show" },
    goldenKeyHide: { message: "Hide" },
    goldenKeyCopy: { message: "Copy" },
    goldenKeyCopied: { message: "Key copied" },
    goldenKeyRevoke: { message: "Revoke" },
    goldenKeyRevokeConfirmTitle: { message: "Revoke Golden Key?" },
    goldenKeyRevokeConfirmText: {
      message:
        "This will drop your FunPay session in all browsers. You'll be signed out and will need to log in on funpay.com again.",
    },
    goldenKeyRevokeConfirmCta: { message: "Yes, revoke" },
    goldenKeyRevokeCancel: { message: "Cancel" },
    goldenKeyRevoked: { message: "Golden Key revoked" },
    goldenKeyRevokeFailed: {
      message:
        "Could not revoke the key. Try logging out manually on funpay.com.",
    },
    tariffsBasicIncluded: { message: "Free" },
    communityLinkTelegramFirst: {
      message: "Link Telegram in the user menu first, then come back.",
    },
    authLogIn: { message: "Log In" },
    authRegister: { message: "Register" },
    authRegisterWith: {
      message: "Sign up with $PROVIDER$",
      placeholders: { provider: { content: "$1" } },
    },
    authLoginSubtitle: { message: "Use the provider you signed up with." },
    authRegisterSubtitle: { message: "Create a new FunPayLiteBot account." },
    authNoAccountTitle: { message: "Account not found" },
    authNoAccountBody: {
      message:
        "We couldn't find a FunPayLiteBot account linked to this provider. Do you want to register a new one with it?",
    },
    authNoAccountConfirm: { message: "Register" },
    authAlreadyRegisteredTitle: { message: "Account already exists" },
    authAlreadyRegisteredBody: {
      message:
        "An account is already registered with this provider. Do you want to log in instead?",
    },
    authAlreadyRegisteredConfirm: { message: "Log in" },
    authCancel: { message: "Cancel" },
    authNoAccountSwitchHint: {
      message: "Account not found. Switch to the Register tab to create one.",
    },
    authAlreadyRegisteredSwitchHint: {
      message: "Account already exists. Switch to the Log in tab to access it.",
    },
    authTelegramFastLoginUnsupported: {
      message:
        "Telegram's instant-login doesn't redirect back to extensions. Please log in by QR code or phone number instead.",
    },
    authLogOut: { message: "Log Out" },
    authLoginWith: {
      message: "Continue with $PROVIDER$",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authLinkedAccounts: { message: "Linked accounts" },
    authLinked: { message: "Linked" },
    authNotLinked: { message: "Not linked" },
    authLink: { message: "Link" },
    authUnlink: { message: "Unlink" },
    authLinkConflict: {
      message: "This $PROVIDER$ account is already linked to another user.",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authCannotUnlinkLast: {
      message: "Cannot unlink the only provider - link another one first.",
    },
    authSessionExpired: { message: "Session expired. Please log in again." },
    authLoginFailed: {
      message: "Login failed: $REASON$",
      placeholders: {
        reason: { content: "$1", example: "OAUTH_GOOGLE_TOKEN_REJECTED" },
      },
    },
    authLoggedIn: {
      message: "Signed in as $NAME$",
      placeholders: { name: { content: "$1", example: "Andrii" } },
    },
    authLoggedOut: { message: "Signed out" },
    authProviderLinked: {
      message: "$PROVIDER$ linked",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authProviderUnlinked: {
      message: "$PROVIDER$ unlinked",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    telegramLinkTitle: { message: "Link Telegram" },
    telegramLinkOAuthOption: { message: "Log in with Telegram" },
    telegramLinkOAuthDesc: {
      message:
        "Authorize in the browser via Telegram. The quickest way if Telegram opens for you.",
    },
    telegramLinkCodeOption: { message: "Link with a code" },
    telegramLinkCodeDesc: {
      message:
        "Use this if Telegram login is blocked in your browser. We'll give you a code to send to the bot.",
    },
    telegramLinkCodeInstructions: {
      message: "Open @FunPayLiteBot and send this code to it.",
    },
    telegramLinkCodeWaiting: {
      message: "Waiting for confirmation from the bot…",
    },
    telegramLinkCodeSuccess: { message: "Telegram linked successfully!" },
    telegramLoginCodeButton: { message: "Log in with a Telegram code" },
    telegramLoginCodeTitle: { message: "Log in with Telegram" },
    telegramLoginOAuthOption: { message: "Standard login" },
    telegramLoginOAuthDesc: {
      message: "Via the Telegram page (oauth.telegram.org).",
    },
    telegramLoginCodeOption: { message: "Log in with a code" },
    telegramLoginCodeDesc: {
      message: "If the Telegram page won't open. Send a code to the bot.",
    },
    telegramLoginCodeInstructions: {
      message: "Open @FunPayLiteBot, send this code, and confirm the login.",
    },
    telegramLoginCodeWaiting: {
      message: "Waiting for confirmation in Telegram…",
    },
    telegramLoginCodeSuccess: { message: "Done! You're logged in." },
    telegramLoginCodeError: {
      message: "Couldn't complete the login. Please try again.",
    },
    authRetry: { message: "Retry" },
    telegramLinkOpenBot: { message: "Open the bot" },
    telegramLinkCopy: { message: "Copy" },
    telegramLinkCodeError: {
      message: "Couldn't get a code. Please try again.",
    },
    telegramLinkAlreadyLinked: {
      message: "Telegram is already linked to your account.",
    },
    telegramLinkCopied: { message: "Code copied" },
    quickCopyOrderId: { message: "Copy order number" },
    quickCopyOrderIdDesc: {
      message:
        "On the order page, adds a copy icon - click it to copy the order number.",
    },
    orderIdCopied: { message: "Order number copied" },
    orderIdCopyHint: { message: "Click to copy the order number" },
    orderIdCopyFailed: { message: "Failed to copy the order number" },
    featureGatedQuickCopyMessage: {
      message:
        "Copy order number is a Community feature. Get Community to enable it.",
    },
    showUnconfirmedSales: { message: "Copy ID of unconfirmed sales" },
    showUnconfirmedSalesDesc: {
      message:
        "Adds a «Copy unconfirmed orders» button to the Sales page: the numbers of orders paid but not yet confirmed.",
    },
    unconfirmedOrdersButton: { message: "Copy unconfirmed orders" },
    unconfirmedSalesTitle: { message: "Unconfirmed sales" },
    unconfirmedOrdersThresholdAll: { message: "All paid" },
    unconfirmedOrdersThreshold12: { message: "Paid >12 hours" },
    unconfirmedOrdersThreshold24: { message: "Paid >24 hours" },
    unconfirmedOrdersThreshold48: { message: "Paid >48 hours" },
    unconfirmedOrdersThreshold72: { message: "Paid >72 hours" },
    unconfirmedOrdersCount: {
      message: "Found: $COUNT$",
      placeholders: { count: { content: "$1", example: "42" } },
    },
    unconfirmedOrdersLoading: { message: "Loading…" },
    unconfirmedOrdersCopy: { message: "Copy" },
    unconfirmedOrdersCopied: { message: "Copied ✓" },
    unconfirmedOrdersClose: { message: "Close" },
    unconfirmedOrdersStatusError: { message: "Could not fetch the list" },
    featureGatedUnconfirmedOrdersMessage: {
      message:
        "Copying unconfirmed orders is a Pro-tier feature. Get Pro to enable it.",
    },
    supportConfirmTickets: { message: "Support tickets to confirm orders" },
    supportConfirmTicketsDesc: {
      message:
        "If a buyer doesn't confirm an order, send a FunPay support ticket with a button on the order page - right away or as a list from the My sales page.",
    },
    featureGatedSupportConfirmTickets: {
      message:
        "Filing support tickets to confirm orders is a Pro-tier feature. Get Pro to enable it.",
    },
    supportConfirmSend: { message: "Send for confirmation" },
    supportConfirmSentAt: {
      message: "Ticket sent $TIME$",
      placeholders: { time: { content: "$1", example: "10/09, 14:05" } },
    },
    supportConfirmAddToList: { message: "Add to confirmation list" },
    supportConfirmRemoveFromList: { message: "Remove from confirmation list" },
    supportConfirmAdded: {
      message:
        "Order added to the confirmation list. Orders in the list: $COUNT$. Send the list from the My sales page.",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    supportConfirmRemoved: {
      message: "Order removed from the confirmation list.",
    },
    supportConfirmListButton: {
      message: "Send confirmation list ($COUNT$)",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    supportTicketSendFromCopy: { message: "Send to support" },
    supportTicketTitle: { message: "FunPay support ticket" },
    supportTicketLead: {
      message:
        "Topic: the buyer forgot to confirm the order. Support will read the order chat and confirm the order if the goods were delivered.",
    },
    supportTicketChecking: {
      message: "Checking which orders are still waiting for confirmation…",
    },
    supportTicketOrders: { message: "Orders in the ticket" },
    supportTicketText: { message: "Ticket text" },
    supportTicketTextOne: {
      message:
        "Hello! The buyer hasn't confirmed order $ORDERS$. The goods were delivered, as the order chat shows. Please confirm the order. Thank you!",
      placeholders: { orders: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketTextMany: {
      message:
        "Hello! The buyers haven't confirmed orders $ORDERS$. The goods were delivered, as the order chats show. Please confirm these orders. Thank you!",
      placeholders: {
        orders: { content: "$1", example: "#BLPWJF6T, #GZSHW9UT" },
      },
    },
    supportTicketOverflow: {
      message:
        "One ticket takes up to $MAX$ orders. The other $COUNT$ can go in the next ticket.",
      placeholders: {
        max: { content: "$1", example: "25" },
        count: { content: "$2", example: "4" },
      },
    },
    supportTicketSkippedNotPaid: {
      message:
        "No longer waiting for confirmation, left out of the ticket: $LIST$",
      placeholders: { list: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketSkippedRecent: {
      message:
        "Already sent to support in the last 24 hours, left out of the ticket: $LIST$",
      placeholders: {
        list: { content: "$1", example: "#BLPWJF6T (10/09, 14:05)" },
      },
    },
    supportTicketNothing: { message: "Nothing to send." },
    supportTicketRemoveFromList: { message: "Remove from the list" },
    supportTicketRemoveFromTicket: { message: "Remove from the ticket" },
    supportTicketSend: { message: "Send ticket" },
    supportTicketSending: { message: "Sending the ticket…" },
    supportTicketSent: {
      message: "Ticket sent. Support will reply in the ticket.",
    },
    supportTicketSentToast: {
      message: "The FunPay support ticket has been sent.",
    },
    supportTicketOpen: { message: "Open the ticket" },
    supportTicketMyTickets: { message: "My tickets" },
    supportTicketNewManual: { message: "Create a ticket manually" },
    supportTicketRetry: { message: "Try again" },
    supportTicketErrLogin: {
      message:
        "Could not open FunPay support. Make sure you are logged in to FunPay and try again.",
    },
    supportTicketErrCheck: {
      message:
        "Could not check the orders on FunPay. Check your connection and try again.",
    },
    supportTicketErrNetwork: {
      message:
        "Could not reach FunPay support. The ticket was not sent. Please try again.",
    },
    supportTicketErrForm: {
      message:
        "The FunPay support form has changed, so the extension sent nothing. Please create the ticket manually.",
    },
    supportTicketErrRejected: {
      message: "FunPay support did not accept the ticket: $REASON$",
      placeholders: { reason: { content: "$1", example: "HTTP 403" } },
    },
    supportTicketErrUncertain: {
      message:
        "Could not tell whether the ticket was created. Before sending again, open your support tickets and check.",
    },
    supportTicketErrBusy: {
      message: "A ticket is already being sent. Please wait for the result.",
    },
    supportTicketErrGeneric: {
      message: "Could not send the ticket. Try again.",
    },
    supportTicketErrCheckLogin: {
      message:
        "It looks like you are logged out of FunPay. Log in and try again.",
    },
    supportTicketErrAccount: {
      message:
        "FunPay support is logged in as $SUPPORT$, but on FunPay you are $FUNPAY$. The ticket was not sent. Open support, log out there and try again.",
      placeholders: {
        support: { content: "$1", example: "OldNick" },
        funpay: { content: "$2", example: "MaxQV" },
      },
    },
    supportTicketOpenSupport: { message: "Open support" },
    supportTicketSkippedUnseen: {
      message:
        "Not found among your unconfirmed sales, left out of the ticket: $LIST$",
      placeholders: { list: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketUncertainMark: { message: "outcome unknown" },
    supportConfirmMaybeSentAt: {
      message: "Ticket possibly sent $TIME$",
      placeholders: { time: { content: "$1", example: "10/09, 14:05" } },
    },
    welcomeMessageTitle: { message: "Welcome message" },
    welcomeMessageDesc: {
      message:
        "Automatically sends a preset message to a buyer who writes to you for the first time (or again, after the timeout). Runs in the background while the browser is open.",
    },
    welcomeMessagePlaceholder: {
      message: "Hello! Thanks for reaching out, I'll reply shortly.",
    },
    welcomeMessageVars: {
      message:
        "Variables: {buyername} - buyer's name, {welcome} - time-of-day greeting, {date} - date and time.",
    },
    welcomeMessageCooldownLabel: { message: "Send again after" },
    welcomeMessageUnitHours: { message: "hours" },
    welcomeMessageUnitDays: { message: "days" },
    welcomeMessageCooldownDesc: {
      message:
        "If the buyer writes again after this time, the message is sent again. 0 - send only once per chat.",
    },
    welcomeMessageImagesLabel: { message: "Images (optional)" },
    welcomeMessageAddImage: { message: "Add image" },
    welcomeMessageRemoveImage: { message: "Remove" },
    welcomeMessageImageNotImage: { message: "Please choose an image." },
    welcomeMessageImageFailed: { message: "Couldn't add the image." },
    featureGatedWelcomeMessage: {
      message:
        "The welcome message is a Pro-tier feature. Get Pro to enable it.",
    },
    welcomeMessageSettings: { message: "Settings" },
    reviewReplyTitle: { message: "Auto-reply to reviews" },
    reviewReplyDesc: {
      message:
        "Automatically posts a reply to a buyer's review on your order - a separate text per rating (1-5 stars). Runs in the background while the browser is open.",
    },
    reviewReplySettings: { message: "Settings" },
    reviewReplyModalDesc: {
      message:
        "Set a reply for each rating. A reply is sent only when the received rating has text. An empty field means no reply for that rating.",
    },
    reviewReplyPlaceholder: {
      message: "Thank you for your review and rating!",
    },
    reviewReplyVars: {
      message:
        "Variables: {buyername} - buyer's name, {lotname} - lot name, {orderid} - order number, {stars} - rating, {date} - date and time.",
    },
    featureGatedReviewReply: {
      message:
        '"Auto-reply to reviews" is a Premium feature. Get Premium to enable it.',
    },
    aiReviewReplyTitle: { message: "AI auto-reply to a buyer review" },
    aiReviewReplyDesc: {
      message:
        "Answers a review with text written by AI from the buyer's own words instead of a fixed template. If the AI is unavailable, your template for that rating is sent. Runs in the background while the browser is open.",
    },
    aiReviewReplySettings: { message: "Settings" },
    aiReviewReplyModalDesc: {
      message:
        'The reply is published publicly in your name, so the AI never promises refunds or discounts, never admits fault and never leaves contacts outside FunPay. If a reply fails the check, your template from "Auto-reply to reviews" is sent instead.',
    },
    aiReviewReplyRatingsLabel: { message: "Which ratings to answer" },
    aiReviewReplyNoteLabel: { message: "Preferred tone" },
    aiReviewReplyNotePlaceholder: {
      message: "For example: keep it short and informal, no emoji",
    },
    aiReviewReplyHint: {
      message:
        "Up to 300 characters. Shares the lot-text allowance of 1000 generations per month.",
    },
    aiReviewReplySave: { message: "Save" },
    aiReviewReplySaved: { message: "Saved" },
    aiReviewReplyUnsaved: { message: "Unsaved changes" },
    featureGatedAiReviewReply: {
      message:
        '"AI auto-reply to a buyer review" is a Premium feature. Get Premium to enable it.',
    },
    autoReplyTitle: { message: "Keyword auto-reply" },
    autoReplyDesc: {
      message:
        "Automatically sends a configured response when a buyer's message exactly matches a command or contains a given word or phrase. Runs in the background while the browser is open.",
    },
    autoReplySettings: { message: "Settings" },
    autoReplyModalDesc: {
      message:
        'Add rules. For each new buyer message, the first matching rule fires. "Exact match" - the message equals the keyword; "Contains" - the keyword occurs in the message.',
    },
    autoReplyColKeyword: { message: "Keyword / phrase" },
    autoReplyColMode: { message: "Mode" },
    autoReplyColResponse: { message: "Response" },
    autoReplyColEnabled: { message: "On" },
    autoReplyModeExact: { message: "Exact match" },
    autoReplyModeContains: { message: "Contains" },
    autoReplyKeywordPlaceholder: { message: "e.g. price" },
    autoReplyResponsePlaceholder: { message: "Response text" },
    autoReplyAddRule: { message: "Add rule" },
    autoReplyVars: {
      message: "Variables: {buyername} - buyer's name, {date} - date and time.",
    },
    featureGatedAutoReply: {
      message:
        '"Keyword auto-reply" is a Premium feature. Get Premium to enable it.',
    },
    orderConfirmReplyTitle: { message: "Auto-reply after order confirmation" },
    orderConfirmReplyDesc: {
      message:
        "Automatically sends a set message right after a buyer confirms an order. Runs in the background while the browser is open.",
    },
    orderConfirmReplySettings: { message: "Settings" },
    orderConfirmReplyModalDesc: {
      message:
        'The message is sent once per order confirmation. It defaults to "Thank you for your purchase!" and you can change it to anything.',
    },
    orderConfirmReplyPlaceholder: { message: "Thank you for your purchase!" },
    orderConfirmReplyVars: {
      message:
        "Variables: {buyername} - buyer name, {orderid} - order number, {date} - date and time.",
    },
    orderConfirmReplyDefault: { message: "Thank you for your purchase!" },
    orderConfirmReplySave: { message: "Save" },
    orderConfirmReplySaved: { message: "Saved" },
    orderConfirmReplyUnsaved: { message: "Unsaved changes" },
    featureGatedOrderConfirmReply: {
      message:
        '"Auto-reply after order confirmation" is a Premium feature. Get Premium to enable it.',
    },
    lotCostPrice: { message: "Lot cost price" },
    lotCostPriceDesc: {
      message:
        "Adds a cost-price field with a currency picker on the lot-edit page and shows your net profit. The cost price is also included in the order export. Applies to existing lots.",
    },
    costPriceLabel: { message: "Cost price (optional)" },
    costPriceNetProfitLabel: { message: "Net profit" },
    costPriceNoRate: { message: "no rate" },
    costPriceWithdrawalCommission: { message: "Withdrawal fee" },
    featureGatedLotCostPrice: {
      message:
        '"Lot cost price" is a Premium feature. Get Premium to enable it.',
    },
    finances: { message: "Finances" },
    showFinancesStats: { message: "Finance statistics" },
    showFinancesStatsDesc: {
      message:
        "On the balance page (/account/balance) shows statistics over your operations: income, expenses, net flow, a per-type breakdown and a chart.",
    },
    withdrawalAvailability: { message: "Available to withdraw" },
    withdrawalAvailabilityDesc: {
      message:
        "On the Finances page, shows how much money can already be withdrawn and how much comes free later because of the 48-hour withdrawal delay, and when. If your account has no delay, Lite Bot can tell from your withdrawals and turns this off by itself.",
    },
    withdrawalBlockLabel: { message: "Available to withdraw" },
    withdrawalNow: { message: "Can be withdrawn now" },
    withdrawalLater: { message: "Available later" },
    withdrawalLaterNone: { message: "Nothing is waiting" },
    withdrawalAllBy: {
      message: "all of it by $TIME$",
      placeholders: { time: { content: "$1" } },
    },
    withdrawalIn: {
      message: "in $TIME$",
      placeholders: { time: { content: "$1" } },
    },
    withdrawalHoursMinutes: {
      message: "$HOURS$ h $MINUTES$ min",
      placeholders: { hours: { content: "$1" }, minutes: { content: "$2" } },
    },
    withdrawalHours: {
      message: "$HOURS$ h",
      placeholders: { hours: { content: "$1" } },
    },
    withdrawalMinutes: {
      message: "$MINUTES$ min",
      placeholders: { minutes: { content: "$1" } },
    },
    withdrawalSoon: { message: "in under a minute" },
    withdrawalMore: {
      message: "$COUNT$ more",
      placeholders: { count: { content: "$1" } },
    },
    withdrawalLess: { message: "Show less" },
    withdrawalRule: {
      message:
        "Money from sales, top-ups and refunds can be withdrawn 48 hours after it reaches the balance.",
    },
    withdrawalHide: { message: "No delay on my account - hide" },
    withdrawalHiddenToast: {
      message:
        'Hidden. To bring it back: Lite Bot → Finances → "Available to withdraw".',
    },
    withdrawalInstantOffToast: {
      message:
        'Withdrawals on this account are instant, there is no delay - "Available to withdraw" is now off. To turn it back on: Lite Bot → Finances.',
    },
    withdrawalPartial: {
      message:
        "Counted the latest $COUNT$ operations: there are more within 48 hours.",
      placeholders: { count: { content: "$1" } },
    },
    exportFinancesEnable: { message: "Finance export" },
    exportFinancesEnableDesc: {
      message:
        "An export button for the operations history to Excel / JSON on the balance page.",
    },
    financesStatsTitle: { message: "Statistics" },
    financesCardIncome: { message: "Income" },
    financesCardExpense: { message: "Expenses" },
    financesCardNet: { message: "Net flow" },
    financesCardOps: { message: "Total operations" },
    financesTypesTitle: { message: "By operation type" },
    financesChartTitle: { message: "Dynamics (income / expenses)" },
    financesUpdate: { message: "Update" },
    financesExport: { message: "Export" },
    financesUpdating: { message: "Loading operations…" },
    financesEmpty: { message: "No data for the period" },
    financesTypeOrder: { message: "Orders" },
    financesTypePayment: { message: "Deposits" },
    financesTypeWithdraw: { message: "Withdrawals" },
    financesTypeWithdrawCancel: { message: "Withdrawal cancels" },
    financesTypeRefund: { message: "Refunds" },
    financesTypeOther: { message: "Other" },
    financesStatusComplete: { message: "Completed" },
    financesStatusWaiting: { message: "Pending" },
    financesStatusCancel: { message: "Cancelled" },
    financesTopIncome: { message: "Most income from" },
    financesTopExpense: { message: "Most spent on" },
    financesDiagramStatus: { message: "By status" },
    financesDiagramCurrency: { message: "By currency" },
    financesDetailNet: { message: "Net flow by type" },
    exportFinancesTitle: { message: "Finance export" },
    featureGatedFinanceStats: {
      message:
        '"Finances" (statistics & export) is a Premium feature. Get Premium to enable it.',
    },
    settingsCategoryNotifications: { message: "Notifications" },
    bulkLotEdit: { message: "Bulk lot editing" },
    bulkLotEditDesc: {
      message:
        'Adds a "Select lots" button to your offers page and to your own profile: pick any number of lots and switch them on or off, change their price, or delete them. Inside a section you can also drag lots into a new order, which is applied by recreating the ones that moved.',
    },
    featureGatedBulkLotEdit: {
      message: "Bulk lot editing requires the Pro plan.",
    },
    bulkEnter: { message: "Select lots" },
    bulkExit: { message: "Done" },
    bulkOrderApply: { message: "Apply order" },
    bulkOrderAsk: {
      message:
        "Lots to be recreated: $COUNT$ of $TOTAL$. Their ids will change, so links to them in chats and on other sites stop working and the lots lose their age. Auto-delivery goods are carried over. The copy is created before the original is deleted, so no lot can go missing.",
      placeholders: { count: { content: "$1" }, total: { content: "$2" } },
    },
    bulkOrderConfirm: {
      message: "Recreate: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderDone: {
      message: "Order applied. Lots recreated: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderDuplicate: {
      message:
        "Lot $ID$ now exists twice - the extra copy can be deleted by hand",
      placeholders: { id: { content: "$1" } },
    },
    bulkOrderLotLimit: {
      message:
        'You already have as many lots in this section as FunPay allows, so a copy will not fit beside its original. Press "Apply order" again and the lots will be recreated the other way round: deleted first, then created.',
    },
    bulkOrderAskAtCap: {
      message:
        "You already have as many lots in this section as FunPay allows, so a copy may not fit beside its original. Then the lots will be recreated the other way round: deleted first, then created. Before a lot is deleted, all of its data, auto-delivery goods included, is saved, and if FunPay will not create it again, it can be restored. Lots to recreate: $COUNT$ of $TOTAL$. They get new numbers and lose their age.",
      placeholders: { count: { content: "$1" }, total: { content: "$2" } },
    },
    bulkOrderLost: {
      message:
        'Lot "$TITLE$" was deleted, and FunPay would not create it again',
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreTitle: { message: "A lot was not created again" },
    bulkRestoreAsk: {
      message:
        'Lot "$TITLE$" was deleted while changing the order and has not been created again yet. All of its data, auto-delivery goods included, is saved. Create it now?',
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreConfirm: { message: "Create the lot" },
    bulkRestoreNotNow: { message: "Not now" },
    bulkRestoreForgetTitle: { message: "Forget this lot?" },
    bulkRestoreForgetAsk: {
      message:
        'The saved data of lot "$TITLE$" will be deleted, and it cannot be restored after that. If you have already created it yourself, forget it. If not, keep it, and we will offer it again when you open this section.',
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreForget: { message: "Forget" },
    bulkRestoreKeep: { message: "Keep" },
    bulkRestoreDone: {
      message:
        'Lot "$TITLE$" has been created again. Reload the page to see it in the list.',
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreNoRoom: {
      message: "there is no free slot in the section under FunPay's limit",
    },
    bulkRestoreFailed: {
      message:
        'Could not create lot "$TITLE$": $ERROR$. The data is saved - try again later.',
      placeholders: { title: { content: "$1" }, error: { content: "$2" } },
    },
    bulkOrderFailed: { message: "The order was only partly applied" },
    bulkOrderHint: { message: "Drag a row to change the order" },
    bulkOrderHintTouch: {
      message: "Drag a row by the dots on its left to change the order",
    },
    bulkOrderMovedN: {
      message: "Moved: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderNothing: { message: "The order is already this" },
    bulkOrderReset: { message: "Undo moves" },
    bulkOrderTitle: { message: "Apply the new order?" },
    bulkSelectAll: { message: "All" },
    bulkSelectedN: {
      message: "Selected: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkNothingSelected: { message: "Pick lots - click a row" },
    bulkActivate: { message: "Switch on" },
    bulkDeactivate: { message: "Switch off" },
    bulkPrice: { message: "Edit price" },
    bulkDelete: { message: "Delete" },
    bulkCancel: { message: "Stop" },
    bulkActivatedN: {
      message: "switched on: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeactivatedN: {
      message: "switched off: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPricedN: {
      message: "repriced: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeletedN: {
      message: "deleted: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkSkippedN: {
      message: "unchanged: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkFailedN: {
      message: "failed: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkUnknownN: {
      message: "unknown: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkRateLimited: { message: "FunPay asked us to slow down - stopped" },
    bulkCancelled: { message: "stopped" },
    bulkDeleteTitle: { message: "Delete the selected lots?" },
    bulkDeleteAsk: {
      message: "This will delete $COUNT$ lot(s). It cannot be undone.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeleteAskChips: {
      message:
        "This will delete $COUNT$ lot(s). Currency lots are skipped - they cannot be deleted this way. It cannot be undone.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeleteConfirm: {
      message: "Delete: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkChipsOnly: {
      message:
        "Currency lots are not deleted this way - set their stock to zero instead",
    },
    bulkPriceTitle: { message: "Change price" },
    bulkPriceLead: {
      message: "Applies to selected lots: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceModeSet: { message: "Set" },
    bulkPriceOpUp: { message: "Increase" },
    bulkPriceOpDown: { message: "Decrease" },
    bulkPriceChanging: {
      message: "Will change: $COUNT$ of $TOTAL$",
      placeholders: {
        count: { content: "$1", example: "10" },
        total: { content: "$2", example: "12" },
      },
    },
    bulkPriceRound: { message: "Round to whole" },
    bulkPriceMin: { message: "Not below" },
    bulkPriceMax: { message: "Not above" },
    bulkPricePreview: { message: "What you get" },
    bulkPriceMore: {
      message: "…and $COUNT$ more",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceUnreadable: {
      message: "No preview for: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceApply: { message: "Apply" },
    bulkPriceApplyN: {
      message: "Apply to $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotAiGenerate: { message: "AI lot text" },
    lotAiGenerateDesc: {
      message:
        "A button on the offer form asks the AI to write the title, description and post-purchase message from your lot data. The result appears in a separate window first, and nothing reaches the lot until you press insert.",
    },
    transferSearch: { message: "Search by name" },
    transferSearching: { message: "Looking for sections with your lots" },
    transferNothingFound: { message: "No lots found" },
    transferOtherGames: { message: "Other" },
    transferFindNote: {
      message:
        "Sections missing? The ones where every lot is switched off do not show on the profile.",
    },
    transferFindNear: { message: "Search my games" },
    transferFindFar: { message: "Search everywhere (over an hour)" },
    lotTransfer: { message: "Lot export" },
    lotTransferDesc: {
      message:
        'Adds "Export lots" and "Import lots" buttons to the profile page: lots are saved to a JSON or Excel file, and new lots are created from one.',
    },
    featureGatedLotTransfer: {
      message: "Lot export requires the Premium plan.",
    },
    transferExportButton: { message: "Export lots" },
    transferImportButton: { message: "Import lots" },
    transferExportTitle: { message: "Export lots to a file" },
    transferImportTitle: { message: "Import lots from a file" },
    transferExportLead: { message: "Tick the sections you want to export." },
    transferImportLead: { message: "In the file" },
    transferSelectAll: { message: "Select all" },
    transferSelected: { message: "Sections selected" },
    transferKindLots: { message: "lots" },
    transferKindChips: { message: "currency" },
    transferIncludeDisabled: { message: "Include switched-off lots" },
    transferWarnTime: { message: "This will take about" },
    transferWarnKeepOpen: {
      message: "Keep this tab open and stay on the page while it runs.",
    },
    transferWarnSecrets: {
      message:
        "The file will contain your auto-delivery goods, logins and passwords included. Keep it the way you keep a password.",
    },
    lotManagementForeignTitle: { message: "Seller's lots" },
    lotManagementMenu: { message: "More" },
    lotManagementHide: { message: "Hide the lot management panel" },
    lotManagementHiddenToast: {
      message:
        "The lot management panel is hidden. To turn it back on, open the Lite Bot settings: «$SECTION$», «$SETTING$».",
      placeholders: {
        section: { content: "$1", example: "Предложения" },
        setting: {
          content: "$2",
          example: "Панель управления лотами в профиле",
        },
      },
    },
    lotSearchPlaceholder: { message: "Search lots: section or title" },
    lotSearchLabel: { message: "Search lots" },
    lotSearchClear: { message: "Clear" },
    lotSearchNothing: { message: "Nothing found" },
    lotSearchFound: {
      message: "Lots found: $COUNT$",
      placeholders: { count: { content: "$1", example: "12" } },
    },
    transferExportForeignButton: { message: "Export seller's lots" },
    transferExportForeignTitle: { message: "Export seller's lots" },
    transferExportForeignLead: {
      message: "Tick the seller's sections you want to save.",
    },
    transferWarnPublicOnly: {
      message:
        "Another profile can only be read as a buyer sees it: descriptions, price and stock. Auto-delivery goods and the after-payment message are not included - only the lot owner sees those.",
    },
    transferWarnPublicOff: {
      message:
        "Switched-off lots are not on the site, so they cannot be in the file. Lots created from such a file are switched off - check them before turning them on.",
    },
    transferCurrencySkip: { message: "Skipped because of the file's currency" },
    transferCreatedOff: {
      message:
        "Lots from another profile were created switched off - check them before turning them on",
    },
    transferParamUnplaced: {
      message: "Parameter not carried over, the default was left in place",
    },
    transferOtherLocalePass: { message: "second language version" },
    transferNoEnglish: {
      message:
        "Without an English version, these will not import where FunPay requires one",
    },
    transferNoRussian: {
      message:
        "Without a Russian version, the import will use the English text",
    },
    transferMissingEnglish: {
      message:
        "FunPay requires an English description the file does not have: export again, and if the original lot has no English text, add it yourself",
    },
    transferUnderMinute: { message: "under a minute" },
    transferMinutesShort: { message: "min" },
    transferHoursShort: { message: "h" },
    transferCancel: { message: "Cancel" },
    transferStartExport: { message: "Export" },
    transferStartImport: { message: "Import" },
    transferAbort: { message: "Stop" },
    transferAborting: { message: "Stopping…" },
    transferKeepOpenShort: { message: "Keep the tab open" },
    transferDone: { message: "Done" },
    transferSaved: { message: "Lots saved" },
    transferSavedChips: { message: "currency sections" },
    transferCreated: { message: "Lots created" },
    transferWroteChips: { message: "currency sections" },
    transferStopped: { message: "Stopped" },
    transferExportRateLimited: {
      message:
        "FunPay asked us to slow down - the export stopped. Wait a few minutes and run it again.",
    },
    transferSkippedDisabled: { message: "Switched-off skipped" },
    transferSkippedDeleted: { message: "Deleted skipped" },
    transferSectionSkipped: { message: "section skipped" },
    transferLotLimit: {
      message:
        "the section already holds as many of your lots as FunPay allows - no new ones can be created there",
    },
    transferFailed: { message: "Could not export" },
    transferImportFailed: { message: "Could not import" },
    transferBadJson: {
      message: "This is not an export file: it could not be read.",
    },
    transferBadFormat: {
      message: "This is not a FunPay Lite Bot lot export file.",
    },
    transferNewerFile: {
      message:
        "The file was made by a newer version of the extension. Update the extension.",
    },
    transferEmptyFile: { message: "The file contains no lots." },
    featureGatedLotAiGenerate: {
      message: "AI lot text requires the Pro plan.",
    },
    lotAiSectionLabel: { message: "AI text" },
    lotAiButton: { message: "Write lot text" },
    lotAiUndo: { message: "Undo" },
    lotAiModalTitle: { message: "Generate a lot" },
    lotAiSubjectLabel: { message: "What are you selling?" },
    lotAiSubjectPlaceholder: {
      message: "e.g. a Steam account with email and 200 games",
    },
    lotAiTemplateLabel: { message: "Link to a template lot, optional" },
    lotAiTemplatePlaceholder: { message: "https://funpay.com/lots/offer?id=…" },
    lotAiTemplateDesc: {
      message:
        "We will open that lot and use its text as a style sample. It can be selling anything - only the manner is borrowed, not the content.",
    },
    lotAiTemplateBadUrl: {
      message:
        "That does not look like a FunPay lot link. Example: https://funpay.com/lots/offer?id=12345678",
    },
    lotAiTemplateFailed: {
      message: "Could not read the template lot. Check the link or remove it",
    },
    lotAiFieldTitle: { message: "Title" },
    lotAiFieldDescription: { message: "Description" },
    lotAiFieldPaymentMsg: { message: "Message after payment" },
    lotAiFieldNotWritable: {
      message:
        "This section does not allow editing this field, you can copy the text by hand",
    },
    lotAiWorking: { message: "Writing, this usually takes a few seconds" },
    lotAiAgain: { message: "Generate again" },
    lotAiInsert: { message: "Insert into the lot" },
    lotAiQuotaLeft: {
      message: "Generations left this month: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotAiInserted: { message: "Text inserted. Check it and save the lot" },
    lotAiUndone: { message: "Previous text restored" },
    lotAiInsertNothing: { message: "Nothing to fill in this section" },
    lotAiErrorQuota: {
      message:
        "You have used up this month of generations. The limit resets on the 1st",
    },
    lotAiErrorBusy: {
      message: "Too many requests right now. Try again in a minute",
    },
    lotAiErrorUnavailable: {
      message: "Generation is temporarily unavailable. Try again later",
    },
    lotAiErrorRejected: {
      message:
        "The text did not pass our checks and was discarded. Press again, or say more clearly what you are selling",
    },
    lotAiErrorFeature: { message: "AI generation requires the Pro plan" },
    lotAiErrorSession: {
      message: "Sign in to FunPayLiteBot to use generation",
    },
    lotAiErrorNetwork: {
      message: "No connection to the server. Check your internet and try again",
    },
    lotAiErrorGeneric: { message: "Could not write the text. Try again" },
    lotAiStart: { message: "Generate" },
    lotClone: { message: "Lot cloning" },
    lotCloneDesc: {
      message: `Adds a "Clone lot" button to another seller's lot, and cloning several lots at once to their profile. The description, parameters, price and pictures are copied.`,
    },
    featureGatedLotClone: { message: "Lot cloning requires the Pro plan." },
    lotCloneButton: { message: "Clone lot" },
    lotCloneUnreadable: { message: "Could not read this lot" },
    lotCloneNoticeLead: {
      message:
        "The form is filled in from another seller's lot. Check the fields and save the lot.",
    },
    lotCloneNoticeSource: { message: "Original lot" },
    lotCloneNoticeUnresolved: {
      message: "Could not be picked, set them yourself:",
    },
    lotCloneNoticeNoPrice: {
      message: "Set the price yourself: the lot's page did not show it.",
    },
    lotCloneMissingAmount: { message: "stock" },
    lotCloneMissingImages: { message: "pictures" },
    lotCloneMissingGoods: { message: "auto-delivery goods" },
    lotCloneNoticeMissing: {
      message: "Not copied, add them yourself: $LIST$.",
      placeholders: { list: { content: "$1", example: "наличие, картинки" } },
    },
    lotCloneDraftGone: {
      message: `The lot's data for cloning has expired. Open the lot again and press "Clone lot".`,
    },
    lotCloneBulkButton: { message: "Clone to my shop" },
    lotCloneBulkTitle: { message: "Clone the lots to your shop?" },
    lotCloneBulkAsk: {
      message:
        "Lots to create: $COUNT$, in the same sections, with the seller's description, parameters, price and pictures. They appear in your shop switched off: check them, set the stock and switch them on. Auto-delivery goods are not copied.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneBulkConfirm: {
      message: "Clone: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneDoneN: {
      message: "created: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneBulkDone: {
      message:
        "The new lots are created switched off: check them in your shop and switch them on.",
    },
    lotCloneBulkWhy: {
      message: "Not created: $LIST$.",
      placeholders: {
        list: { content: "$1", example: "лот уже снят с продажи" },
      },
    },
    lotCloneBulkUnresolved: {
      message: "Could not be picked, left at the default: $LIST$.",
      placeholders: { list: { content: "$1", example: "Регион: Европа" } },
    },
    lotCloneOtherPass: { message: "Second language version" },
    lotCloneSignIn: {
      message: "Sign in to FunPay to create the lots in your shop",
    },
    lotCloneErrLimit: { message: "the section is at FunPay's lot limit" },
    lotCloneErrForbidden: { message: "you cannot sell in this section" },
    lotCloneErrGone: { message: "the lot is no longer for sale" },
    lotCloneErrPrice: { message: "FunPay did not show the lot's price" },
    lotCloneErrUnreadable: { message: "could not read the lot" },
    lotCloneErrRate: { message: "FunPay asked to slow down" },
    lotCloneImagesConsentTitle: { message: "Lot pictures" },
    lotCloneImagesConsentBody: {
      message:
        "To copy the pictures, the extension needs access to sfunpay.com, the server where FunPay keeps lot pictures. You are asked only once.",
    },
    lotCloneImagesConsentGrant: { message: "Allow" },
    lotCloneImagesConsentCancel: { message: "Without pictures" },
    lotCloneImagesProgress: {
      message: "Pictures: $DONE$ of $TOTAL$",
      placeholders: {
        done: { content: "$1", example: "2" },
        total: { content: "$2", example: "5" },
      },
    },
    lotCloneNoticeImagesPartial: {
      message:
        "Not every picture was copied: $DONE$ of $TOTAL$. Add the rest yourself.",
      placeholders: {
        done: { content: "$1", example: "3" },
        total: { content: "$2", example: "5" },
      },
    },
    lotCloneBulkImagesSkipped: {
      message: "Pictures were not copied: no access to sfunpay.com.",
    },
    lotCloneBulkImagesFailed: {
      message: "Pictures not copied: $COUNT$.",
      placeholders: { count: { content: "$1", example: "2" } },
    },
    consentPendingHint: {
      message: "Confirm the request in the browser's window.",
    },
    consentRequestFailed: {
      message: "The browser would not ask for access: $ERROR$",
      placeholders: {
        error: {
          content: "$1",
          example:
            "Only permissions specified in the manifest may be requested.",
        },
      },
    },
    lotCloneNoticeImagesNoAccess: {
      message:
        "Pictures were not copied: no access to sfunpay.com. You can allow it the next time you clone; add this lot's pictures yourself.",
    },
    settingThemeRedMoon: { message: "Red Moon" },
    themePresetMidnight: { message: "Midnight" },
    themePresetAmoled: { message: "Black" },
    themePresetGraphite: { message: "Graphite" },
    themePresetNord: { message: "Nord" },
    themePresetAmethyst: { message: "Amethyst" },
    themePresetForest: { message: "Forest" },
    themePresetOcean: { message: "Ocean" },
    themePresetCocoa: { message: "Cocoa" },
    themePresetSakura: { message: "Sakura" },
    themePresetPaper: { message: "Paper" },
    themeCardCustom: { message: "Custom" },
    themeEditorTitle: { message: "Your theme" },
    themeEditorDesc: {
      message:
        "Three colours: background, text and accent. The page works out every other shade, and changes show at once.",
    },
    themeBaseLabel: { message: "Base" },
    themeBaseSolid: { message: "Solid" },
    themeBaseFirewatch: { message: "Firewatch wallpaper" },
    themeBaseRedMoon: { message: "Red Moon wallpaper" },
    themeColorBg: { message: "Background" },
    themeColorText: { message: "Text" },
    themeColorAccent: { message: "Accent" },
    themeContrastLabel: { message: "Text contrast" },
    themeContrastGreat: { message: "great" },
    themeContrastOk: { message: "good enough" },
    themeContrastLow: { message: "low, text will be hard to read" },
    themeAccentLow: {
      message: "The accent nearly blends into the background.",
    },
    themeRandom: { message: "Random colours" },
    themeCopyCode: { message: "Copy theme code" },
    themeCodeCopied: {
      message:
        'Theme code copied. Send it to a friend to paste into "Your theme".',
    },
    themePasteCode: { message: "Paste a code" },
    themePasteApply: { message: "Apply" },
    themeCodeInvalid: { message: "That is not a Lite Bot theme code" },
    themeSaved: { message: "Saved" },
    tariffsPeriodYear: { message: "Yearly" },
    tariffsPeriodMonth: { message: "Monthly" },
    renewDaysLeft: {
      message: "$DAYS$ d",
      placeholders: { days: { content: "$1" } },
    },
    renewHoursLeft: {
      message: "$HOURS$ h",
      placeholders: { hours: { content: "$1" } },
    },
    renewEndingBar: {
      message: "$PLAN$ ends in $LEFT$. Renew so nothing switches off.",
      placeholders: { plan: { content: "$1" }, left: { content: "$2" } },
    },
    renewButton: { message: "Renew" },
    renewYearButton: { message: "A year: 2 months free" },
    renewEndedTitle: {
      message: "Your $PLAN$ has ended",
      placeholders: { plan: { content: "$1" } },
    },
    renewEndedBody: {
      message:
        "Paid features are off. Your settings are kept: renew $PLAN$ and everything works again.",
      placeholders: { plan: { content: "$1" } },
    },
    renewEndedBuy: {
      message: "Renew $PLAN$",
      placeholders: { plan: { content: "$1" } },
    },
    checkoutUnfinishedBar: {
      message:
        "Your $PLAN$ payment didn't go through? If something got in the way, try again.",
      placeholders: { plan: { content: "$1" } },
    },
    checkoutUnfinishedButton: { message: "Back to payment" },
  };
  var T = {
    nicknameColorTitle: { message: "Публичные стили ника" },
    nicknameColorDescription: {
      message:
        "Выберите стиль для своего ника - его увидят все пользователи расширения на FunPay, на всех страницах.",
    },
    nicknameColorPurple: { message: "Фиолетовый градиент" },
    nicknameColorOrange: { message: "Оранжевый градиент" },
    nicknameColorOrangeLocked: {
      message: "Оранжевый градиент доступен только с Pro",
    },
    nicknameColorNone: { message: "Стандартный" },
    nicknameStyleGroupColor: { message: "Цвет" },
    nicknameStyleGroupFont: { message: "Шрифт" },
    nicknameStyleGroupEffect: { message: "Эффект" },
    nicknameStyleColorLocked: { message: "Цвет задаётся эффектом" },
    nicknameStyleUnsavedNote: { message: "Стиль не сохранён" },
    nicknameStyleSaveButton: { message: "Сохранить" },
    nicknameStyleDiscardButton: { message: "Отменить" },
    nicknameStyleUnsavedTitle: { message: "Стиль ника не сохранён" },
    nicknameStyleUnsavedBody: {
      message:
        "Вы примерили стиль ника, но не сохранили его. Сохранить изменения?",
    },
    nicknameStyleRestored: { message: "Стиль ника восстановлен" },
    nicknameStyleRestorePartial: {
      message:
        "Часть сохранённого стиля больше недоступна - восстановлено только доступное",
    },
    nicknameStyleRestoreUnavailable: {
      message: "Сохранённый стиль ника больше недоступен",
    },
    nicknameStyleRestoreFailed: {
      message:
        "Не удалось восстановить стиль ника - нажмите «Сохранить», чтобы повторить",
    },
    nicknameColorHiddenBlocked: {
      message:
        "Стили ников скрыты - отключите «Скрывать стили ников», чтобы менять свой стиль.",
    },
    goldenKeyCopyFailed: {
      message:
        "Не удалось скопировать - кликните по странице и попробуйте снова.",
    },
    nicknameStyleTierFree: { message: "Доступно всем" },
    nicknameColorPreviewFallback: { message: "Ваш ник" },
    nicknameColorSaved: { message: "Стиль ника сохранён" },
    nicknameColorSaveFailed: { message: "Не удалось сохранить стиль ника" },
    nicknameColorProRequired: {
      message: "Оранжевый градиент доступен только со статусом Pro",
    },
    nicknameColorLinkFirst: {
      message: "Сначала привяжите аккаунт FunPay в разделе «Аккаунт»",
    },
    nicknameColorNeedCommunity: {
      message: "Публичный стиль ника доступен со статусом Community",
    },
    nicknameColorHideTitle: { message: "Скрывать стили ников" },
    nicknameColorHideDesc: {
      message:
        "Не показывать публичные стили ников других пользователей нигде, кроме страниц их профилей. Ваш собственный стиль ника при этом станет стандартным для всех пользователей.",
    },
    nicknameColorHideNeedCommunity: {
      message: "Скрытие стилей ников доступно со статусом Community",
    },
    nicknameColorNeedPro: {
      message: "Оранжевый стиль ника доступен со статусом Pro",
    },
    nicknameColorNeedPremium: {
      message: "Премиум-стили ника доступны со статусом Premium",
    },
    nicknameColorUpgrade: { message: "Подробнее о статусах" },
    nicknameColorLoading: { message: "Загрузка…" },
    nicknameColorPencilTitle: { message: "Изменить стиль ника" },
    nicknameColorOpenCustomization: { message: "Открыть кастомизацию" },
    extName: { message: "FunPay Lite Bot" },
    extDescription: {
      message:
        "💲 Бот и расширение для FunPay: автоподнятие лотов, автоответчик, статистика продаж, тёмная тема - более 60 000 пользователей",
    },
    extSmallName: { message: "Lite Bot" },
    socialLinkTelegram: { message: "https://t.me/fplite" },
    socialLinkDiscord: { message: "https://dsc.gg/funpaycom" },
    settingTheme: { message: "Тема" },
    settingsCategoryCustomization: { message: "Кастомизация" },
    settingThemeLight: { message: "Светлая" },
    settingThemeDark: { message: "Тёмная" },
    settingThemeFirewatch: { message: "Firewatch" },
    settingThemeChoice: { message: "Выбор темы" },
    settingThemeCustomBackground: { message: "Своё фоновое изображение" },
    settingThemeCustomBackgroundDesc: {
      message:
        "Своя картинка вместо обоев для тем Firewatch и Red Moon, а также для своих тем с обоями.",
    },
    settingThemeCustomBackgroundOn: { message: "Свой фон задан." },
    settingThemeCustomBackgroundDim: { message: "Затемнение фона" },
    settingThemeCustomBackgroundTooLarge: {
      message:
        "Изображение слишком большое даже после сжатия. Попробуйте меньше.",
    },
    settingThemeCustomBackgroundNotImage: {
      message: "Выберите изображение (PNG / JPEG).",
    },
    settingThemeCustomBackgroundTooSmall: {
      message: "Это изображение меньше вашего экрана. Выберите больше.",
    },
    settingThemeChooseImage: { message: "Выбрать изображение…" },
    settingThemeRemoveImage: { message: "Убрать" },
    featureGatedCustomBackgroundMessage: {
      message: "Свой фоновый рисунок доступен с тарифом Community.",
    },
    settingOffers: { message: "Предложения" },
    settingOfferAutoRaise: { message: "Автоподнятие предложений" },
    lotManagementTitle: { message: "Управление лотами" },
    raiseAllButton: { message: "Поднять все предложения" },
    raiseAllBusy: { message: "Поднимаю…" },
    raiseAllStarted: { message: "Поднятие запущено…" },
    raiseAllRaised: { message: "поднято" },
    raiseAllWillRaise: { message: "будет поднято" },
    raiseAllWait: { message: "пока рано" },
    raiseAllDone: { message: "Готово" },
    raiseAllNone: { message: "Нет предложений для поднятия" },
    raiseAllCancel: { message: "Отмена" },
    raiseAllStopped: { message: "Остановлено" },
    raiseAllError: { message: "ошибка" },
    raiseAllSection: { message: "Раздел" },
    raiseAllSummary: {
      message: "Проверено - $CHECKED$, поднято - $RAISED$",
      placeholders: {
        checked: { content: "$1", example: "128" },
        raised: { content: "$2", example: "12" },
      },
    },
    raiseNotifications: { message: "Уведомления о поднятии" },
    raiseNotificationsDesc: {
      message:
        "Показывать уведомление при каждом успешном поднятии: и для кнопки «Поднять все», и для автоподнятия. Отключите, если разделов очень много.",
    },
    lotManagementPanel: { message: "Панель управления лотами в профиле" },
    lotManagementPanelDesc: {
      message:
        "Показывать на профилях FunPay панель «Управление лотами»: поиск лотов на любом профиле, клонирование лотов на чужом, а на вашем - также «Поднять все предложения», экспорт и импорт лотов.",
    },
    settingExactPrice: { message: "Точная цена" },
    settingNotifications: { message: "Уведомления" },
    systemNotifications: { message: "Уведомления на устройство" },
    systemNotificationsDesc: {
      message:
        "Системные уведомления о новых сообщениях и заказах — когда вы не смотрите на FunPay. В приложении Lite Client приходят прямо на телефон, без Telegram и VPN. Потребуется разрешение браузера.",
    },
    systemNotificationsDenied: {
      message:
        "Браузер не дал разрешение на уведомления. Разрешите их для funpay.com в настройках браузера.",
    },
    systemNotifyMessageTitle: { message: "Новое сообщение" },
    systemNotifyMessageBody: { message: "Непрочитанных диалогов" },
    systemNotifyOrderTitle: { message: "Новый заказ" },
    systemNotifyOrderBody: { message: "Ожидают подтверждения" },
    settingCustomNotification: { message: "Кастомный звук уведомлений" },
    customNotifyOptionDefault: { message: "По умолчанию" },
    customNotifyOptionCashRegister: { message: "Касса" },
    customNotifyOptionCoin: { message: "Монета" },
    customNotifyOptionChime: { message: "Перезвон" },
    customNotifyOptionBell: { message: "Колокольчик" },
    customNotifyOptionPop: { message: "Хлопок" },
    customNotifyPreviewTitle: { message: "Прослушать звук" },
    customNotifyOptionCustom: { message: "Свой звук" },
    settingCustomNotifyChooseFile: { message: "Выбрать MP3…" },
    settingCustomNotifyNotMp3: { message: "Выберите MP3-файл." },
    settingCustomNotifyTooLarge: {
      message: "Файл слишком большой (макс. 1 МБ).",
    },
    featureGatedCustomNotifySoundMessage: {
      message: "Загрузка своего звука уведомления доступна со статусом Pro.",
    },
    settingOrderSound: { message: "Свой звук для нового заказа" },
    settingOrderSoundDesc: {
      message:
        "Проигрывает выбранный звук при новом заказе, даже если вкладка FunPay не открыта. Браузер должен быть запущён.",
    },
    orderSoundOptionOff: { message: "Выключено" },
    featureGatedCustomOrderSoundMessage: {
      message: "Свой звук для нового заказа доступен со статусом Pro.",
    },
    settingsReset: { message: "Сбросить настройки" },
    settingsPrivacyMode: { message: "Режим приватности" },
    settingsPrivacyModeDesc: {
      message:
        "Прячет за размытием ваш ник, ник собеседника, баланс и номера заказов - страницу можно скриншотить, ничего не закрашивая вручную. Наведите курсор на размытое, чтобы прочитать его.",
    },
    settingsHideLockedFeatures: { message: "Скрывать недоступные функции" },
    settingsHideLockedFeaturesDesc: {
      message:
        "Кнопки и блоки расширения, которых нет в вашем тарифе, просто не появятся на страницах FunPay.",
    },
    settingsHiddenPaywallsCount: {
      message: "Скрыто функций по отдельности: $COUNT$.",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    settingsHiddenPaywallsReset: { message: "Показать снова" },
    settingsHiddenPaywallsCleared: {
      message: "Готово, скрытые функции снова показываются.",
    },
    featureGatedHideLockedFeatures: {
      message: "Скрытие недоступных функций доступно с планом Community.",
    },
    featureGatedPrivacyMode: {
      message: "Режим приватности доступен с планом Community.",
    },
    privacyModeOn: { message: "Режим приватности включён" },
    privacyModeOff: { message: "Режим приватности выключен" },
    settingsHideBalance: { message: "Скрыть отображение баланса" },
    settingOther: { message: "Прочее" },
    settingOfferAutoRaiseDesc: {
      message:
        "Автоматически поднимает все ваши лоты. Для работы не закрывайте браузер.",
    },
    settingExactPriceDesc: {
      message:
        "Добавляет в окно редактирования лотов поля для ввода цены, отображаемой как для продавца, так и для покупателя.",
    },
    settingCustomNotificationDesc: {
      message: "Заменяет звук громкого уведомления чата на выбранный.",
    },
    settingsHideBalanceDesc: {
      message:
        "Бывает полезно, когда нужно продемонстрировать экран, но не хочется показывать баланс аккаунта.",
    },
    settingViewSellersPromo: { message: "Отображать значки промо-лотов" },
    settingViewSellersPromoDesc: {
      message:
        "Отображает все значки промо-лотов в таблице предложений, даже если они скрыты.",
    },
    settingsChatLinkTitle: { message: "Секретный чат продавцов 🕵" },
    settingsDiscordLinkTitle: { message: "Секретный сервер Discord 👾" },
    settingsChannelLinkTitle: { message: "Секретный канал FunPay 👀" },
    settingsHelpLinkTitle: {
      message: "Сообщить об ошибке / Заказать разработку ⚒️",
    },
    settingReset: { message: "♻️ Сброс" },
    settingsReviewTitle: {
      message: "Поддержите проект на GitHub",
    },
    settingsReviewButton: { message: "Поддержать на GitHub" },
    priceLabelSeller: { message: "(для продавца)" },
    priceLabelBuyer: { message: "(для покупателя)" },
    settingsSaved: { message: "✔️ Сохранено" },
    settingsNotSaved: { message: "❌ Не удалось сохранить" },
    raiseResponseHours: { message: "час" },
    raiseResponseMinutes: { message: "минут" },
    raiseResponseSeconds: { message: "секунд" },
    resetSettingsConfirm: {
      message: "Вы уверены, что хотите сбросить настройки?",
    },
    statsHeader: { message: "Статистика" },
    statsUpdateButton: { message: "Обновить данные" },
    statsUpdateButtonUpdating: { message: "Обновление..." },
    statsUpdatingTitle: { message: "Обновление данных…" },
    statsUpdatingOrders: { message: "заказов получено" },
    statsUpdatingOf: { message: "из" },
    statsCancelButton: { message: "Отмена" },
    statsCancelling: { message: "Отмена…" },
    statsToday: { message: "Сегодня" },
    statsYesterday: { message: "Вчера" },
    stats24Hours: { message: "24 часа" },
    stats7Days: { message: "Неделя" },
    stats30Days: { message: "Месяц" },
    stats365Days: { message: "Год" },
    statsTotalTime: { message: "Всё время" },
    statsCustomPeriod: { message: "Своя дата" },
    statsCustomPeriodTitle: { message: "Выберите период" },
    statsCustomPeriodApply: { message: "Применить" },
    statsCustomPeriodInvalid: {
      message: "Укажите обе даты в формате ДД.ММ.ГГГГ",
    },
    statsCustomPeriodOrder: { message: "Начальная дата позже конечной" },
    statsTotalOrders: { message: "Всего заказов" },
    statsTotalrevenue: { message: "Всего заработано" },
    statsAverageSalePrice: { message: "Средний чек" },
    statsOrdersClosed: { message: "Закрыто" },
    statsPendingConfirmation: { message: "В ожидании" },
    statsReturns: { message: "Возвраты" },
    statsUniqueCustomers: { message: "Уникальных покупателей" },
    statsTopCustomer: { message: "Самый активный покупатель" },
    statsHighestSale: { message: "Самая дорогая продажа" },
    statsPopularProduct: { message: "Самый популярный товар" },
    statsPopularCategory: { message: "Самая популярная категория" },
    salesMonthJanuary: { message: "января" },
    salesMonthFebruary: { message: "февраля" },
    salesMonthMarch: { message: "марта" },
    salesMonthApril: { message: "апреля" },
    salesMonthMay: { message: "мая" },
    salesMonthJune: { message: "июня" },
    salesMonthJuly: { message: "июля" },
    salesMonthAugust: { message: "августа" },
    salesMonthSeptember: { message: "сентября" },
    salesMonthOctober: { message: "октября" },
    salesMonthNovember: { message: "ноября" },
    salesMonthDecember: { message: "декабря" },
    sales: { message: "Продажи" },
    purchases: { message: "Покупки" },
    showSalesStats: { message: "Отображать статистику продаж" },
    showSalesStatsDesc: {
      message: "Добавляет детальную статистику на страницу Продажи.",
    },
    statsTabNumbers: { message: "Статистика" },
    statsTabCards: { message: "Карточки" },
    statsTabCharts: { message: "Графики" },
    statsTabDiagrams: { message: "Диаграммы" },
    statsTabDetailed: { message: "ТОП-списки" },
    statsTabFull: { message: "Все данные" },
    statsInfoPeriod: { message: "Период:" },
    statsInfoOrders: { message: "Заказов:" },
    statsInfoSold: { message: "Продаж:" },
    statsInfoBought: { message: "Покупок:" },
    chartProfitTitle: { message: "Выручка по дням" },
    chartSpentTitle: { message: "Расходы по дням" },
    chartOrdersTitle: { message: "Заказы по дням, шт." },
    chartCategoriesTitle: { message: "Заказы по категориям" },
    chartStatusTitle: { message: "Заказы по статусам" },
    chartCurrencyTitle: { message: "Выручка по валютам" },
    chartCurrencySpentTitle: { message: "Расходы по валютам" },
    statsCategoryOther: { message: "Прочие" },
    statsDetailTopBuyers: { message: "Топ покупателей" },
    statsDetailTopSellers: { message: "Топ продавцов" },
    statsDetailTopProducts: { message: "Топ товаров" },
    statsDetailTopCategories: { message: "Топ категорий" },
    statsDetailOrdersSuffix: { message: "зак." },
    statsDetailTimesSuffix: { message: "раз" },
    statsDetailShowMore: { message: "Показать ещё" },
    statsLockedCharts: { message: "Графики доступны со статусом" },
    statsLockedDiagrams: { message: "Диаграммы доступны со статусом" },
    statsLockedDetailed: {
      message: "Детальная статистика доступна со статусом",
    },
    featureGatedOrderCharts: {
      message:
        "Графики выручки и заказов, диаграммы по категориям и топы покупателей и товаров доступны с планом Pro.",
    },
    chartsEmpty: { message: "Нет данных за выбранный период" },
    showPurchasesStats: { message: "Отображать статистику покупок" },
    showPurchasesStatsDesc: {
      message: "Добавляет детальную статистику на страницу Покупки.",
    },
    showSectionCommission: { message: "Отображать комиссию раздела" },
    showSectionCommissionDesc: {
      message:
        "Показывает процент комиссии FunPay для раздела рядом с заголовком на странице ваших предложений.",
    },
    sectionCommissionLabel: { message: "Комиссия:" },
    offerEditCommissionLabel: { message: "Комиссия раздела" },
    exportSalesEnable: { message: "Экспорт продаж" },
    exportSalesEnableDesc: {
      message: "Добавляет кнопку «Экспорт» на страницу Продажи.",
    },
    exportPurchasesEnable: { message: "Экспорт покупок" },
    exportPurchasesEnableDesc: {
      message: "Добавляет кнопку «Экспорт» на страницу Покупки.",
    },
    featureGatedExportMessage: {
      message:
        "Экспорт архива заказов - функция статуса Pro. Получите его, чтобы включить.",
    },
    featureGatedCustomNotifyMessage: {
      message: "Этот звук уведомлений доступен только при статусе Community.",
    },
    statsExportButton: { message: "Экспорт" },
    statsExportButtonTitle: { message: "Экспортировать архив…" },
    statsResetConfirmTitle: { message: "Обновить архив?" },
    statsResetConfirmMessage: {
      message:
        "Локальный кеш будет очищен и заказы загрузятся с FunPay заново. На больших архивах это может занять несколько минут.",
    },
    statsResetConfirmAction: { message: "Очистить и обновить" },
    statsRefreshLastN: {
      message: "Последние $COUNT$ заказов",
      placeholders: { count: { content: "$1", example: "500" } },
    },
    statsRefreshCustom: { message: "Своё число" },
    statsRefreshCustomHint: {
      message: "Укажите, сколько последних заказов загрузить.",
    },
    statsRefreshAll: { message: "Все заказы (полная перезагрузка)" },
    statsRefreshPartialHint: {
      message:
        "Последние $COUNT$ заказов будут загружены заново. Более старые останутся в архиве без изменений.",
      placeholders: { count: { content: "$1", example: "500" } },
    },
    statsRefreshAction: { message: "Обновить" },
    confirmCancel: { message: "Отмена" },
    confirmOk: { message: "OK" },
    exportSalesTitle: { message: "Экспорт продаж" },
    exportPurchasesTitle: { message: "Экспорт покупок" },
    exportFormatLabel: { message: "Формат" },
    exportFormatXlsx: { message: "Excel (.xlsx)" },
    exportFormatJson: { message: "JSON (.json)" },
    exportRangeLabel: { message: "Период" },
    exportRangeAllTime: { message: "За всё время" },
    exportRangeCustom: { message: "Свои даты" },
    exportRangeCustomHint: { message: "Или укажи свои даты:" },
    commonClose: { message: "Закрыть" },
    calendarPrevMonth: { message: "Предыдущий месяц" },
    calendarNextMonth: { message: "Следующий месяц" },
    calendarMonthSelect: { message: "Месяц" },
    calendarYearSelect: { message: "Год" },
    exportDatePlaceholder: { message: "ДД.ММ.ГГГГ" },
    exportOpenCalendar: { message: "Открыть календарь" },
    exportCountLabel: { message: "Будет экспортировано:" },
    exportRangeFrom: { message: "С" },
    exportRangeTo: { message: "По" },
    exportRangeInvalid: {
      message: "Выберите даты или поставьте «За всё время».",
    },
    exportSubmit: { message: "Экспортировать" },
    exportCancel: { message: "Отмена" },
    exportInProgress: { message: "Экспорт…" },
    exportNoData: {
      message: "Экспортировать нечего - архив за этот период пуст.",
    },
    exportSuccess: {
      message: "Экспортировано: $count$ $word$.",
      placeholders: {
        count: { content: "$1", example: "42" },
        word: { content: "$2", example: "orders" },
      },
    },
    exportFailed: {
      message: "Не удалось экспортировать: $REASON$",
      placeholders: { reason: { content: "$1" } },
    },
    statsPurchasesHeader: { message: "Статистика" },
    statsPurchasesTotalOrders: { message: "Всего покупок" },
    statsPurchasesTotalSpent: { message: "Общая сумма" },
    statsPurchasesAveragePrice: { message: "Средняя цена" },
    statsUniqueSellers: { message: "Уникальных продавцов" },
    statsTopSeller: { message: "Топ продавец" },
    statsHighestPurchase: { message: "Самая дорогая покупка" },
    secretChats: { message: "👀 Секретные чаты" },
    messages: { message: "Сообщения" },
    settingsFastMessages: { message: "Быстрые сообщения" },
    settingsFastMessagesDesc: {
      message:
        "Напишите / (слэш) в чате, чтобы быстро отправить заранее подготовленные сообщения.",
    },
    fastMessagesSettingsButton: { message: "Настройки" },
    fastMessagesTitle: { message: "Быстрые сообщения" },
    emojiPanel: { message: "Панель эмодзи" },
    emojiPanelDesc: { message: "Добавляет панель эмодзи в чаты FunPay." },
    emojiButtonTitle: { message: "Эмодзи" },
    emojiSearchPlaceholder: { message: "Поиск эмодзи" },
    emojiNothingFound: { message: "Ничего не нашлось" },
    emojiLoadFailed: { message: "Не получилось загрузить эмодзи" },
    emojiGroupRecent: { message: "Недавние" },
    emojiGroupSmileys: { message: "Смайлики и эмоции" },
    emojiGroupPeople: { message: "Люди и жесты" },
    emojiGroupAnimals: { message: "Животные и природа" },
    emojiGroupFood: { message: "Еда и напитки" },
    emojiGroupTravel: { message: "Путешествия и места" },
    emojiGroupActivities: { message: "Занятия" },
    emojiGroupObjects: { message: "Предметы" },
    emojiGroupSymbols: { message: "Символы и флаги" },
    bindName: { message: "Название" },
    bindNamePlaceholder: { message: "Короткое название" },
    bindMessage: { message: "Сообщение" },
    bindMessagePlaceholder: { message: "Текст сообщения" },
    enabled: { message: "Включено" },
    instantSend: { message: "Мгновенная отправка" },
    delete: { message: "Удалить" },
    add: { message: "Добавить" },
    position: { message: "Позиция" },
    positionOptionSlash: { message: "Выпадающий список при /" },
    positionOptionAbove: { message: "Над полем ввода" },
    positionOptionSidebar: { message: "Справа внизу в колонке от чата" },
    positionLimitWarning: {
      message:
        "Нельзя создавать больше 10 элементов с позициями 'Над полем ввода' и 'Справа внизу в колонке от чата'.",
    },
    availableForSubscribers: {
      message: "Эта функция доступна только при статусе Community",
    },
    checkSubscription: { message: "Проверить статус" },
    funPayChat: { message: "Чат FunPay Community" },
    funPayChannel: { message: "Канал FunPay Community" },
    linkYourTelegram: {
      message: "Привяжите ваш Telegram для проверки статуса",
    },
    falseSubscriptionCheck: { message: "Статус не получен" },
    tariffsTitle: { message: "Статус" },
    tariffsLoading: { message: "Загрузка…" },
    tariffsEmpty: { message: "Нет доступных планов." },
    tariffsLoadFailed: {
      message: "Не удалось загрузить планы ($REASON$)",
      placeholders: { reason: { content: "$1" } },
    },
    communityActiveBadge: { message: "Активен" },
    tariffsCurrentPlanLabel: { message: "Текущий план" },
    tariffsObtainedLabel: { message: "Получен" },
    tariffsLoginRequired: { message: "Сначала войдите в аккаунт" },
    tariffsBuyButton: { message: "Купить" },
    tariffsRenewButton: { message: "Продлить" },
    tariffsBuyOpening: { message: "Открываем оплату…" },
    tariffsBuyFailed: {
      message: "Не удалось перейти к оплате. Попробуйте ещё раз.",
    },
    featureGatedCommunityTitle: { message: "Доступно с Community" },
    featureGatedProfileDescriptionMessage: {
      message: "Публичное описание профиля доступно со статусом Community.",
    },
    featureGatedProTitle: { message: "Доступно с Pro" },
    featureGatedPremiumTitle: { message: "Доступно с Premium" },
    featureGatedFastMessagesMessage: {
      message:
        "«Быстрые сообщения» - функция статуса Community. Получите его, чтобы включить.",
    },
    featureGatedPurchasesStatsMessage: {
      message:
        "«Статистика покупок» - функция статуса Community. Получите его, чтобы включить.",
    },
    featureGatedSectionCommissionMessage: {
      message:
        "«Отображение комиссии раздела» - функция статуса Pro. Получите его, чтобы включить.",
    },
    featureGatedLotTranslateMessage: {
      message:
        "Перевод лота на английский - функция статуса Pro. Получите его, чтобы включить.",
    },
    profileDescriptionHeading: { message: "Описание" },
    profileDescriptionAdd: { message: "Добавить описание" },
    profileDescriptionEditTitle: { message: "Редактировать описание" },
    profileDescriptionPlaceholder: {
      message:
        "Расскажите о себе - это описание увидят все пользователи расширения.",
    },
    profileDescriptionSave: { message: "Сохранить" },
    profileDescriptionCancel: { message: "Отмена" },
    profileDescriptionSaved: { message: "Описание сохранено" },
    profileDescriptionError: { message: "Не удалось сохранить описание" },
    profileDescriptionLinkFirst: {
      message: "Сначала привяжите аккаунт FunPay на странице Lite Bot",
    },
    profileDescriptionContactBlocked: {
      message:
        "Передача контактных данных (Telegram, почта, телефон, соцсети и т.п.) запрещена правилами FunPay - за это можно получить блокировку аккаунта. Уберите контакты из описания.",
    },
    profileDescriptionProhibited: {
      message:
        "Размещение запрещённого контента (наркотические средства, порнография) запрещено правилами FunPay - за это можно получить блокировку аккаунта. Уберите запрещённый контент из описания.",
    },
    funpayLinkTitle: { message: "Аккаунт FunPay" },
    funpayLinkBusyStart: { message: "Подготовка…" },
    funpayLinkBusyCreating: { message: "Создаём проверочный лот…" },
    funpayLinkBusyConfirming: { message: "Подтверждаем привязку…" },
    funpayLinkBusyUnlink: { message: "Отвязываем…" },
    funpayLinkSuccess: { message: "Аккаунт FunPay привязан" },
    funpayUnlinkSuccess: { message: "Аккаунт FunPay отвязан" },
    funpayLinkFailed: { message: "Не удалось привязать аккаунт FunPay" },
    funpayLinkErrCode: {
      message: "Проверочный лот не найден, попробуйте ещё раз",
    },
    funpayLinkErrMismatch: {
      message: "Лот создан под другим аккаунтом FunPay",
    },
    funpayLinkErrExpired: {
      message: "Запрос на привязку истёк, начните заново",
    },
    funpayLinkErrFunpay: {
      message: "Не удалось прочитать лот с FunPay, попробуйте ещё раз",
    },
    funpayLinkErrSession: { message: "Сессия истекла, войдите снова" },
    funpayLinkErrCantSell: {
      message:
        "На этом аккаунте FunPay ещё не открыты продажи, поэтому привязать его не получилось. Чтобы открыть продажи, пройдите на FunPay небольшой тест и привяжите номер телефона, а затем попробуйте снова.",
    },
    funpayLinkErrLotFailed: {
      message:
        "Не удалось привязать аккаунт FunPay: не получилось создать проверочный лот. Чаще всего это значит, что на аккаунте ещё не открыты продажи - он ни разу не создавал лот. Чтобы открыть продажи, пройдите на FunPay небольшой тест и привяжите номер телефона, а затем попробуйте снова.",
    },
    enableLotTranslate: { message: "Перевод лота на английский" },
    enableLotTranslateDesc: {
      message:
        "Добавляет на страницу редактирования лота кнопку «Перевести на английский», которая заполняет английское название и описание по русскому оригиналу.",
    },
    autoTranslateModeButton: { message: "Переводить по нажатию кнопки" },
    autoTranslateModeAuto: {
      message: "Переводить автоматически при сохранении",
    },
    lotTranslateAutoFailed: {
      message: "Не удалось перевести - лот сохранён без английского текста",
    },
    lotTranslateAutoNoPermission: {
      message:
        "Нет доступа к переводчику. Выдайте его в настройках дополнения или включите автоперевод заново",
    },
    updateBannerTitle: { message: "Вышла новая версия расширения" },
    updateBannerBody: {
      message: "У вас установлена $CURRENT$, доступна $LATEST$.",
      placeholders: {
        current: { content: "$1", example: "2.1.2" },
        latest: { content: "$2", example: "2.2.0" },
      },
    },
    updateStep1: {
      message:
        "Переходим на страницу расширений браузера: chrome://extensions/",
    },
    updateStep2: { message: "Включаем Режим разработчика." },
    updateStep3: { message: 'Нажимаем кнопку "Обновить".' },
    updateStepFirefox1: {
      message:
        "Переходим на страницу дополнений: about:addons (меню Firefox → «Дополнения и темы»)",
    },
    updateStepFirefox2: {
      message: "Нажимаем на шестерёнку над списком расширений.",
    },
    updateStepFirefox3: { message: "Выбираем «Проверить наличие обновлений»." },
    showRealLotPrices: { message: "Реальные цены лотов" },
    showRealLotPricesDesc: {
      message:
        "Под ценой каждого лота в таблице раздела показывает реальную цену: сумму без комиссии FunPay и платёжных систем (сколько фактически получит продавец).",
    },
    featureGatedRealLotPricesMessage: {
      message:
        "«Реальные цены лотов» - функция статуса Pro. Получите его, чтобы включить.",
    },
    lotTranslateButton: { message: "Перевести с русского" },
    lotTranslateSectionLabel: { message: "Автоматический перевод" },
    lotTranslateStatusLoading: { message: "Перевожу…" },
    lotTranslateStatusDone: { message: "Лот переведён успешно" },
    lotTranslateStatusError: { message: "Не удалось перевести" },
    lotTranslatePermissionDenied: { message: "Нет разрешения на перевод" },
    lotTranslateValidationMissingTitle: {
      message: "Заполните название лота на русском",
    },
    lotTranslateValidationMissingDesc: {
      message: "Заполните описание лота на русском",
    },
    lotTranslateValidationMissingBoth: {
      message: "Заполните название и описание лота на русском",
    },
    lotTranslateConsentTitle: { message: "Разрешение на перевод" },
    lotTranslateConsentBody: {
      message:
        "Чтобы переводить названия и описания лотов на английский, расширению нужен разовый доступ к translate.googleapis.com.",
    },
    lotTranslateConsentGrant: { message: "Разрешить" },
    lotTranslateConsentCancel: { message: "Отмена" },
    featureGatedOpenTariffs: { message: "Перейти к статусам" },
    featureGatedHideThis: { message: "Не отображать эту функцию" },
    featureGatedHiddenToast: {
      message:
        "Больше не покажем. Вернуть - в настройках расширения, раздел «Кастомизация».",
    },
    pendingUnlockReady: {
      message:
        "Подписка обновилась - функция доступна. Обновите страницу, если её ещё не видно.",
    },
    trialOfferTitle: { message: "3 дня Premium - бесплатно" },
    trialOfferBody: {
      message:
        "Это подарок от нас: все функции расширения открыты на 3 дня - используйте всё, что захочется. Карта не нужна.",
    },
    trialOfferStart: { message: "Получить Premium на 3 дня" },
    trialOfferLater: { message: "Не сейчас" },
    trialOfferNote: {
      message: "Подарок закрепится за вашим аккаунтом FunPay.",
    },
    trialEndingToast: {
      message:
        "Пробный Premium закончится через $LEFT$. Оформите Premium, чтобы ничего не выключилось - настройки сохранятся.",
      placeholders: { left: { content: "$1" } },
    },
    trialEndsHours: {
      message: "$N$ ч",
      placeholders: { n: { content: "$1" } },
    },
    trialEndsMinutes: {
      message: "$N$ мин",
      placeholders: { n: { content: "$1" } },
    },
    trialEndedTitle: { message: "Пробный Premium закончился" },
    trialEndedBody: {
      message:
        "Функции Premium выключены. Ваши настройки сохранены: оформите Premium, и всё заработает снова, без повторной настройки.",
    },
    trialEndedOffLead: { message: "Выключилось:" },
    trialEndedOffMore: {
      message: "и ещё $N$",
      placeholders: { n: { content: "$1" } },
    },
    trialEndedBuy: { message: "Оформить Premium" },
    trialEndedOtherPlans: { message: "Другие тарифы" },
    trialEndedLater: { message: "Не сейчас" },
    trialOfferWorking: { message: "Включаю…" },
    trialStartedToast: {
      message: "Premium включён на 3 дня. Все функции уже доступны.",
    },
    trialAlreadyUsed: {
      message: "Пробный период на этом аккаунте FunPay уже был.",
    },
    trialHasPaidPlan: {
      message: "Пробный период - для тех, у кого ещё не было платного тарифа.",
    },
    trialNeedsLogin: {
      message: "Войдите в аккаунт, чтобы включить пробный период.",
    },
    trialClosed: {
      message: "Пробный период сейчас недоступен. Попробуйте позже.",
    },
    trialFailed: {
      message: "Не получилось включить пробный период. Попробуйте позже.",
    },
    trialNotEstablished: {
      message:
        "Пробный период доступен продавцам, у которых на FunPay есть хотя бы один отзыв.",
    },
    trialFunpayUnreachable: {
      message: "Не удалось проверить аккаунт на FunPay. Попробуйте ещё раз.",
    },
    trialLinkFailed: {
      message: "Не получилось привязать аккаунт FunPay. Попробуйте ещё раз.",
    },
    trialNeedsFunpay: {
      message:
        "Войдите в аккаунт FunPay в этом браузере, чтобы получить пробный период.",
    },
    settingsCategoryAccount: { message: "Аккаунт" },
    accountSubscriptionTitle: { message: "Статус" },
    accountSubscriptionBasic: { message: "Базовый" },
    accountSubscriptionExpires: { message: "Действует до" },
    accountSubscriptionTrial: { message: "пробный период" },
    accountSubscriptionLifetime: { message: "Бессрочно" },
    accountSignInPrompt: {
      message: "Войдите, чтобы управлять аккаунтом и статусом.",
    },
    settingsCategoryInfo: { message: "Инфо" },
    settingsCategoryChangelog: { message: "Обновления" },
    changelogHeading: { message: "Что изменилось" },
    changelogDesc: {
      message:
        "Список изменений по версиям расширения - новые возможности, улучшения и исправления.",
    },
    changelogLoading: { message: "Загружаем список изменений…" },
    changelogEmpty: {
      message:
        "Список изменений сейчас недоступен. Все обновления мы анонсируем в Telegram-канале.",
    },
    changelogInstalled: { message: "установлена у вас" },
    changelogTypeAdded: { message: "Новое" },
    changelogTypeImproved: { message: "Улучшено" },
    changelogTypeFixed: { message: "Исправлено" },
    changelogTypeRemoved: { message: "Убрано" },
    settingsCategoryReviews: { message: "Отзывы" },
    reviewsRatingLimitsButton: { message: "Посмотреть ограничения рейтинга" },
    reviewsRatingLimitsDesc: {
      message: "Информация об ограничении рейтинга для аккаунта",
    },
    settingsCategoryApi: { message: "API" },
    infoVersionLabel: { message: "🔖 Версия расширения" },
    deleteAccountLabel: { message: "🗑️ Удаление аккаунта" },
    deleteAccountBlocked: {
      message:
        "Пока действует подписка, удалить аккаунт нельзя. Дождитесь окончания её срока.",
    },
    deleteAccountButton: { message: "Удалить аккаунт FunPay Lite Bot" },
    deleteAccountConfirmTitle: { message: "Удалить аккаунт FunPay Lite Bot?" },
    deleteAccountConfirmText: {
      message:
        "Аккаунт FunPay Lite Bot будет удалён вместе с историей заказов. Привязанные аккаунты (FunPay, Telegram, Google, VK) будут отвязаны. Расширение продолжит работать, но без входа. Это действие необратимо.",
    },
    deleteAccountConfirmCta: { message: "Да, удалить" },
    deleteAccountDone: { message: "Аккаунт удалён" },
    deleteAccountFailed: {
      message: "Не удалось удалить аккаунт. Попробуйте позже.",
    },
    accountIdCopyHint: { message: "Нажмите, чтобы скопировать ID аккаунта" },
    accountIdCopied: { message: "ID аккаунта скопирован" },
    accountIdCopyFailed: { message: "Не удалось скопировать ID аккаунта" },
    accountIdLabel: { message: "🆔 ID аккаунта" },
    goldenKeyTitle: { message: "Авторизация - Golden Key" },
    goldenKeyDesc: {
      message:
        "Этот ключ хранится в куки FunPay и часто используется внешними приложениями для автоматизации. Он даёт полный доступ к аккаунту - никому его не передавайте.",
    },
    goldenKeyMissing: {
      message: "Ключ не найден. Войдите на funpay.com, чтобы он появился.",
    },
    goldenKeyShow: { message: "Показать" },
    goldenKeyHide: { message: "Скрыть" },
    goldenKeyCopy: { message: "Скопировать" },
    goldenKeyCopied: { message: "Ключ скопирован" },
    goldenKeyRevoke: { message: "Отозвать" },
    goldenKeyRevokeConfirmTitle: { message: "Отозвать Golden Key?" },
    goldenKeyRevokeConfirmText: {
      message:
        "Это удалит сессию FunPay во всех браузерах. Вы будете разлогинены и потребуется войти на funpay.com заново.",
    },
    goldenKeyRevokeConfirmCta: { message: "Да, отозвать" },
    goldenKeyRevokeCancel: { message: "Отмена" },
    goldenKeyRevoked: { message: "Golden Key отозван" },
    goldenKeyRevokeFailed: {
      message:
        "Не удалось отозвать ключ. Попробуйте выйти из аккаунта вручную на funpay.com.",
    },
    tariffsBasicIncluded: { message: "Бесплатно" },
    communityLinkTelegramFirst: {
      message:
        "Сначала привяжите Telegram в меню пользователя, потом возвращайтесь.",
    },
    authLogIn: { message: "Войти" },
    authRegister: { message: "Регистрация" },
    authRegisterWith: {
      message: "Регистрация через $PROVIDER$",
      placeholders: { provider: { content: "$1" } },
    },
    authLoginSubtitle: {
      message: "Войдите через сервис, через который регистрировались.",
    },
    authRegisterSubtitle: { message: "Создайте новый аккаунт FunPayLiteBot." },
    authNoAccountTitle: { message: "Аккаунт не найден" },
    authNoAccountBody: {
      message:
        "Мы не нашли аккаунт FunPayLiteBot, привязанный к этому провайдеру. Зарегистрировать новый?",
    },
    authNoAccountConfirm: { message: "Зарегистрировать" },
    authAlreadyRegisteredTitle: { message: "Аккаунт уже существует" },
    authAlreadyRegisteredBody: {
      message: "На этом провайдере уже зарегистрирован аккаунт. Войти в него?",
    },
    authAlreadyRegisteredConfirm: { message: "Войти" },
    authCancel: { message: "Отмена" },
    authNoAccountSwitchHint: {
      message:
        "Аккаунт не найден. Перейдите на вкладку «Регистрация», чтобы создать новый.",
    },
    authAlreadyRegisteredSwitchHint: {
      message:
        "Аккаунт уже существует. Перейдите на вкладку «Вход», чтобы войти.",
    },
    authTelegramFastLoginUnsupported: {
      message:
        "Быстрый вход через Telegram не возвращает в расширение. Войдите через QR-код или номер телефона.",
    },
    authLogOut: { message: "Выйти" },
    authLoginWith: {
      message: "Войти через $PROVIDER$",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authLinkedAccounts: { message: "Привязанные аккаунты" },
    authLinked: { message: "Привязан" },
    authNotLinked: { message: "Не привязан" },
    authLink: { message: "Привязать" },
    authUnlink: { message: "Отвязать" },
    authLinkConflict: {
      message: "Этот аккаунт $PROVIDER$ уже привязан к другому пользователю.",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authCannotUnlinkLast: {
      message:
        "Нельзя отвязать единственного провайдера - сначала привяжите другой.",
    },
    authSessionExpired: {
      message: "Сессия истекла. Пожалуйста, войдите заново.",
    },
    authLoginFailed: {
      message: "Ошибка входа: $REASON$",
      placeholders: {
        reason: { content: "$1", example: "OAUTH_GOOGLE_TOKEN_REJECTED" },
      },
    },
    authLoggedIn: {
      message: "Вход выполнен: $NAME$",
      placeholders: { name: { content: "$1", example: "Андрей" } },
    },
    authLoggedOut: { message: "Вы вышли" },
    authProviderLinked: {
      message: "$PROVIDER$ привязан",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authProviderUnlinked: {
      message: "$PROVIDER$ отвязан",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    telegramLinkTitle: { message: "Привязка Telegram" },
    telegramLinkOAuthOption: { message: "Войти через Telegram" },
    telegramLinkOAuthDesc: {
      message:
        "Авторизация в браузере через Telegram. Самый быстрый способ, если Telegram у вас открывается.",
    },
    telegramLinkCodeOption: { message: "Привязать по коду" },
    telegramLinkCodeDesc: {
      message:
        "Используйте, если вход через Telegram заблокирован в браузере. Мы выдадим код для отправки боту.",
    },
    telegramLinkCodeInstructions: {
      message: "Откройте @FunPayLiteBot и отправьте ему этот код.",
    },
    telegramLinkCodeWaiting: { message: "Ожидаем подтверждения от бота…" },
    telegramLinkCodeSuccess: { message: "Telegram успешно привязан!" },
    telegramLoginCodeButton: { message: "Войти по коду (Telegram)" },
    telegramLoginCodeTitle: { message: "Вход через Telegram" },
    telegramLoginOAuthOption: { message: "Стандартный вход" },
    telegramLoginOAuthDesc: {
      message: "Через страницу Telegram (oauth.telegram.org).",
    },
    telegramLoginCodeOption: { message: "Вход по коду" },
    telegramLoginCodeDesc: {
      message: "Если страница Telegram не открывается. Отправьте код боту.",
    },
    telegramLoginCodeInstructions: {
      message:
        "Откройте @FunPayLiteBot, отправьте этот код и подтвердите вход.",
    },
    telegramLoginCodeWaiting: { message: "Ожидание подтверждения в Telegram…" },
    telegramLoginCodeSuccess: { message: "Готово! Вы вошли." },
    telegramLoginCodeError: {
      message: "Не удалось выполнить вход. Попробуйте ещё раз.",
    },
    authRetry: { message: "Повторить" },
    telegramLinkOpenBot: { message: "Открыть бота" },
    telegramLinkCopy: { message: "Копировать" },
    telegramLinkCodeError: {
      message: "Не удалось получить код. Попробуйте ещё раз.",
    },
    telegramLinkAlreadyLinked: {
      message: "Telegram уже привязан к вашему аккаунту.",
    },
    telegramLinkCopied: { message: "Код скопирован" },
    quickCopyOrderId: { message: "Копирование номера заказа" },
    quickCopyOrderIdDesc: {
      message:
        "На странице заказа добавляет иконку копирования - нажмите, чтобы скопировать номер заказа.",
    },
    orderIdCopied: { message: "Номер заказа скопирован" },
    orderIdCopyHint: { message: "Нажмите, чтобы скопировать номер заказа" },
    orderIdCopyFailed: { message: "Не удалось скопировать номер заказа" },
    featureGatedQuickCopyMessage: {
      message:
        "Копирование номера заказа - функция статуса Community. Получите Community, чтобы включить.",
    },
    showUnconfirmedSales: { message: "Копировать ID неподтверждённых продаж" },
    showUnconfirmedSalesDesc: {
      message:
        "Добавляет на страницу Продажи кнопку «Скопировать неподтверждённые»: номера заказов, которые оплачены, но ещё не подтверждены.",
    },
    unconfirmedOrdersButton: { message: "Скопировать неподтверждённые" },
    unconfirmedSalesTitle: { message: "Неподтверждённые продажи" },
    unconfirmedOrdersThresholdAll: { message: "Все оплаченные" },
    unconfirmedOrdersThreshold12: { message: "Оплачены >12 часов" },
    unconfirmedOrdersThreshold24: { message: "Оплачены >24 часов" },
    unconfirmedOrdersThreshold48: { message: "Оплачены >48 часов" },
    unconfirmedOrdersThreshold72: { message: "Оплачены >72 часов" },
    unconfirmedOrdersCount: {
      message: "Найдено: $COUNT$",
      placeholders: { count: { content: "$1", example: "42" } },
    },
    unconfirmedOrdersLoading: { message: "Загрузка…" },
    unconfirmedOrdersCopy: { message: "Копировать" },
    unconfirmedOrdersCopied: { message: "Скопировано ✓" },
    unconfirmedOrdersClose: { message: "Закрыть" },
    unconfirmedOrdersStatusError: { message: "Не удалось получить список" },
    featureGatedUnconfirmedOrdersMessage: {
      message:
        "Копирование неподтверждённых заказов - функция статуса Pro. Получите его, чтобы включить.",
    },
    supportConfirmTickets: {
      message: "Заявки в поддержку на подтверждение заказов",
    },
    supportConfirmTicketsDesc: {
      message:
        "Если покупатель не подтверждает заказ, отправьте заявку в поддержку FunPay кнопкой на странице заказа - сразу или списком со страницы «Мои продажи».",
    },
    featureGatedSupportConfirmTickets: {
      message:
        "Заявки в поддержку на подтверждение заказов - функция статуса Pro. Получите его, чтобы включить.",
    },
    supportConfirmSend: { message: "Отправить на подтверждение" },
    supportConfirmSentAt: {
      message: "Заявка отправлена $TIME$",
      placeholders: { time: { content: "$1", example: "10.09, 14:05" } },
    },
    supportConfirmAddToList: { message: "Добавить в список на подтверждение" },
    supportConfirmRemoveFromList: {
      message: "Убрать из списка на подтверждение",
    },
    supportConfirmAdded: {
      message:
        "Заказ добавлен в список на подтверждение. Заказов в списке: $COUNT$. Отправить список можно на странице «Мои продажи».",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    supportConfirmRemoved: {
      message: "Заказ убран из списка на подтверждение.",
    },
    supportConfirmListButton: {
      message: "Отправить список на подтверждение ($COUNT$)",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    supportTicketSendFromCopy: { message: "Отправить в поддержку" },
    supportTicketTitle: { message: "Заявка в поддержку FunPay" },
    supportTicketLead: {
      message:
        "Тема заявки: «Покупатель забыл подтвердить заказ». Поддержка проверит переписку в чате заказа и подтвердит его, если товар передан.",
    },
    supportTicketChecking: {
      message: "Проверяю, какие заказы ещё ждут подтверждения…",
    },
    supportTicketOrders: { message: "Заказы в заявке" },
    supportTicketText: { message: "Текст заявки" },
    supportTicketTextOne: {
      message:
        "Здравствуйте! Покупатель не подтвердил заказ $ORDERS$. Товар передан, это видно в чате заказа. Прошу подтвердить заказ. Спасибо!",
      placeholders: { orders: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketTextMany: {
      message:
        "Здравствуйте! Покупатели не подтвердили заказы $ORDERS$. Товар передан, это видно в чатах заказов. Прошу подтвердить эти заказы. Спасибо!",
      placeholders: {
        orders: { content: "$1", example: "#BLPWJF6T, #GZSHW9UT" },
      },
    },
    supportTicketOverflow: {
      message:
        "В одну заявку входит до $MAX$ заказов. Ещё $COUNT$ можно отправить следующей заявкой.",
      placeholders: {
        max: { content: "$1", example: "25" },
        count: { content: "$2", example: "4" },
      },
    },
    supportTicketSkippedNotPaid: {
      message: "Уже не ждут подтверждения и в заявку не попадут: $LIST$",
      placeholders: { list: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketSkippedRecent: {
      message:
        "Уже отправлялись в поддержку за последние сутки и в заявку не попадут: $LIST$",
      placeholders: {
        list: { content: "$1", example: "#BLPWJF6T (10.09, 14:05)" },
      },
    },
    supportTicketNothing: { message: "Отправлять нечего." },
    supportTicketRemoveFromList: { message: "Убрать из списка" },
    supportTicketRemoveFromTicket: { message: "Убрать из заявки" },
    supportTicketSend: { message: "Отправить заявку" },
    supportTicketSending: { message: "Отправляю заявку…" },
    supportTicketSent: {
      message: "Заявка отправлена. Ответ поддержки придёт в эту заявку.",
    },
    supportTicketSentToast: {
      message: "Заявка в поддержку FunPay отправлена.",
    },
    supportTicketOpen: { message: "Открыть заявку" },
    supportTicketMyTickets: { message: "Мои заявки" },
    supportTicketNewManual: { message: "Создать заявку вручную" },
    supportTicketRetry: { message: "Повторить" },
    supportTicketErrLogin: {
      message:
        "Не удалось открыть поддержку FunPay. Проверьте, что вы вошли в аккаунт FunPay, и попробуйте ещё раз.",
    },
    supportTicketErrCheck: {
      message:
        "Не удалось проверить заказы на FunPay. Проверьте соединение и попробуйте ещё раз.",
    },
    supportTicketErrNetwork: {
      message:
        "Не удалось связаться с поддержкой FunPay. Заявка не отправлена, попробуйте ещё раз.",
    },
    supportTicketErrForm: {
      message:
        "Форма заявки в поддержке FunPay изменилась, поэтому расширение ничего не отправило. Создайте заявку вручную.",
    },
    supportTicketErrRejected: {
      message: "Поддержка FunPay не приняла заявку: $REASON$",
      placeholders: { reason: { content: "$1", example: "HTTP 403" } },
    },
    supportTicketErrUncertain: {
      message:
        "Не удалось узнать, создана ли заявка. Прежде чем отправлять снова, откройте свои заявки в поддержке и проверьте.",
    },
    supportTicketErrBusy: {
      message: "Заявка уже отправляется, дождитесь результата.",
    },
    supportTicketErrGeneric: {
      message: "Не удалось отправить заявку. Попробуйте ещё раз.",
    },
    supportTicketErrCheckLogin: {
      message:
        "Похоже, вы вышли из аккаунта FunPay. Войдите и попробуйте ещё раз.",
    },
    supportTicketErrAccount: {
      message:
        "Поддержка FunPay открыта под аккаунтом $SUPPORT$, а на FunPay вы сейчас $FUNPAY$. Заявка не отправлена. Откройте поддержку, выйдите из неё и попробуйте снова.",
      placeholders: {
        support: { content: "$1", example: "OldNick" },
        funpay: { content: "$2", example: "MaxQV" },
      },
    },
    supportTicketOpenSupport: { message: "Открыть поддержку" },
    supportTicketSkippedUnseen: {
      message:
        "Не нашлись среди неподтверждённых продаж и в заявку не попадут: $LIST$",
      placeholders: { list: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketUncertainMark: { message: "результат неизвестен" },
    supportConfirmMaybeSentAt: {
      message: "Заявка, возможно, отправлена $TIME$",
      placeholders: { time: { content: "$1", example: "10.09, 14:05" } },
    },
    welcomeMessageTitle: { message: "Приветственное сообщение" },
    welcomeMessageDesc: {
      message:
        "Автоматически отправляет заданное сообщение покупателю, который написал вам впервые (или снова - по истечении таймаута). Работает в фоне, пока запущен браузер.",
    },
    welcomeMessagePlaceholder: {
      message: "Здравствуйте! Спасибо за обращение, отвечу в ближайшее время.",
    },
    welcomeMessageVars: {
      message:
        "Переменные: {buyername} - имя покупателя, {welcome} - приветствие по времени суток, {date} - дата и время.",
    },
    welcomeMessageCooldownLabel: { message: "Отправлять повторно через" },
    welcomeMessageUnitHours: { message: "часов" },
    welcomeMessageUnitDays: { message: "дней" },
    welcomeMessageCooldownDesc: {
      message:
        "Если покупатель напишет снова после этого времени, сообщение отправится повторно. 0 - отправлять только один раз для каждого чата.",
    },
    welcomeMessageImagesLabel: { message: "Изображения (необязательно)" },
    welcomeMessageAddImage: { message: "Добавить изображение" },
    welcomeMessageRemoveImage: { message: "Удалить" },
    welcomeMessageImageNotImage: { message: "Выберите изображение." },
    welcomeMessageImageFailed: { message: "Не удалось добавить изображение." },
    featureGatedWelcomeMessage: {
      message:
        "«Приветственное сообщение» - функция статуса Pro. Получите его, чтобы включить.",
    },
    welcomeMessageSettings: { message: "Настройки" },
    reviewReplyTitle: { message: "Автоответ на отзывы" },
    reviewReplyDesc: {
      message:
        "Автоматически отправляет заданный ответ на отзыв покупателя к вашему заказу - свой текст для каждой оценки (1-5 звёзд). Работает в фоне, пока запущен браузер.",
    },
    reviewReplySettings: { message: "Настройки" },
    reviewReplyModalDesc: {
      message:
        "Задайте ответ для каждой оценки. Ответ отправляется, только когда для полученной оценки задан текст. Пустое поле - не отвечать на эту оценку.",
    },
    reviewReplyPlaceholder: { message: "Спасибо за ваш отзыв и оценку!" },
    reviewReplyVars: {
      message:
        "Переменные: {buyername} - имя покупателя, {lotname} - название лота, {orderid} - номер заказа, {stars} - оценка, {date} - дата и время.",
    },
    featureGatedReviewReply: {
      message:
        "«Автоответ на отзывы» - функция статуса Premium. Получите его, чтобы включить.",
    },
    aiReviewReplyTitle: { message: "ИИ авто-ответ на отзыв покупателя" },
    aiReviewReplyDesc: {
      message:
        "Отвечает на отзыв текстом, который пишет нейросеть по словам самого покупателя, а не заранее заданным шаблоном. Если нейросеть недоступна, отправится ваш шаблон для этой оценки. Работает в фоне, пока запущен браузер.",
    },
    aiReviewReplySettings: { message: "Настройки" },
    aiReviewReplyModalDesc: {
      message:
        "Ответ отправляется публично от вашего имени, поэтому нейросеть не обещает возвраты и скидки, не признаёт вину и не оставляет контактов вне FunPay. Если ответ не пройдёт проверку, отправится ваш шаблон из «Автоответа на отзывы».",
    },
    aiReviewReplyRatingsLabel: { message: "На какие оценки отвечать" },
    aiReviewReplyNoteLabel: { message: "Пожелание к тону ответа" },
    aiReviewReplyNotePlaceholder: {
      message: "Например: пиши коротко и на «ты», без смайликов",
    },
    aiReviewReplyHint: {
      message:
        "До 300 символов. Расход общий с генерацией текста лота, 1000 обращений в месяц.",
    },
    aiReviewReplySave: { message: "Сохранить" },
    aiReviewReplySaved: { message: "Сохранено" },
    aiReviewReplyUnsaved: { message: "Изменения не сохранены" },
    featureGatedAiReviewReply: {
      message:
        "«ИИ авто-ответ на отзыв покупателя» - функция статуса Premium. Получите его, чтобы включить.",
    },
    autoReplyTitle: { message: "Автоответ по ключевым словам" },
    autoReplyDesc: {
      message:
        "Автоматически отправляет заданный ответ, когда сообщение покупателя точно совпадает с командой или содержит указанное слово либо фразу. Работает в фоне, пока запущен браузер.",
    },
    autoReplySettings: { message: "Настройки" },
    autoReplyModalDesc: {
      message:
        "Добавьте правила. Для каждого нового сообщения покупателя срабатывает первое подходящее правило. «Точное совпадение» - сообщение полностью равно ключевому слову; «Содержит» - ключевое слово встречается в сообщении.",
    },
    autoReplyColKeyword: { message: "Ключевое слово / фраза" },
    autoReplyColMode: { message: "Режим" },
    autoReplyColResponse: { message: "Ответ" },
    autoReplyColEnabled: { message: "Вкл" },
    autoReplyModeExact: { message: "Точное совпадение" },
    autoReplyModeContains: { message: "Содержит" },
    autoReplyKeywordPlaceholder: { message: "например: цена" },
    autoReplyResponsePlaceholder: { message: "Текст ответа" },
    autoReplyAddRule: { message: "Добавить правило" },
    autoReplyVars: {
      message:
        "Переменные: {buyername} - имя покупателя, {date} - дата и время.",
    },
    featureGatedAutoReply: {
      message:
        "«Автоответ по ключевым словам» - функция статуса Premium. Получите его, чтобы включить.",
    },
    orderConfirmReplyTitle: { message: "Автоответ после подтверждения заказа" },
    orderConfirmReplyDesc: {
      message:
        "Автоматически отправляет заданное сообщение сразу после того, как покупатель подтвердил выполнение заказа. Работает в фоне, пока запущен браузер.",
    },
    orderConfirmReplySettings: { message: "Настройки" },
    orderConfirmReplyModalDesc: {
      message:
        "Сообщение отправляется один раз на каждое подтверждение заказа. По умолчанию стоит «Спасибо за покупку!», текст можно изменить на любой.",
    },
    orderConfirmReplyPlaceholder: { message: "Спасибо за покупку!" },
    orderConfirmReplyVars: {
      message:
        "Переменные: {buyername} - имя покупателя, {orderid} - номер заказа, {date} - дата и время.",
    },
    orderConfirmReplyDefault: { message: "Спасибо за покупку!" },
    orderConfirmReplySave: { message: "Сохранить" },
    orderConfirmReplySaved: { message: "Сохранено" },
    orderConfirmReplyUnsaved: { message: "Изменения не сохранены" },
    featureGatedOrderConfirmReply: {
      message:
        "«Автоответ после подтверждения заказа» - функция статуса Premium. Получите его, чтобы включить.",
    },
    lotCostPrice: { message: "Себестоимость лотов" },
    lotCostPriceDesc: {
      message:
        "На странице редактирования лота добавляет поле себестоимости с выбором валюты и показывает чистую прибыль. Себестоимость также попадёт в экспорт заказов. Привязывается к существующим лотам.",
    },
    costPriceLabel: { message: "Себестоимость (необязательно)" },
    costPriceNetProfitLabel: { message: "Чистая прибыль" },
    costPriceNoRate: { message: "нет курса" },
    costPriceWithdrawalCommission: { message: "Комиссия на вывод" },
    featureGatedLotCostPrice: {
      message:
        "«Себестоимость лотов» - функция статуса Premium. Получите его, чтобы включить.",
    },
    finances: { message: "Финансы" },
    showFinancesStats: { message: "Статистика финансов" },
    showFinancesStatsDesc: {
      message:
        "На странице баланса (/account/balance) показывает статистику по операциям: поступления, расходы, чистый поток, разбивку по типам и график.",
    },
    withdrawalAvailability: { message: "Сколько доступно для вывода" },
    withdrawalAvailabilityDesc: {
      message:
        "На странице «Финансы» показывает, сколько денег уже можно вывести, а сколько освободится позже из-за задержки на вывод 48 часов, и когда. Если с аккаунта задержка снята, Lite Bot поймёт это по вашим выводам и выключит функцию сам.",
    },
    withdrawalBlockLabel: { message: "Доступно для вывода" },
    withdrawalNow: { message: "Можно вывести сейчас" },
    withdrawalLater: { message: "Станет доступно позже" },
    withdrawalLaterNone: { message: "Сейчас ничего не ждёт" },
    withdrawalAllBy: {
      message: "всё - к $TIME$",
      placeholders: { time: { content: "$1" } },
    },
    withdrawalIn: {
      message: "через $TIME$",
      placeholders: { time: { content: "$1" } },
    },
    withdrawalHoursMinutes: {
      message: "$HOURS$ ч $MINUTES$ мин",
      placeholders: { hours: { content: "$1" }, minutes: { content: "$2" } },
    },
    withdrawalHours: {
      message: "$HOURS$ ч",
      placeholders: { hours: { content: "$1" } },
    },
    withdrawalMinutes: {
      message: "$MINUTES$ мин",
      placeholders: { minutes: { content: "$1" } },
    },
    withdrawalSoon: { message: "меньше чем через минуту" },
    withdrawalMore: {
      message: "Ещё $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    withdrawalLess: { message: "Свернуть" },
    withdrawalRule: {
      message:
        "Деньги с продаж, пополнения и возвраты выводятся через 48 часов после поступления на баланс.",
    },
    withdrawalHide: { message: "Задержки нет - скрыть" },
    withdrawalHiddenToast: {
      message:
        "Скрыто. Вернуть: Lite Bot → Финансы → «Сколько доступно для вывода».",
    },
    withdrawalInstantOffToast: {
      message:
        "Вывод на этом аккаунте мгновенный, задержки нет - функция «Сколько доступно для вывода» выключена. Включить снова: Lite Bot → Финансы.",
    },
    withdrawalPartial: {
      message: "Учтены последние $COUNT$ операций: за 48 часов их больше.",
      placeholders: { count: { content: "$1" } },
    },
    exportFinancesEnable: { message: "Экспорт финансов" },
    exportFinancesEnableDesc: {
      message:
        "Кнопка экспорта истории операций в Excel / JSON на странице баланса.",
    },
    financesStatsTitle: { message: "Статистика" },
    financesCardIncome: { message: "Поступления" },
    financesCardExpense: { message: "Расходы" },
    financesCardNet: { message: "Чистый поток" },
    financesCardOps: { message: "Всего операций" },
    financesTypesTitle: { message: "По типам операций" },
    financesChartTitle: { message: "Динамика (поступления / расходы)" },
    financesUpdate: { message: "Обновить" },
    financesExport: { message: "Экспорт" },
    financesUpdating: { message: "Загрузка операций…" },
    financesEmpty: { message: "Нет данных за период" },
    financesTypeOrder: { message: "Заказы" },
    financesTypePayment: { message: "Пополнения" },
    financesTypeWithdraw: { message: "Выводы" },
    financesTypeWithdrawCancel: { message: "Отмены выводов" },
    financesTypeRefund: { message: "Возвраты" },
    financesTypeOther: { message: "Другое" },
    financesStatusComplete: { message: "Завершено" },
    financesStatusWaiting: { message: "Ожидание" },
    financesStatusCancel: { message: "Отменено" },
    financesTopIncome: { message: "Больше всего поступлений" },
    financesTopExpense: { message: "Больше всего расходов" },
    financesDiagramStatus: { message: "По статусам" },
    financesDiagramCurrency: { message: "По валютам" },
    financesDetailNet: { message: "Чистый поток по типам" },
    exportFinancesTitle: { message: "Экспорт финансов" },
    featureGatedFinanceStats: {
      message:
        "«Финансы» (статистика и экспорт) - функция статуса Premium. Получите его, чтобы включить.",
    },
    settingsCategoryNotifications: { message: "Уведомления" },
    bulkLotEdit: { message: "Массовое редактирование лотов" },
    bulkLotEditDesc: {
      message:
        "На странице ваших предложений и на своей странице профиля появится кнопка «Выбрать лоты»: можно выбрать сразу несколько лотов и включить, выключить, изменить им цену или удалить. В разделе лоты ещё и перетаскиваются мышью - выбранный порядок применяется пересозданием тех лотов, которые переехали.",
    },
    featureGatedBulkLotEdit: {
      message: "Массовое редактирование лотов доступно с планом Pro.",
    },
    bulkEnter: { message: "Выбрать лоты" },
    bulkExit: { message: "Готово" },
    bulkOrderApply: { message: "Применить порядок" },
    bulkOrderAsk: {
      message:
        "Будет пересоздано лотов: $COUNT$ из $TOTAL$. У них изменится номер: ссылки на эти лоты в переписках и на сторонних сайтах перестанут работать, а лоты потеряют свой возраст. Товары автовыдачи переносятся. Копия создаётся до удаления оригинала, поэтому лот не потеряется.",
      placeholders: { count: { content: "$1" }, total: { content: "$2" } },
    },
    bulkOrderConfirm: {
      message: "Пересоздать: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderDone: {
      message: "Порядок применён. Пересоздано лотов: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderDuplicate: {
      message:
        "Лот $ID$ сейчас есть в двух экземплярах - лишний можно удалить вручную",
      placeholders: { id: { content: "$1" } },
    },
    bulkOrderLotLimit: {
      message:
        "В этом разделе у вас уже столько лотов, сколько разрешает FunPay, поэтому копия лота не помещается рядом с оригиналом. Нажмите «Применить порядок» ещё раз - лоты будут пересоздаваться наоборот: сначала удаление, потом создание.",
    },
    bulkOrderAskAtCap: {
      message:
        "В этом разделе у вас уже столько лотов, сколько разрешает FunPay, поэтому копия лота может не поместиться рядом с оригиналом. Тогда лоты будут пересоздаваться наоборот: сначала удаление, потом создание. Перед удалением все данные лота, включая товары автовыдачи, сохраняются, и если FunPay не даст создать лот заново, его можно будет восстановить. Будет пересоздано лотов: $COUNT$ из $TOTAL$. У них изменится номер, а сами лоты потеряют свой возраст.",
      placeholders: { count: { content: "$1" }, total: { content: "$2" } },
    },
    bulkOrderLost: {
      message: "Лот «$TITLE$» удалён, а создать его заново FunPay не дал",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreTitle: { message: "Лот не создан заново" },
    bulkRestoreAsk: {
      message:
        "Лот «$TITLE$» был удалён при смене порядка и ещё не создан заново. Все его данные, включая товары автовыдачи, сохранены. Создать его сейчас?",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreConfirm: { message: "Создать лот" },
    bulkRestoreNotNow: { message: "Не сейчас" },
    bulkRestoreForgetTitle: { message: "Забыть этот лот?" },
    bulkRestoreForgetAsk: {
      message:
        "Сохранённые данные лота «$TITLE$» будут удалены, и восстановить его будет нельзя. Если вы уже создали его сами - забудьте. Если нет - оставьте, и мы предложим его снова, когда вы откроете этот раздел.",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreForget: { message: "Забыть" },
    bulkRestoreKeep: { message: "Оставить" },
    bulkRestoreDone: {
      message:
        "Лот «$TITLE$» создан заново. Обновите страницу, чтобы увидеть его в списке.",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreNoRoom: {
      message: "в разделе нет свободного места по лимиту FunPay",
    },
    bulkRestoreFailed: {
      message:
        "Не получилось создать лот «$TITLE$»: $ERROR$. Данные сохранены - попробуйте позже.",
      placeholders: { title: { content: "$1" }, error: { content: "$2" } },
    },
    bulkOrderFailed: { message: "Порядок применён не полностью" },
    bulkOrderHint: { message: "Потяните строку, чтобы изменить порядок" },
    bulkOrderHintTouch: {
      message: "Тяните строку за точки слева, чтобы изменить порядок",
    },
    bulkOrderMovedN: {
      message: "Перемещено: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderNothing: { message: "Порядок уже такой" },
    bulkOrderReset: { message: "Вернуть как было" },
    bulkOrderTitle: { message: "Применить новый порядок?" },
    bulkSelectAll: { message: "Все" },
    bulkSelectedN: {
      message: "Выбрано: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkNothingSelected: { message: "Выберите лоты - нажмите на строку" },
    bulkActivate: { message: "Включить" },
    bulkDeactivate: { message: "Выключить" },
    bulkPrice: { message: "Редактировать цену" },
    bulkDelete: { message: "Удалить" },
    bulkCancel: { message: "Прервать" },
    bulkActivatedN: {
      message: "включено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeactivatedN: {
      message: "выключено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPricedN: {
      message: "цена изменена: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeletedN: {
      message: "удалено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkSkippedN: {
      message: "без изменений: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkFailedN: {
      message: "не удалось: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkUnknownN: {
      message: "неизвестно: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkRateLimited: { message: "FunPay попросил притормозить - остановились" },
    bulkCancelled: { message: "прервано" },
    bulkDeleteTitle: { message: "Удалить выбранные лоты?" },
    bulkDeleteAsk: {
      message: "Будет удалено лотов: $COUNT$. Отменить это будет нельзя.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeleteAskChips: {
      message:
        "Будет удалено лотов: $COUNT$. Валютные лоты пропущены - их так удалить нельзя. Отменить это будет нельзя.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeleteConfirm: {
      message: "Удалить: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkChipsOnly: {
      message: "Валютные лоты так не удаляются - обнулите у них количество",
    },
    bulkPriceTitle: { message: "Изменить цену" },
    bulkPriceLead: {
      message: "Применится к выбранным лотам: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceModeSet: { message: "Установить" },
    bulkPriceOpUp: { message: "Увеличить" },
    bulkPriceOpDown: { message: "Уменьшить" },
    bulkPriceChanging: {
      message: "Изменится: $COUNT$ из $TOTAL$",
      placeholders: {
        count: { content: "$1", example: "10" },
        total: { content: "$2", example: "12" },
      },
    },
    bulkPriceRound: { message: "Округлять до целого" },
    bulkPriceMin: { message: "Не ниже" },
    bulkPriceMax: { message: "Не выше" },
    bulkPricePreview: { message: "Что получится" },
    bulkPriceMore: {
      message: "…и ещё $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceUnreadable: {
      message: "Без предпросмотра: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceApply: { message: "Применить" },
    bulkPriceApplyN: {
      message: "Применить к $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotAiGenerate: { message: "Заполнение лота нейросетью" },
    lotAiGenerateDesc: {
      message:
        "На форме предложения появится кнопка «Написать текст лота»: нейросеть напишет название, описание и сообщение после оплаты по данным вашего лота. Результат сначала показывается в отдельном окне, в лот ничего не попадает без вашего нажатия.",
    },
    transferSearch: { message: "Поиск по названию" },
    transferSearching: { message: "Ищу разделы с вашими лотами" },
    transferNothingFound: { message: "Лотов не нашлось" },
    transferOtherGames: { message: "Прочее" },
    transferFindNote: {
      message:
        "Не хватает разделов? Те, где все лоты выключены, в профиле не видны.",
    },
    transferFindNear: { message: "Поискать в моих играх" },
    transferFindFar: { message: "Поискать везде (больше часа)" },
    lotTransfer: { message: "Экспорт лотов" },
    lotTransferDesc: {
      message:
        "Добавляет на страницу профиля кнопки «Экспорт лотов» и «Импорт лотов»: лоты сохраняются в файл JSON или Excel, а из файла создаются новые.",
    },
    featureGatedLotTransfer: {
      message: "Экспорт лотов доступен с планом Premium.",
    },
    transferExportButton: { message: "Экспорт лотов" },
    transferImportButton: { message: "Импорт лотов" },
    transferExportTitle: { message: "Экспорт лотов в файл" },
    transferImportTitle: { message: "Импорт лотов из файла" },
    transferExportLead: {
      message: "Отметьте разделы, которые нужно экспортировать.",
    },
    transferImportLead: { message: "В файле" },
    transferSelectAll: { message: "Выбрать все" },
    transferSelected: { message: "Выбрано разделов" },
    transferKindLots: { message: "лоты" },
    transferKindChips: { message: "валюта" },
    transferIncludeDisabled: { message: "Включая выключенные лоты" },
    transferWarnTime: { message: "Это займёт примерно" },
    transferWarnKeepOpen: {
      message:
        "Не закрывайте эту вкладку и не уходите со страницы, пока идёт работа.",
    },
    transferWarnSecrets: {
      message:
        "В файл попадут товары автовыдачи, включая логины и пароли. Храните его так же, как пароль.",
    },
    lotManagementForeignTitle: { message: "Лоты продавца" },
    lotManagementMenu: { message: "Ещё" },
    lotManagementHide: { message: "Скрыть панель управления лотами" },
    lotManagementHiddenToast: {
      message:
        "Панель управления лотами скрыта. Включить её снова можно в настройках Lite Bot: раздел «$SECTION$», пункт «$SETTING$».",
      placeholders: {
        section: { content: "$1", example: "Предложения" },
        setting: {
          content: "$2",
          example: "Панель управления лотами в профиле",
        },
      },
    },
    lotSearchPlaceholder: { message: "Поиск лотов: раздел или название" },
    lotSearchLabel: { message: "Поиск лотов" },
    lotSearchClear: { message: "Очистить" },
    lotSearchNothing: { message: "Ничего не найдено" },
    lotSearchFound: {
      message: "Найдено лотов: $COUNT$",
      placeholders: { count: { content: "$1", example: "12" } },
    },
    transferExportForeignButton: { message: "Экспорт лотов продавца" },
    transferExportForeignTitle: { message: "Экспорт лотов продавца" },
    transferExportForeignLead: {
      message: "Отметьте разделы продавца, которые нужно выгрузить.",
    },
    transferWarnPublicOnly: {
      message:
        "С чужого профиля читается только то, что видит покупатель: описания, цена и наличие. Товары автовыдачи и сообщение после оплаты не попадут - их видит лишь владелец лота.",
    },
    transferWarnPublicOff: {
      message:
        "Выключенных лотов на сайте не видно, поэтому в файл они не попадут. Созданные из такого файла лоты будут выключены - проверьте их перед включением.",
    },
    transferCurrencySkip: { message: "Пропущено из-за валюты файла" },
    transferCreatedOff: {
      message:
        "Лоты с чужого профиля созданы выключенными - проверьте их перед включением",
    },
    transferParamUnplaced: {
      message: "Параметр не перенесён, оставлено значение по умолчанию",
    },
    transferOtherLocalePass: { message: "вторая языковая версия" },
    transferNoEnglish: {
      message:
        "Без английской версии, в разделах, где FunPay её требует, не импортируются",
    },
    transferNoRussian: {
      message: "Без русской версии, при импорте возьмётся английский текст",
    },
    transferMissingEnglish: {
      message:
        "FunPay требует английское описание, которого нет в файле: сделайте экспорт заново, а если у исходного лота английского текста нет, допишите его сами",
    },
    transferUnderMinute: { message: "меньше минуты" },
    transferMinutesShort: { message: "мин" },
    transferHoursShort: { message: "ч" },
    transferCancel: { message: "Отмена" },
    transferStartExport: { message: "Экспорт" },
    transferStartImport: { message: "Импорт" },
    transferAbort: { message: "Прервать" },
    transferAborting: { message: "Останавливаю…" },
    transferKeepOpenShort: { message: "Вкладку не закрывать" },
    transferDone: { message: "Готово" },
    transferSaved: { message: "Сохранено лотов" },
    transferSavedChips: { message: "валютных разделов" },
    transferCreated: { message: "Создано лотов" },
    transferWroteChips: { message: "валютных разделов" },
    transferStopped: { message: "Остановлено" },
    transferExportRateLimited: {
      message:
        "FunPay попросил притормозить - экспорт остановлен. Подождите несколько минут и запустите его снова.",
    },
    transferSkippedDisabled: { message: "Пропущено выключенных" },
    transferSkippedDeleted: { message: "Пропущено удалённых" },
    transferSectionSkipped: { message: "раздел пропущен" },
    transferLotLimit: {
      message:
        "в разделе уже столько ваших лотов, сколько разрешает FunPay, - новые там не создаются",
    },
    transferFailed: { message: "Не получилось экспортировать" },
    transferImportFailed: { message: "Не получилось импортировать" },
    transferBadJson: {
      message: "Это не файл экспорта: не удалось его прочитать.",
    },
    transferBadFormat: {
      message: "Это не файл экспорта лотов FunPay Lite Bot.",
    },
    transferNewerFile: {
      message:
        "Файл сделан более новой версией расширения. Обновите расширение.",
    },
    transferEmptyFile: { message: "В файле нет ни одного лота." },
    featureGatedLotAiGenerate: {
      message: "Заполнение лота нейросетью доступно с планом Pro.",
    },
    lotAiSectionLabel: { message: "Заполнение нейросетью" },
    lotAiButton: { message: "Написать текст лота" },
    lotAiUndo: { message: "Вернуть как было" },
    lotAiModalTitle: { message: "Сгенерировать лот" },
    lotAiSubjectLabel: { message: "Что продаём?" },
    lotAiSubjectPlaceholder: {
      message: "Например: аккаунт Steam с почтой и 200 играми",
    },
    lotAiTemplateLabel: { message: "Ссылка на лот-шаблон, необязательно" },
    lotAiTemplatePlaceholder: { message: "https://funpay.com/lots/offer?id=…" },
    lotAiTemplateDesc: {
      message:
        "Откроем этот лот и возьмём его текст как образец стиля. Товар в нём может быть любым - перенимается манера подачи, а не содержание.",
    },
    lotAiTemplateBadUrl: {
      message:
        "Это не похоже на ссылку на лот FunPay. Пример: https://funpay.com/lots/offer?id=12345678",
    },
    lotAiTemplateFailed: {
      message:
        "Не удалось прочитать лот-шаблон. Проверьте ссылку или уберите её",
    },
    lotAiFieldTitle: { message: "Название" },
    lotAiFieldDescription: { message: "Описание" },
    lotAiFieldPaymentMsg: { message: "Сообщение после оплаты" },
    lotAiFieldNotWritable: {
      message:
        "В этом разделе поле не редактируется, текст можно скопировать вручную",
    },
    lotAiWorking: {
      message: "Пишем текст, обычно это занимает несколько секунд",
    },
    lotAiAgain: { message: "Сгенерировать ещё раз" },
    lotAiInsert: { message: "Вставить в лот" },
    lotAiQuotaLeft: {
      message: "Осталось генераций в этом месяце: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotAiInserted: { message: "Текст вставлен. Проверьте и сохраните лот" },
    lotAiUndone: { message: "Прежний текст возвращён" },
    lotAiInsertNothing: { message: "В этом разделе нечего заполнять" },
    lotAiErrorQuota: {
      message:
        "Вы израсходовали генерации на этот месяц. Лимит обновится первого числа",
    },
    lotAiErrorBusy: {
      message: "Сейчас слишком много запросов. Попробуйте через минуту",
    },
    lotAiErrorUnavailable: {
      message: "Генерация временно недоступна. Попробуйте позже",
    },
    lotAiErrorRejected: {
      message:
        "Текст не прошёл проверку и был отброшен. Нажмите ещё раз или уточните, что продаёте",
    },
    lotAiErrorFeature: { message: "Генерация доступна с планом Pro" },
    lotAiErrorSession: {
      message: "Войдите в аккаунт FunPayLiteBot, чтобы пользоваться генерацией",
    },
    lotAiErrorNetwork: {
      message: "Нет связи с сервером. Проверьте интернет и попробуйте снова",
    },
    lotAiErrorGeneric: {
      message: "Не удалось написать текст. Попробуйте ещё раз",
    },
    lotAiStart: { message: "Сгенерировать" },
    lotClone: { message: "Клонирование лотов" },
    lotCloneDesc: {
      message:
        "Добавляет кнопку «Клонировать лот» на страницу чужого лота, а на чужой профиль - клонирование нескольких лотов сразу. Переносятся описание, параметры, цена и картинки.",
    },
    featureGatedLotClone: {
      message: "Клонирование лотов доступно с планом Pro.",
    },
    lotCloneButton: { message: "Клонировать лот" },
    lotCloneUnreadable: { message: "Не получилось прочитать этот лот" },
    lotCloneNoticeLead: {
      message:
        "Форма заполнена по лоту другого продавца. Проверьте поля и сохраните лот.",
    },
    lotCloneNoticeSource: { message: "Исходный лот" },
    lotCloneNoticeUnresolved: { message: "Не удалось выбрать, укажите сами:" },
    lotCloneNoticeNoPrice: {
      message: "Цену укажите сами: на странице лота её не было.",
    },
    lotCloneMissingAmount: { message: "наличие" },
    lotCloneMissingImages: { message: "картинки" },
    lotCloneMissingGoods: { message: "товары автовыдачи" },
    lotCloneNoticeMissing: {
      message: "Не переносятся, добавьте сами: $LIST$.",
      placeholders: { list: { content: "$1", example: "наличие, картинки" } },
    },
    lotCloneDraftGone: {
      message:
        "Данные лота для клонирования устарели. Откройте лот ещё раз и нажмите «Клонировать лот».",
    },
    lotCloneBulkButton: { message: "Клонировать к себе" },
    lotCloneBulkTitle: { message: "Клонировать лоты к себе?" },
    lotCloneBulkAsk: {
      message:
        "Будет создано лотов: $COUNT$, в тех же разделах, с описанием, параметрами, ценой и картинками продавца. Они появятся у вас выключенными: проверьте их, укажите наличие и включите. Товары автовыдачи не переносятся.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneBulkConfirm: {
      message: "Клонировать: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneDoneN: {
      message: "создано: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneBulkDone: {
      message:
        "Новые лоты созданы выключенными: проверьте их у себя и включите.",
    },
    lotCloneBulkWhy: {
      message: "Не создано: $LIST$.",
      placeholders: {
        list: { content: "$1", example: "лот уже снят с продажи" },
      },
    },
    lotCloneBulkUnresolved: {
      message: "Не удалось выбрать, оставлено по умолчанию: $LIST$.",
      placeholders: { list: { content: "$1", example: "Регион: Европа" } },
    },
    lotCloneOtherPass: { message: "Вторая языковая версия" },
    lotCloneSignIn: {
      message: "Войдите в аккаунт FunPay, чтобы создать лоты у себя",
    },
    lotCloneErrLimit: { message: "в разделе нет места по лимиту лотов FunPay" },
    lotCloneErrForbidden: { message: "в этом разделе вам нельзя продавать" },
    lotCloneErrGone: { message: "лот уже снят с продажи" },
    lotCloneErrPrice: { message: "FunPay не показал цену лота" },
    lotCloneErrUnreadable: { message: "не получилось прочитать лот" },
    lotCloneErrRate: { message: "FunPay попросил притормозить" },
    lotCloneImagesConsentTitle: { message: "Картинки лота" },
    lotCloneImagesConsentBody: {
      message:
        "Чтобы перенести картинки, расширению нужен доступ к sfunpay.com - серверу, на котором FunPay хранит картинки лотов. Разрешение спрашивается один раз.",
    },
    lotCloneImagesConsentGrant: { message: "Разрешить" },
    lotCloneImagesConsentCancel: { message: "Без картинок" },
    lotCloneImagesProgress: {
      message: "Картинки: $DONE$ из $TOTAL$",
      placeholders: {
        done: { content: "$1", example: "2" },
        total: { content: "$2", example: "5" },
      },
    },
    lotCloneNoticeImagesPartial: {
      message:
        "Перенеслись не все картинки: $DONE$ из $TOTAL$. Остальные добавьте сами.",
      placeholders: {
        done: { content: "$1", example: "3" },
        total: { content: "$2", example: "5" },
      },
    },
    lotCloneBulkImagesSkipped: {
      message: "Картинки не переносились: нет доступа к sfunpay.com.",
    },
    lotCloneBulkImagesFailed: {
      message: "Не перенеслось картинок: $COUNT$.",
      placeholders: { count: { content: "$1", example: "2" } },
    },
    consentPendingHint: { message: "Подтвердите запрос в окне браузера." },
    consentRequestFailed: {
      message: "Браузер не дал запросить доступ: $ERROR$",
      placeholders: {
        error: {
          content: "$1",
          example:
            "Only permissions specified in the manifest may be requested.",
        },
      },
    },
    lotCloneNoticeImagesNoAccess: {
      message:
        "Картинки не перенесены: нет доступа к sfunpay.com. Его можно разрешить при следующем клонировании, а картинки этого лота добавьте сами.",
    },
    settingThemeRedMoon: { message: "Red Moon" },
    themePresetMidnight: { message: "Полночь" },
    themePresetAmoled: { message: "Чёрная" },
    themePresetGraphite: { message: "Графит" },
    themePresetNord: { message: "Север" },
    themePresetAmethyst: { message: "Аметист" },
    themePresetForest: { message: "Лес" },
    themePresetOcean: { message: "Океан" },
    themePresetCocoa: { message: "Какао" },
    themePresetSakura: { message: "Сакура" },
    themePresetPaper: { message: "Бумага" },
    themeCardCustom: { message: "Своя" },
    themeEditorTitle: { message: "Своя тема" },
    themeEditorDesc: {
      message:
        "Три цвета - фон, текст и акцент. Остальные оттенки страница подберёт сама, изменения видны сразу.",
    },
    themeBaseLabel: { message: "Основа" },
    themeBaseSolid: { message: "Однотонная" },
    themeBaseFirewatch: { message: "Обои Firewatch" },
    themeBaseRedMoon: { message: "Обои Red Moon" },
    themeColorBg: { message: "Фон" },
    themeColorText: { message: "Текст" },
    themeColorAccent: { message: "Акцент" },
    themeContrastLabel: { message: "Контраст текста" },
    themeContrastGreat: { message: "отлично" },
    themeContrastOk: { message: "достаточно" },
    themeContrastLow: { message: "слабо, текст будет плохо читаться" },
    themeAccentLow: { message: "Акцент почти сливается с фоном." },
    themeRandom: { message: "Случайные цвета" },
    themeCopyCode: { message: "Скопировать код темы" },
    themeCodeCopied: {
      message:
        "Код темы скопирован. Отправьте его другу - он вставит его в «Своя тема».",
    },
    themePasteCode: { message: "Вставить код" },
    themePasteApply: { message: "Применить" },
    themeCodeInvalid: { message: "Это не код темы Lite Bot" },
    themeSaved: { message: "Сохранено" },
    tariffsPeriodYear: { message: "Год" },
    tariffsPeriodMonth: { message: "Месяц" },
    renewDaysLeft: {
      message: "$DAYS$ дн.",
      placeholders: { days: { content: "$1" } },
    },
    renewHoursLeft: {
      message: "$HOURS$ ч",
      placeholders: { hours: { content: "$1" } },
    },
    renewEndingBar: {
      message:
        "$PLAN$ закончится через $LEFT$. Продлите, чтобы функции не выключились.",
      placeholders: { plan: { content: "$1" }, left: { content: "$2" } },
    },
    renewButton: { message: "Продлить" },
    renewYearButton: { message: "На год: 2 месяца в подарок" },
    renewEndedTitle: {
      message: "Статус $PLAN$ закончился",
      placeholders: { plan: { content: "$1" } },
    },
    renewEndedBody: {
      message:
        "Платные функции выключены. Настройки сохранены: продлите $PLAN$, и всё заработает снова.",
      placeholders: { plan: { content: "$1" } },
    },
    renewEndedBuy: {
      message: "Продлить $PLAN$",
      placeholders: { plan: { content: "$1" } },
    },
    checkoutUnfinishedBar: {
      message:
        "Оплата $PLAN$ не завершилась? Если что-то помешало, попробуйте ещё раз.",
      placeholders: { plan: { content: "$1" } },
    },
    checkoutUnfinishedButton: { message: "Вернуться к оплате" },
  };
  var k = {
    nicknameColorTitle: { message: "Публічні стилі ніка" },
    nicknameColorDescription: {
      message:
        "Оберіть стиль для свого ніка - його побачать усі користувачі розширення на FunPay, на всіх сторінках.",
    },
    nicknameColorPurple: { message: "Фіолетовий градієнт" },
    nicknameColorOrange: { message: "Помаранчевий градієнт" },
    nicknameColorOrangeLocked: {
      message: "Помаранчевий градієнт доступний лише з Pro",
    },
    nicknameColorNone: { message: "Стандартний" },
    nicknameStyleGroupColor: { message: "Колір" },
    nicknameStyleGroupFont: { message: "Шрифт" },
    nicknameStyleGroupEffect: { message: "Ефект" },
    nicknameStyleColorLocked: { message: "Колір задає ефект" },
    nicknameStyleUnsavedNote: { message: "Стиль не збережено" },
    nicknameStyleSaveButton: { message: "Зберегти" },
    nicknameStyleDiscardButton: { message: "Скасувати" },
    nicknameStyleUnsavedTitle: { message: "Стиль ніка не збережено" },
    nicknameStyleUnsavedBody: {
      message: "Ви приміряли стиль ніка, але не зберегли його. Зберегти зміни?",
    },
    nicknameStyleRestored: { message: "Стиль ніка відновлено" },
    nicknameStyleRestorePartial: {
      message:
        "Частина збереженого стилю більше недоступна - відновлено лише доступне",
    },
    nicknameStyleRestoreUnavailable: {
      message: "Збережений стиль ніка більше недоступний",
    },
    nicknameStyleRestoreFailed: {
      message:
        "Не вдалося відновити стиль ніка - натисніть «Зберегти», щоб повторити",
    },
    nicknameColorHiddenBlocked: {
      message:
        "Стилі ніків приховані - вимкніть «Приховувати стилі ніків», щоб змінювати свій стиль.",
    },
    goldenKeyCopyFailed: {
      message:
        "Не вдалося скопіювати - клацніть по сторінці та спробуйте ще раз.",
    },
    nicknameStyleTierFree: { message: "Доступно всім" },
    nicknameColorPreviewFallback: { message: "Ваш нік" },
    nicknameColorSaved: { message: "Стиль ніка збережено" },
    nicknameColorSaveFailed: { message: "Не вдалося зберегти стиль ніка" },
    nicknameColorProRequired: {
      message: "Помаранчевий градієнт доступний лише зі статусом Pro",
    },
    nicknameColorLinkFirst: {
      message: "Спочатку прив'яжіть акаунт FunPay у розділі «Акаунт»",
    },
    nicknameColorNeedCommunity: {
      message: "Публічний стиль ніка доступний зі статусом Community",
    },
    nicknameColorHideTitle: { message: "Приховувати стилі ніків" },
    nicknameColorHideDesc: {
      message:
        "Не показувати публічні стилі ніків інших користувачів ніде, крім сторінок їхніх профілів. Ваш власний стиль ніка при цьому стане стандартним для всіх користувачів.",
    },
    nicknameColorHideNeedCommunity: {
      message: "Приховування стилів ніків доступне зі статусом Community",
    },
    nicknameColorNeedPro: {
      message: "Помаранчевий стиль ніка доступний зі статусом Pro",
    },
    nicknameColorNeedPremium: {
      message: "Преміум-стилі ніка доступні зі статусом Premium",
    },
    nicknameColorUpgrade: { message: "Детальніше про статуси" },
    nicknameColorLoading: { message: "Завантаження…" },
    nicknameColorPencilTitle: { message: "Змінити стиль ніка" },
    nicknameColorOpenCustomization: { message: "Відкрити кастомізацію" },
    extName: { message: "FunPay Lite Bot" },
    extDescription: {
      message:
        "💲 Бот і розширення для FunPay: автопідняття лотів, автовідповідач, статистика продажів, темна тема - понад 60 000 користувачів",
    },
    extSmallName: { message: "Lite Bot" },
    socialLinkTelegram: { message: "https://t.me/fplite" },
    socialLinkDiscord: { message: "https://dsc.gg/funpaycom" },
    settingTheme: { message: "Тема" },
    settingsCategoryCustomization: { message: "Кастомізація" },
    settingThemeLight: { message: "Світла" },
    settingThemeDark: { message: "Темна" },
    settingThemeFirewatch: { message: "Firewatch" },
    settingThemeChoice: { message: "Вибір теми" },
    settingThemeCustomBackground: { message: "Власне фонове зображення" },
    settingThemeCustomBackgroundDesc: {
      message:
        "Власна картинка замість шпалер для тем Firewatch і Red Moon, а також для власних тем зі шпалерами.",
    },
    settingThemeCustomBackgroundOn: { message: "Власний фон задано." },
    settingThemeCustomBackgroundDim: { message: "Затемнення фону" },
    settingThemeCustomBackgroundTooLarge: {
      message: "Зображення завелике навіть після стиснення. Спробуй менше.",
    },
    settingThemeCustomBackgroundNotImage: {
      message: "Обери зображення (PNG / JPEG).",
    },
    settingThemeCustomBackgroundTooSmall: {
      message: "Це зображення менше за твій екран. Обери більше.",
    },
    settingThemeChooseImage: { message: "Обрати зображення…" },
    settingThemeRemoveImage: { message: "Прибрати" },
    featureGatedCustomBackgroundMessage: {
      message: "Власне фонове зображення доступне з планом Community.",
    },
    settingOffers: { message: "Пропозиції" },
    settingOfferAutoRaise: { message: "Автопідняття пропозицій" },
    lotManagementTitle: { message: "Управління лотами" },
    raiseAllButton: { message: "Підняти всі пропозиції" },
    raiseAllBusy: { message: "Піднімаю…" },
    raiseAllStarted: { message: "Підняття запущено…" },
    raiseAllRaised: { message: "піднято" },
    raiseAllWillRaise: { message: "буде піднято" },
    raiseAllWait: { message: "поки рано" },
    raiseAllDone: { message: "Готово" },
    raiseAllNone: { message: "Немає пропозицій для підняття" },
    raiseAllCancel: { message: "Скасувати" },
    raiseAllStopped: { message: "Зупинено" },
    raiseAllError: { message: "помилка" },
    raiseAllSection: { message: "Розділ" },
    raiseAllSummary: {
      message: "Перевірено - $CHECKED$, піднято - $RAISED$",
      placeholders: {
        checked: { content: "$1", example: "128" },
        raised: { content: "$2", example: "12" },
      },
    },
    raiseNotifications: { message: "Сповіщення про підняття" },
    raiseNotificationsDesc: {
      message:
        "Показувати сповіщення про кожне успішне підняття: і для кнопки «Підняти всі пропозиції», і для автопідняття. Вимкніть, якщо розділів дуже багато.",
    },
    lotManagementPanel: { message: "Панель керування лотами у профілі" },
    lotManagementPanelDesc: {
      message:
        "Показувати на профілях FunPay панель «Керування лотами»: пошук лотів на будь-якому профілі, клонування лотів на чужому, а на вашому - також «Підняти всі пропозиції», експорт та імпорт лотів.",
    },
    settingExactPrice: { message: "Точна ціна" },
    settingNotifications: { message: "Повідомлення" },
    systemNotifications: { message: "Сповіщення на пристрій" },
    systemNotificationsDesc: {
      message:
        "Системні сповіщення про нові повідомлення та замовлення — коли ви не дивитесь на FunPay. У застосунку Lite Client приходять просто на телефон, без Telegram і VPN. Знадобиться дозвіл браузера.",
    },
    systemNotificationsDenied: {
      message:
        "Браузер не дав дозвіл на сповіщення. Дозвольте їх для funpay.com у налаштуваннях браузера.",
    },
    systemNotifyMessageTitle: { message: "Нове повідомлення" },
    systemNotifyMessageBody: { message: "Непрочитаних діалогів" },
    systemNotifyOrderTitle: { message: "Нове замовлення" },
    systemNotifyOrderBody: { message: "Очікують підтвердження" },
    settingCustomNotification: { message: "Кастомний звук повідомлення" },
    customNotifyOptionDefault: { message: "За замовчуванням" },
    customNotifyOptionCashRegister: { message: "Каса" },
    customNotifyOptionCoin: { message: "Монета" },
    customNotifyOptionChime: { message: "Передзвін" },
    customNotifyOptionBell: { message: "Дзвіночок" },
    customNotifyOptionPop: { message: "Хлопок" },
    customNotifyPreviewTitle: { message: "Прослухати звук" },
    customNotifyOptionCustom: { message: "Свій звук" },
    settingCustomNotifyChooseFile: { message: "Вибрати MP3…" },
    settingCustomNotifyNotMp3: { message: "Виберіть MP3-файл." },
    settingCustomNotifyTooLarge: { message: "Файл завеликий (макс. 1 МБ)." },
    featureGatedCustomNotifySoundMessage: {
      message: "Завантаження свого звуку сповіщення доступне зі статусом Pro.",
    },
    settingOrderSound: { message: "Свій звук для нового замовлення" },
    settingOrderSoundDesc: {
      message:
        "Відтворює обраний звук при новому замовленні, навіть якщо вкладку FunPay не відкрито. Браузер має бути запущений.",
    },
    orderSoundOptionOff: { message: "Вимкнено" },
    featureGatedCustomOrderSoundMessage: {
      message: "Свій звук для нового замовлення доступний зі статусом Pro.",
    },
    settingsReset: { message: "Скинути налаштування" },
    settingsPrivacyMode: { message: "Режим приватності" },
    settingsPrivacyModeDesc: {
      message:
        "Ховає за розмиттям ваш нік, нік співрозмовника, баланс і номери замовлень - сторінку можна скриншотити, нічого не зафарбовуючи вручну. Наведіть курсор на розмите, щоб прочитати його.",
    },
    settingsHideLockedFeatures: { message: "Приховувати недоступні функції" },
    settingsHideLockedFeaturesDesc: {
      message:
        "Кнопки та блоки розширення, яких немає у вашому тарифі, просто не з'являться на сторінках FunPay.",
    },
    settingsHiddenPaywallsCount: {
      message: "Приховано функцій окремо: $COUNT$.",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    settingsHiddenPaywallsReset: { message: "Показати знову" },
    settingsHiddenPaywallsCleared: {
      message: "Готово, приховані функції знову показуються.",
    },
    featureGatedHideLockedFeatures: {
      message: "Приховування недоступних функцій доступне з планом Community.",
    },
    featureGatedPrivacyMode: {
      message: "Режим приватності доступний з планом Community.",
    },
    privacyModeOn: { message: "Режим приватності увімкнено" },
    privacyModeOff: { message: "Режим приватності вимкнено" },
    settingsHideBalance: { message: "Приховати відображення балансу" },
    settingOther: { message: "Інше" },
    settingOfferAutoRaiseDesc: {
      message:
        "Автоматично піднімає усі ваші лоти. Для роботи не закривайте браузер.",
    },
    settingExactPriceDesc: {
      message:
        "Додає у вікно редагування лотів поля для води ціни, що відображається як для продавця, так і для покупця.",
    },
    settingCustomNotificationDesc: {
      message: "Замінює звук гучного сповіщення чату на обраний.",
    },
    settingsHideBalanceDesc: {
      message:
        "Буває корисно, коли потрібно продемонструвати екран, але не хочеться показувати баланс облікового запису.",
    },
    settingViewSellersPromo: { message: "Відображати значки промо-лотів" },
    settingViewSellersPromoDesc: {
      message:
        "Відображає значки всіх промо-лотів у таблиці пропозицій, навіть прихованих.",
    },
    settingsChatLinkTitle: { message: "Секретний чат продавців 🕵" },
    settingsDiscordLinkTitle: { message: "Секретний сервер Discord 👾" },
    settingsChannelLinkTitle: { message: "Секретний канал FunPay 👀" },
    settingsHelpLinkTitle: {
      message: "Повідомити про помилку / Замовити розробку ⚒️",
    },
    settingReset: { message: "♻️ Скидання" },
    settingsReviewTitle: {
      message: "Підтримайте проєкт на GitHub",
    },
    settingsReviewButton: { message: "Підтримати на GitHub" },
    priceLabelSeller: { message: "(для продавця)" },
    priceLabelBuyer: { message: "(для покупця)" },
    settingsSaved: { message: "✔️ Збережено" },
    settingsNotSaved: { message: "❌ Не вдалося зберегти" },
    raiseResponseHours: { message: "годин" },
    raiseResponseMinutes: { message: "хвилин" },
    raiseResponseSeconds: { message: "секунд" },
    resetSettingsConfirm: {
      message: "Ви впевнені, що хочете скинути налаштування?",
    },
    statsHeader: { message: "Статистика" },
    statsUpdateButton: { message: "Оновити дані" },
    statsUpdateButtonUpdating: { message: "Оновлення..." },
    statsUpdatingTitle: { message: "Оновлення даних…" },
    statsUpdatingOrders: { message: "замовлень отримано" },
    statsUpdatingOf: { message: "з" },
    statsCancelButton: { message: "Скасувати" },
    statsCancelling: { message: "Скасування…" },
    statsToday: { message: "Сьогодні" },
    statsYesterday: { message: "Вчора" },
    stats24Hours: { message: "24 години" },
    stats7Days: { message: "Тиждень" },
    stats30Days: { message: "Місяць" },
    stats365Days: { message: "Рік" },
    statsTotalTime: { message: "Увесь час" },
    statsCustomPeriod: { message: "Своя дата" },
    statsCustomPeriodTitle: { message: "Виберіть період" },
    statsCustomPeriodApply: { message: "Застосувати" },
    statsCustomPeriodInvalid: {
      message: "Вкажіть обидві дати у форматі ДД.ММ.РРРР",
    },
    statsCustomPeriodOrder: { message: "Початкова дата пізніша за кінцеву" },
    statsTotalOrders: { message: "Всього замовлень" },
    statsTotalrevenue: { message: "Всього зароблено" },
    statsAverageSalePrice: { message: "Середній чек" },
    statsOrdersClosed: { message: "Закрито" },
    statsPendingConfirmation: { message: "В очікуванні" },
    statsReturns: { message: "Повернення" },
    statsUniqueCustomers: { message: "Унікальних покупців" },
    statsTopCustomer: { message: "Найактивніший покупець" },
    statsHighestSale: { message: "Найдорожчий продаж" },
    statsPopularProduct: { message: "Найпопулярніший товар" },
    statsPopularCategory: { message: "Найпопулярніша категорія" },
    salesMonthJanuary: { message: "січня" },
    salesMonthFebruary: { message: "лютого" },
    salesMonthMarch: { message: "березня" },
    salesMonthApril: { message: "квітня" },
    salesMonthMay: { message: "травня" },
    salesMonthJune: { message: "червня" },
    salesMonthJuly: { message: "липня" },
    salesMonthAugust: { message: "серпня" },
    salesMonthSeptember: { message: "вересня" },
    salesMonthOctober: { message: "жовтня" },
    salesMonthNovember: { message: "листопада" },
    salesMonthDecember: { message: "грудня" },
    sales: { message: "Продажі" },
    purchases: { message: "Покупки" },
    showSalesStats: { message: "Відображати статистику продажів" },
    showSalesStatsDesc: {
      message: "Додає детальну статистику на сторінку Продажі.",
    },
    statsTabNumbers: { message: "Статистика" },
    statsTabCards: { message: "Картки" },
    statsTabCharts: { message: "Графіки" },
    statsTabDiagrams: { message: "Діаграми" },
    statsTabDetailed: { message: "ТОП-списки" },
    statsTabFull: { message: "Всі дані" },
    statsInfoPeriod: { message: "Період:" },
    statsInfoOrders: { message: "Замовлень:" },
    statsInfoSold: { message: "Продажів:" },
    statsInfoBought: { message: "Покупок:" },
    chartProfitTitle: { message: "Виручка за днями" },
    chartSpentTitle: { message: "Витрати за днями" },
    chartOrdersTitle: { message: "Замовлення за днями, шт." },
    chartCategoriesTitle: { message: "Замовлення за категоріями" },
    chartStatusTitle: { message: "Замовлення за статусами" },
    chartCurrencyTitle: { message: "Виручка за валютами" },
    chartCurrencySpentTitle: { message: "Витрати за валютами" },
    statsCategoryOther: { message: "Інші" },
    statsDetailTopBuyers: { message: "Топ покупців" },
    statsDetailTopSellers: { message: "Топ продавців" },
    statsDetailTopProducts: { message: "Топ товарів" },
    statsDetailTopCategories: { message: "Топ категорій" },
    statsDetailOrdersSuffix: { message: "зам." },
    statsDetailTimesSuffix: { message: "раз" },
    statsDetailShowMore: { message: "Показати ще" },
    statsLockedCharts: { message: "Графіки доступні зі статусом" },
    statsLockedDiagrams: { message: "Діаграми доступні зі статусом" },
    statsLockedDetailed: {
      message: "Детальна статистика доступна зі статусом",
    },
    featureGatedOrderCharts: {
      message:
        "Графіки виручки та замовлень, діаграми за категоріями й топи покупців і товарів доступні з планом Pro.",
    },
    chartsEmpty: { message: "Немає даних за вибраний період" },
    showPurchasesStats: { message: "Відображати статистику покупок" },
    showPurchasesStatsDesc: {
      message: "Додає детальну статистику на сторінку Покупки.",
    },
    showSectionCommission: { message: "Відображати комісію розділу" },
    showSectionCommissionDesc: {
      message:
        "Показує відсоток комісії FunPay для розділу поряд із заголовком на сторінці ваших пропозицій.",
    },
    sectionCommissionLabel: { message: "Комісія:" },
    offerEditCommissionLabel: { message: "Комісія розділу" },
    exportSalesEnable: { message: "Експорт продажів" },
    exportSalesEnableDesc: {
      message: "Додає кнопку «Експорт» на сторінку Продажі.",
    },
    exportPurchasesEnable: { message: "Експорт покупок" },
    exportPurchasesEnableDesc: {
      message: "Додає кнопку «Експорт» на сторінку Покупки.",
    },
    featureGatedExportMessage: {
      message:
        "Експорт архіву замовлень - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    featureGatedCustomNotifyMessage: {
      message: "Цей звук сповіщень доступний лише передплатникам Community.",
    },
    statsExportButton: { message: "Експорт" },
    statsExportButtonTitle: { message: "Експортувати архів…" },
    statsResetConfirmTitle: { message: "Оновити архів?" },
    statsResetConfirmMessage: {
      message:
        "Локальний кеш буде очищено й замовлення завантажаться з FunPay заново. На великих архівах це може зайняти декілька хвилин.",
    },
    statsResetConfirmAction: { message: "Очистити та оновити" },
    statsRefreshLastN: {
      message: "Останні $COUNT$ замовлень",
      placeholders: { count: { content: "$1", example: "500" } },
    },
    statsRefreshCustom: { message: "Своє число" },
    statsRefreshCustomHint: {
      message: "Вкажіть, скільки останніх замовлень завантажити.",
    },
    statsRefreshAll: { message: "Усі замовлення (повне перезавантаження)" },
    statsRefreshPartialHint: {
      message:
        "Останні $COUNT$ замовлень буде завантажено заново. Старіші залишаться в архіві без змін.",
      placeholders: { count: { content: "$1", example: "500" } },
    },
    statsRefreshAction: { message: "Оновити" },
    confirmCancel: { message: "Скасувати" },
    confirmOk: { message: "OK" },
    exportSalesTitle: { message: "Експорт продажів" },
    exportPurchasesTitle: { message: "Експорт покупок" },
    exportFormatLabel: { message: "Формат" },
    exportFormatXlsx: { message: "Excel (.xlsx)" },
    exportFormatJson: { message: "JSON (.json)" },
    exportRangeLabel: { message: "Період" },
    exportRangeAllTime: { message: "За весь час" },
    exportRangeCustom: { message: "Власні дати" },
    exportRangeCustomHint: { message: "Або обери власні дати:" },
    commonClose: { message: "Закрити" },
    calendarPrevMonth: { message: "Попередній місяць" },
    calendarNextMonth: { message: "Наступний місяць" },
    calendarMonthSelect: { message: "Місяць" },
    calendarYearSelect: { message: "Рік" },
    exportDatePlaceholder: { message: "ДД.ММ.РРРР" },
    exportOpenCalendar: { message: "Відкрити календар" },
    exportCountLabel: { message: "Буде експортовано:" },
    exportRangeFrom: { message: "Від" },
    exportRangeTo: { message: "До" },
    exportRangeInvalid: { message: "Обери дати або постав «За весь час»." },
    exportSubmit: { message: "Експортувати" },
    exportCancel: { message: "Скасувати" },
    exportInProgress: { message: "Експорт…" },
    exportNoData: {
      message: "Немає що експортувати - архів за цей період порожній.",
    },
    exportSuccess: {
      message: "Експортовано: $count$ $word$.",
      placeholders: {
        count: { content: "$1", example: "42" },
        word: { content: "$2", example: "orders" },
      },
    },
    exportFailed: {
      message: "Не вдалося експортувати: $REASON$",
      placeholders: { reason: { content: "$1" } },
    },
    statsPurchasesHeader: { message: "Статистика" },
    statsPurchasesTotalOrders: { message: "Усього покупок" },
    statsPurchasesTotalSpent: { message: "Загальна сума" },
    statsPurchasesAveragePrice: { message: "Середня ціна" },
    statsUniqueSellers: { message: "Унікальних продавців" },
    statsTopSeller: { message: "Топ продавець" },
    statsHighestPurchase: { message: "Найдорожча покупка" },
    secretChats: { message: "👀 Секретні чати" },
    messages: { message: "Повідомлення" },
    settingsFastMessages: { message: "Швидкі повідомлення" },
    settingsFastMessagesDesc: {
      message:
        "Напишіть / (слеш) у чаті, щоб швидко надіслати заздалегідь підготовлені повідомлення.",
    },
    fastMessagesSettingsButton: { message: "Налаштування" },
    fastMessagesTitle: { message: "Швидкі повідомлення" },
    emojiPanel: { message: "Панель емодзі" },
    emojiPanelDesc: { message: "Додає панель емодзі в чати FunPay." },
    emojiButtonTitle: { message: "Емодзі" },
    emojiSearchPlaceholder: { message: "Пошук емодзі" },
    emojiNothingFound: { message: "Нічого не знайдено" },
    emojiLoadFailed: { message: "Не вдалося завантажити емодзі" },
    emojiGroupRecent: { message: "Нещодавні" },
    emojiGroupSmileys: { message: "Смайлики та емоції" },
    emojiGroupPeople: { message: "Люди та жести" },
    emojiGroupAnimals: { message: "Тварини та природа" },
    emojiGroupFood: { message: "Їжа та напої" },
    emojiGroupTravel: { message: "Подорожі та місця" },
    emojiGroupActivities: { message: "Заняття" },
    emojiGroupObjects: { message: "Предмети" },
    emojiGroupSymbols: { message: "Символи та прапори" },
    bindName: { message: "Назва" },
    bindNamePlaceholder: { message: "Коротка назва" },
    bindMessage: { message: "Повідомлення" },
    bindMessagePlaceholder: { message: "Текст повідомлення" },
    enabled: { message: "Увімкнено" },
    instantSend: { message: "Миттєва відправка" },
    delete: { message: "Видалити" },
    add: { message: "Додати" },
    position: { message: "Позиція" },
    positionOptionSlash: { message: "Випадаючий список при /" },
    positionOptionAbove: { message: "Над полем введення" },
    positionOptionSidebar: { message: "Праворуч внизу у колонці від чату" },
    positionLimitWarning: {
      message:
        "Не можна створювати більше 10 елементів з позиціями 'Над полем введення' та 'Праворуч внизу у колонці від чату'.",
    },
    availableForSubscribers: {
      message: "Ця функція доступна тільки при статусі Community",
    },
    checkSubscription: { message: "Перевірити статус" },
    funPayChat: { message: "Чат FunPay Community" },
    funPayChannel: { message: "Канал FunPay Community" },
    linkYourTelegram: {
      message: "Прив'яжіть ваш Telegram для перевірки статусу",
    },
    falseSubscriptionCheck: { message: "Статус не отримано" },
    tariffsTitle: { message: "Статус" },
    tariffsLoading: { message: "Завантаження…" },
    tariffsEmpty: { message: "Немає доступних планів." },
    tariffsLoadFailed: {
      message: "Не вдалося завантажити плани ($REASON$)",
      placeholders: { reason: { content: "$1" } },
    },
    communityActiveBadge: { message: "Активно" },
    tariffsCurrentPlanLabel: { message: "Поточний план" },
    tariffsObtainedLabel: { message: "Отримано" },
    tariffsLoginRequired: { message: "Спершу увійдіть до облікового запису" },
    tariffsBuyButton: { message: "Придбати" },
    tariffsRenewButton: { message: "Продовжити" },
    tariffsBuyOpening: { message: "Відкриваємо оплату…" },
    tariffsBuyFailed: {
      message: "Не вдалося перейти до оплати. Спробуйте ще раз.",
    },
    featureGatedCommunityTitle: { message: "Доступно з Community" },
    featureGatedProfileDescriptionMessage: {
      message: "Публічний опис профілю доступний з підпискою Community.",
    },
    featureGatedProTitle: { message: "Доступно з Pro" },
    featureGatedPremiumTitle: { message: "Доступно з Premium" },
    featureGatedFastMessagesMessage: {
      message:
        "«Швидкі повідомлення» - функція статусу Community. Отримайте його, щоб увімкнути.",
    },
    featureGatedPurchasesStatsMessage: {
      message:
        "«Статистика покупок» - функція статусу Community. Отримайте його, щоб увімкнути.",
    },
    featureGatedSectionCommissionMessage: {
      message:
        "«Відображення комісії розділу» - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    featureGatedLotTranslateMessage: {
      message:
        "Переклад лота англійською - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    profileDescriptionHeading: { message: "Опис" },
    profileDescriptionAdd: { message: "Додати опис" },
    profileDescriptionEditTitle: { message: "Редагувати опис" },
    profileDescriptionPlaceholder: {
      message:
        "Розкажіть про себе - цей опис побачать усі користувачі розширення.",
    },
    profileDescriptionSave: { message: "Зберегти" },
    profileDescriptionCancel: { message: "Скасувати" },
    profileDescriptionSaved: { message: "Опис збережено" },
    profileDescriptionError: { message: "Не вдалося зберегти опис" },
    profileDescriptionLinkFirst: {
      message: "Спочатку прив'яжіть акаунт FunPay на сторінці Lite Bot",
    },
    profileDescriptionContactBlocked: {
      message:
        "Передавання контактних даних (Telegram, пошта, телефон, соцмережі тощо) заборонено правилами FunPay - за це можна отримати блокування акаунта. Приберіть контакти з опису.",
    },
    profileDescriptionProhibited: {
      message:
        "Розміщення забороненого контенту (наркотичні засоби, порнографія) заборонено правилами FunPay - за це можна отримати блокування акаунта. Приберіть заборонений контент з опису.",
    },
    funpayLinkTitle: { message: "Акаунт FunPay" },
    funpayLinkBusyStart: { message: "Підготовка…" },
    funpayLinkBusyCreating: { message: "Створюємо перевірочний лот…" },
    funpayLinkBusyConfirming: { message: "Підтверджуємо прив'язку…" },
    funpayLinkBusyUnlink: { message: "Відв'язуємо…" },
    funpayLinkSuccess: { message: "Акаунт FunPay прив'язано" },
    funpayUnlinkSuccess: { message: "Акаунт FunPay відв'язано" },
    funpayLinkFailed: { message: "Не вдалося прив'язати акаунт FunPay" },
    funpayLinkErrCode: {
      message: "Перевірочний лот не знайдено, спробуйте ще раз",
    },
    funpayLinkErrMismatch: {
      message: "Лот створено під іншим акаунтом FunPay",
    },
    funpayLinkErrExpired: {
      message: "Запит на прив'язку застарів, почніть знову",
    },
    funpayLinkErrFunpay: {
      message: "Не вдалося прочитати лот з FunPay, спробуйте ще раз",
    },
    funpayLinkErrSession: { message: "Сесія застаріла, увійдіть знову" },
    funpayLinkErrCantSell: {
      message:
        "На цьому акаунті FunPay ще не відкриті продажі, тому прив'язати його не вдалося. Щоб відкрити продажі, пройдіть на FunPay невеликий тест і прив'яжіть номер телефону, а потім спробуйте ще раз.",
    },
    funpayLinkErrLotFailed: {
      message:
        "Не вдалося прив'язати акаунт FunPay: не вийшло створити перевірочний лот. Найчастіше це означає, що на акаунті ще не відкриті продажі - він жодного разу не створював лот. Щоб відкрити продажі, пройдіть на FunPay невеликий тест і прив'яжіть номер телефону, а потім спробуйте ще раз.",
    },
    enableLotTranslate: { message: "Переклад лота англійською" },
    enableLotTranslateDesc: {
      message:
        "Додає на сторінку редагування лота кнопку «Перекласти англійською», яка заповнює англійську назву та опис на основі російського оригіналу.",
    },
    autoTranslateModeButton: { message: "Перекладати після натискання кнопки" },
    autoTranslateModeAuto: {
      message: "Перекладати автоматично під час збереження",
    },
    lotTranslateAutoFailed: {
      message: "Не вдалося перекласти - лот збережено без англійського тексту",
    },
    lotTranslateAutoNoPermission: {
      message:
        "Немає доступу до перекладача. Надайте його в налаштуваннях додатка або увімкніть автопереклад знову",
    },
    updateBannerTitle: { message: "Вийшла нова версія розширення" },
    updateBannerBody: {
      message: "У вас встановлено $CURRENT$, доступна $LATEST$.",
      placeholders: {
        current: { content: "$1", example: "2.1.2" },
        latest: { content: "$2", example: "2.2.0" },
      },
    },
    updateStep1: {
      message:
        "Переходимо на сторінку розширень браузера: chrome://extensions/",
    },
    updateStep2: { message: "Вмикаємо Режим розробника." },
    updateStep3: { message: 'Натискаємо кнопку "Оновити".' },
    updateStepFirefox1: {
      message:
        "Переходимо на сторінку додатків: about:addons (меню Firefox → «Додатки й теми»)",
    },
    updateStepFirefox2: {
      message: "Натискаємо на шестірню над списком розширень.",
    },
    updateStepFirefox3: {
      message: "Обираємо «Перевірити наявність оновлень».",
    },
    showRealLotPrices: { message: "Реальні ціни лотів" },
    showRealLotPricesDesc: {
      message:
        "Під ціною кожного лота в таблиці розділу показує реальну ціну: суму без комісії FunPay та платіжних систем (скільки фактично отримає продавець).",
    },
    featureGatedRealLotPricesMessage: {
      message:
        "«Реальні ціни лотів» - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    lotTranslateButton: { message: "Перекласти з російської" },
    lotTranslateSectionLabel: { message: "Автоматичний переклад" },
    lotTranslateStatusLoading: { message: "Перекладаю…" },
    lotTranslateStatusDone: { message: "Лот успішно перекладено" },
    lotTranslateStatusError: { message: "Не вдалося перекласти" },
    lotTranslatePermissionDenied: { message: "Немає дозволу на переклад" },
    lotTranslateValidationMissingTitle: {
      message: "Заповніть назву лота російською",
    },
    lotTranslateValidationMissingDesc: {
      message: "Заповніть опис лота російською",
    },
    lotTranslateValidationMissingBoth: {
      message: "Заповніть назву та опис лота російською",
    },
    lotTranslateConsentTitle: { message: "Дозвіл на переклад" },
    lotTranslateConsentBody: {
      message:
        "Щоб перекладати назви та описи лотів англійською, розширенню потрібен разовий доступ до translate.googleapis.com.",
    },
    lotTranslateConsentGrant: { message: "Дозволити" },
    lotTranslateConsentCancel: { message: "Скасувати" },
    featureGatedOpenTariffs: { message: "Перейти до статусів" },
    featureGatedHideThis: { message: "Не відображати цю функцію" },
    featureGatedHiddenToast: {
      message:
        "Більше не покажемо. Повернути - у налаштуваннях розширення, розділ «Кастомізація».",
    },
    pendingUnlockReady: {
      message:
        "Підписка оновилася - функція доступна. Оновіть сторінку, якщо її ще не видно.",
    },
    trialOfferTitle: { message: "3 дні Premium - безкоштовно" },
    trialOfferBody: {
      message:
        "Це подарунок від нас: усі функції розширення відкриті на 3 дні - використовуйте все, що забажаєте. Картка не потрібна.",
    },
    trialOfferStart: { message: "Отримати Premium на 3 дні" },
    trialOfferLater: { message: "Не зараз" },
    trialOfferNote: {
      message: "Подарунок закріпиться за вашим акаунтом FunPay.",
    },
    trialEndingToast: {
      message:
        "Пробний Premium закінчиться через $LEFT$. Оформіть Premium, щоб нічого не вимкнулося - налаштування збережуться.",
      placeholders: { left: { content: "$1" } },
    },
    trialEndsHours: {
      message: "$N$ год",
      placeholders: { n: { content: "$1" } },
    },
    trialEndsMinutes: {
      message: "$N$ хв",
      placeholders: { n: { content: "$1" } },
    },
    trialEndedTitle: { message: "Пробний Premium закінчився" },
    trialEndedBody: {
      message:
        "Функції Premium вимкнено. Ваші налаштування збережено: оформіть Premium, і все запрацює знову, без повторного налаштування.",
    },
    trialEndedOffLead: { message: "Вимкнулося:" },
    trialEndedOffMore: {
      message: "і ще $N$",
      placeholders: { n: { content: "$1" } },
    },
    trialEndedBuy: { message: "Оформити Premium" },
    trialEndedOtherPlans: { message: "Інші тарифи" },
    trialEndedLater: { message: "Не зараз" },
    trialOfferWorking: { message: "Вмикаю…" },
    trialStartedToast: {
      message: "Premium увімкнено на 3 дні. Усі функції вже доступні.",
    },
    trialAlreadyUsed: {
      message: "Пробний період на цьому акаунті FunPay вже був.",
    },
    trialHasPaidPlan: {
      message: "Пробний період - для тих, у кого ще не було платного тарифу.",
    },
    trialNeedsLogin: {
      message: "Увійдіть в акаунт, щоб увімкнути пробний період.",
    },
    trialClosed: {
      message: "Пробний період зараз недоступний. Спробуйте пізніше.",
    },
    trialFailed: {
      message: "Не вдалося увімкнути пробний період. Спробуйте пізніше.",
    },
    trialNotEstablished: {
      message:
        "Пробний період доступний продавцям, які мають на FunPay хоча б один відгук.",
    },
    trialFunpayUnreachable: {
      message: "Не вдалося перевірити акаунт на FunPay. Спробуйте ще раз.",
    },
    trialLinkFailed: {
      message: "Не вдалося привʼязати акаунт FunPay. Спробуйте ще раз.",
    },
    trialNeedsFunpay: {
      message:
        "Увійдіть в акаунт FunPay у цьому браузері, щоб отримати пробний період.",
    },
    settingsCategoryAccount: { message: "Обліковий запис" },
    accountSubscriptionTitle: { message: "Статус" },
    accountSubscriptionBasic: { message: "Базовий" },
    accountSubscriptionExpires: { message: "Діє до" },
    accountSubscriptionTrial: { message: "пробний період" },
    accountSubscriptionLifetime: { message: "Безстроково" },
    accountSignInPrompt: {
      message: "Увійдіть, щоб керувати обліковим записом і статусом.",
    },
    settingsCategoryInfo: { message: "Інфо" },
    settingsCategoryChangelog: { message: "Оновлення" },
    changelogHeading: { message: "Що змінилося" },
    changelogDesc: {
      message:
        "Перелік змін за версіями розширення - нові можливості, покращення та виправлення.",
    },
    changelogLoading: { message: "Завантажуємо перелік змін…" },
    changelogEmpty: {
      message:
        "Перелік змін зараз недоступний. Усі оновлення ми анонсуємо в Telegram-каналі.",
    },
    changelogInstalled: { message: "встановлена у вас" },
    changelogTypeAdded: { message: "Нове" },
    changelogTypeImproved: { message: "Покращено" },
    changelogTypeFixed: { message: "Виправлено" },
    changelogTypeRemoved: { message: "Прибрано" },
    settingsCategoryReviews: { message: "Відгуки" },
    reviewsRatingLimitsButton: { message: "Переглянути обмеження рейтингу" },
    reviewsRatingLimitsDesc: {
      message: "Інформація про обмеження рейтингу для облікового запису",
    },
    settingsCategoryApi: { message: "API" },
    infoVersionLabel: { message: "🔖 Версія розширення" },
    deleteAccountLabel: { message: "🗑️ Видалення акаунта" },
    deleteAccountBlocked: {
      message:
        "Поки діє підписка, видалити акаунт не можна. Дочекайтеся завершення її строку.",
    },
    deleteAccountButton: { message: "Видалити акаунт FunPay Lite Bot" },
    deleteAccountConfirmTitle: { message: "Видалити акаунт FunPay Lite Bot?" },
    deleteAccountConfirmText: {
      message:
        "Акаунт FunPay Lite Bot буде видалено разом з історією замовлень. Прив'язані акаунти (FunPay, Telegram, Google, VK) буде відв'язано. Розширення продовжить працювати, але без входу. Цю дію не можна скасувати.",
    },
    deleteAccountConfirmCta: { message: "Так, видалити" },
    deleteAccountDone: { message: "Акаунт видалено" },
    deleteAccountFailed: {
      message: "Не вдалося видалити акаунт. Спробуйте пізніше.",
    },
    accountIdCopyHint: { message: "Натисніть, щоб скопіювати ID акаунта" },
    accountIdCopied: { message: "ID акаунта скопійовано" },
    accountIdCopyFailed: { message: "Не вдалося скопіювати ID акаунта" },
    accountIdLabel: { message: "🆔 ID акаунта" },
    goldenKeyTitle: { message: "Авторизація - Golden Key" },
    goldenKeyDesc: {
      message:
        "Цей ключ зберігається в кукі FunPay і часто використовується зовнішніми застосунками для автоматизації. Він дає повний доступ до акаунту - нікому його не передавайте.",
    },
    goldenKeyMissing: {
      message: "Ключ не знайдено. Увійдіть на funpay.com, щоб він з'явився.",
    },
    goldenKeyShow: { message: "Показати" },
    goldenKeyHide: { message: "Сховати" },
    goldenKeyCopy: { message: "Скопіювати" },
    goldenKeyCopied: { message: "Ключ скопійовано" },
    goldenKeyRevoke: { message: "Відкликати" },
    goldenKeyRevokeConfirmTitle: { message: "Відкликати Golden Key?" },
    goldenKeyRevokeConfirmText: {
      message:
        "Це видалить сесію FunPay у всіх браузерах. Вас буде розлоговано, потрібно буде увійти на funpay.com знову.",
    },
    goldenKeyRevokeConfirmCta: { message: "Так, відкликати" },
    goldenKeyRevokeCancel: { message: "Скасувати" },
    goldenKeyRevoked: { message: "Golden Key відкликано" },
    goldenKeyRevokeFailed: {
      message:
        "Не вдалося відкликати ключ. Спробуйте вийти з акаунту вручну на funpay.com.",
    },
    tariffsBasicIncluded: { message: "Безкоштовно" },
    communityLinkTelegramFirst: {
      message:
        "Спершу привʼяжіть Telegram у меню користувача, потім поверніться.",
    },
    authLogIn: { message: "Увійти" },
    authRegister: { message: "Реєстрація" },
    authRegisterWith: {
      message: "Реєстрація через $PROVIDER$",
      placeholders: { provider: { content: "$1" } },
    },
    authLoginSubtitle: {
      message: "Увійдіть через сервіс, через який реєструвалися.",
    },
    authRegisterSubtitle: { message: "Створіть новий акаунт FunPayLiteBot." },
    authNoAccountTitle: { message: "Акаунт не знайдено" },
    authNoAccountBody: {
      message:
        "Ми не знайшли акаунт FunPayLiteBot, прив'язаний до цього провайдера. Зареєструвати новий?",
    },
    authNoAccountConfirm: { message: "Зареєструвати" },
    authAlreadyRegisteredTitle: { message: "Акаунт уже існує" },
    authAlreadyRegisteredBody: {
      message:
        "На цьому провайдері вже зареєстрований акаунт. Увійти до нього?",
    },
    authAlreadyRegisteredConfirm: { message: "Увійти" },
    authCancel: { message: "Скасувати" },
    authNoAccountSwitchHint: {
      message:
        "Акаунт не знайдено. Перейдіть на вкладку «Реєстрація», щоб створити новий.",
    },
    authAlreadyRegisteredSwitchHint: {
      message: "Акаунт уже існує. Перейдіть на вкладку «Вхід», щоб увійти.",
    },
    authTelegramFastLoginUnsupported: {
      message:
        "Швидкий вхід через Telegram не повертає у розширення. Увійдіть через QR-код або номер телефону.",
    },
    authLogOut: { message: "Вийти" },
    authLoginWith: {
      message: "Увійти через $PROVIDER$",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authLinkedAccounts: { message: "Прив'язані акаунти" },
    authLinked: { message: "Прив'язано" },
    authNotLinked: { message: "Не прив'язано" },
    authLink: { message: "Прив'язати" },
    authUnlink: { message: "Відв'язати" },
    authLinkConflict: {
      message: "Цей акаунт $PROVIDER$ уже прив'язаний до іншого користувача.",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authCannotUnlinkLast: {
      message:
        "Не можна відв'язати єдиного провайдера - спочатку прив'яжіть інший.",
    },
    authSessionExpired: { message: "Сесія закінчилась. Увійдіть знову." },
    authLoginFailed: {
      message: "Помилка входу: $REASON$",
      placeholders: {
        reason: { content: "$1", example: "OAUTH_GOOGLE_TOKEN_REJECTED" },
      },
    },
    authLoggedIn: {
      message: "Ви увійшли: $NAME$",
      placeholders: { name: { content: "$1", example: "Андрій" } },
    },
    authLoggedOut: { message: "Ви вийшли" },
    authProviderLinked: {
      message: "$PROVIDER$ привʼязано",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    authProviderUnlinked: {
      message: "$PROVIDER$ відвʼязано",
      placeholders: { provider: { content: "$1", example: "Google" } },
    },
    telegramLinkTitle: { message: "Привʼязка Telegram" },
    telegramLinkOAuthOption: { message: "Увійти через Telegram" },
    telegramLinkOAuthDesc: {
      message:
        "Авторизація в браузері через Telegram. Найшвидший спосіб, якщо Telegram у вас відкривається.",
    },
    telegramLinkCodeOption: { message: "Привʼязати за кодом" },
    telegramLinkCodeDesc: {
      message:
        "Скористайтеся, якщо вхід через Telegram заблоковано у браузері. Ми видамо код для надсилання боту.",
    },
    telegramLinkCodeInstructions: {
      message: "Відкрийте @FunPayLiteBot і надішліть йому цей код.",
    },
    telegramLinkCodeWaiting: { message: "Очікуємо підтвердження від бота…" },
    telegramLinkCodeSuccess: { message: "Telegram успішно привʼязано!" },
    telegramLoginCodeButton: { message: "Увійти за кодом (Telegram)" },
    telegramLoginCodeTitle: { message: "Вхід через Telegram" },
    telegramLoginOAuthOption: { message: "Стандартний вхід" },
    telegramLoginOAuthDesc: {
      message: "Через сторінку Telegram (oauth.telegram.org).",
    },
    telegramLoginCodeOption: { message: "Вхід за кодом" },
    telegramLoginCodeDesc: {
      message: "Якщо сторінка Telegram не відкривається. Надішліть код боту.",
    },
    telegramLoginCodeInstructions: {
      message:
        "Відкрийте @FunPayLiteBot, надішліть цей код і підтвердьте вхід.",
    },
    telegramLoginCodeWaiting: {
      message: "Очікування підтвердження в Telegram…",
    },
    telegramLoginCodeSuccess: { message: "Готово! Ви увійшли." },
    telegramLoginCodeError: {
      message: "Не вдалося виконати вхід. Спробуйте ще раз.",
    },
    authRetry: { message: "Повторити" },
    telegramLinkOpenBot: { message: "Відкрити бота" },
    telegramLinkCopy: { message: "Копіювати" },
    telegramLinkCodeError: {
      message: "Не вдалося отримати код. Спробуйте ще раз.",
    },
    telegramLinkAlreadyLinked: {
      message: "Telegram уже прив'язано до вашого акаунту.",
    },
    telegramLinkCopied: { message: "Код скопійовано" },
    quickCopyOrderId: { message: "Копіювання номера замовлення" },
    quickCopyOrderIdDesc: {
      message:
        "На сторінці замовлення додає іконку копіювання - натисніть, щоб скопіювати номер замовлення.",
    },
    orderIdCopied: { message: "Номер замовлення скопійовано" },
    orderIdCopyHint: { message: "Натисніть, щоб скопіювати номер замовлення" },
    orderIdCopyFailed: { message: "Не вдалося скопіювати номер замовлення" },
    featureGatedQuickCopyMessage: {
      message:
        "Копіювання номера замовлення - функція статусу Community. Отримайте Community, щоб увімкнути.",
    },
    showUnconfirmedSales: { message: "Копіювати ID непідтверджених продажів" },
    showUnconfirmedSalesDesc: {
      message:
        "Додає на сторінку Продажі кнопку «Скопіювати непідтверджені»: номери замовлень, які оплачено, але ще не підтверджено.",
    },
    unconfirmedOrdersButton: { message: "Скопіювати непідтверджені" },
    unconfirmedSalesTitle: { message: "Непідтверджені продажі" },
    unconfirmedOrdersThresholdAll: { message: "Усі сплачені" },
    unconfirmedOrdersThreshold12: { message: "Сплачені >12 годин" },
    unconfirmedOrdersThreshold24: { message: "Сплачені >24 годин" },
    unconfirmedOrdersThreshold48: { message: "Сплачені >48 годин" },
    unconfirmedOrdersThreshold72: { message: "Сплачені >72 годин" },
    unconfirmedOrdersCount: {
      message: "Знайдено: $COUNT$",
      placeholders: { count: { content: "$1", example: "42" } },
    },
    unconfirmedOrdersLoading: { message: "Завантаження…" },
    unconfirmedOrdersCopy: { message: "Копіювати" },
    unconfirmedOrdersCopied: { message: "Скопійовано ✓" },
    unconfirmedOrdersClose: { message: "Закрити" },
    unconfirmedOrdersStatusError: { message: "Не вдалося отримати список" },
    featureGatedUnconfirmedOrdersMessage: {
      message:
        "Копіювання непідтверджених замовлень - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    supportConfirmTickets: {
      message: "Заявки в підтримку на підтвердження замовлень",
    },
    supportConfirmTicketsDesc: {
      message:
        "Якщо покупець не підтверджує замовлення, надішліть заявку в підтримку FunPay кнопкою на сторінці замовлення - одразу або списком зі сторінки «Мої продажі».",
    },
    featureGatedSupportConfirmTickets: {
      message:
        "Заявки в підтримку на підтвердження замовлень - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    supportConfirmSend: { message: "Надіслати на підтвердження" },
    supportConfirmSentAt: {
      message: "Заявку надіслано $TIME$",
      placeholders: { time: { content: "$1", example: "10.09, 14:05" } },
    },
    supportConfirmAddToList: { message: "Додати до списку на підтвердження" },
    supportConfirmRemoveFromList: {
      message: "Прибрати зі списку на підтвердження",
    },
    supportConfirmAdded: {
      message:
        "Замовлення додано до списку на підтвердження. Замовлень у списку: $COUNT$. Надіслати список можна на сторінці «Мої продажі».",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    supportConfirmRemoved: {
      message: "Замовлення прибрано зі списку на підтвердження.",
    },
    supportConfirmListButton: {
      message: "Надіслати список на підтвердження ($COUNT$)",
      placeholders: { count: { content: "$1", example: "3" } },
    },
    supportTicketSendFromCopy: { message: "Надіслати в підтримку" },
    supportTicketTitle: { message: "Заявка в підтримку FunPay" },
    supportTicketLead: {
      message:
        "Тема заявки: покупець забув підтвердити замовлення. Підтримка перевірить листування в чаті замовлення і підтвердить його, якщо товар передано.",
    },
    supportTicketChecking: {
      message: "Перевіряю, які замовлення ще чекають на підтвердження…",
    },
    supportTicketOrders: { message: "Замовлення в заявці" },
    supportTicketText: { message: "Текст заявки" },
    supportTicketTextOne: {
      message:
        "Добрий день! Покупець не підтвердив замовлення $ORDERS$. Товар передано, це видно в чаті замовлення. Прошу підтвердити замовлення. Дякую!",
      placeholders: { orders: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketTextMany: {
      message:
        "Добрий день! Покупці не підтвердили замовлення $ORDERS$. Товар передано, це видно в чатах замовлень. Прошу підтвердити ці замовлення. Дякую!",
      placeholders: {
        orders: { content: "$1", example: "#BLPWJF6T, #GZSHW9UT" },
      },
    },
    supportTicketOverflow: {
      message:
        "В одну заявку входить до $MAX$ замовлень. Ще $COUNT$ можна надіслати наступною заявкою.",
      placeholders: {
        max: { content: "$1", example: "25" },
        count: { content: "$2", example: "4" },
      },
    },
    supportTicketSkippedNotPaid: {
      message:
        "Уже не чекають на підтвердження й до заявки не потраплять: $LIST$",
      placeholders: { list: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketSkippedRecent: {
      message:
        "Уже надсилалися в підтримку за останню добу й до заявки не потраплять: $LIST$",
      placeholders: {
        list: { content: "$1", example: "#BLPWJF6T (10.09, 14:05)" },
      },
    },
    supportTicketNothing: { message: "Немає чого надсилати." },
    supportTicketRemoveFromList: { message: "Прибрати зі списку" },
    supportTicketRemoveFromTicket: { message: "Прибрати із заявки" },
    supportTicketSend: { message: "Надіслати заявку" },
    supportTicketSending: { message: "Надсилаю заявку…" },
    supportTicketSent: {
      message: "Заявку надіслано. Відповідь підтримки прийде в цю заявку.",
    },
    supportTicketSentToast: { message: "Заявку в підтримку FunPay надіслано." },
    supportTicketOpen: { message: "Відкрити заявку" },
    supportTicketMyTickets: { message: "Мої заявки" },
    supportTicketNewManual: { message: "Створити заявку вручну" },
    supportTicketRetry: { message: "Повторити" },
    supportTicketErrLogin: {
      message:
        "Не вдалося відкрити підтримку FunPay. Перевірте, що ви увійшли в акаунт FunPay, і спробуйте ще раз.",
    },
    supportTicketErrCheck: {
      message:
        "Не вдалося перевірити замовлення на FunPay. Перевірте з'єднання і спробуйте ще раз.",
    },
    supportTicketErrNetwork: {
      message:
        "Не вдалося зв'язатися з підтримкою FunPay. Заявку не надіслано, спробуйте ще раз.",
    },
    supportTicketErrForm: {
      message:
        "Форма заявки в підтримці FunPay змінилася, тому розширення нічого не надіслало. Створіть заявку вручну.",
    },
    supportTicketErrRejected: {
      message: "Підтримка FunPay не прийняла заявку: $REASON$",
      placeholders: { reason: { content: "$1", example: "HTTP 403" } },
    },
    supportTicketErrUncertain: {
      message:
        "Не вдалося дізнатися, чи створено заявку. Перш ніж надсилати знову, відкрийте свої заявки в підтримці й перевірте.",
    },
    supportTicketErrBusy: {
      message: "Заявка вже надсилається, дочекайтеся результату.",
    },
    supportTicketErrGeneric: {
      message: "Не вдалося надіслати заявку. Спробуйте ще раз.",
    },
    supportTicketErrCheckLogin: {
      message:
        "Схоже, ви вийшли з акаунта FunPay. Увійдіть і спробуйте ще раз.",
    },
    supportTicketErrAccount: {
      message:
        "Підтримка FunPay відкрита під акаунтом $SUPPORT$, а на FunPay ви зараз $FUNPAY$. Заявку не надіслано. Відкрийте підтримку, вийдіть із неї і спробуйте знову.",
      placeholders: {
        support: { content: "$1", example: "OldNick" },
        funpay: { content: "$2", example: "MaxQV" },
      },
    },
    supportTicketOpenSupport: { message: "Відкрити підтримку" },
    supportTicketSkippedUnseen: {
      message:
        "Не знайшлися серед непідтверджених продажів і до заявки не потраплять: $LIST$",
      placeholders: { list: { content: "$1", example: "#BLPWJF6T" } },
    },
    supportTicketUncertainMark: { message: "результат невідомий" },
    supportConfirmMaybeSentAt: {
      message: "Заявку, можливо, надіслано $TIME$",
      placeholders: { time: { content: "$1", example: "10.09, 14:05" } },
    },
    welcomeMessageTitle: { message: "Привітальне повідомлення" },
    welcomeMessageDesc: {
      message:
        "Автоматично надсилає задане повідомлення покупцеві, який написав вам уперше (або знову - після завершення таймауту). Працює у фоні, поки запущено браузер.",
    },
    welcomeMessagePlaceholder: {
      message: "Вітаю! Дякую за звернення, відповім найближчим часом.",
    },
    welcomeMessageVars: {
      message:
        "Змінні: {buyername} - ім'я покупця, {welcome} - привітання за часом доби, {date} - дата й час.",
    },
    welcomeMessageCooldownLabel: { message: "Надсилати повторно через" },
    welcomeMessageUnitHours: { message: "годин" },
    welcomeMessageUnitDays: { message: "днів" },
    welcomeMessageCooldownDesc: {
      message:
        "Якщо покупець напише знову після цього часу, повідомлення надішлеться повторно. 0 - надсилати лише один раз для кожного чату.",
    },
    welcomeMessageImagesLabel: { message: "Зображення (необов'язково)" },
    welcomeMessageAddImage: { message: "Додати зображення" },
    welcomeMessageRemoveImage: { message: "Видалити" },
    welcomeMessageImageNotImage: { message: "Виберіть зображення." },
    welcomeMessageImageFailed: { message: "Не вдалося додати зображення." },
    featureGatedWelcomeMessage: {
      message:
        "«Привітальне повідомлення» - функція статусу Pro. Отримайте його, щоб увімкнути.",
    },
    welcomeMessageSettings: { message: "Налаштування" },
    reviewReplyTitle: { message: "Автовідповідь на відгуки" },
    reviewReplyDesc: {
      message:
        "Автоматично надсилає заданий відповідь на відгук покупця до вашого замовлення - свій текст для кожної оцінки (1-5 зірок). Працює у фоні, поки запущено браузер.",
    },
    reviewReplySettings: { message: "Налаштування" },
    reviewReplyModalDesc: {
      message:
        "Задайте відповідь для кожної оцінки. Відповідь надсилається, лише коли для отриманої оцінки задано текст. Порожнє поле - не відповідати на цю оцінку.",
    },
    reviewReplyPlaceholder: { message: "Дякуємо за ваш відгук та оцінку!" },
    reviewReplyVars: {
      message:
        "Змінні: {buyername} - ім'я покупця, {lotname} - назва лота, {orderid} - номер замовлення, {stars} - оцінка, {date} - дата та час.",
    },
    featureGatedReviewReply: {
      message:
        "«Автовідповідь на відгуки» - функція статусу Premium. Отримайте його, щоб увімкнути.",
    },
    aiReviewReplyTitle: { message: "ШІ авто-відповідь на відгук покупця" },
    aiReviewReplyDesc: {
      message:
        "Відповідає на відгук текстом, який пише нейромережа за словами самого покупця, а не заздалегідь заданим шаблоном. Якщо нейромережа недоступна, надішлеться ваш шаблон для цієї оцінки. Працює у фоні, поки запущено браузер.",
    },
    aiReviewReplySettings: { message: "Налаштування" },
    aiReviewReplyModalDesc: {
      message:
        "Відповідь публікується від вашого імені, тому нейромережа не обіцяє повернень і знижок, не визнає провину і не залишає контактів поза FunPay. Якщо відповідь не пройде перевірку, надішлеться ваш шаблон із «Автовідповіді на відгуки».",
    },
    aiReviewReplyRatingsLabel: { message: "На які оцінки відповідати" },
    aiReviewReplyNoteLabel: { message: "Побажання до тону відповіді" },
    aiReviewReplyNotePlaceholder: {
      message: "Наприклад: пиши коротко і на «ти», без смайликів",
    },
    aiReviewReplyHint: {
      message:
        "До 300 символів. Витрата спільна з генерацією тексту лота, 1000 звернень на місяць.",
    },
    aiReviewReplySave: { message: "Зберегти" },
    aiReviewReplySaved: { message: "Збережено" },
    aiReviewReplyUnsaved: { message: "Зміни не збережено" },
    featureGatedAiReviewReply: {
      message:
        "«ШІ авто-відповідь на відгук покупця» - функція статусу Premium. Отримайте його, щоб увімкнути.",
    },
    autoReplyTitle: { message: "Автовідповідь за ключовими словами" },
    autoReplyDesc: {
      message:
        "Автоматично надсилає заданий відповідь, коли повідомлення покупця точно збігається з командою або містить вказане слово чи фразу. Працює у фоні, поки запущено браузер.",
    },
    autoReplySettings: { message: "Налаштування" },
    autoReplyModalDesc: {
      message:
        "Додайте правила. Для кожного нового повідомлення покупця спрацьовує перше відповідне правило. «Точний збіг» - повідомлення повністю дорівнює ключовому слову; «Містить» - ключове слово трапляється в повідомленні.",
    },
    autoReplyColKeyword: { message: "Ключове слово / фраза" },
    autoReplyColMode: { message: "Режим" },
    autoReplyColResponse: { message: "Відповідь" },
    autoReplyColEnabled: { message: "Увімк" },
    autoReplyModeExact: { message: "Точний збіг" },
    autoReplyModeContains: { message: "Містить" },
    autoReplyKeywordPlaceholder: { message: "напр.: ціна" },
    autoReplyResponsePlaceholder: { message: "Текст відповіді" },
    autoReplyAddRule: { message: "Додати правило" },
    autoReplyVars: {
      message: "Змінні: {buyername} - ім'я покупця, {date} - дата та час.",
    },
    featureGatedAutoReply: {
      message:
        "«Автовідповідь за ключовими словами» - функція статусу Premium. Отримайте його, щоб увімкнути.",
    },
    orderConfirmReplyTitle: {
      message: "Автовідповідь після підтвердження замовлення",
    },
    orderConfirmReplyDesc: {
      message:
        "Автоматично надсилає задане повідомлення одразу після того, як покупець підтвердив виконання замовлення. Працює у фоні, поки запущено браузер.",
    },
    orderConfirmReplySettings: { message: "Налаштування" },
    orderConfirmReplyModalDesc: {
      message:
        "Повідомлення надсилається один раз на кожне підтвердження замовлення. За замовчуванням стоїть «Дякую за покупку!», текст можна змінити на будь-який.",
    },
    orderConfirmReplyPlaceholder: { message: "Дякую за покупку!" },
    orderConfirmReplyVars: {
      message:
        "Змінні: {buyername} - ім'я покупця, {orderid} - номер замовлення, {date} - дата та час.",
    },
    orderConfirmReplyDefault: { message: "Дякую за покупку!" },
    orderConfirmReplySave: { message: "Зберегти" },
    orderConfirmReplySaved: { message: "Збережено" },
    orderConfirmReplyUnsaved: { message: "Зміни не збережено" },
    featureGatedOrderConfirmReply: {
      message:
        "«Автовідповідь після підтвердження замовлення» - функція статусу Premium. Отримайте його, щоб увімкнути.",
    },
    lotCostPrice: { message: "Собівартість лотів" },
    lotCostPriceDesc: {
      message:
        "На сторінці редагування лота додає поле собівартості з вибором валюти та показує чистий прибуток. Собівартість також потрапить в експорт замовлень. Прив'язується до наявних лотів.",
    },
    costPriceLabel: { message: "Собівартість (необов'язково)" },
    costPriceNetProfitLabel: { message: "Чистий прибуток" },
    costPriceNoRate: { message: "немає курсу" },
    costPriceWithdrawalCommission: { message: "Комісія на виведення" },
    featureGatedLotCostPrice: {
      message:
        "«Собівартість лотів» - функція статусу Premium. Отримайте його, щоб увімкнути.",
    },
    finances: { message: "Фінанси" },
    showFinancesStats: { message: "Статистика фінансів" },
    showFinancesStatsDesc: {
      message:
        "На сторінці балансу (/account/balance) показує статистику за операціями: надходження, витрати, чистий потік, розподіл за типами та графік.",
    },
    withdrawalAvailability: { message: "Скільки доступно для виведення" },
    withdrawalAvailabilityDesc: {
      message:
        "На сторінці «Фінанси» показує, скільки грошей уже можна вивести, а скільки звільниться пізніше через затримку на виведення 48 годин, і коли. Якщо з акаунта затримку знято, Lite Bot зрозуміє це з ваших виведень і вимкне функцію сам.",
    },
    withdrawalBlockLabel: { message: "Доступно для виведення" },
    withdrawalNow: { message: "Можна вивести зараз" },
    withdrawalLater: { message: "Стане доступно пізніше" },
    withdrawalLaterNone: { message: "Зараз нічого не чекає" },
    withdrawalAllBy: {
      message: "усе - до $TIME$",
      placeholders: { time: { content: "$1" } },
    },
    withdrawalIn: {
      message: "через $TIME$",
      placeholders: { time: { content: "$1" } },
    },
    withdrawalHoursMinutes: {
      message: "$HOURS$ год $MINUTES$ хв",
      placeholders: { hours: { content: "$1" }, minutes: { content: "$2" } },
    },
    withdrawalHours: {
      message: "$HOURS$ год",
      placeholders: { hours: { content: "$1" } },
    },
    withdrawalMinutes: {
      message: "$MINUTES$ хв",
      placeholders: { minutes: { content: "$1" } },
    },
    withdrawalSoon: { message: "менш ніж за хвилину" },
    withdrawalMore: {
      message: "Ще $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    withdrawalLess: { message: "Згорнути" },
    withdrawalRule: {
      message:
        "Гроші з продажів, поповнення та повернення виводяться через 48 годин після надходження на баланс.",
    },
    withdrawalHide: { message: "Затримки немає - сховати" },
    withdrawalHiddenToast: {
      message:
        "Приховано. Повернути: Lite Bot → Фінанси → «Скільки доступно для виведення».",
    },
    withdrawalInstantOffToast: {
      message:
        "Виведення на цьому акаунті миттєве, затримки немає - функцію «Скільки доступно для виведення» вимкнено. Увімкнути знову: Lite Bot → Фінанси.",
    },
    withdrawalPartial: {
      message: "Враховано останні $COUNT$ операцій: за 48 годин їх більше.",
      placeholders: { count: { content: "$1" } },
    },
    exportFinancesEnable: { message: "Експорт фінансів" },
    exportFinancesEnableDesc: {
      message:
        "Кнопка експорту історії операцій в Excel / JSON на сторінці балансу.",
    },
    financesStatsTitle: { message: "Статистика" },
    financesCardIncome: { message: "Надходження" },
    financesCardExpense: { message: "Витрати" },
    financesCardNet: { message: "Чистий потік" },
    financesCardOps: { message: "Усього операцій" },
    financesTypesTitle: { message: "За типами операцій" },
    financesChartTitle: { message: "Динаміка (надходження / витрати)" },
    financesUpdate: { message: "Оновити" },
    financesExport: { message: "Експорт" },
    financesUpdating: { message: "Завантаження операцій…" },
    financesEmpty: { message: "Немає даних за період" },
    financesTypeOrder: { message: "Замовлення" },
    financesTypePayment: { message: "Поповнення" },
    financesTypeWithdraw: { message: "Виведення" },
    financesTypeWithdrawCancel: { message: "Скасування виведень" },
    financesTypeRefund: { message: "Повернення" },
    financesTypeOther: { message: "Інше" },
    financesStatusComplete: { message: "Завершено" },
    financesStatusWaiting: { message: "Очікування" },
    financesStatusCancel: { message: "Скасовано" },
    financesTopIncome: { message: "Найбільше надходжень" },
    financesTopExpense: { message: "Найбільше витрат" },
    financesDiagramStatus: { message: "За статусами" },
    financesDiagramCurrency: { message: "За валютами" },
    financesDetailNet: { message: "Чистий потік за типами" },
    exportFinancesTitle: { message: "Експорт фінансів" },
    featureGatedFinanceStats: {
      message:
        "«Фінанси» (статистика та експорт) - функція статусу Premium. Отримайте його, щоб увімкнути.",
    },
    settingsCategoryNotifications: { message: "Сповіщення" },
    bulkLotEdit: { message: "Масове редагування лотів" },
    bulkLotEditDesc: {
      message:
        "На сторінці ваших пропозицій і на вашій сторінці профілю з’явиться кнопка «Вибрати лоти»: можна вибрати одразу кілька лотів і увімкнути, вимкнути, змінити їм ціну або видалити. У розділі лоти ще й перетягуються мишею - вибраний порядок застосовується перестворенням тих лотів, які переїхали.",
    },
    featureGatedBulkLotEdit: {
      message: "Масове редагування лотів доступне з планом Pro.",
    },
    bulkEnter: { message: "Вибрати лоти" },
    bulkExit: { message: "Готово" },
    bulkOrderApply: { message: "Застосувати порядок" },
    bulkOrderAsk: {
      message:
        "Буде перестворено лотів: $COUNT$ з $TOTAL$. У них зміниться номер: посилання на ці лоти в листуваннях та на сторонніх сайтах перестануть працювати, а лоти втратять свій вік. Товари автовидачі переносяться. Копія створюється до видалення оригіналу, тому лот не загубиться.",
      placeholders: { count: { content: "$1" }, total: { content: "$2" } },
    },
    bulkOrderConfirm: {
      message: "Перестворити: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderDone: {
      message: "Порядок застосовано. Перестворено лотів: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderDuplicate: {
      message:
        "Лот $ID$ зараз існує у двох примірниках - зайвий можна видалити вручну",
      placeholders: { id: { content: "$1" } },
    },
    bulkOrderLotLimit: {
      message:
        "У цьому розділі у вас уже стільки лотів, скільки дозволяє FunPay, тому копія лота не вміщується поруч з оригіналом. Натисніть «Застосувати порядок» ще раз - лоти перестворюватимуться навпаки: спочатку видалення, потім створення.",
    },
    bulkOrderAskAtCap: {
      message:
        "У цьому розділі у вас уже стільки лотів, скільки дозволяє FunPay, тому копія лота може не вміститися поруч з оригіналом. Тоді лоти перестворюватимуться навпаки: спочатку видалення, потім створення. Перед видаленням усі дані лота, включно з товарами автовидачі, зберігаються, і якщо FunPay не дасть створити лот знову, його можна буде відновити. Буде перестворено лотів: $COUNT$ з $TOTAL$. У них зміниться номер, а самі лоти втратять свій вік.",
      placeholders: { count: { content: "$1" }, total: { content: "$2" } },
    },
    bulkOrderLost: {
      message: "Лот «$TITLE$» видалено, а створити його знову FunPay не дав",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreTitle: { message: "Лот не створено знову" },
    bulkRestoreAsk: {
      message:
        "Лот «$TITLE$» було видалено під час зміни порядку, і його ще не створено знову. Усі його дані, включно з товарами автовидачі, збережено. Створити його зараз?",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreConfirm: { message: "Створити лот" },
    bulkRestoreNotNow: { message: "Не зараз" },
    bulkRestoreForgetTitle: { message: "Забути цей лот?" },
    bulkRestoreForgetAsk: {
      message:
        "Збережені дані лота «$TITLE$» буде видалено, і відновити його буде неможливо. Якщо ви вже створили його самі - забудьте. Якщо ні - залиште, і ми запропонуємо його знову, коли ви відкриєте цей розділ.",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreForget: { message: "Забути" },
    bulkRestoreKeep: { message: "Залишити" },
    bulkRestoreDone: {
      message:
        "Лот «$TITLE$» створено знову. Оновіть сторінку, щоб побачити його в списку.",
      placeholders: { title: { content: "$1" } },
    },
    bulkRestoreNoRoom: {
      message: "у розділі немає вільного місця за лімітом FunPay",
    },
    bulkRestoreFailed: {
      message:
        "Не вдалося створити лот «$TITLE$»: $ERROR$. Дані збережено - спробуйте пізніше.",
      placeholders: { title: { content: "$1" }, error: { content: "$2" } },
    },
    bulkOrderFailed: { message: "Порядок застосовано не повністю" },
    bulkOrderHint: { message: "Потягніть рядок, щоб змінити порядок" },
    bulkOrderHintTouch: {
      message: "Тягніть рядок за крапки ліворуч, щоб змінити порядок",
    },
    bulkOrderMovedN: {
      message: "Переміщено: $COUNT$",
      placeholders: { count: { content: "$1" } },
    },
    bulkOrderNothing: { message: "Порядок уже такий" },
    bulkOrderReset: { message: "Повернути як було" },
    bulkOrderTitle: { message: "Застосувати новий порядок?" },
    bulkSelectAll: { message: "Усі" },
    bulkSelectedN: {
      message: "Вибрано: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkNothingSelected: { message: "Виберіть лоти - натисніть на рядок" },
    bulkActivate: { message: "Увімкнути" },
    bulkDeactivate: { message: "Вимкнути" },
    bulkPrice: { message: "Редагувати ціну" },
    bulkDelete: { message: "Видалити" },
    bulkCancel: { message: "Перервати" },
    bulkActivatedN: {
      message: "увімкнено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeactivatedN: {
      message: "вимкнено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPricedN: {
      message: "ціну змінено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeletedN: {
      message: "видалено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkSkippedN: {
      message: "без змін: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkFailedN: {
      message: "не вдалося: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkUnknownN: {
      message: "невідомо: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkRateLimited: { message: "FunPay попросив пригальмувати - зупинилися" },
    bulkCancelled: { message: "перервано" },
    bulkDeleteTitle: { message: "Видалити вибрані лоти?" },
    bulkDeleteAsk: {
      message: "Буде видалено лотів: $COUNT$. Скасувати це буде неможливо.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeleteAskChips: {
      message:
        "Буде видалено лотів: $COUNT$. Валютні лоти пропущено - їх так видалити не можна. Скасувати це буде неможливо.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkDeleteConfirm: {
      message: "Видалити: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkChipsOnly: {
      message: "Валютні лоти так не видаляються - обнуліть у них кількість",
    },
    bulkPriceTitle: { message: "Змінити ціну" },
    bulkPriceLead: {
      message: "Застосується до вибраних лотів: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceModeSet: { message: "Встановити" },
    bulkPriceOpUp: { message: "Збільшити" },
    bulkPriceOpDown: { message: "Зменшити" },
    bulkPriceChanging: {
      message: "Зміниться: $COUNT$ з $TOTAL$",
      placeholders: {
        count: { content: "$1", example: "10" },
        total: { content: "$2", example: "12" },
      },
    },
    bulkPriceRound: { message: "Округлювати до цілого" },
    bulkPriceMin: { message: "Не нижче" },
    bulkPriceMax: { message: "Не вище" },
    bulkPricePreview: { message: "Що вийде" },
    bulkPriceMore: {
      message: "…і ще $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceUnreadable: {
      message: "Без попереднього перегляду: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    bulkPriceApply: { message: "Застосувати" },
    bulkPriceApplyN: {
      message: "Застосувати до $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotAiGenerate: { message: "Заповнення лота нейромережею" },
    lotAiGenerateDesc: {
      message:
        "На формі пропозиції з'явиться кнопка «Написати текст лота»: нейромережа напише назву, опис і повідомлення після оплати за даними вашого лота. Результат спочатку показується в окремому вікні, у лот нічого не потрапляє без вашого натискання.",
    },
    transferSearch: { message: "Пошук за назвою" },
    transferSearching: { message: "Шукаю розділи з вашими лотами" },
    transferNothingFound: { message: "Лотів не знайшлося" },
    transferOtherGames: { message: "Інше" },
    transferFindNote: {
      message: "Бракує розділів? Ті, де всі лоти вимкнені, у профілі не видно.",
    },
    transferFindNear: { message: "Пошукати в моїх іграх" },
    transferFindFar: { message: "Пошукати всюди (понад годину)" },
    lotTransfer: { message: "Експорт лотів" },
    lotTransferDesc: {
      message:
        "Додає на сторінку профілю кнопки «Експорт лотів» та «Імпорт лотів»: лоти зберігаються у файл JSON або Excel, а з файлу створюються нові.",
    },
    featureGatedLotTransfer: {
      message: "Експорт лотів доступний з планом Premium.",
    },
    transferExportButton: { message: "Експорт лотів" },
    transferImportButton: { message: "Імпорт лотів" },
    transferExportTitle: { message: "Експорт лотів у файл" },
    transferImportTitle: { message: "Імпорт лотів з файлу" },
    transferExportLead: {
      message: "Позначте розділи, які потрібно експортувати.",
    },
    transferImportLead: { message: "У файлі" },
    transferSelectAll: { message: "Вибрати всі" },
    transferSelected: { message: "Вибрано розділів" },
    transferKindLots: { message: "лоти" },
    transferKindChips: { message: "валюта" },
    transferIncludeDisabled: { message: "Разом із вимкненими лотами" },
    transferWarnTime: { message: "Це займе приблизно" },
    transferWarnKeepOpen: {
      message:
        "Не закривайте цю вкладку і не йдіть зі сторінки, поки триває робота.",
    },
    transferWarnSecrets: {
      message:
        "У файл потраплять товари автовидачі, разом із логінами та паролями. Зберігайте його так само, як пароль.",
    },
    lotManagementForeignTitle: { message: "Лоти продавця" },
    lotManagementMenu: { message: "Ще" },
    lotManagementHide: { message: "Сховати панель керування лотами" },
    lotManagementHiddenToast: {
      message:
        "Панель керування лотами сховано. Увімкнути її знову можна в налаштуваннях Lite Bot: розділ «$SECTION$», пункт «$SETTING$».",
      placeholders: {
        section: { content: "$1", example: "Предложения" },
        setting: {
          content: "$2",
          example: "Панель управления лотами в профиле",
        },
      },
    },
    lotSearchPlaceholder: { message: "Пошук лотів: розділ або назва" },
    lotSearchLabel: { message: "Пошук лотів" },
    lotSearchClear: { message: "Очистити" },
    lotSearchNothing: { message: "Нічого не знайдено" },
    lotSearchFound: {
      message: "Знайдено лотів: $COUNT$",
      placeholders: { count: { content: "$1", example: "12" } },
    },
    transferExportForeignButton: { message: "Експорт лотів продавця" },
    transferExportForeignTitle: { message: "Експорт лотів продавця" },
    transferExportForeignLead: {
      message: "Позначте розділи продавця, які потрібно вивантажити.",
    },
    transferWarnPublicOnly: {
      message:
        "З чужого профілю читається лише те, що бачить покупець: описи, ціна та наявність. Товари автовидачі й повідомлення після оплати не потраплять - їх бачить тільки власник лота.",
    },
    transferWarnPublicOff: {
      message:
        "Вимкнених лотів на сайті не видно, тому у файл вони не потраплять. Створені з такого файлу лоти будуть вимкнені - перевірте їх перед увімкненням.",
    },
    transferCurrencySkip: { message: "Пропущено через валюту файлу" },
    transferCreatedOff: {
      message:
        "Лоти з чужого профілю створено вимкненими - перевірте їх перед увімкненням",
    },
    transferParamUnplaced: {
      message: "Параметр не перенесено, залишено значення за замовчуванням",
    },
    transferOtherLocalePass: { message: "друга мовна версія" },
    transferNoEnglish: {
      message:
        "Без англійської версії, у розділах, де FunPay її вимагає, не імпортуються",
    },
    transferNoRussian: {
      message:
        "Без російської версії, під час імпорту візьметься англійський текст",
    },
    transferMissingEnglish: {
      message:
        "FunPay вимагає англійський опис, якого немає у файлі: зробіть експорт заново, а якщо у вихідного лота англійського тексту немає, допишіть його самі",
    },
    transferUnderMinute: { message: "менше хвилини" },
    transferMinutesShort: { message: "хв" },
    transferHoursShort: { message: "год" },
    transferCancel: { message: "Скасувати" },
    transferStartExport: { message: "Експорт" },
    transferStartImport: { message: "Імпорт" },
    transferAbort: { message: "Перервати" },
    transferAborting: { message: "Зупиняю…" },
    transferKeepOpenShort: { message: "Вкладку не закривати" },
    transferDone: { message: "Готово" },
    transferSaved: { message: "Збережено лотів" },
    transferSavedChips: { message: "валютних розділів" },
    transferCreated: { message: "Створено лотів" },
    transferWroteChips: { message: "валютних розділів" },
    transferStopped: { message: "Зупинено" },
    transferExportRateLimited: {
      message:
        "FunPay попросив пригальмувати - експорт зупинено. Зачекайте кілька хвилин і запустіть його знову.",
    },
    transferSkippedDisabled: { message: "Пропущено вимкнених" },
    transferSkippedDeleted: { message: "Пропущено видалених" },
    transferSectionSkipped: { message: "розділ пропущено" },
    transferLotLimit: {
      message:
        "у розділі вже стільки ваших лотів, скільки дозволяє FunPay, - нові там не створюються",
    },
    transferFailed: { message: "Не вдалося експортувати" },
    transferImportFailed: { message: "Не вдалося імпортувати" },
    transferBadJson: {
      message: "Це не файл експорту: не вдалося його прочитати.",
    },
    transferBadFormat: {
      message: "Це не файл експорту лотів FunPay Lite Bot.",
    },
    transferNewerFile: {
      message: "Файл зроблено новішою версією розширення. Оновіть розширення.",
    },
    transferEmptyFile: { message: "У файлі немає жодного лота." },
    featureGatedLotAiGenerate: {
      message: "Заповнення лота нейромережею доступне з планом Pro.",
    },
    lotAiSectionLabel: { message: "Заповнення нейромережею" },
    lotAiButton: { message: "Написати текст лота" },
    lotAiUndo: { message: "Повернути як було" },
    lotAiModalTitle: { message: "Згенерувати лот" },
    lotAiSubjectLabel: { message: "Що продаємо?" },
    lotAiSubjectPlaceholder: {
      message: "Наприклад: акаунт Steam з поштою та 200 іграми",
    },
    lotAiTemplateLabel: { message: "Посилання на лот-шаблон, необов'язково" },
    lotAiTemplatePlaceholder: { message: "https://funpay.com/lots/offer?id=…" },
    lotAiTemplateDesc: {
      message:
        "Відкриємо цей лот і візьмемо його текст як зразок стилю. Товар у ньому може бути будь-яким - переймається манера подачі, а не зміст.",
    },
    lotAiTemplateBadUrl: {
      message:
        "Це не схоже на посилання на лот FunPay. Приклад: https://funpay.com/lots/offer?id=12345678",
    },
    lotAiTemplateFailed: {
      message:
        "Не вдалося прочитати лот-шаблон. Перевірте посилання або приберіть його",
    },
    lotAiFieldTitle: { message: "Назва" },
    lotAiFieldDescription: { message: "Опис" },
    lotAiFieldPaymentMsg: { message: "Повідомлення після оплати" },
    lotAiFieldNotWritable: {
      message:
        "У цьому розділі поле не редагується, текст можна скопіювати вручну",
    },
    lotAiWorking: { message: "Пишемо текст, зазвичай це триває кілька секунд" },
    lotAiAgain: { message: "Згенерувати ще раз" },
    lotAiInsert: { message: "Вставити в лот" },
    lotAiQuotaLeft: {
      message: "Залишилось генерацій цього місяця: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotAiInserted: { message: "Текст вставлено. Перевірте і збережіть лот" },
    lotAiUndone: { message: "Попередній текст повернуто" },
    lotAiInsertNothing: { message: "У цьому розділі нема чого заповнювати" },
    lotAiErrorQuota: {
      message:
        "Ви витратили генерації на цей місяць. Ліміт оновиться першого числа",
    },
    lotAiErrorBusy: { message: "Зараз забагато запитів. Спробуйте за хвилину" },
    lotAiErrorUnavailable: {
      message: "Генерація тимчасово недоступна. Спробуйте пізніше",
    },
    lotAiErrorRejected: {
      message:
        "Текст не пройшов перевірку і був відкинутий. Натисніть ще раз або уточніть, що продаєте",
    },
    lotAiErrorFeature: { message: "Генерація доступна з планом Pro" },
    lotAiErrorSession: {
      message: "Увійдіть в акаунт FunPayLiteBot, щоб користуватися генерацією",
    },
    lotAiErrorNetwork: {
      message:
        "Немає зв'язку із сервером. Перевірте інтернет і спробуйте знову",
    },
    lotAiErrorGeneric: {
      message: "Не вдалося написати текст. Спробуйте ще раз",
    },
    lotAiStart: { message: "Згенерувати" },
    lotClone: { message: "Клонування лотів" },
    lotCloneDesc: {
      message:
        "Додає кнопку «Клонувати лот» на сторінку чужого лота, а на чужий профіль - клонування кількох лотів одразу. Переносяться опис, параметри, ціна й картинки.",
    },
    featureGatedLotClone: {
      message: "Клонування лотів доступне з планом Pro.",
    },
    lotCloneButton: { message: "Клонувати лот" },
    lotCloneUnreadable: { message: "Не вдалося прочитати цей лот" },
    lotCloneNoticeLead: {
      message:
        "Форму заповнено за лотом іншого продавця. Перевірте поля й збережіть лот.",
    },
    lotCloneNoticeSource: { message: "Вихідний лот" },
    lotCloneNoticeUnresolved: { message: "Не вдалося вибрати, вкажіть самі:" },
    lotCloneNoticeNoPrice: {
      message: "Ціну вкажіть самі: на сторінці лота її не було.",
    },
    lotCloneMissingAmount: { message: "наявність" },
    lotCloneMissingImages: { message: "картинки" },
    lotCloneMissingGoods: { message: "товари автовидачі" },
    lotCloneNoticeMissing: {
      message: "Не переносяться, додайте самі: $LIST$.",
      placeholders: { list: { content: "$1", example: "наличие, картинки" } },
    },
    lotCloneDraftGone: {
      message:
        "Дані лота для клонування застаріли. Відкрийте лот ще раз і натисніть «Клонувати лот».",
    },
    lotCloneBulkButton: { message: "Клонувати до себе" },
    lotCloneBulkTitle: { message: "Клонувати лоти до себе?" },
    lotCloneBulkAsk: {
      message:
        "Буде створено лотів: $COUNT$, у тих самих розділах, з описом, параметрами, ціною та картинками продавця. Вони з'являться у вас вимкненими: перевірте їх, вкажіть наявність і ввімкніть. Товари автовидачі не переносяться.",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneBulkConfirm: {
      message: "Клонувати: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneDoneN: {
      message: "створено: $COUNT$",
      placeholders: { count: { content: "$1", example: "5" } },
    },
    lotCloneBulkDone: {
      message:
        "Нові лоти створено вимкненими: перевірте їх у себе та ввімкніть.",
    },
    lotCloneBulkWhy: {
      message: "Не створено: $LIST$.",
      placeholders: {
        list: { content: "$1", example: "лот уже снят с продажи" },
      },
    },
    lotCloneBulkUnresolved: {
      message: "Не вдалося вибрати, залишено за замовчуванням: $LIST$.",
      placeholders: { list: { content: "$1", example: "Регион: Европа" } },
    },
    lotCloneOtherPass: { message: "Друга мовна версія" },
    lotCloneSignIn: {
      message: "Увійдіть в акаунт FunPay, щоб створити лоти у себе",
    },
    lotCloneErrLimit: {
      message: "у розділі немає місця за лімітом лотів FunPay",
    },
    lotCloneErrForbidden: { message: "у цьому розділі вам не можна продавати" },
    lotCloneErrGone: { message: "лот уже знято з продажу" },
    lotCloneErrPrice: { message: "FunPay не показав ціну лота" },
    lotCloneErrUnreadable: { message: "не вдалося прочитати лот" },
    lotCloneErrRate: { message: "FunPay попросив пригальмувати" },
    lotCloneImagesConsentTitle: { message: "Картинки лота" },
    lotCloneImagesConsentBody: {
      message:
        "Щоб перенести картинки, розширенню потрібен доступ до sfunpay.com - сервера, на якому FunPay зберігає картинки лотів. Дозвіл запитується один раз.",
    },
    lotCloneImagesConsentGrant: { message: "Дозволити" },
    lotCloneImagesConsentCancel: { message: "Без картинок" },
    lotCloneImagesProgress: {
      message: "Картинки: $DONE$ з $TOTAL$",
      placeholders: {
        done: { content: "$1", example: "2" },
        total: { content: "$2", example: "5" },
      },
    },
    lotCloneNoticeImagesPartial: {
      message:
        "Перенеслися не всі картинки: $DONE$ з $TOTAL$. Решту додайте самі.",
      placeholders: {
        done: { content: "$1", example: "3" },
        total: { content: "$2", example: "5" },
      },
    },
    lotCloneBulkImagesSkipped: {
      message: "Картинки не переносилися: немає доступу до sfunpay.com.",
    },
    lotCloneBulkImagesFailed: {
      message: "Не перенеслося картинок: $COUNT$.",
      placeholders: { count: { content: "$1", example: "2" } },
    },
    consentPendingHint: { message: "Підтвердьте запит у вікні браузера." },
    consentRequestFailed: {
      message: "Браузер не дав запитати доступ: $ERROR$",
      placeholders: {
        error: {
          content: "$1",
          example:
            "Only permissions specified in the manifest may be requested.",
        },
      },
    },
    lotCloneNoticeImagesNoAccess: {
      message:
        "Картинки не перенесено: немає доступу до sfunpay.com. Його можна дозволити під час наступного клонування, а картинки цього лота додайте самі.",
    },
    settingThemeRedMoon: { message: "Red Moon" },
    themePresetMidnight: { message: "Опівніч" },
    themePresetAmoled: { message: "Чорна" },
    themePresetGraphite: { message: "Графіт" },
    themePresetNord: { message: "Північ" },
    themePresetAmethyst: { message: "Аметист" },
    themePresetForest: { message: "Ліс" },
    themePresetOcean: { message: "Океан" },
    themePresetCocoa: { message: "Какао" },
    themePresetSakura: { message: "Сакура" },
    themePresetPaper: { message: "Папір" },
    themeCardCustom: { message: "Власна" },
    themeEditorTitle: { message: "Власна тема" },
    themeEditorDesc: {
      message:
        "Три кольори - фон, текст і акцент. Решту відтінків сторінка підбере сама, зміни видно одразу.",
    },
    themeBaseLabel: { message: "Основа" },
    themeBaseSolid: { message: "Однотонна" },
    themeBaseFirewatch: { message: "Шпалери Firewatch" },
    themeBaseRedMoon: { message: "Шпалери Red Moon" },
    themeColorBg: { message: "Фон" },
    themeColorText: { message: "Текст" },
    themeColorAccent: { message: "Акцент" },
    themeContrastLabel: { message: "Контраст тексту" },
    themeContrastGreat: { message: "чудово" },
    themeContrastOk: { message: "достатньо" },
    themeContrastLow: { message: "слабкий, текст погано читатиметься" },
    themeAccentLow: { message: "Акцент майже зливається з фоном." },
    themeRandom: { message: "Випадкові кольори" },
    themeCopyCode: { message: "Скопіювати код теми" },
    themeCodeCopied: {
      message:
        "Код теми скопійовано. Надішли його другу - він вставить його в «Власна тема».",
    },
    themePasteCode: { message: "Вставити код" },
    themePasteApply: { message: "Застосувати" },
    themeCodeInvalid: { message: "Це не код теми Lite Bot" },
    themeSaved: { message: "Збережено" },
    tariffsPeriodYear: { message: "Рік" },
    tariffsPeriodMonth: { message: "Місяць" },
    renewDaysLeft: {
      message: "$DAYS$ дн.",
      placeholders: { days: { content: "$1" } },
    },
    renewHoursLeft: {
      message: "$HOURS$ год",
      placeholders: { hours: { content: "$1" } },
    },
    renewEndingBar: {
      message:
        "$PLAN$ закінчиться через $LEFT$. Продовжте, щоб функції не вимкнулися.",
      placeholders: { plan: { content: "$1" }, left: { content: "$2" } },
    },
    renewButton: { message: "Продовжити" },
    renewYearButton: { message: "На рік: 2 місяці в подарунок" },
    renewEndedTitle: {
      message: "Статус $PLAN$ закінчився",
      placeholders: { plan: { content: "$1" } },
    },
    renewEndedBody: {
      message:
        "Платні функції вимкнено. Налаштування збережено: продовжте $PLAN$, і все запрацює знову.",
      placeholders: { plan: { content: "$1" } },
    },
    renewEndedBuy: {
      message: "Продовжити $PLAN$",
      placeholders: { plan: { content: "$1" } },
    },
    checkoutUnfinishedBar: {
      message:
        "Оплата $PLAN$ не завершилася? Якщо щось завадило, спробуйте ще раз.",
      placeholders: { plan: { content: "$1" } },
    },
    checkoutUnfinishedButton: { message: "Повернутися до оплати" },
  };
  function h(e) {
    let s = {};
    for (let t of Object.keys(e)) {
      let a = e[t],
        o = { message: a.message };
      if (a.placeholders) {
        let r = {};
        for (let d of Object.keys(a.placeholders))
          r[d.toLowerCase()] = a.placeholders[d].content;
        o.placeholders = r;
      }
      s[t] = o;
    }
    return s;
  }
  var P = { en: h(C), ru: h(T), uk: h(k) };
  function A(e, s) {
    if (!e.placeholders) {
      let a = 0;
      return e.message.replace(
        /\$[A-Za-z][A-Za-z0-9_]*\$/g,
        () => s[a++] ?? "",
      );
    }
    let t = e.placeholders;
    return e.message.replace(/\$([A-Za-z][A-Za-z0-9_]*)\$/g, (a, o) => {
      let r = t[o.toLowerCase()];
      return r === void 0
        ? ""
        : r.replace(/\$(\d+)/g, (d, S) => s[Number(S) - 1] ?? "");
    });
  }
  function f(e, s) {
    let t = p(),
      a = P[t][e] ?? P.en[e];
    return a === void 0 ? "" : !s || s.length === 0 ? a.message : A(a, s);
  }
  var $ = "https://sfunpay.com/*";
  var i = window.parent,
    g = i !== null && i !== window,
    N = "flbTranslateConsentDecision",
    x = typeof chrome.permissions?.request == "function",
    c = new URLSearchParams(location.search),
    m = c.get("locale"),
    y = c.get("theme"),
    w = c.get("kind") === "offerImages" ? "offerImages" : "translate",
    v = w === "offerImages" ? [$] : ["https://translate.googleapis.com/*"];
  if (w === "offerImages") {
    let e = [
      [".title", "lotCloneImagesConsentTitle", "Картинки лота"],
      [
        ".body",
        "lotCloneImagesConsentBody",
        "Чтобы перенести картинки, расширению нужен доступ к sfunpay.com - серверу, на котором FunPay хранит картинки лотов. Разрешение спрашивается один раз.",
      ],
      ["#cancel", "lotCloneImagesConsentCancel", "Без картинок"],
      ["#grant", "lotCloneImagesConsentGrant", "Разрешить"],
    ];
    for (let [s, t, a] of e) {
      let o = document.querySelector(s);
      o && ((o.dataset.i18n = t), (o.textContent = a));
    }
  }
  (m === "ru" || m === "uk" || m === "en") &&
    (document.documentElement.lang = m);
  (y === "dark" || y === "light") &&
    (document.documentElement.dataset.theme = y);
  var E = new Set([
    "surface",
    "surface-text",
    "surface-muted",
    "surface-radius",
    "primary-bg",
    "primary-text",
    "primary-border",
    "default-bg",
    "default-text",
    "default-border",
    "font",
  ]);
  try {
    let e = c.get("tokens");
    if (e) {
      let s = JSON.parse(e);
      for (let [t, a] of Object.entries(s))
        E.has(t) &&
          (typeof a != "string" ||
            !a ||
            document.documentElement.style.setProperty(`--${t}`, a));
    }
  } catch {}
  document.querySelectorAll("[data-i18n]").forEach((e) => {
    let s = e.dataset.i18n;
    if (!s) return;
    let t = f(s);
    t && (e.textContent = t);
  });
  var l = !1;
  function n(e, s) {
    if (!l) {
      if (((l = !0), g)) {
        i.postMessage(
          { flbTranslate: "permission-decision", granted: e, reason: s },
          "*",
        );
        return;
      }
      chrome.storage.local
        .set({ [N]: { granted: e, reason: s, ts: Date.now() } })
        .catch(() => {})
        .finally(D);
    }
  }
  function D() {
    let e = chrome.tabs;
    if (typeof e?.getCurrent != "function") {
      window.close();
      return;
    }
    e.getCurrent()
      .then((s) => (typeof s?.id == "number" ? e.remove(s.id) : window.close()))
      .catch(() => window.close());
  }
  function b() {
    g &&
      i.postMessage(
        { flbTranslate: "size", height: document.documentElement.scrollHeight },
        "*",
      );
  }
  requestAnimationFrame(b);
  new ResizeObserver(b).observe(document.body);
  document.getElementById("grant")?.addEventListener("click", async () => {
    if (!x) {
      if (g) {
        i.postMessage({ flbTranslate: "needs-window" }, "*");
        return;
      }
      n(!1, "permissions-api-unavailable");
      return;
    }
    document.getElementById("grant")?.setAttribute("disabled", "");
    let e = document.querySelector(".body");
    e &&
      (e.textContent =
        f("consentPendingHint") || "Подтвердите запрос в окне браузера.");
    try {
      let s = await chrome.permissions.request({ permissions: [], origins: v });
      n(!!s, s ? "granted" : "denied");
    } catch (s) {
      n(!1, `threw:${s?.message ?? "unknown"}`);
    }
  });
  document.getElementById("cancel")?.addEventListener("click", () => {
    n(!1, "cancel-button");
  });
  document.getElementById("close")?.addEventListener("click", () => {
    n(!1, "close-button");
  });
  window.addEventListener("keydown", (e) => {
    e.key === "Escape" && !l && n(!1, "escape-key");
  });
  g ||
    window.addEventListener("pagehide", () => {
      l || n(!1, "window-closed");
    });
})();
