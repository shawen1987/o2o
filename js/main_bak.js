// JavaScript Document---jQuery

// localStorage.clear(); 

/**
 * 配置参数 
 */
//测试环境
// var MASTER_HOST = 'http://180.76.149.137/coa-master/';
// var SALES_HOST = 'http://180.76.149.137/coa-sales/';
// var CRM_HOST = 'http://180.76.149.137/coa-crm/';


//本地环境
// var MASTER_HOST = 'http://3d.judger.cn/coa-master/';
// var SALES_HOST = 'http://3d.judger.cn/coa-sales/';
// var CRM_HOST = 'http://3d.judger.cn/coa-crm/';

// var MASTER_HOST = 'http://localhost/coa-master/';
// var SALES_HOST = 'http://localhost/coa-sales/';
// var CRM_HOST = 'http://localhost/coa-crm/';

var MASTER_HOST = 'http://61.133.222.133/coa-master/';
var SALES_HOST = 'http://61.133.222.133/coa-sales/';
var CRM_HOST = 'http://61.133.222.133/coa-crm/';

// 开发环境用来调试的模式，控制一些初始值或者mock的数据/服务的生成。

var DEBUG_MODE = true;
var showCase = true;
var SHOW_RATE = 200;
var USE_CANVAS = true;
var LOCAL_STANDALONE=false;

var DEFAULT_STORE="d017d377-31b6-473a-bfcd-8b27eb0ec45a";


var contactList;

/*
* 动态加载细节局部图片
*/
function refresh2DArea(currentModel,craftName,parentId){
    var html = '';
	var backHtml = '';
    var patternNo = currentModel.patternNo;//版型
    var style = currentModel.style;//类型
    var crafts = currentModel.crafts;//工艺组合
	if(style.substring(0,2)=="XF"){
		modImgPath = suit_modImgPath;
		if(crafts!=null && crafts!='' && crafts.length>0){
			for (var i = 0; i < crafts.length; i++) {
				var craft = crafts[i];
				var type = craft.type;
				var no = craft.no;
				var path = craft.path; 
				//var craftname = 'collar';
				if(craftName=='fabric'){
					html+='<div id="'+type+'_imgs" class="img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/33.png">';
					html+='</div>';

					backHtml+='<div id="'+type+'_imgs" class="img">';
					backHtml+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/17.png">';
					backHtml+='</div>';
				}else if(craftName=='XF05'){//后背开叉
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/14.png">';
					html+='</div>';
				}else if(craftName=='XF07'){//袖口
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_26" style="" src="'+modImgPath+patternNo+path+'/l/24.png">';
					html+='</div>';
				}else if(craftName=='XF02'){//下口袋
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_26" style="" src="'+modImgPath+patternNo+path+'/l/31.png">';
					html+='</div>';
				}else if(craftName=='XF04'){//口巾袋
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_4" style="" src="'+modImgPath+patternNo+path+'/l/3.png">';
					html+='</div>';
				}else if(craftName=='order'){//用于订单页面显示2d模型图片
					html+='<div id="'+type+'_imgs" class="img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/1.png">';
					html+='</div>';
				}else{
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/33.png">';
					html+='</div>';
				}
			}
		}
	}else if(style.substring(0,2)=="CY"){
		modImgPath = shirt_modImgPath;
		if(crafts!=null && crafts!='' && crafts.length>0){
			for (var i = 0; i < crafts.length; i++) {
				var craft = crafts[i];
				var type = craft.type;
				var no = craft.no;
				var path = craft.path; 
				//var craftname = 'collar';
				
				if(craftName=='fabric'){
					html+='<div id="'+type+'_imgs" class="img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/32.png">';
					html+='</div>';

					backHtml+='<div id="'+type+'_imgs" class="img">';
					backHtml+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/17.png">';
					backHtml+='</div>';
				}else if(craftName=='XF05'){//后背开叉
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/17.png">';
					html+='</div>';
				}else if(craftName=='XF07'){//袖口
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_26" style="" src="'+modImgPath+patternNo+path+'/l/27.png">';
					html+='</div>';
				}else if(craftName=='order'){//用于订单页面显示2d模型图片
					html+='<div id="'+type+'_imgs" class="img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/1.png">';
					html+='</div>';
				}else{
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/1.png">';
					html+='</div>';
				}
			}
		}
	}else if(style.substring(0,2)=="XK"){
		modImgPath = pants_modImgPath;
		if(crafts!=null && crafts!='' && crafts.length>0){
			for (var i = 0; i < crafts.length; i++) {
				var craft = crafts[i];
				var type = craft.type;
				var no = craft.no;
				var path = craft.path; 
				//var craftname = 'collar';
				
				if(craftName=='fabric'){
					html+='<div id="'+type+'_imgs" class="img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/32.png">';
					html+='</div>';

					backHtml+='<div id="'+type+'_imgs" class="img">';
					backHtml+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/13.png">';
					backHtml+='</div>';
				}else if(craftName=='XK05'){//前袋
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/7.png">';
					html+='</div>';
				}else if(craftName=='XK06' || craftName=='XK07'){//后袋、后褶
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_16" style="" src="'+modImgPath+patternNo+path+'/l/13.png">';
					html+='</div>';
				}else if(craftName=='order'){//用于订单页面显示2d模型图片
					html+='<div id="'+type+'_imgs" class="img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/1.png">';
					html+='</div>';
				}else{
					html+='<div id="'+type+'_imgs" class="'+craftName+'-part-img">';
					html+='<img id="'+type+'_img_0" style="" src="'+modImgPath+patternNo+path+'/l/32.png">';
					html+='</div>';
				}
			}
		}
	}
    //写入html
	if(parentId == undefined){
		if(craftName=='fabric'){
			$("#images").html(html);
			$("#images-back").html(backHtml);
		}else if(craftName=='order'){
			$("#orderImages").html(html);
		}else{
			$("#part-images").html(html);
		}
	}else{
		if(craftName=='fabric'){
			$("#"+parentId).find("#images").html(html);
			$("#"+parentId).find("#images-back").html(backHtml);
		}else if(craftName=='order'){
			$("#"+parentId).find("#orderImages").html(html);
		}else{
			$("#"+parentId).find("#part-images").html(html);
		}
	}
}

