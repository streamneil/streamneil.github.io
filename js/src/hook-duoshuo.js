function hookTemplate(){var r=DUOSHUO.templates.post;DUOSHUO.templates.post=function(o,e){var a=r(o,e),s=o.post.agent,e=o.post.author.user_id,o="";return e&&e==CONFIG.duoshuo.userId&&(o='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"),s&&/^Mozilla/.test(s)?a.replace(/<\/div><p>/,o+getAgentInfo(s)+"</div><p>"):a}}function getAgentInfo(o){$.ua.set(o);var e="Unknown",a=$.ua,s=(r=null!==(n=window.navigator.userAgent).match(/iPad/i),i=new RegExp(["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"].join("|"),"i"),!r&&n.match(i)?"<br><br>":'<span class="duoshuo-ua-separator"></span>'),o=a.os.name||e,r=a.os.version||e,n=a.browser.name||e,i=a.browser.version||e,e=(a={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}}).os[o.toLowerCase()],a=a.browser[(a=n.toLowerCase()).match(/WeChat/i)?"wechat":a.match(/QQBrowser/i)?"qq":a];return s+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+o.toLowerCase()+'"><i class="fa fa-'+e+'"></i>'+o+" "+r+"</span>"+s+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+n.toLowerCase()+'"><i class="fa fa-'+a+'"></i>'+n+" "+i+"</span>"}"undefined"!=typeof DUOSHUO?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;