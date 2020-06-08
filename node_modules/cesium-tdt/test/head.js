(function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined'){
        factory(exports);
    } else if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else {
        factory(global);
    }
}(this, function (exports) {
	// 登录系统域名
    var T_URL_SERVICE_URL = "https://sso.tianditu.gov.cn";
    // 个人中心域名
    var T_UC_URL = "http://uums.tianditu.gov.cn";
	// 首页地址
	var HOME_URL = "http://www.tianditu.gov.cn/";
	// 省市互通服务
	var PROVINCE_URL = "http://test.tianditu.com/";
	// 在线地图
	var MAP_URL = "http://map.tianditu.gov.cn/";
	// 综合服务
	var ZHFW_URL = "http://zhfw.tianditu.gov.cn/";
	// 手机地图
	var MOBILE_URL = "http://mobile.tianditu.gov.cn/";
	// 服务资源
	var SERVICE_URL = "http://service.tianditu.gov.cn/";
	// 地图API
	var API_URL = "http://lbs.tianditu.gov.cn/";
	// 一带一路
	var YDYL_URL = "http://ydyl.tianditu.gov.cn/";
	// 雄安新区
	var XAXQ_URL = "http://xaxq.tianditu.gov.cn/";
	// 应急服务
	var YJFW_URL = "http://yjfw.tianditu.gov.cn/";
	// 天气服务
	var WEATHER_URL = "http://weather.tianditu.com/";
	// 影像搜索
	var IMAGE_SEARCH_URL = "http://search-image.tianditu.com/";
	// 典型应用
	var APP_URL = "http://app.tianditu.gov.cn/";
	// 关于我们 
	var ABOUT_URL = "http://www.tianditu.gov.cn/about/contact.html";
	// 意见反馈
	var FEEDBACK_URL = "http://www.tianditu.gov.cn/feedback";
	// 工作动态
	var WORK_URL = "http://ngcc.cn/article/ztzl/tdtjs/";
	// 国家基础地理信息
	var NGCC_URL = "http://www.ngcc.cn/";
	
	
	// 登录处理
    // 项目域名
    var T_URL;
    // 后台登录接口
    var T_LOGIN = "";
    // 后台退出接口
    var T_LOGOUT = "";
    // 后台获取用户名信息接口
    var T_USER_INFO = "";
    // 成功获取用户信息之后的回调函数
    var callback = null;
    // 是否显示的登陆按钮
	var showlogin;
	// 需要高亮的导航条
	var active;
    // 用户信息
    var userinfo;
    
    // logo
    var LOGO_TEMPLATE = '<div class="head_left">' +
                        '   <span></span>' +
                        '   <h1>国家地理信息公共服务平台</h1>' +
                        '</div>' +
                        '<div class="head_right">' +
                        '   <div class="unlogin"><a href="javascript:void(0)" class="login">登录</a><a href="javascript:void(0)" class="reg">注册</a></div>' +
                        '   <div class="logined">'+
		                        '<ul><li class="userinfo_box">'+
		                            '<a href="javascript:void(0)" class="userinfo"></a>'+
		                        	'<ul class="user_menu"></ul>'+
		                        '</li>'+
		                         '<li><a href="javascript:void(0)" class="logout">退出</a>'+
		                    '</ul></div>'+
                        '</div>';

    // Nav导航
    var NAV_TEMPLATE =  '<div class="nav_content">' +
                            '<ul class="classify">'+
	                            '<li><a href="'+HOME_URL+'">首页</a></li>'+
	                            '<li class="electronic_map"><a href="javascript:void(0)">电子地图</a><ul><li><a href="'+MAP_URL+'">在线地图</a></li><li><a href="'+ZHFW_URL+'">专题图层</a></li><li><a href="'+MOBILE_URL+'">手机地图</a></li></ul></li>'+
	                            '<li><a href="'+SERVICE_URL+'">服务资源</a></li>'+
	                            '<li><a href="'+API_URL+'">地图API</a></li>'+
	                            '<li class="application"><a href="javascript:void(0)">专题频道</a><ul><li><a href="'+YDYL_URL+'">一带一路</a></li><li><a href="'+XAXQ_URL+'">雄安新区</a></li><li><a href="'+YJFW_URL+'">应急服务</a><a href="'+WEATHER_URL+'">天气</a></li><li><a href="'+IMAGE_SEARCH_URL+'">影像搜索</a></li></ul></li>'+
	                            '<li><a href="'+APP_URL+'">典型应用</a></li>'+
	                            '<li><a href="javascript:void(0)" class="city_hover">省市互通</a></li>'+
                            '</ul>' +
                            '<div class="city">'+
                        	'<div class="city_con">'+
//                        		'<div class="country">'+
//                        			'<div class="country_le">国家级：</div>'+
//	                				'<div class="country_rt">全国</div>'+
//                        	    '</div>'+
	                        	'<div class="province">'+
	//                        		'<div class="province_le">省级：</div>'+
	                        		'<div class="province_rt">'+
	                        			'<ul class="province_row one"></ul>'+
	                        			'<ul class="province_row two"></ul>'+
	                        			'<ul class="province_row three"></ul>'+
	                        			'<ul class="province_row four"></ul>'+
	                        			'<div class="box">'+
	                        				'<div class="arrows"></div>'+
	                        				'<div class="box_con"></div>'+
	                        			'</div>'+
	                        		'</div>'+
	                        	'</div>'+
	                        '</div>'+
                        '</div>';
     
                        
    var FOOTER_TEMPLATE =   '<div class="ask">'+
    	                  '<a href="'+ABOUT_URL+'">关于我们</a>|<a href="'+ABOUT_URL+'?type=2">服务条款</a>|<a href="'+ABOUT_URL+'?type=3">版权声明</a>|<a href="'+ABOUT_URL+'?type=4">联系我们</a>|<a href="'+FEEDBACK_URL+'">意见反馈</a>|<a href="'+WORK_URL+'" target="_blank">工作动态</a>'+
                          '</div>'+
                          '<div class="copyright"><a href="'+NGCC_URL+'" class="cop">国家基础地理信息中心</a><span>版权所有</span></div>'+
                          '<div class="number">'+
                          '<span>甲测资字1100471</span>'+
                          '<span>京ICP备12009443号-2</span>'+
                          '<span>京公网安备1101080201345号</span>'+
                          '</div>'+
                          '<div class=""><img id="imgConac" vspace="0" hspace="0" border="0" src="http://dcs.conac.cn/image/blue.png" data-bd-imgshare-binded="1"></div>';
    
    // classList IE9不兼容的
    if (!("classList" in document.documentElement)) {  
        Object.defineProperty(HTMLElement.prototype, 'classList', {  
            get: function() {  
                var self = this;  
                function update(fn) {  
                    return function(value) {  
                        var classes = self.className.split(/\s+/g),  
                            index = classes.indexOf(value);  
                          
                        fn(classes, index, value);  
                        self.className = classes.join(" ");  
                    }  
                }  
                  
                return {                      
                    add: update(function(classes, index, value) {  
                        if (!~index) classes.push(value);  
                    }),  
                      
                    remove: update(function(classes, index) {  
                        if (~index) classes.splice(index, 1);  
                    }),  
                      
                    toggle: update(function(classes, index, value) {  
                        if (~index)  
                            classes.splice(index, 1);  
                        else  
                            classes.push(value);  
                    }),  
                      
                    contains: function(value) {  
                        return !!~self.className.split(/\s+/g).indexOf(value);  
                    },  
                      
                    item: function(i) {  
                        return self.className.split(/\s+/g)[i] || null;  
                    }  
                };  
            }  
        });  
    } 
    
    // 文档加载完毕执行的函数
    var headReady = function () {
        // 头部logo 加标题
        var headCommon = document.createElement('div');
        headCommon.className = 'head_common';
        headCommon.innerHTML = LOGO_TEMPLATE;
        // 导航
        var navCommon = document.createElement('div');
        navCommon.className = 'nav_common';
        navCommon.innerHTML = NAV_TEMPLATE;
        //底部
        var footerCommon = document.createElement('div');
        footerCommon.className = 'footer_common';
        footerCommon.innerHTML = FOOTER_TEMPLATE;
        // 头部html片段
        var headFragment = document.createDocumentFragment();
        headFragment.appendChild(headCommon);
        headFragment.appendChild(navCommon);
        //底部
        var footerFragment = document.createDocumentFragment();
        footerFragment.appendChild(footerCommon);

        // 追加头部
        var body = document.body;
        body.style.minHeight = window.innerHeight + 'px';
        body.style.height = '';
        body.style.position = 'relative';
        body.insertBefore(headFragment, body.firstChild);
		
		var lastChild = getLastChild();
		// lastChild.style.paddingBottom = '180px';
        // 追加版权
        body.insertBefore(footerFragment, lastChild.nextSibling);

        // 事件注册
        signInEventRegister();
        
        // 获取用户信息
        getUserName();
        
        // 获取省市互通json数据
        getProvinceJson();
    }
	
	/**
	 *获取最后一个有效的dom节点 
	 */
	function getLastChild(){
		var lastChild = '';
		var childNodes = document.body.childNodes;
		var len = childNodes.length;
		for(var c = len-1; c >= 0; c--){
			var child = childNodes[c];
			// 不是文本节点，不是脚本
			if(child.nodeName.toLowerCase() != '#text' 
				&& child.nodeName.toLowerCase() != 'script'
				&& child.nodeName.toLowerCase() != '#comment'){
				// var position = getComputedStyle(child, null)['position'];
				// if(position != 'absolute' && position != 'fixed'){
					lastChild = child;
					break;
				// }
			}
		}
		return lastChild;
	}
	
    // 登录事件注册
    function signInEventRegister() {
        // 点击登录按钮
        var login = document.querySelector('.head_common .login');
        login.addEventListener('click', loginClick);

        // 点击注册按钮
        var register = document.querySelector('.head_common .reg');
        register.addEventListener('click', registerClick);
        
        // 点击用户信息按钮
        userinfo = document.querySelector('.head_common .logined .userinfo');
        userinfo.addEventListener('click', userInfo);
        
        // 点击用户退出按钮
        var logout = document.querySelector('.head_common .logined .logout');
        logout.addEventListener('click', loginoutClick);
        
        // 省市互通悬浮
        var provinceNav = document.querySelector('.nav_common .city_hover');
        provinceNav.addEventListener('mouseenter', provinceNavMouseEnter);
        provinceNav.addEventListener('mouseleave', provinceNavMouseLeave);
        
        var city = document.querySelector('.nav_common .city');
        city.addEventListener('mouseleave', cityMouseLeave);
        
        // 不显示登陆按钮
        if(!showlogin){
        	var headRight = document.querySelector('.head_common .head_right');
        	headRight.parentNode.removeChild(headRight);
        }
        
        // 高亮相应的导航按钮
        if(active){
        	var lis = document.querySelectorAll('.nav_common .classify li');
        	for(var l=0;l<lis.length;l++){
        		var li = lis[l];
        		var text = li.innerText;
        		if(active == text){
        			li.classList.add('active');
        			break;
        		}
        	}
        }
    }
	
    // 获取用户信息
    function getUserName () {
    	if(!showlogin){
    		return;
    	}
        // 先用程序进行登录一次，进行session同步
        var url = window.location.href;
        var success = HOME_URL + "static/html/success.html";
        url = T_URL + T_LOGIN + "?url=" + encodeURIComponent(encodeURIComponent(url))
        		+"&success=" + encodeURIComponent(encodeURIComponent(success));

        var iframe = document.createElement("iframe");
        iframe.src = url + "&i="+new Date().getTime();
        iframe.style.display="none";
        
        window.addEventListener('message',function(e){
	       var origin = e.origin;
	       if (HOME_URL.indexOf(origin) > -1){
	    	  var data = e.data;
	          if (data == 'success'){
	            getUserInfo();
	          }
	       }
	    }, false);

        document.body.appendChild(iframe);
        function getUserInfo(){
            document.body.removeChild(iframe);
            // 删除多余的iframe
            var url = T_URL + T_USER_INFO;
            ajax(url, function (userInfo) {
                var userInfo = JSON.parse(userInfo);
                var username = userInfo.username;
                if (username){
                    var unlogin=document.querySelector('.head_common .unlogin');
                    var logined=document.querySelector('.head_common .logined');
                    unlogin.style.display='none';
                    logined.style.display='block';
                    userinfo.innerHTML= username;
                } else {
                    userInfo = {};
                }
                if (callback){
                    callback(userInfo);
                }
            });
        }
    }

    // 点击注册
    function registerClick () {
	    var url = T_UC_URL + '/register';
	    window.open(url, '_blank');
    }

    // 点击登录
    function loginClick () {
        var url = window.location.href;
        url = T_URL + T_LOGIN + "?url=" + encodeURIComponent(encodeURIComponent(url));
        window.location.href = url;
    }
	
	 // 点击退出
    function loginoutClick () {
        var url = T_URL + T_LOGOUT + "?url=" + T_URL;
        window.location.href = T_URL_SERVICE_URL+"/logout?service="+url;
    }
    
    function provinceNavMouseEnter () {
    	var city = document.querySelector('.nav_common .city');
    	city.style.display = 'block';
    	this.style.background="#1c528e";
    }
    
    function provinceNavMouseLeave (evt) {
    	var city = document.querySelector('.nav_common .city');
    	var toElement = evt.relatedTarget || evt.toElement;
    	if(contains(toElement, city)){
    		return;
    	}
    	city.style.display = 'none';
    	var provinceNav = document.querySelector('.nav_common .city_hover');
    	provinceNav.style.background="";
    }
    
    function cityMouseLeave() {
    	var city = document.querySelector('.nav_common .city');
    	city.style.display = 'none';
    	var provinceNav = document.querySelector('.nav_common .city_hover');
    	provinceNav.style.background="";
    }
    
    // 查看用户信息
    function userInfo () {
        var url = T_UC_URL + '/personalInfo';
        window.open(url, '_blank');
    }

    // 原生ajax
    function ajax (url, callback){
        //步骤一:创建异步对象
        var ajax = new XMLHttpRequest();
        //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数,动态的传递参数starName到服务端
        if (url.indexOf('?') > -1) {
            url = url + '&i='+new Date().getTime();
        } else {
            url = url + '?i='+new Date().getTime();    
        }
        
        ajax.open('get', url);
        //步骤三:发送请求
        ajax.send();
        //步骤四:注册事件 onreadystatechange 状态改变就会调用
        ajax.onreadystatechange = function () {
            if (ajax.readyState==4 &&ajax.status==200) {
                //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
                callback(ajax.responseText);
            }
        }
    }
	
	// 获取省市互通json
    function getProvinceJson(){
        var id = "provinceCommunication";
        var scriptTag = document.getElementById(id);
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        if (scriptTag)
          oHead.removeChild(scriptTag);
        oScript.id = id;
        oScript.type = "text/javascript";
        oScript.src = PROVINCE_URL+'tdthome/province?callback=renderProvinceInfo';
        oHead.appendChild(oScript);
        // 加载完毕移除标签
        oScript.onload=function(){
          oHead.removeChild(oScript);
        }
    }
	
	var provinceCache = {};
	// 渲染省份数据
	function renderProvince (provinces) {
		// 省份第一行
	  var lineOne=document.querySelector('.nav_common .province_row.one');
	  // 省份第二行
	  var lineTwo=document.querySelector('.nav_common .province_row.two');
	  // 省份第三行
	  var lineThree=document.querySelector('.nav_common .province_row.three');
	  // 省份第四行
	  var lineFour=document.querySelector('.nav_common .province_row.four');
	  // 每一行填充10个省份
	  var liHtml = '';
	  for(var i=0,len=provinces.length;i<len;i++){
	  	var province = provinces[i];
	  	var name = province['@name'].replace('天地图•','');
	  	var url = province['@url'];
	  	liHtml+='<li><a href="'+url+'" target="_blank">'+name+'</a></li>';
	  	if(i==9){
      		lineOne.innerHTML=liHtml;
      		liHtml = '';
      	}else if(i==19){
      		lineTwo.innerHTML=liHtml;
      		liHtml = '';
      	}else if(i==29){
      		lineThree.innerHTML=liHtml;
      		liHtml = '';
      	}else if(i==len-1){
      		lineFour.innerHTML=liHtml;
      		liHtml = '';
      	}
      	// 缓存起来，遍历下属市县时候使用
      	provinceCache[name]={
      		city:province.city,
      		county:province.county
      	}
	  }
	}
	
	// 鼠标悬浮省份，渲染该省份的下属市县
	function provinceMouseEnter(evt) {
		var city, county, subs=[];
		// 当前悬浮的省份
		var li = evt.target;
		var text = li.innerText;
		// 便利寻找子省份
		var provinceObj = provinceCache[text];
		// 市存在
		if(provinceObj && provinceObj.city){
			city = provinceObj.city;
			// 是数组
			if(Object.prototype.toString.call(city).indexOf('Array') > -1){
				subs = city;
			// 是单个对象
			} else {
				subs.push(city);
			}
		}
		// 县存在
		if(provinceObj && provinceObj.county){
			county = provinceObj.county;
			// 是数组
			if(Object.prototype.toString.call(county).indexOf('Array') > -1){
				subs = subs.concat(county);
			// 是单个对象
			} else {
				subs.push(county);
			}
		}
		// 渲染市县
		var liHtml = '';
		for(var s=0,len=subs.length;s<len;s++){
			var sub = subs[s];
			var name = sub['@name'].replace('天地图•','');
		  	var url = sub['@url'];
		  	liHtml+='<li><a href="'+url+'" target="_blank">'+name+'</a></li>';
		}
		// 没有下属市县，直接退出
		if(liHtml == ''){
			return;	
		}
		// 弹出框
		var box = document.querySelector('.nav_common .box');
		var box_con=document.querySelector('.nav_common .box .box_con');
		box_con.innerHTML = liHtml;
		box.style.display = 'block';
		// 父元素
		var parentNode = li.parentNode;
		// 父元素的兄弟元素
		var nextSibling = parentNode.nextSibling;
		// 祖先元素
		var grandPaNode = parentNode.parentNode;
		// 元素的下面插入弹出框
		grandPaNode.insertBefore(box, nextSibling);
		// 移动指示箭头 
		var arrows=document.querySelector('.nav_common .arrows');
		var awidth = li.firstChild.offsetWidth;
		arrows.style.left = li.index%10*75+awidth/2-7+'px';
	}
	
	// 鼠标离开省份，隐藏弹出框
	function provinceMouseLeave (evt) {
		var box = document.querySelector('.nav_common .box');
		var toElement = evt.relatedTarget || evt.toElement;
		if(contains(toElement, box)){
			return;
		}
		var box_con=document.querySelector('.nav_common .box .box_con');
		box_con.innerHTML = '';
		box.style.display = 'none';
	}
	
	function boxMouseLeave(evt){
		var toElement =evt.relatedTarget || evt.toElement;
		var box_con=document.querySelector('.nav_common .box .box_con');
		box_con.innerHTML = '';
		this.style.display = 'none';
	}
	
	function contains(ele, target){
	    //ele是内部元素，target是你想找到的包裹元素
	    if(!ele || ele === document) return false;
	    return ele === target ? true : contains(ele.parentNode,target);
	}
	// 渲染省市互通的信息
    window.renderProvinceInfo = function (result){
		// 渲染省份
	  	renderProvince(result);
	  	// 省份悬浮事件，出现下属市县
		var lis = document.querySelectorAll('.nav_common .province_row>li');
		// 循环监听鼠标移动事件
		for(var l = 0; l < lis.length; l++){
			lis[l].index = l;
			lis[l].addEventListener('mouseenter', provinceMouseEnter);
			lis[l].addEventListener('mouseleave', provinceMouseLeave);
		}
		
		var box=document.querySelector('.nav_common .box');
		box.addEventListener('mouseleave', boxMouseLeave);
    }
    

    // 对外提供的配置接口
    exports.loginConfiguration = function (config) {
    	if(config){
    		T_URL = config.T_URL;
	        T_LOGIN = config.T_LOGIN;
	        T_LOGOUT = config.T_LOGOUT;
	        T_USER_INFO = config.T_USER_INFO;
	        showlogin = config.showlogin;
	        active = config.active;
	        callback = config.callback;
    	}
        
        if (document.readyState == 'complete'){
            setTimeout(headReady, 1);
        } else {
            document.addEventListener("DOMContentLoaded", headReady, false);
        }
    }
}));