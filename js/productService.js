/*
*   产品[服装]服务
*   1.提供 保存用户定制 功能
*/
judgerApp.service('productService', function(){
    /**
     * 模型区
     */
    this.currentModelCategory = '';
    this.currentModel = '';
    this.suitPantsModel = '';
    this.suitMenuIDAltered = {
        styleMenu:false,
        fabricMenu:false,
        detailMenu:false,
        personalMenu:false,
        sizeMenu:false,
        previewMenu:false
    };

    /**
     * 方法区
     */
    //设置当前路由和数据模型
    this.setCurrentModel = function(currentmodelCategory,currentModel){
        this.currentModelCategory = currentmodelCategory;
        this.currentModel = currentModel;
        this.currentModel.suitMenuIDAltered = {};
    }

    //切换路由时清空当前所有数据
    this.changeCurrentModelWhenSwitchRouting = function(route){
        if(route != this.currentModelCategory){
            this.currentModelCategory = '';
            this.currentModel = '';
            this.suitMenuIDAltered = {};
            return null;
        }
        return this.currentModel;
    }

    //改变场景
    this.changeScene = function(route,sceneType,scenes){
        this.getStyles(route,sceneType,scenes);
        return this.currentModel;
    };
    //当前场景中有哪些款式,只在改变场景时调用
    this.getStyles = function(route,sceneType,scenes){
        for(var i = 0; i < scenes.length; i++){
            if(scenes[i].type == sceneType && scenes[i].styles.length > 0){
                //改变当前数据模型currentModel
                this.setCurrentModel(route,clone(scenes[i].styles[0]));

                this.currentModel.selectedScene = sceneType;
                this.currentModel.selectedSceneContent = scenes[i];
                obj = {};
                obj.type = this.currentModel.structure.root.type;
                obj.craft = scenes[i].styles[0].style;
                //改变款型 初始化默认款型的默认配置 --非常重要
                this.changeStyle(scenes[i].styles[0].style,0,obj);
                //---------组装页面显示款式数据开始--------
                var styles = scenes[i].styles;
                var crafts;
                if(this.currentModelCategory == 'suit'){
                    crafts = SUIT_CORE_DATA.crafts;
                    for(var k = 0; k < crafts.length; k++){
                        if(crafts[k].type == 'XF01'){
                            crafts = crafts[k].data;
                            break;
                        }
                    }
                    for( var K = 0; K < styles.length; K++){
                        for(var j = 0; j < crafts.length; j++){
                            if(styles[K].style == crafts[j].no){
                                styles[K].title = crafts[j].name;
                                styles[K].desc = [];
                                styles[K].desc = crafts[j].description.split("<br />");
                                break;
                            }
                        }
                    }
                }else if(this.currentModelCategory == 'pants'){
                    crafts = PANTS_CORE_DATA.crafts;
                    for(var k = 0; k < crafts.length; k++){
                        if(crafts[k].type == 'XK01'){
                            crafts = crafts[k].data;
                            break;
                        }
                    }
                    for( var K = 0; K < styles.length; K++){
                        for(var j = 0; j < crafts.length; j++){
                            if(styles[K].style.split(":")[0] == crafts[j].no){
                                styles[K].title = crafts[j].name;
                                styles[K].desc = [];
                                styles[K].desc = crafts[j].description.split("<br />");
                                break;
                            }
                        }
                    }
                }else if(this.currentModelCategory == 'shirt'){
                    //TODO
                }
                //---------组装页面显示款式数据结束--------
                break;
            }
        }
    }
    //改变款型
    this.changeStyle = function(styleName,styleIndex,obj){
        this.currentModel.style = styleName;
        this.currentModel.styleIndex = styleIndex;
        //更新model数据
        var selectedModel = clone(this.currentModel.selectedSceneContent.styles[styleIndex]);
        this.currentModel.fabricbrand = selectedModel.fabricbrand;
        this.currentModel.fabric = selectedModel.fabric;
        this.currentModel.crafts = selectedModel.crafts;
        this.currentModel.parts = selectedModel.parts;
        this.currentModel.imageSize = selectedModel.imageSize;
        this.currentModel.style = selectedModel.style;
        this.currentModel.structure = selectedModel.structure;
        this.currentModel.img = selectedModel.img;
        //看是否是套装
        this.suitPantsModel = '';
        if(this.currentModelCategory == 'suit'){
            this.currentModel.selectSuitCategory = "suit";
            this.currentModel.coordinatesAbility = selectedModel.coordinatesAbility;
            if(selectedModel.coordinatesAbility && selectedModel.isCoordinates){
                this.currentModel.isCoordinates = selectedModel.isCoordinates;
                this.suitPantsModel = selectedModel.pants;
                //验证并初始化西裤模型数据
                currentModel = null;
                //验证模型----最重要的作用是指定图片的路径
                loadDataDefault(this.suitPantsModel);
                this.syncModel(this.suitPantsModel, currentModel);
            }
        }
        //this.currentModel.fabric不含价格,需要赋予价格
        for(var i=0; COM_CORE_DATA.fabrics; i++){
            if(this.currentModel.fabric.no == COM_CORE_DATA.fabrics[i].no){
                this.currentModel.fabric.price = COM_CORE_DATA.fabrics[i].price;
                break;
            }
        }
        
        currentModel = null;
        //验证模型----最重要的作用是指定图片的路径
        loadDataDefault(this.currentModel);
        this.syncModel(this.currentModel, currentModel);
        this.changeBrand(COM_CORE_DATA.fabricbrands,COM_CORE_DATA.fabrics,this.currentModel.fabric.no);

        if(styleName.indexOf(':') != -1){
            var craftNames = styleName.split(':');
            changeCrftItem(obj,craftNames[0].substring(0,4),craftNames[0]);
            changeCrftItem(obj,craftNames[1].substring(0,4),craftNames[1]);
        }else{
            changeCrftItem(obj,this.currentModel.structure.root.type,styleName);
        }
        this.changeMenuAlterSign('styleMenu');
        this.removeMenuAlterSign();
        return this.currentModel;
    }
    // 过渡阶段用的方法，把验证后的全局对象内容拷贝到service对象中
    this.syncModel = function(thisModel, globalModel) {
        // 工艺名称
        var craft = null;
        if (globalModel && globalModel.crafts){
            for(var i=0; i< thisModel.crafts.length; i++) {
                craft = thisModel.crafts[i];
                for(var j=0; j<globalModel.crafts.length; j++) {
                    if (craft.no == globalModel.crafts[j].no) {
                        craft.name = globalModel.crafts[j].name;
                        break;
                    }
                }
            }
        }
        //图片
        //thisModel.aImg[] = aImg;
    }

    //改变品牌
    this.changeBrand = function(fabricbrands,fabricinfos,brandNo){
        this.currentModel.fabricbrands = fabricbrands;
        this.currentModel.fabricinfos = fabricinfos;
        if(brandNo == undefined){
            this.currentModel.fabricbrandView = this.currentModel.fabricbrand;
            return this.currentModel; 
        }
        for(var i = 0; i < this.currentModel.fabricbrands.length; i++){
            if(this.currentModel.fabricbrands[i].no == brandNo){
                this.currentModel.fabricbrandView = this.currentModel.fabricbrands[i];
                break;
            }
        }
        return this.changeFabric();
    };
    //改变面料
    this.changeFabric = function(fabricNo){
        //默认不选中任何面料
        if(fabricNo == undefined){
            /*for(var i = 0; i < this.currentModel.fabricinfos.length; i++){
                if(this.currentModel.fabricinfos[i].brand == this.currentModel.fabricbrand.no){
                    this.currentModel.fabric = this.currentModel.fabricinfos[i];
                    break;
                }
            }*/
        }else{
            for(var i = 0; i < this.currentModel.fabricinfos.length; i++){
                if(this.currentModel.fabricinfos[i].no == fabricNo){
                    if(this.currentModel.fabricbrandView.no != this.currentModel.fabricbrand.no){
                        this.currentModel.fabricbrand = this.currentModel.fabricbrandView;
                    }
                    this.selectFabirc=fabricNo;
                    this.currentModel.fabric = this.currentModel.fabricinfos[i];
                    if(this.suitPantsModel != null && this.suitPantsModel != ''){
                        this.suitPantsModel.fabric = this.currentModel.fabric;
                    }
                    break;
                }
            }
        }
        return this.currentModel;
        //this.changeCrftItem($event, craft, itemNo);
    };
    this.retrieveProdPrice = function(fabricno,category){
        if(category == undefined){
            for(var key in fabricPrices) {
                if (fabricno == key) {
                    if (this.currentModelCategory =="suit") {
                        this.currentModel.unitPrice = fabricPrices[key].suit;
                        return this.currentModel.unitPrice;
                    } else if (this.currentModelCategory =="pants") {
                        this.currentModel.unitPrice = fabricPrices[key].pants;
                        return this.currentModel.unitPrice;
                    }
                }
            }
        }else{
            for(var key in fabricPrices) {
                if (fabricno == key) {
                    if (category =="suit") {
                        return fabricPrices[key].suit;
                    } else if (category =="pants") {
                        return fabricPrices[key].pants;
                    }
                }
            }
        }
    }
    //返回当前某个部件的工艺
    this.getCurrentCrft = function(crftType,itemType){
        if(itemType == undefined){
            var items = this.currentModel.crafts;
            for(var i = 0; i < items.length; i++){
                if(items[i].type == crftType){
                    return items[i].no;
                }
            }
        }else if(itemType == 'pants'){
            var items = this.suitPantsModel.crafts;
            for(var i = 0; i < items.length; i++){
                if(items[i].type == crftType){
                    return items[i].no;
                }
            }
        }
    };
    //改变当前某个部件的工艺
    this.setCurrentCrft = function(crftType,newCrftNo,newCrftName,itemType){
        if(itemType == undefined){
            var items = this.currentModel.crafts;
            var item = '';
            for(var i = 0; i < items.length; i++){
                if(items[i].type == crftType){
                    item = items[i];
                    break;
                }
            }
            item.no = newCrftNo;
            item.name = newCrftName;
            return this.currentModel;
        }else if(itemType == 'pants'){
            var items = this.suitPantsModel.crafts;
            var item = '';
            for(var i = 0; i < items.length; i++){
                if(items[i].type == crftType){
                    item = items[i];
                    break;
                }
            }
            item.no = newCrftNo;
            item.name = newCrftName;
            return this.currentModel;
        }
    };
    //返回当前某个部件的属性
    this.getCurrentPart = function(partType){
        var items = this.currentModel.parts;
        for(var i = 0; i < items.length; i++){
            if(items[i].type == partType){
                return items[i].no;
            }
        }
    };
    //改变当前某个部件的属性
    this.setCurrentPart = function(partType,newCrftNo,newCrftName){
        var items = this.currentModel.parts;
        var item = '';
        for(var i = 0; i < items.length; i++){
            if(items[i].type == partType){
                item = items[i];
                break;
            }
        }
        item.no = newCrftNo;
        item.name = newCrftName;
        return this.currentModel;
    };
    //设置刺绣文字
    this.changeEmbroideryText = function(text){
        this.currentModel.embroideryText = text;
        this.changeMenuAlterSign('personalMenu');
    };
    //设置刺绣位置
    this.changeEmbroideryPosition = function(position){
        this.currentModel.embroideryPosition = position;
        this.changeMenuAlterSign('personalMenu');
        return this.currentModel;
    };
    //设置驳头眼类型
    this.changeMockButtonhole = function(mockButtonhole){
        this.currentModel.mockButtonhole = mockButtonhole;
        this.changeMenuAlterSign('personalMenu');
        return this.currentModel;
    };
    //设置刺绣字体
    this.changeFont = function(fontNo){
        this.currentModel.selectedFont = fontNo;
        this.changeMenuAlterSign('personalMenu');
        return this.currentModel;
    };
    //设置针线颜色
    this.changeThreadColor = function(type,colorNo){
        if(type == 'embroidery'){
            this.currentModel.embroideryColor = colorNo;
        }else if(type == 'lockhole'){
            this.currentModel.buttonholeColor = colorNo;
        }
        this.changeMenuAlterSign('personalMenu');
        return this.currentModel;
    };
    //设置量体信息
    this.changeMeasureAttr = function(attrName,value,itemType){
        if(itemType == undefined){
            if(this.currentModel.body == undefined)
                this.currentModel.body = {};
            this.currentModel.body[attrName] = value;
            this.changeMenuAlterSign('sizeMenu');
            return this.currentModel;
        }else if(itemType == 'pants'){
            if(this.suitPantsModel.body == undefined)
                this.suitPantsModel.body = {};
            this.suitPantsModel.body[attrName] = value;
            this.changeMenuAlterSign('sizeMenu');
            return this.currentModel;
        }
    }
    //设置量体信息_不需要后台永久保存的信息
    this.changeMeasureTempAttr = function(attrName,value,itemType){
        if(itemType == undefined){
            if(this.currentModel.body_ == undefined)
                this.currentModel.body_ = {};
            this.currentModel.body_[attrName] = value;
            return this.currentModel;
        }else if(itemType == 'pants'){
            if(this.suitPantsModel.body_ == undefined)
                this.suitPantsModel.body_ = {};
            this.suitPantsModel.body_[attrName] = value;
            return this.currentModel;
        }
    }
    //重置body量体信息
    this.resetMeasureInfos = function(){
        this.currentModel.body = null;
        if(this.suitPantsModel != ''){
            this.suitPantsModel.body = null;
        }
        return this.currentModel;
    }
    //设置一级菜单中的内容是否改变过的标识
    this.changeMenuAlterSign = function(menuID){
        this.currentModel.suitMenuIDAltered[menuID] = true;
        return this.suitMenuIDAltered;
    }
    this.removeMenuAlterSign = function(){
        this.currentModel.suitMenuIDAltered.fabricMenu = false;
        this.currentModel.suitMenuIDAltered.detailMenu = false;
        return this.suitMenuIDAltered;
    }

    this.getFabricDescription = function(fabNo){
        var validNos = [1,10,11,12,13,14,16,17,18,19,2,20,21,22,23,3,4,5,6,7,8,9];

        for(var i=0; i<validNos.length; i++) {
            if (validNos[i] == fabNo)
                return "img/description/"+fabNo+".png";
        }

        return "";
    }
    this.getFabricXLPicture = function(fabNo) {
        var validNos = [10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,39,41,42,43,44,45,46,48,6,7,8,9];
        for(var i=0; i<validNos.length; i++) {
            if (validNos[i] == fabNo)
                return fabNo;
        }
        return "";
    }

    //设置套装品类价格
    this.setProductPrice = function(itemType,productPrice){
        if(itemType == 'pants'){
            this.suitPantsModel.unitPrice = productPrice;
        }
    }

    /*
    * 模型中工艺数据不全影响后台处理订单数据，顾将全局变量中的完整工艺数据copy至模型中对应的工艺
    */
    this.copyModelCrafts = function(thisModel) {
        if(thisModel!=null && thisModel!=''){
            var crafts = null;
            var craft = null;
            if(thisModel.style.substring(0,2) == "XF"){
                crafts = SUIT_CORE_DATA.crafts;
            }else if(thisModel.style.substring(0,2) == "CY"){
                crafts = SHIRT_CORE_DATA.crafts;
            }else if(thisModel.style.substring(0,2) == "XK"){
                crafts = PANTS_CORE_DATA.crafts;
            }

            if(thisModel.crafts!=null && thisModel.crafts!=''){
                for(var i=0; i< thisModel.crafts.length; i++) {
                    craft = thisModel.crafts[i];
                    for(var j=0; j<crafts.length; j++) {
                        var craftData = crafts[j];
                        var craftArr = craftData.data;
                        if(craft.type==craftData.type){
                            for(var k=0; k<craftArr.length; k++) {
                                var crft = craftArr[k];
                                if(craft.no==crft.no){
                                    var isChanged = craft.isChanged;
                                    craft = crft;
                                    craft['isChanged'] = isChanged;
                                    craft['type'] = craftData.type;
                                    thisModel.crafts[i] = clone(craft);
                                }
                            }
                        }
                    }                    
                }     
            }
        }
        return thisModel;
    }
    //设置用户选择套装或是单西
    this.setCoordinates = function(isCoordinates){
        if(this.currentModel.coordinatesAbility){
            this.currentModel.isCoordinates = isCoordinates;
            return isCoordinates;
        }
        return false;
    }
    //清空数据
    this.clearCurrentModel = function(){
        this.currentModelCategory = '';
        this.currentModel = '';
        this.suitPantsModel = '';
        this.suitMenuIDAltered = {
            styleMenu:false,
            fabricMenu:false,
            detailMenu:false,
            personalMenu:false,
            sizeMenu:false,
            previewMenu:false
        };
        currentModel = null;
    }
});