/**
获取URL参数
**/
function request(paras){ 
	var url = location.href;  
	var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");  
	var paraObj = {} ;
	for (i=0; j=paraString[i]; i++){  
		paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);  
	}  
	var returnValue = paraObj[paras.toLowerCase()];  
	if(typeof(returnValue)=="undefined"){  
		return "";
	}else{  
		return returnValue;
	}
}

$(document).ready(function(){
	//localStorage.clear(); 
	var code = request("code");
	if (!DEBUG_MODE) {
		var openid = getCurrentParam("openid");
		var membercode = getCurrentParam("membercode");
		var usercode = getCurrentParam("usercode");
		console.info("openid:"+openid+"----membercode:"+membercode);
		if(openid==null && membercode==null){
			console.info("sid:"+sid+"----aid:"+aid+"----ver:"+ver);
			$.ajax({
				type:'post',
				async:true,
				url:CRM_HOST+'m_member!createWechatMember.action',
				dataType:'json',
				data:{
					'vo.code':code
				},
				success:function(data){
					var head = data.head;
					if(head.st!=null && head.st=="0"){
						var body = data.body;
						if(body.st!=null && body.st=="0"){
							var result = body.body;
							openid = result.openid;
							membercode = result.membercode;
							usercode = result.usercode;
							//将openid和crm会员主键存入本地存储
							setCurrentParam("openid",openid);
							setCurrentParam("membercode",membercode);
							setCurrentParam("usercode",usercode);
						}
					}
				},
				error:function(request){
					var data = new Object;
					data.st = -1;
					data.msg = "Error code : "+ request.status;
				},
				beforeSend:function(request){
					request.setRequestHeader("sid", sid);
					request.setRequestHeader("aid", aid);
					request.setRequestHeader("ver", ver);
				}
			});
		}
	}



});


