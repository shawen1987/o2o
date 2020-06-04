var currentItem;
var currentProdCrfts;
var currentProdParts;
var currentProdFabrics;
var modImgPath = null;
var suit_crfImgPath = 'img/crf/'
var suit_modImgPath = 'img/suit/mod/';
var shirt_crfImgPath = 'img/crf/'
var shirt_modImgPath = 'img/shirt/mod/';
var pants_crfImgPath = 'img/crf/'
var pants_modImgPath = 'img/pants/mod/';
var SCALE=20;
var aImg = [];
var iImgCount = 0;
var imageTotalSize = 0;
var loadRate = 0;
var iCount,iRCount;
var iLoaded = 0;
var iNow = 0;
var i = 0;
var currentModel = null;
var autoRollTimer=null;

function initPreview(crftsData){
    if(currentModel==null){
        currentModel = clone(defaultModel);
    }
    $('#rollMeTest').hide();
    $('#images').show();
    
    clearInterval(iCount);
    clearInterval(iRCount);
    clearInterval(renderT);
    clearInterval(autoRollTimer);
    
    initModel(currentModel);

    $('#loadRate').hide();
    onLoadMouse(crftsData);
    clearInterval(autoRollTimer);
}
//自动转动
function roll(crfts)
{
    var size = crfts.length;
    var crftTypes = [];
    if(crfts!=null && size>0){
        for(var i = 0; i < crfts.length; i++){
            crftTypes[i] = crfts[i].type;
        }
    }

    var last = 0;
    var now = 0;
    var max = 999999;
    
    autoRollTimer=setInterval(function () {
        if (USE_CANVAS) {
            helper3D.showFrame(now);
        } else {
            for(var j = 0; j < crftTypes.length; j++){
                $('#'+crftTypes[j]+'_img_'+last).hide();
                $('#'+crftTypes[j]+'_img_'+now).show();
            }
        }
        last = now;
        now++;
        max--;
        if (now == iImgCount)
            now =0;
        if (max == 0) 
            clearInterval(autoRollTimer);
    }, SHOW_RATE);
    var clearRollF = function(){
        clearInterval(autoRollTimer);
        document.body.removeEventListener("click", clearRollF);
        max = 0;
    };
    document.body.addEventListener("click" , clearRollF, false);
}


