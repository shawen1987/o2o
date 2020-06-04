function getCart(){
   var cart =  localStorage.getItem("cart");
   if(cart == null || typeof(cart) == "undefined")
		return null;
	else
		return JSON.parse(cart);
}

function setCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart));
}

/*
*	获取收货地址列表
*/
function getContactList(){
   var contactlist =  localStorage.getItem("contactlist");
   if(contactlist == null || typeof(contactlist) == "undefined")
		return null;
	else
		return JSON.parse(contactlist);
}

/*
*	设置收货地址列表
*/
function setContactList(contactlist){
   	localStorage.setItem("contactlist",JSON.stringify(contactlist));
}

/*
*	设置当前收货地址
*/
function setCurrentContact(contact){
	localStorage.setItem("currentContact",JSON.stringify(contact));
}

/*
*	获取当前收货地址
*/
function getCurrentContact(){
   var currentContact =  localStorage.getItem("currentContact");
   if(currentContact!=null && currentContact!='undefined'){
		return JSON.parse(currentContact);
   }else{
		return null;
   }
}

/*
*	设置当前西服模型
*/
function setCurrentSuitModel(currentModel){
	localStorage.setItem("currentSuitModel",JSON.stringify(currentModel));
}

/*
*	获取当前西服模型
*/
function getCurrentSuitModel(){
   var currentModel =  localStorage.getItem("currentSuitModel");
   if(currentModel == null || typeof(currentModel) == "undefined"){
	   return currentModel;
   }else{
		return JSON.parse(currentModel);
	}
}

/*
*	删除当前订单信息
*/
function deleteCurrentOrder(){
	localStorage.removeItem("currentOrder");
}

/*
*	获取当前订单信息
*/
function getCurrentOrder(){
   var currentOrder =  localStorage.getItem("currentOrder");
   if(currentOrder == null || typeof(currentOrder) == "undefined")
		return null;
	else
		return JSON.parse(currentOrder);
}


/*
*	保存当前订单相关量体信息
*/
function setCurrentOrder(order){
	localStorage.setItem("currentOrder",JSON.stringify(order));
}

/*
*	保存当前订单会员信息
*/
function setOrderMember(member){
	localStorage.setItem("currentMember",JSON.stringify(member));
}

/*
*	获取当前订单会员信息
*/
function getOrderMember(){
   var currentMember =  localStorage.getItem("currentMember");
   if(currentMember == null || typeof(currentMember) == "undefined")
		return null;
	else
		return JSON.parse(currentMember);
}

/**
 * 获取已登陆员工
 * @param 
 * @returns {employee}
 */
function getEmployee(){
	var employee = localStorage.getItem("employee");
	if(employee == null)
		return null;
	else
		return JSON.parse(employee);
}

/**
 * 将员工信息保存至本地
 * @param 
 */
function setEmployee(employee){	
	localStorage.setItem("employee",JSON.stringify(employee));
}

/**
 * 删除当前员工信息
 * @param 
 */
function clearEmployee(){
	localStorage.removeItem("employee");
}


/**
 * 重写某一个环境变量
 * @param key
 * @param val
 */
function setCurrentParam(key, val){
	
	var currentParamsStr = localStorage.getItem("currentParams");
	var currentParams = null;
	
	if(currentParamsStr == null){
		currentParams = {};
	}else
		currentParams = JSON.parse(currentParamsStr);

	currentParams[key] = val;

	localStorage.setItem("currentParams",JSON.stringify(currentParams))
}

/**
 * 删除某一个环境变量
 * @param key
 */
function deleteCurrentParam(key){
	
	var currentParamsStr = localStorage.getItem("currentParams");
	var currentParams = null;
	
	if(currentParamsStr == null){
		currentParams = {};
	}else
		currentParams = JSON.parse(currentParamsStr);

	delete currentParams[key];

	localStorage.setItem("currentParams",JSON.stringify(currentParams))
}

/**
 * 获得某一个环境变量
 * @param key
 * @returns {*}
 */
function getCurrentParam(key){
	var currentParamsStr = localStorage.getItem("currentParams");
	var currentParams = null;
	
	if(currentParamsStr == null){
		currentParams = {};
	}else
		currentParams = JSON.parse(currentParamsStr);

	return currentParams[key];
}