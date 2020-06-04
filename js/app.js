// JavaScript Document---angular

var judgerApp = angular.module('judgerApp', ['ui.router','ngSanitize','toaster']);
judgerApp.value("COM_CORE_DATA_CONSTANTS",COM_CORE_DATA);
judgerApp.value("SUIT_CORE_DATA_CONSTANTS",SUIT_CORE_DATA);
judgerApp.value("SHIRT_CORE_DATA_CONSTANTS",SHIRT_CORE_DATA);
judgerApp.value("PANTS_CORE_DATA_CONSTANTS",PANTS_CORE_DATA);
judgerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');//点击其他连接都默认跳转首页
    $stateProvider
        .state('home', {//加载首页
            url: '/home',
            views: {
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@home': {
                    templateUrl: 'home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('order',{//提交订单页面
            url:'/order',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@order': {
                    templateUrl: 'order.html',
                    controller: 'OrderCtrl'
                }
            }
        })
        .state('confirm',{//订单确认页面
            url:'/confirm',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@confirm': {
                    templateUrl: 'orderConfirm.html',
                    controller: 'ConfirmCtrl'
                }
            }
        })
        .state('cart',{//购物车页面
            url:'/cart',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@cart': {
                    templateUrl: 'cart.html',
                    controller: 'CartCtrl'
                }
            }
        })
        .state('orderList',{//订单列表页面
            url:'/orderList',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@orderList': {
                    templateUrl: 'orderList.html',
                    controller: 'OrderListeCtrl'
                }
            }
        })
        .state('orderDetail',{//订单详情页面
            params:{ordercode:null},
            url:'/orderDetail',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@orderDetail': {
                    templateUrl: 'orderDetail.html',
                    controller: 'OrderDetailCtrl'
                }
            }
        })
        .state('designList',{//设计列表页面
            url:'/designList',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@designList': {
                    templateUrl: 'designList.html',
                    controller: 'DesignListCtrl'
                }
            }
        })
        .state('designDetail',{//设计详情页面
            params:{designcode:null},
            url:'/designDetail',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@designDetail': {
                    templateUrl: 'designDetail.html',
                    controller: 'DesignDetailCtrl'
                }
            }
        })
        .state('payment',{//订单支付页面
            params:{order:null},
            url:'/payment',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@payment': {
                    templateUrl: 'payment.html',
                    controller: 'PaymentCtrl'
                }
            }
        })
        .state('paymentSuccess',{//订单支付完成页面
            url:'/paymentSuccess?order',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@paymentSuccess': {
                    templateUrl: 'paymentSuccess.html',
                    controller: 'PaymentSuccessCtrl'
                }
            }
        })
        .state('contact',{//收货地址页面
            url:'/contact',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@contact': {
                    templateUrl: 'contact.html',
                    controller: 'ContactCtrl'
                }
            }
        })
        .state('newContact',{//新增收货地址页面
            url:'/newContact?contactCode',
            views:{
                '': {
                    templateUrl: 'layout.html',
                    controller: 'HomeCtrl'
                },
                'main@newContact': {
                    templateUrl: 'newContact.html',
                    controller: 'NewContactCtrl'
                }
            }
        })
        .state('home.hot', {//加载尖货精选页面
            url: '/hot',
            views: {
                'main@home': {
                    templateUrl: 'module/hot/hot.html',
                    controller: 'HomeCtrl'
                }
            }
        })    
         .state('home.suit', {//加载西服定制页面
            url: '/suit',
            views: {
                'main@home': {
                    templateUrl: 'module/suit/suit.html',
                    controller: function($scope, $state,productService) {
                        $scope.changeScene = function(scene){
                            $scope.resetCarousel();
                            $scope.currentModel = productService.changeScene('suit',scene,$scope.suitScenes);
                            $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                            if(productService.currentModel.coordinatesAbility && productService.currentModel.isCoordinates){
                                var price = productService.retrieveProdPrice($scope.currentModel.fabric.no,"pants");
                                productService.setProductPrice('pants',price);
                                $scope.prodPrice += price;
                            }
                        };
                        //是否选择套装 选择套装：参数为true
                        $scope.setCoordinates=function(isCoordinates) {
                            if($scope.currentModel.isCoordinates == isCoordinates)
                                return;
                            $scope.currentModel.isCoordinates = productService.setCoordinates(isCoordinates);

                            $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                            if(productService.currentModel.coordinatesAbility && productService.currentModel.isCoordinates){
                                var price = productService.retrieveProdPrice($scope.currentModel.fabric.no,"pants");
                                productService.setProductPrice('pants',price);
                                $scope.prodPrice += price;
                            }
                        };
                        //初始化场景
                        $scope.currentModel = productService.changeCurrentModelWhenSwitchRouting("suit");
                        if($scope.currentModel == undefined || $scope.currentModel.selectedScene == undefined ){
                            $scope.changeScene(1);
                        }
                        $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                        if(productService.currentModel.coordinatesAbility && productService.currentModel.isCoordinates){
                            var price = productService.retrieveProdPrice($scope.currentModel.fabric.no,"pants");
                            productService.setProductPrice('pants',price);
                            $scope.prodPrice += price;
                        }

                        //完善productService中模型的工艺数据
                        productService.currentModel = productService.copyModelCrafts(productService.currentModel);
                        if(productService.currentModel.coordinatesAbility && productService.currentModel.isCoordinates){
                            productService.suitPantsModel = productService.copyModelCrafts(productService.suitPantsModel);
                        }
                        $state.go("home.suit.style");
                    }
                }
            },
        })  
        .state('home.suit.style', {//加载西服定制款式页面
            url: '/suit/style',
            templateUrl: 'module/suit/suit-style.html',
            controller: function($scope, $state,productService) {
                $scope.bodyCss("pro-bg");
                $scope.carousel("slider-group");
                $scope.changeSuitMenu("styleMenu");
            }
        })    
        .state('home.suit.fabric', {//加载西服定制面料页面
            url: '/suit/fabric',
            templateUrl: 'module/suit/suit-fabric.html',
            controller: function($scope, $state,productService) {
                $scope.changeBrand = function(brandNo,brandId){
                    $scope.changeTabSelected(brandId);
                    $scope.currentModel = productService.changeBrand($scope.fabricbrands,$scope.fabricinfos,brandNo);
                };
                $scope.changeFabric = function($event, craft, itemNo){
                    $scope.currentModel = productService.changeFabric(itemNo);
                    $scope.changeCrftItem($event, craft, itemNo);
                    $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                    if(productService.currentModel.coordinatesAbility && productService.currentModel.isCoordinates){
                        var price = productService.retrieveProdPrice($scope.currentModel.fabric.no,"pants");
                        productService.setProductPrice('pants',price);
                        $scope.prodPrice += price;
                    }
                };
                $scope.changeModel = function(itemType){
                    if(itemType == 'suit'){
                        currentModel = null;
                        loadDataDefault(productService.currentModel);
                    }else if(itemType == 'pants'){
                        currentModel = null;
                        loadDataDefault(productService.suitPantsModel);
                    }
                    refresh2DArea(currentModel,"fabric");
                }
                $scope.currentModel = productService.changeBrand($scope.fabricbrands,$scope.fabricinfos);
                $state.go("home.suit.fabric.default");
            }    
        }) 
        .state('home.suit.fabric.default', {//加载西服定制面料详情页面
           url: '/suit/fabric/default',
           templateUrl: 'module/suit/suit-fabric-default.html',
           controller: function($scope, $state,productService) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("fabricMenu");
                // 面料不显示裤子
                //$scope.changeModel($scope.currentModel.selectSuitCategory);
                if($scope.currentModel.selectSuitCategory != 'suit'){
                    currentModel = null;
                    loadDataDefault(productService.currentModel);
                    $scope.currentModel.selectSuitCategory = 'suit';
                }
                refresh2DArea(currentModel,"fabric");
            }
        })     
        .state('home.suit.fabric.detail', {//加载西服定制面料详情页面
           url: '/suit/fabric/detail',
            templateUrl: 'module/suit/suit-fabric-detail.html',
            controller: 'MainCtrl'
        })  
        .state('home.suit.detail', {//加载西服定制细节页面
            url: '/suit/detail',
            templateUrl: 'module/suit/suit-detail.html',
            controller: function($scope, $state,productService) {
                $scope.openDetail = function(itemType,tab,tabType,selectedTabName) {
                    $scope.SuitDetail.tabType = tabType;
                    if(tabType == "XF13"){
                        $scope.SuitDetail.relVal = "prod.part.lingdai";
                    }else{
                        $scope.SuitDetail.relVal = tabType;
                    }
                    $scope.SuitDetail.selectedTabName = selectedTabName;
                    
                    getTabData(itemType,tabType);
                    $state.go("home.suit.detail.tab",{'tab':tab,'tabType':tabType,'selectedTabName':selectedTabName});
                }
                
                $scope.goDefault = function(itemType){
                    $scope.SuitDetail.tabType = '';
                    $scope.SuitDetail.tabData = [];
                    $scope.SuitDetail.selectedCrftNo = '';

                    $scope.currentModel.selectSuitCategory = itemType;
                    $state.go("home.suit.detail.default",{'itemType':itemType});
                }

                $scope.changeFront = function() {
                    $scope.SuitDetail.backside = false;
                };

                $scope.changeBack = function() {
                    $scope.SuitDetail.backside = true;
                };

                function getTabData(itemType,tabType){
                    if(itemType == 'suit'){
                        if(tabType == "XF13"){
                            for(var i=0; i < $scope.currentModel.parts.length; i++){
                                if($scope.currentModel.parts[i].type == "prod.part.lingdai"){
                                    $scope.SuitDetail.selectedCrftNo = $scope.currentModel.parts[i].no;
                                }
                            }
                            $scope.SuitDetail.tabData = $scope.prodPartLingdai;
                        }else{
                            $scope.SuitDetail.selectedCrftNo = productService.getCurrentCrft(tabType);
                            for(var i = 0; i < $scope.suitCrfs.length; i++){
                                if($scope.suitCrfs[i].type == tabType){
                                    $scope.SuitDetail.tabData = $scope.suitCrfs[i].data;
                                    break;
                                }
                            }
                        }
                        for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                            $scope.SuitDetail.selectCraf.name = '';
                            $scope.SuitDetail.selectCraf.description = '';
                            if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                                $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                                $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                                break;
                            }
                        }
                    }else if(itemType == 'pants'){
                        $scope.SuitDetail.selectedCrftNo = productService.getCurrentCrft(tabType,'pants');
                        for(var i = 0; i < $scope.pantsCrfs.length; i++){
                            if($scope.pantsCrfs[i].type == tabType){
                                $scope.SuitDetail.tabData = $scope.pantsCrfs[i].data;
                                break;
                            }
                        }
                        for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                            $scope.SuitDetail.selectCraf.name = '';
                            $scope.SuitDetail.selectCraf.description = '';
                            if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                                $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                                $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                                break;
                            }
                        }
                    }
                }

                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("detailMenu");
                $scope.SuitDetail = {
                    backside : false,
                    tabData : [],
                    tabType : '',
                    selectedTabName: '',
                    selectedCrftNo:'',
                    selectCraf:{
                        name:'',
                        description:''
                    }
                };
                //$scope.goDefault('suit');
                $scope.goDefault($scope.currentModel.selectSuitCategory);
            }
        })  
        .state('home.suit.detail.default', {//加载西服定制细节默认页面
            params:{itemType:null},
            url: '/suit/detail/default',
            templateUrl: 'module/suit/suit-detail-default.html',
            cache:false,
            controller: function($scope, $state,$stateParams,productService) {
                currentModel = null;
                if($stateParams.itemType == 'pants'){
                    loadDataDefault(productService.suitPantsModel);
                    $scope.changeTabSelected("");
                    refresh2DArea(currentModel,"fabric","pantsModuleContainer");
                }else if($stateParams.itemType == 'suit'){
                    loadDataDefault(productService.currentModel);
                    $scope.changeTabSelected("");
                    refresh2DArea(currentModel,"fabric");
                }
            }
        }) 
        .state('home.suit.detail.tab', {
            params:{'tab':null,'tabType':null,'selectedTabName':null},
            url: '/suit/detail/tab',
            templateUrl: 'module/suit/suit-detail-tab.html',
            controller: function($scope, $state,$stateParams,productService) {
                $scope.changeDetailTab = function($event, relVal, itemNo,itemName){
                    if($scope.currentModel.selectSuitCategory == 'suit'){
                        //确定现在只改领带的，所以在代码中写if,else'
                        if($scope.SuitDetail.tabType == 'XF13'){
                            //领带的时候选择的是配饰，不是工艺
                            $scope.currentModel = productService.setCurrentPart(relVal,itemNo,itemName);
                            $scope.SuitDetail.selectedCrftNo = productService.getCurrentPart(relVal);
                            for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                                $scope.SuitDetail.selectCraf.name = '';
                                $scope.SuitDetail.selectCraf.description = '';
                                if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                                    $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                                    $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                                    break;
                                }
                            }
                        }else{
                            $scope.currentModel = productService.setCurrentCrft($scope.SuitDetail.tabType,itemNo,itemName);
                            $scope.SuitDetail.selectedCrftNo = productService.getCurrentCrft($scope.SuitDetail.tabType);
                            for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                                $scope.SuitDetail.selectCraf.name = '';
                                $scope.SuitDetail.selectCraf.description = '';
                                if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                                    $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                                    $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                                    break;
                                }
                            }
                        }
                        $scope.changeCrftItem($event, relVal, itemNo);
                    }else if($scope.currentModel.selectSuitCategory == 'pants'){
                        $scope.currentModel = productService.setCurrentCrft($scope.SuitDetail.tabType,itemNo,itemName,'pants');
                        $scope.SuitDetail.selectedCrftNo = productService.getCurrentCrft($scope.SuitDetail.tabType,'pants');
                        for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                            $scope.SuitDetail.selectCraf.name = '';
                            $scope.SuitDetail.selectCraf.description = '';
                            if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                                $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                                $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                                break;
                            }
                        }
                        $scope.changeCrftItem($event, relVal, itemNo);
                    }
                }

                $scope.changeTabSelected($stateParams.tab);
                refresh2DArea(currentModel,$stateParams.tabType);
            }
        }) 
        .state('home.suit.personal', {//加载西服定制个性页面
            url: '/suit/personal',
            templateUrl: 'module/suit/suit-personal.html',
            controller: function($scope, $state,productService) {
                $scope.changeEmbroideryText =function(){
                    productService.changeEmbroideryText($scope.currentModel.embroideryText);
                }
                $scope.bodyCss("personal-bg");
                $scope.changeSuitMenu("personalMenu");
                $state.go("home.suit.personal.embroidery"); 
            }
        })  
        .state('home.suit.personal.embroidery', {//加载西服定制个性-刺绣页面
            url: '/suit/personal/embroidery',
            templateUrl: 'module/suit/suit-personal-embroidery.html',
            controller:'Embroidery'
        }) 
        .state('home.suit.personal.manual', {//加载西服定制个性-手工页面
            url: '/suit/personal/manual',
            templateUrl: 'module/suit/suit-personal-manual.html',
             controller: function($scope, $state) {
                $scope.bodyCss("personal-bg");
                $scope.changeTabSelected("manualTab");
            }
        }) 
        .state('home.suit.size', {//加载西服定制尺寸页面
            url: '/suit/size',
            templateUrl: 'module/suit/suit-size.html',
            controller:  function($scope, $state) {	
                $scope.bodyCss("personal-bg");
                $scope.changeSuitMenu("sizeMenu");
                $state.go("home.suit.size.measure");
            }
        }) 
        .state('home.suit.size.standard', {//加载西服定制尺寸-标准尺码页面
            url: '/standard',
            templateUrl: 'module/suit/suit-size-standard.html',
            controller: "StandardCtrl"
        }) 
        .state('home.suit.size.measure', {//加载西服定制尺寸-预约量体页面
            url: '/measure',
            templateUrl: 'module/suit/suit-size-measure.html',
            controller: "StandardCtrl"
        }) 
        /*
        *   订单相关
        */
        .state('home.suit.preview', {//加载西服定制预览页面
            url: '/suit/preview',
            views: {
                '': {
                    templateUrl: 'module/suit/suit-preview.html',
                    controller: function($scope, $state) {
                        $scope.bodyCss("pro-bg");
                        $scope.changeSuitMenu("previewMenu");
                        $state.go("home.suit.preview.default");
                    }
                }
            }
        })  
        .state('home.suit.preview.default', {//加载西服定制面料详情页面
           url: '/preview/default',
            templateUrl: 'module/suit/suit-preview-default.html',
            controller: function($scope, $state, DesignService,OrderService,productService) {
                //保存设计按钮
                $scope.saveDesign = function(){
                    DesignService.addDesign().then(function(result){
                        $scope.design=result;
                        $state.go("home.suit.preview.design",{design:$scope.design});
                    },function(err){
                        console.error(err);
                    })
                }
                //"立即下单"
                $scope.immediateOrder = function(){
                    //转化成订单
                    $scope.convertToOrder();
                    //跳转到订单清单确认页面
                    $state.go("order");
                }


                //将当前商品转化成一个订单，[注意：此时还没有提交到后台]
                $scope.convertToOrder = function(){
                    var currentSuitModel = productService.currentModel;
                    var suitPantsModel = productService.suitPantsModel;
                    var imgHtml = '<div id="orderImages" class="model-images" ng-show="false"></div>';
                    $("#3dmodel").append(imgHtml);

                    // currentSuitModel.itemImg = $scope.drawOrderImg();
                    // currentSuitModel.imgType = "image/png";
                    // currentSuitModel.imgName = "orderitem.png";
                    OrderService.addCurrentOrder(currentSuitModel,suitPantsModel);
                    //$("#orderImages").remove();
                }

                

                $scope.changeModel = function(itemType){
                    if(itemType == 'suit'){
                        $scope.currentModel.selectSuitCategory='suit';
                        currentModel = null;
                        loadDataDefault(productService.currentModel);
                        initPreview(SUIT_CORE_DATA.crafts);
                    }else if(itemType == 'pants'){
                        $scope.currentModel.selectSuitCategory='pants';
                        currentModel = null;
                        loadDataDefault(productService.suitPantsModel);
                        initPreview(PANTS_CORE_DATA.crafts);
                    }
                }

                // if($scope.currentModel.selectSuitCategory != 'suit'){
                //     $scope.currentModel.selectSuitCategory='suit';
                //     currentModel = null;
                //     loadDataDefault(productService.currentModel);
                // }
                // initPreview(SUIT_CORE_DATA.crafts);
                $scope.changeModel($scope.currentModel.selectSuitCategory);
            }
        }) 
        .state('home.suit.preview.design', {//加载西服保存设计
            params:{design:null},
            url: '/design',
            templateUrl: 'module/suit/suit-save.html',
            controller: function($scope, $state, $stateParams) {
                var design = $stateParams.design; 
                $scope.qrcodeimageurl = SALES_HOST+'image?id='+design.qrimagecode;
            }
        })
        /*
        * 西裤
        */
        .state('home.pants', {//加载西裤定制页面
            url: '/pants',
            views: {
                'main@home': {
                    templateUrl: 'module/pants/pants.html',
                    controller: function($scope, $state,productService) {                        
                        $scope.changeScene = function(scene){
                            $scope.resetCarousel();
                            $scope.currentModel = productService.changeScene('pants',scene,$scope.pantsScenes);
                            $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                        };
                        $scope.currentModel = productService.changeCurrentModelWhenSwitchRouting("pants");
                        //初始化场景
                        if($scope.currentModel == undefined || $scope.currentModel.selectedScene == undefined ){
                            $scope.changeScene('A');
                        }
                        $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                        //完善productService中模型的工艺数据
                        productService.currentModel = productService.copyModelCrafts(productService.currentModel);
                        $state.go("home.pants.style");
                    }
                }
            }
        })  
       .state('home.pants.style', {//加载西裤定制款式页面
            url: '/pants/style',
            templateUrl: 'module/pants/pants-style.html',
            controller: function($scope, $state,productService) {
                $scope.bodyCss("pro-bg");
                $scope.carousel("slider-group");
                $scope.changeSuitMenu("styleMenu");
            }
        })    
        .state('home.pants.fabric', {//加载西裤定制面料页面
            url: '/pants/fabric',
            templateUrl: 'module/pants/pants-fabric.html',
            controller: function($scope, $state,productService) {
                $scope.changeBrand = function(brandNo,brandId){
                    $scope.changeTabSelected(brandId);
                    $scope.currentModel = productService.changeBrand($scope.fabricbrands,$scope.fabricinfos,brandNo);
                };
                $scope.changeFabric = function($event, craft, itemNo){
                    $scope.currentModel = productService.changeFabric(itemNo);
                    $scope.changeCrftItem($event, craft, itemNo);
                    $scope.prodPrice = productService.retrieveProdPrice($scope.currentModel.fabric.no);
                };
                $scope.currentModel = productService.changeBrand($scope.fabricbrands,$scope.fabricinfos);
                $state.go("home.pants.fabric.default");
            }  
        })
        .state('home.pants.fabric.default', {//加载西裤定制面料详情页面
            url: '/pants/fabric/default',
            templateUrl: 'module/pants/pants-fabric-default.html',
            controller: function($scope, $state,productService) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("fabricMenu");
                refresh2DArea(currentModel,"fabric");
            }
        })
        .state('home.pants.fabric.detail', {//加载西裤定制面料详情页面
           url: '/pants/fabric/detail',
            templateUrl: 'module/pants/pants-fabric-detail.html',
            controller: 'MainCtrl'
        })  
        .state('home.pants.detail', {//加载西裤定制细节页面
            url: '/pants/detail',
            templateUrl: 'module/pants/pants-detail.html',
            controller: function($scope, $state,productService) {
                $scope.openDetail = function(tab,tabType,selectedTabName) {
                    $scope.SuitDetail.tabType = tabType;
                    $scope.SuitDetail.relVal = tabType;
                    $scope.SuitDetail.selectedTabName = selectedTabName;
                    getTabData(tabType);
                    $state.go("home.pants.detail.tab",{'tab':tab,'tabType':tabType,'selectedTabName':selectedTabName});
                }
                
                $scope.goDefault = function(){
                    $scope.SuitDetail.tabType = '';
                    $scope.SuitDetail.tabData = [];
                    $scope.SuitDetail.selectedCrftNo = '';
                    $state.go("home.pants.detail.default");
                }

                $scope.changeFront = function() {
                    $scope.SuitDetail.backside = false;
                };

                $scope.changeBack = function() {
                    $scope.SuitDetail.backside = true;
                };

                function getTabData(tabType){
                    $scope.SuitDetail.selectedCrftNo = productService.getCurrentCrft(tabType);
                    for(var i = 0; i < $scope.pantsCrfs.length; i++){
                        if($scope.pantsCrfs[i].type == tabType){
                            $scope.SuitDetail.tabData = $scope.pantsCrfs[i].data;
                            break;
                        }
                    }
                    for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                        $scope.SuitDetail.selectCraf.name = '';
                        $scope.SuitDetail.selectCraf.description = '';
                        if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                            $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                            $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                            break;
                        }
                    }
                }

                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("detailMenu");
                $scope.SuitDetail = {
                    backside : false,
                    tabData : [],
                    tabType : '',
                    selectedTabName: '',
                    selectedCrftNo:'',
                    selectCraf:{
                        name:'',
                        description:''
                    }
                };
                $scope.goDefault();
            }
        })  
        .state('home.pants.detail.default', {//加载西裤定制细节默认页面页面
            url: '/pants/detail/default',
            templateUrl: 'module/pants/pants-detail-default.html',
            controller: function($scope, $state) {
				$scope.changeTabSelected("");
                refresh2DArea(currentModel,"fabric");
            }
        }) 
        .state('home.pants.detail.tab', {
            params:{'tab':null,'tabType':null,'selectedTabName':null},
            url: '/pants/detail/tab',
            templateUrl: 'module/pants/pants-detail-tab.html',
            controller: function($scope, $state,$stateParams,productService) {
                $scope.changeDetailTab = function($event, relVal, itemNo,itemName){
                    $scope.currentModel = productService.setCurrentCrft($scope.SuitDetail.tabType,itemNo,itemName);
                    $scope.SuitDetail.selectedCrftNo = productService.getCurrentCrft($scope.SuitDetail.tabType);
                    for(var i=0; i < $scope.SuitDetail.tabData.length; i++){
                        $scope.SuitDetail.selectCraf.name = '';
                        $scope.SuitDetail.selectCraf.description = '';
                        if($scope.SuitDetail.selectedCrftNo == $scope.SuitDetail.tabData[i].no){
                            $scope.SuitDetail.selectCraf.name = $scope.SuitDetail.tabData[i].name;
                            $scope.SuitDetail.selectCraf.description = $scope.SuitDetail.tabData[i].description;
                            break;
                        }
                    }
                    $scope.changeCrftItem($event, relVal, itemNo);
                }

                $scope.changeTabSelected($stateParams.tab);
                refresh2DArea(currentModel,$stateParams.tabType);
            }
        }) 
        .state('home.pants.size', {//加载西裤定制尺寸页面
            url: '/pants/size',
            templateUrl: 'module/pants/pants-size.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("sizeMenu");
                $state.go("home.pants.size.measure");
            }
        }) 
        .state('home.pants.size.standard', {//加载西裤定制尺寸-标准尺码页面
            url: '/standard',
            templateUrl: 'module/pants/pants-size-standard.html',
            controller: "StandardCtrl"
        })
        .state('home.pants.size.measure', {//加载西裤定制尺寸-预约量体页面
            url: '/pants/size/measure',
            templateUrl: 'module/pants/pants-size-measure.html',
            controller: "StandardCtrl"
        }) 
        .state('home.pants.preview', {//加载西裤定制预览页面
            url: '/pants/preview',
            templateUrl: 'module/pants/pants-preview.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("previewMenu");
				$state.go("home.pants.preview.default");
            }
        }) 
		.state('home.pants.preview.default', {//加载西裤定制预览详情页面
           url: '/preview/default',
            templateUrl: 'module/pants/pants-preview-default.html',
            controller: function($scope, $state, DesignService,OrderService,productService) {
                //保存设计按钮
                $scope.saveDesign = function(){
                    DesignService.addDesign().then(function(result){
                        $scope.design=result;
                        $state.go("home.pants.preview.design",{design:$scope.design});
                    },function(err){
                        console.error(err);
                    })
                }
                //"立即下单"
                $scope.immediateOrder = function(){
                    //转化成订单
                    $scope.convertToOrder();
                    //跳转到订单清单确认页面
                    $state.go("order");
                }
                //将当前商品转化成一个订单，[注意：此时还没有提交到后台]
                $scope.convertToOrder = function(){
                    var currentModel = productService.currentModel;
                    var imgHtml = '<div id="orderImages" class="model-images" ng-show="false"></div>';
                    $("#3dmodel").append(imgHtml);
                    OrderService.addCurrentOrder(currentModel,null);
                    $("#orderImages").remove();
                }

                initPreview(PANTS_CORE_DATA.crafts);
            }
        }) 
        .state('home.pants.preview.design', {//加载西服保存设计
            params:{design:null},
            url: '/design',
            templateUrl: 'module/pants/pants-save.html',
            controller: function($scope, $state, $stateParams) {
                var design = $stateParams.design; 
                $scope.qrcodeimageurl = SALES_HOST+'image?id='+design.qrimagecode;
            }
        })
        /*
        * 衬衫
        */
        .state('home.shirt', {//加载衬衫定制页面
            url: '/shirt',
            views: {
                'main@home': {
                    templateUrl: 'module/shirt/shirt.html',
                    controller: function($scope, $state,productService) { 
                        $scope.currentModel = productService.changeCurrentModelWhenSwitchRouting("shirt",shirtDefaultModel);
                        //每次进入衬衫定制就初始化
                        loadDataDefault(shirtDefaultModel);
                        $state.go("home.shirt.style");
                    }
                }
            }
        })  
        .state('home.shirt.style', {//加载衬衫定制款式页面
            url: '/shirt/style',
            templateUrl: 'module/shirt/shirt-style.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("styleMenu");
            }
        })    
        .state('home.shirt.fabric', {//加载衬衫定制面料页面
            url: '/shirt/fabric',
            templateUrl: 'module/shirt/shirt-fabric.html',
            controller: function($scope, $state) {
                $state.go("home.shirt.fabric.default");
            }
        })  
        .state('home.shirt.fabric.default', {//加载衬衫定制面料详情页面
           url: '/shirt/fabric/default',
            templateUrl: 'module/shirt/shirt-fabric-default.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("fabricMenu");
                refresh2DArea(currentModel,"fabric");
                $scope.changeFabricType = function($event,type){
                    var obj = $event.currentTarget;
                    $(obj).parent().find("a").each(function(){
                        $(this).removeClass("on"); 
                    }); 
                    $(obj).addClass("on");
                    $scope.fabricTypeShow = type;
                }
            }

        })  
        .state('home.shirt.fabric.detail', {//加载衬衫定制面料详情页面
           url: '/shirt/fabric/detail',
            templateUrl: 'module/shirt/shirt-fabric-detail.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
            }

        })  
        .state('home.shirt.detail', {//加载衬衫定制细节页面
            url: '/shirt/detail',
            templateUrl: 'module/shirt/shirt-detail.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("detailMenu");
                $state.go("home.shirt.detail.default");
            }
        })  
        .state('home.shirt.detail.default', {//加载衬衫定制细节默认页面页面
            url: '/shirt/detail/default',
            templateUrl: 'module/shirt/shirt-detail-default.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("");
                refresh2DArea(currentModel,"fabric");

                $scope.isShow = true;
                $scope.button_front="btn btn-success btn-prev";
                $scope.button_back="btn btn-prev";
                $scope.change = function(code) {
                    if(code=="front"){
                        $scope.isShow = true;
                        $scope.button_front="btn btn-success btn-prev";
                        $scope.button_back="btn btn-prev";
                    }else if(code=="back"){
                        $scope.isShow = false;
                         $scope.button_front="btn btn-prev";
                        $scope.button_back="btn btn-success btn-prev";
                    }
                };
            }
        }) 
        .state('home.shirt.detail.collar', {//加载衬衫定制细节领型页面
            url: '/shirt/detail/collar',
            templateUrl: 'module/shirt/shirt-detail-collar.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("collarTab");
                refresh2DArea(currentModel,"XF08");
            }
        }) 
        .state('home.shirt.detail.collarstand', {//加载衬衫定制细节领座页面
            url: '/shirt/detail/collarstand',
            templateUrl: 'module/shirt/shirt-detail-collarstand.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("collarstandTab");
                refresh2DArea(currentModel,"XF08");
            }
        }) 
        .state('home.shirt.detail.placket', {//加载衬衫定制细节门襟页面
            url: '/shirt/detail/placket',
            templateUrl: 'module/shirt/shirt-detail-placket.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("placketTab");
                refresh2DArea(currentModel,"XF13");
            }
        }) 
        .state('home.shirt.detail.breastpocket', {//加载衬衫定制细节胸袋页面
            url: '/shirt/detail/breastpocket',
            templateUrl: 'module/shirt/shirt-detail-breastpocket.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("breastpocketTab");
                refresh2DArea(currentModel,"XF04");
            }
        }) 
        .state('home.shirt.detail.backpiece', {//加载衬衫定制细节后片页面
            url: '/shirt/detail/backpiece',
            templateUrl: 'module/shirt/shirt-detail-backpiece.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("backpieceTab");
                refresh2DArea(currentModel,"XF05");
            }
        })
        .state('home.shirt.detail.cuff', {//加载衬衫定制细节袖头页面
            url: '/shirt/detail/cuff',
            templateUrl: 'module/shirt/shirt-detail-cuff.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("cuffTab");
                refresh2DArea(currentModel,"XF07");
            }
        })
        .state('home.shirt.detail.lap', {//加载衬衫定制细节下摆页面
            url: '/shirt/detail/lap',
            templateUrl: 'module/shirt/shirt-detail-lap.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("lapTab");
                refresh2DArea(currentModel,"XF02");
            }
        })    
        .state('home.shirt.personal', {//加载衬衫定制个性页面
            url: '/shirt/personal',
            templateUrl: 'module/shirt/shirt-personal.html',
             controller: function($scope, $state, COM_CORE_DATA_CONSTANTS) {
                $scope.bodyCss("personal-bg");

                var parts = COM_CORE_DATA_CONSTANTS.parts;
                for(var i = 0;i < parts.length; i++){
                    if(parts[i].type == "prod.part.xian"){
                        $scope.prodPartXian = parts[i].data;
                        break;
                    }
                }

                $scope.changeSuitMenu("personalMenu");
                $state.go("home.shirt.personal.embroidery"); 
            }
        })  
        .state('home.shirt.personal.embroidery', {//加载衬衫定制个性-刺绣页面
            url: '/shirt/personal/embroidery',
            templateUrl: 'module/shirt/shirt-personal-embroidery.html',
             controller: function($scope, $state) {
                $scope.bodyCss("personal-bg");
                $scope.changeTabSelected("embroideryTab");
            }
        }) 
        .state('home.shirt.personal.manual', {//加载衬衫定制个性-手工页面
            url: '/shirt/personal/manual',
            templateUrl: 'module/shirt/shirt-personal-manual.html',
             controller: function($scope, $state) {
                $scope.bodyCss("personal-bg");
                $scope.changeTabSelected("manualTab");
            }
        }) 
        .state('home.shirt.size', {//加载衬衫定制尺寸页面
            url: '/shirt/size',
            templateUrl: 'module/shirt/shirt-size.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("sizeMenu");
                $state.go("home.shirt.size.standard");
            }
        }) 
        .state('home.shirt.size.standard', {//加载衬衫定制尺寸-标准尺码页面
            url: '/shirt/size/standard',
            templateUrl: 'module/shirt/shirt-size-standard.html',
            controller: "StandardCtrl"
        }) 
        .state('home.shirt.size.helper', {//加载西服定制尺寸-标准尺码页面
            url: '/shirt/size/helper',
            templateUrl: 'module/shirt/shirt-size-helper.html',
            controller: "StandardCtrl"
        }) 
        .state('home.shirt.size.measure', {//加载衬衫定制尺寸-预约量体页面
            url: '/shirt/size/measure',
            templateUrl: 'module/shirt/shirt-size-measure.html',
            controller: function($scope, $state) {
                $scope.changeTabSelected("measureTab");
            }
        }) 
        .state('home.shirt.preview', {//加载衬衫定制预览页面
            url: '/shirt/preview',
            templateUrl: 'module/shirt/shirt-preview.html',
            controller: function($scope, $state) {
                $scope.bodyCss("pro-bg");
                $scope.changeSuitMenu("previewMenu");
                $state.go("home.shirt.preview.default");
            }
        }) 
        .state('home.shirt.preview.default', {//加载衬衫定制预览默认页面
            url: '/preview/default',
            templateUrl: 'module/shirt/shirt-preview-default.html',
            controller: function($scope, $state) {
                initPreview(SHIRT_CORE_DATA.crafts);
            }
        }) 

        
});

function loadDataDefault(defaultModel){
    if(currentModel==null || currentModel=='') {
        var validateResult = validateChange(clone(defaultModel), null, null);
        if (validateResult.isSuccess){
            currentModel = validateResult.targetModel;
            //defaultModel = clone(currentModel);
        }else{
            console.error("validation is failed");
        }
    } else {
            currentModel = clone(currentModel);
    }
}