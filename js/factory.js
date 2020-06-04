/*
*   服务
*/
judgerApp.factory('ContactService', function($http,$q){
    var membercode = getCurrentParam("membercode");
    var addContract = function(contact) {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //新增用户联系地址
        $http.post(
            CRM_HOST+'m_member!addContract.action',
            {
                'vo.memberContactInfo.membercode':membercode,
                'vo.memberContactInfo.receivername':contact.name,
                'vo.memberContactInfo.mobile':contact.mobile,
                'vo.memberContactInfo.addressdetail':contact.address,
                'vo.memberContactInfo.defaultaddress':contact.defaultaddress
            }
        )
        .success(function(data,status,headers,config){
            var head = data.head;
            var result = data.body;
            if(head!=null && head.st=="0"){
                var contactData = result.body;
                 deferred.resolve(contactData);
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("addContract error data:"+data);
        });
        return promise;
    };
    var upateContract = function(contact) {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //修改用户联系地址
        $http.post(
            CRM_HOST+'m_member!upateContract.action',
            {
                'vo.contractCode':contact.contactCode,
                'vo.memberContactInfo.membercode':membercode,
                'vo.memberContactInfo.receivername':contact.name,
                'vo.memberContactInfo.mobile':contact.mobile,
                'vo.memberContactInfo.addressdetail':contact.address,
                'vo.memberContactInfo.defaultaddress':contact.defaultaddress
            })
            .success(function(data,status,headers,config){
                var head = data.head;
                var result = data.body;
                if(head!=null && head.st=="0"){
                    var contactData = result.body;
                    deferred.resolve(contactData);
                }
            }).error(function(data,status,headers,config){
                deferred.reject();
                console.error("upateContract error data:"+data);
            });
        return promise;
    };
    var findContractList = function() {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //获取联系地址列表
        $http.post(
            CRM_HOST+'m_member!findContractList.action',
            {
                'vo.id':membercode
            })
        .success(function(data,status,headers,config){
            var head = data.head;
            var result = data.body;
            if(head!=null && head.st=="0"){
                var contactlist = result.body;
                deferred.resolve(contactlist);
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("findContractList error data:"+data);
        });
            return promise;
    };
    var findBookingOrders = function() {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //修改用户联系地址
        $http.post(
            SALES_HOST+'m_salesorder!searchBookingOrders.action',
            {
                
            })
            .success(function(data,status,headers,config){
                var head = data.head;
                var result = data.body;
                if(head!=null && head.st=="0"){
                    var orderData = result.body;
                    console.info("findBookingOrders success orderData:"+JSON.stringify(orderData));
                    deferred.resolve(orderData);
                }
            }).error(function(data,status,headers,config){
                deferred.reject();
                console.error("findBookingOrders error data:"+data);
            });
        return promise;
    };

    return {
        addContract:addContract,upateContract:upateContract,findContractList:findContractList,findBookingOrders:findBookingOrders
    }
})
.factory('PaymentService', function($state, $http, $q){
   var createPayment = function(ordercode,paymentType,openid) {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //提交后台创建支付信息
        $http.post(
            SALES_HOST+'m_salesorder!createPayment.action',
            {
                'vo.id':ordercode,
                'vo.paymentType':paymentType,
                'vo.openId':openid
            }
        ).success(function(data,status,headers,config){
            console.info("createPayment success data:"+JSON.stringify(data));
            var head = data.head;
            var body = data.body;
            if(head!=null && head.st=="0"){
                // $state.go("payment");
                if(body!=null && body.st=="0"){
                    var order = body.body;
                    deferred.resolve(order);
                }
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("createPayment error data:"+data);
        });
        return promise;
    };

    var wechatPay = function(ordercode,order,paymentType){
        var deferred=$q.defer();
        var promise=deferred.promise;
        /*
        *   调用微信浏览器内置JavaScript对象
        */
        $http.post(
            SALES_HOST+'m_salesorder!updateOrderStatus.action',
            {
                'vo.id':ordercode, 
                'vo.orderStatus':200
            }
        ).success(function(data,status,headers,config){
            console.info("wechatPay success data:"+JSON.stringify(data));
            var head = data.head;
            var result = data.body;
            if(head!=null && head.st=="0"){
                var dataJson = result.body;
                console.log("PaymentService.wechatPay.dataJson:"+JSON.stringify(dataJson));
                //删除localstorage中的订单数据
                localStorage.removeItem("currentOrder");
                deferred.resolve(dataJson);
                //跳转至支付成功页面
                $state.go("paymentSuccess",{order:JSON.stringify(dataJson)});
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("wechatPay error data:"+data);
        });

        // if (typeof WeixinJSBridge == "undefined"){
        //     if( document.addEventListener ){
        //         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        //     }else if (document.attachEvent){
        //         document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
        //         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        //     }
        // }else{
        //     WeixinJSBridge.invoke('getBrandWCPayRequest',{
        //         "appId":order.result.appId, //公众号名称，由商户传入
        //         "timeStamp":order.result.timeStamp, //时间戳，自1970 年以来的秒数
        //         "nonceStr":order.result.nonceStr, //随机串
        //         "package":order.result.package,
        //         "signType":"MD5", //微信签名方式:
        //         "paySign":order.result.paySign //微信签名
        //     },function(res){
        //         if(res.err_msg == "get_brand_wcpay_request:ok" ) {
        //             //修改订单状态
        //             //订单状态 100：订单创建；200：已付款；400：生产中；500：配送中；600：订单完成；50：订单返修；00：订单取消
        //            $http.post(
        //                 SALES_HOST+'m_salesorder!updateOrderStatus.action',
        //                 {
        //                     'vo.id':ordercode, 
        //                     'vo.orderStatus':200   
        //                 }
        //             ).success(function(data,status,headers,config){
        //                 console.info("submintOrder success data:"+JSON.stringify(data));
        //                 var head = data.head;
        //                 var result = data.body;
        //                 if(head!=null && head.st=="0"){
        //                     var dataJson = result.body;
        //                     //删除localstorage中的订单数据
        //                     localStorage.removeItem("currentOrder");
        //                     deferred.resolve(dataJson);
        //                     //跳转至支付成功页面
        //                     $state.go("paymentSuccess",{order:JSON.stringify(dataJson)});
        //                 }
        //             }).error(function(data,status,headers,config){
        //                 deferred.reject();
        //                 console.error("submintOrder error data:"+data);
        //             });
        //         }else{
        //             alert(res.err_msg);
        //             alert('支付失败');
        //         }
        //         // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg 将在用户支付成功后返回ok，但并不保证它绝对可靠。
        //     });
        // };
        return promise;
    }
    return {createPayment:createPayment,wechatPay:wechatPay};
})
.factory('OrderService', function($http,$q){
    var membercode = getCurrentParam("membercode");
    var openid = getCurrentParam("openid");
    var usercode = getCurrentParam("usercode");

     //canvas生产图片
    var drawOrderImg = function(){
        var canvas =document.getElementById("canOrderImg");  
        canvas.width=320;
        canvas.height=400;
        var context2D =canvas.getContext("2d");  
        var imgs = $("#orderImages img");
        
        var sizeSet = false;
        var pic;
        var picHeight;
        var picWidth;
        for (var i = 0; i < imgs.length; i++) {
            pic = imgs[i];
            if (!sizeSet) {
                if (pic.naturalWidth)
                    picWidth = pic.naturalWidth;
                else 
                    picWidth = pic.width;
                if (pic.naturalHeight)
                    picHeight = pic.naturalHeight;
                else 
                    picHeight = pic.height;
                sizeSet = true;
            }
            context2D.drawImage(pic, picWidth*0.1,0,pic.naturalWidth*0.8,picHeight, 0, 0, canvas.width, canvas.height);  
        }
        return canvas.toDataURL("image/png");
    }

    //增加一个订单明细
    var addOrderItem = function(model,items){
        currentModel = null;
        loadDataDefault(model);
        refresh2DArea(currentModel,"order");
        var imgHtml = $("#orderImages").html();

        var itemno = model.orderitemno;
        var item = items[itemno];
        if(item==null){
            item= {};
        }
        item['itemno'] = itemno;
        item['fabric'] = model['fabric'];

        item['itemImg'] = drawOrderImg();
        item['imgType'] = "image/png";
        item['imgName'] = "orderitem.png";

        var fabricList = COM_CORE_DATA.fabrics;
        if(fabricList!=null && fabricList.length>0){
            for(var i=0;i<fabricList.length;i++){
                var fabric = fabricList[i];
                if(fabric.no==item['fabric'].no){
                    item['fabric'] = fabric;
                }
            }
        }
        item['patternNo'] = model['patternNo'];
        var crafts = {};
        var styleName = "";
        var mainName = "";
        if(model['crafts']!=null){
            for(var i=0;i<model['crafts'].length;i++){
                var crft = model['crafts'][i];
                crafts[crft.type] = crft;
                if(model['style'].substring(0,2)=="XF"){
                    if(crft.type=="XF01"){
                        styleName = crft.name;
                    }
                    if(crft.type=="XF08"){
                        mainName = crft.name+"上衣";
                    }
                }else if(model['style'].substring(0,2)=="CY"){
                    
                }else if(model['style'].substring(0,2)=="XK"){
                    if(crft.type=="XK01"){
                        styleName = crft.name;
                    }
                    if(crft.type=="XK02"){
                        mainName = crft.name+"西裤";
                    }
                }
            }
        }

        item['crafts'] = crafts;
        var parts = {};
        if(model['parts']!=null){
            for(var i=0;i<model['parts'].length;i++){
                var part = model['parts'][i];
                parts[part.type] = part;
            }
        }
        
        item['parts'] = parts;
        item['style'] = model['style'];
        item['productName'] = styleName+mainName;
        item['proNum'] = model['proNum'];
        item['imgHtml'] = imgHtml;
        item['body'] = model['body'];
        if(model['body_']!=null){
            item['cursize'] = model['body_']['cursize'];
            if(model.style.substring(0,2) == 'XF'){
                item['clothesLengthShifting'] = model['body_']['clothesLengthShifting'];
                item['sleeveLengthShifting'] = model['body_']['sleeveLengthShifting'];
            }else if(model.style.substring(0,2) == 'XK'){
                item['trousersShifting'] = model['body_']['trousersShifting'];
            }
        }
        
        if(model.style.substring(0,2) == 'XF'){
            var embroidery = {};//刺绣相关数据
            embroidery['embroideryText'] = model.embroideryText;//刺绣文字
            embroidery['embroideryPosition'] = model.embroideryPosition;//刺绣位置
            embroidery['embroideryFont'] = model.selectedFont;//刺绣字体
            embroidery['embroideryColor'] = model.embroideryColor;//绣线颜色
            embroidery['mockButtonhole'] = model.mockButtonhole;//锁眼类型
            embroidery['buttonholeColor'] = model.buttonholeColor;//锁眼颜色
            item['embroidery'] = embroidery;
        }
        item['proNum'] = 1;
        /*
        * 根据面料获取对应西服的价格
        */
        item['totalPrice'] = model.unitPrice;//item['fabric']['price'];//单价
        item['unitPrice'] = model.unitPrice;//item['fabric']['price'];//单价
        items[itemno] = item;
        return items;
    }
   
    var addCurrentOrder = function(model,suitPantsModel){
        //封装订单数据
        deleteCurrentOrder();
        deleteCurrentParam("suit_pants_orderitemno");
        deleteCurrentParam("suit_tie_orderitemno");
        /*var order = getCurrentOrder();
        if(order==null){
            order = {};
        }*/
        var order = {};

        var items = null;
        items = order['items'];
        if(items==null){
            items = {};
        }
        var itemno = getCurrentParam("orderitemno");
        if(itemno==null){
            itemno = (new Date()).valueOf();
            setCurrentParam("orderitemno",itemno);
        }
        model['orderitemno'] = itemno;
        //若为套装首先加载西裤数据，其次再加载西服数据
        if(model.coordinatesAbility && model.isCoordinates){
            if(suitPantsModel!=null && suitPantsModel!=''){
                var pantsitemno = getCurrentParam("pantsorderitemno");
                if(pantsitemno==null){
                    var data = (new Date()).setSeconds((new Date()).getSeconds()+1);
                    pantsitemno = data.valueOf();
                    setCurrentParam("pantsorderitemno",pantsitemno);
                }
                suitPantsModel['orderitemno'] = pantsitemno;
                items = addOrderItem(suitPantsModel,items);
            }
        }
        items = addOrderItem(model,items);
        

        order['items'] = items;
        //order['num']=item['proNum'];
        order['userCode']=usercode;
        //order['totalPrice']=item['unitprice'];
        order['num'] = 0;
        order['totalPrice'] = 0;
        order['unitPrice'] = 0;
        // order['orderDesc'] = items[itemno].imgHtml;
        if(items!=null && items!=''){
            for (var key in items) {
                var item = items[key];
                order['num'] = order['num']+item.proNum;
                order['totalPrice'] = order['totalPrice']+item.totalPrice;
                order['unitPrice'] = order['unitPrice']+item.unitPrice;
            }
        }
        // order['num']=1;
        // order['totalPrice']=items[itemno]['unitprice'];
        // order['unitPrice']=items[itemno]['unitprice'];
        if(model.coordinatesAbility && model.isCoordinates){
            order.isSuitPants = true;
        }else{
            order.isSuitPants =  false;
        }
        setCurrentOrder(order);
    };

    var findOrderList = function() {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //提交后台创建支付信息
        $http.post(
            SALES_HOST+'m_salesorder!findOrderList.action',
            {
                'vo.customerCode':membercode
            }
        ).success(function(data,status,headers,config){
            var head = data.head;
            var body = data.body;
            if(head!=null && head.st=="0"){
                // $state.go("payment");
                if(body!=null && body.st=="0"){
                    var orderList = body.body;
                    deferred.resolve(orderList);
                }
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("OrderListService error data:"+data);
        });
        return promise;
    };
    var showOrderDetail = function(ordercode) {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //提交后台创建支付信息
        $http.post(
            SALES_HOST+'m_salesorder!getOrderDetail.action',
            {
                'vo.id':ordercode
            }
        ).success(function(data,status,headers,config){
            var head = data.head;
            var body = data.body;
            if(head!=null && head.st=="0"){
                // $state.go("payment");
                if(body!=null && body.st=="0"){
                    var order = body.body;
                    deferred.resolve(order);
                }
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("showOrderDetail error data:"+data);
        });
        return promise;
    };

    var submitOrder = function(cUser,order,usercode,storecode){
        var deferred=$q.defer();
        var promise=deferred.promise;

        // 本地提交 // 本地数据返回
        if (LOCAL_STANDALONE) {
            var orderNo = createOrderNo();
            deferred.resolve(orderNo);
        } else {
            //提交后台创建订单
            $http.post(
                SALES_HOST+'m_salesorder!submitCarOrder.action',
                {
                    'vo.bodyStr':JSON.stringify(cUser),
                    'vo.orderStr':JSON.stringify(order),
                    'vo.userCode':usercode,
                    'vo.storeCode':storecode,
                    'vo.salesChannelKey':'100' //销售渠道  门店：100；微信：200：量体车：300
                }
            ).success(function(data,status,headers,config){
                var head = data.head;
                var body = data.body;
                if(head!=null && head.st=="0"){
                    var orderData = body.body;
                    deferred.resolve(orderData);
                }
            }).error(function(data,status,headers,config){
                deferred.reject();
                console.error("submintOrder error data:"+data);
            });
        }
        return promise;
    };
    return {
        findOrderList:findOrderList,showOrderDetail:showOrderDetail,submitOrder:submitOrder,addCurrentOrder:addCurrentOrder
    }
})
.factory('DesignService', function($http,$q){
    var membercode = getCurrentParam("membercode");
    var usercode = getCurrentParam("usercode");
    var designdata = JSON.stringify(currentModel);
    var addDesign = function() {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //提交后台保存顾客设计
        $http.post(
            SALES_HOST+'m_design!addDesign.action',
            {
                'vo.customerDesign.membercode':membercode,
                'vo.customerDesign.type':Number("1"),
                'vo.customerDesign.designdata':designdata,
                'vo.userCode':usercode
            }
        ).success(function(data,status,headers,config){
            var head = data.head;
            var body = data.body;
            if(head!=null && head.st=="0"){
                if(body!=null && body.st=="0"){
                    var design = body.body;
                    deferred.resolve(design);
                }
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("DesignService.addDesign.error.data:"+data);
        });
         return promise;
    };
    var searchDesignList = function() {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //提交后台保存顾客设计
        console.info("DesignService.searchDesignList.membercode:"+membercode);
        $http.post(
            SALES_HOST+'m_design!searchDesignList.action',
            {
                'vo.memberCode':membercode
            }
        ).success(function(data,status,headers,config){
            var head = data.head;
            var body = data.body;
            console.info("DesignService.searchDesignList.body:"+JSON.stringify(body));
            if(head!=null && head.st=="0"){
                if(body!=null && body.st=="0"){
                    var design = body.body;
                    deferred.resolve(design);
                }
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("DesignService.searchDesignList.error.data:"+data);
        });
         return promise;
    };
    var showDesignDetail = function(designcode) {
        var deferred=$q.defer();
        var promise=deferred.promise;
        //提交后台保存顾客设计
        $http.post(
            SALES_HOST+'m_design!showDesignDetail.action',
            {
                'vo.id':designcode
            }
        ).success(function(data,status,headers,config){
            var head = data.head;
            var body = data.body;
            if(head!=null && head.st=="0"){
                if(body!=null && body.st=="0"){
                    var design = body.body;
                    deferred.resolve(design);
                }
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("DesignService.showDesignDetail.error.data:"+data);
        });
         return promise;
    };

    return {
        addDesign:addDesign,searchDesignList:searchDesignList,showDesignDetail:showDesignDetail
    }
})
.factory('ReservationService', function($http,$q){
    var membercode = getCurrentParam("membercode");
    var usercode = getCurrentParam("usercode");
    var reservation = function(obj) {
        var deferred=$q.defer();
        var promise=deferred.promise;
        membercode = membercode == undefined ?null:membercode;
        usercode = usercode == undefined ?null:usercode;
        customername = obj.customername == undefined ?null:obj.customername;
        telphone = obj.telphone == undefined ?null:obj.telphone;
        province = obj.province == undefined ?null:obj.province;
        city = obj.city == undefined ?null:obj.city;
        comments = obj.comments == undefined ?null:obj.comments;
        //提交后台保存预约  
        $http.post(
            SALES_HOST +'m_reservation!reservation.action',
            {
                'vo.reservation.crmmembercode':membercode,
                'vo.reservation.createby':usercode,
                'vo.reservation.customername':obj.customername,
                'vo.reservation.telphone':obj.telphone,
                'vo.reservation.province':obj.province,
                'vo.reservation.city':obj.city,
                'vo.reservation.comments':obj.comments
            }
        ).success(function(data,status,headers,config){
            var head = data.head;
            var body = data.body;
            if(head!=null && head.st=="0"){
                deferred.resolve(body);
            }
        }).error(function(data,status,headers,config){
            deferred.reject();
            console.error("ReservationService.reservation.error.data:"+data);
        });
         return promise;
    };

    return {
        reservation:reservation
    }
})

;


var currentOrderIndex = 0;
var currentOrderNo;
var currentOrderName;
var currentOrderPhone;
var currentOrderAddress;

function createOrderNo(){
    sleep(500);
    currentOrderNo = "RY"+new Date().Format("MMdd")+"A" +new Date().Format("hhmm");
    return currentOrderNo;
}
function sleep(numberMillis) { 
    var now = new Date(); 
    var exitTime = now.getTime() + numberMillis; 
    while (true) { 
        now = new Date(); 
        if (now.getTime() > exitTime) 
            return; 
    } 
}

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}