/*
 * Version 3.40 made by yippym - 2021-10-22 21:00
 * https://github.com/Yippy/wish-tally-sheet
 */

// Wish Tally Const
var WISH_TALLY_SHEET_SOURCE_ID = '1mTeEQs1nOViQ-_BVHkDSZgfKGsYiLATe1mFQxypZQWA';
var WISH_TALLY_SHEET_SUPPORTED_LOCALE = "en_GB";
var WISH_TALLY_SHEET_SCRIPT_VERSION = 3.4;
var WISH_TALLY_SHEET_SCRIPT_IS_ADD_ON = false;

// Auto Import Const
/* Add URL here to avoid showing on Sheet */
var AUTO_IMPORT_URL_FOR_API_BYPASS = ""; // Optional
var AUTO_IMPORT_BANNER_SETTINGS_FOR_IMPORT = {
  "Character Event Wish History": { "range_status": "E44", "range_toggle": "E37", "gacha_type": 301 },
  "Permanent Wish History": { "range_status": "E45", "range_toggle": "E38", "gacha_type": 200 },
  "Weapon Event Wish History": { "range_status": "E46", "range_toggle": "E39", "gacha_type": 302 },
  "Novice Wish History": { "range_status": "E47", "range_toggle": "E40", "gacha_type": 100 },
};

var AUTO_IMPORT_LANGUAGE_SETTINGS_FOR_IMPORT = {
  "English": { "code": "en", "full_code": "en-us", "4_star": " (4-Star)", "5_star": " (5-Star)", "gacha_type_400": "Character Event Wish-2", "gacha_type_301": "Character Event Wish", "gacha_type_302": "Weapon Event Wish", "gacha_type_200": "Permanent Wish", "gacha_type_100": "Novice Wishes" },
  "German": { "code": "de", "full_code": "de-de", "4_star": " (4 Sterne)", "5_star": " (5 Sterne)", "gacha_type_400": "Figurenaktionsgebet 2", "gacha_type_301": "Figurenaktionsgebet", "gacha_type_302": "Waffenaktionsgebet", "gacha_type_200": "Standardgebet", "gacha_type_100": "Neulingsgebete" },
  "French": { "code": "fr", "full_code": "fr-fr", "4_star": " (4★)", "5_star": " (5★)", "gacha_type_400": "Vœux événements de personnage - 2", "gacha_type_301": "Vœux événements de personnage", "gacha_type_302": "Vœux événements d'arme", "gacha_type_200": "Vœux permanents", "gacha_type_100": "Vœux des débutants" },
  "Spanish": { "code": "es", "full_code": "es-es", "4_star": " (4★)", "5_star": " (5★)", "gacha_type_400": "Gachapón promocional de personaje 2", "gacha_type_301": "Gachapón promocional de personaje", "gacha_type_302": "Gachapón promocional de arma", "gacha_type_200": "Gachapón permanente", "gacha_type_100": "Gachapón de principiante" },
  "Chinese Traditional": { "code": "zh-tw", "full_code": "zh-tw", "4_star": " (四星)", "5_star": " (五星)", "gacha_type_400": "角色活動祈願-2", "gacha_type_301": "角色活動祈願", "gacha_type_302": "武器活動祈願", "gacha_type_200": "常駐祈願", "gacha_type_100": "新手祈願" },
  "Chinese Simplified": { "code": "zh-cn", "full_code": "zh-cn", "4_star": " (四星)", "5_star": " (五星)", "gacha_type_400": "角色活动祈愿-2", "gacha_type_301": "角色活动祈愿", "gacha_type_302": "武器活动祈愿", "gacha_type_200": "常驻祈愿", "gacha_type_100": "新手祈愿" },
  "Indonesian": { "code": "id", "full_code": "id-id", "4_star": " (4★)", "5_star": " (5★)", "gacha_type_400": "Event Permohonan Karakter - 2", "gacha_type_301": "Event Permohonan Karakter", "gacha_type_302": "Event Permohonan Senjata", "gacha_type_200": "Permohonan Standar", "gacha_type_100": "Permohonan Pemula" },
  "Japanese": { "code": "ja", "full_code": "ja-jp", "4_star": " (★4)", "5_star": " (★5)", "gacha_type_400": "イベント祈願・キャラクター 2", "gacha_type_301": "イベント祈願・キャラクター", "gacha_type_302": "イベント祈願・武器", "gacha_type_200": "通常祈願", "gacha_type_100": "初心者向け祈願" },
  "Vietnamese": { "code": "vi", "full_code": "vi-vn", "4_star": " (4 sao)", "5_star": " (5 sao)", "gacha_type_400": "Cầu Nguyện Nhân Vật-2", "gacha_type_301": "Cầu Nguyện Nhân Vật", "gacha_type_302": "Cầu Nguyện Vũ Khí", "gacha_type_200": "Cầu Nguyện Thường", "gacha_type_100": "Cầu Nguyện Tân Thủ" },
  "Korean": { "code": "ko", "full_code": "ko-kr", "4_star": " (★4)", "5_star": " (★5)", "gacha_type_400": "캐릭터 이벤트 기원-2", "gacha_type_301": "캐릭터 이벤트 기원", "gacha_type_302": "무기 이벤트 기원", "gacha_type_200": "상주 기원", "gacha_type_100": "초심자 기원" },
  "Portuguese": { "code": "pt", "full_code": "pt-pt", "4_star": " (4★)", "5_star": " (5★)", "gacha_type_400": "Oração de Evento de Personagem - 2", "gacha_type_301": "Oração de Evento de Personagem", "gacha_type_302": "Oração do Evento de Arma", "gacha_type_200": "Desejo Comum", "gacha_type_100": "Desejos de Novato" },
  "Thai": { "code": "th", "full_code": "th-th", "4_star": " (4 ดาว)", "5_star": " (5 ดาว)", "gacha_type_400": "กิจกรรมอธิษฐานตัวละคร - 2", "gacha_type_301": "กิจกรรมอธิษฐานตัวละคร", "gacha_type_302": "กิจกรรมอธิษฐานอาวุธ", "gacha_type_200": "อธิษฐานถาวร", "gacha_type_100": "ผู้เริ่มอธิษฐาน" },
  "Russian": { "code": "ru", "full_code": "ru-ru", "4_star": " (4★)", "5_star": " (5★)", "gacha_type_400": "Молитва события персонажа II", "gacha_type_301": "Молитва события персонажа", "gacha_type_302": "Молитва события оружия", "gacha_type_200": "Стандартная молитва", "gacha_type_100": "Молитва новичка" }
};

