import i18n from 'i18next';

i18n.init({
    debug: true,
    lng: 'cn',

    resources:{
        en: {
            translations: {
                'title': 'Ottawa Mandarin Alliance Church',
                'home': 'Home',
                'about': 'Who we are',
                'mission': 'Mission',
                'events': 'Events',
                'participate': 'Participate',
                'connect':'Connect',
                'resource': 'Resources',
                'verseOfDay': 'For God so loved the world that He gave His only begotten Son, that whoever believes in Him shall not perish but have eternal life. -- John 3:16',
                
                // Sub menu of 'Who we are'
                'beliefs': 'Our beliefs',
                'history':'Our history',
                'staff':'Our staff',
                'ministry': 'Ministry',
                'community': 'International Community of Alliance Churches',

                // sub menu of participate
                'worship':'Sunday worship',
                'prayer':'Prayer meeting',
                'cell':'Adult group',
                'universityFellowship':'University fellowship',
                'youthFellowship':'Youth fellowship',
                'childrenActivity':'Children activities',
                'training':'Training courses',

                // sub menu of events
                'notification':'Notification',
                'upcomingEvents':'Upcoming events',
                'calendar':'Calendar',
                'reviews':'Reviews',

                // sub menu of mission
                'vision':'Vision',
                'missionaryStory':'Missionary story',
                'joinMission':'Join missions',
                'donate':'Giving and tithing',

                // sub menu of resources
                'sundaySermon':'Sunday sermon',
                'sermonNotes':'Notes',
                'books':'Books',
                'witness':'Witnesses',
                'links':'Links',

                // sub menu of connect
                'newPeople':'I am new',
                'connectGroup':'Join group',
                'contact':'Contact',
            }
        },
        cn:{
            translations: {
                'title': '渥太华国语宣道会',
                'home': '首頁',
                'about': '認識我們',
                'mission': '普世宣教',
                'events': '教會活動',
                'participate': '參與教會',
                'connect':'聯絡我們',
                'resource': '證道靈糧',
                'verseOfDay': '神爱世人， 甚至将他的独生子赐给他们, 叫一切信他的不致灭亡， 反得永生。-- 约3:16',

                // Sub menu of 'Who we are'
                'beliefs': '我們的信仰',
                'history':'我們的歷史',
                'staff':'教牧同工',
                'ministry': '教會事工',
                'community':'國際聯合社區教會',

                // sub menu of participate
                'worship':'主日崇拜',
                'prayer':'禱告聚會',
                'cell':'成人小組',
                'universityFellowship':'大學團契',
                'youthFellowship':'青少年團契',
                'childrenActivity':'兒童活動',
                'training':'培訓課程',

                // sub menu of events
                'notification':'最新消息',
                'upcomingEvents':'活動預告',
                'calendar':'教會行事曆',
                'reviews':'精彩回顧',

                // sub menu of mission
                'vision':'異象與現況',
                'missionaryStory':'宣教故事',
                'joinMission':'加入宣教行列',
                'donate':'支持與奉獻',

                // sub menu of resources
                'sundaySermon':'主日講道',
                'sermonNotes':'講道筆記',
                'books':'書籍推介',
                'witness':'雲彩見證',
                'links':'連結',

                // sub menu of connect
                'newPeople':'我是新人',
                'connectGroup':'加入小組',
                'contact':'聯絡我們',
            }
        }
    }
});

export default i18n;