function initModel(targetModel) {
    var crftIindex = 0;
    console.info("start to cache frames"+ new Date());
    console.log("--------targetModel--------------"+JSON.stringify(targetModel));
    // for 3d roate
    iImgCount = targetModel.imageSize;

    aImg[0]=[];
    var craft;
    
    $('.container3DModel #images').html('');
    for (var index = 0; index < targetModel.structure.displayOrder.length; index++) {
        craft = targetModel.structure.displayOrder[index];

        var crfDiv = $('<div class="img"/>');
        $(crfDiv).attr("id", craft + "_imgs");
        aImg[0][crftIindex] = [];
        for (var i = 0; i < targetModel.imageSize; i++) {
            var img = new Image();
            $(img).attr("id", craft + "_img_" + i);
            $(img).hide();
            img.onload = function () {
                loadRate++;
                displayLoadPercentage();
            };
            aImg[0][crftIindex][i] = [];
            aImg[0][crftIindex][i] = img;
            $(crfDiv).append(img);
        }
        $('.container3DModel #images').append(crfDiv);

        crftIindex++;
    };


    // load model data
    //updateUI(targetModel, null);
    changeCrftItem(null, null, null);


    var initIndex = targetModel.imageSize-1;
    // initial show the first frame, front frame
    for(var idx = 0;idx < aImg.length; idx++){
        for (var i = 0; i < aImg[0].length; i++) {
            $(aImg[idx][i][initIndex]).show();
        }
    }
}

 
//效果
function onLoadMouse(crfts)
{
    var lastImg=[];
    var body=document.body;
    var timer=null;
    var num=iNow;
	var lastNum = iNow;

    var oEvent;
    var startX;
    var lastX;
    var speed=0;

    var crftTypes = [];
    if(crfts!=null && crfts.length>0){
        for(var i = 0; i < crfts.length; i++){
            crftTypes[i] = crfts[i].type;
        }
    }

    for(var i = 0; i < aImg.length; i++){
        lastImg[i]=aImg[i][0];
	}

    function onMove(ev)
    {
        var oEvent=ev||event;
        step=-(oEvent.clientX-lastX)/SCALE;
        iNow = lastNum + Math.round(step);
        if (step < 0) {
            iNow = iImgCount - 1 - Math.abs(iNow) % iImgCount;
            
            if (iNow != lastNum) {
                iNow = lastNum -1;
                if (iNow < 0) 
                    iNow = iImgCount -1;
            }
        } else {
            iNow = iNow % iImgCount;
            if (iNow != lastNum) {
                
            }
        }
            
        if (iNow != lastNum) {
            for(var j = 0; j < crftTypes.length; j++){
                $('#'+crftTypes[j]+'_img_'+lastNum).hide();
                $('#'+crftTypes[j]+'_img_'+iNow).show();
            }

            lastNum = iNow;

            speed=-(oEvent.clientX-lastX)/SCALE;
            lastX=oEvent.clientX;
        }

        return false;
    }
 
    function onUp()
    {
        this.onmousemove=null;
        this.onmouseup=null;
        if(body.releaseCapture)body.releaseCapture();
        
		//inertiaRolling();
    }

    function inertiaRolling()
    {
        timer=setInterval(function () {
            speed*=0.884;
            //console.info("speed"+ speed + " Math.abs(speed)<=1: " + (Math.abs(speed)<=1));
            if(Math.abs(speed)<=1)
            {
                speed=0;
                clearInterval(timer);
                return;
            }

            iNow = lastNum + Math.round(speed);
            if (iNow < 0) {
                iNow = iImgCount - 1 - Math.abs(iNow) % iImgCount;
            } else {
                iNow = iNow % iImgCount;
            }
            if (iNow != lastNum) {
                for(var j = 0; j < crftTypes.length; j++){
                    $('#'+crftTypes[j]+'_img_'+lastNum).hide();
                    $('#'+crftTypes[j]+'_img_'+iNow).show();
                }

                lastNum = iNow;
            }

        }, 50);
    }

    if (USE_CANVAS) {
        return;
    }
    /*********
     * 针对PC机
     * ******/
    $('#images').on('mousedown',function (ev){
		oEvent=ev||event;
		startX=oEvent.clientX;
		lastX=startX;

		if(body.setCapture) {
			body.onmousemove=onMove;
			body.onmouseup=onUp;

			body.setCapture();
		} else{
			document.onmousemove=onMove;
			document.onmouseup=onUp;
		}


	});

    /**********
     * 针对PAD设备
     * ***********/
	var banner = document.getElementById("images");
    banner.addEventListener( "touchstart" , 
        function (e) {
        e.preventDefault();
        var onMove = function (e) {
            e = e || event;
            var cx = e.clientX || e.touches[0].clientX;
            var i = -(cx - startX) / SCALE;
            num = (iNow + i + Math.abs(Math.floor(i / iImgCount)) * iImgCount) % iImgCount;

            for(var j = 0; j < crftTypes.length; j++){
                // $('#'+crftTypes[j]+'_img_'+lastNum).hide();
                // $('#'+crftTypes[j]+'_img_'+parseInt(num)).show();
                
                $('#'+crftTypes[j]+'_img_'+lastNum).hide();
                $('#'+crftTypes[j]+'_img_'+parseInt(num)).show();
            }

			lastNum = parseInt(num);

            speed=-(e.touches[0].clientX-lastX)/SCALE;

            lastX = cx;
            clearInterval(autoRollTimer);
            return false;
        };
        var onUp = function (e) {
            e = e || event;

            iNow = num;

            this.onmousemove = null;
            this.onmouseup = null;
            banner.addEventListener( "touchmove" , onMove, false);
            banner.addEventListener( "touchend" , onUp, false);

            if (body.releaseCapture) body.releaseCapture();
            //inertiaRolling();
        };

        e = e || event;
        startX = lastX = e.clientX || e.touches[0].clientX;
        banner.addEventListener( "touchmove" , onMove, false);
        banner.addEventListener( "touchend" , onUp, false);

        return false;
	}, false);

}


