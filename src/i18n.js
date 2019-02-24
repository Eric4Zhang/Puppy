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
            }
        }
    }
});

export default i18n;