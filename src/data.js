export const teamAlpha = [
    ["みんと", "ロングブラスターネクロ"],
    ["そららら", "ボールドマーカー7"],
    ["ふみん", "スプラマニューバーベッチュー"],
    ["むめい", "L3リールガン"]
];

export const teamBlabo = [
    ["やまおか", "ヒーロースピナーレプリカ"],
    ["めぎゅ", "ヒーローシェルターレプリカ"],
    ["かばん", "N-ZAP85"],
    ["maxi", "4Kスコープ"]
];

export const result = [
    {
        "rule": "ガチホコバトル",
        "stage": "ショッツル鉱山",
        "ratioA": 76,
        "ratioB": 27,
        "WIN": "アルファ",
        "link": "https://youtu.be/Ig59TvNasMo?t=1920"
    },
    {
        "rule": "ガチエリア",
        "stage": "モズク農園",
        "ratioA": 100,
        "ratioB": 0,
        "WIN": "アルファ",
        "link": "https://youtu.be/Ig59TvNasMo?t=2465"
    },
    {
        "rule": "ガチヤグラ",
        "stage": "Bバスパーク",
        "ratioA": 84,
        "ratioB": 83,
        "WIN": "アルファ",
        "link": "https://youtu.be/Ig59TvNasMo?t=2760"
    },
    {
        "rule": "ガチアサリ",
        "stage": "アンチョビットゲームズ",
        "ratioA": 76,
        "ratioB": 0,
        "WIN": "アルファ",
        "link": "https://youtu.be/Ig59TvNasMo?t=3153"
    },
    {
        "rule": "ガチホコバトル",
        "stage": "タチウオパーキング",
        "ratioA": 85,
        "ratioB": 35,
        "WIN": "アルファ",
        "link": "https://youtu.be/Ig59TvNasMo?t=3571"
    }
];

export const stream = [
    {
        "name": "よつぎ",
        "stream": "youtube",
        "link": "https://www.youtube.com/channel/UCZ5DicEzH5eWivxdaAiXuFQ"
    },
    {
        "name": "むめい",
        "stream": "twitch",
        "link": "https://www.twitch.tv/mumei_bk"
    },
    {
        "name": "そららら",
        "stream": "mixer",
        "link": "https://mixer.com/SRRR"
    },
    {
        "name": "やまいも",
        "stream": "twitch",
        "link": "https://www.twitch.tv/torotorotororo"
    },
    {
        "name": "ケケ(serizawagod)",
        "stream": "twitch",
        "link": "https://www.twitch.tv/serizawagod"
    },
    {
        "name": "りんご",
        "stream": "twitch",
        "link": "https://www.twitch.tv/ringorz"
    }
];

import img_area_logo from "./picture/area.png";
import img_hoko_logo from "./picture/hoko.png";
import img_tower_logo from "./picture/tower.png";
import img_asari_logo from "./picture/asari.png";
import stg_Bbus from "./picture/Bバスパーク.png";
import stg_anchobi from "./picture/アンチョビットゲームズ.png";
import stg_shotturu from "./picture/ショッツル鉱山.png";
import stg_mozuku from "./picture/モズク農園.png";
import stg_tatiuo from "./picture/タチウオパーキング.png";
import team_win from "./picture/winTeam.png"
import logo_youtube from "./picture/youtube_logo.png"
import logo_twitch from "./picture/twitch_logo.png";
import logo_mixer from "./picture/mixer_logo.png"

export function getImage(stage) {
    let ret = img_hoko_logo;
    switch (stage) {
        case "ガチホコバトル":
            ret = img_hoko_logo;
            break;
        case "ガチエリア":
            ret = img_area_logo;
            break;
        case "ガチアサリ":
            ret = img_asari_logo;
            break;
        case "ガチヤグラ":
            ret = img_tower_logo;
            break;
        case "Bバスパーク":
            ret = stg_Bbus;
            break;
        case "アンチョビットゲームズ":
            ret = stg_anchobi;
            break;
        case "ショッツル鉱山":
            ret = stg_shotturu;
            break;
        case "モズク農園":
            ret = stg_mozuku;
            break;
        case "タチウオパーキング":
            ret = stg_tatiuo;
            break;
        case "アルファ":
            ret = team_win;
            break
        case "youtube":
            ret = logo_youtube;
            break;
        case "twitch":
            ret = logo_twitch;
            break;
        case "mixer":
            ret = logo_mixer;
            break;
        default:
            ret = img_hoko_logo;
            break;
    }
    return ret;
}