function displayLoadPercentage() {
	var prefix = "模型加载";
    $('#loadRate').text(prefix + ((loadRate / imageTotalSize) * 100).toFixed(2) + "%");
    if (loadRate < imageTotalSize) {
        $('#loadRate').show();
        return;
    } else {
        clearInterval(iCount);
        if (USE_CANVAS) {
            setTimeout(function() {
                load3DStart = new Date();
                $('#rollMeTest').show();
               // $('#images').hide();
                loadRate=0;
                clearInterval(iRCount);
                iRCount = setInterval(displayRenderPercentage, 100);
                loadNew3DDisplay();
            }, 0);
        } else {
            $('#loadRate').hide();
            if (showCase) {
                roll(crftsData);
            }
        }
    }
}


/**
*	选择细节（即UI右侧边栏）
*/
function changeCrft(craft){
    craft = craft.replace(/\./g,"");
    $('#crftItemsDiv').children('.detailCon').hide();
    $('#'+craft+'_crftItemDiv').show();

	if(craft=='fabric'){
		$("#fabricPrice").show();
	}else{
		$("#fabricPrice").hide();
	}
}

function changeCrftCate(){
	$(".bottomCon clearfix").children().children().attr("id","");
	$(this).parent().attr("id","selected-white");
}

/*
* 选择细节
*/
function changeDetail(name,obj){
	$("dd[name='suit_detail']").each(function(){
		var id = $(this).attr("id");
		$(this).attr("id","");
	});
	var csss = $(obj).attr("class");
	$(obj).attr("id",csss);

	$(".detailCon").each(function(){
		var id = $(this).attr("id");
		$(this).attr("style","display:none;");
	});
	$("#fabric_crftItemDiv").attr("style","display:none;");

	$("#"+name+"_crftItemDiv").attr("style","display:block;");

	if(name=='fabric'){
		$("#fabricPrice").show();
	}else{
		$("#fabricPrice").hide();
	}
}

/*
*	隐藏子工艺项
*/
function hideCrft(){
	$(".detailCon").each(function(){
		$(this).hide();
	
	});
}


/*
*	Controller Main Entry
*/
function changeCrftItem(obj, craft, itemNo) {
    var validateResult = validateChange(currentModel, craft, itemNo);
    var excludeCrfts = null;
    var excludeType = null;
    var flag = false;
    for (var outKey in excludeRule) {
        if(flag)
            break;
        if (excludeRule.hasOwnProperty(outKey) && outKey.indexOf(currentModel.selectedScene)!= -1) {
            for(var key in excludeRule[outKey]){
                var crft= excludeRule[outKey][key];
                if(key==itemNo){
                    excludeCrfts = crft.crftsno;
                    excludeType = crft.type;
                    flag = true;
                    break;
                }
            }
        }
    }

    for(var i=0;i<SUIT_CORE_DATA.crafts.length;i++){
        if(SUIT_CORE_DATA.crafts[i].type==excludeType){
            var crfts = SUIT_CORE_DATA.crafts[i].data;
            for(var j=0;j<crfts.length;j++){
                if(excludeCrfts.indexOf(crfts[j].no)!=-1){
                     crfts[j].hasimg = false;
                }else{
                    crfts[j].hasimg = true;
                }
               
            }
        }
    }


    if (!validateResult.isSuccess) {
        console.info("Change is not allowed!");
        return;
    } else {
        if (currentModel != validateResult.targetModel && validateResult.targetModel != null) {
            currentModel = validateResult.targetModel; // save changed model to current model
            updateUI(currentModel, obj);
            
        }
    }
}

