判断游览器
var match = {
            //鍐呮牳
            Trident: u.indexOf('Trident') > -1 || u.indexOf('NET CLR') > -1,
            Presto: u.indexOf('Presto') > -1,
            WebKit: u.indexOf('AppleWebKit') > -1,
            Gecko: u.indexOf('Gecko/') > -1,
            KHTML: u.indexOf('KHTML/') > -1,
            //娴忚鍣�
            Safari: u.indexOf('Safari') > -1,
            Chrome: u.indexOf('Chrome') > -1 || u.indexOf('CriOS') > -1,
            IE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1,
            Edge: u.indexOf('Edge') > -1 || u.indexOf('Edg/') > -1,
            Firefox: u.indexOf('Firefox') > -1 || u.indexOf('FxiOS') > -1,
            'Firefox Focus': u.indexOf('Focus') > -1,
            Chromium: u.indexOf('Chromium') > -1,
            Opera: u.indexOf('Opera') > -1 || u.indexOf('OPR') > -1,
            Vivaldi: u.indexOf('Vivaldi') > -1,
            Yandex: u.indexOf('YaBrowser') > -1,
            Arora: u.indexOf('Arora') > -1,
            Lunascape: u.indexOf('Lunascape') > -1,
            QupZilla: u.indexOf('QupZilla') > -1,
            'Coc Coc': u.indexOf('coc_coc_browser') > -1,
            Kindle: u.indexOf('Kindle') > -1 || u.indexOf('Silk/') > -1,
            Iceweasel: u.indexOf('Iceweasel') > -1,
            Konqueror: u.indexOf('Konqueror') > -1,
            Iceape: u.indexOf('Iceape') > -1,
            SeaMonkey: u.indexOf('SeaMonkey') > -1,
            Epiphany: u.indexOf('Epiphany') > -1,
            360: u.indexOf('QihooBrowser') > -1 || u.indexOf('QHBrowser') > -1,
            '360EE': u.indexOf('360EE') > -1,
            '360SE': u.indexOf('360SE') > -1,
            UC: u.indexOf('UCBrowser') > -1 || u.indexOf(' UBrowser') > -1,
            QQBrowser: u.indexOf('QQBrowser') > -1,
            QQ: u.indexOf('QQ/') > -1,
            Baidu:
                u.indexOf('Baidu') > -1 ||
                u.indexOf('BIDUBrowser') > -1 ||
                u.indexOf('baiduboxapp') > -1,
            Maxthon: u.indexOf('Maxthon') > -1,
            Sogou: u.indexOf('MetaSr') > -1 || u.indexOf('Sogou') > -1,
            Liebao: u.indexOf('LBBROWSER') > -1 || u.indexOf('LieBaoFast') > -1,
            '2345Explorer':
                u.indexOf('2345Explorer') > -1 || u.indexOf('Mb2345Browser') > -1,
            '115Browser': u.indexOf('115Browser') > -1,
            TheWorld: u.indexOf('TheWorld') > -1,
            XiaoMi: u.indexOf('MiuiBrowser') > -1,
            Quark: u.indexOf('Quark') > -1,
            Qiyu: u.indexOf('Qiyu') > -1,
            Wechat: u.indexOf('MicroMessenger') > -1,
            WechatWork: u.indexOf('wxwork/') > -1,
            Taobao: u.indexOf('AliApp(TB') > -1,
            Alipay: u.indexOf('AliApp(AP') > -1,
            Weibo: u.indexOf('Weibo') > -1,
            Douban: u.indexOf('com.douban.frodo') > -1,
            Suning: u.indexOf('SNEBUY-APP') > -1,
            iQiYi: u.indexOf('IqiyiApp') > -1,
            DingTalk: u.indexOf('DingTalk') > -1,
            Huawei: u.indexOf('HuaweiBrowser') > -1 || u.indexOf('HUAWEI/') > -1,
            Vivo: u.indexOf('VivoBrowser') > -1,
            //绯荤粺鎴栧钩鍙�
            Windows: u.indexOf('Windows') > -1,
            Linux: u.indexOf('Linux') > -1 || u.indexOf('X11') > -1,
            'Mac OS': u.indexOf('Macintosh') > -1,
            Android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1,
            'HarmonyOS': u.indexOf('HarmonyOS') > -1,
            Ubuntu: u.indexOf('Ubuntu') > -1,
            FreeBSD: u.indexOf('FreeBSD') > -1,
            Debian: u.indexOf('Debian') > -1,
            'Windows Phone':
                u.indexOf('IEMobile') > -1 || u.indexOf('Windows Phone') > -1,
            BlackBerry: u.indexOf('BlackBerry') > -1 || u.indexOf('RIM') > -1,
            MeeGo: u.indexOf('MeeGo') > -1,
            Symbian: u.indexOf('Symbian') > -1,
            iOS: u.indexOf('like Mac OS X') > -1,
            'Chrome OS': u.indexOf('CrOS') > -1,
            WebOS: u.indexOf('hpwOS') > -1,
            //璁惧
            Mobile:
                u.indexOf('Mobi') > -1 ||
                u.indexOf('iPh') > -1 ||
                u.indexOf('480') > -1,
            Tablet:
                u.indexOf('Tablet') > -1 ||
                u.indexOf('Pad') > -1 ||
                u.indexOf('Nexus 7') > -1
        }
