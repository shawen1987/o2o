/*
*   控制器
*/
judgerApp.controller("HomeCtrl", ["$location", "$scope", "$state", "productService", "ReservationService", "COM_CORE_DATA_CONSTANTS", "SUIT_CORE_DATA_CONSTANTS", "SHIRT_CORE_DATA_CONSTANTS", "PANTS_CORE_DATA_CONSTANTS", "toaster", function ($location, $scope, $state, productService, ReservationService, COM_CORE_DATA_CONSTANTS, SUIT_CORE_DATA_CONSTANTS, SHIRT_CORE_DATA_CONSTANTS, PANTS_CORE_DATA_CONSTANTS, toaster) {
    // localStorage.clear("currentParams");   

    $scope.reservation = function () {
        var obj = {};
        obj.customername = $scope.reservation.customername;
        obj.telphone = $scope.reservation.telphone;
        obj.province = $scope.reservation.province;
        obj.city = $scope.reservation.city;
        obj.comments = $scope.reservation.comments;

        if (obj.customername == undefined || obj.customername == null ||
            obj.telphone == undefined || obj.telphone == null) {
            showAlertfail();
            return;
        }

        var hasReservation = sessionStorage.getItem("hasReservation");
        if (hasReservation !== undefined && hasReservation != null) {
            showAlertWin();
            return;
        }

        ReservationService.reservation(obj).then(function (result) {
            if (result != null && result.st == 0) {
                var membercode = getCurrentParam("membercode");
                sessionStorage.setItem("hasReservation", membercode);
                showAlertWin();
            }
        }, function (err) {
            console.error(err);
        })
    }

    function showAlertWin() {
        var timeID = null;
        var hideD = function () {
            $(".alertWin").fadeOut(300, function () {
                document.body.removeChild($('.alertWin')[0]);
            });
            clearTimeout(timeID);
        }
        var alertWin = '<div class="win alertWin"><div class="win-box"><h5>预约成功！</h5><p>后续我们客服会联系您和您确认相关信息</p></div></div>';
        $(document.body).append(alertWin);
        $(".alertWin").show();
        timeID = setTimeout(hideD, 1500);
    }

    function showAlertfail() {
        var timeID = null;
        var hideD = function () {
            $(".alertWin").fadeOut(300, function () {
                document.body.removeChild($('.alertWin')[0]);
            });
            clearTimeout(timeID);
        }
        var alertWin = '<div class="win alertWin"><div class="win-box"><h5>预约失败！</h5><p>请填写姓名和电话</p></div></div>';
        $(document.body).append(alertWin);
        $(".alertWin").show();
        timeID = setTimeout(hideD, 1500);
    }

    $scope.changeEmbroideryPosition = function (position, text) {
        $scope.currentModel = productService.changeEmbroideryPosition(position);
        //toaster.pop('success', text, "");
    }

    $scope.changeMockButtonhole = function (mockButtonhole) {
        $scope.currentModel = productService.changeMockButtonhole(mockButtonhole);
    }

    $scope.changeSuitMenu = function (id) {
        $scope.suitMenuID = id;
    }

    $scope.bodyCss = function (classname) {
        $("#body").attr("class", classname);
    }

    $scope.changeTabSelected = function (id) {
        $scope.tabSelectedID = id;
    }

    $scope.changeCrftItem = function ($event, craft, itemNo) {
        var obj = null;
        if ($event != null) {
            var objHtml = $event.currentTarget;
            obj = {};
            obj.type = $(objHtml).attr("type");
            obj.craft = $(objHtml).attr("craft");
            $scope.currentModel = productService.changeMenuAlterSign($scope.suitMenuID);
        }
        changeCrftItem(obj, craft, itemNo);
    };

    /**
     * 轮播：针对手机、平板
     */
    $scope.resetCarousel = function () {
        $(".slider-group:first").css({
            "transform": "translate3d(0px, 0px, 0px) translateZ(0px)",
            "transition-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)",
            "transition-duration": "0ms"
        });
    }
    $scope.carousel = function (id) {
        var nodeSize;
        var index = 0;
        $scope.currentModel = productService.currentModel;
        if ($scope.currentModel.styleIndex != undefined && $scope.currentModel.styleIndex != 0) {
            index = $scope.currentModel.styleIndex;
            $(".slider-group:first").css({
                "transform": "translate3d(" + (-unitLength * index) + "px, 0px, 0px) translateZ(0px)",
                "transition-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)",
                "transition-duration": "0ms"
            });
        }
        var carousel = document.getElementById(id);
        carousel.addEventListener('touchstart', function (event) {
            var onMove = function (event) {
                event = event || window.event;
                lastY = event.touches[0].clientY;
                if (horizontalMove == 0) {
                    if (lastY - startY > -10 && lastY - startY < 10) {
                        event.preventDefault();
                        horizontalMove = 1;
                    } else {
                        horizontalMove = -1;
                    }
                }
                if (horizontalMove == 1) {
                    startX_t = startX;
                    lastX_t = event.touches[0].clientX;
                    moveLength = lastX_t - startX_t;
                    shiftX = -unitLength * index + moveLength;
                    $scope.currentModel = productService.currentModel;
                    index = $scope.currentModel.styleIndex;
                    if (Math.abs(moveLength) > 0) {
                        if ((index == nodeSize - 1 && moveLength < 0) || (index == 0 && moveLength > 0))
                            return;
                        transform(shiftX);
                    }
                }
            };
            var onEnd = function (event) {
                event = event || window.event;
                if (horizontalMove == 1) {
                    lastX = event.changedTouches[0].clientX;
                    shiftX_t = lastX - startX;
                    if (shiftX_t > 10 || shiftX_t < -10) {
                        console.log("当前状态index:" + index)
                        if (index == 0 && shiftX_t > 0) {

                        } else if (index == nodeSize - 1 && shiftX_t < 0) {

                        } else {
                            shiftX_t < 0 ? index++ : index--;
                            transform(-unitLength * index);

                            $(".indicator").each(function (idx, em) {
                                if (idx == index) {
                                    $(em).addClass("active");
                                    //改变款型
                                    $scope.currentModel = productService.currentModel;
                                    var style = $scope.currentModel.selectedSceneContent.styles[index].style;
                                    obj = {};
                                    obj.type = $(em).attr("type");
                                    obj.craft = $(em).attr("craft");
                                    $scope.currentModel = productService.changeStyle(style, index, obj);
                                    $scope.$apply();//需要手动刷新
                                } else {
                                    $(em).removeClass("active");
                                }
                            });
                        }
                        console.log("运行后状态index:" + index)
                    }
                }
                carousel.removeEventListener("touchmove", onMove, false);
                carousel.removeEventListener("touchend", onEnd, false);
            };
            var transform = function (shiftX) {
                $(".slider-group:first").css({
                    "transform": "translate3d(" + shiftX + "px, 0px, 0px) translateZ(0px)",
                    "transition-timing-function": "cubic-bezier(0.165, 0.84, 0.44, 1)",
                    "transition-duration": "1000ms"
                });
            };
            event = event || window.event;
            unitLength = $("body").width();
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;
            horizontalMove = 0;
            carousel.addEventListener('touchmove', onMove, false);
            carousel.addEventListener('touchend', onEnd, false);
            nodeSize = $(".slider-group:first .slider-item").length;
        }, false);
    }

    $scope.bodyCss("");
    if ($scope.prodPartXian == null || $scope.prodPartXian == undefined) {
        var parts = COM_CORE_DATA_CONSTANTS.parts;
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].type == "prod.part.xian") {
                $scope.prodPartXian = parts[i].data;
            } else if (parts[i].type == "prod.part.lingdai") {
                $scope.prodPartLingdai = parts[i].data;
            } else if (parts[i].type == "prod.part.kouzi") {
                $scope.prodPartKouzi = parts[i].data;
            }
        }
        ;
        for (var i = 0; i < COM_CORE_DATA_CONSTANTS.fabrics.length; i++) {
            COM_CORE_DATA_CONSTANTS.fabrics[i].scenes = COM_CORE_DATA_CONSTANTS.fabricToScenes[COM_CORE_DATA_CONSTANTS.fabrics[i].no];
        }
        for (var i = 0; i < COM_CORE_DATA_CONSTANTS.fabricbrands.length; i++) {
            COM_CORE_DATA_CONSTANTS.fabricbrands[i].scenes = COM_CORE_DATA_CONSTANTS.fabricBrandToScenes[COM_CORE_DATA_CONSTANTS.fabricbrands[i].no];
        }
        $scope.fabricinfos = COM_CORE_DATA_CONSTANTS.fabrics;
        $scope.fabricbrands = COM_CORE_DATA_CONSTANTS.fabricbrands;

        $scope.storeArray = COM_CORE_DATA_CONSTANTS.storeArray;

        $scope.fabrics = COM_CORE_DATA_CONSTANTS.fabrics;
        $scope.suitScenes = SUIT_CORE_DATA_CONSTANTS.secnes;
        $scope.pantsScenes = PANTS_CORE_DATA_CONSTANTS.secnes;
        $scope.suitCrfs = SUIT_CORE_DATA_CONSTANTS.crafts;
        $scope.shirtCrfs = SHIRT_CORE_DATA_CONSTANTS.crafts;
        $scope.pantsCrfs = PANTS_CORE_DATA_CONSTANTS.crafts;
        $scope.crfPath = "img/crf/";
        $scope.modelSize = "l";
        $scope.postfix = ".png";
    }
    ;

    //清空productService里的数据
    String.prototype.endWith = function (endStr) {
        var d = this.length - endStr.length;
        return (d >= 0 && this.lastIndexOf(endStr) == d)
    }
    if ($location.absUrl().endWith("/home")) {
        productService.clearCurrentModel();
    }


    /** 面料详情控制 */
    $scope.fabHasDesc = function (fabNo) {
        $scope.fabDescUrl = productService.getFabricDescription(fabNo);
        if ($scope.fabDescUrl)
            return true;
        return false;
    }
    $scope.fabDescUrl = '';

    /** 订单返回控制 */

    $scope.backToPreview = function () {
        if (productService.currentModelCategory == "suit") {
            $state.go("home.suit.preview");
        } else if (productService.currentModelCategory == "pants") {
            $state.go("home.pants.preview");
        }
    }

    /** prod price */
    $scope.prodPrice = 0;


    /*
    * 订单页面显示西服相关数据
    */
    $scope.showSuitData = function () {

    }

    /*
    * 订单页面显示西裤相关数据
    */
    $scope.showSuitData = function () {

    }


    var activeClass = 'qrcode-active';
    $scope.showQRCode = function () {
        $('.qrcode-outer').addClass(activeClass);
        $('.qrcode-img-content').addClass(activeClass);
    };

    $scope.hideQRCode = function () {
        $('.qrcode-img-content').removeClass(activeClass);
        $('.qrcode-outer').removeClass(activeClass);
    }

}])
    .controller("MainCtrl", ["$scope", "$state", function ($scope, $state) {
        $scope.bodyCss("pro-bg");
    }])
    .controller("Embroidery", ["$scope", "$state", function ($scope, $state) {
        $scope.bodyCss("personal-bg");
        $scope.changeTabSelected("embroideryTab");
        $scope.remaining = function () {
            if ($scope.currentModel.embroideryText == undefined)
                return 0;
            return $scope.currentModel.embroideryText.length;
        }
    }])
    .controller('myController', function ($scope, productService, toaster) {
        $scope.changeFont = function (fontName, fontNo) {
            $scope.currentModel = productService.changeFont(fontNo);
            toaster.pop('success', fontName, "");
        };
        $scope.changeThreadColor = function (type, colorName, colorNo) {
            $scope.currentModel = productService.changeThreadColor(type, colorNo);
            toaster.pop('success', colorName, "");
        };
        $scope.fabCanPreviewEmbroidery = function () {
            return !!productService.getFabricXLPicture($scope.currentModel.fabric.no);
        }

        $scope.showWinCiXiu = false;
        $scope.previewUrl = '';
        $scope.testText = '';
        $scope.cixiuClass = '';
        $scope.fontColor = '';

        $scope.openCiXiuPreview = function (colorName, colorNo) {
            $scope.showWinCiXiu = true;
            $scope.testText = $scope.currentModel.embroideryPosition + " "
            $scope.currentModel.selectedFont + " "
            $scope.currentModel.embroideryText;

            var imgName = '';
            if ($scope.currentModel.embroideryPosition == 'lower pocket') {
                imgName = 'embroidery_1.png';
                $scope.cixiuClass = 'preview_lower_pocket';
            } else if ($scope.currentModel.embroideryPosition == 'collar back') {
                imgName = 'embroidery_2.png';
                $scope.cixiuClass = 'preview_collar_back';
            } else if ($scope.currentModel.embroideryPosition == 'wristband') {
                imgName = 'embroidery_3.png';
                $scope.cixiuClass = 'preview_wristband';
            }
            $scope.previewUrl = 'img/suit/' + imgName;
            $scope.previewUrl = 'img/crf/fabric/xl/' + $scope.currentModel.fabric.no + '.jpg';

            $scope.pickColor();
            var totalH = $("header").innerHeight() + $("nav").innerHeight(), winH = $(window).height();
            $("#cixiuPopup").height(winH - totalH).css("top", totalH);
        };
        $scope.closeCiXiuPreview = function (colorName, colorNo) {
            $scope.showWinCiXiu = false;
        };

        $scope.checkPreviewEnabled = function () {
            if ($scope.currentModel.embroideryPosition &&
                $scope.currentModel.selectedFont &&
                $scope.currentModel.embroideryColor &&
                $scope.currentModel.embroideryText) {

                return false;
            }
            return true;
        };
        $scope.pickColor = function () {
            $scope.fontColor = "black";
            if ($scope.prodPartXian) {
                var xian = null;
                for (var i = 0; i < $scope.prodPartXian.length; i++) {
                    xian = $scope.prodPartXian[i];
                    if (xian.no == $scope.currentModel.embroideryColor) {
                        $scope.fontColor = xian.color;
                        break;
                    }
                }
            }
        }
    })
    /*
    * 订单
    */
    .controller("OrderCtrl", ["$scope", "$state", "productService", "OrderService", function ($scope, $state, productService, OrderService) {
        //订单order是在进入3D预览页面时立即生成的


        var curContact = getCurrentContact();
        if (curContact) {
            currentOrderName = curContact.name;
            currentOrderPhone = curContact.mobile;
            currentOrderAddress = curContact.address;
        }
        var order = getCurrentOrder();
        //点击地址跳转至收货地址页面
        $scope.goContact = function () {
            $state.go("contact");
        }
        //选择西裤、领带
        $scope.selectOther = function (type) {
            var itemno = getCurrentParam("orderitemno");
            var orderitem = order.items[itemno];

            if (type == 'pants') {
                //增加西裤和领带
                var isSelPants = $scope.order.selPants;
                console.info("order.isSelPants:" + isSelPants);
                if (isSelPants) {//若勾选西裤
                    var pantsItem = {}
                    var pantsItemno = Date.parse(new Date());
                    setCurrentParam("suit_pants_orderitemno", pantsItemno);

                    pantsItem.itemno = pantsItemno;
                    pantsItem.fabric = orderitem.fabric;
                    pantsItem.proNum = orderitem.proNum;
                    pantsItem.unitPrice = productService.retrieveProdPrice(orderitem.fabric.no, "pants");
                    pantsItem.totalPrice = pantsItem.unitPrice * pantsItem.proNum;
                    order.items[pantsItemno] = pantsItem;
                    order.num = order.num + pantsItem.proNum;
                    order.totalPrice = order.totalPrice + pantsItem.totalPrice;
                    order.unitPrice = order.unitPrice + pantsItem.unitPrice;
                } else {
                    var pantsItemno = getCurrentParam("suit_pants_orderitemno");
                    var pantsItem = order.items[pantsItemno];
                    order.num = order.num - pantsItem.proNum;
                    order.totalPrice = order.totalPrice - pantsItem.totalPrice;
                    order.unitPrice = order.unitPrice - pantsItem.unitPrice;
                    delete order.items[pantsItemno];
                }
            } else if (type == 'tie') {
                //增加或减去领带
                var isSelTie = $scope.order.selTie;
                console.info("order.isSelTie:" + isSelTie);
                if (isSelTie) {//若勾选领带
                    var tieItem = {}
                    var tieItemno = (new Date()).valueOf();
                    setCurrentParam("suit_tie_orderitemno", tieItemno);
                    tieItem.itemno = tieItemno;
                    tieItem.fabric = orderitem.fabric;
                    tieItem.proNum = orderitem.proNum;
                    tieItem.unitPrice = 158;
                    tieItem.totalPrice = tieItem.unitPrice * tieItem.proNum;

                    var part = orderitem.parts['prod.part.lingdai'];

                    var html = '<img style="" src="' + suit_crfImgPath + part.type + '/l/' + part.no + '.png">';
                    tieItem.imgHtml = html;
                    order.items[tieItemno] = tieItem;
                    order.num = order.num + tieItem.proNum;
                    order.totalPrice = order.totalPrice + tieItem.totalPrice;
                    order.unitPrice = order.unitPrice + tieItem.unitPrice;
                } else {
                    var tieItemno = getCurrentParam("suit_tie_orderitemno");
                    var tieItem = order.items[tieItemno];
                    order.num = order.num - tieItem.proNum;
                    order.totalPrice = order.totalPrice - tieItem.totalPrice;
                    order.unitPrice = order.unitPrice - tieItem.unitPrice;
                    delete order.items[tieItemno];
                }
            }
            setCurrentOrder(order);
            $scope.order.unitPrice = order.unitPrice;
            $scope.order.totalPrice = order.totalPrice;
        }
        //绑定页面"+","-"按钮
        $scope.reduce = function () {
            if ($scope.order.perProductNum <= 1) {
                return false;
            }
            $scope.order.perProductNum = $scope.order.perProductNum - 1;

            //明细个数
            var itemCount = 0;
            var keys = [];
            for (var key in order.items) {
                if (order.items.hasOwnProperty(key)) {
                    keys[itemCount] = key;
                    itemCount++;
                }
            }
            for (var i = 0; i < itemCount; i++) {
                order.items[keys[i]].proNum -= 1;
                order.items[keys[i]].totalPrice -= order.items[keys[i]].unitPrice;
                order.num -= 1;
            }
            order.totalPrice -= order.unitPrice;
            setCurrentOrder(order);

            $scope.order.totalPrice = order.totalPrice;
        }
        $scope.add = function () {
            $scope.order.perProductNum += 1;

            //明细个数
            var itemCount = 0;
            var keys = [];
            for (var key in order.items) {
                if (order.items.hasOwnProperty(key)) {
                    keys[itemCount] = key;
                    itemCount++;
                }
            }
            for (var i = 0; i < itemCount; i++) {
                order.items[keys[i]].proNum += 1;
                order.items[keys[i]].totalPrice += order.items[keys[i]].unitPrice;
                order.num += 1;
            }
            order.totalPrice += order.unitPrice;
            setCurrentOrder(order);

            $scope.order.totalPrice = order.totalPrice;
        }

        //"提交订单"按钮
        $scope.submitOrder = function () {
            var currentOrder = getCurrentOrder();
            //验证是否有选择收货地址信息
            var currentContact = getCurrentContact();
            if (currentContact == null || currentContact.name == undefined) {
                var winText = "请选择收货地址信息";
                var confirmWin = '<div class="win confirmWin" ng-show=""><div class="win-box"><h5>提示</h5><p>' + winText + '</p><h6><a class="confirm-btn" style="width: 100%;">是</a></h6></div></div>';
                if ($(".confirmWin").length > 0) {
                    $(".confirmWin").show();
                } else {
                    $(document.body).append(confirmWin);
                    $(".confirmWin").show();

                    $(".confirm-btn").on("touchend", function (e) {
                        // $('.confirm-btn').off("touchend");
                        $(".confirmWin").hide();
                    });
                }
                return;
            }

            //封装用户数据
            var storecode = null;
            var usercode = null;
            var employee = getEmployee();
            console.info("currentOrder.employee:" + JSON.stringify(employee));
            if (employee != null && employee != '') {
                storecode = employee.storecode;
                usercode = employee.usercode;
            }
            if (storecode == null || storecode == '') {
                storecode = DEFAULT_STORE;
            }

            var member = {};
            member['mobile'] = contact.mobile;
            member['name'] = contact.name;

            var usercode = currentContact["userCode"];
            /*var openid = getCurrentParam("openid");
            var membercode = getCurrentParam("membercode");
            var usercode = getCurrentParam("usercode");
            member['membercode'] = membercode;
            member['openid'] = openid;
            member['mobile'] = contact.mobile;*/
            //封装订单数据
            currentOrder['contract'] = contact;
            currentOrder['userCode'] = usercode;

            setCurrentOrder(currentOrder);
            // var img = $('#orderItemImg').attr('src');
            OrderService.submitOrder(member, currentOrder, usercode, storecode).then(function (result) {
                // $state.go("payment",{order:result});
                console.log("submitOrder.result:" + JSON.stringify(result));
                $state.go("paymentSuccess", {order: JSON.stringify(result)});
            }, function (err) {
                //deleteCurrentOrder();
                console.info(err);
            })
        }


        $scope.directPay = function () {

            var orderNo = createOrderNo();
            console.info("order:" + orderNo
                + ",name:" + currentOrderName
                + ",phone:" + currentOrderPhone
                + ",address:" + currentOrderAddress);

            //跳转至支付成功页面
            $state.go("paymentSuccess");
        }

        //下面是初始化数据

        $scope.bodyCss("pro-bg");

        //若当前是西服界面，则itemno代表的是西服的订单明细号，若当前是西裤界面，则itemno代表的是西裤的订单明细号
        var itemno = getCurrentParam("orderitemno");
        //西服明细 或 西裤明细
        // var orderitem = order.items[itemno];


        // refresh2DArea(currentModel,"fabric");

        // $scope.suitPantsModel = productService.suitPantsModel;
        // refresh2DArea($scope.suitPantsModel,"suit_pants");

        //---------------封装页面显示用的数据----------------------
        var orderdata = {};
        orderdata.perProductNum = 1;
        orderdata.unitPrice = 0;
        orderdata.totalPrice = 0;
        $scope.getSuitItemData = function (orderitem, orderdata) {
            orderdata.currentModelCategory = 'suit';

            orderdata.suit = {};
            //显示模型相关文本信息
            orderdata.suit.style = orderitem.crafts["XF01"].name;//款型
            orderdata.suit.collar = orderitem.crafts["XF08"].name;//领型
            orderdata.suit.flap = orderitem.crafts["XF02"].name;//下口袋
            orderdata.suit.cuff = orderitem.crafts["XF07"].name;//袖口
            orderdata.suit.breast = orderitem.crafts["XF04"].name;//胸巾袋
            orderdata.suit.slit = orderitem.crafts["XF05"].name;//后开衩
            if (orderitem.crafts["XF13"] != undefined) {
                orderdata.suit.tie = orderitem.parts["prod.part.lingdai"].no;//领带
            }

            //显示个性相关信息
            orderdata.suit.embroideryText = orderitem.embroidery.embroideryText;
            orderdata.suit.embroideryPosition = orderitem.embroidery.embroideryPosition;
            orderdata.suit.embroideryFont = orderitem.embroidery.embroideryFont;
            orderdata.suit.embroideryColor = orderitem.embroidery.embroideryColor;
            orderdata.suit.mockButtonhole = orderitem.embroidery.mockButtonhole;
            orderdata.suit.buttonholeColor = orderitem.embroidery.buttonholeColor;

            //是否选中裤子
            // var pantsItemno = getCurrentParam("suit_pants_orderitemno");
            // if(pantsItemno != undefined && pantsItemno != null){
            //     var pantsItem = order.items[pantsItemno];
            //     orderdata.selPants = true;
            // }else{
            //     orderdata.selPants = false;
            // }
            //是否选中领带
            // var tieItemno = getCurrentParam("suit_tie_orderitemno");
            // if(tieItemno != undefined && tieItemno != null){
            //     var tieItem = order.items[tieItemno];
            //     orderdata.selTie = true;
            // }else{
            //     orderdata.selTie = false;
            // }

            //显示尺寸相关信息
            orderdata.suit.cursize = orderitem.cursize;
            if (orderitem.body != null) {
                orderdata.suit.model = orderitem.body.model;
            }
            orderdata.suit.clothesLengthShifting = orderitem.clothesLengthShifting;
            orderdata.suit.sleeveLengthShifting = orderitem.sleeveLengthShifting;

            //西服上衣数量
            orderdata.suit.proNum = orderitem.proNum;
            //订单每样产品的数量
            // orderdata.perProductNum = orderdata.perProductNum+orderdata.suit.proNum;
            orderdata.unitPrice = orderdata.unitPrice + orderitem.unitPrice;
            orderdata.totalPrice = orderdata.totalPrice + orderitem.totalPrice;
            orderdata.productName = orderdata.suit.style + orderdata.suit.collar + "西服";

            $("#images").html(orderitem.imgHtml);
            // orderdata.suit.itemImg = $scope.drawOrderImg();
            // orderdata.suit.imgType = "image/png";
            // orderdata.suit.imgName = "test.png";
            setTimeout(orderdata.suit.itemImg, 3000);
            return orderdata;
        }

        $scope.getPantsItemData = function (orderitem, orderdata) {
            orderdata.currentModelCategory = 'pants';
            orderdata.pants = {};
            //显示模型相关文本信息
            orderdata.pants.style = orderitem.crafts["XK01"].name;//款型
            orderdata.pants.frontdart = orderitem.crafts["XK02"].name;//前褶
            orderdata.pants.waistbandHead = orderitem.crafts["XK04"].name;//裤腰头
            orderdata.pants.frontPocket = orderitem.crafts["XK05"].name;//前袋
            orderdata.pants.backPocket = orderitem.crafts["XK06"].name;//后袋

            //显示尺寸相关信息
            orderdata.pants.cursize = orderitem.cursize;
            if (orderitem.body != null) {
                orderdata.pants.model = orderitem.body.model;
            }
            orderdata.pants.trousersShifting = orderitem.trousersShifting;

            orderdata.pants.proNum = orderitem.proNum;
            // orderdata.perProductNum = orderdata.perProductNum+orderdata.pants.proNum;
            orderdata.unitPrice = orderdata.unitPrice + orderitem.unitPrice;
            orderdata.totalPrice = orderdata.totalPrice + orderitem.totalPrice;
            orderdata.productName = orderdata.pants.style + orderdata.pants.frontdart + "西裤";

            if (order.isSuitPants) {//若为套装
                $("#pants_images").html(orderitem.imgHtml);
            } else {
                $("#images").html(orderitem.imgHtml);
            }

            return orderdata;
        }

        $scope.items = order.items;
        /*
        *  循环orderitems显示相关item数据
        */
        for (var key in $scope.items) {
            var orderitem = $scope.items[key];
            if (orderitem.style.substring(0, 2) == 'XF') {
                orderdata = $scope.getSuitItemData(orderitem, orderdata);
            } else if (orderitem.style.substring(0, 2) == 'XK') {
                orderdata = $scope.getPantsItemData(orderitem, orderdata);
            }
            //面料
            if (orderdata.fabricName == null || orderdata.fabricName == '') {
                orderdata.fabricName = orderitem.fabric.name;
            }
        }
        if (order.isSuitPants) {//若为套装
            orderdata.productName = orderdata.suit.style + orderdata.suit.collar + "套装";
            orderdata.currentModelCategory = "suit_pants";
        }
        $scope.currentModelCategory = orderdata.currentModelCategory;
        $scope.order = orderdata;

        /*
        *   判断页面div是否显示
        */
        $scope.checkDivShow = function (type) {
            if ($scope.currentModelCategory == "suit_pants") {
                return true;
            } else if ($scope.currentModelCategory == type) {
                return true;
            } else {
                return false;
            }
        }

        //=-----更新订单信息，主要是为订单添加图片---------
        //联系人地址
        var contact = getCurrentContact();
        if (contact != null && contact != '') {
            $scope.isShow = true;
        } else {
            $scope.isShow = false;
            contact = {};
        }
        $scope.contact = contact;

        // orderitem.productName = $scope.order.productName;
        //存入2D模型图片html
        // orderitem.imgHtml = $("#images").html();
        // order.items[itemno] = orderitem;
        order.totalPrice = $scope.order.totalPrice;
        order.unitPrice = $scope.order.unitPrice;
        order.contract = contact;
        setCurrentOrder(order);
        setCurrentContact(contact);
        //console.info("Updated order:"+JSON.stringify(order));
    }])
    .controller("CartCtrl", ["$scope", "$state", "$sce", function ($scope, $state, $sce) {
        $scope.bodyCss("pro-bg");
        $scope.cart = getCart();
        $scope.innerHtml = function (cartItem) {
            return $sce.trustAsHtml(cartItem.imgHtml);
        }

    }])
    .controller("PaymentCtrl", ["$scope", "$state", "$http", "PaymentService", "$stateParams", function ($scope, $state, $http, PaymentService, $stateParams) {
        $scope.bodyCss("pro-bg");
        var currentOrder = $stateParams.order;
        $scope.order = {};
        $scope.order.ordercode = currentOrder.ordercode;
        $scope.order.totalPrice = currentOrder.totalPrice;
        $scope.order.paymentType = 1;
        $scope.openid = getCurrentParam("openid");
        //点击"确认付款"按钮
        $scope.confirmPayment = function (paymentType) {
            var ordercode = $scope.order.ordercode;
            var openid = $scope.openid;
            PaymentService.createPayment(ordercode, paymentType, openid).then(function (result) {
                var orderRecord = result;
                PaymentService.wechatPay(ordercode, orderRecord, paymentType);
            }, function (err) {
                console.error(err);
            })
        }

    }])
    .controller("PaymentSuccessCtrl", ["$scope", "$state", "$stateParams", function ($scope, $state, $stateParams) {
        $scope.bodyCss("pro-bg");
        console.log("PaymentSuccessCtrl.$stateParams.order:" + $stateParams.order);
        var result = JSON.parse($stateParams.order);
        console.log("PaymentSuccessCtrl.result:" + result);
        $scope.ordercode = result.ordercode;
        $scope.orderno = result.orderno;
        $scope.contactname = result.contactname;
        $scope.contactphone = result.contactphone;
        $scope.contactaddress = result.contactaddress;
        $scope.paymenttype = result.paymenttype;
        $scope.totalPrice = result.totalPrice;

        $scope.showOrderDetail = function (ordercode) {
            $state.go("orderDetail", {ordercode: ordercode});
        }
    }])
    .controller("StandardCtrl", ["$scope", "$state", "productService", function ($scope, $state, productService) {
        //选择身型
        $scope.changeBodyType = function (size) {
            productService.changeMeasureTempAttr("cursize", size);
            productService.changeMeasureTempAttr("clothesLengthShifting", 0);
            productService.changeMeasureTempAttr("sleeveLengthShifting", 0);
            $scope.currentModel = productService.changeMeasureTempAttr("trousersShifting", 0);
            if (productService.currentModelCategory == "suit") {
                productService.changeMeasureTempAttr("sizeArr", suitSizeArr);
            } else if (productService.currentModelCategory == "pants") {
                productService.changeMeasureTempAttr("sizeArr", pantsSizeArr);
            } else if (productService.currentModelCategory == "shirt") {
                productService.changeMeasureTempAttr("sizeArr", shirtSizeArr);
            }

            $scope.currentModel = productService.resetMeasureInfos();
            //$scope.changeSize(0);
        }
        //选择套装西裤身型
        $scope.changeItemBodyType = function (size, itemType) {
            productService.changeMeasureTempAttr("cursize", size, itemType);
            $scope.currentModel = productService.changeMeasureTempAttr("trousersShifting", 0, itemType);
            productService.changeMeasureTempAttr("sizeArr", pantsSizeArr, itemType);

            $scope.currentModel = productService.resetMeasureInfos();
            $scope.suitPantsModel = productService.suitPantsModel;
            //$scope.changeSize(0);
        }
        //选择尺寸
        $scope.changeSize = function (sizeIndex) {
            $scope.currentModel = productService.changeMeasureTempAttr("sizeIndex", sizeIndex);
            $scope.currentModel = productService.changeMeasureAttr("model", $scope.currentModel.body_.sizeArr[$scope.currentModel.body_.cursize][sizeIndex]);
            $scope.saveBodyData();
            $scope.showSizeDetail(true);
        }
        //选择套装西裤尺寸
        $scope.changeItemSize = function (sizeIndex, itemType) {
            productService.changeMeasureTempAttr("sizeIndex", sizeIndex, itemType);
            $scope.currentModel = productService.changeMeasureAttr("model", $scope.suitPantsModel.body_.sizeArr[$scope.suitPantsModel.body_.cursize][sizeIndex], itemType);
            $scope.saveBodyData('pants');
            $scope.showItemSizeDetail(true);
        }
        //修改衣长、袖长和裤长
        $scope.changeInch = function (part, step) {
            if (productService.currentModel.body == undefined || productService.currentModel.body == null) {
                return;
            }
            if (part == "clothesLengthShifting") {
                var temp = $scope.currentModel.body_.clothesLengthShifting;
                temp += step;
                if (temp > 2 || temp < -2 || Math.abs(step) != 1) {
                    return;
                }
                productService.changeMeasureTempAttr("clothesLengthShifting", temp);
                $scope.saveBodyData();
            } else if (part == "sleeveLengthShifting") {
                var temp = $scope.currentModel.body_.sleeveLengthShifting;
                temp += step;
                if (temp > 2 || temp < -2 || Math.abs(step) != 1) {
                    return;
                }
                productService.changeMeasureTempAttr("sleeveLengthShifting", temp);
                $scope.saveBodyData();
            } else if (part == "trousersShifting") {
                var temp = $scope.currentModel.body_.trousersShifting;
                temp += step;
                if (temp > 2 || temp < -2 || Math.abs(step) != 1) {
                    return;
                }
                productService.changeMeasureTempAttr("trousersShifting", temp);
                $scope.saveBodyData();
            }
        }
        //修改套装裤长
        $scope.changeItemInch = function (part, step, itemType) {
            if (productService.suitPantsModel.body == undefined || productService.suitPantsModel.body == null) {
                return;
            }
            if (part == "trousersShifting") {
                var temp = $scope.suitPantsModel.body_.trousersShifting;
                temp += step;
                if (temp > 2 || temp < -2 || Math.abs(step) != 1) {
                    return;
                }
                productService.changeMeasureTempAttr("trousersShifting", temp, itemType);
                $scope.saveBodyData('pants');
            }
        }
        /*
        *   保存量体数据
        */
        $scope.saveBodyData = function (itemType) {
            if (itemType == undefined) {
                $scope.currentModelCategory = productService.currentModelCategory;
                var cursize = $scope.currentModel.body_.cursize;
                var bodyArr = sizeHelper[cursize][$scope.currentModelCategory];
                var sizeIndex = $scope.currentModel.body_.sizeIndex;
                if (bodyArr != null) {
                    for (var key in bodyArr) {
                        if (bodyArr.hasOwnProperty(key)) {
                            var element = bodyArr[key];
                            productService.changeMeasureAttr(key, element[sizeIndex]);
                        }
                    }
                }
                if ($scope.currentModelCategory == "suit") {
                    var clothesLengthShifting = $scope.currentModel.body_.clothesLengthShifting;
                    var sleeveLengthShifting = $scope.currentModel.body_.sleeveLengthShifting;
                    productService.changeMeasureAttr('coat_xiuchang', Number(bodyArr.coat_xiuchang[sizeIndex]) + Number(sleeveLengthShifting));
                    productService.changeMeasureAttr('coat_qianyichang', Number(bodyArr.coat_qianyichang[sizeIndex]) + Number(clothesLengthShifting));

                    $scope.currentModel = productService.currentModel;
                } else if ($scope.currentModelCategory == "pants") {
                    var cursize = $scope.currentModel.body_.cursize;
                    var sizeIndex = $scope.currentModel.body_.sizeIndex;
                    var trousersShifting = $scope.currentModel.body_.trousersShifting;
                    productService.changeMeasureAttr('pants_kuchang', Number(bodyArr.pants_kuchang[sizeIndex]) + Number(trousersShifting));

                    $scope.currentModel = productService.currentModel;
                } else if ($scope.currentModelCategory == "shirt") {
                    var shirtShifting = $scope.currentModel.body_.trousersShifting;
                    productService.changeMeasureAttr('shirt_yichang', Number(bodyArr.shirt_yichang[sizeIndex]) + Number(shirtShifting));

                    $scope.currentModel = productService.currentModel;
                }

                currentModel['body'] = $scope.currentModel.body;
            } else if (itemType == 'pants') {
                var cursize = $scope.suitPantsModel.body_.cursize;
                var bodyArr = sizeHelper[cursize]['pants'];
                var sizeIndex = $scope.suitPantsModel.body_.sizeIndex;
                if (bodyArr != null) {
                    for (var key in bodyArr) {
                        if (bodyArr.hasOwnProperty(key)) {
                            var element = bodyArr[key];
                            productService.changeMeasureAttr(key, element[sizeIndex], 'pants');
                        }
                    }
                }

                var cursize = $scope.suitPantsModel.body_.cursize;
                var sizeIndex = $scope.suitPantsModel.body_.sizeIndex;
                var trousersShifting = $scope.suitPantsModel.body_.trousersShifting;
                productService.changeMeasureAttr('pants_kuchang', Number(bodyArr.pants_kuchang[sizeIndex]) + Number(trousersShifting), 'pants');

                $scope.suitPantsModel = productService.suitPantsModel;

            }
        }

        $scope.showSizeDetail = function (changeSize) {
            $scope.currentModelCategory = productService.currentModelCategory;
            var sizeIndex = $scope.currentModel.body_.sizeIndex;
            var sizeDetails = sizeHelper[$scope.currentModel.body_.cursize][$scope.currentModelCategory];
            var sizeCapacity = 3;
            if ((changeSize != undefined && !$("#sizeDetail").is(":hidden")) || (changeSize == undefined && $("#sizeDetail").is(":hidden"))) {
                if (sizeIndex == undefined || sizeIndex == 0) {
                    $scope.helperSize = {};
                    for (key in sizeDetails) {
                        if (sizeDetails.hasOwnProperty(key)) {
                            $scope.helperSize[key] = [];
                            var emSizeDetails = sizeDetails[key];
                            for (var i = 0; i < emSizeDetails.length && i < sizeCapacity; i++) {
                                $scope.helperSize[key][i] = emSizeDetails[i];
                            }
                        }
                    }
                } else if (sizeIndex == sizeDetails['model'].length - 1) {
                    sizeIndex = sizeIndex - 2;
                    if (sizeIndex < 0)
                        sizeIndex = 0;
                    $scope.helperSize = {};
                    for (key in sizeDetails) {
                        if (sizeDetails.hasOwnProperty(key)) {
                            $scope.helperSize[key] = [];
                            var emSizeDetails = sizeDetails[key];
                            for (var i = sizeIndex, j = 0; i < emSizeDetails.length && j < sizeCapacity; i++, j++) {
                                $scope.helperSize[key][j] = emSizeDetails[i];
                            }
                        }
                    }
                } else {
                    sizeIndex = sizeIndex - 1;
                    if (sizeIndex < 0)
                        sizeIndex = 0;
                    $scope.helperSize = {};
                    for (key in sizeDetails) {
                        if (sizeDetails.hasOwnProperty(key)) {
                            $scope.helperSize[key] = [];
                            var emSizeDetails = sizeDetails[key];
                            for (var i = sizeIndex, j = 0; i < emSizeDetails.length && j < sizeCapacity; i++, j++) {
                                $scope.helperSize[key][j] = emSizeDetails[i];
                            }
                        }
                    }
                }
            }
            if (changeSize == undefined) {
                $("#sizeDetail").toggle();
            }
        }
        $scope.showItemSizeDetail = function (changeSize) {
            var sizeIndex = $scope.suitPantsModel.body_.sizeIndex;
            var sizeDetails = sizeHelper[$scope.suitPantsModel.body_.cursize]['pants'];
            var sizeCapacity = 3;
            if ((changeSize != undefined && !$("#suitPantsSizeDetail").is(":hidden")) || (changeSize == undefined && $("#suitPantsSizeDetail").is(":hidden"))) {
                if (sizeIndex == undefined || sizeIndex == 0) {
                    $scope.suitPantsHelperSize = {};
                    for (key in sizeDetails) {
                        if (sizeDetails.hasOwnProperty(key)) {
                            $scope.suitPantsHelperSize[key] = [];
                            var emSizeDetails = sizeDetails[key];
                            for (var i = 0; i < emSizeDetails.length && i < sizeCapacity; i++) {
                                $scope.suitPantsHelperSize[key][i] = emSizeDetails[i];
                            }
                        }
                    }
                } else if (sizeIndex == sizeDetails['model'].length - 1) {
                    sizeIndex = sizeIndex - 2;
                    if (sizeIndex < 0)
                        sizeIndex = 0;
                    $scope.suitPantsHelperSize = {};
                    for (key in sizeDetails) {
                        if (sizeDetails.hasOwnProperty(key)) {
                            $scope.suitPantsHelperSize[key] = [];
                            var emSizeDetails = sizeDetails[key];
                            for (var i = sizeIndex, j = 0; i < emSizeDetails.length && j < sizeCapacity; i++, j++) {
                                $scope.suitPantsHelperSize[key][j] = emSizeDetails[i];
                            }
                        }
                    }
                } else {
                    sizeIndex = sizeIndex - 1;
                    if (sizeIndex < 0)
                        sizeIndex = 0;
                    $scope.suitPantsHelperSize = {};
                    for (key in sizeDetails) {
                        if (sizeDetails.hasOwnProperty(key)) {
                            $scope.suitPantsHelperSize[key] = [];
                            var emSizeDetails = sizeDetails[key];
                            for (var i = sizeIndex, j = 0; i < emSizeDetails.length && j < sizeCapacity; i++, j++) {
                                $scope.suitPantsHelperSize[key][j] = emSizeDetails[i];
                            }
                        }
                    }
                }
            }
            if (changeSize == undefined) {
                $("#suitPantsSizeDetail").toggle();
            }
        }

        //初始化数据
        $scope.currentModel = productService.currentModel;
        if ($scope.currentModel.body == undefined) {
            $scope.changeBodyType("A");
        }
        $scope.suitPantsModel = productService.suitPantsModel;
        if ($scope.suitPantsModel != '' && $scope.suitPantsModel != null && $scope.suitPantsModel.body == undefined) {
            $scope.changeItemBodyType("A", 'pants');
            $scope.suitPantsModel = productService.suitPantsModel;
        }

        $scope.changeTabSelected("standardTab");
    }])
    .controller("ContactCtrl", ["$scope", "$state", "$http", "ContactService", function ($scope, $state, $http, ContactService) {
        $scope.bodyCss("pro-bg");
        /*
        *	获取用户联系人列表
        */
        var membercode = getCurrentParam("membercode");
        // ContactService.findContractList().then(function(result){
        //     $scope.contactlist=result;
        // },function(err){
        //     console.info(err);
        // })

        // //点击新建收货地址
        // $scope.goNewContact = function(code){
        //     $state.go("newContact",{contactCode:code});
        // }
        // //点击选择收货地址
        // $scope.selected = function(contact){
        //     setCurrentContact(contact);
        //     $state.go("confirm");
        // }


        $scope.contact = getCurrentContact();
        if ($scope.contact == null) {
            $scope.contact = {};
        }

        currentOrderName = $scope.contact.name = "";
        currentOrderPhone = $scope.contact.mobile = "";
        currentOrderAddress = $scope.contact.address = "";
        $scope.saveCantact = function () {
            setCurrentContact($scope.contact);

            // currentOrderName=$scope.contact.name;
            // currentOrderPhone=$scope.contact.mobile;
            // currentOrderAddress=$scope.contact.address;
            $state.go("order");
        }

        /*
        * 获取所有预订单列表
        */
        ContactService.findBookingOrders().then(function (result) {
            $scope.orderList = result.orderArray;
            console.info("findBookingOrders.orderList:" + JSON.stringify($scope.orderList));
            $scope.orderJson = result.orderJson;
        }, function (err) {
            console.info(err);
        });

    }])
    .controller("NewContactCtrl", ["$scope", "$state", "$stateParams", "$http", "ContactService", function ($scope, $state, $stateParams, $http, ContactService) {
        $scope.bodyCss("");
        var membercode = getCurrentParam("membercode");
        var contactCode = $stateParams.contactCode;
        var currentContact = "";
        contactList = getContactList();
        if (contactList != null && contactList.length > 0) {
            for (var i = 0; i < contactList.length; i++) {
                if (contactList[i].contactCode == contactCode) {
                    currentContact = contactList[i];
                }
            }
        }

        $scope.contact = currentContact;
        $scope.saveCantact = function () {
            var contact = $scope.contact;
            if (contact.contactCode != null && contact.contactCode != '') {//更新联系人信息
                ContactService.upateContract(contact).then(function (result) {
                    $scope.contact = result;
                    setCurrentContact($scope.contact);
                    $state.go("confirm");
                }, function (err) {
                    console.info(err);
                })
            } else {//新增联系人信息
                ContactService.addContract(contact).then(function (result) {
                    $scope.contact = result;
                    setCurrentContact($scope.contact);
                    $state.go("confirm");
                }, function (err) {
                    console.info(err);
                })
            }
        }
    }])

    // }])
    /*
    *   订单列表
    */
    .controller("OrderListeCtrl", ["$scope", "$state", "OrderService", "$sce", "$http", function ($scope, $state, OrderService, $sce, $http) {
        $scope.bodyCss("pro-bg");

        OrderService.findOrderList().then(function (result) {
            $scope.orderlist = result;
            if ($scope.orderlist != null && $scope.orderlist != '') {
                $scope.addOrderList = $scope.orderlist.addOrder;
                $scope.paidOrderList = $scope.orderlist.paidOrder;
                $scope.allOrderList = $scope.orderlist.allOrder;
            }
            $scope.innerHtml = function (order) {
                return $sce.trustAsHtml(order.description);
            }
        }, function (err) {
            console.info(err);
        })

        $scope.type = "isAll";
        $scope.cartOrderList = function (type) {
            $scope.type = type;
        }

        $scope.showOrderDetail = function (ordercode) {
            $state.go("orderDetail", {ordercode: ordercode});
        }

    }])
    /*
    *   订单详情
    */
    .controller("OrderDetailCtrl", ["$scope", "$state", "OrderService", "$stateParams", "$http", "$sce", function ($scope, $state, OrderService, $stateParams, $http, $sce) {
        $scope.bodyCss("pro-bg");
        var ordercode = $stateParams.ordercode;
        OrderService.showOrderDetail(ordercode).then(function (result) {
            $scope.order = result;
            console.info("OrderDetailCtrl.order:" + JSON.stringify($scope.order));
            $scope.innerHtml = function (item) {
                return $sce.trustAsHtml(item.description);
            }
        }, function (err) {
            console.info(err);
        })

    }])
    // }])
    /*
    *   设计列表
    */
    .controller("DesignListCtrl", ["$scope", "$state", "DesignService", "$sce", "$http", function ($scope, $state, DesignService, $sce, $http) {
        $scope.bodyCss("pro-bg");

        DesignService.searchDesignList().then(function (result) {
            $scope.designlist = result;
        }, function (err) {
            console.info(err);
        });

        $scope.showDesignDetail = function (designcode) {
            $state.go("designDetail", {designcode: designcode});
        }

    }])
    /*
    *   设计详情
    */
    .controller("DesignDetailCtrl", ["$scope", "$state", "DesignService", "$stateParams", "$http", function ($scope, $state, DesignService, $stateParams, $http) {
        $scope.bodyCss("pro-bg");
        var designcode = $stateParams.designcode;
        DesignService.showDesignDetail(designcode).then(function (result) {
            $scope.design = result;
            $scope.qrcodeimageurl = SALES_HOST + 'image?id=' + $scope.design.qrcodeimage;
        }, function (err) {
            console.info(err);
        })

    }])

;


function translateXianToColor(xianNo) {
    return "red";

}