function updateUI(model, obj) {
    var modelType = '';
    if (obj != null){
        modelType = obj.type;
    }
    if(modelType=='2D'){
        craft = obj.craft;
        refresh2DArea(model,craft);
        /*$(obj).parent().find("li").each(function(){
            $(this).attr("class","mui-col-xs-2");
        });
        $(obj).attr("class","mui-col-xs-2 on");*/
    }else if(modelType=='XF01'){

    }else{
        refresh3DArea(model);
    }
    
    // TODO: update craft related option buttons

    if (obj != null && typeof (obj.onsucceed) != 'undefined')
        obj.onsucceed();
    // TODO: using validateResult.changes to updat UI.
}

function refresh3DArea(targetModel) {
    var zoom=2;
    // Then display the changed images.
    if(targetModel.style.substring(0,2) == "XF"){
        modImgPath = suit_modImgPath;
    }else if(targetModel.style.substring(0,2) == "CY"){
        modImgPath = shirt_modImgPath;
    }else if(targetModel.style.substring(0,2) == "XK"){
        modImgPath = pants_modImgPath;
    }
    var changeIndex = 0;
    for (var i = 0; i < targetModel.crafts.length; i++) {
        if (targetModel.crafts[i].isChanged)
            changeIndex++;
    }

    loadRate = 0;
    imageTotalSize = changeIndex * targetModel.imageSize;
    iCount = setInterval(displayLoadPercentage, 100);
    var crfDivs = $('[class="container3DModel"] #images .img');
    var imgs = null;
    for (var j = 0; j < targetModel.crafts.length; j++) {
        var craft = targetModel.crafts[j];
        if (!craft.isChanged)
            continue;

        for (var i = 0; i < crfDivs.length; i++) {
            if ($(crfDivs[i]).attr("id") == craft.type + "_imgs") {
                imgs = aImg[0][i];
                break;
            }
        }

        for (var k = 0; k < imgs.length; k++) {
            imgs[k].src = modImgPath + targetModel.patternNo + craft.path + "/l/" + ((k + 1)*zoom-1) + ".png";
        }
        // mark not changed when finish update UI
        //craft.isChanged = false;
    }
}


var ValidateResult = {
    isSuccess: false,
    msg: "",
    targetModel: {}
}
/*

*/
function validateChange(model, craft, itemNo) {
    //var result = new ValidateResult();
    var result = Object.create(ValidateResult);

    var targetModel = createTargetModel(model, craft, itemNo);
    if (targetModel == null) {
        result.isSuccess = true;
        result.targetModel = model;
        result.msg = "没有变化";
        return result;
    }

    result.isSuccess = validateTargetModel(targetModel);
    result.targetModel = targetModel;

    return result;
}

