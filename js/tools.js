/**
 * Created by ruixin on 2016-6-30.
 */
    var Tools ={

        //获取dom节点 # .
        getDOM:function(args){

            var childElements = [];
            if (args.indexOf(' ') != -1) {
                var elements = args.split(' ');			//把节点拆开分别保存到数组里
                            //存放临时节点对象的数组，解决被覆盖的问题
                var node = [];								//用来存放父节点用的
                for (var i = 0; i < elements.length; i ++) {
                    if (node.length == 0) node.push(document);		//如果默认没有父节点，就把document放入

                    switch (elements[i].charAt(0)) {
                        case '#' :
                            childElements = [];				//清理掉临时节点，以便父节点失效，子节点有效
                            childElements.push(Tools.getID(elements[i].substring(1)));
                            node = childElements;		//保存父节点，因为childElements要清理，所以需要创建node数组

                            break;
                        case '.' :
                            childElements = [];
                            for (var j = 0; j < node.length; j ++) {

                                var temps = Tools.getClass(elements[i].substring(1), node[j]);

                                for (var k = 0; k < temps.length; k ++) {
                                    childElements.push(temps[k]);
                                }
                            }

                            node = childElements;
                            break;
                        default :
                            childElements = [];
                            for (var j = 0; j < node.length; j ++) {
                                var temps = Tools.getTagName(elements[i], node[j]);
                                for (var k = 0; k < temps.length; k ++) {
                                    childElements.push(temps[k]);
                                }
                            }
                            node = childElements;
                    }
                }
                this.elements = childElements;
            } else {

                switch (args.charAt(0)) {
                    case '#' :
                        childElements.push(Tools.getID(args.substring(1)));
                        break;
                    case '.' :
                        childElements.push(Tools.getClass(args.substring(1)));
                        break;
                    default :
                        childElements.push(Tools.getTagName(args));
                }
            }

            if(childElements.length>1) return childElements;
            else if(childElements.length == 1) return childElements[0];
            else throw new Error('no node is find');


        },
        getID:function(id){
            return document.getElementById(id);
        },
        getTagName:function(tag, parentNode){
            var node = null;
            var temps = [];
            if (parentNode != undefined) {
                node = parentNode;
            } else {
                node = document;
            }
            var tags = node.getElementsByTagName(tag);
            for (var i = 0; i < tags.length; i ++) {
                temps.push(tags[i]);
            }
            return temps;
        },
        getClass:function(className, parentNode){

            var node = null;
            var temps = [];
            if (parentNode != undefined) {
                node = parentNode;
            } else {
                node = document;
            }

            var all = node.getElementsByTagName('*');
            for (var i = 0; i < all.length; i ++) {
                if ((new RegExp('(\\s|^)' +className +'(\\s|$)')).test(all[i].className)) {
                    temps.push(all[i]);

                }

            }
            return temps;
        },

        //获取dom节点的x,y,w,h
        getDOMClient:function(div){
            var rect = div.getBoundingClientRect();
            var x = rect.left|0;
            var y = rect.top|0;
            var w = (rect.width||rect.right - x)|0;
            var h = (rect.height||rect.bottom - y)|0;

            return {x:x,y:y,w:w,h:h};
        },
        //设置样式
        setDivStyle:function(div,obj){
            for(var attr in obj){
                div.style[attr] = obj[attr];
            }
        },
        //获取div样式
        getDivStyle:function(div,att){

            var style = null;
            //如果div中没有写样式，在非IE中会返回默认样式，在ie中返回auto字符串
            if (window.getComputedStyle) {
                style = window.getComputedStyle(div, null);    // 非IE
            } else {
                style = div.currentStyle;  // IE
            }
            return style[att];
        },
        //获取键
        getKey:function(obj){

            var key = '';
            for(var str in obj){

                key = str;
            }
            return key;
        },
        //获取对象的值
        getValue:function(obj){

            var value = '';
            for(var str in obj){

                value = obj[str];
            }
            return value;

        },
        //给css增加一个规则
        addRule:function(sheet, selectorText, cssText, position){

            if (sheet.insertRule) {
                sheet.insertRule(selectorText + "{" + cssText + "}", position);
            } else if (sheet.addRule) {
                sheet.addRule(selectorText, cssText, poistion);
            }

        },
        //返回本地时间
        getLocalTime:function(){

            var checkTime = function(a){
                if(a < 10) a = "0" + a;
                else a = a;
                return a;
            }
            var str = "";
            var d = new Date();
            var m = d.getMonth() + 1;
            var r = d.getDate();
            var s = d.getHours();
            var f = d.getMinutes();
            var mm = d.getSeconds();
            str = (d.getYear() + 1900) + "-" +  checkTime(m) + "-" + checkTime(r) + "   " + checkTime(s) + ":" + checkTime(f) + ":" + checkTime(mm);
            return str;

        },
        //获取url中参数 GetParamsString('id')
        getParamsString:function (name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  decodeURI(r[2]); return null;
        },
        //获取浏览器类型
        getBrowser:function(){
            var agent = navigator.userAgent.toLowerCase() ;
            var regStr_ie = /msie [\d.]+;/gi ;
            var regStr_ff = /firefox\/[\d.]+/gi
            var regStr_chrome = /chrome\/[\d.]+/gi ;
            var regStr_saf = /safari\/[\d.]+/gi ;
            //IE
            if(agent.indexOf("msie") > 0) return agent.match(regStr_ie) ;
            //firefox
            if(agent.indexOf("firefox") > 0)  return agent.match(regStr_ff) ;
            //Chrome
            if(agent.indexOf("chrome") > 0) return agent.match(regStr_chrome) ;
            //Safari
            if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) return agent.match(regStr_saf) ;
        },
        //判断时候是微信端
        isWX:function (){
            var ua = navigator.userAgent.toLowerCase();
            if(ua.match(/MicroMessenger/i)=="micromessenger") {
                return true;
            } else {
                return false;
            }
        },
        //判断是否是手机端
        isMobile:function() {
            return navigator.userAgent.match(/android|iphone|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i)
        },

        //跨浏览器获取视口大小
        getInner:function () {
            if (typeof window.innerWidth != 'undefined') {
                return {
                    width : window.innerWidth,
                    height : window.innerHeight
                }
            } else {
                return {
                    width : document.documentElement.clientWidth,
                    height : document.documentElement.clientHeight
                }
            }
        },

        //跨浏览器获取滚动条位置
        getScroll:function () {
            return {
                top : document.documentElement.scrollTop || document.body.scrollTop,
                left : document.documentElement.scrollLeft || document.body.scrollLeft
            }
        },

        //注册事件
        //跨浏览器添加事件绑定
        addEventId:0,
        addEvent:function(obj, type, fn) {

            var same = function(es, fn){
                for (var i in es) {
                    if (es[i] == fn) return true;
                }
                return false;
            }

            //IE阻止默认行为
            var preventD = function () {
                this.returnValue = false;
            };

            //IE取消冒泡
            var stopProp = function () {
                this.cancelBubble = true;
            };

            //把IE常用的Event对象配对到W3C中去
            var fixEvent = function (event) {
                event.preventDefault = preventD;
                event.stopPropagation = stopProp;
                event.target = event.srcElement;
                return event;
            };

            var exec = function (event) {
                var e = event || fixEvent(window.event);
                var es = this.events[e.type];
                for (var i in es) {
                    es[i].call(this, e);
                }
            };

            if (typeof obj.addEventListener != 'undefined') {
                obj.addEventListener(type, fn, false);
            } else {
                //创建一个存放事件的哈希表(散列表)
                if (!obj.events) obj.events = {};
                //第一次执行时执行
                if (!obj.events[type]) {
                    //创建一个存放事件处理函数的数组
                    obj.events[type] = [];
                    //把第一次的事件处理函数先储存到第一个位置上
                    if (obj['on' + type]) obj.events[type][0] = fn;
                } else {
                    //同一个注册函数进行屏蔽，不添加到计数器中
                    if (same(obj.events[type], fn)) return false;
                }
                //从第二次开始我们用事件计数器来存储
                obj.events[type][Tools.addEventId++] = fn;
                //执行事件处理函数
                obj['on' + type] = exec;
            }
        },
        //跨浏览器删除事件
        removeEvent:function(obj, type, fn) {
            if (typeof obj.removeEventListener != 'undefined') {
                obj.removeEventListener(type, fn, false);
            } else {
                if (obj.events) {
                    for (var i in obj.events[type]) {
                        if (obj.events[type][i] == fn) {
                            delete obj.events[type][i];
                        }
                    }
                }
            }
        },

        floatNumToFixed : function(v,fixCount){
            var r = parseInt(v);
            if(r==v){
                return r
            }else{
                return parseFloat(v).toFixed(fixCount);
            }
        },
        floatNumToGood : function(v,count){
            var r = parseInt(v);
            if(r==v){
                return r
            }else{
                var f = parseFloat(v);
                if(f<1){
                    return f.toFixed(count);
                }else{
                    return f.toPrecision(count)
                }
            }
        },

        //处理长字符串，将其过多的字符用其他字符替代，比如，字符过长，将多余的用...替代
        doLongString:function(str,upCount,count,repStr){
            if(str && str.length>upCount)
            {
                var s = str.substr(0,upCount-count);
                return s+repStr;
            }
            return str;
        },
        //获取区间随机数 isI 为是否取整
        getRandomNum:function(min,max,isI){
            min = min||0;
            max = max ||100;
            isI = typeof isI != 'undefined'?isI:false;
            var n = Math.random()*(max - min) + min;
            n = isI?parseInt(n):n;
            return n;
        },
        //比较两个对象是否相等
        equalObj:function(objA, objB) {
            if (typeof arguments[0] != typeof arguments[1])
                return false;

            //数组
            if (arguments[0] instanceof Array)
            {
                if (arguments[0].length != arguments[1].length)
                    return false;

                var allElementsEqual = true;
                for (var i = 0; i < arguments[0].length; ++i)
                {
                    if (typeof arguments[0][i] != typeof arguments[1][i])
                        return false;

                    if (typeof arguments[0][i] == 'number' && typeof arguments[1][i] == 'number')
                        allElementsEqual = (arguments[0][i] == arguments[1][i]);
                    else
                        allElementsEqual = arguments.callee(arguments[0][i], arguments[1][i]);            //递归判断对象是否相等
                }
                return allElementsEqual;
            }

            //对象
            if (arguments[0] instanceof Object && arguments[1] instanceof Object)
            {
                var result = true;
                var attributeLengthA = 0, attributeLengthB = 0;
                for (var o in arguments[0])
                {
                    //判断两个对象的同名属性是否相同（数字或字符串）
                    if (typeof arguments[0][o] == 'number' || typeof arguments[0][o] == 'string')
                        result = eval("arguments[0]['" + o + "'] == arguments[1]['" + o + "']");
                    else {
                        //如果对象的属性也是对象，则递归判断两个对象的同名属性
                        //if (!arguments.callee(arguments[0][o], arguments[1][o]))
                        if (!arguments.callee(eval("arguments[0]['" + o + "']"), eval("arguments[1]['" + o + "']")))
                        {
                            result = false;
                            return result;
                        }
                    }
                    ++attributeLengthA;
                }

                for (var o in arguments[1]) {
                    ++attributeLengthB;
                }
                //如果两个对象的属性数目不等，则两个对象也不等
                if (attributeLengthA != attributeLengthB)
                    result = false;
                return result;
            }
            return arguments[0] == arguments[1];
        },
        //删除左后空格
        trim:function (str) {
            return str.replace(/(^\s*)|(\s*$)/g, '');},
        //去除数组中重复对象
        unique:function (arr) {
            var result = [], hash = {};
            for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                if (!hash[elem]) {
                    result.push(elem);
                    hash[elem] = true;
                }
            }
            return result;
        },
        //将数字转换为大写的数字
        doNumberRatio:function(num,unit){
            if((typeof  unit) == "undefined" || unit == null)unit = "";
            if(num<1000)
            {
                return num + unit;
            }else if(num>=1000 && num<1000000)
            {
                return (num/1000).toFixed(0) + "ǧ" + unit;
            }else if(num>=1000000 && num<1000000000)
            {
                return (num/1000000).toFixed(0) + "����" + unit;
            }else if(num>=1000000000 && num<1000000000000)
            {
                return (num/1000000000).toFixed(0) + "ʮ��" + unit;
            }
        },
        //生成随机字符串
        getRandomStr:function (len) {
            var str = "";
             for( ; str.length < len; str  += Math.random().toString(36).substr(2));
            return  str.substr(0, len);
        },
        //生成随机颜色
        randomColor:function(){

            var colorStr=Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase();
            return "#"+"000000".substring(0,6-colorStr)+colorStr;

        },
        //将颜色加深 level为加深颜色的等级
        getDarkColor:function (color, level) {
            var rgbc = Tools.HexToRgb(color);
            for (var i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));
            return Tools.RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
        },
        //将Hex转换为rgb
        HexToRgb:function (str) {
            str = str.replace("#", "");
            //match得到查询数组
            var hxs = str.match(/../g);
            for (var i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
            return hxs;
        },
        //将rgb颜色值为a,b,c转化成hex颜色值
        RgbToHex:function (a, b, c) {
            var hexs = [a.toString(16), b.toString(16), c.toString(16)];
            for (var i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = "0" + hexs[i];
            return "#" + hexs.join("");
        },
        //转换对象
        delegate:function(c,a){
            var b=a||window;
            if(arguments.length>2)
            {
                var d=Array.prototype.slice.call(arguments,2);
                return function()
                {
                    var e=Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e,d);
                    return c.apply(b,e);
                }
            }else
                return function()
                {
                    return c.apply(b,arguments);
                }
        },
        //createjs 中给文本换行
        wrapText : function(cast, _displayTxt,nStr){
            var nn = nStr?nStr:'\n';
            var i=0;
            var tempTxt = new createjs.Text('', _displayTxt.font);

            tempTxt.linewidth = null;
            var len=cast.length;
            var _str='',output='';
            var splitList=[0];

            var txtTotalHeight=0;
            tempTxt.text=cast[0];
            var tempHeight=tempTxt.getMeasuredHeight();

            tempTxt.text='';

            try{
                for(i =0;i<len;i++)
                {
                    _str+=cast[i];
                    tempTxt.text=_str;
                    if(tempTxt.getMeasuredWidth()>=_displayTxt.width){
                        splitList.push(i);
                        //alert('_width�򳬤�����: '+_str );
                        _str='';
                        tempTxt.lineWidth = null;
                        i--;
                    }
                }
            }catch(error){
                alert(error);
            }

            for(i =0;i<splitList.length;i++){
                if(i==splitList.length){
                    output+=cast.slice(splitList[i]);
                }else
                {
                    if(txtTotalHeight+tempHeight>_displayTxt.height)break;
                    output+=cast.slice(splitList[i],splitList[i+1])+nn;
                    txtTotalHeight+=tempHeight;
                }
            }
            tempTxt=null;
            _displayTxt.text=output;
            //return output;
        },
        // 加载图片
        preloadImg:function(){

            var imageObj =  {};
            var root = "assets/", count = 0, num = 0;

            this.loadImage = function(images,callback){

                count = images.length;
                //console.log(callback);

                for(var i = 0; i < count; i++)
                {
                    var image = new Image();
                    image.src = images[i];

                    //console.log(images[i]);

                    image.onload = function()
                    {
                        var name = this.src.split( '/' );
                        name = name[ name.length - 1 ].split( '.' )[0];
                        imageObj[name] = {
                            obj: this,
                            width: this.width,
                            height: this.height
                        }
                        num += 1;
                        if ( count === num ){
                            callback && callback(imageObj);
                            //console.log("load ok");
                        }
                        this.onload = null;
                    }
                }
            }

            //返回回调和图片信息
            return {loadImg:this.loadImage,imageObj:imageObj};

        },
        //操作cookie
        cookie:function(key,value,time){
            var l = arguments.length;

            var getCookie = function(a){
                var arr,reg=new RegExp("(^| )"+a+"=([^;]*)(;|$)");
                if(arr=document.cookie.match(reg))
                    return unescape(arr[2]);
                else
                    return null;
            }

            var setCookie = function(a,b,c){
                c = c||10;
                var d = new Date();   //初始化时间
                d.setTime(d.getTime() + c * 1000);   //时间
                document.cookie = a+"="+b+";expires="+d.toGMTString()+";path=/";

            }

            if(l == 1){
                return getCookie(key);
            }
            else{
                setCookie(key,value,time)
            }
        },

        //ajax //obj = {data:'',url = '',mothed:'',callback:,async:'',timeout};
        ajax:function(obj){

            var xmlhttp = null;
            var createXMLHttp = function(){

                if (window.XMLHttpRequest)
                {// code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp=new XMLHttpRequest();
                }
                else
                {// code for IE6, IE5
                    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                }
                return xmlhttp;
            };

            //解析参数
            var paramsData = function(data){

                if(!data) return '';
                var arr = [];
                for(var str in data){
                    arr.push( encodeURIComponent(str) + '=' + encodeURIComponent(data[str]));
                }
                return arr.join('&');
            }

            var callBack = function(){
                if(xhr.status == 200){
                    obj.callback&&obj.callback(xhr.responseText);
                    xmlhttp = null;
                }
            }

            var xhr = createXMLHttp();

            if(obj.async){
                xhr.onreadystatechange = function(){
                    if(xhr.readyState == 4) callBack();
                }
            }


            var url = obj.url;
            var mothed = obj.mothed;
            var timeout = timeout||10;

            if(mothed === 'get') url += '?r=' + Math.random() + '&' + paramsData(obj.data);
            xhr.open(mothed,url,obj.async);
            if(mothed === 'post'){
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                xhr.send(obj.data);
            }
            else{
                xhr.send(null);
            }
            //到时间后取消请求
            var t = setTimeout( function () {
                xhr.abort();
                clearTimeout(t);
            },timeout);

            console.log(url);
            //同步的话
            if(!obj.async)  callBack();

        },
        //createjs加载资源
        loadPlate:function() {
            var dataArr = [];
            var index = 0;
            var callBack;
            var scrArr;
            var request;
            var dataLoader;
            var loadData = function(arr,call)
            {
                if(dataLoader==null)
                {
                    dataLoader = new createjs.LoadQueue(true);
                    dataLoader.on("fileprogress", handlerProgress);
                    dataLoader.on("complete", handlerComplete);
                    dataLoader.on("fileload", handlerFileloaded);
                }
                callBack = call;
                //dataLoader.loadFile({src:url});
                dataLoader.loadManifest(arr, true);

            }

            var handlerProgress = function(event)
            {

            }

            var handlerComplete = function(event)
            {
                callBack(dataArr);
            }

            var handlerFileloaded = function(event)
            {
                var obj = {};

                //var jsonObj =
                obj.source = event.result;
                obj.id = event.item.id;
                //console.log(obj.id);
                dataArr.push(obj);
            }

            var ajaxLoadData = function(arr,call)
            {
                if(arr.length==null||arr.length ==0)return;
                dataArr = [];
                scrArr = arr;
                callBack = call;
                index =0;
                autoLoad();
            }
            var autoLoad = function()
            {
                //jQuery.post(scrArr[index].src,scrArr[index].data,this.loadDataComplete(data),"json")
                //console.log(scrArr[index].src);
                request = $.ajax({
                    url: scrArr[index].src,
                    type: "GET",
                    async: true,
                    dataType: "json",
                    //contentType: "charset=utf-8",
                    cache: false,
                    onreadystatechange:true,
                    success: loadDataComplete,
                    error: loadDataError,
                    complete :function (XHR, TS) {
                        //console.log("!!!!!!!!!");
                        XHR = null;
                        request = null
                    }
                });
            }

            var loadDataComplete = function(data)
            {
                var obj = {};
                //var obk = JSON.parse(data);
                obj.source = data;
                obj.id = scrArr[index].id;
                dataArr.push(obj);
                request = null;
                if(index==scrArr.length-1)
                {
                    callBack(dataArr);
                    callBack = null;
                    return;
                }
                index++;
                autoLoad();
            }
            var loadDataError = function(XHR,textStatus,err)
            {
                if(index==scrArr.length-1)
                {
                    callBack(dataArr);
                    callBack = null;
                    return;
                }
                XHR = null;
                request = null;
                index++;
                autoLoad();
            }
            return{
                loadData:loadData,
                ajaxLoad:ajaxLoadData,
            }
        }(),
        //容器自适应
        getZoomByRate : function(){

            // ��������
            var isZoom=false;//�Ƿ�����
            var srcWidth=0;//ԭʼ��
            var srcHeight=0;//ԭʼ��
            var maxWidth=0;//���ƿ�
            var maxHeight=0;//���Ƹ�
            var newWidth=0;//�¿�
            var newHeight=0;//�¸�

            var ZoomByRate = function(_srcWidth,_srcHeight,_maxWidth,_maxHeight){
                srcWidth=_srcWidth;//���ԭʼ���
                srcHeight=_srcHeight;//���ԭʼ�߶�
                maxWidth=_maxWidth;//����޶����
                maxHeight=_maxHeight;//����޶��߶�
                if(srcWidth>0 && srcWidth>0){//���ͼƬ�߶��Ƿ�����
                    isZoom=true;//�߿�������ִ�����Ŵ���
                }else{
                    isZoom=false;//������������0
                }
                conductimg();//ִ�������㷨
            }

            var conductimg = function(){
                if(isZoom){//����߿���������ʼ����
                    if(srcWidth/srcHeight>=maxWidth/maxHeight){
                        //�Ƚϸ߿������ȷ���Կ�����Ǹ�Ϊ��׼���м��㡣
                        if(srcWidth>maxWidth){//�Կ�Ϊ��׼��ʼ���㣬
                            //����ȴ����޶���ȣ���ʼ����
                            newWidth=maxWidth;
                            newHeight=(srcHeight*maxWidth)/srcWidth
                        }else{
                            //�����С���޶���ȣ�ֱ�ӷ���ԭʼ��ֵ��
                            newWidth=srcWidth;
                            newHeight=srcHeight;
                        }
                    }else{
                        if(srcHeight>maxHeight){//�Ը�Ϊ��׼�����м���
                            //���߶ȴ����޶��߶ȣ���ʼ���š�
                            newHeight=maxHeight;
                            newWidth=(srcWidth*maxHeight)/srcHeight
                        }else{
                            //���߶�С���޶��߶ȣ�ֱ�ӷ���ԭʼ��ֵ��
                            newWidth=srcWidth;
                            newHeight=srcHeight;
                        }
                    }
                }else{//������������0
                    newWidth=0;
                    newHeight=0;
                }
            }

            var getWidth = function(){//���ش����Ŀ�ȣ���ȷ��2��С����
                var num = new Number(newWidth);
                return num.toFixed(2);
            }

            var getHeight = function(){//���ش����ĸ߶ȣ���ȷ��2��С����
                var num = new Number(newHeight);
                return num.toFixed(2);
            }

            return{
                ZoomByRate:ZoomByRate,
                getWidth:getWidth,
                getHeight:getHeight
            }
        }(),


    }

