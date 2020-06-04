/*
*   设置http请求头信息
*/
judgerApp.config(function($httpProvider) {
    $httpProvider.defaults.headers.common = {
        'sid':sid,
        'aid':aid,
        'ver':ver
    }
    $httpProvider.defaults.transformRequest = function(obj){  
        var str = [];  
        for(var p in obj){  
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));  
        }  
        return str.join("&");  
    }  
    $httpProvider.defaults.headers.post = {  
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'  
    }
});

