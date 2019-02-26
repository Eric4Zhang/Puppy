import i18n from 'i18next';

i18n.init({
    debug: true,
    lng: 'en',

    resources:{
        en: {
            translations: {
                'title': 'Ottawa Mandarin Alliance Church',
                'home': 'Home',
                'about': 'About',
                'events': 'Events',
                'worship': 'Worship',
                'contact':'Contact',
                'video': 'Video',
                'verseOfDay': 'For God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have eternal life. -- John 3:16',
            }
        },
        cn:{
            translations: {
                'title': '渥太华国语宣道会',
                'home': '首页',
                'about': '关于我们',
                'events': '教会活动',
                'worship': '聚会时间',
                'contact':'联系我们',
                'video': '视频下载',
                'verseOfDay': '神爱世人， 甚至将他的独生子赐给他们, 叫一切信他的不致灭亡， 反得永生。-- 约3:16',
            }
        }
    }
});

export default i18n;