var AUTO_IMPORT_ADDITIONAL_QUERY = [
  "authkey_ver=1",
  "sign_type=2",
  "auth_appid=webview_gacha",
  "device_type=pc"
];

var AUTO_IMPORT_URL = "https://hk4e-api-os.mihoyo.com/event/gacha_info/api/getGachaLog";
var AUTO_IMPORT_URL_CHINA = "https://hk4e-api.mihoyo.com/event/gacha_info/api/getGachaLog";

var AUTO_IMPORT_URL_ERROR_CODE_AUTH_TIMEOUT = -101;
var AUTO_IMPORT_URL_ERROR_CODE_AUTH_INVALID = -100;
var AUTO_IMPORT_URL_ERROR_CODE_LANGUAGE_CODE = -108;
var AUTO_IMPORT_URL_ERROR_CODE_AUTHKEY_DENIED = -109;
var AUTO_IMPORT_URL_ERROR_CODE_REQUEST_PARAMS = -104;

// Wish Tally Const
var WISH_TALLY_CHARACTER_EVENT_WISH_SHEET_NAME = "Character Event Wish History";
var WISH_TALLY_WEAPON_EVENT_WISH_SHEET_NAME = "Weapon Event Wish History";
var WISH_TALLY_PERMANENT_WISH_SHEET_NAME = "Permanent Wish History";
var WISH_TALLY_NOVICE_WISH_SHEET_NAME = "Novice Wish History";
var WISH_TALLY_WISH_HISTORY_SHEET_NAME = "Wish History";
var WISH_TALLY_SETTINGS_SHEET_NAME = "Settings";
var WISH_TALLY_DASHBOARD_SHEET_NAME = "Dashboard";
var WISH_TALLY_CHANGELOG_SHEET_NAME = "Changelog";
var WISH_TALLY_PITY_CHECKER_SHEET_NAME = "Pity Checker";
var WISH_TALLY_EVENTS_SHEET_NAME = "Events";
var WISH_TALLY_CHARACTERS_OLD_SHEET_NAME = "Constellation";
var WISH_TALLY_CHARACTERS_SHEET_NAME = "Characters";
var WISH_TALLY_WEAPONS_SHEET_NAME = "Weapons";
var WISH_TALLY_RESULTS_SHEET_NAME = "Results";
var WISH_TALLY_README_SHEET_NAME = "README";
var WISH_TALLY_AVAILABLE_SHEET_NAME = "Available";
var WISH_TALLY_CRYSTAL_CALCULATOR_SHEET_NAME = "Crystal Calculator";
var WISH_TALLY_ALL_WISH_HISTORY_SHEET_NAME = "All Wish History";
var WISH_TALLY_ITEMS_SHEET_NAME = "Items";
var WISH_TALLY_NAME_OF_WISH_HISTORY = [WISH_TALLY_CHARACTER_EVENT_WISH_SHEET_NAME, WISH_TALLY_PERMANENT_WISH_SHEET_NAME, WISH_TALLY_WEAPON_EVENT_WISH_SHEET_NAME, WISH_TALLY_NOVICE_WISH_SHEET_NAME];