// done: 生成目标模型实例
function createTargetModel(model, craft, itemNo) {
    var invalidCraft = true;
    var changesFound = false;
    var targetModel = clone(model);
    var CORE_DATA = null;

    if (null == craft) {
        return targetModel;
    }

    if(targetModel.style.substring(0,2) == "XF"){
        CORE_DATA = SUIT_CORE_DATA;
    }else if(targetModel.style.substring(0,2) == "CY"){
        CORE_DATA = SHIRT_CORE_DATA;
    }else if(targetModel.style.substring(0,2) == "XK"){
        CORE_DATA = PANTS_CORE_DATA;
    }

    if ("fabric" == craft) {
        invalidCraft = false;
        //get fabric price
        var fabricPrice = "";
        var fabricName = "";
        for(var i = 0; i < COM_CORE_DATA.fabrics.length; i++){
           var fabric = COM_CORE_DATA.fabrics[i];
            if(fabric.no==itemNo){
                fabricPrice = fabric.price;
                fabricName = fabric.name;
            }
        }
        if (targetModel.fabric.no != itemNo) {
            targetModel.fabric.no = itemNo;
            targetModel.fabric.isChanged = true;
            targetModel.fabric.price = fabricPrice;
            targetModel.fabric.name = fabricName;
            changesFound = true;
        }
        // also need mark XF changed.
        for (var i = 0; i < targetModel.crafts.length; i++) {
            var craftCtl = targetModel.crafts[i];
            var craftDefinition = getCraftDefinition(craftCtl, CORE_DATA.crafts);
            craftCtl.name = craftDefinition.name;
            if (craftDefinition.relFabric)
                craftCtl.isChanged = true;
        }
    } else if ( (craft.substring(0, 2) == "XF") || (craft.substring(0, 2) == "CY") || (craft.substring(0, 2) == "XK")) {
        var crft;
        
        for (var i = 0; i < targetModel.crafts.length; i++) {
            crft = targetModel.crafts[i];
            if (crft.type == craft) {
                if (crft.no != itemNo) {
                    crft.no = itemNo;
                    crft.isChanged = true;
                    changesFound = true;
                }
                invalidCraft = false;
                break;
            }
        }

        for (var i = 0; i < targetModel.crafts.length; i++) {
            var craftCtl = targetModel.crafts[i];
            var craftDefinition = getCraftDefinition(craftCtl, CORE_DATA.crafts);
            craftCtl.name = craftDefinition.name;
        }
    } else if (craft.substring(0, 9) == "prod.part") {
        var part;
        for (var i = 0; i < targetModel.parts.length; i++) {
            part = targetModel.parts[i];
            if (part.type == craft) {
                if (part.no != itemNo) {
                    part.no = itemNo;
                    part.isChanged = true;
                    changesFound = true;
                    // also need mark XF related to changed.
                }
                invalidCraft = false;
                break;
            }
        }

        for (var i = 0; i < targetModel.crafts.length; i++) {
            var craftCtl = targetModel.crafts[i];
            var craftDefinition = getCraftDefinition(craftCtl, CORE_DATA.crafts);
            craftCtl.name =  craftDefinition.name;
            if (craftDefinition.relPart == true && craftDefinition.relVal == craft)
                craftCtl.isChanged = true;
        }
    }

    if (invalidCraft)
        throw new DOMException("craft not supported: " + craft);

    if (changesFound)
        return targetModel;
    else
        return null;
}

// CORE:
// 1. 根据模型结构 获取相关联的父子对，然后把属性带入规则表总过滤，如果发现匹配则通过，反之失败。
// 2. 规则中包含了模型的配置信息，一旦匹配成功，模型信息会写入craft内容里面，这个内容相关UI的控制显示部分
// 3. 只有所有的改动的规则验证都通过了才能返回成功，反之返回失败。
function validateTargetModel(target) {
    return validateNode(target, target.structure.root);
}

function validateNode(target, parent) {
    var isValid = true;
    var parentCraft = null;
    var rulesGroup = null;
    var CORE_DATA = null;
    if(target.style.substring(0,2) == "XF"){
        rulesGroup = Suit_RulesGroup;
        CORE_DATA = SUIT_CORE_DATA;
    }else if(target.style.substring(0,2) == "CY"){
        rulesGroup = Shirt_RulesGroup;
        CORE_DATA = SHIRT_CORE_DATA;
    }else if(target.style.substring(0,2) == "XK"){
        rulesGroup = Pants_RulesGroup;
        CORE_DATA = PANTS_CORE_DATA;
    }
    
    for (var index = 0; index < target.crafts.length; index++) {
        if (target.crafts[index].type == parent.type) {
            parentCraft = target.crafts[index];
            break;
        }
    }

    loadCraftNames(parent, target, CORE_DATA.crafts);//把后台craft相关信息加载到前台控制对象中
    
    for (var i = 0; i < parent.children.length; i++) {
        var child = parent.children[i];

        var childCraft = null;
        for (var index = 0; index < target.crafts.length; index++) {
            if (target.crafts[index].type == child.type) {
                childCraft = target.crafts[index];
                break;
            }
        }

        if (parentCraft.isChanged)
            childCraft.isChanged = true;

        if (childCraft.isChanged) {// 如果没有改变，那么已经验证过了。如果改变了就需要验证。注意：default里面所有的标签应为true
            isValid = matchRules(parentCraft, childCraft, CORE_DATA.crafts, target, rulesGroup);
            if (parent.type == child.type)
                isValid = true;

            if (isValid) { //迭代子元素
                if (child.children != null && child.children.length > 0) {
                    isValid = validateNode(target, child);
                    if (!isValid) {
                        break;
                    }
                }
            }
            else {
                break;
            }
        }
    }
    return isValid;
}


