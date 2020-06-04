$(document).ready(function(){
	localStorage.removeItem("employee");
	var un = localStorage.getItem("un");
	var up = localStorage.getItem("up");
	if(un!=null || up!=null){
		$("#saveusername").attr("checked",'true');
		$("#savepassword").attr("checked",'true');
	}
	if(un!=null){
		document.getElementById("username").value=un;
	}
	if(up!=null){
		document.getElementById("password").value=up;
	}
});

/**
 * 员工登陆
 * @param un 用户名 up 密码
 * @returns {user}
 */
function mylogin(){
    var username = $.trim($('#username').val());
    var password = $.trim($('#password').val());
	saveusername();
	savepwd();

    if(username == null || username == ''){
        jQuery.dialog({
			id:'dialog',
			content:"用户名不能为空！", 
			yesFn:true,
			icon:"error",
			lock:true,
			zIndex:9999
		});
        return;
    }

    if(password == null || password == ''){
        jQuery.dialog({
			id:'dialog',
			content:"密码不能为空！", 
			yesFn:true,
			icon:"error",
			lock:true,
			zIndex:9999
		});
        return;
    }
	
	$.ajax({
		type:'post',
		async:true,
		url:MASTER_HOST+'m_employee!login.action',
		dataType:'json',
		data:{
			'vo.un':username,
			'vo.up':password
		},
		success:function(data){
			jQuery.dialog.list['dialog'].close();
			var head = data.head;
			console.log("mylogin.login"+JSON.stringify(head));
			if(head.st == 0){
				result = data.body;
				if(result.st == 0){
					//保存到本地
					setEmployee(result.user);
					//成功
					document.location.href="index.html";
				}else
					jQuery.dialog({id:'dialog',content:result.msg, yesFn:true, icon:"error", lock:true, zIndex:9999});
			}else{
				result = head;
				jQuery.dialog({id:'dialog',content:result.msg, yesFn:true, icon:"error", lock:true, zIndex:9999});
			}
		},
		error:function(request){
			jQuery.dialog.list['dialog'].close();
			var data = new Object;
			data.st = -1;
			data.msg = "Error code : "+ request.status;
			result = data;
			jQuery.dialog({id:'dialog',content:result.msg, yesFn:true, icon:"error", lock:true, zIndex:9999});
		},
		beforeSend:function(request){
			request.setRequestHeader("sid", sid);
			request.setRequestHeader("aid", aid);
			request.setRequestHeader("ver", ver);
			clearEmployee();
 			jQuery.dialog({id:'dialog',title:'loading...',lock:true,zIndex:9999});
		}
	});
}


/**
 * 保存员工名
 */
function saveusername(){
	var username = $.trim($('#username').val());
	if(document.getElementById("saveusername").checked){
		localStorage.setItem("un",username);
	}else{
		localStorage.removeItem("un");
	}
}

/**
 * 保存员工密码
 */
function savepwd(){	
	var password = $.trim($('#password').val());
	if(document.getElementById("savepassword").checked){
		localStorage.setItem("up",password);
	}else{
		localStorage.removeItem("up");
	}
}