// AutoHotkey Const
var AUTOHOTKEY_SHEET_NAME = "AutoHotkey";
var AUTOHOTKEY_SCRIPT_SHEET_NAME = "AutoHotkey-Script";

// Import Const
var IMPORT_STATUS_COMPLETE = "COMPLETE";
var IMPORT_STATUS_FAILED = "FAILED";
var IMPORT_STATUS_WISH_HISTORY_COMPLETE = "DONE";
var IMPORT_STATUS_WISH_HISTORY_NOT_FOUND = "NOT FOUND";
var IMPORT_STATUS_WISH_HISTORY_EMPTY = "EMPTY";

// Scheduler Const
var SCHEDULER_TRIGGER_ON_TEXT = "ON";
var SCHEDULER_TRIGGER_OFF_TEXT = "OFF";
var SCHEDULER_RUN_AT_WHICH_DAY = {
  "Monday": ScriptApp.WeekDay.MONDAY,
  "Tuesday": ScriptApp.WeekDay.TUESDAY,
  "Wednesday": ScriptApp.WeekDay.WEDNESDAY,
  "Thursday": ScriptApp.WeekDay.THURSDAY,
  "Friday": ScriptApp.WeekDay.FRIDAY,
  "Saturday": ScriptApp.WeekDay.SATURDAY,
  "Sunday": ScriptApp.WeekDay.SUNDAY
};
var SCHEDULER_RUN_AT_HOUR = {
  "Run at 1:00": 1,
  "Run at 2:00": 2,
  "Run at 3:00": 3,
  "Run at 4:00": 4,
  "Run at 5:00": 5,
  "Run at 6:00": 6,
  "Run at 7:00": 7,
  "Run at 8:00": 8,
  "Run at 9:00": 9,
  "Run at 10:00": 10,
  "Run at 11:00": 11,
  "Run at 12:00": 12,
  "Run at 13:00": 13,
  "Run at 14:00": 14,
  "Run at 15:00": 15,
  "Run at 16:00": 16,
  "Run at 17:00": 17,
  "Run at 18:00": 18,
  "Run at 19:00": 19,
  "Run at 20:00": 20,
  "Run at 21:00": 21,
  "Run at 22:00": 22,
  "Run at 23:00": 23,
  "Run at Midnight": 0
};
var SCHEDULER_RUN_AT_EVERY_HOUR = {
  "Every hour": 1,
  "Every 2 hours": 2,
  "Every 3 hours": 3,
  "Every 4 hours": 4,
  "Every 5 hours": 5,
  "Every 6 hours": 6,
  "Every 7 hours": 7,
  "Every 8 hours": 8,
  "Every 9 hours": 9,
  "Every 10 hours": 10,
  "Every 11 hours": 11,
  "Every 12 hours": 12,
  "Every 13 hours": 13,
  "Every 14 hours": 14,
  "Every 15 hours": 15,
  "Every 16 hours": 16,
  "Every 17 hours": 17,
  "Every 18 hours": 18,
  "Every 19 hours": 19,
  "Every 20 hours": 20,
  "Every 21 hours": 21,
  "Every 22 hours": 22,
  "Every 23 hours": 23,
  "Every 24 hours": 24
};

const CACHED_AUTHKEY_TIMEOUT = 1000 * 60 * 60 * 24;