function loadCraftNames(craftInfo, target, crafts) {
    var craft = null;
    
    for (var i = 0; i < target.crafts.length; i++) {
        if (target.crafts[i].type == craftInfo.type) {
            craft = target.crafts[i];
            break;
        }
    }
    if (!craft.name) { //把后台craft相关信息加载到前台控制对象中
        for (var i = 0; i < crafts.length; i++) {
            if (crafts[i].type == craft.type) {
                for (var k = 0; k < crafts[i].data.length; k++) {
                    if (crafts[i].data[k].no == craft.no) {
                        craft.name = crafts[i].data[k].name;
                        break;
                    }
                }
                break;
            }
        }
    }
    // 迭代所有子结构所对应的界面工艺对象
    if (craftInfo.children != null && craftInfo.children.length > 0) {
        for (var i = 0; i < craftInfo.children.length; i++) {
            var childInfo = craftInfo.children[i];
            loadCraftNames(childInfo, target, crafts);
        }
    }
}

function matchRules(parent, child, crafts, targetModel, rulesGroup) {
    // rule levels value here:
    var level1 = child.type;
    var level2 = child.no;
    var level3 = getComputedNo(child, crafts, targetModel); // Retrieve value from either fabric or parts number according to the basic material definition form child.no related.
    var level4 = parent.no;
    var isValid = false;

    // level 1: key is FX0X
    // level 2: key is FX0X00X
    // level 3: key is itemNo(fabric or part no);
    // last level is level 3 value points to the parent of FX0X, also the folder name, so index of not equals -1 then there is a match
    // The validation is to search all 4 levels to have a match

    var levelArray = rulesGroup;
    for (var i = 0; i < levelArray.length; i++) {
        $.each(levelArray[i], function (keyL1, objL2Group) {
             if (keyL1 == level1) {
                isValid = true;
                levelArray = objL2Group;
                return;
            }
        });

        if (isValid)
            break;
    }

    if (isValid) {
        isValid = false;
        for (var i = 0; i < levelArray.length; i++) {
            $.each(levelArray[i], function (keyL2, objL3Group) {
                if (keyL2 == level2) {
                    isValid = true;
                    levelArray = objL3Group;
                    return;
                }
            });

            if (isValid)
                break;
        }
    }

    if (isValid) {
        isValid = false;
        for (var i = 0; i < levelArray.length; i++) {
            $.each(levelArray[i], function (keyL3, objL4Group) {
                if (keyL3 == level3) {
                    isValid = true;
                    levelArray = objL4Group;
                    return;
                }
            });

            if (isValid)
                break;
        }
    }
    if (isValid) {
        isValid = false;
        for (var i = 0; i < levelArray.length; i++) {
            if (levelArray[i].indexOf(level4) > -1) {
                isValid = true;
                // set target relative path
                child.path = "/" + level1 + "/" + level2 + "/" + level3 + "/" + levelArray[i];
                return isValid;
            }
        }
    }
    if (!isValid) {
        var msg = "Not match found!\r\nStructure Id: " + targetModel.structure.id + " Ver: " + targetModel.structure.version
        + "\r\nTarget Path:" + level1 + "/" + level2 + "/" + level3 + "/" + level4;
        console.info(msg);
    }
    return isValid;
}

//function matchRules(parent, child, targetModel, rulesGroup) {
//    // rule levels value here:
//    var level1 = child.type;
//    var level2 = child.no;
//    var level3 = getConputedNo(child, CORE_DATA.crafts, targetModel); // Retrieve value from either fabric or parts number according to the basic materilo definatioin form child.no related.
//    var level4 = parent.no;
//    var isInvalid = false;
//    //$.each(rulesGroup, function (keyL1, objL2) {
//    for (var i1 = 0; i < rulesGroup.length; i1++) {
//    $.each(rulesGroup, function (objL1) {

//        // level 1: key is FX0X
//        // level 2: key is FX0X00X
//        // level 3: key is itemNo(fabric or part no);
//        // last level is level 3 value points to the parent of FX0X, also the folder name, so index of not equals -1 then there is a match

//        // The validation is to search all 4 levels to have a match
//        if (keyL1 == level1) {
//            $.each(objL2, function (keyL2, objL3) {
//                if (keyL2 == level2) {
//                    $.each(objL3, function (keyL3, arrL4) {
//                        if (keyL3 == level3) {
//                            $.each(appliedModels, function (keyL3, arrL4) {
//                                if (appliedModels.indexOf(level4) > -1) {
//                                    isInvalid = true;

//                                    // set target relative path
//                                    child.path = "/" + level1 + "/" + level2 + "/" + level3 + "/" + appliedModels
//                                    return isInvalid;
//                                }
//                            });
//                        }
//                    });
//                }
//            });
//        }
//    });


//    var msg = "Not match found!\r\nStructure Id: " + targetModel.structure.id + " Ver: " + targetModel.structure.version
//    + "\r\nTarget Path:" + level1 + "/" + level2 + "/" + level3 + "/" + level4;
//    alert(msg);
//    return isInvalid;
//}

function getComputedNo(craft, crafts, targetModel) {
    var targetCraftType = null;
    var targetCraftInfo = null;
    var no = null;
    for (var i = 0; i < crafts.length; i++) {
        if (crafts[i].type == craft.type) {
            targetCraftType = crafts[i];
            break;
        }
    }
    for (var i = 0; i < targetCraftType.data.length; i++) {
        var craftInfo = targetCraftType.data[i];
        if (craftInfo.no == craft.no) {
            targetCraftInfo = craftInfo;
            break;
        }
    }
    if (targetCraftInfo.relFabric == true) {
        return targetModel.fabric.no;
    } else if (targetCraftInfo.relPart == true) {
        for (var i = 0; i < targetModel.parts.length; i++) {
            var partObj = targetModel.parts[i];
            if (partObj.type == targetCraftInfo.relVal) {
                no = partObj.no;
                break;
            }
        }
    } else {
        alert("craft defination incorrect relFabric|relPart required");
    }
    return no;
}

function getCraftDefinition(craft, crafts) {
    for (var i = 0; i < crafts.length; i++) {
        if (crafts[i].type == craft.type) {

            for (var j = 0; j < crafts[i].data.length; j++) {
                var craftInfo = crafts[i].data[j];
                if (craftInfo.no == craft.no) {
                    return craftInfo;
                }
            }
            break;
        }
    }

}





function clone(obj) {
    //alert(obj);
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    o.push(clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    o[j] = clone(obj[j]);
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}

function saveDesign(){
    var designs = localStorage.getItem("designs");
    if(designs == null){
        designs = [];
        designs[0] = currentModel;
        localStorage.setItem("designs",JSON.stringify(designs));
    }else{
        designs = JSON.parse(designs);
        designs[0] = currentModel;
        localStorage.setItem("designs",JSON.stringify(designs));
    }
}
function getDesigns(){
    var designs = localStorage.getItem("designs");
    return designs;
}

